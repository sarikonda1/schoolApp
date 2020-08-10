import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesConfigurationService } from 'app/service/general/api/courses_configuration.service';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { CourseView } from '../models/course_view';
import { Coursedataview } from '../models/course_data_view';
import { Getcoursesview } from '../models/get_courses_view';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class CoursesComponent  extends CommonComponent implements OnInit {
  @ViewChild('course') myForm;
  currentComponent = 'CoursesComponent';
  courseForm: FormGroup;
  courseFormSubmitted = false;
  courseDataView: Coursedataview;
  courseView: CourseView;
  courseTypesdropDown: Array<any> = [];
  getCoursesView: Getcoursesview;
  cols: any[];
  tabSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  closeAddPanel: boolean;
  updateBtn: boolean;
  updateSubjectId: string;
  isedit: boolean;
  HttpStatus: any;
  disbleSubmitBtn = false;

  constructor(public dialogRef: MatDialog, public dialog: MatDialog, public commonService: CommonService,
     private courseConfigurationService: CoursesConfigurationService, public snackBar: MatSnackBar) {
    super();
    this.getCoursesView = {
      courseTypeId: [],
      sortBy: '',
      name: [],
      description: [],
      displayName: [],
      code: [],
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
      if (modelTableComponent) {
        this.getCoursesView = modelTableComponent;
      }
    this.courseForm = new FormGroup({
      courseTypeId: new FormControl('', [Validators.required]),
      courseName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      displayName: new FormControl('', [Validators.maxLength(45)]),
      code: new FormControl('', [Validators.maxLength(6)]),
    });
    this.cols = [
      { field: 'courseTypeName', header: 'Course Type', sort: false },
      { field: 'subjectName', header: 'Name', sort: false },
      { field: 'description', header: 'Description', sort: false },
      { field: 'code', header: 'Code', sort: false },
      { field: 'displayName', header: 'Display Name', sort: false },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.getCoursesView,
      tablename: 'Courses',
      componentName: this.currentComponent,
    };
    this.getAllCourses(this.getCoursesView);
    this.courseTypesDropDown();
  }

  // Get CourseTypes
  courseTypesDropDown(): void {
    this.courseConfigurationService.courseType().subscribe(res => this.courseTypesdropDown = res.commonViewModel);
  }

  // Get all Courses 
  getAllCourses(getCoursesDataView: any): void {
    this.getCoursesView = getCoursesDataView;
    this.courseConfigurationService.getCourses(getCoursesDataView.courseTypeId, getCoursesDataView.subjectName, getCoursesDataView.description,
       getCoursesDataView.displayName, getCoursesDataView.code,
      getCoursesDataView.sortBy, getCoursesDataView.sortOrder, getCoursesDataView.pageNumber, getCoursesDataView.pageSize).subscribe(res => {
      this.coursesData(res);
    });
  }

  // Binding Courses To Table
  coursesData(data: any): void {
    this.custRowsPerPageOptions = [];
    if (data.coursesListView == null) {
      this.rows = [];
    }
    else {
      this.rows = data.coursesListView.list;
      this.totalItems = data.coursesListView.totalItems;
    }
    this.rows.forEach(e => {
      e.operations = [
        {
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT

        }, {
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE,
          operationName: AppSettings.DELETE
        }
      ];
    });
    if (data.coursesListView) {
      this.getCoursesView.pageNumber = data.coursesListView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.getCoursesView,
      rows: this.rows,
      tablename: 'Courses',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'New'
        },
        infoButton: {
          required: true,
          text: 'Courses'
        }
      },
      filtersList: data.filters,
      rowGroupingColumns: ['courseTypeName'],
    };
  }

  // Create and Update of CourseForm
  onSubmit(courseForm: any, onContinue = false): any {
    this.disbleSubmitBtn = true;
    if (this.isedit === true) {
      if (courseForm.status === AppSettings.VALID) {
        this.courseFormSubmitted = false;
        this.courseView = {
          courseTypeId: courseForm.value.courseTypeId,
          name: courseForm.value.courseName,
          description: courseForm.value.description,
          displayName: courseForm.value.displayName,
          code: courseForm.value.code,
          id: this.updateSubjectId
        };
        this.courseConfigurationService.updateCourses(this.courseView).subscribe(res => this.updateResponse(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.courseFormSubmitted = true;
        return false;
      }
    }
    else {
      if (courseForm.status === AppSettings.VALID) {
        this.courseFormSubmitted = false;
        this.courseDataView = {
          courseTypeId: courseForm.value.courseTypeId,
          name: courseForm.value.courseName,
          description: courseForm.value.description,
          displayName: courseForm.value.displayName,
          code: courseForm.value.code,
        };
        this.courseConfigurationService.createCourse(this.courseDataView).subscribe(res => this.updateResponse(res, onContinue), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.courseFormSubmitted = true;
      }
    }
  }

  // updateCourse Response
  updateResponse(response: any, onContinue = false): void {
    this.openSnackBar(response.messages.ResultMessage);
    if (response.statusCode === this.HttpStatus.OK || response.statusCode === this.HttpStatus.CONFLICT) {
          if (response.statusCode === this.HttpStatus.CONFLICT) {
            this.closeAddPanel = false;
          }
          else {
            const t = this.courseForm.value.courseTypeId;
            this.myForm.resetForm();
            this.updateBtn = false;
            this.disbleSubmitBtn = false;
            // if (this.isedit){
            //   this.closeAddPanel = true;
            //     this.cancel();
            // }else if (onContinue){
            //   this.closeAddPanel = false;
            //   this.courseForm.controls['courseTypeId'].setValue(t);
            // }else{

            // }
            if (onContinue) {
              this.closeAddPanel = false, this.courseForm.controls['courseTypeId'].setValue(t);
            }else{
              this.closeAddPanel = true;
              this.cancel();
            }
            // this.isedit ?  (this.closeAddPanel = true,  this.cancel()) : (this.closeAddPanel = false, this.courseForm.controls['courseTypeId'].setValue(t));
          }
    }
    else {
          this.closeAddPanel = false;
    }
    this.isedit = false;
  }
  // End

  // Cancel Button
  cancel(): void {
    this.closeAddPanel = true;
    this.disbleSubmitBtn = false;
    this.myForm.resetForm();
    this.getAllCourses(this.getCoursesView);
  }

  // Adding Post Form
  onAddFormClick(): void {
    this.courseFormSubmitted = false;
    this.closeAddPanel = false;
    this.updateBtn = false;
    this.disbleSubmitBtn = true;
  }

  // For Edit and Delete Events
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
      this.isedit = true;
      this.closeAddPanel = false;
      this.updateBtn = true;
      this.disbleSubmitBtn = true;
      this.courseConfigurationService.courseDetailsById(event.clickedRow.subjectId).subscribe(res => {
        this.updateSubjectId = res.courseDetailsView.id;
        this.courseForm.controls['courseTypeId'].setValue(res.courseDetailsView.courseTypeId);
        this.courseForm.controls['courseName'].setValue(res.courseDetailsView.name);
        this.courseForm.controls['description'].setValue(res.courseDetailsView.description);
        this.courseForm.controls['displayName'].setValue(res.courseDetailsView.displayName);
        this.courseForm.controls['code'].setValue(res.courseDetailsView.code);
      }, error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
    }
    if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.courseConfigurationService.deleteCourse(event.clickedRow.subjectId).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
  }

  // Delete Response
  deleteResponse(response: any): void {
    this.getAllCourses(this.getCoursesView);
    this.openSnackBar(response.messages.ResultMessage);
  }
}
