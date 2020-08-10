import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { StaffMemberService } from 'app/service/staff/staff-member.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'app/service/file-management/store.service';
import { RouteConfig } from 'app/url.config';
import { StaffMemberViewResult } from '../../staff-admissions/model/staff-member-view-result';
import { MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent extends CommonComponent implements OnInit, OnChanges {

  applicantInfo: any;
  profileImage: any;
  staffId: string;
  acord: Array<Acord> = [];
  staffData: any;
  // applicantInfo: any;


  constructor(private router: Router, public commonService: CommonService, private staffService: StaffMemberService, private storeService: StoreService,
    private changeDetector: ChangeDetectorRef, private route: ActivatedRoute, public snackBar: MatSnackBar, public location: Location) {
    super();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.applicantInfo.currentValue) {
    //   if (this.applicantInfo.staffJobApplicantDetailsView && this.applicantInfo.staffJobApplicantDetailsView.applicationPerson.attachment) {
    //     this.profileImage = this.storeService.getFilePath(this.applicantInfo.staffJobApplicantDetailsView.applicationPerson.attachment.fileName);
    //   }
    //   this.changeDetector.detectChanges();
    // }
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.staffId = params.id;
        this.getStaffDetails();
      }
    });
  }



  getStaffDetails(): void {
    this.staffService.staffMemberDetails(this.staffId).subscribe(data => {
      this.bindStaffDetails(data);
    }, error => {
      this.errorResponse(error);
    });
  }

  bindStaffDetails(data: any): void {
    this.staffData = data;
    for (const key in data) { // Iterating over Key
      if (key !== 'messages' && key !== 'statusCode') {
        if (typeof (data[key]) !== 'object') {
          //// Bind detailCard Data
        }
        else if (data[key] !== null) {
          this.acord.push({ AccordianName: key, Items: this.getKeyValuesOfObject(data[key]) });
        }
      }
    }
    this.applicantInfo = this.acord;
    if (data.attachmentName != null) {
      this.profileImage = this.storeService.getFilePath(data.attachmentName);
    }
  }

  getFormatedName(data: { middleName: string, lastName: string, firstName: string }): void {
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
}

export interface Acord {
  AccordianName: string;
  Items: Array<{ Label: string, Value: string }>;
}

