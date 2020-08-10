(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-lshp-admin-lshp-admin-module"],{

/***/ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table *ngIf=\"!hideGrid; else addUserTemplate\" [settings]=\"tabSettings\" (rowBasedAction)='rowActions($event)' (openAddForm)=\"addForms()\" [closeRowForm]='closeAddPanel' [templateRef]=\"addUserTemplate\" (getTableData)='tableData($event)'>\n</app-table>\n\n\n<ng-template #addUserTemplate>\n  <mat-vertical-stepper (selectionChange)=\"onSelectionChange($event)\" *ngIf=\"!detailsShow\" [linear]=\"true\"  [ngClass]=\"{'mat-elevation-z3 m-36 radius-10 p-12': hideGrid}\" #stepper (animationDone)=\"onStepperAnimationDone(stepper.selectedIndex)\">\n    <mat-step [stepControl]=\"firstStepperControlForm\">\n      <form [formGroup]=\"firstStepperControlForm\" fxLayout=\"column\" #userForm=\"ngForm\">\n        <ng-template matStepLabel><span translate>userdetails</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" class=\"pt-24\" fxLayout.gt-xs=\"row\">\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"32\">\n            <mat-label #firstName translate>firstname</mat-label>\n            <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'firstStepperControlForm','firstName')\"\n              (blur)=\"trimTextBoxSpaces('firstStepperControlForm','firstName')\" formControlName=\"firstName\" autocomplete=\"off\"\n              required>\n            <mat-error>\n              <app-validation [labelName]=\"firstName.innerText\" [validationControl]=\"firstStepperControlForm.controls.firstName\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field fxFlexFill appearance=\"outline\" class=\"px-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"36\">\n            <mat-label #middleName translate>middlename</mat-label>\n            <input matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'firstStepperControlForm','middleName')\"\n              (blur)=\"trimTextBoxSpaces('firstStepperControlForm','middleName')\" formControlName=\"middleName\"\n              autocomplete=\"off\">\n            <mat-error>\n              <app-validation [labelName]=\"middleName.innerText\"\n                [validationControl]=\"firstStepperControlForm.controls.middleName\" [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"32\">\n            <mat-label #lastName translate>lastname</mat-label>\n            <input matInput autocomplete=\"off\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'firstStepperControlForm','lastName')\"\n              (blur)=\"trimTextBoxSpaces('firstStepperControlForm','lastName')\" formControlName=\"lastName\" required>\n            <mat-error>\n              <app-validation [labelName]=\"lastName.innerText\" [validationControl]=\"firstStepperControlForm.controls.lastName\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"32\">\n            <mat-label translate #gender>gender</mat-label>\n            <mat-select formControlName=\"genderTypeId\" required>\n              <mat-option *ngFor=\"let facilityType of genderDetailsList\" [value]=\"facilityType.id\">\n                {{facilityType.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]='gender.innerText' [validationControl]=\"firstStepperControlForm.controls.genderTypeId\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"36\" class=\"px-sm-20 icon-center\">\n            <mat-label #date translate>dateofbirth</mat-label>\n            <input matInput (keyup)=\"forceValidation('dateOfBirth',firstStepperControlForm)\" [max]=\"yesterday\"  [matDatepicker]=\"picker\"\n              formControlName=\"dateOfBirth\" autocomplete=\"off\" [max]=\"yesterday\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error>\n              <app-validation [labelName]=\"date.innerText\"\n                  [validationControl]=\"firstStepperControlForm.controls.dateOfBirth\" [doValidate]=\"doValidate\">\n              </app-validation>\n          </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button id=\"resetButtonStepper\" type=\"reset\" class=\"text-uppercase mr-12\" (click)=\"onCancelClick()\">\n            {{'cancel' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"userDetailsForm.controls['person']['controls']['contact']\" >\n      <form [formGroup]=\"userDetailsForm.controls?.person.controls?.contact\" fxLayout=\"column\">\n        <ng-template matStepLabel><span translate>contactdetails</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #website translate>website</mat-label>\n            <input matInput formControlName=\"website\" (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.contact.controls.website)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','contact','website')\" autocomplete=\"off\">\n            <mat-error>\n              <app-validation [labelName]=\"website.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.contact.controls.website\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n            class=\"pl-sm-20\">\n            <mat-label #email translate>email</mat-label>\n            <input matInput formControlName=\"email1\" [readonly]=\"emailDisable\" required\n              autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event, userDetailsForm?.controls.person.controls.contact.controls.email1)\" (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','contact','email1')\">\n            <mat-error>\n              <app-validation [labelName]=\"email.innerText\" [validationControl]=\"userDetailsForm?.controls.person.controls.contact.controls.email1\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"loaded\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n            class=\"coutline mat-step-show\">\n            <mat-label #mobiletel translate>mobilenumber</mat-label>\n            <input type=\"text\" required matInput formControlName=\"mobileTel\" ng2TelInput\n              (hasError)=\"onError($event,'mobileTel')\" [ng2TelInputOptions]=\"telOptions\"\n              (ng2TelOutput)=\"getNumber($event,'mobileTel')\" \n              (countryChange)=\"onCountryChangeMobile($event,'mobileTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"mobiletel.innerText\"\n                [validationControl]=\"userDetailsForm.controls?.person.controls?.contact?.controls?.mobileTel\" [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"coutline pl-sm-24 mat-step-show\">\n            <mat-label #otherTel translate>alternatemobilenumber</mat-label>\n            <input type=\"text\" matInput formControlName=\"otherTel\" ng2TelInput (hasError)=\"onError($event,'otherTel')\"\n              [ng2TelInputOptions]=\"telOptions\" (ng2TelOutput)=\"getNumber($event,'otherTel')\"\n               (countryChange)=\"onCountryChangeMobile($event,'otherTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"otherTel.innerText\"\n                [validationControl]=\"userDetailsForm.controls?.person.controls?.contact.controls?.otherTel\" [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n            *ngIf=\"loaded\"  class=\"coutline dropdown-up\">\n            <mat-label #landtel translate>landlinenumber</mat-label>\n            <input type=\"text\" matInput formControlName=\"landTel\" ng2TelInput (hasError)=\"onError($event,'landTel')\"\n              autocomplete=\"off\" [ng2TelInputOptions]=\"telOptions\" (ng2TelOutput)=\"getNumber($event,'landTel')\"\n               (countryChange)=\"onCountryChangeMobile($event,'landTel')\" />\n            <mat-error>\n              <app-validation [labelName]=\"landtel.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.contact.controls.landTel\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"userDetailsForm.controls['person']['controls']['address']\">\n      <form [formGroup]=\"userDetailsForm.controls?.person.controls?.address\" fxLayout=\"column\" \n        #address=\"ngForm\">\n        <ng-template matStepLabel><span translate>addressdetails</span></ng-template>\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #line translate>addressline1</mat-label>\n            <input matInput autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.address.controls.line1)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','address','line1')\" formControlName=\"line1\" autocomplete=\"off\"\n              required>\n            <mat-error>\n              <app-validation [labelName]=\"line.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.line1\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n            class=\"pl-sm-20\">\n            <mat-label #line2 translate>addressline2</mat-label>\n            <input matInput formControlName=\"line2\" autocomplete=\"off\"  (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.address.controls.line2)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','address','line2')\">\n            <mat-error>\n              <app-validation [labelName]=\"line2.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.line2\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #line3 translate>addressline3</mat-label>\n            <input matInput formControlName=\"line3\" autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.address.controls.line3)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','address','line3')\">\n            <mat-error>\n              <app-validation [labelName]=\"line3.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.line3\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" class=\"pl-sm-20\" fxLayout=\"column\" fxFlex=\"100\"\n            fxFlex.gt-xs=\"50\">\n            <mat-label #country translate>country</mat-label>\n            <mat-select formControlName=\"countryId\" (selectionChange)=\"stateDetails($event.value)\" required>\n              <mat-option *ngFor=\"let countries of countryDetails\" [value]=\"countries.id\">\n                {{countries.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"country.innerText\"\n                [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.countryId\" [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #state translate>state</mat-label>\n            <mat-select formControlName=\"stateId\" required>\n              <mat-option *ngFor=\"let states of stateDetailsList\" [value]=\"states.id\">\n                {{states.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <app-validation [labelName]=\"state.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.stateId\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n            class=\"pl-sm-20\">\n            <mat-label #city translate>city</mat-label>\n            <input required matInput formControlName=\"city\" autocomplete=\"off\" (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.address.controls.city)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','address','city')\">\n            <mat-error>\n              <app-validation [labelName]=\"city.innerText\" [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.city\"\n                [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n\n        </div>\n\n        <div fxFlexFill fxLayout.lt-sm=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n            <mat-label #pincode translate>pincode</mat-label>\n            <input matInput formControlName=\"pincode\" (keyup)=\"preventSpaceForArray($event, userDetailsForm.controls?.person.controls?.address.controls.pincode)\"\n              (blur)=\"trimTextBoxSpacesWithParentForm('userDetailsForm','person','address','pincode')\" required>\n            <mat-error>\n              <app-validation [labelName]=\"pincode.innerText\"\n                [validationControl]=\"userDetailsForm.controls?.person.controls?.address.controls.pincode\" [doValidate]=\"doValidate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-16\">\n          <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-12\">\n            {{'Previous' | translate}}\n          </button>\n          <button mat-raised-button matStepperNext type=\"button\" color=\"accent\" class=\"text-uppercase\">\n            {{'next' | translate}}\n          </button>\n        </div>\n      </form>\n    </mat-step> \n\n    <mat-step>\n      <ng-template matStepLabel><span translate>done</span></ng-template>\n      <div fxFlex=\"80\" class=\"text-center font-size-18 m-auto pb-20 pt-8\" translate>Please verify the entered information before your final submit</div>\n      <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex.gt-xs=\"80\" fxFlex=\"100\" fxLayout.lt-sm=\"column\"\n        class=\"pt-0 border m-auto confirm-table\">\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.firstName?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>firstname</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.firstName?.value}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.middleName?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>middlename</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.middleName?.value}}</div>\n        </mat-list-item>\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.lastName?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>lastname</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.lastName?.value}}</div>\n        </mat-list-item>\n\n        \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"genderDetailsList\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>gender</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{getNamesOnId('gender',userDetailsForm.value.genderTypeId)}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.dateOfBirth?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>dateofbirth</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.dateOfBirth?.value | date}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.contact?.controls?.website?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>website</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.person?.controls?.contact?.controls?.website?.value}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.contact?.controls?.email1?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>email</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userDetailsForm?.controls?.person?.controls?.contact?.controls?.email1?.value}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.contact?.controls?.mobileTel?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>mobilenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{finalMobileNumbers.mobileTel}}</div>\n        </mat-list-item>\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.contact?.controls?.otherTel?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>alternatemobilenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{finalMobileNumbers.otherTel}}</div>\n        </mat-list-item>\n\n\n\n        \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\"  *ngIf=\"userDetailsForm?.controls?.person?.controls?.contact?.controls?.landTel?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>landlinenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{finalMobileNumbers.landTel}}</div>\n        </mat-list-item>\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>address</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>   {{userDetailsForm?.controls?.person?.controls?.address?.controls?.line1?.value}}  {{userDetailsForm?.controls?.person?.controls?.address?.controls?.line2?.value}} \n            {{userDetailsForm?.controls?.person?.controls?.address?.controls?.line3?.value}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"countryDetails\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>country</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>  {{getNamesOnId('country',userDetailsForm?.controls?.person?.controls?.address.value.countryId)}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"stateDetailsList\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>state</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{getNamesOnId('state',userDetailsForm?.controls?.person?.controls?.address.value.stateId)}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.address?.controls?.city?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>city</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userDetailsForm?.controls?.person?.controls?.address?.controls?.city?.value}}</div>\n        </mat-list-item>\n\n\n\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userDetailsForm?.controls?.person?.controls?.address?.controls?.pincode?.value\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>pincode</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userDetailsForm?.controls?.person?.controls?.address?.controls?.pincode?.value}}</div>\n        </mat-list-item>\n\n\n      </mat-list>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-32 pt-24\">\n        <button mat-raised-button matStepperPrevious type=\"button\" class=\"text-uppercase mr-8\">\n          Previous\n        </button>\n\n        <button mat-raised-button type=\"submit\"\n          (click)=\"addUpdateNewUser(userDetailsForm.value)\"\n          class=\"text-uppercase\" color=\"accent\">{{!updateShow ? 'Create':'Update'}}</button>\n      </div>\n    </mat-step>\n\n  </mat-vertical-stepper>\n\n  <ng-container *ngIf=\"detailsShow && detailsresults\">\n    <div class=\"mt-20 font-size-18 text-uppercase font-weight-600 pl-4\" >User Details</div>\n    <div >\n      <mat-list fxLayout.gt-xs=\"row wrap\" fxFlex=\"100\" fxLayout.lt-sm=\"column\" class=\"my-16 border confirm-table\">\n  \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"detailsresults?.firstName\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>firstname</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{detailsresults?.firstName}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"detailsresults?.middleName\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>middlename</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{detailsresults?.middleName}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"detailsresults?.lastName\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>lastname</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{detailsresults?.lastName}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"gendername!=''\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>gender</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{gendername}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"detailsresults?.dateOfBirth\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>dateofbirth</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{detailsresults?.dateOfBirth | date}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userContactInfo?.website\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>website</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userContactInfo?.website}}</div>\n        </mat-list-item>\n  \n  \n  \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userContactInfo?.email1\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>email</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>{{userContactInfo?.email1}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userContactInfo?.mobileTel\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>mobilenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userContactInfo?.mobileTel}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userContactInfo?.otherTel\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>alternatemobilenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userContactInfo?.otherTel}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userContactInfo?.landTel\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>landlinenumber</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userContactInfo?.landTel}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>address</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span>  {{userAddressInfo?.line1}} {{userAddressInfo?.line2}} {{userAddressInfo?.line3}}</div>\n        </mat-list-item>\n  \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>Country</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{detailsresults?.countryName}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>State</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{detailsresults?.stateName}}</div>\n        </mat-list-item>\n  \n  \n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userAddressInfo?.city\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>city</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userAddressInfo?.city}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" fxFlex.gt-xs=\"50\" *ngIf=\"userAddressInfo?.pincode\">\n          <div fxLayout=\"row\" fxFlex=\"45\"><strong><span translate>pincode</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"55\"><span class=\"pr-4\">:</span> {{userAddressInfo?.pincode}}</div>\n        </mat-list-item>\n  \n  \n      </mat-list>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-8\">\n      <button mat-raised-button type=\"reset\" class=\"text-uppercase\" (click)=\"closeAddPanel = !closeAddPanel;onClickCancel()\">\n        {{'cancel' | translate}}\n      </button>\n    </div>\n  </ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-step-header .mat-step-icon-state-done {\n  background-color: green !important; }\n\n.mat-step-show ::ng-deep.country-list.dropup {\n  bottom: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvbHNocC1hZG1pbi9jcmVhdGUtdXNlci1pbnN0aXR1dGUvY3JlYXRlLXVzZXItaW5zdGl0dXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXJDO0VBQ0csdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xzaHAtYWRtaW4vY3JlYXRlLXVzZXItaW5zdGl0dXRlL2NyZWF0ZS11c2VyLWluc3RpdHV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG4gfVxuIC5tYXQtc3RlcC1zaG93IDo6bmctZGVlcC5jb3VudHJ5LWxpc3QuZHJvcHVwe1xuICAgIGJvdHRvbTphdXRvICFpbXBvcnRhbnQ7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateUserInstituteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserInstituteComponent", function() { return CreateUserInstituteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var CreateUserInstituteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CreateUserInstituteComponent, _super);
    function CreateUserInstituteComponent(commonService, userService, countryService, stateService, typeService, dialogRef, changeDetect, snackBar, routes, router) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.userService = userService;
        _this.countryService = countryService;
        _this.stateService = stateService;
        _this.typeService = typeService;
        _this.dialogRef = dialogRef;
        _this.changeDetect = changeDetect;
        _this.snackBar = snackBar;
        _this.routes = routes;
        _this.router = router;
        _this.doValidate = true;
        _this.updateShow = false;
        _this.schoolRepRoleId = [];
        _this.closeAddPanel = false;
        _this.buttonDisable = false;
        _this.loaded = false;
        _this.currentComponent = 'CreateUserInstituteComponent';
        // Mobile Number Check Variables
        _this.telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true };
        _this.intialCountryCode = {
            mobileTel: '+91',
            otherTel: '+91',
            landTel: '+91'
        };
        _this.finalMobileNumbers = {
            mobileTel: '',
            otherTel: '',
            landTel: ''
        };
        _this.interactedStepperIndex = 0;
        _this.today = new Date();
        _this.yesterday = new Date(_this.today.setDate(_this.today.getDate() - 1));
        return _this;
    }
    CreateUserInstituteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentComponent = 'CreateUserInstituteComponent';
        // Table Colums
        this.cols = [
            { field: 'userName', header: 'username', sort: true },
            { field: 'firstName', header: 'firstname', sort: true },
            { field: 'lastName', header: 'lastname', sort: true },
            { field: 'status', header: 'status', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        this.formInitialization();
        this.tableInitailization();
        this.countryList();
        this.genderTypeList();
        this.routes.params.subscribe(function (params) {
            if (params['id']) {
                _this.hideGrid = true;
                _this.data = params['id'];
                _this.addForms();
            }
            else {
                _this.hideGrid = false;
            }
        });
    };
    CreateUserInstituteComponent.prototype.ngOnChanges = function () {
        this.tableInitailization();
    };
    CreateUserInstituteComponent.prototype.tableInitailization = function () {
        // searchUser
        this._searchUserView = {
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PAGESIZE,
            sortBy: 'Id',
            sortOrder: 1
        };
        // End
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this._searchUserView = modelTableComponent;
        }
        this.getAllUser(this._searchUserView);
    };
    CreateUserInstituteComponent.prototype.tableData = function (_view) {
        this._searchUserView = _view;
        this.getAllUser(this._searchUserView);
    };
    // Form Setting
    CreateUserInstituteComponent.prototype.formInitialization = function () {
        // Initilization  User Details Form 
        this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            genderTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            person: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                genderTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    email1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].EMAIL_PATTERN)]),
                    website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].WEBSITE_PATTERN)]),
                    mobileTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].INTL_MOBILE_PATTERN)]),
                    otherTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].INTL_MOBILE_PATTERN)]),
                    landTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].INTL_MOBILE_PATTERN)])
                }),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
                    line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
                    line3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
                    countryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
                    pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].PINCODE_PATTERN)]),
                })
            })
        });
        this.firstStepperControlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            genderTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Pattern"].ALPHABET_PATTERN)]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    // gender List
    CreateUserInstituteComponent.prototype.genderTypeList = function () {
        var _this = this;
        this.typeService.typeByCodeBasedOnCategory().subscribe(function (response) {
            _this.genderDetailsList = response;
        });
    };
    // End
    // get All User
    CreateUserInstituteComponent.prototype.getAllUser = function (_searchUserView) {
        var _this = this;
        _searchUserView.instituteId = this.data;
        this.userService.getAllUsers(_searchUserView.instituteId, _searchUserView.userName, _searchUserView.firstName, _searchUserView.lastName, _searchUserView.status, _searchUserView.sortBy, _searchUserView.sortOrder, _searchUserView.pageNumber, _searchUserView.pageSize)
            .subscribe(function (res) { return _this.userResponse(res); }, function (error) {
            _this.errorResponse(error);
        });
    };
    CreateUserInstituteComponent.prototype.userResponse = function (response) {
        if (response.userAccessList != null) {
            this.rows = response.userAccessList.list;
            this.totalItems = response.userAccessList.totalItems;
        }
        else {
            this.rows = [];
        }
        var userType = this.getTokenParam('_ut');
        this.rows.forEach(function (e) {
            e.operations = [{
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_DISPLAY,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS_ICON
                }];
            if ((userType === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].LSIT) || (e.isPrimary !== 1)) {
                e.operations.push({
                    name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT_OPERATION,
                    icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT
                }),
                    e.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].USR_NEW ? e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE
                    }) : e.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].USR_ACT ? e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].LOCK_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].LOCK,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].LOCK
                    }) : e.operations.push({
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].UNLOCK_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].UNLOCK
                    });
            }
        });
        this.tabSettings = {
            columns: this.cols,
            model: this._searchUserView,
            rows: this.rows,
            componentName: this.currentComponent,
            isPaginationRequired: true,
            tablename: 'Institute User',
            totalRowsCount: this.totalItems,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Manage Users'
                },
            },
            filtersList: response.filters,
        };
    };
    // End
    // cancel User Details
    CreateUserInstituteComponent.prototype.onCancelClick = function () {
        this.clear();
        if (this.hideGrid) {
            this.router.navigate(['/manage-institution/institute-details']);
        }
    };
    // End
    // cancel User Details
    CreateUserInstituteComponent.prototype.addForms = function () {
        this.detailsShow = false;
        this.interactedStepperIndex = 0;
        this.loaded = false;
        this.changeDetect.detectChanges();
        this.loaded = true;
        this.changeDetect.detectChanges();
        this.closeAddPanel = false;
        this.emailDisable = false;
        this.detailsresults = [];
    };
    // End
    // CountryList
    CreateUserInstituteComponent.prototype.countryList = function () {
        var _this = this;
        this.countryService.countryAllCountriesGet().subscribe(function (response) {
            _this.countryDetails = response.commonViewModel;
        });
    };
    // End
    // StateList
    CreateUserInstituteComponent.prototype.stateDetails = function (countryId, isUpdate) {
        var _this = this;
        if (isUpdate === void 0) { isUpdate = false; }
        this.stateService.stateAllStatesGet(countryId).subscribe(function (response) {
            _this.stateDetailsList = response.states;
        });
        if (!isUpdate) {
            this.userDetailsForm.controls.person['controls'].address['controls'].stateId.setValue(null);
        }
    };
    // End
    // User Address Details
    CreateUserInstituteComponent.prototype.addressDetails = function (addressForm) {
        var _this = this;
        this.countryDetails.forEach(function (element) {
            if (_this.addressView.countryId === element.id) {
                _this.countryName = element.name;
            }
        });
        if (this.stateDetailsList.length > 0) {
            this.stateDetailsList.forEach(function (element) {
                if (_this.addressView.stateId === element.id) {
                    _this.stateName = element.name;
                }
            });
        }
    };
    // // Add New User
    CreateUserInstituteComponent.prototype.addNewUser = function () {
        var _this = this;
        this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
        this.userDetailsForm.value.person.genderTypeId = this.userDetailsForm.value.genderTypeId;
        this.userDetailsForm.value.person.genderTypeId ?
            this.userDetailsForm.controls['person']['controls']['genderTypeId']
                .setErrors(null) : this.userDetailsForm.controls['person']['controls']['genderTypeId'].setErrors({ 'required': true });
        this.resetMobileNumbers(this.userDetailsForm.controls['person']['controls']['contact']);
        if (this.userDetailsForm.valid) {
            this.userFormDetails = this.userDetailsForm.value;
            this.userFormDetails.instituteId = this.data;
            this.userService.registerInstituteAdmin(this.userFormDetails).subscribe(function (res) { return _this.resultResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    CreateUserInstituteComponent.prototype.resetMobileNumbers = function (formName) {
        var that = this;
        Object.keys(formName.value).forEach(function (key) {
            switch (key) {
                case 'mobileTel':
                case 'otherTel':
                case 'landTel':
                    formName.value[key] = that.checkemptyNumber(formName.value[key], key);
                    break;
            }
        });
        return formName.value;
    };
    // // row-wise actions
    CreateUserInstituteComponent.prototype.rowActions = function (response) {
        var _this = this;
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EDIT) {
            this.updateShow = true;
            this.closeAddPanel = false;
            this.buttonDisable = true;
            this.detailsShow = false;
            this.userService.getUserDetails(response.clickedRow.id, this.data).subscribe(function (res) { return _this.singleUserDetails(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].UNLOCK_OPERATION) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_UNLOCKUSER, ''), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.userService.unLockUser(response.clickedRow.id).subscribe(function (res) { return _this.resultResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].LOCK) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_LOCKUSER), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.userService.lockUser(response.clickedRow.id).subscribe(function (res) { return _this.resultResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DETAILS) {
            this.detailsShow = true;
            this.detailsresults = null;
            this.userService.getUserDetails(response.clickedRow.id, this.data).subscribe(function (res) {
                _this.singleUserDetails(res);
            }, function (error) {
                _this.errorResponse(error);
            });
        }
        if (response.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].DELETE) {
            var dialogRef = this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                disableClose: true,
                data: { text: this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].WARNING_ON_DELETE), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES },
            });
            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].YES) {
                    _this.userService.deleteUser(response.clickedRow.id).subscribe(function (res) { return _this.resultResponse(res); }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    CreateUserInstituteComponent.prototype.resultResponse = function (response) {
        this.userDetailsForm.reset();
        this.firstStepperControlForm.reset();
        this.clear();
        this.getAllUser(this._searchUserView);
        this.openSnackBar(response.messages.ResultMessage);
        if (this.hideGrid) {
            this.router.navigate(['/manage-institution/institute-details']);
        }
    };
    // // Edit Details
    CreateUserInstituteComponent.prototype.singleUserDetails = function (userDetails) {
        var _this = this;
        this.detailsresults = userDetails.userDetails;
        this.userContactInfo = this.detailsresults.contact;
        this.userAddressInfo = this.detailsresults.address;
        if (this.detailsShow) {
            this.closeAddPanel = false;
            this.genderDetailsList.forEach(function (element) {
                if (element.id === _this.detailsresults.genderTypeId) {
                    _this.gendername = element.name;
                }
            });
        }
        else {
            this.stepper._steps._results.forEach(function (x) {
                x.interacted = true;
            });
            this.interactedStepperIndex = this.stepper._steps._results.length;
            this.customSteperLabelChange();
        }
        if (userDetails.userDetails.address != null && this.stepper !== undefined) {
            this.stateDetails(userDetails.userDetails.address.countryId, true);
            this.editFormSet(userDetails);
        }
        this.emailDisable = userDetails.userDetails.code === app_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].USR_NEW ? false : true;
    };
    // // End
    // // edit Form
    CreateUserInstituteComponent.prototype.editFormSet = function (userDetails) {
        var _this = this;
        this.userDetailsForm.patchValue(userDetails.userDetails);
        this.firstStepperControlForm.patchValue(userDetails.userDetails);
        this.userDetailsForm.controls['person']['controls']['contact'].patchValue(userDetails.userDetails.contact);
        this.userDetailsForm.controls.person['controls'].address.patchValue(userDetails.userDetails.address);
        var numbers = ['mobileTel', 'otherTel', 'landTel'];
        var that = this;
        Object.keys(this.userDetailsForm.controls['person']['controls']['contact']['controls']).forEach(function (key) {
            _this.userDetailsForm.controls['person']['controls']['contact'].controls[key].setValue(userDetails.userDetails.contact[key]);
            if (numbers.find(function (x) { return x === key; })) {
                that.updateCountryCode(key, userDetails.userDetails.contact[key]);
            }
        });
        this.countryName = userDetails.userDetails.countryName;
        this.stateName = userDetails.userDetails.stateName;
        this.genderDetailsList.forEach(function (element) {
            if (element.id === userDetails.userDetails.genderTypeId) {
                _this.gendername = element.name;
            }
        });
        this.loaded = false;
        this.changeDetect.detectChanges();
        this.loaded = true;
        this.changeDetect.detectChanges();
    };
    // // End
    CreateUserInstituteComponent.prototype.addUpdateNewUser = function () {
        (this.detailsresults === undefined || this.detailsresults.length === 0) ? this.addNewUser() : this.updateNewUser();
    };
    // Update User
    CreateUserInstituteComponent.prototype.updateNewUser = function () {
        var _this = this;
        this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
        this.userDetailsForm.value.person.genderTypeId = this.userDetailsForm.value.genderTypeId;
        this.userDetailsForm.value.person.genderTypeId ?
            this.userDetailsForm.controls['person']['controls']['genderTypeId']
                .setErrors(null) : this.userDetailsForm.controls['person']['controls']['genderTypeId'].setErrors({ 'required': true });
        this.resetMobileNumbers(this.userDetailsForm.controls['person']['controls']['contact']);
        if (this.userDetailsForm.valid) {
            this.userEditView = this.userDetailsForm.value;
            this.userEditView.instituteId = this.data;
            this.userService.editUser(this.userEditView).subscribe(function (res) { return _this.resultResponse(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // not to allow alphabets for number fields
    CreateUserInstituteComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    // End
    CreateUserInstituteComponent.prototype.getNumber = function (e, label) {
        this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
    };
    // MobileNumber
    CreateUserInstituteComponent.prototype.onCountryChangeMobile = function (e, label) {
        if (this.isEmptyObject(e)) {
            return;
        }
        this.intialCountryCode[label] = '+' + e.dialCode;
        this.userDetailsForm.controls.person['controls'].contact['controls'][label].setValue('');
    };
    CreateUserInstituteComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    CreateUserInstituteComponent.prototype.onError = function (obj, label) {
        if (!obj && this.userDetailsForm.controls.person['controls'].contact.value[label]) {
            this.userDetailsForm.controls.person['controls'].contact.get(label).setErrors({ 'invalid_mobile': true });
        }
    };
    // End
    CreateUserInstituteComponent.prototype.clear = function () {
        this.emailDisable = false;
        this.stepper.reset();
        this.detailsresults = [];
        this.updateShow = false;
        this.closeAddPanel = true;
    };
    CreateUserInstituteComponent.prototype.checkemptyNumber = function (number, key) {
        if (number) {
            return this.finalMobileNumbers[key];
        }
        else {
            return '';
        }
    };
    CreateUserInstituteComponent.prototype.updateCountryCode = function (key, val) {
        if (val) {
            var data = val.split(' ');
            if (data[0] !== val) {
                this.intialCountryCode[key] = data[0];
                this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
            }
            else {
                this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
            }
        }
    };
    CreateUserInstituteComponent.prototype.onSelectionChange = function (event) {
        var _this = this;
        if (event.selectedIndex > this.interactedStepperIndex) {
            this.interactedStepperIndex = event.selectedIndex;
        }
        else {
            this.stepper._steps._results.forEach(function (x, i) {
                x.interacted = i < _this.interactedStepperIndex ? true : false;
            });
        }
        if (event.selectedIndex > 0) {
            this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
        }
    };
    CreateUserInstituteComponent.prototype.getNamesOnId = function (name, value) {
        if (!value) {
            return '';
        }
        var x;
        switch (name) {
            case 'gender':
                return (x = this.genderDetailsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'country':
                return (x = this.countryDetails.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            case 'state':
                return (x = this.stateDetailsList.filter(function (element) { return element.id === value; })).length ? x[0].name : '';
            default: break;
        }
    };
    CreateUserInstituteComponent.prototype.trimTextBoxSpacesWithParentForm = function (primaryForm, secondaryForm, form, key) {
        this[primaryForm].controls[secondaryForm].controls[form].controls[key]
            .setValue(this.commonService.trimSpaces(this[primaryForm].controls[secondaryForm].controls[form].controls[key].value));
    };
    CreateUserInstituteComponent.prototype.onClickCancel = function () {
        this.scrollIntoView('app-table');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateUserInstituteComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateUserInstituteComponent.prototype, "data", void 0);
    CreateUserInstituteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user-institute',
            template: __webpack_require__(/*! ./create-user-institute.component.html */ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.html"),
            styles: [__webpack_require__(/*! ./create-user-institute.component.scss */ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"],
            app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"], app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"],
            app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], CreateUserInstituteComponent);
    return CreateUserInstituteComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-details/institute-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-details/institute-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"px-sm-40 pb-20\">\n    <div class=\"mat-elevation-z8 simple-table-container radius-t-20\" fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-20 border-bottom\">\n            <div><strong class=\"pr-12 font-size-16\"><span translate>Institution Status</span>:</strong>{{institutionDetails.statusName}}</div>\n            \n        <div *ngIf=\"editShow\" class=\"text-right gridRightBtn\" fxLayout=\"column\" fxFlex=\"60\" fxLayoutAlign=\"end\">\n          <div class=\"example-button-row\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button (click)=\"editInstitute()\" mat-raised-button color=\"accent\" translate class=\"text-uppercase\">\n              {{'edit' | translate}}</button>\n            <button (click)=\"getHelpText('Institution Details')\" mat-button>\n              <mat-icon class=\"font-size-28 grey-600-fg\" >info</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <mat-list fxLayout.gt-xs=\"row wrap\"  fxLayout.lt-sm=\"column\"\n        class=\"institution-details pt-0 confirm-table\">\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.name!='' && institutionDetails.name!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>institutionname</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.name}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.code!='' && institutionDetails.code!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>code</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.code}}</div>\n        </mat-list-item>\n        \n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.website!='' && institutionDetails.website!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>website</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.website}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.email1!='' && institutionDetails.email1!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Email 1</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.email1}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.email2!='' && institutionDetails.email2!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Email 2</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.email2}}</div>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"institutionDetails.line1!='' && institutionDetails.line1!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlexFill fxFlex=\"50\" fxLayoutAlign=\"start\"><strong><span\n                translate>address</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.line1}}</div>\n        </mat-list-item>\n        <!--Two fields-->\n        <mat-list-item  fxLayout=\"column\" fxFlex.gt-xs=\"50\" class=\"two-rows\">\n          <div fxLayout=\"row wrap\" fxFlexFill fxFlex=\"100\">\n            <mat-list-item *ngIf=\"institutionDetails.mobileTel!='' && institutionDetails.mobileTel!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"100\" class=\"px-16\">\n              <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Mobile Number</span></strong></div>\n              <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.mobileTel}}</div>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"institutionDetails.landTel!='' && institutionDetails.landTel!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"100\" class=\"px-16\" >\n              <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Landline Number</span></strong></div>\n              <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.landTel}}</div>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"institutionDetails.otherTel!='' && institutionDetails.otherTel!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"100\" class=\"px-16\" >\n              <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Alternate Number</span></strong></div>\n              <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.otherTel}}</div>\n            </mat-list-item>\n          </div>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"institutionDetails.city!='' && institutionDetails.city!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>city</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.city}}</div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\"   *ngIf=\"institutionDetails.state!='' && institutionDetails.state!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>state</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.state}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.country!='' && institutionDetails.country!=null\"  fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>country</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.country}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.pincode!='' && institutionDetails.pincode!=null\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>pincode</span></strong></div>\n          <div fxLayout=\"row\" fxFlex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.pincode}}</div>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"institutionDetails.uiThemeName!='' && institutionDetails.uiThemeName!=null\" fxLayout=\"column\" fxFlex.gt-xs=\"50\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>Theme</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\"><span class=\"pr-4\">:</span>{{institutionDetails.uiThemeName}}</div>\n        </mat-list-item>\n\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.brandingSymbolLogo!='' && institutionDetails.brandingSymbolLogo!=null\"  fxFlex.gt-xs=\"50\" class=\"py-8\">\n          <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>symbollogo:</span></strong></div>\n          <div fxLayout=\"row\" fxflex=\"50\">\n            <img class=\"w-60 h-60 obj-fit-img\" [src]=\"logoImgProp?.src\" *ngIf=\"logoImgProp?.src\" alt=\"Launchship\" />\n          </div>\n        </mat-list-item>\n        <mat-list-item fxLayout=\"column\" *ngIf=\"institutionDetails.brandingNameLogo!='' && institutionDetails.brandingNameLogo!=null\" fxFlex.gt-xs=\"50\" class=\"py-8\">\n            <div fxLayout=\"row\" fxFlex=\"50\"><strong><span translate>namelogo:</span></strong></div>\n            <div fxLayout=\"row\" fxflex=\"50\">\n              <img class=\"w-180 h-60 obj-fit-img\" [src]=\"nameImgProp?.src\" *ngIf=\"nameImgProp?.src\" alt=\"Launchship\" />\n            </div>\n          </mat-list-item>\n      </mat-list>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-details/institute-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-details/institute-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbHNocC1hZG1pbi9pbnN0aXR1dGUtZGV0YWlscy9pbnN0aXR1dGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-details/institute-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-details/institute-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InstituteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteDetailsComponent", function() { return InstituteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/academic-service/api/institution.service */ "./src/app/service/academic-service/api/institution.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");










var InstituteDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InstituteDetailsComponent, _super);
    function InstituteDetailsComponent(institutionService, router, userService, storeService, sanitizer, cd, commonService) {
        var _this = _super.call(this) || this;
        _this.institutionService = institutionService;
        _this.router = router;
        _this.userService = userService;
        _this.storeService = storeService;
        _this.sanitizer = sanitizer;
        _this.cd = cd;
        _this.commonService = commonService;
        _this.institutionDetails = [];
        return _this;
    }
    InstituteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userCheckUserAccessGet().subscribe(function (response) { return _this.checkLoginDetails(response); });
    };
    InstituteDetailsComponent.prototype.setImageProperties = function (image, logo) {
        if (logo === void 0) { logo = false; }
        var data = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
            width: image.width,
            height: image.height
        };
        if (logo) {
            this.logoImgProp = {};
            this.logoImgProp = data;
        }
        else {
            this.nameImgProp = {};
            this.nameImgProp = data;
        }
        this.cd.detectChanges();
    };
    InstituteDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.userService.userCheckUserAccessGet().subscribe(function (response) { return _this.checkLoginDetails(response); });
    };
    InstituteDetailsComponent.prototype.checkLoginDetails = function (response) {
        this.loginDetails = response;
        this.institutionDetailsById();
    };
    // method for get perticular institution details based on institute Id
    InstituteDetailsComponent.prototype.institutionDetailsById = function () {
        var _this = this;
        this.institutionService.institutionDetails(this.data)
            .subscribe(function (res) { return _this.getResponse(res); });
    };
    // response of institute details
    InstituteDetailsComponent.prototype.getResponse = function (data) {
        if (this.loginDetails[0].schoolId != null || this.loginDetails[0].instititeId != null) {
            this.editShow = false;
        }
        else {
            this.editShow = true;
        }
        this.institutionDetails = data.institutionData;
        this.institutionDetails.line1 = new Array(this.institutionDetails.line1, this.institutionDetails.line2, this.institutionDetails.line3).
            filter(function (x) { return x; }).join(', ');
        if (data.institutionData['brandingSymbolLogo']) {
            var imgUrl = this.storeService.getFilePath(data.institutionData['brandingSymbolLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingSymbolLogo'].filename)
                .subscribe(function (data1) {
                if (data) {
                }
            });
            this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
        }
        if (data.institutionData['brandingNameLogo']) {
            var imgUrl = this.storeService.getFilePath(data.institutionData['brandingNameLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingNameLogo'].filename)
                .subscribe(function (data2) {
                if (data) {
                }
            });
            this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);
            this.cd.markForCheck();
        }
    };
    InstituteDetailsComponent.prototype.editInstitute = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_8__["RouteConfig"]._Edit_Institute + this.institutionDetails.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstituteDetailsComponent.prototype, "data", void 0);
    InstituteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-institute-details',
            template: __webpack_require__(/*! ./institute-details.component.html */ "./src/app/modules/lshp-admin/institute-details/institute-details.component.html"),
            styles: [__webpack_require__(/*! ./institute-details.component.scss */ "./src/app/modules/lshp-admin/institute-details/institute-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_2__["InstitutionService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
    ], InstituteDetailsComponent);
    return InstituteDetailsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-license/institute-license.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-license/institute-license.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 simple-table-container radius-t-20 mx-40 mb-20\">\n    <app-table [settings]=\"tabSettings\" [closeRowForm]='closeAddPanel' (rowBasedAction)=\"rowWiseActions($event)\"\n    (getTableData)='getAllLicense($event)' [templateRef]=\"addLicense\" (openAddForm)=\"onAddFormClick()\">\n  </app-table>\n  \n</div>\n\n\n<ng-template #addLicense>\n  <form [formGroup]=\"licenseForm\" (ngSubmit)=\"saveInstituionLicense(licenseForm)\" #appForm=\"ngForm\">\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"34\" fxFlex=\"100\">\n        <mat-label #noSchool translate>Number Of Schools</mat-label>\n        <input (keyup)=\"preventSpace($event,'licenseForm','noOfSchools')\" matInput formControlName=\"noOfSchools\" required autocomplete=\"off\">\n\n        <mat-error>\n          <app-validation [labelName]=\"noSchool.innerText\" [validationControl]=\"licenseForm.controls.noOfSchools\"\n            [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" class=\"px-sm-20\" fxFlex.gt-xs=\"32\" fxFlex=\"100\">\n        <mat-label #amount translate>Amount</mat-label>\n        <input (keyup)=\"preventSpace($event,'licenseForm','billingAmount')\" matInput formControlName=\"billingAmount\" required autocomplete=\"off\">\n        <mat-error>\n          <app-validation [labelName]=\"amount.innerText\" [validationControl]=\"licenseForm.controls.billingAmount\"\n            [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"34\" fxFlex=\"100\" class=\"icon-center\">\n        <mat-label #date translate>Start Date</mat-label>\n        <input matInput (keyup)=\"forceValidation('billingStartDate',licenseForm)\" [min]=\"minDate\"\n          [matDatepicker]=\"start_date\" required formControlName=\"billingStartDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"start_date\"></mat-datepicker-toggle>\n        <mat-datepicker #start_date></mat-datepicker>\n        <mat-error>\n          <app-validation [labelName]=\"date.innerText\" [validationControl]=\"licenseForm.controls.billingStartDate\"\n            [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-xs=\"34\" fxFlex=\"100\">\n        <mat-label #billingType translate>Billing Cycle</mat-label>\n        <mat-select name=\"billingType\" formControlName=\"billingTypeId\" required>\n          <mat-option *ngFor=\"let license of commonViewModel\" [value]=\"license.value\">\n            {{ license.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='billingType.innerText' [validationControl]=\"licenseForm.controls.billingTypeId\"\n            [doValidate]=\"isValidate\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-sm-16\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"closeAddForm()\">{{'Cancel' | translate}}</button>\n      <button class=\"mr-12 text-uppercase\" mat-raised-button color=\"accent\" type=\"submit\"\n        [disabled]=\"disableSubmitBtn\">{{'Create' | translate}}</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-license/institute-license.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-license/institute-license.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbHNocC1hZG1pbi9pbnN0aXR1dGUtbGljZW5zZS9pbnN0aXR1dGUtbGljZW5zZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/lshp-admin/institute-license/institute-license.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/institute-license/institute-license.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InstituteLicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteLicenseComponent", function() { return InstituteLicenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service_api_institute_licence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/institute-licence.service */ "./src/app/service/academic-service/api/institute-licence.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");










var InstituteLicenseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InstituteLicenseComponent, _super);
    function InstituteLicenseComponent(commonService, dialogRef, instituteLicense, datePipe, userService, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.dialogRef = dialogRef;
        _this.instituteLicense = instituteLicense;
        _this.datePipe = datePipe;
        _this.userService = userService;
        _this.snackBar = snackBar;
        // variable declaration
        _this.doValidate = false;
        _this.tableData = [];
        _this.closeAddPanel = false;
        _this.dataLoaded = Promise.resolve(false);
        _this.disableSubmitBtn = false;
        return _this;
    }
    InstituteLicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencySymbol = this.getSchoolCurrency();
        var minCurrentDate = this.getDefaultDate();
        this.minDate = minCurrentDate;
        // status codes
        this.HttpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        this.currentComponent = 'InstituteLicenseComponent';
        // Initilization  User licenseForm Form 
        this.licenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            noOfSchools: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(99), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].NUMBER_PATTERN)]),
            billingAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(99999999.99), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].DECIMAL_WITH_TWO_PRECISIONS)]),
            billingStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.getDefaultDate(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            billingTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
        // licenseDetails
        this.licenseDetails = {
            id: this.data,
            billingCycleId: [],
            numberOfSchools: [],
            billingAmount: [],
            billingCycle: '',
            billingStartDate: '',
            statusId: [],
            statusCode: [],
            sortBy: 'Id',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
        // institutionLicenseView
        this.institutionLicenseView = {
            numberOfSchools: 0,
            billingCycleId: 0,
            billingAmount: 0,
            billingStartDate: '',
            statusId: 0
        };
        // institueView
        this.institueView = {
            id: '',
            licenseStatusCode: ''
        };
        // Table Colums
        this.cols = [
            { field: 'numberOfSchools', header: 'Number Of Schools', sort: true },
            { field: 'billingAmount', header: 'Billing Amount', sort: true },
            { field: 'billingStartDate', header: 'Billing Start Date', sort: true },
            { field: 'billingCycle', header: 'Billing Cycle', sort: true },
            { field: 'licenseStatus', header: 'License Status', sort: true },
        ];
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.licenseDetails = modelTableComponent;
        }
        this.userService.userCheckUserAccessGet().subscribe(function (response) { return _this.checkLoginDetails(response); });
    };
    InstituteLicenseComponent.prototype.checkLoginDetails = function (response) {
        this.loginDetails = response;
        this.billingCycleTypes();
    };
    InstituteLicenseComponent.prototype.ngOnChanges = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.licenseDetails = modelTableComponent;
        }
        // licenseDetails
        this.licenseDetails = {
            id: this.data,
            billingCycleId: [],
            numberOfSchools: [],
            billingAmount: [],
            billingCycle: '',
            billingStartDate: '',
            statusId: [],
            statusCode: [],
            sortBy: '',
            sortOrder: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SORTORDER,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
        this.getAllLicense(this.licenseDetails);
    };
    // get billing cycle data
    InstituteLicenseComponent.prototype.billingCycleTypes = function () {
        var _this = this;
        this.instituteLicense.billingCycleTypes().subscribe(function (res) { _this.billingTypeResponse(res), _this.getAllLicense(_this.licenseDetails); });
    };
    // biling cycle response
    InstituteLicenseComponent.prototype.billingTypeResponse = function (res) {
        this.commonViewModel = [];
        if (res.commonViewModel.length !== 0) {
            for (var i = 0; i < res.commonViewModel.length; i++) {
                this.commonViewModel.push({ value: res.commonViewModel[i].id, label: res.commonViewModel[i].name });
            }
        }
    };
    // create institute license for selected school
    InstituteLicenseComponent.prototype.saveInstituionLicense = function (licenseForm) {
        var _this = this;
        this.isValidate = true;
        if (this.licenseForm.invalid) {
            return;
        }
        else {
            this.disableSubmitBtn = true;
        }
        if (this.licenseForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VALID) {
            this.institutionLicenseView.instituteId = this.data;
            this.institutionLicenseView.numberOfSchools = licenseForm.value.noOfSchools;
            this.institutionLicenseView.billingAmount = licenseForm.value.billingAmount;
            this.institutionLicenseView.billingStartDate = licenseForm.value.billingStartDate;
            this.institutionLicenseView.billingCycleId = licenseForm.value.billingTypeId;
            this.instituteLicense.create(this.institutionLicenseView).subscribe(function (res) { return _this.response(res); }, function (error) {
                _this.errorResponse(error);
            });
        }
    };
    // response
    InstituteLicenseComponent.prototype.response = function (data) {
        this.disableSubmitBtn = false;
        this.isValidate = false;
        if (data.statusCode === this.HttpStatus.OK) {
            this.dialogRef.closeAll();
            this.licenseForm.reset();
            this.aForm.resetForm();
            this.licenseForm.controls['billingStartDate'].setValue(this.getDefaultDate());
            this.closeAddPanel = true;
        }
        else {
            this.closeAddPanel = false;
        }
        this.getAllLicense(this.licenseDetails);
        this.openSnackBar(data.messages.ResultMessage);
    };
    // get data of institution license
    InstituteLicenseComponent.prototype.getAllLicense = function (licenseDetails) {
        var _this = this;
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.licenseDetails = modelTableComponent;
        }
        licenseDetails.id = (licenseDetails.id === undefined || licenseDetails.id === null) ? this.data : licenseDetails.id;
        this.instituteLicense.getAllInstituteLicense(licenseDetails.id, licenseDetails.billingCycleId, licenseDetails.numberOfSchools, licenseDetails.billingAmount, licenseDetails.billingStartDate, licenseDetails.billingStartDateBegin, licenseDetails.billingStartDateEnd, licenseDetails.statusId, licenseDetails.statusCode, licenseDetails.sortBy, licenseDetails.sortOrder, licenseDetails.pageNumber, licenseDetails.pageSize).subscribe(function (res) {
            _this.getStudent(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // response of institution license
    InstituteLicenseComponent.prototype.getStudent = function (data) {
        var _this = this;
        if (!data.licenceListView) {
            this.rows = [];
        }
        else {
            this.rows = data.licenceListView.list;
            this.totalItems = data.licenceListView.totalItems;
        }
        this.rows.forEach(function (e1) {
            e1.billingAmount = e1.billingAmount.toFixed(2);
            e1.billingAmount = _this.currencySymbol + e1.billingAmount;
            e1.billingStartDate = _this.commonService.customDateFormat(e1.billingStartDate, _this.getSchoolDateFormat()).date;
        });
        if (this.loginDetails !== undefined) {
            var validateInstituteAdmin = (this.loginDetails[0].schoolId != null || this.loginDetails[0].instituteId != null);
            if (validateInstituteAdmin) {
                if (this.cols.find(function (x) { return x.field === 'actions'; })) {
                    var index = this.cols.findIndex(function (x) { return x.field === 'actions'; });
                    this.cols.splice(index);
                }
            }
            else {
                if (!this.cols.find(function (x) { return x.field === 'actions'; })) {
                    this.cols.push({ field: 'actions', header: 'Actions', sort: false });
                }
                this.cols = this.cols;
                this.rows.forEach(function (e) {
                    e.operations = [];
                    // tslint:disable-next-line: no-unused-expression
                    (e.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].LIC_ACT) ? [e.statusId = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INACTIVE_OPERATION, e.operations.push({
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INACTIVE_ICON,
                        })] : [e.statusId = app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ACTIVE_OPERATION, e.operations.push({
                            name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ACTIVE_OPERATION,
                            icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ACTIVE_ICON,
                        })];
                });
            }
            this.tabSettings = {
                padding: true,
                columns: this.cols,
                model: this.licenseDetails,
                rows: this.rows,
                tablename: 'Institute Licence',
                componentName: this.currentComponent,
                isPaginationRequired: true,
                totalRowsCount: this.totalItems,
                pageCnt: this.pageCnt,
                tabTable: true,
                headerOperations: {
                    addingForm: {
                        required: !validateInstituteAdmin,
                        name: 'addLicense',
                        btnName: 'Add New Licence'
                    },
                    infoButton: {
                        required: true,
                        text: 'Institution Licenses'
                    },
                },
                filtersList: data.filters
            };
        }
    };
    InstituteLicenseComponent.prototype.rowWiseActions = function (operationData) {
        /**check status based on */
        var statusCode;
        statusCode = (operationData.clickedRow.statusCode === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].LIC_ACT) ? app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].LIC_INACT : app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].LIC_ACT;
        var institueView;
        institueView = {
            id: operationData.clickedRow.id,
            licenseStatusCode: statusCode
        };
        this.changeLicenseStatus(institueView);
    };
    /**
    * changes the status of institute license
    * @param institueView
    */
    InstituteLicenseComponent.prototype.changeLicenseStatus = function (institueView) {
        var _this = this;
        this.instituteLicense.updateInstitutionLicenceStatus(institueView)
            .subscribe(function (response) {
            _this.openSnackBar(response.messages.ResultMessage);
            if (response.statusCode === _this.HttpStatus.OK) {
                _this.getAllLicense(_this.licenseDetails);
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // Adding Post Form
    InstituteLicenseComponent.prototype.onAddFormClick = function () {
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].SHOW);
        this.closeAddPanel = false;
        this.isValidate = false;
        this.disableSubmitBtn = false;
    };
    // method for when click cancel panel it will open
    InstituteLicenseComponent.prototype.closeAddForm = function () {
        this.aForm.resetForm();
        this.isValidate = false;
        this.commonService.setOverlay(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].HIDE);
        this.closeAddPanel = true;
        this.licenseForm.reset();
        this.licenseForm.controls['billingStartDate'].setValue(new Date);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstituteLicenseComponent.prototype, "aForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstituteLicenseComponent.prototype, "data", void 0);
    InstituteLicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-institute-license',
            template: __webpack_require__(/*! ./institute-license.component.html */ "./src/app/modules/lshp-admin/institute-license/institute-license.component.html"),
            styles: [__webpack_require__(/*! ./institute-license.component.scss */ "./src/app/modules/lshp-admin/institute-license/institute-license.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            app_service_academic_service_api_institute_licence_service__WEBPACK_IMPORTED_MODULE_4__["InstituteLicenceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], InstituteLicenseComponent);
    return InstituteLicenseComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/lshp-admin/lshp-admin-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/lshp-admin/lshp-admin-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LshpAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LshpAdminRoutingModule", function() { return LshpAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lshp_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lshp-admin.component */ "./src/app/modules/lshp-admin/lshp-admin.component.ts");
/* harmony import */ var _new_institution_new_institution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-institution/new-institution.component */ "./src/app/modules/lshp-admin/new-institution/new-institution.component.ts");
/* harmony import */ var _create_user_institute_create_user_institute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user-institute/create-user-institute.component */ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'institute-details',
        data: { title: 'Institute Details' }
    },
    {
        path: 'institute-details/add-institution',
        component: _new_institution_new_institution_component__WEBPACK_IMPORTED_MODULE_4__["NewInstitutionComponent"],
        data: { title: 'Add Institution' }
    },
    {
        path: 'institute-details/edit-institution/:id',
        component: _new_institution_new_institution_component__WEBPACK_IMPORTED_MODULE_4__["NewInstitutionComponent"],
        data: { title: 'Edit Institution' }
    },
    {
        path: 'institute-details',
        component: _lshp_admin_component__WEBPACK_IMPORTED_MODULE_3__["LshpAdminComponent"],
        data: { title: 'Institute Details' }
    },
    {
        path: 'create-users',
        component: _create_user_institute_create_user_institute_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserInstituteComponent"],
        data: { title: 'Create Users' }
    },
    {
        path: 'create-users/:id',
        component: _create_user_institute_create_user_institute_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserInstituteComponent"],
        data: { title: 'Create Users' }
    },
];
var LshpAdminRoutingModule = /** @class */ (function () {
    function LshpAdminRoutingModule() {
    }
    LshpAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], LshpAdminRoutingModule);
    return LshpAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/lshp-admin/lshp-admin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/lshp-admin/lshp-admin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editShow\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.gt-sm=\"center center\" class=\"px-sm-60 mt-32\">\n    <div fxlayout=\"column\" fxFlex=\"30\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" fxLayoutAlign=\"start center\"\n        class=\"text-uppercase pb-20\" translate>manageinstitution</div>\n    <div fxlayout=\"column\" fxFlex=\"40\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" class=\"px-12\"\n        fxLayoutAlign=\"center center\">\n        <mat-form-field appearance=\"outline\" class=\"w-100-p\">\n            <mat-label #typeid translate>institute</mat-label>\n            <mat-select [(ngModel)]=\"instituteid\" (selectionChange)=\"instituteNameDetails($event)\">\n                <mat-option *ngFor=\"let instituteDetails of institutions\" [value]=\"instituteDetails.id\">\n                   {{instituteDetails.name}}-{{instituteDetails.code}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div fxlayout=\"column\" fxFlex=\"30\" fxFlex.lt-sm=\"100\" fxLayoutAlign.lt-sm=\"center\" fxLayoutAlign=\"end center\"\n        class=\"pb-20\">\n        <button (click)=\"addInstitute()\" mat-raised-button type=\"button\" color=\"accent\" class=\"text-uppercase\"><span>{{'addinstitution' | translate}}</span>  \n        </button>\n    </div>\n</div>\n\n\n\n<mat-tab-group *ngIf=\"display\" [selectedIndex]=\"index\" (selectedIndexChange)=\"selected($event)\" class=\"manage-institue pt-32\">\n    <mat-tab label=\"{{'INSTITUTION DETAILS' | translate}}\">\n        <div *ngIf=\"detailsShow\">\n            <app-institute-details [data]=\"selectedChanged\"></app-institute-details>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"{{'INSTITUTION LICENSE' | translate}}\">\n        <div *ngIf=\"liscenseShow\">\n            <app-institute-license [data]=\"selectedChanged\"></app-institute-license>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"{{'MANAGE USERS' | translate}}\" >\n        <div *ngIf=\"userShow\">\n            <app-create-user-institute [data]=\"selectedChanged\"></app-create-user-institute>\n        </div>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/lshp-admin/lshp-admin.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/lshp-admin/lshp-admin.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbHNocC1hZG1pbi9sc2hwLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/lshp-admin/lshp-admin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/lshp-admin/lshp-admin.component.ts ***!
  \************************************************************/
