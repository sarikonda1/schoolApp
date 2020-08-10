import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportationRoutingModule } from './transportation-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TransportationRoutingModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class TransportationModule { }
