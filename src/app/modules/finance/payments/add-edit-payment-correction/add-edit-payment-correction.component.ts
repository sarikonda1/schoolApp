import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { PaymentCorrectionView } from '../models/payment-correction-view';
import { PaymentCorrectionEditView } from '../models/payment-correction-edit-view';
import { CommonComponent } from 'app/shared/common/common.component';
import { Subscription } from 'rxjs';
import { CommonService } from 'app/service/common.service';
import { MatSnackBar } from '@angular/material';
import { PaymentService } from 'app/service/payments/payment.service';
import { AppSettings } from 'app/app.constants';

@Component({
  selector: 'app-add-edit-payment-correction',
  templateUrl: './add-edit-payment-correction.component.html',
  styleUrls: ['./add-edit-payment-correction.component.scss']
})
export class AddEditPaymentCorrectionComponent extends CommonComponent implements OnInit {
  inputData: any;
  addView: PaymentCorrectionView;
  editView: PaymentCorrectionEditView;
  subscription: Subscription;
  buttonName = 'Submit';
  @Input() paymentId;
  @Input() paymentCorrectionId;
  @Input() isAddCorrection;
  @Output() submitResponse;

  constructor(private paymentCorrectionService: PaymentCorrectionService,
    public commonService: CommonService, private paymentService: PaymentService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.paymentCorrectionId ? this.getPaymentCorrection() : this.getPayment();
  }

  onSubmit(form: any): void {
    if (form) {
      this.isAddCorrection ? (this.addView = form,
        this.addView.correctionDate = (typeof form.paymentDate) === 'string' ? form.paymentDate : form.paymentDate
          .format(AppSettings.API_DATE_PATTERN), this.addView.correctionPaymentId = this.paymentId, this.paymentCorrectionService.craetePaymentCorrection(this.addView)
            .subscribe(res => {
              this.response(res);
            },
              error => {
                this.errorResponse(error);
              })) : (this.editView = form,
                this.editView.id = this.paymentCorrectionId,
                this.editView.correctionDate = (typeof form.paymentDate) === 'string' ? form.paymentDate : form.paymentDate
                .format(AppSettings.API_DATE_PATTERN),
                this.paymentCorrectionService.editPaymentCorrection(this.editView)
                  .subscribe(res => {
                    this.response(res);
                  }
                    , error => {
                      this.errorResponse(error);
                    }));
    }
  }

  response(response: any): void {
    this.buttonName = 'Submit';
    this.paymentCorrectionService.setCorrectionResponse(true);
    this.openSnackBar(response.messages.ResultMessage);
  }

  getPaymentCorrection(): void {
    this.paymentCorrectionService.paymentCorrectionDetails(this.paymentCorrectionId).subscribe(res => {
      this.inputData = res;
    }, error => {
      this.errorResponse(error);
    });
    this.buttonName = 'Upadte';
  }

  getPayment(): void {
    this.paymentService.getPaymentDetail(this.paymentId).subscribe(res => {
      this.inputData = res;
    }, error => {
      this.errorResponse(error);
    });
  }

}
