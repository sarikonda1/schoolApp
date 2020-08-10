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
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { BaseUrlConfig, ModuleConfig } from '../../../url.config';
import { Configuration } from '../../base/configuration';
import { BASE_PATH } from '../../base/variables';
import { Observable } from 'rxjs';
import { ClassAssesmentGradesParamListViewModel } from '../../../modules/academics/grading/models/class-assesment-grades-param-list-view-model';
import { CustomHttpUrlEncodingCodec } from '../../base/encoder';
import { CommonComponent } from '../../../shared/common/common.component';



@Injectable()
export class StudentAssessmentGradeService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    // protected basePath = 'http://localhost:8030';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();


    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string,
        private commonComponent: CommonComponent,
        @Optional() configuration: Configuration) {
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
     * Create Assesment Grades
     * 
     * @param classAssesmentGrades 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createClassAssessmentParameters(classAssesmentGrades?: ClassAssesmentGradesParamListViewModel,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createClassAssessmentParameters(classAssesmentGrades?: ClassAssesmentGradesParamListViewModel, observe?: 'events',
        reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createClassAssessmentParameters(classAssesmentGrades?: ClassAssesmentGradesParamListViewModel, observe?: 'body',
        reportProgress?: boolean): Observable<any>;
    public createClassAssessmentParameters(classAssesmentGrades?: ClassAssesmentGradesParamListViewModel, observe: any = 'body',
        reportProgress: boolean = false): Observable<any> {



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

        return this.httpClient.post<any>(`${this.basePath}/StudentAssessmentGrade/class-assessment-grades`,
            classAssesmentGrades,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all for AssessmentGrades
     * 
     * @param authorization access token
     * @param classAssessmentGradesForm Gets or sets classAssessmentGradesForm
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchAssessmentGrades(classAssessmentGradesForm, isShowAll?: boolean,
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchAssessmentGrades(classAssessmentGradesForm, isShowAll?: boolean,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchAssessmentGrades(classAssessmentGradesForm, isShowAll?: boolean,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchAssessmentGrades(classAssessmentGradesForm, isShowAll?: boolean,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.schoolBoardId, 'BoardId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.gradingTermId, 'GradingTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentGroupId, 'AssesmentGroupId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentCategoryId, 'AssesmentCateoryId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.assessmentParameterId, 'AssesmentParameterId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(isShowAll, 'isShowAll', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classAssessmentGradesForm.schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);


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

        return this.httpClient.get<any>(`${this.basePath}/StudentAssessmentGrade/students-assessment-grades`,
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
     * Get all for Student AssessmentGrades
     * 
     * @param classId Gets or sets ClassId
     * @param sectionId Gets or sets SectionId
     * @param schoolBoardId Gets or sets SchoolBoardId
     * @param gradingTermId Gets or sets GradingTermId
     * @param schoolAcademicSessionStudentId Gets or sets SchoolAcademicSessionStudentId
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param messages 
     * @param statusCode 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public studentAssessmentGrades(classAssessmentGradesForm, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (classAssessmentGradesForm.classId !== undefined && classAssessmentGradesForm.classId !== null) {
            queryParameters = queryParameters.set('ClassId', <any>classAssessmentGradesForm.classId);
        }
        if (classAssessmentGradesForm.sectionId !== undefined && classAssessmentGradesForm.sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', <any>classAssessmentGradesForm.sectionId);
        }
        if (classAssessmentGradesForm.schoolBoardId !== undefined && classAssessmentGradesForm.schoolBoardId !== null) {
            queryParameters = queryParameters.set('SchoolBoardId', <any>classAssessmentGradesForm.schoolBoardId);
        }
        if (classAssessmentGradesForm.gradingTermId !== undefined && classAssessmentGradesForm.gradingTermId !== null) {
            queryParameters = queryParameters.set('GradingTermId', <any>classAssessmentGradesForm.gradingTermId);
        }
        if (classAssessmentGradesForm.schoolAcademicSessionStudentId !== undefined && classAssessmentGradesForm.schoolAcademicSessionStudentId !== null) {
            queryParameters = queryParameters.set('SchoolAcademicSessionStudentId', <any>classAssessmentGradesForm.schoolAcademicSessionStudentId);
        }
        if (classAssessmentGradesForm.sortBy !== undefined && classAssessmentGradesForm.sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', <any>classAssessmentGradesForm.sortBy);
        }
        if (classAssessmentGradesForm.sortOrder !== undefined && classAssessmentGradesForm.sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', <any>classAssessmentGradesForm.sortOrder);
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

        return this.httpClient.get<any>(`${this.basePath}/StudentAssessmentGrade/student-assessments`,
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