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
import { SchoolCommunicationsRoutingModule } from './school-communications-routing.module';
import { CommunicationConfigurationComponent } from './communication-configuration/communication-configuration.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { CommunicationSetupComponent } from './communication-setup/communication-setup.component';
import { CommunicationDetailsComponent } from './communication-details/communication-details.component';
import { MessageTransmissionsComponent } from './message-transmissions/message-transmissions.component';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { CommunicationTypesService } from 'app/service/configuration/communication-types.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { CommunicationService } from 'app/service/communication/communication-service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { TypeService } from 'app/service/academic-service/api/type.service';

@NgModule({
  declarations: [
  CommunicationConfigurationComponent, CommunicationSetupComponent, CommunicationDetailsComponent, MessageTransmissionsComponent],

  imports: [
    CommonModule,
    SchoolCommunicationsRoutingModule,
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    FuseMaterialColorPickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, GradeSetupService, StudentDBService, CommunicationService, StaffCommonService, TypeService , CommunicationTypesService, StatusService
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SchoolCommunicationsModule { }
