import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {  MatSnackBar } from '@angular/material';

import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import {ClassTimetableUpdateView} from '../../configuration/class-schedules/model/class-timetable-update-view';
import {ClassPeriodsDataView} from '../../configuration/class-schedules/model/class-periods-data-view';
import {ClassPeriodsMultiView} from '../../configuration/class-schedules/model/class-periods-multi-view';

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.scss'],
  providers: [GradeSetupService, ClassTimetableService]
})
export class StudentTimetableComponent extends CommonComponent implements OnInit {
  @ViewChild('ClassTimeTableForm') _classTimeTableForm;

  classTimetableUpdateView: ClassTimetableUpdateView;
  classPeriodsDataView: ClassPeriodsDataView;
  classPeriodsMultiView: Array<ClassPeriodsMultiView>;

  classNames: Array<any> = [];
  filterClasses: Array<any> = [];
  classSectionTempList: Array<any> = [];
  updateClassTimetableDetails: Array<any> = [];
  gridDataList: Array<any> = [];

  classTimetableTempList: Array<any> = [];

  staffList: Array<any> = [];

  httpStatus: any;

  classTimetableId: any;
  startDate: any;
  endDate: any;
  scheduleTemplateId: any;
  weekDayName: any;
  title: any;
  errorFlag: any;
  isValidDate = false;
  classTimetableFormDetails = false;
  isTemplateValid = false;
  isHasTemp = false;
  isAddData = true;
  isAddTimetable = false;
  classTimetableForm: FormGroup;
  classSectionInfo: any;

  constructor(private _fb: FormBuilder,
              private gradeSetupService: GradeSetupService,
              private classTimetableService: ClassTimetableService,
    public commonService: CommonService,
               public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.classSectionInfo = {
      className: '',
      sectionName: ''
    };
    this.httpStatus = require('http-status-codes');
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
    if (this.getTokenParam('_as')) {
      this.onSelect();
    } else {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
    }
  }

  timeTableForm(): void {
    this.classTimetableForm = this._fb.group({
      scheduleTemplateId: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });


  }



  onSelect(): void {
      this.classTimetableTempList = [];

      this.classTimetableService.classTimetableClassTimetableTemplatesGet().subscribe(res => { 
          if (res.classSectionView) {
            this.classSectionInfo = res.classSectionView;
          }
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

             if (this.classTimetableTempList.length > 0) {
              this.classTimetableForm.controls['scheduleTemplateId'].setValue(this.classTimetableTempList[0].value);
              this.onTemplateSelect(this.classTimetableTempList[0].value);
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

  onTemplateSelect(data: any): void {
    this.classSectionTempList = [];
    const filterClassSectionList = this.classTimetableTempList.find(x => x.value === data.value || data);
    this.scheduleTemplateId = filterClassSectionList.scheduleTemplateId;
    this.classTimetableId = data.value || data;
    this.classTimetableService.classTimetableClassTimetableGet(null, null, null, this.classTimetableId).subscribe(res => {
        if (res.classPeriodsView != null) {
          this.classSectionTempList = res.classPeriodsView;
        }
      });
  }

}
