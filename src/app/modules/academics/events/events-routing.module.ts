import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolEventsComponent } from './school-events/school-events.component';
import { AddEditSchoolEventComponent } from './add-edit-school-event/add-edit-school-event.component';

const routes: Routes = [
  { path: 'school-events', component: SchoolEventsComponent, data: {title: 'School Events'} },
  { path: 'school-events/add-edit-school-event', component: AddEditSchoolEventComponent, data: {title: 'Add School Event'} },
  { path: 'school-events/add-edit-school-event/:id', component: AddEditSchoolEventComponent, data: {title: 'Edit School Event'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
