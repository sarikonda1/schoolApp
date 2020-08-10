(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-academics-grading-academic-grading-module"],{

/***/ "./src/app/modules/academics/grading/academic-grading-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/academics/grading/academic-grading-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AcademicGradingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicGradingRoutingModule", function() { return AcademicGradingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_schedule_test_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-schedule/test-schedule.component */ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.ts");
/* harmony import */ var _class_assessment_grades_class_assessment_grades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-assessment-grades/class-assessment-grades.component */ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.ts");
/* harmony import */ var _shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/test-grading/test-grading.component */ "./src/app/shared/test-grading/test-grading.component.ts");
/* harmony import */ var _report_cards_report_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-cards/report-cards.component */ "./src/app/modules/academics/grading/report-cards/report-cards.component.ts");
/* harmony import */ var _report_card_details_report_card_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-card-details/report-card-details.component */ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.ts");
/* harmony import */ var _search_student_information_search_student_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-student-information/search-student-information.component */ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.ts");









var routes = [
    { path: 'test-schedule', component: _test_schedule_test_schedule_component__WEBPACK_IMPORTED_MODULE_3__["TestScheduleComponent"], data: { title: 'Test Schedule' } },
    { path: 'class-assessment-grades', component: _class_assessment_grades_class_assessment_grades_component__WEBPACK_IMPORTED_MODULE_4__["ClassAssessmentGradesComponent"], data: { title: 'Class Assessment Grades' } },
    { path: 'test-grading', component: _shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_5__["TestGradingComponent"], data: { title: 'Test Grading' } },
    { path: 'test-schedule/:testScheduleId', component: _shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_5__["TestGradingComponent"], data: { title: 'Edit Test Schedule' } },
    { path: 'report-cards/search', component: _report_cards_report_cards_component__WEBPACK_IMPORTED_MODULE_6__["ReportCardsComponent"], data: { title: 'Report Cards Search' } },
    { path: 'report-cards/search/report-card-details/:studentId/:termId', component: _report_card_details_report_card_details_component__WEBPACK_IMPORTED_MODULE_7__["ReportCardDetailsComponent"], data: { title: 'Report Card Details' } },
    { path: 'report-cards/additional-student-information', component: _search_student_information_search_student_information_component__WEBPACK_IMPORTED_MODULE_8__["SearchStudentInformationComponent"], data: { title: 'Additional Student Information' } },
];
var AcademicGradingRoutingModule = /** @class */ (function () {
    function AcademicGradingRoutingModule() {
    }
    AcademicGradingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AcademicGradingRoutingModule);
    return AcademicGradingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/grading/academic-grading.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/academics/grading/academic-grading.module.ts ***!
  \**********************************************************************/
/*! exports provided: AcademicGradingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicGradingModule", function() { return AcademicGradingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _test_schedule_test_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test-schedule/test-schedule.component */ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.ts");
/* harmony import */ var _academic_grading_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./academic-grading-routing.module */ "./src/app/modules/academics/grading/academic-grading-routing.module.ts");
/* harmony import */ var app_service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/grading-service/api/test-schedule-service */ "./src/app/service/grading-service/api/test-schedule-service.ts");
/* harmony import */ var _class_assessment_grades_class_assessment_grades_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./class-assessment-grades/class-assessment-grades.component */ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.ts");
/* harmony import */ var _service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../service/assessment-service/api/assessment-parameters.service */ "./src/app/service/assessment-service/api/assessment-parameters.service.ts");
/* harmony import */ var _service_grading_service_api_student_assessment_grade_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../service/grading-service/api/student-assessment-grade.service */ "./src/app/service/grading-service/api/student-assessment-grade.service.ts");
/* harmony import */ var _report_cards_report_cards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./report-cards/report-cards.component */ "./src/app/modules/academics/grading/report-cards/report-cards.component.ts");
/* harmony import */ var _report_card_details_report_card_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./report-card-details/report-card-details.component */ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.ts");
/* harmony import */ var _test_schedule_schedules_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./test-schedule/schedules.component */ "./src/app/modules/academics/grading/test-schedule/schedules.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_student_information_search_student_information_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search-student-information/search-student-information.component */ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.ts");

























var AcademicGradingModule = /** @class */ (function () {
    function AcademicGradingModule() {
    }
    AcademicGradingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _test_schedule_test_schedule_component__WEBPACK_IMPORTED_MODULE_13__["TestScheduleComponent"],
                _class_assessment_grades_class_assessment_grades_component__WEBPACK_IMPORTED_MODULE_16__["ClassAssessmentGradesComponent"],
                _report_cards_report_cards_component__WEBPACK_IMPORTED_MODULE_20__["ReportCardsComponent"],
                _report_card_details_report_card_details_component__WEBPACK_IMPORTED_MODULE_21__["ReportCardDetailsComponent"],
                _test_schedule_schedules_component__WEBPACK_IMPORTED_MODULE_22__["SchedulesComponent"],
                _search_student_information_search_student_information_component__WEBPACK_IMPORTED_MODULE_24__["SearchStudentInformationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _academic_grading_routing_module__WEBPACK_IMPORTED_MODULE_14__["AcademicGradingRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_11__["Ng2TelInputModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_12__["SatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["TokenInterceptor"],
                    multi: true
                },
                app_service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_15__["TestScheduleService"],
                _service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_17__["GardeTermConfigurationService"],
                _service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_18__["AssessmentParameterService"],
                _service_grading_service_api_student_assessment_grade_service__WEBPACK_IMPORTED_MODULE_19__["StudentAssessmentGradeService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [],
        })
    ], AcademicGradingModule);
    return AcademicGradingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-card-details/report-card-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-af-details [keyValues]=\"studentDetails\" [title]=\"'Student Information'\" [header]=\" 'REPORT CARD DATA' \"\n  [isBackButtonRequired]=true [infoKey]=\"'Report Cards Search'\">\n</app-af-details>\n\n<div class=\"px-sm-40 py-12\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-12\" fxLayout=\"column\">\n    <div fxLayoutAlign=\"end center\" class=\"icon-position\">\n      <button mat-mini-fab color=\"accent\" aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </div>\n    <mat-tab-group>\n      <mat-tab label=\"{{'GRADING TERM INFORMATION' | translate}}\">\n        <app-af-details [keyValues]=\"gradingTermInfo\" [isElevation]=\"true\" [isBackButtonRequired]=false>\n        </app-af-details>\n      </mat-tab>\n      <mat-tab label=\"{{'TESTS AND CONTRIBUTION' | translate }}\">\n        <app-table [settings]=\"testContributionsSettings\"></app-table>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n<div class=\"px-sm-40 py-12\" *ngIf=\"reportCradDetails\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-12 position-relative\" fxLayout=\"column\">\n    <div fxLayout=\"row\" class=\"position-absolute\" *ngIf=\"showButton\"\n      [@animate]=\"{value:'*',params:{delay:'100ms',x:'-40px'}}\">\n      <button mat-raised-button class=\"mr-20\" color=\"accent\" *ngIf=\"isRouteToAssessments === true\"\n        (click)=\"closeAssessmentForm()\"><span translate>Done</span></button>\n      <button mat-raised-button color=\"primary\"\n        *ngIf=\"isRouteToAssessments === false && studentAssessmentDeatils?.rows?.length\"\n        (click)=\"navAssessmentGrades()\"> <span translate>Edit Assessment Grades</span></button>\n    </div>\n    <mat-tab-group (selectedTabChange)=\"onTabChange($event)\">\n      <mat-tab label=\"{{'COURSE SCORES & GRADES' | translate}}\">\n        <table *ngIf=\"rowGroupingColumns?.length > 0;else no_data\" class=\"w-100-p tableBar groupTable\" mat-table\n          [dataSource]=\"tableData\" matSort matSortDisable>\n          <ng-container *ngFor=\"let column of cols; let i = index\" matColumnDef=\"{{column.field}}\">\n            <th mat-header-cell *matHeaderCellDef>\n              <div class=\"headerTitle\" disableClear>\n                <strong class=\"mb-0 title mat-subheading-1 pl-4\" translate>{{column.header}}</strong>\n              </div>\n            </th>\n            <div *ngFor=\"let rowGroupingColumn of rowGroupingColumns; let k = index\">\n              <div *ngIf=\"column.field == rowGroupingColumn\">\n                <td mat-cell *matCellDef=\"let row; let j=index\" [attr.rowspan]=\"getRowSpan(rowGroupingColumn, j)\"\n                  [style.display]=\"getRowSpan(rowGroupingColumn, j) ? '' : 'none'\"\n                  [ngClass]=\"tdGroupingClass[rowGroupingColumn]\">\n\n                  <mdt-table-cell [row]=\"row\" [column]=\"column\">\n                    <p matTooltipClass=\"matTool-tip\" matTooltipPosition=\"above\" [matTooltip]=\"row[column.field]\"\n                      class=\"text-truncate pl-4\">\n                      {{row[column.field]}}\n                    </p>\n                  </mdt-table-cell>\n                </td>\n              </div>\n            </div>\n            <td mat-cell *matCellDef=\"let row;let l = index\">\n              <mdt-table-cell [row]=\"row\" [column]=\"column\">\n                <p matTooltipClass=\"matTool-tip\" matTooltipPosition=\"above\" [matTooltip]=\"row[column.field]\"\n                  class=\"text-truncate pl-4 \">\n                  {{row[column.field]}}\n                </p>\n              </mdt-table-cell>\n            </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let even = even;\"\n            [ngClass]=\"{'even-blue-bg': row.isCheck, 'even-grey-bg': (even && !row.isCheck), 'custom-total': row.testType == 'Total'}\">\n          </tr>\n        </table>\n      </mat-tab>\n      <mat-tab label=\"{{'ASSESSEMENT GRADES'| translate}}\">\n        <app-class-assessment-grades *ngIf=\"isRouteToAssessments; else student_assessments\"\n          [studentData]=\"studentAssessmentData\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-40px'}}\">\n        </app-class-assessment-grades>\n\n        <ng-template #student_assessments>\n          <app-table *ngIf=\"studentAssessmentDeatils?.rows?.length && isRouteToAssessments === false;else no_data \"\n            [settings]=\"studentAssessmentDeatils\">\n          </app-table>\n        </ng-template>\n      </mat-tab>\n      <!-- <mat-tab label=\" Go To ASSESSEMENT GRADES\">\n        <button (click)=\"navAssessmentGrades()\"> Go To Assessment Grades</button>\n        <button (click)=\"closeAssessmentForm()\"> Close</button>\n      </mat-tab> -->\n    </mat-tab-group>\n  </div>\n</div>\n\n<ng-template #no_data>\n  <div class=\"errorMsg\">\n    <p class=\"red-text text-center mb-0 font-weight-bold p-24\" translate>No Data Found</p>\n  </div>\n</ng-template>\n\n<mat-menu #menu=\"matMenu\">\n  <ng-container *ngFor=\"let item of operations\">\n    <button mat-menu-item (click)=\"onSelectAction(item)\">\n      <mat-icon>{{item.icon}}</mat-icon>{{item.name | translate}}\n    </button>\n  </ng-container>\n</mat-menu>"

