import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Configuration } from '../base/configuration';
import { Inject, Optional, Injectable } from '@angular/core';
import { BASE_PATH } from '../base/variables';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { Observable } from 'rxjs';
import { CommonComponent } from 'app/shared/common/common.component';
import { BaseUrlConfig, ModuleConfig, TeacherModuleConfig, BaseModuleConfig } from 'app/url.config';
import { JobApplicationCommentsView } from 'app/modules/staff/staff-admissions/model/job-application-comments-view';
import { JobApplicationViewModel } from 'app/modules/staff/staff-admissions/model/job-application-view-model';

@Injectable()
export class StaffJobApplicationService {

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
     * Get all job applications
     * 
     * @param applicantName Gets or Sets ApplicantName
     * @param applicantReferenceNo Gets or Sets ApplicantReferenceNo
     * @param email Gets or Sets Email
     * @param status Gets or Sets Status
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchJobApplications(applicantName?: Array<string>, applicantReferenceNo?: Array<string>, email?: Array<string>, status?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchJobApplications(applicantName?: Array<string>, applicantReferenceNo?: Array<string>, email?: Array<string>, status?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchJobApplications(applicantName?: Array<string>, applicantReferenceNo?: Array<string>, email?: Array<string>, status?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchJobApplications(applicantName?: Array<string>, applicantReferenceNo?: Array<string>, email?: Array<string>, status?: Array<string>,
        sortBy?: string, sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(applicantName, 'ApplicantName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(applicantReferenceNo, 'ApplicantReferenceNo', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(email, 'Email', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(status, 'Status', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Staff_Job_Application,
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
     * Reject Job Application
     * 
     * @param jobApplicationCommentsView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rejectJobApplication(jobApplicationCommentsView?: JobApplicationCommentsView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public rejectJobApplication(jobApplicationCommentsView?: JobApplicationCommentsView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public rejectJobApplication(jobApplicationCommentsView?: JobApplicationCommentsView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public rejectJobApplication(jobApplicationCommentsView?: JobApplicationCommentsView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<any>(`${this.basePath}` + TeacherModuleConfig._Reject_Job_Application,
            jobApplicationCommentsView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Get all staff details
    * 
    * @param id     
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public fetchStaffDetails(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStaffDetails(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStaffDetails(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStaffDetails(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fetchStaffDetails.');
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Fetch_Staff_Details,
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
    * Fetch Staff Types
    *     
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public fetchStaffTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStaffTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStaffTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStaffTypes(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Staff_Type_Common_Request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* CreateJobApplication
* 
* @param authorization access token
* @param jobApplicationViewModel 
* @param schoolId SchoolId in Encrypted Form
* @param instituteId InstituteId in Encrypted Form
* @param userId UserId in Encrypted Form
* @param academicSessionId AcademicSessionId in Encrypted Form 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public createJobApplication(jobApplicationViewModel?: JobApplicationViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createJobApplication(jobApplicationViewModel?: JobApplicationViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createJobApplication(jobApplicationViewModel?: JobApplicationViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createJobApplication(jobApplicationViewModel?: JobApplicationViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + TeacherModuleConfig._Create_Job_Application,
            jobApplicationViewModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
    * Get Marital StatusTypes
    * 
    * @param authorization access token
    * @param schoolId SchoolId in Encrypted Form
    * @param instituteId InstituteId in Encrypted Form
    * @param userId UserId in Encrypted Form
    * @param academicSessionId AcademicSessionId in Encrypted Form 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public fetchMaritalStatusTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchMaritalStatusTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchMaritalStatusTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchMaritalStatusTypes(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` +  BaseModuleConfig._Marital_Status_Types,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get JobApplication Data
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public jobApplicationData(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public jobApplicationData(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public jobApplicationData(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public jobApplicationData(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling jobApplicationData.');
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Job_Application_Details,
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
     * Fetch Class Teacher Details by StudentId
     * 
     * @param id Gets or Sets
     * @param boardId Gets or Sets
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchStaffDetailsByStudentId(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStaffDetailsByStudentId(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStaffDetailsByStudentId(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStaffDetailsByStudentId(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
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

        return this.httpClient.get<any>(`${this.basePath}/staff-by-studentId`,
            { 
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
