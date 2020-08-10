import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as HttpStatus from 'http-status-codes';

import { StudentGroupService } from 'app/service/student-group/student-group.service';
import { StudentGroupDetailsView } from '../model/student-group-details-view';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';
import { AssignGroupView } from '../model/assign-group-view';
import { AttachmentViewModel } from '../model/attachment-view-model';
import { AssignRepresentativeView } from '../model/assign-representative-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { RouteConfig } from 'app/url.config';
import { StudentGroupRepViewModel } from '../model/student-group-rep-view-model';
import { StoreService } from 'app/service/file-management/store.service';



@Component({
  selector: 'app-student-groups',
  templateUrl: './student-groups.component.html',
  styleUrls: ['./student-groups.component.scss']
})
export class StudentGroupsComponent extends CommonComponent implements OnInit {
  @ViewChild('studentGroupTemplate') studentGroupTemplate;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('userStudentGroupForm') userStudentGroupForm;
  @ViewChild('userStudentGroupRepForm') userStudentGroupRepForm;
  studentGroupDetails: StudentGroupDetailsView;
  studentGroup: AssignGroupView;
  attachmentInfo: AttachmentViewModel;
  groupRepresentatives: AssignRepresentativeView;
  studentGroupRepView: StudentGroupRepViewModel;

  cols: any[];
  tabSettings: {};
  tempData: any;
  closeAddPanel: boolean;
  currentComponent = 'StudentGroupsComponent';
  custRowsPerPageOptions: Array<number> = [];
  rows: Array<any>;
  totalItems: number;
  pageCnt: number;
  studentGroupForm: FormGroup;
  representativeForm: FormGroup;
  studentRepRoles: Array<any> = [];
  repRoleSubmitted = false;
  studentGroupSubmitted = true;
  flagImageProp: any;
  selectedColor: any;
  representativesList: Array<any> = [];
  grpReps: Array<any> = [];
  grpRepsObj: any = {};
  nonDuplicatedArray: Array<any> = [];
  id: any;
  colorCode: string;
  disbleSubmitBtn = false;
  disbleAddRowBtn = false;
  checkDupliacteList: Array<any> = [];
  repList: Array<any> = [];
  displayName: any;
  selectedBgCode: any;
  searchAssigneeName: any;
  selectedAssignee: any;
  isUpdateData = false;
  clickedId: any;
  repRolesList: Array<any> = [];
  filteredAssigness: Array<any>;
  notProperAssignee = false;
  isDuplicateRepresentativeData = false;
  detailsComponent = 'StudentGroupDetailsComponent';

  constructor(private _fb: FormBuilder, private router: Router,
    private route: ActivatedRoute, private studentGroupService: StudentGroupService,
    public commonService: CommonService, public dialog: MatDialog,
    private cd: ChangeDetectorRef, private sanitizer: DomSanitizer,
    private storeService: StoreService, public snackBar: MatSnackBar) {
    super();
    this.studentGroupDetails = {
      shortNames: [],
      fullNames: [],
      symbols: [],
      Motos: [],
      sortBy: '',
      sortOrder: AppSettings.DEFAULT_SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'shortName', header: 'Short Name', sort: true },
      { field: 'fullName', header: 'Full Name', sort: true },
      { field: 'color', header: 'Color', sort: false, type: 'color' },
      { field: 'symbol', header: 'Symbol', sort: true },
      { field: 'moto', header: 'Moto', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.attachmentInfo = {
      fileName: null,
      fileValue: null
    };

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.studentGroupDetails,
      tablename: 'Student Groups',
      componentName: this.currentComponent,
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.studentGroupDetails = modelTableComponent;
    }
    this.getStudentRepRoles();
    this.studentGroupControls();
    this.repArrayInit();
    this.getStudentGroups(this.studentGroupDetails);
  }

