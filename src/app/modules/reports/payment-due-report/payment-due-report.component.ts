import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import * as _ from 'lodash';
import { Messages } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-payment-due-report',
  templateUrl: './payment-due-report.component.html',
  styleUrls: ['./payment-due-report.component.scss']
})
export class PaymentDueReportComponent extends CommonComponent implements OnInit {
  columns = [];
  resultApplicationReports: any;
  resultData: any[];
  schoolDetails: any;

  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.schoolReportsService.getSchoolDetails().then(schoolDetails => {
      this.schoolDetails = schoolDetails;
      this.getPaymentDueReports();
    });
  }

  setColumns(): void {
    this.columns = [
      { field: 'studentDetails', header: 'Student Details', sort: false, dataKey: 'name' },
      { field: 'invoiceNumber', header: 'Invoice Number', sort: false, dataKey: 'invoiceNumber' },
      { field: 'isuueDate', header: 'Isuue Date', sort: false, dataKey: 'isuueDate' },
      { field: 'dueDate', header: 'Due Date', sort: false, dataKey: 'dueDate' },
      { field: 'delayDays', header: 'Delay(Days)', sort: false, dataKey: 'delayDays' },
      { field: 'feeTermName', header: 'Fee Term', sort: false, dataKey: 'feeTermName' },
      { field: 'invoiceAmount', header: 'Invoice Amount', sort: false, dataKey: 'invoiceAmount' },
      { field: 'adjustedAmount', header: 'Adjustment Amount', sort: false, dataKey: 'adjustedAmount' },
      { field: 'realizedAmount', header: 'Realized Amount', sort: false, dataKey: 'realizedAmount' },
      { field: 'balanceAmount', header: 'Balance Amount', sort: false, dataKey: 'balanceAmount' },
      { field: 'invoiceDetails', header: 'Invoice Details', sort: false, dataKey: 'invoiceDetails' }
    ];
  }

  getPaymentDueReports(): void {
    this.schoolReportsService.paymentsDue().subscribe(res => {
      this.resultApplicationReports = res;
      this.resultData = [];

      this.resultApplicationReports.studentPaymentsDues.forEach(element => {
        if (element.invoices.length > 0) {
          element.invoices.forEach(invoice => {
            invoice['studentDetails'] = [element.studentDetails.name,
            element.studentDetails.admissionNumber, element.studentDetails.className + '-' + element.studentDetails.sectionName].filter(a => a).join();
            invoice.dueDate = (invoice.dueDate == null) ? null : this.commonService.customDateFormat(invoice.dueDate, this.getSchoolDateFormat()).date;
            invoice.isuueDate = (invoice.isuueDate == null) ? null : this.commonService.customDateFormat(invoice.isuueDate, this.getSchoolDateFormat()).date;

            if (invoice.invoiceDetails.length) {
              invoice.invoiceDetails.forEach(invDetails => {
                Object.assign(invoice, invDetails);
              });
            }
            Array.prototype.push.apply(this.resultData, element.invoices);
          });
        }else {
          this.resultData = [];
        }
      });
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS, 'landscape');
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('payment_due_report', 'payment_due_report');
    }
  }
}
