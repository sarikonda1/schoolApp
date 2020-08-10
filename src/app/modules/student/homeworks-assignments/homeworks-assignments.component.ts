import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { ClassHomeWorkService } from 'app/service/assignments/class-home-work.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { MatDialog } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';
import { HomeWorkFilterViewModel } from '../../staff/assignments/model/home-work-filter-view-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-homeworks-assignments',
  templateUrl: './homeworks-assignments.component.html',
  styleUrls: ['./homeworks-assignments.component.scss'],
  providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, ClassHomeWorkService, GardeTermConfigurationService, StoreService]
})
export class StudentHomeworksAssignmentsComponent extends CommonComponent implements OnInit {
  @ViewChild('viewData') viewTemplate: TemplateRef<any>;
  @ViewChild('myTemplate') myTemplate;

  tableSettings: {};
  filterViewModel: HomeWorkFilterViewModel;
  columns: any[];
  rows: Array<any>;
  totalRowsCount: number;
  pageCnt: number;
  currentComponent = 'HomeworksAssignmentsComponent';
  filterRowData: any[] = [];
  items = [];
  classSectionIds = [];
  homeWorkData: any;
  viewDialog: any;
  selectedItems: any;
  attachmentUrl: any;
  testScheduleId: any;
  constructor(private classHomeWorkService: ClassHomeWorkService,
    public dialogRef: MatDialog, public commonService: CommonService, public storeService: StoreService) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
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
      { field: 'homeWorkName', header: 'Name', sort: true },
      { field: 'description', header: 'Description', sort: true },
      { field: 'typeName', header: 'Type', sort: true },
      { field: 'courseName', header: 'Course', sort: true },
      // { field: 'issueDate', header: 'Issue Date', sort: true },
      // { field: 'dueDate', header: 'Due Date', sort: true },
      // { field: 'testInformation', header: 'Test Information', sort: true, rowTempalteRequired: true },
      { field: 'view', header: 'Action', sort: false }
    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Homework/Assignments',
      componentName: this.currentComponent,
      model: this.filterViewModel,
    };
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      this.getAllFilteredClasses();
    } else {
      this.getAllFilteredClasses();
    }
  }
  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAllFilteredClasses();
  }

  getAllFilteredClasses(): void {
    this.classHomeWorkService.getAllHomeworks(this.filterViewModel.boardIds, this.filterViewModel.classIds,
      this.filterViewModel.sectionIds, this.filterViewModel.typeIds,
      this.filterViewModel.courseIds, this.filterViewModel.homeWorkNames,
      this.filterViewModel.issueDateBegin, this.filterViewModel.issueDateEnd,
      this.filterViewModel.dueDateBegin, this.filterViewModel.dueDateEnd,
      this.filterViewModel.termIds, this.filterViewModel.testTypeIds,
      this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
      .subscribe(res => {
        this.setClassResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  setClassResult(data): any {
    if (!data.getClassHomeWorksModel) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.getClassHomeWorksModel.list;
      this.totalRowsCount = data.getClassHomeWorksModel.totalItems;
      this.pageCnt = data.getClassHomeWorksModel.totalPages;
    }
    if (data.getClassHomeWorksModel) {
      this.filterViewModel.pageNumber = data.getClassHomeWorksModel.pageNumber;
    }
    this.rows.forEach(e => {
      e.issueDate = e.issueDate ? this.commonService.customDateFormat(e.issueDate.toString(), this.getSchoolDateFormat()).date : null;
      e.dueDate = e.dueDate ? this.commonService.customDateFormat(e.dueDate.toString(), this.getSchoolDateFormat()).date : null;

    });
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Homework/Assignments',
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters
    };

    this.filterRowData = [];
    this.filterRowData = this.rows;
    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.className === element.className && value.homeWorkName === element.homeWorkName;
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;
    // apply edit and delete
    this.updateActions();
  }

  updateActions(): void {
    this.filterRowData.forEach(element => {
      element.operations = [
        {
          name: AppSettings.DETAILS,
          icon: AppSettings.DETAILS_ICON,
          operationName: AppSettings.DETAILS
        }
      ];
    });
  }

  getSchoolDate(date): any {
    return date ? this.commonService.customDateFormat(date.toString(), this.getSchoolDateFormat()).date : null;
  }

  // Actions Performing on the row
  actions(operationData: any): void {
    this.classHomeWorkService.getByHomeworks(operationData.clickedRow.id)
      .subscribe(res => this.viewHomeWorkDetails(res));
  }
  viewHomeWorkDetails(res): void {
    this.homeWorkData = res.getClassHomeworkModel;
    if (this.homeWorkData.attachment && this.homeWorkData.attachment.fileName) {
      this.homeWorkData.attachment.attachmentUrl = this.storeService.getFilePath(this.homeWorkData.attachment.fileName);
    }
    this.openForm();
  }

  openForm(): void {
    this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { template: this.myTemplate },
      width: '700px'
    });
  }
  
  openFile(base64): void {
    window.open(base64, '_blank');
  }
  closeView(): void {
    this.dialogRef.closeAll();
  }
  setHomeWorkdata(res): void {
    this.getAllFilteredClasses();
    this.openSnackBar(res.messages.ResultMessage);
  }
}
