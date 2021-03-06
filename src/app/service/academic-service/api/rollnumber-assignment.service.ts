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
    HttpClient, HttpHeaders,
    HttpResponse, HttpParams, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';



import { BASE_PATH } from '../../base/variables';
import { Configuration } from '../../base/configuration';
import { RollNumberView } from 'app/models/academics/roll-number-view';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';



@Injectable()
export class RollNumberAssignmentService {

  
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,
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
     * Assign AssigningRollNUmber
     * 
     * @param lstAssignRollNumberView 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assigningRollNUmber(lstAssignRollNumberView?: RollNumberView, schoolId?: string, instituteId?: string, userId?: string, 
        academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public assigningRollNUmber(lstAssignRollNumberView?: RollNumberView, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
         observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public assigningRollNUmber(lstAssignRollNumberView?: RollNumberView, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
         observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public assigningRollNUmber(lstAssignRollNumberView?: RollNumberView,
         schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._RollNumber_Assignment,
            lstAssignRollNumberView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets All Student Details
     * 
     * @param classId Gets or Sets ClassId
     * @param sectionId Gets or Sets SectionId
     * @param rollNumberSortBy Gets or sets RollNumberSortBy (Default SortOrder :FirstName ,LastName ,AdmissionNumber,Gender,GroupName)
     * @param sortOrder Gets or sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStudent(schoolBoardId?: number, classId?: number, sectionId?: number, rollNumberSortBy?: Array<string>, sortOrder?: number, pageNumber?: number, pageSize?: number,
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getStudent(schoolBoardId?: number, classId?: number, sectionId?: number, rollNumberSortBy?: Array<string>, sortOrder?: number, pageNumber?: number, pageSize?: number,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getStudent(schoolBoardId?: number, classId?: number, sectionId?: number, rollNumberSortBy?: Array<string>, sortOrder?: number, pageNumber?: number, pageSize?: number,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getStudent(schoolBoardId?: number, classId?: number, sectionId?: number, rollNumberSortBy?: Array<string>, sortOrder?: number, pageNumber?: number, pageSize?: number,
        observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumberSortBy, 'RollNumberSortBy', queryParameters);
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
        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._Get_Student_Details,
    
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
