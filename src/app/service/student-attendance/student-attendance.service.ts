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

import { Observable } from 'rxjs/Observable';
import { ClassAttendanceView } from 'app/modules/academics/attendance/model/class-attendance-view';
import { StudentAttendanceAddView } from 'app/modules/academics/attendance/model/student-attendance-add-view';
import { BaseModuleConfig, BaseUrlConfig, ModuleConfig } from 'app/url.config';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CommonComponent } from '../../shared/common/common.component';

import { CustomHttpUrlEncodingCodec } from '../base/encoder';



@Injectable()
export class StudentAttendanceService {
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
     * MarkAttendance
     *
     * @param authorization access token
     * @param classAttendanceView
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public markAttendance(classAttendanceView?: ClassAttendanceView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public markAttendance(classAttendanceView?: ClassAttendanceView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public markAttendance(classAttendanceView?: ClassAttendanceView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public markAttendance(classAttendanceView?: ClassAttendanceView, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}/StudentAttendance/mark-attendance`,
        // return this.httpClient.post<any>('http://localhost:8013/StudentAttendance/mark-attendance',
            classAttendanceView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * MarkStudentAbsentPresent
     *
     * @param authorization access token
     * @param studentAttendanceStatusView
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public markStudentAbsentPresent(studentAttendanceStatusView?: StudentAttendanceAddView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public markStudentAbsentPresent(studentAttendanceStatusView?: StudentAttendanceAddView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public markStudentAbsentPresent(studentAttendanceStatusView?: StudentAttendanceAddView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public markStudentAbsentPresent(studentAttendanceStatusView?: StudentAttendanceAddView, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
        
        return this.httpClient.post<any>(`${this.basePath}/StudentAttendance/student-attendance`,

        // return this.httpClient.post<any>('http://localhost:8013/StudentAttendance/student-attendance',
            studentAttendanceStatusView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * StudentAttendances Search
     *
     * @param authorization access token
     * @param studentNames Gets or Sets StudentNames
     * @param attendanceDate Gets or Sets AttendanceDate
     * @param admissionNumber Gets or Sets AdmissionNumber
     * @param rollNumber Gets or Sets RollNumbers
     * @param attendanceStatuses Gets or Sets AttendanceStatuses
     * @param classIds Gets or Sets ClassIds
     * @param sectionIds Gets or Sets CurrentSectionName
     * @param absentOrPresents Gets or Sets CurrentSectionName
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy-\&quot;StudentName ParentName AdmissionNumber Class Status DOB\&quot;
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentAttendances(studentNames?: Array<string>, attendanceDate?: any,
                              admissionNumber?: Array<string>,
                              rollNumber?: Array<string>,
                              classIds?: Array<string>, sectionIds?: Array<string>,
                              absentOrPresents?: Array<string>, sortOrder?: 0 | 1 | -1,
                              sortBy?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentAttendances(studentNames?: Array<string>, attendanceDate?: any, admissionNumber?: Array<string>,
                              rollNumber?: Array<string>, classIds?: Array<string>,
                              sectionIds?: Array<string>, absentOrPresents?: Array<string>, sortOrder?: 0 | 1 | -1,
                              sortBy?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentAttendances(studentNames?: Array<string>, attendanceDate?: any, admissionNumber?: Array<string>,
                              rollNumber?: Array<string>, classIds?: Array<string>,
                              sectionIds?: Array<string>, absentOrPresents?: Array<string>, sortOrder?: 0 | 1 | -1,
                              sortBy?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentAttendances(studentNames?: Array<string>, attendanceDate?: any, admissionNumber?: Array<string>,
                              rollNumber?: Array<string>, classIds?: Array<string>,
                              sectionIds?: Array<string>, absentOrPresents?: Array<string>, sortOrder?: 0 | 1 | -1,
                              sortBy?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (studentNames) {
            studentNames.forEach((element) => {
                queryParameters = queryParameters.append('StudentNames', <any>element);
            });
        }
        if (attendanceDate !== undefined && attendanceDate !== null) {
            queryParameters = queryParameters.set('AttendanceDate', attendanceDate);
        }
        if (admissionNumber) {
            admissionNumber.forEach((element) => {
                queryParameters = queryParameters.append('AdmissionNumber', <any>element);
            });
        }
        if (rollNumber) {
            rollNumber.forEach((element) => {
                queryParameters = queryParameters.append('RollNumber', <any>element);
            });
        }
        if (classIds) {
            classIds.forEach((element) => {
                queryParameters = queryParameters.append('ClassIds', <any>element);
            });
        }
        if (sectionIds) {
            sectionIds.forEach((element) => {
                queryParameters = queryParameters.append('SectionIds', <any>element);
            });
        }
        if (absentOrPresents) {
            absentOrPresents.forEach((element) => {
                queryParameters = queryParameters.append('AbsentOrPresents', <any>element);
            });
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', <any>sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', <any>sortBy);
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

        return this.httpClient.get<any>(`${this.basePath}/StudentAttendance`,
        // return this.httpClient.get<any>('http://localhost:8013/StudentAttendance',
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