import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationScheduleReportComponent } from './examination-schedule-report.component';

describe('ExaminationScheduleReportComponent', () => {
  let component: ExaminationScheduleReportComponent;
  let fixture: ComponentFixture<ExaminationScheduleReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationScheduleReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationScheduleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
