/**
 * Fee
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
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';

import { Observable } from 'rxjs/Observable';

import { FeeAccountDataView } from 'app/modules/configuration/finance/models/fee-account-data-view';
import { FeeAccountView } from 'app/modules/configuration/finance/models/fee-account-view';

import { CommonComponent } from 'app/shared/common/common.component';
import { Configuration, BASE_PATH } from 'app/service/academic-service';
import { BaseUrlConfig, ModuleConfig, FeeModuleConfig } from 'app/url.config';


@Injectable()
export class FeeAccountService {

    // protected basePath = 'http://localhost:8011';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Fee;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string,
        @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * To Create FeeAccounts details  under  school
     * 
     * @param feeAccountView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFeeAccountDetails(feeAccountView?: FeeAccountView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createFeeAccountDetails(feeAccountView?: FeeAccountView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createFeeAccountDetails(feeAccountView?: FeeAccountView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createFeeAccountDetails(feeAccountView?: FeeAccountView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}` + FeeModuleConfig._CreateFeeAccountDetails,
            feeAccountView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * To delete multiple feeAccounts details  based on fee account ids
     * 
     * @param ids 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFeeAccountDetails(ids: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteFeeAccountDetails(ids: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteFeeAccountDetails(ids: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteFeeAccountDetails(ids: Array<string>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteFeeAccountDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(ids, 'Ids', queryParameters);

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

        return this.httpClient.delete<any>(`${this.basePath}` + FeeModuleConfig._DeleteFeeAccountDetailsbyId,
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
     * @param sortBy Gets or Sets SortBy
     * @param accountName Gets or Sets AccountName
     * @param code Gets or Sets Code
     * @param displayName Gets or Sets DisplayName
     * @param description Gets or Sets Description
     * @param sortOrder Gets or Sets SortOrder
     * @param failedRecords Gets or Sets FailedRecords
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public feeAccountDetails(sortBy?: string, accountName?: Array<string>,
        code?: Array<string>, displayName?: Array<string>,
        description?: Array<string>, sortOrder?: number,
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public feeAccountDetails(sortBy?: string, accountName?: Array<string>,
        code?: Array<string>, displayName?: Array<string>,
        description?: Array<string>, sortOrder?: number,
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public feeAccountDetails(sortBy?: string, accountName?: Array<string>,
        code?: Array<string>, displayName?: Array<string>, description?: Array<string>, sortOrder?: number, failedRecords?: Array<string>, pageNumber?: number,
        pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public feeAccountDetails(sortBy?: string, accountName?: Array<string>,
        code?: Array<string>, displayName?: Array<string>,
        description?: Array<string>, sortOrder?: number,
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(accountName, 'AccountName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(code, 'Code', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(displayName, 'DisplayName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(description, 'Description', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeAccountDetailsList,
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
     * Get FeeAccountDetailsById
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public feeAccountDetailsById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public feeAccountDetailsById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public feeAccountDetailsById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public feeAccountDetailsById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling feeAccountDetailsById.');
        }

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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeAccountDetailsbyId,
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
     * To update fee account details by fee acoount id
     * 
    
     * @param feeAccountDataView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFeeAccountDetails(feeAccountDataView?: FeeAccountDataView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateFeeAccountDetails(feeAccountDataView?: FeeAccountDataView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateFeeAccountDetails(feeAccountDataView?: FeeAccountDataView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateFeeAccountDetails(feeAccountDataView?: FeeAccountDataView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.put<any>(`${this.basePath}` + FeeModuleConfig._UpdateFeeAccountDetails,
            feeAccountDataView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
