import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { MatcomponentsModule } from '../../../main/matcomponents.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        MatcomponentsModule,

        SharedManagementModule,
        TranslateModule
    ],
    exports: [
        ToolbarComponent
    ],
    providers: [],
    entryComponents: [CustomDialogComponent],
})
export class ToolbarModule {
}
