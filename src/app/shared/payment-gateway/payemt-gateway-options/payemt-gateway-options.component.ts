import { Component, OnInit, Inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OnlinePaymentService } from 'app/service/online-payments/online-payment.service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-payemt-gateway-options',
  templateUrl: './payemt-gateway-options.component.html',
  styleUrls: ['./payemt-gateway-options.component.scss'],
  providers: [OnlinePaymentService]
})
export class PayemtGatewayOptionsComponent extends CommonComponent implements OnInit {
  availablePayments: any[] = [];
  constructor(public dialogRef: MatDialogRef<PayemtGatewayOptionsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public onlinePaymentService: OnlinePaymentService,
              public cd: ChangeDetectorRef, private ngZone: NgZone) {
    super(); 
   }

  ngOnInit(): void {
    if (this.data){
      this.onlinePaymentService.activeSchoolServices(this.data.id, 'Online')
      .subscribe(res => this.setPaymentResults(res), error => this.errorResponse(error));
    } 
  }

  displayPaymentMethod(code: any, method: string): boolean {
    return (code.toLowerCase() === method.toLowerCase());
  }
  setPaymentResults(res): void{
    const currency = (res.currencyCode !== undefined && res.currencyCode !== null) ? res.currencyCode : 'INR';
    if (res.resultModelList && res.resultModelList.length){
      res.resultModelList.map(e => {
        switch (e.code.toLowerCase()) {
          case 'paypal':
            e.paypalViewModel = this.data.paypalViewModel;
            e.paypalViewModel.purchase_units = [{
              reference_id: e.invoiceNumber,
              invoice_number: e.invoiceNumber,
              amount: {
                currency_code: currency,
                value: e.breakUpChargesView.find(el => el.key === 'total_amount').amount,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: e.breakUpChargesView.find(el => el.key === 'invoice_amount').amount
                  },
                  handling: {
                    currency_code: currency,
                    value: e.breakUpChargesView.find(el => el.key === 'handling_charges').amount
                  },
                  tax_total: {
                    currency_code: currency,
                    value: e.breakUpChargesView.find(el => el.key === 'final_tax_amount').amount
                  }
                }
              }
            }];
            break;
          case 'razorpay':
            e.razorpayViewModel = this.data.razorpayViewModel;
            e.razorpayViewModel.currency = currency;
            e.razorpayViewModel.amount = e.breakUpChargesView.find(el => el.key === 'total_amount').amount;
            e.razorpayViewModel.notes  = {
              handling_charges : e.breakUpChargesView.find(el => el.key === 'handling_charges').amount.toString(),
              final_tax_amount : e.breakUpChargesView.find(el => el.key === 'final_tax_amount').amount.toString(),
            };
            break;
        }

      });
      this.availablePayments = res.resultModelList;  
    }
  } 
  updateInvoices(directClose = true): void{
    this.ngZone.run(() => {
        if (directClose){
          this.dialogRef.close(directClose);  
        }
    });
  } 
}
