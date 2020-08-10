import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { Error404Component } from './shared/errors/404/error-404.component';
import { UpdateInstituteComponent } from './shared/update-institute/update-institute.component';
import { CreatePasswordComponent } from './shared/create-password/create-password.component';
import { WizardComponent } from './shared/wizard/wizard.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { Error403Component } from './shared/errors/403/error403.component';
import { RegisterComponent } from './shared/register/register.component';
import {DemoComponent} from './shared/demo/demo.component';
import { OnlineStudentApplicationsComponent } from './shared/online-student-applications/online-student-applications.component';

const routes: Routes = [

    {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home'
            },
            {
                path: 'home',
                component: HomeComponent,
                data: {title: 'Home'}
            },
            // {
            //     path: 'reports/:id',
            //     redirectTo: '/errors/error-404',
            //     data: {title: 'Reports'}
            // },
            {
                path: 'errors/error-404',
                component: Error404Component,
                data: {title: '404 Not Found'}
            },
            {
                path: 'errors/error-403',
                component: Error403Component,
                data: {title: '403 Forbidden'}
            },
            {
                path: 'manage-institution',
                loadChildren: 'app/modules/lshp-admin/lshp-admin.module#LshpAdminModule',
                canActivate: [AuthGuard]
            },

            {
                path: 'manage-school',
                loadChildren: 'app/modules/school-admin/school-admin.module#SchoolAdminModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'configuration',
                loadChildren: 'app/modules/configuration/configuration.module#ConfigurationModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'setup-wizard',
                loadChildren: 'app/shared/wizard/wizard.module#WizardModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'manage-menu',
                loadChildren: 'app/modules/manage-role-right/manage-role-right.module#ManageRoleRightModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'academics',
                loadChildren: 'app/modules/academics/academics.module#AcademicsModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'staff',
                loadChildren: 'app/modules/staff/staff.module#StaffModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'student',
                loadChildren: 'app/modules/student/student.module#StudentModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'transportation',
                loadChildren: 'app/modules/transportation/transportation.module#TransportationModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'finance',
                loadChildren: 'app/modules/finance/finance.module#FinanceModule',
                canActivate: [AuthGuard]
            },
            {                                                                  
                path: 'communication',
                loadChildren: 'app/modules/communication/communication.module#CommunicationModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'setup-wizard',
                loadChildren: 'app/modules/bulk-data-add/bulk-add.module#BulkAddModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'reports',
                loadChildren: 'app/modules/reports/reports.module#ReportsModule',
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {title: 'Login'}
            },
            {
                path: 'demo',
                component: DemoComponent,
                data: {title: 'Demo'}
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {title: 'Register'}
            },
            {
                path: 'create-password/:email/:code',
                component: CreatePasswordComponent,
                data: {title: 'Create Password'}
            },
            {
                path: 'parent-password/:email/:code',
                component: CreatePasswordComponent,
                data: {title: 'Parent Password'}
            },
            {
                path: 'staff-password/:email/:code',
                component: CreatePasswordComponent,
                data: {title: 'Staff Password'}
            },
            {
                path: 'reset-password/:email/:code',
                component: CreatePasswordComponent,
                data: {title: 'Reset Password'}
            },
            {
                path: 'previewinstitution/:id/:email',
                component: UpdateInstituteComponent,
                data: {title: 'Preview Institution'}
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                data: {title: 'Forgot Password'}
            },
            {
                path: 'online-student-application/:id/:asId',
                component: OnlineStudentApplicationsComponent,
                data: {title: 'Online Application Form'}
            }
        ]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
