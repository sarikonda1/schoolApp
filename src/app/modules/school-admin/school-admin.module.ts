import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LicenseSetupService } from '../../service/academic-service/api/license-setup.service';

import { SharedManagementModule } from '../../shared/shared.module';
import { UsersService } from '../../service/academic-service/api/user.service';


import { TranslateModule } from '@ngx-translate/core';

import { MatcomponentsModule } from '../../main/matcomponents.module';

import { FuseSharedModule } from '@fuse/shared.module';
import { SchoolAdminRoutingModule } from './school-admin-routing.module';
import { SchoolUserComponent } from './school-user/school-user.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { SchoolAdminComponent } from './school-admin.component';
import { SchoolInfrastructureComponent } from './school-infrastructure/school-infrastructure.component';
import { EditSettingsComponent } from './edit-settings/edit-settings.component';
import { SequenceConfigurationComponent } from './sequence-configuration/sequence-configuration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolInfrastructureService } from 'app/service/school-admin/api/school-Infrastructure.service';
import { InstitutionService } from 'app/service/academic-service/api/institution.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { SequenceService } from 'app/service/academic-service/api/sequence.service';

import { SchoolService } from 'app/service/manage-school/school.service';
// import { CommonService } from 'app/service/common.service';
import { ManageSchoolComponent } from './manage-school/manage-school.component';
import { Ng2TelInputModule } from 'ng2-tel-input';


import { StoreService } from 'app/service/file-management/store.service';
import { ServiceConfigurationComponent } from './service-configuration/service-configuration.component';
import { ServiceConfigurationService } from 'app/service/communication/serviceConfiguration.service';
import { FuseMaterialColorPickerModule } from '@fuse/components';




@NgModule({
  declarations: [
    SchoolAdminComponent, SchoolDetailsComponent, SchoolUserComponent, EditSettingsComponent, SequenceConfigurationComponent, ManageSchoolComponent,
    SchoolDetailsComponent, SchoolUserComponent, 
    SchoolInfrastructureComponent, EditSettingsComponent, SequenceConfigurationComponent, ServiceConfigurationComponent
    // , ManageSchoolComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    SchoolAdminRoutingModule,
    MatcomponentsModule,
    FuseSharedModule,
    Ng2TelInputModule,
    FuseMaterialColorPickerModule
  ],
  providers: [UsersService, InstitutionService, LicenseSetupService, CountryService,
    StateService, TypeService, SchoolInfrastructureService, SequenceService, SchoolService, StoreService, ServiceConfigurationService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class SchoolAdminModule {
}
