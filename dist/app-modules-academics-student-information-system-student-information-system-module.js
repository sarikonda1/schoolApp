(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-academics-student-information-system-student-information-system-module"],{

/***/ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/dropouts/dropouts.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]=\"closeForm\" \n  (getTableData)='tableData($event)' (rowBasedAction)='actions($event)' (openAddForm)='openForm()'>\n</app-table>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/dropouts/dropouts.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL2Ryb3BvdXRzL2Ryb3BvdXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/dropouts/dropouts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DropoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropoutsComponent", function() { return DropoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/student-information-system/student-action.service */ "./src/app/service/student-information-system/student-action.service.ts");







var DropoutsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DropoutsComponent, _super);
    function DropoutsComponent(dialogRef, router, studentAction, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.router = router;
        _this.studentAction = studentAction;
        _this.snackBar = snackBar;
        _this.currentComponent = 'DropoutsComponent';
        _this.preSelectIds = [];
        _this.setColumnHeaders();
        _this.initializeFilterView();
        _this.initializeTableSettings();
        return _this;
    }
    DropoutsComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getStudentDropouts();
    };
    DropoutsComponent.prototype.getStudentDropouts = function () {
        var _this = this;
        this.studentAction.studentActionGrid(this.filterViewModel.studentActionTypeIds, this.filterViewModel.academicSessions, this.filterViewModel.classIds, this.filterViewModel.classNames, this.filterViewModel.studentName, this.filterViewModel.admissionNumber, this.filterViewModel.details, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.failedRecords, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
            .subscribe(function (res) {
            _this.setStudentDropouts(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    DropoutsComponent.prototype.setStudentDropouts = function (data) {
        var _this = this;
        if (!data.pagedStudentActionViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedStudentActionViewModels.list;
            this.totalRowsCount = data.pagedStudentActionViewModels.totalItems;
            this.pageCnt = data.pagedStudentActionViewModels.totalPages;
            this.rows.forEach(function (e) {
                e.requestDate = (e.requestDate == null) ? null : _this.commonService.customDateFormat(e.requestDate, _this.getSchoolDateFormat()).date;
            });
            this.preSelectIds = [];
        }
        if (data.pagedStudentActionViewModels) {
            this.filterViewModel.pageNumber = data.pagedStudentActionViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Dropouts',
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: false
                },
                infoButton: {
                    required: true,
                    text: 'Dropouts'
                }
            }
        };
    };
    DropoutsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
    };
    DropoutsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'academicSession', header: 'Academic Session', sort: true },
            { field: 'admissionNumber', header: 'admissionNumber', sort: true },
            { field: 'className', header: 'Class', sort: true },
            { field: 'details', header: 'Reason', sort: true }
        ];
    };
    DropoutsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Dropouts',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            headerOperations: {
                addingForm: {
                    required: false
                }
            }
        };
    };
    DropoutsComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].APPROVE.toLowerCase()) {
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].REJECT.toLowerCase()) {
        }
    };
    DropoutsComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    DropoutsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getStudentDropouts();
    };
    DropoutsComponent.prototype.openForm = function () {
        this.closeForm = false;
    };
    DropoutsComponent.prototype.onCancel = function (event) {
        this.closeForm = event;
    };
    DropoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropouts',
            template: __webpack_require__(/*! ./dropouts.component.html */ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.html"),
            providers: [app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_6__["StudentActionService"]],
            styles: [__webpack_require__(/*! ./dropouts.component.scss */ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_6__["StudentActionService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DropoutsComponent);
    return DropoutsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"pt-16 font-size-18 text-uppercase\">\n    Preview student request\n</div>\n\n<div id=\"previewHtml\" #dataContainer></div>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-16\">\n  <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"onCancel()\" translate>{{'Cancel' | translate}}</button>\n  <button mat-raised-button (click)=\"onSubmit()\" type=\"submit\" class=\"mr-12 text-uppercase theme-test\" color=\"accent\" >{{ 'generateCertificate' | translate}}</button>\n</div>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3ByZXZpZXctc3R1ZGVudC1yZXF1ZXN0L3ByZXZpZXctc3R1ZGVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PreviewStudentRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewStudentRequestComponent", function() { return PreviewStudentRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/student-information-system/student-request.service */ "./src/app/service/student-information-system/student-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");








var PreviewStudentRequestComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreviewStudentRequestComponent, _super);
    function PreviewStudentRequestComponent(dialogRef, router, route, studentRequestService, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.router = router;
        _this.route = route;
        _this.studentRequestService = studentRequestService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.approveStudentRequestView = {
                    isPreview: true,
                    id: params['id'],
                    customFields: {}
                };
            }
        });
        _this.getPreview();
        return _this;
    }
    PreviewStudentRequestComponent.prototype.ngOnInit = function () {
    };
    // inputs StudentRequestId
    // API service call as preview with studentRequestId
    PreviewStudentRequestComponent.prototype.getPreview = function () {
        var _this = this;
        this.studentRequestService.approveRequest(this.approveStudentRequestView).subscribe(function (res) {
            _this.openSnackBar(res.messages.ResultMessage);
            _this.dataContainer.nativeElement.innerHTML = res['messages']['Preview'];
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // bind the Html Preview as is from the API along with submit button
    // onSubmit send another request with all CustomAttributes
    PreviewStudentRequestComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(document.getElementById('previewHtml').querySelectorAll('*[id]'));
        debugger;
        Array.from(document.getElementById('previewHtml').querySelectorAll('*[id]')).map(function (x) {
            _this.approveStudentRequestView.customFields[x.id] = x.value;
        });
        this.approveStudentRequestView.isPreview = false;
        this.studentRequestService.approveRequest(this.approveStudentRequestView).subscribe(function (res) {
            // show result in snack bar and redirect to student Requests list
            _this.openSnackBar(res.messages.ResultMessage);
            // Redirect to the student Request List page
            _this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"]._Student_Requests]);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PreviewStudentRequestComponent.prototype.onCancel = function () {
        // redirect to Student Requests List Page
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"]._Student_Requests]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PreviewStudentRequestComponent.prototype, "dataContainer", void 0);
    PreviewStudentRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-student-request',
            template: __webpack_require__(/*! ./preview-student-request.component.html */ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.html"),
            providers: [app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_4__["StudentRequestService"]],
            styles: [__webpack_require__(/*! ./preview-student-request.component.scss */ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_4__["StudentRequestService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], PreviewStudentRequestComponent);
    return PreviewStudentRequestComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-32\">\n  <div class=\"p-12 font-size-18 text-uppercase\" translate=\"\">SECTION ASSIGNMENT</div>\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <form [formGroup]=\"sectionForm\" (ngSubmit)=\"onSelectClassBoard(sectionForm)\" #SectionForm=\"ngForm\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"p-20\">\n          <mat-form-field *ngIf=\"isSchoolBoard\" appearance=\"outline\">\n            <mat-label #classId translate>Board</mat-label>\n            <mat-select formControlName=\"boardId\" (selectionChange)=\"onBoardSelect($event)\" required>\n              <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n                {{board.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"pt-12\">\n            <mat-label #classId translate>Class</mat-label>\n            <mat-select formControlName=\"classId\" (selectionChange)=\"onClassSelect($event)\" required>\n              <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n                {{class.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div fxLayoutAlign=\"end\">\n            <button mat-raised-button color=\"primary\" type=\"button\" class=\"text-uppercase\" (click)=\"reset()\">{{'Reset' | translate}}</button>\n          </div>\n        </div>\n        <div fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"70\" class=\"border-left section-assignament px-8\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-16 border-bottom\">\n            <div *ngIf=\"sectionsInfo && loadData | async\" class=\"pr-8\">{{'Total Assigned' | translate}} {{assignedStudents}} of {{totalstudentsCount}}</div>\n            <button mat-button type='button' (click)=\"getHelpText('Section Assigmnent')\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" *ngIf=\"sectionsInfo && loadData | async\" class=\"py-12\">\n            <div fxLayout=\"column\" fxFlex=\"30\" class=\"mat-elevation-z3 m-w m-12 radius-10\"\n              [@animate]=\"{value:'*',params:{y:'100%'}}\">\n              <p class=\"text-center text-uppercase font-size-16\" translate>Not Assigned</p>\n              <mat-divider></mat-divider>\n              <span class=\"text-center font-size-24 py-8 red-fg\">{{notAssignedStudents}}</span>\n            </div>\n\n            <div *ngFor=\"let i of sectionsDetails\" [@animate]=\"{value:'*',params:{delay:'100ms', y:'25px'}}\">\n              <div fxLayout=\"column\" fxFlex=\"30\" class=\"mat-elevation-z3 m-w m-12 radius-10\">\n                <p class=\"text-center text-uppercase font-size-16\">{{i.sectionName}}</p>\n                <mat-divider></mat-divider>\n                <span class=\"text-center font-size-24 py-8\">{{i.sectionCount}}</span>\n                <small class=\"text-center font-size-13 pb-4\" *ngIf=\"i.maximumCapacity!=0&&i.maximumCapacity!=null\">Max-Capacity({{i.maximumCapacity}})</small>\n              </div>\n            </div>\n          </div>\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" *ngIf=\"!sectionsInfo && sectionForm.controls.classId.value && loadData | async\" class=\"py-12\">\n              <p class=\"text-center text-uppercase font-size-16\" translate>There are no students currently admitted in the selected class.</p>\n          </div>\n          <div *ngIf=\"sectionForm.invalid\" class=\"py-16 text-center font-size-16\">\n            {{'PLEASE SELECT REQUIRED FIELDS.' | translate}}\n          \n        </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n<app-table *ngIf=\"tableData\" [settings]=\"tabSettings\" (getTableData)='studentsData($event, true)'\n  [massActionTemplateRef]=\"massActions\" (selectedRows)='selectedRows($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n  [disabled]=\"disbleSubmitBtn\" [templateRef]=\"addCourseTemplate\" [closeAddForm]=\"closeAddPanel\"\n  (openAddForm)=\"onAddFormClick()\" [closeRowForm]='closeAddPanel'>\n</app-table>\n\n\n<ng-template #massActions>\n  <form [formGroup]=\"sectionDropForm\" (ngSubmit)=\"sectionAssign(sectionDropForm.value)\">\n    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n      <mat-form-field class=\"px-20 w-200\">\n        <mat-label #sectionId translate>Section</mat-label>\n        <mat-select (selectionChange)=\"onSectionSelect($event)\" formControlName=\"sectionId\" required>\n          <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section.value\">\n            {{section.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='sectionId.innerText' [validationControl]=\"sectionDropForm.controls.sectionId\"\n            [doValidate]=\"sectiionValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"column\">\n        <button mat-raised-button class=\"text-uppercase mr-8\" type=\"submit\" color=\"accent\">{{'Assign' | translate}}</button>\n      </div>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-assignament {\n  min-height: 300px; }\n  .section-assignament .m-w {\n    max-width: 180px !important;\n    width: 180px !important;\n    height: 133px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3NlY3Rpb24tYXNzaWdubWVudC9zZWN0aW9uLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdRLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2FkZW1pY3Mvc3R1ZGVudC1pbmZvcm1hdGlvbi1zeXN0ZW0vc2VjdGlvbi1hc3NpZ25tZW50L3NlY3Rpb24tYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWFzc2lnbmFtZW50e1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIC5tLXd7XG4gICAgICAgIG1heC13aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTMzcHg7XG5cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SectionAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAssignmentComponent", function() { return SectionAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_student_information_system_students_section_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/student-information-system/students-section-service */ "./src/app/service/student-information-system/students-section-service.ts");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");












var SectionAssignmentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SectionAssignmentComponent, _super);
    function SectionAssignmentComponent(commonService, dialog, _fb, gradeSetupService, schoolService, studentsSectionService, classSectionService, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.schoolService = schoolService;
        _this.studentsSectionService = studentsSectionService;
        _this.classSectionService = classSectionService;
        _this.snackBar = snackBar;
        _this.sectionsInfo = true;
        _this.loadData = Promise.resolve(false);
        _this.classNames = [];
        _this.filterClasses = [];
        _this.boards = [];
        _this.schoolBoardsList = [];
        _this.currentComponent = 'SectionAssignmentComponent';
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.sectionNames = [];
        _this.sectionsDetails = [];
        _this.studentIds = [];
        _this.setViewModel();
        _this.studentSectionAssignView = {
            sectionId: 0,
            classId: 0,
            schoolBoardId: 0,
            ids: []
        };
        return _this;
    }
    SectionAssignmentComponent.prototype.setViewModel = function () {
        this.studentsSectionSView = {
            classId: 0,
            schoolBoardId: 0,
            classIds: [],
            sectionIds: [],
            studentNames: [],
            admissionNumbers: [],
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE
        };
    };
    SectionAssignmentComponent.prototype.ngOnInit = function () {
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.sectionForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.sectionDropForm = this._fb.group({
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.studentsSectionSView = modelTableComponent;
            if (this.studentsSectionSView['boardId']) {
                this.boardId = this.studentsSectionSView['boardId'];
                this.sectionForm.patchValue({
                    boardId: this.studentsSectionSView['boardId']
                });
            }
            if (this.studentsSectionSView.classId) {
                this.classId = this.studentsSectionSView.classId;
                this.sectionForm.patchValue({
                    classId: this.studentsSectionSView.classId
                });
                this.onClassSelect({ value: this.studentsSectionSView.classId });
            }
        }
        this.schoolBoards();
    };
    // Get SChool Boards
    SectionAssignmentComponent.prototype.schoolBoards = function () {
        var _this = this;
        this.boards = [];
        this.isSchoolBoard = true;
        this.commonService.schoolAcademicBoards().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.boards.push({
                            label: element.name,
                            value: element.id
                        });
                        _this.schoolBoardsList = _this.boards;
                    });
                    if (_this.sectionForm.value.boardId) {
                        _this.onBoardSelect({ value: _this.sectionForm.value.boardId }, true);
                    }
                    else {
                        _this.setDefaultBoard();
                    }
                }
                else {
                    _this.isSchoolBoard = false;
                    _this.boardId = null;
                    _this.getClassesList(null);
                    _this.sectionForm.get('boardId').clearValidators();
                    _this.sectionForm.controls['boardId'].updateValueAndValidity();
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SectionAssignmentComponent.prototype.onBoardSelect = function (data, manual) {
        if (manual === void 0) { manual = false; }
        if (!manual) {
            this.tableData = false;
            this.sectionsInfo = false;
            this.loadData = Promise.resolve(false);
            this.classNames = [];
            this.boardId = data.value;
            this.classId = null;
            this.sectionForm.controls.classId.patchValue('');
        }
        this.getClassesList(this.boardId, manual);
    };
    // Get Classes to filter table data
    SectionAssignmentComponent.prototype.getClassesList = function (boardId, manual) {
        var _this = this;
        if (manual === void 0) { manual = false; }
        this.classNames = [];
        this.filterClasses = [];
        if (!manual) {
            this.classId = null;
        }
        this.gradeSetupService.schoolAcademicClasses(boardId).subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.filterClasses.push({
                            label: element.name,
                            value: element.id
                        });
                        _this.classNames = _this.filterClasses;
                    });
                }
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SCHOOL_BOARD_HAS_CLASSES, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    SectionAssignmentComponent.prototype.onClassSelect = function (data) {
        this.setViewModel();
        this.classId = data.value;
        this.tableData = true;
        this.loadData = Promise.resolve(false);
        this.sections(this.classId);
        this.cols = [
            { field: 'studentNames', header: 'Student Name', sort: true },
            { field: 'admissionNumbers', header: 'Admission Number', sort: true },
            { field: 'classNames', header: 'Class', sort: true },
            { field: 'sectionNames', header: 'Section', sort: true },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentsSectionSView,
            tablename: 'Section Assigned Students',
            componentName: this.currentComponent,
            isMultiDeleteRequired: false
        };
        this.studentsData(this.studentsSectionSView);
    };
    // on selection of class
    SectionAssignmentComponent.prototype.sections = function (classId) {
        var _this = this;
        this.sectionNames = [];
        this.gradeSetupService.schoolAcademicClassSections(this.boardId, classId).subscribe(function (response) {
            if (response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.sectionNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // Get all Students
    SectionAssignmentComponent.prototype.studentsData = function (studentsSectionSView, onFilter) {
        var _this = this;
        if (onFilter === void 0) { onFilter = false; }
        this.studentsSectionSView = studentsSectionSView;
        Object.assign(this.studentsSectionSView, {
            classId: this.classId,
            boardId: this.boardId
        });
        this.setModelDataTableComponent(this.currentComponent, this.studentsSectionSView);
        this.studentsSectionService.studentData(studentsSectionSView.sortBy, this.classId, this.boardId, studentsSectionSView.classIds, this.studentsSectionSView.sectionIds, this.studentsSectionSView.studentNames, this.studentsSectionSView.admissionNumbers, this.studentsSectionSView.sortOrder, studentsSectionSView.pageNumber, studentsSectionSView.pageSize).subscribe(function (res) { return _this.studentsDetails(res, onFilter); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Binding Data To Table
    SectionAssignmentComponent.prototype.studentsDetails = function (data, onFilter) {
        this.loadData = Promise.resolve(true);
        this.custRowsPerPageOptions = [];
        if (data.studentDataView == null) {
            this.rows = [];
            if (!onFilter) {
                this.sectionsInfo = false;
            }
        }
        else {
            this.rows = data.studentDataView.list;
            this.totalItems = data.studentDataView.totalItems;
            this.sectionsInfo = true;
            this.sectionsDetails = data.sectionsCountView;
            this.assignedStudents = data.totalAssignedCount;
            this.notAssignedStudents = data.notAssignedStudentsCount;
            this.totalstudentsCount = data.totalStudentsCount;
        }
        if (data.studentDataView) {
            this.studentsSectionSView.pageNumber = data.studentDataView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.studentsSectionSView,
            rows: this.rows,
            tablename: 'Section Assigned Students',
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isSelectRowRequired: true,
            isMultiDeleteRequired: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Section Assignment'
                }
            },
        };
    };
    SectionAssignmentComponent.prototype.selectedRows = function (data) {
        var _this = this;
        if (data.length === 0) {
            this.sectionDropForm.reset();
        }
        this.studentIds = [];
        data.forEach(function (element) {
            _this.studentIds.push(element.id);
        });
    };
    SectionAssignmentComponent.prototype.onSectionSelect = function (data) {
        this.sectiionValidate = false;
        this.sectionId = data.value;
    };
    SectionAssignmentComponent.prototype.sectionAssign = function (data) {
        var _this = this;
        if (this.sectionDropForm.valid) {
            this.studentSectionAssignView.sectionId = data.sectionId;
            this.studentSectionAssignView.classId = this.classId;
            this.studentSectionAssignView.schoolBoardId = this.boardId;
            this.studentSectionAssignView.ids = this.studentIds;
            this.studentsSectionService.studentsSectionAssignment(this.studentSectionAssignView).subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.sectiionValidate = true;
        }
    };
    // updateStudent Response
    SectionAssignmentComponent.prototype.updateResponse = function (response) {
        this.sectionId = null;
        this.sectionDropForm.reset();
        if (response.statusCode === this.HttpStatus.OK) {
            this.studentsData(this.studentsSectionSView);
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    SectionAssignmentComponent.prototype.reset = function () {
        this.tableData = false;
        this._sectionForm.resetForm();
        this.loadData = Promise.resolve(false);
        this.sectionsInfo = false;
        this.classNames = [];
        this.setModelDataTableComponent(this.currentComponent, null);
    };
    SectionAssignmentComponent.prototype.onSelectClassBoard = function (data) {
        this.formData = data;
    };
    SectionAssignmentComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('sectionForm', 'boardId', this.schoolBoardsList[0].value);
        this.onBoardSelect(this.schoolBoardsList[0]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SectionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SectionAssignmentComponent.prototype, "_sectionForm", void 0);
    SectionAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-assignment',
            template: __webpack_require__(/*! ./section-assignment.component.html */ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_11__["fuseAnimations"],
            providers: [app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"]],
            styles: [__webpack_require__(/*! ./section-assignment.component.scss */ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__["GradeSetupService"],
            app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"],
            app_service_student_information_system_students_section_service__WEBPACK_IMPORTED_MODULE_9__["StudentSectionsService"],
            app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_10__["ClassSectionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], SectionAssignmentComponent);
    return SectionAssignmentComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-24\">\n  <div class=\"p-12 font-size-18 text-uppercase\" translate>Student Course Selections</div>\n  <form [formGroup]=\"studentCourseSelectionForm\" (ngSubmit)=\"search(studentCourseSelectionForm)\"\n    #studentCourseSearchForm=\"ngForm\">\n    <div class=\"mat-elevation-z3 radius-t-20 simple-table-container\" fxLayout=\"column\">\n      <div fxFlexFill fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" fxLayout=\"column\" class=\"p-20 mt-16\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select required formControlName=\"classId\"\n            (selectionChange)=\"getSections($event.value)\">\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"class.innerText\"\n              [validationControl]=\"studentCourseSelectionForm.controls.classId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"pr-sm-20\">\n          <mat-label translate #section>Sections</mat-label>\n          <mat-select required formControlName=\"sectionId\"\n            (selectionChange)=\"getCourseCategories('','')\" [compareWith]=\"compareWithFunc\">\n            <mat-option *ngFor=\"let section of sections\" [value]=\"section.value\">\n              {{ section.label }} <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span></mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"section.innerText\"\n              [validationControl]=\"studentCourseSelectionForm.controls.sectionId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"pr-sm-20\">\n          <mat-label translate #courseCategory translate>Course Category</mat-label>\n          <mat-select formControlName=\"courseCategoryId\">\n            <mat-option *ngIf=\"courseCategoriesList?.length\"></mat-option>\n            <mat-option *ngFor=\"let courseCategory of courseCategoriesList\" [value]=\"courseCategory.id\">\n              {{ courseCategory.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"courseCategory.innerText\"\n              [validationControl]=\"studentCourseSelectionForm.controls.courseCategoryId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxFlexFill fxLayout=\"column\" fxFlex.gt-xs=\"55\" fxFlex=\"100\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-24\">\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"text-uppercase\" (click)=\"reset()\">{{'Reset' | translate}}</button>\n            <button type=\"submit\" mat-raised-button class=\"text-uppercase mx-12\" color=\"accent\">{{'Search' | translate}}</button>\n            <button mat-button type='button' (click)=\"getHelpText('Student Course Selections')\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </form>\n</div>\n\n<app-custom-card *ngIf=\"!isValid\" [title]=\"'Students'\" [inputMessage]=\"'Please enter the required search criteria to perform the search'\">\n</app-custom-card>\n\n<app-table *ngIf=\"isValid\" [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' [massActionTemplateRef]=\"massActions\"\n  (getTableData)='stdentCourseCategoryTableData($event)' (selectedRows)='selectedRows($event)'></app-table>\n\n<ng-template #massActions>\n  <button type=\"button\" mat-raised-button class=\"text-uppercase mx-8\" color=\"accent\"\n    (click)=\"onAssignMultipleStudents()\">{{'Assign Course Selection' | translate}}</button>\n</ng-template>\n\n<!--clone-->\n<ng-template #studentCoursesForm>\n  <form fxLayout=\"column\">\n    <div class=\"font-size-18 pb-16\"><span translate>Select Course Category and Course</span></div>\n    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxLayout=\"column\">\n      <mat-label translate #courseCategory translate>Course Category</mat-label>\n      <mat-select [(ngModel)]=\"studentCourseSelectionView.courseCategoryId\"\n        name=\"courseCategoryId\" (selectionChange)=\"onCourseCategoryChange($event.value)\" [disabled]=\"!isMultiSelect\" required>\n        <mat-option *ngFor=\"let courseCategory of courseCategoriesList\" [value]=\"courseCategory.id\">\n          {{ courseCategory.name }}</mat-option>\n      </mat-select>\n      <mat-error>\n      </mat-error>\n    </mat-form-field>\n    <div *ngIf=\"courseCategoryData.courses?.length\" class=\"pb-8\">\n    <span *ngIf=\"courseCategoryData.requiredCount!=null &&courseCategoryData.requiredCount!=0\">\n      <span class=\"font-size-12\" translate>Required Count</span>: {{courseCategoryData.requiredCount}}\n    </span>\n\n      <span *ngIf=\"courseCategoryData.optionalCount!=null&&courseCategoryData.optionalCount!=0\"><span\n          class=\"font-size-12 mx-12\" translate>Optional Count</span>: {{courseCategoryData.optionalCount}}</span>\n      <span *ngIf=\"courseCategoryData.areAllOptional =='Yes'\">\n        <span class=\"font-size-12\" translate>Are All Optional</span>: {{courseCategoryData.areAllOptional}}\n      </span>\n    </div>\n    <mat-list fxLayout.gt-sm=\"row wrap\" fxFlex=\"100\" class=\"pt-0 confirm-table border mh-300\"\n      *ngIf=\"courseCategoryData.courses?.length\">\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"30\" class=\"stickyx\"><strong translate>Select</strong></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"70\" class=\"stickyx\"><strong translate>Course Name</strong></mat-list-item>\n      <div *ngFor=\"let course of courseCategoryData.courses\" fxFlex=\"100\" class=\"border-top\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n          <mat-checkbox value=\"course.courseId\" [checked]=\"course.isChecked\"\n            (change)=\"course.isChecked = !course.isChecked;onCheckBoxChange()\"></mat-checkbox>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"70\"> {{course.name}}</mat-list-item>\n      </div>\n    </mat-list>\n    <mat-error class=\"pt-8\">{{errorMessage | translate}}</mat-error>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pt-20\">\n      <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button type=\"button\" mat-raised-button class=\"mr-16 text-uppercase\" type=\"button\" (click)=\"closeAssignCoursesDialog()\">{{'Cancel' | translate}}</button>\n          <button type=\"submit\" mat-raised-button color=\"accent\" class=\"text-uppercase\" (click)=\"assignStudentCourses()\" translate>{{'Submit' | translate}}</button>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mh-300.confirm-table {\n  overflow-y: auto;\n  max-height: 300px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtY291cnNlLXNlbGVjdGlvbnMvc3R1ZGVudC1jb3Vyc2Utc2VsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFnQjtFQUNoQiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtY291cnNlLXNlbGVjdGlvbnMvc3R1ZGVudC1jb3Vyc2Utc2VsZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWgtMzAwLmNvbmZpcm0tdGFibGV7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: StudentCourseSelectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseSelectionsComponent", function() { return StudentCourseSelectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_student_information_system_student_course_selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/student-information-system/student-course-selection.service */ "./src/app/service/student-information-system/student-course-selection.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");











var StudentCourseSelectionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentCourseSelectionsComponent, _super);
    function StudentCourseSelectionsComponent(gradeSetupService, commonService, dialog, classTimetableService, studentCourseSelectionService, snackBar) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.classTimetableService = classTimetableService;
        _this.studentCourseSelectionService = studentCourseSelectionService;
        _this.snackBar = snackBar;
        // dropdown array declarations
        _this.classes = [];
        _this.sections = [];
        _this.courseCategories = [];
        _this.tableData = [];
        _this.currentComponentName = 'StudentCourseSelectionComponet';
        _this.custRowsPerPageOptions = [];
        _this.filterRowData = [];
        _this.studentId = [];
        _this.studentIds = [];
        _this.courseIds = [];
        _this.courses = [];
        _this.isSingleClick = false;
        _this.compareWithFunc = function (a, b) { return JSON.stringify(a) === JSON.stringify(b); };
        _this.initializeStudentCourseModel();
        _this.isDataValid = true;
        return _this;
    }
    StudentCourseSelectionsComponent.prototype.initializeStudentCourseModel = function () {
        this.studentCourseFilterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE_500,
            classId: 0,
            courseCategoryId: 0,
            sectionId: 0,
            studentNames: [],
            admissionNumbers: [],
            rollNumbers: [],
            courseIds: [],
            schoolBoardId: 0
        };
    };
    StudentCourseSelectionsComponent.prototype.initializeTabSettings = function () {
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentCourseFilterViewModel,
            tablename: 'Students',
            componentName: this.currentComponentName,
            isPaginationRequired: false,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            isMultiDeleteRequired: false,
        };
    };
    StudentCourseSelectionsComponent.prototype.ngOnInit = function () {
        this.getClasses();
        this.studentCourseSelectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            courseCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.initializeModel();
        this.cols = [
            { field: 'studentName', header: 'Student Name' },
            { field: 'admissionNumber', header: 'Admission Number' },
            { field: 'rollNumber', header: 'Roll Number' },
            { field: 'courseCategory', header: 'Course Category' },
            { field: 'course', header: 'Course' },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.studentCourseFilterViewModel = modelTableComponent;
            this.studentCourseSelectionForm.patchValue(modelTableComponent);
            this.studentCourseSelectionForm.get('sectionId').patchValue({
                sectionId: modelTableComponent.sectionId,
                boardId: modelTableComponent.schoolBoardId
            });
            this.getSections(this.studentCourseSelectionForm.value.classId, true);
            this.getCourseCategories('', '', true);
            this.search(this.studentCourseSelectionForm);
        }
        // / initializing table settings /
        this.initializeTabSettings();
    };
    // model initialization
    StudentCourseSelectionsComponent.prototype.initializeModel = function () {
        this.studentCourseSelectionView = {
            courseCategoryId: 0,
            courseIds: [],
            schoolAcademicSessionStudentIds: [],
            classId: 0,
        };
        this.courseCategoryData = {
            courses: []
        };
    };
    // get students and courses data
    StudentCourseSelectionsComponent.prototype.loadStudentCourseCategoryData = function () {
        var _this = this;
        this.setModelDataTableComponent(this.currentComponentName, this.studentCourseFilterViewModel);
        this.studentCourseSelectionService.studentCourseSelectionStudentCoursecategoriesGet(this.studentCourseFilterViewModel.sortBy, this.studentCourseFilterViewModel.sortOrder, this.studentCourseFilterViewModel.classId, this.studentCourseFilterViewModel.sectionId, this.studentCourseFilterViewModel.courseCategoryId, this.studentCourseFilterViewModel.studentNames, this.studentCourseFilterViewModel.admissionNumbers, this.studentCourseFilterViewModel.rollNumbers, this.studentCourseFilterViewModel.courseIds, this.studentCourseFilterViewModel.pageNumber, this.studentCourseFilterViewModel.pageSize, this.studentCourseFilterViewModel.schoolBoardId)
            .subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on row actions
    StudentCourseSelectionsComponent.prototype.rowActions = function (response) {
        var filteredCourses = this.rows.reduce(function (ac, cu) { return (cu.id === response.clickedRow.id && ac.push(cu.course), ac); }, []);
        this.courseCategoryData = {};
        this.getCourseCategories(response.clickedRow.id, response.clickedRow.courseCategoryId);
        this.courseCategoryData.courses.map(function (e) {
            if (filteredCourses.includes(e.name)) {
                e.isChecked = true;
            }
            else {
                e.isChecked = false;
            }
        });
        if (this.courseCategoryData.courses && this.courseCategoryData.courses.length) {
            this.courseCategoryData.courses.sort(function (a, b) { return b.isChecked - a.isChecked; });
        }
        this.openPopUp();
        this.studentCourseSelectionView.courseCategoryId = response.clickedRow.courseCategoryId;
        this.studentIds = [response.clickedRow.id];
    };
    // process the response for table
    StudentCourseSelectionsComponent.prototype.response = function (data) {
        var _this = this;
        if (data.studentCourseListViewModel) {
            this.rows = data.studentCourseListViewModel.list;
            this.totalItems = data.studentCourseListViewModel.totalItems;
        }
        else {
            this.rows = [];
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.studentCourseFilterViewModel,
            rows: this.rows,
            tablename: 'Students',
            componentName: this.currentComponentName,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            isMultiDeleteRequired: false,
            rowGroupingColumns: ['admissionNumber', 'rollNumber', 'studentName', 'courseCategory', 'course', 'select'],
        };
        this.filterRowData = this.rows;
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        if (value.courseCategory === element.courseCategory && value.studentName === element.studentName && value.admissionNumber === element.admissionNumber &&
                            value.rollNumber === element.rollNumber) {
                            return value;
                        }
                    });
                    if (foundIndex === -1) {
                        x.push(element);
                    }
                });
            }
        });
        this.filterRowData = x;
        if (this.filterRowData.length > 0) {
            // apply edit and delete
            this.filterRowData.forEach(function (element) {
                _this.rows.forEach(function (element1) {
                    if (element.courseCategoryId === element1.courseCategoryId && element.courseId === element1.courseId && element.admissionNumber === element1.admissionNumber &&
                        element.rollNumber === element1.rollNumber) {
                        element1.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].ASSIGN_COURSE_SELECTION,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].APPROVE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].ASSIGN_COURSE_SELECTION
                            }
                        ];
                    }
                });
            });
        }
    };
    // get table data
    StudentCourseSelectionsComponent.prototype.stdentCourseCategoryTableData = function (_event) {
        this.studentCourseFilterViewModel = _event;
        this.studentCourseSelectionForm.patchValue(this.studentCourseFilterViewModel);
        this.studentCourseFilterViewModel.classId = this.studentCourseSelectionForm.value.classId;
        this.studentCourseFilterViewModel.sectionId = this.studentCourseSelectionForm.value.sectionId.sectionId;
        this.studentCourseFilterViewModel.schoolBoardId = this.studentCourseSelectionForm.value.sectionId.boardId;
        this.studentCourseFilterViewModel.courseCategoryId = this.studentCourseSelectionForm.value.courseCategoryId;
        this.loadStudentCourseCategoryData();
    };
    // get classes of school academic session
    StudentCourseSelectionsComponent.prototype.getClasses = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.classes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // get sections of selected class
    StudentCourseSelectionsComponent.prototype.getSections = function (classId, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        this.sections = [];
        if (!onManualChange) {
            this.courseCategoriesList = [];
            this.studentCourseSelectionForm.controls['sectionId'].setValue(null);
            this.studentCourseSelectionForm.controls['courseCategoryId'].setValue(null);
        }
        this.classTimetableService.classTimetableSectionsGet(classId).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.sections.push({ value: { sectionId: x.sectionId, boardId: x.boardId }, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // get course categories of given class, section and student
    StudentCourseSelectionsComponent.prototype.getCourseCategories = function (schoolAcademicStudentId, courseCategoryId, isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        if (courseCategoryId) {
            this.onCourseCategoryChange(courseCategoryId);
        }
        else {
            if (!isManualChange) {
                this.studentCourseSelectionForm.controls['courseCategoryId'].setValue(null);
            }
            this.courseCategoriesList = [];
            this.studentCourseSelectionService.studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicStudentId, this.studentCourseSelectionForm.
                controls['sectionId'].value.boardId, this.studentCourseSelectionForm.controls['classId'].value).subscribe(function (response) {
                if (response.courseCategoryCourses != null) {
                    if (response.courseCategoryCourses.length) {
                        _this.courseCategoriesList = response.courseCategoryCourses;
                    }
                    else {
                        _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO_COURSE_CATEGORIES, true);
                    }
                    if (courseCategoryId) {
                        _this.onCourseCategoryChange(courseCategoryId);
                    }
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // get courseCategory on change
    StudentCourseSelectionsComponent.prototype.onCourseCategoryChange = function (courseCategoryId) {
        if (courseCategoryId) {
            this.errorMessage = '';
            this.courseCategoryData = this.courseCategoriesList.filter(function (x) { return x.id === courseCategoryId; })[0];
            this.courseCategoryData.courses.sort(function (a, b) { return b.isChecked - a.isChecked; });
        }
    };
    // search students based on filter applied
    StudentCourseSelectionsComponent.prototype.search = function (data) {
        if (data.status === 'INVALID') {
            return;
        }
        this.isValid = true;
        this.studentCourseFilterViewModel.classId = data.value.classId;
        this.studentCourseFilterViewModel.sectionId = data.value.sectionId.sectionId;
        this.studentCourseFilterViewModel.courseCategoryId = data.value.courseCategoryId;
        this.studentCourseFilterViewModel.schoolBoardId = data.value.sectionId.boardId;
        this.studentCourseFilterViewModel.pageNumber = 1;
        if (this.studentCourseSelectionForm.valid) {
            this.loadStudentCourseCategoryData();
        }
    };
    // reset data
    StudentCourseSelectionsComponent.prototype.reset = function () {
        this.isValid = false;
        this.studentCourseSelectionForm.reset();
        this.studentCourseSearchForm.submitted = false;
        this.sections = [];
        this.courseCategoriesList = [];
        // this.setModelDataTableComponent(this.currentComponentName, null);
        this.clearStorageComponent(this.currentComponentName);
        this.initializeStudentCourseModel();
        this.initializeTabSettings();
    };
    // on select/unselect event to get selected id's
    StudentCourseSelectionsComponent.prototype.selectedRows = function (_event) {
        this.studentIds = Array.from(new Set(_event.map(function (item) { return item.id; })));
    };
    // assign courses for single/multiples students
    StudentCourseSelectionsComponent.prototype.assignStudentCourses = function () {
        var _this = this;
        if (this.studentCourseSelectionView.courseCategoryId) {
            this.onCheckBoxChange();
            if (this.isDataValid) {
                this.studentCourseSelectionView.schoolAcademicSessionStudentIds = this.studentIds;
                this.studentCourseSelectionView.classId = this.studentCourseSelectionForm.value.classId;
                this.studentCourseSelectionView.schoolBoardId = this.studentCourseSelectionForm.value.sectionId.boardId;
                this.studentCourseSelectionView.courseIds = this.courseCategoryData.courses.filter(function (e) { return e.isChecked; }).map(function (x) { return x.courseId; });
                this.isPopUpValid = true;
                if (!this.isSingleClick) {
                    this.isSingleClick = true;
                    this.studentCourseSelectionService.studentCourseSelectionAssignStudentCoursesPost(this.studentCourseSelectionView).subscribe(function (response) {
                        _this.openSnackBar(response.messages.ResultMessage);
                        _this.closeAssignCoursesDialog();
                        _this.loadStudentCourseCategoryData();
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                    setTimeout(function () {
                        _this.isSingleClick = false;
                    }, 1000);
                }
            }
        }
        else {
            this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].COURSE_CATEGORY_REQUIRED;
        }
    };
    // open popup
    StudentCourseSelectionsComponent.prototype.openPopUp = function () {
        this.errorMessage = '';
        this.studentCourseSelectionView = {};
        this.coustomDialog = this.dialog.open(this.customTemplate, {
            disableClose: true,
            width: '400px',
        });
    };
    // on multiple assigns
    StudentCourseSelectionsComponent.prototype.onAssignMultipleStudents = function () {
        var _this = this;
        var dialogValue = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
            disableClose: true,
            width: '400px',
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].WARNING_ON_MULTIPLE_STUDENT_COURSE_ASSIGN), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].No, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].Yes },
        });
        dialogValue.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].Yes) {
                _this.initializeModel();
                _this.getCourseCategories('', _this.studentCourseSelectionForm.value.courseCategoryId);
                _this.isMultiSelect = true;
                _this.openPopUp();
                if (_this.studentCourseSelectionForm.value.courseCategoryId) {
                    _this.studentCourseSelectionView.courseCategoryId =
                        _this.studentCourseSelectionForm.value.courseCategoryId;
                }
            }
        });
    };
    // close dialogue
    StudentCourseSelectionsComponent.prototype.closeAssignCoursesDialog = function () {
        this.coustomDialog.close();
        this.isMultiSelect = false;
    };
    StudentCourseSelectionsComponent.prototype.onCheckBoxChange = function () {
        var _this = this;
        this.errorMessage = '';
        var courseCategory = this.courseCategoriesList.filter(function (x) { return x.id === _this.studentCourseSelectionView.courseCategoryId; })[0];
        var selectedCoursesCount = this.courseCategoryData.courses.filter(function (x) { return x.isChecked; }).length;
        // (courseCategory.optionalCount !== 0 && courseCategory.areAllOptional === AppSettings.NO && (selectedCoursesCount === 0)) ? 
        // (this.errorMessage = AppSettings.ATLEAST_ONE_SELECTION_MUST_BE_MADE,
        //    this.isDataValid = false) : 
        (courseCategory.optionalCount !== 0 && (selectedCoursesCount > courseCategory.optionalCount)) ?
            (this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SELECTIONS_EXCEEDED, this.isDataValid = false) :
            (courseCategory.requiredCount !== 0 && courseCategory.requiredCount !== selectedCoursesCount) ?
                (this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SELECTIONS_NOT_MATCHED_REQ_COUNT, this.isDataValid = false) : this.isDataValid = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentCoursesForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], StudentCourseSelectionsComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentCourseSearchForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentCourseSelectionsComponent.prototype, "studentCourseSearchForm", void 0);
    StudentCourseSelectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-course-selections',
            template: __webpack_require__(/*! ./student-course-selections.component.html */ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.html"),
            styles: [__webpack_require__(/*! ./student-course-selections.component.scss */ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_2__["ClassTimetableService"], app_service_student_information_system_student_course_selection_service__WEBPACK_IMPORTED_MODULE_8__["StudentCourseSelectionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], StudentCourseSelectionsComponent);
    return StudentCourseSelectionsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-database/student-database.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-database/student-database.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-24\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Search Students</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchStudent(searchForm.value)\">\n    <!-- <fieldset  class=\"border p-20 mx-12\">\n      <legend>Search by student name</legend>\n     \n    </fieldset> -->\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"p-24\"> \n      <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n        <div class=\"serch-db border px-16\">\n          <input #studentName matInput placeholder=\"{{ 'Search Students' | translate}}\" onkeydown=\"return(event.keyCode!=13);\" formControlName=\"studentNames\"\n            aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n          <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\"\n            (optionSelected)='getSelectedStudent($event.option.value)'>\n            <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n              {{option.studentName}}\n              <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n            </mat-option>\n          </mat-autocomplete>\n        </div>\n      </div>\n      <button mat-button type='button' (click)=\"getHelpText('Student Database')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"after position-relative\">\n     <small class=\"position-absolute custom-white\">(OR)</small> \n    </div>\n      <div class=\"p-20\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"22\" class=\"pr-sm-20\">\n            <mat-label translate #parentName>Parent Name</mat-label>\n            <input matInput formControlName=\"parentNames\" (keyup)=\"preventSpace($event,'searchForm','parentNames')\" (blur)=\"trimTextBoxSpaces('searchForm','parentNames')\">\n          </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n            class=\"pr-sm-20\">\n            <mat-label translate #class>Academic Session</mat-label>\n            <mat-select formControlName=\"academicSessions\">\n              <mat-option></mat-option>\n              <mat-option *ngFor=\"let academicSession of academicSessions\" [value]=\"academicSession.value\">\n                {{ academicSession.label }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n            class=\"pr-sm-20\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select formControlName=\"classIds\">\n              <mat-option></mat-option>\n              <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n                {{ class.label }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\">\n            <mat-label translate #studentStatus>Status</mat-label>\n            <mat-select formControlName=\"statusIds\">\n              <mat-option></mat-option>\n              <mat-option *ngFor=\"let studentStatus of studentStatuses\" [value]=\"studentStatus.value\">\n                {{ studentStatus.label }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pr-sm-20\">\n            <mat-label translate #admissionNumber>Admission Number</mat-label>\n            <input matInput formControlName=\"admissionNumbers\" (keyup)=\"preventSpace($event,'searchForm','admissionNumbers')\"\n              (blur)=\"trimTextBoxSpaces('searchForm','admissionNumbers')\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <input matInput formControlName=\"dateOfBirth\" [satDatepicker]=\"picker\" placeholder=\"Choose a date\">\n            <sat-datepicker #picker [rangeMode]=\"true\"> </sat-datepicker>\n            <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n            <mat-label translate #dob>Date of Birth</mat-label>\n            <mat-error >\n              <app-validation [labelName]='dob.innerText'\n                [validationControl]=\"searchForm.controls.dateOfBirth\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n          <button type=\"button\" mat-raised-button\n            [routerLink]=\"['/academics/student-information-system/student-database/add-edit-student-admission']\"\n            routerLinkActive=\"router-link-active\" color=\"accent\" class=\"text-uppercase\">{{'New Student' | translate}}\n          </button>\n          <button mat-raised-button type=\"reset\" class=\"text-uppercase mx-12\" (click)=\"onClear()\">\n            {{'Reset' | translate}}\n          </button>\n          <button mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase\">\n            {{'Search' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<app-table id=\"student-database-table\" *ngIf=\"!showCustomCard\" [settings]='tableSettings' (getTableData)='tableData($event)'\n  (rowBasedAction)='actions($event)' (openAddForm)='openForm()' (resetFilter)='onClear()'>\n</app-table>\n<app-custom-card *ngIf=\"showCustomCard\" [title]=customCardDetails.title [inputMessage]=customCardDetails.message>\n</app-custom-card>\n"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-database/student-database.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-database/student-database.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serch-db {\n  width: 100%;\n  max-width: 640px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 28px;\n  overflow: hidden; }\n\n.after::after {\n  content: \"\";\n  border-bottom: 1px solid #e0e0e0;\n  width: 100%;\n  overflow: hidden;\n  z-index: 0; }\n\n.after small {\n  z-index: 99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtZGF0YWJhc2Uvc3R1ZGVudC1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRVEsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFObEI7RUFTUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjYWRlbWljcy9zdHVkZW50LWluZm9ybWF0aW9uLXN5c3RlbS9zdHVkZW50LWRhdGFiYXNlL3N0dWRlbnQtZGF0YWJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyY2gtZGJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgXG59XG4uYWZ0ZXJ7ICAgXG4gICAgJjo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgc21hbGx7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-database/student-database.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-database/student-database.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StudentDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDatabaseComponent", function() { return StudentDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-date-adaptor */ "./src/app/shared/custom-date-adaptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var _service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
















var StudentDatabaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentDatabaseComponent, _super);
    function StudentDatabaseComponent(commonService, studentDbService, router, classService, statusService, cd, academicSessionService, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.studentDbService = studentDbService;
        _this.router = router;
        _this.classService = classService;
        _this.statusService = statusService;
        _this.cd = cd;
        _this.academicSessionService = academicSessionService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentDatabaseComponent';
        _this.classes = [];
        _this.studentStatuses = [];
        _this.filterdStudents = [];
        _this.customCardDetails = { title: 'Students', message: 'Search Student' };
        _this.showCustomCard = true;
        _this.academicSessions = [];
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        _this.getRequiredDropdownOptions();
        return _this;
    }
    StudentDatabaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        this.initializeForm();
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
            // this.searchForm.patchValue(this.filterViewModel);
            if (modelTableComponent.studentNames && modelTableComponent.studentNames.length) {
                this.searchForm.controls['studentNames'].patchValue(modelTableComponent.studentNames[0], { emitEvent: false });
            }
            this.getAllFilteredStudents();
        }
        this.searchForm.controls['studentNames'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.studentDbService.studentNames(name).subscribe(function (res) {
                    _this.filterdStudents = (res.students.length > 0) ? res.students : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
    };
    StudentDatabaseComponent.prototype.getRequiredDropdownOptions = function () {
        var _this = this;
        this.classService.getFilteredClasses(null, null, null, null, 0, name, null, 1, 1000).subscribe(function (res) {
            _this.classes = res.pagedClassViewModels.list.map(function (obj) { return ({ value: obj.id, label: obj.name }); });
        });
        this.statusService.getAllStatuses('STU').subscribe(function (res) {
            _this.studentStatuses = res.statusViewModel.map(function (obj) { return ({ value: obj.id, label: obj.name }); });
        });
        this.getAcademicSession();
    };
    StudentDatabaseComponent.prototype.initializeForm = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            parentNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            classIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            statusIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            admissionNumbers: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            academicSessions: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
    };
    StudentDatabaseComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            classIds: [],
            admissionNumbers: [],
            studentNames: [],
            studentId: '',
            parentNames: [],
            statusIds: [],
            academicSessions: []
        };
    };
    StudentDatabaseComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'academicSession', header: 'Academic Session', sort: true },
            { field: 'fatherName', header: 'Father Name', sort: true },
            { field: 'motherName', header: 'Mother Name', sort: true },
            { field: 'guardianName', header: 'Guardian Name', sort: true },
            { field: 'class', header: 'Current Class', sort: true },
            { field: 'admissionNumber', header: 'Admission Number', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'dateOfBirth', header: 'Date Of Birth', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    StudentDatabaseComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Students',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            filtersList: [],
            headerOperations: {
                addingForm: {
                    required: true
                }
            }
        };
    };
    StudentDatabaseComponent.prototype.tableData = function (_event) {
        Object.assign(_event, { studentId: this.filterViewModel.studentId });
        this.filterViewModel = _event;
        this.updateFilterViewModel();
        this.getAllFilteredStudents();
    };
    StudentDatabaseComponent.prototype.getAllFilteredStudents = function () {
        var _this = this;
        if (this.searchForm === undefined) {
            return;
        }
        // this.updateFilterViewModel();
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.studentDbService.filteredStudents(this.filterViewModel.studentId, this.filterViewModel.studentNames, this.filterViewModel.academicSessions, this.filterViewModel.parentNames, this.filterViewModel.admissionNumbers, this.filterViewModel.classIds, this.filterViewModel.statusIds, this.filterViewModel.dateOfBirthBegin, this.filterViewModel.dateOfBirthEnd, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
            subscribe(function (res) {
            _this.bindStudentResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentDatabaseComponent.prototype.updateFilterViewModel = function () {
        var data = this.searchForm.value;
        if (data.parentNames != null) {
            this.filterViewModel.parentNames = [data.parentNames];
        }
        else {
            this.filterViewModel.parentNames = [];
        }
        if (data.studentNames != null) {
            this.filterViewModel.studentNames = typeof (data.studentNames) === 'object' ? [data.studentNames.studentName] : [data.studentNames];
        }
        else {
            this.filterViewModel.studentNames = [];
            this.filterViewModel.studentId = '';
        }
        this.filterViewModel.classIds = data.classIds;
        this.filterViewModel.statusIds = data.statusIds;
        this.filterViewModel.academicSessions = data.academicSessions;
        if (data.admissionNumbers != null) {
            this.filterViewModel.admissionNumbers = [data.admissionNumbers];
        }
        else {
            this.filterViewModel.admissionNumbers = [];
        }
        if (data.dateOfBirth != null) {
            this.filterViewModel.dateOfBirthBegin = data.dateOfBirth.begin.format(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_DATE_PATTERN);
            this.filterViewModel.dateOfBirthEnd = data.dateOfBirth.end.format(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_DATE_PATTERN);
        }
        else {
            this.filterViewModel.dateOfBirthBegin = this.filterViewModel.dateOfBirthEnd = null;
        }
    };
    StudentDatabaseComponent.prototype.bindStudentResult = function (data) {
        var _this = this;
        this.showCustomCard = false;
        if (data !== null && data.filters !== null) {
            data.filters.forEach(function (filter) {
                switch (filter.name) {
                    case 'classIds':
                        _this.classes = filter.options;
                        break;
                    case 'statusIds':
                        _this.studentStatuses = filter.options;
                        break;
                    case 'academicSessions':
                        _this.academicSessions = filter.options;
                        break;
                }
                if (filter.options && filter.options.find(function (option) { return option.isSelected === true; }) !== undefined) {
                    _this.searchForm.controls[filter.name].setValue(filter.options.find(function (option) { return option.isSelected === true; }).value);
                }
                else if (_this.searchForm.controls[filter.name] !== undefined && filter.value) {
                    if (filter.name === 'studentNames') {
                        _this.studentNameAutoInput.nativeElement.value = filter.value;
                    }
                    else if (filter.name === 'dateOfBirth' && _this.filterViewModel.dateOfBirthBegin) {
                        var dateRangeObj = { begin: new Date(_this.filterViewModel.dateOfBirthBegin), end: new Date(_this.filterViewModel.dateOfBirthEnd) };
                        _this.searchForm.controls[filter.name].setValue(dateRangeObj);
                    }
                    else {
                        _this.searchForm.controls[filter.name].setValue(filter.value);
                    }
                }
            });
        }
        if (!data.pagedStudentViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            data.pagedStudentViewModels.list.forEach(function (element) {
                element.dateOfBirth = element.dateOfBirth != null ? _this.commonService.customDateFormat(element.dateOfBirth.toString(), _this.getSchoolDateFormat()).date : null;
            });
            this.rows = data.pagedStudentViewModels.list;
            this.totalRowsCount = data.pagedStudentViewModels.totalItems;
            this.pageCnt = data.pagedStudentViewModels.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW
                    }
                ];
            });
        }
        if (data.pagedStudentViewModels) {
            this.filterViewModel.pageNumber = data.pagedStudentViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Student Database',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: [],
            hideHeader: true
        };
        setTimeout(function () {
            _this.scrollIntoViewById('student-database-table');
        });
        this.cd.detectChanges();
    };
    // Actions Performing on the row
    StudentDatabaseComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"]._Student_Details + '/' + operationData.clickedRow.id]);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"]._Add_Edit_Student + '/' + operationData.clickedRow.id]);
        }
    };
    StudentDatabaseComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    StudentDatabaseComponent.prototype.getSelectedStudent = function (value) {
        if (value.studentName) {
            this.initializeFilterView();
            this.filterViewModel.studentNames = [value.studentName];
            this.filterViewModel.studentId = value.id;
            this.getAllFilteredStudents();
            if (value) {
                this.searchForm.controls['studentNames'].setValue(value);
            }
        }
    };
    StudentDatabaseComponent.prototype.searchStudent = function (data) {
        if (!this.searchForm.valid) {
            return;
        }
        this.searchForm.controls['studentNames'].patchValue(null);
        this.updateFilterViewModel();
        this.getAllFilteredStudents();
    };
    StudentDatabaseComponent.prototype.openForm = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"]._Add_Edit_Student]);
    };
    StudentDatabaseComponent.prototype.onClear = function () {
        this.searchForm.reset();
        this.initializeFilterView();
        this.filterViewModel.reset = true;
        this.initializeTableSettings();
        // this.setModelDataTableComponent(this.currentComponent, null);
        this.clearStorageComponent(this.currentComponent);
        this.showCustomCard = true;
    };
    StudentDatabaseComponent.prototype.getAcademicSession = function () {
        var _this = this;
        // const currentSchool = JSON.parse(localStorage.getItem('_s'));
        this.academicSessionService.academicSessionAllAcademicSessionsBySchoolIdGet()
            .subscribe(function (response) {
            if (response.academicSessionView.length) {
                var setAcdademicSessionId_1 = null;
                var newAcademicSessions_1 = [];
                var completedAcademicSessions_1 = [];
                _this.academicSessions = [];
                response.academicSessionView.forEach(function (element) {
                    if (element.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACADEMICSESSION_ACTIVE) {
                        setAcdademicSessionId_1 = element.id;
                    }
                    else if (element.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACADEMICSESSION_NEW) {
                        newAcademicSessions_1.push(element);
                    }
                    else {
                        completedAcademicSessions_1.push(element);
                    }
                    _this.academicSessions.push({
                        value: element.id, label: element.displayName
                    });
                });
                setAcdademicSessionId_1 = setAcdademicSessionId_1 ?
                    setAcdademicSessionId_1 : newAcademicSessions_1.length ? newAcademicSessions_1[0].id : completedAcademicSessions_1.length ? completedAcademicSessions_1[0].id : null;
                if (!_this.filterViewModel.reset) {
                    _this.searchForm.controls['academicSessions'].setValue(setAcdademicSessionId_1);
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"])
    ], StudentDatabaseComponent.prototype, "_auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentDatabaseComponent.prototype, "studentNameAutoInput", void 0);
    StudentDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-database',
            template: __webpack_require__(/*! ./student-database.component.html */ "./src/app/modules/academics/student-information-system/student-database/student-database.component.html"),
            providers: [app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__["StudentDBService"],
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_8__["CustomDateAdapter"], deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"]] },
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["AF_DATE_FORMATS"] }],
            styles: [__webpack_require__(/*! ./student-database.component.scss */ "./src/app/modules/academics/student-information-system/student-database/student-database.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_4__["StudentDBService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_12__["ClassesConfigService"],
            _service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_13__["StatusService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_academic_service__WEBPACK_IMPORTED_MODULE_15__["AcademicSessionService"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]])
    ], StudentDatabaseComponent);
    return StudentDatabaseComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 pt-sm-24\">\n  <div class=\"ml-20 p-8 text-uppercase font-size-18\" translate>Search Student Facility Assignments</div>\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-4\">\n    <form [formGroup]=\"schoolFacilityForm\" #studentFacilityForm=\"ngForm\">\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"p-24\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"32\" fxFlex=\"100\">\n          <mat-label #facilityId translate>School Facility</mat-label>\n          <mat-select formControlName=\"facilityId\" required>\n            <mat-option *ngFor=\"let facility of facilityDropDown\" [value]=\"facility.value\">\n              {{facility.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"facilityId.innerText\"\n              [validationControl]=\"schoolFacilityForm.controls.facilityId\" [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"35\" fxFlex=\"100\"\n          class=\"px-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select placeholder=\"Class\" formControlName=\"classId\" (selectionChange)=\"classSections($event.value)\">\n            <mat-option *ngIf=\"classes?.length\"></mat-option>\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\">\n            <mat-option *ngIf=\"sectionNamesList?.length\"></mat-option>\n            <mat-option *ngFor=\"let section of sectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div fxLayout=\"row\" class=\"mb-20 w-280 pl-24\">\n          <button mat-raised-button translate type=\"reset\" color=\"primary\" class=\"text-uppercase\" (click)=\"onFacilityClear()\">\n            {{'Reset' | translate}}\n          </button>\n          <button mat-raised-button translate type=\"submit\" color=\"accent\" class=\"text-uppercase mx-12\"\n            (click)=\"searchFacilityData(schoolFacilityForm.value)\">\n            {{'Search' | translate}}\n          </button>\n          <button mat-button type='button' (click)=\"getHelpText('Student Facility Assignment')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<app-custom-card *ngIf=\"!showTable\" [title]=\"'Student Facility Assignments'\" [inputMessage]=\"'Enter the required search criteria to perform the search'\">\n</app-custom-card>\n\n\n<app-table *ngIf=\"showTable\" [settings]=\"tableSettings\" (getTableData)='getFacilityData($event)' [templateRef]=\"assignFacility\"\n  (openAddForm)='openAddForm()' (rowBasedAction)='actions($event)' [closeRowForm]='closeAddPanel'>\n</app-table>\n\n<ng-template #assignFacility>\n  <div *ngIf=\"isOpenAddForm\">\n\n    <form [formGroup]=\"schoolFacilityAssignmentForm\" #facilityAssignmentForm=\"ngForm\" fxLayout=\"column\" class=\"my-28\">\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"py-4 border-bottom\">\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"30\" fxFlex=\"100\">\n            <mat-label translate>Facility name</mat-label>\n            <input (keyup)=\"preventSpace($event,'schoolFacilityAssignmentForm','facilityName')\" matInput formControlName=\"facilityName\">\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\"\n          class=\"px-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select placeholder=\"Class\" formControlName=\"classId\" (selectionChange)=\"assignmentSections($event.value)\"\n            required>\n            <mat-option *ngFor=\"let class of assignClasses\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"class.innerText\"\n              [validationControl]=\"schoolFacilityAssignmentForm.controls.classId\" [doValidate]=\"assignValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" required>\n            <mat-option *ngFor=\"let section of assignSectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"sectionId.innerText\"\n              [validationControl]=\"schoolFacilityAssignmentForm.controls.sectionId\" [doValidate]=\"assignValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"w-240 pb-20\">\n          <button mat-raised-button translate type=\"button\" color=\"primary\" class=\"text-uppercase  mx-12\"\n            (click)=\"onAssignmentFacilityClear()\">\n            {{'Clear' | translate}}\n          </button>\n          <button mat-raised-button translate type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n            (click)=\"getAddData(schoolFacilityAssignmentForm)\">\n            {{'Search' | translate}}\n          </button>\n        </div>\n      </div>\n\n      <app-table *ngIf=\"showFacilityTable\" class=\"max-height\" [settings]=\"facilityAddTableSettings\" (getTableData)='getAddData($event)'\n       (selectedRows)='selectedRows($event)' (changeRowDropdown)='selectedRows($event)'>\n      </app-table>\n      <app-custom-card *ngIf=\"!showFacilityTable\"  [inputMessage]=\"'Enter the required search criteria and click on search to perform the search'\">\n      </app-custom-card>\n\n      <div fxLayout=\"column\" class=\"mt-12\" fxFlex.gt-sm=\"25\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"edit-info\">\n          <button mat-raised-button translate type=\"reset\" class=\"text-uppercase\" (click)=\"onAssignmentCancel()\">\n            {{'Cancel' | translate}}\n          </button>\n          <button mat-raised-button translate type=\"submit\" [disabled]=\"disabelAssignment\" color=\"accent\"\n            class=\"text-uppercase ml-8\" (click)=\"onAssignFacility(schoolFacilityAssignmentForm.value)\">\n            {{'Assign' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ng-template>\n<ng-template #editTemplate>\n        <div class=\"p-8 text-uppercase font-size-18\" translate>Edit Facility Assignment</div>\n      <form [formGroup]=\"editStudentFacilityForm\" #editAssignmentForm=\"ngForm\"\n        (ngSubmit)=\"editStudentFacility(editStudentFacilityForm)\" fxLayout=\"column\" class=\"pt-24\">\n  \n        <div translate #facilityName class=\"160 pb-12\" fxLayout=\"row\"><span translate>Facility</span> : <strong class=\"break-word pl-4\">{{selectedFacilityName}}</strong>\n        </div>\n        <div translate #facilityName class=\"160 pb-20\" fxLayout=\"row\"><span translate>Student</span> : <strong class=\"break-word pl-4\">{{studentName}}</strong></div>\n     \n          <mat-form-field fxFlexFill *ngIf=\"feeTypeTranches.length > 0\" appearance=\"outline\" fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label translate #feeTranch>Fee Tranche</mat-label>\n            <mat-select placeholder=\"Fee Tranche\" formControlName=\"feeTypeTrancheId\" required>\n              <mat-option *ngFor=\"let feeTranch of feeTypeTranches\" [value]=\"feeTranch.id\">\n                {{feeTranch.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"feeTranch.innerText\"\n                [validationControl]=\"editStudentFacilityForm.controls.feeTypeTrancheId\" [doValidate]=\"isEditValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill *ngIf=\"feeTermsList.length > 0\" appearance=\"outline\" fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label translate #feeTerm>Ending Fee Term</mat-label>\n            <mat-select placeholder=\"Fee Term\" formControlName=\"endFeeTermId\">\n              <mat-option *ngIf=\"feeTermsList.length > 0\"></mat-option>\n              <mat-option *ngFor=\"let feeTerm of feeTermsList\" [value]=\"feeTerm.id\">\n                {{feeTerm.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"feeTerm.innerText\"\n                [validationControl]=\"editStudentFacilityForm.controls.endFeeTermId\" [doValidate]=\"isEditValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n      \n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-20\">\n            <button type=\"button\" mat-raised-button class=\"mr-16 text-uppercase\" (click)=\"onEditCancel()\">\n              {{'Cancel' | translate}}</button>\n            <button type=\"submit\" mat-raised-button color=\"accent\" class=\"text-uppercase\" translate>{{'Submit' | translate}}</button>\n        </div>\n  \n      </form>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-height {\n  max-height: 400px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtZmFjaWxpdHktYXNzaWdubWVudC9zdHVkZW50LWZhY2lsaXR5LWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjYWRlbWljcy9zdHVkZW50LWluZm9ybWF0aW9uLXN5c3RlbS9zdHVkZW50LWZhY2lsaXR5LWFzc2lnbm1lbnQvc3R1ZGVudC1mYWNpbGl0eS1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1oZWlnaHR7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: StudentFacilityAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFacilityAssignmentComponent", function() { return StudentFacilityAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_academic_service_api_studentsFacility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service/api/studentsFacility.service */ "./src/app/service/academic-service/api/studentsFacility.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/general/api/school-facility.service */ "./src/app/service/general/api/school-facility.service.ts");











var StudentFacilityAssignmentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentFacilityAssignmentComponent, _super);
    function StudentFacilityAssignmentComponent(classSectionService, commonService, classTimetableService, studentsFacilityService, dialog, schoolFacilityService, snackBar, cd) {
        var _this = _super.call(this) || this;
        _this.classSectionService = classSectionService;
        _this.commonService = commonService;
        _this.classTimetableService = classTimetableService;
        _this.studentsFacilityService = studentsFacilityService;
        _this.dialog = dialog;
        _this.schoolFacilityService = schoolFacilityService;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this.classes = [];
        _this.assignClasses = [];
        _this.sectionNamesList = [];
        _this.assignSectionNamesList = [];
        _this.currentComponent = 'StudentFacilityAssignmentComponent';
        _this.custRowsPerPageOptions = [];
        _this.feeTermsList = [];
        _this.feeTypeTranches = [];
        _this.facilityDropDown = [];
        _this.selectedFacilityName = '';
        _this.facilityStudentTranchList = [];
        _this.disabelAssignment = true;
        _this.showFacilityTable = false;
        return _this;
    }
    StudentFacilityAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolFacilityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            facilityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        this.schoolFacilityAssignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            facilityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ disabled: true, value: null })
        });
        this.editStudentFacilityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            feeTypeTrancheId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            endFeeTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.schoolFacilityAssignmentForm.valueChanges.subscribe(function (f) {
            _this.initializeAssignTableSettings();
            _this.showFacilityTable = false;
        });
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'admissionNumber', header: 'Admission Number', sort: true },
            { field: 'className', header: 'Class', sort: true },
            { field: 'sectionName', header: 'Section', sort: true },
            { field: 'facilityName', header: 'Facility', sort: true },
            { field: 'feeTypeTranch', header: 'Fee Type Tranche', sort: true },
            { field: 'endFeeTermName', header: 'Ending Fee Term', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.facilityAddColumns = [
            { field: 'studentName', header: 'Student Name', sort: false },
            { field: 'admissionNumber', header: 'Admission Number', sort: false },
        ];
        this.initializeFilterModel();
        this.initializeTableSettings();
        this.initializeAssignTableSettings();
        this.fetchClasses();
        this.getFacilities();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
            if (this.filterViewModel.classId) {
                this.classId = this.filterViewModel.classId;
                this.classSections(this.classId, true);
            }
            if (this.filterViewModel.sectionId) {
                this.sectionId = this.filterViewModel.sectionId;
            }
            if (this.filterViewModel.facilityTypeId) {
                this.facilityTypeId = this.filterViewModel.facilityTypeId;
            }
            this.schoolFacilityForm.patchValue(this.filterViewModel);
            this.schoolFacilityForm.controls.facilityId.patchValue(this.facilityTypeId);
            this.searchFacilityData(this.schoolFacilityForm.value);
        }
    };
    StudentFacilityAssignmentComponent.prototype.initializeFilterModel = function () {
        this.filterViewModel = {
            studentName: [],
            admissionNumber: [],
            feeTypeTranchId: [],
            feeTermId: [],
            classId: 0,
            sectionId: 0,
            facilityTypeId: 0,
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DEFAULT_SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PAGESIZE,
        };
    };
    StudentFacilityAssignmentComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Student Facility Assignments',
            componentName: this.currentComponent,
            model: this.filterViewModel,
        };
    };
    StudentFacilityAssignmentComponent.prototype.initializeAssignTableSettings = function () {
        this.facilityAddTableSettings = {
            columns: this.facilityAddColumns,
            rows: [],
            componentName: this.currentComponent,
            hideHeader: true
        };
    };
    StudentFacilityAssignmentComponent.prototype.searchFacilityData = function (data) {
        this.facilityAddColumns = this.facilityAddColumns.filter(function (x) { return x.field !== 'feeTypeTranch'; });
        if (data.facilityId === null || data.facilityId === '') {
            this.isValidate = true;
        }
        else {
            this.showTable = true;
            this.isValidate = false;
            this.classId = data.classId;
            this.sectionId = data.sectionId;
            this.facilityTypeId = data.facilityId !== undefined ? data.facilityId : this.filterViewModel.facilityTypeId;
            this.studentFacilityList();
        }
    };
    StudentFacilityAssignmentComponent.prototype.getFacilityData = function (data) {
        this.filterViewModel = data;
        this.studentFacilityList();
    };
    StudentFacilityAssignmentComponent.prototype.getAddData = function (data) {
        var _this = this;
        if (this.schoolFacilityAssignmentForm.valid) {
            this.assignValidate = false;
            this.studentsFacilityService.studentUnAssignedFacilityList(data.value.classId, data.value.sectionId, this.facilityTypeId).subscribe(function (res) { _this.getData(res, data); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.initializeAssignTableSettings();
            this.assignValidate = true;
        }
    };
    StudentFacilityAssignmentComponent.prototype.facilityTabSettings = function () {
        this.facilityAddTableSettings = {
            columns: this.facilityAddColumns,
            model: this.filterViewModel,
            rows: this.rows,
            componentName: this.currentComponent,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            isMultiDeleteRequired: false,
            tabTable: true,
            padding: true,
            hideHeader: true,
            showSelectAll: true,
        };
        this.showFacilityTable = true;
    };
    StudentFacilityAssignmentComponent.prototype.getData = function (data, patchData) {
        this.rows = [];
        this.facilityStudentTranchList = [];
        this.disabelAssignment = true;
        this.schoolFacilityAssignmentForm.patchValue(patchData);
        if (!data.studentFacilityResult) {
            this.rows = [];
        }
        else {
            this.rows = data.studentFacilityResult;
            this.totalItems = data.studentFacilityResult;
            var dataList = data.studentFacilityResult[0].feeTypeTranch.map(function (x) {
                return { label: x.name, value: x.id };
            });
            if (data.studentFacilityResult[0].feeTypeTranch.length > 0 && this.facilityAddColumns.find(function (x) { return x.field === 'feeTypeTranch'; }) === undefined) {
                this.facilityAddColumns.push({
                    field: 'feeTypeTranch', header: 'Fee/Tranche',
                    dropdownInputRequired: true, placeholder: 'Fee Tranches', options: dataList
                });
            }
        }
        this.facilityTabSettings();
    };
    StudentFacilityAssignmentComponent.prototype.studentFacilityList = function () {
        var _this = this;
        this.filterViewModel.classId = this.classId;
        this.filterViewModel.sectionId = this.sectionId;
        this.filterViewModel.facilityTypeId = this.facilityTypeId;
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.studentsFacilityService.studentFacilityList(this.filterViewModel.studentName, this.filterViewModel.admissionNumber, this.filterViewModel.feeTypeTranchId, this.filterViewModel.feeTermId, this.filterViewModel.classId, this.filterViewModel.sectionId, this.filterViewModel.facilityTypeId, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) { _this.getStudentFacilities(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentFacilityAssignmentComponent.prototype.getStudentFacilities = function (data) {
        this.custRowsPerPageOptions = [];
        if (!data.studentFacilityResult) {
            this.rows = [];
        }
        else {
            this.rows = data.studentFacilityResult.list;
            this.totalItems = data.studentFacilityResult.totalItems;
        }
        this.rows.forEach(function (e) {
            var testoperations = [];
            if (!e.isFeeTermsAvailable) {
                testoperations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DELETE_FACILITY_ASSIGNMENT,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DELETE_ICON,
                });
            }
            if (e.isFeeTermsAvailable || e.isFeeTranchesAvailable) {
                testoperations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].EDIT_FACILITY_ASSIGNMENT,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].EDIT_ICON,
                });
            }
            if (!e.isInvoiceGeneratedForFeeTerm) {
                e.operations = testoperations;
            }
        });
        if (data.testTypeListViewModel) {
            this.filterViewModel.pageNumber = data.studentFacilityResult.pageNumber;
        }
        this.tableSettings = {
            columns: this.columns,
            model: this.filterViewModel,
            rows: this.rows,
            tablename: 'Student Facility Assignments',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    name: this.addStudentFacilityTemplate,
                    btnName: 'Assign'
                }
            },
            filtersList: data.filters
        };
    };
    StudentFacilityAssignmentComponent.prototype.openAddForm = function () {
        var _this = this;
        this.showFacilityTable = false;
        this.rows = [];
        this.schoolFacilityAssignmentForm.reset();
        this.closeAddPanel = false;
        this.isOpenAddForm = true;
        this.disabelAssignment = true;
        this.facilityDropDown.map(function (x) {
            if (x.value === _this.facilityTypeId) {
                _this.selectedFacilityName = x.label;
                _this.schoolFacilityAssignmentForm.controls['facilityName'].setValue(_this.selectedFacilityName);
            }
        });
        this.fetchAssignedClasses();
        if (this.classId != null && this.classId !== undefined && this.classId !== '') {
            this.assignmentSections(this.classId);
        }
        var assignModel = this.schoolFacilityAssignmentForm;
        assignModel.controls.classId.patchValue(this.classId);
        assignModel.controls.sectionId.patchValue(this.sectionId);
        this.getAddData(assignModel);
        this.assignSectionNamesList = [];
    };
    StudentFacilityAssignmentComponent.prototype.getFacilities = function () {
        var _this = this;
        this.schoolFacilityService.getAllSchoolFacilities().subscribe(function (res) { return _this.facilityGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentFacilityAssignmentComponent.prototype.facilityGet = function (data) {
        this.facilityDropDown = [];
        if (data.schoolFacilities !== null) {
            for (var i = 0; i < data.schoolFacilities.length; i++) {
                this.facilityDropDown.push({ value: data.schoolFacilities[i].id, label: data.schoolFacilities[i].name });
            }
        }
    };
    StudentFacilityAssignmentComponent.prototype.fetchClasses = function () {
        var _this = this;
        this.classes = [];
        this.classSectionService.schoolAcademicClasses()
            .subscribe(function (res) {
            if (res.listViews) {
                res.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentFacilityAssignmentComponent.prototype.fetchAssignedClasses = function () {
        var _this = this;
        this.assignClasses = [];
        this.classSectionService.schoolAcademicClasses()
            .subscribe(function (res) {
            if (res.listViews) {
                res.listViews.forEach(function (element) {
                    _this.assignClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentFacilityAssignmentComponent.prototype.classSections = function (id, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        this.sectionNamesList = [];
        this.assignSectionNamesList = [];
        if (!onManualChange) {
            this.schoolFacilityForm.controls.sectionId.setValue(null);
        }
        if (id !== undefined) {
            this.classTimetableService.classTimetableSectionsGet(id).subscribe(function (response) {
                if (response.classTimetableSectionsView != null) {
                    if (response.classTimetableSectionsView.length) {
                        response.classTimetableSectionsView.map(function (x) {
                            _this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                        });
                    }
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.schoolFacilityForm.controls['classId'].setValue(null);
        }
    };
    StudentFacilityAssignmentComponent.prototype.assignmentSections = function (id) {
        var _this = this;
        this.schoolFacilityAssignmentForm.controls.sectionId.patchValue('');
        this.assignSectionNamesList = [];
        this.classTimetableService.classTimetableSectionsGet(id).subscribe(function (res) {
            if (res.classTimetableSectionsView != null) {
                res.classTimetableSectionsView.map(function (x) {
                    _this.assignSectionNamesList.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                });
            }
        });
    };
    StudentFacilityAssignmentComponent.prototype.actions = function (data) {
        var _this = this;
        this.closeAddPanel = true;
        this.editStudentFacilityForm.reset();
        this.id = data.clickedRow.id;
        if (data.operation.toLowerCase() === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].EDIT_FACILITY_ASSIGNMENT.toLowerCase()) {
            this.facilityDropDown.map(function (x) {
                if (x.value === _this.facilityTypeId) {
                    _this.selectedFacilityName = x.label;
                }
            });
            this.studentsFacilityService.getStudentFacilityById(this.id).subscribe(function (res) { return _this.editResult(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (data.operation.toLowerCase() === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DELETE_FACILITY_ASSIGNMENT.toLowerCase()) {
            var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES);
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                    _this.studentsFacilityService.deleteStudentFaclitySelection(_this.id).subscribe(function (res) {
                        _this.openSnackBar(res.messages.ResultMessage),
                            _this.getFacilityData(_this.filterViewModel);
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    StudentFacilityAssignmentComponent.prototype.editResult = function (data) {
        this.editStudentFacilityForm.reset();
        this.isEditValidate = true;
        this.studentName = data.studentName;
        this.feeTermsList = data.endFeeTerms;
        this.feeTypeTranches = data.feeTypeTranches;
        this.editStudentFacilityForm.patchValue(data);
        this.coustomDialog = this.dialog.open(this.editTemplate, {
            disableClose: true,
            width: '400px',
        });
    };
    StudentFacilityAssignmentComponent.prototype.selectedRows = function (data) {
        var _this = this;
        this.disabelAssignment = true;
        this.facilityStudentTranchList = [];
        var selectedData = data.selectedList !== undefined ? data.selectedList : data;
        selectedData.forEach(function (element) {
            _this.cd.detectChanges();
            var facilityStudentTranch = {
                feeTypeTrancheId: element.feeTypeTranch.length === 0 ? null : element.newValue !== undefined ? element.newValue : 0,
                schoolAcademicSessionStudentId: element.schoolAcademicSessionStudentId
            };
            if (element.isCheck) {
                _this.facilityStudentTranchList.push(facilityStudentTranch);
            }
        });
        var dataList = this.facilityStudentTranchList.filter(function (x) {
            return x.feeTypeTrancheId === 0;
        });
        if (dataList !== null && dataList.length > 0) {
            this.facilityStudentTranchList = [];
        }
        if (this.facilityStudentTranchList.length > 0) {
            this.disabelAssignment = false;
        }
        else {
            this.disabelAssignment = true;
        }
        this.cd.detectChanges();
    };
    StudentFacilityAssignmentComponent.prototype.onEditCancel = function () {
        this.dialog.closeAll();
        this.schoolFacilityAssignmentForm.reset();
    };
    StudentFacilityAssignmentComponent.prototype.onAssignmentCancel = function () {
        this.isOpenAddForm = false;
        this.disabelAssignment = true;
        this.closeAddPanel = true;
        this.editStudentFacilityForm.reset();
        this.facilityAssignmentForm.resetForm();
    };
    StudentFacilityAssignmentComponent.prototype.onFacilityClear = function () {
        this.showTable = false;
        this.initializeTableSettings();
        this.initializeFilterModel();
        this.facilityTypeId = '';
        this.myForm.resetForm();
        this.sectionNamesList = [];
    };
    StudentFacilityAssignmentComponent.prototype.onAssignmentFacilityClear = function () {
        this.cd.detectChanges();
        this.facilityAssignmentForm.resetForm();
        this.initializeAssignTableSettings();
        this.assignSectionNamesList = [];
        this.schoolFacilityAssignmentForm.controls['facilityName'].setValue(this.selectedFacilityName);
        this.rows = [];
        this.disabelAssignment = true;
        this.facilityStudentTranchList = [];
    };
    StudentFacilityAssignmentComponent.prototype.onAssignFacility = function (data) {
        var _this = this;
        var assignFacilty = {
            facilityId: 0,
            classId: 0,
            sectionId: 0,
        };
        assignFacilty.classId = (data.classId != null && data.classId !== '') ? data.classId : this.classId;
        assignFacilty.sectionId = (data.sectionId != null && data.sectionId !== '') ? data.sectionId : this.sectionId;
        assignFacilty.facilityId = this.facilityTypeId;
        assignFacilty.studentTrancheModel = this.facilityStudentTranchList;
        this.studentsFacilityService.createStudentFacility(assignFacilty).subscribe(function (res) { return _this.editResponse(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentFacilityAssignmentComponent.prototype.editStudentFacility = function (editStudentFacilityForm) {
        var _this = this;
        if (editStudentFacilityForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID) {
            this.isEditValidate = false;
            this.studentFacilityAssignmentEdit = editStudentFacilityForm.value;
            this.studentFacilityAssignmentEdit.facilityTypeId = this.facilityTypeId;
            this.studentFacilityAssignmentEdit.id = this.id;
            this.studentsFacilityService.updateStudentFacility(this.studentFacilityAssignmentEdit).subscribe(function (res) { return _this.editResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.isEditValidate = true;
        }
    };
    StudentFacilityAssignmentComponent.prototype.editResponse = function (res) {
        this.dialog.closeAll();
        this.isOpenAddForm = false;
        this.closeAddPanel = true;
        this.openSnackBar(res.messages.ResultMessage);
        this.getFacilityData(this.filterViewModel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentFacilityAssignmentComponent.prototype, "editTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addStudentFacilityTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentFacilityAssignmentComponent.prototype, "addStudentFacilityTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentFacilityForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentFacilityAssignmentComponent.prototype, "myForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('facilityAssignmentForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentFacilityAssignmentComponent.prototype, "facilityAssignmentForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editAssignmentForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentFacilityAssignmentComponent.prototype, "editAssignmentForm", void 0);
    StudentFacilityAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-facility-assignment',
            template: __webpack_require__(/*! ./student-facility-assignment.component.html */ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.html"),
            styles: [__webpack_require__(/*! ./student-facility-assignment.component.scss */ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_2__["ClassSectionService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__["ClassTimetableService"], app_service_academic_service_api_studentsFacility_service__WEBPACK_IMPORTED_MODULE_7__["StudentsFacilityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_10__["SchoolFacilityService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], StudentFacilityAssignmentComponent);
    return StudentFacilityAssignmentComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 py-sm-20\">\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-20 mb-20\">\n    <div class=\"p-20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"font-size-16\" translate>Group Details</div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <button mat-raised-button color=\"primary\" class=\"text-uppercase\" (click)=\"goBack()\" translate>{{'Back' | translate}}</button>\n        <button mat-button (click)=\"getHelpText('Student Groups')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center start\" class=\"p-20 mb-12\">\n      <div fxLayout=\"column\" fxFlex=\"60\">\n        <div fxLayout=\"row\">\n            <div class=\"profile-image border m-24 radius-10\">\n                <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\" alt=\"No Image\"/>\n                <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\">No Image</div>\n              </div>\n          <div fxLayout=\"column\" class=\"pl-20 mt-24\" fxLayoutAlign=\"start start\">\n            <div fxLayout=\"row\" >\n              <div class=\"w-100 primary-300-fg break-word\" translate>Short Name</div>: <div class=\"pl-12 break-word\"> {{this.studentGroupsDetailsList?.shortName}} </div>\n            </div>\n            <div fxLayout=\"row\" class=\"py-16\">\n              <div class=\"w-100 primary-300-fg break-word\" translate>Full Name</div>: <div class=\"pl-12 break-word\"> \n                {{this.studentGroupsDetailsList?.fullName?(this.studentGroupsDetailsList.fullName):\"--\"}} </div>\n            </div>\n            <div fxLayout=\"row\">\n                <div class=\"w-100 primary-300-fg\" translate>Color</div>: <div [class]=\"'w-40 h-40 border ml-12 '+ this.color\"> </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"40\" class=\"mt-24\">\n        <div fxLayout=\"row\">\n          <div fxLayout=\"column\" class=\"pl-20\" fxLayoutAlign=\"center start\">\n            <div fxLayout=\"row\" class=\"pb-16\">\n              <div class=\"w-100  primary-300-fg break-word\" translate>Symbol Name</div>: <div class=\"pl-12 break-word\"> {{this.studentGroupsDetailsList?.symbol?(this.studentGroupsDetailsList.symbol):\"--\"}} </div>\n            </div>\n            <div fxLayout=\"row\">\n              <div class=\"w-100 primary-300-fg break-word\" translate>Moto</div>: <div class=\"pl-12 break-word\">  {{this.studentGroupsDetailsList?.moto?(this.studentGroupsDetailsList.moto):\"--\"}} </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n   \n\n    <div class=\"border-top border-bottom p-12\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <span class=\"grey-600-fg\" translate>Academic Session</span>\n          <button mat-icon-button [disabled]=\"!academicSessions[selectedAsIndex-1]\" (click)=\"onYearClick(true)\">\n        <mat-icon>arrow_leftt</mat-icon>\n      </button>\n\n      <div class=\"title\">\n        <!-- {{a[selectedIndex]?.label}} -->\n        {{getSelectedAcademicSession()}}\n      </div>\n\n      <!-- <button mat-icon-button [disabled]=\"a?.length == selectedIndex\" (click)=\"this.selectedIndex = this.selectedIndex + 1\"> -->\n          <button mat-icon-button [disabled]=\"!academicSessions[selectedAsIndex+1]\" (click)=\"onYearClick()\">\n        <mat-icon>arrow_right</mat-icon>\n      </button>\n    </div>\n\n    <app-table *ngIf=\"loadAsync | async\" [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' (getTableData)='getStudentGroups($event, true)' [templateRef]='studentGroupTemplate' id=\"app-table\"\n      (openAddForm)='openForm()' [closeRowForm]='closeAddPanel'>\n    </app-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtZ3JvdXAtZGV0YWlscy9zdHVkZW50LWdyb3VwLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: StudentGroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGroupDetailsComponent", function() { return StudentGroupDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/student-group/student-group.service */ "./src/app/service/student-group/student-group.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");














var StudentGroupDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentGroupDetailsComponent, _super);
    function StudentGroupDetailsComponent(academicSessionService, _fb, studentGroupService, commonService, route, dialog, cd, sanitizer, storeService, router, snackBar) {
        var _this = _super.call(this) || this;
        _this.academicSessionService = academicSessionService;
        _this._fb = _fb;
        _this.studentGroupService = studentGroupService;
        _this.commonService = commonService;
        _this.route = route;
        _this.dialog = dialog;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.storeService = storeService;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.loadAsync = Promise.resolve(false);
        _this.academicSessions = [];
        _this.currentComponent = 'StudentGroupDetailsComponent';
        _this.studentGroupDetails = {
            studentGroupId: '',
            representatives: [],
            studentName: [],
            staffName: [],
            schoolAcademicSessionId: 0,
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DEFAULT_SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    StudentGroupDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentAcademicSession = JSON.parse(localStorage.getItem('_as'));
        this.getAcademicSession();
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.groupId = params.id;
                _this.studentGroupDetails.studentGroupId = _this.groupId;
                _this.studentGroupService.getGroupsById(params.id)
                    .subscribe(function (res) {
                    _this.response(res);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
        this.cols = [
            { field: 'representatives', header: 'Representatives', sort: true },
            { field: 'studentName', header: 'Student Names', sort: true },
            { field: 'staffName', header: 'Staff Names', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentGroupDetails,
            componentName: this.currentComponent,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.studentGroupDetails = modelTableComponent;
        }
    };
    StudentGroupDetailsComponent.prototype.response = function (data) {
        if (data.statusCode === this.HttpStatus.OK) {
            this.studentGroupsDetailsList = data.studentGroupData;
            if (this.studentGroupsDetailsList) {
                this.color = this.studentGroupsDetailsList.color;
            }
            if (data.studentGroupData.attachment && data.studentGroupData.attachment.fileName) {
                this.profileImage = this.storeService.getFilePath(data.studentGroupData.attachment.fileName);
            }
            this.getStudentGroups(this.studentGroupDetails);
        }
    };
    // get data of student groups
    StudentGroupDetailsComponent.prototype.getStudentGroups = function (studentGroupDetails, fromFilters) {
        var _this = this;
        if (fromFilters === void 0) { fromFilters = false; }
        this.studentGroupDetails = studentGroupDetails;
        if (fromFilters) {
            this.studentGroupDetails.schoolAcademicSessionId = this.academicSessions[this.selectedAsIndex].value;
        }
        if (!this.studentGroupDetails.schoolAcademicSessionId) {
            return;
        }
        this.studentGroupService.getAssignedDetails(this.groupId, studentGroupDetails.representatives, studentGroupDetails.staffName, studentGroupDetails.studentName, this.studentGroupDetails.schoolAcademicSessionId, studentGroupDetails.sortBy, studentGroupDetails.sortOrder, studentGroupDetails.pageNumber, studentGroupDetails.pageSize).subscribe(function (res) { _this.getStudentGroupss(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // response of student group details
    StudentGroupDetailsComponent.prototype.getStudentGroupss = function (studentGroupsList) {
        this.custRowsPerPageOptions = [];
        if (!studentGroupsList.studentGroupsDetails) {
            this.rows = [];
        }
        else {
            this.rows = studentGroupsList.studentGroupsDetails.list;
            this.totalItems = studentGroupsList.studentGroupsDetails.totalItems;
        }
        var studentGroupoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_ICON
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = studentGroupoperations;
        });
        if (studentGroupsList.studentGroupsDetails) {
            this.studentGroupDetails.pageNumber = studentGroupsList.studentGroupsDetails.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.studentGroupDetails,
            rows: this.rows,
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            tabTable: true,
            padding: true,
            filtersList: studentGroupsList.filters
        };
        this.loadAsync = Promise.resolve(true);
        this.scrollIntoViewById('app-table');
    };
    StudentGroupDetailsComponent.prototype.rowActions = function (rowAction) {
        var _this = this;
        if (rowAction.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_DELETE), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                    _this.studentGroupService.deleteAssignRepresentatives(rowAction.clickedRow.studentGroupRepId).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
    };
    // Delete Response
    StudentGroupDetailsComponent.prototype.deleteResponse = function (response) {
        this.getStudentGroups(this.studentGroupDetails);
        this.openSnackBar(response.messages.ResultMessage);
    };
    StudentGroupDetailsComponent.prototype.goBack = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_12__["RouteConfig"]._Student_Groups]);
    };
    StudentGroupDetailsComponent.prototype.getAcademicSession = function () {
        var _this = this;
        // const currentSchool = JSON.parse(localStorage.getItem('_s'));
        this.academicSessionService.academicSessionAllAcademicSessionsBySchoolIdGet()
            .subscribe(function (response) {
            if (response.academicSessionView.length) {
                _this.academicSessions = [];
                response.academicSessionView.forEach(function (element) {
                    _this.academicSessions.push({
                        value: element.id,
                        name: element.displayName,
                        code: element.statusCode
                    });
                });
                _this.currentAcademicSession = JSON.parse(localStorage.getItem('_as'));
                if (_this.currentAcademicSession) {
                    _this.selectedAsIndex = _this.academicSessions.findIndex(function (e) { return e.name === _this.currentAcademicSession.name; });
                }
                _this.studentGroupDetails.schoolAcademicSessionId = _this.currentAcademicSession.id;
                _this.getStudentGroups(_this.studentGroupDetails);
            }
        });
    };
    StudentGroupDetailsComponent.prototype.getSelectedAcademicSession = function () {
        if (this.academicSessions[this.selectedAsIndex] && this.academicSessions[this.selectedAsIndex].name) {
            return this.academicSessions[this.selectedAsIndex].name;
        }
        return '';
    };
    StudentGroupDetailsComponent.prototype.onYearClick = function (isprevious) {
        if (isprevious === void 0) { isprevious = false; }
        if (isprevious) {
            this.selectedAsIndex--;
        }
        else {
            this.selectedAsIndex++;
        }
        this.currentAcademicSession = this.academicSessions[this.selectedAsIndex];
        if (this.currentAcademicSession) {
            this.studentGroupDetails.schoolAcademicSessionId = this.currentAcademicSession.value;
        }
        this.getStudentGroups(this.studentGroupDetails);
    };
    StudentGroupDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-group-details',
            template: __webpack_require__(/*! ./student-group-details.component.html */ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.html"),
            styles: [__webpack_require__(/*! ./student-group-details.component.scss */ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service__WEBPACK_IMPORTED_MODULE_13__["AcademicSessionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_7__["StudentGroupService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], StudentGroupDetailsComponent);
    return StudentGroupDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-groups/student-groups.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" id=\"student-groups-table\" (getTableData)='getStudentGroups($event)'\n  [templateRef]='studentGroupTemplate' (openAddForm)='openForm()' (rowBasedAction)='rowActions($event)'\n  [closeRowForm]=closeAddPanel>\n</app-table>\n\n<ng-template #studentGroupTemplate>\n  <form [formGroup]=\"studentGroupForm\" #userStudentGroupForm=\"ngForm\">\n    <div class=\"pt-20 font-size-18\" translate>Student Group</div>\n    <div fxLayout.gt-xs=\"row\" fxLayout=\"column\" class=\"p-sm-24\">\n      <div fxLayout=\"column\" fxFlex.gt-xs=\"1 1 auto\" fxFlex=\"100\" fxFlexFill>\n        <div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"40\">\n            <mat-label translate #shortName>Short Name</mat-label>\n            <input matInput formControlName=\"shortName\" (keyup)=\"preventSpace($event,'studentGroupForm','shortName')\" \n              (blur)=\"trimTextBoxSpaces('studentGroupForm','shortName')\" required>\n            <mat-error>\n              <app-validation [labelName]='shortName.innerText'\n                [validationControl]=\"studentGroupForm.controls.shortName\" [doValidate]=\"studentGroupSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"40\"\n            class=\"px-sm-20\">\n            <mat-label translate #fullName>Full Name</mat-label>\n            <input matInput formControlName=\"fullName\" (keyup)=\"preventSpace($event,'studentGroupForm','fullName')\" (blur)=\"trimTextBoxSpaces('studentGroupForm','fullName')\">\n            <mat-error>\n              <app-validation [labelName]='fullName.innerText' [validationControl]=\"studentGroupForm.controls.fullName\"\n                [doValidate]=\"studentGroupSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" class=\"pt-12\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"40\">\n            <mat-label translate #symbol>Symbol Name</mat-label>\n            <input matInput formControlName=\"symbol\" (keyup)=\"preventSpace($event,'studentGroupForm','symbol')\"\n            (blur)=\"trimTextBoxSpaces('studentGroupForm','symbol')\">\n            <mat-error>\n              <app-validation [labelName]='symbol.innerText' [validationControl]=\"studentGroupForm.controls.symbol\"\n                [doValidate]=\"studentGroupSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"40\"\n            class=\"px-sm-20\">\n            <mat-label translate #moto>Moto</mat-label>\n            <input matInput formControlName=\"moto\" (keyup)=\"preventSpace($event,'studentGroupForm','moto')\"\n            (blur)=\"trimTextBoxSpaces('studentGroupForm','moto')\">\n            <mat-error>\n              <app-validation [labelName]='moto.innerText' [validationControl]=\"studentGroupForm.controls.moto\"\n                [doValidate]=\"studentGroupSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100 pb-16\">\n            <mat-label class=\"pr-8\" translate>Color</mat-label>\n            <fuse-material-color-picker *ngIf=\"colorCode != ''\" [color]=\"colorCode\" [(selectedClass)]=\"colorCode\"\n              (colorChanged)=\"onColorChanged($event)\" formControlName=\"color\">\n            </fuse-material-color-picker>\n            <fuse-material-color-picker *ngIf=\"colorCode == ''\" (colorChanged)=\"onColorChanged($event)\"\n              formControlName=\"color\">\n            </fuse-material-color-picker>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"column\">\n        <div fxLayout=\"column\" class=\"w-180 h-180 border\">\n          <span *ngIf=\"!flagImageProp?.src\" fxLayoutAlign=\"center center\" fxFlexFill>{{'Upload Image' | translate}}</span>\n          <img class=\"radius-5 w-180 h-180\" [src]=\"flagImageProp?.src\" *ngIf=\"flagImageProp?.src\" alt=\"Launchship\" />\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"py-12\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button mat-raised-button color=\"primary\" (click)=\"fileInput.value='';fileInput.click()\" type=\"button\">\n              {{'Upload Image' | translate}}\n            </button>\n            <button mat-icon-button [style.display]=\"flagImageProp?.src ? 'block' : 'none'\" type=\"button\">\n              <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"fileInput.value='';clearImages(true)\">highlight_off\n              </mat-icon>\n            </button>\n          </div>\n          <input [accept]=\"'image/*'\" id=\"fileInput\" (change)=\"imgChanged(fileInput.files,studentGroupForm)\" fxHide\n            type=\"file\" #fileInput>\n          <div [style.visibility]=\"studentGroupForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n            class=\"pt-4 secondary-text font-size-12\">\n            {{studentGroupForm?.value?.attachment?.fileName}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"py-20 font-size-18\" translate>Assign Representatives</div>\n    <form [formGroup]=\"representativeForm\" #userStudentGroupRepForm=\"ngForm\"\n      (ngSubmit)=\"addStudentGroup(studentGroupForm)\">\n      <div formArrayName=\"studentGroupReps\" *ngFor=\"let itemrow of addNewRowAssaignRepform.controls; let i=index\">\n        <div [formGroupName]=\"i\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" class=\"px-sm-24\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"40\">\n            <mat-label #repRoleId translate>Representative Role</mat-label>\n            <mat-select id=\"form-{{i}}\" formControlName=\"representativeRoleId\" (selectionChange)=\"onSelectRepRole(i)\"\n              required>\n              <mat-option *ngFor=\"let repRole of studentRepRoles\" [value]=\"repRole.value\">\n                {{repRole.label}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='repRoleId.innerText'\n                [validationControl]=\"itemrow.controls.representativeRoleId\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <div fxFlexFill fxLayout=\"column\" class=\"px-sm-24 w-244 pb-20\">\n            <mat-label  class=\"pb-4 pl-8\"><span #assigneeTypeId translate>Assign to</span> <span>*</span></mat-label>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"assigneeTypeId\"\n              (change)=\"onChange($event.value,i)\">\n              <mat-radio-button value=\"1\">{{'Student' | translate}}</mat-radio-button>\n              <mat-radio-button value=\"2\" class=\"pl-16\" translate>{{'Staff' | translate}}</mat-radio-button>\n            </mat-radio-group>\n            <mat-error *ngIf=\"userStudentGroupRepForm?.submitted\">\n              <app-validation [labelName]='assigneeTypeId.innerText'\n                [validationControl]=\"itemrow.controls.assigneeTypeId\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </div>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"60\">\n            <mat-label #roleid class=\"pr-8\" translate>Assignee</mat-label>\n            <input id=\"assign-{{i}}\" type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput formControlName=\"assignRepRoleName\" (keyup)=\"preventSpaceForArray($event,itemrow.controls.assignRepRoleName)\" (blur)=\"trimSpaces(itemrow,'assignRepRoleName')\"\n              [matAutocomplete]=\"auto\" (input)=\"onSelectOptionEvent($event,i)\" \n              [readonly]=\"!itemrow?.value?.assigneeTypeId\"\n              required>\n\n            <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n              <mat-option *ngFor=\"let option of filteredAssigness[i]\" [value]=\"option\">\n                {{option.label}}\n              </mat-option>\n            </mat-autocomplete>\n            <mat-error>\n              <app-validation [labelName]='roleid.innerText' [validationControl]=\"itemrow.controls.assignRepRoleName\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <button mat-icon-button class=\"mb-20 ml-4\" type=\"button\" (click)=\"deleteRow(i)\">\n            <mat-icon class=\"red-300-fg\">delete</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"px-sm-24\">\n        <button mat-stroked-button color=\"accent\" class=\"text-uppercase\" type=\"button\" (click)=\"addNewRow()\">\n          {{'Add Representatives' | translate}}\n        </button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-24\">\n        <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closePanel()\">\n          {{'Cancel' | translate}}</button>\n\n        <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\"\n          color=\"accent\">{{(isUpdateData ? 'Update':'Create') | translate}}</button>\n      </div>\n    </form>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-groups/student-groups.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtZ3JvdXBzL3N0dWRlbnQtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-groups/student-groups.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StudentGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGroupsComponent", function() { return StudentGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/student-group/student-group.service */ "./src/app/service/student-group/student-group.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");













var StudentGroupsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentGroupsComponent, _super);
    function StudentGroupsComponent(_fb, router, route, studentGroupService, commonService, dialog, cd, sanitizer, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.router = router;
        _this.route = route;
        _this.studentGroupService = studentGroupService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentGroupsComponent';
        _this.custRowsPerPageOptions = [];
        _this.studentRepRoles = [];
        _this.repRoleSubmitted = false;
        _this.studentGroupSubmitted = true;
        _this.representativesList = [];
        _this.grpReps = [];
        _this.grpRepsObj = {};
        _this.nonDuplicatedArray = [];
        _this.disbleSubmitBtn = false;
        _this.disbleAddRowBtn = false;
        _this.checkDupliacteList = [];
        _this.repList = [];
        _this.isUpdateData = false;
        _this.repRolesList = [];
        _this.notProperAssignee = false;
        _this.isDuplicateRepresentativeData = false;
        _this.detailsComponent = 'StudentGroupDetailsComponent';
        _this.studentGroupDetails = {
            shortNames: [],
            fullNames: [],
            symbols: [],
            Motos: [],
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DEFAULT_SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    StudentGroupsComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'shortName', header: 'Short Name', sort: true },
            { field: 'fullName', header: 'Full Name', sort: true },
            { field: 'color', header: 'Color', sort: false, type: 'color' },
            { field: 'symbol', header: 'Symbol', sort: true },
            { field: 'moto', header: 'Moto', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.attachmentInfo = {
            fileName: null,
            fileValue: null
        };
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentGroupDetails,
            tablename: 'Student Groups',
            componentName: this.currentComponent,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.studentGroupDetails = modelTableComponent;
        }
        this.getStudentRepRoles();
        this.studentGroupControls();
        this.repArrayInit();
        this.getStudentGroups(this.studentGroupDetails);
    };
    // Initailising form for student group
    StudentGroupsComponent.prototype.studentGroupControls = function () {
        this.studentGroupForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            shortName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            moto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            studentGroupReps: this._fb.array([]),
            attachment: this.attachmentInfo,
        });
    };
    StudentGroupsComponent.prototype.getStudentGroups = function (studentGroupDetails) {
        this.closeAddPanel = true;
        this.studentGroupDetails = studentGroupDetails;
        this.fetchStudentGroups();
    };
    StudentGroupsComponent.prototype.fetchStudentGroups = function () {
        var _this = this;
        this.studentGroupService.studentGroupsDetails(this.studentGroupDetails.shortNames, this.studentGroupDetails.fullNames, this.studentGroupDetails.symbols, this.studentGroupDetails.Motos, this.studentGroupDetails.flags, this.studentGroupDetails.sortBy, this.studentGroupDetails.sortOrder, this.studentGroupDetails.pageNumber, this.studentGroupDetails.pageSize).subscribe(function (res) { _this.getAllStudentGroups(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    /**
     * manipulate response data and sets to app-table
     * @param testTypeList
     */
    StudentGroupsComponent.prototype.getAllStudentGroups = function (studentGroupsList) {
        this.custRowsPerPageOptions = [];
        if (!studentGroupsList.studentGroupDetailsView) {
            this.rows = [];
        }
        else {
            this.rows = studentGroupsList.studentGroupDetailsView.list;
            this.totalItems = studentGroupsList.studentGroupDetailsView.totalItems;
        }
        var studentGroupoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT_ICON
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DETAILS_ICON
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DELETE_ICON
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = studentGroupoperations;
        });
        if (studentGroupsList.studentGroupDetailsView) {
            this.studentGroupDetails.pageNumber = studentGroupsList.studentGroupDetailsView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.studentGroupDetails,
            rows: this.rows,
            tablename: 'Student Groups',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    name: this.studentGroupTemplate,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Student Groups'
                }
            },
            filtersList: studentGroupsList.filters
        };
    };
    StudentGroupsComponent.prototype.onColorChanged = function (color) {
        if (color.bg !== undefined && color.bg !== '') {
            this.colorCode = color.class;
            this.selectedColor = color.class;
            this.studentGroupForm.controls.color.patchValue(this.selectedColor);
        }
    };
    StudentGroupsComponent.prototype.imgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], 'image', 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            var image;
            image = new Image();
            image.src = reader.result;
            image.onload = function () {
                that.flagImageProp = {
                    src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
                };
                that.studentGroupForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: reader.result.split(',')[1] });
                that.cd.detectChanges();
            };
        };
    };
    StudentGroupsComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.flagImageProp = {};
            this.studentGroupForm.controls.attachment.patchValue(this.attachmentInfo);
        }
        this.cd.detectChanges();
    };
    StudentGroupsComponent.prototype.getStudentRepRoles = function () {
        var _this = this;
        this.studentRepRoles = [];
        this.studentGroupService.getStudentGroupRepRoles().subscribe(function (response) {
            if (response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.studentRepRoles.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        });
    };
    StudentGroupsComponent.prototype.displayFn = function (user) {
        if (user) {
            this.displayName = user.label === undefined ? user : user.label;
            return this.displayName;
        }
    };
    StudentGroupsComponent.prototype.onSelectOptionEvent = function (event, index) {
        var data = event.target.value;
        return this.onSelectOption(data, index);
    };
    StudentGroupsComponent.prototype.onSelectOption = function (data, index, onSearch) {
        var _this = this;
        if (onSearch === void 0) { onSearch = true; }
        this.searchAssigneeName = data;
        // if (this.representativeForm.controls['studentGroupReps'].invalid) {
        //   this.disbleAddRowBtn = true;
        //   this.repRoleSubmitted = true;
        //   if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
        //     this.filteredAssigness[index] = [];
        //   }
        //   return false;
        // }
        // else
        if (onSearch) {
            this.disbleAddRowBtn = false;
            if (data.length >= 3) {
                var tempFilteredAssigness_1 = [];
                var control = this.representativeForm.controls['studentGroupReps'];
                if ((control.at(index).value.assigneeTypeId) === '1') {
                    var trimmedData = data ? data.trim() : null;
                    if (!trimmedData) {
                        return;
                    }
                    this.studentGroupService.getStudent(trimmedData, this.clickedId).subscribe(function (res) {
                        if (res.studentsDataList && res.studentsDataList.length) {
                            res.studentsDataList.forEach(function (element) {
                                tempFilteredAssigness_1.push({
                                    label: element.studentName + ' , ' + element.currentClassName + ' ' + element.currentSectionName + ' , ' + element.admissionNumber,
                                    value: element.id
                                });
                            });
                            _this.filteredAssigness[index] = tempFilteredAssigness_1;
                            _this.cd.detectChanges();
                        }
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                else {
                    this.studentGroupService.getSearchStaff(data).subscribe(function (res) {
                        if (res.staffSearchViewResult && res.staffSearchViewResult.length) {
                            res.staffSearchViewResult.forEach(function (element) {
                                if (element.designation === null) {
                                    element.designation = '';
                                }
                                tempFilteredAssigness_1.push({
                                    label: element.staffName + ' ' + element.designation + ' , ' + element.staffCode,
                                    value: element.id
                                });
                            });
                            _this.filteredAssigness[index] = tempFilteredAssigness_1;
                            _this.cd.detectChanges();
                        }
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            }
        }
    };
    Object.defineProperty(StudentGroupsComponent.prototype, "addNewRowAssaignRepform", {
        get: function () {
            return this.representativeForm.get('studentGroupReps');
        },
        enumerable: true,
        configurable: true
    });
    StudentGroupsComponent.prototype.repArrayInit = function () {
        this.representativeForm = this._fb.group({
            studentGroupReps: this._fb.array([]),
        });
    };
    // list all your form controls here, which belongs to your form array
    StudentGroupsComponent.prototype.initItemRows = function () {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            representativeRoleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            assigneeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            assigneeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            assignRepRoleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
        });
    };
    // Adding representative role details onClick ADD
    StudentGroupsComponent.prototype.addNewRow = function (index) {
        if (this.representativeForm.controls['studentGroupReps'].value.length === 0) {
            this.representativeForm.reset();
            this.userStudentGroupRepForm.resetForm();
        }
        if (this.representativeForm.controls['studentGroupReps'].invalid) {
            this.repRoleSubmitted = true;
            return false;
        }
        else {
            if (this.filteredAssigness === undefined) {
                this.filteredAssigness = [];
            }
            if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
                this.filteredAssigness[index] = [];
            }
            this.grpReps = [];
            if (this.representativeForm.controls['studentGroupReps'].value.length) {
                this.representativesList = this.representativeForm.controls['studentGroupReps'].value;
            }
            this.repRoleSubmitted = false;
            // control refers to your formarray
            var control = this.representativeForm.controls['studentGroupReps'];
            // add new formgroup
            control.push(this.initItemRows());
            this.disbleAddRowBtn = true;
        }
    };
    StudentGroupsComponent.prototype.onChange = function (assignee, index) {
        this.selectedAssignee = assignee;
        if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
            this.filteredAssigness[index] = [];
        }
        var groupReps = this.representativeForm.controls.studentGroupReps;
        groupReps = groupReps.controls[index].patchValue({ assignRepRoleName: null });
        if (this.representativeForm.controls['studentGroupReps'].invalid) {
            this.disbleAddRowBtn = true;
            this.repRoleSubmitted = true;
        }
        else {
            this.disbleAddRowBtn = false;
        }
        if (document.getElementById('assign-' + index)) {
            document.getElementById('assign-' + index).focus();
        }
    };
    StudentGroupsComponent.prototype.onSelectRepRole = function (index) {
        if (this.searchAssigneeName != null) {
            this.onSelectOption(this.searchAssigneeName, index, false);
        }
        else if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
            this.filteredAssigness[index] = [];
        }
    };
    // Deleting a row of representatives details onClick Remove
    StudentGroupsComponent.prototype.deleteRow = function (index) {
        this.disbleAddRowBtn = true;
        // control refers to your formarray
        var control = this.representativeForm.controls['studentGroupReps'];
        // remove the chosen row
        if (control.at(index).value.assignRepRoleName != null) {
            if (control.at(index).value.assignRepRoleName.value === undefined) {
                this.notProperAssignee = false;
            }
        }
        this.checkDuplicateData();
        control.removeAt(index);
        if ((!this.representativeForm.controls['studentGroupReps'].value.length)
            || (this.representativeForm.controls['studentGroupReps'].value.find(function (x) { return x.representativeRoleId !== null; }))) {
            this.disbleAddRowBtn = false;
        }
    };
    StudentGroupsComponent.prototype.openForm = function () {
        this.clickedId = null;
        this.closeAddPanel = false;
        this.isUpdateData = false;
        this.studentGroupForm.reset();
        this.userStudentGroupForm.resetForm();
        this.userStudentGroupRepForm.resetForm();
        this.representativeForm.reset();
        this.repRoleSubmitted = false;
        this.colorCode = '';
        this.clearImages(true);
        this.clearFormArray(this.representativeForm.controls['studentGroupReps']);
    };
    StudentGroupsComponent.prototype.closePanel = function () {
        this.closeAddPanel = true;
        this.studentGroupForm.reset();
        this.disbleSubmitBtn = false;
        this.userStudentGroupForm.resetForm();
        this.userStudentGroupRepForm.resetForm();
        this.representativeForm.reset();
        this.repRoleSubmitted = false;
        this.colorCode = '';
        this.clearImages(true);
        this.clearFormArray(this.representativeForm.controls['studentGroupReps']);
        this.scrollIntoViewById('student-groups-table');
    };
    StudentGroupsComponent.prototype.clearFormArray = function (formArray) {
        var control = formArray;
        for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
    };
    StudentGroupsComponent.prototype.addStudentGroup = function (studentGroupForm) {
        var _this = this;
        this.grpReps = [];
        this.representativesList = [];
        if (studentGroupForm.invalid) {
            return false;
        }
        else if (this.representativeForm.controls['studentGroupReps'].value.length && this.representativeForm.controls['studentGroupReps'].invalid) {
            this.repRoleSubmitted = true;
            return false;
        }
        else {
            if (this.representativeForm.controls['studentGroupReps'].value.length) {
                this.representativeForm.controls['studentGroupReps'].value.forEach(function (e) {
                    _this.representativesList.push({
                        representativeRoleId: e.representativeRoleId,
                        assigneeTypeId: e.assigneeTypeId,
                        assignRepRoleName: e.assignRepRoleName,
                        assigneeId: e.assigneeId,
                        id: e.id
                    });
                });
                this.notProperAssignee = false;
                var isNotProperAssignee = this.representativesList.findIndex(function (x) { return x.assignRepRoleName.value === undefined; });
                if (isNotProperAssignee !== -1 || isNotProperAssignee === undefined) {
                    this.notProperAssignee = true;
                    this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NOT_PROPER_ASSIGNEE, true);
                }
                else {
                    this.isDuplicateRepresentativeData = false;
                    this.checkDuplicateData();
                    if (!this.isDuplicateRepresentativeData) {
                        this.repList = [];
                        var returnList = Object.assign(this.repList, this.representativesList);
                        returnList.forEach(function (element) {
                            _this.grpReps.push({
                                studentGroupRepRoleId: element.representativeRoleId,
                                studentId: element.assigneeTypeId === '1' ?
                                    element.assignRepRoleName = (element.assignRepRoleName.value === undefined ?
                                        element.assigneeId : element.assignRepRoleName.value) : null,
                                staffId: element.assigneeTypeId === '2' ?
                                    element.assignRepRoleName = (element.assignRepRoleName.value === undefined ?
                                        element.assigneeId : element.assignRepRoleName.value) : null,
                                id: element.id != null ? element.id : null
                            });
                        });
                    }
                    else {
                        this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DUPLICATE_REPRESENTATIVE_DATA, true);
                        return false;
                    }
                }
            }
            if (!this.notProperAssignee && !this.isDuplicateRepresentativeData) {
                if (this.isUpdateData) {
                    this.disbleSubmitBtn = true;
                    this.studentGroupRepView = studentGroupForm.value;
                    if (this.grpReps && this.grpReps.length) {
                        this.studentGroupRepView.studentGroupReps = this.grpReps;
                    }
                    else {
                        this.studentGroupRepView.studentGroupReps = [];
                    }
                    this.studentGroupRepView.id = this.clickedId;
                    this.studentGroupService.updateStudentGroup(this.studentGroupRepView).subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                        _this.disbleSubmitBtn = false;
                        _this.errorResponse(error);
                    });
                }
                else {
                    this.disbleSubmitBtn = true;
                    this.studentGroup = studentGroupForm.value;
                    if (this.grpReps && this.grpReps.length) {
                        this.studentGroup.studentGroupReps = this.grpReps;
                    }
                    else {
                        this.studentGroup.studentGroupReps = [];
                    }
                    this.studentGroupService.createStudentGroup(this.studentGroup).subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                        _this.disbleSubmitBtn = false;
                        _this.errorResponse(error);
                    });
                }
            }
        }
    };
    StudentGroupsComponent.prototype.addUpdateResponse = function (testTypeView) {
        this.disbleSubmitBtn = false;
        this.closePanel();
        if (testTypeView.statusCode !== http_status_codes__WEBPACK_IMPORTED_MODULE_6__["CONFLICT"]) {
            this.closeAddPanel = true;
            this.fetchStudentGroups();
        }
        this.openSnackBar(testTypeView.messages.ResultMessage);
        this.scrollIntoViewById('student-groups-table');
    };
    StudentGroupsComponent.prototype.checkDuplicateData = function () {
        this.checkDupliacteList = this.representativesList;
        this.checkDupliacteList.map(function (c) { return delete c.id && delete c.assigneeId; });
        var o = this.checkDupliacteList.reduce(function (acc, cv) {
            if (!acc[JSON.stringify(cv)]) {
                acc[JSON.stringify(cv)] = true;
            }
            return acc;
        }, {});
        var res = Object.keys(o).map(function (x) { return JSON.parse(x); });
        if (res.length !== this.representativesList.length) {
            this.isDuplicateRepresentativeData = true;
            return false;
        }
        else {
            this.isDuplicateRepresentativeData = false;
        }
    };
    StudentGroupsComponent.prototype.rowActions = function (rowAction) {
        var _this = this;
        this.clickedId = rowAction.clickedRow.id;
        if (rowAction.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT) {
            this.closeAddPanel = false;
            this.isUpdateData = true;
            this.studentGroupService.getGroupsById(rowAction.clickedRow.id).subscribe(function (res) { return _this.studentGroupsById(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (rowAction.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DELETE.toLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES) {
                    var studentGroupId = rowAction.clickedRow.id;
                    _this.deleteStudentGroups(studentGroupId);
                }
            });
        }
        if (rowAction.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_DATA) {
            this.setModelDataTableComponent(this.detailsComponent, null);
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_11__["RouteConfig"]._Student_Group_Details + rowAction.clickedRow.id]);
        }
    };
    StudentGroupsComponent.prototype.deleteStudentGroups = function (studentGroupId) {
        var _this = this;
        this.studentGroupService.deleteStudentGroup(studentGroupId).subscribe(function (response) {
            _this.openSnackBar(response.messages.ResultMessage);
            _this.fetchStudentGroups();
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentGroupsComponent.prototype.studentGroupsById = function (groupData) {
        var _this = this;
        this.repRolesList = [];
        if (groupData.studentGroupData != null) {
            this.studentGroupForm.controls['shortName'].setValue(groupData.studentGroupData.shortName);
            this.studentGroupForm.controls['fullName'].setValue(groupData.studentGroupData.fullName);
            this.colorCode = groupData.studentGroupData.color;
            this.studentGroupForm.controls['color'].setValue(groupData.studentGroupData.color);
            this.studentGroupForm.controls['symbol'].setValue(groupData.studentGroupData.symbol);
            this.studentGroupForm.controls['moto'].setValue(groupData.studentGroupData.moto);
            if (groupData.studentGroupData.attachment && groupData.studentGroupData.attachment.fileName) {
                var that_1 = this;
                that_1.flagImageProp = {
                    src: that_1.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(groupData.studentGroupData.attachment.fileName))
                };
                this.storeService.storeFileEncryptByFileNameGet(groupData.studentGroupData.attachment.fileName)
                    .subscribe(function (data) {
                    if (data) {
                        that_1.studentGroupForm.controls.attachment.patchValue({ fileName: data.fileNameWithExtension, fileValue: data.value });
                    }
                });
                that_1.cd.detectChanges();
            }
            if (groupData.studentGroupData && groupData.studentGroupData.studentGroupReps && groupData.studentGroupData.studentGroupReps.length) {
                this.filteredAssigness = [];
                // let index = 0;
                var tempFilteredAssigness_2 = [];
                groupData.studentGroupData.studentGroupReps.forEach(function (e) {
                    _this.repRolesList.push({
                        representativeRoleId: e.studentGroupRepRoleId,
                        assigneeTypeId: e.studentId != null ? app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].ISSTUDENT : app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].ISSTAFF,
                        assignRepRoleName: {
                            label: e.studentName != null ? e.studentName : e.staffName,
                            value: e.studentId != null ? e.studentId : e.staffId,
                        },
                        assigneeId: e.studentId != null ? e.studentId : e.staffId,
                        id: e.id
                    });
                    tempFilteredAssigness_2.push({
                        label: e.studentName != null ? e.studentName : e.staffName,
                        value: e.studentId != null ? e.studentId : e.staffId,
                    });
                });
                // this.filteredAssigness[index++] = tempFilteredAssigness;
            }
            this.representativeForm.controls['studentGroupReps'] = this._fb.array(this.repRolesList.map(function (i) { return _this._fb.group(i); }));
        }
    };
    // // prevent spaces at on blur text fields
    // trimTextBoxSpaces(key: string, form: any): void {
    //   if (form === 'studentGroupForm') {
    //     this.studentGroupForm.controls[key].setValue(this.commonService.trimSpaces(this.studentGroupForm.controls[key].value));
    //   } else {
    //     this.representativeForm.get('studentGroupReps')['controls'].forEach(controlElt => {
    //       if (controlElt.controls[key] !== null && controlElt.controls[key] !== undefined) {
    //         if (typeof controlElt.controls[key].value === 'object' && controlElt.controls[key].value !== null) {
    //           // controlElt.controls[key].setValue(this.commonService.trimSpaces(controlElt.controls[key].value.label));
    //         }
    //         else {
    //           controlElt.controls[key].setValue(this.commonService.trimSpaces(controlElt.controls[key].value));
    //         }
    //       }
    //     });
    //   }
    // }
    StudentGroupsComponent.prototype.onKeyDown = function () {
        // this.filteredAssigness = [];
    };
    StudentGroupsComponent.prototype.preventSpacesAutoComplete = function (control) {
        if (!(control.value && control.value.label)) {
            control.patchValue(control.value ? control.value.trim() : null);
        }
    };
    StudentGroupsComponent.prototype.preventSpaceAutoComplete = function (event, control) {
        this.preventCustomKeys(event);
        if (!(control.value && control.value.label)) {
            control.patchValue(control.value ? control.value.trimLeft() : null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentGroupTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentGroupsComponent.prototype, "studentGroupTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StudentGroupsComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userStudentGroupForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentGroupsComponent.prototype, "userStudentGroupForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userStudentGroupRepForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentGroupsComponent.prototype, "userStudentGroupRepForm", void 0);
    StudentGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-groups',
            template: __webpack_require__(/*! ./student-groups.component.html */ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.html"),
            styles: [__webpack_require__(/*! ./student-groups.component.scss */ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_7__["StudentGroupService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], StudentGroupsComponent);
    return StudentGroupsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-40\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center \" class=\"px-20 pb-8\">\n    <div class=\"ml-20 p-8 text-uppercase font-size-18\" translate>studentDetails</div>\n    <div>\n      <button mat-raised-button color=\"primary\" translate (click)=\"back()\" class=\"text-uppercase\">{{'Back' | translate}}</button>\n    </div>\n  </div>\n\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-20 mb-20\">\n    <!-- <mat-divider></mat-divider> -->\n    <form [formGroup]=\"dropoutForm\" *ngIf=\"isDropoutOpen\" class=\"px-sm-32\"\n      [@animate]=\"{value:'*',params:{delay:'100ms',y:'-80px'}}\">\n      <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #action translate>Action</mat-label>\n          <mat-select formControlName=\"studentActionTypeId\" required>\n            <mat-option *ngFor=\"let action of dropoutActionTypeList\" [value]=\"action.id\">{{action.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='action.innerText'\n              [validationControl]=\"dropoutForm.controls.studentActionTypeId\" [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #reason translate>Reason</mat-label>\n          <input matInput formControlName=\"details\" (keyup)=\"preventSpace($event,'dropoutForm','details')\"\n            (blur)=\"trimTextBoxSpaces('dropoutForm','details')\" required>\n          <mat-error>\n            <app-validation [labelName]=\"reason.innerText\" [validationControl]=\"dropoutForm.controls.details\"\n              [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"mb-32 mt-12\">\n        <button mat-raised-button type=\"reset\" (click)=\"dropoutForm.reset();isDropoutOpen=false\" class=\"text-uppercase\">\n          {{'Cancel' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" (click)=\"onSubmitDropout()\" color=\"accent\" class=\"text-uppercase ml-20\">\n          {{'Submit' | translate}}\n        </button>\n      </div>\n    </form>\n\n    <form [formGroup]=\"studentRequestForm\" *ngIf=\"isStudentRequestOpen\" class=\"px-sm-32\"\n      [@animate]=\"{value:'*',params:{delay:'100ms',y:'-80px'}}\">\n      <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxLayoutAlign=\"start center\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #type translate>Request Type</mat-label>\n          <mat-select required formControlName=\"requestTypeId\">\n            <mat-option *ngFor=\"let type of requestTypeList\" [value]=\"type.id\">{{type.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='type.innerText' [validationControl]=\"studentRequestForm.controls.requestTypeId\"\n              [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n\n        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"pl-sm-24 pb-sm-20\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"image.value='';image.click()\">{{'Upload File' | translate}}</button>\n            <button *ngIf=\"studentRequestForm.value?.attachment?.fileName\" mat-icon-button type=\"button\">\n              <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"image.value='';clearImages()\">\n                highlight_off</mat-icon>\n            </button>\n          </div>\n          <input [accept]=\"AcceptImagesApplicationType\" id=\"image\" (change)=\"imgChanged(image.files)\" fxHide type=\"file\"\n            #image>\n          <div [style.visibility]=\"studentRequestForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n            class=\"pt-4 primary-300-fg font-size-12 text-left pr-36\">\n            {{studentRequestForm?.value?.attachment?.fileName}}\n          </div>\n        </div>\n      </div>\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-12\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"reject-comment\">\n          <mat-label translate #reasonn>Request Notes</mat-label>\n          <textarea (keyup)=\"preventSpace($event,'studentRequestForm','requestNote')\" (blur)=\"trimTextBoxSpaces('studentRequestForm','requestNote')\"\n            matInput formControlName=\"requestNote\" placeholder=\"Leave a comment\"></textarea>\n          <mat-error>\n            <app-validation [labelName]='reasonn.innerText'\n              [validationControl]=\"studentRequestForm.controls.requestNote\" [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-32 mt-12\">\n        <button mat-raised-button type=\"reset\" (click)=\"studentRequestForm.reset();isStudentRequestOpen=false\"\n          class=\"text-uppercase\">\n          {{'Cancel' | translate}}\n        </button>\n        <button mat-raised-button (click)=\"onSubmitRequest()\" type=\"submit\" color=\"accent\" class=\"text-uppercase ml-20\">\n          {{'Submit' | translate}}\n        </button>\n      </div>\n    </form>\n    <div *ngIf=\"isUpdateSiblingOpen\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'-80px'}}\">\n      <app-student-sibling [currentStudentId]=\"studentId\" (siblingIds)=\"siblingsDetails($event)\"></app-student-sibling>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"m-20\">\n        <button mat-raised-button type=\"button\" class=\"text-uppercase mx-16\" (click)=\"onSiblingCancel()\">\n          {{'Cancel' | translate}}\n        </button>\n        <button mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\" (click)=\"updateSiblingsSubmit()\"\n          [disabled]=\"siblingIds == undefined || siblingIds.length==0\">\n          {{'Update' | translate}}\n        </button>\n      </div>\n\n    </div>\n    <mat-divider *ngIf=\"studentSettings()\"></mat-divider>\n    <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\" class=\"p-24\">\n      <div fxLayout=\"column\" fxFlex=\"60\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n          <div class=\"profile-image border m-12 radius-10\" fxLayout=\"column\">\n            <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\"\n              alt=\"No Image\" />\n            <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\">No Image</div>\n          </div>\n\n          <div fxLayout=\"column\" fxFlex=\"100\">\n            <div class=\"h2 primary-900-fg-custom mb-16 break-word\">{{applicantInfo?.studentName}}</div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-140 py-4 primary-300-fg\" translate>Admission Number</div> : <div class=\"ml-24 break-word\">\n                {{applicantInfo?.admissionNumber ? applicantInfo.admissionNumber : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-140 py-4 primary-300-fg\" translate>mobilenumber</div> : <div class=\"ml-24 break-word\">\n                {{applicantInfo?.studentDetails?.mobileTel ? applicantInfo?.studentDetails?.mobileTel : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-140 py-4 primary-300-fg\" translate>email</div> : <div class=\"ml-24 break-word\">\n                {{applicantInfo?.studentDetails?.email1 ? applicantInfo?.studentDetails?.email1 : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-140 py-4 primary-300-fg\" translate>Class</div> : <div class=\"ml-24 break-word\">\n                {{applicantInfo?.className ? applicantInfo?.className : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-140 py-4 primary-300-fg\" translate>status</div> : <div class=\"ml-24 break-word\">\n                {{ applicantInfo?.statusName ? applicantInfo?.statusName  : \"-\"}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div fxLayout=\"column\" class=\"mr-sm-32\">\n        <button mat-mini-fab [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" (click)=\"$event.stopPropagation();\" [disabled]=\"isUpdateSiblingOpen || isStudentRequestOpen || isDropoutOpen\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        \n      </div>\n    </div>\n  </div>\n  <mat-menu #moreMenu=\"matMenu\">\n    <button mat-menu-item aria-label=\"remove\" *ngFor=\"let operation of operations\"\n      (click)=\"actions(operation.name)\">{{operation.name}}\n    </button>\n  </mat-menu>\n  <app-student-details [studentDetails]=\"applicantInfo\"></app-student-details>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtaW5mb3JtYXRpb24tZGV0YWlscy9zdHVkZW50LWluZm9ybWF0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: StudentInformationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInformationDetailsComponent", function() { return StudentInformationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/student-information-system/student-request.service */ "./src/app/service/student-information-system/student-request.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/student-information-system/student-action.service */ "./src/app/service/student-information-system/student-action.service.ts");
/* harmony import */ var app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/student-admissions-service/student-admission.service */ "./src/app/service/student-admissions-service/student-admission.service.ts");
/* harmony import */ var app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/student-information-system/sibling.service */ "./src/app/service/student-information-system/sibling.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");

















var StudentInformationDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentInformationDetailsComponent, _super);
    function StudentInformationDetailsComponent(router, route, _formBuilder, changeDetect, sanitizer, studentRequestService, dialogRef, commonService, studentAction, studentAdmissionService, siblingService, storeService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this._formBuilder = _formBuilder;
        _this.changeDetect = changeDetect;
        _this.sanitizer = sanitizer;
        _this.studentRequestService = studentRequestService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.studentAction = studentAction;
        _this.studentAdmissionService = studentAdmissionService;
        _this.siblingService = siblingService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.isValidate = true;
        _this.isDropoutOpen = false;
        _this.isStudentRequestOpen = false;
        _this.requestTypeList = [];
        _this.dropoutActionTypeList = [];
        _this.isUpdateSiblingOpen = false;
        _this.operations = [];
        return _this;
    }
    StudentInformationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropoutForm = this._formBuilder.group({
            studentActionTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            details: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)]]
        });
        this.studentRequestForm = this._formBuilder.group({
            requestTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            requestNote: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)]],
            attachment: [{ fileName: null, fileValue: null }]
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.studentId = params.id;
                _this.getStudentDetails();
            }
        });
        this.initiateStudentSiblingView();
    };
    StudentInformationDetailsComponent.prototype.initiateStudentSiblingView = function () {
        this.siblingStudentView = {
            studentId1: '',
            studentId2: null,
            studentId3: null,
            studentId4: null,
            studentId5: null
        };
    };
    StudentInformationDetailsComponent.prototype.getStudentDetails = function () {
        var _this = this;
        this.studentAdmissionService.studentDetails(this.studentId)
            .subscribe(function (res) {
            _this.getStudentApplicationDetails(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentInformationDetailsComponent.prototype.imgChanged = function (files) {
        if (this.checkFileSize(files[0], 'text|docx|pdf|image', 2097152)) {
            this.clearImages();
            return;
        }
        else if (files && files.length > 0) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(files[0]);
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.studentRequestForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: reader_1.result.split(',')[1] });
                that_1.changeDetect.detectChanges();
            };
        }
    };
    StudentInformationDetailsComponent.prototype.clearImages = function () {
        this.studentRequestForm.controls.attachment.patchValue({ fileName: null, fileValue: null });
    };
    StudentInformationDetailsComponent.prototype.onStudentRequest = function () {
        this.isStudentRequestOpen = true;
    };
    StudentInformationDetailsComponent.prototype.onDropout = function () {
        this.isDropoutOpen = true;
    };
    StudentInformationDetailsComponent.prototype.getStudentApplicationDetails = function (data) {
        var _this = this;
        this.applicantInfo = data.studentDetailsView;
        switch (data.studentDetailsView.statusCode) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].STUDENT_DROPOUT_STATUS:
            case app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].STUDENT_TC_REQUEST:
                this.operations = [{ name: 'Edit Student' },
                    { name: 'Student Request' }];
                break;
            default:
                this.operations = [{ name: 'Edit Student' },
                    { name: 'Update Sibling' },
                    { name: 'Student Request' },
                    { name: 'Dropout' }];
                break;
        }
        if (data.studentDetailsView.studentDetails.attachment) {
            this.profileImage = this.storeService.getFilePath(data.studentDetailsView.studentDetails.attachment.fileName);
        }
        this.studentRequestService.getStudentRequestTypes()
            .subscribe(function (res) { return _this.setStudentRequestTypes(res); });
        this.studentAction.getStudentRequestTypes()
            .subscribe(function (res) { return _this.setStudentActionTypes(res); });
    };
    StudentInformationDetailsComponent.prototype.setStudentActionTypes = function (data) {
        this.dropoutActionTypeList = data;
    };
    StudentInformationDetailsComponent.prototype.setStudentRequestTypes = function (data) {
        this.requestTypeList = data;
    };
    StudentInformationDetailsComponent.prototype.onSubmitDropout = function () {
        var _this = this;
        if (this.dropoutForm.valid) {
            this.studentDropout = {};
            this.studentDropout = this.dropoutForm.value;
            this.studentDropout.studentId = this.studentId;
            this.studentAction.createStudentRequest(this.studentDropout)
                .subscribe(function (res) { return _this.studentDropoutDetails(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    StudentInformationDetailsComponent.prototype.studentDropoutDetails = function (res) {
        this.isDropoutOpen = false;
        this.dropoutForm.reset();
        this.getStudentDetails();
        this.openSnackBar(res.messages.ResultMessage);
    };
    StudentInformationDetailsComponent.prototype.onSubmitRequest = function () {
        var _this = this;
        if (this.studentRequestForm.valid) {
            this.studentRequest = {};
            this.studentRequest = this.studentRequestForm.value;
            this.studentRequest.studentId = this.studentId;
            if (this.studentRequest.attachment && this.studentRequest.attachment.fileName == null && this.studentRequest.attachment.fileValue == null) {
                this.studentRequest.attachment = null;
            }
            this.studentRequestService.createStudentRequest(this.studentRequest)
                .subscribe(function (res) { return _this.studentRequestDetails(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    StudentInformationDetailsComponent.prototype.studentRequestDetails = function (res) {
        this.isStudentRequestOpen = false;
        this.studentRequestForm.reset();
        this.openSnackBar(res.messages.ResultMessage);
    };
    StudentInformationDetailsComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    StudentInformationDetailsComponent.prototype.onUpdateSibling = function () {
        this.isUpdateSiblingOpen = true;
    };
    StudentInformationDetailsComponent.prototype.onSiblingCancel = function () {
        this.isUpdateSiblingOpen = false;
    };
    StudentInformationDetailsComponent.prototype.updateSiblingsSubmit = function () {
        var _this = this;
        this.initiateStudentSiblingView();
        this.siblingStudentView.studentId1 = this.studentId;
        if (this.siblingIds.length <= app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].MAX_SIBLINGS) {
            for (var index = 0; index < this.siblingIds.length; index++) {
                if (this.siblingStudentView.studentId2 == null) {
                    this.siblingStudentView.studentId2 = this.siblingIds[index];
                }
                else if (this.siblingStudentView.studentId3 == null) {
                    this.siblingStudentView.studentId3 = this.siblingIds[index];
                }
                else if (this.siblingStudentView.studentId4 == null) {
                    this.siblingStudentView.studentId4 = this.siblingIds[index];
                }
                else if (this.siblingStudentView.studentId5 == null) {
                    this.siblingStudentView.studentId5 = this.siblingIds[index];
                }
            }
            this.siblingService.studentSibling(this.siblingStudentView).subscribe(function (res) { return _this.studentSiblingRes(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SIBLING_EXCEEDS, true);
        }
    };
    StudentInformationDetailsComponent.prototype.studentSiblingRes = function (data) {
        this.isUpdateSiblingOpen = false;
        this.studentRequestForm.reset();
        this.getStudentDetails();
        this.openSnackBar(data.messages.ResultMessage);
    };
    StudentInformationDetailsComponent.prototype.siblingsDetails = function (data) {
        this.siblingIds = data;
    };
    StudentInformationDetailsComponent.prototype.studentSettings = function () {
        return this.isStudentRequestOpen || this.isDropoutOpen || this.isUpdateSiblingOpen;
    };
    StudentInformationDetailsComponent.prototype.actions = function (action) {
        switch (action) {
            case 'Edit Student':
                this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Add_Edit_Student + '/' + this.studentId]);
                break;
            case 'Update Sibling':
                this.isDropoutOpen = false;
                this.isStudentRequestOpen = false;
                this.isUpdateSiblingOpen = true;
                break;
            case 'Student Request':
                this.studentRequestForm = this._formBuilder.group({
                    requestTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    requestNote: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)]],
                    attachment: [{ fileName: null, fileValue: null }]
                });
                this.isDropoutOpen = false;
                this.isStudentRequestOpen = true;
                this.isUpdateSiblingOpen = false;
                break;
            case 'Dropout':
                this.isUpdateSiblingOpen = false;
                this.isStudentRequestOpen = false;
                this.isDropoutOpen = true;
                break;
        }
    };
    StudentInformationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-information-details',
            template: __webpack_require__(/*! ./student-information-details.component.html */ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_16__["fuseAnimations"],
            providers: [app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__["StudentRequestService"], app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_12__["StudentActionService"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_13__["StudentAdmissionService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"], app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_14__["SiblingService"]],
            styles: [__webpack_require__(/*! ./student-information-details.component.scss */ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__["StudentRequestService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
            app_service_student_information_system_student_action_service__WEBPACK_IMPORTED_MODULE_12__["StudentActionService"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_13__["StudentAdmissionService"], app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_14__["SiblingService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], StudentInformationDetailsComponent);
    return StudentInformationDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-information-system-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-information-system-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentInformationSystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInformationSystemRoutingModule", function() { return StudentInformationSystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dropouts_dropouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropouts/dropouts.component */ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.ts");
/* harmony import */ var _student_requests_student_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-requests/student-requests.component */ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.ts");
/* harmony import */ var _student_database_student_database_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-database/student-database.component */ "./src/app/modules/academics/student-information-system/student-database/student-database.component.ts");
/* harmony import */ var _student_information_details_student_information_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-information-details/student-information-details.component */ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.ts");
/* harmony import */ var _student_sibling_student_sibling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-sibling/student-sibling.component */ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.ts");
/* harmony import */ var _student_groups_student_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-groups/student-groups.component */ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.ts");
/* harmony import */ var _student_group_details_student_group_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-group-details/student-group-details.component */ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.ts");
/* harmony import */ var _student_facility_assignment_student_facility_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-facility-assignment/student-facility-assignment.component */ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.ts");
/* harmony import */ var _student_course_selections_student_course_selections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student-course-selections/student-course-selections.component */ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.ts");
/* harmony import */ var _section_assignment_section_assignment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section-assignment/section-assignment.component */ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.ts");
/* harmony import */ var _student_rollnumber_management_student_rollnumber_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student-rollnumber-management/student-rollnumber-management.component */ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.ts");
/* harmony import */ var _shared_add_edit_student_admission_add_edit_student_admission_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/add-edit-student-admission/add-edit-student-admission.component */ "./src/app/shared/add-edit-student-admission/add-edit-student-admission.component.ts");
/* harmony import */ var _preview_student_request_preview_student_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./preview-student-request/preview-student-request.component */ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.ts");
















var routes = [
    { path: 'student-database', component: _student_database_student_database_component__WEBPACK_IMPORTED_MODULE_5__["StudentDatabaseComponent"], data: { title: 'Student Database' } },
    { path: 'student-requests', component: _student_requests_student_requests_component__WEBPACK_IMPORTED_MODULE_4__["StudentRequestsComponent"], data: { title: 'Student Requests' } },
    { path: 'dropouts', component: _dropouts_dropouts_component__WEBPACK_IMPORTED_MODULE_3__["DropoutsComponent"], data: { title: 'Student Dropouts' } },
    { path: 'student-database/student-details/:id', component: _student_information_details_student_information_details_component__WEBPACK_IMPORTED_MODULE_6__["StudentInformationDetailsComponent"], data: { title: 'Student Details' } },
    { path: 'student-siblings', component: _student_sibling_student_sibling_component__WEBPACK_IMPORTED_MODULE_7__["StudentSiblingComponent"], data: { title: 'Student Siblings' } },
    { path: 'student-groups', component: _student_groups_student_groups_component__WEBPACK_IMPORTED_MODULE_8__["StudentGroupsComponent"], data: { title: 'Student Groups' } },
    { path: 'student-groups/student-group-details', component: _student_group_details_student_group_details_component__WEBPACK_IMPORTED_MODULE_9__["StudentGroupDetailsComponent"], data: { title: 'Student Group Details' } },
    { path: 'student-groups/student-group-details/:id', component: _student_group_details_student_group_details_component__WEBPACK_IMPORTED_MODULE_9__["StudentGroupDetailsComponent"], data: { title: 'Student Group Details' } },
    { path: 'student-facility-assignment', component: _student_facility_assignment_student_facility_assignment_component__WEBPACK_IMPORTED_MODULE_10__["StudentFacilityAssignmentComponent"], data: { title: 'Student facility Assignment' } },
    { path: 'student-course-selections', component: _student_course_selections_student_course_selections_component__WEBPACK_IMPORTED_MODULE_11__["StudentCourseSelectionsComponent"], data: { title: 'Student Course Selections' } },
    { path: 'section-assignment', component: _section_assignment_section_assignment_component__WEBPACK_IMPORTED_MODULE_12__["SectionAssignmentComponent"], data: { title: 'Section Assignment' } },
    { path: 'student-rollnumber-management', component: _student_rollnumber_management_student_rollnumber_management_component__WEBPACK_IMPORTED_MODULE_13__["StudentRollnumberManagementComponent"], data: { title: 'Roll Number Management' } },
    { path: 'student-database/add-edit-student-admission', component: _shared_add_edit_student_admission_add_edit_student_admission_component__WEBPACK_IMPORTED_MODULE_14__["AddEditStudentAdmissionComponent"], data: { title: 'Add Student Admission' } },
    { path: 'student-database/add-edit-student-admission/:studentId', component: _shared_add_edit_student_admission_add_edit_student_admission_component__WEBPACK_IMPORTED_MODULE_14__["AddEditStudentAdmissionComponent"], data: { title: 'Edit Student Admission' } },
    { path: 'preview-certificate/:id', component: _preview_student_request_preview_student_request_component__WEBPACK_IMPORTED_MODULE_15__["PreviewStudentRequestComponent"], data: { title: 'Approve Student Request' } }
];
var StudentInformationSystemRoutingModule = /** @class */ (function () {
    function StudentInformationSystemRoutingModule() {
    }
    StudentInformationSystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentInformationSystemRoutingModule);
    return StudentInformationSystemRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-information-system.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-information-system.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: StudentInformationSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInformationSystemModule", function() { return StudentInformationSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_information_system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-information-system-routing.module */ "./src/app/modules/academics/student-information-system/student-information-system-routing.module.ts");
/* harmony import */ var _student_requests_student_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-requests/student-requests.component */ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.ts");
/* harmony import */ var _dropouts_dropouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropouts/dropouts.component */ "./src/app/modules/academics/student-information-system/dropouts/dropouts.component.ts");
/* harmony import */ var _student_database_student_database_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-database/student-database.component */ "./src/app/modules/academics/student-information-system/student-database/student-database.component.ts");
/* harmony import */ var _student_information_details_student_information_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-information-details/student-information-details.component */ "./src/app/modules/academics/student-information-system/student-information-details/student-information-details.component.ts");
/* harmony import */ var _academics_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../academics.module */ "./src/app/modules/academics/academics.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _student_groups_student_groups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student-groups/student-groups.component */ "./src/app/modules/academics/student-information-system/student-groups/student-groups.component.ts");
/* harmony import */ var app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/student-group/student-group.service */ "./src/app/service/student-group/student-group.service.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _student_group_details_student_group_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./student-group-details/student-group-details.component */ "./src/app/modules/academics/student-information-system/student-group-details/student-group-details.component.ts");
/* harmony import */ var app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/service/student-admissions-service/student-application.service */ "./src/app/service/student-admissions-service/student-application.service.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _student_sibling_student_sibling_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./student-sibling/student-sibling.component */ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.ts");
/* harmony import */ var _student_facility_assignment_student_facility_assignment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student-facility-assignment/student-facility-assignment.component */ "./src/app/modules/academics/student-information-system/student-facility-assignment/student-facility-assignment.component.ts");
/* harmony import */ var _student_course_selections_student_course_selections_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./student-course-selections/student-course-selections.component */ "./src/app/modules/academics/student-information-system/student-course-selections/student-course-selections.component.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_student_information_system_student_course_selection_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/service/student-information-system/student-course-selection.service */ "./src/app/service/student-information-system/student-course-selection.service.ts");
/* harmony import */ var _section_assignment_section_assignment_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./section-assignment/section-assignment.component */ "./src/app/modules/academics/student-information-system/section-assignment/section-assignment.component.ts");
/* harmony import */ var app_service_student_information_system_students_section_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/service/student-information-system/students-section-service */ "./src/app/service/student-information-system/students-section-service.ts");
/* harmony import */ var _student_rollnumber_management_student_rollnumber_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./student-rollnumber-management/student-rollnumber-management.component */ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.ts");
/* harmony import */ var app_service_academic_service_api_rollnumber_assignment_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! app/service/academic-service/api/rollnumber-assignment.service */ "./src/app/service/academic-service/api/rollnumber-assignment.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var app_service_academic_service_api_studentsFacility_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! app/service/academic-service/api/studentsFacility.service */ "./src/app/service/academic-service/api/studentsFacility.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! app/service/general/api/school-facility.service */ "./src/app/service/general/api/school-facility.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var _service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var _preview_student_request_preview_student_request_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./preview-student-request/preview-student-request.component */ "./src/app/modules/academics/student-information-system/preview-student-request/preview-student-request.component.ts");










































var StudentInformationSystemModule = /** @class */ (function () {
    function StudentInformationSystemModule() {
    }
    StudentInformationSystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_requests_student_requests_component__WEBPACK_IMPORTED_MODULE_4__["StudentRequestsComponent"], _dropouts_dropouts_component__WEBPACK_IMPORTED_MODULE_5__["DropoutsComponent"],
                _student_database_student_database_component__WEBPACK_IMPORTED_MODULE_6__["StudentDatabaseComponent"], _student_information_details_student_information_details_component__WEBPACK_IMPORTED_MODULE_7__["StudentInformationDetailsComponent"],
                _student_groups_student_groups_component__WEBPACK_IMPORTED_MODULE_19__["StudentGroupsComponent"], _student_group_details_student_group_details_component__WEBPACK_IMPORTED_MODULE_22__["StudentGroupDetailsComponent"], _student_sibling_student_sibling_component__WEBPACK_IMPORTED_MODULE_25__["StudentSiblingComponent"], _student_facility_assignment_student_facility_assignment_component__WEBPACK_IMPORTED_MODULE_26__["StudentFacilityAssignmentComponent"], _student_rollnumber_management_student_rollnumber_management_component__WEBPACK_IMPORTED_MODULE_32__["StudentRollnumberManagementComponent"],
                _section_assignment_section_assignment_component__WEBPACK_IMPORTED_MODULE_30__["SectionAssignmentComponent"], _student_course_selections_student_course_selections_component__WEBPACK_IMPORTED_MODULE_27__["StudentCourseSelectionsComponent"], _preview_student_request_preview_student_request_component__WEBPACK_IMPORTED_MODULE_41__["PreviewStudentRequestComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _student_information_system_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentInformationSystemRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_16__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_17__["Ng2TelInputModule"],
                _academics_module__WEBPACK_IMPORTED_MODULE_8__["AcademicsModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["SatDatepickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_21__["FuseMaterialColorPickerModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                    multi: true
                },
                app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_18__["GradeSetupService"], app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_20__["StudentGroupService"], app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_23__["StudentApplicationService"], app_service_student_information_system_students_section_service__WEBPACK_IMPORTED_MODULE_31__["StudentSectionsService"],
                app_service_student_group_student_group_service__WEBPACK_IMPORTED_MODULE_20__["StudentGroupService"], app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_23__["StudentApplicationService"], app_service_academic_service_api_rollnumber_assignment_service__WEBPACK_IMPORTED_MODULE_33__["RollNumberAssignmentService"],
                app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_28__["ClassTimetableService"], app_service_academic_service_api_studentsFacility_service__WEBPACK_IMPORTED_MODULE_35__["StudentsFacilityService"], app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_36__["FeeTypeService"], app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_37__["SchoolFacilityService"],
                app_service_student_information_system_student_course_selection_service__WEBPACK_IMPORTED_MODULE_29__["StudentCourseSelectionService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_38__["ClassesConfigService"], _service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_39__["StatusService"],
                app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_40__["SchoolAcademicSessionService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [],
        })
    ], StudentInformationSystemModule);
    return StudentInformationSystemModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-requests/student-requests.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]=\"closeForm\" \n  (getTableData)='tableData($event)' (rowBasedAction)='actions($event)' (openAddForm)='openForm()'>\n</app-table>"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-requests/student-requests.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtcmVxdWVzdHMvc3R1ZGVudC1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-requests/student-requests.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StudentRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRequestsComponent", function() { return StudentRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/student-information-system/student-request.service */ "./src/app/service/student-information-system/student-request.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");











var StudentRequestsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentRequestsComponent, _super);
    function StudentRequestsComponent(dialogRef, router, studentRequestService, commonService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.router = router;
        _this.studentRequestService = studentRequestService;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentRequestsComponent';
        _this.preSelectIds = [];
        _this.setColumnHeaders();
        _this.initializeFilterView();
        _this.initializeTableSettings();
        return _this;
    }
    StudentRequestsComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getStudentRequests();
    };
    StudentRequestsComponent.prototype.getStudentRequests = function () {
        var _this = this;
        this.studentRequestService.studentRequestGrid(this.filterViewModel.studentRequestTypeIds, this.filterViewModel.studentName, this.filterViewModel.statusIds, this.filterViewModel.admissionNumber, this.filterViewModel.requestNotes, this.filterViewModel.requestDateBegin, this.filterViewModel.requestDateEnd, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.failedRecords, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
            .subscribe(function (res) {
            _this.setRequestsResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentRequestsComponent.prototype.setRequestsResult = function (data) {
        var _this = this;
        if (!data.pagedStudentRequestViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedStudentRequestViewModels.list;
            this.totalRowsCount = data.pagedStudentRequestViewModels.totalItems;
            this.pageCnt = data.pagedStudentRequestViewModels.totalPages;
            this.rows.forEach(function (e) {
                e.requestDate = (e.requestDate == null) ? null : _this.commonService.customDateFormat(e.requestDate, _this.getSchoolDateFormat()).date;
                e.operations = e.attachment ? [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_REQUEST_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_REQUEST
                    }
                ] : [];
                if (e.attachmentResponseAttachment) {
                    e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_RESPONSE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_RESPONSE
                    });
                }
                if (e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STUDENT_REQUEST_PENDING_STATUS) {
                    e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APPROVE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APPROVE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APPROVE
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].REJECT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].REJECT_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].REJECT
                    });
                }
            });
            this.preSelectIds = [];
        }
        if (data.pagedStudentRequestViewModels) {
            this.filterViewModel.pageNumber = data.pagedStudentRequestViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Student Requests',
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: false
                },
                infoButton: {
                    required: true,
                    text: 'Student Requests'
                }
            }
        };
    };
    StudentRequestsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    StudentRequestsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'requestDate', header: 'Request Date', sort: true },
            { field: 'requestTypeName', header: 'Request Type', sort: true },
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'admissionNumber', header: 'admissionNumber', sort: true },
            { field: 'requestNote', header: 'Request Notes', sort: true },
            { field: 'statusName', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    StudentRequestsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Student Requests',
            isPaginationRequired: true,
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    StudentRequestsComponent.prototype.actions = function (operationData) {
        var _this = this;
        switch (operationData.operation.toLowerCase()) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APPROVE.toLowerCase():
                {
                    var dialogRef = this.dialogMethod(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APPROVE_STUDENT_REQUEST, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
                    dialogRef.afterClosed().subscribe(function (action) {
                        if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                            _this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"]._Preview_Certificate + operationData.clickedRow.id]);
                        }
                    });
                }
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].REJECT.toLowerCase():
                {
                    var dialogRef = this.dialogMethod(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].REJECT_STUDENT_REQUEST, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
                    dialogRef.afterClosed().subscribe(function (action) {
                        if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                            _this.approveStudentModel = {
                                id: operationData.clickedRow.id,
                                attachment: operationData.clickedRow.attachment
                            };
                            _this.studentRequestService.rejectStudentRequest(_this.approveStudentModel)
                                .subscribe(function (res) { return _this.studentRequestResponse(res); });
                        }
                    });
                }
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_REQUEST.toLowerCase():
                {
                    // Download the Certificate or open it inthe new Tab
                    if (operationData.clickedRow.attachment != null) {
                        window.open(this.storeService.getFilePath(operationData.clickedRow.attachment.fileName));
                    }
                    else {
                        this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                        return;
                    }
                }
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_RESPONSE.toLowerCase():
                {
                    // Download the Certificate or open it inthe new Tab
                    if (operationData.clickedRow.attachmentResponseAttachment != null) {
                        window.open(this.storeService.getFilePath(operationData.clickedRow.attachmentResponseAttachment.fileName));
                    }
                    else {
                        this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                        return;
                    }
                }
                break;
        }
    };
    StudentRequestsComponent.prototype.studentRequestResponse = function (res) {
        this.getStudentRequests();
        this.openSnackBar(res.messages.ResultMessage);
    };
    StudentRequestsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getStudentRequests();
    };
    StudentRequestsComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    StudentRequestsComponent.prototype.openForm = function () {
        this.closeForm = false;
    };
    StudentRequestsComponent.prototype.onCancel = function (event) {
        this.closeForm = event;
        this.getStudentRequests();
    };
    StudentRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-requests',
            template: __webpack_require__(/*! ./student-requests.component.html */ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.html"),
            providers: [app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__["StudentRequestService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]],
            styles: [__webpack_require__(/*! ./student-requests.component.scss */ "./src/app/modules/academics/student-information-system/student-requests/student-requests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            app_service_student_information_system_student_request_service__WEBPACK_IMPORTED_MODULE_8__["StudentRequestService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], StudentRequestsComponent);
    return StudentRequestsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-32\">\n    <div class=\"px-16 font-size-18 text-uppercase\"><span translate>Roll Number Management</span></div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-20\">\n\n      <button class=\"text-uppercase pr-sm-20\" mat-raised-button color=\"accent\" (click)=\" assignRollNumber()\"\n        [disabled]=\"isValid\">{{'Assign RollNumber' | translate}}</button>\n      <button mat-button type='button' (click)=\"getHelpText('Roll Number Management')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <mat-divider></mat-divider>\n    <form [formGroup]=\"studentRollFormGroup\" fxLayout=\"column\" name=\"form\" (ngSubmit)=\"assignRollNumber()\"\n      autocomplete=\"off\" #form=\"ngForm\" class=\"p-20\">\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n        <mat-form-field  *ngIf=\"isSchoolBoard\" appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n        fxFlexFil>\n          <mat-label #board translate>Board</mat-label>\n          <mat-select formControlName=\"boardId\" (selectionChange)=\"onBoardSelect($event)\" required>\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n              {{board.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n              <app-validation [labelName]=\"board.innerText\" [validationControl]=\"studentRollFormGroup.controls.boardId\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select required name=\"classId\" formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\" [disabled]=classDisabled>\n            <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field *ngIf=\"studentRollFormGroup.value.boardId && studentRollFormGroup.value.classId\" appearance=\"outline\" class=\"pr-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select required name=\"sectionId\" formControlName=\"sectionId\" (selectionChange)=\"onSelectSection($event)\">\n            <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section.value\">\n              {{section.label}}\n            </mat-option>\n          </mat-select>\n\n        </mat-form-field>\n        <mat-checkbox  (change)=\"show($event)\" [disabled]=\"isCheck\" [checked] =\"isDisable\" class=\"pb-20\"><span translate>Sorting Options</span></mat-checkbox>\n      </div>\n      <mat-label *ngIf=\"sort\"  class=\"text-center\"  translate>Sort Order Fields</mat-label>\n    </form>\n    <!-- <div>\n      \n    </div> -->\n    <div cdkDropList cdkDropListOrientation=\"horizontal\" *ngIf=\"isSortOrderFields\" class=\"pb-24 h-drag\" fxLayout=\"row\"\n      fxLayoutAlign=\"center center\" (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"p-16 mx-12 primary-50-bg radius-5 fuse-black-fg cursor-move\" fxLayoutAlign=\"center center\"\n        *ngFor=\"let sortOrder of sortOrderFields\" cdkDrag>\n        <mat-icon class=\"mr-8\">drag_indicator</mat-icon><span translate>{{sortOrder.header}}</span>\n      </div>\n    </div>\n\n    <!-- Coustom Dialog for Roll Number -->\n    <ng-template #rollNumberTemplate>\n      <form [formGroup]=\"RollNumberForm\" (ngSubmit)=\"rollNumberAssign(RollNumberForm)\" #RollNumber=\"ngForm\"\n        fxLayout=\"column\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n          <mat-label #RollNumber translate>Roll Number Start From</mat-label>\n          <input autocomplete=\"off\" matInput formControlName=\"RollNumber\" [(ngModel)]=\"rollNumberSeq\" required\n          (keyup)=\"preventSpace($event,'RollNumberForm','RollNumber')\">\n\n          <mat-error>\n            <app-validation [labelName]=\"RollNumber.innerText\" [validationControl]=\"RollNumberForm.controls.RollNumber\"\n              class=\"error-msg messages text-left text-danger\" [doValidate]=\"validateForm\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n          <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"onCancel()\" matDialogClose>{{'Cancel' | translate}}</button>\n          <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{'Submit' | translate}}</button>\n        </div>\n      </form>\n    </ng-template>\n    <!-- End Coustom Dialog -->\n\n\n    <mat-divider></mat-divider>\n\n  \n  </div>\n</div>\n<app-table *ngIf=\"studentRollFormGroup.valid\" [settings]=\"tabSettings\" (getTableData)='loadStudents()'>\n</app-table>\n<app-custom-card *ngIf=\"!studentRollFormGroup.valid\" [title]=\"'Student Roll Number Details'\" [inputMessage]=\"'Please Select Board Class And Section'\">\n</app-custom-card>\n"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-drag {\n  overflow: auto; }\n  .h-drag .cursor-move {\n    cursor: move;\n    min-width: 150px;\n    display: -webkit-box;\n    display: flex; }\n  .cdk-drag-placeholder {\n  opacity: 0; }\n  .cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtcm9sbG51bWJlci1tYW5hZ2VtZW50L3N0dWRlbnQtcm9sbG51bWJlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBR0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQUdmO0VBQ0UsVUFBVSxFQUFBO0VBR1o7RUFDRSxzRUFBc0Q7RUFBdEQsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtcm9sbG51bWJlci1tYW5hZ2VtZW50L3N0dWRlbnQtcm9sbG51bWJlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtZHJhZ3tcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC5jdXJzb3ItbW92ZXtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: StudentRollnumberManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRollnumberManagementComponent", function() { return StudentRollnumberManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_service_academic_service_api_rollnumber_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/rollnumber-assignment.service */ "./src/app/service/academic-service/api/rollnumber-assignment.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");












var StudentRollnumberManagementComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentRollnumberManagementComponent, _super);
    function StudentRollnumberManagementComponent(dialog, commonService, gradeSetupService, _classSectionService, _rollNumberAssignService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this._classSectionService = _classSectionService;
        _this._rollNumberAssignService = _rollNumberAssignService;
        _this.snackBar = snackBar;
        _this.rollNumberSeq = 1;
        // variables declarations
        _this.classNames = [];
        _this.sectionNames = [];
        _this.currentComponentName = 'StudentRollnumberManagementComponent';
        _this.doValidate = true;
        _this.isSortOrderFields = false;
        _this.isDisable = false;
        _this.defaultSortOrder = [];
        _this.boards = [];
        _this.schoolBoardsList = [];
        _this.isCheck = true;
        _this.sort = false;
        _this.sortOrderFields = [
            { field: 'FirstName', header: 'First Name' },
            { field: 'LastName', header: 'Last Name' },
            { field: 'AdmissionNumber', header: 'Admission Number' },
            { field: 'Gender', header: 'Gender' },
            { field: 'GroupName', header: 'Group Name' },
        ];
        _this.isValid = true;
        _this.showBtn = false;
        _this.studentDetailsView = {
            schoolBoardId: 0,
            classId: 0,
            sectionId: 0,
            rollNumberSortBy: _this.defaultSortOrder.map(function (x) { return x.field; }),
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].CUSTOM_PAGESIZE,
        };
        return _this;
    }
    StudentRollnumberManagementComponent.prototype.ngOnInit = function () {
        this.isCheck = true;
        this.studentRollFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.cols = [
            { field: 'rollNumber', header: 'currentrollnumber', sort: false },
            { field: 'firstName', header: 'firstname', sort: false },
            { field: 'lastName', header: 'lastname', sort: false },
            { field: 'admissionNumber', header: 'admissionNumber', sort: false },
            { field: 'gender', header: 'gender', sort: false },
            { field: 'groupName', header: 'groupName', sort: false },
        ];
        // / initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.studentDetailsView,
            componentName: this.currentComponentName,
            tablename: 'Student Roll Number Details',
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };
        this.rollNumberView = {
            classId: 0,
            sectionId: 0,
            isRearrange: 0,
            startingNumber: 0
        };
        this.RollNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            RollNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].NUMBER_PATTERN),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].PREVENT_SPACES), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(4)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        var localData = this.getModelComponent(this.currentComponentName);
        if (localData) {
            this.studentDetailsView = localData;
            this.studentRollFormGroup.patchValue(localData);
            this.studentRollFormGroup.patchValue({
                boardId: localData.schoolBoardId
            });
            this.boardId = localData.schoolBoardId;
            this.onSelectClass({ value: localData.classId }, true);
            this.onSelectSection({ value: localData.sectionId });
        }
        this.schoolBoards();
    };
    StudentRollnumberManagementComponent.prototype.drop = function (event) {
        this.defaultSortOrder = this.sortOrderFields;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["moveItemInArray"])(this.defaultSortOrder, event.previousIndex, event.currentIndex);
        this.loadStudents();
    };
    // Get SChool Boards
    StudentRollnumberManagementComponent.prototype.schoolBoards = function () {
        var _this = this;
        this.boards = [];
        this.isSchoolBoard = true;
        this.commonService.schoolAcademicBoards().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.boards.push({
                            label: element.name,
                            value: element.id
                        });
                        _this.schoolBoardsList = _this.boards;
                    });
                    if (_this.studentRollFormGroup.value.boardId) {
                        _this.onBoardSelect({ value: _this.studentRollFormGroup.value.boardId }, true);
                    }
                    else {
                        _this.setDefaultBoard();
                    }
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentRollnumberManagementComponent.prototype.onBoardSelect = function (data, manual) {
        if (manual === void 0) { manual = false; }
        this.isSortOrderFields = false;
        this.isCheck = true;
        this.sort = false;
        if (!manual) {
            this.rows = [];
            this.loadGridData();
        }
        this.isValid = true;
        this.isDisable = false;
        this.boardId = data.value;
        this.loadClassesList(this.boardId);
        if (!manual) {
            this.studentRollFormGroup.controls.classId.patchValue('');
        }
        else {
            this.isCheck = false;
            this.isValid = false;
        }
        this.sortOrderFields = [
            { field: 'FirstName', header: 'First Name' },
            { field: 'LastName', header: 'Last Name' },
            { field: 'AdmissionNumber', header: 'Admission Number' },
            { field: 'Gender', header: 'Gender' },
            { field: 'GroupName', header: 'Group Name' },
        ];
    };
    StudentRollnumberManagementComponent.prototype.loadClassesList = function (boardId) {
        var _this = this;
        this.classNames = [];
        this._classSectionService.schoolAcademicClasses(boardId).subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.classNames.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    StudentRollnumberManagementComponent.prototype.onSelectClass = function (data, manual) {
        var _this = this;
        if (manual === void 0) { manual = false; }
        this.isSortOrderFields = false;
        this.isCheck = true;
        this.sort = false;
        if (!manual) {
            this.studentRollFormGroup.controls.sectionId.patchValue('');
        }
        this.classDisabled = false;
        this.isValid = true;
        this.isDisable = false;
        if (!manual) {
            this.rows = [];
            this.loadGridData();
        }
        this.rollNumberView.classId = data.value;
        this.sectionDisabled = true;
        this.sectionNames = [];
        this.classId = data.value;
        this.gradeSetupService.schoolAcademicClassSections(this.boardId, data.value).subscribe(function (response) {
            if (response.listViews.length) {
                _this.sectionDisabled = false;
                response.listViews.forEach(function (element) {
                    _this.sectionNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        });
        this.defaultSortOrder = this.sortOrderFields;
    };
    // End
    StudentRollnumberManagementComponent.prototype.onSelectSection = function (data) {
        this.isSortOrderFields = false;
        this.isCheck = true;
        this.sort = false;
        this.isDisable = false;
        this.isValid = false;
        this.doValidate = true;
        this.sectionId = data.value;
        this.rollNumberView.sectionId = data.value;
        this.loadStudents();
    };
    // response of student group details
    StudentRollnumberManagementComponent.prototype.getResponse = function (data) {
        this.rows = [];
        this.custRowsPerPageOptions = [];
        if (!data.studentRollNumberListViewModel) {
            this.isSortOrderFields = false;
            this.isValid = true;
        }
        else {
            this.isCheck = false;
            this.isValid = false;
            this.rows = data.studentRollNumberListViewModel.list;
            if (this.rows.some(function (x) { return x.rollNumber !== null; })) {
                this.assignTxt = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].RE_ASSIGN;
            }
            else {
                this.assignTxt = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ASSIGN;
            }
            this.totalItems = data.studentRollNumberListViewModel.totalItems;
        }
        if (data.studentRollNumberListViewModel) {
            this.studentDetailsView.pageNumber = data.studentRollNumberListViewModel.pageNumber;
        }
        this.loadGridData();
    };
    StudentRollnumberManagementComponent.prototype.loadGridData = function () {
        this.tabSettings = {
            columns: this.cols,
            model: this.studentDetailsView,
            rows: this.rows,
            componentName: this.currentComponentName,
            tablename: 'Student Roll Number Details',
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
        };
    };
    StudentRollnumberManagementComponent.prototype.loadStudents = function () {
        var _this = this;
        this.studentDetailsView.schoolBoardId = this.boardId;
        this.studentDetailsView.classId = this.classId;
        this.studentDetailsView.sectionId = this.sectionId;
        this.studentDetailsView.rollNumberSortBy = this.defaultSortOrder.map(function (x) { return x.field; });
        this.setModelDataTableComponent(this.currentComponentName, this.studentDetailsView);
        this._rollNumberAssignService.getStudent(this.studentDetailsView.schoolBoardId, this.studentDetailsView.classId, this.studentDetailsView.sectionId, this.studentDetailsView.rollNumberSortBy, this.studentDetailsView.sortOrder, this.studentDetailsView.pageNumber, this.studentDetailsView.pageSize).subscribe(function (response) {
            _this.getResponse(response);
        });
    };
    StudentRollnumberManagementComponent.prototype.assignRollNumber = function () {
        var _this = this;
        if (this.classId !== null && this.sectionId !== null) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                width: '400px',
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].ASSIGN_ROLLNUMBER), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                    var params = { assign: _this.assignTxt };
                    var confirmDialog = _this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                        width: '400px',
                        data: {
                            text: _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].DIALOG_CONFIRMATION, params), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES
                        },
                    });
                    confirmDialog.afterClosed().subscribe(function (response) {
                        if (response === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                            var customInputDialogRef = _this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                                width: '300px',
                                data: { template: _this.rollNumberTemplate, inputData: _this.rollNumberSeq },
                            });
                            customInputDialogRef.afterClosed().subscribe(function (result) {
                                if (result !== undefined || result !== '') {
                                    _this.rollNumberView.isRearrange = 1;
                                    _this.rollNumberView.startingNumber = 0;
                                }
                            });
                        }
                        else {
                            _this.dialog.closeAll();
                            if (response === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO) {
                                _this.rollNumber();
                                _this.rollNumberView.isRearrange = 0;
                            }
                        }
                    });
                    _this.rollNumberSeq = 1;
                }
            });
        }
    };
    StudentRollnumberManagementComponent.prototype.rollNumber = function () {
        var _this = this;
        this.validateForm = true;
        this.rollNumberView.isRearrange = 0;
        this.rollNumberView.rollNumberSortBy = this.defaultSortOrder.map(function (x) { return x.field; });
        this._rollNumberAssignService.assigningRollNUmber(this.rollNumberView).subscribe(function (res) { return _this.response(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentRollnumberManagementComponent.prototype.rollNumberAssign = function (RollNumberForm) {
        var _this = this;
        this.validateForm = true;
        if (RollNumberForm.invalid) {
            return;
        }
        this.rollNumberView.startingNumber = this.RollNumberForm.value.RollNumber;
        this.rollNumberView.isRearrange = 1;
        this.rollNumberView.rollNumberSortBy = this.defaultSortOrder.map(function (x) { return x.field; });
        this._rollNumberAssignService.assigningRollNUmber(this.rollNumberView).subscribe(function (res) { return _this.response(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentRollnumberManagementComponent.prototype.response = function (data) {
        this.dialog.closeAll();
        this.loadStudents();
        this.openSnackBar(data.messages.ResultMessage);
    };
    StudentRollnumberManagementComponent.prototype.show = function (event) {
        this.defaultSortOrder = [];
        this.isSortOrderFields = false;
        this.sort = false;
        event.checked = !(event.checked);
        if (event.checked === false) {
            this.isSortOrderFields = true;
            this.defaultSortOrder = this.sortOrderFields;
            this.sort = true;
        }
        this.isDisable = true;
        this.loadStudents();
    };
    StudentRollnumberManagementComponent.prototype.onCancel = function () {
        this.RollNumberForm.reset();
        this.validateForm = false;
        this.rollNumberSeq = 1;
    };
    StudentRollnumberManagementComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('studentRollFormGroup', 'boardId', this.schoolBoardsList[0].value);
        this.onBoardSelect(this.schoolBoardsList[0]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rollNumberTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentRollnumberManagementComponent.prototype, "rollNumberTemplate", void 0);
    StudentRollnumberManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-rollnumber-management',
            template: __webpack_require__(/*! ./student-rollnumber-management.component.html */ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.html"),
            styles: [__webpack_require__(/*! ./student-rollnumber-management.component.scss */ "./src/app/modules/academics/student-information-system/student-rollnumber-management/student-rollnumber-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_11__["GradeSetupService"],
            app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_3__["ClassSectionService"],
            app_service_academic_service_api_rollnumber_assignment_service__WEBPACK_IMPORTED_MODULE_4__["RollNumberAssignmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], StudentRollnumberManagementComponent);
    return StudentRollnumberManagementComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form  [formGroup]=\"siblingSearchForm\"  (ngSubmit)=\"siblingSearch(siblingSearchForm)\" >\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"p-20 border-bottom\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\n        <mat-label #studentName translate>Student Name</mat-label>\n        <input (keyup)=\"preventSpace($event,'siblingSearchForm','studentName')\" matInput  #studentName formControlName=\"studentName\" autocomplete=\"off\">\n        <mat-error>\n          <app-validation [labelName]='studentName.innerText' [validationControl]=\"siblingSearchForm.controls.studentName\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n        class=\"px-sm-24\">\n        <mat-label translate #admissionNumber>admissionNumber</mat-label>\n        <input matInput #studentName (keyup)=\"preventSpace($event,'siblingSearchForm','admissionNumber')\"  formControlName=\"admissionNumber\">\n      </mat-form-field>\n      <div fxLayout=\"row\" class=\"mb-20\">\n        <button mat-raised-button\n      type=\"submit\" color=\"accent\" class=\"text-uppercase my-16\">\n      {{'search' | translate}}\n    </button>\n      </div>\n      \n    </div>\n  </form>\n<app-table [settings]=\"tabSettings\" (getTableData)='tableData($event)' \n    (selectedRows)='selectedRows($event)'>\n  </app-table>\n\n"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtaW5mb3JtYXRpb24tc3lzdGVtL3N0dWRlbnQtc2libGluZy9zdHVkZW50LXNpYmxpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentSiblingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSiblingComponent", function() { return StudentSiblingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/student-information-system/sibling.service */ "./src/app/service/student-information-system/sibling.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");








var StudentSiblingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentSiblingComponent, _super);
    function StudentSiblingComponent(commonService, siblingService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.siblingService = siblingService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentSiblingComponent';
        _this.siblingIds = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    StudentSiblingComponent.prototype.ngOnInit = function () {
        this.siblingSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            admissionNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        // Student Sibling Columns
        this.studentCols = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'className', header: 'Class', sort: true, },
            { field: 'sectionName', header: 'Section', sort: true },
            { field: 'admissionNumber', header: 'admissionNumber', sort: true },
            { field: 'dateOfBirth', header: 'dateofbirth', sort: true },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.studentCols,
            model: this.studentSearchView,
            componentName: this.currentComponent,
            isSelectRowRequired: true,
            padding: true,
            hideHeader: true,
        };
        this.studentSearchView = {
            sortBy: 'Name',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE
        };
        this.siblingSearch(this.studentSearchView);
    };
    StudentSiblingComponent.prototype.tableData = function (_event) {
        this.studentSearchView = _event;
        this.siblingSearch(this.studentSearchView);
    };
    StudentSiblingComponent.prototype.siblingSearch = function (event) {
        var _this = this;
        this.validate = true;
        this.studentSearchView.studentName = this.siblingSearchForm.value.studentName;
        this.studentSearchView.admissionNumber = this.siblingSearchForm.value.admissionNumber;
        this.siblingService.studentDetails(this.studentSearchView.studentName, this.studentSearchView.admissionNumber, this.currentStudentId, this.studentSearchView.sortBy, this.studentSearchView.sortOrder, this.studentSearchView.pageNumber, this.studentSearchView.pageSize).subscribe(function (responce) {
            return _this.studentDetailsRes(responce);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentSiblingComponent.prototype.studentDetailsRes = function (data) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (!data.siblingStudentDetailsView) {
            this.rows = [];
            this.studentIds = [];
            this.siblingIds.emit(this.studentIds);
        }
        else {
            this.rows = data.siblingStudentDetailsView.list;
            this.studentIds = [];
            this.rows.forEach(function (row) {
                row.dateOfBirth = _this.getFormattedDateBySchoolDateFormat(row.dateOfBirth);
                if (row.isCheck) {
                    _this.studentIds.push(row.id);
                }
            });
            this.siblingIds.emit(this.studentIds);
            this.totalItems = data.siblingStudentDetailsView.totalItems;
        }
        if (data.siblingStudentDetailsView) {
            this.studentSearchView.pageNumber = data.siblingStudentDetailsView.pageNumber;
        }
        this.tabSettings = {
            columns: this.studentCols,
            model: this.studentSearchView,
            rows: this.rows,
            componentName: this.currentComponent,
            isSelectRowRequired: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            padding: true,
            hideHeader: true,
        };
    };
    // Selected Student siblings Ids
    StudentSiblingComponent.prototype.selectedRows = function (data) {
        this.studentIds = [];
        for (var index = 0; index < data.length; index++) {
            this.studentIds.push(data[index].id);
        }
        this.siblingIds.emit(this.studentIds);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StudentSiblingComponent.prototype, "siblingIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentSiblingComponent.prototype, "currentStudentId", void 0);
    StudentSiblingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-sibling',
            template: __webpack_require__(/*! ./student-sibling.component.html */ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.html"),
            providers: [app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_4__["SiblingService"]],
            styles: [__webpack_require__(/*! ./student-sibling.component.scss */ "./src/app/modules/academics/student-information-system/student-sibling/student-sibling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], app_service_student_information_system_sibling_service__WEBPACK_IMPORTED_MODULE_4__["SiblingService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], StudentSiblingComponent);
    return StudentSiblingComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/academic-service/api/rollnumber-assignment.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/service/academic-service/api/rollnumber-assignment.service.ts ***!
  \*******************************************************************************/
/*! exports provided: RollNumberAssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollNumberAssignmentService", function() { return RollNumberAssignmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var RollNumberAssignmentService = /** @class */ (function () {
    function RollNumberAssignmentService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
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
    RollNumberAssignmentService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RollNumberAssignmentService.prototype.assigningRollNUmber = function (lstAssignRollNumberView, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._RollNumber_Assignment, lstAssignRollNumberView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RollNumberAssignmentService.prototype.getStudent = function (schoolBoardId, classId, sectionId, rollNumberSortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumberSortBy, 'RollNumberSortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Get_Student_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RollNumberAssignmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], RollNumberAssignmentService);
    return RollNumberAssignmentService;
}());



/***/ }),

/***/ "./src/app/service/academic-service/api/status.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/academic-service/api/status.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
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







var StatusService = /** @class */ (function () {
    function StatusService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StatusService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StatusService.prototype.getAllStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getAllStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Status/GetStatuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Payment Statuses
     *
     * @param code Gets or sets code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StatusService.prototype.paymentStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling paymentStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Payment/statuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/service/academic-service/api/studentsFacility.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/academic-service/api/studentsFacility.service.ts ***!
  \**************************************************************************/
/*! exports provided: StudentsFacilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsFacilityService", function() { return StudentsFacilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/service/academic-service/api/index.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
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







var StudentsFacilityService = /** @class */ (function () {
    function StudentsFacilityService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        //    protected basePath = 'http://localhost:8013';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new ___WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StudentsFacilityService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * Method to create TestType
     *
     * @param studentFacilitySelectionModel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.createStudentFacility = function (studentFacilitySelectionModel, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Facility, studentFacilitySelectionModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Method to get Student Facility
     *
     * @param model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.getStudentFacility = function (model, observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Facility_Assignment, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get all for student facilities
     *
     * @param studentNames Gets or Sets StudentNames
     * @param admissionNumber Gets or Sets AdmissionNumber
     * @param feeTypeTranchId Gets or sets FeeTypeTranchId
     * @param feeTermId Gets or sets FeeTermId
     * @param classId Gets or Sets ClassId
     * @param sectionId Gets or Sets ClassId
     * @param facilityTypeId Gets or Sets ClassId
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.studentFacilityList = function (studentNames, admissionNumber, feeTypeTranchId, feeTermId, classId, sectionId, facilityTypeId, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumber, 'AdmissionNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTypeTranchId, 'FeeTypeTranchId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTermId, 'FeeTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(facilityTypeId, 'FacilityTypeId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Facility_List, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get all for student unassigned facilities
     *
     * @param classId Gets or Sets ClassId
     * @param sectionId Gets or Sets SectionId
     * @param facilityTypeId Gets or Sets FacilityTypeId
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.studentUnAssignedFacilityList = function (classId, sectionId, facilityTypeId, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(facilityTypeId, 'FacilityTypeId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Unassigned_Facility_List, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Method to create TestType
     *
     * @param model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.updateStudentFacility = function (model, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Facility_Assignment, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Method to get studentfacilities by id
     *
     * @param id Gets or Sets SectionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentsFacilityService.prototype.getStudentFacilityById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Facility_Assignment, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentsFacilityService.prototype.deleteStudentFaclitySelection = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
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
        return this.httpClient.delete(this.basePath + "/StudentsFacility/student-facility-selection", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentsFacilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(___WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, ___WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]])
    ], StudentsFacilityService);
    return StudentsFacilityService;
}());



/***/ }),

/***/ "./src/app/service/student-information-system/sibling.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/service/student-information-system/sibling.service.ts ***!
  \***********************************************************************/
/*! exports provided: SiblingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiblingService", function() { return SiblingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
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



// import { SiblingStudentView } from '../model/siblingStudentView';
// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';



var SiblingService = /** @class */ (function () {
    function SiblingService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    SiblingService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get student details by Name and Admission Number
     *
     * @param studentName Gets or sets StudentName
     * @param admissionNumber Gets or Sets AdmissionNumber
     * @param currentStudentId Gets or Sets currentStudentId
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    SiblingService.prototype.studentDetails = function (studentName, admissionNumber, currentStudentId, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (studentName !== undefined && studentName !== null) {
            queryParameters = queryParameters.set('StudentName', studentName);
        }
        if (admissionNumber !== undefined && admissionNumber !== null) {
            queryParameters = queryParameters.set('AdmissionNumber', admissionNumber);
        }
        if (currentStudentId !== undefined && currentStudentId !== null) {
            queryParameters = queryParameters.set('StudentId', currentStudentId);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', pageSize);
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
        return this.httpClient.get(this.basePath + "/Sibling/student-details", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Siblings Post and Update
     *
     * @param siblingsView
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    SiblingService.prototype.studentSibling = function (siblingsView, observe, reportProgress) {
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
        return this.httpClient.post(this.basePath + "/Sibling/siblings-post-update", siblingsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SiblingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], SiblingService);
    return SiblingService;
}());



/***/ }),

/***/ "./src/app/service/student-information-system/student-action.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/service/student-information-system/student-action.service.ts ***!
  \******************************************************************************/
/*! exports provided: StudentActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentActionService", function() { return StudentActionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var StudentActionService = /** @class */ (function () {
    function StudentActionService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        // protected basePath = 'http://localhost:8013';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StudentActionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentActionService.prototype.createStudentRequest = function (studentActionView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Action_Create, studentActionView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentActionService.prototype.getStudentRequestTypes = function (observe, reportProgress) {
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
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Action_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentActionService.prototype.studentActionGrid = function (studentActionTypeIds, academicSessions, classIds, classNames, studentName, admissionNumber, details, sortOrder, sortBy, failedRecords, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(studentActionTypeIds, 'StudentActionTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(academicSessions, 'AcademicSessions', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classNames, 'ClassNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentName, 'studentName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumber, 'AdmissionNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(details, 'Details', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Student_Action_Grid, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentActionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], StudentActionService);
    return StudentActionService;
}());



/***/ }),

/***/ "./src/app/service/student-information-system/student-course-selection.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/service/student-information-system/student-course-selection.service.ts ***!
  \****************************************************************************************/
/*! exports provided: StudentCourseSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseSelectionService", function() { return StudentCourseSelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");








var StudentCourseSelectionService = /** @class */ (function () {
    function StudentCourseSelectionService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_7__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_7__["ModuleConfig"].Course;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StudentCourseSelectionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentCourseSelectionService.prototype.studentCourseSelectionAssignStudentCoursesPost = function (studentCourseSelectionView, observe, reportProgress) {
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
        return this.httpClient.post(this.basePath + "/StudentCourseSelection/assign-student-courses", studentCourseSelectionView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentCourseSelectionService.prototype.studentCourseSelectionCoursecategoriesCoursesGet = function (schoolAcademicSessionStudentId, schoolBoardId, classId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/StudentCourseSelection/coursecategories-courses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentCourseSelectionService.prototype.studentCourseSelectionStudentCoursecategoriesGet = function (sortBy, sortOrder, classId, sectionId, courseCategoryId, studentNames, admissionNumbers, rollNumbers, courseIds, pageNumber, pageSize, schoolBoardId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(courseCategoryId, 'CourseCategoryId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumbers, 'AdmissionNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumbers, 'RollNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(courseIds, 'CourseIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/StudentCourseSelection/student-coursecategories", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentCourseSelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], StudentCourseSelectionService);
    return StudentCourseSelectionService;
}());



/***/ }),

/***/ "./src/app/service/student-information-system/student-request.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/service/student-information-system/student-request.service.ts ***!
  \*******************************************************************************/
/*! exports provided: StudentRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRequestService", function() { return StudentRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var StudentRequestService = /** @class */ (function () {
    function StudentRequestService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base;
        // protected basePath = "http://localhost:8013";
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
    StudentRequestService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentRequestService.prototype.approveStudentRequest = function (approveStudent, observe, reportProgress) {
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
        // BaseModuleConfig._Approve_Student_Application
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Approve, approveStudent, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService.prototype.createStudentRequest = function (studentRequestView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Create, studentRequestView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService.prototype.getStudentRequestTypes = function (schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService.prototype.rejectStudentRequest = function (rejectStudent, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Reject, rejectStudent, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService.prototype.studentRequestGrid = function (studentRequestTypeIds, studentName, statusIds, admissionNumber, requestNotes, requestDateBegin, requestDateEnd, sortOrder, sortBy, failedRecords, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(studentRequestTypeIds, 'StudentRequestTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentName, 'StudentName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumber, 'AdmissionNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(requestNotes, 'RequestNotes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(requestDateBegin, 'RequestDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(requestDateEnd, 'RequestDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Grid, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService.prototype.approveRequest = function (approveStudentRequestView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Student_Request_Approve1, approveStudentRequestView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], StudentRequestService);
    return StudentRequestService;
}());



/***/ }),

/***/ "./src/app/service/student-information-system/students-section-service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/service/student-information-system/students-section-service.ts ***!
  \********************************************************************************/
/*! exports provided: StudentSectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSectionsService", function() { return StudentSectionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
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






var StudentSectionsService = /** @class */ (function () {
    function StudentSectionsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Base;
        //  protected basePath = 'http://localhost:8013';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StudentSectionsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentSectionsService.prototype.studentData = function (sortBy, classId, schoolBoardId, classIds, sectionIds, studentNames, admissionNumbers, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', schoolBoardId);
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
        if (studentNames) {
            studentNames.forEach(function (element) {
                queryParameters = queryParameters.append('StudentNames', element);
            });
        }
        if (admissionNumbers) {
            admissionNumbers.forEach(function (element) {
                queryParameters = queryParameters.append('AdmissionNumbers', element);
            });
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', pageSize);
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
        return this.httpClient.get(this.basePath + "/StudentSections/student-list", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentSectionsService.prototype.studentsSectionAssignment = function (studentSectionAssignView, observe, reportProgress) {
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
        return this.httpClient.put(this.basePath + "/StudentSections/students-section-assignment", studentSectionAssignView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentSectionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StudentSectionsService);
    return StudentSectionsService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-academics-student-information-system-student-information-system-module.js.map