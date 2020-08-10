import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication.component';
import { CommunicationTypesComponent } from './communication-types/communication-types.component';

const routes: Routes = [
  {
    path: '', component: CommunicationComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'communication-types' },
      { path: 'communication-types', component: CommunicationTypesComponent,  data: {title: 'Communication Types'} }
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
export class CommunicationRoutingModule { }
