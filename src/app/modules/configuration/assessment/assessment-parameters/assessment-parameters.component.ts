import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppSettings } from 'app/app.constants';
import * as HttpStatus from 'http-status-codes';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

import { AssessmentParameterService } from 'app/service/assessment-service/api/assessment-parameters.service';
import { CommonService } from 'app/service/common.service';
import { AssessmentParameterViewModel } from 'app/models/academics/assessment-parameter-view-model';
import { CommonComponent } from 'app/shared/common/common.component';
import { AssessmentGroupsViewModelAdd } from '../models/assessment-groups-view-model-add';
import { AssesmentParameterEditView } from '../models/assesment-parameter-edit-view';

@Component({
  selector: 'app-assessment-parameters',
  templateUrl: './assessment-parameters.component.html',
  styleUrls: ['./assessment-parameters.component.scss'],
  providers: [AssessmentParameterService],
})

export class AssessmentParametersComponent extends CommonComponent implements OnInit {

  // references for View Model
  _assessmentParameterView: AssesmentParameterEditView;
  _assessmentParameterDataView: AssessmentGroupsViewModelAdd;
  _assessmentParameterViewModel: AssessmentParameterViewModel;

  @ViewChild('assessment') myForm;
  dataLoaded = Promise.resolve(false);

  // variable for storing student data
  studentData: any;

  // error variable for checking user form
  userFormSubmitted = false;
  isEdit = false;
  updateBtn = false;
  closeAddPanel = false;

  // refernces for ng prime table
  tabSettings: {};
  operation: any;
  rows: Array<any>;
  cols: any[];
  totalItems: number;
  filterRowData: any = [];
  assessmentCategoriesList: Array<any> = [];
  assessmentGroupsList: Array<any> = [];
  modelname: any;
  currentComponent = 'AssessmentParametersComponent';
  preSelectIds: any[];
  selectedIdsList: any[];

  constructor(private commonComponent: CommonComponent, private formBuilder: FormBuilder,
     public dialogRef: MatDialog, public commonService: CommonService, private assessmentParameterService: AssessmentParameterService, public snackBar: MatSnackBar) {
    super();
  }
  userForm = this.formBuilder.group({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(90)]),
  });

  ngOnInit(): void {
    this._assessmentParameterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    // Table Columns
    this.cols = [
      { field: 'name', header: 'assessmentparameter', sort: true },
      { field: 'actions', header: 'Actions' },
    ];

    // tabSettings
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this._assessmentParameterViewModel,
      tablename: 'Assessment Parameters',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this._assessmentParameterViewModel = modelTableComponent;
    }
    // calling of Assessment Parameter Details
    this.assessmentParametersList();
  }

  // getting all Assessment Parameter Details
  assessmentParametersList(): void {
    this.assessmentParameterService.getAllAssessmentParametersList(this._assessmentParameterViewModel.names,
      this._assessmentParameterViewModel.sortOrder,
      this._assessmentParameterViewModel.sortBy,
      this.preSelectIds,
      this._assessmentParameterViewModel.pageNumber,
      this._assessmentParameterViewModel.pageSize).subscribe(res => { this.parameterDetailsResponse(res); },
        error => {
          this.errorResponse(error);
        });
  }

  // Response of Assessment Parameter details
  parameterDetailsResponse(res: any): void {
    if (!res.pagedAssesmentParameterView) {
      this.rows = [];
      this.totalItems = 0;
    } else {
      this.rows = res.pagedAssesmentParameterView.list;
      this.totalItems = res.pagedAssesmentParameterView.totalItems;
      this.rows.forEach(e => {
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
      this.preSelectIds = [];

    }

    if (res.pagedAssesmentParameterView) {
      this._assessmentParameterViewModel.pageNumber = res.pagedAssesmentParameterView.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this._assessmentParameterViewModel,
      rows: this.rows,
      tablename: 'Assessment Parameter',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      isPaginationRequired: true,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      totalRowsCount: this.totalItems,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Assessment Parameters'
        },
        addingForm: {
          required: true,
          btnName: 'New Assessment Parameter'
        },
      },
      filtersList: res.filters,
    };
  }

  // calling cancel method for closing panel and reset values
  cancel(): void {
    this.myForm.resetForm();
    this.updateBtn = false;
    this.isEdit = false;
    this.closeAddPanel = true;
  }
  // End

  // calling edit and delete actions in table
  rowActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      // calling delete confirmation 
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const actionClickedId: Array<string> = [event.clickedRow.id];
          this.deleteAssessmentParameter(actionClickedId, false);
        }
      });
    }
    // calling edit confirmation
    if (event.operation === AppSettings.EDIT) {
      this.closeAddPanel = false;
      this.updateBtn = true;
      this.assessmentParameterService.getAssesmentParameter(event.clickedRow.id).subscribe(res => this.editResponse(res), error => {
        // this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
    }
  }

  // Response of get Assessment Parameter Details By Id
  editResponse(data: any): void {
    this.isEdit = true;
    this.updateBtn = true;
    this.studentData = data.assessmentParameterView;
    this.userForm.controls['id'].setValue(this.studentData.id);
    this.userForm.controls['name'].setValue(this.studentData.name);
  }

  // delete Response
  deleteResponse(response: any): void {
   this.assessmentParametersList();
   this.openSnackBar(response.messages.ResultMessage);
  }
  onAddFormClick(): void {
    this.closeAddPanel = false;
  }

  // calling for create and update assessment parameter 
  onSubmit(ngForm: any): boolean {
    if (ngForm.status === AppSettings.VALID) {
      this.userFormSubmitted = false;
      if (this.isEdit === false) {
        this._assessmentParameterDataView = ngForm.value;
        this.assessmentParameterService.addAssesmentParameter(this._assessmentParameterDataView).subscribe(res => this.responseData(res), error => {
          this.errorResponse(error);
        });
      }
      else {
        this._assessmentParameterView = ngForm.value;
        this.assessmentParameterService.updateAssesmentParameter(this._assessmentParameterView).subscribe(res => this.responseData(res), error => {
          this.errorResponse(error);
        });
      }
    }
    else {
      this.userFormSubmitted = true;
      return false;
    }
  }

  // Create and Update Response of Assessment Parameter
  responseData(data: any): void {
    if (data.statusCode === HttpStatus.OK) {
      this.assessmentParametersList();
      this.cancel();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }

  selectedRows(_event: Array<any>): void {
    this.selectedIdsList = _event.length ? _event.map(x => x.id) : [];
  }

  deleteWarning(): void {
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.deleteAssessmentParameter(this.selectedIdsList, true);
      }
    });
  }

  deleteAssessmentParameter(selectedIds: Array<string>, isMultiDelete: boolean): void {
    this.assessmentParameterService.deleteAssesmentParameter(selectedIds).subscribe(response => {
      if (response.statusCode === HttpStatus.OK) {
        this.selectedIdsList = [];
        this.openSnackBar(AppSettings.RECORD_DELETED);
      }
      else {
        if (isMultiDelete) {
          this.preSelectIds = response.failedRecords;
        }
        this.openSnackBar(response.messages.ResultMessage);
      }
      this.assessmentParametersList();
    }, error => {
      if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
        if (isMultiDelete) {
          this.preSelectIds = (error.error.failedRecords);
        }
      }
      this.errorResponse(error);
      this.assessmentParametersList();
    });
  }
  tableData(_event: any): void {
    this._assessmentParameterViewModel = _event;
    this.assessmentParametersList();
  }
  // End
}

