(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-school-admin-school-admin-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/school-admin/edit-settings/edit-settings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/school-admin/edit-settings/edit-settings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 pb-20 allTable-grid\">\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-20\" fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20 border-bottom gridHeader\">\n      <div fxLayout=\"column\" fxFlex=\"40\">\n        <div class=\"font-size-16 text-uppercase\" translate>School Settings</div>\n      </div>\n      <div class=\"text-right gridRightBtn\" fxLayout=\"column\" fxFlex=\"60\" fxLayoutAlign=\"end\">\n        <div class=\"example-button-row\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <!-- <button mat-raised-button color=\"accent\" translate class=\"text-uppercase\"><span translate>edit</span></button> -->\n          <button mat-button>\n            <mat-icon class=\"font-size-28 grey-600-fg\" (click)=\"getHelpText('School Settings')\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <form [formGroup]=\"schoolSettingsForm\" (ngSubmit)=\"updateSchoolSetting(schoolSettingsForm)\">\n      <mat-list fxFlex=\"100\" fxLayout=\"column\" class=\"pt-0 confirm-table edit-settings\">\n        <mat-list-item fxLayout=\"row\" class=\"border-bottom\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Moderate Parent Teacher Messages</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"moderateCommunication\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Moderate Student Health Records Update</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"moderateStudentRecordUpdates\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Moderate Test Schedule Notifications</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"moderateTestNotifications\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Moderate Event Posting Notifications</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"moderateEventNotifications\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Moderate Assignment Notifications</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"moderateAssignmentNotifications\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Online Student Applications</span></div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n            <mat-slide-toggle formControlName=\"allowOnlineStudentApplications\"></mat-slide-toggle>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Date Format</span></div>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"50\" class=\"pt-16\">\n            <mat-label #feeTypeId translate>Date Format</mat-label>\n            <mat-select formControlName=\"dateFormatTypeId\" required>\n              <mat-option *ngFor=\"let dateDetails of dateFormateDetails\" [value]=\"dateDetails.id\">\n                {{dateDetails.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\">\n          <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Name Format</span></div>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"50\" class=\"pt-16\">\n            <mat-label #feeTypeId translate>Name Format</mat-label>\n            <mat-select formControlName=\"personNameFormatTypeId\" required>\n              <mat-option *ngFor=\"let nameDetails of nameFormateDetails\" [value]=\"nameDetails.id\">\n                {{nameDetails.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"m-16 py-24\">\n        <button class=\"mr-12 text-uppercase\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"cancelSchoolSettings()\">\n        {{'Reset' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">\n          {{'Update' | translate}}</button>\n        </div>\n      </mat-list>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/school-admin/edit-settings/edit-settings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/school-admin/edit-settings/edit-settings.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table ::ng-deep .mat-list-item-content {\n  width: 80%; }\n\n.edit-settings ::ng-deep .mat-form-field-wrapper {\n  margin: 0;\n  padding-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL2VkaXQtc2V0dGluZ3MvZWRpdC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVTLFVBQ0osRUFBQTs7QUFFTDtFQUVPLFNBQVE7RUFDUixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL2VkaXQtc2V0dGluZ3MvZWRpdC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtLXRhYmxle1xuICAgICA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICAgICAgIHdpZHRoOjgwJVxuICAgICB9XG59XG4uZWRpdC1zZXR0aW5nc3tcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgbWFyZ2luOjA7XG4gICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/school-admin/edit-settings/edit-settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/school-admin/edit-settings/edit-settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSettingsComponent", function() { return EditSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_service_manage_school_school_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/manage-school/school-settings-service */ "./src/app/service/manage-school/school-settings-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");








var EditSettingsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditSettingsComponent, _super);
    function EditSettingsComponent(schoolSettingsService, dialog, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.schoolSettingsService = schoolSettingsService;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        return _this;
    }
    EditSettingsComponent.prototype.ngOnInit = function () {
        this.schoolSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            moderateCommunication: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            moderateStudentRecordUpdates: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            moderateTestNotifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            moderateEventNotifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            moderateAssignmentNotifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            allowOnlineStudentApplications: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dateFormatTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            personNameFormatTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.getDateFormateTypes();
        this.getNameFormateTypes();
        this.getSchoolSettings();
    };
    EditSettingsComponent.prototype.ngOnChanges = function () {
        this.getSchoolSettings();
    };
    EditSettingsComponent.prototype.getDateFormateTypes = function () {
        var _this = this;
        this.schoolSettingsService.dateFormatTypes().subscribe(function (res) { return _this.dateFormateTypesResponse(res); });
    };
    EditSettingsComponent.prototype.dateFormateTypesResponse = function (data) {
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
            this.dateFormateDetails = data.commonViewModel;
        }
    };
    EditSettingsComponent.prototype.getNameFormateTypes = function () {
        var _this = this;
        this.schoolSettingsService.personNameFormatTypes().subscribe(function (res) { return _this.nameFormatTypesResponse(res); });
    };
    EditSettingsComponent.prototype.nameFormatTypesResponse = function (data1) {
        if (data1.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
            this.nameFormateDetails = data1.commonViewModel;
        }
    };
    EditSettingsComponent.prototype.getSchoolSettings = function () {
        var _this = this;
        this.schoolSettingsService.getSchoolSettings(this.data).subscribe(function (res) { return _this.getSchoolSettingsResponse(res); });
    };
    EditSettingsComponent.prototype.getSchoolSettingsResponse = function (data) {
        if (data.schoolSettingsView != null) {
            this.schoolSettings = data.schoolSettingsView;
            this.schoolSettingsForm.controls['moderateCommunication'].setValue(this.schoolSettings.moderateCommunication);
            this.schoolSettingsForm.controls['moderateStudentRecordUpdates'].setValue(this.schoolSettings.moderateStudentRecordUpdates);
            this.schoolSettingsForm.controls['moderateTestNotifications'].setValue(this.schoolSettings.moderateTestNotifications);
            this.schoolSettingsForm.controls['moderateEventNotifications'].setValue(this.schoolSettings.moderateEventNotifications);
            this.schoolSettingsForm.controls['moderateAssignmentNotifications'].setValue(this.schoolSettings.moderateAssignmentNotifications);
            this.schoolSettingsForm.controls['allowOnlineStudentApplications'].setValue(this.schoolSettings.allowOnlineStudentApplications);
            this.schoolSettingsForm.controls['dateFormatTypeId'].setValue(this.schoolSettings.dateFormatTypeId);
            this.schoolSettingsForm.controls['personNameFormatTypeId'].setValue(this.schoolSettings.personNameFormatTypeId);
        }
    };
    EditSettingsComponent.prototype.updateSchoolSetting = function (schoolSettingsForm) {
        var _this = this;
        this.schoolSettingsView = schoolSettingsForm.value;
        this.schoolSettingsView.moderateCommunication = Number(this.schoolSettingsView.moderateCommunication);
        this.schoolSettingsView.moderateStudentRecordUpdates = Number(this.schoolSettingsView.moderateStudentRecordUpdates);
        this.schoolSettingsView.moderateTestNotifications = Number(this.schoolSettingsView.moderateTestNotifications);
        this.schoolSettingsView.moderateEventNotifications = Number(this.schoolSettingsView.moderateEventNotifications);
        this.schoolSettingsView.moderateAssignmentNotifications = Number(this.schoolSettingsView.moderateAssignmentNotifications);
        this.schoolSettingsView.allowOnlineStudentApplications = Number(this.schoolSettingsView.allowOnlineStudentApplications);
        this.schoolSettingsView.allowOnlineStudentApplications = Number(this.schoolSettingsView.allowOnlineStudentApplications);
        this.schoolSettingsView.schoolId = String(this.schoolSettingsView.schoolId);
        this.schoolSettingsView.schoolId = this.data;
        if (this.schoolSettingsView != null) {
            this.schoolSettingsService.updateSchoolSettings(this.schoolSettingsView).subscribe(function (res) { return _this.updateResponse(res); });
        }
    };
    EditSettingsComponent.prototype.updateResponse = function (data) {
        this.openSnackBar(data.messages.ResultMessage);
    };
    EditSettingsComponent.prototype.cancelSchoolSettings = function () {
        this.getSchoolSettings();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditSettingsComponent.prototype, "data", void 0);
    EditSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-settings',
            template: __webpack_require__(/*! ./edit-settings.component.html */ "./src/app/modules/school-admin/edit-settings/edit-settings.component.html"),
            providers: [
                app_service_manage_school_school_settings_service__WEBPACK_IMPORTED_MODULE_4__["SchoolSettingsService"]
            ],
            styles: [__webpack_require__(/*! ./edit-settings.component.scss */ "./src/app/modules/school-admin/edit-settings/edit-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_manage_school_school_settings_service__WEBPACK_IMPORTED_MODULE_4__["SchoolSettingsService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], EditSettingsComponent);
    return EditSettingsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/manage-school/manage-school.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/school-admin/manage-school/manage-school.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hideStepper; else success\" class=\"px-sm-48\" fxLayout=\"column\">\n  <div class=\"text-uppercase pl-12 mt-20 h2\" translate>{{isUpdateForm ? 'editschool' : 'createNewSchool'}}</div>\n  <mat-horizontal-stepper class=\"custom-horizontal-step mat-elevation-z8 radius-t-20\" [linear]=\"true\" fxLayout=\"row\"\n    fxFlex=\"100\" #stepper (selectionChange)=\"OnSelectionChange($event)\">\n    <mat-step [stepControl]=\"school\">\n      <form fxLayout=\"column\" [formGroup]=\"school\">\n        <ng-template matStepLabel><span translate>{{isUpdateForm ? 'editschool': 'createNewSchool'}}</span>\n        </ng-template>\n        <div class=\"font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"space-between center\"><span\n            translate>{{isUpdateForm ? 'editschool': 'createNewSchool'}}</span>\n\n          <button mat-button type='button' (click)=\"getHelpText('Add New School')\" class=\"mb-20\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n\n          </button>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label #name translate>Name</mat-label>\n            <input (keyup)=\"preventSpace($event,'school','name')\" (blur)=\"trimTextBoxSpaces('school','name')\" formControlName=\"name\"\n              matInput required>\n            <mat-error>\n              <app-validation [labelName]='name.innerText' [validationControl]=\"school.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label translate #theme>UI Theme</mat-label>\n            <mat-select formControlName=\"uiThemeId\" required>\n              <mat-option *ngFor=\"let theme of availableThemes\" [value]=\"theme.id\">{{theme.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='theme.innerText' [validationControl]=\"school.controls.uiThemeId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout.lt-sm=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #licence>Institution Licence</mat-label>\n            <mat-select [disabled]=\"isUpdateForm\" formControlName=\"licenceId\" required>\n              <mat-option *ngFor=\"let licence of institutionLicences\" [value]=\"licence.id\">{{licence.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='licence.innerText' [validationControl]=\"school.controls.licenceId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-24\"\n            fxFlex.gt-sm=\"50\">\n            <mat-label translate #currency>Currency Name</mat-label>\n            <mat-select formControlName=\"currencyId\" [disabled]=\"isUpdateForm\" required>\n              <mat-option *ngFor=\"let currency of currencyTypes\" [value]=\"currency.id\">{{currency.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='currency.innerText' [validationControl]=\"school.controls.currencyId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label #code translate>Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'school','schoolCode')\" (blur)=\"trimTextBoxSpaces('school','schoolCode')\"\n              formControlName=\"schoolCode\" matInput required>\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"school.controls.schoolCode\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n          <button mat-raised-button (click)=\"onCancel()\" type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Cancel' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"boardForm\">\n      <form fxLayout=\"column\" [formGroup]=\"boardForm\">\n        <ng-template matStepLabel><span translate>Board</span></ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Board</div>\n        <div formArrayName=\"schoolBoardViewModel\"\n          *ngFor=\"let item of addNewRowSchform.controls; let i = index,let f= first;\">\n          <div [formGroupName]=\"i\" fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\" fxFlex=\"100\"\n            fxLayoutAlign=\"start center\">\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label translate #boardText>Board</mat-label>\n              <mat-select [disabled]=\"!f\" formControlName=\"boardId\">\n                <mat-option [disabled]=\"school.disable\" *ngFor=\"let school of schoolBoards\" [value]=\"school.id\">\n                  {{school.name}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='boardText.innerText'\n                  [validationControl]=\"boardForm?.controls.schoolBoardViewModel?.controls[i].controls.boardId\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            \n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n              class=\"px-sm-24\">\n              <mat-label translate #affCode>Affiliation Code</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event,boardForm?.controls.schoolBoardViewModel?.controls[i].controls.affiliationCode)\"\n                (blur)=\"onBlurAffCode(i,boardForm?.controls.schoolBoardViewModel?.controls[i].controls.affiliationCode.value)\" [required]=\"boardForm?.controls.schoolBoardViewModel?.controls[i].controls.boardId.value ? true : false\"\n                formControlName=\"affiliationCode\" matInput>\n              <mat-error>\n                <app-validation [labelName]='affCode.innerText'\n                  [validationControl]=\"boardForm?.controls.schoolBoardViewModel?.controls[i].controls.affiliationCode\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <div fxLayout=\"row\" class=\"mb-32\">\n              <button *ngIf=\"f\" class mat-raised-button (click)=\"addItem(item?.value)\" type=\"submit\" color=\"accent\"\n                [disabled]=\"disableBoardSelect()\"\n                class=\"text-uppercase w-100 mt-20\">\n                {{'Select' | translate}}\n              </button>\n              <button *ngIf=\"f\" class=\"\" mat-raised-button (click)=\"resetBoards()\" type=\"submit\" color=\"primary\"\n                [disabled]=\"!boardForm.controls?.schoolBoardViewModel.value[0].boardId\"\n                class=\"text-uppercase w-100 mt-20 ml-12\">\n                {{'Clear' | translate}}\n              </button>\n              <button mat-icon-button [style.display]=\"f ? 'none' : 'block'\">\n                <mat-icon class=\"grey-600-fg\" (click)=\"resetFormArrayOnIndex(i,item?.value)\">\n                  highlight_off\n                </mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-20 mr-sm-28\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"contact\">\n      <form fxLayout=\"column\" [formGroup]=\"contact\">\n        <ng-template matStepLabel><span translate>Contact</span></ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" >\n          <span translate>contactDetails</span></div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label translate #email>email1</mat-label>\n            <input (keyup)=\"preventSpace($event,'contact','email1')\" (blur)=\"trimTextBoxSpaces('contact','email1')\"\n              formControlName=\"email1\" matInput required>\n            <mat-error>\n              <app-validation [labelName]='email.innerText' [validationControl]=\"contact.controls.email1\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-24\">\n            <mat-label translate #email2>email 2</mat-label>\n            <input (keyup)=\"preventSpace($event,'contact','email2')\" (blur)=\"trimTextBoxSpaces('contact','email2')\"\n              formControlName=\"email2\" matInput>\n            <mat-error>\n              <app-validation [labelName]='email2.innerText' [validationControl]=\"contact.controls.email2\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"loaded\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-12\"\n          fxLayoutAlign=\"center center\">\n          <mat-form-field class=\"coutline\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label translate #mobileNumber1>mobilenumber</mat-label>\n            <input type=\"text\" required matInput formControlName=\"mobileTel\" ng2TelInput\n              (hasError)=\"onError($event,'mobileTel')\" [ng2TelInputOptions]=\"telOptions\"\n              (ng2TelOutput)=\"getNumber($event,'mobileTel')\"\n              (countryChange)=\"onCountryChangeMobile($event,'mobileTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"mobileNumber1.innerText\" [validationControl]=\"contact.controls.mobileTel\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-24 coutline\">\n            <mat-label translate #mobileNumber2>alternatenumber</mat-label>\n            <input type=\"text\" matInput formControlName=\"otherTel\" ng2TelInput (hasError)=\"onError($event,'otherTel')\"\n              [ng2TelInputOptions]=\"telOptions\" (ng2TelOutput)=\"getNumber($event,'otherTel')\"\n              (countryChange)=\"onCountryChangeMobile($event,'otherTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"mobileNumber2.innerText\" [validationControl]=\"contact.controls.otherTel\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"pt-12\">\n          <mat-form-field class=\"coutline\" *ngIf=\"loaded\" appearance=\"outline\" fxFlexFill fxLayout=\"column\"\n            fxFlex=\"100\">\n            <mat-label translate #landline>landlinenumber</mat-label>\n            <input type=\"text\" matInput formControlName=\"landTel\" ng2TelInput (hasError)=\"onError($event,'landTel')\"\n              [ng2TelInputOptions]=\"telOptions\" (ng2TelOutput)=\"getNumber($event,'landTel')\"\n              (countryChange)=\"onCountryChangeMobile($event,'landTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"landline.innerText\" [validationControl]=\"contact.controls.landTel\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-24\">\n            <mat-label translate #wesite>website</mat-label>\n            <input (keyup)=\"preventSpace($event,'contact','website')\" (blur)=\"trimTextBoxSpaces('contact','website')\"\n              formControlName=\"website\" matInput>\n            <mat-error>\n              <app-validation [labelName]='wesite.innerText' [validationControl]=\"contact.controls.website\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-20\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"address\" [completed]=\"address.valid\">\n      <form fxLayout=\"column\" [formGroup]=\"address\">\n        <ng-template matStepLabel><span translate>Address</span></ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Address</div>\n        <div fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #addressLine1>Address Line 1</mat-label>\n            <input (keyup)=\"preventSpace($event,'address','line1')\" (blur)=\"trimTextBoxSpaces('address','line1')\" formControlName=\"line1\"\n              matInput required>\n            <mat-error>\n              <app-validation [labelName]='addressLine1.innerText' [validationControl]=\"address.controls.line1\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label translate #addressLine2>Address Line 2</mat-label>\n            <input (keyup)=\"preventSpace($event,'address','line2')\" (blur)=\"trimTextBoxSpaces('address','line2')\" formControlName=\"line2\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='addressLine2.innerText' [validationControl]=\"address.controls.line2\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #addressLine3>Address Line 3</mat-label>\n            <input (keyup)=\"preventSpace($event,'address','line3')\" (blur)=\"trimTextBoxSpaces('address','line3')\" formControlName=\"line3\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='addressLine3.innerText' [validationControl]=\"address.controls.line3\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label translate #country>country</mat-label>\n            <mat-select (selectionChange)=\"countryChanged($event)\" matInput required formControlName=\"countryId\"\n              required>\n              <mat-option *ngFor=\"let country of countryOptionsSelect\" [value]=\"country.id\">{{country.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='country.innerText' [validationControl]=\"address.controls.countryId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-xs=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #state>state</mat-label>\n            <mat-select matInput formControlName=\"stateId\" required>\n              <mat-option *ngFor=\"let state of stateOptionsSelect\" [value]=\"state.id\">{{state.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='state.innerText' [validationControl]=\"address.controls.stateId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label translate #city>city</mat-label>\n            <input (keyup)=\"preventSpace($event,'address','city')\" (blur)=\"trimTextBoxSpaces('address','city')\" formControlName=\"city\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='city.innerText' [validationControl]=\"address.controls.city\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #pincode>pincode</mat-label>\n            <input (keyup)=\"preventSpace($event, 'address','pincode')\" (blur)=\"trimTextBoxSpaces('address','pincode')\"\n              formControlName=\"pincode\" matInput required>\n            <mat-error>\n              <app-validation [labelName]='pincode.innerText' [validationControl]=\"address.controls.pincode\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-20\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"settings\">\n      <form fxLayout=\"column\" [formGroup]=\"settings\">\n        <ng-template matStepLabel><span translate>Settings</span></ng-template>\n        <div class=\"pb-20 font-size-24\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate><span translate>Settings</span>\n        </div>\n        <mat-list fxFlex=\"100\" fxLayout=\"column\" class=\"pt-0 confirm-table edit-settings border \">\n          <mat-list-item fxLayout=\"row\" class=\"border-bottom\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Moderate Parent Teacher Messages</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'moderateCommunication')\"\n                formControlName=\"moderateCommunication\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Moderate Student Health Records Updates</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'moderateStudentRecordUpdates')\"\n                formControlName=\"moderateStudentRecordUpdates\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Moderate Test Schedule Notifications</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'moderateTestNotifications')\"\n                formControlName=\"moderateTestNotifications\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Moderate Event Posting Notifications</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'moderateEventNotifications')\"\n                formControlName=\"moderateEventNotifications\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Moderate Assignments Notifications</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'moderateAssignmentNotifications')\"\n                formControlName=\"moderateAssignmentNotifications\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"70\"><span translate>Online Student Applications</span></div>\n            <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n              <mat-slide-toggle (change)=\"onChange($event,'allowOnlineStudentApplications')\"\n                formControlName=\"allowOnlineStudentApplications\"></mat-slide-toggle>\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Date Format</span></div>\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"50\" class=\"pt-16\">\n              <mat-label translate #dateFormat>Date Format</mat-label>\n              <mat-select formControlName=\"dateFormatTypeId\" required>\n                <mat-option *ngFor=\"let format of dateFormats\" [value]=\"format.id\">{{format.name}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='dateFormat.innerText'\n                  [validationControl]=\"settings.controls.dateFormatTypeId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </mat-list-item>\n\n          <mat-list-item fxLayout=\"row\">\n            <div fxLayout=\"column\" fxFlex=\"50\"><span translate>Name Format</span></div>\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"50\" class=\"pt-16\">\n              <mat-label translate #nameFormat>Name Format</mat-label>\n              <mat-select formControlName=\"personNameFormatTypeId\" required>\n                <mat-option *ngFor=\"let format of nameFormats\" [value]=\"format.id\">{{format.name}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='nameFormat.innerText'\n                  [validationControl]=\"settings.controls.personNameFormatTypeId\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"m-16 py-12\">\n            <button class=\"mr-12 text-uppercase\" type=\"button\" mat-raised-button matStepperPrevious>\n              {{'Previous' | translate}}</button>\n            <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n              matStepperNext>{{'Next' | translate}}</button>\n          </div>\n        </mat-list>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"uploadImages\" [optional]=\"true\" [completed]=\"isStepCompleted(uploadImages)\">\n      <form fxLayout=\"column\" [formGroup]=\"uploadImages\">\n        <ng-template matStepLabel translate><span translate>Upload Images</span></ng-template>\n        <div class=\"py-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate><span translate>Upload Images</span>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"branding-image\">\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"start center\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\" class=\"img-upload\">\n              <mat-label class=\"font-size-18 pr-12\">\n                <div translate>School</div>\n                <div><span translate>Symbol Logo</span>:</div>\n              </mat-label>\n              <div>\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                  (click)=\"logoImgInput.value='';logoImgInput.click()\">{{'Upload Image' | translate}}</button>\n                <button mat-icon-button [style.visibility]=\"logoImgProp?.src ? 'visible' : 'hidden'\"\n                  (click)=\"logoImgInput.value='';clearImages(true)\">\n                  <mat-icon class=\"mb-4 grey-600-fg\">highlight_off</mat-icon>\n                </button>\n\n                <input [accept]=\"'image/*'\" id=\"logoImgInput\" (change)=\"imgChanged(logoImgInput.files,true)\" fxHide\n                  type=\"file\" #logoImgInput>\n                <div class=\"pt-4 primary-300-fg font-size-12\">(<span translate>Preferred</span> 1:1)</div>\n                <div class=\"pt-8 logo-name break-word\"\n                  [style.visibility]=\"uploadImages?.value?.schoolSymbolFileNameWithExtension ? 'visible' : 'hidden'\"\n                  [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n                  {{uploadImages?.value?.schoolSymbolFileNameWithExtension}}</div>\n              </div>\n            </div>\n          </div>\n          <div fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bl-1\">\n            <div class=\"border symbolImage\">\n              <img class=\"radius-5 w-80 h-80\" [src]=\"logoImgProp?.src\" *ngIf=\"logoImgProp?.src\" alt=\"Launchship\" />\n            </div>\n          </div>\n          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"start center\" class=\"pt-44\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\" class=\"img-upload\">\n              <mat-label class=\"font-size-18 pr-12\">\n                <div translate>School</div>\n                <div><span translate>Name Logo</span>:</div>\n              </mat-label>\n              <div>\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                  (click)=\"nameImgInput.value='';nameImgInput.click()\">{{'Upload Image' | translate}}</button>\n                <button mat-icon-button [style.visibility]=\"nameImgProp?.src ? 'visible' : 'hidden'\"\n                  (click)=\"nameImgInput.value='';clearImages()\">\n                  <mat-icon class=\"mb-4 grey-600-fg\">highlight_off</mat-icon>\n                </button>\n                <input (change)=\"imgChanged(nameImgInput.files)\" [accept]=\"'image/*'\" fxHide type=\"file\" #nameImgInput>\n                <div class=\"pt-4 primary-300-fg font-size-12\">(<span translate>Preferred</span> 4:1)</div>\n                <!-- {{nameImgProp?.width}}px X {{nameImgProp?.height}}px -->\n                <div class=\"pt-8 logo-name break-word\"\n                  [style.visibility]=\"uploadImages?.value?.schoolNameFileNameWithExtension ? 'visible' : 'hidden'\"\n                  [style.display]=\"nameImgProp?.src ? 'block' : 'none'\">\n                  {{uploadImages?.value?.schoolNameFileNameWithExtension}}</div>\n              </div>\n            </div>\n\n          </div>\n          <div fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"pt-24 pt-sm-48 bl-1\">\n            <div class=\"border nameImage\">\n              <img [src]=\"nameImgProp?.src\" *ngIf=\"nameImgProp?.src\"\n                title=\"Launchship Technology Solutions Private Limited\" alt=\"Launchship\" />\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-sm-20 py-24 mt-sm-24\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"sequenceForm\" [completed]=\"stepper.selectedIndex > 6\" [optional]=\"isSequenceOptional(sequenceForm?.value)\"\n      *ngIf=\"isSequenceStepRequired\">\n      \n      <form [formGroup]=\"sequenceForm\" (ngSubmit)=\"onSubmit(sequenceForm,false);onSequenceSubmit(sequenceForm)\"\n        #sequenceFormData=\"ngForm\">\n        <ng-template matStepLabel translate><span translate>Sequence Configuration</span></ng-template>\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n            <mat-label #sequenceCategoryId translate>Sequence Category</mat-label>\n            <mat-select formControlName=\"sequenceCategoryId\" required>\n              <mat-option value=\"option1\" *ngFor=\"let sequencecategorytype of sequenceCategoryTypesdropdown\"\n                [value]=\"sequencecategorytype.id\" ngDefaultControl>\n                {{sequencecategorytype.name}}\n              </mat-option>\n            </mat-select>\n\n            <mat-error>\n              <app-validation [labelName]='sequenceCategoryId.innerText'\n                [validationControl]=\"sequenceForm.controls.sequenceCategoryId\" [doValidate]=\"sequenceFormSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"px-sm-20\"\n            fxFlex.gt-sm=\"30\">\n            <mat-label #sequenceParameterId translate>Sequence Parameter</mat-label>\n            <mat-select formControlName=\"sequenceParameterId\" (selectionChange)=\"onSequenceSelect($event)\"\n              [required]=\"submitted ? false : true\">\n              <mat-option value=\"option1\" *ngFor=\"let sequenceparameterType of sequnceParameterList\"\n                [disabled]=\"sequenceparameterType.disabled\" [value]=\"sequenceparameterType.value\" ngDefaultControl>\n                {{sequenceparameterType.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n            <mat-label #sequencecode translate>{{dynamicPlaceholder | translate}}</mat-label>\n            <input matInput #sequenceCode [required]=\"sequenceCodeRequired ? true : false\"\n              formControlName=\"sequencecode\" (keydown.space)=\"$event.preventDefault()\">\n            <mat-error>\n              <app-validation [labelName]='sequencecode.innerText'\n                [validationControl]=\"sequenceForm.controls.sequencecode\" [doValidate]=\"'true'\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <div fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" class=\"w-144\">\n            <button mat-raised-button class=\"mx-12 mt-16 text-uppercase\" [disabled]=\"isValid\" type=\"button\"\n              color=\"accent\"\n              (click)=\"onSequenceYes(sequenceForm.controls.sequenceParameterId.value)\">{{'Select' | translate}}</button>\n          </div>\n        </div>\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-12 pt-sm-20\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label #sequenceformat translate>Sequence Format</mat-label>\n            <input matInput formControlName=\"sequenceformat\" autocomplete=\"off\" readonly required>\n            <mat-error>\n              <span>{{requiredSequence}}</span>\n            </mat-error>\n          </mat-form-field>\n          <div>\n            <button mat-icon-button class=\"ml-12 mt-16\" type=\"button\" (click)=\"onClearSequenceFormat()\">\n              <mat-icon>clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-24 mr-12\">\n          <button mat-raised-button color=\"primary\" class=\"mr-12 text-uppercase\" type=\"button\"\n            (click)=\"sequenceCancel()\">{{'Reset' | translate}}</button>\n          <button mat-raised-button class=\"text-uppercase\" type=\"submit\" color=\"accent\">{{'Add' | translate}}</button>\n        </div>\n      </form>\n      <table class=\"mat-elevation-z3 simple clickable radius-10 my-20\" fxFlex=\"100\">\n        <thead>\n          <tr>\n            <th class=\"text-left\" translate>Sequence Category</th>\n            <th class=\"text-left\" translate>Sequence</th>\n            <th class=\"text-left\" translate>Starting Sequence</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let sequence of sequenceDetails\">\n            <td>{{sequence.sequenceCategory}}</td>\n            <td>{{sequence.sequence}}</td>\n            <td>{{sequence.startingSequence}}</td>\n            <td class=\"text-right py-4\"><button mat-icon-button (click)=\"onSequenceDelete(sequence)\">\n                <mat-icon>delete</mat-icon>\n              </button></td>\n          </tr>\n          <tr>\n            <td colspan=\"4\" class=\"text-center p-24\" *ngIf=\"!sequenceDetails.length\">No Data Found</td>\n          </tr>\n        </tbody>\n      </table>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-sm-20 py-24 mt-sm-24\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel><span translate>Done</span></ng-template>\n      <div fxFlex=\"80\" class=\"font-size-20 py-12\" translate>confirmInformation</div>\n\n      <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n        class=\"institution-details pt-0 confirm-table border btfs\">\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>School Name</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{school?.controls?.name?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>UI Theme</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{getBillingCycle('theme',school.controls?.uiThemeId?.value)}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Institution Licence</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"> <span class=\"pr-4\">:</span>{{getBillingCycle('licence',school.controls?.licenceId?.value)}}</div>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"currencyTypes?.length\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Currency Name</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{getBillingCycle('currency',school.controls?.currencyId?.value)}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Code</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{school.controls?.schoolCode?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n        </mat-list-item>\n\n        <div fxLayout=\"column\" class=\"pl-16 py-16 font-size-18 accent-fg border-bottom border-top\"\n          *ngIf=\"boardForm.controls?.schoolBoardViewModel?.value?.length > 1\" fxFlex.gt-xs=\"100\">\n          <strong translate>boarddetails</strong>\n        </div>\n\n        <div fxLayout=\"row\" class=\"pl-16 py-12\" fxFlex=\"100\" fxFlexFill\n          *ngFor=\"let board of boardForm.controls?.schoolBoardViewModel.value | slice:1;let f = first;\">\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"50\"><span><strong><span translate>Board</span></strong>:\n              {{getBillingCycle('board',board?.boardId)}}</span></div>\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"50\"><span> <strong><span translate>Affiliation Code</span></strong>:\n              {{board?.affiliationCode}}</span></div>\n        </div>\n\n        <!-- <mat-list-item *ngIf=\"(boardForm.controls?.schoolBoardViewModel.value?.length-1) % 2\" fxLayout=\"column\"\n          fxFlex.gt-xs=\"50\">\n        </mat-list-item> -->\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlexFill fxFlex=\"50\" fxLayoutAlign=\"start\"><strong><span\n                translate>Address</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{getCustomAddress()}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" class=\"two-rows\">\n          <div fxLayout=\"row wrap\" fxFlexFill fxFlex=\"100\">\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"100\" class=\"px-16\">\n              <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>state</span> </strong></div>\n              <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{getBillingCycle('state',address?.controls?.stateId?.value)}}</div>\n            </mat-list-item>\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"100\" class=\"px-16\">\n              <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>country</span></strong></div>\n              <div fxLayout=\"row\" fxFlex=\"50\">\n                <span class=\"pr-4\">:</span>{{getBillingCycle('country',address?.controls?.countryId?.value)}}</div>\n            </mat-list-item>\n          </div>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"address?.controls?.city?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>city</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{address?.controls?.city?.value}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>pincode</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{address?.controls?.pincode?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>mobilenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{finalMobileNumbers.mobileTel}}</div>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"contact?.controls?.otherTel?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>alternatenumber</span></strong></div>\n          <div *ngIf=\"contact?.controls?.otherTel?.value\" fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{finalMobileNumbers.otherTel}}\n          </div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" *ngIf=\"contact?.controls?.landTel?.value\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>landlinenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{finalMobileNumbers.landTel}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>email1</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{contact?.controls?.email1?.value}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" *ngIf=\"contact?.controls?.email2?.value\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>email 2</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{contact?.controls?.email2?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"contact?.controls?.website?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>website</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{contact?.controls?.website?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Moderate Parent Teacher Messages</span></strong>\n          </div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.moderateCommunication?.value ?'Yes':'No'}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Moderate Student Health Records\n                Updates</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.moderateStudentRecordUpdates?.value ?'Yes':'No'}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Moderate Test Schedule Notifications</span></strong>\n          </div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.moderateTestNotifications?.value ?'Yes':'No'}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Moderate Event Posting Notifications</span></strong>\n          </div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.moderateEventNotifications?.value ?'Yes':'No'}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Moderate Assignments Notifications</span></strong>\n          </div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.moderateAssignmentNotifications?.value ?'Yes':'No'}}\n          </div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Online Student Applications</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{settings?.controls?.allowOnlineStudentApplications?.value ?'Yes':'No'}}\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Date Format</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span> {{getBillingCycle('date',settings?.controls?.dateFormatTypeId?.value)}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Name Format</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\">\n            <span class=\"pr-4\">:</span>{{getBillingCycle('name',settings?.controls?.personNameFormatTypeId?.value)}}\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"border-right py-8\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>symbollogo:</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\"></span>\n            <img class=\"w-60 h-60 primary-bg\" [src]=\"logoImgProp?.src\" *ngIf=\"logoImgProp?.src\" alt=\"Launchship\" />\n          </div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" class=\"py-8\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>namelogo:</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\"></span>\n            <img class=\"primary-bg  name-logo\" [src]=\"nameImgProp?.src\" *ngIf=\"nameImgProp?.src\" alt=\"Launchship\" />\n          </div>\n        </mat-list-item>\n\n      </mat-list>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n        <button mat-raised-button matStepperPrevious type=\"submit\"\n          class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n          (click)=\"isUpdateForm ? updatedSchool() : submitSchool()\">{{(isUpdateForm ? 'Update' : 'Submit') | translate}}\n        </button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n</div>\n<ng-template #success>\n  <div [@animate]=\"{value:'*',params:{delay:'300ms',x:'-25px'}}\"\n    class=\"mx-sm-48 mt-48 h1 font-weight-800 message-box success\" translate fxLayoutAlign=\"center center\" id=\"success-header\">\n    <mat-icon class=\"mr-4\">check_circle</mat-icon>Success\n  </div>\n  <div fxLayout=\"column\" class=\"mat-elevation-z3 simple-table-container p-24 radius-5 mx-sm-48\">\n    <div class=\"font-size-18 secondary-text text-center\" translate>\n      <div class=\"pb-4\"> School has been succesfully created.</div>\n      <div> Would you like to create an Administrative User for the School that you have just created ?</div>\n      <div class=\"pb-20\"> Click Yes to Create a user who can Administer this School or No to go to the School Details.\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-20\">\n      <button mat-raised-button type=\"button\" class=\"text-uppercase mr-12\"\n        [routerLink]=\"['/manage-school/school-details']\" routerLinkActive=\"router-link-active\">\n        <span translate>No</span>\n      </button>\n      <button mat-raised-button type=\"button\" [routerLink]=\"['/manage-school/school-users/', setSchool.id]\"\n        routerLinkActive=\"router-link-active\"\n         class=\"text-uppercase accent\">\n        <span translate>Yes</span>\n      </button>\n    </div>\n  </div>\n</ng-template> \n"

