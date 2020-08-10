import { Component, OnInit, ViewChild, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { AppSettings } from 'app/app.constants';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonService } from 'app/service/common.service';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { CommunicationService } from 'app/service/communication/communication-service';
import { AttachmentModel } from '../../model/attachment-model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteTrigger, MatDialog, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { CommunicationFetchView } from 'app/models/academics/communication-fetch-view';
import { Router } from '@angular/router';
import { CommunicationModuleConfig } from 'app/url.config';
import { CommunicationConfigurationModel } from '../../model/communication-configuration-model';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { CommunicationStaff } from '../../model/communication-staff';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import * as _ from 'lodash';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { TimeValidator } from 'app/shared/custom-timepicker/custom-timepicker.validators';
import { type } from 'os';

@Component({
  selector: 'app-communication-configuration',
  templateUrl: './communication-configuration.component.html',
  styleUrls: ['./communication-configuration.component.scss'],
  providers: [SchoolAcademicSessionService, ClassesConfigService, StudentDatabaseService]
})
export class CommunicationConfigurationComponent extends CommonComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  @ViewChild('stepper') stepper;
  @ViewChild('commuForm') commForm;
  @ViewChild('messageContent') msgForm;
  @ViewChild('recForm') receipentForm;
  @ViewChild('schForm') schForm;
  @ViewChild('studentNamee') studentNameAutoInput: any;
  @ViewChild('staffSelect') staffCheck;
  @ViewChild('studentSelect') studentCheck;

  recipients = new FormControl(null, Validators.required);

  flagImageProp = {};
  communicationForm: FormGroup;
  messageForm: FormGroup;
  emailForm: FormGroup;
  recepientsForm: FormGroup;
  scheduleForm: FormGroup;
  commConfModel: CommunicationConfigurationModel;
  HttpStatus: any;
  currentDate: any = this.getDefaultDate();

  staffList?: Array<CommunicationStaff>;
  attachmentInfo: AttachmentModel;
  cols: {}[];
  interactedStepperIndex = 0;

  currentComponentName = 'CommunicationConfigurationComponent';
  communicationTypesDropDown: any[];
  schoolBoardsList: any[];
  receipentList: any = [];
  filterdStudents: any[];
  filterdSearchStudents: any[];
  selectedList: any[] = [];
  studentList: any[] = [];

  sectionNames: any[];
  classNames: any[] = [];
  boards: any[];
  tabSettings: {};
  staffTypes: any;
  boardName: any;
  classId: any;
  boardId: any;
  staffs: any;
  closeAddPanel: boolean;
  communicationSearchViewModel: CommunicationFetchView;
  rows: any;
  totalItems: any;
  modelname: any;
  pageCnt: any;
  custRowsPerPageOptions: any;
  filterRowData: any;
  searchForm: FormGroup;
  isValueIsObject = true;
  classSections: any = [];
  loadData = Promise.resolve(false);
  test: any[];
  statusViewModel: any[];

  logoImgProp: {};
  fileName: string;
  communicationTypeDeliveryOptionsDropDown: any[] = [];
  emailEnable: boolean;
  smsEnable: boolean;
  noticeEnable: boolean;
  formValid = true;
  showCustomCard = true;
  customCardDetails: { title: string, message: string } = { title: 'Communications Search', message: 'Search Communications' };
  isAllStudentsChecked = false;
  isAllStaffChecked = false;

  dateFormat: any;
  searchData: any;
  notificationEnable: boolean;
  totalRowsCount: number;
  boardDisable: boolean;
  onSelectNew = false;
  displayResults: any[] = [];
  isSingleClick = false;
  constructor(public snackBar: MatSnackBar, private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer, private commService: CommunicationService,
    public commonService: CommonService, private gradeSetupService: GradeSetupService
    , private _fb: FormBuilder, public classSectionService: ClassSectionService
    , private typeService: TypeService
    , private router: Router,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    private classService: ClassesConfigService, private studentService: StudentDatabaseService, public dialogRef: MatDialog) {
    super();
    this.intializeView();
    this.intializeModel();
  }

  intializeView(): void {
    this.communicationSearchViewModel = {
      studentIds: [],
      studentNames: [],
      communicationTypeId: [],
      communicationType: '',
      communicationStatus: '',
      schoolBoardId: [],
      classIds: [],
      sectionIds: [],
      statusIds: [],
      sender: [],
      title: '',
      receiver: '',
      entryDateBegin: null,
      entryDateEnd: null,
      approvedBy: '',
      approvedDateBegin: null,
      approvedDateEnd: null,
      status: '',
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {

    this.searchForm = this._fb.group({

      schoolBoardId: new FormControl([]),
      classIds: new FormControl([]),
      sectionIds: new FormControl([]),
      studentName: new FormControl([]),
      communicationTypeId: new FormControl([]),
      statusIds: new FormControl([])
    });

    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.communicationSearchViewModel = modelTableComponent;
      this.boardId = modelTableComponent.schoolBoardId;
      this.searchForm.patchValue(modelTableComponent);
      if (modelTableComponent.statusIds && modelTableComponent.statusIds.length) {
        this.searchForm.patchValue({ statusIds: modelTableComponent.statusIds[0] });
      }
      this.classId = modelTableComponent.classIds;
      this.getClassesList(this.boardId, true);
      this.sections(this.classId, true);
      if (modelTableComponent.studentNames && modelTableComponent.studentIds) {
        this.searchForm.controls.studentName.patchValue({
          studentName: modelTableComponent.studentNames,
          id: modelTableComponent.studentIds
        });
        setTimeout(() => {
          this.studentNameAutoInput.nativeElement.value = modelTableComponent.studentNames;
        });
      }
      this.onSearch(false, true);
    }

    this.dateFormat = this.getSchoolDateFormat();
    this.HttpStatus = require('http-status-codes');
    this.isValueIsObject = true;
    this.cols = [
      { field: 'title', header: 'Title', sort: false },
      { field: 'communicationType', header: 'Communication Type', sort: false },
      { field: 'sender', header: 'Sender', sort: false },
      { field: 'receiver', header: 'Receiver', sort: false },
      { field: 'entryDate', header: 'Entry Date', sort: false },
      { field: 'approvedBy', header: 'Approved By', sort: false },
      { field: 'approvalDate', header: 'Approved Date', sort: false },
      { field: 'communicationStatus', header: 'Status', sort: false },
      { field: 'view', header: 'Actions', sort: false }
    ],

      this.tabSettings = {
        rows: [],
        columns: this.cols,
        tablename: 'Communications Search',
        headerOperations: {
          addingForm: {
            required: true,
            btnName: AppSettings.NEW
          }
        }
      };

    this.communicationForm = this._fb.group({
      title: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      communicationTypeId: new FormControl(null, [Validators.required]),
    });

    this.messageForm = this._fb.group({
      subject: new FormControl(null, [Validators.maxLength(90)]),
      message: new FormControl(null),
      attachment: this._fb.group({
        fileName: null,
        fileValue: null,
      }),
      sms: new FormControl(null, [Validators.maxLength(225)]),
      notificationTitle: new FormControl(null, [Validators.maxLength(225)]),
      notification: new FormControl(null, [Validators.maxLength(225)]),
      noticeBoard: new FormControl(null, [Validators.maxLength(225)])
    });

    this.recepientsForm = this._fb.group({
      boards: new FormControl(''),
      classes: new FormControl(''),
      sections: new FormControl(''),
      studentIds: new FormControl(''),
      staffType: new FormControl(''),
      staffList: new FormControl(null)
    });

    this.scheduleForm = this._fb.group({
      scheduleDate: new FormControl(null, [Validators.required]),
      scheduleTime: new FormControl(null, [TimeValidator.validateTimeRequired])
    });

    this.searchForm.controls['studentName'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.filterdStudents = [];
        this.studentService.studentNamesBaseOnAcademicSession(parseInt(this.getTokenParam('_as'), 10), null, null, null, name).subscribe((res) => {
          this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdStudents = [];
      }
    });

    this.recepientsForm.controls['studentIds'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.filterdSearchStudents = [];
        this.studentService.studentNamesBaseOnAcademicSession(parseInt(this.getTokenParam('_as'), 10), null, null, null, name).subscribe((res) => {
          this.filterdSearchStudents = (res.studentsList.length > 0) ? res.studentsList : [];
          this.cd.detectChanges();
        });
      }
      else {
        this.filterdSearchStudents = [];
      }
    });

    this.getStatus();
    this.communicationTypes();
    this.schoolBoards();
    this.getStaffTypes();
  }

  getStaffTypes(): void {
    this.staffTypes = [];
    this.staffs = [];
    this.recepientsForm.controls['staffList'].patchValue(null);
    this.typeService.getStaffTypes().subscribe(response => {
      this.staffTypes = response.types.map((obj: any) => ({ value: obj, label: obj.name }));
    }, error => {
      this.errorResponse(error);
    });

  }

  getStaffs(data: any): void {
    this.staffs = [];
    this.recepientsForm.controls['staffList'].patchValue('');
    this.commService.getStaff(data.id).subscribe(response => {
      if (response && response.length) {
        this.staffs = response.map((obj: any) => ({ value: obj.id, label: obj.name }));
      }
    }, error => {
      this.errorResponse(error);
    });

  }


  intializeModel(): void {

    this.commConfModel = {
      communicationTypeId: 0,
      title: null,
      email: {
        subject: null,
        message: null,
        attachment: {
          fileName: '',
          fileValue: ''
        }
      },
      sms: null,
      notificationTitle: null,
      notification: null,
      noticeBoard: null,
      isAllStudents: false,
      isAllStaff: false,
      scheduleDate: null,
      scheduleTime: null,
      studentRecepients: {
        boardClassSections: [],
        studentIds: [],
      },
      staffRecepients: {
        staffType: [],
        staffList: []
      }
    };
  }

  communicationTypes(): void {
    this.communicationTypesDropDown = [];
    this.commService.getCommunicationType().subscribe(res => {
      if (res.listViews.length) {
        res.listViews.forEach(element => {
          this.communicationTypesDropDown.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  onCommunicationTypeSelect(commTypeId: any): void {
    this.messageForm.reset();
    this.msgForm.resetForm();
    this.commConfModel.noticeBoard = null;
    this.commConfModel.email.attachment = null;
    this.commConfModel.email.message = null;
    this.commConfModel.email.subject = null;
    this.commConfModel.notification = null;
    this.commConfModel.notificationTitle = null;
    this.commConfModel.sms = null;

    this.communicationTypeDeliveryOptionsDropDown = [];
    this.commService.getCommunicationTypeDeliveryOptions(commTypeId.value.value).subscribe(res => {
      if (res.listViews.length) {
        res.listViews.forEach(element => {
          this.communicationTypeDeliveryOptionsDropDown.push({
            label: element.name,
            value: element.id,
            code: element.code
          });
        });
        this.emailEnable = this.communicationTypeDeliveryOptionsDropDown.some(x => x.code === AppSettings.EMAIL_CODE);
        this.smsEnable = this.communicationTypeDeliveryOptionsDropDown.some(x => x.code === AppSettings.SMS_CODE);
        this.notificationEnable = this.communicationTypeDeliveryOptionsDropDown.some(x => x.code === AppSettings.PNC_CODE);
        this.noticeEnable = this.communicationTypeDeliveryOptionsDropDown.some(x => x.code === AppSettings.NBD_CODE);

        if (!this.emailEnable) {
          this.messageForm.controls.subject.disable();
          this.messageForm.controls.message.disable();
        }
        else {
          this.messageForm.controls.subject.enable();
          this.messageForm.controls.message.enable();
        }
        if (!this.smsEnable) {
          this.messageForm.controls.sms.disable();
        }
        else {
          this.messageForm.controls.sms.enable();
        }
        if (!this.notificationEnable) {
          this.messageForm.controls.notificationTitle.disable();
          this.messageForm.controls.notification.disable();
        }
        else {
          this.messageForm.controls.notificationTitle.enable();
          this.messageForm.controls.notification.enable();
        }
        if (!this.noticeEnable) {
          this.messageForm.controls.noticeBoard.disable();
        }
        else {
          this.messageForm.controls.noticeBoard.enable();
        }
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  getAllFilteredStudents(): void {
    if (this.searchForm === undefined) {
      return;
    }
  }

  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([CommunicationModuleConfig._Communication_Setup + '/' + event.clickedRow.id]);
    }
  }

  // Get SChool Boards
  schoolBoards(): void {

    this.boards = [];
    this.classNames = [];
    this.classService.boardsBasedOnAcademicSession(parseInt(this.getTokenParam('_as'), 10)).subscribe(
      response => {
        if (response.listViews != null) {
          if (response.listViews.length) {
            response.listViews.forEach(element => {
              this.boards.push({
                label: element.name,
                value: element.id
              });
              this.schoolBoardsList = this.boards;
            });

            if (this.searchForm.value.schoolBoardId) {
              this.boardId = this.schoolBoardsList[0].value;
              this.setFormControl('searchForm', 'schoolBoardId', this.schoolBoardsList[0].value);
              this.getClassesList(this.boardId);
            }
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );

  }

  // Get Classes to filter table data
  getClassesList(boardId: any, onManualChange = false): void {
    this.classNames = [];
    if (!this.searchForm.value.schoolBoardId) {
      return;
    }
    if (!onManualChange) {
      this.classId = null;
    }
    this.gradeSetupService.schoolAcademicClasses(boardId).subscribe(
      response => {
        if (response.listViews != null) {
          if (response.listViews.length) {
            response.listViews.forEach(element => {
              this.classNames.push({
                label: element.name,
                value: element.id
              });
            });
          }
        } else {
          this.openSnackBar(AppSettings.SCHOOL_BOARD_HAS_CLASSES, true);
        }
      },
      error => {
        this.errorResponse(error);
      }
    );

  }
  // End

  // on selection of class
  sections(classId: number, onManualChange = false): void {
    this.sectionNames = [];
    if (!this.searchForm.value.schoolBoardId || !this.searchForm.value.classIds) {
      return;
    }
    if (!onManualChange) {
      this.searchForm.controls['sectionIds'].patchValue('');
    }
    if (!classId) {
      return;
    }
    this.gradeSetupService.schoolAcademicClassSections(this.boardId, classId).subscribe(response => {
      if (response.listViews.length) {

        response.listViews.forEach(element => {
          this.sectionNames.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  getStatus(): void {
    this.commService.getStatus(AppSettings.COMMUNICATION_CONFIG).subscribe(res => {
      this.statusResponse(res);
    });

  }
  // biling cycle response
  statusResponse(res: any): void {
    this.statusViewModel = [];
    if (res.commonViewModel.length !== 0) {
      for (let i = 0; i < res.commonViewModel.length; i++) {
        this.statusViewModel.push({ value: res.commonViewModel[i].id, label: res.commonViewModel[i].name });
      }
    }

  }


  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.fileName = '';
      if (this.messageForm.controls.attachment.value !== null) {
        this.messageForm.controls.attachment.value.fileName = null;
        this.messageForm.controls.attachment.value.fileValue = null;
      }
    }
    this.cd.detectChanges();

  }

  imgChanged(event): void {

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

      reader.onload = (_event) => {
        that.messageForm.controls.attachment.value.fileName = file.name;
        that.messageForm.controls.attachment.value.fileValue = ((<string>reader.result).split(',')[1]);
        this.cd.detectChanges();
      };
      that.setFileProperties(image);

    }
  }

  setFileProperties(image): void {
    const data = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width: image.width,
      height: image.height
    };

    this.logoImgProp = {};
    this.logoImgProp = data;
    this.cd.detectChanges();
  }

  openForm(): void {
    this.studentList = [];
    this.isAllStudentsChecked = false;
    this.isAllStaffChecked = false;
    this.closeAddPanel = false;
    this.interactedStepperIndex = 0;
  }
  checkAllStudents(data: any): void {
    if (data.checked && this.displayResults !== null && this.displayResults.length > 0) {
      this.openDialog('select-all-student', data);
    } else {
      this.allStudents(data);
    }
  }

  allStudents(data: any): void {
    this.isAllStudentsChecked = data.checked;
    if (data.checked) {
      this.displayResults = [];
      this.displayResults.push({ label: 'All Students' });
      this.setRecipientsForm();
      this.clearBoardClass();
      this.classSections = [];
      this.commConfModel.studentRecepients.studentIds = [];
      this.commConfModel.studentRecepients.boardClassSections = [];
      this.recepientsForm.controls['studentIds'].disable();
    } else {
      this.recipients.reset();
      this.displayResults = [];
      this.recepientsForm.controls['studentIds'].enable();
    }
    this.commConfModel.isAllStudents = data.checked;
  }

  checkAllStaff(data: any): void {
    if (data.checked && this.selectedList !== null && this.selectedList.length > 0) {
      this.openDialog('select-all-staff', data);
    } else {
      this.allStaff(data);
    }
  }

  allStaff(data: any): void {
    this.isAllStaffChecked = data.checked;
    if (data.checked) {
      this.selectedList = [];
      this.selectedList.push({ label: 'All Staffs' });
      this.setRecipientsForm();
      this.commConfModel.staffRecepients.staffList = [];
      this.commConfModel.staffRecepients.staffType = [];
    } else {
      this.recipients.reset();
      this.selectedList = [];
    }
    this.clearStaff();
    this.commConfModel.isAllStaff = data.checked;

  }

  onBoardSelect(data: any): void {
    this.classNames = [];
    this.sectionNames = [];
    this.searchForm.controls['classIds'].reset();
    this.searchForm.controls['sectionIds'].reset();
    if (data.value === undefined) {
      return;
    }
    this.boardId = data.value;
    this.boardName = data.value.label;
    this.classId = null;
    this.getClassesList(this.boardId);
    this.searchForm.patchValue({
      classIds: null,
      sectionIds: null,
    });
  }

  onStaffTypeSelect(data: any): void {
    this.getStaffs(data.value.value);
  }

  onSectionButtonSelect(): void {
    this.ckeckDuplicateRecipients();
    this.setRecipientsForm();
    this.setStudentPostView();
  }
  setStudentPostView(): void {
    this.commConfModel.studentRecepients.boardClassSections = [];
    this.commConfModel.studentRecepients.boardClassSections.push.
      apply(this.commConfModel.studentRecepients.boardClassSections, this.displayResults.filter(c => c.studentId === undefined || c.studentId === null));
  }

  getSelectedStudent(data): void {
    const tempRecipients = [];
    if (this.displayResults.length > 0) {
      tempRecipients.push({ studentId: data.id, studentName: data.studentName, admissionNumber: data.admissionNumber });
      const result2 = _(tempRecipients)
        .differenceBy(this.displayResults, 'admissionNumber')
        .map()
        .value();
      this.displayResults.push.apply(this.displayResults, result2);
      if (result2.length > 0) {
        this.studentsSet();
      }
    } else {
      this.displayResults.push({ studentId: data.id, studentName: data.studentName, admissionNumber: data.admissionNumber });
      this.studentsSet();
    }
    this.recepientsForm.controls.studentIds.reset();
  }

  studentsSet(): void {
    this.commConfModel.studentRecepients.studentIds = this.initializeArray(this.receipentForm.value.studentIds.id,
      this.commConfModel.studentRecepients.studentIds);
    this.setRecipientsForm();
  }

  onStaffButtonSelect(): void {
    const tempRecipients = [];
    if (this.recepientsForm.value.staffList !== undefined &&
      this.recepientsForm.value.staffList !== null &&
      this.checkDataExist('staffTypeId', this.recepientsForm.controls.staffType.value.value.id) === undefined && this.recepientsForm.value.staffList.length > 0) {
      this.recepientsForm.value.staffList.forEach(element => {
        tempRecipients.push({
          staffTypeId: this.recepientsForm.controls.staffType.value.value.id,
          staffTypeName: this.recepientsForm.controls.staffType.value.label,
          staffId: element.value, staffName: element.label
        });
        if (this.selectedList.length > 0) {
          const result3 = _(tempRecipients)
            .differenceBy(this.selectedList, 'staffTypeId', 'staffId')
            .map()
            .value();
          this.selectedList.push.apply(this.selectedList, result3);
        } else {
          this.selectedList.push.apply(this.selectedList, tempRecipients);
        }
        this.prapareStaffView();
      });
      this.clearStaff();
    } else {
      tempRecipients.push({
        staffTypeId: this.recepientsForm.controls.staffType.value.value.id,
        staffTypeName: this.recepientsForm.controls.staffType.value.label,
        staffId: null
      });
      if (this.selectedList.length > 0) {
        const result = _(tempRecipients)
          .differenceBy(this.selectedList, 'staffTypeId')
          .map()
          .value();

        if (result !== null && result.length === 0) {
          this.openDialog('overide-staff-type');
        } else {
          this.addStaffs();
          this.prapareStaffView();
          this.clearStaff();
        }
      } else {
        this.selectedList.push.apply(this.selectedList, tempRecipients);
        this.prapareStaffView();
        this.clearStaff();
      }
    }
  }
  addStaffs(): void {
    this.selectedList.push({
      staffTypeId: this.recepientsForm.controls.staffType.value.value.id,
      staffTypeName: this.recepientsForm.controls.staffType.value.label,
      staffId: null
    });
  }

  prapareStaffView(): void {
    this.setStaffPostView();
    this.setRecipientsForm();
  }

  deleteStudentSelection(index: number): void {
    const c = this.displayResults[index];
    this.commConfModel.studentRecepients.studentIds = this.commConfModel.studentRecepients.studentIds.filter(function (id): any {
      return id !== c.studentId;
    });
    this.displayResults.splice(index, 1);
    if (this.isAllStudentsChecked) {
      this.commConfModel.isAllStudents = false;
      this.isAllStudentsChecked = false;
      this.recepientsForm.controls['studentIds'].enable();
    }
    if (this.displayResults.length === 0 && this.selectedList.length === 0) {
      this.recipients.reset();
    }
    this.setStudentPostView();
  }

  deleteStaffSelection(index: number): void {
    this.selectedList.splice(index, 1);
    if (this.isAllStaffChecked) {
      this.commConfModel.isAllStaff = false;
      this.isAllStaffChecked = false;
    }
    if (this.selectedList.length === 0 && this.displayResults.length === 0) {
      this.recipients.reset();
    }
    this.setStaffPostView();
    this.recepientsForm.reset();
  }
  setStaffPostView(): void {
    const staffTypIds = [];
    this.commConfModel.staffRecepients.staffList = [];
    this.selectedList.forEach(c => {
      if (c.staffId !== null) {
        this.commConfModel.staffRecepients.staffList.push(c);
      }else{
        staffTypIds.push(c.staffTypeId);
      }
    });
    this.commConfModel.staffRecepients.staffType = [];
    this.commConfModel.staffRecepients.staffType.push.apply(this.commConfModel.staffRecepients.staffType, staffTypIds);
  }

  onSelectRecepients(): void {
    if ((this.selectedList && !this.selectedList.length) && (this.displayResults && !this.displayResults.length)) {
      this.openSnackBar('please select atleast one recipient', true);
    }
  }

  initializeArray(input: any, output: any): any {
    if (output === null) {
      output = [];
    }
    if (input != null) {
      output.push(input);
    }
    return output;
  }

  selectedStudent(studentData): void {
    this.intializeView();
    this.searchForm.patchValue({
      schoolBoardId: null,
      classIds: null,
      sectionIds: null,
      communicationTypeId: null,
      statusIds: null
    });
    this.communicationSearchViewModel.studentIds = studentData.id;
    this.communicationSearchViewModel.studentNames = studentData.studentName;
    this.studentList.push(this.communicationSearchViewModel);
    this.onSearch(this.searchForm.value, true);
  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  onSearch(data: any, onStudentSearch = false): void {
    if (!onStudentSearch) {
      this.searchForm.controls.studentName.patchValue(null);
      this.communicationSearchViewModel.studentIds = [];
      this.communicationSearchViewModel.studentNames = [];
    }
    this.updateFilterViewModel();
    if (data) {
      this.communicationSearchViewModel.pageNumber = 1;
    }
    this.invoiceFilter();
  }

  // onSearch(data: any): void {
  tableData(data: CommunicationFetchView): void {
    this.communicationSearchViewModel = data;
    this.updateFilterViewModel();
    this.invoiceFilter();
  }


  invoiceFilter(): void {
    if (this.searchForm === undefined) {
      return;
    }
    this.setModelDataTableComponent(this.currentComponentName, this.communicationSearchViewModel);
    this.commService.communicationDetailsList(
      this.communicationSearchViewModel.studentIds,
      this.communicationSearchViewModel.studentNames, this.communicationSearchViewModel.communicationTypeId, this.communicationSearchViewModel.communicationType,
      this.communicationSearchViewModel.schoolBoardId,
      this.communicationSearchViewModel.classIds,
      this.communicationSearchViewModel.sectionIds,
      this.communicationSearchViewModel.statusIds,
      this.communicationSearchViewModel.communicationStatus,
      this.communicationSearchViewModel.sender,
      this.communicationSearchViewModel.receiver,
      this.communicationSearchViewModel.title,
      this.communicationSearchViewModel.entryDateBegin,
      this.communicationSearchViewModel.entryDateEnd,
      this.communicationSearchViewModel.approvedBy,
      this.communicationSearchViewModel.approvedDateBegin, this.communicationSearchViewModel.approvedDateEnd,
      this.communicationSearchViewModel.sortOrder,
      this.communicationSearchViewModel.sortBy,
      this.communicationSearchViewModel.pageNumber, this.communicationSearchViewModel.pageSize).subscribe((res: any) => this.response(res), error => {
        this.errorResponse(error);
      });
  }

  updateFilterViewModel(): void {
    const data = this.searchForm.value;
    this.communicationSearchViewModel.statusIds = [data.statusIds];
    this.communicationSearchViewModel.schoolBoardId = data.schoolBoardId;
    this.communicationSearchViewModel.communicationTypeId = data.communicationTypeId;
    if (data.studentName && data.studentName.id) {
      this.communicationSearchViewModel.studentIds = data.studentName.id;
      this.communicationSearchViewModel.studentNames = data.studentName.studentName;
    } else {
      this.communicationSearchViewModel.studentIds = data.studentName;
      this.communicationSearchViewModel.studentNames = data.studentName;
    }
    this.communicationSearchViewModel.classIds = data.classIds;
    this.communicationSearchViewModel.sectionIds = data.sectionIds;
  }


  onClear(): void {
    this.searchForm.reset();
    this.filterdStudents = [];
    this.classNames = [];
    this.sectionNames = [];
    this.searchForm.controls['studentName'].patchValue(null);
    this.communicationSearchViewModel.schoolBoardId = null;
    this.communicationSearchViewModel.classIds = null;
    this.communicationSearchViewModel.sectionIds = null;
    this.communicationSearchViewModel.communicationTypeId = null;
    this.communicationSearchViewModel.statusIds = null;
    this.communicationSearchViewModel.studentIds = [];
    this.communicationSearchViewModel.studentNames = [];
    this.showCustomCard = true;
    this.setModelDataTableComponent(this.currentComponentName, null);
  }


  response(data: any): void {
    this.showCustomCard = false;
    if (localStorage.getItem(this.currentComponentName)) {
      this.modelname = JSON.parse(localStorage.getItem(this.currentComponentName));
    }
    if (!data.resultList) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    }
    else if (data.resultList) {
      this.rows = data.resultList.list;
      this.totalRowsCount = data.resultList.totalItems;
      this.pageCnt = data.resultList.totalPages;
      this.filterRowData = [];
      this.filterRowData = this.rows;

      const x = [];
      this.filterRowData.forEach(elnt => {
        if (x.length === 0) {
          x.push(elnt);
        }
        else {
          this.filterRowData.forEach((element: any) => {
            const foundIndex = x.findIndex((value: any) => {
              if (value.id === element.id) {
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
      for (let index = 0; index < this.filterRowData.length; index++) {
        for (let j = 0; j < this.rows.length; j++) {
          if (this.filterRowData[index].id === this.rows[j].id) {
            this.rows[j].operations = [
              {
                name: AppSettings.VIEW_OPERATION,
                icon: AppSettings.VIEW_ICON,
                operationName: AppSettings.VIEW
              }];
            break;
          }
        }
      }

      this.rows.forEach(element => {
        element.entryDate = (element.entryDate == null) ? null : this.commonService.customDateFormat(element.entryDate, this.dateFormat).date;
        element.approvalDate = (element.approvalDate == null) ? null : this.commonService.customDateFormat(element.approvalDate, this.dateFormat).date;
      });

      this.communicationSearchViewModel.pageNumber = data.resultList.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      tablename: 'Communications Search',
      model: this.communicationSearchViewModel,
      rows: this.rows,
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalRowsCount,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      rowGroupingColumns: ['title', 'communicationType', 'sender', 'approvedBy', 'approvalDate', 'communicationStatus', 'entryDate']
    };
    this.scrollIntoViewById('com-dt');
  }

  onSubmitForm(): void {
    this.commConfModel.communicationTypeId = this.communicationForm.value.communicationTypeId.value;
    this.commConfModel.title = this.communicationForm.value.title;
    this.prepareModel(this.commConfModel, this.scheduleForm.value);
    const formatedMsgContent = {};
    Object.assign(formatedMsgContent, this.messageForm.value);
    if (formatedMsgContent['message']) {
      formatedMsgContent['message'] = JSON.stringify(formatedMsgContent['message']).slice(1, -1);
    }
    this.prepareModel(this.commConfModel, formatedMsgContent);
    this.prepareModel(this.commConfModel.email, formatedMsgContent);
    if (!this.isSingleClick){
      this.isSingleClick = true;
      this.commService.communicationConfiguration(this.commConfModel).subscribe(res => this.result(res), error => {
        this.errorResponse(error);
      });
      setTimeout(() => {
      this.isSingleClick = false;
      }, 2000);
    }
   
  }

  result(response: any): void {
    if (response.statusCode === this.HttpStatus.OK) {
      this.closeAddPanel = true;
      this.displayResults = [];
      this.selectedList = [];
      this.intializeModel();
      this.invoiceFilter();
      this.resetForms();
      this.interactedStepperIndex = 0;
      this.onSelectNew = false;
      this.commonService.setOverlay(AppSettings.HIDE);
    }
    else {
      this.closeAddPanel = false;
    }
    document.getElementById('resetButtonStepper').click();
    this.openSnackBar(response.messages.ResultMessage);
  }
  showDate(data: any): any {
    return data != null ? this.commonService.customDateFormat(data.toString(), this.getSchoolDateFormat()).date : null;
  }

  // onCancelClick
  onCancel(): void {
    this.onSelectNew = false;
    this.commonService.setOverlay(AppSettings.HIDE);
    this.closeAddPanel = true;
    this.selectedList = [];
    this.displayResults = [];
    this.receipentList = [];
    this.resetForms();
    this.stepper.reset();
    this.clearImages(true);
  }

  resetForms(): void {
    this.commForm.resetForm();
    this.msgForm.resetForm();
    this.receipentForm.resetForm();
    this.schForm.resetForm();
    this.scheduleForm.reset();
    this.isAllStudentsChecked = false;
    this.isAllStaffChecked = false;
  }
  onAdd(): void {
    this.onSelectNew = true;
    this.commonService.setOverlay(AppSettings.SHOW);
  }
  focusForm(focusForm): void {
    document.getElementById('step-title').focus();
  }

  // get Classes
  getClassSections(): void {
    this.schoolAcademicSessionService.academicClassSections(this.boardId).subscribe(response => {
      this.classResponse(response);
    },
      error => {
        this.errorResponse(error);
      });

  }

  classResponse(data: any): void {
    this.test = [];
    this.classSections = [];
    if (data.classSectionsDataView && data.classSectionsDataView.length > 0) {
      this.test = data.classSectionsDataView;
      this.test.forEach(classdata => {
        const classObj = [];
        classObj['name'] = classdata.className;
        classObj['items'] = [];
        classdata.sectionViewModel.forEach(section => {
          classObj['items'].push({
            label: section.name,
            value: { classId: classdata.classId, id: section.id, className: classdata.className }
          });
        });
        this.classSections.push(classObj);
      });
    }
    this.loadData = Promise.resolve(true);

  }
  // End

  onRecipientsBoardSelect(data: any): void {
    if (data.value === undefined) {
      return;
    }
    this.boardId = data.value.value;
    this.getClassSections();
  }

  onClassSelect(data: any): void {
    this.classId = data.value;
    this.sections(this.classId);
    this.searchForm.patchValue({
      sectionIds: null,
    });
  }

  clearBoardClass(): void {
    this.recepientsForm.controls.classes.reset();
    this.recepientsForm.controls.boards.reset();
    this.recepientsForm.controls.studentIds.reset();
    this.classSections = [];
  }

  clearStaff(): void {
    this.recepientsForm.controls.staffList.reset();
    this.recepientsForm.controls.staffType.reset();
    this.staffs = [];
  }

  ckeckDuplicateRecipients(): any {
    const tempRecipients = [];
    if (this.recepientsForm.controls.classes.value != null && this.recepientsForm.controls.classes.value.length > 0) {
      if (this.checkDataExist('boardId', this.recepientsForm.controls.boards.value.value) === undefined) {
        this.recepientsForm.controls.classes.value.forEach(element => {
          if (this.displayResults.length === 0 || this.checkClassSectionDuplicate(element.value.classId, element.value.id) === undefined) {
            this.displayResults.push({
              boardId: this.recepientsForm.controls.boards.value.value, boardName: this.recepientsForm.controls.boards.value.label,
              className: element.value.className, classId: element.value.classId, sectionId: element.value.id, sectionName: element.label
            });
          }
        });
        this.clearBoardClass();
      } else {
        this.openDialog('overide-board');
      }
    } else {
      tempRecipients.push({
        boardId: this.recepientsForm.controls.boards.value.value, boardName: this.recepientsForm.controls.boards.value.label, classId: null
      });
      const result2 = _(tempRecipients)
        .differenceBy(this.displayResults, 'boardId')
        .map()
        .value();
      if (result2.length === 0) {
        this.openDialog('overide-board');
      } else {
        this.addBoard();
      }
    }
  }

  checkClassSectionDuplicate(classId: any, sectionId: any): any{
    return this.displayResults.find(a => a.classId === classId && a.sectionId === sectionId);
  }

  setRecipientsForm(): void {
    if (!this.recipients.value) {
      this.recipients.patchValue('true');
    }
  }

  checkDataExist(key: any, value: any): any {
    if (key === 'boardId') {
      return this.displayResults.find(a => a.boardId === value && a.classId === null);
    }
    if (key === 'staffTypeId') {
      return this.selectedList.find(a => a.staffTypeId === value && a.staffId === null);
    }
  }

  openDialog(operation: string, value?: number): void {
    const title = AppSettings.CONFIRMATION_REMOVE_RECIPIENTS;
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: {
        text: this.commonService.getTranslation(title),
        action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
      },
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.NO) {
        if (this.studentCheck !== undefined) {
          this.isAllStudentsChecked = false;
          this.studentCheck._checked = this.isAllStudentsChecked;
        }
        if (this.staffCheck !== undefined) {
          this.isAllStaffChecked = false;
          this.staffCheck._checked = this.isAllStudentsChecked;
        }
        this.cd.detectChanges();
        this.dialogRef.closeAll();
      }
      else if (operation === 'select-all-student' && action === AppSettings.YES) {
        this.allStudents(value);
      }
      else if (operation === 'select-all-staff' && action === AppSettings.YES) {
        this.allStaff(value);
      } else if (operation === 'overide-board' && action === AppSettings.YES) {
        this.clearBoardSelectedData(this.recepientsForm.controls.boards.value.value);
        this.onSectionButtonSelect();
      } else if (operation === 'overide-staff-type' && action === AppSettings.YES) {
        this.clearStaffTypeSelectedData(this.recepientsForm.controls.staffType.value.value.id);
        this.onStaffButtonSelect();
      }
    });
  }

  clearStaffTypeSelectedData(value: any): any {
    this.selectedList = this.selectedList.filter(a => a.staffTypeId !== value);
  }
  clearBoardSelectedData(value: any): any {
    this.displayResults = this.displayResults.filter(a => a.boardId !== value);
  }

  addBoard(): void {
    this.displayResults.push({
      boardId: this.recepientsForm.controls.boards.value.value, boardName: this.recepientsForm.controls.boards.value.label, classId: null
    });
    this.clearBoardClass();
  }
}
