import { Component, ViewChild, OnInit } from '@angular/core';
import { AppSettings } from 'app/app.constants';
import { Router } from '@angular/router';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { AssessmentParameterService } from 'app/service/assessment-service/api/assessment-parameters.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as HttpStatus from 'http-status-codes';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { ClassAssessmentParameterViewModel } from 'app/models/academics/class-assessment-parameter-viewmodel';
import { AssessmentGroupCategoryViewModel } from 'app/models/academics/assessment-group-category-viewmodel';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ClassAssesmentFilterViewModel } from '../../../../models/academics/class-assesment-filter-view-model';


@Component({
  selector: 'app-class-assessment-configuration',
  templateUrl: './class-assessment-configuration.component.html',
  styleUrls: ['./class-assessment-configuration.component.scss']
})
export class ClassAssessmentConfigurationComponent extends CommonComponent implements OnInit {
  @ViewChild('paramDropdownSelect') paramDropdownSelect: any;
  @ViewChild('addClassAssessmentParametersTemplate') addClassAssessmentParametersTemplate;
  @ViewChild('classAssessmentParametersConfiguration') myClassAssessmentParametersConfiguration;
  dataLoaded = Promise.resolve(false);
  currentComponentName = 'ClassAssessmentConfigurationComponent';
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  filterRowData: any = [];
  gridName = 'classAssismentConfiguration';
  idsToDisplay: any;
  closeAddPanel = true;
  schoolBoardsList: Array<any> = [];
  classesList: Array<any> = [];
  isSchoolBoards = false;
  sectionsList: Array<any> = [];
  filterSections: Array<any> = [];
  classNames: Array<any> = [];
  sectionNames: Array<any> = [];
  classAssessmentParmsFormGroup: FormGroup;
  classAssmentparmsFormSubmitted = false;
  disbleSubmitBtn = false;
  buttonName: any;
  assessmentCategoriesList: Array<any> = [];
  assessmentGroupsList: Array<any> = [];
  classAssessmentParameterViewModel: ClassAssessmentParameterViewModel;
  assessmentGroupCategoryViewModel: AssessmentGroupCategoryViewModel;
  classAssesmentFilterViewModel: ClassAssesmentFilterViewModel;
  selectedGroupId = 0;
  nodata = false;
  dropDownData: DropDownConfModel;
  dropDownLoaded = Promise.resolve(false);
  optionsvalue: Array<any> = [];
  parmslist: Array<number> = [];
  modelname: any;
  assessmentSubCategory: string;
  classDropDown: DropDownConfModel;
  selectedclassesList: Array<number> = [];
  disableSection = false;
  schoolBoardId: any;
  sectionDropDown: DropDownConfModel;
  selectedSectionsList: Array<number> = [];
  assessmentParamsList: Array<any> = [];

  classDropDownAsync = Promise.resolve(false);

