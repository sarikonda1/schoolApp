(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shared-wizard-wizard-module"],{

/***/ "./src/app/shared/wizard/wizard.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/wizard/wizard.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [(selectedIndex)]=\"selectedIndex\" (selectionChange)=\"selectionChanged($event)\" (selectedIndexChange)=\"selected($event)\"\n    class=\"mat-elevation-z6 m-16 radius-10 wizard-form tabs-to-spteps\">\n    <mat-tab>\n        <ng-template mat-tab-label>\n            <div class=\"tab-label-status\">1</div>\n            <div class=\"tab-title font-size-14 text-capitalized\" translate>Start</div>\n        </ng-template>\n        <ng-template matTabContent>\n            <div [innerHTML]=\"wizardInfo\" class=\"mt-32 text-center\"></div>\n            <div fxLayoutAlign=\"center center\">\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"my-24\" (click)=\"startWizard()\"\n                    ><span translate>Start</span></button>\n            </div>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab *ngFor=\"let step of steps;  let i = index\">\n        <ng-template mat-tab-label>\n            <div class=\"tab-label-status\"\n                [ngClass]=\"(wizardStatus[step.component] == 'complete') ? 'complete' : 'pending'\">\n                <mat-icon *ngIf=\"wizardStatus[step.component] == 'complete'; else mat_tab_number;\" class=\"font-size-16 pt-8\">check</mat-icon>\n                <ng-template #mat_tab_number>{{i + 2}}</ng-template>\n            </div>\n            <div class=\"tab-title font-size-14 text-capitalized\" translate>{{step.title | titlecase}}</div>\n        </ng-template>\n        <ng-template matTabContent>\n            <mat-checkbox fxLayoutAlign=\"end\" class=\"mr-36 mt-24\"\n                [checked]=\"(wizardStatus[step.component] == 'complete')\"\n                (change)=\"markAsCompleted($event,step.component)\">\n                {{'Mark as Completed' | translate}}\n            </mat-checkbox>\n            <div>\n                <ng-container *ngComponentOutlet=\"step.componentObj\"></ng-container>\n            </div>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab>\n        <ng-template mat-tab-label>\n            <div class=\"tab-label-status\">{{steps?.length + 2}}</div>\n            <div class=\"tab-title font-size-14 text-capitalized\" translate>Done</div>\n        </ng-template>\n        <ng-template matTabContent>\n            <div class=\"text-center h2 mt-32\" translate>You have reached the end of this setup wizard.</div>\n            <div class=\"text-center h2 mb-32\" translate>You may review the steps again or use other setup wizards for additional functions.</div>\n        </ng-template>\n    </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/shared/wizard/wizard.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/wizard/wizard.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/wizard/wizard.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/wizard/wizard.component.ts ***!
  \***************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard.service */ "./src/app/shared/wizard/wizard.service.ts");
