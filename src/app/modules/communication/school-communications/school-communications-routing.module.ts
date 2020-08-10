import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationConfigurationComponent } from './communication-configuration/communication-configuration.component';
import { CommunicationSetupComponent } from './communication-setup/communication-setup.component';
import { CommunicationDetailsComponent } from './communication-details/communication-details.component';

const routes: Routes = [
  { path: 'communication-configuration', component: CommunicationConfigurationComponent,  data: {title: 'Communication Configuration'} },
  { path: 'communication-configuration/communication-setup/:id', component: CommunicationSetupComponent,  data: {title: 'Communication Details'} },
  { path: 'communication-configuration/communication-details', component: CommunicationDetailsComponent,  data: {title: 'Communication Details'}},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolCommunicationsRoutingModule { }

