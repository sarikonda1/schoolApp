import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffInformationSystemRoutingModule } from './staff-information-system-routing.module';
import { SchoolFacilityRepresentativesComponent } from './school-facility-representatives/school-facility-representatives.component';
import { ClassTeacherManagementComponent } from './class-teacher-management/class-teacher-management.component';
import { StaffDatabaseComponent } from './staff-database/staff-database.component';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedManagementModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { StaffLeaveRequestsComponent } from './staff-leave-request/staff-leave-requests.component';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { AddStaffAdmissionFormComponent } from '../../../shared/add-staff-admission-form/add-staff-admission-form.component';
import { StaffAttendenceComponent } from './staff-attendence/staff-attendence.component';
import { TeachersSchedulesService } from 'app/service/staff-information-system/teachers-schedules.service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { TeacherScheduleComponent } from './teacher-schedule/teacher-schedule.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffAdmissionsModule } from '../staff-admissions/staff-admissions.module';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';

@NgModule({
  declarations: [ClassTeacherManagementComponent,
    StaffDatabaseComponent, StaffLeaveRequestsComponent, SchoolFacilityRepresentativesComponent, StaffAttendenceComponent,
    TeacherScheduleComponent,
    StaffDetailComponent],
  imports: [
    CommonModule,
    MatcomponentsModule,
    RouterModule,
    FormsModule,
    FuseSharedModule,
    ReactiveFormsModule,
    SharedManagementModule,
    Ng2TelInputModule,
    TranslateModule,    
    StaffInformationSystemRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    StaffMemberService,
    TeachersSchedulesService,
    StaffCommonService,
    StaffJobApplicationService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class StaffInformationSystemModule { }
