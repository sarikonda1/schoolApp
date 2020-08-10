import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAppSummaryReportComponent } from './adm-app-summary-report.component';

describe('AdmAppSummaryReportComponent', () => {
  let component: AdmAppSummaryReportComponent;
  let fixture: ComponentFixture<AdmAppSummaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAppSummaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAppSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
