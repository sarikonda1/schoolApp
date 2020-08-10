import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router } from '@angular/router';
import { ScheduleService } from 'app/service/Transport/schedule.service';
import { TransportScheduleFilterView } from '../model/search-transport-schedules-view';
import { AppSettings } from 'app/app.constants';
import { RouteConfig } from 'app/url.config';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-transport-schedules',
  templateUrl: './transport-schedules.component.html',
  styleUrls: ['./transport-schedules.component.scss'],
  providers: [ScheduleService]

})
export class TransportSchedulesComponent extends CommonComponent implements OnInit {
  filterViewModel: TransportScheduleFilterView;
  httpStatus: any;

  // table variables
  tableSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalRowsCount: number;
  custRowsPerPageOptions: Array<number> = [];
  cols: any[];
  currentComponent = 'TransportSchedulesComponent';

  constructor(private router: Router, private scheduleService: ScheduleService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAllFilteredTransportSchedule();
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  setColumnHeaders(): void {
    this.cols = [
      { field: 'name', header: 'Schedule Name', sort: true },
      { field: 'inboundOrOutbound', header: 'Type', sort: true },
      { field: 'startTime', header: 'Start Time', sort: true },
      { field: 'endTime', header: 'End Time', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.cols,
      model: this.filterViewModel,
      tablename: 'Transportation Schedules',
      componentName: this.currentComponent,
    };
  }

  tableData(_event: TransportScheduleFilterView): void {
    this.filterViewModel = _event;
    this.getAllFilteredTransportSchedule();
  }

  getAllFilteredTransportSchedule(): void {
    this.scheduleService.TransportSchedules(this.filterViewModel.sortBy, this.filterViewModel.scheduleName,
      this.filterViewModel.routeTypeId, this.filterViewModel.startTime, this.filterViewModel.startTimeBegin,
      this.filterViewModel.startTimeEnd, this.filterViewModel.endTimeBegin,
      this.filterViewModel.endTimeEnd, this.filterViewModel.endTime, this.filterViewModel.sortOrder,
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
      subscribe(res => {
        this.bindTransportRoutesResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  bindTransportRoutesResult(data: any): void {
    if (!data.transportSchedulesDataView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      data.transportSchedulesDataView.list.map(e => {
        e.startTime = e.startTime ? e.startTime.substring(0, 5) : null;
        e.endTime = e.endTime ? e.endTime.substring(0, 5) : null;
      });
      this.rows = data.transportSchedulesDataView.list;
      this.totalRowsCount = data.transportSchedulesDataView.totalItems;
      this.pageCnt = data.transportSchedulesDataView.totalPages;
      this.rows.forEach(e => {
        if (e.inboundOrOutbound === 'I') {
          e.inboundOrOutbound = 'InBound';
        }
        else {
          e.inboundOrOutbound = 'OutBound';
        }
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          }, {
            name: AppSettings.VIEW_OPERATION,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW
          }
        ];
      });
    }
    if (data.transportSchedulesDataView) {
      this.filterViewModel.pageNumber = data.transportSchedulesDataView.pageNumber;
    }
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.cols,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Transportation Schedules',
      componentName: this.currentComponent,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Schedules'
        }
      }
    };
  }

  onAddFormClick(): void {
    this.router.navigate([RouteConfig._Add_Transport_Schedule]);
  }

  actions(operationData): void {
    if (operationData.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig._View_Transport_Schedule + operationData.clickedRow.id]);
    } else {
      this.router.navigate([RouteConfig._Edit_Transport_Schedule + operationData.clickedRow.id]);
    }
  }
}
