import { Component, OnInit, Inject, LOCALE_ID, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { StoreService } from 'app/service/file-management/store.service';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService, StoreService]
})
export class StudentSummaryComponent extends CommonComponent implements OnInit {
  academicInfo: any;
  occupancyWidget = {
    scheme: {
      domain: ['#43a047', '#36f1f1']
    },
    list: [

      {
        name: 'Available Seats',
        value: null,
        change: null
      },
      {
        name: 'Current Students',
        value: null,
        change: null
      },

    ]
  };
  isLoading = true;

  constructor(@Inject(LOCALE_ID) public locale: string, private dashBoardService: DashBoardService, public storeService: StoreService, public snackBar: MatSnackBar,
    public cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    if (this.getTokenParam('_as')) {
      this.getAcademicInfo();
    }
    else {
      this.isLoading = false;
    }
  }

  getAcademicInfo(): void {
    this.dashBoardService.academicSessionInformation()
      .subscribe(res => this.setDetails(res));
  }
  setDetails(response): void {
    this.academicInfo = response.resultModel;

    // this.academicInfo = response.resultModel != null ? this.getKeyValuesOfObject(response.resultModel) : null;
    if (this.academicInfo) {
      this.occupancyWidget.list = [

        {
          name: 'Available Seats',
          value: this.academicInfo.capacity !== 0 ? this.academicInfo.capacity - this.academicInfo.students : 0,
          change: null
        },
        {
          name: 'Current Students',
          value: this.academicInfo.students,
          change: null
        },

      ];
    }
    this.isLoading = false;
    this.cd.detectChanges();
  }
}



