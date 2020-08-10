import {Component, OnChanges, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { fuseAnimations } from '@fuse/animations';
import { CommonComponent } from 'app/shared/common/common.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-class-summary',
  templateUrl: './class-summary.component.html',
  styleUrls: ['./class-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class ClassSummaryComponent extends CommonComponent implements OnInit, OnChanges {

  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) { super(); }
  classStudentSummery: any;
  sectionStudentSummery: any;
  classSectionsStudentSummery: any;
  displayDrilldown = false;
  view: any[] = [ , 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Class';
  xAxisSectionLabel = 'Section';
  showYAxisLabel = true;
  yAxisLabel = 'Strength';
  isLoading = true;

  ngOnInit(): void {
    this.getClassSummary();
  }

  ngOnChanges(): void {
    this.getClassSummary();
  }

  getClassSummary(): void {
    this.dashBoardService.classSummary()
      .subscribe(res => this.setDetails(res));
  }

  setDetails(response: any): void {
    this.classStudentSummery = [];
    this.classSectionsStudentSummery = [];
    response.forEach( element => {
      const children = [];
      element.sectionOccupancies.forEach(section => {
        children.push({ name: section.sectionName, value: section.strength});
      });
      /*const series =  [
        {
          'name' : 'Strength',
          'value': element.strength
        },
        {
          'name' : 'Remaining Occupancy',
          'value': element.totalOccupancy - element.strength
        }
      ];*/
      this.classStudentSummery.push({name: element.className, value: element.strength, children: children});
      this.classSectionsStudentSummery.push({name: element.className, value: element.strength, children: children});
    });
    this.isLoading = false;
    this.cd.detectChanges();

  }

  onSelect(event: any): void {
    const currentSection = _.find(this.classSectionsStudentSummery, {name: event.name, value: event.value});
    if (currentSection['children'] && currentSection['children'].length > 0) {
      this.displayDrilldown = true;
      this.sectionStudentSummery = currentSection['children'];
    }

  }

}
