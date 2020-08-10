import { Component, Input, ViewChild, ChangeDetectorRef, ElementRef, OnInit, OnChanges } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { SequenceConfiguratonView } from '../models/sequence-configuration-view';
import { SequenceService } from 'app/service/academic-service/api/sequence.service';
import { SchoolSequenceView } from 'app/models/academics/school-sequence-view';
import { SequenceStatusView } from 'app/models/academics/sequence-status-view';
import { SchoolSequenceViewModel } from 'app/models/academics/school-sequence-viewmodel';
import { PATTERN_VALIDATOR } from '@angular/forms/src/directives/validators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sequence-configuration',
  templateUrl: './sequence-configuration.component.html',
  styleUrls: ['./sequence-configuration.component.scss']
})
export class SequenceConfigurationComponent extends CommonComponent implements OnInit, OnChanges {
  @ViewChild('sequnce') myForm;
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;
  @ViewChild('code') seqCode: ElementRef;

  /// FormGroup Variable
  sequenceForm: FormGroup;
  // models declaration
  sequenceConfiguratonView: SequenceConfiguratonView;
  schoolSequenceView: SchoolSequenceViewModel;
  listOfSequences: Array<SchoolSequenceViewModel> = [];
  statusView: SequenceStatusView;
  currentComponent = 'SequenceConfigurationComponent';
  // variable declaration
  HttpStatus: any;
  cols: any[];
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalItems: number;
  disableSubmitBtn = false;
  closeAddPanel: boolean;
  sequenceCategoryTypesdropdown: Array<any> = [];
  sequenceFormSubmitted = true;
  sequnceParameterList: Array<any>;
  startingSequnce = true;
  sequenceParams: Array<any> = [];
  sequenceCategories: Array<any> = [];
  codesArray: any[] = [];
  sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
  sequenceDisplayText = '';
  sequenceParameters: Array<any>;
  sequenceStatusYes: string = AppSettings.STATUS_ACTIVE;
  sequenceStatusNo: string = AppSettings.STATUS_INACTIVE;
  sequenceStatus: string;
  dynamicPlaceholder: any = '';
  isCheckMark = true;
  isSequenceNumberError = true;
  isTextBoxShow = true;
  isSequenceCodeError: boolean;
  sequenceCodeErrorMsg: string;
  isError = true;
  error_AlreadyExists: boolean;
  isSequenceFormSubmitted: boolean;
  selectedFormatCodes: string;
  sequenceErrMsg: string;
  requiredSequence: string;
  requiredParameters: string;
  isValid = true;
  sequenceText: any = '';
  sequenceNumber: any;
  sequenceError: string;
  showMessage = false;
  sequenceCodeRequired: Boolean = false;
  index: any;
  codeValue: any;
  submitted = false;

