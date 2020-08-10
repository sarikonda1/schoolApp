
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { StudentConcessionFilterView } from '../model/student-concession-filter-view';
import { AppSettings } from 'app/app.constants';
import { StudentConcessionService } from 'app/service/student-admissions-service/student-concession.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { BaseViewModel } from '../model/base-view-model';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FeeConcessionGroupService } from 'app/service/configuration/finance/api/fee-concession-group.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentFeeConcessionGroupView } from '../model/student-fee-concession-group-view';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { CommonService } from 'app/service/common.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';

@Component({
  selector: 'app-student-concessions',
  templateUrl: './student-concessions.component.html',
  styleUrls: ['./student-concessions.component.scss'],
  providers: [StudentConcessionService, FeeConcessionGroupService, ClassTimetableService]
})
export class StudentConcessionsComponent extends CommonComponent implements OnInit {
  filterViewModel: StudentConcessionFilterView;
  tableSettings: any;
  columns: any;
  currentComponent = 'StudentConcessionsComponent';
  rows: any;
  totalRowsCount: number;
  pageCnt: number;
  studentFeeConcessionGroupView: BaseViewModel;
  feeConcessionDetails: any;
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  @ViewChild('addStudentConcession') addStudentConcession;
  @ViewChild('studentConcessionSearch') studentConcessionSearch;
  feeConcessionGroups: any;
  studentConcessionForm: FormGroup;
  studentConcessionGroupView: StudentFeeConcessionGroupView;
  validate = true;
  studentConcessionSearchForm: FormGroup;
  sections: any[];
  classes: any[];
  removeStudentConcessionGroupView: BaseViewModel;
  totalAmount = 0;
  currencySymbol: void;
  hideDropDown = false;
  constructor(private studentConcessionService: StudentConcessionService, public dialogRef: MatDialog, private _feeConcessionGroupService: FeeConcessionGroupService,
    private _formBuilder: FormBuilder, private gradeSetupService: GradeSetupService,
    private classTimetableService: ClassTimetableService, public commonService: CommonService, public snackBar: MatSnackBar) {
    super();

    this.setColumnHeaders();
    this.initializeTableSettings();
    this.initializeFilterView();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.studentConcessionForm = this._formBuilder.group({
      feeConcessionGroupId: [null, Validators.required]
    });
    this.studentConcessionGroupView = {
      schoolAcademicSessionStudentId: null,
      feeConcessionGroupId: null
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      if (this.filterViewModel.classIds && this.filterViewModel.classIds[0]){
        this.studentConcessionSearchForm.patchValue({
          classId: this.filterViewModel.classIds[0]
        });
        this.onSelectClass({value: this.filterViewModel.classIds[0]});
      }

      if (this.filterViewModel.sectionIds && this.filterViewModel.sectionIds[0]){
        this.studentConcessionSearchForm.patchValue({
          sectionId: this.filterViewModel.sectionIds[0]
        });
      }
      if (this.filterViewModel.studentConcessionGroupIds){
        this.studentConcessionSearchForm.patchValue({
          concessionGroup: this.filterViewModel.studentConcessionGroupIds
        });
      }
      this.getAllFilteredStudentConcession();
    }
    this.getClasses();
    this.getFeeConcessionGroup();
    this.removeStudentConcessionGroupView = {
      id: null
    };

    this.studentConcessionSearchForm.valueChanges.subscribe(form => {
      if (this.studentConcessionSearchForm.valid) {
        this.filterViewModel.classIds = [this.studentConcessionSearchForm.value.classId];
        this.filterViewModel.sectionIds = [this.studentConcessionSearchForm.value.sectionId];
        this.filterViewModel.studentConcessionGroupIds = this.studentConcessionSearchForm.value.concessionGroup;
        this.getAllFilteredStudentConcession();
      }
    });
    this.currencySymbol = this.getSchoolCurrency();
  }

