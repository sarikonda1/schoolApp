(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-class-schedules-class-schedules-module~app-shared-wizard-wizard-mo~f7641765"],{

/***/ "./src/app/modules/configuration/class-schedules/class-schedules-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-schedules-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClassSchedulesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSchedulesRoutingModule", function() { return ClassSchedulesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./holidays/holidays.component */ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.ts");
/* harmony import */ var _class_schedules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-schedules.component */ "./src/app/modules/configuration/class-schedules/class-schedules.component.ts");
/* harmony import */ var _school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-schedule-templates/school-schedule-templates.component */ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.ts");
/* harmony import */ var _school_schedule_template_details_school_schedule_template_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./school-schedule-template-details/school-schedule-template-details.component */ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.ts");
/* harmony import */ var _class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class-timetables/class-timetables.component */ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.ts");









var routes = [
    {
        path: '', component: _class_schedules_component__WEBPACK_IMPORTED_MODULE_5__["ClassSchedulesComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'holidays' },
            { path: 'holidays', component: _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_4__["HolidaysComponent"], data: { title: 'Holidays' } },
            { path: 'school-schedule-templates', component: _school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_6__["SchoolScheduleTemplatesComponent"], data: { title: 'School Schedule Templates' } },
            { path: 'school-schedule-templates-details/:id', component: _school_schedule_template_details_school_schedule_template_details_component__WEBPACK_IMPORTED_MODULE_7__["SchoolScheduleTemplateDetailsComponent"], data: { title: 'School Schedule Templates Details' } },
            // { path: 'class-timetables', component: ClassTimetableComponent,  data: {title: 'Class Timetables'} },
            { path: 'class-timetables', component: _class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_8__["ClassTimetablesComponent"], data: { title: 'Class Timetables' } },
        ]
    },
];
var ClassSchedulesRoutingModule = /** @class */ (function () {
    function ClassSchedulesRoutingModule() {
    }
    ClassSchedulesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], ClassSchedulesRoutingModule);
    return ClassSchedulesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-schedules.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-schedules.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-schedules.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-schedules.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvY2xhc3Mtc2NoZWR1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-schedules.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-schedules.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClassSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSchedulesComponent", function() { return ClassSchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassSchedulesComponent = /** @class */ (function () {
    function ClassSchedulesComponent() {
    }
    ClassSchedulesComponent.prototype.ngOnInit = function () {
    };
    ClassSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-schedules',
            template: __webpack_require__(/*! ./class-schedules.component.html */ "./src/app/modules/configuration/class-schedules/class-schedules.component.html"),
            styles: [__webpack_require__(/*! ./class-schedules.component.scss */ "./src/app/modules/configuration/class-schedules/class-schedules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassSchedulesComponent);
    return ClassSchedulesComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-schedules.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-schedules.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassSchedulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSchedulesModule", function() { return ClassSchedulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _class_schedules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-schedules.component */ "./src/app/modules/configuration/class-schedules/class-schedules.component.ts");
/* harmony import */ var _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./holidays/holidays.component */ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _class_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-schedules-routing.module */ "./src/app/modules/configuration/class-schedules/class-schedules-routing.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/class-schedules/holiday-configuration.service */ "./src/app/service/class-schedules/holiday-configuration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./school-schedule-templates/school-schedule-templates.component */ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.ts");
/* harmony import */ var _school_schedule_template_details_school_schedule_template_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./school-schedule-template-details/school-schedule-template-details.component */ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.ts");
/* harmony import */ var _class_timetable_class_timetable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./class-timetable/class-timetable.component */ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.ts");
/* harmony import */ var _class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./class-timetables/class-timetables.component */ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.ts");



















var ClassSchedulesModule = /** @class */ (function () {
    function ClassSchedulesModule() {
    }
    ClassSchedulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_class_schedules_component__WEBPACK_IMPORTED_MODULE_3__["ClassSchedulesComponent"],
                _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_4__["HolidaysComponent"], _school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_15__["SchoolScheduleTemplatesComponent"],
                _school_schedule_template_details_school_schedule_template_details_component__WEBPACK_IMPORTED_MODULE_16__["SchoolScheduleTemplateDetailsComponent"],
                _class_timetable_class_timetable_component__WEBPACK_IMPORTED_MODULE_17__["ClassTimetableComponent"], _class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_18__["ClassTimetablesComponent"]],
            imports: [
                _class_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClassSchedulesRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedManagementModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__["MatcomponentsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]
            ],
            providers: [
                app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_12__["HolidayConfigurationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                    multi: true
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        })
    ], ClassSchedulesModule);
    return ClassSchedulesModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-40\">\n  <div class=\"pl-24 text-uppercase font-size-18 pb-4\"><span translate>{{isAddData ?'Class Timetable':title}}</span></div>\n  <!-- Get details of class section dropdowns-->\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-20\" fxLayout=\"column\">\n    <form [formGroup]=\"classTimetableForm\" (ngSubmit)=\"onSelectClassTimetable()\" #ClassTimeTableForm=\"ngForm\"\n      fxLayout=\"column\">\n      <div *ngIf=\"isAddData\" fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"pt-20 px-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"35\">\n          <mat-label #classId translate>Class</mat-label>\n          <mat-select (selectionChange)=\"onClassSelect($event)\" formControlName=\"classId\" required>\n            <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"classId.innerText\" [validationControl]=\"classTimetableForm.controls.classId\"\n              [doValidate]=\"isClassSectionValid\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"35\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" (selectionChange)=\"onSelect()\" required>\n            <mat-option [style.display]=\"classTimetableForm.value.classId ? '' : 'none'\" *ngFor=\"let section of sectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n              <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span>\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"sectionId.innerText\"\n              [validationControl]=\"classTimetableForm.controls.sectionId\" [doValidate]=\"isClassSectionValid\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <!--  End -->\n\n        <!-- Edit,Delete actions if class section has template details -->\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\" class=\"pt-12 pr-12\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button *ngIf=\"classSectionTempList.length >0\" type=\"button\" mat-icon-button class=\"red-400-fg\" (click)=\"deleteClassTimetable()\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button *ngIf=\"isTemplateValid\" mat-raised-button type=\"button\" class=\"text-uppercase mx-20\" color=\"accent\"\n              (click)=\"addClassTimetable()\"><span translate>Add</span></button>\n            <button mat-button type=\"button\" (click)=\"getHelpText('Class Timetables')\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- End -->\n      </div>\n\n      <!-- Get Template details with respect to class section and board Id's-->\n      <mat-divider *ngIf=\"isTemplateValid\"></mat-divider>\n      <div *ngIf=\"isTemplateValid\" fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"pt-24 px-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #classTempId translate>Timetables</mat-label>\n          <mat-select (selectionChange)=\"onTemplateSelect($event)\" formControlName=\"scheduleTemplateId\">\n            <mat-option *ngFor=\"let classTemp of classTimetableTempList\" [value]=\"classTemp.value\">\n              {{classTemp.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"pt-16\"><button *ngIf=\"classSectionTempList.length >0\" mat-raised-button type=\"button\"\n            class=\"text-uppercase mx-20 mb-20\" color=\"primary\" (click)=\"updateClassTimetable()\" translate><span translate>Edit</span></button> </div>\n      </div>\n      <!-- End -->\n\n      <!-- Get Details of schedule template based on class section and board after save-->\n      <mat-divider *ngIf=\"classSectionTempList.length >0\" class=\"mt-20\"></mat-divider>\n      <div *ngIf=\"classSectionTempList.length >0\" class=\"m-20 border school-period\">\n        <div fxLayout=\"row inline\" *ngFor=\"let item of classSectionTempList; let in = index\" class=\"mw-100-p\">\n          <div class=\"border-bottom\">\n          <div fxLayout=\"column\" fxFlex=\"20\"\n            class=\"border-right p-20 w-120 weekDay custom-white accent-fg font-weight-600 text-uppercase\" translate>\n            {{item.weekDayName | translate}}</div>\n          <div fxLayout=\"column\" fxFlex=\"20\" class=\"border-right w-200 p-12 break-word\"\n            *ngFor=\"let child of item.periodsView;let i=index\" [ngClass]=\"item.periodsView?.length > classSectionTempList[in-1]?.periodsView?.length ? (i > ( classSectionTempList[in-1]?.periodsView?.length-1) && in  ? 'border-top' : ''): ''\">\n            <div fxLayout=\"row\">{{child.periodName}}</div>\n            <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n              {{child.endTime | slice:0:5}}\n            </div>\n            <div fxLayout=\"row\">{{child.periodTypeName}}</div>\n            <div fxLayout=\"row\" *ngFor=\"let childs of child.courseAndStaffViewModel;\" ><span\n                *ngIf=\"childs.courseName!=null\" class=\"text-truncate\" matTooltipClass=\"matTool-tip\"\n                matTooltipPosition=\"above\" [matTooltip]=\"childs.staffName\">{{childs.courseName}} - {{childs.staffName}}</span></div>\n          </div>\n        </div>\n        </div>\n      </div>\n      <!-- End -->\n    </form>\n\n    <!-- Add Class Timetable -->\n    <form [formGroup]=\"classTimetableForm\" (ngSubmit)=\"onSelectClassTimetable()\" #ClassTimeTableForm=\"ngForm\">\n      <div *ngIf=\"isAddTimetable\" fxlayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-16\">\n        <button mat-raised-button translate type=\"button\" color=\"primary\" class=\"text-uppercase\"\n          (click)=\"clearBack()\">{{'Back' | translate}}</button>\n        <button mat-button type=\"button\" (click)=\"getHelpText('Class Timetables')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n      <mat-divider *ngIf=\"isAddTimetable\"></mat-divider>\n      <div *ngIf=\"isAddTimetable\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\" fxLayout=\"column\"\n        class=\"pt-24 px-20\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #classId translate>Class</mat-label>\n          <mat-select formControlName=\"classId\" [disabled]=\"isAddTimetable\" required>\n            <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"35\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" [disabled]=\"isAddTimetable\" required>\n            <mat-option *ngFor=\"let section of sectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n              <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span>\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #scheduleTempId translate>Schedule Template</mat-label>\n          <mat-select formControlName=\"scheduleTemplateId\" (selectionChange)=\"onScheduleTemplateSelect()\"\n            [disabled]=\"isScheduleTemp\" required>\n            <mat-option *ngFor=\"let scheduleTemp of scheduleTempList\" [value]=\"scheduleTemp.value\">\n              {{scheduleTemp.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='scheduleTempId.innerText'\n              [validationControl]=\"classTimetableForm.controls.scheduleTemplateId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div *ngIf=\"isAddTimetable\" fxLayoutAlign=\"start center\" fxLayout.gt-sm=\"row\" fxLayout=\"column\"\n        class=\"py-16 px-20\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"32\" fxFlex=\"100\" fxLayout=\"column\" class=\"icon-center\">\n          <mat-label #startDate translate>Start Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('startDate',classTimetableForm)\" [matDatepicker]=\"startDatePicker\"\n          (dateChange)=\"validateData()\" formControlName=\"startDate\" [required]=\"isValidDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #startDatePicker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='startDate.innerText'\n              [validationControl]=\"classTimetableForm.controls.startDate\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"px-sm-24 icon-center\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"36\">\n          <mat-label #endDate translate>End Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('endDate',classTimetableForm)\" [matDatepicker]=\"endDatePicker\"\n          (dateChange)=\"validateData()\" [min]=\"classTimetableForm.controls.startDate.value\" \n            formControlName=\"endDate\" [required]=\"isValidDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #endDatePicker [startAt]=\"classTimetableForm.value.startDate\"></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='endDate.innerText'\n              [validationControl]=\"classTimetableForm.controls.endDate\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase mr-12 mb-20\" color=\"accent\">{{'submit' | translate}}</button>\n      </div>\n    </form>\n    <mat-divider *ngIf=\"classTimetableForm.valid && addClassSectionTempList?.length>0\" class=\"mt-20\"></mat-divider>\n    <div *ngIf=\"classTimetableForm.valid && addClassSectionTempList?.length>0\" class=\"m-20 border school-period\">\n      <div fxLayout=\"row inline\" *ngFor=\"let item of addClassSectionTempList; let i=index\"\n        class=\"mw-100-p border-bottom\">\n        <div fxLayout=\"column\" fxFlex=\"20\"\n          class=\"border-right p-20 w-120 weekDay custom-white accent-fg font-weight-600 text-uppercase\" translate>\n          {{item.name}}</div>\n        <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"start start\" class=\"w-232 p-20\"\n          *ngFor=\"let child of item.value;let i=index\">\n          <div fxLayout=\"row\">{{child.periodName}}</div>\n          <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n            {{child.endTime | slice:0:5}}\n          </div>\n          <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n            <mat-label #periodTypeId translate>Period Type</mat-label>\n            <mat-select (selectionChange)=\"onPeriodTypeSelect($event,child,i)\" #periodTypeId=\"ngModel\" ngModel [(ngModel)]=\"child.periodTypeId\"\n             name=\"periodTypeId\" required>\n                <mat-option *ngFor=\"let periodType of periodTypeList\" [value]=\"periodType.value\">\n                  {{periodType.label}}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <ng-container *ngIf=\"child && child?.isEdit && child?.isEdit?.length\">\n            <div fxLayout=\"row\" *ngFor=\"let courseStaff of child.isEdit;\">\n              <span class=\"pr-4\">{{courseStaff.courseName}} :</span><span class=\"break-word\">{{courseStaff.staffName}}</span></div>\n            <div fxLayout=\"row\" *ngIf=\"child.isEdit.length>0\"><button mat-raised-button\n                (click)=editMultiAssignments(child,periodTypeId.value); class=\"accent-fg\">Edit</button></div>\n          </ng-container> \n          <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n            <mat-label #courseId translate>Course</mat-label>\n            <mat-select #coursesId=\"ngModel\" ngModel name=\"coursesId\"\n              (selectionChange)=\"onSubmitStaffCourseDetails(child,coursesId.value,courseId,i)\" required>\n              <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n                {{course.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n            <mat-label #staffId translate>Staff</mat-label>\n            <mat-select #staffsId=\"ngModel\" ngModel name=\"staffsId\"\n              (selectionChange)=\"onSubmitStaffCourseDetails(child,staffsId.value,staffId,i)\" required>\n              <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n                {{staff.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <!-- End -->\n\n    <!-- Edit Class Timetable -->\n    <div *ngIf=\"classTimetableForm.valid &&  updateClassTimetableDetails?.length>0\" class=\"m-20 border school-period\">\n      <div fxLayout=\"row inline\" *ngFor=\"let item of updateClassTimetableDetails; let ind = index\" class=\"mw-100-p\">\n        <div class=\"border-bottom\">\n        <div fxLayout=\"column\" fxFlex=\"20\"\n          class=\"border-right p-12 w-120 weekDay custom-white accent-fg font-weight-600 text-uppercase\" translate>\n          {{item.weekDayName | translate}}</div>\n        <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"start\" class=\"border-right w-200 p-12\"\n          *ngFor=\"let child of item.periodsView;let i=index\" [ngClass]=\"item.periodsView?.length > updateClassTimetableDetails[ind-1]?.periodsView?.length ? (i > ( updateClassTimetableDetails[ind-1]?.periodsView?.length-1) && ind  ? 'border-top' : ''): ''\">\n          <div fxLayout=\"row\">{{child.periodName}}</div>\n          <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n            {{child.endTime | slice:0:5}}\n          </div>\n          <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n            <mat-label #periodTypeId translate>Period Type</mat-label>\n            <mat-select #ptId=\"ngModel\" [(ngModel)]=\"child.periodTypeId\" ngModel name=\"ptId\"\n              (selectionChange)=\"onPeriodTypeSelect($event,child,item.weekDayName)\" required>\n              <mat-option *ngFor=\"let periodType of periodTypeList\" [value]=\"periodType.value\">\n                {{periodType.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div fxLayout=\"row\" *ngFor=\"let cs of child.courseAndStaffViewModel\"><span\n              *ngIf=\"cs.courseName!==null && child.hasMultipleAssignments === 1\" class=\"text-truncate\" matTooltipClass=\"matTool-tip\"\n              matTooltipPosition=\"above\" [matTooltip]=\"cs.staffName\">{{cs.courseName}}&nbsp;-&nbsp;{{cs.staffName}}</span>\n        </div>\n          <div fxLayout=\"row\" *ngIf=\"child.hasMultipleAssignments == 1\" class=\"pt-8\"><button mat-raised-button\n              (click)=editMultiAssignments(child,ptId.value); class=\"accent-fg\" translate>Edit</button></div>\n          <div *ngIf=\"child.hasAssignments == 1\" class=\"w-100-p\">\n            <div *ngFor=\"let cs of child.courseAndStaffViewModel\">\n              <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n                <mat-label #courseId translate>Course</mat-label>\n                <mat-select #cId=\"ngModel\" [(ngModel)]=\"cs.courseId\" ngModel name=\"cId\"\n                  (selectionChange)=\"onSubmitStaffCourseDetails(child,cId.value,courseId,cs)\" required>\n                  <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n                    {{course.label}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n                <mat-label #staffId translate>Staff</mat-label>\n                <mat-select #sId=\"ngModel\" [(ngModel)]=\"cs.staffId\" ngModel name=\"sId\"\n                  (selectionChange)=\"onSubmitStaffCourseDetails(child,sId.value,staffId,cs)\" required>\n                  <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n                    {{staff.label}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <!-- End -->\n\n    <!-- Add options for Class Timetable -->\n    <div *ngIf=\"isHasTemp\" class=\"text-center font-size-16 mt-48\" translate>No Class Time Table Has Been\n      Defined For The\n      Selected Class And Section</div>\n    <div *ngIf=\"isHasTemp\" class=\"text-center font-size-16 pt-4\" translate>Please Click On Add To Create A\n      New Time Table</div>\n    <div *ngIf=\"isHasTemp\" fxLayout=\"row\" class=\"p-20\" fxLayoutAlign=\"center center\">\n      <button mat-raised-button type=\"button\" (click)=\"addClassTimetable()\" class=\"text-uppercase px-36\" color=\"accent\"\n        translate>Add</button>\n    </div>\n    <mat-divider class=\"mb-20\" *ngIf=\"isHasTemp\"></mat-divider>\n    <!-- End -->\n  </div>\n</div>\n\n<!-- Coustom Dialog for Has_Multiple_Assignments -->\n<ng-template #myTemplate>\n  <div [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    <div fxLayoutAlign=\"space-between center\" class=\"font-size-20\"><span translate>Select Course & Staff</span> <button\n        mat-icon-button (click)=\"closeDialog()\">\n        <mat-icon>close</mat-icon>\n      </button></div>\n    <form [formGroup]=\"courseStaffMultAssgnForm\" (ngSubmit)=\"onSelectCourseStaffDetails()\"\n      #CourseStaffMultiAssignForm=\"ngForm\">\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n        <mat-form-field appearance=\"outline\" fxFlexFill>\n          <mat-label #courseId translate>Course</mat-label>\n          <mat-select formControlName=\"courseId\" required>\n            <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n              {{course.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='courseId.innerText'\n              [validationControl]=\"courseStaffMultAssgnForm.controls.courseId\" [doValidate]=\"isCourseStaffAssgnValid\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill>\n          <mat-label #staffId translate>Staff</mat-label>\n          <mat-select formControlName=\"staffId\" required>\n            <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n              {{staff.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='staffId.innerText'\n              [validationControl]=\"courseStaffMultAssgnForm.controls.staffId\" [doValidate]=\"isCourseStaffAssgnValid\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxFlexFill fxLayoutAlign=\"end center\" fxLayout=\"row\" class=\"pb-20\">\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase accent-fg\">{{'Select' | translate}}</button>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"gridDataList?.length>0\" fxLayout=\"column\">\n    <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border-top border-horizontal class-timetable\">\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\"><span translate>Course</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\"><span translate>Staff</span></mat-list-item>\n    </mat-list>\n    <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border class-timetable\">\n      <ng-container *ngFor=\"let column of gridDataList;let i=index\">\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\">{{column.courseName}}</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n        <span>{{column.staffName}}</span> \n        <button [disabled]=\"!(gridDataList?.length>1)\"  mat-icon-button (click)=\"deleteItem(i)\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-list-item>\n    </ng-container>\n    </mat-list>\n  </div>\n\n \n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-12\">\n    \n\n    <button *ngIf=\"gridDataList?.length===1\"  type=\"button\"  mat-raised-button class=\"mr-16 text-uppercase\" (click)=\"clearStaff()\">{{'Clear' | translate}}</button>\n    <button *ngIf=\"gridDataList?.length>0\"  type=\"button\" mat-raised-button color=\"accent\" [disabled]=\"isSaveDetails\"\n      (click)=\"onSubmitMultiAssignmentsDetails()\" translate>{{'Save' | translate}}</button>\n\n      <!-- <button *ngIf=\"gridDataList.length>0\"  type=\"button\" mat-raised-button class=\"mr-16\" (click)=\"clearStaff()\">{{'Close' | translate}}</button> -->\n  </div>\n\n</ng-template>\n<!-- End Coustom Dialog  -->\n"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".school-period {\n  overflow-y: auto;\n  overflow: overlay; }\n  .school-period .mw-100-p {\n    min-width: 100%; }\n  .school-period .weekDay {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0px;\n    z-index: 1; }\n  .class-timetable {\n  max-height: 200px;\n  overflow: auto; }\n  .class-timetable ::ng-deep .mat-list-item-content {\n    place-content: center space-between;\n    -webkit-box-align: center;\n            align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvY2xhc3MtdGltZXRhYmxlL2NsYXNzLXRpbWV0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUhyQjtJQUtRLGVBQWUsRUFBQTtFQUx2QjtJQVFRLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVUsRUFBQTtFQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFGbEI7SUFJSSxtQ0FBbUM7SUFDbkMseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uL2NsYXNzLXNjaGVkdWxlcy9jbGFzcy10aW1ldGFibGUvY2xhc3MtdGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2Nob29sLXBlcmlvZCB7XG4gICAgLy9tYXgtd2lkdGg6IDc4OHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gICAgLm13LTEwMC1wIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICB9XG4gICAgLndlZWtEYXkge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfSAgIFxufVxuLmNsYXNzLXRpbWV0YWJsZXtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgIDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50e1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ClassTimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTimetableComponent", function() { return ClassTimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var ClassTimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassTimetableComponent, _super);
    function ClassTimetableComponent(_fb, gradeSetupService, classTimetableService, commonService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.classNames = [];
        _this.filterClasses = [];
        _this.sectionNamesList = [];
        _this.scheduleTempList = [];
        _this.classSectionTempList = [];
        _this.addClassSectionTempList = [];
        _this.updateClassTimetableDetails = [];
        _this.gridDataList = [];
        _this.classTimetableTempList = [];
        _this.periodTypeList = [];
        _this.courseList = [];
        _this.staffList = [];
        _this.filterSchoolScheduleTempList = [];
        _this.isValidDate = false;
        _this.isCourseStaffAssgnValid = false;
        _this.classTimetableFormDetails = false;
        _this.isClassSectionValid = true;
        _this.isTemplateValid = false;
        _this.isHasTemp = false;
        _this.isAddData = true;
        _this.isAddTimetable = false;
        _this.isScheduleTemp = false;
        _this.isSaveDetails = false;
        return _this;
    }
    ClassTimetableComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.getClassesList();
        this.timeTableForm();
        this.gridDataList = [];
        this.classTimetableId = null;
        this.classPeriodsDataView = {
            classPeriodsMultiView: this.classPeriodsMultiView = []
        };
        this.updateClassTimetableDetails = [];
        this.title = 'Add Class Timetable';
        this.classTimetableUpdateView = {};
        this.errorFlag = 0;
    };
    ClassTimetableComponent.prototype.timeTableForm = function () {
        this.classTimetableForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            scheduleTemplateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.courseStaffMultAssgnForm = this._fb.group({
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            staffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    // Get Classes to filter table data
    ClassTimetableComponent.prototype.getClassesList = function () {
        var _this = this;
        this.filterClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
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
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    ClassTimetableComponent.prototype.onClassSelect = function (data) {
        var _this = this;
        this.sectionNamesList = [];
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (res) {
            if (res.classTimetableSectionsView != null) {
                res.classTimetableSectionsView.map(function (x) {
                    _this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
                });
                _this.isTemplateValid = false;
                _this.isHasTemp = false;
                _this.classSectionTempList = [];
                _this.classTimetableForm.controls['sectionId'].reset();
            }
        });
    };
    ClassTimetableComponent.prototype.onSelect = function () {
        var _this = this;
        if (this.classTimetableForm.controls.sectionId.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID && this.classTimetableForm.controls.classId.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID) {
            var sid_1 = this.classTimetableForm.value.sectionId;
            this.classTimetableTempList = [];
            var boardId = this.sectionNamesList.filter(function (val) {
                return val.value === sid_1;
            });
            this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId, this.classTimetableForm.value.classId, boardId[0].boardId).subscribe(function (res) {
                if (res.classTimetableTemplatesDataView != null) {
                    res.classTimetableTemplatesDataView.map(function (x) {
                        if (x.startDate != null && x.endDate != null) {
                            var startDate = (x.startDate == null) ? null : _this.commonService.customDateFormat(x.startDate, _this.getSchoolDateFormat()).date;
                            var endDate = (x.endDate == null) ? null : _this.commonService.customDateFormat(x.endDate, _this.getSchoolDateFormat()).date;
                            _this.classTimetableTempList.push({
                                value: x.id, label: x.name + ' ' + startDate + ' ' + 'to' + ' ' + endDate,
                                scheduleTemplateId: x.templateId,
                                aSd: x.startDate,
                                aEd: x.endDate,
                                timeTableId: x.classTimetableId
                            });
                        }
                        else {
                            _this.classTimetableTempList.push({
                                value: x.id, label: x.name, scheduleTemplateId: x.templateId, aSd: x.startDate,
                                aEd: x.endDate,
                                timeTableId: x.classTimetableId
                            });
                        }
                    });
                    _this.classTimetableForm.controls['scheduleTemplateId'].reset();
                    _this.isTemplateValid = true;
                    _this.isHasTemp = false;
                    _this.isAddData = true;
                    _this.isAddTimetable = false;
                    if (_this.classTimetableTempList.length === 1) {
                        _this.classTimetableForm.controls['scheduleTemplateId'].setValue(_this.classTimetableTempList[0].value);
                        // localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableForm.value.scheduleTemplateId).timeTableId);
                        _this.onTemplateSelect(_this.classTimetableTempList[0].value);
                    }
                    else {
                        _this.classSectionTempList = [];
                    }
                }
                else {
                    _this.isTemplateValid = false;
                    _this.isHasTemp = true;
                    _this.classTimetableTempList = [];
                    _this.classSectionTempList = [];
                }
            });
        }
        else {
            this.isClassSectionValid = true;
        }
    };
    ClassTimetableComponent.prototype.onTemplateSelect = function (data) {
        var _this = this;
        this.classSectionTempList = [];
        var filterClassSectionList = this.classTimetableTempList.find(function (x) { return x.value === data.value || data; });
        this.scheduleTemplateId = filterClassSectionList.scheduleTemplateId;
        this.classTimetableId = data.value || data;
        // localStorage.removeItem('_templateId');
        // localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableId).timeTableId);
        var sid = this.classTimetableForm.value.sectionId;
        var boardId = this.sectionNamesList.filter(function (val) {
            return val.value === sid;
        });
        this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, boardId[0].boardId, this.classTimetableId).subscribe(function (res) {
            if (res.classPeriodsView != null) {
                _this.classSectionTempList = res.classPeriodsView;
            }
        });
    };
    ClassTimetableComponent.prototype.updateScheduleTemp = function (resData) {
        if (resData.length > 0) {
            this.filterSchoolScheduleTempList = [];
            var _loop_1 = function (key) {
                var index = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                if (index === -1) {
                    var val = [];
                    val.push(key);
                    var data = { name: key.weekDayName, value: val };
                    this_1.filterSchoolScheduleTempList.push(data);
                }
                else {
                    var i = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                    this_1.filterSchoolScheduleTempList[i].value.push(key);
                }
            };
            var this_1 = this;
            for (var _i = 0, resData_1 = resData; _i < resData_1.length; _i++) {
                var key = resData_1[_i];
                _loop_1(key);
            }
            this.sortByWeekday(this.filterSchoolScheduleTempList);
        }
    };
    ClassTimetableComponent.prototype.sortByWeekday = function (data) {
        var sorter = {
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 7
        };
        data.sort(function sortByDay(a, b) {
            var day1 = a.name.toLowerCase();
            var day2 = b.name.toLowerCase();
            return sorter[day1] - sorter[day2];
        });
        if (this.isAddTimetable === true) {
            this.addClassSectionTempList = data;
        }
        else {
            this.classSectionTempList = data;
        }
    };
    ClassTimetableComponent.prototype.addClassTimetable = function () {
        if (this.errorFlag === 0) {
            localStorage.removeItem('_tId');
            this.isAddData = false;
            this.isHasTemp = false;
            this.isAddTimetable = true;
            this.classSectionTempList = [];
            this.isScheduleTemp = false;
            this.classTimetableId = null;
            this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
            this.classTimetableForm.controls['startDate'].clearValidators();
            this.classTimetableForm.controls['endDate'].clearValidators();
            this.classTimetableForm.controls['startDate'].setValue(null);
            this.classTimetableForm.controls['endDate'].setValue(null);
            this.classPeriodsDataView.classTimetableId = this.classTimetableId;
            this.isTemplateValid = false;
            this.getTemplateList();
            this.validateData();
            this.title = 'Add Class Timetable';
            this.classTimetableFormDetails = false;
            this.clearDateValidators();
        }
    };
    ClassTimetableComponent.prototype.getTemplateList = function () {
        var _this = this;
        this.scheduleTempList = [];
        this.classTimetableService.classTimetableTemplatesGet().subscribe(function (res) {
            if (res.commonViewModel != null) {
                res.commonViewModel.map(function (x) {
                    _this.scheduleTempList.push({ value: x.id, label: x.name });
                });
                if (_this.errorFlag === 0) {
                    _this.classTimetableForm.controls['scheduleTemplateId'].setValue(0);
                    _this.classTimetableFormDetails = false;
                }
                else {
                    _this.classTimetableForm.controls['scheduleTemplateId'].setValue(_this.scheduleTemplateId);
                }
            }
        });
    };
    ClassTimetableComponent.prototype.onScheduleTemplateSelect = function () {
        // if (JSON.parse(localStorage.getItem('_templateId')) == null) {
        //   localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableForm.value.scheduleTemplateId).timeTableId);
        // }
        var _this = this;
        this.addClassSectionTempList = [];
        this.classTimetableService.classTimetableTemplateDetailsGet(this.classTimetableForm.value.scheduleTemplateId).subscribe(function (res) {
            if (res.periodsListViewModel != null) {
                _this.addClassSectionTempList = res.periodsListViewModel;
                _this.updateScheduleTemp(_this.addClassSectionTempList);
                _this.getPeriodTypeList();
                if (_this.classTimetableId != null) {
                    _this.isScheduleTemp = true;
                }
            }
        });
    };
    ClassTimetableComponent.prototype.getPeriodTypeList = function () {
        var _this = this;
        this.periodTypeList = [];
        this.classTimetableService.classTimetableClassPeriodTypesGet().subscribe(function (res) {
            if (res.classPeriodTypesDropDownView != null) {
                res.classPeriodTypesDropDownView.map(function (x) {
                    _this.periodTypeList.push({
                        value: x.id, label: x.name, is_Break: x.is_Break,
                        has_Assignments: x.has_Assignments, has_Multiple_Assignments: x.has_Multiple_Assignments
                    });
                });
                _this.getCourseList();
            }
        });
    };
    ClassTimetableComponent.prototype.getCourseList = function () {
        var _this = this;
        this.courseList = [];
        var sectionId = this.classTimetableForm.value.sectionId;
        var boardId = this.sectionNamesList.filter(function (val) {
            return val.value === sectionId;
        });
        this.classTimetableService.classTimetableCoursesGet(boardId[0].boardId, this.classTimetableForm.value.classId).subscribe(function (res) {
            if (res.commonViewModel != null) {
                _this.courseList = [];
                res.commonViewModel.map(function (x) {
                    _this.courseList.push({ value: x.id, label: x.name });
                });
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].SCHOOL_BOARD_HAS_COURSES, true);
            }
            _this.getStaffList();
            _this.errorFlag = 0;
        });
    };
    ClassTimetableComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffList = [];
        this.classTimetableService.classTimetableStaffGet('STFT_TCH').subscribe(function (res) {
            if (res.commonViewModel != null) {
                _this.staffList = [];
                res.commonViewModel.map(function (x) {
                    _this.staffList.push({ value: x.id, label: x.name });
                });
            }
        });
    };
    ClassTimetableComponent.prototype.onPeriodTypeSelect = function (data, child, weekDayName) {
        var periodTypeId = data.value;
        var hasOptions = this.periodTypeList.filter(function (val) {
            return val.value === periodTypeId;
        });
        this.currentPeriod = child;
        this.currentPeriodTypeId = periodTypeId;
        this.weekDayName = weekDayName;
        if (hasOptions.length > 0) {
            switch (true) {
                case hasOptions[0].is_Break === 1:
                    this.assignLanguage(child, weekDayName);
                    this.onSubmitIsBreakDetails();
                    break;
                case hasOptions[0].has_Assignments === 1:
                    this.assignCourseStaff(child, weekDayName);
                    break;
                case hasOptions[0].has_Multiple_Assignments === 1:
                    this.assignLanguage(child, weekDayName);
                    this.courseStaffMultAssgnForm.reset();
                    this.coustomDialog = this.dialog.open(this.customTemplate, {
                        disableClose: true,
                        width: '500px',
                    });
                    break;
                case (hasOptions[0].has_Assignments === 0 && hasOptions[0].has_Multiple_Assignments === 0 &&
                    hasOptions[0].is_Break === 0):
                    this.assignLanguage(child, weekDayName);
                    this.onSubmitIsBreakDetails();
                    break;
                default:
                    break;
            }
        }
    };
    ClassTimetableComponent.prototype.assignLanguage = function (data, weekDayName) {
        if (this.updateClassTimetableDetails.length > 0) {
            this.updateClassTimetableDetails.forEach(function (n) {
                if (n.weekDayName === weekDayName) {
                    n.periodsView.forEach(function (m) {
                        if (m.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
                            m.hasAssignments = 0;
                            m.hasMultipleAssignments = 0;
                            m.courseAndStaffViewModel = [];
                        }
                    });
                }
            });
        }
        else {
            this.addClassSectionTempList.forEach(function (e) {
                if (e.name === data.weekDayName) {
                    e.value.forEach(function (e1) {
                        if (e1.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
                            e1.hasAssignments = false;
                        }
                    });
                }
            });
        }
    };
    ClassTimetableComponent.prototype.assignCourseStaff = function (data, weekDayName) {
        var _this = this;
        if (this.updateClassTimetableDetails.length > 0) {
            this.updateClassTimetableDetails.forEach(function (a) {
                if (a.weekDayName === weekDayName) {
                    a.periodsView.forEach(function (b) {
                        if (b.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
                            b.hasAssignments = 1;
                            b.hasMultipleAssignments = 0;
                            b.courseAndStaffViewModel = [];
                            b.courseAndStaffViewModel.push({
                                courseId: null, staffId: null
                            });
                        }
                    });
                }
            });
        }
        else {
            this.addClassSectionTempList.forEach(function (e) {
                if (e.name === data.weekDayName) {
                    e.value.forEach(function (e1) {
                        if (e1.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
                            e1.hasAssignments = true;
                        }
                    });
                }
            });
        }
        this.assignViewModelForPost();
        this.classPeriodsDataView.classPeriodsMultiView = [];
        this.classPeriodsDataView.classPeriodsMultiView.push({
            courseId: null,
            staffId: null
        });
        this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(function (res) {
            if (res.statusCode === _this.httpStatus.OK) {
                if (res.classTimetableId != null) {
                    _this.classTimetableId = res.classTimetableId;
                    _this.setForm(res);
                    _this.isScheduleTemp = true;
                }
                _this.clearHasMultiAssignments();
                _this.openSnackBar(res.messages.ResultMessage);
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ClassTimetableComponent.prototype.setForm = function (data) {
        this.classTimetableForm.controls['classId'].setValue(data.classId);
        this.classTimetableForm.controls['sectionId'].setValue(data.sectionId);
        this.timeTableId = data.timetableId;
    };
    ClassTimetableComponent.prototype.closeDialog = function () {
        var _this = this;
        if (!this.gridDataList.length) {
            this.clearStaff();
        }
        this.gridDataList = [];
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].HIDE);
        if (this.updateClassTimetableDetails.length) {
            var tempweekDay = this.weekDayName;
            this.updateClassTimetableDetails.forEach(function (element) {
                if (element.weekDayName === _this.weekDayName) {
                    element.periodsView.forEach(function (element1) {
                        if (element1.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId && _this.currentPeriod.courseAndStaffViewModel.length === 0) {
                            element1.periodTypeId = 0;
                        }
                    });
                    _this.weekDayName = null;
                }
            });
            this.weekDayName = tempweekDay;
        }
        else if (this.addClassSectionTempList.length) {
            this.addClassSectionTempList.forEach(function (element) {
                if (element.name === _this.currentPeriod.weekDayName) {
                    element.value.forEach(function (element1) {
                        if (element1.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId && (_this.currentPeriod.isEdit.length === 0 || _this.currentPeriod.isEdit === false)) {
                            element1['periodTypeId'] = 0;
                        }
                    });
                }
            });
        }
        this.dialog.closeAll();
    };
    ClassTimetableComponent.prototype.onSelectCourseStaffDetails = function () {
        var _this = this;
        var errorFlag = 0;
        if (this.courseStaffMultAssgnForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID) {
            var tableData = [];
            var cname_1 = this.courseList.find(function (x) { return x.value === _this.courseStaffMultAssgnForm.value.courseId; });
            var sname = this.staffList.find(function (x) { return x.value === _this.courseStaffMultAssgnForm.value.staffId; });
            tableData.push({
                courseId: cname_1.value, courseName: cname_1.label,
                staffId: sname.value, staffName: sname.label
            });
            if (this.gridDataList.length > 0) {
                if (this.gridDataList.filter(function (x) { return x.courseId === cname_1.value; }).length > 0) {
                    this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DUPLICATE_COURSE_SELECTION, true);
                    errorFlag = 1;
                    return false;
                }
            }
            if (errorFlag === 0) {
                tableData.forEach(function (element) {
                    _this.gridDataList.push(element);
                });
                this._courseStaffMultiAssignForm.resetForm();
            }
        }
        else {
            this.isCourseStaffAssgnValid = true;
            return false;
        }
    };
    ClassTimetableComponent.prototype.deleteItem = function (index) {
        this.gridDataList.splice(index, 1);
    };
    ClassTimetableComponent.prototype.onSubmitMultiAssignmentsDetails = function () {
        this.isSaveDetails = true;
        this.assignViewModelForPost();
        this.assignCourseStaffGridDetails();
        this.onSubmitHasMultiAssignments();
    };
    ClassTimetableComponent.prototype.onSubmitStaffCourseDetails = function (child, value, label, cs) {
        var _this = this;
        this.currentPeriod = child;
        if (label.textContent === 'Course') {
            this.currentPeriod.courseId = value;
        }
        else {
            this.currentPeriod.staffId = value;
        }
        if (this.updateClassTimetableDetails.length > 0) {
            if (this.currentPeriod.staffId === undefined) {
                this.currentPeriod.staffId = cs.staffId;
            }
            if (this.currentPeriod.courseId === undefined) {
                this.currentPeriod.courseId = cs.courseId;
            }
        }
        this.assignViewModelForPost();
        this.classPeriodsDataView.classPeriodsMultiView = [];
        this.classPeriodsDataView.classPeriodsMultiView.push({
            courseId: this.currentPeriod.courseId,
            staffId: this.currentPeriod.staffId
        });
        this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(function (res) {
            if (res.statusCode === _this.httpStatus.OK) {
                if (res.classTimetableId != null) {
                    _this.classTimetableId = res.classTimetableId;
                    _this.setForm(res);
                    _this.isScheduleTemp = true;
                }
                _this.clearHasMultiAssignments();
                _this.openSnackBar(res.messages.ResultMessage);
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ClassTimetableComponent.prototype.onSubmitIsBreakDetails = function () {
        var _this = this;
        this.assignViewModelForPost();
        this.classPeriodsDataView.classPeriodsMultiView = [];
        this.classPeriodsDataView.classPeriodsMultiView.push({
            courseId: null,
            staffId: null
        });
        this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(function (res) {
            if (res.statusCode === _this.httpStatus.OK) {
                if (res.classTimetableId != null) {
                    _this.classTimetableId = res.classTimetableId;
                    _this.setForm(res);
                    _this.isScheduleTemp = true;
                }
                _this.clearHasMultiAssignments();
                _this.openSnackBar(res.messages.ResultMessage);
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ClassTimetableComponent.prototype.assignViewModelForPost = function () {
        if (this.classTimetableId != null) {
            this.classPeriodsDataView.classTimetableId = this.classTimetableId;
        }
        var sectionId = this.classTimetableForm.value.sectionId;
        var boardId = this.sectionNamesList.filter(function (val) {
            return val.value === sectionId;
        });
        this.classPeriodsDataView.classId = this.classTimetableForm.value.classId;
        this.classPeriodsDataView.sectionId = this.classTimetableForm.value.sectionId;
        this.classPeriodsDataView.boardId = boardId[0].boardId;
        this.classPeriodsDataView.templateId = this.classTimetableForm.value.scheduleTemplateId;
        this.classPeriodsDataView.startDate = this.classTimetableForm.value.startDate;
        this.classPeriodsDataView.endDate = this.classTimetableForm.value.endDate;
        this.classPeriodsDataView.schoolSchedulePeriodId = this.currentPeriod.schoolSchedulePeriodId;
        this.classPeriodsDataView.classPeriodTypeId = this.currentPeriodTypeId || this.currentPeriod.periodTypeId;
    };
    ClassTimetableComponent.prototype.assignCourseStaffGridDetails = function () {
        var _this = this;
        this.classPeriodsDataView.classPeriodsMultiView = [];
        this.gridDataList.forEach(function (e) {
            _this.classPeriodsDataView.classPeriodsMultiView.push({
                courseId: e.courseId,
                staffId: e.staffId
            });
        });
        if (this.updateClassTimetableDetails.length > 0) {
            this.updateClassTimetableDetails.forEach(function (n) {
                if (n.weekDayName === _this.weekDayName) {
                    n.periodsView.forEach(function (m) {
                        if (m.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId) {
                            m.hasAssignments = 0;
                            m.courseAndStaffViewModel = _this.gridDataList;
                            if (_this.gridDataList.length) {
                                m.hasMultipleAssignments = 1;
                            }
                            else {
                                m.hasMultipleAssignments = 0;
                                m.periodTypeId = 0;
                            }
                        }
                    });
                }
            });
        }
        else {
            this.addClassSectionTempList.forEach(function (p) {
                if (p.name === _this.currentPeriod.weekDayName) {
                    p.value.forEach(function (q) {
                        if (q.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId) {
                            var index = p.value.findIndex(function (ele) { return ele.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId; });
                            q.hasAssignments = 0;
                            q.courseAndStaffViewModel = _this.gridDataList;
                            if (_this.gridDataList.length) {
                                q.hasMultipleAssignments = 1;
                            }
                            else {
                                q.hasMultipleAssignments = 0;
                                q.periodTypeId = 0;
                            }
                            p.value[index].isEdit = false;
                            for (var _i = 0, _a = _this.gridDataList; _i < _a.length; _i++) {
                                var key = _a[_i];
                                if (p.value[index].isEdit === false) {
                                    p.value[index].isEdit = [];
                                    p.value[index].isEdit.push(key);
                                }
                                else {
                                    p.value[index].isEdit.push(key);
                                }
                            }
                        }
                    });
                }
            });
        }
    };
    ClassTimetableComponent.prototype.onSubmitHasMultiAssignments = function () {
        var _this = this;
        this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(function (res) {
            if (res.statusCode === _this.httpStatus.OK) {
                _this.dialog.closeAll();
                _this.isSaveDetails = false;
                if (res.classTimetableId != null) {
                    _this.classTimetableId = res.classTimetableId;
                    _this.setForm(res);
                    _this.isScheduleTemp = true;
                }
                _this.openSnackBar(res.messages.ResultMessage);
                _this.gridDataList = [];
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.isSaveDetails = false;
            _this.errorResponse(error);
        });
    };
    ClassTimetableComponent.prototype.clearHasMultiAssignments = function () {
        var _this = this;
        this.addClassSectionTempList.forEach(function (p) {
            if (p.name === _this.currentPeriod.weekDayName) {
                p.value.forEach(function (q) {
                    if (q.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId) {
                        var index = p.value.findIndex(function (ele) { return ele.schoolSchedulePeriodId === _this.currentPeriod.schoolSchedulePeriodId; });
                        p.value[index].isEdit = [];
                    }
                });
            }
        });
    };
    ClassTimetableComponent.prototype.editMultiAssignments = function (data, periodTypeId) {
        this.currentPeriod = data;
        this.currentPeriodTypeId = periodTypeId;
        this.gridDataList = data.isEdit || data.courseAndStaffViewModel;
        this.coustomDialog = this.dialog.open(this.customTemplate, {
            disableClose: true,
            width: '500px',
        });
        this.courseStaffMultAssgnForm.reset();
    };
    ClassTimetableComponent.prototype.deleteClassTimetable = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                _this.classTimetableService.classTimetableClassPeriodsDelete(_this.classTimetableForm.value.classId, _this.classTimetableForm.value.sectionId, _this.classTimetableForm.value.scheduleTemplateId).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO) {
                _this.dialog.closeAll();
            }
        });
    };
    ClassTimetableComponent.prototype.deleteResponse = function (response) {
        this.isTemplateValid = false;
        this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
        this.validateStartEndDate();
        this.openSnackBar(response.messages.ResultMessage);
    };
    ClassTimetableComponent.prototype.updateClassTimetable = function () {
        var _this = this;
        localStorage.setItem('_tId', this.classTimetableTempList.find(function (x) { return x.value === _this.classTimetableForm.value.scheduleTemplateId; }).timeTableId);
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
        this.classTimetableTempList.forEach(function (e) {
            if (e.value === _this.classTimetableForm.value.scheduleTemplateId) {
                _this.scheduleTemplateId = e.scheduleTemplateId;
                _this.startDate = datePipe.transform(e.aSd, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DATE_FORMAT);
                _this.endDate = datePipe.transform(e.aEd, app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DATE_FORMAT);
            }
        });
        this.classTimetableService.classTimetableClassTimetableByIdGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, this.classTimetableForm.value.scheduleTemplateId, this.startDate, this.endDate).subscribe(function (res) {
            if (res.classPeriodsView != null) {
                _this.classSectionTempList = [];
                _this.addClassSectionTempList = [];
                _this.updateClassTimetableDetails = [];
                _this.isAddData = false;
                _this.isHasTemp = false;
                _this.isAddTimetable = true;
                _this.isTemplateValid = false;
                _this.errorFlag = 1;
                _this.getPeriodTypeList();
                _this.getTemplateList();
                _this.classTimetableForm.controls['startDate'].setValue(_this.startDate);
                _this.classTimetableForm.controls['endDate'].setValue(_this.endDate);
                _this.classTimetableForm.controls['startDate'].clearValidators();
                _this.classTimetableForm.controls['endDate'].clearValidators();
                _this.updateClassTimetableDetails = res.classPeriodsView;
                _this.title = 'Edit Class Timetable';
                _this.isScheduleTemp = true;
                _this.validateData();
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage);
                return false;
            }
        });
    };
    ClassTimetableComponent.prototype.validateStartEndDate = function () {
        this.isAddData = true;
        this.isHasTemp = false;
        this.isAddTimetable = false;
        this.classTimetableForm.reset();
        this.classSectionTempList = [];
        this.addClassSectionTempList = [];
        this.updateClassTimetableDetails = [];
        this.title = 'Add Class Timetable';
        this._classTimeTableForm.resetForm();
    };
    ClassTimetableComponent.prototype.validateData = function () {
        if ((this.classTimetableForm.value.startDate == null
            || this.classTimetableForm.value.startDate === undefined) && (this.classTimetableForm.value.endDate == null || this.classTimetableForm.value.endDate === undefined)) {
            this.isValidDate = false;
            this.classTimetableFormDetails = false;
        }
        else {
            this.isValidDate = true;
        }
    };
    ClassTimetableComponent.prototype.clearDateValidators = function () {
        if ((this.classTimetableForm.value.startDate == null
            || this.classTimetableForm.value.startDate === undefined) && (this.classTimetableForm.value.endDate == null || this.classTimetableForm.value.endDate === undefined)) {
            if (this.classTimetableForm.controls['startDate'].invalid || this.classTimetableForm.controls['endDate'].invalid) {
                this.classTimetableForm.controls['startDate'].clearValidators();
                this.classTimetableForm.controls['startDate'].updateValueAndValidity();
                this.classTimetableForm.controls['endDate'].clearValidators();
                this.classTimetableForm.controls['endDate'].updateValueAndValidity();
            }
        }
    };
    ClassTimetableComponent.prototype.onSelectClassTimetable = function () {
        var _this = this;
        this.validateData();
        // this.clearDateValidators();
        if (this.classTimetableForm.controls.scheduleTemplateId.value === 0) {
            this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
        }
        if (this.classTimetableForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID) {
            this.classTimetableUpdateView.id = this.classTimetableId;
            this.classTimetableUpdateView.startDate = this.classTimetableForm.value.startDate;
            this.classTimetableUpdateView.endDate = this.classTimetableForm.value.endDate;
            if (this.classTimetableId != null) {
                this.classTimetableService.classTimetableClassTimetableUpdatePut(this.classTimetableUpdateView).subscribe(function (res) {
                    if (res.statusCode === _this.httpStatus.OK) {
                        _this.isValidDate = false;
                        _this.openSnackBar(res.messages.ResultMessage);
                        _this.savedDataView(res.timetableId);
                    }
                    else {
                        _this.openSnackBar(res.messages.ResultMessage, true);
                    }
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PLEASE_ASSIGN_COURSE_STAFF, true);
            }
        }
        else {
            this.classTimetableFormDetails = true;
            return false;
        }
    };
    ClassTimetableComponent.prototype.savedDataView = function (data) {
        var _this = this;
        var sid = this.classTimetableForm.value.sectionId;
        this.classTimetableTempList = [];
        var boardId = this.sectionNamesList.filter(function (val) {
            return val.value === sid;
        });
        this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId, this.classTimetableForm.value.classId, boardId[0].boardId).subscribe(function (res) {
            if (res.classTimetableTemplatesDataView != null) {
                res.classTimetableTemplatesDataView.map(function (x) {
                    if (x.startDate != null && x.endDate != null) {
                        var startDate = (x.startDate == null) ? null : _this.commonService.customDateFormat(x.startDate, _this.getSchoolDateFormat()).date;
                        var endDate = (x.endDate == null) ? null : _this.commonService.customDateFormat(x.endDate, _this.getSchoolDateFormat()).date;
                        _this.classTimetableTempList.push({
                            value: x.id, label: x.name + ' ' + startDate + ' ' + 'to' + ' ' + endDate,
                            scheduleTemplateId: x.templateId,
                            aSd: x.startDate,
                            aEd: x.endDate,
                            timeTableId: x.classTimetableId
                        });
                    }
                    else {
                        _this.classTimetableTempList.push({
                            value: x.id, label: x.name, scheduleTemplateId: x.templateId, aSd: x.startDate,
                            aEd: x.endDate,
                            timeTableId: x.classTimetableId
                        });
                    }
                });
                _this.addClassSectionTempList = [];
                _this.updateClassTimetableDetails = [];
                _this.classTimetableTempList.forEach(function (n) {
                    if (n.timeTableId === data) {
                        _this.classTimetableId = n.value;
                    }
                });
                _this.classTimetableForm.controls['scheduleTemplateId'].setValue(_this.classTimetableId);
                _this.onTemplateSelect(_this.classTimetableId);
                _this.isTemplateValid = true;
                _this.isHasTemp = false;
                _this.isAddData = true;
                _this.isAddTimetable = false;
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.isSaveDetails = false;
            _this.errorResponse(error);
        });
    };
    ClassTimetableComponent.prototype.clearBack = function () {
        this.classTimetableFormDetails = false;
        if (JSON.parse(localStorage.getItem('_tId')) != null) {
            this.savedDataView(JSON.parse(localStorage.getItem('_tId')));
        }
        //  else if (JSON.parse(localStorage.getItem('_templateId')) != null) {
        //   this.savedDataView(JSON.parse(localStorage.getItem('_templateId')));
        // } 
        else if (this.classTimetableId != null) {
            this.savedDataView(this.timeTableId);
        }
        else {
            this.isAddData = true;
            this.isAddTimetable = false;
            this.addClassSectionTempList = [];
            this.updateClassTimetableDetails = [];
            this.onSelect();
        }
        this.clearDateValidators();
    };
    ClassTimetableComponent.prototype.clearStaff = function () {
        this.gridDataList = [];
        this.onSubmitMultiAssignmentsDetails();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ClassTimetableComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ClassTimeTableForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassTimetableComponent.prototype, "_classTimeTableForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CourseStaffMultiAssignForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassTimetableComponent.prototype, "_courseStaffMultiAssignForm", void 0);
    ClassTimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-timetable',
            template: __webpack_require__(/*! ./class-timetable.component.html */ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.html"),
            providers: [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__["ClassTimetableService"]],
            styles: [__webpack_require__(/*! ./class-timetable.component.scss */ "./src/app/modules/configuration/class-schedules/class-timetable/class-timetable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_4__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__["ClassTimetableService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ClassTimetableComponent);
    return ClassTimetableComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-40\">\n  <div class=\"pl-24 text-uppercase font-size-18 pb-4\"><span>{{title | translate}}</span>\n  </div>\n  <!-- Get details of class section dropdowns-->\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-20\" fxLayout=\"column\">\n    <form *ngIf=\"!addTimeTable && !isEdit\" [formGroup]=\"classTimetableForm\" (ngSubmit)=\"onSubmitClassTimetable()\"\n      #ClassTimeTableForm=\"ngForm\" fxLayout=\"column\">\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"pt-20 px-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"35\">\n          <mat-label #classId translate>Class</mat-label>\n          <mat-select (selectionChange)=\"onClassSelect($event)\" formControlName=\"classId\" required>\n            <mat-option *ngFor=\"let class of filterClasses\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"classId.innerText\" [validationControl]=\"classTimetableForm.controls.classId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"35\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" (selectionChange)=\"onSectionSelect()\" required>\n            <mat-option [style.display]=\"classTimetableForm.value.classId ? '' : 'none'\"\n              *ngFor=\"let section of sectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n              <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span>\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"sectionId.innerText\"\n              [validationControl]=\"classTimetableForm.controls.sectionId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <!--  End -->\n\n        <!-- Edit,Delete actions if class section has template details -->\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\" class=\"pt-12 pr-12\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button *ngIf=\"classTimetableForm?.value?.selectedTemplated\" type=\"button\" mat-icon-button class=\"red-400-fg\"\n              (click)=\"deleteClassTimetable()\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button *ngIf=\"classTimetableForm.valid && timeTableList?.length\" mat-raised-button type=\"button\"\n              class=\"text-uppercase mx-20\" color=\"accent\" (click)=\"addClassTimetable()\"><span\n                translate>Add</span></button>\n            <button mat-button type=\"button\" (click)=\"getHelpText('Class Timetables')\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- End -->\n      </div>\n\n      <!-- Get Template details with respect to class section and board Id's-->\n      <mat-divider *ngIf=\"classTimetableForm.valid && timeTableList?.length\"></mat-divider>\n      <div *ngIf=\"classTimetableForm.valid && timeTableList?.length\" fxLayout.gt-sm=\"row\" fxLayout=\"column\"\n        class=\"pt-24 px-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #classTempId translate>Timetables</mat-label>\n          <mat-select (selectionChange)=\"onTimeTableSelect($event.value)\" formControlName=\"selectedTemplated\">\n            <mat-option *ngFor=\"let classTemp of timeTableList\" [value]=\"classTemp.value\">\n              {{classTemp.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"pt-16\"><button *ngIf=\"classTimetableForm?.value?.selectedTemplated\" mat-raised-button type=\"button\" id=\"edit\"\n            class=\"text-uppercase mx-20 mb-20\" color=\"primary\" (click)=\"updateClassTimetable()\" translate>\n            <span\n              translate>Edit</span></button> </div>\n      </div>\n      <!-- End -->\n      <!-- Get Details of schedule template based on class section and board after save-->\n      <mat-divider *ngIf=\"selectedTimeTableDetails?.length > 0\" class=\"mt-20\"></mat-divider>\n      <div *ngIf=\"selectedTimeTableDetails?.length > 0\" class=\"m-20 border school-period\">\n        <div fxLayout=\"row inline\" *ngFor=\"let item of selectedTimeTableDetails; let in = index\" class=\"mw-100-p\">\n          <div class=\"border-bottom\">\n            <div fxLayout=\"column\" fxFlex=\"20\"\n              class=\"border-right p-20 w-120 weekDay custom-white accent-fg font-weight-600 text-uppercase\" translate>\n              {{item.weekDayName | translate}}</div>\n            <div fxLayout=\"column\" fxFlex=\"20\" class=\"border-right w-200 p-12 break-word\"\n              *ngFor=\"let child of item.periodsView;let i=index\"\n              [ngClass]=\"item.periodsView?.length > selectedTimeTableDetails[in-1]?.periodsView?.length ? (i > ( selectedTimeTableDetails[in-1]?.periodsView?.length-1) && in  ? 'border-top' : ''): ''\">\n              <div fxLayout=\"row\">{{child.periodName}}</div>\n              <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n                {{child.endTime | slice:0:5}}\n              </div>\n              <div fxLayout=\"row\">{{child.periodTypeName}}</div>\n              <div fxLayout=\"row\" *ngFor=\"let childs of child.courseAndStaffViewModel;\"><span\n                  *ngIf=\"childs.courseName!=null || childs.staffName\" class=\"text-truncate\" matTooltipClass=\"matTool-tip\"\n                  matTooltipPosition=\"above\" [matTooltip]=\"childs.staffName\">{{childs.courseName}} <span *ngIf=\"childs.courseName && childs.staffName\">-</span>\n                  {{childs.staffName}}</span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End -->\n\n    </form>\n\n    <!-- Add Class Timetable -->\n    <form *ngIf=\"addTimeTable || isEdit\" [formGroup]=\"classTimetableForm\" (ngSubmit)=\"onSubmitClassTimetable()\"\n      #ClassTimeTableForm=\"ngForm\">\n      <div fxlayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-16\">\n        <button mat-raised-button translate type=\"button\" color=\"primary\" class=\"text-uppercase\"\n          (click)=\"clearBack()\">{{'Back' | translate}}</button>\n        <button mat-button type=\"button\" (click)=\"getHelpText('Class Timetables')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n      <mat-divider></mat-divider>\n      <div fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"pt-24 px-20\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #classId translate>Class</mat-label>\n          <mat-select formControlName=\"classId\" [disabled]=\"addTimeTable || isEdit\" required>\n            <mat-option *ngFor=\"let class of filterClasses\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"35\">\n          <mat-label #sectionId translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" [disabled]=\"addTimeTable || isEdit\" required>\n            <mat-option *ngFor=\"let section of sectionNamesList\" [value]=\"section.value\">\n              {{section.label}}\n              <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span>\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #scheduleTempId translate>Schedule Template</mat-label>\n          <mat-select formControlName=\"scheduleTemplateId\" (selectionChange)=\"onScheduleTemplateSelect()\"\n            [disabled]=\"classTimetableForm?.value?.scheduleTemplateId\" [required]=addTimeTable>\n            <mat-option *ngFor=\"let scheduleTemp of scheduleTempList\" [value]=\"scheduleTemp.value\">\n              {{scheduleTemp.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='scheduleTempId.innerText'\n              [validationControl]=\"classTimetableForm.controls.scheduleTemplateId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayoutAlign=\"start center\" fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"py-16 px-20\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"32\" fxFlex=\"100\" fxLayout=\"column\"\n          class=\"icon-center\">\n          <mat-label #startDate translate>Start Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('startDate',classTimetableForm)\" [matDatepicker]=\"startDatePicker\"\n            formControlName=\"startDate\"\n            [required]=\"(classTimetableForm?.value?.startDate || classTimetableForm?.value?.endDate)\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #startDatePicker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='startDate.innerText'\n              [validationControl]=\"classTimetableForm.controls.startDate\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"px-sm-24 icon-center\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"36\">\n          <mat-label #endDate translate>End Date</mat-label>\n          <input matInput (keyup)=\"forceValidation('endDate',classTimetableForm)\" [matDatepicker]=\"endDatePicker\"\n            [min]=\"classTimetableForm.controls.startDate.value\" formControlName=\"endDate\"\n            [required]=\"(classTimetableForm?.value?.startDate || classTimetableForm?.value?.endDate)\">\n          <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #endDatePicker [startAt]=\"classTimetableForm.value.startDate\"></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='endDate.innerText' [validationControl]=\"classTimetableForm.controls.endDate\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase mr-12 mb-20\"\n          color=\"accent\">{{'submit' | translate}}</button>\n      </div>\n    </form>\n\n    <mat-divider *ngIf=\"classTimetableForm.valid && addTemplateView?.length > 0\" class=\"mt-20\"></mat-divider>\n    <div *ngIf=\"classTimetableForm.valid && addTemplateView?.length > 0\" class=\"m-20 border school-period\">\n      <div fxLayout=\"row inline\" *ngFor=\"let item of addTemplateView; let i=index\" class=\"mw-100-p border-bottom\">\n        <div fxLayout=\"column\" fxFlex=\"20\"\n          class=\"border-right p-20 w-120 weekDay custom-white accent-fg font-weight-600 text-uppercase\" translate>\n          {{item.name}}</div>\n        <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"start start\" class=\"w-232 p-20\"\n          *ngFor=\"let child of item.value;let ci=index\">\n          <div fxLayout=\"row\">{{child.periodName}}</div>\n          <div fxLayout=\"row\" class=\"grey-500-fg\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n            {{child.endTime | slice:0:5}}\n          </div>\n          <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n            <mat-label #periodTypeId translate>Period Type</mat-label>\n            <mat-select (selectionChange)=\"onPeriodTypeSelect($event,child,i,ci)\" #periodTypeId=\"ngModel\" ngModel\n              [(ngModel)]=\"child.periodTypeId\" name=\"periodTypeId\" required>\n              <mat-option *ngFor=\"let periodType of periodTypeList\" [value]=\"periodType.value\">\n                {{periodType.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <ng-container *ngIf=\"child && child?.courseAndStaffViewModel && child?.courseAndStaffViewModel?.length && addTimeTable\">\n            <div fxLayout=\"row\" *ngFor=\"let courseStaff of child.courseAndStaffViewModel;\">\n              <span class=\"pr-4\">{{courseStaff.courseName}}:</span><span class=\"break-word\">{{courseStaff.staffName}}</span></div>\n            <div fxLayout=\"row\" *ngIf=\"child.courseAndStaffViewModel.length>0\"><button mat-raised-button id=\"edit\"\n                (click)=editMultiAssignments(child,i); class=\"accent-fg\">Edit</button></div>\n          </ng-container>\n          <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments && addTimeTable\" class=\"w-100-p\">\n            <mat-label #courseId translate>Course</mat-label>\n            <mat-select \n              (selectionChange)=\"onChangeStaffCourseDetails($event.value, true)\" required>\n              <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n                {{course.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments && addTimeTable\" class=\"w-100-p\">\n            <mat-label #staffId translate>Staff</mat-label>\n            <mat-select \n              (selectionChange)=\"onChangeStaffCourseDetails($event.value, false)\" required>\n              <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n                {{staff.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <ng-container *ngIf=\"child && child?.courseAndStaffViewModel && child?.courseAndStaffViewModel?.length && !addTimeTable\">\n            <ng-container *ngFor=\"let courseStaff of child.courseAndStaffViewModel;let l = last\">\n              <div *ngIf=\"child.hasMultipleAssignments\" fxLayout=\"row\">\n                <span class=\"pr-4\">{{courseStaff.courseName}}:</span><span class=\"break-word\">{{courseStaff.staffName}}</span></div>\n              <div fxLayout=\"row\" *ngIf=\"child.hasMultipleAssignments && l\"><button mat-raised-button id=\"edit\"\n                  (click)=\"editMultiAssignments(child, i);\" class=\"accent-fg\">Edit</button></div>\n\n              <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n                <mat-label #courseId translate>Course</mat-label>\n                <mat-select #cId=\"ngModel\" [(ngModel)]=\"courseStaff.courseId\" ngModel name=\"cId\"\n                  (selectionChange)=\"onChangeStaffCourseDetails($event.value, true, child)\" required>\n                  <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n                    {{course.label}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n                <mat-label #staffId translate>Staff</mat-label>\n                <mat-select #sId=\"ngModel\" [(ngModel)]=\"courseStaff.staffId\" ngModel name=\"sId\"\n                  (selectionChange)=\"onChangeStaffCourseDetails($event.value, false, child)\" required>\n                  <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n                    {{staff.label}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"!child?.courseAndStaffViewModel?.length && isEdit\">\n            <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n              <mat-label #courseId translate>Course</mat-label>\n              <mat-select \n                (selectionChange)=\"onChangeStaffCourseDetails($event.value, true, child)\" required>\n                <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n                  {{course.label}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" *ngIf=\"child.hasAssignments\" class=\"w-100-p\">\n              <mat-label #staffId translate>Staff</mat-label>\n              <mat-select \n                (selectionChange)=\"onChangeStaffCourseDetails($event.value, false, child)\" required>\n                <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n                  {{staff.label}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n\n    <!-- Add options for Class Timetable -->\n    <ng-container *ngIf=\"classTimetableForm.valid && !selectedTimeTableDetails?.length && !addTemplateView?.length && !timeTableList?.length && isReqProcessed | async\">\n      <div class=\"text-center font-size-16 mt-48\" translate>No Class Time Table\n        Has Been\n        Defined For The\n        Selected Class And Section</div>\n      <div class=\"text-center font-size-16 pt-4\" translate>Please Click On Add To Create A\n        New Time Table</div>\n      <div fxLayout=\"row\" class=\"p-20\" fxLayoutAlign=\"center center\">\n        <button mat-raised-button type=\"button\" (click)=\"addClassTimetable()\" class=\"text-uppercase px-36\"\n          color=\"accent\" translate>Add</button>\n      </div>\n      <mat-divider class=\"mb-20\">\n      </mat-divider>\n      <!-- End -->\n    </ng-container>\n  </div>\n</div>\n\n<!-- Coustom Dialog for Has_Multiple_Assignments -->\n<ng-template #myTemplate>\n  <!-- <div [@animate]=\"{value:'*',params:{y:'100%'}}\"> -->\n  <div fxLayoutAlign=\"space-between center\" class=\"font-size-20\"><span translate>Select Course & Staff</span><button id=\"close\"\n      (click)=\"clearStaff()\" mat-icon-button>\n      <mat-icon>close</mat-icon>\n    </button></div>\n  <form [formGroup]=\"courseStaffMultAssgnForm\" (ngSubmit)=\"onSelectCourseStaffDetails()\"\n    #CourseStaffMultiAssignForm=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxFlexFill>\n        <mat-label #courseId translate>Course</mat-label>\n        <mat-select formControlName=\"courseId\" required>\n          <mat-option *ngFor=\"let course of courseList\" [value]=\"course.value\">\n            {{course.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='courseId.innerText'\n            [validationControl]=\"courseStaffMultAssgnForm.controls.courseId\" [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlexFill>\n        <mat-label #staffId translate>Staff</mat-label>\n        <mat-select formControlName=\"staffId\" required>\n          <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.value\">\n            {{staff.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='staffId.innerText'\n            [validationControl]=\"courseStaffMultAssgnForm.controls.staffId\" [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div fxFlexFill fxLayoutAlign=\"end center\" fxLayout=\"row\" class=\"pb-20\">\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase accent-fg\">{{'Select' | translate}}</button>\n    </div>\n  </form>\n  <!-- </div> -->\n  <div *ngIf=\"selectedCoursesSatffs?.length > 0\" fxLayout=\"column\">\n    <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border-top border-horizontal class-timetable\">\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\"><span translate>Course</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\"><span translate>Staff</span></mat-list-item>\n    </mat-list>\n    <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border class-timetable\">\n      <ng-container *ngFor=\"let column of selectedCoursesSatffs;let i=index\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">{{column.courseName}}</mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <span>{{column.staffName}}</span>\n          <button [disabled]=\"!(selectedCoursesSatffs?.length>1)\" mat-icon-button\n            (click)=\"deleteSelectedCourseStaffItem(i)\">\n            <mat-icon>cancel</mat-icon>\n          </button>\n        </mat-list-item>\n      </ng-container>\n    </mat-list>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-12\">\n    <button *ngIf=\"selectedCoursesSatffs?.length===1\" type=\"reset\" mat-raised-button class=\"mr-16 text-uppercase\"\n      (click)=\"clearMultiSelectStaff()\">{{'Clear' | translate}}</button>\n    <button *ngIf=\"selectedCoursesSatffs?.length>0\" type=\"button\" mat-raised-button color=\"accent\"\n      (click)=\"onMultiSelectCourseStaffSubmit()\" [disabled]=disableSaveBtn translate>{{'Save' | translate}}</button>\n  </div>\n</ng-template>\n<!-- End Coustom Dialog  -->\n"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".school-period {\n  overflow-y: auto;\n  overflow: overlay; }\n  .school-period .mw-100-p {\n    min-width: 100%; }\n  .school-period .weekDay {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0px;\n    z-index: 1; }\n  .class-timetable {\n  max-height: 200px;\n  overflow: auto; }\n  .class-timetable ::ng-deep .mat-list-item-content {\n    place-content: center space-between;\n    -webkit-box-align: center;\n            align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvY2xhc3MtdGltZXRhYmxlcy9jbGFzcy10aW1ldGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBSHJCO0lBS1EsZUFBZSxFQUFBO0VBTHZCO0lBUVEsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtFQUZsQjtJQUlJLG1DQUFtQztJQUNuQyx5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vY2xhc3Mtc2NoZWR1bGVzL2NsYXNzLXRpbWV0YWJsZXMvY2xhc3MtdGltZXRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNjaG9vbC1wZXJpb2Qge1xuICAgIC8vbWF4LXdpZHRoOiA3ODhweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIC5tdy0xMDAtcCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgfVxuICAgIC53ZWVrRGF5IHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH0gICBcbn1cbi5jbGFzcy10aW1ldGFibGV7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ClassTimetablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTimetablesComponent", function() { return ClassTimetablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");











var ClassTimetablesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassTimetablesComponent, _super);
    function ClassTimetablesComponent(classTimetableService, gradeSetupService, _fb, commonService, dialog, snackBar, cd, _focusMonitor) {
        var _this = _super.call(this) || this;
        _this.classTimetableService = classTimetableService;
        _this.gradeSetupService = gradeSetupService;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this._focusMonitor = _focusMonitor;
        _this.addTimeTable = false;
        _this.selectedCoursesSatffs = [];
        _this.isReqProcessed = Promise.resolve(false);
        _this.title = 'Add Class Timetable';
        return _this;
    }
    ClassTimetablesComponent.prototype.ngOnInit = function () {
        this.timeTableForm();
        this.getClassesList();
    };
    // Get Classes to filter table data
    ClassTimetablesComponent.prototype.getClassesList = function () {
        var _this = this;
        this.filterClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.filterClasses.push({
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
    // End
    ClassTimetablesComponent.prototype.onClassSelect = function (data) {
        var _this = this;
        this.sectionNamesList = [];
        this.clearSelectedTemplate();
        this.isReqProcessed = Promise.resolve(false);
        this.classTimetableForm.controls['sectionId'].reset();
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (res) {
            if (res.classTimetableSectionsView != null) {
                res.classTimetableSectionsView.map(function (x) {
                    _this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
                });
            }
        });
    };
    ClassTimetablesComponent.prototype.timeTableForm = function () {
        this.classTimetableForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            scheduleTemplateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            selectedTemplated: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
        this.courseStaffMultAssgnForm = this._fb.group({
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            staffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    };
    ClassTimetablesComponent.prototype.onSectionSelect = function () {
        var _this = this;
        if (this.classTimetableForm.valid) {
            this.clearSelectedTemplate();
            this.isReqProcessed = Promise.resolve(false);
            var boardId = this.sectionNamesList.find(function (s) { return s.value === _this.classTimetableForm.value.sectionId; }).boardId;
            this.getTemplateDetails(boardId);
        }
    };
    ClassTimetablesComponent.prototype.getTemplateDetails = function (boardId) {
        var _this = this;
        this.classTimetableForm.controls['selectedTemplated'].reset();
        this.timeTableList = [];
        this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId, this.classTimetableForm.value.classId, boardId).subscribe(function (res) {
            _this.isReqProcessed = Promise.resolve(true);
            if (res.classTimetableTemplatesDataView != null) {
                res.classTimetableTemplatesDataView.map(function (x) {
                    var startDate = (x.startDate == null) ? null : _this.commonService.customDateFormat(x.startDate, _this.getSchoolDateFormat()).date;
                    var endDate = (x.endDate == null) ? null : _this.commonService.customDateFormat(x.endDate, _this.getSchoolDateFormat()).date;
                    var date = [startDate, endDate].filter(function (j) { return j; }).join(' to ');
                    _this.timeTableList.push({
                        value: x.id,
                        label: [x.name, date].filter(function (j) { return j; }).join(' '),
                        scheduleTemplateId: x.templateId,
                        aSd: x.startDate,
                        aEd: x.endDate,
                        timeTableId: x.classTimetableId
                    });
                });
                if (_this.timeTableList.length === 1 && (_this.classTimeTableValue === undefined || _this.classTimeTableValue === null)) {
                    _this.classPeriodsDataView = {
                        classTimetableId: null
                    };
                    _this.classTimeTableValue = _this.timeTableList[0].timeTableId;
                }
                if (_this.classTimeTableValue !== undefined && _this.classTimeTableValue !== null) {
                    var classTimeTable = _this.timeTableList.find(function (sl) { return sl.timeTableId === _this.classTimeTableValue; });
                    _this.classPeriodsDataView.classTimetableId = classTimeTable !== undefined ? classTimeTable.value : null;
                    _this.classTimetableForm.controls['selectedTemplated'].patchValue(_this.classPeriodsDataView.classTimetableId);
                    _this.onTimeTableSelect(_this.classPeriodsDataView.classTimetableId);
                }
            }
        });
    };
    ClassTimetablesComponent.prototype.onTimeTableSelect = function (data) {
        var _this = this;
        this.selectedTimeTableDetails = [];
        var boardId = this.sectionNamesList.find(function (x) { return x.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.classTimeTableValue = this.timeTableList.find(function (sl) { return sl.value === data; }).timeTableId;
        this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, boardId, data).subscribe(function (res) {
            if (res.classPeriodsView != null) {
                _this.selectedTimeTableDetails = res.classPeriodsView;
            }
            else {
                _this.deleteTimeTable(false);
            }
        });
    };
    ClassTimetablesComponent.prototype.clearSelectedTemplate = function () {
        if (this.classPeriodsDataView !== undefined) {
            this.classPeriodsDataView.classTimetableId = null;
        }
        this.classTimetableForm.controls['selectedTemplated'].setValue(null);
        this.selectedTimeTableDetails = [];
        this.classTimeTableValue = null;
    };
    ClassTimetablesComponent.prototype.deleteClassTimetable = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                _this.deleteTimeTable();
            }
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO) {
                _this.dialog.closeAll();
            }
        });
    };
    ClassTimetablesComponent.prototype.deleteTimeTable = function (showSnackBar) {
        var _this = this;
        if (showSnackBar === void 0) { showSnackBar = true; }
        this.classTimetableService.classTimetableClassPeriodsDelete(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, this.classTimetableForm.value.selectedTemplated).subscribe(function (res) {
            _this.clearSelectedTemplate();
            if (showSnackBar) {
                _this.onSectionSelect();
                _this.openSnackBar(res.messages.ResultMessage);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ClassTimetablesComponent.prototype.addClassTimetable = function () {
        this.title = 'Add Class Timetable';
        this.classPeriodsDataView = {
            classPeriodsMultiView: this.classPeriodsMultiView = []
        };
        this.selectedTimeTableDetails = [];
        this.classPeriodsDataView.classTimetableId = this.classTimetableForm.value.scheduleTemplateId;
        this.getTemplateList();
        this.addTimeTable = true;
    };
    ClassTimetablesComponent.prototype.getTemplateList = function (setTemplateId) {
        var _this = this;
        this.scheduleTempList = [];
        this.classTimetableService.classTimetableTemplatesGet().subscribe(function (res) {
            if (res.commonViewModel != null) {
                res.commonViewModel.map(function (x) {
                    _this.scheduleTempList.push({ value: x.id, label: x.name });
                });
                _this.classTimetableForm.controls['scheduleTemplateId'].reset();
                if (setTemplateId) {
                    _this.classTimetableForm.controls['scheduleTemplateId'].setValue(setTemplateId);
                }
            }
        });
    };
    ClassTimetablesComponent.prototype.clearBack = function () {
        var _this = this;
        this.addTimeTable = false;
        this.isEdit = false;
        this.title = 'Add Class Timetable';
        this.clearClassTimeTableFormValidator('classTimetableForm', 'scheduleTemplateId');
        this.clearClassTimeTableFormValidator('classTimetableForm', 'startDate');
        this.clearClassTimeTableFormValidator('classTimetableForm', 'endDate');
        this.addTemplateView = [];
        this.selectedCoursesSatffs = [];
        // if (this.classTimeTableValue) {
        var boardId = this.sectionNamesList.find(function (sl) { return sl.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.getTemplateDetails(boardId);
        // }
    };
    ClassTimetablesComponent.prototype.clearClassTimeTableFormValidator = function (form, control, clearValidator) {
        if (clearValidator === void 0) { clearValidator = true; }
        if (clearValidator) {
            this[form].controls[control].clearValidators();
        }
        this[form].controls[control].reset();
        this[form].updateValueAndValidity();
    };
    ClassTimetablesComponent.prototype.onScheduleTemplateSelect = function () {
        var _this = this;
        this.addTemplateView = [];
        this.classTimetableService.classTimetableTemplateDetailsGet(this.classTimetableForm.value.scheduleTemplateId).subscribe(function (res) {
            if (res.periodsListViewModel != null) {
                _this.addTemplateView = res.periodsListViewModel;
                _this.updateScheduleTemp(_this.addTemplateView);
                _this.getPeriodTypeList();
            }
        });
    };
    ClassTimetablesComponent.prototype.getPeriodTypeList = function () {
        var _this = this;
        this.periodTypeList = [];
        this.classTimetableService.classTimetableClassPeriodTypesGet().subscribe(function (res) {
            if (res.classPeriodTypesDropDownView != null) {
                res.classPeriodTypesDropDownView.map(function (x) {
                    _this.periodTypeList.push({
                        value: x.id, label: x.name, is_Break: x.is_Break,
                        has_Assignments: x.has_Assignments, has_Multiple_Assignments: x.has_Multiple_Assignments
                    });
                });
                _this.getCourseList();
            }
        });
    };
    ClassTimetablesComponent.prototype.getCourseList = function () {
        var _this = this;
        this.courseList = [];
        var boardId = this.sectionNamesList.find(function (sl) { return sl.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.classTimetableService.classTimetableCoursesGet(boardId, this.classTimetableForm.value.classId).subscribe(function (res) {
            if (res.commonViewModel != null) {
                res.commonViewModel.map(function (x) {
                    _this.courseList.push({ value: x.id, label: x.name });
                });
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].SCHOOL_BOARD_HAS_COURSES, true);
            }
            _this.getStaffList();
        });
    };
    ClassTimetablesComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffList = [];
        this.classTimetableService.classTimetableStaffGet('STFT_TCH').subscribe(function (res) {
            if (res.commonViewModel != null) {
                res.commonViewModel.map(function (x) {
                    _this.staffList.push({ value: x.id, label: x.name });
                });
            }
        });
    };
    ClassTimetablesComponent.prototype.updateScheduleTemp = function (resData, isUpdate) {
        if (isUpdate === void 0) { isUpdate = false; }
        if (resData.length > 0) {
            var filterSchoolScheduleTempList = [];
            var _loop_1 = function (key) {
                var index = filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                if (index === -1) {
                    var val = [];
                    isUpdate ? val.push.apply(val, key.periodsView) : val.push(key);
                    var data = { name: key.weekDayName, value: val };
                    filterSchoolScheduleTempList.push(data);
                }
                else {
                    var i = filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                    filterSchoolScheduleTempList[i].value.push(key);
                }
            };
            for (var _i = 0, resData_1 = resData; _i < resData_1.length; _i++) {
                var key = resData_1[_i];
                _loop_1(key);
            }
            this.sortByWeekday(filterSchoolScheduleTempList);
        }
    };
    ClassTimetablesComponent.prototype.sortByWeekday = function (data) {
        var sorter = {
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 7
        };
        data.sort(function sortByDay(a, b) {
            var day1 = a.name.toLowerCase();
            var day2 = b.name.toLowerCase();
            return sorter[day1] - sorter[day2];
        });
        this.addTemplateView = data;
    };
    ClassTimetablesComponent.prototype.onPeriodTypeSelect = function (data, child, index, childIndex) {
        var hasOptions = this.periodTypeList.find(function (val) { return val.value === data.value; });
        this.assignViewModelForPost(child);
        this.classPeriodsDataView.classPeriodsMultiView = [];
        this.classPeriodsDataView.classPeriodsMultiView.push({
            courseId: null,
            staffId: null
        });
        if (this.addTemplateView[this.index] !== undefined &&
            this.addTemplateView[this.index].value[childIndex].schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId) {
            this.addTemplateView[this.index].value[childIndex].hasAssignments = false;
            this.addTemplateView[this.index].value[childIndex].courseAndStaffViewModel = [];
        }
        this.index = index;
        if (hasOptions) {
            switch (true) {
                case hasOptions.is_Break === 1:
                    this.onSavePeriod();
                    break;
                case hasOptions.has_Assignments === 1:
                    if (this.addTemplateView.length > 0) {
                        if (this.addTemplateView[this.index].value[childIndex].schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId) {
                            this.addTemplateView[this.index].value[childIndex].hasAssignments = true;
                        }
                        this.onSavePeriod(false);
                    }
                    break;
                case hasOptions.has_Multiple_Assignments === 1:
                    this.classPeriodsDataView.classPeriodsMultiView = [];
                    this.dialog.open(this.customTemplate, {
                        disableClose: true,
                        width: '500px',
                    });
                    break;
                case (hasOptions.has_Assignments === 0 && hasOptions.has_Multiple_Assignments === 0 &&
                    hasOptions.is_Break === 0):
                    this.onSavePeriod();
                    break;
                default:
                    break;
            }
        }
    };
    ClassTimetablesComponent.prototype.onSavePeriod = function (showSnackBar, isMultiSelect, isCloseAll) {
        var _this = this;
        if (showSnackBar === void 0) { showSnackBar = true; }
        if (isMultiSelect === void 0) { isMultiSelect = false; }
        if (isCloseAll === void 0) { isCloseAll = false; }
        var success = false;
        this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(function (res) {
            if (res.classTimetableId != null) {
                _this.classPeriodsDataView.classTimetableId = res.classTimetableId;
                _this.classTimeTableValue = res.timetableId;
            }
            if (showSnackBar) {
                _this.openSnackBar(res.messages.ResultMessage);
            }
            if (isMultiSelect) {
                _this.dialog.closeAll();
                _this.checkIsAnyPeriodExist();
                _this.updateTemplate();
                //  this.selectedCoursesSatffs = [];
            }
            success = true;
            _this.selectedCoursesSatffs = [];
        }, function (error) {
            var errorResult = error.error.messages.ResultMessage;
            if (errorResult === 'TIME_OVERLAP') {
                error.error.messages.ResultMessage =
                    'Operation Failed - A Timetable already exists for the selected timeframe or overlaps with an existing timetable.';
            }
            if (errorResult === 'TIME_OVERLAP' && isCloseAll) {
                _this.dialog.closeAll();
                _this.updateTemplate();
            }
            else {
                _this.errorResponse(error);
            }
            _this.disableSaveBtn = false;
        });
        return success;
    };
    ClassTimetablesComponent.prototype.checkIsAnyPeriodExist = function () {
        var _this = this;
        var boardId = this.sectionNamesList.find(function (x) { return x.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, boardId, this.classPeriodsDataView.classTimetableId).subscribe(function (period) {
            if (period.classPeriodsView == null) {
                _this.classTimetableForm.controls['selectedTemplated'].patchValue(_this.classPeriodsDataView.classTimetableId);
                _this.deleteTimeTable(false);
                _this.classTimetableForm.controls['selectedTemplated'].reset();
                _this.classPeriodsDataView.classTimetableId = null;
            }
            _this.disableSaveBtn = false;
        });
    };
    ClassTimetablesComponent.prototype.assignViewModelForPost = function (data) {
        var _this = this;
        var boardId = this.sectionNamesList.find(function (sl) { return sl.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.classPeriodsDataView.classId = this.classTimetableForm.value.classId;
        this.classPeriodsDataView.sectionId = this.classTimetableForm.value.sectionId;
        this.classPeriodsDataView.boardId = boardId;
        this.classPeriodsDataView.templateId = this.classTimetableForm.value.scheduleTemplateId;
        this.classPeriodsDataView.startDate = this.classTimetableForm.value.startDate;
        this.classPeriodsDataView.endDate = this.classTimetableForm.value.endDate;
        this.classPeriodsDataView.schoolSchedulePeriodId = data.schoolSchedulePeriodId;
        this.classPeriodsDataView.classPeriodTypeId = data.periodTypeId;
    };
    ClassTimetablesComponent.prototype.onSelectCourseStaffDetails = function () {
        var _this = this;
        if (this.courseStaffMultAssgnForm.valid) {
            var tableData = [];
            var cname_1 = this.courseList.find(function (x) { return x.value === _this.courseStaffMultAssgnForm.value.courseId; });
            var sname = this.staffList.find(function (x) { return x.value === _this.courseStaffMultAssgnForm.value.staffId; });
            if (cname_1 && sname) {
                tableData.push({
                    courseId: cname_1.value, courseName: cname_1.label,
                    staffId: sname.value, staffName: sname.label
                });
            }
            if (this.selectedCoursesSatffs.length > 0 && this.selectedCoursesSatffs.filter(function (x) { return x.courseId === cname_1.value; }).length > 0) {
                return this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].DUPLICATE_COURSE_SELECTION, true);
            }
            else {
                this.selectedCoursesSatffs.push.apply(this.selectedCoursesSatffs, tableData);
            }
            this.courseStaffMultAssgnForm.patchValue({
                courseId: null,
                staffId: null
            });
            this._courseStaffMultiAssignForm.resetForm();
        }
    };
    ClassTimetablesComponent.prototype.deleteSelectedCourseStaffItem = function (index) {
        this.selectedCoursesSatffs.splice(index, 1);
    };
    ClassTimetablesComponent.prototype.clearStaff = function () {
        this.onMultiSelectCourseStaffSubmit(false, true);
        // .then(v => {
        if (this.addTemplateView.length > 0 && this.addTemplateView[this.index].value !== undefined) {
            // this.addTemplateView[this.index].value.forEach(m => {
            //   if (m.schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId && (m.courseAndStaffViewModel === undefined || !m.courseAndStaffViewModel.length)) {
            //     m.periodTypeId = 0;
            //     m.hasAssignments = false;
            //   }
            // });
            this.courseStaffMultAssgnForm.reset();
            this.dialog.closeAll();
            this.cd.detectChanges();
            this.clearDefaultButtonFoucs('edit');
        }
        // });
    };
    ClassTimetablesComponent.prototype.onMultiSelectCourseStaffSubmit = function (showSnackBar, isCloseAll) {
        var _this = this;
        if (showSnackBar === void 0) { showSnackBar = true; }
        if (isCloseAll === void 0) { isCloseAll = false; }
        this.disableSaveBtn = true;
        return new Promise(function (resolve) {
            _this.classPeriodsDataView.classPeriodsMultiView = [];
            _this.classPeriodsDataView.classPeriodsMultiView.push.apply(_this.classPeriodsDataView.classPeriodsMultiView, _this.selectedCoursesSatffs);
            _this.onSavePeriod(showSnackBar, true, isCloseAll);
            _this.clearDefaultButtonFoucs('edit');
        });
    };
    ClassTimetablesComponent.prototype.updateTemplate = function () {
        var _this = this;
        if (this.addTemplateView.length > 0 && this.addTemplateView[this.index] !== undefined) {
            this.addTemplateView[this.index].value.forEach(function (m) {
                if (m.schoolSchedulePeriodId === _this.classPeriodsDataView.schoolSchedulePeriodId) {
                    m.hasAssignments = 0;
                    m.courseAndStaffViewModel = _this.selectedCoursesSatffs;
                    if (_this.selectedCoursesSatffs.length) {
                        m.hasMultipleAssignments = 1;
                    }
                    else {
                        m.hasMultipleAssignments = 0;
                        m.periodTypeId = 0;
                    }
                }
            });
            this.cd.detectChanges();
        }
    };
    ClassTimetablesComponent.prototype.onChangeStaffCourseDetails = function (id, isCourseSelection, child) {
        if (child !== undefined && child.courseAndStaffViewModel !== undefined && child.courseAndStaffViewModel.length) {
            this.assignViewModelForPost(child);
            this.classPeriodsDataView.classPeriodsMultiView = [];
            this.classPeriodsDataView.classPeriodsMultiView.push({
                courseId: child.courseAndStaffViewModel[0].courseId,
                staffId: child.courseAndStaffViewModel[0].staffId
            });
        }
        if (isCourseSelection && this.classPeriodsDataView.classPeriodsMultiView.length) {
            this.classPeriodsDataView.classPeriodsMultiView[0].courseId = id;
            this.classPeriodsDataView.classPeriodsMultiView[0].staffId = this.classPeriodsDataView.classPeriodsMultiView[0].staffId !== null ?
                this.classPeriodsDataView.classPeriodsMultiView[0].staffId : null;
        }
        else {
            this.classPeriodsDataView.classPeriodsMultiView[0].courseId = this.classPeriodsDataView.classPeriodsMultiView[0].courseId !== null ?
                this.classPeriodsDataView.classPeriodsMultiView[0].courseId : null;
            this.classPeriodsDataView.classPeriodsMultiView[0].staffId = id;
        }
        this.onSavePeriod();
    };
    ClassTimetablesComponent.prototype.onSubmitClassTimetable = function () {
        if (this.classTimetableForm.invalid) {
            return;
        }
        if (this.classTimetableForm.valid && !this.classPeriodsDataView.classTimetableId) {
            return this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PLEASE_ASSIGN_COURSE_STAFF, true);
        }
        this.isExistPeriodInClassTimeTable(this.classPeriodsDataView.classTimetableId);
    };
    ClassTimetablesComponent.prototype.savedDataView = function (classTimeTableId) {
        this.classTimeTableValue = classTimeTableId;
        this.classPeriodsDataView.classTimetableId = classTimeTableId;
        this.clearBack();
    };
    ClassTimetablesComponent.prototype.editMultiAssignments = function (data, index) {
        this.clearDefaultButtonFoucs('close');
        this.index = index;
        if (data) {
            this.assignViewModelForPost(data);
            this.selectedCoursesSatffs = data.courseAndStaffViewModel.map(function (_a) {
                var courseId = _a.courseId, staffId = _a.staffId, courseName = _a.courseName, staffName = _a.staffName;
                return ({ courseId: courseId, staffId: staffId, courseName: courseName, staffName: staffName });
            });
            this.cd.detectChanges();
            this.dialog.open(this.customTemplate, {
                disableClose: true,
                width: '500px',
            });
            this.courseStaffMultAssgnForm.reset();
        }
    };
    ClassTimetablesComponent.prototype.updateClassTimetable = function () {
        var _this = this;
        this.classPeriodsDataView = {
            classPeriodsMultiView: this.classPeriodsMultiView = []
        };
        this.selectedTimeTableDetails = [];
        this.title = 'Edit Class Timetable';
        this.isEdit = true;
        var timeTable = this.timeTableList.find(function (ti) { return ti.value === _this.classTimetableForm.value.selectedTemplated; });
        this.addTimeTable = false;
        this.classTimetableService.classTimetableClassTimetableByIdGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, this.classTimetableForm.value.selectedTemplated, timeTable.aSd, timeTable.aEd).subscribe(function (res) {
            if (res.classPeriodsView != null) {
                _this.getPeriodTypeList();
                _this.getTemplateList(timeTable.scheduleTemplateId);
                _this.classPeriodsDataView.classTimetableId = _this.classTimetableForm.value.selectedTemplated;
                _this.classTimetableForm.controls['startDate'].setValue(timeTable.aSd);
                _this.classTimetableForm.controls['endDate'].setValue(timeTable.aEd);
                _this.addTemplateView = res.classPeriodsView;
                _this.updateScheduleTemp(_this.addTemplateView, true);
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage);
                return false;
            }
        });
    };
    ClassTimetablesComponent.prototype.clearMultiSelectStaff = function () {
        this.selectedCoursesSatffs = [];
    };
    ClassTimetablesComponent.prototype.clearDefaultButtonFoucs = function (buttonId) {
        var _this = this;
        setTimeout(function () {
            _this._focusMonitor.stopMonitoring(document.getElementById(buttonId));
        });
    };
    ClassTimetablesComponent.prototype.isExistPeriodInClassTimeTable = function (classTimeTableId) {
        var _this = this;
        var boardId = this.sectionNamesList.find(function (x) { return x.value === _this.classTimetableForm.value.sectionId; }).boardId;
        this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId, boardId, classTimeTableId).subscribe(function (period) {
            if (period.classPeriodsView != null) {
                if (_this.classTimetableForm.valid) {
                    _this.classTimetableUpdateView = {};
                    _this.classTimetableUpdateView.id = _this.classPeriodsDataView.classTimetableId;
                    _this.classTimetableUpdateView.startDate = _this.classTimetableForm.value.startDate;
                    _this.classTimetableUpdateView.endDate = _this.classTimetableForm.value.endDate;
                    if (_this.classTimetableUpdateView.id != null) {
                        _this.classTimetableService.classTimetableClassTimetableUpdatePut(_this.classTimetableUpdateView).subscribe(function (res) {
                            _this.openSnackBar(res.messages.ResultMessage);
                            _this.savedDataView(res.timetableId);
                        }, function (error) {
                            _this.errorResponse(error);
                        });
                    }
                }
            }
            else {
                _this.classTimetableForm.controls['selectedTemplated'].patchValue(_this.classPeriodsDataView.classTimetableId);
                _this.deleteTimeTable(false);
                _this.classTimetableForm.controls['selectedTemplated'].reset();
                _this.classPeriodsDataView.classTimetableId = null;
                return _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].PLEASE_ASSIGN_COURSE_STAFF, true);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ClassTimetablesComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CourseStaffMultiAssignForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassTimetablesComponent.prototype, "_courseStaffMultiAssignForm", void 0);
    ClassTimetablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-timetables',
            template: __webpack_require__(/*! ./class-timetables.component.html */ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.html"),
            providers: [app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_2__["ClassTimetableService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__["GradeSetupService"]],
            styles: [__webpack_require__(/*! ./class-timetables.component.scss */ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_2__["ClassTimetableService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_3__["GradeSetupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"]])
    ], ClassTimetablesComponent);
    return ClassTimetablesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/holidays/holidays.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (selectedRows)=\"selectAllData($event)\"\n(getTableData)='holidayTableData($event)' (rowBasedAction)='rowActions($event)'\n [closeRowForm]='closeAddPanel' (openAddForm)=\"addForm()\" [templateRef]=\"addTemplateRef\" \n (deleteAllRows)='deleteAll()' \n (rowSelect)='onTableRowSelect($event)' (rowUnselect)='onTableRowUnSelect($event)'>\n</app-table>\n\n\n\n<ng-template #addTemplateRef>\n  <form [formGroup]=\"holidaysGrpForm\" (ngSubmit)=\"saveHolidayConfiguration(holidaysGrpForm)\" #holidayConfigurationsForm=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n\n      <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"36\" fxLayout=\"column\">\n        <mat-label #fromDate translate>From Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('fromDate',holidaysGrpForm)\" [matDatepicker]=\"picker\" formControlName=\"fromDate\" required [min]=\"startDate\" [max]=\"endDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"fromDate.innerText\" [validationControl]=\"holidaysGrpForm.controls.fromDate\"\n            [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n        <mat-label #toDate translate>To Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('toDate',holidaysGrpForm)\" [min]=\"holidaysGrpForm.controls.fromDate.value\" [options]=\"myToDatePickerOptions\"\n          [matDatepicker]=\"picker1\" formControlName=\"toDate\" required [max]=\"endDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 [startAt]=\"holidaysGrpForm.value.fromDate\"></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"toDate.innerText\" [validationControl]=\"holidaysGrpForm.controls.toDate\"\n            [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n        <mat-label #holidayReason translate>description</mat-label>\n        <input (keyup)=\"preventSpace($event,'holidaysGrpForm','holidayReason')\" (blur)=\"trimTextBoxSpaces('holidaysGrpForm','holidayReason')\" matInput autocomplete=\"off\" formControlName=\"holidayReason\" required>\n        <mat-error>\n          <app-validation [labelName]=\"holidayReason.innerText\" [validationControl]=\"holidaysGrpForm.controls.holidayReason\"\n            [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-12\">\n      <div fxFlex=\"100\" fxLayout=\"column\" class=\"mr-sm-20 radio-btn\" fxFlex.gt-sm=\"15\">   \n          <mat-label #isStaffHoliday translate class=\"\n           pb-8\">isstaffholiday?</mat-label>\n        <mat-radio-group class=\"grey-500-fg text-semibold\" aria-label=\"Select an option\" fxFlexFill fxLayout=\"row\" fxFlex=\"100\" formControlName=\"isStaffHoliday\">\n          <mat-radio-button *ngFor=\"let radio of YesOrNo\" [value]=\"radio.value\" (change)=\"onStaffChange(radio.value)\">{{radio.label |\n            translate}}</mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <div fxLayout=\"column\" class=\"mr-sm-20 radio-btn\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n        <label class=\"pb-8\" #IsPostCalender translate>Do you Want to post this Holiday Information To Student Calendar ?</label>\n        <mat-radio-group fxLayout=\"row\" fxFlex=\"100\" required formControlName=\"isPostToCalender\">\n          <mat-radio-button *ngFor=\"let radio of YesOrNo\" [value]=\"radio.value\">{{radio.label |\n            translate}}</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <mat-form-field appearance=\"outline\" class=\"mr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill fxFlex.gt-sm=\"25\">\n        <mat-label #classId translate>Class</mat-label>\n        <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\" [disabled]=\"holidaysGrpForm.value.isStaffHoliday == 1\">\n          <mat-option *ngIf=\"classNames?.length\"></mat-option>\n          <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n            {{class.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill fxFlex.gt-sm=\"30\" *ngIf=\"holidaysGrpForm.controls.classId.value\">\n        <mat-label #sectionId translate>Section</mat-label>\n        <mat-select formControlName=\"sectionId\" [disabled]=\"holidaysGrpForm.value.isStaffHoliday == 1\">\n          <mat-option *ngIf=\"sectionNames?.length\"></mat-option>\n          <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section.value\">\n            {{section.label}}\n            <span *ngIf=\"section.boardName!=null\">({{section.boardName}})</span>\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"onCancelClick()\">{{'Cancel' | translate}}</button>\n      <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">\n        {{(isUpdateData ? 'Update':'Submit') | translate}}</button>\n    </div>\n\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/holidays/holidays.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-btn .mat-radio-group .mat-radio-button:not(:first-child) {\n  padding-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvaG9saWRheXMvaG9saWRheXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvaG9saWRheXMvaG9saWRheXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tYnRue1xuICAgIC5tYXQtcmFkaW8tZ3JvdXB7XG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/holidays/holidays.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HolidaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidaysComponent", function() { return HolidaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/class-schedules/holiday-configuration.service */ "./src/app/service/class-schedules/holiday-configuration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _models_yes_no_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../models/yes-no-view */ "./src/app/models/yes-no-view.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/staff/calender.service */ "./src/app/service/staff/calender.service.ts");
















var HolidaysComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HolidaysComponent, _super);
    function HolidaysComponent(formBuilder, commonService, dialog, _classSectionService, _holidayConfigurationService, http, snackBar, classTimetableService, calenderService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this._classSectionService = _classSectionService;
        _this._holidayConfigurationService = _holidayConfigurationService;
        _this.http = http;
        _this.snackBar = snackBar;
        _this.classTimetableService = classTimetableService;
        _this.calenderService = calenderService;
        _this.custRowsPerPageOptions = [];
        //  var for store clicked row details 
        _this.failedRecords = [];
        // filteredRecords: any;
        _this.filterClasses = [];
        _this.filterSections = [];
        _this.classNames = [];
        _this.sectionNames = [];
        _this.holidayConfigFormSubmitted = false;
        _this.isDeleteAllRequired = false;
        _this.closeAddPanel = false;
        _this.isUpdateData = false;
        _this.buttonDisable = false;
        _this.doValidate = true;
        _this.holidayIds = [];
        _this.currentComponentName = 'HolidaysComponent';
        _this.YesOrNo = _models_yes_no_view__WEBPACK_IMPORTED_MODULE_13__["YesNo"].values;
        _this.disbleSubmitBtn = false;
        _this.holidaySearchView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
        };
        var schoolAcademicSession = localStorage.getItem('_as') ? JSON.parse(localStorage.getItem('_as')) : null;
        if (schoolAcademicSession) {
            _this.academicSessionMinDate = schoolAcademicSession.startDate;
            _this.academicSessionMaxDate = new Date(schoolAcademicSession.endDate);
            _this.academicSessionMaxDate.setMonth(_this.academicSessionMaxDate.getMonth() + 3);
        }
        return _this;
    }
    HolidaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'holidayReason', header: 'Description', sort: true },
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'isStaffHoliday', header: 'Staff Holiday', sort: true },
            { field: 'fromDate', header: 'From Date', sort: true },
            { field: 'toDate', header: 'To Date', sort: true },
            { field: 'actions', header: 'Actions' },
        ];
        /* initializing form with validations */
        this.holidaysGrpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            holidayReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]),
            isStaffHoliday: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            isPostToCalender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO),
        });
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.holidaySearchView,
            tablename: 'Holidays',
            componentName: this.currentComponentName,
            isNewStudentCourseSelectionRequired: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.holidaySearchView = modelTableComponent;
        }
        if (!this.getTokenParam('_as')) {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
        }
        else {
            // / initializing table settings /
            this.holidayTableData(this.holidaySearchView);
            this.getClassesList();
        }
        this.academicPrevAndAfterDates();
    };
    // get Academic Start Date and End Date with prev and after 3 months
    HolidaysComponent.prototype.academicPrevAndAfterDates = function () {
        var _this = this;
        this.calenderService.getAllSchoolCalender().subscribe(function (res) {
            _this.startDate = res.academicDatesView.startDate;
            _this.endDate = res.academicDatesView.endDate;
        });
    };
    HolidaysComponent.prototype.response = function (data) {
        var _this = this;
        this.rows = [];
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["OK"] && data.searchHolidayView) {
            data.searchHolidayView.list.forEach(function (e) {
                e.fromDate = (e.fromDate == null) ? null : _this.commonService.customDateFormat(e.fromDate, _this.getSchoolDateFormat()).date;
                e.toDate = (e.toDate == null) ? null : _this.commonService.customDateFormat(e.toDate, _this.getSchoolDateFormat()).date;
            });
            this.rows = data.searchHolidayView.list;
            this.totalItems = data.searchHolidayView.totalItems;
        }
        var holidayoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE,
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = holidayoperations;
            e.isStaffHoliday = (e.isStaffHoliday === 1) ?
                app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES : app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO;
        });
        if (data.searchHolidayView) {
            this.holidaySearchView.pageNumber = data.searchHolidayView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.holidaySearchView,
            rows: this.rows,
            tablename: 'Holidays',
            componentName: this.currentComponentName,
            isNewStudentCourseSelectionRequired: true,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Holidays'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].BUTTON_NAME
                }
            }
        };
    };
    // holidays list data
    HolidaysComponent.prototype.holidayTableData = function (data) {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.holidaySearchView = modelTableComponent;
        }
        this.holidayIds = [];
        this._holidayConfigurationService.searchHolidays(data.classId, data.sectionId, data.fromDate, data.fromDateBegin, data.fromDateEnd, data.toDate, data.toDateBegin, data.toDateEnd, data.holidayReason, data.isStaffHoliday, data.sortOrder, data.sortBy, this.failedRecords, data.pageNumber, data.pageSize).subscribe(function (x) { return _this.response(x); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Get Classes to filter table data
    HolidaysComponent.prototype.getClassesList = function () {
        var _this = this;
        this.filterClasses = [];
        this._classSectionService.schoolAcademicClasses().subscribe(function (response) {
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
        }, function (error) {
            _this.errorResponse(error);
        });
        this.getSectionsList();
    };
    // Get Sections to filter table data
    HolidaysComponent.prototype.getSectionsList = function () {
        var _this = this;
        this.filterSections = [];
        this._classSectionService.schoolAcademicClassSections().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.filterSections.push({
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
    // End
    // on selection of class
    HolidaysComponent.prototype.onSelectClass = function (data) {
        this.sectionNames = [];
        this.holidaysGrpForm.controls['sectionId'].patchValue(null);
        if (data.value) {
            this.loadSections(data.value);
        }
    };
    // End
    HolidaysComponent.prototype.loadSections = function (data) {
        var _this = this;
        this.sectionNames = [];
        // this._classSectionService.schoolAcademicClassSections(null, data).subscribe(response => {
        //   if (response.listViews.length) {
        //     response.listViews.forEach(element => {
        //       this.sectionNames.push({
        //         label: element.name,
        //         value: element.id
        //       });
        //     });
        //   }
        this.classTimetableService.classTimetableSectionsGet(data).subscribe(function (res) {
            if (res.classTimetableSectionsView != null) {
                res.classTimetableSectionsView.map(function (x) {
                    _this.sectionNames.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // onCancelClick
    HolidaysComponent.prototype.onCancelClick = function () {
        this.holidaysGrpForm.reset();
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.buttonDisable = false;
        this.holidayConfigFormSubmitted = false;
        this.holidayConfigurationsForm.resetForm();
        this.sectionNames = [];
    };
    // End
    // submit the data of holidays configuration
    HolidaysComponent.prototype.saveHolidayConfiguration = function (holidaysGrpForm) {
        var _this = this;
        this.holidayConfigFormSubmitted = true;
        if (holidaysGrpForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (this.isUpdateData === true) {
                this.holidayViewModel = holidaysGrpForm.value;
                this.holidayViewModel.id = this.holidayDetails.id;
                this._holidayConfigurationService.updateHoliday(this.holidayViewModel).subscribe(function (res) {
                    return _this.updateResponse(res);
                }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                holidaysGrpForm.value.isStaffHoliday = holidaysGrpForm.value.isStaffHoliday == null ? 0 : holidaysGrpForm.value.isStaffHoliday;
                this.holidaysView = holidaysGrpForm.value;
                this._holidayConfigurationService.createHolidays(this.holidaysView).subscribe(function (res) { return _this.addResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // End
    // response of holidays configuration after update data
    HolidaysComponent.prototype.updateResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                this.holidayTableData(this.holidaySearchView);
                this.holidaysGrpForm.reset();
                this.holidayConfigurationsForm.resetForm();
                this.isUpdateData = false;
                this.buttonDisable = false;
            }
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // response after add data of holidays 
    HolidaysComponent.prototype.addResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["CONFLICT"]) {
            this.closeAddPanel = true;
            this.holidayTableData(this.holidaySearchView);
            this.holidaysGrpForm.reset();
            this.holidayConfigurationsForm.resetForm();
            this.isUpdateData = false;
            this.buttonDisable = false;
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // row-wise actions of the table(edit/delete)
    HolidaysComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT) {
            this.isUpdateData = true;
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.clickedRowData = response.clickedRow;
            this._holidayConfigurationService.fetchHolidayById(response.clickedRow.id)
                .subscribe(function (res) { return _this.holidayConfigurationIdValue(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                _this.holidayIds = [];
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.holidayIds.push(response.clickedRow.id);
                    _this._holidayConfigurationService.deleteHolidays(_this.holidayIds).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    // End
    // response after delete operation
    HolidaysComponent.prototype.deleteResponse = function (deleteResponse) {
        this.holidayTableData(this.holidaySearchView);
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    // End
    // to set holidays data to form after edit click
    HolidaysComponent.prototype.holidayConfigurationIdValue = function (holidayData) {
        if (holidayData.holidayDetailsView != null) {
            this.holidaysGrpForm.patchValue(holidayData.holidayDetailsView);
            if (holidayData.holidayDetailsView.classId !== null && holidayData.holidayDetailsView.classId !== undefined) {
                this.loadSections(holidayData.holidayDetailsView.classId);
            }
            this.holidaysGrpForm.controls['sectionId'].setValue(holidayData.holidayDetailsView.sectionId);
            var isStaffHoliday = (this.clickedRowData.isStaffHoliday === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) ?
                1 : 0;
            this.holidaysGrpForm.controls['isStaffHoliday'].setValue(isStaffHoliday);
            this.holidayDetails = holidayData.holidayDetailsView;
        }
        else {
            this.openSnackBar(holidayData.messages.ResultMessage);
        }
    };
    // End
    // to open the add form(reset things)
    HolidaysComponent.prototype.addForm = function () {
        this.closeAddPanel = false;
        this.holidaysGrpForm.reset();
        this.holidayConfigurationsForm.resetForm();
        this.holidaysGrpForm.controls.isStaffHoliday.setValue(1);
        this.holidaysGrpForm.controls.isPostToCalender.setValue(0);
        this.isUpdateData = false;
        this.buttonDisable = true;
    };
    // End
    // Multi Delete 
    HolidaysComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                _this._holidayConfigurationService.deleteHolidays(_this.holidayIds).subscribe(function (res) { return _this.multiDeleteResponse(res); }, function (error) {
                    if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                        _this.failedRecords = (error.error.failedRecords);
                    }
                    _this.errorResponse(error);
                    _this.holidayTableData(_this.holidaySearchView);
                });
            }
        });
    };
    // End
    // select all records from table(delete)
    HolidaysComponent.prototype.selectAllData = function (holidays) {
        var _this = this;
        if (holidays.length > 0) {
            this.holidayIds = [];
            this.isDeleteAllRequired = true;
            holidays.forEach(function (element) {
                _this.holidayIds.push(element.id);
            });
        }
        else {
            this.isDeleteAllRequired = false;
        }
    };
    // End
    // response after multi delete
    HolidaysComponent.prototype.multiDeleteResponse = function (response) {
        if (response.failedRecords.length > 0) {
            this.failedRecords = response.failedRecords;
        }
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_11__["OK"]) {
            this.checkedRecords = this.rows;
            this.holidayTableData(this.holidaySearchView);
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // just adding this function for ignore build error --temp
    HolidaysComponent.prototype.onTableRowUnSelecloadHolidaysDatat = function (e) {
    };
    // End
    // select individual record from Holidays table 
    HolidaysComponent.prototype.onTableRowSelect = function (data) {
        this.holidayIds.push(data.id);
    };
    // Unselect individual record from Holidays table 
    HolidaysComponent.prototype.onTableRowUnSelect = function (value) {
        var index = this.holidayIds.findIndex(function (v) {
            return value === v.id;
        });
        this.holidayIds.splice(index, 1);
    };
    HolidaysComponent.prototype.onStaffChange = function (data) {
        if (data === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER) {
            this.holidaysGrpForm.controls.classId.setValue(null);
            this.holidaysGrpForm.controls.sectionId.setValue(null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addHolidayTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidaysComponent.prototype, "addHolidayTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('holidayConfigurationsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidaysComponent.prototype, "holidayConfigurationsForm", void 0);
    HolidaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holidays',
            template: __webpack_require__(/*! ./holidays.component.html */ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            providers: [app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__["ClassTimetableService"], app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_15__["CalenderService"]],
            styles: [__webpack_require__(/*! ./holidays.component.scss */ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_10__["ClassSectionService"],
            app_service_class_schedules_holiday_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HolidayConfigurationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_14__["ClassTimetableService"], app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_15__["CalenderService"]])
    ], HolidaysComponent);
    return HolidaysComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_12__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-40\" (window:resize)=\"onResize()\">\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-t-20 mt-8\" fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-20\">\n      <div fxLayout=\"column\" fxFlex=\"40\">\n        <div class=\"font-size-20\">\n          {{tempName}}\n        </div>\n      </div>\n\n      <div class=\"text-right gridRightBtn\" fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button mat-raised-button translate type=\"button\" color=\"primary\" class=\"text-uppercase\"\n            (click)=\"back()\">{{'Back' | translate}}</button>\n          <button mat-button (click)=\"getHelpText('School Schedule Templates')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"m-20 border school-period\">\n      <div *ngFor=\"let item of filterSchoolScheduleTempList; let ind = index\">\n        <div fxLayout=\"row inline\" class=\"border-bottom\">\n          <div fxLayout=\"column\" fxFlex=\"20\" class=\"border-right p-20 w-120 weekDay break-word custom-white accent-fg font-weight-600 text-uppercase\" translate>{{item.name}}</div>\n          <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"center start\" class=\"border-right w-132 px-12 break-word\"\n            *ngFor=\"let child of item.value;let i=index\" [ngClass]=\"item.value?.length > filterSchoolScheduleTempList[ind-1]?.value?.length ? (i > ( filterSchoolScheduleTempList[ind-1]?.value?.length-1) && ind  ? 'border-top': '') : ''\">\n            <div fxLayout=\"row\" *ngIf=\"child.periodNames == 'PERIOD'\" class=\"text-uppercase break-word\"\n            translate>{{child.periodNames}}<span></span>&nbsp;{{i+1}}</div>\n            <div fxLayout=\"row\" class=\"break-word\" translate>{{child.periodName}}</div>\n            <div fxLayout=\"row\" class=\"grey-500-fg break-word\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n              {{child.endTime | slice:0:5}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".school-period {\n  overflow-y: auto;\n  overflow: overlay; }\n  .school-period .weekDay {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0px;\n    z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvc2Nob29sLXNjaGVkdWxlLXRlbXBsYXRlLWRldGFpbHMvc2Nob29sLXNjaGVkdWxlLXRlbXBsYXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUFIckI7SUFRUSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vY2xhc3Mtc2NoZWR1bGVzL3NjaG9vbC1zY2hlZHVsZS10ZW1wbGF0ZS1kZXRhaWxzL3NjaG9vbC1zY2hlZHVsZS10ZW1wbGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaG9vbC1wZXJpb2Qge1xuICAgLy8gbWF4LXdpZHRoOiA3ODhweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIC8vIC5tdy0xMDAtcCB7XG4gICAgLy8gICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAvLyAgfVxuICAgIC53ZWVrRGF5IHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: SchoolScheduleTemplateDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolScheduleTemplateDetailsComponent", function() { return SchoolScheduleTemplateDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/class-schedules/school-schedule-template.service */ "./src/app/service/class-schedules/school-schedule-template.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");







var SchoolScheduleTemplateDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolScheduleTemplateDetailsComponent, _super);
    function SchoolScheduleTemplateDetailsComponent(routes, schoolScheduleTemplateService, commonService, location) {
        var _this = _super.call(this) || this;
        _this.routes = routes;
        _this.schoolScheduleTemplateService = schoolScheduleTemplateService;
        _this.commonService = commonService;
        _this.location = location;
        _this.schoolScheduleTempList = [];
        _this.filterSchoolScheduleTempList = [];
        _this.subscription = _this.commonService.getMenuWidth().subscribe(function (res) {
            // if(res){
            // this.innerWidth = window.innerWidth - 420 + res;
            // this.getdeviceSize(res);
            // }
        });
        return _this;
    }
    SchoolScheduleTemplateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params
            .subscribe(function (params) {
            _this.templateId = params['id'];
            _this.getTemplateDetails();
        });
        this.schoolScheduleTempList = [];
        // this.getdeviceSize();
    };
    SchoolScheduleTemplateDetailsComponent.prototype.onResize = function () {
        // this.getdeviceSize();
    };
    // getdeviceSize(width?: any): void {
    //   if (width !== undefined) {
    //     this.innerWidth = window.innerWidth - 420 + width;
    //   }
    //   else {
    //     this.innerWidth = window.innerWidth - 420;
    //   }
    // }
    SchoolScheduleTemplateDetailsComponent.prototype.getTemplateDetails = function () {
        var _this = this;
        this.schoolScheduleTemplateService.schoolScheduleTemplateTemplateDetailsGet(this.templateId).subscribe(function (res) {
            _this.schoolScheduleTempList = res.templateDetailsView.periodsListViewModel;
            _this.tempName = res.templateDetailsView.templateName;
            _this.updateScheduleTemp();
        });
    };
    SchoolScheduleTemplateDetailsComponent.prototype.updateScheduleTemp = function () {
        if (this.schoolScheduleTempList.length > 0) {
            this.filterSchoolScheduleTempList = [];
            this.filterSchoolScheduleTempList = [{
                    name: 'Day', value: []
                }];
            var _loop_1 = function (key) {
                var index = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                if (index === -1) {
                    var val = [];
                    val.push(key);
                    var data = { name: key.weekDayName, value: val };
                    this_1.filterSchoolScheduleTempList.push(data);
                }
                else {
                    var i = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                    this_1.filterSchoolScheduleTempList[i].value.push(key);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.schoolScheduleTempList; _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
            var max_1 = -Infinity;
            var j_1 = -1;
            this.filterSchoolScheduleTempList.forEach(function (a, i) {
                if (a.value.length > max_1) {
                    max_1 = a.value.length;
                    j_1 = i;
                }
            });
            for (var k = 0; k < max_1; k++) {
                this.filterSchoolScheduleTempList[0].value.push({
                    periodNames: 'PERIOD'
                });
            }
            this.sortByWeekday(this.filterSchoolScheduleTempList);
        }
    };
    SchoolScheduleTemplateDetailsComponent.prototype.sortByWeekday = function (data) {
        var sorter = {
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 7
        };
        data.sort(function sortByDay(a, b) {
            var day1 = a.name.toLowerCase();
            var day2 = b.name.toLowerCase();
            return sorter[day1] - sorter[day2];
        });
    };
    SchoolScheduleTemplateDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-schedule-template-details',
            template: __webpack_require__(/*! ./school-schedule-template-details.component.html */ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.html"),
            providers: [app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_4__["SchoolScheduleTemplateService"]],
            styles: [__webpack_require__(/*! ./school-schedule-template-details.component.scss */ "./src/app/modules/configuration/class-schedules/school-schedule-template-details/school-schedule-template-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_4__["SchoolScheduleTemplateService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SchoolScheduleTemplateDetailsComponent);
    return SchoolScheduleTemplateDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" id=\"school-schedule-template\" (getTableData)='getSchoolScheduleTempGridDetails($event)'\n   (rowBasedAction)=\"rowWiseActions($event)\" (openAddForm)=\"onAddFormClick()\"\n  [closeRowForm]='closeAddPanel' [templateRef]=\"addTemplateRef\">\n</app-table>\n\n<ng-template #addTemplateRef>\n  <form [formGroup]=\"schoolScheduleForm\" #schoolScheduleTempForm=\"ngForm\">\n    <div fxFlexFill fxLayoutAlign=\"start center\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-28\" id=\"tempName\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n        <mat-label #tempName translate>Template Name</mat-label>\n        <input (keyup)=\"preventSpace($event,'schoolScheduleForm','templateName')\" matInput formControlName=\"templateName\"\n          (blur)=\"trimTextBoxSpaces('schoolScheduleForm','templateName')\" required>\n        <mat-error>\n          <app-validation [labelName]='tempName.innerText'\n            [validationControl]=\"schoolScheduleForm.controls.templateName\" [doValidate]=\"schoolScheduleFormDetails\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <app-custom-dropdown *ngIf=\"weekdaysDropdown\" fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\"\n        fxFlex.gt-sm=\"50\" class=\"pl-sm-20\" [dropDownConf]=\"weekdaysDropdown\" formControlName=\"weekDayId\"\n        [errorCheck]=\"schoolScheduleForm.controls.weekDayId\" (selectedData)=\"onSelect($event)\" ngDefaultControl [disable]=\"isUpdateDayPeriods\">\n      </app-custom-dropdown>\n    </div>\n    <div fxFlexFill fxLayoutAlign=\"end center\" fxLayout=\"row\" class=\"py-12\">\n      <button class=\"mr-12 text-uppercase\" *ngIf=\"isCancel\" mat-raised-button type=\"button\"\n        (click)=\"cancel()\">{{'Cancel' | translate}}</button>\n      <button *ngIf=\"!isUpdateDayPeriods\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n        (click)=\"schedulePeriods()\" [disabled]=\"isPeriodsTemp\">{{'Set Periods' | translate}}</button>\n    </div>\n  </form>\n  <div *ngIf=\"isPeriodsTemp\">\n    <mat-divider class=\"pb-16\"></mat-divider>\n    <form [formGroup]=\"periodLists\" (ngSubmit)=\"updateSelectedSchoolScheduleTemplates()\">\n      <div formArrayName=\"periodListsView\"  *ngFor=\"let itemrow of addNewRowSchoolScheduleform.controls; let i=index\">\n        <div [formGroupName]=\"i\" fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\"\n          class=\"pt-16\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"45\">\n            <mat-label #periodname translate>Period Name</mat-label>\n            <input #myInput (keyup)=\"preventSpaceForArray($event,itemrow.controls.name);\"\n              (blur)=\"trimSpaces(itemrow,'name');\" formControlName=\"name\" matInput\n              required>\n            <mat-error>\n              <app-validation [labelName]='periodname.innerText' [validationControl]=\"itemrow.controls.name\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"45\" class=\"px-sm-20\">\n            <app-custom-timepicker  [rangeMode]=\"true\" [label]=\"'Time'\" appearance=\"outline\" formControlName=\"periodTime\"\n                                   [is24HoursFormat]=\"true\" [showLabel]=\"true\" [isRequired]=\"true\" [errorClass]=\"'pt-20'\"\n                                   [requiredValidator]=\"true\" [timeValidator] = \"true\"></app-custom-timepicker>\n          </div>\n\n         <!-- <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" class=\"px-sm-20\">\n            <app-custom-timepicker  [label]=\"'End Time'\" appearance=\"outline\" formControlName=\"endTime\"\n                                   [is24HoursFormat]=\"true\" [showLabel]=\"true\" [isRequired]=\"true\" [errorClass]=\"'pt-20'\"\n                                   [requiredValidator]=\"true\" [timeValidator] = \"true\"></app-custom-timepicker>\n          </div>-->\n\n          <button *ngIf=\"itemrow.value.isRemoveVisible\" mat-icon-button type=\"button\" class=\"mb-16 red-400-fg\"\n            (click)=\"deleteRow(i)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button *ngIf=\"itemrow.value.isAddVisible\" mat-mini-fab class=\"mb-16\" type=\"button\" (click)=\"addNewRow(itemrow)\"\n            [disabled]=\"isDisabled\">\n            <mat-icon>add</mat-icon>\n          </button>\n\n        </div>\n        <div *ngIf=\"periodErrorMessages[i] !== undefined && periodErrorMessages[i] !== ''\" class=\"red-fg\">\n          {{periodErrorMessages[i]}}\n        </div>\n      </div>\n      <!--<div *ngIf=\"isDisabled\" class=\"red-fg\">{{errorMsg}}</div>-->\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n        <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n          (click)=\"cancelPeriods()\">{{'Cancel' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n          [disabled]=\"isDisabled\">{{'Select' | translate}}</button>\n      </div>\n    </form>\n  </div>\n  <mat-divider class=\"pb-28 mt-12\" *ngIf=\"filterSchoolScheduleTempList.length >0\"></mat-divider>\n  <div class=\"border school-period\" *ngIf=\"filterSchoolScheduleTempList.length >0\">\n    <div fxLayout=\"row inline\" *ngFor=\"let item of filterSchoolScheduleTempList; let ind = index\" class=\"mw-100-p\">\n      <div fxLayout=\"column\" fxFlex=\"20\"\n        class=\"border-right border-bottom py-20 pl-12 pr-4 w-144 weekDay custom-white break-word accent-fg font-weight-600 text-uppercase\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" translate>{{item.name}}\n          <button mat-icon-button color=\"primary\" *ngIf=\"item.name!='Day'\" [matMenuTriggerFor]=\"menuEdit\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </div>\n      </div>\n      <mat-menu #menuEdit=\"matMenu\">\n        <button mat-menu-item (click)=\"editPeriods(item)\">\n          <mat-icon class=\"mr-8\">edit</mat-icon>{{'Change' | translate}}\n        </button>\n        <button mat-menu-item (click)=\"deletePeriods(item.name)\">\n          <mat-icon class=\"mr-8\">delete</mat-icon>{{'Delete' | translate}}\n        </button>\n      </mat-menu>\n      <div fxLayout=\"column\" fxFlex=\"20\" fxLayoutAlign=\"center start\"\n      [ngClass]=\"item.value?.length > filterSchoolScheduleTempList[ind-1]?.value?.length ? (i > ( filterSchoolScheduleTempList[ind-1]?.value?.length-1) && ind  ? 'border-top': '') : ''\" class=\"border-right border-bottom w-140 px-12\"\n        *ngFor=\"let child of item.value;let i=index\">\n        <div fxLayout=\"row\" *ngIf=\"child.periodNames == 'PERIOD'\" class=\"text-uppercase break-word\" translate>\n          {{child.periodNames}}<span></span>&nbsp;{{i+1}}</div>\n        <div fxLayout=\"row\" class=\"break-word\">{{child.periodName}}</div>\n        <div fxLayout=\"row\" class=\"grey-500-fg break-word\" *ngIf=\"child.startTime!= null\">{{child.startTime | slice:0:5}} to\n          {{child.endTime | slice:0:5}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"filterSchoolScheduleTempList.length >0\" fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n    <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n      (click)=\"cancel()\">{{'Cancel' | translate}}</button>\n    <button mat-raised-button type=\"submit\" [disabled]=\"isDisabled\" class=\"text-uppercase\" color=\"accent\"\n      (click)=\"onSubmitSchooolScheduleTemp()\">{{(isUpdateData ? 'Update':'Create') | translate}}</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".school-period {\n  max-width: 788px;\n  overflow-y: auto;\n  overflow: overlay; }\n  .school-period .mw-100-p {\n    min-width: 100%; }\n  .school-period .weekDay {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0px;\n    z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvc2Nob29sLXNjaGVkdWxlLXRlbXBsYXRlcy9zY2hvb2wtc2NoZWR1bGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUhyQjtJQUtRLGVBQWUsRUFBQTtFQUx2QjtJQVFRLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jbGFzcy1zY2hlZHVsZXMvc2Nob29sLXNjaGVkdWxlLXRlbXBsYXRlcy9zY2hvb2wtc2NoZWR1bGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2Nob29sLXBlcmlvZCB7XG4gICAgbWF4LXdpZHRoOiA3ODhweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIC5tdy0xMDAtcCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgfVxuICAgIC53ZWVrRGF5IHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SchoolScheduleTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolScheduleTemplatesComponent", function() { return SchoolScheduleTemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/school-schedule-template.service */ "./src/app/service/class-schedules/school-schedule-template.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













var SchoolScheduleTemplatesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolScheduleTemplatesComponent, _super);
    function SchoolScheduleTemplatesComponent(_fb, dialog, commonService, cd, router, schoolScheduleTemplateService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.cd = cd;
        _this.router = router;
        _this.schoolScheduleTemplateService = schoolScheduleTemplateService;
        _this.snackBar = snackBar;
        _this.schoolScheduleFormDetails = false;
        _this.isPeriodsTemp = false;
        _this.isUpdateData = false;
        _this.isCancel = true;
        _this.isDisabled = false;
        _this.filterWeekdays = [];
        _this.schoolScheduleTempList = [];
        _this.schoolScheduleTempSelectList = [];
        _this.filterSchoolScheduleTempList = [];
        _this.filterRowData = [];
        _this.periodErrorMessages = [];
        _this.isUpdateDayPeriods = false;
        /* Rajkumar Added Code End*/
        //  refernces for ng prime table
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'SchoolScheduleTemplatesComponent';
        _this.schedulePeriodsList = [];
        _this.searchSchoolScheduleTempView = {
            templateName: [],
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    SchoolScheduleTemplatesComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.searchSchoolScheduleTempView = modelTableComponent;
        }
        this.cols = [
            { field: 'name', header: 'Template Name', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        // initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            tablename: 'School Schedule Templates',
            componentName: this.currentComponent,
        };
        this.schoolschedulePeriodsView = {
            templateName: '',
            periodsListView: []
        };
        this.schoolschedulePeriodsUpdateView = {
            templateName: '',
            periodsListView: []
        };
        this.schoolScheduleTempList = [];
        this.schoolScheduleTemplateForm();
        this.periodsForm();
        this.weekDays();
        this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);
    };
    SchoolScheduleTemplatesComponent.prototype.onChanges = function () {
        var _this = this;
        this.periodLists.controls.periodListsView.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (val) {
            _this.schoolSchedulePeriods = [];
            val.forEach(function (period) {
                if (period.periodTime !== null && period.periodTime !== undefined) {
                    var periods = period.periodTime.split('-');
                    period.startTime = periods[0].trim();
                    period.endTime = (periods[1] !== undefined && periods[1] !== null) ? periods[1].trim() : null;
                }
                _this.schoolSchedulePeriods.push(period);
            });
            if (_this.periodLists.controls.periodListsView.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID
                && _this.schoolScheduleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
                _this.validateAllPeriods();
            }
            else {
                _this.periodErrorMessages = [];
            }
        });
    };
    SchoolScheduleTemplatesComponent.prototype.schoolScheduleTemplateForm = function () {
        this.schoolScheduleForm = this._fb.group({
            templateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            weekDayId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    SchoolScheduleTemplatesComponent.prototype.periodsForm = function () {
        this.periodLists = this._fb.group({
            periodListsView: this._fb.array([this.initItemRows()]),
        });
        this.onChanges();
    };
    SchoolScheduleTemplatesComponent.prototype.weekDays = function () {
        var _this = this;
        this.filterWeekdays = [];
        this.schoolScheduleTemplateService.schoolScheduleTemplateWeekdaysGet().subscribe(function (response) {
            if (response.commonViewModel != null) {
                if (response.commonViewModel.length) {
                    response.commonViewModel.forEach(function (element) {
                        _this.filterWeekdays.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.weekdaysDropdown = { multiSelect: true, placeholder: 'Weekdays', data: _this.filterWeekdays, noEntryFoundLabel: 'No Data Found', isRequired: true };
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolScheduleTemplatesComponent.prototype.getSchoolScheduleTempGridDetails = function (data) {
        var _this = this;
        this.searchSchoolScheduleTempView = data;
        this.schoolScheduleTemplateService.schoolScheduleTemplateAllTemplatesGet(this.searchSchoolScheduleTempView.templateName, this.searchSchoolScheduleTempView.sortBy, this.searchSchoolScheduleTempView.sortOrder, this.searchSchoolScheduleTempView.pageNumber, this.searchSchoolScheduleTempView.pageSize)
            .subscribe(function (res) { return _this.resSchoolScheTempDetails(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolScheduleTemplatesComponent.prototype.resSchoolScheTempDetails = function (data) {
        this.custRowsPerPageOptions = [];
        if (!data.commonViewModelTemplates) {
            this.rows = [];
            this.totalItems = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.commonViewModelTemplates.list;
            this.totalItems = data.commonViewModelTemplates.totalItems;
            this.pageCnt = data.commonViewModelTemplates.totalPages;
            var rowOperations_1 = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                },
            ];
            this.rows.forEach(function (e) {
                e.operations = rowOperations_1;
            });
        }
        if (data.commonViewModelTemplates) {
            this.searchSchoolScheduleTempView.pageNumber = data.commonViewModelTemplates.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.searchSchoolScheduleTempView,
            rows: this.rows,
            tablename: 'School Schedule Templates',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'School Schedule Templates'
                }
            },
        };
    };
    SchoolScheduleTemplatesComponent.prototype.onAddFormClick = function () {
        this.closeAddPanel = false;
        this.isUpdateData = false;
        this.isDisabled = false;
        this.schoolScheduleTempList = [];
        this.selectedSchoolScheduleTemplates = [];
        this.periodsForm();
    };
    SchoolScheduleTemplatesComponent.prototype.cancel = function () {
        this.schoolScheduleTempForm.resetForm();
        this.isPeriodsTemp = false;
        this.closeAddPanel = true;
        this.isCancel = true;
        this.schoolScheduleTempList = [];
        this.selectedSchoolScheduleTemplates = [];
        this.filterSchoolScheduleTempList = [];
        this.errorMsg = '';
        this.periodErrorMessages = [];
        this.periodsForm();
        this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);
        this.scrollToView();
        // this.isDisabled = true;
        if (this.periodLists.controls.periodListsView.invalid && this.schoolScheduleForm.invalid) {
            this.isDisabled = true;
        }
    };
    SchoolScheduleTemplatesComponent.prototype.cancelPeriods = function () {
        this.errorMsg = '';
        this.periodErrorMessages = [];
        this.isDisabled = false;
        this.isUpdateDayPeriods = false;
        this.schoolScheduleForm.controls['weekDayId'].patchValue('');
        if (this.schoolScheduleTempList.length === 0 && this.filterSchoolScheduleTempList.length === 0) {
            this.cancel();
        }
        else {
            this.isPeriodsTemp = false;
        }
        this.scrollToView();
    };
    Object.defineProperty(SchoolScheduleTemplatesComponent.prototype, "addNewRowSchoolScheduleform", {
        // return type for educaion details form
        get: function () {
            this.updateAddRemoveRow();
            return this.periodLists.get('periodListsView');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    SchoolScheduleTemplatesComponent.prototype.addNewRow = function (itemrow) {
        if (itemrow === void 0) { itemrow = null; }
        Object.values(itemrow.controls).forEach(function (control) {
            control.markAsTouched();
            control.updateValueAndValidity();
        });
        if (this.periodLists.controls.periodListsView.valid && this.schoolScheduleForm.valid) {
            // control refers to your formarray
            var control = this.periodLists.controls['periodListsView'];
            // add new formgroup
            control.push(this.initItemRows());
            this.assignStartEndTime();
            this.updateAddRemoveRow();
            this.cd.detectChanges();
            this.myInput.last.nativeElement.focus();
        }
        // else {
        this.isDisabled = true;
        // }
    };
    SchoolScheduleTemplatesComponent.prototype.deleteRow = function (index) {
        var _this = this;
        // control refers to your formarray
        var control = this.periodLists.controls['periodListsView'];
        // remove the chosen row
        control.removeAt(index);
        var filterPeriods = [];
        this.schoolScheduleForm.value.weekDayId.forEach(function (t) {
            filterPeriods.push(_this.schoolScheduleTempList.filter(function (item) { return item.weekDayId !== t.value; }));
            _this.schoolScheduleTempList = filterPeriods[0];
            filterPeriods = [];
        });
        this.updateAddRemoveRow();
        this.periodErrorMessages = [];
        if (this.periodLists.controls.periodListsView.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID
            && this.schoolScheduleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.validateAllPeriods();
        }
        else {
            this.periodErrorMessages = [];
            this.isDisabled = true;
        }
        this.cd.detectChanges();
        this.myInput.last.nativeElement.focus();
    };
    SchoolScheduleTemplatesComponent.prototype.assignStartEndTime = function () {
        var _this = this;
        var i = this.periodLists.controls.periodListsView.value.length;
        var startTime = moment__WEBPACK_IMPORTED_MODULE_11__(this.periodLists.controls.periodListsView.value[i - 2].startTime, 'HH:mm');
        var endTime = moment__WEBPACK_IMPORTED_MODULE_11__(this.periodLists.controls.periodListsView.value[i - 2].endTime, 'HH:mm');
        // calculate total duration
        var duration = moment__WEBPACK_IMPORTED_MODULE_11__["duration"](endTime.diff(startTime));
        // duration in hours
        // tslint:disable-next-line:radix
        var hours = parseInt(duration.asHours().toString());
        // duration in minutes
        // tslint:disable-next-line:radix
        var minutes = parseInt(duration.asMinutes().toString()) % 60;
        this.periodLists.controls.periodListsView.value[i - 1].startTime = this.periodLists.controls.periodListsView.value[i - 2].endTime;
        var initialEndTime = moment__WEBPACK_IMPORTED_MODULE_11__["utc"](this.periodLists.controls.periodListsView.value[i - 2].endTime, 'HH:mm').add(hours, 'hour').format('HH:mm');
        var finalEndTime = moment__WEBPACK_IMPORTED_MODULE_11__["utc"](initialEndTime, 'HH:mm').add(minutes, 'minutes').format('HH:mm');
        this.periodLists.controls.periodListsView.value[i - 1].endTime = finalEndTime;
        this.periodLists.controls.periodListsView['controls'].forEach(function (periodLst, indexOfLst) {
            _this.periodLists.controls.periodListsView.value.forEach(function (resPeriodLst, j) {
                if (indexOfLst === j) {
                    if (resPeriodLst.schoolSchedulePeriodId !== undefined) {
                        periodLst.controls['schoolSchedulePeriodId'].setValue(resPeriodLst.schoolSchedulePeriodId);
                    }
                    periodLst.controls['startTime'].setValue(resPeriodLst.startTime);
                    periodLst.controls['endTime'].setValue(resPeriodLst.endTime === '00:00' ? '23:59' : resPeriodLst.endTime);
                    periodLst.controls['periodTime'].setValue(resPeriodLst.startTime + '-' + (resPeriodLst.endTime === '00:00' ? '23:59' : resPeriodLst.endTime));
                }
            });
        });
    };
    SchoolScheduleTemplatesComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.schoolScheduleTemplateService.schoolScheduleTemplateDeleteTemplateDelete(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"].SCHOOL_SCHEDULE_TEMPLATE_DETAILS + event.clickedRow.id]);
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.schoolschedulePeriodsUpdateView.id = event.clickedRow.id;
            this.schoolScheduleTemplateService.schoolScheduleTemplateTemplateDetailsGet(event.clickedRow.id).subscribe(function (res) { return _this.getById(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    SchoolScheduleTemplatesComponent.prototype.getById = function (data) {
        if (data.statusCode === this.httpStatus.OK) {
            data.templateDetailsView.periodsListViewModel.forEach(function (t) {
                t.startTime = t.startTime.slice(0, 5);
                t.endTime = t.endTime.slice(0, 5);
            });
            this.isUpdateData = true;
            this.selectedSchoolScheduleTemplates = data.templateDetailsView.periodsListViewModel;
            this.originalScheduleTemplate = data.templateDetailsView.periodsListViewModel;
            this.schoolScheduleForm.controls['templateName'].setValue(data.templateDetailsView.templateName);
            this.isPeriodsTemp = false;
            this.isCancel = false;
            this.isDisabled = false;
            this.updateScheduleTemp();
        }
        else {
            this.openSnackBar(data.messages.ResultMessage, true);
        }
    };
    // delete return response after click
    SchoolScheduleTemplatesComponent.prototype.deleteResponse = function (response) {
        this.getSchoolScheduleTempGridDetails(this.searchSchoolScheduleTempView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    SchoolScheduleTemplatesComponent.prototype.updateAddRemoveRow = function () {
        var i = this.periodLists.controls.periodListsView.value.length;
        if (this.periodLists.controls.periodListsView.value.length > 1) {
            this.periodLists.controls.periodListsView.value.forEach(function (e) {
                e.isAddVisible = false;
                e.isRemoveVisible = true;
            });
            this.periodLists.controls.periodListsView.value[i - 1].isAddVisible = true;
            this.periodLists.controls.periodListsView.value[i - 1].isRemoveVisible = true;
        }
        else if (this.periodLists.controls.periodListsView.value.length === 1) {
            this.periodLists.controls.periodListsView.value[i - 1].isAddVisible = true;
            this.periodLists.controls.periodListsView.value[i - 1].isRemoveVisible = false;
        }
    };
    // list all your form controls here, which belongs to your form array
    SchoolScheduleTemplatesComponent.prototype.initItemRows = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            periodTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            isAddVisible: Boolean(true),
            isRemoveVisible: Boolean(false),
            weekDayId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            weekDayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            schoolSchedulePeriodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    SchoolScheduleTemplatesComponent.prototype.schedulePeriods = function () {
        this.intializeForm();
    };
    SchoolScheduleTemplatesComponent.prototype.intializeForm = function () {
        this.periodsForm();
        this.validWeeKday();
        this.isDisabled = true;
        this.errorMsg = '';
        this.periodErrorMessages = [];
        if (this.schoolScheduleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.isCancel = false;
            this.isPeriodsTemp = true;
        }
        else {
            this.schoolScheduleFormDetails = true;
        }
        this.cd.detectChanges();
    };
    SchoolScheduleTemplatesComponent.prototype.validateAllPeriods = function () {
        this.periodErrorMessages = [];
        for (var i = 0; i < this.schoolSchedulePeriods.length; i++) {
            this.validatePeriod(i);
        }
        if (this.schoolSchedulePeriods.length >= 1 && !this.isDisabled) {
            this.validatePeriodIntervals();
            this.validateExistingSchedule();
        }
        var currentErrors = this.periodErrorMessages.filter(function (x) { return x !== ''; });
        if (currentErrors && currentErrors.length) {
            this.isDisabled = true;
        }
    };
    SchoolScheduleTemplatesComponent.prototype.validatePeriod = function (periodIndex) {
        var currentPeriod = this.schoolSchedulePeriods[periodIndex];
        switch (true) {
            case currentPeriod.name !== null && currentPeriod.name.length > 15:
                this.errorMsg = 'Period Name should not exeed 15 Characters';
                this.isDisabled = true;
                this.periodErrorMessages[periodIndex] = this.errorMsg;
                break;
            case (this.schoolSchedulePeriods.filter(function (x) { return x.name !== null && currentPeriod.name !== null
                && x.name.toLowerCase().trim() === currentPeriod.name.toLowerCase().trim(); }).length > 1):
                this.errorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_DUPLICATE_PERIODS;
                this.isDisabled = true;
                this.periodErrorMessages[periodIndex] = this.errorMsg;
                break;
            case (currentPeriod.startTime !== null && currentPeriod.endTime === null)
                || (currentPeriod.startTime === null && currentPeriod.endTime !== null):
                this.errorMsg = 'Invalid Time Range for Period ' + currentPeriod.name;
                this.isDisabled = true;
                this.periodErrorMessages[periodIndex] = this.errorMsg;
                break;
            case currentPeriod.startTime !== null && currentPeriod.endTime !== null:
                var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
                var periodStartTime = new Date();
                var splitStartTime = currentPeriod.startTime.split(':');
                if (!(splitStartTime[0] === '' || splitStartTime[1] === '')) {
                    periodStartTime.setHours((parseInt(splitStartTime[0], 10)));
                    periodStartTime.setMinutes(parseInt(splitStartTime[1], 10));
                }
                var periodEndTime = new Date();
                var splitEndTime = currentPeriod.endTime.split(':');
                if (!(splitEndTime[0] === '' || splitEndTime[1] === '')) {
                    periodEndTime.setHours((parseInt(splitEndTime[0], 10)));
                    periodEndTime.setMinutes(parseInt(splitEndTime[1], 10));
                }
                if (datePipe.transform(periodStartTime, 'HH:mm') === datePipe.transform(periodEndTime, 'HH:mm')) {
                    this.errorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_START_END_TIME;
                    this.isDisabled = true;
                    this.periodErrorMessages[periodIndex] = this.errorMsg;
                }
                else if (periodEndTime < periodStartTime) {
                    this.errorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_END_TIME_GREATER_START_TIME;
                    this.isDisabled = true;
                    this.periodErrorMessages[periodIndex] = this.errorMsg;
                }
                else {
                    this.isDisabled = false;
                }
                break;
            default:
                this.isDisabled = false;
                break;
        }
    };
    SchoolScheduleTemplatesComponent.prototype.validatePeriodIntervals = function () {
        for (var i = 0; i < this.schoolSchedulePeriods.length; i++) {
            for (var j = i + 1; j < this.schoolSchedulePeriods.length; j++) {
                if (((this.schoolSchedulePeriods[i].startTime < this.schoolSchedulePeriods[j].endTime)
                    && (this.schoolSchedulePeriods[j].startTime < this.schoolSchedulePeriods[i].endTime))
                    ||
                        (this.schoolSchedulePeriods[i].startTime <= this.schoolSchedulePeriods[j].startTime
                            && this.schoolSchedulePeriods[j].endTime <= this.schoolSchedulePeriods[i].endTime)) {
                    this.periodErrorMessages[i] = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_INVALID_PERIOD_TIMINGS;
                    this.periodErrorMessages[j] = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_INVALID_PERIOD_TIMINGS;
                    this.isDisabled = true;
                }
            }
        }
    };
    SchoolScheduleTemplatesComponent.prototype.validateExistingSchedule = function () {
        var _this = this;
        if (this.selectedSchoolScheduleTemplates === undefined || this.isUpdateDayPeriods) {
            return;
        }
        this.schoolScheduleForm.value.weekDayId.forEach(function (weekday) {
            _this.schoolSchedulePeriods.forEach(function (schoolSchedulePeriod, index) {
                var existingPeriods = _this.selectedSchoolScheduleTemplates.filter(function (x) { return weekday.value === x.weekDayId; }) || [];
                if (existingPeriods.length > 0) {
                    existingPeriods.forEach(function (existingPeriod) {
                        if (existingPeriod.schoolSchedulePeriodId !== schoolSchedulePeriod.schoolSchedulePeriodId
                            && existingPeriod.periodName.toLowerCase() !== schoolSchedulePeriod.name.toLowerCase()
                            && ((existingPeriod.startTime < schoolSchedulePeriod.endTime
                                && schoolSchedulePeriod.startTime < existingPeriod.endTime)
                                ||
                                    (existingPeriod.startTime <= schoolSchedulePeriod.startTime
                                        && schoolSchedulePeriod.endTime <= existingPeriod.endTime))) {
                            _this.periodErrorMessages[index] = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_INVALID_PERIOD_TIMINGS;
                            _this.isDisabled = true;
                        }
                    });
                }
            });
        });
    };
    SchoolScheduleTemplatesComponent.prototype.updateSelectedSchoolScheduleTemplates = function () {
        var _this = this;
        this.errorMsg = '';
        this.periodErrorMessages = [];
        if (this.periodLists.controls.periodListsView.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID
            && this.schoolScheduleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            if (this.selectedSchoolScheduleTemplates === undefined) {
                this.selectedSchoolScheduleTemplates = [];
            }
            this.schoolScheduleForm.value.weekDayId.forEach(function (weekDay) {
                if (_this.isUpdateDayPeriods) {
                    _this.selectedSchoolScheduleTemplates = _this.selectedSchoolScheduleTemplates.filter(function (x) { return x.weekDayId !== weekDay.value; });
                }
                _this.schoolSchedulePeriods.forEach(function (schoolSchedulePeriod) {
                    var existingPeriodIndex = _this.selectedSchoolScheduleTemplates.findIndex(function (elt) {
                        return elt.weekDayId === weekDay.value && elt.periodName.toLowerCase() === schoolSchedulePeriod.name.toLowerCase();
                    });
                    if (existingPeriodIndex !== -1) {
                        var existingPeriodData = _this.selectedSchoolScheduleTemplates[existingPeriodIndex];
                        var currentPeriodInfo = {
                            weekDayId: weekDay.value,
                            weekDayName: weekDay.label,
                            periodName: schoolSchedulePeriod.name,
                            startTime: schoolSchedulePeriod.startTime,
                            endTime: schoolSchedulePeriod.endTime,
                            schoolSchedulePeriodId: (existingPeriodData.schoolSchedulePeriodId === null || existingPeriodData.schoolSchedulePeriodId === undefined)
                                ? 0 : existingPeriodData.schoolSchedulePeriodId
                        };
                        _this.selectedSchoolScheduleTemplates[existingPeriodIndex] = currentPeriodInfo;
                    }
                    else {
                        _this.selectedSchoolScheduleTemplates.push({
                            weekDayId: weekDay.value,
                            weekDayName: weekDay.label,
                            periodName: schoolSchedulePeriod.name,
                            startTime: schoolSchedulePeriod.startTime,
                            endTime: schoolSchedulePeriod.endTime,
                            schoolSchedulePeriodId: (schoolSchedulePeriod.schoolSchedulePeriodId === null || schoolSchedulePeriod.schoolSchedulePeriodId === undefined)
                                ? 0 : schoolSchedulePeriod.schoolSchedulePeriodId
                        });
                    }
                });
            });
            this.updateScheduleTemp();
            this.schoolScheduleForm.controls['weekDayId'].reset();
            this.isUpdateDayPeriods = false;
            this.scrollToView();
        }
    };
    SchoolScheduleTemplatesComponent.prototype.validWeeKday = function () {
        this.schoolScheduleForm.controls['weekDayId'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.schoolScheduleForm.controls['weekDayId'].updateValueAndValidity();
        this.weekdaysDropdown = { multiSelect: true, placeholder: 'Weekdays', data: this.filterWeekdays, noEntryFoundLabel: 'No Data Found', isRequired: true };
    };
    SchoolScheduleTemplatesComponent.prototype.updateScheduleTemp = function () {
        this.schedulePeriodsList = [];
        Object.assign(this.schedulePeriodsList, this.selectedSchoolScheduleTemplates);
        if (this.schedulePeriodsList.length > 0) {
            this.filterSchoolScheduleTempList = [{
                    name: 'Day', value: []
                }];
            var _loop_1 = function (key) {
                var index = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                if (index === -1) {
                    var val = [];
                    val.push(key);
                    var data = { name: key.weekDayName, value: val };
                    this_1.filterSchoolScheduleTempList.push(data);
                }
                else {
                    var i = this_1.filterSchoolScheduleTempList.findIndex(function (ele) { return ele.name === key.weekDayName; });
                    this_1.filterSchoolScheduleTempList[i].value.push(key);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.schedulePeriodsList; _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
            var max_1 = -Infinity;
            var j_1 = -1;
            this.filterSchoolScheduleTempList.forEach(function (schedules, i) {
                if (schedules.value.length > max_1) {
                    max_1 = schedules.value.length;
                    j_1 = i;
                }
            });
            for (var k = 0; k < max_1; k++) {
                this.filterSchoolScheduleTempList[0].value.push({
                    periodNames: 'PERIOD',
                    startTime: '00:00',
                    endTime: '00:00'
                });
            }
            this.sortByTime(this.filterSchoolScheduleTempList);
            this.sortByWeekday(this.filterSchoolScheduleTempList);
        }
        else {
            this.schedulePeriodsList = [];
            this.selectedSchoolScheduleTemplates = [];
            this.schoolScheduleTempSelectList = [];
            this.filterSchoolScheduleTempList = [];
            this.periodsForm();
            this.errorMsg = '';
            this.isDisabled = false;
            this.isPeriodsTemp = true;
        }
    };
    SchoolScheduleTemplatesComponent.prototype.sortByTime = function (data) {
        if (data[0].value === undefined) {
            var check = [];
            check.push({ name: '', value: data });
            data = check;
        }
        data.forEach(function (g) { return g.value.forEach(function (element) {
            return g.value.sort(function (startTime, endTime) {
                var aParts = getNumericParts(startTime.startTime);
                var bParts = getNumericParts(endTime.endTime);
                // Sorts by hour then minute
                return aParts[0] - bParts[0] || aParts[1] - bParts[1];
            });
            function getNumericParts(time) {
                return time.split(' ')[0].split(':').map(function (x) { return +x; });
            }
        }); });
    };
    SchoolScheduleTemplatesComponent.prototype.sortByWeekday = function (data) {
        var sorter = {
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 7
        };
        data.sort(function sortByDay(weekDay1, weekDay2) {
            var day1 = (weekDay1.name !== null) ? weekDay1.name.toLowerCase() : weekDay1.name;
            var day2 = (weekDay2.name !== null) ? weekDay2.name.toLowerCase() : weekDay2.name;
            return sorter[day1] - sorter[day2];
        });
        this.filterSchoolScheduleTempList[0].value.forEach(function (x) {
            x.startTime = null;
            x.endTime = null;
        });
        this.isPeriodsTemp = false;
    };
    SchoolScheduleTemplatesComponent.prototype.editPeriods = function (data) {
        var _this = this;
        this.isUpdateDayPeriods = true;
        var editData = [];
        var selectedArray = [];
        var validators = [];
        selectedArray.push({ label: data.value[0].weekDayName, value: data.value[0].weekDayId });
        data.value.forEach(function (t) {
            editData.push({
                weekDayId: t.weekDayId,
                weekDayName: t.weekDayName,
                schoolSchedulePeriodId: t.schoolSchedulePeriodId,
                name: t.periodName,
                startTime: t.startTime,
                endTime: t.endTime,
                isAddVisible: null,
                isRemoveVisible: null,
                periodTime: t.startTime + '-' + t.endTime
            });
        });
        var i = editData.length;
        if (editData.length > 1) {
            editData.forEach(function (e) {
                e.isAddVisible = false;
                e.isRemoveVisible = true;
            });
            editData[i - 1].isAddVisible = true;
            editData[i - 1].isRemoveVisible = true;
        }
        else if (editData.length === 1) {
            editData[i - 1].isAddVisible = true;
            editData[i - 1].isRemoveVisible = false;
        }
        this.periodLists.controls['periodListsView'] = this._fb.array(editData.map(function (ind) { return _this._fb.group(ind); }));
        this.isPeriodsTemp = true;
        this.schoolScheduleForm.controls['weekDayId'].patchValue(this.compareArrayData(this.filterWeekdays, selectedArray));
        this.errorMsg = '';
        this.isDisabled = false;
        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15));
        this.periodLists.controls.periodListsView.value.forEach(function (element, j) {
            // tslint:disable-next-line: max-line-length
            _this.periodLists.get('periodListsView').controls[j].get('name').setValidators(validators);
            _this.periodLists.get('periodListsView').controls[j].get('name').updateValueAndValidity({ emitEvent: false });
        });
        this.onChanges();
        this.cd.detectChanges();
        this.scrollToView();
    };
    SchoolScheduleTemplatesComponent.prototype.scrollToView = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollIntoViewById('tempName');
        });
    };
    SchoolScheduleTemplatesComponent.prototype.deletePeriods = function (data) {
        // const removedList = this.schoolScheduleTempList.filter(elt => elt.weekDayName !== data);
        var removedList = this.selectedSchoolScheduleTemplates.filter(function (elt) { return elt.weekDayName !== data; });
        this.isUpdateDayPeriods = false;
        this.schoolScheduleForm.controls['weekDayId'].patchValue('');
        this.selectedSchoolScheduleTemplates = removedList;
        this.updateScheduleTemp();
    };
    SchoolScheduleTemplatesComponent.prototype.onSubmitSchooolScheduleTemp = function () {
        switch (true) {
            case this.schoolScheduleForm.controls.templateName.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVALID:
                this.schoolScheduleFormDetails = true;
                break;
            // case this.schoolScheduleTempList.length === 0:
            case this.selectedSchoolScheduleTemplates.length === 0:
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_SCHEDULE_TEMPLATE, true);
                break;
            default:
                this.schoolScheduleTempList = this.selectedSchoolScheduleTemplates;
                this.saveDetails();
                break;
        }
    };
    SchoolScheduleTemplatesComponent.prototype.saveDetails = function () {
        var _this = this;
        if (this.isUpdateData === true) {
            this.schoolschedulePeriodsUpdateView.periodsListView = [];
            this.schoolschedulePeriodsUpdateView.templateName = this.schoolScheduleForm.value.templateName;
            this.filterSchoolScheduleTempList.forEach(function (weekDay) {
                if (weekDay.name !== 'Day') {
                    weekDay.value.forEach(function (scheduleList) {
                        var schoolSchedulePeriodId = 0;
                        if (!scheduleList.schoolSchedulePeriodId) {
                            var findExistingPeriodIndex = _this.originalScheduleTemplate.findIndex(function (x) {
                                return x.periodName.toLowerCase() === scheduleList.periodName.toLowerCase()
                                    && x.weekDayId === scheduleList.weekDayId;
                            });
                            if (findExistingPeriodIndex >= 0) {
                                schoolSchedulePeriodId = _this.originalScheduleTemplate[findExistingPeriodIndex].schoolSchedulePeriodId;
                                var indexDuplicatePeriod = _this.schoolschedulePeriodsUpdateView.periodsListView.findIndex(function (x) { return x.id === schoolSchedulePeriodId; });
                                if (indexDuplicatePeriod >= 0) {
                                    _this.schoolschedulePeriodsUpdateView.periodsListView[indexDuplicatePeriod].id = 0;
                                }
                            }
                        }
                        else {
                            schoolSchedulePeriodId = scheduleList.schoolSchedulePeriodId;
                        }
                        _this.schoolschedulePeriodsUpdateView.periodsListView.push({
                            id: schoolSchedulePeriodId,
                            weekDayId: scheduleList.weekDayId,
                            name: scheduleList.periodName,
                            startTime: scheduleList.startTime,
                            endTime: scheduleList.endTime
                        });
                    });
                }
            });
            this.schoolScheduleTemplateService.schoolScheduleTemplateUpdateTemplatePut(this.schoolschedulePeriodsUpdateView).subscribe(function (res) {
                if (res.statusCode === _this.httpStatus.OK) {
                    _this.cancel();
                    _this.openSnackBar(res.messages.ResultMessage);
                    setTimeout(function () {
                        _this.scrollIntoView('app-table');
                    });
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.schoolschedulePeriodsView.periodsListView = [];
            this.schoolschedulePeriodsView.templateName = this.schoolScheduleForm.value.templateName;
            this.schoolScheduleTempList.forEach(function (i) {
                _this.schoolschedulePeriodsView.periodsListView.push({
                    weekDayId: i.weekDayId, name: i.periodName, startTime: i.startTime, endTime: i.endTime
                });
            });
            this.schoolScheduleTemplateService.schoolScheduleTemplateTemplatePost(this.schoolschedulePeriodsView).subscribe(function (res) {
                if (res.statusCode === _this.httpStatus.OK) {
                    _this.cancel();
                    _this.openSnackBar(res.messages.ResultMessage);
                    setTimeout(function () {
                        _this.scrollIntoView('app-table');
                    });
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    SchoolScheduleTemplatesComponent.prototype.onSelect = function ($event) {
        // if (this.isPeriodsTemp === true && this.periodLists.controls.periodListsView.status === AppSettings.VALID && $event.length > 0) {
        this.schoolScheduleForm.value.weekDayId = $event;
        if (this.schoolSchedulePeriods !== undefined && this.schoolSchedulePeriods.length > 0) {
            this.validateAllPeriods();
        }
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SchoolScheduleTemplatesComponent.prototype, "myInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('schoolScheduleTempForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolScheduleTemplatesComponent.prototype, "schoolScheduleTempForm", void 0);
    SchoolScheduleTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-schedule-templates',
            template: __webpack_require__(/*! ./school-schedule-templates.component.html */ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.html"),
            // providers: [SchoolScheduleTemplateService]
            providers: [app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_8__["SchoolScheduleTemplateService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] }],
            styles: [__webpack_require__(/*! ./school-schedule-templates.component.scss */ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_class_schedules_school_schedule_template_service__WEBPACK_IMPORTED_MODULE_8__["SchoolScheduleTemplateService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SchoolScheduleTemplatesComponent);
    return SchoolScheduleTemplatesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/class-schedules/school-schedule-template.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/service/class-schedules/school-schedule-template.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SchoolScheduleTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolScheduleTemplateService", function() { return SchoolScheduleTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * Course
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







var SchoolScheduleTemplateService = /** @class */ (function () {
    function SchoolScheduleTemplateService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["ModuleConfig"].Course;
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
    SchoolScheduleTemplateService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateAllTemplatesGet = function (name, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
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
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_All_Templates, // `${this.basePath}/SchoolScheduleTemplate/all-templates`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateDeleteTemplateDelete = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling schoolScheduleTemplateDeleteTemplateDelete.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_Delete_Template, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateTemplateDetailsGet = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling schoolScheduleTemplateTemplateDetailsGet.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_Template_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateTemplatePost = function (schoolschedulePeriodsView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_Template, schoolschedulePeriodsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateUpdateTemplatePut = function (schoolschedulePeriodsUpdateView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_Update_Template, schoolschedulePeriodsUpdateView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService.prototype.schoolScheduleTemplateWeekdaysGet = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["CourseModuleConfig"]._SchoolPeriodTemplate_Weekdays, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolScheduleTemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], SchoolScheduleTemplateService);
    return SchoolScheduleTemplateService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-class-schedules-class-schedules-module~app-shared-wizard-wizard-mo~f7641765.js.map