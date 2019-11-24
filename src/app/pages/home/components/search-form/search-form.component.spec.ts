import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  const PROFANE_VALUE = 'fuck';
  const VALID_VALUE = 'hi';
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not trigger search event if the value is profane', () => {
    spyOn(component.searchgiphs, 'emit');
    component.searchFormGroup.controls.searchInputControl.setValue(PROFANE_VALUE);
    component.searchGiphs();
    expect(component.searchgiphs.emit).toHaveBeenCalledTimes(0);
  });

  it('should trigger search event if the value is not profane', () => {
    spyOn(component.searchgiphs, 'emit');
    component.searchFormGroup.controls.searchInputControl.setValue(VALID_VALUE);
    component.searchGiphs();
    expect(component.searchgiphs.emit).toHaveBeenCalledWith(VALID_VALUE);
  });
});
