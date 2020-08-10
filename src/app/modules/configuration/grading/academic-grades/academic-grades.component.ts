import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import * as HttpStatus from 'http-status-codes';

import { AcademicGradeParamsView, GradeConfigurationView, AcademicGradeView } from '../../../../models/grading/models';
import { GradeSetupService } from '../../../../service/grading-service/api/grade-setup.service';
import { CommonService } from '../../../../service/common.service';
import { AppSettings, Pattern } from '../../../../app.constants';
import { CustomDialogComponent } from '../../../../shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from '../../../../shared/common/common.component';

@Component({
  selector: 'app-academic-grades',
  templateUrl: './academic-grades.component.html',
  styleUrls: ['./academic-grades.component.scss'],
})
export class AcademicGradesComponent extends CommonComponent implements OnInit {

  @ViewChild('addAcademicGradeTemplate') addAcademicGradeTemplate;
  @ViewChild('academicGrade') myAcademicGradeForm;

  academicgradeForm: FormGroup;
  academicGradeParameters: AcademicGradeParamsView;
  gradeConfigurationView: GradeConfigurationView;
  academicGradeView: AcademicGradeView;
  academicGradeFormSubmitted = true;
  schoolBoardsList: Array<any> = [];
  classesList: Array<any> = [];
  isSchoolBoards = false;
  sectionsList: Array<any> = [];
  custRowsPerPageOptions: Array<number> = [];
  academicDetails: any;
  rows: Array<any>;
  totalItems: number;
  pageCnt: number;
  cols: any[];
  tabSettings: {};
  classNames: Array<any> = [];
  sectionNames: Array<any> = [];
  selectAll = false;
  isDeleteAllRequired = false;
  closeAddPanel = false;
  isUpdateData = false;
  academicGradeIds: Array<string> = [];
  failedRecords: any = [];
  checkedRecords: any;
  filteredRecords: any;
  filterClasses: Array<any> = [];
  filterSections: Array<any> = [];
  errorMessages: any;
  errorsList: Array<any> = [];
  currentComponent = 'AcademicGradesComponent';
  disbleSubmitBtn = false;
  buttonName: any;

