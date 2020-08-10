import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentCategoriesComponent } from './assessment-categories/assessment-categories.component';
import { AssessmentComponent } from './assessment.component';
import { AssessmentGroupsComponent } from './assessment-groups/assessment-groups.component';
import { AssessmentParametersComponent } from './assessment-parameters/assessment-parameters.component';
import { ClassAssessmentConfigurationComponent } from './class-assessment-configuration/class-assessment-configuration.component';

const routes: Routes = [
  {
    path: '', component: AssessmentComponent,
    children: [
    { path: '', pathMatch: 'full', redirectTo: 'assessment-categories' },
    { path: 'assessment-categories', component: AssessmentCategoriesComponent, data: {title: 'Assessment Categories'} },  
    { path: 'assessment-groups', component: AssessmentGroupsComponent, data: {title: 'Assessment Groups'} },
    { path: 'assessment-parameters', component: AssessmentParametersComponent, data: {title: 'Assessment Parameters'} }, 
    { path: 'class-assessment-parameters', component: ClassAssessmentConfigurationComponent, data: {title: 'Class Assessment Parameters'} },    
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AssessmentRoutingModule { }
