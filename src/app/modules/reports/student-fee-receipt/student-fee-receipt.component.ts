import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { Messages } from 'app/app.constants';
import { FormControl, Validators } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-student-fee-receipt',
  templateUrl: './student-fee-receipt.component.html',
  styleUrls: ['./student-fee-receipt.component.scss']
})
export class StudentFeeReceiptComponent extends CommonComponent implements OnInit {
  resultApplicationReports: any;
  studentSearch = new FormControl('', [Validators.required]);
  filterdStudents: any[];
  constructor(private schoolReportsService: SchoolReportsService, private studentService: StudentDatabaseService, private cd: ChangeDetectorRef,
    public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {

    this.studentSearch.valueChanges.debounceTime(200).subscribe((name) => {
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
      }
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.STUDENT_RECEIPT_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
    }
  }

  getSelectedStudent(data): void {
    this.schoolReportsService.studentFeeReceipts(data.id).subscribe(res => {
      this.resultApplicationReports = res;
      this.resultApplicationReports.invoicePayments.forEach(pmt => {
        pmt.expiryDate = (pmt.expiryDate == null) ? null : this.commonService.customDateFormat(pmt.expiryDate, this.getSchoolDateFormat()).date;
      });
    });

  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  reset(): void {
    this.resultApplicationReports = null;
    this.studentSearch.reset();
  }
}
