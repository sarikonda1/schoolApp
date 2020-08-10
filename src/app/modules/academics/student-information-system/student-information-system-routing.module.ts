import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropoutsComponent } from './dropouts/dropouts.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { StudentDatabaseComponent } from './student-database/student-database.component';
import { StudentInformationDetailsComponent } from './student-information-details/student-information-details.component';
import { StudentSiblingComponent } from './student-sibling/student-sibling.component';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { StudentGroupDetailsComponent } from './student-group-details/student-group-details.component';
import { StudentFacilityAssignmentComponent } from './student-facility-assignment/student-facility-assignment.component';
import { StudentCourseSelectionsComponent } from './student-course-selections/student-course-selections.component';
import { SectionAssignmentComponent } from './section-assignment/section-assignment.component';
import { StudentRollnumberManagementComponent } from './student-rollnumber-management/student-rollnumber-management.component';
import { AddEditStudentAdmissionComponent } from '../../../shared/add-edit-student-admission/add-edit-student-admission.component';
import { PreviewStudentRequestComponent } from './preview-student-request/preview-student-request.component';


const routes: Routes = [
  { path: 'student-database', component: StudentDatabaseComponent, data: {title: 'Student Database'}  },
  { path: 'student-requests', component: StudentRequestsComponent, data: {title: 'Student Requests'}  },
  { path: 'dropouts' , component: DropoutsComponent, data: {title: 'Student Dropouts'} },
  { path: 'student-database/student-details/:id' , component: StudentInformationDetailsComponent, data: {title: 'Student Details'} },
  { path: 'student-siblings', component: StudentSiblingComponent, data: {title: 'Student Siblings'}  },
  { path: 'student-groups', component: StudentGroupsComponent, data: {title: 'Student Groups'}  },
  { path: 'student-groups/student-group-details', component: StudentGroupDetailsComponent, data: {title: 'Student Group Details'}  },
  { path: 'student-groups/student-group-details/:id', component: StudentGroupDetailsComponent, data: {title: 'Student Group Details'}  },
  { path: 'student-facility-assignment', component: StudentFacilityAssignmentComponent, data: {title: 'Student facility Assignment'}  },
  { path: 'student-course-selections', component: StudentCourseSelectionsComponent, data: {title: 'Student Course Selections'}  },
  { path: 'section-assignment', component: SectionAssignmentComponent, data: {title: 'Section Assignment'} },
  { path: 'student-rollnumber-management', component: StudentRollnumberManagementComponent, data: {title: 'Roll Number Management'}  },
  { path: 'student-database/add-edit-student-admission', component: AddEditStudentAdmissionComponent, data: {title: 'Add Student Admission'}  },
  { path: 'student-database/add-edit-student-admission/:studentId', component: AddEditStudentAdmissionComponent, data: {title: 'Edit Student Admission'}  },
  { path: 'preview-certificate/:id', component: PreviewStudentRequestComponent, data: {title: 'Approve Student Request'}  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInformationSystemRoutingModule { }
