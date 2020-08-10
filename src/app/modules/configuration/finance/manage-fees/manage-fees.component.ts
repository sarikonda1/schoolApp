import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, FormGroupDirective } from '@angular/forms';
import { Pattern, AppSettings } from 'app/app.constants';
import { CommonComponent } from 'app/shared/common/common.component';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { ManageFeeConfigurationService } from 'app/service/configuration/finance/api/manage-fee-configuration.service';
import { ManageFeeConfigurationView } from '../models/manage-fee-configuration-view';
import * as HttpStatus from 'http-status-codes';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CloneSchoolFeeView } from '../models/clone-school-fee-view';
import { CommonService } from 'app/service/common.service';
import { SchoolFeeViewModel } from '../models/school-fee-view-model';

@Component({
  selector: 'app-manage-fees',
  templateUrl: './manage-fees.component.html',
  styleUrls: ['./manage-fees.component.scss'],
  animations: fuseAnimations
})
export class ManageFeesComponent extends CommonComponent implements OnInit {
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  @ViewChild('userManageFeesForm') userManageFeesForm;
  manageFeesForm: FormGroup;
  cloneManageFeesForm: FormGroup;
  feeTypeForm: FormGroup;
  feeTypeObject: Array<any>;
  manageFeeConfigurationView: ManageFeeConfigurationView;
  cloneSchoolFeeView: CloneSchoolFeeView;
  schoolFeeViewModel: SchoolFeeViewModel[];
  coustomDialog: any;
  schoolBoards: any[];
  classes: any[];
  feeTypeMulticheck: DropDownConfModel;
  schoolFees: Array<any> = [];
  feeTypes: any;
  errorMessage: any = AppSettings.SELECT_SCHOOLBOARD_OR_CLASSID;
  isErrorMessage = true;
  isAddButton: boolean;
  isUpdateButton: boolean;
  isValidate = false;
  feeTypeIds: Array<number> = [];
  formArrayList: FormArray;
  feeTypeList: Array<any>;
  schoolBoardId: any;
  classId: any;
  isRequired = true;
  classMultiCheck: DropDownConfModel;
  isCloneValidate: boolean;
  cloneClasses: Array<any> = [];
  isDisplay = false;
  primaryArray: Array<object> = [];
  secondaryArray: Array<object> = [];
  isCreate: boolean;
  isEdit: boolean;
  isDisabled: boolean;
  disbleSubmitBtn = false;
  isFeeType: boolean;
  isSchoolBoard: boolean;
  cloneClassesResponce: any;
  loaded: boolean;
  isInvoiceError: boolean;
  invoiceError = AppSettings.INVOICE_ERROR;
  selectedFeeTypes: Array<any> = [];

