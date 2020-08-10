import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import { InstituteLicenceService } from 'app/service/academic-service/api/institute-licence.service';
import { Pattern, AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InstituteLicenceView } from '../models/institute-licence-view';
import { InstitutionLicenseView } from '../models/institution-license-view';
import { LicenseListView } from '../models/license-details-view';
import { DatePipe } from '@angular/common';
import { UsersService } from 'app/service/academic-service';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-institute-license',
  templateUrl: './institute-license.component.html',
  styleUrls: ['./institute-license.component.scss'],
})
export class InstituteLicenseComponent extends CommonComponent implements OnInit, OnChanges {
  @ViewChild('appForm') aForm;

  // tslint:disable-next-line: no-input-rename
  @Input('data') data: any;


  /// FormGroup Variable
  licenseForm: FormGroup;
  // models declaration
  institueView: InstituteLicenceView;
  institutionLicenseView: InstitutionLicenseView;
  licenseDetails: LicenseListView;
  // variable declaration
  doValidate = false;
  HttpStatus: any;
  commonViewModel: any[];
  minDate: any;
  isValidate: boolean;
  tableData: Array<any> = [];
  rows: Array<any>;
  cols: any[];
  totalItems: number;
  tabSettings: {};
  isValidRight: any;
  closeAddPanel = false;
  dataLoaded = Promise.resolve(false);
  filterDetails: any;
  currentComponent: any;
  disableSubmitBtn = false;
  pageCnt: any;
  loginDetails: any;
  currencySymbol: any;


  constructor(public commonService: CommonService,
    public dialogRef: MatDialog,
    private instituteLicense: InstituteLicenceService,
    public datePipe: DatePipe, public userService: UsersService, public snackBar: MatSnackBar

  ) {
    super();
  }

  ngOnInit(): void {
    this.currencySymbol = this.getSchoolCurrency();
    const minCurrentDate = this.getDefaultDate();
    this.minDate = minCurrentDate;
    // status codes
    this.HttpStatus = require('http-status-codes');

    this.currentComponent = 'InstituteLicenseComponent';

    // Initilization  User licenseForm Form 
    this.licenseForm = new FormGroup({
      noOfSchools: new FormControl('', [Validators.required, Validators.min(1), Validators.max(99), Validators.pattern(Pattern.NUMBER_PATTERN)]),
      billingAmount: new FormControl('', [Validators.required, Validators.max(99999999.99), Validators.min(1), Validators.pattern(Pattern.DECIMAL_WITH_TWO_PRECISIONS)]),
      billingStartDate: new FormControl(this.getDefaultDate(), [Validators.required]),
      billingTypeId: new FormControl('', [Validators.required]),
    });


    
    // licenseDetails
    this.licenseDetails = {
      id: this.data,
      billingCycleId: [],
      numberOfSchools: [],
      billingAmount: [],
      billingCycle: '',
      billingStartDate: '',
      statusId: [],
      statusCode: [],
      sortBy: 'Id',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };

    // institutionLicenseView
    this.institutionLicenseView = {
      numberOfSchools: 0,
      billingCycleId: 0,
      billingAmount: 0,
      billingStartDate: '',
      statusId: 0

    };

    // institueView
    this.institueView = {
      id: '',
      licenseStatusCode: ''
    };

    // Table Colums
    this.cols = [
      { field: 'numberOfSchools', header: 'Number Of Schools', sort: true },
      { field: 'billingAmount', header: 'Billing Amount', sort: true },
      { field: 'billingStartDate', header: 'Billing Start Date', sort: true },
      { field: 'billingCycle', header: 'Billing Cycle', sort: true },
      { field: 'licenseStatus', header: 'License Status', sort: true },
    ];

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.licenseDetails = modelTableComponent;
    }

    this.userService.userCheckUserAccessGet().subscribe(response => this.checkLoginDetails(response));
  }

  checkLoginDetails(response: any): void {
    this.loginDetails = response;
    this.billingCycleTypes();
  }

  ngOnChanges(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.licenseDetails = modelTableComponent;
    }
    // licenseDetails
    this.licenseDetails = {
      id: this.data,
      billingCycleId: [],
      numberOfSchools: [],
      billingAmount: [],
      billingCycle: '',
      billingStartDate: '',
      statusId: [],
      statusCode: [],
      sortBy: '',
      sortOrder: AppSettings.SORTORDER,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
    };
    this.getAllLicense(this.licenseDetails);
  }


  // get billing cycle data
  billingCycleTypes(): void {
    this.instituteLicense.billingCycleTypes().subscribe(res => { this.billingTypeResponse(res), this.getAllLicense(this.licenseDetails); });
  }
  // biling cycle response
  billingTypeResponse(res: any): void {
    this.commonViewModel = [];
    if (res.commonViewModel.length !== 0) {
      for (let i = 0; i < res.commonViewModel.length; i++) {
        this.commonViewModel.push({ value: res.commonViewModel[i].id, label: res.commonViewModel[i].name });
      }
    }
  }

  // create institute license for selected school
  saveInstituionLicense(licenseForm: any): void {
    this.isValidate = true;
    if (this.licenseForm.invalid) {
      return;
    }
    else {
      this.disableSubmitBtn = true;
    }
    if (this.licenseForm.status === AppSettings.VALID) {
      this.institutionLicenseView.instituteId = this.data;
      this.institutionLicenseView.numberOfSchools = licenseForm.value.noOfSchools;
      this.institutionLicenseView.billingAmount = licenseForm.value.billingAmount;
      this.institutionLicenseView.billingStartDate = licenseForm.value.billingStartDate;
      this.institutionLicenseView.billingCycleId = licenseForm.value.billingTypeId;
      this.instituteLicense.create(this.institutionLicenseView).subscribe(res => this.response(res), error => {
        this.errorResponse(error);
      });
    }
  }
  // response
  response(data: any): void {
    this.disableSubmitBtn = false;
    this.isValidate = false;
    if (data.statusCode === this.HttpStatus.OK) {
      this.dialogRef.closeAll();
      this.licenseForm.reset();
      this.aForm.resetForm();
      this.licenseForm.controls['billingStartDate'].setValue(this.getDefaultDate());
      this.closeAddPanel = true;
    }
    else {
      this.closeAddPanel = false;
    }
    this.getAllLicense(this.licenseDetails);
    this.openSnackBar(data.messages.ResultMessage);
  }


  // get data of institution license
  getAllLicense(licenseDetails: LicenseListView): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.licenseDetails = modelTableComponent;
    }
    licenseDetails.id = (licenseDetails.id === undefined || licenseDetails.id === null) ? this.data : licenseDetails.id;
      this.instituteLicense.getAllInstituteLicense(licenseDetails.id, licenseDetails.billingCycleId, licenseDetails.numberOfSchools,
        licenseDetails.billingAmount, licenseDetails.billingStartDate, licenseDetails.billingStartDateBegin, licenseDetails.billingStartDateEnd,
        licenseDetails.statusId, licenseDetails.statusCode,
        licenseDetails.sortBy, licenseDetails.sortOrder, licenseDetails.pageNumber, licenseDetails.pageSize).subscribe(res => {
          this.getStudent(res);
        }, error => {
          this.errorResponse(error);
        });
  }


  // response of institution license
  getStudent(data: any): void {
    if (!data.licenceListView) {
      this.rows = [];
    }
    else {
      this.rows = data.licenceListView.list;
      this.totalItems = data.licenceListView.totalItems;
    }

    this.rows.forEach(e1 => {
      e1.billingAmount = e1.billingAmount.toFixed(2);
      e1.billingAmount = this.currencySymbol + e1.billingAmount;

      e1.billingStartDate = this.commonService.customDateFormat(e1.billingStartDate, this.getSchoolDateFormat()).date;
    });

    if (this.loginDetails !== undefined) {
      const validateInstituteAdmin = (this.loginDetails[0].schoolId != null || this.loginDetails[0].instituteId != null);
      if (validateInstituteAdmin) {

        if (this.cols.find(x => x.field === 'actions')) {
          const index = this.cols.findIndex(x => x.field === 'actions');
          this.cols.splice(index);
        }

      }
      else {

        if (!this.cols.find(x => x.field === 'actions')) {
          this.cols.push({ field: 'actions', header: 'Actions', sort: false });
        }
        this.cols = this.cols;
        this.rows.forEach(e => {
          e.operations = [
          ];
          // tslint:disable-next-line: no-unused-expression
          (e.statusCode === AppSettings.LIC_ACT) ? [e.statusId = AppSettings.INACTIVE_OPERATION, e.operations.push({
            name: AppSettings.INACTIVE_OPERATION,
            icon: AppSettings.INACTIVE_ICON,
          })] : [e.statusId = AppSettings.ACTIVE_OPERATION, e.operations.push({
            name: AppSettings.ACTIVE_OPERATION,
            icon: AppSettings.ACTIVE_ICON,
          })];
        });
      }
      this.tabSettings = {
        padding: true,
        columns: this.cols,
        model: this.licenseDetails,
        rows: this.rows,
        tablename: 'Institute Licence',
        componentName: this.currentComponent,
        isPaginationRequired: true,
        totalRowsCount: this.totalItems,
        pageCnt: this.pageCnt,
        tabTable: true,
        headerOperations: {
          addingForm: {
            required: !validateInstituteAdmin,
            name: 'addLicense',
            btnName: 'Add New Licence'
          },
          infoButton: {
            required: true,
            text: 'Institution Licenses'
          },

        },

        filtersList: data.filters
      };
    }

  }
  rowWiseActions(operationData: any): void {
    /**check status based on */
    let statusCode: string;
    statusCode = (operationData.clickedRow.statusCode === AppSettings.LIC_ACT) ? AppSettings.LIC_INACT : AppSettings.LIC_ACT;
    let institueView: InstituteLicenceView;
    institueView = {
      id: operationData.clickedRow.id,
      licenseStatusCode: statusCode
    };
    this.changeLicenseStatus(institueView);
  }
  /**
  * changes the status of institute license
  * @param institueView 
  */
  changeLicenseStatus(institueView: InstituteLicenceView): void {
    this.instituteLicense.updateInstitutionLicenceStatus(institueView)
      .subscribe(response => {
        this.openSnackBar(response.messages.ResultMessage);
        if (response.statusCode === this.HttpStatus.OK) {
          this.getAllLicense(this.licenseDetails);
        }
      }, error => {
        this.errorResponse(error);
      });
  }

  // Adding Post Form
  onAddFormClick(): void {
    this.commonService.setOverlay(AppSettings.SHOW);
    this.closeAddPanel = false;
    this.isValidate = false;
    this.disableSubmitBtn = false;
  }
  // method for when click cancel panel it will open
  closeAddForm(): void {
    this.aForm.resetForm();
    this.isValidate = false;
    this.commonService.setOverlay(AppSettings.HIDE);
    this.closeAddPanel = true;
    this.licenseForm.reset();
    this.licenseForm.controls['billingStartDate'].setValue(new Date);
  }

}
