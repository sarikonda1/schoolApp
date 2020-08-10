import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicSessionsComponent } from './academic-sessions/academic-sessions.component';
import { AcademicRoutingModule } from './academic-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AcademicComponent } from './academic.component';
import { AcademicSessionDetailsComponent } from './academic-session-details/academic-session-details.component';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { SchoolService } from 'app/service/manage-school/school.service';
import { AcademicSessionComponent } from './academic-session/academic-session.component';

@NgModule({
  declarations: [AcademicComponent, AcademicSessionsComponent, AcademicSessionDetailsComponent, AcademicSessionComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    AcademicRoutingModule,
    TranslateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, 
    SchoolAcademicSessionService,
    GradeSetupService, SchoolService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AcademicModule { }
