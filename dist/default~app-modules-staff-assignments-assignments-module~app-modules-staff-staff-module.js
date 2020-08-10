(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-staff-assignments-assignments-module~app-modules-staff-staff-module"],{

/***/ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]='closeForm' [templateRef]=\"newHomework\"\n  (getTableData)='tableData($event)' (rowBasedAction)='actions($event)' (openAddForm)='openForm()' [matExpansioncustomClass]=\"true\"\n  (selectedRows)='selectedRows($event)' [rowTemplateRef]=\"testInfoTemplate\">\n</app-table>\n<ng-template #newHomework>\n  <mat-vertical-stepper *ngIf=\"!onView\" [linear]=\"true\" #stepper\n    (selectionChange)=\"onSelectionChange($event)\">\n    <mat-step [stepControl]=\"classSectionForm\">\n        <form fxLayout=\"column\" [formGroup]=\"classSectionForm\" class=\"pr-16\">\n          <ng-template matStepLabel><span translate>Class & Section</span></ng-template>\n          <div class=\"pt-24 font-size-18 pb-8\" translate>Please Select The Class and section That This Homework is Being Assigned To</div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n              fxFlex.gt-sm=\"50\">\n              <mat-label #board translate>Board</mat-label>\n              <mat-select formControlName=\"boardId\" (selectionChange)=\"onSelectSchoolBoard($event.value)\" required>\n                <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n                  {{board.label}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='board.innerText' [validationControl]=\"classSectionForm.controls.boardId\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-24\">\n              <mat-label #classes translate>Class</mat-label>\n              <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass()\" required>\n                <mat-option *ngFor=\"let class of classesList\" [value]=\"class.value\">\n                  {{class.label}}</mat-option>\n              </mat-select>\n              <mat-error>\n                <app-validation [labelName]='classes.innerText' [validationControl]=\"classSectionForm.controls.classId\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxLayout.lt-sm=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" class=\"pt-sm-12\">\n              <af-select [required]=\"afterLoadItems\" (selectionChange)=\"onSelectChange($event)\" appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" [optionGroupRequired]=\"false\" [options]=\"items\"\n                       [showChips]=\"3\" placeholder=\"Sections\" [multiple]=\"true\"\n                        formControlName=\"sectionId\"  [value]=\"selectedItems\"\n            ></af-select>\n          </div>\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n            <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\" type=\"reset\"\n              class=\"text-uppercase mr-12\">\n              {{'Cancel' | translate}}\n            </button>\n            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n              {{'Next' | translate}}\n            </button>\n          </div>\n        </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"typeCourseForm\" [completed]=\"typeCourseForm.valid\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center start\" fxFlexFill>\n      <form fxLayout=\"column\" fxFlex.gt-sm=\"70\" [formGroup]=\"typeCourseForm\"  class=\"pr-16\">\n        <ng-template matStepLabel><span translate>Type & Course</span></ng-template>\n        <div class=\"pt-20 pb-8 font-size-18\"><span translate>Please Select The Type Of Homework And The Course</span></div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label #type translate>Type</mat-label>\n            <mat-select formControlName=\"typeId\" required>\n              <mat-option *ngFor=\"let type of typesList\" [value]=\"type.id\">\n                {{type.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='type.innerText' [validationControl]=\"typeCourseForm.controls.typeId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label #course translate>Course</mat-label>\n            <mat-select formControlName=\"courseId\" required>\n              <mat-option *ngFor=\"let course of coursesList\" [value]=\"course.value\">\n                {{course.label}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='course.innerText' [validationControl]=\"typeCourseForm.controls.courseId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n      <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 1}\"></ng-template>\n      </div>\n    </mat-step>\n\n    <mat-step [stepControl]=\"detailsForm\">\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center start\" fxFlexFill>\n      <form fxLayout=\"column\" [formGroup]=\"detailsForm\" fxFlex.gt-sm=\"70\" class=\"pr-16\">\n        <ng-template matStepLabel><span translate>Details</span></ng-template>\n        <div class=\"pt-24 font-size-18\"><span translate>Please Enter Name and Description Of The Homework if\n            Any</span></div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #homeworkName>Name</mat-label>\n            <input (keyup)=\"preventSpace($event,'detailsForm','homeworkName')\" (blur)=\"trimTextBoxSpaces('detailsForm','homeworkName')\" formControlName=\"homeworkName\"\n              matInput required>\n            <mat-error>\n              <app-validation [labelName]='homeworkName.innerText' [validationControl]=\"detailsForm.controls.homeworkName\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"pl-sm-24 pt-8\">\n            <div fxLayout=\"row\">\n              <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"attachment.value=''; attachment.click()\">\n                <mat-icon class=\"mr-8\">attachment</mat-icon>{{'Upload Attachment' | translate}}\n              </button>\n              <button *ngIf=\"detailsForm.value.file?.fileNameWithExtension\" (click)=\"attachment.value='';attachmentUrl=null;clearImages()\" mat-icon-button type=\"button\">\n                <mat-icon class=\"mb-4 grey-600-fg\">highlight_off</mat-icon>\n              </button>\n              <input  (change)=\"imgChanged(attachment.files)\" [accept]=\"AcceptImagesApplicationType\" fxHide type=\"file\"\n                #attachment>\n            </div>\n            <a *ngIf=\"updateId && attachmentUrl;else image_name\" [href]=\"attachmentUrl\" target=\"_blank\" >View Attachment</a>\n            <ng-template #image_name>\n              <div fxLayout=\"row\" class=\"break-word\">{{detailsForm.value?.file?.fileNameWithExtension}}</div>\n            </ng-template>\n          </div>\n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\">\n            <mat-label translate #homeworkDescriptionn>Description</mat-label>\n            <textarea (keypress)=\"preventSpace($event,'detailsForm','homeworkDescription')\" (blur)=\"trimTextBoxSpaces('detailsForm','homeworkDescription')\"\n              formControlName=\"homeworkDescription\" matInput></textarea>\n            <mat-error>\n              <app-validation [labelName]='homeworkDescriptionn.innerText' [validationControl]=\"detailsForm.controls.homeworkDescription\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-sm-12\">\n          <div class=\"mb-12 pl-4\" #isPostToCalendarText translate>Do You Want To Post This Home work Information To The\n            Student Calendar ?</div>\n          <mat-radio-group fxLayout=\"row\" fxFlex=\"100\" required formControlName=\"isPostToCalendar\">\n            <mat-radio-button class=\"ml-24\" [value]=\"true\">Yes</mat-radio-button>\n            <mat-radio-button class=\"ml-24\" [value]=\"false\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n            <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n              {{'Previous' | translate}}\n            </button>\n            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n              {{'Next' | translate}}\n            </button>\n        </div>\n      </form>\n      <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 2}\"></ng-template>\n    </div>\n    </mat-step>\n\n    <mat-step [stepControl]=\"dateForm\">\n     <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center start\" fxFlexFill>\n      <form fxFlex.gt-sm=\"70\" class=\"pr-16\" fxLayout=\"column\" [formGroup]=\"dateForm\">\n        <ng-template matStepLabel><span translate>Dates</span></ng-template>\n        <div class=\"pt-20 pb-8 font-size-18\"><span translate>Please Select The Dates Pertaining This Homework</span></div>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"icon-center\">\n            <mat-label #issueDatee translate>Issue Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('issueDate',dateForm)\" [matDatepicker]=\"issueDate\"\n            [min]=\"academicSession?.startDate\"\n            [max]=\"academicSession?.endDate\"\n              formControlName=\"issueDate\"  required>\n            <mat-datepicker-toggle matSuffix [for]=\"issueDate\"></mat-datepicker-toggle>\n            <mat-datepicker #issueDate></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='issueDatee.innerText' [validationControl]=\"dateForm.controls.issueDate\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24 icon-center\">\n            <mat-label #endDatee translate>Due Date</mat-label>\n            <input  [min]=\"dateForm?.controls?.issueDate?.value\" matInput (keyup)=\"forceValidation('dueDate',dateForm)\" [matDatepicker]=\"endDate\" \n            [min]=\"academicSession?.startDate\"\n            [max]=\"academicSession?.endDate\"\n              formControlName=\"dueDate\" >\n            <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n            <mat-datepicker #endDate [startAt]=\"dateForm.value.issueDate\"></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='endDatee.innerText' [validationControl]=\"dateForm.controls.dueDate\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n      <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 3}\"></ng-template>\n      </div>\n    </mat-step>\n\n\n    <mat-step [stepControl]=\"testInformation\">\n     <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center start\" fxFlexFill>\n      <form fxLayout=\"column\" fxFlex.gt-sm=\"70\" class=\"pr-16\" [formGroup]=\"testInformation\" #testInfoForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Test information</span></ng-template>\n        <div fxLayout=\"column\" class=\"pt-24 pb-12\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <div class=\"mb-12 font-size-16\" translate>Will this Homework be Graded as a part of a Test ?</div>\n          <mat-radio-group (change)=\"onChnageGraded($event)\" fxLayout=\"row\" fxFlex=\"100\" formControlName=\"isGraded\">\n            <mat-radio-button class=\"ml-24\" [value]=\"true\">Yes</mat-radio-button>\n            <mat-radio-button class=\"ml-24\" [value]=\"false\">No</mat-radio-button>\n          </mat-radio-group> \n        </div>\n\n        <div *ngIf=\"testInformation.value.isGraded\" class=\"my-20\" translate>If Yes, Please select the Test Details to be associated with this homework</div>\n\n        <div *ngIf=\"testInformation.value.isGraded\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" >\n            <mat-label #board translate>Test Type</mat-label>\n            <mat-select  formControlName=\"testTypeId\"  [required]=\"testInformation.value.isGraded\">\n              <mat-option *ngFor=\"let testType of testTypesList\" [value]=\"testType.id\">\n                {{testType.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='board.innerText' [validationControl]=\"testInformation.controls.testTypeId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n            class=\"pl-sm-24\">\n            <mat-label #class translate>Grading Term</mat-label>\n            <mat-select formControlName=\"gradeTermId\"  [required]=\"testInformation.value.isGraded\">\n              <mat-option *ngFor=\"let gradeTerm of gradingTermsList\" [value]=\"gradeTerm.id\">\n                {{gradeTerm.name}}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='class.innerText' [validationControl]=\"testInformation.controls.gradeTermId\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div *ngIf=\"testInformation.value.isGraded\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <mat-label translate #marks>Marks</mat-label>\n            <input (keyup)=\"preventSpace($event,'testInformation','maxMarks')\" (blur)=\"trimTextBoxSpaces('testInformation','maxMarks')\"\n              formControlName=\"maxMarks\" matInput [required]=\"testInformation.value.isGraded\">\n            <mat-error>\n              <app-validation [labelName]='marks.innerText' [validationControl]=\"testInformation.controls.maxMarks\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}\n          </button>\n        </div>\n      </form>\n      <ng-template *ngTemplateOutlet=\"sideBarData;context:{stepperIndex: 4}\"></ng-template>\n      </div>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel><span translate>Complete</span></ng-template>\n      <div fxFlex=\"100\" class=\"font-size-20 py-16\" translate>Confirm Information</div>\n      <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border\">\n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Board</strong>: {{getNameBasedOnValue('board',classSectionForm.value.boardId)}}</mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Class</strong>:  {{getNameBasedOnValue('class',classSectionForm.value.classId)}} </mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Sections</strong>:  <span *ngFor=\"let section of classSectionForm?.value?.sectionId;let l = last;\">{{section.label}}{{l?'':', '}} </span></mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Type</strong> : \n            {{getNameBasedOnValue('type',typeCourseForm.value.typeId)}}</mat-list-item>\n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Course</strong>:  {{getNameBasedOnValue('course',typeCourseForm.value.courseId)}}</mat-list-item>\n  \n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Name</strong>: {{detailsForm.value.homeworkName}}</mat-list-item>\n          <mat-list-item *ngIf=\"detailsForm.value.file?.fileNameWithExtension\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Attachment</strong>: {{detailsForm.value.file?.fileNameWithExtension}}</mat-list-item>\n          <mat-list-item *ngIf=\"dateForm.value.homeworkDescription\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Description</strong>: {{detailsForm.value.homeworkDescription}}</mat-list-item>\n          <mat-list-item  fxLayout=\"column\" fxFlex=\"50\"><strong translate>Post to Student calendar</strong>: {{detailsForm.value.isPostToCalendar ? \"Yes\" : \"No\"}}</mat-list-item>\n  \n          <mat-list-item *ngIf=\"dateForm.value.issueDate\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Issue Date</strong>: {{getSchoolDate(dateForm.value.issueDate) }}</mat-list-item>\n          <mat-list-item *ngIf=\"dateForm.value.dueDate\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Due Date</strong> : {{getSchoolDate(dateForm.value.dueDate) }}</mat-list-item>\n  \n          <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Graded As Test</strong>: {{testInformation.value.isGraded ? \"Yes\" : \"No\"}}</mat-list-item>\n          <mat-list-item *ngIf=\"testInformation.value.testTypeId\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Test Type</strong> \n            : {{getNameBasedOnValue('testType',testInformation.value.testTypeId)}}</mat-list-item>\n          <mat-list-item *ngIf=\"testInformation.value?.gradeTermId\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Grading Term</strong>:  {{getNameBasedOnValue('gradingTerm',testInformation.value.gradeTermId)}}</mat-list-item>\n          <mat-list-item *ngIf=\"testInformation.value?.maxMarks\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Marks</strong> : {{testInformation.value.maxMarks}}</mat-list-item>\n        </mat-list>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">{{'Previous' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"submitHomeWork()\">{{(updateId ? 'Update' : 'Submit') | translate}}\n        </button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n  <div *ngIf=\"onView\">\n          <div  class=\"font-size-20 py-24 mx-24\" translate>Homework Information</div>\n          <mat-list fxLayout=\"row wrap\" class=\"pt-0 confirm-table border mx-24\">\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Board</strong>: {{homeWorkData?.boardName}}</mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Class</strong>: {{homeWorkData?.classSections[0]?.className}}</mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Sections</strong> :<span *ngFor=\"let section of homeWorkData?.classSections;let l = last;\">{{section.sectionName}} {{l ? '' :', '}}</span></mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Type</strong> : \n                {{homeWorkData?.typeName}}</mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Course</strong>:   {{homeWorkData?.courseName}}</mat-list-item>\n      \n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Name</strong>: {{homeWorkData?.homeworkName}}</mat-list-item>\n              <mat-list-item *ngIf=\"homeWorkData?.attachment?.fileName\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Attachment</strong> : \n                <a *ngIf=\"homeWorkData?.attachment?.attachmentUrl\" [href]=\"homeWorkData?.attachment?.attachmentUrl\" target=\"_blank\" >   {{'view attachment'}}</a></mat-list-item>\n      \n              <mat-list-item *ngIf=\"homeWorkData?.homeworkDescription\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Description</strong> :{{homeWorkData?.homeworkDescription}}</mat-list-item>\n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Post to Student calendar</strong> :  {{homeWorkData?.isPostToCalendar ? \"Yes\" : \"No\"}}</mat-list-item>\n      \n              <mat-list-item *ngIf=\"homeWorkData?.issueDate\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Issue Date</strong> :  {{getSchoolDate(homeWorkData?.issueDate)}}</mat-list-item>\n              <mat-list-item *ngIf=\"homeWorkData?.dueDate\" fxLayout=\"column\" fxFlex=\"50\"><strong translate>Due Date</strong> : {{getSchoolDate(homeWorkData?.dueDate)}}</mat-list-item>\n      \n              <mat-list-item fxLayout=\"column\" fxFlex=\"50\"><strong translate>Graded As Test  </strong> : {{homeWorkData?.isGraded ? \"Yes\" : \"No\"}}</mat-list-item>\n              <mat-list-item *ngIf=\"homeWorkData?.testTypeName\"  fxLayout=\"column\" fxFlex=\"50\"><strong translate>Test Type</strong> \n               : {{homeWorkData?.testTypeName}}</mat-list-item>\n              <mat-list-item *ngIf=\"homeWorkData?.gradeTermName\"  fxLayout=\"column\" fxFlex=\"50\"><strong translate>Grading Term</strong> : {{homeWorkData?.gradeTermName}}</mat-list-item>\n              <mat-list-item *ngIf=\"homeWorkData?.maxMarks\"  fxLayout=\"column\" fxFlex=\"50\"><strong translate>Marks</strong> :{{homeWorkData?.maxMarks}}</mat-list-item>\n            </mat-list>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"py-24\">\n                <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"closeView()\">\n                  {{'Close' | translate}}\n                </button>\n            </div> \n  </div>\n</ng-template>\n\n<ng-template #sideBarData let-stepperIndex=\"stepperIndex\">\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"my-28 px-20 border-left\">\n    <div  fxLayout=\"row\" class=\"py-4\">\n      <div class=\"w-144\" translate>Board</div> :<div class=\"pl-12\"><div class=\"break-word\">{{getNameBasedOnValue('board',classSectionForm.value.boardId)}}</div></div>\n    </div>\n    <div  fxLayout=\"row\" class=\"py-4\">\n      <div class=\"w-144\" translate>Class</div> :<div class=\"pl-12\"><div class=\"break-word\">{{getNameBasedOnValue('class',classSectionForm.value.classId)}}</div> </div>\n    </div>\n    <div fxLayout=\"row\" class=\"py-4\">\n      <div class=\"w-144\" translate>Sections</div> :<div class=\"pl-12\"><span *ngFor=\"let section of classSectionForm?.value?.sectionId;let l = last;\">{{section.label}} {{l ? '' : ','}} </span></div>\n    </div>\n\n    <ng-container *ngIf=\"stepperIndex > 1\">\n      <div fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Type</div> :<div class=\"pl-12\"><div class=\"break-word\">{{getNameBasedOnValue('type',typeCourseForm.value.typeId)}}</div></div>\n      </div>\n      <div fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Course</div> :<div class=\"pl-12\"><div class=\"break-word\">{{getNameBasedOnValue('course',typeCourseForm.value.courseId)}}</div></div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"stepperIndex > 2\">\n      <div fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Name</div> :<div class=\"pl-12\"><div class=\"break-word\">{{detailsForm.value.homeworkName}}</div></div>\n      </div>\n      <div *ngIf=\"classSectionForm?.value?.homeworkDescription\" fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Description</div> :<div class=\"pl-12\"><div class=\"break-word\">{{detailsForm.value.homeworkDescription}}</div></div>\n      </div>\n      <div fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Post to Student calendar</div> :<div class=\"pl-12\">{{detailsForm.value.isPostToCalendar ? \"Yes\" : \"No\"}}</div>\n      </div>\n      <div *ngIf=\"classSectionForm?.value?.file?.fileNameWithExtension\" fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Attachment</div> :<div class=\"pl-12\"><div class=\"break-word\">{{detailsForm.value?.file?.fileNameWithExtension}}</div></div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"stepperIndex > 3\">\n      <div *ngIf=\"dateForm.value?.issueDate\" fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Issue Date</div> :<div class=\"pl-12\">{{getSchoolDate(dateForm.value.issueDate) }}</div>\n      </div>\n      <div *ngIf=\"dateForm.value?.dueDate\" fxLayout=\"row\" class=\"py-4\">\n        <div class=\"w-144\" translate>Due Date</div> :<div class=\"pl-12\">{{getSchoolDate(dateForm.value.dueDate) }}</div>\n      </div>\n    </ng-container>\n  </div>\n</ng-template>\n\n\n<ng-template #testInfoTemplate let-name=\"name\">\n  <ng-container *ngFor=\"let test of rows;let i = index;\">\n      <div *ngIf=\"i==name\" matTooltipClass=\"matTool-tip\"\n      matTooltipPosition=\"above\" [matTooltip]=\"test?.termName + ', ' + test?.testTypeName + ', ' + test?.marks\">\n        <div class=\"pt-8\">{{test?.termName}}</div>\n      <div class=\"pt-8\"> {{test?.testTypeName}}</div>\n      <div class=\"py-8\" *ngIf=\"test.marks\">Marks: {{test?.marks}}</div>\n      </div>\n  </ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-table ::ng-deep .mat-list-item-content {\n  display: block; }\n\n::ng-deep .mat-tooltip {\n  white-space: pre-line    !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvc3RhZmYvYXNzaWdubWVudHMvaG9tZXdvcmtzLWFzc2lnbm1lbnRzL2hvbWV3b3Jrcy1hc3NpZ25tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdNLGNBQWMsRUFBQTs7QUFJcEI7RUFDRSxtQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvYXNzaWdubWVudHMvaG9tZXdvcmtzLWFzc2lnbm1lbnRzL2hvbWV3b3Jrcy1hc3NpZ25tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbmZpcm0tdGFibGV7XG4gIDo6bmctZGVlcHtcbiAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50e1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAgLm1hdC10b29sdGlwICB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAgICAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HomeworksAssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworksAssignmentsComponent", function() { return HomeworksAssignmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_service_assignments_class_home_work_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/assignments/class-home-work.service */ "./src/app/service/assignments/class-home-work.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


















var HomeworksAssignmentsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeworksAssignmentsComponent, _super);
    function HomeworksAssignmentsComponent(classesConfigService, _formBuilder, gradeSetupService, classHomeWorkService, gradeTermConfigurationService, router, classTimetableService, typeService, changeDetector, dialogRef, commonService, storeService, snackBar) {
        var _this = _super.call(this) || this;
        _this.classesConfigService = classesConfigService;
        _this._formBuilder = _formBuilder;
        _this.gradeSetupService = gradeSetupService;
        _this.classHomeWorkService = classHomeWorkService;
        _this.gradeTermConfigurationService = gradeTermConfigurationService;
        _this.router = router;
        _this.classTimetableService = classTimetableService;
        _this.typeService = typeService;
        _this.changeDetector = changeDetector;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.preSelectIds = [];
        _this.currentComponent = 'HomeworksAssignmentsComponent';
        _this.isSchoolhasBoards = true;
        _this.schoolBoardsList = [];
        _this.classesList = [];
        _this.sectionsList = [];
        _this.coursesList = [];
        _this.typesList = [];
        _this.testTypesList = [];
        _this.gradingTermsList = [];
        _this.filterRowData = [];
        _this.validate = true;
        _this.closeForm = false;
        _this.totalEstimate = 10;
        _this.ctx = { estimate: _this.totalEstimate };
        _this.currentDate = _this.getDefaultDate();
        _this.items = [];
        _this.classSectionIds = [];
        _this.interactedStepperIndex = 0;
        _this.onView = false;
        _this.classSectionsFromApi = [];
        _this.afterLoadItems = true;
        _this.isSingleClick = true;
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        _this.getSchoolBoardsList();
        _this.getTypes();
        _this.getTestTypes();
        return _this;
    }
    HomeworksAssignmentsComponent.prototype.onSelectChange = function (event) {
        var _this = this;
        this.classSectionIds = [];
        if (event) {
            event.forEach(function (element) {
                _this.classSectionIds.push(element.schoolAcademicClassSectionId);
            });
            if (this.classSectionIds.toString() !== this.classSectionsFromApi.toString()) {
                this.testInformation.controls.gradeTermId.setValue(null);
            }
            else {
                this.classSectionsFromApi = [];
            }
            this.getGradingTerms();
        }
    };
    HomeworksAssignmentsComponent.prototype.initializeModel = function () {
        this.fileBaseModel = {
            fileNameWithExtension: null,
            value: null
        };
        this.classHomeWork = {
            boardId: null,
            schoolAcademicSessionClassSectionIds: [null],
            typeId: 0,
            courseId: 0,
            homeworkName: null,
            homeworkDescription: null,
            file: this.fileBaseModel,
            isPostToCalendar: false,
            issueDate: new Date(),
            dueDate: new Date(),
            isGraded: false,
            testTypeId: 0,
            gradeTermId: 0,
            maxMarks: 0
        };
    };
    HomeworksAssignmentsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
        };
    };
    HomeworksAssignmentsComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'boardName', header: 'Board', sort: false },
            { field: 'className', header: 'Class', sort: false },
            { field: 'sectionname', header: 'Section', sort: false },
            { field: 'courseName', header: 'Course', sort: false },
            { field: 'typeName', header: 'Type', sort: false },
            { field: 'homeWorkName', header: 'Name', sort: false },
            { field: 'issueDate', header: 'Issue Date', sort: false },
            { field: 'dueDate', header: 'Due Date', sort: false },
            { field: 'testInformation', header: 'Test Information', sort: false, rowTempalteRequired: true },
            { field: 'actions', header: 'Action', sort: false }
        ];
    };
    HomeworksAssignmentsComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Homework/Assignments',
            componentName: this.currentComponent,
            model: this.filterViewModel,
        };
    };
    HomeworksAssignmentsComponent.prototype.getSchoolBoardsList = function () {
        var _this = this;
        this.gradeSetupService.schoolAcademicBoards().subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                _this.isSchoolhasBoards = true;
                res.listViews.forEach(function (element) {
                    _this.schoolBoardsList.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
            else {
                _this.isSchoolhasBoards = false;
                _this.classSectionForm.get('boardId').clearValidators();
                _this.classSectionForm.get('boardId').updateValueAndValidity();
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    HomeworksAssignmentsComponent.prototype.onCancel = function () {
        this.stepper.reset();
        this.updateId = null;
        this.closeForm = true;
        this.onView = false;
        this.interactedStepperIndex = 0;
    };
    HomeworksAssignmentsComponent.prototype.onSelectSchoolBoard = function (schoolBoard, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.classesList = [];
        this.sectionsList = [];
        this.items = [];
        if (!update) {
            this.classSectionForm.controls.classId.setValue(null);
            this.classSectionForm.controls.sectionId.setValue(null);
            this.testInformation.controls.gradeTermId.setValue(null);
        }
        this.gradeSetupService.schoolAcademicClasses(schoolBoard).subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classesList.push({
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
    HomeworksAssignmentsComponent.prototype.onSelectClass = function (update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.getCourseList();
        this.sectionsList = [];
        this.items = [];
        this.classSectionForm.controls.sectionId.setValue(null);
        if (!update) {
            this.typeCourseForm.controls.courseId.setValue(null);
            this.testInformation.controls.gradeTermId.setValue(null);
        }
        this.classHomeWorkService.getAllDetails(this.classSectionForm.value.boardId, this.classSectionForm.value.classId)
            .subscribe(function (res) {
            _this.items = res.academicSectionsLists;
            _this.items.forEach(function (element) {
                element.label = element.sectionName;
                element.value = element.schoolAcademicClassSectionId;
            });
            if (_this.classSectionIds.length && update) {
                _this.selectedItems = _this.items.filter(function (e) { return _this.classSectionIds.indexOf(e.schoolAcademicClassSectionId) !== -1; });
                _this.classSectionForm.controls.sectionId.setValue(_this.selectedItems);
                _this.getGradingTerms();
                _this.afterLoadItems = true;
            }
        });
    };
    HomeworksAssignmentsComponent.prototype.ngOnInit = function () {
        this.academicSession = JSON.parse(localStorage.getItem('_as'));
        this.setFormData();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
            this.getAllFilteredClasses();
        }
        else {
            this.getAllFilteredClasses();
        }
    };
    HomeworksAssignmentsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllFilteredClasses();
    };
    HomeworksAssignmentsComponent.prototype.setFormData = function () {
        var _this = this;
        this.classSectionForm = this._formBuilder.group({
            boardId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            classId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            sectionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
        });
        this.typeCourseForm = this._formBuilder.group({
            typeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            courseId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]]
        });
        this.detailsForm = this._formBuilder.group({
            homeworkName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            file: [null],
            homeworkDescription: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(135)]],
            isPostToCalendar: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.dateForm = this._formBuilder.group({
            issueDate: [this.getDefaultDate(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            dueDate: [null],
        });
        this.testInformation = this._formBuilder.group({
            isGraded: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(45)]],
            testTypeId: [null],
            gradeTermId: [null],
            maxMarks: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NATURAL_NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999)]]
        });
        this.testInformation.controls.isGraded.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])()).subscribe(function (val) {
            if (val) {
                _this.testInformation.controls.testTypeId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                _this.testInformation.controls.gradeTermId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                _this.testInformation.controls.maxMarks.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999)]);
                _this.stepper._steps._results[_this.stepper.selectedIndex].interacted = false;
            }
            else {
                _this.testInformation.controls.isGraded.patchValue(false);
                _this.testInformation.controls.testTypeId.clearValidators();
                _this.testInformation.controls.gradeTermId.clearValidators();
                _this.testInformation.controls.maxMarks.clearValidators();
                _this.testInformation.patchValue({
                    testTypeId: null,
                    gradeTermId: null,
                    maxMarks: null
                });
            }
            _this.testInformation.updateValueAndValidity();
        });
    };
    HomeworksAssignmentsComponent.prototype.formControlIsValid = function (formGroup, formCtrl) {
        if (formGroup.controls.hasOwnProperty(formCtrl)) {
            if (!formGroup.controls[formCtrl].touched) {
                return true;
            }
            return formGroup.controls[formCtrl].valid;
        }
        return false;
    };
    HomeworksAssignmentsComponent.prototype.openForm = function () {
        this.setFormData();
        this.classesList = [];
        this.sectionsList = [];
        this.items = [];
        this.onView = false;
        this.closeForm = false;
    };
    HomeworksAssignmentsComponent.prototype.getTypes = function () {
        var _this = this;
        this.typeService.typesByTypeCategoryCode('HW').subscribe(function (res) { return _this.typesList = res.types; });
    };
    HomeworksAssignmentsComponent.prototype.getTestTypes = function () {
        var _this = this;
        this.gradeTermConfigurationService.fetchTestTypes()
            .subscribe(function (res) { return _this.testTypesList = res.listViews; });
    };
    HomeworksAssignmentsComponent.prototype.getGradingTerms = function () {
        var _this = this;
        var sectionsIds = [];
        this.items.forEach(function (e) {
            if (_this.classSectionIds.indexOf(e.schoolAcademicClassSectionId) > -1) {
                sectionsIds.push(e.sectionId);
            }
        });
        if (this.classSectionForm.value.classId && sectionsIds.length) {
            // tslint:disable-next-line: max-line-length
            this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.classSectionForm.value.classId, sectionsIds, this.classSectionForm.value.boardId)
                .subscribe(function (res) { return _this.gradingTermsList = res.listViews; });
        }
    };
    HomeworksAssignmentsComponent.prototype.getCourseList = function () {
        var _this = this;
        this.coursesList = [];
        this.classTimetableService.classTimetableCoursesGet(this.classSectionForm.value.boardId, this.classSectionForm.value.classId).subscribe(function (res) {
            if (res.commonViewModel != null) {
                _this.coursesList = [];
                res.commonViewModel.map(function (x) {
                    _this.coursesList.push({ value: x.id, label: x.name });
                });
            }
        });
    };
    HomeworksAssignmentsComponent.prototype.getAllFilteredClasses = function () {
        var _this = this;
        this.classHomeWorkService.getAllHomeworks(this.filterViewModel.boardIds, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.typeIds, this.filterViewModel.courseIds, this.filterViewModel.homeWorkNames, this.filterViewModel.issueDateBegin, this.filterViewModel.issueDateEnd, this.filterViewModel.dueDateBegin, this.filterViewModel.dueDateEnd, this.filterViewModel.termIds, this.filterViewModel.testTypeIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
            .subscribe(function (res) {
            _this.setClassResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    HomeworksAssignmentsComponent.prototype.setClassResult = function (data) {
        var _this = this;
        if (!data.getClassHomeWorksModel) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.getClassHomeWorksModel.list;
            this.totalRowsCount = data.getClassHomeWorksModel.totalItems;
            this.pageCnt = data.getClassHomeWorksModel.totalPages;
            this.preSelectIds = [];
        }
        if (data.getClassHomeWorksModel) {
            this.filterViewModel.pageNumber = data.getClassHomeWorksModel.pageNumber;
        }
        this.rows.forEach(function (e) {
            e.issueDate = e.issueDate ? _this.commonService.customDateFormat(e.issueDate.toString(), _this.getSchoolDateFormat()).date : null;
            e.dueDate = e.dueDate ? _this.commonService.customDateFormat(e.dueDate.toString(), _this.getSchoolDateFormat()).date : null;
        });
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Homework/Assignments',
            componentName: this.currentComponent,
            visibleSelectAll: false,
            isSelectRowRequired: false,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Homeworks/Assignments'
                },
                addingForm: {
                    required: true,
                    btnName: 'Add'
                }
            },
            rowGroupingColumns: ['className', 'boardName', 'typeName', 'sectionname', 'courseName']
        };
        this.filterRowData = [];
        this.filterRowData = this.rows;
        var x = [];
        this.filterRowData.forEach(function (elnt) {
            if (x.length === 0) {
                x.push(elnt);
            }
            else {
                _this.filterRowData.forEach(function (element) {
                    var foundIndex = x.findIndex(function (value) {
                        return value.className === element.className && value.homeWorkName === element.homeWorkName;
                    });
                    if (foundIndex === -1) {
                        x.push(element);
                    }
                });
            }
        });
        this.filterRowData = x;
        // apply edit and delete
        this.updateActions();
    };
    HomeworksAssignmentsComponent.prototype.updateActions = function () {
        this.filterRowData.forEach(function (element) {
            element.operations = [
                // {
                //   name: AppSettings.EDIT_OPERATION,
                //   icon: AppSettings.EDIT,
                //   operationName: AppSettings.EDIT
                // }, 
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_DISPLAY,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS
                },
                {
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                },
            ];
            if (element.testScheduleId !== null) {
                element.operations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MARKS,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MARKS_ICON,
                    operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MARKS
                });
            }
        });
    };
    HomeworksAssignmentsComponent.prototype.onSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
    };
    HomeworksAssignmentsComponent.prototype.selectedRows = function (event) {
    };
    HomeworksAssignmentsComponent.prototype.getSchoolDate = function (date) {
        return date ? this.commonService.customDateFormat(date.toString(), this.getSchoolDateFormat()).date : null;
    };
    HomeworksAssignmentsComponent.prototype.imgChanged = function (files, logo) {
        if (logo === void 0) { logo = false; }
        if (this.checkFileSize(files[0], app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var that = this;
        reader.onload = function (_event) {
            that.attachmentUrl = null;
            that.detailsForm.controls.file.setValue({ fileNameWithExtension: files[0].name, value: reader.result.split(',')[1] });
            that.changeDetector.detectChanges();
        };
    };
    HomeworksAssignmentsComponent.prototype.clearImages = function () {
        this.detailsForm.controls.file.setValue(null);
    };
    HomeworksAssignmentsComponent.prototype.submitHomeWork = function () {
        var _this = this;
        this.classHomeWork = {};
        this.classHomeWork.boardId = this.classSectionForm.value.boardId;
        this.classHomeWork.schoolAcademicSessionClassSectionIds = this.classSectionIds;
        Object.assign(this.classHomeWork, this.typeCourseForm.value, this.detailsForm.value, this.dateForm.value, this.testInformation.value);
        if (this.updateId) {
            this.classHomeWork.id = this.updateId;
            this.classHomeWorkService.updateHomework(this.classHomeWork)
                .subscribe(function (res) { return _this.setHomeWorkdata(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        else {
            if (this.isSingleClick) {
                this.isSingleClick = false;
                this.classHomeWorkService.postHomework(this.classHomeWork)
                    .subscribe(function (res) { return _this.setHomeWorkdata(res); }, function (error) {
                    _this.errorResponse(error);
                });
                setTimeout(function () {
                    _this.isSingleClick = true;
                }, 1000);
            }
        }
    };
    // Actions Performing on the row
    HomeworksAssignmentsComponent.prototype.actions = function (operationData) {
        var _this = this;
        this.classSectionsFromApi = [];
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS.toLowerCase()) {
            this.onView = true;
            this.classHomeWorkService.getByHomeworks(operationData.clickedRow.id)
                .subscribe(function (res) { return _this.viewHomeWorkDetails(res); });
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT.toLowerCase()) {
            this.afterLoadItems = false;
            this.updateId = operationData.clickedRow.id;
            this.classHomeWorkService.getByHomeworks(operationData.clickedRow.id)
                .subscribe(function (res) { return _this.getHomeWorkDetails(res); });
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE.toLowerCase()) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_CONFORMATION, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.classHomeWorkService.deleteHomework(operationData.clickedRow.id)
                        .subscribe(function (res) { return _this.setHomeWorkdata(res); }, function (error) { return _this.errorResponse(error); });
                }
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO) {
                    _this.dialogRef.closeAll();
                }
            });
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MARKS.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_16__["RouteConfig"].Home_Work_Test_Schedule + '/' + operationData.clickedRow.testScheduleId, { operation: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].HOMEWORK }]);
        }
    };
    HomeworksAssignmentsComponent.prototype.viewHomeWorkDetails = function (res) {
        this.homeWorkData = res.getClassHomeworkModel;
        if (this.homeWorkData.attachment && this.homeWorkData.attachment.fileName) {
            this.homeWorkData.attachment.attachmentUrl = this.storeService.getFilePath(this.homeWorkData.attachment.fileName);
        }
        this.scrollIntoView('app-table');
        this.closeForm = false;
    };
    HomeworksAssignmentsComponent.prototype.getHomeWorkDetails = function (res) {
        var _this = this;
        var data = res.getClassHomeworkModel;
        this.onSelectSchoolBoard(data.boardId, true);
        var formNames = ['classSectionForm', 'typeCourseForm', 'detailsForm', 'dateForm', 'testInformation'];
        var _loop_1 = function (i) {
            Object.keys(this_1[formNames[i]]['controls']).forEach(function (key) {
                if (typeof (data[key]) === 'boolean') {
                    _this[formNames[i]]['controls'][key].setValue(data[key]);
                }
                else {
                    _this[formNames[i]]['controls'][key].setValue(data[key] ? data[key] : null);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < formNames.length; i++) {
            _loop_1(i);
        }
        if (data.classSections && data.classSections[0].classId) {
            this.classSectionForm.controls.classId.setValue(data.classSections[0].classId);
        }
        this.classSectionIds = data.schoolAcademicSessionClassSectionId;
        this.classSectionsFromApi = this.classSectionIds;
        this.onSelectClass(true);
        this.onView = false;
        this.closeForm = false;
        if (data.attachment && data.attachment.fileName) {
            this.attachmentUrl = this.storeService.getFilePath(data.attachment.fileName);
            this.storeService.storeFileEncryptByFileNameGet(data.attachment.fileName)
                .subscribe(function (result) {
                if (result) {
                    _this.detailsForm.controls.file.setValue({ fileNameWithExtension: result.fileNameWithExtension, value: result.value });
                    _this.changeDetector.detectChanges();
                }
            });
        }
        this.stepper._steps._results.forEach(function (x) {
            x.interacted = true;
        });
        this.interactedStepperIndex = this.stepper._steps._results.length;
        this.customSteperLabelChange();
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
    };
    HomeworksAssignmentsComponent.prototype.openFile = function (base64) {
        window.open(base64, '_blank');
    };
    HomeworksAssignmentsComponent.prototype.closeView = function () {
        this.closeForm = true;
        this.onView = false;
        this.scrollIntoView('app-table');
    };
    HomeworksAssignmentsComponent.prototype.setHomeWorkdata = function (res) {
        this.updateId = null;
        this.onCancel();
        this.getAllFilteredClasses();
        this.openSnackBar(res.messages.ResultMessage);
    };
    HomeworksAssignmentsComponent.prototype.getNameBasedOnValue = function (name, value) {
        if (value === '' || value === 0) {
            return '';
        }
        var x;
        switch (name) {
            case 'board':
                return (x = this.schoolBoardsList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            case 'class':
                return (x = this.classesList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            case 'sections':
                return (x = this.sectionsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'type':
                return (x = this.typesList.filter(function (element) { return element.id === value; })).length > 0 ? x[0].name : '';
            case 'testType':
                return (x = this.testTypesList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'gradingTerm':
                return (x = this.gradingTermsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'course':
                return (x = this.coursesList.filter(function (element) { return element.value === value; })).length ? x[0].label : '';
            default: break;
        }
    };
    HomeworksAssignmentsComponent.prototype.onChnageGraded = function (e) {
        if (!e.value) {
            return;
        }
        Object.values(this.testInformation.controls).forEach(function (control) {
            control.markAsUntouched();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeworksAssignmentsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HomeworksAssignmentsComponent.prototype, "viewTemplate", void 0);
    HomeworksAssignmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homeworks-assignments',
            template: __webpack_require__(/*! ./homeworks-assignments.component.html */ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.html"),
            providers: [app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_4__["ClassesConfigService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_4__["ClassesConfigService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__["ClassTimetableService"], app_service_assignments_class_home_work_service__WEBPACK_IMPORTED_MODULE_9__["ClassHomeWorkService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_10__["GardeTermConfigurationService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"]],
            styles: [__webpack_require__(/*! ./homeworks-assignments.component.scss */ "./src/app/modules/staff/assignments/homeworks-assignments/homeworks-assignments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_4__["ClassesConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"],
            app_service_assignments_class_home_work_service__WEBPACK_IMPORTED_MODULE_9__["ClassHomeWorkService"],
            app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_10__["GardeTermConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__["ClassTimetableService"],
            app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_14__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]])
    ], HomeworksAssignmentsComponent);
    return HomeworksAssignmentsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~app-modules-staff-assignments-assignments-module~app-modules-staff-staff-module.js.map