import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LshpAdminComponent } from './lshp-admin.component';
import { NewInstitutionComponent } from './new-institution/new-institution.component';
import { CreateUserInstituteComponent } from './create-user-institute/create-user-institute.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'institute-details',
        data: {title: 'Institute Details'}
    },
    {
        path: 'institute-details/add-institution',
        component: NewInstitutionComponent,
        data: {title: 'Add Institution'}
    },
    {
        path: 'institute-details/edit-institution/:id',
        component: NewInstitutionComponent,
        data: {title: 'Edit Institution'}
    },
    {
        path: 'institute-details',
        component: LshpAdminComponent,
        data: {title: 'Institute Details'}
    },
    {
        path: 'create-users',
        component: CreateUserInstituteComponent,
        data: {title: 'Create Users'}
    },
    {
        path: 'create-users/:id',
        component: CreateUserInstituteComponent,
        data: {title: 'Create Users'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class LshpAdminRoutingModule {


}
