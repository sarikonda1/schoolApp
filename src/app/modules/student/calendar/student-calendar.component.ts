import { Component, Inject, OnInit, ViewEncapsulation, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { CommonComponent } from '../../../shared/common/common.component';
import { startOfDay, endOfDay } from 'date-fns';
import { LOCALE_ID } from '@angular/core';
import { StudentCalendarService } from 'app/service/parent/student-calendar.service';
import * as _ from 'lodash';
import { CommonService } from 'app/service/common.service';

@Component({
    selector: 'student-calendar',
    templateUrl: './student-calendar.component.html',
    styleUrls: ['./student-calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [StudentCalendarService]
})
export class StudentCalendarComponent extends CommonComponent implements OnInit {
    events = [];
    title = this.commonService.getTranslation('School Calendar');
    colors: any;
    viewDate: Date;
    startDate: Date;
    endDate: Date;
    selectedDay: { date: Date; };
    studentId: any;
    details: any[];
    displayCal: any[] = [];
    filterDate: any;
    calendarResult: any;
    isResLoaded = Promise.resolve(false);

    constructor(@Inject(LOCALE_ID) public locale: string, private studentCalendarService: StudentCalendarService, public commonService: CommonService) {
        super();
    }

    ngOnInit(): void {

        this.viewDate = new Date();
        this.filterDate = this.viewDate;
        this.selectedDay = { date: startOfDay(new Date()) };
        this.getCalender(this.viewDate.getMonth() + 1);
    }


    prepareEventModel(data: any): void {
        this.calendarResult = data;
        this.colors = data.calenderColors;
        this.events = [];
        this.details = [];
        const createCalArray = [];
        this.details = data.studentCalender;
        if (data !== undefined || data !== null) {
            if (data.academicDateView) {
                this.startDate = new Date(data.academicDateView.startDate);
                this.endDate = new Date(data.academicDateView.endDate);
                this.viewDate = this.getDefaultDatee(data.academicDateView);
                this.selectedDay = { date: this.getDefaultDatee(data.academicDateView) };
            }
            if (data.studentCalender) {
                data.studentCalender.forEach(element => {
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
                                color: element.colour
                            });
                        }
                    }
                });
                this.prepareDisplayCal(createCalArray);
            }
        }
    }

    resetTime(date: Date): any {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
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

    dateChange(date: any): void {
        this.filterDate = date;
        this.events = [];
        this.displayCal = [];
        if (this.calendarResult !== undefined) {
            this.prepareEventModel(this.calendarResult);
        }
    }

    getCalender(month: number): void {
        this.studentCalendarService.getAllSchoolCalender(month).subscribe(res => {
            this.calendarResult = res;
            this.prepareEventModel(res);
            this.isResLoaded = Promise.resolve(true);
        }, err => {
            this.isResLoaded = Promise.resolve(true);
        });
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
    }

    dateSelect(event: any): void {
        const index = this.displayCal.findIndex(x => x.dateTitle === this.createDateTitle(event.date));
        if (index !== -1) {
            this.scrollIntoViewById(index);
        }
    }
}