/* harmony import */ var _modules_configuration_general_classes_classes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/configuration/general/classes/classes.component */ "./src/app/modules/configuration/general/classes/classes.component.ts");
/* harmony import */ var _modules_configuration_general_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/configuration/general/section/section.component */ "./src/app/modules/configuration/general/section/section.component.ts");
/* harmony import */ var _modules_configuration_general_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/configuration/general/courses/courses.component */ "./src/app/modules/configuration/general/courses/courses.component.ts");
/* harmony import */ var _modules_school_admin_manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/school-admin/manage-school/manage-school.component */ "./src/app/modules/school-admin/manage-school/manage-school.component.ts");
/* harmony import */ var _modules_school_admin_school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/school-admin/school-infrastructure/school-infrastructure.component */ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.ts");
/* harmony import */ var _modules_school_admin_sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/school-admin/sequence-configuration/sequence-configuration.component */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts");
/* harmony import */ var _modules_configuration_general_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/configuration/general/course-categories/course-categories.component */ "./src/app/modules/configuration/general/course-categories/course-categories.component.ts");
/* harmony import */ var _modules_configuration_general_classperiodtypes_class_period_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/configuration/general/classperiodtypes/class-period-types.component */ "./src/app/modules/configuration/general/classperiodtypes/class-period-types.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_configuration_general_student_application_categories_student_application_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modules/configuration/general/student-application-categories/student-application-categories.component */ "./src/app/modules/configuration/general/student-application-categories/student-application-categories.component.ts");
/* harmony import */ var _modules_configuration_general_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modules/configuration/general/event-types/event-types.component */ "./src/app/modules/configuration/general/event-types/event-types.component.ts");
/* harmony import */ var _modules_configuration_general_school_facilities_school_facilities_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modules/configuration/general/school-facilities/school-facilities.component */ "./src/app/modules/configuration/general/school-facilities/school-facilities.component.ts");
/* harmony import */ var _modules_configuration_general_student_group_representative_role_student_group_representative_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../modules/configuration/general/student-group-representative-role/student-group-representative-role.component */ "./src/app/modules/configuration/general/student-group-representative-role/student-group-representative-role.component.ts");
/* harmony import */ var _modules_configuration_assessment_assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../modules/configuration/assessment/assessment-groups/assessment-groups.component */ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.ts");
/* harmony import */ var _modules_configuration_assessment_assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../modules/configuration/assessment/assessment-categories/assessment-categories.component */ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.ts");
/* harmony import */ var _modules_configuration_assessment_assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../modules/configuration/assessment/assessment-parameters/assessment-parameters.component */ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.ts");
/* harmony import */ var _modules_configuration_assessment_class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component */ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.ts");
/* harmony import */ var _modules_configuration_grading_academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/configuration/grading/academic-grades/academic-grades.component */ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.ts");
/* harmony import */ var _modules_configuration_grading_assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../modules/configuration/grading/assessment-grades/assessment-grades.component */ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.ts");
/* harmony import */ var _modules_configuration_grading_test_type_test_type_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../modules/configuration/grading/test-type/test-type.component */ "./src/app/modules/configuration/grading/test-type/test-type.component.ts");
/* harmony import */ var _modules_configuration_grading_grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../modules/configuration/grading/grading-terms/grading-terms.component */ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.ts");
/* harmony import */ var _modules_configuration_finance_fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../modules/configuration/finance/fee-terms/fee-terms.component */ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.ts");
/* harmony import */ var _modules_configuration_finance_fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../modules/configuration/finance/fee-type/fee-type.component */ "./src/app/modules/configuration/finance/fee-type/fee-type.component.ts");
/* harmony import */ var _modules_configuration_finance_fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../modules/configuration/finance/fee-type-tranches/fee-type-tranches.component */ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.ts");
/* harmony import */ var _modules_configuration_finance_fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../modules/configuration/finance/fee-concession-group/fee-concession-group.component */ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.ts");
/* harmony import */ var _modules_configuration_finance_late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../modules/configuration/finance/late-fee-rules/late-fee-rules.component */ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.ts");
/* harmony import */ var _modules_configuration_finance_manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../modules/configuration/finance/manage-fees/manage-fees.component */ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.ts");
/* harmony import */ var _modules_configuration_finance_manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component */ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.ts");
/* harmony import */ var _modules_configuration_class_schedules_school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component */ "./src/app/modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component.ts");
/* harmony import */ var _modules_configuration_class_schedules_holidays_holidays_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../modules/configuration/class-schedules/holidays/holidays.component */ "./src/app/modules/configuration/class-schedules/holidays/holidays.component.ts");
/* harmony import */ var _modules_school_admin_service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../modules/school-admin/service-configuration/service-configuration.component */ "./src/app/modules/school-admin/service-configuration/service-configuration.component.ts");
/* harmony import */ var _modules_configuration_communication_communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../modules/configuration/communication/communication-types/communication-types.component */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.ts");
/* harmony import */ var app_modules_configuration_finance_fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! app/modules/configuration/finance/fee-accounts/fee-accounts.component */ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.ts");
/* harmony import */ var app_modules_configuration_general_school_rep_role_schoolreprole_schoolreprole_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! app/modules/configuration/general/school-rep-role/schoolreprole/schoolreprole.component */ "./src/app/modules/configuration/general/school-rep-role/schoolreprole/schoolreprole.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_common_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_modules_configuration_academic_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! app/modules/configuration/academic/academic-session/academic-session.component */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.ts");
/* harmony import */ var app_modules_configuration_class_schedules_class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! app/modules/configuration/class-schedules/class-timetables/class-timetables.component */ "./src/app/modules/configuration/class-schedules/class-timetables/class-timetables.component.ts");











































var WizardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WizardComponent, _super);
    function WizardComponent(activatedRoute, wizardService, sanitizer, location) {
        var _this = _super.call(this) || this;
        _this.wizardService = wizardService;
        _this.sanitizer = sanitizer;
        _this.location = location;
        _this.steps = [];
        _this.selectedIndex = 0;
        _this.components = {
            'ClassesComponent': _modules_configuration_general_classes_classes_component__WEBPACK_IMPORTED_MODULE_5__["ClassesComponent"],
            'SectionComponent': _modules_configuration_general_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"],
            'CoursesComponent': _modules_configuration_general_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__["CoursesComponent"],
            'ManageSchoolComponent': _modules_school_admin_manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_8__["ManageSchoolComponent"],
            'SchoolInfrastructureComponent': _modules_school_admin_school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_9__["SchoolInfrastructureComponent"],
            'SequenceConfigurationComponent': _modules_school_admin_sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_10__["SequenceConfigurationComponent"],
            'CourseCategoriesComponent': _modules_configuration_general_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_11__["CourseCategoriesComponent"],
            'ClassperiodtypesComponent': _modules_configuration_general_classperiodtypes_class_period_types_component__WEBPACK_IMPORTED_MODULE_12__["ClassperiodtypesComponent"],
            'StudentApplicationCategoriesComponent': _modules_configuration_general_student_application_categories_student_application_categories_component__WEBPACK_IMPORTED_MODULE_14__["StudentApplicationCategoriesComponent"],
            'AcademicSessionsComponent': app_modules_configuration_academic_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_41__["AcademicSessionComponent"],
            'EventTypesComponent': _modules_configuration_general_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_15__["EventTypesComponent"],
            'SchoolFacilitiesComponent': _modules_configuration_general_school_facilities_school_facilities_component__WEBPACK_IMPORTED_MODULE_16__["SchoolFacilitiesComponent"],
            'SchoolRepRoleComponentComponent': app_modules_configuration_general_school_rep_role_schoolreprole_schoolreprole_component__WEBPACK_IMPORTED_MODULE_38__["SchoolRepRoleComponent"],
            'StudentGroupRepresentativeRoleComponent': _modules_configuration_general_student_group_representative_role_student_group_representative_role_component__WEBPACK_IMPORTED_MODULE_17__["StudentGroupRepresentativeRoleComponent"],
            'AssessmentGroupsComponent': _modules_configuration_assessment_assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_18__["AssessmentGroupsComponent"],
            'AssessmentCategoriesComponent': _modules_configuration_assessment_assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_19__["AssessmentCategoriesComponent"],
            'AssessmentParametersComponent': _modules_configuration_assessment_assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_20__["AssessmentParametersComponent"],
            'ClassAssessmentConfigurationComponent': _modules_configuration_assessment_class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ClassAssessmentConfigurationComponent"],
            'AcademicGradesComponent': _modules_configuration_grading_academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_22__["AcademicGradesComponent"],
            'AssessmentGradesComponent': _modules_configuration_grading_assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_23__["AssessmentGradesComponent"],
            'TestTypeComponent': _modules_configuration_grading_test_type_test_type_component__WEBPACK_IMPORTED_MODULE_24__["TestTypeComponent"],
            'GradingTermsComponent': _modules_configuration_grading_grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_25__["GradingTermsComponent"],
            'FeeTermsComponent': _modules_configuration_finance_fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_26__["FeeTermsComponent"],
            'FeeTypeComponent': _modules_configuration_finance_fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_27__["FeeTypeComponent"],
            'FeeTypeTranchesComponent': _modules_configuration_finance_fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_28__["FeeTypeTranchesComponent"],
            'FeeConcessionGroupComponent': _modules_configuration_finance_fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_29__["FeeConcessionGroupComponent"],
            'LateFeeRulesComponent': _modules_configuration_finance_late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_30__["LateFeeRulesComponent"],
            'ManageFeesComponent': _modules_configuration_finance_manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_31__["ManageFeesComponent"],
            'ManageFeeTranchesComponent': _modules_configuration_finance_manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_32__["ManageFeeTranchesComponent"],
            'SchoolScheduleTemplatesComponent': _modules_configuration_class_schedules_school_schedule_templates_school_schedule_templates_component__WEBPACK_IMPORTED_MODULE_33__["SchoolScheduleTemplatesComponent"],
            'ClassTimetableComponent': app_modules_configuration_class_schedules_class_timetables_class_timetables_component__WEBPACK_IMPORTED_MODULE_42__["ClassTimetablesComponent"],
            'HolidaysComponent': _modules_configuration_class_schedules_holidays_holidays_component__WEBPACK_IMPORTED_MODULE_34__["HolidaysComponent"],
            'ServiceConfigurationComponent': _modules_school_admin_service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_35__["ServiceConfigurationComponent"],
            'CommunicationTypesComponent': _modules_configuration_communication_communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_36__["CommunicationTypesComponent"],
            'FeeAccountsComponent': app_modules_configuration_finance_fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_37__["FeeAccountsComponent"],
        };
        _this.loadedSteps = [];
        _this.currentSetup = activatedRoute.snapshot.url[0].path; // to print only path eg:"/login
        _this.getWizardSettings();
        return _this;
    }
    // onPopState(event): void {
    //   this.switchTabs(window.location.hash);
    // }
    WizardComponent.prototype.ngOnInit = function () {
        if (!window.location.hash) {
            this.selected(this.selectedIndex);
        }
        else {
            this.switchTabs(window.location.hash);
        }
    };
    WizardComponent.prototype.selectionChanged = function (event) {
        this.selectedIndex = event.selectedIndex;
        this.setIndex = event.selectedIndex - 1;
        this.loadedSteps[event.selectedIndex] = true;
    };
    WizardComponent.prototype.stepLoaded = function (step) {
        return (this.loadedSteps[step] !== undefined && this.loadedSteps[step]) ? true : false;
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
    };
    WizardComponent.prototype.ngAfterViewChecked = function () {
        // this.wizardStepper.selectedIndex = this.selectedIndex;
    };
    WizardComponent.prototype.startWizard = function () {
        // this.wizardStepper.next();
        this.selectedIndex = this.selectedIndex + 1;
    };
    WizardComponent.prototype.getWizardSettings = function () {
        var _this = this;
        this.wizardService.wizardGet(this.currentSetup)
            .subscribe(function (response) {
            _this.selectedIndex = 0;
            var stepsInfo = JSON.parse(response.wizardConfigData.config);
            _this.wizardInfo = _this.sanitizer.bypassSecurityTrustHtml(response.wizardConfigData.description);
            var stepsStatus = (response.wizardConfigData.status == null) ? {} : JSON.parse(response.wizardConfigData.status);
            var i = 1;
            var completedIndex = null;
            stepsInfo.forEach(function (componentDetails) {
                var ComponentType = _this.components[componentDetails.component];
                componentDetails.componentObj = ComponentType;
                if (stepsStatus[componentDetails.component] === undefined) {
                    stepsStatus[componentDetails.component] = 'pending';
                }
                if (stepsStatus[componentDetails.component] === 'pending' && !_this.selectedIndex) {
                    _this.selectedIndex = i;
                }
                if (stepsStatus[componentDetails.component] === 'complete') {
                    completedIndex = i + 1;
                }
                _this.selectedIndex = (response.wizardConfigData.status == null) ? 0 : _this.selectedIndex;
                i++;
            });
            if (completedIndex && !_this.selectedIndex) {
                _this.selectedIndex = completedIndex;
            }
            _this.steps = stepsInfo;
            _this.wizardStatus = [];
            _this.wizardStatus = stepsStatus;
            if (!window.location.hash) {
                _this.selected(_this.selectedIndex);
            }
            else {
                _this.switchTabs(window.location.hash);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    WizardComponent.prototype.markAsCompleted = function (event, component) {
        var currentStatus = (!event.checked) ? 'pending' : 'complete';
        this.updateStatus(currentStatus, component);
    };
    WizardComponent.prototype.updateStatus = function (status, component) {
        var _this = this;
        this.wizardStatus[component] = status;
        this.wizardService.update(this.currentSetup, JSON.stringify(this.wizardStatus))
            .subscribe(function (response) {
            if (status === 'complete') {
                var nextIndex_1 = null;
                Object.keys(_this.wizardStatus).forEach(function (key, index) {
                    if (component === key) {
                        nextIndex_1 = index + 1;
                    }
                });
                if (_this.steps.length !== nextIndex_1 && _this.wizardStatus[_this.steps[nextIndex_1].component] === 'pending') {
                    _this.selectedIndex = _this.selectedIndex + 1;
                }
                else {
                    var i = null;
                    for (var index = 0; index < _this.steps.length; index++) {
                        if (_this.wizardStatus[_this.steps[index].component] === 'pending') {
                            i = index;
                            break;
                        }
                    }
                    if (_this.selectedIndex === _this.steps.length && i !== null) {
                        _this.selectedIndex = i + 1;
                    }
                    else if (_this.selectedIndex !== _this.steps.length && i !== null) {
                        _this.selectedIndex = i + 1;
                    }
                    else {
                        _this.selectedIndex = _this.steps.length + 1;
                    }
                }
            }
        });
    };
    WizardComponent.prototype.selected = function (value) {
        if (value > this.steps.length) {
            window.location.hash = 'Done';
        }
        else if (value === 0) {
            window.location.hash = 'Start';
        }
        else {
            var i = value > 0 ? value - 1 : value;
            window.location.hash = this.steps[i].title;
        }
    };
    WizardComponent.prototype.switchTabs = function (value) {
        if (decodeURIComponent(value).split('#')[1]) {
            this.selectedIndex = this.steps.findIndex(function (x) { return x.title === decodeURIComponent(value).split('#')[1]; }) + 1;
            if (this.selectedIndex === 0) {
                this.selectedIndex = (decodeURIComponent(value).split('#')[1] === 'Done') ? this.steps.length + 2 : 0;
            }
        }
    };
    WizardComponent.prototype.onPopState = function (event) {
        this.switchTabs(window.location.hash);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wizardStepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepper"])
    ], WizardComponent.prototype, "wizardStepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WizardComponent.prototype, "components", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WizardComponent.prototype, "onPopState", null);
    WizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/shared/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.scss */ "./src/app/shared/wizard/wizard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_39__["Location"]])
    ], WizardComponent);
    return WizardComponent;
}(_common_common_component__WEBPACK_IMPORTED_MODULE_40__["CommonComponent"]));



