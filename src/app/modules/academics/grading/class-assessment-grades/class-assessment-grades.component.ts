import { MatDialog, MatSnackBar, MatAutocompleteTrigger } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ClassSectionService } from '../../../../service/academic-service/api/class-section.service';
import { GardeTermConfigurationService } from '../../../../service/grading-service/api/garde-term-configuration.service';
import { AssessmentParameterService } from '../../../../service/assessment-service/api/assessment-parameters.service';
import { StudentAssessmentGradeService } from '../../../../service/grading-service/api/student-assessment-grade.service';
import { ClassAssesmentGradesParamListViewModel } from '../models/class-assesment-grades-param-list-view-model';
import { ClassAssessmentFilterView } from '../models/class-assessmnet-garde-filter-view';
import { BehaviorSubject } from 'rxjs';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { GradeReportService } from 'app/service/report-card-service/grade-report.service';
import { ActivatedRoute } from '@angular/router';
import { StudentDatabaseService } from '../../../../service/academic-service/api/student-database.service';
import { AppSettings } from 'app/app.constants';



@Component({
  selector: 'app-class-assessment-grades',
  templateUrl: './class-assessment-grades.component.html',
  styleUrls: ['./class-assessment-grades.component.scss'],
  providers: [StudentDBService, GradeReportService, StudentDatabaseService]
})
export class ClassAssessmentGradesComponent extends CommonComponent implements OnInit {

  classAssessmentGradesFormGroup: FormGroup;
  updateAssesmentGradesFormGroup: FormGroup;
  gradingTerms: Array<any> = [];
  // assessmentParams = Promise.resolve([]);
  assessmentParams: Array<any> = [];
  // assessmentGroupsList = Promise.resolve([]);
  assessmentGroupsList: Array<any> = [];
  // assessmentCategoriesList = Promise.resolve([]);
  assessmentCategoriesList: Array<any> = [];

  classAssmentGroupsFormSubmitted = false;
  tableSettings: any = {};
  isEditMode = false;
  setGradeForm = false;
  rows: Array<any>;
  selectedRowsData: Array<any>;
  columns: any[];
  gradeIndicatorList: any[];
  availableAssessmentSubCategories: any[];
  editButton = {};
  classAssesmentGradesParamListViewModel: ClassAssesmentGradesParamListViewModel;
  isSearchPerformed = false;
  isShowAll = true;
  isSubcategoiriesAvailable = false;
  filterView: ClassAssessmentFilterView;
  isStaffLogin = false;
  staffInfo: any[] = [];
  hideButtons = false;

  testVariable: string;
  testEmitter$ = new BehaviorSubject<string>(this.testVariable);
  filterdStudents: any[] = [];
  currentComponent = 'ClassAssessmentGradesComponent';
  studentAssessmentDeatils: any;
  gradeListIndicator: any[] = [];
  studentGradeForm: FormGroup;

  studentGradeAssessmentForm: FormGroup;
  displayName: any;
  tempFilteredStudents: any[] = [];
  isStudentSearch = false;
  isNavFromReports = false;
  marksIndex: any;

  dropdownChangeIndex: any;

  @Input() studentData: any;
  constructor(
    private commonComponent: CommonComponent,
    private classSectionService: ClassSectionService,
    private studentDbService: StudentDBService,
    private _gradingTermConfigurationService: GardeTermConfigurationService,
    private _assessmetParametersService: AssessmentParameterService,
    private _studentAssessmentGradeService: StudentAssessmentGradeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private studentDatabaseService: StudentDatabaseService,
    public commonService: CommonService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public changeDetecor: ChangeDetectorRef,
    public gradeReportService: GradeReportService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.dropdownChangeIndex = [];
    if (this.studentData) {
      this.isNavFromReports = true;
      this.classAssessmentGradesFormGroup.controls['studentNames'].setValue(this.studentData.student.value);
      // this.classAssessmentGradesFormGroup.controls['searchByName'].setValue('name');
      // this.classAssessmentGradesFormGroup.value.searchByName = 'name';
      this.getAvailableSections(this.studentData.schoolBoardId, this.studentData.classId);
      this.getGradingTerms(this.studentData.classId, this.studentData.sectionId);
      this.classAssessmentGradesFormGroup.patchValue(this.studentData);
      this.getAssessmentConfigurationList();
    } else {
      this.isNavFromReports = false;
    }
  }

