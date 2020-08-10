
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ClassSectionService } from 'app/service/academic-service/api/class-section.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StudentsFacilityService } from 'app/service/academic-service/api/studentsFacility.service';
import { FilterViewModel } from '../model/filter-view-model';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StudentFacilitySelectionModel } from '../model/student-facility-selection-model';
import { SchoolFacilityService } from 'app/service/general/api/school-facility.service';
import { StudentFacilityAssignmentEdit } from '../model/student-facility-assignment-edit';
import { StudentTrancheModel } from '../model/student-tranche-model';


@Component({
  selector: 'app-student-facility-assignment',
  templateUrl: './student-facility-assignment.component.html',
  styleUrls: ['./student-facility-assignment.component.scss']
})
export class StudentFacilityAssignmentComponent extends CommonComponent implements OnInit {
  @ViewChild('editTemplate') editTemplate;
  @ViewChild('addStudentFacilityTemplate') addStudentFacilityTemplate;
  @ViewChild('studentFacilityForm') myForm;
  @ViewChild('facilityAssignmentForm') facilityAssignmentForm;
  @ViewChild('editAssignmentForm') editAssignmentForm;
  classes: Array<any> = [];
  assignClasses: Array<any> = [];
  schoolFacilityForm: FormGroup;
  schoolFacilityAssignmentForm: FormGroup;
  editStudentFacilityForm: FormGroup;
  sectionNamesList: Array<any> = [];
  assignSectionNamesList: Array<any> = [];
  tableSettings: {};
  facilityAddTableSettings: {};
  columns: any[];
  currentComponent = 'StudentFacilityAssignmentComponent';
  filterViewModel: FilterViewModel;
  facilityAddColumns: any[];
  rows: Array<any>;
  totalItems: number;
  cols: any[];
  custRowsPerPageOptions: Array<number> = [];
  pageCnt: number;
  isOpenAddForm: boolean;
  coustomDialog: any;
  feeTermsList: Array<any> = [];
  feeTypeTranches: Array<any> = [];
  studentName: any;
  isEditValidate: boolean;
  studentFacilityAssignmentEdit: StudentFacilityAssignmentEdit;
  id: any;
  facilityDropDown = [];
  selectedFacilityName = '';
  closeAddPanel: boolean;
  facilityStudentTranchList: Array<StudentTrancheModel> = [];
  classId: any;
  sectionId: any;
  facilityTypeId: any;
  disabelAssignment = true;
  isValidate: boolean;
  assignValidate: boolean;
  showTable: boolean;
  showFacilityTable = false;

  constructor(public classSectionService: ClassSectionService, public commonService: CommonService,
    public classTimetableService: ClassTimetableService, public studentsFacilityService: StudentsFacilityService,
    public dialog: MatDialog, private schoolFacilityService: SchoolFacilityService, public snackBar: MatSnackBar,
    private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {

    this.schoolFacilityForm = new FormGroup({
      classId: new FormControl(''),
      sectionId: new FormControl(''),
      facilityId: new FormControl('', Validators.required),
    });

    this.schoolFacilityAssignmentForm = new FormGroup({
      classId: new FormControl('', Validators.required),
      sectionId: new FormControl('', Validators.required),
      facilityName: new FormControl({ disabled: true, value: null })
    });

    this.editStudentFacilityForm = new FormGroup({
      feeTypeTrancheId: new FormControl(''),
      endFeeTermId: new FormControl(''),
    });

    this.schoolFacilityAssignmentForm.valueChanges.subscribe(f => {
      this.initializeAssignTableSettings();
      this.showFacilityTable = false;
    });

    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'className', header: 'Class', sort: true },
      { field: 'sectionName', header: 'Section', sort: true },
      { field: 'facilityName', header: 'Facility', sort: true },
      { field: 'feeTypeTranch', header: 'Fee Type Tranche', sort: true },
      { field: 'endFeeTermName', header: 'Ending Fee Term', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
    this.facilityAddColumns = [
      { field: 'studentName', header: 'Student Name', sort: false },
      { field: 'admissionNumber', header: 'Admission Number', sort: false },
    ];


    this.initializeFilterModel();
    this.initializeTableSettings();
    this.initializeAssignTableSettings();
    this.fetchClasses();
    this.getFacilities();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      if (this.filterViewModel.classId){
        this.classId = this.filterViewModel.classId;
        this.classSections(this.classId, true);
      }
      if (this.filterViewModel.sectionId){
        this.sectionId = this.filterViewModel.sectionId;
      }
      if (this.filterViewModel.facilityTypeId){
        this.facilityTypeId = this.filterViewModel.facilityTypeId;
      }
      this.schoolFacilityForm.patchValue(this.filterViewModel);
      this.schoolFacilityForm.controls.facilityId.patchValue(this.facilityTypeId);
      this.searchFacilityData(this.schoolFacilityForm.value);
    }
  }
  initializeFilterModel(): void {
    this.filterViewModel = {
      studentName: [],
      admissionNumber: [],
      feeTypeTranchId: [],
      feeTermId: [],
      classId: 0,
      sectionId: 0,
      facilityTypeId: 0,
      sortBy: '',
      sortOrder: AppSettings.DEFAULT_SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Student Facility Assignments',
      componentName: this.currentComponent,
      model: this.filterViewModel,
    };
  }

