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

import { SectionViewModel } from 'app/models/academics/section-view-model';
import { Configuration, BASE_PATH } from 'app/service/academic-service/api';
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';
import { SectionDataViewModel } from 'app/models/academics/section-data-view-model';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';


@Injectable()
export class SectionService {

    // protected basePath = 'http://localhost:8013';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent, ) {
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
     * To create section details under school
     * 
     * @param sectionViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSection(sectionViewModel?: SectionDataViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createSection(sectionViewModel?: SectionDataViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createSection(sectionViewModel?: SectionDataViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createSection(sectionViewModel?: SectionDataViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Create_Section_Details,
            sectionViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * To Fetch Section Details By section Id
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchSectionById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchSectionById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchSectionById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchSectionById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fetchSectionById.');
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Fetch_SectionDetailsBy_Id,
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
     * To  Fetch Sections based on params
     * 
     * @param sortBy Gets or Sets SortBy
     * @param names Gets or Sets Name
     * @param sortOrder Gets or Sets SortOrder
     * @param failedRecords Gets or Sets FailedRecords
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchSections( sortBy?: string, names?: Array<string>, sortOrder?: number, failedRecords?: Array<string>,
         pageNumber?: number, pageSize?: number,  observe?: 'body', reportProgress?: boolean): Observable<any>;
    public searchSections( sortBy?: string, names?: Array<string>, sortOrder?: number, failedRecords?: Array<string>,
         pageNumber?: number, pageSize?: number,  observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public searchSections( sortBy?: string, names?: Array<string>, sortOrder?: number, failedRecords?: Array<string>,
         pageNumber?: number, pageSize?: number,  observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public searchSections( sortBy?: string, names?: Array<string>, sortOrder?: number, failedRecords?: Array<string>,
         pageNumber?: number, pageSize?: number,  observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(names, 'Names', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._SectionsListBy_SchoolId,
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
     * To Update Section Details By section Id
     * 
     * @param sectionViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSection(sectionViewModel?: SectionViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSection(sectionViewModel?: SectionViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSection(sectionViewModel?: SectionViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSection(sectionViewModel?: SectionViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._Update_Section_Details,
            sectionViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

     /**
     * To Remove Section Details By section Ids
     * 
     * @param ids 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeMultiSections(ids: Array<string>,  observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeMultiSections(ids: Array<string>,  observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeMultiSections(ids: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>; 
    public removeMultiSections(ids: Array<string>,  observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.delete<any>(`${this.basePath}` + BaseModuleConfig._Remove_Sections,
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
