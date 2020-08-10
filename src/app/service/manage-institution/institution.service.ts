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
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BASE_PATH } from '../base/variables';
import { Configuration } from '../base/configuration';
// import { InstitutionView } from 'app/modules/lshp-admin/models/institution-view';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { InstitutionUpdateView } from 'app/modules/lshp-admin/models/institution-update-view';
import { InstitutionView } from 'app/modules/lshp-admin/models/institution-view';

@Injectable()
export class InstitutionService {

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
     * creates an intitution
     * 
     * @param authorization access token
     * @param institutionView 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createInstitution(institutionView?: InstitutionView, schoolId?: string,
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createInstitution(institutionView?: InstitutionView, schoolId?: string,
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createInstitution(institutionView?: InstitutionView, schoolId?: string,
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createInstitution(institutionView?: InstitutionView, schoolId?: string,
        instituteId?: string, userId?: string, academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }

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
        if (httpContentTypeSelected !==
            undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Institution_Create,
            institutionView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all institutionDetails by institutionId
     * 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInstitutionDetails(schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getInstitutionDetails(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getInstitutionDetails(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getInstitutionDetails(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {




        let headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Institution_Details,
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
     * @param id 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public institutionDetails(id: string, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
         observe?: 'body', reportProgress?: boolean): Observable<any>;
    public institutionDetails(id: string, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public institutionDetails(id: string, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public institutionDetails(id: string, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling institutionDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Institution_Create,
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
     * 
     * 
     * @param authorization access token
     * @param institutionUpdateView 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateInstitution(institutionUpdateView?: InstitutionUpdateView, schoolId?: string, 
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateInstitution(institutionUpdateView?: InstitutionUpdateView, schoolId?: string, 
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateInstitution(institutionUpdateView?: InstitutionUpdateView, schoolId?: string, 
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateInstitution(institutionUpdateView?: InstitutionUpdateView, schoolId?: string, 
        instituteId?: string, userId?: string, academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;
        if (schoolId !== undefined && schoolId !== null) {
            headers = headers.set('SchoolId', String(schoolId));
        }
        if (instituteId !== undefined && instituteId !== null) {
            headers = headers.set('InstituteId', String(instituteId));
        }
        if (userId !== undefined && userId !== null) {
            headers = headers.set('UserId', String(userId));
        }
        if (academicSessionId !== undefined && academicSessionId !== null) {
            headers = headers.set('AcademicSessionId', String(academicSessionId));
        }

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

        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._Institution_Create,
            institutionUpdateView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * updates an institution from user email
    * 
    * @param institutionUpdateView 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public updateInstitutionByUserFromEmail(institutionUpdateView?: InstitutionUpdateView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateInstitutionByUserFromEmail(institutionUpdateView?: InstitutionUpdateView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateInstitutionByUserFromEmail(institutionUpdateView?: InstitutionUpdateView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateInstitutionByUserFromEmail(institutionUpdateView?: InstitutionUpdateView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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
        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._Institution_Update_By_Email,
            institutionUpdateView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get institute details by id and email, verifies the link with both combination
     * 
     * @param id 
     * @param email Gets or Sets EmailId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public institutionDetailsByLink(id: string, email?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public institutionDetailsByLink(id: string, email?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public institutionDetailsByLink(id: string, email?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public institutionDetailsByLink(id: string, email?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling institutionDetailsByLink.');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('Email', <any>email);
        }
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Institution_Details_By_Email_Link,
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