  initializeAssignTableSettings(): void {
    this.facilityAddTableSettings = {
      columns: this.facilityAddColumns,
      rows: [],
      componentName: this.currentComponent,
      hideHeader: true
    };

  }

  searchFacilityData(data: any): void {
    this.facilityAddColumns = this.facilityAddColumns.filter(x => x.field !== 'feeTypeTranch');
    if (data.facilityId === null || data.facilityId === '') {
      this.isValidate = true;
    }
    else {
      this.showTable = true;
      this.isValidate = false;
      this.classId = data.classId;
      this.sectionId = data.sectionId;
      this.facilityTypeId = data.facilityId !== undefined ? data.facilityId : this.filterViewModel.facilityTypeId;
      this.studentFacilityList();
    }
  }

  getFacilityData(data: any): void {
    this.filterViewModel = data;
    this.studentFacilityList();
  }


  getAddData(data: any): void {
    if (this.schoolFacilityAssignmentForm.valid) {
      this.assignValidate = false;
      this.studentsFacilityService.studentUnAssignedFacilityList(data.value.classId, data.value.sectionId,
        this.facilityTypeId).subscribe((res: any) => { this.getData(res, data); }, error => {
          this.errorResponse(error);
        });
    } else {
      this.initializeAssignTableSettings();
      this.assignValidate = true;
    }

  }

  facilityTabSettings(): void {
    this.facilityAddTableSettings = {
      columns: this.facilityAddColumns,
      model: this.filterViewModel,
      rows: this.rows,
      componentName: this.currentComponent,
      isSelectRowRequired: true,
      visibleSelectAll: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      isMultiDeleteRequired: false,
      tabTable: true,
      padding: true,
      hideHeader: true,
      showSelectAll: true,
    };
    this.showFacilityTable = true;
  }

  getData(data: any, patchData: any): void {
    this.rows = [];
    this.facilityStudentTranchList = [];
    this.disabelAssignment = true;
    this.schoolFacilityAssignmentForm.patchValue(patchData);


    if (!data.studentFacilityResult) {
      this.rows = [];
    }
    else {
      this.rows = data.studentFacilityResult;
      this.totalItems = data.studentFacilityResult;
      const dataList = data.studentFacilityResult[0].feeTypeTranch.map(x => {
        return { label: x.name, value: x.id };
      });

      if (data.studentFacilityResult[0].feeTypeTranch.length > 0 && this.facilityAddColumns.find(x => x.field === 'feeTypeTranch') === undefined) {
        this.facilityAddColumns.push({
          field: 'feeTypeTranch', header: 'Fee/Tranche',
          dropdownInputRequired: true, placeholder: 'Fee Tranches', options: dataList
        });
      }
    }

    this.facilityTabSettings();

  }

