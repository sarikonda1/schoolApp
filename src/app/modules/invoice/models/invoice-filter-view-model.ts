import { SortOrder } from 'app/models/sort-order';
import { PagingParams } from 'app/models/paging-params';

  /**InvoiceFilterView */
    export interface InvoiceFilterView extends PagingParams {

        /**Gets or Sets StudentIds */
        studentIds: string[];

        /**Gets or Sets SortBy */
        schoolAcademicSessionId: number;

        /**Gets or Sets FeeTermIds Encrypted Values */
        feeTerms: string[];

        /**Gets or Sets FeeTermIds Encrypted Values */
        board: number[];

        /**Gets or Sets StudentName */
        studentName: string[];

        /**Gets or Sets ClassIds Encrypted Values */
        classes: number[];

        /**Gets or Sets SectionIds Encrypted Values */
        sections: number[];
        /**Gets or Sets InvoiceNumber */
        invoiceNumber: string[];

        /**Gets or Sets ReceiptNumber */
        receiptNumber: string[];

        /**Gets or Sets ReceiptNumber */
        feeType: number[] | null;
        /**Gets or sets of InvoiceDateBegin */
        invoiceDateBegin: Date | string | null;
        /**Gets or sets of InvoiceDateEnd */
        invoiceDateEnd: Date | string | null;
        /**Gets or sets of IssueDateBegin */
        issueDateBegin: Date | string | null;
        /**Gets or sets of IssueDateEnd */
        issueDateEnd: Date | string | null;
        /**Gets or sets of DueDateBegin */
        dueDateBegin: Date | string | null;
        /**Gets or sets of DueDateEnd */
        dueDateEnd: Date | string | null;

        /**Gets or Sets InvoiceAmount */
        invoiceAmount: string[];

        /**Gets or Sets Adjustments */
        adjustmentAmount: string[];

        /**Gets or Sets DueAmount */
        dueAmount: string[];

        /**Gets or Sets PenaltyAmount */
        penaltyAmount: string[];

        /**Gets or Sets RealizedAmount */
        realizedAmount: string[];

        /**Gets or Sets BalanceAmount */
        balanceAmount: string[];

        /**Gets or Sets StatusIds Encrypted Values */
        invoiceStatus: string[];

        /**Gets or Sets SortOrder */
        sortOrder: SortOrder;

        /**Gets or Sets SortBy */
        sortBy: string;

        isCancel: boolean;

    }
