import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { Messages } from 'app/app.constants';

export class DataItem {
  arg: string;
  val?: number;
  parentID?: string;
  capacity: number;
  strength: number;
}
@Component({
  selector: 'app-students-strength',
  templateUrl: './students-strength.component.html',
  styleUrls: ['./students-strength.component.scss']
})
export class StudentsStrengthComponent extends CommonComponent implements OnInit {
  columns: any[] = [];
  originalItems: any;
  constructor(private schoolReportsService: SchoolReportsService, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.setColumns();
    this.schoolReportsService.schoolAdmittedStudents()
      .subscribe(res => this.setSchoolDetails(res), err => this.errorResponse(err));
  }
  setColumns(): void {
    this.columns = [
      { field: 'boardName', header: 'Board', sort: false, dataKey: 'boardName' },
      { field: 'name', header: 'Section', sort: false, dataKey: 'name' },
      { field: 'strength', header: 'Strength', sort: false, dataKey: 'strength' },
      { field: 'capacity', header: 'Capacity', sort: false, dataKey: 'capacity' },
    ];
  }
  setSchoolDetails(res): void {
    this.originalItems = res;
    this.originalItems['classes'].forEach(element => {
      element['classinfo'] = [element.name, 'Current Strength ' + element.strength, 'Total Capacity ' + element.capacity].join('-');
    });

  }
  generateReport(rp: any): void {
    if (rp === 'generatePdfReport') {
      this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), Messages.STUDENT_STRENGTH_CSS);
    }
    if (rp === 'generateExcelReport') {
      for (let index = 0; index < this.originalItems.length; index++) {
        this.schoolReportsService.exportToExcel('std-strength' + index, 'students_strength_report');
      }
    }
  }
}
