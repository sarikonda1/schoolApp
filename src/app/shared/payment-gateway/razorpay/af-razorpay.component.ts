import {Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, NgZone} from '@angular/core';
import { ExternalLibraryService } from '../utils';
import { RazorpayService } from '../../../service/payment-gateway/razorpay.service';
import {razorpayConfig, RazorpayViewModel} from '../../payment-gateway/razorpay/config';
import {RazorpayUpdatePaymentViewModel} from '../../../models/payment-gateway/razorpay-update-payment-view-model';
import {fuseAnimations} from '../../../../@fuse/animations';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CommonComponent} from '../../common/common.component';
@Component({
    selector: 'af-razorpay',
    templateUrl: './af-razorpay.component.html',
    styleUrls: ['./af-razorpay.component.scss'],
    providers: [RazorpayService],
    animations: fuseAnimations
})
export class AfRazorpayComponent extends CommonComponent implements OnInit {

    serviceSettings: Array<any> = [];
    razorpayConfiguration = razorpayConfig;
    updatePaymentView: RazorpayUpdatePaymentViewModel;
    response;
    windowRef: any;
    @Input() configuration: RazorpayViewModel;
    @Input() disabled: boolean;
    @Output() updateInvoices: EventEmitter<any> = new EventEmitter<any>();
    @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private externalLibraryService: ExternalLibraryService,
        private changeDetectorRef: ChangeDetectorRef,
        private razorpayService: RazorpayService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        public zone: NgZone
    ) {
        super();
        this.windowRef = this.externalLibraryService.WindowRef;
    }
    ngOnInit(): void {
        this.getServiceSettings();
        this.externalLibraryService
            .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
            .subscribe();
    }



    pay(): void {
            this.razorpayConfiguration.prefill.email = this.configuration.email;
            this.razorpayConfiguration.amount = this.configuration.amount * 100;
            this.razorpayConfiguration.notes.merchant_order_id = this.configuration.invoiceNumber;
            this.razorpayConfiguration.prefill.contact = this.configuration.mobilenumber ? this.configuration.mobilenumber.toString() : null;

            // binding this object to both success and dismiss handler
            const createOrderView = {
                amount: this.razorpayConfiguration.amount,
                currency: this.configuration.currency,
                receipt: this.configuration.receipt,
                payment_capture: true,
                invoiceNumber: this.configuration.invoiceNumber,
                notes: {
                    merchant_order_id: this.razorpayConfiguration.notes.merchant_order_id,
                    handling_charges: this.configuration['notes'].handling_charges,
                    final_tax_amount: this.configuration['notes'].final_tax_amount 
                },
            };
            this.razorpayConfiguration['order_id'] = '';
            this.razorpayService.createOrder(createOrderView).subscribe(
                response => {
                    const that = this;
                    this.zone.run(() => {
                        if (response.externalPaymentReconView !== null) {
                            const externalPaymentReconView = response.externalPaymentReconView;
                            that.razorpayConfiguration['order_id'] = externalPaymentReconView.transactionId;
                            that.razorpayConfiguration.notes.merchant_order_id = externalPaymentReconView.invoiceMasterId
                                + '_' + externalPaymentReconView.invoiceNumber;
                                that.razorpayConfiguration.receipt = that.razorpayConfiguration.notes.merchant_order_id;
                                that.razorpayConfiguration.notes.handling_charges = that.configuration['notes'].handling_charges;
                                that.razorpayConfiguration.notes.final_tax_amount = that.configuration['notes'].final_tax_amount;
                        }
                        that.razorpayConfiguration['handler'] = that.razorPaySuccessHandler.bind(that);
                        // this.razorpayConfiguration['onpaymenterror'] = this.razorPayErrorHandler.bind(this);
                        that.razorpayConfiguration['modal']['ondismiss'] = that.razorPayOnDismiss.bind(that);
                        const razorpay = new that.windowRef.Razorpay(that.razorpayConfiguration);
                        // tslint:disable-next-line:typedef
                        razorpay.open();
                    });

                },
                error => {
                    this.openSnackBar('Something went wrong, Please try again later', true);
                }
            );

    }

    razorPayOnDismiss(): void {
         this.closeDialog.emit();
    }



    razorPaySuccessHandler(response): void {
        if (response.razorpay_payment_id) {
            this.openSnackBar('Your payment has been processed successfully');

        }
        else {
            this.openSnackBar('Something went wrong, Please try again later', true);
            return;
        }
        this.updatePaymentView = {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
        };

        this.razorpayService.updatePayment(this.updatePaymentView).subscribe(
            res => this.updatePaymentSuccess(res),
            error => this.updatePaymentError(error)
        );
    }

    getServiceSettings(): void {
        this.razorpayService.schoolServiceConfigsByCode('RazorPay').subscribe(res =>
            this.configSettings(res));
    }

    updatePaymentSuccess(response: any): void {
        this.updateInvoices.emit();
    }

    updatePaymentError(error: any): void  {
        this.updateInvoices.emit();
    }




    configSettings(result: any): void {
        this.razorpayConfiguration.key = result.serviceSettings.key_id;
        this.razorpayConfiguration.name = result.serviceSettings.display_name;
        this.razorpayConfiguration.theme.color = result.serviceSettings.theme_color;
    }
}
