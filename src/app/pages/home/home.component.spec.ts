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
import { GiphListComponent } from './components/giph-list/giph-list.component';
import { GiphService } from './services/giph.service';
import { mockgiphs } from './services/mock-data';

class MockgiphService {
  getVenuesList() {
    return new Observable(observer => {
      observer.next(mockgiphs);
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
        GiphListComponent
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
        { provide: GiphService, useClass: MockgiphService }
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
