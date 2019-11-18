import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from './components/search-form';
import { GyphListComponent } from './components/gyph-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
