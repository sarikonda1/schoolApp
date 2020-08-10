import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { fuseAnimations } from '@fuse/animations';
import { AppSettings } from 'app/app.constants';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from 'app/service/common.service';
import { SearchStudentLeaveRequestView } from '../model/search-student-leave-request-view';
import { LeaveRequestService } from 'app/service/academic-service/api/leave-request.service';
import { LeaveRequestViewModel } from '../model/leave-request-view-model';
import { LeaveStatusChangeViewModel } from '../model/leave-status-change-view-model';
import { StoreService } from 'app/service/file-management/store.service';
import 'rxjs/add/operator/debounceTime';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-student-leave-requests',
  templateUrl: './student-leave-requests.component.html',
  styleUrls: ['./student-leave-requests.component.scss'],
  animations: fuseAnimations,
  providers: [LeaveRequestService]
})

export class StudentLeaveRequestsComponent extends CommonComponent implements OnInit {
  @ViewChild('searchDetailsForm') searchDetailsForm;
  @ViewChild('logoImgInput') logoImgInput: ElementRef;

  leaveRequestViewModel: LeaveRequestViewModel;
  filterViewModel: SearchStudentLeaveRequestView;
  leaveStatusChangeViewModel: LeaveStatusChangeViewModel;
  closeAddPanel: boolean;
  searchFormDetails = true;
  isSubmit = true;
  logoImgProp: any;
  studentDetails: any;
  searchForm: FormGroup;
  uploadFiles: FormGroup;
  filterdStudents: Array<any> = [];
  statusIds: Array<any> = [];
  httpStatus: any;
  nameImgProp: any;

  // table variables
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalRowsCount: number;
  custRowsPerPageOptions: Array<number> = [];
  cols: any[];
  currentComponent = 'StudentLeaveRequestsComponent';
  fileDetails: any;
  academicSession: any;

  constructor(private cd: ChangeDetectorRef, private sanitizer: DomSanitizer, public commonService: CommonService,
    private _fb: FormBuilder, private leaveRequestService: LeaveRequestService,
    private storeService: StoreService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.academicSession = JSON.parse(localStorage.getItem('_as'));

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }

    this.initializeForm();
    this.studentDetails = {};
    this.getAllFilteredStudentLeaveRequests(this.filterViewModel);
    this.searchForm.controls['studentId'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof(name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 1) {
        this.leaveRequestService.studentNames(name).subscribe((res) => {
          this.filterdStudents = (res.value.students.length > 0) ? res.value.students : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdStudents = [];
      }
    });
  }

