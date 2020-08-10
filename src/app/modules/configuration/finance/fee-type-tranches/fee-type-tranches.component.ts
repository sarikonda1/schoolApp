import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as HttpStatus from 'http-status-codes';

import { FeeTypeTranchesService } from 'app/service/configuration/finance/api/fee-type-tranches.service';
import { FeeTypeTrancheSearchView } from '../models/fee-type-tranche-filter-view';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { FeeTypeTrancheView } from '../models/fee-type-tranche-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from 'app/shared/common/common.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FeeTypeTranchesView } from '../models/fee-type-tranches-view';

@Component({
  selector: 'app-fee-type-tranches',
  templateUrl: './fee-type-tranches.component.html',
  styleUrls: ['./fee-type-tranches.component.scss'],
  providers: [
    FeeTypeTranchesService
  ]
})
export class FeeTypeTranchesComponent extends CommonComponent implements OnInit {
  @ViewChild('addFeeTypeTrancheRef') addFeeTypeTrancheRef;
  @ViewChild('trancheForm') trancheForm;

  // model declaration
  feeTypeTrancheSearchView: FeeTypeTrancheSearchView;
  feeTypeTrancheView: FeeTypeTrancheView;
  updateTrancheView: FeeTypeTranchesView;

  // variable declaration
  coloumns: any[];
  tabSettings: any;
  feeTypeTranchesForm: any;
  feeTranchesDetails: Array<any> = [];
  totalItems: any;
  pageCount: any;
  rows: any[];
  feeTypesList: any[];
  closeAddPanel: boolean;
  doValidate = true;
  trancheId: any;
  updateButtonShow: boolean;
  updateTranchesView: any;
  currentComponent = 'FeeTypeTranchesComponent';
  disableSubmitBtn: boolean;


