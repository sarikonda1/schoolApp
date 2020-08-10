import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { SchoolService } from 'app/service/manage-school/school.service';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pattern, AppSettings, URLConstants, Messages } from 'app/app.constants';
import { SchoolAcademicSessionFilterView } from '../model/school-academicsession-filter-view';
import * as _ from 'lodash';
import { SchoolAcademicSessionViewModel } from '../model/schoolacademic-session-view-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { SchoolAcademicSessionStatusViewModel } from '../model/school-academicsession-status-view';

@Component({
  selector: 'app-academic-session',
  templateUrl: './academic-session.component.html',
  styleUrls: ['./academic-session.component.scss'],
  providers: [SchoolAcademicSessionService, GradeSetupService, SchoolService]
})
export class AcademicSessionComponent extends CommonComponent implements OnInit {
  @ViewChild('stepper') stepper;
  @ViewChild('courseRequireForm') courseRequireForm;
  @ViewChild('classofferForm') classofferForm;

  newAcademicSessionForm: FormGroup;
  classesOfferedForm: FormGroup;
  courseRequirementsForm: FormGroup;
  schoolAcademicSessionId: any;
  academisSessionStatuses: any;

  // View Models
  schoolAcademicSessionViewModel: SchoolAcademicSessionViewModel;
  schoolAcademicSessionStatusViewModel: SchoolAcademicSessionStatusViewModel;

  // AS Grid
  hideGrid = false;
  columns: any[] = [];
  tableSettings: any;
  currentComponent = 'AcademicSessionComponent';
  filterViewModel: SchoolAcademicSessionFilterView;
  rows: any[];
  totalRowsCount: any;
  pageCnt: number;
  closeAddPanel = true;
  validate = true;
  interactedStepperIndex: any = 0;
  filterCourseCategory: any[];


  // Stepper 
  isSchoolOnlineApllication = true;
  isUpdateData = false;
  schoolBoardList: any[] = [];
  isShoolHasAcademicSession = false;
  courseCategoryList: any[] = [];
  schoolClassesList = Promise.resolve([]);
  schoolSectionList = Promise.resolve([]);
  loaded = Promise.resolve(true);
  classOfferedTable: any;
  classSectionData: any[] = [];
  selectedBoards: unknown[];
  courseOfferedClasses: any[] = [];
  offeredBoards: any[];
  courses: any[];
  passMarks: boolean;
  courseRequirementSelect: any[] = [];
  courseReqTab: {};
  classRequirementsGridHeaderData = [
    { field: 'className', header: 'Class', sort: false },
    { field: 'schoolBoardName', header: 'School Board', sort: false },
    { field: 'courseCategoryName', header: 'Course Category', sort: false },
    { field: 'courseName', header: 'Course', sort: false },
    { field: 'passMarks', header: 'Pass Marks', sort: false },
    { field: 'delete', header: 'Actions', sort: false },
  ];
  invalidCourseCategories = [];
  fromConfiguration = false;
  constructor(public dialogRef: MatDialog, private schoolService: SchoolService,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    public commonService: CommonService, private router: Router,
    private statusService: StatusService, private _fb: FormBuilder,
    private gradeSetupService: GradeSetupService,
    private cd: ChangeDetectorRef, public snackBar: MatSnackBar, public routes: ActivatedRoute,
    public location: Location) {
    super();
    if (window.location.href.indexOf('required-school-configuration') > -1){
      this.fromConfiguration = true;
    }
  }

