import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GroupView } from '../model/group-view';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppSettings } from 'app/app.constants';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentGroupService } from 'app/service/student-group/student-group.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';
import { AcademicSessionService } from 'app/service/academic-service';

@Component({
  selector: 'app-student-group-details',
  templateUrl: './student-group-details.component.html',
  styleUrls: ['./student-group-details.component.scss']
})
export class StudentGroupDetailsComponent extends CommonComponent implements OnInit {

  studentGroupDetails: GroupView;
  custRowsPerPageOptions: any[];
  rows: any[];
  totalItems: any;
  cols: any;
  tabSettings: any;
  pageCnt: any;
  studentGroupTemplate: any;
  groupId: any;
  HttpStatus: any;
  studentGroupsDetailsList: any;
  loadAsync = Promise.resolve(false);
  profileImage: any;
  year: string;
  academicSessions: any[] = [];
  currentAcademicSessionId: any;
  currentAcademicSession: any;
  selectedIndex: number;
  color: any;
  selectedAsIndex: any;
  currentComponent = 'StudentGroupDetailsComponent';
  constructor(private academicSessionService: AcademicSessionService, private _fb: FormBuilder, private studentGroupService: StudentGroupService,
    public commonService: CommonService,
    private route: ActivatedRoute, public dialog: MatDialog, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer, private storeService: StoreService,
    private router: Router, public snackBar: MatSnackBar) {
    super();
    this.studentGroupDetails = {
      studentGroupId: '',
      representatives: [],
      studentName: [],
      staffName: [],
      schoolAcademicSessionId: 0,
      sortBy: '',
      sortOrder: AppSettings.DEFAULT_SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.currentAcademicSession = JSON.parse(localStorage.getItem('_as'));
    this.getAcademicSession();
    this.HttpStatus = require('http-status-codes');
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.groupId = params.id;
        this.studentGroupDetails.studentGroupId = this.groupId;
        this.studentGroupService.getGroupsById(params.id)
          .subscribe(res => {
            this.response(res);
          }, error => {
            this.errorResponse(error);
          });
      }
    });
    this.cols = [
      { field: 'representatives', header: 'Representatives', sort: true },
      { field: 'studentName', header: 'Student Names', sort: true },
      { field: 'staffName', header: 'Staff Names', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];




    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.studentGroupDetails,
      componentName: this.currentComponent,
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.studentGroupDetails = modelTableComponent;
    }

  }
  response(data: any): void {
    if (data.statusCode === this.HttpStatus.OK) {
      this.studentGroupsDetailsList = data.studentGroupData;
      if (this.studentGroupsDetailsList) {
        this.color = this.studentGroupsDetailsList.color;
      }

      if (data.studentGroupData.attachment && data.studentGroupData.attachment.fileName) {
        this.profileImage = this.storeService.getFilePath(data.studentGroupData.attachment.fileName);
      }
      this.getStudentGroups(this.studentGroupDetails);
    }
  }

  // get data of student groups
  getStudentGroups(studentGroupDetails: GroupView, fromFilters = false): void {
    this.studentGroupDetails = studentGroupDetails;
    if (fromFilters){
      this.studentGroupDetails.schoolAcademicSessionId = this.academicSessions[this.selectedAsIndex].value;
    }
    if (!this.studentGroupDetails.schoolAcademicSessionId){
      return;
    }
    this.studentGroupService.getAssignedDetails(this.groupId,
      studentGroupDetails.representatives, studentGroupDetails.staffName, studentGroupDetails.studentName,
      this.studentGroupDetails.schoolAcademicSessionId,
      studentGroupDetails.sortBy, studentGroupDetails.sortOrder,
      studentGroupDetails.pageNumber, studentGroupDetails.pageSize).subscribe((res: any) => { this.getStudentGroupss(res); }, error => {
        this.errorResponse(error);
      });
  }

  // response of student group details
  getStudentGroupss(studentGroupsList: any): void {
    this.custRowsPerPageOptions = [];
    if (!studentGroupsList.studentGroupsDetails) {
      this.rows = [];
    } else {
      this.rows = studentGroupsList.studentGroupsDetails.list;
      this.totalItems = studentGroupsList.studentGroupsDetails.totalItems;
    }
    const studentGroupoperations = [
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON
      },
    ];
    this.rows.forEach(e => {
      e.operations = studentGroupoperations;
    });
    if (studentGroupsList.studentGroupsDetails) {
      this.studentGroupDetails.pageNumber = studentGroupsList.studentGroupsDetails.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.studentGroupDetails,
      rows: this.rows,
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      tabTable: true,
      padding: true,
      filtersList: studentGroupsList.filters
    };
    this.loadAsync = Promise.resolve(true);
    this.scrollIntoViewById('app-table');
  }

  rowActions(rowAction: any): void {
    if (rowAction.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.studentGroupService.deleteAssignRepresentatives(rowAction.clickedRow.studentGroupRepId).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }


  }

  // Delete Response
  deleteResponse(response: any): void {
    this.getStudentGroups(this.studentGroupDetails);
    this.openSnackBar(response.messages.ResultMessage);
  }

  goBack(): void {
    this.router.navigate([RouteConfig._Student_Groups]);
  }

  getAcademicSession(): void {
    // const currentSchool = JSON.parse(localStorage.getItem('_s'));
    this.academicSessionService.academicSessionAllAcademicSessionsBySchoolIdGet()
      .subscribe(
        response => {
          if (response.academicSessionView.length) {
            this.academicSessions = [];
            response.academicSessionView.forEach(element => {
              this.academicSessions.push({
                value: element.id,
                name: element.displayName,
                code: element.statusCode
              });
            });
            this.currentAcademicSession = JSON.parse(localStorage.getItem('_as'));
            if (this.currentAcademicSession){
              this.selectedAsIndex = this.academicSessions.findIndex(e => e.name === this.currentAcademicSession.name);
            }
            this.studentGroupDetails.schoolAcademicSessionId = this.currentAcademicSession.id;
            this.getStudentGroups(this.studentGroupDetails);
          }
        });
  }
  getSelectedAcademicSession(): any{
    if (this.academicSessions[this.selectedAsIndex] && this.academicSessions[this.selectedAsIndex].name){
      return this.academicSessions[this.selectedAsIndex].name;
    }
    return '';
  }
  onYearClick(isprevious = false): void {
    if (isprevious){
      this.selectedAsIndex--;
    } else{
      this.selectedAsIndex++;
    }
    this.currentAcademicSession = this.academicSessions[this.selectedAsIndex];
    if (this.currentAcademicSession){
      this.studentGroupDetails.schoolAcademicSessionId = this.currentAcademicSession.value;
    } 
    this.getStudentGroups(this.studentGroupDetails);
  }
}
