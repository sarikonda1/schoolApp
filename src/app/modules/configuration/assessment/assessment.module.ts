import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentCategoriesComponent } from './assessment-categories/assessment-categories.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { SharedManagementModule } from 'app/shared/shared.module';
import { AssessmentComponent } from './assessment.component';
import { AssessmentGroupsComponent } from './assessment-groups/assessment-groups.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { TranslateModule } from '@ngx-translate/core';
import { AssessmentParametersComponent } from './assessment-parameters/assessment-parameters.component';
import { AssessmentGroupsService } from 'app/service/assessment-service/api/assessment-groups.service';
import { ClassAssessmentConfigurationComponent } from './class-assessment-configuration/class-assessment-configuration.component';
import { AssessmentParameterService } from 'app/service/assessment-service/api/assessment-parameters.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';


@NgModule({
  declarations: [AssessmentComponent, AssessmentCategoriesComponent, AssessmentGroupsComponent, AssessmentParametersComponent, ClassAssessmentConfigurationComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    AssessmentRoutingModule,
    TranslateModule
  ],
  providers: [
    AssessmentGroupsService, AssessmentParameterService, GradeSetupService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AssessmentModule { }
