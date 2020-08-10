import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfFiltersComponent } from './af-filters.component';

describe('AfFiltersComponent', () => {
  let component: AfFiltersComponent;
  let fixture: ComponentFixture<AfFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
