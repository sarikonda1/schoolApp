import { Component, OnInit, ViewChild } from '@angular/core';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolService } from 'app/service/manage-school/school.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentsSectionsView } from '../model/students-sections-view';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StudentSectionsService } from 'app/service/student-information-system/students-section-service';
import { StudentSectionAssignView } from '../model/students-section-assign-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-section-assignment',
  templateUrl: './section-assignment.component.html',
  styleUrls: ['./section-assignment.component.scss'],
  animations: fuseAnimations,
  providers: [SchoolService]
})
export class SectionAssignmentComponent extends CommonComponent implements OnInit {
  @ViewChild('SectionForm') _sectionForm;
  studentsSectionSView: StudentsSectionsView;
  studentSectionAssignView: StudentSectionAssignView;
  sectionsInfo = true;
  loadData = Promise.resolve(false);
  classNames: Array<any> = [];
  filterClasses: Array<any> = [];
  boards: Array<any> = [];
  schoolBoardsList: Array<any> = [];
  sectionForm: FormGroup;
  sectionDropForm: FormGroup;
  isClassBoardValid: boolean;
  boardId: number;
  currentComponent = 'SectionAssignmentComponent';
  HttpStatus: any;
  cols: any[];
  rows: Array<any> = [];
  tabSettings: {};
  tableData: boolean;
  custRowsPerPageOptions: Array<number> = [];
  sectionNames: Array<any> = [];
  classId: number;
  totalItems: number;
  pageCnt: any;
  sectionsDetails: Array<any> = [];
  notAssignedStudents: number;
  assignedStudents: number;
  totalstudentsCount: number;
  studentIds: Array<any> = [];
  formData: any;
  sectionId: number;
  sectiionValidate: boolean;
  isSchoolBoard: boolean;

