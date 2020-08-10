import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { ManageFeeTypeTranchesService } from 'app/service/configuration/finance/api/manage-fee-type-tranches.service';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceSearchDetailsComponent } from './invoice-search-details/invoice-search-details.component';
import { PaymentsModule } from '../payments/payments.module';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';



@NgModule({
  declarations: [
  GenerateInvoiceComponent,
  InvoiceDetailsComponent,
  InvoiceSearchDetailsComponent,
  ],


  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    PaymentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, StudentDBService, ManageFeeTypeTranchesService, ClassesConfigService, FeeTermsService , PaymentCorrectionService
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class InvoiceModule { }
