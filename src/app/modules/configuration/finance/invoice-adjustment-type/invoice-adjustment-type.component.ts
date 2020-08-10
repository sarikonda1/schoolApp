import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceAdjustmentTypeService } from 'app/service/configuration/finance/api/api';
import { CommonService } from 'app/service/common.service';
import { InvoiceAdjustmentFilterView } from '../models/invoice-adjustment-filter-view';
import { InvoiceAdjustmentTypeStatusView } from '../models/invoice-adjustment-type-status-view';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InvoiceAdjustmentTypeUpdateView } from '../models/invoice-adjustment-type-update-view';
import * as HttpStatus from 'http-status-codes';
import { YesNo } from 'app/models/yes-no-view';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-invoice-adjustment-type',
  templateUrl: './invoice-adjustment-type.component.html',
  styleUrls: ['./invoice-adjustment-type.component.scss'],
  providers: [
    InvoiceAdjustmentTypeService
  ]
})
export class InvoiceAdjustmentTypeComponent extends CommonComponent implements OnInit {
  @ViewChild('invoiceAdjustmentType') invoiceAdjTypeForm;
  filterViewModel: InvoiceAdjustmentFilterView;
  schoolId: string;
  disbleSubmitBtn = false;
  // table variables
  settingTableData: {};
  rows: Array<any>;
  columns: any[];
  pageCnt = 0;
  totalRowsCount = 0;
  custRowsPerPageOptions: Array<number> = [];
  rowBasedAction: Array<any> = [];
  isInvoiceAdjTypeFormClosed: boolean;
  invoiceAdjTypeFormSubmitted = false;
  isSubmitButtonEnabled = true;
  YesOrNo: Array<any> = YesNo.values;
  currentComponent = 'InvoiceAdjustmentTypeComponent';

  invoiceAdjustmentTypeForm: FormGroup;

  constructor(public commonService: CommonService,
    private invoiceAdjustmentTypeService: InvoiceAdjustmentTypeService,
    public dialogRef: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.initializeInvoiceAdjustmentTypeForm();
    this.tableColumns();
    this.tabSettings();
    this.commonService.getTableLSObj(this.settingTableData);
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    // if (localStorage.getItem('_s')) {
      this.fetchInvoiceAdjustmentTypes();
    // }
  }

  /**
  * intializes formGroup for InitializeInvoiceAdjustmentType
  */
  initializeInvoiceAdjustmentTypeForm(): void {
    this.invoiceAdjustmentTypeForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required,
      Validators.maxLength(45)]),
      isPositiveAdjustment: new FormControl('', Validators.required),
    });
  }

  /**
  * table columns
  */
  tableColumns(): void {
    this.columns = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'isPositiveAdjustment', header: 'Is Positive Adjustment', sort: true },
      { field: 'isInactive', header: 'Active', sort: true },
      { field: 'inactiveDate', header: 'Inactive Date', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  /**
  * initial table settings
  */
  tabSettings(): void {
    this.settingTableData = {
      rows: [],
      columns: this.columns,
      tablename: 'Invoice Adjustment Types',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }

  /**
  * initializing filterViewModel
  */
  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  /**
  * api call to get all invoice adjustment types
  */
  fetchInvoiceAdjustmentTypes(): void {
    this.invoiceAdjustmentTypeService.invoiceAdjustmentTypesList(this.filterViewModel.names, this.filterViewModel.isPositiveAdjustments,
      this.filterViewModel.inActives, this.filterViewModel.inactiveDate, this.filterViewModel.inactiveDateBegin,
      this.filterViewModel.inactiveDateEnd, this.filterViewModel.sortBy, this.filterViewModel.sortOrder, 
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
        this.invoiceAdjustmentTypesListResult(res);
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  /**
  * manipulate response data and sets to app-table
  * @param invoiceAdjList 
  */
  invoiceAdjustmentTypesListResult(invoiceAdjList: any): void {
    this.custRowsPerPageOptions = [];
    if (!invoiceAdjList.invoiceAdjustmentTypeList) {
      this.rows = [];
    } else {
      this.rows = invoiceAdjList.invoiceAdjustmentTypeList.list;
      this.totalRowsCount = invoiceAdjList.invoiceAdjustmentTypeList.totalItems;
      this.pageCnt = invoiceAdjList.invoiceAdjustmentTypeList.totalPages;
      this.rows.forEach((element: any) => {
        element.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT

          }, {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE
          }];

        // tslint:disable-next-line:no-unused-expression
        (element.isInactive === 1) ? [element.isInactive = AppSettings.NO, element.operations.push({
          name: AppSettings.ACTIVE_OPERATION,
          icon: AppSettings.ACTIVE_ICON,
        })] : [element.isInactive = AppSettings.YES, element.operations.push({
          name: AppSettings.INACTIVE_OPERATION,
          icon: AppSettings.INACTIVE_ICON,
        })];
        element.isPositiveAdjustment = (element.isPositiveAdjustment === 1) ?
          AppSettings.YES : AppSettings.NO;
        element.inactiveDate = (element.inactiveDate == null) ? null : this.commonService.customDateFormat(element.inactiveDate, this.getSchoolDateFormat()).date;
      });
    }
    if (invoiceAdjList.invoiceAdjustmentTypeList) {
      this.filterViewModel.pageNumber = invoiceAdjList.invoiceAdjustmentTypeList.pageNumber;
    }

    /**
    * sets data to app-table component
    */
    this.settingTableData = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      tablename: 'Invoice Adjustment Types',
      componentName: this.currentComponent,
      isAddRowEventRequired: true,
      isPaginationRequired: true,
      filtersList: invoiceAdjList.filters,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'new'
        }, navigateComponent: {
          name: '',
          btnName: ''
        },
        infoButton: {
          required: true,
          text: 'Invoice Adjustment Types'
        }
      }

    };
  }

  /**
  * gets the data to bind table on filter/pagination
  * @param _filterViewModel 
  */
  tableData(_filterViewModel: InvoiceAdjustmentFilterView): void {
    this.filterViewModel = _filterViewModel;
    this.fetchInvoiceAdjustmentTypes();
  }

  openInvoiceAdjTypeForm(): void {
    this.invoiceAdjTypeFormSubmitted = false;
    this.isInvoiceAdjTypeFormClosed = false;
    this.invoiceAdjTypeForm.resetForm();
    this.isSubmitButtonEnabled = true;
  }

  /**
  * close the panel and initialize form on close
  */
  closeForm(): void {
    this.invoiceAdjTypeForm.resetForm();
    this.isInvoiceAdjTypeFormClosed = true;
    this.invoiceAdjTypeFormSubmitted = false;
  }

  createOrUpdateInvoiceAdjustmentType(invoiceAdjustmentType: InvoiceAdjustmentTypeUpdateView): void {
    this.invoiceAdjTypeFormSubmitted = true;
    if (invoiceAdjustmentType.id == null && this.invoiceAdjustmentTypeForm.valid) {
      this.invoiceAdjustmentTypeService.createInvoiceAdjustmentType(invoiceAdjustmentType).subscribe(response => {
        this.openSnackBar(response.messages.ResultMessage);
        if (response.statusCode === HttpStatus.OK) {
          this.fetchInvoiceAdjustmentTypes();
          this.closeForm();
        }
        else {
          this.isInvoiceAdjTypeFormClosed = false;
        }

      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
      this.disbleSubmitBtn = false;
    }
    else if (this.invoiceAdjustmentTypeForm.valid) {
      this.invoiceAdjustmentTypeService.updateInvoiceAdjustmentType(invoiceAdjustmentType).subscribe(response => {
        this.openSnackBar(response.messages.ResultMessage);
        if (response.statusCode === HttpStatus.OK) {
          this.fetchInvoiceAdjustmentTypes();
          this.closeForm();
        }
        else {
          this.isInvoiceAdjTypeFormClosed = false;
        }
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
      this.disbleSubmitBtn = false;
    }

  }

  onRowActions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.invoiceAdjTypeFormSubmitted = false;
      this.isSubmitButtonEnabled = false;
      const isPositiveAdjustment = (operationData.clickedRow.isPositiveAdjustment === AppSettings.YES) ?
        1 : 0;
      this.isInvoiceAdjTypeFormClosed = false;
      this.invoiceAdjustmentTypeForm.controls['id'].setValue(operationData.clickedRow.id);
      this.invoiceAdjustmentTypeForm.controls['name'].setValue(operationData.clickedRow.name);
      this.invoiceAdjustmentTypeForm.controls['isPositiveAdjustment'].setValue(isPositiveAdjustment);
    }

    if (operationData.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const invoiceAdjustmentTypeId: string = operationData.clickedRow.id;
          this.deleteInvoiceAdjustmentTypes(invoiceAdjustmentTypeId);
        }
      });

    }

    /**check status based on */
    if (operationData.operation === AppSettings.ACTIVE_OPERATION.toLowerCase() || operationData.operation === AppSettings.INACTIVE_OPERATION.toLowerCase()) {
      const warningMessage = (operationData.operation === AppSettings.ACTIVE_OPERATION.toLowerCase()) ? AppSettings.WARNING_ON_ACTIVATE : AppSettings.WARNING_ON_INACTIVATE;
      const dialogValue = this.commonService.dialog(warningMessage, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          let isInActive: number;
          (operationData.clickedRow.isInactive === AppSettings.YES) ? isInActive = 1 : isInActive = 0;
          let invoiceAdjustmentTypeStatus: InvoiceAdjustmentTypeStatusView;
          invoiceAdjustmentTypeStatus = {
            id: operationData.clickedRow.id,
            isInActive: isInActive
          };
          this.changeInvoiceAdjustmentStatus(invoiceAdjustmentTypeStatus);
        }
      });
    }
  }

  deleteInvoiceAdjustmentTypes(invoiceAdjustmentTypeId: string): void {
    this.invoiceAdjustmentTypeService.deleteInvoiceAdjustmentType(invoiceAdjustmentTypeId).subscribe(response => {
      this.openSnackBar(response.messages.ResultMessage); 
      this.fetchInvoiceAdjustmentTypes();
    }, error => {
      this.errorResponse(error);
    });
  }

  /**
  * changes the status of invoice adjustment
  * @param invoiceAdjustmentTypeStatus 
  */
  changeInvoiceAdjustmentStatus(invoiceAdjustmentTypeStatus: InvoiceAdjustmentTypeStatusView): void {
    this.invoiceAdjustmentTypeService.updateInvoiceAdjustmentTypeStatus(invoiceAdjustmentTypeStatus)
      .subscribe(response => {
        this.openSnackBar(response.messages.ResultMessage); 
        if (response.statusCode === HttpStatus.OK) {
          this.fetchInvoiceAdjustmentTypes();
        }
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

}
