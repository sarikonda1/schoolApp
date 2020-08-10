import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class AttendanceComponent extends CommonComponent implements OnInit {
  staffAttendance: any;
  studentAttendance: any;
  view = [400, 200];
  staffAttendanceWidget = {
    scheme: {
      domain: ['#4caf50', '#f44336']
    },
    labels       : true,
    doughnut     : true, 
    list: [
      {
        name: 'Present',
        value: null,
      },
      {
        name: 'Absent',
        value: null,
      },
    ]
  };
  isLoading = true;

  studentAtendanceWidget = {
    scheme: {
      domain: ['#4caf50', '#f44336']
    },
    labels       : true,
    doughnut     : true, 
    list: [

      {
        name: 'Present',
        value: null,
      },
      {
        name: 'Absent',
        value: null,
      },

    ]
  };

  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) { super(); }

  ngOnInit(): void {
    this.getAttendances();
  }

  getAttendances(): void {
    if (this.getTokenParam('_as')) {
      this.dashBoardService.attendenceList()
          .subscribe(res => this.setDetails(res));
    }else {
      this.isLoading = false;
      this.cd.detectChanges();
    }
  }

  setDetails(response: any): void {
    this.staffAttendance = response.staffAttendenceViewModel;
    this.studentAttendance = response.studentAttendenceViewModel;

    if (this.staffAttendance) {
     
      this.staffAttendanceWidget.list = [
        {
          name: 'Present',
          value: this.staffAttendance.presentCount,
        },
        {
          name: 'Absent',
          value: this.staffAttendance.absentCount,
        },

      ];
    }

    if (this.studentAttendance) {
      this.studentAtendanceWidget.list = [
        {
          name: 'Present',
          value: this.studentAttendance.presentCount,
        },
        {
          name: 'Absent',
          value: this.studentAttendance.absentCount,
        },

      ];
    }
    this.isLoading = false;
    this.cd.detectChanges();
  }

}
