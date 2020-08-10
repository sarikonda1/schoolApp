import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { SearchCommunicationTypeView } from '../model/search-communication-type-view';
import { AppSettings } from 'app/app.constants';
import { CommunicationTypesService } from 'app/service/configuration/communication-types.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommunicationTypeView } from '../model/communication-type-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { CommunicationTypeDataView } from '../model/communication-type-data-view';

@Component({
  selector: 'app-communication-types',
  templateUrl: './communication-types.component.html',
  styleUrls: ['./communication-types.component.scss'],
  providers: [CommunicationTypesService, TypeService]
})
export class CommunicationTypesComponent extends CommonComponent implements OnInit {
  @ViewChild('communicationForm') communicationForm;
  communicationTypeView: CommunicationTypeView;
  communicationTypeDataView: CommunicationTypeDataView;
  filterViewModel: SearchCommunicationTypeView;
  communicationTypeForm: FormGroup;

  filterRowData: any = [];
  closeAddPanel: boolean;
  items = [];
  selectedItems: any;
  commnucationMessageTypeId: any;
  validate = true;
  isEdit: boolean;

  // Table Variables 
  tableSettings: {};
  columns: any[];
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  currentComponent = 'CommunicationTypesComponent';
  httpStatus: any;
  updateId: any;



