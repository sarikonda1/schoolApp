import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { AppSettings } from 'app/app.constants';
import { Router } from '@angular/router';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import * as HttpStatus from 'http-status-codes';
import { CommonService } from 'app/service/common.service';
import { RouteConfig } from 'app/url.config';
import { StudentApplicationFilterView } from '../model/student-application-filter-view';

@Component({
  selector: 'app-student-applications',
  templateUrl: './student-applications.component.html',
  styleUrls: ['./student-applications.component.scss']
})
export class StudentApplicationsComponent extends CommonComponent implements OnInit {
  tableSettings: {};
  closeForm: boolean;
  currentComponent = 'StudentApplicationsComponent';
  rows: Array<any>;
  totalRowsCount: number;
  pageCnt: number;
  columns: any[];
  preSelectIds: Array<string> = [];
  filterViewModel: StudentApplicationFilterView;
  selectedIdsList: Array<string> = [];
  
  resetStepper: boolean;
  constructor(private studentApplicationService: StudentApplicationService, private router: Router, 
    public dialogRef: MatDialog, public commonService: CommonService, public snackBar: MatSnackBar) { 
    super();
    this.setColumnHeaders();
    this.initializeFilterView();
    this.initializeTableSettings();
  }

  ngOnInit(): void  {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAppplications();
  }
  getAppplications(): void  {
    this.studentApplicationService.studentSearchDetails(this.filterViewModel.sortBy, 
      this.filterViewModel.studentName, this.filterViewModel.className, 
      this.filterViewModel.classId, this.filterViewModel.parentName, 
      this.filterViewModel.status, this.filterViewModel.sortOrder, 
      this.filterViewModel.failedRecords, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
      .subscribe(res => {
        this.bindApplicationsResult(res);
      }, error => {
        this.errorResponse(error);
      });

  }
  initializeFilterView(): void  {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }
  setColumnHeaders(): void  {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'parentName', header: 'Parents Name', sort: true },
      { field: 'className', header: 'Class Name', sort: true },
      { field: 'statusName', header: 'Status', sort: true },
      { field: 'view', header: 'Action', sort: false }
    ];
  }
  initializeTableSettings(): void  {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Student-applications',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }
  bindApplicationsResult(data: any): any {
    if (!data.studentSearchDetailsResult) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.studentSearchDetailsResult.list;
      this.totalRowsCount = data.studentSearchDetailsResult.totalItems;
      this.pageCnt = data.studentSearchDetailsResult.totalPages;
      const that = this;
      this.rows.forEach(e => {
        let dataValue = '';
        dataValue = (e.motherDetails ? (e.fatherDetails ? 
          that.getFormatedName(e.fatherDetails) + '/' + 
          that.getFormatedName(e.motherDetails) : that.getFormatedName(e.motherDetails)) : (e.fatherDetails ? 
            that.getFormatedName(e.fatherDetails) : ''));
        if (!dataValue) {
          dataValue = that.getFormatedName(e.guardianDetails);
        }
        // e.parentName = dataValue;
        e.className = e.className;
      });
      this.preSelectIds = [];
    }
    if (data.studentSearchDetailsResult) {
      this.filterViewModel.pageNumber = data.studentSearchDetailsResult.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Student Applications',
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true
        },
        infoButton: {
          required: true,
          text: 'Student Applications'
        }
      }
    };
  }
  actions(operationData: any): void {
    if (operationData.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig._Student_Application_Details + '/' + operationData.clickedRow.studentApplicationId]);
    }
  }
  getFormatedName(data): string {
    if (data) {
      if (data.middleName) {
        const fullName: any = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
      else {
        const fullName: any = data.firstName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
    }
  }
 
  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAppplications();
  }
  openForm(): void {
    this.resetStepper = false;
    this.closeForm = false;
  }
  onCancel(event): void {
    this.resetStepper = true;
    this.closeForm = event;
    this.getAppplications();
  }
}
