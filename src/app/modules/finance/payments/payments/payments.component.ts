import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PaymentService } from 'app/service/payments/payment.service';
import { AcademicSessionService } from 'app/service/academic-service/api/academic-session.service';
import { StatusService } from 'app/service/academic-service/api/status.service';
import { FeeTermsService } from 'app/service/configuration/finance/api/fee-terms.service';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSettings } from 'app/app.constants';
import { PaymentSearchViewModel } from 'app/models/invoice/payment-search-view-model';
import 'rxjs/add/operator/debounceTime';
import { MatAutocompleteTrigger } from '@angular/material';
import { Router } from '@angular/router';
import { FeeModuleConfig, RouteConfig } from 'app/url.config';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [StudentAdmissionService]
})
export class PaymentsComponent extends CommonComponent implements OnInit {


  constructor(private paymentService: PaymentService, private academicSessionService: AcademicSessionService, private feetermService: FeeTermsService,
    private classService: ClassesConfigService, private statusService: StatusService, private studentService: StudentDatabaseService,
    public commonService: CommonService, public dialog: MatDialog, private studentDetails: StudentAdmissionService,
    private router: Router, public snackBar: MatSnackBar,
    private cd: ChangeDetectorRef) {
    super();
    this.setColumnHeaders();
    this.initializeSearchViewModel();
  }
  @ViewChild('paymentSearch') paymentSearch;
  @ViewChild('studentName') studentNameAutoInput: any;

  schoolAcademicSession: Array<any> = [];
  feeTerms: Array<any> = [];
  schoolBoards: Array<any> = [];
  classes: Array<any> = [];
  sections: Array<any> = [];
  filterdStudents: Array<any> = [];
  invoiceNumber: any;
  receiptNumber: any;
  paymentStatus: Array<any> = [];
  paymentSearchForm: FormGroup;
  tableSettings: {};
  columns: any[];
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  currentComponent = 'PaymentsComponent';
  paymentSearchViewModel: PaymentSearchViewModel;
  totalItems: number;
  custRowsPerPageOptions: Array<number> = [];
  unRealizedPayments: any = 0;
  realizedPayments: any = 0;
  cancelledPayments: any = 0;
  customCardDetails: { title: string, message: string } = { title: 'Payments', message: 'Search Payments' };
  showCustomCard = true;
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  academicSessionId: any[];
  studentId: any;


