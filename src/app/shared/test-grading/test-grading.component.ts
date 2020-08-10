import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestScoreService } from 'app/service/grading-service/api/testScore.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { TestGradeFilterViewModel } from '../../modules/academics/grading/models/test-grade-filter-view';
import { TestScoreView } from '../../modules/academics/grading/models/test-score-view';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Pattern, AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { TestScheduleService } from 'app/service/grading-service/api/test-schedule-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';
import { StudentScoreBulkView } from 'app/modules/academics/grading/models/studentScoreBulkView';

@Component({
  selector: 'app-test-grading',
  templateUrl: './test-grading.component.html',
  styleUrls: ['./test-grading.component.scss'],
  providers: [TestScoreService, TestScheduleService]
})
export class TestGradingComponent extends CommonComponent implements OnInit {
  maxMarks: any;
  additionalButton: any;
  additionalButton1: any;
  testMaxMarksForm: FormGroup;
  testData: any;
  validate = true;
  isShowAll = AppSettings.SHOW_ALL;
  emptyData: any[];
  showAllData: any[];
  rows: any[];
  testScheduleType: any;
  studentScoreForm: FormGroup;
  isEditMode = false;
  editButton = {};
  marksIndex: any[] = [];
  studentIndex: any;
  download: any;
  upload: any;
  attachment: AttachmentViewModel;
  studentScoreView: StudentScoreBulkView;
  studentScoreBulkViews: TestScoreView[] = [];
  importTableColumns: any[];
  totalRowsCount: number;
  pageCnt: number;
  errorMessage: string;

  constructor(private testScoreService: TestScoreService, public dialogRef: MatDialog, private _formBuilder: FormBuilder, public commonService: CommonService,
    private router: Router, private route: ActivatedRoute, private _fb: FormBuilder, public snackBar: MatSnackBar,
    private testScheduleService: TestScheduleService, public location: Location, public cd: ChangeDetectorRef, private httpClient: HttpClient) {
    super();
    this.testGradeFilterView = {
      classId: 0,
      sectionId: 0,
      boardId: null,
      testScheduleId: '',
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      isShowAll: true
    };
  }

  isTestScore: any;
  testScheduleId: any;
  tableSettings: {};
  columns: any[];
  currentComponent: 'TestGradingComponent';
  testGradeFilterView: TestGradeFilterViewModel;
  testScoreView: TestScoreView;
  importTabSettings: {};
  isMarksTableShow = true;

  ngOnInit(): void {
    this.rows = [];
    this.testMaxMarksForm = this._formBuilder.group({
      maxMarks: ['', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(9999)]],
    });
    this.testScoreView = {
      studentId: '',
      testScheduleId: '',
      score: 0
    };
    this.testGradeFilterView = {
      classId: 0,
      sectionId: 0,
      boardId: null,
      testScheduleId: '',
      isShowAll: true,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER
    };

