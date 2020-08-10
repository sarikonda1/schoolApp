import { Component, ViewChild, OnInit, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';

import { AppSettings } from 'app/app.constants';
import { AssessmentCategoriesService } from 'app/service/assessment-service/api/assessment-categories.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { SearchAssessmentCategoryView } from '../models/assessment-category-view';

@Component({
  selector: 'app-assessment-categories',
  templateUrl: './assessment-categories.component.html',
  styleUrls: ['./assessment-categories.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations,
})

export class AssessmentCategoriesComponent extends CommonComponent implements OnInit {
  subscription: Subscription;
  @ViewChildren('myInput') myInput: QueryList<any>;
  @ViewChild('assessmentForm') assessmentForm;

  // variable declarations
  schoolAcademicSessionId: number | string;
  schoolId: string;
  returnAssessmentsdata: any = [];
  filterRowData: any = [];
  checkLengthCount: any = [];
  assessmentCategoryFormSubmitted = false;
  assessmentSubCategory = false;
  isCreate: boolean;
  isUpdate: boolean;
  isEdit = false;
  closeAddPanel: boolean;
  httpStatus: any;
  buttonDisable = false;
  disbleSubmitBtn = false;
  disbleUpdateBtn = false;

  // FormGroup declarations
  assessmentSubCatryForm: FormGroup;

  // model view variables
  searchAssessmentCategoryView: SearchAssessmentCategoryView;

  // Table Variables 
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  currentComponent = 'AssessmentCategoriesComponent';

  constructor(private _fb: FormBuilder,
    public dialog: MatDialog, public commonService: CommonService,
    private assessmentCategoriesService: AssessmentCategoriesService,
    private cd: ChangeDetectorRef, public snackBar: MatSnackBar) {
    super();
    this.searchAssessmentCategoryView = {
      sortBy: '',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchAssessmentCategoryView = modelTableComponent;
    }

    // Initialise formGroup for assessmentSubCategorys
    this.assessmentSubCatryForm = this._fb.group({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      assessmentSubCategorys: this._fb.array([this.initItemRows()]), // here
    });

    // Table Colums
    this.cols = [
      { field: 'assessmentCategoryName', header: 'Assessment Category', sort: false },
      { field: 'assessmentSubCategoryName', header: 'Assessment Subcategory', sort: false },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.searchAssessmentCategoryView,
      tablename: 'Assessment Categories',
      componentName: this.currentComponent,
    };

    // this.commonService.getTableDetails(this.tabSettings);
    this.getTableDetails(this.searchAssessmentCategoryView);
  }

  // get all assessment categories based on schoolId
  getTableDetails(data: SearchAssessmentCategoryView): void {
    this.searchAssessmentCategoryView = data;
    this.assessmentCategoriesService.getAssessmentCategories(data.assessmentCategoryName, data.sortBy, data.assessmentSubCategoryName, data.sortOrder,
      data.pageNumber, data.pageSize).subscribe(res => this.assessmentCatry(res), error => {
        this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
  }

  // return response by schoolId
  assessmentCatry(data: any): void {
    this.custRowsPerPageOptions = [];
    if (!data.assessmentCategoryListView) {
      this.rows = [];
      this.totalItems = 0;
      this.pageCnt = 0;
    }
    else {
      this.rows = data.assessmentCategoryListView.list;
      this.totalItems = data.assessmentCategoryListView.totalItems;
      this.pageCnt = data.assessmentCategoryListView.totalPages;
    }
    this.filterRowData = [];

    if (data.assessmentCategoryListView) {
      this.searchAssessmentCategoryView.pageNumber = data.assessmentCategoryListView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.searchAssessmentCategoryView,
      rows: this.rows,
      tablename: 'Assessment Categories',
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      filtersList: data.filters,
      rowGroupingColumns: ['assessmentCategoryName'],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Assessment Categories'
        },
        addingForm: {
          required: true,
          btnName: 'New Assessment Category'
        }
      },
    };
    this.filterRowData = this.rows;

    // filtering data 
    const x = [];
    this.filterRowData.forEach(elnt => {
      if (x.length === 0) {
        x.push(elnt);
      }
      else {
        this.filterRowData.forEach((element: any) => {
          const foundIndex = x.findIndex((value: any) => {
            return value.assessmentCategoryName === element.assessmentCategoryName;
          });
          if (foundIndex === -1) {
            x.push(element);
          }
        });
      }
    });
    this.filterRowData = x;

    // apply edit and delete
    this.filterRowData.forEach(element => {
      this.rows.forEach(element1 => {
        if (element.assessmentCategoryName === element1.assessmentCategoryName &&
          element.assessmentSubCategoryName === element1.assessmentSubCategoryName &&
          element.assessmentCategoryId === element1.assessmentCategoryId &&
          element.assessmentSubCategoryId === element1.assessmentSubCategoryId) {
          element1.operations = [
            {
              name: AppSettings.EDIT_OPERATION,
              icon: AppSettings.EDIT_ICON,
              operationName: AppSettings.EDIT
            },
            {
              name: AppSettings.DELETE_OPERATION,
              icon: AppSettings.DELETE_ICON,
              operationName: AppSettings.DELETE
            },
          ];
        }
      });
    });
  }

  // add and update assessment categories
  submitAssesmentForm(assesmentForm: any): boolean {
    if (this.isEdit === true) {
      if (assesmentForm.status === AppSettings.VALID) {
        let updateAssessmentSubCtry = assesmentForm.controls.assessmentSubCategorys.value;
        if (updateAssessmentSubCtry.length > 0) {
          const filtered = updateAssessmentSubCtry.filter(function (el): boolean {
            return el.name.trim() !== '';
          });
          updateAssessmentSubCtry = filtered;
        }
        const valueArr = updateAssessmentSubCtry.map(function (item: any): void {
          return item.name.toLowerCase().trim();
        });
        const isDuplicate = valueArr.some(function (item: any, idx: any): boolean {
          return valueArr.indexOf(item) !== idx;
        });
        if (isDuplicate === true) {
          this.openSnackBar(AppSettings.ASSESSMENT_SUBCATEGORY, true);          
        }
        else {
          assesmentForm.value.assessmentSubCategorys = [];

          for (let i = 0; i < assesmentForm.controls.assessmentSubCategorys.value.length; i++) {
            assesmentForm.value.assessmentSubCategorys.push({
              assessmentCategoryId: assesmentForm.controls.assessmentSubCategorys.value[i].assessmentCategoryId,
              assessmentSubCategoryId: assesmentForm.controls.assessmentSubCategorys.value[i].assessmentSubCategoryId,
              name: assesmentForm.controls.assessmentSubCategorys.value[i].name.trim()
            });
          }

          if (assesmentForm.value.assessmentSubCategorys.length > 0) {
            const filteredUpdate = assesmentForm.value.assessmentSubCategorys.filter(function (el): boolean {
              return el.name.trim() !== '';
            });
            assesmentForm.value.assessmentSubCategorys = filteredUpdate;
          }
          else {
            assesmentForm.value.assessmentSubCategorys = [];
          }
          this.disbleUpdateBtn = true;
          this.assessmentCategoriesService.updateAssessmentCategories(assesmentForm.value).subscribe(res => {
            if (res.statusCode === this.httpStatus.OK) {
              this.assessmentForm.resetForm();
              this.isEdit = false;
              this.closeAddPanel = true;
              this.buttonDisable = false;
              this.getTableDetails(this.searchAssessmentCategoryView);
              this.disbleUpdateBtn = false;
              this.openSnackBar(res.messages.ResultMessage);
            }
            else {
              this.isEdit = false;
              this.disbleUpdateBtn = false;
              this.openSnackBar(res.messages.ResultMessage, true);
            }
          }, error => {
            this.disbleUpdateBtn = false;
            this.errorResponse(error);
          });
        }
      }
      else {
        this.assessmentCategoryFormSubmitted = true;
        return false;
      }
    }
    else {
      if (assesmentForm.status === AppSettings.VALID) {
        let assessmentSubCtry = assesmentForm.controls.assessmentSubCategorys.value;
        if (assessmentSubCtry.length > 0) {
          const filtered = assessmentSubCtry.filter(function (el): boolean {
            return el.name.trim() !== '';
          });
          assessmentSubCtry = filtered;
        }
        const valueArr = assessmentSubCtry.map(function (item: any): boolean {
          return item.name.toLowerCase().trim();
        });

        const isDuplicate = valueArr.some(function (item: any, idx: any): boolean {
          return valueArr.indexOf(item) !== idx;
        });
        if (isDuplicate === true) {
          this.openSnackBar(AppSettings.ASSESSMENT_SUBCATEGORY, true);        
        }
        else {
          if (assesmentForm.value.assessmentSubCategorys.length > 0) {
            const filtered = assesmentForm.value.assessmentSubCategorys.filter(function (el): boolean {
              return el.name.trim() !== '';
            });
            assesmentForm.value.assessmentSubCategorys = filtered;
          }
          else {
            assesmentForm.value.assessmentSubCategorys = [];
          }

          assesmentForm.id = null;
          this.disbleSubmitBtn = true;
          this.assessmentCategoriesService.createAssessmentCategories(assesmentForm.value).subscribe(res => {
            if (res.statusCode === this.httpStatus.OK) {
              this.getTableDetails(this.searchAssessmentCategoryView);
              this.assessmentForm.resetForm();
              this.closeAddPanel = true;
              this.disbleSubmitBtn = false;
              this.openSnackBar(res.messages.ResultMessage);
            }
            else {
              this.disbleSubmitBtn = false;
              this.openSnackBar(res.messages.ResultMessage, true);
            }
          }, error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
        }
      }
      else {
        this.assessmentCategoryFormSubmitted = true;
        return false;
      }
    }
  }

  // Cancel Button
  cancel(): void {
    this.closeAddPanel = true;
    this.buttonDisable = false;
    this.assessmentCategoryFormSubmitted = false;
    this.assessmentForm.resetForm();
  }

  // add new form for assessment categories
  onAddFormClick(): void {
    this.closeAddPanel = false;
    this.isCreate = true;
    this.isUpdate = false;
    this.isEdit = false;
    this.buttonDisable = true;
    this.assessmentForm.resetForm();
    this.addCategoryName();
  }

  // Initailising form for assessment categories
  addCategoryName(): void {
    this.assessmentSubCatryForm = this._fb.group({
      assessmentSubCategorys: this._fb.array([this.initItemRows()]),
      id: new FormControl(0),
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
    });
  }

  // edit assessment categories based on id
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.isCreate = false;
      this.isUpdate = true;
      this.assessmentCategoriesService.getAssessmentCategoriesByCatgryId(event.clickedRow.assessmentCategoryId).subscribe(res => this.retAssesmntCatgryById(res), error => {
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
          this.assessmentCategoriesService.deleteAssesmentCategory(event.clickedRow.assessmentCategoryId).subscribe(res => this.deleteResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
  }

  // return response  by assessmnetCategoryId
  retAssesmntCatgryById(data: any): void {
    if (data.statusCode === this.httpStatus.OK) {
      const validators = [];
      this.buttonDisable = true;
      this.isEdit = true;
      this.closeAddPanel = false;
      this.returnAssessmentsdata = [];

      if (data.assessmentCategoriesViews[0].assessmentSubCategorys.length > 0) {
        for (let i = 0; i < data.assessmentCategoriesViews[0].assessmentSubCategorys.length; i++) {
          this.returnAssessmentsdata.push({
            assessmentCategoryId: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].assessmentCategoryId,
            name: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].name,
            assessmentSubCategoryId: data.assessmentCategoriesViews[0].assessmentSubCategorys[i].assessmentSubCategoryId,
          });
        }
        
        data.assessmentCategoriesViews[0].assessmentSubCategorys = [];
        this.assessmentSubCatryForm.controls['assessmentSubCategorys'] = this._fb.array(this.returnAssessmentsdata.map(i => this._fb.group(i)));
      }
      else {
        this.assessmentSubCatryForm = this._fb.group({
          id: new FormControl(0),
          name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
          assessmentSubCategorys: this._fb.array([this.initItemRows()]),
        });
      }
      this.assessmentSubCatryForm.controls['name'].setValue(data.assessmentCategoriesViews[0].name);
      this.assessmentSubCatryForm.controls['id'].setValue(data.assessmentCategoriesViews[0].id);
      validators.push(Validators.maxLength(45));
      this.assessmentSubCatryForm.controls.assessmentSubCategorys.value.forEach((element, j) => {
        // tslint:disable-next-line: max-line-length
        (<FormArray>this.assessmentSubCatryForm.get('assessmentSubCategorys')).controls[j].get('name').setValidators(validators);
        (<FormArray>this.assessmentSubCatryForm.get('assessmentSubCategorys')).controls[j].get('name').updateValueAndValidity({ emitEvent: false });
      });
    }
  }

  // return response after deletion of assessment categories
  deleteResponse(response: any): void {
    this.getTableDetails(this.searchAssessmentCategoryView);
    this.openSnackBar(response.messages.ResultMessage);
  }

  // return type for educaion details form
  get addNewRowAssSubCatryform(): FormArray {
    return <FormArray>this.assessmentSubCatryForm.get('assessmentSubCategorys');
  }

  // Adding assessmentSubCategory details onClick ADD
  addNewRow(): void {
    this.assessmentSubCategory = true;

    // control refers to your formarray
    const control = <FormArray>this.assessmentSubCatryForm.controls['assessmentSubCategorys'];

    // add new formgroup
    control.push(this.initItemRows());
    this.cd.detectChanges();
    this.myInput.last.nativeElement.focus();
  }

  // Deleting a row of assessmentSubCategory details onClick ReMove
  deleteRow(subCategoryArray: any, index: number): void {
    // control refers to your formarray
    const control = <FormArray>this.assessmentSubCatryForm.controls['assessmentSubCategorys'];
    // remove the chosen row
    control.removeAt(index);
    this.cd.detectChanges();
    this.myInput.last.nativeElement.focus();
  }

  // list all your form controls here, which belongs to your form array
  initItemRows(): FormGroup {
    return this._fb.group({
      assessmentCategoryId: new FormControl(0),
      assessmentSubCategoryId: new FormControl(null),
      name: new FormControl('', [Validators.maxLength(45)]),
    });
  }

  // checklength of assessmentSubCategories
  checkLength(label: any, index: any): void {
    if (this.assessmentSubCatryForm.controls['assessmentSubCategorys'].value[index].name) {
      this.assessmentSubCatryForm.controls['assessmentSubCategorys'].value[index].name.trim();
      this.checkLengthCount = [];
      for (let x = 0; x < this.assessmentSubCatryForm.controls.assessmentSubCategorys.value.length; x++) {
        if (this.assessmentSubCatryForm.controls.assessmentSubCategorys.value[x].name.length < 1) {
          this.checkLengthCount.push(this.assessmentSubCatryForm.controls.assessmentSubCategorys.value[x]);
        }
      }
    }
  }
}
