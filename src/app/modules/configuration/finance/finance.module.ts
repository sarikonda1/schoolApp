import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { InvoiceAdjustmentTypeComponent } from './invoice-adjustment-type/invoice-adjustment-type.component';
import { FinanceRoutingModule } from './finance-routing.module';
import { SharedManagementModule } from 'app/shared/shared.module';
import { FinanceComponent } from './finance.component';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FeeTypeComponent } from './fee-type/fee-type.component';
import { LateFeeRulesComponent } from './late-fee-rules/late-fee-rules.component';
import { LateFeeRulesService } from 'app/service/configuration/finance/api/late-fee-rules.service';
import { FeeAccountsComponent } from './fee-accounts/fee-accounts.component';
import { FeeTypeTranchesComponent } from './fee-type-tranches/fee-type-tranches.component';
import { FeeTermsComponent } from './fee-terms/fee-terms.component';
import { FeeAccountService } from 'app/service/configuration/finance/api/api';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';
import { ManageFeesComponent } from './manage-fees/manage-fees.component';
import { FuseWidgetModule } from '@fuse/components';
import { ManageFeeConfigurationService } from 'app/service/configuration/finance/api/manage-fee-configuration.service';
import { FeeConcessionGroupComponent } from './fee-concession-group/fee-concession-group.component';
import { FeeConcessionGroupService } from 'app/service/configuration/finance/api/fee-concession-group.service';
import { ManageFeeTranchesComponent } from './manage-fee-tranches/manage-fee-tranches.component';
import { ManageFeeTypeTranchesService } from 'app/service/configuration/finance/api/manage-fee-type-tranches.service';


@NgModule({
  declarations: [FinanceComponent, 
    InvoiceAdjustmentTypeComponent,
    FeeAccountsComponent, 
    FeeTypeComponent, 
    FeeTypeTranchesComponent, 
    FeeTermsComponent, 
    LateFeeRulesComponent,
    FeeConcessionGroupComponent, 
    ManageFeesComponent, 
    ManageFeeTranchesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    FinanceRoutingModule,
    MatcomponentsModule,
    FuseSharedModule,
    TranslateModule,
    FuseWidgetModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FeeAccountService, LateFeeRulesService, TypeService, FeeTermsService, ManageFeeConfigurationService, FeeConcessionGroupService, ManageFeeTypeTranchesService
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FinanceModule { }
