(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-staff-assignments-assignments-module"],{

/***/ "./src/app/modules/staff/assignments/assignments-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/staff/assignments/assignments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AssignmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsRoutingModule", function() { return AssignmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homeworks_assignments_homeworks_assignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeworks-assignments/homeworks-assignments.component */ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.ts");
/* harmony import */ var app_shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/test-grading/test-grading.component */ "./src/app/shared/test-grading/test-grading.component.ts");





var routes = [
    { path: 'homeworks-assignments', component: _homeworks_assignments_homeworks_assignments_component__WEBPACK_IMPORTED_MODULE_3__["HomeworksAssignmentsComponent"], data: { title: 'Homeworks Assignments' }
    },
    { path: 'homeworks-assignments/test-schedule', component: app_shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_4__["TestGradingComponent"], data: { title: 'Test Schedule' }
    },
    { path: 'homeworks-assignments/test-schedule/:testScheduleId', component: app_shared_test_grading_test_grading_component__WEBPACK_IMPORTED_MODULE_4__["TestGradingComponent"], data: { title: 'Test Schedule' }
    },
];
var AssignmentsRoutingModule = /** @class */ (function () {
    function AssignmentsRoutingModule() {
    }
    AssignmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AssignmentsRoutingModule);
    return AssignmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/assignments/assignments.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/staff/assignments/assignments.module.ts ***!
  \*****************************************************************/
/*! exports provided: AssignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsModule", function() { return AssignmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assignments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments-routing.module */ "./src/app/modules/staff/assignments/assignments-routing.module.ts");
/* harmony import */ var _homeworks_assignments_homeworks_assignments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeworks-assignments/homeworks-assignments.component */ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");














var AssignmentsModule = /** @class */ (function () {
    function AssignmentsModule() {
    }
    AssignmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homeworks_assignments_homeworks_assignments_component__WEBPACK_IMPORTED_MODULE_4__["HomeworksAssignmentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _assignments_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentsRoutingModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__["Ng2TelInputModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                }
            ],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AssignmentsModule);
    return AssignmentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-staff-assignments-assignments-module.js.map