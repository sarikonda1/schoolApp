import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolFacilitiesComponent } from './school-facilities/school-facilities.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { CoursesComponent } from './courses/courses.component';
import { SectionComponent } from './section/section.component';
import { StudentGroupRepresentativeRoleComponent } from './student-group-representative-role/student-group-representative-role.component';
import { StudentApplicationCategoriesComponent } from './student-application-categories/student-application-categories.component';
import { SchoolRepRoleComponent } from './school-rep-role/schoolreprole/schoolreprole.component';

import { ClassesComponent } from './classes/classes.component';
import { ClassperiodtypesComponent } from './classperiodtypes/class-period-types.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { VirtualClassesConfigurationComponent } from './virtual-classes-configuration/virtual-classes-configuration.component';

const routes: Routes = [
  { path: 'school-facilities', component: SchoolFacilitiesComponent, data: {title: 'School Facilities'} },
  { path: 'courses', component: CoursesComponent, data: {title: 'Courses'} },
  { path: 'student-group-representative-role', component: StudentGroupRepresentativeRoleComponent, data: {title: 'Student Group Representative Role'} },
  { path: 'student-application-categories', component: StudentApplicationCategoriesComponent, data: {title: 'Student Application Categories'} },
  { path: 'school-facilities-rep-role', component: SchoolRepRoleComponent, data: {title: 'School Facilities Rep Role'} },
  { path: 'courses', component: CoursesComponent, data: {title: 'Courses'} },
  { path: 'classes', component: ClassesComponent, data: {title: 'Classes'} },
  { path: 'section', component: SectionComponent, data: {title: 'Sections'} },
  { path: 'course-categories', component: CourseCategoriesComponent, data: {title: 'Course Categories'} },
  { path: 'classperiodtypes', component: ClassperiodtypesComponent, data: {title: 'Class Period Types'} },
  { path: 'event-types', component: EventTypesComponent, data: {title: 'Event Types'} },
  { path: 'virtual-classes-configuration', component: VirtualClassesConfigurationComponent, data: {title: 'Virtual Classes'} }
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
export class GeneralRoutingModule { }
