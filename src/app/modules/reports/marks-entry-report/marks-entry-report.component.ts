import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';

@Component({
  selector: 'app-marks-entry-report',
  templateUrl: './marks-entry-report.component.html',
  styleUrls: ['./marks-entry-report.component.scss']
})
export class MarksEntryReportComponent extends CommonComponent implements OnInit {
  schoolDetails: any;
  resultApplicationReports: any;
  searchForm: any;

  constructor(public schoolReportsService: SchoolReportsService, public gradeSetupService: GradeSetupService, public classTimetableService: ClassTimetableService) {
    super();
  }

  ngOnInit(): void {
    this.getClasses();
    this.searchForm = new FormGroup({
      termId: new FormControl(null),
      courseCategoryId: new FormControl(null),
      courseId: new FormControl(null),
      classId: new FormControl(null),
      sectionId: new FormControl(null)
    });
    this.schoolReportsService.getSchoolDetails().then(schoolDetails => {
      this.schoolDetails = schoolDetails;
      this.getMarksEntryReport();
    });
  }

  getMarksEntryReport(): void {
    // [this.searchForm.value.classId], [this.searchForm.value.sectionId]
    this.schoolReportsService.marksEntryReport().subscribe(res => {
      this.resultApplicationReports = res;
    });
  }

  getClasses(isManualChange = false): void {
    this.availableClasses = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.availableClasses.push({
            label: element.name,
            value: element.id
          });
        });
        if (isManualChange) {
          this.onSelectClass({ value: this.searchForm.value.classId }, isManualChange);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // on selection of class
  onSelectClass(data: any, isManualChange = false): void {
    this.availableSections = [];
    if (!isManualChange) {
      this.searchForm.controls.sectionId.setValue(null);
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
