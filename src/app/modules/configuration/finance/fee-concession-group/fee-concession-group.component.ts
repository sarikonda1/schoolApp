import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FeeConcessionGroupListView } from '../models/fee-concession-group-list-view';
import { FeeConcessionGroupTermViewModel } from '../models/fee-concession-group-term-viewmodel';
import { FeeConcessionGroupViewModel } from '../models/fee-concession-group-viewmodel';
import { Pattern, AppSettings } from 'app/app.constants';
import { FeeConcessionGroupService } from 'app/service/configuration/finance/api/fee-concession-group.service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { FeeConcessionGroupsDataView } from '../models/fee-concession-group-data-view';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-fee-concession-group',
  templateUrl: './fee-concession-group.component.html',
  styleUrls: ['./fee-concession-group.component.scss']
})

export class FeeConcessionGroupComponent extends CommonComponent implements OnInit {
  @ViewChild('feeConcessionGroupTemplate') addFeeConcessiongroupTemplate;
  @ViewChild('feeConcessionForm') feeConcessionForm;
  @ViewChild('input1') inputEl: ElementRef;
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  filterRowData: any = [];
  gridName = 'feeconcessionghroupconfiguration';
  closeAddPanel = true;
  m_feeConcessionGroupListView: FeeConcessionGroupListView;
  currentComponentName: 'feeconcessionghroupconfiguration';
  feeConcessionGroupTermView: FeeConcessionGroupTermViewModel;
  feeConcessionGroupTermViewModel: Array<FeeConcessionGroupTermViewModel>;
  feeConcessionGroupViewModel: FeeConcessionGroupViewModel;

  modelname: any;
  concessionTypes: Array<any> = [];
  feeTypes: Array<any> = [];
  feeTerms: Array<any> = [];
  dropDownData: DropDownConfModel;
  dropDownLoaded = Promise.resolve(false);
  feeConcessionGroupForm: FormGroup;
  feeConcessionFeeType: FormArray;
  feeConcessionGroupArray: FormArray;
  feeConcessionFeeTerm: FormArray;
  dataLoaded: Boolean = false;
  typeLoaded: Boolean = false;
  validate: Boolean = false;
  error: Array<any> = [];
  buttonName: any;
  disbleSubmitBtn = false;
  isUpdate: boolean;
  feeConfigurationId: string;

  constructor(private _fb: FormBuilder, public commonService: CommonService,
    public dialog: MatDialog, private commonComponent: CommonComponent,
    private _feeConcessionGroupService: FeeConcessionGroupService, public snackBar: MatSnackBar) {
    super();

    this.m_feeConcessionGroupListView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      name: [],
      code: [],
      description: [],
      feeTypeIds: [],
      concession: [],
      concessionType: [],
      feeTermIds: [],
    };

