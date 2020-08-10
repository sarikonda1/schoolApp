import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTypeComponent } from './test-type/test-type.component';
import { AcademicGradesComponent } from './academic-grades/academic-grades.component';
import { GradingComponent } from './grading.component';
import { GradingTermsComponent } from './grading-terms/grading-terms.component';
import { AssessmentGradesComponent } from './assessment-grades/assessment-grades.component';
import { GradingTermDetailsComponent } from './grading-term-details/grading-term-details.component';


const routes: Routes = [
  {
    path: '', component: GradingComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test-type',  data: {title: 'Courses'} },
      { path: 'test-type', component: TestTypeComponent,  data: {title: 'Test Type'} },
      { path: 'academic-grades', component: AcademicGradesComponent,  data: {title: 'Academic Grades'} },
      { path: 'grading-terms', component: GradingTermsComponent,  data: {title: 'Grading Terms'} },
      { path: 'assessment-grades', component: AssessmentGradesComponent,  data: {title: 'Assessment Grades'} },
      { path: '', pathMatch: 'full', redirectTo: 'test-type',  data: {title: 'Courses'} },
      { path: 'grading-terms/grading-term-details/:Id', component: GradingTermDetailsComponent,  data: {title: 'Grading Term Details'} },
      { path: 'grading-term-details', component: GradingTermDetailsComponent,  data: {title: 'Grading Term Details'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradingRoutingModule { }
