import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { profanityValidator } from './profanity-validator';
import { validateAllFormFields } from '@app/shared/validator';
@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchgiphs = new EventEmitter<string>();
  searchTerm = null;
  warningMessage = 'You may not use profane language';
  searchFormGroup = new FormGroup({
    searchInputControl: new FormControl('', [profanityValidator()]),
    submitBtnControl: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  searchGiphs() {
    if (validateAllFormFields(this.searchFormGroup)) {
      this.searchgiphs.emit(this.searchTerm);
    }
  }
}
