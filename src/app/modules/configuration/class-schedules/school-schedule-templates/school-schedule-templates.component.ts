import { Component, ViewChild, OnInit, ViewChildren, QueryList, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Pattern, AppSettings, URLConstants } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import {ErrorStateMatcher, MatDialog, MatSnackBar, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { Router } from '@angular/router';

import { CommonService } from 'app/service/common.service';
import { SchoolScheduleTemplateService } from 'app/service/class-schedules/school-schedule-template.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { SearchSchoolScheduleTempView } from '../model/search-school-schedule-temp-view';
import { SchoolschedulePeriodsView } from '../model/school-schedule-periods-view';
import { SchoolschedulePeriodsUpdateView } from '../model/school-schedule-periods-update-view';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-school-schedule-templates',
  templateUrl: './school-schedule-templates.component.html',
  styleUrls: ['./school-schedule-templates.component.scss'],
  // providers: [SchoolScheduleTemplateService]
  providers: [ SchoolScheduleTemplateService , { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }]
})
export class SchoolScheduleTemplatesComponent extends CommonComponent implements OnInit {
  @ViewChildren('myInput') myInput: QueryList<ElementRef>;
  @ViewChild('schoolScheduleTempForm') schoolScheduleTempForm;

  searchSchoolScheduleTempView: SearchSchoolScheduleTempView;
  schoolschedulePeriodsView: SchoolschedulePeriodsView;
  schoolschedulePeriodsUpdateView: SchoolschedulePeriodsUpdateView;

  closeAddPanel: boolean;
  schoolScheduleFormDetails = false;
  startTime: any;
  endTime: any;
  isPeriodsTemp = false;
  isUpdateData = false;
  isCancel = true;
  isDisabled = false;
  filterWeekdays: Array<any> = [];
  schoolScheduleTempList: Array<any> = [];
  schoolScheduleTempSelectList: Array<any> = [];
  filterSchoolScheduleTempList: Array<any> = [];
  filterRowData: any = [];
  errorMsg: any;
  periodErrorMessages = [];
  isUpdateDayPeriods =  false;

  weekdaysDropdown: DropDownConfModel;
  httpStatus: any;

  schoolScheduleForm: FormGroup;
  periodLists: FormGroup;
  /* Rajkumar Added Code Start*/
  schoolSchedulePeriods: any;
  selectedSchoolScheduleTemplates: any;
  originalScheduleTemplate: any;
  /* Rajkumar Added Code End*/

  //  refernces for ng prime table
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  currentComponent = 'SchoolScheduleTemplatesComponent';
  schedulePeriodsList: any = [];

  constructor(private _fb: FormBuilder, public dialog: MatDialog, public commonService: CommonService, private cd: ChangeDetectorRef,
    private router: Router, private schoolScheduleTemplateService: SchoolScheduleTemplateService, public snackBar: MatSnackBar) {
    super();
    this.searchSchoolScheduleTempView = {
      templateName: [],
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchSchoolScheduleTempView = modelTableComponent;
    }

    this.cols = [
      { field: 'name', header: 'Template Name', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    // initializing table settings /
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      tablename: 'School Schedule Templates',
      componentName: this.currentComponent,
    };

    this.schoolschedulePeriodsView = {
      templateName: '',
      periodsListView: []
    };

    this.schoolschedulePeriodsUpdateView = {
      templateName: '',
      periodsListView: []
    };
    this.schoolScheduleTempList = [];
    this.schoolScheduleTemplateForm();
    this.periodsForm();
    this.weekDays();
    this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);


  }