/***/ }),

/***/ "./src/app/shared/wizard/wizard.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/wizard/wizard.module.ts ***!
  \************************************************/
/*! exports provided: WizardRoutingModule, WizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardRoutingModule", function() { return WizardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardModule", function() { return WizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_service_academic_service_api_application_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/application-category.service */ "./src/app/service/academic-service/api/application-category.service.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-categories.service */ "./src/app/service/assessment-service/api/assessment-categories.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_service_general_api_courses_configuration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/general/api/courses_configuration.service */ "./src/app/service/general/api/courses_configuration.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _modules_configuration_configuration_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/configuration/configuration.module */ "./src/app/modules/configuration/configuration.module.ts");
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wizard.component */ "./src/app/shared/wizard/wizard.component.ts");
/* harmony import */ var _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _modules_configuration_general_general_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modules/configuration/general/general.module */ "./src/app/modules/configuration/general/general.module.ts");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wizard.service */ "./src/app/shared/wizard/wizard.service.ts");
/* harmony import */ var _modules_school_admin_school_admin_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../modules/school-admin/school-admin.module */ "./src/app/modules/school-admin/school-admin.module.ts");
/* harmony import */ var _modules_school_admin_school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../modules/school-admin/school-infrastructure/school-infrastructure.component */ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _modules_configuration_academic_academic_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/configuration/academic/academic.module */ "./src/app/modules/configuration/academic/academic.module.ts");
/* harmony import */ var _modules_staff_staff_information_system_staff_information_system_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/staff/staff-information-system/staff-information-system.module */ "./src/app/modules/staff/staff-information-system/staff-information-system.module.ts");
/* harmony import */ var _modules_configuration_assessment_assessment_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../modules/configuration/assessment/assessment.module */ "./src/app/modules/configuration/assessment/assessment.module.ts");
/* harmony import */ var _modules_configuration_grading_grading_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../modules/configuration/grading/grading.module */ "./src/app/modules/configuration/grading/grading.module.ts");
/* harmony import */ var _modules_configuration_finance_finance_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../modules/configuration/finance/finance.module */ "./src/app/modules/configuration/finance/finance.module.ts");
/* harmony import */ var _modules_configuration_class_schedules_class_schedules_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../modules/configuration/class-schedules/class-schedules.module */ "./src/app/modules/configuration/class-schedules/class-schedules.module.ts");
/* harmony import */ var _modules_configuration_communication_communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../modules/configuration/communication/communication-types/communication-types.component */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.ts");
/* harmony import */ var _modules_configuration_communication_communication_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../modules/configuration/communication/communication.module */ "./src/app/modules/configuration/communication/communication.module.ts");
/* harmony import */ var app_modules_configuration_academic_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/modules/configuration/academic/academic-session/academic-session.component */ "./src/app/modules/configuration/academic/academic-session/academic-session.component.ts");
/* harmony import */ var app_modules_configuration_academic_academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/modules/configuration/academic/academic-session-details/academic-session-details.component */ "./src/app/modules/configuration/academic/academic-session-details/academic-session-details.component.ts");































