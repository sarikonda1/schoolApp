import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { Error403Component } from './error403.component';



const routes = [
    {
        path     : 'errors/error-403',
        component: Error403Component
    }
];

@NgModule({
    declarations: [

        Error403Component],
    exports: [
        Error403Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class Error403Module
{
}
