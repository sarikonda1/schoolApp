import { Component, ViewChild, Input, ChangeDetectorRef, ElementRef, OnInit, OnChanges } from '@angular/core';

import { CommonComponent } from 'app/shared/common/common.component';
import { SearchUserView } from 'app/modules/lshp-admin/models/search-user-view';

import { UsersService } from 'app/service/academic-service';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { Pattern, AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { SchoolEditUserViewModel } from '../models/school-edit-user-view-model';
import { RoleIdView } from '../models/roleId-view';
import { SchoolUserWithRolesViewModel } from '../models/school-user-with-roles-view-model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-school-user',
  templateUrl: './school-user.component.html',
  styleUrls: ['./school-user.component.scss']
})

export class SchoolUserComponent extends CommonComponent implements OnInit, OnChanges {

  @ViewChild('stepper') stepper;
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;

  accordionStep: number;
  loaded = false;
  _searchUserView: SearchUserView;
  schoolEditUserViewModel: SchoolEditUserViewModel;
  doValidate = true;

  userDetailsForm: FormGroup;
  contactDetailsForm: FormGroup;
  addressesDetailsForm: FormGroup;
  roleIdViews: Array<RoleIdView> = [];
  roleIdView: RoleIdView;
  rolesForm: FormGroup;
  HttpStatus: any;

  // refernces for ng prime table
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  totalItems: number;
  tabSettings: {};
  updateShow = false;
  schoolRepRoleId: Array<string> = [];
  isDeleteAllRequired = false;
  closeAddPanel = false;
  buttonDisable = false;
  dataLoaded = Promise.resolve(false);
  filterDetails: any;
  countryDetails: any;
  stateDetailsList: any;

  schoolUserWithRolesViewModel: SchoolUserWithRolesViewModel;
  genderDetailsList: any;
  detailsresults: any;
  display = false;
  statusList: any = [];
  gendername: any;
  currentComponent = 'SchoolUserComponent';
  institutionDetails: any = [];
  disbleSubmitBtn = false;
  rolesList: any = [];
  userRolesMultiCheck: DropDownConfModel;
  showMultiSelectDropDown: boolean;
  rolesToCheck: any = [];

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
  detailsShow = false;
  emailDisable: boolean;

  today = new Date();
  yesterday = new Date(this.today.setDate(this.today.getDate() - 1));
  currentDate: any = this.yesterday;
  interactedStepperIndex: Number = 0;
  hideGrid = false;
  dateOfBirth: any;
  rolesData: any[];

  // End



  constructor(private userService: UsersService, private schoolUserService: UsersService,
    public commonService: CommonService, private countryService: CountryService, private stateService: StateService,
    private typeService: TypeService, public dialogRef: MatDialog, private cd:
      ChangeDetectorRef, public snackBar: MatSnackBar, private routes: ActivatedRoute, private router: Router) {
    super();

  }



  ngOnInit(): void {
    this.getAllRoles();
    this.countryList();
    this.formSetting();
    // status codes
    this.HttpStatus = require('http-status-codes');

    this.currentComponent = 'SchoolUserComponent';

    // Table Colums
    this.cols = [
      { field: 'userName', header: 'username', sort: true },
      { field: 'firstName', header: 'firstname', sort: true },
      { field: 'lastName', header: 'lastname', sort: true },
      { field: 'status', header: 'status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    this.viewInitialization();
    this.genderTypeList();
  }


  ngOnChanges(): void {
    this.genderTypeList();
    let schoolId = '';
    this.commonService.getdropDown().subscribe(res => schoolId = res.overLay);
    if (schoolId !== undefined) {
      this.showMultiSelectDropDown = false;
      this.getAllRoles();
    }
  }

  // Form Setting
  formSetting(): void {
    // Initilization  User Details Form 
    this.userDetailsForm = new FormGroup({
      id: new FormControl(''),
      genderTypeId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN), Validators.required]),
      lastName: new FormControl('', [Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN), Validators.required]),
      middleName: new FormControl('', [Validators.maxLength(45), Validators.pattern(Pattern.ALPHABET_PATTERN)]),
      dateOfBirth: new FormControl()
    });
    // End

    // Initilization Contact Form 
    this.contactDetailsForm = new FormGroup({
      email1: new FormControl('', [Validators.maxLength(50), Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]),
      website: new FormControl('', [Validators.maxLength(50), Validators.pattern(Pattern.WEBSITE_PATTERN)]),
      mobileTel: new FormControl('', [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN)]),
      otherTel: new FormControl('', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN)]),
      landTel: new FormControl('', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN)])
    });
    // End

    // Initilization Contact Form  HttpStatus: any; 
    this.addressesDetailsForm = new FormGroup({
      line1: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      line2: new FormControl('', [Validators.maxLength(45)]),
      line3: new FormControl('', [Validators.maxLength(45)]),
      countryId: new FormControl('', [Validators.required]),
      stateId: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      pincode: new FormControl('', [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]),
    });
    // End


    // Initilization Contact Form  HttpStatus: any; 
    this.rolesForm = new FormGroup({
      roleId: new FormControl(null, [Validators.required]),
    });
    // End

    this.routes.params.subscribe((params: Params) => {
      if (params['id']) {
        this.hideGrid = true;
        this.addForms();
        this.data = params['id'];
      } else {
        this.hideGrid = false;
      }
    });
  }

  viewInitialization(): void {
    // Initilization UserFormDetails Form 
    this.schoolUserWithRolesViewModel = {
      line1: '',
      line2: '',
      line3: '',
      pincode: '',
      countryId: 0,
      stateId: 0,
      city: '',
      email1: '',
      website: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      genderTypeId: 0,
      firstName: '',
      lastName: '',
      roleIds: [{
        roleId: 0
      }],
      schoolId: ''

    };
    // End

    // Initilization UserFormDetails Form 
    this.schoolEditUserViewModel = {
      userId: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      middleName: '',
      line1: '',
      line2: '',
      line3: '',
      pincode: '',
      countryId: '',
      stateId: '',
      city: '',
      genderTypeId: 0,
      email1: '',
      website: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      schoolId: ''
    };
    // End

    // searchUser
    this._searchUserView = {
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      sortBy: 'Id',
      sortOrder: 1,
      status: [],
      userName: [],
      firstName: [],
      lastName: []
    };
    // End
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this._searchUserView = modelTableComponent;
    }
  }
  // End

  searchViewInit(): void {
    // searchUser
    this._searchUserView = {
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      sortBy: 'Id',
      sortOrder: 1,
      instituteId: '',
      userName: [],
      firstName: [],
      lastName: [],
      status: []
    };
    // End
  }

  // gender List
  genderTypeList(): void {
    this.closeAddPanel = false;
    this.typeService.typeByCodeBasedOnCategory().subscribe(response => {
      this.genderDetailsList = response;
    });
    this.getAllUser(this._searchUserView);
  }
  // End

  // get All User
  getAllUser(_searchUserView: SearchUserView): void {
    if (!_searchUserView) {
      return;
    }
    this.schoolUserService.getAllSchoolUser(this.data, _searchUserView.userName,
      _searchUserView.firstName, _searchUserView.lastName, _searchUserView.status,
      _searchUserView.sortBy, _searchUserView.sortOrder, _searchUserView.pageNumber, _searchUserView.pageSize)
      .subscribe(res => this.userResponse(res), error => {
        this.errorResponse(error);
      });
  }

  userResponse(response: any): void {
    this.rows = [];
    if (response.statusCode !== this.HttpStatus.OK) {
      this.rows = [];
    } else {
      if (response.userAccessList != null) {
        this.rows = response.userAccessList.list;
        this.totalItems = response.userAccessList.totalItems;
      }
      else {
        this.rows = [];
      }
    }
    this.rows.forEach((e: any) => {
      e.operations = [{
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DETAILS_DISPLAY,
        icon: AppSettings.DETAILS_ICON
      }];
      (e.code === AppSettings.USR_NEW) ? e.operations.push(
        {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE,
          operationName: AppSettings.DELETE
        }) : (e.code === AppSettings.USR_ACT) ? e.operations.push({
          name: AppSettings.LOCK_OPERATION,
          icon: AppSettings.LOCK,
          operationName: AppSettings.LOCK
        }) : e.operations.push({
          name: AppSettings.UNLOCK_OPERATION,
          icon: AppSettings.UNLOCK
        });
    });

    this.filterDetails = response.filters;
    
    this.tabSettings = {
      columns: this.cols,
      model: this._searchUserView,
      showSelectAll: this.isDeleteAllRequired,
      rows: this.rows,
      tablename: '',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: true,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      // tabTable: true,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Manage School Users'
        }
      },
      filtersList: response.filters,
    };
  }
  // End

  // cancel User Details
  onCancelClick(): void {
    if (this.stepper !== undefined) {
      this.stepper.reset();
      this.rolesToCheck = [];
      this.rolesForm.controls['roleId'].patchValue(this.compareArrayData(this.rolesList, this.rolesToCheck));
    }
    this.commonService.setOverlay(AppSettings.HIDE);
    this.closeAddPanel = true;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.detailsShow = false;
    this.detailsresults = undefined;
    if (this.hideGrid) {
      this.router.navigate(['/manage-school/school-details']);
    }
  }
  // End

  // get roles
  getAllRoles(): void {
    this.schoolUserService.getRolesList().subscribe(response => this.rolesListNames(response));
  }
  rolesListNames(res: any): void {
    this.rolesList = [];
    res.roles.forEach(element => {
      this.rolesList.push({ label: element.name, value: element.id });
    });
    this.showMultiSelectDropDown = true;
    this.userRolesMultiCheck = { multiSelect: true, placeholder: 'role', data: this.rolesList, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.cd.detectChanges();
  }
  // End

  // cancel User Details
  addForms(): void {
    this.rolesToCheck = [];
    this.closeAddPanel = false;
    this.detailsShow = false;
    this.emailDisable = false;
    if (this.stepper) {
      this.stepper.reset();
    }
    this.interactedStepperIndex = 0;
    this.loaded = false;
    this.cd.detectChanges();
    this.loaded = true;
    this.cd.detectChanges();
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
      if (!isUpdate) {
        this.addressesDetailsForm.controls.stateId.setValue(null);
      }
      this.stateDetailsList = response.states;
    });
  }
  // End

  resetMobileNumbers(formName): void {
    const that = this;
    Object.keys(that[formName].value).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel': that[formName].value[key] = that.checkemptyNumber(that[formName].value[key], key); break;
      }
    });
    return this[formName].value;
  }
  // Add New User
  addNewUser(): void {
    this.roleIdViews = [];
    this.rolesForm.value.roleId.forEach(element => {
      if (element) {
        this.roleIdViews.push({ roleId: element.value });
      }
    });
    Object.assign(this.schoolUserWithRolesViewModel, this.userDetailsForm.value, this.addressesDetailsForm.value, this.resetMobileNumbers('contactDetailsForm'));
    this.schoolUserWithRolesViewModel.roleIds = this.roleIdViews;
    this.schoolUserWithRolesViewModel.schoolId = this.data;
    this.userService.registerSchoolUser(this.schoolUserWithRolesViewModel).subscribe(res => this.addResponse(res), error => this.errorResponse(error));
  }

  addResponse(response: any): void {
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
      document.getElementById('resetButtonStepper').click();
      if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
        this.closeAddPanel = false;
      }
      else {
        this.clearFunction();
      }

    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End


  // row-wise actions
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.updateShow = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.schoolUserService.getSchoolUserDetail(response.clickedRow.id, this.data).subscribe(res => this.singleUserDetails(res));
    } else if (response.operation === AppSettings.LOCK) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_LOCKUSER, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.lockUser(response.clickedRow.id).subscribe(res => this.lockResponse(res));
        }
      });

    } else if (response.operation === AppSettings.DETAILS) {
      this.detailsShow = true;
      this.updateShow = false;
      this.buttonDisable = true;
      this.schoolUserService.getSchoolUserDetail(response.clickedRow.id, this.data).subscribe(res => this.singleUserDetails(res));
    } else if (response.operation === AppSettings.UNLOCK_OPERATION) {

      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_UNLOCKUSER, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.unLockUser(response.clickedRow.id).subscribe(res => this.lockResponse(res));
        }
      });
    } else if (response.operation === AppSettings.DELETE) {

      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.userService.deleteUser(response.clickedRow.id).subscribe(res => this.deleteResponse(res));
        }
      });
    }
  }

  deleteResponse(response: any): void {
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
      if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
        this.closeAddPanel = false;
      }
      else {
        this.clearFunction();
      }
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }

  // lockResponse
  lockResponse(response: any): void {
    this.searchViewInit();
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.CONFLICT)) {
      if (response.statusCode === this.HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      }
      else {
        this.clearFunction();
      }
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // Edit Details
  singleUserDetails(userDetails: any): void {
    this.closeAddPanel = false;
    this.detailsresults = userDetails.userDetails;
    this.detailsresults.genderName = this.genderDetailsList.filter(element => element.id === this.detailsresults.genderTypeId)[0].name;
    if (!this.detailsShow) {
      if (this.detailsresults.address) {
        this.stateDetails(this.detailsresults.address.countryId, true);
      }
      this.editFormSet(userDetails);
      this.emailDisable = this.detailsresults.code === AppSettings.USR_NEW ? false : true;
      this.stepper._steps._results.forEach((x) => {
        x.interacted = true;
      });
      this.interactedStepperIndex = this.stepper._steps._results.length;
      this.customSteperLabelChange();
      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  // End

  // edit Form
  editFormSet(userDetails: any): void {
    this.loaded = false;
    if (userDetails.userDetails.address) {
      this.addressesDetailsForm.patchValue(userDetails.userDetails.address);
    }
    else {
      this.countryList();
    }

    const formNames = ['contactDetailsForm'];
    const numbers = ['mobileTel', 'otherTel', 'landTel'];
    const that = this;
    for (let i = 0; i < formNames.length; i++) {
      Object.keys(that[formNames[i]]['controls']).forEach((key) => {
        that[formNames[i]].controls[key].setValue(userDetails.userDetails.contact[key]);
        if (numbers.find(x => x === key)) {
          that.updateCountryCode(key, userDetails.userDetails.contact[key]);
        }
      });
    }

    this.userDetailsForm.patchValue(userDetails.userDetails);

    userDetails.userDetails.roles.forEach(element => {
      this.rolesToCheck.push({ label: element.roleName, value: element.id });
    });

    this.rolesForm.reset();
    this.rolesData = this.compareArrayData(this.rolesList, this.rolesToCheck);
    this.rolesForm.setValue({ roleId: this.compareArrayData(this.rolesList, this.rolesToCheck) });

    for (let i = 0; i < this.stepper._steps._results.length; i++) {
      this.stepper._steps._results[i].interacted = true;
    }
    this.cd.detectChanges();
    this.loaded = true;
    this.cd.detectChanges();
  }
  // End

  addUpdateNewUser(): void {
    if (this.detailsresults && this.detailsresults.id) {
      this.UpdateNewUser();
    } else {
      this.addNewUser();
    }
  }

  // Update User
  UpdateNewUser(): void {
    this.roleIdViews = [];
    this.rolesForm.value.roleId.forEach(element => {
      if (element) {
        this.roleIdViews.push({ roleId: element.value });
      }
    });
    Object.assign(this.schoolEditUserViewModel, this.userDetailsForm.value, this.addressesDetailsForm.value, this.resetMobileNumbers('contactDetailsForm'));
    this.schoolEditUserViewModel.roleIds = this.roleIdViews;
    this.schoolEditUserViewModel.userId = this.detailsresults.id;
    this.schoolEditUserViewModel.schoolId = this.data;
    this.schoolUserService.editSchoolUsers(this.schoolEditUserViewModel).subscribe(res => this.updateResponse(res), error => this.errorResponse(error));
  }

  updateResponse(response: any): void {
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.BAD_REQUEST)) {
      if (response.statusCode === this.HttpStatus.BAD_REQUEST) {
        this.closeAddPanel = false;
      }
      else {
        this.clearFunction();
      }
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End


  // not to allow alphabets for number fields
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  // End

  // mobile validation
  getNumber(e, label): void {
    this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
  }
  // End

  // MobileNumber
  onCountryChangeMobile(e, label): void {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label] = '+' + e.dialCode;
    this.contactDetailsForm.controls[label].setValue('');
  }
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  onError(obj, label): void {
    if (!obj && this.contactDetailsForm.value[label]) {
      this.contactDetailsForm.get(label).setErrors({ 'invalid_mobile': true });
    }
  }
  // End

  // clear
  clearFunction(): void {

    this.updateShow = false;
    this.rolesToCheck = [];
    this.rolesForm.controls['roleId'].patchValue(this.compareArrayData(this.rolesList, this.rolesToCheck));
    this.stepper.reset();
    this.detailsresults = undefined;
    this.closeAddPanel = true;
    this.userDetailsForm.reset();
    this.contactDetailsForm.reset();
    this.addressesDetailsForm.reset();
    this.updateShow = false;
    this.getAllUser(this._searchUserView);
    this.buttonDisable = false;
    if (this.hideGrid) {
      this.router.navigate(['/manage-school/school-details']);
    }
  }
  // End

  onSelect(values: any): void {
    this.rolesForm.controls['roleId'].setValue(values);
    this.rolesForm.value.roleId.forEach(element => {
      if (element.value === undefined) {
        const index = this.rolesForm.value.roleId.findIndex(x => x.value === undefined);
        (this.rolesForm.value.roleId.splice(index, 1));
      }
    });
  }

  checkemptyNumber(number, key): void {
    if (number) {
      return this.finalMobileNumbers[key];
    } else {
      return null;
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
  getCustomAddress(): string {
    let address = '';
    for (const keys in this.addressesDetailsForm.controls) {
      if (keys === 'line1' || keys === 'line2' || keys === 'line3') {
        if (this.addressesDetailsForm.controls[keys].value) {
          address += this.addressesDetailsForm.controls[keys].value + ',';
        }
      }
    }
    return address = address.replace(/,+/g, ',').replace(/,\s*$/, '');
  }
  OnSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }

    this.userDetailsForm.controls['dateOfBirth'].setValue(this.userDetailsForm.value.dateOfBirth != null ?
      this.userDetailsForm.value.dateOfBirth : this.getFormattedDateBySchoolDateFormat(this.userDetailsForm.value.dateOfBirth));
    this.dateOfBirth = this.getFormattedDateBySchoolDateFormat(this.userDetailsForm.value.dateOfBirth);
  }
}

