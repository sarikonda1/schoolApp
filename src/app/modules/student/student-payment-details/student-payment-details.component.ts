import { Component, OnInit } from '@angular/core';
import { PaymentDetailsComponent } from 'app/modules/finance/payments/payment-details/payment-details.component';
import { PaymentService } from 'app/service/payments/payment.service';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';

@Component({
  selector: 'app-student-payment-details',
  templateUrl: './student-payment-details.component.html',
  styleUrls: ['./student-payment-details.component.scss'],
  providers: [PaymentService, PaymentCorrectionService]
})
export class StudentPaymentDetailsComponent extends PaymentDetailsComponent {  
  fromParent = true;
}
