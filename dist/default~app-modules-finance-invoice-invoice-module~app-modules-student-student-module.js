(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-finance-invoice-invoice-module~app-modules-student-student-module"],{

/***/ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-details/invoice-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-af-details [keyValues]=\"studentDetails\" [title]=\"'Student Information'\" [header]=\" 'INVOICE DETAILS' \"\n  [isBackButtonRequired]=true>\n</app-af-details>\n\n<div *ngIf=\"showPayment\">\n  <app-af-payments [inputData]=\"feeAccount\" (outPutValue)='savePayment($event)' [isRefNumberRequired]=\"true\"></app-af-payments>\n</div>\n\n<app-af-details [keyValues]=\"invoiceInformation\" [title]=\"'Invoice Information'\" [expand]=\"closeInvoiceForm\" [templateRef]=\"onCancelInvoice ? isCancel : adjustmentTemplate\" [actions]=\"actions\"\n  (action)=operations($event)></app-af-details>\n\n<div class=\"px-sm-40 py-12\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-12\" fxLayout=\"column\">\n    <div class=\"text-uppercase font-size-18 border-bottom p-20\"><span translate>INVOICE PARTICULARS</span></div>\n    <app-table [settings]=\"particurlarsSettings\" [dynamicClass]=\"'row-class'\"></app-table>\n  </div>\n</div>\n\n<div class=\"px-sm-40 py-12\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-12\" fxLayout=\"column\">\n    <app-table [settings]=\"adjustmentSettings\" [templateRef]=\"adjustmentTemplate\" [closeRowForm]='closeAddPanel'\n      (openAddForm)=\"openForm()\">\n    </app-table>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-sm-40 pt-16\">\n  <mat-checkbox class=\"mr-20\" [checked] = \"true\" (change)=\"changeValue($event)\"><span translate>Hide Corrected Payments</span></mat-checkbox> \n</div>\n\n<div *ngIf=\"isValid\" class=\"px-sm-40 py-12\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 pt-12\" fxLayout=\"column\">\n    <app-table [settings]=\"adjustmentSettings\" [templateRef]=\"isCancel\" [closeRowForm]='closeAddPanel'\n      (openAddForm)=\"openForm()\">\n    </app-table>\n  </div>\n</div>\n\n<ng-template #adjustmentTemplate>\n  <form [formGroup]=\"adjustmentList\" (ngSubmit)=\"onSumbit(adjustmentList)\" #form=\"ngForm\" class=\"pt-20\">\n    <ng-container formArrayName=\"adjustmentLists\"\n      *ngFor=\"let itemrow of addnewInvoiceadjustmentForm.controls; let i=index, let l = last;let f = first\">\n      <div [formGroupName]=\"i\" fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayout.gt-sm=\"row\"\n        class=\"pt-12\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"23\" fxFlex=\"100\">\n          <mat-label #invoiceAdjustmentTypeId translate>Adjustment Type</mat-label>\n          <mat-select formControlName=\"invoiceAdjustmentTypeId\" required\n            (selectionChange)=\"dropdownDisable($event,itemrow.controls.invoiceAdjustmentTypeId)\">\n            <mat-option [disabled]=\"item.disable\" value=\"option1\" *ngFor=\"let item of invoiceAdjustmentTypes\"\n              [value]=\"item.id\" ngDefaultControl>\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='invoiceAdjustmentTypeId.innerText'\n              [validationControl]=\"itemrow.controls.invoiceAdjustmentTypeId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-16\" fxLayout=\"column\" fxFlex.gt-sm=\"23\"\n          fxFlex=\"100\">\n          <mat-label #adjustmentAmount translate>Adjustment Amount</mat-label>\n          <input #adjAmount required matInput id=\"form-{{i}}\" formControlName=\"adjustmentAmount\" autocomplete=\"off\">\n          <mat-error>\n            <app-validation [labelName]=\"adjustmentAmount.innerText\"\n              [validationControl]=\"itemrow.controls.adjustmentAmount\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-16 icon-center\" fxLayout=\"column\" fxFlex.gt-sm=\"23\"\n          fxFlex=\"100\">\n          <mat-label #adjustmentDate translate>Adjustment Date</mat-label>\n          <input matInput [matDatepicker]=\"adjustmentDatePicker\" [max]=\"currentDate\" formControlName=\"adjustmentDate\"\n            required >\n          <mat-datepicker-toggle matSuffix [for]=\"adjustmentDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #adjustmentDatePicker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='adjustmentDate.innerText' [validationControl]=\"itemrow.controls.adjustmentDate\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-16\" fxLayout=\"column\" fxFlex.gt-sm=\"23\"\n          fxFlex=\"100\">\n          <mat-label #reason translate>reason</mat-label>\n          <input matInput formControlName=\"reason\" autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event,itemrow.controls.reason)\">\n          <mat-error>\n            <app-validation [labelName]='reason.innerText' [validationControl]=\"itemrow.controls.reason\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <button *ngIf=\"addnewInvoiceadjustmentForm?.controls?.length > 1\" mat-icon-button type=\"button\" class=\"mb-16 red-fg\"\n          (click)=\"deleteRow(itemrow,i)\">\n          <mat-icon>remove_circle</mat-icon>\n        </button>\n        <button *ngIf=\"l\" mat-icon-button class=\"mb-16 accent-fg\" type=\"button\"\n          [disabled]=\"isDisabled\" (click)=\"addNewRow(itemrow)\">\n          <mat-icon>add_circle</mat-icon>\n        </button>\n      </div>\n    </ng-container>\n    <div *ngIf=\"isDisabled\" class=\"red-fg\">{{errorMsg}}</div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"py-16\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">{{'Cancel' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" [disabled]=\"isDisabled\">{{'Submit' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n\n<app-table [settings]=\"paymentSettings\" [closeRowForm]=closeAddPanels (openAddForm)=\"openPaymentForm()\"  (rowBasedAction)='rowActions($event)' [newButtonDisable]=\"buttonDisable\">\n</app-table>\n\n<ng-template #isCancel>\n  <form [formGroup]=\"cancellationForm\" (ngSubmit)=\"InvoiceCancel(cancellationForm)\" #appForm=\"ngForm\">\n    <div fxLayout=\"column\">\n      <div class=\"py-16\" translate>\n        Please Confirm the Cancellation of this invoice by including the Reason for Cancellation.\n      </div>\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n        <mat-label #cancelledReason translate>Reason For Cancellation</mat-label>\n        <input autocomplete=\"off\" matInput formControlName=\"cancelledReason\" required\n        (keyup)=\"preventSpaceForArray($event,cancellationForm.controls.cancelledReason)\" (blur)=\"trimTextBoxSpaces('cancellationForm','cancelledReason')\">\n\n        <mat-error>\n          <app-validation [labelName]=\"cancelledReason.innerText\"\n            [validationControl]=\"cancellationForm.controls.cancelledReason\"\n            class=\"error-msg messages text-left text-danger\" [doValidate]=\"validateForm\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closeForm()\">{{'Cancel' | translate}}</button>\n      <button class=\"mr-12 text-uppercase\" mat-raised-button color=\"accent\" [disabled]=\"disbleSubmitBtn\">{{'Submit' | translate}}</button>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-details/invoice-details.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9pbnZvaWNlL2ludm9pY2UtZGV0YWlscy9pbnZvaWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-details/invoice-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvoiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function() { return InvoiceDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_service_online_payments_online_payment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/online-payments/online-payment.service */ "./src/app/service/online-payments/online-payment.service.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var app_shared_payment_gateway_payemt_gateway_options_payemt_gateway_options_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/payment-gateway/payemt-gateway-options/payemt-gateway-options.component */ "./src/app/shared/payment-gateway/payemt-gateway-options/payemt-gateway-options.component.ts");

















var InvoiceDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvoiceDetailsComponent, _super);
    function InvoiceDetailsComponent(dialogRef, _fb, invoiceService, commonService, studentDBService, cd, router, route, paymentCorrectionService, snackBar, onlinePaymentService, oauthService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this._fb = _fb;
        _this.invoiceService = invoiceService;
        _this.commonService = commonService;
        _this.studentDBService = studentDBService;
        _this.cd = cd;
        _this.router = router;
        _this.route = route;
        _this.paymentCorrectionService = paymentCorrectionService;
        _this.snackBar = snackBar;
        _this.onlinePaymentService = onlinePaymentService;
        _this.oauthService = oauthService;
        _this.invoiceInformation = [];
        _this.studentDetails = [];
        _this.invoiceParticulars = [];
        _this.invoicePayments = [];
        _this.invoiceAdjustments = [];
        _this.invoiceData = [];
        _this.adjustmentSettings = {};
        _this.paymentSettings = {};
        _this.particurlarsSettings = {};
        _this.ids = [];
        _this.isData = false;
        _this.invoiceIds = [];
        _this.actions = [];
        _this.closeAddPanels = false;
        _this.onCancelInvoice = false;
        _this.closeInvoiceForm = true;
        _this.fromParent = false;
        _this.buttonDisable = false;
        _this.isCorrected = true;
        _this.isSchoolhasActiveServices = false;
        _this.currency = 'INR';
        _this.clearSubscription = _this.commonService.isCorrectionClear().subscribe(function (res) {
            if (!res.isClear) {
                _this.showPayment = res.isClear;
                _this.closeAddPanels = false;
                _this.buttonDisable = false;
            }
        });
        return _this;
    }
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.invoiceIds.push(params.id);
                _this.invoiceId = params.id;
            }
        });
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.prepareInvoiceDetailsTable(this.invoiceData, true);
        this.prepareAdjustmentTable(this.invoiceAdjustments, true);
        this.preparePaymentTable(this.invoicePayments, true);
        this.prepareParticularsTable(this.invoiceParticulars);
        this.invoiceDetails();
        this.adjustmentForm();
        this.invoiceAdjustmentDataView = {
            invoiceId: null,
            invoiceAdjustmentListView: [{
                    adjustmentAmount: 0,
                    adjustmentDate: '',
                    invoiceAdjustmentTypeId: 0,
                    reason: null
                }]
        };
        this.cancellationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cancelledReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(180)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.invoiceCriteriaViewModel = {
            ids: [],
            cancelledReason: ''
        };
        if (this.fromParent) {
            this.getActiveServices();
        }
    };
    InvoiceDetailsComponent.prototype.getActiveServices = function () {
        var _this = this;
        this.onlinePaymentService.activeSchoolServices(null, 'Online')
            .subscribe(function (res) { return _this.setActivesServices(res); }, function (error) { return _this.errorResponse(error); });
    };
    InvoiceDetailsComponent.prototype.setActivesServices = function (res) {
        if (res.resultModelList && res.resultModelList.length) {
            this.isSchoolhasActiveServices = true;
        }
    };
    InvoiceDetailsComponent.prototype.adjustmentForm = function () {
        this.adjustmentList = this._fb.group({
            adjustmentLists: this._fb.array([this.initItemRows(true, false)]),
        });
    };
    // list all your form controls here, which belongs to your form array
    InvoiceDetailsComponent.prototype.initItemRows = function (addVisable, removeVisable) {
        return this._fb.group({
            invoiceAdjustmentTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            adjustmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            adjustmentAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]),
        });
    };
    Object.defineProperty(InvoiceDetailsComponent.prototype, "addnewInvoiceadjustmentForm", {
        // return type for educaion details form
        get: function () {
            return this.adjustmentList.get('adjustmentLists');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    InvoiceDetailsComponent.prototype.addNewRow = function (data) {
        // control refers to your formarray
        var control = this.adjustmentList.controls['adjustmentLists'];
        // add new formgroup
        control.push(this.initItemRows(true, true));
        this.adjIds();
        this.cd.detectChanges();
        this.adjAmount.last.nativeElement.focus();
    };
    InvoiceDetailsComponent.prototype.adjIds = function () {
        var _this = this;
        this.ids = [];
        this.adjustmentList.value.adjustmentLists.forEach(function (element) {
            _this.ids.push(element.invoiceAdjustmentTypeId);
        });
        this.invoiceAdjustmentTypes.forEach(function (element1) {
            if (_this.ids.indexOf(element1.id) > -1) {
                element1.disable = true;
            }
            else {
                element1.disable = false;
            }
        });
    };
    InvoiceDetailsComponent.prototype.dropdownDisable = function (event, test) {
        this.adjIds();
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    InvoiceDetailsComponent.prototype.deleteRow = function (subCategoryArray, index) {
        // control refers to your formarray
        var control = this.adjustmentList.controls['adjustmentLists'];
        this.invoiceAdjustmentTypes.forEach(function (element) {
            if (element.id === subCategoryArray.controls['invoiceAdjustmentTypeId'].value) {
                element.disable = false;
            }
        });
        // remove the chosen row
        control.removeAt(index);
        if (this.adjustmentList.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            this.validate = false;
            this.isDisabled = false;
        }
        this.cd.detectChanges();
        this.adjAmount.last.nativeElement.focus();
    };
    InvoiceDetailsComponent.prototype.openForm = function () {
        this.adjustmentTypes();
        this.closeAddPanel = false;
        this.isDisabled = false;
        this.scrollIntoViewById('form-0');
    };
    InvoiceDetailsComponent.prototype.AdjustForm = function () {
        this.isDisabled = false;
        this.adjustmentTypes();
        // this.dialogRef.open(CustomDialogComponent, {
        //   data: { template: this.customTemplate }
        // });
    };
    InvoiceDetailsComponent.prototype.CancelForm = function () {
        this.isDisabled = false;
        // this.dialogRef.open(CustomDialogComponent, {
        //   data: { template: this.customTemplates }
        // });
    };
    InvoiceDetailsComponent.prototype.adjustmentTypes = function () {
        var _this = this;
        this.invoiceService.invoiceAdjustmentTypes().subscribe(function (res) {
            _this.invoiceAdjustmentTypes = res.resultModelList;
            _this.invoiceAdjustmentTypes.forEach(function (element) {
                element.disable = false;
            });
        });
    };
    InvoiceDetailsComponent.prototype.invoiceDetails = function () {
        var _this = this;
        this.invoiceService.invoiceDetails(this.invoiceId, this.isCorrected).subscribe(function (res) { return _this.invoiceDataAssignment(res); }, function (error) { return _this.errorResponse(error); });
    };
    InvoiceDetailsComponent.prototype.invoiceDataAssignment = function (data) {
        var _this = this;
        if (data.currencyView !== undefined && data.currencyView !== null) {
            this.currency = data.currencyView.code;
        }
        Object.assign(this.currentInvoiceDetails = {}, data.invoiceInformation);
        data.invoiceInformation.invoiceAmount = this.getFormattedCurrency(data.invoiceInformation.invoiceAmount);
        data.invoiceInformation.balanceAmount = this.getFormattedCurrency(data.invoiceInformation.balanceAmount);
        data.invoiceInformation.realizedAmount = this.getFormattedCurrency(data.invoiceInformation.realizedAmount);
        // if (data.invoiceInformation.adjustmentAmount < 0) {
        //   // data.invoiceInformation.adjustmentAmount.slice(1, this.getFormattedCurrency);
        //    this.adjAmount1 = data.invoiceInformation.adjustmentAmount;
        //   data.invoiceInformation.adjustmentAmount = this.adjAmount1.slice(1, this.getFormattedCurrency);
        // } else {
        //   data.invoiceInformation.adjustmentAmount = data.invoiceInformation.adjustmentAmount === null || undefined
        //     ? this.getFormattedCurrency(0) : this.getFormattedCurrency(data.invoiceInformation.adjustmentAmount);
        // }
        data.invoiceInformation.adjustmentAmount = data.invoiceInformation.adjustmentAmount === null || undefined
            ? this.getFormattedCurrency(0) : this.getFormattedCurrency(data.invoiceInformation.adjustmentAmount);
        this.invoiceParticulars = data.invoiceParticulars;
        this.invoiceParticulars.forEach(function (x) {
            x.feeAmount = _this.getFormattedCurrency(x.feeAmount);
            x.amountPayable = _this.getFormattedCurrency(x.amountPayable);
            x.consession = x.consession > 0 ? _this.getFormattedCurrency(x.consession) : x.consession;
            x.concessionGroup = x.concessionGroup !== null ? x.concessionGroup : null;
        });
        this.academicSessionId = data.invoiceInformation.schoolAcademicSessionId;
        this.studentId = data.studentId;
        this.studentDBService.studentDetails(data.studentId).subscribe(function (res) { return _this.assignStudentDetails(res); }, function (error) { return _this.errorResponse(error); });
        this.isCancelled = data.isCancelled;
        this.invoiceInformation = (this.setDateFormat(data.invoiceInformation));
        this.invoiceInformation = this.getKeyValuesOfObject(data.invoiceInformation).filter(function (x) { return x.Label !== 'id' && x.Label !== 'schoolAcademicSessionId'; });
        if (data.isCancelled) {
            this.actions = [];
        }
        else {
            this.actions = ['Cancel', 'Adjustment'];
        }
        this.invoicePayments = data.invoicePayment;
        this.invoiceAdjustments = data.invoiceAdjustment;
        this.invoiceInformationHeadders = Object.keys(this.invoiceInformation);
        this.prepareParticularsTable(data.invoiceParticulars);
        this.prepareAdjustmentTable(this.setDateFormat(data.invoiceAdjustment), !data.isCancelled);
        this.preparePaymentTable(this.setDateFormat(data.invoicePayment), !data.isCancelled);
    };
    InvoiceDetailsComponent.prototype.operations = function (action) {
        this.closeInvoiceForm = false;
        switch (action) {
            case 'Cancel':
                this.onCancelInvoice = true;
                this.CancelForm();
                break;
            case 'Adjustment':
                this.onCancelInvoice = false;
                this.AdjustForm();
                this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SHOW);
                break;
        }
    };
    InvoiceDetailsComponent.prototype.InvoiceCancel = function (cancellationForm) {
        var _this = this;
        this.validateForm = true;
        if (this.cancellationForm.invalid) {
            return;
        }
        else {
            this.invoiceCriteriaViewModel.ids = this.invoiceIds;
            this.invoiceCriteriaViewModel.cancelledReason = cancellationForm.value.cancelledReason;
            this.invoiceService.feeInvoice(this.invoiceCriteriaViewModel).subscribe(function (res) { return _this.response(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // response
    InvoiceDetailsComponent.prototype.response = function (data) {
        this.validateForm = false;
        if (data.statusCode === this.HttpStatus.OK) {
            this.closeForm();
            this.cancellationForm.reset();
            // this.ngOnInit();
            this.invoiceDetails();
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    // method for when click cancel panel it will open
    InvoiceDetailsComponent.prototype.closeForm = function () {
        this.dialogRef.closeAll();
        this.aForm.resetForm();
        this.validateForm = false;
        this.closeAddPanel = true;
        this.closeInvoiceForm = true;
    };
    InvoiceDetailsComponent.prototype.prepareAdjustmentTable = function (data, buttonRequired) {
        var _this = this;
        this.adjustmentCols = [
            { field: 'adjustmentType', header: 'Adjustment Type', sort: false },
            { field: 'date', header: 'Date', sort: false },
            { field: 'reason', header: 'Reason', sort: false },
            { field: 'amount', header: 'Amount', sort: false },
        ];
        data.forEach(function (x) {
            x.amount = _this.getFormattedCurrency(x.amount);
        });
        this.adjustmentSettings = {
            rows: data,
            columns: this.adjustmentCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: false,
            // tablename: 'Adjustments' ,
            padding: true,
            headerOperations: {
                addingForm: {
                    required: this.fromParent ? false : buttonRequired,
                    btnName: 'New Adjustment'
                },
                sideHeader: {
                    heading: 'Adjustments'
                }
            },
        };
    };
    InvoiceDetailsComponent.prototype.preparePaymentTable = function (data, buttonRequired) {
        var _this = this;
        this.paymentCols = [
            { field: 'receptNumber', header: 'Receipt Number', sort: false },
            { field: 'expiryDate', header: 'Payment Date', sort: false },
            { field: 'paymentType', header: 'Payment Type', sort: false },
            { field: 'paymentAmount', header: 'Payment Amount', sort: false },
            { field: 'utilizedAmount', header: 'Utilized Amount', sort: false },
            { field: 'status', header: 'Status', sort: false },
            { field: 'view', header: 'Action', sort: false }
        ];
        data.forEach(function (e) {
            e.paymentAmount = _this.getFormattedCurrency(e.paymentAmount);
            e.utilizedAmount = _this.getFormattedCurrency(e.utilizedAmount);
            e.operations = [
                {
                    name: _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_OPERATION),
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_OPERATION
                }
            ];
        });
        this.paymentSettings = {
            rows: data,
            columns: this.paymentCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: false,
            headerOperations: {
                addingForm: {
                    required: this.fromParent ? false : buttonRequired,
                    btnName: 'New Payment'
                },
                sideHeader: {
                    heading: 'Payments'
                }
            },
        };
    };
    InvoiceDetailsComponent.prototype.openPaymentForm = function () {
        var _this = this;
        this.invoiceParticulars.forEach(function (data) {
            if (data.feeAccountId > 0) {
                if (_this.feeAccountId > 0) {
                    if (_this.feeAccountId === data.feeAccountId) {
                        _this.feeAccountId = 0;
                        _this.feeAccountId = data.feeAccountId;
                        _this.feeAccount = {
                            feeAccountId: _this.feeAccountId,
                            correctionDate: new Date()
                        };
                    }
                }
                else {
                    _this.feeAccountId = data.feeAccountId;
                    _this.feeAccount = {
                        feeAccountId: _this.feeAccountId,
                        correctionDate: new Date()
                    };
                }
            }
        });
        this.buttonDisable = true;
        this.closeAddPanels = true;
        this.showPayment = true;
    };
    InvoiceDetailsComponent.prototype.prepareParticularsTable = function (data) {
        this.particurlarsCols = [
            { field: 'feeType', header: 'Fee Type', sort: false },
            { field: 'feeAmount', header: 'Fee Amount', sort: false },
            { field: 'consession', header: 'Concession', sort: false },
            { field: 'concessionGroup', header: 'Concession Group', sort: false },
            { field: 'amountPayable', header: 'Amount Payable', sort: false },
        ];
        this.particurlarsSettings = {
            rows: data,
            columns: this.particurlarsCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: false,
            padding: true,
            hideHeader: true,
            headerOperations: {
                addingForm: {
                    required: false
                }
            },
        };
    };
    InvoiceDetailsComponent.prototype.assignStudentDetails = function (data) {
        this.studentDetailsHeadders = Object.keys(data.resultModel);
        this.studentDetails = this.setDateFormat(data.resultModel);
        this.studentDetails = this.getKeyValuesOfObject(data.resultModel).filter(function (x) { return x.Label !== 'id'; });
        var studentIndex = this.studentDetails.findIndex(function (e) { return e.Label === 'name'; });
        this.studentDetails.unshift(this.studentDetails.splice(studentIndex, 1)[0]);
    };
    //   checkInValid(): void {
    //     this.validate = this.isDisabled = (this.adjustmentList.status === AppSettings.INVALID);
    //   }
    InvoiceDetailsComponent.prototype.onSumbit = function (data) {
        var _this = this;
        if (data.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INVALID) {
            this.validate = true;
            return false;
        }
        else {
            this.invoiceAdjustmentDataView.invoiceAdjustmentListView = [];
            this.validate = false;
            this.isDisabled = false;
            data.value.adjustmentLists.forEach(function (element) {
                element.adjustmentDate = _this.getFormattedDateByAPIPattern(element.adjustmentDate);
            });
            this.invoiceAdjustmentDataView.invoiceId =
                this.invoiceId;
            Object.assign(this.invoiceAdjustmentDataView.invoiceAdjustmentListView, data.value.adjustmentLists);
            this.invoiceService.addInvoiceAdjustment(this.invoiceAdjustmentDataView).subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    InvoiceDetailsComponent.prototype.addUpdateResponse = function (result) {
        if (result.statusCode === this.HttpStatus.OK) {
            this.openSnackBar(result.messages.ResultMessage);
            this.cancel();
            this.invoiceDetails();
            this.invoiceAdjustmentDataView.invoiceAdjustmentListView = [];
        }
    };
    InvoiceDetailsComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    InvoiceDetailsComponent.prototype.cancel = function () {
        this.dialogRef.closeAll();
        this.resetForm();
        this.closeInvoiceForm = true;
    };
    InvoiceDetailsComponent.prototype.resetForm = function () {
        this.dialogRef.closeAll();
        this.adjustmentShow = false;
        this.closeAddPanel = true;
        this.form.resetForm();
        this.adjustmentForm();
    };
    InvoiceDetailsComponent.prototype.prepareInvoiceDetailsTable = function (data, buttonRequired) {
        this.invoiceCols = [
            { field: 'feeTerm', header: 'Fee Term', sort: true },
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'classSection', header: 'Class-Section', sort: true },
            { field: 'invoiceNumber', header: 'Invoice Number', sort: true },
            { field: 'invoiceDate', header: 'Invoice Date', sort: true },
            { field: 'issueDate', header: 'Issue Date', sort: true },
            { field: 'dueDate', header: 'Due Date', sort: true },
            { field: 'invoiceAmount', header: 'Invoice Amount', sort: true },
            { field: 'dueAmount', header: 'Due Amount', sort: true },
            { field: 'panalityAmount', header: 'Panality Amount', sort: true },
            { field: 'realizedAmount', header: 'Realized Amount', sort: true },
            { field: 'balanceAmount', header: 'Balance Amount', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
        this.invoiceSettings = {
            rows: data,
            columns: this.invoiceCols,
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isPaginationRequired: true,
            headerOperations: {
                addingForm: {
                    required: buttonRequired,
                    btnName: 'New Payment'
                }
            },
        };
    };
    InvoiceDetailsComponent.prototype.savePayment = function (paymentForm) {
        var _this = this;
        this.invoiceIds = [];
        this.invoiceIds.push(this.invoiceId);
        paymentForm.studentId = this.studentId;
        paymentForm.invoiceIds = this.invoiceIds;
        paymentForm.schoolAcademicSessionId = this.academicSessionId;
        this.paymentViewModel = paymentForm;
        this.invoiceService.createPayment(this.paymentViewModel).subscribe(function (data) {
            if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_13__["OK"]) {
                _this.invoiceDetails();
                _this.showPayment = false;
                _this.closeAddPanels = false;
                _this.buttonDisable = false;
            }
            else {
                _this.showPayment = true;
            }
            _this.openSnackBar(data.messages.ResultMessage);
        });
        this.paymentCorrectionService.setCorrectionResponse(true);
    };
    InvoiceDetailsComponent.prototype.rowActions = function (data) {
        if (this.fromParent) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["FeeModuleConfig"]._Student_Payment_Details + data.clickedRow.paymentId]);
        }
        else {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_7__["FeeModuleConfig"]._Payment_Details_App_Routing + data.clickedRow.paymentId]);
        }
    };
    InvoiceDetailsComponent.prototype.changeValue = function (data) {
        this.isCorrected = data.checked;
        this.invoiceDetails();
    };
    InvoiceDetailsComponent.prototype.resetModelValues = function () {
        this.razorpayViewModel = {
            email: '',
            invoiceNumber: '',
            currency: '',
            receipt: '',
            mobilenumber: null,
            amount: null
        };
        this.paypalViewModel = {
            intent: '',
            purchase_units: []
        };
    };
    InvoiceDetailsComponent.prototype.onClickPayOnline = function (event) {
        var _this = this;
        this.resetModelValues();
        var dialogRef = this.dialogRef.open(app_shared_payment_gateway_payemt_gateway_options_payemt_gateway_options_component__WEBPACK_IMPORTED_MODULE_16__["PayemtGatewayOptionsComponent"], {
            disableClose: true,
            width: '650px',
            panelClass: 'payment-model',
            data: {
                id: this.invoiceId,
                razorpayViewModel: this.updatePaymentInformation(this.currentInvoiceDetails, 'razorpay'),
                paypalViewModel: this.updatePaymentInformation(this.currentInvoiceDetails, 'paypal')
            },
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.ngOnInit();
            }
        });
    };
    InvoiceDetailsComponent.prototype.updatePaymentInformation = function (invoice, paymentMethod) {
        var claims = this.oauthService.getIdentityClaims();
        var returnViewModel;
        switch (paymentMethod) {
            case 'razorpay':
                if (claims) {
                    this.razorpayViewModel.email = claims.email;
                }
                this.razorpayViewModel.amount = invoice.balanceAmount;
                this.razorpayViewModel.mobilenumber = invoice.mobileNumber;
                this.razorpayViewModel.currency = this.currency;
                this.razorpayViewModel.invoiceNumber = invoice.invoiceNumber;
                this.razorpayViewModel.receipt = invoice.invoiceNumber;
                returnViewModel = this.razorpayViewModel;
                break;
            case 'paypal':
                this.paypalViewModel.intent = 'CAPTURE';
                this.paypalViewModel.invoiceNumber = invoice.invoiceNumber;
                this.paypalViewModel.purchase_units = [{
                        amount: {
                            currency_code: this.currency,
                            value: invoice.balanceAmount
                        }
                    }];
                this.paypalViewModel.payer = {
                    email_address: claims.email
                };
                returnViewModel = this.paypalViewModel;
                break;
        }
        return returnViewModel;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InvoiceDetailsComponent.prototype, "aForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InvoiceDetailsComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('adjustmentTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], InvoiceDetailsComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('isCancel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], InvoiceDetailsComponent.prototype, "customTemplates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('adjAmount'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], InvoiceDetailsComponent.prototype, "adjAmount", void 0);
    InvoiceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-details',
            template: __webpack_require__(/*! ./invoice-details.component.html */ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.html"),
            providers: [app_service_online_payments_online_payment_service__WEBPACK_IMPORTED_MODULE_14__["OnlinePaymentService"]],
            styles: [__webpack_require__(/*! ./invoice-details.component.scss */ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_9__["StudentDBService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_12__["PaymentCorrectionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"], app_service_online_payments_online_payment_service__WEBPACK_IMPORTED_MODULE_14__["OnlinePaymentService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_15__["OAuthService"]])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-finance-invoice-invoice-module~app-modules-student-student-module.js.map