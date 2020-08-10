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
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';
import { BASE_PATH } from '../base/variables';
import { Observable } from 'rxjs/Observable';


import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { Configuration } from '../grading-service';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { SyllabusScheduleView } from 'app/modules/academics/syllabus/models/syllabus-schedule-view';
import { AcademicSessionSyllabusProgressView } from 'app/modules/academics/syllabus/models/academic-session-syllabus-progress-view';
import { RequiredViewModel } from 'app/modules/configuration/general/models/required-view-model';


@Injectable()
export class SyllabusSchedulesService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Student Request Grid
     * 
     * @param authorization access token
     * @param syllabusId Gets or sets
     * @param schoolBoardId Gets or Sets SchoolBoardId
     * @param classIds Gets or sets
     * @param sectionIds Gets or sets
     * @param courseId Gets or sets
     * @param sortOrder Gets or Sets SortOrder
     * @param sortBy Gets or Sets SortBy
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public syllabusSearchProgress(syllabusId?: string, schoolBoardId?: number, classIds?: Array<number>, sectionIds?: Array<number>, courseId?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public syllabusSearchProgress(syllabusId?: string, schoolBoardId?: number, classIds?: Array<number>, sectionIds?: Array<number>, courseId?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public syllabusSearchProgress(syllabusId?: string, schoolBoardId?: number, classIds?: Array<number>, sectionIds?: Array<number>, courseId?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public syllabusSearchProgress(syllabusId?: string, schoolBoardId?: number, classIds?: Array<number>, sectionIds?: Array<number>, courseId?: Array<number>, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (syllabusId !== undefined && syllabusId !== null) {
            queryParameters = queryParameters.set('SyllabusId', <any>syllabusId);
        }
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
        }
        if (classIds) {
            classIds.forEach((element) => {
                queryParameters = queryParameters.append('ClassIds', <any>element);
            })
        }
        if (sectionIds) {
            sectionIds.forEach((element) => {
                queryParameters = queryParameters.append('SectionIds', <any>element);
            })
        }
        if (courseId) {
            courseId.forEach((element) => {
                queryParameters = queryParameters.append('CourseId', <any>element);
            })
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', <any>sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', <any>sortBy);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }

        const headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Progress_Search,
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
     * Add AcademicSession SyllabusSchedule
     * 
     * @param authorization access token
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addAcademicSessionSyllabusSchedule(model?: Array<SyllabusScheduleView>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addAcademicSessionSyllabusSchedule(model?: Array<SyllabusScheduleView>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addAcademicSessionSyllabusSchedule(model?: Array<SyllabusScheduleView>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addAcademicSessionSyllabusSchedule(model?: Array<SyllabusScheduleView>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        const headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_Add,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add AcademicSession SyllabusScheduleProcess
     * 
     * @param authorization access token
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addAcademicSessionSyllabusScheduleProcess(model?: AcademicSessionSyllabusProgressView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addAcademicSessionSyllabusScheduleProcess(model?: AcademicSessionSyllabusProgressView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addAcademicSessionSyllabusScheduleProcess(model?: AcademicSessionSyllabusProgressView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addAcademicSessionSyllabusScheduleProcess(model?: AcademicSessionSyllabusProgressView, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_Progress,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Syllabus ScheduleProcess Details
     * 
     * @param id 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public syllabusScheduleProcessDetails(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public syllabusScheduleProcessDetails(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public syllabusScheduleProcessDetails(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public syllabusScheduleProcessDetails(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling syllabusScheduleProcessDetails.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_Details,
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
     * Student Request Grid
     * 
     * @param authorization access token
     * @param classId Gets or sets
     * @param sectionId Gets or sets
     * @param courseId Gets or sets
     * @param schoolBoardId Gets or sets
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public syllabusScheduleGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public syllabusScheduleGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public syllabusScheduleGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public syllabusScheduleGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', <any>sectionId);
        }
        if (courseId !== undefined && courseId !== null) {
            queryParameters = queryParameters.set('CourseId', <any>courseId);
        }
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_Grid,
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
     * Student Request Grid
     * 
     * @param authorization access token
     * @param classId Gets or sets
     * @param sectionId Gets or sets
     * @param courseId Gets or sets
     * @param schoolBoardId Gets or sets
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public syllabusProgressGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public syllabusProgressGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public syllabusProgressGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public syllabusProgressGet(classId?: number, sectionId?: number, courseId?: number, schoolBoardId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', <any>sectionId);
        }
        if (courseId !== undefined && courseId !== null) {
            queryParameters = queryParameters.set('CourseId', <any>courseId);
        }
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Progress_Get,
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
     * Add SyllabusSubTopics
     * 
     * @param authorization access token
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public scheduleAcademicSyllabus(model?: RequiredViewModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public scheduleAcademicSyllabus(model?: RequiredViewModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public scheduleAcademicSyllabus(model?: RequiredViewModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public scheduleAcademicSyllabus(model?: RequiredViewModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_AS,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
   //////// Dashboard APi's ///////////////////////////////////////



    /**
     * Admin Class Section Syllabus Progress
     * 
     * @param authorization access token
     * @param schoolBoardId Gets or sets
     * @param classId Gets or sets
     * @param sectionId Gets or sets
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public adminClassSyllabusProgress(schoolBoardId?: number, classId?: number, sectionId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public adminClassSyllabusProgress(schoolBoardId?: number, classId?: number, sectionId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public adminClassSyllabusProgress(schoolBoardId?: number, classId?: number, sectionId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public adminClassSyllabusProgress(schoolBoardId?: number, classId?: number, sectionId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', <any>sectionId);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Progress_By_Class,
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
     * Admin Teacher Syllabus Progress
     * 
     * @param id 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public adminTeacherSyllabusProgress(id?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public adminTeacherSyllabusProgress(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public adminTeacherSyllabusProgress(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public adminTeacherSyllabusProgress(id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

       
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Schedule_By_Staff,
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
     * Teacher Syllabus Progress
     * 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public teacherSyllabusProgress(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public teacherSyllabusProgress(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public teacherSyllabusProgress(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public teacherSyllabusProgress(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Progress_By_Teacher,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
     * Teacher Syllabus Progress
     * 
     * @param authorization access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentSyllabusProgress(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentSyllabusProgress(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentSyllabusProgress(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentSyllabusProgress(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Syllabus_Progress_By_Student,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}