import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from 'app/shared/common/common.component';
import { RouteConfig } from 'app/url.config';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentRequestService } from 'app/service/student-information-system/student-request.service';
import { StudentRequestView } from '../model/student-request-view';
import { AppSettings } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { StudentActionService } from 'app/service/student-information-system/student-action.service';
import { StudentActionView } from '../model/student-action-view';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';
import { SiblingService } from 'app/service/student-information-system/sibling.service';
import { SiblingStudentView } from '../model/siblingStudentView';
import { StoreService } from 'app/service/file-management/store.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-student-information-details',
  templateUrl: './student-information-details.component.html',
  styleUrls: ['./student-information-details.component.scss'],
  animations: fuseAnimations,
  providers: [StudentRequestService, StudentActionService, StudentAdmissionService, StoreService, SiblingService]
})
export class StudentInformationDetailsComponent extends CommonComponent implements OnInit {
  applicantInfo: any;
  dropoutForm: FormGroup;
  studentRequestForm: FormGroup;
  isValidate = true;
  isDropoutOpen = false;
  isStudentRequestOpen = false;
  profileImage: any;
  requestTypeList: any[] = [];
  studentRequest: StudentRequestView;
  studentDropout: StudentActionView;
  studentId: any;
  dropoutActionTypeList: any[] = [];
  isUpdateSiblingOpen = false;
  siblingIds: any;
  siblingStudentView: SiblingStudentView;
  operations = [];
  constructor(
    private router: Router, private route: ActivatedRoute,
    private _formBuilder: FormBuilder, private changeDetect: ChangeDetectorRef,
    private sanitizer: DomSanitizer, private studentRequestService: StudentRequestService, private dialogRef: MatDialog, public commonService: CommonService,
    private studentAction: StudentActionService, private studentAdmissionService: StudentAdmissionService, private siblingService: SiblingService,
    private storeService: StoreService, public snackBar: MatSnackBar, public location: Location) {
    super();
  }
  ngOnInit(): void {
    this.dropoutForm = this._formBuilder.group({
      studentActionTypeId: [null, [Validators.required]],
      details: [null, [Validators.required, Validators.maxLength(180)]]
    });
    this.studentRequestForm = this._formBuilder.group({
      requestTypeId: [null, Validators.required],
      requestNote: [null, [Validators.maxLength(180)]],
      attachment: [{ fileName: null, fileValue: null }]
    });

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.studentId = params.id;
        this.getStudentDetails();
      }
    });
    this.initiateStudentSiblingView();

  }

  initiateStudentSiblingView(): void {
    this.siblingStudentView = {
      studentId1: '',
      studentId2: null,
      studentId3: null,
      studentId4: null,
      studentId5: null
    };
  }
  getStudentDetails(): void {
    this.studentAdmissionService.studentDetails(this.studentId)
      .subscribe(res => {
        this.getStudentApplicationDetails(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  imgChanged(files): void {
    if (this.checkFileSize(files[0], 'text|docx|pdf|image', 2097152)) {
      this.clearImages();
      return;
    }
    else if (files && files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      const that = this;
      reader.onload = (_event) => {
        that.studentRequestForm.controls.attachment.patchValue({ fileName: files[0].name, fileValue: (<string>reader.result).split(',')[1] });
        that.changeDetect.detectChanges();
      };
    }
  }
  clearImages(): void {
    this.studentRequestForm.controls.attachment.patchValue({ fileName: null, fileValue: null });
  }
  onStudentRequest(): void {
    this.isStudentRequestOpen = true;
  }
  onDropout(): void {
    this.isDropoutOpen = true;
  }
  getStudentApplicationDetails(data): void {
    this.applicantInfo = data.studentDetailsView;
    switch (data.studentDetailsView.statusCode) {
      case AppSettings.STUDENT_DROPOUT_STATUS:
      case AppSettings.STUDENT_TC_REQUEST:
        this.operations = [{ name: 'Edit Student' },
        { name: 'Student Request' }];
        break;
      default:
        this.operations = [{ name: 'Edit Student' },
        { name: 'Update Sibling' },
        { name: 'Student Request' },
        { name: 'Dropout' }];
        break;
    }

    if (data.studentDetailsView.studentDetails.attachment) {
      this.profileImage = this.storeService.getFilePath(data.studentDetailsView.studentDetails.attachment.fileName);
    }
    this.studentRequestService.getStudentRequestTypes()
      .subscribe(res => this.setStudentRequestTypes(res));

    this.studentAction.getStudentRequestTypes()
      .subscribe(res => this.setStudentActionTypes(res));
  }
  setStudentActionTypes(data): void {
    this.dropoutActionTypeList = data;
  }
  setStudentRequestTypes(data): void {
    this.requestTypeList = data;
  }
  onSubmitDropout(): void {
    if (this.dropoutForm.valid) {
      this.studentDropout = {};
      this.studentDropout = this.dropoutForm.value; this.studentDropout.studentId = this.studentId;
      this.studentAction.createStudentRequest(this.studentDropout)
        .subscribe(res => this.studentDropoutDetails(res), error => {
          this.errorResponse(error);
        });
    }
  }
  studentDropoutDetails(res): void {
    this.isDropoutOpen = false;
    this.dropoutForm.reset();
    this.getStudentDetails();
    this.openSnackBar(res.messages.ResultMessage);
  }
  onSubmitRequest(): void {
    if (this.studentRequestForm.valid) {
      this.studentRequest = {};
      this.studentRequest = this.studentRequestForm.value;
      this.studentRequest.studentId = this.studentId;
      if (this.studentRequest.attachment && this.studentRequest.attachment.fileName == null && this.studentRequest.attachment.fileValue == null) {
        this.studentRequest.attachment = null;
      }
      this.studentRequestService.createStudentRequest(this.studentRequest)
        .subscribe(res => this.studentRequestDetails(res), error => {
          this.errorResponse(error);
        });
    }
  }
  studentRequestDetails(res): void {
    this.isStudentRequestOpen = false;
    this.studentRequestForm.reset();
    this.openSnackBar(res.messages.ResultMessage);
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
  onUpdateSibling(): void {
    this.isUpdateSiblingOpen = true;
  }
  onSiblingCancel(): void {
    this.isUpdateSiblingOpen = false;
  }
  updateSiblingsSubmit(): void {
    this.initiateStudentSiblingView();
    this.siblingStudentView.studentId1 = this.studentId;
    if (this.siblingIds.length <= AppSettings.MAX_SIBLINGS) {
      for (let index = 0; index < this.siblingIds.length; index++) {
        if (this.siblingStudentView.studentId2 == null) {
          this.siblingStudentView.studentId2 = this.siblingIds[index];
        }
        else if (this.siblingStudentView.studentId3 == null) {
          this.siblingStudentView.studentId3 = this.siblingIds[index];
        }
        else if (this.siblingStudentView.studentId4 == null) {
          this.siblingStudentView.studentId4 = this.siblingIds[index];
        }
        else if (this.siblingStudentView.studentId5 == null) {
          this.siblingStudentView.studentId5 = this.siblingIds[index];
        }
      }
      this.siblingService.studentSibling(this.siblingStudentView).subscribe(res => this.studentSiblingRes(res), error => {
        this.errorResponse(error);
      });
    }
    else {
      this.openSnackBar(AppSettings.SIBLING_EXCEEDS, true);
    }
  }
  studentSiblingRes(data: any): void {
    this.isUpdateSiblingOpen = false;
    this.studentRequestForm.reset();
    this.getStudentDetails();
    this.openSnackBar(data.messages.ResultMessage);
  }
  siblingsDetails(data: any): void {
    this.siblingIds = data;
  }
  studentSettings(): boolean {
    return this.isStudentRequestOpen || this.isDropoutOpen || this.isUpdateSiblingOpen;
  }

  actions(action: any): void {
    switch (action) {
      case 'Edit Student':
        this.router.navigate([RouteConfig._Add_Edit_Student + '/' + this.studentId]);
        break;
      case 'Update Sibling':
        this.isDropoutOpen = false;
        this.isStudentRequestOpen = false;
        this.isUpdateSiblingOpen = true;
        break;
      case 'Student Request':
        this.studentRequestForm = this._formBuilder.group({
          requestTypeId: [null, Validators.required],
          requestNote: [null, [Validators.maxLength(180)]],
          attachment: [{ fileName: null, fileValue: null }]
        });
        this.isDropoutOpen = false;
        this.isStudentRequestOpen = true;
        this.isUpdateSiblingOpen = false;
        break;
      case 'Dropout':
        this.isUpdateSiblingOpen = false;
        this.isStudentRequestOpen = false;
        this.isDropoutOpen = true;
        break;
    }
  }

}
