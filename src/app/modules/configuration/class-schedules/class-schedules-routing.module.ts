import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClassSchedulesModule } from './class-schedules.module';
import { HolidaysComponent } from './holidays/holidays.component';
import {ClassSchedulesComponent} from './class-schedules.component';
import { SchoolScheduleTemplatesComponent } from './school-schedule-templates/school-schedule-templates.component';
import { SchoolScheduleTemplateDetailsComponent } from './school-schedule-template-details/school-schedule-template-details.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { ClassTimetablesComponent } from './class-timetables/class-timetables.component';


const routes: Routes = [
  {
    path: '', component: ClassSchedulesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'holidays' },
      { path: 'holidays', component: HolidaysComponent,  data: {title: 'Holidays'} }, 
      { path: 'school-schedule-templates', component: SchoolScheduleTemplatesComponent,  data: {title: 'School Schedule Templates'} },
      { path: 'school-schedule-templates-details/:id', component: SchoolScheduleTemplateDetailsComponent,  data: {title: 'School Schedule Templates Details'} }, 
      // { path: 'class-timetables', component: ClassTimetableComponent,  data: {title: 'Class Timetables'} },
      { path: 'class-timetables', component: ClassTimetablesComponent,  data: {title: 'Class Timetables'} },
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
export class ClassSchedulesRoutingModule { }
