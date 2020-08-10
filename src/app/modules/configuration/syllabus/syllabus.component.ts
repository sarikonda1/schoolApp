import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { DomSanitizer } from '@angular/platform-browser';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { SchoolSyllabusService } from 'app/service/syllabus/syllabus.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { Router } from '@angular/router';
import { isNumber } from 'util';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';
import { SchoolAcademicSessionService } from 'app/service/academic-service/api/school-academic-session.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss'],
  providers: [ClassTimetableService, SchoolSyllabusService, GardeTermConfigurationService, StoreService, SchoolAcademicSessionService, GradeSetupService]
})
export class SyllabusComponent extends CommonComponent implements OnInit {
  @ViewChild('stepper') stepper;
  @ViewChild('chapterForm') chapterForm;
  @ViewChild('topicsForm') topicsForm;
  @ViewChild('subTopicForm') subTopicForm;
  @ViewChild('infoForm') infoForm;
  @ViewChild('checkPointTestDialog') checkPointTestDialog;
  tableSettings: any = {};
  columns: any[] = [];
  currentComponent: any = 'SyllabusComponent';
  filterViewModel: any;
  totalRowsCount: number;
  pageCnt: number;
  closeForm = true;

  // forms
  basicInfo: FormGroup;
  chaptersInfo: FormGroup;
  topics: FormGroup;
  subTopics: FormGroup;
  checkPoints: FormGroup;
  checkPointTestForm: FormGroup;
  completeData: FormGroup;
 

