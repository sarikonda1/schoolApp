import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { AppSettings, PatternConfig, Pattern } from 'app/app.constants';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { UIThemeService } from 'app/service/academic-service';
import { CountryService } from '../../../service/academic-service/api/country.service';
import { StateService } from '../../../service/academic-service/api/state.service';
import { InstitutionService } from 'app/service/manage-institution/institution.service';
import { StoreService } from 'app/service/file-management/store.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionView } from '../models/institution-view';
import { FileBase64Model } from '../models/file-base64-model';
import { InstitutionUpdateView } from '../models/institution-update-view';
import { InstituteLicenceService } from 'app/service/academic-service/api/institute-licence.service';
import { RouteConfig } from 'app/url.config';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-add-edit-institute',
  templateUrl: './add-edit-institute.component.html',
  styleUrls: ['./add-edit-institute.component.scss'],
  animations: fuseAnimations,
  providers: [InstituteLicenceService, CountryService, StateService, InstitutionService, StoreService]
})
export class AddEditInstituteComponent extends CommonComponent implements OnInit, OnDestroy {
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  @ViewChild('stepper') stepper;
  // tslint:disable-next-line:no-input-rename
  @Input('institutionData') institutionData: any;
  // tslint:disable-next-line:no-input-rename
  @Input('isUpdateForm') isUpdateForm: Boolean = false;
  // tslint:disable-next-line:no-input-rename
  @Input('isSentByEmail') isSentByEmail: Boolean = false;