  initializeForm(): void {
    this.filterView = {
      sortBy: '',
      sortOrder: 0,
      schoolAcademicSessionStudentId: ''
    };

    this.classAssessmentGradesFormGroup = new FormGroup({
      schoolBoardId: new FormControl('', [Validators.required]),
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      gradingTermId: new FormControl('', [Validators.required]),
      assessmentCategoryId: new FormControl(''),
      assessmentGroupId: new FormControl(''),
      assessmentParameterId: new FormControl(''),
      // searchByName: new FormControl('assessment'),
      studentNames: new FormControl('')
    });

    this.studentGradeAssessmentForm = new FormGroup({
      studentGrade: new FormControl('', [Validators.required]),
    });

    this.studentGradeForm = new FormGroup({
      grades: this.fb.array([])
    });

    if (this.getTokenParam('_as')) {
      this.getAvailableSchoolBoards('classAssessmentGradesFormGroup', 'schoolBoardId');
    }
  }

  getStudent(user: any): void {
    if (user) {
      this.displayName = user.label === undefined ? user : user.label;
      return this.displayName;
    }
  }

  getStudents(): void {
    if (this.classAssessmentGradesFormGroup.value.schoolBoardId &&
      this.classAssessmentGradesFormGroup.value.classId &&
      this.classAssessmentGradesFormGroup.value.sectionId) {
      this.studentDatabaseService
        .studentNamesBaseOnAcademicSession(
          null,
          this.classAssessmentGradesFormGroup.value.schoolBoardId,
          this.classAssessmentGradesFormGroup.value.classId,
          this.classAssessmentGradesFormGroup.value.sectionId,
          null)
        .subscribe(res => {
          this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
        });
    }
  }

  onSelectSchoolBoard(event): void {
    this.classAssessmentGradesFormGroup.patchValue({
      classId: '',
      gradingTermId: '',
      sectionId: '',
      assessmentGroupId: '',
      assessmentCategoryId: '',
      assessmentParameterId: ''
    });
    this.resetRowsOnChange();
    this.getAvailableClasses(event.value);
    this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
    this.filterdStudents = [];
    this.getStudents();
  }


  onClassChange(classId): void {
    this.classAssessmentGradesFormGroup.patchValue({
      gradingTermId: '',
      sectionId: '',
      assessmentGroupId: '',
      assessmentCategoryId: '',
      assessmentParameterId: ''
    });

    this.resetRowsOnChange();
    this.getAvailableSections(this.classAssessmentGradesFormGroup.value.schoolBoardId, classId);
    // if (!this.classAssessmentGradesFormGroup.value.searchByName) {
    //   // this.classAssessmentGradesFormGroup.value.searchByName = 'assessment';
    //   // this.classAssessmentGradesFormGroup.controls['searchByName'].patchValue('assessment');
    // }
    this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
    this.filterdStudents = [];
    this.getStudents();
  }

  onSectionChange(sectionId, isDropdownChange?: boolean): void {

    this.resetRowsOnChange();
    if (isDropdownChange) {
      this.classAssessmentGradesFormGroup.patchValue({
        gradingTermId: '',
        assessmentGroupId: '',
        assessmentCategoryId: '',
        assessmentParameterId: ''
      });
      this.classAssessmentGradesFormGroup.controls['studentNames'].patchValue(null);
      this.filterdStudents = [];
      this.getGradingTerms(this.classAssessmentGradesFormGroup.value.classId, sectionId);
      this.getAssesmentGroups(this.classAssessmentGradesFormGroup.value.classId, sectionId);
    }
    else {
      const existingSectionId = this.classAssessmentGradesFormGroup.value.sectionId;
      if (existingSectionId !== sectionId) {
        this.classAssessmentGradesFormGroup.patchValue({
          gradingTermId: '',
        });
        this.getGradingTerms(this.classAssessmentGradesFormGroup.value.classId, sectionId);
        this.getAssesmentGroups(this.classAssessmentGradesFormGroup.value.classId, sectionId);
      }
      this.classAssessmentGradesFormGroup.controls['sectionId'].patchValue(sectionId);
    }
    this.getStudents();
  }

