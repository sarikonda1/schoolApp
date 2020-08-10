import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ApplicationCategoryService } from 'app/service/academic-service/api/application-category.service';
import { AssessmentCategoriesService } from 'app/service/assessment-service/api/assessment-categories.service';
import { TranslateModule } from '@ngx-translate/core';
import { CoursesConfigurationService } from 'app/service/general/api/courses_configuration.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    ConfigurationRoutingModule,
    TranslateModule
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
    StatusService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConfigurationModule { }
