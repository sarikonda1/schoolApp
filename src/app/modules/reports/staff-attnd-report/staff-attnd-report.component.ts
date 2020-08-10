import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { Messages, AppSettings } from 'app/app.constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomDateAdapter } from 'app/shared/custom-date-adaptor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';
import { AF_DATE_FORMATS, CommonComponent } from 'app/shared/common/common.component';
@Component({
  selector: 'app-staff-attnd-report',
  templateUrl: './staff-attnd-report.component.html',
  styleUrls: ['./staff-attnd-report.component.scss'],
  providers: [{ provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS }]
})
export class StaffAttndReportComponent extends CommonComponent implements OnInit {

  resultApplicationReports: any;
  objectKeys = Object.keys;
  searchForm: any;
  maxDate: Date;
  constructor(public schoolReportsService: SchoolReportsService, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      fromDate: new FormControl(null, Validators.required),
      toDate: new FormControl(null, Validators.required)
    });
  }

  getStaffAttendanceReport(): void {
    if (this.searchForm.invalid) {
      return;
    }
    let beginDate = null;
    let endDate = null;
    if (this.searchForm.value.fromDate != null) {
      beginDate = this.searchForm.value.fromDate.format(AppSettings.API_DATE_PATTERN);
    }
    if (this.searchForm.value.toDate != null) {
      endDate = this.searchForm.value.toDate.format(AppSettings.API_DATE_PATTERN);
    }
    this.schoolReportsService.staffAttendanceSummaryReport(beginDate, endDate).subscribe(res => {
      this.resultApplicationReports = res.staffAttendanceSummary;
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.STAFF_ATTENDANCE_CSS, 'landscape');
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('pmt-cor-rpt', 'payment_correction_report');
    }
  }

  setValidation(): void {
    this.maxDate = new Date(this.searchForm.value.fromDate);
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() + 1));
  }
  reset(): void {
    this.resultApplicationReports = null;
    this.searchForm.reset();
  }

}