  constructor(
    public _commonService: CommonService,
    private gradeSetupService: GradeSetupService,
    private router: Router,
    public commonService: CommonService,
    public dialog: MatDialog,
    private commonComponent: CommonComponent,
    private assessmentParameterService: AssessmentParameterService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.classAssesmentFilterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      classes: [],
      sections: [],
      schoolBoards: [],
      assesmentGroups: [],
      assesmentCategories: [],
      assesmentSubCategories: [],
      assesmentParameters: [],
    };
    this.classDropDown = {
      data: [],
      multiSelect: true
    };
  }

  ngOnInit(): void {
    this.assessmentCategories();
    this.cols = [
      { field: 'schoolBoard', header: 'School Board', sort: false },
      { field: 'class', header: 'Class', sort: false },
      { field: 'sections', header: 'Section', sort: false },
      { field: 'assesmentGroup', header: 'Assessment Group', sort: false },
      { field: 'assesmentCategory', header: 'Assessment Category', sort: false },
      { field: 'assesmentSubCategory', header: 'Assessment Subcategory', sort: false },
      { field: 'assesmentParameter', header: 'Assessment Parameter', sort: false },
      { field: 'delete', header: 'Actions', sort: false }
    ];

    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.classAssesmentFilterViewModel = modelTableComponent;
    }
    // initializing table settings /
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.classAssesmentFilterViewModel,
      tablename: 'Class Assesment Parameters',
      componentName: this.currentComponentName,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
    };
    if (this.getTokenParam('_as')) {
      this.getSchoolBoardsList();
      this.assessmentGroups();
      this.assessentParameters();
      this.loadClassAssesmentsdata();
    } else {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
    }

    this.classAssessmentParameterViewModel = {
      classId: [],
      sectionId: [],
      schoolBoardId: 0,
      assessmentParameterId: []
    };

    this.assessmentGroupCategoryViewModel = {
      assessmentCategoryId: 0,
      assessmentGroupId: 0
    };

    // initialization of form controls in form group
    this.classAssessmentParmsFormGroup = new FormGroup({
      schoolBoardId: new FormControl(''),
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl(null),
      assessmentCategoryId: new FormControl(null),
      assessmentGroupId: new FormControl('', [Validators.required]),
      assessmentParameterId: new FormControl('', [Validators.required])
    });
  }

  loadClassAssesmentsdata(): void {
    this.assessmentParameterService.fetchClassAssesmentList(this.classAssesmentFilterViewModel.sortBy,
      this.classAssesmentFilterViewModel.sortOrder, this.classAssesmentFilterViewModel.classes,
      this.classAssesmentFilterViewModel.sections, this.classAssesmentFilterViewModel.schoolBoards,
      this.classAssesmentFilterViewModel.assesmentGroups, this.classAssesmentFilterViewModel.assesmentCategories,
      this.classAssesmentFilterViewModel.assesmentSubCategories, this.classAssesmentFilterViewModel.assesmentParameters,
      this.classAssesmentFilterViewModel.pageNumber, this.classAssesmentFilterViewModel.pageSize).subscribe(data => this.response(data));
  }

  response(data: any): void {

    if (data.classAssesmentListViewModel) {
      this.classAssesmentFilterViewModel.pageNumber =  data.classAssesmentListViewModel.pageNumber;
      this.rows = data.classAssesmentListViewModel.list;
      this.totalItems = data.classAssesmentListViewModel.totalItems;
      this.pageCnt = data.classAssesmentListViewModel.totalPages;
    } else {
      this.rows = [];
    }

    this.filterRowData = this.rows;

    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            if (value.assesmentParameter === element.assesmentParameter &&
              value.assesmentCategory === element.assesmentCategory) {
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
    // apply edit and delete
    this.filterRowData.forEach(element => {
      this.rows.forEach(element1 => {
        if (element.assesmentParameter === element1.assesmentParameter &&
          element.assesmentCategory === element1.assesmentCategory &&
          element.assesmentSubCategory === element1.assesmentSubCategory) {
          element1.operations = [
            {
              name: AppSettings.DELETE_OPERATION,
              icon: AppSettings.DELETE,
              operationName: AppSettings.DELETE
            }];
        }
      });
    });

    this.tabSettings = {
      columns: this.cols,
      model: this.classAssesmentFilterViewModel,
      rows: this.rows,
      tablename: 'Class Assessment Parameters',
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      rowGroupingColumns: ['class', 'schoolBoard', 'sections', 'assesmentGroup', 'assesmentCategory'],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Class Assessment Parameters'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.BUTTON_NAME
        }
      }
    };
  }
  classAssesmentTableData(_event: ClassAssesmentFilterViewModel): void {
    this.classAssesmentFilterViewModel = _event;
    this.loadClassAssesmentsdata();
  }

  // row-wise actions of the table(edit/delete)
  rowActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      // calling delete confirmation 
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.assessmentParameterService.deleteClassAssesmentParameter(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }

  openForm(): void {
    // this.classAssessmentParmsFormGroup.get('assessmentParameterId').setValidators(Validators.required);
    // this.classAssessmentParmsFormGroup.get('assessmentParameterId').updateValueAndValidity();
    this.closeAddPanel = false;
    this.buttonName = AppSettings.SUBMIT;
    this.disbleSubmitBtn = false;
    this.setDefaultBoard();
  }

  // get the list school boards
  getSchoolBoardsList(): void {
    this.gradeSetupService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
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
        this.getClassesList();
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // on Selection of school board
  onSelectSchoolBoard(schoolBoard: any): void {
    this.sectionNames = null;
    this.classNames = null;
    this.classNames = [];
    this.sectionNames = [];
    this.sectionDropDown = null;
    this.selectedclassesList = [];
    this.selectedSectionsList = [];

    this.classAssessmentParmsFormGroup.controls['classId'].setValue('');
    this.classAssessmentParmsFormGroup.controls['sectionId'].setValue('');
    this.schoolBoardId = schoolBoard.value;
    this.classDropDown.data = [];
    this.gradeSetupService.schoolAcademicClasses(schoolBoard.value, null).subscribe(response => {
      this.classDropDown.data = [];
      if (response.listViews !== undefined && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classNames.push({
            label: element.name,
            value: element.id
          });
        });
        this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.classNames, noEntryFoundLabel: 'No Data Found', isRequired: true };
      }
      this.classDropDownAsync = Promise.resolve(true);
    });
  }
  // End

  // Get Classes to filter table data
  getClassesList(): void {
    this.classNames = [];
    this.selectedSectionsList = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews !== undefined && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classNames.push({
            label: element.name,
            value: element.id
          });
        });
        this.classDropDown = { multiSelect: true, placeholder: 'Class', data: this.classNames, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: true };
      }
      this.classDropDownAsync = Promise.resolve(true);
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  onSelectSection(data: any): void {
    this.selectedSectionsList = [];
    if (data.length > 0) {
      this.selectedSectionsList = data.map(x => x.value);
    }
  }

  // on selection of class
  onSelectClass(data: any): void {
    this.selectedclassesList = [];
    this.filterSections = [];
    this.sectionDropDown = null;
    this.sectionNames = null;
    this.selectedSectionsList = [];
    this.classAssessmentParmsFormGroup.controls['sectionId'].setValue('');
    if (data.length > 0) {
      this.selectedclassesList = data.map(x => x.value);

      if (data.length === 1) {
        this.getSectionsList(data[0].value);
      }
    }

  }
  // End

  // Get Sections to filter table data
  getSectionsList(classId: any): void {
    this.sectionNames = [];

    if (this.schoolBoardId === undefined) {
      this.schoolBoardId = null;
    }

    this.gradeSetupService.schoolAcademicClassSections(this.schoolBoardId, classId).subscribe(response => {
      if (response.listViews !== undefined && response.listViews.length) {
        response.listViews.forEach(element => {
          this.sectionNames.push({
            label: element.name,
            value: element.id
          });
        });
        this.sectionDropDown = { multiSelect: true, placeholder: 'Section', data: this.sectionNames, noEntryFoundLabel: AppSettings.NODATA_FOUND };
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  // onCancelClick
  onCancelClick(): void {
    this.classAssessmentParmsFormGroup.reset();
    this.myClassAssessmentParametersConfiguration.resetForm();
    this.closeAddPanel = true;
    this.classAssmentparmsFormSubmitted = false;
    this.disbleSubmitBtn = false;
    this.clearFields();
    this.loadClassAssesmentsdata();

  }
  // End

  // submit the data of Class Assessment Parameters
  save(form: any, isContinue = false): void {
    if (this.isSchoolBoards) {
      this.classAssessmentParmsFormGroup.get('schoolBoardId').setValidators([Validators.required]);
      this.classAssessmentParmsFormGroup.controls['schoolBoardId'].updateValueAndValidity();
    }
    else {
      this.classAssessmentParmsFormGroup.get('schoolBoardId').clearValidators();
      this.classAssessmentParmsFormGroup.controls['schoolBoardId'].updateValueAndValidity();
    }

    this.classAssmentparmsFormSubmitted = true;
    if (this.classAssessmentParmsFormGroup.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      this.buttonName = AppSettings.SUBMIT;
      this.classAssessmentParameterViewModel.classId = this.selectedclassesList;
      this.classAssessmentParameterViewModel.sectionId = this.selectedSectionsList;
      this.classAssessmentParameterViewModel.schoolBoardId = form.value.schoolBoardId;
      this.classAssessmentParameterViewModel.assessmentParameterId = form.value.assessmentParameterId;
      this.classAssessmentParameterViewModel.assesmentGroupId = form.value.assessmentGroupId;
      this.classAssessmentParameterViewModel.assesmentCategoryId = form.value.assessmentCategoryId;
      this.assessmentParameterService.createClassAssessmentParameters(this.classAssessmentParameterViewModel).subscribe(res => this.addResponse(res, isContinue), error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
    }
  }
  // End

  // response after add data of ClassAssessmentParameters 
  addResponse(response: any, isContinue): void {
    this.assessmentSubCategory = '';
    if (response.statusCode === HttpStatus.OK || response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
      if (response.statusCode === HttpStatus.BAD_REQUEST || response.statusCode === HttpStatus.CONFLICT) {
        this.closeAddPanel = false;
      } else {
        if (isContinue) {
          this.closeAddPanel = false;
        } else {
          this.closeAddPanel = true;
          this.loadClassAssesmentsdata();
        }
        this.disbleSubmitBtn = false;
        const schoolBoardId = this.classAssessmentParmsFormGroup.value.schoolBoardId;
        this.classAssessmentParmsFormGroup.reset();
        this.myClassAssessmentParametersConfiguration.resetForm();
        this.classAssessmentParmsFormGroup.patchValue({ schoolBoardId: schoolBoardId });
      }
    } else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // get Assessment Groups
  assessmentGroups(): void {
    this.assessmentParameterService.getAssessmentGroupsList()
      .subscribe(res => this.assessmentGroupsList = res.commonViewModel, error => {
        this.errorResponse(error);
      }
      );
  }

  // get Assessment Categories
  assessmentCategories(): void {
    this.assessmentParameterService.getAssessmentCategoriesList()
      .subscribe(res => {
        this.dataLoaded = Promise.resolve(true);
        this.assessmentCategoriesList = res.commonViewModel;
      }
      );
  }

  assessentParameters(): void {
    this.assessmentParameterService.listAssesmentParameter(
    ).subscribe(
      res => {
        this.optionsvalue = [];
        res.commonViewModel.forEach(element => {
          this.optionsvalue.push({
            label: element.name,
            value: element.id
          });
          this.assessmentParamsList = this.optionsvalue;
        });
        //   this.dropDownLoaded = Promise.resolve(true);
        //   this.dropDownData = {
        //     multiSelect: true, placeholder: AppSettings.ASSESSMENT_PARAMETERS,
        //     data: this.optionsvalue, noEntryFoundLabel: AppSettings.NODATA_FOUND, maxCount: 1, isRequired: true
        //   };
        // }, error => {
        //   this.dropDownData = {
        //     multiSelect: true, placeholder: AppSettings.ASSESSMENT_PARAMETERS,
        //     data: this.optionsvalue, noEntryFoundLabel: AppSettings.NODATA_FOUND, maxCount: 1, isRequired: true
        //   };
        //   this.dropDownLoaded = Promise.resolve(true);
      }
    );
  }

  onSelectAssessmentCategory(event: any): void {
    this.assessmentGroupCategoryViewModel.assessmentCategoryId = event.value;
    this.assessmentGroupCategoryViewModel.assessmentGroupId = this.selectedGroupId;
    this.assessmentSubCategory = '';
    if (event.value && event.value.length === this.optionsvalue.length) {
      this.paramDropdownSelect.close();
    }
    // this.assessmentParameterService.getAssessmentSubCategories(this.assessmentGroupCategoryViewModel.assessmentCategoryId).subscribe(
    //   res => {
    //     let subCategories = '';
    //     res.forEach(element => {
    //       subCategories = subCategories + element + ',';
    //     });
    //     this.assessmentSubCategory = subCategories.substring(0, subCategories.length - 1);
    //   }, error => {
    //     this.errorResponse(error);
    //   }
    // );
  }

  onSelectAssessmentGroup(event: any): void {
    this.selectedGroupId = event.value;
  }

  clearFields(): void {
    this.assessmentSubCategory = '';
    this.sectionDropDown = null;
    this.selectedclassesList = [];
    this.selectedSectionsList = [];
    this.myClassAssessmentParametersConfiguration.resetForm();
  }

  onSelect(event: any): void {
    this.parmslist = [];
    if (event.length > 0) {
      this.parmslist = event.map(x => x.value);
    }
  }

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.loadClassAssesmentsdata();
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }

  setDefaultBoard(): void {
    this.setFormControl('classAssessmentParmsFormGroup', 'schoolBoardId', this.schoolBoardsList[0].value);
    this.onSelectSchoolBoard(this.schoolBoardsList[0]);
  }
}
