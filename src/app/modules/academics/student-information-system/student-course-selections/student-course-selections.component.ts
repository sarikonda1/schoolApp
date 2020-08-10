import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentCourseSelectionService } from 'app/service/student-information-system/student-course-selection.service';
import { SchoolAcademicStudentView } from '../model/school-academic-student-view';
import { StudentCourseSelectionView } from '../model/student-course-selection-view';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StudentCourseFilterViewModel } from '../model/student-course-filter-view-model';
import { CourseCategory } from '../model/course-category';

@Component({
  selector: 'app-student-course-selections',
  templateUrl: './student-course-selections.component.html',
  styleUrls: ['./student-course-selections.component.scss']
})
export class StudentCourseSelectionsComponent extends CommonComponent implements OnInit {
  @ViewChild('studentCoursesForm') customTemplate: TemplateRef<any>;
  @ViewChild('studentCourseSearchForm') studentCourseSearchForm;

  studentCourseFilterViewModel: StudentCourseFilterViewModel;
  // dropdown array declarations
  classes: Array<any> = [];
  sections: Array<any> = [];
  courseCategories: Array<any> = [];
  courseCategoriesList: any;
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  currentComponentName = 'StudentCourseSelectionComponet';
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  filterRowData: any = [];
  studentId: Array<any> = [];

  // forms and models
  studentCourseSelectionForm: FormGroup;
  schoolAcademicStudentView: SchoolAcademicStudentView;
  studentCourseSelectionView: StudentCourseSelectionView;

