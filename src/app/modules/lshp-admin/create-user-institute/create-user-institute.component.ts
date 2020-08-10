import { Component, ViewChild, Input, ChangeDetectorRef, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


import { AppSettings, Pattern } from 'app/app.constants';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StateService } from 'app/service/academic-service/api/state.service';

import { TypeService } from 'app/service/academic-service/api/type.service';
import { SearchUserView } from '../models/search-user-view';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

import { CommonComponent } from 'app/shared/common/common.component';
import { UsersService } from 'app/service/academic-service';
import { AddressView } from 'app/models/address-view';
import { ContactView } from 'app/models/contact-view';
import { PostUserViewModel } from '../models/post-user-view-model';
import { CommonService } from 'app/service/common.service';
import { InstituteUserViewModel } from 'app/models/user-management/institute-user-view';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-user-institute',
  templateUrl: './create-user-institute.component.html',
  styleUrls: ['./create-user-institute.component.scss']
})

export class CreateUserInstituteComponent extends CommonComponent implements OnInit, OnChanges {

  @ViewChild('stepper') stepper;
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;


  _searchUserView: SearchUserView;
  doValidate = true;
  userDetailsForm: FormGroup;

  // refernces for ng prime table
  rows: Array<any>;
  cols: any[];
  totalItems: number;
  tabSettings: {};

  updateShow = false;
  schoolRepRoleId: Array<string> = [];
  closeAddPanel = false;
  buttonDisable = false;
  loaded = false;
  filterDetails: any;
  countryDetails: any;
  stateDetailsList: any;

