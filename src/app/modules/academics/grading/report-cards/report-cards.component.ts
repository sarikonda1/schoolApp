import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { CommonService } from 'app/service/common.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { AppSettings } from 'app/app.constants';
import { Router } from '@angular/router';
import { GradeReportService } from 'app/service/report-card-service/grade-report.service';
import { MatAutocompleteTrigger, MatSnackBar, MatDialog } from '@angular/material';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { RouteConfig } from 'app/url.config';
import { PaymentService } from 'app/service/payments/payment.service';
import { StoreService } from 'app/service/file-management/store.service';
import { ZipViewModel } from 'app/service/file-management/model/zip-view-model';
import { DomSanitizer } from '@angular/platform-browser';
import * as HttpStatus from 'http-status-codes';

@Component({
  selector: 'app-report-cards',
  templateUrl: './report-cards.component.html',
  styleUrls: ['./report-cards.component.scss'],
  providers: [GradeSetupService, ClassesConfigService, GardeTermConfigurationService, GradeReportService, StudentDBService, PaymentService, StoreService]
})
export class ReportCardsComponent extends CommonComponent implements OnInit {
  zipViewModel: ZipViewModel;
  currentComponent = 'ReportCardsComponent';
  reportCardsSearchForm: FormGroup;
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
  operationsForSummary: any[] = [];
  ReturnFileName: any;
  constructor(private gradeSetupService: GradeSetupService, private classService: ClassesConfigService, public commonService: CommonService,
    private gradeTermConfigurationService: GardeTermConfigurationService, private cd: ChangeDetectorRef,
    private router: Router, public gradeReportService: GradeReportService, private studentDbService: StudentDBService, public snackBar: MatSnackBar,
    public paymentService: PaymentService, public storeService: StoreService, public dialog: MatDialog,
    private sanitizer: DomSanitizer) {
    super();
    this.zipViewModel = {
      fileNames: [],
      returnFileName: ''
    };
  }

