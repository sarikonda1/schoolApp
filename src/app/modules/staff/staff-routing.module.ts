import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffNewsComponent} from './news/staff-news.component';
import {StaffCalendarComponent} from './calendar/staff-calendar.component';
import {StaffEventsComponent} from './events/staff-events.component';
import {StaffLeaveRequestComponent} from './leave-request/leave-reuest.component';
import {StaffScheduleComponent} from './schedule/staff-schedule.component';
import {StaffHomeworksAssignmentsComponent} from './homework/homeworks-assignments.component';
import {StaffTestScheduleComponent} from './tests/staff-test-schedule.component';
import {StaffClassAssessmentGradesComponent} from './tests/class-assessment-grades.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TestGradingComponent } from 'app/shared/test-grading/test-grading.component';
import { StaffEventDetailsComponent } from './event-details/event-details.component';
import { SyllabusProgressStaffComponent } from './syllabus-progress-staff/syllabus-progress-staff.component';
import { SyllabusDashboardComponent } from './syllabus-dashboard/syllabus-dashboard.component';
import { VirtualClassRoomComponent } from './virtual-class-room/virtual-class-room/virtual-class-room.component';

const routes: Routes = [
  {
    path: 'staff-admissions',
    loadChildren: 'app/modules/staff/staff-admissions/staff-admissions.module#StaffAdmissionsModule'
  },
  {
    path: 'staff-information-system',
    loadChildren: 'app/modules/staff/staff-information-system/staff-information-system.module#StaffInformationSystemModule'
  },
  {
    path: 'assignments',
    loadChildren: 'app/modules/staff/assignments/assignments.module#AssignmentsModule'
  },
  {
    path: 'news',
    component: StaffNewsComponent,
    data: {title: 'News'}
  },
  {
    path: 'calendar',
    component: StaffCalendarComponent,
    data: {title: 'Calendar'}
  },
  {
    path: 'events',
    component: StaffEventsComponent,
    data: {title: 'Events'}
  },
  {
    path: 'schedule',
    component: StaffScheduleComponent,
    data: {title: 'Schedule'}
  },
  {
    path: 'virtual-class-room',
    component: VirtualClassRoomComponent,
    data: {title: 'Virtual Class Room'}
  },
  {
    path: 'assignments/homeworks-assignments',
    component: StaffHomeworksAssignmentsComponent,
    data: {title: 'Homeworks Assignments'}
  },
  {
    path: 'academics/academic-grading/test-schedule',
    component: StaffTestScheduleComponent,
    data: {title: 'Test Schedule'}
  },
  {
    path: 'academics/academic-grading/test-schedule/:testScheduleId',
    component: TestGradingComponent,
    data: {title: 'Test Schedule'}
  },
  {
    path: 'leave-requests',
    component: StaffLeaveRequestComponent,
    data: {title: 'Leave Requests'}
  },
  {
    path: 'class-assessment-grades',
    component: StaffClassAssessmentGradesComponent,
    data: {title: 'Class Assessment Grades'}
  },
  {
    path: 'student-attendance',
    component: AttendanceComponent,
    data: {title: 'Student Attendance'}
  },
  {
    path: 'events/event-details/:id',
    component: StaffEventDetailsComponent,
    data: {title: 'Event Details'}
  },
  {
    path: 'syllabus-dashboard',
    component: SyllabusDashboardComponent,
    data: {title: 'Syllabus DashBoard'}
  },
  {
    path: 'syllabus-progress',
    component: SyllabusProgressStaffComponent,
    data: {title: 'Syllabus Progress'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
