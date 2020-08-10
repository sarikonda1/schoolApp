import { Inject, Injectable, Optional, ViewChild, TemplateRef } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { formatDate } from '@angular/common';

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { DropDownModel } from 'app/models/drop-down-view';
import * as moment from 'moment';
import { SchoolService } from './manage-school/school.service';
import { LocalizationService } from '../modules/manage-role-right/service/localization.service';
import { BaseUrlConfig, CourseModuleConfig, ModuleConfig } from '../url.config';
import { Configuration } from './base/configuration';
import { BASE_PATH } from './base/variables';
import { CustomHttpUrlEncodingCodec } from './base/encoder';
import { AppSettings } from 'app/app.constants';
import { Router } from '@angular/router';


@Injectable()
export class CommonService {
  public selDate: IMyDate = { year: 0, month: 0, day: 0 };
  translatedData: string;
  private showOverlay = new ReplaySubject<any>();
  private rolesDropDownCall = new BehaviorSubject<any>('');
  private subject = new Subject();
  menuOpen = new BehaviorSubject<number>(0);
  protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Course;
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  private isClear = new ReplaySubject<any>();
  public loggedInUserType = new Subject<string>();

  processedData = new ReplaySubject<any>();

  constructor(
    private httpClient: HttpClient,
    private _translateService: TranslateService,
    private dialogRef: MatDialog,
    private schoolService: SchoolService,
    private localizationService: LocalizationService,
    private router: Router,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration,

  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  setOverlay(ovarLay: any): void {
    this.showOverlay.next({ overLay: ovarLay });
  }

  getOverlay(): Observable<any> {
    return this.showOverlay.asObservable();
  }

  setClearCorrection(clear: any): void {
    this.isClear.next({ clear: clear });
  }

  isCorrectionClear(): Observable<any> {
    return this.isClear.asObservable();
  }

  dropDown(ovarLay: any): void {
    this.rolesDropDownCall.next({ overLay: ovarLay });
  }

  getdropDown(): Observable<any> {
    return this.rolesDropDownCall.asObservable();
  }

  sendSchoolId(): void {
    this.subject.next({
      isSchoolAdded: true,
      userAccessId: +this.getTokenParam('_ui')
    });
  }

  sendAcademicSessionId(): void {
    if (this.getTokenParam('_ut') === AppSettings.INSTITUTE_ADMIN){
      this.subject.next({
        isAcaemicSessionAdded: true,
        schoolId: +this.getTokenParam('_si')
      });
    }
    if (this.getTokenParam('_ut') === AppSettings.ADMIN){
      this.subject.next({
        isAcaemicSessionAdded: true,
        userAccessId: +this.getTokenParam('_ui')
      });
    }
  }
  getTokenParam(key: string): string {
    const jwt = localStorage.getItem('access_token');
    const jwtData = jwt.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    if (decodedJwtData[key] !== undefined && decodedJwtData[key] !== null) {
      return decodedJwtData[key];
    } else {
      return null;
    }
  }
  sendRightsByUser(rights: any): void {
    this.subject.next({ rights: rights });
  }

  getRightsByUser(): Observable<any> {
    return this.subject.asObservable();
  }

  getAcademicSessionId(): Observable<any> {
    return this.subject.asObservable();
  }

  getSchoolId(): Observable<any> {
    return this.subject.asObservable();
  }

  customDateFormat(data: string, format: string): any {
    return {
      // date: formatDate(data, format, 'en-US'),
      date: moment(data).format(format)
    };
  }

  customCurrencyFormat(data: number): string | number {
    if (data != null) {
      return '₹' + data;
    } else {
      return data;
    }
  }
  customPercentageFormat(data: number): string | number {
    if (data != null) {
      return '%' + data;
    } else {
      return data;
    }
  }

  seldate(data: string): object {
    const d: Date = new Date(data);
    return (this.selDate = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });
  }

