import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from 'app/app.constants';
import { SchoolFacilityRepresentativeFilterView } from '../model/school-facility-representative-filter-view';
import { SchoolFacilityRepesentativeService } from 'app/service/staff-information-system/school-facility-repesentative.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from '../../../../shared/common/common.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SchoolFacilityService } from 'app/service/general/api/school-facility.service';
import { SchoolRepRoleService } from 'app/service/general/api/school-rep-role.service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { SchoolFacilityRepresentativeDataView } from '../model/school-facility-representative-data-view';

@Component({
  selector: 'app-school-facility-representatives',
  templateUrl: './school-facility-representatives.component.html',
  styleUrls: ['./school-facility-representatives.component.scss'],
  providers: [SchoolFacilityRepesentativeService, SchoolRepRoleService, StaffCommonService, SchoolFacilityService]
})
export class SchoolFacilityRepresentativesComponent extends CommonComponent implements OnInit {
  @ViewChild('representativeForm') representativeForm;
  schoolFacilityRepresentativeFilter: SchoolFacilityRepresentativeFilterView;
  updateModel: SchoolFacilityRepresentativeDataView;
  addRepresentativeFormGroup: FormGroup;
  tabSettings: {};
  cols = [];
  rows = [];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  currentComponentName = 'SchoolFacilityRepresentativesComponent';
  show = false;
  isUpdateData = false;
  closeAddPanel: boolean;
  buttonDisable = true;
  classSectionDisable = false;
  facilityTypeDropDown = [];
  facilityDropDown = [];
  representativeRolesDropDown = [];
  staffTypeDropDown = [];
  staffDropDown = [];
  doValidate = true;
  editData: any;
  representativeId = '';
  facilityTypeChange: boolean;

