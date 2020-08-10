import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FinanceRoutingModule } from './finance-routing.module';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { InvoiceService } from 'app/service/invoice/invoice.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,  
    FinanceRoutingModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, GradeSetupService, ClassSectionService, FeeTypeService, InvoiceService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class FinanceModule { }
