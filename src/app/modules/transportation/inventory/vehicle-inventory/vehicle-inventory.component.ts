import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { VehicleSearchView } from '../../models/vehicle-search-view';
import { AppSettings, Pattern } from 'app/app.constants';
import { CommonComponent } from 'app/shared/common/common.component';
import { VehicleInventoryService } from 'app/service/Transport/vehicle-inventory.service';
import { Router } from '@angular/router';
import { TransportModuleConfig } from 'app/url.config';
import { VehicleView } from '../../models/vehicle-view';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';
import { VehicleDetailsView } from '../../models/vehicle-details-view';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-vehicle-inventory',
  templateUrl: './vehicle-inventory.component.html',
  styleUrls: ['./vehicle-inventory.component.scss']
})
export class VehicleInventoryComponent extends CommonComponent implements OnInit {
  constructor(private router: Router, private vehicleInventoryService: VehicleInventoryService, private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef, private sanitizer: DomSanitizer, public dialog: MatDialog, public commonService: CommonService,
    private storeService: StoreService, public snackBar: MatSnackBar) {
    super();
    this.vehicleSearchView = {
      vehicleName: [],
      sortBy: '',
      vehicleModel: [],
      registrationNumber: [],
      maxCapacity: [],
      statusIds: [],
      sortOrder: AppSettings.SORT_ORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE
    };
  }

  @ViewChild('stepper') stepper;
  @ViewChild('vehicalDataForm') vehicalDataForm;
  @ViewChild('registrationForm') registrationForm;
  @ViewChild('additionalDataForm') additionalDataForm;
  @ViewChild('purchaseForm') purchaseForm;
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  vehicleSearchView: VehicleSearchView;
  vehicleView: VehicleView;
  vehicleDetailsView: VehicleDetailsView;
  vehicalDetailsForm: FormGroup;
  registrationInfoForm: FormGroup;
  additionalDetailsForm: FormGroup;
  purchaseInfoForm: FormGroup;
  interactedStepperIndex: Number = 0;
  closeAddPanel: boolean;
  isUpdate: boolean;
  validate = true;

