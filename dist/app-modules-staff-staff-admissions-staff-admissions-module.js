(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-staff-staff-admissions-staff-admissions-module"],{

/***/ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper class=\"custom-horizontal-step\" [linear]=\"true\" fxLayout=\"row\" fxFlex=\"100\" #stepper (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex, true)\"\n  (selectionChange)=\"OnSelectionChange($event)\">\n  <mat-step [stepControl]=\"applicantDetails\">\n    <form fxLayout=\"column\" [formGroup]=\"applicantDetails\" #applicantDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>Applicant Details</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>Applicant Details</span></div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #seekingPosition translate>Seeking Position</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','seekingPosition')\" (blur)=\"trimTextBoxSpaces('applicantDetails','seekingPosition')\" formControlName=\"seekingPosition\" matInput>\n          <mat-error>\n            <app-validation [labelName]='seekingPosition.innerText'\n              [validationControl]=\"applicantDetails.controls.seekingPosition\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n          class=\"px-sm-20\">\n          <mat-label #personTitleTypeId translate>Select Suffix</mat-label>\n          <mat-select formControlName=\"personTitleTypeId\">\n            <mat-option *ngFor=\"let suffix of suffixType\" [value]=\"suffix.id\">{{suffix.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #firstname translate>firstname</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','firstName')\" (blur)=\"trimTextBoxSpaces('applicantDetails','firstName')\"\n            formControlName=\"firstName\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='firstname.innerText' [validationControl]=\"applicantDetails.controls.firstName\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n          class=\"px-sm-20\">\n          <mat-label #middlename translate>middlename</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','middleName')\" (blur)=\"trimTextBoxSpaces('applicantDetails','middleName')\"\n            formControlName=\"middleName\" matInput>\n          <mat-error>\n            <app-validation [labelName]='middlename.innerText'\n              [validationControl]=\"applicantDetails.controls.middleName\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #lastName translate>lastname</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','lastName')\" (blur)=\"trimTextBoxSpaces('applicantDetails','lastName')\"\n            formControlName=\"lastName\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='lastName.innerText' [validationControl]=\"applicantDetails.controls.lastName\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"icon-center\">\n          <mat-label #dateofbirth translate>Date Of Birth</mat-label>\n          <input matInput (keyup)=\"forceValidation('dateOfBirth',applicantDetails)\" [matDatepicker]=\"dateOfBirth\"\n            [max]=\"currentDate\" formControlName=\"dateOfBirth\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"dateOfBirth\"></mat-datepicker-toggle>\n          <mat-datepicker #dateOfBirth></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='dateofbirth.innerText'\n              [validationControl]=\"applicantDetails.controls.dateOfBirth\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n          class=\"px-sm-20\">\n          <mat-label #aadhaarNumber translate>Aadhaar Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','aadhaarNumber')\" (blur)=\"trimTextBoxSpaces('applicantDetails','aadhaarNumber')\"\n            formControlName=\"aadhaarNumber\" matInput>\n          <mat-error>\n            <app-validation [labelName]='aadhaarNumber.innerText'\n              [validationControl]=\"applicantDetails.controls.aadhaarNumber\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #panNumber translate>panNumber</mat-label>\n          <input (keyup)=\"preventSpace($event,'applicantDetails','panNumber')\" (blur)=\"trimTextBoxSpaces('applicantDetails','panNumber')\"\n            formControlName=\"panNumber\" matInput>\n          <mat-error>\n            <app-validation [labelName]='panNumber.innerText' [validationControl]=\"applicantDetails.controls.panNumber\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #genderTypeId translate>gender</mat-label>\n          <mat-select formControlName=\"genderTypeId\" required>\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">{{gender.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='genderTypeId.innerText'\n              [validationControl]=\"applicantDetails.controls.genderTypeId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"px-sm-20\"\n          fxFlex.gt-sm=\"36\">\n          <mat-label #maritalStatusTypeId translate>Marital Status</mat-label>\n          <mat-select formControlName=\"maritalStatusTypeId\">\n            <mat-option *ngIf=\"maritalTypes?.length\"></mat-option>\n            <mat-option *ngFor=\"let maritalStatus of maritalTypes\" [value]=\"maritalStatus.id\">{{maritalStatus.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='maritalStatusTypeId.innerText'\n              [validationControl]=\"applicantDetails.controls.maritalStatusTypeId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #nationalityCountryId translate>Nationality</mat-label>\n          <mat-select formControlName=\"nationalityCountryId\" required>\n            <mat-option *ngFor=\"let country of countryOptionsSelect\" [value]=\"country.id\">{{country.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='nationalityCountryId.innerText'\n              [validationControl]=\"applicantDetails.controls.nationalityCountryId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #religionTypeId translate>religion</mat-label>\n          <mat-select formControlName=\"religionTypeId\">\n            <mat-option *ngIf=\"religions?.length\"></mat-option>\n            <mat-option *ngFor=\"let religion of religions\" [value]=\"religion.id\">{{religion.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='religionTypeId.innerText'\n              [validationControl]=\"applicantDetails.controls.religionTypeId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"px-sm-20\"\n          fxFlex.gt-sm=\"36\">\n          <mat-label #casteTypeId translate>caste</mat-label>\n          <mat-select formControlName=\"casteTypeId\">\n            <mat-option *ngIf=\"casts?.length\"></mat-option>\n            <mat-option *ngFor=\"let cast of casts\" [value]=\"cast.id\">{{cast.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='casteTypeId.innerText'\n              [validationControl]=\"applicantDetails.controls.casteTypeId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"66\">\n          <mat-label #languagesSpoken translate>Languages Spoken</mat-label>\n          <textarea (keyup)=\"preventSpace($event,'applicantDetails','languagesSpoken')\" formControlName=\"languagesSpoken\" matInput></textarea>\n          <mat-error>\n            <app-validation [labelName]='languagesSpoken.innerText'\n              [validationControl]=\"applicantDetails.controls.languagesSpoken\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button #resetButtonStepper mat-raised-button id=\"resetButtonStepper\" (click)=\"onCancel()\" type=\"reset\"\n          class=\"text-uppercase mr-12\">\n          {{'Cancel' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"experienceDetails\" [optional]=\"isNestedObjectEmpty(experienceDetails.value)\">\n    <form fxLayout=\"column\" [formGroup]=\"experienceDetails\" #experienceDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>Work Experience Summary</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>Work Experience Summary</span></div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n          <mat-label #years translate>Years</mat-label>\n          <input (keyup)=\"preventSpace($event,'experienceDetails','years')\" (blur)=\"trimTextBoxSpaces('experienceDetails','years')\"\n            formControlName=\"years\" matInput>\n          <mat-error>\n            <app-validation [labelName]='years.innerText' [validationControl]=\"experienceDetails.controls.years\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n          class=\"px-sm-20\">\n          <mat-label #months translate>Months</mat-label>\n          <input (keyup)=\"preventSpace($event,'experienceDetails','months')\" (blur)=\"trimTextBoxSpaces('experienceDetails','months')\"\n            formControlName=\"months\" matInput>\n          <mat-error>\n            <app-validation [labelName]='months.innerText' [validationControl]=\"experienceDetails.controls.months\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n          <mat-label #specialQualifications translate>Special Qualifications</mat-label>\n          <textarea (blur)=\"trimTextBoxSpaces('experienceDetails','specialQualifications')\" (keyup)=\"preventSpace($event,'experienceDetails','specialQualifications')\" formControlName=\"specialQualifications\" matInput></textarea>\n          <mat-error>\n            <app-validation [labelName]='specialQualifications.innerText'\n              [validationControl]=\"experienceDetails.controls.specialQualifications\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\"\n          class=\"pl-sm-20\">\n          <mat-label #references translate>References</mat-label>\n          <textarea (blur)=\"trimTextBoxSpaces('experienceDetails','references')\"  (keyup)=\"preventSpace($event,'experienceDetails','references')\" formControlName=\"references\" matInput></textarea>\n          <mat-error>\n            <app-validation [labelName]='references.innerText'\n              [validationControl]=\"experienceDetails.controls.references\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div formArrayName=\"experienceListView\" fxLayout=\"column\"\n        *ngFor=\"let itemrow of addNewRowExperienceform.controls; let i=index\" class=\"border-bottom pb-20 mb-20\">\n        <div [formGroupName]=\"i\" fxLayout=\"column\">\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"34\" class=\"icon-center pr-sm-16\">\n              <mat-label #StartDate translate>Start Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('startDate',itemrow)\" [matDatepicker]=\"startDate\"\n                [max]=\"currentDate\" formControlName=\"startDate\" required>\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='StartDate.innerText' [validationControl]=\"itemrow.controls.startDate\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"36\"\n              class=\"pr-sm-16 icon-center\">\n              <mat-label #endDates translate>End Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('endDate',itemrow)\" [matDatepicker]=\"endDate\" [min]=\"itemrow.controls.startDate.value\"\n                [max]=\"currentDate\" formControlName=\"endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate [startAt]=\"itemrow.controls.startDate.value\"></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='endDates.innerText' [validationControl]=\"itemrow.controls.endDate\"\n                  [doValidate]=\"true\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n              <mat-label #currency translate>currency</mat-label>\n              <input  (keyup)=\"preventSpaceForArray($event, itemrow.controls.currency)\"   (blur)=\"trimSpacess('experienceDetails','experienceListView',i,'currency')\" formControlName=\"currency\" matInput>\n              <mat-error>\n                <app-validation [labelName]='currency.innerText' [validationControl]=\"itemrow.controls.currency\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>         \n          </div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" >\n              <mat-label #salary translate>salary</mat-label>\n              <input  (keyup)=\"preventSpaceForArray($event, itemrow.controls.salary)\"  (blur)=\"trimSpacess('experienceDetails','experienceListView',i,'salary')\" formControlName=\"salary\" matInput>\n              <mat-error>\n                <app-validation [labelName]='salary.innerText' [validationControl]=\"itemrow.controls.salary\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"  class=\"px-sm-20\">\n              <mat-label #companyName translate>Company</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.companyName)\" (blur)=\"trimSpacess('experienceDetails','experienceListView',i,'companyName')\" formControlName=\"companyName\" matInput required>\n              <mat-error>\n                <app-validation [labelName]='companyName.innerText'\n                  [validationControl]=\"itemrow.controls.companyName\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label #designation translate>designation</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.designation)\" (blur)=\"trimSpacess('experienceDetails','experienceListView',i,'designation')\" formControlName=\"designation\" matInput required>\n              <mat-error>\n                <app-validation [labelName]='designation.innerText'\n                  [validationControl]=\"itemrow.controls.designation\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill>\n              <mat-label #jobDescription translate>Job Description</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.description)\" (blur)=\"trimSpacess('experienceDetails','experienceListView',i,'description')\" formControlName=\"description\" matInput>\n              <mat-error>\n                <app-validation [labelName]='jobDescription.innerText'\n                  [validationControl]=\"itemrow.controls.description\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div>\n\n          <button *ngIf=\"itemrow.value.isRemoveVisible\" mat-raised-button type=\"button\"\n            class=\"text-uppercase pr-16 pl-8 mr-12\" color=\"primary\" (click)=\"deleteRow(i)\">\n            <mat-icon class=\"pt-4 font-size-14\">clear</mat-icon>Remove\n          </button>\n\n          <button *ngIf=\"itemrow.value.isAddVisible\" mat-raised-button color=\"accent\" class=\"text-uppercase pr-16 pl-8\"\n            type=\"button\" (click)=\"addNewRow()\" [disabled]=\"isDisabled || !experienceDetails.valid\">\n            <mat-icon class=\"pt-4 font-size-14\">add</mat-icon><span translate>Add</span>\n          </button>\n          \n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"contactDetails\">\n    <form fxLayout=\"column\" [formGroup]=\"contactDetails\" #contactDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>contactInfo</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>contactInfo</span></div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #email1 translate>primaryEmail</mat-label>\n          <input (keyup)=\"preventSpace($event,'contactDetails','email1')\" (blur)=\"trimTextBoxSpaces('contactDetails','email1')\"\n            formControlName=\"email1\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='email1.innerText' [validationControl]=\"contactDetails.controls.email1\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n          class=\"pl-sm-24\">\n          <mat-label #email2 translate>secondaryEmail</mat-label>\n          <input (keyup)=\"preventSpace($event,'contactDetails','email2')\" (blur)=\"trimTextBoxSpaces('contactDetails','email2')\"\n            formControlName=\"email2\" matInput>\n          <mat-error>\n            <app-validation [labelName]='email2.innerText' [validationControl]=\"contactDetails.controls.email2\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n      </div>\n\n      <div *ngIf=\"loaded\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n          class=\"coutline\">\n          <mat-label #mobileTel translate>mobilenumber</mat-label>\n          <input type=\"text\" required matInput formControlName=\"mobileTel\" ng2TelInput\n            (hasError)=\"onError($event,'mobileTel','contactDetails')\" [ng2TelInputOptions]=\"telOptions\"\n            (ng2TelOutput)=\"getNumber($event,'mobileTel','contactDetails')\"\n            (countryChange)=\"onCountryChangeMobile($event,'mobileTel','contactDetails')\" />\n          <mat-error>\n            <app-validation [labelName]='mobileTel.innerText' [validationControl]=\"contactDetails.controls.mobileTel\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n          class=\"pl-sm-20 coutline\">\n          <mat-label #landTel translate>landlinenumber</mat-label>\n          <input type=\"text\" matInput formControlName=\"landTel\" ng2TelInput\n            (hasError)=\"onError($event,'landTel','contactDetails')\" [ng2TelInputOptions]=\"telOptions\"\n            (ng2TelOutput)=\"getNumber($event,'landTel','contactDetails')\"\n            (countryChange)=\"onCountryChangeMobile($event,'landTel','contactDetails')\" />\n          <mat-error>\n            <app-validation [labelName]='landTel.innerText' [validationControl]=\"contactDetails.controls.landTel\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"loaded\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" class=\"coutline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #otherTel translate>alternatenumber</mat-label>\n          <input type=\"text\" matInput formControlName=\"otherTel\" ng2TelInput\n            (hasError)=\"onError($event,'otherTel','contactDetails')\" [ng2TelInputOptions]=\"telOptions\"\n            (ng2TelOutput)=\"getNumber($event,'otherTel','contactDetails')\"\n            (countryChange)=\"onCountryChangeMobile($event,'otherTel','contactDetails')\" />\n          <mat-error>\n            <app-validation [labelName]='otherTel.innerText' [validationControl]=\"contactDetails.controls.otherTel\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"addressInfo\">\n    <form fxLayout=\"column\" [formGroup]=\"addressInfo\" #addressInfoForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>addressInfo</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>addressInfo</span></div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #addressLine1 translate>addressline1</mat-label>\n          <input (keyup)=\"preventSpace($event,'addressInfo','addressLine1')\" (blur)=\"trimTextBoxSpaces('addressInfo','addressLine1')\"\n            formControlName=\"addressLine1\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='addressLine1.innerText' [validationControl]=\"addressInfo.controls.addressLine1\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-20\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #addressLine2 translate>addressline2</mat-label>\n          <input (keyup)=\"preventSpace($event,'addressInfo','addressLine2')\" (blur)=\"trimTextBoxSpaces('addressInfo','addressLine2')\"\n            formControlName=\"addressLine2\" matInput>\n          <mat-error>\n            <app-validation [labelName]='addressLine2.innerText' [validationControl]=\"addressInfo.controls.addressLine2\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #addressCity translate>city</mat-label>\n          <input (keyup)=\"preventSpace($event,'addressInfo','addressCity')\" (blur)=\"trimTextBoxSpaces('addressInfo','addressCity')\" formControlName=\"addressCity\"\n            matInput required>\n          <mat-error>\n            <app-validation [labelName]='addressCity.innerText' [validationControl]=\"addressInfo.controls.addressCity\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-20\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #addressCountryId translate>country</mat-label>\n          <mat-select formControlName=\"addressCountryId\" required (selectionChange)=\"countryChanged($event)\">\n            <mat-option *ngFor=\"let country of countryOptionsSelect\" [value]=\"country.id\">{{country.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='addressCountryId.innerText'\n              [validationControl]=\"addressInfo.controls.addressCountryId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #addressStateId translate>state</mat-label>\n          <mat-select formControlName=\"addressStateId\" required>\n            <mat-option *ngFor=\"let state of stateOptionsSelect\" [value]=\"state.id\">{{state.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='addressStateId.innerText'\n              [validationControl]=\"addressInfo.controls.addressStateId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-20\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #addressPincode translate>pincode</mat-label>\n          <input (keyup)=\"preventSpace($event,'addressInfo','addressPincode')\" (blur)=\"trimTextBoxSpaces('addressInfo','addressPincode')\" formControlName=\"addressPincode\"\n            matInput required>\n          <mat-error>\n            <app-validation [labelName]='addressPincode.innerText' [validationControl]=\"addressInfo.controls.addressPincode\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"passportDetails\" [optional]=\"isNestedObjectEmpty(this.passportDetails.value) && !issueDatepicker?.value && !expiryDatepicker?.value\">\n    <form fxLayout=\"column\" [formGroup]=\"passportDetails\" #passportDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>Passport Info</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>Passport Info</span></div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #passportFullName translate>Full Name</mat-label>\n          <input (keyup)=\"preventSpace($event,'passportDetails','passportFullName')\" (blur)=\"trimTextBoxSpaces('passportDetails','passportFullName')\"\n            formControlName=\"passportFullName\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='passportFullName.innerText' [validationControl]=\"passportDetails.controls.passportFullName\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-20\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #passportNumber translate>Passport Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'passportDetails','passportNumber')\" (blur)=\"trimTextBoxSpaces('passportDetails','passportNumber')\"\n            formControlName=\"passportNumber\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='passportNumber.innerText'\n              [validationControl]=\"passportDetails.controls.passportNumber\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n          <mat-label #passportPlaceOfIssue translate>placeOfIssue</mat-label>\n          <input (keyup)=\"preventSpace($event,'passportDetails','passportPlaceOfIssue')\" (blur)=\"trimTextBoxSpaces('passportDetails','passportPlaceOfIssue')\"\n            formControlName=\"passportPlaceOfIssue\" matInput required>\n          <mat-error>\n            <app-validation [labelName]='passportPlaceOfIssue.innerText'\n              [validationControl]=\"passportDetails.controls.passportPlaceOfIssue\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pl-sm-20\"\n          fxFlex.gt-sm=\"50\">\n          <mat-label #passportIssueCountryId translate>country</mat-label>\n          <mat-select formControlName=\"passportIssueCountryId\" required>\n            <mat-option *ngFor=\"let country of countryOptionsSelect\" [value]=\"country.id\">{{country.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='passportIssueCountryId.innerText'\n              [validationControl]=\"passportDetails.controls.passportIssueCountryId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"icon-center\">\n          <mat-label #dateOfIssue translate>dateOfIssue</mat-label>\n          <input #issueDatepicker matInput (keyup)=\"forceValidation('passportDateOfIssue',passportDetails)\"\n            [matDatepicker]=\"passportDateOfIssue\" [max]=\"currentDate\" formControlName=\"passportDateOfIssue\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"passportDateOfIssue\"></mat-datepicker-toggle>\n          <mat-datepicker #passportDateOfIssue></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='dateOfIssue.innerText'\n              [validationControl]=\"passportDetails.controls.passportDateOfIssue\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n          class=\"pl-sm-20 icon-center\">\n          <mat-label #expiryDate translate>expiryDate</mat-label>\n          <input matInput #expiryDatepicker (keyup)=\"forceValidation('passportExpiryDate',passportDetails)\"\n            [matDatepicker]=\"passportExpiryDate\" formControlName=\"passportExpiryDate\" required [min]=\"passportDetails.value.passportDateOfIssue\">\n          <mat-datepicker-toggle matSuffix [for]=\"passportExpiryDate\"></mat-datepicker-toggle>\n          <mat-datepicker #passportExpiryDate></mat-datepicker>\n          <mat-error>\n            <app-validation [labelName]='expiryDate.innerText'\n              [validationControl]=\"passportDetails.controls.passportExpiryDate\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n\n  <mat-step [stepControl]=\"educationDetails\">\n    <form fxLayout=\"column\" [formGroup]=\"educationDetails\" #educationDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>educationDetails</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>educationDetails</span></div>\n      <div formArrayName=\"educationalListView\" fxLayout=\"column\"\n        *ngFor=\"let itemrow of addNewRowEducationDetailsform.controls; let i=index\" class=\"border-bottom pb-20 mb-20\">\n        <div [formGroupName]=\"i\" fxLayout=\"column\">\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label #university translate>university</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.university)\"  (blur)=\"trimSpacess('educationDetails','educationalListView',i,'university')\" formControlName=\"university\" matInput>\n              <mat-error>\n                <app-validation [labelName]='university.innerText' [validationControl]=\"itemrow.controls.university\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n              class=\"px-sm-24\">\n              <mat-label #institution translate>institute</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.institution)\"  (blur)=\"trimSpacess('educationDetails','educationalListView',i,'institution')\" formControlName=\"institution\" matInput>\n              <mat-error>\n                <app-validation [labelName]='institution.innerText' [validationControl]=\"itemrow.controls.institution\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label #qualification translate>Qualification/ Course</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.qualification)\"  (blur)=\"trimSpacess('educationDetails','educationalListView',i,'qualification')\" formControlName=\"qualification\" matInput required>\n              <mat-error>\n                <app-validation [labelName]='qualification.innerText'\n                  [validationControl]=\"itemrow.controls.qualification\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label #specialization translate>specialization</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.specialization)\" (blur)=\"trimSpacess('educationDetails','educationalListView',i,'specialization')\" formControlName=\"specialization\" matInput>\n              <mat-error>\n                <app-validation [labelName]='specialization.innerText'\n                  [validationControl]=\"itemrow.controls.specialization\" [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n              class=\"px-sm-24\">\n              <mat-label #result translate>result</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.result)\" (keyup)=\"preventSpace($event)\" (blur)=\"trimSpacess('educationDetails','educationalListView',i,'result')\" formControlName=\"result\" matInput>\n              <mat-error>\n                <app-validation [labelName]='result.innerText' [validationControl]=\"itemrow.controls.result\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"icon-center\">\n              <mat-label #eduStartDate translate>Start Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('startDate',itemrow)\" [matDatepicker]=\"startDate\"\n                required [max]=\"currentDate\" formControlName=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='eduStartDate.innerText' [validationControl]=\"itemrow.controls.startDate\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n              class=\"px-sm-20 icon-center\">\n              <mat-label #eduEndDate translate>End Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('endDate',itemrow)\" [matDatepicker]=\"endDate\" [min]=\"itemrow.controls.startDate.value\"\n                [max]=\"currentDate\" formControlName=\"endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='eduEndDate.innerText' [validationControl]=\"itemrow.controls.endDate\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n\n        </div>\n        <div class=\"pt-12\">\n          <button *ngIf=\"itemrow.value.isRemoveVisible\" mat-raised-button type=\"button\"\n            class=\"text-uppercase pr-16 pl-8 mr-12\" color=\"primary\" (click)=\"deleteRowEducation(i)\">\n            <mat-icon class=\"pt-4 font-size-14\">clear</mat-icon>Remove\n          </button>\n\n          <button *ngIf=\"itemrow.value.isAddVisible\" mat-raised-button color=\"accent\" class=\"text-uppercase pr-16 pl-8\"\n            type=\"button\" (click)=\"addNewRowEducation()\" [disabled]=\"itemrow.invalid\">\n            <mat-icon class=\"pt-4 font-size-14\">add</mat-icon><span translate>Add</span>\n          </button>\n        </div>\n\n\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"trainingDetails\" [optional]=\"isNestedObjectEmptyy(this.trainingDetails.value)\">\n    <form fxLayout=\"column\" [formGroup]=\"trainingDetails\" #trainingDetailsForm=\"ngForm\">\n      <ng-template matStepLabel><span translate>trainingDetails</span></ng-template>\n      <div class=\"pt-24 font-size-18\"><span translate>trainingDetails</span></div>\n      <div formArrayName=\"trainingListView\" fxLayout=\"column\"\n        *ngFor=\"let itemrow of addNewRowTrainingDetailsform.controls; let i=index\" class=\"border-bottom pb-20 mb-20\">\n        <div [formGroupName]=\"i\" fxFlexFill fxLayout=\"column\">\n\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n              <mat-label #name translate>Name</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.name)\" required (blur)=\"trimSpacess('trainingDetails','trainingListView',i,'name')\"\n                formControlName=\"name\" matInput>\n              <mat-error>\n                <app-validation [labelName]='name.innerText' [validationControl]=\"itemrow.controls.name\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n              class=\"px-sm-20 icon-center\">\n              <mat-label #trStartDate translate>Start Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('startDate',itemrow)\" [matDatepicker]=\"startDate\"\n                [max]=\"currentDate\" required formControlName=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='trStartDate.innerText' [validationControl]=\"itemrow.controls.startDate\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"icon-center\">\n              <mat-label #trEndDate translate>End Date</mat-label>\n              <input matInput (keyup)=\"forceValidation('endDate',itemrow)\" [matDatepicker]=\"endDate\" [min]=\"itemrow.controls.startDate.value\"\n                [max]=\"currentDate\" formControlName=\"endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n              <mat-error>\n                <app-validation [labelName]='trEndDate.innerText' [validationControl]=\"itemrow.controls.endDate\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"pt-sm-12\">\n            <mat-label #description translate>Description</mat-label>\n            <textarea (keyup)=\"preventSpaceForArray($event, itemrow.controls.description)\" (blur)=\"trimSpacess('trainingDetails','trainingListView',i,'description')\" formControlName=\"description\" matInput></textarea>\n            <mat-error>\n              <app-validation [labelName]='description.innerText' [validationControl]=\"itemrow.controls.description\"\n                [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n          <!-- </div> -->\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-sm-12\" fxFlex=\"100\">\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n              <mat-label #company translate>Intitution / Company</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.institute)\" required (blur)=\"trimSpacess('trainingDetails','trainingListView',i,'institute')\"\n                formControlName=\"institute\" matInput>\n              <mat-error>\n                <app-validation [labelName]='company.innerText' [validationControl]=\"itemrow.controls.institute\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\"\n              class=\"pl-sm-20\">\n              <mat-label #location translate>location</mat-label>\n              <input (keyup)=\"preventSpaceForArray($event, itemrow.controls.location)\" (blur)=\"trimSpacess('trainingDetails','trainingListView',i,'location')\"\n                formControlName=\"location\" matInput>\n              <mat-error>\n                <app-validation [labelName]='location.innerText' [validationControl]=\"itemrow.controls.location\"\n                  [doValidate]=\"validate\">\n                </app-validation>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"pt-12\">\n          <button *ngIf=\"itemrow.value.isRemoveVisible\" mat-raised-button type=\"button\"\n            class=\"text-uppercase pr-16 pl-8 mr-12\" color=\"primary\" (click)=\"deleteRowTraining(i)\">\n            <mat-icon class=\"pt-4 font-size-14\">clear</mat-icon>Remove\n          </button>\n\n          <button *ngIf=\"itemrow.value.isAddVisible\" mat-raised-button color=\"accent\" class=\"text-uppercase pr-16 pl-8\"\n            type=\"button\" (click)=\"addNewRowTraining()\" [disabled]=\"!trainingDetails.valid\">\n            <mat-icon class=\"pt-4 font-size-14\">add</mat-icon><span translate>Add</span>\n          </button>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"uploadImages\" [optional]=\"isNestedObjectEmpty(uploadImages.value)\">\n    <form fxLayout=\"column\" [formGroup]=\"uploadImages\" #attachmentsForm=\"ngForm\">\n      <ng-template matStepLabel translate><span translate>Photo Attachment</span></ng-template>\n      <div class=\"py-24 font-size-18\"><span translate>Photo</span></div>\n      <div fxLayout=\"row\" class=\"branding-image\" fxLayoutAlign=\"center center\" class=\"my-24\">\n        <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center end\" class=\"pr-36\">\n          <div fxLayout=\"row\">\n            <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"photoImgInput.value='';photoImgInput.click()\">{{'Upload Image' | translate}}\n            </button>\n            <button mat-icon-button>\n              <mat-icon class=\"mb-4 grey-600-fg\" [style.visibility]=\"photoImgProp?.src ? 'visible' : 'hidden'\"\n                (click)=\"photoImgInput.value='';clearImages()\">highlight_off</mat-icon>\n            </button>\n            <input [accept]=\"'image/jpeg,image/jpg,image/png,image/*'\" id=\"photoImgInput\"\n              (change)=\"imgChanged(photoImgInput.files)\" fxHide type=\"file\" #photoImgInput>\n          </div>\n          <div class=\"pt-8 logo-name mr-36 break-word\" [style.visibility]=\"uploadImages?.value?.photoFileNameWithExtension ? 'visible' : 'hidden'\" [style.display]=\"photoImgProp?.src ? 'block' : 'none'\">\n            {{uploadImages?.value?.photoFileNameWithExtension}}</div>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center start\">\n          <div class=\"border symbolImage w-200 h-200\">\n            <img class=\"w-200 h-200\" [src]=\"photoImgProp?.src\" *ngIf=\"photoImgProp?.src\" alt=\"Launchship\" />\n          </div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"py-24 font-size-18\"><span translate>Resume</span></div>\n\n      <div fxLayout=\"row\" class=\"branding-image\" fxLayoutAlign=\"center center\" class=\"my-24\">\n        <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"center start\" class=\"pr-36\">\n          <div fxLayout=\"row\">\n            <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"resumeImgInput.value='';resumeImgInput.click()\">\n              <mat-icon class=\"mr-8\">attachment</mat-icon>{{'Upload Resume' | translate}}\n            </button>\n            <button mat-icon-button type=\"button\">\n              <mat-icon class=\"mb-4 grey-600-fg\" [style.display]=\"resumeImgProp?.src ? 'block' : 'none'\"\n                (click)=\"resumeImgInput.value='';clearImages(true)\">highlight_off</mat-icon>\n            </button>\n            <input [accept]=\"'.doc,.docx,image/jpeg,image/jpg,image/png,application/pdf,image/*'\" id=\"resumeImgInput\"\n              (change)=\"imgChanged(resumeImgInput.files,true)\" fxHide type=\"file\" #resumeImgInput>\n          </div>\n          <div class=\"pt-8 logo-name break-word\" [style.visibility]=\"uploadImages?.value?.FileNameWithExtension ? 'visible' : 'hidden'\" [style.display]=\"resumeImgProp?.src ? 'block' : 'none'\">\n            {{uploadImages?.value?.FileNameWithExtension}}</div>\n        </div>\n\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-sm-20 py-24 mt-sm-24\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n          {{'Next' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"addressInfo\">\n    <form fxLayout=\"column\" [formGroup]=\"addressInfo\" class=\"mt-sm-120\">\n      <ng-template matStepLabel><span translate>Complete</span></ng-template>\n      <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>Please verify the entered information before your final submit</div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n          {{'Previous' | translate}}\n        </button>\n        <button mat-raised-button matStepperNext type=\"submit\" color=\"accent\" class=\"text-uppercase\"\n          (click)=\"saveJobApplication()\">\n          {{'Submit' | translate}}\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n\n\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtYWRtaXNzaW9ucy9hZGQtam9iLWFwcGxpY2F0aW9ucy9hZGQtam9iLWFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddJobApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobApplicationsComponent", function() { return AddJobApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var AddJobApplicationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddJobApplicationsComponent, _super);
    function AddJobApplicationsComponent(dialogRef, _formBuilder, typeService, commonService, countryService, changeDetector, stateService, staffJobApplicationService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this._formBuilder = _formBuilder;
        _this.typeService = typeService;
        _this.commonService = commonService;
        _this.countryService = countryService;
        _this.changeDetector = changeDetector;
        _this.stateService = stateService;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.snackBar = snackBar;
        _this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.genders = [];
        _this.validate = true;
        _this.currentDate = _this.getDefaultDate();
        _this.telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
        _this.intialCountryCode = {
            mobileTel: _this.getcontactInfo('+91'),
            otherTel: _this.getcontactInfo('+91'),
            landTel: _this.getcontactInfo('+91')
        };
        _this.finalMobileNumbers = {
            mobileTel: _this.getcontactInfo(),
            otherTel: _this.getcontactInfo(),
            landTel: _this.getcontactInfo()
        };
        _this.interactedStepperIndex = 0;
        _this.loaded = false;
        _this.optionalMenus = [];
        _this.optionalMenus = [1, 4, 6];
        _this.initilizeForm();
        return _this;
    }
    AddJobApplicationsComponent.prototype.ngOnChanges = function (changes) {
        this.finalMobileNumbers = {
            mobileTel: this.getcontactInfo(),
            otherTel: this.getcontactInfo(),
            landTel: this.getcontactInfo()
        };
        this.interactedStepperIndex = 0;
    };
    AddJobApplicationsComponent.prototype.intializeModel = function () {
        this.jobApplicantDetails = {
            seekingPosition: null,
            passportFullName: null,
            passportNumber: null,
            passportDateOfIssue: null,
            passportPlaceOfIssue: '',
            passportExpiryDate: null,
            passportIssueCountryId: 0,
            workExperienceYear: 0,
            workExperienceMonth: 0,
            specialityQualification: '',
            reference: '',
            attachment: {
                fileName: null,
                fileValue: null
            }
        };
        this.jobApplicantDetails.applicationPerson = {
            personTitleTypeId: 0,
            genderTypeId: 0,
            middleName: '',
            firstName: '',
            lastName: '',
            aadhaarNumber: 0,
            panNumber: '',
            nationalityCountryId: 0,
            religionTypeId: 0,
            casteTypeId: 0,
            email1: '',
            email2: '',
            mobileTel: '',
            landTel: '',
            otherTel: '',
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressCountryId: 0,
            addressStateId: 0,
            addressPincode: '',
            dateOfBirth: null,
            languagesSpoken: '',
            maritalStatusTypeId: 0,
            attachment: {
                fileName: null,
                fileValue: null
            }
        };
        this.jobApplicantDetails.applicantEducationDetails = [{
                qualification: '',
                startDate: null,
                endDate: null,
                university: '',
                institution: '',
                specialization: '',
                result: ''
            }];
        this.jobApplicantDetails.applicantExperienceDetails = [{
                companyName: '',
                startDate: null,
                endDate: null,
                designation: '',
                description: '',
                salary: 0,
                reasonForChange: ''
            }];
        this.jobApplicantDetails.applicantTrainingDetails = [{
                name: '',
                startDate: null,
                endDate: null,
                location: '',
                description: '',
                institute: '',
                result: ''
            }];
    };
    AddJobApplicationsComponent.prototype.ngOnInit = function () {
        this.intializeModel();
        this.genderTypeList();
        this.countriesList();
        this.maritalStatusTypes();
        this.getCast();
        this.getReligion();
        this.suffixTypeList();
        this.changeDetector.detectChanges();
        this.loaded = true;
        this.changeDetector.detectChanges();
    };
    AddJobApplicationsComponent.prototype.getcontactInfo = function (data) {
        if (data === void 0) { data = null; }
        var contactInfo = {
            contactDetails: data,
        };
        return contactInfo;
    };
    // onCancelClick
    AddJobApplicationsComponent.prototype.onCancel = function () {
        this.interactedStepperIndex = 0;
        this.stepper.reset();
        this.applicantDetailsFormVC.resetForm();
        this.experienceDetailsFormVC.resetForm();
        this.addressInfoFormVC.resetForm();
        this.contactDetailsFormVC.resetForm();
        this.passportDetailsFormVC.resetForm();
        this.educationDetailsFormVC.resetForm();
        this.trainingDetailsFormVC.resetForm();
        this.attachmentsFormVC.resetForm();
        this.clearImages();
        this.clearImages(true);
        this.cancel.emit(true);
        var control = this.experienceDetails.controls['experienceListView'];
        for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        control.push(this.initItemRows());
    };
    AddJobApplicationsComponent.prototype.initilizeForm = function () {
        this.applicantDetailsForm();
        this.experienceDetailsForm();
        this.contactDetailsForm();
        this.addressInfoForm();
        this.passportDetailsForm();
        this.educationalDetailsForm();
        this.trainingDetailsForm();
        this.attachmentDetailsForm();
        this.uploadImages = this._formBuilder.group({
            FileNameWithExtension: [null],
            FileValue: [null],
            photoFileNameWithExtension: [null],
            photoFileValue: [null]
        });
    };
    AddJobApplicationsComponent.prototype.applicantDetailsForm = function () {
        this.applicantDetails = this._formBuilder.group({
            personTitleTypeId: [null],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            middleName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            seekingPosition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)],
            genderTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            maritalStatusTypeId: [null],
            aadhaarNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].AADHAR_PATTERN)]],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            panNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].PAN_PATTERN)]],
            nationalityCountryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            religionTypeId: [null],
            languagesSpoken: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            casteTypeId: [null],
        });
    };
    AddJobApplicationsComponent.prototype.contactDetailsForm = function () {
        this.contactDetails = this._formBuilder.group({
            email2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(90), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].EMAIL_PATTERN)]],
            mobileTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            landTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            otherTel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].INTL_MOBILE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            email1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(90), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].EMAIL_PATTERN)]],
        });
    };
    AddJobApplicationsComponent.prototype.addressInfoForm = function () {
        this.addressInfo = this._formBuilder.group({
            addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            addressLine2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            addressCountryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressStateId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            addressPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].PINCODE_PATTERN)]]
        });
    };
    AddJobApplicationsComponent.prototype.passportDetailsForm = function () {
        this.passportDetails = this._formBuilder.group({
            passportNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]],
            passportFullName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            passportPlaceOfIssue: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]],
            passportIssueCountryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passportDateOfIssue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passportExpiryDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddJobApplicationsComponent.prototype.attachmentDetailsForm = function () {
        this.photonResumeDetails = this._formBuilder.group({});
    };
    AddJobApplicationsComponent.prototype.experienceDetailsForm = function () {
        this.experienceDetails = this._formBuilder.group({
            years: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].NUMBER_PATTERN)]],
            months: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].NUMBER_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(11)]],
            specialQualifications: [null],
            references: [null],
            experienceListView: this._formBuilder.array([this.initItemRows()]),
        });
    };
    // list all your form controls here, which belongs to your form array
    AddJobApplicationsComponent.prototype.initItemRows = function () {
        return this._formBuilder.group({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1.00), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(99999999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(180)),
            isAddVisible: Boolean(true),
            isRemoveVisible: Boolean(false),
        });
    };
    Object.defineProperty(AddJobApplicationsComponent.prototype, "addNewRowExperienceform", {
        // return type for educaion details form  - addNewRowSchoolScheduleform
        get: function () {
            this.updateAddRemoveRow();
            return this.experienceDetails.get('experienceListView');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    AddJobApplicationsComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.experienceDetails.controls['experienceListView'];
        // add new formgroup
        control.push(this.initItemRows());
        this.updateAddRemoveRow();
        this.stepper.selected.interacted = false;
        this.setStepperInfo(this.stepper, 'experienceDetails');
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    AddJobApplicationsComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.experienceDetails.controls['experienceListView'];
        // remove the chosen row
        control.removeAt(index);
    };
    AddJobApplicationsComponent.prototype.updateAddRemoveRow = function () {
        var i = this.experienceDetails.controls.experienceListView.value.length;
        if (this.experienceDetails.controls.experienceListView.value.length > 1) {
            this.experienceDetails.controls.experienceListView.value.forEach(function (e) {
                e.isAddVisible = false;
                e.isRemoveVisible = true;
            });
            this.experienceDetails.controls.experienceListView.value[i - 1].isAddVisible = true;
            this.experienceDetails.controls.experienceListView.value[i - 1].isRemoveVisible = true;
        }
        else if (this.experienceDetails.controls.experienceListView.value.length === 1) {
            this.experienceDetails.controls.experienceListView.value[i - 1].isAddVisible = true;
            this.experienceDetails.controls.experienceListView.value[i - 1].isRemoveVisible = false;
        }
    };
    //#region  Education Details FormArray
    AddJobApplicationsComponent.prototype.educationalDetailsForm = function () {
        this.educationDetails = this._formBuilder.group({
            educationalListView: this._formBuilder.array([this.initEducationDetailsItemRows()]),
        });
    };
    // list all your form controls here, which belongs to your form array
    AddJobApplicationsComponent.prototype.initEducationDetailsItemRows = function () {
        return this._formBuilder.group({
            university: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            specialization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(180)]),
            result: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            isAddVisible: Boolean(true),
            isRemoveVisible: Boolean(false),
        });
    };
    Object.defineProperty(AddJobApplicationsComponent.prototype, "addNewRowEducationDetailsform", {
        // return type for educaion details form  - addNewRowSchoolScheduleform
        get: function () {
            this.updateAddRemoveRowEducation();
            return this.educationDetails.get('educationalListView');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    AddJobApplicationsComponent.prototype.addNewRowEducation = function () {
        // control refers to your formarray
        var controlArray = this.educationDetails.controls['educationalListView'];
        // add new formgroup
        controlArray.push(this.initEducationDetailsItemRows());
        // disable stepper interaction 
        this.updateAddRemoveRowEducation();
        this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    AddJobApplicationsComponent.prototype.deleteRowEducation = function (index) {
        // control refers to your formarray
        var control = this.educationDetails.controls['educationalListView'];
        // remove the chosen row 
        control.removeAt(index);
    };
    AddJobApplicationsComponent.prototype.updateAddRemoveRowEducation = function () {
        var i = this.educationDetails.controls.educationalListView.value.length;
        if (this.educationDetails.controls.educationalListView.value.length > 1) {
            this.educationDetails.controls.educationalListView.value.forEach(function (e) {
                e.isAddVisible = false;
                e.isRemoveVisible = true;
            });
            this.educationDetails.controls.educationalListView.value[i - 1].isAddVisible = true;
            this.educationDetails.controls.educationalListView.value[i - 1].isRemoveVisible = true;
        }
        else if (this.educationDetails.controls.educationalListView.value.length === 1) {
            this.educationDetails.controls.educationalListView.value[i - 1].isAddVisible = true;
            this.educationDetails.controls.educationalListView.value[i - 1].isRemoveVisible = false;
        }
    };
    //#endregion EducationDetails
    //#region  Training Details FormArray
    AddJobApplicationsComponent.prototype.trainingDetailsForm = function () {
        this.trainingDetails = this._formBuilder.group({
            trainingListView: this._formBuilder.array([this.initTrainingItemRows()]),
        });
    };
    // list all your form controls here, which belongs to your form array
    AddJobApplicationsComponent.prototype.initTrainingItemRows = function () {
        return this._formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            institute: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            isAddVisible: Boolean(true),
            isRemoveVisible: Boolean(false),
        });
    };
    Object.defineProperty(AddJobApplicationsComponent.prototype, "addNewRowTrainingDetailsform", {
        // return type for educaion details form  - addNewRowSchoolScheduleform
        get: function () {
            this.updateAddRemoveRowTraining();
            return this.trainingDetails.get('trainingListView');
        },
        enumerable: true,
        configurable: true
    });
    // Adding assessmentSubCategory details onClick ADD
    AddJobApplicationsComponent.prototype.addNewRowTraining = function () {
        // control refers to your formarray
        var control = this.trainingDetails.controls['trainingListView'];
        // add new formgroup
        control.push(this.initTrainingItemRows());
        this.updateAddRemoveRowEducation();
    };
    // Deleting a row of assessmentSubCategory details onClick ReMove
    AddJobApplicationsComponent.prototype.deleteRowTraining = function (index) {
        // control refers to your formarray
        var control = this.trainingDetails.controls['trainingListView'];
        // remove the chosen row
        control.removeAt(index);
    };
    AddJobApplicationsComponent.prototype.updateAddRemoveRowTraining = function () {
        var i = this.trainingDetails.controls.trainingListView.value.length;
        if (this.trainingDetails.controls.trainingListView.value.length > 1) {
            this.trainingDetails.controls.trainingListView.value.forEach(function (e) {
                e.isAddVisible = false;
                e.isRemoveVisible = true;
            });
            this.trainingDetails.controls.trainingListView.value[i - 1].isAddVisible = true;
            this.trainingDetails.controls.trainingListView.value[i - 1].isRemoveVisible = true;
        }
        else if (this.trainingDetails.controls.trainingListView.value.length === 1) {
            this.trainingDetails.controls.trainingListView.value[i - 1].isAddVisible = true;
            this.trainingDetails.controls.trainingListView.value[i - 1].isRemoveVisible = false;
        }
    };
    //#endregion Training Details FormArray
    // gender List
    AddJobApplicationsComponent.prototype.genderTypeList = function () {
        var _this = this;
        this.typeService.typeByCodeBasedOnCategory().subscribe(function (response) {
            _this.genders = response;
        });
    };
    AddJobApplicationsComponent.prototype.saveJobApplication = function () {
        var _this = this;
        this.setModelData();
        this.staffJobApplicationService.createJobApplication(this.jobApplicantDetails).subscribe(function (res) { return _this.response(res); }, function (error) {
            _this.errorResponse(error);
        });
        this.scrollIntoView('app-table');
    };
    AddJobApplicationsComponent.prototype.response = function (response) {
        document.getElementById('resetButtonStepper').click();
        this.openSnackBar(response.messages.ResultMessage);
    };
    AddJobApplicationsComponent.prototype.setModelData = function () {
        var _this = this;
        if (this.uploadImages !== undefined) {
            if (this.uploadImages.controls['FileNameWithExtension'].value !== undefined && this.uploadImages.controls['FileNameWithExtension'].value !== null) {
                this.jobApplicantDetails.attachment.fileName = this.uploadImages.controls['FileNameWithExtension'].value;
                this.jobApplicantDetails.attachment.fileValue = this.uploadImages.controls['FileValue'].value;
            }
            if (this.uploadImages.controls['photoFileNameWithExtension'].value !== undefined && this.uploadImages.controls['photoFileNameWithExtension'].value !== null) {
                this.jobApplicantDetails.applicationPerson.attachment.fileName = this.uploadImages.controls['photoFileNameWithExtension'].value;
                this.jobApplicantDetails.applicationPerson.attachment.fileValue = this.uploadImages.controls['photoFileValue'].value;
            }
        }
        Object.assign(this.jobApplicantDetails.applicationPerson, this.contactDetails.value, this.addressInfo.value, this.applicantDetails.value);
        Object.assign(this.jobApplicantDetails, this.passportDetails.value);
        // Object.assign(this.jobApplicantDetails.applicationPerson, this.finalMobileNumbers);
        this.jobApplicantDetails.seekingPosition = this.applicantDetails.controls['seekingPosition'].value;
        this.jobApplicantDetails.workExperienceYear = this.experienceDetails.controls['years'].value;
        this.jobApplicantDetails.workExperienceMonth = this.experienceDetails.controls['months'].value;
        this.jobApplicantDetails.specialityQualification = this.experienceDetails.controls['specialQualifications'].value;
        Object.assign(this.jobApplicantDetails.applicationPerson, this.resetMobileNumbers('contactDetails'));
        this.jobApplicantDetails.reference = this.experienceDetails.controls['references'].value;
        this.jobApplicantDetails.applicantExperienceDetails = [];
        this.jobApplicantDetails.applicantTrainingDetails = [];
        this.jobApplicantDetails.applicantEducationDetails = [];
        if (this.experienceDetails.controls['experienceListView'].value !== undefined) {
            this.experienceDetails.controls['experienceListView'].value.forEach(function (s) {
                delete s.isAddVisible;
                delete s.isRemoveVisible;
            });
            if (!this.isNestedObjectEmpty(this.experienceDetails.value)) {
                this.jobApplicantDetails.applicantExperienceDetails = this.experienceDetails.controls['experienceListView'].value;
            }
        }
        if (this.trainingDetails.controls['trainingListView'].value !== undefined) {
            this.trainingDetails.controls['trainingListView'].value.forEach(function (t) {
                delete t.isAddVisible;
                delete t.isRemoveVisible;
                if (!_this.isNestedObjectEmpty(t)) {
                    _this.jobApplicantDetails.applicantTrainingDetails.push(t);
                }
            });
        }
        if (this.educationDetails.controls['educationalListView'].value !== undefined) {
            this.educationDetails.controls['educationalListView'].value.forEach(function (e) {
                delete e.isAddVisible;
                delete e.isRemoveVisible;
            });
            if (!this.isNestedObjectEmpty(this.educationDetails.value)) {
                this.jobApplicantDetails.applicantEducationDetails = this.educationDetails.controls['educationalListView'].value;
            }
        }
    };
    AddJobApplicationsComponent.prototype.isNestedObjectEmpty = function (obj, checkKey) {
        if (checkKey === void 0) { checkKey = false; }
        var isEmpty = true;
        for (var key in obj) {
            if (key === 'isAddVisible' || (key === 'isRemoveVisible')) {
                continue;
            }
            if (checkKey && key === checkKey) {
                continue;
            }
            if (obj[key] !== null && obj[key] !== '') {
                if (typeof (obj[key]) === 'object') {
                    if (obj[key] !== 'isAddVisible' || (obj[key] !== 'isRemoveVisible')) {
                        isEmpty = this.isNestedObjectEmpty(obj[key]);
                    }
                }
                else {
                    return false;
                }
            }
        }
        return isEmpty;
    };
    AddJobApplicationsComponent.prototype.imgChanged = function (event, resume) {
        var _this = this;
        if (resume === void 0) { resume = false; }
        if (this.checkFileSize(event[0], app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
            return;
        }
        if (event && event.length > 0) {
            var reader_1 = new FileReader();
            var file = event[0];
            reader_1.readAsDataURL(file);
            var image = void 0;
            image = new Image();
            image.src = reader_1.result;
            var that_1 = this;
            reader_1.onload = function () {
                if (resume) {
                    that_1.uploadImages.controls.FileNameWithExtension.setValue(event[0].name);
                    that_1.uploadImages.controls.FileValue.setValue(reader_1.result.split(',')[1]);
                    _this.resumeImgProp = {
                        src: reader_1.result
                    };
                }
                else {
                    that_1.uploadImages.controls['photoFileNameWithExtension'].setValue(event[0].name);
                    that_1.uploadImages.controls['photoFileValue'].setValue(reader_1.result.split(',')[1]);
                    _this.photoImgProp = {
                        src: reader_1.result
                    };
                }
                that_1.changeDetector.detectChanges();
            };
        }
    };
    AddJobApplicationsComponent.prototype.clearImages = function (resume) {
        if (resume === void 0) { resume = false; }
        if (resume) {
            this.resumeImgProp = {};
            this.uploadImages.controls.FileNameWithExtension.patchValue(null);
            this.uploadImages.controls.FileValue.patchValue(null);
        }
        else {
            this.photoImgProp = {};
            this.uploadImages.controls.photoFileNameWithExtension.patchValue('');
            this.uploadImages.controls.photoFileValue.patchValue('');
        }
        this.changeDetector.detectChanges();
    };
    AddJobApplicationsComponent.prototype.validateFormArra = function (event) {
        this.isNestedObjectEmpty(event);
    };
    AddJobApplicationsComponent.prototype.countriesList = function () {
        var _this = this;
        this.stateOptionsSelect = [];
        this.countryService.countryAllCountriesGet().subscribe(function (data) {
            _this.countryOptionsSelect = data.commonViewModel;
        });
    };
    AddJobApplicationsComponent.prototype.countryChanged = function (e) {
        var _this = this;
        this.addressInfo.controls['addressStateId'].patchValue('');
        if (e) {
            this.stateOptionsSelect = [];
            this.stateService.stateAllStatesGet(e.value).subscribe(function (data) {
                _this.stateOptionsSelect = data.states;
            });
        }
    };
    AddJobApplicationsComponent.prototype.checkemptyNumber = function (number, key, form) {
        if (number) {
            return this.finalMobileNumbers[key][form];
        }
        else {
            return '';
        }
    };
    AddJobApplicationsComponent.prototype.resetMobileNumbers = function (formName) {
        var that = this;
        Object.keys(that[formName].value).forEach(function (key) {
            switch (key) {
                case 'mobileTel':
                case 'otherTel':
                case 'landTel':
                    that[formName].value[key] = that.checkemptyNumber(that[formName].value[key], key, formName);
                    break;
            }
        });
        return this[formName].value;
    };
    AddJobApplicationsComponent.prototype.maritalStatusTypes = function () {
        var _this = this;
        this.maritalTypes = [];
        this.staffJobApplicationService.fetchMaritalStatusTypes().subscribe(function (data) {
            _this.maritalTypes = data.commonViewModel;
        });
    };
    AddJobApplicationsComponent.prototype.getCast = function () {
        var _this = this;
        this.typeService.typeByCodeBasedOnCaste().subscribe(function (response) {
            _this.casts = response;
        });
    };
    AddJobApplicationsComponent.prototype.getReligion = function () {
        var _this = this;
        this.typeService.typeByCodeBasedOnReligion().subscribe(function (response) {
            _this.religions = response;
        });
    };
    AddJobApplicationsComponent.prototype.suffixTypeList = function () {
        var _this = this;
        this.typeService.typesByTypeCategoryCode('SFX').subscribe(function (res) { return _this.suffixType = res.types; });
    };
    AddJobApplicationsComponent.prototype.onCountryChangeMobile = function (e, label, form) {
        if (this.isEmptyObject(e)) {
            return;
        }
        this.intialCountryCode[label][form] = '+' + e.dialCode;
        this[form].controls[label].setValue('');
    };
    AddJobApplicationsComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    AddJobApplicationsComponent.prototype.onError = function (obj, label, form) {
        if (!obj && this[form].value[label]) {
            this[form].get(label).setErrors({ 'invalid_mobile': true });
        }
    };
    AddJobApplicationsComponent.prototype.getNumber = function (e, label, form) {
        this.finalMobileNumbers[label][form] = e.replace(this.intialCountryCode[label][form], this.intialCountryCode[label][form] + ' ');
    };
    AddJobApplicationsComponent.prototype.OnSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (this.optionalMenus.find(function (s) { return s === event.selectedIndex; })) {
            event.selectedStep.interacted = false;
        }
        if (event.selectedIndex === 1) {
            this.setStepperInfo(event, 'experienceDetails');
        }
        else if (event.selectedIndex === 4) {
            this.setStepperInfo(event, 'passportDetails');
        }
        else if (event.selectedIndex === 6) {
            this.setStepperInfo(event, 'trainingDetails');
        }
    };
    AddJobApplicationsComponent.prototype.setStepperInfo = function (event, form) {
        if (event.selectedStep) {
            event.selectedStep.interacted = false;
        }
        Object.values(this[form].controls).forEach(function (control) {
            control.markAsUntouched();
        });
    };
    AddJobApplicationsComponent.prototype.isNestedObjectEmptyy = function (obj, checkKey) {
        if (checkKey === void 0) { checkKey = false; }
        var isEmpty = true;
        for (var key in obj) {
            if (key === 'isAddVisible' || (key === 'isRemoveVisible')) {
                continue;
            }
            if (checkKey && key === checkKey) {
                continue;
            }
            if (obj[key] !== null && obj[key] !== '') {
                if (typeof (obj[key]) === 'object') {
                    if (obj[key] !== 'isAddVisible' || (obj[key] !== 'isRemoveVisible')) {
                        isEmpty = isEmpty && this.isNestedObjectEmptyy(obj[key]);
                    }
                }
                else {
                    return false;
                }
            }
        }
        return isEmpty;
    };
    AddJobApplicationsComponent.prototype.trimSpacess = function (form, innerForm, index, key) {
        this[form].get(innerForm).controls[index].get(key).setValue(this.commonService.trimSpaces(this[form].get(innerForm).controls[index].get(key).value));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AddJobApplicationsComponent.prototype, "resetStepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddJobApplicationsComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resumeImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddJobApplicationsComponent.prototype, "resumeImgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoImgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddJobApplicationsComponent.prototype, "photoImgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('applicantDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "applicantDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('experienceDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "experienceDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "contactDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addressInfoForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "addressInfoFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passportDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "passportDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('educationDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "educationDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trainingDetailsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "trainingDetailsFormVC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attachmentsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddJobApplicationsComponent.prototype, "attachmentsFormVC", void 0);
    AddJobApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-job-applications',
            template: __webpack_require__(/*! ./add-job-applications.component.html */ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.html"),
            styles: [__webpack_require__(/*! ./add-job-applications.component.scss */ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_8__["CountryService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"], app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_9__["StaffJobApplicationService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], AddJobApplicationsComponent);
    return AddJobApplicationsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 pt-sm-40\">\n  <div class=\"w-100-p mat-elevation-z2 simple-table-container radius-10\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20\">\n      <div fxlayout=\"column\" fxFlex=\"40\">\n        <div class=\"h3 secondary-text\" translate>Application Reference Number :<strong>&nbsp;&nbsp;{{applicantInfo?.applicationReferenceNo}}</strong></div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"40\" class=\"accent-fg\" fxLayoutAlign=\"center end\" translate>Please Verify the Staff Details\n        for approving the application</div>\n      <div fxLayout=\"column\" fxFlex=\"20\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <button mat-raised-button color=\"primary\" translate (click)=\"back()\">{{'Back' | translate}}</button>\n          <button mat-button type=\"button\" (click)=\"getHelpText('Job Applications')\">\n            <mat-icon class=\"grey-600-fg\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ml-24\">\n      <div class=\"profile-image border m-24 radius-10\">\n        <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\" />\n        <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\" translate>No Image</div>\n      </div>            \n      <div fxLayout=\"column\" fxFlex=\"60\">\n          <div class=\"h2 primary-900-fg-custom mb-16\">{{staffName}}</div>          \n          <div *ngFor=\"let item of staffApplicantInfo\">           \n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"w-68 py-4 primary-300-fg\" translate>{{item.Label}}</div> : <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"ml-24\" [ngClass]=\"{'accent-fg  cursor-pointer': item.Label == 'resumeFile'}\" (click)=\"item.Label == 'resumeFile';viewAttachment(item.Label)\">\n                  <mat-icon *ngIf=\"item.Value && item.Label == 'resumeFile'\" (click)=\"item.Label == 'resumeFile';viewAttachment()\" class=\"pt-2 accent-fg\">attachment</mat-icon>&nbsp;{{item?.Value? item?.Value : \"-\"}}</div>               \n              </div>\n          </div>\n        </div>             \n\n      <form [formGroup]=\"approveForm\" fxLayout=\"column\" fxFlex=\"40\" class=\"pr-36\">\n        <label class=\"font-weight-800 pb-12\" translate>Admission Comments</label>\n        <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n          <mat-label #comments translate>Comments</mat-label>\n          <textarea id=\"comment-field\" formControlName=\"processedComments\" matInput placeholder=\"Leave a comment\" (keyup)=\"preventSpace($event,'approveForm','processedComments')\" (blur)=\"trimTextBoxSpaces('approveForm','processedComments')\"\n            [(ngModel)]='approveComments' required></textarea>\n          <mat-error>\n            <app-validation [labelName]='comments.innerText'\n              [validationControl]=\"approveForm.controls.processedComments\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <small class=\"text-right max-caters\" translate>max 180 Characters</small>\n      </form>\n    </div>\n  </div>\n</div>\n<app-add-staff-admission-form [inputJobApplicationDetails]=\"applicantInfo\" [comments]=\"approveComments\">\n</app-add-staff-admission-form>"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtYWRtaXNzaW9ucy9hcHByb3ZlLWpvYi1hcHBsaWNhdGlvbi9hcHByb3ZlLWpvYi1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ApproveJobApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveJobApplicationComponent", function() { return ApproveJobApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");











var ApproveJobApplicationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApproveJobApplicationComponent, _super);
    function ApproveJobApplicationComponent(route, storeService, cd, commonService, router, _formBuilder, dialogRef, staffJobApplicationService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.storeService = storeService;
        _this.cd = cd;
        _this.commonService = commonService;
        _this.router = router;
        _this._formBuilder = _formBuilder;
        _this.dialogRef = dialogRef;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.approveComments = '';
        _this.staffApplicantInfo = [];
        _this.validate = true;
        _this.headerValues = {
            mobileNumber: '',
            primaryEmail: '',
            statusCode: '',
            fileType: ''
        };
        return _this;
    }
    ApproveJobApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approveForm = this._formBuilder.group({
            processedComments: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)]]
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.jobApplicationId = params.id;
                _this.staffJobApplicationService.fetchStaffDetails(params.id)
                    .subscribe(function (res) {
                    _this.getJobApplicationDetails(res);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
    };
    ApproveJobApplicationComponent.prototype.getJobApplicationDetails = function (data) {
        this.applicantInfo = data.staffJobApplicantDetailsView;
        this.staffName = data.staffJobApplicantDetailsView.staffName;
        if (data.staffJobApplicantDetailsView.person.attachment) {
            this.profileImage = this.storeService.getFilePath(data.staffJobApplicantDetailsView.person.attachment.fileName);
        }
        if (this.applicantInfo.attachment) {
            var fileExtension = this.applicantInfo.attachment.fileName.replace(/^.*\./, '');
            this.resume = app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].RESUME + '.' + fileExtension;
        }
        this.headerValues = {
            mobileNumber: data.staffJobApplicantDetailsView.person.mobileTel,
            primaryEmail: data.staffJobApplicantDetailsView.person.email1,
            statusCode: data.staffJobApplicantDetailsView.status,
            resumeFile: this.resume,
        };
        for (var key1 in this.headerValues) {
            if (key1 !== 'fileType' && this.headerValues[key1] !== null) {
                this.staffApplicantInfo.push({ Label: key1, Value: this.headerValues[key1] });
            }
        }
        this.cd.detectChanges();
    };
    ApproveJobApplicationComponent.prototype.getFormatedName = function (data) {
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
    ApproveJobApplicationComponent.prototype.getComments = function (value) {
        this.approveComments = value;
    };
    ApproveJobApplicationComponent.prototype.viewAttachment = function (data) {
        if (this.applicantInfo.attachment && data === 'resumeFile') {
            var nameFileProp = this.storeService.getFilePath(this.applicantInfo.attachment.fileName);
            window.open(nameFileProp);
        }
    };
    ApproveJobApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-job-application',
            template: __webpack_require__(/*! ./approve-job-application.component.html */ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.html"),
            providers: [app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_8__["StaffJobApplicationService"]],
            styles: [__webpack_require__(/*! ./approve-job-application.component.scss */ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_8__["StaffJobApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ApproveJobApplicationComponent);
    return ApproveJobApplicationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-40\">\n  <div class=\"ml-20 p-8 text-uppercase font-size-18\" translate>Job Application Details</div>\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 mb-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-20\">\n      <div fxlayout=\"column\" fxLayoutAlign=\"end center\" fxFlex=\"40\" class=\"mx-sm-24\">\n        <div class=\"h3 secondary-text\" translate>Application Reference\n          Number :<strong>&nbsp;&nbsp;{{headerValues?.applicationReferenceNo}}</strong></div>\n      </div>\n      <button mat-raised-button color=\"primary\" translate (click)=\"back()\">{{'Back' | translate}}</button>\n      <button type=\"button\" mat-button (click)=\"getHelpText('Job Applications')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ml-24\">\n      <div class=\"profile-image border m-24 radius-10\">\n        <img *ngIf=\"profileImage\" [src]=\"profileImage ? profileImage : ''\" class=\"w-200 h-200 radius-10\"\n          alt=\"No Image\" />\n        <div *ngIf=\"!profileImage\" fxLayoutAlign=\"center center\" class=\"w-200 h-200\" translate>No Image</div>\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"60\">\n        <div class=\"h2 primary-900-fg-custom mb-16\">{{staffName}}</div>\n        <div *ngFor=\"let item of staffApplicantInfo\">           \n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"w-180 py-4 primary-300-fg\" translate>{{item.Label}}</div> : <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"ml-24 break-word\" [ngClass]=\"{'accent-fg cursor-pointer': item.Label == 'resumeFile'}\" (click)=\"item.Label == 'resumeFile';viewAttachment(item.Label)\">\n              <mat-icon *ngIf=\"item.Value && item.Label == 'resumeFile'\" (click)=\"item.Label == 'resumeFile';viewAttachment()\" class=\"pt-2 accent-fg\">attachment</mat-icon>&nbsp;{{item?.Value? item?.Value : \"-\"}}</div>          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  <app-job-application-details-view [staffJobApplicantDetailsView]=\"applicantInfo\"></app-job-application-details-view>\n\n  <div *ngIf=\"headerValues.statusCode == 'Pending'\" fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32\">\n    <button (click)=\"submitApplication(false)\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\">{{'reject' | translate}}</button>\n    <button (click)=\"submitApplication(true)\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">\n      {{'approve' | translate}}\n    </button>\n  </div>\n\n\n<ng-template #rejectPopup>\n  <div fxLayout=\"row\" class=\"pb-24 font-size-16 font-weight-600\" translate>Please confirm to reject this Application</div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-8\" translate>Rejection Comments:</div>\n  <form [formGroup]=\"approveForm\">\n    <div fxLayout=\"row\">\n      <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" class=\"reject-comment\">\n        <mat-label #comments translate>Comments</mat-label>\n        <textarea required matInput (keypress)=\"preventSpace($event,'approveForm','commentText')\" (blur)=\"trimTextBoxSpaces('approveForm','commentText')\"\n          formControlName=\"commentText\" placeholder=\"Leave a comment\"></textarea>\n        <mat-error class=\"pt-8\">\n          <app-validation [labelName]=\"comments.innerText\" [validationControl]=\"approveForm.controls.commentText\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <small class=\"pr-8\" fxLayoutAlign=\"end\" translate>Max 180 characters</small>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32\">     \n      <button (click)=\"onPopUpSelect(false)\" mat-raised-button type=\"reset\" >\n        {{'No' | translate}}\n      </button>\n      <button (click)=\"onPopUpSelect()\" mat-raised-button type=\"submit\" color=\"accent\" class=\"ml-12\">{{'Yes' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtYWRtaXNzaW9ucy9qb2ItYXBwbGljYXRpb24tZGV0YWlscy9qb2ItYXBwbGljYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: JobApplicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationDetailsComponent", function() { return JobApplicationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var JobApplicationDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobApplicationDetailsComponent, _super);
    function JobApplicationDetailsComponent(router, dialog, staffJobApplicationService, dialogRef, route, cd, commonService, storeService, snackBar, location) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.dialog = dialog;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.dialogRef = dialogRef;
        _this.route = route;
        _this.cd = cd;
        _this.commonService = commonService;
        _this.storeService = storeService;
        _this.snackBar = snackBar;
        _this.location = location;
        _this.acord = [];
        _this.staffApplicantInfo = [];
        _this.headerValues = {
            mobileNumber: '',
            primaryEmail: '',
            statusCode: '',
            applicationReferenceNo: '',
            resumeFile: '',
        };
        return _this;
    }
    JobApplicationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusName = app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].JOB_APPLICATION_PENDING_APPLICATION_STATUS;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.jobApplicationId = params.id;
                _this.staffJobApplicationService.jobApplicationData(params.id)
                    .subscribe(function (res) {
                    _this.getJobApplicationDetails(res);
                }, function (error) {
                    _this.errorResponse(error);
                });
            }
        });
        this.approveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            commentText: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(180), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.jobApplicationCommentsView = {};
    };
    JobApplicationDetailsComponent.prototype.getJobApplicationDetails = function (data) {
        this.staffName = data.staffName;
        this.getFormatedName(data);
        var _loop_1 = function (key) {
            if (key !== 'messages' && key !== 'statusCode') {
                if (typeof (data[key]) !== 'object') {
                    //// Bind detailCard Data
                }
                else if (key === 'educationDetails' || key === 'trainingDetails' || key === 'workExperience') {
                    if (data[key] !== null) {
                        for (var index = 0; index < data[key].length; index++) {
                            if (this_1.acord.find(function (x) { return x.AccordianName === key; })) {
                                var i = this_1.acord.findIndex(function (x) { return x.AccordianName === key; });
                                this_1.acord[i].Items.push(this_1.getKeyValuesOfObject(data[key][index]));
                            }
                            else {
                                this_1.acord.push({ AccordianName: key, Items: [] });
                                var i = this_1.acord.findIndex(function (x) { return x.AccordianName === key; });
                                this_1.acord[i].Items.push(this_1.getKeyValuesOfObject(data[key][index]));
                            }
                        }
                    }
                }
                else if (data[key] !== null) {
                    this_1.acord.push({ AccordianName: key, Items: this_1.getKeyValuesOfObject(data[key]) });
                }
            }
        };
        var this_1 = this;
        for (var key in data) {
            _loop_1(key);
        }
        if (data.photoAttachmentName) {
            this.profileImage = this.storeService.getFilePath(data.photoAttachmentName);
        }
        this.applicantInfo = this.acord;
        if (data.resumeAttachmentName) {
            var fileExtension = data.resumeAttachmentName.replace(/^.*\./, '');
            this.resume = app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppSettings"].RESUME + '.' + fileExtension;
        }
        this.headerValues = {
            mobileNumber: data.contactInfo.mobileNumber,
            primaryEmail: data.contactInfo.primaryEmail,
            statusCode: data.statusName,
            applicationReferenceNo: data.applicationReferenceNo,
            seekingPosition: data.seekingPosition,
            resumeFile: this.resume,
            processedComments: data.processedComments,
            fileType: data.resumeAttachmentName
        };
        for (var key1 in this.headerValues) {
            if (key1 !== 'applicationReferenceNo' && key1 !== 'fileType' && this.headerValues[key1] !== null) {
                this.staffApplicantInfo.push({ Label: key1, Value: this.headerValues[key1] });
            }
        }
        this.cd.detectChanges();
    };
    JobApplicationDetailsComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.staffDetails.middleName) {
                var fullName = data.staffDetails.firstName + ' ' + data.staffDetails.middleName + ' ' + data.staffDetails.lastName;
                this.fullName = fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.staffDetails.firstName + ' ' + data.staffDetails.lastName;
                this.fullName = fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    JobApplicationDetailsComponent.prototype.submitApplication = function (isApprove) {
        if (isApprove) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_9__["RouteConfig"].APPROVE_JOB_APPLICATION + '/' + this.jobApplicationId]);
        }
        else {
            this.customDialog = this.dialog.open(this.rejectPopup, { width: '400px', disableClose: true });
        }
    };
    JobApplicationDetailsComponent.prototype.onPopUpSelect = function (reject) {
        var _this = this;
        if (reject === void 0) { reject = true; }
        if (reject) {
            if (!this.approveForm.valid) {
                return;
            }
            this.jobApplicationCommentsView.jobApplicationId = this.jobApplicationId;
            this.jobApplicationCommentsView.processedComments = this.approveForm.value.commentText;
            this.staffJobApplicationService.rejectJobApplication(this.jobApplicationCommentsView)
                .subscribe(function (res) {
                _this.commentSubmitted(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        this.approveForm.reset();
        this.customDialog.close();
    };
    JobApplicationDetailsComponent.prototype.commentSubmitted = function (res) {
        this.back();
        this.openSnackBar(res.messages.ResultMessage);
    };
    JobApplicationDetailsComponent.prototype.viewAttachment = function (data) {
        if (this.headerValues.fileType && data === 'resumeFile') {
            var nameFileProp = this.storeService.getFilePath(this.headerValues.fileType);
            window.open(nameFileProp);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rejectPopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], JobApplicationDetailsComponent.prototype, "rejectPopup", void 0);
    JobApplicationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-application-details',
            template: __webpack_require__(/*! ./job-application-details.component.html */ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.html"),
            providers: [app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_6__["StaffJobApplicationService"]],
            styles: [__webpack_require__(/*! ./job-application-details.component.scss */ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_6__["StaffJobApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]])
    ], JobApplicationDetailsComponent);
    return JobApplicationDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-table [settings]=\"tabSettings\" (getTableData)='tableData($event)' (rowBasedAction)=\"rowWiseActions($event)\" [templateRef]=\"addJobApplicationForm\"></app-table>\n\n<ng-template #addJobApplicationForm >\n    <div fxLayout=\"column\">\n        <h4 class=\"text-uppercase pl-12\" translate>New Staff Job Application</h4>\n        <app-add-job-applications [resetStepper]=\"resetStepper\" (cancel)=\"onCancel($event)\"></app-add-job-applications>\n    </div>\n   \n</ng-template> -->\n\n\n<app-table [settings]=\"tabSettings\" (getTableData)='tableData($event)' (rowBasedAction)=\"rowWiseActions($event)\"\n    (openAddForm)='openForm()' [closeRowForm]=\"closeForm\" [templateRef]=\"addJobApplicationFormRef\" [matExpansioncustomClass]=\"true\"></app-table>\n\n<ng-template #addJobApplicationFormRef>\n    <div fxLayout=\"column\">\n        <app-add-job-applications (cancel)=\"onCancel($event)\"></app-add-job-applications>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtYWRtaXNzaW9ucy9qb2ItYXBwbGljYXRpb25zL2pvYi1hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: JobApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationsComponent", function() { return JobApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/staff/staff-job-application.service */ "./src/app/service/staff/staff-job-application.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var JobApplicationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobApplicationsComponent, _super);
    function JobApplicationsComponent(router, staffJobApplicationService, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.staffJobApplicationService = staffJobApplicationService;
        _this.snackBar = snackBar;
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'JobApplicationsComponent';
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    JobApplicationsComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllFilteredJobApplicants(this.filterViewModel);
    };
    JobApplicationsComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAGESIZE,
            applicantName: [],
            applicantReferenceNo: [],
            email: [],
            statusIds: [],
        };
    };
    JobApplicationsComponent.prototype.setColumnHeaders = function () {
        this.cols = [
            { field: 'applicantName', header: 'Applicant Name', sort: true },
            { field: 'applicantReferenceNo', header: 'Applicant Reference No', sort: true },
            { field: 'email', header: 'Email', sort: true },
            { field: 'status', header: 'Status', sort: true },
            { field: 'view', header: 'Actions', sort: false },
        ];
    };
    JobApplicationsComponent.prototype.initializeTableSettings = function () {
        this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.filterViewModel,
            tablename: 'Job Applications',
            componentName: this.currentComponent,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NEW
                }
            },
        };
    };
    JobApplicationsComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllFilteredJobApplicants(this.filterViewModel);
    };
    JobApplicationsComponent.prototype.getAllFilteredJobApplicants = function (data) {
        var _this = this;
        this.staffJobApplicationService.fetchJobApplications(data.applicantName, data.applicantReferenceNo, data.email, data.statusIds, data.sortBy, data.sortOrder, data.pageNumber, data.pageSize).
            subscribe(function (res) {
            _this.bindJobApplicationResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    JobApplicationsComponent.prototype.bindJobApplicationResult = function (data) {
        if (!data.jobApplicationView) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.jobApplicationView.list;
            this.totalRowsCount = data.jobApplicationView.totalItems;
            this.pageCnt = data.jobApplicationView.totalPages;
            // this.rows.forEach(e => {
            //   e.operations = [
            //     {
            //       name: AppSettings.VIEW,
            //       icon: AppSettings.DETAILS_ICON,
            //       operationName: AppSettings.VIEW
            //     }
            //   ];
            // });
        }
        if (data.jobApplicationView) {
            this.filterViewModel.pageNumber = data.jobApplicationView.pageNumber;
        }
        this.tabSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.cols,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Job Applications',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Job Applications'
                }
            }
        };
    };
    JobApplicationsComponent.prototype.openForm = function () {
        this.resetStepper = false;
        this.closeForm = false;
    };
    JobApplicationsComponent.prototype.onCancel = function (event) {
        this.resetStepper = true;
        this.closeForm = event;
        this.getAllFilteredJobApplicants(this.filterViewModel);
        this.scrollIntoView('app-table');
    };
    JobApplicationsComponent.prototype.rowWiseActions = function (event) {
        if (event.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"].JOB_APPLICATION_DETAILS + '/' + event.clickedRow.id]);
        }
    };
    JobApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-applications',
            template: __webpack_require__(/*! ./job-applications.component.html */ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.html"),
            providers: [app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_3__["StaffJobApplicationService"]],
            styles: [__webpack_require__(/*! ./job-applications.component.scss */ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_staff_staff_job_application_service__WEBPACK_IMPORTED_MODULE_3__["StaffJobApplicationService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], JobApplicationsComponent);
    return JobApplicationsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/staff-admissions-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/staff-admissions-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: StaffAdmissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAdmissionsRoutingModule", function() { return StaffAdmissionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_applications_job_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-applications/job-applications.component */ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.ts");
/* harmony import */ var _job_application_details_job_application_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-application-details/job-application-details.component */ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.ts");
/* harmony import */ var _approve_job_application_approve_job_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approve-job-application/approve-job-application.component */ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.ts");






var routes = [
    { path: 'job-applications', component: _job_applications_job_applications_component__WEBPACK_IMPORTED_MODULE_3__["JobApplicationsComponent"], data: { title: 'Job Applications' } },
    { path: 'job-applications/job-applications-details/:id', component: _job_application_details_job_application_details_component__WEBPACK_IMPORTED_MODULE_4__["JobApplicationDetailsComponent"], data: { title: 'Job Application Details' } },
    { path: 'job-applications/approve-job-application/:id', component: _approve_job_application_approve_job_application_component__WEBPACK_IMPORTED_MODULE_5__["ApproveJobApplicationComponent"], data: { title: 'Job Application Details' } },
];
var StaffAdmissionsRoutingModule = /** @class */ (function () {
    function StaffAdmissionsRoutingModule() {
    }
    StaffAdmissionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaffAdmissionsRoutingModule);
    return StaffAdmissionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-admissions/staff-admissions.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/staff/staff-admissions/staff-admissions.module.ts ***!
  \***************************************************************************/
/*! exports provided: StaffAdmissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAdmissionsModule", function() { return StaffAdmissionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _staff_admissions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-admissions-routing.module */ "./src/app/modules/staff/staff-admissions/staff-admissions-routing.module.ts");
/* harmony import */ var _job_applications_job_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-applications/job-applications.component */ "./src/app/modules/staff/staff-admissions/job-applications/job-applications.component.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _job_application_details_job_application_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job-application-details/job-application-details.component */ "./src/app/modules/staff/staff-admissions/job-application-details/job-application-details.component.ts");
/* harmony import */ var _shared_job_application_details_view_job_application_details_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/job-application-details-view/job-application-details-view.component */ "./src/app/shared/job-application-details-view/job-application-details-view.component.ts");
/* harmony import */ var _approve_job_application_approve_job_application_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./approve-job-application/approve-job-application.component */ "./src/app/modules/staff/staff-admissions/approve-job-application/approve-job-application.component.ts");
/* harmony import */ var app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/staff/staff-member.service */ "./src/app/service/staff/staff-member.service.ts");
/* harmony import */ var _add_job_applications_add_job_applications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-job-applications/add-job-applications.component */ "./src/app/modules/staff/staff-admissions/add-job-applications/add-job-applications.component.ts");



















var StaffAdmissionsModule = /** @class */ (function () {
    function StaffAdmissionsModule() {
    }
    StaffAdmissionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_job_applications_add_job_applications_component__WEBPACK_IMPORTED_MODULE_18__["AddJobApplicationsComponent"], _job_applications_job_applications_component__WEBPACK_IMPORTED_MODULE_4__["JobApplicationsComponent"], _job_application_details_job_application_details_component__WEBPACK_IMPORTED_MODULE_14__["JobApplicationDetailsComponent"],
                _approve_job_application_approve_job_application_component__WEBPACK_IMPORTED_MODULE_16__["ApproveJobApplicationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _staff_admissions_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffAdmissionsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_5__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__["Ng2TelInputModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                }, app_service_staff_staff_member_service__WEBPACK_IMPORTED_MODULE_17__["StaffMemberService"]
            ],
            exports: [_shared_job_application_details_view_job_application_details_view_component__WEBPACK_IMPORTED_MODULE_15__["JobApplicationDetailsViewComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], StaffAdmissionsModule);
    return StaffAdmissionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-staff-staff-admissions-staff-admissions-module.js.map