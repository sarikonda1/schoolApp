import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import 'rxjs/add/operator/debounceTime';
import { StaffMemberFilterView } from '../../model/staff-member-filter-view';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { RouteConfig } from 'app/url.config';
import { StoreService } from 'app/service/file-management/store.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar, MatAutocompleteTrigger } from '@angular/material';
import { StaffStatusView } from '../model/staff-status-view';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';

@Component({
  selector: 'app-staff-database',
  templateUrl: './staff-database.component.html',
  styleUrls: ['./staff-database.component.scss']
})
export class StaffDatabaseComponent extends CommonComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  @ViewChild('staffName') studentNameAutoInput: any;

  tableSettings: {};
  staffTypes: Array<{ label: string, value: string }> = [];
  columns: any[];
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  filterViewModel: StaffMemberFilterView;
  staffStatusView: StaffStatusView;
  currentComponent = 'StaffDatabaseComponent';
  searchForm: FormGroup;
  filterdStaffs: Array<any> = [];
  closeForm: boolean;
  applicationInfo: any;
  profileImage: any;
  status: Array<any> = [];
  httpStatus: any;
  onSearch = false;
  constructor(private router: Router, public commonService: CommonService,
    public staffJobApplicationService: StaffJobApplicationService, private staffService: StaffMemberService, private storeService: StoreService,
    private cd: ChangeDetectorRef, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
    this.staffStatusView = {};
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.onSearch = true;
      this.filterViewModel = modelTableComponent;
    }
    this.initializeForm();
    this.status = [];
    this.getAllFilteredStaffs(this.filterViewModel);
    this.searchForm.controls['staffName'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.staffService.staffSearch(name).subscribe((res) => {
          this.filterdStaffs = (res.staffSearchViewResult && res.staffSearchViewResult.length > 0) ? res.staffSearchViewResult : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdStaffs = [];
      }
    });
  }
  initializeForm(): void {
    this.searchForm = new FormGroup({
      staffName: new FormControl(null),
      staffTypeIds: new FormControl(null),
    });
    this.staffJobApplicationService.fetchStaffTypes().subscribe(res => this.staffTypes = res.map((obj: any) => ({ value: obj.id, label: obj.name })));
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      statusIds: [],
      staffNames: [],
      staffCodes: [],
      departments: [],
      staffTypeIds: []
    };
  }
  setColumnHeaders(): void {
    this.columns = [
      { field: 'staffName', header: 'Name', sort: true },
      { field: 'staffCode', header: 'Staff Code', sort: true },
      { field: 'statusName', header: 'Status', sort: true },
      { field: 'department', header: 'Department', sort: true },
      { field: 'staffType', header: 'StaffType', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Staff Database',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      filtersList: [],
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Staff Database'
        }
      }
    };
  }

  tableData(_event: StaffMemberFilterView): void {
    this.filterViewModel = _event;
    const data = this.searchForm.value;
    if (this.onSearch){
      this.filterViewModel.staffNames = data.staffName  ? [data.staffName] : [];
      this.filterViewModel.staffTypeIds = data.staffTypeIds ? [data.staffTypeIds] : [];
    }else {
      this.filterViewModel.staffTypeIds = [];
      this.filterViewModel.staffNames = [];
    }
    this.getAllFilteredStaffs(this.filterViewModel);
  }

  getAllFilteredStaffs(data: any): void {
    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.staffService.staffMembers(data.sortBy, data.statusIds, data.staffNames,
      data.staffCodes, data.departments, data.staffTypeIds, data.sortOrder,
      data.pageNumber, data.pageSize).
      subscribe((res) => {
        this.bindStaffResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  // bindStudentResult(data: StudentResultView): void {
  bindStaffResult(data: any): void {
    if (!data.staffDataView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
      if (this.filterViewModel.staffNames &&
        this.filterViewModel.staffNames[0]){
          this.studentNameAutoInput.nativeElement.value = this.filterViewModel.staffNames[0];
      }
    } else {
      this.rows = data.staffDataView.list;
      this.totalRowsCount = data.staffDataView.totalItems;
      this.pageCnt = data.staffDataView.totalPages;
      this.rows.forEach(e => {
        if (e.statusName === AppSettings.Active) {
          e.operations = [
            {
              name: AppSettings.EDIT_OPERATION,
              icon: AppSettings.EDIT,
              operationName: AppSettings.EDIT
            }, {
              name: AppSettings.VIEW,
              icon: AppSettings.DETAILS_ICON,
              operationName: AppSettings.VIEW
            },
            {
              name: AppSettings.INACTIVE_OPERATION,
              icon: AppSettings.INACTIVE_ICON,
            }
          ];
        }
        else {
          e.operations = [
            {
              name: AppSettings.EDIT_OPERATION,
              icon: AppSettings.EDIT,
              operationName: AppSettings.EDIT
            }, {
              name: AppSettings.VIEW,
              icon: AppSettings.DETAILS_ICON,
              operationName: AppSettings.VIEW
            },
            {
              name: AppSettings.ACTIVE_OPERATION,
              icon: AppSettings.ACTIVE_ICON,
            }
          ];
        }
      });

      if (data.filters) {
        data.filters.forEach(s => {
          if (s.label === AppSettings.STATUS) {
            this.status = [];
            s.options.forEach(element => {
              this.status.push({
                value: element.value,
                label: element.label
              });
            });
          }
        });
      }
      if (this.filterViewModel.staffNames && this.filterViewModel.staffNames[0]){
        this.studentNameAutoInput.nativeElement.value = this.filterViewModel.staffNames[0];
      }
    }
    if (data.staffDataView != null) {
      this.filterViewModel.pageNumber = data.staffDataView.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Staff Database',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true
        }
      }
    };
    if (localStorage.getItem('_stId') != null
      && this.staffTypes.find(x => x.label === localStorage.getItem('_stId')) !== undefined) {
      this.searchForm.controls['staffTypeIds'].setValue(this.staffTypes.find(x => x.label === localStorage.getItem('_stId')).value);
    }
    if (localStorage.getItem('_stNm') != null) {
      this.searchForm.controls['staffName'].setValue(localStorage.getItem('_stNm'));
    }
  }

  displayFn(data: any): void {
    if (data) {
      return data || data.staffName;
    }
  }

  // Actions Performing on the row
  actions(operationData: any): void {
    if (operationData.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig._Staff_View + '/' + operationData.clickedRow.id]);
    } else if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.router.navigate([RouteConfig._Staff_Edit + '/' + operationData.clickedRow.id]);
    }
    else {
      const upper = operationData.operation.replace(/^\w/, c => c.toUpperCase());
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.STAFF_STATUS + ' '
            + upper, operationData.operation), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const sId = this.status.find(x => x.label.toLowerCase() === upper.toLowerCase());
          this.staffStatusView = {
            staffId: operationData.clickedRow.id,
            statusId: sId.value
          };
          this.staffService.staffStatus(this.staffStatusView).subscribe(res => {
            if (res.statusCode === this.httpStatus.OK) {
              this.getAllFilteredStaffs(this.filterViewModel);
              this.openSnackBar(res.messages.ResultMessage);
            }
            else {
              this.openSnackBar(res.messages.ResultMessage, true);
            }
          }, error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
  }

  getStaffDetails(data): void {
    this.applicationInfo = data.staffMemberDetails;
    if (data.staffMemberDetails.person.attachment) {
      this.profileImage = this.storeService.getFilePath(data.staffMemberDetails.person.attachment.fileName);
    }
    if (this.applicationInfo.attachment) {
      const fileExtension = this.applicationInfo.attachment.fileName.replace(/^.*\./, '');
    }
    this.cd.detectChanges();
  }
  openForm(): void {
    this.router.navigate([RouteConfig._Staff_Edit]);
  }
  onClear(fromHeader = false): void {
    if (fromHeader){
      this.searchForm.reset();
      localStorage.removeItem('_stId');
      localStorage.removeItem('_stNm');
      this.filterViewModel.staffTypeIds = [];
      this.filterViewModel.staffNames = [];
      this.onSearch = false;
    }
    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.getAllFilteredStaffs(this.filterViewModel);
  }
  searchStaff(data: any): void {
    this.onSearch = true;
    if (data.staffTypeIds != null) {
      localStorage.setItem('_stId', this.staffTypes.find(x => x.value === data.staffTypeIds).label);
    }
    if (data.staffName !== null) {
      localStorage.setItem('_stNm', data.staffName);
    }
    this.filterViewModel.staffNames = data.staffName !== null ? [data.staffName] : [];
    this.filterViewModel.staffTypeIds = data.staffTypeIds !== null ? [data.staffTypeIds] : [];
    this.getAllFilteredStaffs(this.filterViewModel);
  }

  getSelectedStaff(value: any): void {
    if (value.id !== undefined) {
      this.searchForm.controls['staffName'].setValue(value);
    }
  }
}

