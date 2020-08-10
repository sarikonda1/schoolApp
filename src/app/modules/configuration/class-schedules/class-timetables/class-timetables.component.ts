import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ClassPeriodsDataView } from '../model/class-periods-data-view';
import { ClassPeriodsMultiView } from '../model/class-periods-multi-view';
import { ClassTimetableUpdateView } from '../model/class-timetable-update-view';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-class-timetables',
  templateUrl: './class-timetables.component.html',
  styleUrls: ['./class-timetables.component.scss'],
  providers: [ClassTimetableService, GradeSetupService]
})
export class ClassTimetablesComponent extends CommonComponent implements OnInit {
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  @ViewChild('CourseStaffMultiAssignForm') _courseStaffMultiAssignForm;

  filterClasses: any[];
  sectionNamesList: any[];
  classTimetableForm: any;
  timeTableList: any[];
  selectedTimeTableDetails: any[];
  classPeriodsDataView: ClassPeriodsDataView;
  classPeriodsMultiView: Array<ClassPeriodsMultiView>;
  scheduleTempList: any[];
  addTimeTable = false;
  addTemplateView: any[];
  periodTypeList: any[];
  courseList: any[];
  staffList: any[];
  courseStaffMultAssgnForm: any;
  selectedCoursesSatffs = [];
  index: any;
  classTimetableUpdateView: ClassTimetableUpdateView;
  isReqProcessed = Promise.resolve(false);
  title = 'Add Class Timetable';
  isEdit: boolean;
  classTimeTableValue: any;
  disableSaveBtn: boolean;

  constructor(private classTimetableService: ClassTimetableService, private gradeSetupService: GradeSetupService, private _fb: FormBuilder, public commonService: CommonService,
    public dialog: MatDialog, public snackBar: MatSnackBar, private cd: ChangeDetectorRef, private _focusMonitor: FocusMonitor) {
    super();
  }

  ngOnInit(): void {
    this.timeTableForm();
    this.getClassesList();
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
    this.clearSelectedTemplate();
    this.isReqProcessed = Promise.resolve(false);
    this.classTimetableForm.controls['sectionId'].reset();
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(res => {
      if (res.classTimetableSectionsView != null) {
        res.classTimetableSectionsView.map(x => {
          this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
        });
      }
    });
  }

  timeTableForm(): void {
    this.classTimetableForm = this._fb.group({
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      scheduleTemplateId: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      selectedTemplated: new FormControl(null)
    });

    this.courseStaffMultAssgnForm = this._fb.group({
      courseId: new FormControl('', [Validators.required]),
      staffId: new FormControl('', [Validators.required]),
    });
  }

  onSectionSelect(): void {
    if (this.classTimetableForm.valid) {
      this.clearSelectedTemplate();
      this.isReqProcessed = Promise.resolve(false);
      const boardId = this.sectionNamesList.find(s => s.value === this.classTimetableForm.value.sectionId).boardId;
      this.getTemplateDetails(boardId);
    }
  }

