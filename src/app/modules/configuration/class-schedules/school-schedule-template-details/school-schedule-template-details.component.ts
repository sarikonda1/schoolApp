import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { SchoolScheduleTemplateService } from 'app/service/class-schedules/school-schedule-template.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-school-schedule-template-details',
  templateUrl: './school-schedule-template-details.component.html',
  styleUrls: ['./school-schedule-template-details.component.scss'],
  providers: [SchoolScheduleTemplateService]
})
export class SchoolScheduleTemplateDetailsComponent extends CommonComponent implements OnInit {
  templateId: any;
  tempName: any;
  schoolScheduleTempList: Array<any> = [];
  filterSchoolScheduleTempList: Array<any> = [];
 // innerWidth: number;
  subscription: Subscription;

  constructor(private routes: ActivatedRoute,
    private schoolScheduleTemplateService: SchoolScheduleTemplateService,
    public commonService: CommonService, public location: Location) {
    super();
    this.subscription = this.commonService.getMenuWidth().subscribe(res => {
      // if(res){
      // this.innerWidth = window.innerWidth - 420 + res;
      // this.getdeviceSize(res);
      // }
    });
  }

  ngOnInit(): void {
    this.routes.params
      .subscribe((params: Params) => {
        this.templateId = params['id'];
        this.getTemplateDetails();
      });
    this.schoolScheduleTempList = [];
   // this.getdeviceSize();
  }
  onResize(): void {
  // this.getdeviceSize();
  }
  // getdeviceSize(width?: any): void {
  //   if (width !== undefined) {
  //     this.innerWidth = window.innerWidth - 420 + width;
  //   }
  //   else {
  //     this.innerWidth = window.innerWidth - 420;
  //   }

  // }


  getTemplateDetails(): void {
    this.schoolScheduleTemplateService.schoolScheduleTemplateTemplateDetailsGet(this.templateId).subscribe(res => {
      this.schoolScheduleTempList = res.templateDetailsView.periodsListViewModel;
      this.tempName = res.templateDetailsView.templateName;
      this.updateScheduleTemp();
    });
  }

  updateScheduleTemp(): void {
    if (this.schoolScheduleTempList.length > 0) {
      this.filterSchoolScheduleTempList = [];
      this.filterSchoolScheduleTempList = [{
        name: 'Day', value: []
      }];
      for (const key of this.schoolScheduleTempList) {
        const index = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
        if (index === -1) {
          const val = [];
          val.push(key);
          const data = { name: key.weekDayName, value: val };
          this.filterSchoolScheduleTempList.push(data);
        } else {
          const i = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
          this.filterSchoolScheduleTempList[i].value.push(key);
        }
      }
      let max = -Infinity;
      let j = -1;
      this.filterSchoolScheduleTempList.forEach(function (a, i): void {
        if (a.value.length > max) {
          max = a.value.length;
          j = i;
        }
      });

      for (let k = 0; k < max; k++) {
        this.filterSchoolScheduleTempList[0].value.push({
          periodNames: 'PERIOD'
        });
      }
      this.sortByWeekday(this.filterSchoolScheduleTempList);
    }

  }

  sortByWeekday(data): void {
    const sorter = {
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6,
      'sunday': 7
    };

    data.sort(function sortByDay(a, b): number {
      const day1 = a.name.toLowerCase();
      const day2 = b.name.toLowerCase();
      return sorter[day1] - sorter[day2];
    });
  }
}
