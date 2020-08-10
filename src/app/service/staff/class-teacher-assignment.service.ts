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
import { ClassTeacherAssignmentModel } from 'app/modules/staff/staff-information-system/model/class-teacher-assignment-model';
@Injectable()
export class ClassTeacherAssignmentService {

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
     * Get class teachers based on schoolboard id
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
    public getClassTeachers(id?: number,
         observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getClassTeachers(id?: number, 
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getClassTeachers(id?: number, 
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getClassTeachers(id?: number,
         observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        

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
        return this.httpClient.get<any>(`${this.basePath}` +  BaseModuleConfig._Get_Class_Teachers_Managements,
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
     * Update class teacher with respect to class and section
     * 
     * @param authorization access token
     * @param classTeacherAssignmentModel 
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateClassTeacher(classTeacherAssignmentModel?: ClassTeacherAssignmentModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateClassTeacher(classTeacherAssignmentModel?: ClassTeacherAssignmentModel,  observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateClassTeacher(classTeacherAssignmentModel?: ClassTeacherAssignmentModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateClassTeacher(classTeacherAssignmentModel?: ClassTeacherAssignmentModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

       

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

        return this.httpClient.put<any>(`${this.basePath}` +  BaseModuleConfig._Class_Teacher_Update,
            classTeacherAssignmentModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
