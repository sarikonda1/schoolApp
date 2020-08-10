import { Component, OnInit, ViewChild, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CommonService } from 'app/service/common.service';

import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings, Pattern } from 'app/app.constants';

import { CommonComponent } from 'app/shared/common/common.component';

import { SchoolRepRoleService } from 'app/service/general/api/school-rep-role.service';
import { SearchSchoolRepRoles } from '../../models/search-school-rep-roles';
import { SchoolRepRoleView } from 'app/models/academics/school-rep-role-view';
import { SchoolRepRoleViewModel } from '../../models/school-rep-role-view-model';



@Component({
  selector: 'app-schoolreprole',
  templateUrl: './schoolreprole.component.html',
  styleUrls: ['./schoolreprole.component.scss'],
})

export class SchoolRepRoleComponent extends CommonComponent implements OnInit {

  @ViewChild('RepRoleForm') myForm;
  currentComponent = 'SchoolRepRoleComponent';
  // refernces for ng prime table
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  totalItems: number;
  tabSettings: {};
  isValidRight: any;
  updateShow = false;
  schoolRepRoleId: Array<string> = [];
  isDeleteAllRequired = false;
  closeAddPanel = false;
  dataLoaded = Promise.resolve(false);
  disbleSubmitBtn = false;


  // varibles for repRole
  // schoolRepRolDetailsList: any = [];
  _searchSchoolRepRoles: SearchSchoolRepRoles;
  _schoolRepRoleView: SchoolRepRoleView;
  _schoolRepRoleViewModel: SchoolRepRoleViewModel;
  repRoleDetails: any;
  failedRecords: any = [];
  doValidate = false;
  schoolRepRoleForm: FormGroup;
  HttpStatus: any;
  filterDetails: any = [];
  model: any;


  constructor(private schoolFacilityRepRoleService: SchoolRepRoleService, public commonService: CommonService, public dialogRef: MatDialog, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {

    this.HttpStatus = require('http-status-codes');
    // initilizatiopn of viewModel
    this._searchSchoolRepRoles = {
      sortBy: 'Id',
      sortOrder: 1,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      schoolId: '',
    };

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this._searchSchoolRepRoles = modelTableComponent;
    }

    this._schoolRepRoleView =
    {
      name: ''
    };
    // End

    // Table Colums
    this.cols = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];