    this.feeConcessionGroupViewModel = {
      groupName: '',
      code: '',
      description: '',
      feeConcessionGroupFeeTypeViewModel: []
    };
  }

  ngOnInit(): void {
    this.getFeeTypes();
    this.getFeeConcessionTypes();

    this.cols = [
      { field: 'name', header: 'Concession Group' },
      { field: 'code', header: 'Code' },
      { field: 'description', header: 'Description' },
      { field: 'feeType', header: 'Fee Type' },
      { field: 'concessionType', header: 'Concession Type' },
      { field: 'term', header: 'Fee Term' },
      { field: 'concession', header: 'Concession Amount' },
      { field: 'actions', header: 'Actions' },
    ];

    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.m_feeConcessionGroupListView = modelTableComponent;
    }

    // initializing table settings /
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.m_feeConcessionGroupListView,
      tablename: 'Fee Concession Groups',
      componentName: this.currentComponentName,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
    };
    this.loadConcessionGroupdata();
  }

  createFeeConcessionGroupItem(groupName: any = '', code: any = '', description: any = ''): FormGroup {
    return this._fb.group({
      groupName: [groupName, Validators.maxLength(45)],
      code: [code, Validators.maxLength(6)],
      description: [description, Validators.maxLength(135)],
      feeConcessionFeeType: this.createFeeConcessionTypeArray(),
    });
  }

  createFeeConcessionTypeArray(): FormArray {
    const arr = new FormArray([]);
    if (this.feeTypes.length > 0) {
      this.feeTypes.forEach((element) => {
        arr.push(this.createFeeType(element.label, element.value));
      });
    }
    else {
      this.createFeeType('', '');
    }
    return arr;
  }

  createFeeType(feeTypeName: any = '', feeTypeId = ''): FormGroup {
    return this._fb.group({
      feeTypeName: feeTypeName,
      feeTypeId: feeTypeId,
      concessionTypeId: '',
      isfeeterms: false,
      feeTypeForFeeTermIdMulti: '',
      feeTerms: '',
      discount: new FormControl('', [Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999)]),
      dropDownData: '',
      feeConcessionFeeTerm: this.createFeeterm(),
    });
  }

  createFeeterm(): FormArray {
    this.dataLoaded = true;
    const arr = new FormArray([]);
    return arr;
  }

  createFeeConcessionFeeTermArray(): FormGroup {

    return this._fb.group({
      feeTypeForTermId: '',
      feeTermName: '',
      termConcessionAmt: new FormControl('', [Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999)]),
    });
  }

  getValue(form, i: any): void {
    return form.controls.feeConcessionFeeType.controls[i].controls.isfeeterms.value;
  }

  feeConcession(form): FormArray {
    return <FormArray>form.get('feeConcessionFeeType');
  }

  openForm(): void {
    this.closeAddPanel = false;
    this.buttonName = AppSettings.SUBMIT;
    this.feeConcessionGroupForm = this._fb.group({
      feeConcessionGroupArray: this._fb.array([this.createFeeConcessionGroupItem()])
    });
    this.valueChangesInfeeConcessionGroupArray();
  }


  // row-wise actions of the table(edit/delete)
  rowActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this._feeConcessionGroupService.deleteFeeConcessionGroup(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    else if (event.operation === AppSettings.EDIT) {
      this.feeConfigurationId = event.clickedRow.id;
      this._feeConcessionGroupService.fetchConcessionGroupById(event.clickedRow.id).subscribe(res => this.getConcessionDetails(res), error => {
        this.errorResponse(error);
      });
    }

  }

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.loadConcessionGroupdata();
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }

  concessionGroupTableData(_event: FeeConcessionGroupListView): void {
    this.m_feeConcessionGroupListView = _event;
    this.loadConcessionGroupdata();
  }

  loadConcessionGroupdata(): void {
    this._feeConcessionGroupService.fetchFeeConcessionGroup(this.m_feeConcessionGroupListView.sortBy, this.m_feeConcessionGroupListView.sortOrder,
      this.m_feeConcessionGroupListView.name, this.m_feeConcessionGroupListView.code, this.m_feeConcessionGroupListView.description,
      this.m_feeConcessionGroupListView.feeTypeIds, this.m_feeConcessionGroupListView.concessionType,
      this.m_feeConcessionGroupListView.concession, this.m_feeConcessionGroupListView.feeTermIds, this.m_feeConcessionGroupListView.pageNumber,
      this.m_feeConcessionGroupListView.pageSize).subscribe(data => this.response(data), error => {
        this.errorResponse(error);
      });
  }

  response(data: any): void {
    if (localStorage.getItem(this.currentComponentName)) {
      this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
    }
    this.rows = [];
    if (data.feeConcessionGroupDataViewList) {
      this.rows = data.feeConcessionGroupDataViewList.list;
      this.totalItems = data.feeConcessionGroupDataViewList.totalItems;
    } else {
      this.rows = [];
    }
    const gridOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT
      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
      },
    ];
    this.filterRowData = this.rows;
    const x = [];

    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {

          const foundIndex = x.findIndex((value: any) => {
            if (value.name === element.name && value.id === element.id) {
              return value;
            }
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;
    if (this.filterRowData.length > 0) {
      // apply edit and delete
      this.filterRowData.forEach(element => {
        this.rows.forEach(element1 => {
          if (element.name === element1.name && element.id === element1.id && element.feeType === element1.feeType
            && element.concessionType === element1.concessionType && element.term === element1.term) {
            element1.operations = gridOperations;
          }
        });
      });

      this.rows.forEach(ele => {
        if (ele.concessionType !== AppSettings.DISCOUT_PERCENT) {
          ele.concession = ele.concession > 0
            ? this.getFormattedCurrency(ele.concession) : ele.concession;
        }
      });
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.m_feeConcessionGroupListView,
      rows: this.rows,
      tablename: 'Fee Concession Groups',
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      rowGroupingColumns: ['name', 'code', 'description', 'feeType', 'concessionType'],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Fee Concession Groups'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.BUTTON_NAME
        }
      }
    };

    this.filterRowData = this.rows;
  }

  getFeeTypes(): void {
    this.feeTypes = [];
    this._feeConcessionGroupService.fetchfeeTypes(null).subscribe(response => {
      if (response.listViews.length) {

        response.listViews.forEach(element => {
          this.feeTypes.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getFeeConcessionTypes(): void {
    this.concessionTypes = [];
    this._feeConcessionGroupService.fetchConcessionTypes(null).subscribe(response => {
      if (response.listViews.length) {
        response.listViews.forEach(element => {

          this.concessionTypes.push({
            label: element.name,
            value: element.id,
            code: element.code
          });
        });
        this.typeLoaded = true;
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  onSelectConcessionType(data: any, data1: any, i = 0, form): void {
    this.feeConcessionFeeType = form.controls.feeConcessionFeeType as FormArray;
    this.feeConcessionFeeType.controls[i].patchValue({ concessionTypeId: data.value ? data.value : null });
    form.controls.feeConcessionFeeType.controls[i].controls.discount.patchValue(null);
    this.feeTerms = [];
    form.controls.feeConcessionFeeType.controls[i].controls.feeTypeForFeeTermIdMulti.value = [];
    if (!data.value) {
      this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: false });
      form.controls.feeConcessionFeeType.controls[i].controls.feeConcessionFeeTerm = new FormArray([]);
      return;
    }
    if (this.concessionTypes.find(x => x.value === data.value).code === AppSettings.FCT_DISCOUNT_CODE
      || this.concessionTypes.find(x => x.value === data.value).code === AppSettings.FCT_TERMDISCOUNT_CODE) {
      this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: false });
      form.controls.feeConcessionFeeType.controls[i].controls.feeConcessionFeeTerm = new FormArray([]);
    }
    else {
      form.controls.feeConcessionFeeType.controls[i].controls.discount.patchValue(null);
      this.feeConcessionFeeType.controls[i].patchValue({ isfeeterms: true });

      this._feeConcessionGroupService.fetchFeeTerms(data1.value).subscribe(response => {
        if (response.listViews.length) {

          response.listViews.forEach(element => {
            this.feeTerms.push({
              label: element.name,
              value: element.id
            });
          });
          this.dropDownLoaded = Promise.resolve(true);

          this.dropDownData = { multiSelect: true, placeholder: 'Fee Terms', data: this.feeTerms, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: false };
          this.feeConcessionFeeType.controls[i].patchValue({ dropDownData: this.dropDownData });
        }
        else {
          this.feeConcessionFeeType.controls[i].patchValue({ dropDownData: null });
        }
      }, error => {
        this.errorResponse(error);
      });
    }
  }

  onSelectFeeTerm(data: any, i = 0, form): void {
    let existingfeeTermArray = [];
    const dataArray = [];
    if (data.length > 0) {

      data.forEach(element => {
        this.feeConcessionFeeTerm = <FormArray>form.get('feeConcessionFeeTerm');
        dataArray.push(element.value);
        let isTermExist = false;
        if (this.feeConcessionFeeTerm.controls.length > 0) {
          existingfeeTermArray = [];
          form.controls.feeConcessionFeeTerm.controls.forEach(ele => {
            existingfeeTermArray.push(ele.controls.feeTypeForTermId.value);
            if (ele.controls.feeTypeForTermId.value === element.value) {
              isTermExist = true;
            }
          });
        }
        if (isTermExist === false) {
          this.feeConcessionFeeTerm.push(this.createFeeTerm(element.label, element.value));
        }
      });

      const removableFeeTermId = existingfeeTermArray.filter(function (item): boolean {
        return !dataArray.includes(item);
      });
      if (removableFeeTermId.length > 0) {
        this.feeConcessionFeeTerm.removeAt(form.controls.feeConcessionFeeTerm.controls.findIndex(x => x.controls.feeTypeForTermId.value === removableFeeTermId[0]));
      }
    } else {
      const clearFormArray = <FormArray>form.get('feeConcessionFeeTerm');
      while (clearFormArray.length !== 0) {
        clearFormArray.removeAt(0);
      }
    }
  }

  createFeeTerm(FeeTermName: any = '', FeeTypeForFeeTermId = 0): FormGroup {

    return this._fb.group({
      feeTypeForTermId: FeeTypeForFeeTermId,
      feeTermName: FeeTermName,
      termConcessionAmt: new FormControl('', [Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999)])
    });
  }

  onCancelClick(): void {
    this.scrollIntoView('app-table');
    this.feeConcessionGroupForm.reset();
    this.feeConcessionForm.resetForm();
    this.closeAddPanel = true;
    this.validate = false;
    this.isUpdate = false;
    this.getFeeTypes();
    this.loadConcessionGroupdata();
  }

  ValidateForm(form: any): void {
    this.error = [];
    const concessionTypeId = form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.reduce(function (tot, record): void {
      return tot + record.controls.concessionTypeId.value;
    }, 0);
    if (concessionTypeId === '0' || concessionTypeId === 0) {
      this.error.push({
        errorMessage: AppSettings.FEE_TYPE_REQUIRED,
        isValid: false
      });
      return;
    }

    form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(element => {
      if (element.controls.discount.status === AppSettings.INVALID) {
        // this.error = [];
        return;
      }
      if (element.controls.concessionTypeId.value > 0
        && element.controls.isfeeterms.value === false
        && (element.controls.discount.value === 0
          || element.controls.discount.value === '' || element.controls.discount.value === null)) {

        this.error.push({
          errorMessage: AppSettings.FEE_DISCOUNT_REQUIRED,
          isValid: false
        });

        return;
      }

      if (element.controls.concessionTypeId.value > 0 &&
        element.controls.isfeeterms.value === true && element.controls.feeTypeForFeeTermIdMulti.value.length === 0) {
        if (element.controls.dropDownData.value) {
          this.error.push({
            errorMessage: AppSettings.FEE_TERMS_REQUIRED,
            isValid: false
          });
        } else {
          this.error.push({
            errorMessage: AppSettings.NO_FEE_TERMS,
            isValid: false
          });
        }

        return;
      }

      if (element.controls.concessionTypeId.value > 0 && element.controls.isfeeterms.value === true && element.controls.feeTypeForFeeTermIdMulti.value.length > 0) {

        element.controls.feeConcessionFeeTerm.controls.forEach(term => {
          if (term.controls.termConcessionAmt.status === AppSettings.INVALID) {
            // this.error = [];
            return false;
          }
          if (term.controls.termConcessionAmt.value === 0 || term.controls.termConcessionAmt.value === '') {
            this.error.push({
              errorMessage: AppSettings.FEETERM_CONCESSION_REQUIRED,
              isValid: false
            });

            return;
          }
        });
      }
    });
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): MatDialogRef<CustomDialogComponent, any> {
    return this.dialog.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  save(form: any): void {
    this.feeConcessionGroupTermViewModel = [];
    if (this.feeConcessionGroupForm.status === AppSettings.INVALID) {
      document.getElementById('groupName').focus();
      return;
    }
    if (this.feeConcessionGroupForm.status === AppSettings.VALID) {
      // if (this.feeConcessionFeeTerm && this.feeConcessionFeeTerm.status === AppSettings.INVALID) {
      //   return;
      // }
      this.ValidateForm(form);
      if (this.error.length > 0) {
        this.openSnackBar(this.error[0].errorMessage, true);
        this.scrollIntoViewById('add-update-form');
      }
      else {

        if (this.isUpdate) {
          this.validate = false;
          let updateModel: FeeConcessionGroupsDataView;
          updateModel = {
            id: '',
            feeConcessionGroupViewModel: this.feeConcessionGroupViewModel
          };

          this.prepareUpdateData(form);
          updateModel.id = this.feeConfigurationId;
          updateModel.feeConcessionGroupViewModel = this.feeConcessionGroupViewModel;


          this._feeConcessionGroupService.updateFeeConcessionGroup(updateModel)
            .subscribe(res => this.addResponse(res), error => {
              this.errorResponse(error);
            });
        }
        else {
          this.validate = false;
          this.feeConcessionGroupViewModel.groupName = form.controls.feeConcessionGroupArray.controls[0].controls['groupName'].value;
          this.feeConcessionGroupViewModel.code = form.controls.feeConcessionGroupArray.controls[0].controls.code.value;
          this.feeConcessionGroupViewModel.description = form.controls.feeConcessionGroupArray.controls[0].controls.description.value;
          this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel = [];
          form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(element => {
            this.feeConcessionGroupTermViewModel = [];
            //// Array For FeeTerms////
            if (element.controls.concessionTypeId.value > 0) {
              element.controls.feeConcessionFeeTerm.controls.forEach(item => {
                this.feeConcessionGroupTermViewModel.push({
                  feeTypeForTermId: item.controls.feeTypeForTermId.value,
                  termConcessionAmt: item.controls.termConcessionAmt.value
                });
              });

              /// Array For FeeTypes///
              this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel.push({
                feeTypeId: element.controls.feeTypeId.value,
                concessionTypeId: element.controls.concessionTypeId.value,
                discount: element.controls.discount.value,
                feeConcessionGroupTermViewModel: this.feeConcessionGroupTermViewModel
              });
            }
          });
          this._feeConcessionGroupService.createFeeConcessionGroup(this.feeConcessionGroupViewModel)
            .subscribe(res => this.addResponse(res), error => {
              this.errorResponse(error);
            });
        }
      }
    } else {
      this.ValidateForm(form);
    }
  }

  prepareUpdateData(form: any): void {
    this.feeConcessionGroupViewModel.groupName = form.controls.feeConcessionGroupArray.controls[0].controls['groupName'].value;
    this.feeConcessionGroupViewModel.code = form.controls.feeConcessionGroupArray.controls[0].controls.code.value;
    this.feeConcessionGroupViewModel.description = form.controls.feeConcessionGroupArray.controls[0].controls.description.value;
    this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel = [];

    form.controls.feeConcessionGroupArray.controls[0].controls.feeConcessionFeeType.controls.forEach(element => {
      this.feeConcessionGroupTermViewModel = [];
      //// Array For FeeTerms////
      if (element.controls.concessionTypeId.value > 0) {
        element.controls.feeConcessionFeeTerm.controls.forEach(item => {
          this.feeConcessionGroupTermViewModel.push({
            feeTypeForTermId: item.controls.feeTypeForTermId.value,
            termConcessionAmt: item.controls.termConcessionAmt.value
          });
        });

        /// Array For FeeTypes///
        this.feeConcessionGroupViewModel.feeConcessionGroupFeeTypeViewModel.push({
          feeTypeId: element.controls.feeTypeId.value,
          concessionTypeId: element.controls.concessionTypeId.value,
          discount: element.controls.discount.value,
          feeConcessionGroupTermViewModel: this.feeConcessionGroupTermViewModel
        });

      }
    });
  }

  addResponse(response: any): void {
    this.onCancelClick();
    this.openSnackBar(response.messages.ResultMessage);
  }

  ontestSeclect(): void {

    this.valueChangesInfeeConcessionGroupArray();
  }

  valueChangesInfeeConcessionGroupArray(): void {
    this.feeConcessionGroupForm.controls['feeConcessionGroupArray'].valueChanges.pipe(distinctUntilChanged()).subscribe((formArray) => {
      formArray[0].feeConcessionFeeType.forEach((element, j) => {
        const validators = [];
        if (element.concessionTypeId === 125) {
          // tslint:disable-next-line: max-line-length
          validators.push(Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999));
        }
        else if (element.concessionTypeId === 126) {
          // tslint:disable-next-line: max-line-length
          validators.push(Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999));
        }
        else {
          if (!element.concessionTypeId) {
            // tslint:disable-next-line: max-line-length
            (<FormArray>(<FormArray>this.feeConcessionGroupForm.get('feeConcessionGroupArray')).controls[0].get('feeConcessionFeeType')).controls[j].get('discount').patchValue(null, { emitEvent: false });
          }
          validators.push(Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999));
        }

        // tslint:disable-next-line: max-line-length
        (<FormArray>(<FormArray>this.feeConcessionGroupForm.get('feeConcessionGroupArray')).controls[0].get('feeConcessionFeeType')).controls[j].get('discount').setValidators(validators);

        // tslint:disable-next-line: max-line-length
        (<FormArray>(<FormArray>this.feeConcessionGroupForm.get('feeConcessionGroupArray')).controls[0].get('feeConcessionFeeType')).controls[j].get('discount').updateValueAndValidity({ emitEvent: false });

        if (element.feeConcessionFeeTerm.length) {
          element.feeConcessionFeeTerm.forEach((element1, r) => {
            (<FormArray>(<FormArray>(<FormArray>this.feeConcessionGroupForm.get('feeConcessionGroupArray')).controls[0].
              get('feeConcessionFeeType')).controls[j].get('feeConcessionFeeTerm')).controls[r].get('termConcessionAmt').setValidators(validators);
            (<FormArray>(<FormArray>(<FormArray>this.feeConcessionGroupForm.get('feeConcessionGroupArray')).controls[0].
              get('feeConcessionFeeType')).controls[j].get('feeConcessionFeeTerm')).controls[r].get('termConcessionAmt').updateValueAndValidity({ emitEvent: false });
          });
        }
      });
    });
  }


  getConcessionDetails(data: any): void {

    this.isUpdate = true;
    this.feeConcessionGroupViewModel = data.feeConcessionGroupDataViewModel;

    this.feeConcessionGroupForm = this._fb.group({
      feeConcessionGroupArray: this._fb.array([this.createFeeConcessionGroupItem()])
    });
    // this.feeConcessionGroupForm?.controls.feeConcessionGroupArray?.controls[i].controls.feeConcessionFeeType?.controls[j].controls.discount 

    this.valueChangesInfeeConcessionGroupArray();

    if (this.feeConcessionGroupViewModel != null) {
      const dataArray = [];
      const innerArray = [];
      let feeConcessionGroupArrayData: any;

      dataArray.push(this.feeConcessionGroupViewModel);
      innerArray.push(dataArray[0].feeConcessionGroupDiscountDataViewModel);

      feeConcessionGroupArrayData = this.feeConcessionGroupForm.get('feeConcessionGroupArray');
      const feeConcessionFeeTypeData = feeConcessionGroupArrayData.controls[0].get('feeConcessionFeeType');
      feeConcessionGroupArrayData.patchValue(dataArray);

      innerArray[0].forEach(dataItem => {
        this.UpdateData(dataItem, feeConcessionFeeTypeData);
      });

    } else {
      this.openSnackBar(data.messages.ResultMessage);
    }

  }

  createTermConcessionAmt(): FormGroup {
    return this._fb.group({
      feeTypeForTermId: '',
      feeTermName: '',
      termConcessionAmt: new FormControl('', [Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999)]),
    });
  }

  UpdateData(ParentDataItem: any, form): void {
    const that = this;

    // tslint:disable-next-line:no-shadowed-variable
    form.controls.forEach(function (element, i): void {
      if (element.value.feeTypeId === ParentDataItem.feeTypeId) {

        form.controls[i].patchValue({ concessionTypeId: ParentDataItem.concessionTypeId });
        form.controls[i].patchValue({ discount: ParentDataItem.discount });

        if (that.concessionTypes.find(x => x.value === ParentDataItem.concessionTypeId).code
          === AppSettings.FCT_DISCOUNT_CODE || that.concessionTypes.find(x => x.value === ParentDataItem.concessionTypeId).code === AppSettings.FCT_TERMDISCOUNT_CODE) {
          form.controls[i].patchValue({ isfeeterms: false });
        } else {
          that.feeTerms = [];
          let selectedArray = [];
          form.controls[i].patchValue({ isfeeterms: true });

          that._feeConcessionGroupService.fetchFeeTerms(element.value.feeTypeId).subscribe(response => {
            if (response.listViews.length) {

              that.feeTerms = [];
              selectedArray = [];
              const feeTypeForFeeTermIds = [];

              response.listViews.forEach(data => {
                that.feeTerms.push({
                  label: data.name,
                  value: data.id
                });
              });

              that.dropDownLoaded = Promise.resolve(true);
              that.dropDownData = { multiSelect: true, placeholder: 'Fee Terms', data: that.feeTerms, noEntryFoundLabel: AppSettings.NODATA_FOUND, isRequired: false };
              form.controls[i].patchValue({ dropDownData: that.dropDownData });

              ParentDataItem.feeConcessionGroupTermDiscountDataViewModel.forEach(function (dataItem, p): void {

                feeTypeForFeeTermIds.push(dataItem.feeTypeForFeeTermId);
                that.feeConcessionFeeTerm = <FormArray>form.controls[i].get('feeConcessionFeeTerm');
                that.feeConcessionFeeTerm.push(that.createTermConcessionAmt());
                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ feeTypeForTermId: dataItem.feeTypeForFeeTermId });
                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ termConcessionAmt: dataItem.termConcessionAmt });
                form.controls[i].get('feeConcessionFeeTerm').controls[p].patchValue({ feeTermName: dataItem.feeTermName });
                // feeTermName
              });

              feeTypeForFeeTermIds.forEach(id => {
                that.feeTerms.map(item => {
                  if (item.value === id) {
                    selectedArray.push(item);
                  }
                });
              });

              form.controls[i].patchValue({ feeTypeForFeeTermIdMulti: selectedArray });
            }
            else{
                form.controls[i].patchValue({ dropDownData: null });
            }
          }, error => {
            that.errorResponse(error);
          });
        }
      }
    });

  }

  trimTextBoxSpaces(key: string, form: any): void {
    this.feeConcessionGroupForm.get('feeConcessionGroupArray')['controls'].forEach(controlElt => {

      if (controlElt.controls[key] !== null && controlElt.controls[key] !== undefined) {
        if (typeof controlElt.controls[key].value === 'object' && controlElt.controls[key].value !== null) {
        } else {
          controlElt.controls[key].setValue(this.commonService.trimSpaces(controlElt.controls[key].value));
        }
      }
    });
  }
}


