import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { SchoolSyllabusService } from 'app/service/syllabus/syllabus.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'app/service/file-management/store.service';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-syllabus-details',
  templateUrl: './syllabus-details.component.html',
  styleUrls: ['./syllabus-details.component.scss'],
  providers: [SchoolSyllabusService, StoreService]
})
export class SyllabusDetailsComponent extends CommonComponent implements OnInit {
  syllabusForm: FormGroup;
  syllabusDataList: any [] = [];
  syllabusData: any ;
  constructor(public _fb: FormBuilder, public syllabusService: SchoolSyllabusService, public snackBar: MatSnackBar, public route: ActivatedRoute, public storeService: StoreService, public commonService: CommonService) {
    super();
   }

  ngOnInit(): void {
    this.initializeForm();
    if (this.route.params) {
      this.route.params.subscribe((params) => {
        if (params.id) {
          this.syllabusService.syllabusChaptersList(params.id)
          .subscribe(res => this.setSyllabusDetails(res), err => this.errorResponse(err));
        }
      });
    }
  }
  setSyllabusDetails(res?): void {
    this.syllabusData = res;
    this.syllabusDataList = [];
      let tempIds = [];
      // tslint:disable-next-line: no-unused-expression
      res.syllabusDetailsView && res.syllabusDetailsView.map(e => {
          if (e.syllabusCheckPointsListView && e.syllabusCheckPointsListView.length){
            e.syllabusCheckPointsListView.map(el => {
              if (tempIds.findIndex(m => m.syllabusCheckPointsId === el.syllabusCheckPointsId) === -1){
                  tempIds.push(el);
              }
            });
            let checkPoints = tempIds.filter(val => !e.syllabusCheckPointsListView.some(ee => ee.syllabusCheckPointsId === val.syllabusCheckPointsId));
            tempIds = e.syllabusCheckPointsListView;
            checkPoints.map(cp => {
              this.syllabusDataList.push(cp);
            });
            this.syllabusDataList.push(e);
          }else{
            tempIds.map(tm => {
              this.syllabusDataList.push(tm);
            });
            tempIds = [];
            this.syllabusDataList.push(e);
          }
      });
      tempIds.map(tm => {
        this.syllabusDataList.push(tm);
      });
      this.syllabusForm.patchValue(res);
  }
  initializeForm(): void {
    this.syllabusForm = this._fb.group({
      board: [null],
      class: [null],
      course: [null],
      boardSyllabusId: [null],
      name: [null],
      code: [null]
    });
  }
  back(): void{
    history.back();
  }
  getFileNamewithPath(fileName): any{
    if (fileName){
      return this.storeService.getFilePath(fileName); 
    }
  }
}
