(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-configuration-syllabus-syllabus-module"],{

/***/ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-32\">\n  <div class=\"text-uppercase font-size-18 p-12\">Syllabus Details</div>\n  <div class=\"w-100-p simple-table-container radius-t-20 mat-elevation-z3 mb-16\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"border-bottom p-16\">\n      <button mat-raised-button class=\"text-uppercase\" color=\"primary\" (click)=\"back()\" translate>Back</button>\n      <button mat-button (click)=\"getHelpText('Manage Syllabus')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"p-24\" fxLayout=\"column\">\n      <form [formGroup]=\"syllabusForm\" fxLayout.gt-sm=\"row\">\n        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"100\">\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"33\" fxFlex=\"100\" fxLayout=\"column\">\n              <mat-label #announcedDate translate>Board</mat-label>\n              <input matInput formControlName=\"board\" readonly>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\"\n              class=\"px-sm-20\">\n              <mat-label #fromDate translate>Class</mat-label>\n              <input matInput formControlName=\"class\" readonly>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n              class=\"pr-sm-20\">\n              <mat-label #toDate translate>Course</mat-label>\n              <input matInput formControlName=\"course\" readonly>\n            </mat-form-field>\n\n          </div>\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n           <h2 class=\"break-word\" *ngIf=\"syllabusForm?.value.name || syllabusForm?.value.code\">{{syllabusForm?.value.name}} <span *ngIf=\"syllabusForm?.value.code\">({{syllabusForm?.value.code}})</span></h2>\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\" *ngIf=\"syllabusData?.fileName\"  class=\"pt-20\">\n              <a class=\"cursor-pointer\" [href]=\"getFileNamewithPath(syllabusData?.fileName)\" target=\"_blank\"><h>Attachment</h></a>\n            </div>  \n\n          </div>\n        \n        </div>\n      </form>\n    </div>\n\n\n    <div class=\"border mt-28 border-top\"  fxLayout=\"column\" *ngIf=\"syllabusDataList?.length\">\n      <table class=\"simple table\">\n        <thead class=\"font-weight-600\">\n          <tr>\n            <th class=\"bold-text\" translate>Chapter</th>\n            <th class=\"bold-text\" translate>Topic</th>\n            <th class=\"bold-text\" translate>Sub Topic</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of syllabusDataList; let i = index\" [class]=\"item?.syllabusCheckPointId ? 'accent' : ''\">\n            <ng-container *ngIf=\"!item?.syllabusCheckPointId\">\n              <td><span class=\"p-4\">\n                  {{ item?.chapter }} </span> <span *ngIf=\"item?.chapterCode\"\n                  class=\"secondary-text pr-20\">({{item?.chapterCode}})</span> <a *ngIf=\"item?.chapterFileName\" class=\"cursor-pointer\" [href]=\"getFileNamewithPath(item?.chapterFileName)\" target=\"_blank\">Attachment</a>\n              </td>\n              <td><span class=\"p-4\"> {{ item?.topic }}\n                </span> <span *ngIf=\"item?.topicCode\"\n                class=\"secondary-text pr-20\">({{item?.topicCode}})</span> <a *ngIf=\"item?.topicFileName\" class=\"cursor-pointer\" [href]=\"getFileNamewithPath(item?.topicFileName)\" target=\"_blank\">Attachment</a>\n              </td>\n              <td><span class=\"p-4\"> {{item?.subTopic}} </span> <span *ngIf=\"item?.subTopicCode\"\n                class=\"secondary-text pr-20\">({{item?.subTopicCode}})</span>\n                <a *ngIf=\"item?.subTopicFileName\" class=\"cursor-pointer\" [href]=\"getFileNamewithPath(item?.subTopicFileName)\" target=\"_blank\">Attachment</a>\n              </td>\n            </ng-container>\n            <ng-container *ngIf=\"item?.syllabusCheckPointId\">\n              <td><span class=\"p-4\">   {{ item?.syllabusCheckPoint }} </span>\n              </td>\n              <td><span class=\"p-4\">\n                {{ item?.checkPointTestType }} </span>\n              </td>\n              <td><span class=\"p-4\" translate>\n                {{item?.isCumulative ? 'Cumulative' : 'InCremental'}}\n                </span>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check-point {\n  background-color: orange !important; }\n\n.custom-table {\n  border: 1px solid #dcd1d1; }\n\n.bold-text {\n  font-weight: bold;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9zeWxsYWJ1cy9zeWxsYWJ1cy1kZXRhaWxzL3N5bGxhYnVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uL3N5bGxhYnVzL3N5bGxhYnVzLWRldGFpbHMvc3lsbGFidXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVjay1wb2ludHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tdGFibGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDFkMTtcbn1cbi5ib2xkLXRleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SyllabusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusDetailsComponent", function() { return SyllabusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/syllabus/syllabus.service */ "./src/app/service/syllabus/syllabus.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");









var SyllabusDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusDetailsComponent, _super);
    function SyllabusDetailsComponent(_fb, syllabusService, snackBar, route, storeService, commonService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.syllabusService = syllabusService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.storeService = storeService;
        _this.commonService = commonService;
        _this.syllabusDataList = [];
        return _this;
    }
    SyllabusDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        if (this.route.params) {
            this.route.params.subscribe(function (params) {
                if (params.id) {
                    _this.syllabusService.syllabusChaptersList(params.id)
                        .subscribe(function (res) { return _this.setSyllabusDetails(res); }, function (err) { return _this.errorResponse(err); });
                }
            });
        }
    };
    SyllabusDetailsComponent.prototype.setSyllabusDetails = function (res) {
        var _this = this;
        this.syllabusData = res;
        this.syllabusDataList = [];
        var tempIds = [];
        res.syllabusDetailsView.map(function (e) {
            if (e.syllabusCheckPointsListView && e.syllabusCheckPointsListView.length) {
                e.syllabusCheckPointsListView.map(function (el) {
                    if (tempIds.findIndex(function (m) { return m.syllabusCheckPointsId === el.syllabusCheckPointsId; }) === -1) {
                        tempIds.push(el);
                    }
                });
                var checkPoints = tempIds.filter(function (val) { return !e.syllabusCheckPointsListView.some(function (ee) { return ee.syllabusCheckPointsId === val.syllabusCheckPointsId; }); });
                tempIds = e.syllabusCheckPointsListView;
                checkPoints.map(function (cp) {
                    _this.syllabusDataList.push(cp);
                });
                _this.syllabusDataList.push(e);
            }
            else {
                tempIds.map(function (tm) {
                    _this.syllabusDataList.push(tm);
                });
                tempIds = [];
                _this.syllabusDataList.push(e);
            }
        });
        tempIds.map(function (tm) {
            _this.syllabusDataList.push(tm);
        });
        this.syllabusForm.patchValue(res);
    };
    SyllabusDetailsComponent.prototype.initializeForm = function () {
        this.syllabusForm = this._fb.group({
            board: [null],
            class: [null],
            course: [null],
            boardSyllabusId: [null],
            name: [null],
            code: [null]
        });
    };
    SyllabusDetailsComponent.prototype.back = function () {
        history.back();
    };
    SyllabusDetailsComponent.prototype.getFileNamewithPath = function (fileName) {
        if (fileName) {
            return this.storeService.getFilePath(fileName);
        }
    };
    SyllabusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus-details',
            template: __webpack_require__(/*! ./syllabus-details.component.html */ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.html"),
            providers: [app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]],
            styles: [__webpack_require__(/*! ./syllabus-details.component.scss */ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_3__["SchoolSyllabusService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], SyllabusDetailsComponent);
    return SyllabusDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SyllabusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusRoutingModule", function() { return SyllabusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _syllabus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllabus.component */ "./src/app/modules/configuration/syllabus/syllabus.component.ts");
/* harmony import */ var _syllabus_details_syllabus_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syllabus-details/syllabus-details.component */ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    { path: 'manage-syllabus', component: _syllabus_component__WEBPACK_IMPORTED_MODULE_3__["SyllabusComponent"], data: { title: 'Manage Syllabus' } },
    { path: 'syllabus-details/:id', component: _syllabus_details_syllabus_details_component__WEBPACK_IMPORTED_MODULE_4__["SyllabusDetailsComponent"], data: { title: 'Syllabus Details' } }
];
var SyllabusRoutingModule = /** @class */ (function () {
    function SyllabusRoutingModule() {
    }
    SyllabusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SyllabusRoutingModule);
    return SyllabusRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [matExpansioncustomClass]=\"true\" [settings]=\"tableSettings\" [closeRowForm]=closeForm\n  (getTableData)='filtertableData($event)' [templateRef]=\"addSyllabus\" (rowBasedAction)='actions($event)'\n  (openAddForm)='openForm()'>\n</app-table>\n<ng-template #addSyllabus>\n  <mat-horizontal-stepper class=\"custom-horizontal-step\" [linear]=\"false\" fxLayout=\"row\" fxFlex=\"100\" #stepper\n    (selectionChange)=\"onSelectionChange($event)\">\n    <mat-step [stepControl]=\"basicInfo\" [completed]=\"stepper?.selectedIndex > 0\">\n      <form fxLayout=\"column\" [formGroup]=\"basicInfo\" #infoForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>{{'Basic Information'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Basic Information</div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n            <mat-label translate #board>Board</mat-label>\n            <mat-select (selectionChange)=\"boardChanged($event)\" formControlName=\"schoolBoardId\" required>\n              <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">{{board.label}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='board.innerText' [validationControl]=\"basicInfo.controls.schoolBoardId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n            class=\"px-sm-16\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select (selectionChange)=\"classChanged($event)\" formControlName=\"classId\" required>\n              <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">{{class.label}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='class.innerText' [validationControl]=\"basicInfo.controls.classId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n            <mat-label translate #course>Course</mat-label>\n            <mat-select (selectionChange)=\"courseChanged($event)\" formControlName=\"courseId\" required>\n              <mat-option *ngFor=\"let course of coursesList\" [value]=\"course.value\">{{course.label}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='course.innerText' [validationControl]=\"basicInfo.controls.courseId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" class=\"pt-12 pl-4\" fxFlex=\"100\" translate>\n          Based on your selection of Board, Class and Course, you may choose a pre-defined Syllabaus from the following\n          available options.\n        </div>\n        <div fxLayout=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #boardSyllabus>Board Syllabus</mat-label>\n            <mat-select [disabled]=\"syllabusEryId\" formControlName=\"boardSyllabusId\">\n              <mat-option *ngFor=\"let syllabus of boardSyllabusList\" [value]=\"syllabus.id\">{{syllabus.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='boardSyllabus.innerText'\n                [validationControl]=\"basicInfo.controls.boardSyllabusId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" class=\"pt-12 pl-4\" fxFlex=\"100\" translate>\n          Please enter an optional Name and Code for this Syllabus Configuration\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\"\n            class=\"pr-sm-16\">\n            <mat-label #name translate>Name</mat-label>\n            <input \n            (keyup)=\"preventSpace($event,'basicInfo','name')\" (blur)=\"trimTextBoxSpaces('basicInfo','name')\"\n             formControlName=\"name\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='name.innerText' [validationControl]=\"basicInfo.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n            class=\"pr-sm-16\">\n            <mat-label translate #code>Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'basicInfo','code')\" (blur)=\"trimTextBoxSpaces('basicInfo','code')\"\n             formControlName=\"code\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"basicInfo.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxFlexFill fxLayout=\"column\" class=\"pt-12\" fxFlex=\"100\" fxFlex.gt-sm=\"1 1 0\">\n            <div fxLayout=\"row\">\n              <button mat-raised-button color=\"primary\" type=\"button\"\n                (click)=\"syllabus_attachment.value='';syllabus_attachment.click()\">\n                <mat-icon>attach_file</mat-icon>{{'Upload Attachment' | translate}}\n              </button>\n            </div>\n            <input [accept]=\"AcceptImagesApplicationType\" #syllabus_attachment id=\"syllabus_attachment\"\n              (change)=\"imgChanged(syllabus_attachment.files,'syllabus')\" fxHide type=\"file\" #fatherImage>\n            <div class=\"pl-4 logo-name\" fxLayoutAlign=\"center center\"\n              [style.visibility]=\"basicInfo?.value?.attachment?.fileName ? 'visible' : 'hidden'\">\n              <!-- <span>{{basicInfo?.value?.attachment?.fileName}} </span> -->\n              <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: basicInfo?.value?.attachment}\">\n              </ng-template>\n              <button (click)=\"removeAttachment('syllabus')\" mat-icon-button type=\"button\" class=\"ml-8 red-300-fg\">\n                <mat-icon>cancel</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n          <button mat-raised-button id=\"reset-button\" (click)=\"onCancel()\" type=\"reset\" class=\"text-uppercase mr-12\">\n            {{'Cancel' | translate}}\n          </button>\n          <button mat-raised-button color=\"accent\" class=\"text-uppercase\" (click)=\"onCreateSyllabus()\">\n            {{syllabusEryId ? 'Update' : 'Save & continue' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [aria-labelledby]=\"syllabusEryId ? null : 'disabled_Resi'\" [stepControl]=\"chaptersInfo\"\n      [completed]=\"isStepComplete(1)\">\n      <form fxLayout=\"column\" [formGroup]=\"chaptersInfo\" #chapterForm=\"ngForm\">\n        <ng-template matStepLabel><span translate (click)=\"$event.stopPropagation()\">{{'Syllabus Chapters'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Syllabus Chapters</div>\n        <div id=\"chapter-form\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12 pl-4\" fxFlex=\"100\" translate>\n          Please enter the chapters to be covered in this syllabus.\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\"\n            class=\"pr-sm-16\">\n            <mat-label #chapterName translate>Chapter</mat-label>\n            <input (keyup)=\"preventSpace($event,'chaptersInfo','name')\" (blur)=\"trimTextBoxSpaces('chaptersInfo','name')\"\n              formControlName=\"name\" required matInput>\n            <mat-error>\n              <app-validation [labelName]='chapterName.innerText' [validationControl]=\"chaptersInfo.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n            class=\"pr-sm-16\">\n            <mat-label #chaptercode translate>Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'chaptersInfo','code')\" (blur)=\"trimTextBoxSpaces('chaptersInfo','code')\"\n              formControlName=\"code\" matInput>\n            <mat-error>\n              <app-validation [labelName]='chaptercode.innerText' [validationControl]=\"chaptersInfo.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"1 1 0\" class=\"pt-12\">\n            <div fxLayout=\"column\">\n              <div fxLayout=\"row\">\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                  (click)=\"syllabus_chapters.value='';syllabus_chapters.click()\">\n                  <mat-icon>attach_file</mat-icon>{{'Upload Attachment' | translate}}\n                </button>\n              </div>\n              <input [accept]=\"AcceptImagesApplicationType\" #syllabus_chapters id=\"syllabus_chapters\"\n                (change)=\"imgChanged(syllabus_chapters.files,'chapters')\" fxHide type=\"file\" #fatherImage>\n              <div fxLayoutAlign=\"center center\"\n                [style.visibility]=\"chaptersInfo?.value?.attachment?.fileName ? 'visible' : 'hidden'\" class=\"logo-name\">\n                <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: chaptersInfo?.value?.attachment}\">\n                </ng-template>\n                <button (click)=\"removeAttachment('chapters')\" mat-icon-button type=\"button\" class=\"ml-8 red-300-fg\">\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" class=\"pt-12\" fxFlex=\"100\" fxLayoutAlign=\"end center\">\n          <button [disabled]=\"disableAllDataAdding\" mat-raised-button (click)=\"addChapter()\" type=\"submit\"\n            color=\"accent\" class=\"text-uppercase\">\n            {{isNumber(chaptersInfo?.value?.chapterIndex) ? 'Update' : 'Select' | translate}}\n          </button>\n          <button mat-raised-button color=\"primary\" (click)=\"resetChapters()\" type=\"reset\" class=\"text-uppercase ml-4\">\n            {{'Clear' | translate}}\n          </button>\n        </div>\n        <div *ngIf=\"disableAllDataAdding\" class=\"message-box error\" translate>{{checkPointsMsg}}</div>\n        <div fxLayout=\"column\" *ngIf=\"syllabusList?.length\">\n          <div class=\"font-size-18 pt-20 pb-12\" translate>Selected Chapters</div>\n          <div [cdkDropListData]=\"syllabusList\" cdkDropList class=\"dragdrop border w-500-px\"\n            (cdkDropListDropped)=\"drop($event, 'chapter')\">\n            <div [cdkDragDisabled]=\"disableAllDataAdding\" class=\"drag-box border-bottom p-12 white\" fxLayout=\"row\"\n              fxLayoutAlign=\"start center\" *ngFor=\"let chapter of syllabusList; let i = index\" cdkDrag\n              [cdkDragData]=\"chapter\" (click)=\"onClickChapter(chapter, i)\">\n              <div fxFlex=\"30\" class=\"pr-12\">\n                <span class=\"break-word\">{{chapter?.name}}</span> <span *ngIf=\"chapter?.code\"\n                  class=\"secondary-text pr-20\">({{chapter?.code}})</span>\n              </div>\n              <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: chapter?.attachment}\"></ng-template>\n              <div fxFlex=\"10\">\n                <button type=\"button\" [disabled]=\"disableAllDataAdding\" mat-icon-button\n                  (click)=\"removeChapter(chapter, i);$event.stopPropagation()\">\n                  <mat-icon class=\"red-300-fg\">delete</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-24\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button [disabled]=\"disableAllDataAdding\" mat-raised-button (click)=\"onChaptersCreate()\" type=\"button\"\n            color=\"accent\" class=\"text-uppercase\">\n            {{ isCurrentStepIsUpdate ? 'Update' : 'Save & continue' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [aria-labelledby]=\"syllabusEryId ? null : 'disabled_Resi'\" [stepControl]=\"topics\"\n    [completed]=\"isStepComplete(2)\">\n      <form fxLayout=\"column\" [formGroup]=\"topics\" #topicsForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>{{'Chapter Topics'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Chapter Topics</div>\n        <div id=\"topics-form\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12 pl-4\" fxFlex=\"100\" translate>\n          Please enter the Topics in each Chapter or Topic directly to the syllabus.\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label #chapterTopicName translate>Chapter</mat-label>\n            <mat-select [disabled]=\"isNumber(topics.value.chapterIndex)\" formControlName=\"syllabusChapterId\">\n              <mat-option [value]=\"null\" *ngIf=\"syllabusList.length\"></mat-option>\n              <mat-option *ngFor=\"let chapter of syllabusList\" [style.display]=\"chapter.id ? '' : 'none'\"\n                [value]=\"chapter.id\">{{chapter.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='chapterTopicName.innerText'\n                [validationControl]=\"topics.controls.syllabusChapterId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-16\">\n            <mat-label #topicName translate>Topic</mat-label>\n            <input (keyup)=\"preventSpace($event,'topics','name')\" (blur)=\"trimTextBoxSpaces('topics','name')\" formControlName=\"name\"\n              required matInput>\n            <mat-error>\n              <app-validation [labelName]='topicName.innerText' [validationControl]=\"topics.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n            <mat-label #TopicCode translate>Code</mat-label>\n            <input formControlName=\"code\" matInput (keyup)=\"preventSpace($event, 'topics','code')\"\n              (blur)=\"trimTextBoxSpaces('topics','code')\">\n            <mat-error>\n              <app-validation [labelName]='TopicCode.innerText' [validationControl]=\"topics.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" class=\"pt-12 pl-sm-16\" fxFlex=\"100\" fxFlex.gt-sm=\"70\">\n            <div fxLayout=\"column\">\n              <div fxLayout=\"row\">\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                  (click)=\"chapters_topics.value='';chapters_topics.click()\">\n                  <mat-icon>attach_file</mat-icon>{{'Upload Attachment' | translate}}\n                </button>\n              </div>\n              <input [accept]=\"AcceptImagesApplicationType\" #chapters_topics id=\"chapters_topics\"\n                (change)=\"imgChanged(chapters_topics.files,'topics')\" fxHide type=\"file\">\n              <div [style.visibility]=\"topics?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n                fxLayoutAlign=\"center center\" class=\"logo-name\">\n                <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: topics?.value?.attachment}\">\n                </ng-template>\n                <button (click)=\"removeAttachment('topics')\" mat-icon-button type=\"button\" class=\"ml-8 red-300-fg\">\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n            <div fxLayout=\"column\" class=\"pl-12\">\n              <div>\n                <button [disabled]=\"disableAllDataAdding\" class mat-raised-button (click)=\"addTopic()\" type=\"submit\"\n                  color=\"accent\" class=\"text-uppercase\">\n                  {{isNumber(topics.value.chapterIndex) ? 'Update' : 'Select' | translate}}\n                </button>\n                <button class mat-raised-button color=\"primary\" (click)=\"resetTopics()\" type=\"reset\"\n                  class=\"text-uppercase ml-8\">\n                  {{'Clear' | translate}}\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"disableAllDataAdding\" class=\"message-box error\" translate>{{checkPointsMsg}}</div>\n        <table mat-table [dataSource]=\"dataSource\" *ngIf=\"topicsGridList?.length\" class=\"border w-100-p\">\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef class=\"font-size-16\"><strong>Chapter</strong></th>\n            <td mat-cell *matCellDef=\"let element\" class=\"pr-4 w-180 break-word\">\n              <span>{{element.name ? element.name : '(No Chapter)'}} </span></td>\n          </ng-container>\n          <ng-container matColumnDef=\"topics\" cdkDropListGroup>\n            <th mat-header-cell *matHeaderCellDef class=\"font-size-16\"><strong>Topics</strong></th>\n            <td mat-cell *matCellDef=\"let element; let i = index\" class=\"pr-0\">\n              <div cdkDropList class=\"dragdrop\" [cdkDropListData]=\"element.topics\"\n                (cdkDropListDropped)=\"drop($event, 'topics')\">\n                <div [cdkDragDisabled]=\"disableAllDataAdding\" class=\"drag-box border-bottom border-left p-4 white\"\n                  fxLayout=\"row\" cdkDrag\n                  *ngFor=\"let item of element.topics;let topicIndex = index\"\n                  (click)=\"onClickTopic(item, i, topicIndex)\">\n                  <div fxLayout=\"row\" fxFlex=\"100\">\n                    <span class=\"pr-12 break-word\" fxFlex=\"30\">{{item.name}}<span class=\"secondary-text pl-4\"\n                        *ngIf=\"item?.code\">({{item.code}})</span></span>\n                    <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: item.attachment}\"></ng-template>\n                  </div>\n                  <button type=\"button\" [disabled]=\"disableAllDataAdding\" mat-icon-button\n                    (click)=\"removeTopic(item, i, topicIndex);$event.stopPropagation()\">\n                    <mat-icon class=\"red-300-fg\">delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"topicsDisplayedColumns\"></tr>\n          <tr mat-row [ngClass]=\"{ 'hide-row': !row?.topics?.length }\"\n            *matRowDef=\"let row; columns: topicsDisplayedColumns;\"></tr>\n        </table>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-24\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button [disabled]=\"disableAllDataAdding\" mat-raised-button (click)=\"onSaveTopics()\" type=\"button\"\n            color=\"accent\" class=\"text-uppercase\">\n            {{isCurrentStepIsUpdate ? 'Update' : 'Save & continue' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step\n      [aria-labelledby]=\"isStepEnable() ? null : 'disabled_Resi'\"\n      [stepControl]=\"subTopics\" [completed]=\"isStepComplete(3)\">\n      <form fxLayout=\"column\" [formGroup]=\"subTopics\" #subTopicForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>{{'Sub Topics'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Sub Topics</div>\n        <div id=\"sub-topic-form\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12 pl-4\" fxFlex=\"100\" translate>\n          Please enter the Sub-Topics for each Chapter-Topic or Topic.\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label #chapterTopicName translate>Chapter</mat-label>\n            <mat-select [disabled]=\"isNumber(subTopics.value.subTopicIndex)\"\n              (selectionChange)=\"getTopicsBasedOnChapter($event.value)\" formControlName=\"syllabusChapterId\">\n              <mat-option [value]=\"null\" *ngIf=\"syllabusList.length\"></mat-option>\n              <mat-option *ngFor=\"let chapter of syllabusList\" [style.display]=\"chapter.id ? '' : 'none'\"\n                [value]=\"chapter.id\">{{chapter.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='chapterTopicName.innerText'\n                [validationControl]=\"subTopics.controls.syllabusChapterId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"pl-sm-16\">\n            <mat-label #chapterTopicName translate>Topic</mat-label>\n            <mat-select [disabled]=\"isNumber(subTopics.value.subTopicIndex)\" required formControlName=\"syllabusTopicId\">\n              <mat-option *ngFor=\"let topic of topicsList\" [value]=\"topic.id\">\n                {{topic.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='chapterTopicName.innerText'\n                [validationControl]=\"subTopics.controls.syllabusTopicId\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n\n\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n            <mat-label #subTopicName translate>Sub Topic</mat-label>\n            <input (keyup)=\"preventSpace($event,'subTopics','name')\" (blur)=\"trimTextBoxSpaces('subTopics','name')\" formControlName=\"name\"\n              required matInput>\n            <mat-error>\n              <app-validation [labelName]='subTopicName.innerText' [validationControl]=\"subTopics.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n            class=\"pl-sm-20\">\n            <mat-label #subTopicCode translate>Code</mat-label>\n            <input (keyup)=\"preventSpace($event,'subTopics','code')\" (blur)=\"trimTextBoxSpaces('subTopics','code')\" formControlName=\"code\"\n              matInput>\n            <mat-error>\n              <app-validation [labelName]='subTopicCode.innerText' [validationControl]=\"subTopics.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"1 1 0\" class=\"pt-12 pl-sm-16\">\n            <div fxLayout=\"column\">\n              <div fxLayout=\"row\">\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                  (click)=\"sub_topics.value='';sub_topics.click()\">\n                  <mat-icon>attach_file</mat-icon>{{'Upload Attachment' | translate}}\n                </button>\n              </div>\n              <input [accept]=\"AcceptImagesApplicationType\" #sub_topics id=\"sub_topics\"\n                (change)=\"imgChanged(sub_topics.files,'subTopics')\" fxHide type=\"file\">\n              <div [style.visibility]=\"subTopics?.value?.attachment?.fileName ? 'visible' : 'hidden'\" class=\"name=logo\"\n                fxLayoutAlign=\"center center\">\n                <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: subTopics?.value?.attachment}\">\n                </ng-template>\n                <button (click)=\"removeAttachment('subTopics')\" mat-icon-button type=\"button\" class=\"ml-8 red-300-fg\">\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"disableAllDataAdding\" class=\"message-box error\" translate>{{checkPointsMsg}}</div>\n        <div fxLayout=\"row\" class=\"pt-12\" fxFlex=\"100\" fxLayoutAlign=\"end center\">\n          <div class=\"pl-12\">\n            <button [disabled]=\"disableAllDataAdding\" mat-raised-button (click)=\"addSubTopic()\" type=\"submit\"\n              color=\"accent\" class=\"text-uppercase\">\n              {{isNumber(subTopics.value.subTopicIndex) ? 'Update' : 'Select' | translate}}\n            </button>\n            <button mat-raised-button (click)=\"getTopicsBasedOnChapter();resetSubTopics()\" color=\"primary\" type=\"reset\"\n              class=\"text-uppercase ml-8\">\n              {{'Clear' | translate}}\n            </button>\n          </div>\n        </div>\n        <table mat-table [dataSource]=\"supTopicsTableData\" *ngIf=\"subTopicsList?.length\" class=\"border mt-20 w-100-p\">\n          <ng-container matColumnDef=\"chapterName\">\n            <th mat-header-cell *matHeaderCellDef class=\"font-size-16 text-left\"><strong>Chapter</strong></th>\n            <td mat-cell *matCellDef=\"let element; let i = index\" class=\"pr-4 w-20-p break-word\" [attr.rowspan]=\"getRowsSpan(element, i)\" [style.display]=\"getRowsSpan(element, i) ? '' : 'none'\">\n              <span>{{element.chapterName ? element.chapterName : '(No Chapter)'}}</span></td>\n          </ng-container>\n          <ng-container matColumnDef=\"topicName\">\n            <th mat-header-cell *matHeaderCellDef class=\"font-size-16 text-left\"><strong>Topic</strong></th>\n            <td mat-cell *matCellDef=\"let element\" class=\"pr-4 w-20-p break-word border-left p-4 white\">\n              <span>{{element.topicName}}</span></td>\n          </ng-container>\n          <ng-container matColumnDef=\"subTopics\" cdkDropListGroup>\n            <th mat-header-cell *matHeaderCellDef class=\"font-size-16\"><strong>Sub Topics</strong></th>\n            <td mat-cell *matCellDef=\"let element; let i = index\">\n              <div cdkDropList class=\"dragdrop\" [cdkDropListData]=\"element.subTopics\"\n                (cdkDropListDropped)=\"drop($event, 'subTopics')\">\n                <div [cdkDragDisabled]=\"disableAllDataAdding\" class=\"drag-box border-bottom border-left p-4 white\"\n                  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" cdkDrag\n                  *ngFor=\"let item of element.subTopics;let subIndex = index\"\n                  (click)=\"onClickSubTopic(element, item, i, subIndex)\">\n                  <div fxLayout=\"row\" fxFlex=\"100\"><span class=\"pr-12 break-word\">{{item.name}}<span class=\"secondary-text pl-4\"\n                        *ngIf=\"item?.code\">({{item.code}})</span></span>\n                    <ng-template *ngTemplateOutlet=\"imageName;context:{attachment: item.attachment}\"></ng-template>\n                  </div>\n                  <button type=\"button\" [disabled]=\"disableAllDataAdding\" mat-icon-button\n                    (click)=\"removeSubTopic(item, i, subIndex);$event.stopPropagation()\">\n                    <mat-icon class=\"red-300-fg\">delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n\n            </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"subTopicsDisplayedColumns\"></tr>\n          <tr mat-row [ngClass]=\"{ 'hide-row': !row?.subTopics?.length }\"\n            *matRowDef=\"let row; columns: subTopicsDisplayedColumns;\"></tr>\n        </table>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button [disabled]=\"disableAllDataAdding\" mat-raised-button (click)=\"onSaveSubTopics()\" type=\"button\"\n            color=\"accent\" class=\"text-uppercase\">\n            {{isCurrentStepIsUpdate ? 'Update' : 'Save & continue' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step\n      [aria-labelledby]=\"isStepEnable() ? null : 'disabled_Resi'\"\n      [stepControl]=\"checkPoints\" [completed]=\"isStepComplete(4)\">\n      <form fxLayout=\"column\" [formGroup]=\"checkPoints\">\n        <ng-template matStepLabel><span translate>{{'Check Points (Tests)'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Check Points (Tests)</div>\n        <div fxLayout=\"column\" class=\"pt-12 secondary-text\" fxLayoutAlign=\"center center\">\n          <div translate>\n            You may create check points to assess the progress by defing Tests at various steps in the syllabus.\n          </div>\n          <div class=\"py-12\" translate>\n            This is an optional configuration that will allow you to define different Tests that may be conducted for\n            the\n            classess that this syllabus is assigned to.\n          </div>\n          <div translate>\n            Would you like to define Tests that will be conducted at various stage of the syllabus ?\n          </div>\n        </div>\n\n\n        <div fxLayout=\"column\" class=\"pt-24\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <div translate>\n            If Yes, you will be able to record the various type of tets that may be conducted by the school on\n            completion\n            of the slected topics from the syllabus.\n          </div>\n          <mat-radio-group aria-label=\"Select an option\" formControlName=\"checkPoint\"\n            (change)=\"onChangeCheckPoint($event.value)\">\n            <mat-radio-button [value]=\"true\">Yes</mat-radio-button>\n            <mat-radio-button [value]=\"false\" class=\"pl-20\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div *ngIf=\"checkPoints.value.checkPoint && checkPointsList?.length\" class=\"pt-20\" translate>\n          Please Add the check Point (Test) using the menu option at the desired steps in the table below\n        </div>\n        <ng-template *ngTemplateOutlet=\"tablewithCheckPoints;context:{isCompleteStep: false}\"></ng-template>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button matStepperNext mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step\n      [aria-labelledby]=\"isStepEnable() ? null : 'disabled_Resi'\"\n      [stepControl]=\"completeData\" [completed]=\"isStepComplete(5)\">\n      <form fxLayout=\"column\" [formGroup]=\"completeData\">\n        <ng-template matStepLabel><span translate>{{'Complete Details'}}</span>\n        </ng-template>\n        <div class=\"pt-24 font-size-20\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\" translate>Complete Details</div>\n        <div class=\"pt-24\" id=\"last-step\" translate> Summary of the syllabus information saved in the system.</div>\n\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-12\">\n            <mat-label translate>Board</mat-label>\n            <mat-select disabled formControlName=\"schoolBoardId\" required>\n              <mat-option *ngFor=\"let board of availableSchoolBoards\" [value]=\"board.value\">{{board.label}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-12\">\n            <mat-label translate>Class</mat-label>\n            <mat-select disabled formControlName=\"classId\" required>\n              <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">{{class.label}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate>Course</mat-label>\n            <mat-select disabled formControlName=\"courseId\" required>\n              <mat-option *ngFor=\"let course of coursesList\" [value]=\"course.value\">{{course.label}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\" translate>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"pr-sm-12\">\n            <mat-label #name translate>Name</mat-label>\n            <input [readonly]=\"true\" formControlName=\"name\" matInput>\n            <mat-error>\n              <app-validation [labelName]='name.innerText' [validationControl]=\"completeData.controls.name\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #code>Code</mat-label>\n            <input [readonly]=\"true\" formControlName=\"code\" matInput>\n            <mat-error>\n              <app-validation [labelName]='code.innerText' [validationControl]=\"completeData.controls.code\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <ng-template *ngTemplateOutlet=\"tablewithCheckPoints;context:{isCompleteStep: true}\"></ng-template>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button (click)=\"onCancel(true)\" mat-raised-button type=\"reset\" color=\"accent\" class=\"text-uppercase\">\n            {{'Close' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n  </mat-horizontal-stepper>\n</ng-template>\n\n\n\n<ng-template #tablewithCheckPoints let-isCompleteStep=\"isCompleteStep\">\n  <div class=\"border mt-28\" *ngIf=\"checkPoints.value.checkPoint && syllabusDataList?.length\">\n    <table class=\"simple table secondary-table\">\n      <thead class=\"font-weight-600 mat-header-cell\">\n        <tr>\n          <th translate><strong>Chapter</strong></th>\n          <th translate><strong>Topic</strong></th>\n          <th translate><strong>Sub Topic</strong></th>\n          <th *ngIf=\"!isCompleteStep\" translate class=\"w-100\"><strong>Action</strong></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of syllabusDataList; let i = index; let f = first; let l = last\"\n          [class]=\"item?.syllabusCheckPointId ? 'accent' : ''\">\n          <ng-container *ngIf=\"!item?.syllabusCheckPointId\">\n            <td class=\"break-word\" [ngClass]=\"isCompleteStep ? 'w-40-p' : 'w-30-p'\" ><span class=\"p-4\">\n                {{ item?.chapter }} </span><span *ngIf=\"isCompleteStep && item?.chapterCode\"\n                class=\"secondary-text pr-20\">({{item?.chapterCode}})</span>\n              <a *ngIf=\"isCompleteStep && item?.chapterFileName\" class=\"cursor-pointer\"\n                [href]=\"getFileNamewithPath(item?.chapterFileName)\" target=\"_blank\">Attachment</a>\n            </td>\n            <td class=\"w-30-p break-word\"><span class=\"p-4\"> {{ item?.topic }}\n              </span><span *ngIf=\"isCompleteStep && item?.topicCode\"\n              class=\"secondary-text pr-20\">({{item?.topicCode}})</span>\n              <a *ngIf=\"isCompleteStep && item?.topicFileName\" class=\"cursor-pointer\"\n                [href]=\"getFileNamewithPath(item?.topicFileName)\" target=\"_blank\">Attachment</a>\n            </td>\n            <td class=\"w-30-p break-word\"><span class=\"p-4\"> {{item?.subTopic}} </span><span *ngIf=\"isCompleteStep && item?.subTopicCode\"\n              class=\"secondary-text pr-20\">({{item?.subTopicCode}})</span>\n              <a *ngIf=\"isCompleteStep && item?.subTopicFileName\" class=\"cursor-pointer\"\n                  [href]=\"getFileNamewithPath(item?.subTopicFileName)\" target=\"_blank\">Attachment</a>\n            </td>\n            <td *ngIf=\"!isCompleteStep\" class=\"w-10-p\">\n              <button mat-icon-button aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n          <ng-container *ngIf=\"item?.syllabusCheckPointId\">\n            <td><span class=\"p-4\"> {{ item?.syllabusCheckPoint }} </span>\n            </td>\n            <td><span class=\"p-4\">\n                {{ item?.checkPointTestType}} </span>\n            </td>\n            <td><span class=\"p-4\">\n                {{item.isCumulative ? 'Cumulative' : 'Incremental'}}\n              </span>\n            </td>\n            <td *ngIf=\"!isCompleteStep\">\n              <button mat-icon-button aria-label=\"More\" [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n          <mat-menu #menu=\"matMenu\">\n            <ng-container *ngIf=\"!item?.syllabusCheckPointId\">\n              <button *ngIf=\"!f\" mat-menu-item (click)=\"onInsertTest(i)\" translate>\n                <mat-icon class=\"mr-8\">vertical_align_top</mat-icon>\n                <span translate>{{'Insert Test Before This Step'}}</span>\n              </button>\n              <button mat-menu-item (click)=\"onInsertTest(i, false)\" translate>\n                <mat-icon class=\"mr-8\">vertical_align_bottom</mat-icon>\n                <span translate>{{'Insert Test After This Step'}}</span>\n              </button>\n            </ng-container>\n            <ng-container *ngIf=\"item?.syllabusCheckPointId\">\n              <button mat-menu-item (click)=\"deleteCheckPoint(item);$event.stopPropagation()\" translate>\n                <mat-icon class=\"mr-8\">delete</mat-icon>\n                <span translate>{{'Delete Check Point'}}</span>\n              </button>\n            </ng-container>\n          </mat-menu>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-template>\n\n\n\n<ng-template #checkPointTestDialog>\n  <div class=\"text-uppercase font-size-18 text-center p-16 accent\">Insert Check point Test</div>\n  <form [formGroup]=\"checkPointTestForm\" #checkPointForm=\"ngForm\" fxLayout=\"column\" class=\"p-20\">\n    <div class=\"pb-12 font-size-18\">Select test type to insert at this check point</div>\n\n    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n      <mat-label #testTypeId translate>Test Type</mat-label>\n      <mat-select formControlName=\"testTypeId\" required>\n        <mat-option *ngFor=\"let type of testTypes\" [value]=\"type.id\">\n          {{type.name}}</mat-option>\n      </mat-select>\n      <mat-error>\n        <app-validation [labelName]='testTypeId.innerText' [validationControl]=\"checkPointTestForm.controls.testTypeId\"\n          [doValidate]=\"validate\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n      <mat-label #name translate>Name</mat-label>\n      <input (keyup)=\"preventSpace($event,'checkPointTestForm','name')\" (blur)=\"trimTextBoxSpaces('checkPointTestForm','name')\"\n        formControlName=\"name\" required matInput>\n      <mat-error>\n        <app-validation [labelName]='name.innerText' [validationControl]=\"checkPointTestForm.controls.name\"\n          [doValidate]=\"validate\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n      <mat-label #checkPointTypeId translate>Syllabus Inclusions for Test</mat-label>\n      <mat-select formControlName=\"iscumulative\" required>\n        <mat-option *ngFor=\"let point of checkPointTypes\" [value]=\"point.value\">\n          {{point.name}}</mat-option>\n      </mat-select>\n      <mat-error>\n        <app-validation [labelName]='checkPointTypeId.innerText'\n          [validationControl]=\"checkPointTestForm.controls.iscumulative\" [doValidate]=\"validate\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"py-12\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button (click)=\"onCancelCheckPoints()\" type=\"reset\"\n        matDialogClose>{{'Cancel' | translate}}</button>\n      <button mat-raised-button type=\"submit\" (click)=\"onSubmitCheckPointForm()\" class=\"text-uppercase\"\n        color=\"accent\">{{'Ok' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n\n<ng-template #imageName let-attachment=\"attachment\">\n  <div fxFlex=\"60\">\n    <span *ngIf=\"attachment?.fileValue; else server_file\" class=\"break-word\">\n      {{attachment.fileName}}\n    </span>\n    <ng-template #server_file>\n      <span *ngIf=\"attachment?.fileName\" (click)=\"$event.stopPropagation()\">\n        <a class=\"cursor-pointer\" [href]=\"getFileNamewithPath(attachment)\" target=\"_blank\">Attachment</a>\n      </span>\n    </ng-template>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dragdrop {\n  max-height: 300px;\n  overflow: auto; }\n\n.drag-box {\n  display: -webkit-box;\n  display: flex;\n  cursor: move;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.drag-box:last-child {\n  border-bottom: none; }\n\n.dragdrop.cdk-drop-list-dragging .drag-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.hide-row {\n  display: none; }\n\n.secondary-table tbody tr td {\n  padding: 6px 8px; }\n\n.check-point {\n  background-color: orange; }\n\n.mat-header-cell {\n  padding-left: 12px;\n  font-size: large; }\n\n::ng-deep .mat-step-header[aria-labelledby=\"disabled_Resi\"] {\n  pointer-events: none !important;\n  cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9zeWxsYWJ1cy9zeWxsYWJ1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSWhCO0VBQ0csb0JBQWE7RUFBYixhQUFhO0VBQ2QsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUVoRDtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUV4RDtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUV4RDtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHdCQUF3QixFQUFBOztBQUc1QjtFQUdFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vc3lsbGFidXMvc3lsbGFidXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhZ2Ryb3Age1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZHJhZy1ib3gge1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIC5kcmFnLWJveDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIC5kcmFnZHJvcC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIC5oaWRlLXJvd3tcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWNvbmRhcnktdGFibGUgdGJvZHkgdHIgdGR7XG4gICAgcGFkZGluZzogNnB4IDhweDtcbiAgfVxuICAuY2hlY2stcG9pbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4ubWF0LWhlYWRlci1jZWxse1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXJbYXJpYS1sYWJlbGxlZGJ5PVwiZGlzYWJsZWRfUmVzaVwiXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus.component.ts ***!
  \**********************************************************************/
/*! exports provided: SyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusComponent", function() { return SyllabusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/syllabus/syllabus.service */ "./src/app/service/syllabus/syllabus.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");


















var SyllabusComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SyllabusComponent, _super);
    function SyllabusComponent(_fb, commonService, classTimetableService, changeDetector, sanitizer, dialogRef, 
    // tslint:disable-next-line: max-line-length
    syllabusService, snackBar, gradeTermConfigurationService, router, storeService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.classTimetableService = classTimetableService;
        _this.changeDetector = changeDetector;
        _this.sanitizer = sanitizer;
        _this.dialogRef = dialogRef;
        _this.syllabusService = syllabusService;
        _this.snackBar = snackBar;
        _this.gradeTermConfigurationService = gradeTermConfigurationService;
        _this.router = router;
        _this.storeService = storeService;
        _this.tableSettings = {};
        _this.columns = [];
        _this.currentComponent = 'SyllabusComponent';
        _this.closeForm = true;
        _this.validate = true;
        _this.coursesList = [];
        _this.topicsList = [];
        _this.subTopicsList = [];
        _this.checkPointsList = [];
        _this.checkPointTypes = [];
        _this.testTypes = [];
        _this.syllabusList = [];
        _this.topicsDisplayedColumns = ['name', 'topics'];
        _this.chapterDisplayedColumns = ['chapterName', 'fileName', 'action'];
        _this.subTopicsDisplayedColumns = ['chapterName', 'topicName', 'subTopics'];
        _this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
        _this.displayedColumns = [];
        _this.boardSyllabusList = [];
        _this.selectedSubTopicList = [];
        _this.supTopicsTableData = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
        _this.syllabusDetails = [];
        _this.syllabusDataList = [];
        _this.isCurrentStepIsUpdate = false;
        _this.topicsGridList = [];
        // disable all data is syllabus has checkpoints 
        _this.disableAllDataAdding = false;
        _this.checkPointsMsg = 'Checkpoints have already been defined due to which you cannot make any changes.';
        return _this;
    }
    SyllabusComponent.prototype.drop = function (event, stepper) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (event.container.data.some(function (e) { return e.name.toLowerCase() === event.previousContainer.data[event.previousIndex].name.toLowerCase(); })) {
                switch (stepper) {
                    case 'topics':
                        this.openSnackBar('Duplicate Topic name in the same Chapter', true);
                        break;
                    default:
                        this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true);
                        break;
                }
            }
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        }
        switch (stepper) {
            case 'chapter':
                this.resetChapters();
                break;
            case 'topics':
                this.resetTopics();
                break;
            default:
                this.resetSubTopics();
                break;
        }
    };
    SyllabusComponent.prototype.ngOnInit = function () {
        this.initializeFilterView();
        this.initializeTableSettings();
        this.initializeForm();
        this.getAvailableSchoolBoards('basicInfo', 'schoolBoardId');
        var modelData = this.getModelComponent(this.currentComponent);
        if (modelData) {
            this.filterViewModel = modelData;
        }
        this.getSyllabusTableData();
        /// apis--
        this.getCheckPointsList();
        this.getTestTypes();
    };
    SyllabusComponent.prototype.getboardSyllabusList = function () {
        var _this = this;
        this.syllabusService.boardSyllabus(this.basicInfo.value.schoolBoardId, this.basicInfo.value.classId)
            .subscribe(function (res) { return _this.boardSyllabusList = res.boardSyllabus; }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            schoolBoardIds: [],
            courseIds: [],
            classIds: [],
            name: '',
            isActive: [],
            numberOfChapters: '',
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    SyllabusComponent.prototype.filtertableData = function (_model) {
        this.filterViewModel = _model;
        this.getSyllabusTableData();
    };
    SyllabusComponent.prototype.initializeTableSettings = function () {
        this.setColumnHeaders();
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Syllabus',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    SyllabusComponent.prototype.getSyllabusTableData = function () {
        var _this = this;
        this.syllabusService.syllabusList(this.filterViewModel.schoolBoardIds, this.filterViewModel.classIds, this.filterViewModel.courseIds, this.filterViewModel.name, this.filterViewModel.isActive, this.filterViewModel.numberOfChapters, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
            .subscribe(function (res) { return _this.onGetSyllabusList(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'schoolBoard', header: 'School Board', sort: true },
            { field: 'className', header: 'Class', sort: true },
            { field: 'course', header: 'Course', sort: true },
            { field: 'name', header: 'Name', sort: true },
            { field: 'isActive', header: 'Is Active', sort: true },
            { field: 'numberOfChapters', header: 'Number of Chapters', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    SyllabusComponent.prototype.onGetSyllabusList = function (res) {
        this.setColumnHeaders();
        var operations = [
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_DETAILS
            },
            {
                name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_OPERATION,
                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_ICON,
                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_OPERATION
            }
        ];
        var rows = [];
        if (!res.syllabusData) {
            rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.filterViewModel.pageNumber = res.syllabusData.pageNumber;
            this.totalRowsCount = res.syllabusData.totalItems;
            this.pageCnt = res.syllabusData.totalPages;
            rows = res.syllabusData.list;
            rows.map(function (e) {
                // e.operations = operations;
                // tslint:disable-next-line: max-line-length
                e.operations = e.isActive === 'Yes' ? (e.isEditable ? operations : operations.filter(function (el) { return el.name !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION; })) : operations.filter(function (el) { return el.name === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW; });
            });
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Syllabus',
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: res.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Manage Syllabus'
                },
                addingForm: {
                    required: true,
                    btnName: 'ADD SYLLABUS'
                }
            }
        };
    };
    SyllabusComponent.prototype.actions = function (operationData) {
        var _this = this;
        this.syllabusEryId = operationData.clickedRow.id;
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT.toLowerCase()) {
            this.syllabusService.syllabusBasicDetails(this.syllabusEryId)
                .subscribe(function (res) { return _this.afterBasicDetailsGet(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_OPERATION.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_17__["RouteConfig"]._Syllabus_Details + this.syllabusEryId]);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].INACTIVE_OPERATION.toLowerCase()) {
            this.syllabusService.updateSyllabus(operationData.clickedRow.id)
                .subscribe(function (res) { return _this.getSyllabusTableData(); }, function (err) { return _this.errorResponse(err); });
        }
    };
    SyllabusComponent.prototype.afterBasicDetailsGet = function (res) {
        var _this = this;
        this.isCurrentStepIsUpdate = true;
        this.closeForm = false;
        if (res.dataList && res.dataList[0]) {
            this.syllabusBasicDetails = res.dataList[0];
            this.disableAllDataAdding = res.dataList[0].checkPointsCount ? true : false;
            this.basicInfo.patchValue(res.dataList[0]);
            this.basicInfo.patchValue({
                attachment: {
                    fileName: res.dataList[0].fileName,
                    fileValue: null
                }
            });
            this.boardChanged({ value: res.dataList[0].schoolBoardId }, true);
            this.classChanged(null, true);
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = false;
                x.completed = _this.isStepComplete(i);
            });
            this.customSteperLabelChange();
        }
    };
    SyllabusComponent.prototype.initializeForm = function () {
        this.basicInfo = this._fb.group({
            schoolBoardId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            courseId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            boardSyllabusId: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)],
            attachment: [{ fileName: null, fileValue: null }]
        });
        this.chaptersInfo = this._fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)],
            attachment: [{ fileName: null, fileValue: null }],
            id: [null],
            chapterIndex: [null]
        });
        this.topics = this._fb.group({
            syllabusChapterId: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)],
            attachment: [{ fileName: null, fileValue: null }],
            id: [null],
            chapterIndex: [null],
            topicIndex: [null]
        });
        this.subTopics = this._fb.group({
            syllabusChapterId: [null],
            syllabusTopicId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)],
            attachment: [{ fileName: null, fileValue: null }],
            id: [null],
            topicIndex: [null],
            subTopicIndex: [null]
        });
        this.checkPoints = this._fb.group({
            checkPoint: [false]
        });
        this.checkPointTestForm = this._fb.group({
            before: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            index: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(45)]],
            iscumulative: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.completeData = this._fb.group({
            schoolBoardId: [null],
            classId: [null],
            courseId: [null],
            boardSyllabusId: [null],
            name: [null],
            code: [null],
            fileName: [null],
            fileValue: [null]
        });
    };
    // ---- syllabus(1 st step)----------------
    SyllabusComponent.prototype.removeAttachment = function (stepper) {
        switch (stepper) {
            case 'syllabus':
                this.basicInfo.controls.attachment.patchValue({ fileName: null, fileValue: null });
                break;
            case 'chapters':
                this.chaptersInfo.controls.attachment.patchValue({ fileName: null, fileValue: null });
                break;
            case 'topics':
                this.topics.controls.attachment.patchValue({ fileName: null, fileValue: null });
                break;
            case 'subTopics':
                this.subTopics.controls.attachment.patchValue({ fileName: null, fileValue: null });
                break;
        }
    };
    SyllabusComponent.prototype.onCreateSyllabus = function () {
        var _this = this;
        if (this.basicInfo.valid) {
            var addSyllabusModel = {
                schoolBoardId: 0,
                classId: 0,
                courseId: 0,
                name: null,
                code: null,
                boardSyllabusId: 0,
                attachment: {
                    fileName: null,
                    fileValue: null
                },
                id: ''
            };
            addSyllabusModel = this.basicInfo.value;
            if (this.syllabusEryId) {
                addSyllabusModel['id'] = this.syllabusEryId;
                this.syllabusService.updateSyllabusData(addSyllabusModel)
                    .subscribe(function (res) { return _this.setAddedSyllabus(res); }, function (err) { return _this.errorResponse(err); });
            }
            else {
                delete addSyllabusModel.id;
                this.syllabusService.addSyllabus(addSyllabusModel)
                    .subscribe(function (res) { return _this.setAddedSyllabus(res); }, function (err) { return _this.errorResponse(err); });
            }
        }
    };
    SyllabusComponent.prototype.setAddedSyllabus = function (res) {
        if (res.syllabusId) {
            this.syllabusEryId = res.syllabusId;
        }
        this.stepper.next();
    };
    // -------------------chapters-------------------
    SyllabusComponent.prototype.addChapter = function () {
        if (this.chaptersInfo.valid) {
            if (this.isNumber(this.chaptersInfo.value.chapterIndex)) {
                if (this.isChapterNameExists(this.chaptersInfo.value.name) > -1 && this.isChapterNameExists(this.chaptersInfo.value.name) !== this.chaptersInfo.value.chapterIndex) {
                    this.openSnackBar('Same Chapter name Already Exists', true);
                    return;
                }
                this.syllabusList[this.chaptersInfo.value.chapterIndex] = this.chaptersInfo.value;
            }
            else if (this.isChapterNameExists(this.chaptersInfo.value.name) === -1) {
                this.syllabusList.push(this.chaptersInfo.value);
            }
            else {
                this.openSnackBar('Same Chapter name Already Exists', true);
                return;
            }
            this.resetChapters();
        }
    };
    SyllabusComponent.prototype.isChapterNameExists = function (name) {
        return this.syllabusList.findIndex(function (e) { return e.name.toLowerCase() === name.toLowerCase(); });
    };
    SyllabusComponent.prototype.createChapter = function (chapter) {
        return {
            syllabusId: this.syllabusEryId,
            name: chapter ? chapter.name : null,
            code: chapter ? chapter.code : null,
            attachment: {
                fileName: chapter.fileName,
                fileValue: null
            },
            sortOrder: chapter ? chapter.sortOrder : null,
            id: chapter.id ? chapter.id : null
        };
    };
    SyllabusComponent.prototype.removeChapter = function (chapter, i) {
        var _this = this;
        if (chapter.id) {
            this.syllabusService.deleteSyllabusChapters(chapter.id)
                .subscribe(function (res) { return _this.onDeleteChapter(res, i); }, function (err) { return _this.errorResponse(err); });
        }
        else {
            this.syllabusList.splice(i, 1);
        }
    };
    SyllabusComponent.prototype.onDeleteChapter = function (res, i) {
        this.syllabusList.splice(i, 1);
    };
    SyllabusComponent.prototype.resetChapters = function () {
        var _this = this;
        this.chapterForm.reset();
        this.removeAttachment('chapters');
        setTimeout(function () {
            _this.chapterForm.submitted = false;
            _this.stepper.selected.interacted = false;
            _this.changeDetector.detectChanges();
        });
    };
    SyllabusComponent.prototype.getChapters = function (fromTopics) {
        var _this = this;
        if (fromTopics === void 0) { fromTopics = false; }
        this.syllabusService.syllabusChapters(this.syllabusEryId)
            .subscribe(function (res) { return _this.onGetSyllabus(res, fromTopics); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.onGetSyllabus = function (res, fromTopics) {
        var _this = this;
        this.syllabusList = [];
        if (res.dataList && res.dataList.length) {
            if (!fromTopics) {
                this.isCurrentStepIsUpdate = true;
            }
            res.dataList.map(function (e) {
                _this.syllabusList.push(_this.createChapter(e));
            });
        }
    };
    SyllabusComponent.prototype.onChaptersCreate = function () {
        var _this = this;
        var addChaptersModel = [];
        this.syllabusList.map(function (e, i) {
            addChaptersModel.push({
                syllabusId: _this.syllabusEryId,
                name: e.name,
                code: e.code,
                sortOrder: i,
                attachment: e.attachment ? e.attachment : {
                    fileName: null,
                    fileValue: null
                },
                id: e.id ? e.id : null
            });
        });
        if (addChaptersModel.length) {
            this.syllabusService.addSyllabusChapters(addChaptersModel)
                .subscribe(function (res) { return _this.onCreateChapters(res); }, function (err) { return _this.errorResponse(err); });
        }
        else if (this.chaptersInfo.value.name || this.chaptersInfo.value.code) {
            this.openSnackBar('Please select the chapter', true);
        }
        else {
            this.stepper.next();
        }
    };
    SyllabusComponent.prototype.onCreateChapters = function (res) {
        this.stepper.next();
    };
    SyllabusComponent.prototype.onClickChapter = function (chapter, index) {
        this.chaptersInfo.patchValue(chapter);
        this.chaptersInfo.patchValue({
            chapterIndex: index
        });
        this.scrollIntoViewById('chapter-form');
    };
    // ---------------topics----------------------------
    SyllabusComponent.prototype.addTopic = function () {
        var _this = this;
        if (this.topics.valid) {
            if (this.isNumber(this.topics.value.chapterIndex)) {
                // tslint:disable-next-line: max-line-length
                if (this.isTopicNameExists(this.topics.value, this.topics.value.chapterIndex) > -1 && this.isTopicNameExists(this.topics.value, this.topics.value.chapterIndex) !== this.topics.value.topicIndex) {
                    this.openSnackBar('Duplicate Topic name in the same Chapter', true);
                    return;
                }
                this.topicsGridList[this.topics.value.chapterIndex].topics[this.topics.value.topicIndex] = this.topics.value;
            }
            else {
                var index = this.topicsGridList.findIndex(function (e) { return e.syllabusChapterId === _this.topics.value.syllabusChapterId; });
                if (index !== -1) {
                    if (this.isTopicNameExists(this.topics.value, index) > -1) {
                        this.openSnackBar('Duplicate Topic name in the same Chapter', true);
                        return;
                    }
                    this.topicsGridList[index].topics.push(this.topics.value);
                }
                else {
                    this.topicsGridList.push({
                        name: this.topics.value.syllabusChapterId ? this.getNameBasedOnId(this.topics.value.syllabusChapterId, 'chapter') : null,
                        syllabusChapterId: this.topics.value ? this.topics.value.syllabusChapterId : null,
                        topics: [this.topics.value]
                    });
                }
            }
            // tslint:disable-next-line: max-line-length
            this.topicsGridList.sort(function (a, b) { return _this.syllabusList.findIndex(function (el) { return el.id === a.syllabusChapterId; }) - _this.syllabusList.findIndex(function (el) { return el.id === b.syllabusChapterId; }); });
            this.dataSource.next(this.topicsGridList);
            var syllabusChapterId = this.topics.value.syllabusChapterId;
            this.topics.reset();
            this.topics.patchValue({
                syllabusChapterId: syllabusChapterId
            });
            this.resetTopics(false);
        }
    };
    SyllabusComponent.prototype.isTopicNameExists = function (form, index) {
        return this.topicsGridList[index].topics.findIndex(function (e) { return e.name.toLowerCase() === form.name.toLowerCase(); });
    };
    SyllabusComponent.prototype.removeTopic = function (topic, index, tindex) {
        var _this = this;
        if (topic.id) {
            this.syllabusService.deleteSyllabusTopics(topic.id)
                .subscribe(function (res) { return _this.onDeleteTopic(res, index, tindex); }, function (err) { return _this.errorResponse(err); });
        }
        else {
            this.onDeleteTopic(false, index, tindex);
        }
    };
    SyllabusComponent.prototype.onDeleteTopic = function (res, index, tindex) {
        this.topicsGridList[index].topics.splice(tindex, 1);
        if (!this.topicsGridList[index].topics.length) {
            this.topicsGridList.splice(index, 1);
        }
        this.dataSource.next(this.topicsGridList);
    };
    SyllabusComponent.prototype.resetTopics = function (resetAll) {
        var _this = this;
        if (resetAll === void 0) { resetAll = true; }
        if (resetAll) {
            this.topics.reset();
        }
        this.removeAttachment('topics');
        if (this.stepper) {
            setTimeout(function () {
                _this.stepper.interacted = false;
                _this.topicsForm.submitted = false;
                _this.changeDetector.detectChanges();
            });
        }
    };
    SyllabusComponent.prototype.onSaveTopics = function () {
        var _this = this;
        var addTopicModel = [];
        this.topicsGridList.map(function (e, i) {
            e.topics.map(function (tp, index) {
                addTopicModel.push({
                    syllabusId: _this.syllabusEryId,
                    syllabusChapterId: e.syllabusChapterId ? e.syllabusChapterId : null,
                    name: tp.name,
                    code: tp.code,
                    sortOrder: index,
                    attachment: tp.attachment ? tp.attachment : {
                        fileName: null,
                        fileValue: null
                    },
                    id: tp.id ? tp.id : null
                });
            });
        });
        if (addTopicModel.length) {
            if (this.isCurrentStepIsUpdate) {
                this.syllabusService.addSyllabusTopics(addTopicModel)
                    .subscribe(function (res) { return _this.onAddTopics(res); }, function (err) { return _this.errorResponse(err); });
            }
            else {
                var formatedModel = addTopicModel.map(function (_a) {
                    var id = _a.id, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id"]);
                    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
                });
                this.syllabusService.addSyllabusTopics(formatedModel)
                    .subscribe(function (res) { return _this.onAddTopics(res); }, function (err) { return _this.errorResponse(err); });
            }
        }
        else if (this.topics.value.name || this.topics.value.code || this.topics.value.syllabusChapterId) {
            this.openSnackBar('Please select the topic to continue', true);
        }
        else if (this.syllabusList.length) {
            this.stepper.next();
        }
        else {
            this.openSnackBar('Please add at least 1 chapter/Topic to Continue', true);
        }
    };
    SyllabusComponent.prototype.onAddTopics = function (res) {
        this.stepper.next();
    };
    SyllabusComponent.prototype.getTopicsBasedOnChapter = function (charpterId) {
        var _this = this;
        this.subTopics.controls.syllabusTopicId.setValue(null);
        this.syllabusService.syllabusChapterTopics(charpterId, this.syllabusEryId)
            .subscribe(function (res) { return _this.setTopicsList(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.setTopicsList = function (res) {
        this.topicsList = [];
        if (res.dataList && res.dataList.length) {
            this.topicsList = res.dataList;
        }
    };
    SyllabusComponent.prototype.onClickTopic = function (item, i, index) {
        this.topics.patchValue(item);
        this.topics.patchValue({
            chapterIndex: i,
            topicIndex: index
        });
        this.scrollIntoViewById('topics-form');
    };
    // -------------------sub-topics-------------------
    SyllabusComponent.prototype.addSubTopic = function () {
        var _this = this;
        if (this.subTopics.valid) {
            if (this.isNumber(this.subTopics.value.subTopicIndex)) {
                if (this.isSubTopicNameExists(this.subTopics.value, this.subTopics.value.topicIndex) > -1 && this.isSubTopicNameExists(this.subTopics.value, this.subTopics.value.topicIndex) !== this.subTopics.value.subTopicIndex) {
                    this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true);
                    return;
                }
                this.subTopicsList[this.subTopics.value.topicIndex].subTopics[this.subTopics.value.subTopicIndex] = this.subTopics.value;
            }
            else {
                // tslint:disable-next-line: max-line-length
                var index = this.subTopicsList.findIndex(function (e) { return e.syllabusTopicId === _this.subTopics.value.syllabusTopicId && e.syllabusChapterId === _this.subTopics.value.syllabusChapterId; });
                if (index !== -1) {
                    if (this.isSubTopicNameExists(this.subTopics.value, index) > -1) {
                        this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true);
                        return;
                    }
                    this.subTopicsList[index].subTopics.push(this.subTopics.value);
                }
                else {
                    this.subTopicsList.push({
                        syllabusChapterId: this.subTopics.value.syllabusChapterId,
                        syllabusTopicId: this.subTopics.value.syllabusTopicId,
                        // tslint:disable-next-line: max-line-length
                        chapterName: this.getNameBasedOnId(this.subTopics.value.syllabusChapterId, 'chapter') ? this.getNameBasedOnId(this.subTopics.value.syllabusChapterId, 'chapter') : 'No chapter',
                        topicName: this.getNameBasedOnId(this.subTopics.value.syllabusTopicId, 'topics'),
                        subTopics: [this.subTopics.value]
                    });
                }
            }
            if (this.syllabusList.length) {
                // tslint:disable-next-line: max-line-length
                this.subTopicsList.sort(function (a, b) {
                    if (a.syllabusChapterId === b.syllabusChapterId) {
                        if (_this.topicsGridList.length) {
                            var data = _this.topicsGridList.find(function (el) { return el.syllabusChapterId === a.syllabusChapterId; }).topics;
                            return data.findIndex(function (el) { return el.id === a.syllabusTopicId; }) - data.findIndex(function (el) { return el.id === b.syllabusTopicId; });
                        }
                        return;
                    }
                    else {
                        // tslint:disable-next-line: max-line-length
                        return _this.syllabusList.findIndex(function (el) { return el.id === a.syllabusChapterId; }) - _this.syllabusList.findIndex(function (el) { return el.id === b.syllabusChapterId; });
                    }
                });
            }
            this.setSubTopicsData(this.subTopicsList);
            var previousdata = this.subTopics.value;
            this.subTopics.reset();
            this.subTopics.patchValue({
                syllabusChapterId: previousdata.syllabusChapterId,
                syllabusTopicId: previousdata.syllabusTopicId
            });
            this.resetSubTopics(false);
        }
    };
    SyllabusComponent.prototype.isSubTopicNameExists = function (form, index) {
        return this.subTopicsList[index].subTopics.findIndex(function (el) { return el.name.toLowerCase() === form.name.toLowerCase(); });
    };
    SyllabusComponent.prototype.createSubTopic = function (subTopic) {
        return {
            syllabusChapterId: subTopic ? subTopic.syllabusChapterId : null,
            syllabusTopicId: subTopic ? subTopic.syllabusTopicId : null,
            name: subTopic ? subTopic.name : null,
            code: subTopic ? subTopic.code : null,
            attachment: {
                fileName: subTopic.fileName,
                fileValue: null
            },
            id: subTopic ? subTopic.id : 0,
            sortOrder: subTopic ? subTopic.sortOrder : null,
        };
    };
    SyllabusComponent.prototype.removeSubTopic = function (subTopic, index, subIndex) {
        var _this = this;
        if (subTopic.id) {
            this.syllabusService.deleteSyllabusSubTopics(subTopic.id)
                .subscribe(function (res) { return _this.onDeleteSubTopic(res, index, subIndex); }, function (err) { return _this.errorResponse(err); });
        }
        else {
            this.onDeleteSubTopic(false, index, subIndex);
        }
    };
    SyllabusComponent.prototype.onDeleteSubTopic = function (res, index, subIndex) {
        this.subTopicsList[index].subTopics.splice(subIndex, 1);
        if (!this.subTopicsList[index].subTopics.length) {
            this.subTopicsList.splice(index, 1);
        }
        this.setSubTopicsData(this.subTopicsList);
    };
    SyllabusComponent.prototype.resetSubTopics = function (forAll) {
        var _this = this;
        if (forAll === void 0) { forAll = true; }
        if (forAll) {
            this.subTopics.reset();
            this.topicsList = [];
        }
        this.removeAttachment('subTopics');
        setTimeout(function () {
            _this.stepper.selected.interacted = false;
            _this.subTopicForm.submitted = false;
            _this.changeDetector.detectChanges();
        });
    };
    SyllabusComponent.prototype.onSaveSubTopics = function () {
        var _this = this;
        var subTopicModel = [];
        this.subTopicsList.map(function (e) {
            e.subTopics.map(function (sb, i) {
                subTopicModel.push({
                    syllabusTopicId: e.syllabusTopicId,
                    name: sb.name,
                    code: sb.code,
                    sortOrder: i,
                    attachment: sb.attachment ? sb.attachment : {
                        fileName: null,
                        fileValue: null
                    },
                    id: sb.id ? sb.id : null
                });
            });
        });
        if (subTopicModel.length) {
            this.syllabusService.addSyllabusSubTopics(subTopicModel)
                .subscribe(function (res) { return _this.afterAddAubTopics(res); }, function (err) { return _this.errorResponse(err); });
        }
        else {
            this.stepper.next();
        }
    };
    SyllabusComponent.prototype.afterAddAubTopics = function (res) {
        this.stepper.next();
    };
    SyllabusComponent.prototype.getAllSyllabusSubTopics = function () {
        var _this = this;
        this.syllabusService.syllabusSubTopics(this.syllabusEryId)
            .subscribe(function (res) { return _this.onGetAllSyllabusSubTopics(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.onGetAllSyllabusSubTopics = function (res) {
        var _this = this;
        this.subTopicsList = [];
        if (res.dataList && res.dataList.length) {
            this.isCurrentStepIsUpdate = true;
            res.dataList.map(function (e) {
                var index = _this.subTopicsList.findIndex(function (el) { return e.syllabusTopicId === el.syllabusTopicId && e.syllabusChapterId === el.syllabusChapterId; });
                if (index !== -1) {
                    _this.subTopicsList[index].subTopics.push(_this.createSubTopic(e));
                }
                else {
                    _this.subTopicsList.push({
                        syllabusChapterId: e.syllabusChapterId,
                        syllabusTopicId: e.syllabusTopicId,
                        // tslint:disable-next-line: max-line-length
                        chapterName: e.syllabusChapterName,
                        topicName: e.syllabusTopicName,
                        subTopics: [_this.createSubTopic(e)]
                    });
                }
            });
            this.setSubTopicsData(this.subTopicsList);
            this.resetSubTopics();
        }
    };
    SyllabusComponent.prototype.onClickSubTopic = function (row, item, index, subIndex) {
        this.getTopicsBasedOnChapter(row.syllabusChapterId);
        this.subTopics.patchValue({
            syllabusChapterId: row.syllabusChapterId,
            syllabusTopicId: row.syllabusTopicId,
            name: item.name,
            code: item.code,
            attachment: item.attachment,
            id: item.id,
            topicIndex: index,
            subTopicIndex: subIndex
        });
        this.scrollIntoViewById('sub-topic-form');
    };
    SyllabusComponent.prototype.setSubTopicsData = function (rows) {
        this.supTopicsTableData.next(rows);
        return;
    };
    // -----stepper all syllabus details
    SyllabusComponent.prototype.getAllSyllabusTopics = function (id) {
        var _this = this;
        this.syllabusService.syllabusAllTopics(id)
            .subscribe(function (res) { return _this.onGetAllSyllabusTopics(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.onGetAllSyllabusTopics = function (res) {
        var _this = this;
        this.topicsGridList = [];
        if (res.dataList && res.dataList.length) {
            this.isCurrentStepIsUpdate = true;
            res.dataList.map(function (e) {
                var index = _this.topicsGridList.findIndex(function (el) { return el.syllabusChapterId === e.syllabusChapterId; });
                if (index !== -1) {
                    _this.topicsGridList[index].topics.push(_this.createTopicFromAPi(e));
                }
                else {
                    _this.topicsGridList.push({
                        name: _this.getNameBasedOnId(e.syllabusChapterId, 'chapter'),
                        syllabusChapterId: e.syllabusChapterId,
                        topics: [_this.createTopicFromAPi(e)]
                    });
                }
                _this.dataSource.next(_this.topicsGridList);
                _this.resetTopics();
            });
        }
    };
    SyllabusComponent.prototype.createTopicFromAPi = function (topic) {
        return {
            syllabusChapterId: topic ? topic.syllabusChapterId : null,
            name: topic ? topic.name : null,
            code: topic ? topic.code : null,
            attachment: {
                fileName: topic.fileName,
                fileValue: null
            },
            id: topic ? topic.id : null,
            sortOrder: topic ? topic.sortOrder : null
        };
    };
    // -------------------check point-------------------
    SyllabusComponent.prototype.getCheckPointsList = function () {
        var _this = this;
        this.syllabusService.checkPointTypes()
            .subscribe(function (res) { return _this.setCheckPointsTypesData(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.setCheckPointsTypesData = function (res) {
        this.checkPointTypes = res.checkPointTypes;
        this.checkPointTypes.map(function (e) { return (e.code === 'CPTP_C' ? e.value = 1 : e.value = 0); });
    };
    SyllabusComponent.prototype.getTestTypes = function () {
        var _this = this;
        this.gradeTermConfigurationService.fetchTestTypes()
            .subscribe(function (res) { return _this.testTypes = res.listViews; }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.deleteCheckPoint = function (item) {
        var _this = this;
        this.syllabusService.deleteSyllabusCheckPoints(item.syllabusCheckPointId)
            .subscribe(function (res) { return _this.onDeleteCheckPoints(res); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.onDeleteCheckPoints = function (res) {
        this.getAllChapterTopicSubTopics();
    };
    SyllabusComponent.prototype.onInsertTest = function (index, before) {
        if (before === void 0) { before = true; }
        this.checkPointTestForm.patchValue({
            before: before,
            index: before ? index : index + 1
        });
        this.dialogRef.open(this.checkPointTestDialog, {
            panelClass: 'secondary-model',
            width: '500px'
        });
    };
    SyllabusComponent.prototype.onSubmitCheckPointForm = function () {
        var _this = this;
        if (this.checkPointTestForm.valid) {
            var checkpoints_1 = {
                syllabusId: this.syllabusEryId,
                testTypeId: this.checkPointTestForm.value.testTypeId,
                name: this.checkPointTestForm.value.name,
                isCumulative: this.checkPointTestForm.value.iscumulative,
                syllabusCheckpointInclusions: []
            };
            if (+this.checkPointTestForm.value.iscumulative) {
                this.syllabusDataList.map(function (e, i) {
                    if (!e.syllabusCheckPointId && i < _this.checkPointTestForm.value.index) {
                        checkpoints_1.syllabusCheckpointInclusions.push({
                            syllabusChapterId: e.chapterId ? e.chapterId : null,
                            syllabusTopicId: e.topicId ? e.topicId : null,
                            syllabusSubtopicId: e.subTopicId ? e.subTopicId : null
                        });
                    }
                });
            }
            else {
                var checkPointExists = false;
                for (var i = this.syllabusDataList.length; i > -1; i--) {
                    if (i < this.checkPointTestForm.value.index) {
                        if (this.syllabusDataList[i].syllabusCheckPointId) {
                            checkPointExists = true;
                        }
                        else if (!checkPointExists) {
                            checkpoints_1.syllabusCheckpointInclusions.push({
                                syllabusChapterId: this.syllabusDataList[i].chapterId ? this.syllabusDataList[i].chapterId : null,
                                syllabusTopicId: this.syllabusDataList[i].topicId ? this.syllabusDataList[i].topicId : null,
                                syllabusSubtopicId: this.syllabusDataList[i].subTopicId ? this.syllabusDataList[i].subTopicId : null
                            });
                        }
                    }
                }
                checkpoints_1.syllabusCheckpointInclusions = checkpoints_1.syllabusCheckpointInclusions.reverse();
            }
            if (checkpoints_1.syllabusCheckpointInclusions.length) {
                this.syllabusService.addSyllabusCheckPointInclusions(checkpoints_1)
                    .subscribe(function (res) { return _this.onCheckPointsAdd(res); }, function (err) { return _this.errorResponse(err); });
            }
            else {
                this.openSnackBar('There are no chapter topics for Creating Checkpoint', true);
            }
            this.dialogRef.closeAll();
        }
    };
    SyllabusComponent.prototype.onCheckPointsAdd = function (res) {
        this.onCancelCheckPoints();
        this.getAllChapterTopicSubTopics();
    };
    SyllabusComponent.prototype.onCancelCheckPoints = function () {
        this.checkPointTestForm.reset();
    };
    SyllabusComponent.prototype.onSelectionChange = function (event) {
        var _this = this;
        this.isCurrentStepIsUpdate = false;
        switch (event.selectedIndex) {
            case 0:
                if (this.syllabusEryId) {
                    this.syllabusService.syllabusBasicDetails(this.syllabusEryId)
                        .subscribe(function (res) { return _this.afterBasicDetailsGet(res); }, function (err) { return _this.errorResponse(err); });
                }
                break;
            case 1:
                this.markAs(this.chaptersInfo);
                this.chapterForm.submitted = false;
                this.getChapters();
                break;
            case 2:
                this.markAs(this.topics);
                this.topicsForm.submitted = false;
                this.getChapters(true);
                this.getAllSyllabusTopics(this.syllabusEryId);
                break;
            case 3:
                this.markAs(this.subTopics);
                this.subTopicForm.submitted = false;
                if (!this.syllabusList.length) {
                    this.getChapters(true);
                }
                this.getTopicsBasedOnChapter();
                this.getAllSyllabusSubTopics();
                break;
            case 4:
                this.getAllChapterTopicSubTopics();
                break;
            case 5:
                this.completeData.patchValue(this.basicInfo.value);
                this.getAllChapterTopicSubTopics();
                setTimeout(function () {
                    _this.scrollIntoViewById('last-step');
                });
                break;
        }
        setTimeout(function () {
            _this.stepper._steps._results[event.selectedIndex].interacted = false;
        }, 500);
    };
    SyllabusComponent.prototype.markAs = function (form) {
        var controls = Object.keys(form.controls);
        for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
            var control = controls_1[_i];
            form.controls[control].markAsUntouched();
        }
        return form;
    };
    SyllabusComponent.prototype.onSyllabusData = function (res) {
        this.syllabusDetails = res.syllabusDetailsView;
    };
    SyllabusComponent.prototype.getNameBasedOnId = function (id, form) {
        var label = '';
        switch (form) {
            case 'chapter':
                if (this.syllabusList.find(function (e) { return e.id === id; })) {
                    label = this.syllabusList.find(function (e) { return e.id === id; }).name;
                }
                break;
            case 'topics':
                if (this.topicsList.find(function (e) { return e.id === id; })) {
                    label = this.topicsList.find(function (e) { return e.id === id; }).name;
                }
                break;
            case 'testTypeId':
                if (this.testTypes.find(function (e) { return e.id === id; })) {
                    label = this.testTypes.find(function (e) { return e.id === id; }).name;
                }
                break;
            case 'iscumulative':
                if (this.checkPointTypes.find(function (e) { return e.id === id; })) {
                    label = this.checkPointTypes.find(function (e) { return e.id === id; }).name;
                }
                break;
        }
        return label;
    };
    SyllabusComponent.prototype.imgChanged = function (files, stepper) {
        if (this.checkFileSize(files[0], app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            switch (stepper) {
                case 'syllabus':
                    that.basicInfo.controls.attachment.patchValue({
                        fileName: files[0].name,
                        fileValue: reader.result.split(',')[1]
                    });
                    break;
                case 'chapters':
                    that.chaptersInfo.controls.attachment.patchValue({
                        fileName: files[0].name,
                        fileValue: reader.result.split(',')[1]
                    });
                    break;
                case 'topics':
                    that.topics.controls.attachment.patchValue({
                        fileName: files[0].name,
                        fileValue: reader.result.split(',')[1]
                    });
                    break;
                case 'subTopics':
                    that.subTopics.controls.attachment.patchValue({
                        fileName: files[0].name,
                        fileValue: reader.result.split(',')[1]
                    });
                    break;
            }
            that.changeDetector.detectChanges();
        };
    };
    SyllabusComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        this.basicInfo.patchValue({
            fileName: null,
            fileValue: null
        });
        this.changeDetector.detectChanges();
    };
    SyllabusComponent.prototype.boardChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (event.value) {
            if (!onManualChange) {
                this.basicInfo.controls.classId.patchValue(null);
                this.basicInfo.controls.courseId.patchValue(null);
                this.coursesList = [];
            }
            this.getAvailableClasses(event.value);
        }
    };
    SyllabusComponent.prototype.classChanged = function (event, onManualChange) {
        if (onManualChange === void 0) { onManualChange = false; }
        if (!onManualChange) {
            this.basicInfo.controls.courseId.patchValue(null);
            this.coursesList = [];
        }
        this.getboardSyllabusList();
        this.getCourses();
    };
    SyllabusComponent.prototype.getCourses = function () {
        var _this = this;
        this.coursesList = [];
        this.classTimetableService.classTimetableCoursesGet(this.basicInfo.value.schoolBoardId, this.basicInfo.value.classId).subscribe(function (response) {
            if (response.commonViewModel && response.commonViewModel.length) {
                response.commonViewModel.forEach(function (element) {
                    _this.coursesList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SyllabusComponent.prototype.courseChanged = function (event) {
    };
    SyllabusComponent.prototype.openattachment = function (chapter) {
        window.open(chapter.fileValue, '_blank');
    };
    SyllabusComponent.prototype.openForm = function () {
        this.stepper.reset();
        this.getAvailableSchoolBoards('basicInfo', 'schoolBoardId');
        this.syllabusEryId = null;
        this.disableAllDataAdding = false;
        this.isCurrentStepIsUpdate = false;
        this.closeForm = false;
    };
    SyllabusComponent.prototype.onCancel = function (fromLastStep) {
        if (fromLastStep === void 0) { fromLastStep = false; }
        if (fromLastStep) {
            document.getElementById('reset-button').click();
            return;
        }
        this.stepper.reset();
        this.stepper._steps._results.forEach(function (x, i) {
            x.interacted = false;
            x.completed = false;
        });
        this.closeForm = true;
        this.syllabusList = [];
        this.dataSource.next([]);
        this.supTopicsTableData.next([]);
        this.syllabusEryId = null;
        this.syllabusDataList = [];
        this.isCurrentStepIsUpdate = false;
        this.topicsGridList = [];
        this.subTopicsList = [];
        this.coursesList = [];
        this.syllabusEryId = null;
        // this.changeDetector.detectChanges();
        this.getSyllabusTableData();
    };
    SyllabusComponent.prototype.getAllChapterTopicSubTopics = function (isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.syllabusService.syllabusChaptersList(this.syllabusEryId)
            .subscribe(function (res) { return _this.setSyllabusDetails(res, isManualChange); }, function (err) { return _this.errorResponse(err); });
    };
    SyllabusComponent.prototype.setSyllabusDetails = function (res, isManualChange) {
        var _this = this;
        this.syllabusDataList = [];
        if (res.syllabusDetailsView && res.syllabusDetailsView.length) {
            this.checkPoints.patchValue({ checkPoint: true });
        }
        var tempIds = [];
        res.syllabusDetailsView.map(function (e) {
            if (e.syllabusCheckPointsListView && e.syllabusCheckPointsListView.length) {
                e.syllabusCheckPointsListView.map(function (el) {
                    if (tempIds.findIndex(function (m) { return m.syllabusCheckPointsId === el.syllabusCheckPointsId; }) === -1) {
                        tempIds.push(el);
                    }
                });
                var checkPoints = tempIds.filter(function (val) { return !e.syllabusCheckPointsListView.some(function (ee) { return ee.syllabusCheckPointsId === val.syllabusCheckPointsId; }); });
                tempIds = e.syllabusCheckPointsListView;
                checkPoints.map(function (cp) {
                    _this.syllabusDataList.push(cp);
                });
                _this.syllabusDataList.push(e);
            }
            else {
                tempIds.map(function (tm) {
                    _this.syllabusDataList.push(tm);
                });
                tempIds = [];
                _this.syllabusDataList.push(e);
            }
        });
        tempIds.map(function (tm) {
            _this.syllabusDataList.push(tm);
        });
        this.disableAllDataAdding = this.syllabusDataList.some(function (e) { return e.syllabusCheckPointsId; });
        if (!isManualChange) {
            this.checkPoints.patchValue({
                checkPoint: this.disableAllDataAdding
            });
        }
    };
    SyllabusComponent.prototype.isNumber = function (data) {
        return Object(util__WEBPACK_IMPORTED_MODULE_14__["isNumber"])(data);
    };
    SyllabusComponent.prototype.onChangeCheckPoint = function (value) {
        var _this = this;
        if (!value) {
            if (this.syllabusDataList.some(function (e) { return e.syllabusCheckPointId; })) {
                var dialogRef = this.dialogMethod('Please Confirm to Clear all check Points for this syllabus if exists');
                dialogRef.afterClosed().subscribe(function (action) {
                    if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CONFIRM) {
                        _this.syllabusService.deleteSyllabusCheckpoints(_this.syllabusEryId)
                            .subscribe(function (res) { return _this.onCheckPointsDelete(res); }, function (err) { return _this.errorResponse(err); });
                    }
                    else {
                        _this.checkPoints.patchValue({
                            checkPoint: true
                        });
                        _this.dialogRef.closeAll();
                    }
                });
            }
        }
        else {
            this.getAllChapterTopicSubTopics(true);
        }
    };
    SyllabusComponent.prototype.onCheckPointsDelete = function (res) {
        this.disableAllDataAdding = false;
        this.openSnackBar('Check Points Deleted successfully');
        this.getAllChapterTopicSubTopics();
    };
    SyllabusComponent.prototype.dialogMethod = function (dialogData) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CANCEL, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CONFIRM },
        });
    };
    SyllabusComponent.prototype.getFileNamewithPath = function (file) {
        if (file) {
            return this.storeService.getFilePath(file.fileName ? file.fileName : file);
        }
    };
    SyllabusComponent.prototype.isStepEnable = function () {
        // tslint:disable-next-line: max-line-length
        return (this.syllabusEryId && (this.syllabusList.length || this.topicsGridList.length || (this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusChaptersCount || this.syllabusBasicDetails.syllabusTopicsCount))));
    };
    SyllabusComponent.prototype.getRowsSpan = function (ele, i) {
        var _this = this;
        if (this.subTopicsList.findIndex(function (e) { return e.chapterName === ele.chapterName; }) === i) {
            return this.subTopicsList.filter(function (e) { return e.chapterName === _this.subTopicsList[i].chapterName; }).length;
        }
        else {
            return false;
        }
    };
    SyllabusComponent.prototype.isStepComplete = function (index) {
        var isComplete = false;
        switch (index) {
            case 0:
                isComplete = this.stepper.selectedIndex > 0;
                break;
            case 1:
                isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusChaptersCount || this.syllabusList.length);
                break;
            case 2:
                isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusTopicsCount || this.topicsGridList.length);
                break;
            case 3:
                isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusSubTopicsCount || this.subTopicsList.length);
                break;
            case 4:
                isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.checkPointsCount || this.disableAllDataAdding);
                break;
            case 5:
                isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.checkPointsCount || this.disableAllDataAdding);
                break;
        }
        return isComplete ? true : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chapterForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "chapterForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topicsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "topicsForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subTopicForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "subTopicForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "infoForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkPointTestDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SyllabusComponent.prototype, "checkPointTestDialog", void 0);
    SyllabusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syllabus',
            template: __webpack_require__(/*! ./syllabus.component.html */ "./src/app/modules/configuration/syllabus/syllabus.component.html"),
            providers: [app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__["ClassTimetableService"], app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_11__["SchoolSyllabusService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_12__["GardeTermConfigurationService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_16__["StoreService"]],
            styles: [__webpack_require__(/*! ./syllabus.component.scss */ "./src/app/modules/configuration/syllabus/syllabus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_6__["ClassTimetableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            app_service_syllabus_syllabus_service__WEBPACK_IMPORTED_MODULE_11__["SchoolSyllabusService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_12__["GardeTermConfigurationService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_16__["StoreService"]])
    ], SyllabusComponent);
    return SyllabusComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/syllabus/syllabus.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/configuration/syllabus/syllabus.module.ts ***!
  \*******************************************************************/
/*! exports provided: SyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusModule", function() { return SyllabusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _syllabus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllabus-routing.module */ "./src/app/modules/configuration/syllabus/syllabus-routing.module.ts");
/* harmony import */ var _syllabus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syllabus.component */ "./src/app/modules/configuration/syllabus/syllabus.component.ts");
/* harmony import */ var _syllabus_details_syllabus_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syllabus-details/syllabus-details.component */ "./src/app/modules/configuration/syllabus/syllabus-details/syllabus-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
















var SyllabusModule = /** @class */ (function () {
    function SyllabusModule() {
    }
    SyllabusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_syllabus_component__WEBPACK_IMPORTED_MODULE_4__["SyllabusComponent"], _syllabus_details_syllabus_details_component__WEBPACK_IMPORTED_MODULE_5__["SyllabusDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__["MatcomponentsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedManagementModule"],
                _syllabus_routing_module__WEBPACK_IMPORTED_MODULE_3__["SyllabusRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_13__["ProgressBarModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                    multi: true,
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SyllabusModule);
    return SyllabusModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-configuration-syllabus-syllabus-module.js.map