    // tabSettings
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this._searchSchoolRepRoles,
      tablename: 'schoolfacilityrepresentativeroles',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
    };

    this.schoolRepRoleForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(90)])
    });

    // calling of getAllRepRoleDetails
    this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
  }


  // getting all schoolFacilities Details
  getAllSchoolFacilityRepRoles(_searchSchoolRepRoles: SearchSchoolRepRoles): void {
    this.isDeleteAllRequired = false;
    this.schoolRepRoleId = [];


    this._searchSchoolRepRoles.failedRecords = this.failedRecords;

    this._searchSchoolRepRoles = _searchSchoolRepRoles;

    this.schoolFacilityRepRoleService.searchRepRole(this._searchSchoolRepRoles.sortBy,
      this._searchSchoolRepRoles.names, this._searchSchoolRepRoles.sortOrder, _searchSchoolRepRoles.failedRecords,
      this._searchSchoolRepRoles.pageNumber, this._searchSchoolRepRoles.pageSize).subscribe(res => {
        this.allRepRoleDetails(res);
        this.dataLoaded = Promise.resolve(true);
      }, error => {
        this.errorResponse(error);
      });
  }

  allRepRoleDetails(res: any): void {
    if (this.failedRecords.length > 0) {
      this.isDeleteAllRequired = true;
      this.failedRecords = [];
    }
    else {
      this.isDeleteAllRequired = false;
    }

    this.rows = [];
    if (!res.searchSchoolRepRoleView) {
      this.rows = [];
    } else {
      if (res.searchSchoolRepRoleView != null) {
        this.rows = res.searchSchoolRepRoleView.list;
        this.totalItems = res.searchSchoolRepRoleView.totalItems;
      }
      else {
        this.rows = [];
      }

    }
    const schoolRepRoleoperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];
    this.rows.forEach(e => {
      e.operations = schoolRepRoleoperations;
    });

    this.filterDetails = res.filters;
    if (res.searchSchoolRepRoleView) {
      this._searchSchoolRepRoles.pageNumber = res.searchSchoolRepRoleView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this._searchSchoolRepRoles,
      rows: this.rows,
      tablename: 'School Facility Representative Roles',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'School Facility Representative Roles'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
      },
      filtersList: res.filters,
    };
  }
  // End


  // addRepresentativeRole
  addUpdateRepRole(reRoleName: SchoolRepRoleViewModel): boolean {
    this.doValidate = true;
    this.disbleSubmitBtn = true;
    if (this.schoolRepRoleForm.status === AppSettings.VALID) {
      if (reRoleName.id == null) {
        this._schoolRepRoleView.name = reRoleName.name;
        this.schoolFacilityRepRoleService.createRepRole(this._schoolRepRoleView).subscribe(res => this.addResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      if (reRoleName.id != null) {
        this.schoolFacilityRepRoleService.updateRepRole(reRoleName).subscribe(res => this.updateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
    else {
      return false;
    }

  }

  // add Response
  addResponse(response: any): void {
    this.isDeleteAllRequired = false;
    if (response.statusCode === (this.HttpStatus.OK)
      || response.statusCode === (this.HttpStatus.CONFLICT)) {
      if (response.statusCode === this.HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      }
      else {
        this.closeAddPanel = true;
        this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
        this.schoolRepRoleForm.reset();
        this.myForm.resetForm();
        this.updateShow = false;
        this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
        this.disbleSubmitBtn = false;
      }
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }


  // updateRepRole Response
  updateResponse(response: any): void {

    if (response.statusCode === this.HttpStatus.OK || response.statusCode === this.HttpStatus.CONFLICT) {
      if (response.statusCode === this.HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      }
      else {
        this.closeAddPanel = true;
        this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
        this.schoolRepRoleForm.reset();
        this.myForm.resetForm();
        this.updateShow = false;
        this.disbleSubmitBtn = false;
      }
      this.openSnackBar(response.messages.ResultMessage);
    }
    else {
      this.closeAddPanel = false;
    }
  }
  // End

  // row-wise actions
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.updateShow = true;
      this.closeAddPanel = false;
      this.disbleSubmitBtn = true;
      this.schoolFacilityRepRoleService.singleRepresentativeDetails(response.clickedRow.id).subscribe(res => this.singleRepRoleDetails(res), error => {
        this.errorResponse(error);
      });
    }

    if (response.operation === AppSettings.DELETE) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // based on user selection changing user roles
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const Id: any = [];
          Id.push(response.clickedRow.id);
          this.schoolFacilityRepRoleService.multiDeleteRepRole(Id).subscribe(res => this.multiDeleteResponse(res), error => {
            if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
              this._searchSchoolRepRoles.failedRecords = (error.error.failedRecords);
              this.failedRecords = (error.error.failedRecords);
            }
            this.errorResponse(error);
            this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
          });
        }
      });
    }
  }
  // End

  // repRoleDetails
  singleRepRoleDetails(repRoleDetails: any): void {
    if (repRoleDetails.singleSchoolRepRoleView != null) {
      this.schoolRepRoleForm.controls['name'].setValue(repRoleDetails.singleSchoolRepRoleView.name);
      this.schoolRepRoleForm.controls['id'].setValue(repRoleDetails.singleSchoolRepRoleView.id);
      this.repRoleDetails = repRoleDetails.singleSchoolRepRoleView;
    }
    else {
      this.openSnackBar(repRoleDetails.messages.ResultMessage);
    }

  }
  // End

  // onCancelClick
  onCancelClick(): void {
    this.schoolRepRoleForm.reset();
    this.closeAddPanel = true;
    this.updateShow = false;
    this.disbleSubmitBtn = false;
    this.myForm.resetForm();
    this.doValidate = false;
  }
  // End


  // Multi Delete 
  deleteAll(): void {
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_MULTI_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    // based on user selection changing user roles
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.schoolFacilityRepRoleService.multiDeleteRepRole(this.schoolRepRoleId).subscribe(res => this.multiDeleteResponse(res), error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this._searchSchoolRepRoles.failedRecords = (error.error.failedRecords);
            this.failedRecords = (error.error.failedRecords);
          }
          this.errorResponse(error);
          this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
        });
      }
    });

  }

  multiDeleteResponse(response: any): void {
    // this.schoolRepRoleId = [];
    if (response.failedRecords.length > 0) {
      this.failedRecords = response.failedRecords;
      this.isDeleteAllRequired = true;
    }
    else {
      this.isDeleteAllRequired = false;
    }
    this._searchSchoolRepRoles.failedRecords = this.failedRecords;
    this.getAllSchoolFacilityRepRoles(this._searchSchoolRepRoles);
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // tableselect
  onTableRowSelect(value: any): void {
    this.schoolRepRoleId.push(value.id);
    if (this.schoolRepRoleId.length > 0) {
      this.isDeleteAllRequired = true;
    }
    if (this.schoolRepRoleId.length === 0) {
      this.isDeleteAllRequired = false;
    }
  }
  // End

  // table row unselect
  onTableRowUnSelect(value: any): void {
    this.schoolRepRoleId.splice(this.schoolRepRoleId.indexOf(value.id), 1);
    if (this.failedRecords !== undefined) {
      if (this.failedRecords.length > 0) {
        this.failedRecords.splice(this.failedRecords.indexOf(value.id), 1);
      }
    }

    if (this.schoolRepRoleId.length > 0) {
      this.isDeleteAllRequired = true;
    }
    if (this.schoolRepRoleId.length === 0) {
      this.isDeleteAllRequired = false;
    }
  }
  // End

  // selectAll checkbox
  selectAll(repRoleValues: any): void {
    if (repRoleValues.length > 0) {
      this.isDeleteAllRequired = true;
      repRoleValues.forEach(element => {
        this.schoolRepRoleId.push(element.id);
      });
    }
    else {
      this.isDeleteAllRequired = false;
      this.schoolRepRoleId = [];
    }
  }
  // End

  // For closing the pannel
  addForm(): void {
    this.closeAddPanel = false;
    this.schoolRepRoleForm.reset();
    this.updateShow = false;
    this.disbleSubmitBtn = true;
  }
  // End

}
