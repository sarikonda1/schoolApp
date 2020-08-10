import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentApplicationsComponent } from './student-applications/student-applications.component';
import { StudentApplicationDetailsComponent } from './student-application-details/student-application-details.component';
import { ApproveStudentComponent } from './approve-student/approve-student.component';
import { StudentConcessionsComponent } from './student-concessions/student-concessions.component';

const routes: Routes = [
  { path: 'student-applications', component: StudentApplicationsComponent, data: {title: 'Student Applications'}  },
  { path: 'student-application-details', component: StudentApplicationDetailsComponent, data: {title: 'Student Application Details'}  },
  { path: 'student-applications/student-application-details/:id', component: StudentApplicationDetailsComponent, data: {title: 'Student Application Details'}  },
  { path: 'student-applications/student-application-details/approve-student/:id', component: ApproveStudentComponent, data: {title: 'Approve Student'}  },
  { path: 'student-concessions', component: StudentConcessionsComponent, data: {title: 'Student Concessions'} },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdmissionsRoutingModule { }
