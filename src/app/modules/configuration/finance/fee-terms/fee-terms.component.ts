import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { AppSettings } from 'app/app.constants';
import { SearchFeeTermsView } from '../models/fee-term-view';
import { CommonService } from 'app/service/common.service';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';

import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from 'app/shared/common/common.component';
import { FeeTermsDataViewModel } from '../models/fee-terms-data-view-model';
import { FeeTermsViewModel } from '../models/fee-terms-view-model';
import { fuseAnimations } from '@fuse/animations';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-fee-terms',
  templateUrl: './fee-terms.component.html',
  styleUrls: ['./fee-terms.component.scss'],
  animations: fuseAnimations,
})
export class FeeTermsComponent extends CommonComponent implements OnInit {

  @ViewChild('stepper') stepper;
  @ViewChild('FeeTermForm') _feeTermForm;
  @ViewChild('DurationForm') _durationForm;
  @ViewChild('InvoiceSettingsForm') _invoiceSettingsForm;

  // model declarations
  searchFeeTermsView: SearchFeeTermsView;
  feeTermsDataViewModel: FeeTermsDataViewModel;
  feeTermsViewModel: FeeTermsViewModel;

  // variable declarations
  feeTermForm: FormGroup;
  durationForm: FormGroup;
  invoiceSettingsForm: FormGroup;

  isEdit = false;
  closeAddPanel: boolean;
  isCreate: boolean;
  isUpdate: boolean;
  disbleSubmitBtn = false;
  disbleUpdateBtn = false;
  buttonDisable = false;
  isValidInvoice = false;
  interactedStepperIndex: Number = 0;

  feeTermsDet: any;
  selectionNameInvType: any;

  generateInvOptions: Array<any> = [];
  httpStatus: any;

  // Table Variables 
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  currentComponent = 'FeeTermsComponent';

  constructor(private _fb: FormBuilder, public dialog: MatDialog, public commonService: CommonService, private typeService: TypeService,
    private feeTermsService: FeeTermsService, public snackBar: MatSnackBar, private changeDetector: ChangeDetectorRef) {
    super();

    this.feeTermsDataViewModel = {
      shortName: '',
      displayName: null,
      code: '',
      description: '',
      startDate: '',
      endDate: '',
      invoiceGenerationDate: '',
      invoiceIssueDate: '',
      invoiceDueDate: '',
      invoiceGenerationOptionTypeId: null,
    };

    this.feeTermsDet = {
      isInvoiceGenerated: false
    };

    this.feeTermsViewModel = {};
    this.searchFeeTermsView = {
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchFeeTermsView = modelTableComponent;
    }

    // Table Colums
    this.cols = [
      { field: 'shortName', header: 'Name', sort: true },
      { field: 'displayName', header: 'Display Name', sort: true },
      { field: 'code', header: 'Code', sort: true },
      { field: 'description', header: 'Description', sort: true },
      { field: 'startDate', header: 'Start Date', sort: true },
      { field: 'endDate', header: 'End Date', sort: true },
      { field: 'invoiceGenerationDate', header: 'Invoice Generation Date', sort: true },
      { field: 'invoiceIssueDate', header: 'Invoice Issue Date', sort: true },
      { field: 'invoiceDueDate', header: 'Invoice Due Date', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      tablename: 'Fee Terms',
      componentName: this.currentComponent,
    };

    this.feeTermForm = this._fb.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      displayName: new FormControl(null, [Validators.maxLength(45)]),
      code: new FormControl(null, [Validators.maxLength(6)]),
      description: new FormControl(null, [Validators.maxLength(135)]),
    });

    this.durationForm = this._fb.group({
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    });

    // validating form based on selection
    this.invoiceValidDetails();

