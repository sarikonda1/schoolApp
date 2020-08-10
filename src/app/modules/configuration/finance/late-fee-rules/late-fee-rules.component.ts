import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LateFeeViewModel } from '../models/late-fee-viewmodel';
import { LateFeeView } from '../models/late-fee-view';
import { LateFeeRuleFilterView } from '../models/late-fee-rule-filter-view';
import { AppSettings, Pattern } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { LateFeeRulesService } from 'app/service/configuration/finance/api/late-fee-rules.service';
import { CommonComponent } from 'app/shared/common/common.component';
import * as HttpStatus from 'http-status-codes';
import { DropDownModel } from 'app/models/drop-down-view';
import { YesNo } from 'app/models/yes-no-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Event } from '@angular/router';

@Component({
  selector: 'app-late-fee-rules',
  templateUrl: './late-fee-rules.component.html',
  styleUrls: ['./late-fee-rules.component.scss']
})
export class LateFeeRulesComponent extends CommonComponent implements OnInit {
  lateFeeRuleForm: FormGroup;
  lateFeeViewModel: LateFeeViewModel;
  lateFeeView: LateFeeView;
  lateFeeRuleFilterView: LateFeeRuleFilterView;
  cols: any[];
  tabSettings: {};
  currentComponent = 'LateFeeRulesComponent';
  failedRecords: string[];
  custRowsPerPageOptions: Array<number> = [];
  rows: Array<any>;
  totalItems: number;
  pageCnt: number;
  @ViewChild('addLateFeeRuleTemplate') addLateFeeRuleTemplate;
  @ViewChild('userLateFeeRuleForm') userLateFeeRuleForm;
  isValidate: boolean;
  closeAddPanel: boolean;
  isUpdate = false;
  lateFeePenaltyTypes: Array<DropDownModel> = [];
  YesOrNo: Array<any> = YesNo.values;
  disbleSubmitBtn = false;
  errorMessages: any;
  errorsList: Array<any> = [];
  isPenaltyExist = false;
  lateFeeRuleIds: Array<string> = [];
  constructor(public commonService: CommonService, private lateFeeRulesService: LateFeeRulesService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
    this.lateFeeRuleFilterView = {
      sortBy: '',
      sortOrder: AppSettings.DEFAULT_SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    /**
       * table columns
       */
    this.cols = [
      { field: 'delayFromDayCount', header: 'Payment Delay From(Days)', sort: true },
      { field: 'delayToDayCount', header: 'Payment Delay To(Days)', sort: true },
      { field: 'lateFeePenaltyTypeName', header: 'Penalty Type', sort: true },
      { field: 'penaltyAmount', header: 'Penalty Amount', sort: true },
      { field: 'isPenaltyFromDueDate', header: 'Is Penalty From Due Date', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    /**
       * intializes formGroup for TestType
       */
    this.lateFeeRuleForm = new FormGroup({
      id: new FormControl(''),
      delayFromDayCount: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(365), Validators.min(1)]),
      delayToDayCount: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(365), Validators.min(1)]),
      lateFeePenaltyTypeId: new FormControl('', [Validators.required]),
      penaltyAmount: new FormControl('', [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999.99), Validators.min(1)]),
      isPenaltyFromDueDate: new FormControl('', [Validators.required])
    });
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.lateFeeRuleFilterView,
      tablename: 'Late Fee Rules',
      componentName: this.currentComponent,
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.lateFeeRuleFilterView = modelTableComponent;
    }
    if (this.getTokenParam('_as')) {
      this.fetchTableData();
    } else {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
    }
    this.fetchLateFeePenaltyTypes();
  }
  getTableData(lateFeeRuleFilterView: LateFeeRuleFilterView): void {
    this.lateFeeRuleFilterView = lateFeeRuleFilterView;
    this.fetchTableData();
  }
  fetchTableData(): void {
    this.lateFeeRulesService.getAllDetails(this.lateFeeRuleFilterView.delayFromDaysCount, this.lateFeeRuleFilterView.delayToDaysCount,
      this.lateFeeRuleFilterView.lateFeePenaltyTypeIds, this.lateFeeRuleFilterView.penaltyAmounts, this.lateFeeRuleFilterView.isPenaltyFromDueDates,
      this.lateFeeRuleFilterView.sortBy, this.lateFeeRuleFilterView.sortOrder, this.failedRecords, this.lateFeeRuleFilterView.pageNumber,
      this.lateFeeRuleFilterView.pageSize).subscribe((res: any) => { this.getAllLateFeeRules(res); }, error => {
        this.errorResponse(error);
      });
  }
  getAllLateFeeRules(lateFeeRolesList: any): void {
    this.custRowsPerPageOptions = [];
    if (!lateFeeRolesList.lateFeeRuleListViewModel) {
      this.rows = [];
    } else {
      this.rows = lateFeeRolesList.lateFeeRuleListViewModel.list;
      this.totalItems = lateFeeRolesList.lateFeeRuleListViewModel.totalItems;
    }
    const testoperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT_ICON

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON
      },
    ];
    this.rows.forEach(e => {
      e.penaltyAmount = this.getFormattedCurrency(e.penaltyAmount);
      e.operations = testoperations;
      e.isPenaltyFromDueDate = (e.isPenaltyFromDueDate === 1) ? AppSettings.YES : ((e.isPenaltyFromDueDate === 0) ? AppSettings.NO : null);
    });
    if (lateFeeRolesList.lateFeeRuleListViewModel) {
      this.lateFeeRuleFilterView.pageNumber = lateFeeRolesList.lateFeeRuleListViewModel.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.lateFeeRuleFilterView,
      rows: this.rows,
      tablename: 'Late Fee Rules',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          name: this.addLateFeeRuleTemplate,
          btnName: 'add'
        }, infoButton: {
          required: true,
          text: 'Late Fee Rules'
        }
      },
      filtersList: lateFeeRolesList.filters
    };
  }
  fetchLateFeePenaltyTypes(): void {

    this.lateFeePenaltyTypes = [];
    this.lateFeeRulesService.getLateFeePenaltyTypes()
      .subscribe((data: Array<{ id: string | number, name: string }>) =>
        data.forEach(element =>
          this.lateFeePenaltyTypes.push({ label: element.name, value: element.id })
        ));
  }
  addRow(): void {
    this.lateFeeRulesService.isExistLateFeeCategeory().subscribe(res => {
      if (res.statusCode !== HttpStatus.OK) {
        this.closeAddPanel = true;
        this.openSnackBar(res.messages.ResultMessage);
      }
    });
    this.isValidate = false;
    this.lateFeeRuleForm.reset();
    this.userLateFeeRuleForm.resetForm();
    this.closeAddPanel = false;
    this.isUpdate = false;
    this.disbleSubmitBtn = false;
  }
  /**
    * close the panel and initialize form on close
    */

  closePanel(): void {
    this.closeAddPanel = true;
    this.isValidate = false;
    this.lateFeeRuleForm.reset();
    this.userLateFeeRuleForm.resetForm();
  }
  /**
    * Api call for Add or updating the latefeerule based on condition
    * @param lateFeeView 
    */
  onSubmitLateFeeRule(lateFeeView: any): void {
    this.isValidate = true;
    if (lateFeeView.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      if (lateFeeView.value.id == null) {
        this.lateFeeViewModel = lateFeeView.value;
        this.lateFeeRulesService.createLateFeeRule(this.lateFeeViewModel).subscribe(res => this.addUpdateResponce(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.lateFeeView = lateFeeView.value;
        this.lateFeeRulesService.updateLateFeeRule(this.lateFeeView).subscribe(res => this.addUpdateResponce(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }
  /**
      * Responce for Add or update
      * @param testTypeView 
      */
  addUpdateResponce(testTypeView: any): void {
    this.disbleSubmitBtn = false;
    this.openSnackBar(testTypeView.messages.ResultMessage);
    if (testTypeView.statusCode === HttpStatus.OK) {
      this.closeAddPanel = true;
      this.fetchTableData();
      this.isPenaltyExist = false;
    }
    else { this.closeAddPanel = false; }
  }
  lateFeePenaltyTypeChange(data: any): void {
    const lateFeeType = this.lateFeePenaltyTypes.filter(x => x.value === data.value);
    if (lateFeeType[0].label.toLowerCase() === AppSettings.FIXED.toLowerCase()) {
      this.isPenaltyExist = false;
      this.lateFeeRuleForm.get('isPenaltyFromDueDate').clearValidators();
      this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].updateValueAndValidity();
      this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].setValue(null);
    }
    else {
      this.isPenaltyExist = true;
      this.lateFeeRuleForm.get('isPenaltyFromDueDate').setValidators([Validators.required]);
      this.lateFeeRuleForm.controls['isPenaltyFromDueDate'].updateValueAndValidity();
    }
  }
  onTableSelect(data: any): void {
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const lateFeeRuleIds: Array<string> = [data.clickedRow.id];
          this.deleteLateFeeRules(lateFeeRuleIds, false);
        }
      });
    }
    if (data.operation === AppSettings.EDIT) {

      this.isUpdate = true;
      this.closeAddPanel = false;
      this.lateFeeRulesService.lateFeeDetails(data.clickedRow.id).subscribe(res => {
        this.lateFeeRuleForm.patchValue(res.lateFeeView);
        res.lateFeeView.isPenaltyFromDueDate == null ? this.isPenaltyExist = false : this.isPenaltyExist = true;
      }, error => {
        this.errorResponse(error);
      });
    }
  }
  /**
      * Deleteting the testtypes
      * @param testTypeIds 
      * @param isMultiSelect 
      */
  deleteLateFeeRules(testTypeIds: any, isMultiSelect: any): void {
    if (testTypeIds.length > 0) {
      this.lateFeeRulesService.deleteAll(testTypeIds).subscribe(res => {
        if (res.statusCode = HttpStatus.OK) {
          this.openSnackBar(res.messages.ResultMessage);
        }
        this.fetchTableData();
      }, error => {
        if (isMultiSelect && error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
          this.failedRecords = (error.error.failedRecords);
        }
        this.errorResponse(error);
        this.fetchTableData();
      });
    }
  }
  /**
   * warns on delete then call deleteLateFeeRules method on yes
   */

  deleteAll(): void {
    const dialogRef = this.commonService.dialog(AppSettings.WARNING_ON_MULTI_DELETE, true, AppSettings.NO, AppSettings.YES);
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.deleteLateFeeRules(this.lateFeeRuleIds, true);
      }
    });
  }
  selectedRows(data: any): void {
    this.lateFeeRuleIds = [];
    for (let index = 0; index < data.length; index++) {
      this.lateFeeRuleIds.push(data[index].id);
    }
  }
}