  constructor(
    private cd: ChangeDetectorRef,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    public classSectionService: ClassSectionService,
    public manageFeeConfigurationService: ManageFeeConfigurationService,
    public commonService: CommonService,
    public snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.manageFeesForm = new FormGroup({
      id: new FormControl(''),
      schoolBoardId: new FormControl('', [Validators.required]),
      classId: new FormControl({ value: '', disabled: true }, [Validators.required]),
      feeTypeId: new FormControl('', [Validators.required]),
      schoolFees: this._fb.array([]),
    });
    this.cloneManageFeesForm = new FormGroup({
      schoolBoardId: new FormControl('', [Validators.required]),
      classIds: new FormControl('', [Validators.required]),
    });
    this.fetchSchoolBoards();
    this.cloneSchoolFeeView = {
      sourceClassId: 0,
      sourceSchoolBoardId: 0,
      destinationClassIds: [],
      destinationSchoolBoardId: 0
    };
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
      this.setDefaultBoard();
    }
    if (!this.schoolBoards.length) {
      this.isSchoolBoard = false;
      this.fetchClasses(null);
      this.manageFeesForm.get('schoolBoardId').clearValidators();
      this.manageFeesForm.controls['schoolBoardId'].updateValueAndValidity();
      this.openSnackBar(AppSettings.NO_CLASSES_FOR_THE_BOARD, true);
    }
  }
  fetchClasses(data: any): void {
    this.classes = [];
    this.schoolBoardId = data;
    this.manageFeesForm.controls['classId'].enable();
    this.classSectionService.schoolAcademicClasses(data)
      .subscribe(res => {
        if (res.listViews && res.listViews.length) {
          res.listViews.forEach(element => {
            this.classes.push({
              label: element.name,
              value: element.id
            });
          });
        } else {
          this.openSnackBar(AppSettings.NO_CLASSES_FOR_THE_BOARD, true);
        }
      }, error => {
        this.errorResponse(error);
      });
    this.manageFeesForm.get(['classId']).setValue('');
    this.schoolFees = [];
    this.isDisplay = false;
    this.errorMessage = AppSettings.SELECT_SCHOOLBOARD_OR_CLASSID;
    this.isErrorMessage = true;
    this.isUpdateButton = false;
    this.isAddButton = false;
  }
  fetchFeeTypes(schoolBoardId: any, classId: any): void {
    this.feeTypes = [];
    this.manageFeeConfigurationService.getFeeTypesByClass(schoolBoardId, classId)
      .subscribe(res => {
        if (res.commonViewModels) {
          this.feeTypes = [];
          res.commonViewModels.forEach(element => {
            this.feeTypes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      });
  }
  getAll(classId: any): void {
    this.isInvoiceError = false;
    this.classId = classId;
    this.fetchFeeTypes(this.schoolBoardId, this.classId);
    this.manageFeeConfigurationService.getFeeTypeFeeTerms(this.schoolBoardId, classId).subscribe(res => {
      this.getAllDetails(res);
    });
  }
  getAllDetails(data: any): void {
    this.removeItems();
    this.schoolFees = [];
    this.schoolFees = data.schoolFees;
    this.schoolFees.forEach(x => {
      x.feeAmount = this.getFormattedCurrency(x.feeAmount);
      x.schoolFeeAssignments.forEach(element => {
        element.feeAmount = this.getFormattedCurrency(element.feeAmount);
      });
    });
    if (!this.schoolFees.length) {
      this.errorMessage = AppSettings.MANAGE_FEE_CLONE_OR_ADD_ERROR;
      this.isAddButton = true;
      this.isErrorMessage = true;
      this.isUpdateButton = false;
      this.isFeeType = false;
      this.isCreate = false;
      this.isEdit = false;
    }
    else {
      this.isFeeType = false;
      this.isDisplay = true;
      this.isCreate = false;
      this.isEdit = false;
      this.isErrorMessage = false;
      this.isUpdateButton = true;
      this.isAddButton = false;
    }
  }
  addClick(): void {
    this.isValidate = false;
    this.manageFeesForm.get(['feeTypeId']).clearValidators();
    this.isFeeType = true;
    this.userManageFeesForm.submitted = false;
    this.manageFeesForm.get('feeTypeId').setValidators([Validators.required]);
    this.manageFeesForm.controls['feeTypeId'].updateValueAndValidity();
    this.isErrorMessage = false;
    this.isRequired = true;
    this.isCreate = true;
    this.isEdit = false;
    this.disableControls();
    this.isDisabled = true;
    this.getFeeTypeData(true);
  }
  disableControls(): void {
    this.manageFeesForm.controls['classId'].disable();
    this.manageFeesForm.controls['schoolBoardId'].disable();
  }
  enableControls(): void {
    this.manageFeesForm.controls['classId'].enable();
    this.manageFeesForm.controls['schoolBoardId'].enable();
  }
  editClick(): void {
    this.isValidate = false;
    this.isFeeType = true;
    this.removeItems();
    this.isEdit = true;
    this.isCreate = false;
    this.disableControls();
    this.isDisabled = true;
    this.manageFeesForm.get('feeTypeId').clearValidators();
    this.manageFeesForm.controls['feeTypeId'].updateValueAndValidity();
    this.manageFeeConfigurationService.getAllFeetermsByClass(this.schoolBoardId, this.classId).subscribe(async res => { await this.getFeeTermDetails(res); }, error => {
      this.errorResponse(error);
    });
    this.getFeeTypeData(false);
  }
  getFeeTypeData(isRequired): void {
    this.feeTypeMulticheck = {
      multiSelect: true, serchBoxPalceholder: 'Fee Types',
      placeholder: 'Select Fee Types', data: this.feeTypes, noEntryFoundLabel: 'No Data Found', isRequired: isRequired
    };
  }
  removeItems(): void {
    const control = <FormArray>this.manageFeesForm.controls['schoolFees'];
    for (let i = control.length - 1; i >= 0; i--) {
      control.removeAt(i);
    }
  }
  feeTypeFieldss(parent): FormArray {
    this.formArrayList = new FormArray([]);
    parent.schoolFeeAssignments.forEach(child => {
      if (child.isInvoiceGeneratedForFeeTerm) {
        this.invoiceError = AppSettings.INVOICE_ERROR;
        this.isInvoiceError = true;
      }
      this.formArrayList.push(this._fb.group({
        id: new FormControl(child.id),
        feeTermName: new FormControl(child.shortName),
        schoolFeeId: new FormControl(child.schoolFeeId),
        feeTypesForFeeTermId: new FormControl(child.feeTypesForFeeTermId),
        feeAmount: new FormControl({ value: child.feeAmount, disabled: child.isInvoiceGeneratedForFeeTerm },
          [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(0), Validators.max(9999999.99)]),
        isInvoiceGeneratedForFeeTerm: child.isInvoiceGeneratedForFeeTerm
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
    control.controls['feeAmount'].setValue(sum);
    return sum;
  }
  setFeeTypeList(data, setDisable = true): FormGroup {
    this.feeTypeForm = this._fb.group({
      classId: new FormControl(this.classId),
      schoolFeeId: new FormControl(data.schoolFeeId),
      schoolBoardId: new FormControl(this.schoolBoardId),
      feeTypeId: new FormControl(data.feeTypeId),
      feeTypeName: new FormControl(data.name),
      feeAmount: new FormControl({ value: data.feeAmount, disabled: setDisable || data.isInvoiceGeneratedForFeeType },
        [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.min(0), Validators.max(99999999.99)]),
      isInvoiceGeneratedForFeeType: data.isInvoiceGeneratedForFeeType,
      schoolFeeAssignments: this.feeTypeFieldss(data),
    });
    return this.feeTypeForm;
  }
  getFeeTermDetails(data: any): void {
    this.isErrorMessage = false;
    this.selectedFeeTypes.push(data.schoolFees[0]);
    this.feeTypesInvoiceCheck();
    this.feeTypeList = [];
    this.feeTypeList = data.schoolFees;
    this.feeTypeList.forEach((element, i) => {
      const control = <FormArray>this.manageFeesForm.get('schoolFees');
      if (element.schoolFeeAssignments.length) {
        control.push(this.setFeeTypeList(element));
      } else {
        control.push(this.setFeeTypeList(element, false));
      }
    });
    this.isDisplay = false;
  }
  feeTypesInvoiceCheck(): void {
    if (!this.selectedFeeTypes.length) {
      this.isInvoiceError = false;
    }
    else {
      this.isInvoiceError = this.selectedFeeTypes.some(x => x.isInvoiceGeneratedForFeeType === true);
      if (!this.isInvoiceError) {
        this.isInvoiceError = this.selectedFeeTypes.some(x => x.schoolFeeAssignments.some(y => y.isInvoiceGeneratedForFeeTerm === true));
      }
    }
  }
  schoolBoardChange(id: any): void {
    this.unassignedClasses(id);
  }
  cloneClick(): void {
    this.loaded = false;
    this.cloneClasses = [];
    if (this.schoolBoards.length) {
      this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: [], noEntryFoundLabel: 'No Data Found', isRequired: true };
      this.loaded = true;
    }
    else {
      this.unassignedClasses(null);
      this.cloneManageFeesForm.get('schoolBoardId').clearValidators();
      this.cloneManageFeesForm.controls['schoolBoardId'].updateValueAndValidity();
    }
    this.popUpCheck();
  }
  popUpCheck(): void {
    if ((this.cloneClasses.length || this.schoolBoards.length)) {
      this.coustomDialog = this.dialog.open(
        this.customTemplate, {
        disableClose: true,
        width: '350px',
      }
      );
    }
  }
  unassignedClasses(id: any): void {
    this.cloneClasses = [];
    this.manageFeeConfigurationService.getUnAssignedClasses(id)
      .subscribe(res => {
        this.UnAssignedClasses(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  UnAssignedClasses(data: any): void {
    if (data.listViews) {
      data.listViews.forEach(element => {
        this.cloneClasses.push({
          label: element.name,
          value: element.id
        });
      });
    }
    if (this.cloneClasses.length) {
      this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: this.cloneClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
      if (!this.loaded) { this.popUpCheck(); }
    }
    else {
      this.classMultiCheck = { multiSelect: true, placeholder: 'Class', data: this.cloneClasses, noEntryFoundLabel: 'No Data Found', isRequired: true };
      this.openSnackBar(data.messages.ResultMessage);
      this.cloneClassesResponce = data.messages.ResultMessage;
    }
  }
  onSelectFeeType(ids: Array<any>): void {
    if (ids.length > this.primaryArray.length) {
      const newFeeTypeIds: Array<number> = [];
      const idValues = [];
      ids.forEach(element => idValues.push(element.value));
      newFeeTypeIds.push(this.primaryArray.length ? idValues.filter(function (n): boolean { return !this.has(n); }, new Set(this.primaryArray)) : ids[0].value);
      this.manageFeeConfigurationService.getFeeTermsByFeeType(newFeeTypeIds).subscribe(async res => { await this.getFeeTermDetails(res); }, error => {
        this.errorResponse(error);
      });
    }
    else {
      const idValues = [];
      ids.forEach(element => idValues.push(element.value));
      const removedId = this.primaryArray.filter(function (n): boolean { return !this.has(n); }, new Set(idValues));
      this.feeTypeIds.splice(this.feeTypeIds.indexOf(Number(removedId)));
      if (this.manageFeesForm.value.schoolFees.length > 0) {
        const index = this.manageFeesForm.value.schoolFees.findIndex(x => x.feeTypeId === (removedId[0]));
        this.selectedFeeTypes = this.selectedFeeTypes.filter(x => x.feeTypeId !== removedId[0]);
        this.feeTypesInvoiceCheck();
        const control = <FormArray>this.manageFeesForm.controls['schoolFees'];
        control.removeAt(index);
      }
    }
    this.feeTypeIds = [];
    this.primaryArray = [];
    if (ids.length) {
      ids.forEach((x: any) => {
        this.feeTypeIds.push(x.value);
        this.primaryArray.push(x.value);
      }
      );
    }
  }
  onSubmitManageFees(manageFeesForm: any): void {
    this.isValidate = true;
    let data = manageFeesForm.getRawValue();
    if (manageFeesForm.status === AppSettings.VALID) {
      this.disbleSubmitBtn = true;
      data = this.manageFeesData(data);
      if (data.schoolFees.length) {
        this.manageFeeConfigurationService.schoolFeeAssignment(data.schoolFees).subscribe(res => this.addUpdateResponce(res), error => {
          this.errorResponse(error);
        });
        this.disbleSubmitBtn = false;
      }
      else {
        this.disbleSubmitBtn = false;
        this.openSnackBar(AppSettings.FEE_CONFIGURATION_DATA_ERROR, true);
      }
    }
  }
  manageFeesData(manageFeesForm): any {
    manageFeesForm.schoolFees.forEach(element => {
      element.schoolFeeAssignments = element.schoolFeeAssignments.filter(child =>
        child.feeAmount >= 0 && child.feeAmount !== null && child.feeAmount !== ''
      );
    });
    manageFeesForm.schoolFees = manageFeesForm.schoolFees.filter(element =>
      element.feeAmount >= 0 && element.feeAmount !== null && element.feeAmount !== ''
    );
    return manageFeesForm;
  }
  onUpdateManageFees(manageFeesForm): void {
    this.isValidate = true;
    let data = manageFeesForm.getRawValue();
    if (manageFeesForm.getRawValue().schoolFees) {
      if (manageFeesForm.status === AppSettings.VALID) {
        this.disbleSubmitBtn = true;
        data = this.manageFeesData(data);
        this.schoolFeeViewModel = data;
        if (data.schoolFees.length === 0) {
          this.manageFeeConfigurationService.deleteAllSchoolFees(data.schoolBoardId, data.classId)
            .subscribe(res => this.addUpdateResponce(res), error => {
              this.errorResponse(error);
            });
        }
        else {
          this.manageFeeConfigurationService.updateSchoolFees(data.schoolFees).subscribe(res => this.addUpdateResponce(res), error => {
            this.errorResponse(error);
          });
        }
        this.disbleSubmitBtn = false;
      }
    }
  }
  /**
     * Responce for Add or update
     * @param testTypeView 
     */
  addUpdateResponce(manageView: any): void {
    this.openSnackBar(manageView.messages.ResultMessage);
    if (manageView.statusCode === HttpStatus.OK) {
      this.primaryArray = [];
      this.disbleSubmitBtn = false;
      this.isAddButton = false;
      this.feeTypeList = [];
      this.getFeeTypeData(false);
      this.getAll(this.classId);
      this.isRequired = false;
      this.manageFeesForm.get(['feeTypeId']).setValue('');
      this.fetchFeeTypes(this.schoolBoardId, this.classId);
      this.enableControls();
      this.isDisabled = false;
      this.scrollIntoViewById('manage-fee-header');
    }
  }
  closeCloneDialog(data: any): void {
    this.cloneManageFeesForm.reset();
    this.dialog.closeAll();
  }
  onSubmitCloneManageFees(result: any): void {
    this.isCloneValidate = true;
    if (result.status === AppSettings.VALID) {
      this.cloneSchoolFeeView.destinationClassIds = result.value.classIds.map(x => x.value);
      this.cloneSchoolFeeView.sourceClassId = this.classId;
      this.cloneSchoolFeeView.destinationSchoolBoardId = result.value.schoolBoardId;
      this.cloneSchoolFeeView.sourceSchoolBoardId = this.schoolBoardId;
      this.manageFeeConfigurationService.cloneFeeStructure(this.cloneSchoolFeeView).subscribe(res => this.cloneResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }
  cloneResponse(result: any): void {
    if (result.status = HttpStatus.OK) {
      this.dialog.closeAll();
      this.cloneManageFeesForm.reset();
    }
    this.openSnackBar(result.messages.ResultMessage);
  }
  delete(id: any): void {
    const dialogRef = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.manageFeeConfigurationService.deleteSchoolFee(id).subscribe(res => {
          if (res.statusCode = HttpStatus.OK) {
            this.openSnackBar(res.messages.ResultMessage);
          }
          this.getAll(this.classId);
        }, error => {
          this.errorResponse(error);
        });
      }
    });
  }
  closePanel(): void {
    this.userManageFeesForm.submitted = false;
    this.getAll(this.classId);
    this.isCreate = false;
    this.isEdit = false;
    this.primaryArray = [];
    this.enableControls();
    this.isDisabled = false;
    this.manageFeesForm.controls['feeTypeId'].reset();
  }

  setDefaultBoard(): void {
    this.setFormControl('manageFeesForm', 'schoolBoardId', this.schoolBoards[0].value);
    this.fetchClasses(this.schoolBoards[0].value);
  }
}
