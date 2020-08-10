import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInformationSystemRoutingModule } from './student-information-system-routing.module';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { DropoutsComponent } from './dropouts/dropouts.component';
import { StudentDatabaseComponent } from './student-database/student-database.component';
import { StudentInformationDetailsComponent } from './student-information-details/student-information-details.component';
import { AcademicsModule } from '../academics.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { StudentGroupService } from 'app/service/student-group/student-group.service';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { StudentGroupDetailsComponent } from './student-group-details/student-group-details.component';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { SatDatepickerModule } from 'saturn-datepicker';
import { StudentSiblingComponent } from './student-sibling/student-sibling.component';
import { StudentFacilityAssignmentComponent } from './student-facility-assignment/student-facility-assignment.component';
import { StudentCourseSelectionsComponent } from './student-course-selections/student-course-selections.component';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StudentCourseSelectionService } from 'app/service/student-information-system/student-course-selection.service';
import { SectionAssignmentComponent } from './section-assignment/section-assignment.component';
import { StudentSectionsService } from 'app/service/student-information-system/students-section-service';
import { StudentRollnumberManagementComponent } from './student-rollnumber-management/student-rollnumber-management.component';
import { RollNumberAssignmentService } from 'app/service/academic-service/api/rollnumber-assignment.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StudentsFacilityService } from 'app/service/academic-service/api/studentsFacility.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { SchoolFacilityService } from 'app/service/general/api/school-facility.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import {StatusService} from '../../../service/academic-service/api/status.service';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { PreviewStudentRequestComponent } from './preview-student-request/preview-student-request.component';  

@NgModule({
  declarations: [StudentRequestsComponent, DropoutsComponent, 
    StudentDatabaseComponent, StudentInformationDetailsComponent,
     StudentGroupsComponent, StudentGroupDetailsComponent, StudentSiblingComponent, StudentFacilityAssignmentComponent, StudentRollnumberManagementComponent
     , SectionAssignmentComponent, StudentCourseSelectionsComponent, PreviewStudentRequestComponent],
  imports: [
    CommonModule,
    StudentInformationSystemRoutingModule,
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
    DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    GradeSetupService, StudentGroupService, StudentApplicationService, StudentSectionsService,
     StudentGroupService, StudentApplicationService, RollNumberAssignmentService,
     ClassTimetableService, StudentsFacilityService, FeeTypeService, SchoolFacilityService,
     StudentCourseSelectionService, ClassesConfigService, StatusService,
     SchoolAcademicSessionService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class StudentInformationSystemModule { }
