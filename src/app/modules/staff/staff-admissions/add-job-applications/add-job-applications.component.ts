import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges, ElementRef, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Pattern, AppSettings } from 'app/app.constants';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { CommonService } from 'app/service/common.service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { JobApplicationViewModel } from '../model/job-application-view-model';


@Component({
  selector: 'app-add-job-applications',
  templateUrl: './add-job-applications.component.html',
  styleUrls: ['./add-job-applications.component.scss']
})
export class AddJobApplicationsComponent extends CommonComponent implements OnInit, OnChanges {
  @Input() resetStepper: boolean;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('stepper') stepper;
  @ViewChild('resumeImgInput') resumeImgInput: ElementRef;
  @ViewChild('photoImgInput') photoImgInput: ElementRef;
  @ViewChild('applicantDetailsForm') applicantDetailsFormVC;
  @ViewChild('experienceDetailsForm') experienceDetailsFormVC;
  @ViewChild('contactDetailsForm') contactDetailsFormVC;
  @ViewChild('addressInfoForm') addressInfoFormVC;
  @ViewChild('passportDetailsForm') passportDetailsFormVC;
  @ViewChild('educationDetailsForm') educationDetailsFormVC;
  @ViewChild('trainingDetailsForm') trainingDetailsFormVC;
  @ViewChild('attachmentsForm') attachmentsFormVC;
  resumeImgProp: any;
  photoImgProp: any;
  uploadImages: FormGroup;
  trainingDetails: FormGroup;
  applicantDetails: FormGroup;
  experienceDetails: FormGroup;
  photonResumeDetails: FormGroup;
  educationDetails: FormGroup;
  contactDetails: FormGroup;
  passportDetails: FormGroup;
  genders: Array<any> = [];
  experienceLists: FormGroup;
  addressInfo: FormGroup;
  jobApplicantDetails: JobApplicationViewModel;
  countryOptionsSelect: any;
  stateOptionsSelect: any[];
  maritalTypes: any[];
  casts: any;
  religions: any;
  validate = true;
  HttpStatus: any;
  currentDate = this.getDefaultDate();
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
  intialCountryCode = {
    mobileTel: this.getcontactInfo('+91'),
    otherTel: this.getcontactInfo('+91'),
    landTel: this.getcontactInfo('+91')
  };
  finalMobileNumbers = {
    mobileTel: this.getcontactInfo(),
    otherTel: this.getcontactInfo(),
    landTel: this.getcontactInfo()
  };

  interactedStepperIndex: Number = 0;
  suffixType: any;
  loaded = false;
  optionalMenus: Array<any> = [];

  constructor(public dialogRef: MatDialog, private _formBuilder: FormBuilder, private typeService: TypeService,
    public commonService: CommonService, private countryService: CountryService,
    private changeDetector: ChangeDetectorRef,
    private stateService: StateService, private staffJobApplicationService: StaffJobApplicationService, public snackBar: MatSnackBar) {
    super();
    this.optionalMenus = [1, 4, 6];
    this.initilizeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.finalMobileNumbers = {
      mobileTel: this.getcontactInfo(),
      otherTel: this.getcontactInfo(),
      landTel: this.getcontactInfo()
    };
    this.interactedStepperIndex = 0;
  }

  intializeModel(): void {
    this.jobApplicantDetails = {
      seekingPosition: null,
      passportFullName: null,
      passportNumber: null,
      passportDateOfIssue: null,
      passportPlaceOfIssue: '',
      passportExpiryDate: null,
      passportIssueCountryId: 0,
      workExperienceYear: 0,
      workExperienceMonth: 0,
      specialityQualification: '',
      reference: '',
      attachment: {
        fileName: null,
        fileValue: null
      }
    };
    this.jobApplicantDetails.applicationPerson = {
      personTitleTypeId: 0,
      genderTypeId: 0,
      middleName: '',
      firstName: '',
      lastName: '',
      aadhaarNumber: 0,
      panNumber: '',
      nationalityCountryId: 0,
      religionTypeId: 0,
      casteTypeId: 0,
      email1: '',
      email2: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      addressLine1: '',
      addressLine2: '',
      addressCity: '',
      addressCountryId: 0,
      addressStateId: 0,
      addressPincode: '',
      dateOfBirth: null,
      languagesSpoken: '',
      maritalStatusTypeId: 0,
      attachment: {
        fileName: null,
        fileValue: null
      }
    };
    this.jobApplicantDetails.applicantEducationDetails = [{
      qualification: '',
      startDate: null,
      endDate: null,
      university: '',
      institution: '',
      specialization: '',
      result: ''
    }];
    this.jobApplicantDetails.applicantExperienceDetails = [{
      companyName: '',
      startDate: null,
      endDate: null,
      designation: '',
      description: '',
      salary: 0,
      reasonForChange: ''

    }];
    this.jobApplicantDetails.applicantTrainingDetails = [{
      name: '',
      startDate: null,
      endDate: null,
      location: '',
      description: '',
      institute: '',
      result: ''
    }];
  }