  constructor(private communicationTypesService: CommunicationTypesService,
    private typeService: TypeService, private _fb: FormBuilder, public dialog: MatDialog,
    public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.initializeTableSettings();
    this.initializeForm();
    this.initializeModel();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.setColumnHeaders();
    this.commnucationMessageTypeId = [];
    this.getDeliveryoptions();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }
    this.getAllCommunicationTypes();
  }

  initializeModel(): void {
    this.communicationTypeView = {
      name: null,
      communicationTypeDeliveryOptions: []
    };

    this.communicationTypeDataView = {
      id: null,
      name: null,
      communicationTypeDeliveryOptions: []
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: 'Name',
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      Name: []
    };
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'communicationTypeName', header: 'Name', sort: false },
      { field: 'communicationDeliveryName', header: 'Delivery Options', sort: false },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: this.rows,
      columns: this.columns,
      tablename: 'Communication Types',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      visibleSelectAll: true,
      isMultiDeleteRequired: false,
      isPaginationRequired: true
    };
  }

  initializeForm(): void {
    this.communicationTypeForm = this._fb.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      communicationTypeDeliveryOptions: new FormControl(null, [Validators.required]),
    });
  }

  tableData(_event: SearchCommunicationTypeView): void {
    this.filterViewModel = _event;
    this.getAllCommunicationTypes();
  }

  getAllCommunicationTypes(): void {
    this.communicationTypesService.getCommunicationTypes(this.filterViewModel.Name,
      this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
      subscribe(res => {
        this.bindCommunicationTypeResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  bindCommunicationTypeResult(data: any): void {
    if (!data.communicationListView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.communicationListView.list;
      this.totalRowsCount = data.communicationListView.totalItems;
      this.pageCnt = data.communicationListView.totalPages;
    }
    this.filterRowData = [];
    if (data.communicationListView) {
      this.filterViewModel.pageNumber = data.communicationListView.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Communication Types',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters,
      rowGroupingColumns: ['communicationTypeName'],
      headerOperations: {
        addingForm: {
          required: true,
          btnName: 'New'
        },
        infoButton: {
          required: true,
          text: 'Communication Types'
        }
      }
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
            return value.communicationTypeName === element.communicationTypeName;
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
        if (element.communicationTypeName === element1.communicationTypeName &&
          element.communicationDeliveryName === element1.communicationDeliveryName &&
          element.communicationTypeId === element1.communicationTypeId &&
          element.communicationDeliveryId === element1.communicationDeliveryId) {
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

  getDeliveryoptions(): void {
    this.typeService.typesByTypeCategoryCode('CMT').subscribe(res => {
      this.items = res.types;
      this.items.forEach(element => {
        element.label = element.name;
        element.value = element.id;
      });
    });
  }

  onSelectChange(event): void {
    this.commnucationMessageTypeId = [];
    if (event) {
      event.forEach(e => {
        this.commnucationMessageTypeId.push({ commnucationMessageTypeId: e.id || e.value });
      });
    }
  }

  // edit assessment categories based on id
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
      this.isEdit = true;
      this.closeAddPanel = false;
      this.communicationTypesService.communicationTypesDetails(event.clickedRow.communicationTypeId).subscribe(res => this.retCommunicationTypeById(res), error => {
        this.errorResponse(error);
      });
    }
    else if (event.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.communicationTypesService.deleteCommunicationTypes(event.clickedRow.communicationTypeId).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        else if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
  }

  retCommunicationTypeById(res): void {
    this.selectedItems = [];
    this.updateId = res.communicationTypeDataView.id;
    res.communicationTypeDataView.communicationTypeDeliveryOptions.forEach(cmId => {
      this.items.forEach(eId => {
        if (cmId.commnucationMessageTypeId === eId.value) {
          this.selectedItems.push({
            value: eId.value, label: eId.label, cmDelId: cmId.id
          });
        }
      });
    });
    this.communicationTypeForm.controls.name.setValue(res.communicationTypeDataView.name);
    this.communicationTypeForm.controls.communicationTypeDeliveryOptions.setValue(this.selectedItems);
    this.isEdit = true;
  }

  deleteResponse(response: any): void {
    this.getAllCommunicationTypes();
    this.openSnackBar(response.messages.ResultMessage);
  }

  updateComTypeDetails(): void {
    this.communicationTypeDataView.id = this.updateId;
    this.communicationTypeDataView.name = this.communicationTypeForm.value.name;
    this.communicationTypeDataView.communicationTypeDeliveryOptions = [];
    if (this.commnucationMessageTypeId.length) {
      this.commnucationMessageTypeId.forEach(res => {
        const Id = this.selectedItems.find(x => x.value === res.commnucationMessageTypeId)
          === undefined ? 0 : this.selectedItems.find(x => x.value === res.commnucationMessageTypeId).cmDelId;
        this.communicationTypeDataView.communicationTypeDeliveryOptions.push({
          id: Id, commnucationMessageTypeId: res.commnucationMessageTypeId
        });
      });
    }
    else {
      this.selectedItems.forEach(selItems => {
        this.communicationTypeDataView.communicationTypeDeliveryOptions.push({
          id: selItems.cmDelId, commnucationMessageTypeId: selItems.value
        });
      });
    }
  }

  submitCommunicationForm(): void {
    this.communicationTypeForm.controls.name.patchValue(this.communicationTypeForm.value.name.trim());
    if (this.communicationTypeForm.valid && this.isEdit === true) {
      this.communicationTypeDataView = {};
      this.updateComTypeDetails();
      this.communicationTypesService.updateCommunicationTypes(this.communicationTypeDataView).subscribe(res => this.resResult(res), error => {
        this.errorResponse(error);
      });
    }
    else if (this.communicationTypeForm.valid) {
      this.communicationTypeForm.value.communicationTypeDeliveryOptions = this.commnucationMessageTypeId;
      Object.assign(this.communicationTypeView, this.communicationTypeForm.value);
      this.communicationTypesService.createCommunicationTypes(this.communicationTypeView).subscribe(res => this.resResult(res), error => {
        this.errorResponse(error);
      });
    }
  }

  resResult(res: any): void {
    this.cancel();
    this.getAllCommunicationTypes();
    this.openSnackBar(res.messages.ResultMessage);
  }

  // Cancel Button
  cancel(): void {
    this.closeAddPanel = true;
    this.communicationForm.resetForm();
  }

  // add new form for assessment categories
  onAddFormClick(): void {
    this.closeAddPanel = false;
    this.isEdit = false;
    this.selectedItems = [];
    this.communicationForm.resetForm();
  }
}
