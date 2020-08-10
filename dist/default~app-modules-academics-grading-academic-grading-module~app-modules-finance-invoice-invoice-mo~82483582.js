(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-grading-academic-grading-module~app-modules-finance-invoice-invoice-mo~82483582"],{

/***/ "./src/app/service/payments/payment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/payments/payment.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");








var PaymentService = /** @class */ (function () {
    function PaymentService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Fee;
        this.basePathForReport = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    PaymentService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PaymentService.prototype.paymentDetailsById = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + (app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base) + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._Payment_Details_By_Id, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get all FeeAccountsDetails by SubSystemId (schoolId)
     *
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param academicSessionId Gets Or Sets AcademicSessionId
     * @param feeTermId Gets Or Sets FeeTermId
     * @param boardId Gets Or Sets BoardId
     * @param classId Gets Or Sets ClassId
     * @param sectionId Gets Or Sets SectionId
     * @param studentId Gets Or Sets BoardId
     * @param invoiceNo Gets Or Sets InvoiceNo
     * @param receiptNo Gets Or Sets ReceiptNo
     * @param paymentStatusId Gets Or Sets PaymentStatusId
     * @param admissionNo Gets Or Sets AdmissionNo
     * @param paymentDateBegin Gets or Sets of PaymentDateBegin
     * @param paymentDateEnd Gets or Sets of PaymentDateEnd
     * @param paymentType Gets Or Sets PaymentType
     * @param feeAccount Gets Or Sets FeeAccount
     * @param paymentAmount Gets Or Sets PaymentAmount
     * @param invoiceAccounted Gets Or Sets InvoiceAccounted
     * @param balanceAmount Gets Or Sets BalanceAmount
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    PaymentService.prototype.getPayments = function (sortBy, sortOrder, academicSessionId, feeTermId, boardId, classId, sectionId, studentId, invoiceNo, receiptNo, paymentStatusId, admissionNo, paymentDateBegin, paymentDateEnd, paymentType, feeAccount, paymentAmount, invoiceAccounted, balanceAmount, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(academicSessionId, 'AcademicSessionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTermId, 'FeeTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(boardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentId, 'StudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(invoiceNo, 'InvoiceNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(receiptNo, 'ReceiptNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentStatusId, 'PaymentStatusId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentStatusId, 'PaymentStatusId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNo, 'AdmissionNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentDateBegin, 'PaymentDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentDateEnd, 'PaymentDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentType, 'PaymentType', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeAccount, 'FeeAccount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentAmount, 'PaymentAmount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(invoiceAccounted, 'InvoiceAccounted', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(balanceAmount, 'BalanceAmount', queryParameters);
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
        return this.httpClient.get("" + (app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Base) + app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseModuleConfig"]._Payments_Payment_List, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentService.prototype.updatePaymentStatus = function (model, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._Update_Payment, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentService.prototype.getPaymentDetail = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
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
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._Payment_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentService.prototype.reportPrint = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling reportPrint.');
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
        var consumes = [];
        return this.httpClient.get("" + this.basePathForReport + app_url_config__WEBPACK_IMPORTED_MODULE_3__["FeeModuleConfig"]._Report_Card_View, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-grading-academic-grading-module~app-modules-finance-invoice-invoice-mo~82483582.js.map