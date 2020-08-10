(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-academics-events-events-module~app-modules-staff-staff-module~app-modules-studen~d75228cd"],{

/***/ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-32\">\n  <div class=\"text-uppercase font-size-18 pl-12\" translate>{{eventTitle}}</div>\n  <div class=\"w-100-p simple-table-container radius-t-20 mat-elevation-z3 mb-16\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"border-bottom p-16\">\n      <button mat-raised-button class=\"text-uppercase\" color=\"primary\" (click)=\"return()\"><span\n          translate>Back</span></button>\n      <button mat-button (click)=\"getHelpText('School Events')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <div *ngIf=\"editDetails\">\n      <form class=\"p-20\" [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit(eventForm)\" #eventDataForm=\"ngForm\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" class=\"pt-12\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pr-sm-20\">\n            <mat-label #eventTypeId translate>Event Type</mat-label>\n            <mat-select formControlName=\"eventTypeId\" required (selectionChange)=\"onEventTypeSelect($event.value)\"\n              [disabled]=\"(addEventId !== undefined)\">\n              <mat-option *ngFor=\"let eventTypes of eventTypesList\" [value]=\"eventTypes.value\">\n                {{eventTypes.label}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='eventTypeId.innerText' [validationControl]=\"eventForm.controls.eventTypeId\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-sm=\"50\" fxFlex=\"100\" fxLayout=\"column\"\n            class=\"icon-center\">\n            <mat-label #announcedDate translate>Announce Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('announcedDate',eventForm)\" [matDatepicker]=\"announcedDatePicker\"\n              formControlName=\"announcedDate\" required  [min]=\"startDate\" [max]=\"endDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"announcedDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #announcedDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='announcedDate.innerText'\n                [validationControl]=\"eventForm.controls.announcedDate\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pr-sm-20 icon-center pt-12\" *ngIf=\"!hideFromToDate\">\n            <mat-label #fromDate translate>From Date</mat-label>\n            <input matInput [matDatepicker]=\"fromDatePicker\" (keyup)=\"forceValidation('fromDate',eventForm)\" required\n              formControlName=\"fromDate\" [min]=\"eventForm.controls.announcedDate.value\" [max]=\"endDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #fromDatePicker></mat-datepicker>\n\n            <mat-error>\n              <app-validation [labelName]='fromDate.innerText' [validationControl]=\"eventForm.controls.fromDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"icon-center pt-12\" *ngIf=\"!hideFromToDate\">\n            <mat-label #toDate translate>To Date</mat-label>\n            <input matInput [matDatepicker]=\"toDatePicker\" (keyup)=\"forceValidation('toDate',eventForm)\" required\n              formControlName=\"toDate\"\n              [min]=\"eventForm.controls.fromDate.value || eventForm.controls.announcedDate.value\" [max]=\"endDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #toDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='toDate.innerText' [validationControl]=\"eventForm.controls.toDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n          <ng-container *ngIf=\"loadData | async\">\n            <af-select [isValueIsObject]=\"isValueIsObject\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\" appearance=\"outline\" [optionGroupRequired]=\"true\" [groups]=\"classSections\"\n              placeholder=\"{{'Class And Sections' | translate}}\" [multiple]=\"true\" formControlName=\"eventClassSections\"\n              (selectionChange)=\"onSelectSection($event)\" [value]=\"selectedItems\"></af-select>\n          </ng-container>\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pr-sm-20\" *ngIf=\"!hideFromToDate\">\n            <mat-label #statusId translate>Status</mat-label>\n            <mat-select formControlName=\"statusId\" required>\n              <mat-option *ngFor=\"let eventStatus of eventstatusList\" [value]=\"eventStatus.value\">\n                {{eventStatus.label}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='statusId.innerText' [validationControl]=\"eventForm.controls.statusId\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"column\" class=\"pt-sm-12 pr-sm-20\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\n            <label class=\"mb-12 fuse-black-500-fg\" #IsPostCalender>{{'Do you Want to post this Event\n              Information To School Calender ?' | translate}}</label>\n            <mat-radio-group fxLayout=\"row\" fxFlex=\"100\" required formControlName=\"isPostToCalender\">\n              <mat-radio-button class=\"ml-24\" value=\"Yes\">Yes</mat-radio-button>\n              <mat-radio-button class=\"ml-24\" value=\"No\">No</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div fxLayout=\"column\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-8\">\n              <button mat-raised-button color=\"primary\" (click)=\"fileInput.value='';fileInput.click()\" type=\"button\"\n                translate>\n                {{'Upload Image' | translate}}\n              </button>\n\n              <button *ngIf=\"eventForm?.value?.attachment?.fileName\" mat-icon-button  type=\"button\">\n                <mat-icon class=\"mb-4 grey-600-fg\" (click)=\"fileInput.value='';clearImages(true)\">highlight_off\n                </mat-icon>\n              </button>\n            </div>\n            <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"fileInput\"\n              (change)=\"imgChanged(fileInput.files,eventForm)\" fxHide type=\"file\" #fileInput>\n            <div *ngIf=\"!isUpdateOrView\"\n              [style.visibility]=\"eventForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n              class=\"pt-4 primary-300-fg font-size-12 text-left pr-36\">\n              {{eventForm?.value?.attachment?.fileName}}\n            </div>\n            <a *ngIf=\"isUpdateOrView\" target=\"_blank\" [href]=\"nameImgProp\"\n              [style.visibility]=\"eventForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n              class=\"pt-4 primary-300-fg font-size-12 text-left pr-36\">View Attachment</a>\n          </div>\n        </div>\n\n        <div fxLayout=\"row\" class=\"pt-12\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label #eventDescription translate>Event Description</mat-label>\n            <textarea formControlName=\"eventDescription\" matInput required\n              (keyup)=\"preventSpace($event,'eventForm','eventDescription')\"\n              (blur)=\"trimTextBoxSpaces('eventForm','eventDescription')\"></textarea>\n            <mat-error>\n              <app-validation [labelName]='eventDescription.innerText'\n                [validationControl]=\"eventForm.controls.eventDescription\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n          <div fxLayout=\"column\" class=\"mt-8 mr-20\" translate *ngIf=\"!hideFromToDate\">After Submission of\n            Event,Participants &Finalist & winners\n            Can be selected for Competition Events</div>\n          <button mat-raised-button class=\"mx-sm-12 text-uppercase\" type=\"button\" (click)=\"return()\"\n            translate>{{'Cancel' | translate}}</button>\n          <button mat-raised-button color=\"accent\" class=\"text-uppercase\"\n            translate>{{(updateButtonShow ? 'Update':'Create') | translate}}</button>\n        </div>\n      </form>\n    </div>\n\n    <div *ngIf=\"viewDetails\" class=\"p-24\" fxLayout=\"column\">\n      <form class=\"p-20\" [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit(eventForm)\" fxLayout=\"column\"\n        fxLayout.gt-sm=\"row\">\n        <div fxLayout=\"column\" fxFlex.gt-sm=\"{{fxFlexSize}}\" fxFlex=\"100\">\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxFlex.gt-xs=\"33\" fxFlex=\"100\" fxLayout=\"column\">\n              <mat-label #announcedDate translate>Announce Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('announcedDate',eventForm)\" [matDatepicker]=\"announcedDatePicker\"\n                formControlName=\"announcedDate\" readonly>\n              <mat-datepicker #announcedDatePicker></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\"\n              class=\"px-sm-20\">\n              <mat-label #fromDate translate>From Date</mat-label>\n              <input matInput [matDatepicker]=\"fromDatePicker\" (keyup)=\"forceValidation('fromDate',eventForm)\" required\n                formControlName=\"fromDate\" [min]=\"eventForm.controls.announcedDate.value\" readonly>\n              <mat-datepicker #fromDatePicker [startAt]=\"eventForm.value.announcedDate\"></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\"\n              class=\"pr-sm-20\">\n              <mat-label #toDate translate>To Date</mat-label>\n              <input matInput [matDatepicker]=\"toDatePicker\" (keyup)=\"forceValidation('toDate',eventForm)\" required\n                formControlName=\"toDate\"\n                [min]=\"eventForm.controls.fromDate.value || eventForm.controls.announcedDate.value\" readonly>\n              <mat-datepicker #toDatePicker [startAt]=\"eventForm.value.fromDate\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n              <mat-label translate>Event Type</mat-label>\n              <input matInput [value]=\"eventTypeName? eventTypeName: ''\" readonly>\n            </mat-form-field>\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"34\"\n              class=\"px-sm-20\">\n              <mat-label translate>Status</mat-label>\n              <input matInput [value]=\"eventTypeStatus ? eventTypeStatus: ''\" readonly>\n            </mat-form-field>\n            <div fxLayout=\"column\" class=\"pt-sm-12 pr-sm-20\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\n              <label class=\"mb-12 fuse-black-500-fg\" #IsPostCalender translate>Do you Want to post this Event\n                Information To School Calender ?</label>\n              <mat-radio-group fxLayout=\"row\" fxFlex=\"100\" disabled=\"true\" formControlName=\"isPostToCalender\">\n                <mat-radio-button class=\"ml-24\" value=\"Yes\">Yes</mat-radio-button>\n                <mat-radio-button class=\"ml-24\" value=\"No\">No</mat-radio-button>\n              </mat-radio-group>\n            </div>        \n          </div>        \n            <div fxLayout=\"row\" class=\"py-16\" *ngIf=\"attachmentDetails\">\n              <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"download()\">\n                <mat-icon class=\"mr-8\">attachment</mat-icon><span translate>Preview Attachment</span>\n              </button>\n            </div>          \n          <div fxLayout=\"row\" class=\"pt-12\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\">\n              <mat-label translate>Event Description</mat-label>\n              <textarea formControlName=\"eventDescription\" matInput required readonly></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div fxLayout=\"column\" fxFlex.gt-sm=\"40\" fxFlex=\"100\" *ngIf=\"viewClassSection?.length\">\n          <mat-list class=\"pt-0 confirm-table border mt-16\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center start\">\n            <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"stickyx\"><strong translate>Class</strong>\n            </mat-list-item>\n            <mat-list-item fxLayout=\"column\" fxFlex=\"50\" class=\"stickyx\"><strong translate>Section</strong>\n            </mat-list-item>\n            <div *ngFor=\"let classSection of viewClassSection\" fxLayout=\"row\" fxFlex=\"100\" class=\"border-top\">\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\">{{classSection.className}}</mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\">{{classSection.sectionName}}</mat-list-item>\n            </div>\n          </mat-list>\n        </div>\n      </form>\n    </div>\n  </div>\n  <ng-template #eventsActions>\n    <form [formGroup]=\"winnerPositionForm\" (ngSubmit)=\"onClickArray(winnerPositionForm, winnerPositionForm.value.positionId)\" #winnerForm=\"ngForm\">\n      <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n        <mat-form-field class=\"pr-20 pl-4 mw-200\">\n          <mat-label #sectionId translate>Winner Type</mat-label>\n          <mat-select placeholder=\"Winner Type\" formControlName=\"positionId\" required>\n            <mat-option *ngFor=\"let positionDetail of positionDetails\" [value]=\"positionDetail.value\">\n              {{ positionDetail.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='sectionId.innerText'\n              [validationControl]=\"winnerPositionForm.controls.positionId\" [doValidate]=\"winnerValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\">\n          <button type=\"submit\" mat-raised-button class=\"text-uppercase mr-8\" translate color=\"accent\"\n            [disabled]=\"!winnerPositionForm.value.positionId\">\n            {{'Apply' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n  <ng-template #eventsFinalistActions>\n    <form [formGroup]=\"winnerPositionForm\" (ngSubmit)=\"onClickArray(winnerPositionForm,winnerPositionForm.value.positionFinalistId)\" #winnerForm=\"ngForm\">\n      <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n        <mat-form-field class=\"pr-20 pl-4 mw-200\">\n          <mat-label #sectionId translate>Winner Type</mat-label>\n          <mat-select formControlName=\"positionFinalistId\" placeholder=\"Winner Type\" required>\n            <mat-option *ngFor=\"let positionDetail of positionFinalistDetails\" [value]=\"positionDetail.value\">\n              {{ positionDetail.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='sectionId.innerText'\n              [validationControl]=\"winnerPositionForm.controls.positionFinalistId\" [doValidate]=\"winnerValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\">\n          <button type=\"submit\" mat-raised-button class=\"text-uppercase mr-8\" translate color=\"accent\"\n            [disabled]=\"!winnerPositionForm.value.positionFinalistId\">\n            {{'Apply' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n  <ng-template #eventsWinnerActions>\n    <form [formGroup]=\"winnerPositionForm\" (ngSubmit)=\"onClickArray(winnerPositionForm, winnerPositionForm.value.positionWinnerId)\"\n      #winnerForm=\"ngForm\">\n      <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n        <mat-form-field class=\"pr-20 pl-4 mw-200\">\n          <mat-label #sectionId translate>Winner Type</mat-label>\n          <mat-select formControlName=\"positionWinnerId\" placeholder=\"Winner Type\" required>\n            <mat-option *ngFor=\"let positionDetail of positionWinnerDetails\" [value]=\"positionDetail.value\">\n              {{ positionDetail.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='sectionId.innerText'\n              [validationControl]=\"winnerPositionForm.controls.positionWinnerId\" [doValidate]=\"winnerValidate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\">\n          <button type=\"submit\" mat-raised-button class=\"text-uppercase mr-8\" translate color=\"accent\"\n            [disabled]=\"!winnerPositionForm.value.positionWinnerId\">\n            {{'Apply' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n  <mat-accordion multi class=\"tabs-table-padding0\" *ngIf=\"addEventId !== undefined && isCompetation\">\n    <mat-expansion-panel *ngIf=\"isPanel\" class=\"mb-12\">\n      <mat-expansion-panel-header>\n        <mat-panel-title translate class=\"text-uppercase\">Student List</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-table [massActionTemplateRef]=\"eventsActions\" [settings]=\"tableSettings\"\n        (selectedRows)='selectedRows($event)' (getTableData)='participantStudentDetails($event)'>\n      </app-table>\n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" class=\"mb-12\">\n      <mat-expansion-panel-header>\n        <mat-panel-title translate class=\"text-uppercase\">List Of Participants</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-table [massActionTemplateRef]=\"eventsFinalistActions\" [settings]=\"participantTabSetting\"\n        (selectedRows)='selectedRows($event)' (deleteAllRows)='deleteAll()'>\n      </app-table>\n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" class=\"mb-12\">\n      <mat-expansion-panel-header>\n        <mat-panel-title translate class=\"text-uppercase\">List Of Finalist</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-table [massActionTemplateRef]=\"eventsWinnerActions\" [settings]=\"finalistTableSettings\"\n        (selectedRows)='selectedRows($event)' (deleteAllRows)='deleteFinalist()'>\n      </app-table>\n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" class=\"mb-12\">\n      <mat-expansion-panel-header>\n        <mat-panel-title translate class=\"text-uppercase\">List Of Winners</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-table [settings]=\"winnerTabSetting\" (selectedRows)='selectedRows($event)' (deleteAllRows)='deleteWinner()'>\n      </app-table>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n<!-- Coustom Dialog for winning Position-->\n<ng-template #winnerPositionTemplate>\n  <mat-table [dataSource]=\"selectedStudentIds\" class=\"mh-300\">\n    <ng-container matColumnDef=\"studentName\">\n      <mat-header-cell *matHeaderCellDef class=\"px-4\">Student Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"px-4\"> {{element.studentName}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"className\">\n      <mat-header-cell *matHeaderCellDef class=\"px-4\"> Class Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"px-4\"> {{element.className}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"sectionName\">\n      <mat-header-cell *matHeaderCellDef class=\"px-4\"> Section Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"px-4\"> {{element.sectionName}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"admissionNumber\">\n      <mat-header-cell *matHeaderCellDef class=\"px-4\"> Admission Number </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"px-4\"> {{element.admissionNumber}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef class=\"px-4\"> Winning Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"px-4\">\n        <mat-form-field fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"input-padding0\">\n          <mat-label>Position</mat-label>\n          <mat-select (selectionChange)=\"element.winningPosition=($event.value)\">\n            <mat-option *ngFor=\"let winninPosition of winninPositions\" [value]=\"winninPosition.value\">\n              {{winninPosition.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"pt-16\">\n    <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" matDialogClose (click)=\"cancelClick()\"\n      translate>{{'Cancel' | translate}}</button>\n    <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"winningPositionClick()\"\n      translate>{{'Submit' | translate}}</button>\n  </div>\n</ng-template>\n<!-- End Coustom Dialog  -->"

/***/ }),

