import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { TranslateModule } from '@ngx-translate/core';
import { CommunicationRoutingModule } from './communication-routing.module';
import { SharedManagementModule } from 'app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { CommunicationTypesComponent } from './communication-types/communication-types.component';
import { CommunicationComponent } from './communication.component';

@NgModule({
  declarations: [CommunicationComponent, CommunicationTypesComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    CommunicationRoutingModule,
    TranslateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunicationModule { }
