import { Component, OnInit, TemplateRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import { StaffLeaveRequestSearchViewModel } from 'app/modules/staff/staff-information-system/model/staff-leave-request-search-view';
import { StaffLeaveRequestViewModel } from 'app/modules/staff/staff-information-system/model/staff-leave-request-view-model';
import { StaffLeaveRequestService } from 'app/service/staff/staff-leave-request-service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettings } from 'app/app.constants';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

@Component({
    selector: 'staff-leave-request',
    templateUrl: './leave-request.component.html',
    styleUrls: ['./leave-request.component.scss'],
    providers: [StaffLeaveRequestService, StaffCommonService]
})

export class StaffLeaveRequestComponent extends CommonComponent implements OnInit {
    @ViewChild('staffLeaveRequestForm') staffLeaveRequestForm;
    @ViewChild('logoImgInput') logoImgInput: ElementRef;

    rows: Array<any>;
    cols: any[];
    pageCnt: number;
    totalItems: number;
    custRowsPerPageOptions: Array<number> = [];
    tabSettings: {};
    closeAddPanel: boolean;
    currentComponentName = 'StaffLeaveRequestsComponent';
    modelname: string;
    closeForm: boolean;
    isFormSubmitted = false;
    staffLeaveRequestSearchViewModel: StaffLeaveRequestSearchViewModel;
    staffLeaveReuestViewModel: StaffLeaveRequestViewModel;
    leaveRequestId: any = 0;
    staffId: any = 0;
    nameImgProp: any;
    logoImgProp: any;
    leaveRequestForm: FormGroup;
    uploadFiles: FormGroup;
    staffTypes: any;
    httpStatus: any;


    constructor(private staffLeaveRequestService: StaffLeaveRequestService, private staffCommonService: StaffCommonService, private typeService: TypeService,
                public commonService: CommonService, public dialog: MatDialog, private storeService: StoreService, private commonComponent: CommonComponent,
                private http: HttpClient, private _fb: FormBuilder, private sanitizer: DomSanitizer, private router: Router, private cd: ChangeDetectorRef,
                private routes: ActivatedRoute, public snackBar: MatSnackBar) {
        super();
        this.staffLeaveRequestSearchViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
            staffNames: [],
            staffTypes: [],
            reasons: [],
            statuses: [],
            leaveStartDatesBegin: null,
            leaveStartDatesEnd: null,
            leaveEndDatesBegin: null,
            leaveEndDatesEnd: null,

        };

        this.staffLeaveReuestViewModel = {
            staffId: 0,
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
           // { field: 'staff', header: 'Staff', sort: true },
          //  { field: 'staffType', header: 'Staff Type', sort: true },
            { field: 'startDate', header: 'Start Date', sort: true },
            { field: 'endDate', header: 'End Date', sort: true },
            { field: 'reason', header: 'Reason', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];

        const modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.staffLeaveRequestSearchViewModel = modelTableComponent;
        }
        // / initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.staffLeaveRequestSearchViewModel,
            tablename: 'Staff Leave Request',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };

        this.loadLeaveRequest();
    }

    loadLeaveRequest(): void {

        this.staffLeaveRequestService.fetchStaffLeaveRequests(this.staffLeaveRequestSearchViewModel.sortBy, this.staffLeaveRequestSearchViewModel.sortOrder,
            this.staffLeaveRequestSearchViewModel.staffNames, this.staffLeaveRequestSearchViewModel.staffTypes, this.staffLeaveRequestSearchViewModel.reasons,
            this.staffLeaveRequestSearchViewModel.statuses, this.staffLeaveRequestSearchViewModel.leaveStartDatesBegin,
            this.staffLeaveRequestSearchViewModel.leaveStartDatesEnd, this.staffLeaveRequestSearchViewModel.leaveEndDatesBegin,
            this.staffLeaveRequestSearchViewModel.leaveEndDatesEnd, this.staffLeaveRequestSearchViewModel.pageNumber,
            this.staffLeaveRequestSearchViewModel.pageSize).subscribe(data => this.response(data), error => {
            this.errorResponse(error);
        });
    }

    response(data: any): void {

        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }

        if (data.staffLeaveRequests) {
            this.rows = data.staffLeaveRequests.list;
            this.totalItems = data.staffLeaveRequests.totalItems;
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
            e.startDate = (e.startDate == null) ? null : this.commonService.customDateFormat(e.startDate, this.getSchoolDateFormat()).date;
            e.endDate = (e.endDate == null) ? null : this.commonService.customDateFormat(e.endDate, this.getSchoolDateFormat()).date;

        });

        this.tabSettings = {
            columns: this.cols,
            model: this.staffLeaveRequestSearchViewModel,
            rows: this.rows,
            tablename: 'Staff Leave Request',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Staff Leave Requests'
                },
                addingForm: {
                    required: true,
                    btnName: AppSettings.BUTTON_NAME
                }
            }
        };
    }


    staffLeaveRequestData(_event: StaffLeaveRequestSearchViewModel): void {
        this.staffLeaveRequestSearchViewModel = _event;
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
            this.uploadFiles.controls.staffFileNameWithExtension.patchValue(null);
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
            staffFileNameWithExtension: null,
            staffFileValue: null,
        });

    }

    openForm(): void {
        this.closeAddPanel = true;
        this.leaveRequestForm.reset();
        // this.staffLeaveRequestForm.resetForm();
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

                that.uploadFiles.controls['staffFileNameWithExtension'].setValue(file.name);
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
            this.staffLeaveReuestViewModel.staffId = this.leaveRequestForm.value.staffId;
            this.staffLeaveReuestViewModel.reason = this.leaveRequestForm.value.reason;
            this.staffLeaveReuestViewModel.fromDate = this.leaveRequestForm.value.fromDate;
            this.staffLeaveReuestViewModel.toDate = this.leaveRequestForm.value.toDate;
            this.staffLeaveReuestViewModel.fileNamewithext = this.uploadFiles.value.staffFileNameWithExtension;
            this.staffLeaveReuestViewModel.fileValue = this.uploadFiles.value.staffFileValue;

            this.staffLeaveRequestService.createStaffLeaveRequest(this.staffLeaveReuestViewModel).subscribe(res => {
                if (res.statusCode === this.httpStatus.OK) {
                    this.openSnackBar(res.messages.ResultMessage);
                    this.loadLeaveRequest();
                    this.cancel();
                }
                else {
                    this.openSnackBar(res.messages.ResultMessage, true);
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
        this.staffLeaveRequestForm.resetForm();
        this.clearImages(true);
    }

}