  constructor(private feeTypeTranchesService: FeeTypeTranchesService,
    public commonService: CommonService, public dialog: MatDialog,
    private common: CommonComponent, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.feeTypeTranchesForm = new FormGroup({
      id: new FormControl(''),
      feeTypeId: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.maxLength(45), Validators.required]),
      code: new FormControl('', [Validators.maxLength(6)]),
      description: new FormControl('', [Validators.maxLength(135)]),
    });

    this.feeTypeTrancheSearchView = {
      feeTypeIds: [],
      names: [],
      codes: [],
      descriptions: [],
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    this.feeTypeTrancheView = {
      feeTypeId: 0,
      name: '',
      code: '',
      description: ''
    };
    this.updateTrancheView = {
      id: '',
      feeTypeId: 0,
      name: '',
      code: '',
      description: ''
    };
    // Table Colums
    this.coloumns = [
      { field: 'feeTypeName', header: this.commonService.getTranslation(AppSettings.FEE_TYPE_NAME), sort: false },
      { field: 'name', header: this.commonService.getTranslation(AppSettings.FEE_TRANCHE_NAME), sort: false },
      { field: 'code', header: this.commonService.getTranslation(AppSettings.FEE_TRANCHE_CODE), sort: false },
      { field: 'description', header: this.commonService.getTranslation(AppSettings.FEE_TRANCHE_DESCRIPTION), sort: false },
      { field: 'actions', header: this.commonService.getTranslation(AppSettings.ACTION), sort: false },
    ];

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.feeTypeTrancheSearchView = modelTableComponent;
    }

    this.tabSettings = {
      rows: this.feeTranchesDetails,
      columns: this.coloumns,
      model: this.feeTypeTrancheSearchView,
      tablename: 'Fee Type Tranches',
      componentName: this.currentComponent,
    };
    this.feeTypes();
    this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
  }

  // method for get all fee type tranches
  getFeeTypeTrancheDetails(feeTypeTrancheSearchView: FeeTypeTrancheSearchView): void {
    this.feeTypeTrancheSearchView = feeTypeTrancheSearchView;
    this.feeTypeTranchesService.getAllFeeTypeTranches(this.feeTypeTrancheSearchView.feeTypeIds,
      this.feeTypeTrancheSearchView.names, this.feeTypeTrancheSearchView.codes,
      this.feeTypeTrancheSearchView.descriptions, this.feeTypeTrancheSearchView.sortBy,
      this.feeTypeTrancheSearchView.sortOrder, this.feeTypeTrancheSearchView.pageNumber,
      this.feeTypeTrancheSearchView.pageSize).subscribe(res => this.feeTypeTrancheDetails(res), error => {
        this.disableSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  // method for get all fee type tranches response
  feeTypeTrancheDetails(data: any): void {
    this.feeTranchesDetails = [];
    if (data.pagedFeeTypeTranchesView == null) {
      this.rows = [];
    }
    else {
      this.feeTranchesDetails = data.pagedFeeTypeTranchesView.list;
      this.totalItems = data.pagedFeeTypeTranchesView.totalItems;
      this.feeTranchesDetails.forEach(e => {
        e.operations = [
          {
            name: this.commonService.getTranslation(AppSettings.EDIT_OPERATION),
            icon: AppSettings.EDIT,
            operationName: this.commonService.getTranslation(AppSettings.EDIT)

          }, {
            name: this.commonService.getTranslation(AppSettings.DELETE_OPERATION),
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          }
        ];
      });
    }
    if (data.pagedFeeTypeTranchesView) {
      this.feeTypeTrancheSearchView.pageNumber = data.pagedFeeTypeTranchesView.pageNumber;
    }
    this.tabSettings = {
      columns: this.coloumns,
      model: this.feeTypeTrancheSearchView,
      rows: this.feeTranchesDetails,
      tablename: 'Fee Type Tranches',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCount,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Fee Type Tranches'
        }
      },
      filtersList: data.filters,
      rowGroupingColumns: ['feeTypeName']
    };
  }

  // method for get all fee types
  feeTypes(): void {
    this.feeTypeTranchesService.getAllFeeTypes().subscribe(res =>
      this.feeTypesResponse(res),
       error => {
        this.disableSubmitBtn = false;
        this.errorResponse(error);
    });
  }

  // method for fee types response
  feeTypesResponse(data: any): boolean {
    if (data.statusCode === HttpStatus.OK) {
      this.feeTypesList = data.feeTypesView;
    }
    else {
      return false;
    }
  }

  // method for add and update fee typr tranche
  onSubmit(feeTypeTranchesForm: any): void {
    this.doValidate = true;
    if (this.feeTypeTranchesForm.invalid) {
      return;
    }
    else {
      this.disableSubmitBtn = true;
    }
    if (feeTypeTranchesForm.status === AppSettings.VALID) {
      if (!feeTypeTranchesForm.value.id) {
        this.feeTypeTrancheView.feeTypeId = feeTypeTranchesForm.value.feeTypeId;
        this.feeTypeTrancheView.name = feeTypeTranchesForm.value.name;
        this.feeTypeTrancheView.code = feeTypeTranchesForm.value.code;
        this.feeTypeTrancheView.description = feeTypeTranchesForm.value.description;
        this.feeTypeTranchesService.createFeeTypeTranche(this.feeTypeTrancheView).subscribe(res => this.feeTrancheresponse(res), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.updateTrancheView = this.feeTypeTranchesForm.value;
        this.feeTypeTranchesService.updateFeeTypeTranche(this.updateTrancheView).subscribe(res => this.feeTrancheresponse(res), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }

  // method for add and update response
  feeTrancheresponse(data: any): void {
    this.disableSubmitBtn = false;
    if (data.statusCode === HttpStatus.OK) {
          this.feeTypeTranchesForm.reset();
          this.trancheForm.resetForm();
          this.closeAddPanel = true;
          this.doValidate = false;
          this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
          this.openSnackBar(data.messages.ResultMessage);
    }
    else {
          this.closeAddPanel = false;
    }
  }

  // method for row action for displayed fee type tranches based on the action to perform the opertion like edit,delete
  rowActions(data: any): void {
    this.trancheId = [];
    this.trancheId.push(data.clickedRow.id);
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.feeTypeTranchesService.deleteFeeTypeTranches(this.trancheId).
            subscribe(res => this.deleteTrancheResponse(res), error => {
              this.disableSubmitBtn = false;
              this.errorResponse(error);
            });
        }
      });
    }
    else if (data.operation === AppSettings.EDIT) {
      this.updateButtonShow = true;
      this.closeAddPanel = false;
      this.trancheId = data.clickedRow.id;
      this.feeTypeTranchesService.getFeeTypeTrancheById(this.trancheId).subscribe(res => this.getTrancheResponse(res));
    }
  }

  // method for delete response
  deleteTrancheResponse(data: any): void {
    this.closeAddPanel = true;
    this.getFeeTypeTrancheDetails(this.feeTypeTrancheSearchView);
    this.openSnackBar(data.messages.ResultMessage);
  }

  // methode for get single fee type tranche response
  getTrancheResponse(data: any): void {
    this.updateTranchesView = data.feeTypeTranchesViewModel;
    this.feeTypeTranchesForm.controls['feeTypeId'].setValue(this.updateTranchesView.feeTypeId);
    this.feeTypeTranchesForm.controls['name'].setValue(this.updateTranchesView.name);
    this.feeTypeTranchesForm.controls['code'].setValue(this.updateTranchesView.code);
    this.feeTypeTranchesForm.controls['description'].setValue(this.updateTranchesView.description);
    this.feeTypeTranchesForm.controls['id'].setValue(this.updateTranchesView.id);
  }
  // method for open the panel
  onAddFormClick(): void {
    this.trancheForm.resetForm();
    this.closeAddPanel = false;
    this.updateButtonShow = false;
  }

  // method for close the panel
  closeAddForm(): void {
    this.feeTypeTranchesForm.reset();
    this.closeAddPanel = true;
    this.doValidate = false;
    this.trancheForm.resetForm();
    this.disableSubmitBtn = false;
  }
}
