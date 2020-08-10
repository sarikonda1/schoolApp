import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolSyllabusService } from 'app/service/syllabus/syllabus.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import { StoreService } from 'app/service/file-management/store.service';
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-syllabus-schedule',
  templateUrl: './syllabus-schedule.component.html',
  styleUrls: ['./syllabus-schedule.component.scss'],
  providers: [SchoolSyllabusService, SyllabusSchedulesService, ClassTimetableService, StoreService]
})
export class SyllabusScheduleComponent extends CommonComponent implements OnInit {
  @ViewChild('scheduleDateTemp') scheduleDateTemp:  TemplateRef<any>;
  @ViewChild('scheduleDateFormPopUp') scheduleDateFormPopUp: any;

  syllabusSearchForm: FormGroup;
  coursesList: any [] = [];
  filterViewModel: any;
  syllabusDropDownList: any [] = [];
  validate = true;
  currentComponent = 'SyllabusScheduleComponent';
  // table
  tabSettings: any = {};
  closeAddPanel = true;
  scheduleController = new FormControl(null, [Validators.required]);
  scheduleForm: FormGroup;
  cols: any [] = [];
  rows: Array<any> = [];
  rowsSelected: any[] = [];
  onSearchHeader = false;
  customDialog: any;
  academicSession: any;
  syllabusFormController = new FormControl(null, [Validators.required]);
  constructor(public _fb: FormBuilder, public syllabusService: SchoolSyllabusService,
     public snackBar: MatSnackBar, public route: ActivatedRoute, public syllabusSchedulesService: SyllabusSchedulesService,
      // tslint:disable-next-line: max-line-length
      private classTimetableService: ClassTimetableService, public commonService: CommonService, public dialog: MatDialog, public storeService: StoreService, public changeDetector: ChangeDetectorRef) {
    super();
    // this.getAvailableSchoolBoards();
   }

