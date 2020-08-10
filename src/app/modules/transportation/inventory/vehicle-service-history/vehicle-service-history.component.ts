import { Component, OnInit, OnChanges, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AppSettings, Pattern } from 'app/app.constants';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceVehicleView } from '../../models/service-vehicle-view';
import { VehicleServiceView } from '../../models/vehicle-service-view';
import { VehicleServiceFilterViewModel } from '../../models/vehicle-service-filter-viewmodel';
import { VehicleServiceHistroyService } from 'app/service/Transport/vehicle-service-history.service';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';



@Component({
  selector: 'app-vehicle-service-history',
  templateUrl: './vehicle-service-history.component.html',
  styleUrls: ['./vehicle-service-history.component.scss'],
  providers: [VehicleServiceHistroyService]
})
export class VehicleServiceHistoryComponent extends CommonComponent implements OnInit, OnChanges {
  dataLoaded = Promise.resolve(false);
  @ViewChild('vehicleService') vehicleService;
  @ViewChild('serviceForm') serviceForm;
  vehicleServiceView: VehicleServiceView;
  serviceVehicleView: ServiceVehicleView;
  vehicleServiceFilterView: VehicleServiceFilterViewModel;
  attachmentInfo: AttachmentViewModel;
  HttpStatus: any;
  currentComponent: any;
  flagImageProp = {};
  rows: any[];
  totalItems: any;
  cols: any;
  pageCnt: any;
  selectedChanged: any;
  vehicleId: string;
  serviceHistoryForm: FormGroup;
  closeAddPanel = false;
  serviceValidate = true;
  updateButtonShow: boolean;
  inSpectionDetails: any;
  nameImgProp: any;
  id: any;
  tabSettings: {};
  logoImgProp: {};
  fileName: string;

