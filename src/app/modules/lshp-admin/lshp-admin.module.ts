import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LicenseSetupService } from '../../service/academic-service/api/license-setup.service';
import { LshpAdminComponent } from './lshp-admin.component';
import { SharedManagementModule } from '../../shared/shared.module';
import { UsersService } from '../../service/academic-service/api/user.service';


import { TranslateModule } from '@ngx-translate/core';
import { LshpAdminRoutingModule } from './lshp-admin-routing.module';
import {MatcomponentsModule} from '../../main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { UserService } from 'app/service/user-management/api/user.service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { InstitutionService } from 'app/service/academic-service/api/institution.service';
import { InstituteLicenceService } from 'app/service/academic-service/api/institute-licence.service';
import { InstituteDetailsComponent } from './institute-details/institute-details.component';
import { InstituteLicenseComponent } from './institute-license/institute-license.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NewInstitutionComponent } from './new-institution/new-institution.component';
import { StoreService } from 'app/service/file-management/store.service';
import { CreateUserInstituteComponent } from './create-user-institute/create-user-institute.component';


@NgModule({
  declarations: [
    LshpAdminComponent,
    NewInstitutionComponent,
    CreateUserInstituteComponent,
    InstituteDetailsComponent,
    InstituteLicenseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    LshpAdminRoutingModule,
    MatcomponentsModule,
    FuseSharedModule,
    Ng2TelInputModule
  ],
  providers: [UsersService, InstitutionService, LicenseSetupService, UserService, CountryService, StateService, TypeService, InstituteLicenceService, StoreService
   
],

    schemas: [CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA],
})
export class LshpAdminModule {
}