  ngOnInit(): void {
    this.initializeForm();
    this.getSchoolAcademicSessions();
    this.paymentStatuses();

    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.paymentSearchViewModel = modelTableComponent;
      this.paymentSearchForm.patchValue(modelTableComponent);
      this.paymentSearchForm.controls['academicSessionId'].setValue(this.paymentSearchViewModel.academicSessionId);
    }
    this.paymentSearchForm.controls['studentId'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {

        this.studentService.studentNamesBaseOnAcademicSession(this.paymentSearchForm.controls['academicSessionId'].value, this.paymentSearchForm.controls['boardId'].value,
          this.paymentSearchForm.controls['classId'].value, this.paymentSearchForm.controls['sectionId'].value, name).subscribe((res) => {
            this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
            this.cd.detectChanges();
          });
      }
      else {
        this.filterdStudents = [];
      }
    });
    if (this.paymentSearchForm.value['academicSessionId']) {
      this.rows = [];
      this.paymentList();
    }
  }

  initializeSearchViewModel(): void {
    this.paymentSearchViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      academicSessionId: 0,
      feeTermId: 0,
      boardId: 0,
      classId: 0,
      sectionId: 0,
      studentId: null,
      invoiceNo: '',
      receiptNo: '',
      paymentStatusId: 0,
      admissionNo: [],
      paymentDatesBegin: null,
      paymentDatesEnd: null,
      paymentType: [],
      feeAccount: [],
      paymentAmount: [],
      invoiceAccounted: [],
      balanceAmount: [],
    };
  }

  initializeForm(): void {
    this.paymentSearchForm = new FormGroup({

      academicSessionId: new FormControl(null, [Validators.required]),
      feetermId: new FormControl(null),
      boardId: new FormControl(null),
      classId: new FormControl(null),
      sectionId: new FormControl(null),
      studentId: new FormControl(null),
      invoiceNumber: new FormControl(null),
      receiptNumber: new FormControl(null),
      statusId: new FormControl(null),

    });
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentname', header: 'Student Name', sort: true },
      { field: 'admissionNo', header: 'Admission No', sort: true },
      { field: 'classSection', header: 'Class&Section', sort: true },
      { field: 'paymentDate', header: 'Payment Date', sort: true },
      { field: 'receiptNo', header: 'Receipt No', sort: true },
      { field: 'paymentType', header: 'Payment Type', sort: true },
      { field: 'paymentStatus', header: 'Payment Status', sort: true },
      { field: 'feeAccount', header: 'Fee Account', sort: true },
      { field: 'paymentAmount', header: 'Payment Amount', sort: true },
      { field: 'invoiceAccounted', header: 'Invoice Accounted', sort: true },
      { field: 'balanceAmount', header: 'Balance Amount', sort: true },
      { field: 'view', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Payments',
      componentName: this.currentComponent,
      model: this.paymentSearchViewModel,
      filtersList: []

    };
  }

  searchPayment(data: any): void {
    if (this.paymentSearchForm.valid) {
      this.updateFilterViewModel();
      this.paymentList();
    }
  }


  updateFilterViewModel(): void {
    const data = this.paymentSearchForm.value;
    this.paymentSearchViewModel.academicSessionId = data.academicSessionId;
    this.paymentSearchViewModel.feeTermId = data.feetermId;
    this.paymentSearchViewModel.boardId = data.boardId;
    this.paymentSearchViewModel.classId = data.classId;
    this.paymentSearchViewModel.sectionId = data.sectionId;
    this.paymentSearchViewModel.receiptNo = data.receiptNumber;
    if (data.studentId) {
      this.paymentSearchViewModel.studentId = data.studentId;
      this.studentId = data.studentId.id;
    }
    else {
      this.paymentSearchViewModel.studentId = null;
      this.studentId = null;
    }
    this.paymentSearchViewModel.invoiceNo = data.invoiceNumber;
    this.paymentSearchViewModel.receiptNo = data.receiptNumber;
    this.paymentSearchViewModel.paymentStatusId = data.statusId === undefined ? null : data.statusId;
  }
  paymentList(): void {
    if (!this.studentId && this.paymentSearchViewModel.studentId) {
      this.studentId = this.paymentSearchViewModel.studentId.id;
    }

    this.setModelDataTableComponent(this.currentComponent, this.paymentSearchViewModel);
    this.setFormValues();
    this.paymentService.getPayments(this.paymentSearchViewModel.sortBy,
      this.paymentSearchViewModel.sortOrder, this.paymentSearchViewModel.academicSessionId,
      this.paymentSearchViewModel.feeTermId, this.paymentSearchViewModel.boardId,
      this.paymentSearchViewModel.classId, this.paymentSearchViewModel.sectionId,
      this.studentId, this.paymentSearchViewModel.invoiceNo,
      this.paymentSearchViewModel.receiptNo, this.paymentSearchViewModel.paymentStatusId,
      this.paymentSearchViewModel.admissionNo, this.paymentSearchViewModel.paymentDatesBegin,
      this.paymentSearchViewModel.paymentDatesEnd, this.paymentSearchViewModel.paymentType,
      this.paymentSearchViewModel.feeAccount, this.paymentSearchViewModel.paymentAmount,
      this.paymentSearchViewModel.invoiceAccounted, this.paymentSearchViewModel.balanceAmount,
      this.paymentSearchViewModel.pageNumber, this.paymentSearchViewModel.pageSize).subscribe(data => this.response(data));

  }

  setFormValues(): void {
    this.paymentSearchForm.patchValue(this.paymentSearchViewModel);
    this.paymentSearchForm.controls['statusId'].setValue(this.paymentSearchViewModel.paymentStatusId);
    this.paymentSearchForm.controls['receiptNumber'].setValue(this.paymentSearchViewModel.receiptNo);
    this.paymentSearchForm.controls['feetermId'].setValue(this.paymentSearchViewModel.feeTermId);
    this.paymentSearchForm.controls['invoiceNumber'].setValue(this.paymentSearchViewModel.invoiceNo);
  }

  paymentsData(_event: PaymentSearchViewModel): void {
    this.paymentSearchViewModel = _event;
    this.updateFilterViewModel();
    this.paymentList();
  }

  response(data: any): void {
    this.showCustomCard = false;
    if (data.resultList) {
      this.rows = data.resultList.list;
      this.totalItems = data.totalItems;
      this.cancelledPayments = data.dataModel.cancelledPayments;
      this.realizedPayments = data.dataModel.realiazedPayments;
      this.unRealizedPayments = data.dataModel.unRealiazedPayments;

    } else {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    }
    this.totalRowsCount = data.totalItems;
    this.pageCnt = data.totalPages;
    this.rows.forEach((e: any) => {
      e.classSection = e.classSection.replace(/(^,)|(,$)/g, '');
      e.paymentAmount = this.getFormattedCurrency(e.paymentAmount);
      e.balanceAmount = e.balanceAmount !== 0 ? this.getFormattedCurrency(e.balanceAmount) : e.balanceAmount;
      e.invoiceAccounted = e.invoiceAccounted !== 0 ? this.getFormattedCurrency(e.invoiceAccounted) : e.invoiceAccounted;
      e.paymentDate = (e.paymentDate == null) ? null : this.commonService.customDateFormat(e.paymentDate, this.getSchoolDateFormat()).date;
    });
    if (data) {
      this.paymentSearchViewModel.pageNumber = data.pageNumber;
    }
    this.tableSettings = {
      columns: this.columns,
      model: this.paymentSearchViewModel,
      rows: this.rows,
      tablename: 'Payments',
      componentName: this.currentComponent,
      isSelectRowRequired: false,
      visibleSelectAll: false,
      isPaginationRequired: true,
      totalRowsCount: this.totalItems,
      custRowsPerPageOptions: this.custRowsPerPageOptions,
      pageCnt: this.pageCnt,
      filtersList: data.filters
    };

    if (this.paymentSearchViewModel.studentId) {
      this.studentDetails.studentDetails(this.paymentSearchViewModel.studentId.id).subscribe(res => this.studentNameAutoInput.nativeElement.value
        = res.studentDetailsView.studentName);
      this.paymentSearchForm.controls['studentId'].setValue(this.paymentSearchViewModel.studentId);
    }
    this.scrollIntoView('app-table');
  }

  getSchoolAcademicSessions(): void {
    // const currentSchool = JSON.parse(localStorage.getItem('_s'));
    this.academicSessionService.getAcademicSessionsBySchoolId()
      .subscribe(
        response => {
          if (response.academicSessionDataView.length) {
            let setAcdademicSession = null;
            const newAcademicSessions = [];
            const completedAcademicSessions = [];
            this.schoolAcademicSession = [];
            response.academicSessionDataView.forEach(element => {
              if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE) {
                setAcdademicSession = element;
              } else if (element.statusCode === AppSettings.ACADEMICSESSION_NEW) {
                newAcademicSessions.push(element);
              }
              else {
                completedAcademicSessions.push(element);
              }
              this.schoolAcademicSession.push({
                value: element.id,
                label: element.displayName,
                code: element.statusCode
              });
            });
            setAcdademicSession = setAcdademicSession ?
              setAcdademicSession : newAcademicSessions.length ? newAcademicSessions[0] : completedAcademicSessions.length ? completedAcademicSessions[0] : null;
            if (!this.paymentSearchForm.controls['academicSessionId'].value) {
              this.paymentSearchForm.controls['academicSessionId'].setValue(setAcdademicSession.id);
            }
            if (this.paymentSearchForm.controls['academicSessionId'].value || this.paymentSearchViewModel.academicSessionId) {
              this.academicSessionChange(this.paymentSearchForm.controls['academicSessionId'].value);
            }
            //  this.initializeSearchViewModel();
          }
        });
  }

  academicSessionChange(acd: any): void {
    const data = acd.value ? acd.value : acd;
    this.paymentSearchForm.controls['boardId'].setValue(null);
    this.academicSessionId = data;
    this.paymentSearchViewModel.academicSessionId = data;
    this.paymentSearchForm.controls['academicSessionId'].setValue(data);
    this.classes = [];
    this.sections = [];
    this.feeTerms = [];
    this.schoolBoards = [];
    this.feetermService.getFeeTerms_1(data).subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.feeTerms.push({
            label: element.name,
            value: element.id
          });
        });
        if (this.paymentSearchViewModel.feeTermId) {
          this.paymentSearchForm.controls['feetermId'].setValue(this.paymentSearchViewModel.feeTermId === null ? undefined : this.paymentSearchViewModel.feeTermId);
        }
      }
    }, error => {
      this.errorResponse(error);
    });

    this.classService.boardsBasedOnAcademicSession(data).subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.schoolBoards.push({
            label: element.name,
            value: element.id
          });
        });

        if ((this.paymentSearchViewModel.boardId != null || this.paymentSearchViewModel.boardId !== 0) && !acd.value) {
          this.paymentSearchForm.controls['boardId'].setValue(this.paymentSearchViewModel.boardId);
          this.boardChange(this.paymentSearchViewModel.boardId, this.paymentSearchForm.controls.academicSessionId.value);
        }

        // if (this.paymentSearchForm.controls['classId']) {
        //   this.boardChange(this.paymentSearchForm.controls.boardId, this.paymentSearchForm.controls.academicSessionId.value);
        // }
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  boardChange(data: any, academicSessionId: any): void {
    this.classes = [];
    this.sections = [];
    // if (this.paymentSearchForm.controls['classId']) {
    //   this.paymentSearchViewModel.classId = this.paymentSearchForm.controls['classId'].value;
    // }
    // if (isDropdownChange){
    // }

    if (data === undefined) {
      return;
    }
    const boardId = data.value ? data.value : data;

    this.paymentSearchForm.controls['classId'].setValue(null);
    // this.paymentSearchForm.controls['boardId'].setValue(data.value);
    // this.paymentSearchViewModel.boardId = data.value;
    this.classService.classesBasedOnAcademicSession(academicSessionId, boardId).subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.classes.push({
            label: element.name,
            value: element.id
          });
        });

        if ((this.paymentSearchViewModel.classId !== 0 || this.paymentSearchViewModel.classId !== null) && !data.value) {
          this.paymentSearchForm.controls['classId'].setValue(this.paymentSearchViewModel.classId);
          this.ClassChange(this.paymentSearchViewModel.classId, this.paymentSearchForm.controls['academicSessionId'].value, this.paymentSearchViewModel.boardId);
        }

        // if (this.paymentSearchForm.controls['sectionId']) {
        //   this.ClassChange(this.paymentSearchViewModel.classId, this.paymentSearchForm.controls['academicSessionId'].value, this.paymentSearchViewModel.boardId);
        // }

      }
    }, error => {
      this.errorResponse(error);
    });
  }

  ClassChange(data: any, academicSessionId: any, schoolBoardId: any): void {
    this.sections = [];
    // if (this.paymentSearchForm.controls['sectionId']) {
    //   this.paymentSearchViewModel.sectionId = this.paymentSearchForm.controls['sectionId'].value;
    // }
    this.paymentSearchForm.controls['sectionId'].setValue(null);
    const input = (data && data.value) ? data.value : data;
    // this.paymentSearchForm.controls['sectionId'].setValue(null);
    this.classService.sectionsBasedOnAcademicSession(academicSessionId, schoolBoardId, input).subscribe(res => {
      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.sections.push({
            label: element.name,
            value: element.id
          });
        });

        if ((this.paymentSearchViewModel.sectionId !== 0 || this.paymentSearchViewModel.sectionId !== null) && !data.value) {
          this.paymentSearchForm.controls['sectionId'].setValue(this.paymentSearchViewModel.sectionId);
        }
      }
    }, error => {
      this.errorResponse(error);
    });

  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  paymentStatuses(): void {
    this.paymentStatus = [];
    this.statusService.paymentStatuses(AppSettings.PAYMENT_STATUS_CATEGORY_CODE).subscribe(res => {
      if (res.listViews && res.listViews.length) {
        res.listViews.forEach(element => {
          this.paymentStatus.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });


  }

  getSelectedStudent(value: any): void {
    if (value.id !== undefined) {
      this.paymentSearchForm.controls['studentId'].setValue(value);
      this.paymentSearchViewModel.studentId = value.id;
      this.studentId = value.id;
      this.studentNameAutoInput.nativeElement.value = value.studentName;
    }
  }

  onClear(): void {
    this.paymentSearchForm.reset();
    this.initializeSearchViewModel();
    this.initializeTableSettings();
    this.totalItems = 0;
    this.unRealizedPayments = 0;
    this.realizedPayments = 0;
    this.cancelledPayments = 0;
    this.setModelDataTableComponent(this.currentComponent, {});
    this.rows = [];
    this.classes = [];
    this.sections = [];
    this.schoolBoards = [];
    this.showCustomCard = true;
    this.studentId = null;
    this.feeTerms = [];
  }

  onRowActions(paymentData: any): void {
    this.router.navigate([FeeModuleConfig._Payment_Details_App_Routing + paymentData.clickedRow.paymentId]);
  }

  onClickNewpayment(): void {
    if (this.paymentSearchForm.controls.academicSessionId.valid) {
      this.updateFilterViewModel();
      this.setModelDataTableComponent(this.currentComponent, this.paymentSearchViewModel);
      this.router.navigate([RouteConfig.Add_Payment]);
    } else {
      this.openSnackBar('You need to select academic session to proceed', true);
    }
  }
}
