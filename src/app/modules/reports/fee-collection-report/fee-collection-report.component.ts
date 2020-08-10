import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { Messages, AppSettings } from 'app/app.constants';
import { CommonComponent, AF_DATE_FORMATS } from 'app/shared/common/common.component';
import { FormGroup, FormControl } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { CustomDateAdapter } from 'app/shared/custom-date-adaptor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';
@Component({
  selector: 'app-fee-collection-report',
  templateUrl: './fee-collection-report.component.html',
  styleUrls: ['./fee-collection-report.component.scss'],
  providers: [StatusService, InvoiceService,
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS }]
})
export class FeeCollectionReportComponent extends CommonComponent implements OnInit {
  columns: { field: string; header: string; sort: boolean; dataKey: string; }[];
  resultApplicationReports: any;
  searchForm: any;
  classes: any[];
  sections: any[];
  filterdStudents: any[];
  paymentTypesList: any[];
  paymentStatus: any[];
  summaryColumns: { field: string; header: string; sort: boolean; dataKey: string; }[];

  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService, public gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService, private studentService: StudentDatabaseService, private cd: ChangeDetectorRef,
    private invoiceService: InvoiceService, private statusService: StatusService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.paymentTypes();
    this.paymentStatuses();
    this.getClasses();
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
      { field: 'paymentDate', header: 'Date', sort: false, dataKey: 'name' },
      { field: 'feeAccount', header: 'Fee Account', sort: false, dataKey: 'invoiceNumber' },
      { field: 'studentInformatioin', header: 'Student Information', sort: false, dataKey: 'isuueDate' },
      { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'dueDate' },
      { field: 'paymentAmount', header: 'Amount', sort: false, dataKey: 'delayDays' },
      { field: 'paymentStatus', header: 'Status', sort: false, dataKey: 'feeTermName' },
      { field: 'paymentReceiptNo', header: 'Reciept Number', sort: false, dataKey: 'feeTermName' },
      { field: 'paymentEntryuser', header: 'Entry User', sort: false, dataKey: 'invoiceAmount' }
    ];
    this.summaryColumns = [
      { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'name' },
      { field: 'paymentStatus', header: 'Payment Status', sort: false, dataKey: 'invoiceNumber' },
      { field: 'paymentAmount', header: 'Amount', sort: false, dataKey: 'isuueDate' }
    ];
  }

  getClasses(): void {
    this.classes = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classes.push({
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
    this.sections = [];
    this.searchForm.controls.sectionId.setValue(null);
    if (!data.value) {
      return;
    }
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(response => {
      if (response.classTimetableSectionsView != null) {
        if (response.classTimetableSectionsView.length) {
          response.classTimetableSectionsView.map(x => {
            this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
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

  getFeeCollectionReport(): void {
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
    this.schoolReportsService.studentFeeCollections(beginDate, endDate, [this.searchForm.value.classId], [this.searchForm.value.sectionId],
      [studentId], [this.searchForm.value.paymentStatusId], [this.searchForm.value.paymentMode]).subscribe(res => {
        this.resultApplicationReports = res;
        if (this.resultApplicationReports.feeCollections.length) {
          this.resultApplicationReports.feeCollections.push({ paymentDate: 'Total', paymentAmount: this.resultApplicationReports.totalPaymentAmount });
        }
      });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'fee-collection-report');
    }
  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  reset(): void {
    this.searchForm.reset();
    this.sections = [];
    this.resultApplicationReports = null;
  }

}
