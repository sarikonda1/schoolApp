import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Pattern, AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { UIThemeService } from 'app/service/academic-service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FileBase64Model } from 'app/modules/lshp-admin/models/file-base64-model';
import { CommonComponent } from 'app/shared/common/common.component';
import { InstitutionService } from 'app/service/manage-institution/institution.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { SchoolService } from 'app/service/manage-school/school.service';
import { SchoolDataView } from '../models/school-data-view';
import { SchoolBoardViewModel } from '../models/school-board-viewl';
import { SchoolUpdateView } from '../models/school-update-view';
import { SchoolBoardUpdateView } from '../models/school-board-update-view';
import { RouteConfig } from 'app/url.config';
import { SequenceConfigurationComponent } from '../sequence-configuration/sequence-configuration.component';
import { SequenceService } from 'app/service/academic-service/api/sequence.service';
import { SchoolSequenceViewModel } from 'app/models/academics/school-sequence-viewmodel';
import { SequencesView } from 'app/models/academics/sequences-view';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-manage-school',
  templateUrl: './manage-school.component.html',
  styleUrls: ['./manage-school.component.scss'],
  animations: fuseAnimations,
  providers: [CountryService, StateService, InstitutionService, StoreService, GradeSetupService, SchoolService]
})
export class ManageSchoolComponent extends SequenceConfigurationComponent implements OnInit {
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  @ViewChild('stepper') stepper;
  schoolId: any;
  isUpdateForm: Boolean = false;
  institutions: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  uploadImages: FormGroup;
  licence: FormGroup;
  private _unsubscribeAll: Subject<any>;
  imgURL: string | ArrayBuffer;
  logoImgProp: any;
  nameImgProp: any;
  availableThemes: any;
  countryOptionsSelect: Array<any> = [];
  stateOptionsSelect: Array<any> = [];
  schoolBoards: Array<any> = [];
  currencyTypes: Array<any> = [];
  institutionLicences: Array<any> = [];
  dateFormats: Array<any> = [];
  nameFormats: Array<any> = [];
  schoolInfo: SchoolDataView;
  schoolUpdateInfo: SchoolUpdateView;
  imagesInfo: FileBase64Model;
  schoolBoardViewModel: FormArray;
  schoolBoardModel: SchoolBoardViewModel;
  schoolBoardUpdateModel: SchoolBoardUpdateView;
  phoneNumber: any;
  validate: Boolean = true;
  loaded: Boolean = false;
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
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
  school: FormGroup;
  boardForm: FormGroup;
  settings: FormGroup;
  interactedStepperIndex: Number = 0;
  sequenceDetails: any[] = [];
  @ViewChild('sequenceFormData') test;
  @ViewChild('sequenceCode') seqCode: ElementRef;
  listOfSequences: Array<SchoolSequenceViewModel>;
  sequenceView: Array<SequencesView>;
  hideStepper: boolean;
  setSchool: { id: string; name: string; code?: string};
  isSequenceStepRequired = true;
  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   */  
  constructor( private _formBuilder: FormBuilder, private sanitizer: DomSanitizer, 
    public cd: ChangeDetectorRef, private uiTheme: UIThemeService, private countryService: CountryService,
    private stateService: StateService,
    private institutionService: InstitutionService,
    public commonService: CommonService,
    private storeService: StoreService,
    public dialogRef: MatDialog,
    private gradeSetupService: GradeSetupService,
    private schoolService: SchoolService,
    private router: Router,
    private route: ActivatedRoute,
    public sequenceConfiguratonService: SequenceService, public snackBar: MatSnackBar) { 
    super(commonService, dialogRef, sequenceConfiguratonService, cd, snackBar);
      this._unsubscribeAll = new Subject();
      
  }
  ngOnInit(): void {
      this.school = this._formBuilder.group({
          name: ['', [Validators.required, Validators.maxLength(100)]],
          uiThemeId : ['', Validators.required],
          currencyId : ['', Validators.required],
          licenceId : ['', Validators.required],
          schoolCode: ['', [Validators.required, Validators.pattern(Pattern.ATLEAST_ONE_CHARACTER), Validators.maxLength(6)]]
      });

      this.boardForm = this._formBuilder.group({
           schoolBoardViewModel : this._formBuilder.array([this.createItem()])
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
          email1      : ['', [Validators.required, Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
          email2     : ['', [Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
          mobileTel      : ['', [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
          otherTel     : ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
          landTel      : ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
          website     : ['', [Validators.maxLength(100), Validators.pattern(Pattern.WEBSITE_PATTERN)]],
      });
      this.settings = this._formBuilder.group({
          moderateCommunication      : [0, [Validators.required]],
          moderateStudentRecordUpdates     : [0, [Validators.required]],
          moderateTestNotifications      : [0, [Validators.required]],
          moderateEventNotifications     : [0, [Validators.required]],
          moderateAssignmentNotifications      : [0, [Validators.required]],
          allowOnlineStudentApplications     : [0, [Validators.required]],
          dateFormatTypeId     : ['', [Validators.required]],
          personNameFormatTypeId     : ['', [Validators.required]],
    });

    this.uploadImages = this._formBuilder.group({
      schoolSymbolFileNameWithExtension: [''],
      schoolSymbolFileValue: [''],
      schoolNameFileNameWithExtension: [''],
      schoolNameFileValue: [''],
      });

      this.sequenceForm = new FormGroup({
        sequenceCategoryId: new FormControl('', [Validators.required]),
        sequenceParameterId: new FormControl(''),
        sequencecode: new FormControl('', [Validators.required]),
        sequenceformat: new FormControl(''),
      });
      this.sequenceForm.controls['sequencecode'].disable();

    this.schoolService.institutionLicences().subscribe(data => {
      if (data.institutionLicenceViewModel){
          this.institutionLicences = data.institutionLicenceViewModel;
      }
      this.cd.detectChanges();
    });
    this.uiTheme.getUiThemes().subscribe(responseData => {
        this.availableThemes = responseData.uiThemes;
    });
    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
    });
    this.schoolService.getBoards().subscribe(data => {
      this.schoolBoards = data.commonViewModel;
      this.schoolBoards.forEach((element) => {
          element.disable = false;
      });
    });
    this.schoolService.currencyTypes().subscribe(data => {
      this.currencyTypes = data.commonViewModel;
    });
    this.schoolService.dateFormatTypes().subscribe(data => {
      this.dateFormats = data.commonViewModel;
    });
    this.schoolService.personNameFormatTypes().subscribe(data => {
      this.nameFormats = data.commonViewModel;
    });
    this.route.params.subscribe((params) => {
      if (params.id){
        this.isUpdateForm = true;
        this.data = params.id;
        this.schoolId = params.id;
         this.getSchoolDetails(params.id);
         this.isSequenceStepRequired = false;
         
      }else{
        this.cd.detectChanges();
        this.loaded = true;
        this.cd.detectChanges();
        this.isSequenceStepRequired = true;
      }
    });
    this.intializeModel(); 
    this.sequenceCategoryData();
    this.sequenceParametersData();
    this.onSequenceYes(null);
  }
  OnSelectionChange(event: any): void{
      if (event.selectedIndex > this.interactedStepperIndex){
        this.interactedStepperIndex = event.selectedIndex;
      }else{
        this.stepper._steps._results.forEach((x, i) => {
          x.interacted = i < this.interactedStepperIndex ? true : false;
        });
      }
      this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel') as FormArray;
      if (!this.schoolBoardViewModel.controls[0].value.boardId){
          this.resetBoards();
      }
      if (event.selectedIndex === AppSettings.SEQUENCE_INDEX){
        event.selectedStep.interacted = false;
        this.sequenceCancel();
      }
  } 
  addItem(board): void {
    if (!board.boardId){
      this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel') as FormArray;
      this.schoolBoardViewModel.controls[0].patchValue({boardId: ''});
    }
    if (!this.isBoardAlreadyExist(board.boardId) && board.boardId){
      this.schoolBoards.forEach((element) => {
        if (element.id === board.boardId){
          element.disable = true;
        }
      });
      this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel') as FormArray;
      this.schoolBoardViewModel.push(this.createItem(this.schoolBoardViewModel.value[0].boardId, this.schoolBoardViewModel.value[0].affiliationCode));
      this.resetBoards();
    }
  }
  resetBoards(): void{
    this.schoolBoardViewModel.controls[0].reset();
    this.schoolBoardViewModel.controls[0].updateValueAndValidity();
  }
  isBoardAlreadyExist(value: any): boolean{
      const myArray = this.boardForm.controls['schoolBoardViewModel'].value;
      const data = myArray.filter((item, index) => {
        if (index && item.boardId === value){
            return true;
        }
      });
      return data.length ? true : false;
  }
  resetFormArrayOnIndex(i: any, board: any): void{
    this.schoolBoards.forEach((element) => {
      if (element.id === board.boardId){
        element.disable = false;
      }
    });
    this.schoolBoardViewModel.removeAt(i);
  }
  createItem(boardId: any = '', code = '', id = 0): FormGroup {
    if (this.isUpdateForm){
      return this._formBuilder.group({
        id: id,
        boardId: boardId,
        affiliationCode: [code, [Validators.maxLength(25)]]
      });
    }else{
      return this._formBuilder.group({
        boardId: boardId,
        affiliationCode: [code, [Validators.maxLength(25)]]
      });
    }
  }
  onCancel(): void{
    this.router.navigate([RouteConfig._School]);
  }
  onError(obj, label): void {
    if (!obj && this.contact.value[label] !== '') {
      this.contact.get(label).setErrors({'invalid_mobile': true});
    }
  }

  intializeModel(): void{
    this.schoolBoardModel = {
      boardId: 0,
      affiliationCode: ''
    };
    this.schoolBoardUpdateModel = {
      id: 0,
      boardId: 0,
      affiliationCode: '',
    };
    this.schoolInfo = { 
      name: '',
      schoolCode: '',
      currencyId: 0,
      licenceId: 0,
      dateFormatTypeId: 0,
      personNameFormatTypeId: 0,
      schoolBoardViewModel: [this.schoolBoardModel],
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
      moderateCommunication: 0,
      moderateStudentRecordUpdates: 0,
      moderateTestNotifications: 0,
      moderateEventNotifications: 0,
      moderateAssignmentNotifications: 0,
      allowOnlineStudentApplications: 0,
      uiThemeId: 0,
      schoolSymbolFileNameWithExtension: '',
      schoolSymbolFileValue: '',
      schoolNameFileNameWithExtension: '',
      schoolNameFileValue: '',
    };
    this.schoolUpdateInfo = {
      id: '',
      name: '',
      schoolCode: '',
      currencyId: 0,
      dateFormatTypeId: 0,
      personNameFormatTypeId: 0,
      schoolBoardUpdateView: [this.schoolBoardUpdateModel],
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
      moderateCommunication: 0,
      moderateStudentRecordUpdates: 0,
      moderateTestNotifications: 0,
      moderateEventNotifications: 0,
      moderateAssignmentNotifications: 0,
      allowOnlineStudentApplications: 0,
      uiThemeId: 0,
      schoolSymbolFileNameWithExtension: '',
      schoolSymbolFileValue: '',
      schoolNameFileNameWithExtension: '',
      schoolNameFileValue: '',
    };
  }
  setImageProperties(image, logo = false): void{
    const data = {
      src : this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width : image.width,
      height : image.height
    };
    if (logo){
      this.logoImgProp = {};
      this.logoImgProp = data;
    }else{
      this.nameImgProp = {};
      this.nameImgProp = data;
    }
    this.cd.detectChanges();
  }
  onChange(value, formControlerName): void {
    if (value.checked === true) {
      this.settings.controls[formControlerName].setValue(1);
    } else {
      this.settings.controls[formControlerName].setValue(0);
    }
  }
  getCustomAddress(): string{
    let address = '';
    for (const keys in this.address.controls){
      if (keys === 'line1' || keys === 'line2' || keys === 'line3'){
        if (this.address.controls[keys].value){
          address += this.address.controls[keys].value + ',';
        }
      }
    }
   return address = address.replace(/,+/g, ',').replace(/,\s*$/, '');
  }
  getSchoolDetails(id: any): void{
    this.schoolService.schoolDetails(this.data)
    .subscribe(data => {
       const formNames = ['school', 'address', 'contact', 'settings'];
       const that = this;
          for (let i = 0; i < formNames.length ; i++){
            Object.keys(this[formNames[i]]['controls']).forEach((key) => {
              that[formNames[i]].controls[key].setValue(data.schoolData[key]);
              if (key === 'mobileTel' || key === 'otherTel' || key === 'landTel'){
                that.updateCountryCode(key, data.schoolData[key]);
              }
            });
          }
          this.loaded = true;
          if (data.schoolData['brandingSymbolLogo']){
            const imgUrl = this.storeService.getFilePath(data.schoolData['brandingSymbolLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(data.schoolData['brandingSymbolLogo'].filename)
            .subscribe(result => {
              if (result){
                this.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue(result.fileNameWithExtension);
                this.uploadImages.controls.schoolSymbolFileValue.patchValue(result.value);
              }
            });
            this.setImageProperties({src: imgUrl, height: 100, width: 100}, true);
          }
          if (data.schoolData['institutionLicenseSchools']){
            this.school.controls.licenceId.setValue(data.schoolData['institutionLicenseSchools'].licenseId);
          }
          this.updateSchoolBoards(data.schoolData['schoolBoards']);
          if (data.schoolData['brandingNameLogo']){
            const imgUrl = this.storeService.getFilePath(data.schoolData['brandingNameLogo'].filename);
            this.storeService.storeFileEncryptByFileNameGet(data.schoolData['brandingNameLogo'].filename)
            .subscribe(result => {
              if (result){
                this.uploadImages.controls.schoolNameFileNameWithExtension.patchValue(result.fileNameWithExtension);
              this.uploadImages.controls.schoolNameFileValue.patchValue(result.value);
              }
            });
            this.setImageProperties({src: imgUrl, height: 100, width: 100}, false);
          }
          if (data.schoolData['countryId']){
              this.countryChanged({value: data.schoolData['countryId']}, data.schoolData['stateId']);
          }
          this.stepper._steps._results.map(x => {
              x.interacted = true;
          });
          this.interactedStepperIndex = this.stepper._steps._results.length;
          this.customSteperLabelChange();
          this.cd.markForCheck();
          this.cd.detectChanges();
    });
  }
  updateSchoolBoards(schoolBoards): void{  
    this.boardForm.setControl('schoolBoardViewModel', this._formBuilder.array([this.createItem()])); 
    if (schoolBoards){
      for (const board of schoolBoards){
        this.schoolBoards.forEach((element) => {
          if (element.id === board.boardId){
                element.disable = true;
              }
            });
        this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel') as FormArray;
        this.schoolBoardViewModel.push(this.createItem(board.boardId, 
        board.affiliationCode, board.id));
        this.schoolBoardViewModel.controls[0].patchValue({boardId: 0, affiliationCode: ''});
      }
    }
  }
  get addNewRowSchform(): FormArray {
    return <FormArray>this.boardForm.get('schoolBoardViewModel');
  }
  onBlurAffCode(i, value): void{
    this.schoolBoardViewModel = this.boardForm.get('schoolBoardViewModel') as FormArray;
    this.schoolBoardViewModel.controls[i].patchValue({affiliationCode: this.commonService.trimSpaces(value)});
  }
  updateCountryCode(key, val): void{
    if (val){
      const data =  val.split(' ');
      if (data[0] !== val){
          this.intialCountryCode[key] = data[0];
          this.finalMobileNumbers[key] = data[0] + ' ' + data[1];
      }else{
           this.finalMobileNumbers[key] = this.intialCountryCode[key] + ' ' + val;
      }
    }
  }
  getNumber(e, label): void{
    this.finalMobileNumbers[label] = e.replace(this.intialCountryCode[label], this.intialCountryCode[label] + ' ');
  }
  onCountryChangeMobile(e, label): boolean{
    if (this.isEmptyObject(e)){
        return;
    }
    this.intialCountryCode[label] = '+' + e.dialCode;
      this.contact.controls[label].setValue(''); 
  }
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }
  countryChanged(e, stateValue = 0): void{
    this.address.controls['stateId'].patchValue('');
      if (e.value){
        this.stateOptionsSelect = [];
        this.stateService.stateAllStatesGet(e.value).subscribe(data => {
            this.stateOptionsSelect = data.states;
            if (stateValue){
              this.address.controls['stateId'].patchValue(stateValue);
            }
        });
      }
  }

    imgChanged(files, logo = false): void{
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
            image.onload = function(): void {
                that.setImageProperties(image, logo);
              if (logo){
                that.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue(files[0].name);
                that.uploadImages.controls.schoolSymbolFileValue.patchValue((<string>reader.result).split(',')[1]);
              }else{
                that.uploadImages.controls.schoolNameFileNameWithExtension.patchValue(files[0].name);
                that.uploadImages.controls.schoolNameFileValue.patchValue((<string>reader.result).split(',')[1]);
              }
              that.cd.detectChanges();
            };
        };
    }
    clearImages(logo= false): void{
      if (logo){
        this.logoImgProp = {};
        this.uploadImages.controls.schoolSymbolFileNameWithExtension.patchValue('');
        this.uploadImages.controls.schoolSymbolFileValue.patchValue('');
      }else{
        this.nameImgProp = {};
        this.uploadImages.controls.schoolNameFileNameWithExtension.patchValue('');
        this.uploadImages.controls.schoolNameFileValue.patchValue('');
      }
      this.cd.detectChanges();
    }
    
    submitSchool(): void{
          if (this.setModelData('schoolInfo')){
            this.schoolInfo['schoolBoardViewModel'] =  this.boardForm.controls['schoolBoardViewModel'].value.filter((data, index) => index > 0);
            this.schoolInfo.schoolSequences = this.listOfSequences;
            this.schoolService.addSchool(this.schoolInfo)
            .subscribe((res: any) => this.afterSubmittingData(res), error => {
              this.errorResponse(error);
            });
          }
    }
    setModelData(model): boolean{
      const formNames = ['school', 'address', 'contact', 'settings', 'uploadImages'];
      for (let i = 0; i < formNames.length ; i++){
        Object.keys(this[formNames[i]]['controls']).forEach((key) => {
          switch (key){
            case 'mobileTel':
            case 'otherTel':
            case 'landTel' : this[model][key] = this.checkemptyNumber(this[formNames[i]].get(key).value, key); break;
            default: this[model][key] = this[formNames[i]].get(key).value; break;
        }
        });
      }
     
      return true;
    }
    checkemptyNumber(number, key): string{
      if (number){
        return this.finalMobileNumbers[key];
      }else{
        return '';
      }
    }
    updatedSchool(): void{
      if (this.setModelData('schoolUpdateInfo') && this.schoolId){
        this.schoolUpdateInfo['id'] = this.schoolId;
        this.schoolUpdateInfo['schoolBoardUpdateView'] =  this.boardForm.controls['schoolBoardViewModel'].value.filter((data, index) => index > 0);
        this.schoolService.updateSchool(this.schoolUpdateInfo)
        .subscribe((res: any) => this.afterSubmittingData(res), error => {
          if (error.error) {
            this.errorMessages = Object.values(error.error);
            this.errorsList = this.errorMessages;
            if (this.errorsList.length) {
              if (error.error.messages) {
                const resultMessage = error.error.messages.ResultMessage;
                this.openSnackBar(resultMessage, true);
                this.schoolService.schoolDetails(this.data)
                .subscribe(data => {
                  this.updateSchoolBoards(data.schoolData['schoolBoards']);
                });
              }
            } else {
              this.openSnackBar(this.errorMessages[0].ResultMessage, true);
            }
          }
        });
      }
    }
    afterSubmittingData(data: any): void{
      this.commonService.sendSchoolId();
      if (this.isUpdateForm){
         this.setSchool = {
          id: this.schoolUpdateInfo['id'],
          name: this.schoolUpdateInfo.name,
          code: this.schoolUpdateInfo.schoolCode
        };
        this.openSnackBar(data.messages.ResultMessage);
        this.onCancel();
      }else{
        this.hideStepper = true;
         this.setSchool = {
          id: data.schoolId,
          name: this.schoolInfo.name,
          code: this.schoolInfo.schoolCode
        };
        this.cd.detectChanges();
        this.scrollIntoViewById('success-header');
      }
      localStorage.setItem('_s', JSON.stringify(this.setSchool));
    }
    
    /**
     * Changes the step to the index specified
     * @param {number} index The index of the step
     */
    changeStep(index: number): void {
      this.stepper.selectedIndex = index;
      this.cd.detectChanges();
    }
    getBillingCycle(name, value): string{
      if (value === '' || value === 0){
        return '';
      }
      let x;
      switch (name){
          case 'theme':
            if (this.availableThemes) {
              x = this.availableThemes.filter(element => element.id === value);
            }
            return (x !== undefined && x.length > 0) ? x[0].name : '';
            break;
          case 'currency':
                           return (x = this.currencyTypes.filter(element => element.id === value)).length ? x[0].name : '';
          case 'licence':
                           return (x = this.institutionLicences.filter(element => element.id === value)).length ? x[0].name : '';
          case 'country': 
                          return (x = this.countryOptionsSelect.filter(element => element.id === value)).length > 0 ? x[0].name : '';
          case 'state':
                          return (x = this.stateOptionsSelect.filter(element => element.id === value)).length ? x[0].name : '';
          case 'date':
                            return (x = this.dateFormats.filter(element => element.id === value)).length ? x[0].name : '';
          case 'name':
                          return (x = this.nameFormats.filter(element => element.id === value)).length ? x[0].name : '';
          case 'board':
                          return (x = this.schoolBoards.filter(element => element.id === value)).length ? x[0].name + ' - ' + x[0].code : '';
          default: break;
      }

    }
    getImagesInfo(): string{
      let imagesData = '';
      if (this.logoImgProp){
        imagesData = this.logoImgProp.src ? 'school symbol logo,' : '';
      }
      if (this.nameImgProp){
        imagesData += this.nameImgProp.src ? 'school name logo' : '';
      }
      return imagesData.replace(/,\s*$/, '');
    }
    // trim
  trim(res: any): void {
     this.preventSpace(res);
  }
  onSequenceSubmit(data: any): void {
    if (data.valid) {
      const index = this.sequenceDetails.findIndex(x => x.sequenceCategoryId === data.value.sequenceCategoryId);
      if (index !== -1) {
        this.sequenceDetails.splice(index, 1);
      }
      this.sequenceDetails.push({
        sequenceCategoryId: data.value.sequenceCategoryId,
        sequenceCategory: this.sequenceCategoryTypesdropdown.filter(x => x.id === data.value.sequenceCategoryId).map(y => y.name),
        sequence: data.value.sequenceformat,
        startingSequence: this.sequenceNumber,
      });
      this.sequenceNumber = '';
      this.codesArray = [];
      this.sequenceForm.reset();
      this.test.resetForm();
      this.sequnceParameterList.forEach((sequence: any) => {
        sequence.disabled = false;
      });
    }
  }
  onCheckSequence(data: any): void{
    setTimeout(() => this.seqCode.nativeElement.focus());

  }
  sequenceCancel(): void {
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
    this.sequenceForm.reset();
    if (this.test){
      this.test.resetForm();
    }
    this.sequenceForm.controls['sequencecode'].disable();
    this.isSequenceOptional(this.sequenceForm.value);
  }
  onSequenceDelete(data: any): void{
    this.sequenceDetails.splice(data, 1);
    this.listOfSequences = [];
  }
  isSequenceOptional(obj): boolean {
    let isEmpty = true; 
    Object.keys(obj).forEach((key) => {
      if (obj[key]){
        isEmpty = false;
        return;
      }
     });
    return isEmpty;
  }

  disableBoardSelect(): boolean {
    return (!this.boardForm.controls.schoolBoardViewModel.value[0].boardId
        || !this.boardForm.controls.schoolBoardViewModel.value[0].affiliationCode
        || this.boardForm.controls.schoolBoardViewModel.value[0].affiliationCode.length > 25
    );
  }
  isStepCompleted(form): any {
    if (form.value.schoolSymbolFileNameWithExtension || form.value.schoolNameFileNameWithExtension) {
      return true;
    }
    return false;
  }
}

