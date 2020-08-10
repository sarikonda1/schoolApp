(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-academics-attendance-attendance-module"],{

/***/ "./src/app/modules/academics/attendance/attendance-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/attendance-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AttendanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceRoutingModule", function() { return AttendanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-attendance/student-attendance.component */ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.ts");
/* harmony import */ var _student_leave_requests_student_leave_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-leave-requests/student-leave-requests.component */ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.ts");





var routes = [
    { path: 'student-attendance', component: _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__["StudentAttendanceComponent"], data: { title: 'Student Attendance' } },
    { path: 'student-leave-requests', component: _student_leave_requests_student_leave_requests_component__WEBPACK_IMPORTED_MODULE_4__["StudentLeaveRequestsComponent"], data: { title: 'Student Leave Requests' } },
];
var AttendanceRoutingModule = /** @class */ (function () {
    function AttendanceRoutingModule() {
    }
    AttendanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AttendanceRoutingModule);
    return AttendanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/attendance/attendance.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/academics/attendance/attendance.module.ts ***!
  \*******************************************************************/
/*! exports provided: AttendanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceModule", function() { return AttendanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-attendance/student-attendance.component */ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.ts");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance-routing.module */ "./src/app/modules/academics/attendance/attendance-routing.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _academics_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../academics.module */ "./src/app/modules/academics/academics.module.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _student_leave_requests_student_leave_requests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student-leave-requests/student-leave-requests.component */ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.ts");


















var AttendanceModule = /** @class */ (function () {
    function AttendanceModule() {
    }
    AttendanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__["StudentAttendanceComponent"], _student_leave_requests_student_leave_requests_component__WEBPACK_IMPORTED_MODULE_17__["StudentLeaveRequestsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _attendance_routing_module__WEBPACK_IMPORTED_MODULE_6__["AttendanceRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"],
                _academics_module__WEBPACK_IMPORTED_MODULE_14__["AcademicsModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_16__["FuseMaterialColorPickerModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"],
                    multi: true
                }
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [],
        })
    ], AttendanceModule);
    return AttendanceModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='tableData($event)' (openAddForm)=\"addForm()\"\n  [closeRowForm]='closeAddPanel' [templateRef]=\"addStudentLeaveRequest\" (rowBasedAction)=\"rowWiseActions($event)\" (radioSection)='onApproveReject($event)'></app-table>\n\n<ng-template #addStudentLeaveRequest>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmitDetails()\" #searchDetailsForm=\"ngForm\">\n    <div fxFlexFill fxLayout=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <mat-label #studentId translate>Search Student Name / Admission Number</mat-label>\n        <input matInput formControlName=\"studentId\" aria-label=\"studentId\" matInput [matAutocomplete]=\"auto\" [required]=\"studentDetails.name==null\">\n        <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"\n          (optionSelected)='getSelectedStudent($event.option.value)'>\n          <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n            {{option.name}}\n            <span class=\"grey-400-fg\"> {{option.currentClass}} {{option.currentSection}} {{option.admissionNumber}} </span>\n          </mat-option>\n        </mat-autocomplete>\n        <mat-error>\n          <app-validation [labelName]='studentId.innerText' [validationControl]=\"searchForm.controls.studentId\"\n            [doValidate]=\"searchFormDetails\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div *ngIf=\"isSubmit == false\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexFill fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"30\" fxFlex=\"100\" class=\"pb-20\">\n        <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"pt-0 border confirm-table\">\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"><span translate>Student Name</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{studentDetails.name}}</mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"><span translate>Class</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{studentDetails.currentClass}}</mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"><span translate>Section</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{studentDetails.currentSection}}</mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"><span translate>admissionNumber</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{studentDetails.admissionNumber}}\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"><span translate>RollNumber</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{studentDetails.rollNumber}}</mat-list-item>\n        </mat-list>\n      </div>\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"px-sm-20 pb-20\">\n        <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n          <mat-label #fromDate translate>From Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('fromDate',searchForm)\" [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [min]=\"academicSession?.startDate\" [max]=\"academicSession?.endDate\"\n          required>\n          <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #fromDatePicker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='fromDate.innerText' [validationControl]=\"searchForm.controls.fromDate\"\n              [doValidate]=\"searchFormDetails\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>       \n        <mat-form-field appearance=\"outline\" class=\"mr-sm-20 py-12 icon-center\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\">\n          <mat-label #toDate translate>To Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('toDate',searchForm)\" [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\"\n            [min]=\"searchForm.controls.fromDate.value\" [max]=\"academicSession.endDate\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #toDatePicker [startAt]=\"searchForm.value.fromDate\"></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='toDate.innerText' [validationControl]=\"searchForm.controls.toDate\"\n              [doValidate]=\"searchFormDetails\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout=\"row\">\n          <button mat-raised-button type=\"button\" (click)=\"logoImgInput.value='';logoImgInput.click()\">\n            <mat-icon class=\"mr-8\">attachment</mat-icon><span translate>Attach Letter</span>\n          </button>\n          <button *ngIf=\"uploadFiles.value.studentFileNameWithExtension\" mat-icon-button type=\"button\">\n            <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"logoImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n          </button>\n\n          <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n            (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n        </div>\n        <div class=\"pt-8 logo-name break-word\" [style.visibility]=\"uploadFiles?.value?.studentFileNameWithExtension ? 'visible' : 'hidden'\">\n          {{uploadFiles?.value?.studentFileNameWithExtension}}</div>\n      </div>\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"45\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label #reason translate>Reason</mat-label>\n          <textarea matInput formControlName=\"reason\" (keyup)=\"preventSpace($event,'searchForm','reason')\"\n            (blur)=\"trimTextBoxSpaces('searchForm','reason')\" required></textarea>\n          <mat-error>\n            <app-validation [labelName]='reason.innerText' [validationControl]=\"searchForm.controls.reason\"\n              [doValidate]=\"searchFormDetails\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"end center\" class=\"pt-16\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\" translate>{{'Cancel' | translate}}</button>\n      <button class=\"text-uppercase\" mat-raised-button mat-button type=\"submit\" [disabled]=\"isSubmit\" color=\"accent\" translate>{{'Submit' | translate}}</button>\n    </div>\n  </form>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2F0dGVuZGFuY2Uvc3R1ZGVudC1sZWF2ZS1yZXF1ZXN0cy9zdHVkZW50LWxlYXZlLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StudentLeaveRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLeaveRequestsComponent", function() { return StudentLeaveRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_academic_service_api_leave_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/leave-request.service */ "./src/app/service/academic-service/api/leave-request.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var StudentLeaveRequestsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentLeaveRequestsComponent, _super);
    function StudentLeaveRequestsComponent(cd, sanitizer, commonService, _fb, leaveRequestService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.commonService = commonService;
        _this._fb = _fb;
        _this.leaveRequestService = leaveRequestService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.searchFormDetails = true;
        _this.isSubmit = true;
        _this.filterdStudents = [];
        _this.statusIds = [];
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'StudentLeaveRequestsComponent';
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    StudentLeaveRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.academicSession = JSON.parse(localStorage.getItem('_as'));
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.initializeForm();
        this.studentDetails = {};
        this.getAllFilteredStudentLeaveRequests(this.filterViewModel);
        this.searchForm.controls['studentId'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 1) {
                _this.leaveRequestService.studentNames(name).subscribe(function (res) {
                    _this.filterdStudents = (res.value.students.length > 0) ? res.value.students : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
    };
    StudentLeaveRequestsComponent.prototype.initializeForm = function () {
        this.searchForm = this._fb.group({
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(200)])
        });
        this.uploadFiles = this._fb.group({
            studentFileNameWithExtension: null,
            studentFileValue: null,
        });
        this.leaveRequestViewModel = {};
        this.leaveStatusChangeViewModel = {};
    };
    StudentLeaveRequestsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
            ClassIds: [],
            admissionNumbers: [],
            studentNames: [],
            sectionIds: [],
            reasons: [],
            statusIds: []
        };
    };
    StudentLeaveRequestsComponent.prototype.setColumnHeaders = function () {
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
    };
    StudentLeaveRequestsComponent.prototype.initializeTableSettings = function () {
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.filterViewModel,
            tablename: 'Student Leave Requests',
            componentName: this.currentComponent,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NEW
                }
            },
        };
    };
    StudentLeaveRequestsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllFilteredStudentLeaveRequests(this.filterViewModel);
    };
    StudentLeaveRequestsComponent.prototype.getAllFilteredStudentLeaveRequests = function (data) {
        var _this = this;
        this.leaveRequestService.get(data.studentNames, data.ClassIds, data.sectionIds, data.admissionNumbers, data.fromDateBegin, data.fromDateEnd, data.toDateBegin, data.toDateEnd, data.reasons, data.statusIds, data.sortOrder, data.sortBy, data.pageNumber, data.pageSize).
            subscribe(function (res) {
            _this.bindStudentLeaveRequestResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentLeaveRequestsComponent.prototype.bindStudentLeaveRequestResult = function (data) {
        var _this = this;
        if (!data.value.pagedLeaveRequests) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            data.value.pagedLeaveRequests.list.forEach(function (formatDate) {
                formatDate.fromDate = formatDate.fromDate != null ? _this.commonService.customDateFormat(formatDate.fromDate.toString(), _this.getSchoolDateFormat()).date : null;
                formatDate.toDate = formatDate.toDate != null ? _this.commonService.customDateFormat(formatDate.toDate.toString(), _this.getSchoolDateFormat()).date : null;
            });
            this.rows = data.value.pagedLeaveRequests.list;
            this.totalRowsCount = data.value.pagedLeaveRequests.totalItems;
            this.pageCnt = data.value.pagedLeaveRequests.totalPages;
            this.rows.forEach(function (e) {
                switch (true) {
                    case e.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].APPROVE_OPERATION_LEAVE_APPROVE:
                        e.approved = 1;
                        break;
                    case e.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].REJECT_OPERATION_LEAVE_REQUEST:
                        e.rejected = 1;
                        break;
                }
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW_LEAVE_REQUEST,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW
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
        data.value.filters.forEach(function (status) {
            if (status.label === 'status') {
                status.options.forEach(function (statusId) {
                    _this.statusIds.push({
                        label: statusId.label,
                        value: statusId.value
                    });
                });
            }
        });
    };
    StudentLeaveRequestsComponent.prototype.displayFn = function (data) {
        return data ? data.label : undefined;
    };
    StudentLeaveRequestsComponent.prototype.addForm = function () {
        this.searchDetailsForm.resetForm();
        this.closeAddPanel = false;
        this.searchForm.controls['studentId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.searchForm.updateValueAndValidity();
    };
    StudentLeaveRequestsComponent.prototype.cancel = function () {
        this.closeAddPanel = true;
        this.isSubmit = true;
        this.studentDetails = {};
        this.filterdStudents = [];
        this.clearImages(true);
        this.ngOnInit();
    };
    StudentLeaveRequestsComponent.prototype.rowWiseActions = function (event) {
        if (event.clickedRow.attachmentName != null) {
            this.nameImgProp = this.storeService.getFilePath(event.clickedRow.attachmentName);
            window.open(this.nameImgProp);
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
            return;
        }
    };
    StudentLeaveRequestsComponent.prototype.onApproveReject = function (event) {
        var _this = this;
        if (event.columnName === event.status.toLowerCase()) {
            return;
        }
        var status = this.statusIds.find(function (x) { return x.label.toLowerCase() === event.columnName; });
        this.leaveStatusChangeViewModel.leaveRequestId = event.id;
        this.leaveStatusChangeViewModel.statusId = status.value;
        this.leaveRequestService.updateLeaveRequest(this.leaveStatusChangeViewModel).subscribe(function (res) {
            if (res.value.statusCode === _this.httpStatus.OK) {
                _this.cancel();
                _this.openSnackBar(res.value.messages.ResultMessage);
            }
            else {
                _this.openSnackBar(res.value.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentLeaveRequestsComponent.prototype.getSelectedStudent = function (value) {
        if (value !== undefined) {
            this.isSubmit = false;
            this.studentDetails = value;
            this.searchForm.controls['studentId'].clearValidators();
            this.searchForm.updateValueAndValidity();
        }
    };
    StudentLeaveRequestsComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], 'jpg|jpeg|png|text|pdf|msword|document', 2097152)) {
            this.clearImages(true);
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event[0]);
            var that_1 = this;
            reader_1.onload = function (_event) {
                _this.uploadFiles.controls['studentFileNameWithExtension'].setValue(event[0].name);
                _this.uploadFiles.controls['studentFileValue'].setValue(reader_1.result.split(',')[1]);
                that_1.cd.detectChanges();
            };
        }
    };
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
    StudentLeaveRequestsComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.uploadFiles.controls.studentFileNameWithExtension.patchValue(null);
            this.uploadFiles.controls.studentFileValue.patchValue(null);
        }
        this.cd.detectChanges();
    };
    StudentLeaveRequestsComponent.prototype.onSubmitDetails = function () {
        var _this = this;
        if (this.searchForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.leaveRequestViewModel.studentId = this.studentDetails.id;
            this.leaveRequestViewModel.reason = this.searchForm.value.reason;
            this.leaveRequestViewModel.fromDate = this.searchForm.value.fromDate;
            this.leaveRequestViewModel.toDate = this.searchForm.value.toDate;
            this.leaveRequestViewModel.fileNamewithext = this.uploadFiles.value.studentFileNameWithExtension;
            this.leaveRequestViewModel.fileValue = this.uploadFiles.value.studentFileValue;
            this.leaveRequestService.addStudentLeaveRequest(this.leaveRequestViewModel).subscribe(function (res) {
                if (res.value.statusCode === _this.httpStatus.OK) {
                    _this.cancel();
                    _this.openSnackBar(res.value.messages.ResultMessage);
                }
                else {
                    _this.openSnackBar(res.value.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.searchFormDetails = true;
            return;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentLeaveRequestsComponent.prototype, "searchDetailsForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StudentLeaveRequestsComponent.prototype, "logoImgInput", void 0);
    StudentLeaveRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-leave-requests',
            template: __webpack_require__(/*! ./student-leave-requests.component.html */ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"],
            providers: [app_service_academic_service_api_leave_request_service__WEBPACK_IMPORTED_MODULE_8__["LeaveRequestService"]],
            styles: [__webpack_require__(/*! ./student-leave-requests.component.scss */ "./src/app/modules/academics/attendance/student-leave-requests/student-leave-requests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_academic_service_api_leave_request_service__WEBPACK_IMPORTED_MODULE_8__["LeaveRequestService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
    ], StudentLeaveRequestsComponent);
    return StudentLeaveRequestsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=app-modules-academics-attendance-attendance-module.js.map