  ngOnInit(): void {
    this.intializeModel();
    this.genderTypeList();
    this.countriesList();
    this.maritalStatusTypes();
    this.getCast();
    this.getReligion();
    this.suffixTypeList();
    this.changeDetector.detectChanges();
    this.loaded = true;
    this.changeDetector.detectChanges();
  }


  getcontactInfo(data = null): object {
    const contactInfo = {
      contactDetails: data,
    };
    return contactInfo;
  }

  // onCancelClick
  onCancel(): void {
    this.interactedStepperIndex = 0;
    this.stepper.reset();
    this.applicantDetailsFormVC.resetForm();
    this.experienceDetailsFormVC.resetForm();
    this.addressInfoFormVC.resetForm();
    this.contactDetailsFormVC.resetForm();
    this.passportDetailsFormVC.resetForm();
    this.educationDetailsFormVC.resetForm();
    this.trainingDetailsFormVC.resetForm();
    this.attachmentsFormVC.resetForm();
    this.clearImages();
    this.clearImages(true);
    this.cancel.emit(true);
    const control = <FormArray>this.experienceDetails.controls['experienceListView'];
    for (let i = control.length - 1; i >= 0; i--) {
      control.removeAt(i);
    }
    control.push(this.initItemRows());
  }

  initilizeForm(): void {
    this.applicantDetailsForm();
    this.experienceDetailsForm();
    this.contactDetailsForm();
    this.addressInfoForm();
    this.passportDetailsForm();
    this.educationalDetailsForm();
    this.trainingDetailsForm();
    this.attachmentDetailsForm();
    this.uploadImages = this._formBuilder.group({
      FileNameWithExtension: [null],
      FileValue: [null],
      photoFileNameWithExtension: [null],
      photoFileValue: [null]
    });
  }

