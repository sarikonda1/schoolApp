import { ValidationMessageView } from 'app/models/validation-message-view';

export interface PaymentDataResultView extends ValidationMessageView {
    paymentDetails: PaymentDataView;
    studentDetails: StudentDataViewModel;
    invoices: Array<InvoiceView>;
    correctionPaymentDetails: PaymentDataView;
    paymentActions: Array<any>;
    paymentCorrectionActions:  Array<any>;
}



export interface PaymentDataView {
    id: string;
    paymentDate: string;
    paymentType: string;
    paymentTypeCode: string;
    paymentAmount: any;
    amountTowardsInvoices: any;
    excessAmount: any;
    paymentStatus: string;
    bankName: string;
    branchName: string;
    checkNumber: string;
    chequeDate: string;
    bankIfsc: string;
    receiptNumber: string;
    cardType: string;
    cardLastFourDigits: string;
    authorizationCode: string;
    transactionId: string;
    referenceNumber: string;
    feeAccount: string;
    lastUpdatedDate: string;
    processedBy: string;
    studentId: string;
    paymentStatusCode: string;
    realizedDate: string;
    attachmentName: string;
}

export class StudentDataViewModel {
    name: string;
    phoneNumber: string;
    admisionNumber: string;
    email: string;
    fatherName: string;
    motherName: string;
    dateOfBirth: string;
    gaurdianName: string;
}

export interface InvoiceView {
    invoicePaymentId: string;
    feeTerm: string;
    invoiceNumber: string;
    invoiceDate: string;
    issueDate: string;
    dueDate: string;
    invoiceAmount: number;
    adjustments: number;
    dueAmount: number;
    status: string;
    studentName: string;
    class: string;
    section: string;
    schoolAcademicSessionId: string;
    studentId: string;
}

export interface PaymentStatusViewModel{
     /**
     * Gets or Sets IsConfirm
     */
    isConfirm?: boolean;
    /**
     * Gets or Sets AdditionalInformation
     */
    additionalInformation?: string;
    /**
     * Gets or Sets ReferenceNumber
     */
    referenceNumber?: string;
    /**
     * Gets or Sets RealizedDate
     */
    realizedDate?: Date;
    /**
     * Gets or Sets IsConfirm
     */
    id?: string;
}
