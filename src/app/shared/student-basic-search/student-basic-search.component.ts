import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteTrigger, MatDialog, MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import { AppSettings, Pattern } from 'app/app.constants';
import { RoutingService } from 'app/service/Transport/routing.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { CommonComponent } from '../common/common.component';
import { CommonService } from 'app/service/common.service';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteConfig } from 'app/url.config';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { ArbitraryFeeViewModel } from 'app/models/invoice/arbitrary-fee-view-model';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { StudentsResultView } from 'app/models/academics/students-result-view';
import { StudentBasicSearchView } from 'app/modules/academics/student-information-system/model/student-basic-search-view';
import { ScheduleService } from 'app/service/Transport/schedule.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { LeaveRequestService } from 'app/service/academic-service/api/leave-request.service';

@Component({
  selector: 'app-student-basic-search',
  templateUrl: './student-basic-search.component.html',
  styleUrls: ['./student-basic-search.component.scss'],
  providers: [RoutingService, StudentDBService, InvoiceService,
    ScheduleService, FeeTypeService, LeaveRequestService]
})

export class StudentBasicSearchComponent extends CommonComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  @ViewChild('myTemplate') myTemplate;
  @ViewChild('studentName') studentNameAutoInput: any;
  @ViewChild('searchFormm') searchFormm: any;

  filterViewModel: StudentBasicSearchView;
  arbitraryFeeViewModel: ArbitraryFeeViewModel;
  currentComponent = 'StudentBasicSearchComponent';
  tableSettings: {};
  columns: any[];
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  custRowsPerPageOptions: Array<number> = [];
  additionalButton: any = {};

  customDialog: any;
  searchForm: FormGroup;
  routeTypess = [];
  routes = [];
  filterdStudents: Array<any> = [];
  customCardDetails: { title: string, message: string } = { title: 'Students', message: 'Search Students' };
  showCustomCard: Boolean = false;
  labelRoute: any;
  isVisible: Boolean = true;
  feeTypes: any[] = [];
  navigationEnd: Observable<NavigationEnd>;
  routePathParam: Observable<string>;
  feeAssignmentForm: FormGroup;
  doValidate = false;
  studentIds: Array<number> = [];
  classIds: Array<number> = [];
  boardIds: Array<number> = [];
  isSelectAll = false;
  HttpStatus: any;
  validate = true;
  feeAmountDetails: any[] = [];
  feeStructureTab: {};
  httpStatus: any;
  isRequired: Boolean = false;
  

  constructor(public dialog: MatDialog, public commonService: CommonService, private routingService: RoutingService,

    private studentDbService: StudentDBService, private invoiceService: InvoiceService,
    private router: Router, private scheduleService: ScheduleService,
    private feeTypeService: FeeTypeService, private cd: ChangeDetectorRef,
    private leaveRequestService: LeaveRequestService,
    public snackBar: MatSnackBar) {
    super();
    this.initializeForm();
    this.initializeFilterView();
    this.fetchFeeTypes();
    this.initializeAssignFeesForm();
    this.initializeArbitraryView();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.setColumnHeaders();
    this.searchForm.reset();
    this.updateFilterViewModel();
    this.HttpStatus = require('http-status-codes');
    this.router.events.subscribe((url: any) => { });
    this.labelRoute = this.router.url;
    if (RouteConfig.Student_Transport === this.labelRoute) {
      this.getRouteTypes();
      this.isVisible = false;
      this.columns.push(
        { field: 'inboundRoute', header: 'Inbound Route/StartTime', sort: false },
        { field: 'outboundRoute', header: 'Outbound Route/StartTime', sort: false },
        { field: 'actions', header: 'Actions ', sort: false }
      );
    }
    if (this.isVisible) {
      this.setValidForm();
    }
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      const headerFilter = modelTableComponent;
      if (headerFilter) {
        for (const [key, value] of Object.entries(headerFilter)) {
          if (Array.isArray(value)) {
            headerFilter[key] = value.length ? value[0] : null;
          }
        }
        this.searchForm.patchValue(headerFilter);
        if (modelTableComponent.studentNames && modelTableComponent.studentNames.length) {
          this.searchForm.controls['studentNames'].patchValue(modelTableComponent.studentNames, { emitEvent: false });
          this.getAllFilteredStudents();
        }
        this.onSelectSchoolBoard({ value: headerFilter.boardIds }, true);
        this.onClassChange(headerFilter.classIds, true);
        if (this.searchForm.value.routeTypeIds) {
          this.getRoutesDetails({ value: headerFilter.routeTypeIds }, true);
        }
      }
      if (this.getTokenParam('_as')) {
        this.getSchoolBoards();
      }
    } else {
      if (this.getTokenParam('_as')) {
        this.getAvailableSchoolBoards('searchForm', 'boardIds');
      }
    }


    this.searchForm.controls['studentNames'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.leaveRequestService.studentNames(name).subscribe((res) => {
          this.filterdStudents = (res.value.students.length > 0) ? res.value.students : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdStudents = [];
      }
    });
    this.rows = [];
  }

  getSchoolBoards(): void {
    this.availableSchoolBoards = [];
    this.commonService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.availableSchoolBoards.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  setValidForm(): void {
    this.searchForm.controls['boardIds'].setValidators([Validators.required]);
    this.searchForm.controls['boardIds'].updateValueAndValidity();
  }

  clearValidForm(): void {
    if (!this.isVisible) {
      this.searchForm.controls['boardIds'].clearValidators();
      this.searchForm.controls['boardIds'].updateValueAndValidity();
    }
    this.searchForm.controls['classIds'].clearValidators();
    this.searchForm.controls['classIds'].updateValueAndValidity();
    this.isRequired = false;
  }

  initializeAssignFeesForm(): void {
    this.feeAssignmentForm = new FormGroup({
      feeTypeId: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(0), Validators.max(9999999.99)]),
    });
  }

  onSelectSchoolBoard(event, isManualChange = false): void {
    // this.studentIds = [];
    if (event !== undefined && this.searchForm.value.boardIds) {
      this.getAvailableClasses(event.value);
    }
    else {
      this.availableClasses = [];
      this.availableSections = [];
    }
    if (!isManualChange) {
      this.searchForm.patchValue({
        classIds: null,
        sectionIds: null
      });
    }
  }

  onClassChange(classId, isManualChange = false): void {
    // this.studentIds = [];
    this.rows = [];
    if (classId !== undefined && this.searchForm.value.boardIds) {
      this.getAvailableSections(this.searchForm.value.boardIds, classId);
    }
    else {
      this.availableSections = [];
    }
    if (!isManualChange) {
      this.searchForm.patchValue({
        sectionIds: null
      });
    }
  }

  onSelectSection(): void {
    // this.studentIds = [];
  }

  getRouteTypes(): void {
    const routeTypesData = [];
    this.routingService.routeTypes().subscribe((res) => {
      res.forEach(e => {
        routeTypesData.push({
          value: e.id, label: e.name
        });
        this.routeTypess = routeTypesData;
      });
    }, error => {
      this.errorResponse(error);
    });
  }

  getRoutesDetails(event, isManualChange = false): void {
    const routeData = [];
    if (event) {
      this.scheduleService.fetchTransportRoutes(event.value).subscribe((res) => {
        res.transportScheduleDetailsView.forEach(e => {
          routeData.push({
            value: e.id, label: e.name
          });
          this.routes = routeData;
        });
      }, error => {
        this.errorResponse(error);
      });
    }
    else {
      this.routes = routeData;
    }
    if (!isManualChange) {
      this.searchForm.patchValue({
        routeIds: null
      });
    }
  }

  initializeForm(): void {
    this.searchForm = new FormGroup({
      studentNames: new FormControl(null),
      boardIds: new FormControl(null),
      classIds: new FormControl(null),
      sectionIds: new FormControl(null),
      routeTypeIds: new FormControl(null),
      routeIds: new FormControl(null),
    });
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      classIds: [],
      sectionIds: [],
      boardIds: [],
      routeTypeIds: [],
      routeIds: [],
      studentNames: [],
    };
  }
  initializeArbitraryView(): void {
    this.arbitraryFeeViewModel = {
      feeTypeId: null,
      amount: 0,
      studentIds: []
    };
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'currentClassName', header: 'Class', sort: true },
      { field: 'sectionName', header: 'Section', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'statusName', header: 'Status', sort: true },
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: this.rows,
      columns: this.columns,
      tablename: 'Students',
      hideHeader: true,
      componentName: this.currentComponent,
      model: this.filterViewModel,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      isPaginationRequired: true,
      isMultiDeleteRequired: false,
    };
  }

  tableData(_event: StudentBasicSearchView): void {
    this.filterViewModel = _event;
    this.updateFilterViewModel();
    this.getAllFilteredStudents();
  }

  displayFn(data: any): void {
    return data || (data && data.name) || (data && data.studentName);
  }

  getSelectedStudent(value: any): void {
    if (value.name !== undefined) {
      this.initializeFilterView();
      this.filterViewModel.studentNames = [value.name];
      this.filterViewModel.studentId = value.id;
      if (value.name !== null) {
        this.searchForm.controls['studentNames'].setValue(value.name);
        this.studentNameAutoInput.nativeElement.value = value.name;
        this.searchForm.patchValue({
          boardIds: null,
          classIds: null,
          sectionIds: null,
          routeTypeIds: null,
          routeIds: null,
        });
        this.searchFormm.submitted = false;
        this.searchForm.markAsUntouched();
        this.searchForm.updateValueAndValidity();
        this.getAllFilteredStudents();
      }
    }
  }

  getAllFilteredStudents(): void {
    if (this.searchForm === undefined) {
      return;
    }
    else {
      this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
      this.studentDbService.fetchStudents(this.filterViewModel.studentId, this.filterViewModel.studentNames,
        this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.boardIds,
        this.filterViewModel.routeTypeIds, this.filterViewModel.routeIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
        this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
        subscribe(res => {
          this.bindStudentResult(res);
        }, error => {
          this.errorResponse(error);
        });
    }
  }

  bindStudentResult(data: StudentsResultView): void {
    if (!data.resultList) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
      this.customCardDetails.message = AppSettings.NODATA_FOUND;
      this.searchForm.controls['studentNames'].setValue(this.searchForm.value.studentNames);
      this.studentNameAutoInput.nativeElement.value = this.searchForm.value.studentNames;
      return;
    } else {
      data.filters.forEach(filter => {

        if (filter.options && filter.options.find(option => option.isSelected === true) !== undefined) {
          this.searchForm.controls[filter.name].setValue(
            filter.options.find(option => option.isSelected === true).value
          );
        }
        else if (this.searchForm.controls[filter.name] !== undefined && filter.value) {
          if (filter.name === 'studentNames') {
            this.studentNameAutoInput.nativeElement.value = filter.value;
          }
          else {
            this.searchForm.controls[filter.name].setValue(filter.value);
          }
        }
      });

      this.rows = data.resultList.list;
      this.totalRowsCount = data.resultList.totalItems;
      this.pageCnt = data.resultList.totalPages;
      this.rows.forEach(e => {
        if (this.isVisible === false) {
          e.operations = [
            {
              name: AppSettings.MANAGE,
              icon: AppSettings.MARKS_ICON,
              operationName: AppSettings.MANAGE
            }
          ];
        }
      });
    }
    if (data.resultList) {
      this.filterViewModel.pageNumber = data.resultList.pageNumber;
    }

    this.additionalButton = {};
    if (this.isVisible === true && this.rows.length > 0) {
      this.additionalButton = {
        name: this.searchForm.value.studentNames ? 'Assign fee' : 'Assign fee to class or sections',
        class: 'accent',
        clickAction: 'markAssignFeeComplete'
      };
      this.initializeTableSettingsFee();
    }
    else {
      this.initializeTableSettings();
    }
    this.cd.detectChanges();
  }

  initializeTableSettingsFee(): void {
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Students',
      componentName: this.currentComponent,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      isPaginationRequired: true,
      visibleSelectAll: true,
      isMultiDeleteRequired: false,
      isSelectRowRequired: true,
      headerOperations: {
        addingForm: {
          required: false
        },
        additionalButtons: [
          this.additionalButton
        ]
      }
    };
  }

  searchStudent(data: any): void {
    this.searchForm.controls['studentNames'].patchValue(null);
    if (data.boardIds != null)
    {
    this.updateFilterViewModel();
    this.getAllFilteredStudents();
    }
    else {
    this.showCustomCard = false;
    }
  }

  updateFilterViewModel(): void {
    const data = this.searchForm.value;
    if (data.studentNames != null) {
      this.filterViewModel.studentNames = typeof (data.studentNames) === 'object' ? [data.studentNames.studentName] : [data.studentNames];
    } else {
      this.filterViewModel.studentNames = [];
      this.filterViewModel.studentId = '';
    }   
    this.filterViewModel.classIds = data.classIds === null || undefined ? [] : [data.classIds];
    this.filterViewModel.sectionIds = data.sectionIds === null || undefined ? [] : [data.sectionIds];
    this.filterViewModel.boardIds = data.boardIds === null || undefined ? [] : [data.boardIds];
    this.filterViewModel.routeTypeIds = data.routeTypeIds === null || undefined ? [] : [data.routeTypeIds];
    this.filterViewModel.routeIds = data.routeIds === null || undefined ? [] : [data.routeIds];
  }

  onClear(): void {
    this.searchForm.reset();
    this.initializeFilterView();
    this.setModelDataTableComponent(this.currentComponent, null);
    this.rows = [];
    this.availableClasses = [];
    this.availableSections = [];
    this.showCustomCard = false;
    this.isRequired = false;
    this.routes = [];
  }

  closeDialog(): void {
    this.feeAssignmentForm.reset();
    this.dialog.closeAll();
  }

  selectedRows(event): void {
    this.studentIds = event.length ? event : [];
    this.classIds = event.length ? event : [];
  }

  massActionsApply(): void {
    this.setValidForm();
    // if (this.searchForm.valid) {
    this.feeAssignmentForm.reset();
    this.openForm();
    this.feeAmountDetails = [];
    // }
  }

  markAssignFeeComplete(event): void {
    this.isRequired = true;
    this.setValidForm();
    if (event === 'markAssignFeeComplete') {
      this.studentIds = [];
      this.classIds = [];
      this.rows.forEach(element => {
        this.studentIds.push(element.studentId);
        this.classIds.push(element.classId);
      });
      this.feeAssignmentForm.reset();
      this.openForm();
      this.feeAmountDetails = [];
    }
  }

  openForm(): void {
    this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { template: this.myTemplate, title: 'Assign Fee' },
      panelClass: 'custom-dialog',
      width: '700px',
    });
  }

  onSubmitFee(data: ArbitraryFeeViewModel): void {
    this.doValidate = true;
    if (this.feeAssignmentForm.valid) {
      data.studentIds = this.studentIds;
      this.invoiceService.feeAssignment(data).subscribe(res => this.response(res), error => {
        this.errorResponse(error);
      });
    }
  }

  // arbitrary fee Assignment response based on request
  response(res: any): void {
    if (res.statusCode === this.HttpStatus.OK) {
      this.studentIds = [];
      this.classIds = [];
      this.openSnackBar(res.messages.ResultMessage);
      this.isSelectAll = false;
      if (this.searchForm.value.studentNames != null) {
        this.searchStudent(true);
      } else {
        this.searchStudent(false);
      }
      this.dialog.closeAll();
    }
    else {
      this.openSnackBar(res.messages.ResultMessage);
      this.dialog.closeAll();
    }
  }

  // select individual record from Students table 
  onTableRowSelect(data: any): void {
    this.studentIds.push(data.id);
    this.classIds.push(data.classId);
  }

  // Unselect individual record from Students table 
  onTableRowUnSelect(value: any): void {
    const index = this.studentIds.findIndex((v: any) => {
      return value === v.studentId;
    });
    this.studentIds.splice(index, 1);
    const classIndex = this.classIds.findIndex((v: any) => {
      return classIndex === v.classId;
    });
    this.classIds.splice(classIndex, 1);
  }


  // select all records from table(delete)
  selectAllData(studentds: any): void {
    if (studentds.length > 0) {
      this.studentIds = [];
      this.classIds = [];
      this.boardIds = [];
      this.isSelectAll = true;
      studentds.forEach(element => {
        this.studentIds.push(element.studentId);
        this.classIds.push(element.classId);
        this.boardIds.push(element.schoolBoardId);
      });
    }
    else {
      this.studentIds = [];
      this.classIds = [];
      this.isSelectAll = false;
    }
  }


  actions(event: any): void {
    if (event.operation === AppSettings.VIEW.toLowerCase()) {
    } else if (event.operation === AppSettings.MANAGE.toLowerCase()) {
      this.router.navigate([RouteConfig._Manage_Student_Trasport + event.clickedRow.id]);

    }
  }

  fetchFeeTypes(): void {
    this.feeTypes = [];
    this.feeTypeService.getFeeTypes().subscribe(res => {
      if (res.commonViewModels) {
        res.commonViewModels.forEach(element => {
          this.feeTypes.push({
            label: element.name,
            value: element.id
          });
        });
      }
    });
  }

  fetchFeeTypeDetails(data: any): void {
    this.feeAmountDetails = [];
    if (!this.searchForm.value.studentNames) {
      this.boardIds = [];
      this.boardIds.push(this.searchForm.value.boardIds);
    }
    this.classIds = this.classIds.filter((a, b) => this.classIds.indexOf(a) === b);
    this.feeTypeService.getSchoolFeeAmountBasedOnFeeTypes(data.value, this.classIds, this.boardIds[0])
      .subscribe(res => {
        if (res.statusCode === this.httpStatus.OK) {
          this.feeAmountDetails = res.feeAssignmentView;
          if (res.feeAssignmentView && res.feeAssignmentView.length) {
            this.feeAmountDetails.forEach(x => {
              x.feeAmount = this.getFormattedCurrency(x.feeAmount);
            });
            this.cd.detectChanges();
          } else {
            this.openSnackBar('No Fee structure for the selected Fee Type', true);
          }
        }
      });

    this.feeAssignmentForm.controls['amount'].setValue(null);
    this.cd.detectChanges();

  }

  amountAssign(amt: any): void {
    const currency = amt;
    const number = parseFloat(currency.replace(Pattern.REPLACE_CURRENCY_FORMAT_NUMBER, ''));
    this.feeAssignmentForm.controls['amount'].setValue(number);
  }
}
