import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworksAssignmentsComponent } from './homeworks-assignments/homeworks-assignments.component';
import { TestGradingComponent } from 'app/shared/test-grading/test-grading.component';

const routes: Routes = [
  {path: 'homeworks-assignments' , component: HomeworksAssignmentsComponent,  data: {title: 'Homeworks Assignments'}
},
  { path: 'homeworks-assignments/test-schedule', component: TestGradingComponent,  data: {title: 'Test Schedule'}
},
  { path: 'homeworks-assignments/test-schedule/:testScheduleId', component: TestGradingComponent,  data: {title: 'Test Schedule'}
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
