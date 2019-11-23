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
  displayList: Gyph[] = [];
  // MatPaginator Inputs
  listLength = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private gyphSrvc: GyphService) { }

  ngOnInit() {
  }
  /* TODO:
  page size shouldn't change the loading - jsut displaying - pass it to the list and
  / create display list prop that returns start and end indexed images
  add bad words filtering
  */

  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateDisplayList();
  }

  onSearchTermChange(e) {
    this.gyphSrvc.getGyphList(e, this.pageIndex, this.pageSize)
      .subscribe(res => {
        this.gyphList = res;
        this.listLength = res.length;
        this.resetPaginator();
      });
  }

  resetPaginator() {
    this.pageIndex = 0;
    this.updateDisplayList();
  }

  updateDisplayList() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = (this.pageIndex + 1) * this.pageSize;
    this.displayList = this.gyphList.slice(startIndex, endIndex);
  }

}
