import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, FormGroupDirective } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { fuseAnimations } from '@fuse/animations';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

import * as HttpStatus from 'http-status-codes';
import { FeeTypeDataView } from '../models/fee-type-data-view';
import { FeeTypeViewModel } from '../models/fee-type-view-model';
import { SearchFeeTypeView } from '../models/search-fee-type-view';

import { SchoolFacilityService } from 'app/service/general/api/school-facility.service';
import { CommonService } from 'app/service/common.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';

@Component({
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.scss'],
  providers: [FeeTypeService, SchoolFacilityService],
  animations: fuseAnimations,
})
export class FeeTypeComponent extends CommonComponent implements OnInit {

  searchFeeTypeView: SearchFeeTypeView;
  @ViewChild('addFeeTypes') addSchoolFacilities;
  @ViewChild('feeTypeForm') feeTypeForm;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  // viewmodel declaration variables
  feeTypeView: FeeTypeDataView;
  feeTypeViewModel: FeeTypeViewModel;

  // Array variable declarations
  facilityOptionsSelect: Array<any> = [];
  facilityDropDown: Array<any> = [];
  feeAccountOptionsSelect: Array<any> = [];
  feeAccountDropDown: Array<any> = [];
  feeTermOptionsSelect: Array<any> = [];
  feeTermDropDown: Array<any> = [];
  feeTypeCategoriesSelect: Array<any> = [];
  feeTypeCategoryDropDown: Array<any> = [];
  feeTermsIds: Array<any> = [];
  filterRowData: any = [];
  cols: { field: string; header: string; sort: boolean; }[];

  // variable declarations
  currentComponent = 'FeeTypeComponent';
  HttpStatus: any;
  feeDetails: any;

  // formGroup Declaration variables
  feetypeForm: FormGroup;