  ngOnInit(): void {
    this.setForms();
    this.checkForEdit();
    this.gridClassOfferedList(true);
    this.setCourseTableData();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.schoolBoardDetails();
    this.getAvailableSchoolBoards();
    this.getAcademicSessionGrid();
    this.schoolOnlineApplications();
    this.getStatus();
  }
  checkForEdit(): void {
    this.routes.params.subscribe((params: Params) => {
      if (params['id']) {
        this.schoolAcademicSessionId = params['id'];
        const operations = {
          operation: 'edit',
          clickedRow: {
            id: this.schoolAcademicSessionId
          }
        };
        this.actions(operations, true);
        this.hideGrid = true;
        this.onAddFormClick(true);
      } else {
        this.hideGrid = false;
      }
    });
  }
  setForms(): void {
    this.newAcademicSessionForm = this._fb.group({
      displayName: new FormControl('', [Validators.maxLength(45)]),
      code: new FormControl('', [Validators.maxLength(10)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      onlineApplicationStartDate: new FormControl(),
      onlineApplicationEndDate: new FormControl(),
      onlineApplicationFee: new FormControl('', [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999.99), Validators.min(0)])
    });

    this.classesOfferedForm = this._fb.group({
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      schoolBoardId: new FormControl(null, [Validators.required]),
      maximumCapacity: new FormControl('', [Validators.max(100),
      Validators.min(1), Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.pattern(Pattern.PREVENT_SPACES)]),
      checkLength: new FormControl(null, [Validators.required]),
    });

    this.courseRequirementsForm = this._fb.group({
      classId: new FormControl(''),
      schoolBoardId: new FormControl(null),
      courseCategoryId: new FormControl(''),
      courseId: new FormControl(''),
      passMarks: new FormControl('', [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN),
      Validators.min(1), Validators.max(1000)]),
      isValidCourseForm: new FormControl(true, Validators.required)
    });
  }

