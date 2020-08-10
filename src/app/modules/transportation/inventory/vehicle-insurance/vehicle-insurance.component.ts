import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppSettings, Pattern } from 'app/app.constants';
import { ActivatedRoute } from '@angular/router';
import { VehicleInsuranceFilterViewModel } from '../../models/vehicle-Insurance-filter-view-model';
import { VehicleInventoryService } from 'app/service/Transport/vehicle-inventory.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { VehicleInsuranceViewModel } from '../../models/vehicle-Insurance-view-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'app/service/file-management/store.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vehicle-insurance',
  templateUrl: './vehicle-insurance.component.html',
  styleUrls: ['./vehicle-insurance.component.scss']
})
export class VehicleInsuranceComponent extends CommonComponent implements OnInit {

  @ViewChild('insuranceForm') insuranceForm;
  @ViewChild('logoImgInput') logoInput: ElementRef;
  vehicleInsuranceSearchView: VehicleInsuranceFilterViewModel;
  postModel: VehicleInsuranceViewModel;
  insuranceFormGroup: FormGroup;
  uploadFiles: FormGroup;
  private _unsubscribeAll: Subject<any>;
  tabSettings: {};
  cols: any[];
  currentComponentName = 'VehicleInsuranceComponent';
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  doValidate: boolean;
  insuranceDetails: {};
  closeAddPanel: boolean;
  currentComponent: any;
  rows: any[];
  isUpdateData: boolean;
  insuranceId: any;
  logoImgProp: {};
  nameImgProp: any;
  fileName = '';
  vehicleId: any;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private vehicleInventoryService: VehicleInventoryService
    , public commonService: CommonService, public dialog: MatDialog, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer
    , private storeService: StoreService, public snackBar: MatSnackBar) {
    super();
    this.vehicleInsuranceSearchView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      policyNumber: '',
      premiumAmount: 0,
      issueDateBegin: [],
      issueDateEnd: [],   
      expiryDateBegin: [],
      expiryDateEnd: [],
      companyName: '',
    };
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.vehicleId = params.id;
      }
    });

    this.cols = [
      { field: 'policyNumber', header: 'policyNumber', sort: true },
      { field: 'companyName', header: 'companyName', sort: true },
      { field: 'issueDate', header: 'Issue Date', sort: true },
      { field: 'expiryDate', header: 'expiryDate', sort: true },
      { field: 'premiumAmount', header: 'premiumAmount', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.vehicleInsuranceSearchView,
      componentName: this.currentComponent,
    };

    this.insuranceFormGroup = new FormGroup({
      policyNumber: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      issueDate: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.maxLength(45)]),
      premiumAmount: new FormControl('', [Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS), Validators.max(99999999.99), Validators.min(1)]),
      expiryDate: new FormControl('', [Validators.required]),
    });

    this.uploadFiles = this._fb.group({
      insuranceFileNameWithExtension: null,
      insuranceFileValue: null,
    });
    this.vehicleInsuranceSearchView.vehicleId = this.vehicleId;
    this.insuranceData(this.vehicleInsuranceSearchView);
  }

  insuranceData(data: any): void {
    data.vehicleId = this.vehicleId;
    this.vehicleInsuranceSearchView = data;
    this.vehicleInventoryService.vehicleInsurances(this.vehicleInsuranceSearchView).subscribe(res => this.vehicleInsuranceData(res), error => {
      this.errorResponse(error);
    });
  }

  // Binding data To Table
  vehicleInsuranceData(data: any): void {
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
          name: AppSettings.DELETE_OPERATION,
          icon: AppSettings.DELETE
        },
        {
          name: AppSettings.VIEW,
          icon: AppSettings.DETAILS_ICON,
          operationName: AppSettings.VIEW
        }
      ];
    });

    if (data.resultList) {
      data.resultList.list.forEach(formatDate => {
        formatDate.issueDate =
          formatDate.issueDate != null ? this.commonService.customDateFormat(formatDate.issueDate.toString(), this.getSchoolDateFormat()).date : null;
        formatDate.expiryDate =
          formatDate.expiryDate != null ? this.commonService.customDateFormat(formatDate.expiryDate.toString(), this.getSchoolDateFormat()).date : null;
      });
      this.vehicleInsuranceSearchView.pageNumber = data.resultList.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.vehicleInsuranceSearchView,
      rows: this.rows,
      componentName: this.currentComponent,
      isNewStudentCourseSelectionRequired: true,
      visibleSelectAll: false,
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
          text: 'Insurance History'
        }
      },
      filtersList: data.filters,
    };

  }

  openForm(): void {
    this.closeAddPanel = false;
    this.isUpdateData = false;
  }

  // row-wise actions of the table(edit/delete)
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.editInsurance(response);
    }
    else if (response.operation === AppSettings.DELETE) {
      this.deleteInsurance(response);
    }
    else if (response.operation === (AppSettings.VIEW).toLowerCase()) {
      if (response.clickedRow.attachment != null) {
        this.nameImgProp = this.storeService.getFilePath(response.clickedRow.attachment.fileName);
        window.open(this.nameImgProp);
      }
      else {
        this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
        return;
      }
    }
  }

  editInsurance(response: any): void {
    this.isUpdateData = true;
    this.closeAddPanel = false;
    this.insuranceId = response.clickedRow.id;
    this.vehicleInventoryService.getVehicleInsurance(this.insuranceId).subscribe(res =>
      this.updateInsuranceDataAssignment(res), error => {
        this.errorResponse(error);
      });
  }

  deleteInsurance(response: any): void {

    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    dialogRef.afterClosed().subscribe(action => {

      if (action === AppSettings.YES) {

        this.vehicleInventoryService.deleteVehicleInsurance(response.clickedRow.id).subscribe(res => {
          this.commonService.dialog(res.messages.ResultMessage, true, AppSettings.OK);
          this.resetForm();
          this.insuranceData(this.vehicleInsuranceSearchView);
        },
          error => {
            this.errorResponse(error);
          });

      }
    });
  }

  onCancel(): void {
    this.resetForm();
  }

  insurancePost(data: any): void {

    this.insuranceDetails = {};

    if (this.insuranceFormGroup.status === AppSettings.VALID) {
      this.doValidate = false;
      this.postModel = {
        policyNumber: '',
        companyName: '',
        premiumAmount: 0,
        issueDate: null,
        expiryDate: null,
        id: '',
        attachment: {
          fileName: '',
          fileValue: ''
        }
      };

      this.postModel.attachment.fileName = this.uploadFiles.value.insuranceFileNameWithExtension;
      this.postModel.attachment.fileValue = this.uploadFiles.value.insuranceFileValue;
      data.issueDate = this.getFormattedDateByAPIPattern(data.issueDate);
      data.expiryDate = this.getFormattedDateByAPIPattern(data.expiryDate);

      if (this.isUpdateData) {
          this.postModel.id = this.insuranceId;
          this.vehicleInventoryService.updateVehicleInsurance(this.prepareModel(this.postModel, data)).subscribe(res => {
          this.openSnackBar(res.messages.ResultMessage);
          this.resetForm();
          this.gridReset();
        }
        , error => {
          this.errorResponse(error);
        });
      }
      else {
          this.postModel.id = this.vehicleInsuranceSearchView.vehicleId;
          this.vehicleInventoryService.createVehicleInsurances(this.prepareModel(this.postModel, data)).subscribe(res => {
          this.openSnackBar(res.messages.ResultMessage);
          this.resetForm();
          this.gridReset();
        }
        , error => {
          this.errorResponse(error);
        });
      }
    }
    else {
      this.doValidate = true;
    }
  }

  resetForm(): void {
    this.clearImages(true);
    this.insuranceFormGroup.reset();
    this.insuranceForm.resetForm();
    this.uploadFiles.reset();
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.doValidate = false;
  }

  gridReset(): void {
    this.insuranceData(this.vehicleInsuranceSearchView);
  }

  updateInsuranceDataAssignment(data: any): void {

    this.fileName = '';
    if (data.resultModel.attachment !== null && data.resultModel.attachment !== undefined) {
      this.fileName = data.resultModel.attachment.fileName;
      this.logoImgProp = {
        src: this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(data.resultModel.attachment.fileName))
      };

      this.storeService.storeFileEncryptByFileNameGet(data.resultModel.attachment.fileName)
        .subscribe(result => {
          if (result) {
            this.fileName = data.resultModel.attachment.fileName;
            this.uploadFiles.controls['insuranceFileNameWithExtension'].patchValue(result.fileNameWithExtension);
            this.uploadFiles.controls['insuranceFileValue'].patchValue(result.value);
            this.cd.detectChanges();
          }
        });
    }
    this.insuranceFormGroup.patchValue(data.resultModel);
  }

  clearImages(logo = false): void {
    if (logo) {
      this.logoImgProp = {};
      this.fileName = '';
      if (this.logoInput !== null) {
        this.logoInput.nativeElement.remove();
      }
      this.uploadFiles.controls.insuranceFileNameWithExtension.patchValue(null);
      this.uploadFiles.controls.insuranceFileValue.patchValue(null);
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
        that.uploadFiles.controls['insuranceFileNameWithExtension'].setValue(file.name);
        that.uploadFiles.controls['insuranceFileValue'].setValue((<string>reader.result).split(',')[1]);
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
