import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CommonComponent } from 'app/shared/common/common.component';
import { BaseUrlConfig, ModuleConfig } from 'app/url.config';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';

@Injectable()
export class TeachersSchedulesService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Teacher;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string,
     @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * Method to get teacher schedule by TeacherId and TimetableId
     * 
     * @param authorization access token
     * @param teacherId Gets or Sets TeacherId
     * @param timeTableId Gets or Sets TimeTableId
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeacherSchedule(teacherId?: number, timeTableId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getTeacherSchedule(teacherId?: number, timeTableId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getTeacherSchedule(teacherId?: number, timeTableId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getTeacherSchedule(teacherId?: number, timeTableId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        queryParameters = this.commonComponent.setQueryParams(teacherId, 'TeacherId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(timeTableId, 'TimeTableId', queryParameters);

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

        return this.httpClient.get<any>(`${this.basePath}/TeachersSchedules/teacher-schedule`,
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
     * Method to get teacher schedule by TeacherId and TimetableId
     * 
     * @param authorization access token
     * @param id 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeacherTimeTableById(id?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getTeacherTimeTableById(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getTeacherTimeTableById(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getTeacherTimeTableById(id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
            queryParameters = this.commonComponent.setQueryParams(id, 'Id', queryParameters);

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

        return this.httpClient.get<any>(`${this.basePath}/TeachersSchedules/teacher-timetable-dropdown`,
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
