import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { TeachersSchedulesService } from 'app/service/staff-information-system/teachers-schedules.service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { fuseAnimations } from '@fuse/animations';
import { CommonService } from 'app/service/common.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.scss'],
  animations: [fuseAnimations],
  providers: [TeachersSchedulesService]
})
export class TeacherScheduleComponent extends CommonComponent implements OnInit {

  teachers = Promise.resolve([]);
  teacherTemplates: any;
  teacherSchedule: any;
  selectedTeacherId: number;
  showClasses: boolean;
  showSchedules: boolean;
  loadData = Promise.resolve(false);
  selectedValue: number;
  isStaffLogin = false;
  currentStaffName = '';
  selectedTemplate: any;
  isShow: boolean;

  constructor(public teachersSchedulesService: TeachersSchedulesService, private staffCommonService: StaffCommonService,
     public commonService: CommonService, public snackBar: MatSnackBar) { super(); }

  ngOnInit(): void {
    this.getTeachers();
    this.initializeForm();

  }

  initializeForm(): void {
    this.teacherTemplates = {
      classSectionList: [],
      timeTableList: []
    };

    this.teacherSchedule = {
      teacherScheduleList: [],
      teacherPeriodsView: [],
      toatalPeriods: 0
    };
  }

  getTeachers(): void {
    this.staffCommonService.fetchStaffs('STFT_TCH').subscribe(response => this.bindStaff(response), error => {
      this.errorResponse(error);
    });
  }

  bindStaff(staffData: Array<any>): void {
    const dropDownData = staffData.map(x => ({
      label: x.name,
      value: x.id
    }));
    this.teachers = Promise.resolve(dropDownData);
  }

  getStaffTemplates(teacherId: number): void {
    this.selectedValue = teacherId;
    this.initializeForm();
    if (teacherId) {
      this.selectedTeacherId = teacherId;
      this.teachersSchedulesService.getTeacherTimeTableById(teacherId).subscribe(response => this.bindTeacherTemplates(response), error => {
        this.errorResponse(error);
      });
    }
    else {
      this.showClasses = false;
    }

  }

  bindTeacherTemplates(response: any): void {
    this.showClasses = true;
    this.teacherTemplates = response;
    if (this.teacherTemplates.timeTableList && this.teacherTemplates.timeTableList.length) {
      this.teacherTemplates.timeTableList = this.teacherTemplates.timeTableList.map(x => ({
        label: x.name,
        value: x.id
      }));
      this.showSchedules = this.teacherTemplates.timeTableList.length ? true : false;
      const firstTemplateId = this.teacherTemplates.timeTableList[0].value;
      this.selectedTemplate = firstTemplateId;
      this.getTeacherSchedule(firstTemplateId);
    }
  }

  getTeacherSchedule(templateId: number): void {
    if (templateId) {
      this.teachersSchedulesService.getTeacherSchedule(this.selectedTeacherId, templateId).subscribe(response => this.teacherSchedule = response,
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
