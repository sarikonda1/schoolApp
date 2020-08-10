(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-bulk-data-add-bulk-add-module"],{

/***/ "./src/app/modules/bulk-data-add/bulk-add-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-add-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BulkAddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAddRoutingModule", function() { return BulkAddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bulk_add_bulk_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulk-add/bulk-add.component */ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.ts");
/* harmony import */ var _bulk_process_bulk_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bulk-process/bulk-process.component */ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.ts");





var routes = [
    {
        path: 'upload-data',
        component: _bulk_add_bulk_add_component__WEBPACK_IMPORTED_MODULE_3__["BulkAddComponent"],
        data: { title: 'Bulk Upload' }
    },
    {
        path: 'upload-data/processed-data/:id',
        component: _bulk_process_bulk_process_component__WEBPACK_IMPORTED_MODULE_4__["BulkProcessComponent"],
        data: { title: 'Bulk Process Data' }
    }
];
var BulkAddRoutingModule = /** @class */ (function () {
    function BulkAddRoutingModule() {
    }
    BulkAddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BulkAddRoutingModule);
    return BulkAddRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-add.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-add.module.ts ***!
  \**********************************************************/
/*! exports provided: BulkAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAddModule", function() { return BulkAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");
/* harmony import */ var _bulk_add_bulk_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bulk-add/bulk-add.component */ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.ts");
/* harmony import */ var _bulk_add_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bulk-add-routing.module */ "./src/app/modules/bulk-data-add/bulk-add-routing.module.ts");
/* harmony import */ var _bulk_process_bulk_process_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bulk-process/bulk-process.component */ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.ts");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");

















var BulkAddModule = /** @class */ (function () {
    function BulkAddModule() {
    }
    BulkAddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_bulk_add_bulk_add_component__WEBPACK_IMPORTED_MODULE_13__["BulkAddComponent"], _bulk_process_bulk_process_component__WEBPACK_IMPORTED_MODULE_15__["BulkProcessComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__["MatcomponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"],
                _bulk_add_routing_module__WEBPACK_IMPORTED_MODULE_14__["BulkAddRoutingModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }, app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_12__["CommunicationService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BulkAddModule);
    return BulkAddModule;
}());



/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-20\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Upload School Data</div>\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxFlex.gt-sm=\"30\" fxFlex=\"100\" class=\"pt-20 icon-center\">\n          <mat-label translate #options translate>Type</mat-label>\n          <mat-select [formControl]=\"option\" (selectionChange)=\"onChange($event)\">\n            <mat-option *ngFor=\"let addOption of addOptions\" [value]=\"addOption.value\">{{addOption.label}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='options.innerText' [validationControl]=\"option\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div *ngIf=\"showLink\" fxLayoutAlign=\"end center\" class=\"ml-8\">\n          <button mat-button fxShow.gt-xs class=\"language-button\" color=\"accent\" aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n            Sample Templates\n          </button>\n        </div>\n        <mat-menu #menu=\"matMenu\">\n          <ng-container *ngFor=\"let item of templates\">\n            <button mat-menu-item (click)=\"exportToExcel(item)\">\n            {{item.label}}\n            </button>\n          </ng-container>\n        </mat-menu>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center end\" class=\"mr-8\">\n        <button mat-raised-button color=\"primary\" type=\"button\" [disabled]=\"option.invalid\"\n          (click)=\"logoImgInput.value='';logoImgInput.click()\">{{'Select File' | translate}}</button>\n        <input accept=\" .xls, .xlsx, .csv, .ods\" id=\"logoImgInput\" fxHide type=\"file\" #logoImgInput\n          (change)=\"uploadFile($event)\">\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mr-8\">\n        <button mat-button type='button' (click)=\"getHelpText('Upload School Data')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-table *ngIf=\"rows && rows.length > 0\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (selectedRows)='selectedRows($event)' [massActionTemplateRef]=\"massActions\" (headerButtonClick)=\"reset()\" (additionalButtonClick)=\"checkUrl()\">\n</app-table>\n\n<app-custom-card *ngIf=\"(rows && rows.length == 0) && (option.invalid)\" [title]=\"header\" [inputMessage]=\"'Select Import Type'\">\n</app-custom-card>\n\n<ng-template #massActions>\n  <button type=\"button\" mat-raised-button class=\"text-uppercase mx-8\" color=\"accent\"\n    (click)=\"submit()\">{{'Process' | translate}}</button>\n</ng-template>\n\n<app-table *ngIf=\"(importLogs && importLogs.length > 0) && (rows && rows.length == 0)\" [settings]=\"logSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='rowWiseActions($event)'>\n</app-table>\n\n<app-custom-card *ngIf=\"(importLogs && importLogs.length == 0) && (option.valid)  && (rows && rows.length == 0)\" [title]=\"header\" [inputMessage]=\"'No Import Logs'\">\n</app-custom-card>"

/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnVsay1kYXRhLWFkZC9idWxrLWFkZC9idWxrLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: BulkAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAddComponent", function() { return BulkAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/class-schedules/holiday-configuration.service */ "./src/app/service/class-schedules/holiday-configuration.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/student-admissions-service/student-admission.service */ "./src/app/service/student-admissions-service/student-admission.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/staff/staff-member.service */ "./src/app/service/staff/staff-member.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var BulkAddComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BulkAddComponent, _super);
    function BulkAddComponent(commonService, holidayService, studentAdmissionService, staffMemberService, snackBar, router, httpClient) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.holidayService = holidayService;
        _this.studentAdmissionService = studentAdmissionService;
        _this.staffMemberService = staffMemberService;
        _this.snackBar = snackBar;
        _this.router = router;
        _this.httpClient = httpClient;
        _this.addOptions = [];
        _this.option = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        _this.showLink = false;
        _this.fileName = '';
        _this.rows = [];
        _this.header = '';
        _this.studentBulkPostView = [];
        _this.staffs = [];
        _this.importLogs = [];
        return _this;
    }
    BulkAddComponent.prototype.ngOnInit = function () {
        this.addOptions = [
            { value: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD, label: 'Holidays' },
            { value: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD, label: 'Students' },
            { value: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STF, label: 'Staff' }
        ];
        this.templates = [
            { value: 'xlsx', label: 'Excel' },
        ];
        this.initializeStudent();
        this.checkUrl();
    };
    BulkAddComponent.prototype.initializeStudent = function () {
        this.studentFatherParent = {
            firstName: '',
            lastName: '',
            middleName: '',
            email1: '',
            mobileTel: '',
            otherTel: '',
        };
        this.studentMotherParent = {
            firstName: '',
            lastName: '',
            middleName: '',
            email1: '',
            mobileTel: '',
            otherTel: '',
        };
        this.attachment = {
            fileName: '',
            fileValue: ''
        };
        this.studentPostView = {
            studentDetailsViewModel: this.studentBulkPostView,
            attachmentViewModel: this.attachment
        };
    };
    BulkAddComponent.prototype.onChange = function (option) {
        this.showLink = true;
        this.fileName = '';
        this.link = '';
        this.rows = [];
        switch (option.value) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD:
                this.fileName = 'Holidays.xlsx';
                this.link = 'assets/excels/Holidays.xlsx';
                this.header = 'Holidays';
                this.getColumns('assets/importJsonFiles/holiday.json');
                this.getImportLogData('Holiday');
                window.location.hash = 'Holidays';
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD:
                this.fileName = 'Students.xlsx';
                this.link = 'assets/excels/Students.xlsx';
                this.header = 'Students';
                this.getColumns('assets/importJsonFiles/students.json');
                this.getImportLogData('Student');
                window.location.hash = 'Students';
                break;
            default:
                this.fileName = 'Staff.xlsx';
                this.link = 'assets/excels/Staff.xlsx';
                this.header = 'Staff';
                this.getColumns('assets/importJsonFiles/staff.json');
                this.getImportLogData('Staff');
                window.location.hash = 'Staff';
                break;
        }
    };
    BulkAddComponent.prototype.exportToExcel = function (template) {
        var _this = this;
        switch (this.option.value) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD:
                this.fileName = template.value === 'xlsx' ? 'Holidays.xlsx' : 'Holidays.csv';
                this.link = template.value === 'xlsx' ? 'assets/excels/Holidays.xlsx' : 'assets/excels/Holidays.csv';
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD:
                this.fileName = template.value === 'xlsx' ? 'Students.xlsx' : 'Students.csv';
                this.link = template.value === 'xlsx' ? 'assets/excels/Students.xlsx' : 'assets/excels/Students.csv';
                break;
            default:
                this.fileName = template.value === 'xlsx' ? 'Staff.xlsx' : 'Staff.csv';
                this.link = template.value === 'xlsx' ? 'assets/excels/Staff.xlsx' : 'assets/excels/Staff.csv';
                break;
        }
        this.commonService.downloadData(this.link).subscribe(function (result) {
            _this.downloadFile(result, _this.fileName);
        });
    };
    BulkAddComponent.prototype.downloadFile = function (blob, filename) {
        var binaryData = [];
        binaryData.push(blob);
        var url = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })); // <-- work with blob directly
        // create hidden dom element (so it works in all browsers)
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        // create file, attach to hidden element and open hidden element
        a.href = url;
        a.download = filename;
        a.click();
    };
    BulkAddComponent.prototype.uploadFile = function (event) {
        var _this = this;
        if (event.target.value) {
            var file_1 = event.target.files[0];
            switch (this.header) {
                case 'Holidays':
                    this.holidayService.readHolidaysBulkData(file_1).subscribe(function (res) {
                        _this.bindHolidayResult(res.holidayResultValidations);
                    }, function (err) {
                        _this.openSnackBar(err.error.messages.ResultMessage, true);
                    });
                    break;
                case 'Students':
                    this.studentAdmissionService.readStudentData(file_1).subscribe(function (res) {
                        _this.bindResult(res.studentAdmissionValidations);
                    }, function (err) {
                        _this.openSnackBar(err.error.messages.ResultMessage, true);
                    });
                    break;
                case 'Staff':
                    this.staffMemberService.readStaffsBulkData(file_1).subscribe(function (res) {
                        _this.bindResult(res.staffResultValidations);
                    }, function (err) {
                        _this.openSnackBar(err.error.messages.ResultMessage, true);
                    });
                    break;
            }
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.attachment.fileName = file_1.name;
                that_1.attachment.fileValue = reader_1.result.split(',')[1];
            };
        }
    };
    BulkAddComponent.prototype.bindResult = function (data) {
        var _this = this;
        this.rows = [];
        if (!data) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data;
            this.rows.forEach(function (rowData, index) {
                if (rowData.errors && rowData.errors.length) {
                    _this.errorMessage = '';
                    rowData.errors.forEach(function (errors) {
                        _this.option.value === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD ? _this.createStudentArray(rowData, index, errors) : _this.createStaffArray(index, errors);
                    });
                    _this.rows[index].error = _this.errorMessage;
                }
                else {
                    _this.option.value === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD ? _this.createStudentArray(rowData, index) : _this.createStaffArray(index);
                }
            });
        }
        this.initializeTableSettings();
    };
    BulkAddComponent.prototype.createStudentArray = function (rowData, index, errorMessage) {
        this.rows[index].studentName = [this.rows[index].firstName, this.rows[index].middleName, this.rows[index].lastName].join(' ');
        this.rows[index].fatherName =
            [this.rows[index].fatherFirstName, this.rows[index].fatherMiddleName, this.rows[index].fatherLastName].join(' ');
        this.rows[index].motherName =
            [this.rows[index].motherFirstName, this.rows[index].motherMiddleName, this.rows[index].motherLastName].join(' ');
        this.rows[index].dateOfBirth = this.commonService.customDateFormat(this.rows[index].dateOfBirth, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].dateOfJoining = this.commonService.customDateFormat(this.rows[index].dateOfJoining, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].dateOfAdmission = this.commonService.customDateFormat(this.rows[index].dateOfAdmission, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date;
        var emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = [this.errorMessage, emsg].join(' ');
        }
    };
    BulkAddComponent.prototype.bindHolidayResult = function (data) {
        var _this = this;
        this.rows = [];
        if (!data) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data;
            this.rows.forEach(function (rowData, index) {
                if (rowData.errors && rowData.errors.length) {
                    _this.errorMessage = '';
                    rowData.errors.forEach(function (errors) {
                        _this.createArray(index, errors);
                    });
                    _this.rows[index].error = _this.errorMessage;
                }
                else {
                    _this.createArray(index);
                }
            });
        }
        this.initializeTableSettings();
    };
    BulkAddComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            model: [],
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: this.header,
            componentName: '',
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isMultiDeleteRequired: false,
            headerOperations: {
                additionalButtons: [
                    {
                        name: 'Clear',
                        // class: 'text-uppercase accent',
                        textColor: 'accent text-uppercase',
                        // disable: 'disabled',
                        clickAction: 'checkUrl'
                    }
                ]
            }
        };
    };
    BulkAddComponent.prototype.submit = function () {
        var _this = this;
        if (this.option.value === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD) {
            var holiday = void 0;
            holiday = {
                holidayViewModels: null,
                attachmentViewModel: null,
            };
            holiday.holidayViewModels = this.submitData;
            holiday.attachmentViewModel = this.attachment;
            this.holidayService.holidaysBulkPost(holiday).subscribe(function (res) {
                _this.rowWiseActions(_this.eventObj(res.bulkImportId));
            });
        }
        else if (this.option.value === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD) {
            this.initializeStudentView();
            // this.initializeStudent();
            this.studentPostView.studentDetailsViewModel = [];
            this.submitData.forEach(function (students, index) {
                _this.studentFatherParent.firstName = students.fatherFirstName,
                    _this.studentFatherParent.lastName = students.fatherLastName,
                    _this.studentFatherParent.middleName = students.fatherMiddleName,
                    _this.studentFatherParent.email1 = students.fatherEmail,
                    _this.studentFatherParent.mobileTel = students.fatherMobileNumber,
                    _this.studentFatherParent.otherTel = students.fatherAlternateNumber,
                    _this.studentMotherParent.firstName = students.motherFirstName,
                    _this.studentMotherParent.lastName = students.motherLastName,
                    _this.studentMotherParent.middleName = students.motherMiddleName,
                    _this.studentMotherParent.email1 = students.motherEmail,
                    _this.studentMotherParent.mobileTel = students.motherMobileNumber,
                    _this.studentMotherParent.landTel = students.motherLandlineNumber,
                    _this.studentMotherParent.otherTel = students.motherAlternateNumber,
                    _this.studentEmergencyDetailsView = JSON.parse(JSON.stringify(students)),
                    _this.studentPostData.student = JSON.parse(JSON.stringify(students)),
                    _this.studentPostData.student.address = JSON.parse(JSON.stringify(students)),
                    _this.studentPostData.student.address.line1 = students.addressLine1;
                _this.studentPostData.student.address.line2 = students.addressLine2;
                _this.studentPostData.student.address.line3 = students.addressLine3;
                _this.studentPostData.student.email1 = students.primaryEmail;
                _this.studentPostData.student.email2 = students.secondaryEmail;
                _this.studentPostData.student.mobileTel = students.mobileNumber;
                _this.studentPostData.student.otherTel = students.alternateNumber;
                _this.studentPostData.student.landTel = students.landlineNumber;
                _this.studentPostData.student.firstName = students.firstName;
                _this.studentPostData.student.lastName = students.lastName;
                _this.studentPostData.student.middleName = students.middleName;
                Object.assign(_this.studentPostData.studentEmergencyContactDetailsView = {}, _this.studentEmergencyDetailsView),
                    _this.studentPostData.studentEmergencyContactDetailsView.emgergencyContactTelNumber1 = students.emergencyContactPhoneNumber1,
                    Object.assign(_this.studentPostData.parentMotherParent = {}, _this.studentMotherParent);
                Object.assign(_this.studentPostData.fatherParent = {}, _this.studentFatherParent);
                Object.assign(_this.studentPostView.studentDetailsViewModel[index] = {}, _this.studentPostData);
            });
            this.studentPostView.attachmentViewModel = this.attachment;
            this.studentAdmissionService.bulkStudentPost(this.studentPostView).subscribe(function (res) {
                _this.rowWiseActions(_this.eventObj(res.bulkImportId));
            });
        }
        else if (this.option.value === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STF) {
            this.staffs = [];
            var staff_1;
            this.submitData.forEach(function (stf, index) {
                staff_1 = stf;
                Object.assign(staff_1.person = {}, JSON.parse(JSON.stringify(stf)));
                Object.assign(_this.staffs[index] = {}, staff_1);
            });
            var staffBulkPostView = {};
            Object.assign(staffBulkPostView.staffView = [], this.staffs);
            Object.assign(staffBulkPostView.attachmentViewModel = {}, this.attachment);
            this.staffMemberService.staffBulkPost(staffBulkPostView).subscribe(function (res) {
                _this.rowWiseActions(_this.eventObj(res.bulkImportId));
            });
        }
    };
    BulkAddComponent.prototype.initializeStudentView = function () {
        this.studentPostData = {
            student: null,
            fatherParent: null,
            parentMotherParent: null,
            studentEmergencyContactDetailsView: null,
            parentGuardianParent: null,
            siblingStudentsStudentId1: null
        };
    };
    BulkAddComponent.prototype.selectedRows = function (_event) {
        this.submitData = [];
        this.submitData = _event;
    };
    BulkAddComponent.prototype.createArray = function (index, errors) {
        this.rows[index].classSection = this.rows[index].className != null ? [this.rows[index].className, this.rows[index].sectionName].join(',') : null;
        this.rows[index].date = [this.commonService.customDateFormat(this.rows[index].fromDate, this.getSchoolDateFormat()).date, this.commonService.customDateFormat(this.rows[index].toDate, this.getSchoolDateFormat()).date].join('-'),
            this.rows[index].fromDate = this.commonService.customDateFormat(this.rows[index].fromDate, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date,
            this.rows[index].toDate = this.commonService.customDateFormat(this.rows[index].toDate, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date,
            this.rows[index].postToCalendar = (this.rows[index].isPostToCalendar !== null && this.rows[index].isPostToCalender === 1) ? 'Yes' :
                (this.rows[index].isPostToCalender !== null && this.rows[index].isPostToCalender === 0) ? 'No' : null,
            this.rows[index].staffHoliday =
                (this.rows[index].isStaffHoliday !== null && this.rows[index].isStaffHoliday === 1) ? 'Yes'
                    : (this.rows[index].isStaffHoliday !== null && this.rows[index].isStaffHoliday === 0) ? 'No' : null;
        var emsg = errors !== undefined ? errors.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = [this.errorMessage, emsg].join(' ');
        }
    };
    BulkAddComponent.prototype.createStaffArray = function (index, errorMessage) {
        this.rows[index].name = [this.rows[index].firstName, this.rows[index].middleName, this.rows[index].lastName].join(' ');
        this.rows[index].dateOfBirth = this.commonService.customDateFormat(this.rows[index].dateOfBirth, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].dateOfJoining = this.commonService.customDateFormat(this.rows[index].dateOfJoining, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_DATE_PATTERN).date;
        var emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = [this.errorMessage, emsg].join(' ');
        }
    };
    BulkAddComponent.prototype.getImportLogData = function (title) {
        var _this = this;
        this.studentAdmissionService.getAllBulkData(this.option.value).subscribe(function (res) {
            var filters = [];
            if (res.bulkImportView !== null && res.bulkImportView.list) {
                _this.totalRowsCount = res.totalItems;
                _this.pageCnt = res.totalPages;
                _this.importLogs = res.bulkImportView.list;
                filters = res.bulkImportView.filters;
                _this.importLogs.forEach(function (element) {
                    element.fileName = element.attachmentViewModel.fileValue;
                });
            }
            else {
                _this.importLogs = [];
                _this.totalRowsCount = 0;
                _this.pageCnt = 0;
            }
            var columns = [
                { field: 'fileName', header: 'File Name', sort: false },
                { field: 'recordCount', header: 'Total Records', sort: false },
                { field: 'successCount', header: 'Success Records', sort: false },
                { field: 'failureCount', header: 'Failure Records', sort: false },
                { field: 'processedCount', header: 'Processed Records', sort: false },
                { field: 'status', header: 'Status', sort: false },
                { field: 'view', header: 'Action', sort: false }
            ];
            _this.logSettings = {
                model: [],
                rows: _this.importLogs,
                columns: columns,
                totalRowsCount: _this.totalRowsCount,
                pageCnt: _this.pageCnt,
                tablename: title.concat(' Import Logs'),
                componentName: 'bulk-add-logs',
                isPaginationRequired: true,
                filtersList: [],
                isClientSidePaginationReq: true
            };
        });
    };
    BulkAddComponent.prototype.rowWiseActions = function (event) {
        this.router.navigate(['setup-wizard/upload-data/processed-data/' + event.clickedRow.id]);
    };
    BulkAddComponent.prototype.getColumns = function (url) {
        var _this = this;
        this.httpClient.get(url).subscribe(function (data) {
            if (data) {
                _this.columns = [];
                _this.columns = data.colLowerCase;
            }
        });
    };
    BulkAddComponent.prototype.checkUrl = function () {
        if (window.location.hash) {
            var option = {
                value: null
            };
            switch (decodeURIComponent(window.location.hash).split('#')[1]) {
                case 'Holidays':
                    this.option.setValue(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD);
                    option.value = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_HLD;
                    this.onChange(option);
                    break;
                case 'Students':
                    this.option.setValue(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD);
                    option.value = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STD;
                    this.onChange(option);
                    break;
                case 'Staff':
                    this.option.setValue(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STF);
                    option.value = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].BULKIMP_STF;
                    this.onChange(option);
                    break;
            }
        }
    };
    BulkAddComponent.prototype.reset = function () {
        this.rows = [];
    };
    BulkAddComponent.prototype.eventObj = function (data) {
        var event = {
            clickedRow: {
                id: ''
            }
        };
        event.clickedRow.id = data;
        return event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BulkAddComponent.prototype, "logoImgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BulkAddComponent.prototype, "fileInput", void 0);
    BulkAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-add',
            template: __webpack_require__(/*! ./bulk-add.component.html */ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.html"),
            providers: [app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_4__["HolidayConfigurationService"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_7__["StudentAdmissionService"], app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_9__["StaffMemberService"]],
            styles: [__webpack_require__(/*! ./bulk-add.component.scss */ "./src/app/modules/bulk-data-add/bulk-add/bulk-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_4__["HolidayConfigurationService"],
            app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_7__["StudentAdmissionService"], app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_9__["StaffMemberService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], BulkAddComponent);
    return BulkAddComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-40\">\n    <div class=\"py-8 px-20\" fxLayoutAlign=\"space-between center\">\n        <div class=\"font-size-18 text-uppercase\" translate>Process Information</div>\n        <button mat-raised-button color=\"primary\" (click)=\"back()\">Back</button>\n    </div>\n    <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n        <div fxLayout=\"column\">\n            <mat-list class=\"confirm-table pt-0\" fxLayout=\"row wrap\">\n                <mat-list-item fxFlex=\"80\" fxLayout=\"column\">\n                    Name of the File Processed\n                </mat-list-item>\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    {{importData?.attachmentViewModel?.fileValue}}\n                </mat-list-item>\n                <mat-list-item fxFlex=\"80\" fxLayout=\"column\">\n                    Total Number Of Records\n                </mat-list-item>\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    {{importData?.recordCount}}\n                </mat-list-item>\n                <mat-list-item fxFlex=\"80\" fxLayout=\"column\">\n                    Records Processed Successfully\n                </mat-list-item>\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    {{importData?.successCount}}\n                </mat-list-item>\n                <mat-list-item fxFlex=\"80\" fxLayout=\"column\">\n                    Records Failed while Processing\n                </mat-list-item>\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    {{importData?.failureCount}}\n                </mat-list-item>\n                <mat-list-item fxFlex=\"80\" fxLayout=\"column\">\n                    Total Number of Records Processed\n                </mat-list-item>\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    {{importData?.processedCount}}\n                </mat-list-item>\n            </mat-list>\n            <mat-list class=\"border-top\">\n                <mat-list-item fxFlex=\"20\" fxLayout=\"column\">\n                    <button mat-button color=\"accent\" type=\"button\" (click)=\"openAttachment()\">\n                        <mat-icon class=\"mr-4\">cloud_download</mat-icon>Download File\n                    </button>\n                </mat-list-item>\n            </mat-list>\n        </div>\n    </div>\n</div>\n\n<progress-bar [progress]=\"percentage\" [color]=\"'#488aff'\">\n</progress-bar>\n\n<app-table *ngIf=\"rows && rows.length > 0\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n    (openAddForm)='openForm()' [closeRowForm]=\"closeForm\">\n</app-table>"

/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnVsay1kYXRhLWFkZC9idWxrLXByb2Nlc3MvYnVsay1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.ts ***!
  \******************************************************************************/
/*! exports provided: BulkProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkProcessComponent", function() { return BulkProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/student-admissions-service/student-admission.service */ "./src/app/service/student-admissions-service/student-admission.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var BulkProcessComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BulkProcessComponent, _super);
    function BulkProcessComponent(commonService, route, studentAdmissionService, httpClient, dialog, storeService, location, cd) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.route = route;
        _this.studentAdmissionService = studentAdmissionService;
        _this.httpClient = httpClient;
        _this.dialog = dialog;
        _this.storeService = storeService;
        _this.location = location;
        _this.cd = cd;
        _this.columns = [];
        _this.rows = [];
        _this.closeForm = false;
        _this.percentage = 0;
        return _this;
    }
    BulkProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.importId = params.id;
                _this.studentAdmissionService.getByBulkData(_this.importId)
                    .subscribe(function (res) {
                    _this.importData = res;
                    _this.getColumns(_this.importData.importTypeCode);
                    _this.progressCalculate();
                    _this.cd.detectChanges();
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
        // // to do
        // // this.id = setInterval(() => {
        // //   if (this.importData !== undefined && this.importData !== null &&
        // //     this.importData.bulkImportStatusCode !== undefined && this.importData.bulkImportStatusCode !== 'BLKIMP_CMP') {
        // //     this.studentAdmissionService.getByBulkData(this.importId)
        // //       .subscribe(res => {
        // //         this.importData = res;
        // //         if (this.importData !== null) {
        // //           this.initialzeTable(this.importData.importTypeCode);
        // //           this.progressCalculate();
        // //           this.cd.detectChanges();
        // //         }
        // //       }, error => {
        // //         this.errorResponse(error);
        // //       });
        // //   }
        // // }, 10000);
    };
    BulkProcessComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    BulkProcessComponent.prototype.progressCalculate = function () {
        this.percentage = (100 * this.importData.processedCount) / this.importData.recordCount;
        if (this.percentage === NaN) {
            this.percentage = 0;
        }
    };
    BulkProcessComponent.prototype.initialzeTable = function (type) {
        if (this.importData.importJsonData) {
            this.rows = this.importData.importJsonData;
            this.createArray(type);
        }
        else {
            this.rows = [];
        }
        var backBtn = {
            name: 'Back',
            class: 'primary',
            clickAction: 'back'
        };
        this.tableSettings = {
            model: [],
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: this.header,
            componentName: '',
            isClientSidePaginationReq: true
        };
        this.cd.detectChanges();
    };
    BulkProcessComponent.prototype.getColumns = function (type) {
        var _this = this;
        var url = null;
        switch (type) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].BULKIMP_STD:
                url = 'assets/importJsonFiles/students.json';
                this.header = 'Students';
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].BULKIMP_STF:
                url = 'assets/importJsonFiles/staff.json';
                this.header = 'Staff';
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].BULKIMP_HLD:
                url = 'assets/importJsonFiles/holiday.json';
                this.header = 'Holidays';
                break;
        }
        this.columns = [];
        this.httpClient.get(url).subscribe(function (data) {
            _this.columns = data.colUpperCase;
            _this.initialzeTable(type);
        });
    };
    BulkProcessComponent.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    BulkProcessComponent.prototype.createStaffArray = function (index, errorMessage) {
        this.rows[index].Name = [this.rows[index].FirstName, this.rows[index].MiddleName, this.rows[index].LastName].join(' ');
        this.rows[index].DateOfBirth = this.commonService.customDateFormat(this.rows[index].DateOfBirth, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].DateOfJoin = this.commonService.customDateFormat(this.rows[index].DateOfJoin, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].AllowLogin = this.rows[index].AllowLogin ? 'Yes' : 'No';
        var emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = this.errorMessage.concat(emsg + ',');
        }
    };
    BulkProcessComponent.prototype.createStudentArray = function (rowData, index, errorMessage) {
        this.rows[index].StudentName = [this.rows[index].FirstName, this.rows[index].MiddleName, this.rows[index].LastName].join(' ');
        this.rows[index].FatherName =
            [this.rows[index].FatherFirstName, this.rows[index].FatherMiddleName, this.rows[index].FatherLastName].join(' ');
        this.rows[index].MotherName =
            [this.rows[index].MotherFirstName, this.rows[index].MotherMiddleName, this.rows[index].MotherLastName].join(' ');
        this.rows[index].DateOfBirth = this.commonService.customDateFormat(this.rows[index].DateOfBirth, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].DateOfJoining = this.commonService.customDateFormat(this.rows[index].DateOfJoining, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN).date;
        this.rows[index].DateOfAdmission = this.commonService.customDateFormat(this.rows[index].DateOfAdmission, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN).date;
        var emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = this.errorMessage.concat(emsg + ',');
        }
    };
    BulkProcessComponent.prototype.createArray = function (type) {
        var _this = this;
        this.rows.forEach(function (rowData, index) {
            type === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].BULKIMP_STD ? _this.createStudentArray(rowData, index) : type === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].BULKIMP_STF ? _this.createStaffArray(index) : _this.createHolidayArray(index);
        });
    };
    BulkProcessComponent.prototype.cancel = function () {
        this.closeForm = false;
    };
    BulkProcessComponent.prototype.openAttachment = function () {
        if (this.importData.attachmentViewModel != null) {
            var attachmnet = this.storeService.getFilePath(this.importData.attachmentViewModel.fileName);
            window.open(attachmnet);
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
            return;
        }
    };
    BulkProcessComponent.prototype.createHolidayArray = function (index, errorMessage) {
        this.rows[index].ClassSections = [this.rows[index].ClassName, this.rows[index].SectionName].join(' ');
        this.rows[index].Date = [this.commonService.customDateFormat(this.rows[index].FromDate, this.getSchoolDateFormat()).date, this.commonService.customDateFormat(this.rows[index].ToDate, this.getSchoolDateFormat()).date].join('-');
        this.rows[index].PostToCalendar = (this.rows[index].IsPostToCalendar !== null &&
            this.rows[index].IsPostToCalender === 1) ? 'Yes' : (this.rows[index].IsPostToCalender !== null && this.rows[index].IsPostToCalender === 0) ? 'No' : null,
            this.rows[index].StaffHoliday =
                (this.rows[index].IsStaffHoliday !== null && this.rows[index].IsStaffHoliday === 1)
                    ? 'Yes' : (this.rows[index].IsStaffHoliday !== null && this.rows[index].IsStaffHoliday === 0) ? 'No' : null;
        var emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
        if (emsg != null && emsg !== undefined) {
            this.errorMessage = this.errorMessage.concat(emsg + ',');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logStatus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], BulkProcessComponent.prototype, "logStatus", void 0);
    BulkProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-process',
            template: __webpack_require__(/*! ./bulk-process.component.html */ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.html"),
            providers: [app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_4__["StudentAdmissionService"]],
            styles: [__webpack_require__(/*! ./bulk-process.component.scss */ "./src/app/modules/bulk-data-add/bulk-process/bulk-process.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_4__["StudentAdmissionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BulkProcessComponent);
    return BulkProcessComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=app-modules-bulk-data-add-bulk-add-module.js.map