  ngOnInit(): void {
    this.initializeForm();
    this.academicSession = JSON.parse(localStorage.getItem('_as'));
    const modelData = this.getModelComponent(this.currentComponent);
    if (modelData){
        this.syllabusSearchForm.patchValue(modelData);
        if ( modelData.syllabusId){
          this.syllabusFormController.patchValue(modelData.syllabusId);
          // this.getSyllabusScheduleGrid();
        }
        this.getAvailableClasses(this.syllabusSearchForm.value.boardId);
        this.getAvailableSections(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId);
        this.getCourses();
        this.onSyllabusSearch(this.syllabusSearchForm);
    }
    this.getAvailableSchoolBoards();
    this.intializetableSettings();
  }
  getAvailableSchoolBoards(): void {
    this.availableSchoolBoards = [];
    this.commonService.schoolBoards().subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.availableSchoolBoards.push({
            label: element.name,
            value: element.id
          });
        });
        if (!this.syllabusSearchForm.value.boardId){
          this.syllabusSearchForm.patchValue({
            boardId: this.availableSchoolBoards[0].value
          });
          this.currentBoardId = this.availableSchoolBoards[0].value;
          this.getAvailableClasses(this.currentBoardId);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  intializetableSettings(): void{
    this.cols = [
      { field: 'chapter', header: 'Chapter', sort: false , innerHTML: true},
      { field: 'topic', header: 'Topic', sort: false  , innerHTML: true},
      { field: 'subTopic', header: 'Sub Topic', sort: false  , innerHTML: true},
      { field: 'formatedScheduledCompletionDate', header: 'Scheduled Completion Date', sort: false },
      { field: 'FormatedActualCompletionDate', header: 'Actual Completion Date', sort: false },
      { field: 'actions', header: 'Actions', sort: false }
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      // model: this.studentsSectionSView,
      // tablename: '',
      componentName: this.currentComponent,
      isMultiDeleteRequired: false
    };
  }
  setFilterViewModel(): void{
    this.filterViewModel = {
      boardId: 0, 
      classId: 0, 
      sectionId: 0,
      courseId: 0, 
    };
  }
  initializeForm(): void {
    this.syllabusSearchForm = this._fb.group({
      boardId: [null],
      classId: [null],
      courseId: [null],
      sectionId: [null]
    });
    this.syllabusSearchForm.valueChanges.pipe(distinctUntilChanged()).subscribe(form => {
      this.onSearchHeader = false;
      if (this.tabSettings){
        this.tabSettings['rows'] = [];
        this.changeDetector.detectChanges();
      }
    });
    this.scheduleForm = this._fb.group({
      scheduleDate: [null, Validators.required]
    });
  }
  boardChanged(event, onManualChange = false): void {
    if (event.value) {
      if (!onManualChange){
        this.syllabusSearchForm.patchValue({
          classId: null,
          sectionId: null,
          courseId: null
        });
        this.availableClasses = [];
        this.coursesList = [];
        this.availableSections = [];
      }
      this.getAvailableClasses(event.value);
    }
  }
  classChanged(event, onManualChange= false): void {
    if (!onManualChange){
      this.syllabusSearchForm.patchValue({
        sectionId: null,
        courseId: null
      });
      this.coursesList = [];
      this.availableSections = [];
    }
    this.getCourses();
    this.getAvailableSections(this.syllabusSearchForm.controls.boardId, this.syllabusSearchForm.controls.classId);
  }
  getCourses(): void {
    this.classTimetableService.classTimetableCoursesGet(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId).subscribe(response => {
      if (response.commonViewModel && response.commonViewModel.length) {
        response.commonViewModel.forEach(element => {
          this.coursesList.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  onClear(): void{
      this.syllabusSearchForm.reset();
      this.setModelDataTableComponent(this.currentComponent, null);
  }
  onSyllabusSearch(form): void{
    if (form.valid){
      this.syllabusFormController.reset();
      this.tabSettings.rows = [];
      this.onSearchHeader = false;
      this.getSyllabusScheduleGrid(true);
    }
  }
  onNoScheduleNext(): void{
    this.syllabusService.getSyllabusList(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId, this.syllabusSearchForm.value.courseId)
    .subscribe(res => this.onGetSyllabusList(res), err => this.errorResponse(err));
  }
  onGetSyllabusList(res): void{
    if (res.syllabus && res.syllabus.length){
      this.syllabusDropDownList = res.syllabus;
      if (res.syllabus.length === 1){
        this.syllabusFormController.patchValue(res.syllabus[0].id);
        this.addSyllabusSchedule();
      } 
    } else{
      this.openSnackBar('No Syllabus is configured to class, section, course', true);
    }
  }
  addSyllabusSchedule(): void{
    if (this.syllabusFormController.valid){
      const modelData = this.syllabusSearchForm.value;
      modelData['syllabusId'] = this.syllabusFormController.value;
      modelData['schoolBoardId'] = this.syllabusSearchForm.value.boardId;
      this.syllabusSchedulesService.scheduleAcademicSyllabus(modelData)
      .subscribe(res => this.onPostSchedule(res), err => this.errorResponse(err));
    }
  } 
  onPostSchedule(res): void{
    this.getSyllabusScheduleGrid();
  }
  getSyllabusScheduleGrid(fromHeaderSearch = false): void{
      if (this.syllabusSearchForm.valid ){
        this.filterViewModel = this.syllabusSearchForm.value;
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.syllabusSchedulesService.syllabusScheduleGet(
          this.filterViewModel.classId,
          this.filterViewModel.sectionId,
          this.filterViewModel.courseId,
          this.filterViewModel.boardId)
        .subscribe(res => this.setSyllabusScheduleDetails(res, fromHeaderSearch), err => this.errorResponse(err)); 
      }
  }
  setSyllabusScheduleDetails(res, fromHeaderSearch): void{
    if (res.academicSesssionSyllabus){
      let syllabusDataList = [];
      res.academicSesssionSyllabus.academicSessionSyllabusSchedules.map(e => {
        if (e.syllabusCheckPointId){
          e.isCheckPoint = true;
          e.chapter = e.syllabusCheckPoint;
          e.topic = e.checkPointTestType;
          e.subTopic = e.isCumulative ? 'Cummulative' : 'Incremental';
        } else{
           e.chapter  = e.chapter ?  ('<p>' + e.chapter + this.getInnerHtmlForAttachment(e.chapterFileName) + '</p>') : '';  
           e.topic  = e.topic ? ('<p>' + e.topic + this.getInnerHtmlForAttachment(e.topicFileName) + '</p>') : '';  
           e.subTopic  =  e.subTopic ? ('<p>' + e.subTopic + this.getInnerHtmlForAttachment(e.subTopicFileName) + '</p>') : '';  
        }
      });
      syllabusDataList = res.academicSesssionSyllabus.academicSessionSyllabusSchedules;
      syllabusDataList.forEach(e => {
        e.formatedScheduledCompletionDate = this.getFormattedDateBySchoolDateFormat(e.scheduledCompletionDate);
        e.FormatedActualCompletionDate = this.getFormattedDateBySchoolDateFormat(e.actualCompletionDate);
        e.operations = [
          {
            name: 'Set Scheduled Completion Date',
            icon: AppSettings.EDIT,
            operationName: 'set'
          }
        ];
      });
      this.tabSettings = {
        columns: this.cols,
        // model: this.studentsSectionSView,
        rows: syllabusDataList,
        tablename: 'Schedule Details',
        componentName: this.currentComponent,
        visibleSelectAll: true,
        isSelectRowRequired: true,
        isMultiDeleteRequired: false,
        isPaginationRequired: false
      };
    } else if (res.messages && res.messages.ResultMessage){
      this.openSnackBar(res.messages.ResultMessage, true);
    }
    this.onSearchHeader = true;
  }

  
  rowWiseActions(event): void{
    this.rowsSelected = [];
    this.rowsSelected.push(event.clickedRow);
    this.onSchedule();
  }
  selectedRows(data): void{
    if (data.length === 0){
      this.scheduleController.reset();
    }
    this.rowsSelected = [];
    data.forEach(element => {
      this.rowsSelected.push(element);
    });
  }
  onSubmitDate(): void{
    if (this.scheduleForm.valid){
      const scheduleUpdateArray = {
        scheduledCompletionDate: this.scheduleForm.value.scheduleDate,
        academicSessionSyllabusScheduleIds: []
      };
      this.rowsSelected.map(e => {
        scheduleUpdateArray.academicSessionSyllabusScheduleIds.push(e.academicSessionSyllabusScheduleId);
      });
      this.syllabusService.updateSyllabusSchedule(scheduleUpdateArray)
      .subscribe(res => this.onUpdateSyllabusSchedule(res), err => this.errorResponse(err));
    }
  }
  onUpdateSyllabusSchedule(res): void{
    this.getSyllabusScheduleGrid();
    this.closeDialog();
  }
  onSchedule(): void{
    if (this.rowsSelected && this.rowsSelected.length === 1){
      this.scheduleForm.patchValue({
        scheduleDate: this.rowsSelected[0].scheduledCompletionDate 
      });
    }
    this.customDialog = this.dialog.open(this.scheduleDateTemp, {
      disableClose: true,
      width: '500px',
    });
    setTimeout(() => {
      if (document.getElementById('submit-button')){
        document.getElementById('submit-button').focus();
      }
    }, 0);
  }
  closeDialog(): void{
    this.scheduleDateFormPopUp.submitted = false;
    this.scheduleController.reset();
    this.scheduleForm.reset();
    this.dialog.closeAll();
  }
  getInnerHtmlForAttachment(filename): any{
   return filename ? ('<span class="pl-8"><a target="_blank" href="' + this.storeService.getFilePath(filename) + '">Attachment</a></span>')  : '';
  }
}
