import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAttendanceReportComponent } from './students-attendance-report.component';

describe('StudentsAttendanceReportComponent', () => {
  let component: StudentsAttendanceReportComponent;
  let fixture: ComponentFixture<StudentsAttendanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAttendanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
