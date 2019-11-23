import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GyphService } from './services/gyph.service';
import { Gyph } from './models/gyph.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  gyphList: Gyph[] = [];
  // MatPaginator Inputs
  listLength = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchTerm = '';

  constructor(private gyphSrvc: GyphService) { }

  ngOnInit() {
  }

  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.searchGiphs();
  }

  onSearchTermChange(e) {
    this.searchTerm = e;
    this.searchGiphs();
  }

  searchGiphs() {
    this.gyphSrvc.getGyphList(this.searchTerm, this.pageIndex, this.pageSize)
      .subscribe(res => {
        this.gyphList = res;
        this.listLength = res.length;
      });
    console.log(this.searchTerm, this.pageIndex, this.pageSize);
  }
}
