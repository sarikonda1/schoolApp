import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { NewRouteComponent } from './new-route/new-route.component';
import { VehicleRouteDatabaseComponent } from './vehicle-route-database/vehicle-route-database.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ViewRouteComponent } from './view-route/view-route.component';
import { TransportSchedulesComponent } from './transport-schedules/transport-schedules.component';
import { AddTransportSchedulesComponent } from './add-transport-schedules/add-transport-schedules.component';
import { ManageStudentTransportComponent } from './manage-student-transport/manage-student-transport.component';
import { ViewTransportSchedulesComponent } from './view-transport-schedules/view-transport-schedules.component';
import { ViewCommonRouteComponent } from './view-common-route/view-common-route.component';
import { DirectionsMapDirective } from './directions-map.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [NewRouteComponent,
    VehicleRouteDatabaseComponent,
    ViewRouteComponent, TransportSchedulesComponent, AddTransportSchedulesComponent, ManageStudentTransportComponent, ViewTransportSchedulesComponent, ViewCommonRouteComponent, DirectionsMapDirective],
    entryComponents: [ViewCommonRouteComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    AgmDirectionModule,
    DragDropModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5OFmlQeSKDj7YPHKwTHFzuit2sUY4UNA',
      libraries: ['places']
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  exports: [ViewRouteComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutesModule { }
