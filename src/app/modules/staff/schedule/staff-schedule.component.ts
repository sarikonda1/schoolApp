import { Component, OnInit } from '@angular/core';
import { TeachersSchedulesService } from 'app/service/staff-information-system/teachers-schedules.service';
import { fuseAnimations } from '@fuse/animations';
import {TeacherScheduleComponent} from '../staff-information-system/teacher-schedule/teacher-schedule.component';
import {StaffCommonService} from '../../../service/staff/staffCommon.service';

@Component({
  selector: 'app-staff-schedule',
  templateUrl: '../staff-information-system/teacher-schedule/teacher-schedule.component.html',
  styleUrls: ['../staff-information-system/teacher-schedule/teacher-schedule.component.scss'],
  animations: [fuseAnimations],
  providers: [TeachersSchedulesService, StaffCommonService]
})
export class StaffScheduleComponent extends TeacherScheduleComponent implements OnInit {

  ngOnInit(): void {
    this.isStaffLogin = true;
    this.initializeForm();
    this.getStaffTemplates();

  }

  getStaffTemplates(): void {
    this.initializeForm();
      this.teachersSchedulesService.getTeacherTimeTableById().subscribe(response => this.processResponse(response), error => {
        this.errorResponse(error);
      });
  }

  processResponse(response: any): void {
    if (response.listView !== null) {
      this.currentStaffName = response.listView.name;
    }
    this.bindTeacherTemplates(response);
  }



  getTeacherSchedule(templateId: number): void {
    if (templateId) {
      this.teachersSchedulesService.getTeacherSchedule(null, templateId).subscribe(response => this.teacherSchedule = response,
        error => {
          this.errorResponse(error);
        });
    }
    else {
      this.teacherSchedule = {
        teacherScheduleList: [],
        teacherPeriodsView: [],
        toatalPeriods: 0
      };
    }

  }
}
