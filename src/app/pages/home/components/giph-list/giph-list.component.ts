import { Component, OnInit, Input } from '@angular/core';
import { giph } from '@/app/pages/home/models/giph.model';
@Component({
  selector: 'giph-list',
  templateUrl: './giph-list.component.html',
  styleUrls: ['./giph-list.component.scss']
})
export class giphListComponent implements OnInit {
  @Input() giphs: giph[];
  @Input() showProfanityWarning: boolean;

  constructor() { }

  ngOnInit() {
  }
  trackByFn(index, item) {
    if (!item) return null;
    return item.id;
  }
}
