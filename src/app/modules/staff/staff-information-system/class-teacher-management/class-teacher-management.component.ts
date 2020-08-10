import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { DropDownConfModel } from 'app/models/drop-down-conf-view';
import { ClassTeacherAssignmentService } from 'app/service/staff/class-teacher-assignment.service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { ClassTeacherAssignmentModel } from '../model/class-teacher-assignment-model';
import { AppSettings } from 'app/app.constants';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-class-teacher-management',
  templateUrl: './class-teacher-management.component.html',
  styleUrls: ['./class-teacher-management.component.scss'],
  providers: [GradeSetupService, ClassTeacherAssignmentService, StaffCommonService]
})
export class ClassTeacherManagementComponent extends CommonComponent implements OnInit {
  columns: any = [];
  displayedColumns: any = [];
  currentComponent = 'ClassTeacherManagementComponent';
  rows: any = [];
  tableName = 'Class Teacher Management';
  validate = true;
  schoolBoardForm: FormGroup;
  schoolBoardsList: any = [];
  classes: any = [];
  activeColumn: any = '';
  sortDirection: any = '';
  staffList: any = [];
  isOnEdit = false;
  teachersData: any = [];
  selectedSchoolBoardId: any;
  classTeacherAssign: ClassTeacherAssignmentModel;
  schoolHasBoard = false;
  padding = false;
  constructor(
    public commonService: CommonService,
    public gradeSetupService: GradeSetupService,
    public classTeacherAssignmentService: ClassTeacherAssignmentService,
    public staffCommonService: StaffCommonService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.setBoardForm();
    this.getSchoolBoardsList();
    this.getStaffList();
    this.initializeModel();
  }
  ngOnInit(): void {

  }
  setBoardForm(): void {
    this.schoolBoardForm = new FormGroup({
      schoolBoard: new FormControl('', [Validators.required]),
    });
  }
  setHeaderData(): void {
    this.rows = [];
    this.columns = [];
    if (!this.teachersData) {
      return;
    }
    this.rows = [];
    this.columns = [
      { field: 'className', header: 'Class', sort: false }];
    this.displayedColumns = [];
    this.teachersData.forEach(classInfo => {
      const classData = {};
      classData['className'] = classInfo.className;
      classInfo.sectionTeachersModel.forEach(element => {
        if (this.columns.findIndex(ele => ele.field === element.sectionName) === -1) {
          this.displayedColumns.push(element.sectionName);
          if (this.isOnEdit) {
            this.columns.push({ field: element.sectionName, header: element.sectionName, sort: false, dropdownInputRequired: true });
          } else {
            this.columns.push({ field: element.sectionName, header: element.sectionName, sort: false, dropdownInputRequired: false });
          }
          classData[element.sectionName] = this.setClassData(this.isOnEdit, element);

        } else {
          classData[element.sectionName] = this.setClassData(this.isOnEdit, element);
        }
      });
      this.rows.push(classData);
    });
    this.displayedColumns.sort();
    this.displayedColumns.unshift('className');
  }
  setClassData(edit, element): void {
    if (edit) {
      return element.classTeacherId;
    } else {
      return element.classTeacherName;
    }
  }
  initializeModel(): void {
    this.classTeacherAssign = {
      classId: 0,
      sectionId: 0,
      classTeacherId: 0,
      schoolBoardId: 0
    };
  }
  onTeacherChange(event, className, sectionName): void {
    const data = this.teachersData.filter(ele => className === ele.className)[0];
    this.classTeacherAssign.schoolBoardId = this.selectedSchoolBoardId;
    this.classTeacherAssign.classId = data.classId;
    this.classTeacherAssign.sectionId = data.sectionTeachersModel.filter(ele => ele.sectionName === sectionName)[0].sectionId;
    const classTeacherId = data.sectionTeachersModel.filter(ele => ele.sectionName === sectionName)[0].classTeacherId;
    if (!(classTeacherId || event.value)) {
      return;
    }
    this.classTeacherAssign.classTeacherId = event.value;
    this.classTeacherAssignmentService.updateClassTeacher(this.classTeacherAssign)
      .subscribe(res => {
        this.getTeachers(this.selectedSchoolBoardId);
        this.openSnackBar(res.messages.ResultMessage);
      }, err => this.errorResponse(err));
  }
  onSelectBoard(event): void {
    this.isOnEdit = false;
    this.selectedSchoolBoardId = event.value;
    this.getTeachers(this.selectedSchoolBoardId);
  }
  getTeachers(boardId): void {
    this.classTeacherAssignmentService.getClassTeachers(boardId)
      .subscribe(res => this.setTeachersData(res), error => this.errorResponse(error));
  }
  setTeachersData(res): void {
    this.teachersData = res.getClassTeacherAssignmentModel;
    this.setHeaderData();
  }
  getStaffList(): void {
    this.staffCommonService.fetchStaffs(AppSettings.TEACHING_STAFF_CODE)
      .subscribe(res => this.setStaffData(res));
  }
  setStaffData(response): void {
    this.staffList = response;
    this.staffList.unshift({
      code: null,
      id: null,
      name: ''
    });
  }
  getSchoolBoardsList(): void {
    this.gradeSetupService.schoolAcademicBoards().subscribe(res => {
      if (res.listViews && res.listViews.length) {
        res.listViews.forEach(element => {
          this.schoolBoardsList.push({
            label: element.name,
            value: element.id
          });
        });
        this.schoolHasBoard = true;
        this.selectedSchoolBoardId = this.schoolBoardsList[0].value;
        this.getTeachers(this.selectedSchoolBoardId);
        this.schoolBoardForm.controls.schoolBoard.setValue(this.selectedSchoolBoardId);
      } else {
        this.schoolHasBoard = false;
        this.getTeachers(null);
      }
    }, error => {
      this.errorResponse(error);
    });
  }
  onEdit(): void {
    this.isOnEdit = !this.isOnEdit;
    this.setHeaderData();
  }
  customSort(event): void {
    this.sortDirection = event.direction;
    this.activeColumn = event.active;
  }
}
