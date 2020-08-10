import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import {StudentRoutingModule} from './student-routing.module';
import {StudentCalendarComponent} from './calendar/student-calendar.component';
import {StudentAttendanceComponent} from './attendance/student-attendance.component';
import {CalendarModule} from 'angular-calendar';
import {StudentNewsComponent} from './news/student-news.component';
import {StudentEventsComponent} from './events/student-events.component';
import {StudentTimetableComponent} from './timetable/student-timetable.component';
import {StudentAwardsComponent} from './awards/student-awards.component';
import {StudentFeeComponent} from './fee/student-fee.component';
import {StudentHomeworksAssignmentsComponent} from './homeworks-assignments/homeworks-assignments.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {StaffDirectoryComponent} from './staff-directory/staff-directory.component';
import {StudentTransportationComponent} from './transportation/transportation.component';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import { TransportationModule } from '../transportation/transportation.module';
import { RoutesModule } from '../transportation/routing/routes.module';
import { StudentInvoiceDetailsComponent } from './student-invoice-details/student-invoice-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { StudentPaymentDetailsComponent } from './student-payment-details/student-payment-details.component';
import { PayemtGatewayOptionsComponent } from 'app/shared/payment-gateway/payemt-gateway-options/payemt-gateway-options.component';
import { SyllabusProgressParentComponent } from './syllabus-progress-parent/syllabus-progress-parent.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { VirtualClassRoomsComponent } from './virtual-class-rooms/virtual-class-rooms.component';
import { TransportTrackingComponent } from './transport-tracking/transport-tracking.component';

@NgModule({
  entryComponents: [PayemtGatewayOptionsComponent],
  declarations: [
      StudentCalendarComponent,
      StudentAttendanceComponent,
      StudentNewsComponent,
      StudentEventsComponent,
      StudentTimetableComponent,
      StudentAwardsComponent,
      StudentFeeComponent,
      StudentHomeworksAssignmentsComponent,
      StaffDirectoryComponent,
      StudentTransportationComponent, 
      StudentInvoiceDetailsComponent,
      EventDetailsComponent,
      StudentPaymentDetailsComponent,
      SyllabusProgressParentComponent,
      LeaveRequestComponent,
      VirtualClassRoomsComponent,
      TransportTrackingComponent
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        RouterModule,
        FormsModule,
        SharedManagementModule,
        TranslateModule,
        FuseSharedModule,
        MatcomponentsModule,
        ReactiveFormsModule,
        Ng2TelInputModule,
        CalendarModule,
        InfiniteScrollModule, 
        RoutesModule, 
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
export class StudentModule { }
