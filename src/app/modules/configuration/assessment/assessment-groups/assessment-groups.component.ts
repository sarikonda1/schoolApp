import { Component, OnInit, ViewChild } from '@angular/core';

import { AssessmentGroupsSearchview } from 'app/models/academics/assessment-groups-search-view';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { AssessmentGroupsViewModelAdd } from '../models/assessment-groups-view-model-add';
import { AssessmentGroupsViewModel } from '../models/assessment-groups-view-model';
import { AssessmentGroupsService } from 'app/service/assessment-service/api/assessment-groups.service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-assessment-groups',
  templateUrl: './assessment-groups.component.html',
  styleUrls: ['./assessment-groups.component.scss'],
  animations: fuseAnimations,
})
export class AssessmentGroupsComponent extends CommonComponent implements OnInit {

  /* validation message */
  doValidate: boolean;
  /* update button */
  updateBtn: boolean;
  /* form */
  assmentGrpForm: FormGroup;
  /* closing panel */
  closeAddPanel: boolean;
  /* initial search view form */
  assessmentGroupSearchView: AssessmentGroupsSearchview;
  dataLoaded = Promise.resolve(false);
  /* array of ids for storing ids */
  arryOfIds: Array<any> = [];
  _assessmentGroupsViewModelAdd: AssessmentGroupsViewModelAdd;
  _assessmentGroupsViewModelEdit: AssessmentGroupsViewModel;

  /* refernces for ng prime table */
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  isValidRight: any;
  _assmentGrp: any;
  selectAll: boolean;
  disableSubmitBtn = false;
  tempData: any[]; /* temparory storage of data */
  assessmentGroupIds: Array<any> = [];
  /* var for store clicked row details */
  details: any;
  /* return http status codes */
  httpStatus: any;
  _customDialogComponent: CustomDialogComponent;
  /* var for failed records id's */
  failedRecords_Ids: Array<any> = [];
  @ViewChild('assessmentgroupForm') assessmentgroupForm;
  isEdit: boolean;
  currentComponent = 'AssessmentGroupsComponent';
  constructor(private assessmentGroupsService: AssessmentGroupsService,
     public dialog: MatDialog, public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
    this.httpStatus = require('http-status-codes');

  }

  ngOnInit(): void {

    /* initializing the form with initial serach */
    this.assessmentGroupSearchView = {
      sortBy: '',
      name: [],
      sortOrder: AppSettings.SORTORDER,
      failedRecords: [],
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.assessmentGroupSearchView = modelTableComponent;
    }
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.assessmentGroupSearchView,
      tablename: 'Assessment Groups',
      componentName: this.currentComponent,
    };

