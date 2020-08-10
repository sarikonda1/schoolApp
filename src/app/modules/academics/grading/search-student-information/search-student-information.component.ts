import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { CommonService } from 'app/service/common.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { Router } from '@angular/router';
import { GradeReportService } from 'app/service/report-card-service/grade-report.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { StoreService } from 'app/service/file-management/store.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StudentCustomFieldsView } from 'app/models/grading/student-custom-fields-view';
import { PrintTemplateCustomFieldView } from 'app/models/grading/print-template-custom-field-view';

@Component({
  selector: 'app-search-student-information',
  templateUrl: './search-student-information.component.html',
  styleUrls: ['./search-student-information.component.scss'],
  providers: [GradeSetupService, ClassesConfigService, GardeTermConfigurationService, GradeReportService, StudentDBService, StoreService]

})
export class SearchStudentInformationComponent extends CommonComponent implements OnInit {
  @ViewChild('isUpdate') customTemplates: TemplateRef<any>;
  @ViewChild('appForm') aForm;
  currentComponent = 'SearchStudentInformationComponent';
  studentInformationSearchForm: FormGroup;
  isSchoolhasBoards = true;
  schoolBoardsList: any[] = [];
  classesList: any[] = [];
  gradingTermsList: any[] = [];
  tableSettings = {};
  columns: any[];
  operations: any[];
  reportCardSearchViewModel: any;
  schoolBoards: any[] = [];
  availableSections: any[] = [];
  reportCardDetails: any;
  validate = true;
  validateFeilds = true;
  operationsForSummary: any[] = [];
  isEditMode: boolean;
  valuesIndex: any[] = [];
  updateStudent = false;
  rows: any[] = [];
  totalItems: any;
  editButton = {};
  additionalButton: any;
  additionalButton1: any;
  studentValuesForm: FormGroup;
  showAllData: any;
  details: any;
  studentCustomFieldsView: StudentCustomFieldsView;
  printTemplateCustomFieldView: PrintTemplateCustomFieldView;
  studentIndex: any;
  filterRowData: any = [];
  printTemplate: Array<string> = [];
  pageCnt: any;
  schoolAcademicSessionStudentId: any;
  dataSet: any;
  updateForm: FormGroup;
  isValid: boolean;
  validateForm: boolean;
  closeAddPanel: boolean;
  filterdata: any[] = [];
  HttpStatus: any;
  showCustomCard = true;
  customCardDetails: { title: string, message: string } = { title: 'Student Additional Information', message: 'Search Student Additional Information' };
  customeReportFeildsList: any[] = [];
  inputChangeIndex: any;
  customForm: FormGroup;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private gradeSetupService: GradeSetupService,
    private gradeTermConfigurationService: GardeTermConfigurationService,
    private studentDbService: StudentDBService,
    private cd: ChangeDetectorRef,
    private classService: ClassesConfigService,
    public dialogRef: MatDialog,
    public commonService: CommonService,
    public gradeReportService: GradeReportService,
    public snackBar: MatSnackBar,
    public storeService: StoreService,
    public dialog: MatDialog
    ) {
    super();
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.inputChangeIndex = [];

    this.HttpStatus = require('http-status-codes');
    this.studentCustomFieldsView = {
      schoolAcademicSessionStudentId: 0,
      gradingTermId: 0,

      printTemplateCustomFieldView: [{
        printTemplateCustomFieldId: '',
        value: '',
        id: '',
      }]
    };

    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'rollNumber', header: 'Roll Number', sort: true },
      { field: 'gradingTermName', header: 'Grading Term', sort: true },
      { field: 'reportCardItemName', header: 'Report Card Item Name', sort: true },
      { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false },
      { field: 'actions', header: 'Actions ', sort: true }
    ];
    // this.updateForm = new FormGroup({
    //   reportCardItemValue0: new FormControl('', [Validators.pattern(Pattern.NUMBER_WITHOPTIONAL_DECIMAL_PATTERN)]),
    //   reportCardItemValue1: new FormControl('', [Validators.pattern(Pattern.NUMBER_WITHOPTIONAL_DECIMAL_PATTERN)]),
    //   reportCardItemValue2: new FormControl('', [Validators.pattern(Pattern.ALPHABETS_WITHOUT_STARTING_SPACES), Validators.max(360)]),
    //   printTemplateFieldId0: new FormControl(''),
    //   printTemplateFieldId1: new FormControl(''),
    //   printTemplateFieldId2: new FormControl(''),
    //   schoolAcademicSessionStudentId: new FormControl(''),
    //   studentAdditionalInfoId0: new FormControl(''),
    //   studentAdditionalInfoId1: new FormControl(''),
    //   studentAdditionalInfoId2: new FormControl(''),
    //   gradingTermId: new FormControl(''),

    // });
    this.studentValuesForm = new FormGroup({
      values: new FormControl('', [Validators.pattern(Pattern.ALPHANUMERIC), Validators.max(22)])
    });
    this.initializeTableDataSettings();
    this.initializeForm();
    this.initializeSearchViewModel();
    this.initializeTableSettings();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      // tslint:disable-next-line: no-shadowed-variable
      const modelTableComponent = this.getModelComponent(this.currentComponent);
      this.reportCardSearchViewModel = modelTableComponent;
      this.studentInformationSearchForm.patchValue(modelTableComponent);
      this.onSelectSchoolBoard(this.studentInformationSearchForm.value.boardId, true);
      this.getAvailableSections(this.studentInformationSearchForm.value.boardId, this.studentInformationSearchForm.value.classId);
      this.getGradingTerms(true);
      this.searchReportCards();
    }
    this.getSchoolBoardsList();
  }
  initializeTableSettings(): void {
    if (this.isEditMode) {
      this.columns = [
        { field: 'studentName', header: 'Student Name', sort: false },
        { field: 'rollNumber', header: 'Roll Number', sort: false },
        { field: 'reportCardItemName', header: 'Report Card Item Name', sort: false },
        { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false, rowTempalteRequired: true },
      ];
      this.tableSettings = {
        model: this.reportCardSearchViewModel,
        rows: this.rows,
        columns: this.columns,
        // padding: true,
        componentName: this.currentComponent,
        tablename: 'Student Additional Information',
        isMultiDeleteRequired: false,
        pageCnt: this.pageCnt,
        filtersList: [],
        headerOperations: {
          additionalButtons: [
            this.editButton,
          ]
        },
        rowGroupingColumns: ['studentName', 'rollNumber'],
      };
    }
    else {
      this.columns = [
        { field: 'studentName', header: 'Student Name', sort: false },
        { field: 'rollNumber', header: 'Roll Number', sort: true },
        { field: 'reportCardItemName', header: 'Report Card Item Name', sort: true },
        { field: 'reportCardItemValue', header: 'Report Card Item Value', sort: false },
        { field: 'actions', header: 'Actions ', sort: false }
      ];
      this.settingsData();
    }



  }
  settingsData(): void {
    this.tableSettings = {
      model: this.reportCardSearchViewModel,
      rows: this.rows,
      columns: this.columns,
      // padding: true,
      componentName: this.currentComponent,
      tablename: 'Student Additional Information',
      isMultiDeleteRequired: false,
      pageCnt: this.pageCnt,
      filtersList: this.filterdata,
      headerOperations: {
        additionalButtons: [
          this.editButton,
        ]
      },
      rowGroupingColumns: ['studentName', 'rollNumber'],
    };
  }
  initializeForm(): void {
    this.studentInformationSearchForm = new FormGroup({
      boardId: new FormControl(null, Validators.required),
      classId: new FormControl(null, Validators.required),
      sectionId: new FormControl(null, Validators.required),
      gradingTermId: new FormControl(null, Validators.required)
    });
  }


  initializeSearchViewModel(): void {
    this.reportCardSearchViewModel = {
      schoolAcademicSessionStudentId: null,
      board: [],
      studentName: [],
      gradingTermId: [],
      gradingterm: null,
      reportcardstatus: [],
      admissionNumbers: null,
      rollNumbers: [],
      classIds: [],
      sectionIds: [],
      studentIds: [],
      reportCardItemName: [],
      reportCardItemValue: [],
      sortOrder: 0,
      sortBy: null,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }
  initializeTableDataSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Student Additional Information',
      isPaginationRequired: true,
      componentName: this.currentComponent,
      model: this.reportCardSearchViewModel
    };
  }

  updateStudentData(row: any, data: any, rowIndex: any, columnIndex: any): void {
    this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = true;
    this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
    this.updateStudentCustomFeilds(row, data, rowIndex, columnIndex);
  }

  updateStudentCustomFeilds(row: any, data: FormGroup, rowIndex: any, columnIndex: any): void {
    if (data.invalid) {
      return;
    } else {
      const formValue = data.value;
      this.studentCustomFieldsView.printTemplateCustomFieldView = [];
      Object.keys(formValue).forEach((key, index) => {
        const customFeilds = row.reportPrintTemplateName.find(e => e.code === formValue[key]);
        if (customFeilds) {
          this.printTemplateCustomFieldView = {
            printTemplateCustomFieldId: customFeilds.printTemplateFieldId,
            value: formValue['reportCardItemValue'],
            id: customFeilds.studentAdditionalInfoId,
          };
          this.studentCustomFieldsView.printTemplateCustomFieldView.push(this.printTemplateCustomFieldView);
        }
      });

      this.studentCustomFieldsView.gradingTermId = this.studentInformationSearchForm.controls['gradingTermId'].value;
      this.studentCustomFieldsView.schoolAcademicSessionStudentId = formValue['schoolAcademicSessionStudentId'];
      this.studentIndex = rowIndex;
      this.gradeReportService.studentReportsStudentCustomDetailsPut(this.studentCustomFieldsView).subscribe(
        response => {
          if (this.rows[rowIndex].reportCardItemValue !== 0 && this.rows[rowIndex].reportCardItemValue !== '') {
            this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = true;
            this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
            this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
          } else {
            this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
            this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
            this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = false;
          }
          this.cd.detectChanges();
        },
        error => {
          this.inputChangeIndex['error' + rowIndex + '_' + columnIndex] = true;
          this.inputChangeIndex['check' + rowIndex + '_' + columnIndex] = false;
          this.inputChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = false;
          this.cd.detectChanges();
        }
      );
    }
    // }
  }

  check(index: any): any {
    const t = this.valuesIndex.find(x => x === index);
    return t != null ? true : false;
  }
  studentvalues(data: any): any {
    this.studentIndex = -1;
    if (this.rows[data].reportCardItemValue !== 0 && this.rows[data].reportCardItemValue !== '') {
      this.valuesIndex.push(data);
      this.spinnerLoad(-1);
    }
  }
  spinnerLoad(index: any): any {
    return index === this.studentIndex;
  }

  studentReportValues(schoolAcademicSessionStudentId: any, reportCardItemName: any, values = 0, validators: any, rowElement: any): FormGroup {
    return this._fb.group({
      reportCardItemValue: new FormControl('', Validators.maxLength(validators.maxlength)),
      schoolAcademicSessionStudentId: [schoolAcademicSessionStudentId],
      reportItem: [reportCardItemName],
      iseditable: false,
      inputType: validators.inputtype,
      code: rowElement.code
    });
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
        if (!this.studentInformationSearchForm.value.boardId) {
          this.studentInformationSearchForm.controls.boardId.setValue(this.schoolBoardsList[0].value);
          this.onSelectSchoolBoard(this.schoolBoardsList[0].value);
        }
      } else {
        this.isSchoolhasBoards = false;
        this.schoolBoardsList = [];
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  onSelectSchoolBoard(schoolBoard: any, onManualChange = false): void {
    if (!onManualChange) {
      this.onClear(true);
    }
    if (!schoolBoard) {
      return;
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
  onClear(onManualChange = false): void {
    this.classesList = [];
    this.availableSections = [];
    this.gradingTermsList = [];
    this.studentInformationSearchForm.controls.classId.setValue(null);
    this.studentInformationSearchForm.controls.sectionId.setValue(null);
    this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
    if (!onManualChange) {
      this.showCustomCard = true;
      this.setModelDataTableComponent(this.currentComponent, null);
    }
  }
  onClassChange(classId): void {
    this.availableSections = [];
    this.gradingTermsList = [];
    this.studentInformationSearchForm.controls.sectionId.setValue(null);
    this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
    if (classId) {
      this.getAvailableSections(this.studentInformationSearchForm.value.boardId, classId);
    }
    else {
      this.availableSections = [];
    }
  }
  getGradingTerms(onManualChange = false): void {
    if (!onManualChange) {
      this.gradingTermsList = [];
      this.studentInformationSearchForm.controls.gradingTermId.setValue(null);
    }
    if (this.studentInformationSearchForm.value.sectionId) {
      // tslint:disable-next-line: max-line-length
      this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.studentInformationSearchForm.value.classId, [this.studentInformationSearchForm.value.sectionId], this.studentInformationSearchForm.value.boardId)
        .subscribe(res => this.gradingTermsList = res.listViews);
    }
  }
  getTableData(_event): void {
    this.reportCardSearchViewModel = _event;
    this.searchReportCards();
  }


  searchReportCards(): void {
    if (this.studentInformationSearchForm.valid) {
      Object.assign(this.reportCardSearchViewModel, this.studentInformationSearchForm.value);
      this.setModelDataTableComponent(this.currentComponent, this.reportCardSearchViewModel);
      this.gradeReportService.studentReportsStudentAdditionalInformationGet(
        this.reportCardSearchViewModel.schoolAcademicSessionStudentId,
        this.reportCardSearchViewModel.boardId,
        this.reportCardSearchViewModel.studentName,
        this.reportCardSearchViewModel.gradingTermId,
        this.reportCardSearchViewModel.gradingterm,
        this.reportCardSearchViewModel.reportcardstatus,
        this.reportCardSearchViewModel.admissionNumbers,
        this.reportCardSearchViewModel.rollNumbers,
        this.reportCardSearchViewModel.classId,
        this.reportCardSearchViewModel.sectionId,
        this.reportCardSearchViewModel.studentIds,
        this.reportCardSearchViewModel.reportCardItemName,
        this.reportCardSearchViewModel.reportCardItemValue,
        this.reportCardSearchViewModel.sortOrder,
        this.reportCardSearchViewModel.sortBy,
        this.reportCardSearchViewModel.pageNumber,
        this.reportCardSearchViewModel.pageSize)
        .subscribe(res => this.setReportCardDetails(res), err => this.errorResponse(err));
    }
  }

  setReportCardDetails(data): void {
    this.showCustomCard = false;
    if (data.studentDataView.list && data.studentDataView.list.length === 0) {
      this.rows = [];
      this.initializeTableDataSettings();
    }
    else if (data.studentDataView) {
      this.reportCardSearchViewModel.pageNumber = data.studentDataView.pageNumber;
      this.rows = data.studentDataView.list;
      this.filterdata = data.filters;
      this.filterRowData = this.rows;
      const x = [];
      this.filterRowData.forEach(elnt => {
        if (x.length === 0) {
          x.push(elnt);
        }
        else {
          this.filterRowData.forEach((element: any) => {
            const foundIndex = x.findIndex((value: any) => {
              return value.studentName === element.studentName;
            });
            if (foundIndex === -1) {
              x.push(element);
            }
          });
        }
      });
      this.filterRowData = x;

      // apply edit 
      this.filterRowData.forEach(element => {
        this.rows.forEach(element1 => {
          if (element.studentName === element1.studentName &&
            element.rollNumber === element1.rollNumber) {
            element.operations = [
              {
                name: AppSettings.EDIT_OPERATION,
                icon: AppSettings.EDIT_ICON,
                operationName: AppSettings.EDIT
              },
            ];
          }
        });
      });
      if (this.isEditMode) {
        this.editButton = {
          name: 'Done',
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
      this.studentValuesForm = this._fb.group({
        reportValues: this._fb.array([]),
      });
      const control = <FormArray>this.studentValuesForm.controls['reportValues'];

      this.rows.map(e => {
        const list = JSON.parse(e.validationInfo);
        control.push(this.studentReportValues(e.schoolAcademicSessionStudentId, e.reportCardItemName, e.reportCardItemValue, list, e));
      });

      this.rows = this.sortByColumns(['studentName', 'rollNumber'], this.rows);

      (<FormArray>this.studentValuesForm.controls['reportValues']).patchValue(this.rows);

      this.initializeTableSettings();
    }

  }

  getValidators(element: any): any {
    const validators: Array<any> = [];
    const list = JSON.parse(element.validationInfo);
    // tslint:disable-next-line:forin
    for (const key in list) {
      if (!list[key]) {
        continue;
      }
      switch (key.toLowerCase()) {
        case AppSettings.REQUIRED:
          (validators.push(Validators.required));
          break;
        case AppSettings.Email:
          (validators.push(Validators.email));
          break;
        case AppSettings.MINLENGTH:
          validators.push(Validators.minLength(list[key]));
          break;
        case AppSettings.MAXLENGTH:
          validators.push(Validators.maxLength(list[key]));
          break;
        case AppSettings.PATTERN:
          validators.push(Validators.pattern(list[key]));
          break;
      }
    }

    return validators;
  }


  // actions to perform edit or delete
  rowWiseActions(event: any): void {
    if (event.operation === 'edit') {
      this.inputChangeIndex = [];
      this.closeAddPanel = false;
      this.updateStudent = true;
      this.dataSet = event.clickedRow;

      this.studentCustomFeildsForm(this.dataSet.reportPrintTemplateName);
      this.dataSet.reportPrintTemplateName.forEach(element => {
        this.updateForm.controls[element.code].patchValue(element.reportCardItemValue);
      });

      this.schoolAcademicSessionStudentId = event.clickedRow.schoolAcademicSessionStudentId;
    }
  }

  studentCustomFeildsForm(feildsList: any): void {
    this.updateForm = new FormGroup({
      schoolAcademicSessionStudentId: new FormControl(''),
      gradingTermId: new FormControl(''),
    });
    feildsList.forEach(element => {
      this.updateForm.addControl(element.code, new FormControl(null,
        this.getValidators(element)));
    });
  }

  onShowAll(data: any): void {
    if ('edit' === data) {
      this.isEditMode = true;
      this.inputChangeIndex = [];
    }
    else if ('back' === data) {
      this.isEditMode = false;
      this.valuesIndex = [];
    }
    this.searchReportCards();
  }

  // method for when click cancel panel it will open
  closeForm(): void {
    this.dialogRef.closeAll();
    this.validateForm = false;
    this.closeAddPanel = true;
    this.updateStudent = false;
  }

  updateValues(updateForm: any): void {
    this.validateForm = true;
    if (this.updateForm.invalid) {
      return;
    }
    else {
      this.studentCustomFieldsView.printTemplateCustomFieldView = [];
      Object.keys(updateForm).forEach((key, index) => {
        const customFeilds = this.dataSet.reportPrintTemplateName.find(e => e.code === key);
        if (customFeilds) {
          this.printTemplateCustomFieldView = {
            printTemplateCustomFieldId: customFeilds.printTemplateFieldId,
            value: updateForm[key],

            id: customFeilds.studentAdditionalInfoId,
          };
          this.studentCustomFieldsView.printTemplateCustomFieldView.push(this.printTemplateCustomFieldView);
        }
      });

      this.studentCustomFieldsView.gradingTermId = this.studentInformationSearchForm.controls['gradingTermId'].value;
      this.studentCustomFieldsView.schoolAcademicSessionStudentId = this.schoolAcademicSessionStudentId;
      this.gradeReportService.studentReportsStudentCustomDetailsPut(this.studentCustomFieldsView).subscribe(res => this.response(res), error => {
        this.errorResponse(error);
      });
    }
  }
  response(data: any): void {
    this.validateForm = false;
    if (data.statusCode === this.HttpStatus.OK) {
      this.closeAddPanel = true;
      this.searchReportCards();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }

}
