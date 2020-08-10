import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'routing',
    loadChildren: 'app/modules/transportation/routing/routes.module#RoutesModule'
  },
  {
    path: 'inventory',
    loadChildren: 'app/modules/transportation/inventory/inventory.module#InventoryModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class TransportationRoutingModule { }
