import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Subscription } from 'rxjs';
import { SiblingStudentView } from '../model/siblingStudentView';
import { StudentSearchView } from '../model/student-search-view';
import { AppSettings } from 'app/app.constants';
import { SiblingService } from 'app/service/student-information-system/sibling.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import * as moment from 'moment';




@Component({
  selector: 'app-student-sibling',
  templateUrl: './student-sibling.component.html',
  styleUrls: ['./student-sibling.component.scss'],
  providers: [SiblingService]
})
export class StudentSiblingComponent extends CommonComponent implements OnInit {
  tabSettings: {};
  rows: Array<any>;
  studentCols: any[];
  pageCnt: number;
  totalItems: number;
  subscription: Subscription;
  siblingStudentView: SiblingStudentView;
  studentSearchView: StudentSearchView;
  currentComponent = 'StudentSiblingComponent';
  studentIds: any[];
  @Output() siblingIds: EventEmitter<any> = new EventEmitter<any>();
  @Input() currentStudentId: any;
  siblingSearchForm: FormGroup;
  custRowsPerPageOptions: any[];
  validate: boolean;

  constructor(public commonService: CommonService, private siblingService: SiblingService, public dialog: MatDialog,  public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {

    this.siblingSearchForm = new FormGroup({
      studentName: new FormControl(''),
      admissionNumber: new FormControl()
    });

    // Student Sibling Columns
    this.studentCols = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'className', header: 'Class', sort: true, },
      { field: 'sectionName', header: 'Section', sort: true },
      { field: 'admissionNumber', header: 'admissionNumber', sort: true },
      { field: 'dateOfBirth', header: 'dateofbirth', sort: true },
    ];
    this.tabSettings = {
      rows: [],
      columns: this.studentCols,
      model: this.studentSearchView,
      componentName: this.currentComponent,
      isSelectRowRequired: true,
      padding: true,
      hideHeader: true,
    };

    this.studentSearchView = {
      sortBy: 'Name',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
    this.siblingSearch(this.studentSearchView);
  }
  tableData(_event: StudentSearchView): void {
    this.studentSearchView = _event;
    this.siblingSearch(this.studentSearchView);
  }
  siblingSearch(event: any): void {    
    this.validate = true;
        this.studentSearchView.studentName = this.siblingSearchForm.value.studentName;
        this.studentSearchView.admissionNumber = this.siblingSearchForm.value.admissionNumber;
        this.siblingService.studentDetails(
          this.studentSearchView.studentName,
          this.studentSearchView.admissionNumber,
          this.currentStudentId,
          this.studentSearchView.sortBy, this.studentSearchView.sortOrder, this.studentSearchView.pageNumber, this.studentSearchView.pageSize).subscribe((responce: any) =>
            this.studentDetailsRes(responce), error => {
              this.errorResponse(error);
            });
  }
  studentDetailsRes(data: any): void {
    
    this.custRowsPerPageOptions = [];
    if (!data.siblingStudentDetailsView) {
      this.rows = [];
      this.studentIds = [];
      this.siblingIds.emit(this.studentIds);
    }
    else {
      this.rows = data.siblingStudentDetailsView.list;
      this.studentIds = [];
      this.rows.forEach(row => {
        row.dateOfBirth = this.getFormattedDateBySchoolDateFormat(row.dateOfBirth);
        if (row.isCheck) {
          this.studentIds.push(row.id);
        }
      });
      this.siblingIds.emit(this.studentIds);
      this.totalItems = data.siblingStudentDetailsView.totalItems;
    }

    if (data.siblingStudentDetailsView) {
      this.studentSearchView.pageNumber = data.siblingStudentDetailsView.pageNumber;
    }
    this.tabSettings = {
      columns: this.studentCols,
      model: this.studentSearchView,
      rows: this.rows,
      componentName: this.currentComponent,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      padding: true,
      hideHeader: true,
    };
  }
  // Selected Student siblings Ids
  selectedRows(data: any): void {
    this.studentIds = [];
    for (let index = 0; index < data.length; index++) {
      this.studentIds.push(data[index].id);
    }
    this.siblingIds.emit(this.studentIds);
  }
}
