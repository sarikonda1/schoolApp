(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-academic-academic-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/configuration/academic/academic-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AcademicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRoutingModule", function() { return AcademicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic.component */ "./src/app/modules/configuration/academic/academic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academic-session-details/academic-session-details.component */ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.ts");
/* harmony import */ var _academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academic-session/academic-session.component */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.ts");







var routes = [
    {
        path: '', component: _academic_component__WEBPACK_IMPORTED_MODULE_3__["AcademicComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'academic-sessions', data: { title: 'Academic Sessions' } },
            { path: 'academic-sessions', component: _academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_6__["AcademicSessionComponent"], data: { title: 'Academic Sessions' } },
            { path: 'academic-sessions/:id', component: _academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_6__["AcademicSessionComponent"], data: { title: 'Edit Academic Sessions' } },
            { path: 'academic-sessions/academic-sessions-details/:id', component: _academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_5__["AcademicSessionDetailsComponent"], data: { title: 'Academic Sessions Details' } },
        ]
    },
];
var AcademicRoutingModule = /** @class */ (function () {
    function AcademicRoutingModule() {
    }
    AcademicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], AcademicRoutingModule);
    return AcademicRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"info-relative mt-28\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"edit-info\">\n    <button mat-button type=\"submit\" *ngIf=\"academicSessionDetails?.acdStatusCode == acdNewStatusCode\"\n      class=\"text-uppercase\" (click)=\"onEditButtonClick()\">\n      <mat-icon>edit</mat-icon>\n    </button>\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase\"\n      (click)=\"back()\">{{'Back' | translate}}</button>\n  </div>\n</div>\n\n<mat-tab-group class=\"manage-institue\">\n  <mat-tab translate label=\"Basic Info\">\n    <div class=\"px-sm-40 pb-20\">\n      <div class=\"mat-elevation-z3 simple-table-container radius-t-20 mt-4\" fxLayout=\"column\">\n        <mat-list fxLayout.gt-xs=\"row wrap\" fxLayout.lt-sm=\"column\" class=\"pt-0 confirm-table\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Name</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"px-4\">:</span>{{academicSessionDetails?.name}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Code</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"px-4\">:</span>{{academicSessionDetails?.code}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Start Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"px-4\">:</span>{{academicSessionDetails?.startDate}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>End Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"px-4\">:</span>{{academicSessionDetails?.endDate}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Online Application Start Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span\n                class=\"px-4\">:</span>{{academicSessionDetails?.onlineApplicationStartDate?academicSessionDetails?.onlineApplicationStartDate:\"-\"}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Online Application End Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span\n                class=\"px-4\">:</span>{{academicSessionDetails?.onlineApplicationEndDate?academicSessionDetails?.onlineApplicationEndDate:\"-\"}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Online Application Fee</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"px-4\">:</span>\n              {{isNumberr(academicSessionDetails?.onlineApplicationFee)? academicSessionDetails?.currencySymbol+academicSessionDetails?.onlineApplicationFee : \"-\"}}\n\n\n\n\n              <!-- academicSessionDetails?.onlineApplicationFee!==null?{{academicSessionDetails?.currencySymbol+academicSessionDetails?.onlineApplicationFee }}:null -->\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </div>\n  </mat-tab>\n\n  <mat-tab translate label=\"Classes Offered\">\n    <div class=\"mat-elevation-z3 mx-40 mb-20 mt-4 radius-t-20\">\n      <app-table [settings]=\"classTableSettings\">\n      </app-table>\n    </div>\n  </mat-tab>\n\n  <mat-tab translate label=\"Course Requirements\">\n    <div class=\"mat-elevation-z3 mx-40 mb-20 mt-4 radius-t-20\">\n      <app-table [settings]=\"courseTableSettings\">\n      </app-table>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage-institue ::ng-deep .mat-tab-header {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hY2FkZW1pYy9hY2FkZW1pYy1zZXNzaW9uLWRldGFpbHMvYWNhZGVtaWMtc2Vzc2lvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1EseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vYWNhZGVtaWMvYWNhZGVtaWMtc2Vzc2lvbi1kZXRhaWxzL2FjYWRlbWljLXNlc3Npb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hbmFnZS1pbnN0aXR1ZXtcbjo6bmctZGVlcHtcbiAgICAubWF0LXRhYi1oZWFkZXJ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AcademicSessionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSessionDetailsComponent", function() { return AcademicSessionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








var AcademicSessionDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcademicSessionDetailsComponent, _super);
    function AcademicSessionDetailsComponent(router, routes, schoolAcademicSessionService, location) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.routes = routes;
        _this.schoolAcademicSessionService = schoolAcademicSessionService;
        _this.location = location;
        _this.currentComponent = 'AcademicSessionsComponent';
        _this.acdNewStatusCode = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACADEMICSESSION_NEW;
        _this.fromConfiguration = false;
        if (window.location.href.indexOf('required-school-configuration') > -1) {
            _this.fromConfiguration = true;
        }
        return _this;
    }
    AcademicSessionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params
            .subscribe(function (params) {
            _this.acadedemicSessionId = params['id'];
            _this.getAcademicSessionDetails();
        });
        this.classesOfferedColumns = [
            { field: 'className', header: 'Class Name' },
            { field: 'schoolBoardName', header: 'Board Name' },
            { field: 'sectionName', header: 'Section Name' },
            { field: 'maxCapacity', header: 'Capacity' },
        ];
        this.courseRequirementsColumns = [
            { field: 'className', header: 'Class Name' },
            { field: 'schoolBoardName', header: 'Board Name' },
            { field: 'courseCategoryName', header: 'Category Name' },
            { field: 'courseName', header: 'Course' },
            { field: 'passMarks', header: 'Pass Marks' },
        ];
    };
    AcademicSessionDetailsComponent.prototype.getAcademicSessionDetails = function () {
        var _this = this;
        this.schoolAcademicSessionService.schoolAcademicSessionDetails(this.acadedemicSessionId).subscribe(function (res) {
            res.startDate = _this.getFormattedDateBySchoolDateFormat(res.startDate);
            res.endDate = _this.getFormattedDateBySchoolDateFormat(res.endDate);
            res.onlineApplicationStartDate = _this.getFormattedDateBySchoolDateFormat(res.onlineApplicationStartDate);
            res.onlineApplicationEndDate = _this.getFormattedDateBySchoolDateFormat(res.onlineApplicationEndDate);
            _this.academicSessionDetails = res;
            _this.bindAcademicSessonResult(res);
        });
    };
    AcademicSessionDetailsComponent.prototype.bindAcademicSessonResult = function (data) {
        if (!data.classesOfferedViewModel) {
            this.classRows = [];
        }
        else {
            this.classRows = this.academicSessionDetails.classesOfferedViewModel;
            this.classTableSettings = {
                rows: this.classRows,
                columns: this.classesOfferedColumns,
                componentName: this.currentComponent,
                rowGroupingColumns: ['className', 'schoolBoardName'],
                hideHeader: true,
                tabTable: true,
                padding: true,
            };
            this.courseRows = this.academicSessionDetails.courseRquirementsViewModel;
            this.courseTableSettings = {
                rows: this.courseRows,
                columns: this.courseRequirementsColumns,
                componentName: this.currentComponent,
                rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
                hideHeader: true,
                tabTable: true,
                padding: true
            };
        }
    };
    AcademicSessionDetailsComponent.prototype.onEditButtonClick = function () {
        if (this.fromConfiguration) {
            this.router.navigateByUrl(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"].ACADEMICSESSION_WIZARD + this.acadedemicSessionId);
        }
        else {
            this.router.navigateByUrl(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"].ACADEMICSESSION + '/' + this.acadedemicSessionId);
        }
    };
    AcademicSessionDetailsComponent.prototype.isNumberr = function (data) {
        return Object(util__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(data);
    };
    AcademicSessionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-session-details',
            template: __webpack_require__(/*! ./academic-session-details.component.html */ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.html"),
            styles: [__webpack_require__(/*! ./academic-session-details.component.scss */ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__["SchoolAcademicSessionService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AcademicSessionDetailsComponent);
    return AcademicSessionDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session/academic-session.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session/academic-session.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table *ngIf=\"!hideGrid; else addAcademicSessionRef\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='actions($event)' [closeAddForm]=\"closeAddPanel\" (openAddForm)=\"onAddFormClick()\"\n  [closeRowForm]='closeAddPanel' [templateRef]=\"addAcademicSessionRef\">\n</app-table>\n\n<ng-template #addAcademicSessionRef>\n  <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"OnSelectionChange($event)\"\n    [ngClass]=\"{'mat-elevation-z3 m-36 radius-10 p-12': hideGrid}\"\n    (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n    <mat-step [stepControl]=\"newAcademicSessionForm\">\n      <form [formGroup]=\"newAcademicSessionForm\" fxLayout=\"column\" #academicForm=\"ngForm\">\n        <ng-template matStepLabel><span\n            translate>{{isUpdateData ? 'Update Academic Session':'New Academic Session'}}</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"72\"\n            class=\"pr-sm-20\">\n            <mat-label #dispName translate>Display Name</mat-label>\n            <input matInput (keyup)=\"preventSpace($event,'newAcademicSessionForm','displayName')\" (blur)=\"trimTextBoxSpaces('newAcademicSessionForm','displayName')\" \n              formControlName=\"displayName\" autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='dispName.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.displayName\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\">\n            <mat-label #code translate>Code</mat-label>\n            <input matInput (keyup)=\"preventSpace($event,'newAcademicSessionForm','code')\" (blur)=\"trimTextBoxSpaces('newAcademicSessionForm','code')\" \n            formControlName=\"code\"\n              autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"newAcademicSessionForm.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"34\" fxFlex=\"100\" fxLayout=\"column\"\n            class=\"icon-center\">\n            <mat-label #startDate translate>Start Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('startDate',newAcademicSessionForm)\"\n              [matDatepicker]=\"startDatePicker\" formControlName=\"startDate\" required [readonly]=\"isUpdateData\">\n            <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\" *ngIf=\"isUpdateData==false\">\n            </mat-datepicker-toggle>\n            <mat-datepicker #startDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='startDate.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.startDate\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"38\" class=\"px-sm-20 icon-center\" fxFlex=\"100\"\n            fxLayout=\"column\">\n            <mat-label #endDate translate>End Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('endDate',newAcademicSessionForm)\" [matDatepicker]=\"endDatePicker\"\n              [min]=\"newAcademicSessionForm.controls.startDate.value\" formControlName=\"endDate\" required\n              [readonly]=\"isUpdateData\">\n            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\" *ngIf=\"isUpdateData==false\"></mat-datepicker-toggle>\n            <mat-datepicker #endDatePicker [startAt]=\"newAcademicSessionForm.value.startDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='endDate.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.endDate\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div *ngIf=\"isSchoolOnlineApllication\" fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\"\n          fxLayoutAlign=\"center center\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"34\" fxFlex=\"100\" fxLayout=\"column\"\n            class=\"icon-center\">\n            <mat-label #onlineApplicationStartDate translate>Online Application Start Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('onlineApplicationStartDate',newAcademicSessionForm)\"\n              [matDatepicker]=\"onlineApplicationStartDatePicker\" [max]=\"newAcademicSessionForm.controls.endDate.value\"\n              formControlName=\"onlineApplicationStartDate\" [required]=\"true\">\n            <mat-datepicker-toggle matSuffix [for]=\"onlineApplicationStartDatePicker\"> </mat-datepicker-toggle>\n            <mat-datepicker #onlineApplicationStartDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationStartDate.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationStartDate\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"38\" class=\"px-sm-20 icon-center\" fxFlex=\"100\"\n            fxLayout=\"column\">\n            <mat-label #onlineApplicationEndDate translate>Online Application End Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('onlineApplicationEndDate',newAcademicSessionForm)\"\n              [matDatepicker]=\"onlineApplicationEndDatePicker\"\n              [min]=\"newAcademicSessionForm.controls.onlineApplicationStartDate.value\"\n              [max]=\"newAcademicSessionForm.controls.endDate.value\" [required]=\"true\"\n              formControlName=\"onlineApplicationEndDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"onlineApplicationEndDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #onlineApplicationEndDatePicker\n              [startAt]=\"newAcademicSessionForm.value.onlineApplicationStartDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationEndDate.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationEndDate\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n            class=\"icon-center\">\n            <mat-label #onlineApplicationFee translate>Online Application Fee</mat-label>\n            <input matInput\n            (keyup)=\"preventSpace($event,'newAcademicSessionForm','onlineApplicationFee')\" (blur)=\"trimTextBoxSpaces('newAcademicSessionForm','onlineApplicationFee')\" \n              formControlName=\"onlineApplicationFee\" [required]=\"true\" autocomplete=\"off\">\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationFee.innerText'\n                [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationFee\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n          <button (click)=\"cancel()\" class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\"\n            id=\"stpper-reset\">{{'cancel' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\"\n            class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"classesOfferedForm\" [completed]=\"classSectionData?.length ? true : false\"\n      [optional]=\"classesOfferedForm.value.checkLength\">\n      <ng-template matStepLabel><span translate>Classes Offered</span></ng-template>\n      <form [formGroup]=\"classesOfferedForm\" fxLayout=\"column\" #classofferForm=\"ngForm\">\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n          <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\"\n            class=\"pr-sm-20\" fxFlexFill>\n            <mat-label #schoolBoard translate>{{'School Board' | translate}}</mat-label>\n            <mat-select formControlName=\"schoolBoardId\" required>\n              <mat-option *ngFor=\"let schoolBoard of availableSchoolBoards\" [value]=\"schoolBoard.value\">\n                {{schoolBoard.label}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"schoolBoard.innerText\"\n                [validationControl]=\"classesOfferedForm.controls.schoolBoardId\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <af-select [required]=\"true\" appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-sm=\"36\" [optionGroupRequired]=\"false\"\n            class=\"pr-sm-20\" [options]=\"schoolClassesList | async\" [showChips]=\"1\" placeholder=\"Classes\"\n            [multiple]=\"true\" formControlName=\"classId\" [value]=\"selectedItems\"></af-select>\n\n          <af-select [required]=\"true\" appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-sm=\"34\" [optionGroupRequired]=\"false\"\n            class=\"pr-sm-20\" [options]=\"schoolSectionList | async\" [showChips]=\"1\" placeholder=\"Sections\"\n            [multiple]=\"true\" formControlName=\"sectionId\" [value]=\"selectedItems\"></af-select>\n\n        </div>\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n            fxFlex.gt-sm=\"50\">\n            <mat-label #maxCapacity translate>Maximum Capacity</mat-label>\n            <input (keyup)=\"preventSpace($event,'classesOfferedForm','maximumCapacity')\" matInput autocomplete=\"off\"\n              formControlName=\"maximumCapacity\">\n            <mat-error>\n              <app-validation [labelName]='maxCapacity.innerText'\n                [validationControl]=\"classesOfferedForm.controls.maximumCapacity\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"pt-16\">  \n            <button translate mat-raised-button type=\"submit\" color=\"accent\" (click)=\"onSelectClassesOffered()\"\n                class=\"text-uppercase mr-8\">{{'Select' | translate}}</button> \n              <button translate mat-raised-button type=\"reset\" class=\"text-uppercase  \"\n                (click)=\"clearAllClassSectionData()\">\n                {{'Clear' | translate}}\n              </button>\n              \n          </div>\n        </div>\n\n        <div class=\"py-20\">\n          <div *ngIf=\"loaded | async\" fxLayout=\"column\" class=\"w-100-p simple-table-container\">\n            <app-table [settings]=\"classOfferedTable\" (rowBasedAction)='classesOfferedActions($event)'></app-table>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-15\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious\n            type=\"button\">{{'Previous' | translate}}</button>\n          <button (click)=\"onClickClassOfferedNext()\" mat-raised-button matStepperNext type=\"button\" color=\"accent\"\n            class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"courseRequirementsForm\" [completed]=\"courseRequirementSelect?.length ? true : false\" [optional]=\"courseRequirementsForm.value.isValidCourseForm\">\n      <form [formGroup]=\"courseRequirementsForm\" fxLayout=\"column\" #courseRequireForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Course Requirements</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-20\" fxFlexFill>\n            <mat-label #schoolBoardId translate>School Board</mat-label>\n            <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"selectedClasses=[];onSelectCourseOfferedBoard($event)\" required>\n              <mat-option *ngFor=\"let schoolBoard of offeredBoards\" [value]=\"schoolBoard.schoolBoardId\">\n                {{schoolBoard.schoolBoardName}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"schoolBoardId.innerText\"\n                [validationControl]=\"courseRequirementsForm.controls.schoolBoardId\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <af-select appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"pr-sm-20\"\n            [required]=\"true\" [optionGroupRequired]=\"false\"\n            [options]=\"courseOfferedClasses?.length ? courseOfferedClasses : []\" [showChips]=\"1\" placeholder=\"Classes\" [value]=\"selectedClasses\"\n            [multiple]=\"true\" formControlName=\"classId\"></af-select>\n\n          <af-select appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\" [required]=\"true\"\n            [optionGroupRequired]=\"false\" [options]=\"courseCategoryList?.length ? courseCategoryList : []\"\n            [showChips]=\"1\" placeholder=\"Course Categories\" [multiple]=\"false\" formControlName=\"courseCategoryId\"\n            (selectionChange)=\"onSelectCourseCategory($event)\"></af-select>\n\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n\n          <af-select *ngIf=\"courses?.length\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n            fxFlex.gt-sm=\"40\" class=\"pr-sm-20\" [required]=\"true\" [optionGroupRequired]=\"false\"\n            [options]=\"courses?.length ? courses : []\" [showChips]=\"1\" placeholder=\"Courses\" [multiple]=\"true\"\n            formControlName=\"courseId\"></af-select>\n\n          <mat-form-field *ngIf=\"passMarks\" fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\"\n            class=\"pr-sm-20\" fxFlex.gt-sm=\"25\">\n            <mat-label #passMarks translate>Pass Marks</mat-label>\n            <input (keyup)=\"preventSpace($event,'courseRequirementsForm','passMarks')\" matInput autocomplete=\"off\"\n              formControlName=\"passMarks\">\n            <mat-error>\n              <app-validation [labelName]='passMarks.innerText'\n                [validationControl]=\"courseRequirementsForm.controls.passMarks\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-12\">\n            <button translate mat-raised-button type=\"submit\" color=\"accent\"\n              (click)=\"validCourseRequirements(courseRequirementsForm)\" class=\"text-uppercase mr-8\">\n              {{'Select' | translate}}\n            </button>\n            <button translate mat-raised-button type=\"button\" class=\"text-uppercase\" (click)=\"onClearValidators()\">\n              {{'Clear' | translate}}\n            </button>\n          </div>\n        </div>\n        <div class=\"pb-20\">\n          <div *ngIf=\"loaded | async\" fxLayout=\"column\" class=\"w-100-p simple-table-container\">\n            <app-table [settings]=\"courseReqTab\" (rowBasedAction)='courseRequirementsActions($event)'\n              (additionalButtonClick)=\"clearCourseReq($event)\"></app-table>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious\n            type=\"button\">{{'Previous' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\"\n            class=\"text-uppercase\" (click)=\"onClickCourseOfferedNext()\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"SubmitForm\">\n      <ng-template matStepLabel><span translate>Done</span></ng-template>\n      <div fxFlex=\"100\" class=\"text-center font-size-18 mt-48\" translate>Please Confirm To.</div>\n      <div fxFlex=\"100\" class=\"text-center font-size-18 pt-8\" translate>{{(isUpdateData\n      ? 'Update The Academic Session':'Create The New Academic Session')| translate}}\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n        <button mat-raised-button matStepperPrevious translate type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n          (click)=\"onSubmitAcademicSessions()\">{{(isUpdateData ? 'Update':'Submit') | translate}}</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session/academic-session.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session/academic-session.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-step-optional {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hY2FkZW1pYy9hY2FkZW1pYy1zZXNzaW9uL2FjYWRlbWljLXNlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hY2FkZW1pYy9hY2FkZW1pYy1zZXNzaW9uL2FjYWRlbWljLXNlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zdGVwLW9wdGlvbmFse1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-session/academic-session.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-session/academic-session.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AcademicSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSessionComponent", function() { return AcademicSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");















var AcademicSessionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcademicSessionComponent, _super);
    function AcademicSessionComponent(dialogRef, schoolService, schoolAcademicSessionService, commonService, router, statusService, _fb, gradeSetupService, cd, snackBar, routes, location) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.schoolService = schoolService;
        _this.schoolAcademicSessionService = schoolAcademicSessionService;
        _this.commonService = commonService;
        _this.router = router;
        _this.statusService = statusService;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.cd = cd;
        _this.snackBar = snackBar;
        _this.routes = routes;
        _this.location = location;
        // AS Grid
        _this.hideGrid = false;
        _this.columns = [];
        _this.currentComponent = 'AcademicSessionComponent';
        _this.closeAddPanel = true;
        _this.validate = true;
        _this.interactedStepperIndex = 0;
        // Stepper 
        _this.isSchoolOnlineApllication = true;
        _this.isUpdateData = false;
        _this.schoolBoardList = [];
        _this.isShoolHasAcademicSession = false;
        _this.courseCategoryList = [];
        _this.schoolClassesList = Promise.resolve([]);
        _this.schoolSectionList = Promise.resolve([]);
        _this.loaded = Promise.resolve(true);
        _this.classSectionData = [];
        _this.courseOfferedClasses = [];
        _this.courseRequirementSelect = [];
        _this.classRequirementsGridHeaderData = [
            { field: 'className', header: 'Class', sort: false },
            { field: 'schoolBoardName', header: 'School Board', sort: false },
            { field: 'courseCategoryName', header: 'Course Category', sort: false },
            { field: 'courseName', header: 'Course', sort: false },
            { field: 'passMarks', header: 'Pass Marks', sort: false },
            { field: 'delete', header: 'Actions', sort: false },
        ];
        _this.invalidCourseCategories = [];
        _this.fromConfiguration = false;
        if (window.location.href.indexOf('required-school-configuration') > -1) {
            _this.fromConfiguration = true;
        }
        return _this;
    }
    AcademicSessionComponent.prototype.ngOnInit = function () {
        this.setForms();
        this.checkForEdit();
        this.gridClassOfferedList(true);
        this.setCourseTableData();
        this.initializeFilterView();
        this.setColumnHeaders();
        this.initializeTableSettings();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.schoolBoardDetails();
        this.getAvailableSchoolBoards();
        this.getAcademicSessionGrid();
        this.schoolOnlineApplications();
        this.getStatus();
    };
    AcademicSessionComponent.prototype.checkForEdit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            if (params['id']) {
                _this.schoolAcademicSessionId = params['id'];
                var operations = {
                    operation: 'edit',
                    clickedRow: {
                        id: _this.schoolAcademicSessionId
                    }
                };
                _this.actions(operations, true);
                _this.hideGrid = true;
                _this.onAddFormClick(true);
            }
            else {
                _this.hideGrid = false;
            }
        });
    };
    AcademicSessionComponent.prototype.setForms = function () {
        this.newAcademicSessionForm = this._fb.group({
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(10)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            onlineApplicationStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            onlineApplicationEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            onlineApplicationFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].max(99999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].min(0)])
        });
        this.classesOfferedForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            maximumCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].max(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["Pattern"].NATURAL_NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["Pattern"].PREVENT_SPACES)]),
            checkLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
        });
        this.courseRequirementsForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            courseCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            passMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["Pattern"].NATURAL_NUMBER_PATTERN),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].max(1000)]),
            isValidCourseForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required)
        });
    };
    // Cancel Button
    AcademicSessionComponent.prototype.cancel = function () {
        this.stepper.reset();
        if (document.getElementById('stpper-reset')) {
            document.getElementById('stpper-reset').click();
        }
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.schoolBoardList = [];
        this.courseCategoryList = [];
        this.schoolClassesList = Promise.resolve([]);
        this.schoolSectionList = Promise.resolve([]);
        this.classSectionData = [];
        this.selectedBoards = [];
        this.courseOfferedClasses = [];
        this.offeredBoards = [];
        this.courses = [];
        this.passMarks = false;
        this.courseRequirementSelect = [];
        this.gridClassOfferedList(true);
        this.setCourseTableData();
        this.loaded = Promise.resolve(true);
        this.invalidCourseCategories = [];
        if (this.hideGrid) {
            this.location.back();
        }
        this.hideGrid = false;
    };
    // Grid Related changes
    AcademicSessionComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'name', header: 'Name', sort: true },
            { field: 'code', header: 'Code', sort: true },
            { field: 'statusName', header: 'Status', sort: true },
            { field: 'startDate', header: 'Start Date', sort: true },
            { field: 'endDate', header: 'End Date', sort: true },
            { field: 'onlineApplicationStartDate', header: 'Online Application Start Date', sort: true },
            { field: 'onlineApplicationEndDate', header: 'Online Application End Date', sort: true },
            { field: 'onlineApplicationFee', header: 'Online Application Fee', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    AcademicSessionComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Academic Sessions',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    AcademicSessionComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].PAGESIZE,
        };
        this.schoolAcademicSessionViewModel = {
            schoolAcademicSessionClassSections: [],
            classRequirements: []
        };
    };
    AcademicSessionComponent.prototype.getAcademicSessionGrid = function () {
        var _this = this;
        this.schoolAcademicSessionService.getAllDetails(this.filterViewModel.names, this.filterViewModel.codes, this.filterViewModel.statusIds, this.filterViewModel.startDateBegin, this.filterViewModel.startDateEnd, this.filterViewModel.endDateBegin, this.filterViewModel.endDateEnd, this.filterViewModel.onlineApplicationStartDateBegin, this.filterViewModel.onlineApplicationStartDateEnd, this.filterViewModel.onlineApplicationEndDateBegin, this.filterViewModel.onlineApplicationEndDateEnd, this.filterViewModel.onlineApplicationFees, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            _this.bindAcademicSessonResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionComponent.prototype.bindAcademicSessonResult = function (data) {
        var _this = this;
        if (!data.schoolAcademicSessionListViewModel) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.schoolAcademicSessionListViewModel.list;
            this.totalRowsCount = data.schoolAcademicSessionListViewModel.totalItems;
            this.pageCnt = data.schoolAcademicSessionListViewModel.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].VIEW,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DETAILS_ICON,
                    },
                ];
                // tslint:disable-next-line:no-unused-expression
                (e.statusName === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].NEW_STATUS) ?
                    [e.statusId === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_OPERATION, e.operations.push({
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].EDIT
                        }, {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_ICON,
                        })] : (e.statusName === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_OPERATION) ? [e.statusId === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COMPLETED, e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COMPLETED,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_ICON,
                    })] : null;
                e.startDate = (e.startDate == null) ? null : _this.commonService.customDateFormat(e.startDate, _this.getSchoolDateFormat()).date;
                e.endDate = (e.endDate == null) ? null : _this.commonService.customDateFormat(e.endDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationStartDate = (e.onlineApplicationStartDate == null) ? null :
                    _this.commonService.customDateFormat(e.onlineApplicationStartDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationEndDate = (e.onlineApplicationEndDate == null) ? null : _this.commonService.customDateFormat(e.onlineApplicationEndDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationFee = e.onlineApplicationFee != null ? _this.getFormattedCurrency(e.onlineApplicationFee) : e.onlineApplicationFee;
            });
        }
        if (data.schoolAcademicSessionListViewModel) {
            this.filterViewModel.pageNumber = data.schoolAcademicSessionListViewModel.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Academic Sessions',
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'New Academic Session'
                },
                infoButton: {
                    required: true,
                    text: 'Academic Sessions'
                }
            }
        };
    };
    AcademicSessionComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAcademicSessionGrid();
    };
    AcademicSessionComponent.prototype.onAddFormClick = function (fromViewEdit) {
        if (fromViewEdit === void 0) { fromViewEdit = false; }
        this.interactedStepperIndex = 0;
        this.closeAddPanel = false;
        this.isUpdateData = false;
        this.passMarks = false;
        if (this.stepper) {
            this.stepper.reset();
        }
        if (!fromViewEdit) {
            this.schoolBoardDetails();
        }
    };
    AcademicSessionComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex > 0) {
            if (!this.classesOfferedForm.value.schoolBoardId) {
                this.classesOfferedForm.patchValue({ schoolBoardId: this.availableSchoolBoards[0].value });
            }
        }
        if (event.selectedIndex === 1) {
            this.stepper._steps._results[1].interacted = false;
            this.classofferForm.submitted = false;
        }
        else if (event.selectedIndex === 2) {
            this.stepper._steps._results[2].interacted = false;
            this.courseRequireForm.submitted = false;
            if (this.offeredBoards.length) {
                if (!this.courseRequirementsForm.value.schoolBoardId) {
                    this.courseRequirementsForm.patchValue({ schoolBoardId: this.offeredBoards[0].schoolBoardId });
                }
                this.onSelectCourseOfferedBoard({ value: this.courseRequirementsForm.value.schoolBoardId });
            }
        }
    };
    // Basic APi's
    // check online applications for the selected school
    AcademicSessionComponent.prototype.schoolOnlineApplications = function () {
        var _this = this;
        this.isSchoolOnlineApllication = false;
        this.schoolService.schoolDetails().subscribe(function (res) {
            if (res.schoolData.allowOnlineStudentApplications === 1) {
                _this.isSchoolOnlineApllication = true;
            }
        });
    };
    AcademicSessionComponent.prototype.getStatus = function () {
        var _this = this;
        this.statusService.getAllStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACADEMICSESSION_CODE).subscribe(function (res) { return _this.academisSessionStatuses = res; });
    };
    // GET all board related api's
    AcademicSessionComponent.prototype.schoolBoardDetails = function () {
        var _this = this;
        this.schoolBoardList = [];
        this.gradeSetupService.schoolBoards().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    _this.isShoolHasAcademicSession = true;
                    response.listViews.forEach(function (element) {
                        _this.schoolBoardList.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.classesOfferedForm.controls['schoolBoardId'].setValue(_this.schoolBoardList[0].value);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.getClassesList();
    };
    // Get Classes to filter table data
    AcademicSessionComponent.prototype.getClassesList = function () {
        var _this = this;
        var classes = [];
        this.schoolAcademicSessionService.classes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        classes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.schoolClassesList = Promise.resolve(classes);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.getSectionsList();
    };
    // Get Sections to filter table data
    AcademicSessionComponent.prototype.getSectionsList = function () {
        var _this = this;
        var sections = [];
        this.schoolAcademicSessionService.sections().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        sections.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.schoolSectionList = Promise.resolve(sections);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.courseCategoryDetails();
    };
    AcademicSessionComponent.prototype.courseCategoryDetails = function () {
        var _this = this;
        this.courseCategoryList = [];
        this.schoolAcademicSessionService.courseCategoryDetails().subscribe(function (response) {
            _this.courseCategoryList = [];
            if (response.courseCategoryDetailsModel != null) {
                if (response.courseCategoryDetailsModel.length > 0) {
                    response.courseCategoryDetailsModel.forEach(function (element) {
                        _this.courseCategoryList.push({
                            label: element.name,
                            value: element.id,
                            code: element.code,
                            courseTypeId: element.courseTypeId,
                            areAllRequired: element.areAllRequired,
                            requiredCount: element.requiredCount,
                            areAllOptional: element.areAllOptional,
                            optionalCount: element.optionalCount
                        });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionComponent.prototype.onSelectClassesOffered = function () {
        var _this = this;
        if (this.classesOfferedForm.controls.classId.valid &&
            this.classesOfferedForm.controls.sectionId.valid &&
            this.classesOfferedForm.controls.schoolBoardId.valid &&
            this.classesOfferedForm.controls.maximumCapacity.valid) {
            if (this.checkIfSectionAlreadyExist()) {
                this.openSnackBar('Some section name are Already exist for same classes for Different Board', true);
                return;
            }
            this.classesOfferedForm.value.classId.map(function (cl) {
                _this.classesOfferedForm.value.sectionId.map(function (sc) {
                    var index = _this.checkifClassSectionsAlreadyExists(_this.classesOfferedForm.value.schoolBoardId, cl.value, sc.value);
                    var data = {
                        classId: cl.value,
                        className: cl.label,
                        sectionId: sc.value,
                        sectionName: sc.label,
                        schoolBoardId: _this.classesOfferedForm.value.schoolBoardId,
                        schoolBoardName: _this.getBoardNameBasedOnId(_this.classesOfferedForm.value.schoolBoardId),
                        maxCapacity: _this.classesOfferedForm.value.maximumCapacity
                    };
                    if (index === -1) {
                        _this.classSectionData.push(data);
                    }
                    else {
                        _this.classSectionData[index] = data;
                    }
                });
            });
            if (this.classOfferedTable) {
                this.classOfferedTable.rows = [];
            }
            this.gridClassOfferedList();
            setTimeout(function () {
                _this.stepper._steps._results[1].interacted = false;
                _this.classofferForm.submitted = false;
                _this.cd.detectChanges();
            });
        }
    };
    AcademicSessionComponent.prototype.checkIfSectionAlreadyExist = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        return this.classSectionData.some(function (e) { return e.schoolBoardId !== _this.classesOfferedForm.value.schoolBoardId && _this.classesOfferedForm.value.classId.some(function (c) { return c.value === e.classId; }) && _this.classesOfferedForm.value.sectionId.some(function (sc) { return sc.value === e.sectionId; }); });
    };
    AcademicSessionComponent.prototype.checkifClassSectionsAlreadyExists = function (bId, cId, sId) {
        return this.classSectionData.findIndex(function (e) { return e.schoolBoardId === bId && e.classId === cId && e.sectionId === sId; });
    };
    AcademicSessionComponent.prototype.gridClassOfferedList = function (intialCall) {
        var _this = this;
        if (intialCall === void 0) { intialCall = false; }
        var classOfferedGridHeaderData = [
            { field: 'schoolBoardName', header: 'School Board', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionName', header: 'Section', sort: false },
            { field: 'maxCapacity', header: 'Maximum Capacity', sort: false },
            { field: 'delete', header: 'Actions', sort: false }
        ];
        this.classOfferedTable = {
            rows: this.classSectionData,
            columns: classOfferedGridHeaderData,
            tablename: 'Selected Class Offerings',
            hideHeader: true,
            isPaginationRequired: false,
            rowGroupingColumns: ['schoolBoardName', 'className', 'maxCapacity'],
        };
        if (this.classSectionData.length > 0) {
            this.classSectionData.forEach(function (e) {
                e.operations = [{
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE
                    }];
            });
        }
        if (!intialCall) {
            var previousBoardValue_1 = this.classesOfferedForm.value.schoolBoardId;
            this.classesOfferedForm.reset();
            this.classofferForm.resetForm();
            this.courseRequirementsForm.reset();
            this.checkCourseOffered();
            setTimeout(function () {
                _this.classesOfferedForm.patchValue({
                    schoolBoardId: previousBoardValue_1,
                    checkLength: _this.classSectionData.length ? true : null
                });
                _this.classesOfferedForm.updateValueAndValidity();
            });
            this.offeredBoards = [];
            this.offeredBoards = lodash__WEBPACK_IMPORTED_MODULE_13__["uniqBy"](this.classSectionData, 'schoolBoardId');
            this.loaded = Promise.resolve(true);
            this.cd.detectChanges();
        }
    };
    AcademicSessionComponent.prototype.classesOfferedActions = function (event) {
        if (this.classSectionData.filter(function (x) { return x.classId === event.clickedRow.classId && x.schoolBoardId === event.clickedRow.schoolBoardId; }).length > 1
            || this.courseRequirementSelect.find(function (x) { return x.classId === event.clickedRow.classId && x.schoolBoardId === event.clickedRow.schoolBoardId; }) === undefined) {
            this.classSectionData = this.classSectionData.filter(function (e) { return e !== event.clickedRow; });
            this.gridClassOfferedList();
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COURSE_OFFERED_HAS_COURSE_REQUIREMENTS, true);
        }
    };
    AcademicSessionComponent.prototype.clearAllClassSectionData = function () {
        this.classesOfferedForm.reset();
        this.gridClassOfferedList();
    };
    AcademicSessionComponent.prototype.getBoardNameBasedOnId = function (id) {
        var selectedBoard = this.availableSchoolBoards.find(function (e) { return e.value === id; });
        return selectedBoard && selectedBoard.label;
    };
    AcademicSessionComponent.prototype.onSelectCourseOfferedBoard = function (event) {
        var _this = this;
        this.courseOfferedClasses = [];
        var classes = this.classSectionData.filter(function (x) { return x.schoolBoardId === event.value; });
        classes = lodash__WEBPACK_IMPORTED_MODULE_13__["uniqBy"](classes, 'classId');
        classes.forEach(function (element) {
            _this.courseOfferedClasses.push({ value: element.classId, label: element.className });
        });
    };
    AcademicSessionComponent.prototype.updateFormControlValidation = function (formName, controlName, setValidation) {
        if (setValidation) {
            this[formName].controls[controlName].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required);
        }
        else {
            this[formName].controls[controlName].clearValidators();
        }
        this[formName].controls[controlName].updateValueAndValidity();
    };
    AcademicSessionComponent.prototype.onSelectCourseCategory = function (data) {
        var _this = this;
        var courseTypeId;
        var courseTypeSub;
        this.courses = [];
        this.courseCategoryList.forEach(function (element) {
            if (element.value === data) {
                courseTypeId = element.courseTypeId;
                courseTypeSub = element.code;
            }
        });
        if (app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COURSE_TYPES_SUBJECTS === courseTypeSub) {
            this.passMarks = true;
        }
        else {
            this.passMarks = false;
        }
        this.courseRequirementsForm.controls['courseId'].setValue(null);
        this.courseRequirementsForm.controls['passMarks'].setValue('');
        this.schoolAcademicSessionService.courseDetails(courseTypeId).subscribe(function (response) {
            if (response.commonViewModel.length > 0) {
                response.commonViewModel.forEach(function (course) {
                    _this.courses.push({
                        label: course.name,
                        value: course.id
                    });
                });
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].SELECTED_COURSE_CATEGORY_COULD_HAVE_COURSE, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionComponent.prototype.validCourseRequirements = function (data) {
        var _this = this;
        if (data.controls.schoolBoardId.invalid || data.controls.classId.invalid ||
            data.controls.courseCategoryId.invalid || data.controls.courseId.invalid || data.controls.passMarks.invalid) {
            return;
        }
        if (this.checkAlreadyCourseExistForCourse(data)) {
            this.openSnackBar('Some Courses Already selected For the Same Classes', true);
            return;
        }
        var courseCategory = this.courseCategoryList.find(function (c) { return c.value === data.value.courseCategoryId; });
        if ((data.value.courseId.length - this.getDuplicateCourseCount(data)) + this.getExistCourseCategoryCount(data) < courseCategory.requiredCount) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COURSE_CATEGORY_REQUIRED_COUNT + ' ' + courseCategory.requiredCount, true);
            return;
        }
        var board = this.offeredBoards.find(function (c) { return c.schoolBoardId === data.value.schoolBoardId; });
        data.value.classId.forEach(function (result) {
            data.value.courseId.forEach(function (element) {
                var index = _this.checkIfAlreadyCourseExists(board.schoolBoardId, result.value, courseCategory.value, element.value);
                var values = {
                    schoolBoardId: board.schoolBoardId,
                    schoolBoardName: board.schoolBoardName,
                    courseCategoryId: courseCategory.value,
                    courseCategoryName: courseCategory.label,
                    classId: result.value, className: result.label,
                    passMarks: data.value.passMarks,
                    courseId: element.value,
                    courseName: element.label
                };
                if (index === -1) {
                    _this.courseRequirementSelect.push(values);
                }
                else {
                    _this.courseRequirementSelect[index] = values;
                }
            });
        });
        this.setCourseTableData();
        this.clearCourseFormData();
        this.checkCourseOffered();
    };
    AcademicSessionComponent.prototype.checkAlreadyCourseExistForCourse = function (data) {
        var _this = this;
        var alreadyExist = false;
        data.value.classId.map(function (result) {
            data.value.courseId.map(function (element) {
                if (!alreadyExist) {
                    // tslint:disable-next-line: max-line-length
                    var test = _this.courseRequirementSelect.find(function (e) { return e.schoolBoardId === data.value.schoolBoardId && e.classId === result.value && e.courseId === element.value && e.courseCategoryId !== data.value.courseCategoryId; });
                    if (test) {
                        alreadyExist = true;
                    }
                }
            });
        });
        return alreadyExist;
    };
    AcademicSessionComponent.prototype.getDuplicateCourseCount = function (data) {
        var _this = this;
        var alreadyExistCount = 0;
        data.value.classId.map(function (result) {
            data.value.courseId.map(function (courseId) {
                var test = _this.courseRequirementSelect.find(function (e) { return e.schoolBoardId === data.value.schoolBoardId &&
                    e.classId === result.value && e.courseId === courseId.value && e.courseCategoryId === data.value.courseCategoryId; });
                if (test) {
                    alreadyExistCount += 1;
                }
            });
        });
        return alreadyExistCount;
    };
    AcademicSessionComponent.prototype.getExistCourseCategoryCount = function (data) {
        var _this = this;
        var alreadyExistCount = 0;
        data.value.classId.map(function (result) {
            _this.courseRequirementSelect.map(function (catId) {
                if (catId.schoolBoardId === data.value.schoolBoardId && catId.classId === result.value && catId.courseCategoryId === data.value.courseCategoryId) {
                    alreadyExistCount += 1;
                }
            });
        });
        return alreadyExistCount;
    };
    AcademicSessionComponent.prototype.clearCourseFormData = function () {
        var _this = this;
        this.courseRequirementsForm.patchValue({
            courseCategoryId: null,
            courseId: null,
            passMarks: null
        });
        this.courses = [];
        this.passMarks = false;
        setTimeout(function () {
            _this.stepper._steps._results[2].interacted = false;
            _this.courseRequireForm.submitted = false;
            _this.cd.detectChanges();
        });
    };
    AcademicSessionComponent.prototype.setCourseTableData = function () {
        var headerOptions;
        if (this.courseRequirementSelect.length) {
            headerOptions = {
                additionalButtons: [
                    {
                        name: 'Clear All',
                        clickAction: 'clearAll'
                    },
                ]
            };
        }
        this.courseRequirementSelect.forEach(function (e) {
            e.operations = [{
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].DELETE
                }];
        });
        this.courseReqTab = {
            rows: this.courseRequirementSelect,
            columns: this.classRequirementsGridHeaderData,
            tablename: 'Course Requirements',
            isPaginationRequired: false,
            rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
            headerOperations: headerOptions
        };
        this.loaded = Promise.resolve(true);
    };
    AcademicSessionComponent.prototype.checkIfAlreadyCourseExists = function (bId, cId, ccId, coId) {
        return this.courseRequirementSelect.findIndex(function (e) { return e.schoolBoardId === bId && e.classId === cId && e.courseCategoryId === ccId && e.courseId === coId; });
    };
    AcademicSessionComponent.prototype.onSubmitAcademicSessions = function () {
        var _this = this;
        this.schoolAcademicSessionViewModel = this.newAcademicSessionForm.value;
        this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = this.classSectionData;
        this.schoolAcademicSessionViewModel.classRequirements = this.courseRequirementSelect;
        if (this.isUpdateData) {
            this.schoolAcademicSessionViewModel['id'] = this.schoolAcademicSessionId;
            this.schoolAcademicSessionService.updateSchoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(function (res) {
                _this.commonService.sendAcademicSessionId();
                _this.cancel();
                _this.openSnackBar(res.messages.ResultMessage);
                _this.getAcademicSessionGrid();
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.schoolAcademicSessionService.schoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(function (res) {
                _this.commonService.sendAcademicSessionId();
                _this.cancel();
                _this.openSnackBar(res.messages.ResultMessage);
                _this.getAcademicSessionGrid();
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // actions
    AcademicSessionComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text, lb, vl) {
        var params = { value: vl, label: lb };
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData, params), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    AcademicSessionComponent.prototype.actions = function (operation, fromViewEdit) {
        var _this = this;
        if (fromViewEdit === void 0) { fromViewEdit = false; }
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].VIEW.toLowerCase()) {
            if (this.fromConfiguration) {
                this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_12__["URLConstants"].ACADEMICSESSION_WIZARD_DETAILS + operation.clickedRow.id]);
            }
            else {
                this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_12__["URLConstants"].ACADEMICSESSION_DETAILS + operation.clickedRow.id]);
            }
        }
        else if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACTIVE_OPERATION.toLowerCase() || operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].COMPLETED.toLowerCase()) {
            var dialogValue = this.dialogMethod(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["Messages"].CHANGE_STATUS_OF_ACADEMICSESSION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES, app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].No, operation.operation.toUpperCase(), operation.clickedRow.statusName.toUpperCase());
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES) {
                    _this.onChangeAcademicSession(operation);
                }
            });
        }
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].EDIT) {
            this.closeAddPanel = false;
            this.schoolAcademicSessionService.schoolAcademicSessionDetails(operation.clickedRow.id).subscribe(function (res) { return _this.getAcademicSessionDetailsById(res); }, function (error) {
                _this.errorResponse(error);
            });
            if (!fromViewEdit) {
                this.schoolBoardDetails();
            }
            this.schoolAcademicSessionId = operation.clickedRow.id;
        }
    };
    AcademicSessionComponent.prototype.getAcademicSessionDetailsById = function (data) {
        this.isUpdateData = true;
        this.newAcademicSessionForm.patchValue(data);
        this.newAcademicSessionForm.patchValue({
            displayName: data.name
        });
        this.classSectionData = data.classesOfferedViewModel;
        this.courseRequirementSelect = data.courseRquirementsViewModel;
        this.gridClassOfferedList();
        this.setCourseTableData();
        if (!this.availableSchoolBoards.length) {
            this.getAvailableSchoolBoards();
        }
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
        this.customSteperLabelChange();
    };
    AcademicSessionComponent.prototype.onChangeAcademicSession = function (operation) {
        var _this = this;
        this.academisSessionStatuses.statusViewModel.forEach(function (element) {
            if (element.name.toLowerCase() === operation.operation) {
                _this.schoolAcademicSessionStatusViewModel = {
                    schoolAcademicSessionId: operation.clickedRow.id,
                    statusId: element.id
                };
                _this.schoolAcademicSessionService.updateStatus(_this.schoolAcademicSessionStatusViewModel).subscribe(function (res) {
                    _this.getAcademicSessionGrid();
                    _this.commonService.sendAcademicSessionId();
                    _this.openSnackBar(res.messages.ResultMessage);
                }, function (error) {
                    if (error.error.messages.ResultMessage === 'INV_C_S') {
                        var dialogValue = _this.dialogMethod('Course configuration is missing for some or all of the classes in the academic session. Do you still wish to continue to make the academic session Active ?', true, app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES, app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].No);
                        dialogValue.afterClosed().subscribe(function (action) {
                            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES) {
                                _this.schoolAcademicSessionService.confirmAndUpdateStatus(_this.schoolAcademicSessionStatusViewModel).subscribe(function (res) {
                                    _this.getAcademicSessionGrid();
                                    _this.commonService.sendAcademicSessionId();
                                    _this.openSnackBar(res.messages.ResultMessage);
                                }, function (err) {
                                    _this.errorResponse(err);
                                });
                            }
                        });
                    }
                    else {
                        _this.errorResponse(error);
                    }
                });
            }
        });
    };
    AcademicSessionComponent.prototype.clearCourseReq = function (operation) {
        if (operation === 'clearAll') {
            this.openDialog('Please confirm to clear all the entries to start over.');
        }
    };
    AcademicSessionComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CustomDialogComponent"], {
            disableClose: true,
            data: {
                text: this.commonService.getTranslation(message),
                action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES
            },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].NO) {
                _this.cd.detectChanges();
                _this.dialogRef.closeAll();
            }
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].YES) {
                _this.courseRequirementSelect = [];
                _this.setCourseTableData();
                _this.cd.detectChanges();
                _this.dialogRef.closeAll();
            }
        });
    };
    AcademicSessionComponent.prototype.courseRequirementsActions = function (event) {
        this.courseRequirementSelect = this.courseRequirementSelect.filter(function (e) { return e !== event.clickedRow; });
        this.setCourseTableData();
        this.checkCourseOffered();
    };
    AcademicSessionComponent.prototype.onClickClassOfferedNext = function () {
        if (!this.classesOfferedForm.value.checkLength) {
            this.openSnackBar('Please select atleast 1 class to continue', true);
        }
    };
    AcademicSessionComponent.prototype.onClearValidators = function () {
        this.courseRequirementsForm.reset();
        this.checkCourseOffered();
    };
    AcademicSessionComponent.prototype.checkCourseOffered = function () {
        var _this = this;
        this.invalidCourseCategories = [];
        var c = this.groupByArbitraryNumOfGroup(this.courseRequirementSelect, ['schoolBoardId', 'classId']);
        this.schoolClassesList.then(function (classess) {
            if (_this.courseRequirementSelect.length) {
                _this.courseCategoryList.forEach(function (categoryId) {
                    c.forEach(function (element) {
                        element.groups.forEach(function (elementa) {
                            var filterData = elementa.groups.filter(function (i) { return i.courseCategoryId === categoryId.value; }).length;
                            if (filterData !== 0 && filterData < categoryId.requiredCount) {
                                _this.invalidCourseCategories.push({ class: classess.find(function (cl) { return cl.value === elementa.classId; }).label, category: categoryId.label, count: categoryId.requiredCount });
                            }
                        });
                    });
                });
            }
            if (_this.invalidCourseCategories.length > 0) {
                _this.courseRequirementsForm.patchValue({ isValidCourseForm: null });
            }
            else {
                _this.courseRequirementsForm.patchValue({ isValidCourseForm: true });
            }
        });
    };
    AcademicSessionComponent.prototype.onClickCourseOfferedNext = function () {
        this.checkCourseOffered();
        if (!this.courseRequirementsForm.value.isValidCourseForm) {
            var erroMsg_1 = [];
            erroMsg_1.push({ line: 'The courses do not meet the requirements for the selected category. Please check the category requirements and try again.' });
            lodash__WEBPACK_IMPORTED_MODULE_13__["uniqBy"](this.invalidCourseCategories, 'class').forEach(function (invalidCousreData) {
                erroMsg_1.push({ line: [invalidCousreData.class, invalidCousreData.category, 'Required Count ' + invalidCousreData.count].join('-') });
            });
            this.openSnackBar(erroMsg_1, true);
        }
        else {
            this.courseRequireForm.resetForm();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('courseRequireForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionComponent.prototype, "courseRequireForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('classofferForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionComponent.prototype, "classofferForm", void 0);
    AcademicSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-session',
            template: __webpack_require__(/*! ./academic-session.component.html */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.html"),
            providers: [app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__["SchoolAcademicSessionService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__["GradeSetupService"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"]],
            styles: [__webpack_require__(/*! ./academic-session.component.scss */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"],
            app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__["SchoolAcademicSessionService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__["StatusService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__["GradeSetupService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AcademicSessionComponent);
    return AcademicSessionComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table *ngIf=\"!hideGrid; else addAcademicSessionRef\" [settings]=\"tableSettings\" (getTableData)='tableData($event)' (rowBasedAction)='actions($event)'\n  [closeAddForm]=\"closeAddPanel\" (openAddForm)=\"onAddFormClick()\" [closeRowForm]='closeAddPanel' [templateRef]=\"addAcademicSessionRef\">\n</app-table>\n\n<ng-template #addAcademicSessionRef>\n  <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"OnSelectionChange($event)\" [ngClass]=\"{'mat-elevation-z3 m-36 radius-10 p-12': hideGrid}\" (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n    <mat-step [stepControl]=\"newAcademicSessionForm\">\n      <form [formGroup]=\"newAcademicSessionForm\" fxLayout=\"column\" (ngSubmit)=\"newAcademicSessionDetails(newAcademicSessionForm)\"\n        #academicForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>{{isUpdateData ? 'Update Academic Session':'New Academic Session'}}</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"72\" class=\"pr-sm-20\">\n            <mat-label #dispName translate>Display Name</mat-label>\n            <input matInput (keyup)=\"preventSpace($event,'newAcademicSessionForm','displayName')\" formControlName=\"displayName\" autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='dispName.innerText' [validationControl]=\"newAcademicSessionForm.controls.displayName\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"28\">\n            <mat-label #code translate>Code</mat-label>\n            <input matInput (keyup)=\"preventSpace($event,'newAcademicSessionForm','code')\" formControlName=\"code\" autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"newAcademicSessionForm.controls.code\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"34\" fxFlex=\"100\" fxLayout=\"column\" class=\"icon-center\" >\n            <mat-label #startDate translate>Start Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('startDate',newAcademicSessionForm)\" [matDatepicker]=\"startDatePicker\" formControlName=\"startDate\" (dateChange)=\"validApplicationDate()\"\n               required [readonly]=\"isUpdateData\">\n            <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\" *ngIf=\"isUpdateData==false\"></mat-datepicker-toggle> \n            <mat-datepicker #startDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='startDate.innerText' [validationControl]=\"newAcademicSessionForm.controls.startDate\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"38\" class=\"px-sm-20 icon-center\" fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #endDate translate>End Date</mat-label>\n            <input matInput  (keyup)=\"forceValidation('endDate',newAcademicSessionForm)\"  [matDatepicker]=\"endDatePicker\" [min]=\"newAcademicSessionForm.controls.startDate.value\"\n              (dateChange)=\"validApplicationDate()\" formControlName=\"endDate\" required [readonly]=\"isUpdateData\">\n            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\" *ngIf=\"isUpdateData==false\"></mat-datepicker-toggle>\n            <mat-datepicker #endDatePicker [startAt]=\"newAcademicSessionForm.value.startDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='endDate.innerText' [validationControl]=\"newAcademicSessionForm.controls.endDate\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div *ngIf=\"this.isSchoolOnlineApllication\" fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\"\n          fxLayoutAlign=\"center center\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"34\" fxFlex=\"100\" fxLayout=\"column\" class=\"icon-center\">\n            <mat-label #onlineApplicationStartDate translate>Online Application Start Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('onlineApplicationStartDate',newAcademicSessionForm)\" [matDatepicker]=\"onlineApplicationStartDatePicker\" [max]=\"newAcademicSessionForm.controls.endDate.value\"\n              formControlName=\"onlineApplicationStartDate\" [required]=\"isValidNewAcademic\">\n            <mat-datepicker-toggle matSuffix [for]=\"onlineApplicationStartDatePicker\"> </mat-datepicker-toggle>\n            <mat-datepicker #onlineApplicationStartDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationStartDate.innerText' [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationStartDate\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"38\" class=\"px-sm-20 icon-center\" fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #onlineApplicationEndDate translate>Online Application End Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('onlineApplicationEndDate',newAcademicSessionForm)\" [matDatepicker]=\"onlineApplicationEndDatePicker\" [min]=\"newAcademicSessionForm.controls.onlineApplicationStartDate.value\"\n              [max]=\"newAcademicSessionForm.controls.endDate.value\" [required]=\"isValidNewAcademic\" formControlName=\"onlineApplicationEndDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"onlineApplicationEndDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #onlineApplicationEndDatePicker [startAt]=\"newAcademicSessionForm.value.onlineApplicationStartDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationEndDate.innerText' [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationEndDate\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"28\" class=\"icon-center\">\n            <mat-label #onlineApplicationFee translate>Online Application Fee</mat-label>\n            <input (keyup)=\"preventSpace($event,'newAcademicSessionForm','onlineApplicationFee')\" matInput formControlName=\"onlineApplicationFee\" [required]=\"isValidNewAcademic\" autocomplete=\"off\">\n            <mat-error>\n              <app-validation [labelName]='onlineApplicationFee.innerText' [validationControl]=\"newAcademicSessionForm.controls.onlineApplicationFee\"\n                [doValidate]=\"newAcademicSessionFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n          <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\" (click)=\"cancel()\">{{'cancel' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"classesOfferedForm\">\n      <ng-template matStepLabel><span translate>Classes Offered</span></ng-template>\n      <form  *ngIf=\"stepper.selectedIndex >= 1 && newAcademicSessionForm.valid\" [formGroup]=\"classesOfferedForm\" fxLayout=\"column\" #classofferForm=\"ngForm\">\n\n        <div *ngIf=\"classDropDown\" fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          \n          <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-xs=\"25\" class=\"pr-sm-20\" fxFlexFill>\n               <mat-label #schoolBoardId translate>School Board</mat-label>\n                    <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"onSelect($event)\" required>\n                        <mat-option *ngFor=\"let schoolBoard of availableSchoolBoards\" [value]=\"schoolBoard.value\" >\n                                {{schoolBoard.label}}\n                        </mat-option>\n                      </mat-select>\n                  <mat-error>\n                      <app-validation [labelName]=\"schoolBoardId.innerText\"\n                                [validationControl]=\"classesOfferedForm.controls.schoolBoardId\"\n                                [doValidate]=\"true\">\n                       </app-validation>\n                  </mat-error>\n            </mat-form-field>\n          \n          <app-custom-dropdown formControlName=\"classId\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n            class=\"pr-sm-20\" fxFlex.gt-xs=\"22\" [dropDownConf]=\"classDropDown\" (selectedData)=\"onSelect($event)\" [errorCheck]=\"classesOfferedForm.controls.classId\"\n            ngDefaultControl>\n          </app-custom-dropdown>\n\n          <app-custom-dropdown fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"18\" formControlName=\"sectionId\" appearance=\"outline\" [dropDownConf]=\"sectionDropDown\" (selectedData)=\"onSelect($event)\"\n            [errorCheck]=\"classesOfferedForm.controls.sectionId\" ngDefaultControl>\n          </app-custom-dropdown>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"px-sm-20\" fxFlex.gt-xs=\"25\">\n            <mat-label #maxCapacity translate>Maximum Capacity</mat-label>\n            <input (keyup)=\"preventSpace($event,'classesOfferedForm','maximumCapacity')\" matInput autocomplete=\"off\" formControlName=\"maximumCapacity\">\n            <mat-error>\n              <app-validation [labelName]='maxCapacity.innerText' [validationControl]=\"classesOfferedForm.controls.maximumCapacity\"\n                [doValidate]=\"classesOfferedFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <div fxLayout=\"column\"  class=\"pb-16\">\n            <div fxLayout=\"row\" class=\"pb-12\">\n              <button translate mat-raised-button type=\"submit\" color=\"accent\" (click)=\"validClassSection(classesOfferedForm)\"\n                class=\"text-uppercase\">{{'Select' | translate}}</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"py-20\">\n          <div *ngIf=\"loaded | async\" fxLayout=\"column\" class=\"w-100-p simple-table-container\">\n            <app-table [settings]=\"classOfferedTab\" (rowBasedAction)='classesOfferedActions($event)'></app-table>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-15\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious type=\"button\">{{'Previous' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\" (click)=\"classesFormValid()\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"courseRequirementsForm\" [optional]=\"true\">\n      <form [formGroup]=\"courseRequirementsForm\" fxLayout=\"column\" #courseRequireForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Course Requirements</span></ng-template>\n        <div *ngIf=\"classDataLoaded | async\" fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\"\n          fxLayoutAlign=\"start center\">\n\n          <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-xs=\"25\" class=\"pr-sm-20\" fxFlexFill>\n               <mat-label #schoolBoardId translate>School Board</mat-label>\n                    <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"onSelect($event)\" required>\n                        <mat-option *ngFor=\"let schoolBoard of courseFormBoards\" [value]=\"schoolBoard.value\">\n                                {{schoolBoard.label}}\n                        </mat-option>\n                      </mat-select>\n                  <mat-error>\n                      <app-validation [labelName]=\"schoolBoardId.innerText\"\n                                [validationControl]=\"courseRequirementsForm.controls.schoolBoardId\"\n                                [doValidate]=\"true\">\n                       </app-validation>\n                  </mat-error>\n            </mat-form-field>\n\n          <app-custom-dropdown formControlName=\"classId\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n            (selectedData)=\"onSelect($event)\" fxFlex.gt-xs=\"25\" class=\"pr-sm-20\" [dropDownConf]=\"selectedClassDropDown\" [errorCheck]=\"courseRequirementsForm.controls.classId\">\n          </app-custom-dropdown>\n\n          <app-custom-dropdown formControlName=\"courseCategoryId\" appearance=\"outline\" appearance=\"outline\" fxFlexFill\n            fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"45\" (selectedData)=\"onSelectCourseCategory($event)\"\n            [dropDownConf]=\"courseCategoryDropDown\" [errorCheck]=\"courseRequirementsForm.controls.courseCategoryId\"\n            ngDefaultControl>\n          </app-custom-dropdown>\n\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <app-custom-dropdown *ngIf=\"dataLoaded | async\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" class=\"pr-sm-20\" fxFlex=\"100\" fxFlex.gt-xs=\"55\"\n            formControlName=\"courseId\" [dropDownConf]=\"courseDropDown\" (selectedData)=\"onSelect($event)\" [errorCheck]=\"courseRequirementsForm.controls.courseId\"\n            ngDefaultControl>\n          </app-custom-dropdown>\n\n          <mat-form-field *ngIf=\"passMarks\" fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n            fxFlex.gt-xs=\"25\">\n            <mat-label #passMarks translate>Pass Marks</mat-label>\n            <input (keyup)=\"preventSpace($event,'courseRequirementsForm','passMarks')\" matInput autocomplete=\"off\" formControlName=\"passMarks\">\n            <mat-error>\n              <app-validation [labelName]='passMarks.innerText' [validationControl]=\"courseRequirementsForm.controls.passMarks\"\n                [doValidate]=\"courseRequirementFormDetails\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-12\">\n            <button translate mat-raised-button type=\"submit\" color=\"accent\" (click)=\"validCourseRequirements(courseRequirementsForm)\"\n              class=\"text-uppercase mr-8\">\n              {{'Select' | translate}}\n            </button>\n            <button translate mat-raised-button type=\"reset\"\n              class=\"text-uppercase\" (click)=\" removeCourseReqValaidators()\">\n              {{'Clear' | translate}}\n            </button>\n          </div>\n        </div>        \n        <div class=\"pb-20\">\n          <div *ngIf=\"loaded | async\" fxLayout=\"column\" class=\"w-100-p simple-table-container\">\n            <app-table [settings]=\"courseReqTab\" (rowBasedAction)='courseRequirementsActions($event)' (additionalButtonClick)=\"clearCourseReq($event)\"></app-table>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious type=\"button\">{{'Previous' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\" (click)=\"courseReqValid()\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"SubmitForm\">\n      <ng-template matStepLabel><span translate>Done</span></ng-template>\n      <div fxFlex=\"100\" class=\"text-center font-size-18 mt-48\" translate>Please Confirm To.</div>\n      <div fxFlex=\"100\" class=\"text-center font-size-18 pt-8\" translate>{{(isUpdateData\n        ? 'Update The Academic Session':'Create The New Academic Session')| translate}}\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n        <button mat-raised-button matStepperPrevious translate type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"onSubmitAcademicSessions()\">{{(isUpdateData ? 'Update':'Submit') | translate}}</button>\n      </div>\n    </mat-step> \n  </mat-vertical-stepper>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hY2FkZW1pYy9hY2FkZW1pYy1zZXNzaW9ucy9hY2FkZW1pYy1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AcademicSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSessionsComponent", function() { return AcademicSessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");














var AcademicSessionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcademicSessionsComponent, _super);
    function AcademicSessionsComponent(dialogRef, schoolService, schoolAcademicSessionService, commonService, router, statusService, _fb, gradeSetupService, cd, snackBar, routes, location) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.schoolService = schoolService;
        _this.schoolAcademicSessionService = schoolAcademicSessionService;
        _this.commonService = commonService;
        _this.router = router;
        _this.statusService = statusService;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.cd = cd;
        _this.snackBar = snackBar;
        _this.routes = routes;
        _this.location = location;
        _this.dataLoaded = Promise.resolve(false);
        _this.classDataLoaded = Promise.resolve(false);
        _this.interactedStepperIndex = 0;
        _this.newAcademicSessionFormDetails = false;
        _this.classesOfferedFormDetails = false;
        _this.courseRequirementFormDetails = false;
        _this.buttonDisable = false;
        _this.passMarks = false;
        _this.invalidDataFound = false;
        _this.isSchoolOnlineApllication = false;
        _this.isUpdateData = false;
        _this.isValidNewAcademic = false;
        _this.isSchoolBoards = false;
        _this.isCheckReqCount = false;
        _this.isValidCourseRequirement = false;
        _this.filterClasses = [];
        _this.filterSections = [];
        _this.filterCourseCategory = [];
        _this.filterCourse = [];
        _this.schoolBoardsList = [];
        _this.courseCategoryList = [];
        _this.schoolBoardOptions = [];
        _this.selectedClass = [];
        _this.selectedSchoolBoards = [];
        _this.filterRowData = [];
        _this.classOfferedGridColumns = [];
        _this.classRequirementsGridColumns = [];
        _this.currentComponent = 'AcademicSessionsComponent';
        _this.loaded = Promise.resolve(true);
        _this.hideGrid = false;
        _this.courseFormBoards = [];
        _this.previousClassSectionsData = [];
        return _this;
    }
    AcademicSessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.newAcademicSessionForm = this._fb.group({
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PREVENT_SPACES)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PREVENT_SPACES)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            onlineApplicationStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            onlineApplicationEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            onlineApplicationFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PREVENT_SPACES), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(99999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(0)])
        });
        this.classesOfferedForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            maximumCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NATURAL_NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PREVENT_SPACES)]),
            checkLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
        });
        this.courseRequirementsForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            courseCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            passMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NATURAL_NUMBER_PATTERN),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(99)]),
        });
        this.classOfferedGridHeaderData = [
            { field: 'schoolBoardName', header: 'School Board', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionName', header: 'Section', sort: false },
            { field: 'maxCapacity', header: 'Maximum Capacity', sort: false },
            { field: 'delete', header: 'Actions', sort: false },
        ];
        this.classRequirementsGridHeaderData = [
            { field: 'className', header: 'Class', sort: false },
            { field: 'schoolBoardName', header: 'School Board', sort: false },
            { field: 'courseCategoryName', header: 'Course Category', sort: false },
            { field: 'courseName', header: 'Course', sort: false },
            { field: 'passMarks', header: 'Pass Marks', sort: false },
            { field: 'delete', header: 'Actions', sort: false },
        ];
        this.getAvailableSchoolBoards();
        // Duplicate Entryes
        // this.classOfferedTab = {
        //   rows: [],
        //   columns: this.classOfferedGridHeaderData,
        //   tablename: 'Selected Class Offerings',
        //   isPaginationRequired: false
        // };
        this.courseReqTab = {
            rows: [],
            columns: this.classRequirementsGridHeaderData,
            tablename: 'Course Requirements',
            isPaginationRequired: false
        };
        this.schoolAcademicSessionViewModel = {
            schoolAcademicSessionClassSections: this.schoolAcademicSessionClassSections = [],
            classRequirements: this.classRequirements = []
        };
        this.schoolAcademicSessionChangeView = {
            schoolAcademicSessionClassSections: this.schoolAcademicSessionClassSections = [],
            classRequirements: this.classRequirements = []
        };
        this.selectedClass = [];
        this.selectedSchoolBoards = [];
        this.classSectionOfferedSelect = [];
        this.courseRequirementSelect = [];
        this.courseRequirementsData = [];
        this.classSectionData = [];
        this.validClassOfferedLengthStepper = 1;
        this.classOfferedStepper = 2;
        this.courseRequirementsStepper = 3;
        this.schoolBoardDetails();
        this.setColumnHeaders();
        this.initializeFilterView();
        this.initializeTableSettings();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAcademicSessionGrid();
        this.getStatus();
        this.schoolOnlineApplications();
        this.routes.params.subscribe(function (params) {
            if (params['id']) {
                _this.schoolAcademicSessionId = params['id'];
                var operations = {
                    operation: 'edit',
                    clickedRow: {
                        id: _this.schoolAcademicSessionId
                    }
                };
                _this.actions(operations);
                _this.hideGrid = true;
            }
            else {
                _this.hideGrid = false;
            }
        });
    };
    AcademicSessionsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'name', header: 'Name', sort: true },
            { field: 'code', header: 'Code', sort: true },
            { field: 'statusName', header: 'Status', sort: true },
            { field: 'startDate', header: 'Start Date', sort: true },
            { field: 'endDate', header: 'End Date', sort: true },
            { field: 'onlineApplicationStartDate', header: 'Online Application Start Date', sort: true },
            { field: 'onlineApplicationEndDate', header: 'Online Application End Date', sort: true },
            { field: 'onlineApplicationFee', header: 'Online Application Fee', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    AcademicSessionsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Academic Sessions',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    AcademicSessionsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    AcademicSessionsComponent.prototype.getAcademicSessionGrid = function () {
        var _this = this;
        this.schoolAcademicSessionService.getAllDetails(this.filterViewModel.names, this.filterViewModel.codes, this.filterViewModel.statusIds, this.filterViewModel.startDateBegin, this.filterViewModel.startDateEnd, this.filterViewModel.endDateBegin, this.filterViewModel.endDateEnd, this.filterViewModel.onlineApplicationStartDateBegin, this.filterViewModel.onlineApplicationStartDateEnd, this.filterViewModel.onlineApplicationEndDateBegin, this.filterViewModel.onlineApplicationEndDateEnd, this.filterViewModel.onlineApplicationFees, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            _this.bindAcademicSessonResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionsComponent.prototype.getStatus = function () {
        var _this = this;
        this.statusService.getAllStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACADEMICSESSION_CODE).subscribe(function (res) { return _this.academisSessionStatuses = res; });
    };
    AcademicSessionsComponent.prototype.bindAcademicSessonResult = function (data) {
        var _this = this;
        if (!data.schoolAcademicSessionListViewModel) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.schoolAcademicSessionListViewModel.list;
            this.totalRowsCount = data.schoolAcademicSessionListViewModel.totalItems;
            this.pageCnt = data.schoolAcademicSessionListViewModel.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                    },
                ];
                // tslint:disable-next-line:no-unused-expression
                (e.statusName === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NEW_STATUS) ?
                    [e.statusId === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_OPERATION, e.operations.push({
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                        }, {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_ICON,
                        })] : (e.statusName === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_OPERATION) ? [e.statusId === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COMPLETED, e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COMPLETED,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_ICON,
                    })] : null;
                e.startDate = (e.startDate == null) ? null : _this.commonService.customDateFormat(e.startDate, _this.getSchoolDateFormat()).date;
                e.endDate = (e.endDate == null) ? null : _this.commonService.customDateFormat(e.endDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationStartDate = (e.onlineApplicationStartDate == null) ? null :
                    _this.commonService.customDateFormat(e.onlineApplicationStartDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationEndDate = (e.onlineApplicationEndDate == null) ? null : _this.commonService.customDateFormat(e.onlineApplicationEndDate, _this.getSchoolDateFormat()).date;
                e.onlineApplicationFee = e.onlineApplicationFee != null ? _this.getFormattedCurrency(e.onlineApplicationFee) : e.onlineApplicationFee;
            });
        }
        if (data.schoolAcademicSessionListViewModel) {
            this.filterViewModel.pageNumber = data.schoolAcademicSessionListViewModel.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Academic Sessions',
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'New Academic Session'
                },
                infoButton: {
                    required: true,
                    text: 'Academic Sessions'
                }
            }
        };
    };
    AcademicSessionsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAcademicSessionGrid();
    };
    AcademicSessionsComponent.prototype.actions = function (operation) {
        var _this = this;
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"].ACADEMICSESSION_DETAILS + operation.clickedRow.id]);
        }
        else if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_OPERATION.toLowerCase() || operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COMPLETED.toLowerCase()) {
            var dialogValue = this.dialogMethod(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Messages"].CHANGE_STATUS_OF_ACADEMICSESSION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].No, operation.operation.toUpperCase(), operation.clickedRow.statusName.toUpperCase());
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.statusChangeOk(operation);
                }
            });
        }
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.closeAddPanel = false;
            this.courseRequirementsData = [];
            this.classSectionData = [];
            this.selectedClass = [];
            this.selectedSchoolBoards = [];
            this.classSectionOfferedSelect = [];
            this.courseRequirementSelect = [];
            this.removeValidatorsClassOfferedForm();
            this.removeCourseReqValaidators();
            this.removeCourseBoardValidators();
            this.removeBoardValidators();
            this.schoolAcademicSessionService.schoolAcademicSessionDetails(operation.clickedRow.id).subscribe(function (res) { return _this.getAcademicSessionDetailsById(res); }, function (error) {
                _this.errorResponse(error);
            });
            this.schoolAcademicSessionId = operation.clickedRow.id;
        }
    };
    AcademicSessionsComponent.prototype.statusChangeOk = function (operation) {
        var _this = this;
        this.academisSessionStatuses.statusViewModel.forEach(function (element) {
            if (element.name.toLowerCase() === operation.operation) {
                _this.schoolAcademicSessionStatusViewModel = {
                    schoolAcademicSessionId: operation.clickedRow.id,
                    statusId: element.id
                };
                _this.schoolAcademicSessionService.updateStatus(_this.schoolAcademicSessionStatusViewModel).subscribe(function (res) {
                    if (res.statusCode === _this.httpStatus.OK) {
                        _this.getAcademicSessionGrid();
                        _this.commonService.sendAcademicSessionId();
                        _this.openSnackBar(res.messages.ResultMessage);
                    }
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    AcademicSessionsComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text, lb, vl) {
        var params = { value: vl, label: lb };
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData, params), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    AcademicSessionsComponent.prototype.getAcademicSessionDetailsById = function (data) {
        if (data.statusCode === this.httpStatus.OK) {
            this.isUpdateData = true;
            this.newAcademicSessionForm.controls['displayName'].setValue(data.name);
            this.newAcademicSessionForm.controls['code'].setValue(data.code);
            this.newAcademicSessionForm.controls['startDate'].setValue(data.startDate);
            this.newAcademicSessionForm.controls['endDate'].setValue(data.endDate);
            this.newAcademicSessionForm.controls['onlineApplicationStartDate'].setValue(data.onlineApplicationStartDate);
            this.newAcademicSessionForm.controls['onlineApplicationEndDate'].setValue(data.onlineApplicationEndDate);
            this.newAcademicSessionForm.controls['onlineApplicationFee'].setValue(data.onlineApplicationFee);
            this.classSectionData = data.classesOfferedViewModel;
            this.courseRequirementsData = data.courseRquirementsViewModel;
            this.classSectionOfferedSelect = this.classSectionData;
            this.courseRequirementSelect = this.courseRequirementsData;
            this.gridClassOfferedList();
            this.gridCourseRequirementList();
            this.removeValidatorsClassOfferedForm();
            this.getAvailableSchoolBoards();
            this.stepper._steps._results.forEach(function (x) {
                x.interacted = true;
            });
            this.interactedStepperIndex = this.stepper._steps._results.length;
            this.customSteperLabelChange();
            this.validateDate();
        }
    };
    // Get School Board Details 
    AcademicSessionsComponent.prototype.schoolBoardDetails = function () {
        var _this = this;
        this.schoolBoardOptions = [];
        this.gradeSetupService.schoolBoards().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    _this.isSchoolBoards = true;
                    response.listViews.forEach(function (element) {
                        _this.schoolBoardOptions.push({
                            label: element.name,
                            value: element.id
                        });
                        _this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: _this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: true };
                    });
                    _this.classesOfferedForm.controls['schoolBoardId'].setValue(_this.schoolBoardOptions[0].value);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.getClassesList();
    };
    // Get Classes to filter table data
    AcademicSessionsComponent.prototype.getClassesList = function () {
        var _this = this;
        this.filterClasses = [];
        this.schoolAcademicSessionService.classes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.filterClasses.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.classDropDown = { multiSelect: true, placeholder: 'Class', data: _this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.getSectionsList();
    };
    // Get Sections to filter table data
    AcademicSessionsComponent.prototype.getSectionsList = function () {
        var _this = this;
        this.filterSections = [];
        this.schoolAcademicSessionService.sections().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.filterSections.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
                _this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: _this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: true };
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.courseCategoryDetails();
    };
    AcademicSessionsComponent.prototype.courseCategoryDetails = function () {
        var _this = this;
        this.courseDropDown = { multiSelect: true, placeholder: 'Course', noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.courseCategoryList = [];
        this.filterCourseCategory = [];
        this.schoolAcademicSessionService.courseCategoryDetails().subscribe(function (response) {
            if (response.courseCategoryDetailsModel != null) {
                if (response.courseCategoryDetailsModel.length > 0) {
                    _this.courseCategoryList = response.courseCategoryDetailsModel;
                    response.courseCategoryDetailsModel.forEach(function (element) {
                        _this.filterCourseCategory.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.courseCategoryDropDown = {
                        multiSelect: false, placeholder: 'Course Category', data: _this.filterCourseCategory,
                        noEntryFoundLabel: 'No Data Found', isRequired: true
                    };
                }
                else {
                    _this.courseCategoryDropDown = {
                        multiSelect: false, placeholder: 'Course Category', data: _this.filterCourseCategory,
                        noEntryFoundLabel: 'No Data Found', isRequired: true
                    };
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionsComponent.prototype.onSelectCourseCategory = function (data) {
        var _this = this;
        var courseTypeId;
        var courseTypeSub;
        this.filterCourse = [];
        this.courseCategoryList.forEach(function (element) {
            if (element.id === data.value) {
                courseTypeId = element.courseTypeId;
                courseTypeSub = element.code;
            }
        });
        if (app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COURSE_TYPES_SUBJECTS === courseTypeSub) {
            this.passMarks = true;
        }
        else {
            this.passMarks = false;
        }
        this.courseRequirementsForm.controls['courseId'].setValue(null);
        this.courseRequirementsForm.controls['passMarks'].setValue('');
        this.schoolAcademicSessionService.courseDetails(courseTypeId).subscribe(function (response) {
            if (response.commonViewModel.length > 0) {
                response.commonViewModel.forEach(function (course) {
                    _this.filterCourse.push({
                        label: course.name,
                        value: course.id
                    });
                });
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SELECTED_COURSE_CATEGORY_COULD_HAVE_COURSE, true);
            }
            _this.dataLoaded = Promise.resolve(true);
            _this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: _this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicSessionsComponent.prototype.newAcademicSessionDetails = function (newAcademicSessForm) {
        if (newAcademicSessForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVALID) {
            this.newAcademicSessionFormDetails = true;
            return false;
        }
    };
    AcademicSessionsComponent.prototype.classesFormValid = function () {
        this.scrollIntoView('app-table');
        if (this.classSectionData.length > 0) {
            this.removeValidatorsClassOfferedForm();
            this.stepper.selectedIndex = this.classOfferedStepper;
        }
        else {
            this.validateClassOfferedForm();
            this.stepper.selectedIndex = this.validClassOfferedLengthStepper;
        }
    };
    AcademicSessionsComponent.prototype.courseReqValid = function () {
        this.removeCourseReqValaidators();
        this.stepper.selectedIndex = this.courseRequirementsStepper;
        this.scrollIntoView('app-table');
    };
    // add new form for assessment categories
    AcademicSessionsComponent.prototype.onAddFormClick = function () {
        this.interactedStepperIndex = 0;
        this.closeAddPanel = false;
        this.isUpdateData = false;
        this.passMarks = false;
        this.dataLoaded = Promise.resolve(false);
        this.stepper.reset();
        this.schoolBoardDetails();
    };
    // Cancel Button
    AcademicSessionsComponent.prototype.cancel = function () {
        if (this.academicForm) {
            this.academicForm.resetForm();
        }
        if (this.classofferForm) {
            this.classofferForm.resetForm();
        }
        if (this.courseRequireForm) {
            this.courseRequireForm.resetForm();
        }
        this.stepper.reset();
        this.closeAddPanel = true;
        this.buttonDisable = false;
        this.selectedClass = [];
        this.selectedSchoolBoards = [];
        this.classSectionOfferedSelect = [];
        this.courseRequirementSelect = [];
        this.courseRequirementsData = [];
        this.classSectionData = [];
        this.filterCourse = [];
        this.passMarks = false;
        this.dataLoaded = Promise.resolve(false);
        this.getAcademicSessionGrid();
        this.gridClassOfferedList();
        this.gridCourseRequirementList();
        if (this.hideGrid) {
            this.location.back();
        }
    };
    AcademicSessionsComponent.prototype.validClassSection = function (classesOfferedForm) {
        var _this = this;
        this.classesOfferedForm.controls['checkLength'].clearValidators();
        this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
        if (this.classSectionData && this.classSectionData.length > 0) {
            this.previousClassSectionsData = Object.assign(this.classSectionData);
        }
        this.validateClassOfferedForm();
        if (this.isSchoolBoards === false) {
            this.removeBoardValidators();
        }
        if (classesOfferedForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.classSectionData = [];
            if (this.classSectionOfferedSelect.length === 0) {
                this.classesOfferedForm.value.classId.forEach(function (i) { return _this.classesOfferedForm.value.sectionId.forEach(function (j) {
                    _this.classSectionOfferedSelect.push({
                        classId: i.value, className: i.label,
                        sectionId: j.value, sectionName: j.label,
                        schoolBoardId: _this.classesOfferedForm.value.schoolBoardId ? _this.classesOfferedForm.value.schoolBoardId : null,
                        schoolBoardName: _this.classesOfferedForm.value.schoolBoardId ? _this.getBoardNameBasedOnId(_this.classesOfferedForm.value.schoolBoardId) : null,
                        maxCapacity: _this.classesOfferedForm.value.maximumCapacity
                    });
                }); });
                if (this.previousClassSectionsData && this.previousClassSectionsData.length) {
                    if (this.checkClassSectionsList(this.classSectionOfferedSelectList, this.previousClassSectionsData)) {
                        this.updateClassSchoolBoardDetails();
                        this.previousClassSectionsData = [];
                    }
                    else {
                        this.updateClassSchoolBoardDetails();
                        return;
                    }
                }
            }
            else {
                this.classSectionOfferedSelectList = [];
                this.classesOfferedForm.value.classId.forEach(function (k) { return _this.classesOfferedForm.value.sectionId.forEach(function (l) {
                    _this.classSectionOfferedSelectList.push({
                        classId: k.value, className: k.label,
                        sectionId: l.value, sectionName: l.label,
                        schoolBoardId: _this.classesOfferedForm.value.schoolBoardId ? _this.classesOfferedForm.value.schoolBoardId : null,
                        schoolBoardName: _this.classesOfferedForm.value.schoolBoardId ? _this.getBoardNameBasedOnId(_this.classesOfferedForm.value.schoolBoardId) : null,
                        maxCapacity: _this.classesOfferedForm.value.maximumCapacity
                    });
                }); });
                if (this.previousClassSectionsData && this.previousClassSectionsData.length) {
                    if (this.checkClassSectionsList(this.classSectionOfferedSelectList, this.previousClassSectionsData)) {
                        this.updateClassSectionList();
                        this.previousClassSectionsData = [];
                    }
                    else {
                        this.updateClassSchoolBoardDetails();
                        return;
                    }
                }
            }
            this.filterRowDataList();
            this.classSectionOfferedSelect = this.filterRowData;
            this.classSectionData = this.classSectionOfferedSelect;
            this.updateClassSchoolBoardDetails();
            this.gridClassOfferedList();
            this.removeValidatorsClassOfferedForm();
            var previousBoardValue = this.classesOfferedForm.value.schoolBoardId;
            this.classesOfferedForm.reset();
            this.classesOfferedForm.patchValue({ schoolBoardId: previousBoardValue });
        }
        else {
            this.classesOfferedFormDetails = true;
        }
    };
    AcademicSessionsComponent.prototype.checkClassSectionsList = function (selectedClassSections, previousClssSectionsData) {
        var classesList = selectedClassSections.filter(function (element) { return previousClssSectionsData.some(function (elt) { return elt.classId
            === element.classId && elt.sectionId === element.sectionId && elt.schoolBoardId !== element.schoolBoardId; }); });
        if (classesList && classesList.length > 0) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SECTION_WITH_MULTIPLE_BOARD, true);
            return false;
        }
        else {
            return true;
        }
    };
    AcademicSessionsComponent.prototype.updateClassSectionList = function () {
        var _this = this;
        this.classSectionOfferedSelect.forEach(function (e) { return _this.classSectionOfferedSelectList.forEach(function (e1) {
            if (e.classId === e1.classId && e.sectionId === e1.sectionId && e.schoolBoardId === e1.schoolBoardId) {
                e.schoolBoardName = e1.schoolBoardName;
                e.maxCapacity = e1.maxCapacity;
            }
            else {
                _this.classSectionOfferedSelect.push({
                    classId: e1.classId, className: e1.className,
                    sectionId: e1.sectionId, sectionName: e1.sectionName,
                    schoolBoardId: e1.schoolBoardId ? e1.schoolBoardId : null,
                    schoolBoardName: e1.schoolBoardName ? e1.schoolBoardName : null,
                    maxCapacity: e1.maxCapacity
                });
            }
        }); });
    };
    AcademicSessionsComponent.prototype.updateClassSchoolBoardDetails = function () {
        var _this = this;
        this.selectedClass = [];
        this.selectedSchoolBoards = [];
        this.selectedClass = this.filterClasses.filter(function (e) { return _this.classSectionOfferedSelect.some(function (el) { return el.classId === e.value; }); });
        // const uniqueClasses = Array.from(new Set(this.classSectionOfferedSelect.map(a => a.classId))).map(value => this.classSectionOfferedSelect.find(a => a.classId === value));
        // uniqueClasses.forEach(element => {
        //   this.selectedClass.push({ value: element.classId, label: element.className });
        // });
        var uniqueSchoolBoards = Array.from(new Set(this.classSectionOfferedSelect.map(function (a) { return a.schoolBoardId; })))
            .map(function (value) { return _this.classSectionOfferedSelect.find(function (a) { return a.schoolBoardId === value; }); });
        if (uniqueSchoolBoards.length > 0) {
            uniqueSchoolBoards.forEach(function (element) {
                _this.selectedSchoolBoards.push({ value: element.schoolBoardId, label: element.schoolBoardName });
            });
        }
        this.classDataLoaded = Promise.resolve(true);
        this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: false };
    };
    AcademicSessionsComponent.prototype.classesOfferedActions = function (operation) {
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            if (this.courseRequirementsData.filter(function (x) { return x.classId === operation.clickedRow.classId && x.schoolBoardId === operation.clickedRow.schoolBoardId; }).length > 0) {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COURSE_OFFERED_HAS_COURSE_REQUIREMENTS, true);
                this.stepper.selectedIndex = 2;
            }
            else {
                var deleteIndex = this.classSectionOfferedSelect.findIndex(function (x) { return x.classId === operation.clickedRow.classId &&
                    x.sectionId === operation.clickedRow.sectionId && x.schoolBoardId === operation.clickedRow.schoolBoardId; });
                this.classSectionOfferedSelect.splice(deleteIndex, 1);
                this.classSectionData = this.classSectionOfferedSelect;
                this.gridClassOfferedList();
            }
        }
    };
    AcademicSessionsComponent.prototype.gridClassOfferedList = function () {
        this.classOfferedTab = {
            rows: this.classSectionData,
            columns: this.classOfferedGridHeaderData,
            tablename: 'Selected Class Offerings',
            hideHeader: true,
            isPaginationRequired: false,
            rowGroupingColumns: ['schoolBoardName', 'className', 'maxCapacity'],
        };
        if (this.classSectionData.length > 0) {
            this.classSectionData.forEach(function (e) {
                e.operations = [{
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                    }];
            });
        }
        else {
            this.validateClassOfferedForm();
            this.classesOfferedForm.controls['checkLength'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
            this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
        }
        this.getCourseFormBoards();
        this.loaded = Promise.resolve(true);
        this.updateClassSchoolBoardDetails();
    };
    AcademicSessionsComponent.prototype.removeValidatorsClassOfferedForm = function () {
        this.classesOfferedForm.controls['classId'].clearValidators();
        this.classesOfferedForm.controls['sectionId'].clearValidators();
        this.classesOfferedForm.controls['schoolBoardId'].clearValidators();
        this.classesOfferedForm.controls['checkLength'].clearValidators();
        this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: false };
        this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: false };
        this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: false };
        this.updateValueValidityCourseOfferedForm();
    };
    AcademicSessionsComponent.prototype.validateClassOfferedForm = function () {
        this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.classesOfferedForm.controls['classId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.classesOfferedForm.controls['sectionId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.classesOfferedForm.controls['schoolBoardId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.updateValueValidityCourseOfferedForm();
    };
    AcademicSessionsComponent.prototype.updateValueValidityCourseOfferedForm = function () {
        this.classesOfferedForm.controls['classId'].updateValueAndValidity();
        this.classesOfferedForm.controls['sectionId'].updateValueAndValidity();
        this.classesOfferedForm.controls['schoolBoardId'].updateValueAndValidity();
        this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
    };
    //  remove validators for school board in classes offered
    AcademicSessionsComponent.prototype.removeBoardValidators = function () {
        this.classesOfferedForm.controls['schoolBoardId'].clearValidators();
        this.classesOfferedForm.controls['schoolBoardId'].updateValueAndValidity();
        this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: false };
    };
    //  remove validators for school board in class requirement
    AcademicSessionsComponent.prototype.removeCourseBoardValidators = function () {
        this.courseRequirementsForm.controls['schoolBoardId'].clearValidators();
        this.courseRequirementsForm.controls['schoolBoardId'].updateValueAndValidity();
        this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: false };
    };
    AcademicSessionsComponent.prototype.validCourseRequirements = function (data) {
        var _this = this;
        this.stepper.selected.interacted = true;
        this.count = 0;
        this.validateCourseRequirements();
        if (this.courseRequirementsForm.invalid) {
            return false;
        }
        this.courseCategoryValid();
        if (this.isSchoolBoards === false) {
            this.removeCourseBoardValidators();
            this.invalidDataFound = true;
        }
        if (this.courseRequirementsForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID && this.isValidCourseRequirement === false) {
            this.courseCategoryList.forEach(function (e1) {
                if (_this.courseRequirementsForm.value.courseCategoryId.value === e1.id &&
                    _this.courseRequirementsForm.value.courseCategoryId.label === e1.name) {
                    if (_this.isSchoolBoards === true) {
                        _this.courseRequirementsForm.value.classId.forEach(function (e) {
                            var obj1 = _this.classSectionData.filter(function (node) {
                                return node.classId === e.value;
                            });
                            _this.invalidDataFound = obj1.some(function (el) {
                                return el.schoolBoardId === data.value.schoolBoardId;
                            });
                            if (_this.invalidDataFound === false) {
                                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CLASSES_MISMATCH_BOARD, true);
                                _this.count++;
                                return;
                            }
                        });
                    }
                }
            });
            if (this.invalidDataFound === false || this.count > 0) {
                return false;
            }
            else {
                this.courseRequirementsData = [];
                if (this.courseRequirementSelect.length === 0) {
                    var selectedSchoolBoard_1 = this.availableSchoolBoards.find(function (x) { return x.value === _this.courseRequirementsForm.value.schoolBoardId; });
                    this.courseRequirementsForm.value.classId.forEach(function (element2) { return _this.courseRequirementsForm.value.courseId.forEach(function (element3) {
                        _this.courseRequirementSelect.push({
                            classId: element2.value, className: element2.label,
                            schoolBoardId: _this.courseRequirementsForm.value.schoolBoardId ? _this.courseRequirementsForm.value.schoolBoardId : null,
                            schoolBoardName: selectedSchoolBoard_1 ? selectedSchoolBoard_1.label : null,
                            courseCategoryId: _this.courseRequirementsForm.value.courseCategoryId.value, courseCategoryName: _this.courseRequirementsForm.value.courseCategoryId.label, courseId: element3.value, courseName: element3.label,
                            passMarks: _this.courseRequirementsForm.value.passMarks
                        });
                    }); });
                }
                else {
                    this.courseRequirementSelectList = [];
                    var selectedSchoolBoard_2 = this.availableSchoolBoards.find(function (x) { return x.value === _this.courseRequirementsForm.value.schoolBoardId; });
                    this.courseRequirementsForm.value.classId.forEach(function (i) { return _this.courseRequirementsForm.value.courseId.forEach(function (j) {
                        _this.courseRequirementSelectList.push({
                            classId: i.value, className: i.label,
                            schoolBoardId: _this.courseRequirementsForm.value.schoolBoardId ? _this.courseRequirementsForm.value.schoolBoardId : null,
                            schoolBoardName: selectedSchoolBoard_2 ? selectedSchoolBoard_2.label : null,
                            courseCategoryId: _this.courseRequirementsForm.value.courseCategoryId.value,
                            courseCategoryName: _this.courseRequirementsForm.value.courseCategoryId.label, courseId: j.value, courseName: j.label,
                            passMarks: _this.courseRequirementsForm.value.passMarks
                        });
                    }); });
                    this.updateCourseRequirementList();
                }
                this.filterCourseRequirementRowDataList();
                this.courseRequirementSelect = this.filterRowData;
                this.courseReqCountValidation();
                if (this.errorCountValid === 0) {
                    this.courseRequirementsData = this.courseRequirementSelect;
                    this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
                    this.selectedSchoolBoardDropDown = {
                        multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards,
                        noEntryFoundLabel: 'No Data Found', isRequired: false
                    };
                    this.courseRequirementsForm.controls['passMarks'].setValue('');
                    this.gridCourseRequirementList();
                    this.courseRequirementsForm.controls['courseCategoryId'].reset();
                    this.courseRequirementsForm.controls['courseId'].reset();
                    this.filterCourse = [];
                    this.dataLoaded = Promise.resolve(true);
                    this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };
                    this.removeCourseReqValaidators();
                }
            }
        }
        else {
            this.courseRequirementFormDetails = true;
        }
        setTimeout(function () {
            _this.stepper.selected.interacted = false;
            _this.courseRequireForm.submitted = false;
        });
    };
    AcademicSessionsComponent.prototype.updateCourseRequirementList = function () {
        var _this = this;
        this.courseRequirementSelect.forEach(function (k) { return _this.courseRequirementSelectList.forEach(function (l) {
            if (k.classId === l.classId && k.courseId === l.courseId && k.courseCategoryId === l.courseCategoryId && k.schoolBoardId === l.schoolBoardId) {
                k.className = l.className;
                k.courseName = l.courseName;
                k.schoolBoardId = l.schoolBoardId ? l.schoolBoardId : null;
                k.schoolBoardName = l.schoolBoardName ? l.schoolBoardName : null;
                k.courseCategoryId = l.courseCategoryId;
                k.courseCategoryName = l.courseCategoryName;
                k.passMarks = _this.courseRequirementsForm.value.passMarks;
            }
            else {
                _this.courseRequirementSelect.push({
                    classId: l.classId, className: l.className,
                    schoolBoardId: l.schoolBoardId ? l.schoolBoardId : null,
                    schoolBoardName: l.schoolBoardId ? l.schoolBoardName : null,
                    courseCategoryId: l.courseCategoryId, courseCategoryName: l.courseCategoryName, courseId: l.courseId, courseName: l.courseName,
                    passMarks: l.passMarks
                });
            }
        }); });
    };
    AcademicSessionsComponent.prototype.validateCourseRequirements = function () {
        this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.courseCategoryDropDown = { multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.courseRequirementsForm.controls['classId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.courseRequirementsForm.controls['courseCategoryId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.courseRequirementsForm.controls['passMarks'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NATURAL_NUMBER_PATTERN),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PREVENT_SPACES), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(99)]);
        this.courseRequirementsForm.controls['schoolBoardId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.courseRequirementsForm.controls['courseId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]);
        this.courseRequirementFormDetails = true;
        this.updateValidityCourseReqForm();
    };
    AcademicSessionsComponent.prototype.removeCourseReqValaidators = function () {
        this.courseRequirementsForm.controls['classId'].clearValidators();
        this.courseRequirementsForm.controls['courseCategoryId'].clearValidators();
        this.courseRequirementsForm.controls['schoolBoardId'].clearValidators();
        this.courseRequirementsForm.controls['courseId'].clearValidators();
        this.courseRequirementsForm.controls['passMarks'].clearValidators();
        this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND, isRequired: true };
        this.selectedSchoolBoardDropDown = {
            multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND,
            isRequired: false
        };
        this.courseCategoryDropDown = {
            multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND,
            isRequired: true
        };
        this.filterCourse = [];
        this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND, isRequired: true };
        this.courseRequirementFormDetails = false;
        if (this.stepper) {
            this.stepper.selected.interacted = false;
        }
        this.updateValidityCourseReqForm();
    };
    AcademicSessionsComponent.prototype.updateValidityCourseReqForm = function () {
        this.courseRequirementsForm.controls['classId'].updateValueAndValidity();
        this.courseRequirementsForm.controls['courseCategoryId'].updateValueAndValidity();
        this.courseRequirementsForm.controls['schoolBoardId'].updateValueAndValidity();
        this.courseRequirementsForm.controls['courseId'].updateValueAndValidity();
        this.courseRequirementsForm.controls['passMarks'].updateValueAndValidity();
    };
    AcademicSessionsComponent.prototype.courseRequirementsActions = function (operation) {
        var _this = this;
        if (operation.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var deleteIndex_1 = this.courseRequirementSelect.
                findIndex(function (x) { return x.classId === operation.clickedRow.classId &&
                x.courseCategoryId === operation.clickedRow.courseCategoryId && x.courseId === operation.clickedRow.courseId
                && x.schoolBoardId === operation.clickedRow.schoolBoardId; });
            var coursesList_1 = this.courseRequirementSelect.filter(function (elt) { return elt.courseCategoryId === operation.clickedRow.courseCategoryId
                && elt.classId === operation.clickedRow.classId && elt.schoolBoardId === operation.clickedRow.schoolBoardId; });
            this.courseCategoryList.forEach(function (e1) {
                if (coursesList_1.length) {
                    if (e1.id === operation.clickedRow.courseCategoryId) {
                        if (coursesList_1.length - 1 < e1.requiredCount) {
                            _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COURSE_CATEGORY_REQUIRED_COUNT + ' ' + e1.requiredCount, true);
                        }
                        else {
                            _this.courseRequirementSelect.splice(deleteIndex_1, 1);
                        }
                    }
                }
            });
            this.courseRequirementsData = this.courseRequirementSelect;
            this.gridCourseRequirementList();
        }
    };
    AcademicSessionsComponent.prototype.gridCourseRequirementList = function () {
        var headerOptions;
        if (this.courseRequirementsData.length) {
            headerOptions = {
                additionalButtons: [
                    {
                        name: 'Clear All',
                        clickAction: 'clearAll'
                    },
                ]
            };
        }
        this.courseReqTab = {
            rows: this.courseRequirementsData,
            columns: this.classRequirementsGridHeaderData,
            tablename: 'Course Requirements',
            isPaginationRequired: false,
            rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
            headerOperations: headerOptions
        };
        if (this.courseRequirementsData.length > 0) {
            this.courseRequirementsData.forEach(function (e) {
                e.operations = [{
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                    }];
            });
        }
        this.loaded = Promise.resolve(true);
        this.cd.detectChanges();
    };
    AcademicSessionsComponent.prototype.filterCourseRequirementRowDataList = function () {
        var _this = this;
        this.filterRowData = [];
        this.filterRowData = this.courseRequirementSelect;
        var x = [];
        this.filterRowData.forEach(function (element7) {
            if (x.length === 0) {
                x.push(element7);
            }
            else {
                _this.filterRowData.forEach(function (element8) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.className === element8.className && value.courseName === element8.courseName &&
                            value.schoolBoardName === element8.schoolBoardName && value.courseCategoryName === element8.courseCategoryName;
                    });
                    if (foundIndex === -1) {
                        x.push(element8);
                    }
                });
            }
        });
        this.filterRowData = x;
    };
    AcademicSessionsComponent.prototype.filterRowDataList = function () {
        var _this = this;
        this.filterRowData = [];
        this.filterRowData = this.classSectionOfferedSelect;
        var x = [];
        this.filterRowData.forEach(function (element) {
            if (x.length === 0) {
                x.push(element);
            }
            else {
                _this.filterRowData.forEach(function (elmnt) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.className === elmnt.className && value.sectionName === elmnt.sectionName &&
                            value.schoolBoardName === elmnt.schoolBoardName && value.maxCapacity === elmnt.maxCapacity;
                    });
                    if (foundIndex === -1) {
                        x.push(elmnt);
                    }
                });
            }
        });
        this.filterRowData = x;
    };
    AcademicSessionsComponent.prototype.onSubmitAcademicSessions = function () {
        var _this = this;
        if (this.isUpdateData === true) {
            this.schoolAcademicSessionChangeView = this.newAcademicSessionForm.value;
            this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = [];
            this.schoolAcademicSessionChangeView.classRequirements = [];
            this.assigningValidData();
            this.schoolAcademicSessionChangeView.id = this.schoolAcademicSessionId;
            this.schoolAcademicSessionService.updateSchoolAcademicSession(this.schoolAcademicSessionChangeView).subscribe(function (res) {
                if (res.statusCode === _this.httpStatus.OK) {
                    _this.commonService.sendAcademicSessionId();
                    _this.cancel();
                    _this.openSnackBar(res.messages.ResultMessage);
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.schoolAcademicSessionViewModel = this.newAcademicSessionForm.value;
            this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = [];
            this.schoolAcademicSessionViewModel.classRequirements = [];
            this.assigningValidData();
            this.schoolAcademicSessionService.schoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(function (res) {
                if (res.statusCode === _this.httpStatus.OK) {
                    _this.commonService.sendAcademicSessionId();
                    _this.cancel();
                    _this.openSnackBar(res.messages.ResultMessage);
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    AcademicSessionsComponent.prototype.assigningValidData = function () {
        var _this = this;
        this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = [];
        this.schoolAcademicSessionViewModel.classRequirements = [];
        this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = [];
        this.schoolAcademicSessionChangeView.classRequirements = [];
        this.classSectionData.forEach(function (e) {
            _this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections.push({
                classId: e.classId, sectionId: e.sectionId, maxCapacity: e.maxCapacity, schoolBoardId: e.schoolBoardId
            });
        });
        this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections;
        if (this.courseRequirementsData === undefined) {
            this.schoolAcademicSessionViewModel.classRequirements = [];
            this.schoolAcademicSessionChangeView.classRequirements = [];
        }
        else {
            this.courseRequirementsData.forEach(function (e1) {
                if (e1.passMarks === '') {
                    e1.passMarks = null;
                }
                _this.schoolAcademicSessionViewModel.classRequirements.push({
                    classId: e1.classId, courseCategoryId: e1.courseCategoryId, courseId: e1.courseId, passMarks: e1.passMarks, schoolBoardId: e1.schoolBoardId
                });
            });
            this.schoolAcademicSessionChangeView.classRequirements = this.schoolAcademicSessionViewModel.classRequirements;
        }
    };
    // check online applications for the selected school
    AcademicSessionsComponent.prototype.schoolOnlineApplications = function () {
        var _this = this;
        this.isSchoolOnlineApllication = false;
        this.schoolService.schoolDetails().subscribe(function (res) {
            if (res.schoolData.allowOnlineStudentApplications === 1) {
                _this.isSchoolOnlineApllication = true;
                _this.isValidNewAcademic = true;
            }
        });
    };
    AcademicSessionsComponent.prototype.validApplicationDate = function () {
        if (this.newAcademicSessionForm.controls.startDate.value != null && this.newAcademicSessionForm.controls.endDate.value != null) {
            this.isValidNewAcademic = true;
        }
    };
    AcademicSessionsComponent.prototype.onSelect = function ($event) {
    };
    AcademicSessionsComponent.prototype.clearCourseReq = function (event) {
        var _this = this;
        if (event === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CLEAR && this.courseRequirementsData.length > 0) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_CLEAR_ALL_ITEMS, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.courseRequirementsData = [];
                    _this.courseRequirementSelect = [];
                    _this.gridCourseRequirementList();
                }
            });
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND, true);
        }
    };
    AcademicSessionsComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex > 0) {
            if (!this.classesOfferedForm.value.schoolBoardId) {
                this.classesOfferedForm.patchValue({ schoolBoardId: this.availableSchoolBoards[0].value });
            }
        }
        else if (event.selectedIndex === 2) {
            if (this.courseFormBoards.length) {
                this.courseRequirementsForm.patchValue({ schoolBoardId: this.courseFormBoards[0].value });
            }
        }
        if (event.selectedIndex === 2) {
            this.stepper._steps._results[2].interacted = false;
            this.courseRequireForm.submitted = false;
        }
    };
    AcademicSessionsComponent.prototype.courseCategoryValid = function () {
        var _this = this;
        var errorFlag = 0;
        if (this.courseRequirementsData.length > 0) {
            var validCourseRequirementDetails_1 = [];
            this.courseRequirementsForm.value.classId.forEach(function (e) {
                _this.courseRequirementsForm.value.courseId.forEach(function (e1) {
                    if (_this.courseRequirementsForm.value.schoolBoardId != null) {
                        validCourseRequirementDetails_1.push({
                            classId: e.value,
                            courseCategoryId: _this.courseRequirementsForm.value.courseCategoryId.value,
                            schoolBoardId: _this.courseRequirementsForm.value.schoolBoardId ? _this.courseRequirementsForm.value.schoolBoardId : null,
                            courseId: e1.value
                        });
                    }
                    else {
                        validCourseRequirementDetails_1.push({
                            classId: e.value,
                            courseCategoryId: _this.courseRequirementsForm.value.courseCategoryId.value,
                            schoolBoardId: _this.courseRequirementsForm.value.schoolBoardId ? _this.courseRequirementsForm.value.schoolBoardId : null,
                            courseId: e1.value
                        });
                    }
                });
            });
            validCourseRequirementDetails_1.forEach(function (p) {
                _this.courseRequirementsData.forEach(function (q) {
                    if (p.classId === q.classId && p.schoolBoardId === q.schoolBoardId &&
                        p.courseId === q.courseId && p.courseCategoryId !== q.courseCategoryId) {
                        _this.isValidCourseRequirement = true;
                        errorFlag = 1;
                        return;
                    }
                });
            });
            if (errorFlag === 0) {
                this.isValidCourseRequirement = false;
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DUPLICATE_COURSE_WITH_COURSE_CATEGORY, true);
                return false;
            }
        }
    };
    AcademicSessionsComponent.prototype.courseReqCountValidation = function () {
        var _this = this;
        var coursesList = this.courseCategoryList.filter(function (elt) { return elt.id === _this.courseRequirementsForm.value.courseCategoryId.value; });
        this.courseRequirementsForm.value.classId.forEach(function (cId) {
            var courseCatgoriesList = _this.courseRequirementSelect.filter(function (x) { return x.classId === cId.value && x.schoolBoardId === _this.courseRequirementsForm.value.schoolBoardId
                && x.courseCategoryId === _this.courseRequirementsForm.value.courseCategoryId.value; });
            if (courseCatgoriesList && courseCatgoriesList.length < coursesList[0].requiredCount && coursesList[0].requiredCount > 0) {
                _this.errorCountValid = 1;
                var index = _this.courseRequirementSelect.findIndex(function (x) { return x.classId === cId.value && x.schoolBoardId === _this.courseRequirementsForm.value.schoolBoardId
                    && x.courseCategoryId === _this.courseRequirementsForm.value.courseCategoryId.value; });
                _this.courseRequirementSelect.splice(index, courseCatgoriesList.length);
                //  this.courseRequirementSelect =  this.courseRequirementSelect.filter(x => x.classId !== cId.value && x.schoolBoardId !== this.courseRequirementsForm.value.schoolBoardId
                //     && x.courseCategoryId !== this.courseRequirementsForm.value.courseCategoryId.value);
            }
            else {
                _this.errorCountValid = 0;
            }
        });
        if (this.errorCountValid === 1) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].COURSE_CATEGORY_REQUIRED_COUNT + ' ' + coursesList[0].requiredCount, true);
            return;
        }
    };
    AcademicSessionsComponent.prototype.validateDate = function () {
        var date = new Date(this.newAcademicSessionForm.value.onlineApplicationStartDate);
        date.setDate(date.getDate() + 1);
        this.minDate = date;
    };
    AcademicSessionsComponent.prototype.getBoardNameBasedOnId = function (id) {
        var selectedBoard = this.availableSchoolBoards.find(function (e) { return e.value === id; });
        return selectedBoard && selectedBoard.label;
    };
    AcademicSessionsComponent.prototype.getCourseFormBoards = function () {
        var _this = this;
        this.courseFormBoards = [];
        this.classSectionData.map(function (e) {
            if (!(_this.courseFormBoards.find(function (el) { return el.value === e.schoolBoardId; }))) {
                _this.courseFormBoards.push({
                    label: e.schoolBoardName,
                    value: e.schoolBoardId
                });
            }
        });
        if (this.courseFormBoards.length) {
            this.courseRequirementsForm.patchValue({ schoolBoardId: this.courseFormBoards[0].value });
        }
        return this.courseFormBoards;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('academicForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionsComponent.prototype, "academicForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('courseRequireForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionsComponent.prototype, "courseRequireForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('classofferForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicSessionsComponent.prototype, "classofferForm", void 0);
    AcademicSessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-sessions',
            template: __webpack_require__(/*! ./academic-sessions.component.html */ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.html"),
            providers: [app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__["SchoolAcademicSessionService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_11__["GradeSetupService"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_12__["SchoolService"]],
            styles: [__webpack_require__(/*! ./academic-sessions.component.scss */ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_12__["SchoolService"],
            app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_4__["SchoolAcademicSessionService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_9__["StatusService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_11__["GradeSetupService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]])
    ], AcademicSessionsComponent);
    return AcademicSessionsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/academic/academic.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hY2FkZW1pYy9hY2FkZW1pYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/configuration/academic/academic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic.component.ts ***!
  \**********************************************************************/
/*! exports provided: AcademicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicComponent", function() { return AcademicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcademicComponent = /** @class */ (function () {
    function AcademicComponent() {
    }
    AcademicComponent.prototype.ngOnInit = function () {
    };
    AcademicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic',
            template: __webpack_require__(/*! ./academic.component.html */ "./src/app/modules/configuration/academic/academic.component.html"),
            styles: [__webpack_require__(/*! ./academic.component.scss */ "./src/app/modules/configuration/academic/academic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcademicComponent);
    return AcademicComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/academic/academic.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/configuration/academic/academic.module.ts ***!
  \*******************************************************************/
/*! exports provided: AcademicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicModule", function() { return AcademicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academic_sessions_academic_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-sessions/academic-sessions.component */ "./src/app/modules/configuration/academic/academic-sessions/academic-sessions.component.ts");
/* harmony import */ var _academic_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-routing.module */ "./src/app/modules/configuration/academic/academic-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _academic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./academic.component */ "./src/app/modules/configuration/academic/academic.component.ts");
/* harmony import */ var _academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./academic-session-details/academic-session-details.component */ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./academic-session/academic-session.component */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.ts");



















var AcademicModule = /** @class */ (function () {
    function AcademicModule() {
    }
    AcademicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_academic_component__WEBPACK_IMPORTED_MODULE_13__["AcademicComponent"], _academic_sessions_academic_sessions_component__WEBPACK_IMPORTED_MODULE_3__["AcademicSessionsComponent"], _academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_14__["AcademicSessionDetailsComponent"], _academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_18__["AcademicSessionComponent"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedManagementModule"],
                _academic_routing_module__WEBPACK_IMPORTED_MODULE_4__["AcademicRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
                    multi: true
                },
                app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__["SchoolAcademicSessionService"],
                app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_16__["GradeSetupService"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_17__["SchoolService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AcademicModule);
    return AcademicModule;
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



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-academic-academic-module~app-shared-wizard-wizard-module.js.map