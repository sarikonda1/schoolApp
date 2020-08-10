import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { StudentRequestService } from 'app/service/student-information-system/student-request.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApproveStudentRequestView } from '../model/approve-Student-Request';
import { CommonComponent } from 'app/shared/common/common.component';
import { RouteConfig } from 'app/url.config';


@Component({
  selector: 'app-preview-student-request',
  templateUrl: './preview-student-request.component.html',
  styleUrls: ['./preview-student-request.component.scss'],
  providers: [StudentRequestService]
})

export class PreviewStudentRequestComponent extends CommonComponent implements OnInit {

  @ViewChild('dataContainer') dataContainer: ElementRef;
  approveStudentRequestView: ApproveStudentRequestView;
  myTemplate: any;

  constructor(
    public dialogRef: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private studentRequestService: StudentRequestService,
    public commonService: CommonService,
    public snackBar: MatSnackBar
  ) {
    super();
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.approveStudentRequestView = {
          isPreview: true,
          id: params['id'],
          customFields: {}
        };
      }
    });
    this.getPreview();
  }

  ngOnInit() {
  }

  // inputs StudentRequestId
  // API service call as preview with studentRequestId
  getPreview(): void {
    this.studentRequestService.approveRequest(this.approveStudentRequestView).subscribe(
      res => {
        this.openSnackBar(res.messages.ResultMessage);
        this.dataContainer.nativeElement.innerHTML = res['messages']['Preview'];
      }, error => {
        this.errorResponse(error);
      });

  }
  // bind the Html Preview as is from the API along with submit button
  // onSubmit send another request with all CustomAttributes
  onSubmit(): void {
    console.log(document.getElementById('previewHtml').querySelectorAll('*[id]'));
    debugger;

    Array.from(document.getElementById('previewHtml').querySelectorAll('*[id]')).map((x: HTMLInputElement) => {
      this.approveStudentRequestView.customFields[x.id] = x.value;
    });
    this.approveStudentRequestView.isPreview = false;

    this.studentRequestService.approveRequest(this.approveStudentRequestView).subscribe(
      res => {
        // show result in snack bar and redirect to student Requests list
        this.openSnackBar(res.messages.ResultMessage);
        // Redirect to the student Request List page
        this.router.navigate([RouteConfig._Student_Requests]);
      }, error => {
        this.errorResponse(error);
      });
  }

  onCancel(): void {
    // redirect to Student Requests List Page
    this.router.navigate([RouteConfig._Student_Requests]);
  }

}
