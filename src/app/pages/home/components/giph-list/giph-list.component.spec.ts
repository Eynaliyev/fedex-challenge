import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from "@angular/material";

import { GiphListComponent } from './giph-list.component';

describe('GiphListComponent', () => {
  let component: GiphListComponent;
  let fixture: ComponentFixture<GiphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiphListComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
