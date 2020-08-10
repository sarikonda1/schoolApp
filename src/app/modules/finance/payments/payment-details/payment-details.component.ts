import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'app/service/payments/payment.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { PaymentDataResultView, InvoiceView, PaymentStatusViewModel } from '../models/payment-details-view';
import { Subscription } from 'rxjs';
import { CommonService } from 'app/service/common.service';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { PaymentCorrectionStatusModel } from '../models/payment-correction-status-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CancelPaymentCorrectionModel } from '../models/cancel-payment-correction-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ValidationMessageView } from 'app/modules/manage-role-right/model/module-grid-view';
import { FeeModuleConfig } from 'app/url.config';
import { AppSettings } from 'app/app.constants';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent extends CommonComponent implements OnInit {
  @ViewChild('correction') correctionssss: ElementRef;

  paymentDetails: Array<{ Label: string, Value: string }> = [];
  paymentCorrectionDetails: Array<{ Label: string, Value: string }> = [];
  paymentDetailsResponse: PaymentDataResultView;
  myInterfaceProperties: string[];
  studentBasicDataView: Array<{ Label: string, Value: string }> = [];
  actions: Array<any> = [];
  paymentCorrectionActions: Array<any> = [];
  rows: any[];
  settingTableData: {};
  columns: any;
  currentComponent: 'PaymentDetailsComponent';
  isCorrection = false;
  paymentId: string;
  paymentCorrectionId: string;
  clearSubscription: Subscription;
  isAddCorrection: boolean;
  responseSubscription: Subscription;
  isPaymentConfirmed: boolean;
  paymentUpdateForm: FormGroup;
  isFormValidated: boolean;
  chequeDate: string;
  dialogBox: any;
  paymentStatusModel: PaymentStatusViewModel;
  controls = {
    referenceNumber: null,
    realizedDate: null
  };
  returnFileName: any;
  attachmentName: any;
  subscription: Subscription;
  paymentCorrectionStatusModel: PaymentCorrectionStatusModel;
  cancelPaymentCorrectionModel: CancelPaymentCorrectionModel;
  coustomDialog: any;
  reason: any;
  isCancelled: boolean;
  isPaymentLink: boolean;
  processedPaymentId: any;
  resultMessage: any;
  @ViewChild('paymentTemplate') updatePaymentTemplate: TemplateRef<any>;
  @ViewChild('approveRejectTemplate') customTemplate: TemplateRef<any>;
  fromParent = false;
  constructor(private route: ActivatedRoute, private paymentService: PaymentService,
    public commonService: CommonService, public paymentCorrectionService: PaymentCorrectionService,
    private _fb: FormBuilder, public dialog: MatDialog, private router: Router, public snackBar: MatSnackBar,
    private sanitizer: DomSanitizer, private storeService: StoreService) {
    super();
    this.responseSubscription = this.paymentCorrectionService.getCorrectionResponse().subscribe(res => {
      if (res.response) {
        this.isCorrection = false;
        this.commonService.setOverlay(AppSettings.HIDE);
        if (this.paymentId) {
          this.getPaymentDetails(this.paymentId);
        }
      }
    });
    this.clearSubscription = this.commonService.isCorrectionClear().subscribe(res => {
      if (!res.isClear) {
        this.isCorrection = res.isClear;
      }
    });
  }

  ngOnInit(): void {
    this.paymentUpdateForm = this._fb.group({
      isConfirm: new FormControl(null),
      additionalInformation: new FormControl(null, [Validators.maxLength(135)]),
      referenceNumber: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      realizedDate: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.maxLength(135)]),
      id: new FormControl(null)
    });

    this.columns = [
      { field: 'feeTerm', header: 'Fee Term', sort: false },
      { field: 'class', header: 'Class', sort: false },
      { field: 'section', header: 'Section', sort: false },
      { field: 'invoiceNumber', header: 'Invoice Number', sort: false },
      { field: 'invoiceDate', header: 'Invoice Date', sort: false },
      { field: 'issueDate', header: 'Issue Date', sort: false },
      { field: 'dueDate', header: 'Due Date', sort: false },
      { field: 'invoiceAmount', header: 'Invoice Amount', sort: false },
      { field: 'adjustments', header: 'Adjustments', sort: false },
      { field: 'paymentAmount', header: 'Payment Amount', sort: false },
      { field: 'dueAmount', header: 'Due Amount', sort: false },
      { field: 'status', header: 'Status', sort: false },
      { field: 'view', header: 'Actions ', sort: false }
    ];

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.getPaymentDetails(params.id);
      }
    });
    this.paymentCorrectionStatusModel = {
      id: '',
      reason: '',
      isApprove: false
    };
    this.cancelPaymentCorrectionModel = {
      id: '',
      reason: '',
    };
  }

  getPaymentDetails(paymenyId: string): void {
    this.paymentId = paymenyId;
    this.paymentService.paymentDetailsById(paymenyId).subscribe((response: PaymentDataResultView) => {

      this.bindResponseData(response);
    }, error => {
      this.errorResponse(error);
    });
  }

  bindResponseData(response: PaymentDataResultView): void {
    this.paymentDetailsResponse = response;
    response.studentDetails.dateOfBirth = this.getFormattedDateBySchoolDateFormat(response.studentDetails.dateOfBirth);
    this.studentBasicDataView = this.getKeyValuesOfObject(response.studentDetails);
    this.returnFileName = response.paymentDetails.attachmentName != null ? 'Receipt_' + response.paymentDetails.receiptNumber 
      + '_' + response.studentDetails.name + '_' + new Date().toLocaleDateString() + '.pdf' : null;
    this.attachmentName =  response.paymentDetails.attachmentName != null ? response.paymentDetails.attachmentName : null;  
    response.paymentDetails.paymentDate = this.getFormattedDateBySchoolDateFormat(response.paymentDetails.paymentDate);
    response.paymentDetails.lastUpdatedDate = response.paymentDetails.lastUpdatedDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.lastUpdatedDate) : null;
    response.paymentDetails.realizedDate = response.paymentDetails.realizedDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.realizedDate) : null;

    response.paymentDetails.chequeDate = response.paymentDetails.chequeDate ? this.getFormattedDateBySchoolDateFormat(response.paymentDetails.chequeDate) : null;

    this.chequeDate = response.paymentDetails.chequeDate;

    response.paymentDetails.amountTowardsInvoices = this.getFormattedCurrency(response.paymentDetails.amountTowardsInvoices);

    response.paymentDetails.paymentAmount = this.getFormattedCurrency(response.paymentDetails.paymentAmount);

    response.paymentDetails.excessAmount = this.getFormattedCurrency(response.paymentDetails.excessAmount);

    this.paymentDetails = this.getKeyValuesOfObject(response.paymentDetails).filter(x => x.Label !== 'id' && x.Label !== 'attachmentName');



    this.paymentCorrectionDetails = [];
    if (response.correctionPaymentDetails) {
      response.correctionPaymentDetails.paymentDate = response.correctionPaymentDetails.paymentDate
        ? this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.paymentDate)
        : null;
      response.correctionPaymentDetails.lastUpdatedDate = response.correctionPaymentDetails.lastUpdatedDate ?
        this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.lastUpdatedDate) : null;
      response.correctionPaymentDetails.chequeDate =
        response.correctionPaymentDetails.chequeDate ? this.getFormattedDateBySchoolDateFormat(response.correctionPaymentDetails.chequeDate) : null;
      response.correctionPaymentDetails.paymentAmount = this.getFormattedCurrency(response.correctionPaymentDetails.paymentAmount);
      response.correctionPaymentDetails.amountTowardsInvoices = this.getFormattedCurrency(response.correctionPaymentDetails.amountTowardsInvoices);
      response.correctionPaymentDetails.excessAmount = this.getFormattedCurrency(response.correctionPaymentDetails.excessAmount);

      this.paymentCorrectionDetails = this.getKeyValuesOfObject(response.correctionPaymentDetails)
        .filter(x => x.Label !== 'id');

      this.paymentCorrectionDetails.forEach(x => x.Label = (x.Label === 'paymentStatus' ? 'Correction Status' : x.Label));
    }


    this.bindInvoiceTableData(response.invoices);
    this.actions = response.paymentActions;
    this.paymentCorrectionActions = response.paymentCorrectionActions;
    this.paymentCorrectionId = response.correctionPaymentDetails ? response.correctionPaymentDetails.id : null;
  }

  /**
  * manipulate response data and sets to app-table
  * @param  
  */
  bindInvoiceTableData(invoices: Array<InvoiceView>): void {
    if (!invoices) {
      this.rows = [];
    } else {
      this.rows = invoices;
      this.rows.forEach((element: any) => {
        element.paymentAmount = this.getFormattedCurrency(element.paymentAmount);

        element.adjustments = (element.adjustments === 0 || element.adjustments === null) ? element.adjustments : this.getFormattedCurrency(element.adjustments);

        element.invoiceAmount = element.invoiceAmount === 0 ? element.invoiceAmount : this.getFormattedCurrency(element.invoiceAmount);

        element.dueAmount = element.dueAmount === 0 ? element.dueAmount : this.getFormattedCurrency(element.dueAmount);

        element.dueDate = this.getFormattedDateBySchoolDateFormat(element.dueDate);
        element.invoiceDate = this.getFormattedDateBySchoolDateFormat(element.invoiceDate);
        element.issueDate = this.getFormattedDateBySchoolDateFormat(element.issueDate);
      });
    }
    /**
    * sets data to app-table component
    */
    this.settingTableData = {
      rows: this.rows,
      columns: this.columns,
      tablename: 'Invoices Associated With The Payment',
      componentName: this.currentComponent,
      hideHeader: true,
    };
  }
  openPopup(): void {
    this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      width: '500px',
      data: { template: this.customTemplate },
    });
  }
  operations(action: any): void {
    this.paymentUpdateForm.reset();
    this.reason = '';
    this.paymentCorrectionStatusModel.id = this.paymentCorrectionId;
    this.isPaymentLink = false;
    switch (action) {
      case 'Correction':
        this.isAddCorrection = true;
        this.isCorrection = true;
        this.commonService.setOverlay(AppSettings.SHOW);
        break;
      case 'Edit Correction':
        this.isCorrection = true;
        this.isAddCorrection = false;
        this.commonService.setOverlay(AppSettings.SHOW);
        break;
      case 'Approve Correction':
        this.openPopup();
        this.paymentCorrectionStatusModel.isApprove = true;
        this.isCancelled = false;
        break;
      case 'Reject Correction':
        this.openPopup();
        this.paymentCorrectionStatusModel.isApprove = false;
        this.isCancelled = false;
        break;
      case 'Cancel Correction':
        this.openPopup();
        this.paymentCorrectionStatusModel.isApprove = false;
        this.isCancelled = true;
        this.isAddCorrection = false;
        break;
      case 'Fail Payment':
        this.isPaymentConfirmed = false;
        this.buildFormGroup();
        break;
      case 'Confirm Payment':
        this.isPaymentConfirmed = true;
        this.buildFormGroup();
        break;
      case 'Download Receipt':
        this.downloadReceipt(this.attachmentName);
        break;
    }
  }

  async downloadReceipt(data): Promise<void> {
    if (data !== null) {
      this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data));
      const a = document.createElement('a');
      const response = await fetch(this.storeService.getFilePath(data));
      const responseData = await response.blob();
      const file = new Blob([responseData], { type: 'application/octet-stream' });
      a.href = URL.createObjectURL(file);
      a.download = this.returnFileName.replace(' ', '_');
      a.click();
    }
  }

  onRowActions(action: any): void {
    // TODO:: method to perform an action based on click
    if (this.fromParent) {
      this.router.navigate([FeeModuleConfig._Student_Invoice_Details + action.clickedRow.invoiceId]);
    } else {
      this.router.navigate([FeeModuleConfig._Invoice_Details + action.clickedRow.invoiceId]);
    }
  }
  approveRejectPaymentCorrection(): any {
    if (this.paymentUpdateForm.controls.reason.valid) {
      if (this.isCancelled) {
        this.cancelPaymentCorrectionModel.id = this.paymentCorrectionId;
        this.cancelPaymentCorrectionModel.reason = this.reason;
        this.paymentCorrectionService.cancelPaymentCorrection(this.cancelPaymentCorrectionModel).subscribe(res => {
          this.closePaymentConfirmationForm();
          this.openSnackBar(res.messages.ResultMessage);
        }, error => {
          this.errorResponse(error);
        });
        this.getPaymentDetails(this.paymentId);
      }
      else {
        this.paymentCorrectionStatusModel.reason = this.reason;
        this.paymentCorrectionService.approveOrRejectCorrection(this.paymentCorrectionStatusModel).subscribe(res => {
          this.closePaymentConfirmationForm();
          if (res.messages.ProcessedPaymentId) {
            this.processedPaymentId = res.messages.ProcessedPaymentId;
            this.isPaymentLink = true;
            this.openPopup();
          }
          else {
            this.openSnackBar(res.messages.ResultMessage);
            this.getPaymentDetails(this.paymentId);
          }
        }, error => {
          this.errorResponse(error);
        });
      }
    }
    else {
      this.isFormValidated = true;
    }
    this.scrollIntoViewById('payment-details');
  }
  newPage(): void {
    this.getPaymentDetails(this.processedPaymentId);
    this.closePaymentConfirmationForm();
  }

  buildFormGroup(): void {
    if (!this.isPaymentConfirmed) {
      Object.keys(this.controls).forEach(control => {
        this.paymentUpdateForm.get(control).clearValidators();
        this.paymentUpdateForm.get(control).updateValueAndValidity();
      });
    }
    else {
      Object.keys(this.controls).forEach(control => {
        this.paymentUpdateForm.get(control).setValidators(Validators.required);
        this.paymentUpdateForm.get(control).updateValueAndValidity();
        if (control === 'referenceNumber') {
          this.paymentUpdateForm.get(control).setValidators([Validators.required, Validators.maxLength(45)]);
        }
      });
    }
    this.dialogBox = this.dialog.open(
      this.updatePaymentTemplate, {
      disableClose: true,
      width: '500px',
    }
    );
  }

  /**
   * update payment which is of type Check/DD
   */
  updatePayment(form: any): void {
    this.isFormValidated = true;
    if (this.paymentUpdateForm.valid) {
      this.paymentStatusModel = form.value;
      this.paymentStatusModel.id = this.paymentId;
      this.paymentStatusModel.isConfirm = this.isPaymentConfirmed;
      this.paymentService.updatePaymentStatus(this.paymentStatusModel).subscribe((response: ValidationMessageView) => {
        this.closePaymentConfirmationForm();
        this.getPaymentDetails(this.paymentId);
        this.openSnackBar(response.messages.ResultMessage);
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  closePaymentConfirmationForm(): void {
    this.dialog.closeAll();
  }
  closeDialog(): void {
    this.closePaymentConfirmationForm();
    this.getPaymentDetails(this.paymentId);
    this.scrollIntoViewById('payment-details');
  }

}
