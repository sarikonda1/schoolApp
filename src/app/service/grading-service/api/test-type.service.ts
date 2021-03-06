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


// import { TestTypeViewModel } from 'app/models/grading/test-type-viewmodel';
// import { Configuration, BASE_PATH } from '.';
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';
import { ModuleConfig, BaseUrlConfig, BaseModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { Configuration, BASE_PATH } from '.';
import { TestTypeViewModel } from 'app/models/grading/test-type-viewmodel';
import { TestTypeView } from 'app/models/grading/test-type-view';


@Injectable()
export class TestTypeService {

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
      * This method will Delete TestType based on TestTypeId
      * 
      * @param ids 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
    public deleteAll(ids: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAll(ids: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAll(ids: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAll(ids: Array<string>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteAll.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (ids) {
            ids.forEach((element) => {
                queryParameters = queryParameters.append('Ids', <any>element);
            });
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

        return this.httpClient.delete<any>(`${this.basePath}` + BaseModuleConfig._Testype_DeleteAll,
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
     * Method to create TestType
     * 
     * @param testTypeViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTestType(testTypeViewModel?: TestTypeViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createTestType(testTypeViewModel?: TestTypeViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createTestType(testTypeViewModel?: TestTypeViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createTestType(testTypeViewModel?: TestTypeViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Add_TestType,
            testTypeViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Method to get All TestType Details based on SchoolAcademicSessionId
     * 
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param names Gets or Sets of Name
     * @param codes Gets or Sets of Code
     * @param questionCounts Gets or Sets of QuestionCount
     * @param marksCounts Gets or Sets of MarksCount
     * @param failedRecords Gets or Sets of MarksCount
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDetails(sortBy?: string, sortOrder?: number, names?: Array<string>, 
        codes?: Array<string>, questionCounts?: Array<number>, marksCounts?: Array<number>, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllDetails(sortBy?: string, sortOrder?: number, names?: Array<string>, 
        codes?: Array<string>, questionCounts?: Array<number>, marksCounts?: Array<number>, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllDetails(sortBy?: string, sortOrder?: number, names?: Array<string>, 
        codes?: Array<string>, questionCounts?: Array<number>, marksCounts?: Array<number>, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllDetails(sortBy?: string, sortOrder?: number, names?: Array<string>, 
        codes?: Array<string>, questionCounts?: Array<number>, marksCounts?: Array<number>, 
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(names, 'Names', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(codes, 'Codes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(questionCounts, 'QuestionCounts', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(marksCounts, 'MarksCounts', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Testype_GetAll,
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
     * Method to get TestType Details based on TestTypeId
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTestTypeById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getTestTypeById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getTestTypeById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getTestTypeById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestTypeById.');
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Testype_TestTypeById,
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
     * Method to Update TestType based on TestTypeId
     * 
     * @param testTypeView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTestType(testTypeView?: TestTypeView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateTestType(testTypeView?: TestTypeView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateTestType(testTypeView?: TestTypeView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateTestType(testTypeView?: TestTypeView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._Update_TestType,
            testTypeView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