  getTemplateDetails(boardId: number): void {
    this.classTimetableForm.controls['selectedTemplated'].reset();
    this.timeTableList = [];
    this.classTimetableService.classTimetableClassTimetableTemplatesGet(this.classTimetableForm.value.sectionId,
      this.classTimetableForm.value.classId, boardId).subscribe(res => {
        this.isReqProcessed = Promise.resolve(true);
        if (res.classTimetableTemplatesDataView != null) {
          res.classTimetableTemplatesDataView.map(x => {
            const startDate = (x.startDate == null) ? null : this.commonService.customDateFormat(x.startDate, this.getSchoolDateFormat()).date;
            const endDate = (x.endDate == null) ? null : this.commonService.customDateFormat(x.endDate, this.getSchoolDateFormat()).date;
            const date = [startDate, endDate].filter(j => j).join(' to ');
            this.timeTableList.push({
              value: x.id,
              label: [x.name, date].filter(j => j).join(' '),
              scheduleTemplateId: x.templateId,
              aSd: x.startDate,
              aEd: x.endDate,
              timeTableId: x.classTimetableId
            });
          });

          if (this.timeTableList.length === 1 && (this.classTimeTableValue === undefined || this.classTimeTableValue === null)) {
            this.classPeriodsDataView = {
              classTimetableId: null
            };
            this.classTimeTableValue = this.timeTableList[0].timeTableId;
          }

          if (this.classTimeTableValue !== undefined && this.classTimeTableValue !== null) {
            const classTimeTable = this.timeTableList.find(sl => sl.timeTableId === this.classTimeTableValue);
            this.classPeriodsDataView.classTimetableId = classTimeTable !== undefined ? classTimeTable.value : null;
            this.classTimetableForm.controls['selectedTemplated'].patchValue(this.classPeriodsDataView.classTimetableId);
            this.onTimeTableSelect(this.classPeriodsDataView.classTimetableId);
          }
        }
      });
  }


