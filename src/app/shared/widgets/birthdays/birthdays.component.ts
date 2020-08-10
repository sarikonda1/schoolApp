import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class BirthdaysComponent extends CommonComponent implements OnInit {
  birthdaysInfo: Array<any> = [];
  isLoading = true;
  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.getBithdaysInfo();
  }

  getBithdaysInfo(): void {
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();
    this.dashBoardService.birthDays(currentMonth, currentDate)
      .subscribe(res => this.setDetails(res));
  }

  setDetails(response): void {
    this.birthdaysInfo = [];
    if (response != null && response.length) {
      response.forEach(element => {
        this.birthdaysInfo.push({
          staffName: element.staffCode != null ? element.name : null,
          staffCode: element.staffCode,
          studentName: element.staffCode == null ? element.name : null,
          className: element.className,
          sectionName: element.sectionName
        });
      });
    }
    this.isLoading = false;
    this.cd.detectChanges();
  }
}
