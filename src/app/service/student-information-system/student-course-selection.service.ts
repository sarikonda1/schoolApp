import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { StudentCourseSelectionView } from 'app/modules/academics/student-information-system/model/student-course-selection-view';
import { Configuration } from '../base/configuration';
import { BASE_PATH } from '../base/variables';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { CommonComponent } from 'app/shared/common/common.component';
import { BaseUrlConfig, ModuleConfig } from 'app/url.config';




@Injectable()
export class StudentCourseSelectionService {
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Course;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,
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
     * Assigning student course selections
     * 
     * @param studentCourseSelectionView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentCourseSelectionAssignStudentCoursesPost(studentCourseSelectionView?: StudentCourseSelectionView,
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentCourseSelectionAssignStudentCoursesPost(studentCourseSelectionView?: StudentCourseSelectionView,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentCourseSelectionAssignStudentCoursesPost(studentCourseSelectionView?: StudentCourseSelectionView, observe?: 'events',
        reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentCourseSelectionAssignStudentCoursesPost(studentCourseSelectionView?: StudentCourseSelectionView,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/StudentCourseSelection/assign-student-courses`,
            studentCourseSelectionView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get non mandetory course categories
     * 
     * @param authorization access token
     * @param schoolAcademicSessionStudentId Gets or Sets SchoolAcademicSessionStudentId
     * @param classId Gets or Sets ClassId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicSessionStudentId?: string,
        schoolBoardId?: number, classId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicSessionStudentId?: string,
        schoolBoardId?: number, classId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicSessionStudentId?: string,
        schoolBoardId?: number, classId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentCourseSelectionCoursecategoriesCoursesGet(schoolAcademicSessionStudentId?: string,
        schoolBoardId?: number, classId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(schoolAcademicSessionStudentId, 'SchoolAcademicSessionStudentId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}/StudentCourseSelection/coursecategories-courses`,
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
        * 
        * 
        * @param sortBy Gets or Sets of SortBy
        * @param sortOrder Gets or Sets of SortOrder
        * @param classId Gets Or Sets ClassId
        * @param sectionId Gets Or Sets SectionId
        * @param courseCategoryId Gets Or Sets CourseCategoryId
        * @param studentNames Gets or Sets of StudentNames
        * @param admissionNumbers Gets or Sets of AdmissionNumbers
        * @param rollNumbers Gets or Sets of RollNumbers
        * @param courseIds Gets or Sets of Courses
        * @param pageNumber 
        * @param pageSize 
        * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
        * @param reportProgress flag to report request and response progress.
        */
    public studentCourseSelectionStudentCoursecategoriesGet(sortBy?: string, sortOrder?: 0 | 1 | -1, classId?: number,
        sectionId?: number, courseCategoryId?: number, studentNames?: Array<string>, admissionNumbers?: Array<string>,
        rollNumbers?: Array<string>, courseIds?: Array<string>, pageNumber?: number,
        pageSize?: number, schoolBoardId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentCourseSelectionStudentCoursecategoriesGet(sortBy?: string, sortOrder?: 0 | 1 | -1, classId?: number,
        sectionId?: number, courseCategoryId?: number, studentNames?: Array<string>, admissionNumbers?: Array<string>,
        rollNumbers?: Array<string>, courseIds?: Array<string>, pageNumber?: number,
        pageSize?: number, schoolBoardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentCourseSelectionStudentCoursecategoriesGet(sortBy?: string, sortOrder?: 0 | 1 | -1, classId?: number,
        sectionId?: number, courseCategoryId?: number, studentNames?: Array<string>, admissionNumbers?: Array<string>,
        rollNumbers?: Array<string>, courseIds?: Array<string>, pageNumber?: number,
        pageSize?: number, schoolBoardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentCourseSelectionStudentCoursecategoriesGet(sortBy?: string, sortOrder?: 0 | 1 | -1, classId?: number,
        sectionId?: number, courseCategoryId?: number, studentNames?: Array<string>, admissionNumbers?: Array<string>,
        rollNumbers?: Array<string>, courseIds?: Array<string>, pageNumber?: number,
        pageSize?: number, schoolBoardId?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionId, 'SectionId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(courseCategoryId, 'CourseCategoryId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(admissionNumbers, 'AdmissionNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(rollNumbers, 'RollNumbers', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(courseIds, 'CourseIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);


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

        return this.httpClient.get<any>(`${this.basePath}/StudentCourseSelection/student-coursecategories`,
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