  schoolBoardList: any [] = [];
  schoolClassesList: any [] = [];
  schoolSectionList: any [] = [];
  validate = true;
  coursesList: any[] = [];
  topicsList: any[] = [];
  subTopicsList: any[] = [];
  checkPointsList: any[] = [];
  checkPointTypes: any[] = [];
  testTypes: any[] = [];
  syllabusList: any[] = [];
  topicsDisplayedColumns: string[] = ['name', 'topics'];
  chapterDisplayedColumns: string[] = ['chapterName', 'fileName' , 'action'];
  subTopicsDisplayedColumns: string[] = ['chapterName', 'topicName', 'subTopics'];
  dataSource = new BehaviorSubject([]);
  displayedColumns: any[] = [];
  boardSyllabusList: any[] = [];
  selectedSubTopicList: any [] = [];
  supTopicsTableData = new BehaviorSubject([]);
  syllabusDetails: any [] = [];
  syllabusEryId: any;
  syllabusDataList: any [] = [];
  isCurrentStepIsUpdate = false;
  topicsGridList: any [] = [];
  syllabusBasicDetails: any;
  // disable all data is syllabus has checkpoints 
  disableAllDataAdding = false;
  checkPointsMsg = 'Checkpoints have already been defined due to which you cannot make any changes.';
  drop(event: CdkDragDrop<any>, stepper): void{
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     } else {
      if (event.container.data.some(e => e.name.toLowerCase() === event.previousContainer.data[event.previousIndex].name.toLowerCase())){
        switch (stepper){
          case 'topics': this.openSnackBar('Duplicate Topic name in the same Chapter', true); break;
          default: this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true); break;
        }
      }else{
          transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      }
    
     }
    switch (stepper){
      case 'chapter': this.resetChapters(); break;
      case 'topics': this.resetTopics(); break;
      default: this.resetSubTopics(); break;
    }
  }
  constructor(
    public _fb: FormBuilder,
    public snackBar: MatSnackBar,
    public router: Router,
    public dialogRef: MatDialog,
    public changeDetector: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    public commonService: CommonService,
    public syllabusService: SchoolSyllabusService,
    private classTimetableService: ClassTimetableService,
    private gradeTermConfigurationService: GardeTermConfigurationService,
    public storeService: StoreService,
    private schoolAcademicSessionService: SchoolAcademicSessionService,
    private gradeSetupService: GradeSetupService
    ) {
    super();
  }
  ngOnInit(): void {
    this.initializeFilterView();
    this.initializeTableSettings();
    this.initializeForm();
    this.schoolBoardDetails();
    const modelData = this.getModelComponent(this.currentComponent);
    if (modelData){
      this.filterViewModel = modelData;
    }
    this.getSyllabusTableData();

    /// apis--
    this.getCheckPointsList();
    this.getTestTypes();
  }
  boardOrClassChanged(value): void{
    this.getboardSyllabusList();
  }
  getboardSyllabusList(): void{
    this.syllabusService.boardSyllabus(this.basicInfo.value.schoolBoardId, this.basicInfo.value.classId)
    .subscribe(res => this.boardSyllabusList = res.boardSyllabus, err => this.errorResponse(err));
  }
  initializeFilterView(): void {
    this.filterViewModel = {
      schoolBoardIds: [],
      courseIds: [],
      classIds: [],
      name: '',
      isActive: [],
      numberOfChapters: '',
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }
  filtertableData(_model): void{
    this.filterViewModel = _model;
    this.getSyllabusTableData();
  }
  initializeTableSettings(): void {
    this.setColumnHeaders();
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Syllabus',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }
  getSyllabusTableData(): void{
    this.syllabusService.syllabusList(this.filterViewModel.schoolBoardIds,
      this.filterViewModel.classIds,
      this.filterViewModel.courseIds,
      this.filterViewModel.name,
      this.filterViewModel.isActive,
      this.filterViewModel.numberOfChapters,
      this.filterViewModel.sortBy,
      this.filterViewModel.sortOrder,
      this.filterViewModel.pageNumber,
      this.filterViewModel.pageSize)
    .subscribe(res => this.onGetSyllabusList(res), err => this.errorResponse(err));
  }
  setColumnHeaders(): void {
    this.columns = [
      { field: 'schoolBoard', header: 'School Board', sort: true },
      { field: 'className', header: 'Class', sort: true },
      { field: 'course', header: 'Course', sort: true },
      { field: 'name', header: 'Name', sort: true },
      { field: 'isActive', header: 'Is Active', sort: true },
      { field: 'numberOfChapters', header: 'Number of Chapters', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }
  onGetSyllabusList(res): void {
    this.setColumnHeaders();
    const operations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT,
        operationName: AppSettings.EDIT
      },
      {
        name: AppSettings.VIEW,
        icon: AppSettings.DETAILS_ICON,
        operationName: AppSettings.VIEW_DETAILS
      },
      {
        name: AppSettings.INACTIVE_OPERATION,
        icon: AppSettings.INACTIVE_ICON,
        operationName: AppSettings.INACTIVE_OPERATION
      }
    ];
   
    let rows = [];
      if (!res.syllabusData) {
        rows = [];
        this.totalRowsCount = 0;
        this.pageCnt = 0;
      } else {
          this.filterViewModel.pageNumber = res.syllabusData.pageNumber;
          this.totalRowsCount = res.syllabusData.totalItems;
          this.pageCnt = res.syllabusData.totalPages;
          rows = res.syllabusData.list;
          rows.map(e => {
            // e.operations = operations;
            // tslint:disable-next-line: max-line-length
            e.operations = e.isActive === 'Yes' ? (e.isEditable ? operations : operations.filter(el => el.name !== AppSettings.EDIT_OPERATION)) : operations.filter(el => el.name === AppSettings.VIEW);
            if (e.isActive !== 'Yes'){
              e.operations.push(
                {
                  name: AppSettings.Active,
                  icon: AppSettings.ACTIVE_ICON,
                  operationName: AppSettings.ACTIVE_OPERATION
                }
              );
            }
          });
    }
    this.tableSettings = {
      model: this.filterViewModel,
      rows: rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Syllabus',
      componentName: this.currentComponent,
      visibleSelectAll: false,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: res.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Manage Syllabus'
        },
        addingForm: {
          required: true,
          btnName: 'Add Syllabus'
        }
      }
    };
  }
  actions(operationData): void{
    this.syllabusEryId = operationData.clickedRow.id;
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.basicInfo.reset();
      this.syllabusService.syllabusBasicDetails(this.syllabusEryId)
      .subscribe(res => this.afterBasicDetailsGet(res), err => this.errorResponse(err));
    }else if (operationData.operation === AppSettings.VIEW_OPERATION.toLowerCase()) {
      this.router.navigate([RouteConfig._Syllabus_Details + this.syllabusEryId]);
    }else if (operationData.operation === AppSettings.INACTIVE_OPERATION.toLowerCase()) {
        this.syllabusService.updateSyllabus(operationData.clickedRow.id, 0)
        .subscribe(res => this.onActivateDeactive(res), err => this.errorResponse(err));
    }else if (operationData.operation === AppSettings.Active.toLowerCase()) {
      this.syllabusService.updateSyllabus(operationData.clickedRow.id, 1)
      .subscribe(res => this.onActivateDeactive(res), err => this.errorResponse(err));
  }
  }
  onActivateDeactive(res): void{
    if (res.messages && res.messages.ResultMessage){
      this.openSnackBar(res.messages.ResultMessage);
    }
    this.getSyllabusTableData();
  }
  afterBasicDetailsGet(res): void{
     this.schoolBoardDetails(true);
      this.isCurrentStepIsUpdate  = true;
      this.closeForm = false;
      if (res.dataList && res.dataList[0]){
        this.syllabusBasicDetails = res.dataList[0];
        this.disableAllDataAdding = res.dataList[0].checkPointsCount ? true : false; 
        this.basicInfo.patchValue(res.dataList[0]);
        this.basicInfo.patchValue({
          attachment : {
            fileName: res.dataList[0].fileName,
            fileValue: null
          }
        });
        this.stepper._steps._results.forEach((x, i) => {
          x.interacted = false;
          x.completed = this.isStepComplete(i); 
        });
        this.customSteperLabelChange();
      }
  }
  
  initializeForm(): void {
    this.basicInfo = this._fb.group({
      schoolBoardId: [null, Validators.required],
      classId: [null, Validators.required],
      courseId: [null, Validators.required],
      boardSyllabusId: [null],
      name: [null, Validators.maxLength(45)],
      code: [null, Validators.maxLength(6)],
      attachment: [{fileName: null, fileValue: null}]
    });
    this.chaptersInfo = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(45)]],
      code: [null, Validators.maxLength(6)],
      attachment: [{fileName: null, fileValue: null}],
      id: [null],
      chapterIndex: [null]
    });

    this.topics = this._fb.group({
      syllabusChapterId: [null],
      name: [null, [Validators.required, Validators.maxLength(45)]],
      code: [null, Validators.maxLength(6)],
      attachment: [{fileName: null, fileValue: null}],
      id: [null],
      chapterIndex: [null],
      topicIndex: [null]
    });
    this.subTopics = this._fb.group({
      syllabusChapterId: [null ],
      syllabusTopicId: [null,  Validators.required],
      name: [null, [Validators.required, Validators.maxLength(45)]],
      code: [null, Validators.maxLength(6)],
      attachment: [{fileName: null, fileValue: null}],
      id: [null],
      topicIndex: [null],
      subTopicIndex: [null]
    });

    this.checkPoints = this._fb.group({
      checkPoint: [false]
    });

    this.checkPointTestForm = this._fb.group({
      before: [null, Validators.required],
      index: [null, Validators.required],
      testTypeId: [null, Validators.required],
      name: [null, [Validators.required, Validators.maxLength(45)]],
      iscumulative: [null, Validators.required]
    });

    this.completeData = this._fb.group({
      schoolBoardId: [null],
      classId: [null],
      courseId: [null],
      boardSyllabusId: [null],
      name: [null],
      code: [null],
      fileName: [null],
      fileValue: [null]
    });
  }
  // ---- syllabus(1 st step)----------------
  removeAttachment(stepper): void{
    switch (stepper) {
      case 'syllabus': this.basicInfo.controls.attachment.patchValue({fileName: null, fileValue: null});
        break;
      case 'chapters':  this.chaptersInfo.controls.attachment.patchValue({fileName: null, fileValue: null});
        break;
      case 'topics': this.topics.controls.attachment.patchValue({fileName: null, fileValue: null});
        break;
      case 'subTopics': this.subTopics.controls.attachment.patchValue({fileName: null, fileValue: null});
        break;
    }
  }
  onCreateSyllabus(): void{
    if (this.basicInfo.valid){
      let addSyllabusModel = {
        schoolBoardId: 0,
        classId: 0,
        courseId: 0,
        name: null,
        code: null,
        boardSyllabusId: 0,
        attachment: {
          fileName: null,
          fileValue: null
        },
        id: ''
      };
      addSyllabusModel = this.basicInfo.value;
      if (this.syllabusEryId){
        addSyllabusModel['id'] = this.syllabusEryId;
        this.syllabusService.updateSyllabusData(addSyllabusModel)
        .subscribe(res => this.setAddedSyllabus(res), err => this.errorResponse(err));
      }else{
        delete addSyllabusModel.id;
        this.syllabusService.addSyllabus(addSyllabusModel)
        .subscribe(res => this.setAddedSyllabus(res), err => this.errorResponse(err));
      }
    } 
  }
  setAddedSyllabus(res): void{
    if (res.syllabusId){
     this.syllabusEryId = res.syllabusId;
    }
    this.stepper.next();
  }


  // -------------------chapters-------------------
  
  addChapter(): void {
    if (this.chaptersInfo.valid) {
      if (this.isNumber(this.chaptersInfo.value.chapterIndex)){
          if (this.isChapterNameExists(this.chaptersInfo.value.name) > -1 && this.isChapterNameExists(this.chaptersInfo.value.name) !== this.chaptersInfo.value.chapterIndex){
            this.openSnackBar('Same Chapter name Already Exists', true);
            return;
          }
          this.syllabusList[this.chaptersInfo.value.chapterIndex] = this.chaptersInfo.value;
      } else if (this.isChapterNameExists(this.chaptersInfo.value.name) === -1){
        this.syllabusList.push(this.chaptersInfo.value);
      }else {
        this.openSnackBar('Same Chapter name Already Exists', true);
        return;
      }
      this.resetChapters();
    }
  }
  isChapterNameExists(name): any{
    return this.syllabusList.findIndex(e => e.name.toLowerCase() === name.toLowerCase());
  }
  createChapter(chapter?: any): any {
    return {
      syllabusId: this.syllabusEryId,
      name: chapter ? chapter.name : null,
      code: chapter ? chapter.code : null,
      attachment: {
        fileName : chapter.fileName,
        fileValue: null 
      },
      sortOrder: chapter ? chapter.sortOrder : null,
      id: chapter.id ? chapter.id : null
    };
  }
  removeChapter(chapter, i): void {
    if (chapter.id){
      this.syllabusService.deleteSyllabusChapters(chapter.id)
      .subscribe(res => this.onDeleteChapter(res, i), err => this.errorResponse(err));
    }else{
      this.syllabusList.splice(i, 1);
    }
  }
  onDeleteChapter(res, i): void{
    this.syllabusList.splice(i, 1);
  }
  resetChapters(): void {
    this.chapterForm.reset();
    this.removeAttachment('chapters');
    setTimeout(() => {
      this.chapterForm.submitted = false;
      this.stepper.selected.interacted = false;
      this.changeDetector.detectChanges();
    });
  }
  getChapters(fromTopics = false): void{
    this.syllabusService.syllabusChapters(this.syllabusEryId)
    .subscribe(res => this.onGetSyllabus(res, fromTopics), err => this.errorResponse(err));
  }
  onGetSyllabus(res, fromTopics): void{
    this.syllabusList = [];  
    if (res.dataList && res.dataList.length){
        if (!fromTopics){
          this.isCurrentStepIsUpdate  = true;
        }
        res.dataList.map(e => {
          this.syllabusList.push(this.createChapter(e));
        });
      }
  }
  onChaptersCreate(): void{
    const addChaptersModel = [];
    this.syllabusList.map((e, i) => {
      addChaptersModel.push({
          syllabusId: this.syllabusEryId,
          name: e.name,
          code: e.code,
          sortOrder: i,
          attachment: e.attachment ? e.attachment : {
            fileName: null,
            fileValue: null
          },
          id: e.id ? e.id : null
      });
    });


    if (addChaptersModel.length){
        this.syllabusService.addSyllabusChapters(addChaptersModel)
        .subscribe(res => this.onCreateChapters(res), err => this.errorResponse(err));
    } else if (this.chaptersInfo.value.name || this.chaptersInfo.value.code){
      this.openSnackBar('Please select the chapter', true);
    } else{
      this.stepper.next();
    } 
  }
  onCreateChapters(res): void{
    this.stepper.next();
  }
  onClickChapter(chapter, index): void{
    this.chaptersInfo.patchValue(chapter);
    this.chaptersInfo.patchValue({
      chapterIndex: index
    });
    this.scrollIntoViewById('chapter-form');
  }









  // ---------------topics----------------------------
  addTopic(): void {
    if (this.topics.valid) {
      if (this.isNumber(this.topics.value.chapterIndex)){
        // tslint:disable-next-line: max-line-length
        if (this.isTopicNameExists(this.topics.value, this.topics.value.chapterIndex) > -1 && this.isTopicNameExists(this.topics.value, this.topics.value.chapterIndex) !== this.topics.value.topicIndex){
          this.openSnackBar('Duplicate Topic name in the same Chapter', true);
          return;
        }
        this.topicsGridList[this.topics.value.chapterIndex].topics[this.topics.value.topicIndex] = this.topics.value;
      } else{
        const index = this.topicsGridList.findIndex(e => e.syllabusChapterId === this.topics.value.syllabusChapterId);
        if (index !== -1){
          if (this.isTopicNameExists(this.topics.value, index) > -1){
            this.openSnackBar('Duplicate Topic name in the same Chapter', true);
            return;
          }
          this.topicsGridList[index].topics.push(this.topics.value);
        } else{
          this.topicsGridList.push({
            name: this.topics.value.syllabusChapterId ? this.getNameBasedOnId(this.topics.value.syllabusChapterId, 'chapter') : null,
            syllabusChapterId: this.topics.value ? this.topics.value.syllabusChapterId : null,
            topics: [this.topics.value]
          });
        }
      }
      // tslint:disable-next-line: max-line-length
      this.topicsGridList.sort((a, b) => this.syllabusList.findIndex(el => el.id === a.syllabusChapterId) - this.syllabusList.findIndex(el => el.id === b.syllabusChapterId));
      this.dataSource.next(this.topicsGridList);
      const syllabusChapterId =  this.topics.value.syllabusChapterId;
      this.topics.reset();
      this.topics.patchValue({
        syllabusChapterId: syllabusChapterId
      });
      this.resetTopics(false);
    }
  }
  isTopicNameExists(form, index): any{
    return this.topicsGridList[index].topics.findIndex(e => e.name.toLowerCase() === form.name.toLowerCase());
  }
  removeTopic(topic, index, tindex): void {
    if (topic.id){
      this.syllabusService.deleteSyllabusTopics(topic.id)
      .subscribe(res => this.onDeleteTopic(res, index, tindex), err => this.errorResponse(err));
    }else{
      this.onDeleteTopic(false, index, tindex);
    }
  }
  onDeleteTopic(res,  index, tindex): void{
    this.topicsGridList[index].topics.splice(tindex, 1);
    if (!this.topicsGridList[index].topics.length){
       this.topicsGridList.splice(index, 1);
    }
    this.dataSource.next(this.topicsGridList);
  }
  resetTopics(resetAll = true): void {
    if (resetAll){
    this.topics.reset();
    }
    this.removeAttachment('topics');
    if (this.stepper){
      setTimeout(() => {
         this.stepper.interacted = false;
         this.topicsForm.submitted = false;
         this.changeDetector.detectChanges();
      });
    }
  }
  onSaveTopics(): void{
    const addTopicModel = [];
    this.topicsGridList.map((e, i) => {
      e.topics.map((tp, index) => {
        addTopicModel.push({
          syllabusId: this.syllabusEryId,
          syllabusChapterId: e.syllabusChapterId ? e.syllabusChapterId : null,
          name: tp.name,
          code: tp.code,
          sortOrder: index,
          attachment: tp.attachment ? tp.attachment : {
            fileName: null,
            fileValue: null
          },
          id: tp.id ? tp.id : null
        });
      }); 
    });
    if (addTopicModel.length){
      if (this.isCurrentStepIsUpdate){
        this.syllabusService.addSyllabusTopics(addTopicModel)
        .subscribe(res => this.onAddTopics(res), err => this.errorResponse(err));
      }else{
        const formatedModel = addTopicModel.map(({id, ...rest}) => ({...rest}));
        this.syllabusService.addSyllabusTopics(formatedModel)
        .subscribe(res => this.onAddTopics(res), err => this.errorResponse(err));
      }
    } else if (this.topics.value.name || this.topics.value.code || this.topics.value.syllabusChapterId){
        this.openSnackBar('Please select the topic to continue', true);
    }else if (this.syllabusList.length){
      this.stepper.next();
    }else{
      this.openSnackBar('Please add at least 1 chapter/Topic to Continue', true);
    }
  }
  onAddTopics(res): void{
    this.stepper.next();
  }
  getTopicsBasedOnChapter(charpterId?: any): void{
      this.subTopics.controls.syllabusTopicId.setValue(null);
      this.syllabusService.syllabusChapterTopics(charpterId, this.syllabusEryId)
       .subscribe(res => this.setTopicsList(res), err => this.errorResponse(err));
  }
  setTopicsList(res): void{
    this.topicsList = [];
    if (res.dataList && res.dataList.length){
      this.topicsList = res.dataList;
    }
  }
  onClickTopic(item, i, index): void{
    this.topics.patchValue(item);
    this.topics.patchValue({
      chapterIndex: i,
      topicIndex: index
    });
    this.scrollIntoViewById('topics-form');
  }






  // -------------------sub-topics-------------------
  addSubTopic(): void {
    if (this.subTopics.valid) {
      if (this.isNumber(this.subTopics.value.subTopicIndex)){
        if (this.isSubTopicNameExists(this.subTopics.value, this.subTopics.value.topicIndex) > -1 && this.isSubTopicNameExists(this.subTopics.value, this.subTopics.value.topicIndex) !== this.subTopics.value.subTopicIndex){
          this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true);
          return;
        }
        this.subTopicsList[this.subTopics.value.topicIndex].subTopics[this.subTopics.value.subTopicIndex] = this.subTopics.value;
      } else{
        // tslint:disable-next-line: max-line-length
        const index = this.subTopicsList.findIndex(e => e.syllabusTopicId === this.subTopics.value.syllabusTopicId && e.syllabusChapterId === this.subTopics.value.syllabusChapterId);
          if (index !== -1) {
            if (this.isSubTopicNameExists(this.subTopics.value, index) > -1){
              this.openSnackBar('Duplicate Sub-Topic name in the same Chapter Topic', true);
              return;
            }
            this.subTopicsList[index].subTopics.push(this.subTopics.value);
          } else{
            this.subTopicsList.push(
              {
                syllabusChapterId:  this.subTopics.value.syllabusChapterId,
                syllabusTopicId: this.subTopics.value.syllabusTopicId ,
                // tslint:disable-next-line: max-line-length
                chapterName: this.getNameBasedOnId(this.subTopics.value.syllabusChapterId, 'chapter') ? this.getNameBasedOnId(this.subTopics.value.syllabusChapterId, 'chapter') : 'No chapter',
                topicName:  this.getNameBasedOnId(this.subTopics.value.syllabusTopicId, 'topics'),
                subTopics: [this.subTopics.value]
              }
            );
          }
      }
      if (this.syllabusList.length){
        // tslint:disable-next-line: max-line-length
        this.subTopicsList.sort((a, b) => {
            if (a.syllabusChapterId === b.syllabusChapterId){
              if (this.topicsGridList.length){
                const data = this.topicsGridList.find(el => el.syllabusChapterId === a.syllabusChapterId).topics;
              return data.findIndex(el => el.id === a.syllabusTopicId) - data.findIndex(el => el.id === b.syllabusTopicId); 
              }
              return;
            } else {
              // tslint:disable-next-line: max-line-length
              return this.syllabusList.findIndex(el => el.id === a.syllabusChapterId) - this.syllabusList.findIndex(el => el.id === b.syllabusChapterId);
            }
        });
      }
      this.setSubTopicsData(this.subTopicsList);
      const previousdata = this.subTopics.value;
      this.subTopics.reset();
      this.subTopics.patchValue({
        syllabusChapterId: previousdata.syllabusChapterId,
        syllabusTopicId: previousdata.syllabusTopicId
      });
      this.resetSubTopics(false);
    }
  }
  isSubTopicNameExists(form, index): any{
    return this.subTopicsList[index].subTopics.findIndex(el => el.name.toLowerCase() === form.name.toLowerCase());
  }
  createSubTopic(subTopic): any {
    return {
      syllabusChapterId: subTopic ? subTopic.syllabusChapterId : null,
      syllabusTopicId: subTopic ? subTopic.syllabusTopicId : null,
      name: subTopic ? subTopic.name : null,
      code: subTopic ? subTopic.code : null,
      attachment: {
        fileName: subTopic.fileName,
        fileValue: null
      },
      id: subTopic ? subTopic.id : 0,
      sortOrder: subTopic ? subTopic.sortOrder : null,
    };
  }
  removeSubTopic(subTopic, index, subIndex): void {
    if (subTopic.id){
      this.syllabusService.deleteSyllabusSubTopics(subTopic.id)
      .subscribe(res => this.onDeleteSubTopic(res, index, subIndex), err => this.errorResponse(err));
    }else{
      this.onDeleteSubTopic(false, index, subIndex);
    }
  }
  onDeleteSubTopic(res,  index, subIndex): void{
    this.subTopicsList[index].subTopics.splice(subIndex, 1);
    if (!this.subTopicsList[index].subTopics.length){
      this.subTopicsList.splice(index, 1);
    }
    this.setSubTopicsData(this.subTopicsList);
  }
  resetSubTopics(forAll = true): void {
    if (forAll){
      this.subTopics.reset();
      this.topicsList = [];
    }
    this.removeAttachment('subTopics'); 
    setTimeout(() => {
      this.stepper.selected.interacted = false;
      this.subTopicForm.submitted = false;
      this.changeDetector.detectChanges(); 
    });
  }
  onSaveSubTopics(): void{
    const subTopicModel = [];
    this.subTopicsList.map(e => {
      e.subTopics.map((sb, i) => {
        subTopicModel.push({
          syllabusTopicId: e.syllabusTopicId,
          name: sb.name,
          code: sb.code,
          sortOrder: i,
          attachment: sb.attachment ? sb.attachment : {
            fileName: null,
            fileValue: null
          },
          id: sb.id ? sb.id : null
        });
      });
    });
    if (subTopicModel.length){
          this.syllabusService.addSyllabusSubTopics(subTopicModel)
          .subscribe(res => this.afterAddAubTopics(res), err => this.errorResponse(err));
    }else{
      this.stepper.next();
    }
  
  }
  afterAddAubTopics(res): void{
    this.stepper.next();
  }
  getAllSyllabusSubTopics(): void{
    this.syllabusService.syllabusSubTopics(this.syllabusEryId)
    .subscribe(res => this.onGetAllSyllabusSubTopics(res), err => this.errorResponse(err));
  }
  onGetAllSyllabusSubTopics(res): void{
    this.subTopicsList = [];
    if (res.dataList && res.dataList.length){
       this.isCurrentStepIsUpdate  = true;
        res.dataList.map(e => {
          const index = this.subTopicsList.findIndex(el => e.syllabusTopicId === el.syllabusTopicId && e.syllabusChapterId === el.syllabusChapterId);
          if (index !== -1) {
            this.subTopicsList[index].subTopics.push(this.createSubTopic(e));
          }else{
            this.subTopicsList.push(
              {
                syllabusChapterId:  e.syllabusChapterId,
                syllabusTopicId: e.syllabusTopicId ,
                // tslint:disable-next-line: max-line-length
                chapterName: e.syllabusChapterName,
                topicName:  e.syllabusTopicName,
                subTopics: [this.createSubTopic(e)]
              }
            );
          }
        });
      this.setSubTopicsData(this.subTopicsList);
      this.resetSubTopics();
    }
  }
  onClickSubTopic(row, item, index, subIndex): void{
    this.getTopicsBasedOnChapter(row.syllabusChapterId);
    this.subTopics.patchValue({
      syllabusChapterId: row.syllabusChapterId,
      syllabusTopicId: row.syllabusTopicId,
      name: item.name,
      code: item.code,
      attachment: item.attachment,
      id: item.id,
      topicIndex: index,
      subTopicIndex: subIndex
    });
    this.scrollIntoViewById('sub-topic-form');
  }
  setSubTopicsData(rows): void{
    this.supTopicsTableData.next(rows);
    return;
  }

  // -----stepper all syllabus details

  getAllSyllabusTopics(id): void{
    this.syllabusService.syllabusAllTopics(id)
    .subscribe(res => this.onGetAllSyllabusTopics(res), err => this.errorResponse(err));
  }
  onGetAllSyllabusTopics(res): void{
    this.topicsGridList = [];
    if (res.dataList && res.dataList.length){
      this.isCurrentStepIsUpdate  = true;
      res.dataList.map(e => {
          const index = this.topicsGridList.findIndex(el => el.syllabusChapterId === e.syllabusChapterId);
          if (index !== -1){
            this.topicsGridList[index].topics.push(this.createTopicFromAPi(e));
          }else{
            this.topicsGridList.push({
              name: this.getNameBasedOnId(e.syllabusChapterId, 'chapter'),
              syllabusChapterId: e.syllabusChapterId,
              topics: [this.createTopicFromAPi(e)]
            });
          }
         this.dataSource.next(this.topicsGridList);
         this.resetTopics();
      });
    }
  }
  createTopicFromAPi(topic): any{
    return {
      syllabusChapterId: topic ? topic.syllabusChapterId : null,
      name: topic ? topic.name : null,
      code: topic ? topic.code : null,
      attachment: {
        fileName: topic.fileName,
        fileValue: null
      },
      id: topic ? topic.id : null,
      sortOrder: topic ? topic.sortOrder : null
    };
  }
  // -------------------check point-------------------
  getCheckPointsList(): void{
    this.syllabusService.checkPointTypes()
    .subscribe(res =>  this.setCheckPointsTypesData(res), err => this.errorResponse(err));
  }
  setCheckPointsTypesData(res): void{
    this.checkPointTypes = res.checkPointTypes;
    this.checkPointTypes.map(e => (e.code === 'CPTP_C' ? e.value = 1 : e.value = 0));
  }
  getTestTypes(): void{
    this.gradeTermConfigurationService.fetchTestTypes()
    .subscribe(res => this.testTypes = res.listViews, err => this.errorResponse(err));
  }
  deleteCheckPoint(item): void {
    this.syllabusService.deleteSyllabusCheckPoints(item.syllabusCheckPointId)
    .subscribe(res => this.onDeleteCheckPoints(res), err => this.errorResponse(err));
  }
  onDeleteCheckPoints(res): void{
    this.getAllChapterTopicSubTopics();
  }
  onInsertTest(index, before = true): void {
    this.checkPointTestForm.patchValue({
      before: before,
      index: before ? index : index + 1
    });
    this.dialogRef.open(this.checkPointTestDialog, {
      panelClass: 'secondary-model',
      width: '500px',
      disableClose: true
    });
  }
  onSubmitCheckPointForm(): void {
    if (this.checkPointTestForm.valid) {
        const checkpoints = {
          syllabusId: this.syllabusEryId,
          testTypeId: this.checkPointTestForm.value.testTypeId, 
          name: this.checkPointTestForm.value.name,
          isCumulative: this.checkPointTestForm.value.iscumulative,
          syllabusCheckpointInclusions: []
        };
        if (+this.checkPointTestForm.value.iscumulative){
          this.syllabusDataList.map((e, i) => {
            if (!e.syllabusCheckPointId && i < this.checkPointTestForm.value.index){
              checkpoints.syllabusCheckpointInclusions.push({
                syllabusChapterId: e.chapterId ? e.chapterId : null,
                syllabusTopicId: e.topicId ? e.topicId : null,
                syllabusSubtopicId: e.subTopicId ? e.subTopicId : null
              });
            }
          });
        }else{
          let checkPointExists = false;
          for (let i = this.syllabusDataList.length; i > -1 ; i--){
              if (i < this.checkPointTestForm.value.index){
                if (this.syllabusDataList[i].syllabusCheckPointId){
                     checkPointExists = true;
                } else if (!checkPointExists){
                  checkpoints.syllabusCheckpointInclusions.push({
                    syllabusChapterId: this.syllabusDataList[i].chapterId ? this.syllabusDataList[i].chapterId : null,
                    syllabusTopicId: this.syllabusDataList[i].topicId ? this.syllabusDataList[i].topicId : null,
                    syllabusSubtopicId: this.syllabusDataList[i].subTopicId ? this.syllabusDataList[i].subTopicId : null
                  });
                }
              } 
          }
          checkpoints.syllabusCheckpointInclusions = checkpoints.syllabusCheckpointInclusions.reverse();
        }
        if (checkpoints.syllabusCheckpointInclusions.length){
          this.syllabusService.addSyllabusCheckPointInclusions(checkpoints)
        .subscribe(res => this.onCheckPointsAdd(res), err => { this.checkPointTestForm.reset(), this.errorResponse(err); });
        }else{
          this.openSnackBar('There are no chapter topics for Creating Checkpoint', true);
        }
      this.dialogRef.closeAll();
    }
  }
  onCheckPointsAdd(res): void{
    this.onCancelCheckPoints();
    this.getAllChapterTopicSubTopics();
  }
  onCancelCheckPoints(): void{
    this.checkPointTestForm.reset();
  }
  onSelectionChange(event): void {
    this.isCurrentStepIsUpdate = false;
    switch (event.selectedIndex) {
      case 0: if (this.syllabusEryId) {
        this.basicInfo.reset();
        this.syllabusService.syllabusBasicDetails(this.syllabusEryId)
          .subscribe(res => this.afterBasicDetailsGet(res), err => this.errorResponse(err));
      } break;
      case 1: this.markAs(this.chaptersInfo); this.chapterForm.submitted = false; this.getChapters(); break;
      case 2: this.markAs(this.topics); this.topicsForm.submitted = false; this.getChapters(true);
        this.getAllSyllabusTopics(this.syllabusEryId);
        break;
      case 3: this.markAs(this.subTopics); this.subTopicForm.submitted = false; if (!this.syllabusList.length) {
        this.getChapters(true);
      }
        this.getTopicsBasedOnChapter();
        this.getAllSyllabusSubTopics(); break;
      case 4: this.getAllChapterTopicSubTopics(); break;
      case 5: this.completeData.patchValue(this.basicInfo.value);
        this.getAllChapterTopicSubTopics();
        setTimeout(() => {
          this.scrollIntoViewById('last-step');
        }); break;
    }
    setTimeout(() => {
      this.stepper._steps._results[event.selectedIndex].interacted = false;
    }, 500);
  }
  markAs (form: FormGroup): FormGroup {
    const controls: Array<string> = Object.keys(form.controls);

    for (const control of controls) {
      form.controls[control].markAsUntouched();
    }

    return form;
  }
  onSyllabusData(res): void{
     this.syllabusDetails = res.syllabusDetailsView;
  }
  getNameBasedOnId(id, form): any {
    let label = '';
    switch (form) {
      case 'chapter': if (this.syllabusList.find(e => e.id === id)) {
          label = this.syllabusList.find(e => e.id === id).name;
        }
        break;
      case 'topics': if (this.topicsList.find(e => e.id === id)) {
            label = this.topicsList.find(e => e.id === id).name;
          }
        break;
      case 'testTypeId': if (this.testTypes.find(e => e.id === id)) {
            label = this.testTypes.find(e => e.id === id).name;
        }
            break;
      case 'iscumulative': if (this.checkPointTypes.find(e => e.id === id)) {
        label = this.checkPointTypes.find(e => e.id === id).name;
      }
        break;
    }
    return label;
  }
  imgChanged(files, stepper): void {
    if (this.checkFileSize(files[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION , 2097152)) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    reader.onload = (_event) => {
      switch (stepper) {
        case 'syllabus': that.basicInfo.controls.attachment.patchValue({
          fileName: files[0].name,
          fileValue: (<string>reader.result).split(',')[1]
        });
          break;
        case 'chapters': that.chaptersInfo.controls.attachment.patchValue({
          fileName: files[0].name,
          fileValue: (<string>reader.result).split(',')[1]
        });
          break;
        case 'topics': that.topics.controls.attachment.patchValue({
          fileName: files[0].name,
          fileValue: (<string>reader.result).split(',')[1]
        });
          break;
        case 'subTopics': that.subTopics.controls.attachment.patchValue({
          fileName: files[0].name,
          fileValue: (<string>reader.result).split(',')[1]
        });
          break;
      }
      that.changeDetector.detectChanges();
    };
  }
  clearImages(logo = false): void {
    this.basicInfo.patchValue({
      fileName: null,
      fileValue: null
    });
    this.changeDetector.detectChanges();
  }
  courseChanged(event): void {

  }
  openattachment(chapter): void {
    window.open(chapter.fileValue, '_blank');
  }
  openForm(): void {
    this.stepper.reset();
    this.schoolBoardDetails();
    this.syllabusEryId = null;
    this.disableAllDataAdding = false;
    this.isCurrentStepIsUpdate  = false;
    this.closeForm = false;
  }
  onCancel(fromLastStep = false): void {
    if (fromLastStep){
      document.getElementById('reset-button').click(); return;
    }
    this.stepper.reset();
    this.stepper._steps._results.forEach((x, i) => {
      x.interacted = false;
      x.completed = false; 
    });
    this.closeForm = true;
    this.syllabusList = []; 
    this.dataSource.next([]);
    this.supTopicsTableData.next([]);
    this.syllabusEryId = null;
    this.syllabusDataList = [];
    this.isCurrentStepIsUpdate = false;
    this.topicsGridList  = [];
    this.subTopicsList  = [];
    this.coursesList = [];
    this.syllabusEryId = null;
    // this.changeDetector.detectChanges();
    this.getSyllabusTableData();
  }
  getAllChapterTopicSubTopics(isManualChange = false): void{
    this.syllabusService.syllabusChaptersList(this.syllabusEryId)
    .subscribe(res => this.setSyllabusDetails(res, isManualChange), err => this.errorResponse(err));
  }
  setSyllabusDetails(res, isManualChange): void {
    this.syllabusDataList = [];
      if (res.syllabusDetailsView && res.syllabusDetailsView.length){
        this.checkPoints.patchValue({checkPoint: true});
      }
      let tempIds = [];
      res.syllabusDetailsView.map(e => {
          if (e.syllabusCheckPointsListView && e.syllabusCheckPointsListView.length){
            e.syllabusCheckPointsListView.map(el => {
              if (tempIds.findIndex(m => m.syllabusCheckPointsId === el.syllabusCheckPointsId) === -1){
                  tempIds.push(el);
              }
            });
            const checkPoints = tempIds.filter(val => !e.syllabusCheckPointsListView.some(ee => ee.syllabusCheckPointsId === val.syllabusCheckPointsId));
            tempIds = e.syllabusCheckPointsListView;
            checkPoints.map(cp => {
              this.syllabusDataList.push(cp);
            });
            this.syllabusDataList.push(e);
          }else{
            tempIds.map(tm => {
              this.syllabusDataList.push(tm);
            });
            tempIds = [];
            this.syllabusDataList.push(e);
          }
      });
      tempIds.map(tm => {
        this.syllabusDataList.push(tm);
      });
      this.disableAllDataAdding = this.syllabusDataList.some(e => e.syllabusCheckPointsId);
      if (!isManualChange){
        this.checkPoints.patchValue({
          checkPoint: this.disableAllDataAdding
        });
      }
  }
  isNumber(data): any{
    return isNumber(data);
  }

  onChangeCheckPoint(value): void{
    if (!value){
      if (this.syllabusDataList.some(e => e.syllabusCheckPointId)){
        const dialogRef = this.dialogMethod('Please Confirm to Clear all check Points for this syllabus if exists');
        dialogRef.afterClosed().subscribe(action => {
          if (action === AppSettings.CONFIRM) {
            this.syllabusService.deleteSyllabusCheckpoints(this.syllabusEryId)
            .subscribe(res => this.onCheckPointsDelete(res), err => this.errorResponse(err));
          }else {
            this.checkPoints.patchValue({
              checkPoint: true
            });
            this.dialogRef.closeAll();
          }
        });
      }
    } else{
      this.getAllChapterTopicSubTopics(true);
    }
  }
  onCheckPointsDelete(res): void{
    this.disableAllDataAdding = false;
    this.openSnackBar('Check Points Deleted successfully');
    this.getAllChapterTopicSubTopics(true);
  }
  dialogMethod(dialogData: any): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: AppSettings.CANCEL, btn2Text: AppSettings.CONFIRM },
    });
  }
  getFileNamewithPath(file): any{
    if (file){
      return this.storeService.getFilePath(file.fileName ? file.fileName : file); 
    }
  }
  isStepEnable(): any{
    // tslint:disable-next-line: max-line-length
    return (this.syllabusEryId && (this.syllabusList.length || this.topicsGridList.length || (this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusChaptersCount || this.syllabusBasicDetails.syllabusTopicsCount))));
  }
  getRowsSpan(ele, i): any{
    if (this.subTopicsList.findIndex(e => e.chapterName === ele.chapterName) === i){
      return this.subTopicsList.filter(e => e.chapterName === this.subTopicsList[i].chapterName).length;
    } else{
      return false;
    }
  }
  isStepComplete(index): boolean{
    let isComplete = false;
    switch (index) {
      case 0: isComplete = this.stepper.selectedIndex > 0; break;

      case 1: isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusChaptersCount  || this.syllabusList.length); break;

      case 2: isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusTopicsCount  || this.topicsGridList.length); break;

      case 3: isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.syllabusSubTopicsCount  || this.subTopicsList.length); break;

      case 4: isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.checkPointsCount  || this.disableAllDataAdding); break;

      case 5: isComplete = this.syllabusBasicDetails && (this.syllabusBasicDetails.checkPointsCount  || this.disableAllDataAdding); break;
    }
    return isComplete ?  true : false;
  }

  // GET all board related api's
  schoolBoardDetails(onEdit = false): void {
    this.schoolBoardList = [];
    this.gradeSetupService.schoolBoards().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.schoolBoardList.push({
              label: element.name,
              value: element.id
            });
          });
          if (!onEdit){
          this.basicInfo.controls.schoolBoardId.patchValue(this.schoolBoardList[0].value);
          }
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getClassesList();
  }
  // Get Classes to filter table data
  getClassesList(): void {
    this.schoolClassesList = [];
    this.schoolAcademicSessionService.classes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach((element: any) => {
            this.schoolClassesList.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
    this.getCourseList();
  }
  getCourseList(): void {
    this.coursesList = [];
    this.classTimetableService.classTimetableCoursesGet().subscribe(res => {
      if (res.commonViewModel != null) {
        this.coursesList = [];
        res.commonViewModel.map(x => {
          this.coursesList.push({ value: x.id, label: x.name });
        });
      }
    });
  }
}
