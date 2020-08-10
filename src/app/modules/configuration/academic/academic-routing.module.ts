import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic.component';
import { Routes, RouterModule } from '@angular/router';
import { AcademicSessionsComponent } from './academic-sessions/academic-sessions.component';
import { AcademicSessionDetailsComponent } from './academic-session-details/academic-session-details.component';
import { AcademicSessionComponent } from './academic-session/academic-session.component';

const routes: Routes = [
  {
    path: '', component: AcademicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'academic-sessions', data: {title: 'Academic Sessions'} },
      { path: 'academic-sessions', component: AcademicSessionComponent, data: {title: 'Academic Sessions'} },
      { path: 'academic-sessions/:id', component: AcademicSessionComponent, data: {title: 'Edit Academic Sessions'} },
      { path: 'academic-sessions/academic-sessions-details/:id', component: AcademicSessionDetailsComponent, data: {title: 'Academic Sessions Details'} },
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
export class AcademicRoutingModule { }