/***/ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table, .mh-300 {\n  overflow-y: auto;\n  max-height: 280px; }\n\n.mw-200 {\n  min-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2V2ZW50cy9hZGQtZWRpdC1zY2hvb2wtZXZlbnQvYWRkLWVkaXQtc2Nob29sLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUNKLEVBQUE7O0FBQ0E7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNhZGVtaWNzL2V2ZW50cy9hZGQtZWRpdC1zY2hvb2wtZXZlbnQvYWRkLWVkaXQtc2Nob29sLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tdGFibGUsIC5taC0zMDB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAyODBweFxufVxuLm13LTIwMHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddEditSchoolEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSchoolEventComponent", function() { return AddEditSchoolEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/events.service */ "./src/app/service/academic-service/api/events.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/staff/calender.service */ "./src/app/service/staff/calender.service.ts");



















var AddEditSchoolEventComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddEditSchoolEventComponent, _super);
    function AddEditSchoolEventComponent(gradeSetupService, classTimetableService, router, route, dialog, commonService, common, eventsService, cd, sanitizer, _fb, storeService, schoolAcademicSessionService, snackBar, location, calenderService) {
        var _this = _super.call(this) || this;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.router = router;
        _this.route = route;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.common = common;
        _this.eventsService = eventsService;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this._fb = _fb;
        _this.storeService = storeService;
        _this.schoolAcademicSessionService = schoolAcademicSessionService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.calenderService = calenderService;
        _this.currentComponent = 'AddEditSchoolEventComponent';
        _this.displayedColumns = ['studentName', 'className', 'sectionName', 'admissionNumber', 'position'];
        _this.eventTypesList = [];
        _this.eventstatusList = [];
        _this.positionDetails = [];
        _this.classSection = [];
        _this.selectedClass = [];
        _this.classSections = [];
        _this.winnerVal = '';
        _this.isUpdateOrView = false;
        _this.doValidate = false;
        _this.disableParticipant = true;
        _this.winnerValidate = true;
        _this.eventTypeName = '';
        _this.eventTypeStatus = '';
        _this.loadData = Promise.resolve(false);
        _this.selectedItems = [];
        _this.isValueIsObject = true;
        _this.isCompetation = false;
        _this.hideFromToDate = true;
        return _this;
    }
    AddEditSchoolEventComponent.prototype.ngOnInit = function () {
        this.isValueIsObject = true;
        this.eventTitle = 'New Event';
        this.getClassSections();
        this.isPanel = true;
        this.editDetails = true;
        this.eventParticipantView = {
            studentId: '',
            eventId: '',
            classId: 0,
            sectionId: 0,
            isFinalist: 0,
            isWinner: 0,
            winningPosition: 0,
        };
        this.eventParticipantFilterView = {
            eventId: '',
            admissionNumber: '',
            studentName: '',
            classIds: [],
            sectionIds: [],
            studentGroupIds: [],
            sortBy: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].ID,
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
        };
        this.selectedClass = [];
        this.positionDetails = [
            { value: 1, label: 'Select as a Participant' },
            { value: 2, label: 'Select as a Finalist' },
            { value: 3, label: 'Select as a Winner' }
        ];
        this.positionFinalistDetails = [
            { value: 2, label: 'Select as a Finalist' },
            { value: 3, label: 'Select as a Winner' }
        ];
        this.positionWinnerDetails = [
            { value: 3, label: 'Select as a Winner' }
        ];
        this.winninPositions = [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
        ];
        this.updateButtonShow = false;
        this.columns = [
            { field: 'studentName', header: 'Student Name', sort: false },
            { field: 'admissionNumber', header: 'Admission Number', sort: false },
            { field: 'groupName', header: 'Student Group', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionName', header: 'Section', sort: false }
        ];
        this.winnerColumns = [
            { field: 'studentName', header: 'Student Name', sort: false },
            { field: 'admissionNumber', header: 'Admission Number', sort: false },
            { field: 'groupName', header: 'Student Group', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionName', header: 'Section', sort: false },
            { field: 'winningPosition', header: 'Winning Position', sort: false }
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.eventParticipantFilterView = modelTableComponent;
        }
        this.tabsettingsIntialization();
        this.initializeForm();
        this.eventstatusList = [];
        this.eventTypesList = [];
        this.selectedSection = [];
        this.eventTypes();
        this.eventStatus();
        this.uploadFiles = this._fb.group({
            studentFileNameWithExtension: [''],
            studentFileValue: [''],
        });
        this.formData = {
            eventid: null,
            announcedDate: new Date(),
            fromDate: new Date(),
            toDate: new Date(),
            eventTypeId: 0,
            statusId: 0,
            eventDescription: '',
            eventClassSections: [],
            attachment: this.attachmentInfo
        };
        this.winnerPositionForm.reset();
        this.routeParamsData();
        this.academicPrevAndAfterDates();
    };
    // get Academic Start Date and End Date with prev and after 3 months
    AddEditSchoolEventComponent.prototype.academicPrevAndAfterDates = function () {
        var _this = this;
        this.calenderService.getAllSchoolCalender().subscribe(function (res) {
            _this.startDate = res.academicDatesView.startDate;
            _this.endDate = res.academicDatesView.endDate;
        });
    };
    AddEditSchoolEventComponent.prototype.tabsettingsIntialization = function () {
        this.tableSettings = {
            model: this.eventParticipantFilterView,
            rows: [],
            columns: this.columns,
            componentName: this.currentComponent,
            padding: true
        };
        this.finalistTableSettings = {
            model: this.eventForm,
            rows: [],
            columns: this.columns,
            componentName: this.currentComponent,
            padding: true
        };
        this.participantTabSetting = {
            model: this.eventForm,
            rows: [],
            columns: this.columns,
            componentName: this.currentComponent,
            padding: true
        };
        this.winnerTabSetting = {
            model: this.eventForm,
            rows: [],
            columns: this.winnerColumns,
            componentName: this.currentComponent,
            padding: true
        };
    };
    AddEditSchoolEventComponent.prototype.initializeForm = function () {
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            eventId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            announcedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            isPostToCalender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO),
            eventTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            eventDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(180)]),
            eventClassSections: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            attachment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            isPostToCalendar: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
        this.winnerPositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            positionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            positionFinalistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            positionWinnerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
    };
    AddEditSchoolEventComponent.prototype.routeParamsData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param.id) {
                _this.addEventId = param.id;
                _this.operation = param.operation;
            }
        });
        if (this.addEventId) {
            if (this.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT || this.operation === undefined) {
                this.eventTitle = 'Update Event';
                this.isPanel = true;
                this.viewDetails = false;
                this.editDetails = true;
                this.participantStudentDetails(this.eventParticipantFilterView);
                this.getEventDetails();
            }
            else {
                this.eventTitle = 'Event Details';
                this.isPanel = false;
                this.viewDetails = true;
                this.editDetails = false;
                this.getEventDetails();
            }
        }
    };
    AddEditSchoolEventComponent.prototype.getEventDetails = function () {
        var _this = this;
        this.eventsService.getByEvents(this.addEventId).subscribe(function (res) {
            if (res.eventData != null) {
                _this.updateButtonShow = true;
                _this.disableParticipant = false;
                _this.eventDetails = res.eventData[0];
                _this.eventForm.patchValue(_this.eventDetails);
                _this.onEventTypeSelect(_this.eventForm.value.eventTypeId);
                _this.eventForm.controls['isPostToCalender'].setValue(_this.eventDetails.isPostToCalender === 1 ? app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES : app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO);
                _this.finalistDetails = _this.eventDetails.finalistDetails;
                _this.participantDetails = _this.eventDetails.participantDetails;
                _this.winnersDetails = _this.eventDetails.winnersDetails;
                _this.classSection = _this.eventDetails.eventClassSections;
                _this.viewClassSection = _this.eventDetails.eventClassSections;
                _this.assignEventTypesStatus();
                if (_this.viewClassSection.length) {
                    _this.fxFlexSize = '60';
                }
                else {
                    _this.fxFlexSize = '100';
                }
                _this.attachmentDetails = _this.eventDetails.attachment.fileName;
                if (_this.eventDetails.attachment && _this.eventDetails.attachment.fileName) {
                    _this.nameImgProp = _this.storeService.getFilePath(_this.attachmentDetails);
                    _this.isUpdateOrView = true;
                    var that_1 = _this;
                    that_1.flagImageProp = {
                        src: that_1.sanitizer.bypassSecurityTrustResourceUrl(_this.storeService.getFilePath(_this.attachmentDetails))
                    };
                    _this.storeService.storeFileEncryptByFileNameGet(_this.attachmentDetails)
                        .subscribe(function (data) {
                        if (data) {
                            that_1.eventForm.controls.attachment.patchValue({ fileName: data.fileNameWithExtension, fileValue: data.value });
                        }
                    });
                    that_1.cd.detectChanges();
                }
                else {
                    _this.isUpdateOrView = false;
                }
                var selectedSections = _this.eventForm.controls['eventClassSections'].value || [];
                if (_this.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW_EVENTS) {
                    _this.finalistTableSettings = _this.tabSettings(_this.finalistDetails, _this.columns, false, false, true);
                    _this.winnerTabSetting = _this.tabSettings(_this.winnersDetails, _this.winnerColumns, false, false, true);
                    _this.participantTabSetting = _this.tabSettings(_this.participantDetails, _this.columns, false, false, true);
                }
                else {
                    _this.selectedItems = [];
                    _this.classSection.forEach(function (e) {
                        _this.selectedItems.push({ label: e.sectionName, value: { classId: e.classId, sectionId: e.sectionId }, isValueObject: true, });
                    });
                    _this.onSelectSection(_this.selectedItems);
                    _this.finalistTableSettings = _this.tabSettings(_this.finalistDetails, _this.columns, true, true, true);
                    _this.winnerTabSetting = _this.tabSettings(_this.winnersDetails, _this.winnerColumns, true, true, true);
                    _this.participantTabSetting = _this.tabSettings(_this.participantDetails, _this.columns, true, true, true);
                }
                // this.onEventTypeSelect(this.eventForm.value.eventTypeId);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.tabSettings = function (rows, columns, isSelectRowRequired, visibleSelectAll, padding) {
        return {
            model: this.eventForm,
            rows: rows,
            columns: columns,
            componentName: this.currentComponent,
            isPaginationRequired: false,
            isSelectRowRequired: isSelectRowRequired,
            visibleSelectAll: visibleSelectAll,
            padding: padding
        };
    };
    AddEditSchoolEventComponent.prototype.assignEventTypesStatus = function () {
        var _this = this;
        if (this.eventDetails !== undefined &&
            this.eventDetails.eventTypeId != null && this.eventTypesList.filter(function (obj) { return obj.value === _this.eventDetails.eventTypeId; })[0] !== undefined) {
            this.eventTypeName = this.eventTypesList.filter(function (obj) { return obj.value === _this.eventDetails.eventTypeId; })[0].label;
        }
        if (this.eventDetails !== undefined && this.eventDetails.statusId != null && this.eventstatusList.filter(function (obj) { return obj.value === _this.eventDetails.statusId; })[0] !== undefined) {
            this.eventTypeStatus = this.eventstatusList.filter(function (obj) { return obj.value === _this.eventDetails.statusId; })[0].label;
        }
    };
    // get Classes
    AddEditSchoolEventComponent.prototype.getClassSections = function () {
        var _this = this;
        this.schoolAcademicSessionService.academicClassSections().subscribe(function (response) {
            _this.classResponse(response);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.classResponse = function (data) {
        var _this = this;
        this.test = data.classSectionsDataView;
        this.test.forEach(function (classdata) {
            var classObj = [];
            classObj['name'] = classdata.className;
            classObj['items'] = [];
            classdata.sectionViewModel.forEach(function (section) {
                classObj['items'].push({
                    label: section.name,
                    value: { classId: classdata.classId, sectionId: section.id }
                });
            });
            _this.classSections.push(classObj);
        });
        this.loadData = Promise.resolve(true);
    };
    // End
    AddEditSchoolEventComponent.prototype.eventTypes = function () {
        var _this = this;
        this.eventsService.getEventsTypes().subscribe(function (response) {
            if (response.commonViewModel != null) {
                if (response.commonViewModel.length) {
                    response.commonViewModel.forEach(function (element) {
                        _this.eventTypesList.push({
                            label: element.name,
                            value: element.id,
                            isCompitation: element.code
                        });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.eventStatus = function () {
        var _this = this;
        this.eventsService.getEventStatus().subscribe(function (response) {
            if (response.commonViewModel != null) {
                if (response.commonViewModel.length) {
                    response.commonViewModel.forEach(function (element) {
                        _this.eventstatusList.push({
                            label: element.name,
                            value: element.id,
                            code: element.code
                        });
                    });
                    _this.assignEventTypesStatus();
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.return = function () {
        this.location.back();
        // this.router.navigate([RouteConfig._Schol_Events]);
        this.eventForm.reset();
        if (this.eventDataForm !== undefined) {
            this.eventDataForm.resetForm();
        }
    };
    AddEditSchoolEventComponent.prototype.onSelectSection = function (data) {
        var _this = this;
        this.selectedSection = [];
        if (data !== undefined) {
            data.forEach(function (element) {
                _this.selectedSection.push(element.value);
            });
        }
    };
    AddEditSchoolEventComponent.prototype.onSubmit = function (eventForm, updateButton) {
        var _this = this;
        this.doValidate = true;
        this.statusId = this.eventForm.controls.statusId.value;
        this.eventType = this.eventTypesList.find(function (x) { return x.value === _this.eventForm.controls.eventTypeId.value; });
        if (this.eventType.label === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NEWS || this.eventType.isCompitation === '0') {
            this.eventForm.controls['fromDate'].clearValidators();
            this.eventForm.controls['toDate'].clearValidators();
            this.eventForm.updateValueAndValidity();
            this.eventForm.controls['fromDate'].setValue(this.eventForm.controls['announcedDate'].value);
            this.eventForm.controls['toDate'].setValue(this.eventForm.controls['announcedDate'].value);
            this.eventForm.controls['statusId'].setValue(this.eventstatusList.find(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EVENT_CMP_CODE; }).value);
            this.statusId = this.eventstatusList.find(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EVENT_CMP_CODE; }).value;
        }
        if (this.eventForm.invalid) {
            return;
        }
        else {
            this.eventForm.controls['eventClassSections'].patchValue(this.selectedSection);
            this.formData = this.eventForm.value;
            this.formData.isPostToCalender = this.eventForm.value.isPostToCalender === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES ? 1 : 0;
            this.formData.announcedDate = this.getFormattedDateByAPIPattern(this.formData.announcedDate);
            this.formData.fromDate = this.getFormattedDateByAPIPattern(this.formData.fromDate);
            this.formData.toDate = this.getFormattedDateByAPIPattern(this.formData.toDate);
            this.formData.attachment = (this.formData.attachment == null || this.formData.attachment.fileValue != null) ? this.formData.attachment : null;
            if (this.eventForm.value.eventId === '') {
                this.eventsService.createEvents(this.formData).subscribe(function (eventRes) {
                    _this.eventResponse(eventRes);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else {
                this.eventsService.updateEvents(this.formData).subscribe(function (eventRes) {
                    _this.eventResponse(eventRes);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        }
    };
    // add response
    AddEditSchoolEventComponent.prototype.eventResponse = function (data) {
        this.addEventId = data.eventId;
        if (data.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
            this.statusChanges(this.statusId, this.eventType);
            this.updateButtonShow = true;
            this.dialog.closeAll();
            this.getEventDetails();
            this.participantStudentDetails(this.eventParticipantFilterView);
            this.onEventTypeSelect(this.eventType.value);
        }
        this.openSnackBar(data.messages.ResultMessage);
    };
    AddEditSchoolEventComponent.prototype.participantStudentDetails = function (eventParticipantFilterView) {
        var _this = this;
        this.eventParticipantFilterView = eventParticipantFilterView;
        this.eventParticipantFilterView.eventId = this.addEventId;
        this.eventsService.getStudentsDetails(this.eventParticipantFilterView.eventId, this.eventParticipantFilterView.admissionNumber, this.eventParticipantFilterView.studentName, this.eventParticipantFilterView.classIds, this.eventParticipantFilterView.sectionIds, this.eventParticipantFilterView.studentGroupIds, this.eventParticipantFilterView.sortOrder, this.eventParticipantFilterView.sortBy, this.eventParticipantFilterView.pageNumber, this.eventParticipantFilterView.pageSize).subscribe(function (res) {
            if (res.studentDetails != null) {
                _this.studentDetails = res.studentDetails.list;
                _this.totalItems = res.studentDetails.totalItems;
                _this.pageCount = res.studentDetails.totalPages;
            }
            else {
                _this.studentDetails = [];
                _this.totalItems = 0;
                _this.pageCount = 0;
            }
            _this.tableSettings = {
                model: _this.eventParticipantFilterView,
                rows: _this.studentDetails,
                columns: _this.columns,
                componentName: _this.currentComponent,
                isPaginationRequired: true,
                isSelectRowRequired: true,
                isMultiDeleteRequired: false,
                visibleSelectAll: true,
                totalRowsCount: _this.totalItems,
                pageCnt: _this.pageCount,
                filtersList: res.filters,
                padding: true
            };
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.imgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        this.isUpdateOrView = false;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            that.eventForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: reader.result.split(',')[1] });
            that.cd.detectChanges();
        };
    };
    AddEditSchoolEventComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        this.flagImageProp = {};
        this.eventForm.controls.attachment.patchValue(null);
        this.cd.detectChanges();
    };
    AddEditSchoolEventComponent.prototype.selectedRows = function (data) {
        this.winnerVal = '';
        this.selectedStudentIds = data;
        this.winnerPositionForm.reset();
    };
    AddEditSchoolEventComponent.prototype.onClickArray = function (winnerPositionForm, val) {
        var _this = this;
        if (val === 2) {
            this.isFinalist = 1;
            this.selectedStudentIds.map(function (x) {
                x.isFinalist = 1;
            });
        }
        else if (val === 3) {
            this.isWinner = 1;
            this.isFinalist = 1;
            this.selectedStudentIds.map(function (x) {
                x.isFinalist = 1,
                    x.isWinner = 1;
            });
        }
        else {
            this.isWinner = null;
            this.isFinalist = null;
        }
        this.eventParticipantView = this.selectedStudentIds;
        this.eventParticipantView.map(function (e) { return e.eventId = _this.addEventId; });
        if (val === 3) {
            this.selectedStudentIds.map(function (x) { return x.winningPosition = null; });
            var dialogValue = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                data: { template: this.positionIdValue }
            });
            dialogValue.afterClosed().subscribe(function (action) {
                _this.cancelClick();
            });
            return false;
        }
        this.createParticipant(this.eventParticipantView);
    };
    AddEditSchoolEventComponent.prototype.createParticipant = function (eventParticipantView) {
        var _this = this;
        this.eventParticipantView = eventParticipantView;
        this.eventsService.createParticipants(this.eventParticipantView).subscribe(function (particantRes) {
            if (particantRes.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
                _this.winnerPositionForm.reset();
                if (_this.winnerForm !== undefined) {
                    _this.winnerForm.resetForm();
                }
                _this.participantStudentDetails(_this.eventParticipantFilterView);
                _this.participantsActions();
            }
            _this.cd.detectChanges();
            _this.openSnackBar(particantRes.messages.ResultMessage);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddEditSchoolEventComponent.prototype.deleteAll = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            width: '400px',
            disableClose: true,
            data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedparticipants'), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
        });
        // Conformation for Delete ClassPeriodType
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                _this.participantId = [];
                _this.selectedStudentIds.forEach(function (x) {
                    if (x) {
                        _this.participantId.push(x.id);
                    }
                });
                _this.eventsService.deleteParticipants(_this.participantId).subscribe(function (res) {
                    if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
                        _this.participantsActions();
                        _this.participantStudentDetails(_this.eventParticipantFilterView);
                    }
                    _this.openSnackBar(res.messages.ResultMessage);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    AddEditSchoolEventComponent.prototype.participantsActions = function () {
        var _this = this;
        this.eventsService.getByEvents(this.addEventId).subscribe(function (data) {
            if (data.eventData != null) {
                _this.onEventTypeSelect(_this.eventForm.value.eventTypeId);
                _this.finalistDetails = data.eventData[0].finalistDetails;
                _this.participantDetails = data.eventData[0].participantDetails;
                _this.winnersDetails = data.eventData[0].winnersDetails;
                _this.finalistTableSettings = _this.tabSettings(_this.finalistDetails, _this.columns, true, true, true);
                _this.winnerTabSetting = _this.tabSettings(_this.winnersDetails, _this.winnerColumns, true, true, true);
                _this.participantTabSetting = _this.tabSettings(_this.participantDetails, _this.columns, true, true, true);
            }
        });
    };
    AddEditSchoolEventComponent.prototype.deleteFinalist = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            width: '400px',
            disableClose: true,
            data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedfinalists'), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
        });
        // Conformation for Delete ClassPeriodType
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                _this.eventParticipantView = _this.selectedStudentIds;
                _this.eventParticipantView.forEach(function (x) {
                    if (x) {
                        x.eventId = _this.addEventId;
                        x.isFinalist = null;
                    }
                });
                _this.createParticipant(_this.eventParticipantView);
            }
        });
    };
    AddEditSchoolEventComponent.prototype.deleteWinner = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            width: '400px',
            disableClose: true,
            data: { text: this.commonService.getTranslation('PleaseconfirmtodeletetheSelectedWinner'), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
        });
        // Conformation for Delete ClassPeriodType
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                _this.eventParticipantView = _this.selectedStudentIds;
                _this.eventParticipantView.forEach(function (x) {
                    if (x) {
                        x.eventId = _this.addEventId;
                        x.isWinner = null;
                        x.winningPosition = null;
                    }
                });
                _this.createParticipant(_this.eventParticipantView);
            }
        });
    };
    AddEditSchoolEventComponent.prototype.winningPositionClick = function (data) {
        var _this = this;
        this.dialog.closeAll();
        this.eventParticipantView = this.selectedStudentIds;
        this.eventParticipantView.forEach(function (x) {
            if (x) {
                x.eventId = _this.addEventId;
            }
        });
        this.createParticipant(this.eventParticipantView);
    };
    AddEditSchoolEventComponent.prototype.download = function () {
        if (this.attachmentDetails !== null) {
            window.open(this.nameImgProp);
        }
    };
    AddEditSchoolEventComponent.prototype.onEventTypeSelect = function (type) {
        var eventType = this.eventTypesList.find(function (x) { return x.value === type; });
        if (eventType !== undefined) {
            this.isCompetation = eventType.isCompitation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].ISSTUDENT ? true : false;
            if (this.isCompetation === false) {
                this.hideFromToDate = true;
            }
            else {
                this.hideFromToDate = false;
            }
        }
    };
    AddEditSchoolEventComponent.prototype.statusChanges = function (value, eventType) {
        var statusType = this.eventstatusList.find(function (x) { return x.value === value; });
        if (statusType !== undefined && eventType !== undefined &&
            ((this.eventType.label === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NEWS || this.eventType.isCompitation === '0')) || (statusType.code === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EVE_CAN)) {
            this.return();
        }
    };
    AddEditSchoolEventComponent.prototype.cancelClick = function () {
        this.isWinner = null;
        this.isFinalist = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddEditSchoolEventComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('winnerPositionTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AddEditSchoolEventComponent.prototype, "positionIdValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventDataForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditSchoolEventComponent.prototype, "eventDataForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('winnerForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditSchoolEventComponent.prototype, "winnerForm", void 0);
    AddEditSchoolEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-school-event',
            template: __webpack_require__(/*! ./add-edit-school-event.component.html */ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.html"),
            providers: [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__["ClassTimetableService"], app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__["SchoolAcademicSessionService"], app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_18__["CalenderService"]],
            styles: [__webpack_require__(/*! ./add-edit-school-event.component.scss */ "./src/app/modules/academics/events/add-edit-school-event/add-edit-school-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_2__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_3__["ClassTimetableService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"], app_service_academic_service_api_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_14__["StoreService"],
            app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__["SchoolAcademicSessionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], app_service_staff_calender_service__WEBPACK_IMPORTED_MODULE_18__["CalenderService"]])
    ], AddEditSchoolEventComponent);
    return AddEditSchoolEventComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/academic-service/api/events.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/academic-service/api/events.service.ts ***!
  \****************************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/grading-service */ "./src/app/service/grading-service/index.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
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







var EventsService = /** @class */ (function () {
    function EventsService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Base;
        // protected basePath = 'http://localhost:8013';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    EventsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    EventsService.prototype.createEvents = function (eventView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Create_Events, eventView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.getEventStatus = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Event_Statuses, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.getEventsTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Event_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get All Events
     *
     * @param announcedDateBegin Gets or sets of EndDateBegin
     * @param announcedDateEnd Gets or sets of EndDateEnd
     * @param fromDateBegin Gets or sets of OnlineApplicationStartDateBegin
     * @param fromDateEnd Gets or sets of OnlineApplicationStartDateEnd
     * @param toDateBegin Gets or sets of OnlineApplicationEndDateBegin
     * @param toDateEnd Gets or sets of OnlineApplicationEndDateEnd
     * @param eventDescription Gets or Sets ClassName
     * @param classIds Gets or Sets ClassName
     * @param sectionIds Gets or Sets ClassName
     * @param statusIds Gets or Sets Status
     * @param eventTypes Gets or Sets eventTypes
     * @param sortOrder Gets or Sets SortOrder
     * @param sortBy Gets or Sets SortBy
     * @param pageNumber
     * @param pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    EventsService.prototype.getEvents = function (announcedDateBegin, announcedDateEnd, fromDateBegin, fromDateEnd, toDateBegin, toDateEnd, eventDescription, classIds, sectionIds, statusIds, eventTypes, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(announcedDateBegin, 'AnnouncedDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(announcedDateEnd, 'AnnouncedDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(fromDateBegin, 'FromDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(fromDateEnd, 'FromDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(toDateBegin, 'ToDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(toDateEnd, 'ToDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(eventDescription, 'EventDescription', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(eventTypes, 'eventTypeIds', queryParameters);
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
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Get_All_Events, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.getByEvents = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByEvents.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Event_Details, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
  * Get Students
  *
  * @param eventId Gets or Sets EventId
  * @param admissionNumber Gets or Sets AdmissionNumber
  * @param studentName Gets or Sets StudentName
  * @param classIds Gets or Sets ClassIds
  * @param sectionIds Gets or Sets SectionIds
  * @param studentGroupIds Gets or Sets StudentGroupIds
  * @param sortOrder Gets or Sets SortOrder
  * @param sortBy Gets or Sets SortBy
  * @param pageNumber
  * @param pageSize
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    EventsService.prototype.getStudentsDetails = function (eventId, admissionNumber, studentName, classIds, sectionIds, studentGroupIds, sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (eventId !== undefined && eventId !== null) {
            queryParameters = queryParameters.set('EventId', eventId);
        }
        if (admissionNumber !== undefined && admissionNumber !== null) {
            queryParameters = queryParameters.set('AdmissionNumber', admissionNumber);
        }
        if (studentName !== undefined && studentName !== null) {
            queryParameters = queryParameters.set('StudentName', studentName);
        }
        if (classIds) {
            classIds.forEach(function (element) {
                queryParameters = queryParameters.append('ClassIds', element);
            });
        }
        if (sectionIds) {
            sectionIds.forEach(function (element) {
                queryParameters = queryParameters.append('SectionIds', element);
            });
        }
        if (studentGroupIds) {
            studentGroupIds.forEach(function (element) {
                queryParameters = queryParameters.append('StudentGroupIds', element);
            });
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', pageSize);
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
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Get_Students, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.updateEvents = function (eventDataView, observe, reportProgress) {
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
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Update_Event, eventDataView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.createParticipants = function (eventParticipantView, observe, reportProgress) {
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
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Create_Participants, eventParticipantView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService.prototype.deleteParticipants = function (ids, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteParticipants.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (ids) {
            ids.forEach(function (element) {
                queryParameters = queryParameters.append('Ids', element);
            });
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
        return this.httpClient.delete("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseModuleConfig"]._Events_Delete_Participants, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Get Event By Id
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    EventsService.prototype.getAwards = function (announcedDate, description, pageNumber, pageSize, observe, reportProgress) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_4__["CustomHttpUrlEncodingCodec"]() });
        if (announcedDate !== undefined && announcedDate !== null) {
            queryParameters = queryParameters.set('AnnouncedDate', announcedDate.toISOString());
        }
        if (description !== undefined && description !== null) {
            queryParameters = queryParameters.set('Description', description);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', pageSize);
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
        return this.httpClient.get(this.basePath + "/Events/student-awards", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_grading_service__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
            app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]])
    ], EventsService);
    return EventsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-academics-events-events-module~app-modules-staff-staff-module~app-modules-studen~d75228cd.js.map