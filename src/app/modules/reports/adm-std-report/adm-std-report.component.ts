import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { Messages } from 'app/app.constants';
import { FormControl } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';

@Component({
  selector: 'app-adm-std-report',
  templateUrl: './adm-std-report.component.html',
  styleUrls: ['./adm-std-report.component.scss']
})
export class AdmStdReportComponent extends CommonComponent implements OnInit {
  columns: any;
  classId = new FormControl('');
  resultApplicationReports: any;

  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService, public gradeSetupService: GradeSetupService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.getClasses();
  }

  setColumns(): void {
    this.columns = [
      { field: 'name', header: 'Name', sort: false, dataKey: 'name' },
      { field: 'dateOfBirth', header: 'Date Of Birth', sort: false, dataKey: 'dateOfBirth' },
      { field: 'classSection', header: 'Class - Section', sort: false, dataKey: 'classSection' },
      { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
      { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
      { field: 'guardianName', header: 'Guardian Name', sort: false, dataKey: 'guardianName' },
      { field: 'contact', header: 'Contact Information', sort: false, dataKey: 'contact' },
      { field: 'admissionNumber', header: 'Admission Number', sort: false, dataKey: 'admissionNumber' },
      { field: 'studentGroup', header: 'Student Group', sort: false, dataKey: 'studentGroup' },
      { field: 'feeConcessionGroups', header: 'Fee Concession Groups', sort: false, dataKey: 'feeConcessionGroups' }
    ];
  }

  getAdmittedStudentSummary(): void {
    this.schoolReportsService.admittedStudents(this.classId.value).subscribe(res => {
      this.resultApplicationReports = res;
      this.resultApplicationReports.students.forEach(element => {
        element.classSection = [element.className, element.sectionName].filter(c => c).join('-');
        element.contact = [element.contact.email1, element.contact.email2, element.contact.mobileTel, element.contact.landTel, element.contact.otherTel].filter(c => c).join(',');
        element.dateOfBirth = (element.dateOfBirth == null) ? null : this.commonService.customDateFormat(element.dateOfBirth, this.getSchoolDateFormat()).date;
      });
      this.resultApplicationReports.students
        .push({ feeConcessionGroups: 'Total: ' + this.resultApplicationReports.studentsCount + ' Admitted Students' });
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
    this.classId.reset();
    this.resultApplicationReports = null;
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
}
