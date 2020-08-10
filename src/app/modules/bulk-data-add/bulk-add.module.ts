import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { CommunicationService } from 'app/service/communication/communication-service';
import { BulkAddComponent } from './bulk-add/bulk-add.component';
import { BulkAddRoutingModule } from './bulk-add-routing.module';
import { BulkProcessComponent } from './bulk-process/bulk-process.component';
import {ProgressBarModule} from 'angular-progress-bar';

@NgModule({
  declarations: [BulkAddComponent, BulkProcessComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule, 
    BulkAddRoutingModule  ,
    ProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, CommunicationService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class BulkAddModule { }

