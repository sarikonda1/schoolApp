import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SatDatepickerModule } from 'saturn-datepicker';
import { TestScheduleComponent } from './test-schedule/test-schedule.component';
import { AcademicsModule } from '../academics.module';
import { AcademicGradingRoutingModule } from './academic-grading-routing.module';
import { TestScheduleService } from 'app/service/grading-service/api/test-schedule-service';
import {ClassAssessmentGradesComponent} from './class-assessment-grades/class-assessment-grades.component';
import { TestGradingComponent } from '../../../shared/test-grading/test-grading.component';
import {GardeTermConfigurationService} from '../../../service/grading-service/api/garde-term-configuration.service';
import {AssessmentParameterService} from '../../../service/assessment-service/api/assessment-parameters.service';
import {StudentAssessmentGradeService} from '../../../service/grading-service/api/student-assessment-grade.service';
import { ReportCardsComponent } from './report-cards/report-cards.component';
import { ReportCardDetailsComponent } from './report-card-details/report-card-details.component';
import {SchedulesComponent} from './test-schedule/schedules.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { StudentInformationDetailsComponent } from '../student-information-system/student-information-details/student-information-details.component';
import { SearchStudentInformationComponent } from './search-student-information/search-student-information.component';

@NgModule({
  declarations: [
      TestScheduleComponent,
    ClassAssessmentGradesComponent,
    ReportCardsComponent,
    ReportCardDetailsComponent,
      SchedulesComponent,
      SearchStudentInformationComponent
  ],
  imports: [
    CommonModule,
    AcademicGradingRoutingModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    SatDatepickerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TestScheduleService,
    GardeTermConfigurationService,
    AssessmentParameterService,
      StudentAssessmentGradeService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class AcademicGradingModule { }
