import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { Messages } from 'app/app.constants';
@Component({
  selector: 'app-adm-app-summary-report',
  templateUrl: './adm-app-summary-report.component.html',
  styleUrls: ['./adm-app-summary-report.component.scss']
})
export class AdmAppSummaryReportComponent extends CommonComponent implements OnInit {
  columns = [];
  resultApplicationReports: any;

  constructor(private schoolReportsService: SchoolReportsService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.getAdmAppSummaryReport();
  }

  setColumns(): void {
    this.columns = [
      { field: 'class', header: 'Class', sort: false, dataKey: 'class' },
      { field: 'totalApplicants', header: 'Total Applications', sort: false, dataKey: 'totalApplicants' },
      { field: 'approved', header: 'Approved Applications', sort: false, dataKey: 'approved' },
      { field: 'rejected', header: 'Pending Applications', sort: false, dataKey: 'rejected' },
      { field: 'pending', header: 'Rejected Applications', sort: false, dataKey: 'pending' },
      { field: 'feeCollected', header: 'Fee Collected', sort: false, dataKey: 'feeCollected' }
    ];
  }

  getAdmAppSummaryReport(): void {
    this.schoolReportsService.studentsApplicationSummary().subscribe(res => {
      this.resultApplicationReports = res;
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('adm-app-summary'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
    }
  }
}
