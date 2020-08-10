import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { SyllabusSchedulesService } from 'app/service/syllabus/syllabus-schedules.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
  selector: 'app-syllabus-entry-details',
  templateUrl: './syllabus-entry-details.component.html',
  styleUrls: ['./syllabus-entry-details.component.scss'],
  providers: [SyllabusSchedulesService, StoreService]
})
export class SyllabusEntryDetailsComponent extends CommonComponent implements OnInit {
  syllabusDetails: any;
  syllabusEntryDetailsForm: FormGroup;
  constructor( public syllabusSchedulesService: SyllabusSchedulesService, public route: ActivatedRoute, public _fb: FormBuilder, public commonService: CommonService, public storeService: StoreService) {
    super();
   }

  ngOnInit(): void {
    this.intializeForm();
    if (this.route.params) {
      this.route.params.subscribe((params) => {
        if (params.id) {
          this.getProcessData(params.id);
        }
      });
    }
  }
  intializeForm(): void{
    this.syllabusEntryDetailsForm = this._fb.group({
      board: null,
      className: null,
      section: null,
      course: null,
      teacher: null,
      chapter: null,
      chapterAttachment: null,
      topic: null,
      topicAttachment: null,
      subTopic: null,
      subTopicAttachment: null,
      scheduledCompletionDate: null,
      status: null,
      startDate: null,
      actualCompletionDate: null,
      checkpointName: null,
      testType: null,
      isCumulative: null,
      lastModifiedDate: null
    });
  }
  getProcessData(id): void{
    this.syllabusSchedulesService.syllabusScheduleProcessDetails(id)
    .subscribe(res => this.setProcessDetails(res), err => this.errorResponse(err));
  }
  setProcessDetails(res): void{
    this.syllabusDetails = res.syllabusEntryDetailsView;
    res.syllabusEntryDetailsView.scheduledCompletionDate  = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.scheduledCompletionDate);

    res.syllabusEntryDetailsView.startDate = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.startDate);

    res.syllabusEntryDetailsView.lastModifiedDate =  this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.lastModifiedDate);

    res.syllabusEntryDetailsView.actualCompletionDate  = this.getFormattedDateBySchoolDateFormat(this.syllabusDetails.actualCompletionDate);
    this.syllabusEntryDetailsForm.patchValue(res.syllabusEntryDetailsView);
  }
  onBackClick(): void{
    history.back();
  }
}


