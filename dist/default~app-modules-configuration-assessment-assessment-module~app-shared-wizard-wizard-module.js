(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-assessment-assessment-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getTableDetails($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n    [closeAddForm]=\"closeAddPanel\" (openAddForm)=\"onAddFormClick()\" [newFilterbuttonsDisable]=\"buttonDisable\"\n    [closeRowForm]='closeAddPanel' [templateRef]=\"addAsssementCategoriesRef\"></app-table>\n\n<ng-template #addAsssementCategoriesRef>\n    <form [formGroup]=\"assessmentSubCatryForm\" (ngSubmit)=\"submitAssesmentForm(assessmentSubCatryForm)\"\n        #assessmentForm=\"ngForm\" fxLayout=\"column\">\n        <div fxLayout=\"row wrap\" fxFlex=\"100\" class=\"pt-24\">\n            <!-- <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-xs=\"46\" class=\"mt-12\"> -->\n            <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <mat-label #assessmentCategory translate>assessmentcategory</mat-label>\n                <input (keyup)=\"preventSpace($event,'assessmentSubCatryForm','name')\" matInput formControlName=\"name\"\n                    (blur)=\"trimTextBoxSpaces('assessmentSubCatryForm','name')\" autocomplete=\"off\" required>\n                <mat-error>\n                    <app-validation [labelName]='assessmentCategory.innerText'\n                        [validationControl]=\"assessmentSubCatryForm.controls.name\"\n                        [doValidate]=\"assessmentCategoryFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <!-- </div> -->\n            <div formArrayName=\"assessmentSubCategorys\"\n                *ngFor=\"let itemrow of addNewRowAssSubCatryform.controls; let i=index ; let l= last; let f= last\" fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <ng-container [formGroupName]=\"i\">\n                    <mat-form-field appearance=\"outline\" class=\"pr-sm-10\" fxLayout=\"column\" fxFlex=\"74\">\n                        <mat-label for=\"form-{{i}}\" #assessmentSubCategory translate>assessmentsubcategory</mat-label>\n                        <input #myInput matInput id=\"form-{{i}}\" (keyup)=\"preventSpaceForArray($event, itemrow?.controls?.name)\" autocomplete=\"off\" (blur)=\"preventSpaceForArray($event, itemrow?.controls?.name)\"\n                            formControlName=\"name\" (ngModelChange)=\"checkLength(itemrow,i)\">\n                        <mat-error>\n                            <app-validation [labelName]='myInput.innerText' [validationControl]=\"itemrow.controls.name\"\n                                 [doValidate]=\"true\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                    <div fxLayout=\"row\" fxFlex=\"26\" class=\"pt-12\">\n                        <button *ngIf=\"addNewRowAssSubCatryform.controls?.length > 1\" mat-icon-button type=\"button\"\n                            (click)=\"deleteRow(assessmentSubCatryForm,i)\">\n                            <mat-icon aria-label=\"icon-button with a add delete\" class=\"red-400-fg\">delete</mat-icon>\n                        </button>\n                        <button class=\"ml-12\" mat-mini-fab type=\"button\" [disabled]=\"!itemrow.controls.name?.valid || !itemrow.value.name\" (click)=\"addNewRow()\" *ngIf=\"l\">\n                            <mat-icon aria-label=\"icon-button with a add icon\">add</mat-icon>\n                        </button>                                        \n                    </div>\n\n                </ng-container>\n            </div>\n\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\" (click)=\"cancel()\">\n                {{'cancel' | translate}}</button>\n            <button mat-raised-button type=\"submit\" [disabled]=\"disbleSubmitBtn\" class=\"text-uppercase\" color=\"accent\"\n                *ngIf=\"isCreate\">{{'create' | translate}}</button>\n            <button mat-raised-button type=\"submit\" [disabled]=\"disbleUpdateBtn\" class=\"text-uppercase\" color=\"accent\"\n                *ngIf=\"isUpdate\">{{'update' | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQtY2F0ZWdvcmllcy9hc3Nlc3NtZW50LWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AssessmentCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentCategoriesComponent", function() { return AssessmentCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-categories.service */ "./src/app/service/assessment-service/api/assessment-categories.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var AssessmentCategoriesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssessmentCategoriesComponent, _super);
    function AssessmentCategoriesComponent(_fb, dialog, commonService, assessmentCategoriesService, cd, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.assessmentCategoriesService = assessmentCategoriesService;
        _this.cd = cd;
        _this.snackBar = snackBar;
        _this.returnAssessmentsdata = [];
        _this.filterRowData = [];
        _this.checkLengthCount = [];
        _this.assessmentCategoryFormSubmitted = false;
        _this.assessmentSubCategory = false;
        _this.isEdit = false;
        _this.buttonDisable = false;
        _this.disbleSubmitBtn = false;
        _this.disbleUpdateBtn = false;
        // Table Variables 
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'AssessmentCategoriesComponent';
        _this.searchAssessmentCategoryView = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    AssessmentCategoriesComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.searchAssessmentCategoryView = modelTableComponent;
        }
        // Initialise formGroup for assessmentSubCategorys
        this.assessmentSubCatryForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]),
            assessmentSubCategorys: this._fb.array([this.initItemRows()]),
        });
        // Table Colums
        this.cols = [
            { field: 'assessmentCategoryName', header: 'Assessment Category', sort: false },
            { field: 'assessmentSubCategoryName', header: 'Assessment Subcategory', sort: false },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.searchAssessmentCategoryView,
            tablename: 'Assessment Categories',
            componentName: this.currentComponent,
        };
        // this.commonService.getTableDetails(this.tabSettings);
        this.getTableDetails(this.searchAssessmentCategoryView);
    };
    // get all assessment categories based on schoolId
    AssessmentCategoriesComponent.prototype.getTableDetails = function (data) {
        var _this = this;
        this.searchAssessmentCategoryView = data;
        this.assessmentCategoriesService.getAssessmentCategories(data.assessmentCategoryName, data.sortBy, data.assessmentSubCategoryName, data.sortOrder, data.pageNumber, data.pageSize).subscribe(function (res) { return _this.assessmentCatry(res); }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    // return response by schoolId
    AssessmentCategoriesComponent.prototype.assessmentCatry = function (data) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (!data.assessmentCategoryListView) {
            this.rows = [];
            this.totalItems = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.assessmentCategoryListView.list;
            this.totalItems = data.assessmentCategoryListView.totalItems;
            this.pageCnt = data.assessmentCategoryListView.totalPages;
        }
        this.filterRowData = [];
        if (data.assessmentCategoryListView) {
            this.searchAssessmentCategoryView.pageNumber = data.assessmentCategoryListView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.searchAssessmentCategoryView,
            rows: this.rows,
            tablename: 'Assessment Categories',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            filtersList: data.filters,
            rowGroupingColumns: ['assessmentCategoryName'],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Assessment Categories'
                },
                addingForm: {
                    required: true,
                    btnName: 'New Assessment Category'
                }
            },
        };
        this.filterRowData = this.rows;
        // filtering data 
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.assessmentCategoryName === element.assessmentCategoryName;
                    });
                    if (foundIndex === -1) {
                        x.push(element);
                    }
                });
            }
        });
        this.filterRowData = x;
        // apply edit and delete
        this.filterRowData.forEach(function (element) {
            _this.rows.forEach(function (element1) {
                if (element.assessmentCategoryName === element1.assessmentCategoryName &&
                    element.assessmentSubCategoryName === element1.assessmentSubCategoryName &&
                    element.assessmentCategoryId === element1.assessmentCategoryId &&
                    element.assessmentSubCategoryId === element1.assessmentSubCategoryId) {
                    element1.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE
                        },
                    ];
                }
            });
        });
    };
    // add and update assessment categories
    AssessmentCategoriesComponent.prototype.submitAssesmentForm = function (assesmentForm) {
        var _this = this;
        if (this.isEdit === true) {
            if (assesmentForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VALID) {
                var updateAssessmentSubCtry = assesmentForm.controls.assessmentSubCategorys.value;
                if (updateAssessmentSubCtry.length > 0) {
                    var filtered = updateAssessmentSubCtry.filter(function (el) {
                        return el.name.trim() !== '';
                    });
                    updateAssessmentSubCtry = filtered;
                }
                var valueArr_1 = updateAssessmentSubCtry.map(function (item) {
                    return item.name.toLowerCase().trim();
                });
                var isDuplicate = valueArr_1.some(function (item, idx) {
                    return valueArr_1.indexOf(item) !== idx;
                });
                if (isDuplicate === true) {
                    this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].ASSESSMENT_SUBCATEGORY, true);
                }
                else {
                    assesmentForm.value.assessmentSubCategorys = [];
                    for (var i = 0; i < assesmentForm.controls.assessmentSubCategorys.value.length; i++) {
                        assesmentForm.value.assessmentSubCategorys.push({
                            assessmentCategoryId: assesmentForm.controls.assessmentSubCategorys.value[i].assessmentCategoryId,
                            assessmentSubCategoryId: assesmentForm.controls.assessmentSubCategorys.value[i].assessmentSubCategoryId,
                            name: assesmentForm.controls.assessmentSubCategorys.value[i].name.trim()
                        });
                    }
                    if (assesmentForm.value.assessmentSubCategorys.length > 0) {
                        var filteredUpdate = assesmentForm.value.assessmentSubCategorys.filter(function (el) {
                            return el.name.trim() !== '';
                        });
                        assesmentForm.value.assessmentSubCategorys = filteredUpdate;
                    }
                    else {
                        assesmentForm.value.assessmentSubCategorys = [];
                    }
                    this.disbleUpdateBtn = true;
                    this.assessmentCategoriesService.updateAssessmentCategories(assesmentForm.value).subscribe(function (res) {
                        if (res.statusCode === _this.httpStatus.OK) {
                            _this.assessmentForm.resetForm();
                            _this.isEdit = false;
                            _this.closeAddPanel = true;
                            _this.buttonDisable = false;
                            _this.getTableDetails(_this.searchAssessmentCategoryView);
                            _this.disbleUpdateBtn = false;
                            _this.openSnackBar(res.messages.ResultMessage);
                        }
                        else {
                            _this.isEdit = false;
                            _this.disbleUpdateBtn = false;
                            _this.openSnackBar(res.messages.ResultMessage, true);
                        }
                    }, function (error) {
                        _this.disbleUpdateBtn = false;
                        _this.errorResponse(error);
                    });
                }
            }
            else {
                this.assessmentCategoryFormSubmitted = true;
                return false;
            }
        }
        else {
            if (assesmentForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VALID) {
                var assessmentSubCtry = assesmentForm.controls.assessmentSubCategorys.value;
                if (assessmentSubCtry.length > 0) {
                    var filtered = assessmentSubCtry.filter(function (el) {
                        return el.name.trim() !== '';
                    });
                    assessmentSubCtry = filtered;
                }
                var valueArr_2 = assessmentSubCtry.map(function (item) {
                    return item.name.toLowerCase().trim();
                });
                var isDuplicate = valueArr_2.some(function (item, idx) {
                    return valueArr_2.indexOf(item) !== idx;
                });
                if (isDuplicate === true) {
                    this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].ASSESSMENT_SUBCATEGORY, true);
                }
                else {
                    if (assesmentForm.value.assessmentSubCategorys.length > 0) {
                        var filtered = assesmentForm.value.assessmentSubCategorys.filter(function (el) {
                            return el.name.trim() !== '';
                        });
                        assesmentForm.value.assessmentSubCategorys = filtered;
                    }
                    else {
                        assesmentForm.value.assessmentSubCategorys = [];
                    }
                    assesmentForm.id = null;
                    this.disbleSubmitBtn = true;
                    this.assessmentCategoriesService.createAssessmentCategories(assesmentForm.value).subscribe(function (res) {
                        if (res.statusCode === _this.httpStatus.OK) {
                            _this.getTableDetails(_this.searchAssessmentCategoryView);
                            _this.assessmentForm.resetForm();
                            _this.closeAddPanel = true;
                            _this.disbleSubmitBtn = false;
                            _this.openSnackBar(res.messages.ResultMessage);
                        }
                        else {
                            _this.disbleSubmitBtn = false;
                            _this.openSnackBar(res.messages.ResultMessage, true);
                        }
                    }, function (error) {
                        _this.disbleSubmitBtn = false;
                        _this.errorResponse(error);
                    });
                }
            }
            else {
                this.assessmentCategoryFormSubmitted = true;
                return false;
            }
        }
    };
    // Cancel Button
    AssessmentCategoriesComponent.prototype.cancel = function () {
        this.closeAddPanel = true;
        this.buttonDisable = false;
        this.assessmentCategoryFormSubmitted = false;
        this.assessmentForm.resetForm();
    };
    // add new form for assessment categories
    AssessmentCategoriesComponent.prototype.onAddFormClick = function () {
        this.closeAddPanel = false;
        this.isCreate = true;
        this.isUpdate = false;
        this.isEdit = false;
        this.buttonDisable = true;
        this.assessmentForm.resetForm();
        this.addCategoryName();
    };
    // Initailising form for assessment categories
    AssessmentCategoriesComponent.prototype.addCategoryName = function () {
        this.assessmentSubCatryForm = this._fb.group({
            assessmentSubCategorys: this._fb.array([this.initItemRows()]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]),
        });
    };
    // edit assessment categories based on id
    AssessmentCategoriesComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT) {
            this.isEdit = true;
            this.closeAddPanel = false;
            this.isCreate = false;
            this.isUpdate = true;
            this.assessmentCategoriesService.getAssessmentCategoriesByCatgryId(event.clickedRow.assessmentCategoryId).subscribe(function (res) { return _this.retAssesmntCatgryById(res); }, function (error) {
                _this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
        }
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES) {
                    _this.assessmentCategoriesService.deleteAssesmentCategory(event.clickedRow.assessmentCategoryId).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.disbleSubmitBtn = false;
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
    };
    // return response  by assessmnetCategoryId
    AssessmentCategoriesComponent.prototype.retAssesmntCatgryById = function (data) {
        var _this = this;
        if (data.statusCode === this.httpStatus.OK) {
            var validators_1 = [];
            this.buttonDisable = true;
            this.isEdit = true;
            this.closeAddPanel = false;
            this.returnAssessmentsdata = [];
            if (data.assessmentCategoriesViews[0].assessmentSubCategorys.length > 0) {
                for (var i = 0; i < data.assessmentCategoriesViews[0].assessmentSubCategorys.length; i++) {
                    this.returnAssessmentsdata.push({
                        assessmentCategoryId: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].assessmentCategoryId,
                        name: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].name,
                        assessmentSubCategoryId: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].assessmentSubCategoryId,
                    });
                }
                data.assessmentCategoriesViews[0].assessmentSubCategorys = [];
                this.assessmentSubCatryForm.controls['assessmentSubCategorys'] = this._fb.array(this.returnAssessmentsdata.map(function (i) { return _this._fb.group(i); }));
            }
            else {
                this.assessmentSubCatryForm = this._fb.group({
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]),
                    assessmentSubCategorys: this._fb.array([this.initItemRows()]),
                });
            }
            this.assessmentSubCatryForm.controls['name'].setValue(data.assessmentCategoriesViews[0].name);
            this.assessmentSubCatryForm.controls['id'].setValue(data.assessmentCategoriesViews[0].id);
            validators_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45));
            this.assessmentSubCatryForm.controls.assessmentSubCategorys.value.forEach(function (element, j) {
                // tslint:disable-next-line: max-line-length
                _this.assessmentSubCatryForm.get('assessmentSubCategorys').controls[j].get('name').setValidators(validators_1);
                _this.assessmentSubCatryForm.get('assessmentSubCategorys').controls[j].get('name').updateValueAndValidity({ emitEvent: false });
            });
        }
    };
    // return response after deletion of assessment categories
    AssessmentCategoriesComponent.prototype.deleteResponse = function (response) {
        this.getTableDetails(this.searchAssessmentCategoryView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    Object.defineProperty(AssessmentCategoriesComponent.prototype, "addNewRowAssSubCatryform", {
        // return type for educaion details form
        get: function () {
            return this.assessmentSubCatryForm.get('assessmentSubCategorys');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    AssessmentCategoriesComponent.prototype.addNewRow = function () {
        this.assessmentSubCategory = true;
        // control refers to your formarray
        var control = this.assessmentSubCatryForm.controls['assessmentSubCategorys'];
        // add new formgroup
        control.push(this.initItemRows());
        this.cd.detectChanges();
        this.myInput.last.nativeElement.focus();
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    AssessmentCategoriesComponent.prototype.deleteRow = function (subCategoryArray, index) {
        // control refers to your formarray
        var control = this.assessmentSubCatryForm.controls['assessmentSubCategorys'];
        // remove the chosen row
        control.removeAt(index);
        this.cd.detectChanges();
        this.myInput.last.nativeElement.focus();
    };
    // list all your form controls here, which belongs to your form array
    AssessmentCategoriesComponent.prototype.initItemRows = function () {
        return this._fb.group({
            assessmentCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            assessmentSubCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]),
        });
    };
    // checklength of assessmentSubCategories
    AssessmentCategoriesComponent.prototype.checkLength = function (label, index) {
        if (this.assessmentSubCatryForm.controls['assessmentSubCategorys'].value[index].name) {
            this.assessmentSubCatryForm.controls['assessmentSubCategorys'].value[index].name.trim();
            this.checkLengthCount = [];
            for (var x = 0; x < this.assessmentSubCatryForm.controls.assessmentSubCategorys.value.length; x++) {
                if (this.assessmentSubCatryForm.controls.assessmentSubCategorys.value[x].name.length < 1) {
                    this.checkLengthCount.push(this.assessmentSubCatryForm.controls.assessmentSubCategorys.value[x]);
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AssessmentCategoriesComponent.prototype, "myInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assessmentForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssessmentCategoriesComponent.prototype, "assessmentForm", void 0);
    AssessmentCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment-categories',
            template: __webpack_require__(/*! ./assessment-categories.component.html */ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.html"),
            // changeDetection: ChangeDetectionStrategy.OnPush,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./assessment-categories.component.scss */ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentCategoriesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AssessmentCategoriesComponent);
    return AssessmentCategoriesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)'\n    (getTableData)='getAllAssessmentGroups($event)' [closeRowForm]='closeAddPanel' (openAddForm)=\"addForm()\"\n    [templateRef]=\"addTemplateRef\" (deleteAllRows)='deleteAll()'\n    (selectedRows)='selectedRows($event)'>\n</app-table>\n\n<ng-template #addTemplateRef>\n    <form #assessmentgroupForm=\"ngForm\" [formGroup]=\"assmentGrpForm\"\n        (ngSubmit)=\"submitAssesmentGroupForm(assmentGrpForm)\">\n        <!-- text field -->\n        <div fxFlexFill fxLayout=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n            <mat-form-field appearance=\"outline\" class=\"example-full-width mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"50\"\n                fxFlex=\"100\">\n                <mat-label #assessmentGroupName translate>Name</mat-label>\n                <input matInput formControlName=\"assessmentGroupName\" autocomplete=\"off\" required (keyup)=\"preventSpace($event,'assmentGrpForm', 'assessmentGroupName')\" (blur)=\"trimTextBoxSpaces('assmentGrpForm', 'assessmentGroupName')\">\n                <mat-error>\n                    <app-validation [labelName]=\"assessmentGroupName.innerText\"\n                        [validationControl]=\"assmentGrpForm.controls.assessmentGroupName\"\n                        class=\"error-msg messages text-left text-danger\" [doValidate]=\"doValidate\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <!-- btn section -->\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">\n                {{'cancel' | translate}}</button>\n            <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n                [disabled]=\"disableSubmitBtn\">{{(updateBtn ? 'Update':'Create') | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQtZ3JvdXBzL2Fzc2Vzc21lbnQtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AssessmentGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentGroupsComponent", function() { return AssessmentGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_groups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-groups.service */ "./src/app/service/assessment-service/api/assessment-groups.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var AssessmentGroupsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssessmentGroupsComponent, _super);
    function AssessmentGroupsComponent(assessmentGroupsService, dialog, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.assessmentGroupsService = assessmentGroupsService;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.dataLoaded = Promise.resolve(false);
        /* array of ids for storing ids */
        _this.arryOfIds = [];
        /* refernces for ng prime table */
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.disableSubmitBtn = false;
        _this.assessmentGroupIds = [];
        /* var for failed records id's */
        _this.failedRecords_Ids = [];
        _this.currentComponent = 'AssessmentGroupsComponent';
        _this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        return _this;
    }
    AssessmentGroupsComponent.prototype.ngOnInit = function () {
        /* initializing the form with initial serach */
        this.assessmentGroupSearchView = {
            sortBy: '',
            name: [],
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].SORTORDER,
            failedRecords: [],
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGESIZE
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.assessmentGroupSearchView = modelTableComponent;
        }
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.assessmentGroupSearchView,
            tablename: 'Assessment Groups',
            componentName: this.currentComponent,
        };
        /* initializing table columns */
        this.cols = [
            { field: 'name', header: 'Name', sort: true },
            { field: 'actions', header: 'Actions' },
        ];
        /* initializing form with validations */
        this.assmentGrpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            assessmentGroupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)])
        });
        /* initializing viewmodel for update from */
        this._assessmentGroupsViewModelEdit = ({
            id: '',
            name: ''
        });
        /* initializing viewmodel for update add */
        this._assessmentGroupsViewModelAdd = ({
            name: ''
        });
        this.failedRecords_Ids = [];
        /* on page_load get call to server */
        this.getAllAssessmentGroups(this.assessmentGroupSearchView);
    };
    /* fetched records response from server */
    AssessmentGroupsComponent.prototype.assessmentGroupsRes = function (data) {
        this.selectAll = false;
        if (!data.assessmentGroupsViewModel) {
            this.rows = [];
        }
        else {
            this.rows = data.assessmentGroupsViewModel.list;
            this.totalItems = data.assessmentGroupsViewModel.totalItems;
        }
        var testoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = testoperations;
        });
        this.failedRecords_Ids = [];
        if (data.assessmentGroupsViewModel) {
            this.assessmentGroupSearchView.pageNumber = data.assessmentGroupsViewModel.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.assessmentGroupSearchView,
            rows: this.rows,
            tablename: 'Assessment Groups',
            componentName: this.currentComponent,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            /* header level initialazation */
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Assessment Groups'
                },
                addingForm: {
                    required: true,
                    btnName: 'New Assessment Group'
                }
            }
        };
    };
    /* get call for searched data based on table actions */
    AssessmentGroupsComponent.prototype.getAllAssessmentGroups = function (searchview) {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.assessmentGroupSearchView = modelTableComponent;
        }
        this.assessmentGroupsService.fetchAssessmentGroups(searchview.sortBy, searchview.names, searchview.sortOrder, this.failedRecords_Ids, searchview.pageNumber, searchview.pageSize).subscribe(function (data) { return _this.assessmentGroupsRes(data); }, function (error) {
            // this.disbleSubmitBtn = false;
            // this.errorResponse(error);
        });
    };
    /* row based actions edit& delete */
    AssessmentGroupsComponent.prototype.rowActions = function (actionType) {
        var _this = this;
        /* edit row based action */
        if (actionType.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT) {
            this.isEdit = true;
            this.closeAddPanel = false;
            this.updateBtn = true;
            this.details = actionType.clickedRow;
            this.assmentGrpForm.controls['id'].setValue(this.details.id);
            this.assmentGrpForm.controls['assessmentGroupName'].setValue(this.details.name);
        }
        /* delete row based action */
        if (actionType.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].WARNING_ON_SINGLE_DELETE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES) {
                    _this.arryOfIds.push(actionType.clickedRow.id);
                    _this.assessmentGroupsService.dropAssessmentGroups(_this.arryOfIds).subscribe(function (res) { return _this.response(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    /* close form for cancel click */
    AssessmentGroupsComponent.prototype.closeAddForm = function () {
        this.closeAddPanel = true;
        this.updateBtn = false;
    };
    /* open panel for add */
    AssessmentGroupsComponent.prototype.addForm = function () {
        this.assessmentgroupForm.resetForm();
        this.isEdit = false;
        this.updateBtn = false;
        this.closeAddPanel = false;
    };
    /* close & reset the form */
    AssessmentGroupsComponent.prototype.cancel = function () {
        this.assessmentgroupForm.resetForm();
        this.doValidate = false;
        this.closeAddPanel = true;
        this.updateBtn = false;
    };
    /* multi-delete action */
    AssessmentGroupsComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
            disableClose: true,
            data: {
                text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].WARNING_ON_SINGLE_DELETE),
                action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES
            },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES) {
                _this.assessmentGroupsService.dropAssessmentGroups(_this.assessmentGroupIds).subscribe(function (result) {
                    _this.response(result);
                }, function (error) {
                    if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                        _this.failedRecords_Ids = (error.error.failedRecords);
                    }
                    _this.errorResponse(error);
                    _this.getAllAssessmentGroups(_this.assessmentGroupSearchView);
                });
            }
        });
    };
    /* based on selection delete icon will appear & pushing,clearing id's in array*/
    AssessmentGroupsComponent.prototype.selectedRows = function (data) {
        if (data.length > 0) {
            this.assessmentGroupIds = [];
            for (var index = 0; index < data.length; index++) {
                this.assessmentGroupIds.push(data[index].id);
            }
            this.selectAll = true;
        }
        else {
            this.assessmentGroupIds = [];
            this.selectAll = false;
        }
    };
    /* response from server from all requsets*/
    AssessmentGroupsComponent.prototype.response = function (data) {
        this.disableSubmitBtn = false;
        this.assessmentGroupIds = [];
        this.selectAll = false;
        this.closeAddPanel = false;
        if (data.statusCode === this.httpStatus.OK) {
            this.assessmentgroupForm.resetForm();
            this.closeAddPanel = true;
            if (this.isEdit === false) {
                this.updateBtn = false;
            }
            else {
                this.updateBtn = true;
            }
            this.getAllAssessmentGroups(this.assessmentGroupSearchView);
        }
        else {
            this.closeAddPanel = false;
            this.updateBtn = true;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    /* form submit */
    AssessmentGroupsComponent.prototype.submitAssesmentGroupForm = function (assmentGrpForm_) {
        var _this = this;
        if (assmentGrpForm_.invalid) {
            this.doValidate = true;
            return;
        }
        else {
            this.disableSubmitBtn = true;
        }
        /* if form in invalid status */
        if (this.assmentGrpForm.invalid) {
            this.doValidate = true;
            return;
        }
        else {
            if (this.isEdit === true) {
                /* edit functionality */
                // this.disableSubmitBtn = false;
                this.assessmentGroupsService.editAssessmentGroups(this.assmentGrpForm.controls.assessmentGroupName.value, this.assmentGrpForm.controls.id.value).subscribe(function (data) { return _this.response(data); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                /* add functionality */
                // this.disableSubmitBtn = false;
                this.doValidate = false;
                this.assessmentGroupsService.createAssessmentGroups(assmentGrpForm_.value.assessmentGroupName).subscribe(function (data) { return _this.response(data); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assessmentgroupForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssessmentGroupsComponent.prototype, "assessmentgroupForm", void 0);
    AssessmentGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment-groups',
            template: __webpack_require__(/*! ./assessment-groups.component.html */ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./assessment-groups.component.scss */ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_assessment_service_api_assessment_groups_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentGroupsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AssessmentGroupsComponent);
    return AssessmentGroupsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' (getTableData)='tableData($event)'\n    (openAddForm)=\"onAddFormClick()\" [closeRowForm]='closeAddPanel' [templateRef]=\"addParameterTemplate\"\n    (selectedRows)='selectedRows($event)' (deleteAllRows)=\"deleteWarning()\"></app-table>\n<ng-template #addParameterTemplate>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm)\" #assessment=\"ngForm\">\n        <div fxFlexFill fxLayout=\"row\" class=\"pt-24\">\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #assessmentparameters translate>assessmentparameter</mat-label>\n                <input matInput formControlName=\"name\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'userForm','name')\"\n                    (blur)=\"trimTextBoxSpaces('userForm','name')\" required>\n                <mat-error>\n                    <app-validation [labelName]='assessmentparameters.innerText'\n                        [validationControl]=\"userForm.controls.name\" [doValidate]=\"userFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">\n                {{'cancel' | translate}}</button>\n            <button class=\"text-uppercase\" mat-raised-button type=\"submit\" color=\"accent\" *ngIf=\"!updateBtn\">{{'submit' | translate}}</button>\n            <button class=\"text-uppercase\" mat-raised-button type=\"submit\" color=\"accent\" *ngIf=\"updateBtn\">{{'update' | translate}}</button>\n        </div>\n        </form>\n        <div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQtcGFyYW1ldGVycy9hc3Nlc3NtZW50LXBhcmFtZXRlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AssessmentParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentParametersComponent", function() { return AssessmentParametersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-parameters.service */ "./src/app/service/assessment-service/api/assessment-parameters.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var AssessmentParametersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssessmentParametersComponent, _super);
    function AssessmentParametersComponent(commonComponent, formBuilder, dialogRef, commonService, assessmentParameterService, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonComponent = commonComponent;
        _this.formBuilder = formBuilder;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.assessmentParameterService = assessmentParameterService;
        _this.snackBar = snackBar;
        _this.dataLoaded = Promise.resolve(false);
        // error variable for checking user form
        _this.userFormSubmitted = false;
        _this.isEdit = false;
        _this.updateBtn = false;
        _this.closeAddPanel = false;
        _this.filterRowData = [];
        _this.assessmentCategoriesList = [];
        _this.assessmentGroupsList = [];
        _this.currentComponent = 'AssessmentParametersComponent';
        _this.userForm = _this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(90)]),
        });
        return _this;
    }
    AssessmentParametersComponent.prototype.ngOnInit = function () {
        this._assessmentParameterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
        };
        // Table Columns
        this.cols = [
            { field: 'name', header: 'assessmentparameter', sort: true },
            { field: 'actions', header: 'Actions' },
        ];
        // tabSettings
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this._assessmentParameterViewModel,
            tablename: 'Assessment Parameters',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this._assessmentParameterViewModel = modelTableComponent;
        }
        // calling of Assessment Parameter Details
        this.assessmentParametersList();
    };
    // getting all Assessment Parameter Details
    AssessmentParametersComponent.prototype.assessmentParametersList = function () {
        var _this = this;
        this.assessmentParameterService.getAllAssessmentParametersList(this._assessmentParameterViewModel.names, this._assessmentParameterViewModel.sortOrder, this._assessmentParameterViewModel.sortBy, this.preSelectIds, this._assessmentParameterViewModel.pageNumber, this._assessmentParameterViewModel.pageSize).subscribe(function (res) { _this.parameterDetailsResponse(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Response of Assessment Parameter details
    AssessmentParametersComponent.prototype.parameterDetailsResponse = function (res) {
        if (!res.pagedAssesmentParameterView) {
            this.rows = [];
            this.totalItems = 0;
        }
        else {
            this.rows = res.pagedAssesmentParameterView.list;
            this.totalItems = res.pagedAssesmentParameterView.totalItems;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE
                    }
                ];
            });
            this.preSelectIds = [];
        }
        if (res.pagedAssesmentParameterView) {
            this._assessmentParameterViewModel.pageNumber = res.pagedAssesmentParameterView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this._assessmentParameterViewModel,
            rows: this.rows,
            tablename: 'Assessment Parameter',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            isPaginationRequired: true,
            visibleSelectAll: true,
            isSelectRowRequired: true,
            totalRowsCount: this.totalItems,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Assessment Parameters'
                },
                addingForm: {
                    required: true,
                    btnName: 'New Assessment Parameter'
                },
            },
            filtersList: res.filters,
        };
    };
    // calling cancel method for closing panel and reset values
    AssessmentParametersComponent.prototype.cancel = function () {
        this.myForm.resetForm();
        this.updateBtn = false;
        this.isEdit = false;
        this.closeAddPanel = true;
    };
    // End
    // calling edit and delete actions in table
    AssessmentParametersComponent.prototype.rowActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_CONFORMATION), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES },
            });
            // calling delete confirmation 
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    var actionClickedId = [event.clickedRow.id];
                    _this.deleteAssessmentParameter(actionClickedId, false);
                }
            });
        }
        // calling edit confirmation
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT) {
            this.closeAddPanel = false;
            this.updateBtn = true;
            this.assessmentParameterService.getAssesmentParameter(event.clickedRow.id).subscribe(function (res) { return _this.editResponse(res); }, function (error) {
                // this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
        }
    };
    // Response of get Assessment Parameter Details By Id
    AssessmentParametersComponent.prototype.editResponse = function (data) {
        this.isEdit = true;
        this.updateBtn = true;
        this.studentData = data.assessmentParameterView;
        this.userForm.controls['id'].setValue(this.studentData.id);
        this.userForm.controls['name'].setValue(this.studentData.name);
    };
    // delete Response
    AssessmentParametersComponent.prototype.deleteResponse = function (response) {
        this.assessmentParametersList();
        this.openSnackBar(response.messages.ResultMessage);
    };
    AssessmentParametersComponent.prototype.onAddFormClick = function () {
        this.closeAddPanel = false;
    };
    // calling for create and update assessment parameter 
    AssessmentParametersComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        if (ngForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.userFormSubmitted = false;
            if (this.isEdit === false) {
                this._assessmentParameterDataView = ngForm.value;
                this.assessmentParameterService.addAssesmentParameter(this._assessmentParameterDataView).subscribe(function (res) { return _this.responseData(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this._assessmentParameterView = ngForm.value;
                this.assessmentParameterService.updateAssesmentParameter(this._assessmentParameterView).subscribe(function (res) { return _this.responseData(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
        else {
            this.userFormSubmitted = true;
            return false;
        }
    };
    // Create and Update Response of Assessment Parameter
    AssessmentParametersComponent.prototype.responseData = function (data) {
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
            this.assessmentParametersList();
            this.cancel();
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    AssessmentParametersComponent.prototype.selectedRows = function (_event) {
        this.selectedIdsList = _event.length ? _event.map(function (x) { return x.id; }) : [];
    };
    AssessmentParametersComponent.prototype.deleteWarning = function () {
        var _this = this;
        var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].WARNING_ON_SINGLE_DELETE), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                _this.deleteAssessmentParameter(_this.selectedIdsList, true);
            }
        });
    };
    AssessmentParametersComponent.prototype.deleteAssessmentParameter = function (selectedIds, isMultiDelete) {
        var _this = this;
        this.assessmentParameterService.deleteAssesmentParameter(selectedIds).subscribe(function (response) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
                _this.selectedIdsList = [];
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].RECORD_DELETED);
            }
            else {
                if (isMultiDelete) {
                    _this.preSelectIds = response.failedRecords;
                }
                _this.openSnackBar(response.messages.ResultMessage);
            }
            _this.assessmentParametersList();
        }, function (error) {
            if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                if (isMultiDelete) {
                    _this.preSelectIds = (error.error.failedRecords);
                }
            }
            _this.errorResponse(error);
            _this.assessmentParametersList();
        });
    };
    AssessmentParametersComponent.prototype.tableData = function (_event) {
        this._assessmentParameterViewModel = _event;
        this.assessmentParametersList();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assessment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssessmentParametersComponent.prototype, "myForm", void 0);
    AssessmentParametersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment-parameters',
            template: __webpack_require__(/*! ./assessment-parameters.component.html */ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.html"),
            providers: [app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentParameterService"]],
            styles: [__webpack_require__(/*! ./assessment-parameters.component.scss */ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentParameterService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AssessmentParametersComponent);
    return AssessmentParametersComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AssessmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentRoutingModule", function() { return AssessmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment-categories/assessment-categories.component */ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.ts");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessment.component */ "./src/app/modules/configuration/assessment/assessment.component.ts");
/* harmony import */ var _assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assessment-groups/assessment-groups.component */ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.ts");
/* harmony import */ var _assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assessment-parameters/assessment-parameters.component */ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.ts");
/* harmony import */ var _class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class-assessment-configuration/class-assessment-configuration.component */ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.ts");









var routes = [
    {
        path: '', component: _assessment_component__WEBPACK_IMPORTED_MODULE_5__["AssessmentComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'assessment-categories' },
            { path: 'assessment-categories', component: _assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentCategoriesComponent"], data: { title: 'Assessment Categories' } },
            { path: 'assessment-groups', component: _assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_6__["AssessmentGroupsComponent"], data: { title: 'Assessment Groups' } },
            { path: 'assessment-parameters', component: _assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_7__["AssessmentParametersComponent"], data: { title: 'Assessment Parameters' } },
            { path: 'class-assessment-parameters', component: _class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_8__["ClassAssessmentConfigurationComponent"], data: { title: 'Class Assessment Parameters' } },
        ]
    },
];
var AssessmentRoutingModule = /** @class */ (function () {
    function AssessmentRoutingModule() {
    }
    AssessmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
    ], AssessmentRoutingModule);
    return AssessmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent() {
    }
    AssessmentComponent.prototype.ngOnInit = function () {
    };
    AssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assessment',
            template: __webpack_require__(/*! ./assessment.component.html */ "./src/app/modules/configuration/assessment/assessment.component.html"),
            styles: [__webpack_require__(/*! ./assessment.component.scss */ "./src/app/modules/configuration/assessment/assessment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/assessment/assessment.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/assessment.module.ts ***!
  \***********************************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-categories/assessment-categories.component */ "./src/app/modules/configuration/assessment/assessment-categories/assessment-categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assessment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assessment-routing.module */ "./src/app/modules/configuration/assessment/assessment-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assessment.component */ "./src/app/modules/configuration/assessment/assessment.component.ts");
/* harmony import */ var _assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assessment-groups/assessment-groups.component */ "./src/app/modules/configuration/assessment/assessment-groups/assessment-groups.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assessment-parameters/assessment-parameters.component */ "./src/app/modules/configuration/assessment/assessment-parameters/assessment-parameters.component.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_groups_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-groups.service */ "./src/app/service/assessment-service/api/assessment-groups.service.ts");
/* harmony import */ var _class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./class-assessment-configuration/class-assessment-configuration.component */ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-parameters.service */ "./src/app/service/assessment-service/api/assessment-parameters.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");




















var AssessmentModule = /** @class */ (function () {
    function AssessmentModule() {
    }
    AssessmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_10__["AssessmentComponent"], _assessment_categories_assessment_categories_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentCategoriesComponent"], _assessment_groups_assessment_groups_component__WEBPACK_IMPORTED_MODULE_11__["AssessmentGroupsComponent"], _assessment_parameters_assessment_parameters_component__WEBPACK_IMPORTED_MODULE_15__["AssessmentParametersComponent"], _class_assessment_configuration_class_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ClassAssessmentConfigurationComponent"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_13__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedManagementModule"],
                _assessment_routing_module__WEBPACK_IMPORTED_MODULE_6__["AssessmentRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]
            ],
            providers: [
                app_service_assessment_service_api_assessment_groups_service__WEBPACK_IMPORTED_MODULE_16__["AssessmentGroupsService"], app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_18__["AssessmentParameterService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_19__["GradeSetupService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
                    multi: true
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AssessmentModule);
    return AssessmentModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" [templateRef]=\"addClassAssessmentParametersTemplate\"\n  (getTableData)='classAssesmentTableData($event)' (rowBasedAction)='rowActions($event)' [closeRowForm]='closeAddPanel'\n  (openAddForm)=\"openForm()\" >\n</app-table>\n\n<ng-template #addClassAssessmentParametersTemplate>\n  <form [formGroup]=\"classAssessmentParmsFormGroup\" \n    #classAssessmentParametersConfiguration=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row wrap\" class=\"pt-24\">\n      <mat-form-field *ngIf=\"isSchoolBoards\" appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n        fxFlexFill>\n        <mat-label #schoolBoard translate>School Board</mat-label>\n        <mat-select required formControlName=\"schoolBoardId\" (selectionChange)=\"onSelectSchoolBoard($event)\">\n          <mat-option *ngFor=\"let schoolBoard of schoolBoardsList\" [value]=\"schoolBoard.value\">\n            {{schoolBoard.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='schoolBoard.innerText'\n            [validationControl]=\"classAssessmentParmsFormGroup.controls.schoolBoardId\"\n            [doValidate]=\"classAssmentparmsFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <app-custom-dropdown *ngIf=\"classDropDownAsync | async\" class=\"pr-sm-20\" formControlName=\"classId\" appearance=\"outline\" fxFlexFill\n        fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\" [dropDownConf]=\"classDropDown\"\n        (selectedData)=\"onSelectClass($event)\" [errorCheck]=\"classAssessmentParmsFormGroup.controls.classId\"\n        ngDefaultControl>\n      </app-custom-dropdown>\n      <app-custom-dropdown *ngIf=\"sectionDropDown\" formControlName=\"sectionId\" appearance=\"outline\" fxFlexFill\n        fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\" [dropDownConf]=\"sectionDropDown\"\n        (selectedData)=\"onSelectSection($event)\" [errorCheck]=\"classAssessmentParmsFormGroup.controls.sectionId\"\n        ngDefaultControl>\n      </app-custom-dropdown>\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\" [ngClass]=\"sectionDropDown ? 'pr-sm-20':''\">\n        <mat-label #assessmentgroups translate>assessmentgroups</mat-label>\n        <mat-select formControlName=\"assessmentGroupId\" required (selectionChange)=\"onSelectAssessmentGroup($event)\">\n          <mat-option *ngFor=\"let assessmentGroup of assessmentGroupsList\" [value]=\"assessmentGroup.id\"\n            ngDefaultControl>\n            {{assessmentGroup.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='assessmentgroups.innerText'\n            [validationControl]=\"classAssessmentParmsFormGroup.controls.assessmentGroupId\"\n            [doValidate]=\"classAssmentparmsFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" [fxFlex.gt-sm]=\"!sectionDropDown ? '33' : '34'\" class=\"pr-sm-20\">\n        <mat-label #assessmentcategory translate>assessmentcategory</mat-label>\n        <mat-select formControlName=\"assessmentCategoryId\"\n          (selectionChange)=\"onSelectAssessmentCategory($event)\">\n          <mat-option *ngIf=\"assessmentCategoriesList?.length\"></mat-option>\n          <mat-option *ngFor=\"let assessmentCategory of assessmentCategoriesList\" [value]=\"assessmentCategory.id\"\n            ngDefaultControl>\n            {{assessmentCategory.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='assessmentcategory.innerText'\n            [validationControl]=\"classAssessmentParmsFormGroup.controls.assessmentCategoryId\"\n            [doValidate]=\"classAssmentparmsFormSubmitted\">\n          </app-validation>\n        </mat-error>\n        <div #assessmentsubcategory translate class=\"subCat\">{{assessmentSubCategory}}</div>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n        <mat-label #assessmentparam translate>Assessment Parameters</mat-label>\n        <mat-select #paramDropdownSelect formControlName=\"assessmentParameterId\"\n          (selectionChange)=\"onSelectAssessmentCategory($event)\" [multiple]=\"true\" required>\n          <mat-option *ngFor=\"let optionvalue of optionsvalue\" [value]=\"optionvalue.value\">\n            {{optionvalue.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='assessmentparam.innerText'\n            [validationControl]=\"classAssessmentParmsFormGroup.controls.assessmentParameterId\"\n            [doValidate]=\"classAssmentparmsFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field> \n\n    </div>\n    <!-- <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\"> -->\n     \n     \n           \n\n      <!-- <div *ngIf=\"dropDownLoaded | async\" fxLayout=\"column\" fxFlex=\"100\">\n        <app-custom-dropdown formControlName=\"assessmentParameterId\" (selectedData)=\"onSelect($event)\"\n          [dropDownConf]=\"dropDownData\" [errorCheck]=\"classAssessmentParmsFormGroup.controls.assessmentParameterId\">\n        </app-custom-dropdown>\n      </div> -->\n    <!-- </div> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-12 pb-8\">\n      <button mat-raised-button type=\"button\" class=\"text-uppercase mr-12\" (click)=\"onCancelClick()\">{{'cancel' | translate}}</button>\n      <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\" class=\"mr-12 text-uppercase\" (click)=\"save(classAssessmentParmsFormGroup)\"\n        mat-button>{{buttonName | translate}}</button>\n\n      <button mat-raised-button (click)=\"save(classAssessmentParmsFormGroup, true)\" type=\"submit\" class=\"text-uppercase\" color=\"primary\" [disabled]=\"isdisableBtn\">{{'Create and Continue' | translate}}</button>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subCat {\n  position: absolute;\n  top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9hc3Nlc3NtZW50L2NsYXNzLWFzc2Vzc21lbnQtY29uZmlndXJhdGlvbi9jbGFzcy1hc3Nlc3NtZW50LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uL2Fzc2Vzc21lbnQvY2xhc3MtYXNzZXNzbWVudC1jb25maWd1cmF0aW9uL2NsYXNzLWFzc2Vzc21lbnQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJDYXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ClassAssessmentConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassAssessmentConfigurationComponent", function() { return ClassAssessmentConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-parameters.service */ "./src/app/service/assessment-service/api/assessment-parameters.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var ClassAssessmentConfigurationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassAssessmentConfigurationComponent, _super);
    function ClassAssessmentConfigurationComponent(_commonService, gradeSetupService, router, commonService, dialog, commonComponent, assessmentParameterService, snackBar) {
        var _this = _super.call(this) || this;
        _this._commonService = _commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.router = router;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.commonComponent = commonComponent;
        _this.assessmentParameterService = assessmentParameterService;
        _this.snackBar = snackBar;
        _this.dataLoaded = Promise.resolve(false);
        _this.currentComponentName = 'ClassAssessmentConfigurationComponent';
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.filterRowData = [];
        _this.gridName = 'classAssismentConfiguration';
        _this.closeAddPanel = true;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.isSchoolBoards = false;
        _this.sectionsList = [];
        _this.filterSections = [];
        _this.classNames = [];
        _this.sectionNames = [];
        _this.classAssmentparmsFormSubmitted = false;
        _this.disbleSubmitBtn = false;
        _this.assessmentCategoriesList = [];
        _this.assessmentGroupsList = [];
        _this.selectedGroupId = 0;
        _this.nodata = false;
        _this.dropDownLoaded = Promise.resolve(false);
        _this.optionsvalue = [];
        _this.parmslist = [];
        _this.selectedclassesList = [];
        _this.disableSection = false;
        _this.selectedSectionsList = [];
        _this.assessmentParamsList = [];
        _this.classDropDownAsync = Promise.resolve(false);
        _this.classAssesmentFilterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
            classes: [],
            sections: [],
            schoolBoards: [],
            assesmentGroups: [],
            assesmentCategories: [],
            assesmentSubCategories: [],
            assesmentParameters: [],
        };
        _this.classDropDown = {
            data: [],
            multiSelect: true
        };
        return _this;
    }
    ClassAssessmentConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assessmentCategories();
        this.cols = [
            { field: 'schoolBoard', header: 'School Board', sort: false },
            { field: 'class', header: 'Class', sort: false },
            { field: 'sections', header: 'Section', sort: false },
            { field: 'assesmentGroup', header: 'Assessment Group', sort: false },
            { field: 'assesmentCategory', header: 'Assessment Category', sort: false },
            { field: 'assesmentSubCategory', header: 'Assessment Subcategory', sort: false },
            { field: 'assesmentParameter', header: 'Assessment Parameter', sort: false },
            { field: 'delete', header: 'Actions', sort: false }
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.classAssesmentFilterViewModel = modelTableComponent;
        }
        // initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.classAssesmentFilterViewModel,
            tablename: 'Class Assesment Parameters',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };
        if (this.getTokenParam('_as')) {
            this.getSchoolBoardsList();
            this.assessmentGroups();
            this.assessentParameters();
            this.loadClassAssesmentsdata();
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
        }
        this.classAssessmentParameterViewModel = {
            classId: [],
            sectionId: [],
            schoolBoardId: 0,
            assessmentParameterId: []
        };
        this.assessmentGroupCategoryViewModel = {
            assessmentCategoryId: 0,
            assessmentGroupId: 0
        };
        // initialization of form controls in form group
        this.classAssessmentParmsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null),
            assessmentCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null),
            assessmentGroupId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            assessmentParameterId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])
        });
    };
    ClassAssessmentConfigurationComponent.prototype.loadClassAssesmentsdata = function () {
        var _this = this;
        this.assessmentParameterService.fetchClassAssesmentList(this.classAssesmentFilterViewModel.sortBy, this.classAssesmentFilterViewModel.sortOrder, this.classAssesmentFilterViewModel.classes, this.classAssesmentFilterViewModel.sections, this.classAssesmentFilterViewModel.schoolBoards, this.classAssesmentFilterViewModel.assesmentGroups, this.classAssesmentFilterViewModel.assesmentCategories, this.classAssesmentFilterViewModel.assesmentSubCategories, this.classAssesmentFilterViewModel.assesmentParameters, this.classAssesmentFilterViewModel.pageNumber, this.classAssesmentFilterViewModel.pageSize).subscribe(function (data) { return _this.response(data); });
    };
    ClassAssessmentConfigurationComponent.prototype.response = function (data) {
        var _this = this;
        if (data.classAssesmentListViewModel) {
            this.classAssesmentFilterViewModel.pageNumber = data.classAssesmentListViewModel.pageNumber;
            this.rows = data.classAssesmentListViewModel.list;
            this.totalItems = data.classAssesmentListViewModel.totalItems;
            this.pageCnt = data.classAssesmentListViewModel.totalPages;
        }
        else {
            this.rows = [];
        }
        this.filterRowData = this.rows;
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        if (value.assesmentParameter === element.assesmentParameter &&
                            value.assesmentCategory === element.assesmentCategory) {
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
        // apply edit and delete
        this.filterRowData.forEach(function (element) {
            _this.rows.forEach(function (element1) {
                if (element.assesmentParameter === element1.assesmentParameter &&
                    element.assesmentCategory === element1.assesmentCategory &&
                    element.assesmentSubCategory === element1.assesmentSubCategory) {
                    element1.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE
                        }
                    ];
                }
            });
        });
        this.tabSettings = {
            columns: this.cols,
            model: this.classAssesmentFilterViewModel,
            rows: this.rows,
            tablename: 'Class Assessment Parameters',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            rowGroupingColumns: ['class', 'schoolBoard', 'sections', 'assesmentGroup', 'assesmentCategory'],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Class Assessment Parameters'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BUTTON_NAME
                }
            }
        };
    };
    ClassAssessmentConfigurationComponent.prototype.classAssesmentTableData = function (_event) {
        this.classAssesmentFilterViewModel = _event;
        this.loadClassAssesmentsdata();
    };
    // row-wise actions of the table(edit/delete)
    ClassAssessmentConfigurationComponent.prototype.rowActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_CONFORMATION), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES },
            });
            // calling delete confirmation 
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES) {
                    _this.assessmentParameterService.deleteClassAssesmentParameter(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    ClassAssessmentConfigurationComponent.prototype.openForm = function () {
        // this.classAssessmentParmsFormGroup.get('assessmentParameterId').setValidators(Validators.required);
        // this.classAssessmentParmsFormGroup.get('assessmentParameterId').updateValueAndValidity();
        this.closeAddPanel = false;
        this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SUBMIT;
        this.disbleSubmitBtn = false;
        this.setDefaultBoard();
    };
    // get the list school boards
    ClassAssessmentConfigurationComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
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
                _this.getClassesList();
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // on Selection of school board
    ClassAssessmentConfigurationComponent.prototype.onSelectSchoolBoard = function (schoolBoard) {
        var _this = this;
        this.sectionNames = null;
        this.classNames = null;
        this.classNames = [];
        this.sectionNames = [];
        this.sectionDropDown = null;
        this.selectedclassesList = [];
        this.selectedSectionsList = [];
        this.classAssessmentParmsFormGroup.controls['classId'].setValue('');
        this.classAssessmentParmsFormGroup.controls['sectionId'].setValue('');
        this.schoolBoardId = schoolBoard.value;
        this.classDropDown.data = [];
        this.gradeSetupService.schoolAcademicClasses(schoolBoard.value, null).subscribe(function (response) {
            _this.classDropDown.data = [];
            if (response.listViews !== undefined && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.classDropDown = { multiSelect: true, placeholder: 'Class', data: _this.classNames, noEntryFoundLabel: 'No Data Found', isRequired: true };
            }
            _this.classDropDownAsync = Promise.resolve(true);
        });
    };
    // End
    // Get Classes to filter table data
    ClassAssessmentConfigurationComponent.prototype.getClassesList = function () {
        var _this = this;
        this.classNames = [];
        this.selectedSectionsList = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews !== undefined && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.classDropDown = { multiSelect: true, placeholder: 'Class', data: _this.classNames, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NODATA_FOUND, isRequired: true };
            }
            _this.classDropDownAsync = Promise.resolve(true);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    ClassAssessmentConfigurationComponent.prototype.onSelectSection = function (data) {
        this.selectedSectionsList = [];
        if (data.length > 0) {
            this.selectedSectionsList = data.map(function (x) { return x.value; });
        }
    };
    // on selection of class
    ClassAssessmentConfigurationComponent.prototype.onSelectClass = function (data) {
        this.selectedclassesList = [];
        this.filterSections = [];
        this.sectionDropDown = null;
        this.sectionNames = null;
        this.selectedSectionsList = [];
        this.classAssessmentParmsFormGroup.controls['sectionId'].setValue('');
        if (data.length > 0) {
            this.selectedclassesList = data.map(function (x) { return x.value; });
            if (data.length === 1) {
                this.getSectionsList(data[0].value);
            }
        }
    };
    // End
    // Get Sections to filter table data
    ClassAssessmentConfigurationComponent.prototype.getSectionsList = function (classId) {
        var _this = this;
        this.sectionNames = [];
        if (this.schoolBoardId === undefined) {
            this.schoolBoardId = null;
        }
        this.gradeSetupService.schoolAcademicClassSections(this.schoolBoardId, classId).subscribe(function (response) {
            if (response.listViews !== undefined && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.sectionNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: _this.sectionNames, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NODATA_FOUND };
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // onCancelClick
    ClassAssessmentConfigurationComponent.prototype.onCancelClick = function () {
        this.classAssessmentParmsFormGroup.reset();
        this.myClassAssessmentParametersConfiguration.resetForm();
        this.closeAddPanel = true;
        this.classAssmentparmsFormSubmitted = false;
        this.disbleSubmitBtn = false;
        this.clearFields();
        this.loadClassAssesmentsdata();
    };
    // End
    // submit the data of Class Assessment Parameters
    ClassAssessmentConfigurationComponent.prototype.save = function (form, isContinue) {
        var _this = this;
        if (isContinue === void 0) { isContinue = false; }
        if (this.isSchoolBoards) {
            this.classAssessmentParmsFormGroup.get('schoolBoardId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]);
            this.classAssessmentParmsFormGroup.controls['schoolBoardId'].updateValueAndValidity();
        }
        else {
            this.classAssessmentParmsFormGroup.get('schoolBoardId').clearValidators();
            this.classAssessmentParmsFormGroup.controls['schoolBoardId'].updateValueAndValidity();
        }
        this.classAssmentparmsFormSubmitted = true;
        if (this.classAssessmentParmsFormGroup.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SUBMIT;
            this.classAssessmentParameterViewModel.classId = this.selectedclassesList;
            this.classAssessmentParameterViewModel.sectionId = this.selectedSectionsList;
            this.classAssessmentParameterViewModel.schoolBoardId = form.value.schoolBoardId;
            this.classAssessmentParameterViewModel.assessmentParameterId = form.value.assessmentParameterId;
            this.classAssessmentParameterViewModel.assesmentGroupId = form.value.assessmentGroupId;
            this.classAssessmentParameterViewModel.assesmentCategoryId = form.value.assessmentCategoryId;
            this.assessmentParameterService.createClassAssessmentParameters(this.classAssessmentParameterViewModel).subscribe(function (res) { return _this.addResponse(res, isContinue); }, function (error) {
                _this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
        }
    };
    // End
    // response after add data of ClassAssessmentParameters 
    ClassAssessmentConfigurationComponent.prototype.addResponse = function (response, isContinue) {
        this.assessmentSubCategory = '';
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                if (isContinue) {
                    this.closeAddPanel = false;
                }
                else {
                    this.closeAddPanel = true;
                    this.loadClassAssesmentsdata();
                }
                this.disbleSubmitBtn = false;
                var schoolBoardId = this.classAssessmentParmsFormGroup.value.schoolBoardId;
                this.classAssessmentParmsFormGroup.reset();
                this.myClassAssessmentParametersConfiguration.resetForm();
                this.classAssessmentParmsFormGroup.patchValue({ schoolBoardId: schoolBoardId });
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // get Assessment Groups
    ClassAssessmentConfigurationComponent.prototype.assessmentGroups = function () {
        var _this = this;
        this.assessmentParameterService.getAssessmentGroupsList()
            .subscribe(function (res) { return _this.assessmentGroupsList = res.commonViewModel; }, function (error) {
            _this.errorResponse(error);
        });
    };
    // get Assessment Categories
    ClassAssessmentConfigurationComponent.prototype.assessmentCategories = function () {
        var _this = this;
        this.assessmentParameterService.getAssessmentCategoriesList()
            .subscribe(function (res) {
            _this.dataLoaded = Promise.resolve(true);
            _this.assessmentCategoriesList = res.commonViewModel;
        });
    };
    ClassAssessmentConfigurationComponent.prototype.assessentParameters = function () {
        var _this = this;
        this.assessmentParameterService.listAssesmentParameter().subscribe(function (res) {
            _this.optionsvalue = [];
            res.commonViewModel.forEach(function (element) {
                _this.optionsvalue.push({
                    label: element.name,
                    value: element.id
                });
                _this.assessmentParamsList = _this.optionsvalue;
            });
            //   this.dropDownLoaded = Promise.resolve(true);
            //   this.dropDownData = {
            //     multiSelect: true, placeholder: AppSettings.ASSESSMENT_PARAMETERS,
            //     data: this.optionsvalue, noEntryFoundLabel: AppSettings.NODATA_FOUND, maxCount: 1, isRequired: true
            //   };
            // }, error => {
            //   this.dropDownData = {
            //     multiSelect: true, placeholder: AppSettings.ASSESSMENT_PARAMETERS,
            //     data: this.optionsvalue, noEntryFoundLabel: AppSettings.NODATA_FOUND, maxCount: 1, isRequired: true
            //   };
            //   this.dropDownLoaded = Promise.resolve(true);
        });
    };
    ClassAssessmentConfigurationComponent.prototype.onSelectAssessmentCategory = function (event) {
        this.assessmentGroupCategoryViewModel.assessmentCategoryId = event.value;
        this.assessmentGroupCategoryViewModel.assessmentGroupId = this.selectedGroupId;
        this.assessmentSubCategory = '';
        if (event.value && event.value.length === this.optionsvalue.length) {
            this.paramDropdownSelect.close();
        }
        // this.assessmentParameterService.getAssessmentSubCategories(this.assessmentGroupCategoryViewModel.assessmentCategoryId).subscribe(
        //   res => {
        //     let subCategories = '';
        //     res.forEach(element => {
        //       subCategories = subCategories + element + ',';
        //     });
        //     this.assessmentSubCategory = subCategories.substring(0, subCategories.length - 1);
        //   }, error => {
        //     this.errorResponse(error);
        //   }
        // );
    };
    ClassAssessmentConfigurationComponent.prototype.onSelectAssessmentGroup = function (event) {
        this.selectedGroupId = event.value;
    };
    ClassAssessmentConfigurationComponent.prototype.clearFields = function () {
        this.assessmentSubCategory = '';
        this.sectionDropDown = null;
        this.selectedclassesList = [];
        this.selectedSectionsList = [];
        this.myClassAssessmentParametersConfiguration.resetForm();
    };
    ClassAssessmentConfigurationComponent.prototype.onSelect = function (event) {
        this.parmslist = [];
        if (event.length > 0) {
            this.parmslist = event.map(function (x) { return x.value; });
        }
    };
    // response after delete operation
    ClassAssessmentConfigurationComponent.prototype.deleteResponse = function (deleteResponse) {
        this.loadClassAssesmentsdata();
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    ClassAssessmentConfigurationComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('classAssessmentParmsFormGroup', 'schoolBoardId', this.schoolBoardsList[0].value);
        this.onSelectSchoolBoard(this.schoolBoardsList[0]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paramDropdownSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassAssessmentConfigurationComponent.prototype, "paramDropdownSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addClassAssessmentParametersTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassAssessmentConfigurationComponent.prototype, "addClassAssessmentParametersTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('classAssessmentParametersConfiguration'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClassAssessmentConfigurationComponent.prototype, "myClassAssessmentParametersConfiguration", void 0);
    ClassAssessmentConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-assessment-configuration',
            template: __webpack_require__(/*! ./class-assessment-configuration.component.html */ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.html"),
            styles: [__webpack_require__(/*! ./class-assessment-configuration.component.scss */ "./src/app/modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_8__["GradeSetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"],
            app_service_assessment_service_api_assessment_parameters_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentParameterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
    ], ClassAssessmentConfigurationComponent);
    return ClassAssessmentConfigurationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/assessment-service/api/assessment-groups.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/service/assessment-service/api/assessment-groups.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AssessmentGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentGroupsService", function() { return AssessmentGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
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







var AssessmentGroupsService = /** @class */ (function () {
    function AssessmentGroupsService(commonComponent, httpClient, basePath, configuration) {
        this.commonComponent = commonComponent;
        this.httpClient = httpClient;
        // protected basePath = 'http://localhost:8013';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_6__["Configuration"]();
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
    AssessmentGroupsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    AssessmentGroupsService.prototype.createAssessmentGroups = function (name, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling createAssessmentGroups.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._AssessmentGroups_AddAssessmentGroups, null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AssessmentGroupsService.prototype.dropAssessmentGroups = function (ids, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling dropAssessmentGroups.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(ids, 'Ids', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._AssessmentGroups_DeleteAssessmentGroups, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AssessmentGroupsService.prototype.editAssessmentGroups = function (name, id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling editAssessmentGroups.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling editAssessmentGroups.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._AssessmentGroups_UpdateAssessmentGroups, null, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AssessmentGroupsService.prototype.fetchAssessmentGroups = function (sortBy, name, sortOrder, failedRecords, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
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
        return this.httpClient.get(this.basePath + "/AssessmentGroups/assessment-groups", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AssessmentGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_6__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_6__["Configuration"]])
    ], AssessmentGroupsService);
    return AssessmentGroupsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-assessment-assessment-module~app-shared-wizard-wizard-module.js.map