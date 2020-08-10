import { Component, ViewChild, OnInit } from '@angular/core';
import { AppSettings } from 'app/app.constants';
import { ModuleGridView, ModuleResultView, ValidationMessageView } from '../model/module-grid-view';
import { ModuleService } from '../service/module.service';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as HttpStatus from 'http-status-codes';
import { MatDialog } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  providers: [ModuleService]
})
export class ModuleComponent extends CommonComponent implements OnInit {
  columns: any[];
  currentComponent: any = 'ModuleComponent';
  gridView: ModuleGridView;
  rows: any[];
  totalRowsCount: number;
  pageCnt: number;
  tableSettings: { model: ModuleGridView; rows: any[];
  columns: any; totalRowsCount?: number; pageCnt?: number;
  tablename: string; componentName: any; visibleSelectAll?: boolean;
  isSelectRowRequired?: boolean; isPaginationRequired?: boolean; 
  filtersList?: any[]; headerOperations?: {}; };
  moduleForm: any;
  isFormSubmitted = true;
  closeForm: boolean;
  showCreateBtn = true;

  @ViewChild('module') myModuleForm;

  constructor(private moduleService: ModuleService, public dialogRef: MatDialog, public commonService: CommonService) {
    super();
    this.initializeFilterView();
    this.initializeTableSettings();
    this.setColumnHeaders();
    this.initializeForm();
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.gridView = modelTableComponent;
    }
    this.getModuleGrid();
  }

  initializeForm(): void {
    this.moduleForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'name', header: 'Module Name', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Modules',
      componentName: this.currentComponent,
      model: this.gridView
    };
  }

  initializeFilterView(): void {
    this.gridView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  getModuleGrid(): void {
    this.moduleService.modulesGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(res => {
      if (res) {
        this.bindResult(res);
      }
    });
  }

  bindResult(data: ModuleResultView): any {
    if (!data.pagedModuleViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedModuleViewModels.list;
      this.totalRowsCount = data.pagedModuleViewModels.totalItems;

      this.pageCnt = data.pagedModuleViewModels.totalPages;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          }
        ];
      });
    }
    if (data.pagedModuleViewModels) {
      this.gridView.pageNumber = data.pagedModuleViewModels.pageNumber;
    }
    this.tableSettings = {
      model: this.gridView,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Modules',
      componentName: this.currentComponent,
      filtersList: [],
      isPaginationRequired: true,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'Add Module'
        }
      }
    };
  }

  tableData(_event: ModuleGridView): void {
    this.gridView = _event;
    this.getModuleGrid();
  }

  openForm(): void {
    this.initializeForm();
    this.closeForm = false;
  }

  onCancel(): void {
    this.closeForm = true;
    this.showCreateBtn = true;
    this.myModuleForm.resetForm();
    this.initializeForm();
  }

  createOrUpdateClass(form: any): void {
    if (!form.id && this.moduleForm.status === AppSettings.VALID) {
      this.moduleService.createModule(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.getModuleGrid();
            this.onCancel();
          }
          else {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.closeForm = false;
          }
        });
    } else if (this.moduleForm.valid) {
      this.moduleService.updateModule(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.getModuleGrid();
            this.onCancel();
          }
          else {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.closeForm = false;
          }
        });
    }
  }

  actions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.showCreateBtn = false;
      this.closeForm = false;
      this.moduleForm.patchValue(operationData.clickedRow);
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }
}