/***/ }),

/***/ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-card-details/report-card-details.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-position {\n  position: relative; }\n  .icon-position button {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    z-index: 999; }\n  .custom-total td p {\n  color: #03a9f4 !important;\n  font-weight: 800; }\n  .position-relative {\n  position: relative; }\n  .position-relative .position-absolute {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    z-index: 999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvcmVwb3J0LWNhcmQtZGV0YWlscy9yZXBvcnQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHcEI7RUFDSSx5QkFBd0I7RUFDeEIsZ0JBQWUsRUFBQTtFQUVuQjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1Esa0JBQWtCO0lBQ2xCLFNBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2FkZW1pY3MvZ3JhZGluZy9yZXBvcnQtY2FyZC1kZXRhaWxzL3JlcG9ydC1jYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYnV0dG9ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG59XG4uY3VzdG9tLXRvdGFsIHRkIHB7XG4gICAgY29sb3I6IzAzYTlmNCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OjgwMDtcbn1cbi5wb3NpdGlvbi1yZWxhdGl2ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnBvc2l0aW9uLWFic29sdXRle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDoxMHB4O1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-card-details/report-card-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReportCardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCardDetailsComponent", function() { return ReportCardDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/report-card-service/grade-report.service */ "./src/app/service/report-card-service/grade-report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_11__);












var ReportCardDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReportCardDetailsComponent, _super);
    function ReportCardDetailsComponent(route, commonService, gradeReportService, paymentService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.commonService = commonService;
        _this.gradeReportService = gradeReportService;
        _this.paymentService = paymentService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'ReportCardDetailsComponent';
        _this.gradingTermInfo = [];
        _this.tableData = {};
        _this.spans = [];
        _this.displayedColumns = [];
        _this.operations = [];
        _this.isRouteToAssessments = false;
        return _this;
    }
    ReportCardDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.studentId) {
                _this.studentId = params.studentId;
            }
            if (params.termId) {
                _this.graingTermId = params.termId;
            }
        });
        this.operations = [
            {
                name: (app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD_OPERATION),
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD
            },
        ];
        this.getReportCardDetails();
    };
    ReportCardDetailsComponent.prototype.onTabChange = function (event) {
        this.showButton = event.index === 1 ? true : false;
    };
    ReportCardDetailsComponent.prototype.getReportCardDetails = function () {
        var _this = this;
        this.gradeReportService.studentReportsReportsGetGet(this.studentId, this.graingTermId)
            .subscribe(function (res) { return _this.setReportCardDetails(res); }, function (err) { return _this.errorResponse(err); });
    };
    ReportCardDetailsComponent.prototype.setReportCardDetails = function (response) {
        this.reportCradDetails = response.gradeTermStudentDataView;
        if (this.reportCradDetails) {
            if (this.reportCradDetails.gradingTermDataSummaryId && this.reportCradDetails.statusCode !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].REPORT_INCOMPLETE) {
                this.operations = [];
                this.operations.push({
                    name: (app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD_OPERATION),
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD
                }, {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW_REPORT_CARD_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DOWNLOAD,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW_REPORT_CARD
                }, {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CLEAR_REPORT_CARD_DATA_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CLEAR_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CLEAR_REPORT_CARD_DATA,
                }, {
                    name: (app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].APPROVE_PENDING_REPORT_CARD_OPERATION),
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DONE,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].APPROVE_PENDING_REPORT_CARD
                });
            }
            else {
                this.setOperations();
            }
            this.gradingTermInfo = this.getKeyValuesOfObject(this.getRequiredTermDeatils(this.reportCradDetails));
            this.studentDetails = this.getKeyValuesOfObject(this.getRequiredStudentDeatils(this.reportCradDetails));
            this.prepareTestContributionsTable();
        }
    };
    ReportCardDetailsComponent.prototype.setOperations = function () {
        this.operations = [
            {
                name: (app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD_OPERATION),
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD
            },
        ];
    };
    ReportCardDetailsComponent.prototype.prepareTestContributionsTable = function () {
        this.particurlarsCols = [
            { field: 'testTypeName', header: 'Name', sort: false },
            { field: 'isDisplayOnreportCard', header: 'Displayed On Report Card', sort: false },
            { field: 'marksGroupCriteria', header: 'Marks Group Criteria', sort: false },
            { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
            { field: 'displayOption', header: 'Display Option', sort: false }
        ];
        if (this.reportCradDetails.gradingTermTestDataViewModel && this.reportCradDetails.gradingTermTestDataViewModel.length) {
            this.reportCradDetails.gradingTermTestDataViewModel.map(function (e) {
                e.isDisplayOnreportCard = e.isDisplayOnreportCard ? 'Yes' : 'NO';
            });
            if (this.reportCradDetails.gradingTermTestDataViewModel[0].consideration) {
                this.particurlarsCols.splice(1, 0, { field: 'consideration', header: 'Considerations %', sort: false });
            }
            else {
                this.particurlarsCols.splice(1, 0, { field: 'contribution', header: 'Contribution %', sort: false });
            }
        }
        this.testContributionsSettings = {
            rows: this.reportCradDetails.gradingTermTestDataViewModel,
            columns: this.particurlarsCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: false,
            padding: true,
            hideHeader: true,
            headerOperations: {
                addingForm: {
                    required: false
                }
            },
        };
        this.setCourseData();
        this.setAssessmentData();
    };
    ReportCardDetailsComponent.prototype.setAssessmentData = function () {
        var particurlarsCols = [
            { field: 'assessmentGroup', header: 'Assessment Group', sort: false },
            { field: 'assessmentCategory', header: 'Assessment Category', sort: false },
            { field: 'assessmentParameter', header: 'Assessment Parameter', sort: false },
            { field: 'assessmentSubCategory', header: 'Assessment Subcategory', sort: false },
            { field: 'studentGrade', header: 'Student Grade', sort: false }
        ];
        this.studentAssessmentDeatils = {
            rows: this.reportCradDetails.studentAssessment,
            columns: particurlarsCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: false,
            padding: true,
            hideHeader: true,
            headerOperations: {
                addingForm: {
                    required: false
                }
            },
            rowGroupingColumns: ['assessmentGroup', 'assessmentCategory', 'assessmentParameter', 'assessmentSubCategory', 'studentGrade']
        };
    };
    ReportCardDetailsComponent.prototype.setCourseData = function () {
        var _this = this;
        var courseScoreDeatilsCols = [
            { field: 'courseName', header: 'Course', sort: false },
            { field: 'testType', header: 'Test Type', sort: false },
            { field: 'consideration', header: 'Consideration', sort: false },
            { field: 'gradeIndicator', header: 'Grade', sort: false }
        ];
        var maxRows = 0;
        var additionalColumns = [];
        if (this.reportCradDetails.gradingTermStudentCourseDataView && this.reportCradDetails.gradingTermStudentCourseDataView.length) {
            this.reportCradDetails.gradingTermStudentCourseDataView.map(function (e) {
                if (maxRows < e.gradingTermStudentCourseDataDetails.length) {
                    maxRows = e.gradingTermStudentCourseDataDetails.length;
                }
            });
            var i_1 = 0;
            if (this.reportCradDetails.gradingTermStudentCourseDataView[0].gradingTermAdditionalColumnDataDetailsView) {
                this.reportCradDetails.gradingTermStudentCourseDataView[0].gradingTermAdditionalColumnDataDetailsView.map(function (ele) {
                    additionalColumns.push({ field: 'additionalCol' + i_1, header: ele.terms, sort: false });
                    i_1++;
                });
            }
        }
        for (var i = 0; i < maxRows; i++) {
            courseScoreDeatilsCols.splice(2 + i, 0, { field: 'test' + i, header: 'Test', sort: false });
        }
        if (additionalColumns && additionalColumns.length) {
            additionalColumns.map(function (e) {
                courseScoreDeatilsCols.push(e);
            });
        }
        var courseRows = [];
        if (this.reportCradDetails.gradingTermStudentCourseDataView && this.reportCradDetails.gradingTermStudentCourseDataView.length) {
            this.reportCradDetails.gradingTermStudentCourseDataView.map(function (e) {
                var defaultData = {
                    courseName: e.courseName,
                    testType: e.testType,
                    consideration: e.consideration,
                    gradeIndicator: e.gradeIndicator
                };
                if (e.testTypeId) {
                    e.gradingTermStudentCourseDataDetails.map(function (scores, i) {
                        defaultData['test' + i] = scores.testScore;
                    });
                    for (var j = e.gradingTermStudentCourseDataDetails.length; j < maxRows; j++) {
                        defaultData['test' + j] = '---';
                    }
                    courseRows.push(defaultData);
                }
                else {
                    defaultData['testType'] = 'Total';
                    if (e.gradingTermAdditionalColumnDataDetailsView) {
                        e.gradingTermAdditionalColumnDataDetailsView.map(function (ele) {
                            var matchedData = courseScoreDeatilsCols.find(function (el) { return el.header === ele.terms; });
                            if (matchedData) {
                                defaultData[matchedData.field] = ele.isGrandTotalColumn ? ele.gradeIndicator : ele.consideration;
                            }
                        });
                    }
                    courseRows.push(defaultData);
                }
            });
        }
        if (courseRows.length) {
            courseRows.push({
                testType: this.reportCradDetails.overallGradeDisplayName ? this.reportCradDetails.overallGradeDisplayName : 'OVERALL GRADE',
                consideration: this.reportCradDetails.studentMarks + ' / ' + this.reportCradDetails.totalMarks,
                gradeIndicator: this.reportCradDetails.gradeIndicator
            });
        }
        this.courseScoreDeatils = {
            rows: courseRows,
            columns: courseScoreDeatilsCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: true,
            padding: true,
            hideHeader: true,
            headerOperations: {
                addingForm: {
                    required: false
                }
            },
            rowGroupingColumns: ['courseName']
        };
        this.tableData = this.courseScoreDeatils.rows;
        this.cols = [];
        if (this.courseScoreDeatils.columns && !this.cols.length) {
            this.courseScoreDeatils.columns.forEach(function (i) { return _this.cols.push(i); });
        }
        if (this.tableData.length && this.courseScoreDeatils.rowGroupingColumns) {
            this.rowGroupingColumns = this.courseScoreDeatils.rowGroupingColumns;
            this.parentColumn = this.courseScoreDeatils.rowGroupingColumns[0];
            this.tableData.sort(function (t1, t2) {
                var name1 = t1[_this.parentColumn];
                var name2 = t2[_this.parentColumn];
                if (name1 > name2) {
                    return 1;
                }
                if (name1 < name2) {
                    return -1;
                }
                return 0;
            });
            this.rowGroupingColumns.forEach(function (columns) {
                _this.cacheSpan(columns);
            });
            this.rowGroupingClasses();
        }
        this.displayedColumns = this.cols.map(function (column) { return column.field; });
    };
    ReportCardDetailsComponent.prototype.getRowSpan = function (col, index) {
        return this.spans[index] && this.spans[index][col];
    };
    ReportCardDetailsComponent.prototype.checkPrevoiusColumn = function (j) {
        var _this = this;
        var isPriviousNotColumnGrouped = true;
        if (j > 0 && j < this.rowGroupingColumns.length - 1) {
            this.rowGroupingColumns.forEach(function (element) {
                if (element === _this.rowGroupingColumns[j - 1]) {
                    isPriviousNotColumnGrouped = false;
                }
            });
        }
        return isPriviousNotColumnGrouped;
    };
    ReportCardDetailsComponent.prototype.cacheSpan = function (key) {
        for (var i = 0; i < this.tableData.length;) {
            var currentValue = this.tableData[i][key];
            var parentValue = this.tableData[i][this.parentColumn];
            var count = 1;
            for (var j = i + 1; j < this.tableData.length; j++) {
                if (parentValue === this.tableData[j][this.parentColumn]) {
                    if (currentValue !== this.tableData[j][key]) {
                        break;
                    }
                    count++;
                }
            }
            if (!this.spans[i]) {
                this.spans[i] = {};
            }
            this.spans[i][key] = count;
            i += count;
        }
    };
    ReportCardDetailsComponent.prototype.getRequiredTermDeatils = function (term) {
        return {
            'Term Name': term.gradingTermName,
            'Evaluation Type': term.evaluationType,
            'Term Code': term.termCode,
            'Generate Report Card': term.generateReportCard ? 'Yes' : 'No',
            'Start Date': this.getFormattedDateBySchoolDateFormat(term.startDate),
            'Generate Overall Grade': term.generateOverallGrade ? 'Yes' : 'No',
            'End Date': this.getFormattedDateBySchoolDateFormat(term.endDate),
            'Overall Grade Display Name': term.overallGradeDisplayName,
            'Report Card Status': term.reportCardStatus,
            'Last Generated Error Message': term.lastGeneratedErrorMessage
        };
    };
    ReportCardDetailsComponent.prototype.getRequiredStudentDeatils = function (student) {
        return {
            'Student Name': student.studentName,
            'Roll Number': student.rollNumber,
            'Admission Number': student.admissionNumber,
            'Board': student.schoolBoardName,
            'Class': student.class,
            'Section': student.section,
            'Date Of Birth': this.getFormattedDateBySchoolDateFormat(student.dateOfBirth),
            'Father Name': student.fatherName,
            'Email': student.email,
            'Phone Number': student.phoneNumber,
        };
    };
    ReportCardDetailsComponent.prototype.onSelectAction = function (action) {
        var _this = this;
        var params = {
            gradeTermId: this.reportCradDetails.gradingTermId,
            studentIds: [this.reportCradDetails.schoolAcademicSessionStudentId],
            classId: this.reportCradDetails.classId,
            sectionId: this.reportCradDetails.sectionId,
        };
        if (action.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].GENERATE_REPORT_CARD.toLowerCase()) {
            this.generateReportCard(params);
        }
        else if (action.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CLEAR_REPORT_CARD_DATA.toLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].WARNING_ON_CLEAR_REPORT_CARD, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (actionDailog) {
                if (actionDailog === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    // tslint:disable-next-line: max-line-length
                    _this.gradeReportService.reportsClearStudentReportsDelete(params.studentIds, _this.reportCradDetails.gradingTermId, _this.reportCradDetails.classId, _this.reportCradDetails.sectionId)
                        .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { return _this.errorResponse(err); });
                }
            });
        }
        else if (action.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].APPROVE_PENDING_REPORT_CARD.toLowerCase()) {
            this.gradeReportService.reportsApprovePendingapprovalReportsPut(params.studentIds, params.gradeTermId, params.classId, params.sectionId)
                .subscribe(function (res) { return _this.onApproveReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (action.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW_REPORT_CARD.toLowerCase()
            && (this.reportCradDetails.gradingTermDataSummaryId || this.reportCradDetails.statusCode === 'RPTG_PA')) {
            this.paymentService.reportPrint(this.reportCradDetails.gradingTermDataSummaryId)
                .subscribe(function (res) { return _this.viewReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    ReportCardDetailsComponent.prototype.generateReportCard = function (data) {
        var _this = this;
        this.gradeReportService.reportsGenerateStudentReportGet(data.gradeTermId, data.studentIds, data.classId, data.sectionId)
            .subscribe(function (res) { return _this.onClearReportCard(res, false); }, function (err) { return _this.errorResponse(err); });
    };
    ReportCardDetailsComponent.prototype.onClearReportCard = function (res, onClear) {
        if (onClear === void 0) { onClear = true; }
        if (onClear) {
            this.rowGroupingColumns = [];
        }
        this.openSnackBar(res.messages.ResultMessage);
        this.getReportCardDetails();
    };
    ReportCardDetailsComponent.prototype.onApproveReportCard = function (res) {
        if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["OK"]) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].RPORT_APPROVED_SUCCESSFULLY);
        }
        else {
            this.openSnackBar(res.messages.ResultMessage);
        }
        this.getReportCardDetails();
    };
    ReportCardDetailsComponent.prototype.viewReportCard = function (res) {
        if (res.fileName) {
            window.open(this.storeService.getFilePath(res.fileName));
        }
    };
    ReportCardDetailsComponent.prototype.navAssessmentGrades = function () {
        this.isRouteToAssessments = true;
        this.studentAssessmentData = {
            student: {
                label: this.reportCradDetails.studentName,
                value: this.reportCradDetails.schoolAcademicSessionStudentId
            },
            schoolBoardId: this.reportCradDetails.schoolBoardId,
            classId: this.reportCradDetails.classId,
            sectionId: this.reportCradDetails.sectionId,
            gradingTermId: this.reportCradDetails.gradingTermId
        };
    };
    ReportCardDetailsComponent.prototype.closeAssessmentForm = function () {
        this.isRouteToAssessments = false;
        this.getReportCardDetails();
    };
    ReportCardDetailsComponent.prototype.rowGroupingClasses = function () {
        var _this = this;
        this.tdGroupingClass = [];
        this.cols.forEach(function (column, index) {
            var findGroupingIndex = _this.rowGroupingColumns.findIndex(function (rowGroupingColumn) {
                return column.field === rowGroupingColumn;
            });
            if (findGroupingIndex >= 0) {
                if (index > 0) {
                    var previousColumnClass = _this.tdGroupingClass[_this.cols[index - 1].field];
                    if (previousColumnClass.includes('border-right')) {
                        _this.tdGroupingClass[column.field] = 'border-right';
                    }
                    else {
                        _this.tdGroupingClass[column.field] = 'border-right border-left';
                    }
                }
                else {
                    _this.tdGroupingClass[column.field] = 'border-right';
                }
            }
            else {
                _this.tdGroupingClass[column.field] = '';
            }
        });
    };
    ReportCardDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-card-details',
            template: __webpack_require__(/*! ./report-card-details.component.html */ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.html"),
            providers: [app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_4__["GradeReportService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"], app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_10__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./report-card-details.component.scss */ "./src/app/modules/academics/grading/report-card-details/report-card-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_4__["GradeReportService"], app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ReportCardDetailsComponent);
    return ReportCardDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/grading/report-cards/report-cards.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-cards/report-cards.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-40 pt-40\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\">{{'Report Cards Search' | translate }}</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"p-16 border-bottom\">\n      <button (click)=\"getHelpText('Report Cards Search')\" mat-button>\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <form [formGroup]=\"reportCardsSearchForm\" (ngSubmit)=\"searchReportCards()\" #paymentSearch=\"ngForm\" class=\"p-24\">\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #board>Board</mat-label>\n          <mat-select placeholder=\"Board\" formControlName=\"boardId\"\n            (selectionChange)=\"onSelectSchoolBoard($event.value)\" required>\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n              {{ board.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='board.innerText' [validationControl]=\"reportCardsSearchForm.controls.boardId\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select placeholder=\"Class\" formControlName=\"classId\" (selectionChange)=\"onClassChange($event.value)\"\n            required>\n            <mat-option *ngFor=\"let class of classesList\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='class.innerText' [validationControl]=\"reportCardsSearchForm.controls.classId\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select (selectionChange)=\"getGradingTerms()\" placeholder=\"Section\" formControlName=\"sectionId\" required>\n            <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='section.innerText'\n              [validationControl]=\"reportCardsSearchForm.controls.sectionId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n          <mat-label translate #gradingTerm>Grading Term</mat-label>\n          <mat-select placeholder=\"Grading Term\" formControlName=\"gradingTermId\" required>\n            <mat-option *ngFor=\"let term of gradingTermsList\" [value]=\"term.id\">\n              {{ term.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='gradingTerm.innerText'\n              [validationControl]=\"reportCardsSearchForm.controls.gradingTermId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div id=\"report-card-table\" fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-20\">\n        <button mat-raised-button type=\"reset\" color=\"primary\" class=\"text-uppercase mr-12\" (click)=\"onClear()\">\n          <span translate>Reset</span>\n        </button>\n        <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n          <span translate>Search</span>\n        </button>\n      </div>\n\n    </form>\n  </div>\n\n  <div *ngIf=\"reportCardDetails?.gradeTermStudenSummaryView?.list?.length\"\n    class=\"mat-elevation-z3 simple-table-container mt-20 radius-5\" fxLayout=\"column\">\n    <div fxLayoutAlign=\"space-between center\" class=\"px-24 py-20\">\n      <div class=\"py-8 px-20 font-size-18 text-uppercase\">Report Card Summary</div>\n      <button mat-mini-fab color=\"accent\" aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </div>\n    <div>\n      <mat-list class=\"pt-0 confirm-table border mb-28 mx-sm-auto\" fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"69\"\n        fxLayoutAlign=\"center center\">\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\">\n          {{ 'Number of Students' | translate }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n          {{ reportCardDetails?.gradingDetails?.noofStudents }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\">\n          {{ 'Number of completed Report Cards'  | translate }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n          {{ reportCardDetails?.gradingDetails?.noofCompletedReportcards }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\">\n          {{ 'Number of pending approval Report Cards' | translate }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n          {{ reportCardDetails?.gradingDetails?.noofpendingApprovalReportcards }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\">\n          {{ 'Number of Pending Incomplete Report Cards' | translate }}\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n          {{ reportCardDetails?.gradingDetails?.noofpendingReportcards }}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </div>\n</div>\n\n<app-table [settings]=\"tableSettings\" (getTableData)='getTableData($event)' (rowBasedAction)='onRowActions($event)'\n  (openAddForm)=\"onAddFormClick()\">\n</app-table>\n\n<mat-menu #menu=\"matMenu\">\n  <ng-container *ngFor=\"let item of operationsForSummary\">\n    <button mat-menu-item (click)=\"onSelectAction(item)\">\n      <mat-icon>{{item.icon}}</mat-icon>{{item.name |translate}}\n    </button>\n  </ng-container>\n</mat-menu>"

/***/ }),

/***/ "./src/app/modules/academics/grading/report-cards/report-cards.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-cards/report-cards.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvcmVwb3J0LWNhcmRzL3JlcG9ydC1jYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/academics/grading/report-cards/report-cards.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/academics/grading/report-cards/report-cards.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCardsComponent", function() { return ReportCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/report-card-service/grade-report.service */ "./src/app/service/report-card-service/grade-report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_17__);


















var ReportCardsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReportCardsComponent, _super);
    function ReportCardsComponent(gradeSetupService, classService, commonService, gradeTermConfigurationService, cd, router, gradeReportService, studentDbService, snackBar, paymentService, storeService, dialog, sanitizer) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.classService = classService;
        _this.commonService = commonService;
        _this.gradeTermConfigurationService = gradeTermConfigurationService;
        _this.cd = cd;
        _this.router = router;
        _this.gradeReportService = gradeReportService;
        _this.studentDbService = studentDbService;
        _this.snackBar = snackBar;
        _this.paymentService = paymentService;
        _this.storeService = storeService;
        _this.dialog = dialog;
        _this.sanitizer = sanitizer;
        _this.currentComponent = 'ReportCardsComponent';
        _this.isSchoolhasBoards = true;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.gradingTermsList = [];
        _this.tableSettings = {};
        _this.schoolBoards = [];
        _this.availableSections = [];
        _this.validate = true;
        _this.operationsForSummary = [];
        _this.zipViewModel = {
            fileNames: [],
            returnFileName: ''
        };
        return _this;
    }
    ReportCardsComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.setColumnHeaders();
        this.initializeSearchViewModel();
        this.initializeTableSettings();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.reportCardSearchViewModel = modelTableComponent;
            this.reportCardsSearchForm.patchValue(modelTableComponent);
            this.onSelectSchoolBoard(this.reportCardsSearchForm.value.boardId, true);
            this.getAvailableSections(this.reportCardsSearchForm.value.boardId, this.reportCardsSearchForm.value.classId);
            this.getGradingTerms(true);
            this.searchReportCards();
        }
        this.getSchoolBoardsList();
    };
    ReportCardsComponent.prototype.initializeForm = function () {
        this.reportCardsSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ReportCardsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'rollNumber', header: 'Roll Number', sort: true },
            { field: 'admissionNumber', header: 'Admission Number', sort: true },
            { field: 'gradingTermName', header: 'Grading Term', sort: true },
            { field: 'reportCardStatus', header: 'Report Card Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    ReportCardsComponent.prototype.initializeSearchViewModel = function () {
        this.reportCardSearchViewModel = {
            schoolAcademicSessionStudentId: null,
            board: [],
            studentName: [],
            gradingTermId: [],
            gradingterm: null,
            reportcardstatus: [],
            admissionNumber: null,
            rollNumber: [],
            classIds: [],
            sectionIds: [],
            studentIds: [],
            statusIds: [],
            sortOrder: 0,
            sortBy: null,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PAGESIZE
        };
    };
    ReportCardsComponent.prototype.searchReportCards = function () {
        var _this = this;
        if (this.reportCardsSearchForm.valid) {
            Object.assign(this.reportCardSearchViewModel, this.reportCardsSearchForm.value);
            this.setModelDataTableComponent(this.currentComponent, this.reportCardSearchViewModel);
            this.gradeReportService.studentReportsFetchReportsDetailsGet(this.reportCardSearchViewModel.schoolAcademicSessionStudentId, this.reportCardSearchViewModel.boardId, this.reportCardSearchViewModel.studentName, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.gradingterm, this.reportCardSearchViewModel.reportcardstatus, this.reportCardSearchViewModel.admissionNumber, this.reportCardSearchViewModel.rollNumber, this.reportCardSearchViewModel.classId, this.reportCardSearchViewModel.sectionId, this.reportCardSearchViewModel.studentIds, this.reportCardSearchViewModel.statusIds, this.reportCardSearchViewModel.sortOrder, this.reportCardSearchViewModel.sortBy, this.reportCardSearchViewModel.pageNumber, this.reportCardSearchViewModel.pageSize)
                .subscribe(function (res) { return _this.setReportCardDetails(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    ReportCardsComponent.prototype.setFormValuesToViewModel = function () {
        if (this.reportCardsSearchForm.value.boardId) {
            this.reportCardSearchViewModel.boardId = [this.reportCardsSearchForm.value.boardId];
        }
        else {
            this.reportCardSearchViewModel.boardId = [];
        }
        if (this.reportCardsSearchForm.value.classId) {
            this.reportCardSearchViewModel.classId = [this.reportCardsSearchForm.value.classId];
        }
        else {
            this.reportCardSearchViewModel.classId = [];
        }
        if (this.reportCardsSearchForm.value.sectionId) {
            this.reportCardSearchViewModel.sectionId = [this.reportCardsSearchForm.value.sectionId];
        }
        else {
            this.reportCardSearchViewModel.sectionId = [];
        }
        if (this.reportCardsSearchForm.value.gradingTermId) {
            this.reportCardSearchViewModel.gradingTermId = [this.reportCardsSearchForm.value.gradingTermId];
        }
        else {
            this.reportCardSearchViewModel.gradingTermId = [];
        }
    };
    ReportCardsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            componentName: this.currentComponent,
            model: this.reportCardSearchViewModel,
            filtersList: [],
            sideHeader: {
                heading: 'Students'
            }
        };
    };
    ReportCardsComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                _this.isSchoolhasBoards = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (!_this.reportCardsSearchForm.value.boardId) {
                    _this.reportCardsSearchForm.controls.boardId.setValue(_this.schoolBoardsList[0].value);
                    _this.onSelectSchoolBoard(_this.schoolBoardsList[0].value);
                }
            }
            else {
                _this.isSchoolhasBoards = false;
                _this.schoolBoardsList = [];
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ReportCardsComponent.prototype.onSelectSchoolBoard = function (schoolBoard, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.onClear(true);
        }
        if (!schoolBoard) {
            return;
        }
        this.gradeSetupService.schoolAcademicClasses(schoolBoard).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ReportCardsComponent.prototype.onClassChange = function (classId) {
        this.availableSections = [];
        this.gradingTermsList = [];
        this.reportCardsSearchForm.controls.sectionId.setValue(null);
        this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
        if (classId) {
            this.getAvailableSections(this.reportCardsSearchForm.value.boardId, classId);
        }
        else {
            this.availableSections = [];
        }
    };
    ReportCardsComponent.prototype.getGradingTerms = function (onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.gradingTermsList = [];
            this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
        }
        if (this.reportCardsSearchForm.value.sectionId) {
            // tslint:disable-next-line: max-line-length
            this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.reportCardsSearchForm.value.classId, [this.reportCardsSearchForm.value.sectionId], this.reportCardsSearchForm.value.boardId)
                .subscribe(function (res) { return _this.gradingTermsList = res.listViews; });
        }
    };
    ReportCardsComponent.prototype.displayFn = function (data) {
        return data ? data.studentNames : undefined;
    };
    ReportCardsComponent.prototype.onSelectAction = function (item) {
        var _this = this;
        if (item.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_INCOMPLETE_REPORT_CARDS.toLowerCase()) {
            this.gradeReportService.reportsGeneratePendingIncompleteReportsPost(null, this.reportCardSearchViewModel.boardId, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId, this.reportCardSearchViewModel.sectionId)
                .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (item.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_ALL_REPORT_CARDS.toLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].WARNING_ON_CLEAR_REPORT_CARDS, true, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (actionDailog) {
                if (actionDailog === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                    // tslint:disable-next-line: max-line-length
                    _this.gradeReportService.reportsClearStudentReportsDelete(null, _this.reportCardSearchViewModel.gradingTermId, _this.reportCardSearchViewModel.classId, _this.reportCardSearchViewModel.sectionId)
                        .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { return _this.errorResponse(err); });
                }
            });
        }
        else if (item.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_ALL_PENDING_REPORT_CARDS.toLowerCase()) {
            this.gradeReportService.reportsApprovePendingapprovalReportsPut(null, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId, this.reportCardSearchViewModel.sectionId)
                .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (item.operationName === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DOWNLOAD_APPROVED_REPORT_CARD.toLowerCase()) {
            this.gradeReportService.reportsApprovedReportFilesGet(null, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId, this.reportCardSearchViewModel.sectionId)
                .subscribe(function (res) { return _this.onDownloadCard(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    ReportCardsComponent.prototype.setReportCardDetails = function (response) {
        var _this = this;
        this.reportCardDetails = response;
        this.operationsForSummary = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_INCOMPLETE_REPORT_CARDS_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_INCOMPLETE_REPORT_CARDS
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_ALL_REPORT_CARDS_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_ALL,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_ALL_REPORT_CARDS
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_ALL_PENDING_REPORT_CARDS_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DONE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_ALL_PENDING_REPORT_CARDS
            }
        ];
        this.operations = [
            {
                name: (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_REPORT_CARD_OPERATION),
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_REPORT_CARD
            },
            {
                name: (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_PENDING_REPORT_CARD_OPERATION),
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DONE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_PENDING_REPORT_CARD
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD_DATA_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DETAILS_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD_DATA
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_REPORT_CARD_DATA_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_REPORT_CARD_DATA,
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DOWNLOAD,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD
            }
        ];
        var data = this.reportCardDetails.gradeTermStudenSummaryView.list;
        var attachments = 0;
        this.reportCardDetails.gradeTermStudenSummaryView.list.forEach(function (element) {
            if (element.gradingTermDataSummaryId || element.statusCode === 'RPTG_PA') {
                element.operations = _this.operations;
            }
            else {
                element.operations = _this.operations.filter(function (e) { return e.operationName !==
                    (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD) && e.operationName !== (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_REPORT_CARD_DATA) && e.operationName !== (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_PENDING_REPORT_CARD); });
            }
            attachments += element.attachmentId;
        });
        if (attachments) {
            this.operationsForSummary.push({
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DOWNLOAD_APPROVED_REPORT_CARD_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DOWNLOAD,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DOWNLOAD_APPROVED_REPORT_CARD
            });
        }
        this.tableSettings = {
            rows: data,
            columns: this.columns,
            tablename: 'Students',
            componentName: this.currentComponent,
            model: this.reportCardSearchViewModel,
            filtersList: response.filters,
            sideHeader: {
                heading: 'Students'
            }
        };
        this.scrollIntoViewById('report-card-table');
    };
    ReportCardsComponent.prototype.onClear = function (onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        this.classesList = [];
        this.availableSections = [];
        this.gradingTermsList = [];
        this.reportCardsSearchForm.controls.classId.setValue(null);
        this.reportCardsSearchForm.controls.sectionId.setValue(null);
        this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
        if (!onManualChange) {
            this.initializeTableSettings();
            this.initializeSearchViewModel();
            this.reportCardDetails.gradeTermStudenSummaryView.list = [];
            this.setModelDataTableComponent(this.currentComponent, null);
        }
    };
    ReportCardsComponent.prototype.getTableData = function (_event) {
        this.reportCardSearchViewModel = _event;
        this.searchReportCards();
    };
    ReportCardsComponent.prototype.onRowActions = function (action) {
        var _this = this;
        if (action.operation ===
            (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD_DATA.toLowerCase())) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_13__["RouteConfig"]._ReportCard_Based_On_Student + action.clickedRow.id + '/' + action.clickedRow.gradingTermId]);
        }
        else if (action.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].GENERATE_REPORT_CARD.toLowerCase())) {
            var params = {
                gradeTermId: action.clickedRow.gradingTermId,
                studentIds: [action.clickedRow.schoolAcademicSessionStudentId],
                classId: action.clickedRow.classId,
                sectionId: action.clickedRow.sectionId,
            };
            this.generateReportCard(params);
        }
        else if (action.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].CLEAR_REPORT_CARD_DATA.toLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].WARNING_ON_CLEAR_REPORT_CARD, true, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (actionDailog) {
                if (actionDailog === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                    // tslint:disable-next-line: max-line-length
                    _this.gradeReportService.reportsClearStudentReportsDelete([action.clickedRow.schoolAcademicSessionStudentId], action.clickedRow.gradingTermId, action.clickedRow.classId, action.clickedRow.sectionId)
                        .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { return _this.errorResponse(err); });
                }
            });
        }
        else if (action.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].APPROVE_PENDING_REPORT_CARD.toLowerCase()) {
            this.gradeReportService.reportsApprovePendingapprovalReportsPut([action.clickedRow.schoolAcademicSessionStudentId], action.clickedRow.gradingTermId, action.clickedRow.classId, action.clickedRow.sectionId)
                .subscribe(function (res) { return _this.onApproveReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (action.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VIEW_REPORT_CARD.toLowerCase() && (action.clickedRow.gradingTermDataSummaryId || action.clickedRow.statusCode === 'RPTG_PA')) {
            this.paymentService.reportPrint(action.clickedRow.gradingTermDataSummaryId)
                .subscribe(function (res) { return _this.viewReportCard(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    ReportCardsComponent.prototype.onDownloadCard = function (res) {
        var _this = this;
        if (res.attachments && res.attachments.length) {
            this.zipViewModel.fileNames = [];
            res.attachments.forEach(function (element) {
                _this.zipViewModel.returnFileName = 'Report';
                _this.zipViewModel.fileNames.push(element.fileValue);
            });
            this.zipFilesDownload();
        }
        this.searchReportCards();
    };
    ReportCardsComponent.prototype.onClearReportCard = function (res) {
        this.openSnackBar(res.messages.ResultMessage);
        this.searchReportCards();
    };
    ReportCardsComponent.prototype.onApproveReportCard = function (res) {
        if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_17__["OK"]) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].RPORT_APPROVED_SUCCESSFULLY);
        }
        else {
            this.openSnackBar(res.messages.ResultMessage);
        }
        this.searchReportCards();
    };
    ReportCardsComponent.prototype.zipFilesDownload = function () {
        var _this = this;
        if (this.zipViewModel.fileNames.length > 0) {
            this.storeService.storeZipPut(this.zipViewModel).subscribe(function (res) { return _this.resFiles(res); });
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
        }
    };
    ReportCardsComponent.prototype.resFiles = function (data) {
        this.ReturnFileName = data.extension;
        this.DownloadDoc(data.extension);
    };
    ReportCardsComponent.prototype.DownloadDoc = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var a, response, responseData, file;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data !== null)) return [3 /*break*/, 3];
                        this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data));
                        a = document.createElement('a');
                        return [4 /*yield*/, fetch(this.storeService.getFilePath(data))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        responseData = _a.sent();
                        file = new Blob([responseData], { type: 'application/octet-stream' });
                        a.href = URL.createObjectURL(file);
                        a.download = this.ReturnFileName.replace(' ', '_');
                        a.click();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReportCardsComponent.prototype.viewReportCard = function (res) {
        if (res.fileName) {
            window.open(this.storeService.getFilePath(res.fileName));
        }
        this.searchReportCards();
    };
    ReportCardsComponent.prototype.onAddFormClick = function () {
    };
    ReportCardsComponent.prototype.generateReportCard = function (data) {
        var _this = this;
        this.gradeReportService.reportsGenerateStudentReportGet(data.gradeTermId, data.studentIds, data.classId, data.sectionId)
            .subscribe(function (res) { return _this.onClearReportCard(res); }, function (err) { _this.errorResponse(err); _this.searchReportCards(); });
    };
    ReportCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-cards',
            template: __webpack_require__(/*! ./report-cards.component.html */ "./src/app/modules/academics/grading/report-cards/report-cards.component.html"),
            providers: [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__["ClassesConfigService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__["GardeTermConfigurationService"], app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_10__["GradeReportService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_12__["StudentDBService"], app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_14__["PaymentService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"]],
            styles: [__webpack_require__(/*! ./report-cards.component.scss */ "./src/app/modules/academics/grading/report-cards/report-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__["ClassesConfigService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__["GardeTermConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_10__["GradeReportService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_12__["StudentDBService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"],
            app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_14__["PaymentService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"]])
    ], ReportCardsComponent);
    return ReportCardsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/search-student-information/search-student-information.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-40 pt-40\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Additional Student Information</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"p-16 border-bottom\">\n      <button mat-button (click)=\"getHelpText('Additional Student Info')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <form [formGroup]=\"studentInformationSearchForm\" (ngSubmit)=\"searchReportCards()\" #paymentSearch=\"ngForm\"\n      class=\"p-24\">\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #board>Board</mat-label>\n          <mat-select placeholder=\"Board\" formControlName=\"boardId\"\n            (selectionChange)=\"onSelectSchoolBoard($event.value)\" required>\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n              {{ board.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='board.innerText'\n              [validationControl]=\"studentInformationSearchForm.controls.boardId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select placeholder=\"Class\" formControlName=\"classId\" (selectionChange)=\"onClassChange($event.value)\"\n            required>\n            <mat-option *ngFor=\"let class of classesList\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='class.innerText'\n              [validationControl]=\"studentInformationSearchForm.controls.classId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-20\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select (selectionChange)=\"getGradingTerms()\" placeholder=\"Section\" formControlName=\"sectionId\" required>\n            <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='section.innerText'\n              [validationControl]=\"studentInformationSearchForm.controls.sectionId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n          <mat-label translate #gradingTerm>Grading Term</mat-label>\n          <mat-select placeholder=\"Grading Term\" formControlName=\"gradingTermId\" required>\n            <mat-option *ngFor=\"let term of gradingTermsList\" [value]=\"term.id\">\n              {{ term.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='gradingTerm.innerText'\n              [validationControl]=\"studentInformationSearchForm.controls.gradingTermId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-20\">\n        <button mat-raised-button type=\"reset\" color=\"primary\" class=\"text-uppercase mr-12\" (click)=\"onClear()\">\n          <span translate>Reset</span>\n        </button>\n        <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n          <span translate>Search</span>\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<app-table *ngIf=\"!showCustomCard && rows?.length\" [settings]=\"tableSettings\" [closeRowForm]='closeAddPanel' (getTableData)='getTableData($event)' (additionalButtonClick)=\"onShowAll($event)\"\n  (rowBasedAction)=\"rowWiseActions($event)\" [templateRef]=\"updateStudent ? isUpdate : studentScore\"\n  [rowTemplateRef]=\"studentScore\">\n</app-table>\n<app-custom-card *ngIf=\"showCustomCard\" [title]=customCardDetails.title [inputMessage]=customCardDetails.message>\n</app-custom-card>\n\n<ng-template #studentScore let-name=\"name\" let-row=\"row\" let-value=\"value\" let-columnIndex=\"columnIndex\">\n  <form [formGroup]=\"studentValuesForm\">\n    <ng-container formArrayName=\"reportValues\"\n      *ngFor=\"let c of studentValuesForm.get('reportValues')?.controls; let i = index\">\n      <div [formGroupName]=\"i\" *ngIf=\"i==name\" fxLayoutAlign=\"center center\" class=\"coustom-mat-error\">\n        <div *ngIf=\"studentValuesForm.controls.reportValues?.controls[i].controls.inputType.value === 'text' \">\n          <mat-form-field fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n            <input (keyup)=\"preventSpace($event,'studentValuesForm','reportCardItemValue')\" matInput\n              formControlName=\"reportCardItemValue\"\n              (blur)=\"updateStudentData(row, studentValuesForm.controls.reportValues.controls[i], name, columnIndex)\">\n\n            <mat-icon class=\"tick-position green-fg\" *ngIf=\"inputChangeIndex['check' + name + '_' + columnIndex]\">\n              check</mat-icon>\n            <mat-icon class=\"tick-position red-fg\" *ngIf=\"inputChangeIndex['error' + name + '_' + columnIndex]\">error\n            </mat-icon>\n            <mat-spinner class=\"spinner-position\" [diameter]=\"20\" color=\"accent\"\n              *ngIf=\"inputChangeIndex['spinner_' + name + '_' + columnIndex]\"></mat-spinner>\n          </mat-form-field>\n          <mat-error>\n            <app-validation [labelName]=\"'reportValues'\"\n              [validationControl]=\"studentValuesForm.controls.reportValues?.controls[i].controls.reportCardItemValue\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </div>\n\n        <div *ngIf=\"studentValuesForm.controls.reportValues?.controls[i].controls.inputType.value === 'textarea' \">\n          <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n            <textarea id=\"comment-field\" formControlName=\"reportCardItemValue\" matInput\n              (blur)=\"updateStudentData(row, studentValuesForm.controls.reportValues.controls[i], name, columnIndex)\"></textarea>\n\n            <mat-icon class=\"textarea-loader-position green-fg\"\n              *ngIf=\"inputChangeIndex['check' + name + '_' + columnIndex]\">check</mat-icon>\n            <mat-icon class=\"textarea-loader-position red-fg\"\n              *ngIf=\"inputChangeIndex['error' + name + '_' + columnIndex]\">error</mat-icon>\n            <mat-spinner class=\"textarea-loader-position\" [diameter]=\"20\" color=\"accent\"\n              *ngIf=\"inputChangeIndex['spinner_' + name + '_' + columnIndex]\"></mat-spinner>\n\n            <mat-error>\n              <app-validation [labelName]=\"'reportValues'\"\n                [validationControl]=\"studentValuesForm.controls.reportValues?.controls[i].controls.reportCardItemValue\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <mat-icon class=\"tick-position green-fg\" *ngIf=\"check(i)\">check</mat-icon>\n      </div>\n    </ng-container>\n  </form>\n</ng-template>\n\n<ng-template #isUpdate let-name=\"sname\">\n  <div class=\"py-16 font-size-18 text-uppercase\" translate>Update Student Additional Information</div>\n  <form [formGroup]=\"updateForm\" (ngSubmit)=\"updateValues(updateForm.value)\" #appForm=\"ngForm\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"dataSet\">\n\n      <div fxLayout=\"column\" class=\"pr-sm-20\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Student Name</mat-label>\n\n          <input readonly matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataSet.studentName\" disabled>\n        </mat-form-field>\n      </div>\n      <input type=\"hidden\" formControlName=\"schoolAcademicSessionStudentId\"\n        [ngModel]=\" dataSet?.schoolAcademicSessionStudentId\">\n      <input type=\"hidden\" formControlName=\"gradingTermId\" [ngModel]=\" dataSet?.gradingTermId\">\n\n\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Roll Number</mat-label>\n          <input readonly matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataSet.rollNumber\" disabled>\n        </mat-form-field>\n      </div>\n\n\n\n    </div>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" *ngIf=\"dataSet?.reportPrintTemplateName\">\n\n      <div fxLayout=\"column\" class=\"pr-sm-20\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n        *ngFor=\"let item of dataSet?.reportPrintTemplateName; let i = index\">\n        <!-- <input type=\"hidden\" formControlName=\"printTemplateFieldId{{i}}\" [ngModel]=\"item.printTemplateFieldId\"> -->\n\n        <!-- <input type=\"hidden\" formControlName=\"studentAdditionalInfoId{{i}}\" [ngModel]=\"item.studentAdditionalInfoId\"> -->\n        <mat-form-field appearance=\"outline\">\n          <mat-label>{{item.reportCardItemName}}</mat-label>\n          <input (keyup)=\"preventSpace($event,'updateForm',item.code)\" matInput autocomplete=\"off\" matInput\n            [formControlName]=\"item.code\">\n\n          <mat-error>\n            <app-validation [labelName]=\"item.reportCardItemName\" [validationControl]=\"updateForm.controls[item.code]\"\n              [doValidate]=\"validateFeilds\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n        (click)=\"closeForm()\">{{'Cancel' | translate}}</button>\n      <button class=\"mr-12 text-uppercase\" mat-raised-button color=\"accent\">{{'Update' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n\n<div *ngIf=\"!showCustomCard && rows?.length === 0\" class=\"errorMsg\">\n  <p class=\"red-text text-center mb-0 font-weight-bold p-24\" translate>No Custom Feilds For the Selected Grading Term</p>\n</div>"

/***/ }),

