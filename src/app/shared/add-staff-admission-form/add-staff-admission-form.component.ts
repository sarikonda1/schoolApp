import { Component, OnInit, ViewChild, ChangeDetectorRef, SimpleChanges, OnChanges, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Pattern, AppSettings } from 'app/app.constants';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from 'app/service/academic-service/api/state.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { AttachmentViewModel } from '../../modules/staff/staff-admissions/model/attachment-view-model';
import { StoreService } from 'app/service/file-management/store.service';
import { MatDialog, MatStepper, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { StaffDetailsView } from '../../modules/staff/staff-admissions/model/staff-details-view';
import { RouteConfig } from 'app/url.config';

@Component({
  selector: 'app-add-staff-admission-form',
  templateUrl: './add-staff-admission-form.component.html',
  styleUrls: ['./add-staff-admission-form.component.scss'],
  providers: [StaffJobApplicationService, StaffMemberService]
})
export class AddStaffAdmissionFormComponent extends CommonComponent implements OnChanges, OnInit {
  staffId: any;
  isSingleClick = false;
  constructor(private _formBuilder: FormBuilder, private cd: ChangeDetectorRef, private typeService: TypeService, private countryService: CountryService, private router: Router,
    public commonService: CommonService,
    private stateService: StateService, private sanitizer: DomSanitizer,
    private staffJobApplicationService: StaffJobApplicationService, private storeService: StoreService, private dialogRef: MatDialog,
    private staffMemberService: StaffMemberService, private route: ActivatedRoute, public snackBar: MatSnackBar) {
    super();
  }
  interactedStepperIndex = 0;
  attachmentInfo: AttachmentViewModel;
  @ViewChild('stepper') stepper;
  @Input() inputJobApplicationDetails: string;
  @Input() comments: string;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  applicantDetails: FormGroup;
  contactDetails: FormGroup;
  addressDetails: FormGroup;
  staffRoleDetails: FormGroup;
  passportDetails: FormGroup;
  emergencyContactDetails: FormGroup;
  uploadImages: FormGroup;
  approveForm: FormGroup;

  button = AppSettings.SUBMIT;
  validate = true;
  loaded: boolean;
  editStaff: boolean;
  stateOptionsSelect: any[];
  suffixType: any;
  genders: any;
  maritalStatusType: any;
  casts: any;
  religions: any;
  staffTypes: any;
  countryOptionsSelect: any;
  applicantInfo: any;
  profileImage: any;
  inputJobApplicationData: any;
  addressStateId: any;
  applicationInfo = {};
  passport = {};
  image: any = {
    src: null,
    width: null,
    height: null
  };

  attachments = {
    uploadImages: {
      src: null
    },
  };

  today = new Date();
  yesterday = new Date(this.today.setDate(this.today.getDate()));
  currentDate: any = this.yesterday;

  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };

  intialCountryCode = {
    mobileTel: this.getcontactInfo('+91'),
    otherTel: this.getcontactInfo('+91'),
    landTel: this.getcontactInfo('+91'),
    emgergencyContactTelNumber1: this.getcontactInfo('+91'),
    emgergencyContactTelNumber2: this.getcontactInfo('+91')
  };

  finalMobileNumbers = {
    mobileTel: this.getcontactInfo(),
    otherTel: this.getcontactInfo(),
    landTel: this.getcontactInfo(),
    emgergencyContactTelNumber1: this.getcontactInfo('+91'),
    emgergencyContactTelNumber2: this.getcontactInfo('+91')
  };

  staffDetailsView: StaffDetailsView;

  intializeModel(): void {
    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };
    this.applicantInfo = {
      personTitleTypeId: 0,
      genderTypeId: 0,
      firstName: '',
      lastName: '',
      middleName: '',
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
      dateOfBirth: new Date(),
      languagesSpoken: '',
      maritalStatusTypeId: 0,
      attachment: this.attachmentInfo,
    };

    this.passport = {
      fullName: '',
      passportNumber: '',
      dateOfIssue: new Date(),
      placeOfIssue: '',
      expiryDate: new Date(),
      issueCountryId: 0
    };

    this.applicationInfo = {
      staffTypeId: 0,
      emergencyContactName1: '',
      emergencyContactRelation1: '',
      emgergencyContactTelNumber1: '',
      emergencyContactName2: '',
      emergencyContactRelation2: '',
      emgergencyContactTelNumber2: '',
      position: '',
      department: '',
      specialityQualification: '',
      dateOfJoin: new Date(),
      medicalCondition: '',
      jobApplicationId: '',
      processedComments: '',
      person: this.applicantInfo,
      passport: this.passport,
      allowLogin: ''
    };
  }



  ngOnInit(): void {
    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };

    this.applicantDetails = this._formBuilder.group({
      personTitleTypeId: [null],
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      dateOfBirth: [null, Validators.required],
      genderTypeId: [null, Validators.required],
      maritalStatusTypeId: [null],
      nationalityCountryId: [null, Validators.required],
      religionTypeId: [null],
      casteTypeId: [null],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      panNumber: [null, Validators.maxLength(10)],
      languagesSpoken: [null, [Validators.maxLength(45)]],
      medicalCondition: [null, [Validators.maxLength(45)]],
    });

    this.staffRoleDetails = this._formBuilder.group({
      dateOfJoin: [null, [Validators.required]],
      staffTypeId: [null, [Validators.required]],
      department: [null, [Validators.maxLength(45)]],
      position: [null, [Validators.maxLength(45)]],
      specialityQualification: [null, [Validators.maxLength(100)]],
      jobApplicationId: [null],
      allowLogin: [false, [Validators.required]]
    });

    this.contactDetails = this._formBuilder.group({
      email1: [null, [Validators.maxLength(90), Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]],
      email2: [null, [Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: [null, [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
    });

    this.addressDetails = this._formBuilder.group({
      addressLine1: [null, [Validators.required, Validators.maxLength(45)]],
      addressLine2: [null, [Validators.maxLength(45)]],
      addressCountryId: [null, Validators.required],
      addressStateId: [null, Validators.required],
      addressCity: [null, [Validators.maxLength(45)]],
      addressPincode: [null, [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]]
    });

    this.emergencyContactDetails = this._formBuilder.group({
      emergencyContactName1: [null, [Validators.required, Validators.maxLength(45)]],
      emergencyContactRelation1: [null, [Validators.required, Validators.maxLength(45)]],
      emgergencyContactTelNumber1: [null, [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      emergencyContactName2: [null, Validators.maxLength(45)],
      emergencyContactRelation2: [null, Validators.maxLength(45)],
      emgergencyContactTelNumber2: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      socialCategory: [null]
    });

    this.passportDetails = this._formBuilder.group({
      fullName: [null, [Validators.required, Validators.maxLength(45)]],
      passportNumber: [null, [Validators.required, Validators.maxLength(15)]],
      placeOfIssue: [null, [Validators.required, Validators.maxLength(45)]],
      issueCountryId: [null, [Validators.required]],
      dateOfIssue: [null, [Validators.required]],
      expiryDate: [null, [Validators.required]]
    });

    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
    });

    this.uploadImages = this._formBuilder.group({
      attachment: [this.attachmentInfo, Validators.required]
    });

    this.suffixTypeList();
    this.genderTypeList();
    this.maritalTypeList();
    this.getCast();
    this.getReligion();
    this.getStaffType();
    this.cd.detectChanges();
    this.loaded = true;
    this.cd.detectChanges();

    if (this.route.params) {
      this.route.params.subscribe((params) => {
        if (params.applicationId) {
          this.interactedStepperIndex = 0;
          this.staffId = params.applicationId;
          this.staffMemberService.staffMember(this.staffId)
            .subscribe((res: any) => this.getStaffDetails(res), error => {
              this.errorResponse(error);
            });
        }
      });
    }
  }

  getStaffDetails(data): void {
    this.inputJobApplicationData = data.staffMemberDetails;
    this.setJobApplication();
    this.editStaff = true;
    this.button = 'Update';
    this.approveForm = this._formBuilder.group({
      staffId: [null]
    });
    this.approveForm.controls['staffId'].patchValue(this.staffId);
    this.customSteperLabelChange();
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.comments && changes.inputJobApplicationDetails.currentValue) {
      this.inputJobApplicationData = changes.inputJobApplicationDetails.currentValue;
      this.staffRoleDetails.controls['jobApplicationId'].setValue(this.inputJobApplicationData.id);
      this.setJobApplication();
      this.button = AppSettings.APPROVE;
    }
    if (!changes.inputJobApplicationDetails && changes.comments) {
      this.approveForm = this._formBuilder.group({
        processedComments: [changes.comments.currentValue, [Validators.required, Validators.maxLength(180)]]
      });

    }
  }

  setJobApplication(): void {
    this.applicantDetails.patchValue(this.inputJobApplicationData.person);
    // tslint:disable-next-line:no-console
    this.applicantDetails.patchValue(this.inputJobApplicationData);

    this.contactDetails.patchValue(this.inputJobApplicationData.person);
    this.staffRoleDetails.patchValue(this.inputJobApplicationData);
    // this.staffRoleDetails.controls['position'].setValue(this.inputJobApplicationData.position === null ? null : this.inputJobApplicationData.position);
    this.emergencyContactDetails.patchValue(this.inputJobApplicationData);
    this.findMobileFileds('contactDetails');
    this.findMobileFileds('emergencyContactDetails');

    if (this.inputJobApplicationData.person.addressLine1) {
      this.addressDetails.patchValue(this.inputJobApplicationData.person);
      if (this.inputJobApplicationData.person.addressCountryId) {
        this.countryChanged(this.inputJobApplicationData.person.addressCountryId, this.inputJobApplicationData.person.addressStateId);
      }
    }
    if (this.inputJobApplicationData.passport) {
      this.passportDetails.patchValue(this.inputJobApplicationData.passport);
    } else {
      if (this.inputJobApplicationData.passportFullName) {
        this.passportDetails.controls['fullName'].patchValue(this.inputJobApplicationData.passportFullName);
        this.passportDetails.controls['passportNumber'].patchValue(this.inputJobApplicationData.passportNumber);
        this.passportDetails.controls['placeOfIssue'].patchValue(this.inputJobApplicationData.passportPlaceOfIssue);
        this.passportDetails.controls['issueCountryId'].patchValue(this.inputJobApplicationData.passportIssueCountryId);
        this.passportDetails.controls['dateOfIssue'].patchValue(this.inputJobApplicationData.passportDateOfIssue);
        this.passportDetails.controls['expiryDate'].patchValue(this.inputJobApplicationData.passportExpiryDate);
      }
    }

    if (this.inputJobApplicationData.person && this.inputJobApplicationData.person.attachment) {
      this.profileImage = this.storeService.getFilePath(this.inputJobApplicationData.person.attachment.fileName);
      this.image.src = this.profileImage;
      this.setImageProperties(this.image, 'uploadImages');

      this.createFormAttachmentValue(this.inputJobApplicationData.person.attachment.fileName, 'uploadImages');
    }
    else {
      this.clearImages('uploadImages');
    }
    this.customSteperLabelChange();
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.loaded = false;
    this.cd.detectChanges();
    this.loaded = true;
    this.cd.detectChanges();
  }

  findMobileFileds(form): void {
    const that = this;
    Object.keys(that[form].value).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel':
        case 'emgergencyContactTelNumber1':
        case 'emgergencyContactTelNumber2':
          this.updateCountryCode(form, key, that[form].value[key]); break;
      }
    });
  }

  updateCountryCode(key, label, val): void {
    if (val) {
      const data = val.split(' ');
      if (data[0] !== val) {
        this.intialCountryCode[label][key] = data[0];
        this.finalMobileNumbers[label][key] = data[0] + ' ' + data[1];
      } else {
        this.finalMobileNumbers[label][key] = this.intialCountryCode[label][key] + ' ' + val;
      }
    }
  }

  createFormAttachmentValue(data: any, key: any): void {
    this.storeService.storeFileEncryptByFileNameGet(data)
      .subscribe((value: any) => {
        if (value) {
          if (this.inputJobApplicationData.attachment) {
            this.inputJobApplicationData.attachment.fileValue = value.value;
            this[key].controls['attachment'].patchValue(this.inputJobApplicationData.attachment);
          }
          if (this.inputJobApplicationData.person.attachment) {
            this.inputJobApplicationData.person.attachment.fileValue = value.value;
            this[key].controls['attachment'].patchValue(this.inputJobApplicationData.person.attachment);
          }
        }
      });
  }

  suffixTypeList(): void {
    this.typeService.typesByTypeCategoryCode('SFX').subscribe(res => this.suffixType = res.types);
  }

  genderTypeList(): void {
    this.typeService.typeByCodeBasedOnCategory().subscribe(response => {
      this.genders = response;
    });
  }

  maritalTypeList(): void {
    this.typeService.typesByTypeCategoryCode('MTS').subscribe(res => this.maritalStatusType = res.types);
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

  getStaffType(): void {
    this.staffJobApplicationService.fetchStaffTypes().subscribe(response => {
      this.staffTypes = response;
    });
  }

  onError(obj, label, form): void {
    if (!obj && this[form].value[label]) {
      this[form].get(label).setErrors({ 'invalid_mobile': true });
    }
  }

  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  getNumber(e, label, form): void {
    this.finalMobileNumbers[label][form] = e.replace(this.intialCountryCode[label][form], this.intialCountryCode[label][form] + ' ');
  }

  getcontactInfo(data = null): object {
    const contactInfo = {
      contactDetails: data,
      emergencyContactDetails: data
    };
    return contactInfo;
  }

  onCountryChangeMobile(e, label, form): void {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label][form] = '+' + e.dialCode;
    this[form].controls[label].setValue('');
  }

  countryChanged(e, stateValue = 0): void {
    this.addressDetails.controls['addressStateId'].patchValue('');
    if (e) {
      this.stateOptionsSelect = [];
      this.stateService.stateAllStatesGet(e).subscribe(data => {
        this.stateOptionsSelect = data.states;
        if (stateValue) {
          this.addressDetails.controls['addressStateId'].patchValue(stateValue);
        }
      });
    }
  }

  imgChanged(files, form): void {
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
        that.setImageProperties(image, form);
        that[form].controls.attachment.patchValue({ fileName: files[0].name, fileValue: (<string>reader.result).split(',')[1] });
        that.cd.detectChanges();
      };
    };
  }

  setImageProperties(image, form): void {
    const data = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width: image.width,
      height: image.height
    };
    this.attachments[form] = data;
    this.cd.detectChanges();
  }

  clearImages(form): void {
    this.attachments[form] = {};
    this[form].controls.attachment.patchValue(this.attachmentInfo);
    this.cd.detectChanges();
  }

  onCancel(): void {
    if (this.staffRoleDetails.value.jobApplicationId) {
      // this.router.navigate([RouteConfig.JOB_APPLICATION_DETAILS + '/' + this.staffRoleDetails.value.jobApplicationId]);
    } else {
      // this.router.navigate([RouteConfig.STAFF_STAFF_DATABASE]);
    }
    history.back();
    this.stepper.reset();
    this.clearImages('uploadImages');
    this.cancel.emit(true);
  }

  onSubmit(): void {

    if (!(this.approveForm && this.approveForm.valid) && this.staffRoleDetails.value.jobApplicationId) {
      if (this.approveForm && this.approveForm.controls.processedComments.errors.maxlength){
        this.openSnackBar(AppSettings.COMMENTS_ARE_VALID, true);
      }else{
        this.openSnackBar(AppSettings.COMMENTS_ARE_REQUIRED, true);
      }
      document.getElementById('comment-field').focus();
    }
    else {
      this.setModelData();
    }
  }

  setModelData(): void {
    this.applicationInfo['person'] = {};
    this.applicationInfo['person']['attachment'] = null;
    this.applicationInfo['passport'] = null;

    // use for approve application
    if (this.approveForm && this.approveForm.value.processedComments) {
      this.applicationInfo['processedComments'] = this.approveForm.value.processedComments;
    }

    Object.assign(this.applicationInfo['person'], this.applicantDetails.value,
      this.resetMobileNumbers('contactDetails'), this.addressDetails.value);

    if (this.isNestedObjectEmpty(this.passportDetails.value) || !this.passportDetails.valid) {
      this.applicationInfo['passport'] = null;
    } else {
      Object.assign(this.applicationInfo['passport'] = {}, this.passportDetails.value);
    }

    Object.assign(this.applicationInfo, this.staffRoleDetails.value, this.resetMobileNumbers('emergencyContactDetails'));

    if (this.uploadImages.value.attachment.fileName) {
      Object.assign(this.applicationInfo['person']['attachment'] = {}, this.uploadImages.controls.attachment.value);
    }

    this.applicationInfo['medicalCondition'] = this.applicantDetails.value.medicalCondition;

    this.applicationInfo['specialityQualification'] = this.staffRoleDetails.value.specialityQualification;
    
    if (!this.isSingleClick){
      this.isSingleClick = true;
      if (this.staffRoleDetails.value.jobApplicationId) {
        this.staffMemberService.approveStaff(this.applicationInfo)
          .subscribe((res: any) => this.onSuccessResponse(res), error => {
            this.errorResponse(error);
          });
      }    
      else if (this.editStaff) {
        // Update Staff Member             
        this.staffDetailsView = this.applicationInfo;
        this.button = AppSettings.UPDATE;
        this.staffDetailsView.id = this.inputJobApplicationData.id;
        this.staffMemberService.staff(this.applicationInfo)
          .subscribe((res: any) => this.onSuccessResponse(res), error => {
            this.errorResponse(error);
          });
      }
      else {
        // Add Staff Member
        this.button = AppSettings.SUBMIT;
        this.staffMemberService.staffPost(this.applicationInfo)
          .subscribe((res: any) => this.onSuccessResponse(res), error => {
            this.errorResponse(error);
          });
      }
      setTimeout(() => {
        this.isSingleClick = false;
      }, 1000);
    }
  }
  onSuccessResponse(res: any): void {
    this.openSnackBar(res.messages.ResultMessage);
    this.router.navigate([RouteConfig.STAFF_STAFF_DATABASE]);
  }
  isNestedObjectEmpty(obj, checkKey: any = false): boolean {
    let isEmpty = true;
    for (const key in obj) {
      if (checkKey && key === checkKey) {
        continue;
      }
      if (obj[key] !== null && obj[key] !== '') {
        if (typeof (obj[key]) === 'object') {
          isEmpty = this.isNestedObjectEmpty(obj[key]);
        } else {
          return false;
        }
      }
    }
    return isEmpty;
  }

  resetMobileNumbers(formName): void {
    const that = this;
    Object.keys(that[formName].value).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel':
        case 'emgergencyContactTelNumber1':
        case 'emgergencyContactTelNumber2': that[formName].value[key] = that.checkemptyNumber(that[formName].value[key], key, formName); break;
      }
    });
    return this[formName].value;
  }

  checkemptyNumber(number, key, form): string {
    if (number) {
      return this.finalMobileNumbers[key][form];
    } else {
      return '';
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  validApplicationDate(): void {
    if (this.applicantDetails.controls.dateOfBirth.value != null) {
    }
  }

  onSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex === 5) {
      event.selectedStep.interacted = false;
      (<any>Object).values(this.passportDetails.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
      });
    }
    if ([1, 3, 4].includes(event.selectedIndex)){
      event.selectedStep.interacted = false;
    }
  }
}
