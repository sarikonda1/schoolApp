import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStdReportComponent } from './adm-std-report.component';

describe('AdmStdReportComponent', () => {
  let component: AdmStdReportComponent;
  let fixture: ComponentFixture<AdmStdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmStdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
