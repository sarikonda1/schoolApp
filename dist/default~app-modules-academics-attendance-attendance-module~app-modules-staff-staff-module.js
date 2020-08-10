(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-attendance-attendance-module~app-modules-staff-staff-module"],{

/***/ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-attendance/student-attendance.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-24\" #search>\n  <div class=\"p-12 font-size-18 text-uppercase\" translate>Student Attendance</div>\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-t-20 px-sm-28 pt-sm-28 pb-sm-16\">\n    <form [formGroup]=\"studentAttendanceForm\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          class=\"icon-center\">\n          <mat-label translate #attendanceDate>Attendance Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('attendanceDate',studentAttendanceForm)\"\n            formControlName=\"attendanceDate\" [matDatepicker]=\"picker\" [min]=\"academicSession?.startDate\"\n            [max]=\"academicSession?.endDate\" required placeholder=\"Choose a start date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='attendanceDate.innerText'\n              [validationControl]=\"studentAttendanceForm.controls.attendanceDate\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          class=\"px-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select required formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='class.innerText' [validationControl]=\"studentAttendanceForm.controls.classId\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          >\n          <mat-label translate #section>Section</mat-label>\n          <mat-select required formControlName=\"sectionId\">\n            <mat-option *ngFor=\"let section of sections\" [value]=\"section.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='section.innerText'\n              [validationControl]=\"studentAttendanceForm.controls.sectionId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayoutAlign=\"end center\"> \n          <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n          (click)=\"onSearchHeaderForm()\">\n          {{'Search' | translate}}\n        </button>\n        <button mat-button type='button' (click)=\"getHelpText('Student Attendance')\" class=\"mb-20\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n        </div>\n       \n      </div>\n    </form>\n  </div>\n</div>\n\n\n<app-table *ngIf=\"submitted\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (selectedRows)='selectedRows($event)' (additionalButtonClick)=\"markAttendanceComplete($event)\"\n  (anchorDialogClick)=\"showLeaveInfo($event)\" (radioSection)='onPresentAbsent($event)'\n  [massActionTemplateRef]=\"massActions\" (resetFilter)=\"resetFilter()\">\n</app-table>\n<app-custom-card *ngIf=\"!submitted\" [title]=\"'Student Attendance Details'\"\n  [inputMessage]=\"'Please Select Class And Section'\">\n</app-custom-card>\n<ng-template #massActions>\n  <div>\n    <form [formGroup]=\"massActionForm\" (ngSubmit)=\"massActionForm.valid && massActionsApply()\">\n      <mat-form-field>\n        <mat-select formControlName=\"massOption\">\n          <mat-select-trigger>\n            <div *ngIf=\"massActionForm.value.massOption === 'absent'\">\n              {{'Absent' | translate}}\n            </div>\n            <div *ngIf=\"massActionForm.value.massOption === 'present'\">\n              {{'Present' | translate}}\n            </div>\n            <div *ngIf=\"massActionForm.value.massOption === 'clear'\">\n              {{'Clear Attendance' | translate}}\n            </div>\n          </mat-select-trigger>\n          <mat-option value=\"absent\">\n            <mat-icon class=\"red-600-fg\">clear</mat-icon>{{'Absent' | translate}}\n          </mat-option>\n          <mat-option value=\"present\">\n            <mat-icon class=\"green-600-fg\">check</mat-icon>{{'Present' | translate}}\n          </mat-option>\n          <mat-option value=\"clear\" *ngIf=\"!classAttendanceMarked\">\n            <mat-icon class=\"blue-600-fg\">delete</mat-icon>{{'Clear Attendance' | translate}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation labelName='field' [validationControl]=\"massActionForm.controls.massOption\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"mx-12\">\n        {{'Apply' | translate}}\n      </button>\n\n    </form>\n  </div>\n</ng-template>\n<ng-template #attendanceSummary>\n  <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border\">\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{'Date' | translate}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{getFormattedDateBySchoolDateFormat(markAttendanceDate)}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{'No. of Students Present' | translate}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{presentCount}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{'No. of Students Absent' | translate}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{absentCount}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{'No. of Leave Requests' | translate}}\n    </mat-list-item>\n    <mat-list-item fxFlex=\"50\" fxLayout=\"column\">\n      {{leaveCount}}\n    </mat-list-item>\n  </mat-list>\n  <p fxLayoutAlign=\"center center\">{{'Please Confirm to Mark Attendance Completion' | translate}}</p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n    <button mat-raised-button color=\"primary\" class=\"mr-16\" matDialogClose (click)=\"close()\"\n      >{{'Cancel' | translate}}</button>\n    <button mat-raised-button color=\"accent\" (click)=\"submitAttendance()\">{{'Confirm' | translate}}</button>\n  </div>\n</ng-template>\n<ng-template #leaveInfoDialog>\n  <div fxLayout=\"column\">\n  <h2 mat-dialog-title>Leave Request</h2>\n  <!-- <div mat-dialog-content>\n    <p>{{'Date: ' + leaveInfo.from + ' - ' + leaveInfo.to }}</p>\n    <p>{{'Reason:'}}</p>\n    <div> {{leaveInfo.reason}}</div>\n  </div> -->\n  <div fxLayout=\"column\" fxFlex=\"100\">\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Date</div>\n      <div><span class=\"px-4\">:</span>{{ leaveInfo.from + ' - ' + leaveInfo.to }}</div>\n    </div>\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Reason</div>\n      <div><span class=\"px-4\">:</span><span class=\"break-word\">{{leaveInfo.reason}}</span></div>\n    </div>\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Status</div>\n      <div><span class=\"px-4\">:</span><span class=\"break-word\">{{leaveInfo.status}}</span></div>\n    </div>\n    <div fxLayout=\"row\">\n      <button *ngIf=\"leaveInfo.attachment\" mat-button color=\"accent\" type=\"button\" (click)=\"openAttachment()\">\n        <mat-icon class=\"mr-4\">attachment</mat-icon> View Request Letter\n      </button>\n    </div>\n  </div>\n</div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" mat-dialog-actions class=\"pb-12\">\n   \n    <button mat-raised-button mat-dialog-close color=\"primary\">{{'Close' | translate}}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-attendance/student-attendance.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2F0dGVuZGFuY2Uvc3R1ZGVudC1hdHRlbmRhbmNlL3N0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/academics/attendance/student-attendance/student-attendance.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StudentAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendanceComponent", function() { return StudentAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_attendance_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/student-attendance/student-attendance.service */ "./src/app/service/student-attendance/student-attendance.service.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
















var StudentAttendanceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentAttendanceComponent, _super);
    function StudentAttendanceComponent(commonService, studentDbService, studentAttendanceService, gradeSetupService, storeService, dialogRef, classTimetableService, snackBar, _focusMonitor) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.studentDbService = studentDbService;
        _this.studentAttendanceService = studentAttendanceService;
        _this.gradeSetupService = gradeSetupService;
        _this.storeService = storeService;
        _this.dialogRef = dialogRef;
        _this.classTimetableService = classTimetableService;
        _this.snackBar = snackBar;
        _this._focusMonitor = _focusMonitor;
        _this.currentComponent = 'StudentAttendanceComponent';
        _this.columns = [
            { field: 'select', header: '', sortRequired: false, searchRequired: false },
            { field: 'studentName', header: 'Name', sort: true },
            { field: 'rollNumber', header: 'Roll Number', sort: true },
            { field: 'admissionNumber', header: 'Admission No', sort: true },
            { field: 'onLeave', header: 'Leave Request', sort: true, anchorDialog: true },
            { field: 'present', header: 'Present', radioAction: true, icon: 'check', activeClass: 'green-fg' },
            { field: 'absent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' }
        ];
        _this.classes = [];
        _this.validate = true;
        _this.selectedIdsList = [];
        _this.markAttendanceDate = '';
        _this.additionalButton = {};
        _this.isStaffLogin = false;
        _this.staffInfo = [];
        _this.hideButtons = false;
        _this.submitted = false;
        _this.isSingleClick = true;
        _this.initializeFilterView();
        _this.initializeTableSettings();
        _this.dateFormat = _this.getSchoolDateFormat();
        return _this;
    }
    StudentAttendanceComponent.prototype.ngOnInit = function () {
        this.academicSession = JSON.parse(localStorage.getItem('_as'));
        this.initializeForm();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
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
            }
            else {
                this.getClasses();
            }
        }
        else {
            this.getClasses();
        }
    };
    StudentAttendanceComponent.prototype.initializeForm = function () {
        this.studentAttendanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            attendanceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.getDefaultDate(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.massActionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            massOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('absent', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    };
    StudentAttendanceComponent.prototype.getClasses = function (isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.classes = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (isManualChange) {
                    _this.onSelectClass({ value: _this.studentAttendanceForm.value.classId }, isManualChange);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    StudentAttendanceComponent.prototype.onSelectClass = function (data, isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.sections = [];
        if (!isManualChange) {
            this.studentAttendanceForm.controls.sectionId.setValue(null);
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentAttendanceComponent.prototype.initializeFilterView = function () {
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
    };
    StudentAttendanceComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Name', sort: true },
            { field: 'rollNumber', header: 'Roll Number', sort: true },
            { field: 'admissionNumber', header: 'Admission No', sort: true },
            { field: 'onLeave', header: 'Leave Request', sort: true, anchorDialog: true },
            { field: 'present', header: 'Present', radioAction: true, icon: 'check', activeClass: 'green-fg' },
            { field: 'absent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' }
        ];
    };
    StudentAttendanceComponent.prototype.onPresentAbsent = function (data) {
        var _this = this;
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
            .subscribe(function (res) {
            _this.setStudentData(res, _this.attendanceStatus);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentAttendanceComponent.prototype.setStudentData = function (res, data) {
        // this.massActionForm.reset();
        this.getAllFilteredStudents();
    };
    StudentAttendanceComponent.prototype.initializeTableSettings = function () {
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
    };
    StudentAttendanceComponent.prototype.onSearchHeaderForm = function () {
        if (this.studentAttendanceForm.valid) {
            this.filterViewModel.classIds = [this.studentAttendanceForm.value.classId];
            this.filterViewModel.sectionIds = [this.studentAttendanceForm.value.sectionId];
            this.getAllFilteredStudents();
        }
        else {
            this.submitted = false;
        }
    };
    StudentAttendanceComponent.prototype.tableData = function (_event) {
        Object.assign(_event, {
            classIds: this.filterViewModel.classIds,
            sectionIds: this.filterViewModel.sectionIds
        });
        this.filterViewModel = _event;
        this.getAllFilteredStudents();
    };
    StudentAttendanceComponent.prototype.getAllFilteredStudents = function () {
        var _this = this;
        this.markAttendanceDate = this.commonService.customDateFormat(this.studentAttendanceForm.value.attendanceDate, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DATE_FORMATE_YEAR).date;
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.studentAttendanceService.studentAttendances(this.filterViewModel.studentNames, this.markAttendanceDate, this.filterViewModel.admissionNumber, this.filterViewModel.rollNumber, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.absentOrPresents, this.filterViewModel.sortOrder, this.filterViewModel.sortBy)
            .subscribe(function (res) {
            _this.submitted = true;
            _this.bindStudentResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentAttendanceComponent.prototype.bindStudentResult = function (data) {
        if (data.classAndSections && this.isStaffLogin) {
            this.staffInfo = data.classAndSections;
            this.checkStaff();
        }
        if (!data.pagedStudentAttendance) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedStudentAttendance;
            this.rows.forEach(function (row) {
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
    };
    StudentAttendanceComponent.prototype.onSelectOption = function (value) {
        var _this = this;
        if (value.length >= 3) {
            this.filterdStudents = [];
            this.studentDbService.studentNames(value).subscribe(function (res) {
                if (res.students.length > 0) {
                    res.students.forEach(function (student) { return _this.filterdStudents.push({
                        label: student.studentName,
                        value: student.id,
                        class: student.currentClassName,
                        section: student.currentSectionName
                    }); });
                }
            });
        }
        else {
            this.filterdStudents = [];
        }
    };
    StudentAttendanceComponent.prototype.markAttendanceComplete = function (event) {
        if (event === 'markAttendanceComplete') {
            var absentStudentsList = this.rows.filter(function (element) {
                return element.absent;
            });
            this.dialogRef.open(_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                disableClose: true,
                data: { template: this.attendanceSummary, title: 'Attendance Summary' },
            });
        }
    };
    StudentAttendanceComponent.prototype.submitAttendance = function () {
        var _this = this;
        this.classAttendanceView = {};
        if (this.filterViewModel.classIds && this.filterViewModel.classIds[0]) {
            this.classAttendanceView.classId = this.filterViewModel.classIds[0];
        }
        if (this.filterViewModel.sectionIds && this.filterViewModel.sectionIds[0]) {
            this.classAttendanceView.sectionId = this.filterViewModel.sectionIds[0];
        }
        this.classAttendanceView.calendarDate = new Date(this.markAttendanceDate);
        this.studentAttendanceService.markAttendance(this.classAttendanceView)
            .subscribe(function (res) { return _this.setStudentData(res, _this.classAttendanceView); }, function (err) { return _this.errorResponse(err); });
        this.dialogRef.closeAll();
    };
    StudentAttendanceComponent.prototype.selectedRows = function (event) {
        this.selectedIdsList = event.length ? event : [];
    };
    StudentAttendanceComponent.prototype.massActionsApply = function () {
        var _this = this;
        if (this.isSingleClick) {
            this.isSingleClick = false;
            this.studentAttendance = {};
            this.selectedIdsList.forEach(function (studentAttendanceRecord) {
                _this.attendanceStatus = {};
                _this.attendanceStatus.id = studentAttendanceRecord.studentAttendanceId;
                _this.attendanceStatus.schoolAcademicSessionStudentId = studentAttendanceRecord.schoolAcademicSessionStudentId;
                _this.attendanceStatus.calendarDate = new Date(_this.markAttendanceDate);
                _this.attendanceStatus.leaveRequestId = studentAttendanceRecord.leaveRequestId === '' ? null : studentAttendanceRecord.leaveRequestId;
                _this.setAttendanceStatus(_this.massActionForm.value.massOption);
                if (_this.studentAttendance.studentAttendanceStatusViews === undefined) {
                    _this.studentAttendance.studentAttendanceStatusViews = [];
                }
                _this.studentAttendance.studentAttendanceStatusViews.push(_this.attendanceStatus);
            });
            this.studentAttendanceService.markStudentAbsentPresent(this.studentAttendance)
                .subscribe(function (res) {
                _this.setStudentData(res, _this.attendanceStatus);
            }, function (error) {
                _this.errorResponse(error);
            });
            setTimeout(function () {
                _this.isSingleClick = true;
            }, 1000);
        }
    };
    StudentAttendanceComponent.prototype.setAttendanceStatus = function (action) {
        if (action === 'present') {
            this.attendanceStatus.isPresent = '1';
            this.attendanceStatus.isAbscent = '0';
        }
        else if (action === 'absent') {
            this.attendanceStatus.isPresent = '0';
            this.attendanceStatus.isAbscent = '1';
        }
        else {
            this.attendanceStatus.isPresent = '0';
            this.attendanceStatus.isAbscent = '0';
        }
    };
    StudentAttendanceComponent.prototype.showLeaveInfo = function (row) {
        var rowData = row.leaveRequestInfo;
        this.leaveInfo = {};
        this.leaveInfo.from = this.commonService.customDateFormat(rowData.fromDate, this.dateFormat).date;
        this.leaveInfo.to = this.commonService.customDateFormat(rowData.toDate, this.dateFormat).date;
        this.leaveInfo.reason = rowData.reason;
        this.leaveInfo.attachment = rowData.fileValue;
        this.leaveInfo.status = rowData.leaveRequestStatus;
        this.dialogRef.open(_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
            disableClose: true,
            panelClass: 'custom-modalbox',
            width: '400px',
            data: { template: this.leaveInfoDialog },
        });
    };
    StudentAttendanceComponent.prototype.openAttachment = function () {
        if (this.leaveInfo.attachment) {
            this.leaveRequestAttachment = this.storeService.getFilePath(this.leaveInfo.attachment);
            window.open(this.leaveRequestAttachment);
        }
    };
    StudentAttendanceComponent.prototype.resetFilter = function () {
        // this.studentAttendanceForm.reset();
    };
    StudentAttendanceComponent.prototype.checkStaff = function () {
        var _this = this;
        if (this.isStaffLogin) {
            if (this.staffInfo.find(function (x) { return x.classId === _this.studentAttendanceForm.controls.classId.value
                && x.sectionId === _this.studentAttendanceForm.controls.sectionId.value && x.isClassTeacher === true; }) === undefined) {
                this.hideButtons = true;
            }
            else {
                this.hideButtons = false;
            }
        }
    };
    StudentAttendanceComponent.prototype.close = function () {
        var _this = this;
        setTimeout(function () {
            _this._focusMonitor.stopMonitoring(document.getElementById('navButton_1'));
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attendanceSummary'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentAttendanceComponent.prototype, "attendanceSummary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveInfoDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentAttendanceComponent.prototype, "leaveInfoDialog", void 0);
    StudentAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendance',
            template: __webpack_require__(/*! ./student-attendance.component.html */ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.html"),
            providers: [app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__["StudentDBService"], app_service_student_attendance_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__["StudentAttendanceService"], app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_8__["SchoolAcademicSessionService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_9__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_13__["ClassesConfigService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__["ClassTimetableService"]],
            styles: [__webpack_require__(/*! ./student-attendance.component.scss */ "./src/app/modules/academics/attendance/student-attendance/student-attendance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__["StudentDBService"],
            app_service_student_attendance_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__["StudentAttendanceService"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_9__["GradeSetupService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__["ClassTimetableService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"]])
    ], StudentAttendanceComponent);
    return StudentAttendanceComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/student-attendance/student-attendance.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/student-attendance/student-attendance.service.ts ***!
  \**************************************************************************/
/*! exports provided: StudentAttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendanceService", function() { return StudentAttendanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */







var StudentAttendanceService = /** @class */ (function () {
    function StudentAttendanceService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    StudentAttendanceService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentAttendanceService.prototype.markAttendance = function (classAttendanceView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/StudentAttendance/mark-attendance", 
        // return this.httpClient.post<any>('http://localhost:8013/StudentAttendance/mark-attendance',
        classAttendanceView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentAttendanceService.prototype.markStudentAbsentPresent = function (studentAttendanceStatusView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/StudentAttendance/student-attendance", 
        // return this.httpClient.post<any>('http://localhost:8013/StudentAttendance/student-attendance',
        studentAttendanceStatusView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentAttendanceService.prototype.studentAttendances = function (studentNames, attendanceDate, admissionNumber, rollNumber, classIds, sectionIds, absentOrPresents, sortOrder, sortBy, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (studentNames) {
            studentNames.forEach(function (element) {
                queryParameters = queryParameters.append('StudentNames', element);
            });
        }
        if (attendanceDate !== undefined && attendanceDate !== null) {
            queryParameters = queryParameters.set('AttendanceDate', attendanceDate);
        }
        if (admissionNumber) {
            admissionNumber.forEach(function (element) {
                queryParameters = queryParameters.append('AdmissionNumber', element);
            });
        }
        if (rollNumber) {
            rollNumber.forEach(function (element) {
                queryParameters = queryParameters.append('RollNumber', element);
            });
        }
        if (classIds) {
            classIds.forEach(function (element) {
                queryParameters = queryParameters.append('ClassIds', element);
            });
        }
        if (sectionIds) {
            sectionIds.forEach(function (element) {
                queryParameters = queryParameters.append('SectionIds', element);
            });
        }
        if (absentOrPresents) {
            absentOrPresents.forEach(function (element) {
                queryParameters = queryParameters.append('AbsentOrPresents', element);
            });
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/StudentAttendance", 
        // return this.httpClient.get<any>('http://localhost:8013/StudentAttendance',
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentAttendanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], StudentAttendanceService);
    return StudentAttendanceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-attendance-attendance-module~app-modules-staff-staff-module.js.map