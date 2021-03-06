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

import { Configuration, BASE_PATH } from 'app/service/academic-service';
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';
import { CommonComponent } from 'app/shared/common/common.component';
import { BaseUrlConfig, ModuleConfig, BaseModuleConfig } from 'app/url.config';
import { FacilityView } from '../../../modules/configuration/general/models/facility-view';
import { SchoolFacilityView } from '../../../modules/configuration/general/models/school-facility-view';

@Injectable()
export class SchoolFacilityService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
    // protected basePath = 'http://localhost:8013';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient,
        private commonComponent: CommonComponent, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Method Post which Adds School Facilities in School Facility Table
     * 
     * @param facilityView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public createSchoolFacility(facilityView?: FacilityView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility,
            facilityView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This method will Delete SchoolFacilities with respect to School Facility Id
     * 
     * @param ids 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public deleteSchoolFacility(ids: Array<string>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteSchoolFacility.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (ids) {
            ids.forEach((element) => {
                queryParameters = queryParameters.append('Ids', <any>element);
            });
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

        return this.httpClient.delete<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility,
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
     * Get facility types of a School
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public facilityType(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility_Fetch_FacilityTypes,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
   * Get facilities of a School
   * 
   * @param schoolId SchoolId in Encrypted Form
   * @param instituteId InstituteId in Encrypted Form
   * @param userId UserId in Encrypted Form
   * @param academicSessionId AcademicSessionId in Encrypted Form 
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
    public facilities(schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public facilities(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public facilities(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public facilities(schoolId?: string, instituteId?: string, userId?: string,
        academicSessionId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility_Fetch_Facility_List,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
     * Getting All School Facilities
     * 
     * @param sortBy Gets or Sets of SortBy
     * @param sortOrder Gets or Sets of SortOrder
     * @param facilityName Gets or Sets of FacilityName
     * @param facilityType Gets or Sets of FacilityType
     * @param facilityCode Gets or Sets of FacilityCode
     * @param typeId Gets or sets TypeId
     * @param failedRecords Gets or Sets FailedRecords
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getAllFacilities(sortBy?: string, sortOrder?: 0 | 1 | -1, facilityName?: Array<string>,
        facilityType?: Array<string>, facilityCode?: Array<string>, typeId?: Array<string>,
        failedRecords?: Array<string>, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(facilityName, 'FacilityName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(facilityType, 'FacilityType', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(facilityCode, 'FacilityCode', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(typeId, 'TypeId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(failedRecords, 'FailedRecords', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility_Fetch_Facilities,
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
     * This method will return the Facility Details based on SchoolfacilityId
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getByFacilityId(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByFacilityId.');
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

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility_FacilityById,

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
     * Method Put which Updates School Facility details with respect to School FacilityID
     * 
     * @param schoolFacilityView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public updateSchoolFacility(schoolFacilityView?: SchoolFacilityView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<any>(`${this.basePath}` + BaseModuleConfig._SchoolFacility,
            schoolFacilityView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get All School facilities based on schoolid
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getAllSchoolFacilities(observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header

        return this.httpClient.get<any>(`${this.basePath}` + BaseModuleConfig._School_Facilities,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get All School facilities based on schoolid
     * 
     * @param id 
     * @param authorization access token
     * @param schoolId SchoolId in Encrypted Form
     * @param instituteId InstituteId in Encrypted Form
     * @param userId UserId in Encrypted Form
     * @param academicSessionId AcademicSessionId in Encrypted Form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSchoolFacilitiesByType(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getSchoolFacilitiesByType(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getSchoolFacilitiesByType(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getSchoolFacilitiesByType(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSchoolFacilitiesByType.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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

        return this.httpClient.get<any>(`${this.basePath}/SchoolFacility/school-facilities-by-type`,
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
