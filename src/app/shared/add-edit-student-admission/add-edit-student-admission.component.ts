import { Component, ChangeDetectorRef, ViewChild, Input, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { CommonComponent } from 'app/shared/common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { AcademicSessionService } from 'app/service/academic-service';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CountryService } from 'app/service/academic-service/api/country.service';
import { CommonService } from 'app/service/common.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { LanguageService } from 'app/service/academic-service/api/language.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { StateService } from 'app/service/academic-service/api/state.service';
import { Pattern, AppSettings } from 'app/app.constants';
import { StoreService } from 'app/service/file-management/store.service';
import { AttachmentViewModel } from '../../modules/academics/student-admissions/model/attachment-view-model';
import { StudentGroupService } from 'app/service/student-group/student-group.service';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { StudentApplicationSiblingsView } from '../../modules/academics/student-admissions/model/student-application-siblings-view';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-add-edit-student-admission',
  templateUrl: './add-edit-student-admission.component.html',
  styleUrls: ['./add-edit-student-admission.component.scss'],
  providers: [StudentGroupService, StudentAdmissionService, ClassesConfigService]
})
export class AddEditStudentAdmissionComponent extends CommonComponent implements OnInit, OnChanges {
  @Input() inputStudentDetails: string;
  @Input() comments: string;

  schoolBoardsList: any[] = [];
  filterClasses: any[] = [];
  filterSiblingClasses: any[] = [];
  academicSessions: any[] = [];
  validate = true;
  loaded: boolean;
  studentDetails: FormGroup;
  contactDetails: FormGroup;
  addressDetails: FormGroup;
  fatherDetails: FormGroup;
  motherDetails: FormGroup;
  guardianDetails: FormGroup;
  siblingCountForm: FormGroup;
  closeAddPanel: boolean;
  @ViewChild('siblingForm') siblingForm;
  form: FormGroup;

