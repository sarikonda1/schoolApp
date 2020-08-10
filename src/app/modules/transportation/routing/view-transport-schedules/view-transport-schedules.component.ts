import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ScheduleService } from 'app/service/Transport/schedule.service';
import { RouteConfig } from 'app/url.config';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-view-transport-schedules',
  templateUrl: './view-transport-schedules.component.html',
  styleUrls: ['./view-transport-schedules.component.scss'],
  providers: [ScheduleService, StaffCommonService]
})
export class ViewTransportSchedulesComponent extends CommonComponent implements OnInit {
  transportScheduleId: any;
  transportSchedules: any;

  transportScheduleTab: {};
  rows: any[];
  transportScheduleGridHeaderData: any[];
  loaded = Promise.resolve(true);
  columns: { field: string; header: string; sort: boolean; }[];
  staffDetails: any;
  resStaffDetails: any;

  constructor(private router: Router, private routes: ActivatedRoute,
    private scheduleService: ScheduleService, private changedetector: ChangeDetectorRef, private staffCommonService: StaffCommonService,
    public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.routes.params
      .subscribe((params: Params) => {
        this.transportScheduleId = params['id'];
        this.getTransportScheduleDetails();
      });
    this.transportScheduleGridHeaderData = [
      { field: 'routeName', header: 'Route Name', sort: false },
      { field: 'routeNumber', header: 'Route Number', sort: false },
      { field: 'vehicleNo', header: 'Vehicle', sort: false },
      { field: 'driverStaffId', header: 'Driver Name', sort: false },
      { field: 'assistantStaffId', header: 'Driver Assistant Name', sort: false },
    ];
  }

  getTransportScheduleDetails(): void {
    this.scheduleService.transportSchedulesDetails(this.transportScheduleId)
      .subscribe(res => {
        this.setTransportScheduleDetails(res.transportSchedulesDataView);
      }, error => {
        this.errorResponse(error);
      });
  }

  setTransportScheduleDetails(data: any): void {
    const headerData = [];
    for (const key in data) {
      if (key !== 'transportScheduleRoutesDataView' && key !== 'id' &&
        key !== 'routeType') {
        if (data[key] === 'I') {
          data[key] = 'Inbound';
        }
        else if (data[key] === 'O') {
          data[key] = 'Outbound';
        }else if (key === 'startTime' || key === 'endTime'){
          data[key] = data[key] ? data[key].substring(0, 5) : null;
        }
        headerData.push({ label: key, value: data[key] });
      }
    }
    this.resStaffDetails = data.transportScheduleRoutesDataView;
    this.getStaffDetails();
    this.transportSchedules = headerData;
    this.loaded = Promise.resolve(true);
  }

  getStaffDetails(): void {
    this.staffCommonService.fetchStaffs().
      subscribe((res) => {
        const staffData = [];
        res.forEach(obj => {
          staffData.push({
            value: obj.id, label: obj.name
          });
        });
        this.staffDetails = staffData;
        this.assignStaffDetails(this.resStaffDetails);
      }, error => {
        this.errorResponse(error);
      });
  }

  assignStaffDetails(data: any): void {
    data.forEach(e => {
      const sName = this.staffDetails.filter(x => x.value === e.driverStaffId);
      if (sName.length > 0) {
        e.driverStaffId = sName[0].label;
      }
      const asName = this.staffDetails.filter(x => x.value === e.assistantStaffId);
      if (asName.length > 0) {
        e.assistantStaffId = asName[0].label;
      }
    });

    this.transportScheduleTab = {
      padding: true,
      rows: data,
      columns: this.transportScheduleGridHeaderData,
      // tablename: 'List of Transport Schedules',
      isPaginationRequired: false,
      hideHeader: true,
      
     
    };
  }

  onBackButtonClick(): any {
    this.router.navigate([RouteConfig._Transport_Schedule]);
  }
}
