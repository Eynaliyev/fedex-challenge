import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";

import { HomePageComponent } from './home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { GyphListComponent } from './components/gyph-list/gyph-list.component';
import { GyphService } from './services/gyph.service';
import { mockGyphs } from './services/mock-data';

class MockGyphService {
  getVenuesList() {
    return new Observable(observer => {
      observer.next(mockGyphs);
      observer.complete();
    });
  }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        SearchFormComponent,
        GyphListComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: GyphService, useClass: MockGyphService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
