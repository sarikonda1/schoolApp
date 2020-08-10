import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import {PaypalService} from '../../../service/payment-gateway/paypal.service';
import {CommonComponent} from '../../common/common.component';
import {ExternalLibraryService} from '../utils';
import {PaypalUpdatePaymentViewModel} from '../../../models/payment-gateway/paypal-update-payment-view-model';

@Component({
    selector: 'af-paypal',
    templateUrl: './af-paypal.component.html',
    providers: [PaypalService]
})
export class AfPaypalComponent extends CommonComponent implements OnInit {

    public payPalConfig?: IPayPalConfig;
    @Input() configuration: any;
    showSuccess: boolean;
    clientId: string;
    currency: string;
    paypalUpdatePaymentView: PaypalUpdatePaymentViewModel;
    @Output() updateInvoices: EventEmitter<any> = new EventEmitter<any>();
    @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private paypalService: PaypalService,
        private externalLibraryService: ExternalLibraryService,
    ) {
        super();
    }
    ngOnInit(): void {
        this.getPaypalSettings();
    }

    private initConfig(): void {
        // this.payPalConfig = this.configuration;
        /*this.externalLibraryService
            .lazyLoadLibrary('https://www.paypal.com/sdk/js?client-id='+this.clientId)
            .subscribe();*/
        this.payPalConfig = {
            currency: this.currency,
            clientId: this.clientId,
            // createOrderOnClient: (data) => <ICreateOrderRequest>this.configuration,
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            createOrderOnServer: (data) =>   this.createOrder(),
            onApprove: (data, actions) => {
              //  console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                   // console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                // console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                this.updatePayment(data);
                this.updateInvoices.emit();
                this.showSuccess = true;
            },

            onCancel: (data, actions) => {
                this.closeDialog.emit();
                // console.log('OnCancel', data, actions);
            },
            onError: err => {
                this.closeDialog.emit();
                // console.log('OnError', err);
            },
            onClick: (data, actions) => {
                // console.log('onClick', data, actions);
            },
        };
    }

    createOrder(): any {
       return this.paypalService.createOrder(this.configuration).toPromise()
           .then(function(response): any {
               return response.id;
           });
    }

    updatePayment(data: any): any {
        this.paypalUpdatePaymentView = {id: data.id};
        this.paypalService.updatePayment(this.paypalUpdatePaymentView).subscribe(response =>
            res => this.updatePaymentSuccess(res),
                error => this.updatePaymentError(error)
        );
    }

    updatePaymentSuccess(response: any): void {
        this.updateInvoices.emit();
    }

    updatePaymentError(error: any): void  {
        this.updateInvoices.emit();
    }


    getPaypalSettings(): void {
        this.paypalService.schoolServiceConfigsByCode('Paypal').subscribe(res =>
            this.configSettings(res));
    }

    configSettings(result: any): void {
        this.clientId = result.serviceSettings.client_id;
        this.currency = result.currency;
        this.initConfig();
    }
}
