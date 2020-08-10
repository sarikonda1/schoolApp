import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { RoutingService } from 'app/service/Transport/routing.service';
import { SearchTransportRoutesView } from '../model/search-transport-routes-view';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
@Component({
  selector: 'app-vehicle-route-database',
  templateUrl: './vehicle-route-database.component.html',
  styleUrls: ['./vehicle-route-database.component.scss'],
  providers: [RoutingService]
})
export class VehicleRouteDatabaseComponent extends CommonComponent implements OnInit {
  filterViewModel: SearchTransportRoutesView;
  routeTypeForm: FormGroup;
  routeTypes: any[];
  httpStatus: any;

  // table variables
  tableSettings: {};
  rows: Array<any> = [];
  pageCnt: number;
  totalRowsCount: number;
  custRowsPerPageOptions: Array<number> = [];
  cols: any[];
  currentComponent = 'VehicleRouteDatabaseComponent';
  routeTypesData: { label: string; value: string; code: string }[];
  routeId: any;
  selectedItem: any;
  constructor(private router: Router, private routingService: RoutingService,
    public dialog: MatDialog, public commonService: CommonService, public dialogRef: MatDialog,
    public snackBar: MatSnackBar) {
    super();
    this.initializeForm();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
  }

  ngOnInit(): void {
    this.getRouteTypes();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      if (this.filterViewModel.routeTypeId && this.filterViewModel.routeTypeId.length) {
        const id = this.filterViewModel.routeTypeId[0];
        this.routeTypeForm.controls['routeTypeId'].setValue(id);
        this.selectedItem = id;
        this.getAllFilteredTransportRoutes();
      }
    }
  }

  getRouteTypes(): void {
    this.routeTypesData = [];
    this.routingService.routeTypes().
      subscribe((res) => {
        res.forEach(e => {
          this.routeTypesData.push({
            value: e.id, label: e.name,
            code: e.code
          });
        });
        this.routeTypes = this.routeTypesData;
      }, error => {
        this.errorResponse(error);
      });
  }

  initializeForm(): void {
    this.routeTypeForm = new FormGroup({
      routeTypeId: new FormControl(null, [Validators.required])
    });
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      // routeName: [],
      // routeNumber: [],
      // routeTypeId: [],
      // routeDescription: [],
    };
  }

  setColumnHeaders(): void {
    this.cols = [
      { field: 'routeName', header: 'Route Name', sort: true },
      { field: 'routeNumber', header: 'Route Number', sort: true },
      { field: 'routeDescription', header: 'Route Description', sort: true },
      { field: 'routeType', header: 'Route Type', sort: false },
      { field: 'actions', header: 'Actions', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.cols,
      model: this.filterViewModel,
      tablename: 'List Of Vehicle Routes',
      componentName: this.currentComponent,
    };
  }

  getTableDataDetails(data: any): void {
    this.routeTypeForm.controls['routeTypeId'].reset();
    if (data && !Array.isArray(data)) {
      this.filterViewModel.routeTypeId = [data];
    } else {
      this.filterViewModel.routeTypeId = [];
    }
    this.getAllFilteredTransportRoutes();
  }

  tableData(_event: SearchTransportRoutesView): void {
    this.filterViewModel = _event;
    this.filterViewModel.routeTypeId = [this.routeTypeForm.value.routeTypeId];
    this.getAllFilteredTransportRoutes();
  }

  getAllFilteredTransportRoutes(): void {
    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.routingService.vehicleRouteS(this.filterViewModel.sortBy, this.filterViewModel.routeName, this.filterViewModel.routeNumber, this.filterViewModel.routeTypeId,
      this.filterViewModel.routeDescription, this.filterViewModel.sortOrder,
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
      subscribe(res => {
        this.bindTransportRoutesResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  actions(operationData): void {
    if (operationData.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig._View_Route + operationData.clickedRow.id + '/' + operationData.clickedRow.routeType]);
    } else if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.router.navigate([RouteConfig._Edit_Route + operationData.clickedRow.id]);
    }
    else if (operationData.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        width: '400px',
        disableClose: true,
        data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedroute'), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });

      // Conformation for Delete Route
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.routingService.deleteTransportRoute(operationData.clickedRow.id).
            subscribe(res => {
              this.deleteTransportRoutesResult(res);
            }, error => {
              this.errorResponse(error);
            });
        }
      });
    }
  }

  deleteTransportRoutesResult(data: any): void {
    this.getAllFilteredTransportRoutes();
    this.openSnackBar(data.messages.ResultMessage);
  }

  bindTransportRoutesResult(data: any): void {
    if (!data.vehicleDetailsDataView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.vehicleDetailsDataView.list;
      this.totalRowsCount = data.vehicleDetailsDataView.totalItems;
      this.pageCnt = data.vehicleDetailsDataView.totalPages;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          }, {
            name: AppSettings.VIEW_OPERATION,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW
          },
          {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE_ICON,
            operationName: AppSettings.DELETE
          }
        ];
      });
    }
    if (data.vehicleDetailsDataView) {
      this.filterViewModel.pageNumber = data.vehicleDetailsDataView.pageNumber;
    }
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.cols,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'List Of Vehicle Routes',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: data.filters.filter(x => x.type === 'text'),
    };
  }

  reDirect(): void {
    this.router.navigate([RouteConfig._Add_Route]);
  }
}