/***/ }),

/***/ "./src/app/modules/school-admin/manage-school/manage-school.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/school-admin/manage-school/manage-school.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table.edit-settings ::ng-deep .mat-list-item-content {\n  width: 80%; }\n\n.confirm-table.edit-settings .mat-list-item:nth-of-type(odd) {\n  border-right: none; }\n\n.confirm-table.edit-settings .mat-list-item:first-child {\n  border-top: none; }\n\n.name-logo {\n  border-radius: 5px;\n  width: 220px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  max-height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL21hbmFnZS1zY2hvb2wvbWFuYWdlLXNjaG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQ0osRUFBQTs7QUFISjtFQVNRLGtCQUFrQixFQUFBOztBQVQxQjtFQVlRLGdCQUFlLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zY2hvb2wtYWRtaW4vbWFuYWdlLXNjaG9vbC9tYW5hZ2Utc2Nob29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tdGFibGUuZWRpdC1zZXR0aW5nc3tcbiAgICA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICAgICAgd2lkdGg6ODAlXG4gICAgfVxuICAgIC8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICAvLyAgICAgbWFyZ2luOjA7XG4gICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIC8vICB9XG4gICAgIC5tYXQtbGlzdC1pdGVtOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICAgIC5tYXQtbGlzdC1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgICBib3JkZXItdG9wOm5vbmU7XG4gICAgfVxufVxuLm5hbWUtbG9nb3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/school-admin/manage-school/manage-school.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/school-admin/manage-school/manage-school.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSchoolComponent", function() { return ManageSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_manage_institution_institution_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/manage-institution/institution.service */ "./src/app/service/manage-institution/institution.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sequence-configuration/sequence-configuration.component */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts");
/* harmony import */ var app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/academic-service/api/sequence.service */ "./src/app/service/academic-service/api/sequence.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");




















var ManageSchoolComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageSchoolComponent, _super);
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function ManageSchoolComponent(_formBuilder, sanitizer, cd, uiTheme, countryService, stateService, institutionService, commonService, storeService, dialogRef, gradeSetupService, schoolService, router, route, sequenceConfiguratonService, snackBar) {
        var _this = _super.call(this, commonService, dialogRef, sequenceConfiguratonService, cd, snackBar) || this;
        _this._formBuilder = _formBuilder;
        _this.sanitizer = sanitizer;
        _this.cd = cd;
        _this.uiTheme = uiTheme;
        _this.countryService = countryService;
        _this.stateService = stateService;
        _this.institutionService = institutionService;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.dialogRef = dialogRef;
        _this.gradeSetupService = gradeSetupService;
        _this.schoolService = schoolService;
        _this.router = router;
        _this.route = route;
        _this.sequenceConfiguratonService = sequenceConfiguratonService;
        _this.snackBar = snackBar;
        _this.isUpdateForm = false;
        _this.countryOptionsSelect = [];
        _this.stateOptionsSelect = [];
        _this.schoolBoards = [];
        _this.currencyTypes = [];
        _this.institutionLicences = [];
        _this.dateFormats = [];
        _this.nameFormats = [];
        _this.validate = true;
        _this.loaded = false;
        _this.telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
        _this.intialCountryCode = {
            mobileTel: '+91',
            otherTel: '+91',
            landTel: '+91'
        };
        _this.finalMobileNumbers = {
            mobileTel: '',
            otherTel: '',
            landTel: ''
        };
        _this.interactedStepperIndex = 0;
        _this.sequenceDetails = [];
        _this.isSequenceStepRequired = true;
        _this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this;
    }
    ManageSchoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.school = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            uiThemeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currencyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            licenceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            schoolCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].ATLEAST_ONE_CHARACTER), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]]
        });
        this.boardForm = this._formBuilder.group({
            schoolBoardViewModel: this._formBuilder.array([this.createItem()])
        });
        this.address = this._formBuilder.group({
            line1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            line2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            line3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            countryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stateId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].PINCODE_PATTERN)]]
        });
        this.contact = this._formBuilder.group({
            email1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(90), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].EMAIL_PATTERN)]],
            email2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(90), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].EMAIL_PATTERN)]],
            mobileTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            otherTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            landTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].WEBSITE_PATTERN)]],
        });
        this.settings = this._formBuilder.group({
            moderateCommunication: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            moderateStudentRecordUpdates: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            moderateTestNotifications: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            moderateEventNotifications: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            moderateAssignmentNotifications: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            allowOnlineStudentApplications: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dateFormatTypeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            personNameFormatTypeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.uploadImages = this._formBuilder.group({
            schoolSymbolFileNameWithExtension: [''],
            schoolSymbolFileValue: [''],
            schoolNameFileNameWithExtension: [''],
            schoolNameFileValue: [''],
        });
        this.sequenceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sequenceCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sequenceParameterId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sequencecode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sequenceformat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.sequenceForm.controls['sequencecode'].disable();
        this.schoolService.institutionLicences().subscribe(function (data) {
            if (data.institutionLicenceViewModel) {
                _this.institutionLicences = data.institutionLicenceViewModel;
            }
            _this.cd.detectChanges();
        });
        this.uiTheme.getUiThemes().subscribe(function (responseData) {
            _this.availableThemes = responseData.uiThemes;
        });
        this.countryService.countryAllCountriesGet().subscribe(function (data) {
            _this.countryOptionsSelect = data.commonViewModel;
        });
        this.schoolService.getBoards().subscribe(function (data) {
            _this.schoolBoards = data.commonViewModel;
            _this.schoolBoards.forEach(function (element) {
                element.disable = false;
            });
        });
        this.schoolService.currencyTypes().subscribe(function (data) {
            _this.currencyTypes = data.commonViewModel;
        });
        this.schoolService.dateFormatTypes().subscribe(function (data) {
            _this.dateFormats = data.commonViewModel;
        });
        this.schoolService.personNameFormatTypes().subscribe(function (data) {
            _this.nameFormats = data.commonViewModel;
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.isUpdateForm = true;
                _this.data = params.id;
                _this.schoolId = params.id;
                _this.getSchoolDetails(params.id);
                _this.isSequenceStepRequired = false;
            }
            else {
                _this.cd.detectChanges();
                _this.loaded = true;
                _this.cd.detectChanges();
                _this.isSequenceStepRequired = true;
            }
        });
        this.intializeModel();
        this.sequenceCategoryData();
        this.sequenceParametersData();
        this.onSequenceYes(null);
    };
    ManageSchoolComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel');
        if (!this.schoolBoardViewModel.controls[0].value.boardId) {
            this.resetBoards();
        }
        if (event.selectedIndex === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SEQUENCE_INDEX) {
            event.selectedStep.interacted = false;
            this.sequenceCancel();
        }
    };
    ManageSchoolComponent.prototype.addItem = function (board) {
        if (!board.boardId) {
            this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel');
            this.schoolBoardViewModel.controls[0].patchValue({ boardId: '' });
        }
        if (!this.isBoardAlreadyExist(board.boardId) && board.boardId) {
            this.schoolBoards.forEach(function (element) {
                if (element.id === board.boardId) {
                    element.disable = true;
                }
            });
            this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel');
            this.schoolBoardViewModel.push(this.createItem(this.schoolBoardViewModel.value[0].boardId, this.schoolBoardViewModel.value[0].affiliationCode));
            this.resetBoards();
        }
    };
    ManageSchoolComponent.prototype.resetBoards = function () {
        this.schoolBoardViewModel.controls[0].reset();
        this.schoolBoardViewModel.controls[0].updateValueAndValidity();
    };
    ManageSchoolComponent.prototype.isBoardAlreadyExist = function (value) {
        var myArray = this.boardForm.controls['schoolBoardViewModel'].value;
        var data = myArray.filter(function (item, index) {
            if (index && item.boardId === value) {
                return true;
            }
        });
        return data.length ? true : false;
    };
    ManageSchoolComponent.prototype.resetFormArrayOnIndex = function (i, board) {
        this.schoolBoards.forEach(function (element) {
            if (element.id === board.boardId) {
                element.disable = false;
            }
        });
        this.schoolBoardViewModel.removeAt(i);
    };
    ManageSchoolComponent.prototype.createItem = function (boardId, code, id) {
        if (boardId === void 0) { boardId = ''; }
        if (code === void 0) { code = ''; }
        if (id === void 0) { id = 0; }
        if (this.isUpdateForm) {
            return this._formBuilder.group({
                id: id,
                boardId: boardId,
                affiliationCode: [code, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
            });
        }
        else {
            return this._formBuilder.group({
                boardId: boardId,
                affiliationCode: [code, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
            });
        }
    };
    ManageSchoolComponent.prototype.onCancel = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_16__["RouteConfig"]._School]);
    };
    ManageSchoolComponent.prototype.onError = function (obj, label) {
        if (!obj && this.contact.value[label] !== '') {
            this.contact.get(label).setErrors({ 'invalid_mobile': true });
        }
    };
    ManageSchoolComponent.prototype.intializeModel = function () {
        this.schoolBoardModel = {
            boardId: 0,
            affiliationCode: ''
        };
        this.schoolBoardUpdateModel = {
            id: 0,
            boardId: 0,
            affiliationCode: '',
        };
        this.schoolInfo = {
            name: '',
            schoolCode: '',
            currencyId: 0,
            licenceId: 0,
            dateFormatTypeId: 0,
            personNameFormatTypeId: 0,
            schoolBoardViewModel: [this.schoolBoardModel],
            line1: '',
            line2: '',
            line3: '',
            city: '',
            stateId: 0,
            pincode: '',
            countryId: 0,
            website: '',
            email1: '',
            email2: '',
            mobileTel: '',
            landTel: '',
            otherTel: '',
            moderateCommunication: 0,
            moderateStudentRecordUpdates: 0,
            moderateTestNotifications: 0,
            moderateEventNotifications: 0,
            moderateAssignmentNotifications: 0,
            allowOnlineStudentApplications: 0,
            uiThemeId: 0,
            schoolSymbolFileNameWithExtension: '',
            schoolSymbolFileValue: '',
            schoolNameFileNameWithExtension: '',
            schoolNameFileValue: '',
        };
        this.schoolUpdateInfo = {
            id: '',
            name: '',
            schoolCode: '',
            currencyId: 0,
            dateFormatTypeId: 0,
            personNameFormatTypeId: 0,
            schoolBoardUpdateView: [this.schoolBoardUpdateModel],
            line1: '',
            line2: '',
            line3: '',
            city: '',
            stateId: 0,
            pincode: '',
            countryId: 0,
            website: '',
            email1: '',
            email2: '',
            mobileTel: '',
            landTel: '',
            otherTel: '',
            moderateCommunication: 0,
            moderateStudentRecordUpdates: 0,
            moderateTestNotifications: 0,
            moderateEventNotifications: 0,
            moderateAssignmentNotifications: 0,
            allowOnlineStudentApplications: 0,
            uiThemeId: 0,
            schoolSymbolFileNameWithExtension: '',
            schoolSymbolFileValue: '',
            schoolNameFileNameWithExtension: '',
            schoolNameFileValue: '',
        };
    };
    ManageSchoolComponent.prototype.setImageProperties = function (image, logo) {
        if (logo === void 0) { logo = false; }
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        if (logo) {
            this.logoImgProp = {};
            this.logoImgProp = data;
        }
        else {
            this.nameImgProp = {};
            this.nameImgProp = data;
        }
        this.cd.detectChanges();
    };
    ManageSchoolComponent.prototype.onChange = function (value, formControlerName) {
        if (value.checked === true) {
            this.settings.controls[formControlerName].setValue(1);
        }
        else {
            this.settings.controls[formControlerName].setValue(0);
        }
    };
    ManageSchoolComponent.prototype.getCustomAddress = function () {
        var address = '';
        for (var keys in this.address.controls) {
            if (keys === 'line1' || keys === 'line2' || keys === 'line3') {
                if (this.address.controls[keys].value) {
                    address += this.address.controls[keys].value + ',';
                }
            }
        }
        return address = address.replace(/,+/g, ',').replace(/,\s*$/, '');
    };
    ManageSchoolComponent.prototype.getSchoolDetails = function (id) {
        var _this = this;
        this.schoolService.schoolDetails(this.data)
            .subscribe(function (data) {
            var formNames = ['school', 'address', 'contact', 'settings'];
            var that = _this;
            var _loop_1 = function (i) {
                Object.keys(_this[formNames[i]]['controls']).forEach(function (key) {
                    that[formNames[i]].controls[key].setValue(data.schoolData[key]);
                    if (key === 'mobileTel' || key === 'otherTel' || key === 'landTel') {
                        that.updateCountryCode(key, data.schoolData[key]);
                    }
                });
            };
            for (var i = 0; i < formNames.length; i++) {
                _loop_1(i);
            }
            _this.loaded = true;
            if (data.schoolData['brandingSymbolLogo']) {
                var imgUrl = _this.storeService.getFilePath(data.schoolData['brandingSymbolLogo'].filename);
                _this.storeService.storeFileEncryptByFileNameGet(data.schoolData['brandingSymbolLogo'].filename)
                    .subscribe(function (result) {
                    if (result) {
                        _this.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue(result.fileNameWithExtension);
                        _this.uploadImages.controls.schoolSymbolFileValue.patchValue(result.value);
                    }
                });
                _this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
            }
            if (data.schoolData['institutionLicenseSchools']) {
                _this.school.controls.licenceId.setValue(data.schoolData['institutionLicenseSchools'].licenseId);
            }
            _this.updateSchoolBoards(data.schoolData['schoolBoards']);
            if (data.schoolData['brandingNameLogo']) {
                var imgUrl = _this.storeService.getFilePath(data.schoolData['brandingNameLogo'].filename);
                _this.storeService.storeFileEncryptByFileNameGet(data.schoolData['brandingNameLogo'].filename)
                    .subscribe(function (result) {
                    if (result) {
                        _this.uploadImages.controls.schoolNameFileNameWithExtension.patchValue(result.fileNameWithExtension);
                        _this.uploadImages.controls.schoolNameFileValue.patchValue(result.value);
                    }
                });
                _this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);
            }
            if (data.schoolData['countryId']) {
                _this.countryChanged({ value: data.schoolData['countryId'] }, data.schoolData['stateId']);
            }
            _this.stepper._steps._results.map(function (x) {
                x.interacted = true;
            });
            _this.interactedStepperIndex = _this.stepper._steps._results.length;
            _this.customSteperLabelChange();
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    };
    ManageSchoolComponent.prototype.updateSchoolBoards = function (schoolBoards) {
        this.boardForm.setControl('schoolBoardViewModel', this._formBuilder.array([this.createItem()]));
        if (schoolBoards) {
            var _loop_2 = function (board) {
                this_1.schoolBoards.forEach(function (element) {
                    if (element.id === board.boardId) {
                        element.disable = true;
                    }
                });
                this_1.schoolBoardViewModel = this_1.boardForm.get('schoolBoardViewModel');
                this_1.schoolBoardViewModel.push(this_1.createItem(board.boardId, board.affiliationCode, board.id));
                this_1.schoolBoardViewModel.controls[0].patchValue({ boardId: 0, affiliationCode: '' });
            };
            var this_1 = this;
            for (var _i = 0, schoolBoards_1 = schoolBoards; _i < schoolBoards_1.length; _i++) {
                var board = schoolBoards_1[_i];
                _loop_2(board);
            }
        }
    };
    Object.defineProperty(ManageSchoolComponent.prototype, "addNewRowSchform", {
        get: function () {
            return this.boardForm.get('schoolBoardViewModel');
        },
        enumerable: true,
        configurable: true
    });
    ManageSchoolComponent.prototype.onBlurAffCode = function (i, value) {
        this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel');
        this.schoolBoardViewModel.controls[i].patchValue({ affiliationCode: this.commonService.trimSpaces(value) });
    };
    ManageSchoolComponent.prototype.updateCountryCode = function (key, val) {
        if (val) {
            var data = val.split(' ');
            if (data[0] !== val) {
                this.intialCountryCode[key] = data[0];
                this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
            }
            else {
                this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
            }
        }
    };
    ManageSchoolComponent.prototype.getNumber = function (e, label) {
        this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
    };
    ManageSchoolComponent.prototype.onCountryChangeMobile = function (e, label) {
        if (this.isEmptyObject(e)) {
            return;
        }
        this.intialCountryCode[label] = '+' + e.dialCode;
        this.contact.controls[label].setValue('');
    };
    ManageSchoolComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    ManageSchoolComponent.prototype.countryChanged = function (e, stateValue) {
        var _this = this;
        if (stateValue === void 0) { stateValue = 0; }
        this.address.controls['stateId'].patchValue('');
        if (e.value) {
            this.stateOptionsSelect = [];
            this.stateService.stateAllStatesGet(e.value).subscribe(function (data) {
                _this.stateOptionsSelect = data.states;
                if (stateValue) {
                    _this.address.controls['stateId'].patchValue(stateValue);
                }
            });
        }
    };
    ManageSchoolComponent.prototype.imgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], 'image', 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            var image;
            image = new Image();
            image.src = reader.result;
            image.onload = function () {
                that.setImageProperties(image, logo);
                if (logo) {
                    that.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue(files[0].name);
                    that.uploadImages.controls.schoolSymbolFileValue.patchValue(reader.result.split(',')[1]);
                }
                else {
                    that.uploadImages.controls.schoolNameFileNameWithExtension.patchValue(files[0].name);
                    that.uploadImages.controls.schoolNameFileValue.patchValue(reader.result.split(',')[1]);
                }
                that.cd.detectChanges();
            };
        };
    };
    ManageSchoolComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue('');
            this.uploadImages.controls.schoolSymbolFileValue.patchValue('');
        }
        else {
            this.nameImgProp = {};
            this.uploadImages.controls.schoolNameFileNameWithExtension.patchValue('');
            this.uploadImages.controls.schoolNameFileValue.patchValue('');
        }
        this.cd.detectChanges();
    };
    ManageSchoolComponent.prototype.submitSchool = function () {
        var _this = this;
        if (this.setModelData('schoolInfo')) {
            this.schoolInfo['schoolBoardViewModel'] = this.boardForm.controls['schoolBoardViewModel'].value.filter(function (data, index) { return index > 0; });
            this.schoolInfo.schoolSequences = this.listOfSequences;
            this.schoolService.addSchool(this.schoolInfo)
                .subscribe(function (res) { return _this.afterSubmittingData(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    ManageSchoolComponent.prototype.setModelData = function (model) {
        var _this = this;
        var formNames = ['school', 'address', 'contact', 'settings', 'uploadImages'];
        var _loop_3 = function (i) {
            Object.keys(this_2[formNames[i]]['controls']).forEach(function (key) {
                switch (key) {
                    case 'mobileTel':
                    case 'otherTel':
                    case 'landTel':
                        _this[model][key] = _this.checkemptyNumber(_this[formNames[i]].get(key).value, key);
                        break;
                    default:
                        _this[model][key] = _this[formNames[i]].get(key).value;
                        break;
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < formNames.length; i++) {
            _loop_3(i);
        }
        return true;
    };
    ManageSchoolComponent.prototype.checkemptyNumber = function (number, key) {
        if (number) {
            return this.finalMobileNumbers[key];
        }
        else {
            return '';
        }
    };
    ManageSchoolComponent.prototype.updatedSchool = function () {
        var _this = this;
        if (this.setModelData('schoolUpdateInfo') && this.schoolId) {
            this.schoolUpdateInfo['id'] = this.schoolId;
            this.schoolUpdateInfo['schoolBoardUpdateView'] = this.boardForm.controls['schoolBoardViewModel'].value.filter(function (data, index) { return index > 0; });
            this.schoolService.updateSchool(this.schoolUpdateInfo)
                .subscribe(function (res) { return _this.afterSubmittingData(res); }, function (error) {
                if (error.error) {
                    _this.errorMessages = Object.values(error.error);
                    _this.errorsList = _this.errorMessages;
                    if (_this.errorsList.length) {
                        if (error.error.messages) {
                            var resultMessage = error.error.messages.ResultMessage;
                            _this.openSnackBar(resultMessage, true);
                            _this.schoolService.schoolDetails(_this.data)
                                .subscribe(function (data) {
                                _this.updateSchoolBoards(data.schoolData['schoolBoards']);
                            });
                        }
                    }
                    else {
                        _this.openSnackBar(_this.errorMessages[0].ResultMessage, true);
                    }
                }
            });
        }
    };
    ManageSchoolComponent.prototype.afterSubmittingData = function (data) {
        this.commonService.sendSchoolId();
        if (this.isUpdateForm) {
            this.setSchool = {
                id: this.schoolUpdateInfo['id'],
                name: this.schoolUpdateInfo.name,
                code: this.schoolUpdateInfo.schoolCode
            };
            this.openSnackBar(data.messages.ResultMessage);
            this.onCancel();
        }
        else {
            this.hideStepper = true;
            this.setSchool = {
                id: data.schoolId,
                name: this.schoolInfo.name,
                code: this.schoolInfo.schoolCode
            };
            this.cd.detectChanges();
            this.scrollIntoViewById('success-header');
        }
        localStorage.setItem('_s', JSON.stringify(this.setSchool));
    };
    /**
     * Changes the step to the index specified
     * @param {number} index The index of the step
     */
    ManageSchoolComponent.prototype.changeStep = function (index) {
        this.stepper.selectedIndex = index;
        this.cd.detectChanges();
    };
    ManageSchoolComponent.prototype.getBillingCycle = function (name, value) {
        if (value === '' || value === 0) {
            return '';
        }
        var x;
        switch (name) {
            case 'theme':
                if (this.availableThemes) {
                    x = this.availableThemes.filter(function (element) { return element.id === value; });
                }
                return (x !== undefined && x.length > 0) ? x[0].name : '';
                break;
            case 'currency':
                return (x = this.currencyTypes.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'licence':
                return (x = this.institutionLicences.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'country':
                return (x = this.countryOptionsSelect.filter(function (element) { return element.id === value; })).length > 0 ? x[0].name : '';
            case 'state':
                return (x = this.stateOptionsSelect.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'date':
                return (x = this.dateFormats.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'name':
                return (x = this.nameFormats.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'board':
                return (x = this.schoolBoards.filter(function (element) { return element.id === value; })).length ? x[0].name + ' - ' + x[0].code : '';
            default: break;
        }
    };
    ManageSchoolComponent.prototype.getImagesInfo = function () {
        var imagesData = '';
        if (this.logoImgProp) {
            imagesData = this.logoImgProp.src ? 'school symbol logo,' : '';
        }
        if (this.nameImgProp) {
            imagesData += this.nameImgProp.src ? 'school name logo' : '';
        }
        return imagesData.replace(/,\s*$/, '');
    };
    // trim
    ManageSchoolComponent.prototype.trim = function (res) {
        this.preventSpace(res);
    };
    ManageSchoolComponent.prototype.onSequenceSubmit = function (data) {
        if (data.valid) {
            var index = this.sequenceDetails.findIndex(function (x) { return x.sequenceCategoryId === data.value.sequenceCategoryId; });
            if (index !== -1) {
                this.sequenceDetails.splice(index, 1);
            }
            this.sequenceDetails.push({
                sequenceCategoryId: data.value.sequenceCategoryId,
                sequenceCategory: this.sequenceCategoryTypesdropdown.filter(function (x) { return x.id === data.value.sequenceCategoryId; }).map(function (y) { return y.name; }),
                sequence: data.value.sequenceformat,
                startingSequence: this.sequenceNumber,
            });
            this.sequenceNumber = '';
            this.codesArray = [];
            this.sequenceForm.reset();
            this.test.resetForm();
            this.sequnceParameterList.forEach(function (sequence) {
                sequence.disabled = false;
            });
        }
    };
    ManageSchoolComponent.prototype.onCheckSequence = function (data) {
        var _this = this;
        setTimeout(function () { return _this.seqCode.nativeElement.focus(); });
    };
    ManageSchoolComponent.prototype.sequenceCancel = function () {
        this.dynamicPlaceholder = '';
        this.isValid = true;
        this.sequenceCodeErrorMsg = '';
        this.requiredSequence = '';
        this.sequnceParameterList.forEach(function (sequence) {
            sequence.disabled = false;
        });
        this.codesArray = [];
        this.closeAddPanel = true;
        this.disableSubmitBtn = false;
        this.startingSequnce = false;
        this.sequenceForm.reset();
        if (this.test) {
            this.test.resetForm();
        }
        this.sequenceForm.controls['sequencecode'].disable();
        this.isSequenceOptional(this.sequenceForm.value);
    };
    ManageSchoolComponent.prototype.onSequenceDelete = function (data) {
        this.sequenceDetails.splice(data, 1);
        this.listOfSequences = [];
    };
    ManageSchoolComponent.prototype.isSequenceOptional = function (obj) {
        var isEmpty = true;
        Object.keys(obj).forEach(function (key) {
            if (obj[key]) {
                isEmpty = false;
                return;
            }
        });
        return isEmpty;
    };
    ManageSchoolComponent.prototype.disableBoardSelect = function () {
        return (!this.boardForm.controls.schoolBoardViewModel.value[0].boardId
            || !this.boardForm.controls.schoolBoardViewModel.value[0].affiliationCode
            || this.boardForm.controls.schoolBoardViewModel.value[0].affiliationCode.length > 25);
    };
    ManageSchoolComponent.prototype.isStepCompleted = function (form) {
        if (form.value.schoolSymbolFileNameWithExtension || form.value.schoolNameFileNameWithExtension) {
            return true;
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ManageSchoolComponent.prototype, "logoImgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageSchoolComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sequenceFormData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageSchoolComponent.prototype, "test", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sequenceCode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ManageSchoolComponent.prototype, "seqCode", void 0);
    ManageSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-school',
            template: __webpack_require__(/*! ./manage-school.component.html */ "./src/app/modules/school-admin/manage-school/manage-school.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_19__["fuseAnimations"],
            providers: [app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"], app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], app_service_manage_institution_institution_service__WEBPACK_IMPORTED_MODULE_13__["InstitutionService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__["GradeSetupService"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"]],
            styles: [__webpack_require__(/*! ./manage-school.component.scss */ "./src/app/modules/school-admin/manage-school/manage-school.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_6__["UIThemeService"], app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            app_service_manage_institution_institution_service__WEBPACK_IMPORTED_MODULE_13__["InstitutionService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__["GradeSetupService"],
            app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_18__["SequenceService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
    ], ManageSchoolComponent);
    return ManageSchoolComponent;
}(_sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_17__["SequenceConfigurationComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/school-admin-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/school-admin/school-admin-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SchoolAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolAdminRoutingModule", function() { return SchoolAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-user/school-user.component */ "./src/app/modules/school-admin/school-user/school-user.component.ts");
/* harmony import */ var _school_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-admin.component */ "./src/app/modules/school-admin/school-admin.component.ts");
/* harmony import */ var _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequence-configuration/sequence-configuration.component */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts");
/* harmony import */ var _edit_settings_edit_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-settings/edit-settings.component */ "./src/app/modules/school-admin/edit-settings/edit-settings.component.ts");
/* harmony import */ var _service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-configuration/service-configuration.component */ "./src/app/modules/school-admin/service-configuration/service-configuration.component.ts");
/* harmony import */ var _manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-school/manage-school.component */ "./src/app/modules/school-admin/manage-school/manage-school.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'school-details'
    },
    {
        path: 'school-details',
        component: _school_admin_component__WEBPACK_IMPORTED_MODULE_4__["SchoolAdminComponent"],
        data: { title: 'School Details' }
    },
    {
        path: 'school-users/:id',
        component: _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_3__["SchoolUserComponent"],
        data: { title: 'School Users' }
    },
    {
        path: 'school-users',
        component: _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_3__["SchoolUserComponent"],
        data: { title: 'School Users' }
    },
    {
        path: 'school-sequence-configuration',
        component: _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_5__["SequenceConfigurationComponent"],
        data: { title: 'School Sequence Configuration' }
    },
    {
        path: 'edit-school-settings',
        component: _edit_settings_edit_settings_component__WEBPACK_IMPORTED_MODULE_6__["EditSettingsComponent"],
        data: { title: 'Edit School Settings' }
    },
    {
        path: 'school-sequence-configuration',
        component: _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_3__["SchoolUserComponent"],
        data: { title: 'School Sequence Configuration' }
    },
    {
        path: 'service-configuration',
        component: _service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_7__["ServiceConfigurationComponent"],
        data: { title: 'Service Configuration' }
    },
    {
        path: 'add-school',
        component: _manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_8__["ManageSchoolComponent"],
        data: { title: 'Add School' }
    },
    {
        path: 'edit-school/:id',
        component: _manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_8__["ManageSchoolComponent"],
        data: { title: 'Edit School' }
    }
];
var SchoolAdminRoutingModule = /** @class */ (function () {
    function SchoolAdminRoutingModule() {
    }
    SchoolAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], SchoolAdminRoutingModule);
    return SchoolAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/school-admin/school-admin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/school-admin/school-admin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.gt-sm=\"center center\" class=\"px-sm-60 mt-32\">\n  <div fxlayout=\"column\" fxFlex=\"30\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" fxLayoutAlign=\"start center\"\n    class=\"text-uppercase pb-20\" translate>manageschools</div>\n  <div fxlayout=\"column\" fxFlex=\"40\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" class=\"px-12\"\n    fxLayoutAlign=\"center center\">\n    <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n      <mat-label #typeid translate>School</mat-label>\n      <mat-select [(ngModel)]=\"schoolid\" (selectionChange)=\"schoolNameDetails($event)\" class=\"one\">\n            <mat-select-trigger *ngIf=\"getSchoolNameByValue(schoolid) !== undefined\">\n              <div fxLayout=\"row\" fxFlex=\"0 1 auto\" class=\"text-truncate\">\n              <div class=\"text-truncate w-80-p\">{{selectedSchoolDetails.name}}</div> \n              <div class=\"w-84 secondary-text pl-4\">({{selectedSchoolDetails.code}})</div>\n            </div>\n          </mat-select-trigger>\n        <mat-option *ngFor=\"let schoolNames of schools\" [value]=\"schoolNames.id\">\n         <div fxLayout=\"row\" fxFlex=\"0 1 auto\" class=\"text-truncate\">\n            <div class=\"text-truncate w-80-p\">{{schoolNames.name}}</div> \n            <div class=\"w-84 secondary-text pl-4\">({{schoolNames.code}})</div>\n          </div>\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div fxlayout=\"column\" fxFlex=\"30\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" fxLayoutAlign=\"end center\"\n    class=\"pb-20\">\n    <button (click)=\"addSchool()\" mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\">{{'addschool' | translate}}\n    </button>\n  </div>\n</div>\n\n<mat-tab-group *ngIf=\"display\" [selectedIndex]=\"index\" (selectedIndexChange)=\"selected($event)\" class=\"manage-institue\">\n\n  <mat-tab label=\"{{'SCHOOL DETAILS' | translate }}\" >\n    <div *ngIf=\"showSchoolDetails\">\n      <app-school-details [data]=\"selectedChanged\"></app-school-details>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'SCHOOL INFRASTRUCTURE' | translate}}\">\n    <div *ngIf=\"showSchoolInfrastructure\">\n      <app-school-infrastructure [data]=\"selectedChanged\"></app-school-infrastructure>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'MANAGE USERS' | translate}}\">\n    <div *ngIf=\"showUsers\">\n      <app-school-user  [data]=\"selectedChanged\"></app-school-user>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'SCHOOL SETTINGS' | translate}}\">\n    <div *ngIf=\"showEditSchoolDetails\">\n      <app-edit-settings [data]=\"selectedChanged\"></app-edit-settings>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'SEQUENCE CONFIGURATION' | translate}}\">\n    <div *ngIf=\"showSequenceConfiguartion\">\n      <app-sequence-configuration [data]=\"selectedChanged\"></app-sequence-configuration>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'SERVICE PROVIDER CONFIGURATION' | translate}}\">\n    <div *ngIf=\"showServiceConfiguration\">\n      <app-service-configuration [data]=\"selectedChanged\"></app-service-configuration>\n    </div>\n  </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/school-admin/school-admin.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/school-admin/school-admin.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/school-admin/school-admin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/school-admin/school-admin.component.ts ***!
  \****************************************************************/
/*! exports provided: SchoolAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolAdminComponent", function() { return SchoolAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var SchoolAdminComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolAdminComponent, _super);
    function SchoolAdminComponent(schoolUserService, router, commonService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.schoolUserService = schoolUserService;
        _this.router = router;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.schools = [];
        _this.display = false;
        // Tab Conditions 
        _this.showUsers = false;
        _this.showSchoolDetails = false;
        _this.index = 0;
        _this.showEditSchoolDetails = false;
        _this.showSequenceConfiguartion = false;
        _this.showServiceConfiguration = false;
        return _this;
    }
    SchoolAdminComponent.prototype.onPopState = function (event) {
        this.switchTabs(window.location.hash);
    };
    SchoolAdminComponent.prototype.ngOnInit = function () {
        // status codes
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.schoolName = JSON.parse(localStorage.getItem('_s'));
        this.schoolName != null ? this.getAllSchools(this.schoolName.id) : this.getAllSchools(null);
        if (!window.location.hash) {
            this.selected(this.index);
        }
        else {
            this.switchTabs(window.location.hash);
        }
    };
    // get All Institutes
    SchoolAdminComponent.prototype.getAllSchools = function (schoolId) {
        var _this = this;
        this.schoolUserService.getSchoolList(schoolId).subscribe(function (response) {
            _this.schools = response.schools;
            if (response.statusCode === _this.HttpStatus.OK && _this.schoolName != null && _this.schoolName.id != null) {
                _this.schools.forEach(function (element) {
                    if (element.isCheck) {
                        _this.schoolName.id = element.id;
                        _this.schoolid = element.id;
                        if (_this.schoolName.id != null && _this.schoolName != null) {
                            _this.display = true;
                        }
                    }
                });
            }
            var selectedSchool = JSON.parse(localStorage.getItem('_s'));
            if (selectedSchool) {
                if (_this.schools.find(function (e) { return e.code === selectedSchool.code; })) {
                    _this.schoolid = _this.schools.find(function (e) { return e.code === selectedSchool.code; }).id;
                    _this.display = true;
                    _this.selectedChanged = _this.schoolid;
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // onSelection of Institute
    SchoolAdminComponent.prototype.schoolNameDetails = function (value) {
        var selectedSchool = this.schools.find(function (e) { return e.id === value.value; });
        localStorage.setItem('_s', JSON.stringify(selectedSchool));
        this.selectedChanged = value.value;
        this.display = true;
        this.selected(this.index);
        this.commonService.dropDown(value.value);
    };
    // End
    // tab Selection
    SchoolAdminComponent.prototype.selected = function (value) {
        this.index = value;
        switch (value) {
            case 0: {
                // statements; 
                this.showSchoolDetails = true;
                this.showSchoolInfrastructure = false;
                this.showEditSchoolDetails = false;
                this.showSequenceConfiguartion = false;
                this.showServiceConfiguration = false;
                this.showUsers = false;
                window.location.hash = '';
                break;
            }
            case 1: {
                this.showSchoolInfrastructure = true;
                this.showSchoolDetails = false;
                this.showEditSchoolDetails = false;
                this.showSequenceConfiguartion = false;
                this.showServiceConfiguration = false;
                this.showUsers = false;
                window.location.hash = 'InfraStructure';
                break;
            }
            case 2: {
                this.showUsers = true;
                this.showSchoolDetails = false;
                this.showEditSchoolDetails = false;
                this.showSequenceConfiguartion = false;
                this.showServiceConfiguration = false;
                this.showSchoolInfrastructure = false;
                window.location.hash = 'Users';
                break;
            }
            case 3: {
                this.showEditSchoolDetails = true;
                this.showSchoolDetails = false;
                this.showUsers = false;
                this.showSequenceConfiguartion = false;
                this.showServiceConfiguration = false;
                this.showSchoolInfrastructure = false;
                window.location.hash = 'EditSchoolDetails';
                break;
            }
            case 4: {
                this.showSequenceConfiguartion = true;
                this.showServiceConfiguration = false;
                this.showSchoolDetails = false;
                this.showUsers = false;
                this.showEditSchoolDetails = false;
                this.showSchoolInfrastructure = false;
                window.location.hash = 'SequenceConfiguration';
                break;
            }
            case 5: {
                this.showServiceConfiguration = true;
                this.showSequenceConfiguartion = false;
                this.showSchoolDetails = false;
                this.showUsers = false;
                this.showEditSchoolDetails = false;
                this.showSchoolInfrastructure = false;
                window.location.hash = 'ServiceProviderConfiguration';
                break;
            }
            default: {
                // statements; 
                break;
            }
        }
    };
    SchoolAdminComponent.prototype.addSchool = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Add_School]);
    };
    // End
    SchoolAdminComponent.prototype.switchTabs = function (value) {
        switch (value) {
            case '': {
                this.index = 0;
                break;
            }
            case '#InfraStructure': {
                this.index = 1;
                break;
            }
            case '#Users': {
                this.index = 2;
                break;
            }
            case '#EditSchoolDetails': {
                this.index = 3;
                break;
            }
            case '#SequenceConfiguration': {
                this.index = 4;
                break;
            }
            case '#ServiceProviderConfiguration': {
                this.index = 5;
                break;
            }
            default: {
                // statements; 
                break;
            }
        }
        this.selected(this.index);
    };
    SchoolAdminComponent.prototype.getSchoolNameByValue = function (value) {
        this.selectedSchoolDetails = this.schools.filter(function (x) { return x.id === value; })[0];
        return this.selectedSchoolDetails;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SchoolAdminComponent.prototype, "onPopState", null);
    SchoolAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-admin',
            template: __webpack_require__(/*! ./school-admin.component.html */ "./src/app/modules/school-admin/school-admin.component.html"),
            styles: [__webpack_require__(/*! ./school-admin.component.scss */ "./src/app/modules/school-admin/school-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], SchoolAdminComponent);
    return SchoolAdminComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/school-admin.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/school-admin/school-admin.module.ts ***!
  \*************************************************************/
/*! exports provided: SchoolAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolAdminModule", function() { return SchoolAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_service_api_license_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/academic-service/api/license-setup.service */ "./src/app/service/academic-service/api/license-setup.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _service_academic_service_api_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/academic-service/api/user.service */ "./src/app/service/academic-service/api/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _school_admin_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./school-admin-routing.module */ "./src/app/modules/school-admin/school-admin-routing.module.ts");
/* harmony import */ var _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./school-user/school-user.component */ "./src/app/modules/school-admin/school-user/school-user.component.ts");
/* harmony import */ var _school_details_school_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./school-details/school-details.component */ "./src/app/modules/school-admin/school-details/school-details.component.ts");
/* harmony import */ var _school_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./school-admin.component */ "./src/app/modules/school-admin/school-admin.component.ts");
/* harmony import */ var _school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./school-infrastructure/school-infrastructure.component */ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.ts");
/* harmony import */ var _edit_settings_edit_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-settings/edit-settings.component */ "./src/app/modules/school-admin/edit-settings/edit-settings.component.ts");
/* harmony import */ var _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sequence-configuration/sequence-configuration.component */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts");
/* harmony import */ var app_service_school_admin_api_school_Infrastructure_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/school-admin/api/school-Infrastructure.service */ "./src/app/service/school-admin/api/school-Infrastructure.service.ts");
/* harmony import */ var app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/academic-service/api/institution.service */ "./src/app/service/academic-service/api/institution.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/service/academic-service/api/sequence.service */ "./src/app/service/academic-service/api/sequence.service.ts");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manage-school/manage-school.component */ "./src/app/modules/school-admin/manage-school/manage-school.component.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service-configuration/service-configuration.component */ "./src/app/modules/school-admin/service-configuration/service-configuration.component.ts");
/* harmony import */ var app_service_communication_serviceConfiguration_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/service/communication/serviceConfiguration.service */ "./src/app/service/communication/serviceConfiguration.service.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");

























// import { CommonService } from 'app/service/common.service';






var SchoolAdminModule = /** @class */ (function () {
    function SchoolAdminModule() {
    }
    SchoolAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _school_admin_component__WEBPACK_IMPORTED_MODULE_14__["SchoolAdminComponent"], _school_details_school_details_component__WEBPACK_IMPORTED_MODULE_13__["SchoolDetailsComponent"], _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_12__["SchoolUserComponent"], _edit_settings_edit_settings_component__WEBPACK_IMPORTED_MODULE_16__["EditSettingsComponent"], _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_17__["SequenceConfigurationComponent"], _manage_school_manage_school_component__WEBPACK_IMPORTED_MODULE_25__["ManageSchoolComponent"],
                _school_details_school_details_component__WEBPACK_IMPORTED_MODULE_13__["SchoolDetailsComponent"], _school_user_school_user_component__WEBPACK_IMPORTED_MODULE_12__["SchoolUserComponent"],
                _school_infrastructure_school_infrastructure_component__WEBPACK_IMPORTED_MODULE_15__["SchoolInfrastructureComponent"], _edit_settings_edit_settings_component__WEBPACK_IMPORTED_MODULE_16__["EditSettingsComponent"], _sequence_configuration_sequence_configuration_component__WEBPACK_IMPORTED_MODULE_17__["SequenceConfigurationComponent"], _service_configuration_service_configuration_component__WEBPACK_IMPORTED_MODULE_28__["ServiceConfigurationComponent"]
                // , ManageSchoolComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _school_admin_routing_module__WEBPACK_IMPORTED_MODULE_11__["SchoolAdminRoutingModule"],
                _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__["MatcomponentsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_26__["Ng2TelInputModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_30__["FuseMaterialColorPickerModule"]
            ],
            providers: [_service_academic_service_api_user_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_19__["InstitutionService"], _service_academic_service_api_license_setup_service__WEBPACK_IMPORTED_MODULE_5__["LicenseSetupService"], app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_21__["CountryService"],
                app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_20__["StateService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_22__["TypeService"], app_service_school_admin_api_school_Infrastructure_service__WEBPACK_IMPORTED_MODULE_18__["SchoolInfrastructureService"], app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_23__["SequenceService"], app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_24__["SchoolService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_27__["StoreService"], app_service_communication_serviceConfiguration_service__WEBPACK_IMPORTED_MODULE_29__["ServiceConfigurationService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], SchoolAdminModule);
    return SchoolAdminModule;
}());



/***/ }),

/***/ "./src/app/modules/school-admin/school-details/school-details.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-details/school-details.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pb-20\">\n  <div class=\"w-100-p mat-elevation-z6 simple-table-container radius-t-20\" fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20 border-bottom gridHeader\">\n      <div class=\"text-right gridRightBtn\" fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"end\">\n        <div class=\"example-button-row\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button (click)=\"editSchool()\" mat-raised-button color=\"accent\" translate class=\"text-uppercase\">{{'edit' | translate}}</button>\n          <button mat-button>\n            <mat-icon class=\"font-size-28 grey-600-fg\" (click)=\"getHelpText('School Details')\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"institution-details pt-0 confirm-table\">\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.name\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>schoolname</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.name}}</div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.schoolCode\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Code</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.schoolCode}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.currencyName\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Currency</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.currencyName}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.schoolRegCode\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>School Registration Code</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.schoolRegCode}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.email1\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Email 1</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.email1}}</div>\n        </mat-list-item>\n  \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.email2\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Email 2</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.email2}}</div>\n        </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.website\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>website</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails?.website}}</div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\">\n        <div fxLayout=\"row\" fxFlexFill fxFlex=\"50\" fxLayoutAlign=\"start\"><strong><span translate>address</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.line1}}</div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.city\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>city</span></strong></div>\n        <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.city}}</div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.state\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>state</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.state}}</div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.country\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>country</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.country}}</div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.pincode\" class=\"border-bottom\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>pincode</span></strong></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.pincode}}</div>\n      </mat-list-item>\n      <!--Two fields-->\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" class=\"two-rows\">\n        <div fxLayout=\"row wrap\" fxFlexFill fxFlex=\"100\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"100\" class=\"px-16\" *ngIf=\"schoolDetails.mobileTel\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>mobilenumber</span></strong></div>\n            <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.mobileTel}}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"100\" class=\"px-16 border-bottom\" *ngIf=\"schoolDetails.otherTel\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>alternatemobilenumber</span></strong></div>\n            <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.otherTel}}</div>\n          </mat-list-item>\n        </div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" *ngIf=\"schoolDetails.landTel\">\n        <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>landlinenumber</span></strong></div>\n        <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{schoolDetails.landTel}}</div>\n      </mat-list-item>\n    </mat-list>\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table\" *ngIf=\"schoolDetails.schoolBoards\">\n      <div fxLayout=\"column\" fxFlex=\"100\" class=\"border-bottom p-16 accent-fg font-size-18\">\n        <div fxLayout=\"row\" fxFlex=\"100\"><strong><span translate>boarddetails</span></strong></div>\n      </div>\n    </mat-list>\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table2 pt-0\">\n      <ng-container *ngFor=\"let item of schoolDetails.schoolBoards; let board=index\">\n        <mat-list-item *ngIf=\"schoolDetails.schoolBoards[board]\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>boardname</span></strong></div>\n          <div class=\"text-truncate\" fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{item.name}}{{item.code ? ' - ' + item.code : ''}}</div>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"schoolDetails.schoolBoards[board]\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>affiliationcode</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{item.affiliationCode}}</div>\n        </mat-list-item>\n      </ng-container>\n    </mat-list>\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table border-top border-bottom\" *ngIf=\"schoolDetails.schoolBoards\">\n      <div fxLayout=\"column\" fxFlex=\"100\" class=\"p-16 accent-fg font-size-18\">\n        <div fxLayout=\"row\" fxFlex=\"100\"><strong><span translate>licencedetails</span></strong></div>\n      </div>\n    </mat-list>\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table2 pt-0\" *ngIf = \"schoolDetails.institutionLicenseSchools\">\n  \n    <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\">\n      <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Billing Cycle</span></strong></div>\n      <div class=\"text\"><span class=\"pr-4\">:</span>{{schoolDetails.institutionLicenseSchools.licenseName}}</div>\n    </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" >\n      <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>numberofschools</span></strong></div>\n      <div class=\"text\"><span class=\"pr-4\">:</span>{{ schoolDetails.institutionLicenseSchools.numberOfSchools}}</div>\n    </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" >\n      <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>billingamount</span></strong></div>\n      <div class=\"text\"><span class=\"pr-4\">:</span>{{ schoolDetails.institutionLicenseSchools.billingAmount}}</div>\n    </mat-list-item>\n  </mat-list>\n \n\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table border-bottom border-top\">\n      <div fxLayout=\"column\" fxFlex=\"100\" class=\"p-16 accent-fg font-size-18\">\n        <div fxLayout=\"row\" fxFlex=\"100\"><strong><span translate>Branding</span></strong></div>\n      </div>\n    </mat-list>\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"confirm-table2 pt-0\">\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"py-8\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>symbollogo:</span></strong></div>\n            <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\"></span>\n              <img class=\"w-60 h-60 primary-bg mat-elevation-z3 radius-10 obj-fit-img\" [src]=\"logoImgProp?.src\" *ngIf=\"logoImgProp?.src\" alt=\"Launchship\" />\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" class=\"py-8\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>namelogo:</span></strong></div>\n            <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\"></span>\n              <img class=\"primary-bg mat-elevation-z3 name-logo\" [src]=\"nameImgProp?.src\" *ngIf=\"nameImgProp?.src\" alt=\"Launchship\" />\n            </div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"50\" >\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>UI Theme</span></strong></div>\n            <div class=\"text\"><span class=\"pr-4\">:</span>{{ schoolDetails.uiThemeName}}</div>\n          </mat-list-item>\n        </mat-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/school-admin/school-details/school-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-details/school-details.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table2 .firstRow {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  word-break: break-word; }\n\n.confirm-table2 .mat-list-item {\n  min-height: 48px;\n  height: auto !important;\n  word-break: break-word;\n  padding: 10px 0px; }\n\n.confirm-table2 .mat-list-item {\n  min-height: 48px;\n  height: auto !important;\n  word-break: break-word;\n  padding: 10px 0px; }\n\n.confirm-table2 .firstRow:last-child {\n  border-bottom: none; }\n\n.confirm-table2 .firstRow:nth-of-type(odd) {\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n.name-logo {\n  border-radius: 5px;\n  width: 220px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  max-height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC1kZXRhaWxzL3NjaG9vbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksNENBQTRDO0VBQzVDLHNCQUFzQixFQUFBOztBQUgxQjtFQU1JLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFnQixFQUFBOztBQVRwQjtFQVlRLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFnQixFQUFBOztBQWZ4QjtFQWtCSSxtQkFBbUIsRUFBQTs7QUFsQnZCO0VBcUJJLDJDQUEyQyxFQUFBOztBQUkzQztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC1kZXRhaWxzL3NjaG9vbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29uZmlybS10YWJsZTIge1xuICAgIC5maXJzdFJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBwYWRkaW5nOjEwcHggMHB4O1xuICAgIH1cbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICBwYWRkaW5nOjEwcHggMHB4O1xuICAgIH1cbiAgICAuZmlyc3RSb3c6bGFzdC1jaGlsZHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICAuZmlyc3RSb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG4gICAgXG4gICAgfVxuICAgIC5uYW1lLWxvZ297XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgfVxuICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/school-admin/school-details/school-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-details/school-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SchoolDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDetailsComponent", function() { return SchoolDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");









var SchoolDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolDetailsComponent, _super);
    function SchoolDetailsComponent(schoolService, router, storeService, sanitizer, cd, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolService = schoolService;
        _this.router = router;
        _this.storeService = storeService;
        _this.sanitizer = sanitizer;
        _this.cd = cd;
        _this.commonService = commonService;
        // variable declarations
        _this.schoolDetails = [];
        _this.defaultImgLogo = 'assets/images/logos/academy-front-logo.png';
        return _this;
    }
    SchoolDetailsComponent.prototype.ngOnInit = function () {
        this.schoolDetailsById();
    };
    SchoolDetailsComponent.prototype.ngOnChanges = function () {
        this.schoolDetailsById();
    };
    SchoolDetailsComponent.prototype.setImageProperties = function (image, logo) {
        if (logo === void 0) { logo = false; }
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        if (logo) {
            this.logoImgProp = {};
            this.logoImgProp = data;
        }
        else {
            this.nameImgProp = {};
            this.nameImgProp = data;
        }
        this.cd.detectChanges();
    };
    // method for get perticular school details based on school Id
    SchoolDetailsComponent.prototype.schoolDetailsById = function () {
        var _this = this;
        this.setImageProperties({ src: null, height: 100, width: 100 }, true);
        this.schoolService.schoolDetails(this.data)
            .subscribe(function (res) { return _this.getResponse(res); });
    };
    // response of school details
    SchoolDetailsComponent.prototype.getResponse = function (res) {
        this.schoolDetails = res.schoolData;
        this.schoolDetails.line1 = [this.schoolDetails.line1, this.schoolDetails.line2, this.schoolDetails.line3].filter(function (val) { return val; }).join(',');
        this.schoolDetails.institutionLicenseSchools.billingAmount = res.schoolData.currencyView.symbol + this.schoolDetails.institutionLicenseSchools.billingAmount;
        if (res.schoolData['brandingSymbolLogo']) {
            var imgUrl = this.storeService.getFilePath(res.schoolData['brandingSymbolLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(res.schoolData['brandingSymbolLogo'].filename)
                .subscribe(function (result) {
                if (result) {
                    return;
                }
            });
            this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
        }
        else {
            this.setImageProperties({ src: this.defaultImgLogo, height: 100, width: 100 }, true);
        }
        if (res.schoolData['brandingNameLogo']) {
            var imgUrl = this.storeService.getFilePath(res.schoolData['brandingNameLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(res.schoolData['brandingNameLogo'].filename)
                .subscribe(function (result) {
                if (result) {
                    return;
                }
            });
            this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);
            this.cd.markForCheck();
        }
        else {
            this.setImageProperties({ src: this.defaultImgLogo, height: 100, width: 100 }, false);
        }
    };
    SchoolDetailsComponent.prototype.editSchool = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"]._Edit_School + this.schoolDetails.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolDetailsComponent.prototype, "data", void 0);
    SchoolDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-details',
            template: __webpack_require__(/*! ./school-details.component.html */ "./src/app/modules/school-admin/school-details/school-details.component.html"),
            styles: [__webpack_require__(/*! ./school-details.component.scss */ "./src/app/modules/school-admin/school-details/school-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_manage_school_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], SchoolDetailsComponent);
    return SchoolDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-28 mb-20 newBuildAdd\" (window:resize)=\"getdeviceSize()\">\n\n  <div class=\"mat-elevation-z8 radius-20 simple-table-container\" [ngClass]=\"desiablePage ? 'add-building-overlay' : '' \"\n    fxLayout=\"column\" id=\"boards\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20 border-bottom events\">\n      <div fxLayout=\"column\" fxFlex=\"70\">\n        <div class=\"font-size-16\" *ngIf=\"buildingFormShow\" translate>Add Building</div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"buildingDetailsShow\">\n          <button mat-raised-button color=\"primary\" class=\"text-uppercase w-76\" (click)=\"onBackClick()\" translate>\n           {{'Back' | translate}}\n          </button>\n          <div class=\"font-size-16 pl-20 text-truncate\">\n            {{buildingDetails?.schoolBuildingName}}\n          </div>\n          <div class=\"px-16 w-152 text-truncate\">\n            <span class=\"secondary-text\" translate>Total Floors:\n              {{floorsCount}}</span>\n          </div>\n          <div class=\"px-16 w-152 text-truncate\">\n            <span class=\"secondary-text\" translate>Total Rooms: {{roomCount}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-right\" fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menuEdit\" class=\"mr-16\" *ngIf=\"buildingDetailsShow\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <button mat-raised-button color=\"accent\" class=\"text-uppercase\" *ngIf=\"buildingDetailsShow\"\n            (click)=\"onAddFloorClick()\">{{'Add Floor' | translate}}</button>\n          <button mat-button (click)=\"getHelpText('School Infrastructure')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n        </div>\n        <mat-menu #menuEdit=\"matMenu\">\n          <button mat-menu-item (click)=\"onBuildingEdit()\">\n            <mat-icon>edit</mat-icon>{{'Edit' | translate}}\n          </button>\n          <button mat-menu-item (click)=\"onBuildingDelete()\">\n            <mat-icon>delete</mat-icon>\n            {{'Delete' | translate}}\n          </button>\n        </mat-menu>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"add-building p-12\" [style.height.px]=\"innerWidth\" *ngIf=\"buildingDetailsShow;let i=index\">\n      <mat-card class=\"card theme-color mat-elevation-z1 m-8 radius-10 p-0\"\n        *ngFor=\"let floor of buildingDetails?.schoolFloors ;let floorIndex=index\" edit-floor-overlay  [ngClass]=\"(desiableForm && !desiableRoomForm && (floorIndex==floorsIndex)) ? 'add-building-overlay' : '' \">\n        <mat-card-header \n         >\n          <mat-card-title class=\"px-8 pt-8\">\n            <!-- Edit Floors -->\n            <div class=\"list new-list\" fxLayout=\"column\"\n              *ngIf=\"(isNewFloor || isFloorEdit) && (floorIndex==floorsIndex)\">\n              <form (ngSubmit)=\"onFloorSubmit(floorsForm,floor.id)\" class=\"new-list-form\" [formGroup]=\"floorsForm\"\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n                <div class=\"add-floor-error\" fxFlex=\"1 0 auto\">\n                  <input formControlName=\"floorName\" class=\"w-100-p border-bottom px-8 py-4 font-size-14\" #floorname fxFlex\n                    placeholder=\"Floor Name\" value=\"{{floor.name}}\" required (keyup)=\"preventSpace($event,'floorsForm','floorName')\" (blur)=\"trimTextBoxSpaces('floorsForm','floorName')\">\n                  <mat-label translate #floorName fxHide translate>Floor Name</mat-label>\n                  <mat-error *ngIf=\"!floorsForm.controls.floorName.valid && floorsForm.controls.floorName.touched\">\n                    <app-validation [labelName]='floorName.innerText'\n                      [validationControl]=\"floorsForm.controls.floorName\" [doValidate]=\"floorIsValid\">\n                    </app-validation>\n                  </mat-error>\n                </div>\n                <button type=\"submit\" [disabled]=\"submitBtnDisable\" mat-icon-button fxFlex=\"0 1 auto\">\n                  <mat-icon>check</mat-icon>\n                </button>\n                <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeFloorForm()\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </form>\n            </div>\n            <!-- End Edit Floors -->\n\n            <!-- Floors  -->\n            <div *ngIf=\"(floor.id=='new'?false:true)\">\n              <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"space-between center\"\n                *ngIf=\"!isFloorEdit||(floorIndex!=floorsIndex)\">\n                <div class=\"secondary-text font-size-16 text-truncate\">{{floor.name}}</div>\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n\n              </div>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editFloorDetails(floorIndex)\">\n                  <mat-icon>edit</mat-icon>{{'Edit' | translate}}\n                </button>\n                <button mat-menu-item (click)=\"deleteFloor(floor)\">\n                  <mat-icon>delete</mat-icon>\n                  {{'Delete' | translate}}\n                </button>\n              </mat-menu>\n            </div>\n            <!-- End Floors -->\n          </mat-card-title>\n        </mat-card-header>\n       \n        <div *ngIf=\"(floor.id==''?false:true)\">\n          <mat-divider></mat-divider>\n          <mat-card-content class=\"pt-8 mb-0 px-8\" *ngFor=\"let room of floor.schoolRooms; let RI=index\"\n          [ngClass]=\"desiableRoomForm && (!editRoomForm) && (floorIndex==floorsIndex)&&(room.id==roomId?true:false) ? 'add-building-overlay' : '' \" id='roomScroll'>\n            <!-- Rooms Details -->\n            <mat-list *ngIf=\"room.id!=roomId?true:false\" class=\"simple-table-container border\">\n              <mat-list-item class=\"border-bottom\">\n                <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center center\">\n                  <div fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\" translate>Room Name</div>\n                  <div fxLayout=\"column\" fxFlex=\"40\">{{room.name}}</div>\n                  <div fxLayout=\"column\" fxFlex=\"10\">\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                      <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                      <button mat-menu-item (click)=\"onRoomEdit(room,room.id,floorIndex)\">\n                        <mat-icon>edit</mat-icon>Edit\n                      </button>\n                      <button mat-menu-item (click)=\"onDeleteRoom(room.id)\">\n                        <mat-icon>delete</mat-icon>Delete\n                      </button>\n                    </mat-menu>\n                  </div>\n                </div>\n              </mat-list-item>\n\n              <mat-list-item class=\"border-bottom\">\n                <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center center\">\n                  <div fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\" translate>Room Number</div>\n                  <div fxLayout=\"column\" fxFlex=\"50\">{{room.roomNumber}}</div>\n                </div>\n              </mat-list-item>\n              <mat-list-item class=\"border-bottom\">\n                <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center center\">\n                  <div fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\" translate>Capacity</div>\n                  <div fxLayout=\"column\" fxFlex=\"50\">{{room.roomCapacity}}</div>\n                </div>\n              </mat-list-item>\n              <mat-list-item>\n                <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center center\">\n                  <div fxLayout=\"column\" fxFlex=\"50\" class=\"secondary-text\" translate>Room Type</div>\n                  <div fxLayout=\"column\" fxFlex=\"50\">{{room.roomType}}</div>\n                </div>\n              </mat-list-item>\n            </mat-list>\n            <!--End Rooms Details -->\n            <!-- Edit Rooms -->\n              <form [formGroup]=\"roomsForm.controls.rooms\"  \n              (ngSubmit)=\"onSubmitRoom(roomsForm,floor?.id,room?.id)\"\n                *ngIf=\"(editRoom&&(room.id==roomId?true:false)&&(floorIndex==floorsIndex?true:false))\"\n                (ngSubmit)=\"onSubmitRoom(addRoomForm,floor.id,room.id)\" class=\"simple-table-container border\">\n                <div>\n                  <div  fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"p-16\">\n                    <mat-form-field>\n                      <input autofocus matInput formControlName=\"name\" ngModel=\"{{room.name}}\" required autofocus autocomplete=\"off\" (keyup)=\"preventSpace($event,'roomsForm','name')\"\n                       (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'name')\" #roomName>\n                      <mat-label #roomName translate>Room Name</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='roomName.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.name\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput formControlName=\"roomNumber\" ngModel=\"{{room.roomNumber}}\" autocomplete=\"off\"\n                      (keyup)=\"preventSpace($event,'roomsForm','roomNumber')\" (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'roomNumber')\" >\n                      <mat-label #number translate>Room Number</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='number.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.roomNumber\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput formControlName=\"roomCapacity\" ngModel=\"{{room.roomCapacity}}\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'roomsForm','roomCapacity')\"\n                      (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'roomCapacity')\">\n                      <mat-label #capacity translate>Capacity</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='capacity.innerText'\n                          [validationControl]=\"roomsForm.controls.rooms.controls.roomCapacity\" [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                      <mat-select formControlName=\"typeId\" required [(ngModel)]=\"room.typeId\">\n\n                        <mat-option *ngFor=\"let roomType of roomTypesList\" [value]=\"roomType.value\">\n                          {{ roomType.label }}</mat-option>\n                      </mat-select>\n                      <mat-label #roomType translate translate>Room Type</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='roomType.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.typeId\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div fxLayoutAlign=\"end center\" class=\"p-12 border-top\">\n                  <button mat-button type=\"button\" class=\"text-uppercase mr-16\" (click)=\"cancelRoom()\" translate>\n                    {{'Cancel' | translate}}</button>\n                  <button type=\"submit\" mat-raised-button class=\"text-uppercase\" color=\"accent\" translate\n                    [disabled]=\"submitBtnDisable\">{{'Update' | translate}}</button>\n                </div>\n              </form>\n            <!--End Edit Rooms -->\n\n          </mat-card-content>\n          <!-- New Rooms -->\n          <div *ngIf=\"editRoomForm\">\n            <mat-card-content class=\"simple-table-container border edit-floor p-16\"\n              *ngIf=\"!editRoom &&(floorIndex==floorsIndex?true:false)\"\n              [ngClass]=\"desiableRoomForm && (floorIndex==floorsIndex) ? 'add-building-overlay' : '' \" id='roomScroll'>\n\n              <form id=\"rooms-form\" [formGroup]=\"roomsForm.controls.rooms\"  \n                (ngSubmit)=\"onSubmitRoom(roomsForm,floor.id,room?.id)\">\n                <div >\n                  <div  fxFlexFill fxLayout=\"column\" fxFlex=\"100\">\n                    <mat-form-field>\n                      <input matInput formControlName=\"name\"  required autocomplete=\"off\" autofocus\n                      (keyup)=\"preventSpace($event,roomsForm.controls.rooms)\" (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'name')\" #roomName>\n                      <mat-label #roomName translate>Room Name</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='roomName.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.name\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput formControlName=\"roomNumber\" autocomplete=\"off\"\n                      (keyup)=\"preventSpace($event)\" (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'roomNumber')\">\n                      <mat-label #number translate>Room Number</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='number.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.roomNumber\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput formControlName=\"roomCapacity\" autocomplete=\"off\"\n                       (blur)=\"trimTextBoxSpacesForRooms(roomsForm.controls.rooms,'roomCapacity')\">\n                      <mat-label #capacity translate>Capacity</mat-label>\n                      <mat-error>\n                        <app-validation [labelName]='capacity.innerText'\n                          [validationControl]=\"roomsForm.controls.rooms.controls.roomCapacity\" [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"pb-12\">\n                      <mat-label #roomType translate>Room Type</mat-label>\n                      <mat-select placeholder=\"Room Type\" formControlName=\"typeId\" required>\n\n                        <mat-option *ngFor=\"let roomType of roomTypesList\" [value]=\"roomType.value\">\n                          {{ roomType.label }}</mat-option>\n                      </mat-select>\n                      <mat-error>\n                        <app-validation [labelName]='roomType.innerText' [validationControl]=\"roomsForm.controls.rooms.controls.typeId\"\n                          [doValidate]=\"roomFormSubmitted\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayoutAlign=\"end center\" class=\"pt-16\">\n                  <button type=\"button\" mat-button class=\"text-uppercase mr-16\" (click)=\"cancelRoom()\" translate>{{'Cancel' | translate}}</button>\n                  <button type=\"submit\" mat-raised-button class=\"text-uppercase\" color=\"accent\" translate\n                    [disabled]=\"submitBtnDisable\">{{'Add' | translate}}</button>\n                </div>\n              </form>\n            </mat-card-content>\n          </div>\n          <div *ngIf=\"floor.schoolRooms.length == 0\" class=\"text-center pt-20\">No rooms available</div>\n          <mat-divider class=\"mt-8\"></mat-divider>\n          <mat-card-actions fxLayoutAlign=\"end center\" class=\"pt-20 m-0\">\n            <button mat-button class=\"text-uppercase\" (click)=\"onNewRoomClick(floorIndex)\"\n              *ngIf=\"(isAddRoomShow||floorIndex!=floorsIndex)\" [disabled]=\"addRoomBtnDisable\" translate>\n              <mat-icon color=\"accent\">add</mat-icon>{{'Add Room' | translate}}\n            </button>\n          </mat-card-actions>\n          <!--End New Rooms -->\n        </div>\n      </mat-card>\n    </div>\n    <!-- All buildings Show With Icons-->\n    <div class=\"board-list p-0\" fxFlex=\"0 0 auto\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\"\n      [@animateStagger]=\"{value:'50'}\" *ngIf=\"buildingIcons\">\n\n      <div class=\"board-list-item\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n        [@animate]=\"{value:'*',params:{x:'100%'}}\" *ngFor=\"let building of schoolBuildings\"\n        (click)=\"onBuildingClick(building)\">\n        <mat-icon class=\"s-56\">account_balance</mat-icon>\n        <div class=\"board-name\">{{building.name}}</div>\n      </div>\n      <div class=\"board-list-item add-new-board\" fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"newBuilding()\"\n        [@animate]=\"{value:'*',params:{y:'100%'}}\">\n        <mat-icon class=\"s-56\">add_circle</mat-icon>\n        <div class=\"board-name\" translate>Add New Building</div>\n      </div>\n    </div>\n    <!-- End All buildings Show -->\n\n    <!-- Add Buildings Form -->\n    <form [formGroup]=\"addBuildingForm\" *ngIf=\"buildingFormShow\" (ngSubmit)=\"onSubmitBuildings(addBuildingForm)\"\n      class=\"px-20 mt-20\">\n\n      <div [@animate]=\"{value:'*',params:{y:'100%'}}\" formArrayName=\"buildings\"\n        *ngFor=\"let itemrow of addRowBuildingForm.controls; let i=index\">\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-12\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\"\n          [formGroupName]=\"i\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"60\">\n            <mat-label for=\"form-{{i}}\" translate #name>Name</mat-label>\n            <input matInput #buildingName id=\"form-{{i}}\" autocomplete=\"off\" formControlName=\"name\" required  (keyup)=\"preventSpaceForArray($event, itemrow.controls.name)\" \n              (blur)=\"trimTextBoxSpacesForRooms(itemrow,'name')\" autofocus>\n            <mat-error>\n              <app-validation [labelName]='name.innerText' [validationControl]=\"itemrow.controls.name\"\n                [doValidate]=\"addBuildingFormSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"pl-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n            fxFlex.gt-xs=\"30\">\n            <mat-label translate #code>Code</mat-label>\n            <input matInput autocomplete=\"off\" formControlName=\"code\" \n            (keyup)=\"preventSpaceForArray($event, itemrow.controls.code)\" \n            (blur)=\"trimTextBoxSpacesForRooms(itemrow,'code')\">\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"itemrow.controls.code\"\n                [doValidate]=\"addBuildingFormSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <button type=\"button\" mat-icon-button class=\"mb-24\" *ngIf=\"addRowBuildingForm.controls.length==1?false:true\"\n             (click)=\"onClearBuilding(i)\">\n            <mat-icon class=\"red-400-fg\">delete</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"py-20\">\n        <div fxLayout=\"column\" fxFlex=\"40\">\n          <div class=\"font-size-16\">\n            <button type=\"button\" class=\"text-uppercase\" color=\"accent\" mat-raised-button translate (click)=\"addNewBuilding()\"\n              [disabled]=\"!addBuildingForm.valid\" translate><span translate>Add Building</span></button>\n          </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button type=\"button\" mat-raised-button class=\"mr-16 text-uppercase\" (click)=\"onBuildingCancel()\" translate>{{'Cancel' | translate}}</button>\n            <button type=\"submit\" [disabled]=\"submitBtnDisable\" class=\"text-uppercase\" mat-raised-button color=\"primary\" translate translate>{{'Create' | translate}}</button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <!-- End  Buildings Form -->\n  </div>\n</div>\n\n<!-- Coustom Dialog for Edit Building -->\n<ng-template #myTemplate>\n    <form [formGroup]=\"addBuildingForm\" (ngSubmit)=\"onSubmitBuildings(addBuildingForm)\">\n\n      <div [@animate]=\"{value:'*',params:{y:'100%'}}\" formArrayName=\"buildings\"\n        *ngFor=\"let itemrow of addRowBuildingForm.controls; let i=index\">\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayoutAlign=\"center center\" [formGroupName]=\"i\">\n          <mat-form-field appearance=\"outline\" fxFlexFill>\n            <mat-label for=\"form-{{i}}\" translate #name>Name</mat-label>\n            <input matInput id=\"form-{{i}}\" autocomplete=\"off\" formControlName=\"name\" autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event, itemrow.controls.name)\" \n              [(ngModel)]=\"buildingData.name\"  (blur)=\"trimTextBoxSpacesForRooms(itemrow,'name')\">\n            <mat-error>\n              <app-validation [labelName]='name.innerText' [validationControl]=\"itemrow.controls.name\"\n                [doValidate]=\"addBuildingFormSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill class=\"pt-12\">\n            <mat-label translate #code>Code</mat-label>\n            <input matInput autocomplete=\"off\" formControlName=\"code\" autocomplete=\"off\" [(ngModel)]=\"buildingData.code\"\n            (keyup)=\"preventSpaceForArray($event, itemrow.controls.code)\" \n            (blur)=\"trimTextBoxSpacesForRooms(itemrow,'code')\">\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"itemrow.controls.code\"\n                [doValidate]=\"addBuildingFormSubmitted\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pt-20\">\n        <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button type=\"button\" mat-raised-button class=\"mr-16\" type=\"button\" (click)=\"closeDialog()\">{{'Cancel' | translate}}</button>\n            <button [disabled]=\"submitBtnDisable\" type=\"submit\" mat-raised-button color=\"accent\" translate>{{'Update' | translate}}</button>\n          </div>\n        </div>\n      </div>\n    </form>\n</ng-template>\n<!-- End Coustom Dialog  -->"

/***/ }),

/***/ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#boards {\n  width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n#boards .header h1 {\n    font-size: 40px;\n    font-weight: 300; }\n#boards .board-list {\n    padding: 32px 0;\n    max-height: none !important; }\n#boards .board-list .board-list-item {\n      min-width: 190px;\n      min-height: 190px;\n      width: 190px;\n      height: 190px;\n      padding: 24px 0;\n      margin: 16px;\n      border-radius: 8px;\n      background: rgba(0, 0, 0, 0.12);\n      -webkit-transition: box-shadow 150ms ease-in;\n      transition: box-shadow 150ms ease-in;\n      cursor: pointer; }\n#boards .board-list .board-list-item:hover:not(.add-new-board) {\n        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n#boards .board-list .board-list-item .board-name {\n        padding: 16px 32px 0 32px;\n        font-weight: 300;\n        font-size: 16px;\n        text-align: center;\n        word-break: break-word; }\n#boards .board-list .board-list-item.add-new-board {\n        background: rgba(0, 0, 0, 0.06);\n        border: 2px dashed rgba(255, 255, 255, 0.37); }\n.add-building {\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n.add-building .card {\n    width: 340px;\n    min-width: 340px; }\n.add-building .card ::ng-deep .mat-card-header .mat-card-header-text {\n      width: 100%;\n      margin: 0px; }\n.add-building .card .mat-card-content {\n      border-radius: 5px; }\n.add-building .card .mat-card-content .mat-list .mat-list-item {\n        height: auto;\n        word-break: break-word; }\n.add-building .card .mat-card-content .mat-list .mat-list-item .secondary-text {\n          padding: 13px 0px; }\n.add-building .card .mat-card-content.edit-floor {\n      margin: 2px; }\n.add-floor-error .mat-error {\n  position: absolute;\n  top: 41px;\n  font-size: 13px;\n  left: 16px; }\n.add-floor-error input {\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zY2hvb2wtYWRtaW4vc2Nob29sLWluZnJhc3RydWN0dXJlL3NjaG9vbC1pbmZyYXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyIsIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC1pbmZyYXN0cnVjdHVyZS9zY2hvb2wtaW5mcmFzdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtBOzs7Ozs7RUMvSkU7QUR3MENGLGtDQUFBO0FBNCtDQSwyQ0FBQTtBQXdDQSxxQkFBQTtBRS8xRkE7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlDQUFpQyxFQUFBO0FBSHJDO0lBT1ksZUFBZTtJQUNmLGdCQUFnQixFQUFBO0FBUjVCO0lBYVEsZUFBZTtJQUNmLDJCQUEyQixFQUFBO0FBZG5DO01BaUJZLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGFBQWE7TUFDYixlQUFlO01BQ2YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwrQkFBK0I7TUFDL0IsNENBQW9DO01BQXBDLG9DQUFvQztNQUNwQyxlQUFlLEVBQUE7QUExQjNCO1FGaWJFLDJIQUVtRSxFQUFBO0FFbmJyRTtRQWlDZ0IseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHNCQUFzQixFQUFBO0FBckN0QztRQXlDZ0IsK0JBQStCO1FBQy9CLDRDQUE0QyxFQUFBO0FBTTVEO0VBb0NJLGNBQWM7RUFDZCw2QkFBNkIsRUFBQTtBQXJDakM7SUFFUSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFIeEI7TUFPZ0IsV0FBVztNQUNYLFdBQVcsRUFBQTtBQVIzQjtNQWdCWSxrQkFBa0IsRUFBQTtBQWhCOUI7UUFvQm9CLFlBQVk7UUFDWixzQkFBc0IsRUFBQTtBQXJCMUM7VUF3QndCLGlCQUFpQixFQUFBO0FBeEJ6QztNQWdDWSxXQUFXLEVBQUE7QUFRdkI7RUFHUyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixVQUFVLEVBQUE7QUFObkI7RUFTUyw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC1pbmZyYXN0cnVjdHVyZS9zY2hvb2wtaW5mcmFzdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSBjYW4gdXNlIHJlbGF0aXZlIGltcG9ydHMgZm9yIGltcG9ydHMgZnJvbSB0aGUgY2RrIGJlY2F1c2Ugd2UgYnVuZGxlIGV2ZXJ5dGhpbmdcbi8vIHVwIGludG8gYSBzaW5nbGUgZmxhdCBzY3NzIGZpbGUgZm9yIG1hdGVyaWFsLlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDA7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8qKlxuICogQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4gKiB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4gKiBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbiAqIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4gKiAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4gKi9cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogJHRhcmdldCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwKSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG4gICRvcGFjaXR5OiBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KTtcblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDApLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWUgY29tZXMgZnJvbVxuICAvLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIFdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkXG4gICAgICAvLyBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGVcbiAgICAgIC8vIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAvIDI7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dChtYXQtY29sb3IoJHBhbGV0dGUpLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KSwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICRkcmF3ZXItYmFja2Ryb3AtY29sb3I6IGludmVydChtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsIDAuNikpO1xuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tkcm9wLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2Uga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzXG4gIC8vIHNwZWNpZmljYXRpb25zLiBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgMjAwLCBkZWZhdWx0KTtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgMC4yKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC4xMik7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC43KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIFdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkXG4gICAgLy8gY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkbWF0LWdyZXksIDcwMCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiLyoqXG4gKiBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbiAqIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbiAqIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuICogQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbiAqICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbiAqL1xuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4jYm9hcmRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgI2JvYXJkcyAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuICAjYm9hcmRzIC5ib2FyZC1saXN0IHtcbiAgICBwYWRkaW5nOiAzMnB4IDA7XG4gICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgI2JvYXJkcyAuYm9hcmQtbGlzdCAuYm9hcmQtbGlzdC1pdGVtIHtcbiAgICAgIG1pbi13aWR0aDogMTkwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICBtYXJnaW46IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlLWluO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAjYm9hcmRzIC5ib2FyZC1saXN0IC5ib2FyZC1saXN0LWl0ZW06aG92ZXI6bm90KC5hZGQtbmV3LWJvYXJkKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgICAgI2JvYXJkcyAuYm9hcmQtbGlzdCAuYm9hcmQtbGlzdC1pdGVtIC5ib2FyZC1uYW1lIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDAgMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IH1cbiAgICAgICNib2FyZHMgLmJvYXJkLWxpc3QgLmJvYXJkLWxpc3QtaXRlbS5hZGQtbmV3LWJvYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNyk7IH1cblxuLmFkZC1idWlsZGluZyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjsgfVxuICAuYWRkLWJ1aWxkaW5nIC5jYXJkIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgbWluLXdpZHRoOiAzNDBweDsgfVxuICAgIC5hZGQtYnVpbGRpbmcgLmNhcmQgOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwcHg7IH1cbiAgICAuYWRkLWJ1aWxkaW5nIC5jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgICAgLmFkZC1idWlsZGluZyAuY2FyZCAubWF0LWNhcmQtY29udGVudCAubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IH1cbiAgICAgICAgLmFkZC1idWlsZGluZyAuY2FyZCAubWF0LWNhcmQtY29udGVudCAubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLnNlY29uZGFyeS10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxM3B4IDBweDsgfVxuICAgIC5hZGQtYnVpbGRpbmcgLmNhcmQgLm1hdC1jYXJkLWNvbnRlbnQuZWRpdC1mbG9vciB7XG4gICAgICBtYXJnaW46IDJweDsgfVxuXG4uYWRkLWZsb29yLWVycm9yIC5tYXQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZWZ0OiAxNnB4OyB9XG5cbi5hZGQtZmxvb3ItZXJyb3IgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuIiwiQGltcG9ydCBcInNyYy9AZnVzZS9zY3NzL2Z1c2VcIjtcblxuXG4jYm9hcmRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib2FyZC1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmJvYXJkLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTkwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZS1pbjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmFkZC1uZXctYm9hcmQpIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9hcmQtbmFtZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDAgMzJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hZGQtbmV3LWJvYXJkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWRkLWJ1aWxkaW5nIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiAzNDBweDtcblxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLm1hdC1jYXJkLXRpdGxle1xuICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgfVxuICAgICAgICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIC5tYXQtbGlzdCB7XG4gICAgICAgICAgICAgICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY2FyZC1jb250ZW50LmVkaXQtZmxvb3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cblxuLmFkZC1mbG9vci1lcnJvciB7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAubWF0LWVycm9yIHtcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgIHRvcDogNDFweDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgIH1cbiAgICAgaW5wdXR7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgfVxuIH1cblxuLy8gLmFkZC1lZGl0LW92ZXJsYXl7XG4vLyAgICAgLm1hdC1jYXJkLCAuZXZlbnRze1xuLy8gICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vICAgICB9XG4vLyAgICAgLmFkZC1vdmVybGF5e1xuLy8gICAgICAgICBwb2ludGVyLWV2ZW50czphdXRvO1xuLy8gICAgIH1cbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SchoolInfrastructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolInfrastructureComponent", function() { return SchoolInfrastructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_school_admin_api_school_Infrastructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/school-admin/api/school-Infrastructure.service */ "./src/app/service/school-admin/api/school-Infrastructure.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var SchoolInfrastructureComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolInfrastructureComponent, _super);
    function SchoolInfrastructureComponent(_fb, SchoolInfrastrService, commonService, dialog, snackBar, cd) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.SchoolInfrastrService = SchoolInfrastrService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this.buildingIcons = true;
        _this.buildingFormShow = false;
        _this.addBuildingFormSubmitted = true;
        _this.editFloor = false;
        _this.buildingDetailsShow = false;
        _this.addFloor = false;
        _this.floorHeader = true;
        _this.editFloorName = false;
        _this.editRoomForm = false;
        _this.editRoom = false;
        _this.isAddRoomShow = true;
        _this.isNewFloor = false;
        _this.roomFormSubmitted = true;
        _this.closeAddPanel = false;
        _this.floorIsValid = true;
        _this.desiableForm = false;
        _this.desiableRoomForm = false;
        _this.submitBtnDisable = false;
        _this.roomTypesList = [];
        _this.roomCount = 0;
        _this.floorsCount = 0;
        _this.addRoomBtnDisable = false;
        return _this;
    }
    SchoolInfrastructureComponent.prototype.ngOnInit = function () {
        this.updateFloorView = {
            name: '',
            number: '',
            id: ''
        };
        this.addRoomView = {
            name: '',
            schoolBuildingId: ''
        };
        this.updateBuildingView = {
            id: '',
            code: '',
            name: '',
            schoolId: ''
        };
        this.buildingsViewList = {
            schoolBuildings: [],
            schoolId: ''
        };
        // Fetch All Buildings Details
        this.getBuildings();
        // Rooms Types for Drop Down
        this.roomTypes();
        // Initialise Buildings Form
        this.addBuildingForm = this._fb.group({
            buildings: this._fb.array([this.buildingFields()]),
        });
        // Floors Form
        this.floorsForm = this._fb.group({
            floorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            floorNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)),
        });
        // Rooms Form
        this.roomsForm = this._fb.group({
            floorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rooms: this._fb.group({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
                roomNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
                roomCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999)]),
                typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }),
        });
        this.getdeviceSize();
    };
    SchoolInfrastructureComponent.prototype.ngOnChanges = function () {
        this.buildingDetailsShow = false;
        this.buildingIcons = true;
        this.getBuildings();
    };
    SchoolInfrastructureComponent.prototype.getdeviceSize = function () {
        this.innerWidth = window.innerWidth - 1025;
    };
    // get All Buildings
    SchoolInfrastructureComponent.prototype.getBuildings = function () {
        var _this = this;
        this.SchoolInfrastrService.getSchoolbuildings(this.data).subscribe(function (res) { return _this.resBuildings(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolInfrastructureComponent.prototype.resBuildings = function (data) {
        this.schoolBuildings = data.schoolBuildings;
    };
    // Get Room Types for Drop downs
    SchoolInfrastructureComponent.prototype.roomTypes = function () {
        var _this = this;
        this.SchoolInfrastrService.getRoomTypes().subscribe(function (res) { return _this.roomTypeRes(res); });
    };
    SchoolInfrastructureComponent.prototype.roomTypeRes = function (data) {
        for (var i = 0; i < data.roomTypes.length; i++) {
            this.roomTypesList.push({ value: data.roomTypes[i].id, label: data.roomTypes[i].name });
        }
    };
    Object.defineProperty(SchoolInfrastructureComponent.prototype, "addRowBuildingForm", {
        // return type for educaion details form
        get: function () {
            return this.addBuildingForm.get('buildings');
        },
        enumerable: true,
        configurable: true
    });
    // list all your form controls here, which belongs to your form array
    SchoolInfrastructureComponent.prototype.buildingFields = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    };
    Object.defineProperty(SchoolInfrastructureComponent.prototype, "addRoomForm", {
        // return add rooms form
        get: function () {
            return this.roomsForm.get('rooms');
        },
        enumerable: true,
        configurable: true
    });
    // Declare Rooms Fields
    SchoolInfrastructureComponent.prototype.roomFeilds = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            roomNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            roomCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999)]),
            typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // on New Building icon click
    SchoolInfrastructureComponent.prototype.newBuilding = function () {
        this.desiablePage = true;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        this.buildingIcons = false;
        this.buildingFormShow = true;
        this.cd.detectChanges();
        this.buildingName.last.nativeElement.focus();
    };
    // // on Building Form Cancel Button
    SchoolInfrastructureComponent.prototype.onBuildingCancel = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.buildingIcons = true;
        this.buildingFormShow = false;
        this.addBuildingForm.reset();
        var controls = this.addBuildingForm.controls['buildings'];
        for (var i = controls.length - 1; i >= 0; i--) {
            controls.removeAt(i);
        }
        controls.push(this.buildingFields());
    };
    // Deleting a row of AddBuilding onClick ReMove
    SchoolInfrastructureComponent.prototype.onClearBuilding = function (index) {
        var control = this.addBuildingForm.controls['buildings'];
        control.removeAt(index);
    };
    // Adding a row of AddBuilding  onClick AddBuilding Button
    SchoolInfrastructureComponent.prototype.addNewBuilding = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        this.isBuildingEdit = false;
        // this.addBuildingFormSubmitted = false;
        var control = this.addBuildingForm.controls['buildings'];
        control.push(this.buildingFields());
        this.cd.detectChanges();
        this.buildingName.last.nativeElement.focus();
    };
    // On Submit click of Buildings
    SchoolInfrastructureComponent.prototype.onSubmitBuildings = function (data) {
        var _this = this;
        this.addBuildingFormSubmitted = true;
        if (data.status === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VALID) {
            this.submitBtnDisable = true;
            if (!this.isBuildingEdit) {
                this.buildingsViewList.schoolBuildings = data.value.buildings;
                this.buildingsViewList.schoolId = this.data;
                this.SchoolInfrastrService.addBuildings(this.buildingsViewList).subscribe(function (res) { _this.buildingSubmitResponce(res); }, function (error) {
                    _this.submitBtnDisable = false, _this.errorResponse(error);
                });
            }
            else {
                this.updateBuildingView.code = data.value.buildings[0].code;
                this.updateBuildingView.name = data.value.buildings[0].name;
                this.updateBuildingView.id = this.buildingId;
                this.updateBuildingView.schoolId = this.data;
                this.SchoolInfrastrService.updateSchoolBuilding(this.updateBuildingView).subscribe(function (res) { return _this.buildingSubmitResponce(res); }, function (error) {
                    _this.submitBtnDisable = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // Buildings Responce
    SchoolInfrastructureComponent.prototype.buildingSubmitResponce = function (res) {
        this.openSnackBar(res.messages.ResultMessage);
        // this.addBuildingFormSubmitted = false;
        this.submitBtnDisable = false;
        if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
            if (this.isBuildingEdit) {
                this.coustomDialog.close();
                this.buildingAllDetails();
            }
            else {
                this.getBuildings();
                this.onBuildingCancel();
            }
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // on Building Click to 
    SchoolInfrastructureComponent.prototype.onBuildingClick = function (data) {
        this.roomCount = 0;
        this.floorsCount = 0;
        this.buildingId = data.id;
        this.buildingData = data;
        this.buildingDetails = [];
        this.buildingAllDetails();
    };
    // Get all Building Details(Flloors and Rooms)
    SchoolInfrastructureComponent.prototype.buildingAllDetails = function () {
        var _this = this;
        this.buildingDetailsShow = true;
        this.buildingIcons = false;
        this.SchoolInfrastrService.getBuildingFloorsAndRooms(this.buildingId).subscribe(function (res) { return _this.buildingDetailsRes(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolInfrastructureComponent.prototype.buildingDetailsRes = function (data) {
        this.buildingData.name = data.schoolBuildingData.schoolBuildingName;
        this.buildingData.code = data.schoolBuildingData.schoolBuildingCode;
        this.buildingDetails = data.schoolBuildingData;
        this.floorAndRoomsCount();
    };
    SchoolInfrastructureComponent.prototype.onBuildingDelete = function () {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_CONFORMATION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].No, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
        // Conformation for Delete Building
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                _this.SchoolInfrastrService.deleteSchoolBuilding(_this.buildingId).subscribe(function (res) { return _this.buildingDeleteRes(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    SchoolInfrastructureComponent.prototype.buildingDeleteRes = function (data) {
        this.openSnackBar(data.messages.ResultMessage);
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
            this.getBuildings();
            this.onBackClick();
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // on Floor edit
    SchoolInfrastructureComponent.prototype.editFloorDetails = function (floorIndex) {
        var _this = this;
        setTimeout(function () { return _this.floorname.nativeElement.focus(); });
        this.desiableRoomForm = false;
        this.desiableForm = true;
        this.editFloor = true;
        this.isFloorEdit = true;
        this.floorsIndex = floorIndex;
        this.editFloorName = true;
        this.isNewFloor = false;
        this.addRoomBtnDisable = true;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
    };
    // on Floor Submit
    SchoolInfrastructureComponent.prototype.onFloorSubmit = function (data, floorId) {
        var _this = this;
        this.floorIsValid = true;
        this.floorsForm.controls.floorName.markAsTouched();
        if (data.status === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VALID) {
            this.submitBtnDisable = true;
            if (this.isNewFloor) {
                this.addRoomView.name = data.value.floorName;
                this.addRoomView.schoolBuildingId = this.buildingId;
                this.SchoolInfrastrService.addFloor(this.addRoomView).subscribe(function (res) { return _this.floorRes(res); }, function (error) {
                    _this.submitBtnDisable = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.updateFloorView.id = floorId;
                this.updateFloorView.name = data.value.floorName;
                this.SchoolInfrastrService.updateFloor(this.updateFloorView).subscribe(function (res) { return _this.floorRes(res); }, function (error) {
                    _this.submitBtnDisable = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    SchoolInfrastructureComponent.prototype.floorRes = function (data) {
        this.submitBtnDisable = false;
        this.desiableForm = false;
        this.openSnackBar(data.messages.ResultMessage);
        this.editFloor = false;
        this.isFloorEdit = false;
        this.editFloorName = false;
        this.isNewFloor = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.buildingAllDetails();
        this.addRoomBtnDisable = false;
    };
    // on Close Floor Form(X button click)
    SchoolInfrastructureComponent.prototype.closeFloorForm = function () {
        var _this = this;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.desiableRoomForm = true;
        this.desiableForm = false;
        // this.floorIsValid = false;
        this.floorsForm.reset();
        this.editFloor = false;
        this.isNewFloor = false;
        this.addRoomBtnDisable = false;
        this.isFloorEdit = false;
        this.editFloorName = false;
        this.buildingDetails.schoolFloors.forEach(function (element, i) {
            var index = (element.id === '');
            if (index) {
                _this.buildingDetails.schoolFloors.splice(i, 1);
            }
        });
    };
    // on Room Edit click
    SchoolInfrastructureComponent.prototype.onRoomEdit = function (room, roomIndex, floorIndex) {
        var _this = this;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        this.editRoom = true;
        this.floorsIndex = floorIndex;
        this.roomIndex = roomIndex;
        this.roomId = room.id;
        this.roomDetails = room;
        this.editFloor = true;
        this.desiableForm = true;
        this.desiableRoomForm = true;
        setTimeout(function () { return _this.roomName.nativeElement.focus(); });
        setTimeout(function () { return _this.scrollIntoViewById('rooms-form'); });
    };
    // on Cancel Button at Room Form
    SchoolInfrastructureComponent.prototype.cancelRoom = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.desiableForm = false;
        this.desiableRoomForm = true;
        this.isAddRoomShow = true;
        this.editRoom = false;
        this.roomId = null;
        this.editRoomForm = false;
        this.editFloor = false;
        this.addRoomBtnDisable = false;
    };
    // On Back Button Click
    SchoolInfrastructureComponent.prototype.onBackClick = function () {
        this.isFloorEdit = false;
        this.addBuildingForm.reset();
        this.isBuildingEdit = false;
        this.buildingDetailsShow = false;
        this.buildingIcons = true;
        this.getBuildings();
        this.cancelRoom();
    };
    // on New Room Click
    SchoolInfrastructureComponent.prototype.onNewRoomClick = function (floorIndex) {
        var _this = this;
        this.desiableForm = true;
        this.desiableRoomForm = true;
        this.roomsForm.reset();
        this.roomFormSubmitted = true;
        this.editRoom = false;
        this.isAddRoomShow = false;
        this.addRooms = true;
        this.editRoomForm = true;
        this.floorsIndex = floorIndex;
        this.editFloor = true;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        setTimeout(function () { return _this.roomName.nativeElement.focus(); });
        setTimeout(function () { return _this.scrollIntoViewById('rooms-form'); });
    };
    SchoolInfrastructureComponent.prototype.onAddFloorClick = function () {
        var _this = this;
        setTimeout(function () { return _this.floorname.nativeElement.focus(); });
        // this.floorIsValid = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        this.desiableRoomForm = false;
        this.desiableForm = true;
        this.editFloor = true;
        this.isFloorEdit = true;
        this.editFloorName = true;
        this.editRoomForm = false;
        this.isNewFloor = true;
        this.buildingDetails.schoolFloors.push({ id: '' });
        this.floorsIndex = this.buildingDetails.schoolFloors.length - 1;
    };
    // list all your form controls here, which belongs to your form array
    SchoolInfrastructureComponent.prototype.floorRows = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    // on Delete Floor Click
    SchoolInfrastructureComponent.prototype.deleteFloor = function (floor) {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_CONFORMATION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].No, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
        // Conformation for Delete CourseCategory
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                _this.SchoolInfrastrService.deleteFloor(floor.id).subscribe(function (res) { return _this.deleteFloorRes(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    // Delete Floor Responce
    SchoolInfrastructureComponent.prototype.deleteFloorRes = function (data) {
        this.openSnackBar(data.messages.ResultMessage);
        this.floorsForm.reset();
        this.buildingAllDetails();
    };
    // On Room Submit Form
    SchoolInfrastructureComponent.prototype.onSubmitRoom = function (data, floorId, roomId) {
        var _this = this;
        this.roomFormSubmitted = true;
        if (data.status === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VALID) {
            this.submitBtnDisable = true;
            if (!this.editRoom) {
                this.schoolRoomView = data.value.rooms;
                this.schoolRoomView['schoolFloorId'] = floorId;
                this.SchoolInfrastrService.addRoom(this.schoolRoomView).subscribe(function (res) { _this.addRoomRes(res); }, function (error) {
                    _this.submitBtnDisable = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.updateRoomView = data.value.rooms;
                this.updateRoomView['id'] = roomId;
                this.SchoolInfrastrService.updateRoom(this.updateRoomView).subscribe(function (res) { _this.addRoomRes(res); }, function (error) {
                    _this.submitBtnDisable = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // Room responce
    SchoolInfrastructureComponent.prototype.addRoomRes = function (data) {
        this.submitBtnDisable = false;
        this.desiableRoomForm = true;
        this.desiableForm = false;
        this.openSnackBar(data.messages.ResultMessage);
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
            this.buildingAllDetails();
            this.roomsForm.reset();
            this.editRoomForm = false;
            this.editFloor = false;
            this.editRoom = false;
            this.cancelRoom();
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // On Delete Room click
    SchoolInfrastructureComponent.prototype.onDeleteRoom = function (data) {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_CONFORMATION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].No, app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES);
        // Conformation for Delete CourseCategory
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                _this.SchoolInfrastrService.deleteRoom(data).subscribe(function (res) { return _this.deleteRoomRes(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    // Delete Room Responce
    SchoolInfrastructureComponent.prototype.deleteRoomRes = function (data) {
        this.openSnackBar(data.messages.ResultMessage);
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_5__["OK"]) {
            this.buildingAllDetails();
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // on Building Edit
    SchoolInfrastructureComponent.prototype.onBuildingEdit = function () {
        this.isBuildingEdit = true;
        this.coustomDialog = this.dialog.open(this.customTemplate, { disableClose: true, width: '400px' });
        this.buildingAllDetails();
    };
    SchoolInfrastructureComponent.prototype.closeDialog = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.addBuildingForm.reset();
        this.isBuildingEdit = false;
        this.dialog.closeAll();
    };
    // trimFloorName(key: string): void {
    //   this.floorsForm.controls[key].setValue(this.commonService.trimSpaces(this.floorsForm.controls[key].value));
    // }
    // Count for Rooms and Floors
    SchoolInfrastructureComponent.prototype.floorAndRoomsCount = function () {
        var _this = this;
        this.roomCount = 0;
        this.floorsCount = this.buildingDetails.schoolFloors.length;
        this.buildingDetails.schoolFloors.forEach(function (element) {
            _this.roomCount = _this.roomCount + element.schoolRooms.length;
        });
    };
    SchoolInfrastructureComponent.prototype.trimTextBoxSpacesForRooms = function (form, control) {
        form.get(control).patchValue(this.commonService.trimSpaces(form.value[control]));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolInfrastructureComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SchoolInfrastructureComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('floorname'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SchoolInfrastructureComponent.prototype, "floorname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('roomName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SchoolInfrastructureComponent.prototype, "roomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('buildingName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SchoolInfrastructureComponent.prototype, "buildingName", void 0);
    SchoolInfrastructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-infrastructure',
            template: __webpack_require__(/*! ./school-infrastructure.component.html */ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./school-infrastructure.component.scss */ "./src/app/modules/school-admin/school-infrastructure/school-infrastructure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_school_admin_api_school_Infrastructure_service__WEBPACK_IMPORTED_MODULE_7__["SchoolInfrastructureService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SchoolInfrastructureComponent);
    return SchoolInfrastructureComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/school-user/school-user.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-user/school-user.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table *ngIf=\"!hideGrid;else addUserTemplate\" [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)'\n    (openAddForm)=\"addForms()\" [disabled]=\"disbleSubmitBtn\" [closeRowForm]='closeAddPanel'\n    [showSelectAll]=\"isDeleteAllRequired\" [templateRef]=\"addUserTemplate\" (getTableData)='getAllUser($event)'>\n</app-table>\n\n\n<ng-template #addUserTemplate>\n    <mat-vertical-stepper (selectionChange)=\"OnSelectionChange($event)\" *ngIf=\"!detailsShow\" [linear]=\"true\"\n        [ngClass]=\"{'mat-elevation-z3 m-36 radius-10 p-12': hideGrid}\" #stepper (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n        <mat-step [stepControl]=\"userDetailsForm\">\n            <form [formGroup]=\"userDetailsForm\" fxLayout=\"column\">\n                <ng-template matStepLabel><span translate>userdetails</span></ng-template>\n                <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"32\">\n                        <mat-label #firstName translate>firstname</mat-label>\n                        <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'userDetailsForm','firstName')\"\n                            (blur)=\"trimTextBoxSpaces('userDetailsForm','firstName')\" formControlName=\"firstName\"\n                            required>\n                        <mat-error>\n                            <app-validation [labelName]=\"firstName.innerText\"\n                                [validationControl]=\"userDetailsForm.controls.firstName\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\"\n                        fxFlex.gt-xs=\"36\">\n                        <mat-label #middleName translate>middlename</mat-label>\n                        <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'userDetailsForm','middleName')\"\n                            (blur)=\"trimTextBoxSpaces('userDetailsForm','middleName')\" formControlName=\"middleName\">\n                        <mat-error>\n                            <app-validation [labelName]=\"middleName.innerText\"\n                                [validationControl]=\"userDetailsForm.controls.middleName\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"32\">\n                        <mat-label #lastName translate>lastname</mat-label>\n                        <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'userDetailsForm','lastName')\"\n                            (blur)=\"trimTextBoxSpaces('userDetailsForm','lastName')\" formControlName=\"lastName\"\n                            required>\n                        <mat-error>\n                            <app-validation [labelName]=\"lastName.innerText\"\n                                [validationControl]=\"userDetailsForm.controls.lastName\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\">\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n                        <mat-label translate #gender>gender</mat-label>\n                        <mat-select formControlName=\"genderTypeId\" required>\n                            <mat-option *ngFor=\"let facilityType of genderDetailsList\" [value]=\"facilityType.id\">\n                                {{facilityType.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <app-validation [labelName]='gender.innerText'\n                                [validationControl]=\"userDetailsForm.controls.genderTypeId\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"36\"\n                        class=\"px-sm-20 icon-center\">\n                        <mat-label #date translate>dateofbirth</mat-label>\n                        <input (keyup)=\"forceValidation('dateOfBirth',userDetailsForm)\" matInput [max]=\"currentDate\"\n                            [matDatepicker]=\"picker\" formControlName=\"dateOfBirth\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                        <mat-error>\n                            <app-validation [labelName]=\"date.innerText\"\n                                [validationControl]=\"userDetailsForm.controls.dateOfBirth\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n                    <button mat-raised-button id=\"resetButtonStepper\" type=\"reset\" class=\"text-uppercase mr-12\"\n                        (click)=\"onCancelClick()\">\n                        {{'cancel' | translate}}\n                    </button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'next' | translate}}\n                    </button>\n\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"rolesForm\">\n            <form [formGroup]=\"rolesForm\" fxLayout=\"column\" class=\"pt-sm-20\">\n                <ng-template matStepLabel><span translate>userroles</span></ng-template>\n                <af-select *ngIf=\"showMultiSelectDropDown\" [required]=true (selectionChange)=\"onSelect($event)\"\n                    appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" [optionGroupRequired]=\"false\"\n                    [options]=\"rolesList\" [showChips]=\"3\" placeholder=\"Roles\" [multiple]=\"true\" formControlName=\"roleId\"\n                    [value]=\"rolesData\"></af-select>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n                    <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n                        {{'previous' | translate}}\n                    </button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"contactDetailsForm\">\n            <form [formGroup]=\"contactDetailsForm\" fxLayout=\"column\">\n                <ng-template matStepLabel><span translate>contactdetails</span></ng-template>\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\"\n                    class=\"pt-sm-20\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                        <mat-label #website translate>website</mat-label>\n                        <input matInput formControlName=\"website\" (keyup)=\"preventSpace($event,'contactDetailsForm','website')\"\n                            (blur)=\"trimTextBoxSpaces('contactDetailsForm','website')\">\n                        <mat-error>\n                            <app-validation [labelName]=\"website.innerText\"\n                                [validationControl]=\"contactDetailsForm.controls.website\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #email translate>email</mat-label>\n                        <input matInput formControlName=\"email1\" [readonly]=\"emailDisable\" required\n                            (keyup)=\"preventSpace($event,'contactDetailsForm','email1')\" (blur)=\"trimTextBoxSpaces('contactDetailsForm','email1')\">\n                        <mat-error>\n                            <app-validation [labelName]=\"email.innerText\"\n                                [validationControl]=\"contactDetailsForm.controls.email1\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\"\n                    *ngIf=\"loaded\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt.xs=\"50\"\n                        class=\"coutline\">\n                        <mat-label #mobiletel translate>mobilenumber</mat-label>\n                        <input type=\"text\" required matInput formControlName=\"mobileTel\" ng2TelInput\n                            (hasError)=\"onError($event,'mobileTel')\" [ng2TelInputOptions]=\"telOptions\"\n                            (ng2TelOutput)=\"getNumber($event,'mobileTel')\"\n                            (countryChange)=\"onCountryChangeMobile($event,'mobileTel')\" />\n                        <mat-error>\n                            <app-validation [labelName]=\"mobiletel.innerText\"\n                                [validationControl]=\"contactDetailsForm.controls.mobileTel\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt.xs=\"50\"\n                        class=\"coutline pl-sm-24\">\n                        <mat-label #otherTel translate>alternatemobilenumber</mat-label>\n                        <input type=\"text\" matInput formControlName=\"otherTel\" ng2TelInput\n                            (hasError)=\"onError($event,'otherTel')\" [ng2TelInputOptions]=\"telOptions\"\n                            (ng2TelOutput)=\"getNumber($event,'otherTel')\"\n                            (countryChange)=\"onCountryChangeMobile($event,'otherTel')\" />\n                        <mat-error>\n                            <app-validation [labelName]=\"otherTel.innerText\"\n                                [validationControl]=\"contactDetailsForm.controls.otherTel\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-form-field *ngIf=\"loaded\" appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n                        fxFlex.gt.xs=\"50\" class=\"coutline\">\n                        <mat-label #landTel translate>landlinenumber</mat-label>\n                        <input type=\"text\" matInput formControlName=\"landTel\" ng2TelInput\n                            (hasError)=\"onError($event,'landTel')\" [ng2TelInputOptions]=\"telOptions\"\n                            (ng2TelOutput)=\"getNumber($event,'landTel')\"\n                            (countryChange)=\"onCountryChangeMobile($event,'landTel')\" />\n                        <mat-error>\n                            <app-validation [labelName]=\"landTel.innerText\"\n                                [validationControl]=\"contactDetailsForm.controls.landTel\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n                    <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n                        {{'previous' | translate}}\n                    </button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'next' | translate}}\n                    </button>\n                </div>\n\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"addressesDetailsForm\">\n            <form [formGroup]=\"addressesDetailsForm\" fxLayout=\"column\">\n                <ng-template matStepLabel><span translate>addressdetails</span></ng-template>\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\"\n                    class=\"pt-sm-20\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                        <mat-label #line translate>addressline1</mat-label>\n                        <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'addressesDetailsForm','line1')\"\n                            (blur)=\"trimTextBoxSpaces('addressesDetailsForm','line1')\" autocomplete=\"off\"\n                            formControlName=\"line1\" required>\n                        <mat-error>\n                            <app-validation [labelName]=\"line.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.line1\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #line2 translate>addressline2</mat-label>\n                        <input matInput formControlName=\"line2\" (keyup)=\"preventSpace($event,'addressesDetailsForm','line2')\"\n                            (blur)=\"trimTextBoxSpaces('addressesDetailsForm','line2')\" autocomplete=\"off\">\n                        <mat-error>\n                            <app-validation [labelName]=\"line2.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.line2\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                        <mat-label #line3 translate>addressline3</mat-label>\n                        <input matInput formControlName=\"line3\" (keyup)=\"preventSpace($event,'addressesDetailsForm','line3')\"\n                            (blur)=\"trimTextBoxSpaces('addressesDetailsForm','line3')\" autocomplete=\"off\">\n                        <mat-error>\n                            <app-validation [labelName]=\"line3.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.line3\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\"\n                        fxFlex.gt-xs=\"50\">\n                        <mat-label #country translate>country</mat-label>\n                        <mat-select formControlName=\"countryId\" (selectionChange)=\"stateDetails($event.value)\" required>\n                            <mat-option *ngFor=\"let countries of countryDetails\" [value]=\"countries.id\">\n                                {{countries.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <app-validation [labelName]=\"country.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.countryId\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                        <mat-label #state translate>state</mat-label>\n                        <mat-select formControlName=\"stateId\" required>\n                            <mat-option *ngFor=\"let states of stateDetailsList\" [value]=\"states.id\">\n                                {{states.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <app-validation [labelName]=\"state.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.stateId\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #city translate>city</mat-label>\n                        <input matInput formControlName=\"city\" maxlength=\"45\" (keyup)=\"preventSpace($event,'addressesDetailsForm','city')\"\n                            (blur)=\"trimTextBoxSpaces('addressesDetailsForm','city')\" autocomplete=\"off\" required>\n                        <mat-error>\n                            <app-validation [labelName]=\"city.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.city\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n\n                <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n\n                    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                        <mat-label #pincode translate>pincode</mat-label>\n                        <input matInput formControlName=\"pincode\" (keyup)=\"preventSpace($event,'addressesDetailsForm','pincode')\"\n                            (blur)=\"trimTextBoxSpaces('addressesDetailsForm','pincode')\" required>\n                        <mat-error>\n                            <app-validation [labelName]=\"pincode.innerText\"\n                                [validationControl]=\"addressesDetailsForm.controls.pincode\" [doValidate]=\"doValidate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n                    <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n                        {{'previous' | translate}}\n                    </button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step>\n            <ng-template matStepLabel><span translate>done</span></ng-template>\n            <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>Please verify the entered\n                information before your final submit</div>\n            <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex.gt-xs=\"80\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n                class=\"pt-0 border m-auto confirm-table list-item-start\">\n\n                <mat-list-item *ngIf=\"userDetailsForm?.controls?.firstName?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n                    <!-- <div><strong><span translate>firstname</span></strong> :\n                        {{userDetailsForm?.controls?.firstName?.value}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>firstname</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.firstName?.value}} </div>\n                        \n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"userDetailsForm?.controls?.middleName?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n                    <!-- <div fxLayout=\"row\"><strong><span translate>middlename</span></strong> :\n                        {{userDetailsForm?.controls?.middleName?.value}} </div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >middlename</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.middleName?.value}} </div>\n\n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"userDetailsForm?.controls?.lastName?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n                    <!-- <div fxLayout=\"row\"><strong><span translate>lastname</span></strong> :\n                        {{userDetailsForm?.controls?.lastName?.value}}\n                    </div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>lastname</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{userDetailsForm?.controls?.lastName?.value}} </div>\n\n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"genderDetailsList\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>gender</span></strong> :\n                        {{getNamesOnId('gender',userDetailsForm.controls.genderTypeId?.value)}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>gender</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{getNamesOnId('gender',userDetailsForm.controls.genderTypeId?.value)}}</div>\n\n                </mat-list-item>\n\n                <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\"\n                    *ngIf=\"userDetailsForm?.controls?.dateOfBirth?.value\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>dateofbirth</span></strong> :\n                        {{dateOfBirth}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>dateofbirth</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{dateOfBirth}}</div>\n\n                </mat-list-item>\n\n\n\n                <mat-list-item *ngIf=\"contactDetailsForm?.controls?.website?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>website</span></strong> :\n                        {{contactDetailsForm?.controls?.website?.value}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>website</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{contactDetailsForm?.controls?.website?.value}}</div>\n\n                </mat-list-item>\n\n                <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"contactDetailsForm?.controls?.email1?.value\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>email</span></strong>\n                        :{{contactDetailsForm?.controls?.email1?.value}}\n                    </div> -->\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>email</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{contactDetailsForm?.controls?.email1?.value}}</div>\n\n                </mat-list-item>\n\n                <mat-list-item fxLayout=\"column\" *ngIf=\"contactDetailsForm?.controls?.mobileTel?.value\"\n                    fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>mobilenumber</span></strong> :\n                        {{finalMobileNumbers.mobileTel}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>mobilenumber</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{finalMobileNumbers.mobileTel}}</div>\n\n                </mat-list-item>\n                <mat-list-item fxLayout=\"column\" *ngIf=\"contactDetailsForm?.controls?.otherTel?.value\"\n                    fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>alternatemobilenumber</span></strong> :\n                        {{finalMobileNumbers.otherTel}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>alternatemobilenumber</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{finalMobileNumbers.otherTel}}</div>\n\n                </mat-list-item>\n\n                <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"contactDetailsForm?.controls?.landTel?.value\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>landlinenumber</span></strong> :\n                        {{finalMobileNumbers.landTel}}</div> -->\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >landlinenumber</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{finalMobileNumbers.landTel}}</div>\n\n                </mat-list-item>\n\n\n                <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>address</span></strong> :\n                        {{getCustomAddress()}} </div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>address</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{getCustomAddress()}}</div>\n                </mat-list-item>\n\n\n                <mat-list-item *ngIf=\"countryDetails\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>country</span></strong> :\n                        {{getNamesOnId('country',addressesDetailsForm.controls.countryId?.value)}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>country</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{getNamesOnId('country',addressesDetailsForm.controls.countryId?.value)}}</div>\n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"stateDetailsList\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>state</span></strong> :\n                        {{getNamesOnId('state',addressesDetailsForm.controls.stateId?.value)}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>state</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{getNamesOnId('state',addressesDetailsForm.controls.stateId?.value)}}</div>\n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"addressesDetailsForm?.controls?.city?.value\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>city</span></strong> :\n                        {{addressesDetailsForm?.controls?.city?.value}}</div> -->\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>city</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{addressesDetailsForm?.controls?.city?.value}}</div>\n                </mat-list-item>\n\n                <mat-list-item *ngIf=\"addressesDetailsForm?.controls?.pincode?.value\" fxLayout=\"column\"\n                    fxFlex.gt-xs=\"50\">\n\n                    <!-- <div fxLayout=\"row\"><strong><span translate>pincode</span></strong> :\n                        {{addressesDetailsForm?.controls?.pincode?.value}}</div> -->\n\n                        <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>pincode</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{addressesDetailsForm?.controls?.pincode?.value}}</div>\n                </mat-list-item>\n                <mat-list-item *ngIf=\"rolesForm?.controls?.roleId?.value?.length > 0\" fxLayout=\"column\"\n                    fxFlex.gt-xs=\"50\">\n\n                    <!-- <div><strong class=\"pt-8\"><span translate>Roles</span></strong> :\n                        <ul class=\"ml-36\">\n                            <li *ngFor=\"let item of rolesForm?.controls?.roleId?.value;let l=last\" class=\"pb-8\">\n                                {{item.label}}</li>\n                        </ul>\n                    </div> -->\n                    <div fxLayout=\"row\" fxFlex=\"40\" class=\"pt-12\"><strong><span translate>Roles</span></strong></div>\n                        <div fxLayout=\"row\" fxFlex=\"60\">\n                            <ul>\n                                <li *ngFor=\"let item of rolesForm?.controls?.roleId?.value;let l=last\" class=\"pb-8\">\n                                    {{item.label}}</li>\n                            </ul>\n                        </div>\n\n                </mat-list-item>\n            </mat-list>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n                <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-8\">\n                    Previous\n                </button>\n\n                <button mat-raised-button type=\"button\" (click)=\"addUpdateNewUser()\" class=\"text-uppercase\"\n                    color=\"accent\">{{!updateShow ? 'Create':'Update'}}</button>\n            </div>\n        </mat-step>\n\n\n    </mat-vertical-stepper>\n\n    <div *ngIf=\"detailsShow\" fxLayout=\"column\">\n        <div class=\"mt-20 font-size-18 text-uppercase font-weight-600 pl-4\" >User Details</div>\n        <mat-list *ngIf=\"detailsresults\" fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n            class=\"my-16 border confirm-table list-item-start\">\n            <mat-list-item *ngIf=\"detailsresults?.firstName\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n                <!-- <div fxLayout=\"row\"><strong><span translate>firstname</span></strong> : {{detailsresults?.firstName}}\n                </div> -->\n\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate>firstname</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.firstName}} </div>\n\n            </mat-list-item>\n            <mat-list-item *ngIf=\"detailsresults?.middleName\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n               \n                <!-- <div fxLayout=\"row\"><strong><span translate>middlename</span></strong> : {{detailsresults?.middleName}}\n                </div> -->\n\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >middlename</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.middleName}} </div>\n\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.lastName\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>lastname</span></strong> : {{detailsresults?.lastName}}\n                </div> -->\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >lastname</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.lastName}}</div>\n            </mat-list-item>\n\n\n            <mat-list-item *ngIf=\"detailsresults?.genderName\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>gender</span></strong>: {{detailsresults?.genderName}}</div> -->\n\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >gender</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.genderName}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.dateOfBirth\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>dateofbirth</span></strong> :\n                    {{detailsresults?.dateOfBirth | date}}</div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >dateofbirth</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.dateOfBirth | date}}</div>\n            </mat-list-item>\n\n\n          \n\n            <mat-list-item *ngIf=\"detailsresults?.contact?.website\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>website</span></strong> :\n                    {{detailsresults?.contact?.website}}</div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >website</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.contact?.website}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.contact?.email1\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>email</span></strong> : {{detailsresults?.contact?.email1}}\n                </div> -->\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >email</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.contact?.email1}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.contact?.mobileTel\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>mobilenumber</span></strong> :\n                    {{detailsresults?.contact?.mobileTel}}</div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >mobilenumber</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.contact?.mobileTel}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.contact?.otherTel\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>alternatemobilenumber</span></strong> :\n                    {{detailsresults?.contact?.otherTel}}</div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >alternatemobilenumber</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.contact?.otherTel}}</div>\n\n            </mat-list-item>\n\n\n            <mat-list-item *ngIf=\"detailsresults?.contact?.landTel\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>landlinenumber</span></strong> :\n                    {{detailsresults?.contact?.landTel}}</div> -->\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >landlinenumber</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.contact?.landTel}}</div>\n            </mat-list-item>\n\n\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n                <!-- <div fxLayout=\"row\"><strong><span translate>address</span></strong> :\n                    {{detailsresults?.address?.line1}} {{detailsresults?.address?.line2}}\n                    {{detailsresults?.address?.line3}}\n                </div> -->\n\n                <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >address</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.address?.line1}} {{detailsresults?.address?.line2}}\n                    {{detailsresults?.address?.line3}}</div>\n\n            </mat-list-item>\n\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>country</span></strong> :\n                    {{detailsresults?.countryName}} </div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >country</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.countryName}}</div>\n            </mat-list-item>\n\n\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>state</span></strong> :\n                    {{detailsresults?.stateName}} </div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >state</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span> {{detailsresults?.stateName}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.address?.pincode\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>pincode</span></strong> :\n                    {{detailsresults?.address?.pincode}} </div> -->\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >pincode</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>  {{detailsresults?.address?.pincode}}</div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"detailsresults?.address?.city\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div fxLayout=\"row\"><strong><span translate>city</span></strong> :\n                    {{detailsresults?.address?.city}} </div> -->\n\n                    <div fxLayout=\"row\" fxFlex=\"40\"><strong><span translate >city</span></strong></div>\n                    <div fxLayout=\"row\" fxFlex=\"60\"><span class=\"pr-4\">:</span>{{detailsresults?.address?.city}}</div>\n            </mat-list-item>\n            <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n\n                <!-- <div><strong><span translate>role</span></strong>:\n                    <span *ngFor=\"let item of detailsresults?.roles;let l = last\">{{item.roleName}}{{l?'':','}}</span>\n                </div> -->\n\n                <div fxLayout=\"row\" fxFlex=\"40\" class=\"pt-12\"><strong><span translate >role</span></strong></div>\n                <div fxLayout=\"row\" fxFlex=\"60\">\n                    <ul>\n                        <li *ngFor=\"let item of detailsresults?.roles;let l = last\" class=\"pb-8\">\n                            {{item.roleName}}</li>\n                    </ul>\n                </div>\n\n            </mat-list-item>\n\n        </mat-list>\n\n    </div>\n\n    <div *ngIf=\"detailsShow\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-8\">\n        <button cdkFocusInitial mat-raised-button id=\"cancelButton\" type=\"reset\" class=\"text-uppercase\"\n            (click)=\"onCancelClick()\">\n            {{'cancel' | translate}}\n        </button>\n    </div>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/school-admin/school-user/school-user.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-user/school-user.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-step-header .mat-step-icon-state-done {\n  background-color: green !important; }\n\n::ng-deep .list-item-start .mat-list-item-content {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NjaG9vbC11c2VyL3NjaG9vbC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0NBQWtDLEVBQUE7O0FBRjFDO0VBT1ksbUNBQWtDO1VBQWxDLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zY2hvb2wtYWRtaW4vc2Nob29sLXVzZXIvc2Nob29sLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAgIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gICAgLmxpc3QtaXRlbS1zdGFydHtcbiAgICAgICAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/school-admin/school-user/school-user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/school-admin/school-user/school-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: SchoolUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolUserComponent", function() { return SchoolUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var SchoolUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolUserComponent, _super);
    // End
    function SchoolUserComponent(userService, schoolUserService, commonService, countryService, stateService, typeService, dialogRef, cd, snackBar, routes, router) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.schoolUserService = schoolUserService;
        _this.commonService = commonService;
        _this.countryService = countryService;
        _this.stateService = stateService;
        _this.typeService = typeService;
        _this.dialogRef = dialogRef;
        _this.cd = cd;
        _this.snackBar = snackBar;
        _this.routes = routes;
        _this.router = router;
        _this.loaded = false;
        _this.doValidate = true;
        _this.roleIdViews = [];
        // refernces for ng prime table
        _this.tableData = [];
        _this.updateShow = false;
        _this.schoolRepRoleId = [];
        _this.isDeleteAllRequired = false;
        _this.closeAddPanel = false;
        _this.buttonDisable = false;
        _this.dataLoaded = Promise.resolve(false);
        _this.display = false;
        _this.statusList = [];
        _this.currentComponent = 'SchoolUserComponent';
        _this.institutionDetails = [];
        _this.disbleSubmitBtn = false;
        _this.rolesList = [];
        _this.rolesToCheck = [];
        // Mobile Number Check Variables
        _this.telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true };
        _this.intialCountryCode = {
            mobileTel: '+91',
            otherTel: '+91',
            landTel: '+91'
        };
        _this.finalMobileNumbers = {
            mobileTel: '',
            otherTel: '',
            landTel: ''
        };
        _this.detailsShow = false;
        _this.today = new Date();
        _this.yesterday = new Date(_this.today.setDate(_this.today.getDate() - 1));
        _this.currentDate = _this.yesterday;
        _this.interactedStepperIndex = 0;
        _this.hideGrid = false;
        return _this;
    }
    SchoolUserComponent.prototype.ngOnInit = function () {
        this.getAllRoles();
        this.countryList();
        this.formSetting();
        // status codes
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.currentComponent = 'SchoolUserComponent';
        // Table Colums
        this.cols = [
            { field: 'userName', header: 'username', sort: true },
            { field: 'firstName', header: 'firstname', sort: true },
            { field: 'lastName', header: 'lastname', sort: true },
            { field: 'status', header: 'status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.viewInitialization();
        this.genderTypeList();
    };
    SchoolUserComponent.prototype.ngOnChanges = function () {
        this.genderTypeList();
        var schoolId = '';
        this.commonService.getdropDown().subscribe(function (res) { return schoolId = res.overLay; });
        if (schoolId !== undefined) {
            this.showMultiSelectDropDown = false;
            this.getAllRoles();
        }
    };
    // Form Setting
    SchoolUserComponent.prototype.formSetting = function () {
        var _this = this;
        // Initilization  User Details Form 
        this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            genderTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].ALPHABET_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].ALPHABET_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].ALPHABET_PATTERN)]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
        });
        // End
        // Initilization Contact Form 
        this.contactDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            email1: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].EMAIL_PATTERN)]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].WEBSITE_PATTERN)]),
            mobileTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].INTL_MOBILE_PATTERN)]),
            otherTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].INTL_MOBILE_PATTERN)]),
            landTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].INTL_MOBILE_PATTERN)])
        });
        // End
        // Initilization Contact Form  HttpStatus: any; 
        this.addressesDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45)]),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45)]),
            line3: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45)]),
            countryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(45)]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].PINCODE_PATTERN)]),
        });
        // End
        // Initilization Contact Form  HttpStatus: any; 
        this.rolesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            roleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
        });
        // End
        this.routes.params.subscribe(function (params) {
            if (params['id']) {
                _this.hideGrid = true;
                _this.addForms();
                _this.data = params['id'];
            }
            else {
                _this.hideGrid = false;
            }
        });
    };
    SchoolUserComponent.prototype.viewInitialization = function () {
        // Initilization UserFormDetails Form 
        this.schoolUserWithRolesViewModel = {
            line1: '',
            line2: '',
            line3: '',
            pincode: '',
            countryId: 0,
            stateId: 0,
            city: '',
            email1: '',
            website: '',
            mobileTel: '',
            landTel: '',
            otherTel: '',
            genderTypeId: 0,
            firstName: '',
            lastName: '',
            roleIds: [{
                    roleId: 0
                }],
            schoolId: ''
        };
        // End
        // Initilization UserFormDetails Form 
        this.schoolEditUserViewModel = {
            userId: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            middleName: '',
            line1: '',
            line2: '',
            line3: '',
            pincode: '',
            countryId: '',
            stateId: '',
            city: '',
            genderTypeId: 0,
            email1: '',
            website: '',
            mobileTel: '',
            landTel: '',
            otherTel: '',
            schoolId: ''
        };
        // End
        // searchUser
        this._searchUserView = {
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
            sortBy: 'Id',
            sortOrder: 1,
            status: [],
            userName: [],
            firstName: [],
            lastName: []
        };
        // End
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this._searchUserView = modelTableComponent;
        }
    };
    // End
    SchoolUserComponent.prototype.searchViewInit = function () {
        // searchUser
        this._searchUserView = {
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
            sortBy: 'Id',
            sortOrder: 1,
            instituteId: '',
            userName: [],
            firstName: [],
            lastName: [],
            status: []
        };
        // End
    };
    // gender List
    SchoolUserComponent.prototype.genderTypeList = function () {
        var _this = this;
        this.closeAddPanel = false;
        this.typeService.typeByCodeBasedOnCategory().subscribe(function (response) {
            _this.genderDetailsList = response;
        });
        this.getAllUser(this._searchUserView);
    };
    // End
    // get All User
    SchoolUserComponent.prototype.getAllUser = function (_searchUserView) {
        var _this = this;
        if (!_searchUserView) {
            return;
        }
        this.schoolUserService.getAllSchoolUser(this.data, _searchUserView.userName, _searchUserView.firstName, _searchUserView.lastName, _searchUserView.status, _searchUserView.sortBy, _searchUserView.sortOrder, _searchUserView.pageNumber, _searchUserView.pageSize)
            .subscribe(function (res) { return _this.userResponse(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolUserComponent.prototype.userResponse = function (response) {
        this.rows = [];
        if (response.statusCode !== this.HttpStatus.OK) {
            this.rows = [];
        }
        else {
            if (response.userAccessList != null) {
                this.rows = response.userAccessList.list;
                this.totalItems = response.userAccessList.totalItems;
            }
            else {
                this.rows = [];
            }
        }
        this.rows.forEach(function (e) {
            e.operations = [{
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DETAILS_DISPLAY,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DETAILS_ICON
                }];
            (e.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].USR_NEW) ? e.operations.push({
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE
            }) : (e.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].USR_ACT) ? e.operations.push({
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].LOCK_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].LOCK,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].LOCK
            }) : e.operations.push({
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].UNLOCK_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].UNLOCK
            });
        });
        this.filterDetails = response.filters;
        this.tabSettings = {
            columns: this.cols,
            model: this._searchUserView,
            showSelectAll: this.isDeleteAllRequired,
            rows: this.rows,
            tablename: '',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            // tabTable: true,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Manage School Users'
                }
            },
            filtersList: response.filters,
        };
    };
    // End
    // cancel User Details
    SchoolUserComponent.prototype.onCancelClick = function () {
        if (this.stepper !== undefined) {
            this.stepper.reset();
            this.rolesToCheck = [];
            this.rolesForm.controls['roleId'].patchValue(this.compareArrayData(this.rolesList, this.rolesToCheck));
        }
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].HIDE);
        this.closeAddPanel = true;
        this.updateShow = false;
        this.disbleSubmitBtn = false;
        this.detailsShow = false;
        this.detailsresults = undefined;
        if (this.hideGrid) {
            this.router.navigate(['/manage-school/school-details']);
        }
    };
    // End
    // get roles
    SchoolUserComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.schoolUserService.getRolesList().subscribe(function (response) { return _this.rolesListNames(response); });
    };
    SchoolUserComponent.prototype.rolesListNames = function (res) {
        var _this = this;
        this.rolesList = [];
        res.roles.forEach(function (element) {
            _this.rolesList.push({ label: element.name, value: element.id });
        });
        this.showMultiSelectDropDown = true;
        this.userRolesMultiCheck = { multiSelect: true, placeholder: 'role', data: this.rolesList, noEntryFoundLabel: 'No Data Found', isRequired: true };
        this.cd.detectChanges();
    };
    // End
    // cancel User Details
    SchoolUserComponent.prototype.addForms = function () {
        this.rolesToCheck = [];
        this.closeAddPanel = false;
        this.detailsShow = false;
        this.emailDisable = false;
        if (this.stepper) {
            this.stepper.reset();
        }
        this.interactedStepperIndex = 0;
        this.loaded = false;
        this.cd.detectChanges();
        this.loaded = true;
        this.cd.detectChanges();
    };
    // End
    // CountryList
    SchoolUserComponent.prototype.countryList = function () {
        var _this = this;
        this.countryService.countryAllCountriesGet().subscribe(function (response) {
            _this.countryDetails = response.commonViewModel;
        });
    };
    // End
    // StateList
    SchoolUserComponent.prototype.stateDetails = function (countryId, isUpdate) {
        var _this = this;
        if (isUpdate === void 0) { isUpdate = false; }
        this.stateService.stateAllStatesGet(countryId).subscribe(function (response) {
            if (!isUpdate) {
                _this.addressesDetailsForm.controls.stateId.setValue(null);
            }
            _this.stateDetailsList = response.states;
        });
    };
    // End
    SchoolUserComponent.prototype.resetMobileNumbers = function (formName) {
        var that = this;
        Object.keys(that[formName].value).forEach(function (key) {
            switch (key) {
                case 'mobileTel':
                case 'otherTel':
                case 'landTel':
                    that[formName].value[key] = that.checkemptyNumber(that[formName].value[key], key);
                    break;
            }
        });
        return this[formName].value;
    };
    // Add New User
    SchoolUserComponent.prototype.addNewUser = function () {
        var _this = this;
        this.roleIdViews = [];
        this.rolesForm.value.roleId.forEach(function (element) {
            if (element) {
                _this.roleIdViews.push({ roleId: element.value });
            }
        });
        Object.assign(this.schoolUserWithRolesViewModel, this.userDetailsForm.value, this.addressesDetailsForm.value, this.resetMobileNumbers('contactDetailsForm'));
        this.schoolUserWithRolesViewModel.roleIds = this.roleIdViews;
        this.schoolUserWithRolesViewModel.schoolId = this.data;
        this.userService.registerSchoolUser(this.schoolUserWithRolesViewModel).subscribe(function (res) { return _this.addResponse(res); }, function (error) { return _this.errorResponse(error); });
    };
    SchoolUserComponent.prototype.addResponse = function (response) {
        if (response.statusCode === (this.HttpStatus.OK)
            || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
            document.getElementById('resetButtonStepper').click();
            if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
                this.closeAddPanel = false;
            }
            else {
                this.clearFunction();
            }
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // row-wise actions
    SchoolUserComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT) {
            this.updateShow = true;
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.schoolUserService.getSchoolUserDetail(response.clickedRow.id, this.data).subscribe(function (res) { return _this.singleUserDetails(res); });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].LOCK) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].WARNING_ON_LOCKUSER, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.userService.lockUser(response.clickedRow.id).subscribe(function (res) { return _this.lockResponse(res); });
                }
            });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DETAILS) {
            this.detailsShow = true;
            this.updateShow = false;
            this.buttonDisable = true;
            this.schoolUserService.getSchoolUserDetail(response.clickedRow.id, this.data).subscribe(function (res) { return _this.singleUserDetails(res); });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].UNLOCK_OPERATION) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].WARNING_ON_UNLOCKUSER, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.userService.unLockUser(response.clickedRow.id).subscribe(function (res) { return _this.lockResponse(res); });
                }
            });
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].WARNING_ON_DELETE, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.userService.deleteUser(response.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); });
                }
            });
        }
    };
    SchoolUserComponent.prototype.deleteResponse = function (response) {
        if (response.statusCode === (this.HttpStatus.OK)
            || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
            if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
                this.closeAddPanel = false;
            }
            else {
                this.clearFunction();
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // lockResponse
    SchoolUserComponent.prototype.lockResponse = function (response) {
        this.searchViewInit();
        if (response.statusCode === (this.HttpStatus.OK)
            || response.statusCode === (this.HttpStatus.CONFLICT)) {
            if (response.statusCode === this.HttpStatus.CONFLICT) {
                this.closeAddPanel = false;
            }
            else {
                this.clearFunction();
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // Edit Details
    SchoolUserComponent.prototype.singleUserDetails = function (userDetails) {
        var _this = this;
        this.closeAddPanel = false;
        this.detailsresults = userDetails.userDetails;
        this.detailsresults.genderName = this.genderDetailsList.filter(function (element) { return element.id === _this.detailsresults.genderTypeId; })[0].name;
        if (!this.detailsShow) {
            if (this.detailsresults.address) {
                this.stateDetails(this.detailsresults.address.countryId, true);
            }
            this.editFormSet(userDetails);
            this.emailDisable = this.detailsresults.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].USR_NEW ? false : true;
            this.stepper._steps._results.forEach(function (x) {
                x.interacted = true;
            });
            this.interactedStepperIndex = this.stepper._steps._results.length;
            this.customSteperLabelChange();
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
    };
    // End
    // edit Form
    SchoolUserComponent.prototype.editFormSet = function (userDetails) {
        var _this = this;
        this.loaded = false;
        if (userDetails.userDetails.address) {
            this.addressesDetailsForm.patchValue(userDetails.userDetails.address);
        }
        else {
            this.countryList();
        }
        var formNames = ['contactDetailsForm'];
        var numbers = ['mobileTel', 'otherTel', 'landTel'];
        var that = this;
        var _loop_1 = function (i) {
            Object.keys(that[formNames[i]]['controls']).forEach(function (key) {
                that[formNames[i]].controls[key].setValue(userDetails.userDetails.contact[key]);
                if (numbers.find(function (x) { return x === key; })) {
                    that.updateCountryCode(key, userDetails.userDetails.contact[key]);
                }
            });
        };
        for (var i = 0; i < formNames.length; i++) {
            _loop_1(i);
        }
        this.userDetailsForm.patchValue(userDetails.userDetails);
        userDetails.userDetails.roles.forEach(function (element) {
            _this.rolesToCheck.push({ label: element.roleName, value: element.id });
        });
        this.rolesForm.reset();
        this.rolesData = this.compareArrayData(this.rolesList, this.rolesToCheck);
        this.rolesForm.setValue({ roleId: this.compareArrayData(this.rolesList, this.rolesToCheck) });
        for (var i = 0; i < this.stepper._steps._results.length; i++) {
            this.stepper._steps._results[i].interacted = true;
        }
        this.cd.detectChanges();
        this.loaded = true;
        this.cd.detectChanges();
    };
    // End
    SchoolUserComponent.prototype.addUpdateNewUser = function () {
        if (this.detailsresults && this.detailsresults.id) {
            this.UpdateNewUser();
        }
        else {
            this.addNewUser();
        }
    };
    // Update User
    SchoolUserComponent.prototype.UpdateNewUser = function () {
        var _this = this;
        this.roleIdViews = [];
        this.rolesForm.value.roleId.forEach(function (element) {
            if (element) {
                _this.roleIdViews.push({ roleId: element.value });
            }
        });
        Object.assign(this.schoolEditUserViewModel, this.userDetailsForm.value, this.addressesDetailsForm.value, this.resetMobileNumbers('contactDetailsForm'));
        this.schoolEditUserViewModel.roleIds = this.roleIdViews;
        this.schoolEditUserViewModel.userId = this.detailsresults.id;
        this.schoolEditUserViewModel.schoolId = this.data;
        this.schoolUserService.editSchoolUsers(this.schoolEditUserViewModel).subscribe(function (res) { return _this.updateResponse(res); }, function (error) { return _this.errorResponse(error); });
    };
    SchoolUserComponent.prototype.updateResponse = function (response) {
        if (response.statusCode === (this.HttpStatus.OK)
            || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
            if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
                this.closeAddPanel = false;
            }
            else {
                this.clearFunction();
            }
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // not to allow alphabets for number fields
    SchoolUserComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    // End
    // mobile validation
    SchoolUserComponent.prototype.getNumber = function (e, label) {
        this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
    };
    // End
    // MobileNumber
    SchoolUserComponent.prototype.onCountryChangeMobile = function (e, label) {
        if (this.isEmptyObject(e)) {
            return;
        }
        this.intialCountryCode[label] = '+' + e.dialCode;
        this.contactDetailsForm.controls[label].setValue('');
    };
    SchoolUserComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    SchoolUserComponent.prototype.onError = function (obj, label) {
        if (!obj && this.contactDetailsForm.value[label]) {
            this.contactDetailsForm.get(label).setErrors({ 'invalid_mobile': true });
        }
    };
    // End
    // clear
    SchoolUserComponent.prototype.clearFunction = function () {
        this.updateShow = false;
        this.rolesToCheck = [];
        this.rolesForm.controls['roleId'].patchValue(this.compareArrayData(this.rolesList, this.rolesToCheck));
        this.stepper.reset();
        this.detailsresults = undefined;
        this.closeAddPanel = true;
        this.userDetailsForm.reset();
        this.contactDetailsForm.reset();
        this.addressesDetailsForm.reset();
        this.updateShow = false;
        this.getAllUser(this._searchUserView);
        this.buttonDisable = false;
        if (this.hideGrid) {
            this.router.navigate(['/manage-school/school-details']);
        }
    };
    // End
    SchoolUserComponent.prototype.onSelect = function (values) {
        var _this = this;
        this.rolesForm.controls['roleId'].setValue(values);
        this.rolesForm.value.roleId.forEach(function (element) {
            if (element.value === undefined) {
                var index = _this.rolesForm.value.roleId.findIndex(function (x) { return x.value === undefined; });
                (_this.rolesForm.value.roleId.splice(index, 1));
            }
        });
    };
    SchoolUserComponent.prototype.checkemptyNumber = function (number, key) {
        if (number) {
            return this.finalMobileNumbers[key];
        }
        else {
            return null;
        }
    };
    SchoolUserComponent.prototype.updateCountryCode = function (key, val) {
        if (val) {
            var data = val.split(' ');
            if (data[0] !== val) {
                this.intialCountryCode[key] = data[0];
                this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
            }
            else {
                this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
            }
        }
    };
    SchoolUserComponent.prototype.getNamesOnId = function (name, value) {
        if (!value) {
            return '';
        }
        var x;
        switch (name) {
            case 'gender':
                return (x = this.genderDetailsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'country':
                return (x = this.countryDetails.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'state':
                return (x = this.stateDetailsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            default: break;
        }
    };
    SchoolUserComponent.prototype.getCustomAddress = function () {
        var address = '';
        for (var keys in this.addressesDetailsForm.controls) {
            if (keys === 'line1' || keys === 'line2' || keys === 'line3') {
                if (this.addressesDetailsForm.controls[keys].value) {
                    address += this.addressesDetailsForm.controls[keys].value + ',';
                }
            }
        }
        return address = address.replace(/,+/g, ',').replace(/,\s*$/, '');
    };
    SchoolUserComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        this.userDetailsForm.controls['dateOfBirth'].setValue(this.userDetailsForm.value.dateOfBirth != null ?
            this.userDetailsForm.value.dateOfBirth : this.getFormattedDateBySchoolDateFormat(this.userDetailsForm.value.dateOfBirth));
        this.dateOfBirth = this.getFormattedDateBySchoolDateFormat(this.userDetailsForm.value.dateOfBirth);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolUserComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SchoolUserComponent.prototype, "data", void 0);
    SchoolUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-user',
            template: __webpack_require__(/*! ./school-user.component.html */ "./src/app/modules/school-admin/school-user/school-user.component.html"),
            styles: [__webpack_require__(/*! ./school-user.component.scss */ "./src/app/modules/school-admin/school-user/school-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"], app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], SchoolUserComponent);
    return SchoolUserComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" [closeRowForm]='closeAddPanel' (getTableData)='getAllSequenceConfiguration($event)'\n    (rowBasedAction)=\"rowWiseActions($event)\" [disabled]=\"disableSubmitBtn\" [templateRef]=\"addSequnceTemplate\"\n    [closeAddForm]=\"closeAddPanel\" (openAddForm)=\"onAddFormClick()\">\n</app-table>\n\n<ng-template #addSequnceTemplate>\n    <form [formGroup]=\"sequenceForm\" (ngSubmit)=\"onSubmit(sequenceForm,true)\" #sequnce=\"ngForm\">\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #sequenceCategoryId translate>Sequence Category</mat-label>\n                <mat-select formControlName=\"sequenceCategoryId\" (selectionChange)=\"onSequenceCategorySelect($event)\"\n                    required>\n                    <mat-option value=\"option1\" *ngFor=\"let sequencecategorytype of sequenceCategoryTypesdropdown\"\n                        [value]=\"sequencecategorytype.id\" ngDefaultControl>\n                        {{sequencecategorytype.name}}\n                    </mat-option>\n                </mat-select>\n\n                <mat-error>\n                    <app-validation [labelName]='sequenceCategoryId.innerText'\n                        [validationControl]=\"sequenceForm.controls.sequenceCategoryId\"\n                        [doValidate]=\"sequenceFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <div>\n                <span class=\"red-text\" translate>{{sequenceErrMsg}}</span>\n            </div>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"px-sm-20\">\n                <mat-label #sequenceParameterId translate>Sequence Parameter</mat-label>\n                <mat-select formControlName=\"sequenceParameterId\" (blur)=\"trimTextBoxSpacess()\" (selectionChange)=\"onSequenceSelect($event)\" [required]=\"submitted ? false : true\">\n                    <mat-option value=\"option1\" *ngFor=\"let sequenceparameterType of sequnceParameterList\"\n                        [disabled]=\"sequenceparameterType.disabled\" [value]=\"sequenceparameterType.value\"\n                        ngDefaultControl>\n                        {{sequenceparameterType.label}}\n                    </mat-option>\n                </mat-select>\n                <label class=\"error-msg messages text-left text-danger\" [hidden]=\"isSequenceNumberError\">{{sequenceNumberErrorMsg\n                    | translate}}</label>\n            </mat-form-field>\n\n            <mat-form-field  fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #sequencecode translate>{{dynamicPlaceholder | translate}}</mat-label>\n                <input matInput #code [required]=\"sequenceCodeRequired ? true : false\" formControlName=\"sequencecode\"\n                   (keydown.space)=\"$event.preventDefault()\">\n                    <mat-error>\n                        <app-validation [labelName]='sequencecode.innerText'\n                        [validationControl]=\"sequenceForm.controls.sequencecode\"\n                        [doValidate]=\"'true'\">\n                    </app-validation>\n                    </mat-error>\n            </mat-form-field>\n\n            <div>\n                <button mat-raised-button class=\"ml-12 mt-16 text-uppercase\" [disabled]=\"isValid\" type=\"button\"\n                    color=\"accent\"\n                    (click)=\"onSequenceYes(sequenceForm.controls.sequenceParameterId.value)\">{{'Select' | translate}}</button>\n            </div>\n        </div>\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-12\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n                <mat-label #sequenceformat translate>Sequence Format</mat-label>\n                <input matInput formControlName=\"sequenceformat\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'sequenceForm','sequenceformat')\"\n                    readonly required>\n                    <mat-error>\n                        <span>{{requiredSequence}}</span>\n                    </mat-error>\n            </mat-form-field>\n\n\n            <div>\n                <button mat-icon-button class=\"ml-12 mt-16\" type=\"button\" (click)=\"onClearSequenceFormat()\">\n                    <mat-icon>clear</mat-icon>\n                </button>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-16\">\n            <button mat-raised-button class=\"mr-12 text-uppercase\" type=\"button\" (click)=\"cancel()\">{{'Cancel' | translate}}</button>\n            <button mat-raised-button class=\"text-uppercase\" type=\"submit\" color=\"accent\">{{'Create' | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NlcXVlbmNlLWNvbmZpZ3VyYXRpb24vc2VxdWVuY2UtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SequenceConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceConfigurationComponent", function() { return SequenceConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/sequence.service */ "./src/app/service/academic-service/api/sequence.service.ts");









var SequenceConfigurationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SequenceConfigurationComponent, _super);
    function SequenceConfigurationComponent(commonService, dialog, sequenceConfiguratonService, cd, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.sequenceConfiguratonService = sequenceConfiguratonService;
        _this.cd = cd;
        _this.snackBar = snackBar;
        _this.listOfSequences = [];
        _this.currentComponent = 'SequenceConfigurationComponent';
        _this.rows = [];
        _this.disableSubmitBtn = false;
        _this.sequenceCategoryTypesdropdown = [];
        _this.sequenceFormSubmitted = true;
        _this.startingSequnce = true;
        _this.sequenceParams = [];
        _this.sequenceCategories = [];
        _this.codesArray = [];
        _this.sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
        _this.sequenceDisplayText = '';
        _this.sequenceStatusYes = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STATUS_ACTIVE;
        _this.sequenceStatusNo = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STATUS_INACTIVE;
        _this.dynamicPlaceholder = '';
        _this.isCheckMark = true;
        _this.isSequenceNumberError = true;
        _this.isTextBoxShow = true;
        _this.isError = true;
        _this.isValid = true;
        _this.sequenceText = '';
        _this.showMessage = false;
        _this.sequenceCodeRequired = false;
        _this.submitted = false;
        _this.sequenceConfiguratonView = {
            SequenceCategoryTypeId: [],
            Sequence: [],
            StartingSequence: [],
            CurrentSequence: [],
            IsActive: [],
            SortBy: 'Id',
            SortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            SchoolId: _this.data
        };
        var modelTableComponent = _this.getModelComponent(_this.currentComponent);
        if (modelTableComponent) {
            _this.sequenceConfiguratonView = modelTableComponent;
        }
        return _this;
    }
    SequenceConfigurationComponent.prototype.ngOnInit = function () {
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.sequenceConfiguratonView = modelTableComponent;
        }
        // statusView
        this.statusView = {
            id: '',
            isActive: 0
        };
        // schoolSequenceView
        this.schoolSequenceView = {
            sequenceCategoryTypeId: 0,
            startingSequence: 0,
            sequenceParameterIds: [],
            schoolId: this.data
        };
        this.sequenceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            sequenceCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            sequenceParameterId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            sequencecode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            sequenceformat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.cols = [
            { field: 'sequenceCategoryName', header: 'Sequence Category', sort: true },
            { field: 'sequence', header: 'Sequence', sort: true },
            { field: 'startingSequence', header: 'Starting Sequence', sort: true },
            { field: 'currentSequence', header: 'Current Sequence', sort: true },
            { field: 'isActive', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.sequenceConfiguratonView,
            componentName: this.currentComponent,
        };
        this.sequenceConfiguratonView.SchoolId = this.data;
        this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
        this.sequenceCategoryData();
        // this.sequenceConfiguratonService.sequenceCategoryTypes().subscribe(res => this.sequenceCategoryTypesdropdown = res.sequenceTypeView[0].typeList);
        this.sequenceParametersData();
    };
    SequenceConfigurationComponent.prototype.ngOnChanges = function () {
        this.sequenceConfiguratonView.SchoolId = this.data;
        this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
    };
    SequenceConfigurationComponent.prototype.sequenceCategoryData = function () {
        var _this = this;
        this.sequenceConfiguratonService.sequenceCategoryTypes()
            .subscribe(function (data) { return _this.bindSequence(data); });
    };
    SequenceConfigurationComponent.prototype.bindSequence = function (data) {
        this.sequenceCategoryTypesdropdown = data.sequenceTypeView[0].typeList;
    };
    SequenceConfigurationComponent.prototype.sequenceParametersData = function () {
        var _this = this;
        this.sequenceConfiguratonService.sequenceParameters()
            .subscribe(function (data) { return _this.bindSequenceParameters(data); });
    };
    SequenceConfigurationComponent.prototype.bindSequenceParameters = function (data) {
        var _this = this;
        this.sequenceParams = [];
        data.sequenceTypeView[0].typeList.forEach(function (element) {
            _this.sequenceParams.push({ value: { id: element.id, name: element.name, code: element.code, }, label: element.name, disabled: false, code: element.code });
            _this.sequnceParameterList = _this.sequenceParams;
        });
    };
    // Get all sequence details 
    SequenceConfigurationComponent.prototype.getAllSequenceConfiguration = function (getSequenceConfigurationList) {
        var _this = this;
        if (getSequenceConfigurationList && getSequenceConfigurationList.isActive) {
            this.sequenceStatus = getSequenceConfigurationList.isActive;
            if (this.sequenceStatusYes.includes(this.sequenceStatus.toLowerCase())) {
                getSequenceConfigurationList.isActive = 1;
            }
            else if (this.sequenceStatusNo.includes(this.sequenceStatus.toLowerCase())) {
                getSequenceConfigurationList.isActive = 0;
            }
        }
        this.sequenceConfiguratonView = getSequenceConfigurationList;
        this.sequenceConfiguratonView.SchoolId = this.data;
        this.sequenceConfiguratonService.getAllSequence(this.sequenceConfiguratonView.SchoolId, getSequenceConfigurationList.SequenceCategoryTypeId, getSequenceConfigurationList.Sequence, this.sequenceConfiguratonView.StartingSequence, getSequenceConfigurationList.CurrentSequence, getSequenceConfigurationList.IsActive, getSequenceConfigurationList.sortBy, getSequenceConfigurationList.sortOrder, getSequenceConfigurationList.pageNumber, getSequenceConfigurationList.pageSize).subscribe(function (res) {
            _this.sequenceConfigurationData(res);
        });
    };
    // Binding sequenceConfigurationData To Table
    SequenceConfigurationComponent.prototype.sequenceConfigurationData = function (data) {
        if (!data.licenceListView) {
            this.rows = [];
        }
        else {
            this.rows = data.licenceListView.list;
            this.totalItems = data.licenceListView.totalItems;
        }
        this.rows.forEach(function (e) {
            e.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                }
            ];
            // tslint:disable-next-line:no-unused-expression
            (e.isActive === 1) ? [e.isActive = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].Active, e.operations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_ICON,
                })] : [e.isActive = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_OPERATION, e.operations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACTIVE_ICON,
                })];
        });
        if (data.licenceListView) {
            this.sequenceConfiguratonView.pageNumber = data.licenceListView.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.sequenceConfiguratonView,
            rows: this.rows,
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'Add Sequence'
                },
                infoButton: {
                    required: true,
                    text: 'Sequence Configuration'
                },
            },
            filtersList: data.filters
        };
    };
    // For Edit and Delete sequence
    SequenceConfigurationComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STATUS_ACTIVE || event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STATUS_INACTIVE) {
            /**check status based on */
            var isActive = void 0;
            isActive = (event.clickedRow.isActive === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].Active) ? 0 : 1;
            var statusView = void 0;
            statusView = {
                id: event.clickedRow.id,
                isActive: isActive
            };
            this.changeSequenceStatus(statusView);
        }
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialog = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            dialog.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.sequenceConfiguratonService.deleteSequence(_this.data, event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
    };
    /**check status based on */
    /**
    * changes the status of sequence
    * @param institueView
    */
    SequenceConfigurationComponent.prototype.changeSequenceStatus = function (institueView) {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_STATUS), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                _this.sequenceConfiguratonService.updateStatus(institueView)
                    .subscribe(function (response) {
                    _this.openSnackBar(response.messages.ResultMessage);
                    if (response.statusCode === _this.HttpStatus.OK) {
                        _this.getAllSequenceConfiguration(_this.sequenceConfiguratonView);
                    }
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO) {
                _this.dialog.closeAll();
            }
        });
    };
    // Delete Response
    SequenceConfigurationComponent.prototype.deleteResponse = function (response) {
        this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    // Adding Post Form
    SequenceConfigurationComponent.prototype.onAddFormClick = function () {
        this.sequenceCodeErrorMsg = '';
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SHOW);
        this.sequnceParameterList.forEach(function (sequence) {
            sequence.disabled = false;
        });
        this.requiredParameters = '';
        this.isTextBoxShow = true;
        this.dynamicPlaceholder = '';
        this.sequenceErrMsg = '';
        this.myForm.resetForm();
        this.sequenceFormSubmitted = false;
        this.closeAddPanel = false;
        this.disableSubmitBtn = true;
        this.sequenceForm.controls['sequencecode'].disable();
    };
    // Cancel Button
    SequenceConfigurationComponent.prototype.cancel = function () {
        this.dynamicPlaceholder = '';
        this.isValid = true;
        this.sequenceCodeErrorMsg = '';
        this.requiredSequence = '';
        this.sequnceParameterList.forEach(function (sequence) {
            sequence.disabled = false;
        });
        this.codesArray = [];
        this.closeAddPanel = true;
        this.disableSubmitBtn = false;
        this.startingSequnce = false;
        this.myForm.resetForm();
    };
    SequenceConfigurationComponent.prototype.sequenceParameter = function (parameterId) {
        if (parameterId !== undefined) {
            this.startingSequnce = false;
        }
        else {
            this.startingSequnce = true;
        }
    };
    SequenceConfigurationComponent.prototype.trimTextBoxSpacess = function () {
        if (this.sequenceForm.controls['sequenceParameterId'].value) {
            this.sequenceForm.controls['sequenceParameterId'].setErrors(null);
        }
        else {
            this.sequenceForm.controls['sequenceParameterId'].setErrors({ required: true });
            this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_PARAMETER;
        }
    };
    SequenceConfigurationComponent.prototype.onSequenceCategorySelect = function (data) {
        var _this = this;
        var code = this.sequenceCategoryTypesdropdown.find(function (elt) { return elt.id === data.value; }).code;
        if (code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].RECEIPT || code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STF_CODE || code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STF_JOB_APP) {
            var index = this.sequnceParameterList.findIndex(function (elt) { return elt.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ACADEMIC_CODE; });
            if (index !== -1) {
                this.sequnceParameterList.splice(this.sequnceParameterList[index], 1);
            }
        }
        else {
            this.sequenceParametersData();
        }
        this.sequenceErrMsg = '';
        this.sequenceConfiguratonService.getSequence(data.value, this.data).subscribe(function (res) {
            _this.responseData(res);
        }, function (error) {
            _this.sequenceForm.controls['sequenceCategoryId'].reset();
            _this.errorResponse(error);
        });
    };
    SequenceConfigurationComponent.prototype.responseData = function (data) {
    };
    SequenceConfigurationComponent.prototype.onSequenceSelect = function (data) {
        var _this = this;
        this.isValid = false;
        this.requiredSequence = '';
        this.requiredParameters = '';
        // Reset Sequencecode when dropdown value changes
        this.sequenceCodeErrorMsg = '';
        data.value.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE ? this.dynamicPlaceholder = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_TEXT : data.value.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE ?
            this.dynamicPlaceholder = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_SEQUENCE : this.dynamicPlaceholder = '';
        switch (data.value.code) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE: {
                // statements; 
                this.sequenceForm.controls['sequencecode'].enable();
                this.isCheckMark = true;
                this.isValid = false;
                this.sequenceCodeRequired = true;
                this.sequenceForm.controls['sequencecode'].clearValidators();
                this.sequenceForm.controls['sequencecode'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHA_NUMERIC_WITH_SPECIAL_CHAR)]);
                this.sequenceForm.controls['sequencecode'].reset();
                this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
                setTimeout(function () { return _this.seqCode.nativeElement.focus(); });
                break;
            }
            case app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE: {
                this.sequenceForm.controls['sequencecode'].enable();
                this.isCheckMark = true;
                this.isValid = false;
                this.sequenceCodeRequired = true;
                this.sequenceForm.controls['sequencecode'].clearValidators();
                this.sequenceForm.controls['sequencecode'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NUMBER_PATTERN)]);
                this.sequenceForm.controls['sequencecode'].reset();
                this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
                setTimeout(function () { return _this.seqCode.nativeElement.focus(); });
                break;
            }
            default: {
                this.codeValue = '';
                this.sequenceForm.controls['sequencecode'].reset();
                this.sequenceForm.controls['sequencecode'].clearValidators();
                this.sequenceForm.controls['sequencecode'].disable();
                this.isTextBoxShow = true;
                this.isCheckMark = false;
                this.isValid = false;
                this.sequenceCodeRequired = false;
                break;
            }
        }
        this.cd.detectChanges();
    };
    SequenceConfigurationComponent.prototype.onSequenceYes = function (val) {
        var _this = this;
        this.codeValue = this.sequenceForm.controls['sequencecode'].value;
        if (this.sequenceForm.controls['sequenceParameterId'].value.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) {
        }
        if (this.sequenceForm.controls['sequenceParameterId'].value.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE) {
            this.sequenceNumber = this.codeValue;
        }
        if (this.sequenceCodeRequired && !this.sequenceForm.controls['sequencecode'].valid) {
            return false;
        }
        this.sequenceFormSubmitted = true;
        this.sequenceForm.controls['sequenceParameterId'].markAsTouched();
        this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
        this.cd.detectChanges();
        this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
        this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
        this.requiredParameters = '';
        this.requiredSequence = '';
        this.isValid = false;
        if (val == null || val === '') {
            this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_PARAMETER;
            return false;
        }
        if ((val.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE) && (val.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE)) {
            this.requiredSequence = '';
            this.isCheckMark = true;
            this.sequenceCodes = {
                code: val.code,
                displayText: val.name,
                value: val.id,
                displayValue: this.codeValue
            };
            this.codesArray.push(this.sequenceCodes);
            this.sequnceParameterList.forEach(function (sequence) {
                if (sequence.value.code === _this.sequenceCodes.code) {
                    sequence.disabled = true;
                }
            });
            this.sequenceDisplayText = '';
            this.codesArray.forEach(function (item) {
                _this.sequenceDisplayText += (item.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) ? '%' + item.displayText + '%' : '%' + item.displayValue + '%';
            });
            this.sequenceForm.controls['sequenceformat'].setValue(this.sequenceDisplayText);
            this.sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
            this.sequenceForm.controls['sequenceParameterId'].setValue('');
            this.sequenceForm.controls['sequenceParameterId'].clearValidators();
            this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
            this.sequenceForm.controls['sequencecode'].clearValidators();
            this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
            this.isValid = true;
        }
        else {
            this.sequenceCodeErrorMsg = '';
            this.isSequenceCodeError = true;
            this.sequenceCodes = {
                code: this.sequenceForm.controls['sequenceParameterId'].value.code,
                displayText: this.sequenceForm.controls['sequenceParameterId'].value.name,
                value: val.id,
                displayValue: this.codeValue
            };
            this.sequenceForm.controls['sequenceParameterId'].setValue('');
            this.sequenceForm.controls['sequenceParameterId'].clearValidators();
            this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
            this.sequenceForm.controls['sequencecode'].clearValidators();
            this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
            if (this.sequenceCodes.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE) {
                this.isSequenceNumberError = true;
            }
            this.sequenceDisplayText = '';
            this.codesArray.push(this.sequenceCodes);
            // disabling selected dropdown value
            this.sequnceParameterList.forEach(function (sequence) {
                if (sequence.value.code === _this.sequenceCodes.code) {
                    if (sequence.value.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) {
                        sequence.disabled = true;
                    }
                }
            });
            // looping array to show the selected sequence parameter in sequence format input
            this.codesArray.forEach(function (item) {
                _this.sequenceDisplayText += (item.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) ? '%' + item.displayText + '%' : '%' + item.displayValue + '%';
            });
            // end
            this.sequenceForm.controls['sequenceformat'].setValue(this.sequenceDisplayText);
            this.sequenceForm.controls['sequencecode'].setValue('');
            this.sequenceForm.controls['sequencecode'].markAsUntouched();
            this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
            this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
            this.sequenceForm.controls['sequenceParameterId'].clearValidators();
            this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
            this.sequenceForm.controls['sequencecode'].clearValidators();
            this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
            this.isTextBoxShow = true;
            this.isValid = true;
            this.sequenceForm.controls['sequencecode'].disable();
            this.dynamicPlaceholder = '';
        }
        this.isValid = true;
    };
    // create sequence for selected school
    SequenceConfigurationComponent.prototype.onSubmit = function (sequenceForm, isSequence) {
        var _this = this;
        if (sequenceForm.value.sequenceParameterId != null
            && sequenceForm.value.sequenceParameterId !== '') {
            this.showMessage = true;
            this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
            this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_SELECT_BUTTON;
            return false;
        }
        if (this.sequenceForm.controls['sequencecode'].invalid) {
            return false;
        }
        this.sequenceForm.controls['sequenceParameterId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
        this.schoolSequenceView = {
            sequenceCategoryTypeId: 0,
            startingSequence: 0,
            sequenceParameterIds: []
        };
        this.requiredSequence = '';
        this.requiredParameters = '';
        this.sequenceFormSubmitted = true;
        this.error_AlreadyExists = false;
        this.isSequenceFormSubmitted = true;
        if (sequenceForm.value.sequenceformat == null || sequenceForm.value.sequenceformat === '') {
            this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_PARAMETER;
            return false;
        }
        if (sequenceForm.value.sequenceformat != null) {
            var sequenceValue = sequenceForm.value.sequenceformat.split('%');
            if (sequenceForm.value.sequenceParameterId.code !== undefined) {
                this.requiredParameters = (!sequenceValue.find(function (z) { return z === sequenceForm.value.sequenceParameterId.code; }))
                    ? app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_SELECT_BUTTON : null;
                this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
                return false;
            }
            else {
                if (!sequenceValue.find(function (z) { return z === 'Sequence Number'; })) {
                    this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SELECT_SEQUENCE_NUMBER;
                    this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
                    return false;
                }
            }
        }
        if (this.codesArray.filter(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SEQUENCE_CODE; })[0] !== undefined) {
            var i_1 = 0;
            this.codesArray.forEach(function (data) {
                _this.schoolSequenceView.sequenceParameterIds[i_1++] = { id: data.value, code: (data.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) ? data.displayValue : '' };
            });
            this.schoolSequenceView.sequenceCategoryTypeId = sequenceForm.value.sequenceCategoryId;
            this.schoolSequenceView.startingSequence = this.sequenceNumber;
            this.submitted = false;
            this.sequenceForm.controls['sequenceParameterId'].clearValidators();
            this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
            if (isSequence) {
                this.schoolSequenceView.schoolId = this.data;
                this.sequenceConfiguratonService.createNewSequence(this.schoolSequenceView).subscribe(function (res) { return _this.response(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else if (sequenceForm.valid && !isSequence) {
                var index = this.listOfSequences.findIndex(function (x) { return x.sequenceCategoryTypeId === _this.schoolSequenceView.sequenceCategoryTypeId; });
                if (index !== -1) {
                    this.listOfSequences.splice(index, 1);
                }
                this.listOfSequences.push(this.schoolSequenceView);
            }
        }
        else {
            this.requiredSequence = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SELECT_SEQUENCE_NUMBER;
        }
    };
    // response
    SequenceConfigurationComponent.prototype.response = function (data) {
        this.submitted = false;
        this.codesArray = [];
        this.requiredSequence = '';
        this.requiredParameters = '';
        this.disableSubmitBtn = false;
        if (data.statusCode === this.HttpStatus.OK) {
            this.dialog.closeAll();
            this.sequenceForm.reset();
            this.closeAddPanel = true;
        }
        else {
            this.closeAddPanel = false;
        }
        this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
        this.openSnackBar(data.messages.ResultMessage);
    };
    SequenceConfigurationComponent.prototype.onInputChange = function () {
        var value = this.sequenceForm.controls['sequencecode'].value;
        var stringexpression = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].STRING_EXPRESSION;
        var numberExpression = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NUMBER_EXPRESSION;
        if (value !== '') {
            if (this.sequenceForm.controls['sequenceParameterId'].value.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_CODE) {
                if (stringexpression.test(value) === false) {
                    this.isSequenceCodeError = false;
                    if (app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].LENGTH_LIMIT_EXCEED.test(value) === false) {
                        this.isSequenceCodeError = true;
                        this.sequenceCodeErrorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MAXIMUM_LENGTH_TEXT;
                    }
                    else {
                        this.isSequenceCodeError = true;
                        this.sequenceCodeErrorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_ONLY_TEXT;
                    }
                    this.isError = true;
                }
                else {
                    this.isSequenceCodeError = false;
                    this.sequenceCodeErrorMsg = '';
                    this.isError = false;
                    this.sequenceText = value;
                }
            }
            else {
                if (numberExpression.test(value) === false) {
                    this.isSequenceCodeError = false;
                    if (app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].LENGTH_LIMIT_EXCEED.test(value) === false) {
                        this.isSequenceCodeError = true;
                        this.sequenceCodeErrorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MAXIMUM_LENGTH_NUMBER;
                    }
                    else {
                        this.sequenceCodeErrorMsg = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ENTER_ONLY_NUMBERS;
                    }
                    this.isError = true;
                    this.isSequenceCodeError = true;
                }
                else {
                    this.isSequenceCodeError = true;
                    this.sequenceCodeErrorMsg = '';
                    this.isError = false;
                    this.sequenceNumber = value;
                }
            }
        }
        else {
            this.isSequenceCodeError = true;
        }
    };
    SequenceConfigurationComponent.prototype.onClearSequenceFormat = function () {
        this.sequenceForm.controls['sequencecode'].disable();
        this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
        this.sequenceForm.controls['sequenceformat'].markAsUntouched();
        this.dynamicPlaceholder = '';
        this.requiredParameters = '';
        this.requiredSequence = '';
        this.sequenceErrMsg = '';
        this.sequenceCodeErrorMsg = '';
        this.sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
        this.codesArray = [];
        this.sequenceParams = [];
        this.sequenceDisplayText = '';
        this.sequenceForm.controls['sequenceformat'].reset();
        this.sequenceForm.controls['sequenceParameterId'].reset();
        this.isTextBoxShow = true;
        this.sequenceForm.controls['sequencecode'].setValue('');
        this.isCheckMark = true;
        this.isSequenceNumberError = true;
        this.error_AlreadyExists = false;
        this.isValid = true;
        this.sequnceParameterList.forEach(function (sequence) {
            sequence.disabled = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sequnce'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SequenceConfigurationComponent.prototype, "myForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SequenceConfigurationComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('code'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SequenceConfigurationComponent.prototype, "seqCode", void 0);
    SequenceConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequence-configuration',
            template: __webpack_require__(/*! ./sequence-configuration.component.html */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.html"),
            styles: [__webpack_require__(/*! ./sequence-configuration.component.scss */ "./src/app/modules/school-admin/sequence-configuration/sequence-configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], app_service_academic_service_api_sequence_service__WEBPACK_IMPORTED_MODULE_8__["SequenceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SequenceConfigurationComponent);
    return SequenceConfigurationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/school-admin/service-configuration/service-configuration.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/service-configuration/service-configuration.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-32 pb-24\">\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <div class=\"p-24 border-bottom\" id=\"toolbar\" fxLayoutAlign=\"space-between center\">\n      <span translate class=\"font-size-18 text-uppercase\">SERVICE PROVIDER CONFIGURATION</span>\n      <button mat-icon-button (click)=\"getHelpText('Service Provider Configuration')\"><mat-icon>info</mat-icon></button>\n    </div>\n    <mat-accordion class=\"filter-accordian\">\n      <mat-expansion-panel [expanded]=\"accordionStep\" class=\"mobile-filter\">\n        <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\">\n          <form [formGroup]=\"serviceProviderForm\" #serviceForm=\"ngForm\" fxLayout=\"column\" fxFlex.gt-sm=\"60\" fxFlex=\"100\" autocomplete=\"off\">\n            <div fxLayout=\"row\" fxLayoutAlign.gt-sm=\"center center\">\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                class=\"p-20\">\n                <mat-label #classId translate>Service Provider</mat-label>\n                <mat-select [disabled]=\"disableServiceType\" formControlName=\"serviceProviderId\"\n                  (selectionChange)=\"onProviderSelect($event.value)\" required>\n                  <mat-option *ngFor=\"let provider of displayServiceProvidersList\" [value]=\"provider.id\">\n                    {{provider.name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <ng-container *ngIf=\"serviceConfigParams.length\">\n              <div fxLayout=\"row wrap\" fxFlex=\"100\">\n                <ng-container *ngFor=\"let control of serviceConfigParams; let j=index\">\n                  <mat-form-field *ngIf=\"control.inputType == 'Text' || control.inputType == 'Password'\"\n                    appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\">\n                    <mat-label translate>{{control.displayName}}</mat-label>\n                    <input (keyup)=\"preventSpaceForArray($event,serviceProviderForm.controls[control.key])\"\n                    (blur)=\"trimTextBoxSpaces('serviceProviderForm',control.key)\" matInput [required]=\"isFieldIsRequired(serviceProviderForm,control.key)\" [type]=\"control.inputType.toLowerCase()\" [formControlName]=control.key>\n                    <mat-error>\n                      <app-validation [labelName]=\"control.displayName\"\n                        [validationControl]=\"serviceProviderForm.controls[control.key]\" [doValidate]=\"validate\">\n                      </app-validation>\n                    </mat-error>\n                  </mat-form-field>\n\n                  <div *ngIf=\"control.inputType == 'Radio'\" fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign.gt-sm=\"center center\" \n                    class=\"pr-sm-20 mb-12\">\n                    <mat-label translate class=\"pb-8 pl-24\">{{control.displayName}}? {{isFieldIsRequired(serviceProviderForm,control.key) ? '*' : ''}}</mat-label>\n                    <mat-radio-group class=\"grey-500-fg text-semibold\" aria-label=\"Select an option\"\n                      [formControlName]=control.key>\n                      <mat-radio-button class=\"ml-24\" *ngFor=\"let radio of YesOrNo\" [value]=\"radio.value\">{{radio.label |\n                            translate}}</mat-radio-button>\n                    </mat-radio-group>\n                    <mat-error *ngIf=\"serviceProviderForm.controls[control.key]?.dirty\">\n                      <app-validation [labelName]='control.displayName'\n                        [validationControl]=\"serviceProviderForm.controls[control.key]\" [doValidate]=\"validate\">\n                      </app-validation>\n                    </mat-error>\n                  </div>\n                  <div *ngIf=\"control.inputType == 'Color'\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20 pb-20\"\n                    fxLayoutAlign.gt-sm=\"center center\">\n                    <mat-label class=\"pr-8 pb-4\" translate>{{control.displayName}} {{isFieldIsRequired(serviceProviderForm,control.key) ? '*' : ''}}</mat-label>\n                    <fuse-material-color-picker *ngIf=\"colorCode != ''\" [color]=\"colorCode\"\n                      [(selectedClass)]=\"colorCode\" (colorChanged)=\"onColorChanged($event,control.key)\"\n                      [formControlName]=\"control.key\">\n                    </fuse-material-color-picker>\n\n                    <fuse-material-color-picker *ngIf=\"colorCode == ''\"\n                      (colorChanged)=\"onColorChanged($event,control.key)\" [formControlName]=\"control.key\">\n                    </fuse-material-color-picker>\n                  </div>\n                  <div *ngIf=\"control.inputType == 'HandlingFee'\" fxLayout=\"column\" fxFlex=\"100\"\n                    fxLayoutAlign=\"center center\" class=\"pr-sm-20 mb-12\">\n                    <mat-label translate class=\"pb-8 pl-24\">{{control.displayName}}?  {{isFieldIsRequired(serviceProviderForm,control.key) ? '*' : ''}}</mat-label>\n                    <mat-radio-group class=\"grey-500-fg text-semibold\" aria-label=\"Select an option\"\n                      [formControlName]=control.key>\n                      <mat-radio-button class=\"ml-24\" *ngFor=\"let handlingFeeMethod of handlingMethodOptions\"\n                        [value]=\"handlingFeeMethod.value\">{{handlingFeeMethod.label |\n                            translate}}</mat-radio-button>\n                    </mat-radio-group>\n                    <mat-error>\n                      <app-validation [labelName]='control.displayName'\n                        [validationControl]=\"serviceProviderForm.controls[control.key]\" [doValidate]=\"validate\">\n                      </app-validation>\n                    </mat-error>\n                  </div>\n                  <ng-container *ngIf=\"control.inputType == 'tax'\">\n                    <div formArrayName=\"tax\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\"\n                      *ngFor=\"let itemrow of addNewRowTaxform?.controls; let i=index,let f = first,let l = last\">\n                      <ng-container [formGroupName]=\"i\">\n                        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n                          class=\"pr-sm-20\">\n                          <mat-label #taxName translate>Tax Name</mat-label>\n                          <input matInput formControlName=\"name\"\n                          (keyup)=\"preventSpaceForArray($event,itemrow?.controls?.name)\"\n                          (blur)=\"trimSpaces(itemrow,'name')\"\n                          >\n                          <mat-error>\n                            <app-validation [labelName]='taxName.innerText' [validationControl]=\"itemrow?.controls?.name\"\n                              [doValidate]=\"validate\">\n                            </app-validation>\n                          </mat-error>\n                        </mat-form-field>\n                        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n                          class=\"pr-sm-20\">\n                          <mat-label #tax translate>Tax %</mat-label>\n                          <input matInput (blur)=\"trimSpaces(itemrow,'percentage')\" (keyup)=\"preventSpaceForArray($event,itemrow?.controls?.percentage)\" formControlName=\"percentage\">\n                          <mat-error><app-validation [labelName]='tax.innerText' [validationControl]=\"itemrow?.controls?.percentage\"\n                            [doValidate]=\"validate\"></app-validation></mat-error>\n                        </mat-form-field>\n                        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n                          class=\"pr-sm-12\">\n                          <mat-label #cal translate>Calculate on</mat-label>\n                          <mat-select  formControlName=\"applyOn\">\n                              <mat-option *ngIf=\"taxCalculationOnOptions.length\" [value]=\"null\"></mat-option>\n                            <mat-option *ngFor=\"let taxCalculationOnOption of taxCalculationOnOptions\"\n                              [value]=\"taxCalculationOnOption.value\">\n                              {{taxCalculationOnOption.label | translate}}</mat-option> \n                          </mat-select>\n                          <mat-error>\n                            <app-validation [labelName]='cal.innerText' [validationControl]=\"itemrow?.controls?.applyOn\"\n                                [doValidate]=\"validate\"></app-validation></mat-error>\n                        </mat-form-field>\n                        <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"10\" class=\"pt-12\">   \n                          <button *ngIf=\"i > 0 || addNewRowTaxform.controls.length > 1\" mat-icon-button type=\"button\" class=\"red-400-fg\"\n                            (click)=\"deleteRow(i)\">\n                            <mat-icon>delete</mat-icon>\n                          </button>\n                          <button *ngIf=\"l\" [disabled]=\"!(serviceProviderForm.get('tax').valid && itemrow?.controls?.applyOn.value)\" class=\"mr-8\" mat-mini-fab type=\"button\"\n                            (click)=\"addNewRow()\">\n                            <mat-icon>add</mat-icon>\n                          </button>\n                        </div>\n                      </ng-container>\n                    </div>\n                  </ng-container>\n                </ng-container>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-24\">\n                <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n                  (click)=\"closePanel()\">{{'Cancel' | translate}}</button>\n\n                <button [disabled]=\"disbleSubmitBtn\" (click)=\"addServiceConfig()\" mat-raised-button type=\"submit\"\n                  class=\"text-uppercase\" color=\"accent\">{{(isUpdateData ? 'Update':'Submit') | translate}}</button>\n              </div>\n            </ng-container>\n\n          </form>\n          <div fxLayout=\"column\" fxFlex.gt-sm=\"40\" fxFlex=\"100\" class=\"p-32\">\n\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel [expanded]=\"detailsShow\" class=\"mobile-filter mt-0\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n          <button mat-button [disabled]=\"!isEditDisabled\" (click)=\"editConfig()\">\n            <mat-icon class=\"grey-600-fg\">edit</mat-icon>\n          </button>\n          <button mat-raised-button class=\"text-uppercase mr-8\"\n            (click)=\"changeStatus(isEditDisabled)\"><span translate>{{isEditDisabled ? 'Disabled':'Enable'}}</span></button>\n          <button mat-raised-button (click)=\"closePanel()\" color=\"primary\" class=\"text-uppercase\"><span translate>Close</span></button>\n        </div>\n\n        <app-table [settings]=\"tabSettings\" [sticky]=\"false\"></app-table>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <div fxLayout.lt-sm=\"column\" fxLayout=\"row\" fxLayoutAlign=\"center start\" class=\"mt-20 pb-24 dt\">\n      <div fxLayout=\"column\" fxFlexFill fxFlex.lt-sm=\"100\" fxFlex=\"30\" class=\"border-right config-card\"\n        fxLayoutAlign=\"start center\">\n        <div class=\"text-uppercase p-20 font-size-20 stickyx text-center w-100-p\" translate>Payment</div>\n        <div (click)=\"openForm('Online')\" *ngIf=\"isAvailableNewMethod('Online')\"\n          class=\"h-160 w-160 text-center mb-20 grey-200-bg border border-dashed\" fxLayout=\"column\"\n          fxLayoutAlign=\"center center\">\n          <div class=\"font-size-40\">\n            <mat-icon class=\"s-56\">add_circle</mat-icon>\n          </div>\n          <div class=\"h3 secondary-text font-weight-500\" translate>Add Configuration</div>\n        </div>\n        <mat-card (click)=\"viewDetails(payment.code)\" *ngFor=\"let payment of paymentProvidersList\"\n          class=\"h-160 w-160 text-center mb-20 grey-200-bg border radius-5\" fxLayoutAlign=\"center center\">\n\n          <mat-card-content fxLayout=\"column\">\n            <div class=\"font-size-40 mb-4\">\n\n            </div>\n            <div class=\"h3 green-200-bg px-12 py-4 radius-5 green-fg status\" *ngIf=\"payment?.isActive\" translate>Active</div>\n            <div *ngIf=\"!payment?.isActive\" class=\"h3 red-fg red-200-bg px-12 py-4 radius-5 status\" translate>InActive</div>\n            <div class=\"h3 secondary-text font-weight-500 pt-8\">\n              <img *ngIf=\"payment.name.toLowerCase() === 'razorpay'\"\n                   src=\"https://razorpay.com/assets/razorpay-logo.svg\" [alt]=\"payment.name\" />\n              <img *ngIf=\"payment.name.toLowerCase() === 'paypal'\"\n                   src=\"https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png\" [alt]=\"payment.name\" />\n\n            </div>\n          </mat-card-content>\n        </mat-card>\n\n      </div>\n      <div fxLayout=\"column\" fxFlexFill fxFlex.lt-sm=\"100\" fxFlex=\"30\" class=\"border-right config-card\"\n        fxLayoutAlign=\"start center\">\n        <div class=\"text-uppercase p-20 font-size-20 stickyx text-center w-100-p\" translate>Email</div>\n        <div *ngIf=\"isAvailableNewMethod('Mail')\" (click)=\"openForm('Mail')\"\n          class=\"h-160 w-160 text-center mb-20 grey-200-bg border border-dashed\" fxLayout=\"column\"\n          fxLayoutAlign=\"center center\">\n          <div class=\"font-size-40 \">\n            <mat-icon class=\"s-56\">add_circle</mat-icon>\n          </div>\n          <div class=\"h3 secondary-text font-weight-500\" translate>Add Configuration</div>\n        </div>\n        <div *ngIf=\"mailProviders.length\">\n          <mat-card *ngFor=\"let mailProviderItem of mailProviders\" (click)=\"viewDetails(mailProviderItem.code)\"\n            class=\"h-160 w-160 text-center mb-20 grey-200-bg radius-5\" fxLayoutAlign=\"center center\">\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <mat-icon class=\"grey-600-fg font-size-40 mb-16 w-48\">email</mat-icon>\n              <div class=\"h3 green-200-bg px-12 py-4 radius-5 green-fg status\" *ngIf=\"mailProviderItem?.isActive\" translate>Active\n              </div>\n              <div *ngIf=\"!mailProviderItem?.isActive\" class=\"h3 red-200-bg px-12 py-4 radius-5 red-fg status\" translate>InActive\n              </div>\n              <div class=\"h3 secondary-text font-weight-500 pt-8\">{{mailProviderItem.name}} </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n      <div fxLayout=\"column\" fxFlexFill fxFlex.lt-sm=\"100\" fxFlex=\"30\" class=\"config-card\" fxLayoutAlign=\"start center\">\n        <div class=\"text-uppercase p-20 font-size-20 stickyx text-center w-100-p\" translate>SMS</div>\n        <div *ngIf=\"isAvailableNewMethod('SMS')\" (click)=\"openForm('SMS')\"\n          class=\"h-160 w-160 text-center mb-20 grey-200-bg border border-dashed\" fxLayout=\"column\"\n          fxLayoutAlign=\"center center\">\n          <div class=\"font-size-40 \">\n            <mat-icon class=\"s-56\">add_circle</mat-icon>\n          </div>\n          <div class=\"h3 secondary-text font-weight-500\" translate>Add Configuration</div>\n        </div>\n        <div>\n          <mat-card *ngFor=\"let smsProviderItem of smsProviders\" (click)=\"viewDetails(smsProviderItem.code)\"\n            class=\"example-card h-160 w-160 text-center mb-20 grey-200-bg radius-5\" fxLayoutAlign=\"center center\">\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <!--<mat-icon class=\"grey-600-fg font-size-40 mb-16 w-48\">sms</mat-icon>-->\n              <div class=\"h3 green-fg green-200-bg px-12 py-4 radius-5 green-fg status\"\n                *ngIf=\"smsProviderItem?.isActive\" translate>Active</div>\n              <div *ngIf=\"!smsProviderItem?.isActive\" class=\"h3 red-200-bg px-12 py-4 radius-5 red-fg status\" translate>InActive\n              </div>\n              <div class=\"h3 secondary-text font-weight-500 pt-8\">\n                <img *ngIf=\"smsProviderItem.name.toLowerCase() === 'msg91'\"\n                     src=\"https://msg91.com/wp-content/themes/msg91/images/msg-logo-blue.svg\" [alt]=\"smsProviderItem.name\" />\n                 </div>\n            </mat-card-content>\n          </mat-card>\n\n        </div>\n      </div>\n\n      <div fxLayout=\"column\" fxFlexFill fxFlex.lt-sm=\"100\" fxFlex=\"30\" class=\"border-right config-card\"\n      fxLayoutAlign=\"start center\">\n      <div class=\"text-uppercase p-20 font-size-20 stickyx text-center w-100-p\" translate>Class Room</div>\n      <div *ngIf=\"isAvailableNewMethod('Virtual Class')\" (click)=\"openForm('Virtual Class')\"\n        class=\"h-160 w-160 text-center mb-20 grey-200-bg border border-dashed\" fxLayout=\"column\"\n        fxLayoutAlign=\"center center\">\n        <div class=\"font-size-40 \">\n          <mat-icon class=\"s-56\">add_circle</mat-icon>\n        </div>\n        <div class=\"h3 secondary-text font-weight-500\" translate>Add Configuration</div>\n      </div>\n      <div *ngIf=\"classRoomProviders.length\">\n        <mat-card *ngFor=\"let classRoomProviderItem of classRoomProviders\" (click)=\"viewDetails(classRoomProviderItem.code)\"\n          class=\"h-160 w-160 text-center mb-20 grey-200-bg radius-5\" fxLayoutAlign=\"center center\">\n          <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <mat-icon class=\"grey-600-fg font-size-40 mb-16 w-48\">class</mat-icon>\n            <div class=\"h3 green-200-bg px-12 py-4 radius-5 green-fg status\" *ngIf=\"classRoomProviderItem?.isActive\" translate>Active\n            </div>\n            <div *ngIf=\"!classRoomProviderItem?.isActive\" class=\"h3 red-200-bg px-12 py-4 radius-5 red-fg status\" translate>InActive\n            </div>\n            <div class=\"h3 secondary-text font-weight-500 pt-8\">{{classRoomProviderItem.name}} </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/school-admin/service-configuration/service-configuration.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/school-admin/service-configuration/service-configuration.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".config-card {\n  max-height: 60vh;\n  overflow-y: auto; }\n  .config-card .border-dashed {\n    border-style: dashed;\n    border-width: 2px;\n    cursor: pointer; }\n  .config-card .mat-card {\n    cursor: pointer; }\n  .status {\n  position: absolute;\n  top: 0;\n  right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc2Nob29sLWFkbWluL3NlcnZpY2UtY29uZmlndXJhdGlvbi9zZXJ2aWNlLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFLUSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQVB2QjtJQVVRLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zY2hvb2wtYWRtaW4vc2VydmljZS1jb25maWd1cmF0aW9uL3NlcnZpY2UtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctY2FyZCB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLmJvcmRlci1kYXNoZWQge1xuICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7ICAgIFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXG4gICAgfVxuICAgIC5tYXQtY2FyZHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/school-admin/service-configuration/service-configuration.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/school-admin/service-configuration/service-configuration.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ServiceConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfigurationComponent", function() { return ServiceConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_communication_serviceConfiguration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/communication/serviceConfiguration.service */ "./src/app/service/communication/serviceConfiguration.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/yes-no-view */ "./src/app/models/yes-no-view.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);














var ServiceConfigurationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServiceConfigurationComponent, _super);
    function ServiceConfigurationComponent(commonService, serviceConfigurationService, _fb, cd, sanitizer, storeService, router, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.serviceConfigurationService = serviceConfigurationService;
        _this._fb = _fb;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.storeService = storeService;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.acord = [];
        _this.serviceProviders = [];
        _this.serviceProvidersList = [];
        _this.displayServiceProvidersList = [];
        _this.serviceConfigParams = [];
        _this.schoolServiceConfigs = [];
        _this.validate = true;
        _this.paymentProvidersList = [];
        _this.smsProviders = [];
        _this.mailProviders = [];
        _this.classRoomProviders = [];
        _this.accordionStep = false;
        _this.detailsShow = false;
        _this.rows = [];
        _this.isUpdateData = false;
        _this.YesOrNo = app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_10__["YesNo"].values;
        _this.handlingMethodOptions = [
            { value: 'Percentage', label: 'Percentage' },
            { value: 'Fixed', label: 'Fixed' }
        ];
        _this.taxCalculationOnOptions = [
            { value: 'invoice', label: 'Invoice Amount' },
            { value: 'handling_fee', label: 'Handling Charges' },
            { value: 'all', label: 'Invoice & Handling Charges' }
        ];
        _this.disbleSubmitBtn = false;
        _this.isEditDisabled = false;
        _this.disableServiceType = false;
        _this.providerIds = [];
        _this.schoolConfigs = [];
        _this.selectedBGColor = {
            palette: '',
            hue: '',
            class: '',
            bg: '',
            fg: ''
        };
        return _this;
    }
    ServiceConfigurationComponent.prototype.ngOnInit = function () {
        if (this.data == null || this.data === undefined) {
            this.data = this.getTokenParam('_si');
        }
        this.initializeData();
    };
    ServiceConfigurationComponent.prototype.initializeData = function () {
        this.disableServiceType = false;
        this.detailsShow = false;
        this.isUpdateData = false;
        this.accordionStep = false;
        this.serviceProvidersList = this.paymentProvidersList = [];
        this.mailProviders = this.smsProviders = [];
        this.serviceProviderForm = this._fb.group({
            serviceProviderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
        });
        this.valueChanges();
        this.getServiceProviders();
        this.getPaymentProviders();
        this.getSMSProviders();
        this.getMailProviders();
        this.getClassRoomProviders();
        this.schoolServiceConfigsView = {
            schoolServiceProviderConfigs: []
        };
        this.schoolServiceProviderConfigView = {
            serviceProviderConfigurationId: 0,
            value: ''
        };
        this.configArray = {
            serviceTypeId: 0,
            schoolId: this.data,
            schoolServiceProviderConfigs: []
        };
        this.updateConfig = {
            schoolId: this.data,
            schoolServiceConfigs: []
        };
        this.serviceCodeView = {
            code: '',
            statusFlag: ''
        };
    };
    ServiceConfigurationComponent.prototype.ngOnChanges = function () {
        this.initializeData();
    };
    ServiceConfigurationComponent.prototype.openForm = function (configCode) {
        this.serviceProviderForm = this._fb.group({
            serviceProviderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
        });
        this.valueChanges();
        this.displayServiceProvidersList = this.serviceProvidersList.filter(function (x) { return x.type === configCode; });
        this.displayServiceProvidersList = this.displayServiceProvidersList.filter(function (x) { return x.isConfigured === false; });
        if (this.displayServiceProvidersList.length === 0) {
            return;
        }
        this.disableServiceType = false;
        this.detailsShow = false;
        this.isUpdateData = false;
        this.accordionStep = true;
        this.serviceProviderForm.reset();
        this.myServiceProviderForm.resetForm();
        this.colorCode = '';
        this.serviceConfigParams = [];
        this.removeControls();
        this.serviceTypeId = this.displayServiceProvidersList[0].id;
        this.serviceProviderForm.controls['serviceProviderId'].patchValue(this.serviceTypeId);
        this.onProviderSelect(this.serviceTypeId);
    };
    ServiceConfigurationComponent.prototype.getPaymentProviders = function () {
        var _this = this;
        this.paymentProvidersList = [];
        this.serviceConfigurationService.paymentServiceProviders(this.data).subscribe(function (response) {
            if (response.resultModelList != null) {
                if (response.resultModelList.length) {
                    _this.paymentProvidersList = (response.resultModelList);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.getSMSProviders = function () {
        var _this = this;
        this.smsProviders = [];
        this.serviceConfigurationService.sMSServiceProviders(this.data).subscribe(function (response) {
            if (response.resultModelList != null) {
                _this.smsProviders = (response.resultModelList);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.getClassRoomProviders = function () {
        var _this = this;
        this.classRoomProviders = [];
        this.serviceConfigurationService.classroomServiceProviders(this.data).subscribe(function (response) {
            if (response.resultModelList != null) {
                _this.classRoomProviders = (response.resultModelList);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.getServiceProviders = function () {
        var _this = this;
        this.serviceProviders = [];
        this.serviceConfigurationService.serviceProviders(this.data).subscribe(function (response) {
            if (response.resultModelList != null && response.resultModelList.length) {
                _this.serviceProvidersList = response.resultModelList;
                _this.displayServiceProvidersList = response.resultModelList;
                response.resultModelList.forEach(function (element) {
                    _this.serviceProviders.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.getMailProviders = function () {
        var _this = this;
        this.mailProviders = [];
        this.serviceConfigurationService.emailServiceProviders(this.data).subscribe(function (response) {
            if (response.resultModelList != null) {
                _this.mailProviders = (response.resultModelList);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.onProviderSelect = function (serviceProvider) {
        var _this = this;
        this.serviceTypeId = serviceProvider;
        if (!this.isUpdateData) {
            this.removeControls();
        }
        this.serviceConfigurationService.serviceProviderConfigs(serviceProvider).subscribe(function (res) { return _this.serviceProviderParams(res); });
        this.myServiceProviderForm.submitted = false;
    };
    ServiceConfigurationComponent.prototype.serviceProviderParams = function (paramsList) {
        var _this = this;
        this.serviceConfigParams = paramsList.serviceConfigViews;
        paramsList.serviceConfigViews.forEach(function (element) {
            /*element.isRequired = element.isRequired === 1 ? AppSettings.SERV_REQ_Y : AppSettings.SERV_REQ_N;*/
            // console.log(element)
            if (element.key !== 'tax') {
                _this.serviceProviderForm.addControl(element.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _this.getValidators(element)));
            }
            else {
                /* this.serviceProviderForm = this._fb.group({
                   tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
                 });*/
                _this.serviceProviderForm.addControl(element.key, _this._fb.array([_this.initTaxRowsWithoutValidation()]));
            }
        });
        if (this.isUpdateData) {
            this.patchServiceDetails(this.serviceConfiguration);
        }
    };
    ServiceConfigurationComponent.prototype.getValidators = function (element) {
        var validators = [];
        var list = JSON.parse(element.validationRules);
        // tslint:disable-next-line:forin
        for (var key in list) {
            if (!list[key]) {
                continue;
            }
            switch (key.toLowerCase()) {
                case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].REQUIRED:
                    (validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].Email:
                    (validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MINLENGTH:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(list[key]));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MAXLENGTH:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(list[key]));
                    break;
                case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PATTERN:
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(list[key]));
                    break;
            }
        }
        return validators;
    };
    ServiceConfigurationComponent.prototype.onColorChanged = function (selectedcolor, control) {
        if (selectedcolor.bg !== undefined && selectedcolor.bg !== '') {
            this.selectedBGColor = selectedcolor;
            this.colorCode = selectedcolor.class;
            this.serviceProviderForm.controls[control].patchValue(this.colorCode);
        }
        this.myServiceProviderForm.submitted = false;
    };
    ServiceConfigurationComponent.prototype.addServiceConfig = function () {
        var _this = this;
        this.showValidations();
        if (this.serviceProviderForm.controls.tax) {
            this.serviceProviderForm.patchValue({ tax: this.serviceProviderForm.controls.tax.value });
        }
        if (this.serviceProviderForm.valid && (this.serviceProviderForm.controls.tax ? this.serviceProviderForm.controls.tax.valid : true)) {
            this.disbleSubmitBtn = true;
            this.schoolServiceConfigs.push(this.serviceProviderForm.value);
            this.configArray.schoolServiceProviderConfigs = [];
            this.configArray.serviceTypeId = this.serviceTypeId;
            this.configArray.schoolId = this.data;
            if (this.isUpdateData) {
                this.updateConfig.schoolServiceConfigs = [];
                this.updateConfig.schoolId = this.data;
                Object.keys(this.serviceProviderForm.value).forEach(function (key, index) {
                    if (key !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PROVIDER_ID) {
                        var findSchoolConfigs = _this.schoolConfigs.find(function (e) { return e.key === key; });
                        var serviceProviderConfigurationId = null;
                        var id = null;
                        if (findSchoolConfigs !== undefined && findSchoolConfigs !== null) {
                            serviceProviderConfigurationId = findSchoolConfigs.serviceProviderConfigId;
                            id = findSchoolConfigs.id;
                        }
                        else {
                            var findServiceConfigParams = _this.serviceConfigParams.find(function (e) { return e.key === key; });
                            serviceProviderConfigurationId = (findServiceConfigParams !== undefined) ?
                                findServiceConfigParams.id : null;
                        }
                        if (_this.serviceProviderForm.value[key] !== null && serviceProviderConfigurationId !== null) {
                            var updatedValue = (key === 'theme_color') ? _this.selectedBGColor.bg : _this.serviceProviderForm.value[key];
                            if (typeof updatedValue !== 'string') {
                                updatedValue = JSON.stringify(updatedValue);
                            }
                            _this.updateConfig.schoolServiceConfigs.push({
                                serviceProviderConfigurationId: serviceProviderConfigurationId, value: updatedValue,
                                id: id
                            });
                        }
                    }
                });
                this.serviceConfigurationService.updateSchoolServiceProviderConfig(this.updateConfig).subscribe(function (res) {
                    return _this.addUpdateResponse(res);
                }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                Object.keys(this.serviceProviderForm.value).forEach(function (key, index) {
                    if (key !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PROVIDER_ID) {
                        var serviceProviderConfigurationId = _this.serviceConfigParams.find(function (e) { return e.key === key; });
                        if (_this.serviceProviderForm.value[key] !== null && serviceProviderConfigurationId !== undefined) {
                            var updatedValue = _this.serviceProviderForm.value[key];
                            if (typeof updatedValue !== 'string') {
                                updatedValue = JSON.stringify(updatedValue);
                            }
                            _this.configArray.schoolServiceProviderConfigs.push({
                                serviceProviderConfigurationId: serviceProviderConfigurationId.id,
                                value: updatedValue
                            });
                        }
                    }
                });
                this.serviceConfigurationService.schoolServiceProviderConfig(this.configArray).subscribe(function (res) {
                    return _this.addUpdateResponse(res);
                }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    ServiceConfigurationComponent.prototype.addUpdateResponse = function (response) {
        this.disbleSubmitBtn = false;
        this.initializeData();
        this.closePanel();
        this.openSnackBar(response.messages.ResultMessage);
    };
    ServiceConfigurationComponent.prototype.closePanel = function () {
        this.serviceProviderForm.reset();
        this.accordionStep = false;
        this.myServiceProviderForm.resetForm();
        this.disbleSubmitBtn = false;
        this.detailsShow = false;
        this.removeControls();
        this.serviceConfigParams = [];
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.scrollIntoViewById('toolbar');
    };
    ServiceConfigurationComponent.prototype.removeControls = function () {
        var _this = this;
        this.serviceConfigParams.forEach(function (element) {
            _this.serviceProviderForm.removeControl([element.key][0]);
        });
    };
    ServiceConfigurationComponent.prototype.viewDetails = function (serviceId) {
        var _this = this;
        this.serviceConfigId = serviceId;
        this.detailsShow = true;
        this.accordionStep = false;
        this.serviceConfigurationService.schoolServiceConfigsByCode(serviceId, this.data).subscribe(function (res) { return _this.serviceDetails(res, serviceId); });
    };
    ServiceConfigurationComponent.prototype.serviceDetails = function (serviceData, serviceId) {
        var _this = this;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SHOW);
        if (serviceData.schoolServiceConfigDataViews && serviceData.schoolServiceConfigDataViews.length) {
            serviceData.schoolServiceConfigDataViews.forEach(function (element) {
                element.isRequired = element.isRequired === 1 ? app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SERV_REQ_Y : app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SERV_REQ_N;
            });
            this.serviceProviderName = serviceData.schoolServiceConfigDataViews[0].serviceProvider;
            var status_1 = serviceData.schoolServiceConfigDataViews.find(function (e) { return e.key === 'is_active'; }).value;
            this.isEditDisabled = +status_1 === 0 ? false : true;
            this.cols = [
                { field: 'parameterName', header: 'Configuration', sort: false },
                // { field: 'isRequired', header: 'isRequired', sort: false },
                { field: 'value', header: 'Value', sort: false },
            ];
            this.rows = serviceData.schoolServiceConfigDataViews;
            this.rows.forEach(function (row) {
                switch (row.key) {
                    case 'tax':
                        var rowValue = JSON.parse(row.value);
                        var finalValue_1 = '';
                        rowValue.forEach(function (taxItem) {
                            if (taxItem.name !== null && taxItem.name !== '') {
                                var delimeter = (finalValue_1 !== '') ? ', ' : '';
                                var applyOn = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](_this.taxCalculationOnOptions, { value: taxItem.applyOn });
                                finalValue_1 = finalValue_1 + delimeter + taxItem.name + '-' + taxItem.percentage + '% on ' + (applyOn ? applyOn.label : '');
                            }
                        });
                        row.value = finalValue_1;
                        break;
                    case 'handling_fee_collection_method':
                        // object.splice(index, 1);
                        /*if (handlingFeeCollectionValue !== '') {
                          row.value = handlingFeeCollectionMethod === 'Percentage' ? row.value + '%' : this.getFormattedCurrency(row.value);
                        }*/
                        break;
                    case 'handling_fee_value':
                        // @ts-ignore
                        var handlingFeeCollectionMethod = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](_this.rows, { key: 'handling_fee_collection_method' });
                        row.value = (handlingFeeCollectionMethod !== undefined && handlingFeeCollectionMethod.value === 'Percentage')
                            ? row.value + '%' : serviceData.currencyView.symbol + parseFloat(row.value).toFixed(2);
                        break;
                    case 'is_active':
                    case 'test_mode':
                    case 'Generate_otp':
                        row.value = (row.value && row.value !== '0') ? app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES : app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO;
                        break;
                    case 'key_secret':
                    case 'password':
                        row.value = '******';
                        break;
                }
            });
        }
        this.serviceName = serviceId + ' Configuration';
        this.tabSettings = {
            rows: this.rows,
            columns: this.cols,
            hideHeader: true,
            tablename: this.serviceName.toUpperCase(),
        };
    };
    ServiceConfigurationComponent.prototype.editConfig = function () {
        var _this = this;
        this.isUpdateData = true;
        this.detailsShow = false;
        this.disableServiceType = true;
        this.displayServiceProvidersList = this.serviceProvidersList;
        this.serviceConfigurationService.schoolServiceConfigs(this.serviceConfigId, this.data).subscribe(function (res) {
            _this.serviceConfiguration = res;
            _this.onProviderSelect(res.schoolServiceConfigDataViews[0].serviceProviderId);
            // this.patchServiceDetails(this.serviceConfiguration);
        });
    };
    ServiceConfigurationComponent.prototype.changeStatus = function (status) {
        var _this = this;
        status = status === true ? '0' : '1';
        this.serviceCodeView.code = this.serviceConfigId;
        this.serviceCodeView.statusFlag = status;
        this.serviceCodeView.schoolId = this.data;
        this.serviceConfigurationService.changeStatus(this.serviceCodeView).subscribe(function (res) {
            return _this.addUpdateResponse(res);
        }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    ServiceConfigurationComponent.prototype.patchServiceDetails = function (serviceData) {
        var _this = this;
        if (serviceData && serviceData.schoolServiceConfigDataViews) {
            this.serviceProviderForm.controls['serviceProviderId'].patchValue(serviceData.schoolServiceConfigDataViews[0].serviceProviderId);
            serviceData.schoolServiceConfigDataViews.forEach(function (element, j) {
                if (element.inputType === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].RADIO) {
                    element.value = +element.value;
                }
                if (element.key !== 'is_active' && element.key !== 'tax' && element.key !== 'theme_color') {
                    _this.serviceProviderForm.controls[element.key].patchValue(element.value);
                }
                if (element.key === 'theme_color') {
                    _this.selectedBGColor.bg = element.value;
                    _this.serviceProviderForm.controls[element.key].patchValue(_this.getColorClassByCode(element.value));
                }
                if (element.key === 'tax') {
                    var taxConfiguration = JSON.parse(element.value);
                    _this.serviceProviderForm.controls['tax'] = _this._fb.array([]);
                    var taxControl_1 = _this.serviceProviderForm.controls.tax;
                    if (taxConfiguration && taxConfiguration.length) {
                        taxConfiguration.map(function (taxConfig) {
                            taxControl_1.push(_this.getTaxRow(taxConfig));
                        });
                    }
                    else {
                        taxControl_1.push(_this.initTaxRowsWithoutValidation());
                    }
                    _this.valueChanges();
                    _this.serviceProviderForm.controls.tax.updateValueAndValidity();
                    _this.serviceProviderForm.updateValueAndValidity();
                }
            });
            this.schoolConfigs = serviceData.schoolServiceConfigDataViews;
        }
        this.accordionStep = true;
    };
    ServiceConfigurationComponent.prototype.setValidatorsForTax = function () {
        var taxControl = this.serviceProviderForm.get('tax');
        taxControl.controls[0].get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].PREVENT_SPACES), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]);
        taxControl.controls[0].get('percentage').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(100)]);
        taxControl.controls[0].get('applyOn').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.updateForm(taxControl);
    };
    ServiceConfigurationComponent.prototype.clearValidatorsForTax = function () {
        var taxControl = this.serviceProviderForm.get('tax');
        taxControl.controls[0].get('name').clearValidators();
        taxControl.controls[0].get('percentage').clearValidators();
        taxControl.controls[0].get('applyOn').clearValidators();
        this.updateForm(taxControl);
    };
    ServiceConfigurationComponent.prototype.updateForm = function (taxControl) {
        taxControl.controls[0].get('name').updateValueAndValidity({ emitEvent: false });
        taxControl.controls[0].get('percentage').updateValueAndValidity({ emitEvent: false });
        taxControl.controls[0].get('applyOn').updateValueAndValidity({ emitEvent: false });
        taxControl.controls[0].updateValueAndValidity({ emitEvent: false });
    };
    ServiceConfigurationComponent.prototype.isAvailableNewMethod = function (configCode) {
        var serviceProviders = this.serviceProvidersList.filter(function (x) { return x.type === configCode; });
        serviceProviders = serviceProviders.filter(function (x) { return x.isConfigured === false; });
        return (serviceProviders.length > 0);
    };
    ServiceConfigurationComponent.prototype.initTaxRows = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].PREVENT_SPACES)]),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
            applyOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    };
    ServiceConfigurationComponent.prototype.initTaxRowsWithoutValidation = function () {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            applyOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
    };
    ServiceConfigurationComponent.prototype.getTaxRow = function (rowData) {
        return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](rowData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](rowData.percentage, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
            applyOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](rowData.applyOn, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    };
    Object.defineProperty(ServiceConfigurationComponent.prototype, "addNewRowTaxform", {
        // return type for educaion details form
        get: function () {
            return this.serviceProviderForm.get('tax');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    ServiceConfigurationComponent.prototype.addNewRow = function () {
        var control = this.serviceProviderForm.controls['tax'];
        // add new formgroup
        control.push(this.initTaxRows());
        control.updateValueAndValidity();
        this.serviceProviderForm.updateValueAndValidity();
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    ServiceConfigurationComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.serviceProviderForm.controls['tax'];
        // remove the chosen row
        control.removeAt(index);
        control.updateValueAndValidity();
        this.serviceProviderForm.updateValueAndValidity();
    };
    ServiceConfigurationComponent.prototype.isObjectEmpty = function (form) {
        return !form.name && !form.percentage && !form.applyOn;
    };
    ServiceConfigurationComponent.prototype.valueChanges = function () {
        var _this = this;
        this.serviceProviderForm.controls.tax.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value.length === 1 && _this.isObjectEmpty(value[0])) {
                _this.clearValidatorsForTax();
            }
            else {
                _this.setValidatorsForTax();
            }
        });
    };
    ServiceConfigurationComponent.prototype.showValidations = function () {
        if (this.serviceConfigParams.find(function (control) { return control.inputType === 'Radio'; }) !== undefined) {
            var key = this.serviceConfigParams.find(function (control) { return control.inputType === 'Radio'; }).key;
            this.serviceProviderForm.controls[key].markAsDirty();
            this.serviceProviderForm.controls[key].updateValueAndValidity();
        }
    };
    ServiceConfigurationComponent.prototype.isFieldIsRequired = function (form, control) {
        if (form.controls[control] && form.controls[control].validator && form.controls[control].validator(control)) {
            return !!form.controls[control].validator(control).hasOwnProperty('required');
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serviceForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceConfigurationComponent.prototype, "myServiceProviderForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceConfigurationComponent.prototype, "data", void 0);
    ServiceConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-configuration',
            template: __webpack_require__(/*! ./service-configuration.component.html */ "./src/app/modules/school-admin/service-configuration/service-configuration.component.html"),
            styles: [__webpack_require__(/*! ./service-configuration.component.scss */ "./src/app/modules/school-admin/service-configuration/service-configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_communication_serviceConfiguration_service__WEBPACK_IMPORTED_MODULE_2__["ServiceConfigurationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
    ], ServiceConfigurationComponent);
    return ServiceConfigurationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/manage-school/school-settings-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/manage-school/school-settings-service.ts ***!
  \******************************************************************/
/*! exports provided: SchoolSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolSettingsService", function() { return SchoolSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
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






var SchoolSettingsService = /** @class */ (function () {
    function SchoolSettingsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["ModuleConfig"].Base;
        // protected basePath = "http://localhost:8013";
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
    SchoolSettingsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
 * Get school settings By SchoolId
 *
 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
 * @param reportProgress flag to report request and response progress.
 */
    SchoolSettingsService.prototype.getSchoolSettings = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSchoolSettings.');
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].SchoolSettings_SchoolSettingsById, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Update School Settings
     *
     * @param schoolSettingsViewModel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    SchoolSettingsService.prototype.updateSchoolSettings = function (schoolSettingsViewModel, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].SchoolSettings_UpdateSchoolSettings, schoolSettingsViewModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
    * Get Currency Types
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    SchoolSettingsService.prototype.dateFormatTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].Date_FormatTypes, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
    * Get PersonNameFormatTypes
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    SchoolSettingsService.prototype.personNameFormatTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].Person_Name_FormatTypes, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], SchoolSettingsService);
    return SchoolSettingsService;
}());



/***/ }),

/***/ "./src/app/service/school-admin/api/school-Infrastructure.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/service/school-admin/api/school-Infrastructure.service.ts ***!
  \***************************************************************************/
/*! exports provided: SchoolInfrastructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolInfrastructureService", function() { return SchoolInfrastructureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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







var SchoolInfrastructureService = /** @class */ (function () {
    function SchoolInfrastructureService(commmonComponent, httpClient, basePath, configuration) {
        this.commmonComponent = commmonComponent;
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    SchoolInfrastructureService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SchoolInfrastructureService.prototype.addBuildings = function (schoolbuildings, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_PostSchoolBuildings, schoolbuildings, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.addFloor = function (schoolFloor, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_PostFloor, schoolFloor, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.addRoom = function (schoolRoomView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_PostRooms, schoolRoomView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.deleteFloor = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFloor.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_DeleteFloor, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.deleteRoom = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRoom.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_DeleteRoom, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.deleteSchoolBuilding = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSchoolBuilding.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_DeleteSchoolBuliding, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.getBuildingFloorsAndRooms = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBuildingFloorsAndRooms.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_GetFloorsAndRooms, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.getRoomTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_GetRoomTypes, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.getSchoolbuildings = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commmonComponent.setQueryParams(id, 'Id', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_GetSchoolBuildings, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.updateFloor = function (schoolFloorUpdateView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_UpdateFloor, schoolFloorUpdateView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.updateRoom = function (schoolRoomUpdateView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_UpdateRoom, schoolRoomUpdateView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService.prototype.updateSchoolBuilding = function (schoolBuildingUpdateView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._SchoolBuilding_UpdateBuilding, schoolBuildingUpdateView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolInfrastructureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], SchoolInfrastructureService);
    return SchoolInfrastructureService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-school-admin-school-admin-module~app-shared-wizard-wizard-module.js.map