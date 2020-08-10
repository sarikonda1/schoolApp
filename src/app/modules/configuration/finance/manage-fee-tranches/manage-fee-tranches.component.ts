import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { ManageFeeTypeTranchesService } from 'app/service/configuration/finance/api/manage-fee-type-tranches.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { FeeTypeTranchesDataView } from '../models/fee-type-tranches-data-view';
import * as HttpStatus from 'http-status-codes';
import { ManageFeeConfigurationService } from 'app/service/configuration/finance/api/manage-fee-configuration.service';
import { SchoolFeeTranchView } from '../models/school-fee-tranch-view';

@Component({
  selector: 'app-manage-fee-tranches',
  templateUrl: './manage-fee-tranches.component.html',
  styleUrls: ['./manage-fee-tranches.component.scss']
})
export class ManageFeeTranchesComponent extends CommonComponent implements OnInit {
  manageFeeTranchesForm: FormGroup;
  schoolBoards: any[] = [];
  schoolBoardId: number;
  classes: any[] = [];
  errorMessage: any = AppSettings.SELECT_SCHOOLBOARD_OR_CLASSID_AND_FEETYPE;
  isErrorMessage = true;
  feeTypes: any[] = [];
  classId: any;
  feeTypeId: number;
  feeTypeTranches: any;
  feeTypeName: any;
  isDisplay: boolean;
  isUpdateButton: boolean;
  isAddButton: boolean;
  isSchoolBoard: boolean;
  schoolFeeTranches: any[] = [];
  feeTranchForm: FormGroup;
  formArrayList: FormArray;
  isCreate: boolean;
  isValidate: boolean;
  disbleSubmitBtn: boolean;
  feeTypeTranchesDataView: FeeTypeTranchesDataView;
  schoolFeeTranchView: SchoolFeeTranchView;
  isEdit: boolean;
  isDisabled: boolean;
  invoiceError: string;
  isInvoiceError: boolean;

