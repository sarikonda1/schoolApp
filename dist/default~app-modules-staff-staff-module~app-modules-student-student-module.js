(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-staff-staff-module~app-modules-student-student-module"],{

/***/ "./src/app/modules/student/events/student-events.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/student/events/student-events.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='rowActions($event)'></app-table>\n"

/***/ }),

/***/ "./src/app/modules/student/events/student-events.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/student/events/student-events.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudC9ldmVudHMvc3R1ZGVudC1ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/student/events/student-events.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/student/events/student-events.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEventsComponent", function() { return StudentEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-service/api/events.service */ "./src/app/service/academic-service/api/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");









var StudentEventsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentEventsComponent, _super);
    function StudentEventsComponent(eventService, router, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.router = router;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'SchoolEventsComponent';
        _this.isStaff = false;
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    StudentEventsComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllEvents();
    };
    StudentEventsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
        };
    };
    StudentEventsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'announcedDate', header: 'Announce Date', sort: true },
            { field: 'fromDate', header: 'From Date', sort: true },
            { field: 'toDate', header: 'To Date', sort: true },
            { field: 'eventType', header: 'Event Type', sort: true },
            { field: 'eventDescription', header: 'Event Description', sort: true },
            { field: 'classAndSection', header: 'Class And Section', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    StudentEventsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Events',
            componentName: this.currentComponent,
            model: this.filterViewModel
        };
    };
    StudentEventsComponent.prototype.getAllEvents = function () {
        var _this = this;
        this.eventService.getEvents(this.filterViewModel.announcedDateBegin, this.filterViewModel.announcedDateEnd, this.filterViewModel.fromDateBegin, this.filterViewModel.fromDateEnd, this.filterViewModel.toDateBegin, this.filterViewModel.toDateBegin, this.filterViewModel.eventDescription, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.statusIds, this.filterViewModel.eventTypeIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(function (res) {
            _this.eventsResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentEventsComponent.prototype.eventsResult = function (data) {
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
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VIEW_DATA,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VIEW_OPERATION
                    }
                ];
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
            tablename: 'Events',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: false,
                    btnName: 'Add Event'
                },
                infoButton: {
                    required: true,
                    text: 'School Events'
                }
            }
        };
    };
    StudentEventsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllEvents();
    };
    StudentEventsComponent.prototype.rowActions = function (data) {
        if (this.isStaff) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Staff_Event_Details + '/' + data.clickedRow.eventId, { operation: data.operation }]);
        }
        else {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Student_Event_Details + '/' + data.clickedRow.eventId, { operation: data.operation }]);
        }
    };
    StudentEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-events',
            template: __webpack_require__(/*! ./student-events.component.html */ "./src/app/modules/student/events/student-events.component.html"),
            providers: [app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]],
            styles: [__webpack_require__(/*! ./student-events.component.scss */ "./src/app/modules/student/events/student-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], StudentEventsComponent);
    return StudentEventsComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/student/news/student-news.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/student/news/student-news.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 \">\n    <div class=\"text-uppercase font-size-18 pl-12 pb-12 pt-28\" translate>News</div>\n    <div class=\"mat-elevation-z2 simple-table-container radius-t-20 p-24\" >\n        <form [formGroup]=\"studentNewsForm\">\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n                <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n                    class=\"icon-center\">\n                    <mat-label translate #announceDate>Date</mat-label>\n                    <input matInput (keyup)=\"forceValidation('announcedDate',studentNewsForm)\"\n                        formControlName=\"announcedDate\" [matDatepicker]=\"picker\" placeholder=\"Choose date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                    <mat-error>\n                        <app-validation labelName=\"Date\"\n                                        [validationControl]=\"studentNewsForm.controls.announcedDate\" [doValidate]=\"true\">\n                        </app-validation>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" class=\"example-full-width\" fxLayout=\"column\" fxFlex=\"100\"\n                    fxFlex.gt-sm=\"50\" class=\"px-sm-20\">\n                    <mat-label #description translate>Description</mat-label>\n                    <textarea formControlName=\"eventDescription\" matInput placeholder=\"Description\"></textarea>\n                </mat-form-field>\n                <div>\n                    <button (click)=\"onSubmitEvent()\" mat-raised-button type=\"submit\" color=\"accent\" class=\"mt-24\">{{'SEARCH' | translate}}</button>\n                </div>\n            </div>\n        </form>\n        <div infinite-scroll [scrollWindow]=\"false\" [infiniteScrollDistance]=\"scrollDistance\"\n            [infiniteScrollUpDistance]=\"scrollUpDistance\" [infiniteScrollThrottle]=\"throttle\"\n            (scrolled)=\"onScrollDown()\" class=\"news-events border radius-5\" *ngIf=\"newsItems.length\">\n            <div  *ngFor=\"let newsItem of newsItems\" fxLayout=\"row\" class=\"p-24 even\">\n                    <!-- <div fxLayout=\"column\" fxFlex=\"0 1 auto\" class=\"pr-24 secondary-text h2\">{{ getFormattedDateBySchoolDateFormat(newsItem.announcedDate)}}</div> -->\n                    <div fxLayout=\"column\"  class=\"pr-24 w-200\">\n                        <div fxLayout=\"row\">\n                            <div class=\"font-size-40 pr-8 orange-fg\">{{newsItem.announcedDate | date:'dd'}}</div>\n                            <div fxLayout=\"column\">\n                                <span class=\"font-size-18 blue-grey-fg\">{{newsItem.announcedDate | date:'EEEE'}}</span>\n                                <span class=\"secondary-text\">{{newsItem.announcedDate | date:'LLL'}} {{newsItem.announcedDate | date:'yyyy'}}</span>\n                               \n                            </div>\n                        </div>\n                    </div>\n                    <div fxLayout=\"column\">                    \n                       <div class=\"pb-4 font-weignt-800 break-word\">{{newsItem.eventDescription}}</div> \n                       <a target=\"_blank\" *ngIf=\"newsItem.attachmentUrl\" [href]=\"newsItem.attachmentUrl\" translate>View Attachment</a> \n                    </div>\n            </div>\n        </div>\n        <h2 class=\"text-center\" *ngIf=\"!newsItems.length && onLoadApi\">No Result Found</h2>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/student/news/student-news.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/student/news/student-news.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudC9uZXdzL3N0dWRlbnQtbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/student/news/student-news.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/student/news/student-news.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentNewsComponent", function() { return StudentNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_parent_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/parent/news.service */ "./src/app/service/parent/news.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var StudentNewsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentNewsComponent, _super);
    function StudentNewsComponent(locale, newsService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        _this.newsService = newsService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.newsItems = [];
        _this.filterData = {
            announcedDate: null,
            eventDescription: null,
            pageNumber: _app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: 20
        };
        _this.throttle = 300;
        _this.scrollDistance = 1;
        _this.scrollUpDistance = 2;
        _this.lastPageNumber = 1;
        return _this;
    }
    StudentNewsComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.getNews(false);
        this.invalidDateMsg = _app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DATE_MSG;
    };
    StudentNewsComponent.prototype.initializeForm = function () {
        this.studentNewsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            announcedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            eventDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    };
    StudentNewsComponent.prototype.resetFilterData = function () {
        this.filterData = {
            announcedDate: null,
            eventDescription: null,
            pageNumber: _app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: 20
        };
        this.lastPageNumber = 1;
    };
    StudentNewsComponent.prototype.getNews = function (onScroll) {
        var _this = this;
        if (onScroll === void 0) { onScroll = true; }
        this.newsService.news(this.filterData.announcedDate, this.filterData.eventDescription, this.filterData.pageNumber, this.filterData.pageSize)
            .subscribe(function (res) { return _this.setNews(res, onScroll); }, function (err) { return _this.errorResponse(err); });
    };
    StudentNewsComponent.prototype.setNews = function (response, onScroll) {
        var _this = this;
        response = response.eventsDetails;
        if (response !== null) {
            this.filterData.pageNumber = response.pageNumber;
            this.filterData.pageSize = response.pageSize;
            this.lastPageNumber = response.totalPages;
            if (!onScroll) {
                this.newsItems = [];
            }
            response.list.map(function (e) {
                e.attachmentUrl = e.attachment.fileName ? _this.storeService.getFilePath(e.attachment.fileName) : null;
                _this.newsItems.push(e);
            });
        }
        else if (!onScroll) {
            this.newsItems = [];
        }
        this.onLoadApi = true;
    };
    StudentNewsComponent.prototype.onScrollDown = function () {
        if (this.filterData.pageNumber < this.lastPageNumber) {
            this.filterData.pageNumber += 1;
            this.getNews();
        }
    };
    StudentNewsComponent.prototype.onSubmitEvent = function () {
        if (this.studentNewsForm.valid) {
            this.resetFilterData();
            this.filterData.announcedDate = this.studentNewsForm.value.announcedDate;
            this.filterData.eventDescription = this.studentNewsForm.value.eventDescription;
            this.getNews(false);
        }
    };
    StudentNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'student-news',
            template: __webpack_require__(/*! ./student-news.component.html */ "./src/app/modules/student/news/student-news.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"],
            providers: [app_service_parent_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]],
            styles: [__webpack_require__(/*! ./student-news.component.scss */ "./src/app/modules/student/news/student-news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, app_service_parent_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], StudentNewsComponent);
    return StudentNewsComponent;
}(_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-staff-staff-module~app-modules-student-student-module.js.map