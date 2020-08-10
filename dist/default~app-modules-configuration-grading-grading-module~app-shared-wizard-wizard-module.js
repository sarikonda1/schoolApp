(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-grading-grading-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/academic-grades/academic-grades.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' (openAddForm)=\"addForm()\" [closeRowForm]='closeAddPanel'\n  [templateRef]=\"addAcademicGradeTemplate\" (getTableData)='getAcdademicGrades($event)'></app-table>\n\n<ng-template #addAcademicGradeTemplate>\n  <form [formGroup]=\"academicgradeForm\" (ngSubmit)=\"addUpdateAcademicGrade(academicgradeForm)\" #academicGrade=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"20\" class=\"pr-sm-24\">\n        <mat-label #gradeIndicator translate>Grade</mat-label>\n        <input (keyup)=\"preventSpace($event,'academicgradeForm','gradeIndicator')\" matInput autocomplete=\"off\" formControlName=\"gradeIndicator\" (blur)=\"trimTextBoxSpaces('academicgradeForm','gradeIndicator')\"\n          required>\n        <mat-error>\n          <app-validation [labelName]=\"gradeIndicator.innerText\" [validationControl]=\"academicgradeForm.controls.gradeIndicator\"\n            [doValidate]=\"academicGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-24\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"20\">\n        <mat-label #lowMark translate>LowMark</mat-label>\n        <input matInput autocomplete=\"off\" formControlName=\"lowMark\" (blur)=\"trimTextBoxSpaces('academicgradeForm','lowMark')\" required>\n        <mat-error>\n          <app-validation [labelName]=\"lowMark.innerText\" [validationControl]=\"academicgradeForm.controls.lowMark\"\n            [doValidate]=\"academicGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-24\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"20\">\n        <mat-label #highMark translate>HighMark</mat-label>\n        <input matInput autocomplete=\"off\" formControlName=\"highMark\" (blur)=\"trimTextBoxSpaces('academicgradeForm','highMark')\" required>\n        <mat-error>\n          <app-validation [labelName]=\"highMark.innerText\" [validationControl]=\"academicgradeForm.controls.highMark\"\n            [doValidate]=\"academicGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"40\">\n        <mat-label #evaluation translate>Evaluation</mat-label>\n        <input (keyup)=\"preventSpace($event,'academicgradeForm','evaluation')\" matInput autocomplete=\"off\" formControlName=\"evaluation\" (blur)=\"trimTextBoxSpaces('academicgradeForm','evaluation')\">\n        <mat-error>\n          <app-validation [labelName]=\"evaluation.innerText\" [validationControl]=\"academicgradeForm.controls.evaluation\"\n            [doValidate]=\"academicGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\" class=\"pt-12\">\n      <mat-form-field *ngIf=\"isSchoolBoards\" appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill>\n        <mat-label #schoolBoardId translate>School Board</mat-label>\n        <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"onSelectSchoolBoard($event.value)\" required>\n          <mat-option *ngFor=\"let schoolBoard of schoolBoardsList\" [value]=\"schoolBoard.value\">\n            {{schoolBoard.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='schoolBoardId.innerText' [validationControl]=\"academicgradeForm.controls.schoolBoardId\"\n            [doValidate]=\"academicGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill>\n        <mat-label #classId translate>Class</mat-label>\n        <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n          <mat-option *ngIf=\"classNames?.length\"></mat-option>\n          <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n            {{class.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill>\n        <mat-label #sectionId translate>Section</mat-label>\n        <mat-select formControlName=\"sectionId\">\n          <mat-option *ngIf=\"sectionNames?.length\"></mat-option>\n          <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section.value\">\n            {{section.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n      <button mat-raised-button type=\"button\" class=\"text-uppercase mr-12\" (click)=\"onCancelClick()\">{{'Cancel' | translate}}</button>\n      <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n        mat-button>{{this.buttonName | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/academic-grades/academic-grades.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL2FjYWRlbWljLWdyYWRlcy9hY2FkZW1pYy1ncmFkZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/academic-grades/academic-grades.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AcademicGradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicGradesComponent", function() { return AcademicGradesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var AcademicGradesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcademicGradesComponent, _super);
    function AcademicGradesComponent(gradeSetupService, commonService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.academicGradeFormSubmitted = true;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.isSchoolBoards = false;
        _this.sectionsList = [];
        _this.custRowsPerPageOptions = [];
        _this.classNames = [];
        _this.sectionNames = [];
        _this.selectAll = false;
        _this.isDeleteAllRequired = false;
        _this.closeAddPanel = false;
        _this.isUpdateData = false;
        _this.academicGradeIds = [];
        _this.failedRecords = [];
        _this.filterClasses = [];
        _this.filterSections = [];
        _this.errorsList = [];
        _this.currentComponent = 'AcademicGradesComponent';
        _this.disbleSubmitBtn = false;
        _this.academicGradeParameters = {
            sortBy: '',
            sortOrder: 0,
            gradeIndicator: [],
            highMark: [],
            lowMark: [],
            schoolBoardId: [],
            evaluation: [],
            classId: [],
            sectionId: [],
            pageNumber: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGENUMBER,
            pageSize: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    AcademicGradesComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.academicGradeParameters = modelTableComponent;
        }
        this.cols = [
            { field: 'gradeIndicator', header: 'Grade', sort: true },
            { field: 'lowMark', header: 'LowMark', sort: true },
            { field: 'highMark', header: 'HighMark', sort: true },
            { field: 'schoolBoard', header: 'School board', sort: true },
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'evaluation', header: 'Evaluation', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.academicGradeParameters,
            tablename: 'Academic Grades',
            componentName: this.currentComponent
        };
        this.commonService.getTableLSObj(this.tabSettings);
        this.getAcdademicGrades(this.academicGradeParameters);
        // initialization of form controls in form group
        this.academicgradeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            gradeIndicator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]),
            lowMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_constants__WEBPACK_IMPORTED_MODULE_7__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]),
            highMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_constants__WEBPACK_IMPORTED_MODULE_7__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]),
            evaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    // get the list school boards
    AcademicGradesComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.schoolBoardsList = [];
        this.commonService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews.length) {
                _this.isSchoolBoards = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.setDefaultBoard();
            }
            else {
                _this.isSchoolBoards = false;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // on Selection of school board
    AcademicGradesComponent.prototype.onSelectSchoolBoard = function (schoolBoard) {
        var _this = this;
        this.classNames = [];
        this.sectionNames = [];
        this.academicgradeForm.controls['classId'].setValue('');
        this.academicgradeForm.controls['sectionId'].setValue('');
        this.commonService.schoolAcademicClasses(schoolBoard, null).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classNames.push({
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
    // on selection of class
    AcademicGradesComponent.prototype.onSelectClass = function (data) {
        if (data.value) {
            this.getSectionsBasedOnClass(data.value);
        }
        else {
            this.academicgradeForm.controls['sectionId'].setValue('');
            this.sectionNames = [];
        }
    };
    // End
    AcademicGradesComponent.prototype.getSectionsBasedOnClass = function (classId) {
        var _this = this;
        if (classId) {
            this.sectionNames = [];
            this.commonService.schoolAcademicClassSections(null, classId).subscribe(function (response) {
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
        }
    };
    // Get Sections to filter table data
    AcademicGradesComponent.prototype.getSectionsList = function () {
        var _this = this;
        this.filterSections = [];
        this.commonService.schoolAcademicClassSections().subscribe(function (response) {
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
    //  list of academic grade Configurations
    AcademicGradesComponent.prototype.getAcdademicGrades = function (academicGradeParams) {
        var _this = this;
        this.academicGradeParameters = academicGradeParams;
        this.gradeSetupService.academicGrades(academicGradeParams.gradeIndicator, academicGradeParams.highMark, academicGradeParams.lowMark, academicGradeParams.evaluation, academicGradeParams.classId, academicGradeParams.sectionId, academicGradeParams.schoolBoardId, academicGradeParams.sortBy, academicGradeParams.sortOrder, academicGradeParams.pageNumber, academicGradeParams.pageSize).subscribe(function (res) { _this.getAcademicGradesData(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    AcademicGradesComponent.prototype.getAcademicGradesData = function (gradesData) {
        if (!gradesData.searchAacademicGradeData) {
            this.rows = [];
        }
        else {
            this.rows = gradesData.searchAacademicGradeData.list;
            this.totalItems = gradesData.searchAacademicGradeData.totalItems;
        }
        var academicGradeOperations = [
            {
                name: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_OPERATION,
                icon: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT
            },
            {
                name: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_OPERATION,
                icon: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE,
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = academicGradeOperations;
        });
        if (gradesData.searchAacademicGradeData) {
            this.academicGradeParameters.pageNumber = gradesData.searchAacademicGradeData.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.academicGradeParameters,
            rows: this.rows,
            tablename: 'Academic Grades',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Academic Grades'
                },
            },
            filtersList: gradesData.filters
        };
        this.getSchoolBoardsList();
    };
    // End
    // to open the add form(reset things)
    AcademicGradesComponent.prototype.addForm = function () {
        this.closeAddPanel = false;
        this.isUpdateData = false;
        this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].SUBMIT;
    };
    // End
    // submit the data of academic grades
    AcademicGradesComponent.prototype.addUpdateAcademicGrade = function (academicGradeForm) {
        var _this = this;
        this.academicGradeFormSubmitted = true;
        if (academicGradeForm.status === _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (this.isUpdateData === true) {
                this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].UPDATE;
                this.academicGradeView = academicGradeForm.value;
                this.academicGradeView.id = this.academicDetails.id;
                this.gradeSetupService.updateAcademicGrades(this.academicGradeView).subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].SUBMIT;
                this.gradeConfigurationView = academicGradeForm.value;
                this.gradeSetupService.createAcademicGrades(this.gradeConfigurationView).subscribe(function (res) { return _this.addResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // End
    // response after add data of academic grades
    AcademicGradesComponent.prototype.addResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["CONFLICT"]) {
            this.closeAddPanel = true;
            this.getAcdademicGrades(this.academicGradeParameters);
            this.clearForm();
            this.isUpdateData = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // response of academic grade after update data
    AcademicGradesComponent.prototype.updateResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                this.getAcdademicGrades(this.academicGradeParameters);
                this.clearForm();
                this.isUpdateData = false;
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // onCancelClick
    AcademicGradesComponent.prototype.onCancelClick = function () {
        this.clearForm();
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.academicGradeFormSubmitted = false;
        this.disbleSubmitBtn = false;
        this.sectionNames = [];
    };
    // End
    // row-wise actions of the table(edit/delete)
    AcademicGradesComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT) {
            this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].UPDATE;
            this.isUpdateData = true;
            this.closeAddPanel = false;
            this.gradeSetupService.academicGradesById(response.clickedRow.id)
                .subscribe(function (res) { return _this.academicGradesByIdValue(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (response.operation === _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO, btn2Text: _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === _app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES) {
                    _this.gradeSetupService.deleteAcademicGrades(response.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    // End
    // response after delete operation
    AcademicGradesComponent.prototype.deleteResponse = function (deleteResponse) {
        this.getAcdademicGrades(this.academicGradeParameters);
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    // End
    // to set academic grades data to form after edit click
    AcademicGradesComponent.prototype.academicGradesByIdValue = function (gradeData) {
        if (gradeData.academicGradeView != null) {
            this.onSelectSchoolBoard(gradeData.academicGradeView.schoolBoardId);
            this.academicgradeForm.controls['gradeIndicator'].setValue(gradeData.academicGradeView.gradeIndicator);
            this.academicgradeForm.controls['lowMark'].setValue(gradeData.academicGradeView.lowMark);
            this.academicgradeForm.controls['highMark'].setValue(gradeData.academicGradeView.highMark);
            this.academicgradeForm.controls['evaluation'].setValue(gradeData.academicGradeView.evaluation);
            this.academicgradeForm.controls['schoolBoardId'].setValue(gradeData.academicGradeView.schoolBoardId);
            this.academicgradeForm.controls['classId'].setValue(gradeData.academicGradeView.classId);
            if (gradeData.academicGradeView.classId !== null && gradeData.academicGradeView.classId !== undefined) {
                this.getSectionsBasedOnClass(gradeData.academicGradeView.classId);
            }
            this.academicgradeForm.controls['sectionId'].setValue(gradeData.academicGradeView.sectionId);
            this.academicDetails = gradeData.academicGradeView;
        }
        else {
            this.openSnackBar(gradeData.messages.ResultMessage, true);
        }
    };
    AcademicGradesComponent.prototype.clearForm = function () {
        this.academicgradeForm.reset();
        this.myAcademicGradeForm.resetForm();
        this.setDefaultBoard();
    };
    AcademicGradesComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('academicgradeForm', 'schoolBoardId', this.schoolBoardsList[0].value);
        this.onSelectSchoolBoard(this.schoolBoardsList[0].value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addAcademicGradeTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicGradesComponent.prototype, "addAcademicGradeTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('academicGrade'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcademicGradesComponent.prototype, "myAcademicGradeForm", void 0);
    AcademicGradesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-grades',
            template: __webpack_require__(/*! ./academic-grades.component.html */ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.html"),
            styles: [__webpack_require__(/*! ./academic-grades.component.scss */ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__["GradeSetupService"], _service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AcademicGradesComponent);
    return AcademicGradesComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-table [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' (openAddForm)=\"addForm()\" [closeRowForm]='closeAddPanel'\n  [templateRef]=\"addAssessmentGradeTemplate\" (getTableData)='getAssessmentGrades($event)'></app-table>\n\n<ng-template #addAssessmentGradeTemplate>\n  <form [formGroup]=\"assessmentgradeForm\" (ngSubmit)=\"addUpdateAssessmentGrade(assessmentgradeForm)\" #assessmentGrade=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\">\n        <mat-label #gradeIndicator translate>GradeIndicator</mat-label>\n        <input (keyup)=\"preventSpace($event,'assessmentgradeForm','gradeIndicator')\" matInput autocomplete=\"off\" formControlName=\"gradeIndicator\" (blur)=\"trimTextBoxSpaces('assessmentgradeForm','gradeIndicator')\"\n          required>\n        <mat-error>\n          <app-validation [labelName]=\"gradeIndicator.innerText\" [validationControl]=\"assessmentgradeForm.controls.gradeIndicator\"\n            [doValidate]=\"assessmentGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\">\n        <mat-label #evaluation translate>Evaluation</mat-label>\n        <input (keyup)=\"preventSpace($event,'assessmentgradeForm','evaluation')\" matInput autocomplete=\"off\" formControlName=\"evaluation\" (blur)=\"trimTextBoxSpaces('assessmentgradeForm','evaluation')\"\n          required>\n        <mat-error>\n          <app-validation [labelName]=\"evaluation.innerText\" [validationControl]=\"assessmentgradeForm.controls.evaluation\"\n            [doValidate]=\"assessmentGradeFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n      <button mat-raised-button type=\"button\" class=\"text-uppercase\" (click)=\"onCancelClick()\">{{'Cancel' | translate}}</button>\n        <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase ml-12\"\n        mat-button>{{this.buttonName | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL2Fzc2Vzc21lbnQtZ3JhZGVzL2Fzc2Vzc21lbnQtZ3JhZGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AssessmentGradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentGradesComponent", function() { return AssessmentGradesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");










var AssessmentGradesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssessmentGradesComponent, _super);
    function AssessmentGradesComponent(gradeSetupService, commonService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.assessmentGradeFormSubmitted = true;
        _this.closeAddPanel = false;
        _this.isUpdateData = false;
        _this.currentComponent = 'AssessmentGradesComponent';
        _this.custRowsPerPageOptions = [];
        _this.errorsList = [];
        _this.disbleSubmitBtn = false;
        _this.assessmentGradeParameters = {
            sortBy: '',
            sortOrder: 0,
            gradeIndicator: [],
            evaluation: [],
            pageNumber: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    AssessmentGradesComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.assessmentGradeParameters = modelTableComponent;
        }
        this.cols = [
            { field: 'gradeIndicator', header: 'Grade', sort: true },
            { field: 'evaluation', header: 'Evaluation', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.assessmentGradeParameters,
            tablename: 'Assessment Grades',
            componentName: this.currentComponent
        };
        this.commonService.getTableLSObj(this.tabSettings);
        this.getAssessmentGrades(this.assessmentGradeParameters);
        // initialization of form controls in form group
        this.assessmentgradeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            gradeIndicator: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3)]),
            evaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(25)]),
        });
    };
    //  list of assessment grade Configurations
    AssessmentGradesComponent.prototype.getAssessmentGrades = function (assessmentGradeParams) {
        var _this = this;
        this.assessmentGradeParameters = assessmentGradeParams;
        this.gradeSetupService.assessmentGrades(assessmentGradeParams.gradeIndicator, assessmentGradeParams.evaluation, assessmentGradeParams.sortBy, assessmentGradeParams.sortOrder, assessmentGradeParams.pageNumber, assessmentGradeParams.pageSize).subscribe(function (res) { _this.getAssessmentGradesData(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    AssessmentGradesComponent.prototype.getAssessmentGradesData = function (gradesData) {
        if (!gradesData.searchAssessmentGradeData) {
            this.rows = [];
        }
        else {
            this.rows = gradesData.searchAssessmentGradeData.list;
            this.totalItems = gradesData.searchAssessmentGradeData.totalItems;
        }
        var assessmentGradeOperations = [
            {
                name: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_OPERATION,
                icon: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT
            },
            {
                name: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_OPERATION,
                icon: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE,
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = assessmentGradeOperations;
        });
        if (gradesData.searchAssessmentGradeData) {
            this.assessmentGradeParameters.pageNumber = gradesData.searchAssessmentGradeData.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.assessmentGradeParameters,
            rows: this.rows,
            tablename: 'Assessment Grades',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Assessment Grades'
                },
            },
            filtersList: gradesData.filters
        };
    };
    // End
    // to open the add form(reset things)
    AssessmentGradesComponent.prototype.addForm = function () {
        this.closeAddPanel = false;
        this.assessmentgradeForm.reset();
        this.myAssessmentGradeForm.resetForm();
        this.isUpdateData = false;
        this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SUBMIT;
    };
    // End
    // to add/update of assement grade
    AssessmentGradesComponent.prototype.addUpdateAssessmentGrade = function (assessmentGrade) {
        var _this = this;
        this.assessmentGradeFormSubmitted = true;
        if (this.assessmentgradeForm.status === _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (this.isUpdateData === true) {
                this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].UPDATE;
                this.assessmentGradeConfigurationView = assessmentGrade.value;
                this.assessmentGradeConfigurationView.id = this.assessmentGradeDetails.id;
                this.gradeSetupService.updateAssessmentGrades(this.assessmentGradeConfigurationView).subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SUBMIT;
                this.assessmentGradeView = assessmentGrade.value;
                this.gradeSetupService.createAssessmentGrades(this.assessmentGradeView).subscribe(function (res) {
                    return _this.addResponse(res);
                }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // response after add data of assessment grades
    AssessmentGradesComponent.prototype.addResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                this.getAssessmentGrades(this.assessmentGradeParameters);
                this.assessmentgradeForm.reset();
                this.myAssessmentGradeForm.resetForm();
                this.isUpdateData = false;
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // response of assessment grade after update data
    AssessmentGradesComponent.prototype.updateResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                this.getAssessmentGrades(this.assessmentGradeParameters);
                this.assessmentgradeForm.reset();
                this.isUpdateData = false;
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // onCancelClick
    AssessmentGradesComponent.prototype.onCancelClick = function () {
        this.assessmentgradeForm.reset();
        this.myAssessmentGradeForm.resetForm();
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.assessmentGradeFormSubmitted = false;
        this.disbleSubmitBtn = false;
    };
    // End
    // row-wise actions of the table(edit/delete)
    AssessmentGradesComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT) {
            this.buttonName = _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].UPDATE;
            this.isUpdateData = true;
            this.closeAddPanel = false;
            this.gradeSetupService.assessmentGradesById(response.clickedRow.id)
                .subscribe(function (res) { return _this.assessmentGradesByIdValue(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (response.operation === _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, btn2Text: _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === _app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    _this.gradeSetupService.deleteAssessmentGrades(response.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    // End
    // response after delete operation
    AssessmentGradesComponent.prototype.deleteResponse = function (deleteResponse) {
        this.getAssessmentGrades(this.assessmentGradeParameters);
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    // End
    // to set assessment grades data to form after edit click
    AssessmentGradesComponent.prototype.assessmentGradesByIdValue = function (gradeData) {
        if (gradeData.assessmentGradeConfigurationView != null) {
            this.assessmentgradeForm.controls['gradeIndicator'].setValue(gradeData.assessmentGradeConfigurationView.gradeIndicator);
            this.assessmentgradeForm.controls['evaluation'].setValue(gradeData.assessmentGradeConfigurationView.evaluation);
            this.assessmentGradeDetails = gradeData.assessmentGradeConfigurationView;
        }
        else {
            this.openSnackBar(gradeData.messages.ResultMessage, true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addAssessmentGradeTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssessmentGradesComponent.prototype, "addAssessmentGradeTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assessmentGrade'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssessmentGradesComponent.prototype, "myAssessmentGradeForm", void 0);
    AssessmentGradesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment-grades',
            template: __webpack_require__(/*! ./assessment-grades.component.html */ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.html"),
            styles: [__webpack_require__(/*! ./assessment-grades.component.scss */ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"], _service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AssessmentGradesComponent);
    return AssessmentGradesComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GradingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradingRoutingModule", function() { return GradingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_type_test_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-type/test-type.component */ "./src/app/modules/configuration/grading/test-type/test-type.component.ts");
/* harmony import */ var _academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-grades/academic-grades.component */ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.ts");
/* harmony import */ var _grading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grading.component */ "./src/app/modules/configuration/grading/grading.component.ts");
/* harmony import */ var _grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grading-terms/grading-terms.component */ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.ts");
/* harmony import */ var _assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assessment-grades/assessment-grades.component */ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.ts");
/* harmony import */ var _grading_term_details_grading_term_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grading-term-details/grading-term-details.component */ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.ts");









var routes = [
    {
        path: '', component: _grading_component__WEBPACK_IMPORTED_MODULE_5__["GradingComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'test-type', data: { title: 'Courses' } },
            { path: 'test-type', component: _test_type_test_type_component__WEBPACK_IMPORTED_MODULE_3__["TestTypeComponent"], data: { title: 'Test Type' } },
            { path: 'academic-grades', component: _academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_4__["AcademicGradesComponent"], data: { title: 'Academic Grades' } },
            { path: 'grading-terms', component: _grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_6__["GradingTermsComponent"], data: { title: 'Grading Terms' } },
            { path: 'assessment-grades', component: _assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_7__["AssessmentGradesComponent"], data: { title: 'Assessment Grades' } },
            { path: '', pathMatch: 'full', redirectTo: 'test-type', data: { title: 'Courses' } },
            { path: 'grading-terms/grading-term-details/:Id', component: _grading_term_details_grading_term_details_component__WEBPACK_IMPORTED_MODULE_8__["GradingTermDetailsComponent"], data: { title: 'Grading Term Details' } },
            { path: 'grading-term-details', component: _grading_term_details_grading_term_details_component__WEBPACK_IMPORTED_MODULE_8__["GradingTermDetailsComponent"], data: { title: 'Grading Term Details' } },
        ]
    },
];
var GradingRoutingModule = /** @class */ (function () {
    function GradingRoutingModule() {
    }
    GradingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GradingRoutingModule);
    return GradingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"info-relative mt-12 pt-40\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"edit-info\">\n    <button mat-raised-button translate type=\"submit\" color=\"primary\" class=\"text-uppercase mr-4\" (click)=\"back()\">\n      Back\n    </button>\n  </div>\n</div>\n\n<mat-tab-group class=\"manage-institue\">\n  <mat-tab translate label=\"{{'Grading Term Details' | translate}}\">\n\n    <div class=\"mx-40 mb-20\" fxLayout=\"column\">\n      <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n        class=\"institution-details pt-0 confirm-table border mat-elevation-z3 simple-table-container radius-t-20\">\n\n        <ng-container *ngFor=\"let column of dataConfiguration | keys\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"gradeTermConfigurationColumns[column.key]\">\n            <div fxLayout=\"row\" fxFlex=\"40\"><strong>\n                {{gradeTermConfigurationColumns[column.key] | translate}}</strong></div>\n            <div fxLayout=\"row\" fxFlex=\"60\"><strong class=\"pr-4\">:</strong>{{column['value']?column['value']:'--'}}\n            </div>\n          </mat-list-item>\n        </ng-container>\n\n      </mat-list>\n    </div>\n\n  </mat-tab>\n\n  <mat-tab translate label=\"{{'Applies to Class & Section' | translate}}\">\n    <div class=\"mat-elevation-z3 simple-table-container radius-t-20 mx-40 mb-20\">\n      <app-table [settings]=\"appliedClassSection\">\n      </app-table>\n    </div>\n  </mat-tab>\n\n  <mat-tab translate label=\"{{'Tests & Contributions' | translate}}\"\n    *ngIf=\"gradeTestContributionSettings?.rows?.length\">\n    <div class=\"mat-elevation-z3 simple-table-container radius-t-20 mx-40 mb-20\">\n      <app-table [settings]=\"gradeTestContributionSettings\">\n      </app-table>\n    </div>\n  </mat-tab>\n\n  <mat-tab translate label=\"{{'Report Card Configurations' | translate}}\" *ngIf=\"additionalColumnsRows?.length\">\n    <div class=\"mat-elevation-z3 simple-table-container radius-t-20 mx-40 mb-20\">\n      <app-table [settings]=\"additionalColumns\">\n      </app-table>\n    </div>\n  </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage-institue ::ng-deep .mat-table .mat-row:last-child {\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL2dyYWRpbmctdGVybS1kZXRhaWxzL2dyYWRpbmctdGVybS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUtZLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uL2dyYWRpbmcvZ3JhZGluZy10ZXJtLWRldGFpbHMvZ3JhZGluZy10ZXJtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29uZmlybS10YWJsZXtcbi8vICAgICA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbi8vICAgICB3aWR0aDoxMDAlO1xuLy8gICAgIH1cbi8vICAgICAuYnJlYWstd29yZHtcbi8vICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4vLyAgICAgfVxuLy8gICAgIC5tYXQtbGlzdC1pdGVtOm50aC1vZi10eXBlKG9kZCkge1xuLy8gICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgICAubWF0LWxpc3QtaXRlbTpsYXN0LWNoaWxke1xuLy8gICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4vLyAgICAgfVxuLy8gICAgIH1cblxuLy8gLm1hbmFnZS1pbnN0aXR1ZS1lZGl0IHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDcxcHg7XG4vLyAgICAgdG9wOiA1NXB4O1xuLy8gICAgIHotaW5kZXg6IDk5O1xuLy8gfVxuXG4ubWFuYWdlLWluc3RpdHVlIHtcbiAgICA6Om5nLWRlZXAgLm1hdC10YWJsZSB7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC5tYXQtcm93Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GradingTermDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradingTermDetailsComponent", function() { return GradingTermDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var GradingTermDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GradingTermDetailsComponent, _super);
    function GradingTermDetailsComponent(_commonService, gradeTermConfigurationService, router, routes, location) {
        var _this = _super.call(this) || this;
        _this._commonService = _commonService;
        _this.gradeTermConfigurationService = gradeTermConfigurationService;
        _this.router = router;
        _this.routes = routes;
        _this.location = location;
        _this.evaluationTypes = [];
        _this.gradeTermIds = [];
        _this.marksGroupCriteria = [];
        _this.testTypes = [];
        _this.priorGradingTerms = [];
        _this.filterYesNo = [];
        _this.gradeClassSectionCols = [
            { field: 'className', header: 'Class Name', sort: false },
            { field: 'sectionName', header: 'Section Name', sort: false },
        ];
        _this.additionalColumnsData = [
            { field: 'title', header: 'Column Name', sort: false },
            { field: 'gradingTermName', header: 'Grading Term', sort: false },
            { field: 'contribution', header: 'Contribution %', sort: false },
            { field: 'isVisible', header: 'Is Visible', sort: false },
        ];
        _this.columnsToDisplayTest = [
            { field: 'testTypeName', header: 'Name', sort: false },
            { field: 'contribution', header: 'Contribution', sort: false },
            { field: 'consideration', header: 'Consideration', sort: false },
            { field: 'isDisplayOnreportCard', header: 'Displayed On Report Card', sort: false },
            { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
            { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
            { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
            { field: 'displayGradeorMarks', header: 'Display Grade/Marks', sort: false },
        ];
        _this.gradeTermConfigurationColumns = {
            termName: 'Term Name',
            description: 'Description',
            displayName: 'Display Name',
            termCode: 'Term Code',
            evaluationTypeId: 'Evaluation Type Id',
            evaluationTypeName: 'Evaluation Type',
            generateReportCard: 'Generate Report',
            termStartDate: 'Term Start Date',
            termEndDate: 'Term End Date',
            generateOverAllGrade: 'Generate Overall Grade',
            overALLGradeDisplayName: 'Overall Grade Display Name',
            schoolBoardName: 'School Board'
        };
        return _this;
    }
    GradingTermDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEvaluationTypeList();
        this.yesNoList();
        this.getMarksGroupCriteria();
        this.getTestTypes();
        this.routes.params
            .subscribe(function (params) { return _this.gradeTermId = params['Id']; });
        this.gradeTermConfigurationService.gradingTermConfigurationGradeTermGet(this.gradeTermId).subscribe(function (res) {
            _this.data = res.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
            var sections = [];
            for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                var section = _a[_i];
                sections.push(section.sectionsId);
            }
            var dataInfo = {
                boardId: _this.data[0].boardId,
                classId: _this.data[0].classId,
                sectionId: sections
            };
            _this.getPriorGradingTerms(res, dataInfo);
        });
    };
    GradingTermDetailsComponent.prototype.configurationResponse = function (_data) {
        delete _data['gradingTermTestViewModel'];
        delete _data['gradingTermClassSectionViewModel'];
        delete _data['id'];
        delete _data['evaluationTypeId'];
        delete _data['schoolBoardId'];
        delete _data['isContribution'];
        this.dataConfiguration = _data;
        this.dataConfiguration.termStartDate = (this.dataConfiguration.termStartDate == null) ?
            null : this._commonService.customDateFormat(this.dataConfiguration.termStartDate, this.getSchoolDateFormat()).date;
        this.dataConfiguration.termEndDate = (this.dataConfiguration.termEndDate == null) ?
            null : this._commonService.customDateFormat(this.dataConfiguration.termEndDate, this.getSchoolDateFormat()).date;
        this.dataConfiguration.testsStartDate = (this.dataConfiguration.testsStartDate == null) ?
            null : this._commonService.customDateFormat(this.dataConfiguration.testsStartDate, this.getSchoolDateFormat()).date;
        this.dataConfiguration.testsEndDate = (this.dataConfiguration.testsEndDate == null)
            ? null : this._commonService.customDateFormat(this.dataConfiguration.testsEndDate, this.getSchoolDateFormat()).date;
        this.dataConfiguration.generateOverAllGrade = this._commonService.defaultEmpty(this._commonService.selectedDropDownData(this.filterYesNo, this.dataConfiguration.generateOverAllGrade)).label;
        this.dataConfiguration.generateReportCard = this._commonService.defaultEmpty(this._commonService.selectedDropDownData(this.filterYesNo, this.dataConfiguration.generateReportCard)).label;
    };
    GradingTermDetailsComponent.prototype.getEvaluationTypeList = function () {
        var _this = this;
        this.evaluationTypes = [];
        this.gradeTermConfigurationService.evaluationTypes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.evaluationTypes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    GradingTermDetailsComponent.prototype.getMarksGroupCriteria = function () {
        var _this = this;
        this.marksGroupCriteria = [];
        this.gradeTermConfigurationService.fetchMarksGroupCriteria().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.marksGroupCriteria.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    GradingTermDetailsComponent.prototype.yesNoList = function () {
        this.filterYesNo = [];
        this.filterYesNo.push({
            label: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES,
            value: 1
        });
        this.filterYesNo.push({
            label: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO,
            value: 0
        });
    };
    GradingTermDetailsComponent.prototype.getPriorGradingTerms = function (res, data) {
        var _this = this;
        this.priorGradingTerms = [];
        this.gradeTermConfigurationService.fetchGradingTermsByBoardId(data.boardId, data.classId, data.sectionId).subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.priorGradingTerms.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
            _this.dataTest = res.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel;
            _this.additionalColumnsRows = [];
            for (var _i = 0, _a = res.gradingTermConfigurationDataViewModel[0].usedGradingTermAdditionalView; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.additionalColumnsRows.push(_this.setAdditionalColumnData(value));
            }
            for (var _b = 0, _c = res.gradingTermConfigurationDataViewModel[0].forGradingTermAdditionalView; _b < _c.length; _b++) {
                var value = _c[_b];
                _this.additionalColumnsRows.push(_this.setAdditionalColumnData(value, true));
            }
            _this.configurationResponse(res.gradingTermConfigurationDataViewModel[0]);
            _this.fieldListClass = _this.gradeClassSectionCols.map(function (x) { return x.field; });
            _this.dataTest.forEach(function (e) {
                e.marksGroupCriteriaId = _this._commonService.defaultEmpty(_this._commonService.selectedDropDownData(_this.marksGroupCriteria, e.marksGroupCriteriaId)).label,
                    e.isDisplayOnreportCard = _this._commonService.defaultEmpty(_this._commonService.selectedDropDownData(_this.filterYesNo, e.isDisplayOnreportCard)).label,
                    e.otherGradingTermId = _this._commonService.defaultEmpty(_this._commonService.selectedDropDownData(_this.priorGradingTerms, e.otherGradingTermId)).label,
                    e.displayGradeorMarks = _this._commonService.defaultEmpty((_this._commonService.selectedDropDownData(_this.evaluationTypes, e.displayTypeId))).label;
            });
            var _loop_1 = function (i) {
                var index = _this.dataTest.findIndex(function (e) { return e[_this.columnsToDisplayTest[i].field]; });
                if (index === -1) {
                    _this.columnsToDisplayTest.splice(i, 1);
                }
            };
            for (var i = 0; i < _this.columnsToDisplayTest.length; i++) {
                _loop_1(i);
            }
            _this.fieldListTest = _this.columnsToDisplayTest.map(function (x) { return x.field; });
            _this.getGradeTermTable();
        });
    };
    GradingTermDetailsComponent.prototype.getTestTypes = function () {
        var _this = this;
        this.testTypes = [];
        this.gradeTermConfigurationService.fetchTestTypes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.testTypes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    GradingTermDetailsComponent.prototype.onBackButtonClick = function () {
        this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"].GRADE_TERMS]);
    };
    GradingTermDetailsComponent.prototype.getGradeTermTable = function () {
        this.classSectionRows = this.data;
        this.appliedClassSection = {
            rows: this.classSectionRows,
            columns: this.gradeClassSectionCols,
            hideHeader: true,
            tabTable: true,
            padding: true
        };
        this.gradeTestContributionRows = this.dataTest;
        this.gradeTestContributionSettings = {
            rows: this.gradeTestContributionRows,
            columns: this.columnsToDisplayTest,
            hideHeader: true,
            tabTable: true,
            padding: true
        };
        this.additionalColumns = {
            rows: this.additionalColumnsRows,
            columns: this.additionalColumnsData,
            hideHeader: true,
            // tabTable: true,
            padding: true
        };
    };
    GradingTermDetailsComponent.prototype.setAdditionalColumnData = function (value, isPresentGradingTerm) {
        if (isPresentGradingTerm === void 0) { isPresentGradingTerm = false; }
        return {
            title: value.title,
            gradingTermName: value.gradingTermName,
            isVisible: value.isVisible ? 'YES' : 'NO',
            contribution: value.contribution,
        };
    };
    GradingTermDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grading-term-details',
            template: __webpack_require__(/*! ./grading-term-details.component.html */ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.html"),
            styles: [__webpack_require__(/*! ./grading-term-details.component.scss */ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_4__["GardeTermConfigurationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], GradingTermDetailsComponent);
    return GradingTermDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-terms/grading-terms.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" id=\"app-table-grading-terms\" (selectedRows)=\"selectAllData($event)\"\n  [templateRef]=\"gradingTerm\" [templateRef]=\"gradingTerm\" (getTableData)='gradingTermTableData($event)'\n  (rowSelect)='onTableRowSelect($event)' (rowBasedAction)='rowActions($event)' [closeRowForm]='closeAddPanel'\n  (openAddForm)=\"openForm()\" [showSelectAll]=\"isDeleteAllRequired\" (rowUnselect)='onTableRowUnSelect($event)'>\n</app-table>\n\n<ng-template #gradingTerm>\n\n  <div *ngIf=\"cloneEnable\" class=\"p-24\" id=\"clone-form\">\n    <div class=\"h3 pb-12\" id=\"customExpansion\" translate>Clone Grading Term</div>\n    <mat-accordion class=\"tabs-table-padding0\">\n      <mat-expansion-panel [expanded]=\"true\" class=\"mb-16\">\n        <mat-expansion-panel-header class=\"border-bottom\">\n          <mat-panel-title class=\"h3\" translate>Selected Grading Term Details</mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-list fxLayout.gt-sm=\"row wrap\" fxFlex=\"100\" fxLayout=\"column\"\n          class=\"institution-details pt-0 confirm-table border m-24\" *ngIf=\"termConfigurationData\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngFor=\"let column of cloneGradeDetails\">\n            <div fxLayout=\"row\" fxFlex=\"45\" translate> {{column.header}}</div>\n            <div fxLayout=\"row\" fxFlex=\"55\">:<span class=\"pl-8\">{{termConfigurationData[column.field]?termConfigurationData[column.field]:'--'}}</span></div>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel (opened)=\"panelOpenState = true;onOpenTests()\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header class=\"border-bottom\">\n          <mat-panel-title class=\"h3\" translate>\n            Selected Grading Term's Test and Contributions\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-table [settings]=\"cloneGradingTermContributionSettings\">\n        </app-table>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <form fxLayout=\"column\" (ngSubmit)=\"clonePost(cloneFormGroup.value)\" [formGroup]=\"cloneFormGroup\"\n      #cloneGradingTermForm=\"ngForm\">\n      <div class=\"h3 pt-24\" translate> Clone to Class and Sections</div>\n      <div fxLayout=\"column\" class=\"pt-8\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n        <mat-form-field *ngIf=\"termConfigurationData && cloneClasses.length\" appearance=\"outline\" fxFlexFill\n          fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label translate #cloneClassId>Class</mat-label>\n          <mat-select required name=\"cloneClassId\" formControlName=\"cloneClassId\"\n            (selectionChange)=\"onClassSelect($event)\">\n            <mat-option *ngFor=\"let cloneClass of cloneClasses\" [value]=\"cloneClass.value\">\n              {{cloneClass.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"cloneClassId.innerText\"\n              [validationControl]=\"cloneFormGroup.controls.cloneClassId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n          <div #gradesexeed translate class=\"subCat\" translate>{{gradingTermsExceeded}}</div>\n        </mat-form-field>\n        <div *ngIf=\"termConfigurationData && !cloneClasses?.length\" class=\"message-box error\">\n          No class is available for board, to clone grading term.\n        </div>\n        <div *ngIf=\"cloneSections\" class=\"px-sm-24\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill>\n          <app-custom-dropdown formControlName=\"cloneSectionId\" appearance=\"outline\" fxFlexFill fxLayout=\"column\"\n            fxFlex=\"100\" fxFlex.gt-sm=\"18\" [dropDownConf]=\"cloneSections\" [disabled]=disableCloneSection\n            [errorCheck]=\"cloneFormGroup.controls.cloneSectionId\" ngDefaultControl>\n          </app-custom-dropdown>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-20\">\n        <button mat-raised-button class=\"mr-12 text-uppercase\" type=\"reset\"\n          (click)=\"onCloneCancel()\">{{'Cancel' | translate}}</button>\n        <button *ngIf=\"termConfigurationData && cloneClasses?.length\" mat-raised-button type=\"submit\" color=\"accent\"\n          [disabled]=\"cloneDisable\" class=\"text-uppercase\">\n          {{'Clone' | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n\n  <div *ngIf=\"!cloneEnable\">\n    <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"OnSelectionChange($event)\"\n      (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n      <mat-step [stepControl]=\"ClassSectionFormGroup\">\n        <form fxLayout=\"column\" (ngSubmit)=\"saveClassSection(ClassSectionFormGroup.value)\"\n          [formGroup]=\"ClassSectionFormGroup\" #classSectionForm=\"ngForm\">\n          <ng-template matStepLabel>{{'Applies to Class & Section' | translate}}</ng-template>\n          <div *ngIf=\"classSectionDisable\" fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" *ngIf=\"isSchoolBoards\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\">\n              <mat-label translate #board>Board</mat-label>\n              <mat-select required name=\"boardId\" formControlName=\"boardId\"\n                (selectionChange)=\"onSchoolBoardSelect($event)\">\n                <mat-option *ngFor=\"let board of schoolBoards\" [value]=\"board.value\">\n                  {{board.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"board.innerText\"\n                  [validationControl]=\"ClassSectionFormGroup.controls.boardId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\">\n              <mat-label translate #class>Class</mat-label>\n              <mat-select required name=\"classId\" formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\"\n                [disabled]=classDisabled>\n                <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n                  {{class.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"class.innerText\"\n                  [validationControl]=\"ClassSectionFormGroup.controls.classId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <div *ngIf=\"sectionNames\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlexFill>\n              <app-custom-dropdown formControlName=\"sectionsId\" appearance=\"outline\" fxFlexFill fxLayout=\"column\"\n                fxFlex=\"100\" fxFlex.gt-sm=\"18\" [dropDownConf]=\"sectionNames\" [disabled]=sectionDisabled\n                (selectedData)=\"onSelectSection($event)\" [errorCheck]=\"ClassSectionFormGroup.controls.sectionsId\"\n                ngDefaultControl>\n              </app-custom-dropdown>\n            </div>\n          </div>\n          <div\n            *ngIf=\"(gridData) && (isUpdateData|| gradeClassSectionViewModel && gradeClassSectionViewModel.sectionId != 0)\"\n            class=\"pb-20\">\n            <app-table [settings]=\"appliedClassSection\" (rowBasedAction)='deleteClassMember($event)'>\n            </app-table>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n            <button mat-raised-button translate class=\"mr-12 text-uppercase\" type=\"reset\" #formCancel id=\"formCancel\"\n              (click)=\"onCancel()\"> <span translate>Cancel</span> </button>\n            <button mat-raised-button matStepperNext translate type=\"submit\" color=\"accent\" class=\"text-uppercase\"><span\n                translate>Next</span>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"gradingTermForm\">\n        <form fxLayout=\"column\" (ngSubmit)=\"saveGradingTermDetails(gradingTermForm.value)\" [formGroup]=\"gradingTermForm\"\n          #gradeTermDetailsForm=\"ngForm\">\n          <ng-template translate matStepLabel>{{'Grading Term Details' | translate}}</ng-template>\n          <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #name>Name</mat-label>\n              <input (blur)=\"trimTextBoxSpaces('gradingTermForm','termName')\" (keyup)=\"preventSpace($event,'gradingTermForm','termName')\" matInput\n                required name=\"termName\" formControlName=\"termName\">\n              <mat-error>\n                <app-validation [labelName]=\"name.innerText\" [validationControl]=\"gradingTermForm.controls.termName\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #displayname>Display Name</mat-label>\n              <input (keyup)=\"preventSpace($event,'gradingTermForm','displayName')\" matInput name=\"displayName\" formControlName=\"displayName\"\n                (blur)=\"trimTextBoxSpaces('gradingTermForm','displayName')\">\n              <mat-error>\n                <app-validation [labelName]=\"displayname.innerText\"\n                  [validationControl]=\"gradingTermForm.controls.displayName\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"column\" class=\"pt-12\" fxFlexFill fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label translate #description>Description</mat-label>\n              <input (keyup)=\"preventSpace($event,'gradingTermForm','description')\" matInput name=\"description\" formControlName=\"description\"\n                (blur)=\"trimTextBoxSpaces('gradingTermForm','description')\">\n              <mat-error>\n                <app-validation [labelName]=\"description.innerText\"\n                  [validationControl]=\"gradingTermForm.controls.description\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlexFill class=\"pt-12\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label translate #code>Code</mat-label>\n              <input (keyup)=\"preventSpace($event,'gradingTermForm','termCode')\" matInput name=\"termCode\" formControlName=\"termCode\"\n                (blur)=\"trimTextBoxSpaces('gradingTermForm','termCode')\">\n              <mat-error>\n                <app-validation [labelName]=\"code.innerText\" [validationControl]=\"gradingTermForm.controls.termCode\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"36\" class=\"px-sm-20 icon-center\"\n              fxLayout=\"column\">\n              <mat-label #startDate translate>Term Start Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('termStartDate',gradingTermForm)\" required\n                [matDatepicker]=\"picker\" formControlName=\"termStartDate\" [min]=\"academicSessionMinDate\"\n                [max]=\"academicSessionMaxDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]=\"startDate.innerText\"\n                  [validationControl]=\"gradingTermForm.controls.termStartDate\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\" fxFlex.gt-sm=\"32\"\n              class=\"icon-center\">\n              <mat-label #endDate translate>Term End Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('termEndDate',gradingTermForm)\" required\n                [matDatepicker]=\"picker1\" [min]=\"gradingTermForm.controls.termStartDate.value\"\n                [max]=\"academicSessionMaxDate\" formControlName=\"termEndDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker #picker1></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]=\"endDate.innerText\"\n                  [validationControl]=\"gradingTermForm.controls.termEndDate\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #greport>Generate Report Card</mat-label>\n              <mat-select required name=\"generateReportCard\" formControlName=\"generateReportCard\">\n                <mat-option *ngFor=\"let yesAndNo of filterYesNo\" [value]=\"yesAndNo.value\">\n                  {{yesAndNo.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"greport.innerText\"\n                  [validationControl]=\"gradingTermForm.controls.generateReportCard\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n            <button translate mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n              <span translate>Previous</span>\n            </button>\n            <button translate mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n              <span translate>Next</span>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"TestsFormGroup\" [completed]=\"getTestOptional()\" [optional]=\"getTestOptional()\"\n        *ngIf=\"gradingTermForm.value.generateReportCard === 1\">\n        <form fxLayout=\"column\" (ngSubmit)=\"onSelect(TestsFormGroup.value)\" [formGroup]=\"TestsFormGroup\"\n          #testsForm=\"ngForm\" [doValidate]=\"validate\">\n          <ng-template translate matStepLabel>{{'Test Contributions/Considerations' | translate}}</ng-template>\n\n          <div fxLayoutAlign=\"center center\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" class=\"pt-12\">\n            <div translate fxLayout=\"row\">ConsiderationMessage</div>\n            <div fxLayout=\"row\" class=\"pt-8\">\n              <mat-radio-group name=\"opList\" [(ngModel)]=\"radioOptions\" [ngModelOptions]=\"{standalone: true}\"\n                (change)=\"onChangeContribution($event.value)\">\n                <mat-radio-button *ngFor=\"let op of contributionOptions\" class=\"mr-20\" [value]=\"op.id\" name=\"opList\">\n                  <span translate>{{ op.name}}</span></mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #othergradingterm>Prior Grading Term</mat-label>\n              <mat-select name=\"otherGradingTermId\" formControlName=\"otherGradingTermId\">\n                <mat-option *ngIf=\"priorGradingTerms?.length\" [value]=\"null\"></mat-option>\n                <mat-option [style.display]=\"(termId == gradingTerm?.value) ? 'none' : 'block'\"\n                  *ngFor=\"let gradingTerm of priorGradingTerms\" [value]=\"gradingTerm.value\">\n                  {{gradingTerm.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"othergradingterm.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.otherGradingTermId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #testtype>Test Type</mat-label>\n              <mat-select required name=\"testTypeId\" formControlName=\"testTypeId\">\n                <mat-option *ngFor=\"let testTypes of testTypes\" [value]=\"testTypes.value\">\n                  {{testTypes.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"testtype.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.testTypeId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field *ngIf=\"isContribution\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\">\n              <mat-label translate #contribution>Contribution to Subject Grade</mat-label>\n              <input matInput required name=\"contribution\" (keyup)=\"preventSpace($event,'TestsFormGroup','contribution')\" formControlName=\"contribution\"\n                (blur)=\"trimTextBoxSpaces('TestsFormGroup','contribution')\" placeholder=\"%\">\n              <mat-error>\n                <app-validation [labelName]=\"contribution.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.contribution\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field *ngIf=\"!isContribution\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\">\n              <mat-label translate #consideration>Consideration For Subject Grade</mat-label>\n              <input (keyup)=\"preventSpace($event,'TestsFormGroup','consideration')\"  matInput required name=\"consideration\"\n                formControlName=\"consideration\" (blur)=\"trimTextBoxSpaces('TestsFormGroup','consideration')\"\n                placeholder=\"%\">\n              <mat-error>\n                <app-validation [labelName]=\"consideration.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.consideration\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #displayOption>Display Option</mat-label>\n              <mat-select required name=\"displayOption\" formControlName=\"displayOption\">\n                <mat-option *ngFor=\"let evaluationType of evaluationTypes\" [value]=\"evaluationType.value\">\n                  {{evaluationType.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"displayOption.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.displayOption\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #groupingcriteria>Marks Group Criteria</mat-label>\n              <mat-select (selectionChange)=\"onSelectMarksGroupCriteria($event)\" required name=\"marksGroupCriteriaId\"\n                formControlName=\"marksGroupCriteriaId\">\n                <mat-option *ngFor=\"let criteria of marksGroupCriteria\" [value]=\"criteria.value\">\n                  {{criteria.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"groupingcriteria.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.marksGroupCriteriaId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #criteriacount>Marks Group Criteria Count</mat-label>\n              <input [required]=\"markGroupRequired\" (keyup)=\"preventSpace($event,'TestsFormGroup','marksGroupCriteriaCount')\" matInput\n                [readonly]=\"+TestsFormGroup.value.marksGroupCriteriaId != 1\" name=\"marksGroupCriteriaCount\"\n                (blur)=\"trimTextBoxSpaces('TestsFormGroup','marksGroupCriteriaCount')\"\n                formControlName=\"marksGroupCriteriaCount\" numbersOnly>\n              <mat-error>\n                <app-validation [labelName]=\"criteriacount.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.marksGroupCriteriaCount\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #displayedoncard>Displayed On Report Card</mat-label>\n              <mat-select required name=\"isDisplayOnreportCard\" formControlName=\"isDisplayOnreportCard\">\n                <mat-option *ngFor=\"let yesAndNo of filterYesNo\" [value]=\"yesAndNo.value\">\n                  {{yesAndNo.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"displayedoncard.innerText\"\n                  [validationControl]=\"TestsFormGroup.controls.isDisplayOnreportCard\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"center start\" class=\"pb-16 pl-24\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                <button translate mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase\"\n                  [disabled]=\"disableSelect\">\n                  <span translate>{{'Select' | translate}}</span> \n                </button>\n              </div>\n            </div>\n          </div>\n          <mat-error *ngIf=\"show && isContribution\" translate #contibuteError>Total contribution should be 100%\n          </mat-error>\n          <div class=\"pb-20 pt-24\">\n            <div fxLayout=\"column\" class=\"w-100-p simple-table-container\">\n              <app-table [sticky]=\"false\" [settings]=\"gradingTermTestGridSettings\"\n                (rowBasedAction)='deleteMember($event)'>\n              </app-table>\n            </div>\n          </div>\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n            <button translate mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n              <span translate>Previous</span>\n            </button>\n            <button translate mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\"\n              [disabled]=\"disableNext\">\n              <span translate>Next</span>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"reportsForm\" [completed]=\"getReportsIsOptional()\" [optional]=\"getReportsIsOptional()\"\n        *ngIf=\"gradingTermForm.value.generateReportCard === 1\">\n        <form fxLayout=\"column\" [formGroup]=\"reportsForm\">\n          <ng-template translate matStepLabel>{{'Report Card Configuration' | translate}}</ng-template>\n          <div fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n            <div appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" translate>Please select the\n              Evaluation Type to be used in the Report Card for this Grading term ?</div>\n            <div class=\"pl-sm-20\" appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" translate>Please\n              select the Report card Template to use for this Grading term ?</div>\n          </div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #evaluationtype>Evaluation Type</mat-label>\n              <mat-select required name=\"evaluationTypeId\" formControlName=\"evaluationTypeId\">\n                <mat-option *ngFor=\"let evaluationType of evaluationTypes\" [value]=\"evaluationType.value\">\n                  {{evaluationType.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"evaluationtype.innerText\"\n                  [validationControl]=\"reportsForm.controls.evaluationTypeId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #reportID>Report Card Template</mat-label>\n              <mat-select required name=\"reportTemplateId\" formControlName=\"reportTemplateId\">\n                <mat-option *ngFor=\"let template of templates\" [value]=\"template.id\">\n                  {{template.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"reportID.innerText\"\n                  [validationControl]=\"reportsForm.controls.reportTemplateId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div translate class=\"pt-12\">Do You Want To Generate an Overall Grade in the Report Card based on the Markes obtained in the\n            each course ?</div>\n          <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #overallGrade>Generate Overall Grade</mat-label>\n              <mat-select required name=\"generateOverAllGrade\" formControlName=\"generateOverAllGrade\"\n                (selectionChange)=\"onChangeOverallGrade($event)\">\n                <mat-option *ngFor=\"let yesAndNo of filterYesNo\" [value]=\"yesAndNo.value\">\n                  {{yesAndNo.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"overallGrade.innerText\"\n                  [validationControl]=\"reportsForm.controls.generateOverAllGrade\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label translate #overallDisplay>Overall Grade Display Name</mat-label>\n              <input (keyup)=\"preventSpace($event,'reportsForm','overALLGradeDisplayName')\" matInput name=\"overALLGradeDisplayName\"\n                formControlName=\"overALLGradeDisplayName\">\n              <mat-error>\n                <app-validation [labelName]=\"overallDisplay.innerText\"\n                  [validationControl]=\"reportsForm.controls.overALLGradeDisplayName\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div translate class=\"pt-12\">Do you want the Report Card to include additional columns based on the previous or current\n            Grading Term Data to calculate the overall Grade ?</div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #additionalColumn>Additional Columns</mat-label>\n              <mat-select (selectionChange)=\"onAdditionalColumnSelect($event)\" required name=\"additionalColumns\"\n                formControlName=\"additionalColumns\">\n                <mat-option *ngFor=\"let yesAndNo of filterYesNo\" [value]=\"yesAndNo.value\">\n                  {{yesAndNo.label}}\n                </mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]=\"additionalColumn.innerText\"\n                  [validationControl]=\"reportsForm.controls.additionalColumns\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <fieldset *ngIf=\"totalContribution < 100 && reportsForm.value?.additionalColumns\" class=\"border p-20\">\n            <legend translate>Additional Columns</legend>\n            <div fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">             \n              <mat-checkbox translate formControlName=\"isPresentGradingTerm\" (change)=\"onChangeThisTerm($event)\" class=\"mb-20\">\n                {{'THIS GRADING TERM' | translate}}</mat-checkbox>\n                <small class=\"px-8 mb-20\">(OR)</small>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n                <mat-label translate #othergradingterm>Prior Grading Term</mat-label>\n                <mat-select [required]=\"reportsForm.value?.additionalColumns ? true : false\"\n                  [disabled]=\"reportsForm.value.isPresentGradingTerm\" name=\"otherGradingTermId\"\n                  formControlName=\"usingGradingTermId\">\n                  <mat-option *ngIf=\"priorGradingTerms?.length\"></mat-option>\n                  <mat-option [style.display]=\"(termId == gradingTerm?.value) ? 'none' : 'block'\"\n                    *ngFor=\"let gradingTerm of priorGradingTerms\" [value]=\"gradingTerm.value\">\n                    {{gradingTerm.label}}\n                  </mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]=\"othergradingterm.innerText\"\n                    [validationControl]=\"reportsForm.controls.usingGradingTermId\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>           \n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\"\n                class=\"pl-sm-20\">\n                <mat-label translate #overallDisplay>Contribution</mat-label>\n                <input [required]=\"reportsForm.value?.additionalColumns ? true : false\" (keyup)=\"preventSpace($event,'reportsForm','contribution')\"\n                  matInput required name=\"selectedContribution\" placeholder=\"%\" formControlName=\"contribution\">\n                <mat-error>\n                  <app-validation [labelName]=\"overallDisplay.innerText\"\n                    [validationControl]=\"reportsForm.controls.contribution\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>           \n            </div>\n            <div fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n              <mat-checkbox formControlName=\"isVisible\" class=\"pr-sm-20 mb-20\" fxLayoutAlign=\"start center\">{{'Is this Column visible on the Report card' | translate}}\n              </mat-checkbox>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\n                <mat-label translate #columnDisplay>Column Display Name</mat-label>\n                <input required (keyup)=\"preventSpace($event,'reportsForm','title')\" matInput name=\"columnDisplayName\" formControlName=\"title\"\n                  (blur)=\"trimTextBoxSpaces('reportsForm','title')\">\n                <mat-error>\n                  <app-validation [labelName]=\"columnDisplay.innerText\" [validationControl]=\"reportsForm.controls.title\"\n                    [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>        \n            </div>\n\n            <div class=\"pl-sm-20 mt-12\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n              <button translate mat-raised-button type=\"button\" color=\"primary\" class=\"text-uppercase mr-12\"\n                (click)=\"onClear()\">\n                <span translate>{{'Reset' | translate}}</span> \n              </button>\n              <button translate mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\"\n                (click)=\"onSelectAdditionColumns()\">\n               <span translate>{{'Select' | translate}}</span> \n              </button>\n            </div>\n          </fieldset>\n          <div *ngIf=\"reportsForm.value?.additionalColumns && additionalColumnData?.length\"\n            class=\"simple-table-container mat-elevation-z3 my-20 radius-t-20 responsive-normal-table\">\n            <table class=\"simple\">\n              <thead>\n                <tr>\n                  <th translate>COLUMN NAME</th>\n                  <th translate>GRADING TERM</th>\n                  <th translate>CONTRIBUTION %</th>\n                  <th translate>ISVISIBLE</th>\n                  <th translate>ACTION</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let column of additionalColumnData; let i = index;\">\n                  <td>{{column?.title ? column?.title : '-'}}</td>\n                  <td>\n                    {{column?.usingGradingTermId ? getLabelOfGradingTerms(column?.usingGradingTermId) : gradingTermForm.value?.termName }}\n                  </td>\n                  <td>{{column?.contribution}}</td>\n                  <td>{{column?.isVisible ? 'YES' : 'NO'}}</td>\n                  <td class=\"cursor-pointer\" (click)=\"onDeleteAdditionalColumn(i)\">\n                    <mat-icon class=\"red-400-fg\">delete</mat-icon>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-20\">\n            <button translate mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n              <span translate>Previous</span>\n            </button>\n            <button translate mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\"\n              (click)=\"onClickNext()\">\n              <span translate>Next</span>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"SubmitForm\">\n        <form fxLayout=\"column\" (ngSubmit)=\"createOrUpdateGradingTerms()\" [formGroup]=\"SubmitForm\" #submitForm=\"ngForm\">\n          <ng-template translate matStepLabel>{{'Done' | translate}}</ng-template>\n          <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>Please verify the entered\n            information before your final submit</div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n            <button mat-raised-button matStepperPrevious translate type=\"button\" class=\"text-uppercase mr-12\">\n              <span translate>Previous</span>\n            </button>\n            <button mat-raised-button type=\"submit\" class=\"text-uppercase\"\n              color=\"accent\">{{(isUpdateData ? 'Update':'Submit') | translate}}</button>\n          </div>\n        </form>\n      </mat-step>\n    </mat-vertical-stepper>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-terms/grading-terms.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subCat {\n  position: absolute;\n  top: 50px;\n  color: red; }\n\n.tabs-table-padding0 ::ng-deep .mat-expansion-panel-body {\n  padding: 0 0px 0px; }\n\n.min-w-200 {\n  min-width: 120px; }\n\n::ng-deep .mat-step-optional {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL2dyYWRpbmctdGVybXMvZ3JhZGluZy10ZXJtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdWO0VBRVEsa0JBQWtCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3ZCO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vZ3JhZGluZy9ncmFkaW5nLXRlcm1zL2dyYWRpbmctdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViQ2F0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAudGFicy10YWJsZS1wYWRkaW5nMCB7XG4gICAgICAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwcHggMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgLm1pbi13LTIwMHtcbiAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgfVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLW9wdGlvbmFse1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading-terms/grading-terms.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GradingTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradingTermsComponent", function() { return GradingTermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");















var GradingTermsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GradingTermsComponent, _super);
    function GradingTermsComponent(gradeSetupService, commonService, dialog, _classSectionService, _gradingTermConfigurationService, http, router, routes, snackBar, changeDetecor) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this._classSectionService = _classSectionService;
        _this._gradingTermConfigurationService = _gradingTermConfigurationService;
        _this.http = http;
        _this.router = router;
        _this.routes = routes;
        _this.snackBar = snackBar;
        _this.changeDetecor = changeDetecor;
        _this.isUpdateData = false;
        _this.gradeTermIds = [];
        _this.classNames = [];
        _this.evaluationTypes = [];
        _this.marksGroupCriteria = [];
        _this.testTypes = [];
        _this.priorGradingTerms = [];
        _this.filterYesNo = [];
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.failedRecords = [];
        _this.dataLoaded = Promise.resolve(false);
        _this.isDeleteAllRequired = false;
        _this.currentComponentName = 'GradingTermsComponent';
        _this.gradingList = [];
        _this.gradeClassSectionData = [];
        _this.fieldListTermTests = [];
        _this.contributionGridColumns = [];
        _this.gridName = '';
        _this.contributionTableSettings = {};
        _this.show = false;
        _this.disableNext = true;
        _this.disableSelect = false;
        _this.removedTestTypeIds = [];
        _this.classSectionDisable = true;
        _this.gridColums = [];
        _this.schoolBoards = [];
        _this.cloneClasses = [];
        _this.cloneGradeDetailsList = [];
        _this.contributionColumnList = [];
        _this.disableCloneSection = true;
        _this.sectionNamesList = [];
        _this.cloneSectionNamesList = [];
        _this.removedClassSectionIds = [];
        _this.cloneDisable = true;
        _this.interactedStepperIndex = 0;
        _this.isSchoolBoards = false;
        _this.filterRowData = [];
        _this.contributionOptions = [
            { name: 'Considerations', id: 0 },
            { name: 'Contribution', id: 1 }
        ];
        _this.validate = true;
        _this.additionalColumnData = [];
        _this.radioOptions = 0;
        _this.templates = [];
        _this.totalContribution = 0;
        _this.isContribution = false;
        _this.gradingTermSearchViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
            classes: [],
            sections: [],
            names: [],
            codes: [],
            evaluationTypeId: [],
            generateOverallGrade: [],
            generateReportCard: [],
            overallGradeDisplayNames: [],
            termEndDatesBegin: null,
            termEndDatesEnd: null,
            termStartDatesBegin: null,
            termStartDatesEnd: null
        };
        _this.gradeClassSectionViewModel = {
            boardId: 0,
            classId: 0,
            sectionId: [],
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE
        };
        _this.updateGradingTerm = {
            id: null,
            termName: null,
            description: null,
            displayName: null,
            termCode: null,
            evaluationTypeId: 0,
            generateReportCard: 0,
            termStartDate: null,
            termEndDate: null,
            testsStartDate: null,
            testsEndDate: null,
            generateOverAllGrade: 0,
            overALLGradeDisplayName: null,
            gradingTermTestViewModel: null,
            removedGradingTermTestIds: [],
            removedGradingtermClassSectionIds: [],
            gradingTermClassSectionViewModel: [],
        };
        return _this;
    }
    GradingTermsComponent.prototype.ngOnInit = function () {
        this.termId = null;
        this.initializeClassSectionForm();
        this.cols = [
            { field: 'termName', header: 'Term' },
            { field: 'classSectionName', header: 'Class & Section' },
            { field: 'termCode', header: 'Code' },
            { field: 'evaluationType', header: 'Evaluation Type' },
            { field: 'genarateReportCard', header: 'G. Report Card' },
            { field: 'termStartDate', header: 'Term Start Date' },
            { field: 'termEndDate', header: 'Term End Date' },
            { field: 'generateOverallGrade', header: 'G Overall Grade' },
            { field: 'overallGradeDisplayName', header: 'Grade Display On RC' },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.gradeClassSectionCols = [
            { field: 'name', header: 'Grading Term Name', sort: false },
            { field: 'boardName', header: 'Board', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionName', header: 'Section', sort: false },
            { field: 'termStartDate', header: 'Start Date', sort: false },
            { field: 'termEndDate', header: 'End Date', sort: false },
        ];
        this.contributionGridHeaderData = [
            { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
            { field: 'testTypeId', header: 'Test Type', sort: false },
            { field: 'displayOption', header: 'Display', sort: false },
            { field: 'contribution', header: 'Contribution %', sort: false },
            { field: 'consideration', header: 'Consideration %', sort: false },
            { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
            { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
            { field: 'isDisplayOnreportCard', header: 'Display On Report Card', sort: false },
            { field: 'delete', header: 'Actions', sort: false },
        ];
        this.contributionGridColumns = this.contributionGridHeaderData.map(function (x) { return x.field; });
        this.displaygradeClassSectionCols = [
            { field: 'schoolBoardName', header: 'Board', sort: false },
            { field: 'className', header: 'Class Name', sort: false },
            { field: 'sectionName', header: 'Section Name', sort: false },
        ];
        this.cloneGradeDetails = [
            { field: 'termName', header: 'Name' },
            { field: 'description', header: 'Description' },
            { field: 'displayName', header: 'Display Name' },
            { field: 'termCode', header: 'Code' },
            { field: 'evaluationTypeId', header: 'Evaluation Type' },
            { field: 'generateReportCard', header: 'Generate Report Card' },
            { field: 'termStartDate', header: 'Term Start Date' },
            { field: 'termEndDate', header: 'Term End Date' },
            // { field: 'testsStartDate', header: 'Consider Test From Date' },
            // { field: 'testsEndDate', header: 'Consider Test To Date' },
            { field: 'generateOverAllGrade', header: 'Generate OverAll Grade' },
            { field: 'overALLGradeDisplayName', header: 'Overall Grade Display Name' },
            { field: 'schoolBoardName', header: 'School Board' },
        ];
        this.cloneGradeDetailsList = this.cloneGradeDetails.map(function (x) { return x.field; });
        this.cloneContributionGridHeaderData = [
            { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
            { field: 'testTypeId', header: 'Test Type', sort: false },
            { field: 'displayOption', header: 'Display', sort: false },
            { field: 'contribution', header: 'Contribution', sort: false },
            { field: 'consideration', header: 'Consideration', sort: false },
            { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
            { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
            { field: 'isDisplayOnreportCard', header: 'Display On Report Card', sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.gradingTermSearchViewModel = modelTableComponent;
        }
        // / initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.gradingTermSearchViewModel,
            tablename: 'Grading Terms',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };
        this.contributionColumnList = ['testTypeId', 'contribution', 'consideration', 'displayOption',
            'marksGroupCriteriaId', 'marksGroupCriteriaCount', 'isDisplayOnreportCard', 'isDisplayOnreportCard'];
        this.loagGradingTermdata();
        this.getTemplates();
    };
    GradingTermsComponent.prototype.initializeClassSectionForm = function (initial) {
        if (initial === void 0) { initial = true; }
        this.setReportConfigurationForm();
        if (initial) {
            this.getEvaluationTypeList();
            this.yesNoList();
            this.getMarksGroupCriteria();
            this.getTestTypes();
        }
        this.gradingTermTestDetails = [];
        this.gradingTermTestGridData = [];
        this.classSectionDetails = [];
        this.ClassSectionFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            sectionsId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
        this.gradingTermForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            termName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(135)]),
            termCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(6)]),
            termStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            termEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            generateReportCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
        this.setTestFormFroup();
        this.cloneFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            cloneClassId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            cloneSectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
        this.SubmitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
    };
    GradingTermsComponent.prototype.setTestFormFroup = function () {
        this.TestsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            testsStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            testsEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            otherGradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            testTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            contribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]),
            displayOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            marksGroupCriteriaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            marksGroupCriteriaCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]),
            isDisplayOnreportCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            consideration: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(999.99)]),
            stepperController: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
        // this.TestsFormGroup.controls.marksGroupCriteriaCount.disable();
    };
    GradingTermsComponent.prototype.initializeCloneGradingTermForm = function () {
        this.cloneFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            cloneClassId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            cloneSectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
    };
    GradingTermsComponent.prototype.setReportConfigurationForm = function () {
        var _this = this;
        this.reportsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            evaluationTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            reportTemplateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            generateOverAllGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            overALLGradeDisplayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]),
            additionalColumns: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            stepperController: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            usingGradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            isPresentGradingTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](false),
            contribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            isVisible: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](true),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
        });
        this.reportsForm.controls.overALLGradeDisplayName.disable();
        this.reportsForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.updateStepperController();
        });
    };
    GradingTermsComponent.prototype.loagGradingTermdata = function () {
        var _this = this;
        this._gradingTermConfigurationService.fetchGradingTermsList(this.gradingTermSearchViewModel.sortBy, this.gradingTermSearchViewModel.sortOrder, this.gradingTermSearchViewModel.names, this.gradingTermSearchViewModel.classes, this.gradingTermSearchViewModel.sections, this.gradingTermSearchViewModel.evaluationTypeId, this.gradingTermSearchViewModel.codes, this.gradingTermSearchViewModel.termStartDatesBegin, this.gradingTermSearchViewModel.termStartDatesEnd, this.gradingTermSearchViewModel.termEndDatesBegin, this.gradingTermSearchViewModel.termEndDatesEnd, this.gradingTermSearchViewModel.generateReportCard, this.gradingTermSearchViewModel.generateOverallGrade, this.gradingTermSearchViewModel.overallGradeDisplayNames, this.gradingTermSearchViewModel.pageNumber, this.gradingTermSearchViewModel.pageSize).subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    GradingTermsComponent.prototype.saveClassSection = function (form) {
        this.classSectionDetails = [];
        if (!this.isUpdateData) {
            if (this.ClassSectionFormGroup.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
                this.classSectionDetails.push({
                    classId: form.classId,
                    sectionsId: form.sectionsId.map(function (element) {
                        return element.value;
                    }),
                    boardId: form.boardId
                });
            }
        }
        else {
            var classSectionColumnList = ['boardId', 'classId', 'sectionsId'];
            this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
        }
    };
    GradingTermsComponent.prototype.saveGradingTermDetails = function (form) {
        if (this.gradingTermForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
            this.gradingTermsDetailsView = form;
        }
    };
    GradingTermsComponent.prototype.createOrUpdateGradingTerms = function () {
        var _this = this;
        if (this.isUpdateData) {
            this.gradingTermsDetailsView = this.gradingTermForm.value;
            if (this.removedTestTypeIds !== undefined) {
                this.updateGradingTerm.removedGradingTermTestIds = this.removedTestTypeIds;
            }
            if (this.removedClassSectionIds !== undefined) {
                this.updateGradingTerm.removedGradingtermClassSectionIds = this.removedClassSectionIds;
            }
            this.updateGradingTerm.id = this.idsToDisplay;
            this.updateGradingTerm.schoolBoardId = this.termConfigurationData.schoolBoardId;
            this.updateGradingTerm.termName = this.gradingTermsDetailsView.termName;
            this.updateGradingTerm.description = this.gradingTermsDetailsView.description;
            this.updateGradingTerm.displayName = this.gradingTermsDetailsView.displayName;
            this.updateGradingTerm.termCode = this.gradingTermsDetailsView.termCode;
            this.updateGradingTerm.evaluationTypeId = this.reportsForm.value.evaluationTypeId;
            this.updateGradingTerm.generateReportCard = this.gradingTermsDetailsView.generateReportCard;
            this.updateGradingTerm.termStartDate = this.gradingTermsDetailsView.termStartDate;
            this.updateGradingTerm.termEndDate = this.gradingTermsDetailsView.termEndDate;
            this.updateGradingTerm.testsStartDate = this.TestsFormGroup.value.testsStartDate;
            this.updateGradingTerm.testsEndDate = this.TestsFormGroup.value.testsEndDate;
            this.updateGradingTerm.generateOverAllGrade = this.reportsForm.value.generateOverAllGrade;
            this.updateGradingTerm.overALLGradeDisplayName = this.reportsForm.value.overALLGradeDisplayName;
            this.updateGradingTerm.gradingTermTestViewModel = this.gradingTermTestDetails;
            Object.assign(this.updateGradingTerm, this.reportsForm.value);
            this.updateGradingTerm['usedGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(function (e) { return e.usingGradingTermId; });
            this.updateGradingTerm['forGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(function (e) { return !e.usingGradingTermId; });
            delete this.updateGradingTerm['usingGradingTermId'];
            this._gradingTermConfigurationService.gradingTermConfigurationGradingTermPut(this.updateGradingTerm)
                .subscribe(function (res) { return _this.addorUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.classSectionDetails = [];
            this.classSectionDetails.push({
                classId: this.ClassSectionFormGroup.value.classId,
                sectionsId: this.ClassSectionFormGroup.value.sectionsId.map(function (element) {
                    return element.value;
                }),
                boardId: this.ClassSectionFormGroup.value.boardId
            });
            this.gradingTermsDetailsView = this.gradingTermForm.value;
            this.gradingTermDataViewModel = this.gradingTermsDetailsView;
            Object.assign(this.gradingTermDataViewModel, this.reportsForm.value);
            this.gradingTermDataViewModel['usedGradingTermAdditionalTotalView'] = this.additionalColumnData.filter(function (e) { return e.usingGradingTermId; });
            this.gradingTermDataViewModel['forGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(function (e) { return !e.usingGradingTermId; });
            this.gradingTermDataViewModel.testsStartDate = this.TestsFormGroup.value.testsStartDate;
            this.gradingTermDataViewModel.testsEndDate = this.TestsFormGroup.value.testsEndDate;
            this.gradingTermDataViewModel.schoolBoardId = this.classSectionDetails[0].boardId;
            this.gradingTermDataViewModel.gradingTermClassSectionViewModel = this.classSectionDetails;
            this.gradingTermDataViewModel.gradingTermTestViewModel = this.gradingTermTestDetails;
            this._gradingTermConfigurationService.gardeTermConfigurationCreateGradingTermPost(this.gradingTermDataViewModel)
                .subscribe(function (res) { return _this.addorUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // response after add data of GradingTerm
    GradingTermsComponent.prototype.addorUpdateResponse = function (response) {
        this.cloneEnable = false;
        this.clearCloneSection();
        this.clearGradeTermSection();
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                if (document.getElementById('formCancel')) {
                    document.getElementById('formCancel').click();
                }
                this.loagGradingTermdata();
                if (this.stepper) {
                    this.stepper.reset();
                }
                this.isUpdateData = false;
                this.buttonDisable = false;
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    GradingTermsComponent.prototype.response = function (data) {
        var _this = this;
        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }
        if (data.gradingTermListViewModel) {
            this.rows = data.gradingTermListViewModel.list;
            this.totalItems = data.gradingTermListViewModel.totalItems;
        }
        else {
            this.rows = [];
        }
        var actionList = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE,
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DETAILS_DISPLAY,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DETAILS_ICON,
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE_ICON
            }
        ];
        this.filterRowData = this.rows;
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.termName === element.termName;
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
                element.operations = actionList;
            });
        }
        this.rows.forEach(function (e) {
            e.termStartDate = (e.termStartDate == null) ? null : _this.commonService.customDateFormat(e.termStartDate, _this.getSchoolDateFormat()).date;
            e.termEndDate = (e.termEndDate == null) ? null : _this.commonService.customDateFormat(e.termEndDate, _this.getSchoolDateFormat()).date;
        });
        this.tabSettings = {
            columns: this.cols,
            model: this.gradingTermSearchViewModel,
            rows: this.rows,
            tablename: 'Grading Terms',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            rowGroupingColumns: ['termName', 'termCode', 'overallGradeDisplayName', 'genarateReportCard', 'evaluationType',
                'generateOverallGrade', 'termStartDate', 'termEndDate'],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Grading Terms'
                },
                addingForm: {
                    required: true,
                    btnName: 'New Grading Term'
                }
            }
        };
    };
    GradingTermsComponent.prototype.gradingTermTableData = function (_event) {
        this.gradingTermSearchViewModel = _event;
        this.loagGradingTermdata();
    };
    // End
    GradingTermsComponent.prototype.openForm = function () {
        this.isContribution = false;
        this.interactedStepperIndex = 0;
        this.disableNext = true;
        this.ClassSectionFormGroup.reset();
        this.gradingTermForm.reset();
        this.TestsFormGroup.reset();
        this.SubmitForm.reset();
        this.initializeClassSectionForm();
        this.closeAddPanel = false;
        this.show = false;
        this.disableSelect = false;
        this.isUpdateData = false;
        this.cloneEnable = false;
        this.classSectionDisable = true;
        this.gridData = [];
        this.gradingTermTestGridData = [];
        this.gradingTermTestDetails = [];
        this.termId = null;
        this.prepareGrid(null, this.displaygradeClassSectionCols, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].CLASSSECTION_TITLE, []);
        if (this.classSectionForm !== undefined) {
            this.classSectionForm.resetForm();
        }
        if (this.gradeTermDetailsForm !== undefined) {
            this.gradeTermDetailsForm.resetForm();
        }
        if (this.testsForm !== undefined) {
            this.testsForm.resetForm();
        }
        if (this.submitForm !== undefined) {
            this.submitForm.resetForm();
        }
        this.radioOptions = 0;
        this.gradingTermTestGrid();
        this.initializeCloneGradingTermForm();
        this.testFormValidation();
        this.loadSchoolBoards();
    };
    GradingTermsComponent.prototype.testFormValidation = function () {
        if (this.isContribution) {
            this.TestsFormGroup.get('consideration').clearValidators();
            this.TestsFormGroup.controls['consideration'].updateValueAndValidity();
        }
        else {
            this.TestsFormGroup.get('contribution').clearValidators();
            this.TestsFormGroup.controls['contribution'].updateValueAndValidity();
        }
    };
    // table row on select
    GradingTermsComponent.prototype.onTableRowSelect = function (eventData) {
        this.gradeTermIds.push(eventData.id);
        if (this.gradeTermIds.length > 0) {
            this.isDeleteAllRequired = true;
        }
        else {
            this.isDeleteAllRequired = false;
        }
    };
    // table row unselect
    GradingTermsComponent.prototype.onTableRowUnSelect = function (data) {
        var index = this.gradeTermIds.findIndex(function (value) {
            return value === value.id;
        });
        this.gradeTermIds.splice(index, 1);
        if (this.gradeTermIds.length > 0) {
            this.isDeleteAllRequired = true;
        }
        else {
            this.isDeleteAllRequired = false;
        }
    };
    // End
    // select all records from table(delete)
    GradingTermsComponent.prototype.selectAllData = function (data) {
        var _this = this;
        if (data.length > 0) {
            this.isDeleteAllRequired = true;
            data.forEach(function (element) {
                _this.gradeTermIds.push(data.id);
            });
        }
        else {
            this.gradeTermIds = [];
            this.isDeleteAllRequired = false;
        }
    };
    // End
    // row-wise actions of the table(edit/delete)
    GradingTermsComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT) {
            var classSectionColumnList = ['boardId', 'classId', 'sectionsId'];
            this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
            this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
            this.removedClassSectionIds = [];
            this.removedTestTypeIds = [];
            this.gradingTermTestDetails = [];
            this.show = false;
            this.isUpdateData = true;
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.classSectionDisable = false;
            this.idsToDisplay = response.clickedRow.id;
            this._gradingTermConfigurationService.gradingTermConfigurationGradeTermGet(this.idsToDisplay).subscribe(function (res) {
                _this.gradeTermConfigurationById(res);
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DETAILS) {
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.idsToDisplay = response.clickedRow.id;
            this.router.navigate([app_app_constants__WEBPACK_IMPORTED_MODULE_2__["URLConstants"].GRADE_TERM_DETAILS + response.clickedRow.id]);
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE) {
            this.gridName = 'classSectionGrid';
            this.deleteAll(response);
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE) {
            this.closeAddPanel = false;
            this.gridName = 'classSectionGrid';
            this.cloneGrade(response);
        }
    };
    // to set GradingTerm data to form after edit click
    GradingTermsComponent.prototype.gradeTermConfigurationById = function (termData) {
        var _this = this;
        this.initializeClassSectionForm(false);
        this.disableNext = false;
        this.isUpdateData = true;
        var classSectionColumnList = ['boardId', 'classId', 'sectionsId'];
        this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
        var actionList = [{
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLONE
            }
        ];
        this.classSectionDisable = false;
        this.termConfigurationData = termData.gradingTermConfigurationDataViewModel[0];
        this.termClassSectionsData = termData.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
        this.termClassSectionsData.forEach(function (x) {
            x.actions = actionList;
        });
        var sections = [];
        for (var _i = 0, _a = this.termClassSectionsData; _i < _a.length; _i++) {
            var section = _a[_i];
            sections.push(section.sectionsId);
        }
        var data = {
            boardId: this.termClassSectionsData[0].boardId,
            classId: this.termClassSectionsData[0].classId,
            sectionId: sections
        };
        this.getPriorGradingTerms(data);
        this.prepareGrid(this.termClassSectionsData, this.displaygradeClassSectionCols, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].CLASSSECTION_TITLE, this.classSectionGroupCriteria = ['schoolBoardName', 'className']);
        this.gradingTermTestGridData = termData.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel;
        this.TestsFormGroup.controls.testsStartDate.setValue(this.termConfigurationData.testsStartDate);
        this.TestsFormGroup.controls.testsEndDate.setValue(this.termConfigurationData.testsEndDate);
        this.gradingTermTestGridData.forEach(function (e) {
            e.testTypeApiId = e.testTypeId;
            e.otherGradingApiTermId = e.otherGradingTermId ? e.otherGradingTermId : null;
            e.actions = actionList,
                // tslint:disable-next-line: max-line-length
                e.otherGradingTermId = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.priorGradingTerms, e.otherGradingTermId)).label ? _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.priorGradingTerms, e.otherGradingTermId)).label : e.otherGradingTermName,
                e.displayOption = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.evaluationTypes, e.displayTypeId)).label,
                e.testTypeId = e.testTypeName,
                e.isexist = true,
                e.isDisplayOnreportCard = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.filterYesNo, e.isDisplayOnreportCard)).label,
                e.marksGroupCriteriaId = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.marksGroupCriteria, e.marksGroupCriteriaId)).label;
        });
        this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
        this.additionalColumnData = [];
        if (this.termConfigurationData != null) {
            this.gradingTermForm.patchValue(this.termConfigurationData);
            this.isContribution = this.termConfigurationData.isContribution;
            if (!this.isContribution) {
                this.radioOptions = 0;
                this.disableSelect = false;
            }
            else {
                this.radioOptions = 1;
                this.disableSelect = true;
            }
            this.reportsForm.patchValue(this.termConfigurationData);
            for (var _b = 0, _c = this.termConfigurationData.usedGradingTermAdditionalView; _b < _c.length; _b++) {
                var value = _c[_b];
                this.additionalColumnData.push(this.setAdditionalColumnData(value));
            }
            for (var _d = 0, _e = this.termConfigurationData.forGradingTermAdditionalView; _d < _e.length; _d++) {
                var value = _e[_d];
                this.additionalColumnData.push(this.setAdditionalColumnData(value, true));
            }
            this.reportsForm.patchValue({
                additionalColumns: this.additionalColumnData.length ? 1 : 0
            });
            if (this.reportsForm.value.additionalColumns) {
                this.reportsForm.controls.usingGradingTermId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.reportsForm.controls.title.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]);
                this.reportsForm.controls.contribution.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]);
                this.reportsForm.updateValueAndValidity();
            }
            if (this.reportsForm.value.generateOverAllGrade === 1) {
                this.reportsForm.controls.overALLGradeDisplayName.enable();
            }
            else {
                this.reportsForm.controls.overALLGradeDisplayName.disable();
            }
            this.termId = this.termConfigurationData.termId;
        }
        else {
            this.openSnackBar(termData.messages.ResultMessage);
        }
        this.gradingTermTestGrid();
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
    };
    // End
    GradingTermsComponent.prototype.deleteAll = function (response) {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GRADE_DELETE_CONFIRM, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CANCEL, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CONFIRM },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CONFIRM) {
                if (_this.gridName === 'classSectionGrid') {
                    var idList = [];
                    idList.push(response.clickedRow.id);
                    _this._gradingTermConfigurationService.removeGradingTerm(idList).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                else if (_this.gridName === 'contributionGrid') {
                    _this.deleteMember(response);
                }
            }
        });
    };
    // response after delete operation
    GradingTermsComponent.prototype.deleteResponse = function (deleteResponse) {
        this.loagGradingTermdata();
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    GradingTermsComponent.prototype.getPriorGradingTerms = function (data) {
        var _this = this;
        this.priorGradingTerms = [];
        this._gradingTermConfigurationService.fetchGradingTermsByBoardId(data.boardId, data.classId, data.sectionId).subscribe(function (response) {
            _this.priorGradingTerms = [];
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        if (_this.priorGradingTerms.findIndex(function (ele) { return ele.value === element.id; }) === -1) {
                            _this.priorGradingTerms.push({
                                label: element.name,
                                value: element.id
                            });
                        }
                    });
                }
            }
        });
    };
    GradingTermsComponent.prototype.getMarksGroupCriteria = function () {
        var _this = this;
        this.marksGroupCriteria = [];
        this._gradingTermConfigurationService.fetchMarksGroupCriteria().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.marksGroupCriteria.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    GradingTermsComponent.prototype.getTestTypes = function () {
        var _this = this;
        this.testTypes = [];
        this._gradingTermConfigurationService.fetchTestTypes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.testTypes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    GradingTermsComponent.prototype.yesNoList = function () {
        this.filterYesNo = [];
        this.filterYesNo.push({
            label: 'Yes',
            value: 1
        });
        this.filterYesNo.push({
            label: 'No',
            value: 0
        });
    };
    GradingTermsComponent.prototype.getEvaluationTypeList = function () {
        var _this = this;
        this.evaluationTypes = [];
        this._gradingTermConfigurationService.evaluationTypes().subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.evaluationTypes.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
        });
    };
    // Get Classes to filter table data
    GradingTermsComponent.prototype.getClassesList = function (data) {
        var _this = this;
        this.classDisabled = false;
        this.classNames = [];
        this.ClassSectionFormGroup.controls['classId'].patchValue(null);
        this._classSectionService.schoolAcademicClasses(data.value).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    GradingTermsComponent.prototype.onSelectClass = function (data) {
        var _this = this;
        this.clearGradeTermSection();
        this.sectionDisabled = true;
        this.gradeClassSectionViewModel.classId = data.value;
        this.ClassSectionFormGroup.controls['sectionsId'].patchValue(null);
        this._classSectionService.schoolAcademicClassSections(this.ClassSectionFormGroup.value.boardId, data.value).subscribe(function (response) {
            if (response.listViews.length) {
                _this.sectionDisabled = false;
                response.listViews.forEach(function (element) {
                    _this.sectionNamesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.sectionNames = { multiSelect: true, placeholder: 'Section', data: _this.sectionNamesList, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NODATA_FOUND, isRequired: true };
            }
        });
    };
    // End
    GradingTermsComponent.prototype.onCancel = function () {
        this.stepper.reset();
        this.ClassSectionFormGroup.reset();
        this.gradingTermForm.reset();
        this.SubmitForm.reset();
        this.classSectionForm.resetForm();
        this.gradeTermDetailsForm.resetForm();
        this.closeAddPanel = true;
        this.gridData = [];
        this.clearGradeTermSection();
        this.isUpdateData = false;
        this.prepareGrid(null, this.displaygradeClassSectionCols, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].CLASSSECTION_TITLE, []);
        this.gradingTermTestGrid();
        this.classNames = [];
        this.sectionNamesList = [];
        this.classDisabled = true;
        this.cloneEnable = false;
        if (this.gradingTermForm.value.generateReportCard === 1) {
            this.TestsFormGroup.reset();
            this.reportsForm.reset();
            this.testsForm.resetForm();
        }
    };
    // on selection of class
    GradingTermsComponent.prototype.onSelectSection = function (data) {
        var _this = this;
        this.gradeClassSectionViewModel.sectionId = [];
        data.forEach(function (element) {
            _this.gradeClassSectionViewModel.sectionId.push(element.value);
        });
        this.getGradingTermByclassSection(this.gradeClassSectionViewModel);
        this.getPriorGradingTerms(this.gradeClassSectionViewModel);
    };
    GradingTermsComponent.prototype.getGradingTermByclassSection = function (data) {
        var _this = this;
        this._gradingTermConfigurationService.gradingTermConfigurationGradingTermsByClassSectionGet(data.boardId, data.classId, data.sectionId, data.pageNumber, data.pageSize).subscribe(function (res) { return _this.loagGradingTermdataBySection(res); });
    };
    GradingTermsComponent.prototype.loagGradingTermdataBySection = function (data) {
        var _this = this;
        this.gradeClassSectionData = [];
        if (data.gradeTermList != null) {
            data.gradeTermList.list.forEach(function (e) {
                e.termStartDate = (e.termStartDate == null) ? null : _this.commonService.customDateFormat(e.termStartDate, _this.getSchoolDateFormat()).date;
                e.termEndDate = (e.termEndDate == null) ? null : _this.commonService.customDateFormat(e.termEndDate, _this.getSchoolDateFormat()).date;
            });
            this.gradeClassSectionData = data.gradeTermList.list;
        }
        this.prepareGrid(this.gradeClassSectionData, this.gradeClassSectionCols, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].GRADE_TERM_CLASSSECTION_TITLE.toUpperCase(), this.classSectionGroupCriteria = ['name', 'boardName', 'className']);
    };
    GradingTermsComponent.prototype.onSelectTestData = function (form) {
        if (!this.isContribution) {
            this.testFormValidation();
            var considerFormData = false;
            this.show = false;
            this.TestsFormGroup.controls.stepperController.setValue(true);
            var index = this.gradingTermTestGridData.findIndex(function (e) { return e.testTypeApiId === form.testTypeId && e.otherGradingApiTermId === form.otherGradingTermId; });
            if (this.isValidFormFields() && index === -1) {
                considerFormData = true;
                if (!this.isContribution && form.consideration != null && form.consideration.toString() !== '') {
                    this.disableNext = false;
                    var recordId = this.gradingTermTestGridData.length + 1;
                    this.gradingTermTestDetails.push({
                        id: recordId,
                        testTypeId: form.testTypeId,
                        contribution: form.contribution,
                        marksGroupCriteriaId: form.marksGroupCriteriaId,
                        isDisplayOnreportCard: form.isDisplayOnreportCard,
                        otherGradingTermId: form.otherGradingTermId,
                        marksGroupCriteriaCount: form.marksGroupCriteriaCount,
                        displayOption: form.displayOption,
                        schoolBoardId: form.schoolBoardId,
                        consideration: form.consideration
                    });
                    this.gradingTermTestGridData.push({
                        testTypeApiId: form.testTypeId,
                        otherGradingApiTermId: form.otherGradingTermId ? form.otherGradingTermId : null,
                        id: recordId,
                        contribution: form.contribution,
                        marksGroupCriteriaCount: form.marksGroupCriteriaCount,
                        testTypeId: (this.commonService.selectedDropDownData(this.testTypes, form.testTypeId)).label,
                        marksGroupCriteriaId: (this.commonService.selectedDropDownData(this.marksGroupCriteria, form.marksGroupCriteriaId)).label,
                        isDisplayOnreportCard: (this.commonService.selectedDropDownData(this.filterYesNo, form.isDisplayOnreportCard)).label,
                        otherGradingTermId: this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, form.otherGradingTermId)).label,
                        displayOption: (this.commonService.selectedDropDownData(this.evaluationTypes, form.displayOption)).label,
                        consideration: form.consideration,
                    });
                    this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
                    this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
                    this.TestsFormGroup.controls.otherGradingTermId.reset();
                    this.testsForm.submitted = false;
                    this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
                }
            }
            else if (index > -1) {
                if (form.otherGradingTermId) {
                    this.openSnackBar('Prior Term and Test Type Already exist', true);
                }
                else {
                    this.openSnackBar('Test Type Already exist', true);
                }
            }
            this.gradingTermTestGrid();
        }
    };
    GradingTermsComponent.prototype.getTestOptional = function () {
        if (!this.isContribution) {
            var considerationPercentage = parseInt(this.gradingTermTestGridData.reduce(function (acc, data) { return parseInt(acc, 10) + parseInt(data.consideration, 10); }, 0), 10);
            if (considerationPercentage > 0 && this.checkIfDateIsValid()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            var contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce(function (acc, data) { return parseInt(acc, 10) + parseInt(data.contribution, 10); }, 0), 10);
            if (contributionnPercentage && contributionnPercentage === 100 && this.checkIfDateIsValid()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    GradingTermsComponent.prototype.checkIfDateIsValid = function () {
        return true;
    };
    GradingTermsComponent.prototype.isNestedObjectEmpty = function (obj, checkKey) {
        if (checkKey === void 0) { checkKey = false; }
        var isEmpty = true;
        for (var key in obj) {
            if (checkKey && key === checkKey) {
                continue;
            }
            if (obj[key] !== null && obj[key] !== '') {
                if (typeof (obj[key]) === 'object') {
                    isEmpty = this.isNestedObjectEmpty(obj[key]);
                }
                else {
                    return false;
                }
            }
        }
        return isEmpty;
    };
    GradingTermsComponent.prototype.onSelect = function (form) {
        var index = this.gradingTermTestGridData.findIndex(function (e) { return e.testTypeApiId === form.testTypeId && e.otherGradingApiTermId === form.otherGradingTermId; });
        this.customSetValidation(this.TestsFormGroup, this.contributionColumnList);
        if (+this.TestsFormGroup.value.marksGroupCriteriaId === 1) {
            this.TestsFormGroup.controls['marksGroupCriteriaCount'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]);
        }
        else {
            this.TestsFormGroup.controls['marksGroupCriteriaCount'].clearValidators();
        }
        this.TestsFormGroup.controls['marksGroupCriteriaCount'].updateValueAndValidity();
        this.TestsFormGroup.controls['contribution'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
        this.testFormValidation();
        if (!this.isContribution) {
            this.onSelectTestData(form);
            var considerationPercentage = parseInt(this.gradingTermTestGridData.reduce(function (acc, data) { return parseInt(acc, 10) + parseInt(data.consideration, 10); }, 0), 10);
            if (considerationPercentage > 0) {
                this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
                this.TestsFormGroup.get('stepperController').setValue(true);
            }
        }
        else {
            this.customSetValidation(this.TestsFormGroup, this.contributionColumnList);
            if (+this.TestsFormGroup.value.marksGroupCriteriaId === 1) {
                this.TestsFormGroup.controls['marksGroupCriteriaCount'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]);
            }
            else {
                this.TestsFormGroup.controls['marksGroupCriteriaCount'].clearValidators();
            }
            this.TestsFormGroup.controls['marksGroupCriteriaCount'].updateValueAndValidity();
            this.TestsFormGroup.controls['contribution'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
            this.testFormValidation();
            var contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce(function (acc, data) { return parseInt(acc, 10) + parseInt(data.contribution, 10); }, 0), 10);
            var totalContributionnPercentage = contributionnPercentage;
            var considerFormData = false;
            this.show = false;
            this.TestsFormGroup.controls.stepperController.setValue(true);
            if (this.isValidFormFields() && index === -1) {
                if (form.contribution != null && form.contribution.toString() !== '') {
                    totalContributionnPercentage = totalContributionnPercentage + parseInt(form.contribution.toString(), 10);
                    considerFormData = true;
                }
                if (totalContributionnPercentage !== 100) {
                    this.show = true;
                }
                else {
                    this.show = false;
                }
                if (totalContributionnPercentage <= 100 && considerFormData) {
                    var recordId = this.gradingTermTestGridData.length + 1;
                    this.gradingTermTestDetails.push({
                        id: recordId,
                        testTypeId: form.testTypeId,
                        contribution: form.contribution,
                        marksGroupCriteriaId: form.marksGroupCriteriaId,
                        isDisplayOnreportCard: form.isDisplayOnreportCard,
                        otherGradingTermId: form.otherGradingTermId,
                        marksGroupCriteriaCount: form.marksGroupCriteriaCount,
                        displayOption: form.displayOption,
                        schoolBoardId: form.schoolBoardId,
                        consideration: form.consideration
                    });
                    this.gradingTermTestGridData.push({
                        testTypeApiId: form.testTypeId,
                        otherGradingApiTermId: form.otherGradingTermId ? form.otherGradingTermId : null,
                        id: recordId,
                        contribution: form.contribution,
                        marksGroupCriteriaCount: form.marksGroupCriteriaCount,
                        testTypeId: (this.commonService.selectedDropDownData(this.testTypes, form.testTypeId)).label,
                        marksGroupCriteriaId: (this.commonService.selectedDropDownData(this.marksGroupCriteria, form.marksGroupCriteriaId)).label,
                        isDisplayOnreportCard: (this.commonService.selectedDropDownData(this.filterYesNo, form.isDisplayOnreportCard)).label,
                        otherGradingTermId: this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, form.otherGradingTermId)).label,
                        displayOption: (this.commonService.selectedDropDownData(this.evaluationTypes, form.displayOption)).label,
                        consideration: form.consideration,
                    });
                    this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
                    this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
                    this.TestsFormGroup.controls.otherGradingTermId.reset();
                    this.testsForm.submitted = false;
                    this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
                    this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
                }
                else if (totalContributionnPercentage > 100) {
                    this.show = true;
                }
                else {
                    if (!this.gradingTermTestGridData.length && !this.gradingTermTestDetails.length) {
                        this.TestsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
                            otherGradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
                            testTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                            contribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
                            displayOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                            marksGroupCriteriaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                            marksGroupCriteriaCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]),
                            isDisplayOnreportCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                            consideration: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
                            stepperController: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
                        });
                    }
                }
                if (totalContributionnPercentage === 100) {
                    this.disableNext = false;
                    this.disableSelect = true;
                    this.TestsFormGroup.setErrors(null);
                    this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
                    this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
                    this.TestsFormGroup.get('stepperController').setValue(true);
                }
                else if (totalContributionnPercentage > 100) {
                    this.TestsFormGroup.setErrors({ required: true });
                    this.show = true;
                }
                else {
                    this.TestsFormGroup.setErrors({ required: true });
                }
            }
            else {
                if (index > -1) {
                    this.openSnackBar('A Test Type can be selected only once in a Grading Term.', true);
                }
                this.TestsFormGroup.controls.stepperController.setValue(null);
            }
            this.gradingTermTestGrid();
        }
    };
    GradingTermsComponent.prototype.customClearValidation = function (form, columnList) {
        columnList.map(function (element) {
            form.get(element).clearValidators();
            form.controls[element].updateValueAndValidity();
        });
    };
    GradingTermsComponent.prototype.customSetValidation = function (form, columnList) {
        columnList.map(function (element) {
            if (element === 'consideration' || element === 'contribution') {
                form.get(element).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(999.99)]);
                form.controls[element].updateValueAndValidity();
            }
            else {
                form.get(element).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
                form.controls[element].updateValueAndValidity();
            }
        });
        this.testFormValidation();
    };
    GradingTermsComponent.prototype.deleteMember = function (operation) {
        var id = operation.clickedRow.id;
        if (this.gradingTermTestGridData.find(function (g) { return g.id === id && g.isexist === true; })) {
            this.removedTestTypeIds.push(id);
        }
        this.gradingTermTestGridData = this.gradingTermTestGridData.filter(function (x) { return x.id !== id; }).slice();
        this.gradingTermTestDetails = this.gradingTermTestDetails.filter(function (x) { return x.id !== id; }).slice();
        var contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce(function (acc, data) { return parseInt(acc, 10) + parseInt(data.contribution, 10); }, 0), 10);
        if (this.isContribution && contributionnPercentage !== 100) {
            this.disableNext = true;
            this.disableSelect = false;
            this.TestsFormGroup.controls.stepperController.setValue(null);
            this.show = true;
        }
        else {
            if (this.gradingTermTestGridData.length > 0) {
                this.TestsFormGroup.controls.stepperController.setValue(true);
                this.show = false;
                this.disableNext = false;
            }
            else {
                this.disableNext = true;
                this.TestsFormGroup.controls.stepperController.setValue(null);
            }
        }
        this.gradingTermTestGrid();
    };
    GradingTermsComponent.prototype.deleteClassMember = function (data) {
        var id = data.clickedRow.id;
        if (this.termClassSectionsData.length === 1) {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].ATLEAST_ONE_CLASS_SECTION_REQUIRED, true);
        }
        else if (this.termClassSectionsData.find(function (g) { return g.id === id; })) {
            this.removedClassSectionIds.push(id);
            this.termClassSectionsData = this.termClassSectionsData.filter(function (x) { return x.id !== id; }).slice();
            this.prepareGrid(this.termClassSectionsData, this.displaygradeClassSectionCols, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Messages"].CLASSSECTION_TITLE.toUpperCase(), this.classSectionGroupCriteria =
                ['boardCode', 'className']);
        }
    };
    GradingTermsComponent.prototype.prepareGrid = function (data, columsArray, title, groupCriteria) {
        this.gridTitle = title;
        this.gridData = data;
        this.gridColumsArray = columsArray;
        this.gridColums = this.gridColumsArray.map(function (x) { return x.field; });
        this.appliedClassSection = {
            tablename: this.gridTitle,
            rows: this.gridData,
            columns: this.gridColumsArray,
            hideHeader: true,
            rowGroupingColumns: groupCriteria
        };
    };
    GradingTermsComponent.prototype.gradingTermTestGrid = function () {
        var _this = this;
        this.gradingTermTestGridSettings = {
            rows: this.gradingTermTestGridData,
            columns: this.contributionGridHeaderData.filter(function (e) { return (_this.isContribution ? e.field !== 'consideration' : e.field !== 'contribution'); }),
            hideHeader: true,
            tabTable: true,
            padding: true
        };
    };
    GradingTermsComponent.prototype.cloneGradingContributionGrid = function () {
        this.cloneGradingTermContributionSettings = {
            rows: this.gradingTermTestGridData,
            columns: this.cloneContributionGridHeaderData,
            hideHeader: true,
            padding: true
        };
    };
    GradingTermsComponent.prototype.cloneGrade = function (data) {
        var _this = this;
        this.cloneEnable = true;
        this._gradingTermConfigurationService.gradingTermConfigurationGradeTermGet(data.clickedRow.id).subscribe(function (res) {
            _this.cloneGradeTermConfigurationById(res);
        });
    };
    GradingTermsComponent.prototype.onSchoolBoardSelect = function (data) {
        this.clearGradeTermSection();
        this.classNames = [];
        this.sectionDisabled = true;
        this.classDisabled = true;
        this.getClassesList(data);
        this.priorGradingTerms = [];
        this.gradeClassSectionViewModel.boardId = data.value;
    };
    GradingTermsComponent.prototype.onCloneGradingTermSelect = function (id) {
        var _this = this;
        this.cloneDisable = true;
        this.initializeCloneGradingTermForm();
        this.cloneClasses = [];
        this.clearCloneSection();
        this._gradingTermConfigurationService.gradingTermConfigurationFetchClassesByGradingtermidGet(id).subscribe(function (res) {
            if (res.listViews != null) {
                _this.cloneDisable = false;
                res.listViews.map(function (x) {
                    _this.cloneClasses.push({ value: x.id, label: x.name });
                });
            }
            else {
                _this.gradingTermsExceeded = res.messages.ResultMessage;
            }
        }, function (error) {
            _this.gradingTermsExceeded = error.messages.ResultMessage;
        });
    };
    GradingTermsComponent.prototype.onClassSelect = function (data) {
        var _this = this;
        this.disableCloneSection = true;
        this.clearCloneSection();
        this.cloneFormGroup.controls['cloneSectionId'].patchValue(null);
        this._gradingTermConfigurationService.gradingTermConfigurationFetchSectionsByClassidAndGradingtermidGet(data.value, this.cloneGradingTermId).subscribe(function (res) {
            if (res.listViews != null) {
                _this.disableCloneSection = false;
                res.listViews.map(function (x) {
                    _this.cloneSectionNamesList.push({ value: x.id, label: x.name });
                });
            }
            _this.cloneSections = { multiSelect: true, placeholder: 'Section', data: _this.cloneSectionNamesList, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NODATA_FOUND, isRequired: true };
        });
    };
    GradingTermsComponent.prototype.cloneGradeTermConfigurationById = function (termData) {
        var _this = this;
        this.cloneSectionNamesList = [];
        this.cloneClasses = [];
        this.disableCloneSection = true;
        this.gradingTermsExceeded = '';
        this.cloneGradingTermId = termData.gradingTermConfigurationDataViewModel[0].id;
        this.onCloneGradingTermSelect(termData.gradingTermConfigurationDataViewModel[0].id);
        this.termConfigurationData = termData.gradingTermConfigurationDataViewModel[0];
        if (this.termConfigurationData != null) {
            this.termConfigurationData.termStartDate = (this.termConfigurationData.termStartDate == null) ?
                null : this.commonService.customDateFormat(this.termConfigurationData.termStartDate, this.getSchoolDateFormat()).date;
            this.termConfigurationData.termEndDate = (this.termConfigurationData.termEndDate == null) ?
                null : this.commonService.customDateFormat(this.termConfigurationData.termEndDate, this.getSchoolDateFormat()).date;
            this.termConfigurationData.testsStartDate = (this.termConfigurationData.testsStartDate == null) ?
                null : this.commonService.customDateFormat(this.termConfigurationData.testsStartDate, this.getSchoolDateFormat()).date;
            this.termConfigurationData.testsEndDate = (this.termConfigurationData.testsEndDate == null) ?
                null : this.commonService.customDateFormat(this.termConfigurationData.testsEndDate, this.getSchoolDateFormat()).date;
            this.termConfigurationData.generateOverAllGrade = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.filterYesNo, this.termConfigurationData.generateOverAllGrade)).label;
            this.termConfigurationData.generateReportCard = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.filterYesNo, this.termConfigurationData.generateReportCard)).label;
            this.termConfigurationData.evaluationTypeId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.evaluationTypes, this.termConfigurationData.evaluationTypeId)).label;
        }
        this.termClassSectionsData = termData.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
        this.gradingTermTestGridData = JSON.parse(JSON.stringify(termData.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel));
        this.gradingTermTestGridData.forEach(function (e) {
            e.testTypeApiId = e.testTypeId,
                e.otherGradingApiTermId = e.otherGradingTermId ? e.otherGradingTermId : null,
                e.otherGradingTermId = e.otherGradingTermName,
                e.testTypeId = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.testTypes, e.testTypeId)).label,
                e.isDisplayOnreportCard = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.filterYesNo, e.isDisplayOnreportCard)).label,
                e.marksGroupCriteriaId = _this.commonService.defaultEmpty(_this.commonService.selectedDropDownData(_this.marksGroupCriteria, e.marksGroupCriteriaId)).label,
                e.isexist = true;
        });
        this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
        this.cloneGradingContributionGrid();
        this.scrollIntoViewById('clone-form');
    };
    // End
    GradingTermsComponent.prototype.clonePost = function (data) {
        var _this = this;
        this.cloneGradingTermDetails = {};
        if (this.cloneFormGroup.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
            this.isUpdateData = false;
            this.classSectionDetails = [];
            this.cloneGradingTermDetails.classId = data.cloneClassId;
            this.cloneGradingTermDetails.sectionsId = data.cloneSectionId.map(function (element) {
                return element.value;
            });
            this.cloneGradingTermDetails.gradingTermId = this.cloneGradingTermId;
            this._gradingTermConfigurationService.gradingTermConfigurationCloneGradingTermPost(this.cloneGradingTermDetails)
                .subscribe(function (res) { return _this.addorUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.isCloneFormValid = true;
            this.cloneEnable = true;
        }
    };
    GradingTermsComponent.prototype.onCloneCancel = function () {
        this.closeAddPanel = true;
        this.cloneEnable = false;
        this.clearCloneSection();
        this.cloneClasses = [];
        this.disableCloneSection = true;
        if (this.cloneGradingTermForm !== undefined) {
            this.cloneGradingTermForm.reset();
            this.cloneGradingTermForm.resetForm();
        }
        var cloneGradeColumnList = ['cloneClassId', 'cloneSectionId'];
        this.customClearValidation(this.cloneFormGroup, cloneGradeColumnList);
        this.scrollIntoViewById('app-table-grading-terms');
    };
    GradingTermsComponent.prototype.loadSchoolBoards = function () {
        var _this = this;
        this.schoolBoards = [];
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                _this.isSchoolBoards = true;
                _this.classDisabled = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoards.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.setDefaultBoard();
            }
            else {
                _this.isSchoolBoards = false;
                _this.classDisabled = false;
                _this.classNames = [];
                _this._classSectionService.schoolAcademicClasses().subscribe(function (response) {
                    if (response.listViews != null) {
                        if (response.listViews.length) {
                            _this.classDisabled = false;
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
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    GradingTermsComponent.prototype.clearCloneSection = function () {
        this.cloneSections = null;
        this.cloneSectionNamesList = [];
    };
    GradingTermsComponent.prototype.clearGradeTermSection = function () {
        this.sectionNames = null;
        this.sectionNamesList = [];
    };
    GradingTermsComponent.prototype.OnSelectionChange = function (event) {
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
            if (this.testsForm) {
                this.testsForm.submitted = false;
            }
            this.stepper._steps._results[event.selectedIndex].interacted = false;
        }
        else if (event.selectedIndex === 3) {
            this.stepper._steps._results[event.selectedIndex].interacted = false;
            this.reportsForm.controls.contribution.markAsUntouched();
            this.reportsForm.controls.usingGradingTermId.markAsUntouched();
            this.reportsForm.controls.title.markAsUntouched();
            this.reportsForm.controls.usingGradingTermId.updateValueAndValidity();
            this.reportsForm.updateValueAndValidity();
        }
    };
    GradingTermsComponent.prototype.onChangeContribution = function (event) {
        var _this = this;
        // this.onchangeEventOfGrading(event);
        if (this.gradingTermTestGridData.length) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GRADE_CHANGETOCONTRIBUTION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES) {
                    _this.onchangeEventOfGrading(event);
                }
                else {
                    _this.radioOptions = _this.radioOptions ? 0 : 1;
                    _this.changeDetecor.detectChanges();
                }
            });
        }
        else {
            this.onchangeEventOfGrading(event);
        }
    };
    GradingTermsComponent.prototype.onchangeEventOfGrading = function (event) {
        var _this = this;
        this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
        this.TestsFormGroup.controls.otherGradingTermId.reset();
        this.testsForm.submitted = false;
        this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
        if (this.isUpdateData) {
            this.gradingTermTestGridData.forEach(function (element) {
                if (element.isexist === true) {
                    _this.removedTestTypeIds.push(element.id);
                }
            });
        }
        this.gradingTermTestGridData = [];
        this.gradingTermTestDetails = [];
        this.isContribution = event === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].Default_Contribution ? true : false;
        this.gradingTermTestGrid();
        this.disableNext = true;
        this.disableSelect = false;
        this.show = false;
    };
    GradingTermsComponent.prototype.manageTestFormValidation = function (condition) {
        if (condition === void 0) { condition = false; }
        if (!condition) {
            this.TestsFormGroup.get('stepperController').clearValidators();
            this.TestsFormGroup.controls['stepperController'].updateValueAndValidity();
        }
        else {
            this.TestsFormGroup.controls['stepperController'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
        }
    };
    GradingTermsComponent.prototype.onSelectMarksGroupCriteria = function (event) {
        this.TestsFormGroup.controls.marksGroupCriteriaCount.setValue(null);
        if (event.value === 1) {
            // tslint:disable-next-line: max-line-length
            this.markGroupRequired = true;
            this.TestsFormGroup.controls.marksGroupCriteriaCount.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)
            ]);
        }
        else {
            this.TestsFormGroup.controls.marksGroupCriteriaCount.clearValidators();
            this.markGroupRequired = false;
        }
        this.TestsFormGroup.controls.marksGroupCriteriaCount.updateValueAndValidity();
    };
    GradingTermsComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('ClassSectionFormGroup', 'boardId', this.schoolBoards[0].value);
        this.onSchoolBoardSelect(this.schoolBoards[0]);
    };
    GradingTermsComponent.prototype.onAdditionalColumnSelect = function (event) {
        this.additionalColumnData = [];
        if (event.value) {
            this.reportsForm.controls.usingGradingTermId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
            this.reportsForm.controls.title.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]);
            // tslint:disable-next-line: max-line-length
            this.reportsForm.controls.contribution.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100)]);
            this.reportsForm.updateValueAndValidity();
            this.stepper.selected.interacted = false;
        }
        else {
            this.reportsForm.controls.usingGradingTermId.clearValidators();
            this.reportsForm.controls.title.clearValidators();
            this.reportsForm.controls.contribution.clearValidators();
            this.reportsForm.updateValueAndValidity();
        }
        this.onClear(true);
    };
    GradingTermsComponent.prototype.onChangeThisTerm = function (event) {
        if (event.checked) {
            this.reportsForm.controls.usingGradingTermId.clearValidators();
        }
        else {
            this.reportsForm.controls.usingGradingTermId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
        }
        this.reportsForm.controls.usingGradingTermId.setValue(null);
        this.reportsForm.updateValueAndValidity();
    };
    GradingTermsComponent.prototype.validateAdditionalForm = function () {
        if ((this.reportsForm.controls.usingGradingTermId.valid || this.reportsForm.controls.isPresentGradingTerm.value) && this.reportsForm.controls.contribution.valid &&
            this.reportsForm.controls.title.valid) {
            var contributuon_1 = 0;
            this.additionalColumnData.forEach(function (e) { return contributuon_1 += +e.contribution; });
            contributuon_1 += +this.reportsForm.value.contribution;
            if (contributuon_1 > 100) {
                this.openSnackBar('Overall Contribution Should not exceeds 100%', true);
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    GradingTermsComponent.prototype.onSelectAdditionColumns = function () {
        if (this.validateAdditionalForm()) {
            this.additionalColumnData.push(this.setAdditionalColumnData(this.reportsForm.value));
            this.reportsForm.controls.usingGradingTermId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
            this.onClear();
        }
        else {
            this.reportsForm.controls.contribution.markAsTouched();
            this.reportsForm.controls.usingGradingTermId.markAsTouched();
            this.reportsForm.controls.title.markAsTouched();
            this.reportsForm.updateValueAndValidity();
        }
        this.updateStepperController();
    };
    GradingTermsComponent.prototype.setAdditionalColumnData = function (value, isPresentGradingTerm) {
        if (isPresentGradingTerm === void 0) { isPresentGradingTerm = false; }
        return {
            id: value.id,
            title: value.title,
            usingGradingTermId: value.usingGradingTermId,
            isPresentGradingTerm: isPresentGradingTerm ? isPresentGradingTerm : value.isPresentGradingTerm,
            isVisible: value.isVisible,
            contribution: value.contribution,
            forGradingTermId: value.forGradingTermId ? value.forGradingTermId : null,
            isGrandTotalColumn: 0
        };
    };
    GradingTermsComponent.prototype.onClear = function (fromAdditionalChange) {
        if (fromAdditionalChange === void 0) { fromAdditionalChange = false; }
        this.reportsForm.patchValue({
            title: null,
            contribution: null,
            usingGradingTermId: null,
            isPresentGradingTerm: false,
            isVisible: true
        });
        this.reportsForm.controls.contribution.markAsUntouched();
        this.reportsForm.controls.usingGradingTermId.markAsUntouched();
        this.reportsForm.controls.title.markAsUntouched();
        this.reportsForm.controls.usingGradingTermId.updateValueAndValidity();
        this.reportsForm.updateValueAndValidity();
        if (!fromAdditionalChange) {
            this.stepper.selected.interacted = false;
        }
        this.changeDetecor.detectChanges();
    };
    GradingTermsComponent.prototype.onDeleteAdditionalColumn = function (i) {
        this.additionalColumnData.splice(i, 1);
        this.updateStepperController();
    };
    GradingTermsComponent.prototype.updateStepperController = function () {
        var _this = this;
        this.totalContribution = 0;
        this.additionalColumnData.map(function (e) { return _this.totalContribution += +e.contribution; });
        if (this.reportsForm.value.additionalColumns === 1 ? this.totalContribution === 100 : true) {
            this.reportsForm.controls.stepperController.patchValue(true, { emitEvent: false, onlySelf: true });
        }
        else {
            this.reportsForm.controls.stepperController.patchValue(null, { emitEvent: false, onlySelf: true });
        }
    };
    GradingTermsComponent.prototype.getLabelOfGradingTerms = function (value) {
        return value && this.priorGradingTerms.length && this.priorGradingTerms.find(function (e) { return e.value === value; }) && this.priorGradingTerms.find(function (e) { return e.value === value; }).label;
    };
    GradingTermsComponent.prototype.onChangeOverallGrade = function (event) {
        this.reportsForm.controls.overALLGradeDisplayName.setValue(null);
        if (event.value) {
            this.reportsForm.controls.overALLGradeDisplayName.enable();
        }
        else {
            this.reportsForm.controls.overALLGradeDisplayName.disable();
        }
        this.reportsForm.controls.overALLGradeDisplayName.updateValueAndValidity();
    };
    GradingTermsComponent.prototype.isValidFormFields = function () {
        var _this = this;
        var isValid = true;
        Object.keys(this.TestsFormGroup.controls).forEach(function (key) {
            if (key !== 'testsStartDate' && key !== 'testsEndDate') {
                isValid = isValid && _this.TestsFormGroup.get(key).valid;
            }
        });
        return isValid;
    };
    GradingTermsComponent.prototype.customResetForm = function (form, columnList) {
        columnList.map(function (element) {
            form.get(element).reset();
            form.controls[element].updateValueAndValidity();
        });
    };
    GradingTermsComponent.prototype.getReportsIsOptional = function () {
        var _this = this;
        if (this.reportsForm.value.additionalColumns === 1 && !this.additionalColumnData.length) {
            return false;
        }
        else {
            var additionalColumnFormValid = true;
            if (this.additionalColumnData.length) {
                this.totalContribution = 0;
                this.additionalColumnData.map(function (e) { return _this.totalContribution += +e.contribution; });
                additionalColumnFormValid = (this.totalContribution === 100) ? true : false;
            }
            return additionalColumnFormValid && this.reportsForm.controls.evaluationTypeId.valid
                && this.reportsForm.controls.reportTemplateId.valid &&
                this.reportsForm.controls.generateOverAllGrade.valid && this.reportsForm.controls.additionalColumns.valid
                && this.reportsForm.controls.stepperController.valid;
        }
    };
    GradingTermsComponent.prototype.onClickNext = function () {
        var _this = this;
        this.totalContribution = 0;
        this.additionalColumnData.map(function (e) { return _this.totalContribution += +e.contribution; });
        if (this.reportsForm.value.additionalColumns === 1) {
            if (!this.additionalColumnData.length) {
                this.openSnackBar('Please select contribution to continue', true);
            }
            else if (this.totalContribution !== 100) {
                this.openSnackBar('Total Contribution should be 100%', true);
            }
        }
    };
    GradingTermsComponent.prototype.getTemplates = function () {
        var _this = this;
        this._gradingTermConfigurationService.gradingTermConfigurationPrintTemplateGet()
            .subscribe(function (res) { return _this.setTemplates(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    GradingTermsComponent.prototype.setTemplates = function (res) {
        this.templates = res.listViews ? res.listViews : [];
    };
    GradingTermsComponent.prototype.onOpenTests = function () {
        this.scrollIntoViewById('customExpansion');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('classSectionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "classSectionForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gradeTermDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "gradeTermDetailsForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('testsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "testsForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "submitForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cloneGradingTermForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GradingTermsComponent.prototype, "cloneGradingTermForm", void 0);
    GradingTermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grading-terms',
            template: __webpack_require__(/*! ./grading-terms.component.html */ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.html"),
            styles: [__webpack_require__(/*! ./grading-terms.component.scss */ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_13__["GradeSetupService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_9__["ClassSectionService"],
            app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_5__["GardeTermConfigurationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GradingTermsComponent);
    return GradingTermsComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_11__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/grading/grading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL2dyYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/grading.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading.component.ts ***!
  \********************************************************************/
/*! exports provided: GradingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradingComponent", function() { return GradingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GradingComponent = /** @class */ (function () {
    function GradingComponent() {
    }
    GradingComponent.prototype.ngOnInit = function () {
    };
    GradingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grading',
            template: __webpack_require__(/*! ./grading.component.html */ "./src/app/modules/configuration/grading/grading.component.html"),
            styles: [__webpack_require__(/*! ./grading.component.scss */ "./src/app/modules/configuration/grading/grading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GradingComponent);
    return GradingComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/grading/grading.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/configuration/grading/grading.module.ts ***!
  \*****************************************************************/
/*! exports provided: GradingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradingModule", function() { return GradingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grading_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grading-routing.module */ "./src/app/modules/configuration/grading/grading-routing.module.ts");
/* harmony import */ var _test_type_test_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-type/test-type.component */ "./src/app/modules/configuration/grading/test-type/test-type.component.ts");
/* harmony import */ var app_service_grading_service_api_test_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/grading-service/api/test-type.service */ "./src/app/service/grading-service/api/test-type.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _grading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grading.component */ "./src/app/modules/configuration/grading/grading.component.ts");
/* harmony import */ var _academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./academic-grades/academic-grades.component */ "./src/app/modules/configuration/grading/academic-grades/academic-grades.component.ts");
/* harmony import */ var _grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grading-terms/grading-terms.component */ "./src/app/modules/configuration/grading/grading-terms/grading-terms.component.ts");
/* harmony import */ var _assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assessment-grades/assessment-grades.component */ "./src/app/modules/configuration/grading/assessment-grades/assessment-grades.component.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _grading_term_details_grading_term_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./grading-term-details/grading-term-details.component */ "./src/app/modules/configuration/grading/grading-term-details/grading-term-details.component.ts");





















var GradingModule = /** @class */ (function () {
    function GradingModule() {
    }
    GradingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_grading_component__WEBPACK_IMPORTED_MODULE_15__["GradingComponent"], _test_type_test_type_component__WEBPACK_IMPORTED_MODULE_4__["TestTypeComponent"], _academic_grades_academic_grades_component__WEBPACK_IMPORTED_MODULE_16__["AcademicGradesComponent"], _grading_terms_grading_terms_component__WEBPACK_IMPORTED_MODULE_17__["GradingTermsComponent"], _assessment_grades_assessment_grades_component__WEBPACK_IMPORTED_MODULE_18__["AssessmentGradesComponent"], _grading_term_details_grading_term_details_component__WEBPACK_IMPORTED_MODULE_20__["GradingTermDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _grading_routing_module__WEBPACK_IMPORTED_MODULE_3__["GradingRoutingModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedManagementModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__["MatcomponentsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true
                },
                app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__["GradeSetupService"], app_service_grading_service_api_test_type_service__WEBPACK_IMPORTED_MODULE_5__["TestTypeService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_19__["GardeTermConfigurationService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], GradingModule);
    return GradingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/grading/test-type/test-type.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/test-type/test-type.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [settings]=\"tabSettings\" (getTableData)='getTableData($event)'\n    (rowBasedAction)='onTableSelect($event)' [templateRef]='addTestTypeTemplate' (deleteAllRows)=\"deleteAll()\"\n     [closeRowForm]='closeAddPanel'\n    (openAddForm)='addRow()' (selectedRows)='selectedRows($event)'></app-table>\n\n<ng-template #addTestTypeTemplate>\n    <form [formGroup]=\"testTypeForm\" (ngSubmit)=\"onSubmitTestType(testTypeForm)\" #userTestTypeForm=\"ngForm\">\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #testTypeName translate>Test Type Name</mat-label>\n                <input (keyup)=\"preventSpace($event,'testTypeForm','name')\" matInput formControlName=\"name\" autocomplete=\"off\" required  (blur)=\"trimTextBoxSpaces('testTypeForm','name')\">\n                <mat-error>\n                    <app-validation [labelName]=\"testTypeName.innerText\"\n                        [validationControl]=\"testTypeForm.controls.name\" [doValidate]=\"isValidate\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #testTypeCode translate>Test Type Code</mat-label>\n                <input (keyup)=\"preventSpace($event,'testTypeForm','code')\" matInput formControlName=\"code\" autocomplete=\"off\"  (blur)=\"trimTextBoxSpaces('testTypeForm','code')\">\n                <mat-error>\n                    <app-validation [labelName]=\"testTypeCode.innerText\"\n                        [validationControl]=\"testTypeForm.controls.code\" [doValidate]=\"isValidate\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #questionCount translate>Question Count</mat-label>\n                <input (keyup)=\"preventSpace($event,'testTypeForm','questionCount')\" matInput formControlName=\"questionCount\" autocomplete=\"off\"  (blur)=\"trimTextBoxSpaces('testTypeForm','questionCount')\">\n                <mat-error>\n                    <app-validation [labelName]=\"questionCount.innerText\"\n                        [validationControl]=\"testTypeForm.controls.questionCount\" [doValidate]=\"isValidate\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #marksCount translate>Marks Count</mat-label>\n                <input (keyup)=\"preventSpace($event,'testTypeForm','marksCount')\" matInput formControlName=\"marksCount\" autocomplete=\"off\"  (blur)=\"trimTextBoxSpaces('testTypeForm','marksCount')\">\n                <mat-error>\n                    <app-validation [labelName]=\"marksCount.innerText\"\n                        [validationControl]=\"testTypeForm.controls.marksCount\" [doValidate]=\"isValidate\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closePanel()\" translate>\n                {{'Cancel' | translate}}\n            </button>\n            <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{(isUpdate ? 'Update':'Create') | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/grading/test-type/test-type.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/test-type/test-type.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9ncmFkaW5nL3Rlc3QtdHlwZS90ZXN0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/grading/test-type/test-type.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configuration/grading/test-type/test-type.component.ts ***!
  \********************************************************************************/
/*! exports provided: TestTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTypeComponent", function() { return TestTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_service_grading_service_api_test_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/grading-service/api/test-type.service */ "./src/app/service/grading-service/api/test-type.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var TestTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TestTypeComponent, _super);
    function TestTypeComponent(testTypeService, commonService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.testTypeService = testTypeService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.testTypeIds = [];
        _this.custRowsPerPageOptions = [];
        _this.isUpdate = false;
        _this.currentComponent = 'TestTypeComponent';
        _this.errorsList = [];
        _this.disbleSubmitBtn = false;
        _this.allTestTypeDetailsViewModel = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DEFAULT_SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
        };
        _this.commonService.getTableLSObj(_this.allTestTypeDetailsViewModel);
        return _this;
    }
    TestTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
        * table columns
        */
        this.cols = [
            { field: 'name', header: 'Test Type Name', sort: true },
            { field: 'code', header: 'Test Type Code', sort: true },
            { field: 'questionCount', header: 'Question Count', sort: true },
            { field: 'marksCount', header: 'Marks Count', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        /**
        * intializes formGroup for TestType
        */
        this.testTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]),
            questionCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(32767), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NUMBER_PATTERN)]),
            marksCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
        });
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.allTestTypeDetailsViewModel = modelTableComponent;
        }
        if (this.getTokenParam('_as')) {
            this.fetchTableData();
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
            this.tabSettings = {
                columns: this.cols,
                model: this.allTestTypeDetailsViewModel,
                rows: this.rows,
                tablename: 'Test Types',
                componentName: this.currentComponent,
                isNewStudentCourseSelectionRequired: true,
                isSelectRowRequired: true,
                visibleSelectAll: true,
                isPaginationRequired: true,
                totalRowsCount: this.totalItems,
                custRowsPerPageOptions: this.custRowsPerPageOptions,
                pageCnt: this.pageCnt,
                headerOperations: {
                    infoButton: {
                        required: true,
                        text: 'Test Types'
                    }
                },
            };
        }
    };
    /**
    * api call to get all test types
    */
    TestTypeComponent.prototype.getTableData = function (allTestTypeDetailsViewModel) {
        this.allTestTypeDetailsViewModel = allTestTypeDetailsViewModel;
        this.fetchTableData();
    };
    TestTypeComponent.prototype.fetchTableData = function () {
        var _this = this;
        this.testTypeService.getAllDetails(this.allTestTypeDetailsViewModel.sortBy, this.allTestTypeDetailsViewModel.sortOrder, this.allTestTypeDetailsViewModel.names, this.allTestTypeDetailsViewModel.codes, this.allTestTypeDetailsViewModel.questionCounts, this.allTestTypeDetailsViewModel.marksCounts, this.failedRecords, this.allTestTypeDetailsViewModel.pageNumber, this.allTestTypeDetailsViewModel.pageSize).subscribe(function (res) { _this.getAllTestTypes(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    /**
    * manipulate response data and sets to app-table
    * @param testTypeList
    */
    TestTypeComponent.prototype.getAllTestTypes = function (testTypeList) {
        this.custRowsPerPageOptions = [];
        if (!testTypeList.testTypeListViewModel) {
            this.rows = [];
        }
        else {
            this.rows = testTypeList.testTypeListViewModel.list;
            this.totalItems = testTypeList.testTypeListViewModel.totalItems;
        }
        var testoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_ICON
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_ICON
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = testoperations;
        });
        if (testTypeList.testTypeListViewModel) {
            this.allTestTypeDetailsViewModel.pageNumber = testTypeList.testTypeListViewModel.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.allTestTypeDetailsViewModel,
            rows: this.rows,
            tablename: 'Test Types',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    name: this.addTestTypeTemplate,
                    btnName: 'New Test Type'
                },
                infoButton: {
                    required: true,
                    text: 'Test Types'
                }
            },
            filtersList: testTypeList.filters
        };
    };
    /**
    * Deleteting the testtypes
    * @param testTypeIds
    * @param isMultiSelect
    */
    TestTypeComponent.prototype.deleteTestTypes = function (testTypeIds, isMultiSelect) {
        var _this = this;
        if (testTypeIds.length > 0) {
            this.testTypeService.deleteAll(testTypeIds).subscribe(function (res) {
                if (res.statusCode = http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                    _this.testTypeIds = [];
                    _this.openSnackBar(res.messages.ResultMessage);
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage);
                }
                if (isMultiSelect) {
                    _this.failedRecords = res.failedRecords;
                }
                _this.fetchTableData();
            }, function (error) {
                if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                    _this.failedRecords = (error.error.failedRecords);
                }
                _this.errorResponse(error);
            });
        }
    };
    TestTypeComponent.prototype.onTableSelect = function (data) {
        var _this = this;
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE) {
            var dialogRef = this.dialogBox(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    var testTypeIds = [data.clickedRow.id];
                    _this.deleteTestTypes(testTypeIds, false);
                }
            });
        }
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT) {
            this.isUpdate = true;
            this.closeAddPanel = false;
            this.testTypeService.getTestTypeById(data.clickedRow.id).subscribe(function (res) {
                _this.testTypeForm.patchValue(res.testTypeViewModel);
                _this.testTypeForm.controls['id'].setValue(data.clickedRow.id);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    /**
    * Api call for Add or updating the testtype based on condition
    * @param testTypeView
    */
    TestTypeComponent.prototype.onSubmitTestType = function (testTypeView) {
        var _this = this;
        this.isValidate = true;
        if (testTypeView.status === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (testTypeView.value.id == null) {
                this.testTypeViewModel = testTypeView.value;
                this.testTypeService.createTestType(this.testTypeViewModel).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.testTypeView = testTypeView.value;
                this.testTypeService.updateTestType(this.testTypeView).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    /**
    * Responce for Add or update
    * @param testTypeView
    */
    TestTypeComponent.prototype.addUpdateResponce = function (testTypeView) {
        this.disbleSubmitBtn = false;
        if (testTypeView.statusCode !== http_status_codes__WEBPACK_IMPORTED_MODULE_7__["CONFLICT"]) {
            this.closeAddPanel = true;
            this.fetchTableData();
        }
        this.openSnackBar(testTypeView.messages.ResultMessage);
    };
    /**
    * close the panel and initialize form on close
    */
    TestTypeComponent.prototype.closePanel = function () {
        this.closeAddPanel = true;
        this.isValidate = false;
        this.testTypeForm.reset();
        this.userTestTypeForm.resetForm();
        this.disbleSubmitBtn = false;
    };
    /**
    * warns on delete then call deletetestTypes method on yes
    */
    TestTypeComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.dialogBox(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].WARNING_ON_MULTI_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                _this.deleteTestTypes(_this.testTypeIds, true);
            }
        });
    };
    TestTypeComponent.prototype.addRow = function () {
        this.isValidate = false;
        this.testTypeForm.reset();
        this.userTestTypeForm.resetForm();
        this.closeAddPanel = false;
        this.isUpdate = false;
    };
    /**
    * opens dialog to show on warnings/success messages
    * @param dialogData
    * @param disableClose
    * @param button1Text
    * @param button2Text
    */
    TestTypeComponent.prototype.dialogBox = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    TestTypeComponent.prototype.selectedRows = function (data) {
        this.testTypeIds = [];
        for (var index = 0; index < data.length; index++) {
            this.testTypeIds.push(data[index].id);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addTestTypeTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestTypeComponent.prototype, "addTestTypeTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userTestTypeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestTypeComponent.prototype, "userTestTypeForm", void 0);
    TestTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-type',
            template: __webpack_require__(/*! ./test-type.component.html */ "./src/app/modules/configuration/grading/test-type/test-type.component.html"),
            styles: [__webpack_require__(/*! ./test-type.component.scss */ "./src/app/modules/configuration/grading/test-type/test-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_grading_service_api_test_type_service__WEBPACK_IMPORTED_MODULE_8__["TestTypeService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], TestTypeComponent);
    return TestTypeComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-grading-grading-module~app-shared-wizard-wizard-module.js.map