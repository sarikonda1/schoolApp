import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { GradeReportService } from 'app/service/report-card-service/grade-report.service';
import { max } from 'date-fns';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from 'app/app.constants';
import { PaymentService } from 'app/service/payments/payment.service';
import { StoreService } from 'app/service/file-management/store.service';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import * as HttpStatus from 'http-status-codes';

@Component({
  selector: 'app-report-card-details',
  templateUrl: './report-card-details.component.html',
  styleUrls: ['./report-card-details.component.scss'],
  providers: [GradeReportService, StoreService, PaymentService],
  animations: fuseAnimations
})
export class ReportCardDetailsComponent extends CommonComponent implements OnInit {
  currentComponent = 'ReportCardDetailsComponent';
  studentId: any;
  studentDetails: any;
  particurlarsCols: any;
  testContributionsSettings: any;
  reportCradDetails: any;
  gradingTermInfo: any[] = [];
  courseScoreDeatils: any;
  tableData: any = {};
  rowGroupingColumns: any;
  parentColumn: any;
  spans: Array<any> = [];
  cols: any[];
  displayedColumns: any[] = [];
  studentAssessmentDeatils: any;
  graingTermId: any;
  operations: any[] = [];
  studentAssessmentData: any;
  isRouteToAssessments = false;
  showButton: boolean;
  tdGroupingClass: any;
  constructor(private route: ActivatedRoute, public commonService: CommonService,
    public gradeReportService: GradeReportService, public paymentService: PaymentService, public storeService: StoreService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.studentId) {
        this.studentId = params.studentId;
      }
      if (params.termId) {
        this.graingTermId = params.termId;
      }
    });
    this.operations = [
      {
        name: (AppSettings.GENERATE_REPORT_CARD_OPERATION),
        icon: AppSettings.GENERATE,
        operationName: AppSettings.GENERATE_REPORT_CARD
      },

    ];
    this.getReportCardDetails();
  }
  onTabChange(event: any): void {
    this.showButton = event.index === 1 ? true : false;
  }
  getReportCardDetails(): void {
    this.gradeReportService.studentReportsReportsGetGet(this.studentId, this.graingTermId)
      .subscribe(res => this.setReportCardDetails(res), err => this.errorResponse(err));
  }
  setReportCardDetails(response): void {
    this.reportCradDetails = response.gradeTermStudentDataView;
    if (this.reportCradDetails) {
      if (this.reportCradDetails.gradingTermDataSummaryId && this.reportCradDetails.statusCode !== AppSettings.REPORT_INCOMPLETE) {
        this.operations = [];
        this.operations.push(
          {
            name: (AppSettings.GENERATE_REPORT_CARD_OPERATION),
            icon: AppSettings.GENERATE,
            operationName: AppSettings.GENERATE_REPORT_CARD
          },
          {
            name: AppSettings.VIEW_REPORT_CARD_OPERATION,
            icon: AppSettings.DOWNLOAD,
            operationName: AppSettings.VIEW_REPORT_CARD
          },
          {
            name: AppSettings.CLEAR_REPORT_CARD_DATA_OPERATION,
            icon: AppSettings.CLEAR_ICON,
            operationName: AppSettings.CLEAR_REPORT_CARD_DATA,
          },
          {
            name: (AppSettings.APPROVE_PENDING_REPORT_CARD_OPERATION),
            icon: AppSettings.DONE,
            operationName: AppSettings.APPROVE_PENDING_REPORT_CARD
          },
        );
      } else {
        this.setOperations();
      }
      this.gradingTermInfo = this.getKeyValuesOfObject(this.getRequiredTermDeatils(this.reportCradDetails));
      this.studentDetails = this.getKeyValuesOfObject(this.getRequiredStudentDeatils(this.reportCradDetails));
      this.prepareTestContributionsTable();
    }
  }

  setOperations(): void {
    this.operations = [
      {
        name: (AppSettings.GENERATE_REPORT_CARD_OPERATION),
        icon: AppSettings.GENERATE,
        operationName: AppSettings.GENERATE_REPORT_CARD
      },
    ];
  }
  prepareTestContributionsTable(): void {
    this.particurlarsCols = [
      { field: 'testTypeName', header: 'Name', sort: false },
      { field: 'isDisplayOnreportCard', header: 'Displayed On Report Card', sort: false },
      { field: 'marksGroupCriteria', header: 'Marks Group Criteria', sort: false },
      { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
      { field: 'displayOption', header: 'Display Option', sort: false }
    ];
    if (this.reportCradDetails.gradingTermTestDataViewModel && this.reportCradDetails.gradingTermTestDataViewModel.length) {
      this.reportCradDetails.gradingTermTestDataViewModel.map(e => {
        e.isDisplayOnreportCard = e.isDisplayOnreportCard ? 'Yes' : 'NO';
      });
      if (this.reportCradDetails.gradingTermTestDataViewModel[0].consideration) {
        this.particurlarsCols.splice(1, 0, { field: 'consideration', header: 'Considerations %', sort: false });
      } else {
        this.particurlarsCols.splice(1, 0, { field: 'contribution', header: 'Contribution %', sort: false });
      }
    }
    this.testContributionsSettings = {
      rows: this.reportCradDetails.gradingTermTestDataViewModel,
      columns: this.particurlarsCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: false,
      padding: true,
      hideHeader: true,
      headerOperations: {
        addingForm: {
          required: false
        }
      },
    };
    this.setCourseData();
    this.setAssessmentData();
  }
  setAssessmentData(): void {
    const particurlarsCols = [
      { field: 'assessmentGroup', header: 'Assessment Group', sort: false },
      { field: 'assessmentCategory', header: 'Assessment Category', sort: false },
      { field: 'assessmentParameter', header: 'Assessment Parameter', sort: false },
      { field: 'assessmentSubCategory', header: 'Assessment Subcategory', sort: false },
      { field: 'studentGrade', header: 'Student Grade', sort: false }
    ];
    this.studentAssessmentDeatils = {
      rows: this.reportCradDetails.studentAssessment,
      columns: particurlarsCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: false,
      padding: true,
      hideHeader: true,
      headerOperations: {
        addingForm: {
          required: false
        }
      },
      rowGroupingColumns: ['assessmentGroup', 'assessmentCategory', 'assessmentParameter', 'assessmentSubCategory', 'studentGrade']
    };
  }
  setCourseData(): void {
    const courseScoreDeatilsCols = [
      { field: 'courseName', header: 'Course', sort: false },
      { field: 'testType', header: 'Test Type', sort: false },
      { field: 'consideration', header: 'Consideration', sort: false },
      { field: 'gradeIndicator', header: 'Grade', sort: false }
    ];
    let maxRows = 0;
    const additionalColumns = [];
    if (this.reportCradDetails.gradingTermStudentCourseDataView && this.reportCradDetails.gradingTermStudentCourseDataView.length) {
      this.reportCradDetails.gradingTermStudentCourseDataView.map(e => {
        if (maxRows < e.gradingTermStudentCourseDataDetails.length) {
          maxRows = e.gradingTermStudentCourseDataDetails.length;
        }
      });
      let i = 0;
      if (this.reportCradDetails.gradingTermStudentCourseDataView[0].gradingTermAdditionalColumnDataDetailsView) {
        this.reportCradDetails.gradingTermStudentCourseDataView[0].gradingTermAdditionalColumnDataDetailsView.map(ele => {
          additionalColumns.push({ field: 'additionalCol' + i, header: ele.terms, sort: false });
          i++;
        });
      }
    }
    for (let i = 0; i < maxRows; i++) {
      courseScoreDeatilsCols.splice(2 + i, 0, { field: 'test' + i, header: 'Test', sort: false });
    }
    if (additionalColumns && additionalColumns.length) {
      additionalColumns.map(e => {
        courseScoreDeatilsCols.push(e);
      });
    }
    const courseRows = [];
    if (this.reportCradDetails.gradingTermStudentCourseDataView && this.reportCradDetails.gradingTermStudentCourseDataView.length) {
      this.reportCradDetails.gradingTermStudentCourseDataView.map(e => {
        const defaultData = {
          courseName: e.courseName,
          testType: e.testType,
          consideration: e.consideration,
          gradeIndicator: e.gradeIndicator
        };
        if (e.testTypeId) {
          e.gradingTermStudentCourseDataDetails.map((scores, i) => {
            defaultData['test' + i] = scores.testScore;
          });
          for (let j = e.gradingTermStudentCourseDataDetails.length; j < maxRows; j++) {
            defaultData['test' + j] = '---';
          }
          courseRows.push(defaultData);
        } else {
          defaultData['testType'] = 'Total';
          if (e.gradingTermAdditionalColumnDataDetailsView) {
            e.gradingTermAdditionalColumnDataDetailsView.map(ele => {
              const matchedData = courseScoreDeatilsCols.find(el => el.header === ele.terms);
              if (matchedData) {
                defaultData[matchedData.field] = ele.isGrandTotalColumn ? ele.gradeIndicator : ele.consideration;
              }
            });
          }
          courseRows.push(defaultData);
        }
      });
    }
    if (courseRows.length) {
      courseRows.push({
        testType: this.reportCradDetails.overallGradeDisplayName ? this.reportCradDetails.overallGradeDisplayName : 'OVERALL GRADE',
        consideration: this.reportCradDetails.studentMarks + ' / ' + this.reportCradDetails.totalMarks,
        gradeIndicator: this.reportCradDetails.gradeIndicator
      });
    }
    this.courseScoreDeatils = {
      rows: courseRows,
      columns: courseScoreDeatilsCols,
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isPaginationRequired: true,
      padding: true,
      hideHeader: true,
      headerOperations: {
        addingForm: {
          required: false
        }
      },
      rowGroupingColumns: ['courseName']
    };
    this.tableData = this.courseScoreDeatils.rows;
    this.cols = [];
    if (this.courseScoreDeatils.columns && !this.cols.length) {
      this.courseScoreDeatils.columns.forEach((i: any) => this.cols.push(i));
    }
    if (this.tableData.length && this.courseScoreDeatils.rowGroupingColumns) {
      this.rowGroupingColumns = this.courseScoreDeatils.rowGroupingColumns;
      this.parentColumn = this.courseScoreDeatils.rowGroupingColumns[0];
      this.tableData.sort((t1, t2) => {
        const name1 = t1[this.parentColumn];
        const name2 = t2[this.parentColumn];
        if (name1 > name2) { return 1; }
        if (name1 < name2) { return -1; }
        return 0;
      });
      this.rowGroupingColumns.forEach(columns => {
        this.cacheSpan(columns);
      });
      this.rowGroupingClasses();
    }



    this.displayedColumns = this.cols.map(column => column.field);
  }
  getRowSpan(col, index): void {
    return this.spans[index] && this.spans[index][col];
  }
  checkPrevoiusColumn(j: any): boolean {
    let isPriviousNotColumnGrouped = true;
    if (j > 0 && j < this.rowGroupingColumns.length - 1) {
      this.rowGroupingColumns.forEach(element => {
        if (element === this.rowGroupingColumns[j - 1]) {
          isPriviousNotColumnGrouped = false;
        }
      });

    }
    return isPriviousNotColumnGrouped;
  }
  cacheSpan(key): void {
    for (let i = 0; i < this.tableData.length;) {
      const currentValue = this.tableData[i][key];
      const parentValue = this.tableData[i][this.parentColumn];
      let count = 1;
      for (let j = i + 1; j < this.tableData.length; j++) {
        if (parentValue === this.tableData[j][this.parentColumn]) {
          if (currentValue !== this.tableData[j][key]) {
            break;
          }
          count++;
        }
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }
      this.spans[i][key] = count;
      i += count;
    }
  }
  getRequiredTermDeatils(term): any {
    return {
      'Term Name': term.gradingTermName,
      'Evaluation Type': term.evaluationType,
      'Term Code': term.termCode,
      'Generate Report Card': term.generateReportCard ? 'Yes' : 'No',
      'Start Date': this.getFormattedDateBySchoolDateFormat(term.startDate),
      'Generate Overall Grade': term.generateOverallGrade ? 'Yes' : 'No',
      'End Date': this.getFormattedDateBySchoolDateFormat(term.endDate),
      'Overall Grade Display Name': term.overallGradeDisplayName,
      'Report Card Status': term.reportCardStatus,
      'Last Generated Error Message': term.lastGeneratedErrorMessage
    };
  }
  getRequiredStudentDeatils(student): any {
    return {
      'Student Name': student.studentName,
      'Roll Number': student.rollNumber,
      'Admission Number': student.admissionNumber,
      'Board': student.schoolBoardName,
      'Class': student.class,
      'Section': student.section,
      'Date Of Birth': this.getFormattedDateBySchoolDateFormat(student.dateOfBirth),
      'Father Name': student.fatherName,
      'Email': student.email,
      'Phone Number': student.phoneNumber,
    };
  }
  onSelectAction(action): any {
    const params = {
      gradeTermId: this.reportCradDetails.gradingTermId,
      studentIds: [this.reportCradDetails.schoolAcademicSessionStudentId],
      classId: this.reportCradDetails.classId,
      sectionId: this.reportCradDetails.sectionId,
    };
    if (action.operationName === AppSettings.GENERATE_REPORT_CARD.toLowerCase()) {
      this.generateReportCard(params);
    } else if (action.operationName === AppSettings.CLEAR_REPORT_CARD_DATA.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_CLEAR_REPORT_CARD, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(actionDailog => {
        if (actionDailog === AppSettings.YES) {
          // tslint:disable-next-line: max-line-length
          this.gradeReportService.reportsClearStudentReportsDelete(params.studentIds, this.reportCradDetails.gradingTermId, this.reportCradDetails.classId, this.reportCradDetails.sectionId)
            .subscribe(res => this.onClearReportCard(res), err => this.errorResponse(err));
        }
      });
    } else if (action.operationName === AppSettings.APPROVE_PENDING_REPORT_CARD.toLowerCase()) {
      this.gradeReportService.reportsApprovePendingapprovalReportsPut(params.studentIds,
        params.gradeTermId, params.classId,
        params.sectionId)
        .subscribe(res => this.onApproveReportCard(res), err => this.errorResponse(err));
    } else if (action.operationName === AppSettings.VIEW_REPORT_CARD.toLowerCase()
      && (this.reportCradDetails.gradingTermDataSummaryId || this.reportCradDetails.statusCode === 'RPTG_PA')) {
      this.paymentService.reportPrint(this.reportCradDetails.gradingTermDataSummaryId)
        .subscribe(res => this.viewReportCard(res), err => this.errorResponse(err));
    }
  }
  generateReportCard(data): void {
    this.gradeReportService.reportsGenerateStudentReportGet(data.gradeTermId, data.studentIds, data.classId, data.sectionId)
      .subscribe(res => this.onClearReportCard(res, false), err => this.errorResponse(err));
  }
  onClearReportCard(res, onClear = true): void {
    if (onClear) {
      this.rowGroupingColumns = [];
    }
    this.openSnackBar(res.messages.ResultMessage);
    this.getReportCardDetails();
  }

  onApproveReportCard(res): void {
    if (res.statusCode === HttpStatus.OK) {
      this.openSnackBar(AppSettings.RPORT_APPROVED_SUCCESSFULLY);
    } else {
      this.openSnackBar(res.messages.ResultMessage);

    }
    this.getReportCardDetails();
  }
  viewReportCard(res): void {
    if (res.fileName) {
      window.open(this.storeService.getFilePath(res.fileName));
    }
  }

  navAssessmentGrades(): void {
    this.isRouteToAssessments = true;
    this.studentAssessmentData = {
      student: {
        label: this.reportCradDetails.studentName,
        value: this.reportCradDetails.schoolAcademicSessionStudentId
      },
      schoolBoardId: this.reportCradDetails.schoolBoardId,
      classId: this.reportCradDetails.classId,
      sectionId: this.reportCradDetails.sectionId,
      gradingTermId: this.reportCradDetails.gradingTermId
    };

  }

  closeAssessmentForm(): void {
    this.isRouteToAssessments = false;
    this.getReportCardDetails();
  }

  rowGroupingClasses(): any {
    this.tdGroupingClass = [];
    this.cols.forEach((column, index) => {
      const findGroupingIndex = this.rowGroupingColumns.findIndex((rowGroupingColumn) => {
        return column.field === rowGroupingColumn;
      });
      if (findGroupingIndex >= 0) {
        if (index > 0) {
          const previousColumnClass = this.tdGroupingClass[this.cols[index - 1].field];
          if (previousColumnClass.includes('border-right')) {
            this.tdGroupingClass[column.field] = 'border-right';
          }
          else {
            this.tdGroupingClass[column.field] = 'border-right border-left';
          }

        }
        else {
          this.tdGroupingClass[column.field] = 'border-right';
        }
      }
      else {
        this.tdGroupingClass[column.field] = '';
      }

    });
  }
}
