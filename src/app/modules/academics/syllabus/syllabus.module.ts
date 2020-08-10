import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusScheduleComponent } from './syllabus-schedule/syllabus-schedule.component';
import { SyllabusProgressComponent } from './syllabus-progress/syllabus-progress.component';
import { SyllabusViewComponent } from './syllabus-view/syllabus-view.component';
import { MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProgressBarModule } from 'angular-progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { SyllabusEntryDetailsComponent } from './syllabus-entry-details/syllabus-entry-details.component';

@NgModule({
  declarations: [SyllabusScheduleComponent, SyllabusProgressComponent, SyllabusEntryDetailsComponent, SyllabusViewComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule, MatcomponentsModule, FuseSharedModule,
    ReactiveFormsModule,
    SharedManagementModule,
    SyllabusRoutingModule,
    TranslateModule,
    DragDropModule,
    ProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],    
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

})
export class SyllabusModule { }
