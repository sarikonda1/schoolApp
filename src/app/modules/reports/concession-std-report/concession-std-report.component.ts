import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { Messages } from 'app/app.constants';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormControl } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';

@Component({
  selector: 'app-concession-std-report',
  templateUrl: './concession-std-report.component.html',
  styleUrls: ['./concession-std-report.component.scss']
})
export class ConcessionStdReportComponent extends CommonComponent implements OnInit {
  columns: any[];
  resultSetReport: any;
  classId = new FormControl('');
  constructor(public schoolReportsService: SchoolReportsService, public gradeSetupService: GradeSetupService) {
    super();
  }

  ngOnInit(): void {
    this.getClasses();
  }

  getStudentConcessions(): void {
    this.schoolReportsService.studentsFeeConcessions(this.classId.value).subscribe(res => {
      this.resultSetReport = res;
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('adm-app-summary'), Messages.FEE_CONCESSION_CSS, 'portrait');
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
    }
  }

  getClasses(): void {
    this.availableClasses = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.availableClasses.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  reset(): void{
    this.classId.reset();
    this.resultSetReport = null;
  }

}
