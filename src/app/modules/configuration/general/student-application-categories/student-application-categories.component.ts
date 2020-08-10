import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractFormGroupDirective } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { AppSettings, Pattern } from 'app/app.constants';
import { ApplicationCategoryViewModel } from 'app/models/academics/application-category-view';
import { ApplicationCategoryService } from 'app/service/academic-service/api/application-category.service';
import { GetCategoriesView } from 'app/models/academics/getcategories-view';
import { StudentApplicationCategoryView } from 'app/models/academics/student-application-category-view';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
@Component({
  selector: 'app-student-application-categories',
  templateUrl: './student-application-categories.component.html',
  styleUrls: ['./student-application-categories.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentApplicationCategoriesComponent extends CommonComponent implements OnInit {
  @ViewChild('addCategories') addCategories;
  @ViewChild('appForm') aForm;
  // FormGroup Variable
  categoryForm: FormGroup;
  // multi delete realted Variable
  categoryIds: Array<any> = [];
  // variable declarations
  updateButton: boolean;
  details: any;
  closeAddPanel = false;
  disbleSubmitBtn = false;
  dataLoaded: Promise<boolean>;
  // ViewModel Variables
  getAllStudentCategories: GetCategoriesView;
  applicationView: ApplicationCategoryViewModel;
  studentCategoryView: StudentApplicationCategoryView;
  // Table Variables
  totalItems: any;
  cols: { field: string; header: string; sort: boolean; }[];
  tabSettings: {};
  rows: any[];
  pageCnt: any;
  selectAll: boolean;
  tempData: any[];
  validateForm: boolean;
  isEdit: boolean;
  HttpStatus: any;
  filterData: any;
  failedRecords: any;
  currentComponent = 'StudentApplicationCategoriesComponent';


  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog, public commonService: CommonService,
    private applicationCategoryService: ApplicationCategoryService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    this.getAllStudentCategories = {
      id: '',
      names: [],
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    // Table Colums
    this.cols = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.getAllStudentCategories,
      tablename: 'Student Application Categories',
      componentName: this.currentComponent,

    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.getAllStudentCategories = modelTableComponent;
    }
    this.getAllCategories(this.getAllStudentCategories);

    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      id: new FormControl(''),
    });

    this.applicationView = {
      name: '',
    };
    this.studentCategoryView = {
      name: '',
      id: '',
    };
  }

  // get data of Application categories
  getAllCategories(getAllStudentCategories: GetCategoriesView): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.getAllStudentCategories = modelTableComponent;
    }
    this.getAllStudentCategories = {
      sortBy: getAllStudentCategories.sortBy,
      sortOrder: getAllStudentCategories.sortOrder,
      failedRecords: this.failedRecords,
      names: getAllStudentCategories.names,
      pageNumber: getAllStudentCategories.pageNumber,
      pageSize: getAllStudentCategories.pageSize
    };
    this.applicationCategoryService.getAllApplicationCategory(this.getAllStudentCategories.names, this.getAllStudentCategories.sortBy,
      this.getAllStudentCategories.sortOrder, this.getAllStudentCategories.failedRecords,
      this.getAllStudentCategories.pageNumber, this.getAllStudentCategories.pageSize).subscribe(res => {
        this.getStudent(res);
        this.dataLoaded = Promise.resolve(true);
      }, error => {
        this.errorResponse(error);
      });
  }

  // response of application categories
  getStudent(data: any): void {
    this.failedRecords = [];
    if (data.applicationCategoryView == null) {
      this.rows = [];
    }
    else {
      this.rows = data.applicationCategoryView.list;
      this.totalItems = data.applicationCategoryView.totalItems;
    }
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
    });
    if (data.applicationCategoryView) {
      this.getAllStudentCategories.pageNumber = data.applicationCategoryView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.getAllStudentCategories,
      rows: this.rows,
      tablename: 'Student Application Categories',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      isSelectRowRequired: true,
      headerOperations: {
        addingForm: {
          required: true,
          name: 'addCategories',
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Student Application Categories'
        },
      },

      filtersList: data.filters
    };
  }
  // Create and Update of categoryForm
  applicationCategories(categoryForm: any): void {
    this.validateForm = true;
    if (this.categoryForm.invalid) {
      return;
    }
    else {
      this.disbleSubmitBtn = true;
    }
    this.applicationView.name = categoryForm.value.categoryName;
    if (categoryForm.status === AppSettings.VALID) {
      if (!categoryForm.value.id) {
        this.applicationCategoryService.createApplicationCategory(this.applicationView).subscribe(res => this.response(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
      else {
        this.studentCategoryView.id = categoryForm.value.id;
        this.studentCategoryView.name = categoryForm.value.categoryName;
        this.applicationCategoryService.updateApplicationCategory(this.studentCategoryView).subscribe(res => this.response(res), error => {
          this.disbleSubmitBtn = false;
          this.errorResponse(error);
        });
      }
    }
  }

  // response
  response(data: any): void {
    this.validateForm = false;
    this.disbleSubmitBtn = false;
    if (data.statusCode === this.HttpStatus.OK) {
          this.categoryForm.reset();
          this.aForm.resetForm();
          this.closeAddPanel = true;
          this.getAllCategories(this.getAllStudentCategories);
    }
    else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }


  // checkbox for select
  onTableRowSelect(data: any): void {
    this.categoryIds.push(data.id);
  }
  // checkbox for unselect
  onTableRowUnSelect(data: any): void {
    this.tempData = [];
    this.tempData.push(data.id);
    this.tempData.forEach((element: any) => {
      const index = this.categoryIds.findIndex((value: any) => {
        return value === element;
      });
      if (index !== -1) {
        this.categoryIds.splice(index, 1);
      }
    });
  }

  // method to delete single or multiple records application categories
  deleteAll(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.applicationCategoryService.deleteApplicationCategory(this.categoryIds).subscribe(res => this.deleteResponse(res), error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this.failedRecords = (error.error.failedRecords);
          }
          this.errorResponse(error);
          this.getAllCategories(this.getAllStudentCategories);
        });
      }
      if (action === AppSettings.NO) {
        this.dialog.closeAll();
      }
    });
  }


  // actions to perform edit or delete
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.DELETE) {
      this.categoryIds = [];
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_DELETE), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.categoryIds.push(event.clickedRow.id);
          this.applicationCategoryService.deleteApplicationCategory(this.categoryIds).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
    else if (event.operation === AppSettings.EDIT) {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.updateButton = true;
      this.details = event.clickedRow;
      this.applicationCategoryService.getCategoryDetailsById(this.details.id).subscribe(res => this.getByCategoryResponse(res), error => {
        this.errorResponse(error);
      });

    }
  }
  // response of application categories
  getByCategoryResponse(data: any): void {
    this.details = [];
    this.details = data.applicationCategoriesView;
    this.categoryForm.controls['id'].setValue(this.details.id);
    this.categoryForm.controls['categoryName'].setValue(this.details.name);
  }

  // method for delete response
  deleteResponse(data: any): void {
    this.categoryForm.reset();
    this.closeAddPanel = true;
    this.failedRecords = data.failedRecords;
    this.getAllCategories(this.getAllStudentCategories);
    this.openSnackBar(data.messages.ResultMessage);
  }


  // selects or unselect  checkboxes for mutliple delete application categories
  allRowSelectForDelete(data: any): void {
    if (data.length > 0) {
      for (let index = 0; index < data.length; index++) {
        this.categoryIds.push(data[index].id);
      }
    }
    else {
      this.categoryIds = [];
    }
  }

  // method for when click cancel panel it will open
  closeAddForm(): void {
    this.validateForm = false;
    this.closeAddPanel = true;
    this.applicationView.name = '';
    this.aForm.resetForm();
  }


  // method for when we click cancel panel will close
  onAddFormClick(): void {
    this.categoryForm.reset();
    this.closeAddPanel = false;
    this.updateButton = false;
    this.validateForm = false;
  }

}

