import { Component, Inject, LOCALE_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalenderService } from '../../../service/staff/calender.service';
import { endOfDay, startOfDay } from 'date-fns';
import * as _ from 'lodash';
import { CommonComponent } from '../../common/common.component';
import { AppSettings } from 'app/app.constants';
import { StudentCalendarService } from 'app/service/parent/student-calendar.service';

@Component({
  selector: 'app-calendar-data',
  templateUrl: './calendar-data.component.html',
  styleUrls: ['./calendar-data.component.scss'],
  providers: [CalenderService, StudentCalendarService]
})
export class CalendarDataComponent extends CommonComponent implements OnInit {

  events = [];
  title = 'School Calendar';
  colors: any;
  viewDate: Date;
  selectedDay: { date: Date; };
  displayCal: any;
  startDate: Date;
  endDate: Date;
  filterDate: Date;
  currentIndex: any;
  currentDateTitle: any;
  calendarEventsResponse: any;
  isLoading = true;
  isResLoaded = Promise.resolve(false);
  constructor(@Inject(LOCALE_ID) public locale: string, private calenderService: CalenderService, public cd: ChangeDetectorRef, private studentCalendarService:
    StudentCalendarService) {
    super();
  }

  ngOnInit(): void {


    this.viewDate = new Date();
    this.filterDate = this.viewDate;
    this.selectedDay = { date: startOfDay(new Date()) };
    if (this.getTokenParam('_as')) {
      this.getCalender(this.viewDate.getMonth() + 1);
    } else {
      this.isLoading = false;
      this.isResLoaded = Promise.resolve(true);
      this.cd.detectChanges();
    }
  }


  prepareEventModel(calender: any): void {
    this.colors = calender.calenderColors;
    this.events = [];

    if (calender !== undefined || calender !== null) {
      if (calender.academicDatesView) {
        this.startDate = new Date(calender.academicDatesView.startDate);
        this.endDate = new Date(calender.academicDatesView.endDate);
        this.viewDate = this.getDefaultDatee(calender.academicDatesView);
        this.selectedDay = { date: this.getDefaultDatee(calender.academicDatesView) };
        this.prepareCalendar(calender.schoolCalendars);
      }
      if (calender.academicDateView) {
        this.startDate = new Date(calender.academicDateView.startDate);
        this.endDate = new Date(calender.academicDateView.endDate);
        this.viewDate = this.getDefaultDatee(calender.academicDateView);
        this.selectedDay = { date: this.getDefaultDatee(calender.academicDateView) };
        this.prepareCalendar(calender.studentCalender);
      }
    }
  }

