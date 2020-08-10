import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassSchedulesComponent } from './class-schedules.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { RouterModule } from '@angular/router';
import { ClassSchedulesRoutingModule} from './class-schedules-routing.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { HolidayConfigurationService } from 'app/service/class-schedules/holiday-configuration.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { SchoolScheduleTemplatesComponent } from './school-schedule-templates/school-schedule-templates.component';
import { SchoolScheduleTemplateDetailsComponent } from './school-schedule-template-details/school-schedule-template-details.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { ClassTimetablesComponent } from './class-timetables/class-timetables.component';



@NgModule({
  declarations: [ClassSchedulesComponent,
     HolidaysComponent, SchoolScheduleTemplatesComponent, 
     SchoolScheduleTemplateDetailsComponent, 
     ClassTimetableComponent, ClassTimetablesComponent],
  imports: [
    ClassSchedulesRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    FuseSharedModule,
    MatcomponentsModule,
    TranslateModule
  ],
  providers: [
    HolidayConfigurationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],

})
export class ClassSchedulesModule { }
