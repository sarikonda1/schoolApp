import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import {SectionService} from '../../../../service/general/api/section.service';
import { SearchSectionsView } from 'app/models/academics/search-sections-view';
import { SectionViewModel } from 'app/models/academics/section-view-model';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  providers: [SectionService],
})
export class SectionComponent extends CommonComponent implements OnInit {

  // refernces for display sections list and delete sections
  sectionsList: any = [];
  sectionIds: Array<string> = [];
  // refernces for add and update form
  sectionForm: FormGroup;
  dataLoaded = Promise.resolve(false);
  _searchSections: SearchSectionsView;
  _updateSectionView: SectionViewModel;
  isUpdate: boolean;
  closeAddPanel: boolean;
  @ViewChild('sectionDataForm') sectionDataForm;
  // refernces for smart table
  rows: Array<any> = [];
  cols: any[];
  pageCnt: number;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  tabSettings: {};
  @ViewChild('sectionTemplate') sectionTemplate;
  validate: boolean;
  HttpStatus: any;
  currentComponent = 'SectionComponent';
  disableSubmitBtn = false;
  constructor(private _sectionService: SectionService, public dialogRef: MatDialog, public commonService: CommonService,
     private commonComponent: CommonComponent, public snackBar: MatSnackBar) {
    super();
   }
  ngOnInit(): void {
    this.HttpStatus = require('http-status-codes');
    this._searchSections = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      names: [],
      failedRecords: []
    };
    this.sectionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      id: new FormControl(''),
    });
   
    const modelTableComponent = this.getModelComponent(this.currentComponent);
      if (modelTableComponent) {
        this._searchSections = modelTableComponent;
      }
    this.getAllSections(this._searchSections);
    // section table Colums
    this.cols = [
      { field: 'name', header: 'Name', sort: true },
      { field: 'actions', header: 'Actions' },
    ];


    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this._searchSections,
      tablename: 'Sections',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
    };
  }

  // get all sections list method
  getAllSections(_searchSections: SearchSectionsView): void {
    this._searchSections = _searchSections;
    this._sectionService.searchSections(_searchSections.sortBy, _searchSections.names,
    _searchSections.sortOrder, _searchSections.failedRecords, _searchSections.pageNumber,
     _searchSections.pageSize).subscribe(res => { this.sectionResult(res); this.dataLoaded = Promise.resolve(true); }, error => {
      this.errorResponse(error);
    });
  }

  sectionResult(res: any): void {
    this.rows = [];
    if (!res.searchSectionsView) {
      this.rows = [];
    } else {
      this.rows = res.searchSectionsView.list;
      this.totalItems = res.searchSectionsView.totalItems;
    }
    const sectionOperations = [
      {
        name: AppSettings.EDIT_OPERATION,
        icon: AppSettings.EDIT_ICON

      },
      {
        name: AppSettings.DELETE_OPERATION,
        icon: AppSettings.DELETE_ICON,
      },
    ];
    this.rows.forEach(e => {
      e.operations = sectionOperations;
    });

    if (res.searchSectionsView) {
      this._searchSections.pageNumber = res.searchSectionsView.pageNumber;
    }

    this.tabSettings = {
      columns: this.cols,
      model: this._searchSections,
      rows: this.rows,
      tablename: 'Sections',
      componentName: this.currentComponent,
      visibleSelectAll: true,
      isSelectRowRequired: true,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      pageCnt: this.pageCnt,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Sections'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
      },
      filtersList: res.filters,
    };
  }
  // End


  // to open new section page
  openAddForm(): void {
    this.closeAddPanel = false;
    this.sectionDataForm.resetForm();
    this.isUpdate = false;
    this.validate = false;
  }

  // to add section details method
  addOrUpdateSection(sectionForm: any, onContinue = false): void {
    this.validate = true;
    if (this.sectionForm.invalid) {
      return;
    }
    else{
      this.disableSubmitBtn = true;
    }
    if (this.isUpdate) {
      this._updateSectionView = sectionForm.value;
      this._sectionService.updateSection(this._updateSectionView).subscribe(res => this.sectionResponse(res), error => {
        this.errorResponse(error);
      });
    }
    else {
      this._sectionService.createSection(sectionForm.value).subscribe(res => this.sectionResponse(res, onContinue), error => {
        // this.disbleSubmitBtn = false;
        this.errorResponse(error);
      });
    }

  }

  // section response based on request
  sectionResponse(res: any, onContinue = false): void {
    if (res.statusCode === this.HttpStatus.OK) {
      this.sectionIds = [];
      this._searchSections.failedRecords = [];
      this.disableSubmitBtn = false;
      this.sectionDataForm.resetForm();
      this.openSnackBar(res.messages.ResultMessage);
      if (this.isUpdate){
        this.closeAddPanel =  true;
         this.cancel();
      }else{
        this.closeAddPanel =  !onContinue;
        if (!onContinue){
          this.getAllSections(this._searchSections); 
        }
      } 
    }
    else {
      this.disableSubmitBtn = false;
      this.closeAddPanel = false;
      this.openSnackBar(res.messages.ResultMessage, true);
    }
  }

  // select individule record from section table 
  onTableRowSelect(data: any): void {
    this.sectionIds = [];
    for (let index = 0; index < data.length; index++) {
      this.sectionIds.push(data[index].id);
    }
  }

  // when click the cancel button closed the section form
  cancel(): void {
    this.closeAddPanel = true;
    this.disableSubmitBtn = false;
    this.getAllSections(this._searchSections);
  }


  // section table row actions for edit and delete operations
  rowActions(response: any): void {
    if (response.operation === AppSettings.EDIT) {
      this.sectionForm.controls['name'].setValue(response.clickedRow.name);
      this.sectionForm.controls['id'].setValue(response.clickedRow.id);
      this.closeAddPanel = false;
      this.isUpdate = true;
    }
    if (response.operation === AppSettings.DELETE) {
      this.sectionIds = [];
      this.sectionIds.push(response.clickedRow.id);
      const dialogRef = this.dialogRef.open(CustomDialogComponent, {
        disableClose: true,
        data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_SINGLE_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
      });
      dialogRef.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          this._sectionService.removeMultiSections(this.sectionIds).subscribe(res => this.deleteResponse(res, false), error => {
            this.errorResponse(error);
          });
        }
      });
    }
  }

  // multi delete functionalities from section table
  deleteAll(): void {
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: { text: this.commonService.getTranslation(AppSettings.WARNING_ON_MULTI_DELETE, ''), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this._sectionService.removeMultiSections(this.sectionIds).subscribe(res => this.deleteResponse(res, true), error => {
          if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
            this._searchSections.failedRecords = (error.error.failedRecords);
          }
          this.errorResponse(error);
          this.getAllSections(this._searchSections);
        });
      }
    });
  }

  deleteResponse(response: any, multi: boolean): void {
    if (multi){
      this._searchSections.failedRecords = response.failedRecords;
    }else{
      this._searchSections.failedRecords = [];
    }
    this.getAllSections(this._searchSections);
    this.openSnackBar(response.messages.ResultMessage);
  }
}