  studentFacilityList(): void {
    this.filterViewModel.classId = this.classId;
    this.filterViewModel.sectionId = this.sectionId;
    this.filterViewModel.facilityTypeId = this.facilityTypeId;
    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.studentsFacilityService.studentFacilityList(this.filterViewModel.studentName, this.filterViewModel.admissionNumber,
      this.filterViewModel.feeTypeTranchId, this.filterViewModel.feeTermId, this.filterViewModel.classId,
      this.filterViewModel.sectionId, this.filterViewModel.facilityTypeId,
      this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe((res: any) => { this.getStudentFacilities(res); }, error => {
        this.errorResponse(error);
      });
  }

  getStudentFacilities(data: any): void {

    this.custRowsPerPageOptions = [];
    if (!data.studentFacilityResult) {
      this.rows = [];
    } else {
      this.rows = data.studentFacilityResult.list;
      this.totalItems = data.studentFacilityResult.totalItems;
    }

    this.rows.forEach(e => {
      const testoperations = [
      ];
      if (!e.isFeeTermsAvailable) {
        testoperations.push(
          {
            name: AppSettings.DELETE_FACILITY_ASSIGNMENT,
            icon: AppSettings.DELETE_ICON,
          });
      }
      if (e.isFeeTermsAvailable || e.isFeeTranchesAvailable) {
        testoperations.push(
          {
            name: AppSettings.EDIT_FACILITY_ASSIGNMENT,
            icon: AppSettings.EDIT_ICON,
          });
      }
      if (!e.isInvoiceGeneratedForFeeTerm) {
        e.operations = testoperations;
      }
    });

    if (data.testTypeListViewModel) {
      this.filterViewModel.pageNumber = data.studentFacilityResult.pageNumber;
    }

    this.tableSettings = {
      columns: this.columns,
      model: this.filterViewModel,
      rows: this.rows,
      tablename: 'Student Facility Assignments',
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
          name: this.addStudentFacilityTemplate,
          btnName: 'Assign'
        }
      },
      filtersList: data.filters
    };
  }

  openAddForm(): void {
    this.showFacilityTable = false;
    this.rows = [];
    this.schoolFacilityAssignmentForm.reset();
    this.closeAddPanel = false;
    this.isOpenAddForm = true;
    this.disabelAssignment = true;
    this.facilityDropDown.map(x => {
      if (x.value === this.facilityTypeId) {
        this.selectedFacilityName = x.label;
        this.schoolFacilityAssignmentForm.controls['facilityName'].setValue(this.selectedFacilityName);
      }
    });
    this.fetchAssignedClasses();
    if (this.classId != null && this.classId !== undefined && this.classId !== '') {
      this.assignmentSections(this.classId);
    }
    const assignModel = this.schoolFacilityAssignmentForm;
    assignModel.controls.classId.patchValue(this.classId);
    assignModel.controls.sectionId.patchValue(this.sectionId);
    this.getAddData(assignModel);
    this.assignSectionNamesList = [];
  }

  getFacilities(): void {
    this.schoolFacilityService.getAllSchoolFacilities().subscribe((res: any) => this.facilityGet(res), error => {
      this.errorResponse(error);
    });
  }

  facilityGet(data: any): void {
    this.facilityDropDown = [];
    if (data.schoolFacilities !== null) {
      for (let i = 0; i < data.schoolFacilities.length; i++) {
        this.facilityDropDown.push
        ({ value: data.schoolFacilities[i].id, label: data.schoolFacilities[i].name });
      }
    }

  }

  fetchClasses(): void {
    this.classes = [];
    this.classSectionService.schoolAcademicClasses()
      .subscribe(res => {
        if (res.listViews) {
          res.listViews.forEach(element => {
            this.classes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }, error => {
        this.errorResponse(error);
      });
  }

  fetchAssignedClasses(): void {

    this.assignClasses = [];
    this.classSectionService.schoolAcademicClasses()
      .subscribe(res => {
        if (res.listViews) {
          res.listViews.forEach(element => {
            this.assignClasses.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }, error => {
        this.errorResponse(error);
      });
  }

  classSections(id: any, onManualChange = false): void {
    this.sectionNamesList = [];
    this.assignSectionNamesList = [];
    if (!onManualChange){
     this.schoolFacilityForm.controls.sectionId.setValue(null);
    }
    if (id !== undefined) {
      this.classTimetableService.classTimetableSectionsGet(id).subscribe(response => {
        if (response.classTimetableSectionsView != null) {
          if (response.classTimetableSectionsView.length) {
            response.classTimetableSectionsView.map(x => {
              this.sectionNamesList.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
            });
          }
        }
      }, error => {
        this.errorResponse(error);
      });
    }
    else {
      this.schoolFacilityForm.controls['classId'].setValue(null);
    }
  }

  assignmentSections(id: any): void {
    this.schoolFacilityAssignmentForm.controls.sectionId.patchValue('');
    this.assignSectionNamesList = [];
    this.classTimetableService.classTimetableSectionsGet(id).subscribe(res => {
      if (res.classTimetableSectionsView != null) {
        res.classTimetableSectionsView.map(x => {
          this.assignSectionNamesList.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
        });
      }
    });
  }

  actions(data: any): void {
    this.closeAddPanel = true;
    this.editStudentFacilityForm.reset();
    this.id = data.clickedRow.id;
    if (data.operation.toLowerCase() === AppSettings.EDIT_FACILITY_ASSIGNMENT.toLowerCase()) {
      this.facilityDropDown.map(x => {
        if (x.value === this.facilityTypeId) {
          this.selectedFacilityName = x.label;
        }
      });
      this.studentsFacilityService.getStudentFacilityById(this.id).subscribe(res => this.editResult(res), error => {
        this.errorResponse(error);
      });
    }
    if (data.operation.toLowerCase() === AppSettings.DELETE_FACILITY_ASSIGNMENT.toLowerCase()) {
      const dialogRef = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.studentsFacilityService.deleteStudentFaclitySelection(this.id).subscribe(res => {
            this.openSnackBar(res.messages.ResultMessage),
            this.getFacilityData(this.filterViewModel);
          }, error => {
            this.errorResponse(error);
          });
        }
      });

    }
  }

  editResult(data: any): void {
    this.editStudentFacilityForm.reset();
    this.isEditValidate = true;
    this.studentName = data.studentName;
    this.feeTermsList = data.endFeeTerms;
    this.feeTypeTranches = data.feeTypeTranches;
    this.editStudentFacilityForm.patchValue(data);
    this.coustomDialog = this.dialog.open(
      this.editTemplate, {
      disableClose: true,
      width: '400px',
    }
    );
  }

  selectedRows(data: any): void {
    this.disabelAssignment = true;
    this.facilityStudentTranchList = [];
    const selectedData = data.selectedList !== undefined ? data.selectedList : data;

    selectedData.forEach(element => {
      this.cd.detectChanges();

      const facilityStudentTranch: StudentTrancheModel = {
        feeTypeTrancheId: element.feeTypeTranch.length === 0 ? null : element.newValue !== undefined ? element.newValue : 0,
        schoolAcademicSessionStudentId: element.schoolAcademicSessionStudentId
      };

      if (element.isCheck) {
        this.facilityStudentTranchList.push(facilityStudentTranch);
      }
    });

    const dataList = this.facilityStudentTranchList.filter(x => {
      return x.feeTypeTrancheId === 0;
    });

    if (dataList !== null && dataList.length > 0) {
      this.facilityStudentTranchList = [];
    }

    if (this.facilityStudentTranchList.length > 0) {
      this.disabelAssignment = false;
    } else {
      this.disabelAssignment = true;
    }
    this.cd.detectChanges();
  }

  onEditCancel(): void {
    this.dialog.closeAll();
    this.schoolFacilityAssignmentForm.reset();
  }

  onAssignmentCancel(): void {
    this.isOpenAddForm = false;
    this.disabelAssignment = true;
    this.closeAddPanel = true;
    this.editStudentFacilityForm.reset();
    this.facilityAssignmentForm.resetForm();
  }

  onFacilityClear(): void {
    this.showTable = false;
    this.initializeTableSettings();
    this.initializeFilterModel();
    this.facilityTypeId = '';
    this.myForm.resetForm();
    this.sectionNamesList = [];
  }

  onAssignmentFacilityClear(): void {
    this.cd.detectChanges();
    this.facilityAssignmentForm.resetForm();
    this.initializeAssignTableSettings();
    this.assignSectionNamesList = [];
    this.schoolFacilityAssignmentForm.controls['facilityName'].setValue(this.selectedFacilityName);
    this.rows = [];
    this.disabelAssignment = true;
    this.facilityStudentTranchList = [];
  }

  onAssignFacility(data: any): void {

    const assignFacilty: StudentFacilitySelectionModel = {
      facilityId: 0,
      classId: 0,
      sectionId: 0,
    };

    assignFacilty.classId = (data.classId != null && data.classId !== '') ? data.classId : this.classId;
    assignFacilty.sectionId = (data.sectionId != null && data.sectionId !== '') ? data.sectionId : this.sectionId;
    assignFacilty.facilityId = this.facilityTypeId;
    assignFacilty.studentTrancheModel = this.facilityStudentTranchList;
    this.studentsFacilityService.createStudentFacility(assignFacilty).subscribe(res => this.editResponse(res), error => {
      this.errorResponse(error);
    });
  }

  editStudentFacility(editStudentFacilityForm: any): void {
    if (editStudentFacilityForm.status === AppSettings.VALID) {
      this.isEditValidate = false;
      this.studentFacilityAssignmentEdit = editStudentFacilityForm.value;
      this.studentFacilityAssignmentEdit.facilityTypeId = this.facilityTypeId;
      this.studentFacilityAssignmentEdit.id = this.id;
      this.studentsFacilityService.updateStudentFacility(this.studentFacilityAssignmentEdit).subscribe(res => this.editResponse(res), error => {
        this.errorResponse(error);
      });
    } else {
      this.isEditValidate = true;
    }
  }

  editResponse(res: any): void {
    this.dialog.closeAll();
    this.isOpenAddForm = false;
    this.closeAddPanel = true;
    this.openSnackBar(res.messages.ResultMessage);
    this.getFacilityData(this.filterViewModel);
  }

}
