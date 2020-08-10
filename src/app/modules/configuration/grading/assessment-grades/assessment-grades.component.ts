import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';

import { AssessmentGradeParametersView, AssessmentGradeConfigurationView, AssessmentGradeView } from '../../../../models/grading/models';
import { AppSettings } from '../../../../app.constants';
import { CommonComponent } from '../../../../shared/common/common.component';
import { GradeSetupService } from '../../../../service/grading-service/api/grade-setup.service';
import { CommonService } from '../../../../service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from '../../../../shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-assessment-grades',
  templateUrl: './assessment-grades.component.html',
  styleUrls: ['./assessment-grades.component.scss']
})
export class AssessmentGradesComponent extends CommonComponent implements OnInit {

  @ViewChild('addAssessmentGradeTemplate') addAssessmentGradeTemplate;
  @ViewChild('assessmentGrade') myAssessmentGradeForm;

  assessmentGradeParameters: AssessmentGradeParametersView;
  assessmentGradeConfigurationView: AssessmentGradeConfigurationView;
  assessmentGradeView: AssessmentGradeView;
  assessmentgradeForm: FormGroup;
  assessmentGradeFormSubmitted = true;

  closeAddPanel = false;
  isUpdateData = false;
  currentComponent = 'AssessmentGradesComponent';
  cols: any[];
  tabSettings: {};
  rows: Array<any>;
  totalItems: number;
  pageCnt: number;
  custRowsPerPageOptions: Array<number> = [];
  errorMessages: any;
  errorsList: Array<any> = [];
  assessmentGradeDetails: any;
  disbleSubmitBtn = false;
  buttonName: any;

  constructor(private gradeSetupService: GradeSetupService, public commonService: CommonService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.assessmentGradeParameters = {
      sortBy: '',
      sortOrder: 0,
      gradeIndicator: [],
      evaluation: [],
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.assessmentGradeParameters = modelTableComponent;
    }

    this.cols = [
      { field: 'gradeIndicator', header: 'Grade', sort: true },
      { field: 'evaluation', header: 'Evaluation', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.assessmentGradeParameters,
      tablename: 'Assessment Grades',
      componentName: this.currentComponent
    };
    this.commonService.getTableLSObj(this.tabSettings);
    this.getAssessmentGrades(this.assessmentGradeParameters);

    // initialization of form controls in form group
    this.assessmentgradeForm = new FormGroup({
      gradeIndicator: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      evaluation: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    });
  }

  //  list of assessment grade Configurations
  getAssessmentGrades(assessmentGradeParams: AssessmentGradeParametersView): void {
    this.assessmentGradeParameters = assessmentGradeParams;
    this.gradeSetupService.assessmentGrades(assessmentGradeParams.gradeIndicator,
    assessmentGradeParams.evaluation, assessmentGradeParams.sortBy, assessmentGradeParams.sortOrder,
    assessmentGradeParams.pageNumber, assessmentGradeParams.pageSize).subscribe(res => { this.getAssessmentGradesData(res); }, error => {
      this.errorResponse(error);
    });
  }

  getAssessmentGradesData(gradesData: any): void {
    if (!gradesData.searchAssessmentGradeData) {
      this.rows = [];
    } else {
      this.rows = gradesData.searchAssessmentGradeData.list;
      this.totalItems = gradesData.searchAssessmentGradeData.totalItems;
    }

    const assessmentGradeOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];

    this.rows.forEach(e => {
      e.operations = assessmentGradeOperations;
    });

    if (gradesData.searchAssessmentGradeData) {
      this.assessmentGradeParameters.pageNumber = gradesData.searchAssessmentGradeData.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.assessmentGradeParameters,
      rows: this.rows,
      tablename: 'Assessment Grades',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,

      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Assessment Grades'
        },
      },
      filtersList: gradesData.filters
    };
  }
  // End

  // to open the add form(reset things)
  addForm(): void {
    this.closeAddPanel = false;
    this.assessmentgradeForm.reset();
    this.myAssessmentGradeForm.resetForm();
    this.isUpdateData = false;
    this.buttonName = AppSettings.SUBMIT;
  }
  // End

  // to add/update of assement grade
  addUpdateAssessmentGrade(assessmentGrade: any): void {
    this.assessmentGradeFormSubmitted = true;
    if (this.assessmentgradeForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      if (this.isUpdateData === true) {
        this.buttonName = AppSettings.UPDATE;
        this.assessmentGradeConfigurationView = assessmentGrade.value;
        this.assessmentGradeConfigurationView.id = this.assessmentGradeDetails.id;

        this.gradeSetupService.updateAssessmentGrades(this.assessmentGradeConfigurationView).subscribe(res => this.updateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      } else {
        this.buttonName = AppSettings.SUBMIT;
        this.assessmentGradeView = assessmentGrade.value;
        this.gradeSetupService.createAssessmentGrades(this.assessmentGradeView).subscribe(res =>
          this.addResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      }
    }
  }

  // response after add data of assessment grades
  addResponse(response: any): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
          if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
            this.closeAddPanel = false;
          } else {
            this.closeAddPanel = true;
            this.getAssessmentGrades(this.assessmentGradeParameters);
            this.assessmentgradeForm.reset();
            this.myAssessmentGradeForm.resetForm();
            this.isUpdateData = false;
          }
    } else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // response of assessment grade after update data
  updateResponse(response: any): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
          if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
            this.closeAddPanel = false;
          } else {
            this.closeAddPanel = true;
            this.getAssessmentGrades(this.assessmentGradeParameters);
            this.assessmentgradeForm.reset();
            this.isUpdateData = false;
          }
    } else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End


  // onCancelClick
  onCancelClick(): void {
    this.assessmentgradeForm.reset();
    this.myAssessmentGradeForm.resetForm();
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.assessmentGradeFormSubmitted = false;
    this.disbleSubmitBtn = false;
  }
  // End

  // row-wise actions of the table(edit/delete)
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.buttonName = AppSettings.UPDATE;
      this.isUpdateData = true;
      this.closeAddPanel = false;
      this.gradeSetupService.assessmentGradesById(response.clickedRow.id)
        .subscribe(res => this.assessmentGradesByIdValue(res), error => {
          this.errorResponse(error);
        });
    }

    if (response.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.gradeSetupService.deleteAssessmentGrades(response.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }
  // End

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.getAssessmentGrades(this.assessmentGradeParameters);
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }
  // End

  // to set assessment grades data to form after edit click
  assessmentGradesByIdValue(gradeData: any): void {
    if (gradeData.assessmentGradeConfigurationView != null) {
      this.assessmentgradeForm.controls['gradeIndicator'].setValue(gradeData.assessmentGradeConfigurationView.gradeIndicator);
      this.assessmentgradeForm.controls['evaluation'].setValue(gradeData.assessmentGradeConfigurationView.evaluation);

      this.assessmentGradeDetails = gradeData.assessmentGradeConfigurationView;
    } else {
       this.openSnackBar(gradeData.messages.ResultMessage, true);
    }
  }
  // End

}
