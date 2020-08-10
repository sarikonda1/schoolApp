import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ClassFilterView } from '../models/class-filter-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { ClassResultViewModel, ClassResultView, ValidationMessageView } from '../models/class-result-view-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropDownModel } from 'app/models/drop-down-view';
import * as HttpStatus from 'http-status-codes';
import { CommonComponent } from '../../../../shared/common/common.component';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  providers: [ClassesConfigService]
})
export class ClassesComponent extends CommonComponent implements OnInit {

  @ViewChild('class') myClassForm;
  filterViewModel: ClassFilterView;
  isdisableBtn = false;
  classForm: FormGroup;
  classReferences: Array<DropDownModel> = [];
  tableSettings: {};
  rows: Array<any>;
  columns: any[];
  pageCnt: number;
  lastSelectediId = '';
  selectedIdsList: Array<string> = [];
  totalRowsCount: number;
  rowBasedAction: Array<any> = [];
  closeForm: boolean;
  validateForm: boolean;
  isFormSubmitted = false;
  showCreateBtn = true;
  preSelectIds: Array<string> = [];
  currentComponent = 'ClassesComponent';
  constructor(public commonService: CommonService, private classesConfigService: ClassesConfigService, public snackBar: MatSnackBar, public dialogRef: MatDialog,
    public viewContainerRef: ViewContainerRef) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    // this.commonService.getTableLSObj(this.tableSettings);
    this.initializeForm();
    // if (localStorage.getItem('_s')) {
    this.classesConfigService.getClassReferences()
      .subscribe((data: Array<{ id: string | number, name: string }>) =>
        data.forEach(element =>
          this.classReferences.push({ label: element.name, value: element.id })
        ));

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAllFilteredClasses();
    // }
  }

  initializeForm(): void {
    this.classForm = new FormGroup({
      id: new FormControl(''),
      classReferenceTypeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      code: new FormControl(null, [Validators.maxLength(6)]),
      description: new FormControl(null, [Validators.maxLength(135)]),
    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'name', header: 'Class Name', sort: true },
      { field: 'code', header: 'Code', sort: true },
      { field: 'classReferenceName', header: 'Class Reference', sort: true },
      { field: 'description', header: 'Description', sort: true },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Classes',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  getAllFilteredClasses(): void {
    this.classesConfigService.getFilteredClasses(this.filterViewModel.classReferenceIds, this.filterViewModel.names,
      this.filterViewModel.codes, this.filterViewModel.descriptions, this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
      this.preSelectIds, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
        this.bindClassResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  tableData(_event: ClassFilterView): void {
    this.filterViewModel = _event;
    this.getAllFilteredClasses();
  }

  openForm(): void {
    this.initializeForm();
    this.isFormSubmitted = false;
    this.closeForm = false;
  }

  onCancel(): void {
    this.closeForm = true;
    this.isFormSubmitted = false;
    this.showCreateBtn = true;
    this.getAllFilteredClasses();
    this.myClassForm.resetForm();
  }

  bindClassResult(data: ClassResultView): any {
    if (!data.pagedClassViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedClassViewModels.list;
      this.totalRowsCount = data.pagedClassViewModels.totalItems;
      this.pageCnt = data.pagedClassViewModels.totalPages;
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
      this.preSelectIds = [];
    }
    if (data.pagedClassViewModels) {
      this.filterViewModel.pageNumber = data.pagedClassViewModels.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Classes',
      componentName: this.currentComponent,

      visibleSelectAll: true,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      filtersList: data.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Class Component'
        },
        addingForm: {
          required: true,
          btnName: 'Add Class'
        }
      }
    };
  }

  createOrUpdateClass(form: ClassResultViewModel, onContinue = false): void {
    this.isFormSubmitted = true; 
    if (this.classForm.invalid) {
      return;
    }
    if (!form.id && this.classForm.status === AppSettings.VALID) {
      this.isdisableBtn = true;
      this.classesConfigService.createClass(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.openSnackBar(res.messages.ResultMessage);
            this.myClassForm.resetForm();
            if (!onContinue){   
              this.closeForm = true; 
              this.getAllFilteredClasses();
            }  
          }
          else {
            this.openSnackBar(res.messages.ResultMessage, true);
            this.closeForm = false;
          }
        }, error => {
          // this.isdisableBtn = false;
          this.errorResponse(error);
        });
      this.isdisableBtn = false;
    }
    else if (this.classForm.valid) {
      this.isdisableBtn = true;
      this.classesConfigService.updateClass(form).subscribe((res: ValidationMessageView) => {
        if (res.statusCode === HttpStatus.OK) {
          this.openSnackBar(res.messages.ResultMessage);
          this.myClassForm.resetForm();
          this.showCreateBtn = true;
          this.closeForm = true;
          this.onCancel();
        }
        else {
          this.openSnackBar(res.messages.ResultMessage, true);
          this.closeForm = false;
        }
      }, error => {
        // this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
      this.isdisableBtn = false;
    }
  }

  selectedRows(_event: Array<ClassResultViewModel>): void {
    this.selectedIdsList = _event.length ? _event.map(x => x.id) : [];
  }

  actions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.isFormSubmitted = false;
      this.validateForm = false;
      this.showCreateBtn = false;
      this.closeForm = false;
      this.classesConfigService.getClass(operationData.clickedRow.id).subscribe(res => {
        if (res.statusCode === HttpStatus.OK) {
          this.classForm.patchValue(res.classViewModel);
        }
      }, error => {
        this.errorResponse(error);
      });
      this.classForm.patchValue(operationData.clickedRow);
    }
    if (operationData.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogRef = this.dialogMethod(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const actionClickedId: Array<string> = [operationData.clickedRow.id];
          this.deleteClasses(actionClickedId, false);
        }
      });
    }
  }

  deleteClasses(selectedIds: Array<string>, isMultiDelete: boolean): void {
    this.classesConfigService.deleteAllClass(selectedIds).subscribe(response => {
      if (response.statusCode === HttpStatus.OK) {
        this.openSnackBar(response.messages.ResultMessage);
        this.selectedIdsList = [];
      }
      else {
        this.openSnackBar(response.messages.ResultMessage, true);
        if (isMultiDelete) {
          this.preSelectIds = response.failedRecords;
        }
      }
      this.getAllFilteredClasses();
    }, error => {
      if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0 && isMultiDelete) {
        this.preSelectIds = (error.error.failedRecords);
      }
      this.errorResponse(error);
      this.getAllFilteredClasses();
    });
  }

  deleteWarning(): void {
    const dialogRef = this.dialogMethod(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.deleteClasses(this.selectedIdsList, true);
      }
    });
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  trimTextBoxSpaces(key: string): void {
    this.classForm.controls[key].setValue(this.commonService.trimSpaces(this.classForm.controls[key].value)); // modify value here)
  }
}
