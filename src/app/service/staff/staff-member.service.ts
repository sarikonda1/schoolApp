/**
 * Teacher API
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
import { CustomHttpUrlEncodingCodec } from '../base/encoder';

import { Observable } from 'rxjs/Observable';
import { BASE_PATH } from '../base/variables';
import { Configuration } from '../base/configuration';
import { StaffView } from 'app/models/staff/staff-view';
import { BaseUrlConfig, ModuleConfig, TeacherModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { StaffDetailsView } from 'app/modules/staff/staff-admissions/model/staff-details-view';
import { StaffStatusView } from 'app/modules/staff/staff-information-system/model/staff-status-view';
import { StaffBulkPostView } from 'app/modules/staff/models/staff-bulk-post-view';

@Injectable()
export class StaffMemberService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Teacher;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,
        private commonComponent: CommonComponent) {
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
     * Post Staff
     * 
     * @param staffView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffPost(staffView?: StaffView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffPost(staffView?: StaffView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffPost(staffView?: StaffView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffPost(staffView?: StaffView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Add_Update,
            staffView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all StaffMember Data
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffMember(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffMember(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffMember(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffMember(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling staffMember.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Get_all_StaffMember_Data,
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
     * Get all StaffMembers
     * 
     * @param sortBy Gets or Sets SortBy
     * @param statusIds Gets or Sets StatusIds
     * @param staffNames Gets or Sets StaffNames
     * @param staffCodes Gets or Sets StaffCodes
     * @param departments Gets or Sets Departments
     * @param staffTypeIds Gets or Sets StaffTypeIds
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffMembers(sortBy?: string, statusIds?: Array<string>, staffNames?: Array<string>, staffCodes?: Array<string>, departments?: Array<string>,
        staffTypeIds?: Array<string>, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffMembers(sortBy?: string, statusIds?: Array<string>, staffNames?: Array<string>, staffCodes?: Array<string>, departments?: Array<string>,
        staffTypeIds?: Array<string>, sortOrder?: 0 | 1 | -1,
        pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffMembers(sortBy?: string, statusIds?: Array<string>,
        staffNames?: Array<string>, staffCodes?: Array<string>, departments?: Array<string>, staffTypeIds?: Array<string>,
        sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffMembers(sortBy?: string, statusIds?: Array<string>, staffNames?: Array<string>, staffCodes?: Array<string>, departments?: Array<string>,
        staffTypeIds?: Array<string>, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(staffNames, 'StaffNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(staffCodes, 'StaffCodes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(departments, 'Departments', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(staffTypeIds, 'StaffTypeIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Get_all_StaffMembers,
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
     * Search Staff
     * 
     * @param name Gets or sets Name
     * @param staffType Gets or sets StaffType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffSearch(name?: string, staffType?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffSearch(name?: string, staffType?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffSearch(name?: string, staffType?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffSearch(name?: string, staffType?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
        }
        if (staffType !== undefined && staffType !== null) {
            queryParameters = queryParameters.set('StaffType', <any>staffType);
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Search_Staff,
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
     * Get all staff Types
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffTypes(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Get_all_staff_Types,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Update Staff
    * 
    * @param staffDetailsView 
    * @param schoolId SchoolId in Encrypted Form
    * @param instituteId InstituteId in Encrypted Form
    * @param userId UserId in Encrypted Form
    * @param academicSessionId AcademicSessionId in Encrypted Form 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */

    public staff(staffDetailsView?: StaffDetailsView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.put<any>(`${this.basePath}` + TeacherModuleConfig._Teacher_Add_Update,
            staffDetailsView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Approve Staff
    * 
    * @param staffView 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public approveStaff(staffView?: StaffView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public approveStaff(staffView?: StaffView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public approveStaff(staffView?: StaffView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public approveStaff(staffView?: StaffView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + TeacherModuleConfig._Approve_Staff,
            staffView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Get all StaffMember Details
    * 
    * @param id 
    * @param schoolId SchoolId in Encrypted Form
    * @param instituteId InstituteId in Encrypted Form
    * @param userId UserId in Encrypted Form
    * @param academicSessionId AcademicSessionId in Encrypted Form 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */

    public staffMemberDetails(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling staffMemberDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Staff_Member_Details,
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
    * Update Staff Status(Active/Inactive)
    *    
    * @param staffStatusView    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public staffStatus(staffStatusView?: StaffStatusView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffStatus(staffStatusView?: StaffStatusView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffStatus(staffStatusView?: StaffStatusView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffStatus(staffStatusView?: StaffStatusView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.put<any>(`${this.basePath}` + TeacherModuleConfig._Staff_Status,
            staffStatusView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Direct File Upload from IFormFile
     * 
     * @param authorization access token
     * @param contentType 
     * @param contentDisposition 
     * @param headers 
     * @param length 
     * @param name 
     * @param fileName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readStaffsBulkData(file?: any): Observable<any> {
        const input = new FormData();
        input.append('file', file, file.name);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.httpClient
        .post(`${this.basePath}` + '/read-valiadate-excel-csv-files', input, { headers: headers });
    }


     /**
     * staff bulk post
     * 
     * @param authorization access token
     * @param staffs 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffBulkPost( staffs?: StaffBulkPostView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffBulkPost( staffs?: StaffBulkPostView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffBulkPost( staffs?: StaffBulkPostView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffBulkPost( staffs?: StaffBulkPostView, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        // this.basePath = 'http://localhost:8016';
        return this.httpClient.post<any>(`${this.basePath}/staff-bulk-post`,
            staffs,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
