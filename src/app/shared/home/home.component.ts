import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { fuseAnimations } from '@fuse/animations';
import { NewsWidgetComponent } from '../widgets/news/news-widget.component';
import { StudentSummaryComponent } from '../widgets/student-summary/student-summary.component';
import { TestSchedulesWidgetComponent } from '../widgets/test-schedules/test-schedules-widget.component';
import { FuseSidebarService } from '../../../@fuse/components/sidebar/sidebar.service';
import { CalendarDataComponent } from '../widgets/calendar-data/calendar-data.component';
import { FeeComponent } from '../widgets/fee/fee.component';
import { TransportationComponent } from '../widgets/transportation/transportation.component';
import { StaffSummaryComponent } from '../widgets/staff-summary/staff-summary.component';
import { BirthdaysComponent } from '../widgets/birthdays/birthdays.component';
import { NoticeboardComponent } from '../widgets/noticeboard/noticeboard.component';
import { AttendanceComponent } from '../widgets/attendance/attendance.component';
import { WidgetsService } from 'app/service/widget-service/widgets.service';
import {BehaviorSubject, Observable, ReplaySubject, Subscription} from 'rxjs';
import {CommonService} from '../../service/common.service';
import { ClassSummaryComponent } from '../widgets/class-summary/class-summary.component';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: fuseAnimations,
  providers: [WidgetsService]
})
export class HomeComponent extends CommonComponent implements OnInit {
  widgets: any;
  currentDate = new Date();
  subscription: Subscription;
  color = 'accent';
  showWidgets = [];
  refreshWidgets = [];
  currentUserType = '';
  dashboardWidgets: Array<any> = [];
  widgetcomponents = {
    'NewsWidgetComponent': NewsWidgetComponent,
    'StudentSummaryComponent': StudentSummaryComponent,
    'TestSchedulesWidgetComponent': TestSchedulesWidgetComponent,
    'AttendanceComponent': AttendanceComponent,
    'CalendarDataComponent': CalendarDataComponent,
    'FeeComponent': FeeComponent,
    'TransportationComponent': TransportationComponent,
    'StaffSummaryComponent': StaffSummaryComponent,
    'BirthdaysComponent': BirthdaysComponent,
    'NoticeboardComponent': NoticeboardComponent,
    'ClassSummaryComponent' : ClassSummaryComponent,
  };
  constructor(private _fuseSidebarService: FuseSidebarService,
              private _widgetsService: WidgetsService,
              public commonService: CommonService,
              public changeDetector: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.currentUserType = this.getTokenParam('_ut');
    if (!this.currentUserType) {
      this.subscription = this.commonService.getLoggedInUserType().subscribe(
          (response) => {
            if (response && !this.currentUserType) {
              this.getWidgets();
              this.currentUserType = this.getTokenParam('_ut');
            }
          }
      );
    }
    else {
      this.getWidgets();
    }

    // if (this.currentUserType !== '') {
    //   this.getWidgets();
    // }
  }

  getWidgets(): void {
    this._widgetsService.widgetsDetails().subscribe(response => {
      if (response.widgetDetailsView) {
        response.widgetDetailsView.forEach(element => {

          if (element.isVisible == null || element.isVisible === 1) {
            element.isVisible = true;
          } else {
            element.isVisible = false;
          }
          this.showWidgets[element.displayConfig.component] = element.isVisible;
        });
        this.dashboardWidgets = response.widgetDetailsView;
        this.changeDetector.detectChanges();
      }
    });
  }



  reArrangeWidgets(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.dashboardWidgets, event.previousIndex, event.currentIndex);
    const updateData = [];
    this.dashboardWidgets.forEach((dashboardWidget, index) => {
      updateData.push({
        isVisible: dashboardWidget.isVisible,
        sortOrder: index,
        id: dashboardWidget.id
      });
    });
    this._widgetsService.updateWidgetsDetails(updateData).subscribe(res => this.updateWidgetResponse(res)
    );
  }
  toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }

  updateWidgetDisplay(isCheckd: boolean, index: number): void {
    const dashboardWidget = this.dashboardWidgets[index];
    const updateData = [];
    this.dashboardWidgets[index].isVisible = isCheckd;

    updateData.push({
      isVisible: dashboardWidget.isVisible,
      sortOrder: index,
      id: dashboardWidget.id
    });

    this._widgetsService.updateWidgetsDetails(updateData).subscribe(res => this.updateWidgetResponse(res)
    );
  }

  refreshWidgetDisplay(index: number): void {
    const dashboardWidget = this.dashboardWidgets[index];
    this.refreshWidgets[dashboardWidget.displayConfig.component] = true;
    this.changeDetector.detectChanges();
    Observable.timer(1000).subscribe(() => {
      this.refreshWidgets[dashboardWidget.displayConfig.component] = false;
      this.changeDetector.detectChanges();
    });


  }

  updateWidgetResponse(response: any): void {
    this.getWidgets();
  }
}
