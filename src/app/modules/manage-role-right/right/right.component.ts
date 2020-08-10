import { Component, ViewChild, OnInit } from '@angular/core';
import { AppSettings, Pattern } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from 'app/shared/common/common.component';
import { RightService, RoleService, ModuleService } from '../service/api';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RightGridView, RightResultView, ValidationMessageView } from '../model/right-grid-view';
import * as HttpStatus from 'http-status-codes';

@Component({ 
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  providers: [RightService, RoleService, ModuleService]
})
export class RightComponent extends CommonComponent implements OnInit {
  columns: any[];
  currentComponent: any = 'RightComponent';
  gridView: RightGridView;
  rows: any[];
  totalRowsCount: number;
  pageCnt: number;
  tableSettings: { };
  rightForm: any;
  isFormSubmitted = true;
  closeForm: boolean;
  showCreateBtn = true;

  @ViewChild('right') myRightForm;
  modules: any[] = [];
  roles: any[] = [];
  parentRights: any[] = [];
  isMenus: any[] = [];

  constructor(private rightService: RightService, public dialogRef: MatDialog, 
  public commonService: CommonService, private roleService: RoleService, private moduleService: ModuleService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeForm();
    this.initializeTableSettings();

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.gridView = modelTableComponent;
    }
    this.roleService.roles().subscribe(data => {
      data.roleView.forEach(element =>
        this.roles.push({ label: element.roleName, value: element.id })
      );
    });

    this.moduleService.modules().subscribe(data => {
      data.forEach(element =>
        this.modules.push({ label: element.name, value: element.id })
      );
    });
    this.getRights();
    this.isMenus = [{ label: 'Yes', value: 1 }, { label: 'No', value: 0}];
    this.getModuleGrid();
  }

  getRights(): void{
    this.rightService.rights().subscribe(data => {
      data.forEach(element =>
        this.parentRights.push({ label: element.name, value: element.id })
      );
    });
  }

  initializeForm(): void {
    this.rightForm = new FormGroup({
      id: new FormControl(''),
      moduleId: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
      url: new FormControl(''),
      isMenu: new FormControl(''),
      displayOrder: new FormControl('', [Validators.required, Validators.pattern(Pattern.NUMBER_PATTERN)]),
      parentRightId: new FormControl(''),
      icon: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'name', header: 'Right Name', sort: true },
      { field: 'parentRightName', header: 'Parent Right Name', sort: true },
      { field: 'moduleName', header: 'Module Name', sort: true },
      { field: 'roleName', header: 'Role Name', sort: true },
      { field: 'url', header: 'Url', sort: true },
      { field: 'isMenu', header: 'IsMenu', sort: true },
      { field: 'displayOrder', header: 'Display Order', sort: true },
      { field: 'icon', header: 'Icon', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Rights',
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
    this.rightService.rightGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(res => {
      if (res) {
        this.bindResult(res);
      }
    });
  }

  bindResult(data: RightResultView): any {
    if (!data.pagedRightViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedRightViewModels.list;
      this.totalRowsCount = data.pagedRightViewModels.totalItems;

      this.pageCnt = data.pagedRightViewModels.totalPages;
      this.rows.forEach(e => {
       if (e.isMenu === 1){
         e.isMenu = this.commonService.getTranslation(AppSettings.Yes);
       }else if (e.isMenu === 0){
        e.isMenu = this.commonService.getTranslation(AppSettings.No);
       }
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          }
        ];
      });
    }
    if (data.pagedRightViewModels) {
      this.gridView.pageNumber = data.pagedRightViewModels.pageNumber;
    }
    this.tableSettings = {
      model: this.gridView,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Rights',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: [],
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Page Information'
          },
        addingForm: {
          required: true,
          btnName: 'Add'
        }
      }
    };
  }

  tableData(_event: RightGridView): void {
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
    this.myRightForm.resetForm();
    this.initializeForm();
  }

  createOrUpdateRight(form: any): void {
    if (!form.id && this.rightForm.status === AppSettings.VALID) {
      this.rightService.createMenuRight(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.getModuleGrid();
            this.getRights();
            this.onCancel();
          }
          else {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.closeForm = false;
          }
        });
    } else if (this.rightForm.valid) {
      this.rightService.updateRight(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.openSnackBar(res.messages.ResultMessage);
            this.getModuleGrid();
            this.getRights();
            this.onCancel();
          }
          else {
            this.openSnackBar(res.messages.ResultMessage, true);
            this.closeForm = false;
          }
        });
    }
  }

  actions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
        if (operationData.clickedRow.isMenu === AppSettings.YES){
          operationData.clickedRow.isMenu = 1;
        }else if (operationData.clickedRow.isMenu === AppSettings.NO){
          operationData.clickedRow.isMenu = 0;
        }
      this.isFormSubmitted = false;
      this.showCreateBtn = false;
      this.closeForm = false;
      this.rightForm.patchValue(operationData.clickedRow);
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

}
