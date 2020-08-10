import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropDownModel } from 'app/models/drop-down-view';
import { CommonComponent } from '../../../../shared/common/common.component';
import { TestScheduleService } from '../../../../service/grading-service/api/test-schedule-service';
import { TestSchedulesFilterViewModel } from '../models/test-schedules-filter-view-model';
import { RouteConfig } from '../../../../url.config';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
  providers: [ClassesConfigService, TestScheduleService]
})
export class SchedulesComponent extends CommonComponent implements OnInit {

  filterViewModel: TestSchedulesFilterViewModel;
  classForm: FormGroup;
  tableSettings: {};
  rows: Array<any>;
  columns: any[];
  pageCnt: number;
  totalRowsCount: number;
  rowBasedAction: Array<any> = [];
  closeForm: boolean;
  validateForm: boolean;
  isFormSubmitted = false;
  showCreateBtn = true;
  testScheduleId: any;
  isStaffLogin = false;
  currentComponent = 'SchedulesComponent';
  constructor(public commonService: CommonService,
    private testScheduleService: TestScheduleService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialog, private router: Router) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    if (!this.getTokenParam('_as')) {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
      this.initializeTableSettings();
    }
    else {
      this.getAllTestSchedules();
    }
  }

  initializeForm(): void {
    this.classForm = new FormGroup({
      id: new FormControl(''),
      classReferenceTypeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      code: new FormControl(null, [Validators.maxLength(6)]),
      description: new FormControl(null, [Validators.maxLength(135)]),
    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'boardName', header: 'Board', sort: true },
      { field: 'termName', header: 'Grade Term', sort: true },
      { field: 'testType', header: 'Test Type', sort: true },
      { field: 'testName', header: 'Test Name', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'course', header: 'Subject', sort: true },
      { field: 'testDate', header: 'Test Date', sort: true },
      { field: 'testStartDate', header: 'Start Date', sort: true },
      { field: 'testEndDate', header: 'End Date', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      model: this.filterViewModel,
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      hideHeader: true,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Test Schedules/Marks'
        },
      }
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
      classes: [],
      sections: [],
      terms: [],
      boardIds: [],
      testTypes: [],
      testNames: [],
      statuses: [],
      isPostToCalendar: [],
      courses: [],
      testStartDatesBegin: null,
      testStartDatesEnd: null,
      testEndDateBegin: null,
      testEndDateEnd: null,
      testScheduleDateBegin: null,
      testScheduleDateEnd: null
    };
  }

  getAllTestSchedules(): void {
    this.testScheduleService.getTestSchedules(this.filterViewModel.sortBy, this.filterViewModel.sortOrder,
      this.filterViewModel.terms, this.filterViewModel.boardIds, this.filterViewModel.testTypes, this.filterViewModel.testNames,
      this.filterViewModel.testStartDatesBegin, this.filterViewModel.testStartDatesEnd,
      this.filterViewModel.testEndDateBegin, this.filterViewModel.testEndDateEnd,
      this.filterViewModel.isPostToCalendar, this.filterViewModel.classes, this.filterViewModel.sections,
      this.filterViewModel.statuses, this.filterViewModel.courses,
      this.filterViewModel.testScheduleDateBegin, this.filterViewModel.testScheduleDateEnd,
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(data => {
        this.updateTestSchedulesResponse(data);
      },
        error => {
          this.errorResponse(error);
        });
  }

  updateTestSchedulesResponse(data: any): void {


    if (data.testScheduleListViewModel) {
      this.rows = data.testScheduleListViewModel.list;
      this.totalRowsCount = data.testScheduleListViewModel.totalItems;
    } else {
      this.rows = [];
    }

    this.rows.forEach((e: any) => {
      e.testStartDate = (e.testStartDate == null) ? null : this.commonService.customDateFormat(e.testStartDate, this.getSchoolDateFormat()).date;
      e.testEndDate = (e.testEndDate == null) ? null : this.commonService.customDateFormat(e.testEndDate, this.getSchoolDateFormat()).date;
      e.testDate = (e.testDate == null) ? null : this.commonService.customDateFormat(e.testDate, this.getSchoolDateFormat()).date;

      if (e.isEditable) {

        switch (true) {
          case e.statusCode === AppSettings.TEST_SCHEDULED_CODE:
            e.operations = [
              {
                name: AppSettings.COMPLETE,
                icon: AppSettings.APPROVE_ICON,
                operationName: AppSettings.COMPLETE
              }, {
                name: AppSettings.CANCEL,
                icon: AppSettings.DELETE_ICON,
                operationName: AppSettings.CANCEL
              },
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }
            ];
            break;
          case e.statusCode === AppSettings.TEST_COMPLETED_CODE:
            e.operations = [
              {
                name: AppSettings.CANCEL,
                icon: AppSettings.DELETE_ICON,
                operationName: AppSettings.CANCEL
              },
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }];
            break;

          case e.statusCode === AppSettings.TEST_CANCELED_CODE:

            e.operations = [
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }
            ];
            break;
        }

      }
    });

    this.tableSettings = {
      columns: this.columns,
      model: this.filterViewModel,
      rows: this.rows,
      componentName: this.currentComponent,
      isSelectRowRequired: false,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      isRowExpandRequired: false,
      infoButton: {
        required: true,
        text: 'Test Schedules/Marks'
      }
    };
    this.scrollIntoView('app-table');
  }



  getAllTestScheduleTableData(_event: TestSchedulesFilterViewModel): void {
    this.filterViewModel = _event;
    this.getAllTestSchedules();
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  trimTextBoxSpaces(key: string): void {
    this.classForm.controls[key].setValue(this.commonService.trimSpaces(this.classForm.controls[key].value));
  }

  ClassSectionrowActions(response: any): void {
    this.testScheduleId = response.clickedRow.id;
    if (response.operation === AppSettings.COMPLETE.toLowerCase()) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.COMPLETE_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.testScheduleService.completeOrCancelSchedule(this.testScheduleId, true).subscribe(res => this.completeOrCancelRequest(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }

    if (response.operation === AppSettings.CANCEL.toLowerCase()) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.CANCEL_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.testScheduleService.completeOrCancelSchedule(this.testScheduleId, false).subscribe(res => this.completeOrCancelRequest(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    if (response.operation === AppSettings.MARKS.toLowerCase()) {
      if (this.isStaffLogin) {
        this.router.navigate([RouteConfig.Staff_Test_Grading + '/' + response.clickedRow.id, { operation: AppSettings.TEST }]);
      }
      else {
        this.router.navigate([RouteConfig.Test_Grading + '/' + response.clickedRow.id, { operation: AppSettings.TEST }]);
      }
    }
  }

  completeOrCancelRequest(response: any): void {
    this.getAllTestSchedules();
    this.openSnackBar(response.messages.ResultMessage);
  }
}
