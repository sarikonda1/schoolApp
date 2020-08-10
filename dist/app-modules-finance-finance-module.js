(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-finance-finance-module"],{

/***/ "./src/app/modules/finance/finance-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/finance/finance-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'invoice',
        loadChildren: 'app/modules/finance/invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'payments',
        loadChildren: 'app/modules/finance/payments/payments.module#PaymentsModule'
    },
];
var FinanceRoutingModule = /** @class */ (function () {
    function FinanceRoutingModule() {
    }
    FinanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FinanceRoutingModule);
    return FinanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/finance/finance.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/finance/finance.module.ts ***!
  \***************************************************/
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
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/modules/finance/finance-routing.module.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-type.service */ "./src/app/service/configuration/finance/api/fee-type.service.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");

















var FinanceModule = /** @class */ (function () {
    function FinanceModule() {
    }
    FinanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__["MatcomponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"],
                _finance_routing_module__WEBPACK_IMPORTED_MODULE_12__["FinanceRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }, app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_13__["GradeSetupService"], app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_14__["ClassSectionService"], app_service_configuration_finance_api_fee_type_service__WEBPACK_IMPORTED_MODULE_15__["FeeTypeService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_16__["InvoiceService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FinanceModule);
    return FinanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-finance-finance-module.js.map