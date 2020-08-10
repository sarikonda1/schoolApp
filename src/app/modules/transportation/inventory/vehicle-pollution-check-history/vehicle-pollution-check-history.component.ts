import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VehiclePollutionCheckSearchView } from '../../models/vehicle-pollution-check-search-view';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { VehicleInventoryService } from 'app/service/Transport/vehicle-inventory.service';
import { ActivatedRoute } from '@angular/router';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { VehiclePollutionDataView } from '../../models/vehicle-pollution-data-view';
import { VehiclePollutionUpdateView } from '../../models/vehicle-pollution-update-view';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-vehicle-pollution-check-history',
  templateUrl: './vehicle-pollution-check-history.component.html',
  styleUrls: ['./vehicle-pollution-check-history.component.scss']
})
export class VehiclePollutionCheckHistoryComponent extends CommonComponent implements OnInit {
  pollutionCheckForm: FormGroup;
  @ViewChild('pollutionCheck') myForm;
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  validate: boolean;
  HttpStatus: any;
  disbleSubmitBtn = false;
  closeAddPanel: boolean;
  updateBtn: boolean;
  vehiclePollutionCheckSearchView: VehiclePollutionCheckSearchView;
  pollutionDataView: VehiclePollutionDataView;
  pollutionUpdateView: VehiclePollutionUpdateView;
  cols: any[];
  tabSettings: {};
  currentComponent = 'VehiclePollutionCheckHistoryComponent';
  custRowsPerPageOptions: any[];
  rows: any[];
  totalItems: any;
  pageCnt: any;
  isedit: boolean;
  logoImgProp: any;
  uploadFiles: FormGroup;
  vehicleId: any;
  pollutionCheckId: any;
  nameImgProp: any;
  flagImageProp: any;
  fileName: string;
  constructor(private storeService: StoreService, public commonService: CommonService,
    private _fb: FormBuilder, private sanitizer: DomSanitizer, public dialogRef: MatDialog, private cd: ChangeDetectorRef,
    public dialog: MatDialog, private route: ActivatedRoute, private vehicleInventoryService: VehicleInventoryService, public snackBar: MatSnackBar) {
    super();
    this.vehiclePollutionCheckSearchView = {
      vehicleId: '',
      sortBy: '',
      pollutionCheckDateBegin: [],
      pollutionCheckDateEnd: [],
      pollutionCheckExpiryDateBegin: [],
      pollutionCheckExpiryDateEnd: [],
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };

    this.pollutionDataView = {
      vehicleId: '',
      pollutionCheckDate: '',
      pollutionCheckExpiryDate: '',
      attachment:
      {
        fileName: '',
        fileValue: ''
      }
    };

    this.pollutionUpdateView = {
      id: '',
      pollutionCheckDate: '',
      pollutionCheckExpiryDate: '',
      attachment:
      {
        fileName: '',
        fileValue: ''
      }
    };
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.vehicleId = params.id;
      }
    });

    this.HttpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.vehiclePollutionCheckSearchView = modelTableComponent;
    }

    this.cols = [
      { field: 'pollutionCheckDate', header: 'Pollution Check Date', sort: true },
      { field: 'pollutionCheckExpiryDate', header: 'Pollution Check Expiry Date', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.vehiclePollutionCheckSearchView,
      componentName: this.currentComponent,
    };
    this.uploadFiles = this._fb.group({
      pollutionFileNameWithExtension: null,
      pollutionFileValue: null,
    });

    this.pollutionCheckForm = new FormGroup({
      pollutionCheckDate: new FormControl('', [Validators.required]),
      pollutionCheckExpiryDate: new FormControl('', [Validators.required]),
    });
    this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
  }


  // Get all VehiclePollutionCheckHistory
  getPollutionCheckHistory(vehiclePollutionCheckData: any): void {
    this.vehiclePollutionCheckSearchView = vehiclePollutionCheckData;
    this.vehicleInventoryService.fetchVehiclePollutionCheckHistory(this.vehicleId, vehiclePollutionCheckData.pollutionCheckDateBegin,
      vehiclePollutionCheckData.pollutionCheckDateEnd, vehiclePollutionCheckData.pollutionCheckExpiryDateBegin, vehiclePollutionCheckData.pollutionCheckExpiryDateEnd,
      vehiclePollutionCheckData.sortBy,
      vehiclePollutionCheckData.sortOrder, vehiclePollutionCheckData.pageNumber, vehiclePollutionCheckData.pageSize).subscribe(res =>
        this.vehiclesPollutionData(res), error => {
          this.errorResponse(error);
        });
  }

  // Binding data To Table
  vehiclesPollutionData(data: any): void {
    this.custRowsPerPageOptions = [];
    if (data.resultList == null) {
      this.rows = [];
    }
    else {
      data.resultList.list.forEach(formatDate => {
        formatDate.pollutionCheckDate =
          formatDate.pollutionCheckDate != null ? this.commonService.customDateFormat(formatDate.pollutionCheckDate.toString(), this.getSchoolDateFormat()).date : null;
        formatDate.pollutionCheckExpiryDate =
          formatDate.pollutionCheckExpiryDate != null ? this.commonService.customDateFormat(formatDate.pollutionCheckExpiryDate.toString(), this.getSchoolDateFormat()).date : null;
      });
      this.rows = data.resultList.list;
      this.totalItems = data.resultList.totalItems;
    }
    this.rows.forEach(e => {
      e.operations = [
        {
          name: AppSettings.EDIT_OPERATION,
          icon: AppSettings.EDIT
        },
        {
          name: AppSettings.VIEW,
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
    if (data.resultList) {
      this.vehiclePollutionCheckSearchView.pageNumber = data.resultList.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.vehiclePollutionCheckSearchView,
      rows: this.rows,
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
          text: 'Vehicle Pollution Check History'
        }
      },
      filtersList: data.filters,
      tabTable: true,
      padding: true,
    };
  }

  // Adding Post Form
  onAddFormClick(): void {
    this.validate = false;
    this.closeAddPanel = false;
    this.updateBtn = false;
    this.disbleSubmitBtn = true;
  }


  onSubmit(pollutionForm: any): any {
    this.disbleSubmitBtn = true;
    if (pollutionForm.status === AppSettings.VALID) {
      this.validate = false;
      this.disbleSubmitBtn = false;

      if (this.isedit === true) {
        this.pollutionUpdateView.pollutionCheckDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckDate),
          this.pollutionUpdateView.pollutionCheckExpiryDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckExpiryDate),
          this.pollutionUpdateView.id = this.pollutionCheckId;
          this.pollutionUpdateView.attachment.fileName = this.uploadFiles.value.pollutionFileNameWithExtension,
          this.pollutionUpdateView.attachment.fileValue = this.uploadFiles.value.pollutionFileValue;
          this.vehicleInventoryService.updateVehiclePollutionCheck(this.pollutionUpdateView).subscribe(res => this.updateResponse(res), error => {
          this.errorResponse(error);
        });
      }
      else {
        this.pollutionDataView.vehicleId = this.vehicleId;
        this.pollutionDataView.pollutionCheckDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckDate),
        this.pollutionDataView.pollutionCheckExpiryDate = this.getFormattedDateByAPIPattern(pollutionForm.value.pollutionCheckExpiryDate),
        this.pollutionDataView.attachment.fileName = this.uploadFiles.value.pollutionFileNameWithExtension,
        this.pollutionDataView.attachment.fileValue = this.uploadFiles.value.pollutionFileValue;

        this.vehicleInventoryService.vehilePollutionCheck(this.pollutionDataView).subscribe(res => this.updateResponse(res), error => {
          this.errorResponse(error);
        });

      }
    }
    else {
      this.validate = true;
      return false;
    }
  }


  // update Response
  updateResponse(response: any): void {
    this.clearImages(true);
    this.isedit = false;
    if (response.statusCode === this.HttpStatus.OK || response.statusCode === this.HttpStatus.CONFLICT) {
          if (response.statusCode === this.HttpStatus.CONFLICT) {
            this.closeAddPanel = false;
          }
          else {
            this.closeAddPanel = true;
            this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
            this.myForm.resetForm();
            this.clearImages(true);
            this.updateBtn = false;
            this.disbleSubmitBtn = false;
          }
    }
    else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(response.messages.ResultMessage);
  }
  // End

  // Cancel Button
  cancel(): void {
    this.clearImages(true);
    this.closeAddPanel = true;
    this.disbleSubmitBtn = false;
    this.myForm.resetForm();
    this.isedit = false;
  }


  // For Edit and Delete Events
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.EDIT) {
      this.isedit = true;
      this.closeAddPanel = false;
      this.updateBtn = true;
      this.disbleSubmitBtn = true;
      this.pollutionCheckId = event.clickedRow.id;
      this.vehicleInventoryService.getVehiclePollutionCheck(event.clickedRow.id).subscribe(res => {
        this.pollutionCheckForm.controls['pollutionCheckDate'].setValue(res.resultModel.pollutionCheckDate);
        this.pollutionCheckForm.controls['pollutionCheckExpiryDate'].setValue(res.resultModel.pollutionCheckExpiryDate);
        this.fileName = '';
        if (res.resultModel.attachment !== null && res.resultModel.attachment !== undefined) {
          this.fileName = res.resultModel.attachment.fileName;
          this.logoImgProp = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.resultModel.attachment.fileName))
          };

          this.storeService.storeFileEncryptByFileNameGet(res.resultModel.attachment.fileName)
            .subscribe(result => {
              if (result) {
                this.uploadFiles.controls['pollutionFileNameWithExtension'].patchValue(result.fileNameWithExtension);
                this.uploadFiles.controls['pollutionFileValue'].patchValue(result.value);
              }
            });

          this.cd.detectChanges();
        }
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
          this.vehicleInventoryService.deleteVehiclePollutionCheck(event.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
            this.errorResponse(error);
          });
        }
        if (action === AppSettings.NO) {
          this.dialog.closeAll();
        }
      });
    }
    else if (event.operation === (AppSettings.VIEW).toLowerCase()) {
      if (event.clickedRow.attachment != null) {
        this.nameImgProp = this.storeService.getFilePath(event.clickedRow.attachment.fileName);
        window.open(this.nameImgProp);
      }
      else {
        this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
        return;
      }
    }
  }

  // Delete Response
  deleteResponse(response: any): void {
    this.getPollutionCheckHistory(this.vehiclePollutionCheckSearchView);
    this.openSnackBar(response.messages.ResultMessage);
  }

  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.fileName = '';
      this.uploadFiles.controls.pollutionFileNameWithExtension.patchValue(null);
      this.uploadFiles.controls.pollutionFileValue.patchValue(null);
    }
    this.cd.detectChanges();
  }

  imgChanged(event): void {
    if (this.checkFileSize(event[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)){
      return;
    }
    if (event && event.length > 0) {

      const reader = new FileReader();
      const file = event[0];
      reader.readAsDataURL(file);
      let image;
      image = new Image();
      image.src = reader.result;
      const that = this;

      reader.onload = (_event) => {
        that.uploadFiles.controls['pollutionFileNameWithExtension'].setValue(file.name);
        that.uploadFiles.controls['pollutionFileValue'].setValue((<string>reader.result).split(',')[1]);
        this.cd.detectChanges();
      };
      that.setFileProperties(image);
    }
  }

  setFileProperties(image): void {
    const data = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width: image.width,
      height: image.height
    };

    this.logoImgProp = {};
    this.logoImgProp = data;
    this.cd.detectChanges();
  }
}
