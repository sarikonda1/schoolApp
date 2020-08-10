import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';

import { EventTypeFilterView } from '../models/event-types-filter-view';
import { YesNo } from 'app/models/yes-no-view';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as HttpStatus from 'http-status-codes';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppSettings } from 'app/app.constants';
import { EventTypeView } from '../models/event-type-view';
import { EventTypeUpdateView } from '../models/event-type-update-view';
import { EventTypesService } from 'app/service/general/api/event-types.service';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss'],
  providers: [
    EventTypesService
  ]
})
export class EventTypesComponent extends CommonComponent implements OnInit {
  @ViewChild('eventType') _eventTypeForm;
  filterViewModel: EventTypeFilterView;
  eventTypeDetails: EventTypeView;
  eventTypeUpdateView: EventTypeUpdateView;
  schoolId: string;
  disbleSubmitBtn = false;

  // table variables
  settingTableData: {};
  rows: Array<any>;
  columns: any[];
  pageCnt = 0;
  totalRowsCount = 0;
  custRowsPerPageOptions: Array<number> = [];
  rowBasedAction: Array<any> = [];
  isEventTypeFormClosed: boolean;
  eventTypeFormSubmitted = false;
  isSubmitButtonEnabled = true;
  YesOrNo: Array<any> = YesNo.values;
  currentComponent = 'EventTypesComponent';

  eventTypesForm: FormGroup;

  constructor(public commonService: CommonService,
    private eventTypeService: EventTypesService,
    public dialogRef: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.initializeEventTypeForm();
    this.tableColumns();
    this.tabSettings();
    this.commonService.getTableLSObj(this.settingTableData);
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
   // if (localStorage.getItem('_s')) {
      this.fetchEventTypes();
   // }

    this.eventTypeDetails = {};
    this.eventTypeUpdateView = {};
  }

  /**
 * intializes formGroup for InitializeEventType
 */
  initializeEventTypeForm(): void {
    this.eventTypesForm = new FormGroup({    
      eventTypeId: new FormControl(''),
      name: new FormControl('', [Validators.required,
      Validators.maxLength(45)]),
      isCompetition: new FormControl('', Validators.required),
    });
  }

  /**
    * table columns
    */
  tableColumns(): void {
    this.columns = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'isCompetition', header: 'Is Competition', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  /**
   * initial table settings
   */
  tabSettings(): void {
    this.settingTableData = {
      rows: [],
      columns: this.columns,
      tablename: 'Event Types',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }

  /**
   * initializing filterViewModel
   */
  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  /**
  * api call to get all event types
  */
  fetchEventTypes(): void {  
    if (this.getTokenParam('_si')){
      this.eventTypeService.eventTypesList(this.filterViewModel.names, this.filterViewModel.isCompetition,
        this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
          this.eventTypesListResult(res);
        }, error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
    } else{
      this.openSnackBar(AppSettings.SCHOOL_IS_REQUIRED, true);
    } 
  }

  /**
    * manipulate response data and sets to app-table
    * @param eventTypeList 
    */
  eventTypesListResult(eventTypeList: any): void {    
    this.custRowsPerPageOptions = [];
    if (!eventTypeList.eventTypeList) {
      this.rows = [];
    } else {
      this.rows = eventTypeList.eventTypeList.list;
      this.totalRowsCount = eventTypeList.eventTypeList.totalItems;
      this.pageCnt = eventTypeList.eventTypeList.totalPages;
      this.rows.forEach((element: any) => {
        element.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT

          }, {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE
          }];


        element.isCompetition = (element.isCompetition === 1) ?
          AppSettings.YES : AppSettings.NO;
      });
    }
    if (eventTypeList.eventTypeList) {
      this.filterViewModel.pageNumber = eventTypeList.eventTypeList.pageNumber;
    }

    /**
    * sets data to app-table component
    */
    this.settingTableData = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      tablename: 'Event Types',
      componentName: this.currentComponent,
      isAddRowEventRequired: true,
      isPaginationRequired: true,
      filtersList: eventTypeList.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Event Types'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        }, navigateComponent: {
          name: '',
          btnName: ''
        }
      }

    };
  }

  /**
  * gets the data to bind table on filter/pagination
  * @param _filterViewModel 
  */
  tableData(_filterViewModel: EventTypeFilterView): void {
    this.filterViewModel = _filterViewModel;
    this.fetchEventTypes();
  }

  openEventTypeForm(): void {
    this.eventTypeFormSubmitted = false;
    this.isEventTypeFormClosed = false;
    this._eventTypeForm.resetForm();
    this.isSubmitButtonEnabled = true;
  }

  /**
  * close the panel and initialize form on close
  */
  closeForm(): void {
    this._eventTypeForm.resetForm();
    this.isEventTypeFormClosed = true;
    this.eventTypeFormSubmitted = false;
  }

  createOrUpdateEventType(eventType: EventTypeUpdateView): void {
    this.eventTypeFormSubmitted = true;
    if (this.isSubmitButtonEnabled === true && this.eventTypesForm.status === AppSettings.VALID) {
      this.eventTypeService.createEventType(eventType).subscribe(response => {
        if (response.statusCode === HttpStatus.OK) {
          this.fetchEventTypes();
          this.closeForm();
        }
        else {
          this.isEventTypeFormClosed = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
      this.disbleSubmitBtn = false;
    }
    else if (this.eventTypesForm.status === AppSettings.VALID) {
      this.eventTypeService.updateEventType(eventType).subscribe(response => {
        if (response.statusCode === HttpStatus.OK) {
          this.fetchEventTypes();
          this.closeForm();
        }
        else {
          this.isEventTypeFormClosed = false;
        }
        this.openSnackBar(response.messages.ResultMessage);
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
      this.disbleSubmitBtn = false;
    }
  }

  onRowActions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.eventTypeFormSubmitted = false;
      this.isSubmitButtonEnabled = false;
      const isCompetition = (operationData.clickedRow.isCompetition === AppSettings.YES) ?
        1 : 0;
      this.isEventTypeFormClosed = false;
      this.eventTypesForm.controls['eventTypeId'].setValue(operationData.clickedRow.eventTypeId);
      this.eventTypesForm.controls['name'].setValue(operationData.clickedRow.name);
      this.eventTypesForm.controls['isCompetition'].setValue(isCompetition);
    }

    if (operationData.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const eventTypeId: string = operationData.clickedRow.eventTypeId;
          this.deleteEventTypes(eventTypeId);
        }
      });

    }
  }

  deleteEventTypes(eventTypeId: string): void {
    this.eventTypeService.deleteEventType(eventTypeId).subscribe(response => {
      this.fetchEventTypes();
      this.openSnackBar(response.messages.ResultMessage);
    }, error => {
      this.errorResponse(error);
    });
  }
}
