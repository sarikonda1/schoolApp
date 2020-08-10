import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { TestScheduleService } from 'app/service/grading-service/api/test-schedule-service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AppSettings, Pattern } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { TestView } from '../models/test-view';
import { TestClassSectionView } from '../models/test-class-section-view';
import { TestScheduleClassSectionFilterViewModel } from '../models/test-schedule-class-section-view-model';
import { TestScheduleView } from '../models/test-schedule-view';
import { TestSchedulesFilterViewModel } from '../models/test-schedules-filter-view-model';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { TestScoreService } from 'app/service/grading-service/api/testScore.service';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.scss'],
  providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, TestScheduleService, GardeTermConfigurationService, TestScoreService]
})
export class TestScheduleComponent extends CommonComponent implements OnInit {
  testTypeAndGradingForm: FormGroup;
  testDetailsForm: FormGroup;
  classSectionForm: FormGroup;
  testScheduleForm: FormGroup;
  schoolBoardsList: any[] = [];
  classesList: any[] = [];
  gradeTermList: any[] = [];
  testTypesList: any[] = [];
  sectionsList: any[] = [];
  coursesList: any[] = [];
  courseSectionsList: any[] = [];
  classSectionIdList: any[] = [];
  testScheduleDetails: any[] = [];
  classSectionDetails: any[] = [];
  gradeTermIds: Array<any> = [];
  tableData: Array<any> = [];
  testClassSectionsCols: any[];
  testView: TestView;
  testClassSectionView: TestClassSectionView;
  testScheduleView: TestScheduleView;
  testScheduleData: any[] = [];
  testScheduleClassSectionFilterView: TestScheduleClassSectionFilterViewModel;
  testScheduleFilterView: TestSchedulesFilterViewModel;
  testSchedulValidate = true;
  isSchoolhasBoards = true;
  closeAddPanel: boolean;
  classValidate = true;
  isTestEdit = false;
  validate = true;
  schoolBoardId: any;
  className: any;
  rows: Array<any>;
  cols: any[];
  testClassSectionsRows: Array<any>;
  pageCnt: number;
  totalItems: number;
  tabSettings: {};
  tableSettings: {};
  modelname: any;
  currentComponentName = 'TestScheduleComponent';
  childComponentName = 'ScheduleComponent';
  testScheduleId: any;
  testId: any;
  isClassSectionStepperValid = false;
  interactedStepperIndex: Number = 0;
  testScheduleClassList: any[] = [];
  testScheduleSectionList: any[] = [];
  classId: any;
  sectionId: any;
  isTestsViewActive = true;
  index: any = 0;
  isStaffLogin = false;
  allClassSectionDetailsData = Promise.resolve([]);
  selectedSection = Promise.resolve([]);
  @ViewChild('testScheduleFormData') testScheduleFormData;
  @ViewChild('classSectionFormData') classSectionFormData;
  @ViewChild('testDetailForm') testDetailForm;
  @ViewChild('stepper') stepper;

  testScheduleControls = ['classId', 'sectionId', 'courseId', 'testDate', 'testStepper'];
  classSectionFormControls = ['classId', 'sectionId', 'classSectionStepper'];
  isMarks = false;
  allClassSectionDetails: any[] = [];
  selectedClasses: any[] = [];
  startAtTestDate: any;
  constructor(private classService: ClassesConfigService,
    private _formBuilder: FormBuilder, private gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService,
    private testScheduleService: TestScheduleService, public gardeTermConfigurationService: GardeTermConfigurationService, private commonComponent: CommonComponent,
    public dialog: MatDialog, public commonService: CommonService,
    private router: Router, public snackBar: MatSnackBar, private cd: ChangeDetectorRef, public testScoreService: TestScoreService) {
    super();

    this.testScheduleFilterView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
      classes: [],
      sections: [],
      terms: [],
      boardIds: [],
      testTypes: [],
      testNames: [],
      statuses: [],
      isPostToCalendar: [],
      courses: [],
      testStartDatesBegin: null,
      testStartDatesEnd: null,
      testEndDateBegin: null,
      testEndDateEnd: null,
      testScheduleDateBegin: null,
      testScheduleDateEnd: null
    };

