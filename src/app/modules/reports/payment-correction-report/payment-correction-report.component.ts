import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { Messages, AppSettings } from 'app/app.constants';
import { CommonComponent, AF_DATE_FORMATS } from 'app/shared/common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomDateAdapter } from 'app/shared/custom-date-adaptor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';

@Component({
  selector: 'app-payment-correction-report',
  templateUrl: './payment-correction-report.component.html',
  styleUrls: ['./payment-correction-report.component.scss'],
  providers: [StatusService, InvoiceService,
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS }]
})
export class PaymentCorrectionReportComponent extends CommonComponent implements OnInit {
  columns = [];
  reportResults: any;
  searchForm: any;
  paymentTypesList: any[];
  paymentStatus: any[];
  filterdStudents: any[];
  constructor(public schoolReportsService: SchoolReportsService, public commonService: CommonService, public gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService, private studentService: StudentDatabaseService, private cd: ChangeDetectorRef,
    private invoiceService: InvoiceService, private statusService: StatusService) {
    super();
  }

  ngOnInit(): void {
    this.paymentTypes();
    this.paymentStatuses();
    this.columns = [
      { field: 'studentInformatioin', header: 'Student Information', sort: false, dataKey: 'studentInformatioin' },
      { field: 'paymentReceiptNo', header: 'Receipt No', sort: false, dataKey: 'paymentReceiptNo' },
      { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'paymentMode' },
      { field: 'paymentEntryByAndDate', header: 'Payment Entry By - Date', sort: false, dataKey: 'paymentEntryByAndDate' },
      { field: 'paymentStatus', header: 'Payment Status', sort: false, dataKey: 'paymentStatus' },
      { field: 'paymentCorrections', header: 'Payment Corrections', sort: false, dataKey: 'paymentCorrections' },
      { field: 'correctionEntryDate', header: 'Correction Entry Date', sort: false, dataKey: 'correctionEntryDate' },
      { field: 'paymentCorrectionStatus', header: 'Correction Status', sort: false, dataKey: 'paymentCorrectionStatus' },
      { field: 'paymentCorrectionApprovedBy', header: 'Correction Approved By', sort: false, dataKey: 'paymentCorrectionApprovedBy' }
    ];
    this.searchForm = new FormGroup({
      studentSearch: new FormControl(null),
      paymentStatusId: new FormControl(null),
      paymentMode: new FormControl(null),
      classId: new FormControl(null),
      sectionId: new FormControl(null),
      inputDate: new FormControl(null)
    });
    this.searchForm.controls['studentSearch'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.filterdStudents = [];
        this.studentService.studentNamesBaseOnAcademicSession(parseInt(this.getTokenParam('_as'), 10), null, null, null, name).subscribe((res) => {
          this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdStudents = [];
        this.cd.detectChanges();
      }
    });
  }

  getPaymentCorrectionReport(): void {
    let beginDate = null;
    let endDate = null;
    let studentId = '';
    if (this.searchForm.value.inputDate != null) {
      beginDate = this.searchForm.value.inputDate.begin.format(AppSettings.API_DATE_PATTERN);
      endDate = this.searchForm.value.inputDate.end.format(AppSettings.API_DATE_PATTERN);
    }
    if (this.searchForm.value.studentSearch) {
      studentId = this.searchForm.value.studentSearch.schoolAcademicSessionStudentId;
    }
    // [studentId]
    this.schoolReportsService.studentPaymentCorrections(beginDate, endDate,
      [studentId] , [this.searchForm.value.paymentStatusId], [this.searchForm.value.paymentMode]).subscribe(res => {
        if (res.paymentCorrections.length) {
          this.reportResults = res;
          this.reportResults.paymentCorrections.push({ studentInformatioin: 'Total', paymentCorrectionApprovedBy: this.reportResults.paymentCorrections.length });
        }else {
          this.reportResults = [];
        }
      });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('pmt-cor-rpt', 'payment_correction_report');
    }
  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  getClasses(isManualChange = false): void {
    this.availableClasses = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.availableClasses.push({
            label: element.name,
            value: element.id
          });
        });
        if (isManualChange) {
          this.onSelectClass({ value: this.searchForm.value.classId }, isManualChange);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // on selection of class
  onSelectClass(data: any, isManualChange = false): void {
    this.availableSections = [];
    if (!isManualChange) {
      this.searchForm.controls.sectionId.setValue(null);
    }
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(response => {
      if (response.classTimetableSectionsView != null) {
        if (response.classTimetableSectionsView.length) {
          response.classTimetableSectionsView.map(x => {
            this.availableSections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  paymentTypes(): void {
    this.paymentTypesList = [];
    this.invoiceService.paymentTypes().subscribe(
      data => {
        if (data.commonViewModel) {
          if (AppSettings.PARENT === this.getTokenParam('_ut')) {
            this.paymentTypesList = data.commonViewModel.filter(e => e.code !== AppSettings.PAYMENT_TYPE_ONLINE);
          } else {
            this.paymentTypesList = data.commonViewModel;
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  paymentStatuses(): void {
    this.paymentStatus = [];
    this.statusService.paymentStatuses(AppSettings.PAYMENT_CORRECTION_STATUS_CATEGORY_CODE).subscribe(res => {
      if (res.listViews && res.listViews.length) {
        res.listViews.forEach(element => {
          this.paymentStatus.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  reset(): void {
    this.searchForm.reset();
    this.reportResults = null;
  }


}
