import { Component, OnInit, Input } from '@angular/core';
import { Giph } from '@/app/pages/home/models/giph.model';
@Component({
  selector: 'giph-list',
  templateUrl: './giph-list.component.html',
  styleUrls: ['./giph-list.component.scss']
})
export class GiphListComponent implements OnInit {
  @Input() giphs: Giph[];

  constructor() { }

  ngOnInit() {
  }
  trackByFn(index, item: Giph) {
    if (!item) return null;
    return item.id;
  }
}
