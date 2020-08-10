import { Component, Input, OnInit, TemplateRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewDay } from 'angular-calendar';

import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';

import { CommonComponent } from '../common/common.component';

@Component({
    selector: 'af-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class CalendarComponent extends CommonComponent implements OnInit {
    actions: CalendarEventAction[];
    activeDayIsOpen: boolean;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    dialogRef: any;

    refresh: Subject<any> = new Subject();
    view: string;

    @Input() addNewEvent: boolean;
    @Input() isWidget: boolean;
    @Input() events: CalendarEvent[];
    @Input() title: string;
    @Input() customCellTemplate: TemplateRef<any>;
    @Input() selectedDay: any;
    @Input() selectedCalenderDay: any;
    @Input() viewDate: Date;
    @Input() viewCalenderDate: Date;
    @Input() startDate: Date;
    @Input() endDate: Date;
    @Input() cellHeight: boolean;
    @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() dateSelect: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _matDialog: MatDialog,
    ) {
        super();
        // Set the defaults
        this.view = 'month';
        this.activeDayIsOpen = false;

        this.actions = [
            {
                label: '<i class="material-icons s-16">edit</i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                    this.editEvent('edit', event);
                }
            },
            {
                label: '<i class="material-icons s-16">delete</i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                    this.deleteEvent(event);
                }
            }
        ];

        /**
         * Get events from service/server
         */
        this.setEvents();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {


        const _as = JSON.parse(localStorage.getItem('_as'));
        if (_as){
            if (this.startDate === undefined || this.startDate === null) {
                this.startDate = new Date(_as.startDate);
            }
            if (this.endDate === undefined || this.endDate === null) {
                this.endDate = new Date(_as.endDate);
            }
        }   
        /*const currentDate = new Date();
        if (currentDate.getTime() >= this.startDate.getTime() && currentDate.getTime() <= this.endDate.getTime()) {
            this.viewDate =  currentDate;
             this.selectedDay.date = currentDate;
        }
        else if (currentDate.getTime() < this.startDate.getTime()) {
            this.viewDate =  this.startDate;
            this.selectedDay.date = this.startDate;
        }
        else {
            this.viewDate =  this.endDate;
            this.selectedDay.date = this.endDate;
        }
*/

        if (this.selectedCalenderDay !== undefined && this.selectedDay === undefined) {
            this.selectedDay = this.selectedCalenderDay;
        }
        if (this.viewCalenderDate !== undefined && this.viewDate === undefined) {
            this.viewDate = this.viewCalenderDate;
        }

        /*if (currentDate.getTime() > this.endDate.getTime()) {
            this.viewDate =  this.endDate;
        }*/

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set events
     */
    setEvents(): void {

    }

    /**
     * Before View Renderer
     *
     * @param {any} header
     * @param {any} body
     */
    beforeMonthViewRender({ header, body }): void {

        /**
         * Get the selected day
         */
        const _selectedDay = body.find((_day) => {
            return _day.date.getTime() === this.selectedDay.date.getTime();
        });
        if (_selectedDay) {
            /**
             * Set selected day style
             * @type {string}
             */
            _selectedDay.cssClass = 'cal-selected';
        }

    }

    /**
     * Day clicked
     *
     * @param {MonthViewDay} day
     */
    dayClicked(day: CalendarMonthViewDay): void {
        const date: Date = day.date;
        const events: CalendarEvent[] = day.events;

        if (isSameMonth(date, this.viewDate)) {
            this.activeDayIsOpen = false;
            /*if ( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 )
            {
                this.activeDayIsOpen = false;
            }
            else
            {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }*/
        }
        this.selectedDay = day;
        this.refresh.next();
        this.dateSelect.emit(this.selectedDay);
    }

    /**
     * Event times changed
     * Event dropped or resized
     *
     * @param {CalendarEvent} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    }

    /**
     * Delete Event
     *
     * @param event
     */
    deleteEvent(event): void {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                const eventIndex = this.events.indexOf(event);
                this.events.splice(eventIndex, 1);
                this.refresh.next(true);
            }
            this.confirmDialogRef = null;
        });

    }

    /**
     * Edit Event
     *
     * @param {string} action
     * @param {CalendarEvent} event
     */
    editEvent(action: string, event: CalendarEvent): void {
    }

    /**
     * Add Event
     */
    addEvent(): void {

    }

    onDateChange(data: any): void {
        this.dateChange.emit(new Date(data.date));
    }

    showPrevButton(date: Date): boolean {
        const previousMonth = new Date(date);
        if (date){
         previousMonth.setMonth(date.getMonth() - 1);
        }
        const _as = JSON.parse(localStorage.getItem('_as'));
        if (_as){
            if (this.startDate === undefined || this.startDate === null) {
                this.startDate = new Date(_as.startDate);
            }
            return (this.startDate.getTime() <= previousMonth.getTime());
        }
        return false;
    }

    showNextButton(date: Date): boolean {
        const nextMonth = new Date(date);
        if (date){
         nextMonth.setMonth(date.getMonth() + 1);
        }   
        const _as = JSON.parse(localStorage.getItem('_as'));
        if (_as){
            if (this.endDate === undefined || this.endDate === null) {
                this.endDate = new Date(_as.endDate);
            }
            if (nextMonth.getFullYear() > this.endDate.getFullYear()) {
                return false;
            }
            if (nextMonth.getFullYear() < this.endDate.getFullYear()) {
                return true;
            }
            if (nextMonth.getMonth() <= this.endDate.getMonth()) {
                return true;
            }
        }
        return false;
    }
}


