import {
  Component, OnInit, ViewChild, Input, SimpleChanges, SimpleChange, OnChanges, Output, EventEmitter, TemplateRef, AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatTableDataSource, MatAccordion, MatDialog, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { fuseAnimations } from '@fuse/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';
import { CommonService } from 'app/service/common.service';
import { HostDirective } from '../host.directive';
import { AppSettings } from 'app/app.constants';
import 'rxjs/add/operator/distinctUntilChanged';
import * as moment from 'moment';
import { AF_DATE_FORMATS, CommonComponent } from '../common/common.component';
import { CustomDateAdapter } from '../custom-date-adaptor';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RangesFooterComponent } from './ranges-footer.component';
import { TimeValidator } from '../custom-timepicker/custom-timepicker.validators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]), fuseAnimations
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS },
  ],
})
export class TableComponent extends CommonComponent implements OnInit, OnChanges, AfterViewInit {
  expandedElement: any;
  rangesFooter = RangesFooterComponent;
  selectedFilters = [];
  additionalButtons = [];
  filtersForm: FormGroup;
  filtersList = [];
  selectedControl: any;
  currentFieldType: any;
  _model: any;
  accordionStep: any;
  selection = new SelectionModel<any>(true, []);
  tableData: any[] = [];
  cols: any[];
  pageSize = 50;
  pageIndex = 0;
  totalRowsCnt = 0;
  customRowsPerPageOptions: Array<number>;
  tableUsingComponent: string;
  tableCaption: string;
  activePageNumber: any;
  defaultSort: string;
  sortDirection: any;
  activeColumn = '';
  pageObject = {
    compName: '',
    pageSize: 50,
    pageIndex: 0,
    isPaginationExisted: false,
    sortOrder: 0,
    sortBy: '',
    sortDirection: 'asc',
    sortColumn: ''
  };
  filterData: MatTableDataSource<any>;

  addingFormRequired = false;
  infoRequired = false;
  infoText = '';
  addBtnName = AppSettings.NEW;
  searchCheckboxesList = [];
  isVisibleSelectAll: boolean;
  isSelectRowRequired: boolean;
  isMultiDeleteRequired = true;
  innerWidth: any;
  // Header level
  isPaginationRequired: boolean;
  displayedColumns: string[];
  // row grouping
  spans: Array<any> = [];
  formArrayList: FormArray;
  rowGroupingColumns: Array<any> = [];
  selectedList = [];
  isSelectAllChecked = false;
  // row expand
  isRowExpandRequired = false;
  hideHeader: any;
  tabTable: any;
  padding: boolean;
  disable: any;
  isRowExpanded: any;
  // dropdownChangeIndex: any;

  @ViewChild(HostDirective) appHost: HostDirective;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('tableheadercheckbox') tableheadercheckbox;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() newFilterbuttonsDisable: boolean;
  @Input() settings: MatTableDataSource<any>;
  @Input() templateRef: TemplateRef<any>;
  @Input() massActionTemplateRef: TemplateRef<any>;
  @Input() additionalExpantionPanelTemplateRef: TemplateRef<any>;
  @Input() rowExpandRef: TemplateRef<any>;
  @Input() rowTemplateRef: TemplateRef<any>;
  @Input() closeRowForm: boolean;
  @Input() showSelectAll: boolean;
  @Input() showAdditonalExpansionPanel: boolean;
  @Input() matExpansioncustomClass: boolean;
  @Input() dynamicClass: string;
  @Input() sticky = true;
  @Input() newButtonDisable = false;


  @Output() getTableData: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedRows: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowUnselect: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeRowDropdown: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteAllRows: EventEmitter<any> = new EventEmitter<any>();
  @Output() additionalButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() anchorDialogClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowBasedAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() openAddForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() radioSection: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetFilter: EventEmitter<any> = new EventEmitter<any>();
  sideHeader: string = null;
  filterForm: FormGroup;
  filterObjects = [];
  filtObject = {};
  parentColumn: any;
  tableConfig: any;
  isClientSideFilterReq = false;
  isClientSidePaginationReq = false;
  tdGroupingClass: any;


  constructor(
    private fb: FormBuilder,
    public commonService: CommonService,
    public dialogRef: MatDialog
  ) {
    super();
  }
  ngOnInit(): void {
    // this.dropdownChangeIndex = [];
    this.getdeviceSize();
  }
  ngAfterViewInit(): void {
    if (this.filterData) {
      this.filterData.paginator = this.paginator;
    }
  }

