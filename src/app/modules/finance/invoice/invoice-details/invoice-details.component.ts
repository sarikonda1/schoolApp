import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { InvoiceAdjustmentDataView } from 'app/models/invoice/invoice-adustment-data-view';
import { AppSettings, Pattern } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { RouteConfig, FeeModuleConfig } from 'app/url.config';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { InvoiceSearchCriteriaView } from 'app/models/invoice/invoice-search-criteria-view';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { PaymentViewModel } from 'app/models/invoice/payment-view-model';
import * as HttpStatus from 'http-status-codes';
import { Subscription } from 'rxjs';
import { OnlinePaymentService } from 'app/service/online-payments/online-payment.service';
import { RazorpayViewModel } from 'app/shared/payment-gateway/razorpay/config';
import { PaypalViewModel } from 'app/shared/payment-gateway/paypal/config';
import { OAuthService } from 'angular-oauth2-oidc';
import { PayemtGatewayOptionsComponent } from 'app/shared/payment-gateway/payemt-gateway-options/payemt-gateway-options.component';


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
  providers: [OnlinePaymentService]
})
export class InvoiceDetailsComponent extends CommonComponent implements OnInit {
  @ViewChild('appForm') aForm;
  invoiceInformation: Array<{ Label: string, Value: string }> = [];
  @ViewChild('form') form;
  @ViewChild('adjustmentTemplate') customTemplate: TemplateRef<any>;
  @ViewChild('isCancel') customTemplates: TemplateRef<any>;
  @ViewChildren('adjAmount') adjAmount: QueryList<any>;