  sendDate(data: any): void {
    this.subject.next({ date: data });
  }

  getDate(): Observable<any> {
    return this.subject.asObservable();
  }

  sendStudentId(data: any): void {
    this.subject.next({ studentId: data });
  }
  getStudentId(): Observable<any> {
    return this.subject.asObservable();
  }

  sendStudentAcademicSessionId(data: any): void {
    this.subject.next({ studentAcademicSessionId: data });
  }
  getStudentAcademicSessionId(): Observable<any> {
    return this.subject.asObservable();
  }

  getLaunguage(): Observable<any> {
    return this.httpClient.get('assets/language/language.json');
  }

  getTranslation(key: string, params?: any): string {
    let result: any;
    this._translateService.get(key, params).subscribe((res: string) => {
      result = res;
    });
    return result;
  }
  // translation
  translateData(data: string): string {
    this._translateService.get(data).subscribe((res: string) => {
      this.translatedData = res;
    });
    return this.translatedData;
  }
  // end

  // commonTablPagination(tabSettings: any) {
  getTableLSObj(tabSettings: any): void {
    const pagnObject = JSON.parse(localStorage.getItem('_tc'));
    if (pagnObject && tabSettings && pagnObject[tabSettings.componentName]) {
      if (!tabSettings.model){
        tabSettings.model = {};
      }
      tabSettings.model['pageSize'] =
        pagnObject[tabSettings.componentName].pageSize;
      tabSettings.model['pageNumber'] =
        pagnObject[tabSettings.componentName].pageIndex;
      if (
        pagnObject[tabSettings.componentName].sortColumn !== undefined &&
        pagnObject[tabSettings.componentName].sortColumn !== ''
      ) {
        tabSettings.model['sortBy'] =
          pagnObject[tabSettings.componentName].sortColumn
            .charAt(0)
            .toUpperCase() +
          pagnObject[tabSettings.componentName].sortColumn.slice(1);
      }
      tabSettings.model['sortOrder'] =
        pagnObject[tabSettings.componentName].sortOrder;
    }
  }

  // get lable for a selected dropdown value
  selectedDropDownData(
    dropDownData: Array<DropDownModel> = [],
    selectedId: number | string
  ): DropDownModel {
    const result = dropDownData.filter(function (data: DropDownModel): boolean {
      return data.value === selectedId;
    });
    return result[0];
  }

  // undefined to empty value conversion
  defaultEmpty(data: any): any {
    if (data === undefined) {
      return '';
    }
    return data;
  }

  /**
   * opens dialog to show on warnings/success messages
   * @param dialogData
   * @param disableClose
   * @param button1Text
   * @param button2Text
   */
  dialog(
    dialogData: any,
    disableClose: boolean,
    button1Text: string,
    button2Text?: string
  ): any {
    return this.dialogRef.open(CustomDialogComponent, {
      disableClose: disableClose,
      data: {
        text: this.getTranslation(dialogData),
        action: true,
        btn1Text: button1Text,
        btn2Text: button2Text
      }
    });
  }

  trimSpaces(value: any): void {
    return value ? value.replace(/^\s+|\s+$/gm, '') : null;
  }

  schoolDateFormat(): void {
    let dateFormat;
    this.schoolService.schoolDateFormat().subscribe((response: string) => {
      dateFormat = response;
    });
    return dateFormat;
  }

  schoolCurrency(): void {
    let currency;
    this.schoolService.schoolCurrency().subscribe((response: string) => {
      currency = response;
    });
    return currency;
  }

  getMenuOpen(isOpen: boolean): BehaviorSubject<number> {
    if (isOpen) {
      this.menuOpen.next(300);
    } else {
      this.menuOpen.next(0);
    }
    return this.menuOpen;
  }

  getMenuWidth(): Observable<any> {
    return this.menuOpen.asObservable();
  }

