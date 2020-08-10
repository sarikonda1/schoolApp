import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { StudentBasicSearchComponent } from 'app/shared/student-basic-search/student-basic-search.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceSearchDetailsComponent } from './invoice-search-details/invoice-search-details.component';


const routes: Routes = [
  { path: 'generate-invoice', component: GenerateInvoiceComponent,  data: {title: 'Generate Invoice'} },
  { path: 'fee-assignment', component: StudentBasicSearchComponent,  data: {title: 'Fee Assignment'} },
  { path: 'invoice-search', component: InvoiceSearchDetailsComponent,  data: {title: 'Invoice Search'} }, 
  { path: 'invoice-search/invoice-details/:id', component: InvoiceDetailsComponent,  data: {title: 'Invoice Details'} },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class InvoiceRoutingModule { }