    this.testScheduleClassSectionFilterView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
      classes: [],
      sections: [],
      testId: '',
      statuses: [],
      courses: [],
      testScheduleDateBegin: null,
      testScheduleDateEnd: null,
    };

  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {

    this.switchTabs(window.location.hash);
  }

  ngOnInit(): void {
    this.testTypeAndGradingForm = this._formBuilder.group({
      boardId: [null, [Validators.required]],
      gradeTermId: [null, [Validators.required]],
      testTypeId: [null, [Validators.required]],
      testMaxMarks: [null, [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(9999)]]
    });

    this.testDetailsForm = this._formBuilder.group({
      testName: [null, [Validators.required, Validators.maxLength(45)]],
      fromDate: '',
      toDate: '',
      isPostCalender: [AppSettings.NO, [Validators.required]]
    });

    this.classSectionForm = this._formBuilder.group({
      classId: [null, [Validators.required]],
      sectionId: [null],
      classSectionStepper: [null, [Validators.required]]
    });

    this.testScheduleForm = this._formBuilder.group({
      classId: [null, [Validators.required]],
      sectionId: [null],
      courseId: [null, [Validators.required]],
      testDate: [null, [Validators.required]],
      testStepper: [null, [Validators.required]]
    });

    this.testView = {
      testName: '',
      testClassSections: [this.testClassSectionView],
    };


    this.cols = [
      { field: 'termName', header: 'Grade Term', sort: true },
      { field: 'testType', header: 'Test Type', sort: true },
      { field: 'testName', header: 'Test Name', sort: true },
      { field: 'testStartDate', header: 'Start Date', sort: true },
      { field: 'testEndDate', header: 'End Date', sort: true },
      { field: 'isPostToCalendar', header: 'Calendar', sort: true },
      { field: 'classSections', header: 'Class & Sections', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.testClassSectionsCols = [
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'course', header: 'Subject', sort: true },
      { field: 'testDate', header: 'Test Date', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];


    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.testScheduleFilterView = modelTableComponent;
    }
    // / initializing table settings /
    this.tableSettings = {
      rows: [],
      columns: this.testClassSectionsCols,
      model: this.testScheduleClassSectionFilterView,
      componentName: this.childComponentName,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      hideHeader: true,
    };

    if (this.getTokenParam('_as')) {
      this.getSchoolBoardsList();
      this.getTestTypesList();
      this.tabSettings = {
        rows: [],
        columns: this.cols,
        model: this.testScheduleFilterView,
        componentName: this.currentComponentName,
        isPaginationRequired: true,
        totalRowsCount: this.totalItems,
        pageCnt: this.pageCnt,
        isRowExpandRequired: true,
        headerOperations: {
          addingForm: {
            btnName: AppSettings.NEW,
            required: true,
          },
          infoButton: {
            required: true,
            text: 'Test Schedules/Marks'
          },
        }
      };
      if (!window.location.hash) {
        this.selected(this.index);
      }
      else {
        this.switchTabs(window.location.hash);
      }

    }
    else {
      this.acadamicSessionExist();
    }
  }
  acadamicSessionExist(): void {
    setTimeout(() => {
      this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
    });
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.testScheduleFilterView,
      componentName: this.currentComponentName,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      isRowExpandRequired: true,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Test Schedules/Marks'
        },
      }
    };
  }


  getSchoolBoardsList(): void {
    this.gradeSetupService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews && res.listViews.length) {
        this.isSchoolhasBoards = true;
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
        });
        this.setDefaultBoard();
      } else {
        this.isSchoolhasBoards = false;
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getTestTypesList(): void {
    this.gardeTermConfigurationService.fetchTestTypes().subscribe(res => {
      if (res.listViews && res.listViews.length) {
        this.isSchoolhasBoards = true;
        res.listViews.forEach(element => {
          this.testTypesList.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  loadTestSchedules(): void {
    this.testScheduleService.getAllTestSchedules(this.testScheduleFilterView.sortBy, this.testScheduleFilterView.sortOrder,
      this.testScheduleFilterView.terms, this.testScheduleFilterView.testTypes, this.testScheduleFilterView.testNames,
      this.testScheduleFilterView.testStartDatesBegin, this.testScheduleFilterView.testStartDatesEnd,
      this.testScheduleFilterView.testEndDateBegin, this.testScheduleFilterView.testEndDateEnd,
      this.testScheduleFilterView.isPostToCalendar, this.testScheduleFilterView.classes, this.testScheduleFilterView.sections,
      this.testScheduleFilterView.statuses, this.testScheduleFilterView.courses,
      this.testScheduleFilterView.testScheduleDateBegin, this.testScheduleFilterView.testScheduleDateEnd,
      this.testScheduleFilterView.pageNumber, this.testScheduleFilterView.pageSize).subscribe(data => this.response(data), error => {
        this.errorResponse(error);
      });

  }

  response(data: any): void {
    if (data.testScheduleListViewModel) {
      this.rows = data.testScheduleListViewModel.list;
      this.totalItems = data.testScheduleListViewModel.totalItems;
    } else {
      this.rows = [];
    }

    this.rows.forEach((e: any) => {
      e.testStartDate = (e.testStartDate == null) ? null : this.commonService.customDateFormat(e.testStartDate, this.getSchoolDateFormat()).date;
      e.testEndDate = (e.testEndDate == null) ? null : this.commonService.customDateFormat(e.testEndDate, this.getSchoolDateFormat()).date;
      this.updateRowActions(e);
    });

    this.tabSettings = {
      columns: this.cols,
      model: this.testScheduleFilterView,
      rows: this.rows,
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      isRowExpandRequired: true,
      headerOperations: {
        addingForm: {
          btnName: AppSettings.NEW,
          required: true,
        },
        infoButton: {
          required: true,
          text: 'Test Schedules/Marks'
        },
      }
    };
    this.scrollIntoView('app-table');
  }

  updateRowActions(row: any): void {
    if (row.isHomeWorkTest) {
      row.operations = [
        {
          name: AppSettings.EDIT_VIEW_OPERATION,
          icon: AppSettings.EDIT,
          operationName: AppSettings.EDIT_VIEW_OPERATION
        }
      ];
    }
    else {
      row.operations = [
        {
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT,
          operationName: AppSettings.EDIT
        }
      ];
    }
  }

  loadTestClassSections(testId: any): void {

    this.testScheduleService.getAllTestClassSections(this.testScheduleClassSectionFilterView.sortBy, this.testScheduleClassSectionFilterView.sortOrder, testId,
      this.testScheduleFilterView.classes, this.testScheduleFilterView.sections,
      this.testScheduleFilterView.statuses, this.testScheduleFilterView.courses,
      this.testScheduleFilterView.testStartDatesBegin, this.testScheduleFilterView.testStartDatesEnd,
      this.testScheduleClassSectionFilterView.pageNumber, this.testScheduleClassSectionFilterView.pageSize).subscribe(data => this.classSectionresponse(data), error => {
        this.errorResponse(error);
      });
  }

  classSectionresponse(data: any): void {
    if (data.testClassSectionsListViewModel) {
      this.testClassSectionsRows = data.testClassSectionsListViewModel.list;
      this.totalItems = data.testClassSectionsListViewModel.totalItems;
      this.pageCnt = data.testClassSectionsListViewModel.totalPages;
    } else {
      this.testClassSectionsRows = [];
    }


    this.testClassSectionsRows.forEach((e: any) => {
      if (e.isEditable) {

        switch (true) {
          case e.statusCode === AppSettings.TEST_SCHEDULED_CODE:
            e.operations = [
              {
                name: AppSettings.COMPLETE,
                icon: AppSettings.APPROVE_ICON,
                operationName: AppSettings.COMPLETE
              }, {
                name: AppSettings.CANCEL,
                icon: AppSettings.DELETE_ICON,
                operationName: AppSettings.CANCEL
              },
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }
            ];
            break;
          case e.statusCode === AppSettings.TEST_COMPLETED_CODE:
            e.operations = [
              {
                name: AppSettings.CANCEL,
                icon: AppSettings.DELETE_ICON,
                operationName: AppSettings.CANCEL
              },
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }];
            break;

          case e.statusCode === AppSettings.TEST_CANCELED_CODE:

            e.operations = [
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              }
            ];
            break;
        }

      }
      e.testDate = (e.testDate == null) ? null : this.commonService.customDateFormat(e.testDate, this.getSchoolDateFormat()).date;
    });

    this.tableSettings = {
      columns: this.testClassSectionsCols,
      model: this.testScheduleClassSectionFilterView,
      rows: this.testClassSectionsRows,
      tablename: 'Test Schedules',
      componentName: this.childComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      hideHeader: true,
      isClSideFltReq: true,
      isClientSidePaginationReq: true
    };
  }

  testScheduleTableData(_event: TestSchedulesFilterViewModel): void {
    this.testScheduleFilterView = _event;
    this.loadTestSchedules();
  }

  testClassSectionsTableData(_event: TestScheduleClassSectionFilterViewModel): void {
    this.testScheduleClassSectionFilterView = _event;
    this.loadTestClassSections(this.testId);
  }

  rowActions(data: any): void {
    this.testId = data.clickedRow.id;
    if (data.operation === AppSettings.EDIT) {
      this.isTestEdit = true;
      this.testScheduleService.getByTest(data.clickedRow.id).subscribe(res => this.getByTestRes(res), error => {
        this.errorResponse(error);
      });
    }

    else if (data.operation === AppSettings.EDITVIEW) {
      this.openSnackBar(AppSettings.HOMEWORK_TEST_VALIDATION, true);
    }

    else {
      this.loadTestClassSections(this.testId);
    }
  }
  getByTestRes(res: any): void {
    this.allClassSectionDetails = [];
    this.testScheduleClassList = [];
    this.testScheduleData = [];
    this.closeAddPanel = false;
    this.isTestEdit = true;

    this.testDetailsForm.patchValue(res);
    this.testDetailsForm.controls['isPostCalender'].setValue((res.isPostCalender === 1) ? AppSettings.YES : AppSettings.NO);
    this.testTypeAndGradingForm.patchValue(res);
    this.onTestTypeSelect(this.testTypeAndGradingForm.value.testTypeId);
    this.onSelectSchoolBoard(res.boardId);

    this.onSelectGradingTerm(res);

    this.testClassSectionView = {
      schoolAcademicSessionClassSectionId: null,
      testSchedules: []
    };

    this.testView = {
      testName: '',
      testClassSections: [],
    };

    for (const classSection of res.testClassSectionDetails) {
      if (this.testScheduleClassList.length) {
        const scheduleIndex = this.testScheduleClassList.findIndex((element) =>
          (element.value === classSection.classId));
        if (scheduleIndex <= -1) {
          this.testScheduleClassList.push({
            label: classSection.className,
            value: classSection.classId,
          });
        }
      }
      else {
        this.testScheduleClassList.push({
          label: classSection.className,
          value: classSection.classId,
        });
      }


      this.courseSectionsList.push({
        label: classSection.sectionName,
        value: classSection.schoolAcademicSessionClassSectionId,
        classId: classSection.classId
      });

      for (const testSchedule of classSection.testSchedules) {
        this.testScheduleDetails.push({
          class: testSchedule.className,
          section: testSchedule.sectionName,
          course: testSchedule.courseName,
          testDate: this.getFormattedDateByAPIPattern(testSchedule.testDate),
          courseId: testSchedule.courseId,
          sectionId: classSection.schoolAcademicSessionClassSectionId

        });

      }
      const testClassSection = {
        label: '',
        value: 0,
        sections: []
      };
      const index = this.allClassSectionDetails.findIndex(x => x.value === classSection.classId);

      testClassSection.sections.push({
        label: classSection.sectionName,
        value: classSection.schoolAcademicSessionClassSectionId
      });
      if (index === -1) {
        testClassSection.label = classSection.className;
        testClassSection.value = classSection.classId;
        this.allClassSectionDetails.push(testClassSection);
      }
      else {
        this.allClassSectionDetails[index].sections.push(testClassSection.sections[0]);
      }
    }
    this.testScheduleData = res.testClassSectionDetails;

    this.classSectionDetails.length ? this.classSectionForm.controls['classSectionStepper'].setValue('active') :
      this.classSectionForm.controls['classSectionStepper'].setValidators(Validators.required);

    this.testScheduleDetails.length ? this.testScheduleForm.controls['testStepper'].setValue('active') :
      this.testScheduleForm.controls['testStepper'].setValidators(Validators.required);

    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
      x.completed = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.classSectionFormData.resetForm();
    this.testScheduleFormData.resetForm();

    this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
    this.customSteperLabelChange();
  }

  ClassSectionrowActions(response: any): void {
    this.testScheduleId = response.clickedRow.id;
    if (response.operation === AppSettings.COMPLETE.toLowerCase()) {


      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.COMPLETE_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.testScheduleService.completeOrCancelSchedule(this.testScheduleId, true).subscribe(res => this.completeOrCancelRequest(res), error => {
            this.commonComponent.errorResponse(error);
          });
        }
      });
    }

    if (response.operation === AppSettings.CANCEL.toLowerCase()) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.CANCEL_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.testScheduleService.completeOrCancelSchedule(this.testScheduleId, false).subscribe(res => this.completeOrCancelRequest(res), error => {
            this.commonComponent.errorResponse(error);
          });
        }
      });
    }
    if (response.operation === AppSettings.MARKS.toLowerCase()) {
      if (this.isStaffLogin) {
        this.router.navigate([RouteConfig.Staff_Test_Grading + '/' + response.clickedRow.id, { operation: AppSettings.TEST }]);
      }
      else {
        this.router.navigate([RouteConfig.Test_Grading + '/' + response.clickedRow.id, { operation: AppSettings.TEST }]);
      }

    }
  }

  completeOrCancelRequest(response: any): void {
    this.loadTestClassSections(this.testId);
    this.openSnackBar(response.messages.ResultMessage);
  }

  onSelectSchoolBoard(schoolBoard: any): void {
    this.gradeTermList = [];
    this.classesList = [];
    this.coursesList = [];
    this.schoolBoardId = this.testTypeAndGradingForm.value.boardId;
    this.gardeTermConfigurationService.gradingTermConfigurationGradingTermsByStaffGet(schoolBoard).subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.gradeTermList.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });

    this.classTimetableService.classTimetableCoursesGet(this.testTypeAndGradingForm.value.boardId).subscribe(response => {
      if (response.commonViewModel && response.commonViewModel.length) {
        response.commonViewModel.forEach(element => {
          this.coursesList.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onSelectGradingTerm(gradingTermId: any): void {
    this.classesList = [];
    this.sectionsList = [];
    this.classSectionDetails = [];
    this.testScheduleDetails = [];
    this.testScheduleClassList = [];
    this.testScheduleSectionList = [];
    this.testScheduleData = [];
    this.allClassSectionDetails = [];
    this.testScheduleForm.reset();
    this.classSectionForm.reset();
    this.gardeTermConfigurationService.gradingTermConfigurationFetchClassesByGradingtermid(this.testTypeAndGradingForm.value.gradeTermId).subscribe(response => {
      if (response && response.length) {
        response.forEach(element => {
          this.classesList.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onSelectClass(classId: any): void {
    this.className = this.classesList.find(x => x.value === classId).label;
    this.classId = classId;
    this.sectionsList = [];
    this.testScheduleService.getAllDetails(this.schoolBoardId, classId, this.testTypeAndGradingForm.value.gradeTermId).subscribe(response => {
      if (response.academicSectionsLists && response.academicSectionsLists.length) {
        response.academicSectionsLists.forEach(element => {
          this.sectionsList.push({
            label: element.sectionName,
            value: element.schoolAcademicClassSectionId
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
    this.classSectionForm.patchValue({ sectionId: null });
  }

  onClassSectionSelectBtn(): void {
    if (this.classSectionForm.value.classId != null) {
      const index = this.allClassSectionDetails.findIndex(x => x.value === this.classSectionForm.value.classId);

      if (this.classSectionForm.value.sectionId == null || !this.classSectionForm.value.sectionId.length) {
        if (index === -1) {
          this.allClassSectionDetails.push(
            {
              label: this.className,
              value: this.classSectionForm.value.classId,
              sections: this.sectionsList
            });
        }
        else {
          this.allClassSectionDetails.push(
            {
              label: this.className,
              value: this.classSectionForm.value.classId,
              sections: this.sectionsList
            });
          this.allClassSectionDetails.splice(index, 1);
        }

      }
      else {
        if (index === -1) {
          this.allClassSectionDetails.push(
            {
              label: this.className,
              value: this.classSectionForm.value.classId,
              sections: this.classSectionForm.value.sectionId
            });
        }
        else {
          this.classSectionForm.value.sectionId.forEach(element1 => {
            const i = this.allClassSectionDetails[index].sections.findIndex(x => x.value === element1.value);
            if (i === -1) {
              this.allClassSectionDetails[index].sections.push(element1);

            }
          });
        }
      }
    }

    this.cd.detectChanges();
    this.validateTestSchedules();
    this.onSelectTestScheduleClass(this.selectedClasses);
    this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
  }
  onClassSectionDelete(classes: any, sectionId: any): void {
    this.allClassSectionDetails.map((element: any, i: any) => {
      if (element.value === classes.value) {
        element.sections = element.sections.filter(e => e.value !== sectionId.value);
        if (!element.sections.length) {
          this.allClassSectionDetails.splice(i, 1);
        }
      }
    });
    this.testScheduleDetails = this.testScheduleDetails.filter(x => x.sectionId !== sectionId.value);
    this.testScheduleData = this.testScheduleData.filter(x => x.schoolAcademicSessionClassSectionId !== sectionId.value);
    this.validateTestSchedules();
    this.onSelectTestScheduleClass(this.selectedClasses);
    let sections = [];
    if (this.testScheduleForm.value.sectionId != null) {
      sections = this.testScheduleForm.value.sectionId.filter(e => e.value !== sectionId.value);
    }

    this.testScheduleForm.patchValue({ sectionId: sections.length ? sections : null });

    if (!this.allClassSectionDetails.length) {
      this.testScheduleForm.patchValue({ classId: null, sectionId: null });
    }
    this.cd.detectChanges();
    this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
  }

  ontestScheduleDelete(data: any): void {
    const index = this.testScheduleDetails.findIndex(x => x.sectionId === data.sectionId && x.courseId === data.courseId);
    if (index !== -1) {
      this.testScheduleDetails.splice(index, 1);
    }
    const index1 = this.testScheduleData.findIndex(x => x.schoolAcademicSessionClassSectionId === data.sectionId);
    if (index1 !== -1) {

      this.testScheduleData[index1].testSchedules.forEach((element: any, scheduleIndex: any) => {
        if (element.courseId === data.courseId) {
          this.testScheduleData[index1].testSchedules.splice(scheduleIndex, 1);
        }
      });
    }

    this.getOptionalScheduleStep();
  }

  onSelectTestScheduleClass(classId: any): void {
    this.selectedClasses = classId;
    if (this.selectedClasses !== null && this.selectedClasses.length > 1) {
      this.testScheduleForm.controls['sectionId'].setValue(null);
    }
    if (this.selectedClasses !== null && this.selectedClasses.length === 1) {
      this.selectedSection = Promise.resolve(this.selectedClasses[0].sections);
    }
  }
  onSubmit(): void {
    Object.assign(this.testView, this.testDetailsForm.value, this.testTypeAndGradingForm.value);

    this.testView.testClassSections.forEach((data: any, index: any) => {
      if (data === undefined) {
        this.testView.testClassSections.splice(index, 1);
      }
    });

    this.testScheduleData.forEach((element: any) => {
      const index = this.testView.testClassSections.findIndex(x => x.schoolAcademicSessionClassSectionId === element.schoolAcademicSessionClassSectionId);
      element.testSchedules.forEach(testSchedule => testSchedule.testMaxMarks = this.testTypeAndGradingForm.value.testMaxMarks);

      let testClassSection = {};
      if (index === -1) {
        testClassSection = {
          schoolAcademicSessionClassSectionId: element.schoolAcademicSessionClassSectionId,
          testSchedules: element.testSchedules
        };

        this.testView.testClassSections.push(testClassSection);
      }
      else {
        if (element.testSchedules.length) {
          const testScheduleIndex = this.testView.testClassSections[index].testSchedules.findIndex(x => x.courseId === element.testSchedules[0].courseId);
          if (testScheduleIndex === -1) {
            this.testView.testClassSections[index].testSchedules.push(element.testSchedules[0]);
          }
          else {
            this.testView.testClassSections[index].testSchedules[testScheduleIndex].testDate = element.testSchedules[0].testDate;
          }
        }
      }
    });

    this.testView.testClassSections = this.testView.testClassSections.filter(x => x.schoolAcademicSessionClassSectionId != null);

    this.testView.isPostCalender = this.testDetailsForm.value.isPostCalender === AppSettings.YES ? 1 : 0;
    if (this.testView.fromDate !== '' && this.testView.fromDate !== null) {
      this.testView.fromDate = this.getFormattedDateByAPIPattern(this.testView.fromDate);
    }
    if (this.testView.toDate !== '' && this.testView.toDate !== null) {
      this.testView.toDate = this.getFormattedDateByAPIPattern(this.testView.toDate);
    }

    if (!this.isTestEdit) {
      this.testScheduleService.createTest(this.testView)
        .subscribe((res: any) => this.submitResponce(res), error => {
          this.errorResponse(error);
        });

    }
    else {
      this.testView['testId'] = this.testId;
      this.testScheduleService.updateTest(this.testView)
        .subscribe((res: any) => this.submitResponce(res), error => {
          this.errorResponse(error);
        });
    }
  }

  submitResponce(res: any): void {
    this.testScheduleDetails = [];
    this.classSectionDetails = [];
    this.testScheduleClassList = [];
    this.testScheduleSectionList = [];
    this.onCancel();
    this.loadTestSchedules();
    document.getElementById('resetButtonStepper').click();
    this.openSnackBar(res.messages.ResultMessage);
  }

  testScheduleSelectClick(): any {
    if (this.testScheduleForm.value.classId != null && this.testScheduleForm.value.courseId != null && this.testScheduleForm.controls.testDate.valid) {
      this.startAtTestDate = this.testScheduleForm.value.testDate;

      this.testScheduleForm.value.classId.forEach((classes, i) => {
        this.testScheduleForm.value.courseId.forEach(course => {

          this.testScheduleView = {
            courseId: course.value,
            testDate: this.getFormattedDateByAPIPattern(this.testScheduleForm.value.testDate),
            testMaxMarks: this.testTypeAndGradingForm.value.testMaxMarks
          };

          if (this.testScheduleForm.value.sectionId != null && this.testScheduleForm.value.sectionId.length) {
            this.testScheduleForm.value.sectionId.forEach(sections => {
              this.testData(classes, sections, course);
            });
          }
          else {
            classes.sections.forEach(sections => {
              this.testData(classes, sections, course);
            });
          }
        });
      });

      this.testScheduleData.forEach(element => {
        element.testSchedules.forEach(el1 => {
          const sIndex = this.testScheduleDetails.findIndex(x => x.sectionId === element.schoolAcademicSessionClassSectionId && x.courseId === el1.courseId);
          if (sIndex === -1) {
            this.testScheduleDetails.push({
              sectionId: element.schoolAcademicSessionClassSectionId,
              class: element.className,
              section: element.sectionName,
              course: this.coursesList.find(x => x.value === el1.courseId).label,
              courseId: el1.courseId,
              testDate: this.getFormattedDateByAPIPattern(this.testScheduleForm.value.testDate)
            });
          }
        });
      });
    }
  }
  testData(classes: any, sections: any, course: any): void {
    const scheduleIndex = this.testScheduleData.findIndex(x => x.schoolAcademicSessionClassSectionId === sections.value);

    if (scheduleIndex === -1) {
      this.testScheduleData.push(
        {
          className: classes.label,
          sectionName: sections.label,
          schoolAcademicSessionClassSectionId: sections.value,
          courseId: course.value,
          testSchedules: [this.testScheduleView]
        });
    }

    else {
      const c = this.testScheduleData[scheduleIndex].testSchedules.findIndex(x => x.courseId === course.value);
      if (c === -1) {
        this.testScheduleData[scheduleIndex].testSchedules.push(this.testScheduleView);
      }
      else {
        this.testScheduleData[scheduleIndex].testSchedules[c].testDate = this.getFormattedDateByAPIPattern(this.testScheduleForm.value.testDate);
      }
    }
    const detailsindex = this.testScheduleDetails.findIndex(x => x.sectionId === sections.value && x.courseId === course.value);
    if (detailsindex !== -1) {
      this.testScheduleDetails.splice(detailsindex, 1);
    }
  }
  testScheduleReset(): void {
    this.testScheduleForm.reset();
    this.testScheduleFormData.resetForm();
  }

  checkExistData(): any {
    let index = null;
    for (const classSection of this.testView.testClassSections) {
      if (classSection === undefined) {
        this.testView.testClassSections.splice(this.testView.testClassSections.indexOf(classSection), 1);
      }
      else if (classSection.schoolAcademicSessionClassSectionId === this.testScheduleForm.value.sectionId) {
        for (const ts of classSection.testSchedules) {
          if (ts.courseId === this.testScheduleForm.value.courseId) {
            classSection.testSchedules.splice(classSection.testSchedules.indexOf(ts), 1);
            this.testScheduleDetails.splice(classSection.testSchedules.indexOf(ts), 1);
          }
        }
        if (index !== false) {
          index = (this.testView.testClassSections.indexOf(classSection));
          break;
        }
      }
    }
    return index;
  }

  setTestView(): void {
    this.testClassSectionView = {
      schoolAcademicSessionClassSectionId: this.testScheduleForm.value.sectionId,
      testSchedules: [this.testScheduleView]
    };
    this.testView.testClassSections.push(this.testClassSectionView);
  }

  onCancel(): void {
    this.closeAddPanel = true;
    this.testScheduleFormData.resetForm();
    this.classSectionFormData.resetForm();
    this.testDetailForm.resetForm();
    this.classSectionForm.reset();
    this.testScheduleForm.reset();
    this.testScheduleClassList = [];
    this.courseSectionsList = [];

    for (const controls of this.classSectionFormControls) {
      this.classSectionForm.controls[controls].setValidators(Validators.required);
      this.classSectionForm.controls[controls].updateValueAndValidity();
    }

    this.stepper.reset();
    this.isTestEdit = true;
    this.testScheduleDetails = [];
    this.classSectionDetails = [];
    this.validate = true;
    this.testDetailsForm.controls['isPostCalender'].setValue(AppSettings.NO);
  }
  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialog.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }
  getNameBasedOnValue(name, value): any {
    if (value === '' || value === 0) {
      return '';
    }
    let x;
    switch (name) {
      case 'board':
        return (x = this.schoolBoardsList.filter(element => element.value === value)).length ? x[0].label : '';
      case 'gradingTerm':
        return (x = this.gradeTermList.filter(element => element.value === value)).length ? x[0].label : '';
      case 'testType':
        return (x = this.testTypesList.filter(element => element.value === value)).length ? x[0].label : '';
      case 'course':
        return (x = this.coursesList.filter(element => element.id === value)).length ? x[0].name : '';
      default: break;
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
    if (event.selectedIndex === 2) {
      (<any>Object).values(this.classSectionForm.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
        control.updateValueAndValidity();
      });
      this.classSectionFormData.submitted = false;
      this.stepper._steps._results[event.selectedIndex].interacted = false;
    }
    if (event.selectedIndex === 3) {
      this.allClassSectionDetailsData = Promise.resolve(this.allClassSectionDetails);
      if (this.testScheduleForm.value.classId != null && this.testScheduleForm.value.classId.length) {
        const removedClasses = [];
        this.testScheduleForm.value.classId.forEach((cls: any, i: any) => {
          const index = this.allClassSectionDetails.findIndex(e => e.value === cls.value);
          if (index !== -1) {
            removedClasses.push(cls);
          }
        });
        this.testScheduleForm.patchValue({ classId: removedClasses.length ? removedClasses : null });
      }
      (<any>Object).values(this.testScheduleForm.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
        control.updateValueAndValidity();
      });
      this.classSectionFormData.submitted = false;
      this.stepper._steps._results[event.selectedIndex].interacted = false;
    }
    if (event.selectedIndex > 4) {
      this.scrollIntoView('app-table');
    }
  }
  testScheduleNextBtn(): void {
    if (this.validateTestSchedules()) {
      this.openSnackBar(AppSettings.TEST_SCHEDULE_VALIDATION, true);
    }
  }

  validateTestSchedules(): boolean {
    let testFailed = false;
    for (let index = 0; index < this.allClassSectionDetails.length; index++) {
      for (let sections = 0; sections < this.allClassSectionDetails[index].sections.length; sections++) {
        const element = this.allClassSectionDetails[index].sections[sections];
        const checkTestSchedule = this.testScheduleDetails.filter(x => x.sectionId === element.value);
        if (checkTestSchedule.length === 0) {
          return testFailed = true;
        } else {
          testFailed = false;
        }
      }
    }
    return testFailed;
  }

  onAddFormClick(): void {

    this.isTestEdit = false;
    this.closeAddPanel = false;
    this.classSectionDetails = [];
    this.testScheduleDetails = [];

    this.testClassSectionView = {
      schoolAcademicSessionClassSectionId: null,
      testSchedules: []
    };
    this.testView = {
      testName: '',
      testClassSections: [this.testClassSectionView],
    };
    this.interactedStepperIndex = 0;
    this.stepper.reset();
    this.setDefaultBoard();
    this.testDetailsForm.controls['isPostCalender'].setValue(AppSettings.NO);
  }


  setDefaultBoard(): void {
    this.setFormControl('testTypeAndGradingForm', 'boardId', this.schoolBoardsList[0].value);
    this.onSelectSchoolBoard(this.schoolBoardsList[0].value);
  }
  getclassSectionDetails(): any {
    if (this.allClassSectionDetails.length) {

      return this.allClassSectionDetails;
    }
    return [];
  }
  selected(value: any): void {
    this.index = value;
    switch (value) {
      case 0: {
        this.isTestsViewActive = true;
        if (this.getTokenParam('_as')) {
          this.tabSettings = {
            rows: [],
            columns: this.cols,
            model: this.testScheduleFilterView,
            componentName: this.currentComponentName,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            pageCnt: this.pageCnt,
            isRowExpandRequired: true,
            headerOperations: {
              addingForm: {
                btnName: AppSettings.NEW,
                required: true,
              },
              infoButton: {
                required: true,
                text: 'Test Schedules/Marks'
              },
            }
          };
          this.loadTestSchedules();
        }
        else {
          this.acadamicSessionExist();
        }
        window.location.hash = 'TestView';
        break;
      }
      case 1: {
        this.isTestsViewActive = false;
        window.location.hash = 'TestScheduleView';
        break;
      }

      default: {
        break;
      }
    }
  }
  switchTabs(value): void {
    switch (value) {
      case '#TestView': {
        this.index = 0;
        break;
      }
      case '#TestScheduleView': {
        this.index = 1;
        break;
      }
      default: {
        break;
      }
    }
    this.selected(this.index);
  }
  onStartDateSelect(): void {
    this.startAtTestDate = this.testDetailsForm.value.fromDate;
  }
  onTestTypeSelect(testType: any): void {
    this.testScoreService.testTypeDetails(testType).subscribe(res => this.testMarks(res), error => {
      this.errorResponse(error);
    });
  }
  testMarks(data: any): void {
    if (data.testTypeViewModel != null) {
      this.testTypeAndGradingForm.controls['testMaxMarks'].setValue(data.testTypeViewModel.marksCount);
    }
    else {
      this.testTypeAndGradingForm.controls['testMaxMarks'].setValue(null);
    }
  }
  testScheduleClear(): void {
    this.testScheduleFormData.resetForm();
    this.selectedClasses = [];
    this.selectedSection = Promise.resolve([]);
    this.stepper.selected.interacted = false;
  }
  getOptionalClassStep(): any {
    if (this.allClassSectionDetails.length) {
      this.classSectionForm.patchValue({ classSectionStepper: true, emitEvent: false });
      return true;
    }
    this.classSectionForm.patchValue({ classSectionStepper: null, emitEvent: false });
    return false;
  }
  getOptionalScheduleStep(): any {
    if (!this.validateTestSchedules() && this.allClassSectionDetails.length) {
      this.testScheduleForm.patchValue({ testStepper: true, emitEvent: false });
      return true;
    }
    this.testScheduleForm.patchValue({ testStepper: null, emitEvent: false });
    return false;
  }
  onClassSectionNext(): void {
    if (!this.allClassSectionDetails.length) {
      this.openSnackBar(AppSettings.TEST_CLASS_SECTION, true);
    }
  }
}