  onResize(event): void {
    this.getdeviceSize();
  }
  getdeviceSize(): void {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.closeRowForm && changes.closeRowForm.currentValue) {
      this.closePanel();
    }
    let currentPageSize = 50;
    let tableSettings: any;
    if (changes.settings && !changes.settings.currentValue) { return; }
    if (changes.settings && changes.settings.currentValue) {
      const settings: SimpleChange = changes.settings;
      tableSettings = settings.currentValue;
    }

    if (tableSettings !== undefined || tableSettings != null) {
      this.cols = [];
      if (tableSettings.columns !== undefined) {
        this.cols = tableSettings.columns;
      }
      this.spans = [];
      this.tableData = tableSettings.rows;

      if (tableSettings.isClSideFltReq && !tableSettings.isClientSidePaginationReq) {
        this.isClientSideFilterReq = tableSettings.isClSideFltReq;
        this.filterData = new MatTableDataSource(tableSettings.rows);
        const temp = {};
        this.filterObjects = [];
        this.cols.forEach(column => {
          temp[column.field] = new FormControl('');
          this.filterObjects.push({ label: column.field });
          this.filtObject[column.field] = '';
        });
        this.filterForm = new FormGroup(temp);
        this.filterData.filterPredicate = this.createFilter(this.filterObjects);
        this.filterForm.valueChanges
          .subscribe(
            field => {
              this.filterObjects.forEach(column => {
                this.filtObject[column.label] = field[column.label];
                this.filterData.filter = JSON.stringify(this.filtObject);
              });
            }
          );
      }

      if (tableSettings.isClSideFltReq && tableSettings.isClientSidePaginationReq) {
        this.isClientSideFilterReq = tableSettings.isClSideFltReq;
        this.filterData = new MatTableDataSource(tableSettings.rows);
        this.filterData.paginator = this.paginator;
        const temp = {};
        this.filterObjects = [];
        this.cols.forEach(column => {
          temp[column.field] = new FormControl('');
          this.filterObjects.push({ label: column.field });
          this.filtObject[column.field] = '';
        });
        this.filterForm = new FormGroup(temp);
        this.filterData.filterPredicate = this.createFilter(this.filterObjects);
        this.filterForm.valueChanges
          .subscribe(
            field => {
              this.filterObjects.forEach(column => {
                this.filtObject[column.label] = field[column.label];
                this.filterData.filter = JSON.stringify(this.filtObject);
              });
            }
          );
        this.isClientSidePaginationReq = tableSettings.isClientSidePaginationReq;
        setTimeout(() => this.filterData.paginator = this.paginator);
      }

      if (tableSettings.isClientSidePaginationReq && !tableSettings.isClSideFltReq) {
        this.isClientSidePaginationReq = tableSettings.isClientSidePaginationReq;
        this.filterData = new MatTableDataSource(tableSettings.rows);
        this.filterData.paginator = this.paginator;
      }
      this.isRowExpandRequired = tableSettings.isRowExpandRequired ? tableSettings.isRowExpandRequired : false;
      if (this.tableData !== undefined && this.tableData.length && tableSettings.rowGroupingColumns) {
        this.rowGroupingColumns = tableSettings.rowGroupingColumns;
        this.parentColumn = tableSettings.rowGroupingColumns[0];
        this.tableData = this.sortByColumns(tableSettings.rowGroupingColumns, this.tableData);
        this.rowGroupingColumns.forEach(columns => {
          this.cacheSpan(columns);
        });
        this.rowGroupingClasses();
      }

      if (tableSettings.headerOperations && tableSettings.headerOperations.addingForm) {
        this.addingFormRequired = tableSettings.headerOperations.addingForm.required;
        this.addBtnName = tableSettings.headerOperations.addingForm.btnName ? tableSettings.headerOperations.addingForm.btnName : this.addBtnName;
        this.disable = tableSettings.headerOperations.addingForm.disabled ? tableSettings.headerOperations.addingForm.disabled : false;
        this.additionalButtons = (tableSettings.headerOperations.additionalButtons !== undefined)
          ? tableSettings.headerOperations.additionalButtons : [];
      }

      if (tableSettings.headerOperations && tableSettings.headerOperations.additionalButtons !== undefined) {
        this.additionalButtons = tableSettings.headerOperations.additionalButtons;
      }

      if (tableSettings.headerOperations && tableSettings.headerOperations.infoButton !== undefined) {
        this.infoRequired = tableSettings.headerOperations.infoButton.required;
        this.infoText = tableSettings.headerOperations.infoButton.text;
      }

      if (tableSettings.columns && !this.cols.length) {
        tableSettings.columns.forEach((i: any) => this.cols.push(i));
      }
      this.isSelectRowRequired = tableSettings.isSelectRowRequired;
      this.isMultiDeleteRequired = (tableSettings.isMultiDeleteRequired !== undefined) ? tableSettings.isMultiDeleteRequired
        : this.isMultiDeleteRequired;

      this.totalRowsCnt = tableSettings.totalRowsCount;
      this.customRowsPerPageOptions = this.rowsPerPagination();
      this._model = tableSettings.model;
      if (this._model !== undefined) {
        currentPageSize = this._model.pageSize;
      }

      this.tableUsingComponent = tableSettings.componentName;
      this.tableCaption = tableSettings.tablename;

      // Row/column level buttons
      this.isVisibleSelectAll = tableSettings.visibleSelectAll;

      this.hideHeader = tableSettings.hideHeader ? tableSettings.hideHeader : false;
      this.tabTable = tableSettings.tabTable ? tableSettings.tabTable : false;
      this.padding = tableSettings.padding ? tableSettings.padding : false;

      // Header level buttons
      this.isPaginationRequired = tableSettings.isPaginationRequired ? tableSettings.isPaginationRequired : false;

      if (tableSettings && tableSettings.filtersList) {
        this.searchCheckboxesList = [];
        this.filtersList = tableSettings.filtersList;
        if (this.filtersList.length > 0) {
          this.selectedControl = this.filtersList[0].label;
        }
        this.filtersForm = this.createGroup(this.filtersList);
        this.createFilterSubGroup(this.searchCheckboxesList);
        this.onFiltersClick('initial', this.accordionStep !== 0 ? true : false);


      } if (!tableSettings.filtersList && tableSettings.headerOperations && tableSettings.headerOperations.sideHeader) {
        this.sideHeader = tableSettings.headerOperations.sideHeader.heading;
      }
    }

