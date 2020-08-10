import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'app/app.constants';
import { EventsService } from 'app/service/academic-service/api/events.service';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { CommonService } from 'app/service/common.service';
import { MatSnackBar } from '@angular/material';
import { EventsFilterView } from '../../academics/events/model/event-filter-view-model';
import { CommonComponent } from '../../../shared/common/common.component';

@Component({
  selector: 'app-student-events',
  templateUrl: './student-events.component.html',
  styleUrls: ['./student-events.component.scss'],
  providers: [EventsService]
})
export class StudentEventsComponent extends CommonComponent implements OnInit {

  filterViewModel: EventsFilterView;

  rows: any;
  totalRowsCount: any;
  pageCnt: any;
  columns: any;
  tableSettings: any;
  currentComponent = 'SchoolEventsComponent';
  schoolEventDetails: any;
  eventId: any;
  eventDetails: any;
  isStaff = false;
  constructor(private eventService: EventsService,
    private router: Router, public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAllEvents();
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
    this.columns = [
      { field: 'announcedDate', header: 'Announce Date', sort: true },
      { field: 'fromDate', header: 'From Date', sort: true },
      { field: 'toDate', header: 'To Date', sort: true },
      { field: 'eventType', header: 'Event Type', sort: true },
      { field: 'eventDescription', header: 'Event Description', sort: true },
      { field: 'classAndSection', header: 'Class And Section', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Events',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }




  getAllEvents(): void {
    this.eventService.getEvents(this.filterViewModel.announcedDateBegin, this.filterViewModel.announcedDateEnd,
      this.filterViewModel.fromDateBegin, this.filterViewModel.fromDateEnd, this.filterViewModel.toDateBegin, this.filterViewModel.toDateBegin,

      this.filterViewModel.eventDescription, this.filterViewModel.classIds,
      this.filterViewModel.sectionIds, this.filterViewModel.statusIds,
      this.filterViewModel.eventTypeIds,
      this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
        this.eventsResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  eventsResult(data: any): void {
    if (!data.eventsDetails) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.eventsDetails.list;
      this.totalRowsCount = data.eventsDetails.totalItems;
      this.pageCnt = data.eventsDetails.totalPages;
      this.rows.forEach(e => {

        e.operations = [
          {
            name: AppSettings.VIEW_DATA,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW_OPERATION
          }
        ];

        e.announcedDate = (e.announcedDate == null) ? null : this.commonService.customDateFormat(e.announcedDate, this.getSchoolDateFormat()).date;
        e.fromDate = (e.fromDate == null) ? null : this.commonService.customDateFormat(e.fromDate, this.getSchoolDateFormat()).date;
        e.toDate = (e.toDate == null) ? null :
          this.commonService.customDateFormat(e.toDate, this.getSchoolDateFormat()).date;
      });
    }
    if (data.eventsDetails) {
      this.filterViewModel.pageNumber = data.eventsDetails.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Events',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: false,
          btnName: 'Add Event'
        },
        infoButton: {
          required: true,
          text: 'School Events'
        }
      }
    };
  }
  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAllEvents();
  } 
  rowActions(data: any): void {
    if (this.isStaff){
      this.router.navigate([RouteConfig._Staff_Event_Details + '/' + data.clickedRow.eventId, {operation: data.operation}]);
    }else{
      this.router.navigate([RouteConfig._Student_Event_Details + '/' + data.clickedRow.eventId, {operation: data.operation}]);
    }
  }


}
