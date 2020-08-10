(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-staff-staff-information-system-staff-information-system-module~app-modules-staff~5ac3da42"],{

/***/ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-40\">\n  <div *ngIf=\"!isShow\" class=\"px-16 font-size-18 text-uppercase\">{{ (!isStaffLogin ? 'Teacher Schedule': 'Schedule') | translate}}</div>\n  <div class=\"mat-elevation-z8 radius-t-20 simple-table-container\" fxLayout=\"column\">\n    <div class=\"px-20 pt-20\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-sm=\"row\"\n      fxLayoutAlign.gt-xs=\"space-between center\">\n      <div class=\"ml-sm-32\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex>\n        <div *ngIf=\"!isStaffLogin\" class=\"mw-400\" fxLayoutAlign=\"center center\">\n            <af-select appearance=\"outline\" label=\"Teacher\" [optionGroupRequired]=\"false\" fxFlex=\"100\" [required]=\"false\"\n            [options]=\"teachers | async\" placeholder=\"Select Teacher\" (selectionChange)=\"getStaffTemplates($event)\">\n          </af-select>\n        </div>\n\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button mat-button type='button' (click)=\"getHelpText('Teacher Schedules')\">\n          <mat-icon class=\"grey-600-fg\" matTooltip=\"{{'Info' | translate}}\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n\n    <mat-divider *ngIf=\"showClasses\"></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"50\">\n        <table class=\"custom-table my-24 border\" *ngIf=\"showClasses\">\n          <tr *ngIf=\"teacherTemplates?.classSectionList?.length\">\n            <th translate>Class Teacher For</th>\n            <th></th>\n          </tr>\n          <tr *ngFor=\"let classData of teacherTemplates?.classSectionList\">\n            <td> {{classData.value}}</td>\n            <td> {{classData.label}}</td>\n          </tr>\n          <tr *ngIf=\"!teacherTemplates?.classSectionList?.length\">\n            <td colspan=\"2\" translate>No classes assigned as class teacher</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <mat-divider *ngIf=\"showClasses\"></mat-divider>\n    <div class=\"px-20 pt-20\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-sm=\"row\"\n      fxLayoutAlign.gt-xs=\"space-between center\" *ngIf=\"teacherTemplates.timeTableList\">\n      <div class=\"mr-sm-32\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex *ngIf=\"teacherTemplates.timeTableList.length\">\n          <af-select appearance=\"outline\" label=\"Time Table\" [optionGroupRequired]=\"false\" fxFlex.gt-sm=\"40\" fxFlex=\"100\" class=\"mw-400\" [required]=\"false\"\n          [options]=\"teacherTemplates.timeTableList\" [value]=\"selectedTemplate\" placeholder=\"Select Time Table\" (selectionChange)=\"getTeacherSchedule($event)\">\n        </af-select>\n      </div>\n    </div>\n    <div *ngIf=\"!showSchedules && showClasses\" class=\"text-center pb-20\" translate>No Classes has been scheduled</div>\n    <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"section-assignament mb-20\"\n      *ngIf=\"teacherSchedule?.teacherScheduleList.length\">\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"65\" fxFlex=\"100\">\n        <table class=\"custom-table m-24 border\">\n          <tr>\n            <th translate>Class</th>\n            <th translate>Section</th>\n            <th translate>Board</th>\n            <th translate>Subject</th>\n            <th translate>Periods Per Week</th>\n          </tr>\n          <tr *ngFor=\"let classData of teacherSchedule?.teacherScheduleList\">\n            <td>\n              {{classData.className}}\n            </td>\n            <td>\n              {{classData.sectionName}}\n            </td>\n            <td>\n              {{classData.board}}\n            </td>\n            <td>\n              {{classData.courseName}}\n            </td>\n            <td class=\"text-center\">\n              {{classData.periodsPerWeek}}\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"40\" fxFlex=\"100\" class=\"border m-w m-24 radius-10\"\n        [@animate]=\"{value:'*',params:{y:'100%'}}\">\n        <p class=\"text-center text-uppercase font-size-16\" translate>Total Periods Per Week</p>\n        <mat-divider></mat-divider>\n        <span class=\"text-center font-size-24 py-8 accent-900-fg-custom\">{{teacherSchedule.toatalPeriods}}</span>\n\n      </div>\n    </div>\n\n    <mat-divider *ngIf=\"teacherSchedule?.teacherPeriodsView.length\"></mat-divider>\n\n\n\n    <div class=\"m-20 border school-period\" [style.max-width.px]=\"innerWidth\"\n      *ngIf=\"teacherSchedule?.teacherPeriodsView.length\" fxFlex=\"100\" fxLayout=\"column\">\n      <div xLayout=\"row inline\" class=\"mw-100-p border-bottom h2 p-12 weekDay\" translate>Time Table</div>\n      <div fxLayout=\"row inline\" *ngFor=\"let item of teacherSchedule?.teacherPeriodsView; \"\n        class=\"mw-100-p\">\n        <div fxLayout=\"column\" fxFlex=\"20\"\n          class=\"border-right border-bottom p-20 w-120 weekDay custom-white font-weight-600 text-uppercase\" translate>\n          {{item.weekDayName}}</div>\n        <div *ngIf=\"item?.teacherSchedulePeriodsView.length > 0\" class=\"border-bottom\">\n          <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"center start\" class=\"border-right w-180 p-12 break-word\"\n            *ngFor=\"let child of item.teacherSchedulePeriodsView;let i=index\" [ngClass]=\"item.value?.length > teacherSchedule?.teacherPeriodsView[ind-1]?.value?.length ? (i > ( teacherSchedule?.teacherPeriodsView[ind-1]?.value?.length-1) && ind  ? 'border-top': '') : ''\">\n            <div fxLayout=\"row\">{{child.periodName}}</div>\n            <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5 }} to\n              {{child.endTime | slice:0:5}}\n            </div>\n            <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.className}}\n              {{child.sectionName}}\n            </div>\n            <div fxLayout=\"row\">{{child.courseName}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-assignament .m-w {\n  max-width: 180px !important;\n  width: 180px !important;\n  height: 133px; }\n\n.w-sm-400 {\n  width: 400px; }\n\n.mw-400 {\n  width: 450px; }\n\n.school-period {\n  overflow-y: auto;\n  overflow: overlay; }\n\n.school-period .weekDay {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0px;\n    z-index: 1; }\n\n.text-center {\n  text-align: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3RlYWNoZXItc2NoZWR1bGUvdGVhY2hlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsYUFBYSxFQUFBOztBQUtyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUZyQjtJQU9RLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVUsRUFBQTs7QUFHbEI7RUFDSSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3RlYWNoZXItc2NoZWR1bGUvdGVhY2hlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWFzc2lnbmFtZW50e1xuICAgIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIC5tLXd7XG4gICAgICAgIG1heC13aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTMzcHg7XG5cbiAgICB9XG59XG5cbi53LXNtLTQwMHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG4ubXctNDAwe1xuICAgIHdpZHRoOiA0NTBweDs7XG59XG4uc2Nob29sLXBlcmlvZHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgICY6Zmlyc3QtY2hpbGQgLm13LTEwMC1we1xuXG4gICAgfVxuICAgIC53ZWVrRGF5IHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4vLyBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KCdndC14cycpIHtcblxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TeacherScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherScheduleComponent", function() { return TeacherScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_staff_information_system_teachers_schedules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/staff-information-system/teachers-schedules.service */ "./src/app/service/staff-information-system/teachers-schedules.service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var TeacherScheduleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TeacherScheduleComponent, _super);
    function TeacherScheduleComponent(teachersSchedulesService, staffCommonService, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.teachersSchedulesService = teachersSchedulesService;
        _this.staffCommonService = staffCommonService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.teachers = Promise.resolve([]);
        _this.loadData = Promise.resolve(false);
        _this.isStaffLogin = false;
        _this.currentStaffName = '';
        return _this;
    }
    TeacherScheduleComponent.prototype.ngOnInit = function () {
        this.getTeachers();
        this.initializeForm();
    };
    TeacherScheduleComponent.prototype.initializeForm = function () {
        this.teacherTemplates = {
            classSectionList: [],
            timeTableList: []
        };
        this.teacherSchedule = {
            teacherScheduleList: [],
            teacherPeriodsView: [],
            toatalPeriods: 0
        };
    };
    TeacherScheduleComponent.prototype.getTeachers = function () {
        var _this = this;
        this.staffCommonService.fetchStaffs('STFT_TCH').subscribe(function (response) { return _this.bindStaff(response); }, function (error) {
            _this.errorResponse(error);
        });
    };
    TeacherScheduleComponent.prototype.bindStaff = function (staffData) {
        var dropDownData = staffData.map(function (x) { return ({
            label: x.name,
            value: x.id
        }); });
        this.teachers = Promise.resolve(dropDownData);
    };
    TeacherScheduleComponent.prototype.getStaffTemplates = function (teacherId) {
        var _this = this;
        this.selectedValue = teacherId;
        this.initializeForm();
        if (teacherId) {
            this.selectedTeacherId = teacherId;
            this.teachersSchedulesService.getTeacherTimeTableById(teacherId).subscribe(function (response) { return _this.bindTeacherTemplates(response); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.showClasses = false;
        }
    };
    TeacherScheduleComponent.prototype.bindTeacherTemplates = function (response) {
        this.showClasses = true;
        this.teacherTemplates = response;
        if (this.teacherTemplates.timeTableList && this.teacherTemplates.timeTableList.length) {
            this.teacherTemplates.timeTableList = this.teacherTemplates.timeTableList.map(function (x) { return ({
                label: x.name,
                value: x.id
            }); });
            this.showSchedules = this.teacherTemplates.timeTableList.length ? true : false;
            var firstTemplateId = this.teacherTemplates.timeTableList[0].value;
            this.selectedTemplate = firstTemplateId;
            this.getTeacherSchedule(firstTemplateId);
        }
    };
    TeacherScheduleComponent.prototype.getTeacherSchedule = function (templateId) {
        var _this = this;
        if (templateId) {
            this.teachersSchedulesService.getTeacherSchedule(this.selectedTeacherId, templateId).subscribe(function (response) { return _this.teacherSchedule = response; }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.teacherSchedule = {
                teacherScheduleList: [],
                teacherPeriodsView: [],
                toatalPeriods: 0
            };
        }
    };
    TeacherScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-schedule',
            template: __webpack_require__(/*! ./teacher-schedule.component.html */ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.html"),
            animations: [_fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]],
            providers: [app_service_staff_information_system_teachers_schedules_service__WEBPACK_IMPORTED_MODULE_3__["TeachersSchedulesService"]],
            styles: [__webpack_require__(/*! ./teacher-schedule.component.scss */ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_staff_information_system_teachers_schedules_service__WEBPACK_IMPORTED_MODULE_3__["TeachersSchedulesService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_4__["StaffCommonService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], TeacherScheduleComponent);
    return TeacherScheduleComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/staff-information-system/teachers-schedules.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/service/staff-information-system/teachers-schedules.service.ts ***!
  \********************************************************************************/
/*! exports provided: TeachersSchedulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersSchedulesService", function() { return TeachersSchedulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");








var TeachersSchedulesService = /** @class */ (function () {
    function TeachersSchedulesService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Teacher;
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
    TeachersSchedulesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TeachersSchedulesService.prototype.getTeacherSchedule = function (teacherId, timeTableId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_7__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(teacherId, 'TeacherId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(timeTableId, 'TimeTableId', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/TeachersSchedules/teacher-schedule", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TeachersSchedulesService.prototype.getTeacherTimeTableById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_7__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(id, 'Id', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/TeachersSchedules/teacher-timetable-dropdown", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TeachersSchedulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]])
    ], TeachersSchedulesService);
    return TeachersSchedulesService;
}());



/***/ }),

/***/ "./src/app/service/staff/staff-leave-request-service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/staff/staff-leave-request-service.ts ***!
  \**************************************************************/
/*! exports provided: StaffLeaveRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffLeaveRequestService", function() { return StaffLeaveRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * Teacher API
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








var StaffLeaveRequestService = /** @class */ (function () {
    function StaffLeaveRequestService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_7__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_7__["ModuleConfig"].Teacher;
        // protected basePath = 'http://localhost:8016';
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
    StaffLeaveRequestService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StaffLeaveRequestService.prototype.approveOrRejectRequest = function (leaveRequestId, staffId, isApproveAction, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (leaveRequestId !== undefined && leaveRequestId !== null) {
            queryParameters = queryParameters.set('LeaveRequestId', leaveRequestId);
        }
        if (staffId !== undefined && staffId !== null) {
            queryParameters = queryParameters.set('StaffId', staffId);
        }
        if (isApproveAction !== undefined && isApproveAction !== null) {
            queryParameters = queryParameters.set('IsApproveAction', isApproveAction);
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_7__["BaseModuleConfig"].Staff_Leave_Request_Approve, null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffLeaveRequestService.prototype.createStaffLeaveRequest = function (staffLeaveRequest, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_7__["BaseModuleConfig"].Staff_Leave_Request, staffLeaveRequest, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffLeaveRequestService.prototype.fetchStaffLeaveRequests = function (sortBy, sortOrder, staffNames, staffTypes, reasons, statuses, leaveStartDatesBegin, leaveStartDatesEnd, leaveEndDatesBegin, leaveEndDatesEnd, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(staffNames, 'StaffNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(staffTypes, 'StaffTypes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(reasons, 'Reasons', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statuses, 'Statuses', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(leaveStartDatesBegin, 'LeaveStartDatesBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(leaveStartDatesEnd, 'LeaveStartDatesEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(leaveEndDatesBegin, 'LeaveEndDatesBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(leaveEndDatesEnd, 'LeaveEndDatesEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_7__["BaseModuleConfig"].Staff_Leave_Request, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffLeaveRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], _shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], StaffLeaveRequestService);
    return StaffLeaveRequestService;
}());



/***/ }),

/***/ "./src/app/service/staff/staffCommon.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/staff/staffCommon.service.ts ***!
  \******************************************************/
/*! exports provided: StaffCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffCommonService", function() { return StaffCommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../url.config */ "./src/app/url.config.ts");
/**
 * Teacher API
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







var StaffCommonService = /** @class */ (function () {
    function StaffCommonService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Teacher;
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
    StaffCommonService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StaffCommonService.prototype.fetchStaffTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService.prototype.fetchStaffs = function (staffTypeCode, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (staffTypeCode !== undefined && staffTypeCode !== null) {
            queryParameters = queryParameters.set('staffTypeCode', staffTypeCode);
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
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Based_On_Code, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], StaffCommonService);
    return StaffCommonService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-staff-staff-information-system-staff-information-system-module~app-modules-staff~5ac3da42.js.map