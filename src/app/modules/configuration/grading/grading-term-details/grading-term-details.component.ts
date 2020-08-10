import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { GradingTermDataModel } from 'app/models/grading/grading-term-data-model';
import { AppSettings, URLConstants } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-grading-term-details',
  templateUrl: './grading-term-details.component.html',
  styleUrls: ['./grading-term-details.component.scss']
})
export class GradingTermDetailsComponent extends CommonComponent implements OnInit {
  gradeTermId: any;
  fieldListTest: any;
  fieldListClass: any;
  classsections: any;
  dataConfiguration: any;
  dataTest: Array<any>;
  data: any;
  evaluationTypes: Array<any> = [];
  gradeTermIds: Array<any> = [];
  marksGroupCriteria: Array<any> = [];
  testTypes: Array<any> = [];
  priorGradingTerms: Array<any> = [];
  filterYesNo: Array<any> = [];
  appliedClassSection: any;
  classSectionRows: any;
  gradeTestContributionRows: any[];
  gradeTestContributionSettings: any;
  additionalColumns: any; 
  additionalColumnsRows: any[];
  constructor(public _commonService: CommonService, private gradeTermConfigurationService: GardeTermConfigurationService, private router: Router, private routes: ActivatedRoute,
     public location: Location) {
    super();
  }

  gradeClassSectionCols = [
    { field: 'className', header: 'Class Name', sort: false },
    { field: 'sectionName', header: 'Section Name', sort: false },
  ];

  additionalColumnsData = [
    { field: 'title', header: 'Column Name', sort: false },
    { field: 'gradingTermName', header: 'Grading Term', sort: false },
    { field: 'contribution', header: 'Contribution %' , sort: false },
    { field: 'isVisible', header: 'Is Visible', sort: false },
  ];

  columnsToDisplayTest = [
    { field: 'testTypeName', header: 'Name', sort: false },
    { field: 'contribution', header: 'Contribution', sort: false },
    { field: 'consideration', header: 'Consideration', sort: false},
    { field: 'isDisplayOnreportCard', header: 'Displayed On Report Card', sort: false },
    { field: 'otherGradingTermId', header: 'Prior Grading Term', sort: false },
    { field: 'marksGroupCriteriaId', header: 'Marks Group Criteria', sort: false },
    { field: 'marksGroupCriteriaCount', header: 'Marks Group Criteria Count', sort: false },
    { field: 'displayGradeorMarks', header: 'Display Grade/Marks', sort: false },
  ];

  gradeTermConfigurationColumns =
    {
      termName: 'Term Name',
      description: 'Description',
      displayName: 'Display Name',
      termCode: 'Term Code',
      evaluationTypeId: 'Evaluation Type Id',
      evaluationTypeName: 'Evaluation Type',
      generateReportCard: 'Generate Report',
      termStartDate: 'Term Start Date',
      termEndDate: 'Term End Date',
      generateOverAllGrade: 'Generate Overall Grade',
      overALLGradeDisplayName: 'Overall Grade Display Name',
      schoolBoardName: 'School Board'
    };

  ngOnInit(): void {
    this.getEvaluationTypeList();
    this.yesNoList();
    this.getMarksGroupCriteria();
    this.getTestTypes();

    this.routes.params
      .subscribe((params: Params) => this.gradeTermId = params['Id']);

    this.gradeTermConfigurationService.gradingTermConfigurationGradeTermGet(this.gradeTermId).subscribe(res => {
      
      this.data = res.gradingTermConfigurationDataViewModel[0].gradingTermClassSectionViewModel;
      const sections = [];
      for (const section of this.data) {
        sections.push(section.sectionsId);
      }
      const dataInfo = {
        boardId: this.data[0].boardId,
        classId: this.data[0].classId,
        sectionId: sections
      };
      this.getPriorGradingTerms(res, dataInfo); 
    });
  }

  configurationResponse(_data: GradingTermDataModel): void {
    delete _data['gradingTermTestViewModel'];
    delete _data['gradingTermClassSectionViewModel'];
    delete _data['id'];
    delete _data['evaluationTypeId'];
    delete _data['schoolBoardId'];
    delete _data['isContribution'];
    this.dataConfiguration = _data;
    this.dataConfiguration.termStartDate = (this.dataConfiguration.termStartDate == null) ?
      null : this._commonService.customDateFormat(this.dataConfiguration.termStartDate, this.getSchoolDateFormat()).date;
    this.dataConfiguration.termEndDate = (this.dataConfiguration.termEndDate == null) ?
      null : this._commonService.customDateFormat(this.dataConfiguration.termEndDate, this.getSchoolDateFormat()).date;
    this.dataConfiguration.testsStartDate = (this.dataConfiguration.testsStartDate == null) ?
      null : this._commonService.customDateFormat(this.dataConfiguration.testsStartDate, this.getSchoolDateFormat()).date;
    this.dataConfiguration.testsEndDate = (this.dataConfiguration.testsEndDate == null)
      ? null : this._commonService.customDateFormat(this.dataConfiguration.testsEndDate, this.getSchoolDateFormat()).date;
    this.dataConfiguration.generateOverAllGrade = this._commonService.defaultEmpty(
      this._commonService.selectedDropDownData(this.filterYesNo, this.dataConfiguration.generateOverAllGrade)).label;
    this.dataConfiguration.generateReportCard = this._commonService.defaultEmpty(
      this._commonService.selectedDropDownData(this.filterYesNo, this.dataConfiguration.generateReportCard)).label;
  }




