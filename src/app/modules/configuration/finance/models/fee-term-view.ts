export interface SearchFeeTermsView {
    
    shortName?: string;
    displayName?: string;
    code?: string;
    description?: string;
    sortBy?: string;
    sortOrder?: number;
    startDate?: Date | string;
    startDateBegin?: Date | string;
    startDateEnd?: Date | string;
    endDate?: Date | string;
    endDateBegin?: Date | string;
    endDateEnd?: Date | string;
    invoiceGenerationDate?: Date | string;
    invoiceGenerationDateBegin?: Date | string;
    invoiceGenerationDateEnd?: Date | string;
    invoiceIssueDate?: Date | string;
    invoiceIssueDateBegin?: Date | string;
    invoiceIssueDateEnd?: Date | string;
    invoiceDueDate?: Date | string;
    invoiceDueDateBegin?: Date | string;
    invoiceDueDateEnd?: Date | string;
    pageNumber?: number;
    pageSize?: number;
    invoiceGenerationOptionTypeId?: number;
}
