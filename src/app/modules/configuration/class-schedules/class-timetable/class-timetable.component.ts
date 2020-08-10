import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import { ClassPeriodsDataView } from '../model/class-periods-data-view';
import { ClassPeriodsMultiView } from '../model/class-periods-multi-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { ClassTimetableUpdateView } from '../model/class-timetable-update-view';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.scss'],
  providers: [GradeSetupService, ClassTimetableService]
})
export class ClassTimetableComponent extends CommonComponent implements OnInit {
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  @ViewChild('ClassTimeTableForm') _classTimeTableForm;
  @ViewChild('CourseStaffMultiAssignForm') _courseStaffMultiAssignForm;

  classTimetableUpdateView: ClassTimetableUpdateView;
  classPeriodsDataView: ClassPeriodsDataView;
  classPeriodsMultiView: Array<ClassPeriodsMultiView>;

  classNames: Array<any> = [];
  filterClasses: Array<any> = [];
  sectionNamesList: Array<any> = [];
  scheduleTempList: Array<any> = [];
  classSectionTempList: Array<any> = [];
  addClassSectionTempList: Array<any> = [];
  updateClassTimetableDetails: Array<any> = [];
  gridDataList: Array<any> = [];

  classTimetableTempList: Array<any> = [];
  periodTypeList: Array<any> = [];
  courseList: Array<any> = [];
  staffList: Array<any> = [];

  filterSchoolScheduleTempList: Array<any> = [];
  httpStatus: any;
  coustomDialog: any;
  currentPeriod: any;
  currentPeriodTypeId: any;
  classTimetableId: any;
  startDate: any;
  endDate: any;
  scheduleTemplateId: any;
  weekDayName: any;
  title: any;
  errorFlag: any;
  isValidDate = false;
  isCourseStaffAssgnValid = false;
  classTimetableFormDetails = false;
  isClassSectionValid = true;
  isTemplateValid = false;
  isHasTemp = false;
  isAddData = true;
  isAddTimetable = false;
  isScheduleTemp = false;
  isSaveDetails = false;

  classTimetableForm: FormGroup;
  courseStaffMultAssgnForm: FormGroup;
  timeTableId: any;

  constructor(private _fb: FormBuilder, private gradeSetupService: GradeSetupService, private classTimetableService: ClassTimetableService,
    public commonService: CommonService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.getClassesList();
    this.timeTableForm();
    this.gridDataList = [];
    this.classTimetableId = null;
    this.classPeriodsDataView = {
      classPeriodsMultiView: this.classPeriodsMultiView = []
    };
    this.updateClassTimetableDetails = [];
    this.title = 'Add Class Timetable';
    this.classTimetableUpdateView = {};
    this.errorFlag = 0;
  }

  timeTableForm(): void {
    this.classTimetableForm = this._fb.group({
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      scheduleTemplateId: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });

    this.courseStaffMultAssgnForm = this._fb.group({
      courseId: new FormControl('', [Validators.required]),
      staffId: new FormControl('', [Validators.required]),
    });
  }

