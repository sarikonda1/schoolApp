import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleInventoryService } from 'app/service/Transport/vehicle-inventory.service';
import { VehicleInformationView } from 'app/modules/transportation/models/vehicle-information-view';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';
import { CommonComponent } from 'app/shared/common/common.component';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pattern, AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent extends CommonComponent implements OnInit {
  vehicleId: any;
  vehicleInformationView: VehicleInformationView;
  attachmentInfo: AttachmentViewModel;
  vehicleInformationHeaders = [];
  docUrl: any;
  isEdit = false;
  @ViewChild('vehicle') myForm;
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  vehicleForm: FormGroup;
  validate: boolean;
  vehicleImageProp: any;
  vehicleCertImageProp: {};
  fileName: string;
  logoImgProp: any;
  data: any;
  accordionStep: number;
  vechileImageUrl: any;


  constructor(
      private cd: ChangeDetectorRef,
      public commonService: CommonService,
      private _formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private vehicleInventoryService: VehicleInventoryService,
      private storeService: StoreService,
      private sanitizer: DomSanitizer,
      public dialogRef: MatDialog,
      public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {

    this.vehicleForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(45)]],
      model: [null, [Validators.required, Validators.maxLength(45)]],
      maxCapacity: [null, [Validators.maxLength(45), Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(100)]],
      chassisNumber: [null, Validators.maxLength(20)],
      engineNumber: [null, Validators.maxLength(20)],
      manufactureYear: [null],
      manufacturer: [null, [Validators.required, Validators.maxLength(45)]],
      regNumber: [null, Validators.maxLength(15)],
      registrationCertAttachment: this.attachmentInfo
    });

    this.vehicleInformationView = {
      chassisNumber: null,
      engineNumber: null,
      manufactureYear: null,
      manufacturer: null,
      maxCapacity: null,
      model: '',
      vehicleName: '',
      regNumber: null,
      photoAttachment: {
        fileValue: '',
        fileName: ''
      },
      registrationCertAttachment: this.attachmentInfo
    };
    this.vehicleInformationHeaders = Object.getOwnPropertyNames(this.vehicleInformationView);
    const index = this.vehicleInformationHeaders.indexOf('photoAttachment');
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.vehicleId = params.id;
      }
    });
    this.assgnData();

  }

  assgnData(): void {
    this.vechileImageUrl = '';
    this.vehicleInventoryService.getVehicle(this.vehicleId).subscribe(async res => {
      this.vehicleForm.controls.manufactureYear.patchValue(res.vehicleDetailsView.manufactureYear);
      this.vehicleInformationView = this.prepareModel(this.vehicleInformationView, res.vehicleDetailsView);
      this.vehicleInformationView.vehicleName = res.vehicleDetailsView.name;
      this.setDateFormat(this.vehicleInformationView);
      this.data = res.vehicleDetailsView;
      this.vehicleForm.patchValue(res.vehicleDetailsView);
      this.cd.detectChanges();
      this.fileName = '';
      if (res.vehicleDetailsView.registrationCertAttachment !== null && res.vehicleDetailsView.registrationCertAttachment !== undefined) {
        this.fileName = res.vehicleDetailsView.registrationCertAttachment.fileName;
        this.logoImgProp = {
          src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.registrationCertAttachment.fileName))
        };

        this.storeService.storeFileEncryptByFileNameGet(res.vehicleDetailsView.registrationCertAttachment.fileName)
          .subscribe(result => {
            if (result) {
              this.vehicleForm.controls.registrationCertAttachment.patchValue({ fileName: result.fileNameWithExtension, fileValue: result.value });
              this.cd.detectChanges();
            }
          });
      }
      if (res.vehicleDetailsView.photoAttachment !== null && res.vehicleDetailsView.photoAttachment !== undefined) {
        this.fileName = res.vehicleDetailsView.photoAttachment.fileName;
        this.vechileImageUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.photoAttachment.fileName));
        this.logoImgProp = {
          src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(res.vehicleDetailsView.photoAttachment.fileName))
        };

        this.storeService.storeFileEncryptByFileNameGet(res.vehicleDetailsView.photoAttachment.fileName)
          .subscribe(result => {
            if (result) {
              this.vehicleInformationView.photoAttachment.fileName = result.fileNameWithExtension;
              this.vehicleInformationView.photoAttachment.fileValue = result.value;
              this.cd.detectChanges();
            }
          });
      }
      this.DownloadDoc();
    });
  }

  async DownloadDoc(): Promise<void> {

    if (this.vehicleInformationView !== null && this.vehicleInformationView.registrationCertAttachment !== null) {
      this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(this.vehicleInformationView.registrationCertAttachment.fileName));
      const response = await fetch(this.storeService.getFilePath(this.vehicleInformationView.registrationCertAttachment.fileName));
      const responseData = await response.blob();
      const data = new Blob([responseData], { type: 'application/octet-stream' });
      this.docUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(data));
    }

  }

  editVehhicle(): void {
    this.isEdit = true;
    this.accordionStep = 1;
    // this.dialogRef.open(CustomDialogComponent, {
    //   data: { template: this.customTemplate }
    // });
    this.assgnData();
  }

  onSubmit(vehicleForm: any): void {
    if (vehicleForm.status === AppSettings.VALID) {
      this.validate = false;
      this.dataAssignment(this.vehicleInformationView);
      if (this.data.photoAttachment != null) {
        this.vehicleInformationView.photoAttachment.fileName = this.data.photoAttachment.fileName;
        this.vehicleInformationView.photoAttachment.fileValue = this.data.photoAttachment.fileValue;
      }
      this.vehicleInformationView['id'] = this.vehicleId;
      this.vehicleInformationView['manufacturer'] = this.vehicleInformationView.manufacturer;
      this.vehicleInformationView['code'] = this.data.code;
      this.vehicleInformationView['regDate'] = this.data.regDate;
      this.vehicleInformationView['regExpDate'] = this.data.regExpDate;
      this.vehicleInformationView['purchaseDate'] = this.data.purchaseDate;
      this.vehicleInformationView['purchaseCost'] = this.data.purchaseCost;
      this.vehicleInformationView['purchaseOdometerReading'] = this.data.purchaseOdometerReading;
      this.vehicleInventoryService.updateVehicle(this.vehicleInformationView)
        .subscribe((res: any) => this.updateResponse(res), error => {
          this.errorResponse(error);
        });
    }
    else {
      this.validate = true;
    }
  }

  dataAssignment(vehicalDataAssign: any): void {
    Object.assign(vehicalDataAssign, this.vehicleForm.value);
  }

  updateResponse(result: any): void {
    this.assgnData();
    this.onCancel();
    this.openSnackBar(result.messages.ResultMessage);
  }
  onCancel(): void {
    this.assgnData();
    this.myForm.resetForm();
    this.dialogRef.closeAll();
    this.accordionStep = 0;
    this.isEdit = false;
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
        that.vehicleForm.controls.registrationCertAttachment.patchValue({ fileName: file.name, fileValue: (<string>reader.result).split(',')[1] });
        that.cd.detectChanges();
      };
      that.setFileProperties(image);
    }
    this.cd.detectChanges();
  }

  clearImages(logo = false): void {
    if (logo) {

      this.logoImgProp = {};
      this.fileName = '';
      this.vehicleForm.controls.registrationCertAttachment.patchValue(this.attachmentInfo);
    }
    this.cd.detectChanges();
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
