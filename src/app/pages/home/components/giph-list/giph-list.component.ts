import { Component, OnInit, Input } from '@angular/core';
import { Giph } from '@/app/pages/home/models/giph.model';
@Component({
  selector: 'giph-list',
  templateUrl: './giph-list.component.html',
  styleUrls: ['./giph-list.component.scss']
})
export class GiphListComponent {
  @Input() giphs: Giph[];

  constructor() { }

  trackByFn(index, item: Giph) {
    if (!item) return null;
    return item.id;
  }
}