  // Initailising form for student group
  studentGroupControls(): void {
    this.studentGroupForm = this._fb.group({
      id: new FormControl(0),
      shortName: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      fullName: new FormControl(null, [Validators.maxLength(135)]),
      color: new FormControl(null, [Validators.maxLength(45)]),
      symbol: new FormControl(null, [Validators.maxLength(45)]),
      moto: new FormControl(null, [Validators.maxLength(45)]),
      studentGroupReps: this._fb.array([]),
      attachment: this.attachmentInfo,
    });
  }

  getStudentGroups(studentGroupDetails: StudentGroupDetailsView): void {
    this.closeAddPanel = true;
    this.studentGroupDetails = studentGroupDetails;
    this.fetchStudentGroups();
  }

  fetchStudentGroups(): void {
    this.studentGroupService.studentGroupsDetails(this.studentGroupDetails.shortNames, this.studentGroupDetails.fullNames,
      this.studentGroupDetails.symbols, this.studentGroupDetails.Motos,
      this.studentGroupDetails.flags, this.studentGroupDetails.sortBy,
      this.studentGroupDetails.sortOrder, this.studentGroupDetails.pageNumber,
      this.studentGroupDetails.pageSize).subscribe((res: any) => { this.getAllStudentGroups(res); }, error => {
        this.errorResponse(error);
      });
  }

  /**
   * manipulate response data and sets to app-table
   * @param testTypeList 
   */

