import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'school-communications',
    loadChildren: 'app/modules/communication/school-communications/school-communications.module#SchoolCommunicationsModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }

