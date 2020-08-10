(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-syllabus-syllabus-module~app-modules-staff-staff-module"],{

/***/ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-24\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Syllabus Progress</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <form [formGroup]=\"syllabusSearchForm\" (ngSubmit)=\"onSearch()\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"end end\" class=\"p-20\">\n        <button type=\"button\" mat-icon-button translate (click)=\"getHelpText('Syllabus Progress')\">  <mat-icon >info</mat-icon></button>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"p-20\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n           <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-20\">\n            <mat-label translate #board>Board</mat-label>\n            <mat-select formControlName=\"boardId\" (selectionChange)=\"boardChanged($event)\" required>\n              <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">\n                {{ board.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='board.innerText' [validationControl]=\"syllabusSearchForm.controls.boardId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-20\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select  (selectionChange)=\"classChanged($event)\" formControlName=\"classId\" required>\n              <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n                {{ class.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='class.innerText' [validationControl]=\"syllabusSearchForm.controls.classId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n            <mat-label translate #course>Course</mat-label>\n            <mat-select required formControlName=\"courseId\" >\n              <mat-option *ngFor=\"let course of coursesList\" [value]=\"course.value\">\n                {{ course.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='course.innerText' [validationControl]=\"syllabusSearchForm.controls.courseId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n            <mat-label translate #section>Section</mat-label>\n            <mat-select required formControlName=\"sectionId\">\n              <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n                {{ section.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='section.innerText' [validationControl]=\"syllabusSearchForm.controls.sectionId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-12\">\n          <button mat-raised-button type=\"reset\" color=\"primary\" class=\"text-uppercase mx-12\" (click)=\"onClear()\">\n            {{'Reset' | translate}}\n          </button>\n          <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n            {{'Search' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<app-table *ngIf=\"tabSettings?.rows?.length && syllabusSearchForm.valid\" [settings]=\"tabSettings\" (getTableData)='studentsData($event)'\n  [massActionTemplateRef]=\"massActions\" (selectedRows)='selectedRows($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n  [disabled]=\"disbleSubmitBtn\" [templateRef]=\"addCourseTemplate\" [closeAddForm]=\"closeAddPanel\"\n   [closeRowForm]='closeAddPanel'>\n</app-table>\n\n\n<ng-template #massActions>\n  <form #scheduleGoForm=\"ngForm\"  (ngSubmit)=\"onSubmit()\">\n    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n      <mat-form-field class=\"px-20 w-200\">\n        <mat-label #actions translate>Actions</mat-label>\n        <mat-select  (selectionChange)=\"onSubmit()\" [formControl]=\"scheduleController\" required>\n          <mat-option  [value]=\"item.value\" *ngFor=\"let item of statusList\">\n           {{item?.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='actions.innerText' [validationControl]=\"scheduleController\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N5bGxhYnVzL3N5bGxhYnVzLXByb2dyZXNzL3N5bGxhYnVzLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SyllabusProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusProgressComponent", function() { return SyllabusProgressComponent; });
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
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");















var SyllabusProgressComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusProgressComponent, _super);
    function SyllabusProgressComponent(_fb, syllabusService, snackBar, route, syllabusSchedulesService, 
    // tslint:disable-next-line: max-line-length
    classTimetableService, commonService, router, dialog, dialogRef, storeService, changeDetector) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.syllabusService = syllabusService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.syllabusSchedulesService = syllabusSchedulesService;
        _this.classTimetableService = classTimetableService;
        _this.commonService = commonService;
        _this.router = router;
        _this.dialog = dialog;
        _this.dialogRef = dialogRef;
        _this.storeService = storeService;
        _this.changeDetector = changeDetector;
        _this.syllabusDataList = [];
        _this.coursesList = [];
        _this.validate = true;
        _this.currentComponent = 'SyllabusProgressComponent';
        // table
        _this.tabSettings = {};
        _this.closeAddPanel = true;
        _this.scheduleController = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        _this.cols = [];
        _this.rows = [];
        _this.statusList = [];
        _this.rowsSelected = [];
        return _this;
    }
    SyllabusProgressComponent.prototype.ngOnInit = function () {
        this.statusList = [
            {
                label: 'Start Progress',
                value: 'S_P'
            },
            {
                label: 'Complete',
                value: 'C_P'
            },
            {
                label: 'Clear Status',
                value: 'C_S'
            }
        ];
        this.initializeForm();
        var modelData = this.getModelComponent(this.currentComponent);
        if (modelData) {
            this.syllabusSearchForm.patchValue(modelData);
            this.getAvailableClasses(this.syllabusSearchForm.value.boardId);
            this.getAvailableSections(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId);
            this.getCourses();
            this.onSearch();
        }
        this.getAvailableSchoolBoards();
        this.intializetableSettings();
    };
    SyllabusProgressComponent.prototype.getAvailableSchoolBoards = function () {
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
    SyllabusProgressComponent.prototype.intializetableSettings = function () {
        this.cols = [
            { field: 'chapter', header: 'Chapter', sort: false, innerHTML: true },
            { field: 'topic', header: 'Topic', sort: false, innerHTML: true },
            { field: 'subTopic', header: 'Sub Topic', sort: false, innerHTML: true },
            { field: 'formatedStartDate', header: 'startDate', sort: false },
            { field: 'formatedActualCompletionDate', header: 'Actual Completion Date', sort: false },
            { field: 'status', header: 'Status', sort: false },
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
    SyllabusProgressComponent.prototype.setFilterViewModel = function () {
        this.filterViewModel = {
            boardId: 0,
            classId: 0,
            sectionId: 0,
            courseId: 0
        };
    };
    SyllabusProgressComponent.prototype.initializeForm = function () {
        var _this = this;
        this.syllabusSearchForm = this._fb.group({
            boardId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            classId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            courseId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sectionId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.syllabusSearchForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (form) {
            if (_this.tabSettings) {
                _this.tabSettings['rows'] = [];
                _this.changeDetector.detectChanges();
            }
        });
        this.progressForm = this._fb.group({
            startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            actualcompletionDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    SyllabusProgressComponent.prototype.boardChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (event.value) {
            if (!onManualChange) {
                this.syllabusSearchForm.patchValue({
                    classId: null,
                    courseId: null,
                    sectionId: null
                });
                this.availableClasses = [];
                this.coursesList = [];
                this.availableSections = [];
            }
            this.getAvailableClasses(event.value);
        }
    };
    SyllabusProgressComponent.prototype.classChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.syllabusSearchForm.patchValue({
                courseId: null,
                sectionId: null
            });
            this.coursesList = [];
            this.availableSections = [];
        }
        this.getCourses();
        this.getAvailableSections(this.syllabusSearchForm.controls.boardId, this.syllabusSearchForm.controls.classId);
    };
    SyllabusProgressComponent.prototype.getCourses = function () {
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
    SyllabusProgressComponent.prototype.onClear = function () {
        this.syllabusSearchForm.reset();
        this.setModelDataTableComponent(this.currentComponent, null);
    };
    SyllabusProgressComponent.prototype.setScheduleDetails = function (res) {
    };
    SyllabusProgressComponent.prototype.selectedRows = function (data) {
        var _this = this;
        this.rowsSelected = [];
        data.forEach(function (element) {
            _this.rowsSelected.push(element);
        });
        this.scheduleController.reset();
        var temparray = [
            {
                label: 'Start Progress',
                value: 'S_P'
            },
            {
                label: 'Complete',
                value: 'C_P'
            },
            {
                label: 'Clear Status',
                value: 'C_S'
            }
        ];
        if (this.rowsSelected.some(function (e) { return e.startDate; })) {
            temparray = temparray.filter(function (e) { return e.value !== 'S_P'; });
        }
        if (this.rowsSelected.some(function (e) { return !e.startDate; }) || this.rowsSelected.some(function (e) { return e.startDate && e.actualCompletionDate; })) {
            temparray = temparray.filter(function (e) { return e.value !== 'C_P'; });
        }
        if (!this.rowsSelected.every(function (e) { return e.startDate || e.actualCompletionDate; })) {
            temparray = temparray.filter(function (e) { return e.value !== 'C_S'; });
        }
        this.statusList = temparray;
    };
    SyllabusProgressComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.scheduleController.valid) {
            this.scheduleGoForm.submitted = false;
            var status_1 = this.statusList.find(function (e) { return e.value === _this.scheduleController.value; });
            this.rowWiseActions({ operation: status_1.label }, true);
        }
    };
    SyllabusProgressComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.syllabusSearchForm.valid) {
            this.filterViewModel = this.syllabusSearchForm.value;
            this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
            this.syllabusSchedulesService.syllabusProgressGet(this.filterViewModel.classId, this.filterViewModel.sectionId, this.filterViewModel.courseId, this.filterViewModel.boardId)
                .subscribe(function (res) { return _this.onSyllabusSearch(res); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusProgressComponent.prototype.onSyllabusSearch = function (res) {
        var _this = this;
        this.syllabusDetails = res.academicSesssionSyllabus;
        this.syllabusDataList = [];
        if (res.academicSesssionSyllabus) {
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
            this.syllabusDataList = res.academicSesssionSyllabus.academicSessionSyllabusSchedules;
            this.syllabusDataList.forEach(function (e) {
                e.formatedStartDate = _this.getFormattedDateBySchoolDateFormat(e.startDate);
                e.formatedActualCompletionDate = _this.getFormattedDateBySchoolDateFormat(e.actualCompletionDate);
                var tempOperations = [];
                if (e.startDate || e.actualCompletionDate) {
                    if (e.actualCompletionDate) {
                        e.status = 'Completed';
                    }
                    else {
                        e.status = 'In Progress';
                    }
                    if (!e.actualCompletionDate) {
                        tempOperations = [
                            {
                                name: 'Complete',
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT,
                                operationName: 'C_P'
                            }
                        ];
                    }
                    tempOperations.push({
                        name: 'Clear Status',
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DELETE,
                        operationName: 'C_S'
                    }, {
                        name: 'View Updates',
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW,
                        operationName: 'V_U'
                    });
                }
                else {
                    tempOperations = [
                        {
                            name: 'Start Progress',
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].EDIT,
                            operationName: 'set'
                        }
                    ];
                }
                e.operations = tempOperations;
            });
            this.tabSettings = {
                columns: this.cols,
                // model: this.studentsSectionSView,
                rows: this.syllabusDataList,
                tablename: 'Progress Details',
                componentName: this.currentComponent,
                visibleSelectAll: true,
                isSelectRowRequired: true,
                isMultiDeleteRequired: false,
                isPaginationRequired: false
            };
        }
        else {
            this.openSnackBar('There are no schedules assigned for selected class, section, course', true);
            if (this.tabSettings) {
                this.tabSettings.rows = [];
            }
        }
    };
    SyllabusProgressComponent.prototype.rowWiseActions = function (event, fromHeaderAction) {
        var _this = this;
        if (fromHeaderAction === void 0) { fromHeaderAction = false; }
        event.operation = event.operation.toLowerCase();
        if (!fromHeaderAction) {
            this.rowsSelected = [];
            this.rowsSelected.push(event.clickedRow);
        }
        if (event.operation === 'view updates') {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_14__["RouteConfig"]._Syllabus_Progress_Details + event.clickedRow.academicSessionSyllabusProgressId]);
        }
        else if (event.operation === 'start progress') {
            var dialogRef = this.dialogMethod('Please confirm to Mark this Syllabus Entry as "In Progress"');
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].CONFIRM) {
                    _this.onPostProgress(new Date(), false);
                }
                else {
                    _this.closeDialog();
                }
            });
        }
        else if (event.operation.toLowerCase() === 'complete') {
            var dialogRef = this.dialogMethod('Please confirm to Mark this Syllabus Entry as "Complete"');
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].CONFIRM) {
                    _this.onPostProgress(false, new Date());
                }
                else {
                    _this.closeDialog();
                }
            });
        }
        else if (event.operation === 'clear status') {
            var dialogRef = this.dialogMethod('Please confirm to Clear the all status  update for this syllabus Entry');
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].CONFIRM) {
                    _this.onPostProgress(false, false);
                }
                else {
                    _this.closeDialog();
                }
            });
        }
    };
    SyllabusProgressComponent.prototype.onPostProgress = function (startDate, actualDate) {
        var _this = this;
        var processData = {
            classId: this.syllabusDetails.classId,
            sectionId: this.syllabusSearchForm.value.sectionId,
            schoolBoardId: this.syllabusSearchForm.value.boardId,
            academicSessionSyllabusProgresses: []
        };
        this.rowsSelected.map(function (e) {
            processData.academicSessionSyllabusProgresses.push({
                academicSessionSyllabusScheduleId: e.academicSessionSyllabusScheduleId,
                startDate: startDate ? startDate : (actualDate ? e.startDate : null),
                actualCompletionDate: actualDate ? actualDate : (startDate ? e.actualCompletionDate : null),
                academicSessionSyllabusProgressId: e.academicSessionSyllabusProgressId
            });
        });
        this.syllabusSchedulesService.addAcademicSessionSyllabusScheduleProcess(processData)
            .subscribe(function (res) { return _this.onProgressUpdate(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusProgressComponent.prototype.onProgressUpdate = function (res) {
        this.scheduleController.reset();
        this.closeDialog();
        this.onSearch();
    };
    SyllabusProgressComponent.prototype.closeDialog = function () {
        this.scheduleController.reset();
        this.dialog.closeAll();
    };
    SyllabusProgressComponent.prototype.dialogMethod = function (dialogData) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].CANCEL, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].CONFIRM },
        });
    };
    SyllabusProgressComponent.prototype.getInnerHtmlForAttachment = function (filename) {
        return filename ? ('<span class="pl-8"><a target="_blank" href="' + this.storeService.getFilePath(filename) + '">Attachment</a></span>') : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleDateTemp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SyllabusProgressComponent.prototype, "scheduleDateTemp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleGoForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusProgressComponent.prototype, "scheduleGoForm", void 0);
    SyllabusProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus-progress',
            template: __webpack_require__(/*! ./syllabus-progress.component.html */ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.html"),
            providers: [app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_13__["StoreService"]],
            styles: [__webpack_require__(/*! ./syllabus-progress.component.scss */ "./src/app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_syllabus_syllabus_schedules_service__WEBPACK_IMPORTED_MODULE_7__["SyllabusSchedulesService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_13__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SyllabusProgressComponent);
    return SyllabusProgressComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-syllabus-syllabus-module~app-modules-staff-staff-module.js.map