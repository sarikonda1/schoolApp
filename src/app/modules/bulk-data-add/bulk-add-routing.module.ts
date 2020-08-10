import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkAddComponent } from './bulk-add/bulk-add.component';
import { BulkProcessComponent } from './bulk-process/bulk-process.component';

const routes: Routes = [
  {
    path: 'upload-data',
    component: BulkAddComponent,
    data: {title: 'Bulk Upload'} 
  },
  {
    path: 'upload-data/processed-data/:id',
    component: BulkProcessComponent,
    data: {title: 'Bulk Process Data'} 
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class BulkAddRoutingModule { }

