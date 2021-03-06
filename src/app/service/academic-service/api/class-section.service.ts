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

import { Configuration, BASE_PATH } from '.';
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';
import { BaseUrlConfig, ModuleConfig, CourseModuleConfig } from '../../../url.config';
import { CommonComponent } from '../../../shared/common/common.component';


@Injectable()
export class ClassSectionService {
   // protected basePath = 'http://localhost:8012';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Course;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, private commonComponent: CommonComponent,
         @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Get List of SchoolAcademicClassSections based on AcademicId,BoardId(Nullable) and ClassId
     * 
     * @param schoolBoardId Gets or sets School Board ID
     * @param classId Gets or sets ClassId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schoolAcademicClassSections(schoolBoardId?: number, classId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schoolAcademicClassSections(schoolBoardId?: number, classId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schoolAcademicClassSections(schoolBoardId?: number, classId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schoolAcademicClassSections(schoolBoardId?: number, classId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._GradeSetup_schoolacademicclasssections,
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
     * Get List of SchoolAcademicClasses based on AcademicId and BoardId(Nullable)
     * 
     * @param schoolBoardId Gets or sets School Board ID
     * @param classId Gets or sets ClassId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schoolAcademicClasses(schoolBoardId?: number, classId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schoolAcademicClasses(schoolBoardId?: number, classId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schoolAcademicClasses(schoolBoardId?: number, classId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schoolAcademicClasses(schoolBoardId?: number, classId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (schoolBoardId !== undefined && schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>schoolBoardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
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

        // return this.httpClient.get<any>(`${this.basePath}/GradeSetup/schoolacademicclasses`,
        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._GradeSetup_schoolacademicclasses,

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
     * Get List of School Boards Based On SchoolId
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schoolBoards(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schoolBoards(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schoolBoards(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schoolBoards(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        // return this.httpClient.get<any>(`${this.basePath}/GradeSetup/schoolboards`,
        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._GradeSetup_schoolBoards,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
