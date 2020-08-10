import { Component, ChangeDetectorRef, ViewChild, EventEmitter, Output, Input, SimpleChanges, ElementRef, OnChanges, OnInit } from '@angular/core';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { AcademicSessionService } from 'app/service/academic-service';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { LanguageService } from 'app/service/academic-service/api/language.service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { AttachmentViewModel } from 'app/modules/staff/staff-admissions/model/attachment-view-model';
import { ApplicantPersonView } from 'app/modules/academics/student-admissions/model/applicant-person-view';
import { FatherPersonView } from 'app/modules/academics/student-admissions/model/father-person-view';
import { MotherPersonView } from 'app/modules/academics/student-admissions/model/mother-person-view';
import { GuardianPersonView } from 'app/modules/academics/student-admissions/model/guardian-person-view';
import { StudentApplicationSiblingsView } from 'app/modules/academics/student-admissions/model/student-application-siblings-view';
import { StudentApplicationView } from 'app/modules/academics/student-admissions/model/student-application-view';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-student-application',
  templateUrl: './add-edit-student-application.component.html',
  styleUrls: ['./add-edit-student-application.component.scss'],
  providers: [GradeSetupService, AcademicSessionService, ClassesConfigService, StudentApplicationService]
})
export class AddEditStudentApplicationComponent extends CommonComponent implements OnChanges, OnInit {
  schoolBoardsList: any[] = [];
  filterClasses: any[] = [];
  filterSiblingClasses: any[] = [];
  academicSessions: any[] = [];
  studentApplciation: FormGroup;
  validate = true;
  loaded = false;
  studentDetails: FormGroup;
  contactDetails: FormGroup;
  addressDetails: FormGroup;
  fatherDetails: FormGroup;
  motherDetails: FormGroup;
  guardianDetails: FormGroup;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
  intialCountryCode = {
    mobileTel: this.getcontactInfo('+91'),
    otherTel: this.getcontactInfo('+91'),
    landTel: this.getcontactInfo('+91')
  };

  // set contactInfo(daa) = {

  // }
  finalMobileNumbers = {
    mobileTel: this.getcontactInfo(),
    otherTel: this.getcontactInfo(),
    landTel: this.getcontactInfo()
  };

  countryOptionsSelect: any;
  stateOptionsSelect: any[];
  genders: any;
  casts: any;
  religions: any;
  siblingCountForm: FormGroup;
  languages: any;

