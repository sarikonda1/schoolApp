import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CommonService } from 'app/service/common.service';
import { ActivatedRoute } from '@angular/router';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.constants';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { StoreService } from 'app/service/file-management/store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bulk-process',
  templateUrl: './bulk-process.component.html',
  styleUrls: ['./bulk-process.component.scss'],
  providers: [StudentAdmissionService]
})
export class BulkProcessComponent extends CommonComponent implements OnInit, OnDestroy {
  @ViewChild('logStatus') logStatus: TemplateRef<any>;
  importId: any;
  columns = [];
  tableSettings: {};
  rows = [];
  totalRowsCount: any;
  pageCnt: any;
  header: any;
  importData: any;
  errorMessage: any;
  closeForm = false;
  percentage = 0;
  id: NodeJS.Timer;
  constructor(public commonService: CommonService, private route: ActivatedRoute, private studentAdmissionService: StudentAdmissionService, private httpClient: HttpClient,
    public dialog: MatDialog, private storeService: StoreService, public location: Location, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.importId = params.id;
        this.studentAdmissionService.getByBulkData(this.importId)
          .subscribe(res => {
            this.importData = res;
            this.getColumns(this.importData.importTypeCode);
            this.progressCalculate();
            this.cd.detectChanges();
          }, error => {
            this.errorResponse(error);
          });
      }
    });
    // // to do
    // // this.id = setInterval(() => {
    // //   if (this.importData !== undefined && this.importData !== null &&
    // //     this.importData.bulkImportStatusCode !== undefined && this.importData.bulkImportStatusCode !== 'BLKIMP_CMP') {
    // //     this.studentAdmissionService.getByBulkData(this.importId)
    // //       .subscribe(res => {
    // //         this.importData = res;
    // //         if (this.importData !== null) {
    // //           this.initialzeTable(this.importData.importTypeCode);
    // //           this.progressCalculate();
    // //           this.cd.detectChanges();
    // //         }
    // //       }, error => {
    // //         this.errorResponse(error);
    // //       });
    // //   }
    // // }, 10000);
  }
  ngOnDestroy(): void {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  progressCalculate(): void {
    this.percentage = (100 * this.importData.processedCount) / this.importData.recordCount;
    if (this.percentage === NaN) {
      this.percentage = 0;
    }
  }

  initialzeTable(type: any): void {
    if (this.importData.importJsonData) {
      this.rows = this.importData.importJsonData;
      this.createArray(type);
    } else {
      this.rows = [];
    }
    const backBtn = {
      name: 'Back',
      class: 'primary',
      clickAction: 'back'
    };
    this.tableSettings = {
      model: [],
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: this.header,
      componentName: '',
      isClientSidePaginationReq: true
    };
    this.cd.detectChanges();
  }

  getColumns(type): void {
    let url = null;
    switch (type) {
      case AppSettings.BULKIMP_STD:
        url = 'assets/importJsonFiles/students.json';
        this.header = 'Students';
        break;
      case AppSettings.BULKIMP_STF:
        url = 'assets/importJsonFiles/staff.json';
        this.header = 'Staff';
        break;
      case AppSettings.BULKIMP_HLD:
        url = 'assets/importJsonFiles/holiday.json';
        this.header = 'Holidays';
        break;
    }
    this.columns = [];
    this.httpClient.get(url).subscribe((data: any) => {
      this.columns = data.colUpperCase;
      this.initialzeTable(type);
    });

  }

  capitalizeFirstLetter(string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  createStaffArray(index: any, errorMessage?: any): void {
    this.rows[index].Name = [this.rows[index].FirstName, this.rows[index].MiddleName, this.rows[index].LastName].join(' ');

    this.rows[index].DateOfBirth = this.commonService.customDateFormat(this.rows[index].DateOfBirth, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].DateOfJoin = this.commonService.customDateFormat(this.rows[index].DateOfJoin, AppSettings.API_DATE_PATTERN).date;

    this.rows[index].AllowLogin = this.rows[index].AllowLogin ? 'Yes' : 'No';

    const emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = this.errorMessage.concat(emsg + ',');
    }
  }

  createStudentArray(rowData: any, index: any, errorMessage?: any): void {
    this.rows[index].StudentName = [this.rows[index].FirstName, this.rows[index].MiddleName, this.rows[index].LastName].join(' ');

    this.rows[index].FatherName =
      [this.rows[index].FatherFirstName, this.rows[index].FatherMiddleName, this.rows[index].FatherLastName].join(' ');

    this.rows[index].MotherName =
      [this.rows[index].MotherFirstName, this.rows[index].MotherMiddleName, this.rows[index].MotherLastName].join(' ');

    this.rows[index].DateOfBirth = this.commonService.customDateFormat(this.rows[index].DateOfBirth, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].DateOfJoining = this.commonService.customDateFormat(this.rows[index].DateOfJoining, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].DateOfAdmission = this.commonService.customDateFormat(this.rows[index].DateOfAdmission, AppSettings.API_DATE_PATTERN).date;

    const emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = this.errorMessage.concat(emsg + ',');

    }
  }

  createArray(type: string): void {
    this.rows.forEach((rowData, index) => {
      type === AppSettings.BULKIMP_STD ? this.createStudentArray(rowData, index) : type === AppSettings.BULKIMP_STF ? this.createStaffArray(index) : this.createHolidayArray(index);
    });
  }

  cancel(): void {
    this.closeForm = false;
  }

  openAttachment(): void {
    if (this.importData.attachmentViewModel != null) {
      const attachmnet = this.storeService.getFilePath(this.importData.attachmentViewModel.fileName);
      window.open(attachmnet);
    }
    else {
      this.openSnackBar(AppSettings.NO_ATTACHMENTS_FOUND, true);
      return;
    }
  }

  createHolidayArray(index: any, errorMessage?: any): void {
    this.rows[index].ClassSections = [this.rows[index].ClassName, this.rows[index].SectionName].join(' ');
    this.rows[index].Date = [this.commonService.customDateFormat(
      this.rows[index].FromDate, this.getSchoolDateFormat()).date, this.commonService.customDateFormat(this.rows[index].ToDate,
        this.getSchoolDateFormat()).date].join('-');
    this.rows[index].PostToCalendar = (this.rows[index].IsPostToCalendar !== null &&
      this.rows[index].IsPostToCalender === 1) ? 'Yes' : (this.rows[index].IsPostToCalender !== null && this.rows[index].IsPostToCalender === 0) ? 'No' : null,
      this.rows[index].StaffHoliday =
      (this.rows[index].IsStaffHoliday !== null && this.rows[index].IsStaffHoliday === 1)
        ? 'Yes' : (this.rows[index].IsStaffHoliday !== null && this.rows[index].IsStaffHoliday === 0) ? 'No' : null;
    const emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = this.errorMessage.concat(emsg + ',');

    }

  }
}