  initializeForm(): void {
    this.searchForm = this._fb.group({
      studentId: new FormControl(null),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required, Validators.maxLength(200)])
    });

    this.uploadFiles = this._fb.group({
      studentFileNameWithExtension: null,
      studentFileValue: null,
    });

    this.leaveRequestViewModel = {};
    this.leaveStatusChangeViewModel = {};
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      ClassIds: [],
      admissionNumbers: [],
      studentNames: [],
      sectionIds: [],
      reasons: [],
      statusIds: []
    };
  }

  setColumnHeaders(): void {
    this.cols = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'admissionNumber', header: 'admissionNumber', sort: true },
      { field: 'fromDate', header: 'From Date', sort: true },
      { field: 'toDate', header: 'To Date', sort: true },
      { field: 'reason', header: 'Reason', sort: true },
      { field: 'approved', header: 'approve', radioAction: true, icon: 'check', sort: false, activeClass: 'green-fg' },
      { field: 'rejected', header: 'reject', radioAction: true, icon: 'clear', sort: false, activeClass: 'red-fg' },
      { field: 'view', header: 'Attachment', sort: false },
    ];
  }

  initializeTableSettings(): void {
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.filterViewModel,
      tablename: 'Student Leave Requests',
      componentName: this.currentComponent,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        }
      },
    };
  }

  tableData(_event: SearchStudentLeaveRequestView): void {
    this.filterViewModel = _event;
    this.getAllFilteredStudentLeaveRequests(this.filterViewModel);
  }

  getAllFilteredStudentLeaveRequests(data: any): void {
    this.leaveRequestService.get(data.studentNames, data.ClassIds, data.sectionIds, data.admissionNumbers,
      data.fromDateBegin, data.fromDateEnd, data.toDateBegin, data.toDateEnd, data.reasons, data.statusIds, data.sortOrder, data.sortBy,
      data.pageNumber, data.pageSize).
      subscribe(res => {
        this.bindStudentLeaveRequestResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  bindStudentLeaveRequestResult(data: any): void {
    if (!data.value.pagedLeaveRequests) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      data.value.pagedLeaveRequests.list.forEach(formatDate => {
        formatDate.fromDate = formatDate.fromDate != null ? this.commonService.customDateFormat(formatDate.fromDate.toString(), this.getSchoolDateFormat()).date : null;
        formatDate.toDate = formatDate.toDate != null ? this.commonService.customDateFormat(formatDate.toDate.toString(), this.getSchoolDateFormat()).date : null;
      });
      this.rows = data.value.pagedLeaveRequests.list;
      this.totalRowsCount = data.value.pagedLeaveRequests.totalItems;
      this.pageCnt = data.value.pagedLeaveRequests.totalPages;
      this.rows.forEach(e => {
        switch (true) {
          case e.status === AppSettings.APPROVE_OPERATION_LEAVE_APPROVE:
            e.approved = 1;
            break;
          case e.status === AppSettings.REJECT_OPERATION_LEAVE_REQUEST:
            e.rejected = 1;
            break;
        }
        e.operations = [
          {
            name: AppSettings.VIEW_LEAVE_REQUEST,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW
          }
        ];
      });
    }
    if (data.value.pagedLeaveRequests) {
      this.filterViewModel.pageNumber = data.value.pagedLeaveRequests.pageNumber;
    }

    this.tabSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.cols,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Student Leave Requests',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.value.filters,
      headerOperations: {
        addingForm: {
          required: true
        },
        infoButton: {
          required: true,
          text: 'Student Leave Requests'
        }
      }
    };

    this.statusIds = [];
    data.value.filters.forEach(status => {
      if (status.label === 'status') {
        status.options.forEach(statusId => {
          this.statusIds.push({
            label: statusId.label,
            value: statusId.value
          });
        });
      }
    });
  }

  displayFn(data: any): void {
    return data ? data.label : undefined;
  }

  addForm(): void {
    this.searchDetailsForm.resetForm();
    this.closeAddPanel = false;
    this.searchForm.controls['studentId'].setValidators([Validators.required]);
    this.searchForm.updateValueAndValidity();
  }

  cancel(): void {
    this.closeAddPanel = true;
    this.isSubmit = true;
    this.studentDetails = {};
    this.filterdStudents = [];
    this.clearImages(true);
    this.ngOnInit();
  }

  rowWiseActions(event: any): void {
    if (event.clickedRow.attachmentName != null) {
      this.nameImgProp = this.storeService.getFilePath(event.clickedRow.attachmentName);
      window.open(this.nameImgProp);
    }
    else {
      this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
      return;
    }
  }

  onApproveReject(event: any): void {
    if (event.columnName === event.status.toLowerCase()) {
      return;
    }
    const status = this.statusIds.find(x => x.label.toLowerCase() === event.columnName);
    this.leaveStatusChangeViewModel.leaveRequestId = event.id;
    this.leaveStatusChangeViewModel.statusId = status.value;
    this.leaveRequestService.updateLeaveRequest(this.leaveStatusChangeViewModel).subscribe(res => {
      if (res.value.statusCode === this.httpStatus.OK) {
        this.cancel();
        this.openSnackBar(res.value.messages.ResultMessage);
      }
      else {
        this.openSnackBar(res.value.messages.ResultMessage, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getSelectedStudent(value: any): void {
    if (value !== undefined) {
      this.isSubmit = false;
      this.studentDetails = value;
      this.searchForm.controls['studentId'].clearValidators();
      this.searchForm.updateValueAndValidity();
    }
  }

  imgChanged(event): void {
    if (this.checkFileSize(event[0], 'jpg|jpeg|png|text|pdf|msword|document', 2097152)) {
      this.clearImages(true);
      return;
    }
    if (event && event.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event[0]);
      const that = this;
      reader.onload = (_event) => {
        this.uploadFiles.controls['studentFileNameWithExtension'].setValue(event[0].name);
        this.uploadFiles.controls['studentFileValue'].setValue((<string>reader.result).split(',')[1]);
        that.cd.detectChanges();
      };
    }
  }
  // To-Do
  // setFileProperties(image): void {
  //   const data = {
  //     src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
  //     width: image.width,
  //     height: image.height
  //   };

  //   this.logoImgProp = {};
  //   this.logoImgProp = data;

  //   this.cd.detectChanges();
  // }
  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.uploadFiles.controls.studentFileNameWithExtension.patchValue(null);
      this.uploadFiles.controls.studentFileValue.patchValue(null);
    }
    this.cd.detectChanges();
  }

  onSubmitDetails(): void {
    if (this.searchForm.status === AppSettings.VALID) {
      this.leaveRequestViewModel.studentId = this.studentDetails.id;
      this.leaveRequestViewModel.reason = this.searchForm.value.reason;
      this.leaveRequestViewModel.fromDate = this.searchForm.value.fromDate;
      this.leaveRequestViewModel.toDate = this.searchForm.value.toDate;
      this.leaveRequestViewModel.fileNamewithext = this.uploadFiles.value.studentFileNameWithExtension;

      this.leaveRequestViewModel.fileValue = this.uploadFiles.value.studentFileValue;

      this.leaveRequestService.addStudentLeaveRequest(this.leaveRequestViewModel).subscribe(res => {
        if (res.value.statusCode === this.httpStatus.OK) {
          this.cancel();
          this.openSnackBar(res.value.messages.ResultMessage);
        }
        else {
          this.openSnackBar(res.value.messages.ResultMessage, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    }
    else {
      this.searchFormDetails = true;
      return;
    }
  }
}
