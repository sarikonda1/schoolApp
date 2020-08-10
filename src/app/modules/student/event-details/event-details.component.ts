import { Component, OnInit } from '@angular/core';
import { AddEditSchoolEventComponent } from 'app/modules/academics/events/add-edit-school-event/add-edit-school-event.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { EventsService } from 'app/service/academic-service/api/events.service';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { CalenderService } from 'app/service/staff/calender.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  providers: [GradeSetupService, ClassTimetableService, EventsService, SchoolAcademicSessionService, CalenderService]
})
export class EventDetailsComponent extends AddEditSchoolEventComponent{
 
}
