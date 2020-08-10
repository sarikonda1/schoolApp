import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'student-admissions',
    loadChildren: 'app/modules/academics/student-admissions/student-admissions.module#StudentAdmissionsModule'
  },
  {
    path: 'student-information-system',
    loadChildren: 'app/modules/academics/student-information-system/student-information-system.module#StudentInformationSystemModule'
  },
  {
    path: 'events',
    loadChildren: 'app/modules/academics/events/events.module#EventsModule'
  },
  {
    path: 'attendance',
    loadChildren: 'app/modules/academics/attendance/attendance.module#AttendanceModule'
  },
  {
    path: 'academic-grading',
    loadChildren: 'app/modules/academics/grading/academic-grading.module#AcademicGradingModule'
  },
  {
    path: 'syllabus',
    loadChildren: 'app/modules/academics/syllabus/syllabus.module#SyllabusModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
