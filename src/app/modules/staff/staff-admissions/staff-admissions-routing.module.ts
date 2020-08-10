import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { JobApplicationDetailsComponent } from './job-application-details/job-application-details.component';
import { ApproveJobApplicationComponent } from './approve-job-application/approve-job-application.component';

const routes: Routes = [
  { path: 'job-applications', component: JobApplicationsComponent, data: {title: 'Job Applications'} },
  { path: 'job-applications/job-applications-details/:id', component: JobApplicationDetailsComponent, data: {title: 'Job Application Details'} },
  { path: 'job-applications/approve-job-application/:id', component: ApproveJobApplicationComponent, data: {title: 'Job Application Details'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffAdmissionsRoutingModule { }
