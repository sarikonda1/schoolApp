(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-configuration-communication-communication-module~app-shared-wizard-wizard-module"],{

/***/ "./src/app/modules/configuration/communication/communication-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CommunicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationRoutingModule", function() { return CommunicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication.component */ "./src/app/modules/configuration/communication/communication.component.ts");
/* harmony import */ var _communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./communication-types/communication-types.component */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.ts");






var routes = [
    {
        path: '', component: _communication_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'communication-types' },
            { path: 'communication-types', component: _communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_5__["CommunicationTypesComponent"], data: { title: 'Communication Types' } }
        ]
    },
];
var CommunicationRoutingModule = /** @class */ (function () {
    function CommunicationRoutingModule() {
    }
    CommunicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], CommunicationRoutingModule);
    return CommunicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configuration/communication/communication-types/communication-types.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication-types/communication-types.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" (getTableData)='tableData($event)' (rowBasedAction)=\"rowWiseActions($event)\" (openAddForm)=\"onAddFormClick()\" [closeRowForm]='closeAddPanel' [closeAddForm]=\"closeAddPanel\" [templateRef]=\"addCommunicationTypeRef\"></app-table>\n\n     <ng-template #addCommunicationTypeRef>\n      <form [formGroup]=\"communicationTypeForm\" (ngSubmit)=\"submitCommunicationForm()\"\n      #communicationForm=\"ngForm\" fxLayout=\"column\">\n        \n              <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n                <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                class=\"pr-sm-20\">\n                <mat-label #name translate>name</mat-label>\n                <input (keyup)=\"preventSpace($event,'communicationTypeForm','name')\" formControlName=\"name\" matInput required>\n                <mat-error>\n                  <app-validation [labelName]='name.innerText'\n                    [validationControl]=\"communicationTypeForm.controls.name\" [doValidate]=\"validate\">\n                  </app-validation>\n                </mat-error>\n                </mat-form-field>\n                <af-select [required]=true (selectionChange)=\"onSelectChange($event)\" appearance=\"outline\" fxFlex=\"100\"  fxFlex.gt-sm=\"50\" [optionGroupRequired]=\"false\" [options]=\"items\"\n                [showChips]=\"1\" placeholder=\"Delivery Options\" [multiple]=\"true\"\n                formControlName=\"communicationTypeDeliveryOptions\" [value]=\"selectedItems\">\n                </af-select>                           \n              </div>\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-12\">\n              <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"cancel()\">\n                  {{'Cancel' | translate}}</button>\n              <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">{{(isEdit ? 'Update':'Create') | translate}}</button>             \n          </div>\n      </form>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/modules/configuration/communication/communication-types/communication-types.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication-types/communication-types.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jb21tdW5pY2F0aW9uL2NvbW11bmljYXRpb24tdHlwZXMvY29tbXVuaWNhdGlvbi10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/configuration/communication/communication-types/communication-types.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication-types/communication-types.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CommunicationTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationTypesComponent", function() { return CommunicationTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_configuration_communication_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/configuration/communication-types.service */ "./src/app/service/configuration/communication-types.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");










var CommunicationTypesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommunicationTypesComponent, _super);
    function CommunicationTypesComponent(communicationTypesService, typeService, _fb, dialog, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.communicationTypesService = communicationTypesService;
        _this.typeService = typeService;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.filterRowData = [];
        _this.items = [];
        _this.validate = true;
        _this.currentComponent = 'CommunicationTypesComponent';
        _this.initializeFilterView();
        _this.initializeTableSettings();
        _this.initializeForm();
        _this.initializeModel();
        return _this;
    }
    CommunicationTypesComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.setColumnHeaders();
        this.commnucationMessageTypeId = [];
        this.getDeliveryoptions();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllCommunicationTypes();
    };
    CommunicationTypesComponent.prototype.initializeModel = function () {
        this.communicationTypeView = {
            name: null,
            communicationTypeDeliveryOptions: []
        };
        this.communicationTypeDataView = {
            id: null,
            name: null,
            communicationTypeDeliveryOptions: []
        };
    };
    CommunicationTypesComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: 'Name',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            Name: []
        };
    };
    CommunicationTypesComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'communicationTypeName', header: 'Name', sort: false },
            { field: 'communicationDeliveryName', header: 'Delivery Options', sort: false },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    CommunicationTypesComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: this.rows,
            columns: this.columns,
            tablename: 'Communication Types',
            componentName: this.currentComponent,
            model: this.filterViewModel,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            visibleSelectAll: true,
            isMultiDeleteRequired: false,
            isPaginationRequired: true
        };
    };
    CommunicationTypesComponent.prototype.initializeForm = function () {
        this.communicationTypeForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(45)]),
            communicationTypeDeliveryOptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
    };
    CommunicationTypesComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllCommunicationTypes();
    };
    CommunicationTypesComponent.prototype.getAllCommunicationTypes = function () {
        var _this = this;
        this.communicationTypesService.getCommunicationTypes(this.filterViewModel.Name, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
            subscribe(function (res) {
            _this.bindCommunicationTypeResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationTypesComponent.prototype.bindCommunicationTypeResult = function (data) {
        var _this = this;
        if (!data.communicationListView) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.communicationListView.list;
            this.totalRowsCount = data.communicationListView.totalItems;
            this.pageCnt = data.communicationListView.totalPages;
        }
        this.filterRowData = [];
        if (data.communicationListView) {
            this.filterViewModel.pageNumber = data.communicationListView.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Communication Types',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            rowGroupingColumns: ['communicationTypeName'],
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'New'
                },
                infoButton: {
                    required: true,
                    text: 'Communication Types'
                }
            }
        };
        this.filterRowData = this.rows;
        // filtering data 
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.communicationTypeName === element.communicationTypeName;
                    });
                    if (foundIndex === -1) {
                        x.push(element);
                    }
                });
            }
        });
        this.filterRowData = x;
        // apply edit and delete
        this.filterRowData.forEach(function (element) {
            _this.rows.forEach(function (element1) {
                if (element.communicationTypeName === element1.communicationTypeName &&
                    element.communicationDeliveryName === element1.communicationDeliveryName &&
                    element.communicationTypeId === element1.communicationTypeId &&
                    element.communicationDeliveryId === element1.communicationDeliveryId) {
                    element1.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                        },
                    ];
                }
            });
        });
    };
    CommunicationTypesComponent.prototype.getDeliveryoptions = function () {
        var _this = this;
        this.typeService.typesByTypeCategoryCode('CMT').subscribe(function (res) {
            _this.items = res.types;
            _this.items.forEach(function (element) {
                element.label = element.name;
                element.value = element.id;
            });
        });
    };
    CommunicationTypesComponent.prototype.onSelectChange = function (event) {
        var _this = this;
        this.commnucationMessageTypeId = [];
        if (event) {
            event.forEach(function (e) {
                _this.commnucationMessageTypeId.push({ commnucationMessageTypeId: e.id || e.value });
            });
        }
    };
    // edit assessment categories based on id
    CommunicationTypesComponent.prototype.rowWiseActions = function (event) {
        var _this = this;
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.isEdit = true;
            this.closeAddPanel = false;
            this.communicationTypesService.communicationTypesDetails(event.clickedRow.communicationTypeId).subscribe(function (res) { return _this.retCommunicationTypeById(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.communicationTypesService.deleteCommunicationTypes(event.clickedRow.communicationTypeId).subscribe(function (res) { return _this.deleteResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
                else if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO) {
                    _this.dialog.closeAll();
                }
            });
        }
    };
    CommunicationTypesComponent.prototype.retCommunicationTypeById = function (res) {
        var _this = this;
        this.selectedItems = [];
        this.updateId = res.communicationTypeDataView.id;
        res.communicationTypeDataView.communicationTypeDeliveryOptions.forEach(function (cmId) {
            _this.items.forEach(function (eId) {
                if (cmId.commnucationMessageTypeId === eId.value) {
                    _this.selectedItems.push({
                        value: eId.value, label: eId.label, cmDelId: cmId.id
                    });
                }
            });
        });
        this.communicationTypeForm.controls.name.setValue(res.communicationTypeDataView.name);
        this.communicationTypeForm.controls.communicationTypeDeliveryOptions.setValue(this.selectedItems);
        this.isEdit = true;
    };
    CommunicationTypesComponent.prototype.deleteResponse = function (response) {
        this.getAllCommunicationTypes();
        this.openSnackBar(response.messages.ResultMessage);
    };
    CommunicationTypesComponent.prototype.updateComTypeDetails = function () {
        var _this = this;
        this.communicationTypeDataView.id = this.updateId;
        this.communicationTypeDataView.name = this.communicationTypeForm.value.name;
        this.communicationTypeDataView.communicationTypeDeliveryOptions = [];
        if (this.commnucationMessageTypeId.length) {
            this.commnucationMessageTypeId.forEach(function (res) {
                var Id = _this.selectedItems.find(function (x) { return x.value === res.commnucationMessageTypeId; })
                    === undefined ? 0 : _this.selectedItems.find(function (x) { return x.value === res.commnucationMessageTypeId; }).cmDelId;
                _this.communicationTypeDataView.communicationTypeDeliveryOptions.push({
                    id: Id, commnucationMessageTypeId: res.commnucationMessageTypeId
                });
            });
        }
        else {
            this.selectedItems.forEach(function (selItems) {
                _this.communicationTypeDataView.communicationTypeDeliveryOptions.push({
                    id: selItems.cmDelId, commnucationMessageTypeId: selItems.value
                });
            });
        }
    };
    CommunicationTypesComponent.prototype.submitCommunicationForm = function () {
        var _this = this;
        this.communicationTypeForm.controls.name.patchValue(this.communicationTypeForm.value.name.trim());
        if (this.communicationTypeForm.valid && this.isEdit === true) {
            this.communicationTypeDataView = {};
            this.updateComTypeDetails();
            this.communicationTypesService.updateCommunicationTypes(this.communicationTypeDataView).subscribe(function (res) { return _this.resResult(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else if (this.communicationTypeForm.valid) {
            this.communicationTypeForm.value.communicationTypeDeliveryOptions = this.commnucationMessageTypeId;
            Object.assign(this.communicationTypeView, this.communicationTypeForm.value);
            this.communicationTypesService.createCommunicationTypes(this.communicationTypeView).subscribe(function (res) { return _this.resResult(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    CommunicationTypesComponent.prototype.resResult = function (res) {
        this.cancel();
        this.getAllCommunicationTypes();
        this.openSnackBar(res.messages.ResultMessage);
    };
    // Cancel Button
    CommunicationTypesComponent.prototype.cancel = function () {
        this.closeAddPanel = true;
        this.communicationForm.resetForm();
    };
    // add new form for assessment categories
    CommunicationTypesComponent.prototype.onAddFormClick = function () {
        this.closeAddPanel = false;
        this.isEdit = false;
        this.selectedItems = [];
        this.communicationForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('communicationForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationTypesComponent.prototype, "communicationForm", void 0);
    CommunicationTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication-types',
            template: __webpack_require__(/*! ./communication-types.component.html */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.html"),
            providers: [app_service_configuration_communication_types_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationTypesService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"]],
            styles: [__webpack_require__(/*! ./communication-types.component.scss */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_configuration_communication_types_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationTypesService"],
            app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], CommunicationTypesComponent);
    return CommunicationTypesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/configuration/communication/communication.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/configuration/communication/communication.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi9jb21tdW5pY2F0aW9uL2NvbW11bmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/configuration/communication/communication.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommunicationComponent = /** @class */ (function () {
    function CommunicationComponent() {
    }
    CommunicationComponent.prototype.ngOnInit = function () {
    };
    CommunicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication',
            template: __webpack_require__(/*! ./communication.component.html */ "./src/app/modules/configuration/communication/communication.component.html"),
            styles: [__webpack_require__(/*! ./communication.component.scss */ "./src/app/modules/configuration/communication/communication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommunicationComponent);
    return CommunicationComponent;
}());



/***/ }),

/***/ "./src/app/modules/configuration/communication/communication.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/configuration/communication/communication.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _communication_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./communication-routing.module */ "./src/app/modules/configuration/communication/communication-routing.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./communication-types/communication-types.component */ "./src/app/modules/configuration/communication/communication-types/communication-types.component.ts");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./communication.component */ "./src/app/modules/configuration/communication/communication.component.ts");














var CommunicationModule = /** @class */ (function () {
    function CommunicationModule() {
    }
    CommunicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_communication_component__WEBPACK_IMPORTED_MODULE_13__["CommunicationComponent"], _communication_types_communication_types_component__WEBPACK_IMPORTED_MODULE_12__["CommunicationTypesComponent"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_10__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedManagementModule"],
                _communication_routing_module__WEBPACK_IMPORTED_MODULE_6__["CommunicationRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"],
                    multi: true
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], CommunicationModule);
    return CommunicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-configuration-communication-communication-module~app-shared-wizard-wizard-module.js.map