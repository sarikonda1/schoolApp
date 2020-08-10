import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestScheduleComponent } from './test-schedule/test-schedule.component';
import { ClassAssessmentGradesComponent } from './class-assessment-grades/class-assessment-grades.component';
import { TestGradingComponent } from '../../../shared/test-grading/test-grading.component';
import { ReportCardsComponent } from './report-cards/report-cards.component';
import { ReportCardDetailsComponent } from './report-card-details/report-card-details.component';
import { SearchStudentInformationComponent } from './search-student-information/search-student-information.component';

const routes: Routes = [
  { path: 'test-schedule', component: TestScheduleComponent, data: {title: 'Test Schedule'} },
  { path: 'class-assessment-grades', component: ClassAssessmentGradesComponent, data: {title: 'Class Assessment Grades'} },
  { path: 'test-grading', component: TestGradingComponent, data: {title: 'Test Grading'} },
  { path: 'test-schedule/:testScheduleId', component: TestGradingComponent, data: {title: 'Edit Test Schedule'} },
  { path: 'report-cards/search', component: ReportCardsComponent, data: {title: 'Report Cards Search'} },
  { path: 'report-cards/search/report-card-details/:studentId/:termId', component: ReportCardDetailsComponent, data: {title: 'Report Card Details'} },
  { path: 'report-cards/additional-student-information', component: SearchStudentInformationComponent, data: {title: 'Additional Student Information'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicGradingRoutingModule { }
