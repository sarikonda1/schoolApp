(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-communication-school-communications-school-communications-module"],{

/***/ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #commForm>\n  <mat-vertical-stepper [linear]=\"true\" #stepper (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n    <mat-step [stepControl]=\"communicationForm\">\n      <form [formGroup]=\"communicationForm\" fxLayout=\"column\" #commuForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Communication Type</span></ng-template>\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n          <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n            fxLayout=\"column\">\n            <mat-label #CommunicationTypeId translate>Communication Type</mat-label>\n            <mat-select formControlName=\"communicationTypeId\" required\n              (selectionChange)=\"onCommunicationTypeSelect($event)\">\n              <mat-option *ngFor=\"let commType of communicationTypesDropDown\" [value]=\"commType\" ngDefaultControl>\n                {{ commType.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='CommunicationTypeId.innerText'\n                [validationControl]=\"communicationForm.controls.communicationTypeId\" [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\n            <mat-label #title translate>Title</mat-label>\n            <input id=\"step-title\" (keyup)=\"preventSpace($event,'communicationForm','title')\"\n              (blur)=\"trimTextBoxSpaces('communicationForm','title')\" matInput formControlName=\"title\"\n              autocomplete=\"off\" required>\n            <mat-error>\n              <app-validation [labelName]='title.innerText' [validationControl]=\"communicationForm.controls.title\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div translate>This communication will be delivered through communicationType delivery options.</div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12\">\n          <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\" type=\"reset\"\n            class=\"text-uppercase mr-12\">\n            {{'Cancel' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"messageForm\">\n      <form [formGroup]=\"messageForm\" fxLayout=\"column\" #messageContent=\"ngForm\">\n        <ng-template matStepLabel><span translate>Message Content</span></ng-template>\n        <div class=\"pt-4\" translate>Please enter the content for each form of message delivery</div>\n        <div *ngIf=\"emailEnable\">\n          <div class=\"mt-16 mb-4\"><span translate>Email Content</span></div>\n          <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #subject translate>Subject</mat-label>\n              <input matInput autocomplete=\"off\" formControlName=\"subject\"\n                (keyup)=\"preventSpace($event,'messageForm','subject')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','subject')\" required>\n              <mat-error>\n                <app-validation [labelName]='subject.innerText' [validationControl]=\"messageForm.controls.subject\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #Message translate>Message</mat-label>\n              <textarea matInput autocomplete=\"off\" formControlName=\"message\"\n                (keyup)=\"preventSpace($event,'messageForm','message')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','message')\" required></textarea>\n              <mat-error>\n                <app-validation [labelName]='Message.innerText' [validationControl]=\"messageForm.controls.message\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <div fxLayout=\"column\" class=\"mt-12\" fxFlex.gt-sm=\"32\" fxFlex=\"100\">\n              <div fxLayout=\"row\">\n                <button mat-raised-button type=\"button\" color=\"primary\"\n                  (click)=\"logoImgInput.value='';logoImgInput.click()\">\n                  <mat-icon class=\"mr-8\">attach_file</mat-icon>{{'Upload Attachment' | translate}}\n                </button>\n                <button (click)=\"logoImgInput.value='';clearImages(true)\" mat-icon-button type=\"button\" *ngIf=\"logoImgProp?.src\">\n                  <mat-icon class=\"mb-4 grey-600-fg\" [style.visibility]=\"logoImgProp?.src ? 'visible' : 'hidden'\"\n                    >highlight_off</mat-icon>\n                </button>\n              </div>\n              <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"logoImgInput\"\n                (change)=\"imgChanged(logoImgInput.files)\" fxHide type=\"file\" #logoImgInput>\n              <div class=\"pt-8 logo-name break-word\"\n                [style.visibility]=\"messageForm?.value?.attachment?.fileName ? 'visible' : 'hidden'\"\n                [style.display]=\"logoImgProp?.src ? 'block' : 'none'\">\n                {{messageForm?.value?.attachment?.fileName}}</div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"smsEnable\">\n          <div class=\"mt-16 mb-4\"><span translate>SMS Content</span></div>\n          <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #Sms translate>Sms</mat-label>\n              <textarea matInput autocomplete=\"off\" formControlName=\"sms\"\n                (keyup)=\"preventSpace($event,'messageForm','sms')\" (blur)=\"trimTextBoxSpaces('messageForm','sms')\"\n                required></textarea>\n              <mat-error>\n                <app-validation [labelName]='Sms.innerText' [validationControl]=\"messageForm.controls.sms\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <small class=\"secondary-text text-right\" translate>Max 255 Characters</small>\n          </div>\n        </div>\n\n        <div *ngIf=\"notificationEnable\">\n          <div class=\"mt-16 mb-4\"><span translate>Push Notification Content</span></div>\n          <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #title translate>Title</mat-label>\n              <input matInput autocomplete=\"off\" formControlName=\"notificationTitle\" (keyup)=\"preventSpace($event,'messageForm','notificationTitle')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','notificationTitle')\" required>\n              <mat-error>\n                <app-validation [labelName]='title.innerText'\n                  [validationControl]=\"messageForm.controls.notificationTitle\" [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #title translate>Title</mat-label>\n              <input matInput autocomplete=\"off\" formControlName=\"notificationTitle\" (keyup)=\"preventSpace($event,'messageForm','notificationTitle')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','notificationTitle')\" required>\n              <mat-error>\n                <app-validation [labelName]='title.innerText'\n                  [validationControl]=\"messageForm.controls.notificationTitle\" [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #notification translate>Push Message</mat-label>\n              <textarea matInput autocomplete=\"off\" formControlName=\"notification\"\n                (keyup)=\"preventSpace($event,'messageForm','notification')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','notification')\" required></textarea>\n              <mat-error>\n                <app-validation [labelName]='notification.innerText'\n                  [validationControl]=\"messageForm.controls.notification\" [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <small class=\"secondary-text text-right\" translate>Max 225 Characters</small>\n          </div>\n        </div>\n\n        <div *ngIf=\"noticeEnable\">\n          <div class=\"mt-16 mb-4\"><span translate>Notice Board Content</span></div>\n          <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n              <mat-label #noticeBoard translate>Notice Board</mat-label>\n              <textarea matInput autocomplete=\"off\" formControlName=\"noticeBoard\"\n                (keyup)=\"preventSpace($event,'messageForm','noticeBoard')\"\n                (blur)=\"trimTextBoxSpaces('messageForm','noticeBoard')\" required></textarea>\n              <mat-error>\n                <app-validation [labelName]='noticeBoard.innerText'\n                  [validationControl]=\"messageForm.controls.noticeBoard\" [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <small class=\"secondary-text text-right\" translate>Max 225 Characters</small>\n          </div>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"recipients\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexFill>\n        <form [formGroup]=\"recepientsForm\" fxLayout=\"column\" fxFlex=\"70\" #recForm=\"ngForm\">\n          <ng-template matStepLabel><span translate>Recipients</span></ng-template>\n          <div class=\"py-8\" translate>Please Select the Recipients of this Communication</div>\n          <mat-checkbox class=\"mr-20\" (change)=\"checkAllStudents($event)\" [checked]=\"isAllStudentsChecked\"\n            #studentSelect><span translate>Check here to\n              send Communication to All Students of school</span></mat-checkbox>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n            <div fxFlex=\"100\" fxLayout=\"row\">\n              <mat-form-field appearance=\"outline\" class=\"mr-12\" fxFlex=\"100\">\n                <mat-label #Board translate>Board</mat-label>\n                <mat-select formControlName=\"boards\" (selectionChange)=\"onRecipientsBoardSelect($event)\"\n                  [disabled]=\"isAllStudentsChecked\">\n                  <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board\">\n                    {{ board.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='Board.innerText' [validationControl]=\"recepientsForm.controls.boards\"\n                    [doValidate]=\"true\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div fxFlex=\"100\" fxLayout=\"row\">\n              <af-select [disabled]=\"isAllStudentsChecked\" [isValueIsObject]=\"isValueIsObject\" class=\"mr-12\"\n                fxFlex=\"100\" appearance=\"outline\" [optionGroupRequired]=\"true\" [groups]=\"classSections\"\n                placeholder=\"Class And Sections\" [multiple]=\"true\" [value]=\"selectedItems\" formControlName=\"classes\">\n              </af-select>\n            </div>\n          </div>\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"row\">\n              <div class=\"pt-16 mr-sm-20\">\n                <button mat-raised-button type=\"button\" [disabled]=\"!(recepientsForm.controls['boards'].value)\"\n                  (click)=\"onSectionButtonSelect()\" color=\"accent\"\n                  class=\"text-uppercase\">{{'Select' | translate}}</button>\n              </div>\n            </div>\n            <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"pr-sm-20\">\n              <mat-label #studentId translate>Search Student Name</mat-label>\n              <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentIds\"\n                aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n              <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n              <mat-autocomplete #studentNameSearch=\"matAutocomplete\"\n                (optionSelected)='getSelectedStudent($event.option.value)' [displayWith]=\"displayFn\">\n                <mat-option *ngFor=\"let option of filterdSearchStudents\" [value]=\"option\">\n                  {{option.studentName}}\n                  <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n\n          </div>\n          <mat-checkbox class=\"mr-20 pt-24\" (change)=\"checkAllStaff($event)\" [checked]=\"isAllStaffChecked\" #staffSelect>\n            <span translate>Check here to send Communication to All the Staff Members of School</span></mat-checkbox>\n\n          <div fxLayout=\"column\" class=\"pt-12\">\n            <div fxFlex=\"60\" fxLayout=\"row\">\n              <mat-form-field appearance=\"outline\" class=\"mr-12\" fxFlex=\"70\" fxLayout=\"column\">\n                <mat-label #staffTypeIds translate>Staff Type</mat-label>\n                <mat-select formControlName=\"staffType\" (selectionChange)=\"onStaffTypeSelect($event)\"\n                  [disabled]=\"isAllStaffChecked\">\n                  <mat-option *ngFor=\"let staffType of staffTypes\" [value]=\"staffType\" ngDefaultControl>\n                    {{ staffType.label }}</mat-option>\n                </mat-select>\n                <mat-error>\n                  <app-validation [labelName]='staffTypeIds.innerText'\n                    [validationControl]=\"recepientsForm.controls.staffType\" [doValidate]=\"true\">\n                  </app-validation>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"60\" fxLayout=\"row\">\n              <div class=\"mr-12\" fxFlex=\"70\" fxLayout=\"column\">\n                <af-select appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n                  [disabled]=\"isAllStaffChecked\" [optionGroupRequired]=\"false\" [options]=\"staffs?.length ? staffs : []\"\n                  [showChips]=\"1\" placeholder=\"Staff\" [multiple]=\"true\" formControlName=\"staffList\"></af-select>\n              </div>\n              <div class=\"pt-16 w-92\" fxFlex=\"30\">\n                <button mat-raised-button type=\"button\" [disabled]=\"!(recepientsForm.controls['staffType'].value)\"\n                  (click)=\"onStaffButtonSelect()\" color=\"accent\"\n                  class=\"text-uppercase\">{{'Select' | translate}}</button>\n              </div>\n            </div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n              {{'Previous' | translate}}\n            </button>\n            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\"\n              class=\"text-uppercase\" (click)=\"onSelectRecepients()\" >{{'Next' | translate}}</button>\n          </div>\n        </form>\n        <ng-template *ngTemplateOutlet=\"sideBarData\"></ng-template>\n      </div>\n    </mat-step>\n\n    <mat-step [stepControl]=\"scheduleForm\">\n      <span translate>Please select the Schedule for this communication.the message will be processed starting from the\n        schedule date and time.</span>\n      <form [formGroup]=\"scheduleForm\" fxLayout=\"column\" fxFlex=\"100\" #schForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>Schedule</span></ng-template>\n        <div fxFlexFill fxLayout=\"column\" class=\"pt-24\" fxLayout.gt-sm=\"row\">\n          <mat-form-field appearance=\"outline\" class=\"icon-center\" fxFlexFill fxFlex=\"100\" fxFlex.gt-sm=\"40\"\n            fxLayout=\"column\">\n            <mat-label #entryDate translate>Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('scheduleDate',scheduleForm)\" [matDatepicker]=\"entryDatePicker\"\n              formControlName=\"scheduleDate\" [min]=\"currentDate\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"entryDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #entryDatePicker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]='entryDate.innerText' [validationControl]=\"scheduleForm.controls.scheduleDate\"\n                [doValidate]=\"true\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"formfield-pb-0 px-sm-20\">\n            <app-custom-timepicker [label]=\"'Schedule Time'\" appearance=\"outline\" formControlName=\"scheduleTime\"\n              [is24HoursFormat]=\"true\" [showLabel]=\"true\" [isRequired]=\"true\" [errorClass]=\"'pt-20'\"\n              [requiredValidator]=true></app-custom-timepicker>\n          </div>\n\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-20\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'Next' | translate}}</button>\n        </div>\n      </form>\n\n    </mat-step>\n\n    <mat-step class=\"form-status\">\n      <ng-template matStepLabel><span translate>Done</span></ng-template>\n      <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>Please verify the entered\n        information before your final submit</div>\n\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"pt-0 confirm-table border\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <strong class=\"w-180\"><span translate>Communication Type</span><span class=\"px-4\">:</span></strong>\n          <span flexLayout=\"row\">{{communicationForm?.value?.communicationTypeId?.label}}</span>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex=\"50\">\n          <strong class=\"w-80\"><span translate>Title</span>  <span\n            class=\"px-4\">:</span></strong>\n            <span flexLayout=\"row\"> {{communicationForm.controls?.title?.value}}</span>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxFlex=\"100\" class=\"recipients\">\n          <strong translate class=\"w-120 pt-20\">Recipients</strong><span class=\"px-4 pt-20\">:</span>\n          <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"0 1 auto\" class=\"min-w-300 my-12 border mh-424 \"\n            *ngIf=\"displayResults.length > 0\">\n            <div class=\"p-8\" [ngClass]=\"last ? ' ':'border-bottom'\"\n              *ngFor=\"let item of displayResults; let last = last\">{{item.boardName}} <span\n                *ngIf=\"item.className\">,</span> {{item.className}}<span *ngIf=\"item.sectionName\">,</span>\n              {{item.sectionName}} {{item.studentName}} {{item.label}}</div>\n          </div>\n          <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"0 1 auto\" class=\"ml-12 min-w-300 my-12 border mh-424 \"\n            *ngIf=\"selectedList.length > 0\">\n            <div class=\"p-8\" [ngClass]=\"last ? ' ':'border-bottom'\" *ngFor=\"let item of selectedList; let last = last\">\n              {{item.staffTypeName}} <span *ngIf=\"item.staffName && item.staffTypeName\">,</span> {{item.staffName}}\n              {{item.label}}</div>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex=\"100\">\n          <div fxLayout=\"column\" fxFlex=\"100\">\n            <ng-container *ngIf=\"smsEnable\">\n              <div class=\"mt-16 mb-4\"><span translate>SMS Content</span></div>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Sms</mat-label>\n                <textarea matInput readonly> {{messageForm.controls?.sms?.value}}</textarea>\n              </mat-form-field>\n            </ng-container>\n\n            <ng-container *ngIf=\"notificationEnable\">\n              <div class=\"mt-16 mb-4\"><span translate>Push Notification Content</span></div>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Title</mat-label>\n                <textarea matInput  readonly>{{messageForm.controls?.notificationTitle?.value}}</textarea>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Push Notification</mat-label>\n                <textarea matInput readonly>{{messageForm.controls?.notification?.value}}</textarea>\n              </mat-form-field>\n            </ng-container>\n\n            <ng-container *ngIf=\"noticeEnable\">\n              <div class=\"mt-16 mb-4\"><span translate>Notice Board Content</span></div> \n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Notice Board</mat-label>\n                <textarea matInput readonly>{{messageForm.controls?.noticeBoard?.value}}</textarea>\n              </mat-form-field>\n            </ng-container>\n\n            <ng-container *ngIf=\"emailEnable\">\n              <div class=\"mt-16 mb-4\"><span translate>Email Content</span></div>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Subject</mat-label>\n                <input matInput readonly value=\"{{messageForm.controls?.subject?.value}}\">\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0 pb-4\">\n                <mat-label translate>Message</mat-label>\n                <textarea matInput readonly>{{messageForm.controls?.message?.value}}</textarea>\n              </mat-form-field>\n              <div class=\"py-8\" *ngIf=\"messageForm.controls?.attachment?.value.fileName\"> <strong translate\n                  class=\"w-200\" translate>Attached Document </strong><span class=\"px-4\">:</span>\n                <span>{{messageForm.controls?.attachment?.value.fileName}}</span>\n              </div>\n            </ng-container>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item fxFlex=\"100\" fxLayout=\"column\">\n          <strong><span translate class=\"pr-12\">Schedule Date</span></strong><span class=\"px-4\">:</span>\n          {{showDate(scheduleForm.controls?.scheduleDate?.value)}}\n          <strong> <span class=\"px-12\" translate>Time</span></strong><span class=\"px-4\">:</span>\n          {{scheduleForm.controls?.scheduleTime?.value}}\n\n        </mat-list-item>\n      </mat-list>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-12 pt-24\">\n        <button class=\"mr-8 text-uppercase\" mat-raised-button matStepperPrevious\n          type=\"button\">{{'Previous' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" [disabled]=\"disbleSubmitBtn\" color=\"accent\"\n          (click)=\"onSubmitForm()\">{{'submit' | translate}}</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n</ng-template>\n\n<ng-template #sideBarData>\n  <div fxLayout=\"column\" fxFlex=\"30\" class=\"border-left my-28 px-20 mh-424\">\n    <div class=\"font-size-16 accent-fg\" *ngIf=\"displayResults?.length > 0\" translate>Selected Student Recipients</div>\n    <mat-list class=\"pt-0 border mt-16 rm-height\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center start\"\n      *ngFor=\"let item of displayResults; let i = index\">\n      <mat-list-item fxLayout=\"column\" fxFlex=\"100\">\n        <div fxLayoutAlign=\"space-between center\" fxFlexFill>\n          <div class=\"break-word\"><span>{{item.boardName}}<span *ngIf=\"item.className\">,</span> {{item.className}}<span *ngIf=\"item.sectionName\">,</span> {{item.sectionName}} {{item.studentName}} {{item.label}}</span></div>\n          <button mat-icon-button (click)=\"deleteStudentSelection(i)\">\n            <mat-icon class=\"red-300-fg\">delete</mat-icon>\n          </button>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  <div *ngIf=\"selectedList?.length > 0\" class=\"font-size-16 accent-fg mt-20\" translate>Selected Staff Recipients</div>\n  <mat-list class=\"pt-0 border mt-16 rm-height\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center start\" *ngFor=\"let item of selectedList; let i = index\">\n    <mat-list-item fxLayout=\"column\" fxFlex=\"100\" >\n      <div fxLayoutAlign=\"space-between center\" fxFlexFill>\n        <div class=\"break-word\"><span>{{item.staffTypeName}}<span *ngIf=\"item.staffName\">,</span> {{item.staffName}} {{item.label}}</span></div>\n        <button mat-icon-button (click)=\"deleteStaffSelection(i)\">\n          <mat-icon  class=\"red-300-fg\">delete</mat-icon>\n        </button>\n      </div>\n    </mat-list-item>\n  </mat-list>\n  </div>\n</ng-template>\n\n<div class=\"px-sm-40 pt-sm-20\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\">{{'School Communications' | translate}}</div>\n  <div class=\"w-100-p mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayoutAlign=\"end center\" class=\"border-bottom p-20\">\n      <button mat-button (click)=\"getHelpText('School Communications')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch(searchForm.value)\" class=\"p-24\">\n      <fieldset class=\"border p-20 mx-12\">\n        <legend>{{'Search by Student Name' | translate}}</legend>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-12\"  fxLayoutAlign=\"space-between center\">\n          <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"40\" fxFlex=\"100\" class=\"pr-sm-20\">\n            <mat-label #studentId translate>Search Student Name</mat-label>\n            <input #studentNamee matInput placeholder=\"Search Students\" formControlName=\"studentName\"\n              aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n            <!-- <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon> -->\n            <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\"\n              (optionSelected)='selectedStudent($event.option.value)'>\n              <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n                {{option.studentName}}\n                <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </fieldset>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\">\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n          fxFlexFil>\n          <mat-label #board translate>Board</mat-label>\n          <mat-select formControlName=\"schoolBoardId\" (selectionChange)=\"onBoardSelect($event)\">\n            <mat-option *ngIf=\"schoolBoardsList?.length\"></mat-option>\n            <mat-option *ngFor=\"let board of schoolBoardsList\" [value]=\"board.value\">\n              {{board.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n          class=\"pr-sm-20\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select name=\"classId\" formControlName=\"classIds\" (selectionChange)=\"onClassSelect($event)\">\n            <mat-option *ngIf=\"classNames?.length\"></mat-option>\n            <mat-option *ngFor=\"let class of classNames\" [value]=\"class?.value\">\n              {{class.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n          class=\"pr-sm-20\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select formControlName=\"sectionIds\">\n            <mat-option *ngIf=\"sectionNames?.length\"></mat-option>\n            <mat-option *ngFor=\"let section of sectionNames\" [value]=\"section?.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\">\n          <mat-label translate #communicationType translate>Communication Type</mat-label>\n          <mat-select name=\"communicationType\" formControlName=\"communicationTypeId\">\n            <mat-option *ngIf=\"communicationTypesDropDown?.length\"></mat-option>\n            <mat-option *ngFor=\"let commType of communicationTypesDropDown\" [value]=\"commType.value\">\n              {{commType.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\">\n          <mat-label translate #status>Status</mat-label>\n          <mat-select name=\"statusId\" formControlName=\"statusIds\">\n            <mat-option *ngIf=\"statusViewModel?.length\"></mat-option>\n            <mat-option *ngFor=\"let item of statusViewModel\" [value]=\"item.value\">\n              {{item.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mb-12\" id=\"com-dt\">\n        <button color=\"accent\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\" (click)=\"onAdd()\">\n          {{'New' | translate}}\n        </button>\n\n        <button mat-raised-button type=\"reset\" class=\"text-uppercase mr-12\" (click)=\"onClear()\">\n          {{'Reset' | translate}}\n        </button>\n        <button mat-raised-button type=\"submit\" color=\"primary\" class=\"text-uppercase\">\n          {{'Search' | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n  <mat-accordion class=\"filter-accordian\">\n    <mat-expansion-panel [expanded]=\"onSelectNew\" class=\"mt-20\" (afterExpand)=\"focusForm(addPanelForm)\" #addPanelForm>\n      <ng-template [ngTemplateOutlet]=\"commForm\"></ng-template>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n<app-table *ngIf=\"!showCustomCard\" [settings]=\"tabSettings\" [templateRef]=\"commForm\" (getTableData)='tableData($event)'\n  (rowBasedAction)='rowWiseActions($event)' [closeRowForm]='closeAddPanel' (openAddForm)=\"openForm()\">\n</app-table>\n<app-custom-card *ngIf=\"showCustomCard\" [title]=customCardDetails.title [inputMessage]=customCardDetails.message>\n</app-custom-card>"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mh-424 {\n  max-height: 424px;\n  overflow-y: auto; }\n\n.recipients ::ng-deep .mat-list-item-content {\n  -webkit-box-align: start;\n          align-items: start; }\n\n.min-w-300 {\n  min-width: 300px; }\n\n.rm-height ::ng-deep\n.mat-list-item {\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29tbXVuaWNhdGlvbi9zY2hvb2wtY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdGlvbi1jb25maWd1cmF0aW9uL2NvbW11bmljYXRpb24tY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFHTSx3QkFBa0I7VUFBbEIsa0JBQWtCLEVBQUE7O0FBSXhCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCOztFQUdJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbXVuaWNhdGlvbi9zY2hvb2wtY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdGlvbi1jb25maWd1cmF0aW9uL2NvbW11bmljYXRpb24tY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taC00MjQgeyAgXG4gICAgbWF4LWhlaWdodDogNDI0cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAucmVjaXBpZW50c3tcbiAgICA6Om5nLWRlZXB7XG4gICAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50e1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5taW4tdy0zMDB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAucm0taGVpZ2h0e1xuICAgIDo6bmctZGVlcFxuICAgIC5tYXQtbGlzdC1pdGVte1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CommunicationConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationConfigurationComponent", function() { return CommunicationConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/class-section.service */ "./src/app/service/academic-service/api/class-section.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/academic-service/api/school-academic-session.service */ "./src/app/service/academic-service/api/school-academic-session.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/shared/custom-timepicker/custom-timepicker.validators */ "./src/app/shared/custom-timepicker/custom-timepicker.validators.ts");






















var CommunicationConfigurationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommunicationConfigurationComponent, _super);
    function CommunicationConfigurationComponent(snackBar, cd, sanitizer, commService, commonService, gradeSetupService, _fb, classSectionService, typeService, router, schoolAcademicSessionService, classService, studentService, dialogRef) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.cd = cd;
        _this.sanitizer = sanitizer;
        _this.commService = commService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this._fb = _fb;
        _this.classSectionService = classSectionService;
        _this.typeService = typeService;
        _this.router = router;
        _this.schoolAcademicSessionService = schoolAcademicSessionService;
        _this.classService = classService;
        _this.studentService = studentService;
        _this.dialogRef = dialogRef;
        _this.recipients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        _this.flagImageProp = {};
        _this.currentDate = _this.getDefaultDate();
        _this.interactedStepperIndex = 0;
        _this.currentComponentName = 'CommunicationConfigurationComponent';
        _this.receipentList = [];
        _this.selectedList = [];
        _this.studentList = [];
        _this.classNames = [];
        _this.isValueIsObject = true;
        _this.classSections = [];
        _this.loadData = Promise.resolve(false);
        _this.communicationTypeDeliveryOptionsDropDown = [];
        _this.formValid = true;
        _this.showCustomCard = true;
        _this.customCardDetails = { title: 'Communications Search', message: 'Search Communications' };
        _this.isAllStudentsChecked = false;
        _this.isAllStaffChecked = false;
        _this.onSelectNew = false;
        _this.displayResults = [];
        _this.isSingleClick = false;
        _this.intializeView();
        _this.intializeModel();
        return _this;
    }
    CommunicationConfigurationComponent.prototype.intializeView = function () {
        this.communicationSearchViewModel = {
            studentIds: [],
            studentNames: [],
            communicationTypeId: [],
            communicationType: '',
            communicationStatus: '',
            schoolBoardId: [],
            classIds: [],
            sectionIds: [],
            statusIds: [],
            sender: [],
            title: '',
            receiver: '',
            entryDateBegin: null,
            entryDateEnd: null,
            approvedBy: '',
            approvedDateBegin: null,
            approvedDateEnd: null,
            status: '',
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER, pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
    };
    CommunicationConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this._fb.group({
            schoolBoardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            classIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            sectionIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            communicationTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            statusIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        var modelTableComponent = this.getModelComponent(this.currentComponentName);
        if (modelTableComponent) {
            this.communicationSearchViewModel = modelTableComponent;
            this.boardId = modelTableComponent.schoolBoardId;
            this.searchForm.patchValue(modelTableComponent);
            if (modelTableComponent.statusIds && modelTableComponent.statusIds.length) {
                this.searchForm.patchValue({ statusIds: modelTableComponent.statusIds[0] });
            }
            this.classId = modelTableComponent.classIds;
            this.getClassesList(this.boardId, true);
            this.sections(this.classId, true);
            if (modelTableComponent.studentNames && modelTableComponent.studentIds) {
                this.searchForm.controls.studentName.patchValue({
                    studentName: modelTableComponent.studentNames,
                    id: modelTableComponent.studentIds
                });
                setTimeout(function () {
                    _this.studentNameAutoInput.nativeElement.value = modelTableComponent.studentNames;
                });
            }
            this.onSearch(false, true);
        }
        this.dateFormat = this.getSchoolDateFormat();
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.isValueIsObject = true;
        this.cols = [
            { field: 'title', header: 'Title', sort: false },
            { field: 'communicationType', header: 'Communication Type', sort: false },
            { field: 'sender', header: 'Sender', sort: false },
            { field: 'receiver', header: 'Receiver', sort: false },
            { field: 'entryDate', header: 'Entry Date', sort: false },
            { field: 'approvedBy', header: 'Approved By', sort: false },
            { field: 'approvalDate', header: 'Approved Date', sort: false },
            { field: 'communicationStatus', header: 'Status', sort: false },
            { field: 'view', header: 'Actions', sort: false }
        ],
            this.tabSettings = {
                rows: [],
                columns: this.cols,
                tablename: 'Communications Search',
                headerOperations: {
                    addingForm: {
                        required: true,
                        btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NEW
                    }
                }
            };
        this.communicationForm = this._fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            communicationTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.messageForm = this._fb.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(90)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            attachment: this._fb.group({
                fileName: null,
                fileValue: null,
            }),
            sms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(225)]),
            notificationTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(225)]),
            notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(225)]),
            noticeBoard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(225)])
        });
        this.recepientsForm = this._fb.group({
            boards: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            classes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sections: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            studentIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            staffType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            staffList: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.scheduleForm = this._fb.group({
            scheduleDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            scheduleTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_20__["TimeValidator"].validateTimeRequired])
        });
        this.searchForm.controls['studentName'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
        this.recepientsForm.controls['studentIds'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdSearchStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdSearchStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdSearchStudents = [];
            }
        });
        this.getStatus();
        this.communicationTypes();
        this.schoolBoards();
        this.getStaffTypes();
    };
    CommunicationConfigurationComponent.prototype.getStaffTypes = function () {
        var _this = this;
        this.staffTypes = [];
        this.staffs = [];
        this.recepientsForm.controls['staffList'].patchValue(null);
        this.typeService.getStaffTypes().subscribe(function (response) {
            _this.staffTypes = response.types.map(function (obj) { return ({ value: obj, label: obj.name }); });
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.getStaffs = function (data) {
        var _this = this;
        this.staffs = [];
        this.recepientsForm.controls['staffList'].patchValue('');
        this.commService.getStaff(data.id).subscribe(function (response) {
            if (response && response.length) {
                _this.staffs = response.map(function (obj) { return ({ value: obj.id, label: obj.name }); });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.intializeModel = function () {
        this.commConfModel = {
            communicationTypeId: 0,
            title: null,
            email: {
                subject: null,
                message: null,
                attachment: {
                    fileName: '',
                    fileValue: ''
                }
            },
            sms: null,
            notificationTitle: null,
            notification: null,
            noticeBoard: null,
            isAllStudents: false,
            isAllStaff: false,
            scheduleDate: null,
            scheduleTime: null,
            studentRecepients: {
                boardClassSections: [],
                studentIds: [],
            },
            staffRecepients: {
                staffType: [],
                staffList: []
            }
        };
    };
    CommunicationConfigurationComponent.prototype.communicationTypes = function () {
        var _this = this;
        this.communicationTypesDropDown = [];
        this.commService.getCommunicationType().subscribe(function (res) {
            if (res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.communicationTypesDropDown.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.onCommunicationTypeSelect = function (commTypeId) {
        var _this = this;
        this.messageForm.reset();
        this.msgForm.resetForm();
        this.commConfModel.noticeBoard = null;
        this.commConfModel.email.attachment = null;
        this.commConfModel.email.message = null;
        this.commConfModel.email.subject = null;
        this.commConfModel.notification = null;
        this.commConfModel.notificationTitle = null;
        this.commConfModel.sms = null;
        this.communicationTypeDeliveryOptionsDropDown = [];
        this.commService.getCommunicationTypeDeliveryOptions(commTypeId.value.value).subscribe(function (res) {
            if (res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.communicationTypeDeliveryOptionsDropDown.push({
                        label: element.name,
                        value: element.id,
                        code: element.code
                    });
                });
                _this.emailEnable = _this.communicationTypeDeliveryOptionsDropDown.some(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EMAIL_CODE; });
                _this.smsEnable = _this.communicationTypeDeliveryOptionsDropDown.some(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SMS_CODE; });
                _this.notificationEnable = _this.communicationTypeDeliveryOptionsDropDown.some(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PNC_CODE; });
                _this.noticeEnable = _this.communicationTypeDeliveryOptionsDropDown.some(function (x) { return x.code === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NBD_CODE; });
                if (!_this.emailEnable) {
                    _this.messageForm.controls.subject.disable();
                    _this.messageForm.controls.message.disable();
                }
                else {
                    _this.messageForm.controls.subject.enable();
                    _this.messageForm.controls.message.enable();
                }
                if (!_this.smsEnable) {
                    _this.messageForm.controls.sms.disable();
                }
                else {
                    _this.messageForm.controls.sms.enable();
                }
                if (!_this.notificationEnable) {
                    _this.messageForm.controls.notificationTitle.disable();
                    _this.messageForm.controls.notification.disable();
                }
                else {
                    _this.messageForm.controls.notificationTitle.enable();
                    _this.messageForm.controls.notification.enable();
                }
                if (!_this.noticeEnable) {
                    _this.messageForm.controls.noticeBoard.disable();
                }
                else {
                    _this.messageForm.controls.noticeBoard.enable();
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.getAllFilteredStudents = function () {
        if (this.searchForm === undefined) {
            return;
        }
    };
    CommunicationConfigurationComponent.prototype.rowWiseActions = function (event) {
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_12__["CommunicationModuleConfig"]._Communication_Setup + '/' + event.clickedRow.id]);
        }
    };
    // Get SChool Boards
    CommunicationConfigurationComponent.prototype.schoolBoards = function () {
        var _this = this;
        this.boards = [];
        this.classNames = [];
        this.classService.boardsBasedOnAcademicSession(parseInt(this.getTokenParam('_as'), 10)).subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.boards.push({
                            label: element.name,
                            value: element.id
                        });
                        _this.schoolBoardsList = _this.boards;
                    });
                    if (_this.searchForm.value.schoolBoardId) {
                        _this.boardId = _this.schoolBoardsList[0].value;
                        _this.setFormControl('searchForm', 'schoolBoardId', _this.schoolBoardsList[0].value);
                        _this.getClassesList(_this.boardId);
                    }
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Get Classes to filter table data
    CommunicationConfigurationComponent.prototype.getClassesList = function (boardId, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        this.classNames = [];
        if (!this.searchForm.value.schoolBoardId) {
            return;
        }
        if (!onManualChange) {
            this.classId = null;
        }
        this.gradeSetupService.schoolAcademicClasses(boardId).subscribe(function (response) {
            if (response.listViews != null) {
                if (response.listViews.length) {
                    response.listViews.forEach(function (element) {
                        _this.classNames.push({
                            label: element.name,
                            value: element.id
                        });
                    });
                }
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SCHOOL_BOARD_HAS_CLASSES, true);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // on selection of class
    CommunicationConfigurationComponent.prototype.sections = function (classId, onManualChange) {
        var _this = this;
        if (onManualChange === void 0) { onManualChange = false; }
        this.sectionNames = [];
        if (!this.searchForm.value.schoolBoardId || !this.searchForm.value.classIds) {
            return;
        }
        if (!onManualChange) {
            this.searchForm.controls['sectionIds'].patchValue('');
        }
        if (!classId) {
            return;
        }
        this.gradeSetupService.schoolAcademicClassSections(this.boardId, classId).subscribe(function (response) {
            if (response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.sectionNames.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.getStatus = function () {
        var _this = this;
        this.commService.getStatus(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].COMMUNICATION_CONFIG).subscribe(function (res) {
            _this.statusResponse(res);
        });
    };
    // biling cycle response
    CommunicationConfigurationComponent.prototype.statusResponse = function (res) {
        this.statusViewModel = [];
        if (res.commonViewModel.length !== 0) {
            for (var i = 0; i < res.commonViewModel.length; i++) {
                this.statusViewModel.push({ value: res.commonViewModel[i].id, label: res.commonViewModel[i].name });
            }
        }
    };
    CommunicationConfigurationComponent.prototype.clearImages = function (logo) {
        if (logo === void 0) { logo = false; }
        if (logo) {
            this.logoImgProp = {};
            this.fileName = '';
            if (this.messageForm.controls.attachment.value !== null) {
                this.messageForm.controls.attachment.value.fileName = null;
                this.messageForm.controls.attachment.value.fileValue = null;
            }
        }
        this.cd.detectChanges();
    };
    CommunicationConfigurationComponent.prototype.imgChanged = function (event) {
        var _this = this;
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
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
                that_1.messageForm.controls.attachment.value.fileName = file_1.name;
                that_1.messageForm.controls.attachment.value.fileValue = (reader_1.result.split(',')[1]);
                _this.cd.detectChanges();
            };
            that_1.setFileProperties(image);
        }
    };
    CommunicationConfigurationComponent.prototype.setFileProperties = function (image) {
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        this.logoImgProp = {};
        this.logoImgProp = data;
        this.cd.detectChanges();
    };
    CommunicationConfigurationComponent.prototype.openForm = function () {
        this.studentList = [];
        this.isAllStudentsChecked = false;
        this.isAllStaffChecked = false;
        this.closeAddPanel = false;
        this.interactedStepperIndex = 0;
    };
    CommunicationConfigurationComponent.prototype.checkAllStudents = function (data) {
        if (data.checked && this.displayResults !== null && this.displayResults.length > 0) {
            this.openDialog('select-all-student', data);
        }
        else {
            this.allStudents(data);
        }
    };
    CommunicationConfigurationComponent.prototype.allStudents = function (data) {
        this.isAllStudentsChecked = data.checked;
        if (data.checked) {
            this.displayResults = [];
            this.displayResults.push({ label: 'All Students' });
            this.setRecipientsForm();
            this.clearBoardClass();
            this.classSections = [];
            this.commConfModel.studentRecepients.studentIds = [];
            this.commConfModel.studentRecepients.boardClassSections = [];
            this.recepientsForm.controls['studentIds'].disable();
        }
        else {
            this.recipients.reset();
            this.displayResults = [];
            this.recepientsForm.controls['studentIds'].enable();
        }
        this.commConfModel.isAllStudents = data.checked;
    };
    CommunicationConfigurationComponent.prototype.checkAllStaff = function (data) {
        if (data.checked && this.selectedList !== null && this.selectedList.length > 0) {
            this.openDialog('select-all-staff', data);
        }
        else {
            this.allStaff(data);
        }
    };
    CommunicationConfigurationComponent.prototype.allStaff = function (data) {
        this.isAllStaffChecked = data.checked;
        if (data.checked) {
            this.selectedList = [];
            this.selectedList.push({ label: 'All Staffs' });
            this.setRecipientsForm();
            this.commConfModel.staffRecepients.staffList = [];
            this.commConfModel.staffRecepients.staffType = [];
        }
        else {
            this.recipients.reset();
            this.selectedList = [];
        }
        this.clearStaff();
        this.commConfModel.isAllStaff = data.checked;
    };
    CommunicationConfigurationComponent.prototype.onBoardSelect = function (data) {
        this.classNames = [];
        this.sectionNames = [];
        this.searchForm.controls['classIds'].reset();
        this.searchForm.controls['sectionIds'].reset();
        if (data.value === undefined) {
            return;
        }
        this.boardId = data.value;
        this.boardName = data.value.label;
        this.classId = null;
        this.getClassesList(this.boardId);
        this.searchForm.patchValue({
            classIds: null,
            sectionIds: null,
        });
    };
    CommunicationConfigurationComponent.prototype.onStaffTypeSelect = function (data) {
        this.getStaffs(data.value.value);
    };
    CommunicationConfigurationComponent.prototype.onSectionButtonSelect = function () {
        this.ckeckDuplicateRecipients();
        this.setRecipientsForm();
        this.setStudentPostView();
    };
    CommunicationConfigurationComponent.prototype.setStudentPostView = function () {
        this.commConfModel.studentRecepients.boardClassSections = [];
        this.commConfModel.studentRecepients.boardClassSections.push.
            apply(this.commConfModel.studentRecepients.boardClassSections, this.displayResults.filter(function (c) { return c.studentId === undefined || c.studentId === null; }));
    };
    CommunicationConfigurationComponent.prototype.getSelectedStudent = function (data) {
        var tempRecipients = [];
        if (this.displayResults.length > 0) {
            tempRecipients.push({ studentId: data.id, studentName: data.studentName, admissionNumber: data.admissionNumber });
            var result2 = lodash__WEBPACK_IMPORTED_MODULE_16__(tempRecipients)
                .differenceBy(this.displayResults, 'admissionNumber')
                .map()
                .value();
            this.displayResults.push.apply(this.displayResults, result2);
            if (result2.length > 0) {
                this.studentsSet();
            }
        }
        else {
            this.displayResults.push({ studentId: data.id, studentName: data.studentName, admissionNumber: data.admissionNumber });
            this.studentsSet();
        }
        this.recepientsForm.controls.studentIds.reset();
    };
    CommunicationConfigurationComponent.prototype.studentsSet = function () {
        this.commConfModel.studentRecepients.studentIds = this.initializeArray(this.receipentForm.value.studentIds.id, this.commConfModel.studentRecepients.studentIds);
        this.setRecipientsForm();
    };
    CommunicationConfigurationComponent.prototype.onStaffButtonSelect = function () {
        var _this = this;
        var tempRecipients = [];
        if (this.recepientsForm.value.staffList !== undefined &&
            this.recepientsForm.value.staffList !== null &&
            this.checkDataExist('staffTypeId', this.recepientsForm.controls.staffType.value.value.id) === undefined && this.recepientsForm.value.staffList.length > 0) {
            this.recepientsForm.value.staffList.forEach(function (element) {
                tempRecipients.push({
                    staffTypeId: _this.recepientsForm.controls.staffType.value.value.id,
                    staffTypeName: _this.recepientsForm.controls.staffType.value.label,
                    staffId: element.value, staffName: element.label
                });
                if (_this.selectedList.length > 0) {
                    var result3 = lodash__WEBPACK_IMPORTED_MODULE_16__(tempRecipients)
                        .differenceBy(_this.selectedList, 'staffTypeId', 'staffId')
                        .map()
                        .value();
                    _this.selectedList.push.apply(_this.selectedList, result3);
                }
                else {
                    _this.selectedList.push.apply(_this.selectedList, tempRecipients);
                }
                _this.prapareStaffView();
            });
            this.clearStaff();
        }
        else {
            tempRecipients.push({
                staffTypeId: this.recepientsForm.controls.staffType.value.value.id,
                staffTypeName: this.recepientsForm.controls.staffType.value.label,
                staffId: null
            });
            if (this.selectedList.length > 0) {
                var result = lodash__WEBPACK_IMPORTED_MODULE_16__(tempRecipients)
                    .differenceBy(this.selectedList, 'staffTypeId')
                    .map()
                    .value();
                if (result !== null && result.length === 0) {
                    this.openDialog('overide-staff-type');
                }
                else {
                    this.addStaffs();
                    this.prapareStaffView();
                    this.clearStaff();
                }
            }
            else {
                this.selectedList.push.apply(this.selectedList, tempRecipients);
                this.prapareStaffView();
                this.clearStaff();
            }
        }
    };
    CommunicationConfigurationComponent.prototype.addStaffs = function () {
        this.selectedList.push({
            staffTypeId: this.recepientsForm.controls.staffType.value.value.id,
            staffTypeName: this.recepientsForm.controls.staffType.value.label,
            staffId: null
        });
    };
    CommunicationConfigurationComponent.prototype.prapareStaffView = function () {
        this.setStaffPostView();
        this.setRecipientsForm();
    };
    CommunicationConfigurationComponent.prototype.deleteStudentSelection = function (index) {
        var c = this.displayResults[index];
        this.commConfModel.studentRecepients.studentIds = this.commConfModel.studentRecepients.studentIds.filter(function (id) {
            return id !== c.studentId;
        });
        this.displayResults.splice(index, 1);
        if (this.isAllStudentsChecked) {
            this.commConfModel.isAllStudents = false;
            this.isAllStudentsChecked = false;
            this.recepientsForm.controls['studentIds'].enable();
        }
        if (this.displayResults.length === 0 && this.selectedList.length === 0) {
            this.recipients.reset();
        }
        this.setStudentPostView();
    };
    CommunicationConfigurationComponent.prototype.deleteStaffSelection = function (index) {
        this.selectedList.splice(index, 1);
        if (this.isAllStaffChecked) {
            this.commConfModel.isAllStaff = false;
            this.isAllStaffChecked = false;
        }
        if (this.selectedList.length === 0 && this.displayResults.length === 0) {
            this.recipients.reset();
        }
        this.setStaffPostView();
        this.recepientsForm.reset();
    };
    CommunicationConfigurationComponent.prototype.setStaffPostView = function () {
        var _this = this;
        var staffTypIds = [];
        this.commConfModel.staffRecepients.staffList = [];
        this.selectedList.forEach(function (c) {
            if (c.staffId !== null) {
                _this.commConfModel.staffRecepients.staffList.push(c);
            }
            else {
                staffTypIds.push(c.staffTypeId);
            }
        });
        this.commConfModel.staffRecepients.staffType = [];
        this.commConfModel.staffRecepients.staffType.push.apply(this.commConfModel.staffRecepients.staffType, staffTypIds);
    };
    CommunicationConfigurationComponent.prototype.onSelectRecepients = function () {
        if ((this.selectedList && !this.selectedList.length) && (this.displayResults && !this.displayResults.length)) {
            this.openSnackBar('please select atleast one recipient', true);
        }
    };
    CommunicationConfigurationComponent.prototype.initializeArray = function (input, output) {
        if (output === null) {
            output = [];
        }
        if (input != null) {
            output.push(input);
        }
        return output;
    };
    CommunicationConfigurationComponent.prototype.selectedStudent = function (studentData) {
        this.intializeView();
        this.searchForm.patchValue({
            schoolBoardId: null,
            classIds: null,
            sectionIds: null,
            communicationTypeId: null,
            statusIds: null
        });
        this.communicationSearchViewModel.studentIds = studentData.id;
        this.communicationSearchViewModel.studentNames = studentData.studentName;
        this.studentList.push(this.communicationSearchViewModel);
        this.onSearch(this.searchForm.value, true);
    };
    CommunicationConfigurationComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    CommunicationConfigurationComponent.prototype.onSearch = function (data, onStudentSearch) {
        if (onStudentSearch === void 0) { onStudentSearch = false; }
        if (!onStudentSearch) {
            this.searchForm.controls.studentName.patchValue(null);
            this.communicationSearchViewModel.studentIds = [];
            this.communicationSearchViewModel.studentNames = [];
        }
        this.updateFilterViewModel();
        if (data) {
            this.communicationSearchViewModel.pageNumber = 1;
        }
        this.invoiceFilter();
    };
    // onSearch(data: any): void {
    CommunicationConfigurationComponent.prototype.tableData = function (data) {
        this.communicationSearchViewModel = data;
        this.updateFilterViewModel();
        this.invoiceFilter();
    };
    CommunicationConfigurationComponent.prototype.invoiceFilter = function () {
        var _this = this;
        if (this.searchForm === undefined) {
            return;
        }
        this.setModelDataTableComponent(this.currentComponentName, this.communicationSearchViewModel);
        this.commService.communicationDetailsList(this.communicationSearchViewModel.studentIds, this.communicationSearchViewModel.studentNames, this.communicationSearchViewModel.communicationTypeId, this.communicationSearchViewModel.communicationType, this.communicationSearchViewModel.schoolBoardId, this.communicationSearchViewModel.classIds, this.communicationSearchViewModel.sectionIds, this.communicationSearchViewModel.statusIds, this.communicationSearchViewModel.communicationStatus, this.communicationSearchViewModel.sender, this.communicationSearchViewModel.receiver, this.communicationSearchViewModel.title, this.communicationSearchViewModel.entryDateBegin, this.communicationSearchViewModel.entryDateEnd, this.communicationSearchViewModel.approvedBy, this.communicationSearchViewModel.approvedDateBegin, this.communicationSearchViewModel.approvedDateEnd, this.communicationSearchViewModel.sortOrder, this.communicationSearchViewModel.sortBy, this.communicationSearchViewModel.pageNumber, this.communicationSearchViewModel.pageSize).subscribe(function (res) { return _this.response(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.updateFilterViewModel = function () {
        var data = this.searchForm.value;
        this.communicationSearchViewModel.statusIds = [data.statusIds];
        this.communicationSearchViewModel.schoolBoardId = data.schoolBoardId;
        this.communicationSearchViewModel.communicationTypeId = data.communicationTypeId;
        if (data.studentName && data.studentName.id) {
            this.communicationSearchViewModel.studentIds = data.studentName.id;
            this.communicationSearchViewModel.studentNames = data.studentName.studentName;
        }
        else {
            this.communicationSearchViewModel.studentIds = data.studentName;
            this.communicationSearchViewModel.studentNames = data.studentName;
        }
        this.communicationSearchViewModel.classIds = data.classIds;
        this.communicationSearchViewModel.sectionIds = data.sectionIds;
    };
    CommunicationConfigurationComponent.prototype.onClear = function () {
        this.searchForm.reset();
        this.filterdStudents = [];
        this.classNames = [];
        this.sectionNames = [];
        this.searchForm.controls['studentName'].patchValue(null);
        this.communicationSearchViewModel.schoolBoardId = null;
        this.communicationSearchViewModel.classIds = null;
        this.communicationSearchViewModel.sectionIds = null;
        this.communicationSearchViewModel.communicationTypeId = null;
        this.communicationSearchViewModel.statusIds = null;
        this.communicationSearchViewModel.studentIds = [];
        this.communicationSearchViewModel.studentNames = [];
        this.showCustomCard = true;
        this.setModelDataTableComponent(this.currentComponentName, null);
    };
    CommunicationConfigurationComponent.prototype.response = function (data) {
        var _this = this;
        this.showCustomCard = false;
        if (localStorage.getItem(this.currentComponentName)) {
            this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
        }
        if (!data.resultList) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else if (data.resultList) {
            this.rows = data.resultList.list;
            this.totalRowsCount = data.resultList.totalItems;
            this.pageCnt = data.resultList.totalPages;
            this.filterRowData = [];
            this.filterRowData = this.rows;
            var x_1 = [];
            this.filterRowData.forEach(function (elnt) {
                if (x_1.length === 0) {
                    x_1.push(elnt);
                }
                else {
                    _this.filterRowData.forEach(function (element) {
                        var foundIndex = x_1.findIndex(function (value) {
                            if (value.id === element.id) {
                                return value;
                            }
                        });
                        if (foundIndex === -1) {
                            x_1.push(element);
                        }
                    });
                }
            });
            this.filterRowData = x_1;
            for (var index = 0; index < this.filterRowData.length; index++) {
                for (var j = 0; j < this.rows.length; j++) {
                    if (this.filterRowData[index].id === this.rows[j].id) {
                        this.rows[j].operations = [
                            {
                                name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_OPERATION,
                                icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_ICON,
                                operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW
                            }
                        ];
                        break;
                    }
                }
            }
            this.rows.forEach(function (element) {
                element.entryDate = (element.entryDate == null) ? null : _this.commonService.customDateFormat(element.entryDate, _this.dateFormat).date;
                element.approvalDate = (element.approvalDate == null) ? null : _this.commonService.customDateFormat(element.approvalDate, _this.dateFormat).date;
            });
            this.communicationSearchViewModel.pageNumber = data.resultList.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            tablename: 'Communications Search',
            model: this.communicationSearchViewModel,
            rows: this.rows,
            componentName: this.currentComponentName,
            isSelectRowRequired: false,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalRowsCount,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            filtersList: data.filters,
            rowGroupingColumns: ['title', 'communicationType', 'sender', 'approvedBy', 'approvalDate', 'communicationStatus', 'entryDate']
        };
        this.scrollIntoViewById('com-dt');
    };
    CommunicationConfigurationComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.commConfModel.communicationTypeId = this.communicationForm.value.communicationTypeId.value;
        this.commConfModel.title = this.communicationForm.value.title;
        this.prepareModel(this.commConfModel, this.scheduleForm.value);
        var formatedMsgContent = {};
        Object.assign(formatedMsgContent, this.messageForm.value);
        if (formatedMsgContent['message']) {
            formatedMsgContent['message'] = JSON.stringify(formatedMsgContent['message']).slice(1, -1);
        }
        this.prepareModel(this.commConfModel, formatedMsgContent);
        this.prepareModel(this.commConfModel.email, formatedMsgContent);
        if (!this.isSingleClick) {
            this.isSingleClick = true;
            this.commService.communicationConfiguration(this.commConfModel).subscribe(function (res) { return _this.result(res); }, function (error) {
                _this.errorResponse(error);
            });
            setTimeout(function () {
                _this.isSingleClick = false;
            }, 2000);
        }
    };
    CommunicationConfigurationComponent.prototype.result = function (response) {
        if (response.statusCode === this.HttpStatus.OK) {
            this.closeAddPanel = true;
            this.displayResults = [];
            this.selectedList = [];
            this.intializeModel();
            this.invoiceFilter();
            this.resetForms();
            this.interactedStepperIndex = 0;
            this.onSelectNew = false;
            this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].HIDE);
        }
        else {
            this.closeAddPanel = false;
        }
        document.getElementById('resetButtonStepper').click();
        this.openSnackBar(response.messages.ResultMessage);
    };
    CommunicationConfigurationComponent.prototype.showDate = function (data) {
        return data != null ? this.commonService.customDateFormat(data.toString(), this.getSchoolDateFormat()).date : null;
    };
    // onCancelClick
    CommunicationConfigurationComponent.prototype.onCancel = function () {
        this.onSelectNew = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].HIDE);
        this.closeAddPanel = true;
        this.selectedList = [];
        this.displayResults = [];
        this.receipentList = [];
        this.resetForms();
        this.stepper.reset();
        this.clearImages(true);
    };
    CommunicationConfigurationComponent.prototype.resetForms = function () {
        this.commForm.resetForm();
        this.msgForm.resetForm();
        this.receipentForm.resetForm();
        this.schForm.resetForm();
        this.scheduleForm.reset();
        this.isAllStudentsChecked = false;
        this.isAllStaffChecked = false;
    };
    CommunicationConfigurationComponent.prototype.onAdd = function () {
        this.onSelectNew = true;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SHOW);
    };
    CommunicationConfigurationComponent.prototype.focusForm = function (focusForm) {
        document.getElementById('step-title').focus();
    };
    // get Classes
    CommunicationConfigurationComponent.prototype.getClassSections = function () {
        var _this = this;
        this.schoolAcademicSessionService.academicClassSections(this.boardId).subscribe(function (response) {
            _this.classResponse(response);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    CommunicationConfigurationComponent.prototype.classResponse = function (data) {
        var _this = this;
        this.test = [];
        this.classSections = [];
        if (data.classSectionsDataView && data.classSectionsDataView.length > 0) {
            this.test = data.classSectionsDataView;
            this.test.forEach(function (classdata) {
                var classObj = [];
                classObj['name'] = classdata.className;
                classObj['items'] = [];
                classdata.sectionViewModel.forEach(function (section) {
                    classObj['items'].push({
                        label: section.name,
                        value: { classId: classdata.classId, id: section.id, className: classdata.className }
                    });
                });
                _this.classSections.push(classObj);
            });
        }
        this.loadData = Promise.resolve(true);
    };
    // End
    CommunicationConfigurationComponent.prototype.onRecipientsBoardSelect = function (data) {
        if (data.value === undefined) {
            return;
        }
        this.boardId = data.value.value;
        this.getClassSections();
    };
    CommunicationConfigurationComponent.prototype.onClassSelect = function (data) {
        this.classId = data.value;
        this.sections(this.classId);
        this.searchForm.patchValue({
            sectionIds: null,
        });
    };
    CommunicationConfigurationComponent.prototype.clearBoardClass = function () {
        this.recepientsForm.controls.classes.reset();
        this.recepientsForm.controls.boards.reset();
        this.recepientsForm.controls.studentIds.reset();
        this.classSections = [];
    };
    CommunicationConfigurationComponent.prototype.clearStaff = function () {
        this.recepientsForm.controls.staffList.reset();
        this.recepientsForm.controls.staffType.reset();
        this.staffs = [];
    };
    CommunicationConfigurationComponent.prototype.ckeckDuplicateRecipients = function () {
        var _this = this;
        var tempRecipients = [];
        if (this.recepientsForm.controls.classes.value != null && this.recepientsForm.controls.classes.value.length > 0) {
            if (this.checkDataExist('boardId', this.recepientsForm.controls.boards.value.value) === undefined) {
                this.recepientsForm.controls.classes.value.forEach(function (element) {
                    if (_this.displayResults.length === 0 || _this.checkClassSectionDuplicate(element.value.classId, element.value.id) === undefined) {
                        _this.displayResults.push({
                            boardId: _this.recepientsForm.controls.boards.value.value, boardName: _this.recepientsForm.controls.boards.value.label,
                            className: element.value.className, classId: element.value.classId, sectionId: element.value.id, sectionName: element.label
                        });
                    }
                });
                this.clearBoardClass();
            }
            else {
                this.openDialog('overide-board');
            }
        }
        else {
            tempRecipients.push({
                boardId: this.recepientsForm.controls.boards.value.value, boardName: this.recepientsForm.controls.boards.value.label, classId: null
            });
            var result2 = lodash__WEBPACK_IMPORTED_MODULE_16__(tempRecipients)
                .differenceBy(this.displayResults, 'boardId')
                .map()
                .value();
            if (result2.length === 0) {
                this.openDialog('overide-board');
            }
            else {
                this.addBoard();
            }
        }
    };
    CommunicationConfigurationComponent.prototype.checkClassSectionDuplicate = function (classId, sectionId) {
        return this.displayResults.find(function (a) { return a.classId === classId && a.sectionId === sectionId; });
    };
    CommunicationConfigurationComponent.prototype.setRecipientsForm = function () {
        if (!this.recipients.value) {
            this.recipients.patchValue('true');
        }
    };
    CommunicationConfigurationComponent.prototype.checkDataExist = function (key, value) {
        if (key === 'boardId') {
            return this.displayResults.find(function (a) { return a.boardId === value && a.classId === null; });
        }
        if (key === 'staffTypeId') {
            return this.selectedList.find(function (a) { return a.staffTypeId === value && a.staffId === null; });
        }
    };
    CommunicationConfigurationComponent.prototype.openDialog = function (operation, value) {
        var _this = this;
        var title = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].CONFIRMATION_REMOVE_RECIPIENTS;
        var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CustomDialogComponent"], {
            disableClose: true,
            data: {
                text: this.commonService.getTranslation(title),
                action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES
            },
        });
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NO) {
                if (_this.studentCheck !== undefined) {
                    _this.isAllStudentsChecked = false;
                    _this.studentCheck._checked = _this.isAllStudentsChecked;
                }
                if (_this.staffCheck !== undefined) {
                    _this.isAllStaffChecked = false;
                    _this.staffCheck._checked = _this.isAllStudentsChecked;
                }
                _this.cd.detectChanges();
                _this.dialogRef.closeAll();
            }
            else if (operation === 'select-all-student' && action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.allStudents(value);
            }
            else if (operation === 'select-all-staff' && action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.allStaff(value);
            }
            else if (operation === 'overide-board' && action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.clearBoardSelectedData(_this.recepientsForm.controls.boards.value.value);
                _this.onSectionButtonSelect();
            }
            else if (operation === 'overide-staff-type' && action === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].YES) {
                _this.clearStaffTypeSelectedData(_this.recepientsForm.controls.staffType.value.value.id);
                _this.onStaffButtonSelect();
            }
        });
    };
    CommunicationConfigurationComponent.prototype.clearStaffTypeSelectedData = function (value) {
        this.selectedList = this.selectedList.filter(function (a) { return a.staffTypeId !== value; });
    };
    CommunicationConfigurationComponent.prototype.clearBoardSelectedData = function (value) {
        this.displayResults = this.displayResults.filter(function (a) { return a.boardId !== value; });
    };
    CommunicationConfigurationComponent.prototype.addBoard = function () {
        this.displayResults.push({
            boardId: this.recepientsForm.controls.boards.value.value, boardName: this.recepientsForm.controls.boards.value.label, classId: null
        });
        this.clearBoardClass();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"])
    ], CommunicationConfigurationComponent.prototype, "_auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commuForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "commForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "msgForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "receipentForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('schForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "schForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentNamee'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "studentNameAutoInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staffSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "staffCheck", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommunicationConfigurationComponent.prototype, "studentCheck", void 0);
    CommunicationConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication-configuration',
            template: __webpack_require__(/*! ./communication-configuration.component.html */ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.html"),
            providers: [app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__["SchoolAcademicSessionService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_17__["ClassesConfigService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_18__["StudentDatabaseService"]],
            styles: [__webpack_require__(/*! ./communication-configuration.component.scss */ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_8__["CommunicationService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_academic_service_api_class_section_service__WEBPACK_IMPORTED_MODULE_4__["ClassSectionService"],
            app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_13__["TypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            app_service_academic_service_api_school_academic_session_service__WEBPACK_IMPORTED_MODULE_15__["SchoolAcademicSessionService"],
            app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_17__["ClassesConfigService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_18__["StudentDatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
    ], CommunicationConfigurationComponent);
    return CommunicationConfigurationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-details/communication-details.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"simple-table-container radius-t-20 mat-elevation-z8 mx-40 mb-20\" *ngIf=\"communicationList\">\n  <div fxLayoutAlign=\"end center\" class=\"border-bottom p-12 mr-12\" *ngIf=\"ApproveButton || rejectButton\">\n    <button id=\"navButton_1\" mat-raised-button color=\"accent\" (click)=\"approveCommunication()\" class=\"mr-8\" *ngIf=\"ApproveButton\" translate>{{'Approve' | translate}}</button>\n    <button id=\"reject-button\" mat-raised-button (click)=\"rejectCommunication()\" *ngIf=\"rejectButton\" translate>{{'Cancel' | translate}}</button>\n  </div>\n  <div fxLayoutAlign=\"space-between start\" class=\"mb-20 p-12\">\n    <mat-list fxLayout=\"row wrap\" fxFlex=\"55\" class=\"pr-8\">\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Communication Type</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\"><div class=\"break-word\">{{communicationList.communicationType}}</div></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Title</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\"><div class=\"break-word\">{{communicationList.title}}</div></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Status</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\">{{communicationList.status}}</mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Created By</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\"><div class=\"break-word\">{{communicationList.createdBy? (communicationList.createdBy) : \"--\"}}</div>\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Entry Date</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\">{{communicationList.entryDate? (communicationList.entryDate): \"--\"}}\n      </mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Approved By</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\">\n        <div class=\"break-word\"> {{communicationList.approvedBy? (communicationList.approvedBy): \"--\"}}</div></mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Approval Date</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\">\n        {{communicationList.approvelDate? (communicationList.approvelDate): \"--\"}}</mat-list-item>\n\n      <mat-list-item fxLayout=\"column\" fxFlex=\"35\"><span translate>Schedule Date & Time</span></mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"2\">:</mat-list-item>\n      <mat-list-item fxLayout=\"column\" fxFlex=\"60\">\n        {{communicationList.scheduleDate? (communicationList.scheduleDate): \"--\"}}</mat-list-item>\n    </mat-list>\n    <div fxLayout=\"column\" fxFlex=\"45\" class=\"px-20 pt-12\">\n      <div class=\"h2 text-uppercase\" translate>Recipients</div>\n      <mat-list fxLayout=\"row wrap\" fxFlex=\"100\" class=\"border pt-0 recipients last-border-none mh-350\">\n        <mat-list-item fxLayout=\"column\" fxFlex=\"100\" *ngFor=\"let item of communicationList.reciepents\"\n          class=\"border-bottom\">\n          <!-- <div>{{item.name + ' ' + item.admissionNumber + '' +item.staffCode}}</div>\n          <div>{{item.class + ' ' + item.section}}</div> -->\n          <div fxLayout=\"column\" fxFlex=\"100\" class=\"py-8\">\n            <div fxLayout=\"row\">\n              <div class=\"break-word pr-8\" fxFlex=\"60\">{{item.name}}</div> \n              <div *ngIf=\"item.admissionNumber != '' \" class=\"break-word\" fxFlex=\"40\">{{item.admissionNumber}}</div>\n              <div *ngIf=\"item.staffCode != '' \" class=\"break-word\" fxFlex=\"40\">{{item.staffCode}}</div>\n            </div>\n            <div fxLayout=\"row\">\n              <div class=\"break-word pr-8\" fxFlex=\"60\">{{item.class}}</div> \n              <div class=\"break-word\" fxFlex=\"40\">{{item.section}}</div>\n            </div>\n          </div>\n                \n        </mat-list-item>\n      </mat-list>\n    </div>\n  </div>\n\n  <div class=\"p-24 border-top\" fxLayout=\"row wrap\"\n    *ngIf=\"communicationList.emailContent || communicationList.smsContent || communicationList.noticeBoardContent || communicationList.pushMessage\">\n    <div fxLayout=\"column\" fxFlex=\"50\" *ngIf=\"communicationList.emailContent\" class=\"px-12\">\n      <div class=\"mt-16 mb-4\" translate>Email Content</div>\n      <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n          <mat-label translate>Subject</mat-label>\n          <input matInput autocomplete=\"off\" [value]=\"communicationList.emailContent.subject\" readonly>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0\">\n          <mat-label translate>Message</mat-label>\n          <textarea matInput autocomplete=\"off\" [value]=\"nl2br(communicationList.emailContent.message)\" readonly></textarea>\n        </mat-form-field>\n        <div fxLayout=\"column\" fxFlex.gt-xs=\"32\" fxFlex=\"100\"\n          *ngIf=\"communicationList.emailContent.attachment.fileName\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-8\">\n            <span class=\"secondary-text pr-20\" translate>Attachment :</span> <button mat-button color=\"accent\"\n              (click)=\"download()\">\n              <u>View Attachment</u></button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div fxLayout=\"column\" fxFlex=\"50\" class=\"px-12\" *ngIf=\"communicationList.smsContent\">\n      <div class=\"mt-16 mb-4\" translate>SMS Content</div>\n      <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0\">\n          <mat-label translate>Sms</mat-label>\n          <textarea matInput autocomplete=\"off\" [value]=\"communicationList.smsContent\" readonly></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div fxLayout=\"column\" fxFlex=\"50\" *ngIf=\"communicationList.noticeBoardContent\" class=\"px-12\">\n      <div class=\"mt-16 mb-4\" translate>Notice Board Content</div>\n      <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0\">\n          <mat-label translate>Notice Board</mat-label>\n          <textarea matInput autocomplete=\"off\" [value]=\"communicationList.noticeBoardContent\" readonly></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div fxLayout=\"column\" fxFlex=\"50\" class=\"px-12\" *ngIf=\"communicationList.pushMessage\">\n      <div class=\"mt-16 mb-4\" translate>Push Notification Content</div>\n      <div fxLayout=\"column\" class=\"p-20 border mb-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\">\n          <mat-label translate>Title</mat-label>\n          <input matInput autocomplete=\"off\" [value]=\"communicationList.pushMessage.title\" readonly>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"formfield-pb-0\">\n          <mat-label translate>Push Notification</mat-label>\n          <textarea matInput autocomplete=\"off\" [value]=\"communicationList.pushMessage.message\" readonly></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-custom-card *ngIf=\"!communicationList\" [inputMessage]=\"'No Records Found'\">\n</app-custom-card>\n"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-details/communication-details.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mh-248 {\n  max-height: 248px !important;\n  overflow-y: auto; }\n\n.mh-350 {\n  max-height: 350px !important;\n  overflow-y: auto; }\n\n.last-border-none .mat-list-item {\n  height: auto; }\n\n.last-border-none .border-bottom:last-child {\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvY29tbXVuaWNhdGlvbi9zY2hvb2wtY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdGlvbi1kZXRhaWxzL2NvbW11bmljYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLDRCQUE0QjtFQUM1QixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSw0QkFBNEI7RUFDNUIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRVEsWUFBWSxFQUFBOztBQUZwQjtFQUtRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21tdW5pY2F0aW9uL3NjaG9vbC1jb21tdW5pY2F0aW9ucy9jb21tdW5pY2F0aW9uLWRldGFpbHMvY29tbXVuaWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm13LTU4NHtcbi8vICAgICBtYXgtd2lkdGg6IDU4MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5taC0yNDgge1xuICAgIG1heC1oZWlnaHQ6IDI0OHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5taC0zNTAge1xuICAgIG1heC1oZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxhc3QtYm9yZGVyLW5vbmUge1xuICAgIC5tYXQtbGlzdC1pdGVte1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5ib3JkZXItYm90dG9tOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-details/communication-details.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CommunicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationDetailsComponent", function() { return CommunicationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");











var CommunicationDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommunicationDetailsComponent, _super);
    function CommunicationDetailsComponent(communicationService, commonService, storeService, route, snackBar, dialogRef, _focusMonitor) {
        var _this = _super.call(this) || this;
        _this.communicationService = communicationService;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.route = route;
        _this.snackBar = snackBar;
        _this.dialogRef = dialogRef;
        _this._focusMonitor = _focusMonitor;
        _this.ApproveButton = true;
        _this.rejectButton = true;
        return _this;
    }
    CommunicationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.communicationId = params.id;
            }
        });
        this.communicationDetails();
    };
    CommunicationDetailsComponent.prototype.communicationDetails = function () {
        var _this = this;
        this.communicationService.communicationDetails(this.communicationId).subscribe(function (res) { return _this.communicationDeatilsResponse(res); });
    };
    CommunicationDetailsComponent.prototype.communicationDeatilsResponse = function (data) {
        if (data.communicationDetailsView != null) {
            this.communicationList = [];
            this.communicationList = data.communicationDetailsView;
            this.communicationList.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].Approved ? (this.rejectButton = true, this.ApproveButton = false) : this.ApproveButton = true;
            this.communicationList.status === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].Cancelled ? (this.rejectButton = false, this.ApproveButton = false) : this.rejectButton = true;
            this.communicationList.entryDate =
                (this.communicationList.entryDate == null) ? null : this.commonService.customDateFormat(this.communicationList.entryDate, this.getSchoolDateFormat()).date;
            this.communicationList.approvelDate =
                (this.communicationList.approvelDate == null) ? null : this.commonService.customDateFormat(this.communicationList.approvelDate, this.getSchoolDateFormat()).date;
        }
        else {
            this.communicationList = [];
        }
    };
    CommunicationDetailsComponent.prototype.approveCommunication = function () {
        this.openDialog(true);
    };
    CommunicationDetailsComponent.prototype.rejectCommunication = function () {
        this.openDialog(false);
    };
    CommunicationDetailsComponent.prototype.communicationResponse = function (data) {
        this.openSnackBar(data.messages.ResultMessage);
        this.communicationDetails();
        this.dialogRef.closeAll();
    };
    CommunicationDetailsComponent.prototype.download = function () {
        if (this.communicationList.emailContent.attachment.fileName !== null) {
            this.nameImgProp = this.storeService.getFilePath(this.communicationList.emailContent.attachment.fileName);
            window.open(this.nameImgProp);
        }
    };
    CommunicationDetailsComponent.prototype.openDialog = function (approveCommunication) {
        var title = approveCommunication ? app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].COMMUNICATION_APPROVE : app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].COMMUNICATION_REJECT;
        var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CustomDialogComponent"], {
            disableClose: true,
            data: {
                text: this.commonService.getTranslation(title),
                action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES
            },
        });
        this.dialogMethod(dialogRef, approveCommunication);
    };
    CommunicationDetailsComponent.prototype.dialogMethod = function (dialogRef, approveCommunication) {
        var _this = this;
        dialogRef.afterClosed().subscribe(function (action) {
            if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].NO) {
                _this.dialogRef.closeAll();
            }
            else if (approveCommunication && action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                _this.communicationService.approveCommunication(_this.communicationId).subscribe(function (data) { return _this.communicationResponse(data); }, function (error) {
                    _this.errorResponse(error);
                });
            }
            else if (!approveCommunication && action === app_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].YES) {
                _this.communicationService.rejectCommunication(_this.communicationId).subscribe(function (data) { return _this.communicationResponse(data); }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
        setTimeout(function () {
            _this._focusMonitor.stopMonitoring(document.getElementById('reject-button'));
            _this._focusMonitor.stopMonitoring(document.getElementById('navButton_1'));
        });
    };
    CommunicationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication-details',
            template: __webpack_require__(/*! ./communication-details.component.html */ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.html"),
            styles: [__webpack_require__(/*! ./communication-details.component.scss */ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"]])
    ], CommunicationDetailsComponent);
    return CommunicationDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"info-relative mt-32\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"edit-info\">\n    <button mat-raised-button color=\"primary\" class=\"text-uppercase mr-4\"\n      [routerLink]=\"['/communication/school-communications/communication-configuration']\" translate>{{'Back' | translate}}</button>\n\n    <button mat-button type=\"button\" (click)=\"getHelpText('Communication Details')\">\n      <mat-icon class=\"grey-600-fg\" >info</mat-icon>\n    </button>\n  </div>\n</div>\n\n<mat-tab-group [selectedIndex]=\"index\" (selectedIndexChange)=\"selected($event)\" class=\"manage-institue \">\n  <mat-tab label=\"{{'COMMUNICATION DETAILS' | translate}}\">\n    <div *ngIf=\"showCommunicationDetails\">\n      <app-communication-details [data]=\"selectedChanged\"></app-communication-details>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'MESSAGE TRANSMISSION' | translate}}\">\n    <div *ngIf=\"showMessageTransmission\">\n      <app-message-transmissions [data]=\"selectedChanged\"></app-message-transmissions>\n    </div>\n  </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbXVuaWNhdGlvbi9zY2hvb2wtY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdGlvbi1zZXR1cC9jb21tdW5pY2F0aW9uLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CommunicationSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationSetupComponent", function() { return CommunicationSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");




var CommunicationSetupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommunicationSetupComponent, _super);
    function CommunicationSetupComponent(commonService) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.showCommunicationDetails = true;
        return _this;
    }
    CommunicationSetupComponent.prototype.ngOnInit = function () {
    };
    // tab Selection
    CommunicationSetupComponent.prototype.selected = function (value) {
        this.index = value;
        switch (value) {
            case 0: {
                // statements; 
                this.showMessageTransmission = false;
                this.showCommunicationDetails = true;
                window.location.hash = 'CommunicationDetails';
                break;
            }
            case 1: {
                this.showMessageTransmission = true;
                this.showCommunicationDetails = false;
                window.location.hash = 'MessageTransmissions';
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
    CommunicationSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication-setup',
            template: __webpack_require__(/*! ./communication-setup.component.html */ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.html"),
            styles: [__webpack_require__(/*! ./communication-setup.component.scss */ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], CommunicationSetupComponent);
    return CommunicationSetupComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-40\">\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"p-24\" *ngIf=\"commData\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n        <mat-label translate>Communication Type</mat-label>\n        <input matInput required [(ngModel)]=\"commData.communicationType\" readonly>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-sm-20\">\n        <mat-label translate>Title</mat-label>\n        <input matInput required [(ngModel)]=\"commData.title\" readonly>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\">\n        <mat-label translate>Status</mat-label>\n        <input matInput required [(ngModel)]=\"commData.communicationStatus\" readonly>\n      </mat-form-field>\n\n    </div>\n    <mat-divider></mat-divider>\n  </div>\n</div>\n<mat-tab-group class=\"manage-institue mt-24\">\n    <mat-tab label=\"{{'STUDENT TRANSMISSIONS' | translate}}\">\n      <div>\n        <app-table [settings]='studenttabSettings' (getTableData)='tableData($event)'>\n        </app-table>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"{{'STAFF TRANSMISSIONS' | translate}}\">\n      <div>\n        <app-table [settings]='stafftabSettings' (getTableData)='tableStaffData($event)'>\n        </app-table>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbXVuaWNhdGlvbi9zY2hvb2wtY29tbXVuaWNhdGlvbnMvbWVzc2FnZS10cmFuc21pc3Npb25zL21lc3NhZ2UtdHJhbnNtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: MessageTransmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageTransmissionsComponent", function() { return MessageTransmissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MessageTransmissionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageTransmissionsComponent, _super);
    function MessageTransmissionsComponent(commonService, commService, route, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.commService = commService;
        _this.route = route;
        _this.snackBar = snackBar;
        _this.studentComponent = 'studentTransmissionsComponent';
        _this.staffComponent = 'staffTransmissionsComponent';
        _this.custRowsPerPageOptions = [];
        _this.clearPostModel();
        return _this;
    }
    MessageTransmissionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.commId = params.id;
            }
        });
        this.staffCols = [
            { field: 'staffRole', header: 'Staff Role', sort: true },
            { field: 'receipientName', header: 'Recipient Name', sort: true },
            { field: 'receipientContactInfo', header: 'Recipient Contact Info', sort: true },
            { field: 'transmissionDate', header: 'Transmission Date', sort: true },
            { field: 'type', header: 'Type', sort: true },
            { field: 'status', header: 'Status', sort: true },
        ];
        this.studentCols = [
            { field: 'studentName', header: 'StudentName', sort: true },
            { field: 'class', header: 'Class', sort: true },
            { field: 'section', header: 'Section', sort: true },
            { field: 'receipientName', header: 'Recipient Name', sort: true },
            { field: 'receipientContactInfo', header: 'Recipient Contact Info', sort: true },
            { field: 'transmissionDate', header: 'Transmission Date', sort: true },
            { field: 'type', header: 'Type', sort: true },
            { field: 'status', header: 'Status', sort: true },
        ];
        this.studenttabSettings = {
            rows: [],
            columns: this.studentCols,
            model: this.transSearchStudentView,
            componentName: this.studentComponent,
        };
        var modelStudentTableComponent = this.getModelComponent(this.studentComponent);
        if (modelStudentTableComponent) {
            this.transSearchStudentView = modelStudentTableComponent;
        }
        var modelStaffTableComponentt = this.getModelComponent(this.staffComponent);
        if (modelStaffTableComponentt) {
            this.transSearchStaffView = modelStaffTableComponentt;
        }
        this.tableData(this.transSearchStudentView);
        this.tableStaffData(this.transSearchStaffView);
    };
    MessageTransmissionsComponent.prototype.tableData = function (data) {
        var _this = this;
        this.transSearchStudentView = data;
        this.transSearchStudentView.communicationId = this.commId;
        var searchData = this.prepareModel(this.transSearchStudentView, data);
        this.commService.studentMessageTransmission(searchData).subscribe(function (res) { return _this.bindingData(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Binding Data To Table
    MessageTransmissionsComponent.prototype.bindingData = function (data) {
        this.commData = data.dataModel;
        this.custRowsPerPageOptions = [];
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            this.studentData = data.resultList.list;
            this.rows = this.setDateFormat(data.resultList.list);
            this.totalItems = data.resultList.totalItems;
        }
        if (data.resultList) {
            this.transSearchStudentView.pageNumber = data.resultList.pageNumber;
        }
        this.studenttabSettings = {
            columns: this.studentCols,
            model: this.transSearchStudentView,
            rows: this.rows,
            componentName: this.studentComponent,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            // padding: true,
            filtersList: data.filters
        };
    };
    MessageTransmissionsComponent.prototype.tableStaffData = function (data) {
        var _this = this;
        this.transSearchStaffView = data;
        this.transSearchStaffView.communicationId = this.commId;
        var searchData = this.prepareModel(this.transSearchStaffView, data);
        this.commService.staffMessageTransmission(searchData).subscribe(function (res) { return _this.bindingStaffData(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Binding Data To Table
    MessageTransmissionsComponent.prototype.bindingStaffData = function (data) {
        this.commData = data.dataModel;
        this.custRowsPerPageOptions = [];
        if (data.resultList == null) {
            this.rows = [];
        }
        else {
            this.staffData = data.resultList.list;
            this.rows = this.setDateFormat(data.resultList.list);
            this.totalItems = data.resultList.totalItems;
        }
        if (data.resultList) {
            this.transSearchStaffView.pageNumber = data.resultList.pageNumber;
        }
        this.stafftabSettings = {
            columns: this.staffCols,
            model: this.transSearchStaffView,
            rows: this.rows,
            componentName: this.staffComponent,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            // padding: true,
            filtersList: data.filters
        };
    };
    MessageTransmissionsComponent.prototype.clearPostModel = function () {
        this.transSearchStudentView = {
            communicationId: '',
            studentName: '',
            classIds: [],
            sectionIds: [],
            transmissionDateBegin: null,
            transmissionDateEnd: null,
            type: [],
            status: [],
            receipientName: '',
            receipientContactInfo: '',
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE
        };
        this.transSearchStaffView = {
            communicationId: '',
            transmissionDateBegin: null,
            transmissionDateEnd: null,
            type: [],
            status: [],
            receipientName: '',
            receipientContactInfo: '',
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SORT_ORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE
        };
    };
    MessageTransmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-transmissions',
            template: __webpack_require__(/*! ./message-transmissions.component.html */ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.html"),
            styles: [__webpack_require__(/*! ./message-transmissions.component.scss */ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], MessageTransmissionsComponent);
    return MessageTransmissionsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/communication/school-communications/school-communications-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/school-communications-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SchoolCommunicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolCommunicationsRoutingModule", function() { return SchoolCommunicationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_configuration_communication_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication-configuration/communication-configuration.component */ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.ts");
/* harmony import */ var _communication_setup_communication_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication-setup/communication-setup.component */ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.ts");
/* harmony import */ var _communication_details_communication_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./communication-details/communication-details.component */ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.ts");






var routes = [
    { path: 'communication-configuration', component: _communication_configuration_communication_configuration_component__WEBPACK_IMPORTED_MODULE_3__["CommunicationConfigurationComponent"], data: { title: 'Communication Configuration' } },
    { path: 'communication-configuration/communication-setup/:id', component: _communication_setup_communication_setup_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationSetupComponent"], data: { title: 'Communication Details' } },
    { path: 'communication-configuration/communication-details', component: _communication_details_communication_details_component__WEBPACK_IMPORTED_MODULE_5__["CommunicationDetailsComponent"], data: { title: 'Communication Details' } },
];
var SchoolCommunicationsRoutingModule = /** @class */ (function () {
    function SchoolCommunicationsRoutingModule() {
    }
    SchoolCommunicationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SchoolCommunicationsRoutingModule);
    return SchoolCommunicationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/communication/school-communications/school-communications.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/communication/school-communications/school-communications.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SchoolCommunicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolCommunicationsModule", function() { return SchoolCommunicationsModule; });
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
/* harmony import */ var _school_communications_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./school-communications-routing.module */ "./src/app/modules/communication/school-communications/school-communications-routing.module.ts");
/* harmony import */ var _communication_configuration_communication_configuration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./communication-configuration/communication-configuration.component */ "./src/app/modules/communication/school-communications/communication-configuration/communication-configuration.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/student-information-system/student-db.service */ "./src/app/service/student-information-system/student-db.service.ts");
/* harmony import */ var _communication_setup_communication_setup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./communication-setup/communication-setup.component */ "./src/app/modules/communication/school-communications/communication-setup/communication-setup.component.ts");
/* harmony import */ var _communication_details_communication_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./communication-details/communication-details.component */ "./src/app/modules/communication/school-communications/communication-details/communication-details.component.ts");
/* harmony import */ var _message_transmissions_message_transmissions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message-transmissions/message-transmissions.component */ "./src/app/modules/communication/school-communications/message-transmissions/message-transmissions.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_service_configuration_communication_types_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/service/configuration/communication-types.service */ "./src/app/service/configuration/communication-types.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/service/communication/communication-service */ "./src/app/service/communication/communication-service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");

























var SchoolCommunicationsModule = /** @class */ (function () {
    function SchoolCommunicationsModule() {
    }
    SchoolCommunicationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _communication_configuration_communication_configuration_component__WEBPACK_IMPORTED_MODULE_13__["CommunicationConfigurationComponent"], _communication_setup_communication_setup_component__WEBPACK_IMPORTED_MODULE_16__["CommunicationSetupComponent"], _communication_details_communication_details_component__WEBPACK_IMPORTED_MODULE_17__["CommunicationDetailsComponent"], _message_transmissions_message_transmissions_component__WEBPACK_IMPORTED_MODULE_18__["MessageTransmissionsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _school_communications_routing_module__WEBPACK_IMPORTED_MODULE_12__["SchoolCommunicationsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_3__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_19__["FuseMaterialColorPickerModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }, app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_14__["GradeSetupService"], app_service_student_information_system_student_db_service__WEBPACK_IMPORTED_MODULE_15__["StudentDBService"], app_service_communication_communication_service__WEBPACK_IMPORTED_MODULE_22__["CommunicationService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_23__["StaffCommonService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_24__["TypeService"], app_service_configuration_communication_types_service__WEBPACK_IMPORTED_MODULE_20__["CommunicationTypesService"], app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_21__["StatusService"]
            ],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SchoolCommunicationsModule);
    return SchoolCommunicationsModule;
}());



/***/ }),

/***/ "./src/app/service/academic-service/api/status.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/academic-service/api/status.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
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







var StatusService = /** @class */ (function () {
    function StatusService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
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
    StatusService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StatusService.prototype.getAllStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getAllStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Status/GetStatuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Payment Statuses
     *
     * @param code Gets or sets code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StatusService.prototype.paymentStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling paymentStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
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
        return this.httpClient.get(this.basePath + "/Payment/statuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/service/staff/staffCommon.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/staff/staffCommon.service.ts ***!
  \******************************************************/
/*! exports provided: StaffCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffCommonService", function() { return StaffCommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../url.config */ "./src/app/url.config.ts");
/**
 * Teacher API
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







var StaffCommonService = /** @class */ (function () {
    function StaffCommonService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Teacher;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
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
    StaffCommonService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StaffCommonService.prototype.fetchStaffTypes = function (observe, reportProgress) {
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
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService.prototype.fetchStaffs = function (staffTypeCode, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (staffTypeCode !== undefined && staffTypeCode !== null) {
            queryParameters = queryParameters.set('staffTypeCode', staffTypeCode);
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
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Based_On_Code, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], StaffCommonService);
    return StaffCommonService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-communication-school-communications-school-communications-module.js.map