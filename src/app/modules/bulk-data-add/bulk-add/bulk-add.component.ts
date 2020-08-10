import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { HolidayConfigurationService } from 'app/service/class-schedules/holiday-configuration.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { HolidaysView } from 'app/modules/configuration/class-schedules/model/holidays-view';
import { AppSettings } from 'app/app.constants';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';
import { StudentDetailsViewModel } from 'app/modules/academics/student-admissions/model/student-details-view-model';
import { StudentAdmissionView } from 'app/modules/academics/student-admissions/model/student-admission-view';
import { StudentParentPersonView } from 'app/modules/academics/student-admissions/model/student-parent-person-view';
import { StudentEmergencyContactDetailsView } from 'app/modules/academics/student-admissions/model/student-emergency-contact-details-view';
import { AddressView } from 'app/models/address-view';
import { Router } from '@angular/router';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StaffView } from 'app/modules/staff/staff-admissions/model/staff-view';
import { JobApplicationPersonView } from 'app/modules/staff/staff-admissions/model/job-application-person-view';
import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';
import { StudentBulkPostView } from 'app/modules/academics/student-admissions/model/studentBulkPostView';
import { HttpClient } from '@angular/common/http';
import { HolidayBulkPostView } from 'app/modules/configuration/class-schedules/model/holiday-bulk-post-view';
import { StaffBulkPostView } from 'app/modules/staff/models/staff-bulk-post-view';

@Component({
  selector: 'app-bulk-add',
  templateUrl: './bulk-add.component.html',
  styleUrls: ['./bulk-add.component.scss'],
  providers: [HolidayConfigurationService, StudentAdmissionService, StaffMemberService]
})
export class BulkAddComponent extends CommonComponent implements OnInit {
  @ViewChild('logoImgInput') logoImgInput: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;
  addOptions = [];
  option = new FormControl('', Validators.required);
  link: string;
  showLink = false;
  fileName = '';
  tableSettings: {};
  columns: any[];
  rows: any[] = [];
  totalRowsCount: number;
  pageCnt: number;
  submitData: any[];
  header = '';
  templates: { value: string; label: string; }[];
  errorMessage: any;
  studentBulkPostView: StudentDetailsViewModel[] = [];
  studentPostData: StudentDetailsViewModel;
  studentFatherParent: StudentParentPersonView;
  studentMotherParent: StudentParentPersonView;
  studentPostView: StudentBulkPostView;
  attachment: AttachmentViewModel;
  studentEmergencyDetailsView: StudentEmergencyContactDetailsView;
  staffs: Array<StaffView> = [];
  person: JobApplicationPersonView;
  logSettings: {};
  importLogs = [];
  constructor(public commonService: CommonService, private holidayService: HolidayConfigurationService, private studentAdmissionService:
    StudentAdmissionService, private staffMemberService: StaffMemberService, public snackBar: MatSnackBar, private router: Router, private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.addOptions = [
      { value: AppSettings.BULKIMP_HLD, label: 'Holidays' },
      { value: AppSettings.BULKIMP_STD, label: 'Students' },
      { value: AppSettings.BULKIMP_STF, label: 'Staff' }
    ];
    this.templates = [
      { value: 'xlsx', label: 'Excel' },
      // { value: 'csv', label: 'CSV' }
    ];
    this.initializeStudent();
    this.checkUrl();
  }

  initializeStudent(): void {
    this.studentFatherParent = {
      firstName: '',
      lastName: '',
      middleName: '',
      email1: '',
      mobileTel: '',
      otherTel: '',
    };
    this.studentMotherParent = {
      firstName: '',
      lastName: '',
      middleName: '',
      email1: '',
      mobileTel: '',
      otherTel: '',
    };

    this.attachment = {
      fileName: '',
      fileValue: ''
    };
    this.studentPostView = {
      studentDetailsViewModel: this.studentBulkPostView,
      attachmentViewModel: this.attachment
    };
  }

