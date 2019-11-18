import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyphListComponent } from './gyph-list.component';

describe('GyphListComponent', () => {
  let component: GyphListComponent;
  let fixture: ComponentFixture<GyphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyphListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});