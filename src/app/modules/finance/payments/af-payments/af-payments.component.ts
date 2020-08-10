import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'app/service/common.service';
import { fuseAnimations } from '@fuse/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-af-payments',
  templateUrl: './af-payments.component.html',
  styleUrls: ['./af-payments.component.scss'],
  animations: fuseAnimations
})
export class AfPaymentsComponent extends CommonComponent implements OnInit, OnChanges {
  paymentForm: FormGroup;
  paymentTypesList: any;
  feeAccountList: any;
  cardTypesList: any;
  cardView = false;
  chequeView = false;
  validate = true;
  cardControls = {
    cardNumber: null,
    cardTypeId: null,
    transactionNumber: null,
    authorizationCode: null,
  };
  checkControls = {
    chequeNumber: null,
    chequeDate: null,
    chequeIssueBankName: null,
    checkIssueBankIFSC: null,
    chequeIssueBankBranch: null
  };
  responseSubscription: Subscription;
  @Input() inputData: any;
  @Input() paymentMessage: any;
  @Input() isAddForm = true;
  @Output() outPutValue: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('paymentsForm') paymentsForm;
  @Input() buttonName = 'Submit';
  @Input() isRefNumberRequired = false;
  @ViewChild('correction') correction: ElementRef;
  isCorrection = true;
  subscription: Subscription;
  showOverLay = '';
  clearSubscription: Subscription;

  constructor(
    private invoiceService: InvoiceService,
    private feeTypeService: FeeTypeService,
    private paymentCorrection: PaymentCorrectionService,
    public commonService: CommonService, public snackBar: MatSnackBar
  ) {
    super();
    this.responseSubscription = this.paymentCorrection.getCorrectionResponse().subscribe(res => {
      if (res.response && this.paymentForm && this.paymentsForm) {
        this.paymentForm.reset();
        this.paymentsForm.resetForm();
      }
    });

    this.subscription = this.commonService.getOverlay().subscribe(res => {
      if (res.overLay) {
        this.showOverLay = res.overLay;
      }
    });
  }

  ngOnInit(): void {
    this.paymentTypes();
    this.feeAccounts();
    this.cardTypes();
    this.initializeForm();
    this.setForm();
    this.correction.nativeElement.focus();
  }

  ngOnChanges(): void {
    this.initializeForm();
    this.setForm();
    this.correction.nativeElement.focus();
  }
  initializeForm(): void {
    this.paymentForm = new FormGroup({
      typeCode: new FormControl(null, [Validators.required]),
      paymentDate: new FormControl(new Date(), [Validators.required]),
      feeAccountId: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(1),
      Validators.max(99999999.99)]),
      referenceNumber: new FormControl(null, Validators.maxLength(45))
    });
  }
  setForm(): void {
    if (this.inputData) {
      this.inputData.typeCode === AppSettings.PAYMENT_TYPE_CARD ? (this.cardView = true,
        this.addCardControls()) : this.inputData.typeCode === AppSettings.PAYMENT_TYPE_CHECK ? (this.chequeView = true, this.addChequeControls()) :
          this.chequeView = false;
      this.paymentForm.patchValue(this.inputData);
      this.paymentForm.controls['paymentDate'].setValue(this.inputData.correctionDate);
    }
  }
  paymentTypes(): void {
    this.paymentTypesList = [];
    this.invoiceService.paymentTypes().subscribe(
      data => {
        if (data.commonViewModel) {
          if (AppSettings.PARENT === this.getTokenParam('_ut')){
            this.paymentTypesList = data.commonViewModel.filter(e => e.code !== AppSettings.PAYMENT_TYPE_ONLINE);
          }else{
            this.paymentTypesList = data.commonViewModel;
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  feeAccounts(): void {
    this.feeAccountList = [];
    this.feeTypeService.getFeeAccounts().subscribe(
      data => {
        if (data) {
          this.feeAccountList = data.commonViewModel;
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  cardTypes(): void {
    this.cardTypesList = [];
    this.invoiceService.cardTypes().subscribe(
      data => {
        if (data.commonViewModel) {
          this.cardTypesList = data.commonViewModel;
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }
  paymentTypeSelection(data): void {
    this.removeValidators();
    switch (data) {
      case AppSettings.PAYMENT_TYPE_CHECK:
        this.chequeView = true;
        this.cardView = false;
        this.addChequeControls();
        break;
      case AppSettings.PAYMENT_TYPE_CARD:
        this.cardView = true;
        this.chequeView = false;
        this.addCardControls();
        break;
      default:
        this.chequeView = false;
        this.cardView = false;
        break;
    }
    if (data === AppSettings.PAYMENT_TYPE_CASH){
        this.paymentForm.controls.referenceNumber.patchValue(null);
    }
  }

  submit(): void {
    if (this.paymentForm.valid) {
      this.outPutValue.emit(this.paymentForm.value);
      this.removeValidators();
      this.chequeView = false;
      this.cardView = false;
    }
  }

  removeValidators(): void {
    Object.keys(this.cardControls).forEach(key => {
      if (this.paymentForm.get(key)){
        this.paymentForm.get(key).reset();
        this.paymentForm.get(key).clearValidators();
        this.paymentForm.get(key).updateValueAndValidity();
      } 
    });
    Object.keys(this.checkControls).forEach(key => { 
      if (this.paymentForm.get(key)){
        this.paymentForm.get(key).reset();
        this.paymentForm.get(key).clearValidators();
        this.paymentForm.get(key).updateValueAndValidity();
      } 
    });
  }

  close(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.paymentForm.reset();
    this.commonService.setClearCorrection(false);
  }
  clear(): void {
    this.paymentForm.reset();
    this.cardView = false;
    this.chequeView = false;
  }

  addCardControls(): void {
    this.paymentForm.addControl('cardNumber', new FormControl(null, [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.minLength(4), Validators.maxLength(4)]));
    this.paymentForm.addControl('cardTypeId', new FormControl(null));
    this.paymentForm.addControl('transactionNumber', new FormControl(null, Validators.maxLength(45)));
    this.paymentForm.addControl('authorizationCode', new FormControl(null, Validators.maxLength(45)));
  }

  addChequeControls(): void {
    this.paymentForm.addControl('chequeNumber', new FormControl(null, [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.maxLength(15)]));
    this.paymentForm.addControl('chequeDate', new FormControl(null, [Validators.required]));
    this.paymentForm.addControl('chequeIssueBankName', new FormControl(null, Validators.maxLength(45)));
    this.paymentForm.addControl('checkIssueBankIFSC', new FormControl(null, Validators.maxLength(15)));
    this.paymentForm.addControl('chequeIssueBankBranch', new FormControl(null, Validators.maxLength(45)));
  }
  showReferenceNumber(typeCode): any{ 
    if (typeCode && typeCode !== AppSettings.PAYMENT_TYPE_CASH){
      return true;
    }else{
        return false;
    }
  }
}