    /* initializing table columns */
    this.cols = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'actions', header: 'Actions' },
    ];

    /* initializing form with validations */
    this.assmentGrpForm = new FormGroup({
      id: new FormControl(''),
      assessmentGroupName: new FormControl('', [Validators.required, Validators.maxLength(45)])
    });
    /* initializing viewmodel for update from */
    this._assessmentGroupsViewModelEdit = ({
      id: '',
      name: ''
    });
    /* initializing viewmodel for update add */
    this._assessmentGroupsViewModelAdd = ({
      name: ''
    });
    this.failedRecords_Ids = [];
    /* on page_load get call to server */
    this.getAllAssessmentGroups(this.assessmentGroupSearchView);
  }

  /* fetched records response from server */
  assessmentGroupsRes(data: any): void {

    this.selectAll = false;
    if (!data.assessmentGroupsViewModel) {
      this.rows = [];
    } else {
      this.rows = data.assessmentGroupsViewModel.list;
      this.totalItems = data.assessmentGroupsViewModel.totalItems;
    }
    const testoperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT_ICON,
        operationName: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON,
        operationName: AppSettings.DELETE
      },
    ];

    this.rows.forEach(e => {
      e.operations = testoperations;
    });
    this.failedRecords_Ids = [];
    if (data.assessmentGroupsViewModel) {
      this.assessmentGroupSearchView.pageNumber = data.assessmentGroupsViewModel.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.assessmentGroupSearchView,
      rows: this.rows,
      tablename: 'Assessment Groups',
      componentName: this.currentComponent,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      /* header level initialazation */
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Assessment Groups'
        },
        addingForm: {
          required: true,
          btnName: 'New Assessment Group'
        }
      }
    };
  }

  /* get call for searched data based on table actions */
  getAllAssessmentGroups(searchview: any): void {

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.assessmentGroupSearchView = modelTableComponent;
    }
    this.assessmentGroupsService.fetchAssessmentGroups(searchview.sortBy,
       searchview.names, searchview.sortOrder, this.failedRecords_Ids, searchview.pageNumber, searchview.pageSize).subscribe(data => this.assessmentGroupsRes(data), error => {
      // this.disbleSubmitBtn = false;
      // this.errorResponse(error);
    });
  }


  /* row based actions edit& delete */
  rowActions(actionType: any): void {
    /* edit row based action */
    if (actionType.operation === AppSettings.EDIT) {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.updateBtn = true;
      this.details = actionType.clickedRow;
      this.assmentGrpForm.controls['id'].setValue(this.details.id);
      this.assmentGrpForm.controls['assessmentGroupName'].setValue(this.details.name);
    }
    /* delete row based action */
    if (actionType.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.arryOfIds.push(actionType.clickedRow.id);
          this.assessmentGroupsService.dropAssessmentGroups(this.arryOfIds).subscribe(res => this.response(res)
            ,
            error => {
              this.errorResponse(error);
            });
        }
      });
    }
  }

  /* close form for cancel click */
  closeAddForm(): void {
    this.closeAddPanel = true;
    this.updateBtn = false;
  }

  /* open panel for add */
  addForm(): void {
    this.assessmentgroupForm.resetForm();
    this.isEdit = false;
    this.updateBtn = false;
    this.closeAddPanel = false;
  }

  /* close & reset the form */
  cancel(): void {
    this.assessmentgroupForm.resetForm();
    this.doValidate = false;
    this.closeAddPanel = true;
    this.updateBtn = false;
  }

  /* multi-delete action */
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
        this.assessmentGroupsService.dropAssessmentGroups(this.assessmentGroupIds).subscribe(result => {
          this.response(result);
        }, error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this.failedRecords_Ids = (error.error.failedRecords);
          }
          this.errorResponse(error);
          this.getAllAssessmentGroups(this.assessmentGroupSearchView);
        });
      }
    });

  }


  /* based on selection delete icon will appear & pushing,clearing id's in array*/
  selectedRows(data: any): void {
    if (data.length > 0) {
      this.assessmentGroupIds = [];
      for (let index = 0; index < data.length; index++) {
        this.assessmentGroupIds.push(data[index].id);
      }
      this.selectAll = true;
    }
    else {
      this.assessmentGroupIds = [];
      this.selectAll = false;
    }
  }


  /* response from server from all requsets*/
  response(data: any): void {
    this.disableSubmitBtn = false;
    this.assessmentGroupIds = [];
    this.selectAll = false;
    this.closeAddPanel = false;
    if (data.statusCode === this.httpStatus.OK) {
        this.assessmentgroupForm.resetForm();
        this.closeAddPanel = true;
        if (this.isEdit === false) {
          this.updateBtn = false;
        }
        else {
          this.updateBtn = true;
        }
      this.getAllAssessmentGroups(this.assessmentGroupSearchView);
    }
    else {
          this.closeAddPanel = false;
          this.updateBtn = true;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }


  /* form submit */
  submitAssesmentGroupForm(assmentGrpForm_: any): void {
    if (assmentGrpForm_.invalid) {
      this.doValidate = true;
      return;
    }
    else {
      this.disableSubmitBtn = true;
    }
    /* if form in invalid status */
    if (this.assmentGrpForm.invalid) {
      this.doValidate = true;
      return;
    }
    else {
      if (this.isEdit === true) {
        /* edit functionality */
        // this.disableSubmitBtn = false;
        this.assessmentGroupsService.editAssessmentGroups(this.assmentGrpForm.controls.assessmentGroupName.value, 
          this.assmentGrpForm.controls.id.value).subscribe(data => this.response(data), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        /* add functionality */
        // this.disableSubmitBtn = false;
        this.doValidate = false;
        this.assessmentGroupsService.createAssessmentGroups(assmentGrpForm_.value.assessmentGroupName).subscribe(data => this.response(data), error => {
          this.disableSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }
}
