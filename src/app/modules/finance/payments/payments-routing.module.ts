import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddEditPaymentCorrectionComponent } from './add-edit-payment-correction/add-edit-payment-correction.component';

const routes: Routes = [
  { path: 'payment-details', component: PaymentDetailsComponent,  data: {title: 'payment Details'}  },
  { path: 'payments/add-payments', component: AddPaymentsComponent,  data: {title: 'Add Payments'}  },
  { path: 'payments/payment-details/:id', component: PaymentDetailsComponent,  data: {title: 'Payment Details'}  },
  { path: 'add-edit-payment-correction', component: AddEditPaymentCorrectionComponent,  data: {title: 'Payment Correction'}  },
  { path: 'payments', component: PaymentsComponent,  data: {title: 'Payments'}  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PaymentsRoutingModule { }