  // Cancel Button
  cancel(): void {
    this.stepper.reset();
    if (document.getElementById('stpper-reset')) {
      document.getElementById('stpper-reset').click();
    }
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.schoolBoardList = [];
    this.courseCategoryList = [];
    this.schoolClassesList = Promise.resolve([]);
    this.schoolSectionList = Promise.resolve([]);
    this.classSectionData = [];
    this.selectedBoards = [];
    this.courseOfferedClasses = [];
    this.offeredBoards = [];
    this.courses = [];
    this.passMarks = false;
    this.courseRequirementSelect = [];
    this.gridClassOfferedList(true);
    this.setCourseTableData();
    this.loaded = Promise.resolve(true);
    this.invalidCourseCategories = [];
    if (this.hideGrid) {
       this.location.back();
    }
    this.hideGrid = false;
  }
  // Grid Related changes
  setColumnHeaders(): void {
    this.columns = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'code', header: 'Code', sort: true },
      { field: 'statusName', header: 'Status', sort: true },
      { field: 'startDate', header: 'Start Date', sort: true },
      { field: 'endDate', header: 'End Date', sort: true },
      { field: 'onlineApplicationStartDate', header: 'Online Application Start Date', sort: true },
      { field: 'onlineApplicationEndDate', header: 'Online Application End Date', sort: true },
      { field: 'onlineApplicationFee', header: 'Online Application Fee', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Academic Sessions',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }
  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    this.schoolAcademicSessionViewModel = {
      schoolAcademicSessionClassSections: [],
      classRequirements: []
    };
  }
  getAcademicSessionGrid(): void {
    this.schoolAcademicSessionService.getAllDetails(this.filterViewModel.names, this.filterViewModel.codes,
      this.filterViewModel.statusIds, this.filterViewModel.startDateBegin,
      this.filterViewModel.startDateEnd, this.filterViewModel.endDateBegin,
      this.filterViewModel.endDateEnd, this.filterViewModel.onlineApplicationStartDateBegin,
      this.filterViewModel.onlineApplicationStartDateEnd, this.filterViewModel.onlineApplicationEndDateBegin,
      this.filterViewModel.onlineApplicationEndDateEnd, this.filterViewModel.onlineApplicationFees, this.filterViewModel.sortBy,
      this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
        this.bindAcademicSessonResult(res);
      },
        error => {
          this.errorResponse(error);
        });
  }

  bindAcademicSessonResult(data: any): any {
    if (!data.schoolAcademicSessionListViewModel) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.schoolAcademicSessionListViewModel.list;
      this.totalRowsCount = data.schoolAcademicSessionListViewModel.totalItems;
      this.pageCnt = data.schoolAcademicSessionListViewModel.totalPages;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.VIEW,
            icon: AppSettings.DETAILS_ICON,
          },
        ];
        // tslint:disable-next-line:no-unused-expression
        (e.statusName === AppSettings.NEW_STATUS) ?
          [e.statusId === AppSettings.ACTIVE_OPERATION, e.operations.push({
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          },
            {
              name: AppSettings.ACTIVE_OPERATION,
              icon: AppSettings.ACTIVE_ICON,
            })] : (e.statusName === AppSettings.ACTIVE_OPERATION) ? [e.statusId === AppSettings.COMPLETED, e.operations.push({
              name: AppSettings.COMPLETED,
              icon: AppSettings.ACTIVE_ICON,
            })] : null;
        e.startDate = (e.startDate == null) ? null : this.commonService.customDateFormat(e.startDate, this.getSchoolDateFormat()).date;
        e.endDate = (e.endDate == null) ? null : this.commonService.customDateFormat(e.endDate, this.getSchoolDateFormat()).date;
        e.onlineApplicationStartDate = (e.onlineApplicationStartDate == null) ? null :
          this.commonService.customDateFormat(e.onlineApplicationStartDate, this.getSchoolDateFormat()).date;
        e.onlineApplicationEndDate = (e.onlineApplicationEndDate == null) ? null : this.commonService.customDateFormat(e.onlineApplicationEndDate, this.getSchoolDateFormat()).date;
        e.onlineApplicationFee = e.onlineApplicationFee != null ? this.getFormattedCurrency(e.onlineApplicationFee) : e.onlineApplicationFee;
      });
    }
    if (data.schoolAcademicSessionListViewModel) {
      this.filterViewModel.pageNumber = data.schoolAcademicSessionListViewModel.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Academic Sessions',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'New Academic Session'
        },
        infoButton: {
          required: true,
          text: 'Academic Sessions'
        }
      }
    };
  }

  tableData(_event: SchoolAcademicSessionFilterView): void {
    this.filterViewModel = _event;
    this.getAcademicSessionGrid();
  }
  onAddFormClick(fromViewEdit = false): void {
    this.interactedStepperIndex = 0;
    this.closeAddPanel = false;
    this.isUpdateData = false;
    this.passMarks = false;
    if (this.stepper) {
      this.stepper.reset();
    }
    if (!fromViewEdit){
      this.schoolBoardDetails();
    } 
  }


  OnSelectionChange(event): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex > 0) {
      if (!this.classesOfferedForm.value.schoolBoardId) {
        this.classesOfferedForm.patchValue({ schoolBoardId: this.availableSchoolBoards[0].value });
      }
    }
    if (event.selectedIndex === 1) {
      this.stepper._steps._results[1].interacted = false;
      this.classofferForm.submitted = false;
    } else if (event.selectedIndex === 2) {
      this.stepper._steps._results[2].interacted = false;
      this.courseRequireForm.submitted = false;
      if (this.offeredBoards.length) {
        if (!this.courseRequirementsForm.value.schoolBoardId) {
          this.courseRequirementsForm.patchValue({ schoolBoardId: this.offeredBoards[0].schoolBoardId });
        }
        this.onSelectCourseOfferedBoard({ value: this.courseRequirementsForm.value.schoolBoardId });
      }
    }
  }
  // Basic APi's

  // check online applications for the selected school
  schoolOnlineApplications(): void {
    this.isSchoolOnlineApllication = false;
    this.schoolService.schoolDetails().subscribe((res: any) => {
      if (res.schoolData.allowOnlineStudentApplications === 1) {
        this.isSchoolOnlineApllication = true;
      }
    });
  }

  getStatus(): void {
    this.statusService.getAllStatuses(AppSettings.ACADEMICSESSION_CODE).subscribe(res => this.academisSessionStatuses = res);
  }


  // GET all board related api's
  schoolBoardDetails(): void {
    this.schoolBoardList = [];
    this.gradeSetupService.schoolBoards().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          this.isShoolHasAcademicSession = true;
          response.listViews.forEach(element => {
            this.schoolBoardList.push({
              label: element.name,
              value: element.id
            });
          });
          this.classesOfferedForm.controls['schoolBoardId'].setValue(this.schoolBoardList[0].value);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getClassesList();
  }

  // Get Classes to filter table data
  getClassesList(): void {
    const classes = [];
    this.schoolAcademicSessionService.classes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach((element: any) => {
            classes.push({
              label: element.name,
              value: element.id
            });
          });
          this.schoolClassesList = Promise.resolve(classes);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getSectionsList();
  }

  // Get Sections to filter table data
  getSectionsList(): void {
    const sections = [];
    this.schoolAcademicSessionService.sections().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            sections.push({
              label: element.name,
              value: element.id
            });
          });
          this.schoolSectionList = Promise.resolve(sections);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.courseCategoryDetails();
  }

  courseCategoryDetails(): void {
    this.courseCategoryList = [];
    this.schoolAcademicSessionService.courseCategoryDetails().subscribe(response => {
      this.courseCategoryList = [];
      if (response.courseCategoryDetailsModel != null) {
        if (response.courseCategoryDetailsModel.length > 0) {
          response.courseCategoryDetailsModel.forEach(element => {
            this.courseCategoryList.push({
              label: element.name,
              value: element.id,
              code: element.code,
              courseTypeId: element.courseTypeId,
              areAllRequired: element.areAllRequired,
              requiredCount: element.requiredCount,
              areAllOptional: element.areAllOptional,
              optionalCount: element.optionalCount
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onSelectClassesOffered(): void {
    if (this.classesOfferedForm.controls.classId.valid &&
      this.classesOfferedForm.controls.sectionId.valid &&
      this.classesOfferedForm.controls.schoolBoardId.valid &&
      this.classesOfferedForm.controls.maximumCapacity.valid) {
      if (this.checkIfSectionAlreadyExist()) {
        this.openSnackBar('Some section name are Already exist for same classes for Different Board', true);
        return;
      }
      this.classesOfferedForm.value.classId.map(cl => {
        this.classesOfferedForm.value.sectionId.map(sc => {
          const index = this.checkifClassSectionsAlreadyExists(this.classesOfferedForm.value.schoolBoardId, cl.value, sc.value);
          const data = {
            classId: cl.value,
            className: cl.label,
            sectionId: sc.value,
            sectionName: sc.label,
            schoolBoardId: this.classesOfferedForm.value.schoolBoardId,
            schoolBoardName: this.getBoardNameBasedOnId(this.classesOfferedForm.value.schoolBoardId),
            maxCapacity: this.classesOfferedForm.value.maximumCapacity
          };
          if (index === -1) {
            this.classSectionData.push(data);
          } else {
            this.classSectionData[index] = data;
          }
        });
      });
      if (this.classOfferedTable) {
        this.classOfferedTable.rows = [];
      }
      this.gridClassOfferedList();
      setTimeout(() => {
        this.stepper._steps._results[1].interacted = false;
        this.classofferForm.submitted = false;
        this.cd.detectChanges();
      });
    }
  }
  checkIfSectionAlreadyExist(): any {
    // tslint:disable-next-line: max-line-length
    return this.classSectionData.some(e => e.schoolBoardId !== this.classesOfferedForm.value.schoolBoardId && this.classesOfferedForm.value.classId.some(c => c.value === e.classId) && this.classesOfferedForm.value.sectionId.some(sc => sc.value === e.sectionId));
  }
  checkifClassSectionsAlreadyExists(bId, cId, sId): any {
    return this.classSectionData.findIndex(e => e.schoolBoardId === bId && e.classId === cId && e.sectionId === sId);
  }
  gridClassOfferedList(intialCall = false): void {
    const classOfferedGridHeaderData = [
      { field: 'schoolBoardName', header: 'School Board', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionName', header: 'Section', sort: false },
      { field: 'maxCapacity', header: 'Maximum Capacity', sort: false },
      { field: 'delete', header: 'Actions', sort: false }
    ];
    this.classOfferedTable = {
      rows: this.classSectionData,
      columns: classOfferedGridHeaderData,
      tablename: 'Selected Class Offerings',
      hideHeader: true,
      isPaginationRequired: false,
      rowGroupingColumns: ['schoolBoardName', 'className', 'maxCapacity'],
    };
    if (this.classSectionData.length > 0) {
      this.classSectionData.forEach(e => {
        e.operations = [{
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE_ICON,
          operationName: AppSettings.DELETE
        }];
      });
    }
    if (!intialCall) {
      const previousBoardValue = this.classesOfferedForm.value.schoolBoardId;
      this.classesOfferedForm.reset();
      this.classofferForm.resetForm();
      this.courseRequirementsForm.reset();
      this.checkCourseOffered();
      setTimeout(() => {
        this.classesOfferedForm.patchValue({
          schoolBoardId: previousBoardValue,
          checkLength: this.classSectionData.length ? true : null
        });
        this.classesOfferedForm.updateValueAndValidity();
      });
      this.offeredBoards = [];
      this.offeredBoards = _.uniqBy(this.classSectionData, 'schoolBoardId');
      this.loaded = Promise.resolve(true);
      this.cd.detectChanges();
    }
  }


  classesOfferedActions(event): void {
    if (this.classSectionData.filter(x => x.classId === event.clickedRow.classId && x.schoolBoardId === event.clickedRow.schoolBoardId).length > 1
      || this.courseRequirementSelect.find(x => x.classId === event.clickedRow.classId && x.schoolBoardId === event.clickedRow.schoolBoardId) === undefined) {
      this.classSectionData = this.classSectionData.filter(e => e !== event.clickedRow);
      this.gridClassOfferedList();
    } else {
      this.openSnackBar(AppSettings.COURSE_OFFERED_HAS_COURSE_REQUIREMENTS, true);
    }
  }
  clearAllClassSectionData(): void {
    this.classesOfferedForm.reset();
    this.gridClassOfferedList();
  }

  getBoardNameBasedOnId(id): any {
    const selectedBoard = this.availableSchoolBoards.find(e => e.value === id);
    return selectedBoard && selectedBoard.label;
  }

  onSelectCourseOfferedBoard(event: any): void {
    this.courseOfferedClasses = [];
    let classes = this.classSectionData.filter(x => x.schoolBoardId === event.value);
    classes = _.uniqBy(classes, 'classId');
    classes.forEach(element => {
      this.courseOfferedClasses.push({ value: element.classId, label: element.className });
    });
  }

  updateFormControlValidation(formName: any, controlName: any, setValidation: boolean): void {
    if (setValidation) {
      this[formName].controls[controlName].setValidators(Validators.required);
    } else {
      this[formName].controls[controlName].clearValidators();
    }
    this[formName].controls[controlName].updateValueAndValidity();
  }

  onSelectCourseCategory(data: any): void {
    let courseTypeId;
    let courseTypeSub;
    this.courses = [];
    this.courseCategoryList.forEach(element => {
      if (element.value === data) {
        courseTypeId = element.courseTypeId;
        courseTypeSub = element.code;
      }
    });

    if (AppSettings.COURSE_TYPES_SUBJECTS === courseTypeSub) {
      this.passMarks = true;
    }
    else {
      this.passMarks = false;
    }
    this.courseRequirementsForm.controls['courseId'].setValue(null);
    this.courseRequirementsForm.controls['passMarks'].setValue('');
    this.schoolAcademicSessionService.courseDetails(courseTypeId).subscribe(response => {
      if (response.commonViewModel.length > 0) {
        response.commonViewModel.forEach(course => {
          this.courses.push({
            label: course.name,
            value: course.id
          });
        });
      }
      else {
        this.openSnackBar(AppSettings.SELECTED_COURSE_CATEGORY_COULD_HAVE_COURSE, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  validCourseRequirements(data: any): void {
    if (data.controls.schoolBoardId.invalid || data.controls.classId.invalid ||
      data.controls.courseCategoryId.invalid || data.controls.courseId.invalid || data.controls.passMarks.invalid) {
      return;
    }
    if (this.checkAlreadyCourseExistForCourse(data)) {
      this.openSnackBar('Some Courses Already selected For the Same Classes', true);
      return;
    }
    const courseCategory = this.courseCategoryList.find(c => c.value === data.value.courseCategoryId);
    if ((data.value.courseId.length - this.getDuplicateCourseCount(data)) + this.getExistCourseCategoryCount(data) < courseCategory.requiredCount) {
      this.openSnackBar(AppSettings.COURSE_CATEGORY_REQUIRED_COUNT + ' ' + courseCategory.requiredCount, true);
      return;
    }
    const board = this.offeredBoards.find(c => c.schoolBoardId === data.value.schoolBoardId);
    data.value.classId.forEach(result => {
      data.value.courseId.forEach(element => {
        const index = this.checkIfAlreadyCourseExists(board.schoolBoardId, result.value, courseCategory.value, element.value);
        const values = {
          schoolBoardId: board.schoolBoardId,
          schoolBoardName: board.schoolBoardName,
          courseCategoryId: courseCategory.value,
          courseCategoryName: courseCategory.label,
          classId: result.value, className: result.label,
          passMarks: data.value.passMarks,
          courseId: element.value,
          courseName: element.label
        };
        if (index === -1) {
          this.courseRequirementSelect.push(values);
        } else {
          this.courseRequirementSelect[index] = values;
        }
      });
    });
    this.setCourseTableData();
    this.clearCourseFormData();
    this.checkCourseOffered();
  }
  checkAlreadyCourseExistForCourse(data): any {
    let alreadyExist = false;
    data.value.classId.map(result => {
      data.value.courseId.map(element => {
        if (!alreadyExist) {
          // tslint:disable-next-line: max-line-length
          const test = this.courseRequirementSelect.find(e => e.schoolBoardId === data.value.schoolBoardId && e.classId === result.value && e.courseId === element.value && e.courseCategoryId !== data.value.courseCategoryId);
          if (test) {
            alreadyExist = true;
          }
        }
      });
    });
    return alreadyExist;
  }

  getDuplicateCourseCount(data: any): number {
    let alreadyExistCount = 0;
    data.value.classId.map(result => {
      data.value.courseId.map(courseId => {

        const test = this.courseRequirementSelect.find(e => e.schoolBoardId === data.value.schoolBoardId &&
          e.classId === result.value && e.courseId === courseId.value && e.courseCategoryId === data.value.courseCategoryId);
        if (test) {
          alreadyExistCount += 1;
        }
      });
    });
    return alreadyExistCount;
  }

  getExistCourseCategoryCount(data: any): number {
    let alreadyExistCount = 0;
    data.value.classId.map(result => {
      this.courseRequirementSelect.map(catId => {
        if (catId.schoolBoardId === data.value.schoolBoardId && catId.classId === result.value && catId.courseCategoryId === data.value.courseCategoryId) {
          alreadyExistCount += 1;
        }
      });
    });
    return alreadyExistCount;
  }

  clearCourseFormData(): void {
    this.courseRequirementsForm.patchValue({
      courseCategoryId: null,
      courseId: null,
      passMarks: null
    });
    this.courses = [];
    this.passMarks = false;
    setTimeout(() => {
      this.stepper._steps._results[2].interacted = false;
      this.courseRequireForm.submitted = false;
      this.cd.detectChanges();
    });
  }
  setCourseTableData(): void {
    let headerOptions;
    if (this.courseRequirementSelect.length) {
      headerOptions = {
        additionalButtons: [
          {
            name: 'Clear All',
            clickAction: 'clearAll'
          },
        ]
      };
    }
    this.courseRequirementSelect.forEach(e => {
      e.operations = [{
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON,
        operationName: AppSettings.DELETE
      }];
    });

    this.courseReqTab = {
      rows: this.courseRequirementSelect,
      columns: this.classRequirementsGridHeaderData,
      tablename: 'Course Requirements',
      isPaginationRequired: false,
      rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
      headerOperations: headerOptions
    };
    this.loaded = Promise.resolve(true);
  }

  checkIfAlreadyCourseExists(bId, cId, ccId, coId): any {
    return this.courseRequirementSelect.findIndex(e => e.schoolBoardId === bId && e.classId === cId && e.courseCategoryId === ccId && e.courseId === coId);
  }
  onSubmitAcademicSessions(): void {
    this.schoolAcademicSessionViewModel = this.newAcademicSessionForm.value;
    this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = this.classSectionData;
    this.schoolAcademicSessionViewModel.classRequirements = this.courseRequirementSelect;
    if (this.isUpdateData) {
      this.schoolAcademicSessionViewModel['id'] = this.schoolAcademicSessionId;
      this.schoolAcademicSessionService.updateSchoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(res => {
        this.commonService.sendAcademicSessionId();
        this.cancel();
        this.openSnackBar(res.messages.ResultMessage);
        this.getAcademicSessionGrid();
      }, error => {
        this.errorResponse(error);
      });
    } else {
      this.schoolAcademicSessionService.schoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(res => {
        this.commonService.sendAcademicSessionId();
        this.cancel();
        this.openSnackBar(res.messages.ResultMessage);
        this.getAcademicSessionGrid();
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  // actions

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string, lb?: string, vl?: string): MatDialogRef<CustomDialogComponent, any> {
    const params = { value: vl, label: lb };
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData, params), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }
  actions(operation: any, fromViewEdit = false): void {
    if (operation.operation === AppSettings.VIEW.toLowerCase()) {
      if (this.fromConfiguration){
        this.router.navigate(
          [URLConstants.ACADEMICSESSION_WIZARD_DETAILS + operation.clickedRow.id]);
      }else {
        this.router.navigate(
          [URLConstants.ACADEMICSESSION_DETAILS + operation.clickedRow.id]);
      }
    } else if (operation.operation === AppSettings.ACTIVE_OPERATION.toLowerCase() || operation.operation === AppSettings.COMPLETED.toLowerCase()) {
      const dialogValue = this.dialogMethod(Messages.CHANGE_STATUS_OF_ACADEMICSESSION,
        true, AppSettings.YES, AppSettings.No, operation.operation.toUpperCase(), operation.clickedRow.statusName.toUpperCase());

      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.onChangeAcademicSession(operation);
        }
      });
    }
    if (operation.operation === AppSettings.EDIT) {
      this.closeAddPanel = false;
      this.schoolAcademicSessionService.schoolAcademicSessionDetails(operation.clickedRow.id).subscribe(res => this.getAcademicSessionDetailsById(res), error => {
        this.errorResponse(error);
      });
      if (!fromViewEdit){
        this.schoolBoardDetails();
      }
      this.schoolAcademicSessionId = operation.clickedRow.id;
    }
  }
  getAcademicSessionDetailsById(data: any): void {
    this.isUpdateData = true;
    this.newAcademicSessionForm.patchValue(data);
    this.newAcademicSessionForm.patchValue({
      displayName: data.name
    });
    this.classSectionData = data.classesOfferedViewModel;
    this.courseRequirementSelect = data.courseRquirementsViewModel;
    this.gridClassOfferedList();
    this.setCourseTableData();
    if (!this.availableSchoolBoards.length){
     this.getAvailableSchoolBoards();
    }
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
  }
  onChangeAcademicSession(operation: any): void {
    this.academisSessionStatuses.statusViewModel.forEach(element => {
      if (element.name.toLowerCase() === operation.operation) {
        this.schoolAcademicSessionStatusViewModel = {
          schoolAcademicSessionId: operation.clickedRow.id,
          statusId: element.id
        };
        this.schoolAcademicSessionService.updateStatus(this.schoolAcademicSessionStatusViewModel).subscribe(res => {
          this.getAcademicSessionGrid();
          this.commonService.sendAcademicSessionId();
          this.openSnackBar(res.messages.ResultMessage);
        }, error => {
          if (error.error.messages.ResultMessage === 'INV_C_S') {
            const dialogValue = this.dialogMethod(
              'Course configuration is missing for some or all of the classes in the academic session. Do you still wish to continue to make the academic session Active ?',
              true, AppSettings.YES, AppSettings.No);

            dialogValue.afterClosed().subscribe(action => {
              if (action === AppSettings.YES) {
                this.schoolAcademicSessionService.confirmAndUpdateStatus(this.schoolAcademicSessionStatusViewModel).subscribe(res => {
                  this.getAcademicSessionGrid();
                  this.commonService.sendAcademicSessionId();
                  this.openSnackBar(res.messages.ResultMessage);
                }, err => {
                  this.errorResponse(err);
                });
              }
            });
          } else {
            this.errorResponse(error);
          }
        });
      }
    });
  }
  clearCourseReq(operation: any): void {
    if (operation === 'clearAll') {
      this.openDialog('Please confirm to clear all the entries to start over.');
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: {
        text: this.commonService.getTranslation(message),
        action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
      },
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.NO) {
        this.cd.detectChanges();
        this.dialogRef.closeAll();
      }
      if (action === AppSettings.YES) {
        this.courseRequirementSelect = [];
        this.setCourseTableData();
        this.cd.detectChanges();
        this.dialogRef.closeAll();
      }
    });
  }

  courseRequirementsActions(event): void {
    this.courseRequirementSelect = this.courseRequirementSelect.filter(e => e !== event.clickedRow);
    this.setCourseTableData();
    this.checkCourseOffered();
  }

  onClickClassOfferedNext(): void {
    if (!this.classesOfferedForm.value.checkLength) {
      this.openSnackBar('Please select atleast 1 class to continue', true);
    }
  }
  onClearValidators(): void {
    this.courseRequirementsForm.reset();
    this.checkCourseOffered();
  }

  checkCourseOffered(): void {
    this.invalidCourseCategories = [];
    const c = this.groupByArbitraryNumOfGroup(this.courseRequirementSelect, ['schoolBoardId', 'classId']);
    this.schoolClassesList.then((classess: any) => {
      if (this.courseRequirementSelect.length) {
        this.courseCategoryList.forEach(categoryId => {
          c.forEach(element => {
            element.groups.forEach(elementa => {
              const filterData = elementa.groups.filter(i => i.courseCategoryId === categoryId.value).length;
              if (filterData !== 0 && filterData < categoryId.requiredCount) {
                this.invalidCourseCategories.push(
                  { class: classess.find(cl => cl.value === elementa.classId).label, category: categoryId.label, count: categoryId.requiredCount });
              }
            });
          });
        });
      }
      if (this.invalidCourseCategories.length > 0) {
        this.courseRequirementsForm.patchValue({ isValidCourseForm: null });
      } else {
        this.courseRequirementsForm.patchValue({ isValidCourseForm: true });
      }
    });
  }

  onClickCourseOfferedNext(): void {
    this.checkCourseOffered();
    if (!this.courseRequirementsForm.value.isValidCourseForm) {
      const erroMsg = [];
      erroMsg.push({ line: 'The courses do not meet the requirements for the selected category. Please check the category requirements and try again.' });
      _.uniqBy(this.invalidCourseCategories, 'class').forEach(invalidCousreData => {
        erroMsg.push({ line: [invalidCousreData.class, invalidCousreData.category, 'Required Count ' + invalidCousreData.count].join('-') });
      });
      this.openSnackBar(erroMsg, true);
    }else {
      this.courseRequireForm.resetForm();
    }
  }
 
}
