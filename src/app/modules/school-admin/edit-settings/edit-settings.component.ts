import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import * as HttpStatus from 'http-status-codes';

import { SchoolSettingsService } from 'app/service/manage-school/school-settings-service';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.scss'],
  providers: [
    SchoolSettingsService
  ]
})
export class EditSettingsComponent extends CommonComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;
  schoolSettingsForm: any;
  dateFormateDetails: any;
  nameFormateDetails: any;
  schoolSettings: any;
  schoolSettingsView: any;

  constructor(private schoolSettingsService: SchoolSettingsService, public dialog: MatDialog, public commonService: CommonService, public snackBar: MatSnackBar) {
    super();
   }

  ngOnInit(): void {
    this.schoolSettingsForm = new FormGroup({
      moderateCommunication: new FormControl('', [Validators.required]),
      moderateStudentRecordUpdates: new FormControl('', [Validators.required]),
      moderateTestNotifications: new FormControl('', [Validators.required]),
      moderateEventNotifications: new FormControl('', [Validators.required]),
      moderateAssignmentNotifications: new FormControl('', [Validators.required]),
      allowOnlineStudentApplications: new FormControl('', [Validators.required]),
      dateFormatTypeId: new FormControl('', [Validators.required]),
      personNameFormatTypeId: new FormControl('', [Validators.required])
    });

    this.getDateFormateTypes();
    this.getNameFormateTypes();
    this.getSchoolSettings();
  }

  ngOnChanges(): void {
    this.getSchoolSettings();
  }

  getDateFormateTypes(): void {
    this.schoolSettingsService.dateFormatTypes().subscribe(res => this.dateFormateTypesResponse(res));
  }
  dateFormateTypesResponse(data: any): void {
    if (data.statusCode === HttpStatus.OK)
    {
    this.dateFormateDetails = data.commonViewModel;
    }
  }
  getNameFormateTypes(): void {
    this.schoolSettingsService.personNameFormatTypes().subscribe(res => this.nameFormatTypesResponse(res));
  }
  nameFormatTypesResponse(data1: any): void {
    if (data1.statusCode === HttpStatus.OK)
    {
    this.nameFormateDetails = data1.commonViewModel;
    }
  }
  getSchoolSettings(): void {
    this.schoolSettingsService.getSchoolSettings(this.data).subscribe(res => this.getSchoolSettingsResponse(res));
  }
  getSchoolSettingsResponse(data: any): void {
    if (data.schoolSettingsView != null) {
      this.schoolSettings = data.schoolSettingsView;
      this.schoolSettingsForm.controls['moderateCommunication'].setValue(this.schoolSettings.moderateCommunication);
      this.schoolSettingsForm.controls['moderateStudentRecordUpdates'].setValue(this.schoolSettings.moderateStudentRecordUpdates);
      this.schoolSettingsForm.controls['moderateTestNotifications'].setValue(this.schoolSettings.moderateTestNotifications);
      this.schoolSettingsForm.controls['moderateEventNotifications'].setValue(this.schoolSettings.moderateEventNotifications);
      this.schoolSettingsForm.controls['moderateAssignmentNotifications'].setValue(this.schoolSettings.moderateAssignmentNotifications);
      this.schoolSettingsForm.controls['allowOnlineStudentApplications'].setValue(this.schoolSettings.allowOnlineStudentApplications);
      this.schoolSettingsForm.controls['dateFormatTypeId'].setValue(this.schoolSettings.dateFormatTypeId);
      this.schoolSettingsForm.controls['personNameFormatTypeId'].setValue(this.schoolSettings.personNameFormatTypeId);
    }
  }

  updateSchoolSetting(schoolSettingsForm: any): void {
    this.schoolSettingsView = schoolSettingsForm.value;
    this.schoolSettingsView.moderateCommunication = Number(this.schoolSettingsView.moderateCommunication);
    this.schoolSettingsView.moderateStudentRecordUpdates = Number(this.schoolSettingsView.moderateStudentRecordUpdates);
    this.schoolSettingsView.moderateTestNotifications = Number(this.schoolSettingsView.moderateTestNotifications);
    this.schoolSettingsView.moderateEventNotifications = Number(this.schoolSettingsView.moderateEventNotifications);
    this.schoolSettingsView.moderateAssignmentNotifications = Number(this.schoolSettingsView.moderateAssignmentNotifications);
    this.schoolSettingsView.allowOnlineStudentApplications = Number(this.schoolSettingsView.allowOnlineStudentApplications);
    this.schoolSettingsView.allowOnlineStudentApplications = Number(this.schoolSettingsView.allowOnlineStudentApplications);
    this.schoolSettingsView.schoolId = String(this.schoolSettingsView.schoolId);
    this.schoolSettingsView.schoolId = this.data;
    if ( this.schoolSettingsView != null){
    this.schoolSettingsService.updateSchoolSettings(this.schoolSettingsView).subscribe(res => this.updateResponse(res));
  }
}
  updateResponse(data: any): void
  {
    this.openSnackBar(data.messages.ResultMessage);
  }

  cancelSchoolSettings(): void
  {
   this.getSchoolSettings();
  }
}
