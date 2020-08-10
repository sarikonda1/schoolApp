import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdmissionsRoutingModule } from './student-admissions-routing.module';
import { StudentApplicationsComponent } from './student-applications/student-applications.component';
import { StudentApplicationDetailsComponent } from './student-application-details/student-application-details.component';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ApproveStudentComponent } from './approve-student/approve-student.component';
import { AcademicsModule } from '../academics.module';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { StudentConcessionsComponent } from './student-concessions/student-concessions.component';

@NgModule({
  declarations: [StudentApplicationsComponent, StudentApplicationDetailsComponent, 
    ApproveStudentComponent, StudentConcessionsComponent],
  imports: [
    CommonModule,
    StudentAdmissionsRoutingModule,
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    AcademicsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    StudentApplicationService,
    GradeSetupService,
    SchoolAcademicSessionService
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [StudentConcessionsComponent ]
})
export class StudentAdmissionsModule { }
