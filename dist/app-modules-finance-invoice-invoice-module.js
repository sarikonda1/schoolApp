(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-finance-invoice-invoice-module"],{

/***/ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-40\" fxLayout=\"column\">\n  <div class=\"px-16 font-size-18 text-uppercase\"><span translate>Invoice Generation</span></div>\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"border-bottom p-20\">\n        <button (click)=\"getHelpText('Invoice generation')\" mat-button>\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n    </div>  \n    <form [formGroup]=\"generateInvoiceFormGroup\" fxLayout=\"column\" #invoiceForm=\"ngForm\"\n      (ngSubmit)=\"submitForm(generateInvoiceFormGroup.value)\" autocomplete=\"off\" #form=\"ngForm\" class=\"p-20\">\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"pt-12\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          class=\"pr-sm-20\">\n          <mat-label translate #term>Fee Term</mat-label>\n          <mat-select required name=\"feeTermId\" formControlName=\"feeTermId\">\n            <mat-option *ngFor=\"let feeTerm of feeTermsList\" [value]=\"feeTerm.value\">\n              {{feeTerm.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"term.innerText\"\n              [validationControl]=\"generateInvoiceFormGroup.controls.feeTermId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          fxFlexFil>\n          <mat-label #board translate>Board</mat-label>\n          <mat-select formControlName=\"boardId\" (selectionChange)=\"onBoardSelect($event)\">\n            <mat-option></mat-option>\n            <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">\n              {{board.label}}\n            </mat-option>\n          </mat-select>\n\n        </mat-form-field>\n\n\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          fxFlexFil>\n          <mat-label #class translate>Class</mat-label>\n          <mat-select formControlName=\"classId\" (selectionChange)=\"onClassChange($event.value)\">\n            <mat-option *ngIf=\"availableClasses?.length\"></mat-option>\n            <mat-option [style.display]=\"generateInvoiceFormGroup.value.boardId ? 'block': 'none'\" *ngFor=\"let availableClass of availableClasses\" [value]=\"availableClass.value\">\n              {{availableClass.label}}\n            </mat-option>\n          </mat-select>\n\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          fxFlexFil>\n          <mat-label #section translate>Section</mat-label>\n          <mat-select formControlName=\"sectionId\" (selectionChange)=\"onSectionChange($event.value)\">\n            <mat-option *ngIf=\"availableSections?.length\"></mat-option>\n            <mat-option *ngFor=\"let availableSection of availableSections\" [value]=\"availableSection.value\">\n              {{availableSection.label}}\n            </mat-option>\n          </mat-select>\n\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"onClearClick()\">{{'Clear' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{'Generate' | translate}}</button>\n      </div>\n    </form>\n  </div>\n\n\n  <div class=\"mat-elevation-z8 simple-table-container mt-32 p-40\" *ngIf=\"resultData.length\">\n    <mat-list *ngFor=\"let data of resultData\" fxLayout.gt-xs=\"row wrap\" fxFlex.gt-xs=\"80\" fxFlex=\"100\"\n      fxLayout.lt-sm=\"column\" class=\"pt-0 border m-auto confirm-table\">\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"80\"><span translate>{{data.label}}</span>\n      </mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"20\">\n        {{data.value}}\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9pbnZvaWNlL2dlbmVyYXRlLWludm9pY2UvZ2VuZXJhdGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GenerateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvoiceComponent", function() { return GenerateInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var GenerateInvoiceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GenerateInvoiceComponent, _super);
    function GenerateInvoiceComponent(commonService, _invoiceService, feeTypeService, dialog, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this._invoiceService = _invoiceService;
        _this.feeTypeService = feeTypeService;
        _this.dialog = dialog;
        _this.snackBar = snackBar;
        _this.schoolBoardsList = [];
        _this.feeTermsList = [];
        // variables declarations
        _this.classNames = [];
        _this.sectionNames = [];
        _this.doValidate = true;
        _this.resultData = [];
        return _this;
    }
    GenerateInvoiceComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.generateInvoiceFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            feeTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.getFeeTerms();
        if (this.getTokenParam('_as')) {
            this.getAvailableSchoolBoards();
        }
    };
    GenerateInvoiceComponent.prototype.onBoardSelect = function (event) {
        if (event.value != null) {
            this.getAvailableClasses(event.value);
        }
        else {
            this.availableClasses = [];
            this.availableSections = [];
            this.generateInvoiceFormGroup.patchValue({
                classIds: null,
                sectionIds: null
            });
        }
    };
    GenerateInvoiceComponent.prototype.onClassChange = function (classId) {
        if (classId != null) {
            this.generateInvoiceFormGroup.controls['sectionId'].setValue(null);
            this.getAvailableSections(this.generateInvoiceFormGroup.value.schoolBoardId, classId);
        }
        else {
            this.availableSections = [];
            this.generateInvoiceFormGroup.patchValue({
                sectionIds: null
            });
        }
    };
    GenerateInvoiceComponent.prototype.onSectionChange = function (data) {
        this.doValidate = true;
        if (data) {
            this.sectionId = data.value;
        }
    };
    // getting feeTerms
    GenerateInvoiceComponent.prototype.getFeeTerms = function () {
        var _this = this;
        this.feeTypeService.getFeeTerms().subscribe(function (response) {
            if (response.commonViewModel != null) {
                if (response.commonViewModel.length) {
                    response.commonViewModel.forEach(function (element) {
                        _this.feeTermsList.push({
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
    GenerateInvoiceComponent.prototype.submitForm = function (data) {
        if (this.generateInvoiceFormGroup.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            this.generateInvoice(data);
        }
        else {
            this.doValidate = true;
        }
    };
    GenerateInvoiceComponent.prototype.onClearClick = function () {
        this.generateInvoiceFormGroup.reset();
        this.invoiceFrom.resetForm();
        this.resultData = [];
    };
    GenerateInvoiceComponent.prototype.generateInvoice = function (data) {
        var _this = this;
        this._invoiceService.generateInvoice(data).subscribe(function (res) {
            if (res !== null) {
                _this.resultData = [];
                _this.resultData.push({ label: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].OLD_INVOICES, value: res.existingInvoicesCount }, { label: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NEW_INVOICES, value: res.newInvoiceCount });
            }
            if (res.statusCode === _this.httpStatus.OK) {
                _this.openSnackBar(res.messages.ResultMessage);
            }
            else {
                _this.openSnackBar(res.messages.ResultMessage, true);
            }
        }, function (error) {
            _this.errorResponse(error);
            _this.resultData = [];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invoiceForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "invoiceFrom", void 0);
    GenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-invoice',
            template: __webpack_require__(/*! ./generate-invoice.component.html */ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.html"),
            styles: [__webpack_require__(/*! ./generate-invoice.component.scss */ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_6__["InvoiceService"],
            app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_4__["FeeTypeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], GenerateInvoiceComponent);
    return GenerateInvoiceComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var app_shared_student_basic_search_student_basic_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/student-basic-search/student-basic-search.component */ "./src/app/shared/student-basic-search/student-basic-search.component.ts");
/* harmony import */ var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-details/invoice-details.component */ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.ts");
/* harmony import */ var _invoice_search_details_invoice_search_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-search-details/invoice-search-details.component */ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.ts");







var routes = [
    { path: 'generate-invoice', component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_3__["GenerateInvoiceComponent"], data: { title: 'Generate Invoice' } },
    { path: 'fee-assignment', component: app_shared_student_basic_search_student_basic_search_component__WEBPACK_IMPORTED_MODULE_4__["StudentBasicSearchComponent"], data: { title: 'Fee Assignment' } },
    { path: 'invoice-search', component: _invoice_search_details_invoice_search_details_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceSearchDetailsComponent"], data: { title: 'Invoice Search' } },
    { path: 'invoice-search/invoice-details/:id', component: _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailsComponent"], data: { title: 'Invoice Details' } },
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- fee invoice search -->\n\n<div class=\"px-sm-40 pt-sm-28\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Fee Invoice Search</div>\n  <div class=\"w-100-p mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"p-16 border-bottom\">\n        <button mat-button (click)=\"getHelpText('Fee Invoices')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n    </div>\n      \n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch(searchForm.value)\" class=\"p-24\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"24\"\n          fxFlexFil>\n          <mat-label #academicSession translate>Academic Session</mat-label>\n          <mat-select formControlName=\"schoolAcademicSessionId\" [(ngModel)]=\"currentAcademicSessionId\"\n            (selectionChange)=\"onAcademicSessions($event)\" required>\n            <mat-option *ngFor=\"let academicSession of academicSessions\" [value]=\"academicSession.value\">\n              {{academicSession.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"academicSession.innerText\"\n              [validationControl]=\"searchForm.controls.schoolAcademicSessionId\" [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\"\n          class=\"pr-sm-20\">\n          <mat-label translate #feeTerm>Fee Term</mat-label>\n          <mat-select name=\"feeTermId\" formControlName=\"feeTerms\">\n            <mat-option *ngIf=\"feeTermsList?.length\"></mat-option>\n            <mat-option *ngFor=\"let feeTerm of feeTermsList\" [value]=\"feeTerm.value\">\n              {{feeTerm.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\"\n          fxFlexFil>\n          <mat-label #board translate>Board</mat-label>\n          <mat-select formControlName=\"board\" (selectionChange)=\"onBoardSelect($event)\">\n            <mat-option *ngIf=\"schoolBoardsList?.length\"></mat-option>\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n              {{board.label}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"board.innerText\" [validationControl]=\"searchForm.controls.boardId\"\n              [doValidate]=\"doValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select name=\"classId\" formControlName=\"classes\" (selectionChange)=\"onClassSelect($event)\">\n            <mat-option *ngIf=\"classNames?.length\"></mat-option>\n            <mat-option *ngFor=\"let class of classNames\" [value]=\"class.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select name=\"sectionId\" formControlName=\"sections\">\n            <mat-option *ngIf=\"sectionNames?.length\"></mat-option>\n            <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section.value\">\n              {{section.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"43\" fxFlex=\"100\" class=\"pr-sm-20\">\n          <mat-label #studentId translate>Search Student Name</mat-label>\n          <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentName\"\n          (keyup)=\"preventSpace($event,'searchForm','studentName')\" \n          (blur)=\"trimTextBoxSpaces('searchForm','studentName')\"\n            aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n          <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n          <mat-autocomplete #studentNameSearch=\"matAutocomplete\"\n            (optionSelected)='getSelectedStudent($event.option.value)'>\n            <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n              {{option.studentName}}\n              <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"19\">\n          <mat-label translate #feeType>FeeType</mat-label>\n          <mat-select name=\"feeTypeId\" formControlName=\"feeType\">\n            <mat-option *ngIf=\"feeTypes?.length\"></mat-option>\n            <mat-option *ngFor=\"let item of feeTypes\" [value]=\"item.value\">\n              {{item.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\"\n          class=\"pr-sm-20\">\n          <mat-label translate #invoiceNumber>Invoice Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'searchForm','invoiceNumber')\" matInput formControlName=\"invoiceNumber\" (blur)=\"trimTextBoxSpaces('searchForm','invoiceNumber')\">\n        </mat-form-field>\n        <!--To do-->\n        <!-- <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"19\">\n          <mat-label translate #recieptNumber>Receipt Number</mat-label>\n          <input (keyup)=\"preventSpace($event)\" matInput formControlName=\"receiptNumber\" (blur)=\"trimTextBoxSpaces('searchForm','receiptNumber')\">\n        </mat-form-field> -->\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-20\">\n        <mat-checkbox class=\"mr-20\" [checked] = \"true\" (change)=\"changeValue($event)\" formControlName=\"isCancel\"><span translate>Hide Cancelled Invoice</span></mat-checkbox>\n        <button mat-raised-button type=\"reset\" class=\"text-uppercase mr-12\" (click)=\"onClear()\">\n          {{'Reset' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" color=\"accent\" class=\"text-uppercase\">\n          {{'Search' | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n\n\n  <div class=\"mat-elevation-z3 simple-table-container mt-20 radius-5\">\n    <div fxLayoutAlign=\"end center\" class=\"px-24 py-12\" *ngIf=\"invoiceSummaryHeadders\">\n      <button mat-mini-fab color=\"accent\" aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </div>\n    <div>\n    <mat-accordion>\n       \n      <mat-expansion-panel class=\"radius-t-20\">\n        <mat-expansion-panel-header>\n          <mat-panel-title class=\"font-size-18\" fxLayoutAlign=\"space-between center\">\n            <span translate>Result Summary</span>          \n          </mat-panel-title>\n        </mat-expansion-panel-header>\n     \n        <mat-list class=\"pt-0 confirm-table border my-16 mx-sm-auto\" *ngIf=\"invoiceSummaryHeadders\" fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"69\"\n          fxLayoutAlign=\"center center\">\n          <ng-container *ngFor=\"let header of invoiceSummaryHeadders\">\n\n            <mat-list-item fxLayout=\"row\" fxFlex.gt-sm=\"75\" fxFlex=\"100\" fxLayoutAlign=\"start center\"\n              class=\"text-font-weight-600\">\n              {{header | translate}}\n            </mat-list-item>\n\n            <mat-list-item fxLayout=\"row\" fxFlex.gt-sm=\"25\" fxFlex=\"100\" fxLayoutAlign=\"end center\">\n              {{invoiceSummary[header] ? invoiceSummary[header] : 0 }}\n            </mat-list-item>\n\n          </ng-container>\n        </mat-list>\n        <div class=\"text-center w-100-p font-size-18\" *ngIf=\"!invoiceSummaryHeadders\" translate>No Data Found</div>\n      </mat-expansion-panel>\n    </mat-accordion> \n    </div>  \n  </div>\n</div>\n\n<ng-template #isCancel>\n    <form [formGroup]=\"cancellationForm\" (ngSubmit)=\"InvoiceCancel(cancellationForm)\" #appForm=\"ngForm\">\n      <div  fxLayout=\"column\">\n          <div class=\"pb-16\" translate>\n              Please Confirm the Cancellation of this invoice by including the Reason for Cancellation.\n          </div>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n        \n          <mat-label #cancelledReason translate>Reason For Cancellation</mat-label>\n          <input autocomplete=\"off\" matInput formControlName=\"cancelledReason\" required\n            (keypress)=\"preventSpaces($event)\" (blur)=\"trimTextBoxSpaces('cancellationForm','cancelledReason')\">\n\n          <mat-error>\n            <app-validation [labelName]=\"cancelledReason.innerText\"\n              [validationControl]=\"cancellationForm.controls.cancelledReason\"\n              class=\"error-msg messages text-left text-danger\" [doValidate]=\"validateForm\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closeForm()\">{{'Cancel' | translate}}</button>\n        <button class=\"mr-12 text-uppercase\" mat-raised-button color=\"accent\">{{'Submit' | translate}}</button>\n      </div>\n    </form>\n</ng-template>\n\n<ng-template #invoiceAction>\n  <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n    <mat-form-field class=\"px-20\">\n      <mat-label #actionId translate>Invoice Actions</mat-label>\n      <mat-select placeholder=\"Invoice Actions\"  (selectionChange)=\"invoiceActionSelect($event.value)\" [formControl]=\"option\">\n        <mat-option *ngFor=\"let action of invoiceActions\" [value]=\"action.id\">\n          {{ action.name | translate }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div fxLayout=\"column\">\n      <button [disabled]=\"!(option.value)\" type=\"submit\" mat-raised-button class=\"text-uppercase mr-8\" translate color=\"accent\"\n        (click)=\"paymentActionRedirection()\">\n        {{'Go' | translate}}\n      </button>\n    </div>\n  </div>\n</ng-template>\n\n<div *ngIf=\"showPayments\" class=\"py-12\">\n  <app-af-payments [inputData]=\"feeAccount\" [paymentMessage]=\"paymentMessage\" (outPutValue)='savePayment($event)' [isRefNumberRequired]=\"true\"></app-af-payments>\n</div>\n\n<app-table *ngIf=\"onSearchHeader\" [massActionTemplateRef]=\"invoiceAction\" [templateRef]=\"isCancel\" [settings]='invoiceSettings' (getTableData)='getTableData($event)'\n  [closeRowForm]='closeAddPanel' (selectedRows)='selectAllForInvoice($event)' (rowBasedAction)='rowWiseActions($event)' id=\"invoice-grid\"\n  >\n</app-table>\n<app-custom-card *ngIf=\"!onSearchHeader\" [title]=customCardDetails.title [inputMessage]=customCardDetails.message>\n</app-custom-card>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let item of operationsForSummary\">\n      <button mat-menu-item (click)=\"onSelectAction(item)\">{{item.name | translate}}</button>\n    </ng-container>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZS9pbnZvaWNlL2ludm9pY2Utc2VhcmNoLWRldGFpbHMvaW52b2ljZS1zZWFyY2gtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: InvoiceSearchDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSearchDetailsComponent", function() { return InvoiceSearchDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-type-tranches.service */ "./src/app/service/configuration/finance/api/manage-fee-type-tranches.service.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");






















var InvoiceSearchDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvoiceSearchDetailsComponent, _super);
    function InvoiceSearchDetailsComponent(dialogRef, manageFeeTypeTranchesService, academicSessionService, feeTypeService, studentDbService, router, classesConfigService, commonService, invoiceService, dialog, studentService, feetermService, paymentCorrectionService, snackBar, storeService, sanitizer, cd) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.manageFeeTypeTranchesService = manageFeeTypeTranchesService;
        _this.academicSessionService = academicSessionService;
        _this.feeTypeService = feeTypeService;
        _this.studentDbService = studentDbService;
        _this.router = router;
        _this.classesConfigService = classesConfigService;
        _this.commonService = commonService;
        _this.invoiceService = invoiceService;
        _this.dialog = dialog;
        _this.studentService = studentService;
        _this.feetermService = feetermService;
        _this.paymentCorrectionService = paymentCorrectionService;
        _this.snackBar = snackBar;
        _this.storeService = storeService;
        _this.sanitizer = sanitizer;
        _this.cd = cd;
        _this.schoolBoardsList = [];
        _this.classNames = [];
        _this.sectionNames = [];
        _this.activeAcademicSession = [];
        _this.feeTypes = [];
        _this.currentComponent = 'InvoiceSearchDetailsComponent';
        _this.invoiceData = [];
        _this.invoiceId = [];
        _this.fileNames = [];
        _this.invoiceActions = [];
        _this.errorMessage = true;
        _this.customCardDetails = { title: 'Invoice Search', message: 'Search Invoice' };
        _this.showCustomCard = true;
        _this.operationsForSummary = [];
        _this.onSearchHeader = false;
        _this.selectedInvoices = [];
        _this.option = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        _this.clearSubscription = _this.commonService.isCorrectionClear().subscribe(function (res) {
            if (!res.isClear) {
                _this.showPayments = res.isClear;
            }
        });
        _this.initializeModel();
        _this.zipViewModel = {
            fileNames: [],
            returnFileName: ''
        };
        return _this;
    }
    InvoiceSearchDetailsComponent.prototype.initializeModel = function () {
        this.invoiceSearchView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
            studentIds: [],
            schoolAcademicSessionId: 0,
            feeTerms: [],
            board: [],
            studentName: [],
            classes: [],
            sections: [],
            invoiceNumber: [],
            receiptNumber: [],
            feeType: [],
            invoiceDateBegin: null,
            invoiceDateEnd: null,
            issueDateBegin: null,
            issueDateEnd: null,
            dueDateBegin: null,
            dueDateEnd: null,
            invoiceAmount: [],
            adjustmentAmount: [],
            dueAmount: [],
            penaltyAmount: [],
            realizedAmount: [],
            balanceAmount: [],
            invoiceStatus: [],
            isCancel: true,
        };
    };
    InvoiceSearchDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.invoiceActions = [
            { id: 1, name: 'Payment' },
            { id: 2, name: 'Cancel' },
            { id: 3, name: 'Download Invoices' }
        ];
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.onClear(true);
        this.showCustomCard = true;
        this.prepareInvoiceTable(this.invoiceData, false);
        this.searchForm.controls['studentName'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.studentService.studentNamesBaseOnAcademicSession(_this.searchForm.controls['schoolAcademicSessionId'].value, _this.searchForm.controls['board'].value, _this.searchForm.controls['classes'].value, _this.searchForm.controls['sections'].value, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
        this.cancellationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cancelledReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(180)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.invoiceCriteriaViewModel = {
            ids: [],
            cancelledReason: ''
        };
        this.operationMethods();
        this.clearFilterData();
        // get storage if any
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.invoiceSearchView = modelTableComponent;
            this.searchForm.patchValue(modelTableComponent);
            this.currentAcademicSessionId = modelTableComponent.schoolAcademicSessionId;
            if (modelTableComponent.board) {
                this.boardId = modelTableComponent.board;
                this.getAcademicSession(true);
            }
            else if (modelTableComponent.schoolAcademicSessionId) {
                this.getAcademicSession(true);
            }
            else {
                this.getAcademicSession(false);
            }
            this.getClassesList(true);
            this.onClassSelect({ value: modelTableComponent.classes }, true);
            this.invoiceFilter(this.invoiceSearchView);
        }
        else {
            this.getAcademicSession(false);
            this.searchForm.controls['isCancel'].setValue(true);
        }
    };
    InvoiceSearchDetailsComponent.prototype.initializeForm = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            schoolAcademicSessionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            feeTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            classes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sections: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            invoiceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            receiptNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            feeType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            isCancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
    };
    InvoiceSearchDetailsComponent.prototype.rowWiseActions = function (event) {
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_12__["FeeModuleConfig"]._Invoice_Details + event.clickedRow.id, { academicSessionId: this.currentAcademicSessionId }]);
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CANCEL.toLowerCase()) {
            this.isCancel = true;
            this.closeAddPanel = false;
            this.openAddPanel = true;
            this.invoiceId = [];
            this.invoiceId.push(event.clickedRow.id);
            this.CancelForm();
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_INVOICE.toLowerCase()) {
            if (event.clickedRow.attachmentName != null) {
                this.ReturnFileName = 'Invoice_' + event.clickedRow.invoiceNumber + '_' + event.clickedRow.studentName + '_' + new Date().toLocaleDateString() + '.pdf';
                this.DownloadDoc(event.clickedRow.attachmentName);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    InvoiceSearchDetailsComponent.prototype.DownloadDoc = function (data) {
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
                        a.download = this.ReturnFileName.replace(' ', '_');
                        a.click();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceSearchDetailsComponent.prototype.fieldRest = function () {
        this.feeTermsList = [];
        this.schoolBoardsList = [];
        this.classNames = [];
        this.sectionNames = [];
        this.feeTypes = [];
        this.searchForm.controls.feeTerms.patchValue('');
        this.searchForm.controls.board.patchValue('');
        this.searchForm.controls.classes.patchValue('');
        this.searchForm.controls.sections.patchValue('');
        this.searchForm.controls.feeType.patchValue('');
    };
    InvoiceSearchDetailsComponent.prototype.getAcademicSession = function (setDefalutBoard) {
        var _this = this;
        if (setDefalutBoard === void 0) { setDefalutBoard = true; }
        this.academicSessionService.getAcademicSessionsBySchoolId()
            .subscribe(function (response) {
            if (response.academicSessionDataView.length) {
                _this.academicSessions = [];
                response.academicSessionDataView.forEach(function (element) {
                    _this.academicSessions.push({
                        value: element.id,
                        label: element.displayName,
                        code: element.statusCode
                    });
                    if (element.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ACADEMICSESSION_ACTIVE) {
                        _this.activeAcademicSession.push({
                            value: element.id,
                            label: element.displayName,
                            startDate: element.startDate,
                            endDate: element.endDate
                        });
                        _this.currentAcademicSessionId = _this.searchForm.value.schoolAcademicSessionId ? _this.searchForm.value.schoolAcademicSessionId : element.id;
                    }
                });
                _this.currentAcademicSessionId = _this.currentAcademicSessionId ? _this.currentAcademicSessionId : _this.academicSessions[0].value;
                _this.getFeeTerms();
                _this.getSchoolBoardsList(setDefalutBoard);
                _this.fetchFeeTypes();
            }
        });
    };
    // get the list school boards
    InvoiceSearchDetailsComponent.prototype.getSchoolBoardsList = function (isManual) {
        var _this = this;
        if (isManual === void 0) { isManual = false; }
        this.schoolBoardsList = [];
        this.classesConfigService.boardsBasedOnAcademicSession(this.currentAcademicSessionId).subscribe(function (res) {
            if (res.listViews !== undefined && res.listViews.length) {
                _this.isSchoolBoards = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                    if (!isManual) {
                        _this.searchForm.controls['board'].setValue(_this.schoolBoardsList[0].value);
                    }
                    if (_this.searchForm.value.board) {
                        _this.boardId = _this.searchForm.value.board;
                        _this.getClassesList();
                    }
                });
            }
            else {
                _this.isSchoolBoards = false;
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    InvoiceSearchDetailsComponent.prototype.onAcademicSessions = function (data) {
        this.fieldRest();
        this.currentAcademicSessionId = data.value;
        this.getFeeTerms();
        this.getSchoolBoardsList(true);
        this.fetchFeeTypes();
    };
    InvoiceSearchDetailsComponent.prototype.onBoardSelect = function (data) {
        this.classNames = [];
        this.sectionNames = [];
        this.boardId = data.value;
        this.searchForm.controls.classes.reset();
        this.searchForm.controls.sections.reset();
        this.getClassesList();
    };
    // Get Classes to filter table data
    InvoiceSearchDetailsComponent.prototype.getClassesList = function (onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        this.classNames = [];
        if (!onManualChange) {
            this.sectionNames = [];
        }
        if (!(this.boardId && this.currentAcademicSessionId)) {
            return;
        }
        this.classesConfigService.classesBasedOnAcademicSession(this.currentAcademicSessionId, this.boardId).subscribe(function (response) {
            _this.classNames = [];
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.classNames.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SCHOOL_BOARD_HAS_CLASSES, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    InvoiceSearchDetailsComponent.prototype.onClassSelect = function (data, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.searchForm.controls.sections.reset();
        }
        this.classId = data.value;
        this.sections();
    };
    InvoiceSearchDetailsComponent.prototype.CancelForm = function () {
        this.showPayments = false;
        this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CustomDialogComponent"], {
            data: { template: this.customTemplate }
        });
    };
    // on selection of class
    InvoiceSearchDetailsComponent.prototype.sections = function () {
        var _this = this;
        this.sectionNames = [];
        if (!(this.boardId && this.classId && this.currentAcademicSessionId)) {
            return;
        }
        this.classesConfigService.sectionsBasedOnAcademicSession(this.currentAcademicSessionId, this.boardId, this.classId).subscribe(function (response) {
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
    };
    // End
    // getting feeTerms
    InvoiceSearchDetailsComponent.prototype.getFeeTerms = function () {
        var _this = this;
        this.feeTermsList = [];
        this.feetermService.getFeeTerms_1(this.currentAcademicSessionId).subscribe(function (response) {
            if (response.listViews != null && response.listViews.length > 0) {
                response.listViews.forEach(function (element) {
                    _this.feeTermsList.push({
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
    InvoiceSearchDetailsComponent.prototype.fetchFeeTypes = function () {
        var _this = this;
        this.feeTypes = [];
        this.feeTypeService.getFeeTypesBasedOnAcademicSession(this.currentAcademicSessionId).subscribe(function (res) {
            if (res.listViews) {
                res.listViews.forEach(function (element) {
                    _this.feeTypes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        });
    };
    InvoiceSearchDetailsComponent.prototype.getSelectedStudent = function (value) {
        if (value) {
            this.invoiceSearchView.studentName = value.studentName;
            this.invoiceSearchView.studentIds = value.id;
            this.searchForm.controls['studentName'].setValue(value.studentName);
        }
    };
    InvoiceSearchDetailsComponent.prototype.getAllFilteredStudents = function () {
        if (this.searchForm === undefined) {
            return;
        }
    };
    InvoiceSearchDetailsComponent.prototype.onClear = function (onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        this.searchForm.reset();
        this.fieldRest();
        this.currentAcademicSessionId = null;
        this.invoiceSummaryHeadders = null;
        this.showCustomCard = false;
        this.classNames = [];
        this.sectionNames = [];
        this.schoolBoardsList = [];
        if (!onManualChange) {
            this.clearStorageComponent(this.currentComponent);
            this.initializeModel();
            this.onSearchHeader = false;
            this.invoiceSettings['rows'] = [];
        }
    };
    InvoiceSearchDetailsComponent.prototype.getTableData = function (event) {
        this.invoiceSearchView = event;
        Object.assign(this.invoiceSearchView, this.searchForm.value);
        this.invoiceFilter(this.invoiceSearchView);
    };
    InvoiceSearchDetailsComponent.prototype.onSearch = function (data) {
        if (!this.searchForm.invalid) {
            this.invoiceSearchView['pageNumber'] = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER;
            this.invoiceFilter(data);
        }
        else {
            this.doValidate = true;
        }
    };
    InvoiceSearchDetailsComponent.prototype.invoiceFilter = function (data) {
        var _this = this;
        this.invoiceSettings = {};
        this.onSearchHeader = false;
        this.invoiceSettings['rows'] = [];
        this.invoiceSearchView.isCancel = this.searchForm.value.isCancel;
        this.invoiceSearchView.feeType = data.feeType;
        var searchData = this.prepareModel(this.invoiceSearchView, data);
        if (!this.searchForm.controls['studentName'].value) {
            searchData.studentIds = null;
        }
        searchData.schoolAcademicSessionId = this.currentAcademicSessionId;
        this.setModelDataTableComponent(this.currentComponent, this.invoiceSearchView);
        this.studentDbService.invoiceList(searchData).subscribe(function (res) { return _this.invoiceResult(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    InvoiceSearchDetailsComponent.prototype.clearFilterData = function () {
        this.invoiceSearchView.adjustmentAmount = [];
        this.invoiceSearchView.balanceAmount = [];
        this.invoiceSearchView.dueAmount = [];
        this.invoiceSearchView.dueDateBegin = null;
        this.invoiceSearchView.dueDateEnd = null;
        this.invoiceSearchView.invoiceAmount = [];
        this.invoiceSearchView.invoiceDateBegin = null;
        this.invoiceSearchView.invoiceDateEnd = null;
        this.invoiceSearchView.invoiceStatus = [];
        this.invoiceSearchView.issueDateBegin = null;
        this.invoiceSearchView.issueDateEnd = null;
        this.invoiceSearchView.penaltyAmount = [];
        this.invoiceSearchView.realizedAmount = [];
        this.invoiceSearchView.receiptNumber = [];
    };
    InvoiceSearchDetailsComponent.prototype.invoiceResult = function (data) {
        var _this = this;
        this.showCustomCard = false;
        this.invoiceData = [];
        if (data.resultList != null) {
            this.invoiceData = this.setDateFormat(data.resultList.list);
            this.invoiceData.forEach(function (e) {
                e.invoiceAmount = e.invoiceAmount !== 0 ? _this.getFormattedCurrency(e.invoiceAmount) : e.invoiceAmount;
                e.adjustmentAmount = e.adjustmentAmount !== 0 ? _this.getFormattedCurrency(e.adjustmentAmount) : e.adjustmentAmount;
                e.realizedAmount = e.realizedAmount !== 0 ? _this.getFormattedCurrency(e.realizedAmount) : e.realizedAmount;
                e.balanceAmount = e.balanceAmount !== 0 ? _this.getFormattedCurrency(e.balanceAmount) : e.balanceAmount;
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DETAILS_ICON,
                    },
                    {
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MARKS_ICON,
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_INVOICE,
                    }
                ];
            });
            this.invoiceSearchView.pageNumber = data.pageNumber;
            this.totalItems = data.totalItems;
        }
        else {
            this.invoiceSummaryHeadders = null;
        }
        if (data.dataModel != null) {
            this.invoiceSummaryHeadders = Object.keys(data.dataModel);
            this.invoiceSummary = data.dataModel;
        }
        this.prepareInvoiceTable(data.filters, false);
        this.onSearchHeader = true;
        // this.invoiceId.length === 0 ? this.showPayments = false : this.CancelForm();
    };
    InvoiceSearchDetailsComponent.prototype.prepareInvoiceTable = function (data, buttonRequired) {
        this.invoiceCols = [
            { field: 'invoiceNumber', header: 'Invoice Number', sort: true },
            { field: 'feeTerm', header: 'Fee Term', sort: true },
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'classSection', header: 'Class-Section', sort: true },
            { field: 'invoiceDate', header: 'Invoice Date', sort: true },
            { field: 'issueDate', header: 'Issue Date', sort: true },
            { field: 'dueDate', header: 'Due Date', sort: true },
            { field: 'invoiceAmount', header: 'Invoice Amount', sort: true },
            { field: 'adjustmentAmount', header: 'Adjustment Amount', sort: true },
            { field: 'realizedAmount', header: 'Realized Amount', sort: true },
            { field: 'balanceAmount', header: 'Balance Amount', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
        // To-do
        // if (this.invoiceSearchView.isCancel) {
        //   data.map(e => {
        //     if (e.name === 'invoiceStatus') {
        //       e.options = e.options.filter(ele => ele.label !== 'Cancelled');
        //     }
        //   });
        // }
        this.invoiceSettings = {
            rows: this.invoiceData,
            columns: this.invoiceCols,
            isSelectRowRequired: true,
            componentName: this.currentComponent,
            visibleSelectAll: true,
            totalRowsCount: this.totalItems,
            isPaginationRequired: true,
            isMultiDeleteRequired: false,
            model: this.invoiceSearchView,
            tableName: 'Payments',
            headerOperations: {
                addingForm: {
                    required: buttonRequired,
                    btnName: 'New Payment'
                }
            },
            filtersList: data,
        };
        this.scrollIntoViewById('invoice-grid');
    };
    InvoiceSearchDetailsComponent.prototype.InvoiceCancel = function (cancellationForm) {
        var _this = this;
        this.validateForm = true;
        if (this.cancellationForm.invalid) {
            return;
        }
        else {
            this.invoiceCriteriaViewModel.ids = this.invoiceId;
            this.invoiceCriteriaViewModel.cancelledReason = cancellationForm.value.cancelledReason;
            this.invoiceService.feeInvoice(this.invoiceCriteriaViewModel).subscribe(function (res) { return _this.response(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // response
    InvoiceSearchDetailsComponent.prototype.response = function (data) {
        this.validateForm = false;
        if (data.statusCode === this.HttpStatus.OK) {
            this.dialog.closeAll();
            this.cancellationForm.reset();
            this.aForm.resetForm();
            this.closeAddPanel = true;
            this.invoiceFilter(this.invoiceSearchView);
            this.option.reset();
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    // method for when click cancel panel it will open
    InvoiceSearchDetailsComponent.prototype.closeForm = function () {
        this.validateForm = false;
        this.dialogRef.closeAll();
        this.aForm.resetForm();
        this.closeAddPanel = true;
    };
    // method for prevent spaces and allow only single  at the middle of the string
    InvoiceSearchDetailsComponent.prototype.preventSpaces = function (event) {
        this.preventSpace(event);
    };
    InvoiceSearchDetailsComponent.prototype.selectAllForInvoice = function (data) {
        this.selectedInvoices = data;
        if (!data.length) {
            this.errorMessage = true;
            this.option.reset();
        }
        this.invoiceId = [];
        this.fileNames = [];
        this.studentId = null;
        if (data.length > 0) {
            for (var index = 0; index < data.length; index++) {
                this.invoiceId.push(data[index].id);
                this.studentId = data[0].studentId;
                if (data[index].attachmentName != null) {
                    this.fileNames.push(data[index].attachmentName);
                }
            }
        }
        else {
            this.invoiceId = [];
            this.showPayments = false;
        }
    };
    InvoiceSearchDetailsComponent.prototype.changeValue = function (data) {
        this.searchForm.controls['isCancel'].setValue(data.checked);
    };
    InvoiceSearchDetailsComponent.prototype.invoiceActionSelect = function (data) {
        this.errorMessage = false;
        this.actionValue = data;
    };
    InvoiceSearchDetailsComponent.prototype.paymentActionRedirection = function () {
        var _this = this;
        var noInvoiceAmountsList = this.selectedInvoices.filter(function (x) { return x.invoiceAmount === 0 || x.balanceAmount === 0; });
        if (noInvoiceAmountsList && noInvoiceAmountsList.length) {
            this.openSnackBar('Some selected invoices has no balance amount', true);
            return;
        }
        if (this.actionValue === undefined) {
            this.errorMessage = true;
            return;
        }
        if (this.actionValue === 3) {
            this.fileNames.forEach(function (element) {
                _this.zipViewModel.returnFileName = 'Invoice';
                _this.zipViewModel.fileNames.push(element);
            });
            this.zipFilesDownload();
        }
        else {
            this.invoiceService.checkInvoices(this.invoiceId).subscribe(function (data) {
                if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_16__["BAD_REQUEST"]) {
                    _this.openSnackBar(data.messages.ResultMessage, true);
                    _this.showPayments = false;
                }
                else {
                    _this.feeAccount = {
                        feeAccountId: data.feeAccountId,
                        correctionDate: new Date()
                    };
                    _this.actionValue === 1 ? (_this.showPayments = true, _this.paymentText()) : _this.CancelForm();
                }
            });
        }
    };
    InvoiceSearchDetailsComponent.prototype.paymentText = function () {
        if (this.invoiceId.length > 1) {
            this.paymentMessage = 'Payment Amount will be processed towards the selected multiple invoices in the order in which the invoices are generated.';
        }
        else {
            this.paymentMessage = '';
        }
    };
    InvoiceSearchDetailsComponent.prototype.zipFilesDownload = function () {
        var _this = this;
        if (this.zipViewModel.fileNames.length > 0) {
            this.storeService.storeZipPut(this.zipViewModel).subscribe(function (res) { return _this.resFiles(res); });
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
        }
        this.option.reset();
    };
    InvoiceSearchDetailsComponent.prototype.resFiles = function (data) {
        this.ReturnFileName = data.extension;
        this.DownloadDoc(data.extension);
        this.fileNames = [];
        this.invoiceId = [];
        this.invoiceFilter(this.invoiceSearchView);
    };
    InvoiceSearchDetailsComponent.prototype.operationMethods = function () {
        this.operationsForSummary = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_ALL_INVOICES,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW_OPERATION,
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_PENDING_INVOICES,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_CANCELLED_INVOICES,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW_OPERATION
            }
        ];
    };
    InvoiceSearchDetailsComponent.prototype.onSelectAction = function (item) {
        if (this.invoiceData.length > 0) {
            this.invList = [];
            switch (true) {
                case item.name === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_ALL_INVOICES:
                    this.invList = this.invoiceData.filter(function (x) { return x.attachmentName != null; });
                    this.zipViewModel.returnFileName = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INVOICES;
                    this.setViewModel();
                    break;
                case item.name === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_PENDING_INVOICES:
                    this.invList = this.invoiceData.filter(function (x) { return x.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PENDING && x.attachmentName != null; });
                    this.zipViewModel.returnFileName = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INVOICES_PENDING;
                    this.setViewModel();
                    break;
                case item.name === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DOWNLOAD_CANCELLED_INVOICES:
                    this.invList = this.invoiceData.filter(function (x) { return x.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CANCELLED && x.attachmentName != null; });
                    this.zipViewModel.returnFileName = app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].INVOICES_CANCELLED;
                    this.setViewModel();
                    break;
            }
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NODATA_FOUND, true);
        }
    };
    InvoiceSearchDetailsComponent.prototype.setViewModel = function () {
        var _this = this;
        this.zipViewModel.fileNames = [];
        if (this.invList.length > 0) {
            this.invList.forEach(function (element) {
                _this.zipViewModel.fileNames.push(element.attachmentName);
            });
            this.zipFilesDownload();
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
        }
    };
    InvoiceSearchDetailsComponent.prototype.savePayment = function (paymentForm) {
        var _this = this;
        this.invoiceService.checkInvoices(this.invoiceId).subscribe(function (data) {
            if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_16__["BAD_REQUEST"]) {
                _this.openSnackBar(data.messages.ResultMessage, true);
                _this.showPayments = false;
            }
            else {
                paymentForm.studentId = _this.studentId;
                paymentForm.invoiceIds = _this.invoiceId;
                paymentForm.schoolAcademicSessionId = _this.currentAcademicSessionId;
                _this.paymentViewModel = paymentForm;
                _this.invoiceService.createPayment(_this.paymentViewModel).subscribe(function (element) {
                    if (element.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_16__["OK"]) {
                        _this.showPayments = false;
                        _this.invoiceFilter(_this.invoiceSearchView);
                        _this.option.reset();
                    }
                    else {
                        _this.showPayments = true;
                    }
                    _this.openSnackBar(element.messages.ResultMessage);
                    _this.paymentCorrectionService.setCorrectionResponse(true);
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('isCancel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], InvoiceSearchDetailsComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InvoiceSearchDetailsComponent.prototype, "aForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InvoiceSearchDetailsComponent.prototype, "studentNameAutoInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"])
    ], InvoiceSearchDetailsComponent.prototype, "_auto", void 0);
    InvoiceSearchDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-search-details',
            template: __webpack_require__(/*! ./invoice-search-details.component.html */ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.html"),
            styles: [__webpack_require__(/*! ./invoice-search-details.component.scss */ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_9__["ManageFeeTypeTranchesService"],
            app_service_academic_service__WEBPACK_IMPORTED_MODULE_8__["AcademicSessionService"], app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_5__["FeeTypeService"],
            app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_6__["StudentDBService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_10__["ClassesConfigService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
            app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_14__["InvoiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_21__["StudentDatabaseService"],
            app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__["FeeTermsService"], app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_18__["PaymentCorrectionService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_19__["StoreService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], InvoiceSearchDetailsComponent);
    return InvoiceSearchDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/finance/invoice/invoice.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/finance/invoice/invoice.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/modules/finance/invoice/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/configuration/finance/api/manage-fee-type-tranches.service */ "./src/app/service/configuration/finance/api/manage-fee-type-tranches.service.ts");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/modules/finance/invoice/invoice-routing.module.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-terms.service */ "./src/app/service/configuration/finance/api/fee-terms.service.ts");
/* harmony import */ var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invoice-details/invoice-details.component */ "./src/app/modules/finance/invoice/invoice-details/invoice-details.component.ts");
/* harmony import */ var _invoice_search_details_invoice_search_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invoice-search-details/invoice-search-details.component */ "./src/app/modules/finance/invoice/invoice-search-details/invoice-search-details.component.ts");
/* harmony import */ var _payments_payments_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../payments/payments.module */ "./src/app/modules/finance/payments/payments.module.ts");
/* harmony import */ var app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/payments/payment-correction.service */ "./src/app/service/payments/payment-correction.service.ts");






















var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_12__["GenerateInvoiceComponent"],
                _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceDetailsComponent"],
                _invoice_search_details_invoice_search_details_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceSearchDetailsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_3__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"],
                _payments_payments_module__WEBPACK_IMPORTED_MODULE_20__["PaymentsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }, app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_13__["StudentDBService"], app_service_configuration_finance_api_manage_fee_type_tranches_service__WEBPACK_IMPORTED_MODULE_14__["ManageFeeTypeTranchesService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_16__["ClassesConfigService"], app_service_configuration_finance_api_fee_terms_service__WEBPACK_IMPORTED_MODULE_17__["FeeTermsService"], app_service_payments_payment_correction_service__WEBPACK_IMPORTED_MODULE_21__["PaymentCorrectionService"]
            ],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-finance-invoice-invoice-module.js.map