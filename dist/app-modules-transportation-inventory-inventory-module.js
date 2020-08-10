(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-transportation-inventory-inventory-module"],{

/***/ "./src/app/modules/transportation/inventory/inventory-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/inventory-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicle_inventory_vehicle_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-inventory/vehicle-inventory.component */ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.ts");
/* harmony import */ var _vehicle_inventory_details_vehicle_inventory_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-inventory-details/vehicle-inventory-details.component */ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.ts");
/* harmony import */ var _vehicle_insurance_vehicle_insurance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-insurance/vehicle-insurance.component */ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.ts");
/* harmony import */ var _vehicle_inspection_history_vehicle_inspection_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-inspection-history/vehicle-inspection-history.component */ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.ts");







var routes = [
    { path: 'vehicle-inventory', component: _vehicle_inventory_vehicle_inventory_component__WEBPACK_IMPORTED_MODULE_3__["VehicleInventoryComponent"], data: { title: 'Vehicle Inventory' } },
    { path: 'vehicle-inventory/vehicle-inventory-details/:id', component: _vehicle_inventory_details_vehicle_inventory_details_component__WEBPACK_IMPORTED_MODULE_4__["VehicleInventoryDetailsComponent"], data: { title: 'Vehicle Inventory Details' } },
    { path: 'vehicle-insurance', component: _vehicle_insurance_vehicle_insurance_component__WEBPACK_IMPORTED_MODULE_5__["VehicleInsuranceComponent"], data: { title: 'Vehicle Insurance' } },
    { path: 'vehicle-inspection', component: _vehicle_inspection_history_vehicle_inspection_history_component__WEBPACK_IMPORTED_MODULE_6__["VehicleInspectionHistoryComponent"], data: { title: 'Vehicle Inspection' } }
];
var InventoryRoutingModule = /** @class */ (function () {
    function InventoryRoutingModule() {
    }
    InventoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InventoryRoutingModule);
    return InventoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/transportation/inventory/inventory.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/inventory.module.ts ***!
  \**********************************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
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
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/modules/transportation/inventory/inventory-routing.module.ts");
/* harmony import */ var _vehicle_inventory_vehicle_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle-inventory/vehicle-inventory.component */ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.ts");
/* harmony import */ var _vehicle_inventory_details_vehicle_inventory_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vehicle-inventory-details/vehicle-inventory-details.component */ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.ts");
/* harmony import */ var app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/Transport/vehicle-inventory.service */ "./src/app/service/Transport/vehicle-inventory.service.ts");
/* harmony import */ var _vehicle_pollution_check_history_vehicle_pollution_check_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vehicle-pollution-check-history/vehicle-pollution-check-history.component */ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.ts");
/* harmony import */ var _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vehicle-details/vehicle-details.component */ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _vehicle_insurance_vehicle_insurance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vehicle-insurance/vehicle-insurance.component */ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.ts");
/* harmony import */ var _vehicle_inspection_history_vehicle_inspection_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vehicle-inspection-history/vehicle-inspection-history.component */ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.ts");
/* harmony import */ var _vehicle_service_history_vehicle_service_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vehicle-service-history/vehicle-service-history.component */ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.ts");





















var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_vehicle_inventory_vehicle_inventory_component__WEBPACK_IMPORTED_MODULE_13__["VehicleInventoryComponent"],
                _vehicle_inventory_details_vehicle_inventory_details_component__WEBPACK_IMPORTED_MODULE_14__["VehicleInventoryDetailsComponent"],
                _vehicle_pollution_check_history_vehicle_pollution_check_history_component__WEBPACK_IMPORTED_MODULE_16__["VehiclePollutionCheckHistoryComponent"],
                _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_17__["VehicleDetailsComponent"],
                _vehicle_inspection_history_vehicle_inspection_history_component__WEBPACK_IMPORTED_MODULE_19__["VehicleInspectionHistoryComponent"],
                _vehicle_service_history_vehicle_service_history_component__WEBPACK_IMPORTED_MODULE_20__["VehicleServiceHistoryComponent"],
                _vehicle_insurance_vehicle_insurance_component__WEBPACK_IMPORTED_MODULE_18__["VehicleInsuranceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inventory_routing_module__WEBPACK_IMPORTED_MODULE_12__["InventoryRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_3__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }, app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_15__["VehicleInventoryService"],
            ],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-24 pb-20\">\n  <div class=\"simple-table-container radius-t-20 mat-elevation-z8\" fxLayout=\"column\">\n    <div fxLayoutAlign=\"end center\" class=\"border-bottom p-20\">\n      <button mat-button (click)=\"editVehhicle()\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <!-- <button mat-raised-button [routerLink]=\"['/transportation/inventory/vehicle-inventory']\" color=\"primary\" class=\"text-uppercase mx-4\"> \n        {{'Back' | translate}}\n      </button> -->\n      <button mat-button class=\"text-uppercase\" (click)=\"getHelpText('Vehicle Basic Details')\">\n        <mat-icon>info</mat-icon>\n      </button>\n    </div>\n\n\n    <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n      class=\"institution-details pt-0 confirm-table\" *ngIf=\"vehicleInformationView && isEdit === false\">\n      <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngFor=\"let column of vehicleInformationHeaders\">\n        <div fxLayout=\"row\" fxFlex=\"50\" ><span translate>{{column}}</span></div>\n        <div fxLayout=\"row\" fxFlex=\"50\"\n          *ngIf=\"column != 'registrationCertAttachment' && column != 'photoAttachment' && vehicleInformationView[column] != null\">\n          <span class=\"px-4\">:</span>{{vehicleInformationView[column]}}</div>\n        <div fxLayout=\"row\" fxFlex=\"50\"\n          *ngIf=\"column == 'registrationCertAttachment' && vehicleInformationView[column] != null\"><a\n            [href]=\"docUrl\"><span class=\"px-4\">:</span><span translate>downloadDocument</span></a></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"\n        *ngIf=\"column == 'photoAttachment' && vehicleInformationView[column]\"><span class=\"px-4\">:</span><span translate><a\n          [href]=\"vechileImageUrl\" target=\"_blank\">View Photo Attachment</a></span></div>\n        <div fxLayout=\"row\" *ngIf=\"vehicleInformationView[column] == null\" fxFlex=\"50\"><span class=\"px-4\">:</span>--\n        </div>\n      </mat-list-item>\n    </mat-list>\n    <!-- <mat-expansion-panel [class.tabs-table-padding0]=\"matExpansioncustomClass\" [expanded]=\"accordionStep === 1\"> -->\n      <ng-template  *ngIf=\"isEdit === true\" [ngTemplateOutlet]=\"myTemplate\"></ng-template>\n     <!-- </mat-expansion-panel> -->\n  </div>\n</div>\n\n\n\n<ng-template #myTemplate>\n  <form fxLayout=\"column\" [formGroup]=\"vehicleForm\" #vehicle=\"ngForm\" class=\"p-20\"  autocomplete=\"off\">\n    <div fxLayout=\"roe\" fxLayout.gt-sm=\"row\" class=\"pt-12\" fxFlex=\"100\">\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n        <mat-label #name translate>Vehicle Name</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','name')\" (blur)=\"trimTextBoxSpaces('vehicleForm','name')\" formControlName=\"name\" matInput required>\n        <mat-error>\n          <app-validation [labelName]='name.innerText' [validationControl]=\"vehicleForm.controls.name\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"500\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n        <mat-label #model translate>Vehicle Model</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','model')\" (blur)=\"trimTextBoxSpaces('vehicleForm','model')\" formControlName=\"model\" matInput required>\n        <mat-error>\n          <app-validation [labelName]='model.innerText' [validationControl]=\"vehicleForm.controls.model\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n        <mat-label #chassisNumber translate>Chassis Number</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','chassisNumber')\" (blur)=\"trimTextBoxSpaces('vehicleForm','chassisNumber')\" formControlName=\"chassisNumber\" matInput>\n        <mat-error>\n          <app-validation [labelName]='chassisNumber.innerText' [validationControl]=\"vehicleForm.controls.chassisNumber\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" >\n        <mat-label #regNumber translate>Registration Number</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','regNumber')\" (blur)=\"trimTextBoxSpaces('vehicleForm','regNumber')\" formControlName=\"regNumber\" matInput>\n        <mat-error>\n          <app-validation [labelName]='regNumber.innerText' [validationControl]=\"vehicleForm.controls.regNumber\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n        <mat-label #engineNumber translate>Engine Number</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','engineNumber')\" (blur)=\"trimTextBoxSpaces('vehicleForm','engineNumber')\" formControlName=\"engineNumber\" matInput>\n        <mat-error>\n          <app-validation [labelName]='engineNumber.innerText' [validationControl]=\"vehicleForm.controls.engineNumber\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n        class=\"pr-sm-20 icon-center\">\n        <mat-label #manufactureYearr translate>Manufacture Year Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('manufactureYear',vehicleForm)\" [matDatepicker]=\"manufactureYear\"\n          formControlName=\"manufactureYear\" autocomplete=\"off\">\n        <mat-datepicker-toggle matSuffix [for]=\"manufactureYear\"></mat-datepicker-toggle>\n        <mat-datepicker #manufactureYear></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]='manufactureYearr.innerText'\n            [validationControl]=\"vehicleForm.controls.manufactureYear\" [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"pr-sm-20\">\n        <mat-label #maxCapacity translate>Max Capacity</mat-label>\n        <input (keyup)=\"preventSpace($event,'vehicleForm','maxCapacity')\" (blur)=\"trimTextBoxSpaces('vehicleForm','maxCapacity')\" formControlName=\"maxCapacity\" numbersOnly matInput>\n        <mat-error>\n          <app-validation [labelName]='maxCapacity.innerText' [validationControl]=\"vehicleForm.controls.maxCapacity\"\n            [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <!-- <div fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-sm-20 pt-16\"> -->\n        <div fxLayout=\"column\" class=\"w-260 pt-12\">\n          <div fxLayout=\"row\">\n            <button mat-raised-button type=\"button\" color=\"primary\"\n              (click)=\"logoImgInput.value='';logoImgInput.click()\">\n              <mat-icon class=\"mr-8\">attachment</mat-icon>{{'Registration Certificate' | translate}}\n            </button>\n            <button mat-icon-button type=\"button\" [style.visibility]=\"logoImgProp?.src ? 'visible' : 'hidden'\">\n              <mat-icon class=\"mb-4 grey-600-fg\" \n                (click)=\"logoImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n            </button>\n          </div>\n          <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n            (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n          <div class=\"pt-8 logo-name break-word\"\n            [style.visibility]=\"vehicleForm?.value?.registrationCertAttachment?.fileName ? 'visible' : 'hidden'\"\n            [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n            {{vehicleForm?.value?.registrationCertAttachment?.fileName}}</div>\n        </div>\n      <!-- </div> -->\n\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"m-16\">\n      <button mat-raised-button (click)=\"onCancel()\" type=\"reset\" class=\"text-uppercase mr-12\">\n        {{'Cancel' | translate}}\n      </button>\n      <button mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\" (click)=\"onSubmit(vehicleForm)\">\n        {{'Update' | translate}}\n      </button>\n    </div>\n\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtZGV0YWlscy92ZWhpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/Transport/vehicle-inventory.service */ "./src/app/service/Transport/vehicle-inventory.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");











var VehicleDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleDetailsComponent, _super);
    function VehicleDetailsComponent(cd, commonService, _formBuilder, route, vehicleInventoryService, storeService, sanitizer, dialogRef, snackBar) {
        var _this = _super.call(this) || this;
        _this.cd = cd;
        _this.commonService = commonService;
        _this._formBuilder = _formBuilder;
        _this.route = route;
        _this.vehicleInventoryService = vehicleInventoryService;
        _this.storeService = storeService;
        _this.sanitizer = sanitizer;
        _this.dialogRef = dialogRef;
        _this.snackBar = snackBar;
        _this.vehicleInformationHeaders = [];
        _this.isEdit = false;
        return _this;
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleForm = this._formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            model: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            maxCapacity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_8__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100)]],
            chassisNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)],
            engineNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)],
            manufactureYear: [null],
            manufacturer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            regNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)],
            registrationCertAttachment: this.attachmentInfo
        });
        this.vehicleInformationView = {
            chassisNumber: null,
            engineNumber: null,
            manufactureYear: null,
            manufacturer: null,
            maxCapacity: null,
            model: '',
            vehicleName: '',
            regNumber: null,
            photoAttachment: {
                fileValue: '',
                fileName: ''
            },
            registrationCertAttachment: this.attachmentInfo
        };
        this.vehicleInformationHeaders = Object.getOwnPropertyNames(this.vehicleInformationView);
        var index = this.vehicleInformationHeaders.indexOf('photoAttachment');
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.vehicleId = params.id;
            }
        });
        this.assgnData();
    };
    VehicleDetailsComponent.prototype.assgnData = function () {
        var _this = this;
        this.vechileImageUrl = '';
        this.vehicleInventoryService.getVehicle(this.vehicleId).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.vehicleForm.controls.manufactureYear.patchValue(res.vehicleDetailsView.manufactureYear);
                this.vehicleInformationView = this.prepareModel(this.vehicleInformationView, res.vehicleDetailsView);
                this.vehicleInformationView.vehicleName = res.vehicleDetailsView.name;
                this.setDateFormat(this.vehicleInformationView);
                this.data = res.vehicleDetailsView;
                this.vehicleForm.patchValue(res.vehicleDetailsView);
                this.cd.detectChanges();
                this.fileName = '';
                if (res.vehicleDetailsView.registrationCertAttachment !== null && res.vehicleDetailsView.registrationCertAttachment !== undefined) {
                    this.fileName = res.vehicleDetailsView.registrationCertAttachment.fileName;
                    this.logoImgProp = {
                        src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.registrationCertAttachment.fileName))
                    };
                    this.storeService.storeFileEncryptByFileNameGet(res.vehicleDetailsView.registrationCertAttachment.fileName)
                        .subscribe(function (result) {
                        if (result) {
                            _this.vehicleForm.controls.registrationCertAttachment.patchValue({ fileName: result.fileNameWithExtension, fileValue: result.value });
                            _this.cd.detectChanges();
                        }
                    });
                }
                if (res.vehicleDetailsView.photoAttachment !== null && res.vehicleDetailsView.photoAttachment !== undefined) {
                    this.fileName = res.vehicleDetailsView.photoAttachment.fileName;
                    this.vechileImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.photoAttachment.fileName));
                    this.logoImgProp = {
                        src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.photoAttachment.fileName))
                    };
                    this.storeService.storeFileEncryptByFileNameGet(res.vehicleDetailsView.photoAttachment.fileName)
                        .subscribe(function (result) {
                        if (result) {
                            _this.vehicleInformationView.photoAttachment.fileName = result.fileNameWithExtension;
                            _this.vehicleInformationView.photoAttachment.fileValue = result.value;
                            _this.cd.detectChanges();
                        }
                    });
                }
                this.DownloadDoc();
                return [2 /*return*/];
            });
        }); });
    };
    VehicleDetailsComponent.prototype.DownloadDoc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, responseData, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.vehicleInformationView !== null && this.vehicleInformationView.registrationCertAttachment !== null)) return [3 /*break*/, 3];
                        this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(this.vehicleInformationView.registrationCertAttachment.fileName));
                        return [4 /*yield*/, fetch(this.storeService.getFilePath(this.vehicleInformationView.registrationCertAttachment.fileName))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        responseData = _a.sent();
                        data = new Blob([responseData], { type: 'application/octet-stream' });
                        this.docUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(data));
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VehicleDetailsComponent.prototype.editVehhicle = function () {
        this.isEdit = true;
        this.accordionStep = 1;
        // this.dialogRef.open(CustomDialogComponent, {
        //   data: { template: this.customTemplate }
        // });
        this.assgnData();
    };
    VehicleDetailsComponent.prototype.onSubmit = function (vehicleForm) {
        var _this = this;
        if (vehicleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].VALID) {
            this.validate = false;
            this.dataAssignment(this.vehicleInformationView);
            if (this.data.photoAttachment != null) {
                this.vehicleInformationView.photoAttachment.fileName = this.data.photoAttachment.fileName;
                this.vehicleInformationView.photoAttachment.fileValue = this.data.photoAttachment.fileValue;
            }
            this.vehicleInformationView['id'] = this.vehicleId;
            this.vehicleInformationView['manufacturer'] = this.vehicleInformationView.manufacturer;
            this.vehicleInformationView['code'] = this.data.code;
            this.vehicleInformationView['regDate'] = this.data.regDate;
            this.vehicleInformationView['regExpDate'] = this.data.regExpDate;
            this.vehicleInformationView['purchaseDate'] = this.data.purchaseDate;
            this.vehicleInformationView['purchaseCost'] = this.data.purchaseCost;
            this.vehicleInformationView['purchaseOdometerReading'] = this.data.purchaseOdometerReading;
            this.vehicleInventoryService.updateVehicle(this.vehicleInformationView)
                .subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.validate = true;
        }
    };
    VehicleDetailsComponent.prototype.dataAssignment = function (vehicalDataAssign) {
        Object.assign(vehicalDataAssign, this.vehicleForm.value);
    };
    VehicleDetailsComponent.prototype.updateResponse = function (result) {
        this.assgnData();
        this.onCancel();
        this.openSnackBar(result.messages.ResultMessage);
    };
    VehicleDetailsComponent.prototype.onCancel = function () {
        this.assgnData();
        this.myForm.resetForm();
        this.dialogRef.closeAll();
        this.accordionStep = 0;
        this.isEdit = false;
    };
    VehicleDetailsComponent.prototype.imgChanged = function (event) {
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            var file_1 = event[0];
            reader_1.readAsDataURL(file_1);
            var image = void 0;
            image = new Image();
            image.src = reader_1.result;
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.vehicleForm.controls.registrationCertAttachment.patchValue({ fileName: file_1.name, fileValue: reader_1.result.split(',')[1] });
                that_1.cd.detectChanges();
            };
            that_1.setFileProperties(image);
        }
        this.cd.detectChanges();
    };
    VehicleDetailsComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.fileName = '';
            this.vehicleForm.controls.registrationCertAttachment.patchValue(this.attachmentInfo);
        }
        this.cd.detectChanges();
    };
    VehicleDetailsComponent.prototype.setFileProperties = function (image) {
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        this.logoImgProp = {};
        this.logoImgProp = data;
        this.cd.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleDetailsComponent.prototype, "myForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], VehicleDetailsComponent.prototype, "customTemplate", void 0);
    VehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-details',
            template: __webpack_require__(/*! ./vehicle-details.component.html */ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-details.component.scss */ "./src/app/modules/transportation/inventory/vehicle-details/vehicle-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_3__["VehicleInventoryService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getAllVehicleInspectionDetails($event)'\n  (rowBasedAction)='rowActions($event)' [templateRef]=\"vehicleInspection\" [closeRowForm]='closeAddPanel'\n  (openAddForm)=\"onAddFormClick()\"></app-table>\n\n<ng-template #vehicleInspection>\n  <form class=\"p-20\" [formGroup]=\"inspectionForm\" (ngSubmit)=\"onSubmit(inspectionForm)\" #inspForm=\"ngForm\" fxLayout=\"column\" autocomplete=\"off\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-24\">\n      <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"40\" fxFlex=\"100\" fxLayout=\"column\" class=\"icon-center\">\n        <mat-label #inspectionDate translate>Inspection Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('inspectionDate',inspectionForm)\"\n          [matDatepicker]=\"inspectionDatePicker\" formControlName=\"inspectionDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"inspectionDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #inspectionDatePicker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]='inspectionDate.innerText'\n            [validationControl]=\"inspectionForm.controls.inspectionDate\" [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"40\" fxFlex=\"100\" fxLayout=\"column\" class=\"px-sm-20 icon-center\">\n        <mat-label #nextInspectionDate translate>Next Inspection Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('nextInspectionDate',inspectionForm)\"\n          [matDatepicker]=\"nextInspectionDatePicker\" formControlName=\"nextInspectionDate\"\n          [min]=\"inspectionForm.controls.inspectionDate.value\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"nextInspectionDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #nextInspectionDatePicker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]='nextInspectionDate.innerText'\n            [validationControl]=\"inspectionForm.controls.nextInspectionDate\" [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"column\" class=\"w-220\" fxFlex.gt-sm=\"32\" fxFlex=\"100\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-16\">\n          <button mat-raised-button color=\"primary\" (click)=\"fileInput.value='';fileInput.click()\" type=\"button\">\n            <mat-icon class=\"mr-4\">attach_file</mat-icon>{{'Upload Image' | translate}}\n          </button>\n          <button mat-icon-button [style.display]=\"flagImageProp?.src ? 'block' : 'none'\" type=\"button\">\n            <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"fileInput.value='';clearImages(true)\">highlight_off</mat-icon>\n          </button>\n        </div>\n        <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"fileInput\"\n          (change)=\"imgChanged(fileInput.files,inspectionForm)\" fxHide type=\"file\" #fileInput>\n        <div [style.visibility]=\"inspectionForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n          class=\"pt-4 break-word font-size-12 text-left pr-36\">\n          {{inspectionForm?.value?.attachment?.fileName}}\n        </div>\n      </div>\n\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-12\">\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" fxFlex=\"100\">\n        <mat-label #odometerReadingAtInspection translate>Odometer Reading At Inspection</mat-label>\n        <input autocomplete=\"off\" matInput formControlName=\"odometerReadingAtInspection\" (keyup)=\"preventSpace($event,'inspectionForm','odometerReadingAtInspection')\" (blur)=\"trimTextBoxSpaces('inspectionForm','odometerReadingAtInspection')\" numbersOnly>\n        <mat-error>\n          <app-validation [labelName]=\"odometerReadingAtInspection.innerText\"\n            [validationControl]=\"inspectionForm.controls.odometerReadingAtInspection\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" fxFlex=\"100\">\n        <mat-label #odometerReadingNextInspection translate>Odometer Reading At Next Inspection</mat-label>\n        <input autocomplete=\"off\" matInput formControlName=\"odometerReadingNextInspection\" (keyup)=\"preventSpace($event,'inspectionForm','odometerReadingNextInspection')\" (blur)=\"trimTextBoxSpaces('inspectionForm','odometerReadingNextInspection')\">\n        <mat-error>\n          <app-validation [labelName]=\"odometerReadingNextInspection.innerText\"\n            [validationControl]=\"inspectionForm.controls.odometerReadingNextInspection\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-12\">\n      <button class=\"mr-12 text-uppercase\" type=\"button\" mat-raised-button (click)=\"closeAddForm()\">\n        {{'Cancel' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" [disabled]=\"disableSubmitBtn\">{{(updateButtonShow ? 'Update':'Create') | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtaW5zcGVjdGlvbi1oaXN0b3J5L3ZlaGljbGUtaW5zcGVjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: VehicleInspectionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInspectionHistoryComponent", function() { return VehicleInspectionHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_Transport_vehicle_inspection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/Transport/vehicle-inspection.service */ "./src/app/service/Transport/vehicle-inspection.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var VehicleInspectionHistoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleInspectionHistoryComponent, _super);
    function VehicleInspectionHistoryComponent(vehicleInspectionHistoryService, commonService, dialog, storeService, cd, sanitizer, route, snackBar) {
        var _this = _super.call(this) || this;
        _this.vehicleInspectionHistoryService = vehicleInspectionHistoryService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.storeService = storeService;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.route = route;
        _this.snackBar = snackBar;
        _this.doValidate = true;
        _this.inSpectionDetails = [];
        _this.rows = [];
        _this.closeAddPanel = true;
        _this.setColumnHeaders();
        _this.initializeFilterView();
        return _this;
    }
    VehicleInspectionHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param.id) {
                _this.vehicleId = param.id;
            }
        });
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.initializeTabSettings();
        this.inspectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vehicleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            inspectionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nextInspectionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            odometerReadingAtInspection: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].NUMBER_PATTERN)]),
            odometerReadingNextInspection: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].NUMBER_PATTERN)]),
            attachment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ fileName: '', fileValue: '' })
        });
        this.getAllVehicleInspectionDetails(this.filterViewModel);
    };
    VehicleInspectionHistoryComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'name', header: 'Vehicle Name', sort: true },
            { field: 'regNumber', header: 'Reg.Number', sort: true },
            { field: 'inspectionDate', header: 'Inspection Date', sort: true },
            { field: 'nextInspectionDate', header: 'Next Inspection Date', sort: true },
            { field: 'odometerReadingAtInspection', header: 'Odometer Reading', sort: true },
            { field: 'odometerReadingNextInspection', header: 'Next Odometer Reading', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    VehicleInspectionHistoryComponent.prototype.initializeTabSettings = function () {
        this.tabSettings = {
            rows: [],
            columns: this.columns,
            tablename: '',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    VehicleInspectionHistoryComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: 'Id',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
        this.inspectionHistoryView = {
            id: null,
            vehicleId: null,
            inspectionDate: new Date(),
            nextInspectionDate: new Date(),
            odometerReadingAtInspection: 0,
            odometerReadingNextInspection: 0,
            attachment: this.attachmentInfo
        };
        this.attachmentInfo = {
            fileName: '',
            fileValue: ''
        };
    };
    VehicleInspectionHistoryComponent.prototype.getAllVehicleInspectionDetails = function (inspectionData) {
        var _this = this;
        this.filterViewModel = inspectionData;
        this.filterViewModel.vehicleId = this.vehicleId;
        this.vehicleInspectionHistoryService.getAllVehicleInspectionHistory(this.filterViewModel.vehicleId, this.filterViewModel.vehicleName, this.filterViewModel.registrationNumber, this.filterViewModel.inspectionStartDateBegin, this.filterViewModel.inspectionStartDateEnd, this.filterViewModel.odometerReadingAtInspection, this.filterViewModel.odometerReadingNextInspection, this.filterViewModel.nextInspectionStartDateBegin, this.filterViewModel.nextInspectionStartDateEnd, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            if (res.vehicleInspectionHistoryViewModel != null) {
                _this.inSpectionDetails = [];
                _this.inSpectionDetails = res.vehicleInspectionHistoryViewModel.list;
                _this.totalRowsCount = res.vehicleInspectionHistoryViewModel.totalItems;
                _this.pageCnt = res.vehicleInspectionHistoryViewModel.totalPages;
                _this.inSpectionDetails.forEach(function (e) {
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW
                        }
                    ];
                    e.inspectionDate = (e.inspectionDate == null) ? null : _this.commonService.customDateFormat(e.inspectionDate, _this.getSchoolDateFormat()).date;
                    e.nextInspectionDate = (e.nextInspectionDate == null) ? null : _this.commonService.customDateFormat(e.nextInspectionDate, _this.getSchoolDateFormat()).date;
                });
                _this.filterViewModel.pageNumber = res.vehicleInspectionHistoryViewModel.pageNumber;
            }
            else {
                _this.inSpectionDetails = [];
                _this.totalRowsCount = 0;
                _this.pageCnt = 0;
            }
            _this.tabSettings = {
                model: _this.filterViewModel,
                rows: _this.inSpectionDetails,
                columns: _this.columns,
                totalRowsCount: _this.totalRowsCount,
                pageCnt: _this.pageCnt,
                tablename: '',
                componentName: _this.currentComponent,
                isPaginationRequired: true,
                filtersList: res.filters,
                headerOperations: {
                    addingForm: {
                        required: true,
                        btnName: 'Add'
                    },
                    infoButton: {
                        required: true,
                        text: 'Vehicle Inspection'
                    }
                }
            };
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // method for open the panel
    VehicleInspectionHistoryComponent.prototype.onAddFormClick = function () {
        this.uForm.resetForm();
        this.inspectionForm.reset();
        this.closeAddPanel = false;
        this.updateButtonShow = false;
    };
    // method for close the panel
    VehicleInspectionHistoryComponent.prototype.closeAddForm = function () {
        this.inspectionForm.reset();
        this.closeAddPanel = true;
        this.doValidate = false;
        this.uForm.resetForm();
    };
    VehicleInspectionHistoryComponent.prototype.onSubmit = function (inspectionForm) {
        var _this = this;
        if (inspectionForm.invalid) {
            this.doValidate = true;
            return;
        }
        inspectionForm.value.vehicleId = this.vehicleId;
        inspectionForm.value.inspectionDate = this.getFormattedDateByAPIPattern(inspectionForm.value.inspectionDate);
        inspectionForm.value.nextInspectionDate = this.getFormattedDateByAPIPattern(inspectionForm.value.nextInspectionDate);
        this.inspectionHistoryView = inspectionForm.value;
        if (inspectionForm.value.id == null) {
            this.vehicleInspectionHistoryService.createVehicleInspectionHistory(this.inspectionHistoryView).subscribe(function (res) { return _this.inspectionRespnse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.vehicleInspectionHistoryService.updateVehicleInspectionHistory(this.inspectionHistoryView).subscribe(function (res) { return _this.inspectionRespnse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    VehicleInspectionHistoryComponent.prototype.inspectionRespnse = function (data) {
        this.updateButtonShow = false;
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_8__["OK"]) {
            this.inspectionForm.reset();
            this.uForm.resetForm();
            this.closeAddPanel = true;
            this.doValidate = false;
            this.getAllVehicleInspectionDetails(this.filterViewModel);
            this.flagImageProp = null;
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    VehicleInspectionHistoryComponent.prototype.rowActions = function (data) {
        var _this = this;
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].WARNING_ON_SINGLE_DELETE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                    _this.vehicleInspectionHistoryService.deleteVehicleInspectionHistory(data.clickedRow.id).
                        subscribe(function (res) { return _this.inspectionRespnse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        else if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT) {
            this.updateButtonShow = true;
            this.closeAddPanel = false;
            this.vehicleInspectionHistoryService.getVehicleInspectionHistory(data.clickedRow.id).subscribe(function (res) {
                if (res.vehicleInspectionHistoryView) {
                    _this.inSpectionDetails = res.vehicleInspectionHistoryView;
                    if (_this.inSpectionDetails.attachment != null) {
                        _this.flagImageProp = {
                            src: _this.sanitizer.bypassSecurityTrustResourceUrl(_this.inSpectionDetails.attachment.fileName)
                        };
                        _this.storeService.storeFileEncryptByFileNameGet(_this.inSpectionDetails.attachment.fileName)
                            .subscribe(function (value) {
                            if (value) {
                                _this.inspectionForm.controls.attachment.patchValue({ fileName: value.fileNameWithExtension, fileValue: value.value });
                            }
                        });
                    }
                    _this.inspectionForm.patchValue(_this.inSpectionDetails);
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (data.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_ICON).toLowerCase()) {
            if (data.clickedRow.attachment != null) {
                this.nameImgProp = this.storeService.getFilePath(data.clickedRow.attachment.fileName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    VehicleInspectionHistoryComponent.prototype.imgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], 'image', 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            var image;
            image = new Image();
            image.src = reader.result;
            image.onload = function () {
                that.flagImageProp = {
                    src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
                };
                that.inspectionForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: reader.result.split(',')[1] });
                that.cd.detectChanges();
            };
        };
    };
    VehicleInspectionHistoryComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        this.flagImageProp = {};
        this.inspectionForm.controls.attachment.patchValue(this.attachmentInfo);
        this.cd.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inspForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInspectionHistoryComponent.prototype, "uForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VehicleInspectionHistoryComponent.prototype, "fileInput", void 0);
    VehicleInspectionHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-inspection-history',
            template: __webpack_require__(/*! ./vehicle-inspection-history.component.html */ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.html"),
            providers: [app_service_Transport_vehicle_inspection_service__WEBPACK_IMPORTED_MODULE_4__["VehicleInspectionHistoryService"]],
            styles: [__webpack_require__(/*! ./vehicle-inspection-history.component.scss */ "./src/app/modules/transportation/inventory/vehicle-inspection-history/vehicle-inspection-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_Transport_vehicle_inspection_service__WEBPACK_IMPORTED_MODULE_4__["VehicleInspectionHistoryService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], VehicleInspectionHistoryComponent);
    return VehicleInspectionHistoryComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" [templateRef]=\"insuranceTemplate\" (getTableData)='insuranceData($event)'\n  (rowBasedAction)='rowActions($event)' [closeRowForm]='closeAddPanel' (openAddForm)=\"openForm()\">\n</app-table>\n\n<ng-template #insuranceTemplate>\n  <form fxLayout=\"column\" (ngSubmit)=\"insurancePost(insuranceFormGroup.value)\" [formGroup]=\"insuranceFormGroup\" autocomplete=\"off\"\n    #insuranceForm=\"ngForm\">\n    <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\" fxFlex=\"100\">\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label translate #policyNumber>policyNumber</mat-label>\n        <input matInput required name=\"policyNumber\" formControlName=\"policyNumber\" (keyup)=\"preventSpace($event,'insuranceFormGroup','policyNumber')\" (blur)=\"trimTextBoxSpaces('insuranceFormGroup','policyNumber')\">\n        <mat-error>\n          <app-validation [labelName]=\"policyNumber.innerText\"\n            [validationControl]=\"insuranceFormGroup.controls.policyNumber\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"px-sm-20 icon-center\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n        <mat-label translate #issueDate>Issue Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('issueDate',insuranceFormGroup)\" required [matDatepicker]=\"picker\"\n          formControlName=\"issueDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"issueDate.innerText\" [validationControl]=\"insuranceFormGroup.controls.issueDate\"\n            [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label translate #companyName>companyName</mat-label>\n        <input matInput required name=\"companyName\" formControlName=\"companyName\" (keyup)=\"preventSpace($event,'insuranceFormGroup','companyName')\" (blur)=\"trimTextBoxSpaces('insuranceFormGroup','companyName')\">\n        <mat-error>\n          <app-validation [labelName]=\"companyName.innerText\"\n            [validationControl]=\"insuranceFormGroup.controls.companyName\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-sm-12\" fxLayout.gt-xs=\"row\" fxFlex=\"100\">\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label translate #premiumAmount>premiumAmount</mat-label>\n        <input matInput required name=\"premiumAmount\" formControlName=\"premiumAmount\" (keyup)=\"preventSpace($event,'insuranceFormGroup','premiumAmount')\" (blur)=\"trimTextBoxSpaces('insuranceFormGroup','premiumAmount')\">\n        <mat-error>\n          <app-validation [labelName]=\"premiumAmount.innerText\"\n            [validationControl]=\"insuranceFormGroup.controls.premiumAmount\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"px-sm-20 icon-center\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\">\n        <mat-label translate #expiryDate>expiryDate</mat-label>\n        <input matInput (keyup)=\"forceValidation('expiryDate',insuranceFormGroup)\" required\n        [matDatepicker]=\"expiryPicker\" [min]=\"insuranceFormGroup.controls.issueDate.value\" formControlName=\"expiryDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"expiryPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #expiryPicker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"expiryDate.innerText\"\n            [validationControl]=\"insuranceFormGroup.controls.expiryDate\" [doValidate]=\"doValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"column\" class=\"pt-sm-12\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <div fxLayout=\"row\">\n          <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"logoImgInput.value='';logoImgInput.click()\">\n            <mat-icon class=\"mr-8\">attach_file</mat-icon>{{'Upload Image' | translate}}\n          </button>\n          <button mat-icon-button type=\"button\" [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n            <mat-icon class=\"mb-4 grey-600-fg\" \n              (click)=\"logoImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n          </button>\n        </div>\n        <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n          (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n        <div class=\"pt-8 logo-name break-word\" [style.visibility]=\"uploadFiles?.value?.insuranceFileNameWithExtension ? 'visible' : 'hidden'\" [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n          {{uploadFiles?.value?.insuranceFileNameWithExtension}}</div>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"my-20\">\n      <button mat-raised-button translate class=\"mr-12 text-uppercase\" type=\"reset\" #formCancel id=\"formCancel\"\n        (click)=\"onCancel()\"> {{'Cancel' | translate}}</button>\n      <button mat-raised-button translate type=\"submit\" color=\"accent\" class=\"text-uppercase\">{{(isUpdateData ? 'Update':'Submit') | translate}}\n      </button>\n    </div>\n\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtaW5zdXJhbmNlL3ZlaGljbGUtaW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VehicleInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInsuranceComponent", function() { return VehicleInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/Transport/vehicle-inventory.service */ "./src/app/service/Transport/vehicle-inventory.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");












var VehicleInsuranceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleInsuranceComponent, _super);
    function VehicleInsuranceComponent(_fb, route, vehicleInventoryService, commonService, dialog, cd, sanitizer, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.route = route;
        _this.vehicleInventoryService = vehicleInventoryService;
        _this.commonService = commonService;
        _this.dialog = dialog;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.currentComponentName = 'VehicleInsuranceComponent';
        _this.custRowsPerPageOptions = [];
        _this.fileName = '';
        _this.vehicleInsuranceSearchView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            policyNumber: '',
            premiumAmount: 0,
            issueDateBegin: [],
            issueDateEnd: [],
            expiryDateBegin: [],
            expiryDateEnd: [],
            companyName: '',
        };
        return _this;
    }
    VehicleInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.vehicleId = params.id;
            }
        });
        this.cols = [
            { field: 'policyNumber', header: 'policyNumber', sort: true },
            { field: 'companyName', header: 'companyName', sort: true },
            { field: 'issueDate', header: 'Issue Date', sort: true },
            { field: 'expiryDate', header: 'expiryDate', sort: true },
            { field: 'premiumAmount', header: 'premiumAmount', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.vehicleInsuranceSearchView,
            componentName: this.currentComponent,
        };
        this.insuranceFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            policyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            issueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            premiumAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.uploadFiles = this._fb.group({
            insuranceFileNameWithExtension: null,
            insuranceFileValue: null,
        });
        this.vehicleInsuranceSearchView.vehicleId = this.vehicleId;
        this.insuranceData(this.vehicleInsuranceSearchView);
    };
    VehicleInsuranceComponent.prototype.insuranceData = function (data) {
        var _this = this;
        data.vehicleId = this.vehicleId;
        this.vehicleInsuranceSearchView = data;
        this.vehicleInventoryService.vehicleInsurances(this.vehicleInsuranceSearchView).subscribe(function (res) { return _this.vehicleInsuranceData(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Binding data To Table
    VehicleInsuranceComponent.prototype.vehicleInsuranceData = function (data) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            this.rows = data.resultList.list;
            this.totalItems = data.resultList.totalItems;
        }
        this.rows.forEach(function (e) {
            e.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW
                }
            ];
        });
        if (data.resultList) {
            data.resultList.list.forEach(function (formatDate) {
                formatDate.issueDate =
                    formatDate.issueDate != null ? _this.commonService.customDateFormat(formatDate.issueDate.toString(), _this.getSchoolDateFormat()).date : null;
                formatDate.expiryDate =
                    formatDate.expiryDate != null ? _this.commonService.customDateFormat(formatDate.expiryDate.toString(), _this.getSchoolDateFormat()).date : null;
            });
            this.vehicleInsuranceSearchView.pageNumber = data.resultList.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.vehicleInsuranceSearchView,
            rows: this.rows,
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: false,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'New'
                },
                infoButton: {
                    required: true,
                    text: 'Insurance History'
                }
            },
            filtersList: data.filters,
        };
    };
    VehicleInsuranceComponent.prototype.openForm = function () {
        this.closeAddPanel = false;
        this.isUpdateData = false;
    };
    // row-wise actions of the table(edit/delete)
    VehicleInsuranceComponent.prototype.rowActions = function (response) {
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.editInsurance(response);
        }
        else if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            this.deleteInsurance(response);
        }
        else if (response.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW).toLowerCase()) {
            if (response.clickedRow.attachment != null) {
                this.nameImgProp = this.storeService.getFilePath(response.clickedRow.attachment.fileName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    VehicleInsuranceComponent.prototype.editInsurance = function (response) {
        var _this = this;
        this.isUpdateData = true;
        this.closeAddPanel = false;
        this.insuranceId = response.clickedRow.id;
        this.vehicleInventoryService.getVehicleInsurance(this.insuranceId).subscribe(function (res) {
            return _this.updateInsuranceDataAssignment(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    VehicleInsuranceComponent.prototype.deleteInsurance = function (response) {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
            disableClose: true,
            data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                _this.vehicleInventoryService.deleteVehicleInsurance(response.clickedRow.id).subscribe(function (res) {
                    _this.commonService.dialog(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].OK);
                    _this.resetForm();
                    _this.insuranceData(_this.vehicleInsuranceSearchView);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    VehicleInsuranceComponent.prototype.onCancel = function () {
        this.resetForm();
    };
    VehicleInsuranceComponent.prototype.insurancePost = function (data) {
        var _this = this;
        this.insuranceDetails = {};
        if (this.insuranceFormGroup.status === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VALID) {
            this.doValidate = false;
            this.postModel = {
                policyNumber: '',
                companyName: '',
                premiumAmount: 0,
                issueDate: null,
                expiryDate: null,
                id: '',
                attachment: {
                    fileName: '',
                    fileValue: ''
                }
            };
            this.postModel.attachment.fileName = this.uploadFiles.value.insuranceFileNameWithExtension;
            this.postModel.attachment.fileValue = this.uploadFiles.value.insuranceFileValue;
            data.issueDate = this.getFormattedDateByAPIPattern(data.issueDate);
            data.expiryDate = this.getFormattedDateByAPIPattern(data.expiryDate);
            if (this.isUpdateData) {
                this.postModel.id = this.insuranceId;
                this.vehicleInventoryService.updateVehicleInsurance(this.prepareModel(this.postModel, data)).subscribe(function (res) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.resetForm();
                    _this.gridReset();
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.postModel.id = this.vehicleInsuranceSearchView.vehicleId;
                this.vehicleInventoryService.createVehicleInsurances(this.prepareModel(this.postModel, data)).subscribe(function (res) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.resetForm();
                    _this.gridReset();
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
        else {
            this.doValidate = true;
        }
    };
    VehicleInsuranceComponent.prototype.resetForm = function () {
        this.clearImages(true);
        this.insuranceFormGroup.reset();
        this.insuranceForm.resetForm();
        this.uploadFiles.reset();
        this.closeAddPanel = true;
        this.isUpdateData = false;
        this.doValidate = false;
    };
    VehicleInsuranceComponent.prototype.gridReset = function () {
        this.insuranceData(this.vehicleInsuranceSearchView);
    };
    VehicleInsuranceComponent.prototype.updateInsuranceDataAssignment = function (data) {
        var _this = this;
        this.fileName = '';
        if (data.resultModel.attachment !== null && data.resultModel.attachment !== undefined) {
            this.fileName = data.resultModel.attachment.fileName;
            this.logoImgProp = {
                src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data.resultModel.attachment.fileName))
            };
            this.storeService.storeFileEncryptByFileNameGet(data.resultModel.attachment.fileName)
                .subscribe(function (result) {
                if (result) {
                    _this.fileName = data.resultModel.attachment.fileName;
                    _this.uploadFiles.controls['insuranceFileNameWithExtension'].patchValue(result.fileNameWithExtension);
                    _this.uploadFiles.controls['insuranceFileValue'].patchValue(result.value);
                    _this.cd.detectChanges();
                }
            });
        }
        this.insuranceFormGroup.patchValue(data.resultModel);
    };
    VehicleInsuranceComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.fileName = '';
            if (this.logoInput !== null) {
                this.logoInput.nativeElement.remove();
            }
            this.uploadFiles.controls.insuranceFileNameWithExtension.patchValue(null);
            this.uploadFiles.controls.insuranceFileValue.patchValue(null);
        }
        this.cd.detectChanges();
    };
    VehicleInsuranceComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            var file_1 = event[0];
            reader_1.readAsDataURL(file_1);
            var image = void 0;
            image = new Image();
            image.src = reader_1.result;
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.uploadFiles.controls['insuranceFileNameWithExtension'].setValue(file_1.name);
                that_1.uploadFiles.controls['insuranceFileValue'].setValue(reader_1.result.split(',')[1]);
                _this.cd.detectChanges();
            };
            that_1.setFileProperties(image);
        }
    };
    VehicleInsuranceComponent.prototype.setFileProperties = function (image) {
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        this.logoImgProp = {};
        this.logoImgProp = data;
        this.cd.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('insuranceForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInsuranceComponent.prototype, "insuranceForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VehicleInsuranceComponent.prototype, "logoInput", void 0);
    VehicleInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-insurance',
            template: __webpack_require__(/*! ./vehicle-insurance.component.html */ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-insurance.component.scss */ "./src/app/modules/transportation/inventory/vehicle-insurance/vehicle-insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_5__["VehicleInventoryService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], VehicleInsuranceComponent);
    return VehicleInsuranceComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\" class=\"info-relative mt-28\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"edit-info\">\n        <button mat-raised-button (click)=\"back()\" color=\"primary\" class=\"text-uppercase mx-4\"> \n          {{'Back' | translate}}\n        </button>\n    </div>\n  </div>\n\n<mat-tab-group [selectedIndex]=\"index\" (selectedIndexChange)=\"selected($event)\" class=\"manage-institue\">\n\n  <mat-tab label=\"{{'VEHICLE DETAILS' | translate}}\">\n    <div *ngIf=\"showVehicleDetails\">\n      <app-vehicle-details [data]=\"selectedChanged\"></app-vehicle-details>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'SERVICE HISTORY' | translate}}\">\n    <div *ngIf=\"showShowServiceHistory\">\n      <app-vehicle-service-history [data]=\"selectedChanged\"></app-vehicle-service-history>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'INSURANCE' | translate}}\">\n    <div *ngIf=\"vehicleInsurance\">\n      <app-vehicle-insurance  [data]=\"selectedChanged\"></app-vehicle-insurance>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'POLLUTION CHECK' | translate}}\">\n    <div *ngIf=\"showPollutionCheck\">\n      <app-vehicle-pollution-check-history [data]=\"selectedChanged\"></app-vehicle-pollution-check-history>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'INSPECTION' | translate}}\">\n    <div *ngIf=\"showInspection\">\n      <app-vehicle-inspection-history [data]=\"selectedChanged\"></app-vehicle-inspection-history>\n    </div>\n  </mat-tab>\n\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtaW52ZW50b3J5LWRldGFpbHMvdmVoaWNsZS1pbnZlbnRvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: VehicleInventoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInventoryDetailsComponent", function() { return VehicleInventoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");






var VehicleInventoryDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleInventoryDetailsComponent, _super);
    function VehicleInventoryDetailsComponent(location, router) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.router = router;
        _this.showVehicleDetails = true;
        return _this;
    }
    VehicleInventoryDetailsComponent.prototype.ngOnInit = function () {
    };
    // tab Selection
    VehicleInventoryDetailsComponent.prototype.selected = function (value) {
        this.index = value;
        switch (value) {
            case 0: {
                // statements; 
                this.showShowServiceHistory = false;
                this.showVehicleDetails = true;
                this.vehicleInsurance = false;
                this.showPollutionCheck = false;
                this.showInspection = false;
                window.location.hash = 'VehicalDetails';
                break;
            }
            case 1: {
                this.showShowServiceHistory = true;
                this.showVehicleDetails = false;
                this.vehicleInsurance = false;
                this.showPollutionCheck = false;
                this.showInspection = false;
                window.location.hash = 'ServiceHistory';
                break;
            }
            case 2: {
                this.showShowServiceHistory = false;
                this.showVehicleDetails = false;
                this.vehicleInsurance = true;
                this.showPollutionCheck = false;
                this.showInspection = false;
                window.location.hash = 'Insurance';
                break;
            }
            case 3: {
                this.showShowServiceHistory = false;
                this.showVehicleDetails = false;
                this.vehicleInsurance = false;
                this.showPollutionCheck = true;
                this.showInspection = false;
                window.location.hash = 'PollutionCheck';
                break;
            }
            case 4: {
                this.showShowServiceHistory = false;
                this.showVehicleDetails = false;
                this.vehicleInsurance = false;
                this.showPollutionCheck = false;
                this.showInspection = true;
                window.location.hash = 'Inspection';
                break;
            }
            default: {
                // statements; 
                break;
            }
        }
        /*const instituteDetails = JSON.parse(localStorage.getItem('_s'));
        if (instituteDetails != null) {
          this.selectedChanged = JSON.parse(localStorage.getItem('_s')).id;
        }*/
    };
    VehicleInventoryDetailsComponent.prototype.back = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Vehicle_Details]);
    };
    VehicleInventoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-inventory-details',
            template: __webpack_require__(/*! ./vehicle-inventory-details.component.html */ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-inventory-details.component.scss */ "./src/app/modules/transportation/inventory/vehicle-inventory-details/vehicle-inventory-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VehicleInventoryDetailsComponent);
    return VehicleInventoryDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" (getTableData)='getAllVehicles($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n    (openAddForm)='openForm()' [matExpansioncustomClass]=\"true\" [templateRef]=\"testSchedules\"\n    [closeRowForm]='closeAddPanel'>\n</app-table>\n\n<ng-template #testSchedules>\n    <mat-horizontal-stepper class=\"custom-horizontal-step\" [linear]=\"true\" fxLayout=\"row\" fxFlex=\"100\" #stepper\n        (selectionChange)=\"onSelectionChange($event)\">\n        <mat-step [stepControl]=\"vehicalDetailsForm\">\n            <form fxLayout=\"column\" [formGroup]=\"vehicalDetailsForm\" #vehicalDataForm=\"ngForm\">\n                <ng-template matStepLabel><span translate>Vehicle Basic Details</span></ng-template>\n                <!-- <div class=\"pt-24 font-size-18\"><span translate>Vehicle Basic Details</span></div> -->\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #name translate>Vehicle Name</mat-label>\n                        <input (keyup)=\"preventSpace($event, 'vehicalDetailsForm','name')\" (blur)=\"trimTextBoxSpaces('vehicalDetailsForm','name')\" formControlName=\"name\" matInput required>\n                        <mat-error>\n                            <app-validation [labelName]='name.innerText'\n                                [validationControl]=\"vehicalDetailsForm.controls.name\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #manufacturer translate>Manufacturer</mat-label>\n                        <input (keyup)=\"preventSpace($event,'vehicalDetailsForm','manufacturer')\" (blur)=\"trimTextBoxSpaces('vehicalDetailsForm','manufacturer')\" formControlName=\"manufacturer\" matInput required>\n                        <mat-error>\n                            <app-validation [labelName]='manufacturer.innerText'\n                                [validationControl]=\"vehicalDetailsForm.controls.manufacturer\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #model translate>Model</mat-label>\n                        <input (keyup)=\"preventSpace($event,'vehicalDetailsForm','model')\" (blur)=\"trimTextBoxSpaces('vehicalDetailsForm','model')\" formControlName=\"model\" matInput required>\n                        <mat-error>\n                            <app-validation [labelName]='model.innerText'\n                                [validationControl]=\"vehicalDetailsForm.controls.model\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #code translate>Code</mat-label>\n                        <input (keyup)=\"preventSpace($event,'vehicalDetailsForm','code')\" (blur)=\"trimTextBoxSpaces('vehicalDetailsForm','code')\" formControlName=\"code\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='code.innerText'\n                                [validationControl]=\"vehicalDetailsForm.controls.code\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #maxCapacity translate>MaxCapacity</mat-label>\n                        <input (keyup)=\"preventSpace($event,'vehicalDetailsForm','maxCapacity')\" (blur)=\"trimTextBoxSpaces('vehicalDetailsForm','maxCapacity')\" formControlName=\"maxCapacity\" numbersOnly matInput>\n                        <mat-error>\n                            <app-validation [labelName]='maxCapacity.innerText'\n                                [validationControl]=\"vehicalDetailsForm.controls.maxCapacity\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                    <div fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"pl-sm-20 pt-sm-16\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\"><button mat-raised-button color=\"primary\"\n                                (click)=\"ImgInput.value='';ImgInput.click()\" type=\"button\">\n                                <mat-icon class=\"mr-4\">attach_file</mat-icon>{{'Vehicle Photos' | translate}}\n                            </button>\n                            <button mat-icon-button [style.display]=\"vehicleImageProp?.src ? 'block' : 'none'\" (click)=\"ImgInput.value='';filePaths.image='';clearImages()\">\n                                <mat-icon class=\"mb-4 grey-600-fg\" >\n                                    highlight_off\n                                </mat-icon>\n                            </button>\n                        </div>\n\n                        <input [accept]=\"'image/*'\" id=\"ImgInput\"\n                            (change)=\"vehicleImgChanged(ImgInput.files,vehicalDetailsForm)\" fxHide type=\"file\"\n                            #ImgInput>\n                        <div *ngIf=\"filePaths?.image; else form_value\" class=\"pt-4 primary-300-fg font-size-12 text-left pr-36 break-word\">\n                            <a target=\"_blank\" [href]=\"filePaths?.image\">View Vehicle Photo</a>\n                        </div>\n                        <ng-template #form_value>\n                            <div [style.visibility]=\"vehicalDetailsForm?.value?.photoAttachment?.fileName ? 'visible' : 'hidden'\"\n                            class=\"pt-4 break-word font-size-12 text-left pr-36\">\n                            {{vehicalDetailsForm?.value?.photoAttachment?.fileName}}\n                        </div>\n                        </ng-template>\n                        \n                        <!-- <div class=\"pt-4 primary-300-fg font-size-12 text-right pr-36\">(<span translate>Preferred</span>\n                            1:1)</div> -->\n                    </div>\n                </div>\n\n               \n                <!-- <div fxLayout=\"column\" class=\"w-200 h-200 border\">\n                    <img class=\"radius-5 w-200 h-200\" [src]=\"vehicleImageProp?.src\" *ngIf=\"vehicleImageProp?.src\"\n                        alt=\"Launchship\" />\n                </div> -->\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n                    <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\"\n                        type=\"reset\" class=\"text-uppercase mr-12\">\n                        {{'Cancel' | translate}}\n                    </button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'Next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"registrationInfoForm\" [optional]=\"registrationInfoForm.valid\">\n            <form fxLayout=\"column\" [formGroup]=\"registrationInfoForm\" #registrationForm=\"ngForm\"  autocomplete=\"off\">\n                <ng-template matStepLabel><span translate>Registration Info</span></ng-template>\n                <!-- <div class=\"pt-24 font-size-18\"><span translate>Registration Info</span></div> -->\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #regNumber translate>Registration Number</mat-label>\n                        <input (keyup)=\"preventSpace($event,'registrationInfoForm','regNumber')\" (blur)=\"trimTextBoxSpaces('registrationInfoForm','regNumber')\" formControlName=\"regNumber\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='regNumber.innerText'\n                                [validationControl]=\"registrationInfoForm.controls.regNumber\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <div fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-sm-20 pt-16\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\"><button mat-raised-button color=\"primary\"\n                                (click)=\"fileInput.value='';fileInput.click()\" type=\"button\"><mat-icon class=\"mr-4\">attach_file</mat-icon>\n                                {{'Registration Certificate' | translate}}</button>\n\n                            <button mat-icon-button [style.display]=\"vehicleCertImageProp?.src ? 'block' : 'none'\" (click)=\"fileInput.value='';filePaths.certificate='';clearImagesRegistration()\">\n                                <mat-icon class=\"mb-4 grey-600-fg\" >\n                                    highlight_off\n                                </mat-icon>\n                            </button>\n                        </div>\n\n                        <input [accept]=\"'image/*'\" id=\"fileInput\"\n                            (change)=\"imgChanged(fileInput.files,registrationInfoForm)\" fxHide type=\"file\" #fileInput>\n                        <div *ngIf=\"filePaths?.certificate; else form_value_cer\" class=\"pt-4 primary-300-fg font-size-12 text-left pr-36 break-word\">\n                            <a target=\"_blank\" [href]=\"filePaths?.certificate\">View Registration Certificate</a>\n                        </div>\n                        <ng-template #form_value_cer>\n                            <div [style.visibility]=\"registrationInfoForm?.value?.registrationCertAttachment?.fileName ? 'visible' : 'hidden'\"\n                            class=\"pt-4 primary-300-fg font-size-12 text-left pr-36\">\n                            {{registrationInfoForm?.value?.registrationCertAttachment?.fileName}}\n                        </div>\n                        </ng-template> \n                    </div>\n                </div>\n\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"icon-center\">\n                        <mat-label #registeredDate translate>Registered Date</mat-label>\n                        <input matInput (keyup)=\"forceValidation('regDate',registrationInfoForm)\"\n                            [matDatepicker]=\"regDate\" formControlName=\"regDate\" autocomplete=\"off\">\n                        <mat-datepicker-toggle matSuffix [for]=\"regDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #regDate></mat-datepicker>\n                        <mat-error>\n                            <app-validation [labelName]='registeredDate.innerText'\n                                [validationControl]=\"registrationInfoForm.controls.regDate\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                        class=\"pl-sm-20 icon-center\">\n                        <mat-label #regExpiryDate translate>Registration Expiry Date</mat-label>\n                        <input matInput (keyup)=\"forceValidation('regExpDate',registrationInfoForm)\"\n                            [matDatepicker]=\"regExpDate\" formControlName=\"regExpDate\"\n                            [min]=\"registrationInfoForm.controls.regDate.value\" autocomplete=\"off\">\n                        <mat-datepicker-toggle matSuffix [for]=\"regExpDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #regExpDate></mat-datepicker>\n                        <mat-error>\n                            <app-validation [labelName]='regExpiryDate.innerText'\n                                [validationControl]=\"registrationInfoForm.controls.regExpDate\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n                    <!-- <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\"\n                        type=\"reset\" class=\"text-uppercase mr-12\">\n                        {{'Cancel' | translate}}\n                    </button> -->\n                    <button  mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'Next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"additionalDetailsForm\" [optional]=\"additionalDetailsForm.valid\">\n            <form fxLayout=\"column\" [formGroup]=\"additionalDetailsForm\" #additionalDataForm=\"ngForm\"  autocomplete=\"off\">\n                <ng-template matStepLabel><span translate>Additional Details</span></ng-template>\n                <!-- <div class=\"pt-24 font-size-18\"><span translate>Additional Details</span></div> -->\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #chassisNumber translate>Chassis Number</mat-label>\n                        <input (keyup)=\"preventSpace($event,'additionalDetailsForm','chassisNumber')\" (blur)=\"trimTextBoxSpaces('additionalDetailsForm','chassisNumber')\" formControlName=\"chassisNumber\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='chassisNumber.innerText'\n                                [validationControl]=\"additionalDetailsForm.controls.chassisNumber\"\n                                [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                        class=\"pl-sm-20\">\n                        <mat-label #engineNumber translate>Engine Number</mat-label>\n                        <input (keyup)=\"preventSpace($event,'additionalDetailsForm','engineNumber')\" (blur)=\"trimTextBoxSpaces('additionalDetailsForm','engineNumber')\" formControlName=\"engineNumber\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='engineNumber.innerText'\n                                [validationControl]=\"additionalDetailsForm.controls.engineNumber\"\n                                [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"icon-center\">\n                        <mat-label #manufactureYearr translate>Manufacture Year</mat-label>\n                        <input matInput (keyup)=\"forceValidation('manufactureYear',additionalDetailsForm)\" (blur)=\"trimTextBoxSpaces('registrationInfoForm','regDate')\"\n                            [matDatepicker]=\"manufactureYear\" formControlName=\"manufactureYear\"\n                            [max]=\"registrationInfoForm.controls.regDate.value\" autocomplete=\"off\">\n                        <mat-datepicker-toggle matSuffix [for]=\"manufactureYear\"></mat-datepicker-toggle>\n                        <mat-datepicker #manufactureYear></mat-datepicker>\n                        <mat-error>\n                            <app-validation [labelName]='manufactureYearr.innerText'\n                                [validationControl]=\"additionalDetailsForm.controls.manufactureYear\"\n                                [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n                    <!-- <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\"\n                        type=\"reset\" class=\"text-uppercase mr-12\">\n                        {{'Cancel' | translate}}\n                    </button> -->\n                    <button  mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'Next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"purchaseInfoForm\" [optional]=\"purchaseInfoForm.valid\">\n            <form fxLayout=\"column\" [formGroup]=\"purchaseInfoForm\" #purchaseForm=\"ngForm\"  autocomplete=\"off\">\n                <ng-template matStepLabel><span translate>Purchase Info</span></ng-template>\n                <!-- <div class=\"pt-24 font-size-18\"><span translate>Purchase Info</span></div> -->\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                        <mat-label #purchaseCost translate>Purchase Cost</mat-label>\n                        <input (keyup)=\"preventSpace($event,'purchaseInfoForm','purchaseCost')\" (blur)=\"trimTextBoxSpaces('purchaseInfoForm','purchaseCost')\" formControlName=\"purchaseCost\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='purchaseCost.innerText'\n                                [validationControl]=\"purchaseInfoForm.controls.purchaseCost\"\n                                [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                        class=\"px-sm-20\">\n                        <mat-label #purchaseOdometerReading translate>Purchase Odometer Reading</mat-label>\n                        <input (keyup)=\"preventSpace($event,'purchaseInfoForm','purchaseOdometerReading')\"  (blur)=\"trimTextBoxSpaces('purchaseInfoForm','purchaseOdometerReading')\" formControlName=\"purchaseOdometerReading\" matInput>\n                        <mat-error>\n                            <app-validation [labelName]='purchaseOdometerReading.innerText'\n                                [validationControl]=\"purchaseInfoForm.controls.purchaseOdometerReading\"\n                                [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n                    <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"icon-center\">\n                        <mat-label #purchasseDate translate>Purchase Date</mat-label>\n                        <input matInput (keyup)=\"forceValidation('purchaseDate',purchaseInfoForm)\"\n                            [matDatepicker]=\"purchaseDate\" formControlName=\"purchaseDate\"\n                            [min]=\"additionalDetailsForm.controls.manufactureYear.value\"\n                             autocomplete=\"off\">\n                        <mat-datepicker-toggle matSuffix [for]=\"purchaseDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #purchaseDate></mat-datepicker>\n                        <mat-error>\n                            <app-validation [labelName]='purchasseDate.innerText'\n                                [validationControl]=\"purchaseInfoForm.controls.purchaseDate\" [doValidate]=\"validate\">\n                            </app-validation>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n                    <!-- <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\"\n                        type=\"reset\" class=\"text-uppercase mr-12\">\n                        {{'Cancel' | translate}}\n                    </button> -->\n                    <button  mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n                    <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n                        {{'Next' | translate}}\n                    </button>\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step class=\"form-status\">\n            <ng-template matStepLabel><span translate>Complete</span></ng-template>\n            <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pt-24\" translate>{{isUpdate ? 'onUpdateStaffEntries' : 'onCreateStaffEntries'}}</div>\n            <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>{{isUpdate ? 'To Update Vehicle.':'To Create New Vehicle.'}}</div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n                <button mat-raised-button matStepperPrevious type=\"submit\" class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n                <button mat-raised-button type=\"submit\" class=\"text-uppercase\" (click)=\"onSubmit()\" color=\"accent\">{{button | translate}}\n                </button>\n            </div>\n        </mat-step>\n    </mat-horizontal-stepper>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtaW52ZW50b3J5L3ZlaGljbGUtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VehicleInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInventoryComponent", function() { return VehicleInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/Transport/vehicle-inventory.service */ "./src/app/service/Transport/vehicle-inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");












var VehicleInventoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleInventoryComponent, _super);
    function VehicleInventoryComponent(router, vehicleInventoryService, _formBuilder, cd, sanitizer, dialog, commonService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.vehicleInventoryService = vehicleInventoryService;
        _this._formBuilder = _formBuilder;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.interactedStepperIndex = 0;
        _this.validate = true;
        _this.currentComponent = 'VehicleInventoryComponent';
        _this.filePaths = {
            image: '',
            certificate: ''
        };
        _this.vehicleSearchView = {
            vehicleName: [],
            sortBy: '',
            vehicleModel: [],
            registrationNumber: [],
            maxCapacity: [],
            statusIds: [],
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE
        };
        return _this;
    }
    VehicleInventoryComponent.prototype.ngOnInit = function () {
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.vehicleSearchView = modelTableComponent;
        }
        this.cols = [
            { field: 'vehicleName', header: 'Vehicle Name', sort: true },
            { field: 'vehicleModel', header: 'Vehicle Model', sort: true },
            { field: 'registrationNumber', header: 'Reg.Number', sort: true },
            { field: 'maxCapacity', header: 'Max Capacity', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.vehicleSearchView,
            tablename: 'List of Vehicles',
            componentName: this.currentComponent,
        };
        this.getAllVehicles(this.vehicleSearchView);
        // Stepper Form intialization
        this.attachmentInfo = {
            fileName: null,
            fileValue: null
        };
        this.vehicalDetailsForm = this._formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            manufacturer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            model: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45)]],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6)],
            maxCapacity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100)]],
            photoAttachment: this.attachmentInfo,
        });
        this.registrationInfoForm = this._formBuilder.group({
            regNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)],
            regDate: [null],
            regExpDate: [null],
            registrationCertAttachment: this.attachmentInfo
        });
        this.additionalDetailsForm = this._formBuilder.group({
            chassisNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)],
            engineNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)],
            manufactureYear: [null],
        });
        this.purchaseInfoForm = this._formBuilder.group({
            purchaseCost: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(99999999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]],
            purchaseDate: [null],
            purchaseOdometerReading: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(2147483647), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN)]],
        });
        this.vehicleView = {
            code: '',
            name: '',
            model: '',
            manufacturer: '',
            manufactureYear: new Date,
            regDate: new Date,
            regExpDate: new Date,
            regNumber: '',
            engineNumber: '',
            chassisNumber: '',
            purchaseDate: new Date,
            purchaseCost: 0,
            purchaseOdometerReading: 0,
            maxCapacity: 0,
            photoAttachment: this.attachmentInfo,
            registrationCertAttachment: this.attachmentInfo
        };
    };
    // Get all Vehicles 
    VehicleInventoryComponent.prototype.getAllVehicles = function (getVehiclesDataView) {
        var _this = this;
        this.vehicleSearchView = getVehiclesDataView;
        this.vehicleInventoryService.getAllVehicles(getVehiclesDataView.vehicleName, getVehiclesDataView.vehicleModel, getVehiclesDataView.registrationNumber, getVehiclesDataView.maxCapacity, getVehiclesDataView.statusIds, getVehiclesDataView.sortBy, getVehiclesDataView.sortOrder, getVehiclesDataView.pageNumber, getVehiclesDataView.pageSize).subscribe(function (res) {
            _this.vehiclesData(res);
        });
    };
    // Binding Vehicles To Table
    VehicleInventoryComponent.prototype.vehiclesData = function (data) {
        this.custRowsPerPageOptions = [];
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            this.rows = data.resultList.list;
            this.totalItems = data.resultList.totalItems;
        }
        this.rows.forEach(function (e) {
            e.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VIEW,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DETAILS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VIEW
                }
            ];
        });
        if (data.resultList) {
            this.vehicleSearchView.pageNumber = data.resultList.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.vehicleSearchView,
            rows: this.rows,
            tablename: 'List Of Vehicles',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Inventory'
                }
            },
            filtersList: data.filters,
        };
    };
    VehicleInventoryComponent.prototype.openForm = function () {
        this.setDefaultFilepaths();
        this.interactedStepperIndex = 0;
        this.button = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].SUBMIT;
        this.isUpdate = false;
        this.closeAddPanel = false;
        // this.interactedStepperIndex = this.stepper._steps._results.length;
    };
    VehicleInventoryComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._Transport_VehicleAllDetails + '/' + event.clickedRow.id]);
        }
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT) {
            this.isUpdate = true;
            this.closeAddPanel = false;
            this.button = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UPDATE;
            this.vehicleId = event.clickedRow.id;
            this.setDefaultFilepaths();
            this.vehicleInventoryService.getVehicle(event.clickedRow.id)
                .subscribe(function (res) { return _this.vehicleData(res.vehicleDetailsView); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    VehicleInventoryComponent.prototype.setDefaultFilepaths = function () {
        this.filePaths = {
            image: '',
            certificate: ''
        };
    };
    // onCancelClick
    VehicleInventoryComponent.prototype.onCancel = function () {
        this.stepper.reset();
        this.vehicalDataForm.resetForm();
        this.registrationForm.resetForm();
        this.additionalDataForm.resetForm();
        this.purchaseForm.resetForm();
        this.clearImages();
        this.clearImagesRegistration();
        this.isUpdate = false;
        this.closeAddPanel = true;
    };
    VehicleInventoryComponent.prototype.clearImages = function () {
        this.vehicleImageProp = {};
        this.vehicalDetailsForm.controls.photoAttachment.patchValue(this.attachmentInfo);
        this.cd.detectChanges();
    };
    VehicleInventoryComponent.prototype.clearImagesRegistration = function () {
        this.vehicleCertImageProp = {};
        this.registrationInfoForm.controls.registrationCertAttachment.patchValue(this.attachmentInfo);
        this.cd.detectChanges();
    };
    VehicleInventoryComponent.prototype.onSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].FOURTH_STEPPER) {
            this.stepper._steps._results.forEach(function (x, i) {
                if (i > 0) {
                    x.interacted = true;
                }
            });
        }
    };
    VehicleInventoryComponent.prototype.vehicleImgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], 'image', 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            var image;
            image = new Image();
            image.src = reader.result;
            image.onload = function () {
                that.vehicleImageProp = {
                    src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
                };
                that.vehicalDetailsForm.controls.photoAttachment.patchValue({ fileName: files[0].name, fileValue: image.src.split(',')[1] });
                that.filePaths.image = '';
                that.cd.detectChanges();
            };
        };
    };
    VehicleInventoryComponent.prototype.imgChanged = function (files, form) {
        if (this.checkFileSize(files[0], app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/)) {
            reader.onload = function (_event) {
                var image;
                image = new Image();
                image.src = reader.result;
                image.onload = function () {
                    that.setImgProperties(image.src, files[0].name);
                };
            };
        }
        else {
            reader.onload = function () {
                var image;
                image = new Image();
                image.src = reader.result;
                that.setImgProperties(image.src, files[0].name);
            };
        }
        that.filePaths.certificate = '';
    };
    VehicleInventoryComponent.prototype.setImgProperties = function (imgSrc, fileName) {
        var that = this;
        that.vehicleCertImageProp = {
            src: that.sanitizer.bypassSecurityTrustResourceUrl(imgSrc)
        };
        that.registrationInfoForm.controls.registrationCertAttachment.patchValue({ fileName: fileName, fileValue: imgSrc.split(',')[1] });
        that.cd.detectChanges();
    };
    VehicleInventoryComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isUpdate) {
            this.dataAssignment(this.vehicleView);
            this.vehicleInventoryService.createVehicle(this.vehicleView)
                .subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.vehicleDetailsView = {};
            this.dataAssignment(this.vehicleView);
            this.vehicleView['id'] = this.vehicleId;
            this.vehicleDetailsView = this.vehicleView;
            if (this.vehicleView.registrationCertAttachment != null) {
                this.vehicleDetailsView.registrationCertAttachment.fileName = this.vehicleView.registrationCertAttachment.fileName;
                this.vehicleDetailsView.registrationCertAttachment.fileValue = this.vehicleView.registrationCertAttachment.fileValue;
            }
            this.vehicleInventoryService.updateVehicle(this.vehicleDetailsView)
                .subscribe(function (res) { return _this.addUpdateResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    VehicleInventoryComponent.prototype.dataAssignment = function (vehicalDataAssign) {
        Object.assign(vehicalDataAssign, this.vehicalDetailsForm.value, this.registrationInfoForm.value, this.additionalDetailsForm.value, this.purchaseInfoForm.value);
        vehicalDataAssign['photoAttachment'] = null;
        vehicalDataAssign['registrationCertAttachment'] = null;
        if (this.vehicalDetailsForm.value.photoAttachment && this.vehicalDetailsForm.value.photoAttachment.fileName) {
            Object.assign(vehicalDataAssign['photoAttachment'] = {}, this.vehicalDetailsForm.controls.photoAttachment.value);
        }
        if (this.registrationInfoForm.value.registrationCertAttachment && this.registrationInfoForm.value.registrationCertAttachment.fileName) {
            Object.assign(vehicalDataAssign['registrationCertAttachment'] = {}, this.registrationInfoForm.controls.registrationCertAttachment.value);
        }
    };
    VehicleInventoryComponent.prototype.addUpdateResponse = function (result) {
        this.onCancel();
        this.getAllVehicles(this.vehicleSearchView);
        this.openSnackBar(result.messages.ResultMessage);
    };
    VehicleInventoryComponent.prototype.vehicleData = function (vehicleDetails) {
        this.vehicalDetailsForm.patchValue(vehicleDetails);
        this.registrationInfoForm.patchValue(vehicleDetails);
        this.additionalDetailsForm.patchValue(vehicleDetails);
        this.purchaseInfoForm.patchValue(vehicleDetails);
        var that = this;
        if (vehicleDetails.photoAttachment && vehicleDetails.photoAttachment.fileName) {
            that.vehicleImageProp = {
                src: this.getFileName(vehicleDetails.photoAttachment.fileName)
            };
            if (vehicleDetails.photoAttachment.fileName) {
                this.filePaths.image = this.storeService.getFilePath(vehicleDetails.photoAttachment.fileName);
            }
            this.setFormAttachmentValue(that.vehicalDetailsForm.controls.photoAttachment, vehicleDetails.photoAttachment.fileName);
        }
        if (vehicleDetails.registrationCertAttachment && vehicleDetails.registrationCertAttachment.fileName) {
            that.vehicleCertImageProp = {
                src: this.getFileName(vehicleDetails.registrationCertAttachment.fileName)
            };
            if (vehicleDetails.registrationCertAttachment.fileName) {
                this.filePaths.certificate = this.storeService.getFilePath(vehicleDetails.registrationCertAttachment.fileName);
            }
            this.setFormAttachmentValue(that.registrationInfoForm.controls.registrationCertAttachment, vehicleDetails.registrationCertAttachment.fileName);
        }
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
        this.customSteperLabelChange();
        that.cd.detectChanges();
    };
    VehicleInventoryComponent.prototype.getFileName = function (fileName) {
        var that = this;
        return that.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(fileName));
    };
    VehicleInventoryComponent.prototype.setFormAttachmentValue = function (setForm, fileName) {
        this.storeService.storeFileEncryptByFileNameGet(fileName)
            .subscribe(function (value) {
            if (value) {
                setForm.patchValue({ fileName: value.fileNameWithExtension, fileValue: value.value });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInventoryComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicalDataForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInventoryComponent.prototype, "vehicalDataForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registrationForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInventoryComponent.prototype, "registrationForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('additionalDataForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInventoryComponent.prototype, "additionalDataForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('purchaseForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleInventoryComponent.prototype, "purchaseForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VehicleInventoryComponent.prototype, "logoImgInput", void 0);
    VehicleInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-inventory',
            template: __webpack_require__(/*! ./vehicle-inventory.component.html */ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-inventory.component.scss */ "./src/app/modules/transportation/inventory/vehicle-inventory/vehicle-inventory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_4__["VehicleInventoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], VehicleInventoryComponent);
    return VehicleInventoryComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 mx-40 mb-24 radius-t-20\">\n<app-table [settings]=\"tabSettings\" (getTableData)='getPollutionCheckHistory($event)'\n  (rowBasedAction)=\"rowWiseActions($event)\" [disabled]=\"disbleSubmitBtn\" [templateRef]=\"addPollutionCheckTemplate\"\n  [closeAddForm]=\"closeAddPanel\" (openAddForm)=\"onAddFormClick()\" [closeRowForm]='closeAddPanel'>\n</app-table>\n</div>\n<ng-template #addPollutionCheckTemplate>\n  <form [formGroup]=\"pollutionCheckForm\" (ngSubmit)=\"onSubmit(pollutionCheckForm)\" #pollutionCheck=\"ngForm\" autocomplete=\"off\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" fxFlex=\"100\" class=\"icon-center\">\n        <mat-label #pollutioncheckdate translate>pollutioncheckdate</mat-label>\n        <input matInput (keyup)=\"forceValidation('pollutionCheckDate',pollutionCheckForm)\"\n          [matDatepicker]=\"pollutionCheckDate\" [max]=\"currentDate\" formControlName=\"pollutionCheckDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"pollutionCheckDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pollutionCheckDate></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"pollutioncheckdate.innerText\"\n            [validationControl]=\"pollutionCheckForm.controls.pollutionCheckDate\" [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"40\" fxFlex=\"100\" class=\"px-sm-20 icon-center\">\n        <mat-label #pollutioncheckexpirydate translate>pollutioncheckexpirydate</mat-label>\n        <input matInput (keyup)=\"forceValidation('pollutionCheckExpiryDate',pollutionCheckForm)\"\n          [matDatepicker]=\"pollutionCheckExpiryDate\" [min]=\"pollutionCheckForm.controls.pollutionCheckDate.value\"\n          formControlName=\"pollutionCheckExpiryDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"pollutionCheckExpiryDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pollutionCheckExpiryDate></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"pollutioncheckexpirydate.innerText\"\n            [validationControl]=\"pollutionCheckForm.controls.pollutionCheckExpiryDate\" [doValidate]=\"validate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"column\" class=\"mt-12 w-280\" fxFlex.gt-xs=\"32\" fxFlex=\"100\">\n        <div fxLayout=\"row\">\n          <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"logoImgInput.value='';logoImgInput.click()\">\n            <mat-icon class=\"mr-8\">attach_file</mat-icon>{{'Upload Image' | translate}}\n          </button>\n          <button mat-icon-button type=\"button\"  [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n            <mat-icon class=\"mb-4 grey-600-fg\"\n              (click)=\"logoImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n          </button>\n        </div>\n        <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n          (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n        <div class=\"pt-8 logo-name break-word\"\n          [style.visibility]=\"uploadFiles?.value?.pollutionFileNameWithExtension ? 'visible' : 'hidden'\"\n          [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n          {{uploadFiles?.value?.pollutionFileNameWithExtension}}</div>\n      </div>\n    </div>\n   \n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n      <button mat-raised-button class=\"mr-12 text-uppercase\" type=\"button\" (click)=\"cancel()\">{{'cancel' | translate}}</button>\n      <button type=\"submit\" mat-raised-button class=\"text-uppercase\" type=\"submit\" color=\"accent\"\n        *ngIf=\"!updateBtn\">{{'create' | translate}}</button>\n      <button type=\"submit\" mat-raised-button class=\"text-uppercase\" type=\"submit\" color=\"accent\"\n        *ngIf=\"updateBtn\">{{'update' | translate}}</button>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtcG9sbHV0aW9uLWNoZWNrLWhpc3RvcnkvdmVoaWNsZS1wb2xsdXRpb24tY2hlY2staGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: VehiclePollutionCheckHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePollutionCheckHistoryComponent", function() { return VehiclePollutionCheckHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/Transport/vehicle-inventory.service */ "./src/app/service/Transport/vehicle-inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");












var VehiclePollutionCheckHistoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehiclePollutionCheckHistoryComponent, _super);
    function VehiclePollutionCheckHistoryComponent(storeService, commonService, _fb, sanitizer, dialogRef, cd, dialog, route, vehicleInventoryService, snackBar) {
        var _this = _super.call(this) || this;
        _this.storeService = storeService;
        _this.commonService = commonService;
        _this._fb = _fb;
        _this.sanitizer = sanitizer;
        _this.dialogRef = dialogRef;
        _this.cd = cd;
        _this.dialog = dialog;
        _this.route = route;
        _this.vehicleInventoryService = vehicleInventoryService;
        _this.snackBar = snackBar;
        _this.disbleSubmitBtn = false;
        _this.currentComponent = 'VehiclePollutionCheckHistoryComponent';
        _this.vehiclePollutionCheckSearchView = {
            vehicleId: '',
            sortBy: '',
            pollutionCheckDateBegin: [],
            pollutionCheckDateEnd: [],
            pollutionCheckExpiryDateBegin: [],
            pollutionCheckExpiryDateEnd: [],
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE
        };
        _this.pollutionDataView = {
            vehicleId: '',
            pollutionCheckDate: '',
            pollutionCheckExpiryDate: '',
            attachment: {
                fileName: '',
                fileValue: ''
            }
        };
        _this.pollutionUpdateView = {
            id: '',
            pollutionCheckDate: '',
            pollutionCheckExpiryDate: '',
            attachment: {
                fileName: '',
                fileValue: ''
            }
        };
        return _this;
    }
    VehiclePollutionCheckHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.vehicleId = params.id;
            }
        });
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.vehiclePollutionCheckSearchView = modelTableComponent;
        }
        this.cols = [
            { field: 'pollutionCheckDate', header: 'Pollution Check Date', sort: true },
            { field: 'pollutionCheckExpiryDate', header: 'Pollution Check Expiry Date', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.vehiclePollutionCheckSearchView,
            componentName: this.currentComponent,
        };
        this.uploadFiles = this._fb.group({
            pollutionFileNameWithExtension: null,
            pollutionFileValue: null,
        });
        this.pollutionCheckForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pollutionCheckDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            pollutionCheckExpiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
    };
    // Get all VehiclePollutionCheckHistory
    VehiclePollutionCheckHistoryComponent.prototype.getPollutionCheckHistory = function (vehiclePollutionCheckData) {
        var _this = this;
        this.vehiclePollutionCheckSearchView = vehiclePollutionCheckData;
        this.vehicleInventoryService.fetchVehiclePollutionCheckHistory(this.vehicleId, vehiclePollutionCheckData.pollutionCheckDateBegin, vehiclePollutionCheckData.pollutionCheckDateEnd, vehiclePollutionCheckData.pollutionCheckExpiryDateBegin, vehiclePollutionCheckData.pollutionCheckExpiryDateEnd, vehiclePollutionCheckData.sortBy, vehiclePollutionCheckData.sortOrder, vehiclePollutionCheckData.pageNumber, vehiclePollutionCheckData.pageSize).subscribe(function (res) {
            return _this.vehiclesPollutionData(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Binding data To Table
    VehiclePollutionCheckHistoryComponent.prototype.vehiclesPollutionData = function (data) {
        var _this = this;
        this.custRowsPerPageOptions = [];
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            data.resultList.list.forEach(function (formatDate) {
                formatDate.pollutionCheckDate =
                    formatDate.pollutionCheckDate != null ? _this.commonService.customDateFormat(formatDate.pollutionCheckDate.toString(), _this.getSchoolDateFormat()).date : null;
                formatDate.pollutionCheckExpiryDate =
                    formatDate.pollutionCheckExpiryDate != null ? _this.commonService.customDateFormat(formatDate.pollutionCheckExpiryDate.toString(), _this.getSchoolDateFormat()).date : null;
            });
            this.rows = data.resultList.list;
            this.totalItems = data.resultList.totalItems;
        }
        this.rows.forEach(function (e) {
            e.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DETAILS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE
                }
            ];
        });
        if (data.resultList) {
            this.vehiclePollutionCheckSearchView.pageNumber = data.resultList.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.vehiclePollutionCheckSearchView,
            rows: this.rows,
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'New'
                },
                infoButton: {
                    required: true,
                    text: 'Vehicle Pollution Check History'
                }
            },
            filtersList: data.filters,
            tabTable: true,
            padding: true,
        };
    };
    // Adding Post Form
    VehiclePollutionCheckHistoryComponent.prototype.onAddFormClick = function () {
        this.validate = false;
        this.closeAddPanel = false;
        this.updateBtn = false;
        this.disbleSubmitBtn = true;
    };
    VehiclePollutionCheckHistoryComponent.prototype.onSubmit = function (pollutionForm) {
        var _this = this;
        this.disbleSubmitBtn = true;
        if (pollutionForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VALID) {
            this.validate = false;
            this.disbleSubmitBtn = false;
            if (this.isedit === true) {
                this.pollutionUpdateView.pollutionCheckDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckDate),
                    this.pollutionUpdateView.pollutionCheckExpiryDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckExpiryDate),
                    this.pollutionUpdateView.id = this.pollutionCheckId;
                this.pollutionUpdateView.attachment.fileName = this.uploadFiles.value.pollutionFileNameWithExtension,
                    this.pollutionUpdateView.attachment.fileValue = this.uploadFiles.value.pollutionFileValue;
                this.vehicleInventoryService.updateVehiclePollutionCheck(this.pollutionUpdateView).subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.pollutionDataView.vehicleId = this.vehicleId;
                this.pollutionDataView.pollutionCheckDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckDate),
                    this.pollutionDataView.pollutionCheckExpiryDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckExpiryDate),
                    this.pollutionDataView.attachment.fileName = this.uploadFiles.value.pollutionFileNameWithExtension,
                    this.pollutionDataView.attachment.fileValue = this.uploadFiles.value.pollutionFileValue;
                this.vehicleInventoryService.vehilePollutionCheck(this.pollutionDataView).subscribe(function (res) { return _this.updateResponse(res); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
        else {
            this.validate = true;
            return false;
        }
    };
    // update Response
    VehiclePollutionCheckHistoryComponent.prototype.updateResponse = function (response) {
        this.clearImages(true);
        this.isedit = false;
        if (response.statusCode === this.HttpStatus.OK || response.statusCode === this.HttpStatus.CONFLICT) {
            if (response.statusCode === this.HttpStatus.CONFLICT) {
                this.closeAddPanel = false;
            }
            else {
                this.closeAddPanel = true;
                this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
                this.myForm.resetForm();
                this.clearImages(true);
                this.updateBtn = false;
                this.disbleSubmitBtn = false;
            }
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
    };
    // End
    // Cancel Button
    VehiclePollutionCheckHistoryComponent.prototype.cancel = function () {
        this.clearImages(true);
        this.closeAddPanel = true;
        this.disbleSubmitBtn = false;
        this.myForm.resetForm();
        this.isedit = false;
    };
    // For Edit and Delete Events
    VehiclePollutionCheckHistoryComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT) {
            this.isedit = true;
            this.closeAddPanel = false;
            this.updateBtn = true;
            this.disbleSubmitBtn = true;
            this.pollutionCheckId = event.clickedRow.id;
            this.vehicleInventoryService.getVehiclePollutionCheck(event.clickedRow.id).subscribe(function (res) {
                _this.pollutionCheckForm.controls['pollutionCheckDate'].setValue(res.resultModel.pollutionCheckDate);
                _this.pollutionCheckForm.controls['pollutionCheckExpiryDate'].setValue(res.resultModel.pollutionCheckExpiryDate);
                _this.fileName = '';
                if (res.resultModel.attachment !== null && res.resultModel.attachment !== undefined) {
                    _this.fileName = res.resultModel.attachment.fileName;
                    _this.logoImgProp = {
                        src: _this.sanitizer.bypassSecurityTrustResourceUrl(_this.storeService.getFilePath(res.resultModel.attachment.fileName))
                    };
                    _this.storeService.storeFileEncryptByFileNameGet(res.resultModel.attachment.fileName)
                        .subscribe(function (result) {
                        if (result) {
                            _this.uploadFiles.controls['pollutionFileNameWithExtension'].patchValue(result.fileNameWithExtension);
                            _this.uploadFiles.controls['pollutionFileValue'].patchValue(result.value);
                        }
                    });
                    _this.cd.detectChanges();
                }
            }, function (error) {
                _this.disbleSubmitBtn = false;
                _this.errorResponse(error);
            });
        }
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].YES) {
                    _this.vehicleInventoryService.deleteVehiclePollutionCheck(event.clickedRow.id).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
        else if (event.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW).toLowerCase()) {
            if (event.clickedRow.attachment != null) {
                this.nameImgProp = this.storeService.getFilePath(event.clickedRow.attachment.fileName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    // Delete Response
    VehiclePollutionCheckHistoryComponent.prototype.deleteResponse = function (response) {
        this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
        this.openSnackBar(response.messages.ResultMessage);
    };
    VehiclePollutionCheckHistoryComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.fileName = '';
            this.uploadFiles.controls.pollutionFileNameWithExtension.patchValue(null);
            this.uploadFiles.controls.pollutionFileValue.patchValue(null);
        }
        this.cd.detectChanges();
    };
    VehiclePollutionCheckHistoryComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            var file_1 = event[0];
            reader_1.readAsDataURL(file_1);
            var image = void 0;
            image = new Image();
            image.src = reader_1.result;
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.uploadFiles.controls['pollutionFileNameWithExtension'].setValue(file_1.name);
                that_1.uploadFiles.controls['pollutionFileValue'].setValue(reader_1.result.split(',')[1]);
                _this.cd.detectChanges();
            };
            that_1.setFileProperties(image);
        }
    };
    VehiclePollutionCheckHistoryComponent.prototype.setFileProperties = function (image) {
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        this.logoImgProp = {};
        this.logoImgProp = data;
        this.cd.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pollutionCheck'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehiclePollutionCheckHistoryComponent.prototype, "myForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VehiclePollutionCheckHistoryComponent.prototype, "logoImgInput", void 0);
    VehiclePollutionCheckHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-pollution-check-history',
            template: __webpack_require__(/*! ./vehicle-pollution-check-history.component.html */ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-pollution-check-history.component.scss */ "./src/app/modules/transportation/inventory/vehicle-pollution-check-history/vehicle-pollution-check-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_Transport_vehicle_inventory_service__WEBPACK_IMPORTED_MODULE_5__["VehicleInventoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], VehiclePollutionCheckHistoryComponent);
    return VehiclePollutionCheckHistoryComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tabSettings\" [closeRowForm]='closeAddPanel' (rowBasedAction)=\"rowActions($event)\"\n  (getTableData)='getAllVehicleService($event)' [templateRef]=\"addServiceHistory\" (openAddForm)=\"onAddFormClick()\">\n</app-table>\n\n<ng-template #addServiceHistory>\n  <form class=\"p-20\" [formGroup]=\"serviceHistoryForm\" (ngSubmit)=\"onSubmit(serviceHistoryForm)\" #serviceForm=\"ngForm\" autocomplete=\"off\">\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"32\" fxFlex=\"100\" fxLayout=\"column\"\n        class=\"icon-center\">\n        <mat-label #serviceDate translate>Service Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('serviceDate',serviceHistoryForm)\" [matDatepicker]=\"serviceDatePicker\"\n          formControlName=\"serviceDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"serviceDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #serviceDatePicker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]='serviceDate.innerText'\n            [validationControl]=\"serviceHistoryForm.controls.serviceDate\" [doValidate]=\"serviceValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"36\" fxFlex=\"100\" fxLayout=\"column\"\n        class=\"px-sm-20 icon-center\">\n        <mat-label #nextServiceDate translate>Next Service Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('nextServiceDate',serviceHistoryForm)\"\n          [matDatepicker]=\"nextServiceDatePicker\" [min]=\"serviceHistoryForm.controls.serviceDate.value\"\n          formControlName=\"nextServiceDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"nextServiceDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #nextServiceDatePicker></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]='nextServiceDate.innerText'\n            [validationControl]=\"serviceHistoryForm.controls.nextServiceDate\" [doValidate]=\"serviceValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"column\" class=\"mt-12\" fxFlex.gt-xs=\"32\" fxFlex=\"100\">\n        <div fxLayout=\"row\">\n          <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"logoImgInput.value='';logoImgInput.click()\">\n            <mat-icon class=\"mr-8\">attach_file</mat-icon>{{'Upload Image' | translate}}\n          </button>\n          <button mat-icon-button type=\"button\"  [style.display]=\"logoImgProp?.src ? 'block' : 'none'\"  (click)=\"logoImgInput.value='';clearImages(true)\">\n            <mat-icon class=\"mb-4 grey-600-fg\"\n             >highlight_off</mat-icon>\n          </button>\n\n          <!-- <button mat-icon-button [style.display]=\"logoImgProp?.src ? 'block' : 'none'\" (click)=\"logoImgInput.value='';clearImages(true)\">\n            <mat-icon class=\"mb-4 grey-600-fg\" >\n                highlight_off\n            </mat-icon>\n        </button> -->\n\n\n        </div>\n        <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n          (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n        <div class=\"pt-8 logo-name break-word\"\n          [style.visibility]=\"serviceHistoryForm.controls?.attachment?.value.fileName ? 'visible' : 'hidden'\"\n          [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n          {{serviceHistoryForm.controls?.attachment?.value.fileName}}</div>\n      </div>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n\n      <mat-form-field appearance=\"outline\" class=\"mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"32\" fxFlex=\"100\">\n        <mat-label #odometerReadingService translate>Odometer Reading At Service</mat-label>\n        <input autocomplete=\"off\" matInput (keyup)=\"preventSpace($event,'serviceHistoryForm','odometerReadingAtService')\" formControlName=\"odometerReadingAtService\" (blur)=\"trimTextBoxSpaces('serviceHistoryForm','odometerReadingAtService')\">\n        <mat-error>\n          <app-validation [labelName]=\"odometerReadingService.innerText\"\n            [validationControl]=\"serviceHistoryForm.controls.odometerReadingAtService\" [doValidate]=\"serviceValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"36\" fxFlex=\"100\">\n        <mat-label #odometerNextService translate>Odometer Reading Next Service</mat-label>\n        <input autocomplete=\"off\" (keyup)=\"preventSpace($event,'serviceHistoryForm','odomenterReadingNextService')\" matInput formControlName=\"odomenterReadingNextService\" (blur)=\"trimTextBoxSpaces('serviceHistoryForm','odomenterReadingNextService')\">\n        <mat-error>\n          <app-validation [labelName]=\"odometerNextService.innerText\"\n            [validationControl]=\"serviceHistoryForm.controls.odomenterReadingNextService\"\n            [doValidate]=\"serviceValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"32\" fxFlex=\"100\">\n        <mat-label #additionalDetail translate>Additional Details</mat-label>\n        <input autocomplete=\"off\" matInput formControlName=\"additionalDetails\" (keyup)=\"preventSpace($event,'serviceHistoryForm','additionalDetails')\" (blur)=\"trimTextBoxSpaces('serviceHistoryForm','additionalDetails')\">\n        <mat-error>\n          <app-validation [labelName]=\"additionalDetail.innerText\"\n            [validationControl]=\"serviceHistoryForm.controls.additionalDetails\"\n            class=\"error-msg messages text-left text-danger\" [doValidate]=\"serviceValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-12\">\n      <button class=\"mr-12 text-uppercase\" type=\"button\" mat-raised-button (click)=\"closeAddForm()\">\n        {{'Cancel' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\"\n        [disabled]=\"disableSubmitBtn\">{{(updateButtonShow ? 'Update':'Create') | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vaW52ZW50b3J5L3ZlaGljbGUtc2VydmljZS1oaXN0b3J5L3ZlaGljbGUtc2VydmljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VehicleServiceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleServiceHistoryComponent", function() { return VehicleServiceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_Transport_vehicle_service_history_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/Transport/vehicle-service-history.service */ "./src/app/service/Transport/vehicle-service-history.service.ts");












var VehicleServiceHistoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleServiceHistoryComponent, _super);
    function VehicleServiceHistoryComponent(_fb, commonService, route, dialogRef, vehicleHistoryService, storeService, cd, sanitizer, snackBar) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.commonService = commonService;
        _this.route = route;
        _this.dialogRef = dialogRef;
        _this.vehicleHistoryService = vehicleHistoryService;
        _this.storeService = storeService;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.snackBar = snackBar;
        _this.dataLoaded = Promise.resolve(false);
        _this.flagImageProp = {};
        _this.closeAddPanel = false;
        _this.serviceValidate = true;
        return _this;
    }
    VehicleServiceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param.id) {
                _this.vehicleId = param.id;
            }
        });
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.vehicleServiceFilterView,
            componentName: this.currentComponent,
        };
        this.vehicleServiceFilterView = {
            vehicleId: '',
            vehicleName: [],
            registrationNumber: [],
            serviceDate: '',
            odometerReadingAtService: '',
            nextServiceDate: '',
            odomenterReadingNextService: '',
            additionalDetails: [],
            serviceDateBegin: '',
            serviceDateEnd: '',
            nextServiceDateBegin: '',
            nextServiceDateEnd: '',
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
        };
        // Table Colums
        this.cols = [
            { field: 'vehicleName', header: 'Vehicle Name', sort: true },
            { field: 'registrationNumber', header: 'Registration Number', sort: true },
            { field: 'serviceDate', header: 'Service Date', sort: true },
            { field: 'nextServiceDate', header: 'Next Service Date', sort: true },
            { field: 'odometerReadingAtService', header: 'Odometer Reading At Service', sort: true },
            { field: 'odomenterReadingNextService', header: 'Odometer Reading Next Service', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.vehicleServiceFilterView = modelTableComponent;
        }
        this.getAllVehicleService(this.vehicleServiceFilterView);
        this.serviceHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            vehicleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            serviceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            odometerReadingAtService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(999999), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].NUMBER_PATTERN)]),
            odomenterReadingNextService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].max(999999), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].NUMBER_PATTERN)]),
            nextServiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            additionalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["Pattern"].ALPHANUMERIC)]),
            attachment: this._fb.group({
                fileName: null,
                fileValue: null,
            }),
        });
        this.vehicleServiceView = {
            vehicleId: this.vehicleId,
            serviceDate: new Date(),
            nextServiceDate: new Date(),
            odometerReadingAtService: 0,
            odomenterReadingNextService: 0,
            additionalDetails: '',
            attachment: this.attachmentInfo
        };
        this.attachmentInfo = {
            fileName: '',
            fileValue: ''
        };
        this.serviceVehicleView = {
            id: '',
            vehicleId: this.vehicleId,
            serviceDate: new Date(),
            nextServiceDate: new Date(),
            odometerReadingAtService: 0,
            odomenterReadingNextService: 0,
            additionalDetails: '',
            attachment: this.attachmentInfo
        };
        this.attachmentInfo = {
            fileName: '',
            fileValue: ''
        };
    };
    // tslint:disable-next-line:use-life-cycle-interface
    VehicleServiceHistoryComponent.prototype.ngOnChanges = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.vehicleServiceFilterView = modelTableComponent;
        }
    };
    VehicleServiceHistoryComponent.prototype.onAddFormClick = function () {
        this.updateButtonShow = false;
        this.serviceValidate = false;
        this.serviceHistoryForm.reset();
        this.serviceForm.resetForm();
        this.closeAddPanel = false;
    };
    VehicleServiceHistoryComponent.prototype.getAllVehicleService = function (vehicleServiceFilterView) {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.vehicleServiceFilterView = modelTableComponent;
        }
        this.vehicleServiceFilterView = vehicleServiceFilterView;
        this.vehicleHistoryService.getAllServiceHistory(this.vehicleId, this.vehicleServiceFilterView.vehicleName, this.vehicleServiceFilterView.registrationNumber, this.vehicleServiceFilterView.serviceDate, this.vehicleServiceFilterView.odometerReadingAtService, this.vehicleServiceFilterView.nextServiceDate, this.vehicleServiceFilterView.odomenterReadingNextService, this.vehicleServiceFilterView.additionalDetails, this.vehicleServiceFilterView.serviceDateBegin, this.vehicleServiceFilterView.serviceDateEnd, this.vehicleServiceFilterView.nextServiceDateBegin, this.vehicleServiceFilterView.nextServiceDateEnd, this.vehicleServiceFilterView.sortBy, this.vehicleServiceFilterView.sortOrder, this.vehicleServiceFilterView.pageNumber, this.vehicleServiceFilterView.pageSize).subscribe(function (res) {
            _this.getStudent(res);
            _this.dataLoaded = Promise.resolve(true);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // response of application categories
    VehicleServiceHistoryComponent.prototype.getStudent = function (data) {
        var _this = this;
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            this.rows = data.resultList.list;
            this.totalItems = data.resultList.totalItems;
        }
        this.rows.forEach(function (e) {
            e.operations = [
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT
                }, {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DETAILS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW
                }
            ];
            e.serviceDate = (e.serviceDate == null) ? null : _this.commonService.customDateFormat(e.serviceDate, _this.getSchoolDateFormat()).date;
            e.nextServiceDate = (e.nextServiceDate == null) ? null : _this.commonService.customDateFormat(e.nextServiceDate, _this.getSchoolDateFormat()).date;
        });
        if (data.resultList) {
            this.vehicleServiceFilterView.pageNumber = data.resultList.list.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.vehicleServiceFilterView,
            rows: this.rows,
            componentName: this.currentComponent,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Vehicle Service History'
                },
            },
            filtersList: data.filters
        };
    };
    // method for when click cancel panel it will open
    VehicleServiceHistoryComponent.prototype.closeAddForm = function () {
        this.logoImgProp = {};
        this.clearImages(true);
        this.serviceValidate = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].HIDE);
        this.closeAddPanel = true;
        this.serviceHistoryForm.reset();
        this.serviceForm.resetForm();
    };
    // submit the data when we post the service vehicle history
    VehicleServiceHistoryComponent.prototype.onSubmit = function (serviceHistoryForm) {
        var _this = this;
        if (this.inSpectionDetails != null) {
            serviceHistoryForm.value.id = this.inSpectionDetails.id;
        }
        if (serviceHistoryForm.invalid) {
            this.serviceValidate = true;
            return;
        }
        this.serviceValidate = false;
        serviceHistoryForm.value.vehicleId = this.vehicleId;
        serviceHistoryForm.value.inspectionDate = this.getFormattedDateByAPIPattern(serviceHistoryForm.value.inspectionDate);
        serviceHistoryForm.value.nextInspectionDate = this.getFormattedDateByAPIPattern(serviceHistoryForm.value.nextInspectionDate);
        if (serviceHistoryForm.value.id == null) {
            this.vehicleServiceView = serviceHistoryForm.value;
            this.vehicleHistoryService.createVehicleServiceHistory(this.vehicleServiceView).subscribe(function (res) { return _this.serviceResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            this.serviceVehicleView = serviceHistoryForm.value;
            this.serviceVehicleView.id = this.inSpectionDetails.id;
            this.vehicleHistoryService.vehicleServiceHistory(this.serviceVehicleView).subscribe(function (res) { return _this.serviceResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    VehicleServiceHistoryComponent.prototype.serviceResponse = function (data) {
        this.inSpectionDetails = null;
        this.clearImages(true);
        if (data.statusCode === this.HttpStatus.OK) {
            this.getAllVehicleService(this.vehicleServiceFilterView);
            this.closeAddPanel = true;
            this.clearImages(true);
            this.serviceForm.resetForm();
            this.serviceValidate = false;
            this.flagImageProp = null;
            this.updateButtonShow = false;
        }
        else {
            this.closeAddPanel = false;
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    VehicleServiceHistoryComponent.prototype.rowActions = function (data) {
        var _this = this;
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CustomDialogComponent"], {
                disableClose: true,
                data: {
                    text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].WARNING_ON_SINGLE_DELETE),
                    action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES
                },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.vehicleHistoryService.deleteVehicleService(data.clickedRow.id).
                        subscribe(function (res) { return _this.serviceResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        else if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT) {
            this.updateButtonShow = true;
            this.closeAddPanel = false;
            this.vehicleHistoryService.getServiceHistory(data.clickedRow.id).subscribe(function (res) {
                if (res.resultModel) {
                    _this.inSpectionDetails = res.resultModel;
                    _this.serviceHistoryForm.controls['serviceDate'].setValue(res.resultModel.serviceDate);
                    _this.serviceHistoryForm.controls['nextServiceDate'].setValue(res.resultModel.nextServiceDate);
                    _this.serviceHistoryForm.controls['odometerReadingAtService'].setValue(res.resultModel.odometerReadingAtService);
                    _this.serviceHistoryForm.controls['odomenterReadingNextService'].setValue(res.resultModel.odomenterReadingNextService);
                    _this.serviceHistoryForm.controls['additionalDetails'].setValue(res.resultModel.additionalDetails);
                    _this.fileName = '';
                    if (res.resultModel.attachment !== null && res.resultModel.attachment !== undefined) {
                        _this.fileName = res.resultModel.attachment.fileName;
                        _this.logoImgProp = {
                            src: _this.sanitizer.bypassSecurityTrustResourceUrl(_this.storeService.getFilePath(res.resultModel.attachment.fileName))
                        };
                        _this.storeService.storeFileEncryptByFileNameGet(res.resultModel.attachment.fileName)
                            .subscribe(function (result) {
                            if (result) {
                                _this.serviceHistoryForm.controls.attachment.value.fileName = result.fileNameWithExtension;
                                _this.serviceHistoryForm.controls.attachment.value.fileValue = result.value;
                            }
                        });
                        _this.cd.detectChanges();
                    }
                }
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (data.operation === (app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW_ICON).toLowerCase()) {
            if (data.clickedRow.attachment != null) {
                this.nameImgProp = this.storeService.getFilePath(data.clickedRow.attachment.fileName);
                window.open(this.nameImgProp);
            }
            else {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO_ATTACHMENTS_FOUND, true);
                return;
            }
        }
    };
    VehicleServiceHistoryComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.fileName = '';
            if (this.serviceHistoryForm.controls.attachment.value !== null) {
                this.serviceHistoryForm.controls.attachment.value.fileName = null;
                this.serviceHistoryForm.controls.attachment.value.fileValue = null;
            }
        }
        this.cd.detectChanges();
    };
    VehicleServiceHistoryComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            var file_1 = event[0];
            reader_1.readAsDataURL(file_1);
            var image = void 0;
            image = new Image();
            image.src = reader_1.result;
            var that_1 = this;
            reader_1.onload = function (_event) {
                that_1.serviceHistoryForm.controls.attachment.value.fileName = file_1.name;
                that_1.serviceHistoryForm.controls.attachment.value.fileValue = (reader_1.result.split(',')[1]);
                _this.cd.detectChanges();
            };
            that_1.setFileProperties(image);
        }
    };
    VehicleServiceHistoryComponent.prototype.setFileProperties = function (image) {
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        this.logoImgProp = {};
        this.logoImgProp = data;
        this.cd.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicleService'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleServiceHistoryComponent.prototype, "vehicleService", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serviceForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehicleServiceHistoryComponent.prototype, "serviceForm", void 0);
    VehicleServiceHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-service-history',
            template: __webpack_require__(/*! ./vehicle-service-history.component.html */ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.html"),
            providers: [app_service_Transport_vehicle_service_history_service__WEBPACK_IMPORTED_MODULE_11__["VehicleServiceHistroyService"]],
            styles: [__webpack_require__(/*! ./vehicle-service-history.component.scss */ "./src/app/modules/transportation/inventory/vehicle-service-history/vehicle-service-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            app_service_Transport_vehicle_service_history_service__WEBPACK_IMPORTED_MODULE_11__["VehicleServiceHistroyService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], VehicleServiceHistoryComponent);
    return VehicleServiceHistoryComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/Transport/vehicle-inspection.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service/Transport/vehicle-inspection.service.ts ***!
  \*****************************************************************/
/*! exports provided: VehicleInspectionHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInspectionHistoryService", function() { return VehicleInspectionHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * Transport
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







var VehicleInspectionHistoryService = /** @class */ (function () {
    function VehicleInspectionHistoryService(commonComponent, httpClient, basePath, configuration) {
        this.commonComponent = commonComponent;
        this.httpClient = httpClient;
        // protected basePath = 'http://localhost:8015';
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Transport;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    VehicleInspectionHistoryService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * Create inspection history
     *
     * @param inspectionHistoryView
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    VehicleInspectionHistoryService.prototype.createVehicleInspectionHistory = function (inspectionHistoryView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.post(this.basePath + "/VehicleInspectionHistory/create-inspection-history", inspectionHistoryView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInspectionHistoryService.prototype.deleteVehicleInspectionHistory = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/VehicleInspectionHistory/delete-inspection-history", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get all inspection history based on SchoolId
     *
     * @param vehicleId Gets Or Sets
     * @param vehicleNames VehicleNames
     * @param regNumbers RegNumber
     * @param inspectionFromDate Gets Or Sets
     * @param inspectionToDate Gets Or Sets
     * @param odometerReadingAtInspection Gets Or Sets
     * @param odometerReadingNextInspection Gets Or Sets
     * @param nextInspectionFromDate Gets Or Sets
     * @param nextInspectionToDate Gets Or Sets
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    VehicleInspectionHistoryService.prototype.getAllVehicleInspectionHistory = function (vehicleId, vehicleName, registrationNumber, inspectionFromDate, inspectionToDate, odometerReadingAtInspection, odometerReadingNextInspection, nextInspectionFromDate, nextInspectionToDate, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(vehicleId, 'VehicleId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(vehicleName, 'VehicleName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(registrationNumber, 'RegistrationNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inspectionFromDate, 'InspectionFromDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inspectionToDate, 'InspectionToDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(odometerReadingAtInspection, 'OdometerReadingAtInspection', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(odometerReadingNextInspection, 'OdometerReadingNextInspection', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(nextInspectionFromDate, 'NextInspectionFromDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(nextInspectionToDate, 'NextInspectionToDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/VehicleInspectionHistory/inspection-history-list", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInspectionHistoryService.prototype.getVehicleInspectionHistory = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/VehicleInspectionHistory/inspection-history-by-id", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Update  inspection history
     *
     * @param inspectionHistoryViewModel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    VehicleInspectionHistoryService.prototype.updateVehicleInspectionHistory = function (inspectionHistoryViewModel, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.put(this.basePath + "/VehicleInspectionHistory/update-inspection-history", inspectionHistoryViewModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInspectionHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], VehicleInspectionHistoryService);
    return VehicleInspectionHistoryService;
}());



/***/ }),

/***/ "./src/app/service/Transport/vehicle-inventory.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/Transport/vehicle-inventory.service.ts ***!
  \****************************************************************/
/*! exports provided: VehicleInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInventoryService", function() { return VehicleInventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * Transport
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







var VehicleInventoryService = /** @class */ (function () {
    function VehicleInventoryService(commonComponent, httpClient, basePath, configuration) {
        this.commonComponent = commonComponent;
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_3__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["ModuleConfig"].Transport;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    VehicleInventoryService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    VehicleInventoryService.prototype.getAllVehicles = function (vehicleName, vehicleModel, registrationNumber, maxCapacity, status, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(vehicleName, 'VehicleName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(vehicleModel, 'VehicleModel', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(registrationNumber, 'RegistrationNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(maxCapacity, 'MaxCapacity', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(status, 'Status', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_All_Vehicles, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
* Add Vehicle
*
* @param vehicleView
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    VehicleInventoryService.prototype.createVehicle = function (vehicleView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Vehicle_Inventory, vehicleView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
    * Get Vehicle based on SchoolId,Id
    *
    * @param id
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    VehicleInventoryService.prototype.getVehicle = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVehicle.');
        }
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Vehicle_Inventory, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
    * Update Vehicle
    *
    * @param vehicleDetailsView
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    VehicleInventoryService.prototype.updateVehicle = function (vehicleDetailsView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Vehicle_Inventory, vehicleDetailsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.fetchVehiclePollutionCheckHistory = function (vehicleId, pollutionCheckDateBegin, pollutionCheckDateEnd, pollutionCheckExpiryDateBegin, pollutionCheckExpiryDateEnd, sortBy, sortOrder, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(vehicleId, 'VehicleId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pollutionCheckDateBegin, 'PollutionCheckDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pollutionCheckDateEnd, 'PollutionCheckDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pollutionCheckExpiryDateBegin, 'PollutionCheckExpiryDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pollutionCheckExpiryDateEnd, 'PollutionCheckExpiryDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Pollution_History, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.getVehiclePollutionCheck = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Pollution_History_By_Id, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.updateVehiclePollutionCheck = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Pollution_Check, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.vehilePollutionCheck = function (vehiclePollutionDataView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Pollution_Check, vehiclePollutionDataView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.deleteVehiclePollutionCheck = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Pollution_Check, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.vehicleInsurances = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParamsWithModel(model, queryParameters);
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var headers = this.defaultHeaders;
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Insurance_List, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.updateVehicleInsurance = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Insurance, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.getVehicleInsurance = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        var headers = this.defaultHeaders;
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Insurance_By_Id, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.createVehicleInsurances = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Insurance, model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService.prototype.deleteVehicleInsurance = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_3__["TransportModuleConfig"]._Transport_Vehicle_Insurance, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleInventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], VehicleInventoryService);
    return VehicleInventoryService;
}());



/***/ }),

/***/ "./src/app/service/Transport/vehicle-service-history.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/Transport/vehicle-service-history.service.ts ***!
  \**********************************************************************/
/*! exports provided: VehicleServiceHistroyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleServiceHistroyService", function() { return VehicleServiceHistroyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * Transport
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







var VehicleServiceHistroyService = /** @class */ (function () {
    function VehicleServiceHistroyService(commonComponent, httpClient, basePath, configuration) {
        this.commonComponent = commonComponent;
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Transport;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    VehicleServiceHistroyService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    VehicleServiceHistroyService.prototype.createVehicleServiceHistory = function (vehicleServiceView, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._VehicleServiceHistroy_Create, vehicleServiceView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleServiceHistroyService.prototype.deleteVehicleService = function (id, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._VehicleServiceHistroy_Delete, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleServiceHistroyService.prototype.getAllServiceHistory = function (vehicleId, vehicleName, registrationNumber, serviceDate, odometerReadingAtService, nextServiceDate, odomenterReadingNextService, additionalDetails, serviceDateBegin, serviceDateEnd, nextServiceDateBegin, nextServiceDateEnd, sortBy, sortOrder, pageNumber, pageSize, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(vehicleId, 'VehicleId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(vehicleName, 'VehicleName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(registrationNumber, 'RegistrationNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(serviceDate, 'ServiceDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(odometerReadingAtService, 'OdometerReadingAtService', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(nextServiceDate, 'NextServiceDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(odomenterReadingNextService, 'OdomenterReadingNextService', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(additionalDetails, 'AdditionalDetails', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(serviceDateBegin, 'ServiceDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(serviceDateEnd, 'ServiceDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(nextServiceDateBegin, 'NextServiceDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(nextServiceDateEnd, 'NextServiceDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._VehicleServiceHistroy_All_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleServiceHistroyService.prototype.getServiceHistory = function (id, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._VehicleServiceHistroy_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleServiceHistroyService.prototype.vehicleServiceHistory = function (serviceVehicleView, schoolId, instituteId, userId, academicSessionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["TransportModuleConfig"]._VehicleServiceHistroy_Update, serviceVehicleView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VehicleServiceHistroyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], VehicleServiceHistroyService);
    return VehicleServiceHistroyService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-transportation-inventory-inventory-module.js.map