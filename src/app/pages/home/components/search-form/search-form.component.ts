import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  radius = '10000';
  @Output() searchGiphs = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
