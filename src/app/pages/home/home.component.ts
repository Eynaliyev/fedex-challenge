import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GiphService } from './services/giph.service';
import { Giph } from './models/giph.model';
import Filter from 'bad-words';
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  giphList: Giph[] = [];
  displayList: Giph[] = [];
  // MatPaginator Inputs
  listLength = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  filter = new Filter();
  showProfanityWarning = false;

  constructor(private giphSrvc: GiphService) { }

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
    if (this.filter.isProfane(e)) {
      this.showProfanityWarning = true;
    } else {
      this.showProfanityWarning = false;
      this.giphSrvc.getGiphList(e, this.pageIndex, this.pageSize)
        .subscribe(res => {
          this.giphList = res;
          this.listLength = res.length;
          this.resetPaginator();
        });
    }
  }

  resetPaginator() {
    this.pageIndex = 0;
    this.updateDisplayList();
  }

  updateDisplayList() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = (this.pageIndex + 1) * this.pageSize;
    this.displayList = this.giphList.slice(startIndex, endIndex);
  }

}
