/**
 * UserManagement
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
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'app/service/base/configuration';
import { BASE_PATH } from 'app/service/base/variables';
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';
import { NameViewModel } from '../model/name-view-model';
import { BaseModuleConfig, BaseUrlConfig, ModuleConfig } from 'app/url.config';
import { NameIdViewModel } from '../model/nameid-view-model';
import { CommonComponent } from 'app/shared/common/common.component';


@Injectable()
export class ModuleService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.UserManagment;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, 
    @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * creation of module
     * 
     * @param authorization access token
     * @param nameViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createModule(nameViewModel?: NameViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createModule(nameViewModel?: NameViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createModule(nameViewModel?: NameViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createModule(nameViewModel?: NameViewModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/Module/create-module`,
            nameViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * returns all modules
     * 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modules(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public modules(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public modules(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public modules(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}/Module/get-all-modules`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * returns module in the form of grid
     * 
     * @param authorization access token
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy- \&quot;Module\&quot;
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modulesGrid(sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public modulesGrid(sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, 
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public modulesGrid(sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public modulesGrid(sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

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

        return this.httpClient.get<any>(`${this.basePath}/Module/module-grid`,
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
     * Update Particular module Details
     * 
     * @param authorization access token
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateModule(model?: NameIdViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateModule(model?: NameIdViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateModule(model?: NameIdViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateModule(model?: NameIdViewModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.put<any>(`${this.basePath}/Module/module`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}