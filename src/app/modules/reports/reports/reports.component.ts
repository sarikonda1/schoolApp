import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent extends CommonComponent implements OnInit {

  reportLists = [
    { name: 'Admission Applications Summary Report', code: 'ADM_APP_SM' },
    { name: 'Inactive Students Summary Report', code: 'IN_STD_SM' },
    { name: 'Pre Addmission Student Application Report', code: 'PRE_ADM_STD_APP' },
    { name: 'Students Strength Report', code: 'STD_STR' },
    { name: 'Students Attendance Report', code: 'STD_ATD' },
    { name: 'Fee Concessions Students Report', code: 'FEE_CON_STD' },
    { name: 'Staff Attendance Summary Report', code: 'STF_ATD' },
    { name: 'Payment Corrections Report', code: 'PMT_COR' },
    { name: 'Admitted Student Applications Report', code: 'ADM_STD_RPT' },
    { name: 'Failed Payments Report', code: 'FAIL_PMT_RPT' },
    { name: 'Payment Due Report', code: 'PMT_DUE_RPT' },
    { name: 'Fee Collection Report', code: 'FEE_COL_RPT' },
    { name: 'Examination Schedule Report', code: 'EXE_SCH_RPT' },
    { name: 'Student Receipt Report', code: 'STD_RCPT_RPT' },
    // { name: 'Marks Entry Report', code: 'MARKS_ENTRY_RPT' }
  ].sort((a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });
  slectedReportGeneration: any;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onSelectReport(evnt: any): void {
    this.slectedReportGeneration = evnt;
  }
}
