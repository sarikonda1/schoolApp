import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { AcademicSessionService } from 'app/service/academic-service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';

@Component({
  selector: 'app-online-student-applications',
  templateUrl: './online-student-applications.component.html',
  styleUrls: ['./online-student-applications.component.scss'],
  providers: [GradeSetupService, AcademicSessionService, ClassesConfigService, StudentApplicationService, SchoolAcademicSessionService]
})
export class OnlineStudentApplicationsComponent extends CommonComponent implements OnInit {
  
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
