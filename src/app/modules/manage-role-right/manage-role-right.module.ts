
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import { SharedManagementModule } from '../../shared/shared.module';
import {TokenInterceptor} from '../../interceptors/token-interceptor';
import { ModuleComponent } from './module/module.component';
import { RoleComponent } from './role/role.component';
import { RightComponent } from './right/right.component';
import { ManageRoutingModule } from './manage-role-right-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PageInformationComponent } from './page-information/page-information.component';
import {CKEditorModule} from 'ng2-ckeditor';


@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FuseSharedModule,
        SharedManagementModule,
        MatcomponentsModule,
        ManageRoutingModule,
        NgHttpLoaderModule.forRoot(),
        CKEditorModule
    ],
    declarations: [
    ModuleComponent,
    RoleComponent,
    RightComponent,
    PageInformationComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        // CommonService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class ManageRoleRightModule { }
