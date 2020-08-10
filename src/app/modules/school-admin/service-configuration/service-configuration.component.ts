import { Component, OnInit, ChangeDetectorRef, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ServiceConfigurationService } from 'app/service/communication/serviceConfiguration.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { AppSettings, Pattern } from 'app/app.constants';
import { SchoolServiceConfigsView } from '../models/school-service-configs-view';
import { SchoolServiceProviderConfigView } from '../models/school-service-provider-config-view';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';
import { Router } from '@angular/router';
import { YesNo } from 'app/models/yes-no-view';
import { MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';
import { ServiceCodeView } from '../models/service-code-view';
import { distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';
import { MatColors } from '../../../../@fuse/mat-colors';

@Component({
  selector: 'app-service-configuration',
  templateUrl: './service-configuration.component.html',
  styleUrls: ['./service-configuration.component.scss']
})
export class ServiceConfigurationComponent extends CommonComponent implements OnInit, OnChanges {
  @ViewChild('serviceForm') myServiceProviderForm;
  @Input() data: any;
  acord: Array<any> = [];
  configCode: string;

  constructor(public commonService: CommonService, private serviceConfigurationService: ServiceConfigurationService,
    private _fb: FormBuilder, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer,
    private storeService: StoreService, private router: Router, public snackBar: MatSnackBar) {
    super();
  }


  serviceProviderForm: FormGroup;
  serviceProviders: Array<any> = [];
  serviceProvidersList: Array<any> = [];
  displayServiceProvidersList: Array<any> = [];
  serviceConfigParams: Array<any> = [];
  schoolServiceConfigsView: SchoolServiceConfigsView;
  schoolServiceProviderConfigView: SchoolServiceProviderConfigView;
  colorCode: any;
  schoolServiceConfigs: Array<any> = [];
  logoImageProp: any;
  validate = true;
  paymentProvidersList: Array<any> = [];
  smsProviders: Array<any> = [];
  mailProviders: Array<any> = [];
  classRoomProviders: Array<any> = [];
  accordionStep = false;
  detailsShow = false;
  tabSettings: {};
  cols: any[];
  rows: Array<any> = [];
  serviceProviderName: any;
  serviceConfigId: any;
  serviceConfiguration: any;
  isUpdateData = false;
  YesOrNo: Array<any> = YesNo.values;
  handlingMethodOptions: Array<any> = [
    { value: 'Percentage', label: 'Percentage' },
    { value: 'Fixed', label: 'Fixed' }
  ];
  taxCalculationOnOptions: Array<any> = [
    { value: 'invoice', label: 'Invoice Amount' },
    { value: 'handling_fee', label: 'Handling Charges' },
    { value: 'all', label: 'Invoice & Handling Charges' }
  ];
  disbleSubmitBtn = false;
  isEditDisabled = false;
  disableServiceType = false;
  serviceCodeView: ServiceCodeView;

  // configArray: Array<SchoolServiceProviderConfigView> = [];
  configArray: SchoolServiceConfigsView;
  providerIds: Array<any> = [];
  schoolConfigs: Array<any> = [];
  updateConfig: any;
  serviceTypeId: any;
  serviceName: any;
  selectedBGColor = {
    palette: '',
    hue: '',
    class: '',
    bg: '',
    fg: ''
  };
  ngOnInit(): void {
    if (this.data == null || this.data === undefined) {
      this.data = this.getTokenParam('_si');
    }
    this.initializeData();
  }

  initializeData(): void {

    this.disableServiceType = false;
    this.detailsShow = false;
    this.isUpdateData = false;
    this.accordionStep = false;
    this.serviceProvidersList = this.paymentProvidersList = [];
    this.mailProviders = this.smsProviders = [];

    this.serviceProviderForm = this._fb.group({
      serviceProviderId: new FormControl('', [Validators.required]),
      tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
    });
    this.valueChanges();
    this.getServiceProviders();

    this.getPaymentProviders();
    this.getSMSProviders();
    this.getMailProviders();
    this.getClassRoomProviders();
    this.schoolServiceConfigsView = {
      schoolServiceProviderConfigs: []
    };
    this.schoolServiceProviderConfigView = {
      serviceProviderConfigurationId: 0,
      value: ''
    };
    this.configArray = {
      serviceTypeId: 0,
      schoolId: this.data,
      schoolServiceProviderConfigs: []
    };

    this.updateConfig = {
      schoolId: this.data,
      schoolServiceConfigs: []
    };

    this.serviceCodeView = {
      code: '',
      statusFlag: ''
    };
  }

  ngOnChanges(): void {
    this.initializeData();
  }

  openForm(configCode: string): void {
    this.configCode = configCode;

    this.serviceProviderForm = this._fb.group({
      serviceProviderId: new FormControl('', [Validators.required]),
      tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
    });
    this.valueChanges();
    this.displayServiceProvidersList = this.serviceProvidersList.filter((x: any) => x.type === configCode);
    this.displayServiceProvidersList = this.displayServiceProvidersList.filter((x: any) => x.isConfigured === false);

    if (this.displayServiceProvidersList.length === 0) {
      return;
    }

    this.disableServiceType = false;
    this.detailsShow = false;
    this.isUpdateData = false;


    this.accordionStep = true;
    this.serviceProviderForm.reset();
    this.myServiceProviderForm.resetForm();
    this.colorCode = '';
    this.serviceConfigParams = [];
    this.removeControls();
    this.serviceTypeId = this.displayServiceProvidersList[0].id;

    this.serviceProviderForm.controls['serviceProviderId'].patchValue(this.serviceTypeId);
    this.onProviderSelect(this.serviceTypeId);
  }



  getPaymentProviders(): void {
    this.paymentProvidersList = [];
    this.serviceConfigurationService.paymentServiceProviders(this.data).subscribe(
      response => {
        if (response.resultModelList != null) {
          if (response.resultModelList.length) {
            this.paymentProvidersList = (response.resultModelList);
          }
        }
      },
      error => {
        this.errorResponse(error);
      });
  }

  getSMSProviders(): void {
    this.smsProviders = [];
    this.serviceConfigurationService.sMSServiceProviders(this.data).subscribe(
      response => {
        if (response.resultModelList != null) {
          this.smsProviders = (response.resultModelList);

        }
      },
      error => {
        this.errorResponse(error);
      });
  }

  getClassRoomProviders(): void {
    this.classRoomProviders = [];
    this.serviceConfigurationService.classroomServiceProviders(this.data).subscribe(
      response => {
        if (response.resultModelList != null) {
          this.classRoomProviders = (response.resultModelList);
        }
      },
      error => {
        this.errorResponse(error);
      });
  }

  getServiceProviders(): void {
    this.serviceProviders = [];
    this.serviceConfigurationService.serviceProviders(this.data).subscribe(
      response => {
        if (response.resultModelList != null && response.resultModelList.length) {
          this.serviceProvidersList = response.resultModelList;
          this.displayServiceProvidersList = response.resultModelList;
          response.resultModelList.forEach(element => {
            this.serviceProviders.push({
              label: element.name,
              value: element.id
            });
          });
        }
      },
      error => {
        this.errorResponse(error);
      });
  }

  getMailProviders(): void {
    this.mailProviders = [];
    this.serviceConfigurationService.emailServiceProviders(this.data).subscribe(
      response => {
        if (response.resultModelList != null) {
          this.mailProviders = (response.resultModelList);
        }
      },
      error => {
        this.errorResponse(error);
      });
  }

  onProviderSelect(serviceProvider: any): void {
    this.serviceTypeId = serviceProvider;
    if (!this.isUpdateData) {
      this.removeControls();
    }
    this.serviceConfigurationService.serviceProviderConfigs(serviceProvider).subscribe(res => this.serviceProviderParams(res));
    this.myServiceProviderForm.submitted = false;
  }

  serviceProviderParams(paramsList: any): void {
    this.serviceConfigParams = paramsList.serviceConfigViews;
    paramsList.serviceConfigViews.forEach(element => {
      /*element.isRequired = element.isRequired === 1 ? AppSettings.SERV_REQ_Y : AppSettings.SERV_REQ_N;*/
      // console.log(element)
      if (element.key !== 'tax') {
        this.serviceProviderForm.addControl(element.key, new FormControl(null, this.getValidators(element)));
      }
      else {
        /* this.serviceProviderForm = this._fb.group({
           tax: this._fb.array([this.initTaxRowsWithoutValidation()]),
         });*/
        this.serviceProviderForm.addControl(element.key, this._fb.array([this.initTaxRowsWithoutValidation()]));
      }


    });
    if (this.isUpdateData) {
      this.patchServiceDetails(this.serviceConfiguration);
    }

  }

  getValidators(element: any): any {
    const validators: Array<any> = [];
    const list = JSON.parse(element.validationRules);

    // tslint:disable-next-line:forin
    for (const key in list) {
      if (!list[key]) {
        continue;
      }
      switch (key.toLowerCase()) {
        case AppSettings.REQUIRED:
          (validators.push(Validators.required));
          break;
        case AppSettings.Email:
          (validators.push(Validators.email));
          break;
        case AppSettings.MINLENGTH:
          validators.push(Validators.minLength(list[key]));
          break;
        case AppSettings.MAXLENGTH:
          validators.push(Validators.maxLength(list[key]));
          break;
        case AppSettings.PATTERN:
          validators.push(Validators.pattern(list[key]));
          break;
        case AppSettings.URL:
          validators.push(Validators.pattern(Pattern.WEBSITE_PATTERN));
          break;
      }
    }

    return validators;
  }

  onColorChanged(selectedcolor: any, control: any): void {
    if (selectedcolor.bg !== undefined && selectedcolor.bg !== '') {
      this.selectedBGColor = selectedcolor;
      this.colorCode = selectedcolor.class;
      this.serviceProviderForm.controls[control].patchValue(this.colorCode);
    }
    this.myServiceProviderForm.submitted = false;
  }


  addServiceConfig(): void {
    this.showValidations();
    if (this.serviceProviderForm.controls.tax) {
      this.serviceProviderForm.patchValue({ tax: this.serviceProviderForm.controls.tax.value });
    }
    if (this.serviceProviderForm.valid && (this.serviceProviderForm.controls.tax ? this.serviceProviderForm.controls.tax.valid : true)) {
      this.disbleSubmitBtn = true;
      this.schoolServiceConfigs.push(this.serviceProviderForm.value);
      this.configArray.schoolServiceProviderConfigs = [];
      this.configArray.serviceTypeId = this.serviceTypeId;
      this.configArray.schoolId = this.data;

      if (this.isUpdateData) {
        this.updateConfig.schoolServiceConfigs = [];
        this.updateConfig.schoolId = this.data;
        Object.keys(this.serviceProviderForm.value).forEach((key, index) => {
          if (key !== AppSettings.PROVIDER_ID) {

            const findSchoolConfigs = this.schoolConfigs.find(e => e.key === key);
            let serviceProviderConfigurationId = null;
            let id = null;
            if (findSchoolConfigs !== undefined && findSchoolConfigs !== null) {
              serviceProviderConfigurationId = findSchoolConfigs.serviceProviderConfigId;
              id = findSchoolConfigs.id;
            }
            else {
              const findServiceConfigParams = this.serviceConfigParams.find(e => e.key === key);
              serviceProviderConfigurationId = (findServiceConfigParams !== undefined) ?
                findServiceConfigParams.id : null;
            }

            if (this.serviceProviderForm.value[key] !== null && serviceProviderConfigurationId !== null) {
              let updatedValue = (key === 'theme_color') ? this.selectedBGColor.bg : this.serviceProviderForm.value[key];
              if (typeof updatedValue !== 'string') {
                updatedValue = JSON.stringify(updatedValue);
              }
              this.updateConfig.schoolServiceConfigs.push({
                serviceProviderConfigurationId: serviceProviderConfigurationId, value: updatedValue,
                id: id
              });
            }
          }
        });

        this.serviceConfigurationService.updateSchoolServiceProviderConfig(this.updateConfig).subscribe(res =>
          this.addUpdateResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      } else {
        Object.keys(this.serviceProviderForm.value).forEach((key, index) => {
          if (key !== AppSettings.PROVIDER_ID) {

            const serviceProviderConfigurationId = this.serviceConfigParams.find(e => e.key === key);
            if (this.serviceProviderForm.value[key] !== null && serviceProviderConfigurationId !== undefined) {
              let updatedValue = this.serviceProviderForm.value[key];
              if (typeof updatedValue !== 'string') {
                updatedValue = JSON.stringify(updatedValue);
              }
              this.configArray.schoolServiceProviderConfigs.push({
                serviceProviderConfigurationId: serviceProviderConfigurationId.id,
                value: updatedValue
              });
            }
          }
        });

        this.serviceConfigurationService.schoolServiceProviderConfig(this.configArray).subscribe(res =>
          this.addUpdateResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
      }
    }
  }

  addUpdateResponse(response: any): void {
    this.disbleSubmitBtn = false;
    this.initializeData();
    this.closePanel();
    this.openSnackBar(response.messages.ResultMessage);

  }

  closePanel(): void {
    this.serviceProviderForm.reset();
    this.accordionStep = false;
    this.myServiceProviderForm.resetForm();
    this.disbleSubmitBtn = false;
    this.detailsShow = false;
    this.removeControls();
    this.serviceConfigParams = [];
    this.commonService.setOverlay(AppSettings.HIDE);
    this.scrollIntoViewById('toolbar');
  }

  removeControls(): void {
    this.serviceConfigParams.forEach(element => {
      this.serviceProviderForm.removeControl([element.key][0]);
    });
  }

  viewDetails(serviceId: any): void {
    this.serviceConfigId = serviceId;
    this.detailsShow = true;
    this.accordionStep = false;
    this.serviceConfigurationService.schoolServiceConfigsByCode(serviceId, this.data).subscribe(res => this.serviceDetails(res, serviceId));
  }

  serviceDetails(serviceData: any, serviceId: string): void {
    this.commonService.setOverlay(AppSettings.SHOW);
    if (serviceData.schoolServiceConfigDataViews && serviceData.schoolServiceConfigDataViews.length) {
      serviceData.schoolServiceConfigDataViews.forEach(element => {
        element.isRequired = element.isRequired === 1 ? AppSettings.SERV_REQ_Y : AppSettings.SERV_REQ_N;
      });
      this.serviceProviderName = serviceData.schoolServiceConfigDataViews[0].serviceProvider;
      const status = serviceData.schoolServiceConfigDataViews.find(e => e.key === 'is_active').value;
      this.isEditDisabled = +status === 0 ? false : true;
      this.cols = [
        { field: 'parameterName', header: 'Configuration', sort: false },
        // { field: 'isRequired', header: 'isRequired', sort: false },
        { field: 'value', header: 'Value', sort: false },
      ];

      this.rows = serviceData.schoolServiceConfigDataViews;
      this.rows.forEach((row) => {
        switch (row.key) {
          case 'tax':
            const rowValue = JSON.parse(row.value);
            let finalValue = '';
            rowValue.forEach(taxItem => {
              if (taxItem.name !== null && taxItem.name !== '') {
                const delimeter = (finalValue !== '') ? ', ' : '';
                const applyOn = _.find(this.taxCalculationOnOptions, { value: taxItem.applyOn });
                finalValue = finalValue + delimeter + taxItem.name + '-' + taxItem.percentage + '% on ' + (applyOn ? applyOn.label : '');
              }

            });
            row.value = finalValue;
            break;
          case 'handling_fee_collection_method':
            // object.splice(index, 1);
            /*if (handlingFeeCollectionValue !== '') {
              row.value = handlingFeeCollectionMethod === 'Percentage' ? row.value + '%' : this.getFormattedCurrency(row.value);
            }*/
            break;
          case 'handling_fee_value':

            // @ts-ignore
            const handlingFeeCollectionMethod = _.find(this.rows, { key: 'handling_fee_collection_method' });
            row.value = (handlingFeeCollectionMethod !== undefined && handlingFeeCollectionMethod.value === 'Percentage')
              ? row.value + '%' : serviceData.currencyView.symbol + parseFloat(row.value).toFixed(2);
            break;
          case 'is_active':
          case 'test_mode':
          case 'Generate_otp':
            row.value = (row.value && row.value !== '0') ? AppSettings.YES : AppSettings.NO;
            break;
          case 'key_secret':
          case 'password':
            row.value = '******';
            break;
        }
      });
    }
    this.serviceName = serviceId + ' Configuration';
    this.tabSettings = {
      rows: this.rows,
      columns: this.cols,
      hideHeader: true,
      tablename: this.serviceName.toUpperCase(),
    };
  }

  editConfig(): void {
    this.isUpdateData = true;
    this.detailsShow = false;
    this.disableServiceType = true;
    this.displayServiceProvidersList = this.serviceProvidersList;
    this.serviceConfigurationService.schoolServiceConfigs(this.serviceConfigId, this.data).subscribe(res => {
      this.serviceConfiguration = res;
      this.onProviderSelect(res.schoolServiceConfigDataViews[0].serviceProviderId);

      // this.patchServiceDetails(this.serviceConfiguration);
    });
  }

  changeStatus(status: any): void {
    status = status === true ? '0' : '1';
    this.serviceCodeView.code = this.serviceConfigId;
    this.serviceCodeView.statusFlag = status;
    this.serviceCodeView.schoolId = this.data;
    this.serviceConfigurationService.changeStatus(this.serviceCodeView).subscribe(res =>
      this.addUpdateResponse(res), error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  patchServiceDetails(serviceData: any): void {
    if (serviceData && serviceData.schoolServiceConfigDataViews) {
      this.serviceProviderForm.controls['serviceProviderId'].patchValue(serviceData.schoolServiceConfigDataViews[0].serviceProviderId);
      serviceData.schoolServiceConfigDataViews.forEach((element, j: any) => {
        if (element.inputType === AppSettings.RADIO) {
          element.value = +element.value;
        }

        if (element.key !== 'is_active' && element.key !== 'tax' && element.key !== 'theme_color') {
          this.serviceProviderForm.controls[element.key].patchValue(element.value);
        }

        if (element.key === 'theme_color') {
          this.selectedBGColor.bg = element.value;
          this.serviceProviderForm.controls[element.key].patchValue(this.getColorClassByCode(element.value));
        }

        if (element.key === 'tax') {
          const taxConfiguration = JSON.parse(element.value);
          this.serviceProviderForm.controls['tax'] = this._fb.array([]);
          const taxControl = <FormArray>this.serviceProviderForm.controls.tax;
          if (taxConfiguration && taxConfiguration.length) {
            taxConfiguration.map(taxConfig => {
              taxControl.push(this.getTaxRow(taxConfig));
            });
          } else {
            taxControl.push(this.initTaxRowsWithoutValidation());
          }
          this.valueChanges();
          this.serviceProviderForm.controls.tax.updateValueAndValidity();
          this.serviceProviderForm.updateValueAndValidity();

        }

      });
      this.schoolConfigs = serviceData.schoolServiceConfigDataViews;
    }
    this.accordionStep = true;
  }
  setValidatorsForTax(): void {
    const taxControl = (<FormArray>this.serviceProviderForm.get('tax'));
    taxControl.controls[0].get('name').setValidators([Validators.required, Validators.pattern(Pattern.PREVENT_SPACES), Validators.maxLength(45)]);
    taxControl.controls[0].get('percentage').setValidators([Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(100)]);
    taxControl.controls[0].get('applyOn').setValidators([Validators.required]);
    this.updateForm(taxControl);
  }
  clearValidatorsForTax(): void {
    const taxControl = (<FormArray>this.serviceProviderForm.get('tax'));
    taxControl.controls[0].get('name').clearValidators();
    taxControl.controls[0].get('percentage').clearValidators();
    taxControl.controls[0].get('applyOn').clearValidators();
    this.updateForm(taxControl);
  }
  updateForm(taxControl): void {
    taxControl.controls[0].get('name').updateValueAndValidity({ emitEvent: false });
    taxControl.controls[0].get('percentage').updateValueAndValidity({ emitEvent: false });
    taxControl.controls[0].get('applyOn').updateValueAndValidity({ emitEvent: false });
    taxControl.controls[0].updateValueAndValidity({ emitEvent: false });
  }
  isAvailableNewMethod(configCode: string): boolean {
    let serviceProviders = this.serviceProvidersList.filter((x: any) => x.type === configCode);
    serviceProviders = serviceProviders.filter((x: any) => x.isConfigured === false);
    return (serviceProviders.length > 0);
  }

  initTaxRows(): FormGroup {
    return this._fb.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(Pattern.PREVENT_SPACES)]),
      percentage: new FormControl(null, [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
      applyOn: new FormControl(null, [Validators.required])
    });
  }
  initTaxRowsWithoutValidation(): FormGroup {
    return this._fb.group({
      name: new FormControl(null),
      percentage: new FormControl(null),
      applyOn: new FormControl(null)
    });
  }
  getTaxRow(rowData: any): FormGroup {
    return this._fb.group({
      name: new FormControl(rowData.name, [Validators.required]),
      percentage: new FormControl(rowData.percentage, [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
      applyOn: new FormControl(rowData.applyOn, [Validators.required])
    });
  }



  // return type for educaion details form
  get addNewRowTaxform(): FormArray {
    return <FormArray>this.serviceProviderForm.get('tax');
  }
  // Adding assessmentSubCategory details onClick ADD
  addNewRow(): any {
    const control = <FormArray>this.serviceProviderForm.controls['tax'];
    // add new formgroup
    control.push(this.initTaxRows());
    control.updateValueAndValidity();
    this.serviceProviderForm.updateValueAndValidity();
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRow(index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.serviceProviderForm.controls['tax'];
    // remove the chosen row
    control.removeAt(index);
    control.updateValueAndValidity();
    this.serviceProviderForm.updateValueAndValidity();
  }
  isObjectEmpty(form): any {
    return !form.name && !form.percentage && !form.applyOn;
  }
  valueChanges(): void {
    this.serviceProviderForm.controls.tax.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      if (value.length === 1 && this.isObjectEmpty(value[0])) {
        this.clearValidatorsForTax();
      } else {
        this.setValidatorsForTax();
      }
    });
  }

  showValidations(): void {
    if (this.serviceConfigParams.find(control => control.inputType === 'Radio') !== undefined) {
      const key = this.serviceConfigParams.find(control => control.inputType === 'Radio').key;
      this.serviceProviderForm.controls[key].markAsDirty();
      this.serviceProviderForm.controls[key].updateValueAndValidity();
    }

  }
  isFieldIsRequired(form, control): any {
    if (form.controls[control] && form.controls[control].validator && form.controls[control].validator(control)) {
      return !!form.controls[control].validator(control).hasOwnProperty('required');
    }
    return false;
  }
}


