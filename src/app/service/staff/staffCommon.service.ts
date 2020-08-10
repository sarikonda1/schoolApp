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
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BASE_PATH } from '../base/variables';
import { Configuration } from '../base/configuration';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from '../../url.config';

@Injectable()
export class StaffCommonService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Teacher;
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
     * Fetch Staff Types
     * 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchStaffTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStaffTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStaffTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStaffTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Staff_Types,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Fetch Staffs
     * 
     * @param authorization access token
     * @param staffTypeCode 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchStaffs(staffTypeCode?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchStaffs(staffTypeCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchStaffs(staffTypeCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchStaffs(staffTypeCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (staffTypeCode !== undefined && staffTypeCode !== null) {
            queryParameters = queryParameters.set('staffTypeCode', <any>staffTypeCode);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Staff_Based_On_Code,
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