  getAllStudentGroups(studentGroupsList: any): void {
    this.custRowsPerPageOptions = [];
    if (!studentGroupsList.studentGroupDetailsView) {
      this.rows = [];
    } else {
      this.rows = studentGroupsList.studentGroupDetailsView.list;
      this.totalItems = studentGroupsList.studentGroupDetailsView.totalItems;
    }
    const studentGroupoperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT_ICON

      },
      {
        name: AppSettings.VIEW_OPERATION,
        icon: AppSettings.DETAILS_ICON

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON
      },
    ];
    this.rows.forEach(e => {
      e.operations = studentGroupoperations;
    });
    if (studentGroupsList.studentGroupDetailsView) {
      this.studentGroupDetails.pageNumber = studentGroupsList.studentGroupDetailsView.pageNumber;
    }
    this.tabSettings = {
      columns: this.cols,
      model: this.studentGroupDetails,
      rows: this.rows,
      tablename: 'Student Groups',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      headerOperations: {
        addingForm: {
          required: true,
          name: this.studentGroupTemplate,
          btnName: AppSettings.NEW
        },
        infoButton: {
          required: true,
          text: 'Student Groups'
        }
      },
      filtersList: studentGroupsList.filters
    };
  }

  onColorChanged(color: any): void {
    if (color.bg !== undefined && color.bg !== '') {
      this.colorCode = color.class;
      this.selectedColor = color.class;
      this.studentGroupForm.controls.color.patchValue(this.selectedColor);
    }
  }

  imgChanged(files, logo = false): void {
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
        that.flagImageProp = {
          src: that.sanitizer.bypassSecurityTrustResourceUrl(image.src)
        };
        that.studentGroupForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: (<string>reader.result).split(',')[1] });
        that.cd.detectChanges();
      };
    };
  }

  clearImages(logo = false): void {
    if (logo) {
      this.flagImageProp = {};
      this.studentGroupForm.controls.attachment.patchValue(this.attachmentInfo);
    }
    this.cd.detectChanges();
  }

  getStudentRepRoles(): void {
    this.studentRepRoles = [];
    this.studentGroupService.getStudentGroupRepRoles().subscribe(response => {
      if (response.listViews.length) {
        response.listViews.forEach(element => {
          this.studentRepRoles.push({
            label: element.name,
            value: element.id
          });
        });
      }
    });
  }

  displayFn(user: any): void {
    if (user) {
      this.displayName = user.label === undefined ? user : user.label;
      return this.displayName;
    }
  }
  onSelectOptionEvent(event: any, index: number): boolean {
    const data = event.target.value;
    return this.onSelectOption(data, index);
  }
  onSelectOption(data: any, index: number, onSearch = true): boolean {
    this.searchAssigneeName = data;
    // if (this.representativeForm.controls['studentGroupReps'].invalid) {
    //   this.disbleAddRowBtn = true;
    //   this.repRoleSubmitted = true;
    //   if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
    //     this.filteredAssigness[index] = [];
    //   }
    //   return false;
    // }

    // else


    if (onSearch) {
      this.disbleAddRowBtn = false;
      if (data.length >= 3) {
        const tempFilteredAssigness = [];
        const control = <FormArray>this.representativeForm.controls['studentGroupReps'];
        if ((control.at(index).value.assigneeTypeId) === '1') {
          const trimmedData = data ? data.trim() : null;
          if (!trimmedData) {
            return;
          }
          this.studentGroupService.getStudent(trimmedData, this.clickedId).subscribe((res: any) => {
            if (res.studentsDataList && res.studentsDataList.length) {
              res.studentsDataList.forEach(element => {
                tempFilteredAssigness.push({
                  label: element.studentName + ' , ' + element.currentClassName + ' ' + element.currentSectionName + ' , ' + element.admissionNumber,
                  value: element.id
                });
              });
              this.filteredAssigness[index] = tempFilteredAssigness;
              this.cd.detectChanges();
            }
          }, error => {
            this.errorResponse(error);
          });
        } else {
          this.studentGroupService.getSearchStaff(data).subscribe((res: any) => {
            if (res.staffSearchViewResult && res.staffSearchViewResult.length) {
              res.staffSearchViewResult.forEach(element => {
                if (element.designation === null) {
                  element.designation = '';
                }
                tempFilteredAssigness.push({

                  label: element.staffName + ' ' + element.designation + ' , ' + element.staffCode,
                  value: element.id
                });
              });
              this.filteredAssigness[index] = tempFilteredAssigness;
              this.cd.detectChanges();
            }
          }, error => {
            this.errorResponse(error);
          });
        }
      }
    }
  }

  get addNewRowAssaignRepform(): FormArray {
    return <FormArray>this.representativeForm.get('studentGroupReps');
  }

  repArrayInit(): void {
    this.representativeForm = this._fb.group({
      studentGroupReps: this._fb.array([]),
    });
  }

  // list all your form controls here, which belongs to your form array
  initItemRows(): FormGroup {
    return this._fb.group({
      id: new FormControl(null),
      representativeRoleId: new FormControl(null, [Validators.required]),
      assigneeTypeId: new FormControl(null, [Validators.required]),
      assigneeId: new FormControl(null),
      assignRepRoleName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  // Adding representative role details onClick ADD
  addNewRow(index: any): boolean {
    if (this.representativeForm.controls['studentGroupReps'].value.length === 0) {
      this.representativeForm.reset();
      this.userStudentGroupRepForm.resetForm();
    }
    if (this.representativeForm.controls['studentGroupReps'].invalid) {
      this.repRoleSubmitted = true;
      return false;
    } else {
      if (this.filteredAssigness === undefined) {
        this.filteredAssigness = [];
      }
      if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
        this.filteredAssigness[index] = [];
      }

      this.grpReps = [];
      if (this.representativeForm.controls['studentGroupReps'].value.length) {
        this.representativesList = this.representativeForm.controls['studentGroupReps'].value;
      }
      this.repRoleSubmitted = false;
      // control refers to your formarray
      const control = <FormArray>this.representativeForm.controls['studentGroupReps'];
      // add new formgroup
      control.push(this.initItemRows());
      this.disbleAddRowBtn = true;
    }
  }

  onChange(assignee: any, index: number): void {
    this.selectedAssignee = assignee;
    if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
      this.filteredAssigness[index] = [];
    }

    let groupReps: any = this.representativeForm.controls.studentGroupReps;
    groupReps = groupReps.controls[index].patchValue({ assignRepRoleName: null });
    if (this.representativeForm.controls['studentGroupReps'].invalid) {
      this.disbleAddRowBtn = true;
      this.repRoleSubmitted = true;
    } else {
      this.disbleAddRowBtn = false;
    }
    if (document.getElementById('assign-' + index)) {
      document.getElementById('assign-' + index).focus();
    }
  }

  onSelectRepRole(index: number): void {
    if (this.searchAssigneeName != null) {
      this.onSelectOption(this.searchAssigneeName, index, false);
    } else if (this.filteredAssigness && index !== undefined && this.filteredAssigness[index]) {
      this.filteredAssigness[index] = [];
    }
  }

  // Deleting a row of representatives details onClick Remove
  deleteRow(index: number): void {
    this.disbleAddRowBtn = true;
    // control refers to your formarray
    const control = <FormArray>this.representativeForm.controls['studentGroupReps'];
    // remove the chosen row
    if (control.at(index).value.assignRepRoleName != null) {
      if (control.at(index).value.assignRepRoleName.value === undefined) {
        this.notProperAssignee = false;
      }
    }

    this.checkDuplicateData();
    control.removeAt(index);
    if ((!this.representativeForm.controls['studentGroupReps'].value.length)
      || (this.representativeForm.controls['studentGroupReps'].value.find(x => x.representativeRoleId !== null))) {
      this.disbleAddRowBtn = false;
    }
  }

  openForm(): void {
    this.clickedId = null;
    this.closeAddPanel = false;
    this.isUpdateData = false;
    this.studentGroupForm.reset();
    this.userStudentGroupForm.resetForm();
    this.userStudentGroupRepForm.resetForm();
    this.representativeForm.reset();
    this.repRoleSubmitted = false;
    this.colorCode = '';
    this.clearImages(true);
    this.clearFormArray(this.representativeForm.controls['studentGroupReps']);
  }

  closePanel(): void {
    this.closeAddPanel = true;
    this.studentGroupForm.reset();
    this.disbleSubmitBtn = false;
    this.userStudentGroupForm.resetForm();
    this.userStudentGroupRepForm.resetForm();
    this.representativeForm.reset();
    this.repRoleSubmitted = false;
    this.colorCode = '';
    this.clearImages(true);
    this.clearFormArray(this.representativeForm.controls['studentGroupReps']);
    this.scrollIntoViewById('student-groups-table');
  }

  clearFormArray(formArray: any): void {
    const control = <FormArray>formArray;
    for (let i = control.length - 1; i >= 0; i--) {
      control.removeAt(i);
    }
  }

  addStudentGroup(studentGroupForm: any): boolean {
    this.grpReps = [];
    this.representativesList = [];
    if (studentGroupForm.invalid) {
      return false;
    }

    else if (this.representativeForm.controls['studentGroupReps'].value.length && this.representativeForm.controls['studentGroupReps'].invalid) {
      this.repRoleSubmitted = true;
      return false;
    } else {
      if (this.representativeForm.controls['studentGroupReps'].value.length) {
        this.representativeForm.controls['studentGroupReps'].value.forEach(e => {
          this.representativesList.push({
            representativeRoleId: e.representativeRoleId,
            assigneeTypeId: e.assigneeTypeId,
            assignRepRoleName: e.assignRepRoleName,
            assigneeId: e.assigneeId,
            id: e.id
          });
        });
        this.notProperAssignee = false;
        const isNotProperAssignee = this.representativesList.findIndex(x => x.assignRepRoleName.value === undefined);
        if (isNotProperAssignee !== -1 || isNotProperAssignee === undefined) {
          this.notProperAssignee = true;
          this.openSnackBar(AppSettings.NOT_PROPER_ASSIGNEE, true);
        } else {
          this.isDuplicateRepresentativeData = false;
          this.checkDuplicateData();
          if (!this.isDuplicateRepresentativeData) {
            this.repList = [];
            const returnList = Object.assign(this.repList, this.representativesList);
            returnList.forEach(element => {
              this.grpReps.push({
                studentGroupRepRoleId: element.representativeRoleId,
                studentId: element.assigneeTypeId === '1' ?
                  element.assignRepRoleName = (element.assignRepRoleName.value === undefined ?
                    element.assigneeId : element.assignRepRoleName.value) : null,
                staffId: element.assigneeTypeId === '2' ?
                  element.assignRepRoleName = (element.assignRepRoleName.value === undefined ?
                    element.assigneeId : element.assignRepRoleName.value) : null,
                id: element.id != null ? element.id : null
              });
            });
          } else {
            this.openSnackBar(AppSettings.DUPLICATE_REPRESENTATIVE_DATA, true);
            return false;
          }
        }
      }

      if (!this.notProperAssignee && !this.isDuplicateRepresentativeData) {
        if (this.isUpdateData) {
          this.disbleSubmitBtn = true;
          this.studentGroupRepView = studentGroupForm.value;
          if (this.grpReps && this.grpReps.length) {
            this.studentGroupRepView.studentGroupReps = this.grpReps;
          } else {
            this.studentGroupRepView.studentGroupReps = [];
          }
          this.studentGroupRepView.id = this.clickedId;
          this.studentGroupService.updateStudentGroup(this.studentGroupRepView).subscribe(res => this.addUpdateResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
        } else {
          this.disbleSubmitBtn = true;
          this.studentGroup = studentGroupForm.value;
          if (this.grpReps && this.grpReps.length) {
            this.studentGroup.studentGroupReps = this.grpReps;
          } else {
            this.studentGroup.studentGroupReps = [];
          }
          this.studentGroupService.createStudentGroup(this.studentGroup).subscribe(res => this.addUpdateResponse(res), error => {
            this.disbleSubmitBtn = false;
            this.errorResponse(error);
          });
        }
      }
    }
  }

  addUpdateResponse(testTypeView: any): void {
    this.disbleSubmitBtn = false;
    this.closePanel();
    if (testTypeView.statusCode !== HttpStatus.CONFLICT) {
      this.closeAddPanel = true;
      this.fetchStudentGroups();
    }
    this.openSnackBar(testTypeView.messages.ResultMessage);
    this.scrollIntoViewById('student-groups-table');
  }

  checkDuplicateData(): boolean {
    this.checkDupliacteList = this.representativesList;
    this.checkDupliacteList.map(c => delete c.id && delete c.assigneeId);
    const o = this.checkDupliacteList.reduce((acc, cv) => {
      if (!acc[JSON.stringify(cv)]) {
        acc[JSON.stringify(cv)] = true;
      }
      return acc;
    }, {});
    const res = Object.keys(o).map(x => JSON.parse(x));
    if (res.length !== this.representativesList.length) {
      this.isDuplicateRepresentativeData = true;
      return false;
    } else {
      this.isDuplicateRepresentativeData = false;
    }
  }
  rowActions(rowAction: any): void {
    this.clickedId = rowAction.clickedRow.id;
    if (rowAction.operation === AppSettings.EDIT) {
      this.closeAddPanel = false;
      this.isUpdateData = true;
      this.studentGroupService.getGroupsById(rowAction.clickedRow.id).subscribe(res => this.studentGroupsById(res), error => {
        this.errorResponse(error);
      });
    }
    if (rowAction.operation === AppSettings.DELETE.toLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const studentGroupId: string = rowAction.clickedRow.id;
          this.deleteStudentGroups(studentGroupId);
        }
      });
    }
    if (rowAction.operation === AppSettings.VIEW_DATA) {
      this.setModelDataTableComponent(this.detailsComponent, null);
      this.router.navigate([RouteConfig._Student_Group_Details + rowAction.clickedRow.id]);
    }
  }

  deleteStudentGroups(studentGroupId: string): void {
    this.studentGroupService.deleteStudentGroup(studentGroupId).subscribe(response => {
      this.openSnackBar(response.messages.ResultMessage);
      this.fetchStudentGroups();
    }, error => {
      this.errorResponse(error);
    });
  }

  studentGroupsById(groupData: any): void {
    this.repRolesList = [];
    if (groupData.studentGroupData != null) {
      this.studentGroupForm.controls['shortName'].setValue(groupData.studentGroupData.shortName);
      this.studentGroupForm.controls['fullName'].setValue(groupData.studentGroupData.fullName);
      this.colorCode = groupData.studentGroupData.color;
      this.studentGroupForm.controls['color'].setValue(groupData.studentGroupData.color);
      this.studentGroupForm.controls['symbol'].setValue(groupData.studentGroupData.symbol);
      this.studentGroupForm.controls['moto'].setValue(groupData.studentGroupData.moto);
      if (groupData.studentGroupData.attachment && groupData.studentGroupData.attachment.fileName) {
        const that = this;
        that.flagImageProp = {
          src: that.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(groupData.studentGroupData.attachment.fileName))
        };
        this.storeService.storeFileEncryptByFileNameGet(groupData.studentGroupData.attachment.fileName)
          .subscribe(data => {
            if (data) {
              that.studentGroupForm.controls.attachment.patchValue({ fileName: data.fileNameWithExtension, fileValue: data.value });
            }
          });
        that.cd.detectChanges();
      }

      if (groupData.studentGroupData && groupData.studentGroupData.studentGroupReps && groupData.studentGroupData.studentGroupReps.length) {

        this.filteredAssigness = [];
        // let index = 0;
        const tempFilteredAssigness = [];
        groupData.studentGroupData.studentGroupReps.forEach(e => {
          this.repRolesList.push({
            representativeRoleId: e.studentGroupRepRoleId,
            assigneeTypeId: e.studentId != null ? AppSettings.ISSTUDENT : AppSettings.ISSTAFF,
            assignRepRoleName: {
              label: e.studentName != null ? e.studentName : e.staffName,
              value: e.studentId != null ? e.studentId : e.staffId,
            },
            assigneeId: e.studentId != null ? e.studentId : e.staffId,
            id: e.id
          });

          tempFilteredAssigness.push({
            label: e.studentName != null ? e.studentName : e.staffName,
            value: e.studentId != null ? e.studentId : e.staffId,
          });
        });

        // this.filteredAssigness[index++] = tempFilteredAssigness;
      }

      this.representativeForm.controls['studentGroupReps'] = this._fb.array(this.repRolesList.map(i => this._fb.group(i)));
    }
  }

  // // prevent spaces at on blur text fields
  // trimTextBoxSpaces(key: string, form: any): void {
  //   if (form === 'studentGroupForm') {
  //     this.studentGroupForm.controls[key].setValue(this.commonService.trimSpaces(this.studentGroupForm.controls[key].value));
  //   } else {
  //     this.representativeForm.get('studentGroupReps')['controls'].forEach(controlElt => {

  //       if (controlElt.controls[key] !== null && controlElt.controls[key] !== undefined) {
  //         if (typeof controlElt.controls[key].value === 'object' && controlElt.controls[key].value !== null) {
  //           // controlElt.controls[key].setValue(this.commonService.trimSpaces(controlElt.controls[key].value.label));
  //         }
  //         else {
  //           controlElt.controls[key].setValue(this.commonService.trimSpaces(controlElt.controls[key].value));
  //         }

  //       }
  //     });
  //   }
  // }

  onKeyDown(): void {
    // this.filteredAssigness = [];
  }

  preventSpacesAutoComplete(control): void {
    if (!(control.value && control.value.label)) {
      control.patchValue(control.value ? control.value.trim() : null);
    }
  }
  preventSpaceAutoComplete(event: any, control): void {
    this.preventCustomKeys(event);
    if (!(control.value && control.value.label)) {
      control.patchValue(control.value ? control.value.trimLeft() : null);

    }
  }
}
