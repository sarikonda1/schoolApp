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
import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration, BASE_PATH } from '../grading-service';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BaseUrlConfig, ModuleConfig, TeacherModuleConfig } from 'app/url.config';
import { StaffAttendanceAddResultView } from 'app/models/staff/staff-attendance-add-result-view';
import { element } from '@angular/core/src/render3';
import { CommonComponent } from 'app/shared/common/common.component';




@Injectable()
export class StaffAttendanceService {

   protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Teacher;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) 
    basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * StaffAttendances Search
     * 
     * @param authorization access token
     * @param staffAttendanceAddView 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public markStaffAttendances(staffAttendanceAddView?: StaffAttendanceAddResultView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public markStaffAttendances(staffAttendanceAddView?: StaffAttendanceAddResultView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public markStaffAttendances(staffAttendanceAddView?: StaffAttendanceAddResultView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public markStaffAttendances(staffAttendanceAddView?: StaffAttendanceAddResultView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}` + TeacherModuleConfig._Staff_MarkAttendance,
            staffAttendanceAddView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * StaffAttendances Search
     * 
     * @param authorization access token
     * @param staffNames Gets or Sets SatffNames
     * @param attendanceDate Gets or Sets AttendanceDate
     * @param departments Gets or Sets Department
     * @param staffCodes Gets or Sets EmployeeCode
     * @param absentOrPresents Gets or Sets AbsentOrPresents
     * @param inTime Gets or Sets InTimeOutTimeRange
     * @param outTime Gets or Sets InTimeOutTimeRange
     * @param sortOrder Gets or Sets SortColumn
     * @param sortBy Gets or Sets SortBy-\&quot;\&quot;
     * @param pageNumber 
     * @param pageSize 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public staffAttendances(staffNames?: Array<string>, attendanceDate?: Date,
         departments?: Array<string>, staffCodes?: Array<string>, 
         absentOrPresents?: Array<string>, inTime?: string, inTimeBegin?: string, 
         inTimeEnd?: string, outTime?: string, outTimeBegin?: string, outTimeEnd?: string, sortOrder?: 0 | 1 | -1, sortBy?: string,
         pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffAttendances(staffNames?: Array<string>, attendanceDate?: Date, departments?: Array<string>, staffCodes?: Array<string>, absentOrPresents?: Array<string>, 
        inTime?: string, inTimeBegin?: string, inTimeEnd?: string, outTime?: string, 
        outTimeBegin?: string, outTimeEnd?: string, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number,
        pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffAttendances(staffNames?: Array<string>, attendanceDate?: Date, departments?: Array<string>, staffCodes?: Array<string>, absentOrPresents?: Array<string>, 
        inTime?: string, inTimeBegin?: string, inTimeEnd?: string, outTime?: string, 
        outTimeBegin?: string, outTimeEnd?: string, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number,
         pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffAttendances(staffNames?: Array<string>, attendanceDate?: Date, departments?: Array<string>, staffCodes?: Array<string>, absentOrPresents?: Array<string>, 
        inTime?: string, inTimeBegin?: string, inTimeEnd?: string, outTime?: string, 
        outTimeBegin?: string, outTimeEnd?: string, sortOrder?: 0 | 1 | -1, sortBy?: string,
         pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        queryParameters = this.commonComponent.setQueryParams(staffNames, 'StaffNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(attendanceDate, 'AttendanceDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(departments, 'Departments', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(staffCodes, 'StaffCodes', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTimeBegin, 'InTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTimeEnd, 'InTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTimeBegin, 'OutTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTimeEnd, 'OutTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(absentOrPresents, 'AbsentOrPresents', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(inTime, 'InTime', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(outTime, 'OutTime', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + TeacherModuleConfig._Staff_Attendance,
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