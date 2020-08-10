import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { Messages } from 'app/app.constants';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl } from '@angular/forms';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';

@Component({
  selector: 'app-examination-schedule-report',
  templateUrl: './examination-schedule-report.component.html',
  styleUrls: ['./examination-schedule-report.component.scss'],
  providers: [GardeTermConfigurationService]
})
export class ExaminationScheduleReportComponent extends CommonComponent implements OnInit {
  columns: { field: string; header: string; sort: boolean; dataKey: string; }[];
  resultApplicationReports: any;
  searchForm: any;
  gradingTerms: any[];

  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService, public gradeSetupService: GradeSetupService,
    public classTimetableService: ClassTimetableService, private _gradingTermConfigurationService: GardeTermConfigurationService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.searchForm = new FormGroup({
      classId: new FormControl(null),
      sectionId: new FormControl(null),
      gradingTermId: new FormControl(null)
    });
    this.getClasses();
  }

  setColumns(): void {
    this.columns = [
      { field: 'testDate', header: 'Test Date', sort: false, dataKey: 'name' },
      { field: 'testType', header: 'Test Type', sort: false, dataKey: 'invoiceNumber' },
      { field: 'testName', header: 'Test Name', sort: false, dataKey: 'isuueDate' },
      { field: 'subject', header: 'Subject', sort: false, dataKey: 'dueDate' },
      { field: 'subjectTeacher', header: 'Subject Teacher', sort: false, dataKey: 'delayDays' },
      { field: 'testStatus', header: 'Test Status', sort: false, dataKey: 'feeTermName' }
    ];
  }

  getExaminationScheduleReport(): void {
    this.schoolReportsService.examinationSchedule([this.searchForm.value.classId], [this.searchForm.value.sectionId], [this.searchForm.value.gradingTermId]).subscribe(res => {
      this.resultApplicationReports = res;
      this.resultApplicationReports.examinationSchedules.classSectionReportDetails.forEach(classSection => {
        classSection.termDeatails.forEach(term => {
          term.testDetails.forEach(test => {
            test.testDate = (test.testDate == null) ? null : this.commonService.customDateFormat(test.testDate, this.getSchoolDateFormat()).date;
            test.subjectTeacher = test.subjectTeacher.filter(a => a).join(',');
          });
        });
      });
    });
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.EXAMINATION_SCHEDULE_CSS, 'landscape');
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('adm-report', 'fee-collection-report');
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

  getGradingTerms(): void {
    if (!this.searchForm.value.classId || !this.searchForm.value.sectionId) {
      return;
    }
    this._gradingTermConfigurationService.gradingTermsDropdownByClassSectionGet(this.searchForm.value.classId, this.searchForm.value.sectionId).subscribe(response => {
      if (response != null && response.length) {
        const gardingTermsData = [];
        response.forEach(element => {
          gardingTermsData.push({
            label: element.name,
            value: element.id
          });
        });
        this.gradingTerms = gardingTermsData;
      }
      else {
        this.gradingTerms = [];
      }
    });
  }

  reset(): void {
    this.searchForm.reset();
    this.availableSections = [];
    this.resultApplicationReports = null;
  }

}
