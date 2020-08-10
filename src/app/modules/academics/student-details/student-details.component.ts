import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, ChangeDetectorRef, OnChanges } from '@angular/core';
import { StoreService } from 'app/service/file-management/store.service';
import {CommonComponent} from '../../../shared/common/common.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent extends CommonComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('studentDetails') applicantInfo: any;
  @Input() isApplicationInfo = false;
  profileImage: any;

  constructor(private storeService: StoreService, private changeDetector: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.applicantInfo.currentValue){
      if (this.applicantInfo.studentDetails && this.applicantInfo.studentDetails.attachment){
        this.profileImage = this.storeService.getFilePath(this.applicantInfo.studentDetails.attachment.fileName);
      }
      this.changeDetector.detectChanges();
    }
  }
  onClickEmergency(id): void{
    this.scrollIntoViewById(id);
    document.getElementById(id).click();
  }
}
