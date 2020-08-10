import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-syllabus-progress-parent',
  templateUrl: './syllabus-progress-parent.component.html',
  styleUrls: ['./syllabus-progress-parent.component.scss'],
  providers: [SyllabusSchedulesService]
})
export class SyllabusProgressParentComponent extends CommonComponent implements OnInit {
  syllabusData: any [] = [];
  onLoad = false;
  academicDuration: any;
  completedColor = '#4caf50';
  constructor(public scheduleService: SyllabusSchedulesService, public snackBar: MatSnackBar,  public commonService: CommonService) { 
    super();
  }

  ngOnInit(): void {
      this.scheduleService.studentSyllabusProgress()
      .subscribe(res => this.onGetProgress(res), err => this.errorResponse(err));
  }
  onGetProgress(res): void{
    this.academicDuration =  res.academicSessionCompletion;
    this.syllabusData = res.syllabusDashboardView;
    this.onLoad = true;
  }
  back(): void{
    history.back();
  }

}
