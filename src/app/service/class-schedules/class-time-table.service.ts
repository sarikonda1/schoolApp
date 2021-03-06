/**
 * Course
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
import { ModuleConfig, BaseUrlConfig, CourseModuleConfig } from 'app/url.config';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { ClassPeriodsDataView } from 'app/modules/configuration/class-schedules/model/class-periods-data-view';
import { ClassTimetableUpdateView } from 'app/modules/configuration/class-schedules/model/class-timetable-update-view';
import { CommonComponent } from 'app/shared/common/common.component';


@Injectable()
export class ClassTimetableService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Course;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, 
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
    * Get All Courses    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableClassPeriodTypesGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassPeriodTypesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassPeriodTypesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassPeriodTypesGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Class_Period_Type,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Get Class Timetable
    *     
    * @param classId Gets or Sets ClassId
    * @param sectionId Gets or Sets SectionId
    * @param boardId Gets or Sets BoardId
    * @param classTimetableTemplateId Gets or Sets BoardId    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableClassTimetableGet(classId?: number, sectionId?: number, 
        boardId?: number, classTimetableTemplateId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassTimetableGet(classId?: number, sectionId?: number, 
        boardId?: number, classTimetableTemplateId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassTimetableGet(classId?: number, sectionId?: number, 
        boardId?: number, classTimetableTemplateId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassTimetableGet(classId?: number, sectionId?: number, 
        boardId?: number, classTimetableTemplateId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
       
       
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(boardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classTimetableTemplateId, 'classTimetableTemplateId', queryParameters);        

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Class_Timetable,
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
     * Get Template Details
     *     
     * @param templateId Gets or Sets      
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classTimetableTemplateDetailsGet(templateId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableTemplateDetailsGet(templateId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableTemplateDetailsGet(templateId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableTemplateDetailsGet(templateId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (templateId !== undefined && templateId !== null) {
            queryParameters = queryParameters.set('TemplateId', <any>templateId);
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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Template_Details,
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
 * Get Class Timetable details by ClassId,SectionId,TemplateId,StartDate(Nullable) and EndDate(Nullable)
 *  
 * @param classId Gets or Sets ClassId
 * @param sectionId Gets or Sets SectionId
 * @param classTimeTableId Gets or Sets ClassTimeTableId
 * @param startDate Gets or Sets StartDate,DateFormat MM-dd-YYYY
 * @param endDate Gets or Sets EndDate,DateFormat MM-dd-YYYY 
 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
 * @param reportProgress flag to report request and response progress.
 */
    public classTimetableClassTimetableByIdGet(classId?: number, sectionId?: number, classTimeTableId?: string, 
        startDate?: Date, endDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassTimetableByIdGet(classId?: number, sectionId?: number, classTimeTableId?: string, 
        startDate?: Date, endDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassTimetableByIdGet(classId?: number, sectionId?: number, classTimeTableId?: string, 
        startDate?: Date, endDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassTimetableByIdGet(classId?: number, sectionId?: number, classTimeTableId?: string, 
        startDate?: Date, endDate?: Date, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

       
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classTimeTableId, 'ClassTimeTableId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startDate, 'StartDate', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endDate, 'EndDate', queryParameters);

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_By_Id,
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
    * Add Class Timetable      
    * @param classPeriodAddView    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableClassTimetableStaffCoursePost(classPeriodAddView?: ClassPeriodsDataView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassTimetableStaffCoursePost(classPeriodAddView?: ClassPeriodsDataView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassTimetableStaffCoursePost(classPeriodAddView?: ClassPeriodsDataView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassTimetableStaffCoursePost(classPeriodAddView?: ClassPeriodsDataView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Staff_Course,
            classPeriodAddView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
      * Get ClassTimetable Templates          
      * @param sectionId Gets or sets Id
      * @param classId Gets or sets Id
      * @param boardId Gets or sets Id     
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
    public classTimetableClassTimetableTemplatesGet(sectionId?: number, classId?: number, boardId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassTimetableTemplatesGet(sectionId?: number, classId?: number, 
        boardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassTimetableTemplatesGet(sectionId?: number, classId?: number, 
        boardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassTimetableTemplatesGet(sectionId?: number, classId?: number, 
        boardId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);  
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(boardId, 'BoardId', queryParameters);               

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Templates,
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
    * Update Class Timetable    
    * @param classTimetableUpdateView    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableClassTimetableUpdatePut(classTimetableUpdateView?: ClassTimetableUpdateView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassTimetableUpdatePut(classTimetableUpdateView?: ClassTimetableUpdateView, 
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassTimetableUpdatePut(classTimetableUpdateView?: ClassTimetableUpdateView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassTimetableUpdatePut(classTimetableUpdateView?: ClassTimetableUpdateView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.put<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Update,
            classTimetableUpdateView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Get All Courses   
    * @param boardId Gets or sets BoardId
    * @param classId Gets or sets ClassId   
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableCoursesGet(boardId?: number, classId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableCoursesGet(boardId?: number, classId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableCoursesGet(boardId?: number, classId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableCoursesGet(boardId?: number, classId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
      
        queryParameters = this.commonComponent.setQueryParams(boardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);      

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Courses,
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
    * Get All Sections         
    * @param classId Gets or sets ClassId   
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableSectionsGet(classId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableSectionsGet(classId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableSectionsGet(classId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableSectionsGet(classId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Sections,
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
    * Get All Staff    
    * @param id    
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableStaffGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableStaffGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableStaffGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableStaffGet(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling classTimetableStaffGet.');
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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Staff,
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
    * Get All Templates       
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public classTimetableTemplatesGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableTemplatesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableTemplatesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableTemplatesGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Template,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
* Delete ClassTimetable By classtimetableId
* 
* @param classId Gets or Sets ClassId
* @param sectionId Gets or Sets SectionId
* @param classTimetableTemplateId Gets or Sets BoardId*
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public classTimetableClassPeriodsDelete(classId?: number, sectionId?: number, classTimetableTemplateId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classTimetableClassPeriodsDelete(classId?: number, sectionId?: number, classTimetableTemplateId?: string,
         observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classTimetableClassPeriodsDelete(classId?: number, sectionId?: number, classTimetableTemplateId?: string,
         observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classTimetableClassPeriodsDelete(classId?: number, sectionId?: number, classTimetableTemplateId?: string,
         observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', <any>sectionId);
        }
        if (classTimetableTemplateId !== undefined && classTimetableTemplateId !== null) {
            queryParameters = queryParameters.set('ClassTimetableTemplateId', <any>classTimetableTemplateId);
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

        return this.httpClient.delete<any>(`${this.basePath}` + CourseModuleConfig._Class_Timetable_Class_Periods,
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
