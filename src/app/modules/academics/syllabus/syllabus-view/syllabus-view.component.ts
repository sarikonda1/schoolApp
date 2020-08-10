import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSettings } from 'app/app.constants';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { CommonService } from 'app/service/common.service';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-syllabus-view',
  templateUrl: './syllabus-view.component.html',
  styleUrls: ['./syllabus-view.component.scss'],
  providers: [StaffCommonService, SyllabusSchedulesService]
})
export class SyllabusViewComponent extends CommonComponent implements OnInit {
  classSectionProgressForm: FormGroup;
  teachersControl = new FormControl(null);
  validate = true;
  staffList = Promise.resolve([]);
  onLoad = false;
  teachersData: any;
  syllabusData: any;
  completedColor = '#4caf50';
  // tslint:disable-next-line: max-line-length
  constructor(public _fb: FormBuilder, public staffCommonService: StaffCommonService, public commonService: CommonService, public scheduleService: SyllabusSchedulesService, public snackBar: MatSnackBar){
    super();
  }
  ngOnInit(): void {
    this.initializeForms();
    this.getAvailableSchoolBoards();
    this.getStaffList();
  }
  initializeForms(): void{
    this.classSectionProgressForm = this._fb.group({
      boardId: [null],
      classId: [null],
      sectionId: [null]
    });
  }
  getStaffList(): void {
    this.staffCommonService.fetchStaffs(AppSettings.TEACHING_STAFF_CODE)
      .subscribe(res => this.setStaffData(res));
  }
  setStaffData(staffData): void {
    const dropDownData = staffData.map(x => ({
      label: x.name,
      value: x.id
    }));
    this.staffList = Promise.resolve(dropDownData);
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
        if (!this.classSectionProgressForm.value.boardId){
          this.currentBoardId = this.availableSchoolBoards[0].value;
          this.getAvailableClasses(this.currentBoardId);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  boardChanged(event, onManualChange = false): void {
    if (event.value) {
      if (!onManualChange){
        this.classSectionProgressForm.patchValue({
          classId: null,
          sectionId: null
        });
        this.availableClasses = [];
        this.availableSections = [];
      }
      this.getAvailableClasses(event.value);
    }
  }
  classChanged(event, onManualChange= false): void {
    if (!onManualChange){
      this.classSectionProgressForm.patchValue({
        sectionId: null
      });
      this.availableSections = [];
    }
    this.getAvailableSections(this.classSectionProgressForm.value.boardId, this.classSectionProgressForm.value.classId);
  }
  onClickTeacher(): void{
    if (this.teachersControl.valid){
        this.scheduleService.adminTeacherSyllabusProgress(this.teachersControl.value)
        .subscribe(res => this.onGetProgress(res, true), err => this.errorResponse(err));
    }
  }
  onClickClassSection(): void{
      if (this.classSectionProgressForm.valid){
        // tslint:disable-next-line: max-line-length
        this.scheduleService.adminClassSyllabusProgress(this.classSectionProgressForm.value.boardId, this.classSectionProgressForm.value.classId, this.classSectionProgressForm.value.sectionId)
        .subscribe(res => this.onGetProgress(res), err => this.errorResponse(err));
      }
  }
  onGetProgress(res, teacher = false): void{
    this.teachersData = null;
    this.syllabusData = null;
    if (teacher){
      this.teachersData = res;
    } else{
      this.syllabusData = res;
    } 
    this.onLoad = true;
  }
  back(): void{
    history.back();
  }
  onClear(fromTeacher = true): void{
    this.onLoad = false;
    if (fromTeacher){
      this.teachersControl.reset();
    }else{
      this.availableClasses = [];
      this.availableSections = [];
      this.classSectionProgressForm.reset();
    }
  }
}