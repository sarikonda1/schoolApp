import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCalendarComponent } from './calendar/student-calendar.component';
import { StudentAttendanceComponent } from './attendance/student-attendance.component';
import { StudentNewsComponent } from './news/student-news.component';
import { StudentEventsComponent } from './events/student-events.component';
import { StudentTimetableComponent } from './timetable/student-timetable.component';
import { StudentAwardsComponent } from './awards/student-awards.component';
import { StudentFeeComponent } from './fee/student-fee.component';
import { StudentHomeworksAssignmentsComponent } from './homeworks-assignments/homeworks-assignments.component';
import { StaffDirectoryComponent } from './staff-directory/staff-directory.component';
import { StudentTransportationComponent } from './transportation/transportation.component';
import { StudentInvoiceDetailsComponent } from './student-invoice-details/student-invoice-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { StudentPaymentDetailsComponent } from './student-payment-details/student-payment-details.component';
import { SyllabusProgressParentComponent } from './syllabus-progress-parent/syllabus-progress-parent.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { VirtualClassRoomsComponent } from './virtual-class-rooms/virtual-class-rooms.component';
import { TransportTrackingComponent } from './transport-tracking/transport-tracking.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: StudentCalendarComponent,
    data: { title: 'Calendar' }
  },
  {
    path: 'attendance',
    component: StudentAttendanceComponent,
    data: { title: 'Attendance' }
  },
  {
    path: 'news',
    component: StudentNewsComponent,
    data: { title: 'News' }
  },
  {
    path: 'events',
    component: StudentEventsComponent,
    data: { title: 'Events' }
  },
  {
    path: 'timetable',
    component: StudentTimetableComponent,
    data: { title: 'Timetable' }
  },
  {
    path: 'virtual-class-rooms',
    component: VirtualClassRoomsComponent,
    data: { title: 'Virtual Class Rooms' }
  },
  {
    path: 'awards-recognitions',
    component: StudentAwardsComponent,
    data: { title: 'Awards Recognitions' }
  },
  {
    path: 'fee',
    component: StudentFeeComponent,
    data: { title: 'Fee' }
  },
  {
    path: 'homework',
    component: StudentHomeworksAssignmentsComponent,
    data: { title: 'Homework' }
  },
  {
    path: 'staff-directory',
    component: StaffDirectoryComponent,
    data: { title: 'Staff Directory' }
  },
  {
    path: 'leave-request',
    component: LeaveRequestComponent,
    data: { title: 'Leave Request' }
  },
  {
    path: 'transportation',
    component: StudentTransportationComponent,
    data: { title: 'Transportation' }
  },
  {
    path: 'transportation/tracking/:routeId/:scheduleId',
    component: TransportTrackingComponent,
    data: { title: 'Transportation Tracking' }
  },
  {
    path: 'fee/student-invoice-details/:id',
    component: StudentInvoiceDetailsComponent,
    data: { title: 'Student Invoice Details' }
  },
  {
    path: 'events/event-details/:id',
    component: EventDetailsComponent,
    data: { title: 'Event Details' }
  },
  {
    path: 'fee/student-payment-details/:id',
    component: StudentPaymentDetailsComponent,
    data: { title: 'Student Payment Details' }
  },
  {
    path: 'syllabus-dashboard',
    component: SyllabusProgressParentComponent,
    data: { title: 'Syllabus DashBoard' }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