    this.attachment = {
      fileName: '',
      fileValue: ''
    };
    this.studentScoreView = {
      testScoreViews: this.studentScoreBulkViews,
      attachmentViewModel: this.attachment
    };

    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'rollNumber', header: 'Roll Number', sort: true },
      { field: 'marks', header: 'Marks', sort: false },
    ];
    this.routeParamsData();

    this.importTableColumns = this.columns.concat({ field: 'score', header: 'Marks', sort: false }, { field: 'error', header: 'Errors', sort: false });
    this.importTableColumns = this.importTableColumns.filter(x => x.field !== 'marks');

    this.importTabSettings = {
      model: this.testGradeFilterView,
      rows: [],
      columns: this.importTableColumns,
      padding: true,
      componentName: this.currentComponent,
      isPaginationRequired: false,

    };
  }
  studentScores(): FormGroup {
    return this._fb.group({
      marks: new FormControl('', [Validators.required, Validators.max(this.maxMarks), Validators.pattern(Pattern.PREVENT_SPACES),
      Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)])
    });
  }

  routeParamsData(): void {
    this.route.params.subscribe((param) => {
      if (param.testScheduleId) {
        this.testScheduleId = param.testScheduleId;
        this.testScheduleType = param.operation;
      }
    });
    this.testDetails();
  }
  initializeTableSettings(): void {
    if (this.isEditMode) {
      this.columns = [
        { field: 'studentName', header: 'Student Name', sort: true },
        { field: 'admissionNumber', header: 'Admission Number', sort: true },
        { field: 'rollNumber', header: 'Roll Number', sort: true },
        { field: 'score', header: 'Marks', sort: false, rowTempalteRequired: true },
      ];
    }
    else {
      this.columns = [
        { field: 'studentName', header: 'Student Name', sort: true },
        { field: 'admissionNumber', header: 'Admission Number', sort: true },
        { field: 'rollNumber', header: 'Roll Number', sort: true },
        { field: 'marks', header: 'Marks', sort: false },
      ];
    }
    this.tableSettings = {
      model: this.testGradeFilterView,
      rows: this.rows,
      columns: this.columns,
      padding: true,
      componentName: this.currentComponent,
      isPaginationRequired: false,
      isMultiDeleteRequired: false,
      headerOperations: {
        additionalButtons: this.returnBackButtons()
      }
    };
  }
  testDetails(): void {
    this.testScoreService.testDetails(this.testScheduleId).subscribe((res: any) => this.testRes(res), error => {
      this.errorResponse(error);
    });
  }
  testRes(data: any): void {
    this.isMarksTableShow = true;
    this.testData = data;
    this.getSchoolDateFormat();
    this.testData.testDate = this.testData.testDate != null ? this.commonService.customDateFormat(this.testData.testDate.toString(), this.getSchoolDateFormat()).date : null;
    this.maxMarks = data.maximumMarks;
    this.testMaxMarksForm.controls['maxMarks'].setValue(this.maxMarks);
    this.testGradeFilterView.classId = data.classId;
    this.testGradeFilterView.sectionId = data.sectionId;
    this.testGradeFilterView.boardId = data.boardId;
    this.studentDetails(this.testGradeFilterView);
  }

  studentDetails(data: any): void {
    this.testGradeFilterView = data;
    this.studentScoreDetails();
  }
  studentScoreDetails(): void {
    this.testGradeFilterView.testScheduleId = this.testScheduleId;
    this.testScoreService.testScheduleStudents(this.testGradeFilterView.classId, this.testGradeFilterView.sectionId, this.testGradeFilterView.boardId,
      this.testGradeFilterView.testScheduleId,
      this.testGradeFilterView.isShowAll, this.testGradeFilterView.sortOrder, this.testGradeFilterView.sortBy,
      this.testGradeFilterView.pageNumber, this.testGradeFilterView.pageSize).subscribe((res: any) => this.studentDataRes(res), error => {
        this.errorResponse(error);
      });
  }
  studentDataRes(data: any): void {
    if (data.testGradeStudentDataView == null) {
      this.rows = [];
      this.tableSettings = {
        model: this.testGradeFilterView,
        rows: this.rows,
        columns: this.columns,
        padding: true,
        componentName: this.currentComponent,
        isPaginationRequired: false,
        isMultiDeleteRequired: false,
      };

    }
    else {
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
      this.rows = data.testGradeStudentDataView.list;
      this.studentScoreForm = this._fb.group({
        scores: this._fb.array([]),
      });

      const control = <FormArray>this.studentScoreForm.controls['scores'];
      for (let i = 0; i < this.rows.length; i++) {
        control.push(this.studentScores());
      }

      (<FormArray>this.studentScoreForm.controls['scores']).patchValue(this.rows);
      this.showAllData = data.testGradeStudentDataView.list;
      this.additionalButton = {
        name: AppSettings.SHOW_ALL,
        textColor: 'accent-fg',
        clickAction: AppSettings.SHOW_ALL
      };
      this.additionalButton1 = {
        name: AppSettings.SHOW_EMPTY_ONLY,
        textColor: 'accent-fg',
        clickAction: AppSettings.SHOW_EMPTY_ONLY
      };
      this.initializeTableSettings();

      this.studentScoreForm.controls['scores'].valueChanges.subscribe(values => {
        if (!this.studentScoreForm.controls['scores'].valid) {
          this.tableSettings['headerOperations'] = {
            additionalButtons: this.returnBackButtons(true)
          };
        } else {
          this.tableSettings['headerOperations'] = {
            additionalButtons: this.returnBackButtons()
          };
        }
      });
    }

  }
  returnBackButtons(disable = false): any {
    this.editButton['disable'] = this.rows && !this.rows.length ? true : disable;
    this.additionalButton['disable'] = disable;
    this.additionalButton1['disable'] = disable;
    const addButtons = [
      this.editButton,
      this.additionalButton,
      this.additionalButton1,
    ];
    if (this.isEditMode) {
      addButtons.unshift({
        name: 'Back',
        class: 'accent',
        clickAction: 'onBack'
      });
    }
    return addButtons;
  }
  onTestMarksUpdate(data: any): void {
    this.trimTextBoxSpaces('maxMarks');
    if (this.testMaxMarksForm.valid) {
      let stdMaxMarks = null;
      this.rows.map(e => {
        if (e.marks && e.marks > stdMaxMarks) {
          stdMaxMarks = e.marks;
        }
      });

      if (stdMaxMarks != null && stdMaxMarks > +data.target.value) {
        this.openSnackBar(AppSettings.TEST_MAXMARKS_UPDATE_FAILED, true);
        this.testMaxMarksForm.controls['maxMarks'].setValue(this.maxMarks);
      }
      else if (this.maxMarks !== +data.target.value) {
        this.maxMarks = +data.target.value;

        this.testScoreService.updateTestMaxMarks(this.testScheduleId, data.target.value).subscribe((res: any) => this.marksRes(res), error => {
          this.errorResponse(error);
        });
      }
    }
  }

  trimTextBoxSpaces(key: string): void {
    this.testMaxMarksForm.controls[key].setValue(this.commonService.trimSpaces(this.testMaxMarksForm.controls[key].value)); // modify value here)
  }

  marksRes(res: any): void {
    this.openSnackBar(res.messages.ResultMessage);
    this.testDetails();
  }

  getStudentDetails(data: any): void {
    this.testGradeFilterView = data;
    this.studentDetails(this.testGradeFilterView);
  }

  updateStudentScore(data: any, index: any): void {
    if (data.valid && data.value.marks != null && data.value.marks !== '' && this.rows[index].marks !== +data.value.marks) {
      this.marksIndex['spinner_' + index] = true;
      this.marksIndex['marks_' + index] = false;
      this.rows[index].marks = +data.value.marks;
      this.testScoreView.studentId = this.rows[index].studentId;
      this.testScoreView.score = +data.value.marks;
      this.testScoreView.testScheduleId = this.testScheduleId;
      this.studentIndex = index;
      this.testScoreService.createTestScore(this.testScoreView).subscribe(async (res: any) => this.studentMarks(index), error => {
        this.errorResponse(error);
      });
    }
    if (!data.valid) {
      this.marksIndex['marks_' + index] = false;
      this.marksIndex['spinner_' + index] = false;
    }
  }
  studentMarks(index: any): any {
    this.marksIndex['spinner_' + index] = false;
    this.marksIndex['marks_' + index] = true;
    this.cd.detectChanges();
  }
  check(index: any): any {
    const t = this.marksIndex.find(x => x === index);
    return t != null ? true : false;
  }
  spinnerLoad(index: any): any {
    return index === this.studentIndex;
  }

  onShowAll(data: any): void {
    this.isShowAll = data;
    if (AppSettings.SHOW_EMPTY_ONLY === data) {
      this.testGradeFilterView.isShowAll = false;
    }
    else if (AppSettings.SHOW_ALL === data) {
      this.testGradeFilterView.isShowAll = true;
    }
    else if ('edit' === data && this.testMaxMarksForm.valid) {
      this.isEditMode = true;
    }
    else if ('back' === data || 'onBack' === data) {
      this.isEditMode = false;
      this.testGradeFilterView.isShowAll = true;
      this.marksIndex = [];
    }

    if ('edit' === data && (!this.testMaxMarksForm.valid || this.testMaxMarksForm.value.maxMarks == null)) {
      this.openSnackBar(AppSettings.TEST_MAX_MARKS, true);
    }
    else {
      this.initializeTableSettings();
      this.studentScoreDetails();
    }
  }
  downLoadFile(): any {
    const studentScoresDetails = [];
    this.rows.forEach(x => {
      const object = {
        StudentName: x.studentName,
        AdmissionNumber: x.admissionNumber,
        RollNumber: x.rollNumber,
        Marks: x.marks,
      };
      studentScoresDetails.push(object);
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(studentScoresDetails);

    const workbook: XLSX.WorkBook = { Sheets: { 'Student Details': worksheet }, SheetNames: ['Student Details'] };

    let fileName = 'BulkStudentScore';
    if (this.testData !== null) {
      fileName = this.testData.testName + this.testData.course + '(' + this.testData.testDate + ')';
    }

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }
  upLoadFile(event: any): void {
    if (event.target.value) {
      const file = event.target.files[0];
      this.testScoreService.readTestScoresData(file, this.testScheduleId).subscribe(res => {
        this.readScoresResult(res);
      }, err => {
        this.openSnackBar(err.error.messages.ResultMessage, true);
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      const that = this;
      reader.onload = (_event) => {
        that.attachment.fileName = file.name;
        that.attachment.fileValue = (<string>reader.result).split(',')[1];
      };
      this.studentScoreView.attachmentViewModel = that.attachment;
    }

  }
  readScoresResult(data: any): void {
    if (data.testScoreValidationsViews !== null) {
      data.testScoreValidationsViews.forEach((rowData, index) => {
        if (rowData.errors && rowData.errors.length) {
          this.errorMessage = '';
          rowData.errors.forEach(errors => {
            const emsg = errors !== undefined ? errors.errorMessage : null;
            if (emsg != null && emsg !== undefined) {
              this.errorMessage = [this.errorMessage, emsg].join(' ');
            }
          });
          data.testScoreValidationsViews[index]['error'] = this.errorMessage;
        }
      });
      this.openSnackBar(data.messages.ResultMessage);
    }
    this.isMarksTableShow = false;
    this.importTabSettings = {
      model: this.testGradeFilterView,
      rows: data.testScoreValidationsViews,
      columns: this.importTableColumns,
      padding: true,
      componentName: this.currentComponent,
      isPaginationRequired: false,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isMultiDeleteRequired: false,
      headerOperations: {
        additionalButtons: [
          {
            name: 'Cancel',
            textColor: 'accent text-uppercase',
            clickAction: 'checkUrl'
          }
        ]
      }
    };
  }
  onTestStatus(schedule): void {
    if (schedule) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.COMPLETE_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      this.dialogMethod(dialogRef, schedule);
    }
    else {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.CANCEL_TEST_SCHEDULE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      this.dialogMethod(dialogRef, schedule);
    }
  }
  completeOrCancelRequest(response: any): void {
    this.testDetails();
    this.openSnackBar(response.messages.ResultMessage);
  }

  dialogMethod(dialogRef: any, isScheduled: any): void {
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.testScheduleService.completeOrCancelSchedule(this.testScheduleId, isScheduled).subscribe(res => this.completeOrCancelRequest(res), error => {
          this.errorResponse(error);
        });
      }
    });
  }
  trimTextBoxSpaceArray(c: any, key: any): void {
    c.patchValue({ marks: this.commonService.trimSpaces(c.value.marks) });
  }
  onClear(): void {
    this.isMarksTableShow = true;
  }

  onProcessClick(): void {
    this.studentScoreView.testScoreViews.map(x => x.score = +x.score);
    this.testScoreService.studentTestScoreBulkPost(this.studentScoreView).subscribe(res => {
      this.bulkPostResult(res);
    }, err => {
      this.openSnackBar(err.error.messages.ResultMessage, true);
    });
  }
  bulkPostResult(data: any): void {
    this.openSnackBar(data.messages.ResultMessage);
    this.testDetails();
  }
  selectedRows(event): void {
    this.studentScoreView.testScoreViews = [];
    this.studentScoreView.testScoreViews = event;
  }
}
