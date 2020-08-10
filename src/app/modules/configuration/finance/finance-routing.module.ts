import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { InvoiceAdjustmentTypeComponent } from './invoice-adjustment-type/invoice-adjustment-type.component';
import { FeeTypeComponent } from './fee-type/fee-type.component';
import { LateFeeRulesComponent } from './late-fee-rules/late-fee-rules.component';
import { FeeAccountsComponent } from './fee-accounts/fee-accounts.component';
import { FeeTermsComponent } from './fee-terms/fee-terms.component';
import { FeeTypeTranchesComponent } from './fee-type-tranches/fee-type-tranches.component';
import { ManageFeesComponent } from './manage-fees/manage-fees.component';
import { FeeConcessionGroupComponent } from './fee-concession-group/fee-concession-group.component';
import { ManageFeeTranchesComponent } from './manage-fee-tranches/manage-fee-tranches.component';


const routes: Routes = [
  {
    path: '', component: FinanceComponent,
    children: [
    { path: '', pathMatch: 'full', redirectTo: 'invoice-adjustment-types' },
    { path: 'invoice-adjustment-types', component: InvoiceAdjustmentTypeComponent, data: {title: 'Invoice Adjustment Types'} },
    { path: 'late-fee-rules', component: LateFeeRulesComponent, data: {title: 'Late Fee Rules'} },        
    { path: 'invoice-adjustment-types', component: InvoiceAdjustmentTypeComponent , data: {title: 'Invoice Adjustment Types'}}, 
    { path: 'fee-accounts', component: FeeAccountsComponent, data: {title: 'Fee Accounts'} },  
    { path: 'fee-type-tranches', component: FeeTypeTranchesComponent, data: {title: 'Fee Type Tranches'} },   
    { path: 'invoice-adjustment-types', component: InvoiceAdjustmentTypeComponent , data: {title: 'Invoice Adjustment Types'}},     
    { path: 'fee-terms', component: FeeTermsComponent, data: {title: 'Fee Terms'} },   
    { path: 'fee-types', component: FeeTypeComponent, data: {title: 'Fee Types'} },
    { path: 'manage-fees', component: ManageFeesComponent, data: {title: 'Manage Fees'} },     
    { path: 'fee-concession-group', component: FeeConcessionGroupComponent, data: {title: 'Fee Concession Group'} },
    { path: 'manage-fee-tranches', component: ManageFeeTranchesComponent, data: {title: 'Manage-Fee-Tranches'} },     
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class FinanceRoutingModule { }
