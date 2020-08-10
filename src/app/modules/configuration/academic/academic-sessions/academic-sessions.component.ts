import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, URLConstants, Pattern, Messages } from 'app/app.constants';
import { SchoolAcademicSessionFilterView } from '../model/school-academicsession-filter-view';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { CommonService } from 'app/service/common.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { SchoolAcademicSessionStatusViewModel } from '../model/school-academicsession-status-view';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { SchoolAcademicSessionViewModel } from '../model/schoolacademic-session-view-model';
import { SchoolAcademicClassSectionView } from '../model/school-academic-class-section-view';
import { ClassRequirementView } from '../model/class-requirement-view';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { SchoolAcademicSessionChangeView } from '../model/school-academic-session-change-view';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { SchoolService } from 'app/service/manage-school/school.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-academic-sessions',
  templateUrl: './academic-sessions.component.html',
  styleUrls: ['./academic-sessions.component.scss'],
  providers: [SchoolAcademicSessionService, GradeSetupService, SchoolService]
})
export class AcademicSessionsComponent extends CommonComponent implements OnInit {
  @ViewChild('stepper') stepper;
  @ViewChild('academicForm') academicForm;
  @ViewChild('courseRequireForm') courseRequireForm;
  @ViewChild('classofferForm') classofferForm;
  schoolAcademicSessionChangeView: SchoolAcademicSessionChangeView;
  schoolAcademicSessionViewModel: SchoolAcademicSessionViewModel;
  schoolAcademicSessionClassSections: Array<SchoolAcademicClassSectionView>;
  classRequirements: Array<ClassRequirementView>;

  // variable declarations
  newAcademicSessionForm: FormGroup;
  classesOfferedForm: FormGroup;
  courseRequirementsForm: FormGroup;

  dataLoaded = Promise.resolve(false);
  classDataLoaded = Promise.resolve(false);

  schoolBoardDropDown: DropDownConfModel;
  classDropDown: DropDownConfModel;
  sectionDropDown: DropDownConfModel;
  courseCategoryDropDown: DropDownConfModel;
  courseDropDown: DropDownConfModel;
  selectedClassDropDown: DropDownConfModel;
  selectedSchoolBoardDropDown: DropDownConfModel;
  interactedStepperIndex: Number = 0;

  newAcademicSessionFormDetails = false;
  classesOfferedFormDetails = false;
  courseRequirementFormDetails = false;
  buttonDisable = false;
  closeAddPanel: boolean;
  passMarks = false;
  invalidDataFound = false;
  isSchoolOnlineApllication = false;
  isUpdateData = false;
  isValidNewAcademic = false;
  isSchoolBoards = false;
  isCheckReqCount = false;
  isValidCourseRequirement = false;
  schoolAcademicSessionId: any;
  httpStatus: any;
  classOfferedStepper: any;
  courseRequirementsStepper: any;
  validClassOfferedLengthStepper: any;
  minDate: any;

  filterClasses: Array<any> = [];
  filterSections: Array<any> = [];
  filterCourseCategory: Array<any> = [];
  filterCourse: Array<any> = [];
  schoolBoardsList: Array<any> = [];

  courseCategoryList: Array<any> = [];
  schoolBoardOptions: Array<any> = [];

  selectedClass: Array<any> = [];
  selectedSchoolBoards: Array<any> = [];

  filterRowData: any = [];
  classOfferedTab: {};
  courseReqTab: {};

  classSectionOfferedSelect: Array<any>;
  classSectionOfferedSelectList: Array<any>;
  classSectionData: Array<any>;

  courseRequirementSelect: Array<any>;
  courseRequirementSelectList: Array<any>;
  courseRequirementsData: Array<any>;

  classOfferedGridHeaderData: any[];
  classOfferedGridColumns: string[] = [];

  classRequirementsGridHeaderData: any[];
  classRequirementsGridColumns: string[] = [];

  columns: { field: string; header: string; sort: boolean; }[];
  tableSettings: any;
  currentComponent = 'AcademicSessionsComponent';
  filterViewModel: SchoolAcademicSessionFilterView;
  rows: any[];
  totalRowsCount: any;
  pageCnt: number;
  schoolAcademicSessionStatusViewModel: SchoolAcademicSessionStatusViewModel;
  academisSessionStatuses: any;
  loaded = Promise.resolve(true);
  count: number;
  hideGrid = false;
  errorCountValid: number;
  courseFormBoards: any[] = [];
  previousClassSectionsData: any[] = [];
  constructor(public dialogRef: MatDialog, private schoolService: SchoolService,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    public commonService: CommonService, private router: Router,
    private statusService: StatusService, private _fb: FormBuilder,
    private gradeSetupService: GradeSetupService,
    private cd: ChangeDetectorRef, public snackBar: MatSnackBar, public routes: ActivatedRoute,
    public location: Location) {
    super();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.newAcademicSessionForm = this._fb.group({
      displayName: new FormControl('', [Validators.maxLength(45), Validators.pattern(Pattern.PREVENT_SPACES)]),
      code: new FormControl('', [Validators.maxLength(10), Validators.pattern(Pattern.PREVENT_SPACES)]),

      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      onlineApplicationStartDate: new FormControl(),
      onlineApplicationEndDate: new FormControl(),
      onlineApplicationFee: new FormControl('', [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS),
      Validators.pattern(Pattern.PREVENT_SPACES), Validators.max(99999.99), Validators.min(0)])
    });

    this.classesOfferedForm = this._fb.group({
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      schoolBoardId: new FormControl(null, [Validators.required]),
      maximumCapacity: new FormControl('', [Validators.max(100),
      Validators.min(1), Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.pattern(Pattern.PREVENT_SPACES)]),
      checkLength: new FormControl('', [Validators.required]),
    });

