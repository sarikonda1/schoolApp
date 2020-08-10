import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import * as HttpStatus from 'http-status-codes';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { LocalizationService } from '../service/localization.service';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageInfoGridView, PageInfoResultView, ValidationMessageView } from '../model/page-info-grid-view';

@Component({
  selector: 'app-page-information',
  templateUrl: './page-information.component.html',
  styleUrls: ['./page-information.component.scss'],
  providers: [LocalizationService],
})
export class PageInformationComponent extends CommonComponent implements OnInit {
  columns: any[];
  currentComponent: any = 'PageInformationComponent';
  rows: any[];
  totalRowsCount: number;
  pageCnt: number;
  tableSettings: {
    model: PageInfoGridView; rows: any[];
    columns: any; totalRowsCount?: number; pageCnt?: number;
    tablename: string; componentName: any; visibleSelectAll?: boolean;
    isSelectRowRequired?: boolean; isPaginationRequired?: boolean; filtersList?: any[]; headerOperations?: {}; rowGroupingColumns?: any[];
  };
  isFormSubmitted = true;
  closeForm: boolean;
  showCreateBtn = true;
  gridView: PageInfoGridView;
  pageInfoForm: any;
  ckeditorContent: string;
  selectedLanguage: string;
  languages: Array<any> = [];

  @ViewChild('pageInfo') _pageInformationForm;
  constructor(public dialogRef: MatDialog,
    public commonService: CommonService, private localizationService: LocalizationService, public snackBar: MatSnackBar) {
    super();

    this.initializeFilterView();
    this.initializeTableSettings();
    this.setColumnHeaders();
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadlanguages();
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.gridView = modelTableComponent;
    }
    this.getTableData();
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'key', header: 'Key', sort: true },
      { field: 'value', header: 'Value', sort: true, innerHTML: true },
      { field: 'culture', header: 'Culture/Language', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeFilterView(): void {
    this.gridView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Page Information',
      componentName: this.currentComponent,
      model: this.gridView
    };
  }

  initializeForm(): void {
    this.pageInfoForm = new FormGroup({
      id: new FormControl(''),
      key: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      value: new FormControl('', [Validators.required, Validators.maxLength(4500)]),
      culture: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    });
  }

  tableData(_event: PageInfoGridView): void {
    this.gridView = _event;
    this.getTableData();
  }

  getTableData(): void {
    this.localizationService.FetchPageInformationList(this.gridView.key, this.gridView.value, this.gridView.culture,
      this.gridView.sortBy, this.gridView.sortOrder, this.gridView.pageNumber, this.gridView.pageSize).subscribe(res => {
        if (res) {
          this.bindResult(res);
        }
      });
  }

  bindResult(data: PageInfoResultView): any {
    if (!data.pageInformationList) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data.pageInformationList.list;
      this.totalRowsCount = data.pageInformationList.totalItems;

      this.pageCnt = data.pageInformationList.totalPages;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          },
          {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          },
          {
            name: AppSettings.VIEW_OPERATION,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW
          }
        ];
      });
    }
    if (data.pageInformationList) {
      this.gridView.pageNumber = data.pageInformationList.pageNumber;
    }
    this.tableSettings = {
      model: this.gridView,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Page Information',
      componentName: this.currentComponent,
      filtersList: data.filters,
      rowGroupingColumns: ['key'],
      isPaginationRequired: true,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Page Information'
          },
        addingForm: {
          required: true,
          btnName: 'Add'
        }
      }
    };
  }


  openForm(): void {
    this.initializeForm();
    // this.isFormSubmitted = false;
    this.closeForm = false;
  }

  onCancel(): void {
    this.closeForm = true;
    // this.isFormSubmitted = false;
    this.showCreateBtn = true;
    this._pageInformationForm.resetForm();
    this._pageInformationForm.submitted = false;
    this.pageInfoForm.reset();
    this.initializeForm();
  }

  actions(operationData: any): void {
    if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.isFormSubmitted = false;
      this.showCreateBtn = false;
      this.closeForm = false;
      this.pageInfoForm.patchValue(operationData.clickedRow);
    }
    else if (operationData.operation === AppSettings.DELETE.toLocaleLowerCase()) {
      const dialogValue = this.commonService.dialog(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
      dialogValue.afterClosed().subscribe(action => {
        if (action === AppSettings.YES) {
          const infoId: string = operationData.clickedRow.id;
          this.localizationService.deletePageInformation(infoId).subscribe(response => {
            this.commonService.dialog(response.messages.ResultMessage, true, AppSettings.OK);
            this.getTableData();
          }, error => {
            this.errorResponse(error);
          });
        }
      });

    }
    else if (operationData.operation === AppSettings.VIEW_OPERATION.toLocaleLowerCase()) {
      this.getPageInformation(operationData.clickedRow.id);
    }
  }

  dialogMethod(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
    });
  }

  getPageInformation(event): void {
    this.localizationService.getPageInformationById(event).subscribe(
      res => {
        this.dialogRef.open(CustomDialogComponent, {
          width: '400px',
          data: {
            title: res.pageInformationViewModel.key,
            tableInformation: this.commonService.getTranslation(res.pageInformationViewModel.value), action: true, btn1Text: AppSettings.Ok
          },
        });

      }
    );
  }

  savePageInfoForm(form): void {
    this.isFormSubmitted = true;
    if (!form.id && this.pageInfoForm.status === AppSettings.VALID) {
      this.localizationService.createPageinformation(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.getTableData();
            this.onCancel();
          }
          else {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.closeForm = false;
          }
        });
    } else if (this.pageInfoForm.valid) {
      this.localizationService.updatePageInformation(form)
        .subscribe((res: ValidationMessageView) => {
          if (res.statusCode === HttpStatus.OK) {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.getTableData();
            this.onCancel();
          }
          else {
            this.dialogMethod(res.messages.ResultMessage, true, AppSettings.OK);
            this.closeForm = false;
          }
        });
    }
  }


  onChange(event): void {
    this.ckeditorContent = event;
  }
  onEditorChange(event): void {
    this.ckeditorContent = event;
  }

  loadlanguages(): void {
    // read list of launguages from json file
    this.commonService.getLaunguage().subscribe(res => {
      if (res !== undefined && res.languages) {
        res.languages.forEach(element => {
          this.languages.push({
            label: element.title,
            value: element.id
          });
        });
      }

    });
  }

  getHelpText(event): string {
    let helptext: string;
    this.selectedLanguage = localStorage.getItem('_l');
    if (this.selectedLanguage === null || this.selectedLanguage === undefined) {
      this.selectedLanguage = 'en';
    }

    this.localizationService.getPageInformationByKeyandCulture('event', this.selectedLanguage).subscribe(
      res => {
        if (res.pageInformationViewModel !== null) {
          helptext = res.pageInformationViewModel.value;
        }
        else {
          helptext = res.pageInformationViewModel;
        }
      }
    );
    return helptext;
  }
}

