import { Component, OnInit } from '@angular/core';
import { TeachersSchedulesService } from 'app/service/staff-information-system/teachers-schedules.service';
import { fuseAnimations } from '@fuse/animations';
import {TeacherScheduleComponent} from '../staff-information-system/teacher-schedule/teacher-schedule.component';
import {StaffCommonService} from '../../../service/staff/staffCommon.service';
import { StudentAttendanceComponent } from 'app/modules/academics/attendance/student-attendance/student-attendance.component';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { StudentAttendanceService } from 'app/service/student-attendance/student-attendance.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';

@Component({
  selector: 'app-attendance',
  templateUrl: '../../academics/attendance/student-attendance/student-attendance.component.html',
  styleUrls: ['../../academics/attendance/student-attendance/student-attendance.component.scss'],
  animations: [fuseAnimations],
  providers: [StudentDBService, StudentAttendanceService, GradeSetupService, ClassTimetableService]
})
export class AttendanceComponent extends StudentAttendanceComponent implements OnInit {

  ngOnInit(): void {
    this.isStaffLogin = true;
    this.initializeFilterView();
    this.initializeTableSettings();
    this.initializeForm();
    this.dateFormat = this.getSchoolDateFormat();
    this.academicSession = JSON.parse(localStorage.getItem('_as'));
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      if (this.filterViewModel.classIds && this.filterViewModel.classIds[0]) {
        this.studentAttendanceForm.patchValue({
          classId: this.filterViewModel.classIds[0]
        });
      }
      if (this.filterViewModel.sectionIds && this.filterViewModel.sectionIds[0]) {
        this.studentAttendanceForm.patchValue({
          sectionId: this.filterViewModel.sectionIds[0]
        });
      }
      if (this.studentAttendanceForm.valid) {
        this.getClasses(true);
        this.getAllFilteredStudents();
      } else {
        this.getClasses();
      }
    } else {
      this.getClasses();
    }
  }

}
