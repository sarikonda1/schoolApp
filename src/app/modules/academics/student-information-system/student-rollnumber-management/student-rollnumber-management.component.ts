import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { RollNumberAssignmentService } from 'app/service/academic-service/api/rollnumber-assignment.service';
import { StudentDetailsView } from 'app/models/academics/student-details-view';
import { AppSettings, Messages, Pattern } from 'app/app.constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RollNumberView } from 'app/models/academics/roll-number-view';
import * as HttpStatus from 'http-status-codes';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';

@Component({
  selector: 'app-student-rollnumber-management',
  templateUrl: './student-rollnumber-management.component.html',
  styleUrls: ['./student-rollnumber-management.component.scss']
})
export class StudentRollnumberManagementComponent extends CommonComponent implements OnInit {
  @ViewChild('rollNumberTemplate') rollNumberTemplate;
  sectionDisabled: boolean;
  studentDetailsView: StudentDetailsView;
  rollNumberView: RollNumberView;
  studentRollFormGroup: FormGroup;
  rollNumberSeq = 1;
  // variables declarations
  classNames: Array<any> = [];
  sectionNames: Array<any> = [];
  classId: number;
  sectionId: number;
  cols: any;
  tabSettings: {};
  currentComponentName: any = 'StudentRollnumberManagementComponent';
  totalItems: any;
  custRowsPerPageOptions: any;
  pageCnt: any;
  rows: any[];
  validateForm: boolean;
  isValid: boolean;
  doValidate = true;
  isSortOrderFields = false;
  isDisable = false;
  isHide: boolean;
  isShow: boolean;
  RollNumberForm: FormGroup;
  defaultSortOrder: any[] = [];
  showBtn: boolean;
  boardId: number;
  boards: Array<any> = [];
  schoolBoardsList: Array<any> = [];
  isSchoolBoard: boolean;
  classDisabled: boolean;
  isCheck = true;
  sort = false;
  assignTxt: any;


  sortOrderFields = [
    { field: 'FirstName', header: 'First Name' },
    { field: 'LastName', header: 'Last Name' },
    { field: 'AdmissionNumber', header: 'Admission Number' },
    { field: 'Gender', header: 'Gender' },
    { field: 'GroupName', header: 'Group Name' },
  ];



  constructor(
    public dialog: MatDialog,
    public commonService: CommonService,
    private gradeSetupService: GradeSetupService,
    private _classSectionService: ClassSectionService,
    private _rollNumberAssignService: RollNumberAssignmentService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.isValid = true;
    this.showBtn = false;
    this.studentDetailsView = {
      schoolBoardId: 0,
      classId: 0,
      sectionId: 0,
      rollNumberSortBy: this.defaultSortOrder.map(x => x.field),
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.CUSTOM_PAGESIZE,
    };
  }


  ngOnInit(): void {
    this.isCheck = true;
    this.studentRollFormGroup = new FormGroup({
      boardId: new FormControl('', [Validators.required]),
      classId: new FormControl(''),
      sectionId: new FormControl(''),
    });

    this.cols = [
      { field: 'rollNumber', header: 'currentrollnumber', sort: false },
      { field: 'firstName', header: 'firstname', sort: false },
      { field: 'lastName', header: 'lastname', sort: false },
      { field: 'admissionNumber', header: 'admissionNumber', sort: false },
      { field: 'gender', header: 'gender', sort: false },
      { field: 'groupName', header: 'groupName', sort: false },
    ];
    // / initializing table settings /
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.studentDetailsView,
      componentName: this.currentComponentName,
      tablename: 'Student Roll Number Details',
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      //  tabTable: true,
      // padding: true,
      // hideHeader: true,
    };
    this.rollNumberView = {
      classId: 0,
      sectionId: 0,
      isRearrange: 0,
      startingNumber: 0

    };

