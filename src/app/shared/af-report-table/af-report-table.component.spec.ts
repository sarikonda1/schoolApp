import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfReportTableComponent } from './af-report-table.component';

describe('AfReportTableComponent', () => {
  let component: AfReportTableComponent;
  let fixture: ComponentFixture<AfReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfReportTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
