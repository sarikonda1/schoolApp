import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { EventsService } from 'app/service/academic-service/api/events.service';
import { EventView } from '../model/event-view-model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import * as HttpStatus from 'http-status-codes';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'app/service/common.service';
import { EventParticipantFilterView } from '../model/event-participant-filter-view';
import { AttachmentViewModel } from '../../student-admissions/model/attachment-view-model';
import { DomSanitizer } from '@angular/platform-browser';
import { EventDataView } from '../model/event-data-view';
import { StoreService } from 'app/service/file-management/store.service';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { CalenderService } from 'app/service/staff/calender.service';

@Component({
  selector: 'app-add-edit-school-event',
  templateUrl: './add-edit-school-event.component.html',
  styleUrls: ['./add-edit-school-event.component.scss'],
  providers: [GradeSetupService, ClassTimetableService, EventsService, SchoolAcademicSessionService, CalenderService]
})
export class AddEditSchoolEventComponent extends CommonComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('winnerPositionTemplate') positionIdValue: TemplateRef<any>;
  @ViewChild('eventDataForm') eventDataForm;
  @ViewChild('winnerForm') winnerForm;
  currentComponent = 'AddEditSchoolEventComponent';
  displayedColumns: string[] = ['studentName', 'className', 'sectionName', 'admissionNumber', 'position'];
  formUpdateData: EventDataView;
  attachmentInfo: AttachmentViewModel;
  eventParticipantView: any;
  formData: EventView;
  eventParticipantFilterView: EventParticipantFilterView;


  eventForm: FormGroup;
  uploadFiles: FormGroup;
  winnerPositionForm: FormGroup;

  eventTypesList: any = [];
  eventstatusList: any = [];
  selectedSection: any;
  eventId: any;
  eventDetails: any;
  finalistDetails: any;
  participantDetails: any;
  winnersDetails: any;
  finalistTableSettings: any;
  participantTabSetting: any;
  winnerTabSetting: any;
  columns: any;
  flagImageProp: any;
  positionDetails: any = [];
  classSection: any = [];
  selectedClass: any = [];
  classSections: any = [];
  test: any[];
  addEventId: any;
  tableSettings: any;
  studentDetails: any;
  totalItems: any;
  pageCount: any;
  selectedStudentIds: any;
  currentPositionId: any;
  isFinalist: number;
  isWinner: number;
  participantId: any;
  winninPositions: any;
  winnerColumns: any;
  positionWinnerDetails: any;
  positionFinalistDetails: any;
  viewClassSection: any;
  attachmentDetails: any;
  nameImgProp: any;
  operation: any;
  winnerVal = '';
  isUpdateOrView = false;

  doValidate = false;
  disableParticipant = true;
  updateButtonShow: boolean;
  viewDetails: boolean;
  editDetails: boolean;
  isPanel: boolean;
  winnerValidate = true;
  eventTitle: string;
  panelOpenState: boolean;
  fxFlexSize: string;
  eventTypeName = '';
  eventTypeStatus = '';
  loadData = Promise.resolve(false);
  selectedItems = [];
  isValueIsObject = true;
  isCompetation = false;
  hideFromToDate = true;
  eventType: any;
  statusId: any;
  startDate: Date;
  endDate: Date;
  constructor(private gradeSetupService: GradeSetupService, private classTimetableService: ClassTimetableService, private router: Router,
    private route: ActivatedRoute, public dialog: MatDialog, public commonService: CommonService,
    private common: CommonComponent, private eventsService: EventsService, private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private _fb: FormBuilder,
    private storeService: StoreService,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    public snackBar: MatSnackBar,
    public location: Location, private calenderService: CalenderService) {
    super();
  }

  ngOnInit(): void {
    this.isValueIsObject = true;
    this.eventTitle = 'New Event';
    this.getClassSections();
    this.isPanel = true;
    this.editDetails = true;
    this.eventParticipantView = {
      studentId: '',
      eventId: '',
      classId: 0,
      sectionId: 0,
      isFinalist: 0,
      isWinner: 0,
      winningPosition: 0,
    };

    this.eventParticipantFilterView = {
      eventId: '',
      admissionNumber: '',
      studentName: '',
      classIds: [],
      sectionIds: [],
      studentGroupIds: [],
      sortBy: AppSettings.ID,
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    this.selectedClass = [];
    this.positionDetails = [
      { value: 1, label: 'Select as a Participant' },
      { value: 2, label: 'Select as a Finalist' },
      { value: 3, label: 'Select as a Winner' }
    ];
    this.positionFinalistDetails = [
      { value: 2, label: 'Select as a Finalist' },
      { value: 3, label: 'Select as a Winner' }
    ];
    this.positionWinnerDetails = [
      { value: 3, label: 'Select as a Winner' }
    ];
    this.winninPositions = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
    ];

    this.updateButtonShow = false;
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: false },
      { field: 'admissionNumber', header: 'Admission Number', sort: false },
      { field: 'groupName', header: 'Student Group', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionName', header: 'Section', sort: false }
    ];
    this.winnerColumns = [
      { field: 'studentName', header: 'Student Name', sort: false },
      { field: 'admissionNumber', header: 'Admission Number', sort: false },
      { field: 'groupName', header: 'Student Group', sort: false },
      { field: 'className', header: 'Class', sort: false },
      { field: 'sectionName', header: 'Section', sort: false },
      { field: 'winningPosition', header: 'Winning Position', sort: false }

    ];
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.eventParticipantFilterView = modelTableComponent;
    }
    this.tabsettingsIntialization();


    this.initializeForm();
    this.eventstatusList = [];
    this.eventTypesList = [];
    this.selectedSection = [];

    this.eventTypes();
    this.eventStatus();
    this.uploadFiles = this._fb.group({
      studentFileNameWithExtension: [''],
      studentFileValue: [''],
    });

    this.formData = {
      eventid: null,
      announcedDate: new Date(),
      fromDate: new Date(),
      toDate: new Date(),
      eventTypeId: 0,
      statusId: 0,
      eventDescription: '',
      eventClassSections: [],
      attachment: this.attachmentInfo
    };
    this.winnerPositionForm.reset();
    this.routeParamsData();
    this.academicPrevAndAfterDates();
  }

  // get Academic Start Date and End Date with prev and after 3 months
  academicPrevAndAfterDates(): void {
    this.calenderService.getAllSchoolCalender().subscribe(res => {
      this.startDate = res.academicDatesView.startDate;
      this.endDate = res.academicDatesView.endDate;
    });
  }

  tabsettingsIntialization(): void {
    this.tableSettings = {
      model: this.eventParticipantFilterView,
      rows: [],
      columns: this.columns,
      componentName: this.currentComponent,
      padding: true
    };

    this.finalistTableSettings = {
      model: this.eventForm,
      rows: [],
      columns: this.columns,
      componentName: this.currentComponent,
      padding: true
    };
    this.participantTabSetting = {
      model: this.eventForm,
      rows: [],
      columns: this.columns,
      componentName: this.currentComponent,
      padding: true
    };
    this.winnerTabSetting = {
      model: this.eventForm,
      rows: [],
      columns: this.winnerColumns,
      componentName: this.currentComponent,
      padding: true
    };
  }
  initializeForm(): void {
    this.eventForm = new FormGroup({
      eventId: new FormControl(''),
      announcedDate: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      isPostToCalender: new FormControl(AppSettings.NO),
      eventTypeId: new FormControl('', [Validators.required]),
      statusId: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required, Validators.maxLength(180)]),
      eventClassSections: new FormControl(''),
      attachment: new FormControl(null),
      isPostToCalendar: new FormControl(false, [Validators.required])
    });

    this.winnerPositionForm = new FormGroup({
      positionId: new FormControl('', [Validators.required]),
      positionFinalistId: new FormControl('', [Validators.required]),
      positionWinnerId: new FormControl('', [Validators.required]),
    });
  }

  routeParamsData(): void {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.addEventId = param.id;
        this.operation = param.operation;
      }
    });
    if (this.addEventId) {
      if (this.operation === AppSettings.EDIT || this.operation === undefined) {
        this.eventTitle = 'Update Event';
        this.isPanel = true;
        this.viewDetails = false;
        this.editDetails = true;
        this.participantStudentDetails(this.eventParticipantFilterView);
        this.getEventDetails();
      }
      else {
        this.eventTitle = 'Event Details';
        this.isPanel = false;
        this.viewDetails = true;
        this.editDetails = false;
        this.getEventDetails();
      }
    }
  }

  getEventDetails(): void {
    this.eventsService.getByEvents(this.addEventId).subscribe(res => {
      if (res.eventData != null) {
        this.updateButtonShow = true;
        this.disableParticipant = false;
        this.eventDetails = res.eventData[0];
        this.eventForm.patchValue(this.eventDetails);
        this.onEventTypeSelect(this.eventForm.value.eventTypeId);
        this.eventForm.controls['isPostToCalender'].setValue(this.eventDetails.isPostToCalender === 1 ? AppSettings.YES : AppSettings.NO);
        this.finalistDetails = this.eventDetails.finalistDetails;
        this.participantDetails = this.eventDetails.participantDetails;
        this.winnersDetails = this.eventDetails.winnersDetails;
        this.classSection = this.eventDetails.eventClassSections;
        this.viewClassSection = this.eventDetails.eventClassSections;
        this.assignEventTypesStatus();

        if (this.viewClassSection.length) {
          this.fxFlexSize = '60';
        }
        else {
          this.fxFlexSize = '100';
        }
        this.attachmentDetails = this.eventDetails.attachment.fileName;
        if (this.eventDetails.attachment && this.eventDetails.attachment.fileName) {
          this.nameImgProp = this.storeService.getFilePath(this.attachmentDetails);
          this.isUpdateOrView = true;
          const that = this;
          that.flagImageProp = {
            src: that.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(this.attachmentDetails))
          };
          this.storeService.storeFileEncryptByFileNameGet(this.attachmentDetails)
            .subscribe(data => {
              if (data) {
                that.eventForm.controls.attachment.patchValue({ fileName: data.fileNameWithExtension, fileValue: data.value });
              }
            });
          that.cd.detectChanges();
        }
        else { this.isUpdateOrView = false; }
        const selectedSections = this.eventForm.controls['eventClassSections'].value || [];

        if (this.operation === AppSettings.VIEW_EVENTS) {
          this.finalistTableSettings = this.tabSettings(this.finalistDetails, this.columns, false, false, true);
          this.winnerTabSetting = this.tabSettings(this.winnersDetails, this.winnerColumns, false, false, true);
          this.participantTabSetting = this.tabSettings(this.participantDetails, this.columns, false, false, true);
        }
        else {
          this.selectedItems = [];
          this.classSection.forEach(e => {
            this.selectedItems.push({ label: e.sectionName, value: { classId: e.classId, sectionId: e.sectionId }, isValueObject: true, });
          });
          this.onSelectSection(this.selectedItems);
          this.finalistTableSettings = this.tabSettings(this.finalistDetails, this.columns, true, true, true);
          this.winnerTabSetting = this.tabSettings(this.winnersDetails, this.winnerColumns, true, true, true);
          this.participantTabSetting = this.tabSettings(this.participantDetails, this.columns, true, true, true);
        }
        // this.onEventTypeSelect(this.eventForm.value.eventTypeId);
      }
    },
      error => {
        this.errorResponse(error);
      });
  }
  tabSettings(rows, columns, isSelectRowRequired, visibleSelectAll, padding): any {
    return {
      model: this.eventForm,
      rows: rows,
      columns: columns,
      componentName: this.currentComponent,
      isPaginationRequired: false,
      isSelectRowRequired: isSelectRowRequired,
      visibleSelectAll: visibleSelectAll,
      padding: padding
    };
  }

  assignEventTypesStatus(): void {
    if (this.eventDetails !== undefined &&
      this.eventDetails.eventTypeId != null && this.eventTypesList.filter(obj => obj.value === this.eventDetails.eventTypeId)[0] !== undefined) {
      this.eventTypeName = this.eventTypesList.filter(obj => obj.value === this.eventDetails.eventTypeId)[0].label;
    }
    if (this.eventDetails !== undefined && this.eventDetails.statusId != null && this.eventstatusList.filter(obj => obj.value === this.eventDetails.statusId)[0] !== undefined) {
      this.eventTypeStatus = this.eventstatusList.filter(obj => obj.value === this.eventDetails.statusId)[0].label;
    }
  }

  // get Classes
  getClassSections(): void {
    this.schoolAcademicSessionService.academicClassSections().subscribe(response => {
      this.classResponse(response);
    },
      error => {
        this.errorResponse(error);
      });

  }

  classResponse(data: any): void {
    this.test = data.classSectionsDataView;
    this.test.forEach(classdata => {
      const classObj = [];
      classObj['name'] = classdata.className;
      classObj['items'] = [];
      classdata.sectionViewModel.forEach(section => {
        classObj['items'].push({
          label: section.name,
          value: { classId: classdata.classId, sectionId: section.id }
        });
      });
      this.classSections.push(classObj);
    });
    this.loadData = Promise.resolve(true);

  }
  // End

  eventTypes(): void {
    this.eventsService.getEventsTypes().subscribe(response => {
      if (response.commonViewModel != null) {
        if (response.commonViewModel.length) {
          response.commonViewModel.forEach(element => {
            this.eventTypesList.push({
              label: element.name,
              value: element.id,
              isCompitation: element.code
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  eventStatus(): void {
    this.eventsService.getEventStatus().subscribe(response => {
      if (response.commonViewModel != null) {
        if (response.commonViewModel.length) {
          response.commonViewModel.forEach(element => {
            this.eventstatusList.push({
              label: element.name,
              value: element.id,
              code: element.code
            });
          });
          this.assignEventTypesStatus();
        }
      }
    }, error => {
      this.errorResponse(error);
    });

  }


  return(): void {
    this.location.back();
    // this.router.navigate([RouteConfig._Schol_Events]);
    this.eventForm.reset();
    if (this.eventDataForm !== undefined) {
      this.eventDataForm.resetForm();
    }
  }

  onSelectSection(data: any): void {
    this.selectedSection = [];
    if (data !== undefined) {
      data.forEach(element => {
        this.selectedSection.push(element.value);
      });
    }

  }
  onSubmit(eventForm: any, updateButton: any): void {
    this.doValidate = true;
    this.statusId = this.eventForm.controls.statusId.value;
    this.eventType = this.eventTypesList.find(x => x.value === this.eventForm.controls.eventTypeId.value);
    if (this.eventType.label === AppSettings.NEWS || this.eventType.isCompitation === '0') {
      this.eventForm.controls['fromDate'].clearValidators();
      this.eventForm.controls['toDate'].clearValidators();
      this.eventForm.updateValueAndValidity();
      this.eventForm.controls['fromDate'].setValue(this.eventForm.controls['announcedDate'].value);
      this.eventForm.controls['toDate'].setValue(this.eventForm.controls['announcedDate'].value);
      this.eventForm.controls['statusId'].setValue(this.eventstatusList.find(x => x.code === AppSettings.EVENT_CMP_CODE).value);
      this.statusId = this.eventstatusList.find(x => x.code === AppSettings.EVENT_CMP_CODE).value;
    }
    if (this.eventForm.invalid) {
      return;
    }
    else {
      this.eventForm.controls['eventClassSections'].patchValue(this.selectedSection);
      this.formData = this.eventForm.value;
      this.formData.isPostToCalender = this.eventForm.value.isPostToCalender === AppSettings.YES ? 1 : 0;
      this.formData.announcedDate = this.getFormattedDateByAPIPattern(this.formData.announcedDate);
      this.formData.fromDate = this.getFormattedDateByAPIPattern(this.formData.fromDate);
      this.formData.toDate = this.getFormattedDateByAPIPattern(this.formData.toDate);
      this.formData.attachment = (this.formData.attachment == null || this.formData.attachment.fileValue != null) ? this.formData.attachment : null;
      if (this.eventForm.value.eventId === '') {
        this.eventsService.createEvents(this.formData).subscribe(eventRes => {
          this.eventResponse(eventRes);
        },
          error => {
            this.errorResponse(error);
          });
      }
      else {
        this.eventsService.updateEvents(this.formData).subscribe(eventRes => {
          this.eventResponse(eventRes);
        },
          error => {
            this.errorResponse(error);
          });
      }
    }
  }

  // add response
  eventResponse(data: any): void {
    this.addEventId = data.eventId;
    if (data.statusCode === HttpStatus.OK) {
      this.statusChanges(this.statusId, this.eventType);
      this.updateButtonShow = true;
      this.dialog.closeAll();
      this.getEventDetails();
      this.participantStudentDetails(this.eventParticipantFilterView);
      this.onEventTypeSelect(this.eventType.value);
    }
    this.openSnackBar(data.messages.ResultMessage);
  }

  participantStudentDetails(eventParticipantFilterView: EventParticipantFilterView): void {
    this.eventParticipantFilterView = eventParticipantFilterView;
    this.eventParticipantFilterView.eventId = this.addEventId;
    this.eventsService.getStudentsDetails(
      this.eventParticipantFilterView.eventId,
      this.eventParticipantFilterView.admissionNumber,
      this.eventParticipantFilterView.studentName,
      this.eventParticipantFilterView.classIds,
      this.eventParticipantFilterView.sectionIds,
      this.eventParticipantFilterView.studentGroupIds,
      this.eventParticipantFilterView.sortOrder,
      this.eventParticipantFilterView.sortBy, this.eventParticipantFilterView.pageNumber, this.eventParticipantFilterView.pageSize).subscribe(res => {
        if (res.studentDetails != null) {
          this.studentDetails = res.studentDetails.list;
          this.totalItems = res.studentDetails.totalItems;
          this.pageCount = res.studentDetails.totalPages;

        }
        else {
          this.studentDetails = [];
          this.totalItems = 0;
          this.pageCount = 0;
        }
        this.tableSettings = {
          model: this.eventParticipantFilterView,
          rows: this.studentDetails,
          columns: this.columns,
          componentName: this.currentComponent,
          isPaginationRequired: true,
          isSelectRowRequired: true,
          isMultiDeleteRequired: false,
          visibleSelectAll: true,
          totalRowsCount: this.totalItems,
          pageCnt: this.pageCount,
          filtersList: res.filters,
          padding: true
        };
      },
        error => {
          this.errorResponse(error);
        });
  }

  imgChanged(files, logo = false): void {
    if (this.checkFileSize(files[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
      return;
    }
    this.isUpdateOrView = false;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    reader.onload = (_event) => {
      that.eventForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: (<string>reader.result).split(',')[1] });
      that.cd.detectChanges();
    };
  }

  clearImages(logo = false): void {
    this.flagImageProp = {};
    this.eventForm.controls.attachment.patchValue(null);
    this.cd.detectChanges();
  }

  selectedRows(data: any): void {
    this.winnerVal = '';
    this.selectedStudentIds = data;
    this.winnerPositionForm.reset();
  }

  onClickArray(winnerPositionForm, val): any {
    if (val === 2) {
      this.isFinalist = 1;
      this.selectedStudentIds.map((x: any) => {
        x.isFinalist = 1;
      });
    }
    else if (val === 3) {
      this.isWinner = 1;
      this.isFinalist = 1;
      this.selectedStudentIds.map((x: any) => {
        x.isFinalist = 1,
          x.isWinner = 1;
      });
    }
    else {
      this.isWinner = null;
      this.isFinalist = null;
    }
    this.eventParticipantView = this.selectedStudentIds;
    this.eventParticipantView.map(e => e.eventId = this.addEventId);

    if (val === 3) {
      this.selectedStudentIds.map(x => x.winningPosition = null);
      const dialogValue = this.dialog.open(CustomDialogComponent, {
        data: { template: this.positionIdValue }
      });
      dialogValue.afterClosed().subscribe(action => {
        this.cancelClick();
      });
      return false;
    }
    this.createParticipant(this.eventParticipantView);
  }
  createParticipant(eventParticipantView: any): void {
    this.eventParticipantView = eventParticipantView;
    this.eventsService.createParticipants(this.eventParticipantView).subscribe(particantRes => {
      if (particantRes.statusCode === HttpStatus.OK) {
        this.winnerPositionForm.reset();
        if (this.winnerForm !== undefined) {
          this.winnerForm.resetForm();
        }
        this.participantStudentDetails(this.eventParticipantFilterView);
        this.participantsActions();
      }
      this.cd.detectChanges();
      this.openSnackBar(particantRes.messages.ResultMessage);
    },
      error => {
        this.errorResponse(error);
      });
  }
  deleteAll(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedparticipants'), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    // Conformation for Delete ClassPeriodType
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.participantId = [];
        this.selectedStudentIds.forEach(x => {
          if (x) {
            this.participantId.push(x.id);
          }
        });
        this.eventsService.deleteParticipants(this.participantId).subscribe(res => {
          if (res.statusCode === HttpStatus.OK) {
            this.participantsActions();
            this.participantStudentDetails(this.eventParticipantFilterView);
          }

          this.openSnackBar(this.participantId.length === 1 ? AppSettings.RECORD_DELETED : res.messages.ResultMessage);
        },
          error => {
            this.errorResponse(error);
          });
      }
    });
  }
  participantsActions(): void {
    this.eventsService.getByEvents(this.addEventId).subscribe(data => {
      if (data.eventData != null) {
        this.onEventTypeSelect(this.eventForm.value.eventTypeId);
        this.finalistDetails = data.eventData[0].finalistDetails;
        this.participantDetails = data.eventData[0].participantDetails;
        this.winnersDetails = data.eventData[0].winnersDetails;
        this.finalistTableSettings = this.tabSettings(this.finalistDetails, this.columns, true, true, true);
        this.winnerTabSetting = this.tabSettings(this.winnersDetails, this.winnerColumns, true, true, true);
        this.participantTabSetting = this.tabSettings(this.participantDetails, this.columns, true, true, true);
      }
    });
  }
  deleteFinalist(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedfinalists'), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    // Conformation for Delete ClassPeriodType
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.eventParticipantView = this.selectedStudentIds;
        this.eventParticipantView.forEach(x => {
          if (x) {
            x.eventId = this.addEventId;
            x.isFinalist = null;
          }
        });
        this.createParticipant(this.eventParticipantView);
      }
    });
  }
  deleteWinner(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { text: this.commonService.getTranslation('PleaseconfirmtodeletetheSelectedWinner'), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    // Conformation for Delete ClassPeriodType
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.eventParticipantView = this.selectedStudentIds;
        this.eventParticipantView.forEach(x => {
          if (x) {
            x.eventId = this.addEventId;
            x.isWinner = null;
            x.winningPosition = null;
          }
        });
        this.createParticipant(this.eventParticipantView);
      }
    });
  }

  winningPositionClick(data): void {
    this.dialog.closeAll();
    this.eventParticipantView = this.selectedStudentIds;
    this.eventParticipantView.forEach(x => {
      if (x) {
        x.eventId = this.addEventId;
      }
    });
    this.createParticipant(this.eventParticipantView);
  }

  download(): void {
    if (this.attachmentDetails !== null) {
      window.open(this.nameImgProp);
    }
  }
  onEventTypeSelect(type: any): void {
    const eventType = this.eventTypesList.find(x => x.value === type);
    if (eventType !== undefined) {
      this.isCompetation = eventType.isCompitation === AppSettings.ISSTUDENT ? true : false;
      if (this.isCompetation === false) {
        this.hideFromToDate = true;
      } else {
        this.hideFromToDate = false;
      }
    }

  }
  statusChanges(value: any, eventType: any): void {
    const statusType = this.eventstatusList.find(x => x.value === value);
    if (statusType !== undefined && eventType !== undefined &&
      ((this.eventType.label === AppSettings.NEWS || this.eventType.isCompitation === '0')) || (statusType.code === AppSettings.EVE_CAN)) {
      this.return();
    }
  }
  cancelClick(): void {
    this.isWinner = null;
    this.isFinalist = null;
  }

}

