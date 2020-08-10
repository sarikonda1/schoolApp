import { Component, OnInit } from '@angular/core';  
import { InvoiceDetailsComponent } from 'app/modules/finance/invoice/invoice-details/invoice-details.component';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { OnlinePaymentService } from 'app/service/online-payments/online-payment.service';

@Component({
  selector: 'app-student-invoice-details',
  templateUrl: './student-invoice-details.component.html',
  styleUrls: ['./student-invoice-details.component.scss'],
  providers: [InvoiceService, StudentDBService, PaymentCorrectionService, OnlinePaymentService]
})
export class StudentInvoiceDetailsComponent extends InvoiceDetailsComponent { 
  fromParent = true;
}
