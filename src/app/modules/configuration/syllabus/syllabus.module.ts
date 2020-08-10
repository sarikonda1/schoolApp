import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusComponent } from './syllabus.component';
import { SyllabusDetailsComponent } from './syllabus-details/syllabus-details.component';
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

@NgModule({
  declarations: [SyllabusComponent, SyllabusDetailsComponent],
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
