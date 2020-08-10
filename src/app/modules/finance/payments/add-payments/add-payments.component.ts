import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import * as HttpStatus from 'http-status-codes';
import { PaymentViewModel } from 'app/models/invoice/payment-view-model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PaymentCorrectionService } from 'app/service/payments/payment-correction.service';
import { Subscription } from 'rxjs';
import { FeeModuleConfig } from 'app/url.config';
import { LeaveRequestService } from 'app/service/academic-service/api/leave-request.service';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { CommonService } from 'app/service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.scss'],
  providers: [StudentDBService, InvoiceService, FeeTypeService]
})
export class AddPaymentsComponent extends CommonComponent implements OnInit {
  filterdStudents: Array<any> = [];
  paymentForm: FormGroup;
  studentDetails: any = [];
  paymentView: boolean;
  studentData: any;
  paymentViewModel: PaymentViewModel;
  notFound: boolean;
  responseSubscription: Subscription;
  invoiceIds: any = [];
  searchStudent = true;
  studentId: any;
  isBackButtonRequired: boolean;
  academicSessionId: number;
  clearSubscription: Subscription;
  componentName = 'PaymentsComponent';
  constructor(
      private studentDbService: StudentDBService, 
      private router: Router,
      private invoiceService: InvoiceService, 
      public dialog: MatDialog, 
      private paymentCorrectionService: PaymentCorrectionService, 
      private route: ActivatedRoute,
      private cd: ChangeDetectorRef, 
      private studentService: StudentDatabaseService, 
      public commonService: CommonService, 
      public snackBar: MatSnackBar, public location: Location) {
    super();
    this.clearSubscription = this.commonService.isCorrectionClear().subscribe(res => {
      if (!res.isClear) {
      this.paymentView = res.isClear;
      this.initializeForm();
      }
      });
  }

  ngOnInit(): void {
    this.filterdStudents = [];
    this.invoiceIds = [];
    this.initializeForm();
    this.searchStudent = true;
    this.route.params.subscribe((params) => {
      if (params.invoiceId && params.studentId) {
        this.invoiceIds.push(params.invoiceId);
        this.studentId = params.studentId;
        this.searchStudent = false;
        this.isBackButtonRequired = true;
        this.getSelectedStudent(this.studentId);
      }
      else {
        const data = this.getModelComponent(this.componentName);
        if (data.academicSessionId){
          this.academicSessionId = data.academicSessionId;
        } else{
          this.router.navigate([FeeModuleConfig._Payments]);
        }
      }
    });
  }

  initializeForm(): void {
    this.paymentForm = new FormGroup({
      studentName: new FormControl(''),
    });
    this.paymentForm.valueChanges.debounceTime(200).subscribe(form => {
      form.studentName = typeof(form.studentName) === 'string' ? form.studentName.trim() : form.studentName;
      if (form.studentName !== null && form.studentName.length >= 3) {
        if (this.paymentForm.valid && typeof this.paymentForm.value.studentName !== 'object') {
          this.studentService.studentNamesBaseOnAcademicSession(this.academicSessionId, null, null, null, this.paymentForm.value.studentName).
            subscribe(res => {
              if (res.studentsList.length > 0) {
                this.notFound = false;
                this.paymentView = false;
                this.filterdStudents = res.studentsList;
              }
              else {
                this.studentDetails = [];
                this.filterdStudents = [];
                this.paymentView = false;
                this.notFound = true;
              }
              this.cd.detectChanges();
            }, error => {
              this.errorResponse(error);
            });
        }
      } else {
        this.filterdStudents = [];
        this.notFound = false;
        this.paymentView = false;
      }
    });
  }

  getSelectedStudent(value: any): void {
    this.studentDetails = [];
    this.studentData = value;
    this.studentDbService.studentDetails(this.studentData).subscribe(data => {
      if (data != null) {
        this.notFound = false;
        data.resultModel.dateOfBirth = this.getFormattedDateBySchoolDateFormat(data.resultModel.dateOfBirth);
        this.studentDetails = this.getKeyValuesOfObject(data.resultModel);
        this.paymentView = true;
      }
    },
      error => {
        this.errorResponse(error);
      });
  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  savePayment(paymentForm: any): void {
    paymentForm.studentId = this.studentData;
    paymentForm.invoiceIds = this.invoiceIds;
    paymentForm.schoolAcademicSessionId = this.academicSessionId;
    this.paymentViewModel = paymentForm;
    this.invoiceService.createPayment(this.paymentViewModel).subscribe(data => { 
      this.openSnackBar(data.messages.ResultMessage);
      this.dialog.closeAll();
    },
    error => {
      this.errorResponse(error);
    });
    this.paymentCorrectionService.setCorrectionResponse(true);
  }

  backButtonClick(): void {
    this.back();
  }
}