var routes = [
    {
        path: 'required-school-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'School Configuration' }
    },
    {
        path: 'optional-school-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'Optional School Configuration' }
    },
    {
        path: 'grading-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'Grading Configuration' }
    },
    {
        path: 'finance-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'Finance Configuration' }
    },
    {
        path: 'class-schedule-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'Class Schedule Configuration' }
    },
    {
        path: 'school-communication-configuration',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
        data: { title: 'School Communication Configuration' }
    },
    { path: 'required-school-configuration/academic-sessions/:id',
        component: app_modules_configuration_academic_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_29__["AcademicSessionComponent"],
        data: { title: 'Edit Academic Sessions' }
    },
    { path: 'required-school-configuration/academic-sessions-details/:id',
        component: app_modules_configuration_academic_academic_session_details_academic_session_details_component__WEBPACK_IMPORTED_MODULE_30__["AcademicSessionDetailsComponent"],
        data: { title: 'Academic Sessions Details' }
    },
];
var WizardRoutingModule = /** @class */ (function () {
    function WizardRoutingModule() {
    }
    WizardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], WizardRoutingModule);
    return WizardRoutingModule;
}());

var WizardModule = /** @class */ (function () {
    function WizardModule() {
    }
    WizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _modules_configuration_configuration_module__WEBPACK_IMPORTED_MODULE_13__["ConfigurationModule"],
                WizardRoutingModule,
                _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_15__["MatcomponentsModule"],
                _modules_configuration_general_general_module__WEBPACK_IMPORTED_MODULE_16__["GeneralModule"],
                _modules_school_admin_school_admin_module__WEBPACK_IMPORTED_MODULE_18__["SchoolAdminModule"],
                _modules_staff_staff_information_system_staff_information_system_module__WEBPACK_IMPORTED_MODULE_22__["StaffInformationSystemModule"],
                _modules_configuration_assessment_assessment_module__WEBPACK_IMPORTED_MODULE_23__["AssessmentModule"],
                _modules_configuration_academic_academic_module__WEBPACK_IMPORTED_MODULE_21__["AcademicModule"],
                _modules_configuration_grading_grading_module__WEBPACK_IMPORTED_MODULE_24__["GradingModule"],
                _modules_configuration_finance_finance_module__WEBPACK_IMPORTED_MODULE_25__["FinanceModule"],
                _modules_configuration_class_schedules_class_schedules_module__WEBPACK_IMPORTED_MODULE_26__["ClassSchedulesModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_20__["FuseSharedModule"],
                _modules_configuration_communication_communication_module__WEBPACK_IMPORTED_MODULE_28__["CommunicationModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true
                },
                app_service_academic_service_api_application_category_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationCategoryService"],
                app_service_general_api_courses_configuration_service__WEBPACK_IMPORTED_MODULE_11__["CoursesConfigurationService"],
                app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_9__["AssessmentCategoriesService"],
                app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_12__["StatusService"],
                _wizard_service__WEBPACK_IMPORTED_MODULE_17__["WizardService"]
            ],
            entryComponents: [
                _wizard_component__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"],
                _modules_school_admin_school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_19__["SchoolInfrastructureComponent"],
                _modules_configuration_communication_communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_27__["CommunicationTypesComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WizardModule);
    return WizardModule;
}());



/***/ }),

/***/ "./src/app/shared/wizard/wizard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/wizard/wizard.service.ts ***!
  \*************************************************/
/*! exports provided: WizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardService", function() { return WizardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_base_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _service_base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _service_base_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../url.config */ "./src/app/url.config.ts");
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







var WizardService = /** @class */ (function () {
    function WizardService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _service_base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
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
    WizardService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    WizardService.prototype.wizardGet = function (Code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (Code !== undefined && Code !== null) {
            queryParameters = queryParameters.set('Code', Code);
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
        return this.httpClient.get(this.basePath + "/Wizard", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WizardService.prototype.update = function (code, status, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
        }
        if (status !== undefined && status !== null) {
            queryParameters = queryParameters.set('Status', status);
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
        return this.httpClient.put(this.basePath + "/Wizard", null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WizardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_service_base_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _service_base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], WizardService);
    return WizardService;
}());



/***/ })

}]);
//# sourceMappingURL=app-shared-wizard-wizard-module.js.map