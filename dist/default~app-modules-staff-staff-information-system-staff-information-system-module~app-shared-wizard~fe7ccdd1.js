(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-staff-staff-information-system-staff-information-system-module~app-shared-wizard~fe7ccdd1"],{

/***/ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-40\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-12 font-size-18 text-uppercase\">\n    {{tableName | translate}}\n  </div>\n  <div class=\"w-100-p simple-table-container mat-elevation-z8 radius-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-16 border-bottom\">\n      <form [formGroup]=\"schoolBoardForm\" *ngIf=\"schoolHasBoard\" fxFlex=\"100\" fxLayout=\"row\"\n        fxLayoutAlign=\"center center\">\n        <mat-form-field fxFlex.gt-sm=\"30\" fxFlex=\"100\" fxLayout=\"column\" appearance=\"outline\" class=\"formfield-pb-0\">\n          <mat-label translate #board>School Board</mat-label>\n          <mat-select formControlName=\"schoolBoard\" (selectionChange)=\"onSelectBoard($event)\">\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">{{ board.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='board.innerText' [validationControl]=\"schoolBoardForm?.controls?.schoolBoard\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </form>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button *ngIf=\"!(rows && rows.length == 0)\" (click)=\"onEdit()\" mat-raised-button class=\"text-uppercase\"\n          [color]=\"isOnEdit ? 'primary' : 'accent'\" translate>{{isOnEdit ? 'back' : 'edit' | translate}}</button>\n        <button (click)=\"getHelpText('Class Teacher Management')\" mat-button>\n          <mat-icon  class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n    <mat-table *ngIf=\"!(rows && rows.length == 0)\" class=\"responsive-table\" mat-table [dataSource]=\"rows\" matSort\n      matSortDisable [matSortActive]=\"activeColumn\" matSort matSortDisable [matSortDirection]=\"sortDirection\"\n      (matSortChange)=\"customSort($event)\">\n      <ng-container *ngFor=\"let column of columns; let i = index\" matColumnDef=\"{{column.field}}\">\n        <mat-header-cell *matHeaderCellDef>\n          <div class=\"headerTitle w-100-p\" *ngIf=\"column.field != 'select' \" mat-sort-header disableClear\n            [disabled]=\"!column.sort || (rows && rows.length == 0)\">\n            <strong class=\"mb-0 title mat-subheading-1\" translate>{{column.header}}</strong>\n          </div>\n\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [row]=\"row\" [column]=\"column\">\n          <span *ngIf=\"column.dropdownInputRequired;else show_data;\" class=\"text-truncate mx-4\">\n            <mat-form-field *ngIf=\"row?.hasOwnProperty(column.field);else not_has_section\" class=\"text-truncate\">\n              <mat-select (selectionChange)=\"onTeacherChange($event,row.className,column.field)\"\n                [placeholder]=\"row[column.field] ? '' :  'Select Teacher'\" [(value)]=\"row[column.field]\" class=\"text-truncate\">\n                <mat-option *ngFor=\"let staff of staffList\" [value]=\"staff.id\">\n                  {{staff.name }} </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ng-template #not_has_section>\n              <span>\n                {{\"N/A\"}}\n              </span>\n            </ng-template>\n          </span>\n          <ng-template #show_data>\n            <span *ngIf=\"row?.hasOwnProperty(column.field);else not_has_section\" class=\"text-truncate\">\n              {{row[column.field] ? row[column.field] : '---'}}\n            </span>\n            <ng-template #not_has_section>\n              <span>\n                {{\"N/A\"}}\n              </span>\n            </ng-template>\n          </ng-template>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div *ngIf=\"rows && rows.length == 0\" class=\"errorMsg\">\n      <p class=\"red-text text-center mb-0 font-weight-bold p-24\" translate>No Data Found</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-truncate {\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL2NsYXNzLXRlYWNoZXItbWFuYWdlbWVudC9jbGFzcy10ZWFjaGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL2NsYXNzLXRlYWNoZXItbWFuYWdlbWVudC9jbGFzcy10ZWFjaGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10cnVuY2F0ZXtcbmRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ClassTeacherManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTeacherManagementComponent", function() { return ClassTeacherManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_staff_class_teacher_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/staff/class-teacher-assignment.service */ "./src/app/service/staff/class-teacher-assignment.service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var ClassTeacherManagementComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassTeacherManagementComponent, _super);
    function ClassTeacherManagementComponent(commonService, gradeSetupService, classTeacherAssignmentService, staffCommonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTeacherAssignmentService = classTeacherAssignmentService;
        _this.staffCommonService = staffCommonService;
        _this.snackBar = snackBar;
        _this.columns = [];
        _this.displayedColumns = [];
        _this.currentComponent = 'ClassTeacherManagementComponent';
        _this.rows = [];
        _this.tableName = 'Class Teacher Management';
        _this.validate = true;
        _this.schoolBoardsList = [];
        _this.classes = [];
        _this.activeColumn = '';
        _this.sortDirection = '';
        _this.staffList = [];
        _this.isOnEdit = false;
        _this.teachersData = [];
        _this.schoolHasBoard = false;
        _this.padding = false;
        _this.setBoardForm();
        _this.getSchoolBoardsList();
        _this.getStaffList();
        _this.initializeModel();
        return _this;
    }
    ClassTeacherManagementComponent.prototype.ngOnInit = function () {
    };
    ClassTeacherManagementComponent.prototype.setBoardForm = function () {
        this.schoolBoardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            schoolBoard: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    ClassTeacherManagementComponent.prototype.setHeaderData = function () {
        var _this = this;
        this.rows = [];
        this.columns = [];
        if (!this.teachersData) {
            return;
        }
        this.rows = [];
        this.columns = [
            { field: 'className', header: 'Class', sort: false }
        ];
        this.displayedColumns = [];
        this.teachersData.forEach(function (classInfo) {
            var classData = {};
            classData['className'] = classInfo.className;
            classInfo.sectionTeachersModel.forEach(function (element) {
                if (_this.columns.findIndex(function (ele) { return ele.field === element.sectionName; }) === -1) {
                    _this.displayedColumns.push(element.sectionName);
                    if (_this.isOnEdit) {
                        _this.columns.push({ field: element.sectionName, header: element.sectionName, sort: false, dropdownInputRequired: true });
                    }
                    else {
                        _this.columns.push({ field: element.sectionName, header: element.sectionName, sort: false, dropdownInputRequired: false });
                    }
                    classData[element.sectionName] = _this.setClassData(_this.isOnEdit, element);
                }
                else {
                    classData[element.sectionName] = _this.setClassData(_this.isOnEdit, element);
                }
            });
            _this.rows.push(classData);
        });
        this.displayedColumns.sort();
        this.displayedColumns.unshift('className');
    };
    ClassTeacherManagementComponent.prototype.setClassData = function (edit, element) {
        if (edit) {
            return element.classTeacherId;
        }
        else {
            return element.classTeacherName;
        }
    };
    ClassTeacherManagementComponent.prototype.initializeModel = function () {
        this.classTeacherAssign = {
            classId: 0,
            sectionId: 0,
            classTeacherId: 0,
            schoolBoardId: 0
        };
    };
    ClassTeacherManagementComponent.prototype.onTeacherChange = function (event, className, sectionName) {
        var _this = this;
        var data = this.teachersData.filter(function (ele) { return className === ele.className; })[0];
        this.classTeacherAssign.schoolBoardId = this.selectedSchoolBoardId;
        this.classTeacherAssign.classId = data.classId;
        this.classTeacherAssign.sectionId = data.sectionTeachersModel.filter(function (ele) { return ele.sectionName === sectionName; })[0].sectionId;
        var classTeacherId = data.sectionTeachersModel.filter(function (ele) { return ele.sectionName === sectionName; })[0].classTeacherId;
        if (!(classTeacherId || event.value)) {
            return;
        }
        this.classTeacherAssign.classTeacherId = event.value;
        this.classTeacherAssignmentService.updateClassTeacher(this.classTeacherAssign)
            .subscribe(function (res) {
            _this.getTeachers(_this.selectedSchoolBoardId);
            _this.openSnackBar(res.messages.ResultMessage);
        }, function (err) { return _this.errorResponse(err); });
    };
    ClassTeacherManagementComponent.prototype.onSelectBoard = function (event) {
        this.isOnEdit = false;
        this.selectedSchoolBoardId = event.value;
        this.getTeachers(this.selectedSchoolBoardId);
    };
    ClassTeacherManagementComponent.prototype.getTeachers = function (boardId) {
        var _this = this;
        this.classTeacherAssignmentService.getClassTeachers(boardId)
            .subscribe(function (res) { return _this.setTeachersData(res); }, function (error) { return _this.errorResponse(error); });
    };
    ClassTeacherManagementComponent.prototype.setTeachersData = function (res) {
        this.teachersData = res.getClassTeacherAssignmentModel;
        this.setHeaderData();
    };
    ClassTeacherManagementComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffCommonService.fetchStaffs(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].TEACHING_STAFF_CODE)
            .subscribe(function (res) { return _this.setStaffData(res); });
    };
    ClassTeacherManagementComponent.prototype.setStaffData = function (response) {
        this.staffList = response;
        this.staffList.unshift({
            code: null,
            id: null,
            name: ''
        });
    };
    ClassTeacherManagementComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.schoolHasBoard = true;
                _this.selectedSchoolBoardId = _this.schoolBoardsList[0].value;
                _this.getTeachers(_this.selectedSchoolBoardId);
                _this.schoolBoardForm.controls.schoolBoard.setValue(_this.selectedSchoolBoardId);
            }
            else {
                _this.schoolHasBoard = false;
                _this.getTeachers(null);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ClassTeacherManagementComponent.prototype.onEdit = function () {
        this.isOnEdit = !this.isOnEdit;
        this.setHeaderData();
    };
    ClassTeacherManagementComponent.prototype.customSort = function (event) {
        this.sortDirection = event.direction;
        this.activeColumn = event.active;
    };
    ClassTeacherManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-teacher-management',
            template: __webpack_require__(/*! ./class-teacher-management.component.html */ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.html"),
            providers: [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__["GradeSetupService"], app_service_staff_class_teacher_assignment_service__WEBPACK_IMPORTED_MODULE_6__["ClassTeacherAssignmentService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_7__["StaffCommonService"]],
            styles: [__webpack_require__(/*! ./class-teacher-management.component.scss */ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_5__["GradeSetupService"],
            app_service_staff_class_teacher_assignment_service__WEBPACK_IMPORTED_MODULE_6__["ClassTeacherAssignmentService"],
            app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_7__["StaffCommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], ClassTeacherManagementComponent);
    return ClassTeacherManagementComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" [templateRef]=\"facilityTemplate\" (getTableData)='representativesData($event)'\n  (rowBasedAction)='rowActions($event)' [closeRowForm]='closeAddPanel' (openAddForm)=\"openForm()\">\n</app-table>\n<ng-template #facilityTemplate>\n  <!-- <div *ngIf=\"show\"> -->\n    <form fxLayout=\"column\" (ngSubmit)=\"saveRepresentative(addRepresentativeFormGroup)\"\n      [formGroup]=\"addRepresentativeFormGroup\" #representativeForm=\"ngForm\">\n      <ng-template translate><span>SchoolFacilityRepresentatives</span></ng-template>\n      <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\"\n          fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label translate #facilityType>FacilityType</mat-label>\n          <mat-select required name=\"facilityType\" formControlName=\"facilityTypeId\"\n            (selectionChange)=\"onFacilityTypeSelect($event.value)\">\n            <mat-option *ngFor=\"let facilityType of facilityTypeDropDown\" [value]=\"facilityType.value\">\n              {{facilityType.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"facilityType.innerText\"\n              [validationControl]=\"addRepresentativeFormGroup.controls.facilityTypeId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"px-sm-20\" fxFlexFill fxLayout=\"column\"\n          fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n          <mat-label translate #facilityId>Facility</mat-label>\n          <mat-select required name=\"facility\" formControlName=\"schoolFacilityId\">\n            <mat-option *ngFor=\"let facility of facilityDropDown\" [value]=\"facility.value\">\n              {{facility.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"facilityId.innerText\"\n              [validationControl]=\"addRepresentativeFormGroup.controls.schoolFacilityId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-sm-12\" fxLayout.gt-xs=\"row\" fxFlex=\"100\">\n\n        <mat-form-field appearance=\"outline\" fxFlexFill\n          fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label translate #representativeRole>RepresentativeRole</mat-label>\n          <mat-select required name=\"schoolRepRole\" formControlName=\"schoolRepRoleId\">\n            <mat-option *ngFor=\"let representativeRoles of representativeRolesDropDown\"\n              [value]=\"representativeRoles.value\">\n              {{representativeRoles.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"representativeRole.innerText\"\n              [validationControl]=\"addRepresentativeFormGroup.controls.schoolRepRoleId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" *ngIf=\"staffTypeDropDown\" class=\"px-sm-20\" fxFlexFill fxLayout=\"column\"\n          fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n          <mat-label translate #staffType>Staff Type</mat-label>\n          <mat-select name=\"staffType\" formControlName=\"staffTypeCode\" (selectionChange)=\"onStaffTypeSelect($event)\">\n            <mat-option *ngIf=\"staffTypeDropDown?.length\"></mat-option>\n            <mat-option *ngFor=\"let staffType of staffTypeDropDown\" [value]=\"staffType.value\">\n              {{staffType.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"staffType.innerText\"\n              [validationControl]=\"addRepresentativeFormGroup.controls.staffTypeCode\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label translate #staff>Staff</mat-label>\n          <mat-select required name=\"staff\" formControlName=\"staffId\">\n            <mat-option *ngFor=\"let staff of staffDropDown\" [value]=\"staff.value\">\n              {{staff.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"staff.innerText\"\n              [validationControl]=\"addRepresentativeFormGroup.controls.staffId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-20\">\n        <button mat-raised-button translate class=\"mr-12 text-uppercase\" type=\"reset\" #formCancel id=\"formCancel\"\n          (click)=\"onCancel()\"> {{'Cancel' | translate}}</button>\n        <button mat-raised-button translate type=\"submit\" color=\"accent\" class=\"text-uppercase\">{{(isUpdateData ? 'Update':'Assign') | translate}}\n        </button>\n      </div>\n\n    </form>\n  <!-- </div> -->\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3NjaG9vbC1mYWNpbGl0eS1yZXByZXNlbnRhdGl2ZXMvc2Nob29sLWZhY2lsaXR5LXJlcHJlc2VudGF0aXZlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: SchoolFacilityRepresentativesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolFacilityRepresentativesComponent", function() { return SchoolFacilityRepresentativesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_staff_information_system_school_facility_repesentative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/staff-information-system/school-facility-repesentative.service */ "./src/app/service/staff-information-system/school-facility-repesentative.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/general/api/school-facility.service */ "./src/app/service/general/api/school-facility.service.ts");
/* harmony import */ var app_service_general_api_school_rep_role_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/general/api/school-rep-role.service */ "./src/app/service/general/api/school-rep-role.service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");












var SchoolFacilityRepresentativesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolFacilityRepresentativesComponent, _super);
    function SchoolFacilityRepresentativesComponent(_fb, schoolFacilityRepesentativeService, commonService, dialog, schoolFacilityService, schoolRepRoleService, staffCommonService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.schoolFacilityRepesentativeService = schoolFacilityRepesentativeService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.schoolFacilityService = schoolFacilityService;
        _this.schoolRepRoleService = schoolRepRoleService;
        _this.staffCommonService = staffCommonService;
        _this.snackBar = snackBar;
        _this.cols = [];
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponentName = 'SchoolFacilityRepresentativesComponent';
        _this.show = false;
        _this.isUpdateData = false;
        _this.buttonDisable = true;
        _this.classSectionDisable = false;
        _this.facilityTypeDropDown = [];
        _this.facilityDropDown = [];
        _this.representativeRolesDropDown = [];
        _this.staffTypeDropDown = [];
        _this.staffDropDown = [];
        _this.doValidate = true;
        _this.representativeId = '';
        _this.schoolFacilityRepresentativeFilter = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
            facilityIds: [],
            facilityCodes: [],
            facilityTypeIds: [],
            roleIds: [],
            representatives: [],
        };
        return _this;
    }
    SchoolFacilityRepresentativesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.schoolFacilityRepresentativeFilter = modelTableComponent;
        }
        this.representativesData(this.schoolFacilityRepresentativeFilter);
        this.addRepresentativeFormGroup = this._fb.group({
            facilityTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            schoolFacilityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            schoolRepRoleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            staffTypeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            staffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.cols = [
            { field: 'facility', header: 'Facility', sort: true },
            { field: 'facilityCode', header: 'FacilityCode', sort: true },
            { field: 'facilityType', header: 'FacilityType', sort: true },
            { field: 'role', header: 'Role', sort: true },
            { field: 'representative', header: 'Representative', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.schoolFacilityRepresentativeFilter,
            tablename: 'School Facility Representatives',
            componentName: this.currentComponentName,
        };
        this.updateModel = {
            id: '',
            schoolFacilityId: 0,
            schoolRepRoleId: 0,
            staffId: 0
        };
        if (this.getTokenParam('_as')) {
            this.getFacilityTypeNames();
            this.getRepresentativeRoles();
            this.staffTypes();
            this.staff(false);
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.openForm = function () {
        this.show = true;
        this.closeAddPanel = false;
        this.staff(false);
    };
    // getting facilitytypeNames
    SchoolFacilityRepresentativesComponent.prototype.getFacilityTypeNames = function () {
        var _this = this;
        this.schoolFacilityService.facilityType().subscribe(function (res) { return _this.listTypeGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.listTypeGet = function (data) {
        this.facilityTypeDropDown = [];
        for (var i = 0; i < data.commonViewModel.length; i++) {
            this.facilityTypeDropDown.push({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.getFacilities = function (response) {
        var _this = this;
        this.schoolFacilityService.getSchoolFacilitiesByType(response).subscribe(function (res) { return _this.facilityGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.facilityGet = function (data) {
        this.facilityDropDown = [];
        this.addRepresentativeFormGroup.controls['schoolFacilityId'].setValue('');
        for (var i = 0; i < data.schoolFacilities.length; i++) {
            this.facilityDropDown.push({ value: data.schoolFacilities[i].id, label: data.schoolFacilities[i].name });
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.getRepresentativeRoles = function () {
        var _this = this;
        this.schoolRepRoleService.getAllRepresentativeRoles().subscribe(function (res) { return _this.representativeRolesGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.representativeRolesGet = function (data) {
        this.representativeRolesDropDown = [];
        for (var i = 0; i < data.listViews.length; i++) {
            this.representativeRolesDropDown.push({ value: data.listViews[i].id, label: data.listViews[i].name });
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.staffTypes = function () {
        var _this = this;
        this.staffCommonService.fetchStaffTypes().subscribe(function (res) { return _this.staffTypesGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.staffTypesGet = function (data) {
        this.staffTypeDropDown = [];
        for (var i = 0; i < data.length; i++) {
            this.staffTypeDropDown.push({ value: data[i].code, label: data[i].name });
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.staff = function (isSetValue, response) {
        var _this = this;
        this.staffCommonService.fetchStaffs(response !== undefined ? response.value : null).subscribe(function (res) { return _this.staffGet(res, isSetValue); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.staffGet = function (data, isValueSet) {
        this.addRepresentativeFormGroup.controls['staffId'].setValue('');
        this.staffDropDown = [];
        for (var i = 0; i < data.length; i++) {
            this.staffDropDown.push({ value: data[i].id, label: data[i].name });
        }
        if (this.isUpdateData && isValueSet) {
            this.editPatchValues();
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.representativesData = function (_event) {
        var _this = this;
        this.schoolFacilityRepresentativeFilter = _event;
        this.schoolFacilityRepesentativeService.fetchFacilityRepresentatives(this.schoolFacilityRepresentativeFilter).subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.response = function (data) {
        if (data.facilityRepresentatives) {
            this.rows = data.facilityRepresentatives.list;
            this.totalItems = data.facilityRepresentatives.totalItems;
        }
        else {
            this.rows = [];
        }
        var actionList = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT
            }, {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE
            }
        ];
        this.rows.forEach(function (e) {
            e.operations = actionList;
        });
        this.tabSettings = {
            columns: this.cols,
            model: this.schoolFacilityRepresentativeFilter,
            rows: this.rows,
            tablename: 'School Facility Representatives',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'School Facility Representatives'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BUTTON_NAME
                }
            }
        };
    };
    // row-wise actions of the table(edit/delete)
    SchoolFacilityRepresentativesComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT) {
            this.show = true;
            this.isUpdateData = true;
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.representativeId = response.clickedRow.id;
            this.schoolFacilityRepesentativeService.facilityRepresentativeById(this.representativeId).subscribe(function (res) {
                return _this.getRepresentativeData(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE) {
            this.deleteAll(response);
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.deleteAll = function (response) {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES) {
                _this.schoolFacilityRepesentativeService.deleteFacilityRepresentative(response.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    SchoolFacilityRepresentativesComponent.prototype.customClearValidation = function (form, columnList) {
        columnList.map(function (element) {
            form.get(element).clearValidators();
            form.controls[element].updateValueAndValidity();
        });
    };
    // response after delete operation
    SchoolFacilityRepresentativesComponent.prototype.deleteResponse = function (deleteResponse) {
        this.resetForm();
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    SchoolFacilityRepresentativesComponent.prototype.onFacilityTypeSelect = function (response) {
        this.facilityTypeChange = true;
        this.getFacilities(response);
    };
    SchoolFacilityRepresentativesComponent.prototype.onStaffTypeSelect = function (response) {
        this.staff(false, response);
    };
    SchoolFacilityRepresentativesComponent.prototype.saveRepresentative = function (data) {
        var _this = this;
        if (data.valid) {
            this.doValidate = false;
            this.facilityTypeChange = false;
            if (this.isUpdateData) {
                data.value.id = this.representativeId;
                this.schoolFacilityRepesentativeService.updateFacilityRepresentative(this.prepareModel(this.updateModel, data.value)).subscribe(function (res) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.resetForm();
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.schoolFacilityRepesentativeService.assignFacilityRepresentative(data.value).subscribe(function (res) {
                    _this.resetForm();
                    _this.openSnackBar(res.messages.ResultMessage);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
        else {
            this.doValidate = true;
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.resetForm = function () {
        this.representativesData(this.schoolFacilityRepresentativeFilter);
        this.addRepresentativeFormGroup.reset();
        this.representativeForm.resetForm();
        this.show = false;
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.facilityDropDown = [];
        this.staffDropDown = [];
        this.facilityDropDown = [];
    };
    SchoolFacilityRepresentativesComponent.prototype.onCancel = function () {
        this.addRepresentativeFormGroup.reset();
        this.representativeForm.resetForm();
        this.show = false;
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.facilityTypeChange = false;
        this.staffDropDown = [];
        this.facilityDropDown = [];
    };
    SchoolFacilityRepresentativesComponent.prototype.getRepresentativeData = function (data) {
        if (data.facilityRepesentativeData !== null && data.facilityRepesentativeData !== undefined) {
            this.editData = data.facilityRepesentativeData;
            var staffData = {
                value: null
            };
            staffData.value = data.facilityRepesentativeData.staffTypeCode;
            this.staff(true, staffData);
            this.getFacilities(data.facilityRepesentativeData.facilityTypeId);
        }
    };
    SchoolFacilityRepresentativesComponent.prototype.editPatchValues = function () {
        this.addRepresentativeFormGroup.patchValue(this.editData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('representativeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolFacilityRepresentativesComponent.prototype, "representativeForm", void 0);
    SchoolFacilityRepresentativesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-facility-representatives',
            template: __webpack_require__(/*! ./school-facility-representatives.component.html */ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.html"),
            providers: [app_service_staff_information_system_school_facility_repesentative_service__WEBPACK_IMPORTED_MODULE_3__["SchoolFacilityRepesentativeService"], app_service_general_api_school_rep_role_service__WEBPACK_IMPORTED_MODULE_10__["SchoolRepRoleService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_11__["StaffCommonService"], app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_9__["SchoolFacilityService"]],
            styles: [__webpack_require__(/*! ./school-facility-representatives.component.scss */ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], app_service_staff_information_system_school_facility_repesentative_service__WEBPACK_IMPORTED_MODULE_3__["SchoolFacilityRepesentativeService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_9__["SchoolFacilityService"],
            app_service_general_api_school_rep_role_service__WEBPACK_IMPORTED_MODULE_10__["SchoolRepRoleService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_11__["StaffCommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], SchoolFacilityRepresentativesComponent);
    return SchoolFacilityRepresentativesComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-40\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Staff Attendance</div>\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <form [formGroup]=\"staffAttendanceForm\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n              <mat-form-field fxFlexFill appearance=\"outline\" fxFlex.gt-sm=\"30\" fxFlex=\"100\" class=\"py-20 icon-center\">\n                  <mat-label translate #attendanceDate translate>Attendance Date</mat-label>\n                  <input matInput (keyup)=\"forceValidation('attendanceDate',staffAttendanceForm)\"\n                    formControlName=\"attendanceDate\" [matDatepicker]=\"picker\" required placeholder=\"Choose a start date\" #staffAttendanceInput>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                  <mat-error>\n                    <app-validation [labelName]='attendanceDate.innerText'\n                      [validationControl]=\"staffAttendanceForm.controls.attendanceDate\" [doValidate]=\"validate\">\n                    </app-validation>\n                  </mat-error>\n                </mat-form-field>\n          </div>\n        \n          <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mr-8\">\n              <button mat-button type='button' (click)=\"getHelpText('Staff Attendance')\">\n                  <mat-icon class=\"grey-600-fg\">info</mat-icon>\n                </button>\n          </div>\n          \n        </div>\n    </form>\n  </div>\n</div>\n\n<app-table *ngIf=\"staffAttendanceForm.valid\" [massActionTemplateRef]=\"staffAttendenceActions\" [settings]=\"tableSettings\" (getTableData)='tableData($event)' (selectedRows)='selectedRows($event)'  (rowBasedAction)='staffAttendenceAction($event, null)' (anchorDialogClick)=\"showLeaveInfo($event)\" (radioSection)='staffAttendenceAction($event, null)'></app-table>\n\n<app-custom-card *ngIf=\"!staffAttendanceForm.valid\" [title]=\"'Staff Attendance Details'\" [inputMessage]=\"'Please Select Date'\">\n</app-custom-card>\n<ng-template #staffAttendenceActions>\n  <form [formGroup]=\"massActionForm\" (ngSubmit)=\"staffAttendenceAction(massActionForm.value,massActionForm.valid)\">\n    <div fxLayout=\"row\" fxFlex=\"100\">\n      <mat-form-field class=\"px-20 pt-8\" fxLayout=\"column\">\n        <mat-label translate>Select Action</mat-label>\n        <mat-select formControlName=\"massOption\"  (selectionChange)=\"onSelect($event)\" placeholder=\"Select Action\">\n          <mat-option *ngFor=\"let attendenceData of attendenceAction\" [value]=\"attendenceData.value\">\n            {{ attendenceData.label}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div fxLayout=\"column\">\n        <app-custom-timepicker *ngIf=\"massActionForm.controls.massOption.value == 1 || massActionForm.controls.massOption.value == 2\" formControlName=\"time\" [is24HoursFormat]=\"true\" [showLabel]=\"false\"  class=\"w-120 mr-12\" [requiredValidator]=true [formClass]=\"'pt-8'\"></app-custom-timepicker>\n      </div>\n\n      <div fxLayout=\"column\">\n        <button [disabled]= \"buttonEnable\" (click)=\"onAction()\" type=\"submit\" mat-raised-button class=\"text-uppercase mr-8 mt-20 \" translate color=\"accent\">\n          {{'Apply' | translate}}\n        </button>\n      </div>\n\n    </div>\n  </form>\n</ng-template>\n<ng-template #leaveInfoDialog>\n  <div fxLayout=\"column\">\n  <h2 mat-dialog-title translate>Leave Request</h2>\n  <div fxLayout=\"column\" fxFlex=\"100\">\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Date</div>\n      <div><span class=\"px-4\">:</span>{{ leaveInfo.from + ' - ' + leaveInfo.to }}</div>\n    </div>\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Reason</div>\n      <div><span class=\"px-4\">:</span><span class=\"break-word\">{{leaveInfo.reason}}</span></div>\n    </div>\n    <div fxLayout=\"row\" class=\"pb-8\">\n      <div class=\"w-68\">Status</div>\n      <div><span class=\"px-4\">:</span><span class=\"break-word\">{{leaveInfo.status}}</span></div>\n    </div>\n    <div fxLayout=\"row\">\n      <button mat-button color=\"accent\" type=\"button\"  (click)=\"leaveRequest()\" *ngIf=\"this.leaveInfo.attachment\" translate><mat-icon class=\"mr-4\">attachment</mat-icon>View Request Letter</button>\n    </div>\n  </div>\n</div>\n  <!-- <div mat-dialog-content>\n    <p>{{'Date: ' + leaveInfo.from + ' - ' + leaveInfo.to }}</p>\n    <p>{{'Reason:'}}</p>\n    <div> {{leaveInfo.reason}}</div>\n  </div> -->\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\"  mat-dialog-actions class=\"pb-16\">\n      <button mat-raised-button color=\"primary\" (click)=\"closeLeaveRequest()\">{{'Close' | translate}}</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3N0YWZmLWF0dGVuZGVuY2Uvc3RhZmYtYXR0ZW5kZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: StaffAttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAttendenceComponent", function() { return StaffAttendenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_staff_attendence_staff_attendence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/staff-attendence/staff-attendence.service */ "./src/app/service/staff-attendence/staff-attendence.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/custom-timepicker/custom-timepicker.validators */ "./src/app/shared/custom-timepicker/custom-timepicker.validators.ts");











var StaffAttendenceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaffAttendenceComponent, _super);
    function StaffAttendenceComponent(staffAttendanceService, dialogRef, commonService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.staffAttendanceService = staffAttendanceService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StaffAttendenceComponent';
        _this.markAttendanceDate = _this.getDefaultDate();
        _this.selectedIdsList = [];
        _this.doValidate = false;
        _this.validate = true;
        _this.buttonEnable = true;
        _this.staffAttendancesList = [];
        _this.SelectedOperationEnum = {
            NUMBER_1: 1,
            NUMBER_2: 2,
            NUMBER_3: 3,
            NUMBER_4: 4,
            NUMBER_5: 5,
            NUMBER_6: 6
        };
        _this.columns = [
            { field: 'select', header: '', sortRequired: false, searchRequired: false },
            { field: 'staffName', header: 'Name', sort: true },
            { field: 'department', header: 'Department', sort: true },
            { field: 'staffCodes', header: 'Staff Code', sort: true },
            { field: 'onLeave', header: 'On Leave', sort: false, anchorDialog: true },
            { field: 'inTime', header: 'In Time', radioAction: true, icon: 'check', activeClass: 'green-fg' },
            { field: 'outTime', header: 'Out Time', radioAction: true, icon: 'check', activeClass: 'green-fg' },
            { field: 'isAbscent', header: 'Absent', radioAction: true, icon: 'clear', activeClass: 'red-fg' },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        _this.initializeForm();
        _this.initializeTableSettings();
        _this.initializeFilterView();
        _this.dateFormat = _this.getSchoolDateFormat();
        return _this;
    }
    StaffAttendenceComponent.prototype.ngOnInit = function () {
        this.initializeFilterView();
        this.attendenceAction = [
            { value: 1, label: 'Record In Time' },
            { value: 2, label: 'Record Out Time' },
            { value: 3, label: 'Record Absent' },
            { value: 4, label: 'Clear In Time' },
            { value: 5, label: 'Clear Out Time' },
            { value: 6, label: 'Clear Attendance' }
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllFilteredStaffs();
    };
    StaffAttendenceComponent.prototype.initializeForm = function () {
        var _this = this;
        this.massActionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            massOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.staffAttendanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            attendanceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.getDefaultDate(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.staffAttendanceForm.valueChanges.subscribe(function (form) {
            _this.doValidate = true;
            if (_this.staffAttendanceForm.valid) {
                _this.staffAttendanceInput.nativeElement.blur();
                _this.markAttendanceDate = _this.commonService.customDateFormat(_this.staffAttendanceForm.value.attendanceDate, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].DATE_FORMATE_YEAR).date;
                _this.filterViewModel.pageNumber = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER;
                _this.getAllFilteredStaffs();
                _this.selectedIdsList = [];
                _this.selectedAttendenceTypeValue = undefined;
                _this.massActionForm.reset();
            }
        });
    };
    StaffAttendenceComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Staff Attendance Details',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            visibleSelectAll: true,
            isSelectRowRequired: true,
            showSelectAll: true,
        };
    };
    StaffAttendenceComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE
        };
    };
    StaffAttendenceComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllFilteredStaffs();
    };
    StaffAttendenceComponent.prototype.getAllFilteredStaffs = function () {
        var _this = this;
        if (this.staffAttendanceForm.valid) {
            this.staffAttendanceService.staffAttendances(this.filterViewModel.staffNames, this.commonService.customDateFormat(this.staffAttendanceForm.value.attendanceDate, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].DATE_FORMATE_YEAR).date, this.filterViewModel.departments, this.filterViewModel.staffCodes, this.filterViewModel.absentOrPresents, this.filterViewModel.inTime, this.filterViewModel.inTimeBegin, this.filterViewModel.inTimeEnd, this.filterViewModel.outTime, this.filterViewModel.outTimeBegin, this.filterViewModel.outTimeEnd, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
                .subscribe(function (res) {
                _this.bindStaffResult(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    StaffAttendenceComponent.prototype.bindStaffResult = function (data) {
        if (!data.pagedStaffAttendance) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedStaffAttendance.list;
            this.rows.forEach(function (row) {
                row.onLeave = (row.onLeave) ? 'YES' : '';
                row.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CLEAR_INTIME,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACCESS_TIME,
                        operationName: 4
                    },
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CLEAR_OUTTIME,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACCESS_TIME,
                        operationName: 5
                    },
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CLEAR_ATTENDENCE,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_ICON,
                        operationName: 6
                    }
                ];
            });
            this.totalRowsCount = data.pagedStaffAttendance.totalItems;
            this.pageCnt = data.pagedStaffAttendance.totalPages;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Staff Attendance Details',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            isSelectRowRequired: true,
            isMultiDeleteRequired: false,
            visibleSelectAll: true,
            showSelectAll: true,
            headerOperations: {
                addingForm: {
                    required: false
                }
            }
        };
    };
    StaffAttendenceComponent.prototype.selectedRows = function (event) {
        this.selectedAttendenceTypeValue === undefined ? this.buttonEnable = true : this.buttonEnable = false;
        this.selectedIdsList = event.length ? event : [];
        this.buttonEnable = (this.selectedIdsList.length > 0);
        var t;
        if (this.massActionForm.value.massOption && this.selectedIdsList.length) {
            this.buttonEnable = false;
        }
        event.length ? t = '' : this.massActionForm.reset();
    };
    StaffAttendenceComponent.prototype.staffAttendenceAction = function (data, isFormValid) {
        var _this = this;
        if (isFormValid === null) {
            this.selectedIdsList = [];
        }
        else {
            isFormValid !== undefined && isFormValid === false ? isFormValid = false : isFormValid = true;
            if (!isFormValid) {
                this.doValidate = true;
                return;
            }
            if (data[data.columnName]) {
                return;
            }
        }
        this.selectedAttendenceTypeValue = null;
        this.staffAttendenceResultView = {};
        this.staffAttendenceResultView.staffAttendancAddViews = [];
        this.selectedIdsList.length !== 0 ? this.staffAttendenceResultView.staffAttendancAddViews
            = this.selectedIdsList : this.staffAttendenceResultView.staffAttendancAddViews.push(data.clickedRow ? data.clickedRow : data);
        data.columnName != null ? this.selectedAttendenceTypeValue = data.columnName : data.operation != null ? this.selectedAttendenceTypeValue = data.operation :
            this.selectedAttendenceTypeValue = data.massOption;
        if (this.selectedAttendenceTypeValue === 'outTime' || this.selectedAttendenceTypeValue === 'inTime') {
            this.massActionForm.value.time = null;
        }
        this.massActionForm.value.time = this.massActionForm.value.time === null ?
            (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
            this.massActionForm.value.time;
        this.staffAttendancesList = [];
        Object.assign(this.staffAttendancesList, this.staffAttendenceResultView.staffAttendancAddViews);
        if (this.selectedAttendenceTypeValue === this.SelectedOperationEnum.NUMBER_2 || this.selectedAttendenceTypeValue === 'outTime') {
            this.staffAttendenceResultView.inTime = null;
            var filterTemp = this.staffAttendancesList.filter(function (elt) { return elt.inTime === null; });
            if (filterTemp && filterTemp.length) {
                this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ? app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_REQUIRED : app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_REQUIRED_MULTI, true);
                return;
            }
            else if (this.staffAttendancesList.filter(function (elt) { return elt.inTime > _this.massActionForm.value.time; }).length > 0) {
                this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ?
                    app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_GREATER_OUT_TIME : app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_GREATER_OUT_TIME_MULTI, true);
                return;
            }
        }
        else if (this.selectedAttendenceTypeValue === this.SelectedOperationEnum.NUMBER_1 || this.selectedAttendenceTypeValue === 'inTime') {
            if (this.staffAttendancesList.filter(function (elt) {
                return (elt.outTime)
                    && elt.outTime < _this.massActionForm.value.time;
            }).length > 0) {
                this.openSnackBar(this.staffAttendenceResultView.staffAttendancAddViews.length === 1 ?
                    app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_GREATER_OUT_TIME : app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IN_TIME_GREATER_OUT_TIME_MULTI, true);
                return;
            }
        }
        this.attendenceTypeAction(this.selectedAttendenceTypeValue);
        this.staffAttendanceService.markStaffAttendances(this.staffAttendenceResultView).subscribe(function (res) {
            _this.attendenceResponse();
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StaffAttendenceComponent.prototype.attendenceResponse = function () {
        this.doValidate = false;
        this.getAllFilteredStaffs();
        this.removeValidators();
        this.massActionForm.reset();
        this.selectedIdsList = [];
        this.selectedAttendenceTypeValue = undefined;
        this.buttonEnable = true;
        this.massActionForm.patchValue({ 'massOption': null, 'time': null });
    };
    StaffAttendenceComponent.prototype.showLeaveInfo = function (row) {
        var rowData = row.leaveRequestInfo;
        this.leaveInfo = {};
        this.leaveInfo.from = this.commonService.customDateFormat(rowData.fromDate, this.dateFormat).date;
        this.leaveInfo.to = this.commonService.customDateFormat(rowData.toDate, this.dateFormat).date;
        this.leaveInfo.reason = rowData.reason;
        this.leaveInfo.attachment = rowData.fileValue;
        this.leaveInfo.status = rowData.status;
        this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"], {
            disableClose: true,
            panelClass: 'custom-modalbox',
            width: '400px',
            data: { template: this.leaveInfoDialog },
        });
    };
    StaffAttendenceComponent.prototype.closeLeaveRequest = function () {
        this.dialogRef.closeAll();
    };
    StaffAttendenceComponent.prototype.leaveRequest = function () {
        if (this.leaveInfo.attachment) {
            this.leaveRequestAttachment = this.storeService.getFilePath(this.leaveInfo.attachment);
            window.open(this.leaveRequestAttachment);
        }
    };
    StaffAttendenceComponent.prototype.setValidators = function () {
        this.massActionForm.get('time').setValidators([app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_10__["TimeValidator"].validateTimeRequired]);
        this.massActionForm.get('time').updateValueAndValidity();
    };
    StaffAttendenceComponent.prototype.removeValidators = function () {
        this.massActionForm.get('time').clearValidators();
        this.massActionForm.controls.time.markAsPristine();
        this.massActionForm.get('time').updateValueAndValidity();
    };
    StaffAttendenceComponent.prototype.attendenceTypeAction = function (data) {
        this.staffAttendenceResultView.isAbscent = this.staffAttendenceResultView.isAbscent ? this.staffAttendenceResultView.isAbscent : null;
        this.staffAttendenceResultView.calendarDate = this.commonService.customDateFormat(this.staffAttendanceForm.value.attendanceDate, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].DATE_FORMATE_YEAR).date;
        switch (data) {
            case this.SelectedOperationEnum.NUMBER_1:
            case 'inTime':
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_1;
                this.staffAttendenceResultView.inTime = (this.massActionForm.value.time === ':' || this.massActionForm.value.time === null) ?
                    (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
                    this.massActionForm.value.time;
                break;
            case this.SelectedOperationEnum.NUMBER_2:
            case 'outTime':
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_2;
                this.staffAttendenceResultView.outTime = (this.massActionForm.value.time === ':' || this.massActionForm.value.time === null) ?
                    (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()) :
                    this.massActionForm.value.time;
                break;
            case 'isAbscent':
            case this.SelectedOperationEnum.NUMBER_3:
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_3;
                this.staffAttendenceResultView.isAbscent = '1';
                break;
            case 'clear in time':
            case this.SelectedOperationEnum.NUMBER_4:
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_4;
                break;
            case 'clear out time':
            case this.SelectedOperationEnum.NUMBER_5:
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_5;
                break;
            default:
                this.staffAttendenceResultView.selectedOperation = this.SelectedOperationEnum.NUMBER_6;
        }
    };
    StaffAttendenceComponent.prototype.onSelect = function (data) {
        this.buttonEnable = false;
        this.selectedAttendenceTypeValue = data.value;
        this.selectedAttendenceTypeValue === 1 ||
            this.selectedAttendenceTypeValue === 2 ? (this.isTimePickerRequired = true, this.setValidators()) : (this.isTimePickerRequired = false, this.removeValidators());
    };
    StaffAttendenceComponent.prototype.onAction = function () {
        if (!this.massActionForm.valid) {
            this.massActionForm.controls.time.markAsDirty();
            this.massActionForm.controls.time.updateValueAndValidity();
            return;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveInfoDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StaffAttendenceComponent.prototype, "leaveInfoDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staffAttendanceInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StaffAttendenceComponent.prototype, "staffAttendanceInput", void 0);
    StaffAttendenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-attendence',
            template: __webpack_require__(/*! ./staff-attendence.component.html */ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.html"),
            providers: [app_service_staff_attendence_staff_attendence_service__WEBPACK_IMPORTED_MODULE_3__["StaffAttendanceService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"]],
            styles: [__webpack_require__(/*! ./staff-attendence.component.scss */ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_staff_attendence_staff_attendence_service__WEBPACK_IMPORTED_MODULE_3__["StaffAttendanceService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], StaffAttendenceComponent);
    return StaffAttendenceComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-40\">\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchStaff(searchForm.value)\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n        <mat-label translate #staffType>StaffType</mat-label>\n        <mat-select formControlName=\"staffTypeIds\">\n          <mat-option *ngFor=\"let staffType of staffTypes\" [value]=\"staffType.value\">\n            {{ staffType.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\" class=\"px-sm-20\">\n        <input #staffName matInput placeholder=\"{{'Search Staff' | translate}}\" formControlName=\"staffName\" aria-label=\"StaffName\"\n          matInput [matAutocomplete]=\"auto\"\n          (keyup)=\"preventSpace($event,'searchForm','staffName')\" \n          (blur)=\"trimTextBoxSpaces('searchForm','staffName')\"\n          >\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"\n          (optionSelected)='getSelectedStaff($event.option.value)'>\n          <mat-option *ngFor=\"let option of filterdStaffs\" [value]=\"option.staffName\">\n            {{option.staffName}}\n            <span class=\"grey-400-fg\"> {{option.position}} </span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n   \n      <div class=\"pb-20\" fxLayout=\"row\">\n        <button mat-raised-button color=\"accent\" type=\"submit\" class=\" text-uppercase mr-12\">{{'Search' | translate}}\n          <!-- <mat-icon class=\"ml-8\">search</mat-icon> -->\n        </button>\n        <button mat-raised-button type=\"button\" class=\"text-uppercase\" (click)=\"onClear(true)\">\n          {{'Clear' | translate}}\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n<app-table [settings]='tableSettings' (getTableData)='tableData($event)' (rowBasedAction)='actions($event)'\n  [closeRowForm]=closeForm (openAddForm)='openForm()' (resetFilter)='onClear()'>\n</app-table>"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3N0YWZmLWRhdGFiYXNlL3N0YWZmLWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StaffDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDatabaseComponent", function() { return StaffDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/staff/staff-member.service */ "./src/app/service/staff/staff-member.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");














var StaffDatabaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaffDatabaseComponent, _super);
    function StaffDatabaseComponent(router, commonService, staffJobApplicationService, staffService, storeService, cd, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.commonService = commonService;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.staffService = staffService;
        _this.storeService = storeService;
        _this.cd = cd;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.staffTypes = [];
        _this.currentComponent = 'StaffDatabaseComponent';
        _this.filterdStaffs = [];
        _this.status = [];
        _this.onSearch = false;
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        _this.staffStatusView = {};
        return _this;
    }
    StaffDatabaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.onSearch = true;
            this.filterViewModel = modelTableComponent;
        }
        this.initializeForm();
        this.status = [];
        this.getAllFilteredStaffs(this.filterViewModel);
        this.searchForm.controls['staffName'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.staffService.staffSearch(name).subscribe(function (res) {
                    _this.filterdStaffs = (res.staffSearchViewResult && res.staffSearchViewResult.length > 0) ? res.staffSearchViewResult : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStaffs = [];
            }
        });
    };
    StaffDatabaseComponent.prototype.initializeForm = function () {
        var _this = this;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            staffName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            staffTypeIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.staffJobApplicationService.fetchStaffTypes().subscribe(function (res) { return _this.staffTypes = res.map(function (obj) { return ({ value: obj.id, label: obj.name }); }); });
    };
    StaffDatabaseComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
            statusIds: [],
            staffNames: [],
            staffCodes: [],
            departments: [],
            staffTypeIds: []
        };
    };
    StaffDatabaseComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'staffName', header: 'Name', sort: true },
            { field: 'staffCode', header: 'Staff Code', sort: true },
            { field: 'statusName', header: 'Status', sort: true },
            { field: 'department', header: 'Department', sort: true },
            { field: 'staffType', header: 'StaffType', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    StaffDatabaseComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Staff Database',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            filtersList: [],
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Staff Database'
                }
            }
        };
    };
    StaffDatabaseComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        var data = this.searchForm.value;
        if (this.onSearch) {
            this.filterViewModel.staffNames = data.staffName ? [data.staffName] : [];
            this.filterViewModel.staffTypeIds = data.staffTypeIds ? [data.staffTypeIds] : [];
        }
        else {
            this.filterViewModel.staffTypeIds = [];
            this.filterViewModel.staffNames = [];
        }
        this.getAllFilteredStaffs(this.filterViewModel);
    };
    StaffDatabaseComponent.prototype.getAllFilteredStaffs = function (data) {
        var _this = this;
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.staffService.staffMembers(data.sortBy, data.statusIds, data.staffNames, data.staffCodes, data.departments, data.staffTypeIds, data.sortOrder, data.pageNumber, data.pageSize).
            subscribe(function (res) {
            _this.bindStaffResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // bindStudentResult(data: StudentResultView): void {
    StaffDatabaseComponent.prototype.bindStaffResult = function (data) {
        var _this = this;
        if (!data.staffDataView) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
            if (this.filterViewModel.staffNames &&
                this.filterViewModel.staffNames[0]) {
                this.studentNameAutoInput.nativeElement.value = this.filterViewModel.staffNames[0];
            }
        }
        else {
            this.rows = data.staffDataView.list;
            this.totalRowsCount = data.staffDataView.totalItems;
            this.pageCnt = data.staffDataView.totalPages;
            this.rows.forEach(function (e) {
                if (e.statusName === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].Active) {
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT
                        }, {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].INACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].INACTIVE_ICON,
                        }
                    ];
                }
                else {
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT
                        }, {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].ACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].ACTIVE_ICON,
                        }
                    ];
                }
            });
            if (data.filters) {
                data.filters.forEach(function (s) {
                    if (s.label === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].STATUS) {
                        _this.status = [];
                        s.options.forEach(function (element) {
                            _this.status.push({
                                value: element.value,
                                label: element.label
                            });
                        });
                    }
                });
            }
            if (this.filterViewModel.staffNames && this.filterViewModel.staffNames[0]) {
                this.studentNameAutoInput.nativeElement.value = this.filterViewModel.staffNames[0];
            }
        }
        if (data.staffDataView != null) {
            this.filterViewModel.pageNumber = data.staffDataView.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Staff Database',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true
                }
            }
        };
        if (localStorage.getItem('_stId') != null
            && this.staffTypes.find(function (x) { return x.label === localStorage.getItem('_stId'); }) !== undefined) {
            this.searchForm.controls['staffTypeIds'].setValue(this.staffTypes.find(function (x) { return x.label === localStorage.getItem('_stId'); }).value);
        }
        if (localStorage.getItem('_stNm') != null) {
            this.searchForm.controls['staffName'].setValue(localStorage.getItem('_stNm'));
        }
    };
    StaffDatabaseComponent.prototype.displayFn = function (data) {
        if (data) {
            return data || data.staffName;
        }
    };
    // Actions Performing on the row
    StaffDatabaseComponent.prototype.actions = function (operationData) {
        var _this = this;
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_9__["RouteConfig"]._Staff_View + '/' + operationData.clickedRow.id]);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_9__["RouteConfig"]._Staff_Edit + '/' + operationData.clickedRow.id]);
        }
        else {
            var upper_1 = operationData.operation.replace(/^\w/, function (c) { return c.toUpperCase(); });
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].STAFF_STATUS + ' '
                        + upper_1, operationData.operation), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    var sId = _this.status.find(function (x) { return x.label.toLowerCase() === upper_1.toLowerCase(); });
                    _this.staffStatusView = {
                        staffId: operationData.clickedRow.id,
                        statusId: sId.value
                    };
                    _this.staffService.staffStatus(_this.staffStatusView).subscribe(function (res) {
                        if (res.statusCode === _this.httpStatus.OK) {
                            _this.getAllFilteredStaffs(_this.filterViewModel);
                            _this.openSnackBar(res.messages.ResultMessage);
                        }
                        else {
                            _this.openSnackBar(res.messages.ResultMessage, true);
                        }
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
    };
    StaffDatabaseComponent.prototype.getStaffDetails = function (data) {
        this.applicationInfo = data.staffMemberDetails;
        if (data.staffMemberDetails.person.attachment) {
            this.profileImage = this.storeService.getFilePath(data.staffMemberDetails.person.attachment.fileName);
        }
        if (this.applicationInfo.attachment) {
            var fileExtension = this.applicationInfo.attachment.fileName.replace(/^.*\./, '');
        }
        this.cd.detectChanges();
    };
    StaffDatabaseComponent.prototype.openForm = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_9__["RouteConfig"]._Staff_Edit]);
    };
    StaffDatabaseComponent.prototype.onClear = function (fromHeader) {
        if (fromHeader === void 0) { fromHeader = false; }
        if (fromHeader) {
            this.searchForm.reset();
            localStorage.removeItem('_stId');
            localStorage.removeItem('_stNm');
            this.filterViewModel.staffTypeIds = [];
            this.filterViewModel.staffNames = [];
            this.onSearch = false;
        }
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.getAllFilteredStaffs(this.filterViewModel);
    };
    StaffDatabaseComponent.prototype.searchStaff = function (data) {
        this.onSearch = true;
        if (data.staffTypeIds != null) {
            localStorage.setItem('_stId', this.staffTypes.find(function (x) { return x.value === data.staffTypeIds; }).label);
        }
        if (data.staffName !== null) {
            localStorage.setItem('_stNm', data.staffName);
        }
        this.filterViewModel.staffNames = data.staffName !== null ? [data.staffName] : [];
        this.filterViewModel.staffTypeIds = data.staffTypeIds !== null ? [data.staffTypeIds] : [];
        this.getAllFilteredStaffs(this.filterViewModel);
    };
    StaffDatabaseComponent.prototype.getSelectedStaff = function (value) {
        if (value.id !== undefined) {
            this.searchForm.controls['staffName'].setValue(value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"])
    ], StaffDatabaseComponent.prototype, "_auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staffName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StaffDatabaseComponent.prototype, "studentNameAutoInput", void 0);
    StaffDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-database',
            template: __webpack_require__(/*! ./staff-database.component.html */ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.html"),
            styles: [__webpack_require__(/*! ./staff-database.component.scss */ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_13__["StaffJobApplicationService"], app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_8__["StaffMemberService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]])
    ], StaffDatabaseComponent);
    return StaffDatabaseComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-40\">\n  <div class=\"ml-20 p-8 text-uppercase font-size-18\" translate>staff Member Details</div>\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-20 mb-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-20\">\n      <button mat-raised-button color=\"primary\" translate (click)=\"back()\" class=\"text-uppercase\">{{'Back' | translate}}</button>\n      <button mat-button (click)=\"getHelpText('Staff Database')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <mat-divider></mat-divider>\n\n    <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"p-24\">\n\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"65\" fxFlexFill>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n          <div class=\"profile-image border m-12 radius-10\" fxLayout=\"column\">\n            <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\"\n              alt=\"No Image\" />\n            <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\">No Image</div>\n          </div>\n          <div fxLayout=\"column\" fxFlex=\"100\">\n            <div class=\"h2 primary-900-fg-custom mb-16 break-word\">{{(staffData?.staffName)}}</div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-100 py-4 primary-300-fg\" translate>mobilenumber</div> : <div class=\"ml-24 break-word\">\n                {{staffData?.contactInfo?.mobileNumber ? staffData?.contactInfo?.mobileNumber  : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-100 py-4 primary-300-fg\" translate>email</div> : <div class=\"ml-24 break-word\">\n                {{staffData?.contactInfo?.primaryEmail ? staffData?.contactInfo?.primaryEmail : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-100 py-4 primary-300-fg\" translate>status</div> : <div class=\"ml-24 break-word\">\n                {{ staffData?.statusName ? staffData?.statusName  : \"-\"}}</div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"w-100 py-4 primary-300-fg\" translate>Date of Join</div> : <div class=\"ml-24 break-word\">\n                {{ staffData?.dateOfJoin ? staffData?.dateOfJoin  : \"-\"}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div fxLayout=\"column\" class=\"mx-sm-12\" fxFlex=\"100\" fxFlex.gt-sm=\"35\">\n        <div fxLayout=\"row\">\n          <div class=\"w-160 py-4 primary-300-fg\" translate>Staff Code</div> : <div class=\"pl-8 break-word\">\n            {{ staffData?.staffCode ? staffData?.staffCode  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <div class=\"w-160 py-4 primary-300-fg\" translate>Staff Type</div> : <div class=\"pl-8 break-word\">\n            {{ staffData?.staffType ? staffData?.staffType  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" >\n          <div class=\"w-160 py-4 primary-300-fg\" translate>Department</div> : <div class=\"pl-8 break-word\">\n            {{ staffData?.department ? staffData?.department  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <div class=\"w-160 py-4 primary-300-fg\" translate>Position</div> : <div class=\"pl-8 break-word\">\n            {{ staffData?.position ? staffData?.position  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <div class=\"w-160 py-4 primary-300-fg\" translate>processedComments</div> : <div class=\"pl-8 break-word\">\n            {{ staffData?.processedComments ? staffData?.processedComments  : \"-\"}}</div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <app-job-application-details-view [staffJobApplicantDetailsView]=\"applicantInfo\"></app-job-application-details-view>\n</div>"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3N0YWZmLWRldGFpbC9zdGFmZi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StaffDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDetailComponent", function() { return StaffDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/staff/staff-member.service */ "./src/app/service/staff/staff-member.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");









var StaffDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaffDetailComponent, _super);
    // applicantInfo: any;
    function StaffDetailComponent(router, commonService, staffService, storeService, changeDetector, route, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.commonService = commonService;
        _this.staffService = staffService;
        _this.storeService = storeService;
        _this.changeDetector = changeDetector;
        _this.route = route;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.acord = [];
        return _this;
    }
    StaffDetailComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.applicantInfo.currentValue) {
        //   if (this.applicantInfo.staffJobApplicantDetailsView && this.applicantInfo.staffJobApplicantDetailsView.applicationPerson.attachment) {
        //     this.profileImage = this.storeService.getFilePath(this.applicantInfo.staffJobApplicantDetailsView.applicationPerson.attachment.fileName);
        //   }
        //   this.changeDetector.detectChanges();
        // }
    };
    StaffDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.staffId = params.id;
                _this.getStaffDetails();
            }
        });
    };
    StaffDetailComponent.prototype.getStaffDetails = function () {
        var _this = this;
        this.staffService.staffMemberDetails(this.staffId).subscribe(function (data) {
            _this.bindStaffDetails(data);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StaffDetailComponent.prototype.bindStaffDetails = function (data) {
        this.staffData = data;
        for (var key in data) { // Iterating over Key
            if (key !== 'messages' && key !== 'statusCode') {
                if (typeof (data[key]) !== 'object') {
                    //// Bind detailCard Data
                }
                else if (data[key] !== null) {
                    this.acord.push({ AccordianName: key, Items: this.getKeyValuesOfObject(data[key]) });
                }
            }
        }
        this.applicantInfo = this.acord;
        if (data.attachmentName != null) {
            this.profileImage = this.storeService.getFilePath(data.attachmentName);
        }
    };
    StaffDetailComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    StaffDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-detail',
            template: __webpack_require__(/*! ./staff-detail.component.html */ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.html"),
            styles: [__webpack_require__(/*! ./staff-detail.component.scss */ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_3__["StaffMemberService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], StaffDetailComponent);
    return StaffDetailComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-information-system-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-information-system-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: StaffInformationSystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationSystemRoutingModule", function() { return StaffInformationSystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teacher_schedule_teacher_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-schedule/teacher-schedule.component */ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.ts");
/* harmony import */ var _school_facility_representatives_school_facility_representatives_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-facility-representatives/school-facility-representatives.component */ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.ts");
/* harmony import */ var _class_teacher_management_class_teacher_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-teacher-management/class-teacher-management.component */ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.ts");
/* harmony import */ var _staff_leave_request_staff_leave_requests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-leave-request/staff-leave-requests.component */ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.ts");
/* harmony import */ var _staff_database_staff_database_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-database/staff-database.component */ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.ts");
/* harmony import */ var _shared_add_staff_admission_form_add_staff_admission_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/add-staff-admission-form/add-staff-admission-form.component */ "./src/app/shared/add-staff-admission-form/add-staff-admission-form.component.ts");
/* harmony import */ var _staff_attendence_staff_attendence_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff-attendence/staff-attendence.component */ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.ts");
/* harmony import */ var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staff-detail/staff-detail.component */ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.ts");











var routes = [
    { path: 'teacher-schedule', component: _teacher_schedule_teacher_schedule_component__WEBPACK_IMPORTED_MODULE_3__["TeacherScheduleComponent"], data: { title: 'Teacher Schedule' } },
    { path: 'school-facility-representatives', component: _school_facility_representatives_school_facility_representatives_component__WEBPACK_IMPORTED_MODULE_4__["SchoolFacilityRepresentativesComponent"], data: { title: 'School Facility Representatives' } },
    { path: 'class-teacher-management', component: _class_teacher_management_class_teacher_management_component__WEBPACK_IMPORTED_MODULE_5__["ClassTeacherManagementComponent"], data: { title: 'Class Teacher Management' } },
    { path: 'staff-database', component: _staff_database_staff_database_component__WEBPACK_IMPORTED_MODULE_7__["StaffDatabaseComponent"], data: { title: 'Staff Database' } },
    { path: 'staff-leave-requests', component: _staff_leave_request_staff_leave_requests_component__WEBPACK_IMPORTED_MODULE_6__["StaffLeaveRequestsComponent"], data: { title: 'Staff Leave Requests' } },
    { path: 'staff-database/add-staff-admission-form', component: _shared_add_staff_admission_form_add_staff_admission_form_component__WEBPACK_IMPORTED_MODULE_8__["AddStaffAdmissionFormComponent"], data: { title: 'Admission Form' } },
    { path: 'staff-database/add-staff-admission-form/:applicationId', component: _shared_add_staff_admission_form_add_staff_admission_form_component__WEBPACK_IMPORTED_MODULE_8__["AddStaffAdmissionFormComponent"], data: { title: 'Admission Form' } },
    { path: 'staff-attendance', component: _staff_attendence_staff_attendence_component__WEBPACK_IMPORTED_MODULE_9__["StaffAttendenceComponent"], data: { title: 'Staff Attendance' } },
    { path: 'staff-database/staff-detail/:id', component: _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_10__["StaffDetailComponent"], data: { title: 'Staff- Details' } }
];
var StaffInformationSystemRoutingModule = /** @class */ (function () {
    function StaffInformationSystemRoutingModule() {
    }
    StaffInformationSystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaffInformationSystemRoutingModule);
    return StaffInformationSystemRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-information-system.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-information-system.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: StaffInformationSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationSystemModule", function() { return StaffInformationSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _staff_information_system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-information-system-routing.module */ "./src/app/modules/staff/staff-information-system/staff-information-system-routing.module.ts");
/* harmony import */ var _school_facility_representatives_school_facility_representatives_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-facility-representatives/school-facility-representatives.component */ "./src/app/modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component.ts");
/* harmony import */ var _class_teacher_management_class_teacher_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-teacher-management/class-teacher-management.component */ "./src/app/modules/staff/staff-information-system/class-teacher-management/class-teacher-management.component.ts");
/* harmony import */ var _staff_database_staff_database_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-database/staff-database.component */ "./src/app/modules/staff/staff-information-system/staff-database/staff-database.component.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _staff_leave_request_staff_leave_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff-leave-request/staff-leave-requests.component */ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.ts");
/* harmony import */ var app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/staff/staff-member.service */ "./src/app/service/staff/staff-member.service.ts");
/* harmony import */ var _staff_attendence_staff_attendence_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./staff-attendence/staff-attendence.component */ "./src/app/modules/staff/staff-information-system/staff-attendence/staff-attendence.component.ts");
/* harmony import */ var app_service_staff_information_system_teachers_schedules_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/staff-information-system/teachers-schedules.service */ "./src/app/service/staff-information-system/teachers-schedules.service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var _teacher_schedule_teacher_schedule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./teacher-schedule/teacher-schedule.component */ "./src/app/modules/staff/staff-information-system/teacher-schedule/teacher-schedule.component.ts");
/* harmony import */ var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./staff-detail/staff-detail.component */ "./src/app/modules/staff/staff-information-system/staff-detail/staff-detail.component.ts");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
























var StaffInformationSystemModule = /** @class */ (function () {
    function StaffInformationSystemModule() {
    }
    StaffInformationSystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_class_teacher_management_class_teacher_management_component__WEBPACK_IMPORTED_MODULE_5__["ClassTeacherManagementComponent"],
                _staff_database_staff_database_component__WEBPACK_IMPORTED_MODULE_6__["StaffDatabaseComponent"], _staff_leave_request_staff_leave_requests_component__WEBPACK_IMPORTED_MODULE_16__["StaffLeaveRequestsComponent"], _school_facility_representatives_school_facility_representatives_component__WEBPACK_IMPORTED_MODULE_4__["SchoolFacilityRepresentativesComponent"], _staff_attendence_staff_attendence_component__WEBPACK_IMPORTED_MODULE_18__["StaffAttendenceComponent"],
                _teacher_schedule_teacher_schedule_component__WEBPACK_IMPORTED_MODULE_21__["TeacherScheduleComponent"],
                _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_22__["StaffDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_7__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedManagementModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _staff_information_system_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffInformationSystemRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                    multi: true
                },
                app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_17__["StaffMemberService"],
                app_service_staff_information_system_teachers_schedules_service__WEBPACK_IMPORTED_MODULE_19__["TeachersSchedulesService"],
                app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_20__["StaffCommonService"],
                app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_23__["StaffJobApplicationService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [],
        })
    ], StaffInformationSystemModule);
    return StaffInformationSystemModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='staffLeaveRequestData($event)' (rowBasedAction)='rowActions($event)'\n    [closeRowForm]='closeAddPanel' (openAddForm)=\"openForm()\" [templateRef]=\"addStaffLeaveRequest\">\n</app-table>\n\n<ng-template #addStaffLeaveRequest>\n    <form [formGroup]=\"leaveRequestForm\" (ngSubmit)=\"createOrUpdateLeaveRequest()\" #staffLeaveRequestForm=\"ngForm\">\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n                <mat-label translate #stafftype>Select Staff Type</mat-label>\n                <mat-select formControlName=\"staffTypeId\" required\n                    (selectionChange)=\"getStaffs($event)\">\n                    <mat-option *ngFor=\"let staffType of staffTypes\" [value]=\"staffType.code\">\n                        {{ staffType.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]=\"stafftype.innerText\"\n                        [validationControl]=\"leaveRequestForm.controls.staffTypeId\" [doValidate]=\"isFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\"\n                fxFlex.gt-xs=\"36\">\n                <mat-label translate #staff>Select Staff</mat-label>\n                <mat-select formControlName=\"staffId\" required>\n                    <mat-option *ngFor=\"let staff of staffs\" [value]=\"staff.value\">\n                        {{ staff.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]=\"staff.innerText\"\n                        [validationControl]=\"leaveRequestForm.controls.staffId\" [doValidate]=\"isFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n                <mat-label translate #reason>Reason</mat-label>\n                <input (keyup)=\"preventSpace($event,'leaveRequestForm','reason')\" required matInput formControlName=\"reason\" (blur)=\"trimTextBoxSpaces('leaveRequestForm','reason')\">\n                <mat-error>\n                    <app-validation [labelName]=\"reason.innerText\"\n                        [validationControl]=\"leaveRequestForm.controls.reason\" [doValidate]=\"isFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-sm-12\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"32\" class=\"icon-center\">\n                <mat-label #fromDate translate>From Date</mat-label>\n                <input matInput (keyup)=\"forceValidation('fromDate',leaveRequestForm)\" [matDatepicker]=\"fromDatePicker\"\n                    formControlName=\"fromDate\" [min]=\"minDate\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n                <mat-error>\n                    <app-validation [labelName]='fromDate.innerText'\n                        [validationControl]=\"leaveRequestForm.controls.fromDate\" [doValidate]=\"isFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"px-sm-24 icon-center\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\"\n                fxFlex.gt-xs=\"36\">\n                <mat-label #toDate translate>To Date</mat-label>\n                <input matInput (keyup)=\"forceValidation('toDate',leaveRequestForm)\" [matDatepicker]=\"toDatePicker\"\n                    formControlName=\"toDate\" [min]=\"leaveRequestForm.controls.fromDate.value\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n                <mat-error>\n                    <app-validation [labelName]='toDate.innerText'\n                        [validationControl]=\"leaveRequestForm.controls.toDate\" [doValidate]=\"isFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <div fxLayout=\"column\" class=\"mt-12\">\n                <div fxLayout=\"row\">\n                    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"logoImgInput.value='';logoImgInput.click()\">\n                        <mat-icon class=\"mr-8\">attachment</mat-icon>{{'Attach Leave Letter' | translate}}\n                    </button>\n                    <button mat-icon-button *ngIf=\"uploadFiles.value.staffFileNameWithExtension\" type=\"button\">\n                        <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"logoImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n                    </button>\n                </div>\n                <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n                    (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n                <div [style.visibility]=\"uploadFiles?.value?.staffFileNameWithExtension ? 'visible' : 'hidden'\" class=\"pt-8 logo-name break-word\">\n                    {{uploadFiles?.value?.staffFileNameWithExtension}}</div>\n            </div>\n\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"end center\" class=\"pt-16\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">\n                {{'Cancel' | translate}}</button>\n            <button class=\"text-uppercase\" mat-raised-button mat-button type=\"submit\" [disabled]=\"isSubmit\"\n                color=\"accent\">{{'Submit' | translate}}</button>\n        </div>\n\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtaW5mb3JtYXRpb24tc3lzdGVtL3N0YWZmLWxlYXZlLXJlcXVlc3Qvc3RhZmYtbGVhdmUtcmVxdWVzdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: StaffLeaveRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffLeaveRequestsComponent", function() { return StaffLeaveRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_staff_staff_leave_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/staff/staff-leave-request-service */ "./src/app/service/staff/staff-leave-request-service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
















var StaffLeaveRequestsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaffLeaveRequestsComponent, _super);
    function StaffLeaveRequestsComponent(staffLeaveRequestService, staffCommonService, typeService, commonService, dialog, storeService, commonComponent, http, _fb, sanitizer, router, cd, routes, snackBar, staffJobApplicationService) {
        var _this = _super.call(this) || this;
        _this.staffLeaveRequestService = staffLeaveRequestService;
        _this.staffCommonService = staffCommonService;
        _this.typeService = typeService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.storeService = storeService;
        _this.commonComponent = commonComponent;
        _this.http = http;
        _this._fb = _fb;
        _this.sanitizer = sanitizer;
        _this.router = router;
        _this.cd = cd;
        _this.routes = routes;
        _this.snackBar = snackBar;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.custRowsPerPageOptions = [];
        _this.currentComponentName = 'StaffLeaveRequestsComponent';
        _this.isFormSubmitted = false;
        _this.leaveRequestId = 0;
        _this.staffId = 0;
        _this.staffs = [];
        _this.staffLeaveRequestSearchViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].PAGESIZE,
            staffNames: [],
            staffTypes: [],
            reasons: [],
            statuses: [],
            leaveStartDatesBegin: null,
            leaveStartDatesEnd: null,
            leaveEndDatesBegin: null,
            leaveEndDatesEnd: null,
        };
        _this.staffLeaveReuestViewModel = {
            staffId: 0,
            reason: '',
            fromDate: null,
            toDate: null,
            fileNamewithext: '',
            fileValue: '',
        };
        return _this;
    }
    StaffLeaveRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.initialiseForm();
        this.cols = [
            { field: 'staff', header: 'Staff', sort: true },
            { field: 'staffType', header: 'Staff Type', sort: true },
            { field: 'startDate', header: 'Start Date', sort: true },
            { field: 'endDate', header: 'End Date', sort: true },
            { field: 'reason', header: 'Reason', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.staffLeaveRequestSearchViewModel = modelTableComponent;
        }
        // / initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.staffLeaveRequestSearchViewModel,
            tablename: 'Staff Leave Requests',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Staff Leave Requests'
                }
            }
        };
        if (this.getTokenParam('_as')) {
            this.loadLeaveRequest();
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
        }
    };
    StaffLeaveRequestsComponent.prototype.loadLeaveRequest = function () {
        var _this = this;
        this.staffLeaveRequestService.fetchStaffLeaveRequests(this.staffLeaveRequestSearchViewModel.sortBy, this.staffLeaveRequestSearchViewModel.sortOrder, this.staffLeaveRequestSearchViewModel.staffNames, this.staffLeaveRequestSearchViewModel.staffTypes, this.staffLeaveRequestSearchViewModel.reasons, this.staffLeaveRequestSearchViewModel.statuses, this.staffLeaveRequestSearchViewModel.leaveStartDatesBegin, this.staffLeaveRequestSearchViewModel.leaveStartDatesEnd, this.staffLeaveRequestSearchViewModel.leaveEndDatesBegin, this.staffLeaveRequestSearchViewModel.leaveEndDatesEnd, this.staffLeaveRequestSearchViewModel.pageNumber, this.staffLeaveRequestSearchViewModel.pageSize).subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    StaffLeaveRequestsComponent.prototype.response = function (data) {
        var _this = this;
        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }
        if (data.staffLeaveRequests) {
            this.rows = data.staffLeaveRequests.list;
            this.totalItems = data.staffLeaveRequests.totalItems;
        }
        else {
            this.rows = [];
        }
        this.rows.forEach(function (e) {
            switch (true) {
                case e.status === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE_OPERATION_LEAVE_APPROVE:
                    if (e.attachementName) {
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_LEAVE_REQUEST,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DETAILS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW
                            }
                        ];
                    }
                    break;
                case e.status === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT_OPERATION_LEAVE_REQUEST:
                    if (e.attachementName) {
                        e.operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_LEAVE_REQUEST,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DETAILS_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW
                            }
                        ];
                    }
                    break;
                case e.status === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].PENDING_STATUS_LEAVE_REQUEST:
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE_OPERATION
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT_OPERATION
                        },
                    ];
                    if (e.attachementName) {
                        e.operations.push({
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_LEAVE_REQUEST,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW
                        });
                    }
                    break;
            }
            e.startDate = (e.startDate == null) ? null : _this.commonService.customDateFormat(e.startDate, _this.getSchoolDateFormat()).date;
            e.endDate = (e.endDate == null) ? null : _this.commonService.customDateFormat(e.endDate, _this.getSchoolDateFormat()).date;
        });
        this.tabSettings = {
            columns: this.cols,
            model: this.staffLeaveRequestSearchViewModel,
            rows: this.rows,
            tablename: 'Staff Leave Requests',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Staff Leave Requests'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].BUTTON_NAME
                }
            }
        };
    };
    StaffLeaveRequestsComponent.prototype.staffLeaveRequestData = function (_event) {
        this.staffLeaveRequestSearchViewModel = _event;
        this.loadLeaveRequest();
    };
    StaffLeaveRequestsComponent.prototype.rowActions = function (response) {
        var _this = this;
        this.leaveRequestId = response.clickedRow.leaveRequestId;
        this.staffId = response.clickedRow.staffId;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].APPROVE_STAFF_LEAVE_REQUEST),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES) {
                    _this.staffLeaveRequestService.approveOrRejectRequest(_this.leaveRequestId, _this.staffId, true).subscribe(function (res) { return _this.approveOrRejectResponse(res); }, function (error) {
                        _this.commonComponent.errorResponse(error);
                    });
                }
            });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].REJECT_STAFF_LEAVE_REQUEST),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].YES) {
                    _this.staffLeaveRequestService.approveOrRejectRequest(_this.leaveRequestId, _this.staffId, false).subscribe(function (res) { return _this.approveOrRejectResponse(res); }, function (error) {
                        _this.commonComponent.errorResponse(error);
                    });
                }
            });
        }
        else if (response.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VIEW_LEAVE_REQUEST).toLowerCase()) {
            if (response.clickedRow.attachementName != null) {
                this.nameImgProp = this.storeService.getFilePath(response.clickedRow.attachementName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    StaffLeaveRequestsComponent.prototype.approveOrRejectResponse = function (response) {
        this.loadLeaveRequest();
        this.openSnackBar(response.messages.ResultMessage);
    };
    StaffLeaveRequestsComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.uploadFiles.controls.staffFileNameWithExtension.patchValue(null);
            this.uploadFiles.controls.staffFileValue.patchValue(null);
        }
        this.cd.detectChanges();
    };
    StaffLeaveRequestsComponent.prototype.initialiseForm = function () {
        this.leaveRequestForm = this._fb.group({
            staffTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            staffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(200)]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
        this.uploadFiles = this._fb.group({
            staffFileNameWithExtension: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            staffFileValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
        });
        this.getStaffTypes();
    };
    StaffLeaveRequestsComponent.prototype.openForm = function () {
        this.closeAddPanel = true;
        this.leaveRequestForm.reset();
        this.staffs = [];
        // this.staffLeaveRequestForm.resetForm();
        this.closeAddPanel = false;
        this.leaveRequestForm.updateValueAndValidity();
    };
    StaffLeaveRequestsComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], 'jpg|jpeg|png|text|pdf|msword|document', 2097152)) {
            this.clearImages(true);
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event[0]);
            var that_1 = this;
            reader_1.onload = function (_event) {
                _this.uploadFiles.controls['staffFileNameWithExtension'].setValue(event[0].name);
                _this.uploadFiles.controls['staffFileValue'].setValue(reader_1.result.split(',')[1]);
                that_1.cd.detectChanges();
            };
        }
    };
    // To-Do
    // setFileProperties(image): void {
    //   const data = {
    //     src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
    //     width: image.width,
    //     height: image.height
    //   };
    //   this.logoImgProp = {};
    //   this.logoImgProp = data;
    //   this.cd.detectChanges();
    // }
    StaffLeaveRequestsComponent.prototype.getStaffTypes = function () {
        var _this = this;
        this.staffTypes = [];
        this.leaveRequestForm.controls['staffId'].patchValue(null);
        this.staffJobApplicationService.fetchStaffTypes().subscribe(function (res) {
            _this.staffTypes = res.map(function (obj) { return ({ value: obj.id, label: obj.name, code: obj.code }); });
            _this.staffTypes = _this.staffTypes.filter(function (e) { return e.code !== 'STFT_LASST'; });
        });
    };
    StaffLeaveRequestsComponent.prototype.getStaffs = function (data) {
        var _this = this;
        this.staffs = [];
        this.leaveRequestForm.controls['staffId'].patchValue(null);
        this.staffCommonService.fetchStaffs(data.value).subscribe(function (response) {
            if (response && response.length) {
                response.forEach(function (element) {
                    _this.staffs.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StaffLeaveRequestsComponent.prototype.createOrUpdateLeaveRequest = function () {
        var _this = this;
        if (this.leaveRequestForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].VALID) {
            this.staffLeaveReuestViewModel.staffId = this.leaveRequestForm.value.staffId;
            this.staffLeaveReuestViewModel.reason = this.leaveRequestForm.value.reason;
            this.staffLeaveReuestViewModel.fromDate = this.leaveRequestForm.value.fromDate;
            this.staffLeaveReuestViewModel.toDate = this.leaveRequestForm.value.toDate;
            this.staffLeaveReuestViewModel.fileNamewithext = this.uploadFiles.value.staffFileNameWithExtension;
            this.staffLeaveReuestViewModel.fileValue = this.uploadFiles.value.staffFileValue;
            this.staffLeaveRequestService.createStaffLeaveRequest(this.staffLeaveReuestViewModel).subscribe(function (res) {
                if (res.statusCode === _this.httpStatus.OK) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.loadLeaveRequest();
                    _this.cancel();
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.isFormSubmitted = true;
            return;
        }
    };
    StaffLeaveRequestsComponent.prototype.cancel = function () {
        this.staffs = [];
        this.closeAddPanel = true;
        this.leaveRequestForm.reset();
        this.staffLeaveRequestForm.resetForm();
        this.clearImages(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staffLeaveRequestForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StaffLeaveRequestsComponent.prototype, "staffLeaveRequestForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StaffLeaveRequestsComponent.prototype, "logoImgInput", void 0);
    StaffLeaveRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-leave-request',
            template: __webpack_require__(/*! ./staff-leave-requests.component.html */ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.html"),
            providers: [app_service_staff_staff_leave_request_service__WEBPACK_IMPORTED_MODULE_5__["StaffLeaveRequestService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__["StaffCommonService"]],
            styles: [__webpack_require__(/*! ./staff-leave-requests.component.scss */ "./src/app/modules/staff/staff-information-system/staff-leave-request/staff-leave-requests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_staff_staff_leave_request_service__WEBPACK_IMPORTED_MODULE_5__["StaffLeaveRequestService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__["StaffCommonService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_13__["TypeService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_15__["StaffJobApplicationService"]])
    ], StaffLeaveRequestsComponent);
    return StaffLeaveRequestsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/staff-attendence/staff-attendence.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/staff-attendence/staff-attendence.service.ts ***!
  \**********************************************************************/
/*! exports provided: StaffAttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAttendanceService", function() { return StaffAttendanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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







var StaffAttendanceService = /** @class */ (function () {
    function StaffAttendanceService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Teacher;
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
    StaffAttendanceService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StaffAttendanceService.prototype.markStaffAttendances = function (staffAttendanceAddView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["TeacherModuleConfig"]._Staff_MarkAttendance, staffAttendanceAddView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffAttendanceService.prototype.staffAttendances = function (staffNames, attendanceDate, departments, staffCodes, absentOrPresents, inTime, inTimeBegin, inTimeEnd, outTime, outTimeBegin, outTimeEnd, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(staffNames, 'StaffNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(attendanceDate, 'AttendanceDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(departments, 'Departments', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(staffCodes, 'StaffCodes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTimeBegin, 'InTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTimeEnd, 'InTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTimeBegin, 'OutTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTimeEnd, 'OutTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(absentOrPresents, 'AbsentOrPresents', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTime, 'InTime', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTime, 'OutTime', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["TeacherModuleConfig"]._Staff_Attendance, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffAttendanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], StaffAttendanceService);
    return StaffAttendanceService;
}());



/***/ }),

/***/ "./src/app/service/staff-information-system/school-facility-repesentative.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/service/staff-information-system/school-facility-repesentative.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: SchoolFacilityRepesentativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolFacilityRepesentativeService", function() { return SchoolFacilityRepesentativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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








var SchoolFacilityRepesentativeService = /** @class */ (function () {
    function SchoolFacilityRepesentativeService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Base;
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
    SchoolFacilityRepesentativeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SchoolFacilityRepesentativeService.prototype.assignFacilityRepresentative = function (model, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Assign_School_Facility_Representative, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolFacilityRepesentativeService.prototype.deleteFacilityRepresentative = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFacilityRepresentative.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Assign_School_Facility_Representative, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolFacilityRepesentativeService.prototype.facilityRepresentativeById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling facilityRepresentativeById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Facility_Representative_By_Id, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolFacilityRepesentativeService.prototype.fetchFacilityRepresentatives = function (dataModel, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParamsWithModel(dataModel, queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Fetch_Facility_Representatives, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolFacilityRepesentativeService.prototype.updateFacilityRepresentative = function (model, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Assign_School_Facility_Representative, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolFacilityRepesentativeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], SchoolFacilityRepesentativeService);
    return SchoolFacilityRepesentativeService;
}());



/***/ }),

/***/ "./src/app/service/staff/class-teacher-assignment.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/service/staff/class-teacher-assignment.service.ts ***!
  \*******************************************************************/
/*! exports provided: ClassTeacherAssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTeacherAssignmentService", function() { return ClassTeacherAssignmentService; });
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







var ClassTeacherAssignmentService = /** @class */ (function () {
    function ClassTeacherAssignmentService(httpClient, basePath, configuration) {
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
    ClassTeacherAssignmentService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ClassTeacherAssignmentService.prototype.getClassTeachers = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Get_Class_Teachers_Managements, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ClassTeacherAssignmentService.prototype.updateClassTeacher = function (classTeacherAssignmentModel, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Class_Teacher_Update, classTeacherAssignmentModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ClassTeacherAssignmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], ClassTeacherAssignmentService);
    return ClassTeacherAssignmentService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-staff-staff-information-system-staff-information-system-module~app-shared-wizard~fe7ccdd1.js.map