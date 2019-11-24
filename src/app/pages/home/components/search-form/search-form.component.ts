import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { validateAllFormFields, profanityValidator } from '@app/shared/validator';
@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() searchgiphs = new EventEmitter<string>();
  warningMessage = 'You may not use profane language';
  searchFormGroup = new FormGroup({
    searchInputControl: new FormControl('', [profanityValidator()]),
    submitBtnControl: new FormControl('')
  });

  constructor() { }

  searchGiphs() {
    if (validateAllFormFields(this.searchFormGroup)) {
      this.searchgiphs.emit(this.searchFormGroup.controls.searchInputControl.value);
    }
  }
}