  form: FormGroup;
  siblingCount: number;
  @ViewChild('siblingForm') siblingForm;
  sectionNames: any[];
  closeAddPanel: boolean;
  attachments = {
    contactDetails: {},
    fatherDetails: {},
    motherDetails: {},
    guardianDetails: {}
  };
  attachmentInfo: AttachmentViewModel;
  applicantInfo: ApplicantPersonView;
  fatherInfo: FatherPersonView;
  motherInfo: MotherPersonView;
  guardianInfo: GuardianPersonView;
  siblingInfo: StudentApplicationSiblingsView[];
  applicationInfo: StudentApplicationView;
  addRemoveForm: boolean;
  index: any;
  removeForm: boolean;
  sourceOfRegistrations: any;
  applicationCategories: any;
  isSiblingVerified: boolean;
  finalSections: Array<any>;
  siblingDetailsString = 'Sibling Details have been verified. Same stepperInfo information as that the sibling will be used for this application.';
  @ViewChild('stepper') stepper;
  academicSessionId: any;
  @Input() resetStepper: boolean;
  @Input() isOnlineApplicaton: boolean;
  today = new Date();
  yesterday = new Date(this.today.setDate(this.today.getDate() - 1));
  currentDate: any = this.yesterday;
  isSchoolhasBoards = true;
  public readonly STEPPER_INDEXS = {
    applicationIndex: 0,
    studentIndex: 1,
    siblingIndex: 2,
    contactIndex: 3,
    addressIndex: 4,
    fatherIndex: 5,
    motherIndex: 6,
    guardianIndex: 7,
    finalIndex: 8,
  };
  onlineApplicationData: any;
  schoolId: any;
  asId: any;
  constructor(private gradeSetupService: GradeSetupService,
    private academicSessionService: AcademicSessionService,
    private _formBuilder: FormBuilder,
    public commonService: CommonService,
    private countryService: CountryService,
    private stateService: StateService,
    private typeService: TypeService,
    private studentApplicationSevice: StudentApplicationService,
    private langaugeService: LanguageService,
    private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialog,
    private classService: ClassesConfigService,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    public snackBar: MatSnackBar,
    public route: ActivatedRoute
  ) {
    super();
    this.intializeForms();
  }
  intializeForms(): void{
    this.studentApplciation = this._formBuilder.group({
      currentSchoolName: [null, [Validators.maxLength(45)]],
      currentSchoolCity: [null, [Validators.maxLength(45)]],
      currentClass: [null, [Validators.maxLength(45)]],
      admissionForClassId: [null, Validators.required],
      admissionForSchoolBoardId: [null, Validators.required],
      admissionForSchooAcademicSessionId: [null, Validators.required],
      reasonForSchoolChange: [null, [Validators.maxLength(150)]],
      sourceOfRegistrationId: [null],
      sourceOfRegistrationInfo: [null, [Validators.maxLength(250)]],
      applicationCategoryId: [null, Validators.required],
      additionalInformation: [null, [Validators.maxLength(250)]]
    });

    this.studentDetails = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      genderTypeId: [null, Validators.required],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      dateOfBirth: [null],
      nationalityCountryId: [null, Validators.required],
      religionTypeId: [null],
      motherTongueLanguageId: [null],
      casteTypeId: [null],
      attachment: [this.attachmentInfo]
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
      addressLine3: [null, [Validators.maxLength(45)]],
      addressCountryId: [null, Validators.required],
      addressStateId: [null, Validators.required],
      addressCity: [null, [Validators.maxLength(45)]],
      addressPincode: [null, [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]]
    });

    this.fatherDetails = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      occupation: [null, Validators.maxLength(45)],
      designation: [null, Validators.maxLength(45)],
      organization: [null, Validators.maxLength(45)],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      panNumber: [null, [Validators.pattern(Pattern.PAN_PATTERN)]],
      email1: [null, [Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      attachment: [this.attachmentInfo]
    });

    this.motherDetails = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      occupation: [null, Validators.maxLength(45)],
      designation: [null, Validators.maxLength(45)],
      organization: [null, Validators.maxLength(45)],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      panNumber: [null, [Validators.pattern(Pattern.PAN_PATTERN)]],
      email1: [null, [Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      attachment: [this.attachmentInfo]
    });
    this.guardianDetails = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      genderTypeId: [null, [Validators.required]],
      occupation: [null, Validators.maxLength(45)],
      designation: [null, Validators.maxLength(45)],
      organization: [null, Validators.maxLength(45)],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      panNumber: [null, [Validators.pattern(Pattern.PAN_PATTERN)]],
      email1: [null, [Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      attachment: [this.attachmentInfo]
    });
    this.siblingCountForm = this._formBuilder.group({
      siblingsOlderToApplicant: [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.max(100)]],
      siblingsYoungerToApplicant: [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.max(100)]],
      siblingsInSchool: [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.max(4), Validators.min(1)]],
      items: this._formBuilder.array([])
    });
  }
  getSiblingDetailsString(stepper): string {
    return this.siblingDetailsString.replace('stepperInfo', stepper);
    // return data;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resetStepper.currentValue) {
      this.attachments = {
        contactDetails: {},
        fatherDetails: {},
        motherDetails: {},
        guardianDetails: {}
      };
      this.finalMobileNumbers = {
        mobileTel: this.getcontactInfo(),
        otherTel: this.getcontactInfo(),
        landTel: this.getcontactInfo()
      };
      this.loaded = false;
      this.cd.detectChanges();
      this.loaded = true;
      this.cd.detectChanges();
      this.setSiblingVerifiy();
    }
  }
  intializeModel(): void {
    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };
    this.applicantInfo = {
      personTitleTypeId: 0,
      firstName: '',
      lastName: '',
      middleName: '',
      genderTypeId: 0,
      aadhaarNumber: 0,
      dateOfBirth: new Date(),
      nationalityCountryId: 0,
      religionTypeId: 0,
      motherTongueLanguageId: 0,
      casteTypeId: 0,
      email1: '',
      email2: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      addressCity: '',
      addressCountryId: 0,
      addressStateId: 0,
      addressPincode: '',
      attachmentViewModel: this.attachmentInfo,
    };
    this.fatherInfo = {
      firstName: '',
      lastName: '',
      middleName: '',
      occupation: '',
      designation: '',
      organization: '',
      aadhaarNumber: 0,
      panNumber: '',
      email1: '',
      mobileTel: '',
      landTel: '',
      otherTel: '',
      attachmentViewModel: this.attachmentInfo
    };
    this.siblingInfo = [{
      classId: 0,
      sectionId: 0,
      siblingAdmissionNumber: '',
      firstName: '',
      lastName: '',
      middleName: '',
      currentStudentId: null,
    }];
    this.applicationInfo = {
      currentSchoolName: '',
      currentSchoolCity: '',
      currentClass: '',
      admissionForClassId: 0,
      admissionForSchoolBoardId: 0,
      admissionForSchooAcademicSessionId: 0,
      reasonForSchoolChange: '',
      sourceOfRegistrationId: 0,
      sourceOfRegistrationInfo: '',
      additionalInformation: '',
      applicationCategoryId: 0,
      siblingsOlderToApplicant: 0,
      siblingsYoungerToApplicant: 0,
      siblingsInSchool: 0,
      studentDetails: this.applicantInfo,
      fatherDetails: this.fatherInfo,
      motherDetails: this.fatherInfo,
      guardianDetails: this.fatherInfo
    };
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id){
       this.schoolId = params.id;
      }
      if (params.asId){
        this.asId = params.asId;
       }
    });
    this.intializeModel();
    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
      this.countryOptionsSelect.forEach(element => {
        if (element.code === AppSettings.IN_CODE) {
          this.addressDetails.controls['addressCountryId'].setValue(element.id);
          this.countryChanged(element.id, null);
        }
      });
    });
    this.genderTypeList();
    this.setSiblingVerifiy();
    if (this.isOnlineApplicaton){
        this.studentApplicationSevice.schoolAcademicData(this.schoolId, this.asId)
        .subscribe(res => this.onGetOnlineApplication(res), err => this.errorResponse(err));
    } else{
      this.getSchoolBoardsList();
      this.getAcademicSession();
      this.getSourceOfRegistration();
      this.getApplicationCategory();
      this.getCast();
      this.getReligion();
      this.getLanguage();
      this.cd.detectChanges();
      this.loaded = true;
      this.cd.detectChanges();
      this.getSiblingClasses();
      this.getSiblingSections();
    }
  }
  onGetOnlineApplication(res): void{
    this.onlineApplicationData = res;
    this.academicSessions = [];
    res.schoolAcademicsData.map(e => {
      this.academicSessions.push({
        label: e.academicSessionName,
        value: e.academicSessionId
      });
      e.schoolClassBoards.map(sb => {
        if (!this.filterSiblingClasses.some(el => el.value === sb.classId)){
          this.filterSiblingClasses.push({
            label: sb.className,
            value: sb.classId
          });
        }
      });
    });
    const as = this.academicSessions.find(e => e.value === res.academicSessionId);
    if (as){
      this.academicSessionId = as.value;
      this.studentApplciation.patchValue({
        admissionForSchooAcademicSessionId: as.value
      });
      this.onSelectAcademicSession(as.value);
      this.cd.detectChanges();
    }
    this.religions = res.religions;
    this.casts = res.casts;
    this.languages = res.languages;
    this.sourceOfRegistrations = res.sourceOfRegistrations;
    this.applicationCategories = res.applicationCategories;
    this.finalSections = [];
    if (res.sections){
       res.sections.map(e => {
        this.finalSections.push({
          label: e.name,
          value: e.id
        });
      });
    }
    this.loaded = true;
    this.cd.detectChanges();
  }
  setSiblingVerifiy(): void {
    (<FormArray>this.siblingCountForm.controls['items']).valueChanges.subscribe(form => {
      if (!form.length) {
        return;
      }
      if (form.filter(ele => ele.verified).length === form.length) {
        this.isSiblingVerified = true;
        this.siblingCountForm.controls['items'].setErrors(null);
      } else {
        this.isSiblingVerified = false;
        this.siblingCountForm.controls['items'].setErrors({ required: true });
      }
    });
  }
  getcontactInfo(data = null): object {
    const contactInfo = {
      contactDetails: data,
      fatherDetails: data,
      motherDetails: data,
      guardianDetails: data
    };
    return contactInfo;
  }
  imgChanged(files, form): void {
    if (this.checkFileSize(files[0], 'image', 2097152)) {
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
    this.attachments[form] = {};
    this.attachments[form] = data;
    this.cd.detectChanges();
  }
  clearImages(form): void {
    this.attachments[form] = {};
    this[form].controls.attachment.patchValue(null);
    this[form].controls.attachment.patchValue(null);
    this.cd.detectChanges();
  }
  getSchoolBoardsList(): void {
    this.gradeSetupService.schoolBoards().subscribe(res => {
      if (res.listViews && res.listViews.length) {
        this.isSchoolhasBoards = true;
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
        });
      } else {
        this.isSchoolhasBoards = false;
        this.studentApplciation.get('admissionForSchoolBoardId').clearValidators();
        this.studentApplciation.get('admissionForSchoolBoardId').updateValueAndValidity();
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  // Get Classes to filter table data
  getClassesList(): void {
    this.filterClasses = [];
    this.classService.academicClassesBasedOnSchoolBoard(this.academicSessionId, null).subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.filterClasses.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  getSiblingClasses(): void {
    this.filterSiblingClasses = [];
    this.schoolAcademicSessionService.classes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterSiblingClasses.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getAcademicSession(): void {
    // const currentSchool = JSON.parse(localStorage.getItem('_s'));
    this.academicSessionService.getAcademicSessionsBySchoolId()
      .subscribe(
        response => {
          if (response.academicSessionDataView.length) {
            this.academicSessions = [];
            response.academicSessionDataView.forEach(element => {
              if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE || element.statusCode === AppSettings.ACADEMICSESSION_NEW) {
                this.academicSessions.push({
                  value: element.id,
                  label: element.displayName,
                  code: element.statusCode
                });
              }
            });
          }
        });
  }

  onSelectAcademicSession(academicId: any): void {
    this.academicSessionId = academicId;
    this.studentApplciation.controls.admissionForClassId.setValue(null);
    if (this.isOnlineApplicaton){
      this.schoolBoardsList = [];
      this.studentApplciation.controls.admissionForSchoolBoardId.setValue(null);
      const temp = this.onlineApplicationData.schoolAcademicsData.find(e => e.academicSessionId === academicId);
      if (temp){
        const data = temp.schoolClassBoards;
        data.map(e => {
          if (!this.schoolBoardsList.some(el => el.value === e.schoolBoardId)){
            this.schoolBoardsList.push({
              label: e.schoolBoardName,
              value: e.schoolBoardId
            });
          }
        });
      }
    } else{
      if (this.isSchoolhasBoards) {
        if (this.studentApplciation.controls.admissionForSchoolBoardId.value) {
          this.onSelectSchoolBoard(this.studentApplciation.controls.admissionForSchoolBoardId);
        }
      } else {
        this.getClassesList();
      }
    }
  }

  // on Selection of school board
  onSelectSchoolBoard(schoolBoard: any): void {
    this.filterClasses = [];
    if (!this.academicSessionId){
      return;
    }
    if (this.onlineApplicationData){
      // tslint:disable-next-line: max-line-length
      const data = this.onlineApplicationData.schoolAcademicsData.find(e => e.academicSessionId === this.studentApplciation.value.admissionForSchooAcademicSessionId).schoolClassBoards;
      data.filter(el => el.schoolBoardId === schoolBoard.value).map(e => {
        this.filterClasses.push({
          label: e.className,
          value: e.classId
        });
      });
    } else{
      this.classService.academicClassesBasedOnSchoolBoard(this.academicSessionId, schoolBoard.value).subscribe(response => {
        this.studentApplciation.controls.admissionForClassId.setValue(null);
        if (response.listViews && response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterClasses.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }, error => {
        this.errorResponse(error);
      });
    }
  }
  // End

  getSiblingSections(): void {
    this.finalSections = [];
    this.finalSections.push({ label: null, value: null });
    this.schoolAcademicSessionService.sections().subscribe(response => {
      if (response.listViews != null && response.listViews.length) {
        response.listViews.forEach(element => {
          this.finalSections.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

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

  validApplicationDate(): void {
    if (this.studentDetails.controls.dateOfBirth.value != null) {
    }
  }

  onError(obj, label, form): void {
    if (!obj && this[form].value[label]) {
      this[form].get(label).setErrors({ 'invalid_mobile': true });
    }
  }

  // gender List
  genderTypeList(): void {
    this.typeService.typeByCodeBasedOnCategory().subscribe(response => {
      this.genders = response;
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

  getApplicationCategory(): void {
    this.studentApplicationSevice.applicationCategoryDetails().subscribe(response => {
      this.applicationCategories = response.listViews;
    });
  }

  getLanguage(): void {
    this.langaugeService.getAllLanguages().subscribe(response => {
      this.languages = response.languageViewModel;
    });
  }

  getSourceOfRegistration(): void {
    this.studentApplicationSevice.sourceOfRegistrationDetails().subscribe(response => {
      this.sourceOfRegistrations = response.sourceOfRegistration;
    });
  }

  onCountryChangeMobile(e, label, form): void {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode[label][form] = '+' + e.dialCode;
    this[form].controls[label].setValue('');
  }

  createItem(): FormGroup {
    return this._formBuilder.group({
      siblingAdmissionNumber: [null, [Validators.maxLength(45)]],
      classId: [null],
      sectionId: [null],
      firstName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      verified: [false],
      unableToVerify: [false]
    });
  }

  createSibling(count: any): void {
    this.siblingCountForm.controls['items'].reset();
    this.setSiblingVerifiy();
    this.resetSiblingStepper();
    if (this.siblingCount && this.siblingCount >= 1 && this.siblingCount < 5 && !this.siblingCountForm.controls['items'].value.length) {
      this.siblingCountForm.controls['siblingsInSchool'].disable();
      (this.siblingCountForm.controls['items'] as FormArray).push(this.createItem());
    }
  }

  clearCount(): void {
    const dialogRef = this.dialogMethod(AppSettings.CLEAR_SIBLING_DETAILS, true, AppSettings.NO, AppSettings.YES);
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.siblingCountForm.controls['siblingsInSchool'].enable();
        this.siblingCountForm.controls['items'].reset();
        this.siblingCountForm.setControl('items', this._formBuilder.array([]));
        this.setSiblingVerifiy();
        this.resetSiblingStepper();
        this.siblingCount = null;
        this.isSiblingVerified = false;
        this.cd.detectChanges();
      }
    });
  }

  resetSiblingStepper(): void {
    if (this.stepper.selected) {
      this.stepper.selected.interacted = false;
    }
  }

  addSibling(i: any): void {
    if (this.stepper.selected.interacted) {
      this.resetSiblingStepper();
    }
    (this.siblingCountForm.controls['items'] as FormArray).push(this.createItem());
  }

  resetForm(index: any): void {
    if (index) {
      (<FormArray>this.siblingCountForm.controls['items']).removeAt(index);
    } else {
      this.clearCount();
    }
  }

  clearSiblingForm(index: any): void {
    if (this.stepper.selected.interacted) {
      this.resetSiblingStepper();
    }

    ((<FormArray>this.siblingCountForm.controls['items'])['controls'][index]).reset();
    (<any>Object).values((<FormGroup>(<FormArray>this.siblingCountForm.get('items')).controls[index]).controls).forEach((control: FormControl) => {
      control.markAsUntouched();
    });
  }

  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  getNumber(e, label, form): void {
    this.finalMobileNumbers[label][form] = e.replace(this.intialCountryCode[label][form], this.intialCountryCode[label][form] + ' ');
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

  siblingSubmit(form: any, i: any): void {

    (<any>Object).values((<FormGroup>(<FormArray>this.siblingCountForm.get('items')).controls[i]).controls).forEach((control: FormControl) => {
      control.markAsTouched();
    });

    if (this.siblingCountForm.controls['items']['controls'][i].valid) {
      form.currentStudentId = null;
      if (this.isOnlineApplicaton){
        form['schoolId'] = this.schoolId;
        this.siblingInfo = [form];
        this.studentApplicationSevice.onlineSibllingsVerification(this.siblingInfo).
        subscribe(res => this.onSiblingResponse(res, i, false), error => this.onSiblingResponse(error, i));
      } else{
        this.siblingInfo = [form];
        this.studentApplicationSevice.sibllingsVerification(this.siblingInfo).subscribe(res => this.onSiblingResponse(res, i, false), error => this.onSiblingResponse(error, i));
      }
    }
  }
  onSiblingResponse(res, i, isError = true): void{
    if (isError){
      if (!res.isVerify) {
        ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['unableToVerify']).patchValue(true);
        ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['verified']).patchValue(false);
      }
      this.errorResponse(res);
    }else{
      if (res.isVerify) {
        // this.isSiblingVerified = res.isVerify;
        ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['verified']).patchValue(true);
        ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['unableToVerify']).patchValue(false);
      }
    }
  }
  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }
  // onCancelClick
  onCancel(): void {
    this.stepper.reset();
    this.cancel.emit(true);
    this.filterClasses = [];
    this.siblingCountForm.controls['siblingsInSchool'].enable();
    this.siblingCountForm.controls['items'].reset();
    this.siblingCountForm.setControl('items', this._formBuilder.array([]));
    if (this.isOnlineApplicaton){
      setTimeout(() => {
        this.studentApplciation.patchValue({
          admissionForSchooAcademicSessionId: this.academicSessionId
        });
        this.onSelectAcademicSession(this.academicSessionId);
        this.cd.detectChanges();
      }, 2000);
    }else{
      this.academicSessionId = null;
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
  removeItemsFromSiblingForm(data): object {
    const filtered = Object.keys(data)
      .filter(key => !['items'].includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
    return filtered;
  }
  checkAllDetailsEmpty(): boolean {
    return !this.isSiblingVerified && this.isNestedObjectEmpty(this.fatherDetails.value)
      && this.isNestedObjectEmpty(this.motherDetails.value) && this.isNestedObjectEmpty(this.guardianDetails.value);
  }
  setModelData(): void {

    if (this.checkAllDetailsEmpty()) {
      return;
    }
    if (this.isSiblingVerified) {
      this.addressDetails.reset();
      this.contactDetails.reset();
      this.fatherDetails.reset();
      this.motherDetails.reset();
      this.guardianDetails.reset();
    }

    this.applicationInfo = this.studentApplciation.value;
    Object.assign(this.applicationInfo, this.removeItemsFromSiblingForm(this.siblingCountForm.getRawValue()));

    this.applicationInfo['studentDetails'] = {};
    Object.assign(this.applicationInfo['studentDetails'], this.studentDetails.value, this.resetMobileNumbers('contactDetails'), this.addressDetails.value);

    if (this.isNestedObjectEmpty(this.fatherDetails.value) || !this.fatherDetails.valid) {
      this.applicationInfo['fatherDetails'] = null;
    } else {
      Object.assign(this.applicationInfo['fatherDetails'] = {}, this.resetMobileNumbers('fatherDetails'));
    }

    if (this.isNestedObjectEmpty(this.motherDetails.value) || !this.motherDetails.valid) {
      this.applicationInfo['motherDetails'] = null;
    } else {
      Object.assign(this.applicationInfo['motherDetails'] = {}, this.resetMobileNumbers('motherDetails'));
    }

    if (this.isNestedObjectEmpty(this.guardianDetails.value) || !this.guardianDetails.valid) {
      this.applicationInfo['guardianDetails'] = null;
    } else {
      Object.assign(this.applicationInfo['guardianDetails'] = {}, this.resetMobileNumbers('guardianDetails'));
    }

    const that = this;
    const VerifiedSiblings = this.siblingCountForm.controls['items'].value.filter(ele => ele.verified);
    const formatedSiblingData = VerifiedSiblings.map(function (obj): void {
      return that.getFormatedSiblingData(obj);
    });
    this.applicationInfo['studentApplicantSiblings'] = formatedSiblingData;
    if (this.isOnlineApplicaton){
      this.applicationInfo['schoolId'] = this.schoolId;
      this.studentApplicationSevice.studentOnlineApplication(this.applicationInfo)
      .subscribe(res => this.submittedApplication(res), err => this.errorResponse(err));
    } else{
      this.studentApplicationSevice.studentApplication(this.applicationInfo)
      .subscribe((res: any) => this.submittedApplication(res), error => {
        this.errorResponse(error);
      });
    }
  }
  getFormatedSiblingData(obj): any {
    return {
      siblingAdmissionNumber: obj.siblingAdmissionNumber,
      classId: obj.classId,
      sectionId: obj.sectionId,
      firstName: obj.firstName,
      lastName: obj.lastName,
      middleName: obj.middleName,
    };
  }
  submittedApplication(res): void {
    document.getElementById('resetButtonStepper').click();
    this.openSnackBar(res.messages.ResultMessage);
  }
  setModelBasedOnForm(form, insideObject: any = false): void {
    const that = this;
    Object.keys(that[form]['controls']).forEach((key) => {
      switch (key) {
        case 'mobileTel':
        case 'otherTel':
        case 'landTel':
          that.applicationInfo[insideObject][key] = that.checkemptyNumber(that[form].get(key).value, key, form); break;
        default: insideObject ? that.applicationInfo[insideObject][key] = that[form].get(key).value : that.applicationInfo[key] = that[form].get(key).value; break;
      }
    });
  }
  checkemptyNumber(number, key, form): string {
    if (number) {
      return this.finalMobileNumbers[key][form];
    } else {
      return '';
    }
  }
  onSubmit(): void {
    this.setModelData();
  }

  onSelectionChange(event: any): void {
    if (event.selectedIndex === this.STEPPER_INDEXS.contactIndex ||
      event.selectedIndex === this.STEPPER_INDEXS.addressIndex || event.selectedIndex === this.STEPPER_INDEXS.applicationIndex) {
      event.selectedStep.interacted = false;
    } else if (event.selectedIndex === this.STEPPER_INDEXS.fatherIndex) {
      this.setStepperInfo(event, 'fatherDetails');
    } else if (event.selectedIndex === this.STEPPER_INDEXS.motherIndex) {
      this.setStepperInfo(event, 'motherDetails');
    } else if (event.selectedIndex === this.STEPPER_INDEXS.guardianIndex) {
      this.setStepperInfo(event, 'guardianDetails');
    } else if (event.selectedIndex === this.STEPPER_INDEXS.finalIndex) {
      if (this.isNestedObjectEmpty(this.guardianDetails.value, 'genderTypeId')) {
        this.guardianDetails.controls.genderTypeId.setValue(null);
      }
    }
    this.scrollIntoView('input');
  }
  setStepperInfo(event, form): void {
    event.selectedStep.interacted = false;
    (<any>Object).values(this[form].controls).forEach((control: FormControl) => {
      control.markAsUntouched();
    });
  }

  trimTextBoxSpaceArray(i: any, key: any): void {
    this.siblingCountForm.controls['items']['controls'][i]['controls'][key]
      .setValue(this.commonService.trimSpaces(this.siblingCountForm.controls['items']['controls'][i]['controls'][key].value));
  }
  // End
}
