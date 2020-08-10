import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { JobApplicationCommentsView } from '../model/job-application-comments-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { StoreService } from 'app/service/file-management/store.service';
import { CommonService } from 'app/service/common.service';
import { HeaderValuesView } from '../model/header-values-view';
import { RouteConfig } from 'app/url.config';
import { AppSettings } from 'app/app.constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-application-details',
  templateUrl: './job-application-details.component.html',
  styleUrls: ['./job-application-details.component.scss'],
  providers: [StaffJobApplicationService]
})
export class JobApplicationDetailsComponent extends CommonComponent implements OnInit {
  @ViewChild('rejectPopup') rejectPopup: TemplateRef<any>;
  jobApplicationCommentsView: JobApplicationCommentsView;
  customDialog: MatDialogRef<any, any>;
  approveForm: FormGroup;
  jobApplicationId: any;
  applicantInfo: any;
  profileImage: any;
  statusName: string;
  staffName: string;
  resume: any;
  acord: Array<Acord> = [];
  staffApplicantInfo: Array<any> = [];
  fullName: any;
  headerValues: HeaderValuesView;

  constructor(private router: Router, public dialog: MatDialog, private staffJobApplicationService: StaffJobApplicationService,
    public dialogRef: MatDialog, private route: ActivatedRoute, private cd: ChangeDetectorRef, public commonService: CommonService,
    private storeService: StoreService, public snackBar: MatSnackBar, public location: Location) {
    super();
    this.headerValues = {
      mobileNumber: '',
      primaryEmail: '',
      statusCode: '',
      applicationReferenceNo: '',
      resumeFile: '',
    };
  }

  ngOnInit(): void {
    this.statusName = AppSettings.JOB_APPLICATION_PENDING_APPLICATION_STATUS;
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.jobApplicationId = params.id;
        this.staffJobApplicationService.jobApplicationData(params.id)
          .subscribe(res => {
            this.getJobApplicationDetails(res);
          }, error => {
            this.errorResponse(error);
          });
      }
    });
    this.approveForm = new FormGroup({
      commentText: new FormControl(null, [Validators.minLength(1), Validators.maxLength(180), Validators.required]),
    });
    this.jobApplicationCommentsView = {};
  }

  getJobApplicationDetails(data): void {
    this.staffName = data.staffName;
    this.getFormatedName(data);
    for (const key in data) { // Iterating over Key
      if (key !== 'messages' && key !== 'statusCode') {
        if (typeof (data[key]) !== 'object') {
          //// Bind detailCard Data
        }
        else if (key === 'educationDetails' || key === 'trainingDetails' || key === 'workExperience') {
          if (data[key] !== null) {
            for (let index = 0; index < data[key].length; index++) {
              if (this.acord.find(x => x.AccordianName === key)) {
                const i = this.acord.findIndex(x => x.AccordianName === key);
                this.acord[i].Items.push(this.getKeyValuesOfObject(data[key][index]));
              }
              else {
                this.acord.push({ AccordianName: key, Items: [] });
                const i = this.acord.findIndex(x => x.AccordianName === key);
                this.acord[i].Items.push(this.getKeyValuesOfObject(data[key][index]));
              }
            }
          }
        }
        else if (data[key] !== null) {
          this.acord.push({ AccordianName: key, Items: this.getKeyValuesOfObject(data[key]) });
        }
      }
    }
    if (data.photoAttachmentName) {
      this.profileImage = this.storeService.getFilePath(data.photoAttachmentName);
    }
    this.applicantInfo = this.acord;
    if (data.resumeAttachmentName) {
      const fileExtension = data.resumeAttachmentName.replace(/^.*\./, '');
      this.resume = AppSettings.RESUME + '.' + fileExtension;
    }

    this.headerValues = {
      mobileNumber: data.contactInfo.mobileNumber,
      primaryEmail: data.contactInfo.primaryEmail,
      statusCode: data.statusName,
      applicationReferenceNo: data.applicationReferenceNo,
      seekingPosition: data.seekingPosition,
      resumeFile: this.resume,
      processedComments: data.processedComments,
      fileType: data.resumeAttachmentName
    };

    for (const key1 in this.headerValues) {
      if (key1 !== 'applicationReferenceNo' && key1 !== 'fileType' && this.headerValues[key1] !== null) {
        this.staffApplicantInfo.push({ Label: key1, Value: this.headerValues[key1] });
      }
    }
    this.cd.detectChanges();
  }

  getFormatedName(data): void {
    if (data) {
      if (data.staffDetails.middleName) {
        const fullName: any = data.staffDetails.firstName + ' ' + data.staffDetails.middleName + ' ' + data.staffDetails.lastName;
        this.fullName = fullName.replace(/  +/g, ' ').trim();
      }
      else {
        const fullName: any = data.staffDetails.firstName + ' ' + data.staffDetails.lastName;
        this.fullName = fullName.replace(/  +/g, ' ').trim();
      }
    }
  }

  submitApplication(isApprove: Boolean): void {
    if (isApprove) {
      this.router.navigate([RouteConfig.APPROVE_JOB_APPLICATION + '/' + this.jobApplicationId]);
    } else {
      this.customDialog = this.dialog.open(this.rejectPopup, { width: '400px', disableClose: true });
    }
  }

  onPopUpSelect(reject = true): void {
    if (reject) {
      if (!this.approveForm.valid) {
        return;
      }
      this.jobApplicationCommentsView.jobApplicationId = this.jobApplicationId;
      this.jobApplicationCommentsView.processedComments = this.approveForm.value.commentText;
      this.staffJobApplicationService.rejectJobApplication(this.jobApplicationCommentsView)
        .subscribe(res => {
          this.commentSubmitted(res);
        }, error => {
          this.errorResponse(error);
        });
    }
    this.approveForm.reset();
    this.customDialog.close();
  }

  commentSubmitted(res): void {
    this.back();
    this.openSnackBar(res.messages.ResultMessage);
  }

  viewAttachment(data: any): void {
    if (this.headerValues.fileType && data === 'resumeFile') {
      const nameFileProp = this.storeService.getFilePath(this.headerValues.fileType);
      window.open(nameFileProp);
    }
  }
}

export interface Acord {
  AccordianName: string;
  Items: Array<any>;
}
