import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { MatAutocompleteTrigger, MatDialog, MatSnackBar } from '@angular/material';
import { AcademicSessionService } from 'app/service/academic-service';
import { ManageFeeTypeTranchesService } from 'app/service/configuration/finance/api/manage-fee-type-tranches.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { Router } from '@angular/router';
import { FeeModuleConfig } from 'app/url.config';
import { InvoiceFilterView } from '../../../invoice/models/invoice-filter-view-model';
import { CommonService } from 'app/service/common.service';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { InvoiceSearchCriteriaView } from 'app/models/invoice/invoice-search-criteria-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import * as HttpStatus from 'http-status-codes';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { PaymentViewModel } from 'app/models/invoice/payment-view-model';
import { Subscription } from 'rxjs';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ZipViewModel } from 'app/service/file-management/model/zip-view-model';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';


@Component({
  selector: 'app-invoice-search-details',
  templateUrl: './invoice-search-details.component.html',
  styleUrls: ['./invoice-search-details.component.scss']
})
export class InvoiceSearchDetailsComponent extends CommonComponent implements OnInit {
  @ViewChild('isCancel') customTemplate: TemplateRef<any>;
  @ViewChild('appForm') aForm;
  @ViewChild('studentName') studentNameAutoInput: any;
  zipViewModel: ZipViewModel;
  searchForm: FormGroup;
  isSchoolBoards: boolean;
  schoolBoardsList: any = [];
  boardId: number;
  classNames: any[] = [];
  classId: number;
  sectionNames: any[] = [];
  feeTermsList: any[];
  filterdStudents: any[];
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  academicSessions: any[];
  activeAcademicSession: any = [];
  currentAcademicSessionId: any;
  feeTypes: any = [];
  schoolAcademicSessionId: number;
  invoiceCols: {}[];
  invoiceSettings: {};
  currentComponent = 'InvoiceSearchDetailsComponent';
  closeAddPanel: boolean;
  vehicleInsuranceSearchView: {};
  invoiceSearchView: InvoiceFilterView;
  invoiceData = [];
  totalItems: any;
  isCancel: boolean;
  cancellationForm: FormGroup;
  invoiceCriteriaViewModel: InvoiceSearchCriteriaView;
  HttpStatus: any;
  invoiceId: any = [];
  fileNames: any = [];
  validateForm: boolean;
  doValidate: boolean;
  openAddPanel: boolean;
  invoiceSummary: any;
  invoiceSummaryHeadders: any;
  invoiceActions: any = [];
  actionValue: number;
  studentId: string;
  errorMessage = true;
  customCardDetails: { title: string, message: string } = { title: 'Invoice Search', message: 'Search Invoice' };
  showCustomCard = true;
  showPayments: boolean;
  paymentViewModel: PaymentViewModel;
  feeAccount: {};
  clearSubscription: Subscription;
  searchDetails: any;
  nameImgProp: any;
  ReturnFileName: any;
  operationsForSummary: any[] = [];
  invList: any[];
  onSearchHeader = false;
  paymentMessage: string;
  selectedInvoices: any[] = [];
  option = new FormControl('');
  constructor(public dialogRef: MatDialog, public manageFeeTypeTranchesService: ManageFeeTypeTranchesService,
    private academicSessionService: AcademicSessionService, private feeTypeService: FeeTypeService
    , private studentDbService: StudentDBService, private router: Router
    , private classesConfigService: ClassesConfigService, public commonService: CommonService
    , private invoiceService: InvoiceService, public dialog: MatDialog, private studentService: StudentDatabaseService
    , private feetermService: FeeTermsService, private paymentCorrectionService: PaymentCorrectionService, public snackBar: MatSnackBar, private storeService: StoreService,
    private sanitizer: DomSanitizer, private cd: ChangeDetectorRef) {
    super();
    this.clearSubscription = this.commonService.isCorrectionClear().subscribe(res => {
      if (!res.isClear) {
        this.showPayments = res.isClear;
      }
    });
    this.initializeModel();
    this.zipViewModel = {
      fileNames: [],
      returnFileName: ''
    };
  }
  initializeModel(): void {
    this.invoiceSearchView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      studentIds: [],
      schoolAcademicSessionId: 0,
      feeTerms: [],
      board: [],
      studentName: [],
      classes: [],
      sections: [],
      invoiceNumber: [],
      receiptNumber: [],
      feeType: [],
      invoiceDateBegin: null,
      invoiceDateEnd: null,
      issueDateBegin: null,
      issueDateEnd: null,
      dueDateBegin: null,
      dueDateEnd: null,
      invoiceAmount: [],
      adjustmentAmount: [],
      dueAmount: [],
      penaltyAmount: [],
      realizedAmount: [],
      balanceAmount: [],
      invoiceStatus: [],
      isCancel: true,
    };
  }
  ngOnInit(): void {
    this.initializeForm();
    this.invoiceActions = [
      { id: 1, name: 'Payment' },
      { id: 2, name: 'Cancel' },
      { id: 3, name: 'Download Invoices' }
    ];
    this.HttpStatus = require('http-status-codes');
    this.onClear(true);
    this.showCustomCard = true;
    this.prepareInvoiceTable(this.invoiceData, false);

    this.searchForm.controls['studentName'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.studentService.studentNamesBaseOnAcademicSession(this.searchForm.controls['schoolAcademicSessionId'].value, this.searchForm.controls['board'].value,
          this.searchForm.controls['classes'].value, this.searchForm.controls['sections'].value, name).subscribe((res) => {
            this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
            this.cd.detectChanges();
          });
      }
      else {
        this.filterdStudents = [];
      }
    });
    this.cancellationForm = new FormGroup({
      cancelledReason: new FormControl('', [Validators.required, Validators.maxLength(180)]),
      id: new FormControl(''),
    });
    this.invoiceCriteriaViewModel = {
      ids: [],
      cancelledReason: ''
    };
    this.operationMethods();

    this.clearFilterData();
    // get storage if any
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.invoiceSearchView = modelTableComponent;
      this.searchForm.patchValue(modelTableComponent);
      this.currentAcademicSessionId = modelTableComponent.schoolAcademicSessionId;
      if (modelTableComponent.board){
        this.boardId = modelTableComponent.board;
        this.getAcademicSession(true);
      }else if (modelTableComponent.schoolAcademicSessionId){
        this.getAcademicSession(true);
      } else{
        this.getAcademicSession(false);
      }
      this.getClassesList(true);
      this.onClassSelect({ value: modelTableComponent.classes }, true);
      this.invoiceFilter(this.invoiceSearchView);
    }
    else {
      this.getAcademicSession(false);
      this.searchForm.controls['isCancel'].setValue(true);
    }
  }

  initializeForm(): void {
    this.searchForm = new FormGroup({
      schoolAcademicSessionId: new FormControl(''),
      feeTerms: new FormControl(''),
      board: new FormControl(''),
      classes: new FormControl(''),
      sections: new FormControl(''),
      studentName: new FormControl(''),
      invoiceNumber: new FormControl(''),
      receiptNumber: new FormControl(''),
      feeType: new FormControl(''),
      isCancel: new FormControl(true)
    });
  }

  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([FeeModuleConfig._Invoice_Details + event.clickedRow.id, { academicSessionId: this.currentAcademicSessionId }]);
    }
    else if (event.operation === AppSettings.CANCEL.toLowerCase()) {
      this.isCancel = true;
      this.closeAddPanel = false;
      this.openAddPanel = true;
      this.invoiceId = [];
      this.invoiceId.push(event.clickedRow.id);
      this.CancelForm();
    }
    else if (event.operation === AppSettings.DOWNLOAD_INVOICE.toLowerCase()) {
      if (event.clickedRow.attachmentName != null) {
        this.ReturnFileName = 'Invoice_' + event.clickedRow.invoiceNumber + '_' + event.clickedRow.studentName + '_' + new Date().toLocaleDateString() + '.pdf';
        this.DownloadDoc(event.clickedRow.attachmentName);
      }
      else {
        this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
        return;
      }
    }
  }

  async DownloadDoc(data): Promise<void> {
    if (data !== null) {
      this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data));
      const a = document.createElement('a');
      const response = await fetch(this.storeService.getFilePath(data));
      const responseData = await response.blob();
      const file = new Blob([responseData], { type: 'application/octet-stream' });
      a.href = URL.createObjectURL(file);
      a.download = this.ReturnFileName.replace(' ', '_');
      a.click();
    }
  }


  fieldRest(): void {

    this.feeTermsList = [];
    this.schoolBoardsList = [];
    this.classNames = [];
    this.sectionNames = [];
    this.feeTypes = [];
    this.searchForm.controls.feeTerms.patchValue('');
    this.searchForm.controls.board.patchValue('');
    this.searchForm.controls.classes.patchValue('');
    this.searchForm.controls.sections.patchValue('');
    this.searchForm.controls.feeType.patchValue('');
  }

  getAcademicSession(setDefalutBoard = true): void {

    this.academicSessionService.getAcademicSessionsBySchoolId()
      .subscribe(
        response => {
          if (response.academicSessionDataView.length) {
            this.academicSessions = [];
            response.academicSessionDataView.forEach(element => {
              this.academicSessions.push({
                value: element.id,
                label: element.displayName,
                code: element.statusCode
              });

              if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE) {
                this.activeAcademicSession.push({
                  value: element.id,
                  label: element.displayName,
                  startDate: element.startDate,
                  endDate: element.endDate
                });
                this.currentAcademicSessionId = this.searchForm.value.schoolAcademicSessionId ? this.searchForm.value.schoolAcademicSessionId : element.id;
              }
            });
            this.currentAcademicSessionId = this.currentAcademicSessionId ? this.currentAcademicSessionId : this.academicSessions[0].value;
            this.getFeeTerms();
            this.getSchoolBoardsList(setDefalutBoard);
            this.fetchFeeTypes();
          }
        });
  }

  // get the list school boards
  getSchoolBoardsList(isManual = false): void {
    this.schoolBoardsList = [];
    this.classesConfigService.boardsBasedOnAcademicSession(this.currentAcademicSessionId).subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        this.isSchoolBoards = true;
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
          if (!isManual){
            this.searchForm.controls['board'].setValue(this.schoolBoardsList[0].value);
          }
          if (this.searchForm.value.board){
            this.boardId = this.searchForm.value.board;
            this.getClassesList();
          }
        });
      } else {
        this.isSchoolBoards = false;
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onAcademicSessions(data: any): void {
    this.fieldRest();
    this.currentAcademicSessionId = data.value;
    this.getFeeTerms();
    this.getSchoolBoardsList(true);
    this.fetchFeeTypes();
  }

  onBoardSelect(data: any): void {
    this.classNames = [];
    this.sectionNames = [];
    this.boardId = data.value;
    this.searchForm.controls.classes.reset();
    this.searchForm.controls.sections.reset();
    this.getClassesList();
  }

  // Get Classes to filter table data
  getClassesList(onManualChange = false): void {
    this.classNames = [];
    if (!onManualChange) {
      this.sectionNames = [];
    }
    if (!(this.boardId && this.currentAcademicSessionId)) {
      return;
    }
    this.classesConfigService.classesBasedOnAcademicSession(this.currentAcademicSessionId, this.boardId).subscribe(
      response => {
        this.classNames = [];
        if (response.listViews != null) {
          if (response.listViews.length) {
            response.listViews.forEach(element => {
              this.classNames.push({
                label: element.name,
                value: element.id
              });
            });
          }
        } else {
          this.openSnackBar(AppSettings.SCHOOL_BOARD_HAS_CLASSES, true);
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }
  // End

  onClassSelect(data: any, onManualChange = false): void {
    if (!onManualChange) {
      this.searchForm.controls.sections.reset();
    }
    this.classId = data.value;
    this.sections();
  }

  CancelForm(): void {
    this.showPayments = false;
    this.dialogRef.open(CustomDialogComponent, {
      data: { template: this.customTemplate }
    });
  }

  // on selection of class
  sections(): void {
    this.sectionNames = [];
    if (!(this.boardId && this.classId && this.currentAcademicSessionId)) {
      return;
    }
    this.classesConfigService.sectionsBasedOnAcademicSession(this.currentAcademicSessionId, this.boardId, this.classId).subscribe(response => {
      if (response.listViews.length) {
        response.listViews.forEach(element => {
          this.sectionNames.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // getting feeTerms
  getFeeTerms(): void {
    this.feeTermsList = [];
    this.feetermService.getFeeTerms_1(this.currentAcademicSessionId).subscribe(
      response => {
        if (response.listViews != null && response.listViews.length > 0) {
          response.listViews.forEach(element => {
            this.feeTermsList.push({
              label: element.name,
              value: element.id
            });
          });
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }
  // End

  fetchFeeTypes(): void {
    this.feeTypes = [];
    this.feeTypeService.getFeeTypesBasedOnAcademicSession(this.currentAcademicSessionId).subscribe(res => {
      if (res.listViews) {
        res.listViews.forEach(element => {
          this.feeTypes.push({
            label: element.name,
            value: element.id
          });
        });
      }
    });
  }

  getSelectedStudent(value: any): void {
    if (value) {
      this.invoiceSearchView.studentName = value.studentName;
      this.invoiceSearchView.studentIds = value.id;
      this.searchForm.controls['studentName'].setValue(value.studentName);
    }
  }

  getAllFilteredStudents(): void {
    if (this.searchForm === undefined) {
      return;
    }
  }

  onClear(onManualChange = false): void {
    this.searchForm.reset();
    this.fieldRest();
    this.currentAcademicSessionId = null;
    this.invoiceSummaryHeadders = null;
    this.showCustomCard = false;
    this.classNames = [];
    this.sectionNames = [];
    this.schoolBoardsList = [];
    if (!onManualChange) {
      this.clearStorageComponent(this.currentComponent);
      this.initializeModel();
      this.onSearchHeader = false;
      this.invoiceSettings['rows'] = [];
    }
  }
  getTableData(event): any {
    this.invoiceSearchView = event;
    Object.assign(this.invoiceSearchView, this.searchForm.value);
    this.invoiceFilter(this.invoiceSearchView);
  }
  onSearch(data: any): void {
    if (!this.searchForm.invalid) {
      this.invoiceSearchView['pageNumber'] = AppSettings.PAGENUMBER;
      this.invoiceFilter(data);
    }
    else {
      this.doValidate = true;
    }
  }

  invoiceFilter(data: any): void {
    this.invoiceSettings = {};
    this.onSearchHeader = false;
    this.invoiceSettings['rows'] = [];

    this.invoiceSearchView.isCancel = this.searchForm.value.isCancel;
    this.invoiceSearchView.feeType = data.feeType;

    const searchData = this.prepareModel(this.invoiceSearchView, data);
    if (!this.searchForm.controls['studentName'].value) {
      searchData.studentIds = null;
    }
    searchData.schoolAcademicSessionId = this.currentAcademicSessionId;
    this.setModelDataTableComponent(this.currentComponent, this.invoiceSearchView);
    this.studentDbService.invoiceList(searchData).subscribe((res: any) => this.invoiceResult(res), error => {
      this.errorResponse(error);
    });
  }

  clearFilterData(): void {
    this.invoiceSearchView.adjustmentAmount = [];
    this.invoiceSearchView.balanceAmount = [];
    this.invoiceSearchView.dueAmount = [];
    this.invoiceSearchView.dueDateBegin = null;
    this.invoiceSearchView.dueDateEnd = null;
    this.invoiceSearchView.invoiceAmount = [];
    this.invoiceSearchView.invoiceDateBegin = null;
    this.invoiceSearchView.invoiceDateEnd = null;
    this.invoiceSearchView.invoiceStatus = [];
    this.invoiceSearchView.issueDateBegin = null;
    this.invoiceSearchView.issueDateEnd = null;
    this.invoiceSearchView.penaltyAmount = [];
    this.invoiceSearchView.realizedAmount = [];
    this.invoiceSearchView.receiptNumber = [];
  }

  invoiceResult(data: any): void {
    this.showCustomCard = false;
    this.invoiceData = [];
    if (data.resultList != null) {
      this.invoiceData = this.setDateFormat(data.resultList.list);
      this.invoiceData.forEach(e => {
        e.invoiceAmount = e.invoiceAmount !== 0 ? this.getFormattedCurrency(e.invoiceAmount) : e.invoiceAmount;
        e.adjustmentAmount = e.adjustmentAmount !== 0 ? this.getFormattedCurrency(e.adjustmentAmount) : e.adjustmentAmount;
        e.realizedAmount = e.realizedAmount !== 0 ? this.getFormattedCurrency(e.realizedAmount) : e.realizedAmount;
        e.balanceAmount = e.balanceAmount !== 0 ? this.getFormattedCurrency(e.balanceAmount) : e.balanceAmount;
        e.operations = [
          {
            name: AppSettings.VIEW,
            icon: AppSettings.DETAILS_ICON,
          },
          {

            icon: AppSettings.MARKS_ICON,
            name: AppSettings.DOWNLOAD_INVOICE,
          }
        ];
      });
      this.invoiceSearchView.pageNumber = data.pageNumber;
      this.totalItems = data.totalItems;
    }
    else {
      this.invoiceSummaryHeadders = null;
    }
    if (data.dataModel != null) {
      this.invoiceSummaryHeadders = Object.keys(data.dataModel);
      this.invoiceSummary = data.dataModel;
    }
    this.prepareInvoiceTable(data.filters, false);
    this.onSearchHeader = true;
    // this.invoiceId.length === 0 ? this.showPayments = false : this.CancelForm();
  }

  prepareInvoiceTable(data: Array<any>, buttonRequired: boolean): void {
    this.invoiceCols = [
      { field: 'invoiceNumber', header: 'Invoice Number', sort: true },
      { field: 'feeTerm', header: 'Fee Term', sort: true },
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'classSection', header: 'Class-Section', sort: true },
      { field: 'invoiceDate', header: 'Invoice Date', sort: true },
      { field: 'issueDate', header: 'Issue Date', sort: true },
      { field: 'dueDate', header: 'Due Date', sort: true },
      { field: 'invoiceAmount', header: 'Invoice Amount', sort: true },
      { field: 'adjustmentAmount', header: 'Adjustment Amount', sort: true },
      { field: 'realizedAmount', header: 'Realized Amount', sort: true },
      { field: 'balanceAmount', header: 'Balance Amount', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
    // To-do
    // if (this.invoiceSearchView.isCancel) {
    //   data.map(e => {
    //     if (e.name === 'invoiceStatus') {
    //       e.options = e.options.filter(ele => ele.label !== 'Cancelled');
    //     }
    //   });
    // }
    this.invoiceSettings = {
      rows: this.invoiceData,
      columns: this.invoiceCols,
      isSelectRowRequired: true,
      componentName: this.currentComponent,
      visibleSelectAll: true,
      totalRowsCount: this.totalItems,
      isPaginationRequired: true,
      isMultiDeleteRequired: false,
      model: this.invoiceSearchView,
      tableName: 'Payments',
      headerOperations: {
        addingForm: {
          required: buttonRequired,
          btnName: 'New Payment'
        }
      },
      filtersList: data,
    };
    this.scrollIntoViewById('invoice-grid');
  }

  InvoiceCancel(cancellationForm: any): void {
    this.validateForm = true;
    if (this.cancellationForm.invalid) {
      return;
    }
    else {
      this.invoiceCriteriaViewModel.ids = this.invoiceId;
      this.invoiceCriteriaViewModel.cancelledReason = cancellationForm.value.cancelledReason;
      this.invoiceService.feeInvoice(this.invoiceCriteriaViewModel).subscribe(res => this.response(res), error => {
        this.errorResponse(error);
      });
    }
  }

  // response
  response(data: any): void {
    this.validateForm = false;
    if (data.statusCode === this.HttpStatus.OK) {
      this.dialog.closeAll();
      this.cancellationForm.reset();
      this.aForm.resetForm();
      this.closeAddPanel = true;
      this.invoiceFilter(this.invoiceSearchView);
      this.option.reset();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }
  // method for when click cancel panel it will open
  closeForm(): void {
    this.validateForm = false;
    this.dialogRef.closeAll();
    this.aForm.resetForm();
    this.closeAddPanel = true;
  }

  // method for prevent spaces and allow only single  at the middle of the string
  preventSpaces(event: any): void {
    this.preventSpace(event);
  }

  selectAllForInvoice(data): void {
    this.selectedInvoices = data;
    if (!data.length) {
      this.errorMessage = true;
      this.option.reset();
    }
    this.invoiceId = [];
    this.fileNames = [];
    this.studentId = null;
    if (data.length > 0) {
      for (let index = 0; index < data.length; index++) {
        this.invoiceId.push(data[index].id);
        this.studentId = data[0].studentId;
        if (data[index].attachmentName != null) {
          this.fileNames.push(data[index].attachmentName);
        }
      }
    }
    else {
      this.invoiceId = [];
      this.showPayments = false;
    }
  }

  changeValue(data: any): void {
    this.searchForm.controls['isCancel'].setValue(data.checked);
  }


  invoiceActionSelect(data): void {
    this.errorMessage = false;
    this.actionValue = data;
  }
  paymentActionRedirection(): void {
    const noInvoiceAmountsList = this.selectedInvoices.filter(x => x.invoiceAmount === 0 || x.balanceAmount === 0);
    if (noInvoiceAmountsList && noInvoiceAmountsList.length) {
      this.openSnackBar('Some selected invoices has no balance amount', true);
      return;
    }
    if (this.actionValue === undefined) {
      this.errorMessage = true;
      return;
    }
    if (this.actionValue === 3) {
      this.fileNames.forEach(element => {
        this.zipViewModel.returnFileName = 'Invoice';
        this.zipViewModel.fileNames.push(element);
      });
      this.zipFilesDownload();
    }
    else {
      this.invoiceService.checkInvoices(this.invoiceId).subscribe(data => {
        if (data.statusCode === HttpStatus.BAD_REQUEST) {
          this.openSnackBar(data.messages.ResultMessage, true);
          this.showPayments = false;
        }
        else {
          this.feeAccount = {
            feeAccountId: data.feeAccountId,
            correctionDate: new Date()
          };

          this.actionValue === 1 ? (this.showPayments = true, this.paymentText()) : this.CancelForm();
        }
      });
    }
  }
  paymentText(): void {
    if (this.invoiceId.length > 1) {
      this.paymentMessage = 'Payment Amount will be processed towards the selected multiple invoices in the order in which the invoices are generated.';
    }
    else {
      this.paymentMessage = '';
    }
  }

  zipFilesDownload(): void {
    if (this.zipViewModel.fileNames.length > 0) {
      this.storeService.storeZipPut(this.zipViewModel).subscribe(res => this.resFiles(res));
    }
    else {
      this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
    }
    this.option.reset();
  }

  resFiles(data: any): void {
    this.ReturnFileName = data.extension;
    this.DownloadDoc(data.extension);
    this.fileNames = [];
    this.invoiceId = [];
    this.invoiceFilter(this.invoiceSearchView);
  }

  operationMethods(): void {
    this.operationsForSummary = [
      {
        name: AppSettings.DOWNLOAD_ALL_INVOICES,
        icon: AppSettings.VIEW,
        operationName: AppSettings.VIEW_OPERATION,
      },
      {
        name: AppSettings.DOWNLOAD_PENDING_INVOICES,
        icon: AppSettings.VIEW,
        operationName: AppSettings.VIEW
      },
      {
        name: AppSettings.DOWNLOAD_CANCELLED_INVOICES,
        icon: AppSettings.VIEW,
        operationName: AppSettings.VIEW_OPERATION
      }
    ];
  }

  onSelectAction(item): void {
    if (this.invoiceData.length > 0) {
      this.invList = [];
      switch (true) {
        case item.name === AppSettings.DOWNLOAD_ALL_INVOICES:
          this.invList = this.invoiceData.filter(x => x.attachmentName != null);
          this.zipViewModel.returnFileName = AppSettings.INVOICES;
          this.setViewModel();
          break;
        case item.name === AppSettings.DOWNLOAD_PENDING_INVOICES:
          this.invList = this.invoiceData.filter(x => x.status === AppSettings.PENDING && x.attachmentName != null);
          this.zipViewModel.returnFileName = AppSettings.INVOICES_PENDING;
          this.setViewModel();
          break;
        case item.name === AppSettings.DOWNLOAD_CANCELLED_INVOICES:
          this.invList = this.invoiceData.filter(x => x.status === AppSettings.CANCELLED && x.attachmentName != null);
          this.zipViewModel.returnFileName = AppSettings.INVOICES_CANCELLED;
          this.setViewModel();
          break;
      }
    }
    else {
      this.openSnackBar(AppSettings.NODATA_FOUND, true);
    }
  }

  setViewModel(): void {
    this.zipViewModel.fileNames = [];
    if (this.invList.length > 0) {
      this.invList.forEach(element => {
        this.zipViewModel.fileNames.push(element.attachmentName);
      });
      this.zipFilesDownload();
    }
    else {
      this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
    }
  }

  savePayment(paymentForm: any): void {
    this.invoiceService.checkInvoices(this.invoiceId).subscribe(data => {
      if (data.statusCode === HttpStatus.BAD_REQUEST) {
        this.openSnackBar(data.messages.ResultMessage, true);
        this.showPayments = false;
      }
      else {
        paymentForm.studentId = this.studentId;
        paymentForm.invoiceIds = this.invoiceId;
        paymentForm.schoolAcademicSessionId = this.currentAcademicSessionId;
        this.paymentViewModel = paymentForm;
        this.invoiceService.createPayment(this.paymentViewModel).subscribe(element => {
          if (element.statusCode === HttpStatus.OK) {
            this.showPayments = false;
            this.invoiceFilter(this.invoiceSearchView);
            this.option.reset();
          }
          else {
            this.showPayments = true;
          }
          this.openSnackBar(element.messages.ResultMessage);
          this.paymentCorrectionService.setCorrectionResponse(true);
        });
      }
    });

  }
}
