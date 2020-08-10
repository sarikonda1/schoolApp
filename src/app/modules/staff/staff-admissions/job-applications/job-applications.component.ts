import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { AppSettings } from 'app/app.constants';
import { SearchJobApplicationsView } from '../model/search-job-applications';
import { Router } from '@angular/router';
import { AddJobApplicationsComponent } from '../add-job-applications/add-job-applications.component';
import { RouteConfig } from 'app/url.config';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.scss'],
  providers: [StaffJobApplicationService]
})
export class JobApplicationsComponent extends CommonComponent implements OnInit {
  filterViewModel: SearchJobApplicationsView;
  closeForm: boolean;
  addComponent: AddJobApplicationsComponent;
  resetStepper: boolean;
  // table variables
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalRowsCount: number;
  custRowsPerPageOptions: Array<number> = [];
  cols: any[];
  currentComponent = 'JobApplicationsComponent';
  httpStatus: any;

  constructor(private router: Router, private staffJobApplicationService: StaffJobApplicationService, public snackBar: MatSnackBar) {
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
    this.getAllFilteredJobApplicants(this.filterViewModel);
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      applicantName: [],
      applicantReferenceNo: [],
      email: [],
      statusIds: [],
    };
  }

  setColumnHeaders(): void {
    this.cols = [
      { field: 'applicantName', header: 'Applicant Name', sort: true },
      { field: 'applicantReferenceNo', header: 'Applicant Reference No', sort: true },
      { field: 'email', header: 'Email', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'view', header: 'Actions', sort: false },
    ];
  }

  initializeTableSettings(): void {
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.filterViewModel,
      tablename: 'Job Applications',
      componentName: this.currentComponent,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        }
      },
    };
  }

  tableData(_event: SearchJobApplicationsView): void {
    this.filterViewModel = _event;
    this.getAllFilteredJobApplicants(this.filterViewModel);
  }

  getAllFilteredJobApplicants(data: any): void {
    this.staffJobApplicationService.fetchJobApplications(data.applicantName, data.applicantReferenceNo, data.email, data.statusIds, data.sortBy, data.sortOrder,
      data.pageNumber, data.pageSize).
      subscribe(res => {
        this.bindJobApplicationResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  bindJobApplicationResult(data: any): void {
    if (!data.jobApplicationView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.jobApplicationView.list;
      this.totalRowsCount = data.jobApplicationView.totalItems;
      this.pageCnt = data.jobApplicationView.totalPages;
      // this.rows.forEach(e => {
      //   e.operations = [
      //     {
      //       name: AppSettings.VIEW,
      //       icon: AppSettings.DETAILS_ICON,
      //       operationName: AppSettings.VIEW
      //     }
      //   ];
      // });
    }
    if (data.jobApplicationView) {
      this.filterViewModel.pageNumber = data.jobApplicationView.pageNumber;
    }

    this.tabSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.cols,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Job Applications',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Job Applications'
        }
      }
    };
  }


  openForm(): void {
    this.resetStepper = false;
    this.closeForm = false;
  }


  onCancel(event): void {
    this.resetStepper = true;
    this.closeForm = event;
    this.getAllFilteredJobApplicants(this.filterViewModel);
    this.scrollIntoView('app-table');
  }


  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig.JOB_APPLICATION_DETAILS + '/' + event.clickedRow.id]);
    }
  }

}