  onChange(option: any): void {
    this.showLink = true;
    this.fileName = '';
    this.link = '';
    this.rows = [];
    switch (option.value) {
      case AppSettings.BULKIMP_HLD:
        this.fileName = 'Holidays.xlsx';
        this.link = 'assets/excels/Holidays.xlsx';
        this.header = 'Holidays';
        this.getColumns('assets/importJsonFiles/holiday.json');
        this.getImportLogData('Holiday');
        window.location.hash = 'Holidays';
        break;
      case AppSettings.BULKIMP_STD:
        this.fileName = 'Students.xlsx';
        this.link = 'assets/excels/Students.xlsx';
        this.header = 'Students';
        this.getColumns('assets/importJsonFiles/students.json');
        this.getImportLogData('Student');
        window.location.hash = 'Students';
        break;
      default:
        this.fileName = 'Staff.xlsx';
        this.link = 'assets/excels/Staff.xlsx';
        this.header = 'Staff';
        this.getColumns('assets/importJsonFiles/staff.json');
        this.getImportLogData('Staff');
        window.location.hash = 'Staff';
        break;
    }
  }

  exportToExcel(template: any): void {
    switch (this.option.value) {
      case AppSettings.BULKIMP_HLD:
        this.fileName = template.value === 'xlsx' ? 'Holidays.xlsx' : 'Holidays.csv';
        this.link = template.value === 'xlsx' ? 'assets/excels/Holidays.xlsx' : 'assets/excels/Holidays.csv';
        break;
      case AppSettings.BULKIMP_STD:
        this.fileName = template.value === 'xlsx' ? 'Students.xlsx' : 'Students.csv';
        this.link = template.value === 'xlsx' ? 'assets/excels/Students.xlsx' : 'assets/excels/Students.csv';
        break;
      default:
        this.fileName = template.value === 'xlsx' ? 'Staff.xlsx' : 'Staff.csv';
        this.link = template.value === 'xlsx' ? 'assets/excels/Staff.xlsx' : 'assets/excels/Staff.csv';
        break;
    }
    this.commonService.downloadData(this.link).subscribe(result => {
      this.downloadFile(result, this.fileName);
    });
  }


