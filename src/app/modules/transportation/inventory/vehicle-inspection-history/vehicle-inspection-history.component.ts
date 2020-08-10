import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { VehicleInspectionHistoryService } from 'app/service/Transport/vehicle-inspection.service';
import { InspectionHistoryFilterViewModel } from '../../models/inspection-history-filter-view-model';
import { AppSettings, Pattern } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import * as HttpStatus from 'http-status-codes';
import { InspectionHistoryView } from '../../models/inspection-history-view';
import { InspectionHistoryViewModel } from '../../models/inspection-history-view-model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StoreService } from 'app/service/file-management/store.service';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-inspection-history',
  templateUrl: './vehicle-inspection-history.component.html',
  styleUrls: ['./vehicle-inspection-history.component.scss'],
  providers: [VehicleInspectionHistoryService]
})
export class VehicleInspectionHistoryComponent extends CommonComponent implements OnInit {
  @ViewChild('inspForm') uForm;
  @ViewChild('fileInput') fileInput: ElementRef;
  inspectionForm: FormGroup;
  doValidate = true;
  columns: any;
  tabSettings: any;
  currentComponent: VehicleInspectionHistoryComponent;
  filterViewModel: InspectionHistoryFilterViewModel;
  inSpectionDetails: any = [];
  rows: any = [];
  totalRowsCount: number;
  pageCnt: number;
  closeAddPanel = true;
  updateButtonShow: boolean;
  vehicleId: string;
  inspectionHistoryView: InspectionHistoryView;
  inspectionHistoryViewModel: InspectionHistoryViewModel;
  nameImgProp: any;
  attachmentInfo: AttachmentViewModel;
  flagImageProp: {};
  constructor(private vehicleInspectionHistoryService: VehicleInspectionHistoryService, public commonService: CommonService,
    public dialog: MatDialog, private storeService: StoreService, private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer, private route: ActivatedRoute, public snackBar: MatSnackBar) {
    super();
    this.setColumnHeaders();
    this.initializeFilterView();
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.vehicleId = param.id;
      }
    });
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
    }

    this.initializeTabSettings();
    this.inspectionForm = new FormGroup({
      id: new FormControl(''),
      vehicleId: new FormControl(''),
      inspectionDate: new FormControl('', [Validators.required]),
      nextInspectionDate: new FormControl('', [Validators.required]),
      odometerReadingAtInspection: new FormControl(0, [Validators.max(999999999), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      odometerReadingNextInspection: new FormControl(0, [Validators.max(999999999), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      attachment: new FormControl({ fileName: '', fileValue: '' })
    });
    this.getAllVehicleInspectionDetails(this.filterViewModel);
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'name', header: 'Vehicle Name', sort: true },
      { field: 'regNumber', header: 'Reg.Number', sort: true },
      { field: 'inspectionDate', header: 'Inspection Date', sort: true },
      { field: 'nextInspectionDate', header: 'Next Inspection Date', sort: true },
      { field: 'odometerReadingAtInspection', header: 'Odometer Reading', sort: true },
      { field: 'odometerReadingNextInspection', header: 'Next Odometer Reading', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTabSettings(): void {
    this.tabSettings = {
      rows: [],
      columns: this.columns,
      tablename: '',
      componentName: this.currentComponent,
      model: this.filterViewModel
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: 'Id',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    this.inspectionHistoryView = {
      id: null,
      vehicleId: null,
      inspectionDate: new Date(),
      nextInspectionDate: new Date(),
      odometerReadingAtInspection: 0,
      odometerReadingNextInspection: 0,
      attachment: this.attachmentInfo
    };
    this.attachmentInfo = {
      fileName: '',
      fileValue: ''
    };
  }


  getAllVehicleInspectionDetails(inspectionData: InspectionHistoryFilterViewModel): void {
    this.filterViewModel = inspectionData;
    this.filterViewModel.vehicleId = this.vehicleId;
    this.vehicleInspectionHistoryService.getAllVehicleInspectionHistory(this.filterViewModel.vehicleId, this.filterViewModel.vehicleName, this.filterViewModel.registrationNumber,
      this.filterViewModel.inspectionStartDateBegin,
      this.filterViewModel.inspectionStartDateEnd,
      this.filterViewModel.odometerReadingAtInspection, this.filterViewModel.odometerReadingNextInspection,
      this.filterViewModel.nextInspectionStartDateBegin, this.filterViewModel.nextInspectionStartDateEnd,
      this.filterViewModel.sortBy, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
        if (res.vehicleInspectionHistoryViewModel != null) {
          this.inSpectionDetails = [];
          this.inSpectionDetails = res.vehicleInspectionHistoryViewModel.list;
          this.totalRowsCount = res.vehicleInspectionHistoryViewModel.totalItems;
          this.pageCnt = res.vehicleInspectionHistoryViewModel.totalPages;
          this.inSpectionDetails.forEach(e => {
            e.operations = [
              {
                name: AppSettings.EDIT_OPERATION,
                icon: AppSettings.EDIT,
                operationName: AppSettings.EDIT
              },
              {
                name: AppSettings.DELETE_OPERATION,
                icon: AppSettings.DELETE_ICON,
                operationName: AppSettings.DELETE
              },
              {
                name: AppSettings.VIEW,
                icon: AppSettings.DETAILS_ICON,
                operationName: AppSettings.VIEW
              }
            ];

            e.inspectionDate = (e.inspectionDate == null) ? null : this.commonService.customDateFormat(e.inspectionDate, this.getSchoolDateFormat()).date;
            e.nextInspectionDate = (e.nextInspectionDate == null) ? null : this.commonService.customDateFormat(e.nextInspectionDate, this.getSchoolDateFormat()).date;

          });
          this.filterViewModel.pageNumber = res.vehicleInspectionHistoryViewModel.pageNumber;
        }
        else {
          this.inSpectionDetails = [];
          this.totalRowsCount = 0;
          this.pageCnt = 0;
        }
        this.tabSettings = {
          model: this.filterViewModel,
          rows: this.inSpectionDetails,
          columns: this.columns,
          totalRowsCount: this.totalRowsCount,
          pageCnt: this.pageCnt,
          tablename: '',
          componentName: this.currentComponent,
          isPaginationRequired: true,
          filtersList: res.filters,
          headerOperations: {
            addingForm: {
              required: true,
              btnName: 'Add'
            },        
            infoButton: {
              required: true,
              text: 'Vehicle Inspection'
            }
          }
        };
      }, error => {
        this.errorResponse(error);
      });
  }

  // method for open the panel
  onAddFormClick(): void {
    this.uForm.resetForm();
    this.inspectionForm.reset();
    this.closeAddPanel = false;
    this.updateButtonShow = false;
  }

  // method for close the panel
  closeAddForm(): void {
    this.inspectionForm.reset();
    this.closeAddPanel = true;
    this.doValidate = false;
    this.uForm.resetForm();
  }


  onSubmit(inspectionForm): void {
    if (inspectionForm.invalid) {
      this.doValidate = true;
      return;
    }
    inspectionForm.value.vehicleId = this.vehicleId;
    inspectionForm.value.inspectionDate = this.getFormattedDateByAPIPattern(inspectionForm.value.inspectionDate);
    inspectionForm.value.nextInspectionDate = this.getFormattedDateByAPIPattern(inspectionForm.value.nextInspectionDate);
    this.inspectionHistoryView = inspectionForm.value;
    if (inspectionForm.value.id == null) {
      this.vehicleInspectionHistoryService.createVehicleInspectionHistory(this.inspectionHistoryView).subscribe(res => this.inspectionRespnse(res), error => {
        this.errorResponse(error);
      });
    }
    else {
      this.vehicleInspectionHistoryService.updateVehicleInspectionHistory(this.inspectionHistoryView).subscribe(res => this.inspectionRespnse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  inspectionRespnse(data): void {
    this.updateButtonShow = false;
    if (data.statusCode === HttpStatus.OK) {
          this.inspectionForm.reset();
          this.uForm.resetForm();
          this.closeAddPanel = true;
          this.doValidate = false;
          this.getAllVehicleInspectionDetails(this.filterViewModel);
          this.flagImageProp = null;
    }
    else {
          this.closeAddPanel = false;
    }
    this.openSnackBar(data.messages.ResultMessage);
  }
  rowActions(data: any): void {
    if (data.operation === AppSettings.DELETE) {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        disableClose: true,
        data: {
          text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE),
          action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
        },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.vehicleInspectionHistoryService.deleteVehicleInspectionHistory(data.clickedRow.id).
            subscribe(res => this.inspectionRespnse(res), error => {
              this.errorResponse(error);
            });
        }
      });
    }
    else if (data.operation === AppSettings.EDIT) {
      this.updateButtonShow = true;
      this.closeAddPanel = false;
      this.vehicleInspectionHistoryService.getVehicleInspectionHistory(data.clickedRow.id).subscribe(res => {
        if (res.vehicleInspectionHistoryView) {
          this.inSpectionDetails = res.vehicleInspectionHistoryView;
          if (this.inSpectionDetails.attachment != null){
          this.flagImageProp = {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(this.inSpectionDetails.attachment.fileName)
          };
          this.storeService.storeFileEncryptByFileNameGet(this.inSpectionDetails.attachment.fileName)
          .subscribe((value: any) => {
            if (value) {
              this.inspectionForm.controls.attachment.patchValue({ fileName: value.fileNameWithExtension, fileValue: value.value });
            }
          });
        }     
          this.inspectionForm.patchValue(this.inSpectionDetails);

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

  imgChanged(files, logo = false): void {
    if (this.checkFileSize(files[0], 'image', 2097152)){
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
        that.flagImageProp = {
          src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
        };
        that.inspectionForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: (<string>reader.result).split(',')[1] });
        that.cd.detectChanges();
      };
    };
  }

  clearImages(logo = false): void {
    this.flagImageProp = {};
    this.inspectionForm.controls.attachment.patchValue(this.attachmentInfo);
    this.cd.detectChanges();
  }
}