  // table variables
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];

  // boolean variable declarations
  disbleSubmitBtn = false;
  feeTypeFormSubmitted = false;
  updateShow = false;
  isEdit: boolean;
  closeAddPanel = false;
  isSchoolFacility = true;
  buttonName: any;
  feeTermMulticheck: DropDownConfModel;
  feeTermsToCheck: any = [];
  feeTypeCategoryData: any;
  showFeeterm = true;
  dataLoaded = Promise.resolve(false);
  isSameForEntireClass = true;
  code: any;
  schoolFacilityRequired = false;
  isDisabled: boolean;

  constructor(private fb: FormBuilder, private feeTypeService: FeeTypeService, public dialogRef: MatDialog, public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
    this.searchFeeTypeView = {
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    this.feetypeForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      displayName: new FormControl('', [Validators.maxLength(45)]),
      code: new FormControl('', [Validators.maxLength(6)]),
      feeDescription: new FormControl('', [Validators.maxLength(135)]),
      isSameForEntireClass: new FormControl(false),
      schoolFacilityId: new FormControl(''),
      feeTypeCategoryId: new FormControl('', [Validators.required]),
      feeAccountId: new FormControl('', [Validators.required]),
      feeTermId: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.feeTypeViewModel = {
      feeTermIds: [],
      name: '',
      isSameForEntireClass: 0,
      feeTypeCategoryId: 0,
      feeAccountId: 0
    };
    this.feeTypeView = {
      feeTermIds: [],
      name: '',
      isSameForEntireClass: 0,
      feeTypeCategoryId: 0,
      feeAccountId: 0
    };
    this.feeTermCheck(false);
    this.searchFeeTypeView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchFeeTypeView = modelTableComponent;
    }
    // table columns
    this.cols = [
      { field: 'name', header: 'Name', sort: false },
      { field: 'displayName', header: 'displayname', sort: false },
      { field: 'code', header: 'Code', sort: false },
      { field: 'feeDescription', header: 'Description', sort: false },
      { field: 'feeTypeCategoryName', header: 'Fee Type Category', sort: false },
      { field: 'feeAccountDisplayName', header: 'Fee Account', sort: false },
      { field: 'schoolFacilitiyName', header: 'School Facility', sort: false },
      { field: 'isSameForEntireClass', header: 'Is Same For Entire Class', sort: false },
      { field: 'feeTermName', header: 'Fee Term', sort: false },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.searchFeeTypeView,
      tablename: 'Fee Types',
      componentName: this.currentComponent
    };

    if (this.getTokenParam('_as')) {
      this.getAllFeeTypes(this.searchFeeTypeView);
      this.getFacilities();
      this.getFeeAccounts();
      this.getFeeTypeCategories();
      this.getFeeTerms();
    }else{
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
      this.tabSettings['headerOperations'] = {
        addingForm: {
          required: false
        }
      };
    } 
  }

  // getting facility names
  getFacilities(): void {
    this.feeTypeService.facilities().subscribe((res: any) => this.facilityGet(res), error => {
      this.errorResponse(error);
    });
  }
  facilityGet(data: any): void {
    this.facilityOptionsSelect = [];
    for (let i = 0; i < data.schoolFacilityDataViewModel.length; i++) {
      this.facilityOptionsSelect.push
        ({ value: data.schoolFacilityDataViewModel[i].id, label: data.schoolFacilityDataViewModel[i].facilityName });
      this.facilityDropDown = this.facilityOptionsSelect;
    }
  }
  // End

  // getting feeAccounts
  getFeeAccounts(): void {
    this.feeTypeService.getFeeAccounts().subscribe((res: any) => this.feeAccountsGet(res), error => {
      this.errorResponse(error);
    });
  }
  feeAccountsGet(data: any): void {
    this.feeAccountOptionsSelect = [];
    if (!data.commonViewModel){
      return;
    }
    for (let i = 0; i < data.commonViewModel.length; i++) {
      this.feeAccountOptionsSelect.push
        ({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
      this.feeAccountDropDown = this.feeAccountOptionsSelect;

    }
  }
  // End

  // getting feeTerms
  getFeeTerms(): void {
    this.feeTypeService.getFeeTerms().subscribe((res: any) => {
      this.feeTermsGet(res);
      this.dataLoaded = Promise.resolve(true);
    }, error => {
      this.errorResponse(error);
    });
  }
  feeTermsGet(data: any): void {
    this.feeTermOptionsSelect = [];
    if (data.commonViewModel) {
      for (let i = 0; i < data.commonViewModel.length; i++) {
        this.feeTermOptionsSelect.push
          ({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
        this.feeTermDropDown = this.feeTermOptionsSelect;
      }
      if (this.feeTermDropDown) {
        this.feeTermCheck(true);
      }
    }
  }
  // End

  // getting feeAccounts
  getFeeTypeCategories(): void {
    this.feeTypeService.getFeeTypeCategories().subscribe((res: any) => this.feeTypeCategoriesGet(res), error => {
      this.errorResponse(error);
    });
  }
  feeTypeCategoriesGet(data: any): void {
    this.feeTypeCategoryData = data.commonViewModel;
    this.feeTypeCategoriesSelect = [];
    for (let i = 0; i < data.commonViewModel.length; i++) {
      this.feeTypeCategoriesSelect.push
        ({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
      this.feeTypeCategoryDropDown = this.feeTypeCategoriesSelect;
    }
  }
  // End

  // get all feetypes
  getAllFeeTypes(searchFeeTypeDataView: SearchFeeTypeView): void {
    this.searchFeeTypeView = searchFeeTypeDataView;
    this.feeTypeService.fetchingFeeTypes(this.searchFeeTypeView.Name,
      this.searchFeeTypeView.displayName, this.searchFeeTypeView.schoolFacilityName,
      this.searchFeeTypeView.feeTypeCategoryName,
      this.searchFeeTypeView.feeAccountName,
      this.searchFeeTypeView.feeTermName,
      this.searchFeeTypeView.Code,
      this.searchFeeTypeView.description, this.searchFeeTypeView.SchoolFacilityId, this.searchFeeTypeView.FeeTermId,
      this.searchFeeTypeView.FeeTypeCategoryId, this.searchFeeTypeView.FeeAccountId,
      this.searchFeeTypeView.IsSameForEntireClass, this.searchFeeTypeView.sortBy, this.searchFeeTypeView.sortOrder,
      this.searchFeeTypeView.pageNumber, this.searchFeeTypeView.pageSize).subscribe(res => this.getAllResponse(res), error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  getAllResponse(feeData: any): void {
    if (feeData.feetypes == null) {
      this.rows = [];
    } else {
      this.rows = feeData.feetypes.list;
      this.totalItems = feeData.feetypes.totalItems;
    }

    const feeTypeOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];

    this.filterRowData = [];
    if (feeData.feetypes) {
      this.searchFeeTypeView.pageNumber = feeData.feetypes.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.searchFeeTypeView,
      rows: this.rows,
      tablename: 'Fee Types',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      rowGroupingColumns: ['name', 'displayName', 'code', 'feeDescription', 'feeTypeCategoryName', 'feeAccountDisplayName', 'schoolFacilitiyName', 'isSameForEntireClass'],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Fee Types'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        navigateComponent: {
          name: '',
          btnName: ''
        }
      },
      filtersList: feeData.filters
    };
    this.filterRowData = this.rows;

    // filtering row group data
    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.name === element.name;
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;
    // apply edit and delete
    this.filterRowData.forEach(element => {
      this.rows.forEach(element1 => {
        if (element.name === element1.name &&
          element.id === element1.id &&
          element.feeTermName === element1.feeTermName) {
          element1.operations = [
            {
              name: AppSettings.EDIT_OPERATION,
              icon: AppSettings.EDIT_ICON,
              operationName: AppSettings.EDIT
            },
            {
              name: AppSettings.DELETE_OPERATION,
              icon: AppSettings.DELETE_ICON,
              operationName: AppSettings.DELETE
            },
          ];
        }
      });
    });
    this.rows.forEach(element1 => {
      element1.isSameForEntireClass === 1 ? 
      element1.isSameForEntireClass = AppSettings.YES : element1.isSameForEntireClass === 0 ? element1.isSameForEntireClass = AppSettings.NO : element1.isSameForEntireClass = null;
    });
  }
  // End

  // Add and update fee type functionalities
  addUpdateFeeType(feetypeForm: any): void {
    this.feeTermsIds = [];
    this.feeTypeFormSubmitted = true;
    if (feetypeForm.controls.isSameForEntireClass.value) {
      feetypeForm.value.isSameForEntireClass = 1;
      feetypeForm.controls.isSameForEntireClass.value = 1;
    }
    else if (feetypeForm.controls.isSameForEntireClass.value === null) {
      feetypeForm.value.isSameForEntireClass = null;
      feetypeForm.controls.isSameForEntireClass.value = null;
    }
    else{
      feetypeForm.value.isSameForEntireClass = 0;
      feetypeForm.controls.isSameForEntireClass.value = 0;
    }
    if (feetypeForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      if (feetypeForm.value.feeTermId != null) {
        feetypeForm.value.feeTermId.forEach(element => {
          this.feeTermsIds.push(element.value);
        });
      }
      if (!this.isEdit) {
        this.buttonName = AppSettings.SUBMIT;
        this.feeTypeViewModel = feetypeForm.value;
        this.feeTypeViewModel.feeTermIds = this.feeTermsIds;

        this.feeTypeService.createFeeTypes(this.feeTypeViewModel).subscribe(res => this.addUpdateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.buttonName = AppSettings.UPDATE;
        this.feeTypeView = feetypeForm.value;
        this.feeTypeView.feeTermIds = this.feeTermsIds;

        this.feeTypeService.updateFeeTypes(this.feeTypeView).subscribe(res => this.addUpdateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }

  // response after add and update data of fee types
  addUpdateResponse(response: any): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      } else {
        this.feeTypeFormSubmitted = false;
        this.closeAddPanel = true;
        this.feeTypeForm.resetForm();
        this.disbleSubmitBtn = false;
        this.getAllFeeTypes(this.searchFeeTypeView);
      }
      this.openSnackBar(response.messages.ResultMessage);
    } else {
      this.closeAddPanel = false;
    }
  }

  // grid rowwise actions opearations
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
      this.buttonName = AppSettings.UPDATE;
      this.isEdit = true;
      this.updateShow = true;
      this.closeAddPanel = false;
      this.disbleSubmitBtn = false;
      this.feeTypeService.getFeeTypeById(event.clickedRow.id).subscribe(res => this.singleFeeDetails(res), error => {
        this.errorResponse(error);
      });

    }
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.feeTypeService.deleteFeeType(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.getAllFeeTypes(this.searchFeeTypeView);
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }
  // End

  // Cancel button click
  onCancelClick(): void {
    this.feetypeForm.reset();
    this.closeAddPanel = true;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.feeTypeForm.resetForm();
    this.feetypeForm.controls['feeTermId'].patchValue(this.compareArrayData(this.feeTermDropDown, []));
    this.formDirective.resetForm();
  }

  // New button click opeartions
  addForm(): void {
    this.isEdit = false;
    this.feetypeForm.reset();
    this.closeAddPanel = false;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.feeTypeForm.resetForm();
    this.isSchoolFacility = false;
    this.isSameForEntireClass = false;
    this.buttonName = AppSettings.SUBMIT;
  }


  feeTermCheck(required: any): void {
    this.feeTermMulticheck = { multiSelect: true, placeholder: 'Fee Term', data: this.feeTermDropDown, noEntryFoundLabel: 'No Data Found', isRequired: required };
  }
  // checking fee type category dependencies
  checkFeeTypeCategory(feeTypeId: any): void {
    this.feeTypeCategoryData.forEach(element => {
      if (element.id === feeTypeId) {
        this.code = element.code;
      }
    });
    if (this.code === AppSettings.SCHOOL_ENROLLMENT) {
      this.clearSchoolFeeValidation();
      this.feetypeForm.get('feeTermId').setValidators(Validators.required);
      this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
      this.feetypeForm.get('isSameForEntireClass').setValue(true);
      this.feeTermCheck(true);
      this.isSchoolFacility = false;
      this.isSameForEntireClass = true;
      this.isDisabled = true;
      this.showFeeterm = true;
    } else if (this.code === AppSettings.LATE_FEE) {
      this.clearSchoolFeeValidation();
      this.isSchoolFacility = false;
      this.isSameForEntireClass = false;
      this.showFeeterm = false;     
      this.feetypeForm.get('feeTermId').clearValidators();
      this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
      this.feetypeForm.controls['feeTermId'].setValue(null);
      this.feetypeForm.controls['isSameForEntireClass'].setValue(null);
      this.feetypeForm.controls['schoolFacilityId'].setValue(null);
      this.feeTermCheck(false);
    }
    else if (this.code === AppSettings.TRANSPORT_FEE) {
      this.isDisabled = false;
      this.validateControls();
      this.addSchoolFeeValidation();
    }
    else {
      if (this.feetypeForm.value.feeTermId != null && this.feetypeForm.value.feeTermId.length > 0) {
        this.addSchoolFeeValidation();
        this.schoolFacilityRequired = true;
      }
      else { 
        this.clearSchoolFeeValidation();
      }
      this.isDisabled = false;
      this.validateControls();
    }
  }
  clearSchoolFeeValidation(): any {
    this.schoolFacilityRequired = false;
    this.feetypeForm.get('schoolFacilityId').clearValidators();
    // this.feetypeForm.controls['schoolFacilityId'].setValue('');
    this.feetypeForm.controls['schoolFacilityId'].updateValueAndValidity();
  }
  addSchoolFeeValidation(): any {
    this.schoolFacilityRequired = true;
    this.feetypeForm.get('schoolFacilityId').setValidators(Validators.required);
    this.feetypeForm.controls['schoolFacilityId'].updateValueAndValidity();
  }
  validateControls(): any {
    this.feetypeForm.get('isSameForEntireClass').setValue(true);
    this.feetypeForm.get('feeTermId').clearValidators();
    this.feetypeForm.controls['feeTermId'].updateValueAndValidity();
    this.feeTermCheck(false);
    this.isSchoolFacility = true;
    this.isSameForEntireClass = true;
    this.showFeeterm = true;
  }

  // binding fee type deatils for update 
  singleFeeDetails(data: any): void {
    this.checkFeeTypeCategory(data.feeTypeViewModel.feeTypeCategoryId);
    this.feeTermsToCheck = [];
    if (data.feeTypeViewModel != null) {
      this.feetypeForm.patchValue(data.feeTypeViewModel);
      if (data.feeTypeViewModel.feeTypesForFeeTerms) {
        data.feeTypeViewModel.feeTypesForFeeTerms.forEach(element => {
          this.feeTermsToCheck.push({ label: element.feeTermName, value: element.feeTermId });
        });
        this.onSelect(data.feeTypeViewModel.feeTypesForFeeTerms);
      }
      this.feetypeForm.controls['feeTermId'].patchValue(this.compareArrayData(this.feeTermDropDown, this.feeTermsToCheck));
    }

  }

  onSelect(data: any): void {
    if (data.length > 0 && this.code === AppSettings.OTHER_FEE){
      this.addSchoolFeeValidation();
    }
    else if (this.code !== AppSettings.TRANSPORT_FEE){
      this.clearSchoolFeeValidation();
    }
  }

}
