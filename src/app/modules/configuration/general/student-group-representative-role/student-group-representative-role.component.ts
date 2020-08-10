import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';
// import { ChangeDetectionStrategy } from '@angular/core';

import { GetAllStudentGroupRepRoles } from 'app/models/academics/get-all-student-group-rep-roles';
import { StudentGroupRepRoleViews } from 'app/models/academics/student-group-rep-role-view';
import { SchoolRepRoleView } from 'app/models/academics/school-rep-role-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { StudentGroupRepRoleView } from 'app/models/academics/student-group-rep-view';
import { CommonComponent } from 'app/shared/common/common.component';
import { StudentGroupRepRoleService } from 'app/service/general/api/student-group-rep-role.service';

@Component({
  selector: 'app-student-group-representative-role',
  templateUrl: './student-group-representative-role.component.html',
  styleUrls: ['./student-group-representative-role.component.scss'],
  providers: [CommonComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentGroupRepresentativeRoleComponent extends CommonComponent implements OnInit {
  @ViewChild('addRepRef') addTemplateRef;
  @ViewChild('repForm') uForm;

  // models declaration
  getAllStudentGroupRepRoles: GetAllStudentGroupRepRoles;
  studentGroupRepRoleIdsView: StudentGroupRepRoleViews;
  schoolRepRoleView: SchoolRepRoleView;
  studentGroupRepRoleView: StudentGroupRepRoleView;

  // variable declaration
  userForm: FormGroup;
  coloumns: { field: string; header: string; sort: boolean; }[];
  studentGroupRepRoles: any;
  totalItems: any;
  rows: any = [];
  pageCount: any;
  studentGroupRepRoleIds: any = [];
  tempData: any = [];
  repRoleIds: any = [];
  schoolId: any;
  tabSettings: {};
  repRoleDetails: any = [];
  nonDeletedIds: any = [];

  // boolean variable declaration
  buttonShow: boolean;
  selectAll: boolean;
  closeAddPanel = false;
  updateButtonShow: boolean;
  doValidate: boolean;
  dataLoaded: Promise<boolean>;
  failedRecords: any;
  repRoleId: any;
  disableSubmitBtn = false;
  currentComponent = 'StudentGroupRepresentativeRoleComponent';
  // multiSelect : boolean = false;

  constructor(private studentGroupRepRoleService: StudentGroupRepRoleService,
    public dialog: MatDialog, public commonService: CommonService,
    private common: CommonComponent, public snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    // if (localStorage.getItem(this.currentComponent)) {
    // this.getAllStudentGroupRepRoles = JSON.parse(localStorage.getItem((this.currentComponent)));
    // }
    this.getAllStudentGroupRepRoles = {
      sortBy: AppSettings.ID,
      names: [],
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      failedRecords: this.failedRecords
    };
    this.schoolRepRoleView = {
      id: '',
      name: ''
    };
    this.studentGroupRepRoleView = {
      id: '',
      name: ''
    };
    this.studentGroupRepRoleIdsView = {
      studentRepRoleIds: [],
    };
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
    });
    // Table Colums
    this.coloumns = [
      { field: 'name', header: this.commonService.getTranslation(AppSettings.Student_Group_Representative_Roles), sort: true },
      { field: 'actions', header: this.commonService.getTranslation(AppSettings.ACTION), sort: false },
    ];
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.getAllStudentGroupRepRoles = modelTableComponent;
    }
    this.tabSettings = {
      rows: this.studentGroupRepRoles,
      columns: this.coloumns,
      model: this.getAllStudentGroupRepRoles,
      tablename: 'Student Group Representative Roles',
      componentName: this.currentComponent,
    };

    this.getStudentGroupRepRoles(this.getAllStudentGroupRepRoles);
  }

  // method for get all student group representative roles
  getStudentGroupRepRoles(getAllStudentGroupRepRoles: GetAllStudentGroupRepRoles): void {
    this.getAllStudentGroupRepRoles = getAllStudentGroupRepRoles;
    this.getAllStudentGroupRepRoles.failedRecords = this.failedRecords;
    this.studentGroupRepRoleService.getAllStudentGroupRepRoles(this.getAllStudentGroupRepRoles.sortBy,
      this.getAllStudentGroupRepRoles.names, this.getAllStudentGroupRepRoles.sortOrder, this.getAllStudentGroupRepRoles.failedRecords,
      this.getAllStudentGroupRepRoles.pageNumber, this.getAllStudentGroupRepRoles.pageSize).
      subscribe(res => {
        this.getStudentRepRolesResponse(res); this.dataLoaded = Promise.resolve(true);
      }, error => {
        this.errorResponse(error);
      });
  }

  // get data response
  getStudentRepRolesResponse(data: any): void {
    this.studentGroupRepRoles = [];
    this.failedRecords = [];
    if (this.failedRecords === []) {
      this.selectAll = false;
    }
    if (data.statusCode === HttpStatus.OK && data.studentGroupRepRoles) {
      this.studentGroupRepRoles = data.studentGroupRepRoles.list;
      this.totalItems = data.studentGroupRepRoles.totalItems;
      this.studentGroupRepRoles.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT

          }, {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          }
        ];
      });
    }
    else {
      this.rows = [];
    }
    if (data.studentGroupRepRoles) {
      this.getAllStudentGroupRepRoles.pageNumber = data.studentGroupRepRoles.pageNumber;
    }
    this.tabSettings = {
      columns: this.coloumns,
      model: this.getAllStudentGroupRepRoles,
      rows: this.studentGroupRepRoles,
      tablename: 'Student Group Representative Roles',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCount,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Student Group Representative Roles'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        }
      },
      filtersList: data.filters
    };
  }

  // method for row action for displayed student group rep roles based on the action to perform the opertion like edit,delete
  rowActions(data: any): void {
    this.repRoleIds = [];
    this.repRoleIds.push(data.clickedRow.id);
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.studentGroupRepRoleService.deleteStudentGroupRepRoles(this.repRoleIds).
            subscribe(res => this.deleteStudentGroupRepRolesResponse(res, false), error => {
              this.errorResponse(error);
            });
        }
      });
    }
    else if (data.operation === AppSettings.EDIT) {
      this.updateButtonShow = true;
      this.closeAddPanel = false;
      this.repRoleId = data.clickedRow.id;
      this.studentGroupRepRoleService.getStudentGroupRepRole(this.repRoleId).subscribe(res => this.getStudentGroupRepRolesResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }
  getStudentGroupRepRolesResponse(data: any): void {
    this.repRoleDetails = [];
    this.repRoleDetails.push(data.schoolGroupRepRoleView[0]);
    this.userForm.controls['id'].setValue(this.repRoleDetails[0].id);
    this.userForm.controls['name'].setValue(this.repRoleDetails[0].name);
  }

  // method for adding studentgroup representative role
  onSubmit(userForm: any): void {
    this.doValidate = true;
    if (this.userForm.invalid) {
      return;
    }
    else {
      this.disableSubmitBtn = true;
    }
    this.schoolRepRoleView.name = userForm.value.name;
    if (userForm.status === AppSettings.VALID) {
      if (!userForm.value.id) {
        this.studentGroupRepRoleService.createStudentGroupRepRole(this.schoolRepRoleView).
          subscribe(res => this.repRoleResponse(res), error => {
            this.disableSubmitBtn = false;
            this.errorResponse(error);
          });
      }
      else {
        this.studentGroupRepRoleView.id = userForm.value.id;
        this.studentGroupRepRoleView.name = userForm.value.name;
        this.studentGroupRepRoleService.updateStudentGroupRepRole(this.studentGroupRepRoleView).
          subscribe(res => this.repRoleResponse(res), error => {
            this.disableSubmitBtn = false;
            this.errorResponse(error);
          });
      }
    }
  }

  // add response
  repRoleResponse(data: any): void {
    this.disableSubmitBtn = false;
    if (data.statusCode === HttpStatus.OK) {
          this.dialog.closeAll();
          this.userForm.reset();
          this.uForm.resetForm();
          this.closeAddPanel = true;
          this.doValidate = false;
          this.getStudentGroupRepRoles(this.getAllStudentGroupRepRoles);
    }
    else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }

  // method for delete student group representative role
  deleteAll(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: {
        text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
        action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
      },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.studentGroupRepRoleService.deleteStudentGroupRepRoles(this.studentGroupRepRoleIds).
          subscribe(res => this.deleteStudentGroupRepRolesResponse(res, true), error => {
            if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
              this.failedRecords = (error.error.failedRecords);
            }
            this.errorResponse(error);
            this.getStudentGroupRepRoles(this.getAllStudentGroupRepRoles);
          });
      }
    });
  }

  // method for delete response
  deleteStudentGroupRepRolesResponse(data: any, multiSelect: boolean): void {
    this.selectAll = false;
    this.dialog.closeAll();
    this.closeAddPanel = true;
    if (multiSelect) {
      this.failedRecords = data.failedRecords;
    }
    this.getStudentGroupRepRoles(this.getAllStudentGroupRepRoles);
    this.openSnackBar(data.messages.ResultMessage);
  }

  selectedRows(data: any): void {
    this.studentGroupRepRoleIds = [];
      for (let index = 0; index < data.length; index++) {
        this.studentGroupRepRoleIds.push(data[index].id);
      }
  }

  // method for open the panel
  onAddFormClick(): void {
    this.uForm.resetForm();
    this.closeAddPanel = false;
    this.updateButtonShow = false;
  }

  // method for close the panel
  closeAddForm(): void {
    this.userForm.reset();
    this.closeAddPanel = true;
    this.doValidate = false;
    this.uForm.resetForm();
  }

}


