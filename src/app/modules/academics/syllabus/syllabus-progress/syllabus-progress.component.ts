import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolSyllabusService } from 'app/service/syllabus/syllabus.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { distinctUntilChanged } from 'rxjs/operators';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';

@Component({
  selector: 'app-syllabus-progress',
  templateUrl: './syllabus-progress.component.html',
  styleUrls: ['./syllabus-progress.component.scss'],
  providers: [SchoolSyllabusService, SyllabusSchedulesService, ClassTimetableService, StoreService]
})
export class SyllabusProgressComponent extends CommonComponent implements OnInit {
  @ViewChild('scheduleDateTemp') scheduleDateTemp:  TemplateRef<any>;
  @ViewChild('scheduleGoForm') scheduleGoForm: any;
  syllabusSearchForm: FormGroup;
  syllabusDataList: any [] = [];
  coursesList: any [] = [];
  filterViewModel: any;
  validate = true;
  currentComponent = 'SyllabusProgressComponent';
  // table
  tabSettings: any = {};
  closeAddPanel = true;
  scheduleController = new FormControl(null, [Validators.required]);
  cols: any [] = [];
  rows: Array<any> = [];
  statusList: any [] = [];
  customDialog: any;
  progressForm: FormGroup;
  rowsSelected: any [] = [];
  syllabusDetails: any;
  constructor(public _fb: FormBuilder, public syllabusService: SchoolSyllabusService,
     public snackBar: MatSnackBar, public route: ActivatedRoute, public syllabusSchedulesService: SyllabusSchedulesService,
      // tslint:disable-next-line: max-line-length
      private classTimetableService: ClassTimetableService, public commonService: CommonService, public router: Router,  public dialog: MatDialog, public dialogRef: MatDialog, public storeService: StoreService, public changeDetector: ChangeDetectorRef) {
       super();
   }

