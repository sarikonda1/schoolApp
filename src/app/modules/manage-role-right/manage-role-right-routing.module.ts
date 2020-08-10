import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { RoleComponent } from './role/role.component';
import { RightComponent } from './right/right.component';
import { PageInformationComponent } from './page-information/page-information.component';

const routes: Routes = [
    {
        path: 'module',
        component: ModuleComponent,
        data: {title: 'module'}
    },
    {
        path: 'role',
        component: RoleComponent,
        data: {title: 'Role'}
    },
    {
        path: 'right',
        component: RightComponent,
        data: {title: 'Right'}
    },
    {
        path: 'page-information',
        component: PageInformationComponent,
        data: {title: 'Page Information'}
    }

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [
        RouterModule
    ]
})
export class ManageRoutingModule{}
