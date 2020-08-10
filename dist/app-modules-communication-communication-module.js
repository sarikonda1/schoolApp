(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-communication-communication-module"],{

/***/ "./src/app/modules/communication/communication-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/communication/communication-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CommunicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationRoutingModule", function() { return CommunicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'school-communications',
        loadChildren: 'app/modules/communication/school-communications/school-communications.module#SchoolCommunicationsModule'
    },
];
var CommunicationRoutingModule = /** @class */ (function () {
    function CommunicationRoutingModule() {
    }
    CommunicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommunicationRoutingModule);
    return CommunicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/communication/communication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/communication/communication.module.ts ***!
  \***************************************************************/
/*! exports provided: CommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _communication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication-routing.module */ "./src/app/modules/communication/communication-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");














var CommunicationModule = /** @class */ (function () {
    function CommunicationModule() {
    }
    CommunicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _communication_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommunicationRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_9__["MatcomponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__["Ng2TelInputModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                    multi: true
                }, app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_13__["CommunicationService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CommunicationModule);
    return CommunicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-communication-communication-module.js.map