import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'app/app.constants';
import { RouteConfig } from 'app/url.config';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StudentActionService } from 'app/service/student-information-system/student-action.service';
import { StudentDropoutFilterView } from '../model/student-dropout-filter-view';

@Component({
  selector: 'app-dropouts',
  templateUrl: './dropouts.component.html',
  styleUrls: ['./dropouts.component.scss'],
  providers: [StudentActionService]
})
export class DropoutsComponent extends CommonComponent implements OnInit {
  tableSettings: {};
  closeForm: boolean;
  currentComponent = 'DropoutsComponent';
  rows: Array<any>;
  totalRowsCount: number;
  pageCnt: number;
  columns: any[];
  preSelectIds: Array<string> = [];
  filterViewModel: StudentDropoutFilterView;
  constructor(public dialogRef: MatDialog, private router: Router, private studentAction: StudentActionService, public snackBar: MatSnackBar) {
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
    this.getStudentDropouts();
  }
  getStudentDropouts(): void {
    this.studentAction.studentActionGrid(this.filterViewModel.studentActionTypeIds,
      this.filterViewModel.academicSessions,
      this.filterViewModel.classIds, this.filterViewModel.classNames,
      this.filterViewModel.studentName, this.filterViewModel.admissionNumber,
      this.filterViewModel.details, this.filterViewModel.sortOrder,
      this.filterViewModel.sortBy,
      this.filterViewModel.failedRecords,
      this.filterViewModel.pageNumber,
      this.filterViewModel.pageSize
    )
      .subscribe(res => {
        this.setStudentDropouts(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  setStudentDropouts(data): void {
    if (!data.pagedStudentActionViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedStudentActionViewModels.list;
      this.totalRowsCount = data.pagedStudentActionViewModels.totalItems;
      this.pageCnt = data.pagedStudentActionViewModels.totalPages;

      this.rows.forEach(e => {
        e.requestDate = (e.requestDate == null) ? null : this.commonService.customDateFormat(e.requestDate, this.getSchoolDateFormat()).date;
      });
      this.preSelectIds = [];
    }
    if (data.pagedStudentActionViewModels) {
      this.filterViewModel.pageNumber = data.pagedStudentActionViewModels.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Dropouts',
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
          text: 'Dropouts'
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
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'academicSession', header: 'Academic Session', sort: true },
      { field: 'admissionNumber', header: 'admissionNumber', sort: true },
      { field: 'className', header: 'Class', sort: true },
      { field: 'details', header: 'Reason', sort: true }

    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Dropouts',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      headerOperations: {
        addingForm: {
          required: false
        }
      }
    };
  }
  actions(operationData: any): void {
    if (operationData.operation === AppSettings.APPROVE.toLowerCase()) {
    } else if (operationData.operation === AppSettings.REJECT.toLowerCase()) {

    }
  }
  getFormatedName(data): void {
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
    this.getStudentDropouts();
  }
  openForm(): void {
    this.closeForm = false;
  }
  onCancel(event): void {
    this.closeForm = event;
  }

}
