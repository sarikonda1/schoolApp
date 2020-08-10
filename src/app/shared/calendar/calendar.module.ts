import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';
import {CalendarComponent} from './calendar.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations   : [
        CalendarComponent
    ],
    exports : [
        CalendarComponent
    ],
    imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,

        AngularCalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        ColorPickerModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        TranslateModule
    ],
    providers      : [
    ],

})
export class CalendarModule
{
}
