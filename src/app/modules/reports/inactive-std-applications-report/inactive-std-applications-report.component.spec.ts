import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveStdApplicationsReportComponent } from './inactive-std-applications-report.component';

describe('InactiveStdApplicationsReportComponent', () => {
  let component: InactiveStdApplicationsReportComponent;
  let fixture: ComponentFixture<InactiveStdApplicationsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveStdApplicationsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveStdApplicationsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