  getHelpText(key): void {
    let helptext: string;
    let selectedLanguage = localStorage.getItem('_l');
    if (selectedLanguage === null || selectedLanguage === undefined) {
      selectedLanguage = 'en';
    }
    this.localizationService
      .getPageInformationByKeyandCulture(key, selectedLanguage)
      .subscribe(res => {
        if (res.pageInformationViewModel !== null) {
          helptext = res.pageInformationViewModel.value;
        } else {
          helptext = res.pageInformationViewModel;
        }
        this.dialogRef.open(CustomDialogComponent, {
          disableClose: false,
          width: '600px',
          data: { tableInformation: helptext, action: true, btn1Text: 'Close' }
        });
      });
  }


  /**
   * Get List of School Boards Based On SchoolId
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public schoolBoards(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public schoolBoards(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public schoolBoards(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public schoolBoards(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    // return this.httpClient.get<any>(`${this.basePath}/GradeSetup/schoolboards`,
    return this.httpClient.get<any>(
      `${this.basePath}` + CourseModuleConfig._GradeSetup_schoolBoards,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
     * Get List of School Boards Based On SchoolAcademicSessionId
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
  public schoolAcademicBoards(observe?: 'body', reportProgress?: boolean): Observable<any>;
  public schoolAcademicBoards(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public schoolAcademicBoards(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public schoolAcademicBoards(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
    ];

    return this.httpClient.get<any>(`${this.basePath}` + CourseModuleConfig._GradeSetup_school_Academic_Boards,
      {
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
  public schoolAcademicClasses(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public schoolAcademicClasses(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public schoolAcademicClasses(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public schoolAcademicClasses(
    schoolBoardId?: number,
    classId?: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (schoolBoardId !== undefined && schoolBoardId !== null) {
      queryParameters = queryParameters.set('SchoolBoardId', <any>(
        schoolBoardId
      ));
    }
    if (classId !== undefined && classId !== null) {
      queryParameters = queryParameters.set('ClassId', <any>classId);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    // return this.httpClient.get<any>(`${this.basePath}/GradeSetup/schoolacademicclasses`,
    return this.httpClient.get<any>(
      `${this.basePath}` + CourseModuleConfig._GradeSetup_schoolacademicclasses,

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
   * Get List of SchoolAcademicClassSections based on AcademicId,BoardId(Nullable) and ClassId
   *
   * @param schoolBoardId Gets or sets School Board ID
   * @param classId Gets or sets ClassId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public schoolAcademicClassSections(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public schoolAcademicClassSections(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public schoolAcademicClassSections(
    schoolBoardId?: number,
    classId?: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public schoolAcademicClassSections(
    schoolBoardId?: number,
    classId?: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (schoolBoardId !== undefined && schoolBoardId !== null) {
      queryParameters = queryParameters.set('SchoolBoardId', <any>(
        schoolBoardId
      ));
    }
    if (classId !== undefined && classId !== null) {
      queryParameters = queryParameters.set('ClassId', <any>classId);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<any>(
      `${this.basePath}` +
      CourseModuleConfig._GradeSetup_schoolacademicclasssections,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  setLoggedInUserType(value: string): void {
    this.loggedInUserType.next(value);
  }

  getLoggedInUserType(): Observable<any> {
    return this.loggedInUserType.asObservable();
  }

  downloadData(url: any): Observable<any> {
    return new Observable(obs => {
      this.httpClient.get(url, { responseType: 'arraybuffer' }).subscribe((d: any) => {
        const arrayBuffer = d;
        const byteArray = new Uint8Array(arrayBuffer);
        obs.next(byteArray);
      });
    });
  }

  setData(data: any): void {
    this.processedData.next({ response: data });
  }

  getData(): Observable<any> {
    return this.processedData.asObservable();
  }

  navigateToForbidden(): void{
    this.router.navigate(['errors/error-403']);
  }
}

export interface IMyDate {
  year: number;
  month: number;
  day: number;
}
