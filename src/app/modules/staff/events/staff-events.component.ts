import { Component, OnInit } from '@angular/core'; 
import { EventsService } from 'app/service/academic-service/api/events.service'; 
import { StudentEventsComponent } from 'app/modules/student/events/student-events.component';

@Component({
  selector: 'app-staff-events',
  templateUrl: '../../student/events/student-events.component.html',
  styleUrls: ['../../student/events/student-events.component.scss'],
  providers: [EventsService],  
})
export class StaffEventsComponent extends StudentEventsComponent implements OnInit {

    isStaff = true;
}