    this.courseRequirementsForm = this._fb.group({
      classId: new FormControl(''),
      schoolBoardId: new FormControl(null, [Validators.required]),
      courseCategoryId: new FormControl(''),
      courseId: new FormControl(''),
      passMarks: new FormControl('', [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN),
      Validators.min(1), Validators.max(99)]),
    });

    this.classOfferedGridHeaderData = [
      { field: 'schoolBoardName', header: 'School Board', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionName', header: 'Section', sort: false },
      { field: 'maxCapacity', header: 'Maximum Capacity', sort: false },
      { field: 'delete', header: 'Actions', sort: false },
    ];

    this.classRequirementsGridHeaderData = [
      { field: 'className', header: 'Class', sort: false },
      { field: 'schoolBoardName', header: 'School Board', sort: false },
      { field: 'courseCategoryName', header: 'Course Category', sort: false },
      { field: 'courseName', header: 'Course', sort: false },
      { field: 'passMarks', header: 'Pass Marks', sort: false },
      { field: 'delete', header: 'Actions', sort: false },
    ];
    this.getAvailableSchoolBoards();

    // Duplicate Entryes
    // this.classOfferedTab = {
    //   rows: [],
    //   columns: this.classOfferedGridHeaderData,
    //   tablename: 'Selected Class Offerings',
    //   isPaginationRequired: false
    // };

    this.courseReqTab = {
      rows: [],
      columns: this.classRequirementsGridHeaderData,
      tablename: 'Course Requirements',
      isPaginationRequired: false
    };

    this.schoolAcademicSessionViewModel = {
      schoolAcademicSessionClassSections: this.schoolAcademicSessionClassSections = [],
      classRequirements: this.classRequirements = []
    };

    this.schoolAcademicSessionChangeView = {
      schoolAcademicSessionClassSections: this.schoolAcademicSessionClassSections = [],
      classRequirements: this.classRequirements = []
    };
    this.selectedClass = [];
    this.selectedSchoolBoards = [];
    this.classSectionOfferedSelect = [];
    this.courseRequirementSelect = [];
    this.courseRequirementsData = [];
    this.classSectionData = [];
    this.validClassOfferedLengthStepper = 1;
    this.classOfferedStepper = 2;
    this.courseRequirementsStepper = 3;
    this.schoolBoardDetails();
    this.setColumnHeaders();
    this.initializeFilterView();
    this.initializeTableSettings();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAcademicSessionGrid();
    this.getStatus();
    this.schoolOnlineApplications();

    this.routes.params.subscribe((params: Params) => {
      if (params['id']) {
        this.schoolAcademicSessionId = params['id'];
        const operations = {
          operation: 'edit',
          clickedRow: {
            id: this.schoolAcademicSessionId
          }
        };
        this.actions(operations);
        this.hideGrid = true;
      } else {
        this.hideGrid = false;
      }
    });

  }

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

  getStatus(): void {
    this.statusService.getAllStatuses(AppSettings.ACADEMICSESSION_CODE).subscribe(res => this.academisSessionStatuses = res);
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

  actions(operation: any): void {
    if (operation.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate(
        [URLConstants.ACADEMICSESSION_DETAILS + operation.clickedRow.id]);
    } else if (operation.operation === AppSettings.ACTIVE_OPERATION.toLowerCase() || operation.operation === AppSettings.COMPLETED.toLowerCase()) {
      const dialogValue = this.dialogMethod(Messages.CHANGE_STATUS_OF_ACADEMICSESSION,
        true, AppSettings.YES, AppSettings.No, operation.operation.toUpperCase(), operation.clickedRow.statusName.toUpperCase());

      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.statusChangeOk(operation);
        }
      });
    }
    if (operation.operation === AppSettings.EDIT) {
      this.closeAddPanel = false;
      this.courseRequirementsData = [];
      this.classSectionData = [];
      this.selectedClass = [];
      this.selectedSchoolBoards = [];
      this.classSectionOfferedSelect = [];
      this.courseRequirementSelect = [];
      this.removeValidatorsClassOfferedForm();
      this.removeCourseReqValaidators();
      this.removeCourseBoardValidators();
      this.removeBoardValidators();
      this.schoolAcademicSessionService.schoolAcademicSessionDetails(operation.clickedRow.id).subscribe(res => this.getAcademicSessionDetailsById(res), error => {
        this.errorResponse(error);
      });
      this.schoolAcademicSessionId = operation.clickedRow.id;
    }
  }

  statusChangeOk(operation: any): void {
    this.academisSessionStatuses.statusViewModel.forEach(element => {
      if (element.name.toLowerCase() === operation.operation) {
        this.schoolAcademicSessionStatusViewModel = {
          schoolAcademicSessionId: operation.clickedRow.id,
          statusId: element.id
        };
        this.schoolAcademicSessionService.updateStatus(this.schoolAcademicSessionStatusViewModel).subscribe(res => {
          if (res.statusCode === this.httpStatus.OK) {
            this.getAcademicSessionGrid();
            this.commonService.sendAcademicSessionId();
            this.openSnackBar(res.messages.ResultMessage);
          }
        }, error => {
          this.errorResponse(error);
        });
      }
    });
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string, lb?: string, vl?: string): MatDialogRef<CustomDialogComponent, any> {
    const params = { value: vl, label: lb };
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData, params), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  getAcademicSessionDetailsById(data: any): void {
    if (data.statusCode === this.httpStatus.OK) {
      this.isUpdateData = true;
      this.newAcademicSessionForm.controls['displayName'].setValue(data.name);
      this.newAcademicSessionForm.controls['code'].setValue(data.code);
      this.newAcademicSessionForm.controls['startDate'].setValue(data.startDate);
      this.newAcademicSessionForm.controls['endDate'].setValue(data.endDate);
      this.newAcademicSessionForm.controls['onlineApplicationStartDate'].setValue(data.onlineApplicationStartDate);
      this.newAcademicSessionForm.controls['onlineApplicationEndDate'].setValue(data.onlineApplicationEndDate);
      this.newAcademicSessionForm.controls['onlineApplicationFee'].setValue(data.onlineApplicationFee);
      this.classSectionData = data.classesOfferedViewModel;
      this.courseRequirementsData = data.courseRquirementsViewModel;
      this.classSectionOfferedSelect = this.classSectionData;
      this.courseRequirementSelect = this.courseRequirementsData;
      this.gridClassOfferedList();
      this.gridCourseRequirementList();
      this.removeValidatorsClassOfferedForm();
      this.getAvailableSchoolBoards();
      this.stepper._steps._results.forEach((x) => {
        x.interacted = true;
      });
      this.interactedStepperIndex = this.stepper._steps._results.length;
      this.customSteperLabelChange();
      this.validateDate();
    }
  }

  // Get School Board Details 
  schoolBoardDetails(): void {
    this.schoolBoardOptions = [];
    this.gradeSetupService.schoolBoards().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          this.isSchoolBoards = true;
          response.listViews.forEach(element => {
            this.schoolBoardOptions.push({
              label: element.name,
              value: element.id
            });
            this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: true };
          });
          this.classesOfferedForm.controls['schoolBoardId'].setValue(this.schoolBoardOptions[0].value);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getClassesList();
  }

  // Get Classes to filter table data
  getClassesList(): void {
    this.filterClasses = [];
    this.schoolAcademicSessionService.classes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterClasses.push({
              label: element.name,
              value: element.id
            });
          });
          this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getSectionsList();
  }

  // Get Sections to filter table data
  getSectionsList(): void {
    this.filterSections = [];
    this.schoolAcademicSessionService.sections().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterSections.push({
              label: element.name,
              value: element.id
            });
          });
        }
        this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: true };
      }
    }, error => {
      this.errorResponse(error);
    });
    this.courseCategoryDetails();
  }

  courseCategoryDetails(): void {
    this.courseDropDown = { multiSelect: true, placeholder: 'Course', noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.courseCategoryList = [];
    this.filterCourseCategory = [];
    this.schoolAcademicSessionService.courseCategoryDetails().subscribe(response => {
      if (response.courseCategoryDetailsModel != null) {
        if (response.courseCategoryDetailsModel.length > 0) {
          this.courseCategoryList = response.courseCategoryDetailsModel;
          response.courseCategoryDetailsModel.forEach(element => {
            this.filterCourseCategory.push({
              label: element.name,
              value: element.id
            });
          });
          this.courseCategoryDropDown = {
            multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory,
            noEntryFoundLabel: 'No Data Found', isRequired: true
          };
        }
        else {
          this.courseCategoryDropDown = {
            multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory,
            noEntryFoundLabel: 'No Data Found', isRequired: true
          };
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onSelectCourseCategory(data: any): void {
    let courseTypeId;
    let courseTypeSub;
    this.filterCourse = [];
    this.courseCategoryList.forEach(element => {
      if (element.id === data.value) {
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
          this.filterCourse.push({
            label: course.name,
            value: course.id
          });
        });
      }
      else {
        this.openSnackBar(AppSettings.SELECTED_COURSE_CATEGORY_COULD_HAVE_COURSE, true);
      }
      this.dataLoaded = Promise.resolve(true);
      this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };
    }, error => {
      this.errorResponse(error);
    });
  }

  newAcademicSessionDetails(newAcademicSessForm: any): boolean {
    if (newAcademicSessForm.status === AppSettings.INVALID) {
      this.newAcademicSessionFormDetails = true;
      return false;
    }
  }

  classesFormValid(): void {
    this.scrollIntoView('app-table');
    if (this.classSectionData.length > 0) {
      this.removeValidatorsClassOfferedForm();
      this.stepper.selectedIndex = this.classOfferedStepper;
    }
    else {
      this.validateClassOfferedForm();
      this.stepper.selectedIndex = this.validClassOfferedLengthStepper;
    }
  }

  courseReqValid(): void {
    this.removeCourseReqValaidators();
    this.stepper.selectedIndex = this.courseRequirementsStepper;
    this.scrollIntoView('app-table');
  }

  // add new form for assessment categories
  onAddFormClick(): void {
    this.interactedStepperIndex = 0;
    this.closeAddPanel = false;
    this.isUpdateData = false;
    this.passMarks = false;
    this.dataLoaded = Promise.resolve(false);
    this.stepper.reset();
    this.schoolBoardDetails();
  }

  // Cancel Button
  cancel(): void {
    if (this.academicForm) {
      this.academicForm.resetForm();
    }
    if (this.classofferForm) {
      this.classofferForm.resetForm();
    }
    if (this.courseRequireForm) {
      this.courseRequireForm.resetForm();
    }
    this.stepper.reset();
    this.closeAddPanel = true;
    this.buttonDisable = false;
    this.selectedClass = [];
    this.selectedSchoolBoards = [];
    this.classSectionOfferedSelect = [];
    this.courseRequirementSelect = [];
    this.courseRequirementsData = [];
    this.classSectionData = [];
    this.filterCourse = [];
    this.passMarks = false;
    this.dataLoaded = Promise.resolve(false);
    this.getAcademicSessionGrid();
    this.gridClassOfferedList();
    this.gridCourseRequirementList();
    if (this.hideGrid) {
      this.location.back();
    }
  }

  validClassSection(classesOfferedForm: any): void {
    this.classesOfferedForm.controls['checkLength'].clearValidators();
    this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
    if (this.classSectionData && this.classSectionData.length > 0) {
      this.previousClassSectionsData = Object.assign(this.classSectionData);
    }

    this.validateClassOfferedForm();
    if (this.isSchoolBoards === false) {
      this.removeBoardValidators();
    }

    if (classesOfferedForm.status === AppSettings.VALID) {
      this.classSectionData = [];
      if (this.classSectionOfferedSelect.length === 0) {
        this.classesOfferedForm.value.classId.forEach(i => this.classesOfferedForm.value.sectionId.forEach(j => {
          this.classSectionOfferedSelect.push({
            classId: i.value, className: i.label,
            sectionId: j.value, sectionName: j.label,
            schoolBoardId: this.classesOfferedForm.value.schoolBoardId ? this.classesOfferedForm.value.schoolBoardId : null,
            schoolBoardName: this.classesOfferedForm.value.schoolBoardId ? this.getBoardNameBasedOnId(this.classesOfferedForm.value.schoolBoardId) : null,
            maxCapacity: this.classesOfferedForm.value.maximumCapacity
          });
        }));
        if (this.previousClassSectionsData && this.previousClassSectionsData.length) {
          if (this.checkClassSectionsList(this.classSectionOfferedSelectList, this.previousClassSectionsData)) {
            this.updateClassSchoolBoardDetails();
            this.previousClassSectionsData = [];
          } else {
            this.updateClassSchoolBoardDetails();
            return;
          }
        }
      }
      else {
        this.classSectionOfferedSelectList = [];
        this.classesOfferedForm.value.classId.forEach(k => this.classesOfferedForm.value.sectionId.forEach(l => {
          this.classSectionOfferedSelectList.push({
            classId: k.value, className: k.label,
            sectionId: l.value, sectionName: l.label,
            schoolBoardId: this.classesOfferedForm.value.schoolBoardId ? this.classesOfferedForm.value.schoolBoardId : null,
            schoolBoardName: this.classesOfferedForm.value.schoolBoardId ? this.getBoardNameBasedOnId(this.classesOfferedForm.value.schoolBoardId) : null,
            maxCapacity: this.classesOfferedForm.value.maximumCapacity
          });
        }));
        if (this.previousClassSectionsData && this.previousClassSectionsData.length) {
          if (this.checkClassSectionsList(this.classSectionOfferedSelectList, this.previousClassSectionsData)) {
            this.updateClassSectionList();
            this.previousClassSectionsData = [];
          } else {
            this.updateClassSchoolBoardDetails();
            return;
          }
        }
      }

      this.filterRowDataList();
      this.classSectionOfferedSelect = this.filterRowData;
      this.classSectionData = this.classSectionOfferedSelect;

      this.updateClassSchoolBoardDetails();
      this.gridClassOfferedList();
      this.removeValidatorsClassOfferedForm();
      const previousBoardValue = this.classesOfferedForm.value.schoolBoardId;
      this.classesOfferedForm.reset();
      this.classesOfferedForm.patchValue({ schoolBoardId: previousBoardValue });
    }
    else {
      this.classesOfferedFormDetails = true;
    }
  }

  checkClassSectionsList(selectedClassSections: any, previousClssSectionsData: any): boolean {
    const classesList = selectedClassSections.filter(element => previousClssSectionsData.some(elt => elt.classId
      === element.classId && elt.sectionId === element.sectionId && elt.schoolBoardId !== element.schoolBoardId));
    if (classesList && classesList.length > 0) {
      this.openSnackBar(AppSettings.SECTION_WITH_MULTIPLE_BOARD, true);
      return false;
    } else {
      return true;
    }
  }

  updateClassSectionList(): void {
    this.classSectionOfferedSelect.forEach(e => this.classSectionOfferedSelectList.forEach(e1 => {
      if (e.classId === e1.classId && e.sectionId === e1.sectionId && e.schoolBoardId === e1.schoolBoardId) {
        e.schoolBoardName = e1.schoolBoardName;
        e.maxCapacity = e1.maxCapacity;
      }
      else {
        this.classSectionOfferedSelect.push({
          classId: e1.classId, className: e1.className,
          sectionId: e1.sectionId, sectionName: e1.sectionName,
          schoolBoardId: e1.schoolBoardId ? e1.schoolBoardId : null,
          schoolBoardName: e1.schoolBoardName ? e1.schoolBoardName : null,
          maxCapacity: e1.maxCapacity
        });
      }
    }));
  }

  updateClassSchoolBoardDetails(): void {
    this.selectedClass = [];
    this.selectedSchoolBoards = [];

    this.selectedClass =  this.filterClasses.filter(e => this.classSectionOfferedSelect.some(el => el.classId === e.value));
    // const uniqueClasses = Array.from(new Set(this.classSectionOfferedSelect.map(a => a.classId))).map(value => this.classSectionOfferedSelect.find(a => a.classId === value));

    // uniqueClasses.forEach(element => {
    //   this.selectedClass.push({ value: element.classId, label: element.className });
    // });

    const uniqueSchoolBoards = Array.from(new Set(this.classSectionOfferedSelect.map(a => a.schoolBoardId)))
      .map(value => this.classSectionOfferedSelect.find(a => a.schoolBoardId === value));

      
    if (uniqueSchoolBoards.length > 0) {
      uniqueSchoolBoards.forEach(element => {
        this.selectedSchoolBoards.push({ value: element.schoolBoardId, label: element.schoolBoardName });
      });
    }
    this.classDataLoaded = Promise.resolve(true);
    this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: false };
  }

  classesOfferedActions(operation: any): void {
    if (operation.operation === AppSettings.DELETE) {
      if (this.courseRequirementsData.filter(x => x.classId === operation.clickedRow.classId && x.schoolBoardId === operation.clickedRow.schoolBoardId).length > 0) {
        this.openSnackBar(AppSettings.COURSE_OFFERED_HAS_COURSE_REQUIREMENTS, true);
        this.stepper.selectedIndex = 2;
      }
      else {
        const deleteIndex = this.classSectionOfferedSelect.findIndex(x => x.classId === operation.clickedRow.classId &&
          x.sectionId === operation.clickedRow.sectionId && x.schoolBoardId === operation.clickedRow.schoolBoardId);
        this.classSectionOfferedSelect.splice(deleteIndex, 1);
        this.classSectionData = this.classSectionOfferedSelect;
        this.gridClassOfferedList();
      }
    }
  }

  gridClassOfferedList(): void {
    this.classOfferedTab = {
      rows: this.classSectionData,
      columns: this.classOfferedGridHeaderData,
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
    else {
      this.validateClassOfferedForm();
      this.classesOfferedForm.controls['checkLength'].setValidators([Validators.required]);
      this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
    }
    this.getCourseFormBoards();
    this.loaded = Promise.resolve(true);
    this.updateClassSchoolBoardDetails();
  }

  removeValidatorsClassOfferedForm(): void {
    this.classesOfferedForm.controls['classId'].clearValidators();
    this.classesOfferedForm.controls['sectionId'].clearValidators();
    this.classesOfferedForm.controls['schoolBoardId'].clearValidators();
    this.classesOfferedForm.controls['checkLength'].clearValidators();

    this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: false };
    this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: false };
    this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: false };

    this.updateValueValidityCourseOfferedForm();
  }

  validateClassOfferedForm(): void {
    this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.filterClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.filterSections, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: true };

    this.classesOfferedForm.controls['classId'].setValidators([Validators.required]);
    this.classesOfferedForm.controls['sectionId'].setValidators([Validators.required]);
    this.classesOfferedForm.controls['schoolBoardId'].setValidators([Validators.required]);

    this.updateValueValidityCourseOfferedForm();
  }

  updateValueValidityCourseOfferedForm(): void {
    this.classesOfferedForm.controls['classId'].updateValueAndValidity();
    this.classesOfferedForm.controls['sectionId'].updateValueAndValidity();
    this.classesOfferedForm.controls['schoolBoardId'].updateValueAndValidity();
    this.classesOfferedForm.controls['checkLength'].updateValueAndValidity();
  }

  //  remove validators for school board in classes offered
  removeBoardValidators(): void {
    this.classesOfferedForm.controls['schoolBoardId'].clearValidators();
    this.classesOfferedForm.controls['schoolBoardId'].updateValueAndValidity();

    this.schoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.schoolBoardOptions, noEntryFoundLabel: 'No Data Found', isRequired: false };
  }

  //  remove validators for school board in class requirement
  removeCourseBoardValidators(): void {
    this.courseRequirementsForm.controls['schoolBoardId'].clearValidators();
    this.courseRequirementsForm.controls['schoolBoardId'].updateValueAndValidity();

    this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: false };
  }

  validCourseRequirements(data: any): boolean {
    this.stepper.selected.interacted = true;
    this.count = 0;
    this.validateCourseRequirements();
    if (this.courseRequirementsForm.invalid) {
      return false;
    }
    this.courseCategoryValid();
    if (this.isSchoolBoards === false) {
      this.removeCourseBoardValidators();
      this.invalidDataFound = true;
    }
    if (this.courseRequirementsForm.status === AppSettings.VALID && this.isValidCourseRequirement === false) {
      this.courseCategoryList.forEach(e1 => {
        if (this.courseRequirementsForm.value.courseCategoryId.value === e1.id &&
          this.courseRequirementsForm.value.courseCategoryId.label === e1.name) {
          if (this.isSchoolBoards === true) {
            this.courseRequirementsForm.value.classId.forEach(e => {
              const obj1 = this.classSectionData.filter(function (node): boolean {
                return node.classId === e.value;
              });
              this.invalidDataFound = obj1.some(function (el: any): boolean {
                return el.schoolBoardId === data.value.schoolBoardId;
              });
              if (this.invalidDataFound === false) {
                this.openSnackBar(AppSettings.CLASSES_MISMATCH_BOARD, true);
                this.count++;
                return;
              }
            });
          }
        }
      });
      if (this.invalidDataFound === false || this.count > 0) {
        return false;
      }
      else {
        this.courseRequirementsData = [];
        if (this.courseRequirementSelect.length === 0) {
          const selectedSchoolBoard = this.availableSchoolBoards.find(x => x.value === this.courseRequirementsForm.value.schoolBoardId);
          this.courseRequirementsForm.value.classId.forEach(element2 => this.courseRequirementsForm.value.courseId.forEach(element3 => {
            this.courseRequirementSelect.push({
              classId: element2.value, className: element2.label,
              schoolBoardId: this.courseRequirementsForm.value.schoolBoardId ? this.courseRequirementsForm.value.schoolBoardId : null,
              schoolBoardName: selectedSchoolBoard ? selectedSchoolBoard.label : null,
              courseCategoryId: this.courseRequirementsForm.value.courseCategoryId.value, courseCategoryName:
                this.courseRequirementsForm.value.courseCategoryId.label, courseId: element3.value, courseName: element3.label,
              passMarks: this.courseRequirementsForm.value.passMarks
            });
          }));
        }
        else {
          this.courseRequirementSelectList = [];
          const selectedSchoolBoard = this.availableSchoolBoards.find(x => x.value === this.courseRequirementsForm.value.schoolBoardId);
          this.courseRequirementsForm.value.classId.forEach(i => this.courseRequirementsForm.value.courseId.forEach(j => {
            this.courseRequirementSelectList.push({
              classId: i.value, className: i.label,
              schoolBoardId: this.courseRequirementsForm.value.schoolBoardId ? this.courseRequirementsForm.value.schoolBoardId : null,
              schoolBoardName: selectedSchoolBoard ? selectedSchoolBoard.label : null,
              courseCategoryId: this.courseRequirementsForm.value.courseCategoryId.value,
              courseCategoryName: this.courseRequirementsForm.value.courseCategoryId.label, courseId: j.value, courseName: j.label,
              passMarks: this.courseRequirementsForm.value.passMarks
            });
          }));
          this.updateCourseRequirementList();
        }
        this.filterCourseRequirementRowDataList();
        this.courseRequirementSelect = this.filterRowData;
        this.courseReqCountValidation();
        if (this.errorCountValid === 0) {
          this.courseRequirementsData = this.courseRequirementSelect;
          this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
          this.selectedSchoolBoardDropDown = {
            multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards,
            noEntryFoundLabel: 'No Data Found', isRequired: false
          };
          this.courseRequirementsForm.controls['passMarks'].setValue('');

          this.gridCourseRequirementList();
          this.courseRequirementsForm.controls['courseCategoryId'].reset();
          this.courseRequirementsForm.controls['courseId'].reset();
          this.filterCourse = [];
          this.dataLoaded = Promise.resolve(true);
          this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };
          this.removeCourseReqValaidators();
        }
      }
    }
    else {
      this.courseRequirementFormDetails = true;
    }
    setTimeout(() => {
      this.stepper.selected.interacted = false;
      this.courseRequireForm.submitted = false;
    });
  }


  updateCourseRequirementList(): void {
    this.courseRequirementSelect.forEach(k => this.courseRequirementSelectList.forEach(l => {
      if (k.classId === l.classId && k.courseId === l.courseId && k.courseCategoryId === l.courseCategoryId && k.schoolBoardId === l.schoolBoardId) {
        k.className = l.className;
        k.courseName = l.courseName;
        k.schoolBoardId = l.schoolBoardId ? l.schoolBoardId : null;
        k.schoolBoardName = l.schoolBoardName ? l.schoolBoardName : null;
        k.courseCategoryId = l.courseCategoryId;
        k.courseCategoryName = l.courseCategoryName;
        k.passMarks = this.courseRequirementsForm.value.passMarks;
      }
      else {
        this.courseRequirementSelect.push({
          classId: l.classId, className: l.className,
          schoolBoardId: l.schoolBoardId ? l.schoolBoardId : null,
          schoolBoardName: l.schoolBoardId ? l.schoolBoardName : null,
          courseCategoryId: l.courseCategoryId, courseCategoryName: l.courseCategoryName, courseId: l.courseId, courseName: l.courseName,
          passMarks: l.passMarks
        });
      }
    }));
  }

  validateCourseRequirements(): void {
    this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.selectedSchoolBoardDropDown = { multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.courseCategoryDropDown = { multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory, noEntryFoundLabel: 'No Data Found', isRequired: true };
    this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: 'No Data Found', isRequired: true };

    this.courseRequirementsForm.controls['classId'].setValidators([Validators.required]);
    this.courseRequirementsForm.controls['courseCategoryId'].setValidators([Validators.required]);
    this.courseRequirementsForm.controls['passMarks'].setValidators([Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN),
    Validators.pattern(Pattern.PREVENT_SPACES), Validators.min(1), Validators.max(99)]);
    this.courseRequirementsForm.controls['schoolBoardId'].setValidators([Validators.required]);
    this.courseRequirementsForm.controls['courseId'].setValidators([Validators.required]);
    this.courseRequirementFormDetails = true;


    this.updateValidityCourseReqForm();
  }

  removeCourseReqValaidators(): void {
    this.courseRequirementsForm.controls['classId'].clearValidators();
    this.courseRequirementsForm.controls['courseCategoryId'].clearValidators();
    this.courseRequirementsForm.controls['schoolBoardId'].clearValidators();
    this.courseRequirementsForm.controls['courseId'].clearValidators();
    this.courseRequirementsForm.controls['passMarks'].clearValidators();

    this.selectedClassDropDown = { multiSelect: true, placeholder: 'Class', data: this.selectedClass, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: true };
    this.selectedSchoolBoardDropDown = {
      multiSelect: false, placeholder: 'School Board', data: this.selectedSchoolBoards, noEntryFoundLabel: AppSettings.NODATA_FOUND,
      isRequired: false
    };
    this.courseCategoryDropDown = {
      multiSelect: false, placeholder: 'Course Category', data: this.filterCourseCategory, noEntryFoundLabel: AppSettings.NODATA_FOUND,
      isRequired: true
    };
    this.filterCourse = [];
    this.courseDropDown = { multiSelect: true, placeholder: 'Course', data: this.filterCourse, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: true };
    this.courseRequirementFormDetails = false;
    if (this.stepper){
      this.stepper.selected.interacted = false;
    }
    this.updateValidityCourseReqForm();
  }

  updateValidityCourseReqForm(): void {
    this.courseRequirementsForm.controls['classId'].updateValueAndValidity();
    this.courseRequirementsForm.controls['courseCategoryId'].updateValueAndValidity();
    this.courseRequirementsForm.controls['schoolBoardId'].updateValueAndValidity();
    this.courseRequirementsForm.controls['courseId'].updateValueAndValidity();
    this.courseRequirementsForm.controls['passMarks'].updateValueAndValidity();
  }

  courseRequirementsActions(operation: any): void {
    if (operation.operation === AppSettings.DELETE) {
      const deleteIndex = this.courseRequirementSelect.
        findIndex(x => x.classId === operation.clickedRow.classId &&
          x.courseCategoryId === operation.clickedRow.courseCategoryId && x.courseId === operation.clickedRow.courseId
          && x.schoolBoardId === operation.clickedRow.schoolBoardId);

      const coursesList = this.courseRequirementSelect.filter(elt => elt.courseCategoryId === operation.clickedRow.courseCategoryId
        && elt.classId === operation.clickedRow.classId && elt.schoolBoardId === operation.clickedRow.schoolBoardId);
      this.courseCategoryList.forEach(e1 => {
        if (coursesList.length) {
          if (e1.id === operation.clickedRow.courseCategoryId) {
            if (coursesList.length - 1 < e1.requiredCount) {
              this.openSnackBar(AppSettings.COURSE_CATEGORY_REQUIRED_COUNT + ' ' + e1.requiredCount, true);
            } else {
              this.courseRequirementSelect.splice(deleteIndex, 1);
            }
          }
        }
      });

      this.courseRequirementsData = this.courseRequirementSelect;
      this.gridCourseRequirementList();
    }
  }

  gridCourseRequirementList(): void {
    let headerOptions;
    if (this.courseRequirementsData.length) {
      headerOptions = {
        additionalButtons: [
          {
            name: 'Clear All',
            clickAction: 'clearAll'
          },
        ]
      };
    }
    this.courseReqTab = {
      rows: this.courseRequirementsData,
      columns: this.classRequirementsGridHeaderData,
      tablename: 'Course Requirements',
      isPaginationRequired: false,
      rowGroupingColumns: ['className', 'schoolBoardName', 'courseCategoryName'],
      headerOperations: headerOptions
    };

    if (this.courseRequirementsData.length > 0) {
      this.courseRequirementsData.forEach(e => {
        e.operations = [{
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE_ICON,
          operationName: AppSettings.DELETE
        }];
      });
    }

    this.loaded = Promise.resolve(true);
    this.cd.detectChanges();
  }

  filterCourseRequirementRowDataList(): void {
    this.filterRowData = [];
    this.filterRowData = this.courseRequirementSelect;
    const x = [];
    this.filterRowData.forEach(element7 => {
      if (x.length === 0) {
        x.push(element7);
      }
      else {
        this.filterRowData.forEach((element8: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.className === element8.className && value.courseName === element8.courseName &&
              value.schoolBoardName === element8.schoolBoardName && value.courseCategoryName === element8.courseCategoryName;
          });
          if (foundIndex === -1) {
            x.push(element8);
          }
        });
      }
    });
    this.filterRowData = x;
  }

  filterRowDataList(): void {
    this.filterRowData = [];
    this.filterRowData = this.classSectionOfferedSelect;
    const x = [];
    this.filterRowData.forEach(element => {
      if (x.length === 0) {
        x.push(element);
      }
      else {
        this.filterRowData.forEach((elmnt: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.className === elmnt.className && value.sectionName === elmnt.sectionName &&
              value.schoolBoardName === elmnt.schoolBoardName && value.maxCapacity === elmnt.maxCapacity;
          });
          if (foundIndex === -1) {
            x.push(elmnt);
          }
        });
      }
    });
    this.filterRowData = x;
  }

  onSubmitAcademicSessions(): void {
    if (this.isUpdateData === true) {
      this.schoolAcademicSessionChangeView = this.newAcademicSessionForm.value;
      this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = [];
      this.schoolAcademicSessionChangeView.classRequirements = [];
      this.assigningValidData();
      this.schoolAcademicSessionChangeView.id = this.schoolAcademicSessionId;
      this.schoolAcademicSessionService.updateSchoolAcademicSession(this.schoolAcademicSessionChangeView).subscribe(res => {
        if (res.statusCode === this.httpStatus.OK) {
          this.commonService.sendAcademicSessionId();
          this.cancel();
          this.openSnackBar(res.messages.ResultMessage);
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    }
    else {
      this.schoolAcademicSessionViewModel = this.newAcademicSessionForm.value;
      this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = [];
      this.schoolAcademicSessionViewModel.classRequirements = [];
      this.assigningValidData();
      this.schoolAcademicSessionService.schoolAcademicSession(this.schoolAcademicSessionViewModel).subscribe(res => {
        if (res.statusCode === this.httpStatus.OK) {
          this.commonService.sendAcademicSessionId();
          this.cancel();
          this.openSnackBar(res.messages.ResultMessage);
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  assigningValidData(): void {
    this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections = [];
    this.schoolAcademicSessionViewModel.classRequirements = [];
    this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = [];
    this.schoolAcademicSessionChangeView.classRequirements = [];
    this.classSectionData.forEach(e => {
      this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections.push({
        classId: e.classId, sectionId: e.sectionId, maxCapacity: e.maxCapacity, schoolBoardId: e.schoolBoardId
      });
    });
    this.schoolAcademicSessionChangeView.schoolAcademicSessionClassSections = this.schoolAcademicSessionViewModel.schoolAcademicSessionClassSections;
    if (this.courseRequirementsData === undefined) {
      this.schoolAcademicSessionViewModel.classRequirements = [];
      this.schoolAcademicSessionChangeView.classRequirements = [];
    }
    else {
      this.courseRequirementsData.forEach(e1 => {
        if (e1.passMarks === '') {
          e1.passMarks = null;
        }
        this.schoolAcademicSessionViewModel.classRequirements.push({
          classId: e1.classId, courseCategoryId: e1.courseCategoryId, courseId: e1.courseId, passMarks: e1.passMarks, schoolBoardId: e1.schoolBoardId
        });
      });
      this.schoolAcademicSessionChangeView.classRequirements = this.schoolAcademicSessionViewModel.classRequirements;
    }
  }

  // check online applications for the selected school
  schoolOnlineApplications(): void {
    this.isSchoolOnlineApllication = false;
    this.schoolService.schoolDetails().subscribe((res: any) => {
      if (res.schoolData.allowOnlineStudentApplications === 1) {
        this.isSchoolOnlineApllication = true;
        this.isValidNewAcademic = true;
      }
    });
  }

  validApplicationDate(): void {
    if (this.newAcademicSessionForm.controls.startDate.value != null && this.newAcademicSessionForm.controls.endDate.value != null) {
      this.isValidNewAcademic = true;
    }
  }

  onSelect($event): void {

  }

  clearCourseReq(event): void {
    if (event === AppSettings.CLEAR && this.courseRequirementsData.length > 0) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_CLEAR_ALL_ITEMS, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.courseRequirementsData = [];
          this.courseRequirementSelect = [];
          this.gridCourseRequirementList();
        }
      });
    }
    else {
      this.openSnackBar(AppSettings.NODATA_FOUND, true);
    }
  }

  OnSelectionChange(event: any): void {
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
    } else if (event.selectedIndex === 2) {
      if (this.courseFormBoards.length) {
        this.courseRequirementsForm.patchValue({ schoolBoardId: this.courseFormBoards[0].value });
      }
    }
    if (event.selectedIndex === 2) {
        this.stepper._steps._results[2].interacted = false;
        this.courseRequireForm.submitted = false;
    }
  }

  courseCategoryValid(): boolean {
    let errorFlag = 0;
    if (this.courseRequirementsData.length > 0) {
      const validCourseRequirementDetails = [];
      this.courseRequirementsForm.value.classId.forEach(e => {
        this.courseRequirementsForm.value.courseId.forEach(e1 => {
          if (this.courseRequirementsForm.value.schoolBoardId != null) {
            validCourseRequirementDetails.push({
              classId: e.value,
              courseCategoryId: this.courseRequirementsForm.value.courseCategoryId.value,
              schoolBoardId: this.courseRequirementsForm.value.schoolBoardId ? this.courseRequirementsForm.value.schoolBoardId : null,
              courseId: e1.value
            });
          }
          else {
            validCourseRequirementDetails.push({
              classId: e.value,
              courseCategoryId: this.courseRequirementsForm.value.courseCategoryId.value,
              schoolBoardId: this.courseRequirementsForm.value.schoolBoardId ? this.courseRequirementsForm.value.schoolBoardId : null,
              courseId: e1.value
            });
          }
        });
      });
      validCourseRequirementDetails.forEach(p => {
        this.courseRequirementsData.forEach(q => {
          if (p.classId === q.classId && p.schoolBoardId === q.schoolBoardId &&
            p.courseId === q.courseId && p.courseCategoryId !== q.courseCategoryId) {
            this.isValidCourseRequirement = true;
            errorFlag = 1;
            return;
          }
        });
      });

      if (errorFlag === 0) {
        this.isValidCourseRequirement = false;
      }
      else {
        this.openSnackBar(AppSettings.DUPLICATE_COURSE_WITH_COURSE_CATEGORY, true);
        return false;
      }
    }
  }

  courseReqCountValidation(): void {
    const coursesList = this.courseCategoryList.filter(elt => elt.id === this.courseRequirementsForm.value.courseCategoryId.value);
    this.courseRequirementsForm.value.classId.forEach(cId => {
      const courseCatgoriesList = this.courseRequirementSelect.filter(x => x.classId === cId.value && x.schoolBoardId === this.courseRequirementsForm.value.schoolBoardId
        && x.courseCategoryId === this.courseRequirementsForm.value.courseCategoryId.value);
      if (courseCatgoriesList && courseCatgoriesList.length < coursesList[0].requiredCount && coursesList[0].requiredCount > 0) {
        this.errorCountValid = 1;
        const index = this.courseRequirementSelect.findIndex(x => x.classId === cId.value && x.schoolBoardId === this.courseRequirementsForm.value.schoolBoardId
          && x.courseCategoryId === this.courseRequirementsForm.value.courseCategoryId.value);
        this.courseRequirementSelect.splice(index, courseCatgoriesList.length);
      //  this.courseRequirementSelect =  this.courseRequirementSelect.filter(x => x.classId !== cId.value && x.schoolBoardId !== this.courseRequirementsForm.value.schoolBoardId
      //     && x.courseCategoryId !== this.courseRequirementsForm.value.courseCategoryId.value);
      }
      else {
        this.errorCountValid = 0;
      }
    });

    if (this.errorCountValid === 1) {
      this.openSnackBar(AppSettings.COURSE_CATEGORY_REQUIRED_COUNT + ' ' + coursesList[0].requiredCount, true);
      return;
    }
  }

  validateDate(): void {
    const date = new Date(this.newAcademicSessionForm.value.onlineApplicationStartDate);
    date.setDate(date.getDate() + 1);
    this.minDate = date;
  }

  getBoardNameBasedOnId(id): any {
    const selectedBoard = this.availableSchoolBoards.find(e => e.value === id);
    return selectedBoard && selectedBoard.label;
  }
  getCourseFormBoards(): any {
    this.courseFormBoards = [];
    this.classSectionData.map(e => {
      if (!(this.courseFormBoards.find(el => el.value === e.schoolBoardId))) {
        this.courseFormBoards.push({
          label: e.schoolBoardName,
          value: e.schoolBoardId
        });
      }
    });
    if (this.courseFormBoards.length) {
      this.courseRequirementsForm.patchValue({ schoolBoardId: this.courseFormBoards[0].value });
    }
    return this.courseFormBoards;
  }
}
