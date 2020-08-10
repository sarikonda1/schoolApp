import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSettings, Pattern } from 'app/app.constants';
import { StudentAttendanceFilterView } from '../model/student-attendance-filter-view';
import { StudentAttendanceService } from 'app/service/student-attendance/student-attendance.service';
import { StudentAttendanceStatusView } from '../model/student-attendance-status-view';
import { StudentAttendanceAddView } from '../model/student-attendance-add-view';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassAttendanceView } from '../model/class-attendance-view';
import { CustomDialogComponent } from '../../../../shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StoreService } from 'app/service/file-management/store.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
  providers: [StudentDBService, StudentAttendanceService, SchoolAcademicSessionService, GradeSetupService, ClassesConfigService, ClassTimetableService]
})
export class StudentAttendanceComponent extends CommonComponent implements OnInit {
  currentComponent = 'StudentAttendanceComponent';
  @ViewChild('attendanceSummary') attendanceSummary;
  @ViewChild('leaveInfoDialog') leaveInfoDialog;
  filterViewModel: StudentAttendanceFilterView;
  studentAttendanceForm: FormGroup;
  massActionForm: FormGroup;
  columns = [
    { field: 'select', header: '', sortRequired: false, searchRequired: false },
    { field: 'studentName', header: 'Name', sort: true },
    { field: 'rollNumber', header: 'Roll Number', sort: true },
    { field: 'admissionNumber', header: 'Admission No', sort: true },
    { field: 'onLeave', header: 'Leave Request', sort: true, anchorDialog: true },
    { field: 'present', header: 'Present', radioAction: true, icon: 'check', activeClass: 'green-fg' },
    { field: 'absent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' }
  ];
  tableSettings: {};
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  classes: Array<{ label: string, value: string }> = [];
  filterdStudents: any;
  validate = true;
  selectedIdsList = [];
  markAttendanceDate = '';
  dateFormat: any;
  studentAttendance: StudentAttendanceAddView;
  classAttendanceView: ClassAttendanceView;
  attendanceStatus: StudentAttendanceStatusView;
  sections: any[];
  additionalButton: any = {};
  private leaveCount: number;
  private presentCount: number;
  private absentCount: number;
  private leaveInfo: any;
  leaveRequestAttachment: any;
  classAttendanceMarked: false;
  academicSession: any;
  isStaffLogin = false;
  staffInfo: any[] = [];
  hideButtons = false;
  submitted = false;
  isSingleClick: Boolean = true;
  constructor(public commonService: CommonService, private studentDbService: StudentDBService,
    public studentAttendanceService: StudentAttendanceService,
    public gradeSetupService: GradeSetupService, private storeService: StoreService,
    private dialogRef: MatDialog, public classTimetableService: ClassTimetableService, public snackBar: MatSnackBar, private _focusMonitor: FocusMonitor) {
    super();
    this.initializeFilterView();
    this.initializeTableSettings();
    this.dateFormat = this.getSchoolDateFormat();
  }

