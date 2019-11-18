import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchTerm = null;
  @Output() searchgiphs = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  searchGiphs() {
    this.searchgiphs.emit(this.searchTerm);
  }
}