/*! exports provided: LshpAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LshpAdminComponent", function() { return LshpAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/academic-service/api/institution.service */ "./src/app/service/academic-service/api/institution.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_academic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/academic-service */ "./src/app/service/academic-service/index.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);











var LshpAdminComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LshpAdminComponent, _super);
    function LshpAdminComponent(institutionService, router, userService, snackBar) {
        var _this = _super.call(this) || this;
        _this.institutionService = institutionService;
        _this.router = router;
        _this.userService = userService;
        _this.snackBar = snackBar;
        // DropDown Variables 
        _this.institutions = [];
        _this.instituteFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        _this.display = false;
        // Tab Conditions 
        _this.showUsers = false;
        _this.showInstituteDetails = false;
        _this.showUserLicence = false;
        _this.instituteid = '';
        _this.index = 0;
        return _this;
    }
    LshpAdminComponent.prototype.onPopState = function (event) {
        this.selectTabByHash(window.location.hash);
    };
    LshpAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userCheckUserAccessGet().subscribe(function (response) { return _this.checkLoginDetails(response); });
        if (!window.location.hash) {
            this.selected(this.index);
        }
    };
    LshpAdminComponent.prototype.checkLoginDetails = function (response) {
        if (response[0].schoolId != null || response[0].instituteId != null) {
            this.editShow = false;
            this.currentInstitute = response.find(function (x) { return x.instituteId; }).instituteId;
            this.selectedChanged = this.currentInstitute;
            this.currentInstitute != null ? this.getAllInstitutes(this.currentInstitute) :
                this.selected(this.index);
        }
        else {
            this.editShow = true;
            this.getAllInstitutes(null);
            // this.selected(this.index);
        }
    };
    LshpAdminComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    // get All Institutes
    LshpAdminComponent.prototype.getAllInstitutes = function (instituteId) {
        var _this = this;
        this.institutionService.getInstitutions(instituteId).subscribe(function (response) {
            _this.institutions = response.institutes;
            var currentInstituteCode = localStorage.getItem('_cic') || '';
            if (currentInstituteCode && !_this.currentInstitute) {
                var currentInstituteInfo = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](_this.institutions, { code: currentInstituteCode });
                _this.selectedChanged = (currentInstituteInfo === null || currentInstituteInfo === undefined) ?
                    _this.currentInstitute : currentInstituteInfo['id'];
                _this.instituteid = _this.selectedChanged;
                _this.currentInstitute = _this.selectedChanged;
            }
            if (_this.currentInstitute != null) {
                // this.institutions.forEach((element, index) => {
                if (!window.location.hash) {
                    _this.selected(0);
                }
                else {
                    _this.selectTabByHash(window.location.hash);
                }
                _this.display = true;
                // });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // End
    // onSelection of Institute
    LshpAdminComponent.prototype.instituteNameDetails = function (value) {
        this.selectedChanged = value.value;
        var currentInstituteInfo = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](this.institutions, { id: value.value });
        if (currentInstituteInfo !== null && currentInstituteInfo !== undefined) {
            // @ts-ignore
            localStorage.setItem('_cic', currentInstituteInfo.code);
        }
        this.display = true;
        this.selected(this.index);
    };
    // End
    // tab Selection
    LshpAdminComponent.prototype.selected = function (value) {
        this.index = value;
        switch (value) {
            case 0:
                window.location.hash = '';
                this.userShow = false;
                this.liscenseShow = false;
                this.detailsShow = true;
                break;
            case 1:
                this.detailsShow = false;
                this.userShow = false;
                this.liscenseShow = true;
                window.location.hash = 'License';
                break;
            case 2:
                this.detailsShow = false;
                this.liscenseShow = false;
                this.userShow = true;
                window.location.hash = 'Users';
                break;
        }
    };
    // tab Selection
    LshpAdminComponent.prototype.selectTabByHash = function (value) {
        switch (value) {
            case '#License':
                this.detailsShow = false;
                this.userShow = false;
                this.liscenseShow = true;
                this.index = 1;
                break;
            case '#Users':
                this.detailsShow = false;
                this.liscenseShow = false;
                this.userShow = true;
                this.index = 2;
                break;
            default:
                this.userShow = false;
                this.liscenseShow = false;
                this.detailsShow = true;
                this.index = 0;
                break;
        }
    };
    LshpAdminComponent.prototype.addInstitute = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_8__["RouteConfig"]._Add_Institute]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LshpAdminComponent.prototype, "onPopState", null);
    LshpAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lshp-admin',
            template: __webpack_require__(/*! ./lshp-admin.component.html */ "./src/app/modules/lshp-admin/lshp-admin.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./lshp-admin.component.scss */ "./src/app/modules/lshp-admin/lshp-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_4__["InstitutionService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_academic_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], LshpAdminComponent);
    return LshpAdminComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/lshp-admin/lshp-admin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/lshp-admin/lshp-admin.module.ts ***!
  \*********************************************************/
/*! exports provided: LshpAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LshpAdminModule", function() { return LshpAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_academic_service_api_license_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/academic-service/api/license-setup.service */ "./src/app/service/academic-service/api/license-setup.service.ts");
/* harmony import */ var _lshp_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lshp-admin.component */ "./src/app/modules/lshp-admin/lshp-admin.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _service_academic_service_api_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/academic-service/api/user.service */ "./src/app/service/academic-service/api/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lshp_admin_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lshp-admin-routing.module */ "./src/app/modules/lshp-admin/lshp-admin-routing.module.ts");
/* harmony import */ var _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_service_user_management_api_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/user-management/api/user.service */ "./src/app/service/user-management/api/user.service.ts");
/* harmony import */ var app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/academic-service/api/country.service */ "./src/app/service/academic-service/api/country.service.ts");
/* harmony import */ var app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/academic-service/api/state.service */ "./src/app/service/academic-service/api/state.service.ts");
/* harmony import */ var app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/academic-service/api/type.service */ "./src/app/service/academic-service/api/type.service.ts");
/* harmony import */ var app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/service/academic-service/api/institution.service */ "./src/app/service/academic-service/api/institution.service.ts");
/* harmony import */ var app_service_academic_service_api_institute_licence_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/service/academic-service/api/institute-licence.service */ "./src/app/service/academic-service/api/institute-licence.service.ts");
/* harmony import */ var _institute_details_institute_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./institute-details/institute-details.component */ "./src/app/modules/lshp-admin/institute-details/institute-details.component.ts");
/* harmony import */ var _institute_license_institute_license_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./institute-license/institute-license.component */ "./src/app/modules/lshp-admin/institute-license/institute-license.component.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _new_institution_new_institution_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-institution/new-institution.component */ "./src/app/modules/lshp-admin/new-institution/new-institution.component.ts");
/* harmony import */ var app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/service/file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var _create_user_institute_create_user_institute_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./create-user-institute/create-user-institute.component */ "./src/app/modules/lshp-admin/create-user-institute/create-user-institute.component.ts");

























