import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { AfPaymentsComponent } from './af-payments/af-payments.component';
import { AddEditPaymentCorrectionComponent } from './add-edit-payment-correction/add-edit-payment-correction.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';
import { AcademicSessionService } from 'app/service/academic-service/api/academic-session.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { PaymentService } from 'app/service/payments/payment.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { LeaveRequestService } from 'app/service/academic-service/api/leave-request.service';


@NgModule({
  declarations: [PaymentDetailsComponent, PaymentsComponent, AfPaymentsComponent, AddEditPaymentCorrectionComponent, AddPaymentsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    PaymentService,
    FeeTermsService,
    AcademicSessionService,
    StatusService,
    ClassesConfigService,
    StudentDatabaseService,
    PaymentCorrectionService, LeaveRequestService
  ],
  exports: [AfPaymentsComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})

export class PaymentsModule { }
