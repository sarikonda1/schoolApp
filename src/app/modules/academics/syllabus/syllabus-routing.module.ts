import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyllabusScheduleComponent } from './syllabus-schedule/syllabus-schedule.component';
import { SyllabusProgressComponent } from './syllabus-progress/syllabus-progress.component';
import { SyllabusEntryDetailsComponent } from './syllabus-entry-details/syllabus-entry-details.component';
import { SyllabusViewComponent } from './syllabus-view/syllabus-view.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'schedule', component: SyllabusScheduleComponent, data: {title: 'Syllabus-Schedule'} },
  { path: 'progress', component: SyllabusProgressComponent, data: {title: 'Syllabus Progress'} },
  { path: 'progress/syllabus-entry-details/:id', component: SyllabusEntryDetailsComponent, data: {title: 'Syllabus Entry Details'} },
  { path: 'dashboard', component: SyllabusViewComponent, data: {title: 'Syllabus Dash Board'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
