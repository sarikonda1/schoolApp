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
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';
import { Observable } from 'rxjs/Observable';
import { BASE_PATH } from '../../base/variables';
import { Configuration } from '../../base/configuration';
import { BaseModuleConfig, BaseUrlConfig, ModuleConfig } from '../../../url.config';
// Translation:remove it after understanding
// import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class AcademicSessionService {
    // protected basePath = 'http://localhost:8013';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    // Translation:remove it after understanding
    // private translate: TranslateService;

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration
        // Translation:remove it after understanding
        // ,@Optional() translate: TranslateService
    ) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
        // Translation:remove it after understanding
        // this.translate = translate;
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
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiAcademicSessionAcademicSessionDataByIdGet(id?: number | string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiAcademicSessionAcademicSessionDataByIdGet(id?: number | string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiAcademicSessionAcademicSessionDataByIdGet(id?: number | string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiAcademicSessionAcademicSessionDataByIdGet(id?: number | string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined) {
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
        // let consumes: string[] = [
        // ];

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_AcademicSessionDataById,
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
     * @param schoolId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public academicSessionAllAcademicSessionsBySchoolIdGet(schoolId?: number | string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public academicSessionAllAcademicSessionsBySchoolIdGet(schoolId?: number | string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public academicSessionAllAcademicSessionsBySchoolIdGet(schoolId?: number | string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public academicSessionAllAcademicSessionsBySchoolIdGet(schoolId?: number | string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolId !== undefined) {
            queryParameters = queryParameters.set('SchoolId', <any>schoolId);
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
        // let consumes: string[] = [
        // ];

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_AllAcademicSessionsBySchoolId,
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
     * @param schoolId
     * @param academicSessionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public academicSessionSchoolAcademicSessionIdBySchoolIdGet(schoolId?: number | string, academicSessionId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public academicSessionSchoolAcademicSessionIdBySchoolIdGet(schoolId?: number | string, academicSessionId?: number,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public academicSessionSchoolAcademicSessionIdBySchoolIdGet(schoolId?: number | string, academicSessionId?: number,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public academicSessionSchoolAcademicSessionIdBySchoolIdGet(schoolId?: number | string, academicSessionId?: number,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolId !== undefined) {
            queryParameters = queryParameters.set('SchoolId', <any>schoolId);
        }
        if (academicSessionId !== undefined) {
            queryParameters = queryParameters.set('AcademicSessionId', <any>academicSessionId);
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
        // let consumes: string[] = [
        // ];'http://localhost:5000/AcademicSession/SchoolAcademicSessionIdBySchoolId'

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_SchoolAcademicSessionIdBySchoolId,
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
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public academicSessionSchoolAcademicSessionIdBySessionIdGet(id?: number | string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public academicSessionSchoolAcademicSessionIdBySessionIdGet(id?: number | string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public academicSessionSchoolAcademicSessionIdBySessionIdGet(id?: number | string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public academicSessionSchoolAcademicSessionIdBySessionIdGet(id?: number | string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined) {
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_SchoolAcademicSessionIdBySessionId,
            // return this.httpClient.get<any>(`${this.basePath}/AcademicSession/SchoolAcademicSessionIdBySessionId`,
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
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public academicSessionSchoolBoardsGet(id?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public academicSessionSchoolBoardsGet(id?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public academicSessionSchoolBoardsGet(id?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public academicSessionSchoolBoardsGet(id?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        // if (authorization === null || authorization === undefined) {
        //     throw new Error('Required parameter authorization was null or undefined when calling academicSessionSchoolBoardsGet.');
        // }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;
        // if (authorization !== undefined && authorization !== null) {
        //     headers = headers.set('Authorization', String(authorization));
        // }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_SchoolBoards,
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
    * Get all AcademicSessions Based on School Id
    * 
    * @param schoolId Gets or Sets SchoolID
    * @param authorization access token
    * @param schoolId2 SchoolId in Encrypted Form
    * @param instituteId InstituteId in Encrypted Form
    * @param userId UserId in Encrypted Form
    * @param academicSessionId AcademicSessionId in Encrypted Form 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public getAcademicSessionsBySchoolId(schoolId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAcademicSessionsBySchoolId(schoolId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAcademicSessionsBySchoolId(schoolId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAcademicSessionsBySchoolId(schoolId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolId !== undefined && schoolId !== null) {
            queryParameters = queryParameters.set('SchoolId', <any>schoolId);
        }

        let headers = this.defaultHeaders;


        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/AcademicSession/getallacademicsessiondata`,
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
     * Get all SchoolBoards Based on School Id
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchSchoolAcademicSession(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchSchoolAcademicSession(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchSchoolAcademicSession(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchSchoolAcademicSession(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._AcademicSession_AcademicSessionData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}