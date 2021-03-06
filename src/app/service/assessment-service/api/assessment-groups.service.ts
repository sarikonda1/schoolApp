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
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { Configuration, BASE_PATH } from 'app/service/grading-service';



@Injectable()
export class AssessmentGroupsService {
    // protected basePath = 'http://localhost:8013';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(private commonComponent: CommonComponent, protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Create AssessmentGroups
     * 
     * @param name Gets or Sets Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAssessmentGroups(name: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createAssessmentGroups(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createAssessmentGroups(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createAssessmentGroups(name: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling createAssessmentGroups.');
        }

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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._AssessmentGroups_AddAssessmentGroups,
            null,
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
     * Delete AssessmentGroups
     * 
     * @param ids 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dropAssessmentGroups(ids: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dropAssessmentGroups(ids: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dropAssessmentGroups(ids: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dropAssessmentGroups(ids: Array<string>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling dropAssessmentGroups.');
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

        return this.httpClient.delete<any>(`${this.basePath}` + BaseModuleConfig._AssessmentGroups_DeleteAssessmentGroups,
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
     * Edit AssessmentGroups
     * 
     * @param name Gets or Sets Name
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editAssessmentGroups(name: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public editAssessmentGroups(name: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public editAssessmentGroups(name: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public editAssessmentGroups(name: string, id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling editAssessmentGroups.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling editAssessmentGroups.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
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

        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._AssessmentGroups_UpdateAssessmentGroups,
            null,
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
    * Get all for AssessmentGroups
    * 
    * @param sortBy Gets or Sets SortBy
    * @param name Gets or Sets Name
    * @param sortOrder Gets or Sets SortOrder
    * @param failedRecords Gets or Sets FailedRecords
    * @param pageNumber 
    * @param pageSize 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public fetchAssessmentGroups(sortBy?: string, name?: Array<string>, sortOrder?: 0 | 1 | -1, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchAssessmentGroups(sortBy?: string, name?: Array<string>, sortOrder?: 0 | 1 | -1, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchAssessmentGroups(sortBy?: string, name?: Array<string>, sortOrder?: 0 | 1 | -1, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchAssessmentGroups(sortBy?: string, name?: Array<string>, sortOrder?: 0 | 1 | -1, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
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
        return this.httpClient.get<any>(`${this.basePath}/AssessmentGroups/assessment-groups`,
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
