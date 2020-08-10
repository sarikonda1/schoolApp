import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'af-simple-table',
  templateUrl: './af-simple-table.component.html',
  styleUrls: ['./af-simple-table.component.scss']
})
export class AfSimpleTableComponent implements OnInit, AfterViewInit {
  @Input() inputData: any;
  @Input() definedColumns = [];
  @Input() tableCaption: string;
  @Input() tableId: string;
  @Input() isPaginationReq = true;
  @Input() showPdfGeneration = true;
  @Input() showExcelGeneration = true;
  @Input() showHeader = true;
  @Input() isRowGroupingRequired = false;

  columnsToDisplay: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() generateReport: EventEmitter<any> = new EventEmitter<any>();
  spans = [];
  constructor() { }

  ngOnInit(): void {
    this.inputData = new MatTableDataSource(this.inputData);
    this.inputData.paginator = this.paginator;
    this.columnsToDisplay = this.definedColumns.map(column => column.field);
    this.spans = [];
    if (this.isRowGroupingRequired) {
      this.columnsToDisplay.forEach(columns => {
        this.cacheSpan(columns);
      });
    }
  }
  ngAfterViewInit(): void {
    if (this.inputData) {
      this.inputData.paginator = this.paginator;
    }
  }

  export(type: any): void {
    this.generateReport.emit(type);
  }

  /**
  * Evaluated and store an evaluation of the rowspan for each row.
  * The key determines the column it affects, and the accessor determines the
  * value that should be checked for spanning.
  */
  cacheSpan(key): void {
    for (let i = 0; i < this.inputData.data.length;) {
      const currentValue = this.inputData.data[i][key];
      const parentValue = this.inputData.data[i][this.columnsToDisplay[0]];
      let count = 1;
      for (let j = i + 1; j < this.inputData.data.length; j++) {
        if (parentValue === this.inputData.data[j][this.columnsToDisplay[0]]) {
          if (currentValue !== this.inputData.data[j][key]) {
            break;
          }
          count++;
        }
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col, index): void {
    return this.spans[index] && this.spans[index][col];
  }
}
