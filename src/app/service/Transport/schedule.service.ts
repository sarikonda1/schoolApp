/**
 * Transport
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

import { BASE_PATH } from '../base/variables';
import { Observable } from 'rxjs/Observable';


import { BaseUrlConfig, ModuleConfig, TransportModuleConfig } from 'app/url.config';
import { Configuration } from '../grading-service';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { CommonComponent } from 'app/shared/common/common.component';
import { TransportScheduleUpdateView } from 'app/modules/transportation/routing/model/transport-schedule-update-view';
import { TransportScheduleView } from 'app/modules/transportation/routing/model/transport-schedule-view';


@Injectable()
export class ScheduleService {

    // protected basePath1 = 'http://localhost:8015';
    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Transport;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH)
    basePath: string, @Optional() configuration: Configuration, private commonComponent: CommonComponent) {
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
     * Add TransportSchedules
     * 
     * @param transportScheduleView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSchedule(transportScheduleView?: TransportScheduleView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createSchedule(transportScheduleView?: TransportScheduleView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createSchedule(transportScheduleView?: TransportScheduleView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createSchedule(transportScheduleView?: TransportScheduleView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
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

        return this.httpClient.post<any>(`${this.basePath}` + TransportModuleConfig._Schedule,
            transportScheduleView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get All Vehicle Details
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fetchVehicle(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchVehicle(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchVehicle(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchVehicle(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}` + TransportModuleConfig._Schedule_Vehicle,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get TransportSchedules
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public transportSchedulesDetails(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public transportSchedulesDetails(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public transportSchedulesDetails(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public transportSchedulesDetails(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transportSchedulesDetails.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}` + TransportModuleConfig._Schedule_Details,
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
     * Update TransportSchedules
     * 
     * @param transportScheduleUpdateView 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSchedule(transportScheduleUpdateView?: TransportScheduleUpdateView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSchedule(transportScheduleUpdateView?: TransportScheduleUpdateView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSchedule(transportScheduleUpdateView?: TransportScheduleUpdateView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSchedule(transportScheduleUpdateView?: TransportScheduleUpdateView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
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

        return this.httpClient.put<any>(`${this.basePath}` + TransportModuleConfig._Schedule,
            transportScheduleUpdateView,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get All Transport Schedules
     * 
     * @param sortBy Gets or Sets SortBy
     * @param scheduleName Gets or Sets ScheduleName
     * @param routeTypeId Gets or Sets RouteTypeId
     * @param startTime Gets or Sets StartTime
     * @param startTimeBegin Gets or Sets StartTime
     * @param startTimeEnd Gets or Sets StartTime
     * @param endTimeBegin Gets or Sets EndTime
     * @param endTimeEnd Gets or Sets EndTime
     * @param endTime Gets or Sets EndTime
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public TransportSchedules(sortBy?: string, scheduleName?: Array<string>, routeTypeId?: Array<string>,
        startTime?: string, startTimeBegin?: string, startTimeEnd?: string,
        endTimeBegin?: string, endTimeEnd?: string, endTime?: string,
        sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public TransportSchedules(sortBy?: string, scheduleName?: Array<string>, routeTypeId?: Array<string>,
        startTime?: string, startTimeBegin?: string, startTimeEnd?: string,
        endTimeBegin?: string, endTimeEnd?: string, endTime?: string,
        sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public TransportSchedules(sortBy?: string, scheduleName?: Array<string>, routeTypeId?: Array<string>,
        startTime?: string, startTimeBegin?: string, startTimeEnd?: string,
        endTimeBegin?: string, endTimeEnd?: string, endTime?: string,
        sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public TransportSchedules(sortBy?: string, scheduleName?: Array<string>, routeTypeId?: Array<string>,
        startTime?: string, startTimeBegin?: string, startTimeEnd?: string,
        endTimeBegin?: string, endTimeEnd?: string, endTime?: string,
        sortOrder?: 0 | 1 | -1, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(scheduleName, 'ScheduleName', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(routeTypeId, 'RouteTypeId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startTime, 'StartTime', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startTimeBegin, 'StartTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(startTimeEnd, 'StartTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endTime, 'EndTime', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endTimeBegin, 'EndTimeBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(endTimeEnd, 'EndTimeEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}` + TransportModuleConfig._Schedule,
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
    * Get All Transport Routes Details
    * 
    * @param id 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public fetchTransportRoutes(id?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public fetchTransportRoutes(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public fetchTransportRoutes(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public fetchTransportRoutes(id?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}` + TransportModuleConfig._Schedule_Transport_Routes,
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
