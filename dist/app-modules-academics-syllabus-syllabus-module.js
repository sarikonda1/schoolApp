(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-academics-syllabus-syllabus-module"],{

/***/ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 py-sm-20\">\n  <div class=\"font-size-18 px-12 pb-4 text-uppercase\">Syllabus Entry Details</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"py-12 px-20 border-bottom\">    \n      <button mat-raised-button color=\"primary\" (click)=\"onBackClick()\" class=\"text-uppercase\">Back</button>\n      <button mat-icon-button class=\"ml-4\">\n        <mat-icon>info</mat-icon>\n      </button>\n    </div>\n   <form [formGroup]=\"syllabusEntryDetailsForm\">\n    <div class=\"p-20\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Board</mat-label>\n          <input formControlName=\"board\"  matInput readonly   >    \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pr-sm-20\">\n          <mat-label translate #className>Class</mat-label>\n          <input formControlName=\"className\" matInput readonly   >    \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Section</mat-label>\n          <input formControlName=\"section\" matInput readonly   >    \n        </mat-form-field>\n        <div *ngIf=\"syllabusDetails?.syllabusAttachment\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxLayoutAlign=\"center start\">\n          <a target=\"_blank\"  [href]=\"storeService.getFilePath(syllabusDetails?.syllabusAttachment)\" class=\"pb-12 font-size-16\">Attachment</a>\n        </div>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Course</mat-label>\n          <input formControlName=\"course\" matInput readonly   >    \n        </mat-form-field>     \n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\" class=\"pr-sm-20\">\n          <mat-label translate #className>Teacher</mat-label>\n          <input formControlName=\"teacher\" matInput readonly   >    \n        </mat-form-field>      \n      </div>\n      <ng-container *ngIf=\"syllabusEntryDetailsForm?.value?.checkpointName; else chapters\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>Check Point Name</mat-label>\n            <input formControlName=\"checkpointName\" matInput readonly   >    \n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>TestType</mat-label>\n            <input formControlName=\"testType\" matInput readonly   >    \n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>Cumulative</mat-label>\n            <input matInput readonly  [value]=\"syllabusEntryDetailsForm?.value?.isCumulative? 'Yes' : 'No'\" >    \n          </mat-form-field>\n        </div>\n      </ng-container>\n      <ng-template #chapters>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>Chapter</mat-label>\n            <input formControlName=\"chapter\" matInput readonly   >    \n          </mat-form-field>\n        \n          <div *ngIf=\"syllabusDetails?.chapterAttachment\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxLayoutAlign=\"center start\">\n            <a target=\"_blank\" [href]=\"storeService.getFilePath(syllabusDetails?.chapterAttachment)\" class=\"pb-12 font-size-16\">Attachment</a>\n          </div>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>Topic</mat-label>\n            <input formControlName=\"topic\" matInput readonly   >    \n          </mat-form-field>\n        \n          <div *ngIf=\"syllabusDetails?.topicAttachment\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxLayoutAlign=\"center start\">\n            <a target=\"_blank\" [href]=\"storeService.getFilePath(syllabusDetails?.topicAttachment)\" class=\"pb-12 font-size-16\">Attachment</a>\n          </div>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\" class=\"pr-sm-20\">\n            <mat-label translate #className>Sub Topic</mat-label>\n            <input formControlName=\"subTopic\" matInput readonly   >    \n          </mat-form-field>\n        \n          <div *ngIf=\"syllabusDetails?.subTopicAttachment\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxLayoutAlign=\"center start\">\n            <a target=\"_blank\" [href]=\"storeService.getFilePath(syllabusDetails?.subTopicAttachment)\" class=\"pb-12 font-size-16\">Attachment</a>\n          </div>\n        </div>\n      </ng-template>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-12\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Scheduled Date</mat-label>\n          <input formControlName=\"scheduledCompletionDate\" matInput readonly   >    \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>status</mat-label>\n          <input formControlName=\"status\" matInput readonly   >    \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Start Date</mat-label>\n          <input formControlName=\"startDate\" matInput readonly   >    \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n          <mat-label translate #className>Completion Date</mat-label>\n          <input formControlName=\"actualCompletionDate\" matInput readonly   >    \n        </mat-form-field>\n      </div>\n\n      <div class=\"secondary-text font-size-16\">Last Modified by {{syllabusDetails?.LastModifiedUserName ? syllabusDetails?.LastModifiedUserName : '---'}} on {{syllabusEntryDetailsForm?.value?.lastModifiedDate}}</div>\n    </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N5bGxhYnVzL3N5bGxhYnVzLWVudHJ5LWRldGFpbHMvc3lsbGFidXMtZW50cnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SyllabusEntryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusEntryDetailsComponent", function() { return SyllabusEntryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/syllabus/syllabus-schedules.service */ "./src/app/service/syllabus/syllabus-schedules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");








var SyllabusEntryDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusEntryDetailsComponent, _super);
    function SyllabusEntryDetailsComponent(syllabusSchedulesService, route, _fb, commonService, storeService) {
        var _this = _super.call(this) || this;
        _this.syllabusSchedulesService = syllabusSchedulesService;
        _this.route = route;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.storeService = storeService;
        return _this;
    }
    SyllabusEntryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intializeForm();
        if (this.route.params) {
            this.route.params.subscribe(function (params) {
                if (params.id) {
                    _this.getProcessData(params.id);
                }
            });
        }
    };
    SyllabusEntryDetailsComponent.prototype.intializeForm = function () {
        this.syllabusEntryDetailsForm = this._fb.group({
            board: null,
            className: null,
            section: null,
            course: null,
            teacher: null,
            chapter: null,
            chapterAttachment: null,
            topic: null,
            topicAttachment: null,
            subTopic: null,
            subTopicAttachment: null,
            scheduledCompletionDate: null,
            status: null,
            startDate: null,
            actualCompletionDate: null,
            checkpointName: null,
            testType: null,
            isCumulative: null,
            lastModifiedDate: null
        });
    };
    SyllabusEntryDetailsComponent.prototype.getProcessData = function (id) {
        var _this = this;
        this.syllabusSchedulesService.syllabusScheduleProcessDetails(id)
            .subscribe(function (res) { return _this.setProcessDetails(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusEntryDetailsComponent.prototype.setProcessDetails = function (res) {
        this.syllabusDetails = res.syllabusEntryDetailsView;
        res.syllabusEntryDetailsView.scheduledCompletionDate = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.scheduledCompletionDate);
        res.syllabusEntryDetailsView.startDate = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.startDate);
        res.syllabusEntryDetailsView.lastModifiedDate = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.lastModifiedDate);
        res.syllabusEntryDetailsView.actualCompletionDate = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.actualCompletionDate);
        this.syllabusEntryDetailsForm.patchValue(res.syllabusEntryDetailsView);
    };
    SyllabusEntryDetailsComponent.prototype.onBackClick = function () {
        history.back();
    };
    SyllabusEntryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus-entry-details',
            template: __webpack_require__(/*! ./syllabus-entry-details.component.html */ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.html"),
            providers: [app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_3__["SyllabusSchedulesService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]],
            styles: [__webpack_require__(/*! ./syllabus-entry-details.component.scss */ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_3__["SyllabusSchedulesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]])
    ], SyllabusEntryDetailsComponent);
    return SyllabusEntryDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SyllabusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusRoutingModule", function() { return SyllabusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _syllabus_schedule_syllabus_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllabus-schedule/syllabus-schedule.component */ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.ts");
/* harmony import */ var _syllabus_progress_syllabus_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syllabus-progress/syllabus-progress.component */ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.ts");
/* harmony import */ var _syllabus_entry_details_syllabus_entry_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syllabus-entry-details/syllabus-entry-details.component */ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.ts");
/* harmony import */ var _syllabus_view_syllabus_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syllabus-view/syllabus-view.component */ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var routes = [
    { path: 'schedule', component: _syllabus_schedule_syllabus_schedule_component__WEBPACK_IMPORTED_MODULE_3__["SyllabusScheduleComponent"], data: { title: 'Syllabus-Schedule' } },
    { path: 'progress', component: _syllabus_progress_syllabus_progress_component__WEBPACK_IMPORTED_MODULE_4__["SyllabusProgressComponent"], data: { title: 'Syllabus Progress' } },
    { path: 'syllabus-entry-details/:id', component: _syllabus_entry_details_syllabus_entry_details_component__WEBPACK_IMPORTED_MODULE_5__["SyllabusEntryDetailsComponent"], data: { title: 'Syllabus Entry Details' } },
    { path: 'dashboard', component: _syllabus_view_syllabus_view_component__WEBPACK_IMPORTED_MODULE_6__["SyllabusViewComponent"], data: { title: 'Syllabus Dash Board' } },
];
var SyllabusRoutingModule = /** @class */ (function () {
    function SyllabusRoutingModule() {
    }
    SyllabusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SyllabusRoutingModule);
    return SyllabusRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-24\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Syllabus Schedule</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <form [formGroup]=\"syllabusSearchForm\" (ngSubmit)=\"syllabusDropDownList=[];onSyllabusSearch(syllabusSearchForm)\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"end end\" class=\"p-20\">\n        <button type=\"button\" mat-icon-button translate (click)=\"getHelpText('Syllabus Schedule')\">  <mat-icon >info</mat-icon></button>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"p-20\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n           <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-20\">\n            <mat-label translate #board>Board</mat-label>\n            <mat-select formControlName=\"boardId\" (selectionChange)=\"boardChanged($event)\" required>\n              <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">\n                {{ board.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='board.innerText' [validationControl]=\"syllabusSearchForm.controls.boardId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-20\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select  (selectionChange)=\"classChanged($event)\" formControlName=\"classId\" required>\n              <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n                {{ class.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='class.innerText' [validationControl]=\"syllabusSearchForm.controls.classId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n            <mat-label translate #course>Course</mat-label>\n            <mat-select required formControlName=\"courseId\" required>\n              <mat-option *ngFor=\"let course of coursesList\" [value]=\"course.value\">\n                {{ course.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='course.innerText' [validationControl]=\"syllabusSearchForm.controls.courseId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n            <mat-label translate #section>Section</mat-label>\n            <mat-select formControlName=\"sectionId\">\n              <mat-option [value]=\"null\" *ngIf=\"availableSections?.length\"> </mat-option>\n              <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n                {{ section.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='section.innerText' [validationControl]=\"syllabusSearchForm.controls.sectionId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n          <button mat-raised-button type=\"reset\" color=\"primary\" class=\"text-uppercase mx-12\" (click)=\"onClear()\">\n            {{'Reset' | translate}}\n          </button>\n          <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n            {{'Search' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"px-sm-40 pt-sm-24\" *ngIf=\"syllabusSearchForm.valid && !tabSettings?.rows?.length\">\n  <div class=\"mat-elevation-z3 simple-table-container radius-5\" >\n    <div *ngIf=\"onSearchHeader && !syllabusDropDownList?.length\" class=\"font-size-16 text-center p-20\">There is no syllabus schedule for selected options. Click next to assign a Syllabus schedule</div>\n    <div *ngIf=\"onSearchHeader && !syllabusDropDownList?.length\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" class=\"pb-12\">\n      <button (click)=\"onNoScheduleNext()\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n        {{'Next' | translate}}\n      </button>\n    </div>\n    <div class=\"p-20\" fxLayoutAlign=\"center center\" *ngIf=\"onSearchHeader && syllabusDropDownList?.length > 1\">\n      <div fxLayout=\"column\" fxFlex.gt-sm=\"60\" fxFlex=\"100\" class=\"border\">\n        <div class=\"p-20 primary font-size-18\">Syllabus Selection</div>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-24 pt-28 pb-12\">\n          <mat-label translate #syllabus>Syllabus</mat-label>\n          <mat-select required [formControl]=\"syllabusFormController\">\n            <mat-option *ngFor=\"let syllabus of syllabusDropDownList\" [value]=\"syllabus.id\">\n              {{ syllabus.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='syllabus.innerText' [validationControl]=\"syllabusFormController\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"row\"  fxLayoutAlign=\"center center\" class=\"pb-12\">\n          <button (click)=\"addSyllabusSchedule()\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </div>\n     \n    </div>\n   \n  </div>\n</div>\n\n<app-table *ngIf=\"tabSettings?.rows?.length\" [settings]=\"tabSettings\" \n  [massActionTemplateRef]=\"massActions\" (selectedRows)='selectedRows($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n  [disabled]=\"disbleSubmitBtn\" [templateRef]=\"addCourseTemplate\" [closeAddForm]=\"closeAddPanel\"\n   [closeRowForm]='closeAddPanel'>\n</app-table>\n\n\n<ng-template #massActions>\n  <form #completionDateForm=\"ngForm\" (ngSubmit)=\"scheduleController?.valid ? onSchedule() : ''\">\n    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n      <mat-form-field class=\"px-20 w-200\">\n        <mat-label #actions translate>Actions</mat-label>\n        <mat-select (selectionChange)=\"onSchedule()\" [formControl]=\"scheduleController\" required>\n          <mat-option [value]=\"true\">\n           set Schedule Completion Date\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='actions.innerText' [validationControl]=\"scheduleController\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n\n\n<ng-template #scheduleDateTemp>\n  <div>\n    <div fxLayoutAlign=\"space-between center\" class=\"font-size-20\"><span translate>Enter Scheduled Completion Date</span> <button\n        mat-icon-button (click)=\"closeDialog()\">\n        <mat-icon>close</mat-icon>\n      </button></div>\n    <form [formGroup]=\"scheduleForm\" (ngSubmit)=\"onSubmitDate()\"\n      #scheduleDateFormPopUp=\"ngForm\">\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n        <mat-form-field appearance=\"outline\" fxFlexFill>\n          <mat-label #scheduleDatee translate>Scheduled Completion Date</mat-label>\n          <input required matInput (keyup)=\"forceValidation('scheduleDate', scheduleForm)\" [matDatepicker]=\"scheduleDate\" [min]=\"academicSession?.startDate\"  [max]=\"academicSession?.endDate\"\n          formControlName=\"scheduleDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"scheduleDate\"></mat-datepicker-toggle>\n          <mat-datepicker #scheduleDate></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='scheduleDatee.innerText'\n              [validationControl]=\"scheduleForm.controls.scheduleDate\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxFlexFill fxLayoutAlign=\"end center\" fxLayout=\"row\" class=\"pb-20\">\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase accent-fg\">{{'Submit' | translate}}</button>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N5bGxhYnVzL3N5bGxhYnVzLXNjaGVkdWxlL3N5bGxhYnVzLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SyllabusScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusScheduleComponent", function() { return SyllabusScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/syllabus/syllabus.service */ "./src/app/service/syllabus/syllabus.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/syllabus/syllabus-schedules.service */ "./src/app/service/syllabus/syllabus-schedules.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













var SyllabusScheduleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusScheduleComponent, _super);
    function SyllabusScheduleComponent(_fb, syllabusService, snackBar, route, syllabusSchedulesService, 
    // tslint:disable-next-line: max-line-length
    classTimetableService, commonService, dialog, storeService, changeDetector) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.syllabusService = syllabusService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.syllabusSchedulesService = syllabusSchedulesService;
        _this.classTimetableService = classTimetableService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.storeService = storeService;
        _this.changeDetector = changeDetector;
        _this.coursesList = [];
        _this.syllabusDropDownList = [];
        _this.validate = true;
        _this.currentComponent = 'SyllabusScheduleComponent';
        // table
        _this.tabSettings = {};
        _this.closeAddPanel = true;
        _this.scheduleController = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        _this.cols = [];
        _this.rows = [];
        _this.rowsSelected = [];
        _this.onSearchHeader = false;
        _this.syllabusFormController = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        return _this;
        // this.getAvailableSchoolBoards();
    }
    SyllabusScheduleComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.academicSession = JSON.parse(localStorage.getItem('_as'));
        var modelData = this.getModelComponent(this.currentComponent);
        if (modelData) {
            this.syllabusSearchForm.patchValue(modelData);
            if (modelData.syllabusId) {
                this.syllabusFormController.patchValue(modelData.syllabusId);
                // this.getSyllabusScheduleGrid();
            }
            this.getAvailableClasses(this.syllabusSearchForm.value.boardId);
            this.getAvailableSections(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId);
            this.getCourses();
            this.onSyllabusSearch(this.syllabusSearchForm);
        }
        this.getAvailableSchoolBoards();
        this.intializetableSettings();
    };
    SyllabusScheduleComponent.prototype.getAvailableSchoolBoards = function () {
        var _this = this;
        this.availableSchoolBoards = [];
        this.commonService.schoolBoards().subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.availableSchoolBoards.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (!_this.syllabusSearchForm.value.boardId) {
                    _this.syllabusSearchForm.patchValue({
                        boardId: _this.availableSchoolBoards[0].value
                    });
                    _this.currentBoardId = _this.availableSchoolBoards[0].value;
                    _this.getAvailableClasses(_this.currentBoardId);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SyllabusScheduleComponent.prototype.intializetableSettings = function () {
        this.cols = [
            { field: 'chapter', header: 'Chapter', sort: false, innerHTML: true },
            { field: 'topic', header: 'Topic', sort: false, innerHTML: true },
            { field: 'subTopic', header: 'Sub Topic', sort: false, innerHTML: true },
            { field: 'formatedScheduledCompletionDate', header: 'Scheduled Completion Date', sort: false },
            { field: 'FormatedActualCompletionDate', header: 'Actual Completion Date', sort: false },
            { field: 'actions', header: 'Actions', sort: false }
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            // model: this.studentsSectionSView,
            // tablename: '',
            componentName: this.currentComponent,
            isMultiDeleteRequired: false
        };
    };
    SyllabusScheduleComponent.prototype.setFilterViewModel = function () {
        this.filterViewModel = {
            boardId: 0,
            classId: 0,
            sectionId: 0,
            courseId: 0,
        };
    };
    SyllabusScheduleComponent.prototype.initializeForm = function () {
        var _this = this;
        this.syllabusSearchForm = this._fb.group({
            boardId: [null],
            classId: [null],
            courseId: [null],
            sectionId: [null]
        });
        this.syllabusSearchForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (form) {
            _this.onSearchHeader = false;
            if (_this.tabSettings) {
                _this.tabSettings['rows'] = [];
                _this.changeDetector.detectChanges();
            }
        });
        this.scheduleForm = this._fb.group({
            scheduleDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    SyllabusScheduleComponent.prototype.boardChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (event.value) {
            if (!onManualChange) {
                this.syllabusSearchForm.patchValue({
                    classId: null,
                    sectionId: null,
                    courseId: null
                });
                this.availableClasses = [];
                this.coursesList = [];
                this.availableSections = [];
            }
            this.getAvailableClasses(event.value);
        }
    };
    SyllabusScheduleComponent.prototype.classChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.syllabusSearchForm.patchValue({
                sectionId: null,
                courseId: null
            });
            this.coursesList = [];
            this.availableSections = [];
        }
        this.getCourses();
        this.getAvailableSections(this.syllabusSearchForm.controls.boardId, this.syllabusSearchForm.controls.classId);
    };
    SyllabusScheduleComponent.prototype.getCourses = function () {
        var _this = this;
        this.classTimetableService.classTimetableCoursesGet(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId).subscribe(function (response) {
            if (response.commonViewModel && response.commonViewModel.length) {
                response.commonViewModel.forEach(function (element) {
                    _this.coursesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SyllabusScheduleComponent.prototype.onClear = function () {
        this.syllabusSearchForm.reset();
        this.setModelDataTableComponent(this.currentComponent, null);
    };
    SyllabusScheduleComponent.prototype.onSyllabusSearch = function (form) {
        if (form.valid) {
            this.syllabusFormController.reset();
            this.tabSettings.rows = [];
            this.onSearchHeader = false;
            this.getSyllabusScheduleGrid(true);
        }
    };
    SyllabusScheduleComponent.prototype.onNoScheduleNext = function () {
        var _this = this;
        this.syllabusService.getSyllabusList(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId, this.syllabusSearchForm.value.courseId)
            .subscribe(function (res) { return _this.onGetSyllabusList(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusScheduleComponent.prototype.onGetSyllabusList = function (res) {
        if (res.syllabus && res.syllabus.length) {
            this.syllabusDropDownList = res.syllabus;
            if (res.syllabus.length === 1) {
                this.syllabusFormController.patchValue(res.syllabus[0].id);
                this.addSyllabusSchedule();
            }
        }
        else {
            this.openSnackBar('No Syllabus is configured to class, section, course', true);
        }
    };
    SyllabusScheduleComponent.prototype.addSyllabusSchedule = function () {
        var _this = this;
        if (this.syllabusFormController.valid) {
            var modelData = this.syllabusSearchForm.value;
            modelData['syllabusId'] = this.syllabusFormController.value;
            modelData['schoolBoardId'] = this.syllabusSearchForm.value.boardId;
            this.syllabusSchedulesService.scheduleAcademicSyllabus(modelData)
                .subscribe(function (res) { return _this.onPostSchedule(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusScheduleComponent.prototype.onPostSchedule = function (res) {
        this.getSyllabusScheduleGrid();
    };
    SyllabusScheduleComponent.prototype.getSyllabusScheduleGrid = function (fromHeaderSearch) {
        var _this = this;
        if (fromHeaderSearch === void 0) { fromHeaderSearch = false; }
        if (this.syllabusSearchForm.valid) {
            this.filterViewModel = this.syllabusSearchForm.value;
            this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
            this.syllabusSchedulesService.syllabusScheduleGet(this.filterViewModel.classId, this.filterViewModel.sectionId, this.filterViewModel.courseId, this.filterViewModel.boardId)
                .subscribe(function (res) { return _this.setSyllabusScheduleDetails(res, fromHeaderSearch); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusScheduleComponent.prototype.setSyllabusScheduleDetails = function (res, fromHeaderSearch) {
        var _this = this;
        if (res.academicSesssionSyllabus) {
            var syllabusDataList = [];
            res.academicSesssionSyllabus.academicSessionSyllabusSchedules.map(function (e) {
                if (e.syllabusCheckPointId) {
                    e.isCheckPoint = true;
                    e.chapter = e.syllabusCheckPoint;
                    e.topic = e.checkPointTestType;
                    e.subTopic = e.isCumulative ? 'Cummulative' : 'Incremental';
                }
                else {
                    e.chapter = e.chapter ? ('<p>' + e.chapter + _this.getInnerHtmlForAttachment(e.chapterFileName) + '</p>') : '';
                    e.topic = e.topic ? ('<p>' + e.topic + _this.getInnerHtmlForAttachment(e.topicFileName) + '</p>') : '';
                    e.subTopic = e.subTopic ? ('<p>' + e.subTopic + _this.getInnerHtmlForAttachment(e.subTopicFileName) + '</p>') : '';
                }
            });
            syllabusDataList = res.academicSesssionSyllabus.academicSessionSyllabusSchedules;
            syllabusDataList.forEach(function (e) {
                e.formatedScheduledCompletionDate = _this.getFormattedDateBySchoolDateFormat(e.scheduledCompletionDate);
                e.FormatedActualCompletionDate = _this.getFormattedDateBySchoolDateFormat(e.actualCompletionDate);
                e.operations = [
                    {
                        name: 'Set Scheduled Completion Date',
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT,
                        operationName: 'set'
                    }
                ];
            });
            this.tabSettings = {
                columns: this.cols,
                // model: this.studentsSectionSView,
                rows: syllabusDataList,
                tablename: 'Schedule Details',
                componentName: this.currentComponent,
                visibleSelectAll: true,
                isSelectRowRequired: true,
                isMultiDeleteRequired: false,
                isPaginationRequired: false
            };
        }
        else if (res.messages && res.messages.ResultMessage) {
            this.openSnackBar(res.messages.ResultMessage, true);
        }
        this.onSearchHeader = true;
    };
    SyllabusScheduleComponent.prototype.rowWiseActions = function (event) {
        this.rowsSelected = [];
        this.rowsSelected.push(event.clickedRow);
        this.onSchedule();
    };
    SyllabusScheduleComponent.prototype.selectedRows = function (data) {
        var _this = this;
        if (data.length === 0) {
            this.scheduleController.reset();
        }
        this.rowsSelected = [];
        data.forEach(function (element) {
            _this.rowsSelected.push(element);
        });
    };
    SyllabusScheduleComponent.prototype.onSubmitDate = function () {
        var _this = this;
        if (this.scheduleForm.valid) {
            var scheduleUpdateArray_1 = {
                scheduledCompletionDate: this.scheduleForm.value.scheduleDate,
                academicSessionSyllabusScheduleIds: []
            };
            this.rowsSelected.map(function (e) {
                scheduleUpdateArray_1.academicSessionSyllabusScheduleIds.push(e.academicSessionSyllabusScheduleId);
            });
            this.syllabusService.updateSyllabusSchedule(scheduleUpdateArray_1)
                .subscribe(function (res) { return _this.onUpdateSyllabusSchedule(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusScheduleComponent.prototype.onUpdateSyllabusSchedule = function (res) {
        this.getSyllabusScheduleGrid();
        this.closeDialog();
    };
    SyllabusScheduleComponent.prototype.onSchedule = function () {
        if (this.rowsSelected && this.rowsSelected.length === 1) {
            this.scheduleForm.patchValue({
                scheduleDate: this.rowsSelected[0].scheduledCompletionDate
            });
        }
        this.customDialog = this.dialog.open(this.scheduleDateTemp, {
            disableClose: true,
            width: '500px',
        });
    };
    SyllabusScheduleComponent.prototype.closeDialog = function () {
        this.scheduleDateFormPopUp.submitted = false;
        this.scheduleController.reset();
        this.scheduleForm.reset();
        this.dialog.closeAll();
    };
    SyllabusScheduleComponent.prototype.getInnerHtmlForAttachment = function (filename) {
        return filename ? ('<span class="pl-8"><a target="_blank" href="' + this.storeService.getFilePath(filename) + '">Attachment</a></span>') : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleDateTemp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SyllabusScheduleComponent.prototype, "scheduleDateTemp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleDateFormPopUp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusScheduleComponent.prototype, "scheduleDateFormPopUp", void 0);
    SyllabusScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus-schedule',
            template: __webpack_require__(/*! ./syllabus-schedule.component.html */ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.html"),
            providers: [app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]],
            styles: [__webpack_require__(/*! ./syllabus-schedule.component.scss */ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SyllabusScheduleComponent);
    return SyllabusScheduleComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-24\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center \" class=\"pb-8 px-12\">\n    <div class=\"text-uppercase font-size-18\" translate>Syllabus Dashboard</div>\n    <div>\n      <button mat-raised-button color=\"primary\" translate (click)=\"back()\"\n        class=\"text-uppercase mr-4\">{{'Back' | translate}}</button>\n        <button mat-button (click)=\"getHelpText('Syllabus Dashboards')\">\n          <mat-icon>info</mat-icon>\n        </button>\n    </div>\n  </div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20 p-20\" fxLayout=\"column\">\n    <mat-tab-group  mat-stretch-tabs (selectedIndexChange)=\"onLoad=false;\">\n      <mat-tab label=\"{{'Progress By Class & Section' | translate}}\">\n          <form [formGroup]=\"classSectionProgressForm\" fxLayout=\"column\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n            <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\" class=\"font-size-18 px-16 pt-20\">\n              <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\"\n                class=\"pr-sm-12\">\n                <mat-label #board translate>Bord</mat-label>\n                <mat-select formControlName=\"boardId\" (selectionChange)=\"boardChanged($event)\" >\n                  <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">\n                    {{ board.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='board.innerText'\n                    [validationControl]=\"classSectionProgressForm.controls.sectionId\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\"\n                class=\"pr-sm-12\">\n                <mat-label #class translate>Class</mat-label>\n                <mat-select (selectionChange)=\"classChanged($event)\" formControlName=\"classId\" >\n                  <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n                    {{ class.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='class.innerText'\n                    [validationControl]=\"classSectionProgressForm.controls.classId\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n                <mat-label #section translate>Section</mat-label>\n                <mat-select formControlName=\"sectionId\" >\n                  <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n                    {{ section.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='section.innerText'\n                    [validationControl]=\"classSectionProgressForm.controls.sectionId\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayoutAlign=\"end center\" class=\"px-20 pb-20\">\n              <button type=\"reset\" mat-raised-button color=\"primary\" class=\"text-uppercase mr-8\" (click)=\"onClear(false)\">Clear</button>\n              <button type=\"submit\" mat-raised-button color=\"accent\" class=\"text-uppercase\"\n                (click)=\"onClickClassSection()\">Search</button>\n            </div>\n          </form>\n      </mat-tab>\n      <mat-tab label=\"{{'Progress By Teacher' | translate}}\">\n            <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n              <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\" class=\"font-size-18 px-16 pt-20\">\n                <af-select appearance=\"outline\" label=\"Teacher\" [optionGroupRequired]=\"false\" fxFlex=\"100\" [required]=\"false\"\n                  [formControl]=\"teachersControl\" [options]=\"staffList | async\" placeholder=\"Select Teacher\">\n                </af-select>\n              </div>\n              <div fxLayoutAlign=\"end center\" class=\"px-20 pb-20\">\n                <button mat-raised-button type=\"reset\" color=\"primary\" class=\"text-uppercase mr-8\" (click)=\"onClear()\">Clear</button>\n                <button mat-raised-button type=\"submit\" color=\"accent\" (click)=\"onClickTeacher()\"\n                  class=\"text-uppercase\">Search</button>\n              </div>\n            </form>\n      </mat-tab>\n     </mat-tab-group>\n\n     <div *ngIf=\"onLoad && !syllabusData?.syllabusClassSectionView?.length && !teachersData?.teachersSyllabusProgresses?.length\" class=\"errorMsg\">\n      <p class=\"red-text text-center mb-0 font-weight-bold p-24\" translate>No Syllabus Found</p>\n    </div>\n    <div *ngIf=\"onLoad && (teachersData?.teachersSyllabusProgresses?.length || syllabusData?.syllabusClassSectionView?.length)\" fxLayout=\"column\" fxLayout.gt-sm=\"row\"  class=\"p-16 px-12\">\n      <div appearance=\"outline\" class=\"icon-center\">Academic Session (Duration %)\n      </div>\n      <div appearance=\"outline\" class=\"example-full-width\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-sm-20\">\n        <progress-bar [progress]=\"teachersData?.academicSessionCompletedPercentage || syllabusData?.academicSessionCompletedPercentage\" [color]=\"completedColor\">\n        </progress-bar>\n      </div>\n    </div>\n\n    <mat-accordion multi class=\"mat-table border\" *ngIf=\"onLoad && syllabusData?.syllabusClassSectionView?.length\">\n      <section matSort class=\"mat-header-row border-bottom accent\">\n        <span class=\"mat-header-cell\">Board</span>\n        <span class=\"mat-header-cell\">Class</span>\n        <span class=\"mat-header-cell\">Section</span>\n        <span class=\"mat-header-cell\">Overall Progress</span>\n      </section>\n      <mat-expansion-panel *ngFor=\"let item of syllabusData?.syllabusClassSectionView\" [disabled]=\"!item?.classSectionProgressView?.length\">\n        <mat-expansion-panel-header class=\"mat-row\">\n          <span class=\"mat-cell text-truncate pr-4\">{{item.schoolBoard}}</span>\n          <span class=\"mat-cell text-truncate pr-4\">{{item.className}}</span>\n          <span class=\"mat-cell text-truncate pr-4\">{{item.section}}</span>\n          <span class=\"mat-cell text-truncate pr-4\">\n            <progress-bar [progress]=\"item?.completedPercentage\" [color]=\"completedColor\">\n            </progress-bar>\n          </span>\n        </mat-expansion-panel-header>\n        <!-- course details -->\n        <div class=\"border header-height\">\n          <section matSort class=\"mat-header-row primary\">\n            <span class=\"mat-header-cell\">Course</span>\n            <span class=\"mat-header-cell\">Teacher</span>\n            <span class=\"mat-header-cell\">Course Progress</span>\n          </section>\n\n          <mat-expansion-panel *ngFor=\"let teacher of item.classSectionProgressView\">\n            <mat-expansion-panel-header class=\"mat-row\">\n              <span class=\"mat-cell text-truncate pr-4\">{{teacher.courseName}}</span>\n              <span class=\"mat-cell text-truncate pr-4\">{{teacher.teacherName ? teacher.teacherName : '---'}}</span>\n              <span class=\"mat-cell text-truncate pr-4\">\n                <progress-bar [progress]=\"teacher?.progress?.completedCount\" [color]=\"completedColor\">\n                </progress-bar>\n              </span>\n            </mat-expansion-panel-header>\n            <!-- chapter details -->\n            <div class=\"border\">\n              <section matSort class=\"mat-header-row primary\">\n                <span class=\"mat-header-cell\">Item</span>\n                <span class=\"mat-header-cell\">Completed</span>\n                <span class=\"mat-header-cell\">Pending</span>\n              </section>\n\n              <mat-expansion-panel *ngFor=\"let chapter of teacher?.syllabusSubView; let f = first\" [disabled]=\"!f || !chapter?.syllabusSubProgressView?.length\">\n                <mat-expansion-panel-header class=\"mat-row\">\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.item}}</span>\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.completeCount}}</span>\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.pendingcount}}</span>\n                </mat-expansion-panel-header>\n                <!-- topics details -->\n                <div class=\"border\">\n                  <section matSort class=\"mat-header-row\">\n                    <span class=\"mat-header-cell\">Chapter</span>\n                    <span class=\"mat-header-cell\">Status</span>\n                    <span class=\"mat-header-cell\">Topics Completed</span>\n                    <span class=\"mat-header-cell\">Topics Pending</span>\n                  </section>\n                  <mat-expansion-panel *ngFor=\"let topics of chapter?.syllabusSubProgressView\" disabled>\n                    <mat-expansion-panel-header class=\"mat-row\">\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.name}}</span>\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.status}}</span>\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.topicCompletedCount}}</span>\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.topicPendingCount}}</span>\n                    </mat-expansion-panel-header>\n                    <!-- topics details -->\n                  </mat-expansion-panel>\n                </div>\n              </mat-expansion-panel>\n            </div>\n          </mat-expansion-panel>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n\n    <mat-accordion multi class=\"mat-table border\" *ngIf=\"onLoad && teachersData?.teachersSyllabusProgresses?.length\">\n      <section matSort class=\"mat-header-row border-bottom accent\">\n        <span class=\"mat-header-cell\">Teacher</span>\n        <span class=\"mat-header-cell\">Teacher Progress</span>\n      </section>\n    \n      <mat-expansion-panel *ngFor=\"let teacher of teachersData?.teachersSyllabusProgresses\">\n        <mat-expansion-panel-header class=\"mat-row\">\n          <span class=\"mat-cell text-truncate pr-4\">{{teacher.teacherName}}</span>\n          <span class=\"mat-cell text-truncate pr-4\">\n            <progress-bar [progress]=\"teacher?.completedPercentage\" [color]=\"completedColor\">\n            </progress-bar>\n          </span>\n        </mat-expansion-panel-header>\n        <!-- chapter details -->\n            <!-- chapter details -->\n            <div class=\"border header-height\">\n              <section matSort class=\"mat-header-row accent\">\n                <span class=\"mat-header-cell\">Class</span>\n                <span class=\"mat-header-cell\">Section</span>\n                <span class=\"mat-header-cell\">Subject</span>\n                <span class=\"mat-header-cell\">Course Progress</span>\n              </section>\n              <mat-expansion-panel *ngFor=\"let chapter of teacher.syllabusDashboardList\">\n                <mat-expansion-panel-header class=\"mat-row\">\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.className}}</span>\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.section}}</span>\n                  <span class=\"mat-cell text-truncate pr-4\">{{chapter.subject}}</span>\n                  <span class=\"mat-cell text-truncate pr-4\">\n                    <progress-bar [progress]=\"chapter?.progress?.completedCount\" [color]=\"completedColor\">\n                    </progress-bar>\n                  </span>\n                </mat-expansion-panel-header>\n                <!-- topics details -->\n                <div class=\"border\">\n                  <section matSort class=\"mat-header-row accent\">\n                    <span class=\"mat-header-cell\">Item</span>\n                    <span class=\"mat-header-cell\">Completed</span>\n                    <span class=\"mat-header-cell\">Pending</span>\n                  </section>\n                  <mat-expansion-panel *ngFor=\"let topics of chapter?.syllabusSubView; let f = first\" [disabled]=\"!f || !topics?.syllabusSubProgressView?.length\" >\n                    <mat-expansion-panel-header class=\"mat-row\">\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.item}}</span>\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.completeCount}}</span>\n                      <span class=\"mat-cell text-truncate pr-4\">{{topics.pendingcount}}</span>\n                    </mat-expansion-panel-header>\n                    <div class=\"border\">\n                      <section matSort class=\"mat-header-row accent\">\n                        <span class=\"mat-header-cell\">Chapter</span>\n                        <span class=\"mat-header-cell\">Status</span>\n                        <span class=\"mat-header-cell\">Topics Completed</span>\n                        <span class=\"mat-header-cell\">Topics Pending</span>\n                      </section>\n                      <mat-expansion-panel *ngFor=\"let topic of topics?.syllabusSubProgressView\" disabled>\n                        <mat-expansion-panel-header class=\"mat-row\">\n                          <span class=\"mat-cell text-truncate pr-4\">{{topic.name}}</span>\n                          <span class=\"mat-cell text-truncate pr-4\">{{topic.status}}</span>\n                          <span class=\"mat-cell text-truncate pr-4\">{{topic.topicCompletedCount}}</span>\n                          <span class=\"mat-cell text-truncate pr-4\">{{topic.topicPendingCount}}</span>\n                        </mat-expansion-panel-header>\n                        <!-- topics details -->\n                      </mat-expansion-panel>\n                    </div>\n                  </mat-expansion-panel>\n                </div>\n              </mat-expansion-panel>\n            </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <div *ngIf=\"onLoad && (teachersData?.teachersSyllabusProgresses?.length || syllabusData?.syllabusClassSectionView?.length)\" fxlayout=\"row\" fxLayoutAlign=\"center center\" class=\"px-16 pt-12\">\n      <div class=\"pr-28\" fxLayoutAlign=\"center center\">\n        <mat-icon class=\"green-fg green-bg mr-8 mat-elevation-z3 border-radius-2\">crop_din</mat-icon> Completed\n      </div>\n  \n      <div fxLayoutAlign=\"cnter center\">\n        <mat-icon class=\"grey-400-fg grey-400-bg mr-8 mat-elevation-z3 border-radius-2\">crop_din</mat-icon> Pending\n      </div>\n    </div>\n  </div>\n</div>\n\n   "

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-accordion .mat-header-row {\n  padding-left: 1.5rem;\n  padding-right: 2rem; }\n\n.mat-expansion-panel {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel-header.mat-row {\n  border-bottom: none; }\n\n.mat-table {\n  display: block; }\n\n.mat-expansion-panel-spacing {\n  margin: 0px; }\n\n.mat-header-row {\n  min-height: 56px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-row {\n  min-height: 48px; }\n\n.mat-row, .mat-header-row {\n  display: -webkit-box;\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 24px;\n  box-sizing: border-box; }\n\n.mat-row::after, .mat-header-row::after {\n    display: inline-block;\n    min-height: inherit;\n    content: ''; }\n\n.mat-header-cell {\n  color: currentColor !important; }\n\n.mat-cell, .mat-header-cell {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N5bGxhYnVzL3N5bGxhYnVzLXZpZXcvc3lsbGFidXMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSw0Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSxtQkFBbUIsRUFBQTs7QUFRckI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0EsV0FBVyxFQUFBOztBQUVYO0VBQ0UsZ0JBWDBCO0VBWTFCLDRDQUE0QyxFQUFBOztBQUc5QztFQUNFLGdCQWZtQixFQUFBOztBQWtCckI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUF0QitCO0VBdUIvQixzQkFBc0IsRUFBQTs7QUFOeEI7SUFZSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTs7QUFHZjtFQUNFLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLG1CQUFPO1VBQVAsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2FkZW1pY3Mvc3lsbGFidXMvc3lsbGFidXMtdmlldy9zeWxsYWJ1cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1hY2NvcmRpb24gLm1hdC1oZWFkZXItcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1yb3cge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vL2NvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL3RhYmxlL3RhYmxlLnNjc3NcbiRtYXQtaGVhZGVyLXJvdy1oZWlnaHQ6IDU2cHg7XG4kbWF0LXJvdy1oZWlnaHQ6IDQ4cHg7XG4kbWF0LXJvdy1ob3Jpem9udGFsLXBhZGRpbmc6IDI0cHg7XG5cbi5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XG5tYXJnaW46MHB4IDtcbn1cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6ICRtYXQtaGVhZGVyLXJvdy1oZWlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXG59XG5cbi5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogJG1hdC1yb3ctaGVpZ2h0O1xufVxuXG4ubWF0LXJvdywgLm1hdC1oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAkbWF0LXJvdy1ob3Jpem9udGFsLXBhZGRpbmc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9nb28uZ2wvcEZtakpEIGluIElFIDExLiBBZGRzIGEgcHNldWRvXG4gIC8vIGVsZW1lbnQgdGhhdCB3aWxsIHN0cmV0Y2ggdGhlIHJvdyB0aGUgY29ycmVjdCBoZWlnaHQuIFNlZTpcbiAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MDI2MjVcbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG59XG4ubWF0LWhlYWRlci1jZWxse1xuICBjb2xvcjogY3VycmVudENvbG9yICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SyllabusViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusViewComponent", function() { return SyllabusViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/syllabus/syllabus-schedules.service */ "./src/app/service/syllabus/syllabus-schedules.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var SyllabusViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusViewComponent, _super);
    // tslint:disable-next-line: max-line-length
    function SyllabusViewComponent(_fb, staffCommonService, commonService, scheduleService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.staffCommonService = staffCommonService;
        _this.commonService = commonService;
        _this.scheduleService = scheduleService;
        _this.snackBar = snackBar;
        _this.teachersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null);
        _this.validate = true;
        _this.staffList = Promise.resolve([]);
        _this.onLoad = false;
        _this.completedColor = '#4caf50';
        return _this;
    }
    SyllabusViewComponent.prototype.ngOnInit = function () {
        this.initializeForms();
        this.getAvailableSchoolBoards();
        this.getStaffList();
    };
    SyllabusViewComponent.prototype.initializeForms = function () {
        this.classSectionProgressForm = this._fb.group({
            boardId: [null],
            classId: [null],
            sectionId: [null]
        });
    };
    SyllabusViewComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffCommonService.fetchStaffs(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].TEACHING_STAFF_CODE)
            .subscribe(function (res) { return _this.setStaffData(res); });
    };
    SyllabusViewComponent.prototype.setStaffData = function (staffData) {
        var dropDownData = staffData.map(function (x) { return ({
            label: x.name,
            value: x.id
        }); });
        this.staffList = Promise.resolve(dropDownData);
    };
    SyllabusViewComponent.prototype.getAvailableSchoolBoards = function () {
        var _this = this;
        this.availableSchoolBoards = [];
        this.commonService.schoolBoards().subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.availableSchoolBoards.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (!_this.classSectionProgressForm.value.boardId) {
                    _this.currentBoardId = _this.availableSchoolBoards[0].value;
                    _this.getAvailableClasses(_this.currentBoardId);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SyllabusViewComponent.prototype.boardChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (event.value) {
            if (!onManualChange) {
                this.classSectionProgressForm.patchValue({
                    classId: null,
                    sectionId: null
                });
                this.availableClasses = [];
                this.availableSections = [];
            }
            this.getAvailableClasses(event.value);
        }
    };
    SyllabusViewComponent.prototype.classChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.classSectionProgressForm.patchValue({
                sectionId: null
            });
            this.availableSections = [];
        }
        this.getAvailableSections(this.classSectionProgressForm.controls.boardId, this.classSectionProgressForm.controls.classId);
    };
    SyllabusViewComponent.prototype.onClickTeacher = function () {
        var _this = this;
        if (this.teachersControl.valid) {
            this.scheduleService.adminTeacherSyllabusProgress(this.teachersControl.value)
                .subscribe(function (res) { return _this.onGetProgress(res, true); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusViewComponent.prototype.onClickClassSection = function () {
        var _this = this;
        if (this.classSectionProgressForm.valid) {
            // tslint:disable-next-line: max-line-length
            this.scheduleService.adminClassSyllabusProgress(this.classSectionProgressForm.value.boardId, this.classSectionProgressForm.value.classId, this.classSectionProgressForm.value.sectionId)
                .subscribe(function (res) { return _this.onGetProgress(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusViewComponent.prototype.onGetProgress = function (res, teacher) {
        if (teacher === void 0) { teacher = false; }
        this.teachersData = null;
        this.syllabusData = null;
        if (teacher) {
            this.teachersData = res;
        }
        else {
            this.syllabusData = res;
        }
        this.onLoad = true;
    };
    SyllabusViewComponent.prototype.back = function () {
        history.back();
    };
    SyllabusViewComponent.prototype.onClear = function (fromTeacher) {
        if (fromTeacher === void 0) { fromTeacher = true; }
        this.onLoad = false;
        if (fromTeacher) {
            this.teachersControl.reset();
        }
        else {
            this.classSectionProgressForm.reset();
        }
    };
    SyllabusViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus-view',
            template: __webpack_require__(/*! ./syllabus-view.component.html */ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.html"),
            providers: [app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_5__["StaffCommonService"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"]],
            styles: [__webpack_require__(/*! ./syllabus-view.component.scss */ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_5__["StaffCommonService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], SyllabusViewComponent);
    return SyllabusViewComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus.module.ts ***!
  \***************************************************************/
/*! exports provided: SyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusModule", function() { return SyllabusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _syllabus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllabus-routing.module */ "./src/app/modules/academics/syllabus/syllabus-routing.module.ts");
/* harmony import */ var _syllabus_schedule_syllabus_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syllabus-schedule/syllabus-schedule.component */ "./src/app/modules/academics/syllabus/syllabus-schedule/syllabus-schedule.component.ts");
/* harmony import */ var _syllabus_progress_syllabus_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syllabus-progress/syllabus-progress.component */ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.ts");
/* harmony import */ var _syllabus_view_syllabus_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syllabus-view/syllabus-view.component */ "./src/app/modules/academics/syllabus/syllabus-view/syllabus-view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _syllabus_entry_details_syllabus_entry_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./syllabus-entry-details/syllabus-entry-details.component */ "./src/app/modules/academics/syllabus/syllabus-entry-details/syllabus-entry-details.component.ts");


















var SyllabusModule = /** @class */ (function () {
    function SyllabusModule() {
    }
    SyllabusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_syllabus_schedule_syllabus_schedule_component__WEBPACK_IMPORTED_MODULE_4__["SyllabusScheduleComponent"], _syllabus_progress_syllabus_progress_component__WEBPACK_IMPORTED_MODULE_5__["SyllabusProgressComponent"], _syllabus_entry_details_syllabus_entry_details_component__WEBPACK_IMPORTED_MODULE_17__["SyllabusEntryDetailsComponent"], _syllabus_view_syllabus_view_component__WEBPACK_IMPORTED_MODULE_6__["SyllabusViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__["MatcomponentsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__["FuseSharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedManagementModule"],
                _syllabus_routing_module__WEBPACK_IMPORTED_MODULE_3__["SyllabusRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_14__["ProgressBarModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true,
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SyllabusModule);
    return SyllabusModule;
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
//# sourceMappingURL=app-modules-academics-syllabus-syllabus-module.js.map