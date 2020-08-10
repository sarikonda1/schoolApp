import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-af-report-table',
  templateUrl: './af-report-table.component.html',
  styleUrls: ['./af-report-table.component.scss']
})
export class AfReportTableComponent implements OnInit {
  @Input() inputData = [];
  @Input() tableId: string;
  @Input() columns = {};
  objectKeys = Object.keys;
  header: any;
  constructor() { }

  ngOnInit(): void {
    this.header = this.inputData[0];
  }

}