  ngOnInit(): void {
    this.statusList = [
      {
        label: 'Start Progress',
        value: 'S_P'
      },
      {
        label: 'Complete',
        value: 'C_P'
      },
      {
        label: 'Clear Status',
        value: 'C_S'
      }
    ];
    this.initializeForm();
    const modelData = this.getModelComponent(this.currentComponent);
    if (modelData){
        this.syllabusSearchForm.patchValue(modelData);
        this.getAvailableClasses(this.syllabusSearchForm.value.boardId);
        this.getAvailableSections(this.syllabusSearchForm.value.boardId, this.syllabusSearchForm.value.classId);
        this.getCourses();
        this.onSearch();
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
      { field: 'chapter', header: 'Chapter', sort: false, innerHTML: true },
      { field: 'topic', header: 'Topic', sort: false, innerHTML: true },
      { field: 'subTopic', header: 'Sub Topic', sort: false, innerHTML: true },
      { field: 'formatedStartDate', header: 'startDate', sort: false },
      { field: 'formatedActualCompletionDate', header: 'Actual Completion Date', sort: false },
      { field: 'status', header: 'Status', sort: false },
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
      courseId: 0
    };
  }
  initializeForm(): void {
    this.syllabusSearchForm = this._fb.group({
      boardId: [null, Validators.required],
      classId: [null, Validators.required],
      courseId: [null, Validators.required],
      sectionId: [null, Validators.required]
    });
    this.syllabusSearchForm.valueChanges.pipe(distinctUntilChanged()).subscribe(form => {
      if (this.tabSettings){
        this.tabSettings['rows'] = [];
        this.changeDetector.detectChanges();
      }
    });

    this.progressForm = this._fb.group({
      startDate: [null, Validators.required],
      actualcompletionDate: [null, Validators.required]
    });
  }
  boardChanged(event, onManualChange = false): void {
    if (event.value) {
      if (!onManualChange){
        this.syllabusSearchForm.patchValue({
          classId: null,
          courseId: null,
          sectionId: null
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
        courseId: null,
        sectionId: null
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
      this.availableClasses = [];
      this.coursesList = [];
      this.availableSections = [];
      this.setModelDataTableComponent(this.currentComponent, null);
  }
  setScheduleDetails(res): void{
  }

  

  selectedRows(data): void{
    this.rowsSelected = [];
    data.forEach(element => {
      this.rowsSelected.push(element);
    });
    this.scheduleController.reset();
    let temparray = [
      {
        label: 'Start Progress',
        value: 'S_P'
      },
      {
        label: 'Complete',
        value: 'C_P'
      },
      {
        label: 'Clear Status',
        value: 'C_S'
      }
    ];
    if (this.rowsSelected.some(e => e.startDate)){
      temparray = temparray.filter(e => e.value !== 'S_P');
    }
    if (this.rowsSelected.some(e => !e.startDate) || this.rowsSelected.some(e => e.startDate && e.actualCompletionDate)){
      temparray = temparray.filter(e => e.value !== 'C_P');
    }
    if (!this.rowsSelected.every(e => e.startDate || e.actualCompletionDate)){
       temparray = temparray.filter(e => e.value !== 'C_S');
    }    
    this.statusList = temparray;
  }
  onSubmit(): void{
    if (this.scheduleController.valid){
      this.scheduleGoForm.submitted = false;
      const status = this.statusList.find(e => e.value === this.scheduleController.value);
      this.rowWiseActions({operation: status.label}, true);
    }
  }

  onSearch(): void{
    if (this.syllabusSearchForm.valid){
          this.filterViewModel = this.syllabusSearchForm.value;
          this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
          this.syllabusSchedulesService.syllabusProgressGet(
            this.filterViewModel.classId,
            this.filterViewModel.sectionId,
            this.filterViewModel.courseId,
            this.filterViewModel.boardId)
          .subscribe(res => this.onSyllabusSearch(res), err => this.errorResponse(err)); 
      }
  }
  onSyllabusSearch(res): void{
    this.syllabusDetails = res.academicSesssionSyllabus;
    this.syllabusDataList = [];
    if (res.academicSesssionSyllabus){
      res.academicSesssionSyllabus.academicSessionSyllabusSchedules.map(e => {
        if (e.syllabusCheckPointId){
          e.isCheckPoint = true;
          e.chapter = e.syllabusCheckPoint;
          e.topic = e.checkPointTestType;
          e.subTopic = e.isCumulative ? 'Cummulative' : 'Incremental';
        }else{
          e.chapter  = e.chapter ?  ('<p>' + e.chapter + this.getInnerHtmlForAttachment(e.chapterFileName) + '</p>') : '';  
          e.topic  = e.topic ? ('<p>' + e.topic + this.getInnerHtmlForAttachment(e.topicFileName) + '</p>') : '';  
          e.subTopic  =  e.subTopic ? ('<p>' + e.subTopic + this.getInnerHtmlForAttachment(e.subTopicFileName) + '</p>') : '';  
        }
      });
      this.syllabusDataList = res.academicSesssionSyllabus.academicSessionSyllabusSchedules;
      this.syllabusDataList.forEach(e => {
        e.formatedStartDate = this.getFormattedDateBySchoolDateFormat(e.startDate);
        e.formatedActualCompletionDate = this.getFormattedDateBySchoolDateFormat(e.actualCompletionDate);
        let tempOperations = [];
        if (e.startDate || e.actualCompletionDate){
            if (e.actualCompletionDate){
                e.status = 'Completed';
            }else{
                e.status = 'In Progress';
            }
            if (!e.actualCompletionDate){
              tempOperations = [
                {
                  name: 'Complete',
                  icon: AppSettings.EDIT,
                  operationName: 'C_P'
                }
              ]; 
            }
            tempOperations.push({
                name: 'Clear Status',
                icon: AppSettings.DELETE,
                operationName: 'C_S'
              },
              {
                name: 'View Updates',
                icon: AppSettings.VIEW,
                operationName: 'V_U'
            });
        }else{
          tempOperations = [
            {
              name: 'Start Progress',
              icon: AppSettings.EDIT,
              operationName: 'set'
            }
          ];
        }
        e.operations = tempOperations;
      });
      this.tabSettings = {
        columns: this.cols,
        // model: this.studentsSectionSView,
        rows: this.syllabusDataList,
        tablename: 'Progress Details',
        componentName: this.currentComponent,
        visibleSelectAll: true,
        isSelectRowRequired: true,
        isMultiDeleteRequired: false,
        isPaginationRequired: false
      };
    } else{
      this.openSnackBar('There are no schedules assigned for selected class, section, course', true);
      if (this.tabSettings){
        this.tabSettings.rows = [];
      }
    }
  }
  rowWiseActions(event, fromHeaderAction = false): void{
    event.operation = event.operation.toLowerCase();
    if (!fromHeaderAction){
      this.rowsSelected = [];
      this.rowsSelected.push(event.clickedRow);
    }
    if (event.operation === 'view updates'){
        this.router.navigate([RouteConfig._Syllabus_Progress_Details + event.clickedRow.academicSessionSyllabusProgressId]);
    }else if (event.operation === 'start progress'){
        const dialogRef = this.dialogMethod('Please confirm to Mark this Syllabus Entry as "In Progress"');
        dialogRef.afterClosed().subscribe(action => {
          if (action === AppSettings.CONFIRM) {
              this.onPostProgress(new Date(), false);
          }else {
            this.closeDialog();
          }
        });
    }else if (event.operation.toLowerCase() === 'complete'){
      const dialogRef = this.dialogMethod('Please confirm to Mark this Syllabus Entry as "Complete"');
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.CONFIRM) {
            this.onPostProgress(false, new Date());
        }else {
          this.closeDialog();
        }
      });
    }else if (event.operation  === 'clear status'){
      const dialogRef = this.dialogMethod('Please confirm to Clear the all status  update for this syllabus Entry');
        dialogRef.afterClosed().subscribe(action => {
          if (action === AppSettings.CONFIRM) {
            this.onPostProgress(false, false);
          }else {
             this.closeDialog();
          }
        });
    }
  }
  onPostProgress(startDate, actualDate): void{
    const processData = {
      classId: this.syllabusDetails.classId,
      sectionId: this.syllabusSearchForm.value.sectionId,
      schoolBoardId: this.syllabusSearchForm.value.boardId,
      academicSessionSyllabusProgresses: []
    };
    this.rowsSelected.map(e => {
        processData.academicSessionSyllabusProgresses.push(
          {
            academicSessionSyllabusScheduleId: e.academicSessionSyllabusScheduleId,
            startDate: startDate ? startDate : (actualDate ? e.startDate : null),
            actualCompletionDate: actualDate ? actualDate : (startDate ? e.actualCompletionDate : null),
            academicSessionSyllabusProgressId: e.academicSessionSyllabusProgressId
          }
        );
    });
    this.syllabusSchedulesService.addAcademicSessionSyllabusScheduleProcess(processData)
    .subscribe(res => this.onProgressUpdate(res), err => this.errorResponse(err));
  }
  onProgressUpdate(res): void{
    this.scheduleController.reset();
    this.closeDialog();
    this.onSearch();
  }
  closeDialog(): void{
    this.scheduleController.reset();
    this.dialog.closeAll();
  }
  dialogMethod(dialogData: any): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: AppSettings.CANCEL, btn2Text: AppSettings.CONFIRM },
    });
  }
  getInnerHtmlForAttachment(filename): any{
    return filename ? ('<span class="pl-8"><a target="_blank" href="' + this.storeService.getFilePath(filename) + '">Attachment</a></span>')  : '';
  }
}
