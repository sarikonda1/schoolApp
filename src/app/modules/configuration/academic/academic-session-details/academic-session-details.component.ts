import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { URLConstants, AppSettings } from 'app/app.constants';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { Location } from '@angular/common';
import { CommonComponent } from 'app/shared/common/common.component';
import { isNumber } from 'util';
import { SchoolService } from 'app/service/manage-school/school.service';
import { BaseUrlConfig } from 'app/url.config';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-academic-session-details',
  templateUrl: './academic-session-details.component.html',
  styleUrls: ['./academic-session-details.component.scss']
})
export class AcademicSessionDetailsComponent extends CommonComponent implements OnInit {
  acadedemicSessionId: any;
  academicSessionDetails: any;
  classesOfferedColumns: {}[];

  classTableSettings: any;
  currentComponent = 'AcademicSessionsComponent';
  classRows: any[];
  courseRows: any[];
  courseRequirementsColumns: ({ field: string; header: string; sort?: undefined; } | { field: string; header: string; sort: boolean; })[];
  courseTableSettings: any;
  acdNewStatusCode = AppSettings.ACADEMICSESSION_NEW;
  fromConfiguration = false;
  onlineApplicationURL: any;
  constructor(private router: Router, private routes: ActivatedRoute, private schoolAcademicSessionService: SchoolAcademicSessionService, public location: Location, public schoolService: SchoolService, public snackBar: MatSnackBar) {
    super();
    if (window.location.href.indexOf('required-school-configuration') > -1){
      this.fromConfiguration = true;
    }
  }
  ngOnInit(): void {
    this.schoolService.schoolDetails()
    .subscribe(res => this.onGetSchoolData(res));
    this.routes.params
      .subscribe((params: Params) => {
        this.acadedemicSessionId = params['id'];
        this.getAcademicSessionDetails();
      });

    this.classesOfferedColumns = [
      { field: 'className', header: 'Class Name' },
      { field: 'schoolBoardName', header: 'Board Name' },
      { field: 'sectionName', header: 'Section Name' },
      { field: 'maxCapacity', header: 'Capacity' },
    ];
    this.courseRequirementsColumns = [
      { field: 'className', header: 'Class Name' },
      { field: 'schoolBoardName', header: 'Board Name' },
      { field: 'courseCategoryName', header: 'Category Name' },
      { field: 'courseName', header: 'Course' },
      { field: 'passMarks', header: 'Pass Marks' },
    ];
  }
  onGetSchoolData(res): void{
    if (res.schoolData && res.schoolData.allowOnlineStudentApplications){
      const arr = window.location.href.split('/');
      this.onlineApplicationURL = `${arr[0] + '//' + arr[2]}/online-student-application/${res.schoolData.id}/${this.acadedemicSessionId}`;
    }
  }
  copy(): void {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.onlineApplicationURL;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.openSnackBar('Copied!!');
  }
  getAcademicSessionDetails(): void {
    this.schoolAcademicSessionService.schoolAcademicSessionDetails(this.acadedemicSessionId).subscribe(res => {
       res.startDate = this.getFormattedDateBySchoolDateFormat(res.startDate);
       res.endDate = this.getFormattedDateBySchoolDateFormat(res.endDate);
       res.onlineApplicationStartDate = this.getFormattedDateBySchoolDateFormat(res.onlineApplicationStartDate);
       res.onlineApplicationEndDate = this.getFormattedDateBySchoolDateFormat(res.onlineApplicationEndDate);
       this.academicSessionDetails = res;
      this.bindAcademicSessonResult(res);
    });

  }

  bindAcademicSessonResult(data: any): any {
    if (!data.classesOfferedViewModel) {
      this.classRows = [];
    } else {
      this.classRows = this.academicSessionDetails.classesOfferedViewModel;
      this.classTableSettings = {
        rows: this.classRows,
        columns: this.classesOfferedColumns,
        componentName: this.currentComponent,
        rowGroupingColumns: ['className', 'schoolBoardName'],
        hideHeader: true,
        tabTable: true,
        padding: true,
      };
      this.courseRows = this.academicSessionDetails.courseRquirementsViewModel;
      this.courseTableSettings = {
        rows: this.courseRows,
        columns: this.courseRequirementsColumns,
        componentName: this.currentComponent,
        rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
        hideHeader: true,
        tabTable: true,
        padding: true
      };
    }
  }

  onEditButtonClick(): void {
    if (this.fromConfiguration){
      this.router.navigateByUrl(
        URLConstants.ACADEMICSESSION_WIZARD + this.acadedemicSessionId);
    } else {
      this.router.navigateByUrl(
        URLConstants.ACADEMICSESSION + '/' + this.acadedemicSessionId);
    }
  }
  isNumberr(data): any{
    return isNumber(data);
  }
}