  constructor(
    private _fb: FormBuilder,
    public commonService: CommonService,
    public classSectionService: ClassSectionService,
    public manageFeeTypeTranchesService: ManageFeeTypeTranchesService,
    public dialog: MatDialog,
    public manageFeeConfigurationService: ManageFeeConfigurationService,
    public snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.feeTypeTranchesDataView = {
      feeTypeId: 0,
      classId: 0,
      schoolBoardId: 0
    };
    this.manageFeeTranchesForm = new FormGroup({
      schoolBoardId: new FormControl('', [Validators.required]),
      classId: new FormControl({ value: '', disabled: true }),
      feeTypeId: new FormControl('', [Validators.required]),
      feeTypeTranches: this._fb.array([]),
    });
    this.fetchSchoolBoards();
    this.fetchFeeTypes();
  }
  fetchSchoolBoards(): void {
    this.schoolBoards = [];
    this.isSchoolBoard = true;
    this.commonService.schoolAcademicBoards()
      .subscribe(res => {
        this.schoolBoardDetails(res);
      });
  }
  schoolBoardDetails(data: any): void {
    if (data.listViews) {
      data.listViews.forEach(element => {
        this.schoolBoards.push({
          label: element.name,
          value: element.id
        });
      });
    }
    if (!this.schoolBoards.length) {
      this.isSchoolBoard = false;
      this.fetchClasses(null);
      this.manageFeeTranchesForm.get('schoolBoardId').clearValidators();
      this.manageFeeTranchesForm.controls['schoolBoardId'].updateValueAndValidity();
    }
    else {
      this.manageFeeTranchesForm.controls['feeTypeId'].disable();
      this.setDefaultBoard();
    }
  }
  fetchClasses(data: any): void {
    this.errorMessage = AppSettings.SELECT_SCHOOLBOARD_OR_CLASSID_AND_FEETYPE;
    this.manageFeeTranchesForm.controls['feeTypeId'].enable();
    this.manageFeeTranchesForm.controls['classId'].disable();
    this.classes = [];
    this.schoolBoardId = data;
    this.classSectionService.schoolAcademicClasses(data)
      .subscribe(res => {
        if (res.listViews) {
          res.listViews.forEach(element => {
            this.classes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }, error => {
        this.errorResponse(error);
      });
    this.manageFeeTranchesForm.get('classId').setValue('');
    this.manageFeeTranchesForm.get('feeTypeId').setValue('');
    this.classId = '';
    this.feeTypeTranches = [];
    this.isDisplay = false;
    this.isErrorMessage = true;
    this.isUpdateButton = false;
    this.isAddButton = false;
  }
  fetchFeeTypes(): void {
    this.manageFeeTypeTranchesService.feeTypeTranches().subscribe(res => {
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
  classSelect(classId: any): void {
    this.classId = classId;
    this.manageFeeTypeTranchesService.getSchoolFeeTranches(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(res => {
      this.getFeeTranchDetails(res);
    });
  }
  getAllFeeTranches(feeTypeId: number): void {
    this.isInvoiceError = false;
    this.feeTypeId = feeTypeId;
    this.manageFeeTranchesForm.controls['classId'].enable();
    this.manageFeeTypeTranchesService.getSchoolFeeTranches(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(res => {
      this.getFeeTranchDetails(res);
    }, error => {
      this.errorResponse(error);
    });
  }
  getFeeTranchDetails(data: any): void {
    this.invoiceError = '';
    this.isDisabled = false;
    this.feeTypeTranches = [];
    this.feeTypeName = '';
    if (data.schoolFeeTranches) {
      data.schoolFeeTranches.feeTypeTranches.forEach(x => {
        x.feeAmount = this.getFormattedCurrency(x.feeAmount);
        x.schoolFeeAssignments.forEach(element => {
          element.feeAmount = this.getFormattedCurrency(element.feeAmount);
        });
      });
      this.feeTypeName = data.schoolFeeTranches.feeTypeName;
      this.feeTypeTranches = data.schoolFeeTranches.feeTypeTranches;
    }
    if (!this.feeTypeTranches.length) {
      this.errorMessage = AppSettings.MANAGE_FEE_TRANCH_ADD_ERROR;
      this.isAddButton = true;
      this.isErrorMessage = true;
      this.isUpdateButton = false;
      this.isDisplay = false;
    }
    else {
      this.isDisplay = true;
      this.isCreate = false;
      this.isErrorMessage = false;
      this.isUpdateButton = true;
      this.isAddButton = false;
    }
  }
  addClick(): void {
    this.isValidate = false;
    this.isErrorMessage = false;
    this.isCreate = true;
    this.isEdit = false;
    this.disableControls();
    this.isDisabled = true;
    this.manageFeeTypeTranchesService.getTranchesTermsByFeeType(this.feeTypeId).subscribe(res => {
      this.getAllTranchDetails(res);
    });
  }
  editClick(): void {
    this.feeTypeName = '';
    this.isValidate = false;
    this.isEdit = true;
    this.isCreate = false;
    this.disableControls();
    this.isDisabled = true;
    this.manageFeeTypeTranchesService.getAllSchoolFeeTrancheTerms(this.schoolBoardId, this.classId, this.feeTypeId).subscribe(res => {
      this.getAllTranchDetails(res);
    });
  }
  getAllTranchDetails(data: any): void {
    this.isInvoiceError = false;
    this.invoiceError = '';
    this.removeItems();
    this.isErrorMessage = false;
    this.schoolFeeTranches = [];
    this.schoolFeeTranches = data.schoolFeeTranches.feeTypeTranches;
    if (this.schoolFeeTranches) {
      this.feeTypeName = data.schoolFeeTranches.feeTypeName;
    }
    this.schoolFeeTranches.forEach((element, i) => {
      if (element.isInvoiceGeneratedForFeeType) {
        this.isInvoiceError = true;
        this.invoiceError = AppSettings.INVOICE_ERROR;
      }
      const control = <FormArray>this.manageFeeTranchesForm.get('feeTypeTranches');
      if (element.schoolFeeAssignments.length) {
        control.push(this.setFeeTranchList(element));
      } else {
        control.push(this.setFeeTranchList(element, false));
      }
    });
    this.isDisplay = false;
  }
  setFeeTranchList(data, setDisable = true): FormGroup {
    this.feeTranchForm = this._fb.group({
      schoolFeeId: new FormControl(data.schoolFeeId),
      feeTypeTranchesId: new FormControl(data.feeTypeTranchesId),
      feeTypeTrancheName: new FormControl(data.feeTypeTrancheName),
      feeAmount: new FormControl({ value: data.feeAmount, disabled: setDisable || data.isInvoiceGeneratedForFeeType },
        [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(0), Validators.max(99999999.99)]),
      schoolFeeAssignments: this.setSchoolFeeAssignments(data),
    });
    return this.feeTranchForm;
  }
  setSchoolFeeAssignments(parent): FormArray {
    this.formArrayList = new FormArray([]);
    parent.schoolFeeAssignments.forEach(child => {
      if (child.isInvoiceGeneratedForFeeTerm) {
        this.invoiceError = AppSettings.INVOICE_ERROR;
        this.isInvoiceError = true;
      }
      this.formArrayList.push(this._fb.group({
        id: new FormControl(child.id),
        shortName: new FormControl(child.shortName),
        displayName: new FormControl(child.displayName),
        feeTypeTranchesId: new FormControl(child.feeTypeTranchesId),
        feeTypesForFeeTermId: new FormControl(child.feeTypesForFeeTermId),
        feeAmount: new FormControl({ value: child.feeAmount, disabled: child.isInvoiceGeneratedForFeeTerm },
          [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(0), Validators.max(9999999.99)]),
      }));
    });
    return this.formArrayList;
  }
  getTotalAmount(control): number | string {
    let sum = null;
    if (control.getRawValue().schoolFeeAssignments.length && control.valid) {
      control.getRawValue().schoolFeeAssignments.forEach(element => {
        if (element.feeAmount !== null && element.feeAmount !== '') {
          sum = parseFloat((sum + Number(element.feeAmount)).toFixed(2));
        }
      });
    }
    else {
      sum = control.getRawValue().feeAmount;
    }
    const sumValue = sum;
    control.controls['feeAmount'].setValue(sumValue);
    return sumValue;
  }
  manageFeTrancheData(manageFeesForm): any {
    manageFeesForm.feeTypeTranches.forEach(element => {
      element.schoolFeeAssignments = element.schoolFeeAssignments.filter(child =>
        child.feeAmount >= 0 && child.feeAmount != null && child.feeAmount !== ''
      );
    });
    manageFeesForm.feeTypeTranches = manageFeesForm.feeTypeTranches.filter(element =>
      element.feeAmount >= 0 && element.feeAmount !== null && element.feeAmount !== ''
    );
    return manageFeesForm;
  }
  onSubmitManageFeeTranches(ManageFeeTrancheForm: any): void {
    const data = ManageFeeTrancheForm.getRawValue();
    this.isValidate = true;
    this.isValidate = true;
    if (ManageFeeTrancheForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      this.feeTypeTranchesDataView = this.manageFeTrancheData(data);
      if (this.feeTypeTranchesDataView.feeTypeTranches.length) {
        this.feeTypeTranchesDataView.feeTypeId = this.feeTypeId;
        this.feeTypeTranchesDataView.classId = this.classId;
        this.feeTypeTranchesDataView.schoolBoardId = this.schoolBoardId;
        this.manageFeeTypeTranchesService.schoolFeeTrancheConfiguration(this.feeTypeTranchesDataView).subscribe(res => this.addUpdateResponce(res), error => {
          this.errorResponse(error);
        });
        this.disbleSubmitBtn = false;
      }
      else {
        this.disbleSubmitBtn = false;
        this.openSnackBar(AppSettings.FEE_AMOUNT_ERROR, true);
      }
    }
  }
  onUpdateManageFees(manageFeeTranchesForm): void {
    this.isValidate = true;
    const data = manageFeeTranchesForm.getRawValue();
    if (manageFeeTranchesForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      this.schoolFeeTranchView = this.manageFeTrancheData(data);
      this.schoolFeeTranchView.feeTypeId = this.feeTypeId;
      this.schoolFeeTranchView.classId = this.classId ? this.classId : null;
      this.schoolFeeTranchView.schoolBoardId = this.schoolBoardId;
      if (this.schoolFeeTranchView.feeTypeTranches.length === 0) {
        this.manageFeeTypeTranchesService.deleteAllSchoolFeeTranches(this.schoolFeeTranchView.schoolBoardId, this.schoolFeeTranchView.classId, this.schoolFeeTranchView.feeTypeId)
          .subscribe(res => this.addUpdateResponce(res), error => {
            this.errorResponse(error);
          });
      }
      else {
        this.manageFeeTypeTranchesService.updateSchoolFeeTranchesConfiguration(this.schoolFeeTranchView).subscribe(res => this.addUpdateResponce(res), error => {
          this.errorResponse(error);
        });
      }
      this.disbleSubmitBtn = false;
    }
  }
  addUpdateResponce(manageView: any): void {
    this.openSnackBar(manageView.messages.ResultMessage);
    if (manageView.statusCode === HttpStatus.OK) {
      this.disbleSubmitBtn = false;
      this.isAddButton = false;
      this.getAllFeeTranches(this.feeTypeId);
      this.isCreate = false;
      this.isEdit = false;
      this.enableControls();
      this.isDisabled = false;
    }
  }
  delete(id: any): void {
    const dialogRef = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.manageFeeConfigurationService.deleteSchoolFee(id).subscribe(res => {
          if (res.statusCode = HttpStatus.OK) {
            this.openSnackBar(res.messages.ResultMessage);
          }
          this.getAllFeeTranches(this.feeTypeId);
        }, error => {
          this.errorResponse(error);
        });
      }
    });
  }
  closePanel(): void {
    this.getAllFeeTranches(this.feeTypeId);
    this.isCreate = false;
    this.isEdit = false;
    this.enableControls();
    this.isDisabled = false;
  }
  disableControls(): void {
    this.manageFeeTranchesForm.controls['classId'].disable({ onlySelf: true });
    this.manageFeeTranchesForm.controls['schoolBoardId'].disable({ onlySelf: true });
    this.manageFeeTranchesForm.controls['feeTypeId'].disable({ onlySelf: true });
  }
  enableControls(): void {
    this.manageFeeTranchesForm.controls['classId'].enable({ onlySelf: true });
    this.manageFeeTranchesForm.controls['schoolBoardId'].enable({ onlySelf: true });
    this.manageFeeTranchesForm.controls['feeTypeId'].enable({ onlySelf: true });
  }
  removeItems(): void {
    const control = <FormArray>this.manageFeeTranchesForm.controls['feeTypeTranches'];
    for (let i = control.length - 1; i >= 0; i--) {
      control.removeAt(i);
    }
  }

  setDefaultBoard(): void {
    this.setFormControl('manageFeeTranchesForm', 'schoolBoardId', this.schoolBoards[0].value);
    this.fetchClasses(this.schoolBoards[0].value);
  }
}