  siblingCount: number = null;
  countryOptionsSelect: any;
  attachments = {
    contactDetails: {},
    fatherDetails: {},
    motherDetails: {},
    guardianDetails: {}
  };

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
    emgergencyContactTelNumber1: this.getcontactInfo(),
    emgergencyContactTelNumber2: this.getcontactInfo()
  };
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };

  sectionNames: any[];
  stateOptionsSelect: any[];
  casts: any;
  religions: any;
  applicationCategories: any;
  languages: any;
  sourceOfRegistrations: any;
  genders: any;
  isSiblingVerified: boolean;
  @ViewChild('stepper') stepper;
  siblingInfo: StudentApplicationSiblingsView[];
  emergencyContactDetails: FormGroup;

  applicantInfo: any;
  profileImage: any;
  inputStudentData: any;
  attachmentInfo: AttachmentViewModel;
  applicationInfo = {};
  stateId: any;
  today = new Date();
  yesterday = new Date(this.today.setDate(this.today.getDate() - 1));
  currentDate: any = this.yesterday;
  siblingDetailsString = 'Sibling Details have been verified. Same stepperInfo information as that the sibling will be used for this application.';

  image: any = {
    src: null,
    width: null,
    height: null
  };
  finalSections: Array<any> = [];
  studentGroups: any;
  fatherInfo: any;
  applicationRef: any;
  applicationId: any;
  approveForm: FormGroup;
  studentId: any;
  editStudent: boolean;
  button = 'Submit';
  label = 'Add Student';
  interactedStepperIndex = 0;
  academicSessionId: any;
  isSingleClick = false;
  constructor(private gradeSetupService: GradeSetupService, private academicSessionService: AcademicSessionService, private _formBuilder: FormBuilder,
    public commonService: CommonService, private countryService: CountryService,
    private stateService: StateService, private typeService: TypeService,
    private studentApplicationSevice: StudentApplicationService, private langaugeService: LanguageService, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer,
    private dialogRef: MatDialog, private storeService: StoreService,
    private studentGroupService: StudentGroupService, private studentAdmissionService: StudentAdmissionService, private router: Router, private route: ActivatedRoute,
    private schoolAcademicSessionService: SchoolAcademicSessionService, private classService: ClassesConfigService,   public snackBar: MatSnackBar, public location: Location) {
    super();
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
      studentGroupId: 0,
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
      studentApplicationId: '',
      attachmentViewModel: this.attachmentInfo,
      admissionForSchoolAcademicSessionId: ''
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
      siblingsOlderToApplicants: 0,
      siblingsYoungerToApplicants: 0,
      siblingsInSchool: 0,
      studentDetails: this.applicantInfo,
      fatherDetails: this.fatherInfo,
      motherDetails: this.fatherInfo,
      guardianDetails: this.fatherInfo,
      studentApplicantSiblings: [this.siblingInfo],
      processedComments: '',
      studentId: null
    };
  }

  ngOnInit(): void {
    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };
    this.studentDetails = this._formBuilder.group({
      dateOfJoining: [this.getDefaultDate(), Validators.required],
      dateOfAdmission: [this.getDefaultDate(), Validators.required],
      admissionForSchoolBoardId: [null, Validators.required],
      admissionForSchoolAcademicSessionId: [null, Validators.required],
      admissionForClassId: [null, Validators.required],
      studentGroupId: [null],
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, [Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      genderTypeId: [null, Validators.required],
      aadhaarNumber: [null, [Validators.pattern(Pattern.AADHAR_PATTERN)]],
      dateOfBirth: [null, Validators.required],
      nationalityCountryId: [null, Validators.required],
      religionTypeId: [null],
      motherTongueLanguageId: [null],
      casteTypeId: [null],
      attachment: [this.attachmentInfo, Validators.required],
      studentApplicationId: [null],
    });

    this.contactDetails = this._formBuilder.group({
      email1: [null, [Validators.maxLength(90), Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]],
      email2: [null, [Validators.maxLength(90), Validators.pattern(Pattern.EMAIL_PATTERN)]],
      mobileTel: [null, [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
    });

    this.addressDetails = this._formBuilder.group({
      line1: [null, [Validators.required, Validators.maxLength(45)]],
      line2: [null, [Validators.maxLength(45)]],
      line3: [null, [Validators.maxLength(45)]],
      countryId: [null, Validators.required],
      stateId: [null, Validators.required],
      city: [null, [Validators.maxLength(45)]],
      pincode: [null, [Validators.required, Validators.pattern(Pattern.PINCODE_PATTERN)]]
    });

    this.emergencyContactDetails = this._formBuilder.group({
      emergencyContactName1: [null, [Validators.required,  Validators.maxLength(45)]],
      emergencyContactRelation1: [null, [Validators.required,  Validators.maxLength(45)]],
      emgergencyContactTelNumber1: [null, [Validators.required, Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      emergencyContactName2: [null, [Validators.maxLength(45)]],
      emergencyContactRelation2: [null, [Validators.maxLength(45)]],
      emgergencyContactTelNumber2: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      socialCategory: [null]
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
      email2: [null],
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
      email2: [null],
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
      email2: [null],
      mobileTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      landTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      otherTel: [null, [Validators.pattern(Pattern.INTL_MOBILE_PATTERN), Validators.maxLength(45)]],
      attachment: [this.attachmentInfo]
    });
    this.siblingCountForm = this._formBuilder.group({
      items: this._formBuilder.array([]),
      siblingsOlderToApplicants:  [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN),  Validators.max(100)]],
      siblingsYoungerToApplicants:  [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.max(100)]],
      siblingsInSchool: [null, [Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN), Validators.min(1), Validators.max(4)]],
    });
    this.countryService.countryAllCountriesGet().subscribe(data => {
      this.countryOptionsSelect = data.commonViewModel;
      this.countryOptionsSelect.forEach(element => {
        if (element.code ===  AppSettings.IN_CODE){
          this.addressDetails.controls['countryId'].setValue(element.id);
          this.countryChanged(element.id, null);
        }
      });
    });
    this.getAcademicSession();
    this.genderTypeList();
    this.getCast();
    this.getReligion();
    this.getLanguage();
    this.getStudentGroup();
    this.getSiblingClasses();
    this.getSiblingSections();
    this.getSchoolBoardsList();
    this.cd.detectChanges();
    this.loaded = true;
    this.cd.detectChanges();
    this.setSiblingVerifiy();
    if (this.route.params) {
      this.route.params.subscribe((params) => {
        if (params.studentId) {
          this.interactedStepperIndex = 0;
          this.label = 'Update Student';
          this.studentId = params.studentId;
          this.studentAdmissionService.studentDetails(this.studentId)
            .subscribe(res => {
              this.getStudentApplicationDetails(res);
            }, error => {
              this.errorResponse(error);
            });
        }
      });
    }

    this.studentDetails.valueChanges.subscribe(
      (form: any) => {
        if (this.studentDetails.value.attachment && !this.studentDetails.value.attachment.fileValue) {
          this.studentDetails.setErrors({ required: true });
        } else {
          this.studentDetails.setErrors(null);
        }
      });
  }
  getStudentApplicationDetails(data): void {
    this.inputStudentData = data.studentDetailsView;
    this.setStudent();
    this.editStudent = true;
    this.button = 'Update';
    this.approveForm = this._formBuilder.group({
      studentId: [null]
    });
    this.approveForm.controls['studentId'].patchValue(this.studentId);
    if (this.inputStudentData.studentEmergencyContactDetails) {
      this.emergencyContactDetails.patchValue(this.inputStudentData.studentEmergencyContactDetails);
      this.findMobileFileds('emergencyContactDetails');
    }
    this.studentDetails.controls['dateOfAdmission'].patchValue(this.inputStudentData.dateOfAdmission);
    this.studentDetails.controls['dateOfJoining'].patchValue(this.inputStudentData.dateOfJoining);
    this.customSteperLabelChange();
    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.comments && changes.inputStudentDetails.currentValue) {
      this.inputStudentData = changes.inputStudentDetails.currentValue;
      this.studentDetails.controls['studentApplicationId'].setValue(this.inputStudentData.studentApplicationId);
      this.setStudent();
      this.button = 'Approve';
    }
    if (!changes.inputStudentDetails && changes.comments) {
      this.approveForm = this._formBuilder.group({
        processedComments: [changes.comments.currentValue, [Validators.required, Validators.maxLength(180)]]
      });
      // this.approveForm.controls['processedComments'].patchValue(changes.comments.currentValue);
    }
  }

  setStudent(): void {
    
    if (this.inputStudentData.admissionForSchooAcademicSessionId) {

      this.academicSessionId = this.inputStudentData.admissionForSchooAcademicSessionId;
      this.studentDetails.controls['admissionForSchoolAcademicSessionId'].patchValue(this.academicSessionId);
     
      if (this.inputStudentData.admissionForSchoolBoardId) {
        this.studentDetails.controls['admissionForSchoolBoardId'].patchValue(this.inputStudentData.admissionForSchoolBoardId);
        this.onSelectSchoolBoard(this.inputStudentData.admissionForSchoolBoardId, true);

        this.studentDetails.controls['admissionForClassId'].patchValue(this.inputStudentData.admissionForClassId);
      }

    }
    this.studentDetails.patchValue(this.inputStudentData.studentDetails);

    if (this.inputStudentData.studentApplicantSiblings && this.inputStudentData.studentApplicantSiblings.length) {
      this.inputStudentData.items = this.inputStudentData.studentApplicantSiblings;
      this.inputStudentData.studentApplicantSiblings.forEach(element => {
        (this.siblingCountForm.controls['items'] as FormArray).push(this.createItem());
        (this.siblingCountForm.controls['items'] as FormArray).controls[(this.siblingCountForm.controls['items'] as FormArray).value.length - 1].patchValue(element);
      });
    }
    else {
      this.siblingCountForm.patchValue(this.inputStudentData);
    }
    this.siblingCountForm.patchValue({ siblingsOlderToApplicants: this.inputStudentData.siblingsOlderToApplicants ,
      siblingsYoungerToApplicants: this.inputStudentData.siblingsOlderToApplicants,
      siblingsInSchool: this.inputStudentData.siblingsInSchool
    });
    if (this.inputStudentData.siblingsInSchool !== null) {
      this.siblingCountForm.controls['siblingsInSchool'].disable();
    }
    this.contactDetails.patchValue(this.inputStudentData.studentDetails);
    this.findMobileFileds('contactDetails');

    if (this.inputStudentData.studentDetails.addressLine1) {
      this.addressDetails.controls['line1'].patchValue(this.inputStudentData.studentDetails.addressLine1);
      this.addressDetails.controls['line2'].patchValue(this.inputStudentData.studentDetails.addressLine2);
      this.addressDetails.controls['line3'].patchValue(this.inputStudentData.studentDetails.addressLine3);
      this.addressDetails.controls['countryId'].patchValue(this.inputStudentData.studentDetails.addressCountryId);
      this.addressDetails.controls['city'].patchValue(this.inputStudentData.studentDetails.addressCity);
      this.addressDetails.controls['pincode'].patchValue(this.inputStudentData.studentDetails.addressPincode);
      if (this.inputStudentData.studentDetails.addressCountryId) {
        this.countryChanged(this.inputStudentData.studentDetails.addressCountryId, this.inputStudentData.studentDetails.addressStateId);
      }
    }
    if (this.inputStudentData.fatherDetails) {
      this.fatherDetails.patchValue(this.inputStudentData.fatherDetails);
      this.findMobileFileds('fatherDetails');
    }

    if (this.inputStudentData.motherDetails) {
      this.motherDetails.patchValue(this.inputStudentData.motherDetails);
      this.findMobileFileds('motherDetails');
    }
    if (this.inputStudentData.guardianDetails) {
      this.guardianDetails.patchValue(this.inputStudentData.guardianDetails);
      this.findMobileFileds('guardianDetails');
    }
    if (this.inputStudentData.studentEmergencyContactDetails) {
      this.emergencyContactDetails.patchValue(this.inputStudentData.studentEmergencyContactDetails);
      this.findMobileFileds('emergencyContactDetails');
    }

    if (this.inputStudentData.studentDetails && this.inputStudentData.studentDetails.attachment) {
      this.profileImage = this.storeService.getFilePath(this.inputStudentData.studentDetails.attachment.fileName);
      this.image.src = this.profileImage;
      this.setImageProperties(this.image, 'studentDetails');

      this.createFormAttachmentValue(this.inputStudentData.studentDetails.attachment.fileName, 'studentDetails');
    }
    if (this.inputStudentData.fatherDetails && this.inputStudentData.fatherDetails.attachment) {
      this.profileImage = this.storeService.getFilePath(this.inputStudentData.fatherDetails.attachment.fileName);
      this.image.src = this.profileImage;
      this.setImageProperties(this.image, 'fatherDetails');
      this.createFormAttachmentValue(this.inputStudentData.fatherDetails.attachment.fileName, 'fatherDetails');
    }
    if (this.inputStudentData.motherDetails && this.inputStudentData.motherDetails.attachment) {
      this.profileImage = this.storeService.getFilePath(this.inputStudentData.motherDetails.attachment.fileName);
      this.image.src = this.profileImage;
      this.setImageProperties(this.image, 'motherDetails');
      this.createFormAttachmentValue(this.inputStudentData.motherDetails.attachment.fileName, 'motherDetails');
    }
    if (this.inputStudentData.guardianDetails && this.inputStudentData.guardianDetails.attachment) {
      this.profileImage = this.storeService.getFilePath(this.inputStudentData.guardianDetails.attachment.fileName);
      this.image.src = this.profileImage;
      this.setImageProperties(this.image, 'guardianDetails');
      this.createFormAttachmentValue(this.inputStudentData.guardianDetails.attachment.fileName, 'guardianDetails');
    }
    this.stepper._steps._results.forEach((x, i) => {
      if (i){
        x.interacted = true;
      }
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
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
  createFormAttachmentValue(data: any, key: any): void {
    this.storeService.storeFileEncryptByFileNameGet(data)
      .subscribe((value: any) => {
        if (value) {
          this.inputStudentData[key].attachment.fileValue = value.value;
          this[key].controls['attachment'].patchValue(this.inputStudentData[key].attachment);
        }
      });
  }

  getcontactInfo(data = ''): object {
    const contactInfo = {
      contactDetails: data,
      fatherDetails: data,
      motherDetails: data,
      guardianDetails: data,
      emergencyContactDetails: data
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
    this.attachments[form] = data;
    this.cd.detectChanges();
  }
  clearImages(form): void {
    this.attachments[form] = {};
    this[form].controls.attachment.patchValue(this.attachmentInfo);
    this.cd.detectChanges();
  }
  getSchoolBoardsList(): void {
    this.gradeSetupService.schoolBoards().subscribe(res => {
      if (res.listViews && res.listViews.length) {
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
        });
        if (!this.studentDetails.value.admissionForSchoolBoardId){
          this.studentDetails.controls['admissionForSchoolBoardId'].setValue(this.schoolBoardsList[0].value);
        }
        this.onSelectSchoolBoard(this.studentDetails.value.admissionForSchoolBoardId, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }

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
              if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE) {
                if (!this.studentDetails.value.admissionForSchoolAcademicSessionId){
                  this.academicSessionId = element.id;
                  this.studentDetails.controls['admissionForSchoolAcademicSessionId'].setValue(element.id);
                }
                this.academicSessions.push({
                  value: element.id,
                  label: element.displayName,
                  code: element.statusCode
                });
              }else if (element.statusCode === AppSettings.ACADEMICSESSION_NEW){
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
    this.studentDetails.controls.admissionForClassId.setValue(null);
      if (this.studentDetails.controls.admissionForSchoolBoardId.value) {
        this.onSelectSchoolBoard(this.studentDetails.controls.admissionForSchoolBoardId.value);
      }
  }
  // on Selection of school board
  onSelectSchoolBoard(schoolBoard: any, isManual = false): void {
    this.filterClasses = [];
    if (!isManual) {
      this.studentDetails.controls['admissionForClassId'].patchValue(null);
    }
    if (!this.academicSessionId){
      return;
    }
    this.classService.academicClassesBasedOnSchoolBoard(this.academicSessionId, schoolBoard).subscribe(response => {
      this.filterClasses = [];
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

  // Get Sections to filter table data
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

  countryChanged(e, stateValue): void {
    this.addressDetails.controls['stateId'].patchValue('');
    if (e) {
      this.stateOptionsSelect = [];
      this.stateService.stateAllStatesGet(e).subscribe(data => {
        this.stateOptionsSelect = data.states;
        if (stateValue) {
          this.addressDetails.controls['stateId'].patchValue(stateValue);
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

  getLanguage(): void {
    this.langaugeService.getAllLanguages().subscribe(response => {
      this.languages = response.languageViewModel;
    });
  }

  getStudentGroup(): void {
    this.studentGroupService.studentGroupsList().subscribe(res => {
      this.studentGroups = res.studentGroupsDetailsResult;
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
      siblingAdmissionNumber: [null, Validators.maxLength(45)],
      classId: [null, Validators.required],
      sectionId: [null],
      firstName: [null, [Validators.required, Validators.maxLength(45)]],
      lastName: [null, [Validators.required, Validators.maxLength(45)]],
      middleName: [null, Validators.maxLength(45)],
      isVerified: [false],
      unableToVerify: [false]
    });
  }
  createSibling(): void {
    this.siblingCountForm.controls['items'].reset();
    this.resetSiblingStepper();
    this.setSiblingVerifiy();
    if (this.siblingCount && this.siblingCount >= 1 && this.siblingCount < 5) {
      this.siblingCountForm.controls['siblingsInSchool'].disable();
      (<FormArray>this.siblingCountForm.controls['items']).removeAt(0);
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
        this.siblingCountForm.patchValue({
          siblingsInSchool: null
        });
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

  addSibling(): void {
    if (this.stepper.selected.interacted) {
      this.resetSiblingStepper();
    }
    (this.siblingCountForm.controls['items'] as FormArray).push(this.createItem());
  }

  checkAllDetailsEmpty(): boolean {
    return !this.isSiblingVerified && this.isNestedObjectEmpty(this.fatherDetails.value)
      && this.isNestedObjectEmpty(this.motherDetails.value) && this.isNestedObjectEmpty(this.guardianDetails.value);
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
  }

  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  getNumber(e, label, form): void {
    this.finalMobileNumbers[label][form] = e.replace(this.intialCountryCode[label][form], this.intialCountryCode[label][form] + ' ');
  }

  siblingSubmit(form: any, i: any): void {
    (<any>Object).values((<FormGroup>(<FormArray>this.siblingCountForm.get('items')).controls[i]).controls).forEach((control: FormControl) => {
      control.markAsTouched();
    });
    if (this.siblingCountForm.controls['items']['controls'][i].valid) {
      this.siblingInfo = form;
      this.siblingInfo.forEach(x => x.currentStudentId = this.studentId);
      this.siblingInfo = this.siblingInfo.filter(x => x.classId != null);
      this.studentAdmissionService.siblingVerification(this.siblingInfo).subscribe(res => {
        if (res.isVerify) {
          this.isSiblingVerified = this.studentId ? false : res.isVerify;
          ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['isVerified']).patchValue(true);
          ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['unableToVerify']).patchValue(false);
        }
      }, error => {
        if (!error.isVerify) {
          ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['unableToVerify']).patchValue(true);
          ((<FormArray>this.siblingCountForm.controls['items'])['controls'][i]['controls']['isVerified']).patchValue(false);
        }
        this.errorResponse(error);
      });
    }
  }
  checkAllSiblings(): void {
    this.siblingCountForm.get('items')['controls'].forEach(element => {
      this.isSiblingVerified = element.value.isVerified;
    });
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

  onSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex === 4){
      event.selectedStep.interacted = false;
    }else if (event.selectedIndex === 5) {
      event.selectedStep.interacted = false;
      (<any>Object).values(this.fatherDetails.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
      });
    } else if (event.selectedIndex === 6) {
      event.selectedStep.interacted = false;
      (<any>Object).values(this.motherDetails.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
      });
    } else if (event.selectedIndex === 7) {
      event.selectedStep.interacted = false;
      (<any>Object).values(this.guardianDetails.controls).forEach((control: FormControl) => {
        control.markAsUntouched();
      });
    } else if (event.selectedIndex === 8) {
      if (this.isNestedObjectEmpty(this.guardianDetails.value, 'genderTypeId')) {
        this.guardianDetails.controls.genderTypeId.setValue(null);
      }
    }
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
      this.emergencyContactDetails.reset();
    }
    this.applicationInfo = {};
    this.applicationInfo['student'] = {};

    if (!this.studentDetails.value.admissionForSchoolAcademicSessionId) {
      const acs = JSON.parse(localStorage.getItem('_as'));
      this.studentDetails.controls['admissionForSchoolAcademicSessionId'].patchValue(acs.id);
    }

    // use for approve application
    if (this.approveForm && this.approveForm.value.processedComments) {
      this.applicationInfo['processedComments'] = this.approveForm.value.processedComments;
    }
    if (this.approveForm && this.approveForm.value.studentId) {
      this.applicationInfo['studentId'] = this.approveForm.value.studentId;
    }

    Object.assign(this.applicationInfo['student'], this.studentDetails.value, this.resetMobileNumbers('contactDetails'));

    this.applicationInfo['student']['address'] = {};
    if (this.isNestedObjectEmpty(this.addressDetails.value) || !this.addressDetails.valid) {
      this.applicationInfo['student']['address'] = null;
    }
    else {
      Object.assign(this.applicationInfo['student']['address'], this.addressDetails.value);
    }

    if (this.isNestedObjectEmpty(this.emergencyContactDetails.value) || !this.emergencyContactDetails.valid) {
      this.applicationInfo['studentEmergencyContactDetailsView'] = null;
    } else {
      Object.assign(this.applicationInfo['studentEmergencyContactDetailsView'] = {}, this.resetMobileNumbers('emergencyContactDetails'));

      Object.assign(this.applicationInfo['studentEmergencyContactDetailsView'], this.removeItemsFromSiblingForm(this.siblingCountForm.value));

      Object.assign(this.applicationInfo, this.removeItemsFromSiblingForm(this.siblingCountForm.value));
    }
    // Object.assign(this.applicationInfo, this.removeItemsFromSiblingForm(+this.siblingCountForm.value));
    this.applicationInfo['siblingsOlderToApplicants'] = +this.siblingCountForm.controls['siblingsOlderToApplicants'].value;
    this.applicationInfo['siblingsYoungerToApplicants'] = +this.siblingCountForm.controls['siblingsYoungerToApplicants'].value;
    this.applicationInfo['siblingsInSchool'] = this.siblingCountForm.controls['siblingsInSchool'].value;
    if (this.isNestedObjectEmpty(this.fatherDetails.value) || !this.fatherDetails.valid) {
      this.applicationInfo['fatherDetails'] = null;
    } else {
      Object.assign(this.applicationInfo['fatherParent'] = {}, this.resetMobileNumbers('fatherDetails'));
      if (this.isNestedObjectEmpty(this.fatherDetails.value.attachment)) {
        this.applicationInfo['fatherParent']['attachment'] = null;
      }
    }

    if (this.isNestedObjectEmpty(this.motherDetails.value) || !this.motherDetails.valid) {
      this.applicationInfo['parentMotherParent'] = null;
    } else {
      Object.assign(this.applicationInfo['parentMotherParent'] = {}, this.resetMobileNumbers('motherDetails'));
    }

    if (this.isNestedObjectEmpty(this.guardianDetails.value) || !this.guardianDetails.valid) {
      this.applicationInfo['parentGuardianParent'] = null;
    } else {
      Object.assign(this.applicationInfo['parentGuardianParent'] = {}, this.resetMobileNumbers('guardianDetails'));
    }

    const that = this;
    const VerifiedSiblings = this.siblingCountForm.controls['items'].value.filter(ele => ele.isVerified);

    const formatedSiblingData = VerifiedSiblings.map(function (obj): object {
      return that.getFormatedSiblingData(obj);
    });
    this.applicationInfo['studentApplicantSiblings'] = formatedSiblingData;
    if (!this.isSingleClick){
      this.isSingleClick = true;
      if (this.studentDetails.value.studentApplicationId) {
        this.studentAdmissionService.approveStudentApplication(this.applicationInfo)
          .subscribe((res: any) => this.approveApplication(res), error => {
            this.errorResponse(error);
          });
      } else if (this.editStudent) {
        this.studentAdmissionService.updateStudentAdmission(this.applicationInfo)
          .subscribe((res: any) => this.submitAdmission(res), error => {
            this.errorResponse(error);
          });
      }
      else {
        this.studentAdmissionService.createStudentAdmission(this.applicationInfo)
          .subscribe((res: any) => this.submitAdmission(res), error => {
            this.errorResponse(error);
          });
      }
      setTimeout(() => {
      this.isSingleClick = false;
      }, 1000);
    }
  }
  approveApplication(res: any): void {
    this.router.navigate([RouteConfig._Student_Database]);
    this.openSnackBar(res.messages.ResultMessage);
  }

  submitAdmission(res: any): void {
    this.router.navigate([RouteConfig._Student_Database]);
    this.openSnackBar(res.messages.ResultMessage);
  }
  getFormatedSiblingData(obj): object {
    return {
      siblingAdmissionNumber: obj.siblingAdmissionNumber,
      classId: obj.classId,
      sectionId: obj.sectionId,
      firstName: obj.firstName,
      lastName: obj.lastName,
      middleName: obj.middleName,
    };
  }

  onSubmit(): void {
    if (!(this.approveForm && this.approveForm.valid) && this.studentDetails.value.studentApplicationId) {
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

  getSiblingDetailsString(stepper): string {
    return this.siblingDetailsString.replace('stepperInfo', stepper);
  }

  setSiblingVerifiy(): void {
    (<FormArray>this.siblingCountForm.controls['items']).valueChanges.subscribe(form => {
      if (!form.length) {
        return;
      }
      if (form.filter(ele => ele.isVerified).length === form.length) {
        this.siblingCountForm.controls['items'].setErrors(null);
      } else {
        this.isSiblingVerified = false;
        this.siblingCountForm.controls['items'].setErrors({ required: true });
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

  onCancel(): void {
      this.location.back();
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  trimTextBoxSpaceArray(i: any, key: any): void{
    this.siblingCountForm.controls['items']['controls'][i]['controls'][key]
    .setValue(this.commonService.trimSpaces(this.siblingCountForm.controls['items']['controls'][i]['controls'][key].value));
  }

}