  HttpStatus: any;
  cols: any[];
  tabSettings: {};
  currentComponent = 'VehicleInventoryComponent';
  custRowsPerPageOptions: any[];
  rows: any[];
  totalItems: any;
  pageCnt: any;
  vehicleImageProp: any;
  vehicleCertImageProp: any;
  attachmentInfo: AttachmentViewModel;
  button: any;
  vehicleId: any;
  filePaths: any = {
    image: '',
    certificate: ''
  };
  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.vehicleSearchView = modelTableComponent;
    }


    this.cols = [
      { field: 'vehicleName', header: 'Vehicle Name', sort: true },
      { field: 'vehicleModel', header: 'Vehicle Model', sort: true },
      { field: 'registrationNumber', header: 'Reg.Number', sort: true },
      { field: 'maxCapacity', header: 'Max Capacity', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.vehicleSearchView,
      tablename: 'List of Vehicles',
      componentName: this.currentComponent,
    };
    this.getAllVehicles(this.vehicleSearchView);

    // Stepper Form intialization
    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };
    this.vehicalDetailsForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(45)]],
      manufacturer: [null, [Validators.required, Validators.maxLength(45)]],
      model: [null, [Validators.required, Validators.maxLength(45)]],
      code: [null, Validators.maxLength(6)],
      maxCapacity: [null, [Validators.maxLength(45), Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(100)]],
      photoAttachment: this.attachmentInfo,
    });

    this.registrationInfoForm = this._formBuilder.group({
      regNumber: [null, Validators.maxLength(15)],
      regDate: [null],
      regExpDate: [null],
      registrationCertAttachment: this.attachmentInfo
    });

    this.additionalDetailsForm = this._formBuilder.group({
      chassisNumber: [null, Validators.maxLength(20)],
      engineNumber: [null, Validators.maxLength(20)],
      manufactureYear: [null],
    });

    this.purchaseInfoForm = this._formBuilder.group({
      purchaseCost: [null, [Validators.min(1), Validators.max(99999999.99), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]],
      purchaseDate: [null],
      purchaseOdometerReading: [null, [Validators.min(1), Validators.max(2147483647), Validators.pattern(Pattern.NUMBER_PATTERN)]],
    });

    this.vehicleView = {
      code: '',
      name: '',
      model: '',
      manufacturer: '',
      manufactureYear: new Date,
      regDate: new Date,
      regExpDate: new Date,
      regNumber: '',
      engineNumber: '',
      chassisNumber: '',
      purchaseDate: new Date,
      purchaseCost: 0,
      purchaseOdometerReading: 0,
      maxCapacity: 0,
      photoAttachment: this.attachmentInfo,
      registrationCertAttachment: this.attachmentInfo
    };
  }

  // Get all Vehicles 
  getAllVehicles(getVehiclesDataView: any): void {
    this.vehicleSearchView = getVehiclesDataView;
    this.vehicleInventoryService.getAllVehicles(getVehiclesDataView.vehicleName, getVehiclesDataView.vehicleModel,
      getVehiclesDataView.registrationNumber, getVehiclesDataView.maxCapacity, getVehiclesDataView.statusIds,
      getVehiclesDataView.sortBy,
      getVehiclesDataView.sortOrder, getVehiclesDataView.pageNumber, getVehiclesDataView.pageSize).subscribe(res => {
        this.vehiclesData(res);
      });
  }

  // Binding Vehicles To Table
  vehiclesData(data: any): void {
    this.custRowsPerPageOptions = [];
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
          icon: AppSettings.EDIT
        },
        {
          name: AppSettings.VIEW,
          icon: AppSettings.DETAILS_ICON,
          operationName: AppSettings.VIEW
        }
      ];
    });
    if (data.resultList) {
      this.vehicleSearchView.pageNumber = data.resultList.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.vehicleSearchView,
      rows: this.rows,
      tablename: 'List Of Vehicles',
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
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Inventory'
        }
      },
      filtersList: data.filters,
    };
  }

  openForm(): void {
    this.setDefaultFilepaths();
    this.interactedStepperIndex = 0;
    this.button = AppSettings.SUBMIT;
    this.isUpdate = false;
    this.closeAddPanel = false;

    // this.interactedStepperIndex = this.stepper._steps._results.length;
  }
  rowWiseActions(event: any): void {
    if (event.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([TransportModuleConfig._Transport_VehicleAllDetails + '/' + event.clickedRow.id]);
    }
    if (event.operation === AppSettings.EDIT) {
      this.isUpdate = true;
      this.closeAddPanel = false;
      this.button = AppSettings.UPDATE;
      this.vehicleId = event.clickedRow.id;
      this.setDefaultFilepaths();
      this.vehicleInventoryService.getVehicle(event.clickedRow.id)
        .subscribe((res: any) => this.vehicleData(res.vehicleDetailsView), error => {
          this.errorResponse(error);
        });
    }
  }
  setDefaultFilepaths(): void{
    this.filePaths = {
      image: '',
      certificate: ''
    };
  }
  // onCancelClick
  onCancel(): void {
    this.stepper.reset();
    this.vehicalDataForm.resetForm();
    this.registrationForm.resetForm();
    this.additionalDataForm.resetForm();
    this.purchaseForm.resetForm();
    this.clearImages();
    this.clearImagesRegistration();
    this.isUpdate = false;
    this.closeAddPanel = true;
  }

  clearImages(): void {
      this.vehicleImageProp = {};
      this.vehicalDetailsForm.controls.photoAttachment.patchValue(this.attachmentInfo);
      this.cd.detectChanges();
  }

  clearImagesRegistration(): void {
      this.vehicleCertImageProp = {};
      this.registrationInfoForm.controls.registrationCertAttachment.patchValue(this.attachmentInfo);
      this.cd.detectChanges();
  }

  onSelectionChange(event: any): void {
    if (event.selectedIndex > this.interactedStepperIndex) {
      this.interactedStepperIndex = event.selectedIndex;
    } else {
      this.stepper._steps._results.forEach((x, i) => {
        x.interacted = i < this.interactedStepperIndex ? true : false;
      });
    }
    if (event.selectedIndex === AppSettings.FOURTH_STEPPER) {
      this.stepper._steps._results.forEach((x, i) => {
        if (i > 0) {
          x.interacted = true;
        }
      });
    }
  }

  vehicleImgChanged(files, logo = false): void {
    if (this.checkFileSize(files[0], 'image', 2097152)) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    reader.onload = (_event) => {
      let image;
      image = new Image();
      image.src = reader.result;
      image.onload = function (): void {
        that.vehicleImageProp = {
          src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
        };
        that.vehicalDetailsForm.controls.photoAttachment.patchValue({ fileName: files[0].name, fileValue: (<string>image.src).split(',')[1] });
        that.filePaths.image = '';
        that.cd.detectChanges();
      };
    };
  }

  imgChanged(files, form): void {
    if (this.checkFileSize(files[0], AppSettings.TEXT_AND_IMAGE_FILE_EXTENSION, 2097152)) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    const that = this;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/)) {
      reader.onload = (_event) => {
        let image;
        image = new Image();
        image.src = reader.result;
        image.onload = function (): void {
          that.setImgProperties(image.src, files[0].name);
        };
      };
    } else {
      reader.onload = () => {
        let image;
        image = new Image();
        image.src = reader.result;
        that.setImgProperties(image.src, files[0].name);
      };
    }
    that.filePaths.certificate = '';
  }

  setImgProperties(imgSrc: string, fileName: string): void {
    const that = this;
    that.vehicleCertImageProp = {
      src: that.sanitizer.bypassSecurityTrustResourceUrl(imgSrc)
    };

    that.registrationInfoForm.controls.registrationCertAttachment.patchValue({ fileName: fileName, fileValue: (<string>imgSrc).split(',')[1] });
    that.cd.detectChanges();
  }

  onSubmit(): void {
    if (!this.isUpdate) {
      this.dataAssignment(this.vehicleView);
      this.vehicleInventoryService.createVehicle(this.vehicleView)
        .subscribe((res: any) => this.addUpdateResponse(res), error => {
          this.errorResponse(error);
        });
    } else {
      this.vehicleDetailsView = {};
      this.dataAssignment(this.vehicleView);
      this.vehicleView['id'] = this.vehicleId;
      this.vehicleDetailsView = this.vehicleView;
      if (this.vehicleView.registrationCertAttachment != null) {
        this.vehicleDetailsView.registrationCertAttachment.fileName = this.vehicleView.registrationCertAttachment.fileName;
        this.vehicleDetailsView.registrationCertAttachment.fileValue = this.vehicleView.registrationCertAttachment.fileValue;
      }
      this.vehicleInventoryService.updateVehicle(this.vehicleDetailsView)
        .subscribe((res: any) => this.addUpdateResponse(res), error => {
          this.errorResponse(error);
        });
    }
  }

  dataAssignment(vehicalDataAssign: any): void {
    Object.assign(vehicalDataAssign, this.vehicalDetailsForm.value, this.registrationInfoForm.value, this.additionalDetailsForm.value, this.purchaseInfoForm.value);
    vehicalDataAssign['photoAttachment'] = null;
    vehicalDataAssign['registrationCertAttachment'] = null;
    if (this.vehicalDetailsForm.value.photoAttachment && this.vehicalDetailsForm.value.photoAttachment.fileName) {
      Object.assign(vehicalDataAssign['photoAttachment'] = {}, this.vehicalDetailsForm.controls.photoAttachment.value);
    }
    if (this.registrationInfoForm.value.registrationCertAttachment && this.registrationInfoForm.value.registrationCertAttachment.fileName) {
      Object.assign(vehicalDataAssign['registrationCertAttachment'] = {}, this.registrationInfoForm.controls.registrationCertAttachment.value);
    }
  }

  addUpdateResponse(result: any): void {
    this.onCancel();
    this.getAllVehicles(this.vehicleSearchView);
    this.openSnackBar(result.messages.ResultMessage);
  }

  vehicleData(vehicleDetails: any): void {
    this.vehicalDetailsForm.patchValue(vehicleDetails);
    this.registrationInfoForm.patchValue(vehicleDetails);
    this.additionalDetailsForm.patchValue(vehicleDetails);
    this.purchaseInfoForm.patchValue(vehicleDetails);
    const that = this;
    if (vehicleDetails.photoAttachment && vehicleDetails.photoAttachment.fileName) {
      that.vehicleImageProp = {
        src: this.getFileName(vehicleDetails.photoAttachment.fileName)
      };
      if (vehicleDetails.photoAttachment.fileName){
        this.filePaths.image = this.storeService.getFilePath(vehicleDetails.photoAttachment.fileName); 
      }
      this.setFormAttachmentValue(that.vehicalDetailsForm.controls.photoAttachment, vehicleDetails.photoAttachment.fileName);
    }
    if (vehicleDetails.registrationCertAttachment && vehicleDetails.registrationCertAttachment.fileName) {
      that.vehicleCertImageProp = {
        src: this.getFileName(vehicleDetails.registrationCertAttachment.fileName)
      };
      if (vehicleDetails.registrationCertAttachment.fileName){
        this.filePaths.certificate = this.storeService.getFilePath(vehicleDetails.registrationCertAttachment.fileName); 
      }
      this.setFormAttachmentValue(that.registrationInfoForm.controls.registrationCertAttachment, vehicleDetails.registrationCertAttachment.fileName);
    }

    this.stepper._steps._results.forEach((x) => {
      x.interacted = true;
    });
    this.interactedStepperIndex = this.stepper._steps._results.length;
    this.customSteperLabelChange();
    that.cd.detectChanges();
  }

  getFileName(fileName: any): SafeResourceUrl {
    const that = this;
    return that.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(fileName));
  }

  setFormAttachmentValue(setForm: any, fileName: any): void {
    this.storeService.storeFileEncryptByFileNameGet(fileName)
      .subscribe((value: any) => {
        if (value) {
          setForm.patchValue({ fileName: value.fileNameWithExtension, fileValue: value.value });
        }
      });
  }
}
