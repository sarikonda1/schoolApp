import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsModule } from '../academics.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { SatDatepickerModule } from 'saturn-datepicker';
import { EventsRoutingModule } from './events-routing.module';
import { SchoolEventsComponent } from './school-events/school-events.component';
import { AddEditSchoolEventComponent } from './add-edit-school-event/add-edit-school-event.component';

@NgModule({
  declarations: [SchoolEventsComponent, AddEditSchoolEventComponent],
  imports: [
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    AcademicsModule,
    SatDatepickerModule,
    FuseMaterialColorPickerModule,
    EventsRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
   
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [AddEditSchoolEventComponent],
})
export class EventsModule { }
