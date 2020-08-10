import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings, Pattern } from 'app/app.constants';
import * as HttpStatus from 'http-status-codes';
import { AllTestTypeDetailsViewModel } from 'app/models/grading/all-test-type-details-viewmodel';
import { TestTypeView } from 'app/models/grading/test-type-view';
import { TestTypeViewModel } from 'app/models/grading/test-type-viewmodel';
import { TestTypeService } from 'app/service/grading-service/api/test-type.service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
    selector: 'app-test-type',
    templateUrl: './test-type.component.html',
    styleUrls: ['./test-type.component.scss'],
})
export class TestTypeComponent extends CommonComponent implements OnInit{

    @ViewChild('addTestTypeTemplate') addTestTypeTemplate;
    @ViewChild('userTestTypeForm') userTestTypeForm;
    testTypeIds: Array<string> = [];
    testTypeForm: FormGroup;
    testTypeViewModel: TestTypeViewModel;
    testTypeView: TestTypeView;
    custRowsPerPageOptions: Array<number> = [];
    rows: Array<any>;
    totalItems: number;
    pageCnt: number;
    allTestTypeDetailsViewModel: AllTestTypeDetailsViewModel;
    cols: any[];
    tabSettings: {};
    tempData: any;
    closeAddPanel: boolean;
    isUpdate = false;
    isValidate: boolean;
    schoolAcademicSession: any;
    isSchoolSchoolAcademicSession: boolean;
    schoolAcademicSessionRequired: string;
    failedRecords: string[];
    currentComponent = 'TestTypeComponent';
    errorMessages: any;
    errorsList: Array<any> = [];
    disbleSubmitBtn = false;
    constructor(private testTypeService: TestTypeService, public commonService: CommonService, public dialog: MatDialog, public snackBar: MatSnackBar) {
        super();
        this.allTestTypeDetailsViewModel = {
            sortBy: '',
            sortOrder: AppSettings.DEFAULT_SORTORDER,
            pageNumber: AppSettings.PAGENUMBER,
            pageSize: AppSettings.PAGESIZE,
        };
        this.commonService.getTableLSObj(this.allTestTypeDetailsViewModel);
    }
    ngOnInit(): void  {
        /**
        * table columns
        */
        this.cols = [
            { field: 'name', header: 'Test Type Name', sort: true },
            { field: 'code', header: 'Test Type Code', sort: true },
            { field: 'questionCount', header: 'Question Count', sort: true },
            { field: 'marksCount', header: 'Marks Count', sort: true },
            { field: 'actions', header: 'Actions', sort: false },
        ];
        /**
        * intializes formGroup for TestType
        */
        this.testTypeForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
            code: new FormControl('', [Validators.maxLength(6)]),
            questionCount: new FormControl('', [Validators.max(32767), Validators.min(1), Validators.pattern(Pattern.NUMBER_PATTERN)]),
            marksCount: new FormControl('', [Validators.max(9999.99), Validators.min(1), 
            Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
        });

        const modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.allTestTypeDetailsViewModel = modelTableComponent;
        }
        if (this.getTokenParam('_as')) {
            this.fetchTableData();
        }
        else {
            setTimeout(() => {
                this.openSnackBar(AppSettings.SCHOOLACADEMIC_SESSION_REQUIRED, true);
            });
            this.tabSettings = {
                columns: this.cols,
                model: this.allTestTypeDetailsViewModel,
                rows: this.rows,
                tablename: 'Test Types',
                componentName: this.currentComponent,
                isNewStudentCourseSelectionRequired: true,
                isSelectRowRequired: true,
                visibleSelectAll: true,
                isPaginationRequired: true,
                totalRowsCount: this.totalItems,
                custRowsPerPageOptions: this.custRowsPerPageOptions,
                pageCnt: this.pageCnt,
                headerOperations: {
                    infoButton: {
                        required: true,
                        text: 'Test Types'
                    }
                },
            };
        }
    }
    /**
    * api call to get all test types
    */

    getTableData(allTestTypeDetailsViewModel: AllTestTypeDetailsViewModel): void {

        this.allTestTypeDetailsViewModel = allTestTypeDetailsViewModel;
        this.fetchTableData();
    }

    fetchTableData(): void {
        this.testTypeService.getAllDetails(this.allTestTypeDetailsViewModel.sortBy, this.allTestTypeDetailsViewModel.sortOrder, 
        this.allTestTypeDetailsViewModel.names, this.allTestTypeDetailsViewModel.codes, this.allTestTypeDetailsViewModel.questionCounts, 
        this.allTestTypeDetailsViewModel.marksCounts, this.failedRecords, this.allTestTypeDetailsViewModel.pageNumber, 
        this.allTestTypeDetailsViewModel.pageSize).subscribe((res: any) => { this.getAllTestTypes(res); }, error => {
            this.errorResponse(error);
        });
    }

    /**
    * manipulate response data and sets to app-table
    * @param testTypeList 
    */

    getAllTestTypes(testTypeList: any): void {
        this.custRowsPerPageOptions = [];
        if (!testTypeList.testTypeListViewModel) {
            this.rows = [];
        } else {
            this.rows = testTypeList.testTypeListViewModel.list;
            this.totalItems = testTypeList.testTypeListViewModel.totalItems;
        }
        const testoperations = [
            {
                name: AppSettings.EDIT_OPERATION,
                icon: AppSettings.EDIT_ICON

            },
            {
                name: AppSettings.DELETE_OPERATION,
                icon: AppSettings.DELETE_ICON
            },
        ];
        this.rows.forEach(e => {
            e.operations = testoperations;
        });
        if (testTypeList.testTypeListViewModel) {
            this.allTestTypeDetailsViewModel.pageNumber = testTypeList.testTypeListViewModel.pageNumber;
        }
        this.tabSettings = {
            columns: this.cols,
            model: this.allTestTypeDetailsViewModel,
            rows: this.rows,
            tablename: 'Test Types',
            componentName: this.currentComponent,
            isNewStudentCourseSelectionRequired: true,
            isSelectRowRequired: true,
            visibleSelectAll: true,
            isPaginationRequired: true,
            totalRowsCount: this.totalItems,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            pageCnt: this.pageCnt,
            headerOperations: {
                addingForm: {
                    required: true,
                    name: this.addTestTypeTemplate,
                    btnName: 'New Test Type'
                },
                infoButton: {
                    required: true,
                    text: 'Test Types'
                  }
            },
            filtersList: testTypeList.filters
        };
    }

    /**
    * Deleteting the testtypes
    * @param testTypeIds 
    * @param isMultiSelect 
    */
    deleteTestTypes(testTypeIds: any, isMultiSelect: any): void {
        if (testTypeIds.length > 0) {
            this.testTypeService.deleteAll(testTypeIds).subscribe(res => {
                if (res.statusCode = HttpStatus.OK) {
                    this.testTypeIds = [];
                    this.openSnackBar(res.messages.ResultMessage);
                }
                else {
                    this.openSnackBar(res.messages.ResultMessage);
                }
                if (isMultiSelect) {
                    this.failedRecords = res.failedRecords;
                }
                this.fetchTableData();
            }, error => {
                if (error.error.failedRecords !== undefined && error.error.failedRecords.length > 0) {
                    this.failedRecords = (error.error.failedRecords);
                }
                this.errorResponse(error);
            });
        }
    }

    onTableSelect(data: any): void {
        if (data.operation === AppSettings.DELETE) {
            const dialogRef = this.dialogBox(AppSettings.WARNING_ON_SINGLE_DELETE, true, AppSettings.NO, AppSettings.YES);
            dialogRef.afterClosed().subscribe(action => {
                if (action === AppSettings.YES) {
                    const testTypeIds: Array<string> = [data.clickedRow.id];
                    this.deleteTestTypes(testTypeIds, false);
                }
            });
        }
        if (data.operation === AppSettings.EDIT) {
            this.isUpdate = true;
            this.closeAddPanel = false;
            this.testTypeService.getTestTypeById(data.clickedRow.id).subscribe(res => {
                this.testTypeForm.patchValue(res.testTypeViewModel);
                this.testTypeForm.controls['id'].setValue(data.clickedRow.id);
            }, error => {
                this.errorResponse(error);
            });
        }
    }
    /**
    * Api call for Add or updating the testtype based on condition
    * @param testTypeView 
    */
    onSubmitTestType(testTypeView: any): void {
        this.isValidate = true;
        if (testTypeView.status === AppSettings.VALID) {
            this.disbleSubmitBtn = true;
            if (testTypeView.value.id == null) {
                this.testTypeViewModel = testTypeView.value;
                this.testTypeService.createTestType(this.testTypeViewModel).subscribe(res => this.addUpdateResponce(res), error => {
                    this.disbleSubmitBtn = false;
                    this.errorResponse(error);
                });
            }
            else {
                this.testTypeView = testTypeView.value;
                this.testTypeService.updateTestType(this.testTypeView).subscribe(res => this.addUpdateResponce(res), error => {
                    this.disbleSubmitBtn = false;
                    this.errorResponse(error);
                });
            }
        }
    }
    /**
    * Responce for Add or update
    * @param testTypeView 
    */
    addUpdateResponce(testTypeView: any): void {
        this.disbleSubmitBtn = false;
        if (testTypeView.statusCode !== HttpStatus.CONFLICT) {
            this.closeAddPanel = true;
            this.fetchTableData();
        }
        this.openSnackBar(testTypeView.messages.ResultMessage);
    }

    /**
    * close the panel and initialize form on close
    */

    closePanel(): void {
        this.closeAddPanel = true;
        this.isValidate = false;
        this.testTypeForm.reset();
        this.userTestTypeForm.resetForm();
        this.disbleSubmitBtn = false;
    }
    /**
    * warns on delete then call deletetestTypes method on yes
    */

    deleteAll(): void {
        const dialogRef = this.dialogBox(AppSettings.WARNING_ON_MULTI_DELETE, true, AppSettings.NO, AppSettings.YES);
        dialogRef.afterClosed().subscribe(action => {
            if (action === AppSettings.YES) {
                this.deleteTestTypes(this.testTypeIds, true);
            }
        });
    }
    addRow(): void {
        this.isValidate = false;
        this.testTypeForm.reset();
        this.userTestTypeForm.resetForm();
        this.closeAddPanel = false;
        this.isUpdate = false;
    }
    /**
    * opens dialog to show on warnings/success messages
    * @param dialogData 
    * @param disableClose 
    * @param button1Text 
    * @param button2Text 
    */

    dialogBox(dialogData: any, disableClose: boolean, button1Text: string, button2Text?: string): any {
        return this.dialog.open(CustomDialogComponent, {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    }
    selectedRows(data: any): void {
        this.testTypeIds = [];
          for (let index = 0; index < data.length; index++) {
            this.testTypeIds.push(data[index].id);
          }
      }
}
