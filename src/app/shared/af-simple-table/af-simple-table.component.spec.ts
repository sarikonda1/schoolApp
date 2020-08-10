import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfSimpleTableComponent } from './af-simple-table.component';

describe('AfSimpleTableComponent', () => {
  let component: AfSimpleTableComponent;
  let fixture: ComponentFixture<AfSimpleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfSimpleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfSimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
