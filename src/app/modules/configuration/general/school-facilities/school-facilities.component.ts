
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { fuseAnimations } from '@fuse/animations';

import { CommonService } from 'app/service/common.service';
import { TypeService } from 'app/service/academic-service/api/type.service';

import * as HttpStatus from 'http-status-codes';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolFacilityService } from 'app/service/general/api/school-facility.service';
import { SearchSchoolFacilitiesView } from '../models/search-school-facilities-view';
import { SchoolFacilityView } from '../models/school-facility-view';
import { FacilityView } from '../models/facility-view';


@Component({
  selector: 'app-school-facilities',
  templateUrl: './school-facilities.component.html',
  styleUrls: ['./school-facilities.component.scss'],
  providers: [SchoolFacilityService, TypeService],
  animations: fuseAnimations,
})
export class SchoolFacilitiesComponent extends CommonComponent implements OnInit {

  @ViewChild('addSchoolFacilities') addSchoolFacilities;
  @ViewChild('appForm') aForm;


  // viewmodel declaration variables
  searchSchoolFacilitiesView: SearchSchoolFacilitiesView;
  schoolFacilityView: SchoolFacilityView;
  facilityView: FacilityView;

  // formGroup Declaration variables
  facilityForm: FormGroup;

  // table variables
  cols: { field: string; header: string; sort: boolean; }[];
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];

  // boolean variable declarations
  facilityFormSubmitted = false;
  dataLoaded = Promise.resolve(false);
  closeAddPanel = false;
  buttonDisable = false;
  updateShow = false;
  CreateShow = false;
  isEdit: boolean;

  // Array variable declarations
  tempData: any[];
  facilityIds: Array<any> = [];
  facilityTypeOptionsSelect: Array<any> = [];
  facilityTypeDropDown: Array<any> = [];
  failedRecords: any = [];

  // variable declarations
  facilityDetails: any;
  addSchoolFacilityTemplate: any;
  isDeleteAllRequired = false;
  facilityTypeList: Array<string> = [];
  updateFacilityId: string;
  HttpStatus: any;
  disbleSubmitBtn = false;
  currentComponent = 'SchoolFacilitiesComponent';
  buttonName: any;


  constructor(public dialog: MatDialog, public commonService: CommonService, private schoolFacilityService: SchoolFacilityService,
     private typeService: TypeService, public snackBar: MatSnackBar) {
    super();
    this.searchSchoolFacilitiesView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      typeId: new FormControl('', [Validators.required]),
      facilityName: new FormControl('', [Validators.maxLength(45), Validators.required]),
      facilityCode: new FormControl('', [Validators.maxLength(10)]),
      facilityType: new FormControl(''),
    });
    // table columns
    this.cols = [
      { field: 'facilityType', header: 'FacilityType', sort: true },
      { field: 'facilityName', header: 'FacilityName', sort: true },
      { field: 'facilityCode', header: 'FacilityCode', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.searchSchoolFacilitiesView,
      tablename: 'School Facilities',
      componentName: this.currentComponent,
    };

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchSchoolFacilitiesView = modelTableComponent;
    }
    this.HttpStatus = require('http-status-codes');
    this.getFacilityTypeNames();
    this.getAllSchoolFacilities(this.searchSchoolFacilitiesView);

  }

  // getting facilitytypeNames
  getFacilityTypeNames(): void {
    this.schoolFacilityService.facilityType().subscribe((res: any) => this.listTypeGet(res), error => {
      this.errorResponse(error);
    });
  }
  listTypeGet(data: any): void {
    this.facilityTypeOptionsSelect = [];
    for (let i = 0; i < data.commonViewModel.length; i++) {
      this.facilityTypeOptionsSelect.push
        ({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
      this.facilityTypeDropDown = this.facilityTypeOptionsSelect;

    }
  }
  // End

  // getting all schoolfacilities  
  getAllSchoolFacilities(searchSchoolFacilitiesDataView: SearchSchoolFacilitiesView): void {
    this.searchSchoolFacilitiesView.failedRecords = this.failedRecords;
    this.searchSchoolFacilitiesView = searchSchoolFacilitiesDataView;
    this.schoolFacilityService.getAllFacilities(this.searchSchoolFacilitiesView.sortBy,
      this.searchSchoolFacilitiesView.sortOrder, this.searchSchoolFacilitiesView.facilityName,
      this.searchSchoolFacilitiesView.facilityType,
      this.searchSchoolFacilitiesView.facilityCode,
      this.searchSchoolFacilitiesView.typeId,
      this.searchSchoolFacilitiesView.failedRecords,
      this.searchSchoolFacilitiesView.pageNumber, this.searchSchoolFacilitiesView.pageSize).subscribe(res => this.getAllResponse(res), error => {
        this.errorResponse(error);
      });
  }

  getAllResponse(res: any): void {
    if (res.schoolFacilityDetailsView == null) {
      this.rows = [];
    } else {
      this.rows = res.schoolFacilityDetailsView.list;
      this.totalItems = res.schoolFacilityDetailsView.totalItems;
    }
    const schoolFacilityOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT,

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];
    this.rows.forEach(e => {
      e.operations = schoolFacilityOperations;
    });
    if (res.schoolFacilityDetailsView) {
      this.searchSchoolFacilitiesView.pageNumber = res.schoolFacilityDetailsView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      showSelectAll: this.isDeleteAllRequired,
      model: this.searchSchoolFacilitiesView,
      rows: this.rows,
      tablename: 'School Facilities',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'School Facilities'
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
      filtersList: res.filters
    };
  }
  // End

  // method for delete school Facility
  deleteAll(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: {
        text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
        action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
      },
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.schoolFacilityService.deleteSchoolFacility(this.facilityIds).
          subscribe(res => this.multiDeleteResponse(res), error => {
            if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
              this.failedRecords = (error.error.failedRecords);
            }
            this.errorResponse(error);
            this.getAllSchoolFacilities(this.searchSchoolFacilitiesView);
          });
      }
    });
  }

  // method for delete response
  multiDeleteResponse(data: any): void {
    this.closeAddPanel = true;
    this.failedRecords = data.failedRecords;
    this.getAllSchoolFacilities(this.searchSchoolFacilitiesView);
    this.openSnackBar(data.messages.ResultMessage);
  }

  // Cancel button click
  onCancelClick(): void {
    this.facilityForm.reset();
    this.closeAddPanel = true;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.aForm.resetForm();
  }

  selectedRows(data: any): void {
    this.facilityIds = [];
      for (let index = 0; index < data.length; index++) {
        this.facilityIds.push(data[index].id);
      }
  }

  // Add and update facility functionalities
  addUpdateSchoolFacility(facilityForm: any): void {
    this.facilityFormSubmitted = true;
    if (facilityForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      this.facilityView = {
        facilityName: facilityForm.value.facilityName,
        facilityCode: facilityForm.value.facilityCode,
        typeId: facilityForm.value.typeId
      };

      if (!this.isEdit) {
        this.buttonName = AppSettings.SUBMIT;
        this.schoolFacilityService.createSchoolFacility(this.facilityView).subscribe(res => this.addUpdateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.buttonName = AppSettings.UPDATE;
        this.schoolFacilityView = {
          facilityName: facilityForm.value.facilityName,
          facilityCode: facilityForm.value.facilityCode,
          typeId: facilityForm.value.typeId,
          id: this.facilityDetails.id
        };
        this.schoolFacilityService.updateSchoolFacility(this.schoolFacilityView).subscribe(res => this.addUpdateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }


  addUpdateResponse(response: any): void {
    this.disbleSubmitBtn = false;
    this.isDeleteAllRequired = false;
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.CONFLICT)) {
          if (response.statusCode === this.HttpStatus.CONFLICT) {
            this.closeAddPanel = false;
          }
          else {
            this.facilityFormSubmitted = false;
            this.closeAddPanel = true;
            this.aForm.resetForm();
            this.disbleSubmitBtn = false;
            this.isEdit = false;
            this.getAllSchoolFacilities(this.searchSchoolFacilitiesView);
          }
    }
    else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }

  // New button click opeartions
  addForm(): void {
    this.facilityForm.reset();
    this.closeAddPanel = false;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.facilityFormSubmitted = false;
    this.CreateShow = false;
    this.aForm.resetForm();
    this.buttonName = AppSettings.SUBMIT;
  }

  // grid rowwise actions opearations
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
    this.buttonName = AppSettings.UPDATE;
      this.isEdit = true;
      this.updateShow = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.schoolFacilityService.getByFacilityId(event.clickedRow.id).subscribe(res => this.singleFacilityDetails(res), error => {
        this.errorResponse(error);
      });
    }
    if (event.operation === AppSettings.DELETE) {
      this.facilityIds = [];
      this.facilityIds.push(event.clickedRow.id);
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.schoolFacilityService.deleteSchoolFacility(this.facilityIds).subscribe(res => this.singleDeleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });

    }
  }

  singleDeleteResponse(response: any): void {
    this.isEdit = false;
    this.getAllSchoolFacilities(this.searchSchoolFacilitiesView);
    this.openSnackBar(response.messages.ResultMessage);
  }

  // binding facility deatils for update 
  singleFacilityDetails(data: any): void {
    if (data.schoolFacility != null) {
      this.facilityForm.controls['facilityName'].setValue(data.schoolFacility.facilityName);
      this.facilityForm.controls['facilityCode'].setValue(data.schoolFacility.facilityCode);
      this.facilityForm.controls['typeId'].setValue(data.schoolFacility.typeId);
      this.facilityDetails = data.schoolFacility;
    }
  }

}


