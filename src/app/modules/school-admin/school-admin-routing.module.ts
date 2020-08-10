import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolUserComponent } from './school-user/school-user.component';
import { SchoolAdminComponent } from './school-admin.component';
import { SequenceConfigurationComponent } from './sequence-configuration/sequence-configuration.component';
import { EditSettingsComponent } from './edit-settings/edit-settings.component';
import { SchoolInfrastructureComponent } from './school-infrastructure/school-infrastructure.component';
import { ServiceConfigurationComponent } from './service-configuration/service-configuration.component';



import { ManageSchoolComponent } from './manage-school/manage-school.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'school-details'
    },

    {
        path: 'school-details',
        component: SchoolAdminComponent,
        data: {title: 'School Details'}
    },
    {
        path: 'school-users/:id',
        component: SchoolUserComponent,
        data: {title: 'School Users'}
    },
    {
        path: 'school-users',
        component: SchoolUserComponent,
        data: {title: 'School Users'}
    },
    {
        path: 'school-sequence-configuration',
        component: SequenceConfigurationComponent,
        data: {title: 'School Sequence Configuration'}
    },
    {
        path: 'edit-school-settings',
        component: EditSettingsComponent,
        data: {title: 'Edit School Settings'}
    },
    {
        path: 'school-sequence-configuration',
        component: SchoolUserComponent,
        data: {title: 'School Sequence Configuration'}
    },
    {
        path: 'service-configuration',
        component: ServiceConfigurationComponent,
        data: {title: 'Service Configuration'}
    },

    {
        path: 'add-school',
        component: ManageSchoolComponent,
        data: {title: 'Add School'}
    },
    {
        path: 'edit-school/:id',
        component: ManageSchoolComponent,
        data: {title: 'Edit School'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class SchoolAdminRoutingModule {


}
