import { Component, OnInit, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { RouteConfig } from 'app/url.config';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { StoreService } from 'app/service/file-management/store.service';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-application-details',
  templateUrl: './student-application-details.component.html',
  styleUrls: ['./student-application-details.component.scss']
})
export class StudentApplicationDetailsComponent extends CommonComponent implements OnInit {
  @ViewChild('rejectPopup') rejectPopup: TemplateRef<any>;
  applicantInfo: any;
  profileImage: any;
  customDialog: MatDialogRef<any, any>;
  studentId: any;
  statusName: string;
  approveForm: FormGroup;
  constructor(private studentApplicationService: StudentApplicationService,
     private cd: ChangeDetectorRef, private router: Router,
      public dialog: MatDialog, private storeService: StoreService, 
      private route: ActivatedRoute, public dialogRef: MatDialog,
       public commonService: CommonService,  public snackBar: MatSnackBar, public location: Location) {
    super();
  }

  ngOnInit(): void  {
    this.statusName = AppSettings.STUDENT_PENDING_APPLICATION_STATUS;
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.studentId = params.id;
        this.studentApplicationService.studentApplicationDetails(params.id)
          .subscribe(res => {
            this.getStudentApplicationDetails(res);
          }, error => {
            this.errorResponse(error);
          });
      }
    });
    this.approveForm = new FormGroup({
      commentText: new FormControl(null, [Validators.maxLength(180), Validators.required]),
    });
  }
  getStudentApplicationDetails(data): void  {
    this.applicantInfo = data.studentDetailsView;
    if (data.studentDetailsView.studentDetails.attachment){
      this.profileImage = this.storeService.getFilePath(data.studentDetailsView.studentDetails.attachment.fileName);
    }
    this.cd.detectChanges();
  }

  getFormatedName(data): void  {
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
  submitApplication(isApprove: Boolean): void  {
    if (isApprove) {
      if (this.applicantInfo.canApplicationApprove){
        this.router.navigate([RouteConfig._Student_Application_Approve + this.studentId]);
      } else{ 
        this.openSnackBar(AppSettings.APPLICATION_FOR_COMPLETED_AS, true);
      }
    } else {
      this.customDialog = this.dialog.open(this.rejectPopup, { width: '400px', disableClose: true });
    }
  }
  onPopUpSelect(reject = true): void  {
    if (reject) {
        if (!this.approveForm.valid){
          return;
        }
        this.studentApplicationService.rejectStudent({studentApplicationId: this.studentId, processedComments: this.approveForm.value.commentText})
        .subscribe(res => {
          this.commentSubmitted(res);
        }, error => {
          this.errorResponse(error);
        });
    }
    this.approveForm.reset();
    this.customDialog.close();
  }
  trimTextBoxSpaces(): void  {
    this.approveForm.controls.commentText.setValue(this.commonService.trimSpaces(this.approveForm.value.commentText));
  }

  commentSubmitted(res): void {
      this.back();
      this.openSnackBar(res.messages.ResultMessage); 
    }
}
