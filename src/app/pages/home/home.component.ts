import { Component } from '@angular/core';
import { GiphService } from './services/giph.service';
import { Giph } from './models/giph.model';
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent {
  giphList: Giph[] = [];
  displayList: Giph[] = [];

  // MatPaginator Inputs
  listLength = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private giphSrvc: GiphService) { }

  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateDisplayList();
  }

  onSearchTermChange(e: string) {
    this.giphSrvc.getGiphList(e, this.pageIndex, this.pageSize)
      .subscribe(res => {
        this.giphList = res;
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
    this.displayList = this.giphList.slice(startIndex, endIndex);
  }

}
