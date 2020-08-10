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
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';

import { Observable } from 'rxjs/Observable';

import { BASE_PATH } from '../../base/variables';
import { Configuration } from '../../base/configuration';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';


@Injectable()
export class TypeService {
    
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    * Get method of GetType using type code which gives perticular type corresponding to that code.
    * 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */

    public typeByCodeBasedOnCategory(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}/Type/TypeByCodeBasedOnCategory`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typeListOfTypesGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typeListOfTypesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typeListOfTypesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typeListOfTypesGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        // let consumes: string[] = [
        // ];

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Type_listOfTypes,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
         * Gets Types based on given TypesByTypeCategoryCode
         * 
         * @param code Gets or sets Code
         * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
         * @param reportProgress flag to report request and response progress.
         */
    public typesByTypeCategoryCode(code: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typesByTypeCategoryCode(code: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typesByTypeCategoryCode(code: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typesByTypeCategoryCode(code: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling typesByTypeCategoryCode.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', <any>code);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Type_TypesByTypeCategoryCode,
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
     * Get method of GetType using type code which gives perticular type corresponding to that code.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typeByCodeBasedOnCaste(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typeByCodeBasedOnCaste( observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typeByCodeBasedOnCaste( observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typeByCodeBasedOnCaste( observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Type_All_Caste,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get method of GetType using type code which gives perticular type corresponding to that code.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typeByCodeBasedOnReligion(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typeByCodeBasedOnReligion( observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typeByCodeBasedOnReligion(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typeByCodeBasedOnReligion( observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Type_All_Religions,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get method of GetType using type code which gives perticular type corresponding to that code.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typeByCodeBasedOnSuffix( observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typeByCodeBasedOnSuffix(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typeByCodeBasedOnSuffix(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typeByCodeBasedOnSuffix(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig. _Type_TypeByCodeBasedOnSuffix,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets List of Types perticular to type category using category code.
     * 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typeLists( observe?: 'body', reportProgress?: boolean): Observable<any>;
    public typeLists( observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public typeLists( observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public typeLists(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Type_listOfTypes,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

     /**
     * Get Staff Types
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStaffTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getStaffTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getStaffTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getStaffTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}/Communication/staff-types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