  ngOnInit(): void {
    this.academicSession = JSON.parse(localStorage.getItem('_as'));
    this.initializeForm();
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
  initializeForm(): void {
    this.studentAttendanceForm = new FormGroup({
      attendanceDate: new FormControl(this.getDefaultDate(), [Validators.required]),
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl(null, [Validators.required]),
    });
    this.massActionForm = new FormGroup({
      massOption: new FormControl('absent', [Validators.required]),
    });
  }
  getClasses(isManualChange = false): void {
    this.classes = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classes.push({
            label: element.name,
            value: element.id
          });
        });
        if (isManualChange) {
          this.onSelectClass({ value: this.studentAttendanceForm.value.classId }, isManualChange);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // on selection of class
  onSelectClass(data: any, isManualChange = false): void {
    this.sections = [];
    if (!isManualChange) {
      this.studentAttendanceForm.controls.sectionId.setValue(null);
    }
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(response => {
      if (response.classTimetableSectionsView != null) {
        if (response.classTimetableSectionsView.length) {
          response.classTimetableSectionsView.map(x => {
            this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      attendanceDate: new Date(),
      classIds: [],
      sectionIds: [],
      admissionNumber: [],
      studentNames: [],
      rollNumber: [],
      absentOrPresents: []
    };
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentName', header: 'Name', sort: true },
      { field: 'rollNumber', header: 'Roll Number', sort: true },
      { field: 'admissionNumber', header: 'Admission No', sort: true },
      { field: 'onLeave', header: 'Leave Request', sort: true, anchorDialog: true },
      { field: 'present', header: 'Present', radioAction: true, icon: 'check', activeClass: 'green-fg' },
      { field: 'absent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' }
    ];
  }
  onPresentAbsent(data): void {
    if (data[data.columnName] || this.hideButtons) {
      return;
    }
    this.attendanceStatus = {};
    this.attendanceStatus.id = data.studentAttendanceId;
    this.attendanceStatus.schoolAcademicSessionStudentId = data.schoolAcademicSessionStudentId;
    this.attendanceStatus.calendarDate = new Date(this.markAttendanceDate);
    this.attendanceStatus.leaveRequestId = data.leaveRequestId === '' ? null : data.leaveRequestId;
    this.setAttendanceStatus(data.columnName);
    this.studentAttendance = {};
    this.studentAttendance.studentAttendanceStatusViews = [this.attendanceStatus];
    this.studentAttendanceService.markStudentAbsentPresent(this.studentAttendance)
      .subscribe(res => {
        this.setStudentData(res, this.attendanceStatus);
      }, error => {
        this.errorResponse(error);
      });

  }
  setStudentData(res, data): void {
    // this.massActionForm.reset();
    this.getAllFilteredStudents();
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Student Attendance Details',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      showSelectAll: true,
    };
  }
  onSearchHeaderForm(): void {
    if (this.studentAttendanceForm.valid) {
      this.filterViewModel.classIds = [this.studentAttendanceForm.value.classId];
      this.filterViewModel.sectionIds = [this.studentAttendanceForm.value.sectionId];
      this.getAllFilteredStudents();
    } else {
      this.submitted = false;
    }
  }
  tableData(_event: any): void {
    Object.assign(_event, {
      classIds: this.filterViewModel.classIds,
      sectionIds: this.filterViewModel.sectionIds
    });
    this.filterViewModel = _event;
    this.getAllFilteredStudents();
  }

  getAllFilteredStudents(): void {
    this.markAttendanceDate = this.commonService.customDateFormat(this.studentAttendanceForm.value.attendanceDate, Pattern.DATE_FORMATE_YEAR).date;
    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.studentAttendanceService.studentAttendances(
      this.filterViewModel.studentNames,
      this.markAttendanceDate,
      this.filterViewModel.admissionNumber,
      this.filterViewModel.rollNumber,
      this.filterViewModel.classIds,
      this.filterViewModel.sectionIds,
      this.filterViewModel.absentOrPresents,
      this.filterViewModel.sortOrder,
      this.filterViewModel.sortBy,
    )
      .subscribe(res => {
        this.submitted = true;
        this.bindStudentResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  bindStudentResult(data: any): void {
    if (data.classAndSections && this.isStaffLogin) {
      this.staffInfo = data.classAndSections;
      this.checkStaff();
    }
    if (!data.pagedStudentAttendance) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedStudentAttendance;
      this.rows.forEach(row => {
        row.onLeave = (row.onLeave) ? 'YES' : '';
      });
      this.totalRowsCount = data.pagedStudentAttendance.length;
      this.massActionForm.controls['massOption'].patchValue('absent');
    }
    this.absentCount = data.studentAbsentCount;
    this.leaveCount = data.studentLeaveCount;
    this.presentCount = data.studentPresentCount;

    this.classAttendanceMarked = data.classAttMarked;
    this.additionalButton = {};
    if (this.rows.length > 0 && !this.hideButtons) {
      if (!this.classAttendanceMarked) {
        this.additionalButton = {
          name: 'Mark Attendance Complete',
          class: 'accent',
          textColor: 'text-uppercase',
          clickAction: 'markAttendanceComplete'
        };
      }
      else {
        this.additionalButton = {
          name: 'Attendance Completed',
          // class: 'disabled',
          textColor: 'button-disabled-label text-uppercase',
          disable: 'disabled',
          clickAction: ''
        };
      }
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Student Attendance Details',
      componentName: this.currentComponent,
      isPaginationRequired: false,
      filtersList: data.filters,
      isSelectRowRequired: !this.hideButtons,
      isMultiDeleteRequired: false,
      visibleSelectAll: !this.hideButtons,
      showSelectAll: !this.hideButtons,
      headerOperations: {
        addingForm: {
          required: false
        },
        additionalButtons: [
          this.additionalButton
        ]
      }
    };
  }

  onSelectOption(value: string): void {
    if (value.length >= 3) {
      this.filterdStudents = [];
      this.studentDbService.studentNames(value).subscribe((res) => {
        if (res.students.length > 0) {
          res.students.forEach((student: any) => this.filterdStudents.push({
            label: student.studentName,
            value: student.id,
            class: student.currentClassName,
            section: student.currentSectionName
          })
          );
        }
      });
    }
    else {
      this.filterdStudents = [];
    }
  }


  markAttendanceComplete(event): void {
    if (event === 'markAttendanceComplete') {
      const absentStudentsList = this.rows.filter(function (element): boolean {
        return element.absent;
      });

      this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { template: this.attendanceSummary, title: 'Attendance Summary' },
      });
    }
  }

  submitAttendance(): void {
    this.classAttendanceView = {};
    if (this.filterViewModel.classIds && this.filterViewModel.classIds[0]) {
      this.classAttendanceView.classId = this.filterViewModel.classIds[0];
    }
    if (this.filterViewModel.sectionIds && this.filterViewModel.sectionIds[0]) {
      this.classAttendanceView.sectionId = this.filterViewModel.sectionIds[0];
    }
    this.classAttendanceView.calendarDate = new Date(this.markAttendanceDate);
    this.studentAttendanceService.markAttendance(this.classAttendanceView)
      .subscribe(res => this.setStudentData(res, this.classAttendanceView),
        err => this.errorResponse(err));
    this.dialogRef.closeAll();
  }

  selectedRows(event): void {
    this.selectedIdsList = event.length ? event : [];
  }
  massActionsApply(): void {
    if (this.isSingleClick) {
      this.isSingleClick = false;
      this.studentAttendance = {};
      this.selectedIdsList.forEach((studentAttendanceRecord: any) => {
        this.attendanceStatus = {};
        this.attendanceStatus.id = studentAttendanceRecord.studentAttendanceId;
        this.attendanceStatus.schoolAcademicSessionStudentId = studentAttendanceRecord.schoolAcademicSessionStudentId;
        this.attendanceStatus.calendarDate = new Date(this.markAttendanceDate);
        this.attendanceStatus.leaveRequestId = studentAttendanceRecord.leaveRequestId === '' ? null : studentAttendanceRecord.leaveRequestId;
        this.setAttendanceStatus(this.massActionForm.value.massOption);
        if (this.studentAttendance.studentAttendanceStatusViews === undefined) {
          this.studentAttendance.studentAttendanceStatusViews = [];
        }
        this.studentAttendance.studentAttendanceStatusViews.push(this.attendanceStatus);
      });
      this.studentAttendanceService.markStudentAbsentPresent(this.studentAttendance)
        .subscribe(res => {
          this.setStudentData(res, this.attendanceStatus);
        }, error => {
          this.errorResponse(error);
        });
      setTimeout(() => {
        this.isSingleClick = true;
      }, 1000);
    }
  }
  setAttendanceStatus(action): void {
    if (action === 'present') {
      this.attendanceStatus.isPresent = '1';
      this.attendanceStatus.isAbscent = '0';
    } else if (action === 'absent') {
      this.attendanceStatus.isPresent = '0';
      this.attendanceStatus.isAbscent = '1';
    }
    else {
      this.attendanceStatus.isPresent = '0';
      this.attendanceStatus.isAbscent = '0';
    }
  }
  showLeaveInfo(row): void {
    const rowData = row.leaveRequestInfo;
    this.leaveInfo = {};
    this.leaveInfo.from = this.commonService.customDateFormat(rowData.fromDate, this.dateFormat).date;
    this.leaveInfo.to = this.commonService.customDateFormat(rowData.toDate, this.dateFormat).date;
    this.leaveInfo.reason = rowData.reason;
    this.leaveInfo.attachment = rowData.fileValue;
    this.leaveInfo.status = rowData.leaveRequestStatus;
    this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      panelClass: 'custom-modalbox',
      width: '400px',
      data: { template: this.leaveInfoDialog },
    });
  }

  openAttachment(): void {
    if (this.leaveInfo.attachment) {
      this.leaveRequestAttachment = this.storeService.getFilePath(this.leaveInfo.attachment);
      window.open(this.leaveRequestAttachment);
    }
  }

  resetFilter(): void {
    // this.studentAttendanceForm.reset();
  }

  checkStaff(): void {
    if (this.isStaffLogin) {
      if (this.staffInfo.find(x => x.classId === this.studentAttendanceForm.controls.classId.value
        && x.sectionId === this.studentAttendanceForm.controls.sectionId.value && x.isClassTeacher === true) === undefined) {
        this.hideButtons = true;
      } else {
        this.hideButtons = false;
      }
    }
  }
  close(): void {
    setTimeout(() => {
      this._focusMonitor.stopMonitoring(document.getElementById('navButton_1'));
    });
  }

}
