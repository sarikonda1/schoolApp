/**
 * Fee
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
import { Configuration, BASE_PATH } from 'app/service/grading-service';
import { CustomHttpUrlEncodingCodec } from 'app/service/base/encoder';

import { BaseUrlConfig, ModuleConfig, FeeModuleConfig } from 'app/url.config';
import { CommonComponent } from 'app/shared/common/common.component';
import { FeeTypeDataView } from 'app/modules/configuration/finance/models/fee-type-data-view';
import { FeeTypeViewModel } from 'app/modules/configuration/finance/models/fee-type-view-model';


@Injectable()
export class FeeTypeService {

    // protected basePath = 'http://localhost:8011';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Fee;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, private commonComponent: CommonComponent, @Optional() @Inject(BASE_PATH)
    basePath: string, @Optional() configuration: Configuration) {
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
     * Get FeeType Details By Id
     * 
     * @param feeTypeViewModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public createFeeTypes(feeTypeViewModel?: FeeTypeViewModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<any>(`${this.basePath}` + FeeModuleConfig._FeeType,
            feeTypeViewModel,
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
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public deleteFeeType(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFeeType.');
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

        return this.httpClient.delete<any>(`${this.basePath}` + FeeModuleConfig._FeeType,
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
     * Get FeeType Details By Id
     * 
     * @param name Gets or Sets Name
     * @param displayName Gets or Sets DisplayName
     * @param schoolFacilityName Gets or Sets SchoolFacilityName
     * @param feeTypeCategoryName Gets or Sets FeeTypeCategoryName
     * @param feeAccountName Gets or Sets FeeAccountName
     * @param feeTermName Gets or Sets FeeTermName
     * @param code Gets or Sets Code
     * @param feeDescription Gets or Sets FeeDescription
     * @param schoolFacilityId Gets or Sets SchoolFacilityId
     * @param feeTermId Gets or Sets FeeTermId
     * @param feeTypeCategoryId Gets or Sets FeeTypeCategoryId
     * @param feeAccountId Gets or Sets FeeAccountId
     * @param isSameForEntireClass Gets or Sets IsSameForEntireClass
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */


    public fetchingFeeTypes(name?: Array<string>, displayName?: Array<string>, schoolFacilityName?: Array<string>, feeTypeCategoryName?: Array<string>,
        feeAccountName?: Array<string>, feeTermName?: Array<string>, code?: Array<string>, feeDescription?: Array<string>, schoolFacilityId?: Array<string>,
        feeTermId?: Array<string>, feeTypeCategoryId?: Array<string>, feeAccountId?: Array<string>, isSameForEntireClass?: Array<number>,
        sortBy?: string, sortOrder?: number, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(name, 'Name', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(displayName, 'DisplayName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolFacilityName, 'SchoolFacilityName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTypeCategoryName, 'FeeTypeCategoryName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeAccountName, 'FeeAccountName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTermName, 'FeeTermName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(code, 'Code', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeDescription, 'FeeDescription', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolFacilityId, 'SchoolFacilityId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTermId, 'FeeTermId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeTypeCategoryId, 'FeeTypeCategoryId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(feeAccountId, 'FeeAccountId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(isSameForEntireClass, 'IsSameForEntireClass', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FetchFeeTypes,
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
     * GetFeeTypesCategories
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getFeeAccounts(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FeeAccounts,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * GetFeeTypesCategories
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getFeeTerms(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FeeTerms,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get FeeType Details By Id
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getFeeTypeById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFeeTypeById.');
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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FeeTypeById,
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
     * GetFeeTypesCategories
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public getFeeTypeCategories(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        // return this.httpClient.get<any>(`${this.basePath}/FeeType/fee-type-categories`,
        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FeeTypeCategories,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get FeeType Details By Id
     * 
     * @param feeTypeDataView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public updateFeeTypes(feeTypeDataView?: FeeTypeDataView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<any>(`${this.basePath}` + FeeModuleConfig._FeeType,
            feeTypeDataView,
            {
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

    public facilities(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._FeeType_FetchFAcilities,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
        * Get FeeTypes Based On Academic Session Id
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
    public getFeeTypesBasedOnAcademicSession(id: number, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getFeeTypesBasedOnAcademicSession(id: number, schoolId?: string
        , instituteId?: string, userId?: string, academicSessionId?: string,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getFeeTypesBasedOnAcademicSession(id: number, schoolId?: string,
        instituteId?: string, userId?: string, academicSessionId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getFeeTypesBasedOnAcademicSession(id: number, schoolId?: string, instituteId?: string, userId?: string, academicSessionId?: string,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFeeTypesBasedOnAcademicSession.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

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
        ];

        return this.httpClient.get<any>(`${this.basePath}/FeeType/academic-session-fee-types`,
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
    * Get feetypes of a School
    * 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public getFeeTypes(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getFeeTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getFeeTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getFeeTypes(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._Get_All_FeeTypes,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
    * Get FeeTypes Based On FeeTerms Id
    * 
    * @param id      
    * @param classId Gets or sets
    * @param schoolBoardId Gets or sets     
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public getSchoolFeeAmountBasedOnFeeTypes(id: number, classId?:  Array<number>, schoolBoardId?: number, 
        observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getSchoolFeeAmountBasedOnFeeTypes(id: number, classId?:  Array<number>, schoolBoardId?: number,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getSchoolFeeAmountBasedOnFeeTypes(id: number, classId?:  Array<number>, schoolBoardId?: number, 
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getSchoolFeeAmountBasedOnFeeTypes(id: number, classId?:  Array<number>, schoolBoardId?: number,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSchoolFeeAmountBasedOnFeeTypes.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        queryParameters = this.commonComponent.setQueryParams(classId, 'ClassId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}` + FeeModuleConfig._Get_All_Amount_FeeTypes,
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