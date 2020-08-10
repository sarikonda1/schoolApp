import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CourseCategoriesService } from 'app/service/general/api/course-categories.service';
import { CommonService } from 'app/service/common.service';
import { Subscription } from 'rxjs';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings, PatternConfig, Pattern } from 'app/app.constants';

import { CommonComponent } from 'app/shared/common/common.component';
import * as HttpStatus from 'http-status-codes';
import { GetAllCourseCategoryView } from '../models/get-all-course-category';
import { CourseCategeoryViewModel } from '../models/course-categeory-view-model';
import { CourseCategoryDataViewModel } from '../models/course-category-data-view-model';
import { CoursesConfigurationService } from 'app/service/general/api/courses_configuration.service';
import { YesNo } from 'app/models/yes-no-view';

@Component({
  selector: 'app-course-categories',
  templateUrl: './course-categories.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./course-categories.component.scss'],
})
export class CourseCategoriesComponent extends CommonComponent implements OnInit{
  @ViewChild('courseCategory') myForm;

  courseCategoryForm: FormGroup;
  subscription: Subscription;
  // View Model Declarations
  getAllCourseCategoryView: GetAllCourseCategoryView;
  courseCategeoryViewModel: CourseCategeoryViewModel;
  updateCourseCategoryView: CourseCategoryDataViewModel;

  schoolId: any;
  tabSettings: {};
  tableData: Array<any> = [];
  rows: Array<any>;
  categorycols: any[];
  pageCnt: number;
  totalItems: number;

  custRowsPerPageOptions: Array<number> = [];
  courseTypesList: any = [];
  coursetypeIds: Array<string> = [];

  allOptional = false;
  allRequired = true;
  saveBtn = true;
  prevBtn: boolean;
  nextBtn = false;
  updateBtn: boolean;
  Counts = false;
  closeAddPanel = false;
  isEdit = false;
  updateId: any;
  isSaveDisabled = true;
  isUpdateDisabled = true;
  isFormValidate = false;
  areAllRequiredOptions: Array<any> = YesNo.values;
  areAllOptionalOptions: Array<any> = YesNo.values;
  currentComponent = 'CourseCategoriesComponent';
  disbleSubmitBtn = false;

