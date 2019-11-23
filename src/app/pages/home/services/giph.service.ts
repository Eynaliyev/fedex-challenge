import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "@/environments/environment";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { giph } from '../models/giph.model';

@Injectable({
  providedIn: 'root'
})
export class GiphService {
  baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${environment.api_key}`;
  constructor(private http: HttpClient) { }

  getgiphList(
    query: string = '',
    pageIndex: number = 1,
    pageSize: number = 10
  ): Observable<giph[]> {
    const limit = 200; // could potentially extend the functionality to make this
    const offset = pageIndex * pageSize;
    const giphsListUrl =
      this.baseUrl +
      `&q=${query}&limit=${limit}&offset=${offset}&rating=PG&lang=en`;

    return this.http
      .get(giphsListUrl)
      .pipe(map(response => this.responseTogiph(response)));
  }

  responseTogiph(response): giph[] {
    const items: any[] = response.data;
    const res = items.map(item => this.togiph(item));
    return res;
  }

  togiph(item): giph {
    const result = {
      id: item.id,
      url: item.images.downsized_large.url
    };
    return result;
  }
}
