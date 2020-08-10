(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-academics-module~app-modules-academics-attendance-attendance-module~ap~4633b072"],{

/***/ "./src/app/modules/academics/academics-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/academics/academics-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AcademicsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsRoutingModule", function() { return AcademicsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'student-admissions',
        loadChildren: 'app/modules/academics/student-admissions/student-admissions.module#StudentAdmissionsModule'
    },
    {
        path: 'student-information-system',
        loadChildren: 'app/modules/academics/student-information-system/student-information-system.module#StudentInformationSystemModule'
    },
    {
        path: 'events',
        loadChildren: 'app/modules/academics/events/events.module#EventsModule'
    },
    {
        path: 'attendance',
        loadChildren: 'app/modules/academics/attendance/attendance.module#AttendanceModule'
    },
    {
        path: 'academic-grading',
        loadChildren: 'app/modules/academics/grading/academic-grading.module#AcademicGradingModule'
    },
    {
        path: 'syllabus',
        loadChildren: 'app/modules/academics/syllabus/syllabus.module#SyllabusModule'
    }
];
var AcademicsRoutingModule = /** @class */ (function () {
    function AcademicsRoutingModule() {
    }
    AcademicsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AcademicsRoutingModule);
    return AcademicsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/academics.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/academics/academics.module.ts ***!
  \*******************************************************/
/*! exports provided: AcademicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsModule", function() { return AcademicsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academics-routing.module */ "./src/app/modules/academics/academics-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-details/student-details.component */ "./src/app/modules/academics/student-details/student-details.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");














var AcademicsModule = /** @class */ (function () {
    function AcademicsModule() {
    }
    AcademicsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_10__["StudentDetailsComponent"]],
            entryComponents: [_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_10__["StudentDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _academics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AcademicsRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_12__["MatcomponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                    multi: true
                }
            ],
            exports: [_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_10__["StudentDetailsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AcademicsModule);
    return AcademicsModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/student-details/student-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/academics/student-details/student-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-expansion-panel [expanded]=true class=\"px-12\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>studentDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>firstname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.firstName ? applicantInfo?.studentDetails?.firstName : \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>middlename</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.middleName ? applicantInfo?.studentDetails?.middleName : \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>lastname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.lastName ? applicantInfo?.studentDetails?.lastName : \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>gender</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.gender?applicantInfo?.gender:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\" *ngIf=\"applicantInfo?.sourceOfRegistrationInfo\">\n          <span translate>sourceOfRegistationInformation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\" *ngIf=\"applicantInfo?.sourceOfRegistrationInfo\">\n          {{applicantInfo?.sourceOfRegistrationInfo ? applicantInfo?.sourceOfRegistrationInfo: \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>dateofbirth</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.dateOfBirth ? getFormattedDateBySchoolDateFormat(applicantInfo.studentDetails.dateOfBirth): \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>adhaarNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.aadhaarNumber ? applicantInfo?.studentDetails?.aadhaarNumber: \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>caste</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.caste ? applicantInfo?.caste: \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>religion</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.religion? applicantInfo?.religion:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"applicantInfo?.additionalInformation\" fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>additionalInformation</span>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"applicantInfo?.additionalInformation\" fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.additionalInformation?applicantInfo?.additionalInformation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>motherToungeLanguage</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherToungeLanguage?applicantInfo?.motherToungeLanguage:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>primaryEmail</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.email1?applicantInfo?.studentDetails?.email1:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>secondaryEmail</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.email2?applicantInfo?.studentDetails?.email2:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>mobilenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.mobileTel?applicantInfo?.studentDetails?.mobileTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>alternatenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.otherTel?applicantInfo?.studentDetails?.otherTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>landlinenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.landTel?applicantInfo?.studentDetails?.landTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>addressline1</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.addressLine1?applicantInfo?.studentDetails?.addressLine1:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>addressline2</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.addressLine2?applicantInfo?.studentDetails?.addressLine2:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>addressline3</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.addressLine3?applicantInfo?.studentDetails?.addressLine3:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>city</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.addressCity?applicantInfo?.studentDetails?.addressCity:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>state</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.stateName?applicantInfo?.stateName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>country</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.country?applicantInfo?.country:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>pincode</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentDetails?.addressPincode?applicantInfo?.studentDetails?.addressPincode:\"-\"}}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"px-12\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>classAndSection</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n        <mat-list-item  *ngIf=\"applicantInfo?.currentSchoolName\" fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>currentSchoolName</span>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"applicantInfo?.currentSchoolName\" fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.currentSchoolName?applicantInfo?.currentSchoolName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"applicantInfo?.currentSchoolCity\" fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>currentSchoolCity</span>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"applicantInfo?.currentSchoolCity\" fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.currentSchoolCity?applicantInfo?.currentSchoolCity:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"applicantInfo?.currentClass\" fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>currentClass</span>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"applicantInfo?.currentClass\" fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.currentClass?applicantInfo?.currentClass:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Year</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.academicSessionName?applicantInfo?.academicSessionName :\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>School Board</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.schoolBoardName?applicantInfo?.schoolBoardName :\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Class</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.className?applicantInfo?.className :\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Section</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.sectionName?applicantInfo?.sectionName :\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Group Name</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentGroupName?applicantInfo?.studentGroupName :\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Roll Number</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.rollNumber?applicantInfo?.rollNumber :\"-\"}}\n        </mat-list-item>\n\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"px-12\" *ngIf=\"applicantInfo?.fatherDetails\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>fatherDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>firstname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.firstName?applicantInfo?.fatherDetails?.firstName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>middlename</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.middleName?applicantInfo?.fatherDetails?.middleName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>lastname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.lastName?applicantInfo?.fatherDetails?.lastName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>occupation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.occupation?applicantInfo?.fatherDetails?.occupation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>designation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.designation?applicantInfo?.fatherDetails?.designation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>organization</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.organization?applicantInfo?.fatherDetails?.organization:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>adhaarNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.aadhaarNumber?applicantInfo?.fatherDetails?.aadhaarNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>panNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.panNumber?applicantInfo?.fatherDetails?.panNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>email</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.email1?applicantInfo?.fatherDetails?.email1:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>mobilenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.mobileTel?applicantInfo?.fatherDetails?.mobileTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>alternatenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.otherTel?applicantInfo?.fatherDetails?.otherTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>landlinenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.fatherDetails?.landTel?applicantInfo?.fatherDetails?.landTel:\"-\"}}\n        </mat-list-item>\n\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"px-12\" *ngIf=\"applicantInfo?.motherDetails\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>motherDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>firstname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.firstName?applicantInfo?.motherDetails?.firstName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>middlename</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.middleName ? applicantInfo.motherDetails.middleName : \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>lastname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.lastName?applicantInfo?.motherDetails?.lastName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>occupation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.occupation?applicantInfo?.motherDetails?.occupation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>designation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.designation?applicantInfo?.motherDetails?.designation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>organization</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.organization?applicantInfo?.motherDetails?.organization:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>adhaarNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.aadhaarNumber ? applicantInfo?.motherDetails?.aadhaarNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>panNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.panNumber?applicantInfo?.motherDetails?.panNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>email</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.email1?applicantInfo?.motherDetails?.email1:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>mobilenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.mobileTel?applicantInfo?.motherDetails?.mobileTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>alternatenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.otherTel?applicantInfo?.motherDetails?.otherTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>landlinenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.motherDetails?.landTel?applicantInfo?.motherDetails?.landTel:\"-\"}}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"px-12\" *ngIf=\"applicantInfo?.guardianDetails\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>guardianDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>firstname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.firstName?applicantInfo?.guardianDetails?.firstName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>middlename</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.middleName ? applicantInfo?.guardianDetails?.middleName : \"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>lastname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.lastName?applicantInfo?.guardianDetails?.lastName:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>gender</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.gender? applicantInfo?.guardianDetails?.gender:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>occupation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.occupation?applicantInfo?.guardianDetails?.occupation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>designation</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.designation?applicantInfo?.guardianDetails?.designation:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>organization</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.organization?applicantInfo?.guardianDetails?.organization:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>adhaarNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.aadhaarNumber ? applicantInfo?.guardianDetails?.aadhaarNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>panNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.panNumber?applicantInfo?.guardianDetails?.panNumber:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>email</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.email1?applicantInfo?.guardianDetails?.email1:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>mobilenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.mobileTel?applicantInfo?.guardianDetails?.mobileTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>alternatenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.otherTel?applicantInfo?.guardianDetails?.otherTel:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>landlinenumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.guardianDetails?.landTel?applicantInfo?.guardianDetails?.landTel:\"-\"}}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel id=\"emergencycontact\" class=\"px-12\" *ngIf=\"applicantInfo?.studentEmergencyContactDetails\" (afterExpand)=\"onClickEmergency('emergencycontact')\" (afterCollapse)=\"onClickEmergency('emergencycontact')\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>studentEmergencyContactDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"column\" fxFlex.gt-sm=\"80\" fxFlex=\"100\" class=\"mx-auto mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emergencyContactName1</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emergencyContactName1 ? applicantInfo?.studentEmergencyContactDetails?.emergencyContactName1:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emergencyContactRelation1</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emergencyContactRelation1 ? applicantInfo?.studentEmergencyContactDetails?.emergencyContactRelation1:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emgergencyContactTelNumber1</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emgergencyContactTelNumber1 ? applicantInfo?.studentEmergencyContactDetails?.emgergencyContactTelNumber1:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emergencyContactName2</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emergencyContactName2 ? applicantInfo?.studentEmergencyContactDetails?.emergencyContactName2:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emergencyContactRelation2</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emergencyContactRelation2 ? applicantInfo?.studentEmergencyContactDetails?.emergencyContactRelation2:\"-\"}}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>emgergencyContactTelNumber2</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{applicantInfo?.studentEmergencyContactDetails?.emgergencyContactTelNumber2 ? applicantInfo?.studentEmergencyContactDetails?.emgergencyContactTelNumber2:\"-\"}}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"px-12\" *ngIf=\"applicantInfo?.studentApplicantSiblings?.length\" id=\"siblingcontact\" (afterExpand)=\"onClickEmergency('siblingcontact')\" (afterCollapse)=\"onClickEmergency('siblingcontact')\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"font-size-18 font-weight-600\" translate>siblingsDetails</mat-panel-title>\n    </mat-expansion-panel-header>\n    <div *ngFor=\"let item of applicantInfo?.studentApplicantSiblings;let i = index;\" fxLayout=\"column\" fxFlex.gt-sm=\"80\"\n      fxFlex=\"100\" class=\"mx-12 mb-20\">\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"institution-details pt-0 border confirm-table\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>firstname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.firstName? item?.firstName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>middlename</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.middleName?item?.middleName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>lastname</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.lastName?item?.lastName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Class</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.className?item?.className:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>Section</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.sectionName?item?.sectionName:\"-\"}}\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span translate>admissionNumber</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          {{item?.siblingAdmissionNumber?item?.siblingAdmissionNumber:\"-\"}}\n        </mat-list-item>\n\n      </mat-list>\n    </div>\n  </mat-expansion-panel>\n\n"

/***/ }),

/***/ "./src/app/modules/academics/student-details/student-details.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/academics/student-details/student-details.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image img {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.mat-expansion-panel {\n  margin: 10px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSBpbWd7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgICBtYXJnaW46MTBweCAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-details/student-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/academics/student-details/student-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");




var StudentDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentDetailsComponent, _super);
    function StudentDetailsComponent(storeService, changeDetector) {
        var _this = _super.call(this) || this;
        _this.storeService = storeService;
        _this.changeDetector = changeDetector;
        _this.isApplicationInfo = false;
        return _this;
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
    };
    StudentDetailsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.applicantInfo.currentValue) {
            if (this.applicantInfo.studentDetails && this.applicantInfo.studentDetails.attachment) {
                this.profileImage = this.storeService.getFilePath(this.applicantInfo.studentDetails.attachment.fileName);
            }
            this.changeDetector.detectChanges();
        }
    };
    StudentDetailsComponent.prototype.onClickEmergency = function (id) {
        this.scrollIntoViewById(id);
        document.getElementById(id).click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('studentDetails'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentDetailsComponent.prototype, "applicantInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentDetailsComponent.prototype, "isApplicationInfo", void 0);
    StudentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details.component.html */ "./src/app/modules/academics/student-details/student-details.component.html"),
            styles: [__webpack_require__(/*! ./student-details.component.scss */ "./src/app/modules/academics/student-details/student-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-academics-module~app-modules-academics-attendance-attendance-module~ap~4633b072.js.map