  adjustmentShow: boolean;
  adjustmentList: FormGroup;
  invoiceAdjustmentTypes: any;
  studentDetails: Array<{ Label: string, Value: string }> = [];
  invoiceParticulars: Array<any> = [];
  invoicePayments: Array<any> = [];
  invoiceAdjustments: Array<any> = [];
  invoiceData: Array<any> = [];
  adjustmentCols: { field: string; header: string; sort: boolean; }[];
  paymentCols: { field: string; header: string; sort: boolean; }[];
  adjustmentSettings: any = {};
  paymentSettings: any = {};
  currentComponent: 'InvoiceDetails';
  invoiceParticularHeadders: any;
  invoiceInformationHeadders: any;
  studentDetailsHeadders: any;
  particurlarsCols: { field: string; header: string; sort: boolean; }[];
  particurlarsSettings: any = {};
  invoiceAdjustmentDataView: InvoiceAdjustmentDataView;
  validate: boolean;
  isDisabled: boolean;
  closeAddPanel: boolean;
  ids: any = [];
  isData = false;
  searchForm: FormGroup;
  invoiceCols: {}[];
  invoiceSettings: {};
  invoiceIds: any = [];
  invoiceId: any;
  isCancelled: boolean;
  isCancel: boolean;
  actions: Array<any> = [];
  studentId: any;
  isValid: any;
  cancellationForm: FormGroup;
  invoiceCriteriaViewModel: InvoiceSearchCriteriaView;
  validateForm: boolean;
  HttpStatus: any;
  showPayment: boolean;
  paymentViewModel: PaymentViewModel;
  feeAccountId: number;
  feeAccount: {};
  clearSubscription: Subscription;
  closeAddPanels = false;
  onCancelInvoice = false;
  closeInvoiceForm = true;
  academicSessionId: any;
  fromParent = false;
  responseSubscription: Subscription;
  buttonDisable = false;
  isCorrected = true;
  isSchoolhasActiveServices = false;
  currentInvoiceDetails: any;
  razorpayViewModel: RazorpayViewModel;
  paypalViewModel: PaypalViewModel;
  currency = 'INR';
  constructor(public dialogRef: MatDialog, private _fb: FormBuilder, private invoiceService: InvoiceService,
    public commonService: CommonService, private studentDBService: StudentDBService, private cd: ChangeDetectorRef,
    private router: Router, private route: ActivatedRoute, private paymentCorrectionService: PaymentCorrectionService,
    public snackBar: MatSnackBar, public onlinePaymentService: OnlinePaymentService, private oauthService: OAuthService) {
    super();
    this.clearSubscription = this.commonService.isCorrectionClear().subscribe(res => {
      if (!res.isClear) {
        this.showPayment = res.isClear;
        this.closeAddPanels = false;
        this.buttonDisable = false;
      }
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.invoiceIds.push(params.id);
        this.invoiceId = params.id;
      }
    });
    this.HttpStatus = require('http-status-codes');
    this.prepareInvoiceDetailsTable(this.invoiceData, true);
    this.prepareAdjustmentTable(this.invoiceAdjustments, true);
    this.preparePaymentTable(this.invoicePayments, true);
    this.prepareParticularsTable(this.invoiceParticulars);
    this.invoiceDetails();
    this.adjustmentForm();
    this.invoiceAdjustmentDataView = {
      invoiceId: null,
      invoiceAdjustmentListView: [{
        adjustmentAmount: 0,
        adjustmentDate: '',
        invoiceAdjustmentTypeId: 0,
        reason: null
      }]
    };
    this.cancellationForm = new FormGroup({
      cancelledReason: new FormControl('', [Validators.required, Validators.maxLength(180)]),
      id: new FormControl(''),
    });
    this.invoiceCriteriaViewModel = {
      ids: [],
      cancelledReason: ''
    };
    if (this.fromParent) {
      this.getActiveServices();
    }
  }
  getActiveServices(): void {
    this.onlinePaymentService.activeSchoolServices(null, 'Online')
      .subscribe(res => this.setActivesServices(res), error => this.errorResponse(error));
  }
  setActivesServices(res): void {
    if (res.resultModelList && res.resultModelList.length) {
      this.isSchoolhasActiveServices = true;
    }
  }
  adjustmentForm(): void {
    this.adjustmentList = this._fb.group({
      adjustmentLists: this._fb.array([this.initItemRows(true, false)]),
    });
  }

  // list all your form controls here, which belongs to your form array
  initItemRows(addVisable: boolean, removeVisable: boolean): FormGroup {
    return this._fb.group({
      invoiceAdjustmentTypeId: new FormControl(null, [Validators.required]),
      adjustmentDate: new FormControl(null, [Validators.required]),
      adjustmentAmount: new FormControl(null, [Validators.required, Validators.max(9999999.99), Validators.min(0.1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
      reason: new FormControl(null, [Validators.maxLength(135)]),
    });
  }

  // return type for educaion details form
  get addnewInvoiceadjustmentForm(): FormArray {
    return <FormArray>this.adjustmentList.get('adjustmentLists');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRow(data: any): void {
    // control refers to your formarray
    const control = <FormArray>this.adjustmentList.controls['adjustmentLists'];
    // add new formgroup
    control.push(this.initItemRows(true, true));

    this.adjIds();
    this.cd.detectChanges();
    this.adjAmount.last.nativeElement.focus();
  }

  adjIds(): void {
    this.ids = [];
    this.adjustmentList.value.adjustmentLists.forEach(element => {
      this.ids.push(element.invoiceAdjustmentTypeId);
    });
    this.invoiceAdjustmentTypes.forEach(element1 => {
      if (this.ids.indexOf(element1.id) > -1) {
        element1.disable = true;
      } else {
        element1.disable = false;
      }
    });

  }


  dropdownDisable(event: any, test): void {
    this.adjIds();
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRow(subCategoryArray: any, index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.adjustmentList.controls['adjustmentLists'];

    this.invoiceAdjustmentTypes.forEach((element) => {
      if (element.id === subCategoryArray.controls['invoiceAdjustmentTypeId'].value) {
        element.disable = false;
      }
    });

    // remove the chosen row
    control.removeAt(index);

    if (this.adjustmentList.status === AppSettings.VALID) {
      this.validate = false;
      this.isDisabled = false;
    }
    this.cd.detectChanges();
    this.adjAmount.last.nativeElement.focus();
  }

 

  openForm(): void {
    this.adjustmentTypes();
    this.closeAddPanel = false;
    this.isDisabled = false;
    this.scrollIntoViewById('form-0');
  }

  AdjustForm(): void {
    this.isDisabled = false;
    this.adjustmentTypes();
    // this.dialogRef.open(CustomDialogComponent, {
    //   data: { template: this.customTemplate }
    // });
  }

  CancelForm(): void {
    this.isDisabled = false;
    // this.dialogRef.open(CustomDialogComponent, {
    //   data: { template: this.customTemplates }
    // });
  }

  adjustmentTypes(): void {
    this.invoiceService.invoiceAdjustmentTypes().subscribe(res => {
      this.invoiceAdjustmentTypes = res.resultModelList;
      this.invoiceAdjustmentTypes.forEach((element) => {
        element.disable = false;
      });
    });
  }

  invoiceDetails(): void {
    this.invoiceService.invoiceDetails(
      this.invoiceId, this.isCorrected).subscribe(
        res => this.invoiceDataAssignment(res), error => this.errorResponse(error));
  }
  // tslint:disable-next-line:member-ordering
  adjAmount1: any;
  invoiceDataAssignment(data: any): void {
    if (data.currencyView !== undefined && data.currencyView !== null) {
      this.currency = data.currencyView.code;
    }
    Object.assign(this.currentInvoiceDetails = {}, data.invoiceInformation);
    data.invoiceInformation.invoiceAmount = this.getFormattedCurrency(data.invoiceInformation.invoiceAmount);

    data.invoiceInformation.balanceAmount = this.getFormattedCurrency(data.invoiceInformation.balanceAmount);

    data.invoiceInformation.realizedAmount = this.getFormattedCurrency(data.invoiceInformation.realizedAmount);

    // if (data.invoiceInformation.adjustmentAmount < 0) {
    //   // data.invoiceInformation.adjustmentAmount.slice(1, this.getFormattedCurrency);
    //    this.adjAmount1 = data.invoiceInformation.adjustmentAmount;
    //   data.invoiceInformation.adjustmentAmount = this.adjAmount1.slice(1, this.getFormattedCurrency);
    // } else {
    //   data.invoiceInformation.adjustmentAmount = data.invoiceInformation.adjustmentAmount === null || undefined
    //     ? this.getFormattedCurrency(0) : this.getFormattedCurrency(data.invoiceInformation.adjustmentAmount);
    // }

    data.invoiceInformation.adjustmentAmount = data.invoiceInformation.adjustmentAmount === null || undefined
    ? this.getFormattedCurrency(0) : this.getFormattedCurrency(data.invoiceInformation.adjustmentAmount);

    this.invoiceParticulars = data.invoiceParticulars;
    this.invoiceParticulars.forEach(x => {
      x.feeAmount = this.getFormattedCurrency(x.feeAmount);
      x.amountPayable = this.getFormattedCurrency(x.amountPayable);
      x.consession = x.consession > 0 ? this.getFormattedCurrency(x.consession) : x.consession;
      x.concessionGroup = x.concessionGroup !== null ? x.concessionGroup : null;
    });
    this.academicSessionId = data.invoiceInformation.schoolAcademicSessionId;
    this.studentId = data.studentId;
    this.studentDBService.studentDetails(data.studentId).subscribe(
      res => this.assignStudentDetails(res), error => this.errorResponse(error));
    this.isCancelled = data.isCancelled;
    this.invoiceInformation = (this.setDateFormat(data.invoiceInformation));
    this.invoiceInformation = this.getKeyValuesOfObject(data.invoiceInformation).filter(x => x.Label !== 'id' && x.Label !== 'schoolAcademicSessionId');
    if (data.isCancelled) {
      this.actions = [];
    }
    else {
      this.actions = ['Cancel', 'Adjustment'];
    }

    this.invoicePayments = data.invoicePayment;
    this.invoiceAdjustments = data.invoiceAdjustment;
    this.invoiceInformationHeadders = Object.keys(this.invoiceInformation);
    this.prepareParticularsTable(data.invoiceParticulars);
    this.prepareAdjustmentTable(this.setDateFormat(data.invoiceAdjustment), !data.isCancelled);
    this.preparePaymentTable(this.setDateFormat(data.invoicePayment), !data.isCancelled);
  }
  operations(action: any): void {
    this.closeInvoiceForm = false;
    switch (action) {
      case 'Cancel':
        this.onCancelInvoice = true;
        this.CancelForm();
        break;
      case 'Adjustment':
        this.onCancelInvoice = false;
        this.AdjustForm();
        this.commonService.setOverlay(AppSettings.SHOW);
        break;
    }
  }

  InvoiceCancel(cancellationForm: any): void {
    this.validateForm = true;
    if (this.cancellationForm.invalid) {
      return;
    }
    else {
      this.invoiceCriteriaViewModel.ids = this.invoiceIds;
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
      this.closeForm();
      this.cancellationForm.reset();
      // this.ngOnInit();
      this.invoiceDetails();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }

  // method for when click cancel panel it will open
  closeForm(): void {
    this.dialogRef.closeAll();
    this.aForm.resetForm();
    this.validateForm = false;
    this.closeAddPanel = true;
    this.closeInvoiceForm = true;
  }

  prepareAdjustmentTable(data: Array<any>, buttonRequired: boolean): void {

    this.adjustmentCols = [
      { field: 'adjustmentType', header: 'Adjustment Type', sort: false },
      { field: 'date', header: 'Date', sort: false },
      { field: 'reason', header: 'Reason', sort: false },
      { field: 'amount', header: 'Amount', sort: false },
    ];
    data.forEach(x => {
      x.amount = this.getFormattedCurrency(x.amount);
    });

    this.adjustmentSettings = {
      rows: data,
      columns: this.adjustmentCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: false,
      // tablename: 'Adjustments' ,
      padding: true,
      headerOperations: {
        addingForm: {
          required: this.fromParent ? false : buttonRequired,
          btnName: 'New Adjustment'
        },
        sideHeader: {
          heading: 'Adjustments'
        }
      },
    };

  }

  preparePaymentTable(data: Array<any>, buttonRequired: boolean): void {

    this.paymentCols = [
      { field: 'receptNumber', header: 'Receipt Number', sort: false },
      { field: 'expiryDate', header: 'Payment Date', sort: false },
      { field: 'paymentType', header: 'Payment Type', sort: false },
      { field: 'paymentAmount', header: 'Payment Amount', sort: false },
      { field: 'utilizedAmount', header: 'Utilized Amount', sort: false },
      { field: 'status', header: 'Status', sort: false },
      { field: 'view', header: 'Action', sort: false }
    ];

    data.forEach(e => {
      e.paymentAmount = this.getFormattedCurrency(e.paymentAmount);
      e.utilizedAmount = this.getFormattedCurrency(e.utilizedAmount);
      e.operations = [
        {
          name: this.commonService.getTranslation(AppSettings.VIEW_OPERATION),
          icon: AppSettings.VIEW_ICON,
          operationName: AppSettings.VIEW_OPERATION
        }
      ];
    });

    this.paymentSettings = {
      rows: data,
      columns: this.paymentCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: false,
      headerOperations: {
        addingForm: {
          required: this.fromParent ? false : buttonRequired,
          btnName: 'New Payment'
        },
        sideHeader: {
          heading: 'Payments'
        }
      },
    };

  }

  openPaymentForm(): void {
    this.invoiceParticulars.forEach(data => {
      if (data.feeAccountId > 0) {
        if (this.feeAccountId > 0) {
          if (this.feeAccountId === data.feeAccountId) {
            this.feeAccountId = 0;
            this.feeAccountId = data.feeAccountId;
            this.feeAccount = {
              feeAccountId: this.feeAccountId,
              correctionDate: new Date()
            };
          }
        }
        else {
          this.feeAccountId = data.feeAccountId;
          this.feeAccount = {
            feeAccountId: this.feeAccountId,
            correctionDate: new Date()
          };
        }
      }
    });
    this.buttonDisable = true;
    this.closeAddPanels = true;
    this.showPayment = true;
  }

  prepareParticularsTable(data: Array<any>): void {
    this.particurlarsCols = [
      { field: 'feeType', header: 'Fee Type', sort: false },
      { field: 'feeAmount', header: 'Fee Amount', sort: false },
      { field: 'consession', header: 'Concession', sort: false },
      { field: 'concessionGroup', header: 'Concession Group', sort: false },
      { field: 'amountPayable', header: 'Amount Payable', sort: false },
    ];
    this.particurlarsSettings = {
      rows: data,
      columns: this.particurlarsCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: false,
      padding: true,
      hideHeader: true,
      headerOperations: {
        addingForm: {
          required: false
        }
      },
    };

  }

  assignStudentDetails(data: any): void {
    this.studentDetailsHeadders = Object.keys(data.resultModel);
    this.studentDetails = this.setDateFormat(data.resultModel);
    this.studentDetails = this.getKeyValuesOfObject(data.resultModel).filter(x => x.Label !== 'id');
    const studentIndex = this.studentDetails.findIndex((e: any) => e.Label === 'name');
    this.studentDetails.unshift(this.studentDetails.splice(studentIndex, 1)[0]);
  }

  //   checkInValid(): void {
  //     this.validate = this.isDisabled = (this.adjustmentList.status === AppSettings.INVALID);
  //   }

  onSumbit(data: any): any {

    if (data.status === AppSettings.INVALID) {
      this.validate = true;
      return false;
    }
    else {
      this.invoiceAdjustmentDataView.invoiceAdjustmentListView = [];
      this.validate = false;
      this.isDisabled = false;
      data.value.adjustmentLists.forEach(element => {
        element.adjustmentDate = this.getFormattedDateByAPIPattern(element.adjustmentDate);
      });

      this.invoiceAdjustmentDataView.invoiceId =
        this.invoiceId;
      Object.assign(this.invoiceAdjustmentDataView.invoiceAdjustmentListView, data.value.adjustmentLists);
      this.invoiceService.addInvoiceAdjustment(this.invoiceAdjustmentDataView).subscribe((res: any) => this.addUpdateResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  addUpdateResponse(result: any): void {
    if (result.statusCode === this.HttpStatus.OK) {
      this.openSnackBar(result.messages.ResultMessage);
      this.cancel();
      this.invoiceDetails();
      this.invoiceAdjustmentDataView.invoiceAdjustmentListView = [];
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }


  cancel(): void {
    this.dialogRef.closeAll();
    this.resetForm();
    this.closeInvoiceForm = true;
  }

  resetForm(): void {
    this.dialogRef.closeAll();
    this.adjustmentShow = false;
    this.closeAddPanel = true;
    this.form.resetForm();
    this.adjustmentForm();
  }

  prepareInvoiceDetailsTable(data: Array<any>, buttonRequired: boolean): void {

    this.invoiceCols = [
      { field: 'feeTerm', header: 'Fee Term', sort: true },
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'classSection', header: 'Class-Section', sort: true },
      { field: 'invoiceNumber', header: 'Invoice Number', sort: true },
      { field: 'invoiceDate', header: 'Invoice Date', sort: true },
      { field: 'issueDate', header: 'Issue Date', sort: true },
      { field: 'dueDate', header: 'Due Date', sort: true },
      { field: 'invoiceAmount', header: 'Invoice Amount', sort: true },
      { field: 'dueAmount', header: 'Due Amount', sort: true },
      { field: 'panalityAmount', header: 'Panality Amount', sort: true },
      { field: 'realizedAmount', header: 'Realized Amount', sort: true },
      { field: 'balanceAmount', header: 'Balance Amount', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];

    this.invoiceSettings = {
      rows: data,
      columns: this.invoiceCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: true,
      headerOperations: {
        addingForm: {
          required: buttonRequired,
          btnName: 'New Payment'
        }
      },
    };
  }

  savePayment(paymentForm: any): void {
    this.invoiceIds = [];
    this.invoiceIds.push(this.invoiceId);
    paymentForm.studentId = this.studentId;
    paymentForm.invoiceIds = this.invoiceIds;
    paymentForm.schoolAcademicSessionId = this.academicSessionId;
    this.paymentViewModel = paymentForm;
    this.invoiceService.createPayment(this.paymentViewModel).subscribe(data => {
      if (data.statusCode === HttpStatus.OK) {
        this.invoiceDetails();
        this.showPayment = false;
        this.closeAddPanels = false;
        this.buttonDisable = false;
      }
      else {
        this.showPayment = true;
      }
      this.openSnackBar(data.messages.ResultMessage);
    });
    this.paymentCorrectionService.setCorrectionResponse(true);
  }

  rowActions(data): void {
    if (this.fromParent) {
      this.router.navigate([FeeModuleConfig._Student_Payment_Details + data.clickedRow.paymentId]);
    } else {
      this.router.navigate([FeeModuleConfig._Payment_Details_App_Routing + data.clickedRow.paymentId]);
    }
  }

  changeValue(data: any): void {
    this.isCorrected = data.checked;
    this.invoiceDetails();
  }
  resetModelValues(): void {
    this.razorpayViewModel = {
      email: '',
      invoiceNumber: '',
      currency: '',
      receipt: '',
      mobilenumber: null,
      amount: null
    };
    this.paypalViewModel = {
      intent: '',
      purchase_units: []
    };
  }
  onClickPayOnline(event): void {
    this.resetModelValues();
    const dialogRef = this.dialogRef.open(PayemtGatewayOptionsComponent, {
      disableClose: true,
      width: '650px',
      panelClass: 'payment-model',
      data: {
        id: this.invoiceId,
        razorpayViewModel: this.updatePaymentInformation(this.currentInvoiceDetails, 'razorpay'),
        paypalViewModel: this.updatePaymentInformation(this.currentInvoiceDetails, 'paypal')
      },
    });
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.ngOnInit();
      }
    });
  }
  updatePaymentInformation(invoice: any, paymentMethod: string): any {
    const claims: any = this.oauthService.getIdentityClaims();
    let returnViewModel: any;
    switch (paymentMethod) {
      case 'razorpay':
        if (claims) {
          this.razorpayViewModel.email = claims.email;
        }
        this.razorpayViewModel.amount = invoice.balanceAmount;
        this.razorpayViewModel.mobilenumber = invoice.mobileNumber;
        this.razorpayViewModel.currency = this.currency;
        this.razorpayViewModel.invoiceNumber = invoice.invoiceNumber;
        this.razorpayViewModel.receipt = invoice.invoiceNumber;
        returnViewModel = this.razorpayViewModel;
        break;
      case 'paypal':
        this.paypalViewModel.intent = 'CAPTURE';
        this.paypalViewModel.invoiceNumber = invoice.invoiceNumber;
        this.paypalViewModel.purchase_units = [{
          amount: {
            currency_code: this.currency,
            value: invoice.balanceAmount
          }
        }];
        this.paypalViewModel.payer = {
          email_address: claims.email
        };
        returnViewModel = this.paypalViewModel;
        break;
    }

    return returnViewModel;
  }
}