  constructor(public commonService: CommonService, public dialog: MatDialog, public sequenceConfiguratonService: SequenceService,
    public cd: ChangeDetectorRef, public snackBar: MatSnackBar) {
    super();
    this.sequenceConfiguratonView = {
      SequenceCategoryTypeId: [],
      Sequence: [],
      StartingSequence: [],
      CurrentSequence: [],
      IsActive: [],
      SortBy: 'Id',
      SortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      SchoolId: this.data
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.sequenceConfiguratonView = modelTableComponent;
    }
  }

  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.sequenceConfiguratonView = modelTableComponent;
    }
    // statusView
    this.statusView = {
      id: '',
      isActive: 0
    };
    // schoolSequenceView
    this.schoolSequenceView = {
      sequenceCategoryTypeId: 0,
      startingSequence: 0,
      sequenceParameterIds: [],
      schoolId: this.data

    };

    this.sequenceForm = new FormGroup({
      sequenceCategoryId: new FormControl('', [Validators.required]),
      sequenceParameterId: new FormControl(''),
      sequencecode: new FormControl(''),
      sequenceformat: new FormControl(''),
    });
    this.cols = [
      { field: 'sequenceCategoryName', header: 'Sequence Category', sort: true },
      { field: 'sequence', header: 'Sequence', sort: true },
      { field: 'startingSequence', header: 'Starting Sequence', sort: true },
      { field: 'currentSequence', header: 'Current Sequence', sort: true },
      { field: 'isActive', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.sequenceConfiguratonView,
      componentName: this.currentComponent,
    };
    this.sequenceConfiguratonView.SchoolId = this.data;

    this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
    this.sequenceCategoryData();
    // this.sequenceConfiguratonService.sequenceCategoryTypes().subscribe(res => this.sequenceCategoryTypesdropdown = res.sequenceTypeView[0].typeList);
    this.sequenceParametersData();
  }
  ngOnChanges(): void {
    this.sequenceConfiguratonView.SchoolId = this.data;
    this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
  }

  sequenceCategoryData(): void {
    this.sequenceConfiguratonService.sequenceCategoryTypes()
      .subscribe(data => this.bindSequence(data));
  }
  bindSequence(data: any): void {
    this.sequenceCategoryTypesdropdown = data.sequenceTypeView[0].typeList;
  }

  sequenceParametersData(): void {
    this.sequenceConfiguratonService.sequenceParameters()
      .subscribe(data => this.bindSequenceParameters(data));
  }
  bindSequenceParameters(data: any): void {
    this.sequenceParams = [];
    data.sequenceTypeView[0].typeList.forEach((element: any) => {
      this.sequenceParams.push({ value: { id: element.id, name: element.name, code: element.code, }, label: element.name, disabled: false, code: element.code });
      this.sequnceParameterList = this.sequenceParams;
    });
  }


  // Get all sequence details 
  getAllSequenceConfiguration(getSequenceConfigurationList: any): void {
    if (getSequenceConfigurationList && getSequenceConfigurationList.isActive) {
      this.sequenceStatus = getSequenceConfigurationList.isActive;
      if (this.sequenceStatusYes.includes(this.sequenceStatus.toLowerCase())) {
        getSequenceConfigurationList.isActive = 1;
      }
      else if (this.sequenceStatusNo.includes(this.sequenceStatus.toLowerCase())) {
        getSequenceConfigurationList.isActive = 0;
      }
    }
    this.sequenceConfiguratonView = getSequenceConfigurationList;
    this.sequenceConfiguratonView.SchoolId = this.data;
    this.sequenceConfiguratonService.getAllSequence(
      this.sequenceConfiguratonView.SchoolId, getSequenceConfigurationList.SequenceCategoryTypeId, getSequenceConfigurationList.Sequence,
      this.sequenceConfiguratonView.StartingSequence, getSequenceConfigurationList.CurrentSequence, getSequenceConfigurationList.IsActive, getSequenceConfigurationList.sortBy,
      getSequenceConfigurationList.sortOrder, getSequenceConfigurationList.pageNumber, getSequenceConfigurationList.pageSize).subscribe(res => {
        this.sequenceConfigurationData(res);
      });
  }

  // Binding sequenceConfigurationData To Table
  sequenceConfigurationData(data: any): void {
    if (!data.licenceListView) {
      this.rows = [];
    }
    else {
      this.rows = data.licenceListView.list;
      this.totalItems = data.licenceListView.totalItems;
    }
    this.rows.forEach(e => {
      e.operations = [
        {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE,
          operationName: AppSettings.DELETE
        }
      ];
      // tslint:disable-next-line:no-unused-expression
      (e.isActive === 1) ? [e.isActive = AppSettings.Active, e.operations.push({
        name: AppSettings.INACTIVE_OPERATION,
        icon: AppSettings.INACTIVE_ICON,
      })] : [e.isActive = AppSettings.INACTIVE_OPERATION, e.operations.push({
        name: AppSettings.ACTIVE_OPERATION,
        icon: AppSettings.ACTIVE_ICON,
      })];
    });
    if (data.licenceListView) {
      this.sequenceConfiguratonView.pageNumber = data.licenceListView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.sequenceConfiguratonView,
      rows: this.rows,
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'Add Sequence'
        },
        infoButton: {
          required: true,
          text: 'Sequence Configuration'
        },


      },
      filtersList: data.filters
    };
  }

  // For Edit and Delete sequence
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.STATUS_ACTIVE || event.operation === AppSettings.STATUS_INACTIVE) {
      /**check status based on */
      let isActive: number;
      isActive = (event.clickedRow.isActive === AppSettings.Active) ? 0 : 1;
      let statusView: SequenceStatusView;
      statusView = {
        id: event.clickedRow.id,
        isActive: isActive
      };
      this.changeSequenceStatus(statusView);
    }
    if (event.operation === AppSettings.DELETE) {
      const dialog = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialog.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.sequenceConfiguratonService.deleteSequence(this.data, event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
  }

  /**check status based on */

  /**
  * changes the status of sequence
  * @param institueView 
  */
  changeSequenceStatus(institueView: SequenceStatusView): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_STATUS), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.sequenceConfiguratonService.updateStatus(institueView)
          .subscribe(response => {
            this.openSnackBar(response.messages.ResultMessage);
            if (response.statusCode === this.HttpStatus.OK) {
              this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
            }
          }, error => {
            this.errorResponse(error);
          });
      }
      if (action === AppSettings.NO) {
        this.dialog.closeAll();
      }
    });
  }


  // Delete Response
  deleteResponse(response: any): void {
    this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
    this.openSnackBar(response.messages.ResultMessage);
  }



  // Adding Post Form
  onAddFormClick(): void {
    this.sequenceCodeErrorMsg = '';
    this.commonService.setOverlay(AppSettings.SHOW);
    this.sequnceParameterList.forEach((sequence: any) => {
      sequence.disabled = false;
    });
    this.requiredParameters = '';
    this.isTextBoxShow = true;
    this.dynamicPlaceholder = '';
    this.sequenceErrMsg = '';
    this.myForm.resetForm();
    this.sequenceFormSubmitted = false;
    this.closeAddPanel = false;
    this.disableSubmitBtn = true;
    this.sequenceForm.controls['sequencecode'].disable();
  }

  // Cancel Button
  cancel(): void {
    this.dynamicPlaceholder = '';
    this.isValid = true;
    this.sequenceCodeErrorMsg = '';
    this.requiredSequence = '';
    this.sequnceParameterList.forEach((sequence: any) => {
      sequence.disabled = false;
    });
    this.codesArray = [];
    this.closeAddPanel = true;
    this.disableSubmitBtn = false;
    this.startingSequnce = false;
    this.myForm.resetForm();
  }

  sequenceParameter(parameterId: number): void {
    if (parameterId !== undefined) {
      this.startingSequnce = false;
    }
    else {
      this.startingSequnce = true;
    }
  }

  trimTextBoxSpacess(): void {
    if (this.sequenceForm.controls['sequenceParameterId'].value) {
      this.sequenceForm.controls['sequenceParameterId'].setErrors(null);
    } else {
      this.sequenceForm.controls['sequenceParameterId'].setErrors({ required: true });
      this.requiredSequence = AppSettings.SEQUENCE_PARAMETER;
    }
  }

  onSequenceCategorySelect(data: any): void {
    const code = this.sequenceCategoryTypesdropdown.find(elt => elt.id === data.value).code;
    if (code === AppSettings.RECEIPT || code === AppSettings.STF_CODE || code === AppSettings.STF_JOB_APP) {
      const index = this.sequnceParameterList.findIndex(elt => elt.code === AppSettings.ACADEMIC_CODE);
      if (index !== -1) {
        this.sequnceParameterList.splice(this.sequnceParameterList[index], 1);
      }
    } else {
      this.sequenceParametersData();
    }

    this.sequenceErrMsg = '';
    this.sequenceConfiguratonService.getSequence(data.value, this.data).subscribe(res => {
      this.responseData(res);
    }, error => {
      this.sequenceForm.controls['sequenceCategoryId'].reset();
      this.errorResponse(error);
    });
  }

  responseData(data: any): void {
  }
  onSequenceSelect(data: any): void {
    this.isValid = false;
    this.requiredSequence = '';
    this.requiredParameters = '';
    // Reset Sequencecode when dropdown value changes
    this.sequenceCodeErrorMsg = '';
    data.value.code === AppSettings.TEXT_CODE ? this.dynamicPlaceholder = AppSettings.ENTER_TEXT : data.value.code === AppSettings.SEQUENCE_CODE ?
      this.dynamicPlaceholder = AppSettings.ENTER_SEQUENCE : this.dynamicPlaceholder = '';
    switch (data.value.code) {
      case AppSettings.TEXT_CODE: {
        // statements; 
        this.sequenceForm.controls['sequencecode'].enable();
        this.isCheckMark = true;
        this.isValid = false;
        this.sequenceCodeRequired = true;
        this.sequenceForm.controls['sequencecode'].clearValidators();
        this.sequenceForm.controls['sequencecode'].setValidators([Validators.required, Validators.maxLength(7),
        Validators.pattern(Pattern.ALPHA_NUMERIC_WITH_SPECIAL_CHAR)]);
        this.sequenceForm.controls['sequencecode'].reset();
        this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
        setTimeout(() => this.seqCode.nativeElement.focus());
        break;
      }
      case AppSettings.SEQUENCE_CODE: {
        this.sequenceForm.controls['sequencecode'].enable();
        this.isCheckMark = true;
        this.isValid = false;
        this.sequenceCodeRequired = true;
        this.sequenceForm.controls['sequencecode'].clearValidators();
        this.sequenceForm.controls['sequencecode'].setValidators([Validators.required, Validators.min(1), Validators.maxLength(7), Validators.pattern(Pattern.NUMBER_PATTERN)]);
        this.sequenceForm.controls['sequencecode'].reset();
        this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
        setTimeout(() => this.seqCode.nativeElement.focus());
        break;
      }
      default: {
        this.codeValue = '';
        this.sequenceForm.controls['sequencecode'].reset();
        this.sequenceForm.controls['sequencecode'].clearValidators();
        this.sequenceForm.controls['sequencecode'].disable();
        this.isTextBoxShow = true;
        this.isCheckMark = false;
        this.isValid = false;
        this.sequenceCodeRequired = false;
        break;
      }
    }
    this.cd.detectChanges();
  }



  onSequenceYes(val: any): boolean {
    this.codeValue = this.sequenceForm.controls['sequencecode'].value;
    if (this.sequenceForm.controls['sequenceParameterId'].value.code === AppSettings.TEXT_CODE) {
    }
    if (this.sequenceForm.controls['sequenceParameterId'].value.code === AppSettings.SEQUENCE_CODE) {
      this.sequenceNumber = this.codeValue;
    }
    if (this.sequenceCodeRequired && !this.sequenceForm.controls['sequencecode'].valid) {
      return false;
    }
    this.sequenceFormSubmitted = true;
    this.sequenceForm.controls['sequenceParameterId'].markAsTouched();
    this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
    this.cd.detectChanges();
    this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
    this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
    this.requiredParameters = '';
    this.requiredSequence = '';
    this.isValid = false;
    if (val == null || val === '') {
      this.requiredSequence = AppSettings.SEQUENCE_PARAMETER;
      return false;
    }
    if ((val.code !== AppSettings.SEQUENCE_CODE) && (val.code !== AppSettings.TEXT_CODE)) {
      this.requiredSequence = '';
      this.isCheckMark = true;
      this.sequenceCodes = {
        code: val.code,
        displayText: val.name,
        value: val.id,
        displayValue: this.codeValue
      };
      this.codesArray.push(this.sequenceCodes);
      this.sequnceParameterList.forEach((sequence: any) => {
        if (sequence.value.code === this.sequenceCodes.code) {
          sequence.disabled = true;
        }
      });
      this.sequenceDisplayText = '';
      this.codesArray.forEach((item: any) => {
        this.sequenceDisplayText += (item.code !== AppSettings.TEXT_CODE) ? '%' + item.displayText + '%' : '%' + item.displayValue + '%';
      });


      this.sequenceForm.controls['sequenceformat'].setValue(this.sequenceDisplayText);
      this.sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
      this.sequenceForm.controls['sequenceParameterId'].setValue('');
      this.sequenceForm.controls['sequenceParameterId'].clearValidators();
      this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
      this.sequenceForm.controls['sequencecode'].clearValidators();
      this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
      this.isValid = true;
    }
    else {
      this.sequenceCodeErrorMsg = '';
      this.isSequenceCodeError = true;
      this.sequenceCodes = {
        code: this.sequenceForm.controls['sequenceParameterId'].value.code,
        displayText: this.sequenceForm.controls['sequenceParameterId'].value.name,
        value: val.id,
        displayValue: this.codeValue
      };
      this.sequenceForm.controls['sequenceParameterId'].setValue('');
      this.sequenceForm.controls['sequenceParameterId'].clearValidators();
      this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
      this.sequenceForm.controls['sequencecode'].clearValidators();
      this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
      if (this.sequenceCodes.code === AppSettings.SEQUENCE_CODE) {
        this.isSequenceNumberError = true;
      }
      this.sequenceDisplayText = '';
      this.codesArray.push(this.sequenceCodes);
      // disabling selected dropdown value
      this.sequnceParameterList.forEach((sequence: any) => {
        if (sequence.value.code === this.sequenceCodes.code) {
          if (sequence.value.code !== AppSettings.TEXT_CODE) {
            sequence.disabled = true;
          }
        }
      });

      // looping array to show the selected sequence parameter in sequence format input
      this.codesArray.forEach((item: any) => {
        this.sequenceDisplayText += (item.code !== AppSettings.TEXT_CODE) ? '%' + item.displayText + '%' : '%' + item.displayValue + '%';
      });
      // end

      this.sequenceForm.controls['sequenceformat'].setValue(this.sequenceDisplayText);
      this.sequenceForm.controls['sequencecode'].setValue('');
      this.sequenceForm.controls['sequencecode'].markAsUntouched();
      this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
      this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
      this.sequenceForm.controls['sequenceParameterId'].clearValidators();
      this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
      this.sequenceForm.controls['sequencecode'].clearValidators();
      this.sequenceForm.controls['sequencecode'].updateValueAndValidity();
      this.isTextBoxShow = true;
      this.isValid = true;
      this.sequenceForm.controls['sequencecode'].disable();
      this.dynamicPlaceholder = '';
    }
    this.isValid = true;

  }
  // create sequence for selected school
  onSubmit(sequenceForm: any, isSequence: any): boolean {
    if (sequenceForm.value.sequenceParameterId != null
      && sequenceForm.value.sequenceParameterId !== '') {
      this.showMessage = true;
      this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
      this.requiredSequence = AppSettings.ENTER_SELECT_BUTTON;
      return false;
    }
    if (this.sequenceForm.controls['sequencecode'].invalid) {
      return false;
    }
    this.sequenceForm.controls['sequenceParameterId'].setValidators([Validators.required]);
    this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
    this.schoolSequenceView = {
      sequenceCategoryTypeId: 0,
      startingSequence: 0,
      sequenceParameterIds: []
    };
    this.requiredSequence = '';
    this.requiredParameters = '';
    this.sequenceFormSubmitted = true;
    this.error_AlreadyExists = false;
    this.isSequenceFormSubmitted = true;
    if (sequenceForm.value.sequenceformat == null || sequenceForm.value.sequenceformat === '') {
      this.requiredSequence = AppSettings.SEQUENCE_PARAMETER;
      return false;
    }

    if (sequenceForm.value.sequenceformat != null) {
      const sequenceValue = sequenceForm.value.sequenceformat.split('%');
      if (sequenceForm.value.sequenceParameterId.code !== undefined) {
        this.requiredParameters = (!sequenceValue.find(z => z === sequenceForm.value.sequenceParameterId.code))
          ? AppSettings.ENTER_SELECT_BUTTON : null;
        this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
        return false;
      }
      else {
        if (!sequenceValue.find(z => z === 'Sequence Number')) {
          this.requiredSequence = AppSettings.SELECT_SEQUENCE_NUMBER;
          this.sequenceForm.controls['sequenceformat'].setErrors({ required: true });
          return false;
        }
      }
    }

    if (this.codesArray.filter(x => x.code === AppSettings.SEQUENCE_CODE)[0] !== undefined) {
      let i = 0;
      this.codesArray.forEach((data: any) => {
        this.schoolSequenceView.sequenceParameterIds[i++] = { id: data.value, code: (data.code === AppSettings.TEXT_CODE) ? data.displayValue : '' };
      });

      this.schoolSequenceView.sequenceCategoryTypeId = sequenceForm.value.sequenceCategoryId;
      this.schoolSequenceView.startingSequence = this.sequenceNumber;
      this.submitted = false;
      this.sequenceForm.controls['sequenceParameterId'].clearValidators();
      this.sequenceForm.controls['sequenceParameterId'].updateValueAndValidity();
      if (isSequence) {
        this.schoolSequenceView.schoolId = this.data;
        this.sequenceConfiguratonService.createNewSequence(this.schoolSequenceView).subscribe(res => this.response(res),
          error => {
            this.errorResponse(error);
          });
      }
      else if (sequenceForm.valid && !isSequence) {
        const index = this.listOfSequences.findIndex(x => x.sequenceCategoryTypeId === this.schoolSequenceView.sequenceCategoryTypeId);
        if (index !== -1) {
          this.listOfSequences.splice(index, 1);
        }
        this.listOfSequences.push(this.schoolSequenceView);
      }
    }
    else {
      this.requiredSequence = AppSettings.SELECT_SEQUENCE_NUMBER;
    }
  }

  // response
  response(data: any): void {
    this.submitted = false;
    this.codesArray = [];
    this.requiredSequence = '';
    this.requiredParameters = '';
    this.disableSubmitBtn = false;
    if (data.statusCode === this.HttpStatus.OK) {
      this.dialog.closeAll();
      this.sequenceForm.reset();
      this.closeAddPanel = true;
    }
    else {
      this.closeAddPanel = false;
    }
    this.getAllSequenceConfiguration(this.sequenceConfiguratonView);
    this.openSnackBar(data.messages.ResultMessage);
  }


  onInputChange(): void {
    const value = this.sequenceForm.controls['sequencecode'].value;
    const stringexpression = Pattern.STRING_EXPRESSION;
    const numberExpression = Pattern.NUMBER_EXPRESSION;
    if (value !== '') {
      if (this.sequenceForm.controls['sequenceParameterId'].value.code === AppSettings.TEXT_CODE) {
        if (stringexpression.test(value) === false) {
          this.isSequenceCodeError = false;
          if (Pattern.LENGTH_LIMIT_EXCEED.test(value) === false) {
            this.isSequenceCodeError = true;
            this.sequenceCodeErrorMsg = AppSettings.MAXIMUM_LENGTH_TEXT;
          }
          else { this.isSequenceCodeError = true; this.sequenceCodeErrorMsg = AppSettings.ENTER_ONLY_TEXT; }
          this.isError = true;
        }
        else {
          this.isSequenceCodeError = false;
          this.sequenceCodeErrorMsg = '';
          this.isError = false;
          this.sequenceText = value;
        }
      }
      else {
        if (numberExpression.test(value) === false) {
          this.isSequenceCodeError = false;
          if (Pattern.LENGTH_LIMIT_EXCEED.test(value) === false) {
            this.isSequenceCodeError = true;
            this.sequenceCodeErrorMsg = AppSettings.MAXIMUM_LENGTH_NUMBER;
          }
          else { this.sequenceCodeErrorMsg = AppSettings.ENTER_ONLY_NUMBERS; }
          this.isError = true;
          this.isSequenceCodeError = true;
        }
        else {
          this.isSequenceCodeError = true;
          this.sequenceCodeErrorMsg = '';
          this.isError = false;
          this.sequenceNumber = value;
        }
      }
    }
    else {
      this.isSequenceCodeError = true;
    }
  }
  onClearSequenceFormat(): void {
    this.sequenceForm.controls['sequencecode'].disable();
    this.sequenceForm.controls['sequenceParameterId'].markAsUntouched();
    this.sequenceForm.controls['sequenceformat'].markAsUntouched();
    this.dynamicPlaceholder = '';
    this.requiredParameters = '';
    this.requiredSequence = '';
    this.sequenceErrMsg = '';
    this.sequenceCodeErrorMsg = '';
    this.sequenceCodes = { code: '', displayText: '', value: '', displayValue: '' };
    this.codesArray = [];
    this.sequenceParams = [];
    this.sequenceDisplayText = '';
    this.sequenceForm.controls['sequenceformat'].reset();
    this.sequenceForm.controls['sequenceParameterId'].reset();
    this.isTextBoxShow = true;
    this.sequenceForm.controls['sequencecode'].setValue('');
    this.isCheckMark = true;
    this.isSequenceNumberError = true;
    this.error_AlreadyExists = false;
    this.isValid = true;
    this.sequnceParameterList.forEach((sequence: any) => {
      sequence.disabled = false;
    });
  }

}
