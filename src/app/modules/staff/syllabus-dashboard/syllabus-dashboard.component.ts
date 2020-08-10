import { Component, OnInit } from '@angular/core';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-syllabus-dashboard',
  templateUrl: './syllabus-dashboard.component.html',
  styleUrls: ['./syllabus-dashboard.component.scss'],
  providers: [SyllabusSchedulesService]
})
export class SyllabusDashboardComponent extends CommonComponent implements OnInit {
  syllabusData: any [] = [];
  onLoad = false;
  completedColor = '#4caf50';
  academicDuration: any;
  teachersProgress: any;
  constructor(public scheduleService: SyllabusSchedulesService, public commonService: CommonService) {
    super();
   }
  ngOnInit(): void {
    this.scheduleService.teacherSyllabusProgress()
    .subscribe(res => this.onTeacherSyllabus(res), err => this.errorResponse(err));
  }
  onTeacherSyllabus(res): void{
    this.academicDuration = res.academicSessionCompletedPercentage;
    if (res.teachersSyllabusProgresses && res.teachersSyllabusProgresses.length){
      this.teachersProgress = res.teachersSyllabusProgresses[0];
     this.syllabusData = res.teachersSyllabusProgresses[0].syllabusDashboardList;
    }
    this.onLoad = true;
  }
  back(): void{
    history.back();
  }
}
