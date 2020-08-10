import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeeTypeService } from 'app/service/configuration/finance/api/fee-type.service';
import { InvoiceCriteriaViewModel } from 'app/models/invoice/invoice-criteria-view-model';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { InvoiceService } from 'app/service/invoice/invoice.service';
import { CommonService } from 'app/service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent extends CommonComponent implements OnInit {
  generateInvoiceFormGroup: FormGroup;
  @ViewChild('invoiceForm') invoiceFrom;
  boardId: number;
  schoolBoardsList: Array<any> = [];
  feeTermsList: Array<any> = [];
  isSchoolBoard: boolean;
  classDisabled: boolean;
  sectionShow: boolean;
  // variables declarations
  classNames: Array<any> = [];
  sectionNames: Array<any> = [];
  classId: number;
  sectionId: number;
  sectionDisabled: boolean;
  doValidate = true;
  httpStatus: any;
  resultData: Array<any> = [];
  constructor(public commonService: CommonService, private _invoiceService: InvoiceService,
    private feeTypeService: FeeTypeService,
    public dialog: MatDialog, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.httpStatus = require('http-status-codes');
    this.generateInvoiceFormGroup = new FormGroup({
      feeTermId: new FormControl('', [Validators.required]),
      boardId: new FormControl(''),
      classId: new FormControl(''),
      sectionId: new FormControl(''),
    });
    this.getFeeTerms();
    if (this.getTokenParam('_as')) {
      this.getAvailableSchoolBoards();
    }

  }

  onBoardSelect(event): void {
    if (event.value != null) {
      this.getAvailableClasses(event.value);
    }
    else {      
      this.availableClasses = [];
      this.availableSections = [];
      this.generateInvoiceFormGroup.patchValue({
        classIds: null,
        sectionIds: null
      });
    }
  }

  onClassChange(classId): void {
    if (classId != null) {
      this.generateInvoiceFormGroup.controls['sectionId'].setValue(null);
      this.getAvailableSections(this.generateInvoiceFormGroup.value.schoolBoardId, classId);
    }
    else {
      this.availableSections = [];
      this.generateInvoiceFormGroup.patchValue({
        sectionIds: null
      });
    }
  }

  onSectionChange(data: any): void {
    this.doValidate = true;
    if (data){
     this.sectionId = data.value;
    }
  }

  // getting feeTerms
  getFeeTerms(): void {
    this.feeTypeService.getFeeTerms().subscribe(
      response => {
        if (response.commonViewModel != null) {
          if (response.commonViewModel.length) {
            response.commonViewModel.forEach(element => {
              this.feeTermsList.push({
                label: element.name,
                value: element.id
              });
            });
          }
        }
      },
      error => {
        this.errorResponse(error);
      }
    );
  }

  // End

  submitForm(data: InvoiceCriteriaViewModel): void {
    if (this.generateInvoiceFormGroup.status === AppSettings.VALID) {
      this.generateInvoice(data);
    }
    else {
      this.doValidate = true;
    }
  }

  onClearClick(): void {
    this.generateInvoiceFormGroup.reset();
    this.invoiceFrom.resetForm();
    this.resultData = [];
  }

  generateInvoice(data: InvoiceCriteriaViewModel): void {
    this._invoiceService.generateInvoice(data).subscribe(res => {

      if (res !== null) {
        this.resultData = [];
        this.resultData.push(
          { label: AppSettings.OLD_INVOICES, value: res.existingInvoicesCount },
          { label: AppSettings.NEW_INVOICES, value: res.newInvoiceCount }
        );
      }

      if (res.statusCode === this.httpStatus.OK) {
        this.openSnackBar(res.messages.ResultMessage);
      } else {
        this.openSnackBar(res.messages.ResultMessage, true);
      }
    }, error => {
      this.errorResponse(error);
      this.resultData = [];
    });

  }
}