  // variables
  isValid: boolean;
  isPopUpValid: boolean;
  studentIds: Array<string> = [];
  courseIds: Array<string> = [];
  courses: Array<any> = [];
  coustomDialog: MatDialogRef<any, any>;
  schoolBoardId: number;
  isDataValid: boolean;
  isMultiSelect: boolean;
  errorMessage: any;
  courseCategoryData: CourseCategory;
  filters: any;
  isSingleClick = false;
  constructor(private gradeSetupService: GradeSetupService, public commonService: CommonService,
    public dialog: MatDialog, private classTimetableService: ClassTimetableService, private studentCourseSelectionService: StudentCourseSelectionService,
    public snackBar: MatSnackBar) {
    super();
    this.initializeStudentCourseModel();
    this.isDataValid = true;

  }
  initializeStudentCourseModel(): void{
    this.studentCourseFilterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE_500,
      classId: 0,
      courseCategoryId: 0,
      sectionId: 0,
      studentNames: [],
      admissionNumbers: [],
      rollNumbers: [],
      courseIds: [],
      schoolBoardId: 0
    };
  }
  initializeTabSettings(): void{
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.studentCourseFilterViewModel,
      tablename: 'Students',
      componentName: this.currentComponentName,
      isPaginationRequired: false,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      isMultiDeleteRequired: false,
    };
  }
  compareWithFunc = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);
  ngOnInit(): void {
    this.getClasses();
    this.studentCourseSelectionForm = new FormGroup({
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      courseCategoryId: new FormControl('')
    });

    this.initializeModel();
    this.cols = [
      { field: 'studentName', header: 'Student Name' },
      { field: 'admissionNumber', header: 'Admission Number' },
      { field: 'rollNumber', header: 'Roll Number' },
      { field: 'courseCategory', header: 'Course Category' },
      { field: 'course', header: 'Course' },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.studentCourseFilterViewModel = modelTableComponent;
      this.studentCourseSelectionForm.patchValue(modelTableComponent);
      this.studentCourseSelectionForm.get('sectionId').patchValue({
        sectionId: modelTableComponent.sectionId,
        boardId: modelTableComponent.schoolBoardId
      });
      this.getSections(this.studentCourseSelectionForm.value.classId, true);
      this.getCourseCategories('', '', true);
      this.search(this.studentCourseSelectionForm);
    }
    // / initializing table settings /
    this.initializeTabSettings();
  }

  // model initialization
  initializeModel(): void {
    this.studentCourseSelectionView = {
      courseCategoryId: 0,
      courseIds: [],
      schoolAcademicSessionStudentIds: [],
      classId: 0,
    };

    this.courseCategoryData = {
      courses: []
    };
  }

  // get students and courses data
  loadStudentCourseCategoryData(): void {
    this.setModelDataTableComponent(this.currentComponentName, this.studentCourseFilterViewModel);
    this.studentCourseSelectionService.studentCourseSelectionStudentCoursecategoriesGet(this.studentCourseFilterViewModel.sortBy, this.studentCourseFilterViewModel.sortOrder,
      this.studentCourseFilterViewModel.classId, this.studentCourseFilterViewModel.sectionId, this.studentCourseFilterViewModel.courseCategoryId,
      this.studentCourseFilterViewModel.studentNames, this.studentCourseFilterViewModel.admissionNumbers, this.studentCourseFilterViewModel.rollNumbers,
      this.studentCourseFilterViewModel.courseIds, this.studentCourseFilterViewModel.pageNumber,
      this.studentCourseFilterViewModel.pageSize, this.studentCourseFilterViewModel.schoolBoardId)
      .subscribe(data => this.response(data), error => {
        this.errorResponse(error);
      });

  }

  // on row actions
  rowActions(response: any): void {
    const filteredCourses = this.rows.reduce((ac, cu) => (cu.id === response.clickedRow.id && ac.push(cu.course), ac), []);
    this.courseCategoryData = {};
    this.getCourseCategories(response.clickedRow.id, response.clickedRow.courseCategoryId);
    this.courseCategoryData.courses.map((e: any) => {
      if (filteredCourses.includes(e.name)){
        e.isChecked = true;
      } else {
        e.isChecked = false;
      }
    });
    if (this.courseCategoryData.courses && this.courseCategoryData.courses.length){
      this.courseCategoryData.courses.sort((a: any, b: any) => b.isChecked - a.isChecked);
    }
    this.openPopUp();
    this.studentCourseSelectionView.courseCategoryId = response.clickedRow.courseCategoryId;
    this.studentIds = [response.clickedRow.id];
  }

  // process the response for table
  response(data: any): void {

    if (data.studentCourseListViewModel) {
      this.rows = data.studentCourseListViewModel.list;
      this.totalItems = data.studentCourseListViewModel.totalItems;
    } else {
      this.rows = [];
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.studentCourseFilterViewModel,
      rows: this.rows,
      tablename: 'Students',
      componentName: this.currentComponentName,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      isMultiDeleteRequired: false,
      rowGroupingColumns: ['admissionNumber', 'rollNumber', 'studentName', 'courseCategory', 'course', 'select'],

    };

    this.filterRowData = this.rows;

    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            if (value.courseCategory === element.courseCategory && value.studentName === element.studentName && value.admissionNumber === element.admissionNumber &&
              value.rollNumber === element.rollNumber) {
              return value;
            }
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;
    if (this.filterRowData.length > 0) {
      // apply edit and delete
      this.filterRowData.forEach(element => {

        this.rows.forEach(element1 => {
          if (element.courseCategoryId === element1.courseCategoryId && element.courseId === element1.courseId && element.admissionNumber === element1.admissionNumber &&
            element.rollNumber === element1.rollNumber) {

            element1.operations = [
              {
                name: AppSettings.ASSIGN_COURSE_SELECTION,
                icon: AppSettings.APPROVE_ICON,
                operationName: AppSettings.ASSIGN_COURSE_SELECTION
              }];
          }
        });
      });
    }
  }
  // get table data
  stdentCourseCategoryTableData(_event: StudentCourseFilterViewModel): void {
    this.studentCourseFilterViewModel = _event;
    this.studentCourseSelectionForm.patchValue(this.studentCourseFilterViewModel);
    this.studentCourseFilterViewModel.classId = this.studentCourseSelectionForm.value.classId;
    this.studentCourseFilterViewModel.sectionId = this.studentCourseSelectionForm.value.sectionId.sectionId;
    this.studentCourseFilterViewModel.schoolBoardId = this.studentCourseSelectionForm.value.sectionId.boardId;
    this.studentCourseFilterViewModel.courseCategoryId = this.studentCourseSelectionForm.value.courseCategoryId;
    this.loadStudentCourseCategoryData();
  }

  // get classes of school academic session
  getClasses(): void {
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.classes.push({
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

  // get sections of selected class
  getSections(classId: number, onManualChange = false): void {
    this.sections = [];
    if (!onManualChange){
      this.courseCategoriesList = [];
      this.studentCourseSelectionForm.controls['sectionId'].setValue(null);
      this.studentCourseSelectionForm.controls['courseCategoryId'].setValue(null);
    } 
    this.classTimetableService.classTimetableSectionsGet(classId).subscribe(response => {
      if (response.classTimetableSectionsView != null) {
        if (response.classTimetableSectionsView.length) {
          response.classTimetableSectionsView.map(x => {
            this.sections.push({ value: { sectionId: x.sectionId, boardId: x.boardId }, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  // get course categories of given class, section and student
  getCourseCategories(schoolAcademicStudentId: string, courseCategoryId: number | string, isManualChange = false): void {
    if (courseCategoryId) {
      this.onCourseCategoryChange(courseCategoryId);
    } else {
      if (!isManualChange){
        this.studentCourseSelectionForm.controls['courseCategoryId'].setValue(null);
      }
      this.courseCategoriesList = [];
      this.studentCourseSelectionService.studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicStudentId, this.studentCourseSelectionForm.
        controls['sectionId'].value.boardId,
        this.studentCourseSelectionForm.controls['classId'].value).subscribe(response => {
          if (response.courseCategoryCourses != null) {
            if (response.courseCategoryCourses.length) {
              this.courseCategoriesList = response.courseCategoryCourses;
            } else {
              this.openSnackBar(AppSettings.NO_COURSE_CATEGORIES, true);
            }
            if (courseCategoryId) {
              this.onCourseCategoryChange(courseCategoryId);
            }

          }
        }, error => {
          this.errorResponse(error);
        });
    }
  }

  // get courseCategory on change
  onCourseCategoryChange(courseCategoryId: number | string): void {
    if (courseCategoryId) {
      this.errorMessage = '';
      this.courseCategoryData = <CourseCategory>this.courseCategoriesList.filter(x => x.id === courseCategoryId)[0];
      this.courseCategoryData.courses.sort((a: any, b: any) => b.isChecked - a.isChecked);
    }
  }

  // search students based on filter applied
  search(data: any): void {
    if (data.status === 'INVALID') {
      return;
    }
    this.isValid = true;
    this.studentCourseFilterViewModel.classId = data.value.classId;
    this.studentCourseFilterViewModel.sectionId = data.value.sectionId.sectionId;
    this.studentCourseFilterViewModel.courseCategoryId = data.value.courseCategoryId;
    this.studentCourseFilterViewModel.schoolBoardId = data.value.sectionId.boardId;
    this.studentCourseFilterViewModel.pageNumber = 1;
    if (this.studentCourseSelectionForm.valid) {
      this.loadStudentCourseCategoryData();
    }
  }

  // reset data
  reset(): void {
    this.isValid = false;
    this.studentCourseSelectionForm.reset();
    this.studentCourseSearchForm.submitted = false;
    this.sections = [];
    this.courseCategoriesList = [];
   // this.setModelDataTableComponent(this.currentComponentName, null);
    this.clearStorageComponent(this.currentComponentName);
    this.initializeStudentCourseModel();
    this.initializeTabSettings();
  }

  // on select/unselect event to get selected id's
  selectedRows(_event: Array<any>): void {
    this.studentIds = Array.from(new Set(_event.map((item: any) => item.id)));

  }

  // assign courses for single/multiples students
  assignStudentCourses(): void {
    if (this.studentCourseSelectionView.courseCategoryId) {
      this.onCheckBoxChange();
      if (this.isDataValid) {
        this.studentCourseSelectionView.schoolAcademicSessionStudentIds = this.studentIds;
        this.studentCourseSelectionView.classId = this.studentCourseSelectionForm.value.classId;
        this.studentCourseSelectionView.schoolBoardId = this.studentCourseSelectionForm.value.sectionId.boardId;
        this.studentCourseSelectionView.courseIds = this.courseCategoryData.courses.filter((e: any) => e.isChecked).map((x: any) => x.courseId);
        this.isPopUpValid = true;
        if (!this.isSingleClick){
          this.isSingleClick = true;
          this.studentCourseSelectionService.studentCourseSelectionAssignStudentCoursesPost(this.studentCourseSelectionView).subscribe(response => {
            this.openSnackBar(response.messages.ResultMessage);
            this.closeAssignCoursesDialog();
            this.loadStudentCourseCategoryData();
          }, error => {
            this.errorResponse(error);
          });
          setTimeout(() => {
            this.isSingleClick = false;
          }, 1000);
        }
      }
    }
    else {
      this.errorMessage = AppSettings.COURSE_CATEGORY_REQUIRED;
    }
  }

  // open popup
  openPopUp(): void {
    this.errorMessage = '';
    this.studentCourseSelectionView = {};
    this.coustomDialog = this.dialog.open(
      this.customTemplate, {
      disableClose: true,
      width: '400px',
    }
    );
  }

  // on multiple assigns
  onAssignMultipleStudents(): void {
    const dialogValue = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      width: '400px',
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_MULTIPLE_STUDENT_COURSE_ASSIGN), action: true, btn1Text: AppSettings.No, btn2Text: AppSettings.Yes },
    });
    dialogValue.afterClosed().subscribe(action => {
      if (action === AppSettings.Yes) {
        this.initializeModel();
        this.getCourseCategories('', this.studentCourseSelectionForm.value.courseCategoryId);
        this.isMultiSelect = true;
        this.openPopUp();

        if (this.studentCourseSelectionForm.value.courseCategoryId) {
          this.studentCourseSelectionView.courseCategoryId =
            this.studentCourseSelectionForm.value.courseCategoryId;
        }
      }
    });
  }

  // close dialogue
  closeAssignCoursesDialog(): void {
    this.coustomDialog.close();
    this.isMultiSelect = false;
  }

  onCheckBoxChange(): void {
    this.errorMessage = '';
    const courseCategory = this.courseCategoriesList.filter(x => x.id === this.studentCourseSelectionView.courseCategoryId)[0];
    const selectedCoursesCount = this.courseCategoryData.courses.filter((x: any) => x.isChecked).length;

    // (courseCategory.optionalCount !== 0 && courseCategory.areAllOptional === AppSettings.NO && (selectedCoursesCount === 0)) ? 
    // (this.errorMessage = AppSettings.ATLEAST_ONE_SELECTION_MUST_BE_MADE,
    //    this.isDataValid = false) : 


    (courseCategory.optionalCount !== 0 && (selectedCoursesCount > courseCategory.optionalCount)) ?
      (this.errorMessage = AppSettings.SELECTIONS_EXCEEDED, this.isDataValid = false) :
      (courseCategory.requiredCount !== 0 && courseCategory.requiredCount !== selectedCoursesCount) ?
        (this.errorMessage = AppSettings.SELECTIONS_NOT_MATCHED_REQ_COUNT, this.isDataValid = false) : this.isDataValid = true;
  }
}

