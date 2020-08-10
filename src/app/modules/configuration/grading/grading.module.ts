import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradingRoutingModule } from './grading-routing.module';
import { TestTypeComponent } from './test-type/test-type.component';
import { TestTypeService } from 'app/service/grading-service/api/test-type.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { SharedManagementModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { GradingComponent } from './grading.component';
import { AcademicGradesComponent } from './academic-grades/academic-grades.component';
import { GradingTermsComponent } from './grading-terms/grading-terms.component';
import { AssessmentGradesComponent } from './assessment-grades/assessment-grades.component';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { GradingTermDetailsComponent } from './grading-term-details/grading-term-details.component';


@NgModule({
    declarations: [GradingComponent, TestTypeComponent, AcademicGradesComponent, GradingTermsComponent, AssessmentGradesComponent, GradingTermDetailsComponent],
    imports: [
        CommonModule,
        GradingRoutingModule,
        SharedManagementModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatcomponentsModule,
        FuseSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        FuseSharedModule,
        TranslateModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        GradeSetupService, TestTypeService, GardeTermConfigurationService],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class GradingModule { }
