import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'app/service/communication/communication-service';
import { CommonComponent } from 'app/shared/common/common.component';
import { TransmissionSearchStudentView } from '../../model/transmission-serach-student--view';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { TransmissionSearchStaffView } from '../../model/transmission-search-staff-view';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-message-transmissions',
  templateUrl: './message-transmissions.component.html',
  styleUrls: ['./message-transmissions.component.scss']
})
export class MessageTransmissionsComponent extends CommonComponent implements OnInit {


  studenttabSettings: {};
  stafftabSettings: {};
  studentCols: any[];
  staffCols: any[];
  studentComponent = 'studentTransmissionsComponent';
  staffComponent = 'staffTransmissionsComponent';
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  transSearchStudentView: TransmissionSearchStudentView;
  transSearchStaffView: TransmissionSearchStaffView;
  commId: any;
  rows: any[];
  commData: any;
  staffData: any;
  studentData: any;

  constructor(public commonService: CommonService, private commService: CommunicationService, private route: ActivatedRoute, public snackBar: MatSnackBar) {
    super();
     this.clearPostModel();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.commId = params.id;
      }
    });
    this.staffCols = [
      { field: 'staffRole', header: 'Staff Role', sort: true },
      { field: 'receipientName', header: 'Recipient Name', sort: true },
      { field: 'receipientContactInfo', header: 'Recipient Contact Info', sort: true },
      { field: 'transmissionDate', header: 'Transmission Date', sort: true },
      { field: 'type', header: 'Type', sort: true },
      { field: 'status', header: 'Status', sort: true },
    ];

      this.studentCols = [
      { field: 'studentName', header: 'StudentName', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'receipientName', header: 'Recipient Name', sort: true },
      { field: 'receipientContactInfo', header: 'Recipient Contact Info', sort: true },
      { field: 'transmissionDate', header: 'Transmission Date', sort: true },
      { field: 'type', header: 'Type', sort: true },
      { field: 'status', header: 'Status', sort: true },
    ];

    this.studenttabSettings = {
      rows: [],
      columns: this.studentCols,
      model: this.transSearchStudentView,
      componentName: this.studentComponent,
    };
    const modelStudentTableComponent = this.getModelComponent(this.studentComponent);
    if (modelStudentTableComponent) {
      this.transSearchStudentView = modelStudentTableComponent;
    }

    const modelStaffTableComponentt = this.getModelComponent(this.staffComponent);
    if (modelStaffTableComponentt) {
      this.transSearchStaffView = modelStaffTableComponentt;
    }

    this.tableData(this.transSearchStudentView);
    this.tableStaffData(this.transSearchStaffView);
  }

  tableData(data: any): void {
    this.transSearchStudentView = data;
    this.transSearchStudentView.communicationId = this.commId;
    const searchData = this.prepareModel(this.transSearchStudentView, data);
    this.commService.studentMessageTransmission(searchData).subscribe((res: any) => this.bindingData(res), error => {
      this.errorResponse(error);
    });
  }

  // Binding Data To Table
  bindingData(data: any): void {
    this.commData = data.dataModel;
    this.custRowsPerPageOptions = [];
    if (data.resultList == null) {
      this.rows = [];
    }
    else {
      this.studentData = data.resultList.list;
      this.rows = this.setDateFormat(data.resultList.list);
      this.totalItems = data.resultList.totalItems;
    }
    if (data.resultList) {
      this.transSearchStudentView.pageNumber = data.resultList.pageNumber;
    }
    this.studenttabSettings = {
      columns: this.studentCols,
      model: this.transSearchStudentView,
      rows: this.rows,
      componentName: this.studentComponent,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      // padding: true,
      filtersList: data.filters
    };
  }

  tableStaffData(data: any): void {
    this.transSearchStaffView = data;
    this.transSearchStaffView.communicationId = this.commId;
    const searchData = this.prepareModel(this.transSearchStaffView, data);
    this.commService.staffMessageTransmission(searchData).subscribe((res: any) => this.bindingStaffData(res), error => {
      this.errorResponse(error);
    });
  }


  // Binding Data To Table
  bindingStaffData(data: any): void {
    this.commData = data.dataModel;
    this.custRowsPerPageOptions = [];
    if (data.resultList == null) {
      this.rows = [];
    }
    else {
      this.staffData = data.resultList.list;
      this.rows = this.setDateFormat(data.resultList.list);
      this.totalItems = data.resultList.totalItems;
    }
    if (data.resultList) {
      this.transSearchStaffView.pageNumber = data.resultList.pageNumber;
    }
    this.stafftabSettings = {
      columns: this.staffCols,
      model: this.transSearchStaffView,
      rows: this.rows,
      componentName: this.staffComponent,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      // padding: true,
      filtersList: data.filters
    };
  }


  clearPostModel(): void {
    this.transSearchStudentView = {
      communicationId: '',
      studentName: '',
      classIds: [],
      sectionIds: [],
      transmissionDateBegin: null,
      transmissionDateEnd: null,
      type: [],
      status: [],
      receipientName: '',
      receipientContactInfo: '',
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };

    this.transSearchStaffView = {
      communicationId: '',
      transmissionDateBegin: null,
      transmissionDateEnd: null,
      type: [],
      status: [],
      receipientName: '',
      receipientContactInfo: '',
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }
}
