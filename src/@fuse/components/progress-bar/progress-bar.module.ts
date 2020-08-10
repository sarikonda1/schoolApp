import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

import { FuseProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        FuseProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    exports     : [
        FuseProgressBarComponent
    ]
})
export class FuseProgressBarModule
{
}
