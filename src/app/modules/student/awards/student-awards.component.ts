import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { CommonComponent } from '../../../shared/common/common.component';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import { LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pattern, AppSettings } from '../../../app.constants';
import { StoreService } from 'app/service/file-management/store.service';
import { EventsService } from 'app/service/academic-service/api/events.service';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'student-awards',
    templateUrl: './student-awards.component.html',
    styleUrls: ['./student-awards.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [StoreService, EventsService]
})
export class StudentAwardsComponent extends CommonComponent implements OnInit {
    awards: any[] = [];
    throttle = 300;
    scrollDistance = 1;
    scrollUpDistance = 2;
    lastPageNumber = 1;
    filterData = {
        announcedDate: null,
        description: null,
        pageNumber: AppSettings.PAGENUMBER,
        pageSize: 5
    };
    studentAwardsForm: FormGroup;
    onLoadApi: boolean;
    constructor(@Inject(LOCALE_ID) public locale: string, public storeService: StoreService, private eventService: EventsService, public snackBar: MatSnackBar) {
        super();
    }
    ngOnInit(): void {
        this.initializeForm();
        this.getAwardsData(false);
    }
    initializeForm(): void {
        this.studentAwardsForm = new FormGroup({
            announcedDate: new FormControl(null),
            description: new FormControl(null),
        });
    }
    resetFilterData(): void {
        this.filterData = {
            announcedDate: null,
            description: null,
            pageNumber: AppSettings.PAGENUMBER,
            pageSize: 5
        };
        this.lastPageNumber = 1;
    }
    getAwardsData(onScroll = true): void {
        this.eventService.getAwards(this.filterData.announcedDate, this.filterData.description, this.filterData.pageNumber, this.filterData.pageSize)
            .subscribe(res => this.setAwardsData(res, onScroll), error => this.errorResponse(error));
    }
    setAwardsData(response, onScroll): void {
        if (response.studentDetails) {
            response = response.studentDetails;
            this.filterData.pageNumber = response.pageNumber;
            this.filterData.pageSize = response.pageSize;
            this.lastPageNumber = response.totalPages;
            if (!onScroll) {
                this.awards = [];
            }
            response.list.map(e => {
                this.awards.push(this.formatAwardsData(e));
            });
        }
        this.onLoadApi = true;
    }
    formatAwardsData(element): any {
        return {
            eventDescription: element.eventDescription,
            result: element.result,
            winningPosition: element.winningPosition,
            announcedDate: this.getFormattedDateBySchoolDateFormat(element.announcedDate),
            fromDate: this.getFormattedDateBySchoolDateFormat(element.fromDate),
            toDate: this.getFormattedDateBySchoolDateFormat(element.toDate),
            attachmentUrl: element.attachment.fileName ? this.storeService.getFilePath(element.attachment.fileName) : null,
        };
    }
    onScrollDown(): void {
        if (this.filterData.pageNumber < this.lastPageNumber) {
            this.filterData.pageNumber += 1;
            this.getAwardsData();
        }
    }
}