  ngOnInit(): void {
    this.initializeForm();
    this.setColumnHeaders();
    this.initializeSearchViewModel();
    this.initializeTableSettings();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.reportCardSearchViewModel = modelTableComponent;
      this.reportCardsSearchForm.patchValue(modelTableComponent);
      this.onSelectSchoolBoard(this.reportCardsSearchForm.value.boardId, true);
      this.getAvailableSections(this.reportCardsSearchForm.value.boardId, this.reportCardsSearchForm.value.classId);
      this.getGradingTerms(true);
      this.searchReportCards();
    }
    this.getSchoolBoardsList();
  }
  initializeForm(): void {
    this.reportCardsSearchForm = new FormGroup({
      boardId: new FormControl(null, Validators.required),
      classId: new FormControl(null, Validators.required),
      sectionId: new FormControl(null, Validators.required),
      gradingTermId: new FormControl(null, Validators.required)
    });
  }
  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'class', header: 'Class', sort: true },
      { field: 'section', header: 'Section', sort: true },
      { field: 'rollNumber', header: 'Roll Number', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'gradingTermName', header: 'Grading Term', sort: true },
      { field: 'reportCardStatus', header: 'Report Card Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

  }
  initializeSearchViewModel(): void {
    this.reportCardSearchViewModel = {
      schoolAcademicSessionStudentId: null,
      board: [],
      studentName: [],
      gradingTermId: [],
      gradingterm: null,
      reportcardstatus: [],
      admissionNumber: null,
      rollNumber: [],
      classIds: [],
      sectionIds: [],
      studentIds: [],
      statusIds: [],
      sortOrder: 0,
      sortBy: null,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }
  searchReportCards(): void {
    if (this.reportCardsSearchForm.valid) {
      Object.assign(this.reportCardSearchViewModel, this.reportCardsSearchForm.value);
      this.setModelDataTableComponent(this.currentComponent, this.reportCardSearchViewModel);
      this.gradeReportService.studentReportsFetchReportsDetailsGet(
        this.reportCardSearchViewModel.schoolAcademicSessionStudentId,
        this.reportCardSearchViewModel.boardId,
        this.reportCardSearchViewModel.studentName,
        this.reportCardSearchViewModel.gradingTermId,
        this.reportCardSearchViewModel.gradingterm,
        this.reportCardSearchViewModel.reportcardstatus,
        this.reportCardSearchViewModel.admissionNumber,
        this.reportCardSearchViewModel.rollNumber,
        this.reportCardSearchViewModel.classId,
        this.reportCardSearchViewModel.sectionId,
        this.reportCardSearchViewModel.studentIds,
        this.reportCardSearchViewModel.statusIds,
        this.reportCardSearchViewModel.sortOrder,
        this.reportCardSearchViewModel.sortBy,
        this.reportCardSearchViewModel.pageNumber,
        this.reportCardSearchViewModel.pageSize)
        .subscribe(res => this.setReportCardDetails(res), err => this.errorResponse(err));
    }
  }
  setFormValuesToViewModel(): void {
    if (this.reportCardsSearchForm.value.boardId) {
      this.reportCardSearchViewModel.boardId = [this.reportCardsSearchForm.value.boardId];
    } else {
      this.reportCardSearchViewModel.boardId = [];
    }
    if (this.reportCardsSearchForm.value.classId) {
      this.reportCardSearchViewModel.classId = [this.reportCardsSearchForm.value.classId];
    } else {
      this.reportCardSearchViewModel.classId = [];
    }

    if (this.reportCardsSearchForm.value.sectionId) {
      this.reportCardSearchViewModel.sectionId = [this.reportCardsSearchForm.value.sectionId];
    } else {
      this.reportCardSearchViewModel.sectionId = [];
    }
    if (this.reportCardsSearchForm.value.gradingTermId) {
      this.reportCardSearchViewModel.gradingTermId = [this.reportCardsSearchForm.value.gradingTermId];
    } else {
      this.reportCardSearchViewModel.gradingTermId = [];
    }
  }
  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      componentName: this.currentComponent,
      model: this.reportCardSearchViewModel,
      filtersList: [],
      sideHeader: {
        heading: 'Students'
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
        if (!this.reportCardsSearchForm.value.boardId) {
          this.reportCardsSearchForm.controls.boardId.setValue(this.schoolBoardsList[0].value);
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
  onClassChange(classId): void {
    this.availableSections = [];
    this.gradingTermsList = [];
    this.reportCardsSearchForm.controls.sectionId.setValue(null);
    this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
    if (classId) {
      this.getAvailableSections(this.reportCardsSearchForm.value.boardId, classId);
    }
    else {
      this.availableSections = [];
    }
  }
  getGradingTerms(onManualChange = false): void {
    if (!onManualChange) {
      this.gradingTermsList = [];
      this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
    }
    if (this.reportCardsSearchForm.value.sectionId) {
      // tslint:disable-next-line: max-line-length
      this.gradeTermConfigurationService.gradingTermConfigurationGradingTermsByClassidAndSectionidAndBoardidGet(this.reportCardsSearchForm.value.classId, [this.reportCardsSearchForm.value.sectionId], this.reportCardsSearchForm.value.boardId)
        .subscribe(res => this.gradingTermsList = res.listViews);
    }
  }
  displayFn(data: any): void {
    return data ? data.studentNames : undefined;
  }
  onSelectAction(item): void {
    if (item.operationName === AppSettings.GENERATE_INCOMPLETE_REPORT_CARDS.toLowerCase()) {
      this.gradeReportService.reportsGeneratePendingIncompleteReportsPost(null, this.reportCardSearchViewModel.boardId,
        this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId,
        this.reportCardSearchViewModel.sectionId)
        .subscribe(res => this.onClearReportCard(res), err => this.errorResponse(err));
    } else if (item.operationName === AppSettings.CLEAR_ALL_REPORT_CARDS.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_CLEAR_REPORT_CARDS, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(actionDailog => {
        if (actionDailog === AppSettings.YES) {
          // tslint:disable-next-line: max-line-length
          this.gradeReportService.reportsClearStudentReportsDelete(null, this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId,
            this.reportCardSearchViewModel.sectionId)
            .subscribe(res => this.onClearReportCard(res), err => this.errorResponse(err));
        }
      });
    } else if (item.operationName === AppSettings.APPROVE_ALL_PENDING_REPORT_CARDS.toLowerCase()) {
      this.gradeReportService.reportsApprovePendingapprovalReportsPut(null,
        this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId,
        this.reportCardSearchViewModel.sectionId)
        .subscribe(res => this.onClearReportCard(res), err => this.errorResponse(err));
    } else if (item.operationName === AppSettings.DOWNLOAD_APPROVED_REPORT_CARD.toLowerCase()) {
      this.gradeReportService.reportsApprovedReportFilesGet(null,
        this.reportCardSearchViewModel.gradingTermId, this.reportCardSearchViewModel.classId,
        this.reportCardSearchViewModel.sectionId)
        .subscribe(res => this.onDownloadCard(res), err => this.errorResponse(err));
    }
  }
  setReportCardDetails(response): void {
    this.reportCardDetails = response;
    this.operationsForSummary = [
      {
        name: AppSettings.GENERATE_INCOMPLETE_REPORT_CARDS_OPERATION,
        icon: AppSettings.GENERATE,
        operationName: AppSettings.GENERATE_INCOMPLETE_REPORT_CARDS
      },
      {
        name: AppSettings.CLEAR_ALL_REPORT_CARDS_OPERATION,
        icon: AppSettings.CLEAR_ALL,
        operationName: AppSettings.CLEAR_ALL_REPORT_CARDS
      },
      {
        name: AppSettings.APPROVE_ALL_PENDING_REPORT_CARDS_OPERATION,
        icon: AppSettings.DONE,
        operationName: AppSettings.APPROVE_ALL_PENDING_REPORT_CARDS
      }
    ];

    this.operations = [
      {
        name: (AppSettings.GENERATE_REPORT_CARD_OPERATION),
        icon: AppSettings.GENERATE,
        operationName: AppSettings.GENERATE_REPORT_CARD
      },
      {
        name: (AppSettings.APPROVE_PENDING_REPORT_CARD_OPERATION),
        icon: AppSettings.DONE,
        operationName: AppSettings.APPROVE_PENDING_REPORT_CARD
      },
      {
        name: AppSettings.VIEW_REPORT_CARD_DATA_OPERATION,
        icon: AppSettings.DETAILS_ICON,
        operationName: AppSettings.VIEW_REPORT_CARD_DATA
      },
      {
        name: AppSettings.CLEAR_REPORT_CARD_DATA_OPERATION,
        icon: AppSettings.CLEAR_ICON,
        operationName: AppSettings.CLEAR_REPORT_CARD_DATA,
      },
      {
        name: AppSettings.VIEW_REPORT_CARD_OPERATION,
        icon: AppSettings.DOWNLOAD,
        operationName: AppSettings.VIEW_REPORT_CARD
      }
    ];
    const data = this.reportCardDetails.gradeTermStudenSummaryView.list;
    let attachments = 0;
    this.reportCardDetails.gradeTermStudenSummaryView.list.forEach(element => {
      if (element.gradingTermDataSummaryId || element.statusCode === 'RPTG_PA') {
        element.operations = this.operations;
      } else {
        element.operations = this.operations.filter(e => e.operationName !==
          (AppSettings.VIEW_REPORT_CARD) && e.operationName !== (AppSettings.CLEAR_REPORT_CARD_DATA) && e.operationName !== (AppSettings.APPROVE_PENDING_REPORT_CARD));
      }
      attachments += element.attachmentId;
    });
    if (attachments) {
      this.operationsForSummary.push({
        name: AppSettings.DOWNLOAD_APPROVED_REPORT_CARD_OPERATION,
        icon: AppSettings.DOWNLOAD,
        operationName: AppSettings.DOWNLOAD_APPROVED_REPORT_CARD
      });
    }
    this.tableSettings = {
      rows: data,
      columns: this.columns,
      tablename: 'Students',
      componentName: this.currentComponent,
      model: this.reportCardSearchViewModel,
      filtersList: response.filters,
      sideHeader: {
        heading: 'Students'
      }
    };
    this.scrollIntoViewById('report-card-table');
  }
  onClear(onManualChange = false): void {
    this.classesList = [];
    this.availableSections = [];
    this.gradingTermsList = [];
    this.reportCardsSearchForm.controls.classId.setValue(null);
    this.reportCardsSearchForm.controls.sectionId.setValue(null);
    this.reportCardsSearchForm.controls.gradingTermId.setValue(null);
    if (!onManualChange) {
      this.initializeTableSettings();
      this.initializeSearchViewModel();
      this.reportCardDetails.gradeTermStudenSummaryView.list = [];
      this.setModelDataTableComponent(this.currentComponent, null);
    }
  }
  getTableData(_event): void {
    this.reportCardSearchViewModel = _event;
    this.searchReportCards();
  }
  onRowActions(action): void {
    if (action.operation ===
      (AppSettings.VIEW_REPORT_CARD_DATA.toLowerCase())) {
      this.router.navigate([RouteConfig._ReportCard_Based_On_Student + action.clickedRow.id + '/' + action.clickedRow.gradingTermId]);
    } else if (action.operation === (AppSettings.GENERATE_REPORT_CARD.toLowerCase())) {
      const params = {
        gradeTermId: action.clickedRow.gradingTermId,
        studentIds: [action.clickedRow.schoolAcademicSessionStudentId],
        classId: action.clickedRow.classId,
        sectionId: action.clickedRow.sectionId,
      };
      this.generateReportCard(params);
    } else if (action.operation === AppSettings.CLEAR_REPORT_CARD_DATA.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_CLEAR_REPORT_CARD, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(actionDailog => {
        if (actionDailog === AppSettings.YES) {
          // tslint:disable-next-line: max-line-length
          this.gradeReportService.reportsClearStudentReportsDelete([action.clickedRow.schoolAcademicSessionStudentId], action.clickedRow.gradingTermId, action.clickedRow.classId, action.clickedRow.sectionId)
            .subscribe(res => this.onClearReportCard(res), err => this.errorResponse(err));
        }
      });
    } else if (action.operation === AppSettings.APPROVE_PENDING_REPORT_CARD.toLowerCase()) {
      this.gradeReportService.reportsApprovePendingapprovalReportsPut([action.clickedRow.schoolAcademicSessionStudentId],
        action.clickedRow.gradingTermId, action.clickedRow.classId,
        action.clickedRow.sectionId)
        .subscribe(res => this.onApproveReportCard(res), err => this.errorResponse(err));
    } else if (action.operation === AppSettings.VIEW_REPORT_CARD.toLowerCase() && (action.clickedRow.gradingTermDataSummaryId || action.clickedRow.statusCode === 'RPTG_PA')) {
      this.paymentService.reportPrint(action.clickedRow.gradingTermDataSummaryId)
        .subscribe(res => this.viewReportCard(res), err => this.errorResponse(err));
    }
  }
  onDownloadCard(res): void {
    if (res.attachments && res.attachments.length) {
      this.zipViewModel.fileNames = [];
      res.attachments.forEach(element => {
        this.zipViewModel.returnFileName = 'Report';
        this.zipViewModel.fileNames.push(element.fileValue);
      });
      this.zipFilesDownload();
    }
    this.searchReportCards();
  }

  onClearReportCard(res): void {
    this.openSnackBar(res.messages.ResultMessage);
    this.searchReportCards();
  }
  onApproveReportCard(res): void {
    if (res.statusCode === HttpStatus.OK) {
      this.openSnackBar(AppSettings.RPORT_APPROVED_SUCCESSFULLY);
    } else {
      this.openSnackBar(res.messages.ResultMessage);

    }
    this.searchReportCards();
  }
  zipFilesDownload(): void {
    if (this.zipViewModel.fileNames.length > 0) {
      this.storeService.storeZipPut(this.zipViewModel).subscribe(res => this.resFiles(res));
    }
    else {
      this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
    }
  }
  resFiles(data: any): void {
    this.ReturnFileName = data.extension;
    this.DownloadDoc(data.extension);
  }
  async DownloadDoc(data): Promise<void> {
    if (data !== null) {
      this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data));
      const a = document.createElement('a');
      const response = await fetch(this.storeService.getFilePath(data));
      const responseData = await response.blob();
      const file = new Blob([responseData], { type: 'application/octet-stream' });
      a.href = URL.createObjectURL(file);
      a.download = this.ReturnFileName.replace(' ', '_');
      a.click();
    }
  }
  viewReportCard(res): void {
    if (res.fileName) {
      window.open(this.storeService.getFilePath(res.fileName));
    }
    this.searchReportCards();
  }
  onAddFormClick(): void {

  }
  generateReportCard(data): void {
    this.gradeReportService.reportsGenerateStudentReportGet(data.gradeTermId, data.studentIds, data.classId, data.sectionId)
      .subscribe(res => this.onClearReportCard(res), err => { this.errorResponse(err); this.searchReportCards(); });
  }
}