  onTimeTableSelect(data: any): void {
    this.selectedTimeTableDetails = [];
    const boardId = this.sectionNamesList.find(x => x.value === this.classTimetableForm.value.sectionId).boardId;
    this.classTimeTableValue = this.timeTableList.find(sl => sl.value === data).timeTableId;

    this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      boardId, data).subscribe(res => {

        if (res.classPeriodsView != null) {
          this.selectedTimeTableDetails = res.classPeriodsView;
        } else {
          this.deleteTimeTable(false);
        }
      });
  }

  clearSelectedTemplate(): void {
    if (this.classPeriodsDataView !== undefined) {
      this.classPeriodsDataView.classTimetableId = null;
    }
    this.classTimetableForm.controls['selectedTemplated'].setValue(null);
    this.selectedTimeTableDetails = [];
    this.classTimeTableValue = null;
  }

  deleteClassTimetable(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.deleteTimeTable();
      }
      if (action === AppSettings.NO) {
        this.dialog.closeAll();
      }
    });
  }

  deleteTimeTable(showSnackBar = true): void {
    this.classTimetableService.classTimetableClassPeriodsDelete(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      this.classTimetableForm.value.selectedTemplated).subscribe(res => {
        this.clearSelectedTemplate();
        if (showSnackBar) {
          this.onSectionSelect();
          this.openSnackBar(res.messages.ResultMessage);
        }
      }, error => {
        this.errorResponse(error);
      });
  }


  addClassTimetable(): void {
    this.title = 'Add Class Timetable';
    this.classPeriodsDataView = {
      classPeriodsMultiView: this.classPeriodsMultiView = []
    };
    this.selectedTimeTableDetails = [];
    this.classPeriodsDataView.classTimetableId = this.classTimetableForm.value.scheduleTemplateId;
    this.getTemplateList();
    this.addTimeTable = true;

  }

  getTemplateList(setTemplateId?: any): void {
    this.scheduleTempList = [];
    this.classTimetableService.classTimetableTemplatesGet().subscribe(res => {
      if (res.commonViewModel != null) {
        res.commonViewModel.map(x => {
          this.scheduleTempList.push({ value: x.id, label: x.name });
        });
        this.classTimetableForm.controls['scheduleTemplateId'].reset();
        if (setTemplateId) {
          this.classTimetableForm.controls['scheduleTemplateId'].setValue(setTemplateId);
        }
      }
    });
  }

  clearBack(): void {
    this.addTimeTable = false;
    this.isEdit = false;
    this.title = 'Add Class Timetable';
    this.clearClassTimeTableFormValidator('classTimetableForm', 'scheduleTemplateId');
    this.clearClassTimeTableFormValidator('classTimetableForm', 'startDate');
    this.clearClassTimeTableFormValidator('classTimetableForm', 'endDate');
    this.addTemplateView = [];
    this.selectedCoursesSatffs = [];
    // if (this.classTimeTableValue) {
      const boardId = this.sectionNamesList.find(sl => sl.value === this.classTimetableForm.value.sectionId).boardId;
      this.getTemplateDetails(boardId);
    // }
  }

  clearClassTimeTableFormValidator(form: any, control: any, clearValidator = true): void {
    if (clearValidator) {
      this[form].controls[control].clearValidators();
    }
    this[form].controls[control].reset();
    this[form].updateValueAndValidity();
  }

  onScheduleTemplateSelect(): void {
    this.addTemplateView = [];
    this.classTimetableService.classTimetableTemplateDetailsGet(this.classTimetableForm.value.scheduleTemplateId).subscribe(res => {
      if (res.periodsListViewModel != null) {
        this.addTemplateView = res.periodsListViewModel;
        this.updateScheduleTemp(this.addTemplateView);
        this.getPeriodTypeList();
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
    const boardId = this.sectionNamesList.find(sl => sl.value === this.classTimetableForm.value.sectionId).boardId;

    this.classTimetableService.classTimetableCoursesGet(boardId, this.classTimetableForm.value.classId).subscribe(res => {
      if (res.commonViewModel != null) {
        res.commonViewModel.map(x => {
          this.courseList.push({ value: x.id, label: x.name });
        });
      }
      else {
        this.openSnackBar(AppSettings.SCHOOL_BOARD_HAS_COURSES, true);
      }
      this.getStaffList();
    });
  }

  getStaffList(): void {
    this.staffList = [];
    this.classTimetableService.classTimetableStaffGet('STFT_TCH').subscribe(res => {
      if (res.commonViewModel != null) {
        res.commonViewModel.map(x => {
          this.staffList.push({ value: x.id, label: x.name });
        });
      }
    });
  }

  updateScheduleTemp(resData: any, isUpdate = false): void {
    if (resData.length > 0) {
      const filterSchoolScheduleTempList = [];

      for (const key of resData) {
        const index = filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
        if (index === -1) {
          const val = [];
          isUpdate ? val.push.apply(val, key.periodsView) : val.push(key);
          const data = { name: key.weekDayName, value: val };
          filterSchoolScheduleTempList.push(data);
        } else {
          const i = filterSchoolScheduleTempList.findIndex(ele => ele.name === key.weekDayName);
          filterSchoolScheduleTempList[i].value.push(key);
        }
      }
      this.sortByWeekday(filterSchoolScheduleTempList);
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
    this.addTemplateView = data;
  }

  onPeriodTypeSelect(data: any, child: any, index: any, childIndex: any): void {
    const hasOptions = this.periodTypeList.find(val => val.value === data.value);
    this.assignViewModelForPost(child);
    this.classPeriodsDataView.classPeriodsMultiView = [];
    this.classPeriodsDataView.classPeriodsMultiView.push({
      courseId: null,
      staffId: null
    });

    if (this.addTemplateView[this.index] !== undefined &&
      this.addTemplateView[this.index].value[childIndex].schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId) {
      this.addTemplateView[this.index].value[childIndex].hasAssignments = false;
      this.addTemplateView[this.index].value[childIndex].courseAndStaffViewModel = [];
    }

    this.index = index;
    if (hasOptions) {
      switch (true) {
        case hasOptions.is_Break === 1:
          this.onSavePeriod();
          break;

        case hasOptions.has_Assignments === 1:
          if (this.addTemplateView.length > 0) {
            if (this.addTemplateView[this.index].value[childIndex].schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId) {
              this.addTemplateView[this.index].value[childIndex].hasAssignments = true;
            }
            this.onSavePeriod(false);
          }
          break;

        case hasOptions.has_Multiple_Assignments === 1:
          this.classPeriodsDataView.classPeriodsMultiView = [];
          this.dialog.open(this.customTemplate, {
            disableClose: true,
            width: '500px',
          });
          break;

        case (hasOptions.has_Assignments === 0 && hasOptions.has_Multiple_Assignments === 0 &&
          hasOptions.is_Break === 0):
          this.onSavePeriod();
          break;

        default:
          break;
      }
    }
  }

  onSavePeriod(showSnackBar = true, isMultiSelect = false, isCloseAll = false): boolean {
    let success = false;
    this.classTimetableService.classTimetableClassTimetableStaffCoursePost(this.classPeriodsDataView).subscribe(res => {
      if (res.classTimetableId != null) {
        this.classPeriodsDataView.classTimetableId = res.classTimetableId;
        this.classTimeTableValue = res.timetableId;
      }
      if (showSnackBar) {
        this.openSnackBar(res.messages.ResultMessage);
      }
      if (isMultiSelect) {
        this.dialog.closeAll();
        this.checkIsAnyPeriodExist();
        this.updateTemplate();
      //  this.selectedCoursesSatffs = [];
      }
      success = true;
      this.selectedCoursesSatffs = [];
    }, error => {
      const errorResult = error.error.messages.ResultMessage;
      if (errorResult === 'TIME_OVERLAP') {
        error.error.messages.ResultMessage =
          'Operation Failed - A Timetable already exists for the selected timeframe or overlaps with an existing timetable.';
      }
      if (errorResult === 'TIME_OVERLAP' && isCloseAll) {
        this.dialog.closeAll();
        this.updateTemplate();
      } else {
        this.errorResponse(error);
      }
      this.disableSaveBtn = false;
    });
    return success;
  }

  checkIsAnyPeriodExist(): void {
    const boardId = this.sectionNamesList.find(x => x.value === this.classTimetableForm.value.sectionId).boardId;
    this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      boardId, this.classPeriodsDataView.classTimetableId).subscribe(period => {
        if (period.classPeriodsView == null) {
          this.classTimetableForm.controls['selectedTemplated'].patchValue(this.classPeriodsDataView.classTimetableId);
          this.deleteTimeTable(false);
          this.classTimetableForm.controls['selectedTemplated'].reset();
          this.classPeriodsDataView.classTimetableId = null;
        }
        this.disableSaveBtn = false;
      });
  }

  assignViewModelForPost(data: any): void {
    const boardId = this.sectionNamesList.find(sl => sl.value === this.classTimetableForm.value.sectionId).boardId;

    this.classPeriodsDataView.classId = this.classTimetableForm.value.classId;
    this.classPeriodsDataView.sectionId = this.classTimetableForm.value.sectionId;
    this.classPeriodsDataView.boardId = boardId;
    this.classPeriodsDataView.templateId = this.classTimetableForm.value.scheduleTemplateId;
    this.classPeriodsDataView.startDate = this.classTimetableForm.value.startDate;
    this.classPeriodsDataView.endDate = this.classTimetableForm.value.endDate;
    this.classPeriodsDataView.schoolSchedulePeriodId = data.schoolSchedulePeriodId;
    this.classPeriodsDataView.classPeriodTypeId = data.periodTypeId;
  }

  onSelectCourseStaffDetails(): void {
    if (this.courseStaffMultAssgnForm.valid) {
      const tableData = [];
      const cname = this.courseList.find(x => x.value === this.courseStaffMultAssgnForm.value.courseId);
      const sname = this.staffList.find(x => x.value === this.courseStaffMultAssgnForm.value.staffId);
      if (cname && sname) {
        tableData.push({
          courseId: cname.value, courseName: cname.label,
          staffId: sname.value, staffName: sname.label
        });
      }
      if (this.selectedCoursesSatffs.length > 0 && this.selectedCoursesSatffs.filter(x => x.courseId === cname.value).length > 0) {
        return this.openSnackBar(AppSettings.DUPLICATE_COURSE_SELECTION, true);
      }
      else {
        this.selectedCoursesSatffs.push.apply(this.selectedCoursesSatffs, tableData);
      }

      this.courseStaffMultAssgnForm.patchValue({
        courseId: null,
        staffId: null
      });
      this._courseStaffMultiAssignForm.resetForm();
    }
  }


  deleteSelectedCourseStaffItem(index: any): void {
    this.selectedCoursesSatffs.splice(index, 1);
  }

  clearStaff(): void {
    this.onMultiSelectCourseStaffSubmit(false, true);
    // .then(v => {
    if (this.addTemplateView.length > 0 && this.addTemplateView[this.index].value !== undefined) {
      // this.addTemplateView[this.index].value.forEach(m => {
      //   if (m.schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId && (m.courseAndStaffViewModel === undefined || !m.courseAndStaffViewModel.length)) {
      //     m.periodTypeId = 0;
      //     m.hasAssignments = false;
      //   }
      // });
      this.courseStaffMultAssgnForm.reset();
     
      this.dialog.closeAll();
      this.cd.detectChanges();
      this.clearDefaultButtonFoucs('edit');
    }
    // });
  }
  onMultiSelectCourseStaffSubmit(showSnackBar = true, isCloseAll = false): any {
    this.disableSaveBtn = true;
    return new Promise(resolve => {
      this.classPeriodsDataView.classPeriodsMultiView = [];
      this.classPeriodsDataView.classPeriodsMultiView.push.apply(this.classPeriodsDataView.classPeriodsMultiView, this.selectedCoursesSatffs);
      this.onSavePeriod(showSnackBar, true, isCloseAll);
      this.clearDefaultButtonFoucs('edit');
    });
  }

  updateTemplate(): void {
    if (this.addTemplateView.length > 0 && this.addTemplateView[this.index] !== undefined) {
      this.addTemplateView[this.index].value.forEach(m => {
        if (m.schoolSchedulePeriodId === this.classPeriodsDataView.schoolSchedulePeriodId) {
          m.hasAssignments = 0;
          m.courseAndStaffViewModel = this.selectedCoursesSatffs;
          if (this.selectedCoursesSatffs.length) {
            m.hasMultipleAssignments = 1;
          } else {
            m.hasMultipleAssignments = 0;
            m.periodTypeId = 0;
          }
        }
      });
      this.cd.detectChanges();
    }
  }

  onChangeStaffCourseDetails(id: any, isCourseSelection: boolean, child: any): void {

    if (child !== undefined && child.courseAndStaffViewModel !== undefined && child.courseAndStaffViewModel.length) {
      this.assignViewModelForPost(child);
      this.classPeriodsDataView.classPeriodsMultiView = [];
      this.classPeriodsDataView.classPeriodsMultiView.push({
        courseId: child.courseAndStaffViewModel[0].courseId,
        staffId: child.courseAndStaffViewModel[0].staffId
      });
    }
    if (isCourseSelection && this.classPeriodsDataView.classPeriodsMultiView.length) {
      this.classPeriodsDataView.classPeriodsMultiView[0].courseId = id;
      this.classPeriodsDataView.classPeriodsMultiView[0].staffId = this.classPeriodsDataView.classPeriodsMultiView[0].staffId !== null ?
        this.classPeriodsDataView.classPeriodsMultiView[0].staffId : null;
    } else {
      this.classPeriodsDataView.classPeriodsMultiView[0].courseId = this.classPeriodsDataView.classPeriodsMultiView[0].courseId !== null ?
        this.classPeriodsDataView.classPeriodsMultiView[0].courseId : null;
      this.classPeriodsDataView.classPeriodsMultiView[0].staffId = id;
    }
    this.onSavePeriod();
  }

  onSubmitClassTimetable(): void {
    if (this.classTimetableForm.invalid) {
      return;
    }
    if (this.classTimetableForm.valid && !this.classPeriodsDataView.classTimetableId) {
      return this.openSnackBar(AppSettings.PLEASE_ASSIGN_COURSE_STAFF, true);
    }
    this.isExistPeriodInClassTimeTable(this.classPeriodsDataView.classTimetableId);
  }

  savedDataView(classTimeTableId: any): void {
    this.classTimeTableValue = classTimeTableId;
    this.classPeriodsDataView.classTimetableId = classTimeTableId;
    this.clearBack();
  }

  editMultiAssignments(data: any, index: any): void {
    this.clearDefaultButtonFoucs('close');
    this.index = index;
    if (data) {
      this.assignViewModelForPost(data);
      this.selectedCoursesSatffs = data.courseAndStaffViewModel.map(({ courseId, staffId, courseName, staffName }) => ({ courseId, staffId, courseName, staffName }));
      this.cd.detectChanges();
      this.dialog.open(this.customTemplate, {
        disableClose: true,
        width: '500px',
      });
      this.courseStaffMultAssgnForm.reset();
    }
  }

  updateClassTimetable(): void {
    this.classPeriodsDataView = {
      classPeriodsMultiView: this.classPeriodsMultiView = []
    };
    this.selectedTimeTableDetails = [];
    this.title = 'Edit Class Timetable';
    this.isEdit = true;
    const timeTable = this.timeTableList.find(ti => ti.value === this.classTimetableForm.value.selectedTemplated);

    this.addTimeTable = false;
    this.classTimetableService.classTimetableClassTimetableByIdGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      this.classTimetableForm.value.selectedTemplated, timeTable.aSd, timeTable.aEd).subscribe(res => {
        if (res.classPeriodsView != null) {
          this.getPeriodTypeList();
          this.getTemplateList(timeTable.scheduleTemplateId);
          this.classPeriodsDataView.classTimetableId = this.classTimetableForm.value.selectedTemplated;
          this.classTimetableForm.controls['startDate'].setValue(timeTable.aSd);
          this.classTimetableForm.controls['endDate'].setValue(timeTable.aEd);
          this.addTemplateView = res.classPeriodsView;
          this.updateScheduleTemp(this.addTemplateView, true);
        }
        else {
          this.openSnackBar(res.messages.ResultMessage);
          return false;
        }
      });
  }

  clearMultiSelectStaff(): void {
    this.selectedCoursesSatffs = [];
  }

  clearDefaultButtonFoucs(buttonId: any): void {
    setTimeout(() => {
      this._focusMonitor.stopMonitoring(document.getElementById(buttonId));
    });
  }

  isExistPeriodInClassTimeTable(classTimeTableId: any): void {
    const boardId = this.sectionNamesList.find(x => x.value === this.classTimetableForm.value.sectionId).boardId;
    this.classTimetableService.classTimetableClassTimetableGet(this.classTimetableForm.value.classId, this.classTimetableForm.value.sectionId,
      boardId, classTimeTableId).subscribe(period => {
        if (period.classPeriodsView != null) {
          if (this.classTimetableForm.valid) {
            this.classTimetableUpdateView = {};
            this.classTimetableUpdateView.id = this.classPeriodsDataView.classTimetableId;
            this.classTimetableUpdateView.startDate = this.classTimetableForm.value.startDate;
            this.classTimetableUpdateView.endDate = this.classTimetableForm.value.endDate;
            if (this.classTimetableUpdateView.id != null) {
              this.classTimetableService.classTimetableClassTimetableUpdatePut(this.classTimetableUpdateView).subscribe(res => {
                this.openSnackBar(res.messages.ResultMessage);
                this.savedDataView(res.timetableId);
              }, error => {
                this.errorResponse(error);
              });
            }
          }
        } else {
          this.classTimetableForm.controls['selectedTemplated'].patchValue(this.classPeriodsDataView.classTimetableId);
          this.deleteTimeTable(false);
          this.classTimetableForm.controls['selectedTemplated'].reset();
          this.classPeriodsDataView.classTimetableId = null;
          return this.openSnackBar(AppSettings.PLEASE_ASSIGN_COURSE_STAFF, true);
        }
      });
  }
}