  constructor(private commonComponent: CommonComponent, public dialog: MatDialog, 
  private courseCategoriesService: CourseCategoriesService, public commonService: CommonService,
   private courseTypesService: CoursesConfigurationService, public snackBar: MatSnackBar) {
    super();
    this.subscription = this.commonService.getSchoolId().subscribe((messages: any) => {
      if (messages.schoolId) {
        this.schoolId = messages.schoolId;
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  ngOnInit(): void {

    this.courseCategoryForm = new FormGroup({
      courseTypeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(45), ]),
      areAllRequired: new FormControl(),
      areAllOptional: new FormControl(),
      optionalCount: new FormControl(0, [Validators.max(100), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      requiredCount: new FormControl(0, [Validators.max(100), Validators.pattern(Pattern.NUMBER_PATTERN)]),
    });

    this.getAllCourseCategoryView = {
      sortBy: 'Name',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.getAllCourseCategoryView = modelTableComponent;
    }

    // Course Categories Columns
    this.categorycols = [
      { field: 'name', header: 'Course Category', sort: true },
      { field: 'courseTypeName', header: 'CourseType', sort: true, },
      { field: 'areAllRequired', header: 'areAllRequired', sort: true },
      { field: 'areAllOptional', header: 'areAllOptional', sort: true },
      { field: 'requiredCount', header: 'requiredCount', sort: true },
      { field: 'optionalCount', header: 'optionalCount', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    this.schoolId = ((localStorage.getItem('schoolId') || '{}'));
    this.tabSettings = {
      rows: [],
      columns: this.categorycols,
      model: this.getAllCourseCategoryView,
      tablename: 'Course Categories',
      componentName: this.currentComponent
    };
    // this.commonService.getTableLSObj(this.tabSettings);
    // Get Course Types for DropDown courseTypesList 
    this.courseTypes();
  }
  courseTypes(): void {
    this.courseTypesService.courseType().subscribe(res => { this.courseTypeRes(res), this.courseCategories(this.getAllCourseCategoryView); }, error => {
      this.errorResponse(error);
    });
  }
  // Courses Types Responce
  courseTypeRes(res: any): void {
    this.courseTypesList = [];
    if (res.commonViewModel.length !== 0) {
      for (let i = 0; i < res.commonViewModel.length; i++) {
        this.courseTypesList.push({ value: res.commonViewModel[i].id, label: res.commonViewModel[i].name });
      }
    }
  }

  // Get all Course Categories
  courseCategories(data: any): void {
    this.getAllCourseCategoryView = data;
    this.courseCategoriesService.getAllCourseCategories(this.getAllCourseCategoryView.name, this.getAllCourseCategoryView.areAllRequired, 
    this.getAllCourseCategoryView.requiredCount, this.getAllCourseCategoryView.areAllOptional, 
    this.getAllCourseCategoryView.optionalCount, this.getAllCourseCategoryView.courseTypeId, 
    this.getAllCourseCategoryView.sortBy, this.getAllCourseCategoryView.sortOrder, 
    this.getAllCourseCategoryView.pageNumber, this.getAllCourseCategoryView.pageSize).subscribe((responce: any) => this.courseCategoriesRes(responce), error => {
      this.errorResponse(error);
    });
  }
  // Get all course Categories Responce
  courseCategoriesRes(data: any): void {
    this.custRowsPerPageOptions = [];
    if (data.getAllCourseCategoryView == null) {
      this.rows = [];
    } else {
      this.rows = data.getAllCourseCategoryView.list;
      this.totalItems = data.getAllCourseCategoryView.totalItems;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT

          }, {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          }
        ];
        e.areAllOptional = (e.areAllOptional === 1) ? AppSettings.YES : AppSettings.NO;
        e.areAllRequired = (e.areAllRequired === 1) ? AppSettings.YES : AppSettings.NO;
      });
    }

    if (data.getAllCourseCategoryView) {
      this.getAllCourseCategoryView.pageNumber = data.getAllCourseCategoryView.pageNumber;
    }
    this.tabSettings = {
      columns: this.categorycols,
      model: this.getAllCourseCategoryView,
      rows: this.rows,
      tablename: 'Course Categories',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          btnName: AppSettings.NEW,
          required: true,
        },
        infoButton: {
          required: true,
          text: 'Course Categories'
        },
      },
      filtersList: data.filters,
    };
  }
  // on New Button Click
  onAddFormClick(): void {
    this.courseCategoryForm.reset();
    this.closeAddPanel = false;
    this.isFormValidate = false;
    this.allRequired = true;
    this.allOptional = false;
    this.Counts = false;
    this.saveBtn = true;
    this.updateBtn = false;
    this.prevBtn = false;
    this.nextBtn = false;
    this.isSaveDisabled = true;
    this.isUpdateDisabled = true;
    this.isEdit = false;
  }
  // Row Opetaions like Delete and Edit
  onEditDeleteClick(data: any): void {
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // Conformation for Delete CourseCategory
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.courseCategoriesService.deleteCourseCategory(data.clickedRow.id).subscribe(res => this.courseCategoryDeleteRes(res), error => {
            this.errorResponse(error);
          });
        }
      });
    }
    else if (data.operation === AppSettings.EDIT) {
      this.updateId = data.clickedRow.id;
      this.courseCategoriesService.getCourseCategory(data.clickedRow.id).subscribe(res => this.getByRes(res), error => {
        this.errorResponse(error);
      });
    }
  }
  // Responce Get Course Category Based on Category Id
  getByRes(data: any): void {
    this.isEdit = true;
    this.saveBtn = false;
    this.updateBtn = true;
    this.isUpdateDisabled = false;
    this.closeAddPanel = false;
    this.courseCategoryForm.patchValue(data);
    if (data.areAllRequired === 1) {
      this.allRequired = true;
      this.allOptional = false;
      this.Counts = false;
      this.saveBtn = false;
      this.nextBtn = false;
      this.prevBtn = false;
    }
    else if (data.areAllOptional === 1) {
      this.courseCategoryForm.controls['areAllRequired'].setValue(0);
      this.allRequired = false;
      this.prevBtn = true;
      this.allOptional = true;
      this.Counts = false;
      this.updateBtn = true;
      this.nextBtn = false;
    }
    else if (data.optionalCount != null || data.requiredCount != null) {
      this.allRequired = false;
      this.allOptional = false;
      this.Counts = true;
      this.prevBtn = true;
      this.nextBtn = false;
    }
  }
  // on Delete Responce
  courseCategoryDeleteRes(data: any): void {
    this.courseCategories(this.getAllCourseCategoryView);
    this.openSnackBar(data.messages.ResultMessage);
  }

  // AreAllRequired Yes or No Radio button click
  areAllRequiredClick(type: string): void {
    if (type === AppSettings.YES) {
      this.courseCategoryForm.controls['areAllRequired'].setValue(1);
      this.allOptional = false;
      this.prevBtn = false;
      this.nextBtn = false;
      if (this.isEdit === true) {
        this.updateBtn = true;
        this.isUpdateDisabled = false;
      }
      else {
        this.saveBtn = true;
        this.isSaveDisabled = false;
      }
    }
    else if (type === AppSettings.NO) {
      this.courseCategoryForm.controls['areAllRequired'].setValue(0);
      this.nextBtn = true;
      this.updateBtn = false;
      this.saveBtn = false;
    }
  }
  /// On AreAllOptional Yes or No Radio button click
  areAllOptionalClick(btnType: string): void {
    this.allOptional = true;
    if (btnType === AppSettings.YES) {
      this.courseCategoryForm.controls['areAllOptional'].setValue(1);
      this.prevBtn = true;
      this.nextBtn = false;
      this.Counts = false;
      if (this.isEdit === true) {
        this.updateBtn = true;
        this.isUpdateDisabled = false;
      }
      else {
        this.saveBtn = true;
        this.isSaveDisabled = false;
      }
    }
    else if (btnType === AppSettings.NO) {
      this.courseCategoryForm.controls['areAllOptional'].setValue(0);
      this.nextBtn = true;
      if (this.isEdit === true) {

        this.updateBtn = false;
      }
      else {
        this.saveBtn = false;
      }
    }
  }
  // on Next Button Click
  onNextButtontnClick(): void {
    if (this.allRequired === true) {
      this.allOptional = true;
      this.allRequired = false;
      this.Counts = false;
      this.prevBtn = true;
      this.nextBtn = true;
      if (this.courseCategoryForm.value.areAllOptional === 1) {
        this.nextBtn = false;
        if (this.isEdit === true) {
          this.updateBtn = true;
          this.isUpdateDisabled = false;
          this.saveBtn = false;
        }
        else {
          this.saveBtn = true;
          this.isSaveDisabled = false;
          this.updateBtn = false;
        }
      }
      else if (this.courseCategoryForm.value.areAllOptional === 0) {
        this.nextBtn = true;
        this.saveBtn = false;
        this.updateBtn = false;
      }
      else {
        this.updateBtn = false;
        this.saveBtn = false;
        this.nextBtn = false;
      }
    }
    else if (this.allOptional === true) {
      this.prevBtn = true;
      this.nextBtn = false;
      this.Counts = true;
      this.allOptional = false;
      if (this.isEdit === true) {
        this.updateBtn = true;
      }
      else {
        this.saveBtn = true;
      }
      if (+this.courseCategoryForm.value.requiredCount === 0 && +this.courseCategoryForm.value.optionalCount === 0) {
        this.isUpdateDisabled = true;
        this.isSaveDisabled = true;
      }
    }
  }

  // On Previous Button Click
  onPrevButtonClick(): void {
    // Pervious Button Click At AreAllOptional
    if (this.allOptional === true) {
      this.allOptional = false;
      this.Counts = false;
      this.allRequired = true;
      this.prevBtn = false;
      this.nextBtn = true;
      this.courseCategoryForm.controls['areAllRequired'].setValue(0);
      if (this.isEdit === true) {
        this.updateBtn = false;
      } else { this.saveBtn = false; }

    }
    // Previous Button Click At Required and Optional Count
    if (this.Counts === true) {
      this.courseCategoryForm.controls['areAllOptional'].setValue(0);
      this.allOptional = true;
      this.nextBtn = true;
      this.Counts = false;
      this.prevBtn = true;
      if (this.isEdit === true) {
        this.updateBtn = false;
      }
      else { this.saveBtn = false; }
    }    
  }
  // on Required  Or Optional Count  TextBox KeyPress
  updateCount(event: any, type: string): void {
    const x = +event.target.value;
    // if (x <= 0) {
    //   this.isSaveDisabled = true;
    //   this.isUpdateDisabled = true;
    // }
    // else {
      this.isSaveDisabled = false;
      this.isUpdateDisabled = false;
    // }
    this.courseCategoryForm.controls[type].setValue(0);
  }
  // On Save Button Click
  onSaveClick(data: any): void {
    this.isFormValidate = true;
    if (data.status === AppSettings.VALID) {
      this.onSetValues();
      const values =  this.courseCategoryForm.value;
      if (!values.areAllRequired && !values.areAllOptional && !+values.optionalCount && !+values.requiredCount){
        this.openSnackBar(AppSettings.ATLEAST_ONE_REQUIRED, true);
        return;
      }
      this.disbleSubmitBtn = true;
      if (!this.isEdit) {
        this.courseCategeoryViewModel = data.value;
        this.courseCategeoryViewModel.optionalCount = +data.value.optionalCount;
        this.courseCategoriesService.createCourseCategory(this.courseCategeoryViewModel).subscribe(res => this.submitResponce(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.updateCourseCategoryView = data.value;
        this.updateCourseCategoryView.id = this.updateId;
        this.courseCategoriesService.updateCourseCategory(this.updateCourseCategoryView).subscribe(res => this.submitResponce(res), error => {
          this.isUpdateDisabled = false;
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }
  // on Submit Responce
  submitResponce(res: any): void {
    this.disbleSubmitBtn = false;
    if (res.statusCode === HttpStatus.OK) {
      this.courseCategories(this.getAllCourseCategoryView);
      this.isSaveDisabled = true;
      this.isUpdateDisabled = true;
      this.closeAddPanel = true;
      this.myForm.resetForm();
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(res.messages.ResultMessage);
  }
  // On Cancel Button Click
  onCancelClick(): void {
    this.closeAddPanel = true;
    this.isFormValidate = false;
    this.courseCategoryForm.reset();
    this.isEdit = false;
    this.saveBtn = false;
    this.updateBtn = false;
    this.myForm.resetForm();
  }
  // set all values in proper before Save or Update
  onSetValues(): void {
     if (this.courseCategoryForm.valid) {
      if (this.courseCategoryForm.value.requiredCount != null || this.courseCategoryForm.value.optionalCount != null ||
      this.courseCategoryForm.value.areAllOptional != null || this.courseCategoryForm.value.areAllRequired != null) {
        if (this.allRequired === true) {
          this.courseCategoryForm.controls['areAllRequired'].setValue(1);
          this.courseCategoryForm.controls['areAllOptional'].setValue(0);
          this.courseCategoryForm.controls['optionalCount'].setValue(0);
          this.courseCategoryForm.controls['requiredCount'].setValue(0);
        }
        else if (this.allOptional === true) {
          this.courseCategoryForm.controls['areAllRequired'].setValue(0);
          this.courseCategoryForm.controls['areAllOptional'].setValue(1);
          this.courseCategoryForm.controls['optionalCount'].setValue(0);
          this.courseCategoryForm.controls['requiredCount'].setValue(0);
        }
        else if (this.Counts === true) {
          this.courseCategoryForm.controls['areAllRequired'].setValue(0);
          this.courseCategoryForm.controls['areAllOptional'].setValue(0);
        }
       }
    }
  }
}
