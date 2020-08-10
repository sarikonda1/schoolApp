import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { AcademicsModule } from '../academics.module';
import { SatDatepickerModule } from 'saturn-datepicker';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { StudentLeaveRequestsComponent } from './student-leave-requests/student-leave-requests.component';

@NgModule({
  declarations: [StudentAttendanceComponent, StudentLeaveRequestsComponent],
  imports: [
    CommonModule,    
    AttendanceRoutingModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    Ng2TelInputModule,
    AcademicsModule,
    SatDatepickerModule,
    FuseMaterialColorPickerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }   
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class AttendanceModule { }
