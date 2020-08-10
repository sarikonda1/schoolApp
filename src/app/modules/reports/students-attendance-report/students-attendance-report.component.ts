import { Component, OnInit } from '@angular/core';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { Messages } from 'app/app.constants';

@Component({
  selector: 'app-students-attendance-report',
  templateUrl: './students-attendance-report.component.html',
  styleUrls: ['./students-attendance-report.component.scss']
})
export class StudentsAttendanceReportComponent extends CommonComponent implements OnInit {
  searchForm: FormGroup;
  resultApplicationReports: any;
  objectKeys = Object.keys;
  constructor(public schoolReportsService: SchoolReportsService, public commonService: CommonService, private _fb: FormBuilder, private classService: ClassesConfigService) {
    super();
  }
  ngOnInit(): void {
    this.intiazilizeForm();
    this.getBoards();
  }

  getBoards(): void {
    this.availableSchoolBoards = [];
    this.clearClassSections();
    this.classService.boardsBasedOnAcademicSession(parseInt(this.getTokenParam('_as'), 10)).subscribe(
      response => {
        if (response != null && response.listViews.length) {
          response.listViews.forEach(element => {
            this.availableSchoolBoards.push({
              label: element.name,
              value: element.id
            });
          });
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }
  clearClassSections(): void {
    this.availableClasses = [];
    this.availableSections = [];
    this.searchForm.patchValue({ classId: null, sectionId: null });
  }

  filterSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }
    const data = this.searchForm.value;
    this.schoolReportsService.classAttendanceSummary(data.classId, data.sectionId, data.boardId, data.minimumAttendanceRequired)
      .subscribe(res => this.onStudentAttendanceGet(res), err => this.errorResponse(err));
  }
  reset(): void {
    this.resultApplicationReports = null;
    this.searchForm.reset();
    this.clearClassSections();
  }
  intiazilizeForm(): void {
    this.searchForm = this._fb.group({
      classId: new FormControl(null, [Validators.required]),
      sectionId: new FormControl(null, [Validators.required]),
      boardId: new FormControl(null, [Validators.required]),
      minimumAttendanceRequired : new FormControl(null, [Validators.min(1), Validators.max(99)]),
    });
  }
  onBoardChange(event): void {
    this.clearClassSections();
    this.getAvailableClasses(event.value);
  }
  onClassChange(event): void {
    this.searchForm.patchValue({
      sectionId: null
    });
    this.availableSections = [];
    this.getAvailableSections(this.searchForm.value.boardId, this.searchForm.value.classId);
  }
  onStudentAttendanceGet(res): void {
    this.resultApplicationReports = res;
    this.resultApplicationReports['boradName'] = this.availableSchoolBoards.find(x => x.value === this.searchForm.value.boardId).label;
    this.resultApplicationReports['className'] = this.availableClasses.find(x => x.value === this.searchForm.value.classId).label;
    this.resultApplicationReports['sectionName'] = this.availableSections.find(x => x.value === this.searchForm.value.sectionId).label;
  }

  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.STUDENT_ATTENDANCE_CSS);
    }
    if (rp === 'generateExcelReport') {
      this.schoolReportsService.exportToExcel('std-atd-app', 'std_atd_report');
    }
  }

}