/***/ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/search-student-information/search-student-information.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tick-position {\n  position: absolute;\n  right: 0px; }\n\n.spinner-position {\n  position: absolute;\n  right: 0px;\n  top: 10px; }\n\n.textarea-loader-position {\n  position: absolute;\n  right: -38px;\n  top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvc2VhcmNoLXN0dWRlbnQtaW5mb3JtYXRpb24vc2VhcmNoLXN0dWRlbnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvc2VhcmNoLXN0dWRlbnQtaW5mb3JtYXRpb24vc2VhcmNoLXN0dWRlbnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGljay1wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbn07XG5cbi5zcGlubmVyLXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDoxMHB4O1xufVxuXG4udGV4dGFyZWEtbG9hZGVyLXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTM4cHg7XG4gICAgdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/search-student-information/search-student-information.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SearchStudentInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentInformationComponent", function() { return SearchStudentInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/report-card-service/grade-report.service */ "./src/app/service/report-card-service/grade-report.service.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");














var SearchStudentInformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SearchStudentInformationComponent, _super);
    function SearchStudentInformationComponent(router, _fb, gradeSetupService, gradeTermConfigurationService, studentDbService, cd, classService, dialogRef, commonService, gradeReportService, snackBar, storeService, dialog) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.gradeTermConfigurationService = gradeTermConfigurationService;
        _this.studentDbService = studentDbService;
        _this.cd = cd;
        _this.classService = classService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.gradeReportService = gradeReportService;
        _this.snackBar = snackBar;
        _this.storeService = storeService;
        _this.dialog = dialog;
        _this.currentComponent = 'SearchStudentInformationComponent';
        _this.isSchoolhasBoards = true;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.gradingTermsList = [];
        _this.tableSettings = {};
        _this.schoolBoards = [];
        _this.availableSections = [];
        _this.validate = true;
        _this.validateFeilds = true;
        _this.operationsForSummary = [];
        _this.valuesIndex = [];
        _this.updateStudent = false;
        _this.rows = [];
        _this.editButton = {};
        _this.filterRowData = [];
        _this.printTemplate = [];
        _this.filterdata = [];
        _this.showCustomCard = true;
        _this.customCardDetails = { title: 'Student Additional Information', message: 'Search Student Additional Information' };
        _this.customeReportFeildsList = [];
        return _this;
    }
    // tslint:disable-next-line: typedef
    SearchStudentInformationComponent.prototype.ngOnInit = function () {
        this.inputChangeIndex = [];
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.studentCustomFieldsView = {
            schoolAcademicSessionStudentId: 0,
            gradingTermId: 0,
            printTemplateCustomFieldView: [{
                    printTemplateCustomFieldId: '',
                    value: '',
                    id: '',
                }]
        };
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'rollNumber', header: 'Roll Number', sort: true },
            { field: 'gradingTermName', header: 'Grading Term', sort: true },
            { field: 'reportCardItemName', header: 'Report Card Item Name', sort: true },
            { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false },
            { field: 'actions', header: 'Actions ', sort: true }
        ];
        // this.updateForm = new FormGroup({
        //   reportCardItemValue0: new FormControl('', [Validators.pattern(Pattern.NUMBER_WITHOPTIONAL_DECIMAL_PATTERN)]),
        //   reportCardItemValue1: new FormControl('', [Validators.pattern(Pattern.NUMBER_WITHOPTIONAL_DECIMAL_PATTERN)]),
        //   reportCardItemValue2: new FormControl('', [Validators.pattern(Pattern.ALPHABETS_WITHOUT_STARTING_SPACES), Validators.max(360)]),
        //   printTemplateFieldId0: new FormControl(''),
        //   printTemplateFieldId1: new FormControl(''),
        //   printTemplateFieldId2: new FormControl(''),
        //   schoolAcademicSessionStudentId: new FormControl(''),
        //   studentAdditionalInfoId0: new FormControl(''),
        //   studentAdditionalInfoId1: new FormControl(''),
        //   studentAdditionalInfoId2: new FormControl(''),
        //   gradingTermId: new FormControl(''),
        // });
        this.studentValuesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_13__["Pattern"].ALPHANUMERIC), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(22)])
        });
        this.initializeTableDataSettings();
        this.initializeForm();
        this.initializeSearchViewModel();
        this.initializeTableSettings();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            // tslint:disable-next-line: no-shadowed-variable
            var modelTableComponent_1 = this.getModelComponent(this.currentComponent);
            this.reportCardSearchViewModel = modelTableComponent_1;
            this.studentInformationSearchForm.patchValue(modelTableComponent_1);
            this.onSelectSchoolBoard(this.studentInformationSearchForm.value.boardId, true);
            this.getAvailableSections(this.studentInformationSearchForm.value.boardId, this.studentInformationSearchForm.value.classId);
            this.getGradingTerms(true);
            this.searchReportCards();
        }
        this.getSchoolBoardsList();
    };
    SearchStudentInformationComponent.prototype.initializeTableSettings = function () {
        if (this.isEditMode) {
            this.columns = [
                { field: 'studentName', header: 'Student Name', sort: false },
                { field: 'rollNumber', header: 'Roll Number', sort: false },
                { field: 'reportCardItemName', header: 'Report Card Item Name', sort: false },
                { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false, rowTempalteRequired: true },
            ];
            this.tableSettings = {
                model: this.reportCardSearchViewModel,
                rows: this.rows,
                columns: this.columns,
                // padding: true,
                componentName: this.currentComponent,
                tablename: 'Student Additional Information',
                isMultiDeleteRequired: false,
                pageCnt: this.pageCnt,
                filtersList: [],
                headerOperations: {
                    additionalButtons: [
                        this.editButton,
                    ]
                },
                rowGroupingColumns: ['studentName', 'rollNumber'],
            };
        }
        else {
            this.columns = [
                { field: 'studentName', header: 'Student Name', sort: false },
                { field: 'rollNumber', header: 'Roll Number', sort: true },
                { field: 'reportCardItemName', header: 'Report Card Item Name', sort: true },
                { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false },
                { field: 'actions', header: 'Actions ', sort: false }
            ];
            this.settingsData();
        }
    };
    SearchStudentInformationComponent.prototype.settingsData = function () {
        this.tableSettings = {
            model: this.reportCardSearchViewModel,
            rows: this.rows,
            columns: this.columns,
            // padding: true,
            componentName: this.currentComponent,
            tablename: 'Student Additional Information',
            isMultiDeleteRequired: false,
            pageCnt: this.pageCnt,
            filtersList: this.filterdata,
            headerOperations: {
                additionalButtons: [
                    this.editButton,
                ]
            },
            rowGroupingColumns: ['studentName', 'rollNumber'],
        };
    };
    SearchStudentInformationComponent.prototype.initializeForm = function () {
        this.studentInformationSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            gradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    SearchStudentInformationComponent.prototype.initializeSearchViewModel = function () {
        this.reportCardSearchViewModel = {
            schoolAcademicSessionStudentId: null,
            board: [],
            studentName: [],
            gradingTermId: [],
            gradingterm: null,
            reportcardstatus: [],
            admissionNumbers: null,
            rollNumbers: [],
            classIds: [],
            sectionIds: [],
            studentIds: [],
            reportCardItemName: [],
            reportCardItemValue: [],
            sortOrder: 0,
            sortBy: null,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].PAGESIZE
        };
    };
    SearchStudentInformationComponent.prototype.initializeTableDataSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Student Additional Information',
            isPaginationRequired: true,
            componentName: this.currentComponent,
            model: this.reportCardSearchViewModel
        };
    };
    SearchStudentInformationComponent.prototype.updateStudentData = function (row, data, rowIndex, columnIndex) {
        this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = true;
        this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
        this.updateStudentCustomFeilds(row, data, rowIndex, columnIndex);
    };
    SearchStudentInformationComponent.prototype.updateStudentCustomFeilds = function (row, data, rowIndex, columnIndex) {
        var _this = this;
        if (data.invalid) {
            return;
        }
        else {
            var formValue_1 = data.value;
            this.studentCustomFieldsView.printTemplateCustomFieldView = [];
            Object.keys(formValue_1).forEach(function (key, index) {
                var customFeilds = row.reportPrintTemplateName.find(function (e) { return e.code === formValue_1[key]; });
                if (customFeilds) {
                    _this.printTemplateCustomFieldView = {
                        printTemplateCustomFieldId: customFeilds.printTemplateFieldId,
                        value: formValue_1['reportCardItemValue'],
                        id: customFeilds.studentAdditionalInfoId,
                    };
                    _this.studentCustomFieldsView.printTemplateCustomFieldView.push(_this.printTemplateCustomFieldView);
                }
            });
            this.studentCustomFieldsView.gradingTermId = this.studentInformationSearchForm.controls['gradingTermId'].value;
            this.studentCustomFieldsView.schoolAcademicSessionStudentId = formValue_1['schoolAcademicSessionStudentId'];
            this.studentIndex = rowIndex;
            this.gradeReportService.studentReportsStudentCustomDetailsPut(this.studentCustomFieldsView).subscribe(function (response) {
                if (_this.rows[rowIndex].reportCardItemValue !== 0 && _this.rows[rowIndex].reportCardItemValue !== '') {
                    _this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = true;
                    _this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
                    _this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
                }
                else {
                    _this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
                    _this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
                    _this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
                }
                _this.cd.detectChanges();
            }, function (error) {
                _this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = true;
                _this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
                _this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
                _this.cd.detectChanges();
            });
        }
        // }
    };
    SearchStudentInformationComponent.prototype.check = function (index) {
        var t = this.valuesIndex.find(function (x) { return x === index; });
        return t != null ? true : false;
    };
    SearchStudentInformationComponent.prototype.studentvalues = function (data) {
        this.studentIndex = -1;
        if (this.rows[data].reportCardItemValue !== 0 && this.rows[data].reportCardItemValue !== '') {
            this.valuesIndex.push(data);
            this.spinnerLoad(-1);
        }
    };
    SearchStudentInformationComponent.prototype.spinnerLoad = function (index) {
        return index === this.studentIndex;
    };
    SearchStudentInformationComponent.prototype.studentReportValues = function (schoolAcademicSessionStudentId, reportCardItemName, values, validators, rowElement) {
        if (values === void 0) { values = 0; }
        return this._fb.group({
            reportCardItemValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(validators.maxlength)),
            schoolAcademicSessionStudentId: [schoolAcademicSessionStudentId],
            reportItem: [reportCardItemName],
            iseditable: false,
            inputType: validators.inputtype,
            code: rowElement.code
        });
    };
    SearchStudentInformationComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                _this.isSchoolhasBoards = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (!_this.studentInformationSearchForm.value.boardId) {
                    _this.studentInformationSearchForm.controls.boardId.setValue(_this.schoolBoardsList[0].value);
                    _this.onSelectSchoolBoard(_this.schoolBoardsList[0].value);
                }
            }
            else {
                _this.isSchoolhasBoards = false;
                _this.schoolBoardsList = [];
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SearchStudentInformationComponent.prototype.onSelectSchoolBoard = function (schoolBoard, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.onClear(true);
        }
        if (!schoolBoard) {
            return;
        }
        this.gradeSetupService.schoolAcademicClasses(schoolBoard).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SearchStudentInformationComponent.prototype.onClear = function (onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        this.classesList = [];
        this.availableSections = [];
        this.gradingTermsList = [];
        this.studentInformationSearchForm.controls.classId.setValue(null);
        this.studentInformationSearchForm.controls.sectionId.setValue(null);
        this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
        if (!onManualChange) {
            this.showCustomCard = true;
            this.setModelDataTableComponent(this.currentComponent, null);
        }
    };
    SearchStudentInformationComponent.prototype.onClassChange = function (classId) {
        this.availableSections = [];
        this.gradingTermsList = [];
        this.studentInformationSearchForm.controls.sectionId.setValue(null);
        this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
        if (classId) {
            this.getAvailableSections(this.studentInformationSearchForm.value.boardId, classId);
        }
        else {
            this.availableSections = [];
        }
    };
    SearchStudentInformationComponent.prototype.getGradingTerms = function (onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.gradingTermsList = [];
            this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
        }
        if (this.studentInformationSearchForm.value.sectionId) {
            // tslint:disable-next-line: max-line-length
            this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.studentInformationSearchForm.value.classId, [this.studentInformationSearchForm.value.sectionId], this.studentInformationSearchForm.value.boardId)
                .subscribe(function (res) { return _this.gradingTermsList = res.listViews; });
        }
    };
    SearchStudentInformationComponent.prototype.getTableData = function (_event) {
        this.reportCardSearchViewModel = _event;
        this.searchReportCards();
    };
    SearchStudentInformationComponent.prototype.searchReportCards = function () {
        var _this = this;
        if (this.studentInformationSearchForm.valid) {
            Object.assign(this.reportCardSearchViewModel, this.studentInformationSearchForm.value);
            this.setModelDataTableComponent(this.currentComponent, this.reportCardSearchViewModel);
            this.gradeReportService.studentReportsStudentAdditionalInformationGet(this.reportCardSearchViewModel.schoolAcademicSessionStudentId, this.reportCardSearchViewModel.boardId, this.reportCardSearchViewModel.studentName, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.gradingterm, this.reportCardSearchViewModel.reportcardstatus, this.reportCardSearchViewModel.admissionNumbers, this.reportCardSearchViewModel.rollNumbers, this.reportCardSearchViewModel.classId, this.reportCardSearchViewModel.sectionId, this.reportCardSearchViewModel.studentIds, this.reportCardSearchViewModel.reportCardItemName, this.reportCardSearchViewModel.reportCardItemValue, this.reportCardSearchViewModel.sortOrder, this.reportCardSearchViewModel.sortBy, this.reportCardSearchViewModel.pageNumber, this.reportCardSearchViewModel.pageSize)
                .subscribe(function (res) { return _this.setReportCardDetails(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SearchStudentInformationComponent.prototype.setReportCardDetails = function (data) {
        var _this = this;
        this.showCustomCard = false;
        if (data.studentDataView.list && data.studentDataView.list.length === 0) {
            this.rows = [];
            this.initializeTableDataSettings();
        }
        else if (data.studentDataView) {
            this.reportCardSearchViewModel.pageNumber = data.studentDataView.pageNumber;
            this.rows = data.studentDataView.list;
            this.filterdata = data.filters;
            this.filterRowData = this.rows;
            var x_1 = [];
            this.filterRowData.forEach(function (elnt) {
                if (x_1.length === 0) {
                    x_1.push(elnt);
                }
                else {
                    _this.filterRowData.forEach(function (element) {
                        var foundIndex = x_1.findIndex(function (value) {
                            return value.studentName === element.studentName;
                        });
                        if (foundIndex === -1) {
                            x_1.push(element);
                        }
                    });
                }
            });
            this.filterRowData = x_1;
            // apply edit 
            this.filterRowData.forEach(function (element) {
                _this.rows.forEach(function (element1) {
                    if (element.studentName === element1.studentName &&
                        element.rollNumber === element1.rollNumber) {
                        element.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].EDIT_OPERATION,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].EDIT_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].EDIT
                            },
                        ];
                    }
                });
            });
            if (this.isEditMode) {
                this.editButton = {
                    name: 'Done',
                    class: 'primary',
                    clickAction: 'back'
                };
            }
            else {
                this.editButton = {
                    name: 'Edit',
                    class: 'primary',
                    clickAction: 'edit'
                };
            }
            this.studentValuesForm = this._fb.group({
                reportValues: this._fb.array([]),
            });
            var control_1 = this.studentValuesForm.controls['reportValues'];
            this.rows.map(function (e) {
                var list = JSON.parse(e.validationInfo);
                control_1.push(_this.studentReportValues(e.schoolAcademicSessionStudentId, e.reportCardItemName, e.reportCardItemValue, list, e));
            });
            this.rows = this.sortByColumns(['studentName', 'rollNumber'], this.rows);
            this.studentValuesForm.controls['reportValues'].patchValue(this.rows);
            this.initializeTableSettings();
        }
    };
    SearchStudentInformationComponent.prototype.getValidators = function (element) {
        var validators = [];
        var list = JSON.parse(element.validationInfo);
        // tslint:disable-next-line:forin
        for (var key in list) {
            if (!list[key]) {
                continue;
            }
            switch (key.toLowerCase()) {
                case app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].REQUIRED:
                    (validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].Email:
                    (validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].MINLENGTH:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(list[key]));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].MAXLENGTH:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(list[key]));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppSettings"].PATTERN:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(list[key]));
                    break;
            }
        }
        return validators;
    };
    // actions to perform edit or delete
    SearchStudentInformationComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === 'edit') {
            this.inputChangeIndex = [];
            this.closeAddPanel = false;
            this.updateStudent = true;
            this.dataSet = event.clickedRow;
            this.studentCustomFeildsForm(this.dataSet.reportPrintTemplateName);
            this.dataSet.reportPrintTemplateName.forEach(function (element) {
                _this.updateForm.controls[element.code].patchValue(element.reportCardItemValue);
            });
            this.schoolAcademicSessionStudentId = event.clickedRow.schoolAcademicSessionStudentId;
        }
    };
    SearchStudentInformationComponent.prototype.studentCustomFeildsForm = function (feildsList) {
        var _this = this;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            schoolAcademicSessionStudentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        feildsList.forEach(function (element) {
            _this.updateForm.addControl(element.code, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _this.getValidators(element)));
        });
    };
    SearchStudentInformationComponent.prototype.onShowAll = function (data) {
        if ('edit' === data) {
            this.isEditMode = true;
            this.inputChangeIndex = [];
        }
        else if ('back' === data) {
            this.isEditMode = false;
            this.valuesIndex = [];
        }
        this.searchReportCards();
    };
    // method for when click cancel panel it will open
    SearchStudentInformationComponent.prototype.closeForm = function () {
        this.dialogRef.closeAll();
        this.validateForm = false;
        this.closeAddPanel = true;
        this.updateStudent = false;
    };
    SearchStudentInformationComponent.prototype.updateValues = function (updateForm) {
        var _this = this;
        this.validateForm = true;
        if (this.updateForm.invalid) {
            return;
        }
        else {
            this.studentCustomFieldsView.printTemplateCustomFieldView = [];
            Object.keys(updateForm).forEach(function (key, index) {
                var customFeilds = _this.dataSet.reportPrintTemplateName.find(function (e) { return e.code === key; });
                if (customFeilds) {
                    _this.printTemplateCustomFieldView = {
                        printTemplateCustomFieldId: customFeilds.printTemplateFieldId,
                        value: updateForm[key],
                        id: customFeilds.studentAdditionalInfoId,
                    };
                    _this.studentCustomFieldsView.printTemplateCustomFieldView.push(_this.printTemplateCustomFieldView);
                }
            });
            this.studentCustomFieldsView.gradingTermId = this.studentInformationSearchForm.controls['gradingTermId'].value;
            this.studentCustomFieldsView.schoolAcademicSessionStudentId = this.schoolAcademicSessionStudentId;
            this.gradeReportService.studentReportsStudentCustomDetailsPut(this.studentCustomFieldsView).subscribe(function (res) { return _this.response(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    SearchStudentInformationComponent.prototype.response = function (data) {
        this.validateForm = false;
        if (data.statusCode === this.HttpStatus.OK) {
            this.closeAddPanel = true;
            this.searchReportCards();
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('isUpdate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SearchStudentInformationComponent.prototype, "customTemplates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchStudentInformationComponent.prototype, "aForm", void 0);
    SearchStudentInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-student-information',
            template: __webpack_require__(/*! ./search-student-information.component.html */ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.html"),
            providers: [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__["ClassesConfigService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__["GardeTermConfigurationService"], app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_9__["GradeReportService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_10__["StudentDBService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"]],
            styles: [__webpack_require__(/*! ./search-student-information.component.scss */ "./src/app/modules/academics/grading/search-student-information/search-student-information.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__["GradeSetupService"],
            app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__["GardeTermConfigurationService"],
            app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_10__["StudentDBService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_5__["ClassesConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_9__["GradeReportService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], SearchStudentInformationComponent);
    return SearchStudentInformationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=app-modules-academics-grading-academic-grading-module.js.map