  constructor(private _fb: FormBuilder, public commonService: CommonService,
    public route: ActivatedRoute, public dialogRef: MatDialog,
    public vehicleHistoryService: VehicleServiceHistroyService, public storeService: StoreService, private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer, public snackBar: MatSnackBar) {
    super();
  }


  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.vehicleId = param.id;
      }
    });

    this.HttpStatus = require('http-status-codes');

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.vehicleServiceFilterView,
      componentName: this.currentComponent,
    };
    this.vehicleServiceFilterView = {
      vehicleId: '',
      vehicleName: [],
      registrationNumber: [],
      serviceDate: '',
      odometerReadingAtService: '',
      nextServiceDate: '',
      odomenterReadingNextService: '',
      additionalDetails: [],
      serviceDateBegin: '',
      serviceDateEnd: '',
      nextServiceDateBegin: '',
      nextServiceDateEnd: '',
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    // Table Colums
    this.cols = [
      { field: 'vehicleName', header: 'Vehicle Name', sort: true },
      { field: 'registrationNumber', header: 'Registration Number', sort: true },
      { field: 'serviceDate', header: 'Service Date', sort: true },
      { field: 'nextServiceDate', header: 'Next Service Date', sort: true },
      { field: 'odometerReadingAtService', header: 'Odometer Reading At Service', sort: true },
      { field: 'odomenterReadingNextService', header: 'Odometer Reading Next Service', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.vehicleServiceFilterView = modelTableComponent;
    }
    this.getAllVehicleService(this.vehicleServiceFilterView);

    this.serviceHistoryForm = new FormGroup({
      id: new FormControl(''),
      vehicleId: new FormControl(''),
      serviceDate: new FormControl('', [Validators.required]),
      odometerReadingAtService: new FormControl(0,  [Validators.min(1), Validators.max(999999), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      odomenterReadingNextService: new FormControl(0,  [Validators.min(1), Validators.max(999999), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      nextServiceDate: new FormControl('', [Validators.required]),
      additionalDetails: new FormControl('', [Validators.maxLength(200), Validators.pattern(Pattern.ALPHANUMERIC)]),
      attachment: this._fb.group({
        fileName: null,
        fileValue: null,
      }),
    });

    this.vehicleServiceView = {
      vehicleId: this.vehicleId,
      serviceDate: new Date(),
      nextServiceDate: new Date(),
      odometerReadingAtService: 0,
      odomenterReadingNextService: 0,
      additionalDetails: '',
      attachment: this.attachmentInfo
    };
    this.attachmentInfo = {
      fileName: '',
      fileValue: ''
    };
    this.serviceVehicleView = {
      id: '',
      vehicleId: this.vehicleId,
      serviceDate: new Date(),
      nextServiceDate: new Date(),
      odometerReadingAtService: 0,
      odomenterReadingNextService: 0,
      additionalDetails: '',
      attachment: this.attachmentInfo
    };
    this.attachmentInfo = {
      fileName: '',
      fileValue: ''
    };

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.vehicleServiceFilterView = modelTableComponent;

    }
  }

  onAddFormClick(): void {
    this.updateButtonShow = false;
    this.serviceValidate = false;
    this.serviceHistoryForm.reset();
    this.serviceForm.resetForm();
    this.closeAddPanel = false;
  }

  getAllVehicleService(vehicleServiceFilterView: VehicleServiceFilterViewModel): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.vehicleServiceFilterView = modelTableComponent;
    }
    this.vehicleServiceFilterView = vehicleServiceFilterView;
    this.vehicleHistoryService.getAllServiceHistory(this.vehicleId, this.vehicleServiceFilterView.vehicleName, this.vehicleServiceFilterView.registrationNumber,
      this.vehicleServiceFilterView.serviceDate,
      this.vehicleServiceFilterView.odometerReadingAtService,
      this.vehicleServiceFilterView.nextServiceDate,
      this.vehicleServiceFilterView.odomenterReadingNextService,
      this.vehicleServiceFilterView.additionalDetails,
      this.vehicleServiceFilterView.serviceDateBegin,
      this.vehicleServiceFilterView.serviceDateEnd,
      this.vehicleServiceFilterView.nextServiceDateBegin,
      this.vehicleServiceFilterView.nextServiceDateEnd, this.vehicleServiceFilterView.sortBy,
      this.vehicleServiceFilterView.sortOrder,
      this.vehicleServiceFilterView.pageNumber, this.vehicleServiceFilterView.pageSize).subscribe(res => {
        this.getStudent(res);
        this.dataLoaded = Promise.resolve(true);
      }, error => {
        this.errorResponse(error);
      });
  }
  // response of application categories
  getStudent(data: any): void {
    if (data.resultList == null) {
      this.rows = [];
    }
    else {
      this.rows = data.resultList.list;
      this.totalItems = data.resultList.totalItems;

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
        },
        {
          name: AppSettings.VIEW,
          icon: AppSettings.DETAILS_ICON,
          operationName: AppSettings.VIEW
        }
      ];
      e.serviceDate = (e.serviceDate == null) ? null : this.commonService.customDateFormat(e.serviceDate, this.getSchoolDateFormat()).date;
      e.nextServiceDate = (e.nextServiceDate == null) ? null : this.commonService.customDateFormat(e.nextServiceDate, this.getSchoolDateFormat()).date;
    });
    if (data.resultList) {
      this.vehicleServiceFilterView.pageNumber = data.resultList.list.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.vehicleServiceFilterView,
      rows: this.rows,
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Vehicle Service History'
        },
      },

      filtersList: data.filters
    };
  }
  // method for when click cancel panel it will open
  closeAddForm(): void {
    this.logoImgProp = {};
    this.clearImages(true);
    this.serviceValidate = false;
    this.commonService.setOverlay(AppSettings.HIDE);
    this.closeAddPanel = true;
    this.serviceHistoryForm.reset();
    this.serviceForm.resetForm();
  }

  // submit the data when we post the service vehicle history
  onSubmit(serviceHistoryForm): void {
    if (this.inSpectionDetails != null) {
      serviceHistoryForm.value.id = this.inSpectionDetails.id;
    }
    if (serviceHistoryForm.invalid) {
      this.serviceValidate = true;
      return;
    }
    this.serviceValidate = false;
    serviceHistoryForm.value.vehicleId = this.vehicleId;
    serviceHistoryForm.value.inspectionDate = this.getFormattedDateByAPIPattern(serviceHistoryForm.value.inspectionDate);
    serviceHistoryForm.value.nextInspectionDate = this.getFormattedDateByAPIPattern(serviceHistoryForm.value.nextInspectionDate);
    if (serviceHistoryForm.value.id == null) {
      this.vehicleServiceView = serviceHistoryForm.value;
      this.vehicleHistoryService.createVehicleServiceHistory(this.vehicleServiceView).subscribe(res => this.serviceResponse(res), error => {
        this.errorResponse(error);
      });
    }

    else {
      this.serviceVehicleView = serviceHistoryForm.value;
      this.serviceVehicleView.id = this.inSpectionDetails.id;
      this.vehicleHistoryService.vehicleServiceHistory(this.serviceVehicleView).subscribe(res => this.serviceResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  serviceResponse(data): void {
    this.inSpectionDetails = null;
    this.clearImages(true);
    if (data.statusCode === this.HttpStatus.OK) {
      this.getAllVehicleService(this.vehicleServiceFilterView);
      this.closeAddPanel = true;
      this.clearImages(true);
      this.serviceForm.resetForm();
      this.serviceValidate = false;
      this.flagImageProp = null;
      this.updateButtonShow = false;
    }
    else {
      this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }


  rowActions(data: any): void {
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.vehicleHistoryService.deleteVehicleService(data.clickedRow.id).
            subscribe(res => this.serviceResponse(res), error => {
              this.errorResponse(error);
            });
        }
      });
    }
    else if (data.operation === AppSettings.EDIT) {
      this.updateButtonShow = true;
      this.closeAddPanel = false;
      this.vehicleHistoryService.getServiceHistory(data.clickedRow.id).subscribe(res => {
        if (res.resultModel) {
          this.inSpectionDetails = res.resultModel;
          this.serviceHistoryForm.controls['serviceDate'].setValue(res.resultModel.serviceDate);
          this.serviceHistoryForm.controls['nextServiceDate'].setValue(res.resultModel.nextServiceDate);
          this.serviceHistoryForm.controls['odometerReadingAtService'].setValue(res.resultModel.odometerReadingAtService);
          this.serviceHistoryForm.controls['odomenterReadingNextService'].setValue(res.resultModel.odomenterReadingNextService);
          this.serviceHistoryForm.controls['additionalDetails'].setValue(res.resultModel.additionalDetails);
          this.fileName = '';
          if (res.resultModel.attachment !== null && res.resultModel.attachment !== undefined) {
            this.fileName = res.resultModel.attachment.fileName;
            this.logoImgProp = {
              src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.resultModel.attachment.fileName))
            };

            this.storeService.storeFileEncryptByFileNameGet(res.resultModel.attachment.fileName)
              .subscribe(result => {
                if (result) {
                  this.serviceHistoryForm.controls.attachment.value.fileName = result.fileNameWithExtension;
                  this.serviceHistoryForm.controls.attachment.value.fileValue = result.value;
                }
              });

            this.cd.detectChanges();
          }
        }
      }, error => {
        this.errorResponse(error);
      });
    }

    else if (data.operation === (AppSettings.VIEW_ICON).toLowerCase()) {
      if (data.clickedRow.attachment != null) {
        this.nameImgProp = this.storeService.getFilePath(data.clickedRow.attachment.fileName);
        window.open(this.nameImgProp);
      }
      else {
        this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
        return;
      }
    }
  }

  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.fileName = '';
      if (this.serviceHistoryForm.controls.attachment.value !== null) {
        this.serviceHistoryForm.controls.attachment.value.fileName = null;
        this.serviceHistoryForm.controls.attachment.value.fileValue = null;
      }
    }
    this.cd.detectChanges();

  }

  imgChanged(event): void {
    if (this.checkFileSize(event[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
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
        that.serviceHistoryForm.controls.attachment.value.fileName = file.name;
        that.serviceHistoryForm.controls.attachment.value.fileValue = ((<string>reader.result).split(',')[1]);
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