  applicantDetailsForm(): void {
    this.applicantDetails = this._formBuilder.group({
      personTitleTypeId: [null],
      firstName: ['', [Validators.required, Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      seekingPosition: [null, Validators.maxLength(45)],
      genderTypeId: [null, Validators.required],
      maritalStatusTypeId: [null],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      dateOfBirth: ['', [Validators.required]],
      panNumber: [null, [Validators.maxLength(10), Validators.pattern(Pattern.PAN_PATTERN)]],
      nationalityCountryId: [null, Validators.required],
      religionTypeId: [null],
      languagesSpoken: [null, [Validators.maxLength(45)]],
      casteTypeId: [null],
    });
  }

  contactDetailsForm(): void {
    this.contactDetails = this._formBuilder.group({
      email2: ['', [Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: ['', [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: ['', [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      email1: ['', [Validators.required, Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
    });
  }
  addressInfoForm(): void {
    this.addressInfo = this._formBuilder.group({
      addressLine1: ['', [Validators.required, Validators.maxLength(45)]],
      addressLine2: ['', [Validators.maxLength(45)]],
      addressCountryId: ['', Validators.required],
      addressStateId: ['', Validators.required],
      addressCity: ['', [Validators.maxLength(45)]],
      addressPincode: ['', [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]]
    });
  }
  passportDetailsForm(): void {
    this.passportDetails = this._formBuilder.group({
      passportNumber: [null, [Validators.required, Validators.maxLength(15)]],
      passportFullName: [null, [Validators.required, Validators.maxLength(45)]],
      passportPlaceOfIssue: [null, [Validators.required, Validators.maxLength(45)]],
      passportIssueCountryId: [null, Validators.required],
      passportDateOfIssue: [null, Validators.required],
      passportExpiryDate: [null, Validators.required]
    });
  }

  attachmentDetailsForm(): void {
    this.photonResumeDetails = this._formBuilder.group({});
  }

  experienceDetailsForm(): void {
    this.experienceDetails = this._formBuilder.group({
      years: [null, [Validators.max(100), Validators.pattern(Pattern.NUMBER_PATTERN)]],
      months: [null, [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.max(11)]],
      specialQualifications: [null],
      references: [null],
      experienceListView: this._formBuilder.array([this.initItemRows()]),
    });
  }

  // list all your form controls here, which belongs to your form array
  initItemRows(): FormGroup {
    return this._formBuilder.group({
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null),
      currency: new FormControl(null, Validators.maxLength(4)),
      salary: new FormControl(null, [Validators.min(1.00), Validators.max(99999999.99), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
      companyName: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      designation: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      description: new FormControl(null, Validators.maxLength(180)),
      isAddVisible: Boolean(true),
      isRemoveVisible: Boolean(false),
    });
  }

  // return type for educaion details form  - addNewRowSchoolScheduleform
  get addNewRowExperienceform(): FormArray {
    this.updateAddRemoveRow();
    return <FormArray>this.experienceDetails.get('experienceListView');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRow(): any {
    // control refers to your formarray
    const control = <FormArray>this.experienceDetails.controls['experienceListView'];

    // add new formgroup
    control.push(this.initItemRows());

    this.updateAddRemoveRow();
    this.stepper.selected.interacted = false;
    this.setStepperInfo(this.stepper, 'experienceDetails');
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRow(index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.experienceDetails.controls['experienceListView'];
    // remove the chosen row
    control.removeAt(index);
  }

  updateAddRemoveRow(): void {
    const i = this.experienceDetails.controls.experienceListView.value.length;
    if (this.experienceDetails.controls.experienceListView.value.length > 1) {
      this.experienceDetails.controls.experienceListView.value.forEach(e => {
        e.isAddVisible = false;
        e.isRemoveVisible = true;
      });
      this.experienceDetails.controls.experienceListView.value[i - 1].isAddVisible = true;
      this.experienceDetails.controls.experienceListView.value[i - 1].isRemoveVisible = true;
    }
    else if (this.experienceDetails.controls.experienceListView.value.length === 1) {
      this.experienceDetails.controls.experienceListView.value[i - 1].isAddVisible = true;
      this.experienceDetails.controls.experienceListView.value[i - 1].isRemoveVisible = false;
    }
  }

  //#region  Education Details FormArray
  educationalDetailsForm(): void {
    this.educationDetails = this._formBuilder.group({
      educationalListView: this._formBuilder.array([this.initEducationDetailsItemRows()]),
    });
  }

  // list all your form controls here, which belongs to your form array
  initEducationDetailsItemRows(): FormGroup {
    return this._formBuilder.group({
      university: new FormControl(null, [Validators.maxLength(45)]),
      institution: new FormControl(null, [Validators.maxLength(45)]),
      qualification: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      specialization: new FormControl(null, [Validators.maxLength(180)]),
      result: new FormControl(null, [Validators.maxLength(45)]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null),
      isAddVisible: Boolean(true),
      isRemoveVisible: Boolean(false),
    });
  }

  // return type for educaion details form  - addNewRowSchoolScheduleform
  get addNewRowEducationDetailsform(): FormArray {
    this.updateAddRemoveRowEducation();
    return <FormArray>this.educationDetails.get('educationalListView');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRowEducation(): any {
    // control refers to your formarray
    const controlArray = <FormArray>this.educationDetails.controls['educationalListView'];
    // add new formgroup
    controlArray.push(this.initEducationDetailsItemRows());
    // disable stepper interaction 
    this.updateAddRemoveRowEducation();
    this.stepper._steps._results[this.stepper.selectedIndex].interacted = false;
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRowEducation(index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.educationDetails.controls['educationalListView'];
    // remove the chosen row 
    control.removeAt(index);
  }

  updateAddRemoveRowEducation(): void {
    const i = this.educationDetails.controls.educationalListView.value.length;
    if (this.educationDetails.controls.educationalListView.value.length > 1) {
      this.educationDetails.controls.educationalListView.value.forEach(e => {
        e.isAddVisible = false;
        e.isRemoveVisible = true;
      });
      this.educationDetails.controls.educationalListView.value[i - 1].isAddVisible = true;
      this.educationDetails.controls.educationalListView.value[i - 1].isRemoveVisible = true;
    }
    else if (this.educationDetails.controls.educationalListView.value.length === 1) {
      this.educationDetails.controls.educationalListView.value[i - 1].isAddVisible = true;
      this.educationDetails.controls.educationalListView.value[i - 1].isRemoveVisible = false;
    }
  }
  //#endregion EducationDetails

  //#region  Training Details FormArray
  trainingDetailsForm(): void {
    this.trainingDetails = this._formBuilder.group({
      trainingListView: this._formBuilder.array([this.initTrainingItemRows()]),
    });
  }
  // list all your form controls here, which belongs to your form array
  initTrainingItemRows(): FormGroup {
    return this._formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      description: new FormControl(null),
      institute: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      location: new FormControl(null),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null),
      isAddVisible: Boolean(true),
      isRemoveVisible: Boolean(false),
    });
  }

  // return type for educaion details form  - addNewRowSchoolScheduleform
  get addNewRowTrainingDetailsform(): FormArray {
    this.updateAddRemoveRowTraining();
    return <FormArray>this.trainingDetails.get('trainingListView');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRowTraining(): any {
    // control refers to your formarray
    const control = <FormArray>this.trainingDetails.controls['trainingListView'];
    // add new formgroup
    control.push(this.initTrainingItemRows());
    this.updateAddRemoveRowEducation();
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRowTraining(index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.trainingDetails.controls['trainingListView'];
    // remove the chosen row
    control.removeAt(index);
  }

  updateAddRemoveRowTraining(): void {
    const i = this.trainingDetails.controls.trainingListView.value.length;
    if (this.trainingDetails.controls.trainingListView.value.length > 1) {
      this.trainingDetails.controls.trainingListView.value.forEach(e => {
        e.isAddVisible = false;
        e.isRemoveVisible = true;
      });
      this.trainingDetails.controls.trainingListView.value[i - 1].isAddVisible = true;
      this.trainingDetails.controls.trainingListView.value[i - 1].isRemoveVisible = true;
    }
    else if (this.trainingDetails.controls.trainingListView.value.length === 1) {
      this.trainingDetails.controls.trainingListView.value[i - 1].isAddVisible = true;
      this.trainingDetails.controls.trainingListView.value[i - 1].isRemoveVisible = false;
    }
  }
  //#endregion Training Details FormArray



  // gender List
  genderTypeList(): void {
    this.typeService.typeByCodeBasedOnCategory().subscribe(response => {
      this.genders = response;
    });
  }

  saveJobApplication(): void {
    this.setModelData();
    this.staffJobApplicationService.createJobApplication(this.jobApplicantDetails).subscribe(res => this.response(res), error => {
      this.errorResponse(error);
    });
    this.scrollIntoView('app-table');
  }


  response(response: any): void {
    document.getElementById('resetButtonStepper').click();
    this.openSnackBar(response.messages.ResultMessage);
  }

  setModelData(): void {
    if (this.uploadImages !== undefined) {
      if (this.uploadImages.controls['FileNameWithExtension'].value !== undefined && this.uploadImages.controls['FileNameWithExtension'].value !== null) {
        this.jobApplicantDetails.attachment.fileName = this.uploadImages.controls['FileNameWithExtension'].value;
        this.jobApplicantDetails.attachment.fileValue = this.uploadImages.controls['FileValue'].value;
      }

      if (this.uploadImages.controls['photoFileNameWithExtension'].value !== undefined && this.uploadImages.controls['photoFileNameWithExtension'].value !== null) {
        this.jobApplicantDetails.applicationPerson.attachment.fileName = this.uploadImages.controls['photoFileNameWithExtension'].value;
        this.jobApplicantDetails.applicationPerson.attachment.fileValue = this.uploadImages.controls['photoFileValue'].value;
      }

    }

    Object.assign(this.jobApplicantDetails.applicationPerson, this.contactDetails.value, this.addressInfo.value, this.applicantDetails.value);
    Object.assign(this.jobApplicantDetails, this.passportDetails.value);
    // Object.assign(this.jobApplicantDetails.applicationPerson, this.finalMobileNumbers);
    this.jobApplicantDetails.seekingPosition = this.applicantDetails.controls['seekingPosition'].value;
    this.jobApplicantDetails.workExperienceYear = this.experienceDetails.controls['years'].value;
    this.jobApplicantDetails.workExperienceMonth = this.experienceDetails.controls['months'].value;
    this.jobApplicantDetails.specialityQualification = this.experienceDetails.controls['specialQualifications'].value;

    Object.assign(this.jobApplicantDetails.applicationPerson, this.resetMobileNumbers('contactDetails'));

    this.jobApplicantDetails.reference = this.experienceDetails.controls['references'].value;
    this.jobApplicantDetails.applicantExperienceDetails = [];
    this.jobApplicantDetails.applicantTrainingDetails = [];
    this.jobApplicantDetails.applicantEducationDetails = [];

    if (this.experienceDetails.controls['experienceListView'].value !== undefined) {
      this.experienceDetails.controls['experienceListView'].value.forEach(s => {
        delete s.isAddVisible;
        delete s.isRemoveVisible;
      });

      if (!this.isNestedObjectEmpty(this.experienceDetails.value)) {
        this.jobApplicantDetails.applicantExperienceDetails = this.experienceDetails.controls['experienceListView'].value;
      }

    }

    if (this.trainingDetails.controls['trainingListView'].value !== undefined) {
      this.trainingDetails.controls['trainingListView'].value.forEach(t => {
        delete t.isAddVisible;
        delete t.isRemoveVisible;
        if (!this.isNestedObjectEmpty(t)) {
          this.jobApplicantDetails.applicantTrainingDetails.push(t);
        }
      });
    }


    if (this.educationDetails.controls['educationalListView'].value !== undefined) {
      this.educationDetails.controls['educationalListView'].value.forEach(e => {
        delete e.isAddVisible;
        delete e.isRemoveVisible;
      });
      if (!this.isNestedObjectEmpty(this.educationDetails.value)) {
        this.jobApplicantDetails.applicantEducationDetails = this.educationDetails.controls['educationalListView'].value;
      }
    }
  }

  isNestedObjectEmpty(obj, checkKey: any = false): boolean {
    let isEmpty = true;
    for (const key in obj) {
      if (key === 'isAddVisible' || (key === 'isRemoveVisible')) {
        continue;
      }
      if (checkKey && key === checkKey) {
        continue;
      }
      if (obj[key] !== null && obj[key] !== '') {
        if (typeof (obj[key]) === 'object') {
          if (obj[key] !== 'isAddVisible' || (obj[key] !== 'isRemoveVisible')) {
            isEmpty = this.isNestedObjectEmpty(obj[key]);
          }
        } else {
          return false;
        }
      }
    }
    return isEmpty;
  }
  imgChanged(event, resume = false): void {
    if (this.checkFileSize(event[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
      return;
    }
    if (event && event.length > 0) {
      const reader = new FileReader();
      const file = event[0];
      reader.readAsDataURL(file);
      let image;
      image = new Image();
      image.src = reader.result;
      const that = this;
      reader.onload = () => {
        if (resume) {
          that.uploadImages.controls.FileNameWithExtension.setValue(event[0].name);
          that.uploadImages.controls.FileValue.setValue((<string>reader.result).split(',')[1]);
          this.resumeImgProp = {
            src: <string>reader.result
          };
        } else {
          that.uploadImages.controls['photoFileNameWithExtension'].setValue(event[0].name);
          that.uploadImages.controls['photoFileValue'].setValue((<string>reader.result).split(',')[1]);
          this.photoImgProp = {
            src: <string>reader.result
          };
        }
        that.changeDetector.detectChanges();
      };
    }
  }

  clearImages(resume = false): void {
    if (resume) {
      this.resumeImgProp = {};
      this.uploadImages.controls.FileNameWithExtension.patchValue(null);
      this.uploadImages.controls.FileValue.patchValue(null);
    }
    else {
      this.photoImgProp = {};
      this.uploadImages.controls.photoFileNameWithExtension.patchValue('');
      this.uploadImages.controls.photoFileValue.patchValue('');
    }
    this.changeDetector.detectChanges();
  }

  validateFormArra(event): void {
    this.isNestedObjectEmpty(event);
  }

  countriesList(): void {
    this.stateOptionsSelect = [];
    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
    });
  }

  countryChanged(e): void {
    this.addressInfo.controls['addressStateId'].patchValue('');
    if (e) {
      this.stateOptionsSelect = [];
      this.stateService.stateAllStatesGet(e.value).subscribe(data => {
        this.stateOptionsSelect = data.states;
      });
    }
  }

  checkemptyNumber(number, key, form): string {
    if (number) {
      return this.finalMobileNumbers[key][form];
    } else {
      return '';
    }
  }

  resetMobileNumbers(formName): void {
    const that = this;
    Object.keys(that[formName].value).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel': that[formName].value[key] = that.checkemptyNumber(that[formName].value[key], key, formName); break;
      }
    });
    return this[formName].value;
  }

  maritalStatusTypes(): void {
    this.maritalTypes = [];
    this.staffJobApplicationService.fetchMaritalStatusTypes().subscribe(data => {
      this.maritalTypes = data.commonViewModel;
    });
  }

  getCast(): void {
    this.typeService.typeByCodeBasedOnCaste().subscribe(response => {
      this.casts = response;
    });
  }

  getReligion(): void {
    this.typeService.typeByCodeBasedOnReligion().subscribe(response => {
      this.religions = response;
    });
  }

  suffixTypeList(): void {
    this.typeService.typesByTypeCategoryCode('SFX').subscribe(res => this.suffixType = res.types);
  }

  onCountryChangeMobile(e, label, form): void {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label][form] = '+' + e.dialCode;
    this[form].controls[label].setValue('');
  }

  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  onError(obj, label, form): void {
    if (!obj && this[form].value[label]) {
      this[form].get(label).setErrors({ 'invalid_mobile': true });
    }
  }

  getNumber(e, label, form): void {
    this.finalMobileNumbers[label][form] = e.replace(this.intialCountryCode[label][form], this.intialCountryCode[label][form] + ' ');
  }
  OnSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (this.optionalMenus.find(s => s === event.selectedIndex)) {
      event.selectedStep.interacted = false;
    }
    if (event.selectedIndex === 1) {
      this.setStepperInfo(event, 'experienceDetails');
    } else if (event.selectedIndex === 4) {
      this.setStepperInfo(event, 'passportDetails');
    } else if (event.selectedIndex === 6) {
      this.setStepperInfo(event, 'trainingDetails');
    }
  }
  setStepperInfo(event, form): void {
    if (event.selectedStep) {
      event.selectedStep.interacted = false;
    }
    (<any>Object).values(this[form].controls).forEach((control: FormControl) => {
      control.markAsUntouched();
    });
  }
  isNestedObjectEmptyy(obj, checkKey: any = false): boolean {
    let isEmpty = true;
    for (const key in obj) {
      if (key === 'isAddVisible' || (key === 'isRemoveVisible')) {
        continue;
      }
      if (checkKey && key === checkKey) {
        continue;
      }
      if (obj[key] !== null && obj[key] !== '') {
        if (typeof (obj[key]) === 'object') {
          if (obj[key] !== 'isAddVisible' || (obj[key] !== 'isRemoveVisible')) {
            isEmpty = isEmpty && this.isNestedObjectEmptyy(obj[key]);
          }
        } else {
          return false;
        }
      }
    }
    return isEmpty;
  }

  trimSpacess(form: any, innerForm: any, index: any, key: string): void {
    (<FormArray>this[form].get(innerForm)).controls[index].get(key).setValue(this.commonService.trimSpaces
      ((<FormArray>(<FormArray>this[form].get(innerForm)).controls[index].get(key).value)));
  }
}




