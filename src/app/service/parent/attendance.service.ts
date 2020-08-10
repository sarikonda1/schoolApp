/**
 * Parent API
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
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BaseUrlConfig, ModuleConfig } from 'app/url.config';

@Injectable()
export class AttendanceService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Parent;
    // protected basePath = 'http://localhost:8014';
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
     * 
     * 
     * @param authorization access token
     * @param month 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStudentAttendances(date?: Date, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getStudentAttendances(date?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getStudentAttendances(date?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getStudentAttendances(date?: Date, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
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

        return this.httpClient.get<any>(`${this.basePath}/Attendance/student-attendance`,
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
