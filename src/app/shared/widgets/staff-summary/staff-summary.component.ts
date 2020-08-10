import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-staff-summary',
  templateUrl: './staff-summary.component.html',
  styleUrls: ['./staff-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class StaffSummaryComponent extends CommonComponent implements OnInit {
  staffSummaryInfo: any;
  isLoading = true;

  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) { super(); }

  ngOnInit(): void {
    this.getStaffSummary();
  }

  getStaffSummary(): void {
    this.dashBoardService.staffSummary()
      .subscribe(res => this.setDetails(res));
  }

  setDetails(response): void {
    /*this.staffSummaryInfo = response != null ? this.getKeyValuesOfObject(response) : null;
    if (this.staffSummaryInfo && this.staffSummaryInfo.length) {
      this.staffSummaryInfo = this.staffSummaryInfo.filter(x => x.Label !== 'teachingStaff' && x.Label !== 'students');
    }

    this.staffSummaryInfo = this.staffSummaryInfo.some
      (x => x.Value !== 0 && x.Value != null) ? this.staffSummaryInfo : null;
    console.log(this.staffSummaryInfo);*/
    this.staffSummaryInfo = response;

    this.isLoading = false;
    this.cd.detectChanges();
  }
}
