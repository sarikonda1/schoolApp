import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffAttendanceService } from 'app/service/staff-attendence/staff-attendence.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { StaffAttendanceFilterView } from '../../models/staff-attendence-filter-view';
import { CommonComponent } from 'app/shared/common/common.component';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';
import { StaffAttendanceAddResultView } from 'app/models/staff/staff-attendance-add-result-view';
import { TimeValidator } from 'app/shared/custom-timepicker/custom-timepicker.validators';

@Component({
  selector: 'app-staff-attendence',
  templateUrl: './staff-attendence.component.html',
  styleUrls: ['./staff-attendence.component.scss'],
  providers: [StaffAttendanceService, StoreService]
})

export class StaffAttendenceComponent extends CommonComponent implements OnInit {
  @ViewChild('leaveInfoDialog') leaveInfoDialog;
  @ViewChild('staffAttendanceInput') staffAttendanceInput;
  currentComponent = 'StaffAttendenceComponent';
  staffAttendanceForm: FormGroup;
  massActionForm: FormGroup;

  filterViewModel: StaffAttendanceFilterView;
  staffAttendenceResultView: StaffAttendanceAddResultView;

  markAttendanceDate = this.getDefaultDate();
  tableSettings: {};
  rows: any[];
  totalRowsCount: number;
  pageCnt: number;
  selectedIdsList: any = [];
  attendenceAction: any[];
  private leaveInfo: any;
  dateFormat: any;
  leaveRequestAttachment: any;
  selectedAttendenceTypeValue: any;
  doValidate = false;
  validate = true;
  buttonEnable = true;
  staffAttendancesList: any = [];
  SelectedOperationEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6
  };

  columns = [
    { field: 'select', header: '', sortRequired: false, searchRequired: false },
    { field: 'staffName', header: 'Name', sort: true },
    { field: 'department', header: 'Department', sort: true },
    { field: 'staffCodes', header: 'Staff Code', sort: true },
    { field: 'onLeave', header: 'On Leave', sort: false, anchorDialog: true },
    { field: 'inTime', header: 'In Time', radioAction: true, icon: 'check', activeClass: 'green-fg' },
    { field: 'outTime', header: 'Out Time', radioAction: true, icon: 'check', activeClass: 'green-fg' },
    { field: 'isAbscent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' },
    { field: 'actions', header: 'Actions', sort: false },
  ];
  isTimePickerRequired: boolean;

  constructor(private staffAttendanceService: StaffAttendanceService, private dialogRef: MatDialog, public commonService: CommonService,
    private storeService: StoreService, public snackBar: MatSnackBar) {
    super();
    this.initializeForm();
    this.initializeTableSettings();
    this.initializeFilterView();
    this.dateFormat = this.getSchoolDateFormat();
  }

  ngOnInit(): void {
    this.initializeFilterView();
    this.attendenceAction = [
      { value: 1, label: 'Record In Time' },
      { value: 2, label: 'Record Out Time' },
      { value: 3, label: 'Record Absent' },
      { value: 4, label: 'Clear In Time' },
      { value: 5, label: 'Clear Out Time' },
      { value: 6, label: 'Clear Attendance' }
    ];
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAllFilteredStaffs();
  }
  initializeForm(): void {
    this.massActionForm = new FormGroup({
      massOption: new FormControl(''),
      time: new FormControl(null)
    });
    this.staffAttendanceForm = new FormGroup({
      attendanceDate: new FormControl(this.getDefaultDate(), [Validators.required])
    });
    this.staffAttendanceForm.valueChanges.subscribe(form => {
      this.doValidate = true;
      if (this.staffAttendanceForm.valid) {
        this.staffAttendanceInput.nativeElement.blur();
        this.markAttendanceDate = this.commonService.customDateFormat(this.staffAttendanceForm.value.attendanceDate, Pattern.DATE_FORMATE_YEAR).date;
        this.filterViewModel.pageNumber = AppSettings.PAGENUMBER;
        this.getAllFilteredStaffs();
        this.selectedIdsList = [];
        this.selectedAttendenceTypeValue = undefined;
        this.massActionForm.reset();
      }
    });
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Staff Attendance Details',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      showSelectAll: true,
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAllFilteredStaffs();
  }

  getAllFilteredStaffs(): void {
    if (this.staffAttendanceForm.valid) {
      this.staffAttendanceService.staffAttendances(
        this.filterViewModel.staffNames,
        this.commonService.customDateFormat(this.staffAttendanceForm.value.attendanceDate, Pattern.DATE_FORMATE_YEAR).date,
        this.filterViewModel.departments,
        this.filterViewModel.staffCodes,
        this.filterViewModel.absentOrPresents,
        this.filterViewModel.inTime,
        this.filterViewModel.inTimeBegin,
        this.filterViewModel.inTimeEnd,
        this.filterViewModel.outTime,
        this.filterViewModel.outTimeBegin,
        this.filterViewModel.outTimeEnd,
        this.filterViewModel.sortOrder,
        this.filterViewModel.sortBy,
        this.filterViewModel.pageNumber, this.filterViewModel.pageSize
      )
        .subscribe(res => {
          this.bindStaffResult(res);
        }, error => {
          this.errorResponse(error);
        });
    }
  }

  bindStaffResult(data: any): void {
    if (!data.pagedStaffAttendance) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedStaffAttendance.list;
      this.rows.forEach(row => {
        row.onLeave = (row.onLeave) ? 'YES' : '';

        row.operations = [
          {
            name: AppSettings.CLEAR_INTIME,
            icon: AppSettings.ACCESS_TIME,
            operationName: 4
          },
          {
            name: AppSettings.CLEAR_OUTTIME,
            icon: AppSettings.ACCESS_TIME,
            operationName: 5
          },
          {
            name: AppSettings.CLEAR_ATTENDENCE,
            icon: AppSettings.DELETE_ICON,
            operationName: 6
          }
        ];
      });
      this.totalRowsCount = data.pagedStaffAttendance.totalItems;
      this.pageCnt = data.pagedStaffAttendance.totalPages;

    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Staff Attendance Details',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters,
      isSelectRowRequired: true,
      isMultiDeleteRequired: false,
      visibleSelectAll: true,
      showSelectAll: true,
      headerOperations: {
        addingForm: {
          required: false
        }
      }
    };
  }


  selectedRows(event): void {
    this.selectedAttendenceTypeValue === undefined ? this.buttonEnable = true : this.buttonEnable = false;
    this.selectedIdsList = event.length ? event : [];
    this.buttonEnable = (this.selectedIdsList.length > 0);
    let t: any;
    if (this.massActionForm.value.massOption && this.selectedIdsList.length){
       this.buttonEnable = false;
    }
    event.length ? t = '' : this.massActionForm.reset();
  }

  staffAttendenceAction(data: any, isFormValid: boolean): void {
    if (isFormValid === null) {
      this.selectedIdsList = [];
    }
    else {
      isFormValid !== undefined && isFormValid === false ? isFormValid = false : isFormValid = true;
      if (!isFormValid) {
        this.doValidate = true;
        return;
      }
      if (data[data.columnName]) {
        return;
      }
    }
    this.selectedAttendenceTypeValue = null;
    this.staffAttendenceResultView = {};
    this.staffAttendenceResultView.staffAttendancAddViews = [];
    this.selectedIdsList.length !== 0 ? this.staffAttendenceResultView.staffAttendancAddViews
      = this.selectedIdsList : this.staffAttendenceResultView.staffAttendancAddViews.push(data.clickedRow ? data.clickedRow : data);

    data.columnName != null ? this.selectedAttendenceTypeValue = data.columnName : data.operation != null ? this.selectedAttendenceTypeValue = data.operation :
      this.selectedAttendenceTypeValue = data.massOption;

    if (this.selectedAttendenceTypeValue === 'outTime' || this.selectedAttendenceTypeValue === 'inTime') {
      this.massActionForm.value.time = null;
    }
    this.massActionForm.value.time = this.massActionForm.value.time === null ?
      (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
      this.massActionForm.value.time;

    this.staffAttendancesList = [];
    Object.assign(this.staffAttendancesList, this.staffAttendenceResultView.staffAttendancAddViews);

    if (this.selectedAttendenceTypeValue === this.SelectedOperationEnum.NUMBER_2 || this.selectedAttendenceTypeValue === 'outTime') {
      this.staffAttendenceResultView.inTime = null;
      const filterTemp = this.staffAttendancesList.filter(elt => elt.inTime === null);
      if (filterTemp && filterTemp.length) {
        this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ? AppSettings.IN_TIME_REQUIRED : AppSettings.IN_TIME_REQUIRED_MULTI, true);
        return;
      } else
        if (this.staffAttendancesList.filter(elt => elt.inTime > this.massActionForm.value.time).length > 0) {
          this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ?
            AppSettings.IN_TIME_GREATER_OUT_TIME : AppSettings.IN_TIME_GREATER_OUT_TIME_MULTI, true);
          return;
        }
    } else if (this.selectedAttendenceTypeValue === this.SelectedOperationEnum.NUMBER_1 || this.selectedAttendenceTypeValue === 'inTime') {
      if (this.staffAttendancesList.filter(elt =>
        (elt.outTime)
        && elt.outTime < this.massActionForm.value.time).length > 0) {
        this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ?
          AppSettings.IN_TIME_GREATER_OUT_TIME : AppSettings.IN_TIME_GREATER_OUT_TIME_MULTI, true);
        return;
      }
    }

    this.attendenceTypeAction(this.selectedAttendenceTypeValue);
    this.staffAttendanceService.markStaffAttendances(this.staffAttendenceResultView).subscribe(res => {
      this.attendenceResponse();
    },
      error => {
        this.errorResponse(error);
      });
  }
  attendenceResponse(): void {
    this.doValidate = false;
    this.getAllFilteredStaffs();
    this.removeValidators();
    this.massActionForm.reset();
    this.selectedIdsList = [];
    this.selectedAttendenceTypeValue = undefined;
    this.buttonEnable = true;
    this.massActionForm.patchValue({ 'massOption': null, 'time': null });
  }

  showLeaveInfo(row): void {
    const rowData = row.leaveRequestInfo;
    this.leaveInfo = {};
    this.leaveInfo.from = this.commonService.customDateFormat(rowData.fromDate, this.dateFormat).date;
    this.leaveInfo.to = this.commonService.customDateFormat(rowData.toDate, this.dateFormat).date;
    this.leaveInfo.reason = rowData.reason;
    this.leaveInfo.attachment = rowData.fileValue;
    this.leaveInfo.status = rowData.status;
    this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      panelClass: 'custom-modalbox',
      width: '400px',
      data: { template: this.leaveInfoDialog },
    });
  }
  closeLeaveRequest(): void {
    this.dialogRef.closeAll();
  }
  leaveRequest(): void {
    if (this.leaveInfo.attachment) {
      this.leaveRequestAttachment = this.storeService.getFilePath(this.leaveInfo.attachment);
      window.open(this.leaveRequestAttachment);
    }
  }

  setValidators(): void {
    this.massActionForm.get('time').setValidators([TimeValidator.validateTimeRequired]);
    this.massActionForm.get('time').updateValueAndValidity();
  }

  removeValidators(): void {
    this.massActionForm.get('time').clearValidators();
    this.massActionForm.controls.time.markAsPristine();
    this.massActionForm.get('time').updateValueAndValidity();
  }

  attendenceTypeAction(data): void {
    this.staffAttendenceResultView.isAbscent = this.staffAttendenceResultView.isAbscent ? this.staffAttendenceResultView.isAbscent : null;
    this.staffAttendenceResultView.calendarDate = this.commonService.customDateFormat(this.staffAttendanceForm.value.attendanceDate, Pattern.DATE_FORMATE_YEAR).date;

    switch (data) {
      case this.SelectedOperationEnum.NUMBER_1:
      case 'inTime':
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_1;
        this.staffAttendenceResultView.inTime = (this.massActionForm.value.time === ':' || this.massActionForm.value.time === null) ?
          (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
          this.massActionForm.value.time;
        break;
      case this.SelectedOperationEnum.NUMBER_2:
      case 'outTime':
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_2;
        this.staffAttendenceResultView.outTime = (this.massActionForm.value.time === ':' || this.massActionForm.value.time === null) ?
          (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
          this.massActionForm.value.time;
        break;
      case 'isAbscent':
      case this.SelectedOperationEnum.NUMBER_3:
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_3;
        this.staffAttendenceResultView.isAbscent = '1';
        break;
      case 'clear in time':
      case this.SelectedOperationEnum.NUMBER_4:
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_4;
        break;
      case 'clear out time':
      case this.SelectedOperationEnum.NUMBER_5:
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_5;
        break;
      default:
        this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_6;
    }
  }

  onSelect(data): void {
    this.buttonEnable = false;
    this.selectedAttendenceTypeValue = data.value;
    this.selectedAttendenceTypeValue === 1 ||
      this.selectedAttendenceTypeValue === 2 ? (this.isTimePickerRequired = true, this.setValidators()) : (this.isTimePickerRequired = false, this.removeValidators());
  }

  onAction(): void {
    if (!this.massActionForm.valid) {
      this.massActionForm.controls.time.markAsDirty();
      this.massActionForm.controls.time.updateValueAndValidity();
      return;
    }
  }

}
