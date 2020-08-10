import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {CommonComponent} from '../../../shared/common/common.component';
import {LOCALE_ID} from '@angular/core';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { AppSettings } from 'app/app.constants';
import { FeeModuleConfig } from 'app/url.config';
import { Router } from '@angular/router';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import {RazorpayViewModel} from '../../../shared/payment-gateway/razorpay/config';
import {OAuthService} from 'angular-oauth2-oidc';
import {MatDialog} from '@angular/material';
import {ServiceConfigurationService} from '../../../service/communication/serviceConfiguration.service';
import { OnlinePaymentService } from 'app/service/online-payments/online-payment.service';
import { PayemtGatewayOptionsComponent } from 'app/shared/payment-gateway/payemt-gateway-options/payemt-gateway-options.component';
import {PaypalViewModel} from '../../../shared/payment-gateway/paypal/config';

@Component({
    selector: 'student-fee',
    templateUrl: './student-fee.component.html',
    styleUrls: ['./student-fee.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [StudentDBService, StoreService, ServiceConfigurationService, OnlinePaymentService]
})
export class StudentFeeComponent extends CommonComponent implements OnInit {
    feeList: any;
    actions: any;
    invoiceData: any[] = [];  
    invoiceList: any[] = [];
    onLoadApi: boolean;
    payOnline: string;
    currentInvoice: any;
    currency = 'INR';
    @ViewChild('availablePaymentMethods') availablePaymentMethods;
    razorpayViewModel: RazorpayViewModel;
    paypalViewModel: PaypalViewModel;
    isSchoolhasActiveServices = false;
    constructor(@Inject(LOCALE_ID) public locale: string,
                private studentDbService: StudentDBService,
                private router: Router,
                public storeService: StoreService,
                public sanitizer: DomSanitizer,
                private oauthService: OAuthService,
                public dialog: MatDialog,
                public serviceConfigurationService: ServiceConfigurationService,
                public changeDetector: ChangeDetectorRef, public onlinePaymentService: OnlinePaymentService) {
        super();
    }

    ngOnInit(): void {
        this.razorpayViewModel = {
            email: '',
            invoiceNumber: '',
            currency: '',
            receipt: '',
            mobilenumber: null,
            amount: null
        };
        this.paypalViewModel = {
            intent: '',
            purchase_units: []
        };
        this.actions = [
            AppSettings.VIEW_DETAILS,
            AppSettings.DOWNLOAD_INVOICE,
            AppSettings.PAY_ONLINE
        ];
        this.payOnline = AppSettings.PAY_ONLINE;
        this.getActiveServices();
        this.getInvoices();
    }
    getActiveServices(): void{
        this.onlinePaymentService.activeSchoolServices(null, 'Online')
        .subscribe(res => this.setActivesServices(res), error => this.errorResponse(error));
    }
    setActivesServices(res): void{
        if (res.resultModelList && res.resultModelList.length){
            this.isSchoolhasActiveServices = true;
        }
    }
    getInvoices(): void {
        this.studentDbService.studentInvoices().subscribe((res: any) => this.invoiceResult(res), error => {
          this.errorResponse(error);
        });
    }
    invoiceResult(data: any): void { 
        this.feeList = [];
        if (data.resultList && data.resultList.list && data.resultList.list.length){
            this.currency = data.currencyView.code;
            this.invoiceData = data.resultList.list;
            this.invoiceList =  data.resultList.list;
            data.resultList.list.sort((a, b) => a.status === AppSettings.PENDING ? -1 : b.status === AppSettings.COMPLETED ? 1 : 0);      
            data.resultList.list.map(element => { 
                const formatedValues = this.formatedInvoiceData(element);
                this.feeList.push({ data: formatedValues, keyValues: this.getKeyValuesOfObject(formatedValues) });
            });
        } 
        this.onLoadApi = true;
        this.changeDetector.detectChanges();
    }
    formatedInvoiceData(invoice): any{
        return {
            invoiceNumber: invoice.invoiceNumber,
            issueDate: this.getFormattedDateBySchoolDateFormat(invoice.issueDate),
            dueDate: this.getFormattedDateBySchoolDateFormat(invoice.dueDate),
            status: invoice.status,
            invoiceAmount: invoice.invoiceAmount,
            paidAmount: invoice.realizedAmount,
            // balanceAmount: invoice.balanceAmount,
            dueAmount: invoice.dueAmount,
            feeTerm: invoice.feeTerm
        };
    }
    onSelectAction(action, index): void{
        switch (action){
            case AppSettings.VIEW_DETAILS:
                this.router.navigate([FeeModuleConfig._Student_Invoice_Details + this.invoiceList[index].id]);
                break;
            case AppSettings.DOWNLOAD_INVOICE:
                this.downloadDoc(index);
                break;
            case AppSettings.PAY_ONLINE:  
               const dialogRef =  this.dialog.open(PayemtGatewayOptionsComponent, {
                    disableClose: true,
                    width: '650px',
                    panelClass: 'payment-model',
                    data: { 
                      id: this.invoiceList[index].id,
                      razorpayViewModel: this.updatePaymentInformation(this.invoiceList[index], 'razorpay'),
                      paypalViewModel: this.updatePaymentInformation(this.invoiceList[index], 'paypal')
                    },
                  }); 
                  dialogRef.afterClosed().subscribe(value => {  
                    if (value){
                        this.updateInvoices();
                    }
                  }); 
                break;
        }
    }
    async downloadDoc(index): Promise<any> { 
                this.sanitizer.bypassSecurityTrustResourceUrl(this.storeService.getFilePath(this.invoiceList[index].attachmentName));
                const response = await fetch(this.storeService.getFilePath(this.invoiceList[index].attachmentName));
                const responseData = await response.blob();
                const data = new Blob([responseData], { type: 'application/octet-stream' });
                const url = window.URL.createObjectURL(data);
                window.open(url); 
    }

    updatePaymentInformation(invoice: any, paymentMethod: string): any {
        this.currentInvoice = invoice;
        const claims: any = this.oauthService.getIdentityClaims();
        let returnViewModel: any;
        switch (paymentMethod) {
            case 'razorpay':
                if (claims) {
                    this.razorpayViewModel.email = claims.email;
                }
                this.razorpayViewModel.amount = invoice.dueAmount;
                invoice.mobileNumber = invoice.mobileNumber.replace(/\s/g, '');
                this.razorpayViewModel.mobilenumber = invoice.mobileNumber;
                this.razorpayViewModel.currency = this.currency;
                this.razorpayViewModel.invoiceNumber = invoice.invoiceNumber;
                this.razorpayViewModel.receipt =  invoice.invoiceNumber;
                returnViewModel = this.razorpayViewModel;
                break;
            case 'paypal':
                this.paypalViewModel.intent = 'CAPTURE';
                this.paypalViewModel.invoiceNumber = invoice.invoiceNumber;
                this.paypalViewModel.purchase_units = [{
                    amount: {
                        currency_code: this.currency,
                        value: invoice.dueAmount
                    }
                }];
                this.paypalViewModel.payer = {
                        email_address: claims.email
                    };
                returnViewModel = this.paypalViewModel;
                break;
        }

        return returnViewModel;
    }

    updateInvoices(): void {
        this.onLoadApi = false;
        this.getInvoices();
     }

    displayButton(action: string, invoice: any, invoiceIndex: any): boolean {  
        if (action === AppSettings.DOWNLOAD_INVOICE && !this.invoiceList[invoiceIndex].attachmentName){
            return false;
        }else if (action !== this.payOnline) {
            return true;
        }

        return invoice.dueAmount > 0 && this.isSchoolhasActiveServices;
    }

    getItemValue(item: any): any {
        let itemValue = '';
        switch (item.Label) {
            case 'invoiceAmount':
            case 'paidAmount':
            case 'dueAmount':
                itemValue = this.getFormattedCurrency(item.Value);
                break;
            default:
                itemValue = item.Value || item.Value === 0 ? item.Value : '--';
        }
        return itemValue;
    }
}


