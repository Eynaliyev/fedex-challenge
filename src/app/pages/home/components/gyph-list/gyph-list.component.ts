import { Component, OnInit } from '@angular/core';
import { Gyph } from '@/app/pages/home/models/gyph.model';
@Component({
  selector: 'gyph-list',
  templateUrl: './gyph-list.component.html',
  styleUrls: ['./gyph-list.component.scss']
})
export class GyphListComponent implements OnInit {
  gyphs: Gyph[] = [];
  constructor() { }

  ngOnInit() {
  }
  trackByFn(index, item) {
    if (!item) return null;
    return item.id;
  }
}