    this.RollNumberForm = new FormGroup({
      RollNumber: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN),
      Validators.pattern(Pattern.PREVENT_SPACES), Validators.maxLength(4)]),
      id: new FormControl(''),
    });
    const localData = this.getModelComponent(this.currentComponentName);
    if (localData){
      this.studentDetailsView = localData;
      this.studentRollFormGroup.patchValue(localData);
      this.studentRollFormGroup.patchValue({
       boardId: localData.schoolBoardId
      });
      this.boardId = localData.schoolBoardId;
      this.onSelectClass({value: localData.classId}, true);
      this.onSelectSection({value: localData.sectionId});
    }
    this.schoolBoards();
  }

  drop(event: CdkDragDrop<string[]>): void {
    this.defaultSortOrder = this.sortOrderFields;
    moveItemInArray(this.defaultSortOrder, event.previousIndex, event.currentIndex);
    this.loadStudents();
  }


  // Get SChool Boards
  schoolBoards(): void {
    this.boards = [];
    this.isSchoolBoard = true;
    this.commonService.schoolAcademicBoards().subscribe(
      response => {
        if (response.listViews != null) {
          if (response.listViews.length) {
            response.listViews.forEach(element => {
              this.boards.push({
                label: element.name,
                value: element.id
              });
              this.schoolBoardsList = this.boards;
            });
            if (this.studentRollFormGroup.value.boardId){
              this.onBoardSelect({value: this.studentRollFormGroup.value.boardId}, true);
            } else{
              this.setDefaultBoard();
            }
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  onBoardSelect(data: any, manual = false): void {
    this.isSortOrderFields = false;
    this.isCheck = true;
    this.sort = false;
    if (!manual){
      this.rows = [];
      this.loadGridData();
    } 
    this.isValid = true;
    this.isDisable = false;
    this.boardId = data.value;
    this.loadClassesList(this.boardId);
    if (!manual){
      this.studentRollFormGroup.controls.classId.patchValue('');
    } else{
      this.isCheck = false;
      this.isValid = false;
    }
    this.sortOrderFields = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' },
      { field: 'AdmissionNumber', header: 'Admission Number' },
      { field: 'Gender', header: 'Gender' },
      { field: 'GroupName', header: 'Group Name' },
    ];
  }

  loadClassesList(boardId: any): void {
    this.classNames = [];
    this._classSectionService.schoolAcademicClasses(boardId).subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.classNames.push({
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

  // on selection of class
  onSelectClass(data: any, manual = false): void {
    this.isSortOrderFields = false;
    this.isCheck = true;
    this.sort = false;
    if (!manual){
      this.studentRollFormGroup.controls.sectionId.patchValue('');
    }
    this.classDisabled = false;
    this.isValid = true;
    this.isDisable = false;
    if (!manual){
      this.rows = [];
      this.loadGridData();
    }
    this.rollNumberView.classId = data.value;
    this.sectionDisabled = true;
    this.sectionNames = [];
    this.classId = data.value;
    this.gradeSetupService.schoolAcademicClassSections(this.boardId, data.value).subscribe(response => {
      if (response.listViews.length) {
        this.sectionDisabled = false;
        response.listViews.forEach(element => {
          this.sectionNames.push({
            label: element.name,
            value: element.id
          });
        });
      }
    });
    this.defaultSortOrder = this.sortOrderFields;

  }
  // End

  onSelectSection(data: any): void {
    this.isSortOrderFields = false;
    this.isCheck = true;
    this.sort = false;
    this.isDisable = false;
    this.isValid = false;
    this.doValidate = true;
    this.sectionId = data.value;
    this.rollNumberView.sectionId = data.value;
    this.loadStudents();
  }
  // response of student group details
  getResponse(data: any): void {
    this.rows = [];
    this.custRowsPerPageOptions = [];
    if (!data.studentRollNumberListViewModel) {
      this.isSortOrderFields = false;
      this.isValid = true;
    } else {
      this.isCheck = false;
      this.isValid = false;
      this.rows = data.studentRollNumberListViewModel.list;
      if (this.rows.some(x => x.rollNumber !== null)) {
        this.assignTxt = AppSettings.RE_ASSIGN;
      } else {
        this.assignTxt = AppSettings.ASSIGN;
      }

      this.totalItems = data.studentRollNumberListViewModel.totalItems;
    }

    if (data.studentRollNumberListViewModel) {
      this.studentDetailsView.pageNumber = data.studentRollNumberListViewModel.pageNumber;
    }
    this.loadGridData();
  }

  loadGridData(): void {
    this.tabSettings = {
      columns: this.cols,
      model: this.studentDetailsView,
      rows: this.rows,
      componentName: this.currentComponentName,
      tablename: 'Student Roll Number Details',
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      //  tabTable: true,
      // padding: true,
      // hideHeader: true,
    };
  }

  loadStudents(): void {
    this.studentDetailsView.schoolBoardId = this.boardId;
    this.studentDetailsView.classId = this.classId;
    this.studentDetailsView.sectionId = this.sectionId;
    this.studentDetailsView.rollNumberSortBy = this.defaultSortOrder.map(x => x.field);
    this.setModelDataTableComponent(this.currentComponentName, this.studentDetailsView);
    this._rollNumberAssignService.getStudent(this.studentDetailsView.schoolBoardId, this.studentDetailsView.classId,
      this.studentDetailsView.sectionId, this.studentDetailsView.rollNumberSortBy,
      this.studentDetailsView.sortOrder, this.studentDetailsView.pageNumber, this.studentDetailsView.pageSize).subscribe(response => {
        this.getResponse(response);
      });
  }

  assignRollNumber(): void {
    if (this.classId !== null && this.sectionId !== null) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        width: '400px',
        data:
        {
          text:
            this.commonService.getTranslation(Messages.ASSIGN_ROLLNUMBER), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const params = { assign: this.assignTxt };
          const confirmDialog = this.dialog.open(CustomDialogComponent, {
            width: '400px',
            data: {
              text:
                this.commonService.getTranslation(Messages.DIALOG_CONFIRMATION, params), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
            },
          });

          confirmDialog.afterClosed().subscribe(response => {
            if (response === AppSettings.YES) {
              const customInputDialogRef = this.dialog.open(CustomDialogComponent, {
                width: '300px',
                data: { template: this.rollNumberTemplate, inputData: this.rollNumberSeq },
              });

              customInputDialogRef.afterClosed().subscribe(result => {
                if (result !== undefined || result !== '') {
                  this.rollNumberView.isRearrange = 1;
                  this.rollNumberView.startingNumber = 0;
                }

              });
            }
            else {
              this.dialog.closeAll();
              if (response === AppSettings.NO) {
                this.rollNumber();
                this.rollNumberView.isRearrange = 0;
              }
            }
          });
          this.rollNumberSeq = 1;
        }
      });
    }
  }

  rollNumber(): void {
    this.validateForm = true;
    this.rollNumberView.isRearrange = 0;
    this.rollNumberView.rollNumberSortBy = this.defaultSortOrder.map(x => x.field);
    this._rollNumberAssignService.assigningRollNUmber(this.rollNumberView).subscribe(res => this.response(res), error => {
      this.errorResponse(error);
    });
  }


  rollNumberAssign(RollNumberForm: any): void {
    this.validateForm = true;
    if (RollNumberForm.invalid) {
      return;
    }
    this.rollNumberView.startingNumber = this.RollNumberForm.value.RollNumber;
    this.rollNumberView.isRearrange = 1;
    this.rollNumberView.rollNumberSortBy = this.defaultSortOrder.map(x => x.field);
    this._rollNumberAssignService.assigningRollNUmber(this.rollNumberView).subscribe(res => this.response(res), error => {
      this.errorResponse(error);
    });
  }
  response(data: any): void {
    this.dialog.closeAll();
    this.loadStudents();
    this.openSnackBar(data.messages.ResultMessage);
  }

  show(event): void {
    this.defaultSortOrder = [];
    this.isSortOrderFields = false;
    this.sort = false;
    event.checked = !(event.checked);
    if (event.checked === false) {
      this.isSortOrderFields = true;
      this.defaultSortOrder = this.sortOrderFields;
      this.sort = true;
    }
    this.isDisable = true;
    this.loadStudents();
  }

  onCancel(): void {
    this.RollNumberForm.reset();
    this.validateForm = false;
    this.rollNumberSeq = 1;
  }

  setDefaultBoard(): void {
    this.setFormControl('studentRollFormGroup', 'boardId', this.schoolBoardsList[0].value);
    this.onBoardSelect(this.schoolBoardsList[0]);
  }
}
