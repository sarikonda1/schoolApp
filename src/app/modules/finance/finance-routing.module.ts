import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: 'app/modules/finance/invoice/invoice.module#InvoiceModule'
  },
  {
    path: 'payments',
    loadChildren: 'app/modules/finance/payments/payments.module#PaymentsModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
