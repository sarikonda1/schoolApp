import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import {StaffNewsComponent} from './news/staff-news.component';
import {StaffCalendarComponent} from './calendar/staff-calendar.component';
import {CalendarModule} from 'angular-calendar';
import {StaffEventsComponent} from './events/staff-events.component';
import {StaffLeaveRequestComponent} from './leave-request/leave-reuest.component';
import {StaffScheduleComponent} from './schedule/staff-schedule.component';
import {StaffHomeworksAssignmentsComponent} from './homework/homeworks-assignments.component';
import {StaffTestScheduleComponent, StaffTestScheduleListComponent} from './tests/staff-test-schedule.component';
import {StaffClassAssessmentGradesComponent} from './tests/class-assessment-grades.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StaffEventDetailsComponent } from './event-details/event-details.component';
import { EventsModule } from '../academics/events/events.module';
import { SyllabusProgressStaffComponent } from './syllabus-progress-staff/syllabus-progress-staff.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { SyllabusDashboardComponent } from './syllabus-dashboard/syllabus-dashboard.component';
import { VirtualClassRoomComponent } from './virtual-class-room/virtual-class-room/virtual-class-room.component';

@NgModule({
  declarations: [
      StaffNewsComponent,
      StaffCalendarComponent,
      StaffEventsComponent,
      StaffLeaveRequestComponent,
      StaffScheduleComponent,
      StaffHomeworksAssignmentsComponent,
      StaffTestScheduleComponent,
      StaffClassAssessmentGradesComponent,
      AttendanceComponent,
      StaffTestScheduleListComponent,
      StaffEventDetailsComponent,
      SyllabusProgressStaffComponent,
      SyllabusDashboardComponent,
      VirtualClassRoomComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    CalendarModule,
    EventsModule,
    ProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffModule { }
