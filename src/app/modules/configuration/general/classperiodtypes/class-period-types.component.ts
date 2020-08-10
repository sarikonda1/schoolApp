import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';

import { CommonComponent } from 'app/shared/common/common.component';
import { ClassPeriodTypeFilterView } from '../models/class-period-type-filter-view';
import { UpdateClassPeriodTypeView } from '../models/update-class-period-type-view';
import { ClassPeriodTypeService } from 'app/service/academic-service/api/class-period-type.service';
import { ClassPeriodTypeDataView } from '../models/class-period-type-data-view';
import { YesNo } from 'app/models/yes-no-view';
@Component({
  selector: 'app-class-period-types',
  templateUrl: './class-period-types.component.html',
  styleUrls: ['./class-period-types.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ClassperiodtypesComponent extends CommonComponent implements OnInit {

  @ViewChild('classPeriodType') myForm;

  subscription: Subscription;
  schoolId: string;
  dataLoaded = Promise.resolve(false);
  selectAll: boolean;
  tempData: any[];
  // multi delete realted Variable
  classPeriodTypeIds: Array<any> = [];
  // ViewModels Declarations
  filterViewModel: ClassPeriodTypeFilterView;
  classPeriodTypePostView: ClassPeriodTypeDataView;
  updateClassPeriodTypeView: UpdateClassPeriodTypeView;

  // table related variables
  tabSettings: {};
  rows: Array<any>;
  classPeriodTypecols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  // form Declaration For ClassPeriodType 
  classPeriodTypeForm: FormGroup;

  break = false;
  noAssignments = false;
  multipleAssignments = true;
  // button variables 
  saveBtn = true;
  prevBtn: boolean;
  nextBtn = false;

  // boolean variables for isbreak,has assignments,has multiple Assignments
  multipleAssignmentsChecked: any;
  isBreakYesCheck: boolean;
  optNoChecked: boolean;
  noAssignmentNoCheck: boolean;
  noAssignmentYesCheck: boolean;
  multipleAssignmentsNoChecked: boolean;
  isBreakNoCheck: boolean;

  closeAddPanel = false;
  updateBtn: boolean;
  isEdit = false;
  updateId: any;
  isFormValidate: boolean;
  isSaveDisabled = true;
  isUpdateDisabled = true;
  modelname: any;
  isMultipleAssignmentsOptions: Array<any> = YesNo.values;
  isBreakOptions: Array<any> = YesNo.values;
  hasAssignmentsOptions: Array<any> = [
    { value: 1, label: AppSettings.YES },
    { value: 0, label: AppSettings.NO }
  ];
  currentComponent = 'ClassperiodtypesComponent';
  disbleSubmitBtn = false;
  hasAssignments: any;

  constructor(public dialog: MatDialog, public commonComponent: CommonComponent, private classPeriodTypeService: ClassPeriodTypeService,
     public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    // this.commonService.getTableLSObj(this.tabSettings);
    this.initializeForm();
    this.getAllFilteredClassPeriodTypes();
  }

  // iniatizes form classperiodtype
  initializeForm(): void {
    this.classPeriodTypeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      hasMultipleAssignments: new FormControl(),
      isBreak: new FormControl(),
      hasAssignments: new FormControl(),
    });
  }

  // Class Period Types Columns
  setColumnHeaders(): void {
    this.classPeriodTypecols = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'hasMultipleAssignments', header: 'hasmultipleassignments', sort: true },
      { field: 'isBreak', header: 'isbreak', sort: true, },
      { field: 'hasAssignments', header: 'hasteacherassignments', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
  }
  // tabsettings inialized
  initializeTableSettings(): void {
    this.tabSettings = {
      rows: [],
      columns: this.classPeriodTypecols,
      tablename: 'Class Period Types',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }
  initializeFilterView(): void {
    this.filterViewModel = {
      name: [],
      isBreak: [],
      hasMultipleAssignments: [],
      hasAssignments: [],
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  tableData(_event: any): void {
    this.filterViewModel = _event;
    this.getAllFilteredClassPeriodTypes();
  }
  // Get All ClassPeriod Types
  getAllFilteredClassPeriodTypes(): any {
    this.classPeriodTypeService.classPeriodTypes(this.filterViewModel.name, this.filterViewModel.isBreak,
      this.filterViewModel.hasMultipleAssignments, this.filterViewModel.hasAssignments,
      this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize
    )
      .subscribe(res => {
        this.ClassPeriodTypesData(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  ClassPeriodTypesData(data: any): void {
    this.custRowsPerPageOptions = [];
    if (!data.classPeriodTypesView) {
      this.rows = [];
    } else {
      this.rows = data.classPeriodTypesView.list;
      this.totalItems = data.classPeriodTypesView.totalItems;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT_ICON
          }, {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE_ICON,
            operationName: AppSettings.DELETE
          }
        ];
        e.hasAssignments = (e.hasAssignments === 1) ? AppSettings.YES : AppSettings.NO;
        e.hasMultipleAssignments = (e.hasMultipleAssignments === 1) ? AppSettings.YES : AppSettings.NO;
        e.isBreak = (e.isBreak === 1) ? AppSettings.YES : AppSettings.NO;

      });
    }
    if (data.classPeriodTypesView) {
      this.filterViewModel.pageNumber = data.classPeriodTypesView.pageNumber;
    }
    this.tabSettings = {
      columns: this.classPeriodTypecols,
      model: this.filterViewModel,
      rows: this.rows,
      tablename: 'Class Period Types',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,

      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Class Period Types'
        },
      },
      filtersList: data.filters,
    };
  }
  rowActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation('areyousurewanttodelete'), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // Conformation for Delete ClassPeriodType
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.classPeriodTypeService.deleteClassPeriodType(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    else if (event.operation === AppSettings.EDIT) {
      // Edit Functonality
      this.isEdit = true;
      this.saveBtn = false;
      this.updateBtn = true;
      this.isUpdateDisabled = false;
      this.closeAddPanel = false;
      this.updateId = event.clickedRow.id;
      this.classPeriodTypeService.classPeriodType(this.updateId).subscribe(res => this.responseOfEditOperation(res), error => {
        this.errorResponse(error);
      });
    }
  }
  responseOfEditOperation(data: any): void {

    data.classPeriodTypeView.hasMultipleAssignments = data.classPeriodTypeView.hasMultipleAssignments != null ? data.classPeriodTypeView.hasMultipleAssignments : 1;

    data.classPeriodTypeView.isBreak = data.classPeriodTypeView.isBreak != null ? data.classPeriodTypeView.isBreak : 0;

    this.classPeriodTypeForm.patchValue(data.classPeriodTypeView);

    if (data.classPeriodTypeView.hasMultipleAssignments === 1) {
      this.nextBtn = false;
      this.prevBtn = false;
      this.break = false;
      this.multipleAssignments = true;
      this.noAssignments = false;
    }
    else if (data.classPeriodTypeView.isBreak === 1) {
      this.break = true;
      this.multipleAssignments = false;
      this.noAssignments = false;
      this.prevBtn = true;
      this.nextBtn = false;
    }
    else if (data.classPeriodTypeView.hasAssignments === 1 || data.classPeriodTypeView.hasAssignments === 0) {
      this.break = false;
      this.multipleAssignments = false;
      this.noAssignments = true;
      this.nextBtn = false;
      this.prevBtn = true;
    }
    if (this.isEdit === true) {
      this.updateBtn = true;
      this.isUpdateDisabled = false;
    }
    else {
      this.saveBtn = true;
      this.isSaveDisabled = false;
    }
  }
  // method Called for Has Multiple Assignments Click
  multipleAssignmentsClick(type: string): void {
    if (type === AppSettings.YES) {
      this.break = false;
      this.prevBtn = false;
      this.nextBtn = false;
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(1);
      if (this.isEdit === true) {
        this.updateBtn = true;
        this.isUpdateDisabled = false;
      }
      else {
        this.saveBtn = true;
        this.isSaveDisabled = false;
      }
    }
    else if (type === AppSettings.NO) {
      this.nextBtn = true;
      this.updateBtn = false;
      this.saveBtn = false;
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(0);

    }
  }
  // on no Assignments yes or no click
  noAssignmentsClick(type: string): void {
    this.noAssignments = true;
    this.prevBtn = true;
    if (type === AppSettings.YES) {
      this.classPeriodTypeForm.controls['hasAssignments'].setValue(1);
    }
    else if (type === AppSettings.NO) {
      this.classPeriodTypeForm.controls['hasAssignments'].setValue(0);
    }
    if (this.isEdit === true) {
      this.updateBtn = true;
      this.isUpdateDisabled = false;
    }
    else {
      this.isSaveDisabled = false;
      this.saveBtn = true;
    }
  }
  // method Called when IsBreak Is Checked
  isBreakClick(btnType: any): void {
    this.break = true;
    if (btnType === AppSettings.YES) {
      this.prevBtn = true;
      this.nextBtn = false;
      this.classPeriodTypeForm.controls['isBreak'].setValue(1);
      if (this.isEdit === true) {
        this.updateBtn = true;
        this.isUpdateDisabled = false;
      }
      else {
        this.saveBtn = true;
        this.isSaveDisabled = false;
      }
    }
    else if (btnType === AppSettings.NO) {
      this.nextBtn = true;
      this.classPeriodTypeForm.controls['isBreak'].setValue(0);
      if (this.isEdit === true) {
        this.updateBtn = false;
        this.nextBtn = true;
      }
      else {
        this.saveBtn = false;
      }
    }
  }
  // when Next Button clicked this method will call
  onNextBtnClick(): void {
    if (this.multipleAssignments === true) {
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(0);
      this.break = true;
      this.multipleAssignments = false;
      this.noAssignments = false;
      this.prevBtn = true;
      if (this.classPeriodTypeForm.value.isBreak === 1) {
        this.nextBtn = false;
        if (this.isEdit === true) {
          this.updateBtn = true;
          this.isUpdateDisabled = false;
          this.saveBtn = false;
        }
        else {
          this.saveBtn = true;
          this.isSaveDisabled = false;
          this.updateBtn = false;
        }
      }

      else if (this.classPeriodTypeForm.value.isBreak === 0) {
        this.nextBtn = true;
        this.saveBtn = false;
        this.updateBtn = false;
      }
      else {
        this.updateBtn = false;
        this.saveBtn = false;
        this.nextBtn = false;
      }
    }
    else if (this.break === true) {
      this.break = false;
      this.multipleAssignments = false;
      this.noAssignments = true;
      this.prevBtn = true;

      this.nextBtn = false;
      this.classPeriodTypeForm.controls['isBreak'].setValue(0);
      if (this.classPeriodTypeForm.value.hasAssignments === 1 || this.classPeriodTypeForm.value.hasAssignments === 0) {
        this.nextBtn = false;
        if (this.isEdit === true) {
          this.updateBtn = true;
          this.isUpdateDisabled = false;
          this.saveBtn = false;
        }
        else {
          this.saveBtn = true;
          this.isSaveDisabled = false;
          this.updateBtn = false;
        }
      }
      else {
        this.saveBtn = false;
        this.updateBtn = false;
      }
    }

  }

  // On Previous Button Click
  onPrevButtonClick(): void {
    if (this.break === true) {
      this.noAssignments = false;
      this.multipleAssignmentsNoChecked = true;
      this.break = false;
      this.multipleAssignments = true;
      this.prevBtn = false;
      this.nextBtn = true;

      if (this.isEdit === true) {
        this.updateBtn = true;
        if (this.isBreakNoCheck === true) {
          this.multipleAssignmentsNoChecked = true;
        }
        else {
          this.multipleAssignmentsNoChecked = true;
          this.updateBtn = false;
        }
        if (this.classPeriodTypeForm.value.hasMultipleAssignments === 0) {
          this.saveBtn = false;
          this.updateBtn = false;
        }

      } else { this.saveBtn = false; }

    }
    if (this.noAssignments === true) {
      this.break = true;
      this.noAssignments = false;
      this.prevBtn = true;
      this.nextBtn = true;
      this.isBreakNoCheck = true;
      this.saveBtn = false;
      this.updateBtn = false;
    }

  }
  // On Save Button Click
  onSaveClick(data: any): void {
    this.isFormValidate = true;
    if (this.classPeriodTypeForm.status === AppSettings.VALID) {
      if (!this.isEdit) {
        this.classPeriodTypePostView = data.value;
        this.classPeriodTypeService.createClassPeriodType(this.classPeriodTypePostView).subscribe(res => this.submitResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.updateClassPeriodTypeView = data.value;
        this.updateClassPeriodTypeView.id = this.updateId;
        this.classPeriodTypeService.updateClassPeriodType(this.updateClassPeriodTypeView).subscribe(res => this.submitResponse(res), error => {
          this.isUpdateDisabled = false;
          this.errorResponse(error);
        });
      }
    }

  }
  // Response after data added and updated
  submitResponse(res: any): void {
    this.break = false;
    this.noAssignments = false;
    this.isFormValidate = false;
    this.disbleSubmitBtn = false;
    if (res.statusCode === HttpStatus.OK) {
      this.getAllFilteredClassPeriodTypes();
      this.isSaveDisabled = true;
      this.isUpdateDisabled = true;
      this.closeAddPanel = true;
      this.myForm.resetForm();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(res.messages.ResultMessage);
  }

  // method for delete response
  deleteResponse(data: any): void {
    this.selectAll = false;
    this.classPeriodTypeForm.reset();
    this.closeAddPanel = true;
    this.getAllFilteredClassPeriodTypes();
    this.openSnackBar(data.messages.ResultMessage);
  }

  // Adding Post Form
  onAddFormClick(): void {
    this.updateBtn = false;
    this.classPeriodTypeForm.reset();
    this.closeAddPanel = false;
    this.isFormValidate = false;
    this.multipleAssignments = true;
    this.break = false;
    this.saveBtn = true;
    this.updateBtn = false;
    this.prevBtn = false;
    this.nextBtn = false;
    this.isSaveDisabled = true;
    this.isUpdateDisabled = true;
    this.isEdit = false;
  }

  // On Cancel Button Click
  onCancelClick(): void {
    this.closeAddPanel = true;
    this.isFormValidate = false;
    this.multipleAssignmentsChecked = false;
    this.multipleAssignmentsNoChecked = false;
    this.isBreakYesCheck = false;
    this.isBreakNoCheck = false;
    this.classPeriodTypeForm.reset();
    this.isEdit = false;
    this.myForm.resetForm();
    this.break = false;
    this.noAssignments = false;
    this.multipleAssignments = false;
  }
  // check values
  onCheckValues(): void {
    if ( this.classPeriodTypeForm.valid){
    if (this.multipleAssignments === true) {
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(1);
      this.classPeriodTypeForm.controls['isBreak'].setValue(0);
      this.classPeriodTypeForm.controls['hasAssignments'].setValue(0);
    }
    else if (this.break === true) {
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(0);
      this.classPeriodTypeForm.controls['isBreak'].setValue(1);
      this.classPeriodTypeForm.controls['hasAssignments'].setValue(0);
    }
    else if (this.noAssignments === true) {
       this.classPeriodTypeForm.controls['hasAssignments'].setValue(this.classPeriodTypeForm.value.hasAssignments);
      this.classPeriodTypeForm.controls['hasMultipleAssignments'].setValue(0);
      this.classPeriodTypeForm.controls['isBreak'].setValue(0);
    }
  }

  }
}
