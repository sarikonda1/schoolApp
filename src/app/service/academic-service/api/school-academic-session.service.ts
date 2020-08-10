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
import { BASE_PATH } from 'app/service/base/variables';
import { Configuration } from 'app/service/base/configuration';
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';
import { SchoolAcademicSessionViewModel } from 'app/modules/configuration/academic/model/schoolacademic-session-view-model';
import { BaseUrlConfig, ModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolAcademicSessionChangeView } from 'app/modules/configuration/academic/model/school-academic-session-change-view';
import { SchoolAcademicSessionStatusViewModel } from 'app/modules/configuration/academic/model/school-academicsession-status-view';

@Injectable()
export class SchoolAcademicSessionService {
    // protected basePath = 'http://localhost:8013';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient,
        @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * Get List of Classes Based On SchoolId
     * 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classes(observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/classes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Method to get All schoolacademicsessions
     * 
     * @param names Gets or sets of Names
     * @param codes Gets or sets of Codes
     * @param statusId Gets or sets of Status
     * @param startDate Gets or sets of StartDates
     * @param endDate Gets or sets of EndDates
     * @param onlineApplicationStartDate Gets or sets of OnlineApplicationStartDates
     * @param onlineApplicationEndDate Gets or sets of OnlineApplicationEndDates
     * @param onlineApplicationFees Gets or sets of OnlineApplicationFees
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDetails(names?: Array<string>, codes?: Array<string>, statusIds?: Array<string>, startDateBegin?: string, startDateEnd?: string, endDateBegin?: string,
        endDateEnd?: string, onlineApplicationStartDateBegin?: string, onlineApplicationStartDateEnd?: string, onlineApplicationEndDateBegin?: string,
        onlineApplicationEndDateEnd?: string, onlineApplicationFees?: Array<string>, sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number,
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllDetails(names?: Array<string>, codes?: Array<string>, statusIds?: Array<string>, startDateBegin?: string, startDateEnd?: string, endDateBegin?: string,
        endDateEnd?: string, onlineApplicationStartDateBegin?: string, onlineApplicationStartDateEnd?: string, onlineApplicationEndDateBegin?: string,
        onlineApplicationEndDateEnd?: string,
        onlineApplicationFees?: Array<string>, sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllDetails(names?: Array<string>, codes?: Array<string>, statusIds?: Array<string>, startDateBegin?: string, startDateEnd?: string, endDateBegin?: string,
        endDateEnd?: string,
        onlineApplicationStartDateBegin?: string, onlineApplicationStartDateEnd?: string, onlineApplicationEndDateBegin?: string, onlineApplicationEndDateEnd?: string,
        onlineApplicationFees?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllDetails(names?: Array<string>, codes?: Array<string>, statusIds?: Array<string>, startDateBegin?: string, startDateEnd?: string, endDateBegin?: string,
        endDateEnd?: string,
        onlineApplicationStartDateBegin?: string, onlineApplicationStartDateEnd?: string, onlineApplicationEndDateBegin?: string, onlineApplicationEndDateEnd?: string,
        onlineApplicationFees?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(names, 'Names', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(codes, 'Codes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startDateBegin, 'StartDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startDateEnd, 'StartDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endDateBegin, 'EndDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endDateEnd, 'EndDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(onlineApplicationStartDateBegin, 'OnlineApplicationStartDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(onlineApplicationStartDateEnd, 'OnlineApplicationStartDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(onlineApplicationEndDateBegin, 'OnlineApplicationEndDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(onlineApplicationEndDateEnd, 'OnlineApplicationEndDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(onlineApplicationFees, 'OnlineApplicationFees', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);

        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/fetch-schoolacademicsessions`,
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
     * To create the accademicsessions data for the school
     * 
     * @param schoolAcademicSessionViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schoolAcademicSession(schoolAcademicSessionViewModel?: SchoolAcademicSessionViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schoolAcademicSession(schoolAcademicSessionViewModel?: SchoolAcademicSessionViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schoolAcademicSession(schoolAcademicSessionViewModel?: SchoolAcademicSessionViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schoolAcademicSession(schoolAcademicSessionViewModel?: SchoolAcademicSessionViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/SchoolAcademicSession/schoolacademicsession`,
            schoolAcademicSessionViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Fetch details of an schoolacademicsessions details
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schoolAcademicSessionDetails(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schoolAcademicSessionDetails(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schoolAcademicSessionDetails(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schoolAcademicSessionDetails(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling schoolAcademicSessionDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/schoolacademicsessions`,
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
     * Get List of Sections Based On SchoolId
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sections(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sections(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sections(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sections(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/sections`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
    * Fetch details of CourseCategory based on schoolid
    * 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public courseCategoryDetails(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public courseCategoryDetails(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public courseCategoryDetails(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public courseCategoryDetails(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/coursecategorys`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Fetch details of Courses based on CoursecategeoryId
    * 
    * @param id 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public courseDetails(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public courseDetails(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public courseDetails(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public courseDetails(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling courseDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/courses`,
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
       * update the status for academicsession based on statusid
       * 
       * @param schoolAcademicSessionStatusViewModel 
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
    public updateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put<any>(`${this.basePath}/SchoolAcademicSession/status`,
            schoolAcademicSessionStatusViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
* To update the accademicsessions data for the school
* 
* @param schoolAcademicSessionChangeView 
* @param schoolId SchoolId in Encrypted Form
* @param instituteId InstituteId in Encrypted Form
* @param userId UserId in Encrypted Form
* @param academicSessionId AcademicSessionId in Encrypted Form 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public updateSchoolAcademicSession(schoolAcademicSessionChangeView?: SchoolAcademicSessionChangeView, schoolId?: string, instituteId?: string,
        userId?: string, academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSchoolAcademicSession(schoolAcademicSessionChangeView?: SchoolAcademicSessionChangeView, schoolId?: string, instituteId?: string,
        userId?: string, academicSessionId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSchoolAcademicSession(schoolAcademicSessionChangeView?: SchoolAcademicSessionChangeView, schoolId?: string, instituteId?: string,
        userId?: string, academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSchoolAcademicSession(schoolAcademicSessionChangeView?: SchoolAcademicSessionChangeView, schoolId?: string, instituteId?: string,
        userId?: string, academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
            'application/json'
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

        return this.httpClient.put<any>(`${this.basePath}/SchoolAcademicSession/schoolacademicsession`,
            schoolAcademicSessionChangeView,
            {
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
     * @param schoolBoardId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public academicClassSections(schoolBoardId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public academicClassSections(schoolBoardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public academicClassSections(schoolBoardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public academicClassSections(schoolBoardId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('schoolBoardId', <any>schoolBoardId);
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

        return this.httpClient.get<any>(`${this.basePath}/SchoolAcademicSession/class-sections`,
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
     * update the status for academicsession based on statusid
     * 
     * @param authorization access token
     * @param schoolAcademicSessionStatusViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public confirmAndUpdateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public confirmAndUpdateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public confirmAndUpdateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public confirmAndUpdateStatus(schoolAcademicSessionStatusViewModel?: SchoolAcademicSessionStatusViewModel,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put<any>(`${this.basePath}/SchoolAcademicSession/confirm-update-status`,
            schoolAcademicSessionStatusViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
