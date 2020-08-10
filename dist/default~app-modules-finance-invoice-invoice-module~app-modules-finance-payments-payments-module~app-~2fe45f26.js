(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-finance-invoice-invoice-module~app-modules-finance-payments-payments-module~app-~2fe45f26"],{

/***/ "./src/app/modules/finance/payments/payment-details/payment-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payment-details/payment-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-af-details [keyValues]=\"studentBasicDataView\" [title]=\"'Student Information'\" [isBackButtonRequired]=true\n  [header]=\"'Payment Details'\" id=\"payment-details\" [infoKey]=\"'Payment Details'\">\n</app-af-details>\n<span *ngIf=\"isCorrection\">\n  <app-add-edit-payment-correction [isAddCorrection]=\"isAddCorrection\" [paymentId]=\"paymentId\"\n    [paymentCorrectionId]=\"paymentCorrectionId\">\n  </app-add-edit-payment-correction>\n</span>\n<app-af-details [keyValues]=\"paymentDetails\" [title]=\"'Payment Information'\" [actions]=\"actions\"\n  (action)=operations($event)></app-af-details>\n<ng-container>\n\n  <ng-container *ngIf=\"paymentCorrectionDetails.length\">\n    <app-af-details [keyValues]=\"paymentCorrectionDetails\" [title]=\"'Pending Payment Correction'\"\n      [actions]=\"paymentCorrectionActions\" (action)=operations($event)></app-af-details>\n  </ng-container>\n\n  <app-table [settings]=\"settingTableData\" (rowBasedAction)='onRowActions($event)'>\n  </app-table>\n\n\n  <ng-template #approveRejectTemplate>\n    <div *ngIf=\"!isPaymentLink\" fxLayout=\"column\">\n      <form [formGroup]=\"paymentUpdateForm\" fxLayout=\"column\">\n      <mat-label *ngIf=\"paymentCorrectionStatusModel.isApprove && !isCancelled\" translate>Please Confirm to Approve\n        Payment Correction</mat-label>\n      <mat-label *ngIf=\"!paymentCorrectionStatusModel.isApprove && !isCancelled\" translate>Please Confirm to Reject\n        Payment Correction</mat-label>\n      <mat-label *ngIf=\"isCancelled\" translate>Please Confirm to Cancel Payment Correction</mat-label>\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pt-4\">\n        <mat-label #reasons translate>Reason</mat-label>\n        <textarea matInput [(ngModel)]=\"reason\" formControlName=\"reason\" (keyup)=\"preventSpace($event,'paymentUpdateForm','reason')\"\n        (blur)=\"trimTextBoxSpaces('paymentUpdateForm','reason')\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        <mat-error>\n          <app-validation [labelName]=\"reasons.innerText\" [validationControl]=\"paymentUpdateForm.controls.reason\"\n            [doValidate]=\"isFormValidated\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button type=\"button\" mat-raised-button class=\"mr-16 text-uppercase\"\n              (click)=\"closePaymentConfirmationForm()\">{{'Cancel' | translate}}</button>\n            \n            <button type=\"submit\" mat-raised-button color=\"accent\" class=\"text-uppercase\" (click)=\"approveRejectPaymentCorrection()\"\n              translate>{{(paymentCorrectionStatusModel.isApprove ? 'Approve': isCancelled ? 'Submit' :'Reject') | translate}}</button>\n          </div>\n        </div>\n      </div>\n      </form>\n    </div>\n    <div *ngIf=\"isPaymentLink\" fxLayout=\"column\">\n      <div translate>Operation Successful - Payment Correction has been Approved. Please  \n        <a (click)=\"newPage()\" class=\"cursor-pointer\">Click Here</a> to go to the Corrected Payment Details page</div>\n      <div fxLayoutAlign=\"end center\" class=\"mt-12\">\n        <button type=\"button\" mat-raised-button class=\"mr-16 text-uppercase\"\n        (click)=\"closeDialog();\">{{'Close' | translate}}</button>\n      </div>\n   \n    </div>\n  </ng-template>\n  <ng-template #paymentTemplate>\n    <form [formGroup]=\"paymentUpdateForm\" (ngSubmit)=\"updatePayment(paymentUpdateForm)\" fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div class=\"font-size-18 pb-4\">{{isPaymentConfirmed ? 'Confirm Pending Payment': 'Fail Pending Payment' | translate}} </div>\n      </div>\n      <ng-container *ngIf=\"isPaymentConfirmed\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"34\" fxFlex=\"100\" class=\"icon-center\">\n          <mat-label #date translate>realizedDate</mat-label>\n          <input matInput (keyup)=\"forceValidation('realizedDate',paymentUpdateForm)\" [matDatepicker]=\"start_date\"\n            required formControlName=\"realizedDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"start_date\"></mat-datepicker-toggle>\n          <mat-datepicker #start_date></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]=\"date.innerText\" [validationControl]=\"paymentUpdateForm.controls.realizedDate\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #referenceNumber translate>Reference Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'paymentUpdateForm','referenceNumber')\" (blur)=\"trimTextBoxSpaces('paymentUpdateForm','referenceNumber')\" formControlName=\"referenceNumber\" matInput required autocomplete=\"off\">\n          <mat-error>\n            <app-validation [labelName]='referenceNumber.innerText'\n              [validationControl]=\"paymentUpdateForm.controls.referenceNumber\" [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </ng-container>\n\n\n      <mat-form-field appearance=\"outline\" *ngIf=\"!isPaymentConfirmed\">\n        <mat-label #additionalInformation translate>Additional Information</mat-label>\n        <textarea matInput placeholder=\"Additional Information\" formControlName=\"additionalInformation\"\n          (keyup)=\"preventSpace($event,'paymentUpdateForm','additionalInformation')\" (blur)=\"trimTextBoxSpaces('paymentUpdateForm','additionalInformation')\"></textarea>\n        <mat-error>\n          <app-validation [labelName]='additionalInformation.innerText'\n            [validationControl]=\"paymentUpdateForm.controls.additionalInformation\" [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pt-20\">\n        <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button type=\"button\" mat-raised-button class=\"mr-16\"\n              (click)=\"closePaymentConfirmationForm()\">{{'Cancel' | translate}}</button>\n            <button type=\"submit\" mat-raised-button color=\"accent\" translate>{{'Submit' | translate}}</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/modules/finance/payments/payment-details/payment-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payment-details/payment-details.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9wYXltZW50cy9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/finance/payments/payment-details/payment-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payment-details/payment-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function() { return PaymentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");














var PaymentDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentDetailsComponent, _super);
    function PaymentDetailsComponent(route, paymentService, commonService, paymentCorrectionService, _fb, dialog, router, snackBar, sanitizer, storeService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.paymentService = paymentService;
        _this.commonService = commonService;
        _this.paymentCorrectionService = paymentCorrectionService;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.sanitizer = sanitizer;
        _this.storeService = storeService;
        _this.paymentDetails = [];
        _this.paymentCorrectionDetails = [];
        _this.studentBasicDataView = [];
        _this.actions = [];
        _this.paymentCorrectionActions = [];
        _this.isCorrection = false;
        _this.controls = {
            referenceNumber: null,
            realizedDate: null
        };
        _this.fromParent = false;
        _this.responseSubscription = _this.paymentCorrectionService.getCorrectionResponse().subscribe(function (res) {
            if (res.response) {
                _this.isCorrection = false;
                _this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].HIDE);
                if (_this.paymentId) {
                    _this.getPaymentDetails(_this.paymentId);
                }
            }
        });
        _this.clearSubscription = _this.commonService.isCorrectionClear().subscribe(function (res) {
            if (!res.isClear) {
                _this.isCorrection = res.isClear;
            }
        });
        return _this;
    }
    PaymentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentUpdateForm = this._fb.group({
            isConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            additionalInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(135)]),
            referenceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]),
            realizedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(135)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
        });
        this.columns = [
            { field: 'feeTerm', header: 'Fee Term', sort: false },
            { field: 'class', header: 'Class', sort: false },
            { field: 'section', header: 'Section', sort: false },
            { field: 'invoiceNumber', header: 'Invoice Number', sort: false },
            { field: 'invoiceDate', header: 'Invoice Date', sort: false },
            { field: 'issueDate', header: 'Issue Date', sort: false },
            { field: 'dueDate', header: 'Due Date', sort: false },
            { field: 'invoiceAmount', header: 'Invoice Amount', sort: false },
            { field: 'adjustments', header: 'Adjustments', sort: false },
            { field: 'paymentAmount', header: 'Payment Amount', sort: false },
            { field: 'dueAmount', header: 'Due Amount', sort: false },
            { field: 'status', header: 'Status', sort: false },
            { field: 'view', header: 'Actions ', sort: false }
        ];
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.getPaymentDetails(params.id);
            }
        });
        this.paymentCorrectionStatusModel = {
            id: '',
            reason: '',
            isApprove: false
        };
        this.cancelPaymentCorrectionModel = {
            id: '',
            reason: '',
        };
    };
    PaymentDetailsComponent.prototype.getPaymentDetails = function (paymenyId) {
        var _this = this;
        this.paymentId = paymenyId;
        this.paymentService.paymentDetailsById(paymenyId).subscribe(function (response) {
            _this.bindResponseData(response);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentDetailsComponent.prototype.bindResponseData = function (response) {
        this.paymentDetailsResponse = response;
        response.studentDetails.dateOfBirth = this.getFormattedDateBySchoolDateFormat(response.studentDetails.dateOfBirth);
        this.studentBasicDataView = this.getKeyValuesOfObject(response.studentDetails);
        this.returnFileName = response.paymentDetails.attachmentName != null ? 'Receipt_' + response.paymentDetails.receiptNumber
            + '_' + response.studentDetails.name + '_' + new Date().toLocaleDateString() + '.pdf' : null;
        this.attachmentName = response.paymentDetails.attachmentName != null ? response.paymentDetails.attachmentName : null;
        response.paymentDetails.paymentDate = this.getFormattedDateBySchoolDateFormat(response.paymentDetails.paymentDate);
        response.paymentDetails.lastUpdatedDate = response.paymentDetails.lastUpdatedDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.lastUpdatedDate) : null;
        response.paymentDetails.realizedDate = response.paymentDetails.realizedDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.realizedDate) : null;
        response.paymentDetails.chequeDate = response.paymentDetails.chequeDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.chequeDate) : null;
        this.chequeDate = response.paymentDetails.chequeDate;
        response.paymentDetails.amountTowardsInvoices = this.getFormattedCurrency(response.paymentDetails.amountTowardsInvoices);
        response.paymentDetails.paymentAmount = this.getFormattedCurrency(response.paymentDetails.paymentAmount);
        response.paymentDetails.excessAmount = this.getFormattedCurrency(response.paymentDetails.excessAmount);
        this.paymentDetails = this.getKeyValuesOfObject(response.paymentDetails).filter(function (x) { return x.Label !== 'id' && x.Label !== 'attachmentName'; });
        this.paymentCorrectionDetails = [];
        if (response.correctionPaymentDetails) {
            response.correctionPaymentDetails.paymentDate = response.correctionPaymentDetails.paymentDate
                ? this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.paymentDate)
                : null;
            response.correctionPaymentDetails.lastUpdatedDate = response.correctionPaymentDetails.lastUpdatedDate ?
                this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.lastUpdatedDate) : null;
            response.correctionPaymentDetails.chequeDate =
                response.correctionPaymentDetails.chequeDate ? this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.chequeDate) : null;
            response.correctionPaymentDetails.paymentAmount = this.getFormattedCurrency(response.correctionPaymentDetails.paymentAmount);
            response.correctionPaymentDetails.amountTowardsInvoices = this.getFormattedCurrency(response.correctionPaymentDetails.amountTowardsInvoices);
            response.correctionPaymentDetails.excessAmount = this.getFormattedCurrency(response.correctionPaymentDetails.excessAmount);
            this.paymentCorrectionDetails = this.getKeyValuesOfObject(response.correctionPaymentDetails)
                .filter(function (x) { return x.Label !== 'id'; });
            this.paymentCorrectionDetails.forEach(function (x) { return x.Label = (x.Label === 'paymentStatus' ? 'Correction Status' : x.Label); });
        }
        this.bindInvoiceTableData(response.invoices);
        this.actions = response.paymentActions;
        this.paymentCorrectionActions = response.paymentCorrectionActions;
        this.paymentCorrectionId = response.correctionPaymentDetails ? response.correctionPaymentDetails.id : null;
    };
    /**
    * manipulate response data and sets to app-table
    * @param
    */
    PaymentDetailsComponent.prototype.bindInvoiceTableData = function (invoices) {
        var _this = this;
        if (!invoices) {
            this.rows = [];
        }
        else {
            this.rows = invoices;
            this.rows.forEach(function (element) {
                element.paymentAmount = _this.getFormattedCurrency(element.paymentAmount);
                element.adjustments = (element.adjustments === 0 || element.adjustments === null) ? element.adjustments : _this.getFormattedCurrency(element.adjustments);
                element.invoiceAmount = element.invoiceAmount === 0 ? element.invoiceAmount : _this.getFormattedCurrency(element.invoiceAmount);
                element.dueAmount = element.dueAmount === 0 ? element.dueAmount : _this.getFormattedCurrency(element.dueAmount);
                element.dueDate = _this.getFormattedDateBySchoolDateFormat(element.dueDate);
                element.invoiceDate = _this.getFormattedDateBySchoolDateFormat(element.invoiceDate);
                element.issueDate = _this.getFormattedDateBySchoolDateFormat(element.issueDate);
            });
        }
        /**
        * sets data to app-table component
        */
        this.settingTableData = {
            rows: this.rows,
            columns: this.columns,
            tablename: 'Invoices Associated With The Payment',
            componentName: this.currentComponent,
            hideHeader: true,
        };
    };
    PaymentDetailsComponent.prototype.openPopup = function () {
        this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
            disableClose: true,
            width: '500px',
            data: { template: this.customTemplate },
        });
    };
    PaymentDetailsComponent.prototype.operations = function (action) {
        this.paymentUpdateForm.reset();
        this.reason = '';
        this.paymentCorrectionStatusModel.id = this.paymentCorrectionId;
        this.isPaymentLink = false;
        switch (action) {
            case 'Correction':
                this.isAddCorrection = true;
                this.isCorrection = true;
                this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].SHOW);
                break;
            case 'Edit Correction':
                this.isCorrection = true;
                this.isAddCorrection = false;
                this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].SHOW);
                break;
            case 'Approve Correction':
                this.openPopup();
                this.paymentCorrectionStatusModel.isApprove = true;
                this.isCancelled = false;
                break;
            case 'Reject Correction':
                this.openPopup();
                this.paymentCorrectionStatusModel.isApprove = false;
                this.isCancelled = false;
                break;
            case 'Cancel Correction':
                this.openPopup();
                this.paymentCorrectionStatusModel.isApprove = false;
                this.isCancelled = true;
                this.isAddCorrection = false;
                break;
            case 'Fail Payment':
                this.isPaymentConfirmed = false;
                this.buildFormGroup();
                break;
            case 'Confirm Payment':
                this.isPaymentConfirmed = true;
                this.buildFormGroup();
                break;
            case 'Download Receipt':
                this.downloadReceipt(this.attachmentName);
                break;
        }
    };
    PaymentDetailsComponent.prototype.downloadReceipt = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var a, response, responseData, file;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data !== null)) return [3 /*break*/, 3];
                        this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data));
                        a = document.createElement('a');
                        return [4 /*yield*/, fetch(this.storeService.getFilePath(data))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        responseData = _a.sent();
                        file = new Blob([responseData], { type: 'application/octet-stream' });
                        a.href = URL.createObjectURL(file);
                        a.download = this.returnFileName.replace(' ', '_');
                        a.click();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailsComponent.prototype.onRowActions = function (action) {
        // TODO:: method to perform an action based on click
        if (this.fromParent) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["FeeModuleConfig"]._Student_Invoice_Details + action.clickedRow.invoiceId]);
        }
        else {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["FeeModuleConfig"]._Invoice_Details + action.clickedRow.invoiceId]);
        }
    };
    PaymentDetailsComponent.prototype.approveRejectPaymentCorrection = function () {
        var _this = this;
        if (this.paymentUpdateForm.controls.reason.valid) {
            if (this.isCancelled) {
                this.cancelPaymentCorrectionModel.id = this.paymentCorrectionId;
                this.cancelPaymentCorrectionModel.reason = this.reason;
                this.paymentCorrectionService.cancelPaymentCorrection(this.cancelPaymentCorrectionModel).subscribe(function (res) {
                    _this.closePaymentConfirmationForm();
                    _this.openSnackBar(res.messages.ResultMessage);
                }, function (error) {
                    _this.errorResponse(error);
                });
                this.getPaymentDetails(this.paymentId);
            }
            else {
                this.paymentCorrectionStatusModel.reason = this.reason;
                this.paymentCorrectionService.approveOrRejectCorrection(this.paymentCorrectionStatusModel).subscribe(function (res) {
                    _this.closePaymentConfirmationForm();
                    if (res.messages.ProcessedPaymentId) {
                        _this.processedPaymentId = res.messages.ProcessedPaymentId;
                        _this.isPaymentLink = true;
                        _this.openPopup();
                    }
                    else {
                        _this.openSnackBar(res.messages.ResultMessage);
                        _this.getPaymentDetails(_this.paymentId);
                    }
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
        else {
            this.isFormValidated = true;
        }
        this.scrollIntoViewById('payment-details');
    };
    PaymentDetailsComponent.prototype.newPage = function () {
        this.getPaymentDetails(this.processedPaymentId);
        this.closePaymentConfirmationForm();
    };
    PaymentDetailsComponent.prototype.buildFormGroup = function () {
        var _this = this;
        if (!this.isPaymentConfirmed) {
            Object.keys(this.controls).forEach(function (control) {
                _this.paymentUpdateForm.get(control).clearValidators();
                _this.paymentUpdateForm.get(control).updateValueAndValidity();
            });
        }
        else {
            Object.keys(this.controls).forEach(function (control) {
                _this.paymentUpdateForm.get(control).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                _this.paymentUpdateForm.get(control).updateValueAndValidity();
                if (control === 'referenceNumber') {
                    _this.paymentUpdateForm.get(control).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(45)]);
                }
            });
        }
        this.dialogBox = this.dialog.open(this.updatePaymentTemplate, {
            disableClose: true,
            width: '500px',
        });
    };
    /**
     * update payment which is of type Check/DD
     */
    PaymentDetailsComponent.prototype.updatePayment = function (form) {
        var _this = this;
        this.isFormValidated = true;
        if (this.paymentUpdateForm.valid) {
            this.paymentStatusModel = form.value;
            this.paymentStatusModel.id = this.paymentId;
            this.paymentStatusModel.isConfirm = this.isPaymentConfirmed;
            this.paymentService.updatePaymentStatus(this.paymentStatusModel).subscribe(function (response) {
                _this.closePaymentConfirmationForm();
                _this.getPaymentDetails(_this.paymentId);
                _this.openSnackBar(response.messages.ResultMessage);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    PaymentDetailsComponent.prototype.closePaymentConfirmationForm = function () {
        this.dialog.closeAll();
    };
    PaymentDetailsComponent.prototype.closeDialog = function () {
        this.closePaymentConfirmationForm();
        this.getPaymentDetails(this.paymentId);
        this.scrollIntoViewById('payment-details');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('correction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentDetailsComponent.prototype, "correctionssss", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], PaymentDetailsComponent.prototype, "updatePaymentTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('approveRejectTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], PaymentDetailsComponent.prototype, "customTemplate", void 0);
    PaymentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.component.html */ "./src/app/modules/finance/payments/payment-details/payment-details.component.html"),
            styles: [__webpack_require__(/*! ./payment-details.component.scss */ "./src/app/modules/finance/payments/payment-details/payment-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_6__["PaymentCorrectionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_13__["StoreService"]])
    ], PaymentDetailsComponent);
    return PaymentDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/payments/payment-correction.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/payments/payment-correction.service.ts ***!
  \****************************************************************/
/*! exports provided: PaymentCorrectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCorrectionService", function() { return PaymentCorrectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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








var PaymentCorrectionService = /** @class */ (function () {
    function PaymentCorrectionService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        // protected basePath = 'http://localhost:8011';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Fee;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"]();
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
    PaymentCorrectionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PaymentCorrectionService.prototype.craetePaymentCorrection = function (paymentCorrectionView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Payment_Cooreection, paymentCorrectionView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentCorrectionService.prototype.editPaymentCorrection = function (paymentCorrectionEditView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Payment_Cooreection, paymentCorrectionEditView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentCorrectionService.prototype.paymentCorrectionDetails = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Payment_Cooreection, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentCorrectionService.prototype.setCorrectionResponse = function (response) {
        this.response.next({ response: response });
    };
    PaymentCorrectionService.prototype.getCorrectionResponse = function () {
        return this.response.asObservable();
    };
    PaymentCorrectionService.prototype.approveOrRejectCorrection = function (paymentCorrectionStatusModel, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Payment_ApproveOrReject, paymentCorrectionStatusModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentCorrectionService.prototype.cancelPaymentCorrection = function (cancelPaymentCorrectionModel, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["FeeModuleConfig"]._Payment_Cancel, cancelPaymentCorrectionModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentCorrectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], PaymentCorrectionService);
    return PaymentCorrectionService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-finance-invoice-invoice-module~app-modules-finance-payments-payments-module~app-~2fe45f26.js.map