  initializeForm(): void {
    this.studentConcessionSearchForm = new FormGroup({
      concessionGroup: new FormControl(''),
      classId: new FormControl(null, [Validators.required]),
      sectionId: new FormControl(null, [Validators.required]),
    });
  }
  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'rollNumber', header: 'Roll Number', sort: true },
      { field: 'className', header: 'Class', sort: true },
      { field: 'sectionName', header: 'Section', sort: true },
      { field: 'concessionGroupName', header: 'Concession Group', sort: true, anchorDialog: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Students',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      filtersList: null
    };
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    this.studentFeeConcessionGroupView = {
      id: ''
    };
  }

  getClasses(): void {
    this.classes = [];
    this.gradeSetupService.schoolAcademicClasses().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
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
  // on selection of class

  onSelectClass(data: any, isManualChange = false): void {
    this.sections = [];
    if (!isManualChange){
     this.studentConcessionSearchForm.controls.sectionId.setValue(null);
    }
    this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(response => {
      if (response.classTimetableSectionsView != null) {
        if (response.classTimetableSectionsView.length) {
          response.classTimetableSectionsView.map(x => {
            this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
          });
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getAllFilteredStudentConcession(): void {
    if (this.studentConcessionSearchForm.valid) {
      this.filterViewModel.classIds = [this.studentConcessionSearchForm.value.classId];
      this.filterViewModel.sectionIds = [this.studentConcessionSearchForm.value.sectionId];
      this.filterViewModel.studentConcessionGroupIds = this.studentConcessionSearchForm.value.concessionGroup;
      this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
      this.studentConcessionService.getAllStudentsFeeConcessionGroups
        (this.filterViewModel.studentNames, this.filterViewModel.studentConcessionGroupIds, this.filterViewModel.admissionNumber,
          this.filterViewModel.rollNumber, this.filterViewModel.classIds, this.filterViewModel.sectionIds, this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
          this.filterViewModel.pageNumber, this.filterViewModel.pageSize).subscribe(res => {
            this.bindStudentConcession(res);
          }, error => {
            this.errorResponse(error);
          });
    }
  }

  search(value: any): void {
    this.filterViewModel.sectionIds = [value.sectionId];
    this.filterViewModel.classIds = [value.classId];
    this.filterViewModel.studentConcessionGroupIds = value.concessionGroup;
    this.getAllFilteredStudentConcession();
  }

  bindStudentConcession(data: any): any {
    if (!data.pagedStudentConcessionGroup) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pagedStudentConcessionGroup.list;
      this.totalRowsCount = data.pagedStudentConcessionGroup.totalItems;
      this.pageCnt = data.pagedStudentConcessionGroup.totalPages;
      this.rows.forEach(e => {
        e.isConcessionGroupExist ? e.operations = [{
          name: AppSettings.REMOVE_CONCESSION,
          icon: AppSettings.DELETE,
          operationName: AppSettings.REJECT
        }] : e.operations = [{
          name: AppSettings.ASSIGN_CONCESSION,
          icon: AppSettings.APPROVE_ICON,
          operationName: AppSettings.APPROVE_OPERATION
        }];
      });
    }

    if (data.pagedStudentConcessionGroup) {
      this.filterViewModel.pageNumber = data.pagedStudentConcessionGroup.pageNumber;
    }

    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Students',
      componentName: this.currentComponent,

      visibleSelectAll: true,
      isSelectRowRequired: false,
      isPaginationRequired: true,
      filtersList: data.filters
    };
  }

  tableData(_event: any): void {
    Object.assign(_event, {
      classIds: this.filterViewModel.classIds,
      sectionIds: this.filterViewModel.sectionIds,
      studentConcessionGroupIds: this.filterViewModel.studentConcessionGroupIds
    });
    this.filterViewModel = _event;
    this.getAllFilteredStudentConcession();
  }

  addStudentFeeConcesion(formValue: any): void {
    this.studentConcessionGroupView.feeConcessionGroupId = formValue.feeConcessionGroupId;
    this.studentConcessionService.createStudentConcessionGroup
      (this.studentConcessionGroupView).subscribe(res => {
        this.getAllFilteredStudentConcession();
        this.dialogRef.closeAll();
        this.studentConcessionForm.reset();
        this.addStudentConcession.resetForm();
        this.cancelFeeconcession();
        this.openSnackBar(res.messages.ResultMessage);
      }, error => {
        this.errorResponse(error);
      });
  }

  actions(event: any): void {
    if (event.operation === AppSettings.REMOVE_CONCESSN) {
      const dialogRef = this.dialogMethod(AppSettings.REMOVE_STUDENT_CONCESSION, true, AppSettings.NO, AppSettings.YES);
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this.removeStudentConcessionGroupView.id = event.clickedRow.studentConcessionGroupId;
          this.studentConcessionService.removeStudentConcessionGroup(this.removeStudentConcessionGroupView).subscribe(res => {
            this.openSnackBar(res.messages.ResultMessage);
            this.getAllFilteredStudentConcession();
          });
        }
      });
    }
    else {
      this.studentConcessionGroupView.schoolAcademicSessionStudentId = event.clickedRow.schoolAcademicSessionStudentId;
      this.getFeeConcessionGroup();
      this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { template: this.customTemplate,  }
      });
    }
  }

  onselectFeeConcessionGroup($event: any): void {
    this.totalAmount = null;
    this.feeConcessionDetails = [];
    this._feeConcessionGroupService.fetchFeeConcessionGroupById($event).subscribe(res => {
    this.feeConcessionDetails = res.feeConcessionGroupDataViewModel.feeConcessionGroupDiscountDataViewModel;
      this.feeConcessionDetails.forEach(element => {
        if (element.feeConcessionGroupTermDiscountDataViewModel.length) {
          element.feeConcessionGroupTermDiscountDataViewModel.forEach(term => {
            this.totalAmount += term.termConcessionAmt;
          });
        }
      });
    }, error => {
      this.errorResponse(error);
    });
  }

  getFeeConcessionGroup(): void {
    this.studentConcessionService.getFeeConcessionGroups().subscribe(res => this.feeConcessionGroups = res.studentGroups);
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  reset(): void {
    this.sections = [];
    this.studentConcessionSearchForm.reset();
    this.studentConcessionSearch.resetForm();
    this.initializeFilterView();
    this.initializeTableSettings();
    this.setModelDataTableComponent(this.currentComponent, null);
  }

  resetFilter(): void {
    this.initializeFilterView();
    this.getAllFilteredStudentConcession();
  }

  cancelFeeconcession(): void{
    this.hideDropDown = false;
    this.studentConcessionForm.reset();
    this.addStudentConcession.resetForm();
    this.feeConcessionDetails = null;
    this.totalAmount = null;
  }

  showConcessionInfo(concession: any): void{
    this.onselectFeeConcessionGroup(concession.concessionGroupId);
    this.hideDropDown = true;
    this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { template: this.customTemplate,  }
    });
  }
}