  onChanges(): void {
    this.periodLists.controls.periodListsView.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      this.schoolSchedulePeriods = [];
      val.forEach(period => {
        if (period.periodTime !== null && period.periodTime !== undefined) {
          const periods = period.periodTime.split('-');
          period.startTime = periods[0].trim();
          period.endTime = (periods[1] !== undefined && periods[1] !== null) ? periods[1].trim() : null;
        }
        this.schoolSchedulePeriods.push(period);
      });

      if (this.periodLists.controls.periodListsView.status === AppSettings.VALID
          && this.schoolScheduleForm.status === AppSettings.VALID) {
        this.validateAllPeriods();
      }
      else {
        this.periodErrorMessages = [];
      }

    });
  }


  schoolScheduleTemplateForm(): void {
    this.schoolScheduleForm = this._fb.group({
      templateName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      weekDayId: new FormControl('', [Validators.required]),
    });
  }

  periodsForm(): void {
    this.periodLists = this._fb.group({
      periodListsView: this._fb.array([this.initItemRows()]),
    });
    this.onChanges();
  }

  weekDays(): void {
    this.filterWeekdays = [];
    this.schoolScheduleTemplateService.schoolScheduleTemplateWeekdaysGet().subscribe(response => {
      if (response.commonViewModel != null) {
        if (response.commonViewModel.length) {
          response.commonViewModel.forEach(element => {
            this.filterWeekdays.push({
              label: element.name,
              value: element.id
            });
          });
          this.weekdaysDropdown = { multiSelect: true, placeholder: 'Weekdays', data: this.filterWeekdays, noEntryFoundLabel: 'No Data Found', isRequired: true };
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getSchoolScheduleTempGridDetails(data: any): void {
    this.searchSchoolScheduleTempView = data;
    this.schoolScheduleTemplateService.schoolScheduleTemplateAllTemplatesGet(this.searchSchoolScheduleTempView.templateName,
      this.searchSchoolScheduleTempView.sortBy, this.searchSchoolScheduleTempView.sortOrder,
      this.searchSchoolScheduleTempView.pageNumber, this.searchSchoolScheduleTempView.pageSize)
        .subscribe(res => this.resSchoolScheTempDetails(res), error => {
        this.errorResponse(error);
      });
  }

  resSchoolScheTempDetails(data: any): void {
    this.custRowsPerPageOptions = [];
    if (!data.commonViewModelTemplates) {
      this.rows = [];
      this.totalItems = 0;
      this.pageCnt = 0;
    }
    else {
      this.rows = data.commonViewModelTemplates.list;
      this.totalItems = data.commonViewModelTemplates.totalItems;
      this.pageCnt = data.commonViewModelTemplates.totalPages;

      const rowOperations = [
        {
          name: AppSettings.VIEW,
          icon: AppSettings.DETAILS_ICON,
        },
        {
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT_ICON,
          operationName: AppSettings.EDIT
        },
        {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE_ICON,
          operationName: AppSettings.DELETE
        },
      ];

      this.rows.forEach(e => {
        e.operations = rowOperations;
      });
    }
    if (data.commonViewModelTemplates) {
      this.searchSchoolScheduleTempView.pageNumber = data.commonViewModelTemplates.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.searchSchoolScheduleTempView,
      rows: this.rows,
      tablename: 'School Schedule Templates',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'School Schedule Templates'
        }
      },
    };
  }

  onAddFormClick(): void {
    this.closeAddPanel = false;
    this.isUpdateData = false;
    this.isDisabled = false;
    this.schoolScheduleTempList = [];
    this.selectedSchoolScheduleTemplates = [];
    this.periodsForm();
  }

  cancel(): void {
    this.schoolScheduleTempForm.resetForm();
    this.isPeriodsTemp = false;
    this.closeAddPanel = true;
    this.isCancel = true;
    this.schoolScheduleTempList = [];
    this.selectedSchoolScheduleTemplates = [];
    this.filterSchoolScheduleTempList = [];
    this.errorMsg = '';
    this.periodErrorMessages = [];
    this.periodsForm();
    this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);
    this.scrollToView();
    // this.isDisabled = true;
    if (this.periodLists.controls.periodListsView.invalid && this.schoolScheduleForm.invalid) {
      this.isDisabled = true;
    }

  }

  cancelPeriods(): void {
    this.errorMsg = '';
    this.periodErrorMessages = [];
    this.isDisabled = false;
    this.isUpdateDayPeriods = false;
    this.schoolScheduleForm.controls['weekDayId'].patchValue('');
    if (this.schoolScheduleTempList.length === 0 && this.filterSchoolScheduleTempList.length === 0) {
      this.cancel();
    }
    else {
      this.isPeriodsTemp = false;
    }
    this.scrollToView();
  }

  // return type for educaion details form
  get addNewRowSchoolScheduleform(): FormArray {
    this.updateAddRemoveRow();
    return <FormArray>this.periodLists.get('periodListsView');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRow(itemrow = null): any {
    (<any>Object).values(itemrow.controls).forEach(control => {
      control.markAsTouched();
      control.updateValueAndValidity();
    });
    if (this.periodLists.controls.periodListsView.valid && this.schoolScheduleForm.valid) {
      // control refers to your formarray
      const control = <FormArray>this.periodLists.controls['periodListsView'];

      // add new formgroup
      control.push(this.initItemRows());

      this.assignStartEndTime();
      this.updateAddRemoveRow();
      this.cd.detectChanges();
      this.myInput.last.nativeElement.focus();
    }
   // else {
      this.isDisabled = true;
    // }
  }

  deleteRow(index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.periodLists.controls['periodListsView'];
    // remove the chosen row
    control.removeAt(index);

    let filterPeriods = [];
    this.schoolScheduleForm.value.weekDayId.forEach(t => {
      filterPeriods.push(this.schoolScheduleTempList.filter((item) => item.weekDayId !== t.value));
      this.schoolScheduleTempList = filterPeriods[0];
      filterPeriods = [];
    });
    this.updateAddRemoveRow();

    this.periodErrorMessages = [];
    if (this.periodLists.controls.periodListsView.status === AppSettings.VALID
        && this.schoolScheduleForm.status === AppSettings.VALID) {
      this.validateAllPeriods();
    }
    else {
      this.periodErrorMessages = [];
      this.isDisabled = true;
    }
    this.cd.detectChanges();
    this.myInput.last.nativeElement.focus();
  }

  assignStartEndTime(): void {
    const i = this.periodLists.controls.periodListsView.value.length;
    const startTime = moment(this.periodLists.controls.periodListsView.value[i - 2].startTime, 'HH:mm');
    const endTime = moment(this.periodLists.controls.periodListsView.value[i - 2].endTime, 'HH:mm');

    // calculate total duration
    const duration = moment.duration(endTime.diff(startTime));

    // duration in hours
    // tslint:disable-next-line:radix
    const hours = parseInt(duration.asHours().toString());

    // duration in minutes
    // tslint:disable-next-line:radix
    const minutes = parseInt(duration.asMinutes().toString()) % 60;

    this.periodLists.controls.periodListsView.value[i - 1].startTime = this.periodLists.controls.periodListsView.value[i - 2].endTime;
    const initialEndTime = moment.utc(this.periodLists.controls.periodListsView.value[i - 2].endTime, 'HH:mm').add(hours, 'hour').format('HH:mm');
    const finalEndTime = moment.utc(initialEndTime, 'HH:mm').add(minutes, 'minutes').format('HH:mm');
    this.periodLists.controls.periodListsView.value[i - 1].endTime = finalEndTime;
    this.periodLists.controls.periodListsView['controls'].forEach((periodLst, indexOfLst) => {
      this.periodLists.controls.periodListsView.value.forEach((resPeriodLst, j) => {
        if (indexOfLst === j) {
          if (resPeriodLst.schoolSchedulePeriodId !== undefined) {
            periodLst.controls['schoolSchedulePeriodId'].setValue(resPeriodLst.schoolSchedulePeriodId);
          }
          periodLst.controls['startTime'].setValue(resPeriodLst.startTime);
          periodLst.controls['endTime'].setValue(resPeriodLst.endTime === '00:00' ? '23:59' : resPeriodLst.endTime);
          periodLst.controls['periodTime'].setValue(resPeriodLst.startTime + '-' + (resPeriodLst.endTime === '00:00' ? '23:59' : resPeriodLst.endTime));
        }
      });
    });
  }

  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.schoolScheduleTemplateService.schoolScheduleTemplateDeleteTemplateDelete(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
    else if (event.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate(
        [URLConstants.SCHOOL_SCHEDULE_TEMPLATE_DETAILS + event.clickedRow.id]);
    }
    else if (event.operation === AppSettings.EDIT) {
      this.schoolschedulePeriodsUpdateView.id = event.clickedRow.id;
      this.schoolScheduleTemplateService.schoolScheduleTemplateTemplateDetailsGet(event.clickedRow.id).subscribe(res => this.getById(res), error => {
        this.errorResponse(error);
      });
    }
  }

  getById(data: any): void {
    if (data.statusCode === this.httpStatus.OK) {
      data.templateDetailsView.periodsListViewModel.forEach(t => {
        t.startTime = t.startTime.slice(0, 5);
        t.endTime = t.endTime.slice(0, 5);
      });
      this.isUpdateData = true;
      this.selectedSchoolScheduleTemplates = data.templateDetailsView.periodsListViewModel;
      this.originalScheduleTemplate = data.templateDetailsView.periodsListViewModel;
      this.schoolScheduleForm.controls['templateName'].setValue(data.templateDetailsView.templateName);
      this.isPeriodsTemp = false;
      this.isCancel = false;
      this.isDisabled = false;
      this.updateScheduleTemp();
    }
    else {
      this.openSnackBar(data.messages.ResultMessage, true);
    }
  }

  // delete return response after click
  deleteResponse(response: any): void {
    this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);
    this.openSnackBar(response.messages.ResultMessage);
  }

  updateAddRemoveRow(): void {
    const i = this.periodLists.controls.periodListsView.value.length;
    if (this.periodLists.controls.periodListsView.value.length > 1) {
      this.periodLists.controls.periodListsView.value.forEach(e => {
        e.isAddVisible = false;
        e.isRemoveVisible = true;
      });
      this.periodLists.controls.periodListsView.value[i - 1].isAddVisible = true;
      this.periodLists.controls.periodListsView.value[i - 1].isRemoveVisible = true;
    }
    else if (this.periodLists.controls.periodListsView.value.length === 1) {
      this.periodLists.controls.periodListsView.value[i - 1].isAddVisible = true;
      this.periodLists.controls.periodListsView.value[i - 1].isRemoveVisible = false;
    }
  }

  // list all your form controls here, which belongs to your form array
  initItemRows(): FormGroup {
    return this._fb.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      periodTime: new FormControl(null, [Validators.required]),
      startTime: new FormControl(null),
      endTime: new FormControl(null),
      isAddVisible: Boolean(true),
      isRemoveVisible: Boolean(false),
      weekDayId: new FormControl(),
      weekDayName: new FormControl(),
      schoolSchedulePeriodId: new FormControl()
    });
  }

  schedulePeriods(): void {
    this.intializeForm();

  }
  intializeForm(): void{
    this.periodsForm();
    this.validWeeKday();
    this.isDisabled = true;
    this.errorMsg = '';
    this.periodErrorMessages = [];
    if (this.schoolScheduleForm.status === AppSettings.VALID) {
      this.isCancel = false;
      this.isPeriodsTemp = true;
    }
    else {
      this.schoolScheduleFormDetails = true;
    }
    this.cd.detectChanges();
  }

  validateAllPeriods(): void {
    this.periodErrorMessages = [];
    for (let i = 0; i < this.schoolSchedulePeriods.length; i++) {
      this.validatePeriod(i);
    }
    if (this.schoolSchedulePeriods.length >= 1 && !this.isDisabled) {
      this.validatePeriodIntervals();
      this.validateExistingSchedule();
    }
    const currentErrors = this.periodErrorMessages.filter(x => x !== '');
    if (currentErrors && currentErrors.length) {
      this.isDisabled = true;
    }

  }

  validatePeriod(periodIndex): void {
    const currentPeriod = this.schoolSchedulePeriods[periodIndex];
    switch (true) {
      case currentPeriod.name !== null && currentPeriod.name.length > 15:
        this.errorMsg = 'Period Name should not exeed 15 Characters';
        this.isDisabled = true;
        this.periodErrorMessages[periodIndex] = this.errorMsg;
        break;
      case (this.schoolSchedulePeriods.filter(x => x.name !== null && currentPeriod.name !== null
          && x.name.toLowerCase().trim() === currentPeriod.name.toLowerCase().trim()).length > 1):
        this.errorMsg = AppSettings.WARNING_ON_DUPLICATE_PERIODS;
        this.isDisabled = true;
        this.periodErrorMessages[periodIndex] = this.errorMsg;
        break;
      case (currentPeriod.startTime !== null && currentPeriod.endTime === null)
            || (currentPeriod.startTime === null && currentPeriod.endTime !== null):
        this.errorMsg = 'Invalid Time Range for Period ' + currentPeriod.name;
        this.isDisabled = true;
        this.periodErrorMessages[periodIndex] = this.errorMsg;
            break;
      case currentPeriod.startTime !== null && currentPeriod.endTime !== null:
        const datePipe = new DatePipe('en-US');
        const periodStartTime = new Date();
        const splitStartTime = currentPeriod.startTime.split(':');
        if (!(splitStartTime[0] === '' || splitStartTime[1] === '')) {
          periodStartTime.setHours((parseInt(splitStartTime[0], 10)));
          periodStartTime.setMinutes(parseInt(splitStartTime[1], 10));
        }

        const periodEndTime = new Date();
        const splitEndTime = currentPeriod.endTime.split(':');
        if (!(splitEndTime[0] === '' || splitEndTime[1] === '')) {
          periodEndTime.setHours((parseInt(splitEndTime[0], 10)));
          periodEndTime.setMinutes(parseInt(splitEndTime[1], 10));
        }

        if (datePipe.transform(periodStartTime, 'HH:mm') === datePipe.transform(periodEndTime, 'HH:mm')) {
          this.errorMsg = AppSettings.WARNING_ON_START_END_TIME;
          this.isDisabled = true;
          this.periodErrorMessages[periodIndex] = this.errorMsg;
        }
        else if (periodEndTime < periodStartTime) {
          this.errorMsg = AppSettings.WARNING_ON_END_TIME_GREATER_START_TIME;
          this.isDisabled = true;
          this.periodErrorMessages[periodIndex] = this.errorMsg;
        }
        else {
          this.isDisabled = false;
        }

        break;

      default:
        this.isDisabled = false;
        break;
    }
  }

  validatePeriodIntervals(): void {
    for (let i = 0; i < this.schoolSchedulePeriods.length; i++) {
      for (let j = i + 1; j < this.schoolSchedulePeriods.length; j++) {
        if (((this.schoolSchedulePeriods[i].startTime < this.schoolSchedulePeriods[j].endTime)
                && (this.schoolSchedulePeriods[j].startTime < this.schoolSchedulePeriods[i].endTime))
            ||
            (this.schoolSchedulePeriods[i].startTime <= this.schoolSchedulePeriods[j].startTime
                && this.schoolSchedulePeriods[j].endTime <= this.schoolSchedulePeriods[i].endTime))
        {
          this.periodErrorMessages[i] = AppSettings.WARNING_ON_INVALID_PERIOD_TIMINGS;
          this.periodErrorMessages[j] = AppSettings.WARNING_ON_INVALID_PERIOD_TIMINGS;
          this.isDisabled = true;
        }
      }
    }
  }

  validateExistingSchedule(): void {
      if (this.selectedSchoolScheduleTemplates === undefined ||  this.isUpdateDayPeriods) {
          return;
      }
      this.schoolScheduleForm.value.weekDayId.forEach( weekday => {
          this.schoolSchedulePeriods.forEach((schoolSchedulePeriod , index) => {
              const existingPeriods = this.selectedSchoolScheduleTemplates.filter(
                  x => weekday.value === x.weekDayId) || [];
              if (existingPeriods.length > 0) {
                  existingPeriods.forEach(existingPeriod => {
                      if ( existingPeriod.schoolSchedulePeriodId !== schoolSchedulePeriod.schoolSchedulePeriodId
                          && existingPeriod.periodName.toLowerCase() !== schoolSchedulePeriod.name.toLowerCase()
                          && ((existingPeriod.startTime < schoolSchedulePeriod.endTime
                          && schoolSchedulePeriod.startTime < existingPeriod.endTime)
                          ||
                          (existingPeriod.startTime <= schoolSchedulePeriod.startTime
                              && schoolSchedulePeriod.endTime <= existingPeriod.endTime))
                      ) {
                          this.periodErrorMessages[index] = AppSettings.WARNING_ON_INVALID_PERIOD_TIMINGS;
                          this.isDisabled = true;
                      }
                  });
              }
          });
      });

  }

  updateSelectedSchoolScheduleTemplates(): void {
    this.errorMsg = '';
    this.periodErrorMessages = [];
    if (this.periodLists.controls.periodListsView.status === AppSettings.VALID
        && this.schoolScheduleForm.status === AppSettings.VALID) {
      if (this.selectedSchoolScheduleTemplates === undefined) {
        this.selectedSchoolScheduleTemplates = [];
      }

      this.schoolScheduleForm.value.weekDayId.forEach(weekDay => {
          if (this.isUpdateDayPeriods) {
            this.selectedSchoolScheduleTemplates = this.selectedSchoolScheduleTemplates.filter(x => x.weekDayId !== weekDay.value);
          }
        this.schoolSchedulePeriods.forEach(schoolSchedulePeriod => {
          const existingPeriodIndex = this.selectedSchoolScheduleTemplates.findIndex(elt =>
              elt.weekDayId === weekDay.value && elt.periodName.toLowerCase() === schoolSchedulePeriod.name.toLowerCase());
          if (existingPeriodIndex !== -1) {
            const existingPeriodData = this.selectedSchoolScheduleTemplates[existingPeriodIndex];
            const currentPeriodInfo = {
              weekDayId: weekDay.value,
              weekDayName: weekDay.label,
              periodName: schoolSchedulePeriod.name,
              startTime: schoolSchedulePeriod.startTime,
              endTime: schoolSchedulePeriod.endTime,
              schoolSchedulePeriodId:
                  (existingPeriodData.schoolSchedulePeriodId === null || existingPeriodData.schoolSchedulePeriodId === undefined)
                      ? 0 : existingPeriodData.schoolSchedulePeriodId
            };
              this.selectedSchoolScheduleTemplates[existingPeriodIndex] = currentPeriodInfo;
          }
          else {
              this.selectedSchoolScheduleTemplates.push({
                weekDayId: weekDay.value,
                weekDayName: weekDay.label,
                periodName: schoolSchedulePeriod.name,
                startTime: schoolSchedulePeriod.startTime,
                endTime: schoolSchedulePeriod.endTime,
                schoolSchedulePeriodId:
                    (schoolSchedulePeriod.schoolSchedulePeriodId === null || schoolSchedulePeriod.schoolSchedulePeriodId === undefined)
                        ? 0 : schoolSchedulePeriod.schoolSchedulePeriodId
              });
          }

        });
      });
        this.updateScheduleTemp();
        this.schoolScheduleForm.controls['weekDayId'].reset();
        this.isUpdateDayPeriods = false;
        this.scrollToView();
    }
  }



  validWeeKday(): void {
    this.schoolScheduleForm.controls['weekDayId'].setValidators(Validators.required);
    this.schoolScheduleForm.controls['weekDayId'].updateValueAndValidity();
    this.weekdaysDropdown = { multiSelect: true, placeholder: 'Weekdays', data: this.filterWeekdays, noEntryFoundLabel: 'No Data Found', isRequired: true };
  }



  updateScheduleTemp(): void {
    this.schedulePeriodsList = [];
    Object.assign(this.schedulePeriodsList, this.selectedSchoolScheduleTemplates);
    if (this.schedulePeriodsList.length > 0) {
      this.filterSchoolScheduleTempList = [{
        name: 'Day', value: []
      }];
      for (const key of this.schedulePeriodsList) {
        const index = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
        if (index === -1) {
          const val = [];
          val.push(key);
          const data = { name: key.weekDayName, value: val };
          this.filterSchoolScheduleTempList.push(data);
        } else {
          const i = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
          this.filterSchoolScheduleTempList[i].value.push(key);
        }
      }

      let max = -Infinity;
      let j = -1;
      this.filterSchoolScheduleTempList.forEach(function (schedules, i): void {
        if (schedules.value.length > max) {
          max = schedules.value.length;
          j = i;
        }
      });

      for (let k = 0; k < max; k++) {
        this.filterSchoolScheduleTempList[0].value.push({
          periodNames: 'PERIOD',
          startTime: '00:00',
          endTime: '00:00'
        });
      }

      this.sortByTime(this.filterSchoolScheduleTempList);
      this.sortByWeekday(this.filterSchoolScheduleTempList);
    }
    else {
      this.schedulePeriodsList = [];
      this.selectedSchoolScheduleTemplates = [];
      this.schoolScheduleTempSelectList = [];
      this.filterSchoolScheduleTempList = [];
      this.periodsForm();
      this.errorMsg = '';
      this.isDisabled = false;
      this.isPeriodsTemp = true;
    }
  }

  sortByTime(data: any): void {
    if (data[0].value === undefined) {
      const check = [];
      check.push({ name: '', value: data });
      data = check;
    }
    data.forEach(g => g.value.forEach(element => {
      return g.value.sort((startTime, endTime) => {
        const aParts = getNumericParts(startTime.startTime);
        const bParts = getNumericParts(endTime.endTime);

        // Sorts by hour then minute
        return aParts[0] - bParts[0] || aParts[1] - bParts[1];
      });

      function getNumericParts(time): void {
        return time.split(' ')[0].split(':').map(x => +x);
      }
    }));
  }

  sortByWeekday(data): void {
    const sorter = {
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6,
      'sunday': 7
    };

    data.sort(function sortByDay(weekDay1, weekDay2): number {
      const day1 = (weekDay1.name !== null) ? weekDay1.name.toLowerCase() : weekDay1.name;
      const day2 = (weekDay2.name !== null) ?  weekDay2.name.toLowerCase() : weekDay2.name;
      return sorter[day1] - sorter[day2];
    });

    this.filterSchoolScheduleTempList[0].value.forEach(x => {
      x.startTime = null;
      x.endTime = null;
    });

    this.isPeriodsTemp = false;
  }

  editPeriods(data): void {
    this.isUpdateDayPeriods = true;
    const editData = [];
    const selectedArray = [];
    const validators = [];
    selectedArray.push({ label: data.value[0].weekDayName, value: data.value[0].weekDayId });

    data.value.forEach(t => {
      editData.push({
        weekDayId: t.weekDayId,
        weekDayName: t.weekDayName,
        schoolSchedulePeriodId: t.schoolSchedulePeriodId,
        name: t.periodName,
        startTime: t.startTime,
        endTime: t.endTime,
        isAddVisible: null,
        isRemoveVisible: null,
        periodTime: t.startTime + '-' + t.endTime
      });
    });

    const i = editData.length;
    if (editData.length > 1) {
      editData.forEach(e => {
        e.isAddVisible = false;
        e.isRemoveVisible = true;
      });
      editData[i - 1].isAddVisible = true;
      editData[i - 1].isRemoveVisible = true;
    }
    else if (editData.length === 1) {
      editData[i - 1].isAddVisible = true;
      editData[i - 1].isRemoveVisible = false;
    }
    this.periodLists.controls['periodListsView'] = this._fb.array(editData.map(ind => this._fb.group(ind)));
    this.isPeriodsTemp = true;

    this.schoolScheduleForm.controls['weekDayId'].patchValue(this.compareArrayData(this.filterWeekdays, selectedArray));
    this.errorMsg = '';
    this.isDisabled = false;




    validators.push(Validators.required, Validators.maxLength(15));
    this.periodLists.controls.periodListsView.value.forEach((element, j) => {
      // tslint:disable-next-line: max-line-length
      (<FormArray>this.periodLists.get('periodListsView')).controls[j].get('name').setValidators(validators);
      (<FormArray>this.periodLists.get('periodListsView')).controls[j].get('name').updateValueAndValidity({ emitEvent: false });
    });
    this.onChanges();
    this.cd.detectChanges();
    this.scrollToView();
  }


  scrollToView(): void{
    setTimeout(() => {
      this.scrollIntoViewById('tempName');
     });
  }


  deletePeriods(data: any): void {
    // const removedList = this.schoolScheduleTempList.filter(elt => elt.weekDayName !== data);
    const removedList = this.selectedSchoolScheduleTemplates.filter(elt => elt.weekDayName !== data);
    this.isUpdateDayPeriods = false;
    this.schoolScheduleForm.controls['weekDayId'].patchValue('');
    this.selectedSchoolScheduleTemplates = removedList;
    this.updateScheduleTemp();
  }

  onSubmitSchooolScheduleTemp(): void {

    switch (true) {
      case this.schoolScheduleForm.controls.templateName.status === AppSettings.INVALID:
        this.schoolScheduleFormDetails = true;
        break;
      // case this.schoolScheduleTempList.length === 0:
      case this.selectedSchoolScheduleTemplates.length === 0:
        this.openSnackBar(AppSettings.WARNING_ON_SCHEDULE_TEMPLATE, true);
        break;
      default:
        this.schoolScheduleTempList = this.selectedSchoolScheduleTemplates;
        this.saveDetails();
        break;
    }
  }

  saveDetails(): void {
    if (this.isUpdateData === true) {
      this.schoolschedulePeriodsUpdateView.periodsListView = [];
      this.schoolschedulePeriodsUpdateView.templateName = this.schoolScheduleForm.value.templateName;
      this.filterSchoolScheduleTempList.forEach(weekDay => {
        if (weekDay.name !== 'Day') {
          weekDay.value.forEach(scheduleList => {
            let schoolSchedulePeriodId = 0;
            if (!scheduleList.schoolSchedulePeriodId) {
              const findExistingPeriodIndex = this.originalScheduleTemplate.findIndex(x =>
                  x.periodName.toLowerCase() === scheduleList.periodName.toLowerCase()
                  && x.weekDayId === scheduleList.weekDayId);
              if (findExistingPeriodIndex >= 0) {
                schoolSchedulePeriodId = this.originalScheduleTemplate[findExistingPeriodIndex].schoolSchedulePeriodId;
                const indexDuplicatePeriod = this.schoolschedulePeriodsUpdateView.periodsListView.findIndex(
                    x => x.id === schoolSchedulePeriodId
                );
                if (indexDuplicatePeriod >= 0) {
                  this.schoolschedulePeriodsUpdateView.periodsListView[indexDuplicatePeriod].id = 0;
                }
              }
            }
            else {
              schoolSchedulePeriodId = scheduleList.schoolSchedulePeriodId;
            }
            this.schoolschedulePeriodsUpdateView.periodsListView.push({
              id: schoolSchedulePeriodId,
              weekDayId: scheduleList.weekDayId,
              name: scheduleList.periodName,
              startTime: scheduleList.startTime,
              endTime: scheduleList.endTime
            });
          });
        }
      });
      this.schoolScheduleTemplateService.schoolScheduleTemplateUpdateTemplatePut(this.schoolschedulePeriodsUpdateView).subscribe(res => {
        if (res.statusCode === this.httpStatus.OK) {
          this.cancel();
          this.openSnackBar(res.messages.ResultMessage);
          setTimeout(() => {
            this.scrollIntoView('app-table');
          });
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    }
    else {
      this.schoolschedulePeriodsView.periodsListView = [];
      this.schoolschedulePeriodsView.templateName = this.schoolScheduleForm.value.templateName;
      this.schoolScheduleTempList.forEach(i => {
        this.schoolschedulePeriodsView.periodsListView.push({
          weekDayId: i.weekDayId, name: i.periodName, startTime: i.startTime, endTime: i.endTime
        });
      });

      this.schoolScheduleTemplateService.schoolScheduleTemplateTemplatePost(this.schoolschedulePeriodsView).subscribe(res => {
        if (res.statusCode === this.httpStatus.OK) {
          this.cancel();
          this.openSnackBar(res.messages.ResultMessage);
          setTimeout(() => {
            this.scrollIntoView('app-table');
          });
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  onSelect($event): void {
   // if (this.isPeriodsTemp === true && this.periodLists.controls.periodListsView.status === AppSettings.VALID && $event.length > 0) {
      this.schoolScheduleForm.value.weekDayId = $event;
      if (this.schoolSchedulePeriods !== undefined && this.schoolSchedulePeriods.length > 0) {
        this.validateAllPeriods();
      }

   // }
  }
}
