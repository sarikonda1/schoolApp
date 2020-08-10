import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'assessment',
    loadChildren: 'app/modules/configuration/assessment/assessment.module#AssessmentModule'
  },
  {
    path: 'general',
    loadChildren: 'app/modules/configuration/general/general.module#GeneralModule'
  },
  {
    path: 'academic',
    loadChildren: 'app/modules/configuration/academic/academic.module#AcademicModule'
  },
  {
    path: 'grading',
    loadChildren: 'app/modules/configuration/grading/grading.module#GradingModule'
  },
  {
    path: 'finance',
    loadChildren: 'app/modules/configuration/finance/finance.module#FinanceModule'
  },
  {
    path: 'class-schedules',
    loadChildren: 'app/modules/configuration/class-schedules/class-schedules.module#ClassSchedulesModule'
  },
  {
    path: 'communication',
    loadChildren: 'app/modules/configuration/communication/communication.module#CommunicationModule'
  },
  {
    path: 'syllabus',
    loadChildren: 'app/modules/configuration/syllabus/syllabus.module#SyllabusModule'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ConfigurationRoutingModule {
  constructor() {
  }
}
