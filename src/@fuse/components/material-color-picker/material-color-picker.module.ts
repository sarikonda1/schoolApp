import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { FusePipesModule } from '@fuse/pipes/pipes.module';

import { FuseMaterialColorPickerComponent } from '@fuse/components/material-color-picker/material-color-picker.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        FuseMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        FusePipesModule,
        TranslateModule
    ],
    exports: [
        FuseMaterialColorPickerComponent
    ],
})
export class FuseMaterialColorPickerModule
{
}