  getEvaluationTypeList(): void {
    this.evaluationTypes = [];
    this.gradeTermConfigurationService.evaluationTypes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.evaluationTypes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });
  }

  getMarksGroupCriteria(): void {
    this.marksGroupCriteria = [];
    this.gradeTermConfigurationService.fetchMarksGroupCriteria().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.marksGroupCriteria.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });

  }

  yesNoList(): void {
    this.filterYesNo = [];
    this.filterYesNo.push({
      label: AppSettings.YES,
      value: 1
    });
    this.filterYesNo.push({
      label: AppSettings.NO,
      value: 0
    });
  }

  getPriorGradingTerms(res, data): void {
    this.priorGradingTerms = [];
    this.gradeTermConfigurationService.fetchGradingTermsByBoardId(data.boardId, data.classId, data.sectionId).subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.priorGradingTerms.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
      this.dataTest = res.gradingTermConfigurationDataViewModel[0].gradingTermTestViewModel;
     this.additionalColumnsRows = [];
      for (const value of res.gradingTermConfigurationDataViewModel[0].usedGradingTermAdditionalView){
        this.additionalColumnsRows.push(this.setAdditionalColumnData(value)); 
      }
      for (const value of res.gradingTermConfigurationDataViewModel[0].forGradingTermAdditionalView){
        this.additionalColumnsRows.push(this.setAdditionalColumnData(value, true)); 
      } 
      this.configurationResponse(res.gradingTermConfigurationDataViewModel[0]);
      this.fieldListClass = this.gradeClassSectionCols.map(x => x.field);
      this.dataTest.forEach(e => {
        e.marksGroupCriteriaId = this._commonService.defaultEmpty(this._commonService.selectedDropDownData(this.marksGroupCriteria, e.marksGroupCriteriaId)).label,
          e.isDisplayOnreportCard = this._commonService.defaultEmpty(this._commonService.selectedDropDownData(this.filterYesNo, e.isDisplayOnreportCard)).label,
          e.otherGradingTermId = this._commonService.defaultEmpty(this._commonService.selectedDropDownData(this.priorGradingTerms, e.otherGradingTermId)).label,
          e.displayGradeorMarks = this._commonService.defaultEmpty((this._commonService.selectedDropDownData(this.evaluationTypes, e.displayTypeId))).label;
      });
      for (let i = 0; i < this.columnsToDisplayTest.length; i++){
           const index = this.dataTest.findIndex(e => e[this.columnsToDisplayTest[i].field]);
           if (index === -1){
            this.columnsToDisplayTest.splice(i, 1);
          } 
      }
      this.fieldListTest = this.columnsToDisplayTest.map(x => x.field);
      this.getGradeTermTable(); 
    });

  }

  getTestTypes(): void {
    this.testTypes = [];
    this.gradeTermConfigurationService.fetchTestTypes().subscribe(response => {
      if (response.listViews != null) {
        if (response.listViews.length) {
          response.listViews.forEach(element => {
            this.testTypes.push({
              label: element.name,
              value: element.id
            });
          });
        }
      }
    });

  }

  onBackButtonClick(): void {
    this.router.navigate(
      [URLConstants.GRADE_TERMS]);
  }

  getGradeTermTable(): any {
    this.classSectionRows = this.data;
    this.appliedClassSection = {
      rows: this.classSectionRows,
      columns: this.gradeClassSectionCols,
      hideHeader: true,
      tabTable: true,
      padding: true
    };
    this.gradeTestContributionRows = this.dataTest;
    this.gradeTestContributionSettings = {
      rows: this.gradeTestContributionRows,
      columns: this.columnsToDisplayTest,
      hideHeader: true,
      tabTable: true,
      padding: true
    };
    this.additionalColumns = {
      rows: this.additionalColumnsRows,
      columns: this.additionalColumnsData,
      hideHeader: true,
      // tabTable: true,
      padding: true
    };
  }
  setAdditionalColumnData(value, isPresentGradingTerm = false): any{
    return { 
      title: value.title,
      gradingTermName: value.gradingTermName,
      isVisible: value.isVisible ? 'YES' : 'NO',
      contribution: value.contribution, 
    };
  }

}


