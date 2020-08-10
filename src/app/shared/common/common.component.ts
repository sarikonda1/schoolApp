import { Component, OnInit } from '@angular/core';
import { Location, formatCurrency, formatDate } from '@angular/common';
import { CommonService } from '../../service/common.service';
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDialog,
  MatDialogRef, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar
} from '@angular/material';
import { AppSettings } from '../../app.constants';
import { DatePipe } from '@angular/common';
import { CustomDateAdapter } from '../custom-date-adaptor';
import { FormGroup } from '@angular/forms';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import * as moment from 'moment';
import { BaseUrlConfig } from '../../url.config';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
import { MatColors } from '../../../@fuse/mat-colors';
import * as jsonFileParams from './parameter-values.json';

export const AF_DATE_FORMATS = {
  parse: {
    dateInput: localStorage.getItem('_df')
  },
  display: {
    dateInput: localStorage.getItem('_df'),
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
export const DATE_ADAPTER = { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] };
export const MAT_CUSTOM_DATE_FORMATS = { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS };
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  errorMessages: any;
  errorsList: any;
  snackBar: MatSnackBar;
  commonService: CommonService;
  public dialog: MatDialog;
  datePipe: DatePipe;
  availableSchoolBoards: Array<any> = [];
  availableClasses = [];
  availableSections = [];
  academicSessionMinDate: any;
  academicSessionMaxDate: any;
  AcceptImagesApplicationType = '.doc,.docx,.txt,image/jpeg,image/jpg,image/png,application/pdf,image/*';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public cssClassForError = 'error-snackbar';
  public cssClassForSuccess = 'success-snackbar';
  currentBoardId: any;
  parameterValues: any = (jsonFileParams as any).default;
  acadmicSession: any;
  date = formatDate(new Date(), 'MMM d, y hh:mm a', 'en-US', '+0530');
  // public location: Location;
  constructor(public location?: Location) {
    if (!BaseUrlConfig.Assigned) {
      BaseUrlConfig.Assigned = true;
      if (window.location.origin.indexOf('localhost') > 0) {
        BaseUrlConfig.BasePath = 'https://api-dev-school.lshpdev.com';
      } else {
        BaseUrlConfig.BasePath = 'https://api-' + window.location.host;
      }
    }
    const schoolAcademicSession = localStorage.getItem('_as') ? JSON.parse(localStorage.getItem('_as')) : null;
    if (schoolAcademicSession) {
      this.academicSessionMinDate = schoolAcademicSession.startDate;
      this.academicSessionMaxDate = schoolAcademicSession.endDate;
      this.acadmicSession = schoolAcademicSession;
    }
  }

  ngOnInit(): void { }

  replaceResponseParameters(msg: string): string {
    Object.keys(this.parameterValues).map(e => {
      msg = msg.replace(new RegExp(e, 'ig'), this.parameterValues[e]);
    });
    return msg;
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit(): void {
    this.setAutoCompleteOff();
  }

  setAutoCompleteOff(): void {
    const forms = Array.from(document.getElementsByTagName('form'));
    for (const form of forms) {
      form.setAttribute('autocomplete', 'off');
    }
  }

  TrimObject(ClassModel: any): object {
    const returnElement: { [index: string]: any } = {};

    for (const modelprop of Object.keys(ClassModel)) {
      returnElement[modelprop] = ClassModel[modelprop].toString().trim();
    }
    return returnElement;
  }

  trimString(value: string): string {
    return value.toString().trim();
  }
  preventCustomKeys(event): any {
    if (((event.keyCode === 32) || (event.keyCode === 8) || event.keyCode === 46) && event.srcElement.value.trim() === '') {
      event.preventDefault();
    }
  }
  preventSpaceForArray(event, form): void {
    this.preventCustomKeys(event);
    if (form) {
      form.setValue(event.srcElement.value.trimLeft());
    }
  }
  preventSpace(event: any, form?: any, key?: any): void {
    this.preventCustomKeys(event);
    if (form && key && this[form].controls[key] !== undefined) {
      this[form].controls[key].setValue(event.srcElement.value.trimLeft());
    }
    else {
      event.srcElement.value = event.srcElement.value.trimLeft();
    }

  }

  setQueryParams(attribute: any, title: any, queryParameters: any): any {
    if (typeof (attribute) === 'object' && attribute) {
      attribute.forEach((value: any) => {
        queryParameters = (value !== '' && value != null) ? queryParameters.append(title, <any>value) : queryParameters;
      });
    }
    else if (attribute !== undefined) {
      queryParameters = (attribute !== '' && attribute != null) ? queryParameters.set(title, <any>attribute) : queryParameters;
    }
    return queryParameters;
  }

  setQueryParamsWithModel(model: any, queryParameters: any): any {

    if (typeof (model) === 'object' && model) {

      Object.keys(model).forEach(element => {

        const key = element.replace(/\w+/g, (w) => {
          return w[0].toUpperCase() + w.slice(1);
        });
        if (!(model[element] instanceof Array) && model[element] !== '' && model[element] != null) {
          queryParameters = queryParameters.set(key, <any>model[element]);
        }
        else if (model[element] instanceof Array && model[element].length > 0) {
          model[element].forEach((value: any) => {
            queryParameters = queryParameters.append(key, <any>value);
          });
        }

      });
    }
    return queryParameters;
  }

  prepareModel(postModel: any, viewModel: any): any {
    if (postModel !== undefined && viewModel !== undefined) {
      Object.keys(postModel).forEach(x => {
        if (viewModel.hasOwnProperty(x)) {
          postModel[x] = viewModel[x];
        }
      });
    }
    return postModel;
  }

  getModelComponent(componentName): any {
    const paginationObject = JSON.parse(localStorage.getItem('_tc')) || {};
    if (paginationObject[componentName]) {
      return paginationObject[componentName]['model'];
    }
    return false;
  }

  setModelDataTableComponent(componentName, model): void {
    const pagnObj = JSON.parse(localStorage.getItem('_tc')) || {};
    if (pagnObj[componentName] === undefined) {
      pagnObj[componentName] = {};
    }
    pagnObj[componentName]['model'] = model;
    localStorage.setItem('_tc', JSON.stringify(pagnObj));
  }

  //  to catch the errror response 
  errorResponse(error: any): void {
    if (error.status === 401) {
      this.openSnackBar('Session Expired', true);
      window.location.reload();
    }
    if (error.status === 403) {
     this.commonService.navigateToForbidden();
    }
    if (error.error) {
      this.errorMessages = Object.values(error.error);
      this.errorsList = this.errorMessages;
      if (this.errorsList.length) {
        if (error.error.messages) {
          const resultMessage = error.error.messages.ResultMessage;
          this.showSnackBarOnError(resultMessage);
        } else if (this.errorsList[0].length > 0) {
          this.showSnackBarOnError(this.errorMessages[0][0]);
        }
      } else {
        this.showSnackBarOnError(this.errorMessages[0].ResultMessage);
      }
    }
  }
  showSnackBarOnError(msg): void {
    msg = this.replaceResponseParameters(msg);
    this.openSnackBar(msg, true);
  }
  // prevent spaces at on blur text fields
  trimSpaces(formGroup: any, key: string): void {
    formGroup.controls[key].setValue(this.commonService.trimSpaces(formGroup.controls[key].value));
  }

  compareArrayData(primaryArray: any, secondaryArray: any): Array<any> {
    return primaryArray.filter(function (objFromA): Array<any> {
      return secondaryArray.find(function (objFromB): boolean {
        return objFromA.value === objFromB.value;
      });
    });
  }

  unMatchedArrayData(primaryArray: any, secondaryArray: any): Array<any> {
    return primaryArray.filter(function (objFromA): object {
      return secondaryArray.find(function (objFromB: any): any {
        return objFromA.value !== objFromB.value;
      });
    });
  }

  getSchoolDateFormat(): any {
    if (!localStorage.getItem('_df')) {
      return AppSettings.DATE_PATTERN;
    }
    return localStorage.getItem('_df');
  }

  getSchoolCurrency(): any {
    if (!localStorage.getItem('_c')) {
      return '₹';
    }
    return localStorage.getItem('_c');
  }

  getFormattedCurrency(amount: number): any {
    const currencySymbol = this.getSchoolCurrency();
    return formatCurrency(amount, 'en-IN', currencySymbol);
  }

  trimTextBoxSpaces(form: any, key: string): void {
    this[form].controls[key].setValue(this.commonService.trimSpaces(this[form].controls[key].value));
  }

  forceValidation(controlName: string, form: FormGroup): void {
    const control = form.get(controlName);
    control.markAsDirty();
    control.updateValueAndValidity();
  }

  getHelpText(event): void {
    this.commonService.getHelpText(event);

  }

  getFormattedDateByAPIPattern(date: any): string {
    return moment(date).format(AppSettings.API_DATE_PATTERN);
  }

  getFormattedDateBySchoolDateFormat(date: any): string {
    if (date === null || date === '') {
      return '';
    }
    else {
      return moment(date).format(this.getSchoolDateFormat());
    }
  }

  getAvailableSchoolBoards(formName?: any, controlName?: any): void {
    this.commonService.schoolBoards().subscribe(res => {
      this.availableSchoolBoards = [];      if (res.listViews !== undefined && res.listViews.length) {
        res.listViews.forEach(element => {
          this.availableSchoolBoards.push({
            label: element.name,
            value: element.id
          });
        });
        this.currentBoardId = this.availableSchoolBoards[0].value;
        if (this.getTokenParam('_as')){
        this.getAvailableClasses(this.currentBoardId);
        }
        if (formName && formName) {
          this.setFormControl(formName, controlName, this.currentBoardId);
        }
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getAvailableClasses(schoolBoardId): void {
    this.commonService.schoolAcademicClasses(schoolBoardId, null).subscribe(response => {
      if (response.listViews !== undefined && response.listViews.length) {
        const classList = [];
        response.listViews.forEach(element => {
          classList.push({
            label: element.name,
            value: element.id
          });
        });
        this.availableClasses = classList;
      }
      else {
        this.availableClasses = [];
      }
    });
  }

  getAvailableSections(schoolBoardId, classId): void {
    this.commonService.schoolAcademicClassSections(schoolBoardId, classId).subscribe(response => {
      if (response.listViews !== undefined && response.listViews.length) {
        const sections = [];
        response.listViews.forEach(element => {
          sections.push({
            label: element.name,
            value: element.id
          });
        });
        this.availableSections = sections;
      }
      else {
        this.availableSections = [];
      }
    });
  }
  checkFileSize(file: any, type: any, size: any): any {
    if (file.type.match(type) == null) {
      if (type === AppSettings.IMAGE) {
        this.openSnackBar(AppSettings.UPLOAD_IMAGE_FILE_ERROR, true);
      } else {
        const formatedData = type.split('|').join(', ');
        this.openSnackBar(AppSettings.UPLOAD_FILE_ERROR + formatedData, true);
      }
      return true;
    } else if (file.size > size) {
      this.openSnackBar(AppSettings.FILE_SIZE_ERROR + (size / Math.pow(1024, 2)) + 'MB', true);
      return true;
    }
    return false;
  }

  scrollIntoView(element: any): void {
    if (document.getElementsByTagName(element)[0]) {
      document.getElementsByTagName(element)[0].scrollIntoView();
    }
  }

  scrollIntoViewById(element: any): void {
    if (document.getElementById(element)) {
      document.getElementById(element).scrollIntoView();
    }
  }

  getKeyValuesOfObject(keyval: object): Array<{ Label: string, Value: string }> {
    const items: Array<{ Label: string, Value: string }> = [];
    if (keyval) {
      Object.entries(keyval).forEach(
        ([key, value]) => {
          items.push({ Label: key, Value: value });
        }
      );
    }

    return items;
  }

  // convert date type properties of model objet or arrays.
  setDateFormat(data: any): any {

    if (data instanceof Array && data) {
      data.forEach(model => {
        Object.keys(model).forEach(property => {
          if (model[property] && typeof (model[property]) !== 'number' && this.isDate(model[property])) {
            model[property] = model[property] != null ? this.commonService.customDateFormat(model[property].toString(), this.getSchoolDateFormat()).date : null;
          }
        });
      });
    } else {
      Object.keys(data).forEach(property => {
        if (data[property] && typeof (data[property]) !== 'number' && this.isDate(data[property])) {
          data[property] = data[property] != null ? this.commonService.customDateFormat(data[property].toString(), this.getSchoolDateFormat()).date : null;
        }
      });
    }

    return data;
  }

  isDate(sDate): any {

    if (sDate && (Number(sDate) === parseInt(sDate, 10) || isNaN(parseInt(sDate[0], 10)))) {
      return false;
    }
    const tryDate = new Date(sDate);
    return (tryDate && tryDate.toString() !== 'NaN' && tryDate.toString() !== 'Invalid Date');
  }

  openSnackBar(
    message: any,
    isError?: boolean, horizontalPosition?: MatSnackBarHorizontalPosition, verticalPosition?: MatSnackBarVerticalPosition
  ): any {
    return this.snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: isError ? 10000 : 5000,
      horizontalPosition: horizontalPosition ? horizontalPosition : this.horizontalPosition,
      verticalPosition: verticalPosition ? verticalPosition : this.verticalPosition,
      panelClass: isError ? this.cssClassForError : this.cssClassForSuccess,
      data: { message: message, isError: isError }
    });
  }

  setFormControl(formName: any, controlName: string, value: any): void {
    this[formName].controls[controlName].setValue(value);
  }
  compareModel(inPut: any, outPut: any): any {
    let result = true;
    if (inPut !== undefined && outPut !== undefined) {
      Object.keys(inPut).forEach(x => {
        if (outPut.hasOwnProperty(x) && (inPut[x] !== outPut[x])) {
          result = false;
        }
      });
    } else {
      result = false;
    }

    return result;
  }

  trimTextBox(event: any, data: any, key: string): void {

    if (((event.keyCode === 32) || (event.keyCode === 8) || event.keyCode === 46) && event.srcElement.value.trim() === '') {
      data.controls[key].setValue(this.commonService.trimSpaces(data.controls[key].value));
    }
    else {
      if (data.controls[key] && data.controls[key].value) {
        data.controls[key].setValue(event.srcElement.value.trimStart());
      }
    }
  }

  removeFirstMatchedRecord(dataArray: any, matchedObject: any): any {

    let resultArray = [];
    if (dataArray && matchedObject != null) {
      const matchedRecords = dataArray.filter(x => this.compareModel(x, matchedObject));
      const unMatchedRecords = dataArray.filter(x => !this.compareModel(x, matchedObject));
      if (matchedRecords.length > 0) {
        matchedRecords.splice(0, 1);
      }
      if (matchedRecords.length > 0 && unMatchedRecords.length > 0) {
        resultArray = matchedRecords.concat(unMatchedRecords);
      }
      else if (matchedRecords.length > 0) {
        resultArray = matchedRecords;
      }
      else if (unMatchedRecords.length > 0) {
        resultArray = unMatchedRecords;
      }
    }

    return resultArray;
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

  back(): void {
    this.location.back();
  }

  customSteperLabelChange(): void {
    if (document.getElementsByClassName('mat-step-label-selected')) {
      const element: HTMLElement = document.getElementsByClassName('mat-step-label-selected')[0] as HTMLElement;
      element.click();
    }
  }

  sortByColumns(columns: Array<string>, inputArray: any[]): any {
    const fieldSorter = (fields) => (a, b) => fields.map(o => {
      let dir = 1;
      if (o[0] === '-') { dir = -1; o = o.substring(1); }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0);

    /*for (let index = columns.length - 1; index >= 0; index--) {
      const nextIndex = index - 1;
      if (nextIndex >= 0) {
        inputArray = inputArray.sort(fieldSorter([columns[index], columns[nextIndex]]));
      }
    }*/
    inputArray = inputArray.sort(fieldSorter(columns));
    return inputArray;
  }

  getColorClassByCode(hexaCode: string): string {
    const availableColors = Object.keys(MatColors.all);
    let colorHexaCode = '';
    let selectedColorName = '';
    availableColors.forEach((colorName) => {
      if (colorHexaCode === '' || colorHexaCode === undefined) {
        // tslint:disable-next-line:typedef
        const findColor = Object.keys(MatColors.all[colorName]).filter(function (key) {
          return MatColors.all[colorName][key] === hexaCode;
        });
        colorHexaCode = (findColor) ? findColor[0] : '';
        selectedColorName = (colorHexaCode) ? colorName : '';
      }

    });
    return selectedColorName + '-' + colorHexaCode;
  }

  showEvents(day: any): boolean {

    day.colors = [];
    day.events.forEach(event => {
      if (!day.colors.includes(event.color.primary)) {
        day.colors.push(event.color.primary);
      }

    });
    return true;
  }
  onStepperAnimationDone(index, isHorizantalStepper = false): void {
    const el = document.querySelectorAll('[id^="cdk-step-label-"][id$="-' + (isHorizantalStepper ? '0' : index) + '"]')[0];
    if (el && !this.inView(el)) {
      el.scrollIntoView();
    }
  }
  inView(el): any {
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
  }
  getDefaultDate(): any {
    const _as = JSON.parse(localStorage.getItem('_as'));
    const toDay = new Date();
    if (!_as) {
      return toDay;
    }
    if (toDay.getTime() > new Date(_as.endDate).getTime()) {
      return _as.endDate;
    } else if (toDay.getTime() < new Date(_as.startDate).getTime()) {
      return _as.startDate;
    } else {
      return toDay;
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && charCode !== 46 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  clearStorageComponent(currentComponent): void {
    const pagnObj = JSON.parse(localStorage.getItem('_tc')) || {};
    if (pagnObj[currentComponent]) {
      delete pagnObj[currentComponent];
    }
    localStorage.setItem('_tc', JSON.stringify(pagnObj));
  }

  nl2br(text: any): string {
    const re = /\\n/gi;
    const result =  text ? text.replace(re, '  ' + '\n') : '';
    return result;
  }

  groupByArbitraryNumOfGroup(array, attrs): any {
    const output = [];
    for (let i = 0; i < array.length; ++i) {
      const ele = array[i];
      let groups = output;
      for (let j = 0; j < attrs.length; ++j) {
        const attr = attrs[j];
        const value = ele[attr];
        const gs = groups.filter(function (g): any {
          return g.hasOwnProperty(attr) && g[attr] === value;
        });
        if (gs.length === 0) {
          const g = {};
          g[attr] = value;
          g['groups'] = [];
          groups.push(g);
          groups = g['groups'];
        } else {
          groups = gs[0]['groups'];
        }
      }
      groups.push(ele);
    }
    return output;
  }
}
