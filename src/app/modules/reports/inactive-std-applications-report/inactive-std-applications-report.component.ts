import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { Messages } from 'app/app.constants';
import { FormControl, FormBuilder } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';

@Component({
  selector: 'app-inactive-std-applications-report',
  templateUrl: './inactive-std-applications-report.component.html',
  styleUrls: ['./inactive-std-applications-report.component.scss']
})
export class InactiveStdApplicationsReportComponent extends CommonComponent implements OnInit {

  columns = [];
  resultApplicationReports: any;
  searchForm: any;
  constructor(public schoolReportsService: SchoolReportsService, public commonService: CommonService, private _fb: FormBuilder, public gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.getClasses();
    this.intiazilizeForm();
  }

  setColumns(): void {
    this.columns = [
      { field: 'name', header: 'Name', sort: false, dataKey: 'name' },
      { field: 'status', header: 'Status', sort: false, dataKey: 'status' },
      { field: 'classAndSection', header: 'Class And Section', sort: false, dataKey: 'classAndSection' },
      { field: 'dateOfBirth', header: 'DOB', sort: false, dataKey: 'dateOfBirth' },
      { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
      { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
      { field: 'contactInformation', header: 'Contact Information', sort: false, dataKey: 'contactInformation' },
      { field: 'admissionNumber', header: 'Admission Number', sort: false, dataKey: 'admissionNumber' },
      { field: 'studentGroup', header: 'Student Group', sort: false, dataKey: 'studentGroup' },
      { field: 'feeConcessionGroup', header: 'Fee Concession Group', sort: false, dataKey: 'feeConcessionGroup' },
    ];
  }

  getInactiveStdApplicationsReport(): void {
    this.schoolReportsService.inActiveStudentsReports([this.searchForm.value.statusId], [this.searchForm.value.classId], [this.searchForm.value.sectionId]).subscribe(res => {
      this.resultApplicationReports = res;
      this.initializeTableSettings();
    });
  }

  initializeTableSettings(): void {
    if (this.resultApplicationReports.inActiveStudentsDetailsView !== null && this.resultApplicationReports.inActiveStudentsDetailsView.length > 0) {
      this.resultApplicationReports.inActiveStudentsDetailsView.forEach(element => {
        element.dateOfBirth = (element.dateOfBirth == null) ? null : this.commonService.customDateFormat(element.dateOfBirth, this.getSchoolDateFormat()).date;
      });
      this.resultApplicationReports.inActiveStudentsDetailsView
        .push({ feeConcessionGroup: 'Total: ' + this.resultApplicationReports.inActiveStudentsCount + ' Inactive Students' });
    }
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.COMMON_TABLE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('inactive-std-app', 'inactive_std_sum_report');
    }
  }

  reset(): void {
    this.searchForm.reset();
    this.resultApplicationReports = null;
  }

  intiazilizeForm(): void {
    this.searchForm = this._fb.group({
      classId: new FormControl(null),
      sectionId: new FormControl(null),
      statusId: new FormControl(null)
    });
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
  // on selection of class
  onSelectClass(data: any): void {
    this.availableSections = [];
    this.searchForm.controls.sectionId.setValue(null);
    if (!data.value) {
      return;
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
}
