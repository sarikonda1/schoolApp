import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class NoticeboardComponent extends CommonComponent implements OnInit {
  noticeBoardInfo: Array<any> = [];
  isLoading = true;
  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.getNoticeBoardData();
  }

  getNoticeBoardData(): void {
    this.dashBoardService.getNoticeBoard()
      .subscribe(res => this.setDetails(res));
  }

  setDetails(response): void {
    // console.log(response.noticeBoardViewModel,this.noticeBoardInfo );
    
    if (response.noticeBoardViewModel && response.noticeBoardViewModel.length) {
      response.noticeBoardViewModel.forEach(element => {
        this.noticeBoardInfo.push({
          Date: element.scheduleDate,
          Message: element.message
        });
      });
    }
    this.isLoading = false;
    this.cd.detectChanges();
  }
}
