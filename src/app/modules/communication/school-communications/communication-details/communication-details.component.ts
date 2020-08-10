import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommunicationService } from 'app/service/communication/communication-service';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AppSettings } from 'app/app.constants';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-communication-details',
  templateUrl: './communication-details.component.html',
  styleUrls: ['./communication-details.component.scss']
})
export class CommunicationDetailsComponent extends CommonComponent implements OnInit {
  communicationId: any;
  communicationList: any;
  nameImgProp: any;
  ApproveButton = true;
  rejectButton = true;

  constructor(private communicationService: CommunicationService, public commonService: CommonService,
    private storeService: StoreService, private route: ActivatedRoute, public snackBar: MatSnackBar, public dialogRef: MatDialog, private _focusMonitor: FocusMonitor) {
    super();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.communicationId = params.id;
      }
    });
    this.communicationDetails();
  }

  communicationDetails(): void {
    this.communicationService.communicationDetails(this.communicationId).subscribe(res => this.communicationDeatilsResponse(res));
  }
  communicationDeatilsResponse(data: any): void {
    if (data.communicationDetailsView != null) {
      this.communicationList = [];
      this.communicationList = data.communicationDetailsView;
      this.communicationList.status === AppSettings.Approved ? (this.rejectButton = true, this.ApproveButton = false) : this.ApproveButton = true;
      this.communicationList.status === AppSettings.Cancelled ? (this.rejectButton = false, this.ApproveButton = false) : this.rejectButton = true;
      this.communicationList.entryDate =
        (this.communicationList.entryDate == null) ? null : this.commonService.customDateFormat(this.communicationList.entryDate, this.getSchoolDateFormat()).date;
      this.communicationList.approvelDate =
        (this.communicationList.approvelDate == null) ? null : this.commonService.customDateFormat(this.communicationList.approvelDate, this.getSchoolDateFormat()).date;
    }
    else {
      this.communicationList = [];
    }

  }

  approveCommunication(): void {
    this.openDialog(true);
  }

  rejectCommunication(): void {
    this.openDialog(false);
  }

  communicationResponse(data): void {
    this.openSnackBar(data.messages.ResultMessage);
    this.communicationDetails();
    this.dialogRef.closeAll();
  }

  download(): void {
    if (this.communicationList.emailContent.attachment.fileName !== null) {
      this.nameImgProp = this.storeService.getFilePath(this.communicationList.emailContent.attachment.fileName);
      window.open(this.nameImgProp);
    }
  }

  openDialog(approveCommunication: boolean): void {
    const title = approveCommunication ? AppSettings.COMMUNICATION_APPROVE : AppSettings.COMMUNICATION_REJECT;
    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
      disableClose: true,
      data: {
        text: this.commonService.getTranslation(title),
        action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES
      },
    });
    this.dialogMethod(dialogRef, approveCommunication);
  }

  dialogMethod(dialogRef: any, approveCommunication: boolean): void {
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.NO) {
        this.dialogRef.closeAll();
      }
      else if (approveCommunication && action === AppSettings.YES) {
        this.communicationService.approveCommunication(this.communicationId).subscribe(data => this.communicationResponse(data), error => {
          this.errorResponse(error);
        });
      }
      else if (!approveCommunication && action === AppSettings.YES) {
        this.communicationService.rejectCommunication(this.communicationId).subscribe(data => this.communicationResponse(data), error => {
          this.errorResponse(error);
        });
      }
    });
    setTimeout(() => {
      this._focusMonitor.stopMonitoring(document.getElementById('reject-button'));
      this._focusMonitor.stopMonitoring(document.getElementById('navButton_1'));
    });
  }
}
