import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRouteComponent } from './new-route/new-route.component';
import { VehicleRouteDatabaseComponent } from './vehicle-route-database/vehicle-route-database.component';
import { ViewRouteComponent } from './view-route/view-route.component';
import { AddTransportSchedulesComponent } from './add-transport-schedules/add-transport-schedules.component';
import { TransportSchedulesComponent } from './transport-schedules/transport-schedules.component';
import { ManageStudentTransportComponent } from './manage-student-transport/manage-student-transport.component';
import { ViewTransportSchedulesComponent } from './view-transport-schedules/view-transport-schedules.component';
import { StudentBasicSearchComponent } from 'app/shared/student-basic-search/student-basic-search.component';


const routes: Routes = [
  { path: 'vehicle-route-database/new-route', component: NewRouteComponent, data: {title: 'New Route'} },
  { path: 'vehicle-route-database/edit-route/:id', component: NewRouteComponent, data: {title: 'Edit Route'} },
  { path: 'vehicle-route-database', component: VehicleRouteDatabaseComponent, data: {title: 'Vehicle Route Database'} },
  { path: 'vehicle-route-database/view-route/:id/:routeName', component: ViewRouteComponent, data: {title: 'View Route'} },
  { path: 'transport-schedules/new-transport-schedule', component: AddTransportSchedulesComponent, data: {title: 'New Transport Schedule'} },
  { path: 'transport-schedules/edit-transport-schedule/:id', component: AddTransportSchedulesComponent, data: {title: 'Edit Transport Schedule'} },
  { path: 'transport-schedules', component: TransportSchedulesComponent, data: {title: 'Transport Schedules'} }, 
  { path: 'student-transport/manage-student-transport/:id', component: ManageStudentTransportComponent, data: {title: 'Manage Student Transport'} },
  { path: 'transport-schedules/view-transport-schedule/:id', component: ViewTransportSchedulesComponent, data: {title: 'View Transport Schedule'} },
  { path: 'student-transport', component: StudentBasicSearchComponent, data: {title: 'Student Transport'} },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