    this.feeTermsViewModel = {};
    this.generateInvDetails();
    this.getFeeTermsTableDetails(this.searchFeeTermsView);
  }

  // validating form
  invoiceValidDetails(): void {
    this.invoiceSettingsForm = this._fb.group({
      invoiceGenerationDate: new FormControl(''),
      invoiceIssueDate: new FormControl(''),
      invoiceDueDate: new FormControl(''),
      invoiceGenerationOptionTypeId: new FormControl('')
    });
  }

  // get list based on type category
  generateInvDetails(): void {
    this.typeService.typesByTypeCategoryCode('IGOT').subscribe(res => this.generateInvOptions = res.types);
  }

  // get all assessment categories based on schoolId
  getFeeTermsTableDetails(data: any): void {
    /*if (localStorage.getItem(this.currentComponent)) {
      this.searchFeeTermsView = JSON.parse(localStorage.getItem((this.currentComponent)));
    }*/

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchFeeTermsView = modelTableComponent;
    }

    this.feeTermsService.feeTerms(data.shortName, data.displayName, data.code, data.description, data.sortBy, data.sortOrder,
      data.startDate, data.startDateBegin, data.startDateEnd, data.endDate, data.endDateBegin, data.endDateEnd, data.invoiceGenerationDate,
      data.invoiceGenerationDateBegin, data.invoiceGenerationDateEnd, data.invoiceIssueDate, data.invoiceIssueDateBegin, data.invoiceIssueDateEnd,
      data.invoiceDueDate, data.invoiceDueDateBegin, data.invoiceDueDateEnd, data.pageNumber, data.pageSize).subscribe(res => this.resFeeTermDetails(res), error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  // return response grid table
  resFeeTermDetails(data: any): void {
    this.custRowsPerPageOptions = [];
    if (!data.feeTermsViewModel) {
      this.rows = [];
      this.totalItems = 0;
      this.pageCnt = 0;
    }
    else {
      this.rows = data.feeTermsViewModel.list;
      this.totalItems = data.feeTermsViewModel.totalItems;
      this.pageCnt = data.feeTermsViewModel.totalPages;

      const feeTermOperations = [
        {
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT
        },
        {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE,
        },

      ];

      // date format for table inputs
      this.rows.forEach(e => {
        e.operations = feeTermOperations;
        e.startDate = this.commonService.customDateFormat(e.startDate, this.getSchoolDateFormat()).date;
        e.endDate = this.commonService.customDateFormat(e.endDate, this.getSchoolDateFormat()).date;
        e.invoiceGenerationDate = e.invoiceGenerationDate ===
          null ? '' : this.commonService.customDateFormat(e.invoiceGenerationDate, this.getSchoolDateFormat()).date;
        e.invoiceDueDate = e.invoiceDueDate ===
          null ? '' : this.commonService.customDateFormat(e.invoiceDueDate, this.getSchoolDateFormat()).date;
        e.invoiceIssueDate = e.invoiceIssueDate ===
          null ? '' : this.commonService.customDateFormat(e.invoiceIssueDate, this.getSchoolDateFormat()).date;
      });
    }
    if (data.feeTermsViewModel) {
      this.searchFeeTermsView.pageNumber = data.feeTermsViewModel.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.searchFeeTermsView,
      rows: this.rows,
      tablename: 'Fee Terms',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      filtersList: data.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Fee Terms'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        }
      },
    };
  }

  // feeterm form details
  feeTermDetails(feeTermForm: any): void {
    if (feeTermForm.status === AppSettings.VALID) {
      this.feeTermsDataViewModel.shortName = feeTermForm.value.name;
      this.feeTermsDataViewModel.displayName = feeTermForm.value.displayName;
      this.feeTermsDataViewModel.code = feeTermForm.value.code;
      this.feeTermsDataViewModel.description = feeTermForm.value.description;
    }
  }

  // duration form details
  durationDetails(durationForm: any): void {
    if (durationForm.status === AppSettings.VALID) {
      this.feeTermsDataViewModel.startDate = this.commonService.customDateFormat(durationForm.value.startDate, this.getSchoolDateFormat()).date;
      this.feeTermsDataViewModel.endDate = this.commonService.customDateFormat(durationForm.value.endDate, this.getSchoolDateFormat()).date;
    }
  }

  // invoice details form
  invoiceDetails(invoiceSettingsForm: any): void {
    if (invoiceSettingsForm.value.invoiceIssueDate == null) {
      invoiceSettingsForm.value.invoiceIssueDate = '';
    }
    else {
      this.feeTermsDataViewModel.invoiceGenerationDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceGenerationDate, this.getSchoolDateFormat()).date;
      this.feeTermsDataViewModel.invoiceDueDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceDueDate, this.getSchoolDateFormat()).date;
      this.feeTermsDataViewModel.invoiceIssueDate = this.commonService.customDateFormat(invoiceSettingsForm.value.invoiceIssueDate, this.getSchoolDateFormat()).date;
      this.generateInvOptions.forEach(element => {
        if (element.id === invoiceSettingsForm.value.invoiceGenerationOptionTypeId) {
          this.selectionNameInvType = element.name;
        }
      });
    }
  }

  // Cancel Button
  cancel(): void {
    this.invoiceValidDetails();
    this._durationForm.resetForm();
    this._feeTermForm.resetForm();
    this._invoiceSettingsForm.resetForm();
    this.isValidInvoice = false;
    this.closeAddPanel = true;
    this.buttonDisable = false;
    this.selectionNameInvType = '';
    this.stepper.reset();
  }

  // add new form for assessment categories
  onAddFormClick(): void {
    this.interactedStepperIndex = 0;
    this.closeAddPanel = false;
    this.isValidInvoice = false;
    this.stepper.reset();
    this.isCreate = true;
    this.isUpdate = false;
    this.commonService.setOverlay(AppSettings.SHOW);
    this.feeTermsDet = {
      isInvoiceGenerated: false
    };
  }

  // on Submit for based on request
  onSubmitForm(): void {
    if (!this.isEdit) {
      if (this.feeTermForm.status === AppSettings.VALID && this.durationForm.status === AppSettings.VALID) {
        this.feeTermsDataViewModel.shortName = this.feeTermForm.value.name;
        this.feeTermsDataViewModel.displayName = this.feeTermForm.value.displayName;
        this.feeTermsDataViewModel.code = this.feeTermForm.value.code;
        this.feeTermsDataViewModel.description = this.feeTermForm.value.description;
        this.feeTermsDataViewModel.startDate = this.durationForm.value.startDate;
        this.feeTermsDataViewModel.endDate = this.durationForm.value.endDate;
        this.feeTermsDataViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate;
        this.feeTermsDataViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate;
        this.feeTermsDataViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate;
        this.feeTermsDataViewModel.invoiceGenerationOptionTypeId = this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId;
        this.disbleSubmitBtn = true;
        this.feeTermsService.addFeeTerms(this.feeTermsDataViewModel).subscribe(res => {
          if (res.statusCode === this.httpStatus.OK) {
            this.disbleSubmitBtn = false;
            this.formAddUpdate();
            this.openSnackBar(res.messages.ResultMessage);
            this.scrollIntoView('app-table');
          }
          else {
            this.disbleSubmitBtn = false;
            this.openSnackBar(res.messages.ResultMessage);
          }
        }, error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
          this.updateForm();
        });
      }
    }
    else {
      if (this.feeTermForm.status === AppSettings.VALID && this.durationForm.status === AppSettings.VALID) {
        this.feeTermsViewModel.id = this.feeTermsDet.id;
        this.feeTermsViewModel.shortName = this.feeTermForm.value.name;
        this.feeTermsViewModel.displayName = this.feeTermForm.value.displayName;
        this.feeTermsViewModel.code = this.feeTermForm.value.code;
        this.feeTermsViewModel.description = this.feeTermForm.value.description;
        this.feeTermsViewModel.startDate = this.durationForm.value.startDate;
        this.feeTermsViewModel.endDate = this.durationForm.value.endDate;
        this.feeTermsViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate;
        this.feeTermsViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate;
        this.feeTermsViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate;
        this.feeTermsViewModel.invoiceGenerationOptionTypeId = this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId;
        this.disbleUpdateBtn = true;
        this.feeTermsService.editFeeTerms(this.feeTermsViewModel).subscribe(res => {
          if (res.statusCode === this.httpStatus.OK) {
            this.isEdit = false;
            this.disbleUpdateBtn = false;
            this.formAddUpdate();
            this.openSnackBar(res.messages.ResultMessage);
            this.scrollIntoView('app-table');
          }
          else {
            this.disbleUpdateBtn = false;
            this.openSnackBar(res.messages.ResultMessage);
          }
        }, error => {
          this.disbleUpdateBtn = false;
          this.errorResponse(error);
          this.updateForm();
        });
      }
    }
  }

  // common for Add and Update
  formAddUpdate(): void {
    this.invoiceValidDetails();
    this.closeAddPanel = true;
    this.feeTermsDataViewModel = {};
    this.selectionNameInvType = '';
    this.onAddFormClick();
    this._durationForm.resetForm();
    this._feeTermForm.resetForm();
    this._invoiceSettingsForm.resetForm();
    this.stepper.selectedIndex = 0;
    this.getFeeTermsTableDetails(this.searchFeeTermsView);
  }

  updateForm(): void {
    this.feeTermsDataViewModel.shortName = this.feeTermForm.value.name;
    this.feeTermsDataViewModel.displayName = this.feeTermForm.value.displayName;
    this.feeTermsDataViewModel.code = this.feeTermForm.value.code;
    this.feeTermsDataViewModel.description = this.feeTermForm.value.description;
    if (this.durationForm.value.startDate != null) {
      this.feeTermsDataViewModel.startDate = this.commonService.customDateFormat(this.durationForm.value.startDate, this.getSchoolDateFormat()).date;
      this.feeTermsDataViewModel.endDate = this.commonService.customDateFormat(this.durationForm.value.endDate, this.getSchoolDateFormat()).date;
    }

    this.feeTermsDataViewModel.invoiceGenerationDate = this.invoiceSettingsForm.value.invoiceGenerationDate ===
      null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceGenerationDate, this.getSchoolDateFormat()).date;
    this.feeTermsDataViewModel.invoiceDueDate = this.invoiceSettingsForm.value.invoiceDueDate ===
      null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceDueDate, this.getSchoolDateFormat()).date;
    this.feeTermsDataViewModel.invoiceIssueDate = this.invoiceSettingsForm.value.invoiceIssueDate ===
      null ? '' : this.commonService.customDateFormat(this.invoiceSettingsForm.value.invoiceIssueDate, this.getSchoolDateFormat()).date;
    if (this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId != null
        && this.generateInvOptions.find(x => x.id === this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId) !== undefined) {
      const generationOptionName = this.generateInvOptions.find(x => x.id === this.invoiceSettingsForm.value.invoiceGenerationOptionTypeId).name;
      this.selectionNameInvType = generationOptionName;
    }
    else {
      this.selectionNameInvType = '';
    }
  }

  // updating forms 
  OnSelectionChange(event: any): void {
    this.updateForm();
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex === 2) {
      event.selectedStep.interacted = false;
      (<any>Object).values(this.invoiceSettingsForm.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
      });
    }    
  }

  // rowwise actions
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.feeTermsService.dropFeeTerms(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
    else {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.isCreate = false;
      this.isUpdate = true;
      this.feeTermsService.feeTermById(event.clickedRow.id).subscribe(res => this.retFeeTermsById(res));
    }
  }

  // delete return response after click
  deleteResponse(response: any): void {
    this.getFeeTermsTableDetails(this.searchFeeTermsView);
    this.openSnackBar(response.messages.ResultMessage);
  }

  // fetching feeterm details based on Id
  retFeeTermsById(data: any): void {
    if (data.statusCode === this.httpStatus.OK) {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.feeTermsDet = data.feeTermIdViewModel;
      this.feeTermForm.controls['name'].setValue(data.feeTermIdViewModel.shortName);
      this.feeTermForm.controls['displayName'].setValue(data.feeTermIdViewModel.displayName);
      this.feeTermForm.controls['code'].setValue(data.feeTermIdViewModel.code);
      this.feeTermForm.controls['description'].setValue(data.feeTermIdViewModel.description);

      this.durationForm.controls['startDate'].setValue(data.feeTermIdViewModel.startDate);
      this.durationForm.controls['endDate'].setValue(data.feeTermIdViewModel.endDate);

      this.invoiceSettingsForm.controls['invoiceGenerationDate'].setValue(data.feeTermIdViewModel.invoiceGenerationDate);
      this.invoiceSettingsForm.controls['invoiceIssueDate'].setValue(data.feeTermIdViewModel.invoiceIssueDate);
      this.invoiceSettingsForm.controls['invoiceDueDate'].setValue(data.feeTermIdViewModel.invoiceDueDate);
      this.invoiceSettingsForm.controls['invoiceGenerationOptionTypeId'].setValue(data.feeTermIdViewModel.invoiceGenerationOptionTypeId);
    }
    else {
      this.openSnackBar(data.messages.ResultMessage, true);
    }
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
  }

  isNestedObjectEmpty(obj, checkKey: any = false): boolean {
    let isEmpty = true;
    for (const key in obj) {
      if (checkKey && key === checkKey) {
        continue;
      }
      if (obj[key] !== null && obj[key] !== '') {
        if (typeof (obj[key]) === 'object') {
          isEmpty = this.isNestedObjectEmpty(obj[key]);
        } else {
          return false;
        }
      }
    }
    return isEmpty;
  }
}
