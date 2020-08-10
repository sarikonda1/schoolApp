import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { ApplicationCategoryService } from 'app/service/academic-service/api/application-category.service';
import { AssessmentCategoriesService } from 'app/service/assessment-service/api/assessment-categories.service';
import { TranslateModule } from '@ngx-translate/core';
import { CoursesConfigurationService } from 'app/service/general/api/courses_configuration.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import {ConfigurationModule} from '../../modules/configuration/configuration.module';
import {WizardComponent} from './wizard.component';

import { Routes } from '@angular/router';
import {MatcomponentsModule} from '../../main/matcomponents.module';
import {GeneralModule} from '../../modules/configuration/general/general.module';
import {WizardService} from './wizard.service';
import {SchoolAdminModule} from '../../modules/school-admin/school-admin.module';
import {SchoolInfrastructureComponent} from '../../modules/school-admin/school-infrastructure/school-infrastructure.component';
import { FuseSharedModule } from '@fuse/shared.module';
import {AcademicModule} from '../../modules/configuration/academic/academic.module';
import {StaffInformationSystemModule} from '../../modules/staff/staff-information-system/staff-information-system.module';
import {AssessmentModule} from '../../modules/configuration/assessment/assessment.module';
import {GradingModule} from '../../modules/configuration/grading/grading.module';
import {FinanceModule} from '../../modules/configuration/finance/finance.module';
import {ClassSchedulesModule} from '../../modules/configuration/class-schedules/class-schedules.module';
import {CommunicationTypesComponent} from '../../modules/configuration/communication/communication-types/communication-types.component';
import {CommunicationModule} from '../../modules/configuration/communication/communication.module';
import { AcademicSessionComponent } from 'app/modules/configuration/academic/academic-session/academic-session.component';
import { AcademicSessionDetailsComponent } from 'app/modules/configuration/academic/academic-session-details/academic-session-details.component';



const routes: Routes = [
    {
        path: 'required-school-configuration',
        component: WizardComponent,
        data: {title: 'School Configuration'} 
    },
    {
        path: 'optional-school-configuration',
        component: WizardComponent,
        data: {title: 'Optional School Configuration'} 
    },
    {
        path: 'grading-configuration',
        component: WizardComponent,
        data: {title: 'Grading Configuration'} 
    },
    {
        path: 'finance-configuration',
        component: WizardComponent,
        data: {title: 'Finance Configuration'} 
    },
    {
        path: 'class-schedule-configuration',
        component: WizardComponent,
        data: {title: 'Class Schedule Configuration'} 
    },
    {
        path: 'school-communication-configuration',
        component: WizardComponent,
        data: {title: 'School Communication Configuration'} 
    },
    { path: 'required-school-configuration/academic-sessions/:id',
      component: AcademicSessionComponent,
      data: {title: 'Edit Academic Sessions'} 
    },
    { path: 'required-school-configuration/academic-sessions-details/:id', 
      component: AcademicSessionDetailsComponent,
      data: {title: 'Academic Sessions Details'} 
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class WizardRoutingModule {

}
@NgModule({
    declarations: [
        WizardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedManagementModule,
        TranslateModule,
        ConfigurationModule,
        WizardRoutingModule,
        MatcomponentsModule,
        GeneralModule,
        SchoolAdminModule,
        StaffInformationSystemModule,
        AssessmentModule,
        AcademicModule,
        GradingModule,
        FinanceModule,
        ClassSchedulesModule,
        FuseSharedModule,
        CommunicationModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        ApplicationCategoryService,
        CoursesConfigurationService,
        AssessmentCategoriesService,
        StatusService,
        WizardService
    ],
    entryComponents : [
        WizardComponent,
        SchoolInfrastructureComponent,
        CommunicationTypesComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class WizardModule {
    constructor() {
    }
}

