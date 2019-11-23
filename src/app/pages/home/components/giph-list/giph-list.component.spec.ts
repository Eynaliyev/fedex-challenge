import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from "@angular/material";

import { giphListComponent } from './giph-list.component';

describe('giphListComponent', () => {
  let component: giphListComponent;
  let fixture: ComponentFixture<giphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [giphListComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(giphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
