(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-events-events-module~app-modules-staff-staff-module"],{

/***/ "./src/app/modules/academics/events/events-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/academics/events/events-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EventsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function() { return EventsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _school_events_school_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-events/school-events.component */ "./src/app/modules/academics/events/school-events/school-events.component.ts");
/* harmony import */ var _add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-school-event/add-edit-school-event.component */ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.ts");





var routes = [
    { path: 'school-events', component: _school_events_school_events_component__WEBPACK_IMPORTED_MODULE_3__["SchoolEventsComponent"], data: { title: 'School Events' } },
    { path: 'school-events/add-edit-school-event', component: _add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_4__["AddEditSchoolEventComponent"], data: { title: 'Add School Event' } },
    { path: 'school-events/add-edit-school-event/:id', component: _add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_4__["AddEditSchoolEventComponent"], data: { title: 'Edit School Event' } }
];
var EventsRoutingModule = /** @class */ (function () {
    function EventsRoutingModule() {
    }
    EventsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EventsRoutingModule);
    return EventsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/events/events.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/academics/events/events.module.ts ***!
  \***********************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academics_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../academics.module */ "./src/app/modules/academics/academics.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/modules/academics/events/events-routing.module.ts");
/* harmony import */ var _school_events_school_events_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./school-events/school-events.component */ "./src/app/modules/academics/events/school-events/school-events.component.ts");
/* harmony import */ var _add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-edit-school-event/add-edit-school-event.component */ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.ts");


















var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_school_events_school_events_component__WEBPACK_IMPORTED_MODULE_16__["SchoolEventsComponent"], _add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_17__["AddEditSchoolEventComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_4__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_12__["Ng2TelInputModule"],
                _academics_module__WEBPACK_IMPORTED_MODULE_3__["AcademicsModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatDatepickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseMaterialColorPickerModule"],
                _events_routing_module__WEBPACK_IMPORTED_MODULE_15__["EventsRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                    multi: true
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_add_edit_school_event_add_edit_school_event_component__WEBPACK_IMPORTED_MODULE_17__["AddEditSchoolEventComponent"]],
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "./src/app/modules/academics/events/school-events/school-events.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/academics/events/school-events/school-events.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='rowActions($event)' (openAddForm)=\"onAddFormClick()\"></app-table>\n"

/***/ }),

/***/ "./src/app/modules/academics/events/school-events/school-events.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/academics/events/school-events/school-events.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2V2ZW50cy9zY2hvb2wtZXZlbnRzL3NjaG9vbC1ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/academics/events/school-events/school-events.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/academics/events/school-events/school-events.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SchoolEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolEventsComponent", function() { return SchoolEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/events.service */ "./src/app/service/academic-service/api/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var SchoolEventsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolEventsComponent, _super);
    function SchoolEventsComponent(eventService, router, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.router = router;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'SchoolEventsComponent';
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    SchoolEventsComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllEvents();
    };
    SchoolEventsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    SchoolEventsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'eventType', header: 'Event Type', sort: true },
            { field: 'eventDescription', header: 'Event Description', sort: true },
            { field: 'classAndSection', header: 'Class And Section', sort: true },
            { field: 'announcedDate', header: 'Announce Date', sort: true },
            { field: 'fromDate', header: 'From Date', sort: true },
            { field: 'toDate', header: 'To Date', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
    };
    SchoolEventsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'School Events',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    SchoolEventsComponent.prototype.getAllEvents = function () {
        var _this = this;
        this.eventService.getEvents(this.filterViewModel.announcedDateBegin, this.filterViewModel.announcedDateEnd, this.filterViewModel.fromDateBegin, this.filterViewModel.fromDateEnd, this.filterViewModel.toDateBegin, this.filterViewModel.toDateBegin, this.filterViewModel.eventDescription, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.statusIds, this.filterViewModel.eventTypeIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            _this.eventsResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    SchoolEventsComponent.prototype.eventsResult = function (data) {
        var _this = this;
        if (!data.eventsDetails) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.eventsDetails.list;
            this.totalRowsCount = data.eventsDetails.totalItems;
            this.pageCnt = data.eventsDetails.totalPages;
            this.rows.forEach(function (e) {
                if (e.status !== app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].CANCEL) {
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                        },
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW
                        }
                    ];
                }
                else {
                    e.operations = [
                        {
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                            operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW
                        }
                    ];
                }
                e.announcedDate = (e.announcedDate == null) ? null : _this.commonService.customDateFormat(e.announcedDate, _this.getSchoolDateFormat()).date;
                e.fromDate = (e.fromDate == null) ? null : _this.commonService.customDateFormat(e.fromDate, _this.getSchoolDateFormat()).date;
                e.toDate = (e.toDate == null) ? null :
                    _this.commonService.customDateFormat(e.toDate, _this.getSchoolDateFormat()).date;
            });
        }
        if (data.eventsDetails) {
            this.filterViewModel.pageNumber = data.eventsDetails.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'School Events',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'Add Event'
                },
                infoButton: {
                    required: true,
                    text: 'School Events'
                }
            }
        };
    };
    SchoolEventsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllEvents();
    };
    SchoolEventsComponent.prototype.onAddFormClick = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._Add_Edit_School_Event]);
    };
    SchoolEventsComponent.prototype.rowActions = function (data) {
        if (data.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].VIEW_DATA) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._Add_Edit_School_Event + '/' + data.clickedRow.eventId, { operation: data.operation }]);
        }
        else {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._Add_Edit_School_Event + '/' + data.clickedRow.eventId, { operation: data.operation }]);
        }
    };
    SchoolEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-events',
            template: __webpack_require__(/*! ./school-events.component.html */ "./src/app/modules/academics/events/school-events/school-events.component.html"),
            providers: [app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]],
            styles: [__webpack_require__(/*! ./school-events.component.scss */ "./src/app/modules/academics/events/school-events/school-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], SchoolEventsComponent);
    return SchoolEventsComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-events-events-module~app-modules-staff-staff-module.js.map