  constructor(private gradeSetupService: GradeSetupService, public commonService: CommonService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.academicGradeParameters = {
      sortBy: '',
      sortOrder: 0,
      gradeIndicator: [],
      highMark: [],
      lowMark: [],
      schoolBoardId: [],
      evaluation: [],
      classId: [],
      sectionId: [],
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.academicGradeParameters = modelTableComponent;
    }

    this.cols = [
      { field: 'gradeIndicator', header: 'Grade', sort: true },
      { field: 'lowMark', header: 'LowMark', sort: true },
      { field: 'highMark', header: 'HighMark', sort: true },
      { field: 'schoolBoard', header: 'School board', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'evaluation', header: 'Evaluation', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.academicGradeParameters,
      tablename: 'Academic Grades',
      componentName: this.currentComponent
    };
    this.commonService.getTableLSObj(this.tabSettings);

    this.getAcdademicGrades(this.academicGradeParameters);

    // initialization of form controls in form group
    this.academicgradeForm = new FormGroup({
      gradeIndicator: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      lowMark: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(100)]),
      highMark: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(100)]),
      evaluation: new FormControl('', Validators.maxLength(25)),
      schoolBoardId: new FormControl('', Validators.required),
      classId: new FormControl(''),
      sectionId: new FormControl(''),
    });
  }

  // get the list school boards
  getSchoolBoardsList(): void {
    this.schoolBoardsList = [];

    this.commonService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews.length) {
        this.isSchoolBoards = true;
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
        });
        this.setDefaultBoard();
      } else {
        this.isSchoolBoards = false;
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // on Selection of school board
  onSelectSchoolBoard(schoolBoard: any): void {
    this.classNames = [];
    this.sectionNames = [];
    this.academicgradeForm.controls['classId'].setValue('');
    this.academicgradeForm.controls['sectionId'].setValue('');


    this.commonService.schoolAcademicClasses(schoolBoard, null).subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classNames.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // on selection of class
  onSelectClass(data: any): void {
    if (data.value) {
      this.getSectionsBasedOnClass(data.value);
    } else {
      this.academicgradeForm.controls['sectionId'].setValue('');
      this.sectionNames = [];
    }
  }
  // End

  getSectionsBasedOnClass(classId: any): void {
    if (classId) {
      this.sectionNames = [];
      this.commonService.schoolAcademicClassSections(null, classId).subscribe(response => {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.sectionNames.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  // Get Sections to filter table data
  getSectionsList(): void {
    this.filterSections = [];
    this.commonService.schoolAcademicClassSections().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterSections.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  //  list of academic grade Configurations
  getAcdademicGrades(academicGradeParams: AcademicGradeParamsView): void {
    this.academicGradeParameters = academicGradeParams;
    this.gradeSetupService.academicGrades(academicGradeParams.gradeIndicator,
      academicGradeParams.highMark, academicGradeParams.lowMark, academicGradeParams.evaluation,
      academicGradeParams.classId, academicGradeParams.sectionId, academicGradeParams.schoolBoardId,
      academicGradeParams.sortBy, academicGradeParams.sortOrder, academicGradeParams.pageNumber,
      academicGradeParams.pageSize).subscribe(res => { this.getAcademicGradesData(res); }, error => {
        this.errorResponse(error);
      });
  }

  getAcademicGradesData(gradesData: any): void {
    if (!gradesData.searchAacademicGradeData) {
      this.rows = [];
    } else {
      this.rows = gradesData.searchAacademicGradeData.list;
      this.totalItems = gradesData.searchAacademicGradeData.totalItems;
    }

    const academicGradeOperations = [
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
      e.operations = academicGradeOperations;

    });
    if (gradesData.searchAacademicGradeData) {
      this.academicGradeParameters.pageNumber = gradesData.searchAacademicGradeData.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.academicGradeParameters,
      rows: this.rows,
      tablename: 'Academic Grades',
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
          text: 'Academic Grades'
        },
      },
      filtersList: gradesData.filters
    };
    this.getSchoolBoardsList();
  }
  // End

  // to open the add form(reset things)
  addForm(): void {
    this.closeAddPanel = false;
    this.isUpdateData = false;
    this.buttonName = AppSettings.SUBMIT;
  }
  // End

  // submit the data of academic grades
  addUpdateAcademicGrade(academicGradeForm: any): void {
    this.academicGradeFormSubmitted = true;
    if (academicGradeForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      if (this.isUpdateData === true) {
        this.buttonName = AppSettings.UPDATE;
        this.academicGradeView = academicGradeForm.value;
        this.academicGradeView.id = this.academicDetails.id;

        this.gradeSetupService.updateAcademicGrades(this.academicGradeView).subscribe(res => this.updateResponse(res),
          error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      } else {
        this.buttonName = AppSettings.SUBMIT;
        this.gradeConfigurationView = academicGradeForm.value;
        this.gradeSetupService.createAcademicGrades(this.gradeConfigurationView).subscribe(res => this.addResponse(res),
          error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      }
    }
  }
  // End

  // response after add data of academic grades
  addResponse(response): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      this.closeAddPanel = true;
      this.getAcdademicGrades(this.academicGradeParameters);
      this.clearForm();
      this.isUpdateData = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // response of academic grade after update data
  updateResponse(response): void {
    this.disbleSubmitBtn = false;
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      } else {
        this.closeAddPanel = true;
        this.getAcdademicGrades(this.academicGradeParameters);
        this.clearForm();
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
    this.clearForm();
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.academicGradeFormSubmitted = false;
    this.disbleSubmitBtn = false;
    this.sectionNames = [];
  }
  // End

  // row-wise actions of the table(edit/delete)
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.buttonName = AppSettings.UPDATE;
      this.isUpdateData = true;
      this.closeAddPanel = false;
      this.gradeSetupService.academicGradesById(response.clickedRow.id)
        .subscribe(res => this.academicGradesByIdValue(res),
          error => {
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
          this.gradeSetupService.deleteAcademicGrades(response.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }
  // End

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.getAcdademicGrades(this.academicGradeParameters);
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }
  // End
  // to set academic grades data to form after edit click
  academicGradesByIdValue(gradeData: any): void {
    if (gradeData.academicGradeView != null) {
      this.onSelectSchoolBoard(gradeData.academicGradeView.schoolBoardId);
      this.academicgradeForm.controls['gradeIndicator'].setValue(gradeData.academicGradeView.gradeIndicator);
      this.academicgradeForm.controls['lowMark'].setValue(gradeData.academicGradeView.lowMark);
      this.academicgradeForm.controls['highMark'].setValue(gradeData.academicGradeView.highMark);
      this.academicgradeForm.controls['evaluation'].setValue(gradeData.academicGradeView.evaluation);
      this.academicgradeForm.controls['schoolBoardId'].setValue(gradeData.academicGradeView.schoolBoardId);
      this.academicgradeForm.controls['classId'].setValue(gradeData.academicGradeView.classId);
      if (gradeData.academicGradeView.classId !== null && gradeData.academicGradeView.classId !== undefined) {
        this.getSectionsBasedOnClass(gradeData.academicGradeView.classId);
      }
      this.academicgradeForm.controls['sectionId'].setValue(gradeData.academicGradeView.sectionId);
      this.academicDetails = gradeData.academicGradeView;
    } else {
      this.openSnackBar(gradeData.messages.ResultMessage, true);
    }
  }

  clearForm(): void {
    this.academicgradeForm.reset();
    this.myAcademicGradeForm.resetForm();
    this.setDefaultBoard();
  }

  setDefaultBoard(): void {
    this.setFormControl('academicgradeForm', 'schoolBoardId', this.schoolBoardsList[0].value);
    this.onSelectSchoolBoard(this.schoolBoardsList[0].value);
  }
  // End

}