  downloadFile(blob: any, filename: string): void {
    const binaryData = [];
    binaryData.push(blob);

    const url = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })); // <-- work with blob directly

    // create hidden dom element (so it works in all browsers)
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);

    // create file, attach to hidden element and open hidden element
    a.href = url;
    a.download = filename;
    a.click();
  }


  uploadFile(event: any): void {
    if (event.target.value) {
      const file = event.target.files[0];
      switch (this.header) {
        case 'Holidays':
          this.holidayService.readHolidaysBulkData(file).subscribe(res => {
            this.bindHolidayResult(res.holidayResultValidations);
          }, err => {
            this.openSnackBar(err.error.messages.ResultMessage, true);
          });
          break;
        case 'Students':
          this.studentAdmissionService.readStudentData(file).subscribe(res => {
            this.bindResult(res.studentAdmissionValidations);
          }, err => {
            this.openSnackBar(err.error.messages.ResultMessage, true);
          });
          break;
        case 'Staff':
          this.staffMemberService.readStaffsBulkData(file).subscribe(res => {
            this.bindResult(res.staffResultValidations);
          }, err => {
            this.openSnackBar(err.error.messages.ResultMessage, true);
          });
          break;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      const that = this;
      reader.onload = (_event) => {
        that.attachment.fileName = file.name;
        that.attachment.fileValue = (<string>reader.result).split(',')[1];
      };
    }
  }
  bindResult(data: any): void {
    this.rows = [];
    if (!data) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data;
      this.rows.forEach((rowData, index) => {
        if (rowData.errors && rowData.errors.length) {
          this.errorMessage = '';
          rowData.errors.forEach(errors => {
            this.option.value === AppSettings.BULKIMP_STD ? this.createStudentArray(rowData, index, errors) : this.createStaffArray(index, errors);
          });
          this.rows[index].error = this.errorMessage;
        } else {
          this.option.value === AppSettings.BULKIMP_STD ? this.createStudentArray(rowData, index) : this.createStaffArray(index);
        }
      });
    }
    this.initializeTableSettings();
  }

  createStudentArray(rowData: any, index: any, errorMessage?: any): void {
    this.rows[index].studentName = [this.rows[index].firstName, this.rows[index].middleName, this.rows[index].lastName].join(' ');

    this.rows[index].fatherName =
      [this.rows[index].fatherFirstName, this.rows[index].fatherMiddleName, this.rows[index].fatherLastName].join(' ');

    this.rows[index].motherName =
      [this.rows[index].motherFirstName, this.rows[index].motherMiddleName, this.rows[index].motherLastName].join(' ');

    this.rows[index].dateOfBirth = this.commonService.customDateFormat(this.rows[index].dateOfBirth, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].dateOfJoining = this.commonService.customDateFormat(this.rows[index].dateOfJoining, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].dateOfAdmission = this.commonService.customDateFormat(this.rows[index].dateOfAdmission, AppSettings.API_DATE_PATTERN).date;

    const emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = [this.errorMessage, emsg].join(' ');

    }
  }

  bindHolidayResult(data: any): void {
    this.rows = [];
    if (!data) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = data;
      this.rows.forEach((rowData, index) => {
        if (rowData.errors && rowData.errors.length) {
          this.errorMessage = '';
          rowData.errors.forEach(errors => {
            this.createArray(index, errors);
          });
          this.rows[index].error = this.errorMessage;
        } else {
          this.createArray(index);
        }
      });
    }
    this.initializeTableSettings();
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      model: [],
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: this.header,
      componentName: '',
      isSelectRowRequired: true,
      visibleSelectAll: true,
      isMultiDeleteRequired: false,
      headerOperations: {
        additionalButtons: [
          {
            name: 'Clear',
            // class: 'text-uppercase accent',
            textColor: 'accent text-uppercase',
            // disable: 'disabled',
            clickAction: 'checkUrl'
          }
        ]
      }
    };
  }

  submit(): void {
    if (this.option.value === AppSettings.BULKIMP_HLD) {
      let holiday: HolidayBulkPostView;
      holiday = {
        holidayViewModels: null,
        attachmentViewModel: null,
      };
      holiday.holidayViewModels = this.submitData;
      holiday.attachmentViewModel = this.attachment;
      this.holidayService.holidaysBulkPost(holiday).subscribe(res => {
        this.rowWiseActions(this.eventObj(res.bulkImportId));
      });
    }
    else if (this.option.value === AppSettings.BULKIMP_STD) {
      this.initializeStudentView();
      // this.initializeStudent();
      this.studentPostView.studentDetailsViewModel = [];
      this.submitData.forEach((students: any, index) => {
        this.studentFatherParent.firstName = students.fatherFirstName,
          this.studentFatherParent.lastName = students.fatherLastName,
          this.studentFatherParent.middleName = students.fatherMiddleName,
          this.studentFatherParent.email1 = students.fatherEmail,
          this.studentFatherParent.mobileTel = students.fatherMobileNumber,
          this.studentFatherParent.otherTel = students.fatherAlternateNumber,

          this.studentMotherParent.firstName = students.motherFirstName,
          this.studentMotherParent.lastName = students.motherLastName,
          this.studentMotherParent.middleName = students.motherMiddleName,
          this.studentMotherParent.email1 = students.motherEmail,
          this.studentMotherParent.mobileTel = students.motherMobileNumber,
          this.studentMotherParent.landTel = students.motherLandlineNumber,
          this.studentMotherParent.otherTel = students.motherAlternateNumber,

          this.studentEmergencyDetailsView = JSON.parse(JSON.stringify(students)),

          this.studentPostData.student = JSON.parse(JSON.stringify(students)),
          this.studentPostData.student.address = JSON.parse(JSON.stringify(students)),
          this.studentPostData.student.address.line1 = students.addressLine1;
        this.studentPostData.student.address.line2 = students.addressLine2;
        this.studentPostData.student.address.line3 = students.addressLine3;
        this.studentPostData.student.email1 = students.primaryEmail;
        this.studentPostData.student.email2 = students.secondaryEmail;
        this.studentPostData.student.mobileTel = students.mobileNumber;
        this.studentPostData.student.otherTel = students.alternateNumber;
        this.studentPostData.student.landTel = students.landlineNumber;
        this.studentPostData.student.firstName = students.firstName;
        this.studentPostData.student.lastName = students.lastName;
        this.studentPostData.student.middleName = students.middleName;
        Object.assign(this.studentPostData.studentEmergencyContactDetailsView = {}, this.studentEmergencyDetailsView),
          this.studentPostData.studentEmergencyContactDetailsView.emgergencyContactTelNumber1 = students.emergencyContactPhoneNumber1,
          Object.assign(this.studentPostData.parentMotherParent = {}, this.studentMotherParent);
        Object.assign(this.studentPostData.fatherParent = {}, this.studentFatherParent);
        Object.assign(this.studentPostView.studentDetailsViewModel[index] = {}, this.studentPostData);
      });
      this.studentPostView.attachmentViewModel = this.attachment;

      this.studentAdmissionService.bulkStudentPost(this.studentPostView).subscribe(res => {
        this.rowWiseActions(this.eventObj(res.bulkImportId));
      });
    } else if (this.option.value === AppSettings.BULKIMP_STF) {
      this.staffs = [];
      let staff: StaffView;
      this.submitData.forEach((stf, index) => {
        staff = stf;
        Object.assign(staff.person = {}, JSON.parse(JSON.stringify(stf)));
        Object.assign(this.staffs[index] = {}, staff);
      });
      const staffBulkPostView: StaffBulkPostView = {};
      Object.assign(staffBulkPostView.staffView = [], this.staffs);
      Object.assign(staffBulkPostView.attachmentViewModel = {}, this.attachment);
      this.staffMemberService.staffBulkPost(staffBulkPostView).subscribe(res => {
        this.rowWiseActions(this.eventObj(res.bulkImportId));
      });
    }
  }

  initializeStudentView(): void {
    this.studentPostData = {
      student: null,
      fatherParent: null,
      parentMotherParent: null,
      studentEmergencyContactDetailsView: null,
      parentGuardianParent: null,
      siblingStudentsStudentId1: null
    };
  }

  selectedRows(_event: Array<any>): void {
    this.submitData = [];
    this.submitData = _event;
  }

  createArray(index: any, errors?: any): void {
    this.rows[index].classSection = this.rows[index].className != null ? [this.rows[index].className, this.rows[index].sectionName].join(',') : null;
    this.rows[index].date = [this.commonService.customDateFormat(this.rows[index].fromDate,
      this.getSchoolDateFormat()).date, this.commonService.customDateFormat(this.rows[index].toDate,
        this.getSchoolDateFormat()).date].join('-'),
      this.rows[index].fromDate = this.commonService.customDateFormat(this.rows[index].fromDate, AppSettings.API_DATE_PATTERN).date,
      this.rows[index].toDate = this.commonService.customDateFormat(this.rows[index].toDate, AppSettings.API_DATE_PATTERN).date,
      this.rows[index].postToCalendar = (this.rows[index].isPostToCalendar !== null && this.rows[index].isPostToCalender === 1) ? 'Yes' :
        (this.rows[index].isPostToCalender !== null && this.rows[index].isPostToCalender === 0) ? 'No' : null,
      this.rows[index].staffHoliday =
      (this.rows[index].isStaffHoliday !== null && this.rows[index].isStaffHoliday === 1) ? 'Yes'
        : (this.rows[index].isStaffHoliday !== null && this.rows[index].isStaffHoliday === 0) ? 'No' : null;
    const emsg = errors !== undefined ? errors.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = [this.errorMessage, emsg].join(' ');
    }
  }


  createStaffArray(index: any, errorMessage?: any): void {
    this.rows[index].name = [this.rows[index].firstName, this.rows[index].middleName, this.rows[index].lastName].join(' ');

    this.rows[index].dateOfBirth = this.commonService.customDateFormat(this.rows[index].dateOfBirth, AppSettings.API_DATE_PATTERN).date;
    this.rows[index].dateOfJoining = this.commonService.customDateFormat(this.rows[index].dateOfJoining, AppSettings.API_DATE_PATTERN).date;

    const emsg = errorMessage !== undefined ? errorMessage.errorMessage : null;
    if (emsg != null && emsg !== undefined) {
      this.errorMessage = [this.errorMessage, emsg].join(' ');
    }
  }

  getImportLogData(title: string): void {
    this.studentAdmissionService.getAllBulkData(this.option.value).subscribe(res => {
      let filters = [];
      if (res.bulkImportView !== null && res.bulkImportView.list) {
        this.totalRowsCount = res.totalItems;
        this.pageCnt = res.totalPages;
        this.importLogs = res.bulkImportView.list;
        filters = res.bulkImportView.filters;
        this.importLogs.forEach(element => {
          element.fileName = element.attachmentViewModel.fileValue;
        });
      } else {
        this.importLogs = [];
        this.totalRowsCount = 0;
        this.pageCnt = 0;
      }
      const columns = [
        { field: 'fileName', header: 'File Name', sort: false },
        { field: 'recordCount', header: 'Total Records', sort: false },
        { field: 'successCount', header: 'Success Records', sort: false },
        { field: 'failureCount', header: 'Failure Records', sort: false },
        { field: 'processedCount', header: 'Processed Records', sort: false },
        { field: 'status', header: 'Status', sort: false },
        { field: 'view', header: 'Action', sort: false }
      ];
      this.logSettings = {
        model: [],
        rows: this.importLogs,
        columns: columns,
        totalRowsCount: this.totalRowsCount,
        pageCnt: this.pageCnt,
        tablename: title.concat(' Import Logs'),
        componentName: 'bulk-add-logs',
        isPaginationRequired: true,
        filtersList: [],
        isClientSidePaginationReq: true
      };
    });
  }

  rowWiseActions(event: any): void {
    this.router.navigate(['setup-wizard/upload-data/processed-data/' + event.clickedRow.id]);
  }

  getColumns(url: string): void {
    this.httpClient.get(url).subscribe((data: any) => {
      if (data) {
        this.columns = [];
        this.columns = data.colLowerCase;
      }
    });
  }

  checkUrl(): void {
    if (window.location.hash) {
      const option = {
        value: null
      };
      switch (decodeURIComponent(window.location.hash).split('#')[1]) {
        case 'Holidays':
          this.option.setValue(AppSettings.BULKIMP_HLD);
          option.value = AppSettings.BULKIMP_HLD;
          this.onChange(option);
          break;
        case 'Students':
          this.option.setValue(AppSettings.BULKIMP_STD);
          option.value = AppSettings.BULKIMP_STD;
          this.onChange(option);
          break;
        case 'Staff':
          this.option.setValue(AppSettings.BULKIMP_STF);
          option.value = AppSettings.BULKIMP_STF;
          this.onChange(option);
          break;
      }
    }
  }

  reset(): void {
    this.rows = [];
  }

  eventObj(data): any {
    const event = {
      clickedRow: {
        id: ''
      }
    };
    event.clickedRow.id = data;
    return event;
  }
}
