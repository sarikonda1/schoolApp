/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { InvoiceFilterView } from 'app/modules/invoice/models/invoice-filter-view-model';


@Injectable()
export class StudentDBService {

    //  protected basePath = 'http://localhost:8013';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH)

    basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
    public canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * StudentDatabase filtered Students with their Statuses
     * 
     * @param studentNames Gets or Sets StudentNames
     * @param parentNames Gets or Sets ParentNames
     * @param admissionNumbers Gets or Sets AdmissionNumbers
     * @param classIds Gets or Sets ClassIds
     * @param statusIds Gets or Sets StatusIds
     * @param dateOfBirthBegin Gets or Sets FromDate for DateOfBirth
     * @param dateOfBirthEnd Gets or Sets ToDate for DateOfBirth
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy-\&quot;StudentName ParentName AdmissionNumber Class Status DOB\&quot;
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * 
     */
    public filteredStudents(studentId?: string, studentNames?: Array<string>, academicSessions?: Array<string>,
        parentNames?: Array<string>, admissionNumbers?: Array<string>, classIds?: Array<string>,
        statusIds?: Array<string>, dateOfBirthBegin?: Date | string,
        dateOfBirthEnd?: Date | string, sortOrder?: 0 | 1 | -1, sortBy?: string,
        pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public filteredStudents(studentId?: string, studentNames?: Array<string>, academicSessions?: Array<string>,
        parentNames?: Array<string>, admissionNumbers?: Array<string>, classIds?: Array<string>,
        statusIds?: Array<string>, dateOfBirthBegin?: Date | string, dateOfBirthEnd?: Date | string, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number,
        pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public filteredStudents(studentId?: string, studentNames?: Array<string>, academicSessions?: Array<string>,
        parentNames?: Array<string>, admissionNumbers?: Array<string>, classIds?: Array<string>,
        statusIds?: Array<string>, dateOfBirthBegin?: Date | string, dateOfBirthEnd?: Date | string, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number,
        pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public filteredStudents(studentId?: string, studentNames?: Array<string>, academicSessions?: Array<string>,
        parentNames?: Array<string>, admissionNumbers?: Array<string>, classIds?: Array<string>,
        statusIds?: Array<string>, dateOfBirthBegin?: Date | string, dateOfBirthEnd?: Date | string, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number,
        pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(studentId, 'StudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(academicSessions, 'AcademicSessions', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(parentNames, 'ParentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumbers, 'AdmissionNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(dateOfBirthBegin, 'DateOfBirthBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(dateOfBirthEnd, 'DateOfBirthEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._StudentDB_filtered_students,
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
     * TypeAhead or Autocomplete for Student Names Search
     * 
     * @param name Gets or Sets NameViewModel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentNames(name?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentNames(name?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentNames(name?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentNames(name?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._StudentDB_studentNames,
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
     * Fetch students by Class/Section/Board -Only active students
     *    
     * @param studentNames Gets or Sets StudentNames
     * @param classIds Gets or Sets ClassIds
     * @param sectionIds Gets or Sets SectionIds
     * @param boardIds Gets or Sets BoardIds
     * @param routeTypeIds Gets or Sets RouteTypeIds
     * @param routeIds Gets or Sets RouteIds
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy-\&quot;StudentName AdmissionNumber Class Section\&quot;
     * @param pageNumber 
     * @param pageSize     
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchStudents(studentId?: string, studentNames?: Array<string>, classIds?: Array<number>, sectionIds?: Array<number>,
        boardIds?: Array<number>, routeTypeIds?: Array<number>, routeIds?: Array<number>, sortOrder?: 0 | 1 | -1,
        sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStudents(studentId?: string, studentNames?: Array<string>, classIds?: Array<number>, sectionIds?: Array<number>,
        boardIds?: Array<number>, routeTypeIds?: Array<number>, routeIds?: Array<number>, sortOrder?: 0 | 1 | -1,
        sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStudents(studentId?: string, studentNames?: Array<string>, classIds?: Array<number>, sectionIds?: Array<number>,
        boardIds?: Array<number>, routeTypeIds?: Array<number>, routeIds?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string,
        pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStudents(studentId?: string, studentNames?: Array<string>, classIds?: Array<number>, sectionIds?: Array<number>,
        boardIds?: Array<number>, routeTypeIds?: Array<number>, routeIds?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string,
        pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(studentId, 'StudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(boardIds, 'BoardIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(routeTypeIds, 'RouteTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(routeIds, 'RouteIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._StudentDB_Fetch_Students,
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
     * StudentDatabase filtered Students with their Statuses
     * 
     * @param authorization access token
     * @param studentIds Gets or Sets StudentIds
     * @param schoolAcademicSessionId Gets or Sets SortBy
     * @param feeTerms Gets or Sets FeeTermIds Encrypted Values
     * @param board Gets or Sets FeeTermIds Encrypted Values
     * @param studentName Gets or Sets StudentName
     * @param classes Gets or Sets ClassIds Encrypted Values
     * @param sections Gets or Sets SectionIds Encrypted Values
     * @param invoiceNumber Gets or Sets InvoiceNumber
     * @param receiptNumber Gets or Sets ReceiptNumber
     * @param feeType Gets or Sets ReceiptNumber
     * @param invoiceDateBegin Gets or sets of InvoiceDateBegin
     * @param invoiceDateEnd Gets or sets of InvoiceDateEnd
     * @param issueDateBegin Gets or sets of IssueDateBegin
     * @param issueDateEnd Gets or sets of IssueDateEnd
     * @param dueDateBegin Gets or sets of DueDateBegin
     * @param dueDateEnd Gets or sets of DueDateEnd
     * @param invoiceAmount Gets or Sets InvoiceAmount
     * @param adjustment Gets or Sets Adjustments
     * @param dueAmount Gets or Sets DueAmount
     * @param penaltyAmount Gets or Sets PenaltyAmount
     * @param realizedAmount Gets or Sets RealizedAmount
     * @param balanceAmount Gets or Sets BalanceAmount
     * @param status Gets or Sets StatusIds Encrypted Values
     * @param sortOrder Gets or Sets SortOrder
     * @param sortBy Gets or Sets SortBy
     * @param pageNumber 
     * @param pageSize 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoiceList(model: InvoiceFilterView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public invoiceList(model: InvoiceFilterView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public invoiceList(model: InvoiceFilterView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public invoiceList(model: InvoiceFilterView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParamsWithModel(model, queryParameters);
        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header

        return this.httpClient.get<any>(`${this.basePath}/StudentDB/invoice-list`,
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
* StudentDatabase filtered Students with their Statuses
* 
* @param id 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public studentDetails(studentId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(studentId, 'StudentId', queryParameters);

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

        return this.httpClient.get<any>(`${this.basePath}/StudentDB/student-basic-details`,
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
     * StudentDatabase filtered Students with their Statuses
     * 
     * @param authorization access token
     * @param studentIds Gets or Sets StudentIds
     * @param schoolAcademicSessionId Gets or Sets SortBy
     * @param feeTerms Gets or Sets FeeTermIds Encrypted Values
     * @param board Gets or Sets FeeTermIds Encrypted Values
     * @param studentName Gets or Sets StudentName
     * @param classes Gets or Sets ClassIds Encrypted Values
     * @param sections Gets or Sets SectionIds Encrypted Values
     * @param invoiceNumber Gets or Sets InvoiceNumber
     * @param receiptNumber Gets or Sets ReceiptNumber
     * @param feeType Gets or Sets ReceiptNumber
     * @param invoiceDateBegin Gets or sets of InvoiceDateBegin
     * @param invoiceDateEnd Gets or sets of InvoiceDateEnd
     * @param issueDateBegin Gets or sets of IssueDateBegin
     * @param issueDateEnd Gets or sets of IssueDateEnd
     * @param dueDateBegin Gets or sets of DueDateBegin
     * @param dueDateEnd Gets or sets of DueDateEnd
     * @param invoiceAmount Gets or Sets InvoiceAmount
     * @param adjustmentAmount Gets or Sets Adjustments
     * @param penaltyAmount Gets or Sets PenaltyAmount
     * @param realizedAmount Gets or Sets RealizedAmount
     * @param balanceAmount Gets or Sets BalanceAmount
     * @param invoiceStatus Gets or Sets StatusIds Encrypted Values
     * @param sortOrder Gets or Sets SortOrder
     * @param sortBy Gets or Sets SortBy
     * @param isCancel Gets or Sets SortBy
     * @param pageNumber 
     * @param pageSize 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    // tslint:disable-next-line: max-line-length
    public studentInvoices(observe?: 'body', reportProgress?: boolean): Observable<any>;
    // tslint:disable-next-line: max-line-length
    public studentInvoices(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    // tslint:disable-next-line: max-line-length
    public studentInvoices(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    // tslint:disable-next-line: max-line-length
    public studentInvoices(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

        return this.httpClient.get<any>(`${this.basePath}/StudentDB/Student-invoice-list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * TypeAhead or Autocomplete for Student Names Search in Current Academic Session (Active, TC, Dropout)
    * 
    * @param name Gets or Sets NameViewModel
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public currentStudentNames(name?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public currentStudentNames(name?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public currentStudentNames(name?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public currentStudentNames(name?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
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

        return this.httpClient.get<any>(`${this.basePath}/StudentDB/current-student-Names`,
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