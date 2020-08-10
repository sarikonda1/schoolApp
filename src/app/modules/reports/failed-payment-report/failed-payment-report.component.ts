import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent, AF_DATE_FORMATS } from 'app/shared/common/common.component';
import { Messages, AppSettings } from 'app/app.constants';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomDateAdapter } from 'app/shared/custom-date-adaptor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';

@Component({
  selector: 'app-failed-payment-report',
  templateUrl: './failed-payment-report.component.html',
  styleUrls: ['./failed-payment-report.component.scss'],
  providers: [StatusService, InvoiceService,
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS }]
})
export class FailedPaymentReportComponent extends CommonComponent implements OnInit {
  resultApplicationReports: any;
  columns: any[];
  searchForm: any;
  filterdStudents: any[];
  paymentStatus: any[];
  paymentTypesList: any[];

  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService, public gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService, private studentService: StudentDatabaseService, private cd: ChangeDetectorRef,
    private invoiceService: InvoiceService, private statusService: StatusService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.paymentTypes();
    this.paymentStatuses();
    this.resultApplicationReports = {
      failedPayments: []
    };
    this.searchForm = new FormGroup({
      studentSearch: new FormControl(''),
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

  setColumns(): void {
    this.columns = [
      { field: 'paymentDate', header: 'Date', sort: false, dataKey: 'paymentDate' },
      { field: 'feeAccount', header: 'Fee Account', sort: false, dataKey: 'feeAccount' },
      { field: 'studentInformatioin', header: 'Student Informatioin', sort: false, dataKey: 'studentInformatioin' },
      { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'paymentMode' },
      { field: 'amount', header: 'Amount', sort: false, dataKey: 'paymentMode' },
      { field: 'paymentStatus', header: 'Status', sort: false, dataKey: 'paymentStatus' },
      { field: 'additionalInformation', header: 'Additional Information', sort: false, dataKey: 'additionalInformation' },
      { field: 'receiptNumber', header: 'Receipt Number', sort: false, dataKey: 'receiptNumber' },
      { field: 'paymentEntryByAndDate', header: 'Entry User', sort: false, dataKey: 'paymentEntryByAndDate' }
    ];
  }

  getFailedPaymentReports(): void {
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
    this.schoolReportsService.failedPaymentsReport(beginDate, endDate, studentId, this.searchForm.value.paymentStatusId, this.searchForm.value.paymentMode).subscribe(res => {
      if (res.failedPayments.length) {
        this.resultApplicationReports = res;
        this.resultApplicationReports.failedPayments.
          push({
            paymentDate: 'Total: ', paymentMode: this.resultApplicationReports.failedPaymentsAmount.totalAmount, paymentEntryByAndDate:
              this.resultApplicationReports.failedPaymentsAmount.totalReceipts
          });
      }else {
        this.resultApplicationReports = [];
      }
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'admitted_std_report');
    }
  }

  reset(): void {
    this.searchForm.reset();
    this.resultApplicationReports = null;
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
    this.statusService.paymentStatuses(AppSettings.PAYMENT_STATUS_CATEGORY_CODE).subscribe(res => {
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

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

}