    this.displayedColumns = this.cols.map(column => column.field);
    this.defaultSort = this.displayedColumns[0];
    if (this.isSelectRowRequired) {
      if (this.cols.map(column => column.field).indexOf('select') === -1) {
        this.cols.unshift({ field: 'select', header: '', sortRequired: false, searchRequired: false });
        this.displayedColumns.unshift('select');
        this.defaultSort = this.displayedColumns[1];
      }
    }

    const pagnObject = JSON.parse(localStorage.getItem('_tc'));
    if (pagnObject && pagnObject[this.tableUsingComponent] && this.isPaginationRequired) {

      this.activeColumn = pagnObject[this.tableUsingComponent].sortColumn;
      this.sortDirection = pagnObject[this.tableUsingComponent].sortDirection;
      if (pagnObject[this.tableUsingComponent].pageSize !== undefined) {
        this.pageSize = pagnObject[this.tableUsingComponent].pageSize;
      }
      if (this._model && this._model.hasOwnProperty('pageNumber') && this._model['pageNumber'] >= 1) {
        this.pageIndex = this._model['pageNumber'] - 1;
      }
    }
    this.updateSelectedList();

    this.isSelectAllChecked = (this.tableData !== undefined && this.selectedList.length === this.tableData.length);
    if (this.tableheadercheckbox !== undefined) {
      this.tableheadercheckbox._checked = this.isSelectAllChecked;
    }
  }

  isSticky(column: any): boolean {
    if (column.field === 'select') {
      return this.sticky && true;
    }

    const fistColumnHeader = (this.displayedColumns[0] === 'select') ? this.displayedColumns[1] : this.displayedColumns[0];
    return this.sticky && (column.field === fistColumnHeader);
  }

  isStickyEnd(column: any): boolean {
    return this.sticky && (column.field === 'actions' || column.field === 'view' || column.field === 'edit' || column.field === 'delete');
  }

  rowsPerPagination(): number[] {
    return [10, 20, 30, 40, 50, 75, 100];
  }

  openFilter(): void {
    this.accordionStep = 0;
  }

  addForm(): void {
    this.commonService.setOverlay(AppSettings.SHOW);
    this.accordionStep = 1;
    this.openAddForm.emit();
  }



  closePanel(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.accordionStep = '';
    // this.selectedList = [];
  }

  createGroup(data: any): FormGroup {
    this.searchCheckboxesList = [];
    const group = this.fb.group({});
    data.forEach((control: any) => {
      this.formArrayList = new FormArray([]);
      if (control.type === 'search' || control.type === 'checkboxes') {
        group.addControl(control.name, this.formArrayList);
        if (control.checkedList) {
          this.searchCheckboxesList.push({
            cntrlName: control.name,
            options: control.options,
            chkdList: control.checkedList
          });
        } else {
          this.searchCheckboxesList.push({
            cntrlName: control.name,
            options: control.options
          });
        }
      } else {
        if (control.value) {
          if (control.type === 'date' && this._model[control.name + 'Begin'] !== undefined && this._model[control.name + 'Begin'] !== '') {
            const dateRangeObj = { begin: new Date(this._model[control.name + 'Begin']), end: new Date(this._model[control.name + 'End']) };
            group.addControl(control.name, new FormControl(dateRangeObj));
          }else if (control.type === 'time'){
            group.addControl(control.name, new FormControl(control.value, TimeValidator.validateOnlyTimeRequired));
          }
          else {
            group.addControl(control.name, new FormControl(control.value));
          }
        }else if (control.type === 'time'){
          group.addControl(control.name, new FormControl('', TimeValidator.validateOnlyTimeRequired));
        } else {
          group.addControl(control.name, new FormControl(''));

        }
      }
    });
    return group;
  }

  createFilterSubGroup(val: any): void {
    val.forEach((a: any) => {
      const control = <FormArray>this.filtersForm.get(a.cntrlName);
      if (a.options && a.options.length > 0) {

        a.options.forEach((x: any) => {
          const grp = this.fb.group({});
          const vx = x.value;
          if (x.isSelected) {
            grp.addControl(vx, new FormControl(true));
          } else {
            grp.addControl(vx, new FormControl(false));
          }
          control.push(grp);
        });

      }
    });
  }

  resetFilters(): void {
    this.selectedFilters = [];
    this.filtersForm.reset();
    this.onFiltersClick('', true);
    this.resetFilter.emit();
  }

  removeFilter(val): void {
    if (val['id']) {
      const foundIndex = this.selectedFilters.findIndex((elt: any) => {
        return (elt['id'] === val['id']);
      });
      this.selectedFilters.splice(foundIndex, 1);
      for (const elt of this.filtersForm.value[val.filterName]) {
        if (elt[val['id']]) {
          elt[val['id']] = false;
          (<FormArray>this.filtersForm.controls[val.filterName]).controls.forEach((v, k) => {
            if (v['controls'][val['id']] !== undefined) {
              v['controls'][val['id']].setValue(false);
            }
          });
        }
      }
    } else {
      const foundIndex1 = this.selectedFilters.findIndex((elt: any) => {
        return (elt['filterName'] === val['filterName']);
      });
      this.selectedFilters.splice(foundIndex1, 1);

      if (this.filtersForm.value[val.filterName]) {
        this.filtersForm.controls[val.filterName].setValue('');
      }
    }
    this.onFiltersClick('', false);
  }

  searchType(searchVal: string, controlName: string): void {
    this.filtersList.find((e, i) => {
      if ((e.name === controlName)) {
        e.options.filter(function (element): boolean {
          if (searchVal === '' || (element.label).toUpperCase().includes(searchVal.toUpperCase())) {
            element.hide = false;
          }
          else {
            element.hide = true;
          }
          return true;
        });
        return e.options;
      }

    });
  }


  // on submit filter form preparing model object.
  onFiltersClick(init: any, closePanel?: boolean): boolean {
    if (this.filtersForm.invalid) {
      return false;
    }
    if (closePanel === true) {
      this.closePanel();
    }
    const filterPostObj = {};
    this.selectedFilters = [];
    let keys = [];
    const formValue = this.filtersForm.value;
    const formValKeys = Object.keys(formValue);

    formValKeys.forEach((elt: any, i: number) => {
      if ((Array.isArray(formValue[elt]) && formValue[elt].length > 0)) {

        const filters = [];
        formValue[elt].forEach((e, ei) => {
          const k = Object.keys(e)[0];
          if (e[k]) {
            filters.push(k);
            this.selectedFilters.push({ name: elt, id: k });
          }
        });
        filterPostObj[elt] = filters;
      } else {
        if (formValue[elt] !== '' && formValue[elt] != null
          && formValue[elt] !== undefined && ((typeof formValue[elt] === 'object') ||
            (typeof formValue[elt] === 'string' && (formValue[elt].slice(-1) !== ':' && formValue[elt].charAt(0) !== ':')))) {
          const filters = [];
          filters.push(formValue[elt]);
          filterPostObj[elt] = filters;
          this.selectedFilters.push({ name: elt, value: formValue[elt] });
        }
      }
    });
    this.selectedFilters.forEach((val, i) => {
      this.filtersList.forEach((e) => {
        if (val.name === e.name) {
          val['filterName'] = e.name;
          val['name'] = e.label;
          switch (e.type) {
            case 'date':
              if (val.value.begin) {
                val.label = moment(val.value.begin, this.getSchoolDateFormat()).format(this.getSchoolDateFormat()) +
                  ' - ' + moment(val.value.end).format(this.getSchoolDateFormat());
              }
              else {
                val.label = (typeof val.value === 'object') ? '' : val.value;
              }
              break;
            case 'search':
              e.options.forEach((ee: any) => {
                if (ee.value === val.id) {
                  val.label = ee.label;
                  ee.isSelected = true;
                }
              });
              break;
            default:
              val.label = val.value;
          }
        }
      });
    });

    keys = Object.keys(filterPostObj);
    const sortBy = this._model.sortBy;
    const sortOrder = this._model.sortOrder;
    const pageNumber = this._model.pageNumber;
    const pageSize = this.pageSize;
    this._model = {};
    this._model.pageNumber = pageNumber;
    this._model.pageSize = pageSize;
    this._model.sortBy = sortBy;
    this._model.sortOrder = sortOrder;
    this.pageObject.sortDirection = (sortOrder === 1) ? 'desc' : 'asc';
    this.pageObject.sortColumn = (this._model.sortBy) ? this._model.sortBy.charAt(0).toLowerCase() + this._model.sortBy.slice(1) : '';

    keys.forEach((val: any, i) => {
      this.currentFieldType = '';
      this.filtersList.forEach((e) => {
        if ((e.name === val)) {
          this.currentFieldType = e.type;
        }
      });
      if (this.currentFieldType === 'date') {
        if (filterPostObj[val][0].begin !== undefined) {

          this._model[val] = moment(filterPostObj[val][0].begin).format(this.getSchoolDateFormat()) +
            ' - ' + moment(filterPostObj[val][0].end).format(this.getSchoolDateFormat());
          this._model[val + 'Begin'] = moment(filterPostObj[val][0].begin).format(AppSettings.API_DATE_PATTERN);
          this._model[val + 'End'] = moment(filterPostObj[val][0].end).format(AppSettings.API_DATE_PATTERN);
        }
        else {
          this._model[val] = (typeof filterPostObj[val] === 'object') ? '' : filterPostObj[val];
        }


      }
      else if (this.currentFieldType === 'time') {
        this._model[val] = filterPostObj[val];
        const timeRanges = filterPostObj[val][0].split('-');
        this._model[val + 'Begin'] = timeRanges[0];
        this._model[val + 'End'] = timeRanges[1];
      }
      else {

        this._model[val] = filterPostObj[val];
      }
    });

    if (this.selectedFilters.length === 0) {
      this.closePanel();
    }

    if (init !== 'initial') {

      this.pageObject.compName = this.tableUsingComponent;
      this.pageObject.pageSize = this.pageSize;
      this.pageObject.pageIndex = 0;
      this._model.pageNumber = 1;
      this.pageObject.isPaginationExisted = true;
      this.updateTableComponentObjectData();
      this.getTableData.emit(this._model);
      this.selectedList = [];
      this.isSelectAllChecked = false;
      this.toggleSelectAll(this.isSelectAllChecked);
    }
  }

  customSort(event: any): void {
    this.sortDirection = event.direction;
    this._model.sortBy = event.active.charAt(0).toUpperCase() + event.active.slice(1);
    this._model.sortOrder = (event.direction === 'desc') ? 1 : 0;
    // page size parent to child
    this._model.pageSize = this.pageSize;
    this.activeColumn = event.active;
    this.pageObject.sortDirection = event.direction;
    this.pageObject.sortColumn = event.active;
    this.pageObject.sortOrder = this._model.sortOrder;
    this.pageObject.pageSize = this.pageSize;
    this.updateTableComponentObjectData();
    this.getTableData.emit(this._model);
    this.selectedList = [];
    this.isSelectAllChecked = false;
    this.toggleSelectAll(this.isSelectAllChecked);
  }

  paginate(event: any): void {
    if (event.pageSize < this.pageSize){
      setTimeout(() => {
        this.scrollIntoView('app-table');
      }); 
    }
    this.pageObject.compName = this.tableUsingComponent;
    this.pageObject.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.activePageNumber = event.pageIndex + 1;
    this.pageObject.pageIndex = event.pageIndex + 1;
    this._model.pageNumber = event.pageIndex + 1;

    this.pageObject.isPaginationExisted = true;
    this.pageSize = event.pageSize;
    this._model.pageSize = event.pageSize;
    this.pageObject.pageSize = event.pageSize;
    this.updateTableComponentObjectData();
    this.getTableData.emit(this._model);
    /*
      * Unselecting the previous records while navigating to other page
     */

    this.selectedList = [];
    this.isSelectAllChecked = false;
    this.toggleSelectAll(this.isSelectAllChecked);
  }

  onRowSelect(row: any, event): void {
    row.isCheck = event.checked;
    if (!event.checked) {
      this.customRowUnselect(row);
      this.updateSelectedList();
    } else {
      this.customRowSelect(row);
      this.updateSelectedList();
    }
    this.isSelectAllChecked = (this.selectedList.length === this.tableData.length);
    if (this.tableheadercheckbox !== undefined) {
      this.tableheadercheckbox._checked = this.isSelectAllChecked;
    }
    this.selectedRows.emit(this.selectedList);
  }


  customRowSelect(data: any): void {
    this.rowSelect.emit(data);
    this.selectedList.push(data);
    if (this.rowGroupingColumns != null && this.rowGroupingColumns.length > 0) {
      const t = this.selectedList.filter(x => x.id === data.id);
      this.tableData.forEach((tbdata) => {
        t.forEach(seldata => {
          if (tbdata.id === seldata.id) {
            tbdata.isCheck = true;
          }
        });
      });
    }
  }

  customRowUnselect(data: any): void {
    this.rowUnselect.emit(data);
    if (this.rowGroupingColumns != null && this.rowGroupingColumns.length > 0) {
      const t = this.selectedList.filter(x => x.id === data.id);
      this.tableData.forEach((tbdata) => {
        t.forEach(seldata => {
          if (tbdata.id === seldata.id) {
            tbdata.isCheck = false;
          }
        });
      });
      this.selectedList = this.selectedList.filter(x => x.id !== data.id);
    }
    else {
      const index = this.selectedList.findIndex(x => x.id === data.id);
      this.selectedList.splice(index, 1);
    }
  }



  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isSelectAllChecked = !(this.selectedList.length === this.tableData.length);
    this.toggleSelectAll(this.isSelectAllChecked);
    if (this.tableheadercheckbox !== undefined) {
      this.tableheadercheckbox._checked = this.isSelectAllChecked;
    }
  }

  toggleSelectAll(isChecked): void {
    this.isSelectAllChecked = isChecked;
    this.selectedList = [];
    this.tableData.map(row => {
      if (row.error === undefined || row.error === null) {
        row.isCheck = isChecked;
        if (isChecked) {
          this.selectedList.push(row);
        }
      }
    });
    this.selectedRows.emit(this.selectedList);
  }

  updateSelectedList(): void {
    this.selectedList = [];
    if (this.tableData !== undefined) {
      this.tableData.map(row => {
        if (row.isCheck) {
          this.selectedList.push(row);
        }
      });
    }
  }



  onDeleteAllRowsClick(): void {
    this.deleteAllRows.emit();
  }

  onAdditionalButtonClick(clickAction: any): void {
    this.additionalButtonClick.emit(clickAction);
  }

  onAnchorDialogClick(row: any): void {
    this.anchorDialogClick.emit(row);
  }

  // row/column level events
  rowWiseAction(operationName: string, data: any): void {
    switch (operationName.toLowerCase()) {
      case 'edit':
      case 'clone':
      case 'details':
        this.commonService.setOverlay(AppSettings.SHOW);
        this.accordionStep = 1;
        break;
    }
    this.rowBasedAction.emit({ operation: operationName.toLowerCase(), clickedRow: data });
  }



  onDropdownChange(data: any, newValue: any, columnIndex: any, rowIndex: any): void {
    data['newValue'] = newValue;
    data['selectedList'] = this.selectedList;
    // this.dropdownChangeIndex['spinner_' + rowIndex + '_' + columnIndex] = true;
    // console.log(this.dropdownChangeIndex);
    this.changeRowDropdown.emit(data);
  }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key): void {
    for (let i = 0; i < this.tableData.length;) {
      const currentValue = this.tableData[i][key];
      const parentValue = this.tableData[i][this.parentColumn];
      let count = 1;
      for (let j = i + 1; j < this.tableData.length; j++) {
        if (parentValue === this.tableData[j][this.parentColumn]) {
          if (currentValue !== this.tableData[j][key]) {
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

  showAllOptions(current): void {
    if (!current) {
      this.filtersList.forEach(obj => {
        obj.options.forEach(element => {
          element.hide = false;
        });
      });
    }
  }

  updateTableComponentObjectData(): void {
    const pagnObj = JSON.parse(localStorage.getItem('_tc')) || {};
    this.pageObject.compName = this.tableUsingComponent;
    pagnObj[this.tableUsingComponent] = this.pageObject;
    pagnObj[this.tableUsingComponent]['model'] = this._model;
    localStorage.setItem('_tc', JSON.stringify(pagnObj));

  }


  openInfoDialog(): void {
    this.getHelpText(this.infoText);
  }

  focusForm(element): void {
    const currentForm = document.getElementById(element.id).getElementsByTagName('form')[0];

    if (currentForm !== undefined) {
      const formFields = currentForm.querySelectorAll('input,mat-input,mat-select,textarea,mat-checkbox,mat-radio-button');
      if (formFields !== undefined && formFields[0] !== undefined) {
        const firstFormElement = (<HTMLInputElement>document.getElementById(
            formFields[0].id
        ));
        firstFormElement.focus();
        if (typeof firstFormElement['setSelectionRange'] === 'function') {
          firstFormElement.setSelectionRange(-1, -1);
        }
      }


    }

  }
  radioActionChanged(row, field): void {
    row.columnName = field;
    this.radioSection.emit(row);
  }

  showCheckBoxColumn(column): boolean {
    return (this.isSelectRowRequired && this.isVisibleSelectAll && column.field === 'select'
      && this.tableData && this.tableData.length !== 0);
  }

  showWithoutFormatting(column): boolean {
    return (column.type !== 'color' &&
      !column.dropdownInputRequired &&
      !column.radioAction && !column.innerHTML && !column.anchorDialog && !column.rowTempalteRequired);
  }

  rowExpandClick(row: any, rowExpandClick?: any): void {
    this.isRowExpanded = (row === rowExpandClick ? true : false);
    this.isRowExpandRequired && this.isRowExpanded ? this.rowBasedAction.emit({ clickedRow: row }) : row = null;
  }

  getTabIndex(): any {
    return (this.accordionStep === '' || this.accordionStep === undefined) ? 0 : -1;
  }

  createFilter(columns: any): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      let t = true;
      for (const column of columns) {
        if (data[column.label] !== undefined && data[column.label] !== null && searchTerms[column.label] !== null && typeof(data[column.label]) === 'string') {
          t = (t && data[column.label].toLowerCase().indexOf(searchTerms[column.label].toLowerCase()) !== -1);
        }
      }
      return t;
    };
    return filterFunction;
  }

  clearFilterSearch(control: any): void {
    if (this.filterForm !== undefined) {
      this.filterForm.controls[control].setValue('');
    }
  }

  rowGroupingClasses(): any {
    this.tdGroupingClass = [];
    this.cols.forEach( (column , index) => {
      const findGroupingIndex = this.rowGroupingColumns.findIndex((rowGroupingColumn) => {
        return column.field === rowGroupingColumn;
      });
      if (findGroupingIndex >= 0) {
        if (index > 0) {
          const previousColumnClass = this.tdGroupingClass[this.cols[index - 1].field];
          if (previousColumnClass.includes('border-right')) {
            this.tdGroupingClass[column.field] = 'border-right';
          }
          else {
            this.tdGroupingClass[column.field] = 'border-right border-left';
          }

        }
        else {
          this.tdGroupingClass[column.field] = 'border-right';
        }
      }
      else {
        this.tdGroupingClass[column.field] = '';
      }

    });
  }
}
