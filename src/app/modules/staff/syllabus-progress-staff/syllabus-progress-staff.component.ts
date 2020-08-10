import { Component, OnInit } from '@angular/core';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { SyllabusProgressComponent } from 'app/modules/academics/syllabus/syllabus-progress/syllabus-progress.component';
import { SchoolSyllabusService } from 'app/service/syllabus/syllabus.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-syllabus-progress-staff',
  templateUrl: '../../academics/syllabus/syllabus-progress/syllabus-progress.component.html',
  styleUrls: ['./syllabus-progress-staff.component.scss'],
  providers: [SchoolSyllabusService, SyllabusSchedulesService, ClassTimetableService, StoreService]
})
export class SyllabusProgressStaffComponent extends SyllabusProgressComponent implements OnInit {

}
