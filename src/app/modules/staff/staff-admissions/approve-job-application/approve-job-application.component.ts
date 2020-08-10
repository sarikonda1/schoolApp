import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { CommonComponent } from 'app/shared/common/common.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'app/service/file-management/store.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { RouteConfig } from 'app/url.config';
import { AppSettings } from 'app/app.constants';
import { HeaderValuesView } from '../model/header-values-view';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-approve-job-application',
  templateUrl: './approve-job-application.component.html',
  styleUrls: ['./approve-job-application.component.scss'],
  providers: [StaffJobApplicationService]
})
export class ApproveJobApplicationComponent extends CommonComponent implements OnInit {
  applicantInfo: any;
  profileImage: any;
  jobApplicationId: any;
  approveComments = '';
  approveForm: any;
  staffApplicantInfo: Array<any> = [];
  validate = true;
  resume: string;
  headerValues: HeaderValuesView;
  staffName: string;

  constructor(private route: ActivatedRoute, private storeService: StoreService, private cd: ChangeDetectorRef, public commonService: CommonService,
    private router: Router, private _formBuilder: FormBuilder, public dialogRef: MatDialog, private staffJobApplicationService: StaffJobApplicationService,
    public snackBar: MatSnackBar, public location: Location) {
    super();
    this.headerValues = {
      mobileNumber: '',
      primaryEmail: '',
      statusCode: '',
      fileType: ''
    };
  }

  ngOnInit(): void {
    this.approveForm = this._formBuilder.group({
      processedComments: [null, [Validators.required, Validators.maxLength(180)]]
    });
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.jobApplicationId = params.id;
        this.staffJobApplicationService.fetchStaffDetails(params.id)
          .subscribe(res => {
            this.getJobApplicationDetails(res);
          }, error => {
            this.errorResponse(error);
          });
      }
    });
  }

  getJobApplicationDetails(data): void {
    this.applicantInfo = data.staffJobApplicantDetailsView;
    this.staffName = data.staffJobApplicantDetailsView.staffName;

    if (data.staffJobApplicantDetailsView.person.attachment) {
      this.profileImage = this.storeService.getFilePath(data.staffJobApplicantDetailsView.person.attachment.fileName);
    }
    if (this.applicantInfo.attachment) {
      const fileExtension = this.applicantInfo.attachment.fileName.replace(/^.*\./, '');
      this.resume = AppSettings.RESUME + '.' + fileExtension;
    }

    this.headerValues = {
      mobileNumber: data.staffJobApplicantDetailsView.person.mobileTel,
      primaryEmail: data.staffJobApplicantDetailsView.person.email1,
      statusCode: data.staffJobApplicantDetailsView.status,
      resumeFile: this.resume,
    };

    for (const key1 in this.headerValues) {
      if (key1 !== 'fileType' && this.headerValues[key1] !== null) {
        this.staffApplicantInfo.push({ Label: key1, Value: this.headerValues[key1] });
      }
    }
    this.cd.detectChanges();
  }

  getFormatedName(data): void {
    if (data) {
      if (data.middleName) {
        const fullName: any = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
      else {
        const fullName: any = data.firstName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
    }
  }

  getComments(value): void {
    this.approveComments = value;
  }

  viewAttachment(data: any): void {
    if (this.applicantInfo.attachment && data === 'resumeFile') {
      const nameFileProp = this.storeService.getFilePath(this.applicantInfo.attachment.fileName);
      window.open(nameFileProp);
    }
  }
}