  constructor(private _fb: FormBuilder, private schoolFacilityRepesentativeService: SchoolFacilityRepesentativeService
    , public commonService: CommonService, public dialog: MatDialog, private schoolFacilityService: SchoolFacilityService
    , private schoolRepRoleService: SchoolRepRoleService, private staffCommonService: StaffCommonService, public snackBar: MatSnackBar) {
    super();
    this.schoolFacilityRepresentativeFilter = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      facilityIds: [],
      facilityCodes: [],
      facilityTypeIds: [],
      roleIds: [],
      representatives: [],
    };
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponentName);
    if (modelTableComponent) {
      this.schoolFacilityRepresentativeFilter = modelTableComponent;
    }
    this.representativesData(this.schoolFacilityRepresentativeFilter);    this.addRepresentativeFormGroup = this._fb.group({
      facilityTypeId: new FormControl(''),
      schoolFacilityId: new FormControl(''),
      schoolRepRoleId: new FormControl(''),
      staffTypeCode: new FormControl(''),
      staffId: new FormControl(''),
    });

    this.cols = [
      { field: 'facility', header: 'Facility', sort: true },
      { field: 'facilityCode', header: 'FacilityCode', sort: true },
      { field: 'facilityType', header: 'FacilityType', sort: true },
      { field: 'role', header: 'Role', sort: true },
      { field: 'representative', header: 'Representative', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.schoolFacilityRepresentativeFilter,
      tablename: 'School Facility Representatives',
      componentName: this.currentComponentName,
    };

    this.updateModel = {
      id: '',
      schoolFacilityId: 0,
      schoolRepRoleId: 0,
      staffId: 0
    };
    if (this.getTokenParam('_as')) {
      this.getFacilityTypeNames();
      this.getRepresentativeRoles();
      this.staffTypes();
      this.staff(false);
    } else {
      setTimeout(() => {
        this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
      });
    } 
  }

  openForm(): void {
    this.show = true;
    this.closeAddPanel = false;
    this.staff(false);
  }

  // getting facilitytypeNames
  getFacilityTypeNames(): void {
    this.schoolFacilityService.facilityType().subscribe((res: any) => this.listTypeGet(res), error => {
      this.errorResponse(error);
    });
  }

  listTypeGet(data: any): void {
    this.facilityTypeDropDown = [];
    for (let i = 0; i < data.commonViewModel.length; i++) {
      this.facilityTypeDropDown.push
        ({ value: data.commonViewModel[i].id, label: data.commonViewModel[i].name });
    }
  }

  getFacilities(response: any): void {
    this.schoolFacilityService.getSchoolFacilitiesByType(response).subscribe((res: any) => this.facilityGet(res), error => {
      this.errorResponse(error);
    });
  }

  facilityGet(data: any): void {
    this.facilityDropDown = [];
    this.addRepresentativeFormGroup.controls['schoolFacilityId'].setValue('');
    for (let i = 0; i < data.schoolFacilities.length; i++) {
      this.facilityDropDown.push
        ({ value: data.schoolFacilities[i].id, label: data.schoolFacilities[i].name });
    }
  }

  getRepresentativeRoles(): void {
    this.schoolRepRoleService.getAllRepresentativeRoles().subscribe((res: any) => this.representativeRolesGet(res), error => {
      this.errorResponse(error);
    });
  }

  representativeRolesGet(data: any): void {
    this.representativeRolesDropDown = [];
    for (let i = 0; i < data.listViews.length; i++) {
      this.representativeRolesDropDown.push
        ({ value: data.listViews[i].id, label: data.listViews[i].name });
    }
  }

  staffTypes(): void {
    this.staffCommonService.fetchStaffTypes().subscribe((res: any) => this.staffTypesGet(res), error => {
      this.errorResponse(error);
    });
  }

  staffTypesGet(data: any): void {
    this.staffTypeDropDown = [];
    for (let i = 0; i < data.length; i++) {
      this.staffTypeDropDown.push
        ({ value: data[i].code, label: data[i].name });
    }
  }

  staff(isSetValue: boolean, response?: any): void {
    this.staffCommonService.fetchStaffs(response !== undefined ? response.value : null).subscribe((res: any) => this.staffGet(res, isSetValue), error => {
      this.errorResponse(error);
    });
  }

  staffGet(data: any, isValueSet: boolean): void {
    this.addRepresentativeFormGroup.controls['staffId'].setValue('');
    this.staffDropDown = [];
    for (let i = 0; i < data.length; i++) {
      this.staffDropDown.push
        ({ value: data[i].id, label: data[i].name });
    }
    if (this.isUpdateData && isValueSet) {
      this.editPatchValues();
    }
  }

  representativesData(_event: SchoolFacilityRepresentativeFilterView): void {
    this.schoolFacilityRepresentativeFilter = _event;
    this.schoolFacilityRepesentativeService.fetchFacilityRepresentatives(this.schoolFacilityRepresentativeFilter).subscribe(data => this.response(data), error => {
      this.errorResponse(error);
    });
  }

  response(data: any): void {

    if (data.facilityRepresentatives) {
      this.rows = data.facilityRepresentatives.list;
      this.totalItems = data.facilityRepresentatives.totalItems;
    } else {
      this.rows = [];
    }

    const actionList = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT,
        operationName: AppSettings.EDIT
      }, {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE,
        operationName: AppSettings.DELETE
      }
    ];

    this.rows.forEach((e: any) => {
      e.operations = actionList;
    });

    this.tabSettings = {
      columns: this.cols,
      model: this.schoolFacilityRepresentativeFilter,
      rows: this.rows,
      tablename: 'School Facility Representatives',
      componentName: this.currentComponentName,
      isSelectRowRequired: false,
      visibleSelectAll: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'School Facility Representatives'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.BUTTON_NAME
        }
      }
    };
  }

  // row-wise actions of the table(edit/delete)
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.show = true;
      this.isUpdateData = true;
      this.closeAddPanel = false;
      this.buttonDisable = true;
      this.representativeId = response.clickedRow.id;
      this.schoolFacilityRepesentativeService.facilityRepresentativeById(this.representativeId).subscribe(res =>
        this.getRepresentativeData(res), error => {
          this.errorResponse(error);
        });
    }
    else if (response.operation === AppSettings.DELETE) {
      this.deleteAll(response);
    }

  }

  deleteAll(response: any): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.DELETE_CONFORMATION, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });

    dialogRef.afterClosed().subscribe(action => {

      if (action === AppSettings.YES) {

        this.schoolFacilityRepesentativeService.deleteFacilityRepresentative(response.clickedRow.id).subscribe(res => this.deleteResponse(res), error => {
          this.errorResponse(error);
        });
      }
    });
  }

  customClearValidation(form: FormGroup, columnList: string[]): void {
    columnList.map(element => {
      form.get(element).clearValidators();
      form.controls[element].updateValueAndValidity();
    });
  }

  // response after delete operation
  deleteResponse(deleteResponse: any): void {
    this.resetForm();
    this.openSnackBar(deleteResponse.messages.ResultMessage);
  }

  onFacilityTypeSelect(response: any): void {
    this.facilityTypeChange = true;
    this.getFacilities(response);
  }

  onStaffTypeSelect(response: any): void {
    this.staff(false, response);
  }

  saveRepresentative(data: any): void {

    if (data.valid) {
      this.doValidate = false;
      this.facilityTypeChange = false;
      if (this.isUpdateData) {
        data.value.id = this.representativeId;
        this.schoolFacilityRepesentativeService.updateFacilityRepresentative(this.prepareModel(this.updateModel, data.value)).subscribe(res => {
          this.openSnackBar(res.messages.ResultMessage);
          this.resetForm();
        }
          , error => {
            this.errorResponse(error);
          });
      }
      else {

        this.schoolFacilityRepesentativeService.assignFacilityRepresentative(data.value).subscribe(res => {
          this.resetForm();
          this.openSnackBar(res.messages.ResultMessage);
        }, error => {
            this.errorResponse(error);
          });
      }
    }
    else {
      this.doValidate = true;
    }

  }

  resetForm(): void {
    this.representativesData(this.schoolFacilityRepresentativeFilter);
    this.addRepresentativeFormGroup.reset();
    this.representativeForm.resetForm();
    this.show = false;
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.facilityDropDown = [];
    this.staffDropDown = [];
    this.facilityDropDown = [];
  }


  onCancel(): void {
    this.addRepresentativeFormGroup.reset();
    this.representativeForm.resetForm();
    this.show = false;
    this.closeAddPanel = true;
    this.isUpdateData = false;
    this.facilityTypeChange = false;
    this.staffDropDown = [];
    this.facilityDropDown = [];
  }

  getRepresentativeData(data: any): void {
    if (data.facilityRepesentativeData !== null && data.facilityRepesentativeData !== undefined) {
      this.editData = data.facilityRepesentativeData;
      const staffData: any = {
        value : null
      };
       staffData.value = data.facilityRepesentativeData.staffTypeCode;
     this.staff(true, staffData);
      this.getFacilities(data.facilityRepesentativeData.facilityTypeId);
      
    }
  }

  editPatchValues(): void {
    this.addRepresentativeFormGroup.patchValue(this.editData);
  }
}
