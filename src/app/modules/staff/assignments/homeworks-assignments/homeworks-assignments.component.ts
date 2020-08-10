import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { ClassHomeWorkService } from 'app/service/assignments/class-home-work.service';
import { HomeWorkFilterViewModel } from '../model/home-work-filter-view-model';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { ClassHomeWorkModel } from '../model/class-home-work-model';
import { FileBase64Model } from '../model/file-base64-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { CommonService } from 'app/service/common.service';
import { ClassHomeworkIdModel } from '../model/class-homework-id-model';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeworks-assignments',
  templateUrl: './homeworks-assignments.component.html',
  styleUrls: ['./homeworks-assignments.component.scss'],
  providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, ClassHomeWorkService, GardeTermConfigurationService, StoreService]
})
export class HomeworksAssignmentsComponent extends CommonComponent implements OnInit {
  @ViewChild('stepper') stepper;
  @ViewChild('viewData') viewTemplate: TemplateRef<any>;
  tableSettings: {};
  filterViewModel: HomeWorkFilterViewModel;
  columns: any[];
  rows: Array<any>;
  totalRowsCount: number;
  pageCnt: number;
  preSelectIds: Array<string> = [];
  classSectionForm: FormGroup;
  typeCourseForm: FormGroup;
  detailsForm: FormGroup;
  dateForm: FormGroup;
  testInformation: FormGroup;
  currentComponent = 'HomeworksAssignmentsComponent';
  isSchoolhasBoards = true;
  schoolBoardsList: any[] = [];
  classesList: any[] = [];
  sectionsList: any[] = [];
  coursesList: any[] = [];
  typesList: any[] = [];
  testTypesList: any[] = [];
  gradingTermsList: any[] = [];
  filterRowData: any[] = [];
  validate = true;
  closeForm = false;
  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };
  currentDate = this.getDefaultDate();
  classHomeWork: ClassHomeWorkModel;
  fileBaseModel: FileBase64Model;
  items = [];
  classSectionIds = [];
  homeWorkData: any;
  viewDialog: any;
  selectedItems: any;
  updateId: any;
  attachmentUrl: any;
  interactedStepperIndex: Number = 0;
  testScheduleId: any;
  onView = false;
  classSectionsFromApi: any[] = [];
  academicSession: any;
  afterLoadItems = true;
  isSingleClick = true;
  constructor(
    private classesConfigService: ClassesConfigService,
    private _formBuilder: FormBuilder,
    private gradeSetupService: GradeSetupService,
    private classHomeWorkService: ClassHomeWorkService,
    private gradeTermConfigurationService: GardeTermConfigurationService,
    private router: Router,
    public classTimetableService: ClassTimetableService,
    public typeService: TypeService,
    public changeDetector: ChangeDetectorRef,
    public dialogRef: MatDialog,
    public commonService: CommonService,
    public storeService: StoreService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
    this.getSchoolBoardsList();
    this.getTypes();
    this.getTestTypes();
  }
  onSelectChange(event): void {
    this.classSectionIds = [];
    if (event) {
      event.forEach(element => {
        this.classSectionIds.push(element.schoolAcademicClassSectionId);
      });
      if (this.classSectionIds.toString() !== this.classSectionsFromApi.toString()) {
        this.testInformation.controls.gradeTermId.setValue(null);
      } else {
        this.classSectionsFromApi = [];
      }
      this.getGradingTerms();
    }
  }
  initializeModel(): void {
    this.fileBaseModel = {
      fileNameWithExtension: null,
      value: null
    };
    this.classHomeWork = {
      boardId: null,
      schoolAcademicSessionClassSectionIds: [null],
      typeId: 0,
      courseId: 0,
      homeworkName: null,
      homeworkDescription: null,
      file: this.fileBaseModel,
      isPostToCalendar: false,
      issueDate: new Date(),
      dueDate: new Date(),
      isGraded: false,
      testTypeId: 0,
      gradeTermId: 0,
      maxMarks: 0
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
  setColumnHeaders(): void {
    this.columns = [
      { field: 'boardName', header: 'Board', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionname', header: 'Section', sort: false },
      { field: 'courseName', header: 'Course', sort: false },
      { field: 'typeName', header: 'Type', sort: false },
      { field: 'homeWorkName', header: 'Name', sort: false },
      { field: 'issueDate', header: 'Issue Date', sort: false },
      { field: 'dueDate', header: 'Due Date', sort: false },
      { field: 'testInformation', header: 'Test Information', sort: false, rowTempalteRequired: true },
      { field: 'actions', header: 'Action', sort: false }

    ];
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Homework/Assignments',
      componentName: this.currentComponent,
      model: this.filterViewModel,
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
      } else {
        this.isSchoolhasBoards = false;
        this.classSectionForm.get('boardId').clearValidators();
        this.classSectionForm.get('boardId').updateValueAndValidity();
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  onCancel(): void {
    this.stepper.reset();
    this.updateId = null;
    this.closeForm = true;
    this.onView = false;
    this.interactedStepperIndex = 0;
  }

  onSelectSchoolBoard(schoolBoard: any, update = false): void {
    this.classesList = [];
    this.sectionsList = [];
    this.items = [];
    if (!update) {
      this.classSectionForm.controls.classId.setValue(null);
      this.classSectionForm.controls.sectionId.setValue(null);
      this.testInformation.controls.gradeTermId.setValue(null);
    }
    this.gradeSetupService.schoolAcademicClasses(schoolBoard).subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
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
  // on selection of class
  onSelectClass(update = false): void {
    this.getCourseList();
    this.sectionsList = [];
    this.items = [];
    this.classSectionForm.controls.sectionId.setValue(null);
    if (!update) {
      this.typeCourseForm.controls.courseId.setValue(null);
      this.testInformation.controls.gradeTermId.setValue(null);
    }
    this.classHomeWorkService.getAllDetails(this.classSectionForm.value.boardId, this.classSectionForm.value.classId)
      .subscribe(res => {
        this.items = res.academicSectionsLists;
        this.items.forEach(element => {
          element.label = element.sectionName;
          element.value = element.schoolAcademicClassSectionId;
        });
        if (this.classSectionIds.length && update) {
          this.selectedItems = this.items.filter(e => this.classSectionIds.indexOf(e.schoolAcademicClassSectionId) !== -1);
          this.classSectionForm.controls.sectionId.setValue(this.selectedItems);
          this.getGradingTerms();
          this.afterLoadItems = true;
        }
      });
  }
  ngOnInit(): void {
    this.academicSession = JSON.parse(localStorage.getItem('_as'));
    this.setFormData();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      this.getAllFilteredClasses();
    } else {
      this.getAllFilteredClasses();
    }
  }
  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAllFilteredClasses();
  }
  setFormData(): void {
    this.classSectionForm = this._formBuilder.group({
      boardId: [null, [Validators.required, Validators.maxLength(45)]],
      classId: [null, [Validators.required, Validators.maxLength(45)]],
      sectionId: [null, [Validators.required, Validators.maxLength(45)]],
    });

    this.typeCourseForm = this._formBuilder.group({
      typeId: [null, [Validators.required, Validators.maxLength(45)]],
      courseId: [null, [Validators.required, Validators.maxLength(45)]]
    });

    this.detailsForm = this._formBuilder.group({
      homeworkName: [null, [Validators.required, Validators.maxLength(45)]],
      file: [null],
      homeworkDescription: [null, [Validators.maxLength(135)]],
      isPostToCalendar: [false, [Validators.required]]
    });

    this.dateForm = this._formBuilder.group({
      issueDate: [this.getDefaultDate(), [Validators.required, Validators.maxLength(45)]],
      dueDate: [null],
    });
    this.testInformation = this._formBuilder.group({
      isGraded: [false, [Validators.required, Validators.maxLength(45)]],
      testTypeId: [null],
      gradeTermId: [null],
      maxMarks: [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.max(9999)]]
    });
    this.testInformation.controls.isGraded.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      if (val) {
        this.testInformation.controls.testTypeId.setValidators([Validators.required]);
        this.testInformation.controls.gradeTermId.setValidators([Validators.required]);
        this.testInformation.controls.maxMarks.setValidators([Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(9999)]);
        this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
      } else {
        this.testInformation.controls.isGraded.patchValue(false);
        this.testInformation.controls.testTypeId.clearValidators();
        this.testInformation.controls.gradeTermId.clearValidators();
        this.testInformation.controls.maxMarks.clearValidators();
        this.testInformation.patchValue({
          testTypeId: null,
          gradeTermId: null,
          maxMarks: null
        });
      }
      this.testInformation.updateValueAndValidity();
    });
  }
  public formControlIsValid(formGroup, formCtrl): boolean {
    if (formGroup.controls.hasOwnProperty(formCtrl)) {
      if (!formGroup.controls[formCtrl].touched) {
        return true;
      }
      return formGroup.controls[formCtrl].valid;
    }
    return false;
  }
  openForm(): void {
    this.setFormData();
    this.classesList = [];
    this.sectionsList = [];
    this.items = [];
    this.onView = false;
    this.closeForm = false;
  }
  getTypes(): void {
    this.typeService.typesByTypeCategoryCode('HW').subscribe(res => this.typesList = res.types);
  }
  getTestTypes(): void {
    this.gradeTermConfigurationService.fetchTestTypes()
      .subscribe(res => this.testTypesList = res.listViews);
  }
  getGradingTerms(): void {
    const sectionsIds = [];
    this.items.forEach(e => {
      if (this.classSectionIds.indexOf(e.schoolAcademicClassSectionId) > -1) {
        sectionsIds.push(e.sectionId);
      }
    });
    if (this.classSectionForm.value.classId && sectionsIds.length) {
      // tslint:disable-next-line: max-line-length
      this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.classSectionForm.value.classId, sectionsIds, this.classSectionForm.value.boardId)
        .subscribe(res => this.gradingTermsList = res.listViews);
    }

  }
  getCourseList(): void {
    this.coursesList = [];
    this.classTimetableService.classTimetableCoursesGet(this.classSectionForm.value.boardId, this.classSectionForm.value.classId).subscribe(res => {
      if (res.commonViewModel != null) {
        this.coursesList = [];
        res.commonViewModel.map(x => {
          this.coursesList.push({ value: x.id, label: x.name });
        });
      }
    });
  }
  getAllFilteredClasses(): void {
    this.classHomeWorkService.getAllHomeworks(this.filterViewModel.boardIds, this.filterViewModel.classIds,
      this.filterViewModel.sectionIds, this.filterViewModel.typeIds,
      this.filterViewModel.courseIds, this.filterViewModel.homeWorkNames,
      this.filterViewModel.issueDateBegin, this.filterViewModel.issueDateEnd,
      this.filterViewModel.dueDateBegin, this.filterViewModel.dueDateEnd,
      this.filterViewModel.termIds, this.filterViewModel.testTypeIds,
      this.filterViewModel.sortOrder, this.filterViewModel.sortBy, this.filterViewModel.pageNumber, this.filterViewModel.pageSize)
      .subscribe(res => {
        this.setClassResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  setClassResult(data): any {
    if (!data.getClassHomeWorksModel) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.getClassHomeWorksModel.list;
      this.totalRowsCount = data.getClassHomeWorksModel.totalItems;
      this.pageCnt = data.getClassHomeWorksModel.totalPages;
      this.preSelectIds = [];
    }
    if (data.getClassHomeWorksModel) {
      this.filterViewModel.pageNumber = data.getClassHomeWorksModel.pageNumber;
    }
    this.rows.forEach(e => {
      e.issueDate = e.issueDate ? this.commonService.customDateFormat(e.issueDate.toString(), this.getSchoolDateFormat()).date : null;
      e.dueDate = e.dueDate ? this.commonService.customDateFormat(e.dueDate.toString(), this.getSchoolDateFormat()).date : null;

    });
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Homework/Assignments',
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Homeworks/Assignments'
        },
        addingForm: {
          required: true,
          btnName: 'Add'
        }
      },
      rowGroupingColumns: ['className', 'boardName', 'typeName', 'sectionname', 'courseName']
    };

    this.filterRowData = [];
    this.filterRowData = this.rows;
    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.className === element.className && value.homeWorkName === element.homeWorkName;
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;
    // apply edit and delete
    this.updateActions();
  }

  updateActions(): void {
    this.filterRowData.forEach(element => {
      element.operations = [
        // {
        //   name: AppSettings.EDIT_OPERATION,
        //   icon: AppSettings.EDIT,
        //   operationName: AppSettings.EDIT
        // }, 
        {
          name: AppSettings.DETAILS_DISPLAY,
          icon: AppSettings.DETAILS_ICON,
          operationName: AppSettings.DETAILS
        },
        {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE,
          operationName: AppSettings.DELETE
        },
      ];
      if (element.testScheduleId !== null) {
        element.operations.push(
          {
            name: AppSettings.MARKS,
            icon: AppSettings.MARKS_ICON,
            operationName: AppSettings.MARKS
          });
      }
    });
  }
  onSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
  }
  selectedRows(event: any): void {

  }
  getSchoolDate(date): any {
    return date ? this.commonService.customDateFormat(date.toString(), this.getSchoolDateFormat()).date : null;
  }
  imgChanged(files, logo = false): void {
    if (this.checkFileSize(files[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    reader.onload = (_event) => {
      that.attachmentUrl = null;
      that.detailsForm.controls.file.setValue({ fileNameWithExtension: files[0].name, value: (<string>reader.result).split(',')[1] });
      that.changeDetector.detectChanges();
    };
  }
  clearImages(): void {
    this.detailsForm.controls.file.setValue(null);
  }
  submitHomeWork(): void {
    this.classHomeWork = {};
    this.classHomeWork.boardId = this.classSectionForm.value.boardId;
    this.classHomeWork.schoolAcademicSessionClassSectionIds = this.classSectionIds;
    Object.assign(this.classHomeWork, this.typeCourseForm.value, this.detailsForm.value, this.dateForm.value, this.testInformation.value);
    if (this.updateId) {
      this.classHomeWork.id = this.updateId;
      this.classHomeWorkService.updateHomework(this.classHomeWork)
        .subscribe((res: any) => this.setHomeWorkdata(res), error => {
          this.errorResponse(error);
        });
    } else {
      if (this.isSingleClick){
        this.isSingleClick = false;
        this.classHomeWorkService.postHomework(this.classHomeWork)
          .subscribe((res: any) => this.setHomeWorkdata(res), error => {
            this.errorResponse(error);
          });
          setTimeout(() => {
            this.isSingleClick = true;
          }, 1000);
      }
    }
  }
  // Actions Performing on the row
  actions(operationData: any): void {
    this.classSectionsFromApi = [];
    if (operationData.operation === AppSettings.DETAILS.toLowerCase()) {
      this.onView = true;
      this.classHomeWorkService.getByHomeworks(operationData.clickedRow.id)
        .subscribe(res => this.viewHomeWorkDetails(res));
    } else if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.afterLoadItems = false;
      this.updateId = operationData.clickedRow.id;
      this.classHomeWorkService.getByHomeworks(operationData.clickedRow.id)
        .subscribe(res => this.getHomeWorkDetails(res));
    } else if (operationData.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.classHomeWorkService.deleteHomework(operationData.clickedRow.id)
            .subscribe(res => this.setHomeWorkdata(res), error => this.errorResponse(error));
        }
        if (action === AppSettings.NO) {
          this.dialogRef.closeAll();
        }
      });
    }
    else if (operationData.operation === AppSettings.MARKS.toLowerCase()) {
      this.router.navigate([RouteConfig.Home_Work_Test_Schedule + '/' + operationData.clickedRow.testScheduleId, { operation: AppSettings.HOMEWORK }]);
    }
  }
  viewHomeWorkDetails(res): void {
    this.homeWorkData = res.getClassHomeworkModel;
    if (this.homeWorkData.attachment && this.homeWorkData.attachment.fileName) {
      this.homeWorkData.attachment.attachmentUrl = this.storeService.getFilePath(this.homeWorkData.attachment.fileName);
    }
    this.scrollIntoView('app-table');
    this.closeForm = false;
  }
  getHomeWorkDetails(res): void {
    const data = res.getClassHomeworkModel;
    this.onSelectSchoolBoard(data.boardId, true);
    const formNames = ['classSectionForm', 'typeCourseForm', 'detailsForm', 'dateForm', 'testInformation'];
    for (let i = 0; i < formNames.length; i++) {
      Object.keys(this[formNames[i]]['controls']).forEach((key) => {
        if (typeof (data[key]) === 'boolean') {
          this[formNames[i]]['controls'][key].setValue(data[key]);
        } else {
          this[formNames[i]]['controls'][key].setValue(data[key] ? data[key] : null);
        }
      });
    }
    if (data.classSections && data.classSections[0].classId) {
      this.classSectionForm.controls.classId.setValue(data.classSections[0].classId);
    }
    this.classSectionIds = data.schoolAcademicSessionClassSectionId;
    this.classSectionsFromApi = this.classSectionIds;
    this.onSelectClass(true);
    this.onView = false;
    this.closeForm = false;
    if (data.attachment && data.attachment.fileName) {
      this.attachmentUrl = this.storeService.getFilePath(data.attachment.fileName);
      this.storeService.storeFileEncryptByFileNameGet(data.attachment.fileName)
        .subscribe(result => {
          if (result) {
            this.detailsForm.controls.file.setValue({ fileNameWithExtension: result.fileNameWithExtension, value: result.value });
            this.changeDetector.detectChanges();
          }
        });
    }
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
    this.changeDetector.markForCheck();
    this.changeDetector.detectChanges();
  }
  openFile(base64): void {
    window.open(base64, '_blank');
  }
  closeView(): void {
    this.closeForm = true;
    this.onView = false;
    this.scrollIntoView('app-table');
  }
  setHomeWorkdata(res): void {
    this.updateId = null;
    this.onCancel();

    this.getAllFilteredClasses();
    this.openSnackBar(res.messages.ResultMessage);
  }
  getNameBasedOnValue(name, value): string {
    if (value === '' || value === 0) {
      return '';
    }
    let x;
    switch (name) {
      case 'board':
        return (x = this.schoolBoardsList.filter(element => element.value === value)).length ? x[0].label : '';
      case 'class':
        return (x = this.classesList.filter(element => element.value === value)).length ? x[0].label : '';
      case 'sections':
        return (x = this.sectionsList.filter(element => element.id === value)).length ? x[0].name : '';
      case 'type':
        return (x = this.typesList.filter(element => element.id === value)).length > 0 ? x[0].name : '';
      case 'testType':
        return (x = this.testTypesList.filter(element => element.id === value)).length ? x[0].name : '';
      case 'gradingTerm':
        return (x = this.gradingTermsList.filter(element => element.id === value)).length ? x[0].name : '';
      case 'course':
        return (x = this.coursesList.filter(element => element.value === value)).length ? x[0].label : '';
      default: break;
    }
  }
  onChnageGraded(e): void {
    if (!e.value) {
      return;
    }
    Object.values(this.testInformation.controls).forEach(control => {
      control.markAsUntouched();
    });
  }
}
