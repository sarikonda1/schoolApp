(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-finance-invoice-invoice-module~app-modules-finance-payments-payments-module"],{

/***/ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-af-payments (outPutValue)=\"onSubmit($event)\" [buttonName]=\"buttonName\" [inputData]=\"inputData\" [isRefNumberRequired]=\"true\">\n </app-af-payments>"

/***/ }),

/***/ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9wYXltZW50cy9hZGQtZWRpdC1wYXltZW50LWNvcnJlY3Rpb24vYWRkLWVkaXQtcGF5bWVudC1jb3JyZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddEditPaymentCorrectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditPaymentCorrectionComponent", function() { return AddEditPaymentCorrectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");








var AddEditPaymentCorrectionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddEditPaymentCorrectionComponent, _super);
    function AddEditPaymentCorrectionComponent(paymentCorrectionService, commonService, paymentService, snackBar) {
        var _this = _super.call(this) || this;
        _this.paymentCorrectionService = paymentCorrectionService;
        _this.commonService = commonService;
        _this.paymentService = paymentService;
        _this.snackBar = snackBar;
        _this.buttonName = 'Submit';
        return _this;
    }
    AddEditPaymentCorrectionComponent.prototype.ngOnInit = function () {
        this.paymentCorrectionId ? this.getPaymentCorrection() : this.getPayment();
    };
    AddEditPaymentCorrectionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form) {
            this.isAddCorrection ? (this.addView = form,
                this.addView.correctionDate = (typeof form.paymentDate) === 'string' ? form.paymentDate : form.paymentDate
                    .format(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN), this.addView.correctionPaymentId = this.paymentId, this.paymentCorrectionService.craetePaymentCorrection(this.addView)
                .subscribe(function (res) {
                _this.response(res);
            }, function (error) {
                _this.errorResponse(error);
            })) : (this.editView = form,
                this.editView.id = this.paymentCorrectionId,
                this.editView.correctionDate = (typeof form.paymentDate) === 'string' ? form.paymentDate : form.paymentDate
                    .format(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_DATE_PATTERN),
                this.paymentCorrectionService.editPaymentCorrection(this.editView)
                    .subscribe(function (res) {
                    _this.response(res);
                }, function (error) {
                    _this.errorResponse(error);
                }));
        }
    };
    AddEditPaymentCorrectionComponent.prototype.response = function (response) {
        this.buttonName = 'Submit';
        this.paymentCorrectionService.setCorrectionResponse(true);
        this.openSnackBar(response.messages.ResultMessage);
    };
    AddEditPaymentCorrectionComponent.prototype.getPaymentCorrection = function () {
        var _this = this;
        this.paymentCorrectionService.paymentCorrectionDetails(this.paymentCorrectionId).subscribe(function (res) {
            _this.inputData = res;
        }, function (error) {
            _this.errorResponse(error);
        });
        this.buttonName = 'Upadte';
    };
    AddEditPaymentCorrectionComponent.prototype.getPayment = function () {
        var _this = this;
        this.paymentService.getPaymentDetail(this.paymentId).subscribe(function (res) {
            _this.inputData = res;
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditPaymentCorrectionComponent.prototype, "paymentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditPaymentCorrectionComponent.prototype, "paymentCorrectionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditPaymentCorrectionComponent.prototype, "isAddCorrection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditPaymentCorrectionComponent.prototype, "submitResponse", void 0);
    AddEditPaymentCorrectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-payment-correction',
            template: __webpack_require__(/*! ./add-edit-payment-correction.component.html */ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-payment-correction.component.scss */ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_2__["PaymentCorrectionService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AddEditPaymentCorrectionComponent);
    return AddEditPaymentCorrectionComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/finance/payments/add-payments/add-payments.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-payments/add-payments.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 py-sm-24\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>New Payment</div>\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20\" fxLayout=\"column\" *ngIf=\"searchStudent\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-20\">\n      <div class=\"font-size-18\" translate>Select Student to Process the Payment</div>\n      <div>\n        <button mat-raised-button color=\"primary\" class=\"text-uppercase mr-4\" (click)=\"backButtonClick()\"><span translate>Back</span></button>\n        <button mat-button (click)=\"getHelpText('Payments')\">\n          <mat-icon>info</mat-icon>\n        </button>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <form [formGroup]=\"paymentForm\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-sm-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n          <mat-label #studentId translate>Search Student Name</mat-label>\n          <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentName\"\n            aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n          <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n          <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\"\n            (optionSelected)='getSelectedStudent($event.option.value.id)'>\n            <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n              <!-- {{option.studentName}}\n              <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} {{option.admissionNumber}}</span> -->\n              {{option.studentName}}\n              <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} {{option.admissionNumber}}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n    </form>\n  </div>\n</div>\n<app-custom-card *ngIf=\"paymentForm.value.studentName && notFound\" [inputMessage]=\"'No Records Found'\">\n</app-custom-card>\n<div *ngIf=\"paymentView\">\n  <app-af-details [keyValues]=\"studentDetails\" [title]=\"'Student Information'\" [isBackButtonRequired]= 'isBackButtonRequired'>\n  </app-af-details>\n  <app-af-payments (outPutValue)='savePayment($event)' [isRefNumberRequired]=\"true\"></app-af-payments>\n</div>"

/***/ }),

/***/ "./src/app/modules/finance/payments/add-payments/add-payments.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-payments/add-payments.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9wYXltZW50cy9hZGQtcGF5bWVudHMvYWRkLXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/finance/payments/add-payments/add-payments.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/finance/payments/add-payments/add-payments.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentsComponent", function() { return AddPaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");














var AddPaymentsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddPaymentsComponent, _super);
    function AddPaymentsComponent(studentDbService, router, invoiceService, dialog, paymentCorrectionService, route, cd, studentService, commonService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.studentDbService = studentDbService;
        _this.router = router;
        _this.invoiceService = invoiceService;
        _this.dialog = dialog;
        _this.paymentCorrectionService = paymentCorrectionService;
        _this.route = route;
        _this.cd = cd;
        _this.studentService = studentService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.filterdStudents = [];
        _this.studentDetails = [];
        _this.invoiceIds = [];
        _this.searchStudent = true;
        _this.componentName = 'PaymentsComponent';
        _this.clearSubscription = _this.commonService.isCorrectionClear().subscribe(function (res) {
            if (!res.isClear) {
                _this.paymentView = res.isClear;
                _this.initializeForm();
            }
        });
        return _this;
    }
    AddPaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterdStudents = [];
        this.invoiceIds = [];
        this.initializeForm();
        this.searchStudent = true;
        this.route.params.subscribe(function (params) {
            if (params.invoiceId && params.studentId) {
                _this.invoiceIds.push(params.invoiceId);
                _this.studentId = params.studentId;
                _this.searchStudent = false;
                _this.isBackButtonRequired = true;
                _this.getSelectedStudent(_this.studentId);
            }
            else {
                var data = _this.getModelComponent(_this.componentName);
                if (data.academicSessionId) {
                    _this.academicSessionId = data.academicSessionId;
                }
                else {
                    _this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["FeeModuleConfig"]._Payments]);
                }
            }
        });
    };
    AddPaymentsComponent.prototype.initializeForm = function () {
        var _this = this;
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.paymentForm.valueChanges.debounceTime(200).subscribe(function (form) {
            form.studentName = typeof (form.studentName) === 'string' ? form.studentName.trim() : form.studentName;
            if (form.studentName !== null && form.studentName.length >= 3) {
                if (_this.paymentForm.valid && typeof _this.paymentForm.value.studentName !== 'object') {
                    _this.studentService.studentNamesBaseOnAcademicSession(_this.academicSessionId, null, null, null, _this.paymentForm.value.studentName).
                        subscribe(function (res) {
                        if (res.studentsList.length > 0) {
                            _this.notFound = false;
                            _this.paymentView = false;
                            _this.filterdStudents = res.studentsList;
                        }
                        else {
                            _this.studentDetails = [];
                            _this.filterdStudents = [];
                            _this.paymentView = false;
                            _this.notFound = true;
                        }
                        _this.cd.detectChanges();
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            }
            else {
                _this.filterdStudents = [];
                _this.notFound = false;
                _this.paymentView = false;
            }
        });
    };
    AddPaymentsComponent.prototype.getSelectedStudent = function (value) {
        var _this = this;
        this.studentDetails = [];
        this.studentData = value;
        this.studentDbService.studentDetails(this.studentData).subscribe(function (data) {
            if (data != null) {
                _this.notFound = false;
                data.resultModel.dateOfBirth = _this.getFormattedDateBySchoolDateFormat(data.resultModel.dateOfBirth);
                _this.studentDetails = _this.getKeyValuesOfObject(data.resultModel);
                _this.paymentView = true;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddPaymentsComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    AddPaymentsComponent.prototype.savePayment = function (paymentForm) {
        var _this = this;
        paymentForm.studentId = this.studentData;
        paymentForm.invoiceIds = this.invoiceIds;
        paymentForm.schoolAcademicSessionId = this.academicSessionId;
        this.paymentViewModel = paymentForm;
        this.invoiceService.createPayment(this.paymentViewModel).subscribe(function (data) {
            _this.openSnackBar(data.messages.ResultMessage);
            _this.dialog.closeAll();
        }, function (error) {
            _this.errorResponse(error);
        });
        this.paymentCorrectionService.setCorrectionResponse(true);
    };
    AddPaymentsComponent.prototype.backButtonClick = function () {
        this.back();
    };
    AddPaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-payments',
            template: __webpack_require__(/*! ./add-payments.component.html */ "./src/app/modules/finance/payments/add-payments/add-payments.component.html"),
            providers: [app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_3__["StudentDBService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"], app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_6__["FeeTypeService"]],
            styles: [__webpack_require__(/*! ./add-payments.component.scss */ "./src/app/modules/finance/payments/add-payments/add-payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_3__["StudentDBService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_9__["PaymentCorrectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_11__["StudentDatabaseService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]])
    ], AddPaymentsComponent);
    return AddPaymentsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/finance/payments/af-payments/af-payments.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/finance/payments/af-payments/af-payments.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 py-sm-12\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'-55px'}}\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20\"\n    [ngClass]=\"{'remove-overlay' : showOverLay == 'show'}\">\n    <form [formGroup]=\"paymentForm\" (ngSubmit)=\"submit()\" fxLayout=\"column\" class=\"p-24\" #paymentsForm=\"ngForm\">\n      <div fxLayoutAlign=\"end center\">\n        <button mat-icon-button type=\"button\" (click)=\"close()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxFlex=\"100\" class=\"pt-12\">\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-16 icon-center pb-12\">\n          <mat-label #recepDate translate>Payment Date</mat-label>\n          <input autofocus #correction matInput [matDatepicker]=\"fromDatePicker\"\n            (keyup)=\"forceValidation('paymentDate', paymentForm)\" required formControlName=\"paymentDate\" />\n          <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #fromDatePicker></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]=\"recepDate.innerText\" [validationControl]=\"paymentForm.controls.paymentDate\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-16 pb-12\">\n          <mat-label #paymentTypeId translate>Payment Type</mat-label>\n          <mat-select formControlName=\"typeCode\" required (selectionChange)=\"paymentTypeSelection($event.value)\">\n            <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.code\">\n              {{ paymentTypes.name }}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"paymentTypeId.innerText\" [validationControl]=\"paymentForm.controls.typeCode\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-16 pb-12\" fxLayout=\"column\" fxFlex.gt-sm=\"25\"\n          fxFlex=\"100\">\n          <mat-label #amount translate>Amount</mat-label>\n          <input (keyup)=\"preventSpace($event,'paymentForm','amount')\" required matInput formControlName=\"amount\"\n            autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('paymentForm','amount')\" />\n          <mat-error>\n            <app-validation [labelName]=\"amount.innerText\" [validationControl]=\"paymentForm.controls.amount\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field *ngIf=\"isRefNumberRequired && showReferenceNumber(paymentForm.value?.typeCode)\" fxFlexFill\n          appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"pb-12\">\n          <mat-label #referenceNumber translate>Reference Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'paymentForm','referenceNumber')\" matInput\n            formControlName=\"referenceNumber\" autocomplete=\"off\"\n            (blur)=\"trimTextBoxSpaces('paymentForm','referenceNumber')\" />\n          <mat-error>\n            <app-validation [labelName]=\"referenceNumber.innerText\"\n              [validationControl]=\"paymentForm.controls.referenceNumber\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"pr-sm-16 pb-12\">\n          <mat-label #feeAccountId translate>Fee Account</mat-label>\n          <mat-select formControlName=\"feeAccountId\" required>\n            <mat-option *ngFor=\"let feeAccounts of feeAccountList\" [value]=\"feeAccounts.id\">\n              {{ feeAccounts.name }}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"feeAccountId.innerText\" [validationControl]=\"paymentForm.controls.feeAccountId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <ng-container *ngIf=\"chequeView\">\n          <!-- <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-12\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'-25px'}}\"> -->\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-16 icon-center pb-12\">\n            <mat-label #chequeDate translate>chequeDate</mat-label>\n            <input matInput [matDatepicker]=\"chequeDatePicker\" (keyup)=\"forceValidation('chequeDate', paymentForm)\"\n              required formControlName=\"chequeDate\" />\n            <mat-datepicker-toggle matSuffix [for]=\"chequeDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #chequeDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]=\"chequeDate.innerText\" [validationControl]=\"paymentForm.controls.chequeDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-16 pb-12\" fxLayout=\"column\" fxFlex.gt-sm=\"25\"\n            fxFlex=\"100\">\n            <mat-label #chequeNumber translate>chequeNumber</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','chequeNumber')\" required matInput\n              formControlName=\"chequeNumber\" (blur)=\"trimTextBoxSpaces('paymentForm','chequeNumber')\"\n              autocomplete=\"off\" />\n            <mat-error>\n              <app-validation [labelName]=\"chequeNumber.innerText\"\n                [validationControl]=\"paymentForm.controls.chequeNumber\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"pb-12\">\n            <mat-label #ifscCode translate>Bank IFSC Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','checkIssueBankIFSC')\" required matInput\n              formControlName=\"checkIssueBankIFSC\" autocomplete=\"off\"\n              (blur)=\"trimTextBoxSpaces('paymentForm','checkIssueBankIFSC')\" />\n            <mat-error>\n              <app-validation [labelName]=\"ifscCode.innerText\"\n                [validationControl]=\"paymentForm.controls.checkIssueBankIFSC\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <!-- </div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-12\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'-25px'}}\"> -->\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\"\n            class=\"pr-sm-16 pb-12\">\n            <mat-label #bankName translate>bankName</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','chequeIssueBankName')\" required matInput\n              formControlName=\"chequeIssueBankName\" autocomplete=\"off\"\n              (blur)=\"trimTextBoxSpaces('paymentForm','chequeIssueBankName')\" />\n            <mat-error>\n              <app-validation [labelName]=\"bankName.innerText\"\n                [validationControl]=\"paymentForm.controls.chequeIssueBankName\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"pb-12\">\n            <mat-label #bankBranch translate>branchName</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','chequeIssueBankBranch')\" required matInput\n              formControlName=\"chequeIssueBankBranch\" autocomplete=\"off\"\n              (blur)=\"trimTextBoxSpaces('paymentForm','chequeIssueBankBranch')\" />\n            <mat-error>\n              <app-validation [labelName]=\"bankBranch.innerText\"\n                [validationControl]=\"paymentForm.controls.chequeIssueBankBranch\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <!-- </div> -->\n        </ng-container>\n        <ng-container *ngIf=\"cardView\">\n          <!-- <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-12\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'-25px'}}\"> -->\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n            class=\"pr-sm-16 pb-12\">\n            <mat-label #cardTypeId translate>Card Type</mat-label>\n            <mat-select formControlName=\"cardTypeId\" required>\n              <mat-option *ngFor=\"let cardTypes of cardTypesList\" [value]=\"cardTypes.id\">\n                {{ cardTypes.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"cardTypeId.innerText\" [validationControl]=\"paymentForm.controls.cardTypeId\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-16 pb-12\" fxLayout=\"column\" fxFlex.gt-sm=\"25\"\n            fxFlex=\"100\">\n            <mat-label #cardNumber translate>Card Last 4 Digits</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','cardNumber')\" required matInput\n              formControlName=\"cardNumber\" autocomplete=\"off\" (blur)=\"trimTextBoxSpaces('paymentForm','cardNumber')\" />\n            <mat-error>\n              <app-validation [labelName]=\"cardNumber.innerText\" [validationControl]=\"paymentForm.controls.cardNumber\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"pb-12\">\n            <mat-label #authorizationCode translate>Authorization Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','authorizationCode')\" required matInput\n              formControlName=\"authorizationCode\" autocomplete=\"off\"\n              (blur)=\"trimTextBoxSpaces('paymentForm','authorizationCode')\" />\n            <mat-error>\n              <app-validation [labelName]=\"authorizationCode.innerText\"\n                [validationControl]=\"paymentForm.controls.authorizationCode\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"pb-12 pr-sm-16\">\n            <mat-label #transactionId translate>Transaction ID</mat-label>\n            <input (keyup)=\"preventSpace($event,'paymentForm','transactionNumber')\" required matInput\n              formControlName=\"transactionNumber\" autocomplete=\"off\"\n              (blur)=\"trimTextBoxSpaces('paymentForm','transactionNumber')\" />\n            <mat-error>\n              <app-validation [labelName]=\"transactionId.innerText\"\n                [validationControl]=\"paymentForm.controls.transactionNumber\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <!-- </div> -->\n        </ng-container>\n      </div>\n\n\n\n\n      <div class=\" font-size-16\" *ngIf=\"paymentMessage\"><strong>Note </strong>: {{paymentMessage}}</div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n        <button (click)=\"clear()\" class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\">\n          {{'Clear' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{buttonName | translate}}\n        </button>\n        <!-- <button (click)=\"close()\" class=\"mr-12 text-uppercase\" mat-raised-button>\n            <span translate>Close</span>\n          </button> -->\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/finance/payments/af-payments/af-payments.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/finance/payments/af-payments/af-payments.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9wYXltZW50cy9hZi1wYXltZW50cy9hZi1wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/finance/payments/af-payments/af-payments.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/finance/payments/af-payments/af-payments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AfPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfPaymentsComponent", function() { return AfPaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var AfPaymentsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AfPaymentsComponent, _super);
    function AfPaymentsComponent(invoiceService, feeTypeService, paymentCorrection, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.invoiceService = invoiceService;
        _this.feeTypeService = feeTypeService;
        _this.paymentCorrection = paymentCorrection;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.cardView = false;
        _this.chequeView = false;
        _this.validate = true;
        _this.cardControls = {
            cardNumber: null,
            cardTypeId: null,
            transactionNumber: null,
            authorizationCode: null,
        };
        _this.checkControls = {
            chequeNumber: null,
            chequeDate: null,
            chequeIssueBankName: null,
            checkIssueBankIFSC: null,
            chequeIssueBankBranch: null
        };
        _this.isAddForm = true;
        _this.outPutValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.buttonName = 'Submit';
        _this.isRefNumberRequired = false;
        _this.isCorrection = true;
        _this.showOverLay = '';
        _this.responseSubscription = _this.paymentCorrection.getCorrectionResponse().subscribe(function (res) {
            if (res.response && _this.paymentForm && _this.paymentsForm) {
                _this.paymentForm.reset();
                _this.paymentsForm.resetForm();
            }
        });
        _this.subscription = _this.commonService.getOverlay().subscribe(function (res) {
            if (res.overLay) {
                _this.showOverLay = res.overLay;
            }
        });
        return _this;
    }
    AfPaymentsComponent.prototype.ngOnInit = function () {
        this.paymentTypes();
        this.feeAccounts();
        this.cardTypes();
        this.initializeForm();
        this.setForm();
        this.correction.nativeElement.focus();
    };
    AfPaymentsComponent.prototype.ngOnChanges = function () {
        this.initializeForm();
        this.setForm();
        this.correction.nativeElement.focus();
    };
    AfPaymentsComponent.prototype.initializeForm = function () {
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            typeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            paymentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            feeAccountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999.99)]),
            referenceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45))
        });
    };
    AfPaymentsComponent.prototype.setForm = function () {
        if (this.inputData) {
            this.inputData.typeCode === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CARD ? (this.cardView = true,
                this.addCardControls()) : this.inputData.typeCode === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CHECK ? (this.chequeView = true, this.addChequeControls()) :
                this.chequeView = false;
            this.paymentForm.patchValue(this.inputData);
            this.paymentForm.controls['paymentDate'].setValue(this.inputData.correctionDate);
        }
    };
    AfPaymentsComponent.prototype.paymentTypes = function () {
        var _this = this;
        this.paymentTypesList = [];
        this.invoiceService.paymentTypes().subscribe(function (data) {
            if (data.commonViewModel) {
                if (app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PARENT === _this.getTokenParam('_ut')) {
                    _this.paymentTypesList = data.commonViewModel.filter(function (e) { return e.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_ONLINE; });
                }
                else {
                    _this.paymentTypesList = data.commonViewModel;
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AfPaymentsComponent.prototype.feeAccounts = function () {
        var _this = this;
        this.feeAccountList = [];
        this.feeTypeService.getFeeAccounts().subscribe(function (data) {
            if (data) {
                _this.feeAccountList = data.commonViewModel;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AfPaymentsComponent.prototype.cardTypes = function () {
        var _this = this;
        this.cardTypesList = [];
        this.invoiceService.cardTypes().subscribe(function (data) {
            if (data.commonViewModel) {
                _this.cardTypesList = data.commonViewModel;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AfPaymentsComponent.prototype.paymentTypeSelection = function (data) {
        this.removeValidators();
        switch (data) {
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CHECK:
                this.chequeView = true;
                this.cardView = false;
                this.addChequeControls();
                break;
            case app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CARD:
                this.cardView = true;
                this.chequeView = false;
                this.addCardControls();
                break;
            default:
                this.chequeView = false;
                this.cardView = false;
                break;
        }
        if (data === app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CASH) {
            this.paymentForm.controls.referenceNumber.patchValue(null);
        }
    };
    AfPaymentsComponent.prototype.submit = function () {
        if (this.paymentForm.valid) {
            this.outPutValue.emit(this.paymentForm.value);
            this.removeValidators();
            this.chequeView = false;
            this.cardView = false;
        }
    };
    AfPaymentsComponent.prototype.removeValidators = function () {
        var _this = this;
        Object.keys(this.cardControls).forEach(function (key) {
            if (_this.paymentForm.get(key)) {
                _this.paymentForm.get(key).reset();
                _this.paymentForm.get(key).clearValidators();
                _this.paymentForm.get(key).updateValueAndValidity();
            }
        });
        Object.keys(this.checkControls).forEach(function (key) {
            if (_this.paymentForm.get(key)) {
                _this.paymentForm.get(key).reset();
                _this.paymentForm.get(key).clearValidators();
                _this.paymentForm.get(key).updateValueAndValidity();
            }
        });
    };
    AfPaymentsComponent.prototype.close = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].HIDE);
        this.paymentForm.reset();
        this.commonService.setClearCorrection(false);
    };
    AfPaymentsComponent.prototype.clear = function () {
        this.paymentForm.reset();
        this.cardView = false;
        this.chequeView = false;
    };
    AfPaymentsComponent.prototype.addCardControls = function () {
        this.paymentForm.addControl('cardNumber', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]));
        this.paymentForm.addControl('cardTypeId', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null));
        this.paymentForm.addControl('transactionNumber', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)));
        this.paymentForm.addControl('authorizationCode', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)));
    };
    AfPaymentsComponent.prototype.addChequeControls = function () {
        this.paymentForm.addControl('chequeNumber', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]));
        this.paymentForm.addControl('chequeDate', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        this.paymentForm.addControl('chequeIssueBankName', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)));
        this.paymentForm.addControl('checkIssueBankIFSC', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)));
        this.paymentForm.addControl('chequeIssueBankBranch', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)));
    };
    AfPaymentsComponent.prototype.showReferenceNumber = function (typeCode) {
        if (typeCode && typeCode !== app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAYMENT_TYPE_CASH) {
            return true;
        }
        else {
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "inputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "paymentMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "isAddForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AfPaymentsComponent.prototype, "outPutValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "paymentsForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "buttonName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AfPaymentsComponent.prototype, "isRefNumberRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('correction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AfPaymentsComponent.prototype, "correction", void 0);
    AfPaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-af-payments',
            template: __webpack_require__(/*! ./af-payments.component.html */ "./src/app/modules/finance/payments/af-payments/af-payments.component.html"),
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_9__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./af-payments.component.scss */ "./src/app/modules/finance/payments/af-payments/af-payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"],
            app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_4__["FeeTypeService"],
            app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_7__["PaymentCorrectionService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], AfPaymentsComponent);
    return AfPaymentsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/finance/payments/payments-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/finance/payments/payments-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/modules/finance/payments/payment-details/payment-details.component.ts");
/* harmony import */ var _add_payments_add_payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-payments/add-payments.component */ "./src/app/modules/finance/payments/add-payments/add-payments.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/modules/finance/payments/payments/payments.component.ts");
/* harmony import */ var _add_edit_payment_correction_add_edit_payment_correction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-payment-correction/add-edit-payment-correction.component */ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.ts");







var routes = [
    { path: 'payment-details', component: _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsComponent"], data: { title: 'payment Details' } },
    { path: 'payments/add-payments', component: _add_payments_add_payments_component__WEBPACK_IMPORTED_MODULE_4__["AddPaymentsComponent"], data: { title: 'Add Payments' } },
    { path: 'payments/payment-details/:id', component: _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsComponent"], data: { title: 'Payment Details' } },
    { path: 'add-edit-payment-correction', component: _add_edit_payment_correction_add_edit_payment_correction_component__WEBPACK_IMPORTED_MODULE_6__["AddEditPaymentCorrectionComponent"], data: { title: 'Payment Correction' } },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"], data: { title: 'Payments' } },
];
var PaymentsRoutingModule = /** @class */ (function () {
    function PaymentsRoutingModule() {
    }
    PaymentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaymentsRoutingModule);
    return PaymentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/finance/payments/payments.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/finance/payments/payments.module.ts ***!
  \*************************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/modules/finance/payments/payment-details/payment-details.component.ts");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/modules/finance/payments/payments-routing.module.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/modules/finance/payments/payments/payments.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _af_payments_af_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./af-payments/af-payments.component */ "./src/app/modules/finance/payments/af-payments/af-payments.component.ts");
/* harmony import */ var _add_edit_payment_correction_add_edit_payment_correction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-edit-payment-correction/add-edit-payment-correction.component */ "./src/app/modules/finance/payments/add-edit-payment-correction/add-edit-payment-correction.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var app_service_academic_service_api_academic_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/academic-service/api/academic-session.service */ "./src/app/service/academic-service/api/academic-session.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var _add_payments_add_payments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-payments/add-payments.component */ "./src/app/modules/finance/payments/add-payments/add-payments.component.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_service_academic_service_api_leave_request_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/service/academic-service/api/leave-request.service */ "./src/app/service/academic-service/api/leave-request.service.ts");


























var PaymentsModule = /** @class */ (function () {
    function PaymentsModule() {
    }
    PaymentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_1__["PaymentDetailsComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"], _af_payments_af_payments_component__WEBPACK_IMPORTED_MODULE_7__["AfPaymentsComponent"], _add_edit_payment_correction_add_edit_payment_correction_component__WEBPACK_IMPORTED_MODULE_8__["AddEditPaymentCorrectionComponent"], _add_payments_add_payments_component__WEBPACK_IMPORTED_MODULE_23__["AddPaymentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_6__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_13__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_14__["Ng2TelInputModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true
                },
                app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_20__["PaymentService"],
                app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__["FeeTermsService"],
                app_service_academic_service_api_academic_session_service__WEBPACK_IMPORTED_MODULE_18__["AcademicSessionService"],
                app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_19__["StatusService"],
                app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_21__["ClassesConfigService"],
                app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_22__["StudentDatabaseService"],
                app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_24__["PaymentCorrectionService"], app_service_academic_service_api_leave_request_service__WEBPACK_IMPORTED_MODULE_25__["LeaveRequestService"]
            ],
            exports: [_af_payments_af_payments_component__WEBPACK_IMPORTED_MODULE_7__["AfPaymentsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], PaymentsModule);
    return PaymentsModule;
}());



/***/ }),

/***/ "./src/app/modules/finance/payments/payments/payments.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payments/payments.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-28\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\">{{'Payments Search' | translate }}</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n        <div fxLayoutAlign=\"end center\" class=\"p-16 border-bottom\">\n            <button mat-button (click)=\"getHelpText('Payments')\">\n                <mat-icon class=\"grey-600-fg\">info</mat-icon>\n              </button>\n        </div>\n    <form [formGroup]=\"paymentSearchForm\" (ngSubmit)=\"searchPayment(paymentSearchForm.value)\" #paymentSearch=\"ngForm\"\n      class=\"p-24\">\n      <div fxFlexFill fxLayout=\"column\" class=\"pt-12\" fxLayout.gt-sm=\"row\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n          class=\"pr-sm-20\">\n          <mat-label translate #academicsession>Academic Session</mat-label>\n          <mat-select required placeholder=\"Academic Session\" formControlName=\"academicSessionId\"\n            (selectionChange)=\"academicSessionChange($event)\">\n            <mat-option *ngFor=\"let academicSession of schoolAcademicSession\" [value]=\"academicSession.value\">\n              {{ academicSession.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"academicsession.innerText\" [validationControl]=\"paymentSearchForm.controls.academicSessionId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\"\n          class=\"pr-sm-20\">\n          <mat-label translate #board>Board</mat-label>\n          <mat-select placeholder=\"Board\" formControlName=\"boardId\"\n            (selectionChange)=\"boardChange($event,paymentSearchForm.controls.academicSessionId.value)\">\n            <mat-option *ngIf=\"schoolBoards?.length\"></mat-option>\n            <mat-option *ngFor=\"let board of schoolBoards\" [value]=\"board.value\">\n              {{ board.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select placeholder=\"Class\" formControlName=\"classId\"\n            (selectionChange)=\"ClassChange($event,paymentSearchForm.controls.academicSessionId.value,paymentSearchForm.controls.boardId.value)\">\n            <mat-option *ngIf=\"classes?.length\"></mat-option>\n            <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\" class=\"pr-sm-20\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select placeholder=\"Section\" formControlName=\"sectionId\">\n            <mat-option *ngIf=\"sections?.length\"></mat-option>\n            <mat-option *ngFor=\"let section of sections\" [value]=\"section.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\">\n        <mat-label translate #feeterm>Fee Terms</mat-label>\n        <mat-select placeholder=\"Fee Terms\" formControlName=\"feetermId\">\n          <mat-option *ngIf=\"feeTerms?.length\"></mat-option>\n          <mat-option *ngFor=\"let feeTerm of feeTerms\" [value]=\"feeTerm.value\">\n            {{ feeTerm.label }}</mat-option>\n        </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"46\"\n          class=\"pr-sm-20\">\n          <input [readonly]=\"!paymentSearchForm.value.academicSessionId\" #studentName matInput placeholder=\"{{'Search Students' | translate}}\" formControlName=\"studentId\"\n            aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n          <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\"\n            (optionSelected)='getSelectedStudent($event.option.value)'>\n            <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n              {{option.studentName}}\n              <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\"\n          class=\"pr-sm-20\">\n          <mat-label translate #invoicenumber>Invoice Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'paymentSearchForm','invoiceNumber')\" matInput formControlName=\"invoiceNumber\"\n            (blur)=\"trimTextBoxSpaces('paymentSearchForm','invoiceNumber')\">\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\"\n          class=\"pr-sm-20\">\n          <mat-label translate #receiptnumber>Receipt Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'paymentSearchForm','receiptNumber')\" matInput formControlName=\"receiptNumber\"\n            (blur)=\"trimTextBoxSpaces('paymentSearchForm','receiptNumber')\">\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"18\">\n          <mat-label #section translate>Payment Status</mat-label>\n          <mat-select placeholder=\"Payment Status\" formControlName=\"statusId\">\n            <mat-option *ngIf=\"paymentStatus?.length\"></mat-option>\n            <mat-option *ngFor=\"let status of paymentStatus\" [value]=\"status.value\">\n              {{ status.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-20\">\n        <button mat-raised-button type=\"reset\" color=\"accent\" class=\"text-uppercase mr-12\" (click)=\"onClickNewpayment()\">\n          {{'New' | translate}}\n        </button>\n        <button mat-raised-button type=\"reset\" class=\"text-uppercase mr-12\" (click)=\"onClear()\">\n          {{'Clear' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase\">\n          {{'Search' | translate}}\n        </button>\n      </div>\n\n    </form>\n  </div>\n\n  <div class=\"mat-elevation-z3 simple-table-container mt-20 radius-5\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title class=\"font-size-18\" translate>Result Summary</mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-list *ngIf=\"rows?.length\" class=\"pt-0 confirm-table border my-16 mx-sm-auto\" fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"69\"\n          fxLayoutAlign=\"center center\">\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\"><span translate>Total Number of Payments</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n            <div class=\"ml-auto\">{{ totalItems }}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\" ><span translate>Total Amount Of Realized Payments</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n            <div class=\"ml-auto\"> {{ realizedPayments }}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\"><span translate>Total Amount Of Unrealized Payments</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n            <div class=\"ml-auto\"> {{ unRealizedPayments }}</div>\n          </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"75\" fxFlex=\"100\"><span translate>Total Amount Of Cancelled Payments</span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex.gt-sm=\"25\" fxFlex=\"100\">\n            <div class=\"ml-auto\"> {{ cancelledPayments }}</div>\n          </mat-list-item>\n        </mat-list>\n        <div class=\"text-center w-100-p font-size-18\" *ngIf=\"rows?.length==0\" translate>No Data Found</div>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n  </div>\n</div>\n\n<app-table *ngIf=\"!showCustomCard\" [settings]=\"tableSettings\" (getTableData)='paymentsData($event)'\n  (rowBasedAction)='onRowActions($event)' >\n</app-table>\n<app-custom-card *ngIf=\"showCustomCard\" [title]=customCardDetails.title [inputMessage]=customCardDetails.message>\n</app-custom-card>\n"

/***/ }),

/***/ "./src/app/modules/finance/payments/payments/payments.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payments/payments.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9wYXltZW50cy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/finance/payments/payments/payments.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/finance/payments/payments/payments.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/payments/payment.service */ "./src/app/service/payments/payment.service.ts");
/* harmony import */ var app_service_academic_service_api_academic_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/academic-session.service */ "./src/app/service/academic-service/api/academic-session.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/student-admissions-service/student-admission.service */ "./src/app/service/student-admissions-service/student-admission.service.ts");


















var PaymentsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentsComponent, _super);
    function PaymentsComponent(paymentService, academicSessionService, feetermService, classService, statusService, studentService, commonService, dialog, studentDetails, router, snackBar, cd) {
        var _this = _super.call(this) || this;
        _this.paymentService = paymentService;
        _this.academicSessionService = academicSessionService;
        _this.feetermService = feetermService;
        _this.classService = classService;
        _this.statusService = statusService;
        _this.studentService = studentService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.studentDetails = studentDetails;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this.schoolAcademicSession = [];
        _this.feeTerms = [];
        _this.schoolBoards = [];
        _this.classes = [];
        _this.sections = [];
        _this.filterdStudents = [];
        _this.paymentStatus = [];
        _this.currentComponent = 'PaymentsComponent';
        _this.custRowsPerPageOptions = [];
        _this.unRealizedPayments = 0;
        _this.realizedPayments = 0;
        _this.cancelledPayments = 0;
        _this.customCardDetails = { title: 'Payments', message: 'Search Payments' };
        _this.showCustomCard = true;
        _this.setColumnHeaders();
        _this.initializeSearchViewModel();
        return _this;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.getSchoolAcademicSessions();
        this.paymentStatuses();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.paymentSearchViewModel = modelTableComponent;
            this.paymentSearchForm.patchValue(modelTableComponent);
            this.paymentSearchForm.controls['academicSessionId'].setValue(this.paymentSearchViewModel.academicSessionId);
        }
        this.paymentSearchForm.controls['studentId'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.studentService.studentNamesBaseOnAcademicSession(_this.paymentSearchForm.controls['academicSessionId'].value, _this.paymentSearchForm.controls['boardId'].value, _this.paymentSearchForm.controls['classId'].value, _this.paymentSearchForm.controls['sectionId'].value, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
        if (this.paymentSearchForm.value['academicSessionId']) {
            this.rows = [];
            this.paymentList();
        }
    };
    PaymentsComponent.prototype.initializeSearchViewModel = function () {
        this.paymentSearchViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].PAGESIZE,
            academicSessionId: 0,
            feeTermId: 0,
            boardId: 0,
            classId: 0,
            sectionId: 0,
            studentId: null,
            invoiceNo: '',
            receiptNo: '',
            paymentStatusId: 0,
            admissionNo: [],
            paymentDatesBegin: null,
            paymentDatesEnd: null,
            paymentType: [],
            feeAccount: [],
            paymentAmount: [],
            invoiceAccounted: [],
            balanceAmount: [],
        };
    };
    PaymentsComponent.prototype.initializeForm = function () {
        this.paymentSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            academicSessionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            feetermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            invoiceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            receiptNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
        });
    };
    PaymentsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentname', header: 'Student Name', sort: true },
            { field: 'admissionNo', header: 'Admission No', sort: true },
            { field: 'classSection', header: 'Class&Section', sort: true },
            { field: 'paymentDate', header: 'Payment Date', sort: true },
            { field: 'receiptNo', header: 'Receipt No', sort: true },
            { field: 'paymentType', header: 'Payment Type', sort: true },
            { field: 'paymentStatus', header: 'Payment Status', sort: true },
            { field: 'feeAccount', header: 'Fee Account', sort: true },
            { field: 'paymentAmount', header: 'Payment Amount', sort: true },
            { field: 'invoiceAccounted', header: 'Invoice Accounted', sort: true },
            { field: 'balanceAmount', header: 'Balance Amount', sort: true },
            { field: 'view', header: 'Actions ', sort: false }
        ];
    };
    PaymentsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Payments',
            componentName: this.currentComponent,
            model: this.paymentSearchViewModel,
            filtersList: []
        };
    };
    PaymentsComponent.prototype.searchPayment = function (data) {
        if (this.paymentSearchForm.valid) {
            this.updateFilterViewModel();
            this.paymentList();
        }
    };
    PaymentsComponent.prototype.updateFilterViewModel = function () {
        var data = this.paymentSearchForm.value;
        this.paymentSearchViewModel.academicSessionId = data.academicSessionId;
        this.paymentSearchViewModel.feeTermId = data.feetermId;
        this.paymentSearchViewModel.boardId = data.boardId;
        this.paymentSearchViewModel.classId = data.classId;
        this.paymentSearchViewModel.sectionId = data.sectionId;
        this.paymentSearchViewModel.receiptNo = data.receiptNumber;
        if (data.studentId) {
            this.paymentSearchViewModel.studentId = data.studentId;
            this.studentId = data.studentId.id;
        }
        else {
            this.paymentSearchViewModel.studentId = null;
            this.studentId = null;
        }
        this.paymentSearchViewModel.invoiceNo = data.invoiceNumber;
        this.paymentSearchViewModel.receiptNo = data.receiptNumber;
        this.paymentSearchViewModel.paymentStatusId = data.statusId === undefined ? null : data.statusId;
    };
    PaymentsComponent.prototype.paymentList = function () {
        var _this = this;
        if (!this.studentId && this.paymentSearchViewModel.studentId) {
            this.studentId = this.paymentSearchViewModel.studentId.id;
        }
        this.setModelDataTableComponent(this.currentComponent, this.paymentSearchViewModel);
        this.setFormValues();
        this.paymentService.getPayments(this.paymentSearchViewModel.sortBy, this.paymentSearchViewModel.sortOrder, this.paymentSearchViewModel.academicSessionId, this.paymentSearchViewModel.feeTermId, this.paymentSearchViewModel.boardId, this.paymentSearchViewModel.classId, this.paymentSearchViewModel.sectionId, this.studentId, this.paymentSearchViewModel.invoiceNo, this.paymentSearchViewModel.receiptNo, this.paymentSearchViewModel.paymentStatusId, this.paymentSearchViewModel.admissionNo, this.paymentSearchViewModel.paymentDatesBegin, this.paymentSearchViewModel.paymentDatesEnd, this.paymentSearchViewModel.paymentType, this.paymentSearchViewModel.feeAccount, this.paymentSearchViewModel.paymentAmount, this.paymentSearchViewModel.invoiceAccounted, this.paymentSearchViewModel.balanceAmount, this.paymentSearchViewModel.pageNumber, this.paymentSearchViewModel.pageSize).subscribe(function (data) { return _this.response(data); });
    };
    PaymentsComponent.prototype.setFormValues = function () {
        this.paymentSearchForm.patchValue(this.paymentSearchViewModel);
        this.paymentSearchForm.controls['statusId'].setValue(this.paymentSearchViewModel.paymentStatusId);
        this.paymentSearchForm.controls['receiptNumber'].setValue(this.paymentSearchViewModel.receiptNo);
        this.paymentSearchForm.controls['feetermId'].setValue(this.paymentSearchViewModel.feeTermId);
        this.paymentSearchForm.controls['invoiceNumber'].setValue(this.paymentSearchViewModel.invoiceNo);
    };
    PaymentsComponent.prototype.paymentsData = function (_event) {
        this.paymentSearchViewModel = _event;
        this.updateFilterViewModel();
        this.paymentList();
    };
    PaymentsComponent.prototype.response = function (data) {
        var _this = this;
        this.showCustomCard = false;
        if (data.resultList) {
            this.rows = data.resultList.list;
            this.totalItems = data.totalItems;
            this.cancelledPayments = data.dataModel.cancelledPayments;
            this.realizedPayments = data.dataModel.realiazedPayments;
            this.unRealizedPayments = data.dataModel.unRealiazedPayments;
        }
        else {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        this.totalRowsCount = data.totalItems;
        this.pageCnt = data.totalPages;
        this.rows.forEach(function (e) {
            e.classSection = e.classSection.replace(/(^,)|(,$)/g, '');
            e.paymentAmount = _this.getFormattedCurrency(e.paymentAmount);
            e.balanceAmount = e.balanceAmount !== 0 ? _this.getFormattedCurrency(e.balanceAmount) : e.balanceAmount;
            e.invoiceAccounted = e.invoiceAccounted !== 0 ? _this.getFormattedCurrency(e.invoiceAccounted) : e.invoiceAccounted;
            e.paymentDate = (e.paymentDate == null) ? null : _this.commonService.customDateFormat(e.paymentDate, _this.getSchoolDateFormat()).date;
        });
        if (data) {
            this.paymentSearchViewModel.pageNumber = data.pageNumber;
        }
        this.tableSettings = {
            columns: this.columns,
            model: this.paymentSearchViewModel,
            rows: this.rows,
            tablename: 'Payments',
            componentName: this.currentComponent,
            isSelectRowRequired: false,
            visibleSelectAll: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters
        };
        if (this.paymentSearchViewModel.studentId) {
            this.studentDetails.studentDetails(this.paymentSearchViewModel.studentId.id).subscribe(function (res) { return _this.studentNameAutoInput.nativeElement.value
                = res.studentDetailsView.studentName; });
            this.paymentSearchForm.controls['studentId'].setValue(this.paymentSearchViewModel.studentId);
        }
        this.scrollIntoView('app-table');
    };
    PaymentsComponent.prototype.getSchoolAcademicSessions = function () {
        var _this = this;
        // const currentSchool = JSON.parse(localStorage.getItem('_s'));
        this.academicSessionService.getAcademicSessionsBySchoolId()
            .subscribe(function (response) {
            if (response.academicSessionDataView.length) {
                var setAcdademicSession_1 = null;
                var newAcademicSessions_1 = [];
                var completedAcademicSessions_1 = [];
                _this.schoolAcademicSession = [];
                response.academicSessionDataView.forEach(function (element) {
                    if (element.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACADEMICSESSION_ACTIVE) {
                        setAcdademicSession_1 = element;
                    }
                    else if (element.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].ACADEMICSESSION_NEW) {
                        newAcademicSessions_1.push(element);
                    }
                    else {
                        completedAcademicSessions_1.push(element);
                    }
                    _this.schoolAcademicSession.push({
                        value: element.id,
                        label: element.displayName,
                        code: element.statusCode
                    });
                });
                setAcdademicSession_1 = setAcdademicSession_1 ?
                    setAcdademicSession_1 : newAcademicSessions_1.length ? newAcademicSessions_1[0] : completedAcademicSessions_1.length ? completedAcademicSessions_1[0] : null;
                if (!_this.paymentSearchForm.controls['academicSessionId'].value) {
                    _this.paymentSearchForm.controls['academicSessionId'].setValue(setAcdademicSession_1.id);
                }
                if (_this.paymentSearchForm.controls['academicSessionId'].value || _this.paymentSearchViewModel.academicSessionId) {
                    _this.academicSessionChange(_this.paymentSearchForm.controls['academicSessionId'].value);
                }
                //  this.initializeSearchViewModel();
            }
        });
    };
    PaymentsComponent.prototype.academicSessionChange = function (acd) {
        var _this = this;
        var data = acd.value ? acd.value : acd;
        this.paymentSearchForm.controls['boardId'].setValue(null);
        this.academicSessionId = data;
        this.paymentSearchViewModel.academicSessionId = data;
        this.paymentSearchForm.controls['academicSessionId'].setValue(data);
        this.classes = [];
        this.sections = [];
        this.feeTerms = [];
        this.schoolBoards = [];
        this.feetermService.getFeeTerms_1(data).subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.feeTerms.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (_this.paymentSearchViewModel.feeTermId) {
                    _this.paymentSearchForm.controls['feetermId'].setValue(_this.paymentSearchViewModel.feeTermId === null ? undefined : _this.paymentSearchViewModel.feeTermId);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
        this.classService.boardsBasedOnAcademicSession(data).subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.schoolBoards.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if ((_this.paymentSearchViewModel.boardId != null || _this.paymentSearchViewModel.boardId !== 0) && !acd.value) {
                    _this.paymentSearchForm.controls['boardId'].setValue(_this.paymentSearchViewModel.boardId);
                    _this.boardChange(_this.paymentSearchViewModel.boardId, _this.paymentSearchForm.controls.academicSessionId.value);
                }
                // if (this.paymentSearchForm.controls['classId']) {
                //   this.boardChange(this.paymentSearchForm.controls.boardId, this.paymentSearchForm.controls.academicSessionId.value);
                // }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentsComponent.prototype.boardChange = function (data, academicSessionId) {
        var _this = this;
        this.classes = [];
        this.sections = [];
        // if (this.paymentSearchForm.controls['classId']) {
        //   this.paymentSearchViewModel.classId = this.paymentSearchForm.controls['classId'].value;
        // }
        // if (isDropdownChange){
        // }
        if (data === undefined) {
            return;
        }
        var boardId = data.value ? data.value : data;
        this.paymentSearchForm.controls['classId'].setValue(null);
        // this.paymentSearchForm.controls['boardId'].setValue(data.value);
        // this.paymentSearchViewModel.boardId = data.value;
        this.classService.classesBasedOnAcademicSession(academicSessionId, boardId).subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if ((_this.paymentSearchViewModel.classId !== 0 || _this.paymentSearchViewModel.classId !== null) && !data.value) {
                    _this.paymentSearchForm.controls['classId'].setValue(_this.paymentSearchViewModel.classId);
                    _this.ClassChange(_this.paymentSearchViewModel.classId, _this.paymentSearchForm.controls['academicSessionId'].value, _this.paymentSearchViewModel.boardId);
                }
                // if (this.paymentSearchForm.controls['sectionId']) {
                //   this.ClassChange(this.paymentSearchViewModel.classId, this.paymentSearchForm.controls['academicSessionId'].value, this.paymentSearchViewModel.boardId);
                // }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentsComponent.prototype.ClassChange = function (data, academicSessionId, schoolBoardId) {
        var _this = this;
        this.sections = [];
        // if (this.paymentSearchForm.controls['sectionId']) {
        //   this.paymentSearchViewModel.sectionId = this.paymentSearchForm.controls['sectionId'].value;
        // }
        this.paymentSearchForm.controls['sectionId'].setValue(null);
        var input = (data && data.value) ? data.value : data;
        // this.paymentSearchForm.controls['sectionId'].setValue(null);
        this.classService.sectionsBasedOnAcademicSession(academicSessionId, schoolBoardId, input).subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.sections.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if ((_this.paymentSearchViewModel.sectionId !== 0 || _this.paymentSearchViewModel.sectionId !== null) && !data.value) {
                    _this.paymentSearchForm.controls['sectionId'].setValue(_this.paymentSearchViewModel.sectionId);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentsComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    PaymentsComponent.prototype.paymentStatuses = function () {
        var _this = this;
        this.paymentStatus = [];
        this.statusService.paymentStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].PAYMENT_STATUS_CATEGORY_CODE).subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.paymentStatus.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentsComponent.prototype.getSelectedStudent = function (value) {
        if (value.id !== undefined) {
            this.paymentSearchForm.controls['studentId'].setValue(value);
            this.paymentSearchViewModel.studentId = value.id;
            this.studentId = value.id;
            this.studentNameAutoInput.nativeElement.value = value.studentName;
        }
    };
    PaymentsComponent.prototype.onClear = function () {
        this.paymentSearchForm.reset();
        this.initializeSearchViewModel();
        this.initializeTableSettings();
        this.totalItems = 0;
        this.unRealizedPayments = 0;
        this.realizedPayments = 0;
        this.cancelledPayments = 0;
        this.setModelDataTableComponent(this.currentComponent, {});
        this.rows = [];
        this.classes = [];
        this.sections = [];
        this.schoolBoards = [];
        this.showCustomCard = true;
        this.studentId = null;
        this.feeTerms = [];
    };
    PaymentsComponent.prototype.onRowActions = function (paymentData) {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_15__["FeeModuleConfig"]._Payment_Details_App_Routing + paymentData.clickedRow.paymentId]);
    };
    PaymentsComponent.prototype.onClickNewpayment = function () {
        if (this.paymentSearchForm.controls.academicSessionId.valid) {
            this.updateFilterViewModel();
            this.setModelDataTableComponent(this.currentComponent, this.paymentSearchViewModel);
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_15__["RouteConfig"].Add_Payment]);
        }
        else {
            this.openSnackBar('You need to select academic session to proceed', true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaymentsComponent.prototype, "paymentSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaymentsComponent.prototype, "studentNameAutoInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"])
    ], PaymentsComponent.prototype, "_auto", void 0);
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/modules/finance/payments/payments/payments.component.html"),
            providers: [app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_16__["StudentAdmissionService"]],
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/modules/finance/payments/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_payments_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"], app_service_academic_service_api_academic_session_service__WEBPACK_IMPORTED_MODULE_6__["AcademicSessionService"], app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_8__["FeeTermsService"],
            app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_9__["ClassesConfigService"], app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_7__["StatusService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_10__["StudentDatabaseService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_16__["StudentAdmissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/academic-service/api/status.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/academic-service/api/status.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
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







var StatusService = /** @class */ (function () {
    function StatusService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StatusService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StatusService.prototype.getAllStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getAllStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Status/GetStatuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Payment Statuses
     *
     * @param code Gets or sets code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StatusService.prototype.paymentStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling paymentStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Payment/statuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StatusService);
    return StatusService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-finance-invoice-invoice-module~app-modules-finance-payments-payments-module.js.map