var LshpAdminModule = /** @class */ (function () {
    function LshpAdminModule() {
    }
    LshpAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _lshp_admin_component__WEBPACK_IMPORTED_MODULE_6__["LshpAdminComponent"],
                _new_institution_new_institution_component__WEBPACK_IMPORTED_MODULE_22__["NewInstitutionComponent"],
                _create_user_institute_create_user_institute_component__WEBPACK_IMPORTED_MODULE_24__["CreateUserInstituteComponent"],
                _institute_details_institute_details_component__WEBPACK_IMPORTED_MODULE_19__["InstituteDetailsComponent"],
                _institute_license_institute_license_component__WEBPACK_IMPORTED_MODULE_20__["InstituteLicenseComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _lshp_admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["LshpAdminRoutingModule"],
                _main_matcomponents_module__WEBPACK_IMPORTED_MODULE_11__["MatcomponentsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_21__["Ng2TelInputModule"]
            ],
            providers: [_service_academic_service_api_user_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], app_service_academic_service_api_institution_service__WEBPACK_IMPORTED_MODULE_17__["InstitutionService"], _service_academic_service_api_license_setup_service__WEBPACK_IMPORTED_MODULE_5__["LicenseSetupService"], app_service_user_management_api_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], app_service_academic_service_api_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"], app_service_academic_service_api_state_service__WEBPACK_IMPORTED_MODULE_15__["StateService"], app_service_academic_service_api_type_service__WEBPACK_IMPORTED_MODULE_16__["TypeService"], app_service_academic_service_api_institute_licence_service__WEBPACK_IMPORTED_MODULE_18__["InstituteLicenceService"], app_service_file_management_store_service__WEBPACK_IMPORTED_MODULE_23__["StoreService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        })
    ], LshpAdminModule);
    return LshpAdminModule;
}());



