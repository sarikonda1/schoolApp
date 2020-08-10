import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FeeAccountsSearchView } from '../models/fee-acccounts-search-view';
import { AppSettings } from 'app/app.constants';
import { FeeAccountService } from 'app/service/configuration/finance/api/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeeAccountDataView } from '../models/fee-account-data-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-fee-accounts',
  templateUrl: './fee-accounts.component.html',
  styleUrls: ['./fee-accounts.component.scss']
})
export class FeeAccountsComponent extends CommonComponent implements OnInit {

  // refernces for smart table
  rows: Array<any> = [];
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  currentComponent = 'FeeAccountsComponent';
  feeAccountIds: any[];


  // references for add and update fee accounts page
  @ViewChild('feeAccountTemplate') feeAccountTemplate;
  @ViewChild('feeAccountDataForm') feeAccountDataForm;
  feeAccountsSearchView: FeeAccountsSearchView;
  updateFeeAccountView: FeeAccountDataView;
  feeAccountForm: FormGroup;
  closeAddPanel: boolean;
  validate = true;
  HttpStatus: any;
  filterDetails: any = [];
  isUpdate: boolean;
  dataLoaded = Promise.resolve(false);
  disableSubmitBtn = false;
  buttonName: any;

  constructor(public dialogRef: MatDialog, public commonService: CommonService, private feeAccountService: FeeAccountService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    this.feeAccountsSearchView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      failedRecords: [],
      displayName: [],
      accountName: [],
      code: [],
      description: []
    };
    this.feeAccountForm = new FormGroup({
      accountName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      displayName: new FormControl('', [Validators.maxLength(45)]),
      code: new FormControl('', [Validators.maxLength(6)]),
      description: new FormControl('', [Validators.maxLength(135)]),
      id: new FormControl(''),
    });

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.feeAccountsSearchView = modelTableComponent;
    }
    this.getAllFeeAccounts(this.feeAccountsSearchView);
    // fee account table Colums
    this.cols = [
      { field: 'accountName', header: 'accountname', sort: true },
      { field: 'displayName', header: 'displayname', sort: true },
      { field: 'code', header: 'Code', sort: true },
      { field: 'description', header: 'description', sort: true },
      { field: 'actions', header: 'Actions' },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.feeAccountsSearchView,
      tablename: 'FeeAccounts',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
    };
  }

  // get all fee accounts list method
  getAllFeeAccounts(_searchFeeAccounts: FeeAccountsSearchView): void {
    this.feeAccountsSearchView = _searchFeeAccounts;
    this.feeAccountService.feeAccountDetails(_searchFeeAccounts.sortBy, _searchFeeAccounts.accountName,
      _searchFeeAccounts.code, _searchFeeAccounts.displayName, _searchFeeAccounts.description,
      _searchFeeAccounts.sortOrder, _searchFeeAccounts.failedRecords, _searchFeeAccounts.pageNumber,
      _searchFeeAccounts.pageSize).subscribe(res => { this.feeAccountsResponse(res); this.dataLoaded = Promise.resolve(true); }, error => {
        this.errorResponse(error);
      });
  }

  feeAccountsResponse(res: any): void {
    if (!res.feeAccountsView) {
      this.rows = [];
    } else {
      this.rows = res.feeAccountsView.list;
      this.totalItems = res.feeAccountsView.totalItems;
    }
    const sectionOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT_ICON

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON,
      },
    ];
    this.rows.forEach(e => {
      e.operations = sectionOperations;
    });
    if (res.feeAccountsView) {
      this.feeAccountsSearchView.pageNumber = res.feeAccountsView.pageNumber;
    }
    this.filterDetails = res.filters;
    this.tabSettings = {
      columns: this.cols,
      model: this.feeAccountsSearchView,
      rows: this.rows,
      tablename: 'Fee Accounts',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'new'
        },
        infoButton: {
          required: true,
          text: 'Fee Accounts'
        }
      },
      filtersList: res.filters,
    };
  }
  // End

  // to open new section page
  openFeeAccountForm(): void {
    this.closeAddPanel = false;
    this.feeAccountDataForm.resetForm();
    this.isUpdate = false;
    this.validate = true;
    this.buttonName = AppSettings.SUBMIT;
  }

  // to add or update fee account  details method
  addOrUpdateFeeAccount(feeAccountForm: any): void {
    this.validate = true;
    if (this.feeAccountForm.invalid) {
      return;
    }
    else {
      this.disableSubmitBtn = true;
      if (this.isUpdate) {
        this.buttonName = AppSettings.UPDATE;
        this.updateFeeAccountView = feeAccountForm.value;
        this.feeAccountService.updateFeeAccountDetails(this.updateFeeAccountView).subscribe(res => this.feeAccountResponse(res), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.buttonName = AppSettings.SUBMIT;
        this.feeAccountService.createFeeAccountDetails(feeAccountForm.value).subscribe(res => this.feeAccountResponse(res), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }

  // fee account response based on request
  feeAccountResponse(res: any): void {
    if (res.statusCode === this.HttpStatus.OK) {
      this.dialogRef.closeAll();
      this.closeAddPanel = true;
      this.feeAccountIds = [];
      this.feeAccountsSearchView.failedRecords = [];
      this.disableSubmitBtn = false;
      this.getAllFeeAccounts(this.feeAccountsSearchView);
      this.openSnackBar(res.messages.ResultMessage);
    }
    else {
      this.closeAddPanel = false;
      this.openSnackBar(res.messages.ResultMessage, true);
    }
  }

  selectedRows(data: any): void {
    this.feeAccountIds = [];
    for (let index = 0; index < data.length; index++) {
      this.feeAccountIds.push(data[index].id);
    }
  }

  // when click the cancel button closed the fee account form
  cancel(): void {
    this.closeAddPanel = true;
  }

  // fee account table row actions for edit and delete operations
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.buttonName = AppSettings.UPDATE;
      this.feeAccountForm.controls['accountName'].setValue(response.clickedRow.accountName);
      this.feeAccountForm.controls['id'].setValue(response.clickedRow.id);
      this.feeAccountForm.controls['displayName'].setValue(response.clickedRow.displayName);
      this.feeAccountForm.controls['code'].setValue(response.clickedRow.code);
      this.feeAccountForm.controls['description'].setValue(response.clickedRow.description);
      this.closeAddPanel = false;
      this.isUpdate = true;
    }
    if (response.operation === AppSettings.DELETE) {
      this.feeAccountIds = [];
      this.feeAccountIds.push(response.clickedRow.id);
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.feeAccountService.deleteFeeAccountDetails(this.feeAccountIds).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }

  // multi delete functionalities from fee account table
  deleteAll(): void {
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_MULTI_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.feeAccountService.deleteFeeAccountDetails(this.feeAccountIds).subscribe(res => this.deleteResponse(res), error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this.feeAccountsSearchView.failedRecords = error.error.failedRecords;
          }
          this.getAllFeeAccounts(this.feeAccountsSearchView);
          this.errorResponse(error);
        });
      }
    });
  }

  deleteResponse(response: any): void {
    this.feeAccountsSearchView.failedRecords = response.failedRecords;
    this.getAllFeeAccounts(this.feeAccountsSearchView);
    this.openSnackBar(response.messages.ResultMessage);

  }
}
