import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StudentLeaveRequestsComponent } from './student-leave-requests/student-leave-requests.component';

const routes: Routes = [
  { path: 'student-attendance', component: StudentAttendanceComponent,  data: {title: 'Student Attendance'} },
  { path: 'student-leave-requests', component: StudentLeaveRequestsComponent,  data: {title: 'Student Leave Requests'} },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