/***/ }),

/***/ "./src/app/modules/lshp-admin/new-institution/new-institution.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/new-institution/new-institution.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-edit-institute [isUpdateForm]=\"isUpdateForm\" [institutionData]=\"institutionData\"></app-add-edit-institute>"

/***/ }),

/***/ "./src/app/modules/lshp-admin/new-institution/new-institution.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/new-institution/new-institution.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbHNocC1hZG1pbi9uZXctaW5zdGl0dXRpb24vbmV3LWluc3RpdHV0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/lshp-admin/new-institution/new-institution.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/lshp-admin/new-institution/new-institution.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewInstitutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInstitutionComponent", function() { return NewInstitutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewInstitutionComponent = /** @class */ (function () {
    function NewInstitutionComponent(route) {
        this.route = route;
        this.isUpdateForm = false;
    }
    NewInstitutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.isUpdateForm = true;
                _this.institutionData = { id: params.id };
            }
        });
    };
    NewInstitutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-institution',
            template: __webpack_require__(/*! ./new-institution.component.html */ "./src/app/modules/lshp-admin/new-institution/new-institution.component.html"),
            styles: [__webpack_require__(/*! ./new-institution.component.scss */ "./src/app/modules/lshp-admin/new-institution/new-institution.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewInstitutionComponent);
    return NewInstitutionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-lshp-admin-lshp-admin-module.js.map