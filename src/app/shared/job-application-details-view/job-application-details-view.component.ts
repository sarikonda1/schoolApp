import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-job-application-details-view',
  templateUrl: './job-application-details-view.component.html',
  styleUrls: ['./job-application-details-view.component.scss']
})
export class JobApplicationDetailsViewComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('staffJobApplicantDetailsView') applicantInfo: any;
  profileImage: any;

  constructor(private storeService: StoreService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.applicantInfo.currentValue) {
      this.applicantInfo = changes.applicantInfo.currentValue;     
      this.changeDetector.detectChanges();
    }
  }
}
