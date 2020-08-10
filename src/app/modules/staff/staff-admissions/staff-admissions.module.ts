import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffAdmissionsRoutingModule } from './staff-admissions-routing.module';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FuseSharedModule } from '@fuse/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { JobApplicationDetailsComponent } from './job-application-details/job-application-details.component';
import { JobApplicationDetailsViewComponent } from '../../../shared/job-application-details-view/job-application-details-view.component';
import { ApproveJobApplicationComponent } from './approve-job-application/approve-job-application.component';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { AddJobApplicationsComponent } from './add-job-applications/add-job-applications.component';
@NgModule({
  declarations: [AddJobApplicationsComponent, JobApplicationsComponent, JobApplicationDetailsComponent,
    ApproveJobApplicationComponent],
  imports: [
    CommonModule,
    StaffAdmissionsRoutingModule,
    CommonModule,
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
    }, StaffMemberService
  ],
  exports: [JobApplicationDetailsViewComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffAdmissionsModule { }
