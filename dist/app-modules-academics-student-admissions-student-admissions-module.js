(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-academics-student-admissions-student-admissions-module"],{

/***/ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/approve-student/approve-student.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 pt-sm-40\">\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-10\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20\">\n      <div fxlayout=\"column\" fxFlex=\"40\">\n        <div class=\"h3 secondary-text\" translate><span translate>Application Reference Number :</span>\n          <strong>{{applicantInfo?.applicationReferenceNo}}</strong></div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"40\" class=\"accent-fg\" fxLayoutAlign=\"center end\" translate>Please Verify the Student Details for approving the application</div>\n      <div fxLayout=\"column\" fxFlex=\"20\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button mat-raised-button color=\"primary\" translate (click)=\"back()\">{{'Back' | translate}}</button>\n        </div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ml-24\">\n      <div class=\"profile-image border m-24 radius-10\">\n        <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\" />\n        <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\" translate>No Image</div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"60\">\n        <div class=\"h2 primary-900-fg-custom mb-16\">{{getFormatedName(applicantInfo?.studentDetails)}}</div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-68 py-4 primary-300-fg\" translate>Phone</div> : <div class=\"ml-24\">\n            {{applicantInfo?.studentDetails?.mobileTel ? applicantInfo?.studentDetails?.mobileTel : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-68 py-4 primary-300-fg\" translate>email</div> : <div class=\"ml-24\">\n            {{applicantInfo?.studentDetails?.email1 ? applicantInfo?.studentDetails?.email1 : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-68 py-4 primary-300-fg\" translate>Class</div> : <div class=\"ml-24\">\n            {{applicantInfo?.className ? applicantInfo?.className : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-68 py-4 primary-300-fg\" translate>status</div> : <div class=\"ml-24\">\n            {{applicantInfo?.statusName ? applicantInfo?.statusName : \"-\"}}</div>\n        </div>\n      </div>\n\n      <form [formGroup]=\"approveForm\" fxLayout=\"column\" fxFlex=\"40\" class=\"pr-36\">\n        <label class=\"font-weight-800 pb-12\"><span translate>Admission Comments</span></label>\n        <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n          <mat-label #comments translate>Comments</mat-label>\n          <textarea (keyup)=\"preventSpace($event,'approveForm','processedComments')\" (blur)=\"trimTextBoxSpaces('approveForm','processedComments')\" id=\"comment-field\" formControlName=\"processedComments\" matInput placeholder=\"Leave a comment\"\n            [(ngModel)]='approveComments' required></textarea>\n          <mat-error>\n            <app-validation [labelName]='comments.innerText'\n              [validationControl]=\"approveForm.controls.processedComments\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <small class=\"text-right max-caters pt-12\" translate>max 180 Characters</small>\n      </form>\n    </div>\n  </div>\n</div>\n<app-add-edit-student-admission [inputStudentDetails]=\"applicantInfo\" [comments]=\"approveComments\">\n</app-add-edit-student-admission>"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/approve-student/approve-student.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-caters {\n  margin-top: -16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9hcHByb3ZlLXN0dWRlbnQvYXBwcm92ZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjYWRlbWljcy9zdHVkZW50LWFkbWlzc2lvbnMvYXBwcm92ZS1zdHVkZW50L2FwcHJvdmUtc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXgtY2F0ZXJze21hcmdpbi10b3A6IC0xNnB4O30iXX0= */"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/approve-student/approve-student.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ApproveStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveStudentComponent", function() { return ApproveStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/student-admissions-service/student-application.service */ "./src/app/service/student-admissions-service/student-application.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");










var ApproveStudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApproveStudentComponent, _super);
    function ApproveStudentComponent(route, studentApplicationService, storeService, cd, router, _formBuilder, dialogRef, snackBar, location, commonService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.studentApplicationService = studentApplicationService;
        _this.storeService = storeService;
        _this.cd = cd;
        _this.router = router;
        _this._formBuilder = _formBuilder;
        _this.dialogRef = dialogRef;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.commonService = commonService;
        _this.approveComments = '';
        _this.validate = true;
        return _this;
    }
    ApproveStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approveForm = this._formBuilder.group({
            processedComments: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(180)]]
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.studentId = params.id;
                _this.studentApplicationService.studentApplicationDetails(params.id)
                    .subscribe(function (res) {
                    _this.getStudentApplicationDetails(res);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    ApproveStudentComponent.prototype.getStudentApplicationDetails = function (data) {
        this.applicantInfo = data.studentDetailsView;
        if (data.studentDetailsView.studentDetails.attachment) {
            this.profileImage = this.storeService.getFilePath(data.studentDetailsView.studentDetails.attachment.fileName);
        }
        this.cd.detectChanges();
    };
    ApproveStudentComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    ApproveStudentComponent.prototype.getComments = function (value) {
        this.approveComments = value;
    };
    ApproveStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-student',
            template: __webpack_require__(/*! ./approve-student.component.html */ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.html"),
            styles: [__webpack_require__(/*! ./approve-student.component.scss */ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_5__["StudentApplicationService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
    ], ApproveStudentComponent);
    return ApproveStudentComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-admissions-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-admissions-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: StudentAdmissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdmissionsRoutingModule", function() { return StudentAdmissionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_applications_student_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-applications/student-applications.component */ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.ts");
/* harmony import */ var _student_application_details_student_application_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-application-details/student-application-details.component */ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.ts");
/* harmony import */ var _approve_student_approve_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approve-student/approve-student.component */ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.ts");
/* harmony import */ var _student_concessions_student_concessions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-concessions/student-concessions.component */ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.ts");







var routes = [
    { path: 'student-applications', component: _student_applications_student_applications_component__WEBPACK_IMPORTED_MODULE_3__["StudentApplicationsComponent"], data: { title: 'Student Applications' } },
    { path: 'student-application-details', component: _student_application_details_student_application_details_component__WEBPACK_IMPORTED_MODULE_4__["StudentApplicationDetailsComponent"], data: { title: 'Student Application Details' } },
    { path: 'student-applications/student-application-details/:id', component: _student_application_details_student_application_details_component__WEBPACK_IMPORTED_MODULE_4__["StudentApplicationDetailsComponent"], data: { title: 'Student Application Details' } },
    { path: 'student-applications/student-application-details/approve-student/:id', component: _approve_student_approve_student_component__WEBPACK_IMPORTED_MODULE_5__["ApproveStudentComponent"], data: { title: 'Approve Student' } },
    { path: 'student-concessions', component: _student_concessions_student_concessions_component__WEBPACK_IMPORTED_MODULE_6__["StudentConcessionsComponent"], data: { title: 'Student Concessions' } },
];
var StudentAdmissionsRoutingModule = /** @class */ (function () {
    function StudentAdmissionsRoutingModule() {
    }
    StudentAdmissionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentAdmissionsRoutingModule);
    return StudentAdmissionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-admissions.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-admissions.module.ts ***!
  \***********************************************************************************/
/*! exports provided: StudentAdmissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdmissionsModule", function() { return StudentAdmissionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_admissions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-admissions-routing.module */ "./src/app/modules/academics/student-admissions/student-admissions-routing.module.ts");
/* harmony import */ var _student_applications_student_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-applications/student-applications.component */ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.ts");
/* harmony import */ var _student_application_details_student_application_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-application-details/student-application-details.component */ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/student-admissions-service/student-application.service */ "./src/app/service/student-admissions-service/student-application.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var _approve_student_approve_student_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./approve-student/approve-student.component */ "./src/app/modules/academics/student-admissions/approve-student/approve-student.component.ts");
/* harmony import */ var _academics_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../academics.module */ "./src/app/modules/academics/academics.module.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var _student_concessions_student_concessions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./student-concessions/student-concessions.component */ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.ts");





















var StudentAdmissionsModule = /** @class */ (function () {
    function StudentAdmissionsModule() {
    }
    StudentAdmissionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_applications_student_applications_component__WEBPACK_IMPORTED_MODULE_4__["StudentApplicationsComponent"], _student_application_details_student_application_details_component__WEBPACK_IMPORTED_MODULE_5__["StudentApplicationDetailsComponent"],
                _approve_student_approve_student_component__WEBPACK_IMPORTED_MODULE_17__["ApproveStudentComponent"], _student_concessions_student_concessions_component__WEBPACK_IMPORTED_MODULE_20__["StudentConcessionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _student_admissions_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentAdmissionsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_6__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_13__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_14__["Ng2TelInputModule"],
                _academics_module__WEBPACK_IMPORTED_MODULE_18__["AcademicsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                    multi: true
                },
                app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_15__["StudentApplicationService"],
                app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_16__["GradeSetupService"],
                app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_19__["SchoolAcademicSessionService"]
            ],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_student_concessions_student_concessions_component__WEBPACK_IMPORTED_MODULE_20__["StudentConcessionsComponent"]]
        })
    ], StudentAdmissionsModule);
    return StudentAdmissionsModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content px-sm-40 py-sm-20\">\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-t-20 mb-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20\">\n        <div fxlayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"100\">\n            <div class=\"h3 secondary-text\"><span translate>Application Reference Number :</span>\n              <strong>{{applicantInfo?.applicationReferenceNo}}</strong></div>\n          </div>\n      <button mat-raised-button color=\"primary\" translate (click)=\"back()\">{{'Back' | translate}}</button>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ml-24\">\n      <div class=\"profile-image border m-24 radius-10\">\n        <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\" alt=\"No Image\"/>\n        <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\" translate>No Image</div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"60\">\n        <div class=\"font-size-18 primary-900-fg-custom mb-16\">{{applicantInfo?.studentName}}</div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>mobilenumber</div> : <div class=\"ml-24 break-word\">\n            {{applicantInfo?.studentDetails?.mobileTel ? applicantInfo?.studentDetails?.mobileTel : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>email</div> : <div class=\"ml-24 break-word\">\n            {{applicantInfo?.studentDetails?.email1 ? applicantInfo?.studentDetails?.email1 : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>Class</div> : <div class=\"ml-24 break-word\">\n            {{applicantInfo?.className ? applicantInfo?.className : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>status</div> : <div class=\"ml-24 break-word\">\n          {{ applicantInfo?.statusName ? applicantInfo?.statusName  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\"\n          *ngIf=\"applicantInfo?.processedComments !=null && applicantInfo?.processedComments !=''\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>processedComments</div> : <div class=\"ml-24 break-word\">\n            {{ applicantInfo?.processedComments }}</div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  \n  <app-student-details [studentDetails]=\"applicantInfo\"></app-student-details>\n\n  <div *ngIf=\"statusName == applicantInfo?.statusCode\" fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32 pr-32\">\n    <button (click)=\"submitApplication(false)\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\">{{'reject' | translate}}</button>\n    <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"submitApplication(true)\">{{'approve' | translate}}\n    </button>\n  </div>\n</div>\n\n<ng-template #rejectPopup>\n  <div fxLayout=\"row\" class=\"pb-24 font-size-16 font-weight-600\" translate>Please confirm to reject this Application </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-8\">Rejection Comments:</div>\n  <form [formGroup]=\"approveForm\" >\n  <div fxLayout=\"row\">\n    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"reject-comment\">\n      <mat-label translate #comments>Comments</mat-label>\n      <textarea required matInput (keyup)=\"preventSpace($event,'approveForm','commentText')\" (blur)=\"trimTextBoxSpaces()\" formControlName=\"commentText\"  placeholder=\"Leave a comment\"></textarea>\n      <mat-error class=\"pt-28\">\n        <app-validation [labelName]=\"comments.innerText\"\n            [validationControl]=\"approveForm.controls.commentText\" [doValidate]=\"true\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <small class=\"pr-8\" fxLayoutAlign=\"end\">Max 180 characters</small>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32\">\n    <button (click)=\"onPopUpSelect()\" mat-raised-button type=\"submit\" class=\"mr-12\">{{'Yes' | translate}}</button>\n    <button (click)=\"onPopUpSelect(false)\" mat-raised-button type=\"reset\" color=\"accent\">{{'No' | translate}}\n    </button>\n  </div>\n</form>\n\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image img {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.student-details .labelValue {\n  max-width: 500px !important;\n  font-weight: 600; }\n\n.reject-comment ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9zdHVkZW50LWFwcGxpY2F0aW9uLWRldGFpbHMvc3R1ZGVudC1hcHBsaWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUlyQjtFQUtRLDJCQUEyQjtFQUMzQixnQkFBZ0IsRUFBQTs7QUFJeEI7RUFFUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9zdHVkZW50LWFwcGxpY2F0aW9uLWRldGFpbHMvc3R1ZGVudC1hcHBsaWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2UgaW1ne1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5cbi5zdHVkZW50LWRldGFpbHN7XG4gICAgLy8gLmxhYmVsTmFtZXtcbiAgICAvLyBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIC8vIH1cbiAgICAubGFiZWxWYWx1ZXtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLnJlamVjdC1jb21tZW50e1xuICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: StudentApplicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentApplicationDetailsComponent", function() { return StudentApplicationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/student-admissions-service/student-application.service */ "./src/app/service/student-admissions-service/student-application.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var StudentApplicationDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentApplicationDetailsComponent, _super);
    function StudentApplicationDetailsComponent(studentApplicationService, cd, router, dialog, storeService, route, dialogRef, commonService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.studentApplicationService = studentApplicationService;
        _this.cd = cd;
        _this.router = router;
        _this.dialog = dialog;
        _this.storeService = storeService;
        _this.route = route;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.location = location;
        return _this;
    }
    StudentApplicationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusName = app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].STUDENT_PENDING_APPLICATION_STATUS;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.studentId = params.id;
                _this.studentApplicationService.studentApplicationDetails(params.id)
                    .subscribe(function (res) {
                    _this.getStudentApplicationDetails(res);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
        this.approveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            commentText: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(180), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
        });
    };
    StudentApplicationDetailsComponent.prototype.getStudentApplicationDetails = function (data) {
        this.applicantInfo = data.studentDetailsView;
        if (data.studentDetailsView.studentDetails.attachment) {
            this.profileImage = this.storeService.getFilePath(data.studentDetailsView.studentDetails.attachment.fileName);
        }
        this.cd.detectChanges();
    };
    StudentApplicationDetailsComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    StudentApplicationDetailsComponent.prototype.submitApplication = function (isApprove) {
        if (isApprove) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Student_Application_Approve + this.studentId]);
        }
        else {
            this.customDialog = this.dialog.open(this.rejectPopup, { width: '400px', disableClose: true });
        }
    };
    StudentApplicationDetailsComponent.prototype.onPopUpSelect = function (reject) {
        var _this = this;
        if (reject === void 0) { reject = true; }
        if (reject) {
            if (!this.approveForm.valid) {
                return;
            }
            this.studentApplicationService.rejectStudent({ studentApplicationId: this.studentId, processedComments: this.approveForm.value.commentText })
                .subscribe(function (res) {
                _this.commentSubmitted(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        this.approveForm.reset();
        this.customDialog.close();
    };
    StudentApplicationDetailsComponent.prototype.trimTextBoxSpaces = function () {
        this.approveForm.controls.commentText.setValue(this.commonService.trimSpaces(this.approveForm.value.commentText));
    };
    StudentApplicationDetailsComponent.prototype.commentSubmitted = function (res) {
        this.back();
        this.openSnackBar(res.messages.ResultMessage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rejectPopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], StudentApplicationDetailsComponent.prototype, "rejectPopup", void 0);
    StudentApplicationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-application-details',
            template: __webpack_require__(/*! ./student-application-details.component.html */ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.html"),
            styles: [__webpack_require__(/*! ./student-application-details.component.scss */ "./src/app/modules/academics/student-admissions/student-application-details/student-application-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_3__["StudentApplicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], StudentApplicationDetailsComponent);
    return StudentApplicationDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-applications/student-applications.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]=\"closeForm\" [templateRef]=\"addEditStudentApplicationFormRef\"\n  (getTableData)='tableData($event)' [matExpansioncustomClass]=\"true\" (rowBasedAction)='actions($event)' (openAddForm)='openForm()'>\n</app-table>\n\n<ng-template #addEditStudentApplicationFormRef  >\n    <div fxLayout=\"column\">\n        <!-- <h1 class=\"text-uppercase pl-12\" translate>Student Application</h1> -->\n        <app-add-edit-student-application [resetStepper]=\"resetStepper\" (cancel)=\"onCancel($event)\"></app-add-edit-student-application>\n    </div>\n   \n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-applications/student-applications.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9zdHVkZW50LWFwcGxpY2F0aW9ucy9zdHVkZW50LWFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-applications/student-applications.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StudentApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentApplicationsComponent", function() { return StudentApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/student-admissions-service/student-application.service */ "./src/app/service/student-admissions-service/student-application.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");









var StudentApplicationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentApplicationsComponent, _super);
    function StudentApplicationsComponent(studentApplicationService, router, dialogRef, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.studentApplicationService = studentApplicationService;
        _this.router = router;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentApplicationsComponent';
        _this.preSelectIds = [];
        _this.selectedIdsList = [];
        _this.setColumnHeaders();
        _this.initializeFilterView();
        _this.initializeTableSettings();
        return _this;
    }
    StudentApplicationsComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAppplications();
    };
    StudentApplicationsComponent.prototype.getAppplications = function () {
        var _this = this;
        this.studentApplicationService.studentSearchDetails(this.filterViewModel.sortBy, this.filterViewModel.studentName, this.filterViewModel.className, this.filterViewModel.classId, this.filterViewModel.parentName, this.filterViewModel.status, this.filterViewModel.sortOrder, this.filterViewModel.failedRecords, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
            .subscribe(function (res) {
            _this.bindApplicationsResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentApplicationsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    StudentApplicationsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'parentName', header: 'Parents Name', sort: true },
            { field: 'className', header: 'Class Name', sort: true },
            { field: 'statusName', header: 'Status', sort: true },
            { field: 'view', header: 'Action', sort: false }
        ];
    };
    StudentApplicationsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Student-applications',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    StudentApplicationsComponent.prototype.bindApplicationsResult = function (data) {
        if (!data.studentSearchDetailsResult) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.studentSearchDetailsResult.list;
            this.totalRowsCount = data.studentSearchDetailsResult.totalItems;
            this.pageCnt = data.studentSearchDetailsResult.totalPages;
            var that_1 = this;
            this.rows.forEach(function (e) {
                var dataValue = '';
                dataValue = (e.motherDetails ? (e.fatherDetails ?
                    that_1.getFormatedName(e.fatherDetails) + '/' +
                        that_1.getFormatedName(e.motherDetails) : that_1.getFormatedName(e.motherDetails)) : (e.fatherDetails ?
                    that_1.getFormatedName(e.fatherDetails) : ''));
                if (!dataValue) {
                    dataValue = that_1.getFormatedName(e.guardianDetails);
                }
                // e.parentName = dataValue;
                e.className = e.className;
            });
            this.preSelectIds = [];
        }
        if (data.studentSearchDetailsResult) {
            this.filterViewModel.pageNumber = data.studentSearchDetailsResult.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Student Applications',
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true
                },
                infoButton: {
                    required: true,
                    text: 'Student Applications'
                }
            }
        };
    };
    StudentApplicationsComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_8__["RouteConfig"]._Student_Application_Details + '/' + operationData.clickedRow.studentApplicationId]);
        }
    };
    StudentApplicationsComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    StudentApplicationsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAppplications();
    };
    StudentApplicationsComponent.prototype.openForm = function () {
        this.resetStepper = false;
        this.closeForm = false;
    };
    StudentApplicationsComponent.prototype.onCancel = function (event) {
        this.resetStepper = true;
        this.closeForm = event;
        this.getAppplications();
    };
    StudentApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-applications',
            template: __webpack_require__(/*! ./student-applications.component.html */ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.html"),
            styles: [__webpack_require__(/*! ./student-applications.component.scss */ "./src/app/modules/academics/student-admissions/student-applications/student-applications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_student_admissions_service_student_application_service__WEBPACK_IMPORTED_MODULE_2__["StudentApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], StudentApplicationsComponent);
    return StudentApplicationsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-40\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Student Concessions</div>\n  <div class=\"w-100-p mat-elevation-z8 simple-table-container radius-t-20\">\n    <form [formGroup]=\"studentConcessionSearchForm\"\n      (ngSubmit)=\"studentConcessionSearchForm.valid && search(studentConcessionSearchForm.value)\"\n      #studentConcessionSearch=\"ngForm\">\n      <div class=\"px-24 pt-24 pb-4\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n            class=\"px-sm-20\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select required formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n              <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n                {{ class.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='class.innerText'\n                [validationControl]=\"studentConcessionSearchForm.controls.classId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\">\n            <mat-label translate #section>Section</mat-label>\n            <mat-select required formControlName=\"sectionId\">\n              <mat-option *ngFor=\"let section of sections\" [value]=\"section.value\">\n                {{ section.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='section.innerText'\n                [validationControl]=\"studentConcessionSearchForm.controls.sectionId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"28\"\n          class=\"px-sm-20\">\n            <mat-label translate #concessionGroup>Concession Group</mat-label>\n            <mat-select formControlName=\"concessionGroup\">\n              <mat-option *ngIf=\"feeConcessionGroups?.length\"></mat-option>\n              <mat-option *ngFor=\"let feeConcessionGroup of feeConcessionGroups\" [value]=\"feeConcessionGroup.id\">\n                {{feeConcessionGroup.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div fxFlexFill fxLayout=\"column\" fxFlex.gt-xs=\"55\" fxFlex=\"100\" fxLayoutAlign=\"end\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-24\">\n              <button type=\"button\" mat-raised-button class=\"text-uppercase mx-8\" color=\"primary\" (click)=\"reset()\">{{'Reset'| translate}}</button>\n              <button mat-button type=\"button\" (click)=\"getHelpText('Student Concessions')\">\n                <mat-icon class=\"grey-600-fg\">info</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<app-table *ngIf=\"studentConcessionSearchForm.valid\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='actions($event)' (resetFilter)=\"resetFilter()\" (anchorDialogClick)=\"showConcessionInfo($event)\">\n</app-table>\n<app-custom-card *ngIf=\"!studentConcessionSearchForm.valid\" [title]=\"'Students'\" [inputMessage]=\"'Please Select Class And Section'\">\n</app-custom-card>\n\n<!-- Coustom Dialog for Edit Building -->\n<ng-template #myTemplate>\n  <form [formGroup]=\"studentConcessionForm\"\n    (ngSubmit)=\"studentConcessionForm.valid && addStudentFeeConcesion(studentConcessionForm.value)\"\n    #addStudentConcession=\"ngForm\" class=\"mh-85vh\">\n    <div class=\"pb-12 font-size-18\" *ngIf=\"!hideDropDown;else elseBolck\"> Select Fee Concession Group</div>\n    <ng-template #elseBolck><div class=\"pb-12 font-size-18\">Fee Concession Group</div></ng-template>\n    <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" class=\"mb-20\" *ngIf=\"!hideDropDown\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n        <mat-label #studentFeeConcession translate>Fee Concession Group</mat-label>\n        <mat-select formControlName=\"feeConcessionGroupId\" (selectionChange)=\"onselectFeeConcessionGroup($event.value)\"\n          required>\n          <mat-option *ngFor=\"let feeConcessionGroup of feeConcessionGroups\" [value]=\"feeConcessionGroup.id\">\n            {{feeConcessionGroup.name}}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='studentFeeConcession.innerText'\n            [validationControl]=\"studentConcessionForm.controls.feeConcessionGroupId\" [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <!-- <mat-divider *ngIf=\"feeConcessionDetails\"></mat-divider> -->\n   \n      <table class=\"simple clickable\" *ngIf=\"feeConcessionDetails\">\n        <thead>\n          <tr>\n            <th translate>Fee Type</th>\n            <th translate>Concession Type</th>\n            <th translate>Term</th>\n            <th translate>Concession</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let feeConcessionDetail of feeConcessionDetails\">\n            <ng-container *ngIf=\"feeConcessionDetail?.feeConcessionGroupTermDiscountDataViewModel?.length == 0\">\n              <td>\n                {{feeConcessionDetail?.feeTypeName}}</td>\n              <td>\n                {{feeConcessionDetail?.concessionTypeName}}</td>\n              <td>{{'Each'}}</td>\n                <td *ngIf=\"feeConcessionDetail?.concessionTypeName == 'Discount %'\" class=\"text-right\">\n                  {{feeConcessionDetail?.discount}}{{'%'}}\n                </td>\n                <td *ngIf=\"feeConcessionDetail?.concessionTypeName == 'Term Discount'\" class=\"text-right\">\n                  {{currencySymbol}}{{feeConcessionDetail?.discount}}\n                </td>\n            </ng-container>\n          </tr>\n          <tr *ngFor=\"let feeConcessionDetail of feeConcessionDetails\">\n            <td *ngIf=\"feeConcessionDetail?.feeConcessionGroupTermDiscountDataViewModel?.length > 0\">\n              {{feeConcessionDetail?.feeTypeName}}</td>\n            <td *ngIf=\"feeConcessionDetail?.feeConcessionGroupTermDiscountDataViewModel?.length > 0\">\n              {{feeConcessionDetail?.concessionTypeName}}</td>\n\n              <td *ngIf=\"feeConcessionDetail?.feeConcessionGroupTermDiscountDataViewModel?.length\" colspan=\"2\" class=\"last-child\">\n                <div *ngFor=\"let term of feeConcessionDetail?.feeConcessionGroupTermDiscountDataViewModel\" class=\"py-8 border-bottom\" fxLayoutAlign=\"space-between start\">\n                  <span>{{term.feeTermName}}</span>  <span>{{currencySymbol}}{{term.termConcessionAmt}}</span>\n                </div>\n              </td>\n            <!-- <ng-template ngFor let-term [ngForOf]=\"feeConcessionDetail.feeConcessionGroupTermDiscountDataViewModel\"\n              let-i=\"index\">\n              <td>{{term.feeTermName}}</td>\n              <td>{{currencySymbol}}{{term.termConcessionAmt}}</td>\n            </ng-template> -->\n          </tr>\n        </tbody>\n      </table>\n   \n    \n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-20\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button color=\"primary\" type=\"button\" (click)=\"cancelFeeconcession()\"\n        matDialogClose>{{'Close' | translate}}</button>\n      <button *ngIf=\"!hideDropDown\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n        [disabled]=\"!feeConcessionDetails\">{{'Submit' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n<!-- End Coustom Dialog  -->\n"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-none {\n  border: none !important; }\n\n.mh-85vh {\n  max-height: 85vh; }\n\n.last-child div:last-child {\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9zdHVkZW50LWNvbmNlc3Npb25zL3N0dWRlbnQtY29uY2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx1QkFBdUIsRUFBQTs7QUFFdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFJWSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL3N0dWRlbnQtYWRtaXNzaW9ucy9zdHVkZW50LWNvbmNlc3Npb25zL3N0dWRlbnQtY29uY2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLW5vbmUgIHtcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1oLTg1dmh7XG4gICAgbWF4LWhlaWdodDogODV2aDtcbn1cbi5sYXN0LWNoaWxke1xuICAgIGRpdntcbiAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentConcessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentConcessionsComponent", function() { return StudentConcessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_student_admissions_service_student_concession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/student-admissions-service/student-concession.service */ "./src/app/service/student-admissions-service/student-concession.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/configuration/finance/api/fee-concession-group.service */ "./src/app/service/configuration/finance/api/fee-concession-group.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");












var StudentConcessionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentConcessionsComponent, _super);
    function StudentConcessionsComponent(studentConcessionService, dialogRef, _feeConcessionGroupService, _formBuilder, gradeSetupService, classTimetableService, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.studentConcessionService = studentConcessionService;
        _this.dialogRef = dialogRef;
        _this._feeConcessionGroupService = _feeConcessionGroupService;
        _this._formBuilder = _formBuilder;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'StudentConcessionsComponent';
        _this.validate = true;
        _this.totalAmount = 0;
        _this.hideDropDown = false;
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        _this.initializeFilterView();
        return _this;
    }
    StudentConcessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.studentConcessionForm = this._formBuilder.group({
            feeConcessionGroupId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        this.studentConcessionGroupView = {
            schoolAcademicSessionStudentId: null,
            feeConcessionGroupId: null
        };
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
            if (this.filterViewModel.classIds && this.filterViewModel.classIds[0]) {
                this.studentConcessionSearchForm.patchValue({
                    classId: this.filterViewModel.classIds[0]
                });
                this.onSelectClass({ value: this.filterViewModel.classIds[0] });
            }
            if (this.filterViewModel.sectionIds && this.filterViewModel.sectionIds[0]) {
                this.studentConcessionSearchForm.patchValue({
                    sectionId: this.filterViewModel.sectionIds[0]
                });
            }
            if (this.filterViewModel.studentConcessionGroupIds) {
                this.studentConcessionSearchForm.patchValue({
                    concessionGroup: this.filterViewModel.studentConcessionGroupIds
                });
            }
            this.getAllFilteredStudentConcession();
        }
        this.getClasses();
        this.getFeeConcessionGroup();
        this.removeStudentConcessionGroupView = {
            id: null
        };
        this.studentConcessionSearchForm.valueChanges.subscribe(function (form) {
            if (_this.studentConcessionSearchForm.valid) {
                _this.filterViewModel.classIds = [_this.studentConcessionSearchForm.value.classId];
                _this.filterViewModel.sectionIds = [_this.studentConcessionSearchForm.value.sectionId];
                _this.filterViewModel.studentConcessionGroupIds = _this.studentConcessionSearchForm.value.concessionGroup;
                _this.getAllFilteredStudentConcession();
            }
        });
        this.currencySymbol = this.getSchoolCurrency();
    };
    StudentConcessionsComponent.prototype.initializeForm = function () {
        this.studentConcessionSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            concessionGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
    };
    StudentConcessionsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: true },
            { field: 'admissionNumber', header: 'Admission Number', sort: true },
            { field: 'rollNumber', header: 'Roll Number', sort: true },
            { field: 'className', header: 'Class', sort: true },
            { field: 'sectionName', header: 'Section', sort: true },
            { field: 'concessionGroupName', header: 'Concession Group', sort: true, anchorDialog: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    StudentConcessionsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Students',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            filtersList: null
        };
    };
    StudentConcessionsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
        };
        this.studentFeeConcessionGroupView = {
            id: ''
        };
    };
    StudentConcessionsComponent.prototype.getClasses = function () {
        var _this = this;
        this.classes = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    StudentConcessionsComponent.prototype.onSelectClass = function (data, isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.sections = [];
        if (!isManualChange) {
            this.studentConcessionSearchForm.controls.sectionId.setValue(null);
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentConcessionsComponent.prototype.getAllFilteredStudentConcession = function () {
        var _this = this;
        if (this.studentConcessionSearchForm.valid) {
            this.filterViewModel.classIds = [this.studentConcessionSearchForm.value.classId];
            this.filterViewModel.sectionIds = [this.studentConcessionSearchForm.value.sectionId];
            this.filterViewModel.studentConcessionGroupIds = this.studentConcessionSearchForm.value.concessionGroup;
            this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
            this.studentConcessionService.getAllStudentsFeeConcessionGroups(this.filterViewModel.studentNames, this.filterViewModel.studentConcessionGroupIds, this.filterViewModel.admissionNumber, this.filterViewModel.rollNumber, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
                _this.bindStudentConcession(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    StudentConcessionsComponent.prototype.search = function (value) {
        this.filterViewModel.sectionIds = [value.sectionId];
        this.filterViewModel.classIds = [value.classId];
        this.filterViewModel.studentConcessionGroupIds = value.concessionGroup;
        this.getAllFilteredStudentConcession();
    };
    StudentConcessionsComponent.prototype.bindStudentConcession = function (data) {
        if (!data.pagedStudentConcessionGroup) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedStudentConcessionGroup.list;
            this.totalRowsCount = data.pagedStudentConcessionGroup.totalItems;
            this.pageCnt = data.pagedStudentConcessionGroup.totalPages;
            this.rows.forEach(function (e) {
                e.isConcessionGroupExist ? e.operations = [{
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].REMOVE_CONCESSION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DELETE,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].REJECT
                    }] : e.operations = [{
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].ASSIGN_CONCESSION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].APPROVE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].APPROVE_OPERATION
                    }];
            });
        }
        if (data.pagedStudentConcessionGroup) {
            this.filterViewModel.pageNumber = data.pagedStudentConcessionGroup.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Students',
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters
        };
    };
    StudentConcessionsComponent.prototype.tableData = function (_event) {
        Object.assign(_event, {
            classIds: this.filterViewModel.classIds,
            sectionIds: this.filterViewModel.sectionIds,
            studentConcessionGroupIds: this.filterViewModel.studentConcessionGroupIds
        });
        this.filterViewModel = _event;
        this.getAllFilteredStudentConcession();
    };
    StudentConcessionsComponent.prototype.addStudentFeeConcesion = function (formValue) {
        var _this = this;
        this.studentConcessionGroupView.feeConcessionGroupId = formValue.feeConcessionGroupId;
        this.studentConcessionService.createStudentConcessionGroup(this.studentConcessionGroupView).subscribe(function (res) {
            _this.getAllFilteredStudentConcession();
            _this.dialogRef.closeAll();
            _this.studentConcessionForm.reset();
            _this.addStudentConcession.resetForm();
            _this.cancelFeeconcession();
            _this.openSnackBar(res.messages.ResultMessage);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentConcessionsComponent.prototype.actions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].REMOVE_CONCESSN) {
            var dialogRef = this.dialogMethod(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].REMOVE_STUDENT_CONCESSION, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES);
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES) {
                    _this.removeStudentConcessionGroupView.id = event.clickedRow.studentConcessionGroupId;
                    _this.studentConcessionService.removeStudentConcessionGroup(_this.removeStudentConcessionGroupView).subscribe(function (res) {
                        _this.openSnackBar(res.messages.ResultMessage);
                        _this.getAllFilteredStudentConcession();
                    });
                }
            });
        }
        else {
            this.studentConcessionGroupView.schoolAcademicSessionStudentId = event.clickedRow.schoolAcademicSessionStudentId;
            this.getFeeConcessionGroup();
            this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
                disableClose: true,
                data: { template: this.customTemplate, }
            });
        }
    };
    StudentConcessionsComponent.prototype.onselectFeeConcessionGroup = function ($event) {
        var _this = this;
        this.totalAmount = null;
        this.feeConcessionDetails = [];
        this._feeConcessionGroupService.fetchFeeConcessionGroupById($event).subscribe(function (res) {
            _this.feeConcessionDetails = res.feeConcessionGroupDataViewModel.feeConcessionGroupDiscountDataViewModel;
            _this.feeConcessionDetails.forEach(function (element) {
                if (element.feeConcessionGroupTermDiscountDataViewModel.length) {
                    element.feeConcessionGroupTermDiscountDataViewModel.forEach(function (term) {
                        _this.totalAmount += term.termConcessionAmt;
                    });
                }
            });
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentConcessionsComponent.prototype.getFeeConcessionGroup = function () {
        var _this = this;
        this.studentConcessionService.getFeeConcessionGroups().subscribe(function (res) { return _this.feeConcessionGroups = res.studentGroups; });
    };
    StudentConcessionsComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    StudentConcessionsComponent.prototype.reset = function () {
        this.sections = [];
        this.studentConcessionSearchForm.reset();
        this.studentConcessionSearch.resetForm();
        this.initializeFilterView();
        this.initializeTableSettings();
        this.setModelDataTableComponent(this.currentComponent, null);
    };
    StudentConcessionsComponent.prototype.resetFilter = function () {
        this.initializeFilterView();
        this.getAllFilteredStudentConcession();
    };
    StudentConcessionsComponent.prototype.cancelFeeconcession = function () {
        this.hideDropDown = false;
        this.studentConcessionForm.reset();
        this.addStudentConcession.resetForm();
        this.feeConcessionDetails = null;
        this.totalAmount = null;
    };
    StudentConcessionsComponent.prototype.showConcessionInfo = function (concession) {
        this.onselectFeeConcessionGroup(concession.concessionGroupId);
        this.hideDropDown = true;
        this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomDialogComponent"], {
            disableClose: true,
            data: { template: this.customTemplate, }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], StudentConcessionsComponent.prototype, "customTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addStudentConcession'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentConcessionsComponent.prototype, "addStudentConcession", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentConcessionSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentConcessionsComponent.prototype, "studentConcessionSearch", void 0);
    StudentConcessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-concessions',
            template: __webpack_require__(/*! ./student-concessions.component.html */ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.html"),
            providers: [app_service_student_admissions_service_student_concession_service__WEBPACK_IMPORTED_MODULE_3__["StudentConcessionService"], app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_7__["FeeConcessionGroupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_11__["ClassTimetableService"]],
            styles: [__webpack_require__(/*! ./student-concessions.component.scss */ "./src/app/modules/academics/student-admissions/student-concessions/student-concessions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_student_admissions_service_student_concession_service__WEBPACK_IMPORTED_MODULE_3__["StudentConcessionService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], app_service_configuration_finance_api_fee_concession_group_service__WEBPACK_IMPORTED_MODULE_7__["FeeConcessionGroupService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_9__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_11__["ClassTimetableService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], StudentConcessionsComponent);
    return StudentConcessionsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/student-admissions-service/student-concession.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/service/student-admissions-service/student-concession.service.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentConcessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentConcessionService", function() { return StudentConcessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _academic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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







var StudentConcessionService = /** @class */ (function () {
    function StudentConcessionService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        // protected basePath = 'http://localhost:8013';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _academic_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StudentConcessionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentConcessionService.prototype.createStudentConcessionGroup = function (studentConcessionGroupView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Add_Concession, studentConcessionGroupView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentConcessionService.prototype.getAllStudentsFeeConcessionGroups = function (studentNames, studentConcessionGroupIds, admissionNumbers, rollNumbers, classIds, sectionIds, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentConcessionGroupIds, 'StudentConcessionGroupId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumbers, 'AdmissionNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumbers, 'RollNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._StudentConcession, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentConcessionService.prototype.removeStudentConcessionGroup = function (studentFeeConcessionGroupView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Remove_Concession, studentFeeConcessionGroupView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentConcessionService.prototype.getFeeConcessionGroups = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._FeeConcession_Groups, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentConcessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_academic_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _academic_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]])
    ], StudentConcessionService);
    return StudentConcessionService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-academics-student-admissions-student-admissions-module.js.map