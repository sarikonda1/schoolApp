(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/configuration/configuration-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/configuration/configuration-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function() { return ConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'assessment',
        loadChildren: 'app/modules/configuration/assessment/assessment.module#AssessmentModule'
    },
    {
        path: 'general',
        loadChildren: 'app/modules/configuration/general/general.module#GeneralModule'
    },
    {
        path: 'academic',
        loadChildren: 'app/modules/configuration/academic/academic.module#AcademicModule'
    },
    {
        path: 'grading',
        loadChildren: 'app/modules/configuration/grading/grading.module#GradingModule'
    },
    {
        path: 'finance',
        loadChildren: 'app/modules/configuration/finance/finance.module#FinanceModule'
    },
    {
        path: 'class-schedules',
        loadChildren: 'app/modules/configuration/class-schedules/class-schedules.module#ClassSchedulesModule'
    },
    {
        path: 'communication',
        loadChildren: 'app/modules/configuration/communication/communication.module#CommunicationModule'
    },
    {
        path: 'syllabus',
        loadChildren: 'app/modules/configuration/syllabus/syllabus.module#SyllabusModule'
    },
];
var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/configuration.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/configuration/configuration.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configuration-routing.module */ "./src/app/modules/configuration/configuration-routing.module.ts");
/* harmony import */ var app_service_academic_service_api_application_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/academic-service/api/application-category.service */ "./src/app/service/academic-service/api/application-category.service.ts");
/* harmony import */ var app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/assessment-service/api/assessment-categories.service */ "./src/app/service/assessment-service/api/assessment-categories.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_service_general_api_courses_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/general/api/courses_configuration.service */ "./src/app/service/general/api/courses_configuration.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");














var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedManagementModule"],
                _configuration_routing_module__WEBPACK_IMPORTED_MODULE_8__["ConfigurationRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true
                },
                app_service_academic_service_api_application_category_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationCategoryService"],
                app_service_general_api_courses_configuration_service__WEBPACK_IMPORTED_MODULE_12__["CoursesConfigurationService"],
                app_service_assessment_service_api_assessment_categories_service__WEBPACK_IMPORTED_MODULE_10__["AssessmentCategoriesService"],
                app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_13__["StatusService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map