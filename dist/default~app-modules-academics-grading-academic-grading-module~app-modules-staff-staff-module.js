(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-grading-academic-grading-module~app-modules-staff-staff-module"],{

/***/ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-40\" id=\"map-grid\">\n    <div *ngIf=\"isNavFromReports===false\" class=\"p-12 font-size-18 text-uppercase\" translate>Class Assessment Grades\n    </div>\n    <div class=\"mat-elevation-z6 simple-table-container radius-t-20\">\n        <div *ngIf=\"isNavFromReports===false\" fxLayoutAlign=\"end center\" class=\"p-20\">\n            <button mat-button type='button' (click)=\"getHelpText('Class Assessment Grades')\">\n                <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n        </div>\n        <mat-divider *ngIf=\"isNavFromReports===false\"></mat-divider>\n\n        <form *ngIf=\"isNavFromReports===false\" [formGroup]=\"classAssessmentGradesFormGroup\"\n            #classAssessmentGroupsConfiguration=\"ngForm\" (ngSubmit)=\"getAssessmentConfigurationList()\" class=\"p-sm-32\">\n            <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #schoolBoardId translate>School Board</mat-label>\n                    <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"onSelectSchoolBoard($event)\"\n                        required>\n                        <mat-option *ngFor=\"let schoolBoard of availableSchoolBoards\" [value]=\"schoolBoard.value\">\n                            {{schoolBoard.label}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <app-validation [labelName]=\"schoolBoardId.innerText\"\n                            [validationControl]=\"classAssessmentGradesFormGroup.controls.schoolBoardId\"\n                            [doValidate]=\"classAssmentGroupsFormSubmitted\">\n                        </app-validation>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #class translate>Class</mat-label>\n                    <mat-select formControlName=\"classId\" (selectionChange)=\"onClassChange($event.value)\" required>\n                        <mat-option *ngFor=\"let availableClass of availableClasses\" [value]=\"availableClass.value\">\n                            {{availableClass.label}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <app-validation [labelName]=\"class.innerText\"\n                            [validationControl]=\"classAssessmentGradesFormGroup.controls.classId\"\n                            [doValidate]=\"classAssmentGroupsFormSubmitted\">\n                        </app-validation>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #section translate>Section</mat-label>\n                    <mat-select formControlName=\"sectionId\" (selectionChange)=\"onSectionChange($event.value, true)\"\n                        required>\n                        <mat-option *ngFor=\"let availableSection of availableSections\" [value]=\"availableSection.value\">\n                            {{availableSection.label}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <app-validation [labelName]=\"section.innerText\"\n                            [validationControl]=\"classAssessmentGradesFormGroup.controls.sectionId\"\n                            [doValidate]=\"classAssmentGroupsFormSubmitted\">\n                        </app-validation>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #gradingTerm translate>Grading Term</mat-label>\n                    <mat-select formControlName=\"gradingTermId\" (selectionChange)=\"onGradingTermChange($event.value)\"\n                        required>\n                        <mat-option *ngFor=\"let gradingTerm of gradingTerms\" [value]=\"gradingTerm.value\">\n                            {{gradingTerm.label}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <app-validation [labelName]=\"gradingTerm.innerText\"\n                            [validationControl]=\"classAssessmentGradesFormGroup.controls.gradingTermId\"\n                            [doValidate]=\"classAssmentGroupsFormSubmitted\">\n                        </app-validation>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-20\">\n\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #assessmentGroup translate>Assessment Group</mat-label>\n                    <mat-select formControlName=\"assessmentGroupId\"\n                        (selectionChange)=\"onSelectAssessmentGroup($event.value)\">\n                        <mat-option *ngIf=\"assessmentGroupsList?.length\"></mat-option>\n                        <mat-option *ngFor=\"let assessmentGroup of assessmentGroupsList\"\n                            [value]=\"assessmentGroup.value\">\n                            {{assessmentGroup.label}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #assessmentCategory translate>Assessment Category</mat-label>\n                    <mat-select formControlName=\"assessmentCategoryId\"\n                        (selectionChange)=\"onSelectAssessmentCategory($event.value)\">\n                        <mat-option *ngIf=\"assessmentCategoriesList?.length\"></mat-option>\n                        <mat-option *ngFor=\"let assessmentCategory of assessmentCategoriesList\"\n                            [value]=\"assessmentCategory.value\">\n                            {{assessmentCategory.label}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #assessmentParam translate>Assessment Parameter</mat-label>\n                    <mat-select formControlName=\"assessmentParameterId\">\n                        <mat-option *ngIf=\"assessmentParams?.length\"></mat-option>\n                        <mat-option *ngFor=\"let assessmentParam of assessmentParams\" [value]=\"assessmentParam.value\">\n                            {{assessmentParam.label}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                    fxFlexFill>\n                    <mat-label #assessmentParam translate>Students</mat-label>\n                    <mat-select formControlName=\"studentNames\">\n                        <mat-option *ngIf=\"filterdStudents?.length\"></mat-option>\n                        <mat-option *ngFor=\"let tempFilteredStudent of filterdStudents\"\n                            [value]=\"tempFilteredStudent.schoolAcademicSessionStudentId\">\n                            {{tempFilteredStudent.studentName}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-20\">\n                <button mat-raised-button type=\"reset\" class=\"text-uppercase mr-12\" (click)=\"clearSearchForm()\"\n                    translate>{{'Clear' | translate}}</button>\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n                    translate>{{'Search' | translate}}</button>\n            </div>\n        </form>\n\n        <mat-divider *ngIf=\"isNavFromReports===false\" id=\"mat_divider\"></mat-divider>\n        <app-table *ngIf=\"studentAssessmentDeatils?.rows?.length; else multi_student_table\"\n            [settings]=\"studentAssessmentDeatils\" [rowTemplateRef]=\"studentGrade\"\n            (additionalButtonClick)=\"onAdditionalButtonClick($event)\" (changeRowDropdown)='changeRowDropdown($event)'\n            (selectedRows)='selectedRows($event)' [additionalExpantionPanelTemplateRef]=\"studentAssesmentGradeConfig\"\n            [massActionTemplateRef]=\"massActions\" [showAdditonalExpansionPanel]=\"setGradeForm\"\n            (getTableData)='getStudentTableData($event)'></app-table>\n        <ng-template #multi_student_table>\n            <app-table\n                *ngIf=\"(testEmitter$ | async) && rows && rows !== undefined && rows !== null && rows.length > 0 && classAssessmentGradesFormGroup.valid\"\n                [settings]=\"tableSettings\" (additionalButtonClick)=\"onAdditionalButtonClick($event)\"\n                (getTableData)='getTableData($event)' (selectedRows)='selectedRows($event)'\n                (changeRowDropdown)='changeRowDropdown($event)' [rowTemplateRef]=\"studentGrade\"\n                [additionalExpantionPanelTemplateRef]=\"studentGradeAssesmentConfig\"\n                [massActionTemplateRef]=\"massActions\" [showAdditonalExpansionPanel]=\"setGradeForm\">\n            </app-table>\n        </ng-template>\n        <div *ngIf=\"isSearchPerformed && classAssessmentGradesFormGroup.valid\" class=\"errorMsg\">\n            <p *ngIf=\"isStudentSearch && !rows.length\" class=\"red-text text-center mb-0 font-weight-bold p-24\"\n                translate>Assessment Parameter Configuration is missing for the Student's Class and/or Section</p>\n            <p *ngIf=\"!isStudentSearch && !rows?.length\" class=\"red-text text-center mb-0 font-weight-bold p-24\"\n                translate>No Data Found</p>\n        </div>\n    </div>\n</div>\n<ng-template #studentGradeAssesmentConfig>\n    <form (ngSubmit)=\"updateAssessmentConfiguration('updateAssesmentGradesFormGroup')\"\n        [formGroup]=\"updateAssesmentGradesFormGroup\" class=\"mt-24\" fxLayout=\"column\">\n        <div class=\"text-center accent-fg\">{{'Please Select a Grade for the Selected Assessments.' | translate}}</div>\n        <div fxLayout=\"row\" fxFlex=\"100\" class=\"mt-20\" fxLayoutAlign=\"center center\">\n            <mat-form-field appearance=\"outline\" class=\"px-sm-12\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill\n                fxFlex.gt-sm=\"50\" *ngFor=\"let assesmentSubCat of availableAssessmentSubCategories\">\n                <mat-label #grade translate>{{assesmentSubCat.name}}</mat-label>\n                <mat-select [formControlName]=\"assesmentSubCat.name\" required>\n                    <mat-option *ngFor=\"let option of assesmentSubCat.options\" [value]=\"option.value\">\n                        {{option.label}}\n                    </mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]=\"grade.innerText\"\n                        [validationControl]=\"updateAssesmentGradesFormGroup.controls.Grade\" [doValidate]=true>\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n            <button mat-raised-button type=\"button\" class=\"text-uppercase\"\n                (click)=\"setGrade(false)\">{{'Cancel' | translate}}</button>\n            <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase mx-12\"\n                translate>{{'Submit' | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n\n\n<ng-template #studentAssesmentGradeConfig>\n    <form (ngSubmit)=\"updateAssessmentConfiguration('studentGradeAssessmentForm')\"\n        [formGroup]=\"studentGradeAssessmentForm\" class=\"mt-24\" fxLayout=\"column\">\n        <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border border\">\n            <mat-list-item fxLayout=\"column\" fxFlex=\"50\" *ngIf=\"rows[0]?.studentName\" translate>Student\n            </mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.studentName\" fxLayout=\"column\" fxFlex=\"50\">\n                {{rows[0].studentName}}</mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.className\" fxLayout=\"column\" fxFlex=\"50\" translate>Class\n            </mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.className\" fxLayout=\"column\" fxFlex=\"50\">\n                {{rows[0].className}}</mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.sectionName\" fxLayout=\"column\" fxFlex=\"50\" translate>Section\n            </mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.sectionName\" fxLayout=\"column\" fxFlex=\"50\">\n                {{rows[0].sectionName}}</mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.gradeTermName\" fxLayout=\"column\" fxFlex=\"50\" translate>Grading Term\n            </mat-list-item>\n            <mat-list-item *ngIf=\"rows[0]?.gradeTermName\" fxLayout=\"column\" fxFlex=\"50\">\n                {{rows[0].gradeTermName}}</mat-list-item>\n        </mat-list>\n        <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\" class=\"mt-20\">\n            <mat-form-field appearance=\"outline\" class=\"px-sm-12\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n                fxFlexFill>\n                <mat-label #grade translate>Student Grade</mat-label>\n                <mat-select formControlName=\"studentGrade\">\n                    <mat-option *ngFor=\"let grade of gradeIndicatorList\" [value]=\"grade.value\">\n                        {{grade.label}}\n                    </mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]=\"grade.innerText\"\n                        [validationControl]=\"studentGradeAssessmentForm.controls.studentGrade\" [doValidate]=true>\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n            <button mat-raised-button type=\"button\" class=\"text-uppercase\"\n                (click)=\"setGrade(false)\">{{'Cancel' | translate}}</button>\n            <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase mx-12\"\n                translate>{{'Submit' | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #massActions>\n    <button mat-raised-button type=\"button\" class=\"mx-4 text-uppercase\" color=\"accent\" (click)=\"setGrade(true)\"\n        [disabled]=\"setGradeForm\" translate>{{'Set Grade' | translate}}</button>\n</ng-template>\n\n<ng-template #studentGrade let-row=\"row\" let-name=\"name\" let-value=\"value\" let-columnIndex=\"columnIndex\">\n    <mat-form-field style=\"padding: 10px 0 0;\">\n        <mat-select [placeholder]=\"\" [(value)]=\"value\"\n            (selectionChange)=\"onDropDownChange(row, $event.value, name,  columnIndex)\">\n            <mat-option *ngFor=\"let option of gradeIndicatorList\" [value]=\"option.value\">\n                {{option.label }} </mat-option>\n        </mat-select>\n        <mat-icon class=\"tick-position green-fg\" *ngIf=\"dropdownChangeIndex['check' + name + '_' + columnIndex]\">check\n        </mat-icon>\n        <mat-icon class=\"tick-position red-fg\" *ngIf=\"dropdownChangeIndex['error' + name + '_' + columnIndex]\">error\n        </mat-icon>\n        <mat-spinner class=\"spinner-position\" [diameter]=\"20\" color=\"accent\"\n            *ngIf=\"dropdownChangeIndex['spinner_' + name + '_' + columnIndex]\"></mat-spinner>\n    </mat-form-field>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tick-position {\n  position: absolute;\n  right: -35px; }\n\n.spinner-position {\n  position: absolute;\n  right: -35px;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvY2xhc3MtYXNzZXNzbWVudC1ncmFkZXMvY2xhc3MtYXNzZXNzbWVudC1ncmFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2FkZW1pY3MvZ3JhZGluZy9jbGFzcy1hc3Nlc3NtZW50LWdyYWRlcy9jbGFzcy1hc3Nlc3NtZW50LWdyYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrLXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTM1cHg7XG59O1xuXG4uc3Bpbm5lci1wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0zNXB4O1xuICAgIHRvcDoxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ClassAssessmentGradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassAssessmentGradesComponent", function() { return ClassAssessmentGradesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var _service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/assessment-service/api/assessment-parameters.service */ "./src/app/service/assessment-service/api/assessment-parameters.service.ts");
/* harmony import */ var _service_grading_service_api_student_assessment_grade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/grading-service/api/student-assessment-grade.service */ "./src/app/service/grading-service/api/student-assessment-grade.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/report-card-service/grade-report.service */ "./src/app/service/report-card-service/grade-report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
















var ClassAssessmentGradesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassAssessmentGradesComponent, _super);
    function ClassAssessmentGradesComponent(commonComponent, classSectionService, studentDbService, _gradingTermConfigurationService, _assessmetParametersService, _studentAssessmentGradeService, route, fb, studentDatabaseService, commonService, dialog, snackBar, changeDetecor, gradeReportService) {
        var _this = _super.call(this) || this;
        _this.commonComponent = commonComponent;
        _this.classSectionService = classSectionService;
        _this.studentDbService = studentDbService;
        _this._gradingTermConfigurationService = _gradingTermConfigurationService;
        _this._assessmetParametersService = _assessmetParametersService;
        _this._studentAssessmentGradeService = _studentAssessmentGradeService;
        _this.route = route;
        _this.fb = fb;
        _this.studentDatabaseService = studentDatabaseService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.changeDetecor = changeDetecor;
        _this.gradeReportService = gradeReportService;
        _this.gradingTerms = [];
        // assessmentParams = Promise.resolve([]);
        _this.assessmentParams = [];
        // assessmentGroupsList = Promise.resolve([]);
        _this.assessmentGroupsList = [];
        // assessmentCategoriesList = Promise.resolve([]);
        _this.assessmentCategoriesList = [];
        _this.classAssmentGroupsFormSubmitted = false;
        _this.tableSettings = {};
        _this.isEditMode = false;
        _this.setGradeForm = false;
        _this.editButton = {};
        _this.isSearchPerformed = false;
        _this.isShowAll = true;
        _this.isSubcategoiriesAvailable = false;
        _this.isStaffLogin = false;
        _this.staffInfo = [];
        _this.hideButtons = false;
        _this.testEmitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](_this.testVariable);
        _this.filterdStudents = [];
        _this.currentComponent = 'ClassAssessmentGradesComponent';
        _this.gradeListIndicator = [];
        _this.tempFilteredStudents = [];
        _this.isStudentSearch = false;
        _this.isNavFromReports = false;
        return _this;
    }
    ClassAssessmentGradesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.dropdownChangeIndex = [];
        if (this.studentData) {
            this.isNavFromReports = true;
            this.classAssessmentGradesFormGroup.controls['studentNames'].setValue(this.studentData.student.value);
            // this.classAssessmentGradesFormGroup.controls['searchByName'].setValue('name');
            // this.classAssessmentGradesFormGroup.value.searchByName = 'name';
            this.getAvailableSections(this.studentData.schoolBoardId, this.studentData.classId);
            this.getGradingTerms(this.studentData.classId, this.studentData.sectionId);
            this.classAssessmentGradesFormGroup.patchValue(this.studentData);
            this.getAssessmentConfigurationList();
        }
        else {
            this.isNavFromReports = false;
        }
    };
    ClassAssessmentGradesComponent.prototype.initializeForm = function () {
        this.filterView = {
            sortBy: '',
            sortOrder: 0,
            schoolAcademicSessionStudentId: ''
        };
        this.classAssessmentGradesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            gradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            assessmentCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            assessmentGroupId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            assessmentParameterId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            // searchByName: new FormControl('assessment'),
            studentNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        this.studentGradeAssessmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            studentGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.studentGradeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            grades: this.fb.array([])
        });
        if (this.getTokenParam('_as')) {
            this.getAvailableSchoolBoards('classAssessmentGradesFormGroup', 'schoolBoardId');
        }
    };
    ClassAssessmentGradesComponent.prototype.getStudent = function (user) {
        if (user) {
            this.displayName = user.label === undefined ? user : user.label;
            return this.displayName;
        }
    };
    ClassAssessmentGradesComponent.prototype.getStudents = function () {
        var _this = this;
        if (this.classAssessmentGradesFormGroup.value.schoolBoardId &&
            this.classAssessmentGradesFormGroup.value.classId &&
            this.classAssessmentGradesFormGroup.value.sectionId) {
            this.studentDatabaseService
                .studentNamesBaseOnAcademicSession(null, this.classAssessmentGradesFormGroup.value.schoolBoardId, this.classAssessmentGradesFormGroup.value.classId, this.classAssessmentGradesFormGroup.value.sectionId, null)
                .subscribe(function (res) {
                _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
            });
        }
    };
    ClassAssessmentGradesComponent.prototype.onSelectSchoolBoard = function (event) {
        this.classAssessmentGradesFormGroup.patchValue({
            classId: '',
            gradingTermId: '',
            sectionId: '',
            assessmentGroupId: '',
            assessmentCategoryId: '',
            assessmentParameterId: ''
        });
        this.resetRowsOnChange();
        this.getAvailableClasses(event.value);
        this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
        this.filterdStudents = [];
        this.getStudents();
    };
    ClassAssessmentGradesComponent.prototype.onClassChange = function (classId) {
        this.classAssessmentGradesFormGroup.patchValue({
            gradingTermId: '',
            sectionId: '',
            assessmentGroupId: '',
            assessmentCategoryId: '',
            assessmentParameterId: ''
        });
        this.resetRowsOnChange();
        this.getAvailableSections(this.classAssessmentGradesFormGroup.value.schoolBoardId, classId);
        // if (!this.classAssessmentGradesFormGroup.value.searchByName) {
        //   // this.classAssessmentGradesFormGroup.value.searchByName = 'assessment';
        //   // this.classAssessmentGradesFormGroup.controls['searchByName'].patchValue('assessment');
        // }
        this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
        this.filterdStudents = [];
        this.getStudents();
    };
    ClassAssessmentGradesComponent.prototype.onSectionChange = function (sectionId, isDropdownChange) {
        this.resetRowsOnChange();
        if (isDropdownChange) {
            this.classAssessmentGradesFormGroup.patchValue({
                gradingTermId: '',
                assessmentGroupId: '',
                assessmentCategoryId: '',
                assessmentParameterId: ''
            });
            this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
            this.filterdStudents = [];
            this.getGradingTerms(this.classAssessmentGradesFormGroup.value.classId, sectionId);
            this.getAssesmentGroups(this.classAssessmentGradesFormGroup.value.classId, sectionId);
        }
        else {
            var existingSectionId = this.classAssessmentGradesFormGroup.value.sectionId;
            if (existingSectionId !== sectionId) {
                this.classAssessmentGradesFormGroup.patchValue({
                    gradingTermId: '',
                });
                this.getGradingTerms(this.classAssessmentGradesFormGroup.value.classId, sectionId);
                this.getAssesmentGroups(this.classAssessmentGradesFormGroup.value.classId, sectionId);
            }
            this.classAssessmentGradesFormGroup.controls['sectionId'].patchValue(sectionId);
        }
        this.getStudents();
    };
    ClassAssessmentGradesComponent.prototype.onGradingTermChange = function (gradingTerm) {
        this.classAssessmentGradesFormGroup.patchValue({
            assessmentGroupId: '',
            assessmentCategoryId: '',
            assessmentParameterId: ''
        });
        this.resetRowsOnChange();
        var classId = this.classAssessmentGradesFormGroup.value.classId;
        var sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
        this.getAssesmentGroups(classId, sectionId);
    };
    ClassAssessmentGradesComponent.prototype.onSelectAssessmentGroup = function (assesmentGroupId) {
        this.classAssessmentGradesFormGroup.patchValue({ assessmentCategoryId: '', assessmentParameterId: '' });
        this.getAssessmentCategory(assesmentGroupId);
        this.getAssessmentParams(null);
        this.resetRowsOnChange();
    };
    ClassAssessmentGradesComponent.prototype.onSelectAssessmentCategory = function (assesmentCategoryId) {
        this.classAssessmentGradesFormGroup.patchValue({ assessmentParameterId: '' });
        this.getAssessmentParams(assesmentCategoryId);
        this.resetRowsOnChange();
    };
    ClassAssessmentGradesComponent.prototype.getGradingTerms = function (classId, sectionId) {
        var _this = this;
        if (!classId || !sectionId) {
            return;
        }
        this._gradingTermConfigurationService.gradingTermsDropdownByClassSectionGet(classId, sectionId).subscribe(function (response) {
            if (response != null && response.length) {
                var gardingTermsData_1 = [];
                response.forEach(function (element) {
                    gardingTermsData_1.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.gradingTerms = gardingTermsData_1;
            }
            else {
                _this.gradingTerms = [];
            }
        });
    };
    ClassAssessmentGradesComponent.prototype.getAssesmentGroups = function (classId, sectionId) {
        var _this = this;
        if (!classId || !sectionId) {
            return;
        }
        this._assessmetParametersService.fetchClassAssesmentGroupDropDownList(classId, sectionId).subscribe(function (response) {
            if (response != null && response.length) {
                var tempAssessmentGroups_1 = [];
                response.forEach(function (element) {
                    tempAssessmentGroups_1.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.assessmentGroupsList = tempAssessmentGroups_1;
            }
            else {
                _this.assessmentGroupsList = [];
            }
        });
    };
    ClassAssessmentGradesComponent.prototype.getAssessmentCategory = function (assessmentGroupId) {
        var _this = this;
        var classId = this.classAssessmentGradesFormGroup.value.classId;
        var sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
        this._assessmetParametersService.fetchClassAssesmentCategoryDropDownList(classId, sectionId, assessmentGroupId).subscribe(function (response) {
            if (response != null && response.length) {
                var tempAssessmentCats_1 = [];
                response.forEach(function (element) {
                    tempAssessmentCats_1.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.assessmentCategoriesList = tempAssessmentCats_1;
            }
            else {
                _this.assessmentCategoriesList = [];
            }
        });
    };
    ClassAssessmentGradesComponent.prototype.getAssessmentParams = function (assementCatgoeyId) {
        var _this = this;
        this.assessmentParams = [];
        var classId = this.classAssessmentGradesFormGroup.value.classId;
        var sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
        var assessmentGroupId = this.classAssessmentGradesFormGroup.value.assessmentGroupId;
        this._assessmetParametersService.fetchClassAssesmentParameterDropDownList(classId, sectionId, assessmentGroupId, assementCatgoeyId).subscribe(function (response) {
            if (response != null && response.length) {
                var tempAssessmentCats_2 = [];
                response.forEach(function (element) {
                    tempAssessmentCats_2.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.assessmentParams = tempAssessmentCats_2;
            }
            else {
                _this.assessmentParams = [];
            }
        });
    };
    ClassAssessmentGradesComponent.prototype.getAssessmentConfigurationList = function () {
        var _this = this;
        this.dropdownChangeIndex = [];
        // this.isEditMode = (this.isEditMode || this.isNavFromReports === true) ? true : false;
        if (this.studentAssessmentDeatils && !this.isNavFromReports && !this.isEditMode) {
            this.studentAssessmentDeatils.rows = [];
        }
        this.isStudentSearch = false;
        this.classAssmentGroupsFormSubmitted = true;
        if (!this.classAssessmentGradesFormGroup.valid) {
            this.studentAssessmentDeatils.rows = [];
            this.isEditMode = false;
            return;
        }
        var sort = {
            sortBy: this.filterView.sortBy,
            sortOrder: this.filterView.sortOrder
        };
        if (this.studentData && this.isNavFromReports) {
            this.classAssessmentGradesFormGroup.controls['studentNames'].setValue(this.studentData.student.value);
            this.classAssessmentGradesFormGroup.patchValue(this.studentData);
        }
        this.filterView = this.classAssessmentGradesFormGroup.value;
        this.filterView.sortOrder = sort.sortOrder;
        this.filterView.sortBy = sort.sortBy;
        this.filterView.schoolAcademicSessionStudentId = this.classAssessmentGradesFormGroup.value.studentNames;
        this.isStudentSearch = false;
        this._studentAssessmentGradeService.fetchAssessmentGrades(this.filterView, this.isShowAll).subscribe(function (response) {
            if (response.gradeIndicatorList !== null) {
                _this.setIndicators(response);
            }
            _this.rows = response.studentAssesmentDetails;
            _this.updateTableComponent();
            _this.isSearchPerformed = true;
        });
    };
    ClassAssessmentGradesComponent.prototype.setIndicators = function (response) {
        var _this = this;
        this.gradeIndicatorList = [];
        this.testVariable += '-bar';
        this.testEmitter$.next(this.testVariable);
        if (response.classAndSections && this.isStaffLogin) {
            this.staffInfo = response.classAndSections;
            this.checkStaff();
        }
        response.gradeIndicatorList.forEach(function (gradeIndicator) {
            _this.gradeIndicatorList.push({ 'value': gradeIndicator.id, 'label': gradeIndicator.name });
        });
    };
    ClassAssessmentGradesComponent.prototype.clearSearchForm = function () {
        this.isSubcategoiriesAvailable = false;
        this.classAssmentGroupsFormSubmitted = false;
        this.classAssessmentGradesFormGroup.reset();
        this.availableClasses = [];
        this.availableSections = [];
        this.gradingTerms = [];
        this.assessmentGroupsList = ([]);
        this.assessmentCategoriesList = ([]);
        this.assessmentParams = ([]);
        this.filterdStudents = [];
        this.resetRowsOnChange();
    };
    ClassAssessmentGradesComponent.prototype.resetRowsOnChange = function () {
        this.rows = [];
        this.tableSettings = {};
        this.studentAssessmentDeatils = {};
        // this.rows = [];
        this.isEditMode = false;
        this.isSearchPerformed = false;
        this.isSubcategoiriesAvailable = false;
    };
    ClassAssessmentGradesComponent.prototype.selectedRows = function (event) {
        this.selectedRowsData = event;
        this.setGradeForm = (this.setGradeForm && this.selectedRowsData.length > 0) ? this.setGradeForm : false;
    };
    ClassAssessmentGradesComponent.prototype.onAdditionalButtonClick = function (event) {
        switch (event) {
            case 'edit':
                this.isEditMode = true;
                this.dropdownChangeIndex = [];
                this.isStudentSearch ? this.setAssessmentData() : this.updateTableComponent();
                break;
            case 'show_all':
                this.isShowAll = true;
                this.getAssessmentConfigurationList();
                break;
            case 'show_empty':
                this.isShowAll = false;
                this.getAssessmentConfigurationList();
                break;
            case 'back':
                this.isEditMode = false;
                this.getAssessmentConfigurationList();
                break;
        }
    };
    ClassAssessmentGradesComponent.prototype.updateTableComponent = function () {
        var _this = this;
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'rollNo', header: 'Roll Number', sort: true },
            { field: 'admissionNumber', header: 'Admission Number', sort: true },
            { field: 'assessmentGroupName', header: 'Assessment Group', sort: true },
            { field: 'assessmentCategoryName', header: 'Assessment Category', sort: true },
            { field: 'assessmentSubCategoryName', header: 'Assessment SubCategory', sort: true },
            { field: 'assessmentParameterName', header: 'Assessment Parameter', sort: true }
        ];
        if (!this.hideButtons) {
            if (this.isEditMode) {
                this.editButton = {
                    name: 'Back',
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
        }
        if (this.rows != null) {
            this.availableAssessmentSubCategories = [];
            var group_1 = this.fb.group({});
            this.rows.forEach(function (row) {
                if (row.studentAssessmentSubCategories != null) {
                    _this.isSubcategoiriesAvailable = true;
                    row.studentAssessmentSubCategories.forEach(function (studentAssessmentSubCategory) {
                        if (_this.columns.map(function (column) { return column.field; })
                            .indexOf(studentAssessmentSubCategory.subCategoryName) === -1) {
                            _this.availableAssessmentSubCategories.push({
                                name: studentAssessmentSubCategory.subCategoryName,
                                options: _this.gradeIndicatorList
                            });
                            group_1.addControl(studentAssessmentSubCategory.subCategoryName, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
                            var columnData = void 0;
                            if (!_this.isEditMode) {
                                columnData = {
                                    field: studentAssessmentSubCategory.subCategoryName,
                                    header: studentAssessmentSubCategory.subCategoryName,
                                    sort: false
                                };
                            }
                            else {
                                columnData = {
                                    field: studentAssessmentSubCategory.subCategoryName,
                                    header: studentAssessmentSubCategory.subCategoryName,
                                    sort: false,
                                    options: _this.gradeIndicatorList,
                                    // dropdownInputRequired: true
                                    rowTempalteRequired: true
                                };
                            }
                            _this.columns.push(columnData);
                        }
                        if (studentAssessmentSubCategory.gradeConfigurationId !== null) {
                            var gradeConfigValue = _this.gradeIndicatorList.
                                find(function (x) { return x.value === studentAssessmentSubCategory.gradeConfigurationId; }).label;
                            row[studentAssessmentSubCategory.subCategoryName] = (!_this.isEditMode) ? gradeConfigValue : studentAssessmentSubCategory.gradeConfigurationId;
                        }
                        else {
                            row[studentAssessmentSubCategory.subCategoryName] = '';
                        }
                    });
                }
                else {
                    if (row.gradeConfigurationId !== null) {
                        var gradeConfigValue = _this.gradeIndicatorList.
                            find(function (x) { return x.value === row.gradeConfigurationId; }).label;
                        row['grade'] = (!_this.isEditMode) ? gradeConfigValue : row.gradeConfigurationId;
                    }
                }
            });
            if (!this.isSubcategoiriesAvailable) {
                this.availableAssessmentSubCategories.push({
                    name: 'Grade',
                    options: this.gradeIndicatorList
                });
                group_1.addControl('Grade', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required));
                var columnData = void 0;
                if (!this.isEditMode) {
                    columnData = {
                        field: 'grade',
                        header: 'Grade',
                        sort: false
                    };
                }
                else {
                    columnData = {
                        field: 'grade',
                        header: 'Grade',
                        sort: false,
                        options: this.gradeIndicatorList,
                        // dropdownInputRequired: true
                        rowTempalteRequired: true
                    };
                }
                this.columns.push(columnData);
            }
            this.updateAssesmentGradesFormGroup = group_1;
        }
        this.tableSettings = {
            model: this.filterView,
            rows: this.rows,
            columns: this.columns,
            visibleSelectAll: !this.hideButtons && this.isEditMode,
            isSelectRowRequired: !this.hideButtons && this.isEditMode,
            isMultiDeleteRequired: false,
            padding: true,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Class Assessment Grades'
                },
                additionalButtons: [
                    this.editButton,
                ]
            }
        };
        if (this.hideButtons) {
            this.tableSettings.headerOperations.additionalButtons = [];
        }
        this.isSearchPerformed = (this.rows != null) ? false : true;
        setTimeout(function () {
            _this.scrollIntoViewById('mat_divider');
        });
    };
    ClassAssessmentGradesComponent.prototype.changeRowDropdown = function (data, rowIndex, columnIndex) {
        var _this = this;
        this.classAssesmentGradesParamListViewModel = {};
        this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
        this.preparePostData(data);
        this._studentAssessmentGradeService.createClassAssessmentParameters(this.classAssesmentGradesParamListViewModel).subscribe(function (response) {
            _this.dropdownChangeIndex['check' + rowIndex + '_' + columnIndex] = true;
            _this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
            _this.dropdownChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
            // this.getAssessmentConfigurationList();
            _this.changeDetecor.detectChanges();
        }, function (error) {
            _this.dropdownChangeIndex['error' + rowIndex + '_' + columnIndex] = true;
            _this.dropdownChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
            _this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
            _this.changeDetecor.detectChanges();
        });
    };
    ClassAssessmentGradesComponent.prototype.onDropDownChange = function (row, value, rowIndex, columnIndex) {
        row['newValue'] = value;
        row[this.columns[columnIndex].field] = value;
        this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = true;
        this.changeRowDropdown(row, rowIndex, columnIndex);
    };
    ClassAssessmentGradesComponent.prototype.updateAssessmentConfiguration = function (form) {
        var _this = this;
        if (form === 'updateAssesmentGradesFormGroup' && this.updateAssesmentGradesFormGroup.invalid) {
            return;
        }
        this.classAssesmentGradesParamListViewModel = {};
        this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
        if (this.isStudentSearch) {
            if (!this.studentGradeAssessmentForm.valid) {
                return;
            }
            this.selectedRowsData.forEach(function (row) {
                _this.preparePostData(row, _this.studentGradeAssessmentForm.value);
            });
        }
        else {
            this.selectedRowsData.forEach(function (row) {
                _this.preparePostData(row, _this.updateAssesmentGradesFormGroup.value);
            });
        }
        if (this.classAssesmentGradesParamListViewModel && this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.length) {
            this._studentAssessmentGradeService.createClassAssessmentParameters(this.classAssesmentGradesParamListViewModel).subscribe(function (response) {
                _this.setGradeForm = false;
                _this.studentGradeAssessmentForm.reset();
                _this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_15__["AppSettings"].HIDE);
                _this.changeDetecor.detectChanges();
                _this.isEditMode = false;
                _this.getAssessmentConfigurationList();
            });
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_15__["AppSettings"].SELECT_ASSESSMENT, true);
        }
    };
    ClassAssessmentGradesComponent.prototype.setGrade = function (isShowGradeSetup) {
        if (isShowGradeSetup) {
            this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_15__["AppSettings"].SHOW);
        }
        else {
            this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_15__["AppSettings"].HIDE);
        }
        this.setGradeForm = isShowGradeSetup;
    };
    ClassAssessmentGradesComponent.prototype.preparePostData = function (data, massUpdateData) {
        var categoryUpdatedInfo = (!massUpdateData) ? data : massUpdateData;
        // this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
        if (this.isStudentSearch) {
            this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.push({
                gradeTermId: data.gradeTermId,
                schoolAcademicSessionStudentId: data.schoolAcademicSessionStudentId,
                assesmentSubCategoryId: (data.assessmentSubCategoryId) ? data.assessmentSubCategoryId : null,
                gradeConfigurationId: !massUpdateData ? data.newValue : categoryUpdatedInfo.studentGrade,
                classAssesmentParameterId: data.id,
                studentAssesmentId: data.studentAssessmentId
            });
        }
        else {
            this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.push({
                gradeTermId: data.gradingTermId,
                schoolAcademicSessionStudentId: data.schoolAcademicSessionStudentId,
                assesmentSubCategoryId: data.assessmentSubCategoryId ? data.assessmentSubCategoryId : null,
                gradeConfigurationId: (!massUpdateData) ? categoryUpdatedInfo.grade : categoryUpdatedInfo.Grade,
                classAssesmentParameterId: data.classAssessmentParameterId,
                studentAssesmentId: data.studentAssessmentId
            });
        }
    };
    ClassAssessmentGradesComponent.prototype.getTableData = function (_event) {
        this.filterView = _event;
        this.getAssessmentConfigurationList();
    };
    ClassAssessmentGradesComponent.prototype.getStudentTableData = function (_event) {
        this.filterView = _event;
        this.getAssessmentConfigurationList();
    };
    ClassAssessmentGradesComponent.prototype.checkStaff = function () {
        var _this = this;
        if (this.isStaffLogin) {
            if (this.staffInfo.find(function (x) { return x.classId === _this.classAssessmentGradesFormGroup.controls.classId.value
                && x.sectionId === _this.classAssessmentGradesFormGroup.controls.sectionId.value && x.isClassTeacher === true; }) === undefined) {
                this.hideButtons = true;
                return;
            }
            else {
                this.hideButtons = false;
            }
        }
        if (!this.hideButtons) {
            if (this.isEditMode) {
                this.editButton = {
                    name: 'Back',
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
        }
    };
    ClassAssessmentGradesComponent.prototype.getSelectedStudent = function (value) {
        if (value.sectionId) {
            this.onSectionChange(value.sectionId);
        }
    };
    ClassAssessmentGradesComponent.prototype.setAssessmentData = function () {
        var _this = this;
        if (this.rows) {
            if (!this.hideButtons) {
                if (this.isEditMode) {
                    this.editButton = {
                        name: 'Back',
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
            }
            this.columns = [
                { field: 'assessmentGroup', header: 'Assessment Group', sort: true },
                { field: 'assessmentCategory', header: 'Assessment Category', sort: true },
                { field: 'assessmentParameter', header: 'Assessment Parameter', sort: true },
                { field: 'assessmentSubCategory', header: 'Assessment Subcategory', sort: true },
                {
                    field: 'studentGrade', header: 'Student Grade', sort: this.isEditMode ? true : false,
                    options: this.isEditMode ? this.gradeIndicatorList : null,
                    // dropdownInputRequired: this.isEditMode ? true : false
                    rowTempalteRequired: this.isEditMode ? true : false
                }
            ];
            this.studentAssessmentDeatils = {
                model: this.filterView,
                rows: this.rows,
                columns: this.columns,
                componentName: this.currentComponent,
                visibleSelectAll: !this.hideButtons && this.isEditMode,
                isSelectRowRequired: !this.hideButtons && this.isEditMode,
                isMultiDeleteRequired: false,
                padding: true,
                headerOperations: {
                    additionalButtons: [
                        this.editButton,
                    ]
                }
                // rowGroupingColumns: ['assessmentGroup', 'assessmentCategory', 'assessmentParameter']
            };
            var control = this.studentGradeForm.controls['grades'];
            for (var i = 0; i < this.rows.length; i++) {
                control.push(this.studentGrades(this.rows[i].studentGrade));
            }
        }
        if (this.isNavFromReports) {
            this.studentAssessmentDeatils.headerOperations.additionalButtons = [];
        }
        this.rows.forEach(function (row) {
            if (row.gradeConfigurationId !== null) {
                var gradeConfigValue = _this.gradeIndicatorList.
                    find(function (x) { return x.value === row.gradeConfigurationId; }).label;
                row['studentGrade'] = (!_this.isEditMode) ? gradeConfigValue : row.gradeConfigurationId;
            }
        });
        setTimeout(function () {
            _this.scrollIntoViewById('mat_divider');
        });
    };
    ClassAssessmentGradesComponent.prototype.studentGrades = function (grade) {
        return this.fb.group({
            studentGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](grade, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    };
    ClassAssessmentGradesComponent.prototype.searchByOption = function (event) {
        this.tableSettings = {};
        this.studentAssessmentDeatils = {};
        this.rows = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassAssessmentGradesComponent.prototype, "studentData", void 0);
    ClassAssessmentGradesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-class-assessment-grades',
            template: __webpack_require__(/*! ./class-assessment-grades.component.html */ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.html"),
            providers: [app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_11__["StudentDBService"], app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_12__["GradeReportService"], _service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_14__["StudentDatabaseService"]],
            styles: [__webpack_require__(/*! ./class-assessment-grades.component.scss */ "./src/app/modules/academics/grading/class-assessment-grades/class-assessment-grades.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"],
            _service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_6__["ClassSectionService"],
            app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_11__["StudentDBService"],
            _service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_7__["GardeTermConfigurationService"],
            _service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentParameterService"],
            _service_grading_service_api_student_assessment_grade_service__WEBPACK_IMPORTED_MODULE_9__["StudentAssessmentGradeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_14__["StudentDatabaseService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            app_service_report_card_service_grade_report_service__WEBPACK_IMPORTED_MODULE_12__["GradeReportService"]])
    ], ClassAssessmentGradesComponent);
    return ClassAssessmentGradesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/schedules.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/schedules.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\"  (getTableData)='getAllTestScheduleTableData($event)'\n           (rowBasedAction)='ClassSectionrowActions($event)'>\n</app-table>\n"

/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/schedules.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/schedules.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvdGVzdC1zY2hlZHVsZS9zY2hlZHVsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/schedules.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/schedules.component.ts ***!
  \********************************************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/grading-service/api/test-schedule-service */ "./src/app/service/grading-service/api/test-schedule-service.ts");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var SchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchedulesComponent, _super);
    function SchedulesComponent(commonService, testScheduleService, snackBar, dialogRef, router) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.testScheduleService = testScheduleService;
        _this.snackBar = snackBar;
        _this.dialogRef = dialogRef;
        _this.router = router;
        _this.rowBasedAction = [];
        _this.isFormSubmitted = false;
        _this.showCreateBtn = true;
        _this.isStaffLogin = false;
        _this.currentComponent = 'SchedulesComponent';
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    SchedulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        if (!this.getTokenParam('_as')) {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
            this.initializeTableSettings();
        }
        else {
            this.getAllTestSchedules();
        }
    };
    SchedulesComponent.prototype.initializeForm = function () {
        this.classForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            classReferenceTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(135)]),
        });
    };
    SchedulesComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'boardName', header: 'Board', sort: true },
            { field: 'termName', header: 'Grade Term', sort: true },
            { field: 'testType', header: 'Test Type', sort: true },
            { field: 'testName', header: 'Test Name', sort: true },
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'course', header: 'Subject', sort: true },
            { field: 'testDate', header: 'Test Date', sort: true },
            { field: 'testStartDate', header: 'Start Date', sort: true },
            { field: 'testEndDate', header: 'End Date', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    SchedulesComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            model: this.filterViewModel,
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            hideHeader: true,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Test Schedules/Marks'
                },
            }
        };
    };
    SchedulesComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
            classes: [],
            sections: [],
            terms: [],
            boardIds: [],
            testTypes: [],
            testNames: [],
            statuses: [],
            isPostToCalendar: [],
            courses: [],
            testStartDatesBegin: null,
            testStartDatesEnd: null,
            testEndDateBegin: null,
            testEndDateEnd: null,
            testScheduleDateBegin: null,
            testScheduleDateEnd: null
        };
    };
    SchedulesComponent.prototype.getAllTestSchedules = function () {
        var _this = this;
        this.testScheduleService.getTestSchedules(this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.terms, this.filterViewModel.boardIds, this.filterViewModel.testTypes, this.filterViewModel.testNames, this.filterViewModel.testStartDatesBegin, this.filterViewModel.testStartDatesEnd, this.filterViewModel.testEndDateBegin, this.filterViewModel.testEndDateEnd, this.filterViewModel.isPostToCalendar, this.filterViewModel.classes, this.filterViewModel.sections, this.filterViewModel.statuses, this.filterViewModel.courses, this.filterViewModel.testScheduleDateBegin, this.filterViewModel.testScheduleDateEnd, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (data) {
            _this.updateTestSchedulesResponse(data);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchedulesComponent.prototype.updateTestSchedulesResponse = function (data) {
        var _this = this;
        if (data.testScheduleListViewModel) {
            this.rows = data.testScheduleListViewModel.list;
            this.totalRowsCount = data.testScheduleListViewModel.totalItems;
        }
        else {
            this.rows = [];
        }
        this.rows.forEach(function (e) {
            e.testStartDate = (e.testStartDate == null) ? null : _this.commonService.customDateFormat(e.testStartDate, _this.getSchoolDateFormat()).date;
            e.testEndDate = (e.testEndDate == null) ? null : _this.commonService.customDateFormat(e.testEndDate, _this.getSchoolDateFormat()).date;
            e.testDate = (e.testDate == null) ? null : _this.commonService.customDateFormat(e.testDate, _this.getSchoolDateFormat()).date;
            if (e.isEditable) {
                switch (true) {
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TEST_SCHEDULED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].COMPLETE,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].APPROVE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].COMPLETE
                            }, {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL
                            },
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS
                            }
                        ];
                        break;
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TEST_COMPLETED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL
                            },
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS
                            }
                        ];
                        break;
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TEST_CANCELED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS
                            }
                        ];
                        break;
                }
            }
        });
        this.tableSettings = {
            columns: this.columns,
            model: this.filterViewModel,
            rows: this.rows,
            componentName: this.currentComponent,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            isRowExpandRequired: false,
            infoButton: {
                required: true,
                text: 'Test Schedules/Marks'
            }
        };
        this.scrollIntoView('app-table');
    };
    SchedulesComponent.prototype.getAllTestScheduleTableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllTestSchedules();
    };
    SchedulesComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    SchedulesComponent.prototype.trimTextBoxSpaces = function (key) {
        this.classForm.controls[key].setValue(this.commonService.trimSpaces(this.classForm.controls[key].value));
    };
    SchedulesComponent.prototype.ClassSectionrowActions = function (response) {
        var _this = this;
        this.testScheduleId = response.clickedRow.id;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].COMPLETE.toLowerCase()) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].COMPLETE_TEST_SCHEDULE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    _this.testScheduleService.completeOrCancelSchedule(_this.testScheduleId, true).subscribe(function (res) { return _this.completeOrCancelRequest(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL.toLowerCase()) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CANCEL_TEST_SCHEDULE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    _this.testScheduleService.completeOrCancelSchedule(_this.testScheduleId, false).subscribe(function (res) { return _this.completeOrCancelRequest(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MARKS.toLowerCase()) {
            if (this.isStaffLogin) {
                this.router.navigate([_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"].Staff_Test_Grading + '/' + response.clickedRow.id, { operation: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TEST }]);
            }
            else {
                this.router.navigate([_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"].Test_Grading + '/' + response.clickedRow.id, { operation: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TEST }]);
            }
        }
    };
    SchedulesComponent.prototype.completeOrCancelRequest = function (response) {
        this.getAllTestSchedules();
        this.openSnackBar(response.messages.ResultMessage);
    };
    SchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedules-list',
            template: __webpack_require__(/*! ./schedules.component.html */ "./src/app/modules/academics/grading/test-schedule/schedules.component.html"),
            providers: [app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_3__["ClassesConfigService"], _service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_9__["TestScheduleService"]],
            styles: [__webpack_require__(/*! ./schedules.component.scss */ "./src/app/modules/academics/grading/test-schedule/schedules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_9__["TestScheduleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], SchedulesComponent);
    return SchedulesComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/test-schedule.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"index\" (selectedIndexChange)=\"selected($event)\" class=\"manage-institue mt-28\">\n  <mat-tab [active]=\"isTestsViewActive\">\n    <ng-template mat-tab-label><span translate>TESTS VIEW</span></ng-template>\n    <div [active]=\"isTestsViewActive\">\n      <ng-template matTabContent>\n        <app-table [settings]=\"tabSettings\" [templateRef]=\"testSchedules\" (getTableData)='testScheduleTableData($event)'\n          (rowBasedAction)='rowActions($event)' [rowExpandRef]=\"testClassSections\" (openAddForm)=\"onAddFormClick()\"\n          [closeRowForm]='closeAddPanel'>\n        </app-table>\n      </ng-template>\n    </div>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label translate><span translate>SCHEDULES VIEW</span></ng-template>\n    <div [active]=\"!isTestsViewActive\">\n      <ng-template matTabContent>\n        <app-schedules-list></app-schedules-list>\n      </ng-template>\n    </div>\n  </mat-tab>\n\n  <ng-template #testClassSections>\n    <app-table fxFlex=\"100\" [settings]=\"tableSettings\" (getTableData)='testClassSectionsTableData($event)'\n      (rowBasedAction)='ClassSectionrowActions($event)'>\n    </app-table>\n  </ng-template>\n\n  <ng-template #testSchedules>\n    <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"OnSelectionChange($event)\"\n      (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n      <mat-step [stepControl]=\"testTypeAndGradingForm\" [completed]=\"testTypeAndGradingForm.valid\">\n        <form fxLayout=\"column\" fxFlex=\"100\" [formGroup]=\"testTypeAndGradingForm\">\n          <ng-template matStepLabel><span translate>TestType & GradeTerm</span></ng-template>\n          <div class=\"pt-24 font-size-18\" translate>Please Select The Type And Grading Term For this Test</div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label #board translate>Board</mat-label>\n              <mat-select formControlName=\"boardId\" (selectionChange)=\"onSelectSchoolBoard($event.value)\" required>\n                <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n                  {{board.label}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='board.innerText'\n                  [validationControl]=\"testTypeAndGradingForm.controls.boardId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label #gradeTerm translate>Grading Term</mat-label>\n              <mat-select formControlName=\"gradeTermId\" (selectionChange)=\"onSelectGradingTerm($event.value)\" required>\n                <mat-option *ngFor=\"let gradeTerm of gradeTermList\" [value]=\"gradeTerm.value\">\n                  {{gradeTerm.label}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='gradeTerm.innerText'\n                  [validationControl]=\"testTypeAndGradingForm.controls.gradeTermId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxLayout.lt-sm=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-sm-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label #testType translate>Test Type</mat-label>\n              <mat-select formControlName=\"testTypeId\" required (selectionChange)=\"onTestTypeSelect($event.value)\">\n                <mat-option *ngFor=\"let testTypeId of testTypesList\" [value]=\"testTypeId.value\">\n                  {{testTypeId.label}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='testType.innerText'\n                  [validationControl]=\"testTypeAndGradingForm.controls.testTypeId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\" *ngIf=\"!isTestEdit\">\n              <mat-label #testMarks translate>Test Max Marks</mat-label>\n              <input (keyup)=\"preventSpace($event,'testTypeAndGradingForm','testMaxMarks')\" matInput formControlName=\"testMaxMarks\">\n              <mat-error>\n                <app-validation [labelName]='testMarks.innerText'\n                  [validationControl]=\"testTypeAndGradingForm.controls.testMaxMarks\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n          </div>\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-28\">\n            <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\" type=\"reset\"\n              class=\"text-uppercase mr-12\" translate>{{'Cancel' | translate}}\n            </button>\n            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\"\n              translate>{{'Next' | translate}}\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"testDetailsForm\" [completed]=\"testDetailsForm.valid\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexFill>\n          <form fxLayout=\"column\" fxFlex=\"100\" [formGroup]=\"testDetailsForm\" class=\"pr-16\" #testDetailForm=\"ngForm\">\n            <ng-template matStepLabel><span translate>Test Details</span></ng-template>\n            <div class=\"pt-24 font-size-18\" translate>Please Enter Details Regarding this Test</div>\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n              <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                <mat-label #testName translate>Name</mat-label>\n                <input (keyup)=\"preventSpace($event,'testDetailsForm','testName')\" (blur)=\"trimTextBoxSpaces('testDetailsForm','testName')\"\n                  formControlName=\"testName\" matInput required autocomplete=\"off\">\n                <mat-error>\n                  <app-validation [labelName]='testName.innerText'\n                    [validationControl]=\"testDetailsForm.controls.testName\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n              <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                class=\"icon-center\">\n                <mat-label #startDate translate>Start Date</mat-label>\n                <input matInput (keyup)=\"forceValidation('fromDate',testDetailsForm)\" [matDatepicker]=\"fromDate\"\n                  formControlName=\"fromDate\" [min]=\"academicSessionMinDate\" [max]=\"academicSessionMaxDate\"\n                  autocomplete=\"off\" (dateChange)=\"onStartDateSelect()\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDate\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDate></mat-datepicker>\n                <mat-error>\n                  <app-validation [labelName]='startDate.innerText'\n                    [validationControl]=\"testDetailsForm.controls.fromDate\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                class=\"pl-sm-20 icon-center\">\n                <mat-label #endDate translate>End Date</mat-label>\n                <input matInput (keyup)=\"forceValidation('toDate',testDetailsForm)\" [matDatepicker]=\"toDate\"\n                  formControlName=\"toDate\" [min]=\"testDetailsForm.controls.fromDate.value || academicSessionMinDate\"\n                  [max]=\"academicSessionMaxDate\" autocomplete=\"off\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\n                <mat-datepicker #toDate [startAt]=\"testDetailsForm.controls.fromDate.value\"></mat-datepicker>\n                <mat-error>\n                  <app-validation [labelName]='endDate.innerText' [validationControl]=\"testDetailsForm.controls.toDate\"\n                    [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"column\" class=\"pt-sm-12\" fxFlex=\"100\">\n\n              <label class=\"mb-12 fuse-black-500-fg\" #IsPostCalender translate>Do you Want to post this Test Schedule\n                Information To Student Calender ?</label>\n              <mat-radio-group fxLayout=\"row\" fxFlex=\"100\" required formControlName=\"isPostCalender\">\n                <mat-radio-button class=\"ml-24\" value=\"Yes\"><span translate>Yes</span></mat-radio-button>\n                <mat-radio-button class=\"ml-24\" value=\"No\"><span translate>No</span></mat-radio-button>\n              </mat-radio-group>\n              <mat-error>\n                <app-validation [labelName]='IsPostCalender.innerText'\n                  [validationControl]=\"testDetailsForm.controls.isPostCalender\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-28\">\n              <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\"\n                translate>{{'Previous' | translate}}\n              </button>\n              <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\"\n                translate>{{'Next' | translate}}\n              </button>\n            </div>\n          </form>\n          <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 1}\"></ng-template>\n        </div>\n      </mat-step>\n\n      <mat-step [stepControl]=\"classSectionForm\" [completed]=\"getOptionalClassStep()\" [optional]=getOptionalClassStep()>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexFill>\n          <form fxLayout=\"column\" [formGroup]=\"classSectionForm\" fxFlex=\"65\" class=\"pr-16\"\n            #classSectionFormData=\"ngForm\">\n            <ng-template matStepLabel><span translate>Class & Section</span></ng-template>\n            <label class=\"pt-24 font-size-18\"><span translate>Please Select Class And Section Participants in this\n                Test</span></label>\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n              <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n                class=\"pr-sm-20\">\n                <mat-label #classId translate>Class</mat-label>\n                <mat-select required=\"true\" formControlName=\"classId\" (selectionChange)=\"onSelectClass($event.value)\"\n                  required>\n                  <mat-option *ngFor=\"let classId of classesList\" [value]=\"classId.value\">\n                    {{classId.label}}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='classId.innerText'\n                    [validationControl]=\"classSectionForm.controls.classId\" [doValidate]=\"classValidate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n              <af-select appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n                [optionGroupRequired]=\"false\" [options]=\"sectionsList?.length ? sectionsList : []\" [showChips]=\"1\"\n                placeholder=\"Section\" [multiple]=\"true\" formControlName=\"sectionId\"></af-select>\n              <div>\n                <button mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase ml-12 mt-16\"\n                  (click)=\"onClassSectionSelectBtn()\" classSectionForm>{{'Select' | translate}}\n                </button>\n              </div>\n            </div>\n            <div class=\"simple-table-container mat-elevation-z3 my-20 radius-t-20 responsive-normal-table\"\n              *ngIf=\"allClassSectionDetails.length\">\n              <table class=\"simple clickable\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\" translate>Class</th>\n                    <th class=\"text-left\" translate>Section</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <ng-container *ngFor=\"let class of allClassSectionDetails\">\n                    <tr *ngFor=\"let section of class.sections\">\n                      <td>{{class.label}}</td>\n                      <td>{{section.label}}</td>\n                      <td class=\"text-right py-4\"><button mat-icon-button (click)=\"onClassSectionDelete(class,section)\">\n                          <mat-icon class=\"red-300-fg\">delete</mat-icon>\n                        </button></td>\n                    </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-28\">\n              <button mat-raised-button matStepperPrevious type=\"button\"\n                class=\"text-uppercase mr-12\">{{'Previous' | translate}}\n              </button>\n              <button mat-raised-button matStepperNext type=\"button\" (click)=\"onClassSectionNext()\"\n                color=\"accent\" class=\"text-uppercase\">{{'Next' | translate}}\n              </button>\n            </div>\n          </form>\n          <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 2}\"></ng-template>\n        </div>\n\n      </mat-step>\n      <mat-step [stepControl]=\"testScheduleForm\" [completed]=\"getOptionalScheduleStep()\" [optional]=getOptionalScheduleStep()>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexFill>\n          <form fxLayout=\"column\" fxFlex=\"70\" [formGroup]=\"testScheduleForm\" class=\"pr-16\"\n            #testScheduleFormData=\"ngForm\">\n            <ng-template matStepLabel><span translate>Test Schedule</span></ng-template>\n            <div class=\"pt-24 font-size-18\"><span translate>Please Enter The Schedules for Various Courses in the\n                Test</span>\n            </div>\n\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n              <af-select appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              [required]=\"true\" (selectionChange)=\"onSelectTestScheduleClass($event)\"\n                [optionGroupRequired]=\"false\" [options]=\"allClassSectionDetailsData | async\" [showChips]=\"1\"\n                placeholder=\"Class\" [multiple]=\"true\" formControlName=\"classId\" [doValidate]=\"true\"></af-select>\n\n              <af-select appearance=\"outline\" class=\"pl-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n                fxFlex.gt-sm=\"50\" [optionGroupRequired]=\"false\"\n                [options]=\"selectedClasses?.length == 1  ? (selectedSection | async)  : []\" [showChips]=\"1\"\n                placeholder=\"Section\" [multiple]=\"true\" formControlName=\"sectionId\"></af-select>\n            </div>\n\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n              <af-select appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n                [optionGroupRequired]=\"false\" [showChips]=\"1\" [options]=\"coursesList?.length ? coursesList : []\" [required]=\"true\" \n                placeholder=\"Courses\" [multiple]=\"true\" formControlName=\"courseId\"\n                required [doValidate]=\"true\">\n              </af-select>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n                class=\"pl-sm-20 icon-center\">\n                <mat-label #testDates translate>Test Date</mat-label>\n                <input matInput (keyup)=\"forceValidation('testDate',testScheduleForm)\" [matDatepicker]=\"testDate\"\n                  formControlName=\"testDate\" [min]=\"academicSessionMinDate\" [max]=\"academicSessionMaxDate\"\n                  autocomplete=\"off\" [required]=\"true\">\n                <mat-datepicker-toggle matSuffix [for]=\"testDate\"></mat-datepicker-toggle>\n                <mat-datepicker #testDate [startAt]=\"startAtTestDate\"></mat-datepicker>\n                <mat-error>\n                  <app-validation [labelName]='testDates.innerText'\n                    [validationControl]=\"testScheduleForm.controls.testDate\" [doValidate]=\"testSchedulValidate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n              <div fxLayout=\"column\" class=\"w-200\">\n                <div fxLayoutAlign=\"center start\">\n                  <button mat-raised-button type=\"button\" class=\"text-uppercase ml-12 mt-16\" color=\"primary\" type=\"reset\"\n                  (click)=\"testScheduleClear()\">{{'Clear' | translate}}\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase ml-12 mt-16\" type=\"submit\"\n                  (click)=\"testScheduleSelectClick()\">{{'Select' | translate}}\n                </button>\n                </div>              \n              </div>\n            </div>\n\n            <table class=\"mat-elevation-z3 simple clickable radius-10 my-20\" fxFlex=\"100\"\n              *ngIf=\"testScheduleDetails.length !=0\">\n              <thead>\n                <tr>\n                  <th class=\"text-left\" translate>Class</th>\n                  <th class=\"text-left\" translate>Section</th>\n                  <th class=\"text-left\" translate>Course</th>\n                  <th class=\"text-left\" translate>Test Date</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let testSchedule of testScheduleDetails\">\n                  <td>{{testSchedule.class}}</td>\n                  <td>{{testSchedule.section}}</td>\n                  <td>{{testSchedule.course}}</td>\n                  <td>{{getFormattedDateBySchoolDateFormat(testSchedule.testDate)}}</td>\n                  <td class=\"text-right py-4\"><button mat-icon-button (click)=\"ontestScheduleDelete(testSchedule)\">\n                      <mat-icon class=\"red-300-fg\">delete</mat-icon>\n                    </button></td>\n                </tr>\n              </tbody>\n            </table>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-28\">\n              <button mat-raised-button matStepperPrevious type=\"button\"\n                class=\"text-uppercase mr-12\">{{'Previous' | translate}}\n              </button>\n              <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\"\n                (click)=\"testScheduleNextBtn()\">\n                {{'Next' | translate}}\n              </button>\n            </div>\n          </form>\n          <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 3}\"></ng-template>\n        </div>\n      </mat-step>\n\n      <mat-step>\n        <ng-template matStepLabel><span translate>Complete</span></ng-template>\n        <div fxFlex=\"100\" class=\"font-size-20 py-16\" translate>confirmInformation</div>\n\n        <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>boardname</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>\n              {{getNameBasedOnValue('board',testTypeAndGradingForm.value.boardId)}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Grading Term</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span\n                class=\"pr-4\">:</span>{{getNameBasedOnValue('gradingTerm',testTypeAndGradingForm.value.gradeTermId)}}\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Test Type</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span\n                class=\"pr-4\">:</span>{{getNameBasedOnValue('testType',testTypeAndGradingForm.value.testTypeId)}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Name</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{testDetailsForm.value.testName}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Start Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span\n                class=\"pr-4\">:</span>{{testDetailsForm.value.fromDate!=null ? getFormattedDateBySchoolDateFormat(testDetailsForm.value.fromDate):'--'}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>End Date</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span\n                class=\"pr-4\">:</span>{{testDetailsForm.value.toDate!=null ?getFormattedDateBySchoolDateFormat(testDetailsForm.value.toDate):'--'}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n            <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Post to Student Calender</span></strong></div>\n            <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{testDetailsForm.value.isPostCalender}}</div>\n          </mat-list-item>\n        </mat-list>\n        <div class=\"ovrflowy-auto mat-elevation-z3 radius-10 m-20\">\n          <table class=\"simple\" fxFlex=\"100\" id=\"comform\">\n            <thead>\n              <tr>\n                <th class=\"text-left stickyx\" translate>Class</th>\n                <th class=\"text-left stickyx\" translate>Section</th>\n                <th class=\"text-left stickyx\" translate>Course</th>\n                <th class=\"text-left stickyx\" translate>Test Date</th>\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let testSchedule of testScheduleDetails\">\n                <td>{{testSchedule.class}}</td>\n                <td>{{testSchedule.section}}</td>\n                <td>{{testSchedule.course}}</td>\n                <td>{{getFormattedDateBySchoolDateFormat(testSchedule.testDate)}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}</button>\n          <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n            (click)=\"onSubmit()\">{{(isTestEdit ? 'Update':'Create') | translate}}\n          </button>\n        </div>\n      </mat-step>\n    </mat-vertical-stepper>\n  </ng-template>\n\n  <ng-template #sideBarData let-stepperIndex=\"stepperIndex\">\n    <div fxLayout=\"column\" class=\"border-left my-28 mh-424 w-320\">\n      <div fxLayout=\"row\" class=\"py-4 px-20\">\n        <div class=\"w-144\" translate>Board</div> :<div class=\"pl-12 break-word\">\n          {{getNameBasedOnValue('board',testTypeAndGradingForm.value.boardId)}}</div>\n      </div>\n      <div fxLayout=\"row\" class=\"py-4 px-20\">\n        <div class=\"w-144\" translate>Grade Term</div> :<div class=\"pl-12 break-word\">\n          {{getNameBasedOnValue('gradingTerm',testTypeAndGradingForm.value.gradeTermId)}} </div>\n      </div>\n      <div fxLayout=\"row\" class=\"py-4 px-20\">\n        <div class=\"w-144\" translate>Test Type</div> :<div class=\"pl-12 break-word\">\n          {{getNameBasedOnValue('testType',testTypeAndGradingForm.value.testTypeId)}} </div>\n      </div>\n      <ng-container *ngIf=\"stepperIndex > 1\">\n        <div fxLayout=\"row\" class=\"py-4 px-20\">\n          <div class=\"w-144\" translate>Name</div> :<div class=\"pl-12 break-word\">{{testDetailsForm.value.testName}}\n          </div>\n        </div>\n        <div fxLayout=\"row\" class=\"py-4 px-20\">\n          <div class=\"w-144\" translate>Start Date</div> :<div class=\"pl-12 break-word\">\n            {{testDetailsForm.value.fromDate!=null?getFormattedDateBySchoolDateFormat(testDetailsForm.value.fromDate):'--'}}</div>\n        </div>\n        <div fxLayout=\"row\" class=\"py-4 px-20\">\n          <div class=\"w-144\" translate>End Date</div> :<div class=\"pl-12 break-word\">\n            {{testDetailsForm.value.toDate!=null?getFormattedDateBySchoolDateFormat(testDetailsForm.value.toDate):'--'}}</div>\n        </div>\n        <div fxLayout=\"row\" class=\"pt-4 pb-12 px-20\">\n          <div class=\"w-144\" translate>Post to Student calendar</div> :<div class=\"pl-12 break-word\">\n            {{testDetailsForm.value.isPostCalender}}</div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"stepperIndex > 2\">\n        <div fxLayout=\"row\" class=\"pt-12 px-20 border-top\">\n          <div class=\"w-144 font-weight-600 accent-fg\" translate>Class</div> <div>\n            <span class=\"pl-12 break-word font-weight-600 accent-fg\" translate>\n              Section\n            </span>\n          </div>\n        </div>\n        <div fxLayout=\"row\" class=\"py-4 px-20\" *ngFor=\"let classSection of allClassSectionDetails\">\n          <div class=\"w-144\" translate>{{classSection.label}}</div> :\n          <div>\n            <span class=\"pl-12 break-word\" *ngFor=\"let section of classSection.sections ; let isLast=last\">\n              {{section.label}} {{isLast ? '' : ' , '}}\n            </span>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/test-schedule.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-horizontal-step .mh-424 {\n  min-height: 424px; }\n\n.ovrflowy-auto {\n  overflow-y: auto;\n  max-height: 300px; }\n\n.manage-institue .mat-tab-label {\n  text-transform: uppercase; }\n\n::ng-deep .mat-step-optional {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2dyYWRpbmcvdGVzdC1zY2hlZHVsZS90ZXN0LXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2FkZW1pY3MvZ3JhZGluZy90ZXN0LXNjaGVkdWxlL3Rlc3Qtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWhvcml6b250YWwtc3RlcCB7XG4gIC5taC00MjQge1xuICAgIG1pbi1oZWlnaHQ6IDQyNHB4O1xuICB9XG59XG5cbi5vdnJmbG93eS1hdXRvIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG4ubWFuYWdlLWluc3RpdHVlIC5tYXQtdGFiLWxhYmVse1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLW9wdGlvbmFse1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/academics/grading/test-schedule/test-schedule.component.ts ***!
  \************************************************************************************/
/*! exports provided: TestScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestScheduleComponent", function() { return TestScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/grading-service/api/test-schedule-service */ "./src/app/service/grading-service/api/test-schedule-service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_grading_service_api_testScore_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/grading-service/api/testScore.service */ "./src/app/service/grading-service/api/testScore.service.ts");
















var TestScheduleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TestScheduleComponent, _super);
    function TestScheduleComponent(classService, _formBuilder, gradeSetupService, classTimetableService, testScheduleService, gardeTermConfigurationService, commonComponent, dialog, commonService, router, snackBar, cd, testScoreService) {
        var _this = _super.call(this) || this;
        _this.classService = classService;
        _this._formBuilder = _formBuilder;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.testScheduleService = testScheduleService;
        _this.gardeTermConfigurationService = gardeTermConfigurationService;
        _this.commonComponent = commonComponent;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this.testScoreService = testScoreService;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.gradeTermList = [];
        _this.testTypesList = [];
        _this.sectionsList = [];
        _this.coursesList = [];
        _this.courseSectionsList = [];
        _this.classSectionIdList = [];
        _this.testScheduleDetails = [];
        _this.classSectionDetails = [];
        _this.gradeTermIds = [];
        _this.tableData = [];
        _this.testScheduleData = [];
        _this.testSchedulValidate = true;
        _this.isSchoolhasBoards = true;
        _this.classValidate = true;
        _this.isTestEdit = false;
        _this.validate = true;
        _this.currentComponentName = 'TestScheduleComponent';
        _this.childComponentName = 'ScheduleComponent';
        _this.isClassSectionStepperValid = false;
        _this.interactedStepperIndex = 0;
        _this.testScheduleClassList = [];
        _this.testScheduleSectionList = [];
        _this.isTestsViewActive = true;
        _this.index = 0;
        _this.isStaffLogin = false;
        _this.allClassSectionDetailsData = Promise.resolve([]);
        _this.selectedSection = Promise.resolve([]);
        _this.testScheduleControls = ['classId', 'sectionId', 'courseId', 'testDate', 'testStepper'];
        _this.classSectionFormControls = ['classId', 'sectionId', 'classSectionStepper'];
        _this.isMarks = false;
        _this.allClassSectionDetails = [];
        _this.selectedClasses = [];
        _this.testScheduleFilterView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].PAGESIZE,
            classes: [],
            sections: [],
            terms: [],
            boardIds: [],
            testTypes: [],
            testNames: [],
            statuses: [],
            isPostToCalendar: [],
            courses: [],
            testStartDatesBegin: null,
            testStartDatesEnd: null,
            testEndDateBegin: null,
            testEndDateEnd: null,
            testScheduleDateBegin: null,
            testScheduleDateEnd: null
        };
        _this.testScheduleClassSectionFilterView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].PAGESIZE,
            classes: [],
            sections: [],
            testId: '',
            statuses: [],
            courses: [],
            testScheduleDateBegin: null,
            testScheduleDateEnd: null,
        };
        return _this;
    }
    TestScheduleComponent.prototype.onPopState = function (event) {
        this.switchTabs(window.location.hash);
    };
    TestScheduleComponent.prototype.ngOnInit = function () {
        this.testTypeAndGradingForm = this._formBuilder.group({
            boardId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            gradeTermId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            testTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            testMaxMarks: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(9999)]]
        });
        this.testDetailsForm = this._formBuilder.group({
            testName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(45)]],
            fromDate: '',
            toDate: '',
            isPostCalender: [app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]]
        });
        this.classSectionForm = this._formBuilder.group({
            classId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            sectionId: [null],
            classSectionStepper: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]]
        });
        this.testScheduleForm = this._formBuilder.group({
            classId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            sectionId: [null],
            courseId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            testDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            testStepper: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]]
        });
        this.testView = {
            testName: '',
            testClassSections: [this.testClassSectionView],
        };
        this.cols = [
            { field: 'termName', header: 'Grade Term', sort: true },
            { field: 'testType', header: 'Test Type', sort: true },
            { field: 'testName', header: 'Test Name', sort: true },
            { field: 'testStartDate', header: 'Start Date', sort: true },
            { field: 'testEndDate', header: 'End Date', sort: true },
            { field: 'isPostToCalendar', header: 'Calendar', sort: true },
            { field: 'classSections', header: 'Class & Sections', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.testClassSectionsCols = [
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'course', header: 'Subject', sort: true },
            { field: 'testDate', header: 'Test Date', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.testScheduleFilterView = modelTableComponent;
        }
        // / initializing table settings /
        this.tableSettings = {
            rows: [],
            columns: this.testClassSectionsCols,
            model: this.testScheduleClassSectionFilterView,
            componentName: this.childComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            hideHeader: true,
        };
        if (this.getTokenParam('_as')) {
            this.getSchoolBoardsList();
            this.getTestTypesList();
            this.tabSettings = {
                rows: [],
                columns: this.cols,
                model: this.testScheduleFilterView,
                componentName: this.currentComponentName,
                isPaginationRequired: true,
                totalRowsCount: this.totalItems,
                pageCnt: this.pageCnt,
                isRowExpandRequired: true,
                headerOperations: {
                    addingForm: {
                        btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NEW,
                        required: true,
                    },
                    infoButton: {
                        required: true,
                        text: 'Test Schedules/Marks'
                    },
                }
            };
            if (!window.location.hash) {
                this.selected(this.index);
            }
            else {
                this.switchTabs(window.location.hash);
            }
        }
        else {
            this.acadamicSessionExist();
        }
    };
    TestScheduleComponent.prototype.acadamicSessionExist = function () {
        var _this = this;
        setTimeout(function () {
            _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
        });
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.testScheduleFilterView,
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            isRowExpandRequired: true,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Test Schedules/Marks'
                },
            }
        };
    };
    TestScheduleComponent.prototype.getSchoolBoardsList = function () {
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
                _this.setDefaultBoard();
            }
            else {
                _this.isSchoolhasBoards = false;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    TestScheduleComponent.prototype.getTestTypesList = function () {
        var _this = this;
        this.gardeTermConfigurationService.fetchTestTypes().subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                _this.isSchoolhasBoards = true;
                res.listViews.forEach(function (element) {
                    _this.testTypesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    TestScheduleComponent.prototype.loadTestSchedules = function () {
        var _this = this;
        this.testScheduleService.getAllTestSchedules(this.testScheduleFilterView.sortBy, this.testScheduleFilterView.sortOrder, this.testScheduleFilterView.terms, this.testScheduleFilterView.testTypes, this.testScheduleFilterView.testNames, this.testScheduleFilterView.testStartDatesBegin, this.testScheduleFilterView.testStartDatesEnd, this.testScheduleFilterView.testEndDateBegin, this.testScheduleFilterView.testEndDateEnd, this.testScheduleFilterView.isPostToCalendar, this.testScheduleFilterView.classes, this.testScheduleFilterView.sections, this.testScheduleFilterView.statuses, this.testScheduleFilterView.courses, this.testScheduleFilterView.testScheduleDateBegin, this.testScheduleFilterView.testScheduleDateEnd, this.testScheduleFilterView.pageNumber, this.testScheduleFilterView.pageSize).subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    TestScheduleComponent.prototype.response = function (data) {
        var _this = this;
        if (data.testScheduleListViewModel) {
            this.rows = data.testScheduleListViewModel.list;
            this.totalItems = data.testScheduleListViewModel.totalItems;
        }
        else {
            this.rows = [];
        }
        this.rows.forEach(function (e) {
            e.testStartDate = (e.testStartDate == null) ? null : _this.commonService.customDateFormat(e.testStartDate, _this.getSchoolDateFormat()).date;
            e.testEndDate = (e.testEndDate == null) ? null : _this.commonService.customDateFormat(e.testEndDate, _this.getSchoolDateFormat()).date;
            _this.updateRowActions(e);
        });
        this.tabSettings = {
            columns: this.cols,
            model: this.testScheduleFilterView,
            rows: this.rows,
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            isRowExpandRequired: true,
            headerOperations: {
                addingForm: {
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NEW,
                    required: true,
                },
                infoButton: {
                    required: true,
                    text: 'Test Schedules/Marks'
                },
            }
        };
        this.scrollIntoView('app-table');
    };
    TestScheduleComponent.prototype.updateRowActions = function (row) {
        if (row.isHomeWorkTest) {
            row.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT_VIEW_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT_VIEW_OPERATION
                }
            ];
        }
        else {
            row.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT
                }
            ];
        }
    };
    TestScheduleComponent.prototype.loadTestClassSections = function (testId) {
        var _this = this;
        this.testScheduleService.getAllTestClassSections(this.testScheduleClassSectionFilterView.sortBy, this.testScheduleClassSectionFilterView.sortOrder, testId, this.testScheduleFilterView.classes, this.testScheduleFilterView.sections, this.testScheduleFilterView.statuses, this.testScheduleFilterView.courses, this.testScheduleFilterView.testStartDatesBegin, this.testScheduleFilterView.testStartDatesEnd, this.testScheduleClassSectionFilterView.pageNumber, this.testScheduleClassSectionFilterView.pageSize).subscribe(function (data) { return _this.classSectionresponse(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    TestScheduleComponent.prototype.classSectionresponse = function (data) {
        var _this = this;
        if (data.testClassSectionsListViewModel) {
            this.testClassSectionsRows = data.testClassSectionsListViewModel.list;
            this.totalItems = data.testClassSectionsListViewModel.totalItems;
            this.pageCnt = data.testClassSectionsListViewModel.totalPages;
        }
        else {
            this.testClassSectionsRows = [];
        }
        this.testClassSectionsRows.forEach(function (e) {
            if (e.isEditable) {
                switch (true) {
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST_SCHEDULED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].COMPLETE,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].APPROVE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].COMPLETE
                            }, {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].DELETE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL
                            },
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS
                            }
                        ];
                        break;
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST_COMPLETED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].DELETE_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL
                            },
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS
                            }
                        ];
                        break;
                    case e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST_CANCELED_CODE:
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS
                            }
                        ];
                        break;
                }
            }
            e.testDate = (e.testDate == null) ? null : _this.commonService.customDateFormat(e.testDate, _this.getSchoolDateFormat()).date;
        });
        this.tableSettings = {
            columns: this.testClassSectionsCols,
            model: this.testScheduleClassSectionFilterView,
            rows: this.testClassSectionsRows,
            tablename: 'Test Schedules',
            componentName: this.childComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            hideHeader: true,
            isClSideFltReq: true,
            isClientSidePaginationReq: true
        };
    };
    TestScheduleComponent.prototype.testScheduleTableData = function (_event) {
        this.testScheduleFilterView = _event;
        this.loadTestSchedules();
    };
    TestScheduleComponent.prototype.testClassSectionsTableData = function (_event) {
        this.testScheduleClassSectionFilterView = _event;
        this.loadTestClassSections(this.testId);
    };
    TestScheduleComponent.prototype.rowActions = function (data) {
        var _this = this;
        this.testId = data.clickedRow.id;
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDIT) {
            this.isTestEdit = true;
            this.testScheduleService.getByTest(data.clickedRow.id).subscribe(function (res) { return _this.getByTestRes(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].EDITVIEW) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].HOMEWORK_TEST_VALIDATION, true);
        }
        else {
            this.loadTestClassSections(this.testId);
        }
    };
    TestScheduleComponent.prototype.getByTestRes = function (res) {
        this.allClassSectionDetails = [];
        this.testScheduleClassList = [];
        this.testScheduleData = [];
        this.closeAddPanel = false;
        this.isTestEdit = true;
        this.testDetailsForm.patchValue(res);
        this.testDetailsForm.controls['isPostCalender'].setValue((res.isPostCalender === 1) ? app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES : app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO);
        this.testTypeAndGradingForm.patchValue(res);
        this.onTestTypeSelect(this.testTypeAndGradingForm.value.testTypeId);
        this.onSelectSchoolBoard(res.boardId);
        this.onSelectGradingTerm(res);
        this.testClassSectionView = {
            schoolAcademicSessionClassSectionId: null,
            testSchedules: []
        };
        this.testView = {
            testName: '',
            testClassSections: [],
        };
        var _loop_1 = function (classSection) {
            if (this_1.testScheduleClassList.length) {
                var scheduleIndex = this_1.testScheduleClassList.findIndex(function (element) {
                    return (element.value === classSection.classId);
                });
                if (scheduleIndex <= -1) {
                    this_1.testScheduleClassList.push({
                        label: classSection.className,
                        value: classSection.classId,
                    });
                }
            }
            else {
                this_1.testScheduleClassList.push({
                    label: classSection.className,
                    value: classSection.classId,
                });
            }
            this_1.courseSectionsList.push({
                label: classSection.sectionName,
                value: classSection.schoolAcademicSessionClassSectionId,
                classId: classSection.classId
            });
            for (var _i = 0, _a = classSection.testSchedules; _i < _a.length; _i++) {
                var testSchedule = _a[_i];
                this_1.testScheduleDetails.push({
                    class: testSchedule.className,
                    section: testSchedule.sectionName,
                    course: testSchedule.courseName,
                    testDate: this_1.getFormattedDateByAPIPattern(testSchedule.testDate),
                    courseId: testSchedule.courseId,
                    sectionId: classSection.schoolAcademicSessionClassSectionId
                });
            }
            var testClassSection = {
                label: '',
                value: 0,
                sections: []
            };
            var index = this_1.allClassSectionDetails.findIndex(function (x) { return x.value === classSection.classId; });
            testClassSection.sections.push({
                label: classSection.sectionName,
                value: classSection.schoolAcademicSessionClassSectionId
            });
            if (index === -1) {
                testClassSection.label = classSection.className;
                testClassSection.value = classSection.classId;
                this_1.allClassSectionDetails.push(testClassSection);
            }
            else {
                this_1.allClassSectionDetails[index].sections.push(testClassSection.sections[0]);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = res.testClassSectionDetails; _i < _a.length; _i++) {
            var classSection = _a[_i];
            _loop_1(classSection);
        }
        this.testScheduleData = res.testClassSectionDetails;
        this.classSectionDetails.length ? this.classSectionForm.controls['classSectionStepper'].setValue('active') :
            this.classSectionForm.controls['classSectionStepper'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required);
        this.testScheduleDetails.length ? this.testScheduleForm.controls['testStepper'].setValue('active') :
            this.testScheduleForm.controls['testStepper'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required);
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
            x.completed = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
        this.classSectionFormData.resetForm();
        this.testScheduleFormData.resetForm();
        this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
        this.customSteperLabelChange();
    };
    TestScheduleComponent.prototype.ClassSectionrowActions = function (response) {
        var _this = this;
        this.testScheduleId = response.clickedRow.id;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].COMPLETE.toLowerCase()) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].COMPLETE_TEST_SCHEDULE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES) {
                    _this.testScheduleService.completeOrCancelSchedule(_this.testScheduleId, true).subscribe(function (res) { return _this.completeOrCancelRequest(res); }, function (error) {
                        _this.commonComponent.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL.toLowerCase()) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].CANCEL_TEST_SCHEDULE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES) {
                    _this.testScheduleService.completeOrCancelSchedule(_this.testScheduleId, false).subscribe(function (res) { return _this.completeOrCancelRequest(res); }, function (error) {
                        _this.commonComponent.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].MARKS.toLowerCase()) {
            if (this.isStaffLogin) {
                this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_14__["RouteConfig"].Staff_Test_Grading + '/' + response.clickedRow.id, { operation: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST }]);
            }
            else {
                this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_14__["RouteConfig"].Test_Grading + '/' + response.clickedRow.id, { operation: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST }]);
            }
        }
    };
    TestScheduleComponent.prototype.completeOrCancelRequest = function (response) {
        this.loadTestClassSections(this.testId);
        this.openSnackBar(response.messages.ResultMessage);
    };
    TestScheduleComponent.prototype.onSelectSchoolBoard = function (schoolBoard) {
        var _this = this;
        this.gradeTermList = [];
        this.classesList = [];
        this.coursesList = [];
        this.schoolBoardId = this.testTypeAndGradingForm.value.boardId;
        this.gardeTermConfigurationService.gradingTermConfigurationGradingTermsByStaffGet(schoolBoard).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.gradeTermList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.classTimetableService.classTimetableCoursesGet(this.testTypeAndGradingForm.value.boardId).subscribe(function (response) {
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
    TestScheduleComponent.prototype.onSelectGradingTerm = function (gradingTermId) {
        var _this = this;
        this.classesList = [];
        this.sectionsList = [];
        this.classSectionDetails = [];
        this.testScheduleDetails = [];
        this.testScheduleClassList = [];
        this.testScheduleSectionList = [];
        this.testScheduleData = [];
        this.allClassSectionDetails = [];
        this.testScheduleForm.reset();
        this.classSectionForm.reset();
        this.gardeTermConfigurationService.gradingTermConfigurationFetchClassesByGradingtermid(this.testTypeAndGradingForm.value.gradeTermId).subscribe(function (response) {
            if (response && response.length) {
                response.forEach(function (element) {
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
    TestScheduleComponent.prototype.onSelectClass = function (classId) {
        var _this = this;
        this.className = this.classesList.find(function (x) { return x.value === classId; }).label;
        this.classId = classId;
        this.sectionsList = [];
        this.testScheduleService.getAllDetails(this.schoolBoardId, classId, this.testTypeAndGradingForm.value.gradeTermId).subscribe(function (response) {
            if (response.academicSectionsLists && response.academicSectionsLists.length) {
                response.academicSectionsLists.forEach(function (element) {
                    _this.sectionsList.push({
                        label: element.sectionName,
                        value: element.schoolAcademicClassSectionId
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.classSectionForm.patchValue({ sectionId: null });
    };
    TestScheduleComponent.prototype.onClassSectionSelectBtn = function () {
        var _this = this;
        if (this.classSectionForm.value.classId != null) {
            var index_1 = this.allClassSectionDetails.findIndex(function (x) { return x.value === _this.classSectionForm.value.classId; });
            if (this.classSectionForm.value.sectionId == null || !this.classSectionForm.value.sectionId.length) {
                if (index_1 === -1) {
                    this.allClassSectionDetails.push({
                        label: this.className,
                        value: this.classSectionForm.value.classId,
                        sections: this.sectionsList
                    });
                }
                else {
                    this.allClassSectionDetails.push({
                        label: this.className,
                        value: this.classSectionForm.value.classId,
                        sections: this.sectionsList
                    });
                    this.allClassSectionDetails.splice(index_1, 1);
                }
            }
            else {
                if (index_1 === -1) {
                    this.allClassSectionDetails.push({
                        label: this.className,
                        value: this.classSectionForm.value.classId,
                        sections: this.classSectionForm.value.sectionId
                    });
                }
                else {
                    this.classSectionForm.value.sectionId.forEach(function (element1) {
                        var i = _this.allClassSectionDetails[index_1].sections.findIndex(function (x) { return x.value === element1.value; });
                        if (i === -1) {
                            _this.allClassSectionDetails[index_1].sections.push(element1);
                        }
                    });
                }
            }
        }
        this.cd.detectChanges();
        this.validateTestSchedules();
        this.onSelectTestScheduleClass(this.selectedClasses);
        this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
    };
    TestScheduleComponent.prototype.onClassSectionDelete = function (classes, sectionId) {
        var _this = this;
        this.allClassSectionDetails.map(function (element, i) {
            if (element.value === classes.value) {
                element.sections = element.sections.filter(function (e) { return e.value !== sectionId.value; });
                if (!element.sections.length) {
                    _this.allClassSectionDetails.splice(i, 1);
                }
            }
        });
        this.testScheduleDetails = this.testScheduleDetails.filter(function (x) { return x.sectionId !== sectionId.value; });
        this.testScheduleData = this.testScheduleData.filter(function (x) { return x.schoolAcademicSessionClassSectionId !== sectionId.value; });
        this.validateTestSchedules();
        this.onSelectTestScheduleClass(this.selectedClasses);
        var sections = [];
        if (this.testScheduleForm.value.sectionId != null) {
            sections = this.testScheduleForm.value.sectionId.filter(function (e) { return e.value !== sectionId.value; });
        }
        this.testScheduleForm.patchValue({ sectionId: sections.length ? sections : null });
        if (!this.allClassSectionDetails.length) {
            this.testScheduleForm.patchValue({ classId: null, sectionId: null });
        }
        this.cd.detectChanges();
        this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
    };
    TestScheduleComponent.prototype.ontestScheduleDelete = function (data) {
        var _this = this;
        var index = this.testScheduleDetails.findIndex(function (x) { return x.sectionId === data.sectionId && x.courseId === data.courseId; });
        if (index !== -1) {
            this.testScheduleDetails.splice(index, 1);
        }
        var index1 = this.testScheduleData.findIndex(function (x) { return x.schoolAcademicSessionClassSectionId === data.sectionId; });
        if (index1 !== -1) {
            this.testScheduleData[index1].testSchedules.forEach(function (element, scheduleIndex) {
                if (element.courseId === data.courseId) {
                    _this.testScheduleData[index1].testSchedules.splice(scheduleIndex, 1);
                }
            });
        }
        this.getOptionalScheduleStep();
    };
    TestScheduleComponent.prototype.onSelectTestScheduleClass = function (classId) {
        this.selectedClasses = classId;
        if (this.selectedClasses !== null && this.selectedClasses.length > 1) {
            this.testScheduleForm.controls['sectionId'].setValue(null);
        }
        if (this.selectedClasses !== null && this.selectedClasses.length === 1) {
            this.selectedSection = Promise.resolve(this.selectedClasses[0].sections);
        }
    };
    TestScheduleComponent.prototype.onSubmit = function () {
        var _this = this;
        Object.assign(this.testView, this.testDetailsForm.value, this.testTypeAndGradingForm.value);
        this.testView.testClassSections.forEach(function (data, index) {
            if (data === undefined) {
                _this.testView.testClassSections.splice(index, 1);
            }
        });
        this.testScheduleData.forEach(function (element) {
            var index = _this.testView.testClassSections.findIndex(function (x) { return x.schoolAcademicSessionClassSectionId === element.schoolAcademicSessionClassSectionId; });
            element.testSchedules.forEach(function (testSchedule) { return testSchedule.testMaxMarks = _this.testTypeAndGradingForm.value.testMaxMarks; });
            var testClassSection = {};
            if (index === -1) {
                testClassSection = {
                    schoolAcademicSessionClassSectionId: element.schoolAcademicSessionClassSectionId,
                    testSchedules: element.testSchedules
                };
                _this.testView.testClassSections.push(testClassSection);
            }
            else {
                if (element.testSchedules.length) {
                    var testScheduleIndex = _this.testView.testClassSections[index].testSchedules.findIndex(function (x) { return x.courseId === element.testSchedules[0].courseId; });
                    if (testScheduleIndex === -1) {
                        _this.testView.testClassSections[index].testSchedules.push(element.testSchedules[0]);
                    }
                    else {
                        _this.testView.testClassSections[index].testSchedules[testScheduleIndex].testDate = element.testSchedules[0].testDate;
                    }
                }
            }
        });
        this.testView.testClassSections = this.testView.testClassSections.filter(function (x) { return x.schoolAcademicSessionClassSectionId != null; });
        this.testView.isPostCalender = this.testDetailsForm.value.isPostCalender === app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].YES ? 1 : 0;
        if (this.testView.fromDate !== '' && this.testView.fromDate !== null) {
            this.testView.fromDate = this.getFormattedDateByAPIPattern(this.testView.fromDate);
        }
        if (this.testView.toDate !== '' && this.testView.toDate !== null) {
            this.testView.toDate = this.getFormattedDateByAPIPattern(this.testView.toDate);
        }
        if (!this.isTestEdit) {
            this.testScheduleService.createTest(this.testView)
                .subscribe(function (res) { return _this.submitResponce(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.testView['testId'] = this.testId;
            this.testScheduleService.updateTest(this.testView)
                .subscribe(function (res) { return _this.submitResponce(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    TestScheduleComponent.prototype.submitResponce = function (res) {
        this.testScheduleDetails = [];
        this.classSectionDetails = [];
        this.testScheduleClassList = [];
        this.testScheduleSectionList = [];
        this.onCancel();
        this.loadTestSchedules();
        document.getElementById('resetButtonStepper').click();
        this.openSnackBar(res.messages.ResultMessage);
    };
    TestScheduleComponent.prototype.testScheduleSelectClick = function () {
        var _this = this;
        if (this.testScheduleForm.value.classId != null && this.testScheduleForm.value.courseId != null && this.testScheduleForm.controls.testDate.valid) {
            this.startAtTestDate = this.testScheduleForm.value.testDate;
            this.testScheduleForm.value.classId.forEach(function (classes, i) {
                _this.testScheduleForm.value.courseId.forEach(function (course) {
                    _this.testScheduleView = {
                        courseId: course.value,
                        testDate: _this.getFormattedDateByAPIPattern(_this.testScheduleForm.value.testDate),
                        testMaxMarks: _this.testTypeAndGradingForm.value.testMaxMarks
                    };
                    if (_this.testScheduleForm.value.sectionId != null && _this.testScheduleForm.value.sectionId.length) {
                        _this.testScheduleForm.value.sectionId.forEach(function (sections) {
                            _this.testData(classes, sections, course);
                        });
                    }
                    else {
                        classes.sections.forEach(function (sections) {
                            _this.testData(classes, sections, course);
                        });
                    }
                });
            });
            this.testScheduleData.forEach(function (element) {
                element.testSchedules.forEach(function (el1) {
                    var sIndex = _this.testScheduleDetails.findIndex(function (x) { return x.sectionId === element.schoolAcademicSessionClassSectionId && x.courseId === el1.courseId; });
                    if (sIndex === -1) {
                        _this.testScheduleDetails.push({
                            sectionId: element.schoolAcademicSessionClassSectionId,
                            class: element.className,
                            section: element.sectionName,
                            course: _this.coursesList.find(function (x) { return x.value === el1.courseId; }).label,
                            courseId: el1.courseId,
                            testDate: _this.getFormattedDateByAPIPattern(_this.testScheduleForm.value.testDate)
                        });
                    }
                });
            });
        }
    };
    TestScheduleComponent.prototype.testData = function (classes, sections, course) {
        var scheduleIndex = this.testScheduleData.findIndex(function (x) { return x.schoolAcademicSessionClassSectionId === sections.value; });
        if (scheduleIndex === -1) {
            this.testScheduleData.push({
                className: classes.label,
                sectionName: sections.label,
                schoolAcademicSessionClassSectionId: sections.value,
                courseId: course.value,
                testSchedules: [this.testScheduleView]
            });
        }
        else {
            var c = this.testScheduleData[scheduleIndex].testSchedules.findIndex(function (x) { return x.courseId === course.value; });
            if (c === -1) {
                this.testScheduleData[scheduleIndex].testSchedules.push(this.testScheduleView);
            }
            else {
                this.testScheduleData[scheduleIndex].testSchedules[c].testDate = this.getFormattedDateByAPIPattern(this.testScheduleForm.value.testDate);
            }
        }
        var detailsindex = this.testScheduleDetails.findIndex(function (x) { return x.sectionId === sections.value && x.courseId === course.value; });
        if (detailsindex !== -1) {
            this.testScheduleDetails.splice(detailsindex, 1);
        }
    };
    TestScheduleComponent.prototype.testScheduleReset = function () {
        this.testScheduleForm.reset();
        this.testScheduleFormData.resetForm();
    };
    TestScheduleComponent.prototype.checkExistData = function () {
        var index = null;
        for (var _i = 0, _a = this.testView.testClassSections; _i < _a.length; _i++) {
            var classSection = _a[_i];
            if (classSection === undefined) {
                this.testView.testClassSections.splice(this.testView.testClassSections.indexOf(classSection), 1);
            }
            else if (classSection.schoolAcademicSessionClassSectionId === this.testScheduleForm.value.sectionId) {
                for (var _b = 0, _c = classSection.testSchedules; _b < _c.length; _b++) {
                    var ts = _c[_b];
                    if (ts.courseId === this.testScheduleForm.value.courseId) {
                        classSection.testSchedules.splice(classSection.testSchedules.indexOf(ts), 1);
                        this.testScheduleDetails.splice(classSection.testSchedules.indexOf(ts), 1);
                    }
                }
                if (index !== false) {
                    index = (this.testView.testClassSections.indexOf(classSection));
                    break;
                }
            }
        }
        return index;
    };
    TestScheduleComponent.prototype.setTestView = function () {
        this.testClassSectionView = {
            schoolAcademicSessionClassSectionId: this.testScheduleForm.value.sectionId,
            testSchedules: [this.testScheduleView]
        };
        this.testView.testClassSections.push(this.testClassSectionView);
    };
    TestScheduleComponent.prototype.onCancel = function () {
        this.closeAddPanel = true;
        this.testScheduleFormData.resetForm();
        this.classSectionFormData.resetForm();
        this.testDetailForm.resetForm();
        this.classSectionForm.reset();
        this.testScheduleForm.reset();
        this.testScheduleClassList = [];
        this.courseSectionsList = [];
        for (var _i = 0, _a = this.classSectionFormControls; _i < _a.length; _i++) {
            var controls = _a[_i];
            this.classSectionForm.controls[controls].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required);
            this.classSectionForm.controls[controls].updateValueAndValidity();
        }
        this.stepper.reset();
        this.isTestEdit = true;
        this.testScheduleDetails = [];
        this.classSectionDetails = [];
        this.validate = true;
        this.testDetailsForm.controls['isPostCalender'].setValue(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO);
    };
    TestScheduleComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    TestScheduleComponent.prototype.getNameBasedOnValue = function (name, value) {
        if (value === '' || value === 0) {
            return '';
        }
        var x;
        switch (name) {
            case 'board':
                return (x = this.schoolBoardsList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            case 'gradingTerm':
                return (x = this.gradeTermList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            case 'testType':
                return (x = this.testTypesList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            case 'course':
                return (x = this.coursesList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            default: break;
        }
    };
    TestScheduleComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex === 2) {
            Object.values(this.classSectionForm.controls).forEach(function (control) {
                control.markAsUntouched();
                control.updateValueAndValidity();
            });
            this.classSectionFormData.submitted = false;
            this.stepper._steps._results[event.selectedIndex].interacted = false;
        }
        if (event.selectedIndex === 3) {
            this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
            if (this.testScheduleForm.value.classId != null && this.testScheduleForm.value.classId.length) {
                var removedClasses_1 = [];
                this.testScheduleForm.value.classId.forEach(function (cls, i) {
                    var index = _this.allClassSectionDetails.findIndex(function (e) { return e.value === cls.value; });
                    if (index !== -1) {
                        removedClasses_1.push(cls);
                    }
                });
                this.testScheduleForm.patchValue({ classId: removedClasses_1.length ? removedClasses_1 : null });
            }
            Object.values(this.testScheduleForm.controls).forEach(function (control) {
                control.markAsUntouched();
                control.updateValueAndValidity();
            });
            this.classSectionFormData.submitted = false;
            this.stepper._steps._results[event.selectedIndex].interacted = false;
        }
        if (event.selectedIndex > 4) {
            this.scrollIntoView('app-table');
        }
    };
    TestScheduleComponent.prototype.testScheduleNextBtn = function () {
        if (this.validateTestSchedules()) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST_SCHEDULE_VALIDATION, true);
        }
    };
    TestScheduleComponent.prototype.validateTestSchedules = function () {
        var testFailed = false;
        for (var index = 0; index < this.allClassSectionDetails.length; index++) {
            var _loop_2 = function (sections) {
                var element = this_2.allClassSectionDetails[index].sections[sections];
                var checkTestSchedule = this_2.testScheduleDetails.filter(function (x) { return x.sectionId === element.value; });
                if (checkTestSchedule.length === 0) {
                    return { value: testFailed = true };
                }
                else {
                    testFailed = false;
                }
            };
            var this_2 = this;
            for (var sections = 0; sections < this.allClassSectionDetails[index].sections.length; sections++) {
                var state_1 = _loop_2(sections);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        return testFailed;
    };
    TestScheduleComponent.prototype.onAddFormClick = function () {
        this.isTestEdit = false;
        this.closeAddPanel = false;
        this.classSectionDetails = [];
        this.testScheduleDetails = [];
        this.testClassSectionView = {
            schoolAcademicSessionClassSectionId: null,
            testSchedules: []
        };
        this.testView = {
            testName: '',
            testClassSections: [this.testClassSectionView],
        };
        this.interactedStepperIndex = 0;
        this.stepper.reset();
        this.setDefaultBoard();
        this.testDetailsForm.controls['isPostCalender'].setValue(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NO);
    };
    TestScheduleComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('testTypeAndGradingForm', 'boardId', this.schoolBoardsList[0].value);
        this.onSelectSchoolBoard(this.schoolBoardsList[0].value);
    };
    TestScheduleComponent.prototype.getclassSectionDetails = function () {
        if (this.allClassSectionDetails.length) {
            return this.allClassSectionDetails;
        }
        return [];
    };
    TestScheduleComponent.prototype.selected = function (value) {
        this.index = value;
        switch (value) {
            case 0: {
                this.isTestsViewActive = true;
                if (this.getTokenParam('_as')) {
                    this.tabSettings = {
                        rows: [],
                        columns: this.cols,
                        model: this.testScheduleFilterView,
                        componentName: this.currentComponentName,
                        isPaginationRequired: true,
                        totalRowsCount: this.totalItems,
                        pageCnt: this.pageCnt,
                        isRowExpandRequired: true,
                        headerOperations: {
                            addingForm: {
                                btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].NEW,
                                required: true,
                            },
                            infoButton: {
                                required: true,
                                text: 'Test Schedules/Marks'
                            },
                        }
                    };
                    this.loadTestSchedules();
                }
                else {
                    this.acadamicSessionExist();
                }
                window.location.hash = 'TestView';
                break;
            }
            case 1: {
                this.isTestsViewActive = false;
                window.location.hash = 'TestScheduleView';
                break;
            }
            default: {
                break;
            }
        }
    };
    TestScheduleComponent.prototype.switchTabs = function (value) {
        switch (value) {
            case '#TestView': {
                this.index = 0;
                break;
            }
            case '#TestScheduleView': {
                this.index = 1;
                break;
            }
            default: {
                break;
            }
        }
        this.selected(this.index);
    };
    TestScheduleComponent.prototype.onStartDateSelect = function () {
        this.startAtTestDate = this.testDetailsForm.value.fromDate;
    };
    TestScheduleComponent.prototype.onTestTypeSelect = function (testType) {
        var _this = this;
        this.testScoreService.testTypeDetails(testType).subscribe(function (res) { return _this.testMarks(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    TestScheduleComponent.prototype.testMarks = function (data) {
        if (data.testTypeViewModel != null) {
            this.testTypeAndGradingForm.controls['testMaxMarks'].setValue(data.testTypeViewModel.marksCount);
        }
        else {
            this.testTypeAndGradingForm.controls['testMaxMarks'].setValue(null);
        }
    };
    TestScheduleComponent.prototype.testScheduleClear = function () {
        this.testScheduleFormData.resetForm();
        this.selectedClasses = [];
        this.selectedSection = Promise.resolve([]);
        this.stepper.selected.interacted = false;
    };
    TestScheduleComponent.prototype.getOptionalClassStep = function () {
        if (this.allClassSectionDetails.length) {
            this.classSectionForm.patchValue({ classSectionStepper: true, emitEvent: false });
            return true;
        }
        this.classSectionForm.patchValue({ classSectionStepper: null, emitEvent: false });
        return false;
    };
    TestScheduleComponent.prototype.getOptionalScheduleStep = function () {
        if (!this.validateTestSchedules() && this.allClassSectionDetails.length) {
            this.testScheduleForm.patchValue({ testStepper: true, emitEvent: false });
            return true;
        }
        this.testScheduleForm.patchValue({ testStepper: null, emitEvent: false });
        return false;
    };
    TestScheduleComponent.prototype.onClassSectionNext = function () {
        if (!this.allClassSectionDetails.length) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].TEST_CLASS_SECTION, true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('testScheduleFormData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestScheduleComponent.prototype, "testScheduleFormData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('classSectionFormData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestScheduleComponent.prototype, "classSectionFormData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('testDetailForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestScheduleComponent.prototype, "testDetailForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestScheduleComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TestScheduleComponent.prototype, "onPopState", null);
    TestScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-test-schedule',
            template: __webpack_require__(/*! ./test-schedule.component.html */ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.html"),
            providers: [app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_1__["ClassesConfigService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_1__["ClassesConfigService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__["ClassTimetableService"], app_service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TestScheduleService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_4__["GardeTermConfigurationService"], app_service_grading_service_api_testScore_service__WEBPACK_IMPORTED_MODULE_15__["TestScoreService"]],
            styles: [__webpack_require__(/*! ./test-schedule.component.scss */ "./src/app/modules/academics/grading/test-schedule/test-schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_1__["ClassesConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__["ClassTimetableService"],
            app_service_grading_service_api_test_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TestScheduleService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_4__["GardeTermConfigurationService"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"], app_service_grading_service_api_testScore_service__WEBPACK_IMPORTED_MODULE_15__["TestScoreService"]])
    ], TestScheduleComponent);
    return TestScheduleComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/grading-service/api/student-assessment-grade.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/service/grading-service/api/student-assessment-grade.service.ts ***!
  \*********************************************************************************/
/*! exports provided: StudentAssessmentGradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAssessmentGradeService", function() { return StudentAssessmentGradeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var StudentAssessmentGradeService = /** @class */ (function () {
    function StudentAssessmentGradeService(httpClient, basePath, commonComponent, configuration) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = _url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + _url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base;
        // protected basePath = 'http://localhost:8030';
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
    StudentAssessmentGradeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentAssessmentGradeService.prototype.createClassAssessmentParameters = function (classAssesmentGrades, observe, reportProgress) {
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
        return this.httpClient.post(this.basePath + "/StudentAssessmentGrade/class-assessment-grades", classAssesmentGrades, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentAssessmentGradeService.prototype.fetchAssessmentGrades = function (classAssessmentGradesForm, isShowAll, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.schoolBoardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.gradingTermId, 'GradingTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentGroupId, 'AssesmentGroupId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentCategoryId, 'AssesmentCateoryId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentParameterId, 'AssesmentParameterId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(isShowAll, 'isShowAll', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/StudentAssessmentGrade/students-assessment-grades", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get all for Student AssessmentGrades
     *
     * @param classId Gets or sets ClassId
     * @param sectionId Gets or sets SectionId
     * @param schoolBoardId Gets or sets SchoolBoardId
     * @param gradingTermId Gets or sets GradingTermId
     * @param schoolAcademicSessionStudentId Gets or sets SchoolAcademicSessionStudentId
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param messages
     * @param statusCode
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StudentAssessmentGradeService.prototype.studentAssessmentGrades = function (classAssessmentGradesForm, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (classAssessmentGradesForm.classId !== undefined && classAssessmentGradesForm.classId !== null) {
            queryParameters = queryParameters.set('ClassId', classAssessmentGradesForm.classId);
        }
        if (classAssessmentGradesForm.sectionId !== undefined && classAssessmentGradesForm.sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', classAssessmentGradesForm.sectionId);
        }
        if (classAssessmentGradesForm.schoolBoardId !== undefined && classAssessmentGradesForm.schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', classAssessmentGradesForm.schoolBoardId);
        }
        if (classAssessmentGradesForm.gradingTermId !== undefined && classAssessmentGradesForm.gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', classAssessmentGradesForm.gradingTermId);
        }
        if (classAssessmentGradesForm.schoolAcademicSessionStudentId !== undefined && classAssessmentGradesForm.schoolAcademicSessionStudentId !== null) {
            queryParameters = queryParameters.set('SchoolAcademicSessionStudentId', classAssessmentGradesForm.schoolAcademicSessionStudentId);
        }
        if (classAssessmentGradesForm.sortBy !== undefined && classAssessmentGradesForm.sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', classAssessmentGradesForm.sortBy);
        }
        if (classAssessmentGradesForm.sortOrder !== undefined && classAssessmentGradesForm.sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', classAssessmentGradesForm.sortOrder);
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
        return this.httpClient.get(this.basePath + "/StudentAssessmentGrade/student-assessments", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentAssessmentGradeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"],
            _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], StudentAssessmentGradeService);
    return StudentAssessmentGradeService;
}());



/***/ }),

/***/ "./src/app/service/report-card-service/grade-report.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/report-card-service/grade-report.service.ts ***!
  \*********************************************************************/
/*! exports provided: GradeReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeReportService", function() { return GradeReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var GradeReportService = /** @class */ (function () {
    function GradeReportService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Course;
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
    GradeReportService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    GradeReportService.prototype.studentReportsFetchReportsDetailsGet = function (schoolAcademicSessionStudentId, board, studentName, gradingTermId, gradingTermName, reportCardStatus, admissionNumber, rollNumber, classIds, sectionIds, studentIds, statusId, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(board, 'Board', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentName, 'StudentName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(gradingTermId, 'GradingTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(gradingTermName, 'GradingTermName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(reportCardStatus, 'ReportCardStatus', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumber, 'AdmissionNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumber, 'RollNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentIds, 'StudentIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusId, 'StatusId', queryParameters);
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
        return this.httpClient.get(this.basePath + "/StudentReports/fetch-reports-details", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.studentReportsReportsGetGet = function (id, gradingTermId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling studentReportsReportsGetGet.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
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
        return this.httpClient.get(this.basePath + "/StudentReports/reports-get", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.reportsGenerateStudentReportGet = function (gradingTermId, studentIds, classId, sectionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
        }
        if (studentIds) {
            studentIds.forEach(function (element) {
                queryParameters = queryParameters.append('StudentIds', element);
            });
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
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
        return this.httpClient.get(this.basePath + "/Reports/generate-student-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.reportsApprovePendingapprovalReportsPut = function (schoolAcademicSessionStudentIds, gradingTermId, classId, sectionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolAcademicSessionStudentIds) {
            schoolAcademicSessionStudentIds.forEach(function (element) {
                queryParameters = queryParameters.append('SchoolAcademicSessionStudentIds', element);
            });
        }
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
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
        return this.httpClient.put(this.basePath + "/Reports/approve-pendingapproval-reports", null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.reportsApprovedReportFilesGet = function (schoolAcademicSessionStudentIds, gradingTermId, classId, sectionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolAcademicSessionStudentIds) {
            schoolAcademicSessionStudentIds.forEach(function (element) {
                queryParameters = queryParameters.append('SchoolAcademicSessionStudentIds', element);
            });
        }
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
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
        return this.httpClient.get(this.basePath + "/Reports/approved-report-files", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.reportsClearStudentReportsDelete = function (schoolAcademicSessionStudentIds, gradingTermId, classId, sectionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolAcademicSessionStudentIds) {
            schoolAcademicSessionStudentIds.forEach(function (element) {
                queryParameters = queryParameters.append('SchoolAcademicSessionStudentIds', element);
            });
        }
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
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
        return this.httpClient.delete(this.basePath + "/Reports/clear-student-reports", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.reportsGeneratePendingIncompleteReportsPost = function (schoolAcademicSessionStudentId, board, gradingTermId, classId, sectionId, studentIds, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolAcademicSessionStudentId) {
            schoolAcademicSessionStudentId.forEach(function (element) {
                queryParameters = queryParameters.append('SchoolAcademicSessionStudentId', element);
            });
        }
        if (board !== undefined && board !== null) {
            queryParameters = queryParameters.set('Board', board);
        }
        if (gradingTermId !== undefined && gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', gradingTermId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
        }
        if (studentIds) {
            studentIds.forEach(function (element) {
                queryParameters = queryParameters.append('StudentIds', element);
            });
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
        return this.httpClient.post(this.basePath + "/Reports/generate-pending-incomplete-reports", null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.studentReportsStudentAdditionalInformationGet = function (schoolAcademicSessionStudentId, board, studentNames, gradingTermId, gradingTermName, reportCardStatus, admissionNumbers, rollNumbers, classIds, sectionIds, studentIds, reportCardItemName, reportCardItemValue, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(board, 'Board', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(gradingTermId, 'GradingTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(gradingTermName, 'GradingTermName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(reportCardStatus, 'ReportCardStatus', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumbers, 'AdmissionNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumbers, 'RollNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentIds, 'StudentIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(reportCardItemName, 'ReportCardItemName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(reportCardItemValue, 'ReportCardItemValue', queryParameters);
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
        return this.httpClient.get(this.basePath + "/StudentReports/student-additional-information", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService.prototype.studentReportsStudentCustomDetailsPut = function (studentCustomFieldsView, observe, reportProgress) {
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
        return this.httpClient.put(this.basePath + "/StudentReports/student-custom-details", studentCustomFieldsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    GradeReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], GradeReportService);
    return GradeReportService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-grading-academic-grading-module~app-modules-staff-staff-module.js.map