  // Horizontal Stepper
  institutions: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  brandingImages: FormGroup;
  licence: FormGroup;
  // Private
  private _unsubscribeAll: Subject<any>;
  imgURL: string | ArrayBuffer;
  logoImgProp: any;
  nameImgProp: any;
  availableThemes: Array<any> = [];
  countryOptionsSelect: Array<any> = [];
  stateOptionsSelect: Array<any> = [];
  billingLifeCycles: Array<any> = [];
  instituteInfo: InstitutionView;
  instituteUpdateInfo: InstitutionUpdateView;
  imagesInfo: FileBase64Model;
  phoneNumber: any;
  validate: Boolean = true;
  loaded = false;
  interactedStepperIndex = 0;
  telOptions = {
    initialCountry: 'in',
    preferredCountries: ['in', 'us', 'gb'],
    separateDialCode: true,
    // formatOnDisplay:false,
  };
  intialCountryCode = {
    mobileTel: '+91',
    otherTel: '+91',
    landTel: '+91'
  };
  finalMobileNumbers = {
    mobileTel: '',
    otherTel: '',
    landTel: ''
  };
  minDate: Date;
  hideStepper: boolean;
  setInstitute: { id: any; name: string; code: string; };

  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   */
  constructor(private _formBuilder: FormBuilder, private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef, private uiTheme: UIThemeService, private countryService: CountryService,
    private stateService: StateService, private instituteLicenceService: InstituteLicenceService,
    private institutionService: InstitutionService,
    public commonService: CommonService,
    private storeService: StoreService,
    public dialogRef: MatDialog,
    private route: ActivatedRoute,
    private router: Router, public snackBar: MatSnackBar) {
    super();
    //  this.adapter.setLocale('fr');
    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }
  ngOnInit(): void {

    this.uiTheme.getUiThemes().subscribe(responseData => {
      this.availableThemes = responseData.uiThemes;
    });
    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
    });
    if (!this.isUpdateForm || (this.institutionData && this.institutionData.email)) {
      this.instituteLicenceService.billingCycleTypes().subscribe(data => {
        if (data.commonViewModel) {
          this.billingLifeCycles = data.commonViewModel;
        }
      });
    }

    this.institutions = this._formBuilder.group({
      code: ['', [Validators.required, Validators.pattern(Pattern.ATLEAST_ONE_CHARACTER), Validators.maxLength(6)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      uiThemeId: ['', Validators.required]
    });

    this.address = this._formBuilder.group({
      line1: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      line2: ['', [Validators.maxLength(45)]],
      line3: ['', [Validators.maxLength(45)]],
      countryId: ['', Validators.required],
      stateId: ['', Validators.required],
      city: ['', [Validators.maxLength(45)]],
      pincode: ['', [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]]
    });

    this.contact = this._formBuilder.group({
      email1: ['', [Validators.required, Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
      email2: ['', [Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: ['', [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      website: ['', [Validators.maxLength(100), Validators.pattern(Pattern.WEBSITE_PATTERN)]],
    });
    this.brandingImages = this._formBuilder.group({
      institutionSymbolFileNameWithExtension: [''],
      institutionSymbolFileValue: [''],
      institutionNameFileNameWithExtension: [''],
      institutionNameFileValue: [''],
    });
    this.licence = this._formBuilder.group({
      numberOfSchools: ['', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(99), Validators.min(1)]],
      billingAmount: ['', [Validators.required, Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999.99), Validators.min(1)]],
      billingCycleId: ['', Validators.required],
      billingStartDate: [this.getDefaultDate(), Validators.required]
    });
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.isUpdateForm = true;
        this.getInstituitionDetails(params.id);
      } else {
        this.cd.detectChanges();
        this.loaded = true;
        this.cd.detectChanges();
      }
    });
    this.minDate = this.getDefaultDate();
    this.intializeModel();
  }
  onCancel(): void {
    this.router.navigate([RouteConfig._Institute]);
  }
  onError(obj, label): void {
    if (!obj && this.contact.value[label] !== '') {
      this.contact.get(label).setErrors({ 'invalid_mobile': true });
    }
  }
  intializeModel(): void {
    this.instituteInfo = {
      code: '',
      name: '',
      line1: '',
      line2: '',
      line3: '',
      city: '',
      stateId: 0,
      pincode: '',
      countryId: 0,
      website: '',
      email1: '',
      email2: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      uiThemeId: 0,
      institutionSymbolFileNameWithExtension: '',
      institutionSymbolFileValue: '',
      institutionNameFileNameWithExtension: '',
      institutionNameFileValue: '',
      billingCycleId: 0,
      numberOfSchools: 0,
      billingStartDate: new Date(),
      billingAmount: 0,
    };
    this.instituteUpdateInfo = {
      code: '',
      id: '',
      name: '',
      line1: '',
      line2: '',
      line3: '',
      city: '',
      stateId: 0,
      pincode: '',
      countryId: 0,
      website: '',
      email1: '',
      email2: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      uiThemeId: 0,
      institutionSymbolFileNameWithExtension: '',
      institutionSymbolFileValue: '',
      institutionNameFileNameWithExtension: '',
      institutionNameFileValue: '',
    };
  }
  setImageProperties(image, logo = false): void {
    const data = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width: image.width,
      height: image.height
    };
    if (logo) {
      this.logoImgProp = {};
      this.logoImgProp = data;
    } else {
      this.nameImgProp = {};
      this.nameImgProp = data;
    }
    this.cd.detectChanges();
  }
  getCustomAddress(): string {
    let address = '';
    for (const keys in this.address.controls) {
      if (keys === 'line1' || keys === 'line2' || keys === 'line3') {
        if (this.address.controls[keys].value) {
          address += this.address.controls[keys].value + ',';
        }
      }
    }
    return address = address.replace(/,+/g, ',').replace(/,\s*$/, '');
  }
  getInstituitionDetails(id: any): void {
    if (this.isSentByEmail) {
      this.institutionService.institutionDetailsByLink(this.institutionData.id, this.institutionData.email).subscribe(data => {
        this.bindInstituteData(data);
      }, error => {
        this.router.navigate(['/login']);
        this.openSnackBar(error.error.messages.ResultMessage, true);
      });
    }
    else {
      this.institutionService.institutionDetails(id)
        .subscribe(data => this.bindInstituteData(data));
    }
  }

  bindInstituteData(data: any): void {
    //  this.stepper.reset();
    const formNames = ['institutions', 'address', 'contact'];
    if (this.isSentByEmail) {
      formNames.push('licence');
      localStorage.setItem('_df', AppSettings.DATE_PATTERN);
      this.licence.disable();
      this.stepper._steps._results[4].completed = true;
    }
    const that = this;
    for (let i = 0; i < formNames.length; i++) {
      Object.keys(that[formNames[i]]['controls']).forEach((key) => {
        that[formNames[i]].controls[key].setValue(data.institutionData[key]);
        if (key === 'mobileTel' || key === 'otherTel' || key === 'landTel') {
          that.updateCountryCode(key, data.institutionData[key]);
        }
      });
    }
    if (this.institutions.controls['code'].value && this.isSentByEmail) {
      this.institutions.controls['code'].disable();
      this.contact.controls['email1'].disable();
    }
    this.loaded = true;
    if (data.institutionData['brandingSymbolLogo']) {
      const imgUrl = this.storeService.getFilePath(data.institutionData['brandingSymbolLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingSymbolLogo'].filename)
        .subscribe(d => {
          if (d) {
            this.brandingImages.controls.institutionSymbolFileNameWithExtension.patchValue(d.fileNameWithExtension);
            this.brandingImages.controls.institutionSymbolFileValue.patchValue(d.value);
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
    }
    if (data.institutionData['brandingNameLogo']) {
      const imgUrl = this.storeService.getFilePath(data.institutionData['brandingNameLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingNameLogo'].filename)
        .subscribe(v => {
          if (v) {
            this.brandingImages.controls.institutionNameFileNameWithExtension.patchValue(v.fileNameWithExtension);
            this.brandingImages.controls.institutionNameFileValue.patchValue(v.value);
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);
    }
    if (data.institutionData['countryId']) {
      this.countryChanged({ value: data.institutionData['countryId'] }, data.institutionData['stateId']);
    }
    this.stepper._steps._results.map(x => {
      x.interacted = true; 
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
    this.cd.markForCheck();
    this.cd.detectChanges();
  }


  OnSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
  }
  updateCountryCode(key, val): void {
    if (val) {
      const data = val.split(' ');
      if (data[0] !== val) {
        this.intialCountryCode[key] = data[0];
        this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
      } else {
        this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
      }
    }
  }
  getNumber(e, label): void {
    this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
  }
  onCountryChangeMobile(e, label): void {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label] = '+' + e.dialCode;
    this.contact.controls[label].setValue('');
  }
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }
  countryChanged(e, stateValue = 0): void {
    this.address.controls['stateId'].patchValue('');
    if (e.value) {
      this.stateOptionsSelect = [];
      this.stateService.stateAllStatesGet(e.value).subscribe(data => {
        this.stateOptionsSelect = data.states;
        if (stateValue) {
          this.address.controls['stateId'].patchValue(stateValue);
        }
      });
    }
  }

  /**
  * On destroy
  */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  imgChanged(files, logo = false): void {
    if (this.checkFileSize(files[0], 'image', 2097152)){
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    reader.onload = (_event) => {
      let image;
      image = new Image();
      image.src = reader.result;
      image.onload = function (): void {
        that.setImageProperties(image, logo);
        if (logo) {
          that.brandingImages.controls.institutionSymbolFileNameWithExtension.patchValue(files[0].name);
          that.brandingImages.controls.institutionSymbolFileValue.patchValue((<string>reader.result).split(',')[1]);
        } else {
          that.brandingImages.controls.institutionNameFileNameWithExtension.patchValue(files[0].name);
          that.brandingImages.controls.institutionNameFileValue.patchValue((<string>reader.result).split(',')[1]);
        }
        that.cd.detectChanges();
      };
    };
  }
  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.brandingImages.controls.institutionSymbolFileNameWithExtension.patchValue('');
      this.brandingImages.controls.institutionSymbolFileValue.patchValue('');
    } else {
      this.nameImgProp = {};
      this.brandingImages.controls.institutionNameFileNameWithExtension.patchValue('');
      this.brandingImages.controls.institutionNameFileValue.patchValue('');
    }
    this.cd.detectChanges();
  }

  submitInstitute(): void {
    const formNames = ['institutions', 'address', 'contact', 'licence', 'brandingImages'];
    for (let i = 0; i < formNames.length; i++) {
      Object.keys(this[formNames[i]]['controls']).forEach((key) => {
        switch (key) {
          case 'mobileTel':
          case 'otherTel':
          case 'landTel': this.instituteInfo[key] = this.checkemptyNumber(this[formNames[i]].get(key).value, key); break;
          default: this.instituteInfo[key] = this[formNames[i]].get(key).value; break;
        }
      });
    }
    this.institutionService.createInstitution(this.instituteInfo)
      .subscribe((res: any) => this.afterSubmittingData(res), error => {
        this.errorResponse(error);
      });
  }
  checkemptyNumber(number, key): string {
    if (number) {
      return this.finalMobileNumbers[key];
    } else {
      return '';
    }
  }
  updatedInstite(): void {
    const formNames = ['institutions', 'address', 'contact', 'brandingImages'];
    this.instituteUpdateInfo.id = this.institutionData.id;
    for (let i = 0; i < formNames.length; i++) {
      Object.keys(this[formNames[i]]['controls']).forEach((key) => {
        switch (key) {
          case 'mobileTel':
          case 'otherTel':
          case 'landTel': this.instituteUpdateInfo[key] = this.checkemptyNumber(this[formNames[i]].get(key).value, key); break;
          default: this.instituteUpdateInfo[key] = this[formNames[i]].get(key).value; break;
        }
      });
    }
    if (this.isSentByEmail) {
      this.institutionService.updateInstitutionByUserFromEmail(this.instituteUpdateInfo)
        .subscribe((res: any) => this.afterSubmittingData(res), error => {
          this.errorResponse(error);
        });
    } else {
      this.institutionService.updateInstitution(this.instituteUpdateInfo)
        .subscribe((res: any) => this.afterSubmittingData(res), error => {
          this.errorResponse(error);
        });
    }
  }
  afterSubmittingData(data: any): void {
    if (this.isUpdateForm) {
      this.setInstitute = {
        id: this.instituteUpdateInfo['id'],
        name: this.instituteUpdateInfo.name,
        code: this.instituteUpdateInfo.code
      };
      this.openSnackBar(data.messages.ResultMessage);
      this.onCancel();
    } else {
      this.hideStepper = true;
      this.setInstitute = {
        id: data.messages.Institution_Id,
        name: this.instituteInfo.name,
        code: this.instituteInfo.code
      };
      localStorage.setItem('_cic', this.instituteInfo.code);
      this.cd.detectChanges();
      this.scrollIntoViewById('success-container');
    }
    localStorage.setItem('_cic', this.setInstitute.code);
    localStorage.setItem('_i', JSON.stringify(this.setInstitute));
  }

  /**
  * Changes the step to the index specified
  * @param {number} index The index of the step
  */
  changeStep(index: number): void {
    this.stepper.selectedIndex = index;
    this.cd.detectChanges();
  }
  getBillingCycle(name, value): string {
    if (value === '' || value === 0) {
      return '';
    }
    let x;
    switch (name) {
      case 'billing': x = this.billingLifeCycles.filter(element => element.id === value)[0];
        return (x = this.billingLifeCycles.filter(element => element.id === value)).length > 0 ? x[0].name : '';
      case 'country':
        return (x = this.countryOptionsSelect.filter(element => element.id === value)).length > 0 ? x[0].name : '';
      case 'state':
        return (x = this.stateOptionsSelect.filter(element => element.id === value)).length ? x[0].name : '';
      case 'theme':
        return (x = this.availableThemes.filter(element => element.id === value)).length ? x[0].name : '';
      default: break;
    }

  }
  getImagesInfo(): string {
    let imagesData = '';
    if (this.logoImgProp) {
      imagesData = this.logoImgProp.src ? 'institution symbol logo,' : '';
    }
    if (this.nameImgProp) {
      imagesData += this.nameImgProp.src ? 'institution name logo' : '';
    }
    return imagesData.replace(/,\s*$/, '');
  }
  isStepCompleted(form): any {
    if (form.value.institutionSymbolFileNameWithExtension || form.value.institutionNameFileNameWithExtension){
      return true;
    }
    return false;
  }
}