  constructor(
    public commonService: CommonService,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    private gradeSetupService: GradeSetupService,
    private schoolService: SchoolService,
    private studentsSectionService: StudentSectionsService,
    public classSectionService: ClassSectionService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.setViewModel();
    this.studentSectionAssignView = {
      sectionId: 0,
      classId: 0,
      schoolBoardId: 0,
      ids: []
    };
  }
  setViewModel(): void {
    this.studentsSectionSView = {
      classId: 0,
      schoolBoardId: 0,
      classIds: [],
      sectionIds: [],
      studentNames: [],
      admissionNumbers: [],
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    this.sectionForm = this._fb.group({
      classId: new FormControl('', [Validators.required]),
      boardId: new FormControl('', [Validators.required]),
    });

    this.sectionDropForm = this._fb.group({
      sectionId: new FormControl('', [Validators.required]),
    });

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.studentsSectionSView = modelTableComponent;
      if (this.studentsSectionSView['boardId']){
        this.boardId = this.studentsSectionSView['boardId'];
        this.sectionForm.patchValue({
          boardId: this.studentsSectionSView['boardId']
        });
      }
      if (this.studentsSectionSView.classId){
        this.classId = this.studentsSectionSView.classId;
        this.sectionForm.patchValue({
          classId: this.studentsSectionSView.classId
        });
        this.onClassSelect({value: this.studentsSectionSView.classId});
      }
    }  
    this.schoolBoards();
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
            if (this.sectionForm.value.boardId){
              this.onBoardSelect({value: this.sectionForm.value.boardId}, true);
            }else{
              this.setDefaultBoard();
            }
          } else {
            this.isSchoolBoard = false;
            this.boardId = null;
            this.getClassesList(null);
            this.sectionForm.get('boardId').clearValidators();
            this.sectionForm.controls['boardId'].updateValueAndValidity();
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  onBoardSelect(data: any, manual = false): void {
    if (!manual){
      this.tableData = false;
      this.sectionsInfo = false;
      this.loadData = Promise.resolve(false);
      this.classNames = [];
      this.boardId = data.value;
      this.classId = null;
      this.sectionForm.controls.classId.patchValue('');
    }
    this.getClassesList(this.boardId, manual);
  }

  // Get Classes to filter table data
  getClassesList(boardId: any,  manual = false): void {
    this.classNames = [];
    this.filterClasses = [];
    if (!manual){
     this.classId = null;
    }
    this.gradeSetupService.schoolAcademicClasses(boardId).subscribe(
      response => {
        if (response.listViews != null) {
          if (response.listViews.length) {
            response.listViews.forEach(element => {
              this.filterClasses.push({
                label: element.name,
                value: element.id
              });
              this.classNames = this.filterClasses;
            });
          }
        } else {
          this.openSnackBar(AppSettings.SCHOOL_BOARD_HAS_CLASSES, true);
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }
  // End



  onClassSelect(data: any): void {
    this.setViewModel();
    this.classId = data.value;
    this.tableData = true;
    this.loadData = Promise.resolve(false);
    this.sections(this.classId);
    this.cols = [
      { field: 'studentNames', header: 'Student Name', sort: true },
      { field: 'admissionNumbers', header: 'Admission Number', sort: true },
      { field: 'classNames', header: 'Class', sort: true },
      { field: 'sectionNames', header: 'Section', sort: true },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.studentsSectionSView,
      tablename: 'Section Assigned Students',
      componentName: this.currentComponent,
      isMultiDeleteRequired: false
    };
    this.studentsData(this.studentsSectionSView);
  }

  // on selection of class
  sections(classId: number): void {
    this.sectionNames = [];
    this.gradeSetupService.schoolAcademicClassSections(this.boardId, classId).subscribe(response => {
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
  // End


  // Get all Students
  studentsData(studentsSectionSView: any, onFilter = false): void {
    this.studentsSectionSView = studentsSectionSView;
    Object.assign(this.studentsSectionSView, {
      classId: this.classId,
      boardId: this.boardId
    });
    this.setModelDataTableComponent(this.currentComponent, this.studentsSectionSView);
    this.studentsSectionService.studentData(studentsSectionSView.sortBy, this.classId, this.boardId, studentsSectionSView.classIds, this.studentsSectionSView.sectionIds,
      this.studentsSectionSView.studentNames, this.studentsSectionSView.admissionNumbers,
      this.studentsSectionSView.sortOrder, studentsSectionSView.pageNumber, studentsSectionSView.pageSize).subscribe(res => this.studentsDetails(res, onFilter), error => {
        this.errorResponse(error);
      });
  }

  // Binding Data To Table
  studentsDetails(data: any, onFilter): void {
    this.loadData = Promise.resolve(true);
    this.custRowsPerPageOptions = [];
    if (data.studentDataView == null) {
      this.rows = [];
      if (!onFilter) {
        this.sectionsInfo = false;
      }
    } else {
      this.rows = data.studentDataView.list;
      this.totalItems = data.studentDataView.totalItems;
      this.sectionsInfo = true;
      this.sectionsDetails = data.sectionsCountView;
      this.assignedStudents = data.totalAssignedCount;
      this.notAssignedStudents = data.notAssignedStudentsCount;
      this.totalstudentsCount = data.totalStudentsCount;
    }
    if (data.studentDataView) {
      this.studentsSectionSView.pageNumber = data.studentDataView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.studentsSectionSView,
      rows: this.rows,
      tablename: 'Section Assigned Students',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      isMultiDeleteRequired: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Section Assignment'
        }
      },
    };
  }

  selectedRows(data: any): void {
    if (data.length === 0) {
      this.sectionDropForm.reset();
    }
    this.studentIds = [];
    data.forEach(element => {
      this.studentIds.push(element.id);
    });
  }

  onSectionSelect(data: any): void {
    this.sectiionValidate = false;
    this.sectionId = data.value;
  }

  sectionAssign(data: any): void {
    if (this.sectionDropForm.valid) {
      this.studentSectionAssignView.sectionId = data.sectionId;
      this.studentSectionAssignView.classId = this.classId;
      this.studentSectionAssignView.schoolBoardId = this.boardId;
      this.studentSectionAssignView.ids = this.studentIds;
      this.studentsSectionService.studentsSectionAssignment(this.studentSectionAssignView).subscribe(res => this.updateResponse(res), error => {
        this.errorResponse(error);
      });
    }
    else {
      this.sectiionValidate = true;
    }
  }

  // updateStudent Response
  updateResponse(response: any): void {
    this.sectionId = null;
    this.sectionDropForm.reset();
    if (response.statusCode === this.HttpStatus.OK) {
      this.studentsData(this.studentsSectionSView);
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  reset(): void {
    this.tableData = false;
    this._sectionForm.resetForm();
    this.loadData = Promise.resolve(false);
    this.sectionsInfo = false;
    this.classNames = [];
    this.setModelDataTableComponent(this.currentComponent, null);
  }

  onSelectClassBoard(data: any): void {
    this.formData = data;
  }

  setDefaultBoard(): void {
    this.setFormControl('sectionForm', 'boardId', this.schoolBoardsList[0].value);
    this.onBoardSelect(this.schoolBoardsList[0]);
  }
}

