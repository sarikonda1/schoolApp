import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SchoolEventsComponent } from './events/school-events/school-events.component';

@NgModule({
  declarations: [StudentDetailsComponent],
  entryComponents: [StudentDetailsComponent],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [StudentDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademicsModule { }
