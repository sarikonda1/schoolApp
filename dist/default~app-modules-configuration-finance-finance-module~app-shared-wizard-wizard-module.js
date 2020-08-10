(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-finance-finance-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table *ngIf=\"dataLoaded | async\" [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)'\n  (openAddForm)=\"openFeeAccountForm()\" [closeRowForm]='closeAddPanel' [templateRef]=\"feeAccountTemplate\"\n  (getTableData)='getAllFeeAccounts($event)' [showSelectAll]=\"selectAll\" (deleteAllRows)=\"deleteAll()\"\n  (selectedRows)='selectedRows($event)'>\n</app-table>\n\n<ng-template #feeAccountTemplate>\n  <form [formGroup]=\"feeAccountForm\" (ngSubmit)=\"addOrUpdateFeeAccount(feeAccountForm)\" #feeAccountDataForm=\"ngForm\">\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n        <mat-label #accountName translate>accountname</mat-label>\n        <input (keyup)=\"preventSpace($event,'feeAccountForm','accountName')\" matInput autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feeAccountForm','accountName')\" formControlName=\"accountName\"\n          required>\n        <mat-error>\n          <app-validation [labelName]=\"accountName.innerText\" [validationControl]=\"feeAccountForm.controls.accountName\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"36\"\n        class=\"px-sm-20\">\n        <mat-label #code translate>Code</mat-label>\n        <input (keyup)=\"preventSpace($event,'feeAccountForm','code')\" matInput autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feeAccountForm','code')\" formControlName=\"code\">\n        <mat-error>\n          <app-validation [labelName]=\"code.innerText\" [validationControl]=\"feeAccountForm.controls.code\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n        <mat-label #displayName translate>displayname</mat-label>\n        <input (keyup)=\"preventSpace($event,'feeAccountForm','displayName')\" matInput autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feeAccountForm','displayName')\" formControlName=\"displayName\">\n        <mat-error>\n          <app-validation [labelName]=\"displayName.innerText\" [validationControl]=\"feeAccountForm.controls.displayName\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\" class=\"pt-12\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\">\n        <mat-label #description translate>description</mat-label>\n        <input (keyup)=\"preventSpace($event,'feeAccountForm','description')\" matInput autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feeAccountForm','description')\" formControlName=\"description\">\n        <mat-error>\n          <app-validation [labelName]=\"description.innerText\" [validationControl]=\"feeAccountForm.controls.description\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16 pb-8\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">\n        {{'Cancel' | translate}}</button>\n\n      <button [disabled]=\"disableSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n        mat-button>{{this.buttonName | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS1hY2NvdW50cy9mZWUtYWNjb3VudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FeeAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeAccountsComponent", function() { return FeeAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/configuration/finance/api/api */ "./src/app/service/configuration/finance/api/api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");









var FeeAccountsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeAccountsComponent, _super);
    function FeeAccountsComponent(dialogRef, commonService, feeAccountService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.feeAccountService = feeAccountService;
        _this.snackBar = snackBar;
        // refernces for smart table
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'FeeAccountsComponent';
        _this.validate = true;
        _this.filterDetails = [];
        _this.dataLoaded = Promise.resolve(false);
        _this.disableSubmitBtn = false;
        return _this;
    }
    FeeAccountsComponent.prototype.ngOnInit = function () {
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.feeAccountsSearchView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
            failedRecords: [],
            displayName: [],
            accountName: [],
            code: [],
            description: []
        };
        this.feeAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            accountName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(135)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.feeAccountsSearchView = modelTableComponent;
        }
        this.getAllFeeAccounts(this.feeAccountsSearchView);
        // fee account table Colums
        this.cols = [
            { field: 'accountName', header: 'accountname', sort: true },
            { field: 'displayName', header: 'displayname', sort: true },
            { field: 'code', header: 'Code', sort: true },
            { field: 'description', header: 'description', sort: true },
            { field: 'actions', header: 'Actions' },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.feeAccountsSearchView,
            tablename: 'FeeAccounts',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
        };
    };
    // get all fee accounts list method
    FeeAccountsComponent.prototype.getAllFeeAccounts = function (_searchFeeAccounts) {
        var _this = this;
        this.feeAccountsSearchView = _searchFeeAccounts;
        this.feeAccountService.feeAccountDetails(_searchFeeAccounts.sortBy, _searchFeeAccounts.accountName, _searchFeeAccounts.code, _searchFeeAccounts.displayName, _searchFeeAccounts.description, _searchFeeAccounts.sortOrder, _searchFeeAccounts.failedRecords, _searchFeeAccounts.pageNumber, _searchFeeAccounts.pageSize).subscribe(function (res) { _this.feeAccountsResponse(res); _this.dataLoaded = Promise.resolve(true); }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeAccountsComponent.prototype.feeAccountsResponse = function (res) {
        if (!res.feeAccountsView) {
            this.rows = [];
        }
        else {
            this.rows = res.feeAccountsView.list;
            this.totalItems = res.feeAccountsView.totalItems;
        }
        var sectionOperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT_ICON
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_ICON,
            },
        ];
        this.rows.forEach(function (e) {
            e.operations = sectionOperations;
        });
        if (res.feeAccountsView) {
            this.feeAccountsSearchView.pageNumber = res.feeAccountsView.pageNumber;
        }
        this.filterDetails = res.filters;
        this.tabSettings = {
            columns: this.cols,
            model: this.feeAccountsSearchView,
            rows: this.rows,
            tablename: 'Fee Accounts',
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isSelectRowRequired: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'new'
                },
                infoButton: {
                    required: true,
                    text: 'Fee Accounts'
                }
            },
            filtersList: res.filters,
        };
    };
    // End
    // to open new section page
    FeeAccountsComponent.prototype.openFeeAccountForm = function () {
        this.closeAddPanel = false;
        this.feeAccountDataForm.resetForm();
        this.isUpdate = false;
        this.validate = true;
        this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SUBMIT;
    };
    // to add or update fee account  details method
    FeeAccountsComponent.prototype.addOrUpdateFeeAccount = function (feeAccountForm) {
        var _this = this;
        this.validate = true;
        if (this.feeAccountForm.invalid) {
            return;
        }
        else {
            this.disableSubmitBtn = true;
            if (this.isUpdate) {
                this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].UPDATE;
                this.updateFeeAccountView = feeAccountForm.value;
                this.feeAccountService.updateFeeAccountDetails(this.updateFeeAccountView).subscribe(function (res) { return _this.feeAccountResponse(res); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SUBMIT;
                this.feeAccountService.createFeeAccountDetails(feeAccountForm.value).subscribe(function (res) { return _this.feeAccountResponse(res); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // fee account response based on request
    FeeAccountsComponent.prototype.feeAccountResponse = function (res) {
        if (res.statusCode === this.HttpStatus.OK) {
            this.dialogRef.closeAll();
            this.closeAddPanel = true;
            this.feeAccountIds = [];
            this.feeAccountsSearchView.failedRecords = [];
            this.disableSubmitBtn = false;
            this.getAllFeeAccounts(this.feeAccountsSearchView);
            this.openSnackBar(res.messages.ResultMessage);
        }
        else {
            this.closeAddPanel = false;
            this.openSnackBar(res.messages.ResultMessage, true);
        }
    };
    FeeAccountsComponent.prototype.selectedRows = function (data) {
        this.feeAccountIds = [];
        for (var index = 0; index < data.length; index++) {
            this.feeAccountIds.push(data[index].id);
        }
    };
    // when click the cancel button closed the fee account form
    FeeAccountsComponent.prototype.cancel = function () {
        this.closeAddPanel = true;
    };
    // fee account table row actions for edit and delete operations
    FeeAccountsComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT) {
            this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].UPDATE;
            this.feeAccountForm.controls['accountName'].setValue(response.clickedRow.accountName);
            this.feeAccountForm.controls['id'].setValue(response.clickedRow.id);
            this.feeAccountForm.controls['displayName'].setValue(response.clickedRow.displayName);
            this.feeAccountForm.controls['code'].setValue(response.clickedRow.code);
            this.feeAccountForm.controls['description'].setValue(response.clickedRow.description);
            this.closeAddPanel = false;
            this.isUpdate = true;
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE) {
            this.feeAccountIds = [];
            this.feeAccountIds.push(response.clickedRow.id);
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                    _this.feeAccountService.deleteFeeAccountDetails(_this.feeAccountIds).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    // multi delete functionalities from fee account table
    FeeAccountsComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_MULTI_DELETE, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.feeAccountService.deleteFeeAccountDetails(_this.feeAccountIds).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                    if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                        _this.feeAccountsSearchView.failedRecords = error.error.failedRecords;
                    }
                    _this.getAllFeeAccounts(_this.feeAccountsSearchView);
                    _this.errorResponse(error);
                });
            }
        });
    };
    FeeAccountsComponent.prototype.deleteResponse = function (response) {
        this.feeAccountsSearchView.failedRecords = response.failedRecords;
        this.getAllFeeAccounts(this.feeAccountsSearchView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feeAccountTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeAccountsComponent.prototype, "feeAccountTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feeAccountDataForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeAccountsComponent.prototype, "feeAccountDataForm", void 0);
    FeeAccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-accounts',
            template: __webpack_require__(/*! ./fee-accounts.component.html */ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.html"),
            styles: [__webpack_require__(/*! ./fee-accounts.component.scss */ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_6__["FeeAccountService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], FeeAccountsComponent);
    return FeeAccountsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='concessionGroupTableData($event)'\n  [templateRef]=\"feeConcessionGroupTemplate\" (rowBasedAction)='rowActions($event)' [closeRowForm]='closeAddPanel'\n  (openAddForm)=\"openForm()\">\n</app-table>\n\n<ng-template #feeConcessionGroupTemplate>\n  <form *ngIf=\"((dataLoaded && typeLoaded) || isUpdate)\" fxLayout=\"column\" [formGroup]=\"feeConcessionGroupForm\" id=\"add-update-form\"\n    (ngSubmit)=\"save(feeConcessionGroupForm)\" #feeConcessionForm=\"ngForm\">\n    <div formArrayName=\"feeConcessionGroupArray\"\n      *ngFor=\"let itemrow of feeConcessionGroupForm?.get('feeConcessionGroupArray')?.controls; let i=index\">\n      <div [formGroupName]=\"i\">\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"py-24\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\"  fxFlex=\"100\" fxFlex.gt-xs=\"25\">\n            <mat-label #groupname translate>Concession Group</mat-label>\n            <input  (keyup)=\"preventSpaceForArray($event,feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.groupName)\" (blur)=\"trimTextBoxSpaces('groupName','feeConcessionGroupForm')\" id =\"groupName\"\n              matInput required autocomplete=\"off\" formControlName=\"groupName\">\n            <mat-error>\n              <app-validation [labelName]='groupname.innerText'\n                [validationControl]=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.groupName\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" class=\"px-sm-20\" fxFlex=\"100\"\n            fxFlex.gt-xs=\"25\">\n            <mat-label #code translate>Code</mat-label>\n            <input matInput (keyup)=\"preventSpaceForArray($event,feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.code)\"  (blur)=\"trimTextBoxSpaces('code','feeConcessionGroupForm')\"\n              autocomplete=\"off\" formControlName=\"code\">\n            <mat-error>\n              <app-validation [labelName]='code.innerText'\n                [validationControl]=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.code\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #description translate>Description</mat-label>\n            <input matInput (keyup)=\"preventSpaceForArray($event,feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.description)\" \n              (blur)=\"trimTextBoxSpaces('description','feeConcessionGroupForm')\" autocomplete=\"off\"\n              formControlName=\"description\">\n            <mat-error>\n              <app-validation [labelName]='description.innerText'\n                [validationControl]=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.description\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"center start\" class=\"mb-24\">\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"20\" translate>Fee Type</div>\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"20\" class=\"px-20\" translate>Concession Type</div>\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"20\" translate>Term</div>\n          <div fxLayout=\"column\" fxFlexFill fxFlex=\"40\" class=\"pl-20\" translate>Concession</div>\n        </div>\n\n\n        <div formArrayName=\"feeConcessionFeeType\" *ngFor=\"let itemrow1 of feeConcession(itemrow).controls; let j=index\">\n          <div [formGroupName]=\"j\" fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxLayout=\"column\" fxFlexFill fxFlex=\"20\" id=\"feeTypeId\">\n              {{itemrow1?.controls['feeTypeName']?.value}}</div>\n\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"20\" class=\"px-20\">\n              <mat-label #concessiontypetext translate>Concession Type</mat-label>\n              <mat-select name=\"concessiontypeId\" formControlName=\"concessionTypeId\"\n                (selectionChange)=\"onSelectConcessionType($event,itemrow1?.controls['feeTypeId'],j,itemrow)\">\n                <mat-option *ngIf=\"concessionTypes?.length\"></mat-option>\n                <mat-option *ngFor=\"let concessiontype of concessionTypes\" [value]=\"concessiontype.value\">\n                  {{concessiontype.label}}\n                </mat-option>\n              </mat-select>\n\n            </mat-form-field>\n            <div *ngIf=\"getValue(itemrow,j)==true && feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.dropDownData.value == null\">The selected Fee Type does not have Fee Terms to offer Discount By Term.</div>\n\n            <div *ngIf=\"getValue(itemrow,j)==false\" fxLayout=\"column\" fxFlexFill fxFlex.gt-xs=\"20\">\n              <p #each translate>Each</p>\n            </div>\n\n            <div *ngIf=\"getValue(itemrow,j)==false\" fxLayout=\"column\" fxFlexFill fxFlex=\"40\">\n              <mat-form-field form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"40\"\n                class=\"w-148 formfield-pb-0\">\n                <mat-label #discount translate>Discount</mat-label>\n                <input (keyup)=\"preventSpaceForArray($event,itemrow1.controls.discount)\" matInput autocomplete=\"off\" numbersOnly\n                  formControlName=\"discount\">\n              </mat-form-field>\n              <mat-error>\n                <app-validation [isTollTip] = \"true\" [labelName]='discount.innerText'\n                  [validationControl]=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.discount\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </div>\n\n            <div *ngIf=\"getValue(itemrow,j)==true && dropDownLoaded | async\" fxLayout=\"column\" fxFlexFill\n              fxFlex.gt-xs=\"20\">\n              <app-custom-dropdown\n                *ngIf=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.dropDownData.value\"\n                formControlName=\"feeTypeForFeeTermIdMulti\" class=\"pr-20\"\n                (selectedData)=\"onSelectFeeTerm($event,j,itemrow1)\" (change)=\"ontestSeclect()\"\n                [dropDownConf]=\"feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.dropDownData.value\"\n                ngDefaultControl [disable]=\"disabled\">\n              </app-custom-dropdown>\n            </div>\n\n            <div\n              *ngIf=\"getValue(itemrow,j)==true && feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.feeTypeForFeeTermIdMulti.value.length>0\"\n              fxLayout=\" column\" fxFlexFill fxFlex=\"40\">\n              <div #terms fxLayout=\"row wrap\" fxFlex=\"100\">\n                <div formArrayName=\"feeConcessionFeeTerm\"\n                  *ngFor=\"let feeTerm of itemrow1.get('feeConcessionFeeTerm').controls; let h=index\">\n                  <div [formGroupName]=\"h\" class=\"pb-12\">\n                    <mat-form-field form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"30\"\n                      class=\"w-148  pr-12 formfield-pb-0\">\n                      <mat-label #termConcessionAmt translate>{{feeTerm?.controls['feeTermName']?.value}}</mat-label>\n                      <input (keyup)=\"preventSpaceForArray($event,feeTerm.controls.termConcessionAmt)\" matInput autocomplete=\"off\" numbersOnly\n                        formControlName=\"termConcessionAmt\">\n                      <mat-error class=\"pt-8 text-center\">\n                        <app-validation  [isTollTip] = \"true\"  [labelName]='termConcessionAmt.innerText'\n                          [validationControl]=\"feeTerm.controls.termConcessionAmt\"\n                          [doValidate]=\"true\">\n                        </app-validation>\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-20\">\n      <button mat-raised-button type=\"reset\" (click)=\"onCancelClick()\"\n        class=\"text-uppercase mr-12\">{{'Cancel' | translate}}</button>\n      <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n        mat-button>{{(isUpdate ? 'Update':'Submit') | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-10 {\n  bottom: 10px;\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS1jb25jZXNzaW9uLWdyb3VwL2ZlZS1jb25jZXNzaW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS1jb25jZXNzaW9uLWdyb3VwL2ZlZS1jb25jZXNzaW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS0xMHtcbiAgICBib3R0b206MTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FeeConcessionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeConcessionGroupComponent", function() { return FeeConcessionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-concession-group.service */ "./src/app/service/configuration/finance/api/fee-concession-group.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var FeeConcessionGroupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeConcessionGroupComponent, _super);
    function FeeConcessionGroupComponent(_fb, commonService, dialog, commonComponent, _feeConcessionGroupService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.commonComponent = commonComponent;
        _this._feeConcessionGroupService = _feeConcessionGroupService;
        _this.snackBar = snackBar;
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.filterRowData = [];
        _this.gridName = 'feeconcessionghroupconfiguration';
        _this.closeAddPanel = true;
        _this.concessionTypes = [];
        _this.feeTypes = [];
        _this.feeTerms = [];
        _this.dropDownLoaded = Promise.resolve(false);
        _this.dataLoaded = false;
        _this.typeLoaded = false;
        _this.validate = false;
        _this.error = [];
        _this.disbleSubmitBtn = false;
        _this.m_feeConcessionGroupListView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            name: [],
            code: [],
            description: [],
            feeTypeIds: [],
            concession: [],
            concessionType: [],
            feeTermIds: [],
        };
        _this.feeConcessionGroupViewModel = {
            groupName: '',
            code: '',
            description: '',
            feeConcessionGroupFeeTypeViewModel: []
        };
        return _this;
    }
    FeeConcessionGroupComponent.prototype.ngOnInit = function () {
        this.getFeeTypes();
        this.getFeeConcessionTypes();
        this.cols = [
            { field: 'name', header: 'Concession Group' },
            { field: 'code', header: 'Code' },
            { field: 'description', header: 'Description' },
            { field: 'feeType', header: 'Fee Type' },
            { field: 'concessionType', header: 'Concession Type' },
            { field: 'term', header: 'Fee Term' },
            { field: 'concession', header: 'Concession Amount' },
            { field: 'actions', header: 'Actions' },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.m_feeConcessionGroupListView = modelTableComponent;
        }
        // initializing table settings /
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.m_feeConcessionGroupListView,
            tablename: 'Fee Concession Groups',
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
        };
        this.loadConcessionGroupdata();
    };
    FeeConcessionGroupComponent.prototype.createFeeConcessionGroupItem = function (groupName, code, description) {
        if (groupName === void 0) { groupName = ''; }
        if (code === void 0) { code = ''; }
        if (description === void 0) { description = ''; }
        return this._fb.group({
            groupName: [groupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)],
            code: [code, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(6)],
            description: [description, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(135)],
            feeConcessionFeeType: this.createFeeConcessionTypeArray(),
        });
    };
    FeeConcessionGroupComponent.prototype.createFeeConcessionTypeArray = function () {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        if (this.feeTypes.length > 0) {
            this.feeTypes.forEach(function (element) {
                arr.push(_this.createFeeType(element.label, element.value));
            });
        }
        else {
            this.createFeeType('', '');
        }
        return arr;
    };
    FeeConcessionGroupComponent.prototype.createFeeType = function (feeTypeName, feeTypeId) {
        if (feeTypeName === void 0) { feeTypeName = ''; }
        if (feeTypeId === void 0) { feeTypeId = ''; }
        return this._fb.group({
            feeTypeName: feeTypeName,
            feeTypeId: feeTypeId,
            concessionTypeId: '',
            isfeeterms: false,
            feeTypeForFeeTermIdMulti: '',
            feeTerms: '',
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999)]),
            dropDownData: '',
            feeConcessionFeeTerm: this.createFeeterm(),
        });
    };
    FeeConcessionGroupComponent.prototype.createFeeterm = function () {
        this.dataLoaded = true;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        return arr;
    };
    FeeConcessionGroupComponent.prototype.createFeeConcessionFeeTermArray = function () {
        return this._fb.group({
            feeTypeForTermId: '',
            feeTermName: '',
            termConcessionAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999)]),
        });
    };
    FeeConcessionGroupComponent.prototype.getValue = function (form, i) {
        return form.controls.feeConcessionFeeType.controls[i].controls.isfeeterms.value;
    };
    FeeConcessionGroupComponent.prototype.feeConcession = function (form) {
        return form.get('feeConcessionFeeType');
    };
    FeeConcessionGroupComponent.prototype.openForm = function () {
        this.closeAddPanel = false;
        this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SUBMIT;
        this.feeConcessionGroupForm = this._fb.group({
            feeConcessionGroupArray: this._fb.array([this.createFeeConcessionGroupItem()])
        });
        this.valueChangesInfeeConcessionGroupArray();
    };
    // row-wise actions of the table(edit/delete)
    FeeConcessionGroupComponent.prototype.rowActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this._feeConcessionGroupService.deleteFeeConcessionGroup(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.feeConfigurationId = event.clickedRow.id;
            this._feeConcessionGroupService.fetchConcessionGroupById(event.clickedRow.id).subscribe(function (res) { return _this.getConcessionDetails(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // response after delete operation
    FeeConcessionGroupComponent.prototype.deleteResponse = function (deleteResponse) {
        this.loadConcessionGroupdata();
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    FeeConcessionGroupComponent.prototype.concessionGroupTableData = function (_event) {
        this.m_feeConcessionGroupListView = _event;
        this.loadConcessionGroupdata();
    };
    FeeConcessionGroupComponent.prototype.loadConcessionGroupdata = function () {
        var _this = this;
        this._feeConcessionGroupService.fetchFeeConcessionGroup(this.m_feeConcessionGroupListView.sortBy, this.m_feeConcessionGroupListView.sortOrder, this.m_feeConcessionGroupListView.name, this.m_feeConcessionGroupListView.code, this.m_feeConcessionGroupListView.description, this.m_feeConcessionGroupListView.feeTypeIds, this.m_feeConcessionGroupListView.concessionType, this.m_feeConcessionGroupListView.concession, this.m_feeConcessionGroupListView.feeTermIds, this.m_feeConcessionGroupListView.pageNumber, this.m_feeConcessionGroupListView.pageSize).subscribe(function (data) { return _this.response(data); }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeConcessionGroupComponent.prototype.response = function (data) {
        var _this = this;
        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }
        this.rows = [];
        if (data.feeConcessionGroupDataViewList) {
            this.rows = data.feeConcessionGroupDataViewList.list;
            this.totalItems = data.feeConcessionGroupDataViewList.totalItems;
        }
        else {
            this.rows = [];
        }
        var gridOperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE,
            },
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
                        if (value.name === element.name && value.id === element.id) {
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
        if (this.filterRowData.length > 0) {
            // apply edit and delete
            this.filterRowData.forEach(function (element) {
                _this.rows.forEach(function (element1) {
                    if (element.name === element1.name && element.id === element1.id && element.feeType === element1.feeType
                        && element.concessionType === element1.concessionType && element.term === element1.term) {
                        element1.operations = gridOperations;
                    }
                });
            });
            this.rows.forEach(function (ele) {
                if (ele.concessionType !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DISCOUT_PERCENT) {
                    ele.concession = ele.concession > 0
                        ? _this.getFormattedCurrency(ele.concession) : ele.concession;
                }
            });
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.m_feeConcessionGroupListView,
            rows: this.rows,
            tablename: 'Fee Concession Groups',
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            rowGroupingColumns: ['name', 'code', 'description', 'feeType', 'concessionType'],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Fee Concession Groups'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].BUTTON_NAME
                }
            }
        };
        this.filterRowData = this.rows;
    };
    FeeConcessionGroupComponent.prototype.getFeeTypes = function () {
        var _this = this;
        this.feeTypes = [];
        this._feeConcessionGroupService.fetchfeeTypes(null).subscribe(function (response) {
            if (response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.feeTypes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeConcessionGroupComponent.prototype.getFeeConcessionTypes = function () {
        var _this = this;
        this.concessionTypes = [];
        this._feeConcessionGroupService.fetchConcessionTypes(null).subscribe(function (response) {
            if (response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.concessionTypes.push({
                        label: element.name,
                        value: element.id,
                        code: element.code
                    });
                });
                _this.typeLoaded = true;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeConcessionGroupComponent.prototype.onSelectConcessionType = function (data, data1, i, form) {
        var _this = this;
        if (i === void 0) { i = 0; }
        this.feeConcessionFeeType = form.controls.feeConcessionFeeType;
        this.feeConcessionFeeType.controls[i].patchValue({ concessionTypeId: data.value ? data.value : null });
        form.controls.feeConcessionFeeType.controls[i].controls.discount.patchValue(null);
        this.feeTerms = [];
        form.controls.feeConcessionFeeType.controls[i].controls.feeTypeForFeeTermIdMulti.value = [];
        if (!data.value) {
            this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: false });
            form.controls.feeConcessionFeeType.controls[i].controls.feeConcessionFeeTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
            return;
        }
        if (this.concessionTypes.find(function (x) { return x.value === data.value; }).code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FCT_DISCOUNT_CODE
            || this.concessionTypes.find(function (x) { return x.value === data.value; }).code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FCT_TERMDISCOUNT_CODE) {
            this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: false });
            form.controls.feeConcessionFeeType.controls[i].controls.feeConcessionFeeTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        }
        else {
            form.controls.feeConcessionFeeType.controls[i].controls.discount.patchValue(null);
            this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: true });
            this._feeConcessionGroupService.fetchFeeTerms(data1.value).subscribe(function (response) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.feeTerms.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                    _this.dropDownLoaded = Promise.resolve(true);
                    _this.dropDownData = { multiSelect: true, placeholder: 'Fee Terms', data: _this.feeTerms, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND, isRequired: false };
                    _this.feeConcessionFeeType.controls[i].patchValue({ dropDownData: _this.dropDownData });
                }
                else {
                    _this.feeConcessionFeeType.controls[i].patchValue({ dropDownData: null });
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    FeeConcessionGroupComponent.prototype.onSelectFeeTerm = function (data, i, form) {
        var _this = this;
        if (i === void 0) { i = 0; }
        var existingfeeTermArray = [];
        var dataArray = [];
        if (data.length > 0) {
            data.forEach(function (element) {
                _this.feeConcessionFeeTerm = form.get('feeConcessionFeeTerm');
                dataArray.push(element.value);
                var isTermExist = false;
                if (_this.feeConcessionFeeTerm.controls.length > 0) {
                    existingfeeTermArray = [];
                    form.controls.feeConcessionFeeTerm.controls.forEach(function (ele) {
                        existingfeeTermArray.push(ele.controls.feeTypeForTermId.value);
                        if (ele.controls.feeTypeForTermId.value === element.value) {
                            isTermExist = true;
                        }
                    });
                }
                if (isTermExist === false) {
                    _this.feeConcessionFeeTerm.push(_this.createFeeTerm(element.label, element.value));
                }
            });
            var removableFeeTermId_1 = existingfeeTermArray.filter(function (item) {
                return !dataArray.includes(item);
            });
            if (removableFeeTermId_1.length > 0) {
                this.feeConcessionFeeTerm.removeAt(form.controls.feeConcessionFeeTerm.controls.findIndex(function (x) { return x.controls.feeTypeForTermId.value === removableFeeTermId_1[0]; }));
            }
        }
        else {
            var clearFormArray = form.get('feeConcessionFeeTerm');
            while (clearFormArray.length !== 0) {
                clearFormArray.removeAt(0);
            }
        }
    };
    FeeConcessionGroupComponent.prototype.createFeeTerm = function (FeeTermName, FeeTypeForFeeTermId) {
        if (FeeTermName === void 0) { FeeTermName = ''; }
        if (FeeTypeForFeeTermId === void 0) { FeeTypeForFeeTermId = 0; }
        return this._fb.group({
            feeTypeForTermId: FeeTypeForFeeTermId,
            feeTermName: FeeTermName,
            termConcessionAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999)])
        });
    };
    FeeConcessionGroupComponent.prototype.onCancelClick = function () {
        this.scrollIntoView('app-table');
        this.feeConcessionGroupForm.reset();
        this.feeConcessionForm.resetForm();
        this.closeAddPanel = true;
        this.validate = false;
        this.isUpdate = false;
        this.getFeeTypes();
        this.loadConcessionGroupdata();
    };
    FeeConcessionGroupComponent.prototype.ValidateForm = function (form) {
        var _this = this;
        this.error = [];
        var concessionTypeId = form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.reduce(function (tot, record) {
            return tot + record.controls.concessionTypeId.value;
        }, 0);
        if (concessionTypeId === '0' || concessionTypeId === 0) {
            this.error.push({
                errorMessage: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FEE_TYPE_REQUIRED,
                isValid: false
            });
            return;
        }
        form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(function (element) {
            if (element.controls.discount.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVALID) {
                // this.error = [];
                return;
            }
            if (element.controls.concessionTypeId.value > 0
                && element.controls.isfeeterms.value === false
                && (element.controls.discount.value === 0
                    || element.controls.discount.value === '' || element.controls.discount.value === null)) {
                _this.error.push({
                    errorMessage: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FEE_DISCOUNT_REQUIRED,
                    isValid: false
                });
                return;
            }
            if (element.controls.concessionTypeId.value > 0 &&
                element.controls.isfeeterms.value === true && element.controls.feeTypeForFeeTermIdMulti.value.length === 0) {
                if (element.controls.dropDownData.value) {
                    _this.error.push({
                        errorMessage: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FEE_TERMS_REQUIRED,
                        isValid: false
                    });
                }
                else {
                    _this.error.push({
                        errorMessage: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_FEE_TERMS,
                        isValid: false
                    });
                }
                return;
            }
            if (element.controls.concessionTypeId.value > 0 && element.controls.isfeeterms.value === true && element.controls.feeTypeForFeeTermIdMulti.value.length > 0) {
                element.controls.feeConcessionFeeTerm.controls.forEach(function (term) {
                    if (term.controls.termConcessionAmt.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVALID) {
                        // this.error = [];
                        return false;
                    }
                    if (term.controls.termConcessionAmt.value === 0 || term.controls.termConcessionAmt.value === '') {
                        _this.error.push({
                            errorMessage: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FEETERM_CONCESSION_REQUIRED,
                            isValid: false
                        });
                        return;
                    }
                });
            }
        });
    };
    FeeConcessionGroupComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    FeeConcessionGroupComponent.prototype.save = function (form) {
        var _this = this;
        this.feeConcessionGroupTermViewModel = [];
        if (this.feeConcessionGroupForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVALID) {
            document.getElementById('groupName').focus();
            return;
        }
        if (this.feeConcessionGroupForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            // if (this.feeConcessionFeeTerm && this.feeConcessionFeeTerm.status === AppSettings.INVALID) {
            //   return;
            // }
            this.ValidateForm(form);
            if (this.error.length > 0) {
                this.openSnackBar(this.error[0].errorMessage, true);
                this.scrollIntoViewById('add-update-form');
            }
            else {
                if (this.isUpdate) {
                    this.validate = false;
                    var updateModel = void 0;
                    updateModel = {
                        id: '',
                        feeConcessionGroupViewModel: this.feeConcessionGroupViewModel
                    };
                    this.prepareUpdateData(form);
                    updateModel.id = this.feeConfigurationId;
                    updateModel.feeConcessionGroupViewModel = this.feeConcessionGroupViewModel;
                    this._feeConcessionGroupService.updateFeeConcessionGroup(updateModel)
                        .subscribe(function (res) { return _this.addResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                else {
                    this.validate = false;
                    this.feeConcessionGroupViewModel.groupName = form.controls.feeConcessionGroupArray.controls[0].controls['groupName'].value;
                    this.feeConcessionGroupViewModel.code = form.controls.feeConcessionGroupArray.controls[0].controls.code.value;
                    this.feeConcessionGroupViewModel.description = form.controls.feeConcessionGroupArray.controls[0].controls.description.value;
                    this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel = [];
                    form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(function (element) {
                        _this.feeConcessionGroupTermViewModel = [];
                        //// Array For FeeTerms////
                        if (element.controls.concessionTypeId.value > 0) {
                            element.controls.feeConcessionFeeTerm.controls.forEach(function (item) {
                                _this.feeConcessionGroupTermViewModel.push({
                                    feeTypeForTermId: item.controls.feeTypeForTermId.value,
                                    termConcessionAmt: item.controls.termConcessionAmt.value
                                });
                            });
                            /// Array For FeeTypes///
                            _this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel.push({
                                feeTypeId: element.controls.feeTypeId.value,
                                concessionTypeId: element.controls.concessionTypeId.value,
                                discount: element.controls.discount.value,
                                feeConcessionGroupTermViewModel: _this.feeConcessionGroupTermViewModel
                            });
                        }
                    });
                    this._feeConcessionGroupService.createFeeConcessionGroup(this.feeConcessionGroupViewModel)
                        .subscribe(function (res) { return _this.addResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            }
        }
        else {
            this.ValidateForm(form);
        }
    };
    FeeConcessionGroupComponent.prototype.prepareUpdateData = function (form) {
        var _this = this;
        this.feeConcessionGroupViewModel.groupName = form.controls.feeConcessionGroupArray.controls[0].controls['groupName'].value;
        this.feeConcessionGroupViewModel.code = form.controls.feeConcessionGroupArray.controls[0].controls.code.value;
        this.feeConcessionGroupViewModel.description = form.controls.feeConcessionGroupArray.controls[0].controls.description.value;
        this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel = [];
        form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(function (element) {
            _this.feeConcessionGroupTermViewModel = [];
            //// Array For FeeTerms////
            if (element.controls.concessionTypeId.value > 0) {
                element.controls.feeConcessionFeeTerm.controls.forEach(function (item) {
                    _this.feeConcessionGroupTermViewModel.push({
                        feeTypeForTermId: item.controls.feeTypeForTermId.value,
                        termConcessionAmt: item.controls.termConcessionAmt.value
                    });
                });
                /// Array For FeeTypes///
                _this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel.push({
                    feeTypeId: element.controls.feeTypeId.value,
                    concessionTypeId: element.controls.concessionTypeId.value,
                    discount: element.controls.discount.value,
                    feeConcessionGroupTermViewModel: _this.feeConcessionGroupTermViewModel
                });
            }
        });
    };
    FeeConcessionGroupComponent.prototype.addResponse = function (response) {
        this.onCancelClick();
        this.openSnackBar(response.messages.ResultMessage);
    };
    FeeConcessionGroupComponent.prototype.ontestSeclect = function () {
        this.valueChangesInfeeConcessionGroupArray();
    };
    FeeConcessionGroupComponent.prototype.valueChangesInfeeConcessionGroupArray = function () {
        var _this = this;
        this.feeConcessionGroupForm.controls['feeConcessionGroupArray'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])()).subscribe(function (formArray) {
            formArray[0].feeConcessionFeeType.forEach(function (element, j) {
                var validators = [];
                if (element.concessionTypeId === 125) {
                    // tslint:disable-next-line: max-line-length
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999));
                }
                else if (element.concessionTypeId === 126) {
                    // tslint:disable-next-line: max-line-length
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999));
                }
                else {
                    if (!element.concessionTypeId) {
                        // tslint:disable-next-line: max-line-length
                        _this.feeConcessionGroupForm.get('feeConcessionGroupArray').controls[0].get('feeConcessionFeeType').controls[j].get('discount').patchValue(null, { emitEvent: false });
                    }
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999));
                }
                // tslint:disable-next-line: max-line-length
                _this.feeConcessionGroupForm.get('feeConcessionGroupArray').controls[0].get('feeConcessionFeeType').controls[j].get('discount').setValidators(validators);
                // tslint:disable-next-line: max-line-length
                _this.feeConcessionGroupForm.get('feeConcessionGroupArray').controls[0].get('feeConcessionFeeType').controls[j].get('discount').updateValueAndValidity({ emitEvent: false });
                if (element.feeConcessionFeeTerm.length) {
                    element.feeConcessionFeeTerm.forEach(function (element1, r) {
                        _this.feeConcessionGroupForm.get('feeConcessionGroupArray').controls[0].
                            get('feeConcessionFeeType').controls[j].get('feeConcessionFeeTerm').controls[r].get('termConcessionAmt').setValidators(validators);
                        _this.feeConcessionGroupForm.get('feeConcessionGroupArray').controls[0].
                            get('feeConcessionFeeType').controls[j].get('feeConcessionFeeTerm').controls[r].get('termConcessionAmt').updateValueAndValidity({ emitEvent: false });
                    });
                }
            });
        });
    };
    FeeConcessionGroupComponent.prototype.getConcessionDetails = function (data) {
        var _this = this;
        this.isUpdate = true;
        this.feeConcessionGroupViewModel = data.feeConcessionGroupDataViewModel;
        this.feeConcessionGroupForm = this._fb.group({
            feeConcessionGroupArray: this._fb.array([this.createFeeConcessionGroupItem()])
        });
        // this.feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.discount 
        this.valueChangesInfeeConcessionGroupArray();
        if (this.feeConcessionGroupViewModel != null) {
            var dataArray = [];
            var innerArray = [];
            var feeConcessionGroupArrayData = void 0;
            dataArray.push(this.feeConcessionGroupViewModel);
            innerArray.push(dataArray[0].feeConcessionGroupDiscountDataViewModel);
            feeConcessionGroupArrayData = this.feeConcessionGroupForm.get('feeConcessionGroupArray');
            var feeConcessionFeeTypeData_1 = feeConcessionGroupArrayData.controls[0].get('feeConcessionFeeType');
            feeConcessionGroupArrayData.patchValue(dataArray);
            innerArray[0].forEach(function (dataItem) {
                _this.UpdateData(dataItem, feeConcessionFeeTypeData_1);
            });
        }
        else {
            this.openSnackBar(data.messages.ResultMessage);
        }
    };
    FeeConcessionGroupComponent.prototype.createTermConcessionAmt = function () {
        return this._fb.group({
            feeTypeForTermId: '',
            feeTermName: '',
            termConcessionAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(99999999)]),
        });
    };
    FeeConcessionGroupComponent.prototype.UpdateData = function (ParentDataItem, form) {
        var that = this;
        // tslint:disable-next-line:no-shadowed-variable
        form.controls.forEach(function (element, i) {
            if (element.value.feeTypeId === ParentDataItem.feeTypeId) {
                form.controls[i].patchValue({ concessionTypeId: ParentDataItem.concessionTypeId });
                form.controls[i].patchValue({ discount: ParentDataItem.discount });
                if (that.concessionTypes.find(function (x) { return x.value === ParentDataItem.concessionTypeId; }).code
                    === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FCT_DISCOUNT_CODE || that.concessionTypes.find(function (x) { return x.value === ParentDataItem.concessionTypeId; }).code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FCT_TERMDISCOUNT_CODE) {
                    form.controls[i].patchValue({ isfeeterms: false });
                }
                else {
                    that.feeTerms = [];
                    var selectedArray_1 = [];
                    form.controls[i].patchValue({ isfeeterms: true });
                    that._feeConcessionGroupService.fetchFeeTerms(element.value.feeTypeId).subscribe(function (response) {
                        if (response.listViews.length) {
                            that.feeTerms = [];
                            selectedArray_1 = [];
                            var feeTypeForFeeTermIds_1 = [];
                            response.listViews.forEach(function (data) {
                                that.feeTerms.push({
                                    label: data.name,
                                    value: data.id
                                });
                            });
                            that.dropDownLoaded = Promise.resolve(true);
                            that.dropDownData = { multiSelect: true, placeholder: 'Fee Terms', data: that.feeTerms, noEntryFoundLabel: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NODATA_FOUND, isRequired: false };
                            form.controls[i].patchValue({ dropDownData: that.dropDownData });
                            ParentDataItem.feeConcessionGroupTermDiscountDataViewModel.forEach(function (dataItem, p) {
                                feeTypeForFeeTermIds_1.push(dataItem.feeTypeForFeeTermId);
                                that.feeConcessionFeeTerm = form.controls[i].get('feeConcessionFeeTerm');
                                that.feeConcessionFeeTerm.push(that.createTermConcessionAmt());
                                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ feeTypeForTermId: dataItem.feeTypeForFeeTermId });
                                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ termConcessionAmt: dataItem.termConcessionAmt });
                                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ feeTermName: dataItem.feeTermName });
                                // feeTermName
                            });
                            feeTypeForFeeTermIds_1.forEach(function (id) {
                                that.feeTerms.map(function (item) {
                                    if (item.value === id) {
                                        selectedArray_1.push(item);
                                    }
                                });
                            });
                            form.controls[i].patchValue({ feeTypeForFeeTermIdMulti: selectedArray_1 });
                        }
                        else {
                            form.controls[i].patchValue({ dropDownData: null });
                        }
                    }, function (error) {
                        that.errorResponse(error);
                    });
                }
            }
        });
    };
    FeeConcessionGroupComponent.prototype.trimTextBoxSpaces = function (key, form) {
        var _this = this;
        this.feeConcessionGroupForm.get('feeConcessionGroupArray')['controls'].forEach(function (controlElt) {
            if (controlElt.controls[key] !== null && controlElt.controls[key] !== undefined) {
                if (typeof controlElt.controls[key].value === 'object' && controlElt.controls[key].value !== null) {
                }
                else {
                    controlElt.controls[key].setValue(_this.commonService.trimSpaces(controlElt.controls[key].value));
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feeConcessionGroupTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeConcessionGroupComponent.prototype, "addFeeConcessiongroupTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feeConcessionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeConcessionGroupComponent.prototype, "feeConcessionForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FeeConcessionGroupComponent.prototype, "inputEl", void 0);
    FeeConcessionGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-concession-group',
            template: __webpack_require__(/*! ./fee-concession-group.component.html */ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.html"),
            styles: [__webpack_require__(/*! ./fee-concession-group.component.scss */ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"],
            app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_4__["FeeConcessionGroupService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], FeeConcessionGroupComponent);
    return FeeConcessionGroupComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-terms/fee-terms.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getFeeTermsTableDetails($event)' (openAddForm)=\"onAddFormClick()\"\n[closeAddForm]=\"closeAddPanel\" (rowBasedAction)=\"rowWiseActions($event)\" [newFilterbuttonsDisable]=\"buttonDisable\" [closeRowForm]='closeAddPanel' [templateRef]=\"addFeeTermsRef\"></app-table>\n\n<ng-template #addFeeTermsRef>\n  <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"OnSelectionChange($event)\" (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n    <mat-step [stepControl]=\"feeTermForm\">\n      <form  [formGroup]=\"feeTermForm\" fxLayout=\"column\" (ngSubmit)=\"feeTermDetails(feeTermForm)\" #FeeTermForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Fee Term Details</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" class=\"mr-sm-20\">\n            <mat-label #shortName translate>name</mat-label>\n            <input (keyup)=\"preventSpace($event,'feeTermForm','name')\" matInput [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"name\" (blur)=\"trimTextBoxSpaces('feeTermForm','name')\" autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='shortName.innerText' [validationControl]=\"feeTermForm.controls.name\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" class=\"mr-sm-20\">\n            <mat-label #displayName translate>Display Name</mat-label>\n            <input (keyup)=\"preventSpace($event,'feeTermForm','displayName')\" matInput [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"displayName\" (blur)=\"trimTextBoxSpaces('feeTermForm','displayName')\" autocomplete=\"off\">\n            <mat-error>\n              <app-validation [labelName]='displayName.innerText' [validationControl]=\"feeTermForm.controls.displayName\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"20\">\n            <mat-label #code translate>Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'feeTermForm','code')\" matInput [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"code\" autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feeTermForm','code')\">\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"feeTermForm.controls.code\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout=\"row\" class=\"pt-12\">\n          <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n            <mat-label #description translate>Description</mat-label>\n            <textarea matInput [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"description\" (blur)=\"trimTextBoxSpaces('description')\" autocomplete=\"off\"></textarea>\n            <mat-error>\n              <app-validation [labelName]='description.innerText' [validationControl]=\"feeTermForm.controls.description\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12\">\n          <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\" (click)=\"cancel()\">{{'Cancel' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"durationForm\">\n      <form [formGroup]=\"durationForm\" fxLayout=\"column\" (ngSubmit)=\"durationDetails(durationForm)\"  #DurationForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Duration</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n          <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #startDate translate>Start Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('startDate',durationForm)\" [matDatepicker]=\"startDatePicker\" [min]=\"academicSessionMinDate\" [max]=\"academicSessionMaxDate\" [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"startDate\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\" *ngIf=\"feeTermsDet.isInvoiceGenerated==false\"></mat-datepicker-toggle>\n            <mat-datepicker #startDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='startDate.innerText' [validationControl]=\"durationForm.controls.startDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #endDate translate>End Date</mat-label>\n            <input matInput  (keyup)=\"forceValidation('endDate',durationForm)\" [matDatepicker]=\"endDatePicker\" [min]=\"durationForm.controls.startDate.value\"\n              [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"endDate\" [max]=\"academicSessionMaxDate\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\" *ngIf=\"feeTermsDet.isInvoiceGenerated==false\"></mat-datepicker-toggle>\n            <mat-datepicker #endDatePicker [startAt]=\"durationForm.value.startDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='endDate.innerText' [validationControl]=\"durationForm.controls.endDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious type=\"button\">{{'Previous' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"invoiceSettingsForm\" >\n      <form [formGroup]=\"invoiceSettingsForm\" fxLayout=\"column\" (ngSubmit)=\"invoiceDetails(invoiceSettingsForm)\" #InvoiceSettingsForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Invoice Settings</span></ng-template>\n        <div class=\"font-size-16 accent-fg\" translate>Based on the selections in this section, the system will be able to generate Fee Invoices to Students of Classes associated with this Fee Term\n          Invoice Generation Option will be a Required if you want to generate invoices for this Fee Term</div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"64\" fxLayout=\"column\">\n          <mat-label #invoiceGenerationOptionTypeId translate>Select Invoice Generation Option</mat-label>\n          <mat-select [disabled]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"invoiceGenerationOptionTypeId\" [required]=\"invoiceSettingsForm.value.invoiceGenerationDate\">\n            <mat-option *ngIf=\"generateInvOptions?.length\"></mat-option>\n            <mat-option *ngFor=\"let generateInv of generateInvOptions\" [value]=\"generateInv.id\" ngDefaultControl>\n              {{ generateInv.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='invoiceGenerationOptionTypeId.innerText' [validationControl]=\"invoiceSettingsForm.controls.invoiceGenerationOptionTypeId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-12\" fxLayout.gt-xs=\"row\">\n          <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #invoiceGenerationDate translate>Invoice Generation Date</mat-label>\n            <input matInput  (keyup)=\"forceValidation('invoiceGenerationDate',invoiceSettingsForm)\" [matDatepicker]=\"invGenDatePicker\" [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"invoiceGenerationDate\" >\n            <mat-datepicker-toggle matSuffix [for]=\"invGenDatePicker\" *ngIf=\"feeTermsDet.isInvoiceGenerated==false\"></mat-datepicker-toggle>\n            <mat-datepicker #invGenDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='invoiceGenerationDate.innerText' [validationControl]=\"invoiceSettingsForm.controls.invoiceGenerationDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #invoiceIssueDate translate>Invoice Issue Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('invoiceIssueDate',invoiceSettingsForm)\" [matDatepicker]=\"invIssueDatePicker\" [min]=\"invoiceSettingsForm.controls.invoiceGenerationDate.value\"\n               [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"invoiceIssueDate\" >\n            <mat-datepicker-toggle matSuffix [for]=\"invIssueDatePicker\" *ngIf=\"feeTermsDet.isInvoiceGenerated==false\"></mat-datepicker-toggle>\n            <mat-datepicker #invIssueDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='invoiceIssueDate.innerText' [validationControl]=\"invoiceSettingsForm.controls.invoiceIssueDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"mr-sm-20 icon-center\" fxFlexFill fxFlex=\"100\" fxLayout=\"column\">\n            <mat-label #invoiceDueDate translate>Invoice Due Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('invoiceDueDate',invoiceSettingsForm)\" [matDatepicker]=\"invDueDatePicker\" [min]=\"invoiceSettingsForm.controls.invoiceIssueDate.value\"\n               [readonly]=\"feeTermsDet.isInvoiceGenerated\"  formControlName=\"invoiceDueDate\" >\n            <mat-datepicker-toggle matSuffix [for]=\"invDueDatePicker\" *ngIf=\"feeTermsDet.isInvoiceGenerated==false\"></mat-datepicker-toggle>\n            <mat-datepicker #invDueDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='invoiceDueDate.innerText' [validationControl]=\"invoiceSettingsForm.controls.invoiceDueDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12\">\n          <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious type=\"button\">{{'Previous' | translate}}</button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">{{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step class=\"form-status\">\n      <ng-template matStepLabel><span translate>Done</span></ng-template>\n      <div fxFlex=\"100\" class=\"text-center font-size-18 pb-20 pt-8\" translate>Please verify the entered information before your final submit</div>\n      \n      <mat-list fxLayout.gt-xs=\"row wrap\"  fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"pt-0 border m-auto confirm-table\">\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.shortName!='' && feeTermsDataViewModel.shortName!=null\">\n      <div fxLayout=\"row\"><strong translate class=\"pr-4\">Name</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.shortName}}</span></div>\n      </mat-list-item>\n      \n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.displayName!='' && feeTermsDataViewModel.displayName!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Display Name</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.displayName}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.code!='' && feeTermsDataViewModel.code!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Code</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.code}}</span></div>\n      </mat-list-item>\n      \n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.description!='' && feeTermsDataViewModel.description!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Description</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.description}} </span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.startDate!='' && feeTermsDataViewModel.startDate!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Start Date</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.startDate}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.endDate!='' && feeTermsDataViewModel.endDate!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">End Date</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.endDate}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.invoiceGenerationDate!='' && feeTermsDataViewModel.invoiceGenerationDate!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Invoice Generation Date</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.invoiceGenerationDate}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.invoiceIssueDate!='' && feeTermsDataViewModel.invoiceIssueDate!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Invoice Issue Date</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.invoiceIssueDate}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"feeTermsDataViewModel.invoiceDueDate!='' && feeTermsDataViewModel.invoiceDueDate!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Invoice Due Date</strong> :<span class=\"pl-8\">{{feeTermsDataViewModel.invoiceDueDate}}</span></div>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"selectionNameInvType!='' && selectionNameInvType!=null\">\n      <div fxLayout=\"row\" fxFlex=\"100\"><strong translate class=\"pr-4\">Invoice Generation Option</strong> :<span class=\"pl-8\">{{selectionNameInvType}} </span></div>\n      </mat-list-item>\n      </mat-list>\n      \n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12 pt-24\">\n      <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious type=\"button\">{{'Previous' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" [disabled]=\"disbleSubmitBtn\" color=\"accent\" *ngIf=\"isCreate\" (click)=\"onSubmitForm()\">{{'submit' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" [disabled]=\"disbleUpdateBtn\" color=\"accent\" *ngIf=\"isUpdate\" (click)=\"onSubmitForm()\">{{'update' | translate}}</button>\n      </div>\n      </mat-step>\n  </mat-vertical-stepper>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-terms/fee-terms.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table strong {\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS10ZXJtcy9mZWUtdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBc0IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vZmluYW5jZS9mZWUtdGVybXMvZmVlLXRlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tdGFibGUgc3Ryb25ne3doaXRlLXNwYWNlOiBub3dyYXA7fSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-terms/fee-terms.component.ts ***!
  \********************************************************************************/
/*! exports provided: FeeTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTermsComponent", function() { return FeeTermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");











var FeeTermsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeTermsComponent, _super);
    function FeeTermsComponent(_fb, dialog, commonService, typeService, feeTermsService, snackBar, changeDetector) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.typeService = typeService;
        _this.feeTermsService = feeTermsService;
        _this.snackBar = snackBar;
        _this.changeDetector = changeDetector;
        _this.isEdit = false;
        _this.disbleSubmitBtn = false;
        _this.disbleUpdateBtn = false;
        _this.buttonDisable = false;
        _this.isValidInvoice = false;
        _this.interactedStepperIndex = 0;
        _this.generateInvOptions = [];
        // Table Variables 
        _this.tableData = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'FeeTermsComponent';
        _this.feeTermsDataViewModel = {
            shortName: '',
            displayName: null,
            code: '',
            description: '',
            startDate: '',
            endDate: '',
            invoiceGenerationDate: '',
            invoiceIssueDate: '',
            invoiceDueDate: '',
            invoiceGenerationOptionTypeId: null,
        };
        _this.feeTermsDet = {
            isInvoiceGenerated: false
        };
        _this.feeTermsViewModel = {};
        _this.searchFeeTermsView = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    FeeTermsComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.searchFeeTermsView = modelTableComponent;
        }
        // Table Colums
        this.cols = [
            { field: 'shortName', header: 'Name', sort: true },
            { field: 'displayName', header: 'Display Name', sort: true },
            { field: 'code', header: 'Code', sort: true },
            { field: 'description', header: 'Description', sort: true },
            { field: 'startDate', header: 'Start Date', sort: true },
            { field: 'endDate', header: 'End Date', sort: true },
            { field: 'invoiceGenerationDate', header: 'Invoice Generation Date', sort: true },
            { field: 'invoiceIssueDate', header: 'Invoice Issue Date', sort: true },
            { field: 'invoiceDueDate', header: 'Invoice Due Date', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            tablename: 'Fee Terms',
            componentName: this.currentComponent,
        };
        this.feeTermForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]),
        });
        this.durationForm = this._fb.group({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        // validating form based on selection
        this.invoiceValidDetails();
        this.feeTermsViewModel = {};
        this.generateInvDetails();
        this.getFeeTermsTableDetails(this.searchFeeTermsView);
    };
    // validating form
    FeeTermsComponent.prototype.invoiceValidDetails = function () {
        this.invoiceSettingsForm = this._fb.group({
            invoiceGenerationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            invoiceIssueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            invoiceDueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            invoiceGenerationOptionTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    // get list based on type category
    FeeTermsComponent.prototype.generateInvDetails = function () {
        var _this = this;
        this.typeService.typesByTypeCategoryCode('IGOT').subscribe(function (res) { return _this.generateInvOptions = res.types; });
    };
    // get all assessment categories based on schoolId
    FeeTermsComponent.prototype.getFeeTermsTableDetails = function (data) {
        /*if (localStorage.getItem(this.currentComponent)) {
          this.searchFeeTermsView = JSON.parse(localStorage.getItem((this.currentComponent)));
        }*/
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.searchFeeTermsView = modelTableComponent;
        }
        this.feeTermsService.feeTerms(data.shortName, data.displayName, data.code, data.description, data.sortBy, data.sortOrder, data.startDate, data.startDateBegin, data.startDateEnd, data.endDate, data.endDateBegin, data.endDateEnd, data.invoiceGenerationDate, data.invoiceGenerationDateBegin, data.invoiceGenerationDateEnd, data.invoiceIssueDate, data.invoiceIssueDateBegin, data.invoiceIssueDateEnd, data.invoiceDueDate, data.invoiceDueDateBegin, data.invoiceDueDateEnd, data.pageNumber, data.pageSize).subscribe(function (res) { return _this.resFeeTermDetails(res); }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    // return response grid table
    FeeTermsComponent.prototype.resFeeTermDetails = function (data) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (!data.feeTermsViewModel) {
            this.rows = [];
            this.totalItems = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.feeTermsViewModel.list;
            this.totalItems = data.feeTermsViewModel.totalItems;
            this.pageCnt = data.feeTermsViewModel.totalPages;
            var feeTermOperations_1 = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE,
                },
            ];
            // date format for table inputs
            this.rows.forEach(function (e) {
                e.operations = feeTermOperations_1;
                e.startDate = _this.commonService.customDateFormat(e.startDate, _this.getSchoolDateFormat()).date;
                e.endDate = _this.commonService.customDateFormat(e.endDate, _this.getSchoolDateFormat()).date;
                e.invoiceGenerationDate = e.invoiceGenerationDate ===
                    null ? '' : _this.commonService.customDateFormat(e.invoiceGenerationDate, _this.getSchoolDateFormat()).date;
                e.invoiceDueDate = e.invoiceDueDate ===
                    null ? '' : _this.commonService.customDateFormat(e.invoiceDueDate, _this.getSchoolDateFormat()).date;
                e.invoiceIssueDate = e.invoiceIssueDate ===
                    null ? '' : _this.commonService.customDateFormat(e.invoiceIssueDate, _this.getSchoolDateFormat()).date;
            });
        }
        if (data.feeTermsViewModel) {
            this.searchFeeTermsView.pageNumber = data.feeTermsViewModel.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.searchFeeTermsView,
            rows: this.rows,
            tablename: 'Fee Terms',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Fee Terms'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NEW
                }
            },
        };
    };
    // feeterm form details
    FeeTermsComponent.prototype.feeTermDetails = function (feeTermForm) {
        if (feeTermForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.feeTermsDataViewModel.shortName = feeTermForm.value.name;
            this.feeTermsDataViewModel.displayName = feeTermForm.value.displayName;
            this.feeTermsDataViewModel.code = feeTermForm.value.code;
            this.feeTermsDataViewModel.description = feeTermForm.value.description;
        }
    };
    // duration form details
    FeeTermsComponent.prototype.durationDetails = function (durationForm) {
        if (durationForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.feeTermsDataViewModel.startDate = this.commonService.customDateFormat(durationForm.value.startDate, this.getSchoolDateFormat()).date;
            this.feeTermsDataViewModel.endDate = this.commonService.customDateFormat(durationForm.value.endDate, this.getSchoolDateFormat()).date;
        }
    };
    // invoice details form
    FeeTermsComponent.prototype.invoiceDetails = function (invoiceSettingsForm) {
        var _this = this;
        if (invoiceSettingsForm.value.invoiceIssueDate == null) {
            invoiceSettingsForm.value.invoiceIssueDate = '';
        }
        else {
            this.feeTermsDataViewModel.invoiceGenerationDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceGenerationDate, this.getSchoolDateFormat()).date;
            this.feeTermsDataViewModel.invoiceDueDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceDueDate, this.getSchoolDateFormat()).date;
            this.feeTermsDataViewModel.invoiceIssueDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceIssueDate, this.getSchoolDateFormat()).date;
            this.generateInvOptions.forEach(function (element) {
                if (element.id === invoiceSettingsForm.value.invoiceGenerationOptionTypeId) {
                    _this.selectionNameInvType = element.name;
                }
            });
        }
    };
    // Cancel Button
    FeeTermsComponent.prototype.cancel = function () {
        this.invoiceValidDetails();
        this._durationForm.resetForm();
        this._feeTermForm.resetForm();
        this._invoiceSettingsForm.resetForm();
        this.isValidInvoice = false;
        this.closeAddPanel = true;
        this.buttonDisable = false;
        this.selectionNameInvType = '';
        this.stepper.reset();
    };
    // add new form for assessment categories
    FeeTermsComponent.prototype.onAddFormClick = function () {
        this.interactedStepperIndex = 0;
        this.closeAddPanel = false;
        this.isValidInvoice = false;
        this.stepper.reset();
        this.isCreate = true;
        this.isUpdate = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SHOW);
        this.feeTermsDet = {
            isInvoiceGenerated: false
        };
    };
    // on Submit for based on request
    FeeTermsComponent.prototype.onSubmitForm = function () {
        var _this = this;
        if (!this.isEdit) {
            if (this.feeTermForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID && this.durationForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
                this.feeTermsDataViewModel.shortName = this.feeTermForm.value.name;
                this.feeTermsDataViewModel.displayName = this.feeTermForm.value.displayName;
                this.feeTermsDataViewModel.code = this.feeTermForm.value.code;
                this.feeTermsDataViewModel.description = this.feeTermForm.value.description;
                this.feeTermsDataViewModel.startDate = this.durationForm.value.startDate;
                this.feeTermsDataViewModel.endDate = this.durationForm.value.endDate;
                this.feeTermsDataViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate;
                this.feeTermsDataViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate;
                this.feeTermsDataViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate;
                this.feeTermsDataViewModel.invoiceGenerationOptionTypeId = this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId;
                this.disbleSubmitBtn = true;
                this.feeTermsService.addFeeTerms(this.feeTermsDataViewModel).subscribe(function (res) {
                    if (res.statusCode === _this.httpStatus.OK) {
                        _this.disbleSubmitBtn = false;
                        _this.formAddUpdate();
                        _this.openSnackBar(res.messages.ResultMessage);
                        _this.scrollIntoView('app-table');
                    }
                    else {
                        _this.disbleSubmitBtn = false;
                        _this.openSnackBar(res.messages.ResultMessage);
                    }
                }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                    _this.updateForm();
                });
            }
        }
        else {
            if (this.feeTermForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID && this.durationForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
                this.feeTermsViewModel.id = this.feeTermsDet.id;
                this.feeTermsViewModel.shortName = this.feeTermForm.value.name;
                this.feeTermsViewModel.displayName = this.feeTermForm.value.displayName;
                this.feeTermsViewModel.code = this.feeTermForm.value.code;
                this.feeTermsViewModel.description = this.feeTermForm.value.description;
                this.feeTermsViewModel.startDate = this.durationForm.value.startDate;
                this.feeTermsViewModel.endDate = this.durationForm.value.endDate;
                this.feeTermsViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate;
                this.feeTermsViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate;
                this.feeTermsViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate;
                this.feeTermsViewModel.invoiceGenerationOptionTypeId = this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId;
                this.disbleUpdateBtn = true;
                this.feeTermsService.editFeeTerms(this.feeTermsViewModel).subscribe(function (res) {
                    if (res.statusCode === _this.httpStatus.OK) {
                        _this.isEdit = false;
                        _this.disbleUpdateBtn = false;
                        _this.formAddUpdate();
                        _this.openSnackBar(res.messages.ResultMessage);
                        _this.scrollIntoView('app-table');
                    }
                    else {
                        _this.disbleUpdateBtn = false;
                        _this.openSnackBar(res.messages.ResultMessage);
                    }
                }, function (error) {
                    _this.disbleUpdateBtn = false;
                    _this.errorResponse(error);
                    _this.updateForm();
                });
            }
        }
    };
    // common for Add and Update
    FeeTermsComponent.prototype.formAddUpdate = function () {
        this.invoiceValidDetails();
        this.closeAddPanel = true;
        this.feeTermsDataViewModel = {};
        this.selectionNameInvType = '';
        this.onAddFormClick();
        this._durationForm.resetForm();
        this._feeTermForm.resetForm();
        this._invoiceSettingsForm.resetForm();
        this.stepper.selectedIndex = 0;
        this.getFeeTermsTableDetails(this.searchFeeTermsView);
    };
    FeeTermsComponent.prototype.updateForm = function () {
        var _this = this;
        this.feeTermsDataViewModel.shortName = this.feeTermForm.value.name;
        this.feeTermsDataViewModel.displayName = this.feeTermForm.value.displayName;
        this.feeTermsDataViewModel.code = this.feeTermForm.value.code;
        this.feeTermsDataViewModel.description = this.feeTermForm.value.description;
        if (this.durationForm.value.startDate != null) {
            this.feeTermsDataViewModel.startDate = this.commonService.customDateFormat(this.durationForm.value.startDate, this.getSchoolDateFormat()).date;
            this.feeTermsDataViewModel.endDate = this.commonService.customDateFormat(this.durationForm.value.endDate, this.getSchoolDateFormat()).date;
        }
        this.feeTermsDataViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate ===
            null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceGenerationDate, this.getSchoolDateFormat()).date;
        this.feeTermsDataViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate ===
            null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceDueDate, this.getSchoolDateFormat()).date;
        this.feeTermsDataViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate ===
            null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceIssueDate, this.getSchoolDateFormat()).date;
        if (this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId != null
            && this.generateInvOptions.find(function (x) { return x.id === _this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId; }) !== undefined) {
            var generationOptionName = this.generateInvOptions.find(function (x) { return x.id === _this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId; }).name;
            this.selectionNameInvType = generationOptionName;
        }
        else {
            this.selectionNameInvType = '';
        }
    };
    // updating forms 
    FeeTermsComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        this.updateForm();
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex === 2) {
            event.selectedStep.interacted = false;
            Object.values(this.invoiceSettingsForm.controls).forEach(function (control) {
                control.markAsUntouched();
            });
        }
    };
    // rowwise actions
    FeeTermsComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    _this.feeTermsService.dropFeeTerms(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
        else {
            this.isEdit = true;
            this.closeAddPanel = false;
            this.isCreate = false;
            this.isUpdate = true;
            this.feeTermsService.feeTermById(event.clickedRow.id).subscribe(function (res) { return _this.retFeeTermsById(res); });
        }
    };
    // delete return response after click
    FeeTermsComponent.prototype.deleteResponse = function (response) {
        this.getFeeTermsTableDetails(this.searchFeeTermsView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    // fetching feeterm details based on Id
    FeeTermsComponent.prototype.retFeeTermsById = function (data) {
        if (data.statusCode === this.httpStatus.OK) {
            this.isEdit = true;
            this.closeAddPanel = false;
            this.feeTermsDet = data.feeTermIdViewModel;
            this.feeTermForm.controls['name'].setValue(data.feeTermIdViewModel.shortName);
            this.feeTermForm.controls['displayName'].setValue(data.feeTermIdViewModel.displayName);
            this.feeTermForm.controls['code'].setValue(data.feeTermIdViewModel.code);
            this.feeTermForm.controls['description'].setValue(data.feeTermIdViewModel.description);
            this.durationForm.controls['startDate'].setValue(data.feeTermIdViewModel.startDate);
            this.durationForm.controls['endDate'].setValue(data.feeTermIdViewModel.endDate);
            this.invoiceSettingsForm.controls['invoiceGenerationDate'].setValue(data.feeTermIdViewModel.invoiceGenerationDate);
            this.invoiceSettingsForm.controls['invoiceIssueDate'].setValue(data.feeTermIdViewModel.invoiceIssueDate);
            this.invoiceSettingsForm.controls['invoiceDueDate'].setValue(data.feeTermIdViewModel.invoiceDueDate);
            this.invoiceSettingsForm.controls['invoiceGenerationOptionTypeId'].setValue(data.feeTermIdViewModel.invoiceGenerationOptionTypeId);
        }
        else {
            this.openSnackBar(data.messages.ResultMessage, true);
        }
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
        this.customSteperLabelChange();
    };
    FeeTermsComponent.prototype.isNestedObjectEmpty = function (obj, checkKey) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTermsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FeeTermForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTermsComponent.prototype, "_feeTermForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('DurationForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTermsComponent.prototype, "_durationForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('InvoiceSettingsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTermsComponent.prototype, "_invoiceSettingsForm", void 0);
    FeeTermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-terms',
            template: __webpack_require__(/*! ./fee-terms.component.html */ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_10__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./fee-terms.component.scss */ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"],
            app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_6__["FeeTermsService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FeeTermsComponent);
    return FeeTermsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getFeeTypeTrancheDetails($event)' (rowBasedAction)='rowActions($event)'\n   [templateRef]=\"addFeeTypeTrancheRef\" [closeRowForm]='closeAddPanel' (openAddForm)=\"onAddFormClick()\"></app-table>\n\n<ng-template #addFeeTypeTrancheRef>\n   <form [formGroup]=\"feeTypeTranchesForm\" (ngSubmit)=\"onSubmit(feeTypeTranchesForm)\" #trancheForm=\"ngForm\">\n      <div fxFlexFill fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n\n         <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label #feeTypeId translate>Fee Type</mat-label>\n            <mat-select formControlName=\"feeTypeId\" required>\n               <mat-option *ngFor=\"let feeTypes of feeTypesList\" [value]=\"feeTypes.id\">\n                  {{feeTypes.name}}\n               </mat-option>\n            </mat-select>\n            <mat-error>\n               <app-validation [labelName]='feeTypeId.innerText' [validationControl]=\"feeTypeTranchesForm.controls.feeTypeId\"\n                  [doValidate]=\"doValidate\">\n               </app-validation>\n            </mat-error>\n         </mat-form-field>\n\n         <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label #name translate>Tranche Name</mat-label>\n            <input matInput formControlName=\"name\" autocomplete=\"off\" required (keyup)=\"preventSpace($event,'feeTypeTranchesForm','name')\" (blur)=\"trimTextBoxSpaces('feeTypeTranchesForm','name')\">\n            <mat-error>\n               <app-validation [labelName]='name.innerText' [validationControl]=\"feeTypeTranchesForm.controls.name\"\n                  [doValidate]=\"doValidate\">\n               </app-validation>\n            </mat-error>\n         </mat-form-field>\n      </div>\n      <div fxFlexFill fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\">\n\n         <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n            <mat-label #code translate>Tranche Code</mat-label>\n            <input matInput formControlName=\"code\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'feeTypeTranchesForm','code')\" (blur)=\"trimTextBoxSpaces('feeTypeTranchesForm','code')\">\n            <mat-error>\n               <app-validation [labelName]='code.innerText' [validationControl]=\"feeTypeTranchesForm.controls.code\"\n                  [doValidate]=\"doValidate\">\n               </app-validation>\n            </mat-error>\n         </mat-form-field>\n\n         <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"70\">\n            <mat-label #description translate>Tranche Description</mat-label>\n            <textarea matInput formControlName=\"description\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'feeTypeTranchesForm','description')\" (blur)=\"trimTextBoxSpaces('feeTypeTranchesForm','description')\"></textarea>\n            <mat-error>\n               <app-validation [labelName]='description.innerText' [validationControl]=\"feeTypeTranchesForm.controls.description\"\n                  [doValidate]=\"doValidate\">\n               </app-validation>\n            </mat-error>\n         </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"end center\" class=\"py-16\">\n         <button class=\"mr-12 text-uppercase\" type=\"button\" mat-raised-button (click)=\"closeAddForm()\">\n            {{'Cancel' | translate}}</button>\n            <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" [disabled]=\"disableSubmitBtn\">{{(updateButtonShow ? 'Update':'Create') | translate}}</button>\n      </div>\n   </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS10eXBlLXRyYW5jaGVzL2ZlZS10eXBlLXRyYW5jaGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FeeTypeTranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTypeTranchesComponent", function() { return FeeTypeTranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_service_configuration_finance_api_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type-tranches.service */ "./src/app/service/configuration/finance/api/fee-type-tranches.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var FeeTypeTranchesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeTypeTranchesComponent, _super);
    function FeeTypeTranchesComponent(feeTypeTranchesService, commonService, dialog, common, snackBar) {
        var _this = _super.call(this) || this;
        _this.feeTypeTranchesService = feeTypeTranchesService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.common = common;
        _this.snackBar = snackBar;
        _this.feeTranchesDetails = [];
        _this.doValidate = true;
        _this.currentComponent = 'FeeTypeTranchesComponent';
        return _this;
    }
    FeeTypeTranchesComponent.prototype.ngOnInit = function () {
        this.feeTypeTranchesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            feeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]),
        });
        this.feeTypeTrancheSearchView = {
            feeTypeIds: [],
            names: [],
            codes: [],
            descriptions: [],
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
        this.feeTypeTrancheView = {
            feeTypeId: 0,
            name: '',
            code: '',
            description: ''
        };
        this.updateTrancheView = {
            id: '',
            feeTypeId: 0,
            name: '',
            code: '',
            description: ''
        };
        // Table Colums
        this.coloumns = [
            { field: 'feeTypeName', header: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].FEE_TYPE_NAME), sort: false },
            { field: 'name', header: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].FEE_TRANCHE_NAME), sort: false },
            { field: 'code', header: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].FEE_TRANCHE_CODE), sort: false },
            { field: 'description', header: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].FEE_TRANCHE_DESCRIPTION), sort: false },
            { field: 'actions', header: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ACTION), sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.feeTypeTrancheSearchView = modelTableComponent;
        }
        this.tabSettings = {
            rows: this.feeTranchesDetails,
            columns: this.coloumns,
            model: this.feeTypeTrancheSearchView,
            tablename: 'Fee Type Tranches',
            componentName: this.currentComponent,
        };
        this.feeTypes();
        this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
    };
    // method for get all fee type tranches
    FeeTypeTranchesComponent.prototype.getFeeTypeTrancheDetails = function (feeTypeTrancheSearchView) {
        var _this = this;
        this.feeTypeTrancheSearchView = feeTypeTrancheSearchView;
        this.feeTypeTranchesService.getAllFeeTypeTranches(this.feeTypeTrancheSearchView.feeTypeIds, this.feeTypeTrancheSearchView.names, this.feeTypeTrancheSearchView.codes, this.feeTypeTrancheSearchView.descriptions, this.feeTypeTrancheSearchView.sortBy, this.feeTypeTrancheSearchView.sortOrder, this.feeTypeTrancheSearchView.pageNumber, this.feeTypeTrancheSearchView.pageSize).subscribe(function (res) { return _this.feeTypeTrancheDetails(res); }, function (error) {
            _this.disableSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    // method for get all fee type tranches response
    FeeTypeTranchesComponent.prototype.feeTypeTrancheDetails = function (data) {
        var _this = this;
        this.feeTranchesDetails = [];
        if (data.pagedFeeTypeTranchesView == null) {
            this.rows = [];
        }
        else {
            this.feeTranchesDetails = data.pagedFeeTypeTranchesView.list;
            this.totalItems = data.pagedFeeTypeTranchesView.totalItems;
            this.feeTranchesDetails.forEach(function (e) {
                e.operations = [
                    {
                        name: _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT_OPERATION),
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT,
                        operationName: _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT)
                    }, {
                        name: _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_OPERATION),
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE
                    }
                ];
            });
        }
        if (data.pagedFeeTypeTranchesView) {
            this.feeTypeTrancheSearchView.pageNumber = data.pagedFeeTypeTranchesView.pageNumber;
        }
        this.tabSettings = {
            columns: this.coloumns,
            model: this.feeTypeTrancheSearchView,
            rows: this.feeTranchesDetails,
            tablename: 'Fee Type Tranches',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCount,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Fee Type Tranches'
                }
            },
            filtersList: data.filters,
            rowGroupingColumns: ['feeTypeName']
        };
    };
    // method for get all fee types
    FeeTypeTranchesComponent.prototype.feeTypes = function () {
        var _this = this;
        this.feeTypeTranchesService.getAllFeeTypes().subscribe(function (res) {
            return _this.feeTypesResponse(res);
        }, function (error) {
            _this.disableSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    // method for fee types response
    FeeTypeTranchesComponent.prototype.feeTypesResponse = function (data) {
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
            this.feeTypesList = data.feeTypesView;
        }
        else {
            return false;
        }
    };
    // method for add and update fee typr tranche
    FeeTypeTranchesComponent.prototype.onSubmit = function (feeTypeTranchesForm) {
        var _this = this;
        this.doValidate = true;
        if (this.feeTypeTranchesForm.invalid) {
            return;
        }
        else {
            this.disableSubmitBtn = true;
        }
        if (feeTypeTranchesForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            if (!feeTypeTranchesForm.value.id) {
                this.feeTypeTrancheView.feeTypeId = feeTypeTranchesForm.value.feeTypeId;
                this.feeTypeTrancheView.name = feeTypeTranchesForm.value.name;
                this.feeTypeTrancheView.code = feeTypeTranchesForm.value.code;
                this.feeTypeTrancheView.description = feeTypeTranchesForm.value.description;
                this.feeTypeTranchesService.createFeeTypeTranche(this.feeTypeTrancheView).subscribe(function (res) { return _this.feeTrancheresponse(res); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.updateTrancheView = this.feeTypeTranchesForm.value;
                this.feeTypeTranchesService.updateFeeTypeTranche(this.updateTrancheView).subscribe(function (res) { return _this.feeTrancheresponse(res); }, function (error) {
                    _this.disableSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // method for add and update response
    FeeTypeTranchesComponent.prototype.feeTrancheresponse = function (data) {
        this.disableSubmitBtn = false;
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
            this.feeTypeTranchesForm.reset();
            this.trancheForm.resetForm();
            this.closeAddPanel = true;
            this.doValidate = false;
            this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
            this.openSnackBar(data.messages.ResultMessage);
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // method for row action for displayed fee type tranches based on the action to perform the opertion like edit,delete
    FeeTypeTranchesComponent.prototype.rowActions = function (data) {
        var _this = this;
        this.trancheId = [];
        this.trancheId.push(data.clickedRow.id);
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_SINGLE_DELETE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                    _this.feeTypeTranchesService.deleteFeeTypeTranches(_this.trancheId).
                        subscribe(function (res) { return _this.deleteTrancheResponse(res); }, function (error) {
                        _this.disableSubmitBtn = false;
                        _this.errorResponse(error);
                    });
                }
            });
        }
        else if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT) {
            this.updateButtonShow = true;
            this.closeAddPanel = false;
            this.trancheId = data.clickedRow.id;
            this.feeTypeTranchesService.getFeeTypeTrancheById(this.trancheId).subscribe(function (res) { return _this.getTrancheResponse(res); });
        }
    };
    // method for delete response
    FeeTypeTranchesComponent.prototype.deleteTrancheResponse = function (data) {
        this.closeAddPanel = true;
        this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
        this.openSnackBar(data.messages.ResultMessage);
    };
    // methode for get single fee type tranche response
    FeeTypeTranchesComponent.prototype.getTrancheResponse = function (data) {
        this.updateTranchesView = data.feeTypeTranchesViewModel;
        this.feeTypeTranchesForm.controls['feeTypeId'].setValue(this.updateTranchesView.feeTypeId);
        this.feeTypeTranchesForm.controls['name'].setValue(this.updateTranchesView.name);
        this.feeTypeTranchesForm.controls['code'].setValue(this.updateTranchesView.code);
        this.feeTypeTranchesForm.controls['description'].setValue(this.updateTranchesView.description);
        this.feeTypeTranchesForm.controls['id'].setValue(this.updateTranchesView.id);
    };
    // method for open the panel
    FeeTypeTranchesComponent.prototype.onAddFormClick = function () {
        this.trancheForm.resetForm();
        this.closeAddPanel = false;
        this.updateButtonShow = false;
    };
    // method for close the panel
    FeeTypeTranchesComponent.prototype.closeAddForm = function () {
        this.feeTypeTranchesForm.reset();
        this.closeAddPanel = true;
        this.doValidate = false;
        this.trancheForm.resetForm();
        this.disableSubmitBtn = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addFeeTypeTrancheRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTypeTranchesComponent.prototype, "addFeeTypeTrancheRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trancheForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTypeTranchesComponent.prototype, "trancheForm", void 0);
    FeeTypeTranchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-type-tranches',
            template: __webpack_require__(/*! ./fee-type-tranches.component.html */ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.html"),
            providers: [
                app_service_configuration_finance_api_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_4__["FeeTypeTranchesService"]
            ],
            styles: [__webpack_require__(/*! ./fee-type-tranches.component.scss */ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_configuration_finance_api_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_4__["FeeTypeTranchesService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], FeeTypeTranchesComponent);
    return FeeTypeTranchesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type/fee-type.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type/fee-type.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getAllFeeTypes($event)' (rowBasedAction)='rowWiseActions($event)'\n    (openAddForm)=\"addForm()\" [closeRowForm]='closeAddPanel' [templateRef]=\"addFeeTypes\"></app-table>\n\n<ng-template #addFeeTypes>\n    <form [formGroup]=\"feetypeForm\" (ngSubmit)=\"addUpdateFeeType(feetypeForm)\" #feeTypeForm=\"ngForm\">\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n                fxFlex.gt-xs=\"32\">\n                <mat-label #feeTypeCategoryId translate>Fee Type Category</mat-label>\n                <mat-select formControlName=\"feeTypeCategoryId\" (selectionChange)=\"checkFeeTypeCategory($event.value)\"\n                    required>\n                    <mat-option *ngFor=\"let feeTypeCategory of feeTypeCategoryDropDown\" [value]=\"feeTypeCategory.value\">\n                        {{feeTypeCategory.label}}\n                    </mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]='feeTypeCategoryId.innerText'\n                        [validationControl]=\"feetypeForm.controls.feeTypeCategoryId\"\n                        [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\"\n                fxFlex.gt-xs=\"36\">\n                <mat-label #name translate>Name</mat-label>\n                <input matInput formControlName=\"name\" required (keyup)=\"preventSpace($event,'feetypeForm','name')\" autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feetypeForm','name')\">\n                <mat-error>\n                    <app-validation [labelName]='name.innerText' [validationControl]=\"feetypeForm.controls.name\"\n                        [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n                <mat-label #displayName translate>displayname</mat-label>\n                <input matInput formControlName=\"displayName\" (keyup)=\"preventSpace($event,'feetypeForm','displayName')\" (blur)=\"trimTextBoxSpaces('feetypeForm','displayName')\"  autocomplete=\"off\">\n                <mat-error>\n                    <app-validation [labelName]='displayName.innerText' [validationControl]=\"feetypeForm.controls.displayName\"\n                        [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" class=\"pr-sm-20\" fxFlexFill fxFlex=\"100\"\n                fxFlex.gt-xs=\"32\">\n                <mat-label #code translate>Code</mat-label>\n                <input matInput formControlName=\"code\" (keyup)=\"preventSpace($event,'feetypeForm','code')\" (blur)=\"trimTextBoxSpaces('feetypeForm','code')\" autocomplete=\"off\">\n                <mat-error>\n                    <app-validation [labelName]='code.innerText' [validationControl]=\"feetypeForm.controls.code\"\n                        [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\"\n                fxFlex.gt-xs=\"36\">\n                <mat-label #feeAccountId translate>Fee Account</mat-label>\n                <mat-select formControlName=\"feeAccountId\" required>\n                    <mat-option *ngFor=\"let feeAccount of feeAccountDropDown\" [value]=\"feeAccount.value\">\n                        {{feeAccount.label}}\n                    </mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]='feeAccountId.innerText'\n                        [validationControl]=\"feetypeForm.controls.feeAccountId\" [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <div *ngIf=\"showFeeterm\" fxLayout=\"column\" fxFlexFill fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n                <app-custom-dropdown *ngIf=\" dataLoaded | async\" formControlName=\"feeTermId\"\n                    [dropDownConf]=\"feeTermMulticheck\" ngDefaultControl [errorCheck]=\"feetypeForm.controls.feeTermId\"\n                    (selectedData)=\"onSelect($event)\">\n                </app-custom-dropdown>\n            </div>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" [ngClass]=\"showFeeterm ? 'pr-sm-20': '' \"  fxLayout=\"column\" fxFlex.gt-xs=\"32\"\n                fxFlex=\"100\">\n                <mat-label #feeDescription translate>Fee Description</mat-label>\n                <input matInput formControlName=\"feeDescription\" (keyup)=\"preventSpace($event,'feetypeForm','feeDescription')\" autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('feetypeForm','feeDescription')\">\n                <mat-error>\n                    <app-validation [labelName]='feeDescription.innerText'\n                        [validationControl]=\"feetypeForm.controls.feeDescription\" [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field *ngIf='isSchoolFacility' fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"36\"\n                class=\"pr-sm-20\">\n                <mat-label #schoolFacilityId translate>School Facility</mat-label>\n                <mat-select formControlName=\"schoolFacilityId\" required={{schoolFacilityRequired}}>\n                    <mat-option *ngFor=\"let facility of facilityDropDown\" [value]=\"facility.value\">\n                        {{facility.label}}\n                    </mat-option>\n                </mat-select>\n                <mat-error>\n                    <app-validation [labelName]='schoolFacilityId.innerText'\n                        [validationControl]=\"feetypeForm.controls.schoolFacilityId\" [doValidate]=\"feeTypeFormSubmitted\">\n                    </app-validation>\n                </mat-error>\n            </mat-form-field>\n\n            <div *ngIf='isSameForEntireClass' fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\" class=\"pb-20\"\n                fxLayoutAlign=\"center start\">\n                <mat-checkbox formControlName=\"isSameForEntireClass\" translate [disabled]=\"isDisabled\">{{'Is Same For Entire Class' | translate}}</mat-checkbox>\n            </div>\n\n        </div>\n        <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n\n\n\n\n\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n            <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n                (click)=\"onCancelClick()\">{{'Cancel' | translate}}</button>\n            <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" color=\"accent\"\n                class=\"text-uppercase mr-12\" mat-button>{{this.buttonName | translate}}</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type/fee-type.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type/fee-type.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZlZS10eXBlL2ZlZS10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/fee-type/fee-type.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/fee-type/fee-type.component.ts ***!
  \******************************************************************************/
/*! exports provided: FeeTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTypeComponent", function() { return FeeTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/general/api/school-facility.service */ "./src/app/service/general/api/school-facility.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");












var FeeTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeTypeComponent, _super);
    function FeeTypeComponent(fb, feeTypeService, dialogRef, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.feeTypeService = feeTypeService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        // Array variable declarations
        _this.facilityOptionsSelect = [];
        _this.facilityDropDown = [];
        _this.feeAccountOptionsSelect = [];
        _this.feeAccountDropDown = [];
        _this.feeTermOptionsSelect = [];
        _this.feeTermDropDown = [];
        _this.feeTypeCategoriesSelect = [];
        _this.feeTypeCategoryDropDown = [];
        _this.feeTermsIds = [];
        _this.filterRowData = [];
        // variable declarations
        _this.currentComponent = 'FeeTypeComponent';
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        // boolean variable declarations
        _this.disbleSubmitBtn = false;
        _this.feeTypeFormSubmitted = false;
        _this.updateShow = false;
        _this.closeAddPanel = false;
        _this.isSchoolFacility = true;
        _this.feeTermsToCheck = [];
        _this.showFeeterm = true;
        _this.dataLoaded = Promise.resolve(false);
        _this.isSameForEntireClass = true;
        _this.schoolFacilityRequired = false;
        _this.searchFeeTypeView = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
        };
        _this.feetypeForm = _this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            feeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]),
            isSameForEntireClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            schoolFacilityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            feeTypeCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            feeAccountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            feeTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        return _this;
    }
    FeeTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feeTypeViewModel = {
            feeTermIds: [],
            name: '',
            isSameForEntireClass: 0,
            feeTypeCategoryId: 0,
            feeAccountId: 0
        };
        this.feeTypeView = {
            feeTermIds: [],
            name: '',
            isSameForEntireClass: 0,
            feeTypeCategoryId: 0,
            feeAccountId: 0
        };
        this.feeTermCheck(false);
        this.searchFeeTypeView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.searchFeeTypeView = modelTableComponent;
        }
        // table columns
        this.cols = [
            { field: 'name', header: 'Name', sort: false },
            { field: 'displayName', header: 'displayname', sort: false },
            { field: 'code', header: 'Code', sort: false },
            { field: 'feeDescription', header: 'Description', sort: false },
            { field: 'feeTypeCategoryName', header: 'Fee Type Category', sort: false },
            { field: 'feeAccountDisplayName', header: 'Fee Account', sort: false },
            { field: 'schoolFacilitiyName', header: 'School Facility', sort: false },
            { field: 'isSameForEntireClass', header: 'Is Same For Entire Class', sort: false },
            { field: 'feeTermName', header: 'Fee Term', sort: false },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.searchFeeTypeView,
            tablename: 'Fee Types',
            componentName: this.currentComponent
        };
        if (this.getTokenParam('_as')) {
            this.getAllFeeTypes(this.searchFeeTypeView);
            this.getFacilities();
            this.getFeeAccounts();
            this.getFeeTypeCategories();
            this.getFeeTerms();
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
            this.tabSettings['headerOperations'] = {
                addingForm: {
                    required: false
                }
            };
        }
    };
    // getting facility names
    FeeTypeComponent.prototype.getFacilities = function () {
        var _this = this;
        this.feeTypeService.facilities().subscribe(function (res) { return _this.facilityGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeTypeComponent.prototype.facilityGet = function (data) {
        this.facilityOptionsSelect = [];
        for (var i = 0; i < data.schoolFacilityDataViewModel.length; i++) {
            this.facilityOptionsSelect.push({ value: data.schoolFacilityDataViewModel[i].id, label: data.schoolFacilityDataViewModel[i].facilityName });
            this.facilityDropDown = this.facilityOptionsSelect;
        }
    };
    // End
    // getting feeAccounts
    FeeTypeComponent.prototype.getFeeAccounts = function () {
        var _this = this;
        this.feeTypeService.getFeeAccounts().subscribe(function (res) { return _this.feeAccountsGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeTypeComponent.prototype.feeAccountsGet = function (data) {
        this.feeAccountOptionsSelect = [];
        if (!data.commonViewModel) {
            return;
        }
        for (var i = 0; i < data.commonViewModel.length; i++) {
            this.feeAccountOptionsSelect.push({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
            this.feeAccountDropDown = this.feeAccountOptionsSelect;
        }
    };
    // End
    // getting feeTerms
    FeeTypeComponent.prototype.getFeeTerms = function () {
        var _this = this;
        this.feeTypeService.getFeeTerms().subscribe(function (res) {
            _this.feeTermsGet(res);
            _this.dataLoaded = Promise.resolve(true);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeTypeComponent.prototype.feeTermsGet = function (data) {
        this.feeTermOptionsSelect = [];
        if (data.commonViewModel) {
            for (var i = 0; i < data.commonViewModel.length; i++) {
                this.feeTermOptionsSelect.push({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
                this.feeTermDropDown = this.feeTermOptionsSelect;
            }
            if (this.feeTermDropDown) {
                this.feeTermCheck(true);
            }
        }
    };
    // End
    // getting feeAccounts
    FeeTypeComponent.prototype.getFeeTypeCategories = function () {
        var _this = this;
        this.feeTypeService.getFeeTypeCategories().subscribe(function (res) { return _this.feeTypeCategoriesGet(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeTypeComponent.prototype.feeTypeCategoriesGet = function (data) {
        this.feeTypeCategoryData = data.commonViewModel;
        this.feeTypeCategoriesSelect = [];
        for (var i = 0; i < data.commonViewModel.length; i++) {
            this.feeTypeCategoriesSelect.push({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
            this.feeTypeCategoryDropDown = this.feeTypeCategoriesSelect;
        }
    };
    // End
    // get all feetypes
    FeeTypeComponent.prototype.getAllFeeTypes = function (searchFeeTypeDataView) {
        var _this = this;
        this.searchFeeTypeView = searchFeeTypeDataView;
        this.feeTypeService.fetchingFeeTypes(this.searchFeeTypeView.Name, this.searchFeeTypeView.displayName, this.searchFeeTypeView.schoolFacilityName, this.searchFeeTypeView.feeTypeCategoryName, this.searchFeeTypeView.feeAccountName, this.searchFeeTypeView.feeTermName, this.searchFeeTypeView.Code, this.searchFeeTypeView.description, this.searchFeeTypeView.SchoolFacilityId, this.searchFeeTypeView.FeeTermId, this.searchFeeTypeView.FeeTypeCategoryId, this.searchFeeTypeView.FeeAccountId, this.searchFeeTypeView.IsSameForEntireClass, this.searchFeeTypeView.sortBy, this.searchFeeTypeView.sortOrder, this.searchFeeTypeView.pageNumber, this.searchFeeTypeView.pageSize).subscribe(function (res) { return _this.getAllResponse(res); }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    FeeTypeComponent.prototype.getAllResponse = function (feeData) {
        var _this = this;
        if (feeData.feetypes == null) {
            this.rows = [];
        }
        else {
            this.rows = feeData.feetypes.list;
            this.totalItems = feeData.feetypes.totalItems;
        }
        var feeTypeOperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE,
            },
        ];
        this.filterRowData = [];
        if (feeData.feetypes) {
            this.searchFeeTypeView.pageNumber = feeData.feetypes.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.searchFeeTypeView,
            rows: this.rows,
            tablename: 'Fee Types',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            rowGroupingColumns: ['name', 'displayName', 'code', 'feeDescription', 'feeTypeCategoryName', 'feeAccountDisplayName', 'schoolFacilitiyName', 'isSameForEntireClass'],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Fee Types'
                },
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NEW
                },
                navigateComponent: {
                    name: '',
                    btnName: ''
                }
            },
            filtersList: feeData.filters
        };
        this.filterRowData = this.rows;
        // filtering row group data
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.name === element.name;
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
                if (element.name === element1.name &&
                    element.id === element1.id &&
                    element.feeTermName === element1.feeTermName) {
                    element1.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE
                        },
                    ];
                }
            });
        });
        this.rows.forEach(function (element1) {
            element1.isSameForEntireClass === 1 ?
                element1.isSameForEntireClass = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES : element1.isSameForEntireClass === 0 ? element1.isSameForEntireClass = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO : element1.isSameForEntireClass = null;
        });
    };
    // End
    // Add and update fee type functionalities
    FeeTypeComponent.prototype.addUpdateFeeType = function (feetypeForm) {
        var _this = this;
        this.feeTermsIds = [];
        this.feeTypeFormSubmitted = true;
        if (feetypeForm.controls.isSameForEntireClass.value) {
            feetypeForm.value.isSameForEntireClass = 1;
            feetypeForm.controls.isSameForEntireClass.value = 1;
        }
        else if (feetypeForm.controls.isSameForEntireClass.value === null) {
            feetypeForm.value.isSameForEntireClass = null;
            feetypeForm.controls.isSameForEntireClass.value = null;
        }
        else {
            feetypeForm.value.isSameForEntireClass = 0;
            feetypeForm.controls.isSameForEntireClass.value = 0;
        }
        if (feetypeForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (feetypeForm.value.feeTermId != null) {
                feetypeForm.value.feeTermId.forEach(function (element) {
                    _this.feeTermsIds.push(element.value);
                });
            }
            if (!this.isEdit) {
                this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SUBMIT;
                this.feeTypeViewModel = feetypeForm.value;
                this.feeTypeViewModel.feeTermIds = this.feeTermsIds;
                this.feeTypeService.createFeeTypes(this.feeTypeViewModel).subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].UPDATE;
                this.feeTypeView = feetypeForm.value;
                this.feeTypeView.feeTermIds = this.feeTermsIds;
                this.feeTypeService.updateFeeTypes(this.feeTypeView).subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
        }
    };
    // response after add and update data of fee types
    FeeTypeComponent.prototype.addUpdateResponse = function (response) {
        this.disbleSubmitBtn = false;
        if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["OK"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["CONFLICT"]) {
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["BAD_REQUEST"] || response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["CONFLICT"]) {
                this.closeAddPanel = false;
            }
            else {
                this.feeTypeFormSubmitted = false;
                this.closeAddPanel = true;
                this.feeTypeForm.resetForm();
                this.disbleSubmitBtn = false;
                this.getAllFeeTypes(this.searchFeeTypeView);
            }
            this.openSnackBar(response.messages.ResultMessage);
        }
        else {
            this.closeAddPanel = false;
        }
    };
    // grid rowwise actions opearations
    FeeTypeComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].EDIT) {
            this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].UPDATE;
            this.isEdit = true;
            this.updateShow = true;
            this.closeAddPanel = false;
            this.disbleSubmitBtn = false;
            this.feeTypeService.getFeeTypeById(event.clickedRow.id).subscribe(function (res) { return _this.singleFeeDetails(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DELETE) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].YES) {
                    _this.feeTypeService.deleteFeeType(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    // response after delete operation
    FeeTypeComponent.prototype.deleteResponse = function (deleteResponse) {
        this.getAllFeeTypes(this.searchFeeTypeView);
        this.openSnackBar(deleteResponse.messages.ResultMessage);
    };
    // End
    // Cancel button click
    FeeTypeComponent.prototype.onCancelClick = function () {
        this.feetypeForm.reset();
        this.closeAddPanel = true;
        this.updateShow = false;
        this.disbleSubmitBtn = false;
        this.feeTypeForm.resetForm();
        this.feetypeForm.controls['feeTermId'].patchValue(this.compareArrayData(this.feeTermDropDown, []));
        this.formDirective.resetForm();
    };
    // New button click opeartions
    FeeTypeComponent.prototype.addForm = function () {
        this.isEdit = false;
        this.feetypeForm.reset();
        this.closeAddPanel = false;
        this.updateShow = false;
        this.disbleSubmitBtn = false;
        this.feeTypeForm.resetForm();
        this.isSchoolFacility = false;
        this.isSameForEntireClass = false;
        this.buttonName = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SUBMIT;
    };
    FeeTypeComponent.prototype.feeTermCheck = function (required) {
        this.feeTermMulticheck = { multiSelect: true, placeholder: 'Fee Term', data: this.feeTermDropDown, noEntryFoundLabel: 'No Data Found', isRequired: required };
    };
    // checking fee type category dependencies
    FeeTypeComponent.prototype.checkFeeTypeCategory = function (feeTypeId) {
        var _this = this;
        this.feeTypeCategoryData.forEach(function (element) {
            if (element.id === feeTypeId) {
                _this.code = element.code;
            }
        });
        if (this.code === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].SCHOOL_ENROLLMENT) {
            this.clearSchoolFeeValidation();
            this.feetypeForm.get('feeTermId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
            this.feetypeForm.get('isSameForEntireClass').setValue(true);
            this.feeTermCheck(true);
            this.isSchoolFacility = false;
            this.isSameForEntireClass = true;
            this.isDisabled = true;
            this.showFeeterm = true;
        }
        else if (this.code === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].LATE_FEE) {
            this.clearSchoolFeeValidation();
            this.isSchoolFacility = false;
            this.isSameForEntireClass = false;
            this.showFeeterm = false;
            this.feetypeForm.get('feeTermId').clearValidators();
            this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
            this.feetypeForm.controls['feeTermId'].setValue(null);
            this.feetypeForm.controls['isSameForEntireClass'].setValue(null);
            this.feetypeForm.controls['schoolFacilityId'].setValue(null);
            this.feeTermCheck(false);
        }
        else if (this.code === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TRANSPORT_FEE) {
            this.isDisabled = false;
            this.validateControls();
            this.addSchoolFeeValidation();
        }
        else {
            if (this.feetypeForm.value.feeTermId != null && this.feetypeForm.value.feeTermId.length > 0) {
                this.addSchoolFeeValidation();
                this.schoolFacilityRequired = true;
            }
            else {
                this.clearSchoolFeeValidation();
            }
            this.isDisabled = false;
            this.validateControls();
        }
    };
    FeeTypeComponent.prototype.clearSchoolFeeValidation = function () {
        this.schoolFacilityRequired = false;
        this.feetypeForm.get('schoolFacilityId').clearValidators();
        // this.feetypeForm.controls['schoolFacilityId'].setValue('');
        this.feetypeForm.controls['schoolFacilityId'].updateValueAndValidity();
    };
    FeeTypeComponent.prototype.addSchoolFeeValidation = function () {
        this.schoolFacilityRequired = true;
        this.feetypeForm.get('schoolFacilityId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.feetypeForm.controls['schoolFacilityId'].updateValueAndValidity();
    };
    FeeTypeComponent.prototype.validateControls = function () {
        this.feetypeForm.get('isSameForEntireClass').setValue(true);
        this.feetypeForm.get('feeTermId').clearValidators();
        this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
        this.feeTermCheck(false);
        this.isSchoolFacility = true;
        this.isSameForEntireClass = true;
        this.showFeeterm = true;
    };
    // binding fee type deatils for update 
    FeeTypeComponent.prototype.singleFeeDetails = function (data) {
        var _this = this;
        this.checkFeeTypeCategory(data.feeTypeViewModel.feeTypeCategoryId);
        this.feeTermsToCheck = [];
        if (data.feeTypeViewModel != null) {
            this.feetypeForm.patchValue(data.feeTypeViewModel);
            if (data.feeTypeViewModel.feeTypesForFeeTerms) {
                data.feeTypeViewModel.feeTypesForFeeTerms.forEach(function (element) {
                    _this.feeTermsToCheck.push({ label: element.feeTermName, value: element.feeTermId });
                });
                this.onSelect(data.feeTypeViewModel.feeTypesForFeeTerms);
            }
            this.feetypeForm.controls['feeTermId'].patchValue(this.compareArrayData(this.feeTermDropDown, this.feeTermsToCheck));
        }
    };
    FeeTypeComponent.prototype.onSelect = function (data) {
        if (data.length > 0 && this.code === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].OTHER_FEE) {
            this.addSchoolFeeValidation();
        }
        else if (this.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].TRANSPORT_FEE) {
            this.clearSchoolFeeValidation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addFeeTypes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTypeComponent.prototype, "addSchoolFacilities", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feeTypeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeeTypeComponent.prototype, "feeTypeForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], FeeTypeComponent.prototype, "formDirective", void 0);
    FeeTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-type',
            template: __webpack_require__(/*! ./fee-type.component.html */ "./src/app/modules/configuration/finance/fee-type/fee-type.component.html"),
            providers: [app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_11__["FeeTypeService"], app_service_general_api_school_facility_service__WEBPACK_IMPORTED_MODULE_9__["SchoolFacilityService"]],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./fee-type.component.scss */ "./src/app/modules/configuration/finance/fee-type/fee-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_11__["FeeTypeService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], FeeTypeComponent);
    return FeeTypeComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/finance-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/finance-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finance.component */ "./src/app/modules/configuration/finance/finance.component.ts");
/* harmony import */ var _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-adjustment-type/invoice-adjustment-type.component */ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.ts");
/* harmony import */ var _fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fee-type/fee-type.component */ "./src/app/modules/configuration/finance/fee-type/fee-type.component.ts");
/* harmony import */ var _late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./late-fee-rules/late-fee-rules.component */ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.ts");
/* harmony import */ var _fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fee-accounts/fee-accounts.component */ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.ts");
/* harmony import */ var _fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fee-terms/fee-terms.component */ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.ts");
/* harmony import */ var _fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fee-type-tranches/fee-type-tranches.component */ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.ts");
/* harmony import */ var _manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-fees/manage-fees.component */ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.ts");
/* harmony import */ var _fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fee-concession-group/fee-concession-group.component */ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.ts");
/* harmony import */ var _manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manage-fee-tranches/manage-fee-tranches.component */ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.ts");














var routes = [
    {
        path: '', component: _finance_component__WEBPACK_IMPORTED_MODULE_4__["FinanceComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'invoice-adjustment-types' },
            { path: 'invoice-adjustment-types', component: _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceAdjustmentTypeComponent"], data: { title: 'Invoice Adjustment Types' } },
            { path: 'late-fee-rules', component: _late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_7__["LateFeeRulesComponent"], data: { title: 'Late Fee Rules' } },
            { path: 'invoice-adjustment-types', component: _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceAdjustmentTypeComponent"], data: { title: 'Invoice Adjustment Types' } },
            { path: 'fee-accounts', component: _fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_8__["FeeAccountsComponent"], data: { title: 'Fee Accounts' } },
            { path: 'fee-type-tranches', component: _fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_10__["FeeTypeTranchesComponent"], data: { title: 'Fee Type Tranches' } },
            { path: 'invoice-adjustment-types', component: _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceAdjustmentTypeComponent"], data: { title: 'Invoice Adjustment Types' } },
            { path: 'fee-terms', component: _fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_9__["FeeTermsComponent"], data: { title: 'Fee Terms' } },
            { path: 'fee-types', component: _fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_6__["FeeTypeComponent"], data: { title: 'Fee Types' } },
            { path: 'manage-fees', component: _manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_11__["ManageFeesComponent"], data: { title: 'Manage Fees' } },
            { path: 'fee-concession-group', component: _fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_12__["FeeConcessionGroupComponent"], data: { title: 'Fee Concession Group' } },
            { path: 'manage-fee-tranches', component: _manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_13__["ManageFeeTranchesComponent"], data: { title: 'Manage-Fee-Tranches' } },
        ]
    },
];
var FinanceRoutingModule = /** @class */ (function () {
    function FinanceRoutingModule() {
    }
    FinanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
    ], FinanceRoutingModule);
    return FinanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/finance/finance.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/finance/finance.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/finance.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/finance/finance.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ZpbmFuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/finance.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/configuration/finance/finance.component.ts ***!
  \********************************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinanceComponent = /** @class */ (function () {
    function FinanceComponent() {
    }
    FinanceComponent.prototype.ngOnInit = function () {
    };
    FinanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finance',
            template: __webpack_require__(/*! ./finance.component.html */ "./src/app/modules/configuration/finance/finance.component.html"),
            styles: [__webpack_require__(/*! ./finance.component.scss */ "./src/app/modules/configuration/finance/finance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinanceComponent);
    return FinanceComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/finance/finance.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/configuration/finance/finance.module.ts ***!
  \*****************************************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice-adjustment-type/invoice-adjustment-type.component */ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.ts");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/modules/configuration/finance/finance-routing.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finance.component */ "./src/app/modules/configuration/finance/finance.component.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fee-type/fee-type.component */ "./src/app/modules/configuration/finance/fee-type/fee-type.component.ts");
/* harmony import */ var _late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./late-fee-rules/late-fee-rules.component */ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.ts");
/* harmony import */ var app_service_configuration_finance_api_late_fee_rules_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/configuration/finance/api/late-fee-rules.service */ "./src/app/service/configuration/finance/api/late-fee-rules.service.ts");
/* harmony import */ var _fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fee-accounts/fee-accounts.component */ "./src/app/modules/configuration/finance/fee-accounts/fee-accounts.component.ts");
/* harmony import */ var _fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fee-type-tranches/fee-type-tranches.component */ "./src/app/modules/configuration/finance/fee-type-tranches/fee-type-tranches.component.ts");
/* harmony import */ var _fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fee-terms/fee-terms.component */ "./src/app/modules/configuration/finance/fee-terms/fee-terms.component.ts");
/* harmony import */ var app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/configuration/finance/api/api */ "./src/app/service/configuration/finance/api/api.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var _manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manage-fees/manage-fees.component */ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-configuration.service */ "./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts");
/* harmony import */ var _fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fee-concession-group/fee-concession-group.component */ "./src/app/modules/configuration/finance/fee-concession-group/fee-concession-group.component.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-concession-group.service */ "./src/app/service/configuration/finance/api/fee-concession-group.service.ts");
/* harmony import */ var _manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./manage-fee-tranches/manage-fee-tranches.component */ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-type-tranches.service */ "./src/app/service/configuration/finance/api/manage-fee-type-tranches.service.ts");






























var FinanceModule = /** @class */ (function () {
    function FinanceModule() {
    }
    FinanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_finance_component__WEBPACK_IMPORTED_MODULE_10__["FinanceComponent"],
                _invoice_adjustment_type_invoice_adjustment_type_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceAdjustmentTypeComponent"],
                _fee_accounts_fee_accounts_component__WEBPACK_IMPORTED_MODULE_17__["FeeAccountsComponent"],
                _fee_type_fee_type_component__WEBPACK_IMPORTED_MODULE_14__["FeeTypeComponent"],
                _fee_type_tranches_fee_type_tranches_component__WEBPACK_IMPORTED_MODULE_18__["FeeTypeTranchesComponent"],
                _fee_terms_fee_terms_component__WEBPACK_IMPORTED_MODULE_19__["FeeTermsComponent"],
                _late_fee_rules_late_fee_rules_component__WEBPACK_IMPORTED_MODULE_15__["LateFeeRulesComponent"],
                _fee_concession_group_fee_concession_group_component__WEBPACK_IMPORTED_MODULE_26__["FeeConcessionGroupComponent"],
                _manage_fees_manage_fees_component__WEBPACK_IMPORTED_MODULE_23__["ManageFeesComponent"],
                _manage_fee_tranches_manage_fee_tranches_component__WEBPACK_IMPORTED_MODULE_28__["ManageFeeTranchesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedManagementModule"],
                _finance_routing_module__WEBPACK_IMPORTED_MODULE_8__["FinanceRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__["MatcomponentsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_24__["FuseWidgetModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
                    multi: true
                },
                app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_20__["FeeAccountService"], app_service_configuration_finance_api_late_fee_rules_service__WEBPACK_IMPORTED_MODULE_16__["LateFeeRulesService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_21__["TypeService"], app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_22__["FeeTermsService"], app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_25__["ManageFeeConfigurationService"], app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_27__["FeeConcessionGroupService"], app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_29__["ManageFeeTypeTranchesService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        })
    ], FinanceModule);
    return FinanceModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"settingTableData\" (getTableData)='tableData($event)'\n   (rowBasedAction)='onRowActions($event)' (openAddForm)='openInvoiceAdjTypeForm()' [closeRowForm]='isInvoiceAdjTypeFormClosed'\n   [templateRef]=\"newTemplate\">\n</app-table>\n\n<ng-template #newTemplate>\n   <form [formGroup]=\"invoiceAdjustmentTypeForm\"\n      (ngSubmit)=\"createOrUpdateInvoiceAdjustmentType(invoiceAdjustmentTypeForm.value)\" #invoiceAdjustmentType=\"ngForm\">\n      <div fxFlexFill fxLayout=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n         <mat-form-field appearance=\"outline\" class=\"example-full-width\" fxLayout=\"column\" fxFlex.gt-xs=\"50\"\n            fxFlex=\"100\">\n            <mat-label #invoiceAdjTypeName translate>Invoice Adjustment Type Name</mat-label>\n            <input matInput formControlName=\"name\"  (blur)=\"trimTextBoxSpaces('invoiceAdjustmentTypeForm','name')\" (keyup)=\"preventSpace($event,'invoiceAdjustmentTypeForm','name')\" required>\n            <mat-error>\n               <app-validation [labelName]=\"invoiceAdjTypeName.innerText\"\n                  [validationControl]=\"invoiceAdjustmentTypeForm.controls.name\" [doValidate]=\"invoiceAdjTypeFormSubmitted\">\n               </app-validation>\n            </mat-error>\n         </mat-form-field>\n\n      </div>\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-16\">\n         <div fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mb-12 fuse-black-500-fg\"><span #isPositiveAdj translate>Is Positive Adjustment</span> <span>*</span>\n            </div>\n         <mat-radio-group class=\"grey-500-fg text-semibold\" aria-label=\"Select an option\" fxFlexFill fxLayout=\"row\"\n            fxLayoutAlign=\"center center\" formControlName=\"isPositiveAdjustment\">\n            <mat-radio-button class=\"ml-24\" *ngFor=\"let radio of YesOrNo\" [value]=\"radio.value\">{{radio.label | translate}}</mat-radio-button>\n         </mat-radio-group>\n         <mat-error fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <app-validation [labelName]=\"isPositiveAdj.innerText\"\n               [validationControl]=\"invoiceAdjustmentTypeForm.controls.isPositiveAdjustment\"\n               [doValidate]=\"invoiceAdjTypeFormSubmitted\">\n            </app-validation>\n         </mat-error>\n      </div>\n      <div fxLayout=\"row\"  fxLayoutAlign.gt-xs=\"end center\" class=\"pb-8\">\n         <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\" (click)=\"closeForm()\">{{'Cancel' | translate}}</button>\n            <button class=\"text-uppercase\" mat-raised-button type=\"submit\" color=\"accent\" [disabled] = \"disbleSubmitBtn\">\n               {{(isSubmitButtonEnabled ? 'Create':'Update') | translate}}</button>\n      </div>\n   </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2ludm9pY2UtYWRqdXN0bWVudC10eXBlL2ludm9pY2UtYWRqdXN0bWVudC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: InvoiceAdjustmentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceAdjustmentTypeComponent", function() { return InvoiceAdjustmentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/configuration/finance/api/api */ "./src/app/service/configuration/finance/api/api.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/yes-no-view */ "./src/app/models/yes-no-view.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var InvoiceAdjustmentTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvoiceAdjustmentTypeComponent, _super);
    function InvoiceAdjustmentTypeComponent(commonService, invoiceAdjustmentTypeService, dialogRef, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.invoiceAdjustmentTypeService = invoiceAdjustmentTypeService;
        _this.dialogRef = dialogRef;
        _this.snackBar = snackBar;
        _this.disbleSubmitBtn = false;
        _this.pageCnt = 0;
        _this.totalRowsCount = 0;
        _this.custRowsPerPageOptions = [];
        _this.rowBasedAction = [];
        _this.invoiceAdjTypeFormSubmitted = false;
        _this.isSubmitButtonEnabled = true;
        _this.YesOrNo = app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_8__["YesNo"].values;
        _this.currentComponent = 'InvoiceAdjustmentTypeComponent';
        _this.initializeFilterView();
        _this.initializeInvoiceAdjustmentTypeForm();
        _this.tableColumns();
        _this.tabSettings();
        _this.commonService.getTableLSObj(_this.settingTableData);
        return _this;
    }
    InvoiceAdjustmentTypeComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        // if (localStorage.getItem('_s')) {
        this.fetchInvoiceAdjustmentTypes();
        // }
    };
    /**
    * intializes formGroup for InitializeInvoiceAdjustmentType
    */
    InvoiceAdjustmentTypeComponent.prototype.initializeInvoiceAdjustmentTypeForm = function () {
        this.invoiceAdjustmentTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(45)]),
            isPositiveAdjustment: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
    };
    /**
    * table columns
    */
    InvoiceAdjustmentTypeComponent.prototype.tableColumns = function () {
        this.columns = [
            { field: 'name', header: 'Name', sort: true },
            { field: 'isPositiveAdjustment', header: 'Is Positive Adjustment', sort: true },
            { field: 'isInactive', header: 'Active', sort: true },
            { field: 'inactiveDate', header: 'Inactive Date', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    /**
    * initial table settings
    */
    InvoiceAdjustmentTypeComponent.prototype.tabSettings = function () {
        this.settingTableData = {
            rows: [],
            columns: this.columns,
            tablename: 'Invoice Adjustment Types',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    /**
    * initializing filterViewModel
    */
    InvoiceAdjustmentTypeComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE
        };
    };
    /**
    * api call to get all invoice adjustment types
    */
    InvoiceAdjustmentTypeComponent.prototype.fetchInvoiceAdjustmentTypes = function () {
        var _this = this;
        this.invoiceAdjustmentTypeService.invoiceAdjustmentTypesList(this.filterViewModel.names, this.filterViewModel.isPositiveAdjustments, this.filterViewModel.inActives, this.filterViewModel.inactiveDate, this.filterViewModel.inactiveDateBegin, this.filterViewModel.inactiveDateEnd, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            _this.invoiceAdjustmentTypesListResult(res);
        }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    /**
    * manipulate response data and sets to app-table
    * @param invoiceAdjList
    */
    InvoiceAdjustmentTypeComponent.prototype.invoiceAdjustmentTypesListResult = function (invoiceAdjList) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (!invoiceAdjList.invoiceAdjustmentTypeList) {
            this.rows = [];
        }
        else {
            this.rows = invoiceAdjList.invoiceAdjustmentTypeList.list;
            this.totalRowsCount = invoiceAdjList.invoiceAdjustmentTypeList.totalItems;
            this.pageCnt = invoiceAdjList.invoiceAdjustmentTypeList.totalPages;
            this.rows.forEach(function (element) {
                element.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE
                    }
                ];
                // tslint:disable-next-line:no-unused-expression
                (element.isInactive === 1) ? [element.isInactive = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, element.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACTIVE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACTIVE_ICON,
                    })] : [element.isInactive = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES, element.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INACTIVE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INACTIVE_ICON,
                    })];
                element.isPositiveAdjustment = (element.isPositiveAdjustment === 1) ?
                    app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES : app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO;
                element.inactiveDate = (element.inactiveDate == null) ? null : _this.commonService.customDateFormat(element.inactiveDate, _this.getSchoolDateFormat()).date;
            });
        }
        if (invoiceAdjList.invoiceAdjustmentTypeList) {
            this.filterViewModel.pageNumber = invoiceAdjList.invoiceAdjustmentTypeList.pageNumber;
        }
        /**
        * sets data to app-table component
        */
        this.settingTableData = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            tablename: 'Invoice Adjustment Types',
            componentName: this.currentComponent,
            isAddRowEventRequired: true,
            isPaginationRequired: true,
            filtersList: invoiceAdjList.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'new'
                }, navigateComponent: {
                    name: '',
                    btnName: ''
                },
                infoButton: {
                    required: true,
                    text: 'Invoice Adjustment Types'
                }
            }
        };
    };
    /**
    * gets the data to bind table on filter/pagination
    * @param _filterViewModel
    */
    InvoiceAdjustmentTypeComponent.prototype.tableData = function (_filterViewModel) {
        this.filterViewModel = _filterViewModel;
        this.fetchInvoiceAdjustmentTypes();
    };
    InvoiceAdjustmentTypeComponent.prototype.openInvoiceAdjTypeForm = function () {
        this.invoiceAdjTypeFormSubmitted = false;
        this.isInvoiceAdjTypeFormClosed = false;
        this.invoiceAdjTypeForm.resetForm();
        this.isSubmitButtonEnabled = true;
    };
    /**
    * close the panel and initialize form on close
    */
    InvoiceAdjustmentTypeComponent.prototype.closeForm = function () {
        this.invoiceAdjTypeForm.resetForm();
        this.isInvoiceAdjTypeFormClosed = true;
        this.invoiceAdjTypeFormSubmitted = false;
    };
    InvoiceAdjustmentTypeComponent.prototype.createOrUpdateInvoiceAdjustmentType = function (invoiceAdjustmentType) {
        var _this = this;
        this.invoiceAdjTypeFormSubmitted = true;
        if (invoiceAdjustmentType.id == null && this.invoiceAdjustmentTypeForm.valid) {
            this.invoiceAdjustmentTypeService.createInvoiceAdjustmentType(invoiceAdjustmentType).subscribe(function (response) {
                _this.openSnackBar(response.messages.ResultMessage);
                if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                    _this.fetchInvoiceAdjustmentTypes();
                    _this.closeForm();
                }
                else {
                    _this.isInvoiceAdjTypeFormClosed = false;
                }
            }, function (error) {
                _this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
            this.disbleSubmitBtn = false;
        }
        else if (this.invoiceAdjustmentTypeForm.valid) {
            this.invoiceAdjustmentTypeService.updateInvoiceAdjustmentType(invoiceAdjustmentType).subscribe(function (response) {
                _this.openSnackBar(response.messages.ResultMessage);
                if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                    _this.fetchInvoiceAdjustmentTypes();
                    _this.closeForm();
                }
                else {
                    _this.isInvoiceAdjTypeFormClosed = false;
                }
            }, function (error) {
                _this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
            this.disbleSubmitBtn = false;
        }
    };
    InvoiceAdjustmentTypeComponent.prototype.onRowActions = function (operationData) {
        var _this = this;
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT.toLowerCase()) {
            this.invoiceAdjTypeFormSubmitted = false;
            this.isSubmitButtonEnabled = false;
            var isPositiveAdjustment = (operationData.clickedRow.isPositiveAdjustment === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) ?
                1 : 0;
            this.isInvoiceAdjTypeFormClosed = false;
            this.invoiceAdjustmentTypeForm.controls['id'].setValue(operationData.clickedRow.id);
            this.invoiceAdjustmentTypeForm.controls['name'].setValue(operationData.clickedRow.name);
            this.invoiceAdjustmentTypeForm.controls['isPositiveAdjustment'].setValue(isPositiveAdjustment);
        }
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE.toLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    var invoiceAdjustmentTypeId = operationData.clickedRow.id;
                    _this.deleteInvoiceAdjustmentTypes(invoiceAdjustmentTypeId);
                }
            });
        }
        /**check status based on */
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACTIVE_OPERATION.toLowerCase() || operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INACTIVE_OPERATION.toLowerCase()) {
            var warningMessage = (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACTIVE_OPERATION.toLowerCase()) ? app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].WARNING_ON_ACTIVATE : app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].WARNING_ON_INACTIVATE;
            var dialogValue = this.commonService.dialog(warningMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    var isInActive = void 0;
                    (operationData.clickedRow.isInactive === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) ? isInActive = 1 : isInActive = 0;
                    var invoiceAdjustmentTypeStatus = void 0;
                    invoiceAdjustmentTypeStatus = {
                        id: operationData.clickedRow.id,
                        isInActive: isInActive
                    };
                    _this.changeInvoiceAdjustmentStatus(invoiceAdjustmentTypeStatus);
                }
            });
        }
    };
    InvoiceAdjustmentTypeComponent.prototype.deleteInvoiceAdjustmentTypes = function (invoiceAdjustmentTypeId) {
        var _this = this;
        this.invoiceAdjustmentTypeService.deleteInvoiceAdjustmentType(invoiceAdjustmentTypeId).subscribe(function (response) {
            _this.openSnackBar(response.messages.ResultMessage);
            _this.fetchInvoiceAdjustmentTypes();
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    /**
    * changes the status of invoice adjustment
    * @param invoiceAdjustmentTypeStatus
    */
    InvoiceAdjustmentTypeComponent.prototype.changeInvoiceAdjustmentStatus = function (invoiceAdjustmentTypeStatus) {
        var _this = this;
        this.invoiceAdjustmentTypeService.updateInvoiceAdjustmentTypeStatus(invoiceAdjustmentTypeStatus)
            .subscribe(function (response) {
            _this.openSnackBar(response.messages.ResultMessage);
            if (response.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                _this.fetchInvoiceAdjustmentTypes();
            }
        }, function (error) {
            _this.disbleSubmitBtn = false;
            _this.errorResponse(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invoiceAdjustmentType'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InvoiceAdjustmentTypeComponent.prototype, "invoiceAdjTypeForm", void 0);
    InvoiceAdjustmentTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-adjustment-type',
            template: __webpack_require__(/*! ./invoice-adjustment-type.component.html */ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.html"),
            providers: [
                app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_2__["InvoiceAdjustmentTypeService"]
            ],
            styles: [__webpack_require__(/*! ./invoice-adjustment-type.component.scss */ "./src/app/modules/configuration/finance/invoice-adjustment-type/invoice-adjustment-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            app_service_configuration_finance_api_api__WEBPACK_IMPORTED_MODULE_2__["InvoiceAdjustmentTypeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], InvoiceAdjustmentTypeComponent);
    return InvoiceAdjustmentTypeComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getTableData($event)' (rowBasedAction)='onTableSelect($event)'\n  [templateRef]='addLateFeeRuleTemplate' (deleteAllRows)=\"deleteAll()\" [closeRowForm]='closeAddPanel' (openAddForm)='addRow()'\n (selectedRows)='selectedRows($event)' ></app-table>\n<ng-template #addLateFeeRuleTemplate>\n  <form [formGroup]=\"lateFeeRuleForm\" (ngSubmit)=\"onSubmitLateFeeRule(lateFeeRuleForm)\" #userLateFeeRuleForm=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n        <mat-label #paymentDelayFromCount translate>Payment Delay From(Day Count)</mat-label>\n        <input required matInput formControlName=\"delayFromDayCount\" (keyup)=\"preventSpace($event,'lateFeeRuleForm','delayFromDayCount')\" (blur)=\"trimTextBoxSpaces('lateFeeRuleForm','delayFromDayCount')\" autocomplete=\"off\">\n        <mat-error>\n          <app-validation [labelName]=\"paymentDelayFromCount.innerText\"\n            [validationControl]=\"lateFeeRuleForm.controls.delayFromDayCount\" [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\">\n        <mat-label #paymentDelayToCount translate>Payment Delay To(Day Count)</mat-label>\n        <input (keyup)=\"preventSpace($event,'lateFeeRuleForm','delayToDayCount')\" (blur)=\"trimTextBoxSpaces('lateFeeRuleForm','delayToDayCount')\" required matInput formControlName=\"delayToDayCount\" autocomplete=\"off\">\n        <mat-error>\n          <app-validation [labelName]=\"paymentDelayToCount.innerText\"\n            [validationControl]=\"lateFeeRuleForm.controls.delayToDayCount\" [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxFlex.gt-xs=\"35\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n        fxLayout=\"column\">\n        <mat-label translate #lateFeePenaltyType>Late Fee Penalty Type</mat-label>\n        <mat-select required formControlName=\"lateFeePenaltyTypeId\"\n          (selectionChange)=\"lateFeePenaltyTypeChange($event)\">\n          <mat-option *ngFor=\"let lateFeePenaltyType of lateFeePenaltyTypes\" [value]=\"lateFeePenaltyType.value\">\n            {{ lateFeePenaltyType.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]=\"lateFeePenaltyType.innerText\"\n            [validationControl]=\"lateFeeRuleForm.controls.lateFeePenaltyTypeId\" [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\" class=\"pt-12\">\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n        <mat-label #penaltyAmount translate>Penalty Amount</mat-label>\n        <input (keyup)=\"preventSpace($event,'lateFeeRuleForm','penaltyAmount')\" (blur)=\"trimTextBoxSpaces('lateFeeRuleForm','penaltyAmount')\" required matInput formControlName=\"penaltyAmount\" autocomplete=\"off\">\n        <mat-error>\n          <app-validation [labelName]=\"penaltyAmount.innerText\"\n            [validationControl]=\"lateFeeRuleForm.controls.penaltyAmount\" [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <div *ngIf=\"isPenaltyExist\" fxFlexFill fxLayout=\"column\" class=\"pt-8 pb-20 px-20\" fxFlex=\"100\" fxFlex.gt-sm=\"32\"\n        fxLayoutAlign=\"center srart\">\n        <label fxFlexFill fxLayout=\"row\" class=\"primary-300-fg pb-8 ml-24\"><span #isPenaltyFromDueDate translate>Is Penalty From Due Date</span>\n            <span>*</span></label>\n        <mat-radio-group class=\"grey-500-fg text-semibold\" aria-label=\"Select an option\" fxFlexFill fxLayout=\"row\"\n          formControlName=\"isPenaltyFromDueDate\">\n          <mat-radio-button class=\"ml-24\" *ngFor=\"let radio of YesOrNo\" [value]=\"radio.value\">\n            {{radio.label | translate}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <mat-error fxFlexFill fxLayout=\"row\" class=\"ml-16 pt-4 font-size-12\">\n          <app-validation [labelName]=\"isPenaltyFromDueDate.innerText\"\n            [validationControl]=\"lateFeeRuleForm.controls.isPenaltyFromDueDate\" [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </div>\n\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"py-16\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closePanel()\" translate>\n        {{'Cancel' | translate}}\n      </button>\n      <button [disabled]=\"disbleSubmitBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{(isUpdate ? 'Update':'Create') | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL2xhdGUtZmVlLXJ1bGVzL2xhdGUtZmVlLXJ1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LateFeeRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateFeeRulesComponent", function() { return LateFeeRulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_configuration_finance_api_late_fee_rules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/configuration/finance/api/late-fee-rules.service */ "./src/app/service/configuration/finance/api/late-fee-rules.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/yes-no-view */ "./src/app/models/yes-no-view.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var LateFeeRulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LateFeeRulesComponent, _super);
    function LateFeeRulesComponent(commonService, lateFeeRulesService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.lateFeeRulesService = lateFeeRulesService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.currentComponent = 'LateFeeRulesComponent';
        _this.custRowsPerPageOptions = [];
        _this.isUpdate = false;
        _this.lateFeePenaltyTypes = [];
        _this.YesOrNo = app_models_yes_no_view__WEBPACK_IMPORTED_MODULE_8__["YesNo"].values;
        _this.disbleSubmitBtn = false;
        _this.errorsList = [];
        _this.isPenaltyExist = false;
        _this.lateFeeRuleIds = [];
        _this.lateFeeRuleFilterView = {
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DEFAULT_SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
        return _this;
    }
    LateFeeRulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
           * table columns
           */
        this.cols = [
            { field: 'delayFromDayCount', header: 'Payment Delay From(Days)', sort: true },
            { field: 'delayToDayCount', header: 'Payment Delay To(Days)', sort: true },
            { field: 'lateFeePenaltyTypeName', header: 'Penalty Type', sort: true },
            { field: 'penaltyAmount', header: 'Penalty Amount', sort: true },
            { field: 'isPenaltyFromDueDate', header: 'Is Penalty From Due Date', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        /**
           * intializes formGroup for TestType
           */
        this.lateFeeRuleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            delayFromDayCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(365), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            delayToDayCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(365), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            lateFeePenaltyTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            penaltyAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            isPenaltyFromDueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.lateFeeRuleFilterView,
            tablename: 'Late Fee Rules',
            componentName: this.currentComponent,
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.lateFeeRuleFilterView = modelTableComponent;
        }
        if (this.getTokenParam('_as')) {
            this.fetchTableData();
        }
        else {
            setTimeout(function () {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
        }
        this.fetchLateFeePenaltyTypes();
    };
    LateFeeRulesComponent.prototype.getTableData = function (lateFeeRuleFilterView) {
        this.lateFeeRuleFilterView = lateFeeRuleFilterView;
        this.fetchTableData();
    };
    LateFeeRulesComponent.prototype.fetchTableData = function () {
        var _this = this;
        this.lateFeeRulesService.getAllDetails(this.lateFeeRuleFilterView.delayFromDaysCount, this.lateFeeRuleFilterView.delayToDaysCount, this.lateFeeRuleFilterView.lateFeePenaltyTypeIds, this.lateFeeRuleFilterView.penaltyAmounts, this.lateFeeRuleFilterView.isPenaltyFromDueDates, this.lateFeeRuleFilterView.sortBy, this.lateFeeRuleFilterView.sortOrder, this.failedRecords, this.lateFeeRuleFilterView.pageNumber, this.lateFeeRuleFilterView.pageSize).subscribe(function (res) { _this.getAllLateFeeRules(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    LateFeeRulesComponent.prototype.getAllLateFeeRules = function (lateFeeRolesList) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (!lateFeeRolesList.lateFeeRuleListViewModel) {
            this.rows = [];
        }
        else {
            this.rows = lateFeeRolesList.lateFeeRuleListViewModel.list;
            this.totalItems = lateFeeRolesList.lateFeeRuleListViewModel.totalItems;
        }
        var testoperations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_ICON
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_ICON
            },
        ];
        this.rows.forEach(function (e) {
            e.penaltyAmount = _this.getFormattedCurrency(e.penaltyAmount);
            e.operations = testoperations;
            e.isPenaltyFromDueDate = (e.isPenaltyFromDueDate === 1) ? app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES : ((e.isPenaltyFromDueDate === 0) ? app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO : null);
        });
        if (lateFeeRolesList.lateFeeRuleListViewModel) {
            this.lateFeeRuleFilterView.pageNumber = lateFeeRolesList.lateFeeRuleListViewModel.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.lateFeeRuleFilterView,
            rows: this.rows,
            tablename: 'Late Fee Rules',
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
                    name: this.addLateFeeRuleTemplate,
                    btnName: 'add'
                }, infoButton: {
                    required: true,
                    text: 'Late Fee Rules'
                }
            },
            filtersList: lateFeeRolesList.filters
        };
    };
    LateFeeRulesComponent.prototype.fetchLateFeePenaltyTypes = function () {
        var _this = this;
        this.lateFeePenaltyTypes = [];
        this.lateFeeRulesService.getLateFeePenaltyTypes()
            .subscribe(function (data) {
            return data.forEach(function (element) {
                return _this.lateFeePenaltyTypes.push({ label: element.name, value: element.id });
            });
        });
    };
    LateFeeRulesComponent.prototype.addRow = function () {
        var _this = this;
        this.lateFeeRulesService.isExistLateFeeCategeory().subscribe(function (res) {
            if (res.statusCode !== http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                _this.closeAddPanel = true;
                _this.openSnackBar(res.messages.ResultMessage);
            }
        });
        this.isValidate = false;
        this.lateFeeRuleForm.reset();
        this.userLateFeeRuleForm.resetForm();
        this.closeAddPanel = false;
        this.isUpdate = false;
        this.disbleSubmitBtn = false;
    };
    /**
      * close the panel and initialize form on close
      */
    LateFeeRulesComponent.prototype.closePanel = function () {
        this.closeAddPanel = true;
        this.isValidate = false;
        this.lateFeeRuleForm.reset();
        this.userLateFeeRuleForm.resetForm();
    };
    /**
      * Api call for Add or updating the latefeerule based on condition
      * @param lateFeeView
      */
    LateFeeRulesComponent.prototype.onSubmitLateFeeRule = function (lateFeeView) {
        var _this = this;
        this.isValidate = true;
        if (lateFeeView.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            if (lateFeeView.value.id == null) {
                this.lateFeeViewModel = lateFeeView.value;
                this.lateFeeRulesService.createLateFeeRule(this.lateFeeViewModel).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.disbleSubmitBtn = false;
                    _this.errorResponse(error);
                });
            }
            else {
                this.lateFeeView = lateFeeView.value;
                this.lateFeeRulesService.updateLateFeeRule(this.lateFeeView).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
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
    LateFeeRulesComponent.prototype.addUpdateResponce = function (testTypeView) {
        this.disbleSubmitBtn = false;
        this.openSnackBar(testTypeView.messages.ResultMessage);
        if (testTypeView.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
            this.closeAddPanel = true;
            this.fetchTableData();
            this.isPenaltyExist = false;
        }
        else {
            this.closeAddPanel = false;
        }
    };
    LateFeeRulesComponent.prototype.lateFeePenaltyTypeChange = function (data) {
        var lateFeeType = this.lateFeePenaltyTypes.filter(function (x) { return x.value === data.value; });
        if (lateFeeType[0].label.toLowerCase() === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FIXED.toLowerCase()) {
            this.isPenaltyExist = false;
            this.lateFeeRuleForm.get('isPenaltyFromDueDate').clearValidators();
            this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].updateValueAndValidity();
            this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].setValue(null);
        }
        else {
            this.isPenaltyExist = true;
            this.lateFeeRuleForm.get('isPenaltyFromDueDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].updateValueAndValidity();
        }
    };
    LateFeeRulesComponent.prototype.onTableSelect = function (data) {
        var _this = this;
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    var lateFeeRuleIds = [data.clickedRow.id];
                    _this.deleteLateFeeRules(lateFeeRuleIds, false);
                }
            });
        }
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.isUpdate = true;
            this.closeAddPanel = false;
            this.lateFeeRulesService.lateFeeDetails(data.clickedRow.id).subscribe(function (res) {
                _this.lateFeeRuleForm.patchValue(res.lateFeeView);
                res.lateFeeView.isPenaltyFromDueDate == null ? _this.isPenaltyExist = false : _this.isPenaltyExist = true;
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    /**
        * Deleteting the testtypes
        * @param testTypeIds
        * @param isMultiSelect
        */
    LateFeeRulesComponent.prototype.deleteLateFeeRules = function (testTypeIds, isMultiSelect) {
        var _this = this;
        if (testTypeIds.length > 0) {
            this.lateFeeRulesService.deleteAll(testTypeIds).subscribe(function (res) {
                if (res.statusCode = http_status_codes__WEBPACK_IMPORTED_MODULE_7__["OK"]) {
                    _this.openSnackBar(res.messages.ResultMessage);
                }
                _this.fetchTableData();
            }, function (error) {
                if (isMultiSelect && error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                    _this.failedRecords = (error.error.failedRecords);
                }
                _this.errorResponse(error);
                _this.fetchTableData();
            });
        }
    };
    /**
     * warns on delete then call deleteLateFeeRules method on yes
     */
    LateFeeRulesComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_MULTI_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                _this.deleteLateFeeRules(_this.lateFeeRuleIds, true);
            }
        });
    };
    LateFeeRulesComponent.prototype.selectedRows = function (data) {
        this.lateFeeRuleIds = [];
        for (var index = 0; index < data.length; index++) {
            this.lateFeeRuleIds.push(data[index].id);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addLateFeeRuleTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LateFeeRulesComponent.prototype, "addLateFeeRuleTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userLateFeeRuleForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LateFeeRulesComponent.prototype, "userLateFeeRuleForm", void 0);
    LateFeeRulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-late-fee-rules',
            template: __webpack_require__(/*! ./late-fee-rules.component.html */ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.html"),
            styles: [__webpack_require__(/*! ./late-fee-rules.component.scss */ "./src/app/modules/configuration/finance/late-fee-rules/late-fee-rules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], app_service_configuration_finance_api_late_fee_rules_service__WEBPACK_IMPORTED_MODULE_5__["LateFeeRulesService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], LateFeeRulesComponent);
    return LateFeeRulesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 py-20\">\n  <div class=\"p-12 font-size-18 text-uppercase\" translate>Manage Tranche Fees</div>\n  <form [formGroup]=\"manageFeeTranchesForm\" #userManageFeeTranchesForm=\"ngForm\">\n    <div class=\"mat-elevation-z8 radius-20 simple-table-container\" fxLayout=\"column\">\n      <div fxFlexFill fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" fxLayout=\"column\" class=\"px-16 pt-20\">\n\n        <mat-form-field *ngIf=\"isSchoolBoard\" fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"20\"\n          fxFlex=\"100\">\n          <mat-label translate #schoolBoard>School Board</mat-label>\n          <mat-select required formControlName=\"schoolBoardId\" (selectionChange)=\"fetchClasses($event.value)\">\n            <mat-option *ngFor=\"let schoolBoard of schoolBoards\" [value]=\"schoolBoard.value\">\n              {{schoolBoard.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"schoolBoard.innerText\"\n              [validationControl]=\"manageFeeTranchesForm.controls.schoolBoardId\" [doValidate]=\"isValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"px-sm-20\">\n          <mat-label translate #feeType>Fee Type</mat-label>\n          <mat-select required formControlName=\"feeTypeId\" (selectionChange)=\"getAllFeeTranches($event.value)\">\n            <mat-option *ngFor=\"let feeType of feeTypes\" [value]=\"feeType.value\">\n              {{ feeType.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"feeType.innerText\"\n              [validationControl]=\"manageFeeTranchesForm.controls.feeTypeId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"px-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select formControlName=\"classId\" (selectionChange)=\"classSelect($event.value)\">\n            <mat-option *ngIf=\"classes?.length\"></mat-option>\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"class.innerText\" [validationControl]=\"manageFeeTranchesForm.controls.classId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxFlexFill fxLayout=\"column\" fxFlex.gt-xs=\"55\" fxFlex=\"100\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-24\">\n            <button *ngIf=\"isAddButton\" type=\"button\" [disabled]=\"isDisabled\" mat-raised-button\n              class=\"text-uppercase mx-8\" color=\"accent\" (click)=\"addClick()\">{{'Add' | translate}}</button>\n            <button *ngIf=\"isUpdateButton\" type=\"button\" [disabled]=\"isDisabled\" mat-raised-button\n              class=\"text-uppercase mr-8\" color=\"primary\" (click)=\"editClick()\">{{'Edit' | translate}}</button>\n            <button mat-button type=\"button\" (click)=\"getHelpText('Manage Tranche Fees')\" [disabled]=\"isDisabled\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n      <div *ngIf=\"isErrorMessage\" class=\"p-sm-40 text-center\">{{errorMessage|translate}}</div>\n\n\n\n      <!-- ADD -->\n      <h1 *ngIf=\"isCreate || isEdit\" class=\"mb-0 pl-32 pt-24\">{{feeTypeName}}</h1>\n      <div *ngIf=\"isInvoiceError\" class=\"pl-32 pt-12 message-box error\">{{invoiceError}}</div>\n      <div class=\"px-20 pb-20\" fxLayout=\"row wrap\" *ngIf=\"isCreate || isEdit\">\n        <fuse-widget formArrayName=\"feeTypeTranches\" class=\"widget\" fxLayout=\"column\" fxFlex.gt-xs=\"50\" fxFlex=\"100\"\n          *ngFor=\"let control of manageFeeTranchesForm.controls['feeTypeTranches']?.controls;let i=index;\">\n          <div [formGroupName]=\"i\" class=\"fuse-widget-front mat-elevation-z\">\n            <div>\n              <div class=\"p-20 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"h2\">{{control?.controls['feeTypeTrancheName']?.value}}</div>\n              </div>\n            </div>\n            <div class=\"h-300 scroll-y-auto\">\n              <div class=\"px-20\" fxLayout=\"row\" formArrayName=\"schoolFeeAssignments\"\n                *ngFor=\"let feeTranchControl of control?.controls['schoolFeeAssignments']?.controls; let j=index\">\n                <div [formGroupName]=\"j\" fxLayoutAlign=\"space-between center\" class=\"w-100-p feetype-Error\">\n                  <div class=\"h3 break-word pr-12\">{{feeTranchControl?.controls['shortName']?.value}}</div>\n                  <mat-form-field fxLayout=\"column\" fxFlex=\"0 1 auto\">\n                    <input matInput formControlName=\"feeAmount\" (keypress)=\"numberOnly($event)\"\n                      [value]=\"feeTranchControl?.controls['feeAmount']?.value\">\n                  </mat-form-field>\n                  <mat-error>\n                    <app-validation [labelName]=\"'Amount'|translate\"\n                      [validationControl]=\"feeTranchControl?.controls?.feeAmount\" [doValidate]=\"isValidate\">\n                    </app-validation>\n                  </mat-error>\n                </div>\n              </div>\n            </div>\n            <div class=\"py-16 px-20 font-weight-600 font-size-18 feetype-Error\" fxLayout=\"row\"\n              fxLayoutAlign=\"space-between center\">\n              <div>Total Amount</div>\n              <mat-form-field fxLayout=\"column\" fxFlex=\"0 1 auto\">\n                <input matInput formControlName=\"feeAmount\" (keypress)=\"numberOnly($event)\" [disable]=\"'true'\" [value]=\"getTotalAmount(control)\">\n              </mat-form-field>\n              <mat-error class=\"mt-12\">\n                <app-validation [labelName]=\"'Total Amount'|translate\"\n                  [validationControl]=\"control?.controls?.feeAmount\" [doValidate]=\"isValidate\">\n                </app-validation>\n              </mat-error>\n            </div>\n          </div>\n        </fuse-widget>\n      </div>\n      <!-- ADD -->\n\n\n      <h1 *ngIf=\"isDisplay\" class=\"mb-0 pl-16 pt-24\">{{feeTypeName}}</h1>\n      <div class=\"p-20\" fxLayout=\"row wrap\" *ngIf=\"isDisplay\">\n        <fuse-widget class=\"widget\" fxLayout=\"column\" fxFlex.gt-xs=\"50\" fxFlex=\"100\"\n          *ngFor=\"let feeTypeTranche of feeTypeTranches;\">\n          <div class=\"fuse-widget-front mat-elevation-z\">\n            <div class=\"p-20 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div class=\"h2\">{{feeTypeTranche.feeTypeTrancheName}} </div>\n              <button type=\"button\" (click)=delete(feeTypeTranche.schoolFeeId) mat-icon-button>\n                <mat-icon class=\"red-fg\">delete</mat-icon>\n              </button>\n            </div>\n            <div class=\"h-300 scroll-y-auto\">\n              <div class=\"px-20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n                *ngFor=\"let schoolFeeAssignment of feeTypeTranche.schoolFeeAssignments;\">\n                <div class=\"h3 break-word pr-12\">{{schoolFeeAssignment.shortName}}</div>\n                <mat-form-field fxLayout=\"column\" fxFlex=\"0 1 auto\">\n                  <input matInput value={{schoolFeeAssignment.feeAmount}} [disabled]=\"true\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"py-16 px-20 font-weight-600 font-size-18\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div>Total Amount</div>\n              <div fxLayout=\"column\" fxFlex=\"0 1 auto\" class=\"border-top text-right\">{{feeTypeTranche.feeAmount}}</div>\n            </div>\n          </div>\n        </fuse-widget>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-16 m-16\">\n        <button *ngIf=\"isCreate || isEdit\" class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n          (click)=\"closePanel()\">{{'Cancel' | translate}}</button>\n        <button [disabled]=\"disbleSubmitBtn\" *ngIf=\"isCreate\" mat-raised-button type=\"submit\" color=\"accent\"\n          class=\"text-uppercase mr-12\" mat-button\n          (click)=\"onSubmitManageFeeTranches(manageFeeTranchesForm)\">{{'Create' | translate}}</button>\n        <button [disabled]=\"disbleSubmitBtn\" *ngIf=\"isEdit\" mat-raised-button type=\"submit\" color=\"accent\"\n          class=\"text-uppercase mr-12\" mat-button\n          (click)=\"onUpdateManageFees(manageFeeTranchesForm)\">{{'Update' | translate}}</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feetype-Error {\n  position: relative; }\n  .feetype-Error .mat-error {\n    position: absolute;\n    right: 0px;\n    top: 48px;\n    font-size: 13px; }\n  .scroll-y-auto {\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL21hbmFnZS1mZWUtdHJhbmNoZXMvbWFuYWdlLWZlZS10cmFuY2hlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1Esa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZSxFQUFBO0VBR3ZCO0VBQWUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vZmluYW5jZS9tYW5hZ2UtZmVlLXRyYW5jaGVzL21hbmFnZS1mZWUtdHJhbmNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVldHlwZS1FcnJvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm1hdC1lcnJvcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59XG4uc2Nyb2xsLXktYXV0b3tvdmVyZmxvdy15OiBhdXRvfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ManageFeeTranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFeeTranchesComponent", function() { return ManageFeeTranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-type-tranches.service */ "./src/app/service/configuration/finance/api/manage-fee-type-tranches.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-configuration.service */ "./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts");











var ManageFeeTranchesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageFeeTranchesComponent, _super);
    function ManageFeeTranchesComponent(_fb, commonService, classSectionService, manageFeeTypeTranchesService, dialog, manageFeeConfigurationService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.classSectionService = classSectionService;
        _this.manageFeeTypeTranchesService = manageFeeTypeTranchesService;
        _this.dialog = dialog;
        _this.manageFeeConfigurationService = manageFeeConfigurationService;
        _this.snackBar = snackBar;
        _this.schoolBoards = [];
        _this.classes = [];
        _this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SELECT_SCHOOLBOARD_OR_CLASSID_AND_FEETYPE;
        _this.isErrorMessage = true;
        _this.feeTypes = [];
        _this.schoolFeeTranches = [];
        return _this;
    }
    ManageFeeTranchesComponent.prototype.ngOnInit = function () {
        this.feeTypeTranchesDataView = {
            feeTypeId: 0,
            classId: 0,
            schoolBoardId: 0
        };
        this.manageFeeTranchesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: true }),
            feeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            feeTypeTranches: this._fb.array([]),
        });
        this.fetchSchoolBoards();
        this.fetchFeeTypes();
    };
    ManageFeeTranchesComponent.prototype.fetchSchoolBoards = function () {
        var _this = this;
        this.schoolBoards = [];
        this.isSchoolBoard = true;
        this.commonService.schoolAcademicBoards()
            .subscribe(function (res) {
            _this.schoolBoardDetails(res);
        });
    };
    ManageFeeTranchesComponent.prototype.schoolBoardDetails = function (data) {
        var _this = this;
        if (data.listViews) {
            data.listViews.forEach(function (element) {
                _this.schoolBoards.push({
                    label: element.name,
                    value: element.id
                });
            });
        }
        if (!this.schoolBoards.length) {
            this.isSchoolBoard = false;
            this.fetchClasses(null);
            this.manageFeeTranchesForm.get('schoolBoardId').clearValidators();
            this.manageFeeTranchesForm.controls['schoolBoardId'].updateValueAndValidity();
        }
        else {
            this.manageFeeTranchesForm.controls['feeTypeId'].disable();
            this.setDefaultBoard();
        }
    };
    ManageFeeTranchesComponent.prototype.fetchClasses = function (data) {
        var _this = this;
        this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SELECT_SCHOOLBOARD_OR_CLASSID_AND_FEETYPE;
        this.manageFeeTranchesForm.controls['feeTypeId'].enable();
        this.manageFeeTranchesForm.controls['classId'].disable();
        this.classes = [];
        this.schoolBoardId = data;
        this.classSectionService.schoolAcademicClasses(data)
            .subscribe(function (res) {
            if (res.listViews) {
                res.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.manageFeeTranchesForm.get('classId').setValue('');
        this.manageFeeTranchesForm.get('feeTypeId').setValue('');
        this.classId = '';
        this.feeTypeTranches = [];
        this.isDisplay = false;
        this.isErrorMessage = true;
        this.isUpdateButton = false;
        this.isAddButton = false;
    };
    ManageFeeTranchesComponent.prototype.fetchFeeTypes = function () {
        var _this = this;
        this.manageFeeTypeTranchesService.feeTypeTranches().subscribe(function (res) {
            if (res.commonViewModels) {
                res.commonViewModels.forEach(function (element) {
                    _this.feeTypes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        });
    };
    ManageFeeTranchesComponent.prototype.classSelect = function (classId) {
        var _this = this;
        this.classId = classId;
        this.manageFeeTypeTranchesService.getSchoolFeeTranches(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(function (res) {
            _this.getFeeTranchDetails(res);
        });
    };
    ManageFeeTranchesComponent.prototype.getAllFeeTranches = function (feeTypeId) {
        var _this = this;
        this.isInvoiceError = false;
        this.feeTypeId = feeTypeId;
        this.manageFeeTranchesForm.controls['classId'].enable();
        this.manageFeeTypeTranchesService.getSchoolFeeTranches(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(function (res) {
            _this.getFeeTranchDetails(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ManageFeeTranchesComponent.prototype.getFeeTranchDetails = function (data) {
        var _this = this;
        this.invoiceError = '';
        this.isDisabled = false;
        this.feeTypeTranches = [];
        this.feeTypeName = '';
        if (data.schoolFeeTranches) {
            data.schoolFeeTranches.feeTypeTranches.forEach(function (x) {
                x.feeAmount = _this.getFormattedCurrency(x.feeAmount);
                x.schoolFeeAssignments.forEach(function (element) {
                    element.feeAmount = _this.getFormattedCurrency(element.feeAmount);
                });
            });
            this.feeTypeName = data.schoolFeeTranches.feeTypeName;
            this.feeTypeTranches = data.schoolFeeTranches.feeTypeTranches;
        }
        if (!this.feeTypeTranches.length) {
            this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].MANAGE_FEE_TRANCH_ADD_ERROR;
            this.isAddButton = true;
            this.isErrorMessage = true;
            this.isUpdateButton = false;
            this.isDisplay = false;
        }
        else {
            this.isDisplay = true;
            this.isCreate = false;
            this.isErrorMessage = false;
            this.isUpdateButton = true;
            this.isAddButton = false;
        }
    };
    ManageFeeTranchesComponent.prototype.addClick = function () {
        var _this = this;
        this.isValidate = false;
        this.isErrorMessage = false;
        this.isCreate = true;
        this.isEdit = false;
        this.disableControls();
        this.isDisabled = true;
        this.manageFeeTypeTranchesService.getTranchesTermsByFeeType(this.feeTypeId).subscribe(function (res) {
            _this.getAllTranchDetails(res);
        });
    };
    ManageFeeTranchesComponent.prototype.editClick = function () {
        var _this = this;
        this.feeTypeName = '';
        this.isValidate = false;
        this.isEdit = true;
        this.isCreate = false;
        this.disableControls();
        this.isDisabled = true;
        this.manageFeeTypeTranchesService.getAllSchoolFeeTrancheTerms(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(function (res) {
            _this.getAllTranchDetails(res);
        });
    };
    ManageFeeTranchesComponent.prototype.getAllTranchDetails = function (data) {
        var _this = this;
        this.isInvoiceError = false;
        this.invoiceError = '';
        this.removeItems();
        this.isErrorMessage = false;
        this.schoolFeeTranches = [];
        this.schoolFeeTranches = data.schoolFeeTranches.feeTypeTranches;
        if (this.schoolFeeTranches) {
            this.feeTypeName = data.schoolFeeTranches.feeTypeName;
        }
        this.schoolFeeTranches.forEach(function (element, i) {
            if (element.isInvoiceGeneratedForFeeType) {
                _this.isInvoiceError = true;
                _this.invoiceError = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INVOICE_ERROR;
            }
            var control = _this.manageFeeTranchesForm.get('feeTypeTranches');
            if (element.schoolFeeAssignments.length) {
                control.push(_this.setFeeTranchList(element));
            }
            else {
                control.push(_this.setFeeTranchList(element, false));
            }
        });
        this.isDisplay = false;
    };
    ManageFeeTranchesComponent.prototype.setFeeTranchList = function (data, setDisable) {
        if (setDisable === void 0) { setDisable = true; }
        this.feeTranchForm = this._fb.group({
            schoolFeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.schoolFeeId),
            feeTypeTranchesId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.feeTypeTranchesId),
            feeTypeTrancheName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.feeTypeTrancheName),
            feeAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: data.feeAmount, disabled: setDisable || data.isInvoiceGeneratedForFeeType }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(99999999.99)]),
            schoolFeeAssignments: this.setSchoolFeeAssignments(data),
        });
        return this.feeTranchForm;
    };
    ManageFeeTranchesComponent.prototype.setSchoolFeeAssignments = function (parent) {
        var _this = this;
        this.formArrayList = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        parent.schoolFeeAssignments.forEach(function (child) {
            if (child.isInvoiceGeneratedForFeeTerm) {
                _this.invoiceError = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INVOICE_ERROR;
                _this.isInvoiceError = true;
            }
            _this.formArrayList.push(_this._fb.group({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](child.id),
                shortName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](child.shortName),
                displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](child.displayName),
                feeTypeTranchesId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](child.feeTypeTranchesId),
                feeTypesForFeeTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](child.feeTypesForFeeTermId),
                feeAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: child.feeAmount, disabled: child.isInvoiceGeneratedForFeeTerm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9999999.99)]),
            }));
        });
        return this.formArrayList;
    };
    ManageFeeTranchesComponent.prototype.getTotalAmount = function (control) {
        var sum = null;
        if (control.getRawValue().schoolFeeAssignments.length && control.valid) {
            control.getRawValue().schoolFeeAssignments.forEach(function (element) {
                if (element.feeAmount !== null && element.feeAmount !== '') {
                    sum = parseFloat((sum + Number(element.feeAmount)).toFixed(2));
                }
            });
        }
        else {
            sum = control.getRawValue().feeAmount;
        }
        var sumValue = sum;
        control.controls['feeAmount'].setValue(sumValue);
        return sumValue;
    };
    ManageFeeTranchesComponent.prototype.manageFeTrancheData = function (manageFeesForm) {
        manageFeesForm.feeTypeTranches.forEach(function (element) {
            element.schoolFeeAssignments = element.schoolFeeAssignments.filter(function (child) {
                return child.feeAmount >= 0 && child.feeAmount != null && child.feeAmount !== '';
            });
        });
        manageFeesForm.feeTypeTranches = manageFeesForm.feeTypeTranches.filter(function (element) {
            return element.feeAmount >= 0 && element.feeAmount !== null && element.feeAmount !== '';
        });
        return manageFeesForm;
    };
    ManageFeeTranchesComponent.prototype.onSubmitManageFeeTranches = function (ManageFeeTrancheForm) {
        var _this = this;
        var data = ManageFeeTrancheForm.getRawValue();
        this.isValidate = true;
        this.isValidate = true;
        if (ManageFeeTrancheForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            this.feeTypeTranchesDataView = this.manageFeTrancheData(data);
            if (this.feeTypeTranchesDataView.feeTypeTranches.length) {
                this.feeTypeTranchesDataView.feeTypeId = this.feeTypeId;
                this.feeTypeTranchesDataView.classId = this.classId;
                this.feeTypeTranchesDataView.schoolBoardId = this.schoolBoardId;
                this.manageFeeTypeTranchesService.schoolFeeTrancheConfiguration(this.feeTypeTranchesDataView).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.errorResponse(error);
                });
                this.disbleSubmitBtn = false;
            }
            else {
                this.disbleSubmitBtn = false;
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].FEE_AMOUNT_ERROR, true);
            }
        }
    };
    ManageFeeTranchesComponent.prototype.onUpdateManageFees = function (manageFeeTranchesForm) {
        var _this = this;
        this.isValidate = true;
        var data = manageFeeTranchesForm.getRawValue();
        if (manageFeeTranchesForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            this.schoolFeeTranchView = this.manageFeTrancheData(data);
            this.schoolFeeTranchView.feeTypeId = this.feeTypeId;
            this.schoolFeeTranchView.classId = this.classId ? this.classId : null;
            this.schoolFeeTranchView.schoolBoardId = this.schoolBoardId;
            if (this.schoolFeeTranchView.feeTypeTranches.length === 0) {
                this.manageFeeTypeTranchesService.deleteAllSchoolFeeTranches(this.schoolFeeTranchView.schoolBoardId, this.schoolFeeTranchView.classId, this.schoolFeeTranchView.feeTypeId)
                    .subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.manageFeeTypeTranchesService.updateSchoolFeeTranchesConfiguration(this.schoolFeeTranchView).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            this.disbleSubmitBtn = false;
        }
    };
    ManageFeeTranchesComponent.prototype.addUpdateResponce = function (manageView) {
        this.openSnackBar(manageView.messages.ResultMessage);
        if (manageView.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
            this.disbleSubmitBtn = false;
            this.isAddButton = false;
            this.getAllFeeTranches(this.feeTypeId);
            this.isCreate = false;
            this.isEdit = false;
            this.enableControls();
            this.isDisabled = false;
        }
    };
    ManageFeeTranchesComponent.prototype.delete = function (id) {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES);
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.manageFeeConfigurationService.deleteSchoolFee(id).subscribe(function (res) {
                    if (res.statusCode = http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                        _this.openSnackBar(res.messages.ResultMessage);
                    }
                    _this.getAllFeeTranches(_this.feeTypeId);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    ManageFeeTranchesComponent.prototype.closePanel = function () {
        this.getAllFeeTranches(this.feeTypeId);
        this.isCreate = false;
        this.isEdit = false;
        this.enableControls();
        this.isDisabled = false;
    };
    ManageFeeTranchesComponent.prototype.disableControls = function () {
        this.manageFeeTranchesForm.controls['classId'].disable({ onlySelf: true });
        this.manageFeeTranchesForm.controls['schoolBoardId'].disable({ onlySelf: true });
        this.manageFeeTranchesForm.controls['feeTypeId'].disable({ onlySelf: true });
    };
    ManageFeeTranchesComponent.prototype.enableControls = function () {
        this.manageFeeTranchesForm.controls['classId'].enable({ onlySelf: true });
        this.manageFeeTranchesForm.controls['schoolBoardId'].enable({ onlySelf: true });
        this.manageFeeTranchesForm.controls['feeTypeId'].enable({ onlySelf: true });
    };
    ManageFeeTranchesComponent.prototype.removeItems = function () {
        var control = this.manageFeeTranchesForm.controls['feeTypeTranches'];
        for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
    };
    ManageFeeTranchesComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('manageFeeTranchesForm', 'schoolBoardId', this.schoolBoards[0].value);
        this.fetchClasses(this.schoolBoards[0].value);
    };
    ManageFeeTranchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-fee-tranches',
            template: __webpack_require__(/*! ./manage-fee-tranches.component.html */ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.html"),
            styles: [__webpack_require__(/*! ./manage-fee-tranches.component.scss */ "./src/app/modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_4__["ClassSectionService"],
            app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_6__["ManageFeeTypeTranchesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_10__["ManageFeeConfigurationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], ManageFeeTranchesComponent);
    return ManageFeeTranchesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fees/manage-fees.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 py-20\">\n  <div class=\"p-12 font-size-18 text-uppercase\" id=\"manage-fee-header\" translate>Manage Fee</div>\n  <div class=\"mat-elevation-z8 radius-20 simple-table-container\">\n    <form [formGroup]=\"manageFeesForm\" #userManageFeesForm=\"ngForm\" fxLayout=\"column\">\n      <div fxFlexFill fxLayoutAlign=\"start center\" fxLayout.gt-xs=\"row\" fxLayout=\"column\" class=\"px-16 pt-20\">\n        <mat-form-field *ngIf=\"isSchoolBoard\" fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"20\"\n          fxFlex=\"100\">\n          <mat-label translate #schoolBoard>School Board</mat-label>\n          <mat-select required formControlName=\"schoolBoardId\" (selectionChange)=\"fetchClasses($event.value)\">\n            <mat-option *ngFor=\"let schoolBoard of schoolBoards\" [value]=\"schoolBoard.value\">\n              {{schoolBoard.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"schoolBoard.innerText\"\n              [validationControl]=\"manageFeesForm.controls.schoolBoardId\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"25\" fxFlex=\"100\"\n          class=\"px-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select required formControlName=\"classId\" (selectionChange)=\"getAll($event.value)\">\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"class.innerText\" [validationControl]=\"manageFeesForm.controls.classId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-24\">\n            <button *ngIf=\"isAddButton\" type=\"button\" [disabled]=\"isDisabled\" mat-raised-button\n              class=\"text-uppercase mx-8\" color=\"accent\" (click)=\"addClick()\"><span translate>Add</span></button>\n            <button *ngIf=\"isUpdateButton\" type=\"button\" [disabled]=\"isDisabled\" (click)=\"cloneClick()\"\n              mat-raised-button class=\"text-uppercase mr-8\" color=\"primary\">\n              <mat-icon class=\"mr-4 font-size-16 pt-4\">filter_none</mat-icon><span translate>Clone</span>\n            </button>\n            <button *ngIf=\"isUpdateButton\" type=\"button\" [disabled]=\"isDisabled\" mat-raised-button\n              class=\"text-uppercase mr-8\" color=\"accent\" (click)=\"editClick()\"><span translate>Edit</span></button>\n            <button (click)=\"getHelpText('Manage Fees')\" mat-button type=\"button\">\n              <mat-icon class=\"grey-600-fg\">info</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n      <div *ngIf=\"isErrorMessage\" class=\"p-sm-40 text-center\">{{errorMessage|translate}}</div>\n\n      <!--ADD-->\n      <app-custom-dropdown *ngIf=\"isFeeType\" class=\"mx-24 mt-24 w-50-p\" formControlName=\"feeTypeId\" appearance=\"outline\"\n        fxLayout=\"column\" [dropDownConf]=\"feeTypeMulticheck\" (selectedData)=\"onSelectFeeType($event)\"\n        [errorCheck]=\"manageFeesForm.controls.feeTypeId\" ngDefaultControl>\n      </app-custom-dropdown>\n      <div *ngIf=\"isInvoiceError\" class=\"pl-32 pt-12 message-box error\" translate>{{invoiceError}}</div>\n      <div class=\"p-20\" fxLayout=\"row wrap\" *ngIf=\"!isDisplay\">\n        <fuse-widget formArrayName=\"schoolFees\" class=\"widget manage-fee\" fxLayout=\"column\" fxFlex.gt-xs=\"50\"\n          fxFlex=\"100\" *ngFor=\"let control of manageFeesForm.controls['schoolFees']?.controls;let i=index;\">\n          <div [formGroupName]=\"i\" class=\"fuse-widget-front mat-elevation-z\">\n            <div>\n              <div class=\"p-20 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"h2\">{{control?.controls['feeTypeName']?.value}}</div>\n              </div>\n            </div>\n            <!--Content-->\n            <div class=\"h-300 scroll-y-auto\">\n              <div class=\"px-20\" fxLayout=\"row\" formArrayName=\"schoolFeeAssignments\"\n                *ngFor=\"let feeTermControl of control?.controls['schoolFeeAssignments']?.controls; let j=index\">\n                <div [formGroupName]=\"j\" fxLayoutAlign=\"space-between center\" class=\"w-100-p feetype-Error\">\n                  <div class=\"h3 break-word pr-12\">{{feeTermControl?.controls['feeTermName']?.value}}</div>\n                  <mat-form-field fxFlexFill fxLayout=\"column\" fxFlex=\"30\">\n                    <input matInput formControlName=\"feeAmount\" (keypress)=\"numberOnly($event)\" [value]=\"feeTermControl?.controls['feeAmount']?.value\">\n                  </mat-form-field>\n                  <mat-error *ngIf=\"!feeTermControl?.controls?.feeAmount.valid && feeTermControl?.controls?.feeAmount.touched\">\n                    <app-validation [labelName]=\"'Amount'|translate\"\n                      [validationControl]=\"feeTermControl?.controls?.feeAmount\" [doValidate]=\"true\">\n                    </app-validation>\n                  </mat-error>\n                </div>\n              </div>\n            </div>\n            <!--Footer-->\n            <div class=\"py-16 px-20 font-weight-600 font-size-18 feetype-Error\" fxLayout=\"row\"\n              fxLayoutAlign=\"space-between center\">\n              <div>Total Amount</div>\n              <mat-form-field fxLayout=\"column\" fxFlex=\"0 1 auto\" class=\"mw-120\">\n                <input matInput formControlName=\"feeAmount\" (keypress)=\"numberOnly($event)\" [disable]=\"'true'\" [value]=\"getTotalAmount(control)\">\n              </mat-form-field>\n              <mat-error class=\"mt-12\">\n                <app-validation [labelName]=\"'Total Amount'|translate\"\n                  [validationControl]=\"control?.controls?.feeAmount\" [doValidate]=\"isValidate\">\n                </app-validation>\n              </mat-error>\n            </div>\n          </div>\n        </fuse-widget>\n      </div>\n      <!--ADD-->  \n\n      <!--display-->\n      <div class=\"p-20 g\" fxLayout=\"row wrap\"  *ngIf=\"isDisplay\">\n        <fuse-widget class=\"widget manage-fee\" fxLayout=\"column\" fxFlex.gt-xs=\"50\" fxFlex=\"100\"\n          *ngFor=\"let feeType of schoolFees;\">\n          <div id=\"feeType.schoolFeeId\" class=\"fuse-widget-front mat-elevation-z\">\n            <div class=\"p-20 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div class=\"h2\">{{feeType.name}} </div>\n              <button type=\"button\" (click)=delete(feeType.schoolFeeId) mat-icon-button>\n                <mat-icon class=\"red-fg\">delete</mat-icon>\n              </button>\n            </div>\n            <!--Content-->\n            <div class=\"h-300 scroll-y-auto\">\n              <div class=\"px-20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n                *ngFor=\"let feeTerm of feeType.schoolFeeAssignments;\">\n                <div class=\"h3 break-word pr-12\">{{feeTerm.shortName}}</div>\n                <mat-form-field fxFlexFill fxLayout=\"column\" fxFlex=\"30\">\n                  <input matInput value={{feeTerm.feeAmount}} [disabled]=\"true\">\n                </mat-form-field>\n              </div>\n            </div>\n            <!--Footer-->\n            <div class=\"py-16 px-20 font-weight-600 font-size-18\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div>Total Amount</div>\n              <div fxLayout=\"column\" fxFlex=\"0 1 auto\" class=\"border-top mw-120\">{{feeType.feeAmount}}</div>\n            </div>\n          </div>\n        </fuse-widget>\n      </div>\n      <!--display-->\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pb-16 m-16\">\n        <button *ngIf=\"isCreate || isEdit\" class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"\n          (click)=\"closePanel()\">{{'Cancel' | translate}}</button>\n        <button [disabled]=\"disbleSubmitBtn\" *ngIf=\"isCreate\" mat-raised-button type=\"submit\" color=\"accent\"\n          class=\"text-uppercase mr-12\" mat-button (click)=\"onSubmitManageFees(manageFeesForm)\">{{'Create' | translate}}</button>\n        <button [disabled]=\"disbleSubmitBtn\" *ngIf=\"isEdit\" mat-raised-button type=\"submit\" color=\"accent\"\n          class=\"text-uppercase mr-12\" mat-button (click)=\"onUpdateManageFees(manageFeesForm)\">{{'Update' | translate}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!--clone-->\n<ng-template #myTemplate>\n  <form [formGroup]=\"cloneManageFeesForm\" (ngSubmit)=\"onSubmitCloneManageFees(cloneManageFeesForm)\" fxLayout=\"column\">\n    <mat-form-field *ngIf=\"isSchoolBoard\" appearance=\"outline\" fxLayout=\"column\">\n      <mat-label translate #schoolBoard>School Board</mat-label>\n      <mat-select required placeholder=\"School Board\" formControlName=\"schoolBoardId\"\n        (selectionChange)=\"schoolBoardChange($event.value)\">\n        <mat-option *ngFor=\"let schoolBoard of schoolBoards\" [value]=\"schoolBoard.value\">\n          {{schoolBoard.label}}\n        </mat-option>\n      </mat-select>\n      <mat-error>\n        <app-validation [labelName]=\"schoolBoard.innerText\"\n          [validationControl]=\"cloneManageFeesForm.controls.schoolBoardId\" [doValidate]=\"true\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n    <app-custom-dropdown *ngIf=\"cloneClasses.length\" formControlName=\"classIds\" fxFlex=\"100\" fxLayout=\"column\"\n      appearance=\"outline\" [dropDownConf]=\"classMultiCheck\" [errorCheck]=\"cloneManageFeesForm.controls.classIds\"\n      ngDefaultControl>\n    </app-custom-dropdown>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pt-20\">\n      <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button type=\"button\" mat-raised-button class=\"mr-16\" type=\"button\" (click)=\"closeCloneDialog()\">{{'Cancel' | translate}}</button>\n          <button *ngIf=\"cloneClasses.length\" type=\"submit\" mat-raised-button color=\"accent\" translate>{{'Submit' | translate}}</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</ng-template>\n<!--clone-->"

/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fees/manage-fees.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feetype-Error {\n  position: relative; }\n  .feetype-Error .mat-error {\n    position: absolute;\n    right: 0px;\n    top: 48px;\n    font-size: 13px; }\n  .scroll-y-auto {\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL21hbmFnZS1mZWVzL21hbmFnZS1mZWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlLEVBQUE7RUFHdkI7RUFBZSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9maW5hbmNlL21hbmFnZS1mZWVzL21hbmFnZS1mZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAubWFuYWdlLWZlZXtcbi8vICAgICAubWF0LWZvcm0tZmllbGQsIC5tdy0xMjB7XG4vLyAgICAgICAgIG1heC13aWR0aDogMTIwcHggIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyB9XG4uZmVldHlwZS1FcnJvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm1hdC1lcnJvcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59XG4uc2Nyb2xsLXktYXV0b3tvdmVyZmxvdy15OiBhdXRvfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/configuration/finance/manage-fees/manage-fees.component.ts ***!
  \************************************************************************************/
/*! exports provided: ManageFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFeesComponent", function() { return ManageFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-configuration.service */ "./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");











var ManageFeesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageFeesComponent, _super);
    function ManageFeesComponent(cd, _fb, dialog, classSectionService, manageFeeConfigurationService, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.cd = cd;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.classSectionService = classSectionService;
        _this.manageFeeConfigurationService = manageFeeConfigurationService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.schoolFees = [];
        _this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SELECT_SCHOOLBOARD_OR_CLASSID;
        _this.isErrorMessage = true;
        _this.isValidate = false;
        _this.feeTypeIds = [];
        _this.isRequired = true;
        _this.cloneClasses = [];
        _this.isDisplay = false;
        _this.primaryArray = [];
        _this.secondaryArray = [];
        _this.disbleSubmitBtn = false;
        _this.invoiceError = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVOICE_ERROR;
        _this.selectedFeeTypes = [];
        return _this;
    }
    ManageFeesComponent.prototype.ngOnInit = function () {
        this.manageFeesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            feeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            schoolFees: this._fb.array([]),
        });
        this.cloneManageFeesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            classIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.fetchSchoolBoards();
        this.cloneSchoolFeeView = {
            sourceClassId: 0,
            sourceSchoolBoardId: 0,
            destinationClassIds: [],
            destinationSchoolBoardId: 0
        };
    };
    ManageFeesComponent.prototype.fetchSchoolBoards = function () {
        var _this = this;
        this.schoolBoards = [];
        this.isSchoolBoard = true;
        this.commonService.schoolAcademicBoards()
            .subscribe(function (res) {
            _this.schoolBoardDetails(res);
        });
    };
    ManageFeesComponent.prototype.schoolBoardDetails = function (data) {
        var _this = this;
        if (data.listViews) {
            data.listViews.forEach(function (element) {
                _this.schoolBoards.push({
                    label: element.name,
                    value: element.id
                });
            });
            this.setDefaultBoard();
        }
        if (!this.schoolBoards.length) {
            this.isSchoolBoard = false;
            this.fetchClasses(null);
            this.manageFeesForm.get('schoolBoardId').clearValidators();
            this.manageFeesForm.controls['schoolBoardId'].updateValueAndValidity();
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_CLASSES_FOR_THE_BOARD, true);
        }
    };
    ManageFeesComponent.prototype.fetchClasses = function (data) {
        var _this = this;
        this.classes = [];
        this.schoolBoardId = data;
        this.manageFeesForm.controls['classId'].enable();
        this.classSectionService.schoolAcademicClasses(data)
            .subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_CLASSES_FOR_THE_BOARD, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.manageFeesForm.get(['classId']).setValue('');
        this.schoolFees = [];
        this.isDisplay = false;
        this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SELECT_SCHOOLBOARD_OR_CLASSID;
        this.isErrorMessage = true;
        this.isUpdateButton = false;
        this.isAddButton = false;
    };
    ManageFeesComponent.prototype.fetchFeeTypes = function (schoolBoardId, classId) {
        var _this = this;
        this.feeTypes = [];
        this.manageFeeConfigurationService.getFeeTypesByClass(schoolBoardId, classId)
            .subscribe(function (res) {
            if (res.commonViewModels) {
                _this.feeTypes = [];
                res.commonViewModels.forEach(function (element) {
                    _this.feeTypes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        });
    };
    ManageFeesComponent.prototype.getAll = function (classId) {
        var _this = this;
        this.isInvoiceError = false;
        this.classId = classId;
        this.fetchFeeTypes(this.schoolBoardId, this.classId);
        this.manageFeeConfigurationService.getFeeTypeFeeTerms(this.schoolBoardId, classId).subscribe(function (res) {
            _this.getAllDetails(res);
        });
    };
    ManageFeesComponent.prototype.getAllDetails = function (data) {
        var _this = this;
        this.removeItems();
        this.schoolFees = [];
        this.schoolFees = data.schoolFees;
        this.schoolFees.forEach(function (x) {
            x.feeAmount = _this.getFormattedCurrency(x.feeAmount);
            x.schoolFeeAssignments.forEach(function (element) {
                element.feeAmount = _this.getFormattedCurrency(element.feeAmount);
            });
        });
        if (!this.schoolFees.length) {
            this.errorMessage = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MANAGE_FEE_CLONE_OR_ADD_ERROR;
            this.isAddButton = true;
            this.isErrorMessage = true;
            this.isUpdateButton = false;
            this.isFeeType = false;
            this.isCreate = false;
            this.isEdit = false;
        }
        else {
            this.isFeeType = false;
            this.isDisplay = true;
            this.isCreate = false;
            this.isEdit = false;
            this.isErrorMessage = false;
            this.isUpdateButton = true;
            this.isAddButton = false;
        }
    };
    ManageFeesComponent.prototype.addClick = function () {
        this.isValidate = false;
        this.manageFeesForm.get(['feeTypeId']).clearValidators();
        this.isFeeType = true;
        this.userManageFeesForm.submitted = false;
        this.manageFeesForm.get('feeTypeId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.manageFeesForm.controls['feeTypeId'].updateValueAndValidity();
        this.isErrorMessage = false;
        this.isRequired = true;
        this.isCreate = true;
        this.isEdit = false;
        this.disableControls();
        this.isDisabled = true;
        this.getFeeTypeData(true);
    };
    ManageFeesComponent.prototype.disableControls = function () {
        this.manageFeesForm.controls['classId'].disable();
        this.manageFeesForm.controls['schoolBoardId'].disable();
    };
    ManageFeesComponent.prototype.enableControls = function () {
        this.manageFeesForm.controls['classId'].enable();
        this.manageFeesForm.controls['schoolBoardId'].enable();
    };
    ManageFeesComponent.prototype.editClick = function () {
        var _this = this;
        this.isValidate = false;
        this.isFeeType = true;
        this.removeItems();
        this.isEdit = true;
        this.isCreate = false;
        this.disableControls();
        this.isDisabled = true;
        this.manageFeesForm.get('feeTypeId').clearValidators();
        this.manageFeesForm.controls['feeTypeId'].updateValueAndValidity();
        this.manageFeeConfigurationService.getAllFeetermsByClass(this.schoolBoardId, this.classId).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getFeeTermDetails(res)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }, function (error) {
            _this.errorResponse(error);
        });
        this.getFeeTypeData(false);
    };
    ManageFeesComponent.prototype.getFeeTypeData = function (isRequired) {
        this.feeTypeMulticheck = {
            multiSelect: true, serchBoxPalceholder: 'Fee Types',
            placeholder: 'Select Fee Types', data: this.feeTypes, noEntryFoundLabel: 'No Data Found', isRequired: isRequired
        };
    };
    ManageFeesComponent.prototype.removeItems = function () {
        var control = this.manageFeesForm.controls['schoolFees'];
        for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
    };
    ManageFeesComponent.prototype.feeTypeFieldss = function (parent) {
        var _this = this;
        this.formArrayList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        parent.schoolFeeAssignments.forEach(function (child) {
            if (child.isInvoiceGeneratedForFeeTerm) {
                _this.invoiceError = app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INVOICE_ERROR;
                _this.isInvoiceError = true;
            }
            _this.formArrayList.push(_this._fb.group({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](child.id),
                feeTermName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](child.shortName),
                schoolFeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](child.schoolFeeId),
                feeTypesForFeeTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](child.feeTypesForFeeTermId),
                feeAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: child.feeAmount, disabled: child.isInvoiceGeneratedForFeeTerm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999.99)]),
                isInvoiceGeneratedForFeeTerm: child.isInvoiceGeneratedForFeeTerm
            }));
        });
        return this.formArrayList;
    };
    ManageFeesComponent.prototype.getTotalAmount = function (control) {
        var sum = null;
        if (control.getRawValue().schoolFeeAssignments.length && control.valid) {
            control.getRawValue().schoolFeeAssignments.forEach(function (element) {
                if (element.feeAmount !== null && element.feeAmount !== '') {
                    sum = parseFloat((sum + Number(element.feeAmount)).toFixed(2));
                }
            });
        }
        else {
            sum = control.getRawValue().feeAmount;
        }
        control.controls['feeAmount'].setValue(sum);
        return sum;
    };
    ManageFeesComponent.prototype.setFeeTypeList = function (data, setDisable) {
        if (setDisable === void 0) { setDisable = true; }
        this.feeTypeForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.classId),
            schoolFeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.schoolFeeId),
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.schoolBoardId),
            feeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.feeTypeId),
            feeTypeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.name),
            feeAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: data.feeAmount, disabled: setDisable || data.isInvoiceGeneratedForFeeType }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999.99)]),
            isInvoiceGeneratedForFeeType: data.isInvoiceGeneratedForFeeType,
            schoolFeeAssignments: this.feeTypeFieldss(data),
        });
        return this.feeTypeForm;
    };
    ManageFeesComponent.prototype.getFeeTermDetails = function (data) {
        var _this = this;
        this.isErrorMessage = false;
        this.selectedFeeTypes.push(data.schoolFees[0]);
        this.feeTypesInvoiceCheck();
        this.feeTypeList = [];
        this.feeTypeList = data.schoolFees;
        this.feeTypeList.forEach(function (element, i) {
            var control = _this.manageFeesForm.get('schoolFees');
            if (element.schoolFeeAssignments.length) {
                control.push(_this.setFeeTypeList(element));
            }
            else {
                control.push(_this.setFeeTypeList(element, false));
            }
        });
        this.isDisplay = false;
    };
    ManageFeesComponent.prototype.feeTypesInvoiceCheck = function () {
        if (!this.selectedFeeTypes.length) {
            this.isInvoiceError = false;
        }
        else {
            this.isInvoiceError = this.selectedFeeTypes.some(function (x) { return x.isInvoiceGeneratedForFeeType === true; });
            if (!this.isInvoiceError) {
                this.isInvoiceError = this.selectedFeeTypes.some(function (x) { return x.schoolFeeAssignments.some(function (y) { return y.isInvoiceGeneratedForFeeTerm === true; }); });
            }
        }
    };
    ManageFeesComponent.prototype.schoolBoardChange = function (id) {
        this.unassignedClasses(id);
    };
    ManageFeesComponent.prototype.cloneClick = function () {
        this.loaded = false;
        this.cloneClasses = [];
        if (this.schoolBoards.length) {
            this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: [], noEntryFoundLabel: 'No Data Found', isRequired: true };
            this.loaded = true;
        }
        else {
            this.unassignedClasses(null);
            this.cloneManageFeesForm.get('schoolBoardId').clearValidators();
            this.cloneManageFeesForm.controls['schoolBoardId'].updateValueAndValidity();
        }
        this.popUpCheck();
    };
    ManageFeesComponent.prototype.popUpCheck = function () {
        if ((this.cloneClasses.length || this.schoolBoards.length)) {
            this.coustomDialog = this.dialog.open(this.customTemplate, {
                disableClose: true,
                width: '350px',
            });
        }
    };
    ManageFeesComponent.prototype.unassignedClasses = function (id) {
        var _this = this;
        this.cloneClasses = [];
        this.manageFeeConfigurationService.getUnAssignedClasses(id)
            .subscribe(function (res) {
            _this.UnAssignedClasses(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ManageFeesComponent.prototype.UnAssignedClasses = function (data) {
        var _this = this;
        if (data.listViews) {
            data.listViews.forEach(function (element) {
                _this.cloneClasses.push({
                    label: element.name,
                    value: element.id
                });
            });
        }
        if (this.cloneClasses.length) {
            this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: this.cloneClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
            if (!this.loaded) {
                this.popUpCheck();
            }
        }
        else {
            this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: this.cloneClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
            this.openSnackBar(data.messages.ResultMessage);
            this.cloneClassesResponce = data.messages.ResultMessage;
        }
    };
    ManageFeesComponent.prototype.onSelectFeeType = function (ids) {
        var _this = this;
        if (ids.length > this.primaryArray.length) {
            var newFeeTypeIds = [];
            var idValues_1 = [];
            ids.forEach(function (element) { return idValues_1.push(element.value); });
            newFeeTypeIds.push(this.primaryArray.length ? idValues_1.filter(function (n) { return !this.has(n); }, new Set(this.primaryArray)) : ids[0].value);
            this.manageFeeConfigurationService.getFeeTermsByFeeType(newFeeTypeIds).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeeTermDetails(res)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            var idValues_2 = [];
            ids.forEach(function (element) { return idValues_2.push(element.value); });
            var removedId_1 = this.primaryArray.filter(function (n) { return !this.has(n); }, new Set(idValues_2));
            this.feeTypeIds.splice(this.feeTypeIds.indexOf(Number(removedId_1)));
            if (this.manageFeesForm.value.schoolFees.length > 0) {
                var index = this.manageFeesForm.value.schoolFees.findIndex(function (x) { return x.feeTypeId === (removedId_1[0]); });
                this.selectedFeeTypes = this.selectedFeeTypes.filter(function (x) { return x.feeTypeId !== removedId_1[0]; });
                this.feeTypesInvoiceCheck();
                var control = this.manageFeesForm.controls['schoolFees'];
                control.removeAt(index);
            }
        }
        this.feeTypeIds = [];
        this.primaryArray = [];
        if (ids.length) {
            ids.forEach(function (x) {
                _this.feeTypeIds.push(x.value);
                _this.primaryArray.push(x.value);
            });
        }
    };
    ManageFeesComponent.prototype.onSubmitManageFees = function (manageFeesForm) {
        var _this = this;
        this.isValidate = true;
        var data = manageFeesForm.getRawValue();
        if (manageFeesForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.disbleSubmitBtn = true;
            data = this.manageFeesData(data);
            if (data.schoolFees.length) {
                this.manageFeeConfigurationService.schoolFeeAssignment(data.schoolFees).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                    _this.errorResponse(error);
                });
                this.disbleSubmitBtn = false;
            }
            else {
                this.disbleSubmitBtn = false;
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].FEE_CONFIGURATION_DATA_ERROR, true);
            }
        }
    };
    ManageFeesComponent.prototype.manageFeesData = function (manageFeesForm) {
        manageFeesForm.schoolFees.forEach(function (element) {
            element.schoolFeeAssignments = element.schoolFeeAssignments.filter(function (child) {
                return child.feeAmount >= 0 && child.feeAmount !== null && child.feeAmount !== '';
            });
        });
        manageFeesForm.schoolFees = manageFeesForm.schoolFees.filter(function (element) {
            return element.feeAmount >= 0 && element.feeAmount !== null && element.feeAmount !== '';
        });
        return manageFeesForm;
    };
    ManageFeesComponent.prototype.onUpdateManageFees = function (manageFeesForm) {
        var _this = this;
        this.isValidate = true;
        var data = manageFeesForm.getRawValue();
        if (manageFeesForm.getRawValue().schoolFees) {
            if (manageFeesForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
                this.disbleSubmitBtn = true;
                data = this.manageFeesData(data);
                this.schoolFeeViewModel = data;
                if (data.schoolFees.length === 0) {
                    this.manageFeeConfigurationService.deleteAllSchoolFees(data.schoolBoardId, data.classId)
                        .subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                else {
                    this.manageFeeConfigurationService.updateSchoolFees(data.schoolFees).subscribe(function (res) { return _this.addUpdateResponce(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                this.disbleSubmitBtn = false;
            }
        }
    };
    /**
       * Responce for Add or update
       * @param testTypeView
       */
    ManageFeesComponent.prototype.addUpdateResponce = function (manageView) {
        this.openSnackBar(manageView.messages.ResultMessage);
        if (manageView.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
            this.primaryArray = [];
            this.disbleSubmitBtn = false;
            this.isAddButton = false;
            this.feeTypeList = [];
            this.getFeeTypeData(false);
            this.getAll(this.classId);
            this.isRequired = false;
            this.manageFeesForm.get(['feeTypeId']).setValue('');
            this.fetchFeeTypes(this.schoolBoardId, this.classId);
            this.enableControls();
            this.isDisabled = false;
            this.scrollIntoViewById('manage-fee-header');
        }
    };
    ManageFeesComponent.prototype.closeCloneDialog = function (data) {
        this.cloneManageFeesForm.reset();
        this.dialog.closeAll();
    };
    ManageFeesComponent.prototype.onSubmitCloneManageFees = function (result) {
        var _this = this;
        this.isCloneValidate = true;
        if (result.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.cloneSchoolFeeView.destinationClassIds = result.value.classIds.map(function (x) { return x.value; });
            this.cloneSchoolFeeView.sourceClassId = this.classId;
            this.cloneSchoolFeeView.destinationSchoolBoardId = result.value.schoolBoardId;
            this.cloneSchoolFeeView.sourceSchoolBoardId = this.schoolBoardId;
            this.manageFeeConfigurationService.cloneFeeStructure(this.cloneSchoolFeeView).subscribe(function (res) { return _this.cloneResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    ManageFeesComponent.prototype.cloneResponse = function (result) {
        if (result.status = http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
            this.dialog.closeAll();
            this.cloneManageFeesForm.reset();
        }
        this.openSnackBar(result.messages.ResultMessage);
    };
    ManageFeesComponent.prototype.delete = function (id) {
        var _this = this;
        var dialogRef = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES);
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                _this.manageFeeConfigurationService.deleteSchoolFee(id).subscribe(function (res) {
                    if (res.statusCode = http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                        _this.openSnackBar(res.messages.ResultMessage);
                    }
                    _this.getAll(_this.classId);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    ManageFeesComponent.prototype.closePanel = function () {
        this.userManageFeesForm.submitted = false;
        this.getAll(this.classId);
        this.isCreate = false;
        this.isEdit = false;
        this.primaryArray = [];
        this.enableControls();
        this.isDisabled = false;
        this.manageFeesForm.controls['feeTypeId'].reset();
    };
    ManageFeesComponent.prototype.setDefaultBoard = function () {
        this.setFormControl('manageFeesForm', 'schoolBoardId', this.schoolBoards[0].value);
        this.fetchClasses(this.schoolBoards[0].value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ManageFeesComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], ManageFeesComponent.prototype, "formDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userManageFeesForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageFeesComponent.prototype, "userManageFeesForm", void 0);
    ManageFeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-fees',
            template: __webpack_require__(/*! ./manage-fees.component.html */ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./manage-fees.component.scss */ "./src/app/modules/configuration/finance/manage-fees/manage-fees.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_7__["ClassSectionService"],
            app_service_configuration_finance_api_manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_8__["ManageFeeConfigurationService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ManageFeesComponent);
    return ManageFeesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/configuration/finance/api/api.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/configuration/finance/api/api.ts ***!
  \**********************************************************/
/*! exports provided: APIS, InvoiceAdjustmentTypeService, FeeAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _invoice_adjustment_type_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-adjustment-type.service */ "./src/app/service/configuration/finance/api/invoice-adjustment-type.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoiceAdjustmentTypeService", function() { return _invoice_adjustment_type_service__WEBPACK_IMPORTED_MODULE_0__["InvoiceAdjustmentTypeService"]; });

/* harmony import */ var _fee_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fee-account.service */ "./src/app/service/configuration/finance/api/fee-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeeAccountService", function() { return _fee_account_service__WEBPACK_IMPORTED_MODULE_1__["FeeAccountService"]; });

/* harmony import */ var _manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-fee-configuration.service */ "./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts");





var APIS = [_invoice_adjustment_type_service__WEBPACK_IMPORTED_MODULE_0__["InvoiceAdjustmentTypeService"], _fee_account_service__WEBPACK_IMPORTED_MODULE_1__["FeeAccountService"], _manage_fee_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ManageFeeConfigurationService"]];


/***/ }),

/***/ "./src/app/service/configuration/finance/api/fee-account.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/configuration/finance/api/fee-account.service.ts ***!
  \**************************************************************************/
/*! exports provided: FeeAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeAccountService", function() { return FeeAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * Fee
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







var FeeAccountService = /** @class */ (function () {
    function FeeAccountService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        // protected basePath = 'http://localhost:8011';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Fee;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
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
    FeeAccountService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    FeeAccountService.prototype.createFeeAccountDetails = function (feeAccountView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._CreateFeeAccountDetails, feeAccountView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeAccountService.prototype.deleteFeeAccountDetails = function (ids, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteFeeAccountDetails.');
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._DeleteFeeAccountDetailsbyId, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeAccountService.prototype.feeAccountDetails = function (sortBy, accountName, code, displayName, description, sortOrder, failedRecords, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(accountName, 'AccountName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(code, 'Code', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(displayName, 'DisplayName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(description, 'Description', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._FeeAccountDetailsList, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeAccountService.prototype.feeAccountDetailsById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling feeAccountDetailsById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._FeeAccountDetailsbyId, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeAccountService.prototype.updateFeeAccountDetails = function (feeAccountDataView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._UpdateFeeAccountDetails, feeAccountDataView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]])
    ], FeeAccountService);
    return FeeAccountService;
}());



/***/ }),

/***/ "./src/app/service/configuration/finance/api/fee-type-tranches.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/service/configuration/finance/api/fee-type-tranches.service.ts ***!
  \********************************************************************************/
/*! exports provided: FeeTypeTranchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTypeTranchesService", function() { return FeeTypeTranchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * Fee
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







var FeeTypeTranchesService = /** @class */ (function () {
    function FeeTypeTranchesService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Fee;
        // protected basePath = 'http://localhost:8011';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    FeeTypeTranchesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    FeeTypeTranchesService.prototype.createFeeTypeTranche = function (feeTypeTrancheView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_CreateFeeTypeTranche, feeTypeTrancheView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService.prototype.deleteFeeTypeTranches = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFeeTypeTranches.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_DeleteteFeeTypeTranche, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService.prototype.getAllFeeTypeTranches = function (feeTypeIds, names, codes, descriptions, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(feeTypeIds, 'FeeTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(names, 'Names', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(codes, 'Codes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(descriptions, 'Descriptions', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_FeeTypeTranchesDetails, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService.prototype.getAllFeeTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_FeeTypes, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService.prototype.getFeeTypeTrancheById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFeeTypeTrancheById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_FeeTypeTrancheById, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService.prototype.updateFeeTypeTranche = function (feeTypeTranchesView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["FeeModuleConfig"]._FeeTypeTranches_UpdateteFeeTypeTranche, feeTypeTranchesView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    FeeTypeTranchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], FeeTypeTranchesService);
    return FeeTypeTranchesService;
}());



/***/ }),

/***/ "./src/app/service/configuration/finance/api/invoice-adjustment-type.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/service/configuration/finance/api/invoice-adjustment-type.service.ts ***!
  \**************************************************************************************/
/*! exports provided: InvoiceAdjustmentTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceAdjustmentTypeService", function() { return InvoiceAdjustmentTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * Fee
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







var InvoiceAdjustmentTypeService = /** @class */ (function () {
    function InvoiceAdjustmentTypeService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Fee;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_academic_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    InvoiceAdjustmentTypeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    InvoiceAdjustmentTypeService.prototype.createInvoiceAdjustmentType = function (invoiceAdjType, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._InvoiceAdjustmentType, invoiceAdjType, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService.prototype.deleteInvoiceAdjustmentType = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteInvoiceAdjustmentType.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete(this.basePath + "/InvoiceAdjustmentType/invoice-adjustment-type", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService.prototype.invoiceAdjustmentTypeDetails = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling invoiceAdjustmentTypeDetails.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._InvoiceAdjustmentType, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService.prototype.invoiceAdjustmentTypesList = function (names, isPositiveAdjustment, inActive, inactiveDate, inactiveDateBegin, inactiveDateEnd, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(names, 'Names', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(isPositiveAdjustment, 'IsPositiveAdjustment', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inActive, 'InActive', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inactiveDate, 'InActiveDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inactiveDateBegin, 'InActiveDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inactiveDateEnd, 'InActiveDateEnd', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._InvoiceAdjustmentTypes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService.prototype.updateInvoiceAdjustmentType = function (invoiceAdjType, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._InvoiceAdjustmentType, invoiceAdjType, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService.prototype.updateInvoiceAdjustmentTypeStatus = function (statusView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._InvoiceAdjustmentTypeStatusUpdate, statusView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    InvoiceAdjustmentTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_academic_service__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_academic_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], InvoiceAdjustmentTypeService);
    return InvoiceAdjustmentTypeService;
}());



/***/ }),

/***/ "./src/app/service/configuration/finance/api/late-fee-rules.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/service/configuration/finance/api/late-fee-rules.service.ts ***!
  \*****************************************************************************/
/*! exports provided: LateFeeRulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateFeeRulesService", function() { return LateFeeRulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * Fee
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







var LateFeeRulesService = /** @class */ (function () {
    function LateFeeRulesService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Fee;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    LateFeeRulesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    LateFeeRulesService.prototype.createLateFeeRule = function (lateFeeViewModel, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Add_LateFeeRules, lateFeeViewModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.deleteAll = function (ids, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteAll.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (ids) {
            ids.forEach(function (element) {
                queryParameters = queryParameters.append('Ids', element);
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Delete_LateFeeRules, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.getAllDetails = function (delayFromDaysCount, delayToDaysCount, lateFeePenaltyTypeIds, penaltyAmounts, isPenaltyFromDueDates, sortBy, sortOrder, failedRecords, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(delayFromDaysCount, 'DelayFromDaysCount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(delayToDaysCount, 'DelayToDaysCount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(lateFeePenaltyTypeIds, 'LateFeePenaltyTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(penaltyAmounts, 'PenaltyAmounts', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(isPenaltyFromDueDates, 'IsPenaltyFromDueDates', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Get_All_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.getLateFeePenaltyTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Get_LateFee_PenaltyType, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.isExistLateFeeCategeory = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._IsExist_LateFeeCategeory, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.lateFeeDetails = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lateFeeDetails.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._GetBy_Id, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService.prototype.updateLateFeeRule = function (lateFeeView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Update_LateFeeRule, lateFeeView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LateFeeRulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]])
    ], LateFeeRulesService);
    return LateFeeRulesService;
}());



/***/ }),

/***/ "./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/service/configuration/finance/api/manage-fee-configuration.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageFeeConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFeeConfigurationService", function() { return ManageFeeConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/**
 * Fee
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






var ManageFeeConfigurationService = /** @class */ (function () {
    function ManageFeeConfigurationService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["ModuleConfig"].Fee;
        // protected basePath = 'http://localhost:8011';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    ManageFeeConfigurationService.prototype.cloneFeeStructure = function (model, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Clone_FeeStructure, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.deleteSchoolFee = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Delete_SchoolFee_Structure, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.getAllFeetermsByClass = function (schoolBoardId, classId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Get__All_FeeTypes_FeeTerms_By_Class, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.getFeeTermsByFeeType = function (ids, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (ids) {
            ids.forEach(function (element) {
                queryParameters = queryParameters.append('Ids', element);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Get_FeeTerms_By_FeeTypes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.getFeeTypeFeeTerms = function (schoolBoardId, classId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Get__FeeTypes_FeeTerms_By_ClassId, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.getFeeTypesByClass = function (schoolBoardId, classId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Get_FeeTypes_By_Class, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.getUnAssignedClasses = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Get_Unassigned_Classes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.schoolFeeAssignment = function (model, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Assign_SchoolFees, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.updateSchoolFees = function (schoolFeesView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["FeeModuleConfig"]._Update_SchoolFees, schoolFeesView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService.prototype.deleteAllSchoolFees = function (schoolBoardId, classId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
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
        return this.httpClient.delete(this.basePath + "/ManageFeeConfiguration/delete-all-school-fees", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ManageFeeConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], ManageFeeConfigurationService);
    return ManageFeeConfigurationService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-finance-finance-module~app-shared-wizard-wizard-module.js.map