  onGradingTermChange(gradingTerm): void {
    this.classAssessmentGradesFormGroup.patchValue({
      assessmentGroupId: '',
      assessmentCategoryId: '',
      assessmentParameterId: ''
    });
    this.resetRowsOnChange();
    const classId = this.classAssessmentGradesFormGroup.value.classId;
    const sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
    this.getAssesmentGroups(classId, sectionId);

  }

  onSelectAssessmentGroup(assesmentGroupId): void {
    this.classAssessmentGradesFormGroup.patchValue({ assessmentCategoryId: '', assessmentParameterId: '' });
    this.getAssessmentCategory(assesmentGroupId);
    this.getAssessmentParams(null);
    this.resetRowsOnChange();
  }

  onSelectAssessmentCategory(assesmentCategoryId): void {
    this.classAssessmentGradesFormGroup.patchValue({ assessmentParameterId: '' });
    this.getAssessmentParams(assesmentCategoryId);
    this.resetRowsOnChange();
  }

  getGradingTerms(classId: any, sectionId: any): void {
    if (!classId || !sectionId) {
      return;
    }
    this._gradingTermConfigurationService.gradingTermsDropdownByClassSectionGet(classId, sectionId).subscribe(response => {
      if (response != null && response.length) {
        const gardingTermsData = [];
        response.forEach(element => {
          gardingTermsData.push({
            label: element.name,
            value: element.id
          });
        });
        this.gradingTerms = gardingTermsData;
      }
      else {
        this.gradingTerms = [];
      }
    });
  }

  getAssesmentGroups(classId, sectionId): void {
    if (!classId || !sectionId) {
      return;
    }
    this._assessmetParametersService.fetchClassAssesmentGroupDropDownList(classId, sectionId).subscribe(response => {
      if (response != null && response.length) {
        const tempAssessmentGroups = [];
        response.forEach(element => {
          tempAssessmentGroups.push({
            label: element.name,
            value: element.id
          });
        });
        this.assessmentGroupsList = tempAssessmentGroups;
      }
      else {
        this.assessmentGroupsList = [];
      }
    });
  }

  getAssessmentCategory(assessmentGroupId): void {
    const classId = this.classAssessmentGradesFormGroup.value.classId;
    const sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
    this._assessmetParametersService.fetchClassAssesmentCategoryDropDownList(classId, sectionId, assessmentGroupId).subscribe(response => {
      if (response != null && response.length) {
        const tempAssessmentCats = [];
        response.forEach(element => {
          tempAssessmentCats.push({
            label: element.name,
            value: element.id
          });
        });
        this.assessmentCategoriesList = tempAssessmentCats;
      }
      else {
        this.assessmentCategoriesList = [];
      }
    });
  }

  getAssessmentParams(assementCatgoeyId): void {
    this.assessmentParams = [];
    const classId = this.classAssessmentGradesFormGroup.value.classId;
    const sectionId = this.classAssessmentGradesFormGroup.value.sectionId;
    const assessmentGroupId = this.classAssessmentGradesFormGroup.value.assessmentGroupId;
    this._assessmetParametersService.fetchClassAssesmentParameterDropDownList(classId, sectionId,
      assessmentGroupId, assementCatgoeyId).subscribe(response => {
        if (response != null && response.length) {
          const tempAssessmentCats = [];
          response.forEach(element => {
            tempAssessmentCats.push({
              label: element.name,
              value: element.id
            });
          });
          this.assessmentParams = tempAssessmentCats;
        }
        else {
          this.assessmentParams = [];
        }
      });
  }

