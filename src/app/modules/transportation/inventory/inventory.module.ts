import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { InventoryRoutingModule } from './inventory-routing.module';
import { VehicleInventoryComponent } from './vehicle-inventory/vehicle-inventory.component';
import { VehicleInventoryDetailsComponent } from './vehicle-inventory-details/vehicle-inventory-details.component';
import { VehicleInventoryService } from 'app/service/Transport/vehicle-inventory.service';
import { VehiclePollutionCheckHistoryComponent } from './vehicle-pollution-check-history/vehicle-pollution-check-history.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleInsuranceComponent } from './vehicle-insurance/vehicle-insurance.component';
import { VehicleInspectionHistoryComponent } from './vehicle-inspection-history/vehicle-inspection-history.component';
import { VehicleServiceHistoryComponent } from './vehicle-service-history/vehicle-service-history.component';

@NgModule({
  declarations: [VehicleInventoryComponent, 
    VehicleInventoryDetailsComponent, 
    VehiclePollutionCheckHistoryComponent, 
    VehicleDetailsComponent, 
    VehicleInspectionHistoryComponent, 
    VehicleServiceHistoryComponent,
    VehicleInsuranceComponent
  ],


  imports: [
    CommonModule,
    InventoryRoutingModule,
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, VehicleInventoryService,
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class InventoryModule { }
