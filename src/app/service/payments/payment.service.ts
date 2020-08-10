import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BaseUrlConfig, ModuleConfig, FeeModuleConfig, BaseModuleConfig } from 'app/url.config';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { CommonComponent } from 'app/shared/common/common.component';
import { PaymentStatusViewModel } from 'app/modules/finance/payments/models/payment-details-view';



@Injectable()
export class PaymentService {
    
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Fee;
    protected basePathForReport = BaseUrlConfig.BasePath + ModuleConfig.Base;

    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,
        private commonComponent: CommonComponent) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paymentDetailsById(id?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public paymentDetailsById(id?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public paymentDetailsById(id?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public paymentDetailsById(id?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(id, 'Id', queryParameters);

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${BaseUrlConfig.BasePath + ModuleConfig.Base}` + FeeModuleConfig._Payment_Details_By_Id,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
     * Get all FeeAccountsDetails by SubSystemId (schoolId)
     * 
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param academicSessionId Gets Or Sets AcademicSessionId
     * @param feeTermId Gets Or Sets FeeTermId
     * @param boardId Gets Or Sets BoardId
     * @param classId Gets Or Sets ClassId
     * @param sectionId Gets Or Sets SectionId
     * @param studentId Gets Or Sets BoardId
     * @param invoiceNo Gets Or Sets InvoiceNo
     * @param receiptNo Gets Or Sets ReceiptNo
     * @param paymentStatusId Gets Or Sets PaymentStatusId
     * @param admissionNo Gets Or Sets AdmissionNo
     * @param paymentDateBegin Gets or Sets of PaymentDateBegin
     * @param paymentDateEnd Gets or Sets of PaymentDateEnd
     * @param paymentType Gets Or Sets PaymentType
     * @param feeAccount Gets Or Sets FeeAccount
     * @param paymentAmount Gets Or Sets PaymentAmount
     * @param invoiceAccounted Gets Or Sets InvoiceAccounted
     * @param balanceAmount Gets Or Sets BalanceAmount
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPayments(sortBy?: string, sortOrder?: 0 | 1 | -1, academicSessionId?: number, feeTermId?: number,
        boardId?: number, classId?: number, sectionId?: number, studentId?: string, invoiceNo?: string,
        receiptNo?: string, paymentStatusId?: number, admissionNo?: Array<string>, paymentDateBegin?: Date,
        paymentDateEnd?: Date, paymentType?: Array<string>, feeAccount?: Array<string>, paymentAmount?: Array<string>,
        invoiceAccounted?: Array<string>, balanceAmount?: Array<string>, pageNumber?: number, pageSize?: number,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(academicSessionId, 'AcademicSessionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTermId, 'FeeTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(boardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentId, 'StudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(invoiceNo, 'InvoiceNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(receiptNo, 'ReceiptNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentStatusId, 'PaymentStatusId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentStatusId, 'PaymentStatusId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNo, 'AdmissionNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentDateBegin, 'PaymentDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentDateEnd, 'PaymentDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentType, 'PaymentType', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeAccount, 'FeeAccount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(paymentAmount, 'PaymentAmount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(invoiceAccounted, 'InvoiceAccounted', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(balanceAmount, 'BalanceAmount', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${BaseUrlConfig.BasePath + ModuleConfig.Base}` + BaseModuleConfig._Payments_Payment_List,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update Check or DD type payment status and settle invoices
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePaymentStatus(model?: PaymentStatusViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updatePaymentStatus(model?: PaymentStatusViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updatePaymentStatus(model?: PaymentStatusViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updatePaymentStatus(model?: PaymentStatusViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}` + FeeModuleConfig._Update_Payment,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Payment details by id
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPaymentDetail(id?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getPaymentDetail(id?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getPaymentDetail(id?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getPaymentDetail(id?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._Payment_Details,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
/**
     * Print the Report for selected Grading Term
     * 
     * @param id 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportPrint(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public reportPrint(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public reportPrint(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public reportPrint(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling reportPrint.');
        } 

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders; 

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePathForReport}` + FeeModuleConfig._Report_Card_View,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    } 
}

