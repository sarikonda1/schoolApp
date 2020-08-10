import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'af-filters',
  templateUrl: './af-filters.component.html',
  styleUrls: ['./af-filters.component.scss']
})
export class AfFiltersComponent implements OnInit, OnChanges {


  @Input() inputFilters = [];
  @Input() isResetDisabled = [];
  @Input() isDownloadPdfDisabled = [];
  @Input() isDownloadExcelDisabled = [];

  @Output() selectFilterOption: EventEmitter<any> = new EventEmitter<any>();
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() generateReport: EventEmitter<any> = new EventEmitter<any>();

  inputFormGroup: FormGroup;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputFilters && changes.inputFilters.currentValue) {
      this.createFilterForm();
    }
  }

  ngOnInit(): void {
    if (this.inputFilters !== undefined && this.inputFilters !== null && this.inputFilters.length) {
      this.createFilterForm();
    }
  }

  filterSearch(): void {
    this.search.emit();
  }

  createFilterForm(): void {
    const group = {};
    this.inputFilters.forEach(filter => {
      if (filter.type === 'search'){
        const selectedValue = filter.options.find(x => x.isSelected === true) ? filter.options.find(x => x.isSelected === true).value : '';
        group[filter.name] = new FormControl(selectedValue);
      }
    });
    this.inputFormGroup = new FormGroup(group);
  }

  onSelectFilter(event: any, type: any): void {
    this.selectFilterOption.emit({ event: event, type: type });
  }

  reset(): void {
    this.inputFormGroup.reset();
    this.resetFilter.emit();
  }

  export(type: any): void {
    this.generateReport.emit(type);
  }
}
