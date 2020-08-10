import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherScheduleComponent } from './teacher-schedule/teacher-schedule.component';
import { SchoolFacilityRepresentativesComponent } from './school-facility-representatives/school-facility-representatives.component';
import { ClassTeacherManagementComponent } from './class-teacher-management/class-teacher-management.component';
import { StaffLeaveRequestsComponent } from './staff-leave-request/staff-leave-requests.component';
import { StaffDatabaseComponent } from './staff-database/staff-database.component';
import { AddStaffAdmissionFormComponent } from '../../../shared/add-staff-admission-form/add-staff-admission-form.component';
import { StaffAttendenceComponent } from './staff-attendence/staff-attendence.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';


const routes: Routes = [
  { path: 'teacher-schedule', component: TeacherScheduleComponent,  data: {title: 'Teacher Schedule'}  },
  { path: 'school-facility-representatives', component: SchoolFacilityRepresentativesComponent,  data: {title: 'School Facility Representatives'}  },
  { path: 'class-teacher-management', component: ClassTeacherManagementComponent,  data: {title: 'Class Teacher Management'}  },
  { path: 'staff-database', component: StaffDatabaseComponent,  data: {title: 'Staff Database'}  },
  { path: 'staff-leave-requests', component: StaffLeaveRequestsComponent,  data: {title: 'Staff Leave Requests'}  },
  { path: 'staff-database/add-staff-admission-form', component: AddStaffAdmissionFormComponent,  data: {title: 'Admission Form'}  },
  { path: 'staff-database/add-staff-admission-form/:applicationId', component: AddStaffAdmissionFormComponent,  data: {title: 'Admission Form'}  },
  { path: 'staff-attendance', component: StaffAttendenceComponent,  data: {title: 'Staff Attendance'}  },
  { path: 'staff-database/staff-detail/:id', component: StaffDetailComponent,  data: {title: 'Staff- Details'}  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffInformationSystemRoutingModule { }
