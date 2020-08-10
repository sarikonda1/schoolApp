import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { CommonComponent } from 'app/shared/common/common.component';
import { fuseAnimations } from '@fuse/animations';
import { MatSnackBar } from '@angular/material';
import { error } from 'util';

@Component({
    selector: 'app-fee',
    templateUrl: './fee.component.html',
    styleUrls: ['./fee.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [DashBoardService]
})
export class FeeComponent extends CommonComponent implements OnInit {
    feeData: any = {};
    feeWidget: { scheme: { domain: string[]; }; labels: boolean; doughnut: boolean; maxLabelLength: number; };
    isLoading = true;
    animations = false;
    constructor(private dashBoardService: DashBoardService, public snackBar: MatSnackBar, public cd: ChangeDetectorRef) {
        super();
        this.feeWidget = {
            scheme: {
                domain: ['#89a9f4', '#4867d2']
            },
            labels: true,
            doughnut: true,
            maxLabelLength: 20,
        };

    }


    ngOnInit(): void {
        this.feeData = {
            mainChart: [
                {
                    name: 'Realized Amount',
                    value: 0,
                },
                {
                    name: 'Pending Amount',
                    value: 0
                }
            ],
            noDataFound: true
        };
        if (this.getTokenParam('_as')){
           this.getFeeInvoices();
        }
    }

    getFeeInvoices(): void {

        this.dashBoardService.getFeeInvoices()
            .subscribe(res => {
                this.setDetails(res);
            }, () => {
                this.isLoading = false;
                this.cd.detectChanges();
            }
            );
    }
    setDetails(response: any): void {
        const currency = this.getSchoolCurrency();
        if (response.feeInvoiceData !== null && response.feeInvoiceData !== undefined) {
            this.feeData = {
                mainChart: [
                    {
                        name: 'Realized Amount',
                        value: +response.feeInvoiceData.realizedAmount.replace(currency, ''),
                    },
                    {
                        name: 'Pending Amount',
                        value: +response.feeInvoiceData.pendingAmount.replace(currency, '')
                    }
                ],
                noDataFound: false
            };
        }
        this.isLoading = false;
        this.disableAnimations();
        this.cd.detectChanges();
    }

    valueFormatting(value: number): string {
        const currency = localStorage.getItem('_c');
        return `${currency} ${Math.round(value).toLocaleString()}`;
    }



    public percentageFormatting(c): any {
        return c.toFixed(2);
    }

    public disableAnimations(): any{
        this.animations = true;
        setTimeout(() => {
            this.animations = false;
        }, 1000);
    }
}