  // Get Classes to filter table data
  getClassesList(): void {
    this.filterClasses = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.filterClasses.push({
              label: element.name,
              value: element.id
            });
            this.classNames = this.filterClasses;
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  // End

  onClassSelect(data: any): void {
    this.sectionNamesList = [];
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(res => {
      if (res.classTimetableSectionsView != null) {
        res.classTimetableSectionsView.map(x => {
          this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
        });
        this.isTemplateValid = false;
        this.isHasTemp = false;
        this.classSectionTempList = [];
        this.classTimetableForm.controls['sectionId'].reset();
      }
    });
  }

  onSelect(): void {
    if (this.classTimetableForm.controls.sectionId.status === AppSettings.VALID && this.classTimetableForm.controls.classId.status === AppSettings.VALID) {
      const sid = this.classTimetableForm.value.sectionId;
      this.classTimetableTempList = [];
      const boardId = this.sectionNamesList.filter(function (val): boolean {
        return val.value === sid;
      });

      this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId,
        this.classTimetableForm.value.classId, boardId[0].boardId).subscribe(res => {
          if (res.classTimetableTemplatesDataView != null) {
            res.classTimetableTemplatesDataView.map(x => {
              if (x.startDate != null && x.endDate != null) {
                const startDate = (x.startDate == null) ? null : this.commonService.customDateFormat(x.startDate, this.getSchoolDateFormat()).date;
                const endDate = (x.endDate == null) ? null : this.commonService.customDateFormat(x.endDate, this.getSchoolDateFormat()).date;
                this.classTimetableTempList.push({
                  value: x.id, label: x.name + ' ' + startDate + ' ' + 'to' + ' ' + endDate,
                  scheduleTemplateId: x.templateId,
                  aSd: x.startDate,
                  aEd: x.endDate,
                  timeTableId: x.classTimetableId
                });
              }
              else {
                this.classTimetableTempList.push({
                  value: x.id, label: x.name, scheduleTemplateId: x.templateId, aSd: x.startDate,
                  aEd: x.endDate,
                  timeTableId: x.classTimetableId
                });
              }
            });

            this.classTimetableForm.controls['scheduleTemplateId'].reset();
            this.isTemplateValid = true;
            this.isHasTemp = false;
            this.isAddData = true;
            this.isAddTimetable = false;

            if (this.classTimetableTempList.length === 1) {
              this.classTimetableForm.controls['scheduleTemplateId'].setValue(this.classTimetableTempList[0].value);
              // localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableForm.value.scheduleTemplateId).timeTableId);
              this.onTemplateSelect(this.classTimetableTempList[0].value);
            }
            else {
              this.classSectionTempList = [];
            }
          }
          else {
            this.isTemplateValid = false;
            this.isHasTemp = true;
            this.classTimetableTempList = [];
            this.classSectionTempList = [];
          }
        });
    }
    else {
      this.isClassSectionValid = true;
    }
  }

