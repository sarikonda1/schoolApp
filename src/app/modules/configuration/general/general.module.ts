
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolFacilitiesComponent } from './school-facilities/school-facilities.component';

import { StudentGroupRepresentativeRoleComponent } from './student-group-representative-role/student-group-representative-role.component';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedManagementModule } from 'app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/interceptors/token-interceptor';
import { StudentApplicationCategoriesComponent } from './student-application-categories/student-application-categories.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCategoriesService } from 'app/service/general/api/course-categories.service';
import { SchoolRepRoleComponent } from './school-rep-role/schoolreprole/schoolreprole.component';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { TranslateModule } from '@ngx-translate/core';
import { SectionComponent } from './section/section.component';
import { SchoolRepRoleService } from 'app/service/general/api/school-rep-role.service';
import { ClassesComponent } from './classes/classes.component';
import { ClassPeriodTypeService } from 'app/service/academic-service/api/class-period-type.service';
import { StudentGroupRepRoleService } from 'app/service/general/api/student-group-rep-role.service';
import { CoursesConfigurationService } from 'app/service/general/api/courses_configuration.service';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { ClassperiodtypesComponent } from './classperiodtypes/class-period-types.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VirtualClassesConfigurationComponent } from './virtual-classes-configuration/virtual-classes-configuration.component';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { SchoolVirtualClassService } from 'app/service/general/api/school-virtual-class.service';


@NgModule({
  declarations: [CourseCategoriesComponent, ClassperiodtypesComponent, ClassesComponent, GeneralComponent, 
  SchoolRepRoleComponent, ClassesComponent, SchoolRepRoleComponent, CoursesComponent, ClassesComponent,
  StudentApplicationCategoriesComponent, 
  StudentGroupRepresentativeRoleComponent, SectionComponent, SchoolFacilitiesComponent, EventTypesComponent, VirtualClassesConfigurationComponent],
 
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule, MatcomponentsModule, FuseSharedModule,
    ReactiveFormsModule,
    SharedManagementModule,
    GeneralRoutingModule,
    FuseSharedModule,
    GeneralRoutingModule,
    TranslateModule,
    DragDropModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ClassPeriodTypeService,
    SchoolRepRoleService,
    StudentGroupRepRoleService,
    CourseCategoriesService,
    CoursesConfigurationService,
    SchoolRepRoleService,
    ClassTimetableService,
    SchoolVirtualClassService
  ],
 

  entryComponents: [SchoolRepRoleComponent, CustomDialogComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, SchoolFacilitiesComponent],
})

export class GeneralModule { }