  getAssessmentConfigurationList(): void {
    this.dropdownChangeIndex = [];

    // this.isEditMode = (this.isEditMode || this.isNavFromReports === true) ? true : false;
    if (this.studentAssessmentDeatils && !this.isNavFromReports && !this.isEditMode) {
      this.studentAssessmentDeatils.rows = [];
    }

    this.isStudentSearch = false;
    this.classAssmentGroupsFormSubmitted = true;

    if (!this.classAssessmentGradesFormGroup.valid) {
      this.studentAssessmentDeatils.rows = [];
      this.isEditMode = false;
      return;
    }
    const sort = {
      sortBy: this.filterView.sortBy,
      sortOrder: this.filterView.sortOrder
    };

    if (this.studentData && this.isNavFromReports) {
      this.classAssessmentGradesFormGroup.controls['studentNames'].setValue(this.studentData.student.value);
      this.classAssessmentGradesFormGroup.patchValue(this.studentData);
    }

    this.filterView = this.classAssessmentGradesFormGroup.value;
    this.filterView.sortOrder = sort.sortOrder;
    this.filterView.sortBy = sort.sortBy;
    this.filterView.schoolAcademicSessionStudentId = this.classAssessmentGradesFormGroup.value.studentNames;
    this.isStudentSearch = false;
    this._studentAssessmentGradeService.fetchAssessmentGrades(this.filterView, this.isShowAll).subscribe(
      response => {
        if (response.gradeIndicatorList !== null) {
          this.setIndicators(response);
        }
        this.rows = response.studentAssesmentDetails;
        this.updateTableComponent();
        this.isSearchPerformed = true;
      });
  }

  setIndicators(response: any): void {
    this.gradeIndicatorList = [];
    this.testVariable += '-bar';
    this.testEmitter$.next(this.testVariable);
    if (response.classAndSections && this.isStaffLogin) {
      this.staffInfo = response.classAndSections;
      this.checkStaff();
    }
    response.gradeIndicatorList.forEach(gradeIndicator => {
      this.gradeIndicatorList.push({ 'value': gradeIndicator.id, 'label': gradeIndicator.name });
    });
  }

  clearSearchForm(): void {
    this.isSubcategoiriesAvailable = false;
    this.classAssmentGroupsFormSubmitted = false;
    this.classAssessmentGradesFormGroup.reset();
    this.availableClasses = [];
    this.availableSections = [];
    this.gradingTerms = [];
    this.assessmentGroupsList = ([]);
    this.assessmentCategoriesList = ([]);
    this.assessmentParams = ([]);
    this.filterdStudents = [];
    this.resetRowsOnChange();
  }

  resetRowsOnChange(): void {
    this.rows = [];
    this.tableSettings = {};
    this.studentAssessmentDeatils = {};
    // this.rows = [];
    this.isEditMode = false;
    this.isSearchPerformed = false;
    this.isSubcategoiriesAvailable = false;
  }

  selectedRows(event): void {
    this.selectedRowsData = event;
    this.setGradeForm = (this.setGradeForm && this.selectedRowsData.length > 0) ? this.setGradeForm : false;
  }

  onAdditionalButtonClick(event): void {
    switch (event) {
      case 'edit':
        this.isEditMode = true;
        this.dropdownChangeIndex = [];
        this.isStudentSearch ? this.setAssessmentData() : this.updateTableComponent();
        break;
      case 'show_all':
        this.isShowAll = true;
        this.getAssessmentConfigurationList();
        break;
      case 'show_empty':
        this.isShowAll = false;
        this.getAssessmentConfigurationList();
        break;
      case 'back':
        this.isEditMode = false;
        this.getAssessmentConfigurationList();
        break;
    }
  }

