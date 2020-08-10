import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyllabusComponent } from './syllabus.component';
import { SyllabusDetailsComponent } from './syllabus-details/syllabus-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'manage-syllabus', component: SyllabusComponent, data: {title: 'Manage Syllabus'} },
  { path: 'manage-syllabus/syllabus-details/:id', component: SyllabusDetailsComponent, data: {title: 'Syllabus Details'} }
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
