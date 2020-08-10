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
import { Configuration, BASE_PATH } from '../grading-service';
import { CustomHttpUrlEncodingCodec } from '../base/encoder';
import { BaseUrlConfig, ModuleConfig, CommunicationModuleConfig, BaseModuleConfig } from 'app/url.config';
import { CommunicationConfigurationModel } from 'app/modules/communication/model/communication-configuration-model';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommunicationFetchView } from 'app/models/academics/communication-fetch-view';
import { TransmissionSearchStudentView } from 'app/modules/communication/model/transmission-serach-student--view';
import { TransmissionSearchStaffView } from 'app/modules/communication/model/transmission-search-staff-view';


@Injectable()
export class CommunicationService {

    protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;
   //  protected basePath = 'http://localhost:8013';
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
       * get the CommunicationDetails
       * 
       * @param id 
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
    public communicationDetails(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public communicationDetails(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public communicationDetails(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public communicationDetails(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling communicationDetails.');
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

        return this.httpClient.get<any>(`${this.basePath}` + CommunicationModuleConfig._Communication_Details,
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
  * get the CommunicationDetails
  * 
  * @param id 
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    public approveCommunication(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public approveCommunication(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public approveCommunication(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public approveCommunication(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling approveCommunication.');
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

        return this.httpClient.put<any>(`${this.basePath}` + CommunicationModuleConfig._Approve_Communication,
            null,
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
     * get the CommunicationDetails
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rejectCommunication(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public rejectCommunication(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public rejectCommunication(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public rejectCommunication(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling rejectCommunication.');
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

        return this.httpClient.put<any>(`${this.basePath}` + CommunicationModuleConfig._Reject_Communication,
            null,
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
  * Get List of Communication Types
  * 
  * @param authorization access token
  * @param schoolId SchoolId in Encrypted Form
  * @param instituteId InstituteId in Encrypted Form
  * @param userId UserId in Encrypted Form
  * @param academicSessionId AcademicSessionId in Encrypted Form 
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    public getCommunicationType(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCommunicationType(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCommunicationType(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCommunicationType(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<any>(`${this.basePath}/Communication/communication-types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
   * Get List of Communication Types
   * 
   * @param authorization access token
   * @param model 
   * @param schoolId SchoolId in Encrypted Form
   * @param instituteId InstituteId in Encrypted Form
   * @param userId UserId in Encrypted Form
   * @param academicSessionId AcademicSessionId in Encrypted Form 
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
    public communicationConfiguration(model?: CommunicationConfigurationModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public communicationConfiguration(model?: CommunicationConfigurationModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public communicationConfiguration(model?: CommunicationConfigurationModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public communicationConfiguration(model?: CommunicationConfigurationModel, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
        return this.httpClient.post<any>(`${this.basePath}/Communication/communication-configuration`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
      * Get List of Staff MessageTransmission
      * 
      * @param communicationId CommunicationId
      * @param transmissionDateBegin Gets Or Sets
      * @param transmissionDateEnd Gets Or Sets
      * @param type Gets Or Sets
      * @param status Gets Or Sets
      * @param staffRole Gets Or Sets
      * @param receipientName Gets Or Sets
      * @param receipientContactInfo Gets Or Sets
      * @param sortBy Gets or Sets SortBy
      * @param sortOrder Gets or Sets SortOrder
      * @param pageNumber 
      * @param pageSize 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
    public staffMessageTransmission(model: TransmissionSearchStaffView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public staffMessageTransmission(model: TransmissionSearchStaffView,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public staffMessageTransmission(model: TransmissionSearchStaffView,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public staffMessageTransmission(model: TransmissionSearchStaffView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParamsWithModel(model, queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}/Communication/staff-message-transmission`,
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
     * Get List of Student MessageTransmission
     * 
     * @param communicationId CommunicationId
     * @param transmissionDateBegin Gets Or Sets
     * @param transmissionDateEnd Gets Or Sets
     * @param type Gets Or Sets
     * @param status Gets Or Sets
     * @param classIds Gets Or Sets
     * @param sectionIds Gets Or Sets
     * @param studentName Gets Or Sets
     * @param receipientName Gets Or Sets
     * @param receipientContactInfo Gets Or Sets
     * @param sortBy Gets or Sets SortBy
     * @param sortOrder Gets or Sets SortOrder
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentMessageTransmission(model: TransmissionSearchStudentView, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public studentMessageTransmission(model: TransmissionSearchStudentView, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public studentMessageTransmission(model: TransmissionSearchStudentView, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public studentMessageTransmission(model: TransmissionSearchStudentView, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParamsWithModel(model, queryParameters);
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        return this.httpClient.get<any>(`${this.basePath}/Communication/student-message-transmission`,
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
     * communication details search
     * 
     * @param authorization access token
     * @param studentIds Gets And Sets StudentIds
     * @param studentNames Gets And Sets StudentIds
     * @param communicationTypeId Gets or sets CommunicationTypeId
     * @param communicationType Gets or sets CommunicationType
     * @param schoolBoardId Gets or Sets ClassIds Encrypted Values
     * @param classIds Gets or Sets ClassIds Encrypted Values
     * @param sectionIds Gets or Sets SectionIds Encrypted Values
     * @param statusIds Gets or Sets StatusIds Encrypted Values
     * @param communicationStatus Gets or sets CommunicationStatus
     * @param sender Gets or sets Sender
     * @param receiver Gets or sets Reciever
     * @param title Gets or sets Title
     * @param entryDateBegin Gets or sets EntryDateBegin
     * @param entryDateEnd Gets or sets EntryDateEnd
     * @param approvedBy Gets or sets ApprovedBy
     * @param approvedDateBegin Gets or sets ApprovedDateBegin
     * @param approvedDateEnd Gets or sets ApprovedDateEnd
     * @param sortOrder Gets or Sets SortOrder
     * @param sortBy Gets or Sets SortBy
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communicationDetailsList(studentIds?: Array<string>, studentNames?: Array<string>, communicationTypeId?: Array<number>, communicationType?: string,
         schoolBoardId?: Array<number>, classIds?: Array<number>, sectionIds?: Array<number>, statusIds?: Array<string>, communicationStatus?: string,
          sender?: Array<string>, receiver?: string, title?: string, entryDateBegin?: Date, entryDateEnd?: Date, approvedBy?: Array<string>, 
          approvedDateBegin?: Date, approvedDateEnd?: Date, sortOrder?: 0 | 1 | -1, sortBy?: string, 
          pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public communicationDetailsList(studentIds?: Array<string>, studentNames?: Array<string>, communicationTypeId?: Array<number>, communicationType?: string, 
        schoolBoardId?: Array<number>, classIds?: Array<number>, sectionIds?: Array<number>, statusIds?: Array<string>, communicationStatus?: string, 
        sender?: Array<string>, receiver?: string, title?: string, 
        entryDateBegin?: Date, entryDateEnd?: Date, approvedBy?: Array<string>, approvedDateBegin?: Date, approvedDateEnd?: Date,
         sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public communicationDetailsList(studentIds?: Array<string>, studentNames?: Array<string>, communicationTypeId?: Array<number>, communicationType?: string, 
        schoolBoardId?: Array<number>, classIds?: Array<number>, sectionIds?: Array<number>, statusIds?: Array<string>, communicationStatus?: string, 
        sender?: Array<string>, receiver?: string, title?: string, entryDateBegin?: Date, entryDateEnd?: Date, approvedBy?: Array<string>, 
        approvedDateBegin?: Date, approvedDateEnd?: Date, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, 
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public communicationDetailsList(studentIds?: Array<string>, studentNames?: Array<string>, communicationTypeId?: Array<number>, communicationType?: string,
         schoolBoardId?: Array<number>, classIds?: Array<number>, sectionIds?: Array<number>, statusIds?: Array<string>, communicationStatus?: string, 
         sender?: Array<string>, receiver?: string, title?: string, entryDateBegin?: Date, entryDateEnd?: Date, approvedBy?: Array<string>,
          approvedDateBegin?: Date, approvedDateEnd?: Date, sortOrder?: 0 | 1 | -1, sortBy?: string, pageNumber?: number, pageSize?: number, 
          observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        queryParameters = this.commonComponent.setQueryParams(studentIds, 'StudentIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(studentNames, 'StudentNames', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(communicationTypeId, 'CommunicationTypeId', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(communicationType, 'CommunicationType', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(schoolBoardId, 'SchoolBoardId', queryParameters);

        queryParameters = this.commonComponent.setQueryParams(classIds, 'ClassIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sectionIds, 'SectionIds', queryParameters);

        queryParameters = this.commonComponent.setQueryParams(statusIds, 'StatusIds', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(communicationStatus, 'CommunicationStatus', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sender, 'Sender', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(receiver, 'Receiver', queryParameters);

        queryParameters = this.commonComponent.setQueryParams(title, 'Title', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(entryDateBegin, 'EntryDateBegin', queryParameters);

        queryParameters = this.commonComponent.setQueryParams(entryDateEnd, 'EntryDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(approvedBy, 'ApprovedBy', queryParameters);

        queryParameters = this.commonComponent.setQueryParams(approvedDateBegin, 'ApprovedDateBegin', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(approvedDateEnd, 'ApprovedDateEnd', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
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

        return this.httpClient.get<any>(`${this.basePath}/Communication/communication-search`,
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
     * Get List of Communication Types
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
    public getCommunicationTypeDeliveryOptions(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCommunicationTypeDeliveryOptions(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCommunicationTypeDeliveryOptions(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCommunicationTypeDeliveryOptions(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCommunicationTypeDeliveryOptions.');
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

        return this.httpClient.get<any>(`${this.basePath}/Communication/communication-type-delivery-options`,
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
     * Get Staff
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
    public getStaff(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getStaff(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getStaff(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getStaff(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getStaff.');
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

        return this.httpClient.get<any>(`${this.basePath}/Communication/staff`,
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
* GetAllStatuses
* 
* @param code Gets or sets code
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public getStatus(code: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getStatus(code: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getStatus(code: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getStatus(code: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getStatus.');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', <any>code);
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


        return this.httpClient.get<any>(`${this.basePath}` + CommunicationModuleConfig._Get_Status,           
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