import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { StudentRequestService } from 'app/service/student-information-system/student-request.service';
import { StudentRequestFilterView } from '../model/student-request-filter-view';
import { CommonService } from 'app/service/common.service';
import { StudentRequestIdView } from '../model/student-request-id-view';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-student-requests',
  templateUrl: './student-requests.component.html',
  styleUrls: ['./student-requests.component.scss'],
  providers: [StudentRequestService, StoreService]
})
export class StudentRequestsComponent extends CommonComponent implements OnInit {
  tableSettings: {};
  closeForm: boolean;
  currentComponent = 'StudentRequestsComponent';
  rows: Array<any>;
  totalRowsCount: number;
  pageCnt: number;
  columns: any[];
  preSelectIds: Array<string> = [];
  filterViewModel: StudentRequestFilterView;
  approveStudentModel: StudentRequestIdView;
  constructor(
    public dialogRef: MatDialog,
    private router: Router,
    private studentRequestService: StudentRequestService,
    public commonService: CommonService,
    public storeService: StoreService,
    public snackBar: MatSnackBar) {
    super();
    this.setColumnHeaders();
    this.initializeFilterView();
    this.initializeTableSettings();
  }
  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getStudentRequests();
  }

  getStudentRequests(): void {
    this.studentRequestService.studentRequestGrid(this.filterViewModel.studentRequestTypeIds,
      this.filterViewModel.studentName, this.filterViewModel.statusIds,
      this.filterViewModel.admissionNumber, this.filterViewModel.requestNotes, this.filterViewModel.requestDateBegin,
      this.filterViewModel.requestDateEnd, this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
      this.filterViewModel.failedRecords,
      this.filterViewModel.pageNumber,
      this.filterViewModel.pageSize)
      .subscribe(res => {
        this.setRequestsResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  setRequestsResult(data): void {
    if (!data.pagedStudentRequestViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedStudentRequestViewModels.list;
      this.totalRowsCount = data.pagedStudentRequestViewModels.totalItems;
      this.pageCnt = data.pagedStudentRequestViewModels.totalPages;

      this.rows.forEach(e => {
        e.requestDate = (e.requestDate == null) ? null : this.commonService.customDateFormat(e.requestDate, this.getSchoolDateFormat()).date;
        e.operations = e.attachment ? [
          {
            name: AppSettings.VIEW_REQUEST_OPERATION,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW_REQUEST
          }] : [];
        if (e.attachmentResponseAttachment) {
          e.operations.push({
            name: AppSettings.VIEW_RESPONSE_OPERATION,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW_RESPONSE
          });
        }
        if (e.statusCode === AppSettings.STUDENT_REQUEST_PENDING_STATUS) {
          e.operations.push(
            {
              name: AppSettings.APPROVE_OPERATION,
              icon: AppSettings.APPROVE_ICON,
              operationName: AppSettings.APPROVE
            }, {
            name: AppSettings.REJECT_OPERATION,
            icon: AppSettings.REJECT_ICON,
            operationName: AppSettings.REJECT
          });
        }
      });
      this.preSelectIds = [];
    }
    if (data.pagedStudentRequestViewModels) {
      this.filterViewModel.pageNumber = data.pagedStudentRequestViewModels.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Student Requests',
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: false
        },
        infoButton: {
          required: true,
          text: 'Student Requests'
        }
      }
    };
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
      { field: 'requestDate', header: 'Request Date', sort: true },
      { field: 'requestTypeName', header: 'Request Type', sort: true },
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'admissionNumber', header: 'admissionNumber', sort: true },
      { field: 'requestNote', header: 'Request Notes', sort: true },
      { field: 'statusName', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },

    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Student Requests',
      isPaginationRequired: true,
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }

  actions(operationData: any): void {
    
    switch (operationData.operation.toLowerCase()) {
      case AppSettings.APPROVE.toLowerCase():
        {
          const dialogRef = this.dialogMethod(AppSettings.APPROVE_STUDENT_REQUEST, true, AppSettings.NO, AppSettings.YES);
          dialogRef.afterClosed().subscribe(action => {
            if (action === AppSettings.YES) {
              this.router.navigate([RouteConfig._Preview_Certificate + operationData.clickedRow.id]);
            }
          });
        }
        break;
      case AppSettings.REJECT.toLowerCase():
        {
          const dialogRef = this.dialogMethod(AppSettings.REJECT_STUDENT_REQUEST, true, AppSettings.NO, AppSettings.YES);
          dialogRef.afterClosed().subscribe(action => {
            if (action === AppSettings.YES) {
              this.approveStudentModel = {
                id: operationData.clickedRow.id,
                attachment: operationData.clickedRow.attachment
              };
              this.studentRequestService.rejectStudentRequest(this.approveStudentModel)
                .subscribe(res => this.studentRequestResponse(res));
            }
          });
        }
        break;
      case AppSettings.VIEW_REQUEST.toLowerCase():
        {
          // Download the Certificate or open it inthe new Tab
          if (operationData.clickedRow.attachment != null) {
            window.open(this.storeService.getFilePath(operationData.clickedRow.attachment.fileName));
          }
          else {
            this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
            return;
          }
        }
        break;
      case AppSettings.VIEW_RESPONSE.toLowerCase():
        {
          // Download the Certificate or open it inthe new Tab
          if (operationData.clickedRow.attachmentResponseAttachment != null) {
            window.open(this.storeService.getFilePath(operationData.clickedRow.attachmentResponseAttachment.fileName));
          }
          else {
            this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
            return;
          }
        }
        break;
    }
  }
  studentRequestResponse(res): void {
    this.getStudentRequests();
    this.openSnackBar(res.messages.ResultMessage);
  }
  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getStudentRequests();
  }
  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  openForm(): void {
    this.closeForm = false;
  }
  onCancel(event): void {
    this.closeForm = event;
    this.getStudentRequests();
  }

}
