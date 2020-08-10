import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../service/api';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { RoleGridView, RoleResultView, ValidationMessageView } from '../model/role-grid-view';
import * as HttpStatus from 'http-status-codes';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  providers: [RoleService]
})
export class RoleComponent extends CommonComponent implements OnInit {
  columns: any[];
  currentComponent: any = 'RoleComponent';
  gridView: RoleGridView;
  rows: any[];
  totalRowsCount: number;
  pageCnt: number;
  tableSettings: { model: RoleGridView; rows: any[];
  columns: any; totalRowsCount?: number; pageCnt?: number;
  tablename: string; componentName: any; visibleSelectAll?: boolean; 
  isSelectRowRequired?: boolean; isPaginationRequired?: boolean; filtersList?: any[]; headerOperations?: { }; };
  roleForm: any;
  isFormSubmitted = true;
  closeForm: boolean;
  showCreateBtn = true;

  @ViewChild('role') myRoleForm;

  constructor(private roleService: RoleService, public dialogRef: MatDialog, public commonService: CommonService, private commonComponent: CommonComponent,
     public snackBar: MatSnackBar) {
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
    this.getRoleGrid();
  }

  initializeForm(): void {
    this.roleForm = new FormGroup({
      id: new FormControl(''),
      roleName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'roleName', header: 'Role Name', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Roles',
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

  getRoleGrid(): void {
    this.roleService.roleGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(res => {
      if (res){
        this.bindResult(res);
      }
    });
  }

  bindResult(data: RoleResultView): any {
    if (!data.pagedRoleViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedRoleViewModels.list;
      this.totalRowsCount = data.pagedRoleViewModels.totalItems;

      this.pageCnt = data.pagedRoleViewModels.totalPages;
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
    if (data.pagedRoleViewModels) {
      this.gridView.pageNumber = data.pagedRoleViewModels.pageNumber;
    }
    this.tableSettings = {
      model: this.gridView,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Roles',
      componentName: this.currentComponent,
      filtersList: [],
      isPaginationRequired: true,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'Add Role'
        }
      }
    };
  }

  tableData(_event: RoleGridView): void {
    this.gridView = _event;
    this.getRoleGrid();
  }

  openForm(): void {
    this.initializeForm();
    this.closeForm = false;
  }

  onCancel(): void {
    this.closeForm = true;
    this.showCreateBtn = true;
    this.myRoleForm.resetForm();
    this.initializeForm();
  }

  createOrUpdateClass(form: any): void {
      if (!form.id && this.roleForm.status === AppSettings.VALID) {
        this.roleService.createRole(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) { 
            this.openSnackBar(res.messages.ResultMessage);
            this.getRoleGrid();
            this.onCancel();
          }
          else {
            this.openSnackBar(res.messages.ResultMessage, true);
            this.closeForm = false;
          }
        });
    }else if (this.roleForm.valid){
      this.roleService.updateRole(form)
      .subscribe((res: ValidationMessageView) => {
        if (res.statusCode === HttpStatus.OK) { 
          this.openSnackBar(res.messages.ResultMessage);
          this.getRoleGrid();
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
      this.showCreateBtn = false;
      this.closeForm = false;
      this.roleForm.patchValue(operationData.clickedRow);
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

}
