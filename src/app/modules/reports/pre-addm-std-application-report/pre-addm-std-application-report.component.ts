import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { Messages } from 'app/app.constants';

@Component({
  selector: 'app-pre-addm-std-application-report',
  templateUrl: './pre-addm-std-application-report.component.html',
  styleUrls: ['./pre-addm-std-application-report.component.scss']
})
export class PreAddmStdApplicationReportComponent extends CommonComponent implements OnInit {
  columns: {}[];
  resultApplicationReports: any;
  filterView = {
    classes: [],
    status: []
  };
  filters = [];
  applicants: any;
  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.getPreStudentApplicationReports(true);
  }
  customizeLabel(point): any {
    return point.argumentText + ': ' + point.valueText;
  }
  setColumns(): void {
    this.columns = [
      { field: 'studentName', header: 'Name', sort: false, dataKey: 'studentName' },
      { field: 'dateOfBirth', header: 'Date Of Birth', sort: false, dataKey: 'dateOfBirth' },
      { field: 'className', header: 'Class', sort: false, dataKey: 'className' },
      { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
      { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
      { field: 'primaryEmail', header: 'Contact Information', sort: false, dataKey: 'primaryEmail' }
    ];
  }

  getPreStudentApplicationReports(onlyFilters = false): void {
    this.schoolReportsService.getPreStudentApplicationReports(this.filterView.classes, this.filterView.status).subscribe(res => {
      if (onlyFilters) {
        this.filters = res.filters;
      } else {
        this.filters = res.filters;
        this.resultApplicationReports = res;
        this.initializeTableSettings();
      }
    });
  }


  initializeTableSettings(): void {
    if (this.resultApplicationReports.studentApplicationDetailsView) {
      this.applicants = null;
      let totalCount = null;
      if (this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length) {
        this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.forEach(element => {
          element.dateOfBirth = (element.dateOfBirth == null) ? null : this.commonService.customDateFormat(element.dateOfBirth, this.getSchoolDateFormat()).date;
        });
        this.resultApplicationReports.studentApplicationDetailsView.
          rejectedApplications.push({
            primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications'
          });
        this.applicants = this.applicants ? [this.applicants,
        this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications'].filter(a => a).join(' , ') :
          this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications';
        totalCount += this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length;
      } else {
        this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications = [];
      }

      if (this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length) {
        this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.forEach(element => {
          element.dateOfBirth = (element.dateOfBirth == null) ? null : this.commonService.customDateFormat(element.dateOfBirth, this.getSchoolDateFormat()).date;
        });
        this.resultApplicationReports.studentApplicationDetailsView.pendingApplications
          .push({
            primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications'
          });
        this.applicants = this.applicants ? [this.applicants,
        this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications'].filter(a => a).join(' , ') :
          this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications';
        totalCount += this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length;
      } else {
        this.resultApplicationReports.studentApplicationDetailsView.pendingApplications = [];
      }

      if (this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length > 0) {
        this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.forEach(element => {
          element.dateOfBirth = (element.dateOfBirth == null) ? null : this.commonService.customDateFormat(element.dateOfBirth, this.getSchoolDateFormat()).date;
        });
        this.resultApplicationReports.studentApplicationDetailsView.approvedApplications
          .push({ primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications' });
        this.applicants = this.applicants ? [this.applicants,
        this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications'].filter(a => a).join(' , ') :
          this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications';
        totalCount += this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length;
      } else {
        this.resultApplicationReports.studentApplicationDetailsView.approvedApplications = [];
      }

      this.applicants = this.applicants ? [this.applicants,
      '       Total: ' + totalCount].filter(a => a).join() : null;
    }

  }

  onSelectFilter(event: any): void {
    if (event.type === 'Class') {
      this.filterView.classes.push(event.event.value);
    }
    if (event.type === 'Status') {
      this.filterView.status.push(event.event.value);
    }
  }

  reset(): void {
    this.filterView.classes = [];
    this.filterView.status = [];
    this.resultApplicationReports = null;
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'payment_due_report');
    }
  }

  createResultRow(data: any, count: any, key: any): any {
    return data.push({ primaryEmail: 'Total: ' + count + key });
  }
}