  prepareCalendar(input: any): void {
    this.events = [];
    const createCalArray = [];
    if (input) {
      input.forEach(element => {
        this.events.push({
          start: startOfDay(new Date(element.startDate)),
          end: endOfDay(new Date(element.endDate)),
          title: element.name,
          allDay: true,
          color: {
            primary: element.colour,
            secondary: ''
          },
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: false,
          meta: {
            location: 'Launchship',
            notes: 'Event Desc'
          },
          testDate: element.testDate,
          courseName: element.courseName,
          description: element.description,
          attachmentId: element.attachmentId,
          resultAttachmentId: element.resultAttachmentId,
          testMaxMarks: element.testMaxMarks,
          testTime: element.testTime
        });
        let currentDate = new Date(element.startDate);
        currentDate = this.resetTime(currentDate);

        let stopDate = new Date(element.endDate ? element.endDate : element.startDate);
        stopDate = this.resetTime(stopDate);
        const y = this.filterDate.getFullYear();
        const m = this.filterDate.getMonth();
        const firstDay = new Date(y, m, 1);
        const lastDay = new Date(y, m + 1, 0);
        for (currentDate; currentDate <= stopDate; currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1))) {
          if (currentDate >= firstDay && currentDate <= lastDay) {
            createCalArray.push({
              title: element.name,
              testDate: element.testDate,
              courseName: element.courseName,
              description: element.description,
              attachmentId: element.attachmentId,
              resultAttachmentId: element.resultAttachmentId,
              testMaxMarks: element.testMaxMarks,
              testTime: element.testTime,
              date: new Date(currentDate),
              dateTitle: this.createDateTitle(new Date(currentDate)),
              color: element.colour,
              className: element.className,
              sectionName: element.sectionName,
              classSections: (element.classSections !== undefined && element.classSections !== null) ? this.groupByArbitraryNumOfGroup(element.classSections,
                ['className', 'sectionName']) : []

            });
          }
        }
      });
      this.prepareDisplayCal(createCalArray);
    }
    this.isLoading = false;
  }
  getDefaultDatee(_as): any {
    const toDay = new Date();
    if (!_as) {
      return toDay;
    }
    if (toDay.getTime() > new Date(_as.endDate).getTime()) {
      return new Date(_as.endDate);
    } else if (toDay.getTime() < new Date(_as.startDate).getTime()) {
      return new Date(_as.startDate);
    } else {
      return toDay;
    }
  }
  getCalender(month: number): void {
    switch (this.getTokenParam('_ut')) {
      case AppSettings.INSTITUTE_ADMIN:
      case AppSettings.ADMIN:
      case AppSettings.STAFF:
        this.calenderService.getAllSchoolCalender(month).subscribe(res => {
          this.calendarEventsResponse = res;
          this.prepareEventModel(res);
          this.isResLoaded = Promise.resolve(true);
        }, err => {
          this.isLoading = false;
          this.isResLoaded = Promise.resolve(true);
        });
        break;

      case AppSettings.PARENT:
        this.studentCalendarService.getAllSchoolCalender(month).subscribe(res => {
          this.calendarEventsResponse = res;
          this.prepareEventModel(res);
          this.isResLoaded = Promise.resolve(true);
        }, err => {
          this.isLoading = false;
          this.isResLoaded = Promise.resolve(true);
        });
        break;
    }
  }

  resetTime(date: Date): any {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  dateChange(date: any): void {
    this.filterDate = date;
    /*this.events = [];
    this.displayCal = [];
     this.getCalender(date.getMonth() + 1);*/
    if (this.calendarEventsResponse !== undefined) {
      this.prepareEventModel(this.calendarEventsResponse);
    }
    const index = this.displayCal ? this.displayCal.findIndex(x => x.dateTitle === this.createDateTitle(this.filterDate)) : null;
    this.currentIndex = index;
    this.currentDateTitle = this.createDateTitle(this.filterDate);
  }

  createDateTitle(date): any {
    let title = '';
    switch (date.getDate()) {
      case 1:
      case 21:
      case 31:
        title = date.getDate() + 'st' + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
        break;
      case 2:
      case 22:
        title = date.getDate() + 'nd' + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
        break;
      case 3:
      case 23:
        title = date.getDate() + 'rd' + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
        break;

      default:
        title = date.getDate() + 'th' + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
        break;
    }
    return title;
  }

  prepareDisplayCal(cals): void {
    this.displayCal = _.chain(cals)
      .groupBy('dateTitle')
      .map((value, key) => ({ dateTitle: key, events: value }))
      .value();
    const index = this.displayCal.findIndex(x => x.dateTitle === this.createDateTitle(this.filterDate));
    this.currentIndex = index;
    this.currentDateTitle = this.createDateTitle(this.filterDate);
    this.isLoading = false;
    this.cd.detectChanges();
  }

  dateSelect(event: any): void {
    if (this.displayCal === undefined) {
      this.currentIndex = -1;
    }
    else {
      const index = this.displayCal.findIndex(x => x.dateTitle === this.createDateTitle(event.date));
      this.currentIndex = index;
      this.currentDateTitle = this.createDateTitle(event.date);
    }

    /*if (index !== -1) {
      this.scrollIntoViewById(index);
    }*/
  }

  getCurrentEvents(dayEvents: any, date: any): any {
    const updatedDayEvents = [];
    updatedDayEvents[date] = [];
    dayEvents.forEach(dayEvent => {
      updatedDayEvents[date].push({ color: dayEvent.color.primary, cssClass: dayEvent.cssClass });
    });
    // console.log(updatedDayEvents);
    return Array.from(new Set(updatedDayEvents[date].map((item: any) => item.color)));
  }



}