  userFormDetails: PostUserViewModel;
  userEditView: InstituteUserViewModel;
  contactView: ContactView;
  addressView: AddressView;
  genderDetailsList: any;
  detailsresults: any;
  gendername: any;
  currentComponent = 'CreateUserInstituteComponent';
  countryName: any;
  stateName: any;
  // Mobile Number Check Variables
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true };

  intialCountryCode = {
    mobileTel: '+91',
    otherTel: '+91',
    landTel: '+91'
  };
  finalMobileNumbers = {
    mobileTel: '',
    otherTel: '',
    landTel: ''
  };
  // End

  emailDisable: boolean;
  detailsShow: boolean;
  userContactInfo: any;
  userAddressInfo: any;
  interactedStepperIndex: Number = 0;
  hideGrid: boolean;
  today = new Date();
  yesterday = new Date(this.today.setDate(this.today.getDate() - 1));
  firstStepperControlForm: FormGroup;
  constructor(public commonService: CommonService, private userService: UsersService,
    private countryService: CountryService, private stateService: StateService,
    private typeService: TypeService, public dialogRef: MatDialog, private changeDetect: ChangeDetectorRef, public snackBar: MatSnackBar, public routes: ActivatedRoute,
    public router: Router) {
    super();
  }

  ngOnInit(): void {
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
    this.routes.params.subscribe((params: Params) => {
      if (params['id']) {
        this.hideGrid = true;
        this.data = params['id'];
        this.addForms();
      } else {
        this.hideGrid = false;
      }
    });
  }

  ngOnChanges(): void {
    this.tableInitailization();
  }

  tableInitailization(): void {
    // searchUser
    this._searchUserView = {
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      sortBy: 'Id',
      sortOrder: 1
    };
    // End

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this._searchUserView = modelTableComponent;
    }
    this.getAllUser(this._searchUserView);
  }

  tableData(_view: any): void {
    this._searchUserView = _view;
    this.getAllUser(this._searchUserView);
  }

  // Form Setting
  formInitialization(): void {
    // Initilization  User Details Form 
    this.userDetailsForm = new FormGroup({
      id: new FormControl(null),
      genderTypeId: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      middleName: new FormControl(null, [Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      dateOfBirth: new FormControl(),
      person: new FormGroup({
        genderTypeId: new FormControl(null, [Validators.required]),
        contact: new FormGroup({
          email1: new FormControl(null, [Validators.maxLength(50), Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]),
          website: new FormControl(null, [Validators.maxLength(50), Validators.pattern(Pattern.WEBSITE_PATTERN)]),
          mobileTel: new FormControl(null, [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN)]),
          otherTel: new FormControl(null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN)]),
          landTel: new FormControl(null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN)])
        }),
        address: new FormGroup({
          line1: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
          line2: new FormControl(null, [Validators.maxLength(45)]),
          line3: new FormControl(null, [Validators.maxLength(45)]),
          countryId: new FormControl(null, [Validators.required]),
          stateId: new FormControl(null, [Validators.required]),
          city: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
          pincode: new FormControl(null, [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]),
        })
      })
    });
    this.firstStepperControlForm = new FormGroup({
      genderTypeId: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      middleName: new FormControl(null, [Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      dateOfBirth: new FormControl(),
    });
  }
  // gender List
  genderTypeList(): void {
    this.typeService.typeByCodeBasedOnCategory().subscribe(response => {
      this.genderDetailsList = response;
    });
  }
  // End

  // get All User
  getAllUser(_searchUserView: SearchUserView): void {
    _searchUserView.instituteId = this.data;
    this.userService.getAllUsers(_searchUserView.instituteId, _searchUserView.userName,
      _searchUserView.firstName, _searchUserView.lastName, _searchUserView.status,
      _searchUserView.sortBy, _searchUserView.sortOrder, _searchUserView.pageNumber, _searchUserView.pageSize)
      .subscribe(res => this.userResponse(res), error => {
        this.errorResponse(error);
      });
  }

  userResponse(response: any): void {
    if (response.userAccessList != null) {
      this.rows = response.userAccessList.list;
      this.totalItems = response.userAccessList.totalItems;
    }
    else {
      this.rows = [];
    }
    const userType = this.getTokenParam('_ut');
    this.rows.forEach((e: any) => {

      e.operations = [{
        name: AppSettings.DETAILS_DISPLAY,
        icon: AppSettings.DETAILS_ICON
      }];

      if ((userType === AppSettings.LSIT) || (e.isPrimary !== 1)) {
        e.operations.push({
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT
        }),
        e.code === AppSettings.USR_NEW ? e.operations.push(
          {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          }) : e.code === AppSettings.USR_ACT ? e.operations.push({
            name: AppSettings.LOCK_OPERATION,
            icon: AppSettings.LOCK,
            operationName: AppSettings.LOCK
          }) : e.operations.push({
            name: AppSettings.UNLOCK_OPERATION,
            icon: AppSettings.UNLOCK
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
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Manage Users'
        },
      },
      filtersList: response.filters,
    };
  }

  // End

  // cancel User Details
  onCancelClick(): void {
    this.clear();
    if (this.hideGrid) {
      this.router.navigate(['/manage-institution/institute-details']);
    }
  }
  // End

  // cancel User Details
  addForms(): void {
    this.detailsShow = false;
    this.interactedStepperIndex = 0;
    this.loaded = false;
    this.changeDetect.detectChanges();
    this.loaded = true;
    this.changeDetect.detectChanges();
    this.closeAddPanel = false;
    this.emailDisable = false;
    this.detailsresults = [];
  }
  // End

  // CountryList
  countryList(): void {
    this.countryService.countryAllCountriesGet().subscribe(response => {
      this.countryDetails = response.commonViewModel;
    });
  }
  // End

  // StateList
  stateDetails(countryId: any, isUpdate = false): void {
    this.stateService.stateAllStatesGet(countryId).subscribe(response => {
      this.stateDetailsList = response.states;
    });
    if (!isUpdate) {
      this.userDetailsForm.controls.person['controls'].address['controls'].stateId.setValue(null);
    }
  }
  // End

  // User Address Details
  addressDetails(addressForm: any): void {
    this.countryDetails.forEach(element => {
      if (this.addressView.countryId === element.id) {
        this.countryName = element.name;
      }
    });

    if (this.stateDetailsList.length > 0) {
      this.stateDetailsList.forEach(element => {
        if (this.addressView.stateId === element.id) {
          this.stateName = element.name;
        }
      });
    }
  }

  // // Add New User
  addNewUser(): void {
    this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
    this.userDetailsForm.value.person.genderTypeId = this.userDetailsForm.value.genderTypeId;
    this.userDetailsForm.value.person.genderTypeId ?
      this.userDetailsForm.controls['person']['controls']['genderTypeId']
        .setErrors(null) : this.userDetailsForm.controls['person']['controls']['genderTypeId'].setErrors({ 'required': true });

    this.resetMobileNumbers(this.userDetailsForm.controls['person']['controls']['contact']);
    if (this.userDetailsForm.valid) {
      this.userFormDetails = this.userDetailsForm.value;
      this.userFormDetails.instituteId = this.data;
      this.userService.registerInstituteAdmin(this.userFormDetails).subscribe(res => this.resultResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  resetMobileNumbers(formName): void {
    const that = this;
    Object.keys(formName.value).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel': formName.value[key] = that.checkemptyNumber(formName.value[key], key); break;
      }
    });
    return formName.value;
  }

  // // row-wise actions
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.updateShow = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.detailsShow = false;
      this.userService.getUserDetails(response.clickedRow.id, this.data).subscribe(res => this.singleUserDetails(res), error => {
        this.errorResponse(error);
      });
    }
    if (response.operation === AppSettings.UNLOCK_OPERATION) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_UNLOCKUSER, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.unLockUser(response.clickedRow.id).subscribe(res => this.resultResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    if (response.operation === AppSettings.LOCK) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_LOCKUSER), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.lockUser(response.clickedRow.id).subscribe(res => this.resultResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    if (response.operation === AppSettings.DETAILS) {
      this.detailsShow = true;
      this.detailsresults = null;
      this.userService.getUserDetails(response.clickedRow.id, this.data).subscribe(res => {
        this.singleUserDetails(res);
      }, error => {
        this.errorResponse(error);
      });
    }
    if (response.operation === AppSettings.DELETE) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.deleteUser(response.clickedRow.id).subscribe(res => this.resultResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }

  resultResponse(response: any): void {
    this.userDetailsForm.reset();
    this.firstStepperControlForm.reset();
    this.clear();
    this.getAllUser(this._searchUserView);
    this.openSnackBar(response.messages.ResultMessage);
    if (this.hideGrid) {
      this.router.navigate(['/manage-institution/institute-details']);
    }
  }


  // // Edit Details
  singleUserDetails(userDetails: any): void {
    this.detailsresults = userDetails.userDetails;
    this.userContactInfo = this.detailsresults.contact;
    this.userAddressInfo = this.detailsresults.address;
    if (this.detailsShow) {
      this.closeAddPanel = false;
      this.genderDetailsList.forEach(element => {
        if (element.id === this.detailsresults.genderTypeId) {
          this.gendername = element.name;
        }
      });
    } else {
      this.stepper._steps._results.forEach((x) => {
        x.interacted = true;
      });
      this.interactedStepperIndex = this.stepper._steps._results.length;
      this.customSteperLabelChange();
    }

    if (userDetails.userDetails.address != null && this.stepper !== undefined) {
      this.stateDetails(userDetails.userDetails.address.countryId, true);
      this.editFormSet(userDetails);
    }
    this.emailDisable = userDetails.userDetails.code === AppSettings.USR_NEW ? false : true;
  }
  // // End

  // // edit Form
  editFormSet(userDetails: any): void {
    this.userDetailsForm.patchValue(userDetails.userDetails); this.firstStepperControlForm.patchValue(userDetails.userDetails);

    this.userDetailsForm.controls['person']['controls']['contact'].patchValue(userDetails.userDetails.contact);
    this.userDetailsForm.controls.person['controls'].address.patchValue(userDetails.userDetails.address);
    const numbers = ['mobileTel', 'otherTel', 'landTel'];
    const that = this;
    Object.keys(this.userDetailsForm.controls['person']['controls']['contact']['controls']).forEach((key) => {
      this.userDetailsForm.controls['person']['controls']['contact'].controls[key].setValue(userDetails.userDetails.contact[key]);
      if (numbers.find(x => x === key)) {
        that.updateCountryCode(key, userDetails.userDetails.contact[key]);
      }
    });
    this.countryName = userDetails.userDetails.countryName;
    this.stateName = userDetails.userDetails.stateName;

    this.genderDetailsList.forEach(element => {
      if (element.id === userDetails.userDetails.genderTypeId) {
        this.gendername = element.name;
      }
    });

    this.loaded = false;
    this.changeDetect.detectChanges();
    this.loaded = true;
    this.changeDetect.detectChanges();
  }
  // // End

  addUpdateNewUser(): void {
    (this.detailsresults === undefined || this.detailsresults.length === 0) ? this.addNewUser() : this.updateNewUser();
  }

  // Update User
  updateNewUser(): void {
    this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
    this.userDetailsForm.value.person.genderTypeId = this.userDetailsForm.value.genderTypeId;
    this.userDetailsForm.value.person.genderTypeId ?
      this.userDetailsForm.controls['person']['controls']['genderTypeId']
        .setErrors(null) : this.userDetailsForm.controls['person']['controls']['genderTypeId'].setErrors({ 'required': true });
    this.resetMobileNumbers(this.userDetailsForm.controls['person']['controls']['contact']);
    if (this.userDetailsForm.valid) {
      this.userEditView = this.userDetailsForm.value;
      this.userEditView.instituteId = this.data;
      this.userService.editUser(this.userEditView).subscribe(res => this.resultResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  // not to allow alphabets for number fields
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  // End

  getNumber(e, label): void {
    this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
  }

  // MobileNumber
  onCountryChangeMobile(e, label): any {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label] = '+' + e.dialCode;
    this.userDetailsForm.controls.person['controls'].contact['controls'][label].setValue('');
  }
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  onError(obj, label): void {
    if (!obj && this.userDetailsForm.controls.person['controls'].contact.value[label]) {
      this.userDetailsForm.controls.person['controls'].contact.get(label).setErrors({ 'invalid_mobile': true });
    }
  }
  // End

  clear(): void {
    this.emailDisable = false;
    this.stepper.reset();
    this.detailsresults = [];
    this.updateShow = false;
    this.closeAddPanel = true;
  }

  checkemptyNumber(number, key): string {
    if (number) {
      return this.finalMobileNumbers[key];
    } else {
      return '';
    }
  }

  updateCountryCode(key, val): void {
    if (val) {
      const data = val.split(' ');
      if (data[0] !== val) {
        this.intialCountryCode[key] = data[0];
        this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
      } else {
        this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
      }
    }
  }
  onSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex > 0) {
      this.userDetailsForm.patchValue(this.firstStepperControlForm.value);
    }
  }
  getNamesOnId(name, value): string {
    if (!value) {
      return '';
    }
    let x;
    switch (name) {
      case 'gender':
        return (x = this.genderDetailsList.filter(element => element.id === value)).length ? x[0].name : '';
      case 'country':
        return (x = this.countryDetails.filter(element => element.id === value)).length ? x[0].name : '';
      case 'state':
        return (x = this.stateDetailsList.filter(element => element.id === value)).length ? x[0].name : '';
      default: break;
    }
  }

  trimTextBoxSpacesWithParentForm(primaryForm: any, secondaryForm: any, form: any, key: string): void {
    this[primaryForm].controls[secondaryForm].controls[form].controls[key]
      .setValue(this.commonService.trimSpaces(this[primaryForm].controls[secondaryForm].controls[form].controls[key].value));
  }
  onClickCancel(): void{
    this.scrollIntoView('app-table');
  }
}