  updateTableComponent(): void {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'rollNo', header: 'Roll Number', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'assessmentGroupName', header: 'Assessment Group', sort: true },
      { field: 'assessmentCategoryName', header: 'Assessment Category', sort: true },
      { field: 'assessmentSubCategoryName', header: 'Assessment SubCategory', sort: true },
      { field: 'assessmentParameterName', header: 'Assessment Parameter', sort: true }
    ];
    if (!this.hideButtons) {
      if (this.isEditMode) {
        this.editButton = {
          name: 'Back',
          class: 'primary',
          clickAction: 'back'
        };
      }
      else {
        this.editButton = {
          name: 'Edit',
          class: 'primary',
          clickAction: 'edit'
        };
      }
    }
    if (this.rows != null) {
      this.availableAssessmentSubCategories = [];
      const group = this.fb.group({});
      this.rows.forEach(row => {
        if (row.studentAssessmentSubCategories != null) {
          this.isSubcategoiriesAvailable = true;

          row.studentAssessmentSubCategories.forEach(studentAssessmentSubCategory => {
            if (this.columns.map(column => column.field)
              .indexOf(studentAssessmentSubCategory.subCategoryName) === -1) {
              this.availableAssessmentSubCategories.push({
                name: studentAssessmentSubCategory.subCategoryName,
                options: this.gradeIndicatorList
              });
              group.addControl(studentAssessmentSubCategory.subCategoryName, new FormControl(''));
              let columnData;
              if (!this.isEditMode) {
                columnData = {
                  field: studentAssessmentSubCategory.subCategoryName,
                  header: studentAssessmentSubCategory.subCategoryName,
                  sort: false
                };
              }
              else {
                columnData = {
                  field: studentAssessmentSubCategory.subCategoryName,
                  header: studentAssessmentSubCategory.subCategoryName,
                  sort: false,
                  options: this.gradeIndicatorList,
                  // dropdownInputRequired: true
                  rowTempalteRequired: true

                };
              }
              this.columns.push(columnData);
            }
            if (studentAssessmentSubCategory.gradeConfigurationId !== null) {
              const gradeConfigValue = this.gradeIndicatorList.
                find(x => x.value === studentAssessmentSubCategory.gradeConfigurationId).label;
              row[studentAssessmentSubCategory.subCategoryName] = (!this.isEditMode) ? gradeConfigValue : studentAssessmentSubCategory.gradeConfigurationId;
            }
            else {
              row[studentAssessmentSubCategory.subCategoryName] = '';
            }

          });
        } else {
          if (row.gradeConfigurationId !== null) {
            const gradeConfigValue = this.gradeIndicatorList.
              find(x => x.value === row.gradeConfigurationId).label;
            row['grade'] = (!this.isEditMode) ? gradeConfigValue : row.gradeConfigurationId;
          }
        }
      });

      if (!this.isSubcategoiriesAvailable) {
        this.availableAssessmentSubCategories.push({
          name: 'Grade',
          options: this.gradeIndicatorList
        });
        group.addControl('Grade', new FormControl('', Validators.required));
        let columnData;
        if (!this.isEditMode) {
          columnData = {
            field: 'grade',
            header: 'Grade',
            sort: false
          };
        }
        else {
          columnData = {
            field: 'grade',
            header: 'Grade',
            sort: false,
            options: this.gradeIndicatorList,
            // dropdownInputRequired: true
            rowTempalteRequired: true
          };
        }
        this.columns.push(columnData);
      }
      this.updateAssesmentGradesFormGroup = group;
    }
    
    this.tableSettings = {
      model: this.filterView,
      rows: this.rows,
      columns: this.columns,
      visibleSelectAll: !this.hideButtons && this.isEditMode,
      isSelectRowRequired: !this.hideButtons && this.isEditMode,
      isMultiDeleteRequired: false,
      padding: true,

      headerOperations: {
        infoButton: {
          required: true,
          text: 'Class Assessment Grades'
        },
        additionalButtons: [
          this.editButton,
        ]
      }
    };
    if (this.hideButtons) {
      this.tableSettings.headerOperations.additionalButtons = [];
    }
    this.isSearchPerformed = (this.rows != null) ? false : true;
    setTimeout(() => {
      this.scrollIntoViewById('mat_divider');
    });
  }

  changeRowDropdown(data: any, rowIndex?: any, columnIndex?: any): void {
    this.classAssesmentGradesParamListViewModel = {};
    this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
    this.preparePostData(data);
    this._studentAssessmentGradeService.createClassAssessmentParameters(this.classAssesmentGradesParamListViewModel).subscribe(
      response => {
        this.dropdownChangeIndex['check' + rowIndex + '_' + columnIndex] = true;
        this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
        this.dropdownChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
        // this.getAssessmentConfigurationList();
        this.changeDetecor.detectChanges();
      },
      error => {
        this.dropdownChangeIndex['error' + rowIndex + '_' + columnIndex] = true;
        this.dropdownChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
        this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
        this.changeDetecor.detectChanges();
      }
    );
  }

  onDropDownChange(row: any, value: any, rowIndex: any, columnIndex: any): void {
    row['newValue'] = value;
    row[this.columns[columnIndex].field] = value;
    this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = true;
    this.changeRowDropdown(row, rowIndex, columnIndex);
  }

  updateAssessmentConfiguration(form: any): void {
    if (form === 'updateAssesmentGradesFormGroup' && this.updateAssesmentGradesFormGroup.invalid) {
      return;
    }

    this.classAssesmentGradesParamListViewModel = {};
    this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
    if (this.isStudentSearch) {
      if (!this.studentGradeAssessmentForm.valid) {
        return;
      }


      this.selectedRowsData.forEach(row => {
        this.preparePostData(row, this.studentGradeAssessmentForm.value);
      });
    } else {
      this.selectedRowsData.forEach(row => {
        this.preparePostData(row, this.updateAssesmentGradesFormGroup.value);
      });
    }

    if (this.classAssesmentGradesParamListViewModel && this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.length) {
      this._studentAssessmentGradeService.createClassAssessmentParameters(this.classAssesmentGradesParamListViewModel).subscribe(
        response => {
          this.setGradeForm = false;
          this.studentGradeAssessmentForm.reset();
          this.commonService.setOverlay(AppSettings.HIDE);
          this.changeDetecor.detectChanges();
          this.isEditMode = false;
          this.getAssessmentConfigurationList();
        }
      );
    } else {
      this.openSnackBar(AppSettings.SELECT_ASSESSMENT, true);
    }
  }

  setGrade(isShowGradeSetup: boolean): void {
    if (isShowGradeSetup) {
      this.commonService.setOverlay(AppSettings.SHOW);
    }

    else {
      this.commonService.setOverlay(AppSettings.HIDE);
    }
    this.setGradeForm = isShowGradeSetup;
  }

  preparePostData(data, massUpdateData?: any): void {
    const categoryUpdatedInfo = (!massUpdateData) ? data : massUpdateData;
    // this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel = [];
    if (this.isStudentSearch) {
      this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.push({
        gradeTermId: data.gradeTermId,
        schoolAcademicSessionStudentId: data.schoolAcademicSessionStudentId,
        assesmentSubCategoryId: (data.assessmentSubCategoryId) ? data.assessmentSubCategoryId : null,
        gradeConfigurationId: !massUpdateData ? data.newValue : categoryUpdatedInfo.studentGrade,
        classAssesmentParameterId: data.id,
        studentAssesmentId: data.studentAssessmentId
      });
    } else {
      this.classAssesmentGradesParamListViewModel.classAssesmentGradesParamViewModel.push({
        gradeTermId: data.gradingTermId,
        schoolAcademicSessionStudentId: data.schoolAcademicSessionStudentId,
        assesmentSubCategoryId: data.assessmentSubCategoryId ? data.assessmentSubCategoryId : null,
        gradeConfigurationId: (!massUpdateData) ? categoryUpdatedInfo.grade : categoryUpdatedInfo.Grade,
        classAssesmentParameterId: data.classAssessmentParameterId,
        studentAssesmentId: data.studentAssessmentId
      });
    }

  }

  getTableData(_event): void {
    this.filterView = _event;
    this.getAssessmentConfigurationList();
  }

  getStudentTableData(_event): void {
    this.filterView = _event;
    this.getAssessmentConfigurationList();
  }

  checkStaff(): boolean {
    if (this.isStaffLogin) {
      if (this.staffInfo.find(x => x.classId === this.classAssessmentGradesFormGroup.controls.classId.value
        && x.sectionId === this.classAssessmentGradesFormGroup.controls.sectionId.value && x.isClassTeacher === true) === undefined) {
        this.hideButtons = true;
        return;
      } else {
        this.hideButtons = false;
      }
    }

    if (!this.hideButtons) {
      if (this.isEditMode) {
        this.editButton = {
          name: 'Back',
          class: 'primary',
          clickAction: 'back'
        };
      }
      else {
        this.editButton = {
          name: 'Edit',
          class: 'primary',
          clickAction: 'edit'
        };
      }
    }
  }
  getSelectedStudent(value: any): void {
    if (value.sectionId) {
      this.onSectionChange(value.sectionId);
    }
  }

  setAssessmentData(): void {
    if (this.rows) {
      if (!this.hideButtons) {
        if (this.isEditMode) {
          this.editButton = {
            name: 'Back',
            class: 'primary',
            clickAction: 'back'
          };
        }
        else {
          this.editButton = {
            name: 'Edit',
            class: 'primary',
            clickAction: 'edit'
          };
        }
      }

      this.columns = [
        { field: 'assessmentGroup', header: 'Assessment Group', sort: true },
        { field: 'assessmentCategory', header: 'Assessment Category', sort: true },
        { field: 'assessmentParameter', header: 'Assessment Parameter', sort: true },
        { field: 'assessmentSubCategory', header: 'Assessment Subcategory', sort: true },
        {
          field: 'studentGrade', header: 'Student Grade', sort: this.isEditMode ? true : false,
          options: this.isEditMode ? this.gradeIndicatorList : null,
          // dropdownInputRequired: this.isEditMode ? true : false
          rowTempalteRequired: this.isEditMode ? true : false
        }
      ];
      this.studentAssessmentDeatils = {
        model: this.filterView,
        rows: this.rows,
        columns: this.columns,
        componentName: this.currentComponent,
        visibleSelectAll: !this.hideButtons && this.isEditMode,
        isSelectRowRequired: !this.hideButtons && this.isEditMode,
        isMultiDeleteRequired: false,
        padding: true,

        headerOperations: {
          additionalButtons: [
            this.editButton,
          ]
        }

        // rowGroupingColumns: ['assessmentGroup', 'assessmentCategory', 'assessmentParameter']
      };

      const control = <FormArray>this.studentGradeForm.controls['grades'];
      for (let i = 0; i < this.rows.length; i++) {
        control.push(this.studentGrades(this.rows[i].studentGrade));
      }
    }
    if (this.isNavFromReports) {
      this.studentAssessmentDeatils.headerOperations.additionalButtons = [];
    }

    this.rows.forEach(row => {
      if (row.gradeConfigurationId !== null) {
        const gradeConfigValue = this.gradeIndicatorList.
          find(x => x.value === row.gradeConfigurationId).label;
        row['studentGrade'] = (!this.isEditMode) ? gradeConfigValue : row.gradeConfigurationId;
      }
    });

    setTimeout(() => {
      this.scrollIntoViewById('mat_divider');
    });
  }

  studentGrades(grade: any): FormGroup {
    return this.fb.group({
      studentGrade: new FormControl(grade, [Validators.required])
    });
  }

  searchByOption(event: any): void {
    this.tableSettings = {};
    this.studentAssessmentDeatils = {};
    this.rows = [];
  }

  // updateStudentScore(data: any, index: any): void {
  //   if (data.valid && data.value.marks != null && this.rows[index].marks !== +data.value.marks) {
  //     this.marksIndex.push(data);
  //   }
  // }

  // check(index: any): any {
  //   const t = this.marksIndex.find(x => x === index);
  //   return t != null ? true : false;
  // }
}