  onTemplateSelect(data: any): void {
    this.classSectionTempList = [];
    const filterClassSectionList = this.classTimetableTempList.find(x => x.value === data.value || data);
    this.scheduleTemplateId = filterClassSectionList.scheduleTemplateId;
    this.classTimetableId = data.value || data;
    // localStorage.removeItem('_templateId');
    // localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableId).timeTableId);
    
    const sid = this.classTimetableForm.value.sectionId;
    const boardId = this.sectionNamesList.filter(function (val): boolean {
      return val.value === sid;
    });

    this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      boardId[0].boardId, this.classTimetableId).subscribe(res => {
        if (res.classPeriodsView != null) {
          this.classSectionTempList = res.classPeriodsView;
        }
      });
  }

  updateScheduleTemp(resData: any): void {
    if (resData.length > 0) {
      this.filterSchoolScheduleTempList = [];

      for (const key of resData) {
        const index = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
        if (index === -1) {
          const val = [];
          val.push(key);
          const data = { name: key.weekDayName, value: val };
          this.filterSchoolScheduleTempList.push(data);
        } else {
          const i = this.filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
          this.filterSchoolScheduleTempList[i].value.push(key);
        }
      }
      this.sortByWeekday(this.filterSchoolScheduleTempList);
    }
  }

  sortByWeekday(data): void {
    const sorter = {
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6,
      'sunday': 7
    };

    data.sort(function sortByDay(a, b): number {
      const day1 = a.name.toLowerCase();
      const day2 = b.name.toLowerCase();
      return sorter[day1] - sorter[day2];
    });

    if (this.isAddTimetable === true) {
      this.addClassSectionTempList = data;
    }
    else {
      this.classSectionTempList = data;
    }
  }

  addClassTimetable(): void {
    if (this.errorFlag === 0) {
      localStorage.removeItem('_tId');
      this.isAddData = false;
      this.isHasTemp = false;
      this.isAddTimetable = true;
      this.classSectionTempList = [];
      this.isScheduleTemp = false;
      this.classTimetableId = null;
      this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
      this.classTimetableForm.controls['startDate'].clearValidators();
      this.classTimetableForm.controls['endDate'].clearValidators();
      this.classTimetableForm.controls['startDate'].setValue(null);
      this.classTimetableForm.controls['endDate'].setValue(null);
      this.classPeriodsDataView.classTimetableId = this.classTimetableId;
      this.isTemplateValid = false;
      this.getTemplateList();
      this.validateData();
      this.title = 'Add Class Timetable';
      this.classTimetableFormDetails = false;
      this.clearDateValidators();
    }
  }

  getTemplateList(): void {
    this.scheduleTempList = [];
    this.classTimetableService.classTimetableTemplatesGet().subscribe(res => {
      if (res.commonViewModel != null) {
        res.commonViewModel.map(x => {
          this.scheduleTempList.push({ value: x.id, label: x.name });
        });
        if (this.errorFlag === 0) {
          this.classTimetableForm.controls['scheduleTemplateId'].setValue(0);
          this.classTimetableFormDetails = false;
        }
        else {
          this.classTimetableForm.controls['scheduleTemplateId'].setValue(this.scheduleTemplateId);
        }
      }
    });
  }

  onScheduleTemplateSelect(): void {
    // if (JSON.parse(localStorage.getItem('_templateId')) == null) {
    //   localStorage.setItem('_templateId', this.classTimetableTempList.find(x => x.value === this.classTimetableForm.value.scheduleTemplateId).timeTableId);
    // }

    this.addClassSectionTempList = [];
    this.classTimetableService.classTimetableTemplateDetailsGet(this.classTimetableForm.value.scheduleTemplateId).subscribe(res => {
      if (res.periodsListViewModel != null) {
        this.addClassSectionTempList = res.periodsListViewModel;
        this.updateScheduleTemp(this.addClassSectionTempList);
        this.getPeriodTypeList();
        if (this.classTimetableId != null) {
          this.isScheduleTemp = true;
        }
      }
    });
  }

  getPeriodTypeList(): void {
    this.periodTypeList = [];
    this.classTimetableService.classTimetableClassPeriodTypesGet().subscribe(res => {
      if (res.classPeriodTypesDropDownView != null) {
        res.classPeriodTypesDropDownView.map(x => {
          this.periodTypeList.push({
            value: x.id, label: x.name, is_Break: x.is_Break,
            has_Assignments: x.has_Assignments, has_Multiple_Assignments: x.has_Multiple_Assignments
          });
        });
        this.getCourseList();
      }
    });
  }

  getCourseList(): void {
    this.courseList = [];
    const sectionId = this.classTimetableForm.value.sectionId;
    const boardId = this.sectionNamesList.filter(function (val): boolean {
      return val.value === sectionId;
    });

    this.classTimetableService.classTimetableCoursesGet(boardId[0].boardId, this.classTimetableForm.value.classId).subscribe(res => {
      if (res.commonViewModel != null) {
        this.courseList = [];
        res.commonViewModel.map(x => {
          this.courseList.push({ value: x.id, label: x.name });
        });
      }
      else {
        this.openSnackBar(AppSettings.SCHOOL_BOARD_HAS_COURSES, true);
      }
      this.getStaffList();
      this.errorFlag = 0;
    });
  }

  getStaffList(): void {
    this.staffList = [];
    this.classTimetableService.classTimetableStaffGet('STFT_TCH').subscribe(res => {
      if (res.commonViewModel != null) {
        this.staffList = [];
        res.commonViewModel.map(x => {
          this.staffList.push({ value: x.id, label: x.name });
        });
      }
    });
  }

  onPeriodTypeSelect(data: any, child: any, weekDayName: any): void {
    const periodTypeId = data.value;
    const hasOptions = this.periodTypeList.filter(function (val): boolean {
      return val.value === periodTypeId;
    });
    this.currentPeriod = child;
    this.currentPeriodTypeId = periodTypeId;
    this.weekDayName = weekDayName;

    if (hasOptions.length > 0) {
      switch (true) {
        case hasOptions[0].is_Break === 1:
          this.assignLanguage(child, weekDayName);
          this.onSubmitIsBreakDetails();
          break;

        case hasOptions[0].has_Assignments === 1:
          this.assignCourseStaff(child, weekDayName);
          break;

        case hasOptions[0].has_Multiple_Assignments === 1:
          this.assignLanguage(child, weekDayName);
          this.courseStaffMultAssgnForm.reset();
          this.coustomDialog = this.dialog.open(this.customTemplate, {
            disableClose: true,
            width: '500px',
          });
          break;

        case (hasOptions[0].has_Assignments === 0 && hasOptions[0].has_Multiple_Assignments === 0 &&
          hasOptions[0].is_Break === 0):
          this.assignLanguage(child, weekDayName);
          this.onSubmitIsBreakDetails();
          break;

        default:
          break;
      }
    }
  }

  assignLanguage(data: any, weekDayName: any): void {
    if (this.updateClassTimetableDetails.length > 0) {
      this.updateClassTimetableDetails.forEach(n => {
        if (n.weekDayName === weekDayName) {
          n.periodsView.forEach(m => {
            if (m.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
              m.hasAssignments = 0;
              m.hasMultipleAssignments = 0;
              m.courseAndStaffViewModel = [];
            }
          });
        }
      });
    }
    else {
      this.addClassSectionTempList.forEach(e => {
        if (e.name === data.weekDayName) {
          e.value.forEach(e1 => {
            if (e1.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
              e1.hasAssignments = false;
            }
          });
        }
      });
    }
  }

  assignCourseStaff(data: any, weekDayName: any): void {
    if (this.updateClassTimetableDetails.length > 0) {
      this.updateClassTimetableDetails.forEach(a => {
        if (a.weekDayName === weekDayName) {
          a.periodsView.forEach(b => {
            if (b.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
              b.hasAssignments = 1;
              b.hasMultipleAssignments = 0;
              b.courseAndStaffViewModel = [];
              b.courseAndStaffViewModel.push({
                courseId: null, staffId: null
              });
            }
          });
        }
      });
    }
    else {
      this.addClassSectionTempList.forEach(e => {
        if (e.name === data.weekDayName) {
          e.value.forEach(e1 => {
            if (e1.schoolSchedulePeriodId === data.schoolSchedulePeriodId) {
              e1.hasAssignments = true;
            }
          });
        }
      });
    }

    this.assignViewModelForPost();
    this.classPeriodsDataView.classPeriodsMultiView = [];
    this.classPeriodsDataView.classPeriodsMultiView.push({
      courseId: null,
      staffId: null
    });
    this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(res => {
      if (res.statusCode === this.httpStatus.OK) {
        if (res.classTimetableId != null) {
          this.classTimetableId = res.classTimetableId;
          this.setForm(res);
          this.isScheduleTemp = true;
        }
        this.clearHasMultiAssignments();
        this.openSnackBar(res.messages.ResultMessage);
      }
      else {
        this.openSnackBar(res.messages.ResultMessage, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  setForm(data: any): void {
    this.classTimetableForm.controls['classId'].setValue(data.classId);
    this.classTimetableForm.controls['sectionId'].setValue(data.sectionId);
    this.timeTableId = data.timetableId;
  }

  closeDialog(): void {
    if (!this.gridDataList.length){
      this.clearStaff();
    }
    this.gridDataList = [];
    this.commonService.setOverlay(AppSettings.HIDE);
    if (this.updateClassTimetableDetails.length) {
      const tempweekDay = this.weekDayName;
      this.updateClassTimetableDetails.forEach(element => {
        if (element.weekDayName === this.weekDayName) {
          element.periodsView.forEach(element1 => {
            if (element1.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId && this.currentPeriod.courseAndStaffViewModel.length === 0) {
              element1.periodTypeId = 0;
            }
          });
          this.weekDayName = null;
        }
      });
     this.weekDayName = tempweekDay;
    }
    else if (this.addClassSectionTempList.length) {
      this.addClassSectionTempList.forEach(element => {
        if (element.name === this.currentPeriod.weekDayName) {
          element.value.forEach(element1 => {
            if (element1.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId && (this.currentPeriod.isEdit.length === 0 || this.currentPeriod.isEdit === false)) {
              element1['periodTypeId'] = 0;
            }
          });
        }
      });
    }
    this.dialog.closeAll();
  }

  onSelectCourseStaffDetails(): boolean {
    let errorFlag = 0;
    if (this.courseStaffMultAssgnForm.status === AppSettings.VALID) {
      const tableData = [];
      const cname = this.courseList.find(x => x.value === this.courseStaffMultAssgnForm.value.courseId);
      const sname = this.staffList.find(x => x.value === this.courseStaffMultAssgnForm.value.staffId);

      tableData.push({
        courseId: cname.value, courseName: cname.label,
        staffId: sname.value, staffName: sname.label
      });
      if (this.gridDataList.length > 0) {
        if (this.gridDataList.filter(x => x.courseId === cname.value).length > 0) {
          this.openSnackBar(AppSettings.DUPLICATE_COURSE_SELECTION, true);
          errorFlag = 1;
          return false;
        }
      }

      if (errorFlag === 0) {
        tableData.forEach(element => {
          this.gridDataList.push(element);
        });
        this._courseStaffMultiAssignForm.resetForm();
      }
    }
    else {
      this.isCourseStaffAssgnValid = true;
      return false;
    }
  }

  deleteItem(index: any): void {
    this.gridDataList.splice(index, 1);
  }

  onSubmitMultiAssignmentsDetails(): void {
    this.isSaveDetails = true;
    this.assignViewModelForPost();
    this.assignCourseStaffGridDetails();
    this.onSubmitHasMultiAssignments();
  }

  onSubmitStaffCourseDetails(child: any, value: any, label: any, cs: any): void {
    this.currentPeriod = child;
    if (label.textContent === 'Course') {
      this.currentPeriod.courseId = value;
    }

    else {
      this.currentPeriod.staffId = value;
    }

    if (this.updateClassTimetableDetails.length > 0) {
      if (this.currentPeriod.staffId === undefined) {
        this.currentPeriod.staffId = cs.staffId;
      }

      if (this.currentPeriod.courseId === undefined) {
        this.currentPeriod.courseId = cs.courseId;
      }
    }

    this.assignViewModelForPost();
    this.classPeriodsDataView.classPeriodsMultiView = [];
    this.classPeriodsDataView.classPeriodsMultiView.push({
      courseId: this.currentPeriod.courseId,
      staffId: this.currentPeriod.staffId
    });
    this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(res => {
      if (res.statusCode === this.httpStatus.OK) {
        if (res.classTimetableId != null) {
          this.classTimetableId = res.classTimetableId;
          this.setForm(res);
          this.isScheduleTemp = true;
        }
        this.clearHasMultiAssignments();
        this.openSnackBar(res.messages.ResultMessage);
      }
      else {
        this.openSnackBar(res.messages.ResultMessage, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  onSubmitIsBreakDetails(): void {
    this.assignViewModelForPost();
    this.classPeriodsDataView.classPeriodsMultiView = [];
    this.classPeriodsDataView.classPeriodsMultiView.push({
      courseId: null,
      staffId: null
    });

    this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(res => {
      if (res.statusCode === this.httpStatus.OK) {
        if (res.classTimetableId != null) {
          this.classTimetableId = res.classTimetableId;
          this.setForm(res);
          this.isScheduleTemp = true;
        }
        this.clearHasMultiAssignments();
        this.openSnackBar(res.messages.ResultMessage);
      }
      else {
        this.openSnackBar(res.messages.ResultMessage, true);
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  assignViewModelForPost(): void {
    if (this.classTimetableId != null) {
      this.classPeriodsDataView.classTimetableId = this.classTimetableId;
    }

    const sectionId = this.classTimetableForm.value.sectionId;
    const boardId = this.sectionNamesList.filter(function (val): boolean {
      return val.value === sectionId;
    });

    this.classPeriodsDataView.classId = this.classTimetableForm.value.classId;
    this.classPeriodsDataView.sectionId = this.classTimetableForm.value.sectionId;
    this.classPeriodsDataView.boardId = boardId[0].boardId;
    this.classPeriodsDataView.templateId = this.classTimetableForm.value.scheduleTemplateId;
    this.classPeriodsDataView.startDate = this.classTimetableForm.value.startDate;
    this.classPeriodsDataView.endDate = this.classTimetableForm.value.endDate;
    this.classPeriodsDataView.schoolSchedulePeriodId = this.currentPeriod.schoolSchedulePeriodId;
    this.classPeriodsDataView.classPeriodTypeId = this.currentPeriodTypeId || this.currentPeriod.periodTypeId;
  }

  assignCourseStaffGridDetails(): void {
    this.classPeriodsDataView.classPeriodsMultiView = [];
    this.gridDataList.forEach(e => {
      this.classPeriodsDataView.classPeriodsMultiView.push({
        courseId: e.courseId,
        staffId: e.staffId
      });
    });
    if (this.updateClassTimetableDetails.length > 0) {
      this.updateClassTimetableDetails.forEach(n => {
        if (n.weekDayName === this.weekDayName) {
          n.periodsView.forEach(m => {
            if (m.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId) {
              m.hasAssignments = 0;
              m.courseAndStaffViewModel = this.gridDataList;
              if (this.gridDataList.length){
                m.hasMultipleAssignments = 1;
              } else{
                m.hasMultipleAssignments = 0;
                m.periodTypeId = 0;
              }
            }
          });
        }
      });
    }
    else {
      this.addClassSectionTempList.forEach(p => {
        if (p.name === this.currentPeriod.weekDayName) {
          p.value.forEach(q => {
            if (q.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId) {
              const index = p.value.findIndex(ele => ele.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId);

              q.hasAssignments = 0;
              q.courseAndStaffViewModel = this.gridDataList;
              if (this.gridDataList.length){
                q.hasMultipleAssignments = 1;
              } else{
                q.hasMultipleAssignments = 0;
                q.periodTypeId = 0;
              }

              p.value[index].isEdit = false;
              for (const key of this.gridDataList) {
                if (p.value[index].isEdit === false) {
                  p.value[index].isEdit = [];
                  p.value[index].isEdit.push(key);
                }
                else {
                  p.value[index].isEdit.push(key);
                }
              }
            }
          });
        }
      });
    }
  }

  onSubmitHasMultiAssignments(): void {
    this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(res => {
      if (res.statusCode === this.httpStatus.OK) {
        this.dialog.closeAll();
        this.isSaveDetails = false;

        if (res.classTimetableId != null) {
          this.classTimetableId = res.classTimetableId;
          this.setForm(res);
          this.isScheduleTemp = true;
        }
        this.openSnackBar(res.messages.ResultMessage);
        this.gridDataList = [];
      }
      else {
        this.openSnackBar(res.messages.ResultMessage, true);
      }
    }, error => {
      this.isSaveDetails = false;
      this.errorResponse(error);
    });
  }

  clearHasMultiAssignments(): void {
    this.addClassSectionTempList.forEach(p => {
      if (p.name === this.currentPeriod.weekDayName) {
        p.value.forEach(q => {
          if (q.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId) {
            const index = p.value.findIndex(ele => ele.schoolSchedulePeriodId === this.currentPeriod.schoolSchedulePeriodId);
            p.value[index].isEdit = [];
          }
        });
      }
    });
  }

  editMultiAssignments(data: any, periodTypeId: any): void {
    this.currentPeriod = data;
    this.currentPeriodTypeId = periodTypeId;
    this.gridDataList = data.isEdit || data.courseAndStaffViewModel;
    this.coustomDialog = this.dialog.open(this.customTemplate, {
      disableClose: true,
      width: '500px',
    });
    this.courseStaffMultAssgnForm.reset();
  }

  deleteClassTimetable(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.classTimetableService.classTimetableClassPeriodsDelete(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
          this.classTimetableForm.value.scheduleTemplateId).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
      }
      if (action === AppSettings.NO) {
        this.dialog.closeAll();
      }
    });
  }

  deleteResponse(response: any): void {
    this.isTemplateValid = false;
    this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
    this.validateStartEndDate();
    this.openSnackBar(response.messages.ResultMessage);
  }

  updateClassTimetable(): void {
    localStorage.setItem('_tId', this.classTimetableTempList.find(x => x.value === this.classTimetableForm.value.scheduleTemplateId).timeTableId);
    const datePipe = new DatePipe('en-US');

    this.classTimetableTempList.forEach(e => {
      if (e.value === this.classTimetableForm.value.scheduleTemplateId) {
        this.scheduleTemplateId = e.scheduleTemplateId;
        this.startDate = datePipe.transform(e.aSd, AppSettings.DATE_FORMAT);
        this.endDate = datePipe.transform(e.aEd, AppSettings.DATE_FORMAT);
      }
    });

    this.classTimetableService.classTimetableClassTimetableByIdGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      this.classTimetableForm.value.scheduleTemplateId, this.startDate, this.endDate).subscribe(res => {
        if (res.classPeriodsView != null) {
          this.classSectionTempList = [];
          this.addClassSectionTempList = [];
          this.updateClassTimetableDetails = [];
          this.isAddData = false;
          this.isHasTemp = false;
          this.isAddTimetable = true;
          this.isTemplateValid = false;
          this.errorFlag = 1;
          this.getPeriodTypeList();
          this.getTemplateList();
          this.classTimetableForm.controls['startDate'].setValue(this.startDate);
          this.classTimetableForm.controls['endDate'].setValue(this.endDate);
          this.classTimetableForm.controls['startDate'].clearValidators();
          this.classTimetableForm.controls['endDate'].clearValidators();
          this.updateClassTimetableDetails = res.classPeriodsView;
          this.title = 'Edit Class Timetable';
          this.isScheduleTemp = true;
          this.validateData();
        }
        else {
          this.openSnackBar(res.messages.ResultMessage);
          return false;
        }
      });
  }

  validateStartEndDate(): void {
    this.isAddData = true;
    this.isHasTemp = false;
    this.isAddTimetable = false;
    this.classTimetableForm.reset();
    this.classSectionTempList = [];
    this.addClassSectionTempList = [];
    this.updateClassTimetableDetails = [];
    this.title = 'Add Class Timetable';
    this._classTimeTableForm.resetForm();
  }

  validateData(): void {
    if ((this.classTimetableForm.value.startDate == null
      || this.classTimetableForm.value.startDate === undefined) && (this.classTimetableForm.value.endDate == null || this.classTimetableForm.value.endDate === undefined)) {
      this.isValidDate = false;
      this.classTimetableFormDetails = false;
    } else {
      this.isValidDate = true;
    }
  }

  clearDateValidators(): void {
    if ((this.classTimetableForm.value.startDate == null
      || this.classTimetableForm.value.startDate === undefined) && (this.classTimetableForm.value.endDate == null || this.classTimetableForm.value.endDate === undefined)) {
      if (this.classTimetableForm.controls['startDate'].invalid || this.classTimetableForm.controls['endDate'].invalid) {
        this.classTimetableForm.controls['startDate'].clearValidators();
        this.classTimetableForm.controls['startDate'].updateValueAndValidity();
        this.classTimetableForm.controls['endDate'].clearValidators();
        this.classTimetableForm.controls['endDate'].updateValueAndValidity();
      }
    }
  }

  onSelectClassTimetable(): boolean {
    this.validateData();
   // this.clearDateValidators();

    if (this.classTimetableForm.controls.scheduleTemplateId.value === 0) {
      this.classTimetableForm.controls['scheduleTemplateId'].setValue(null);
    }
    if (this.classTimetableForm.status === AppSettings.VALID) {
      this.classTimetableUpdateView.id = this.classTimetableId;
      this.classTimetableUpdateView.startDate = this.classTimetableForm.value.startDate;
      this.classTimetableUpdateView.endDate = this.classTimetableForm.value.endDate;
      if (this.classTimetableId != null) {
        this.classTimetableService.classTimetableClassTimetableUpdatePut(this.classTimetableUpdateView).subscribe(res => {
          if (res.statusCode === this.httpStatus.OK) {
            this.isValidDate = false;
            this.openSnackBar(res.messages.ResultMessage);
            this.savedDataView(res.timetableId);
          }
          else {
            this.openSnackBar(res.messages.ResultMessage, true);
          }
        }, error => {
          this.errorResponse(error);
        });
      }
      else {
        this.openSnackBar(AppSettings.PLEASE_ASSIGN_COURSE_STAFF, true);
      }
    }
    else {
      this.classTimetableFormDetails = true;
      return false;
    }
  }

  savedDataView(data: any): void {
    const sid = this.classTimetableForm.value.sectionId;
    this.classTimetableTempList = [];
    const boardId = this.sectionNamesList.filter(function (val): boolean {
      return val.value === sid;
    });

    this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId, this.classTimetableForm.value.classId,
      boardId[0].boardId).subscribe(res => {
        if (res.classTimetableTemplatesDataView != null) {
          res.classTimetableTemplatesDataView.map(x => {
            if (x.startDate != null && x.endDate != null) {
              const startDate = (x.startDate == null) ? null : this.commonService.customDateFormat(x.startDate, this.getSchoolDateFormat()).date;
              const endDate = (x.endDate == null) ? null : this.commonService.customDateFormat(x.endDate, this.getSchoolDateFormat()).date;
              this.classTimetableTempList.push({
                value: x.id, label: x.name + ' ' + startDate + ' ' + 'to' + ' ' + endDate,
                scheduleTemplateId: x.templateId,
                aSd: x.startDate,
                aEd: x.endDate,
                timeTableId: x.classTimetableId
              });
            }
            else {
              this.classTimetableTempList.push({
                value: x.id, label: x.name, scheduleTemplateId: x.templateId, aSd: x.startDate,
                aEd: x.endDate,
                timeTableId: x.classTimetableId
              });
            }
          });
          this.addClassSectionTempList = [];
          this.updateClassTimetableDetails = [];
          this.classTimetableTempList.forEach(n => {
            if (n.timeTableId === data) {
              this.classTimetableId = n.value;
            }
          });

          this.classTimetableForm.controls['scheduleTemplateId'].setValue(this.classTimetableId);
          this.onTemplateSelect(this.classTimetableId);
          this.isTemplateValid = true;
          this.isHasTemp = false;
          this.isAddData = true;
          this.isAddTimetable = false;
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
        }
      }, error => {
        this.isSaveDetails = false;
        this.errorResponse(error);
      });
  }

  clearBack(): void {
    this.classTimetableFormDetails = false;
    if (JSON.parse(localStorage.getItem('_tId')) != null) {
      this.savedDataView(JSON.parse(localStorage.getItem('_tId')));
    }
    //  else if (JSON.parse(localStorage.getItem('_templateId')) != null) {
    //   this.savedDataView(JSON.parse(localStorage.getItem('_templateId')));
    // } 
    
    else if (this.classTimetableId != null) {
      this.savedDataView(this.timeTableId);
    } else {
      this.isAddData = true;
      this.isAddTimetable = false;
      this.addClassSectionTempList = [];
      this.updateClassTimetableDetails = [];
      this.onSelect();
    }
    this.clearDateValidators();
  }

  clearStaff(): void {
    this.gridDataList = [];
    this.onSubmitMultiAssignmentsDetails();
  }
}
