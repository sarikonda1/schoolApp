import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleInventoryComponent } from './vehicle-inventory/vehicle-inventory.component';
import { VehicleInventoryDetailsComponent } from './vehicle-inventory-details/vehicle-inventory-details.component';
import { VehicleInsuranceComponent } from './vehicle-insurance/vehicle-insurance.component';
import { VehicleInspectionHistoryComponent } from './vehicle-inspection-history/vehicle-inspection-history.component';


const routes: Routes = [
  { path: 'vehicle-inventory', component: VehicleInventoryComponent, data: {title: 'Vehicle Inventory'} },
  { path: 'vehicle-inventory/vehicle-inventory-details/:id', component: VehicleInventoryDetailsComponent, data: {title: 'Vehicle Inventory Details'} },
  { path: 'vehicle-insurance', component: VehicleInsuranceComponent, data: {title: 'Vehicle Insurance'} },
  { path: 'vehicle-inspection', component: VehicleInspectionHistoryComponent, data: {title: 'Vehicle Inspection'} }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
