import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { CalendarEvent } from 'angular-calendar';
import { CommonComponent } from '../../../shared/common/common.component';
import { addDays, addHours, endOfDay, endOfMonth, startOfDay, subDays } from 'date-fns';
import { AttendanceService } from 'app/service/parent/attendance.service';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';


@Component({
    selector: 'student-attendance',
    templateUrl: './student-attendance.component.html',
    styleUrls: ['./student-attendance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [AttendanceService]
})
export class StudentAttendanceComponent extends CommonComponent implements OnInit {
    attendance: CalendarEvent[];
    title = 'Student Attendance';
    totalNumberOfWorkingDaysInMonth: number;
    totalNumberOfDaysPresentInMonth: number;
    totalNumberOfDaysAbsentInMonth: number;
    viewDate: Date;
    selectedDay: { date: Date; };
    calenderColors: any;
    startDate: Date;
    endDate: Date;
    studentAttendanceStatus: any;
    isResLoaded = Promise.resolve(false);
    constructor(private attendanceService: AttendanceService, public commonService: CommonService) {
        super();
    }

    ngOnInit(): void {
        this.viewDate = new Date();
        this.selectedDay = { date: startOfDay(new Date()) };
        this.getCalender(this.commonService.customDateFormat(this.viewDate.toDateString(), AppSettings.API_DATE_PATTERN).date);
    }

    getCalender(date: Date): void {
        this.attendanceService.getStudentAttendances(date).subscribe(res => {
            this.prepareEventModel(res);
            this.isResLoaded = Promise.resolve(true);
        }, err => {
            this.isResLoaded = Promise.resolve(true);
        });
    }

    prepareEventModel(response: any): void {
        this.calenderColors = response.calenderColors;
        this.studentAttendanceStatus = response.studentAttendanceStatus;
        this.attendance = [];
        if (response.studentAttendances !== undefined && response.studentAttendances !== null && response.studentAttendances.length) {
            if (response.academicDateView) {
                this.startDate = new Date(response.academicDateView.startDate);
                this.endDate = new Date(response.academicDateView.endDate);
                this.viewDate = this.getDefaultDatee(response.academicDateView);
                this.selectedDay = { date: this.getDefaultDatee(response.academicDateView) };
            }
            response.studentAttendances.forEach(element => {
                this.attendance.push({
                    start: startOfDay(new Date(element.attendanceDate)),
                    end: endOfDay(new Date(element.attendanceDate)),
                    title: element.isPresent ? 'Present' : 'Absent',
                    allDay: true,
                    color: {
                        primary: element.isPresent ? element.isPresent : element.isAbsent,
                        secondary: element.isPresent ? element.isPresent : element.isAbsent
                    }
                });
            });
        }
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
}


