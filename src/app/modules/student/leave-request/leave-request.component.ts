import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { StoreService } from 'app/service/file-management/store.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettings } from 'app/app.constants';
import { LeaveRequestService } from 'app/service/academic-service/api/leave-request.service';
import { LeaveRequestViewModel } from 'app/modules/academics/attendance/model/leave-request-view-model';
import { StudentLeaveRequestSeachView } from 'app/modules/academics/attendance/model/student-leave-request-search-view';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent extends CommonComponent implements OnInit {
  @ViewChild('studentLeaveRequestForm') studentLeaveRequestForm;
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  @ViewChild('addStudentLeaveRequestData') addStudentLeaveRequestData;


    rows: Array<any>;
    cols: any[];
    pageCnt: number;
    totalItems: number;
    custRowsPerPageOptions: Array<number> = [];
    tabSettings: {};
    closeAddPanel: boolean;
    currentComponentName = 'StudentLeaveRequestsComponent';
    modelname: string;
    closeForm: boolean;
    isFormSubmitted = false;
    studentLeaveRequestSearchViewModel: StudentLeaveRequestSeachView;
    studentLeaveReuestViewModel: LeaveRequestViewModel;
    leaveRequestId: any = 0;
    staffId: any = 0;
    nameImgProp: any;
    logoImgProp: any;
    leaveRequestForm: FormGroup;
    uploadFiles: FormGroup;
    staffTypes: any;
    httpStatus: any;
    studentid: '343';


    constructor(private staffLeaveRequestService: LeaveRequestService, private typeService: TypeService,
                public commonService: CommonService, public dialog: MatDialog, private storeService: StoreService, private commonComponent: CommonComponent,
                private http: HttpClient, private _fb: FormBuilder, private sanitizer: DomSanitizer, private router: Router, private cd: ChangeDetectorRef,
                private routes: ActivatedRoute, public snackBar: MatSnackBar) {
         super();
        this.studentLeaveRequestSearchViewModel = {
            
            studentNames: [],
            ClassIds: [],
            sectionIds: [], 
            admissionNumbers: [],
            fromDateBegin: null,
            fromDateEnd: null,
            toDateBegin: null,
            toDateEnd: null,
            reasons: [],
            statusIds: [],
            sortOrder: 0,
            sortBy: '',
            pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,

        };

        this.studentLeaveReuestViewModel = {
            studentId: '',
            reason: '',
            fromDate: null,
            toDate: null,
            fileNamewithext: '',
            fileValue: '',
        };
    }

    ngOnInit(): void {
        this.httpStatus = require('http-status-codes');
        this.initialiseForm();
        this.cols = [
            { field: 'fromDate', header: 'From Date', sort: true },
            { field: 'toDate', header: 'To Date', sort: true },
            { field: 'reason', header: 'Reason', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];

        const modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.studentLeaveRequestSearchViewModel = modelTableComponent;
        }
        // / initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentLeaveRequestSearchViewModel,
            tablename: 'Student Leave Request',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };

        this.loadLeaveRequest();
    }

    loadLeaveRequest(): void {
        this.staffLeaveRequestService.getLeave(this.studentLeaveRequestSearchViewModel.studentNames, this.studentLeaveRequestSearchViewModel.ClassIds,
            this.studentLeaveRequestSearchViewModel.sectionIds, this.studentLeaveRequestSearchViewModel.admissionNumbers,
            this.studentLeaveRequestSearchViewModel.fromDateBegin, this.studentLeaveRequestSearchViewModel.fromDateEnd,
            this.studentLeaveRequestSearchViewModel.toDateBegin, this.studentLeaveRequestSearchViewModel.toDateEnd,
            this.studentLeaveRequestSearchViewModel.reasons, this.studentLeaveRequestSearchViewModel.statusIds,
            this.studentLeaveRequestSearchViewModel.sortOrder,
            this.studentLeaveRequestSearchViewModel.sortBy, 
            this.studentLeaveRequestSearchViewModel.pageNumber, 
            this.studentLeaveRequestSearchViewModel.pageSize).subscribe(data => this.response(data), error => {
            this.errorResponse(error);
        });
    }

    response(data: any): void {
        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }

        if (data.value.pagedLeaveRequests) {
            this.rows = data.value.pagedLeaveRequests.list;
            this.totalItems = data.value.pagedLeaveRequests.totalItems;
        } else {
            this.rows = [];
        }

        this.rows.forEach((e: any) => {

            e.operations = [
                {
                    name: AppSettings.VIEW_LEAVE_REQUEST,
                    icon: AppSettings.DETAILS_ICON,
                    operationName: AppSettings.VIEW
                }];
            e.fromDate = (e.fromDate == null) ? null : this.commonService.customDateFormat(e.fromDate, this.getSchoolDateFormat()).date;
            e.toDate = (e.toDate == null) ? null : this.commonService.customDateFormat(e.toDate, this.getSchoolDateFormat()).date;

        });

        this.tabSettings = {
            columns: this.cols,
            model: this.studentLeaveRequestSearchViewModel,
            rows: this.rows,
            tablename: 'Student Leave Request',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.value.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    name: 'addStudentLeaveRequestData',
                    btnName: AppSettings.NEW
                  },
                  infoButton: {
                    required: true,
                    text: 'Student Leave Requests'
                  },
            }
        };
    }


    studentLeaveRequestData(_event: StudentLeaveRequestSeachView): void {
        this.studentLeaveRequestSearchViewModel = _event;
        this.loadLeaveRequest();
    }

    rowActions(response: any): void {

        this.leaveRequestId = response.clickedRow.leaveRequestId;
        this.staffId = response.clickedRow.staffId;
         if (response.operation === (AppSettings.VIEW_LEAVE_REQUEST).toLowerCase()) {
            if (response.clickedRow.attachementName != null) {
                this.nameImgProp = this.storeService.getFilePath(response.clickedRow.attachementName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    }

    clearImages(logo = false): void {
        if (logo) {
            this.logoImgProp = {};
            this.uploadFiles.controls.studentFileNameWithExtension.patchValue(null);
            this.uploadFiles.controls.staffFileValue.patchValue(null);
        }
        this.cd.detectChanges();
    }

    initialiseForm(): void {

        this.leaveRequestForm = this._fb.group({
            reason: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
            fromDate: new FormControl(null, [Validators.required]),
            toDate: new FormControl(null, [Validators.required])
        });

        this.uploadFiles = this._fb.group({
            studentFileNameWithExtension: null,
            staffFileValue: null,
        });

    }

    openForm(): void {
        this.closeAddPanel = true;
        this.leaveRequestForm.reset();
        this.studentLeaveRequestForm.resetForm();
        this.closeAddPanel = false;
        this.leaveRequestForm.updateValueAndValidity();
    }


    imgChanged(event): void {
        if (this.checkFileSize(event[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)){
            return;
        }
        if (event && event.length > 0) {

            const reader = new FileReader();
            const file = event[0];
            reader.readAsDataURL(file);
            let image;
            image = new Image();
            image.src = reader.result;
            const that = this;

            reader.onload = (_event) => {

                that.uploadFiles.controls['studentFileNameWithExtension'].setValue(file.name);
                that.uploadFiles.controls['staffFileValue'].setValue((<string>reader.result).split(',')[1]);
                that.cd.detectChanges();
            };
            that.setFileProperties(image);
        }
    }

    setFileProperties(image): void {
        const data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };

        this.logoImgProp = {};
        this.logoImgProp = data;

        this.cd.detectChanges();
    }

   createOrUpdateLeaveRequest(): void {
        if (this.leaveRequestForm.status === AppSettings.VALID) {
            this.studentLeaveReuestViewModel.studentId = this.leaveRequestForm.value.studentId;
            this.studentLeaveReuestViewModel.reason = this.leaveRequestForm.value.reason;
            this.studentLeaveReuestViewModel.fromDate = this.leaveRequestForm.value.fromDate;
            this.studentLeaveReuestViewModel.toDate = this.leaveRequestForm.value.toDate;
            this.studentLeaveReuestViewModel.fileNamewithext = this.uploadFiles.value.studentFileNameWithExtension;
            this.studentLeaveReuestViewModel.fileValue = this.uploadFiles.value.staffFileValue;

            this.staffLeaveRequestService.addStudentLeaveRequest(this.studentLeaveReuestViewModel).subscribe(res => {
                if (res.value.statusCode === this.httpStatus.OK) {
                    this.openSnackBar(res.value.messages.ResultMessage);
                    this.loadLeaveRequest();
                    this.cancel();
                }
                else {
                    this.openSnackBar(res.value.messages.ResultMessage, true);
                }
            }, error => {
                this.errorResponse(error);
            });
        }
        else {
            this.isFormSubmitted = true;
            return;
        }

    }

    cancel(): void {
        this.closeAddPanel = true;
        this.leaveRequestForm.reset();
        this.studentLeaveRequestForm.resetForm();
        this.clearImages(true);
    }

}
