import { Component, OnInit, ViewChild } from '@angular/core';
import { HolidayConfigurationService } from 'app/service/class-schedules/holiday-configuration.service';
import { HolidayViewModel } from '../model/holiday-view-model';
import { HttpClient } from '@angular/common/http';
import { HolidaySearchView } from '../model/holiday-search-view';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { HolidaysView } from '../model/holidays-view';
import * as HttpStatus from 'http-status-codes';
import { CommonComponent } from 'app/shared/common/common.component';
import { YesNo } from '../../../../models/yes-no-view';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CalenderService } from 'app/service/staff/calender.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
  animations: fuseAnimations,
  providers: [ClassTimetableService, CalenderService]
})
export class HolidaysComponent extends CommonComponent implements OnInit {

  @ViewChild('addHolidayTemplate') addHolidayTemplate;
  @ViewChild('holidayConfigurationsForm') holidayConfigurationsForm;

  holidaysView: HolidaysView;
  holidayViewModel: HolidayViewModel;
  holidaySearchView: HolidaySearchView;
  /* form */
  holidaysGrpForm: FormGroup;

  //  refernces for ng prime table 
  tableData: Array<any>;
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  //  var for store clicked row details 
  failedRecords: any = [];
  checkedRecords: any;
  // filteredRecords: any;
  filterClasses: Array<any> = [];
  filterSections: Array<any> = [];
  classNames: Array<any> = [];
  sectionNames: Array<any> = [];
  holidayConfigFormSubmitted = false;
  isDeleteAllRequired = false;
  closeAddPanel = false;
  isUpdateData = false;
  buttonDisable = false;
  doValidate = true;
  holidayIds: Array<string> = [];
  holidayDetails: any;
  modelname: any;
  currentComponentName = 'HolidaysComponent';
  YesOrNo: Array<any> = YesNo.values;
  disbleSubmitBtn = false;
  clickedRowData: any;
  startDate: Date;
  endDate: Date;
  constructor(private formBuilder: FormBuilder, public commonService: CommonService,
    public dialog: MatDialog, private _classSectionService: ClassSectionService,
    private _holidayConfigurationService: HolidayConfigurationService,
    private http: HttpClient, public snackBar: MatSnackBar, private classTimetableService: ClassTimetableService, private calenderService: CalenderService) {
    super();
    this.holidaySearchView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
    };
    const schoolAcademicSession = localStorage.getItem('_as') ? JSON.parse(localStorage.getItem('_as')) : null;
    if (schoolAcademicSession) {
      this.academicSessionMinDate = schoolAcademicSession.startDate;
      this.academicSessionMaxDate = new Date(schoolAcademicSession.endDate);
      this.academicSessionMaxDate.setMonth(this.academicSessionMaxDate.getMonth() + 3);
    }
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'holidayReason', header: 'Description', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'isStaffHoliday', header: 'Staff Holiday', sort: true },
      { field: 'fromDate', header: 'From Date', sort: true },
      { field: 'toDate', header: 'To Date', sort: true },
      { field: 'actions', header: 'Actions' },
    ];

    /* initializing form with validations */
    this.holidaysGrpForm = new FormGroup({
      id: new FormControl(''),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      holidayReason: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      isStaffHoliday: new FormControl(''),
      classId: new FormControl(''),
      sectionId: new FormControl(''),
      isPostToCalender: new FormControl(AppSettings.NO),
    });

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.holidaySearchView,
      tablename: 'Holidays',
      componentName: this.currentComponentName,
      isNewStudentCourseSelectionRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
    };
    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.holidaySearchView = modelTableComponent;
    }
    if (!this.getTokenParam('_as')) {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
    } else {
      // / initializing table settings /
    
      this.holidayTableData(this.holidaySearchView);
      this.getClassesList();
    }
    this.academicPrevAndAfterDates();
  }
    // get Academic Start Date and End Date with prev and after 3 months
    academicPrevAndAfterDates(): void {
      this.calenderService.getAllSchoolCalender().subscribe(res => {
        this.startDate = res.academicDatesView.startDate;
        this.endDate = res.academicDatesView.endDate;
      });
    }

  response(data): void {
    this.rows = [];
    if (data.statusCode === HttpStatus.OK && data.searchHolidayView) {
      data.searchHolidayView.list.forEach(e => {
        e.fromDate = (e.fromDate == null) ? null : this.commonService.customDateFormat(e.fromDate, this.getSchoolDateFormat()).date;
        e.toDate = (e.toDate == null) ? null : this.commonService.customDateFormat(e.toDate, this.getSchoolDateFormat()).date;
      });
      this.rows = data.searchHolidayView.list;
      this.totalItems = data.searchHolidayView.totalItems;
    }

    const holidayoperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];

    this.rows.forEach(e => {
      e.operations = holidayoperations;
      e.isStaffHoliday = (e.isStaffHoliday === 1) ?
        AppSettings.YES : AppSettings.NO;
    });

    if (data.searchHolidayView) {
      this.holidaySearchView.pageNumber = data.searchHolidayView.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.holidaySearchView,
      rows: this.rows,
      tablename: 'Holidays',
      componentName: this.currentComponentName,
      isNewStudentCourseSelectionRequired: true,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,

      headerOperations: {
        infoButton: {
          required: true,
          text: 'Holidays'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.BUTTON_NAME
        }
      }
    };
  }

  // holidays list data
  holidayTableData(data: any): void {
    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.holidaySearchView = modelTableComponent;
    }
    this.holidayIds = [];
    this._holidayConfigurationService.searchHolidays(data.classId, data.sectionId, data.fromDate,
      data.fromDateBegin, data.fromDateEnd, data.toDate, data.toDateBegin, data.toDateEnd, data.holidayReason,
      data.isStaffHoliday, data.sortOrder, data.sortBy, this.failedRecords, data.pageNumber, data.pageSize).subscribe(x => this.response(x), error => {
        this.errorResponse(error);
      });
  }


  // Get Classes to filter table data
  getClassesList(): void {
    this.filterClasses = [];
    this._classSectionService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterClasses.push({
              label: element.name,
              value: element.id
            });
            this.classNames = this.filterClasses;
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getSectionsList();
  }

  // Get Sections to filter table data
  getSectionsList(): void {
    this.filterSections = [];
    this._classSectionService.schoolAcademicClassSections().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterSections.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // on selection of class
  onSelectClass(data: any): void {
    this.sectionNames = [];
    this.holidaysGrpForm.controls['sectionId'].patchValue(null);
    if (data.value) {
      this.loadSections(data.value);
    }
  }
  // End

  loadSections(data): void {
    this.sectionNames = [];
    // this._classSectionService.schoolAcademicClassSections(null, data).subscribe(response => {
    //   if (response.listViews.length) {
    //     response.listViews.forEach(element => {
    //       this.sectionNames.push({
    //         label: element.name,
    //         value: element.id
    //       });
    //     });
    //   }

    this.classTimetableService.classTimetableSectionsGet(data).subscribe(res => {
      if (res.classTimetableSectionsView != null) {
        res.classTimetableSectionsView.map(x => {
          this.sectionNames.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }


  // onCancelClick
  onCancelClick(): void {
    this.holidaysGrpForm.reset();
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.buttonDisable = false;
    this.holidayConfigFormSubmitted = false;
    this.holidayConfigurationsForm.resetForm();
    this.sectionNames = [];
  }
  // End


  // submit the data of holidays configuration
  saveHolidayConfiguration(holidaysGrpForm: any): void {
    this.holidayConfigFormSubmitted = true;
    if (holidaysGrpForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      if (this.isUpdateData === true) {
        this.holidayViewModel = holidaysGrpForm.value;
        this.holidayViewModel.id = this.holidayDetails.id;
        this._holidayConfigurationService.updateHoliday(this.holidayViewModel).subscribe(res =>
          this.updateResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      } else {
        holidaysGrpForm.value.isStaffHoliday = holidaysGrpForm.value.isStaffHoliday == null ? 0 : holidaysGrpForm.value.isStaffHoliday;
        this.holidaysView = holidaysGrpForm.value;
        this._holidayConfigurationService.createHolidays(this.holidaysView).subscribe(res => this.addResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }
  // End

  // response of holidays configuration after update data
  updateResponse(response): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      } else {
        this.closeAddPanel = true;
        this.holidayTableData(this.holidaySearchView);
        this.holidaysGrpForm.reset();
        this.holidayConfigurationsForm.resetForm();
        this.isUpdateData = false;
        this.buttonDisable = false;
      }
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // response after add data of holidays 
  addResponse(response): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      this.closeAddPanel = true;
      this.holidayTableData(this.holidaySearchView);
      this.holidaysGrpForm.reset();
      this.holidayConfigurationsForm.resetForm();
      this.isUpdateData = false;
      this.buttonDisable = false;
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // row-wise actions of the table(edit/delete)
  rowActions(response): void {
    if (response.operation === AppSettings.EDIT) {
      this.isUpdateData = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.clickedRowData = response.clickedRow;
      this._holidayConfigurationService.fetchHolidayById(response.clickedRow.id)
        .subscribe(res => this.holidayConfigurationIdValue(res), error => {
          this.errorResponse(error);
        });
    }

    if (response.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      dialogRef.afterClosed().subscribe(action => {
        this.holidayIds = [];
        if (action === AppSettings.YES) {
          this.holidayIds.push(response.clickedRow.id);
          this._holidayConfigurationService.deleteHolidays(this.holidayIds).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }
  // End

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.holidayTableData(this.holidaySearchView);
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }
  // End

  // to set holidays data to form after edit click
  holidayConfigurationIdValue(holidayData: any): void {
    if (holidayData.holidayDetailsView != null) {
      this.holidaysGrpForm.patchValue(holidayData.holidayDetailsView);

      if (holidayData.holidayDetailsView.classId !== null && holidayData.holidayDetailsView.classId !== undefined) {
        this.loadSections(holidayData.holidayDetailsView.classId);
      }

      this.holidaysGrpForm.controls['sectionId'].setValue(holidayData.holidayDetailsView.sectionId);
      const isStaffHoliday = (this.clickedRowData.isStaffHoliday === AppSettings.YES) ?
        1 : 0;
      this.holidaysGrpForm.controls['isStaffHoliday'].setValue(isStaffHoliday);
      this.holidayDetails = holidayData.holidayDetailsView;
    } else {
      this.openSnackBar(holidayData.messages.ResultMessage);
    }
  }
  // End

  // to open the add form(reset things)
  addForm(): void {
    this.closeAddPanel = false;
    this.holidaysGrpForm.reset();
    this.holidayConfigurationsForm.resetForm();
    this.holidaysGrpForm.controls.isStaffHoliday.setValue(1);
    this.holidaysGrpForm.controls.isPostToCalender.setValue(0);
    this.isUpdateData = false;
    this.buttonDisable = true;
  }
  // End

  // Multi Delete 
  deleteAll(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this._holidayConfigurationService.deleteHolidays(this.holidayIds).subscribe(res => this.multiDeleteResponse(res), error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this.failedRecords = (error.error.failedRecords);
          }
          this.errorResponse(error);
          this.holidayTableData(this.holidaySearchView);
        });
      }
    });
  }
  // End

  // select all records from table(delete)
  selectAllData(holidays: any): void {
    if (holidays.length > 0) {
      this.holidayIds = [];
      this.isDeleteAllRequired = true;
      holidays.forEach(element => {
        this.holidayIds.push(element.id);
      });
    }
    else {
      this.isDeleteAllRequired = false;
    }
  }
  // End


  // response after multi delete
  multiDeleteResponse(response: any): void {
    if (response.failedRecords.length > 0) {
      this.failedRecords = response.failedRecords;
    }
    if (response.statusCode === HttpStatus.OK) {
      this.checkedRecords = this.rows;
      this.holidayTableData(this.holidaySearchView);
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // just adding this function for ignore build error --temp
  onTableRowUnSelecloadHolidaysDatat(e): void {

  }
  // End

  // select individual record from Holidays table 
  onTableRowSelect(data: any): void {
    this.holidayIds.push(data.id);
  }

  // Unselect individual record from Holidays table 
  onTableRowUnSelect(value: any): void {
    const index = this.holidayIds.findIndex((v: any) => {
      return value === v.id;
    });
    this.holidayIds.splice(index, 1);
  }
  onStaffChange(data: any): void {
    if (data === AppSettings.PAGENUMBER) {
      this.holidaysGrpForm.controls.classId.setValue(null);
      this.holidaysGrpForm.controls.sectionId.setValue(null);
    }

  }
}





