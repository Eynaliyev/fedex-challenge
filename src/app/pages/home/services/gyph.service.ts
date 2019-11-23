import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "@/environments/environment";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Gyph } from '../models/gyph.model';

@Injectable({
  providedIn: 'root'
})
export class GyphService {
  baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${environment.api_key}`;
  constructor(private http: HttpClient) { }

  getGyphList(
    query: string = '',
    pageIndex: number = 1,
    pageSize: number = 10
  ): Observable<Gyph[]> {
    const limit = pageSize * pageIndex;
    const offset = (pageIndex - 1) * pageSize;
    const gyphsListUrl =
      this.baseUrl +
      `&q=${query}&limit=${limit}&offset=${offset}&rating=PG-13&lang=en`;

    return this.http
      .get(gyphsListUrl)
      .pipe(map(response => this.responseToGyph(response)));
  }

  responseToGyph(response): Gyph[] {
    const items: any[] = response.data;
    const res = items.map(item => this.toGyph(item));
    return res;
  }

  toGyph(item): Gyph {
    const result = {
      id: item.id,
      url: item.url
    };
    return result;
  }
}
