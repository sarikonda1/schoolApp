import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { CommonComponent } from 'app/shared/common/common.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentApplicationService } from 'app/service/student-admissions-service/student-application.service';
import { StoreService } from 'app/service/file-management/store.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-approve-student',
  templateUrl: './approve-student.component.html',
  styleUrls: ['./approve-student.component.scss']
})
export class ApproveStudentComponent extends CommonComponent implements OnInit {
  applicantInfo: any;
  profileImage: any;
  studentId: any;
  approveComments = '';
  approveForm: any;
  validate = true;
  constructor(private route: ActivatedRoute, 
    private studentApplicationService: StudentApplicationService, 
    private storeService: StoreService, private cd: ChangeDetectorRef,
     private router: Router, private _formBuilder: FormBuilder, public dialogRef: MatDialog,
      public snackBar: MatSnackBar, public location: Location, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.approveForm = this._formBuilder.group({
      processedComments : [null, [Validators.required, Validators.maxLength(180)]]
    });
    this.route.params.subscribe((params) => {
      if (params.id){
        this.studentId = params.id;
        this.studentApplicationService.studentApplicationDetails(params.id)
        .subscribe(res => {
                  this.getStudentApplicationDetails(res);
              }, error => {
                  this.errorResponse(error);
              });
      }
    });
  }

  getStudentApplicationDetails(data): void {
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

  getComments(value): void {
    this.approveComments = value;
  }
}
