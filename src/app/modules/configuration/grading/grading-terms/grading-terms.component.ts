import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AppSettings, Pattern, URLConstants, Messages } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import {
  GradingTermClassSectionViewModel, GradingTermDataViewModel, GradingTermTestViewModel,
  GradingTermSearchViewModel
} from '../../../../models/grading/models';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import * as HttpStatus from 'http-status-codes';
import { CommonComponent } from '../../../../shared/common/common.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GradingTermDataModel } from 'app/models/grading/grading-term-data-model';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { GradingTermCloneViewModel } from 'app/models/grading/grading-term-clone-view-model';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { GradeClassSectionView } from 'app/models/grading/grade-class-section-view';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-grading-terms',
  templateUrl: './grading-terms.component.html',
  styleUrls: ['./grading-terms.component.scss']
})
export class GradingTermsComponent extends CommonComponent implements OnInit {

  @ViewChild('classSectionForm') classSectionForm;
  @ViewChild('gradeTermDetailsForm') gradeTermDetailsForm;
  @ViewChild('testsForm') testsForm;
  @ViewChild('submitForm') submitForm;
  @ViewChild('stepper') stepper;
  @ViewChild('cloneGradingTermForm') cloneGradingTermForm;


  gradingTermClassSectionViewModel: GradingTermClassSectionViewModel;
  gradingTermDataViewModel: GradingTermDataViewModel;
  gradingTermTestViewModel: GradingTermTestViewModel;
  gradingTermSearchViewModel: GradingTermSearchViewModel;
  gradeClassSectionViewModel: GradeClassSectionView;
  isUpdateData = false;
  closeAddPanel: boolean;
  buttonDisable: boolean;
  gradeTermIds: Array<any> = [];
  classNames: Array<any> = [];
  sectionNames: DropDownConfModel;
  evaluationTypes: Array<any> = [];
  marksGroupCriteria: Array<any> = [];
  testTypes: Array<any> = [];
  priorGradingTerms: Array<any> = [];
  filterYesNo: Array<any> = [];
  ClassSectionFormGroup: FormGroup;
  gradingTermForm: FormGroup;
  TestsFormGroup: FormGroup;
  cloneFormGroup: FormGroup;
  SubmitForm: FormGroup;
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  gradeClassSectionCols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  isValidRight: any;
  failedRecords: any = [];
  checkedRecords: any;
  dataLoaded = Promise.resolve(false);
  isDeleteAllRequired = false;
  modelname: any;
  currentComponentName = 'GradingTermsComponent';
  reportsForm: FormGroup;
  appliedClassSection: { tablename: string; rows: any[]; hideHeader: boolean; columns: any[]; rowGroupingColumns: any[]; };
  gradingTermTestGridSettings: { tablename?: string; rows: any[]; columns: any[]; hideHeader: boolean; tabTable: boolean; padding: boolean; };
  classSectionDetails: Array<GradingTermClassSectionViewModel>;
  gradingTermTestDetails: Array<GradingTermTestViewModel>;
  gradingTermsDetailsView: GradingTermDataViewModel;
  updateGradingTerm: GradingTermDataModel;
  gradingList: Array<any> = [];
  gradeClassSectionData: Array<any> = [];
  idsToDisplay: any;
  termConfigurationData: any;
  displaygradeClassSectionCols: any[];
  termClassSectionsData: any[];
  displaygradeTestCols: any[];
  fieldListTermTests: string[] = [];
  contributionGridColumns: string[] = [];
  contributionGridHeaderData: any[];
  gradingTermTestGridData: Array<any>;
  gridName = '';
  contributionTableSettings = {};
  show = false;
  disableNext = true;
  disableSelect = false;
  removedTestTypeIds: Array<number> = [];
  classSectionDisable = true;
  gridData: Array<any>;
  gridColumsArray: any[];
  gridColums: string[] = [];
  gridTitle: string;
  schoolBoards: Array<any> = [];
  cloneClasses: Array<any> = [];
  cloneSections: DropDownConfModel;
  cloneEnable: Boolean;
  cloneGradeDetailsList: string[] = [];
  cloneGradeDetails: any[];
  contributionColumnList: string[] = [];
  isCloneFormValid: boolean;
  cloneGradingTermDetails: GradingTermCloneViewModel;
  cloneGradingTermId: string;
  disableCloneSection = true;
  gradingTermsExceeded: string;
  classDisabled: boolean;
  sectionDisabled: boolean;
  templateReference: any;
  sectionNamesList: Array<any> = [];
  cloneSectionNamesList: Array<any> = [];
  removedClassSectionIds: Array<number> = [];
  cloneDisable = true;
  interactedStepperIndex: Number = 0;
  isSchoolBoards = false;
  cloneContributionGridHeaderData: any[];
  classSectionGroupCriteria: any[];
  cloneGradingTermContributionSettings: { tablename?: string; rows: any[]; columns: any[]; hideHeader: boolean; padding: boolean; };
  filterRowData: any = [];
  isContribution: boolean;
  contributionOptions = [
    { name: 'Considerations', id: 0 },
    { name: 'Contribution', id: 1 }
  ];
  validate = true;
  termId: any;
  additionalColumnData = [];
  radioOptions = 0;
  templates: any[] = [];
  totalContribution = 0;
  markGroupRequired: boolean;
  constructor(private gradeSetupService: GradeSetupService,
    public commonService: CommonService, public dialog: MatDialog,
    private _classSectionService: ClassSectionService,
    private _gradingTermConfigurationService: GardeTermConfigurationService,
    private http: HttpClient, private router: Router,
    private routes: ActivatedRoute, public snackBar: MatSnackBar,
    public changeDetecor: ChangeDetectorRef
  ) {
    super();
    this.isContribution = false;
    this.gradingTermSearchViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
      classes: [],
      sections: [],
      names: [],
      codes: [],
      evaluationTypeId: [],
      generateOverallGrade: [],
      generateReportCard: [],
      overallGradeDisplayNames: [],
      termEndDatesBegin: null,
      termEndDatesEnd: null,
      termStartDatesBegin: null,
      termStartDatesEnd: null
    };
    this.gradeClassSectionViewModel = {
      boardId: 0,
      classId: 0,
      sectionId: [],
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
    this.updateGradingTerm = {
      id: null,
      termName: null,
      description: null,
      displayName: null,
      termCode: null,
      evaluationTypeId: 0,
      generateReportCard: 0,
      termStartDate: null,
      termEndDate: null,
      testsStartDate: null,
      testsEndDate: null,
      generateOverAllGrade: 0,
      overALLGradeDisplayName: null,
      gradingTermTestViewModel: null,
      removedGradingTermTestIds: [],
      removedGradingtermClassSectionIds: [],
      gradingTermClassSectionViewModel: [],
    };
  }
  ngOnInit(): void {
    this.termId = null;
    this.initializeClassSectionForm();

    this.cols = [
      { field: 'termName', header: 'Term' },
      { field: 'classSectionName', header: 'Class & Section' },
      { field: 'termCode', header: 'Code' },
      { field: 'evaluationType', header: 'Evaluation Type' },
      { field: 'genarateReportCard', header: 'G. Report Card' },
      { field: 'termStartDate', header: 'Term Start Date' },
      { field: 'termEndDate', header: 'Term End Date' },
      { field: 'generateOverallGrade', header: 'G Overall Grade' },
      { field: 'overallGradeDisplayName', header: 'Grade Display On RC' },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.gradeClassSectionCols = [
      { field: 'name', header: 'Grading Term Name', sort: false },
      { field: 'boardName', header: 'Board', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionName', header: 'Section', sort: false },
      { field: 'termStartDate', header: 'Start Date', sort: false },
      { field: 'termEndDate', header: 'End Date', sort: false },
    ];

    this.contributionGridHeaderData = [
      { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
      { field: 'testTypeId', header: 'Test Type', sort: false },
      { field: 'displayOption', header: 'Display', sort: false },
      { field: 'contribution', header: 'Contribution %', sort: false },
      { field: 'consideration', header: 'Consideration %', sort: false },
      { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
      { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
      { field: 'isDisplayOnreportCard', header: 'Display On Report Card', sort: false },
      { field: 'delete', header: 'Actions', sort: false },
    ];

    this.contributionGridColumns = this.contributionGridHeaderData.map(x => x.field);

    this.displaygradeClassSectionCols = [
      { field: 'schoolBoardName', header: 'Board', sort: false },
      { field: 'className', header: 'Class Name', sort: false },
      { field: 'sectionName', header: 'Section Name', sort: false },
      // { field: 'delete', header: 'Actions', sort: false },
    ];

    this.cloneGradeDetails = [
      { field: 'termName', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'displayName', header: 'Display Name' },
      { field: 'termCode', header: 'Code' },
      { field: 'evaluationTypeId', header: 'Evaluation Type' },
      { field: 'generateReportCard', header: 'Generate Report Card' },
      { field: 'termStartDate', header: 'Term Start Date' },
      { field: 'termEndDate', header: 'Term End Date' },
      // { field: 'testsStartDate', header: 'Consider Test From Date' },
      // { field: 'testsEndDate', header: 'Consider Test To Date' },
      { field: 'generateOverAllGrade', header: 'Generate OverAll Grade' },
      { field: 'overALLGradeDisplayName', header: 'Overall Grade Display Name' },
      { field: 'schoolBoardName', header: 'School Board' },
    ];

    this.cloneGradeDetailsList = this.cloneGradeDetails.map(x => x.field);

    this.cloneContributionGridHeaderData = [
      { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
      { field: 'testTypeId', header: 'Test Type', sort: false },
      { field: 'displayOption', header: 'Display', sort: false },
      { field: 'contribution', header: 'Contribution', sort: false },
      { field: 'consideration', header: 'Consideration', sort: false },
      { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
      { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
      { field: 'isDisplayOnreportCard', header: 'Display On Report Card', sort: false },
    ];


    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.gradingTermSearchViewModel = modelTableComponent;
    }
    // / initializing table settings /
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.gradingTermSearchViewModel,
      tablename: 'Grading Terms',
      componentName: this.currentComponentName,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
    };
    this.contributionColumnList = ['testTypeId', 'contribution', 'consideration', 'displayOption',
      'marksGroupCriteriaId', 'marksGroupCriteriaCount', 'isDisplayOnreportCard', 'isDisplayOnreportCard'];
    this.loagGradingTermdata();
    this.getTemplates();
  }

  initializeClassSectionForm(initial = true): void {
    this.setReportConfigurationForm();
    if (initial) {
      this.getEvaluationTypeList();
      this.yesNoList();
      this.getMarksGroupCriteria();
      this.getTestTypes();
    }
    this.gradingTermTestDetails = [];
    this.gradingTermTestGridData = [];
    this.classSectionDetails = [];

    this.ClassSectionFormGroup = new FormGroup({
      boardId: new FormControl(''),
      classId: new FormControl(''),
      sectionsId: new FormControl('', [Validators.required]),
    });

    this.gradingTermForm = new FormGroup({
      termName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      displayName: new FormControl('', [Validators.maxLength(45)]),
      description: new FormControl('', [Validators.maxLength(135)]),
      termCode: new FormControl('', [Validators.maxLength(6)]),
      termStartDate: new FormControl('', [Validators.required]),
      termEndDate: new FormControl('', [Validators.required]),
      generateReportCard: new FormControl('', [Validators.required])
    });
    this.setTestFormFroup();
    this.cloneFormGroup = new FormGroup({
      cloneClassId: new FormControl('', [Validators.required]),
      cloneSectionId: new FormControl('', [Validators.required]),
    });
    this.SubmitForm = new FormGroup({});
  }
  setTestFormFroup(): void {
    this.TestsFormGroup = new FormGroup({
      testsStartDate: new FormControl(''),
      testsEndDate: new FormControl(''),
      otherGradingTermId: new FormControl(null),
      testTypeId: new FormControl('', [Validators.required]),
      contribution: new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(100)]),
      displayOption: new FormControl('', [Validators.required]),
      marksGroupCriteriaId: new FormControl('', [Validators.required]),
      marksGroupCriteriaCount: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(100)]),
      isDisplayOnreportCard: new FormControl('', [Validators.required]),
      consideration: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(999.99)]),
      stepperController: new FormControl(null, [Validators.required]),
    });
    // this.TestsFormGroup.controls.marksGroupCriteriaCount.disable();
  }
  initializeCloneGradingTermForm(): void {

    this.cloneFormGroup = new FormGroup({
      cloneClassId: new FormControl('', [Validators.required]),
      cloneSectionId: new FormControl('', [Validators.required]),
    });
  }
  setReportConfigurationForm(): void {
    this.reportsForm = new FormGroup({
      evaluationTypeId: new FormControl(null, [Validators.required]),
      reportTemplateId: new FormControl(null),
      generateOverAllGrade: new FormControl(null, [Validators.required]),
      overALLGradeDisplayName: new FormControl(null, [Validators.maxLength(45)]),
      additionalColumns: new FormControl(null, [Validators.required]),
      stepperController: new FormControl(true, [Validators.required]),

      usingGradingTermId: new FormControl(null),
      isPresentGradingTerm: new FormControl(false),
      contribution: new FormControl(null),
      isVisible: new FormControl(true),
      title: new FormControl(null)
    });
    this.reportsForm.controls.overALLGradeDisplayName.disable();
    this.reportsForm.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      this.updateStepperController();
    });
  }
  loagGradingTermdata(): void {
    this._gradingTermConfigurationService.fetchGradingTermsList(this.gradingTermSearchViewModel.sortBy, this.gradingTermSearchViewModel.sortOrder,
      this.gradingTermSearchViewModel.names, this.gradingTermSearchViewModel.classes, this.gradingTermSearchViewModel.sections,
      this.gradingTermSearchViewModel.evaluationTypeId, this.gradingTermSearchViewModel.codes,
      this.gradingTermSearchViewModel.termStartDatesBegin, this.gradingTermSearchViewModel.termStartDatesEnd,
      this.gradingTermSearchViewModel.termEndDatesBegin, this.gradingTermSearchViewModel.termEndDatesEnd, this.gradingTermSearchViewModel.generateReportCard,
      this.gradingTermSearchViewModel.generateOverallGrade, this.gradingTermSearchViewModel.overallGradeDisplayNames,
      this.gradingTermSearchViewModel.pageNumber, this.gradingTermSearchViewModel.pageSize).subscribe(data => this.response(data), error => {
        this.errorResponse(error);
      });
  }

  saveClassSection(form: GradingTermClassSectionViewModel): void {
    this.classSectionDetails = [];
    if (!this.isUpdateData) {
      if (this.ClassSectionFormGroup.status === AppSettings.VALID) {
        this.classSectionDetails.push({
          classId: form.classId,
          sectionsId: form.sectionsId.map(element => {
            return element.value;
          }),
          boardId: form.boardId
        });
      }
    }
    else {
      const classSectionColumnList: string[] = ['boardId', 'classId', 'sectionsId'];
      this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
    }
  }

  saveGradingTermDetails(form: GradingTermDataViewModel): void {
    if (this.gradingTermForm.status === AppSettings.VALID) {
      this.gradingTermsDetailsView = form;
    }
  }

  createOrUpdateGradingTerms(): void {
    if (this.isUpdateData) {
      this.gradingTermsDetailsView = this.gradingTermForm.value;
      if (this.removedTestTypeIds !== undefined) {
        this.updateGradingTerm.removedGradingTermTestIds = this.removedTestTypeIds;
      }
      if (this.removedClassSectionIds !== undefined) {
        this.updateGradingTerm.removedGradingtermClassSectionIds = this.removedClassSectionIds;
      }
      this.updateGradingTerm.id = this.idsToDisplay;
      this.updateGradingTerm.schoolBoardId = this.termConfigurationData.schoolBoardId;
      this.updateGradingTerm.termName = this.gradingTermsDetailsView.termName;
      this.updateGradingTerm.description = this.gradingTermsDetailsView.description;
      this.updateGradingTerm.displayName = this.gradingTermsDetailsView.displayName;
      this.updateGradingTerm.termCode = this.gradingTermsDetailsView.termCode;
      this.updateGradingTerm.evaluationTypeId = this.reportsForm.value.evaluationTypeId;
      this.updateGradingTerm.generateReportCard = this.gradingTermsDetailsView.generateReportCard;
      this.updateGradingTerm.termStartDate = this.gradingTermsDetailsView.termStartDate;
      this.updateGradingTerm.termEndDate = this.gradingTermsDetailsView.termEndDate;
      this.updateGradingTerm.testsStartDate = this.TestsFormGroup.value.testsStartDate;
      this.updateGradingTerm.testsEndDate = this.TestsFormGroup.value.testsEndDate;

      this.updateGradingTerm.generateOverAllGrade = this.reportsForm.value.generateOverAllGrade;

      this.updateGradingTerm.overALLGradeDisplayName = this.reportsForm.value.overALLGradeDisplayName;
      this.updateGradingTerm.gradingTermTestViewModel = this.gradingTermTestDetails;

      Object.assign(this.updateGradingTerm, this.reportsForm.value);
      this.updateGradingTerm['usedGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(e => e.usingGradingTermId);
      this.updateGradingTerm['forGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(e => !e.usingGradingTermId);
      delete this.updateGradingTerm['usingGradingTermId'];
      this._gradingTermConfigurationService.gradingTermConfigurationGradingTermPut(this.updateGradingTerm)
        .subscribe(res => this.addorUpdateResponse(res), error => {
          this.errorResponse(error);
        });
    } else {
      this.classSectionDetails = [];
      this.classSectionDetails.push({
        classId: this.ClassSectionFormGroup.value.classId,
        sectionsId: this.ClassSectionFormGroup.value.sectionsId.map(element => {
          return element.value;
        }),
        boardId: this.ClassSectionFormGroup.value.boardId
      });
      this.gradingTermsDetailsView = this.gradingTermForm.value;
      this.gradingTermDataViewModel = this.gradingTermsDetailsView;
      Object.assign(this.gradingTermDataViewModel, this.reportsForm.value);
      this.gradingTermDataViewModel['usedGradingTermAdditionalTotalView'] = this.additionalColumnData.filter(e => e.usingGradingTermId);
      this.gradingTermDataViewModel['forGradingTermAdditionalTotalColumns'] = this.additionalColumnData.filter(e => !e.usingGradingTermId);

      this.gradingTermDataViewModel.testsStartDate = this.TestsFormGroup.value.testsStartDate;
      this.gradingTermDataViewModel.testsEndDate = this.TestsFormGroup.value.testsEndDate;

      this.gradingTermDataViewModel.schoolBoardId = this.classSectionDetails[0].boardId;
      this.gradingTermDataViewModel.gradingTermClassSectionViewModel = this.classSectionDetails;
      this.gradingTermDataViewModel.gradingTermTestViewModel = this.gradingTermTestDetails;
      this._gradingTermConfigurationService.gardeTermConfigurationCreateGradingTermPost(this.gradingTermDataViewModel)
        .subscribe(res => this.addorUpdateResponse(res), error => {
          this.errorResponse(error);
        });
    }
  }

  // response after add data of GradingTerm
  addorUpdateResponse(response: any): void {
    this.cloneEnable = false;
    this.clearCloneSection();
    this.clearGradeTermSection();
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      } else {
        this.closeAddPanel = true;
        if (document.getElementById('formCancel')) {
          document.getElementById('formCancel').click();
        }
        this.loagGradingTermdata();
        if (this.stepper) {
          this.stepper.reset();
        }
        this.isUpdateData = false;
        this.buttonDisable = false;
      }
    } else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  response(data: any): void {
    if (localStorage.getItem(this.currentComponentName)) {
      this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
    }

    if (data.gradingTermListViewModel) {
      this.rows = data.gradingTermListViewModel.list;
      this.totalItems = data.gradingTermListViewModel.totalItems;
    } else {
      this.rows = [];
    }

    const actionList = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
      {
        name: AppSettings.DETAILS_DISPLAY,
        icon: AppSettings.DETAILS_ICON,
      },
      {
        name: AppSettings.CLONE_OPERATION,
        icon: AppSettings.CLONE_ICON
      }
    ];

    this.filterRowData = this.rows;
    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.termName === element.termName;
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
        element.operations = actionList;
      });
    }

    this.rows.forEach((e: any) => {
      e.termStartDate = (e.termStartDate == null) ? null : this.commonService.customDateFormat(e.termStartDate, this.getSchoolDateFormat()).date;
      e.termEndDate = (e.termEndDate == null) ? null : this.commonService.customDateFormat(e.termEndDate, this.getSchoolDateFormat()).date;
    });

    this.tabSettings = {
      columns: this.cols,
      model: this.gradingTermSearchViewModel,
      rows: this.rows,
      tablename: 'Grading Terms',
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      rowGroupingColumns: ['termName', 'termCode', 'overallGradeDisplayName', 'genarateReportCard', 'evaluationType',
        'generateOverallGrade', 'termStartDate', 'termEndDate'],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Grading Terms'
        },
        addingForm: {
          required: true,
          btnName: 'New Grading Term'
        }
      }
    };
  }

  gradingTermTableData(_event: GradingTermSearchViewModel): void {
    this.gradingTermSearchViewModel = _event;
    this.loagGradingTermdata();
  }
  // End

  openForm(): void {
    this.isContribution = false;
    this.interactedStepperIndex = 0;
    this.disableNext = true;
    this.ClassSectionFormGroup.reset();
    this.gradingTermForm.reset();
    this.TestsFormGroup.reset();
    this.SubmitForm.reset();
    this.initializeClassSectionForm();
    this.closeAddPanel = false;
    this.show = false;
    this.disableSelect = false;
    this.isUpdateData = false;
    this.cloneEnable = false;
    this.classSectionDisable = true;
    this.gridData = [];
    this.gradingTermTestGridData = [];
    this.gradingTermTestDetails = [];
    this.termId = null;
    this.prepareGrid(null, this.displaygradeClassSectionCols, Messages.CLASSSECTION_TITLE, []);
    if (this.classSectionForm !== undefined) {
      this.classSectionForm.resetForm();
    }
    if (this.gradeTermDetailsForm !== undefined) {
      this.gradeTermDetailsForm.resetForm();
    }
    if (this.testsForm !== undefined) {
      this.testsForm.resetForm();
    }
    if (this.submitForm !== undefined) {
      this.submitForm.resetForm();
    }
    this.radioOptions = 0;
    this.gradingTermTestGrid();
    this.initializeCloneGradingTermForm();
    this.testFormValidation();
    this.loadSchoolBoards();
  }

  testFormValidation(): void {
    if (this.isContribution) {
      this.TestsFormGroup.get('consideration').clearValidators();
      this.TestsFormGroup.controls['consideration'].updateValueAndValidity();
    } else {
      this.TestsFormGroup.get('contribution').clearValidators();
      this.TestsFormGroup.controls['contribution'].updateValueAndValidity();
    }
  }

  // table row on select
  onTableRowSelect(eventData: any): void {

    this.gradeTermIds.push(eventData.id);
    if (this.gradeTermIds.length > 0) {
      this.isDeleteAllRequired = true;
    }
    else {
      this.isDeleteAllRequired = false;
    }
  }

  // table row unselect
  onTableRowUnSelect(data: any): void {

    const index = this.gradeTermIds.findIndex((value: any) => {
      return value === value.id;
    });
    this.gradeTermIds.splice(index, 1);

    if (this.gradeTermIds.length > 0) {
      this.isDeleteAllRequired = true;
    }
    else {
      this.isDeleteAllRequired = false;
    }
  }
  // End

  // select all records from table(delete)
  selectAllData(data: any): void {
    if (data.length > 0) {
      this.isDeleteAllRequired = true;
      data.forEach(element => {
        this.gradeTermIds.push(data.id);
      });
    }
    else {
      this.gradeTermIds = [];
      this.isDeleteAllRequired = false;
    }
  }
  // End

  // row-wise actions of the table(edit/delete)
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      const classSectionColumnList: string[] = ['boardId', 'classId', 'sectionsId'];
      this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
      this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
      this.removedClassSectionIds = [];
      this.removedTestTypeIds = [];
      this.gradingTermTestDetails = [];
      this.show = false;
      this.isUpdateData = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.classSectionDisable = false;
      this.idsToDisplay = response.clickedRow.id;
      this._gradingTermConfigurationService.gradingTermConfigurationGradeTermGet(this.idsToDisplay).subscribe(res => {
        this.gradeTermConfigurationById(res);
      });
    }

    if (response.operation === AppSettings.DETAILS) {
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.idsToDisplay = response.clickedRow.id;
      this.router.navigate(
        [URLConstants.GRADE_TERM_DETAILS + response.clickedRow.id]);
    }

    if (response.operation === AppSettings.DELETE) {
      this.gridName = 'classSectionGrid';
      this.deleteAll(response);
    }
    if (response.operation === AppSettings.CLONE) {
      this.closeAddPanel = false;
      this.gridName = 'classSectionGrid';
      this.cloneGrade(response);
    }
  }
  // to set GradingTerm data to form after edit click
  gradeTermConfigurationById(termData: any): void {
    this.initializeClassSectionForm(false);
    this.disableNext = false;
    this.isUpdateData = true;
    const classSectionColumnList: string[] = ['boardId', 'classId', 'sectionsId'];
    this.customClearValidation(this.ClassSectionFormGroup, classSectionColumnList);
    const actionList = [{
      name: AppSettings.DELETE_OPERATION,
      icon: AppSettings.DELETE,
      operationName: AppSettings.DELETE
    },
    {
      name: AppSettings.CLONE_OPERATION,
      icon: AppSettings.CLONE,
      operationName: AppSettings.CLONE
    }
    ];
    this.classSectionDisable = false;
    this.termConfigurationData = termData.gradingTermConfigurationDataViewModel[0];
    this.termClassSectionsData = termData.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
    this.termClassSectionsData.forEach(x => {
      x.actions = actionList;
    });
    const sections = [];
    for (const section of this.termClassSectionsData) {
      sections.push(section.sectionsId);
    }
    const data = {
      boardId: this.termClassSectionsData[0].boardId,
      classId: this.termClassSectionsData[0].classId,
      sectionId: sections
    };
    this.getPriorGradingTerms(data);
    this.prepareGrid(this.termClassSectionsData, this.displaygradeClassSectionCols, Messages.CLASSSECTION_TITLE, this.classSectionGroupCriteria = ['schoolBoardName', 'className']);
    this.gradingTermTestGridData = termData.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel;
    this.TestsFormGroup.controls.testsStartDate.setValue(this.termConfigurationData.testsStartDate);

    this.TestsFormGroup.controls.testsEndDate.setValue(this.termConfigurationData.testsEndDate);

    this.gradingTermTestGridData.forEach(e => {
      e.testTypeApiId = e.testTypeId;
      e.otherGradingApiTermId = e.otherGradingTermId ? e.otherGradingTermId : null;
      e.actions = actionList,
        // tslint:disable-next-line: max-line-length
        e.otherGradingTermId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, e.otherGradingTermId)).label ? this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, e.otherGradingTermId)).label : e.otherGradingTermName,

        e.displayOption = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.evaluationTypes, e.displayTypeId)).label,
        e.testTypeId = e.testTypeName,
        e.isexist = true,
        e.isDisplayOnreportCard = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.filterYesNo, e.isDisplayOnreportCard)).label,
        e.marksGroupCriteriaId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.marksGroupCriteria, e.marksGroupCriteriaId)).label;

    });

    this.gradingTermTestGridData = this.gradingTermTestGridData.slice();

    this.additionalColumnData = [];
    if (this.termConfigurationData != null) {
      this.gradingTermForm.patchValue(this.termConfigurationData);

      this.isContribution = this.termConfigurationData.isContribution;
      if (!this.isContribution) {
        this.radioOptions = 0;
        this.disableSelect = false;
      }
      else {
        this.radioOptions = 1;
        this.disableSelect = true;
      }
      this.reportsForm.patchValue(this.termConfigurationData);
      for (const value of this.termConfigurationData.usedGradingTermAdditionalView) {
        this.additionalColumnData.push(this.setAdditionalColumnData(value));
      }
      for (const value of this.termConfigurationData.forGradingTermAdditionalView) {
        this.additionalColumnData.push(this.setAdditionalColumnData(value, true));
      }

      this.reportsForm.patchValue({
        additionalColumns: this.additionalColumnData.length ? 1 : 0
      });
      if (this.reportsForm.value.additionalColumns) {
        this.reportsForm.controls.usingGradingTermId.setValidators(Validators.required);
        this.reportsForm.controls.title.setValidators([Validators.required, Validators.maxLength(45)]);
        this.reportsForm.controls.contribution.setValidators([Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]);
        this.reportsForm.updateValueAndValidity();
      }
      if (this.reportsForm.value.generateOverAllGrade === 1) {
        this.reportsForm.controls.overALLGradeDisplayName.enable();
      } else {
        this.reportsForm.controls.overALLGradeDisplayName.disable();
      }
      this.termId = this.termConfigurationData.termId;
    } else {
      this.openSnackBar(termData.messages.ResultMessage);
    }
    this.gradingTermTestGrid();
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
  }
  // End


  deleteAll(response: any): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.GRADE_DELETE_CONFIRM, ''), action: true, btn1Text: AppSettings.CANCEL, btn2Text: AppSettings.CONFIRM },
    });

    dialogRef.afterClosed().subscribe(action => {

      if (action === AppSettings.CONFIRM) {
        if (this.gridName === 'classSectionGrid') {
          const idList: Array<string> = [];
          idList.push(response.clickedRow.id);
          this._gradingTermConfigurationService.removeGradingTerm(idList).subscribe((res: any) => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });

        } else if (this.gridName === 'contributionGrid') {
          this.deleteMember(response);
        }
      }
    });
  }
  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.loagGradingTermdata();
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }

  getPriorGradingTerms(data: any): void {
    this.priorGradingTerms = [];
    this._gradingTermConfigurationService.fetchGradingTermsByBoardId(data.boardId, data.classId, data.sectionId).subscribe(response => {
      this.priorGradingTerms = [];
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            if (this.priorGradingTerms.findIndex(ele => ele.value === element.id) === -1) {
              this.priorGradingTerms.push({
                label: element.name,
                value: element.id
              });
            }
          });
        }
      }
    });

  }

  getMarksGroupCriteria(): void {
    this.marksGroupCriteria = [];
    this._gradingTermConfigurationService.fetchMarksGroupCriteria().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.marksGroupCriteria.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });

  }

  getTestTypes(): void {
    this.testTypes = [];
    this._gradingTermConfigurationService.fetchTestTypes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.testTypes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });

  }

  yesNoList(): void {
    this.filterYesNo = [];
    this.filterYesNo.push({
      label: 'Yes',
      value: 1
    });
    this.filterYesNo.push({
      label: 'No',
      value: 0
    });
  }

  getEvaluationTypeList(): void {
    this.evaluationTypes = [];
    this._gradingTermConfigurationService.evaluationTypes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.evaluationTypes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });
  }

  // Get Classes to filter table data
  getClassesList(data: any): void {
    this.classDisabled = false;
    this.classNames = [];
    this.ClassSectionFormGroup.controls['classId'].patchValue(null);
    this._classSectionService.schoolAcademicClasses(data.value).subscribe(response => {
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

  // on selection of class
  onSelectClass(data: any): void {
    this.clearGradeTermSection();
    this.sectionDisabled = true;
    this.gradeClassSectionViewModel.classId = data.value;
    this.ClassSectionFormGroup.controls['sectionsId'].patchValue(null);
    this._classSectionService.schoolAcademicClassSections(this.ClassSectionFormGroup.value.boardId, data.value).subscribe(response => {
      if (response.listViews.length) {
        this.sectionDisabled = false;
        response.listViews.forEach(element => {
          this.sectionNamesList.push({
            label: element.name,
            value: element.id
          });
        });

        this.sectionNames = { multiSelect: true, placeholder: 'Section', data: this.sectionNamesList, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: true };
      }
    });
  }
  // End


  onCancel(): void {

    this.stepper.reset();
    this.ClassSectionFormGroup.reset();
    this.gradingTermForm.reset();
    this.SubmitForm.reset();
    this.classSectionForm.resetForm();
    this.gradeTermDetailsForm.resetForm();
    this.closeAddPanel = true;
    this.gridData = [];
    this.clearGradeTermSection();
    this.isUpdateData = false;
    this.prepareGrid(null, this.displaygradeClassSectionCols, Messages.CLASSSECTION_TITLE, []);
    this.gradingTermTestGrid();
    this.classNames = [];
    this.sectionNamesList = [];
    this.classDisabled = true;
    this.cloneEnable = false;
    if (this.gradingTermForm.value.generateReportCard === 1) {
      this.TestsFormGroup.reset();
      this.reportsForm.reset();
      this.testsForm.resetForm();
    }
  }

  // on selection of class
  onSelectSection(data: any): void {
    this.gradeClassSectionViewModel.sectionId = [];
    data.forEach(element => {
      this.gradeClassSectionViewModel.sectionId.push(element.value);
    });
    this.getGradingTermByclassSection(this.gradeClassSectionViewModel);
    this.getPriorGradingTerms(this.gradeClassSectionViewModel);
  }
  getGradingTermByclassSection(data): void {
    this._gradingTermConfigurationService.gradingTermConfigurationGradingTermsByClassSectionGet(data.boardId, data.classId,
      data.sectionId, data.pageNumber,
      data.pageSize).subscribe(res => this.loagGradingTermdataBySection(res));
  }
  loagGradingTermdataBySection(data: any): void {
    this.gradeClassSectionData = [];
    if (data.gradeTermList != null) {
      data.gradeTermList.list.forEach(e => {
        e.termStartDate = (e.termStartDate == null) ? null : this.commonService.customDateFormat(e.termStartDate, this.getSchoolDateFormat()).date;
        e.termEndDate = (e.termEndDate == null) ? null : this.commonService.customDateFormat(e.termEndDate, this.getSchoolDateFormat()).date;
      });
      this.gradeClassSectionData = data.gradeTermList.list;
    }
    this.prepareGrid(this.gradeClassSectionData, this.gradeClassSectionCols, Messages.GRADE_TERM_CLASSSECTION_TITLE.toUpperCase(),
      this.classSectionGroupCriteria = ['name', 'boardName', 'className']);
  }

  onSelectTestData(form: GradingTermTestViewModel): void {
    if (!this.isContribution) {
      this.testFormValidation();
      let considerFormData = false;
      this.show = false;
      this.TestsFormGroup.controls.stepperController.setValue(true);
      const index = this.gradingTermTestGridData.findIndex(e => e.testTypeApiId === form.testTypeId && e.otherGradingApiTermId === form.otherGradingTermId);
      if (this.isValidFormFields() && index === -1) {
        considerFormData = true;
        if (!this.isContribution && form.consideration != null && form.consideration.toString() !== '') {
          this.disableNext = false;
          const recordId = this.gradingTermTestGridData.length + 1;
          this.gradingTermTestDetails.push({
            id: recordId,
            testTypeId: form.testTypeId,
            contribution: form.contribution,
            marksGroupCriteriaId: form.marksGroupCriteriaId,
            isDisplayOnreportCard: form.isDisplayOnreportCard,
            otherGradingTermId: form.otherGradingTermId,
            marksGroupCriteriaCount: form.marksGroupCriteriaCount,
            displayOption: form.displayOption,
            schoolBoardId: form.schoolBoardId,
            consideration: form.consideration
          });


          this.gradingTermTestGridData.push({
            testTypeApiId: form.testTypeId,
            otherGradingApiTermId: form.otherGradingTermId ? form.otherGradingTermId : null,
            id: recordId,
            contribution: form.contribution,
            marksGroupCriteriaCount: form.marksGroupCriteriaCount,
            testTypeId: (this.commonService.selectedDropDownData(this.testTypes, form.testTypeId)).label,
            marksGroupCriteriaId: (this.commonService.selectedDropDownData(this.marksGroupCriteria, form.marksGroupCriteriaId)).label,
            isDisplayOnreportCard: (this.commonService.selectedDropDownData(this.filterYesNo, form.isDisplayOnreportCard)).label,
            otherGradingTermId: this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, form.otherGradingTermId)).label,
            displayOption: (this.commonService.selectedDropDownData(this.evaluationTypes, form.displayOption)).label,
            consideration: form.consideration,
          });
          this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
          this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
          this.TestsFormGroup.controls.otherGradingTermId.reset();
          this.testsForm.submitted = false;
          this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
        }
      } else if (index > -1) {
        if (form.otherGradingTermId) {
          this.openSnackBar('Prior Term and Test Type Already exist', true);
        } else {
          this.openSnackBar('Test Type Already exist', true);
        }
      }
      this.gradingTermTestGrid();
    }
  }

  getTestOptional(): boolean {
    if (!this.isContribution) {
      const considerationPercentage = parseInt(this.gradingTermTestGridData.reduce((acc, data) => parseInt(acc, 10) + parseInt(data.consideration, 10), 0), 10);
      if (considerationPercentage > 0 && this.checkIfDateIsValid()) {
        return true;
      } else {
        return false;
      }
    } else {
      const contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce((acc, data) => parseInt(acc, 10) + parseInt(data.contribution, 10), 0), 10);
      if (contributionnPercentage && contributionnPercentage === 100 && this.checkIfDateIsValid()) {
        return true;
      } else {
        return false;
      }
    }
  }
  checkIfDateIsValid(): boolean {
    return true;
  }
  isNestedObjectEmpty(obj, checkKey: any = false): boolean {
    let isEmpty = true;
    for (const key in obj) {
      if (checkKey && key === checkKey) {
        continue;
      }
      if (obj[key] !== null && obj[key] !== '') {
        if (typeof (obj[key]) === 'object') {
          isEmpty = this.isNestedObjectEmpty(obj[key]);
        } else {
          return false;
        }
      }
    }
    return isEmpty;
  }
  onSelect(form: GradingTermTestViewModel): void {
    const index = this.gradingTermTestGridData.findIndex(e => e.testTypeApiId === form.testTypeId && e.otherGradingApiTermId === form.otherGradingTermId);

    this.customSetValidation(this.TestsFormGroup, this.contributionColumnList);

    if (+this.TestsFormGroup.value.marksGroupCriteriaId === 1) {
      this.TestsFormGroup.controls['marksGroupCriteriaCount'].setValidators([Validators.pattern(Pattern.NUMBER_PATTERN), Validators.required,
      Validators.min(1), Validators.max(100)]);
    } else {
      this.TestsFormGroup.controls['marksGroupCriteriaCount'].clearValidators();
    }
    this.TestsFormGroup.controls['marksGroupCriteriaCount'].updateValueAndValidity();
    this.TestsFormGroup.controls['contribution'].setValidators([Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.required]);

    this.testFormValidation();

    if (!this.isContribution) {
      this.onSelectTestData(form);
      const considerationPercentage = parseInt(this.gradingTermTestGridData.reduce((acc, data) => parseInt(acc, 10) + parseInt(data.consideration, 10), 0), 10);
      if (considerationPercentage > 0) {
        this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
        this.TestsFormGroup.get('stepperController').setValue(true);
      }
    } else {
      this.customSetValidation(this.TestsFormGroup, this.contributionColumnList);

      if (+this.TestsFormGroup.value.marksGroupCriteriaId === 1) {
        this.TestsFormGroup.controls['marksGroupCriteriaCount'].setValidators([Validators.pattern(Pattern.NUMBER_PATTERN), Validators.required,
        Validators.min(1), Validators.max(100)]);
      } else {
        this.TestsFormGroup.controls['marksGroupCriteriaCount'].clearValidators();
      }
      this.TestsFormGroup.controls['marksGroupCriteriaCount'].updateValueAndValidity();
      this.TestsFormGroup.controls['contribution'].setValidators([Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.required]);

      this.testFormValidation();
      const contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce((acc, data) => parseInt(acc, 10) + parseInt(data.contribution, 10), 0), 10);
      let totalContributionnPercentage = contributionnPercentage;
      let considerFormData = false;
      this.show = false;
      this.TestsFormGroup.controls.stepperController.setValue(true);
      if (this.isValidFormFields() && index === -1) {
        if (form.contribution != null && form.contribution.toString() !== '') {
          totalContributionnPercentage = totalContributionnPercentage + parseInt(form.contribution.toString(), 10);
          considerFormData = true;
        }
        if (totalContributionnPercentage !== 100) {
          this.show = true;
        } else {
          this.show = false;
        }

        if (totalContributionnPercentage <= 100 && considerFormData) {
          const recordId = this.gradingTermTestGridData.length + 1;

          this.gradingTermTestDetails.push({
            id: recordId,
            testTypeId: form.testTypeId,
            contribution: form.contribution,
            marksGroupCriteriaId: form.marksGroupCriteriaId,
            isDisplayOnreportCard: form.isDisplayOnreportCard,
            otherGradingTermId: form.otherGradingTermId,
            marksGroupCriteriaCount: form.marksGroupCriteriaCount,
            displayOption: form.displayOption,
            schoolBoardId: form.schoolBoardId,
            consideration: form.consideration
          });

          this.gradingTermTestGridData.push({
            testTypeApiId: form.testTypeId,
            otherGradingApiTermId: form.otherGradingTermId ? form.otherGradingTermId : null,
            id: recordId,
            contribution: form.contribution,
            marksGroupCriteriaCount: form.marksGroupCriteriaCount,
            testTypeId: (this.commonService.selectedDropDownData(this.testTypes, form.testTypeId)).label,
            marksGroupCriteriaId: (this.commonService.selectedDropDownData(this.marksGroupCriteria, form.marksGroupCriteriaId)).label,
            isDisplayOnreportCard: (this.commonService.selectedDropDownData(this.filterYesNo, form.isDisplayOnreportCard)).label,
            otherGradingTermId: this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.priorGradingTerms, form.otherGradingTermId)).label,
            displayOption: (this.commonService.selectedDropDownData(this.evaluationTypes, form.displayOption)).label,
            consideration: form.consideration,
          });

          this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
          this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
          this.TestsFormGroup.controls.otherGradingTermId.reset();
          this.testsForm.submitted = false;
          this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
          this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
        } else if (totalContributionnPercentage > 100) {
          this.show = true;
        } else {
          if (!this.gradingTermTestGridData.length && !this.gradingTermTestDetails.length) {
            this.TestsFormGroup = new FormGroup({
              otherGradingTermId: new FormControl(null),
              testTypeId: new FormControl('', [Validators.required]),
              contribution: new FormControl(null, [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
              displayOption: new FormControl('', [Validators.required]),
              marksGroupCriteriaId: new FormControl('', [Validators.required]),
              marksGroupCriteriaCount: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(100)]),
              isDisplayOnreportCard: new FormControl('', [Validators.required]),
              consideration: new FormControl(null, [, Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
              stepperController: new FormControl(null, [Validators.required]),
            });
          }
        }

        if (totalContributionnPercentage === 100) {
          this.disableNext = false;
          this.disableSelect = true;
          this.TestsFormGroup.setErrors(null);
          this.customClearValidation(this.TestsFormGroup, this.contributionColumnList);
          this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
          this.TestsFormGroup.get('stepperController').setValue(true);
        }
        else if (totalContributionnPercentage > 100) {
          this.TestsFormGroup.setErrors({ required: true });
          this.show = true;
        } else {
          this.TestsFormGroup.setErrors({ required: true });
        }

      } else {
        if (index > -1) {
          this.openSnackBar('A Test Type can be selected only once in a Grading Term.', true);
        }
        this.TestsFormGroup.controls.stepperController.setValue(null);
      }
      this.gradingTermTestGrid();
    }
  }

  customClearValidation(form: FormGroup, columnList: string[]): void {
    columnList.map(element => {
      form.get(element).clearValidators();
      form.controls[element].updateValueAndValidity();
    });
  }

  customSetValidation(form: FormGroup, columnList: string[]): void {
    columnList.map(element => {
      if (element === 'consideration' || element === 'contribution') {
        form.get(element).setValidators([Validators.required, Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(999.99)]);
        form.controls[element].updateValueAndValidity();
      } else {
        form.get(element).setValidators([Validators.required]);
        form.controls[element].updateValueAndValidity();
      }
    });
    this.testFormValidation();
  }

  deleteMember(operation: any): void {
    const id = operation.clickedRow.id;
    if (this.gradingTermTestGridData.find(g => g.id === id && g.isexist === true)) {
      this.removedTestTypeIds.push(id);
    }
    this.gradingTermTestGridData = this.gradingTermTestGridData.filter(x => x.id !== id).slice();
    this.gradingTermTestDetails = this.gradingTermTestDetails.filter(x => x.id !== id).slice();
    const contributionnPercentage = parseInt(this.gradingTermTestGridData.reduce((acc, data) => parseInt(acc, 10) + parseInt(data.contribution, 10), 0), 10);
    if (this.isContribution && contributionnPercentage !== 100) {
      this.disableNext = true;
      this.disableSelect = false;
      this.TestsFormGroup.controls.stepperController.setValue(null);
      this.show = true;
    }
    else {
      if (this.gradingTermTestGridData.length > 0) {
        this.TestsFormGroup.controls.stepperController.setValue(true);
        this.show = false;
        this.disableNext = false;
      } else {
        this.disableNext = true;
        this.TestsFormGroup.controls.stepperController.setValue(null);
      }
    }
    this.gradingTermTestGrid();
  }


  deleteClassMember(data: any): void {
    const id = data.clickedRow.id;
    if (this.termClassSectionsData.length === 1) {
      this.openSnackBar(Messages.ATLEAST_ONE_CLASS_SECTION_REQUIRED, true);
    }
    else if (this.termClassSectionsData.find(g => g.id === id)) {
      this.removedClassSectionIds.push(id);
      this.termClassSectionsData = this.termClassSectionsData.filter(x => x.id !== id).slice();
      this.prepareGrid(this.termClassSectionsData, this.displaygradeClassSectionCols, Messages.CLASSSECTION_TITLE.toUpperCase(), this.classSectionGroupCriteria =
        ['boardCode', 'className']);
    }
  }

  prepareGrid(data: Array<any>, columsArray: any[], title: string, groupCriteria: any): void {
    this.gridTitle = title;
    this.gridData = data;
    this.gridColumsArray = columsArray;
    this.gridColums = this.gridColumsArray.map(x => x.field);

    this.appliedClassSection = {
      tablename: this.gridTitle,
      rows: this.gridData,
      columns: this.gridColumsArray,
      hideHeader: true,
      rowGroupingColumns: groupCriteria
    };
  }
  gradingTermTestGrid(): void {
    this.gradingTermTestGridSettings = {
      rows: this.gradingTermTestGridData,
      columns: this.contributionGridHeaderData.filter(e => (this.isContribution ? e.field !== 'consideration' : e.field !== 'contribution')),
      hideHeader: true,
      tabTable: true,
      padding: true
    };
  }

  cloneGradingContributionGrid(): void {
    this.cloneGradingTermContributionSettings = {
      rows: this.gradingTermTestGridData,
      columns: this.cloneContributionGridHeaderData,
      hideHeader: true,
      padding: true
    };
  }


  cloneGrade(data: any): void {

    this.cloneEnable = true;
    this._gradingTermConfigurationService.gradingTermConfigurationGradeTermGet(data.clickedRow.id).subscribe(res => {
      this.cloneGradeTermConfigurationById(res);
    });
  }

  onSchoolBoardSelect(data: any): void {
    this.clearGradeTermSection();
    this.classNames = [];
    this.sectionDisabled = true;
    this.classDisabled = true;
    this.getClassesList(data);
    this.priorGradingTerms = [];
    this.gradeClassSectionViewModel.boardId = data.value;
  }

  onCloneGradingTermSelect(id: any): void {
    this.cloneDisable = true;
    this.initializeCloneGradingTermForm();
    this.cloneClasses = [];
    this.clearCloneSection();
    this._gradingTermConfigurationService.gradingTermConfigurationFetchClassesByGradingtermidGet(id).subscribe(res => {
      if (res.listViews != null) {
        this.cloneDisable = false;
        res.listViews.map(x => {
          this.cloneClasses.push({ value: x.id, label: x.name });
        });
      } else {
        this.gradingTermsExceeded = res.messages.ResultMessage;
      }
    }, error => {
      this.gradingTermsExceeded = error.messages.ResultMessage;
    });
  }

  onClassSelect(data: any): void {
    this.disableCloneSection = true;
    this.clearCloneSection();
    this.cloneFormGroup.controls['cloneSectionId'].patchValue(null);
    this._gradingTermConfigurationService.gradingTermConfigurationFetchSectionsByClassidAndGradingtermidGet(data.value, this.cloneGradingTermId).subscribe(res => {
      if (res.listViews != null) {

        this.disableCloneSection = false;
        res.listViews.map(x => {
          this.cloneSectionNamesList.push({ value: x.id, label: x.name });
        });
      }
      this.cloneSections = { multiSelect: true, placeholder: 'Section', data: this.cloneSectionNamesList, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: true };
    });
  }

  cloneGradeTermConfigurationById(termData: any): void {

    this.cloneSectionNamesList = [];
    this.cloneClasses = [];
    this.disableCloneSection = true;
    this.gradingTermsExceeded = '';
    this.cloneGradingTermId = termData.gradingTermConfigurationDataViewModel[0].id;
    this.onCloneGradingTermSelect(termData.gradingTermConfigurationDataViewModel[0].id);
    this.termConfigurationData = termData.gradingTermConfigurationDataViewModel[0];
    if (this.termConfigurationData != null) {
      this.termConfigurationData.termStartDate = (this.termConfigurationData.termStartDate == null) ?
        null : this.commonService.customDateFormat(this.termConfigurationData.termStartDate, this.getSchoolDateFormat()).date;
      this.termConfigurationData.termEndDate = (this.termConfigurationData.termEndDate == null) ?
        null : this.commonService.customDateFormat(this.termConfigurationData.termEndDate, this.getSchoolDateFormat()).date;
      this.termConfigurationData.testsStartDate = (this.termConfigurationData.testsStartDate == null) ?
        null : this.commonService.customDateFormat(this.termConfigurationData.testsStartDate, this.getSchoolDateFormat()).date;
      this.termConfigurationData.testsEndDate = (this.termConfigurationData.testsEndDate == null) ?
        null : this.commonService.customDateFormat(this.termConfigurationData.testsEndDate, this.getSchoolDateFormat()).date;
      this.termConfigurationData.generateOverAllGrade = this.commonService.defaultEmpty(this.commonService.selectedDropDownData
        (this.filterYesNo, this.termConfigurationData.generateOverAllGrade)).label;
      this.termConfigurationData.generateReportCard = this.commonService.defaultEmpty(this.commonService.selectedDropDownData
        (this.filterYesNo, this.termConfigurationData.generateReportCard)).label;
      this.termConfigurationData.evaluationTypeId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData
        (this.evaluationTypes, this.termConfigurationData.evaluationTypeId)).label;
    }

    this.termClassSectionsData = termData.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
    this.gradingTermTestGridData = JSON.parse(JSON.stringify(termData.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel));

    this.gradingTermTestGridData.forEach(e => {
      e.testTypeApiId = e.testTypeId,
      e.otherGradingApiTermId = e.otherGradingTermId ? e.otherGradingTermId : null,
      e.otherGradingTermId = e.otherGradingTermName,
        e.testTypeId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.testTypes, e.testTypeId)).label,
        e.isDisplayOnreportCard = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.filterYesNo, e.isDisplayOnreportCard)).label,
        e.marksGroupCriteriaId = this.commonService.defaultEmpty(this.commonService.selectedDropDownData(this.marksGroupCriteria, e.marksGroupCriteriaId)).label,
        e.isexist = true;
    });
    this.gradingTermTestGridData = this.gradingTermTestGridData.slice();
    this.cloneGradingContributionGrid();
    this.scrollIntoViewById('clone-form');
  }
  // End

  clonePost(data: any): void {

    this.cloneGradingTermDetails = {};
    if (this.cloneFormGroup.status === AppSettings.VALID) {
      this.isUpdateData = false;
      this.classSectionDetails = [];
      this.cloneGradingTermDetails.classId = data.cloneClassId;
      this.cloneGradingTermDetails.sectionsId = data.cloneSectionId.map(element => {
        return element.value;
      });
      this.cloneGradingTermDetails.gradingTermId = this.cloneGradingTermId;

      this._gradingTermConfigurationService.gradingTermConfigurationCloneGradingTermPost(this.cloneGradingTermDetails)
        .subscribe(res => this.addorUpdateResponse(res), error => {
          this.errorResponse(error);
        });

    } else {
      this.isCloneFormValid = true;
      this.cloneEnable = true;
    }
  }

  onCloneCancel(): void {

    this.closeAddPanel = true;
    this.cloneEnable = false;
    this.clearCloneSection();
    this.cloneClasses = [];
    this.disableCloneSection = true;
    if (this.cloneGradingTermForm !== undefined) {
      this.cloneGradingTermForm.reset();
      this.cloneGradingTermForm.resetForm();
    }
    const cloneGradeColumnList: string[] = ['cloneClassId', 'cloneSectionId'];
    this.customClearValidation(this.cloneFormGroup, cloneGradeColumnList);
    this.scrollIntoViewById('app-table-grading-terms');
  }

  loadSchoolBoards(): void {
    this.schoolBoards = [];
    this.gradeSetupService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        this.isSchoolBoards = true;
        this.classDisabled = true;
        res.listViews.forEach(element => {
          this.schoolBoards.push({
            label: element.name,
            value: element.id
          });
        });
        this.setDefaultBoard();
      } else {
        this.isSchoolBoards = false;
        this.classDisabled = false;
        this.classNames = [];
        this._classSectionService.schoolAcademicClasses().subscribe(response => {
          if (response.listViews != null) {
            if (response.listViews.length) {
              this.classDisabled = false;
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
    }, error => {
      this.errorResponse(error);
    });
  }
  clearCloneSection(): void {
    this.cloneSections = null;
    this.cloneSectionNamesList = [];
  }

  clearGradeTermSection(): void {
    this.sectionNames = null;
    this.sectionNamesList = [];
  }
  OnSelectionChange(event): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex === 2) {
      if (this.testsForm) {
        this.testsForm.submitted = false;
      }
      this.stepper._steps._results[event.selectedIndex].interacted = false;
    } else if (event.selectedIndex === 3) {
      this.stepper._steps._results[event.selectedIndex].interacted = false;
      this.reportsForm.controls.contribution.markAsUntouched();
      this.reportsForm.controls.usingGradingTermId.markAsUntouched();
      this.reportsForm.controls.title.markAsUntouched();
      this.reportsForm.controls.usingGradingTermId.updateValueAndValidity();
      this.reportsForm.updateValueAndValidity();
    }
  }

  onChangeContribution(event): void {
    // this.onchangeEventOfGrading(event);
    if (this.gradingTermTestGridData.length) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.GRADE_CHANGETOCONTRIBUTION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.onchangeEventOfGrading(event);
        } else {
          this.radioOptions = this.radioOptions ? 0 : 1;
          this.changeDetecor.detectChanges();
        }
      });
    } else {
      this.onchangeEventOfGrading(event);
    }
  }
  onchangeEventOfGrading(event): void {
    this.customResetForm(this.TestsFormGroup, this.contributionColumnList);
    this.TestsFormGroup.controls.otherGradingTermId.reset();
    this.testsForm.submitted = false;
    this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
    if (this.isUpdateData) {
      this.gradingTermTestGridData.forEach((element: any) => {
        if (element.isexist === true) {
          this.removedTestTypeIds.push(element.id);
        }
      });
    }
    this.gradingTermTestGridData = [];
    this.gradingTermTestDetails = [];
    this.isContribution = event === AppSettings.Default_Contribution ? true : false;
    this.gradingTermTestGrid();
    this.disableNext = true;
    this.disableSelect = false;
    this.show = false;
  }
  manageTestFormValidation(condition = false): void {
    if (!condition) {

      this.TestsFormGroup.get('stepperController').clearValidators();
      this.TestsFormGroup.controls['stepperController'].updateValueAndValidity();
    } else {
      this.TestsFormGroup.controls['stepperController'].setValidators([Validators.required]);
    }

  }
  onSelectMarksGroupCriteria(event): void {
    this.TestsFormGroup.controls.marksGroupCriteriaCount.setValue(null);
    if (event.value === 1) {
      // tslint:disable-next-line: max-line-length
      this.markGroupRequired = true;
      this.TestsFormGroup.controls.marksGroupCriteriaCount.setValidators([
        Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(100)]);
    } else {
      this.TestsFormGroup.controls.marksGroupCriteriaCount.clearValidators();
      this.markGroupRequired = false;
    }
    this.TestsFormGroup.controls.marksGroupCriteriaCount.updateValueAndValidity();
  }

  setDefaultBoard(): void {
    this.setFormControl('ClassSectionFormGroup', 'boardId', this.schoolBoards[0].value);
    this.onSchoolBoardSelect(this.schoolBoards[0]);
  }
  onAdditionalColumnSelect(event): void {
    this.additionalColumnData = [];
    if (event.value) {
      this.reportsForm.controls.usingGradingTermId.setValidators(Validators.required);
      this.reportsForm.controls.title.setValidators([Validators.required, Validators.maxLength(45)]);
      // tslint:disable-next-line: max-line-length
      this.reportsForm.controls.contribution.setValidators([Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(1), Validators.max(100)]);
      this.reportsForm.updateValueAndValidity();
      this.stepper.selected.interacted = false;
    } else {
      this.reportsForm.controls.usingGradingTermId.clearValidators();
      this.reportsForm.controls.title.clearValidators();
      this.reportsForm.controls.contribution.clearValidators();
      this.reportsForm.updateValueAndValidity();
    }
    this.onClear(true);
  }
  onChangeThisTerm(event): void {
    if (event.checked) {
      this.reportsForm.controls.usingGradingTermId.clearValidators();
    } else {
      this.reportsForm.controls.usingGradingTermId.setValidators(Validators.required);
    }
    this.reportsForm.controls.usingGradingTermId.setValue(null);
    this.reportsForm.updateValueAndValidity();
  }
  validateAdditionalForm(): boolean {
    if ((this.reportsForm.controls.usingGradingTermId.valid || this.reportsForm.controls.isPresentGradingTerm.value) && this.reportsForm.controls.contribution.valid &&
      this.reportsForm.controls.title.valid) {
      let contributuon = 0;
      this.additionalColumnData.forEach(e => contributuon += +e.contribution);
      contributuon += +this.reportsForm.value.contribution;
      if (contributuon > 100) {
        this.openSnackBar('Overall Contribution Should not exceeds 100%', true);
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  onSelectAdditionColumns(): void {
    if (this.validateAdditionalForm()) {
      this.additionalColumnData.push(this.setAdditionalColumnData(this.reportsForm.value));
      this.reportsForm.controls.usingGradingTermId.setValidators(Validators.required);
      this.onClear();
    } else {
      this.reportsForm.controls.contribution.markAsTouched();
      this.reportsForm.controls.usingGradingTermId.markAsTouched();
      this.reportsForm.controls.title.markAsTouched();
      this.reportsForm.updateValueAndValidity();
    }
    this.updateStepperController();
  }
  setAdditionalColumnData(value, isPresentGradingTerm = false): any {
    return {
      id: value.id,
      title: value.title,
      usingGradingTermId: value.usingGradingTermId,
      isPresentGradingTerm: isPresentGradingTerm ? isPresentGradingTerm : value.isPresentGradingTerm,
      isVisible: value.isVisible,
      contribution: value.contribution,
      forGradingTermId: value.forGradingTermId ? value.forGradingTermId : null,
      isGrandTotalColumn: 0
    };
  }
  onClear(fromAdditionalChange = false): void {
    this.reportsForm.patchValue({
      title: null,
      contribution: null,
      usingGradingTermId: null,
      isPresentGradingTerm: false,
      isVisible: true
    });
    this.reportsForm.controls.contribution.markAsUntouched();
    this.reportsForm.controls.usingGradingTermId.markAsUntouched();
    this.reportsForm.controls.title.markAsUntouched();
    this.reportsForm.controls.usingGradingTermId.updateValueAndValidity();
    this.reportsForm.updateValueAndValidity();
    if (!fromAdditionalChange) {
      this.stepper.selected.interacted = false;
    }
    this.changeDetecor.detectChanges();
  }
  onDeleteAdditionalColumn(i): void {
    this.additionalColumnData.splice(i, 1);
    this.updateStepperController();
  }
  updateStepperController(): void {
    this.totalContribution = 0;
    this.additionalColumnData.map(e => this.totalContribution += +e.contribution);
    if (this.reportsForm.value.additionalColumns === 1 ? this.totalContribution === 100 : true) {
      this.reportsForm.controls.stepperController.patchValue(true, { emitEvent: false, onlySelf: true });
    } else {
      this.reportsForm.controls.stepperController.patchValue(null, { emitEvent: false, onlySelf: true });
    }
  }
  getLabelOfGradingTerms(value): any {
    return value && this.priorGradingTerms.length && this.priorGradingTerms.find(e => e.value === value) && this.priorGradingTerms.find(e => e.value === value).label;
  }
  onChangeOverallGrade(event): void {
    this.reportsForm.controls.overALLGradeDisplayName.setValue(null);
    if (event.value) {
      this.reportsForm.controls.overALLGradeDisplayName.enable();
    } else {
      this.reportsForm.controls.overALLGradeDisplayName.disable();
    }
    this.reportsForm.controls.overALLGradeDisplayName.updateValueAndValidity();
  }
  isValidFormFields(): any {
    let isValid = true;
    Object.keys(this.TestsFormGroup.controls).forEach(key => {
      if (key !== 'testsStartDate' && key !== 'testsEndDate') {
        isValid = isValid && this.TestsFormGroup.get(key).valid;
      }
    });
    return isValid;
  }
  customResetForm(form: FormGroup, columnList: string[]): void {
    columnList.map(element => {
      form.get(element).reset();
      form.controls[element].updateValueAndValidity();
    });
  }
  getReportsIsOptional(): boolean {
    if (this.reportsForm.value.additionalColumns === 1 && !this.additionalColumnData.length) {
      return false;
    } else {
      let additionalColumnFormValid = true;
      if (this.additionalColumnData.length) {
        this.totalContribution = 0;
        this.additionalColumnData.map(e => this.totalContribution += +e.contribution);
        additionalColumnFormValid = (this.totalContribution === 100) ? true : false;
      }

      return additionalColumnFormValid && this.reportsForm.controls.evaluationTypeId.valid
        && this.reportsForm.controls.reportTemplateId.valid &&
        this.reportsForm.controls.generateOverAllGrade.valid && this.reportsForm.controls.additionalColumns.valid
        && this.reportsForm.controls.stepperController.valid;
    }
  }
  onClickNext(): void {
    this.totalContribution = 0;
    this.additionalColumnData.map(e => this.totalContribution += +e.contribution);
    if (this.reportsForm.value.additionalColumns === 1) {
      if (!this.additionalColumnData.length) {
        this.openSnackBar('Please select contribution to continue', true);
      } else if (this.totalContribution !== 100) {
        this.openSnackBar('Total Contribution should be 100%', true);
      }
    }
  }
  getTemplates(): void {
    this._gradingTermConfigurationService.gradingTermConfigurationPrintTemplateGet()
      .subscribe(res => this.setTemplates(res), error => {
        this.errorResponse(error);
      });
  }
  setTemplates(res): void {
    this.templates = res.listViews ? res.listViews : [];
  }
  onOpenTests(): void {
    this.scrollIntoViewById('customExpansion');
  }
}
