import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {CommonComponent} from '../../../shared/common/common.component';
import {addDays, addHours, endOfMonth, startOfDay, subDays} from 'date-fns';
import { LOCALE_ID } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pattern, AppSettings} from '../../../app.constants';
import { NewsService } from 'app/service/parent/news.service';
import { StoreService } from 'app/service/file-management/store.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector     : 'student-news',
    templateUrl  : './student-news.component.html',
    styleUrls    : ['./student-news.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations, 
    providers: [NewsService, StoreService] 
})
export class StudentNewsComponent extends CommonComponent implements OnInit
{
    newsItems: any[] = [];
    studentNewsForm: FormGroup;
    filterData = {
        announcedDate: null,
        eventDescription: null,
        pageNumber: AppSettings.PAGENUMBER,
        pageSize: 20
    };
    throttle = 300;
    scrollDistance = 1;
    scrollUpDistance = 2;
    lastPageNumber = 1;
    invalidDateMsg : any;
    onLoadApi: boolean;
    constructor(@Inject(LOCALE_ID) public locale: string, private newsService: NewsService, public storeService: StoreService, public snackBar: MatSnackBar){
        super();
    }

    ngOnInit(): void { 
        this.initializeForm(); 
        this.getNews(false);
        this.invalidDateMsg = AppSettings.DATE_MSG;
    }
    initializeForm(): void {
        this.studentNewsForm = new FormGroup({
            announcedDate: new FormControl(null),
            eventDescription: new FormControl(null),
        }); 
    }
    resetFilterData(): void{
        this.filterData = {
            announcedDate: null,
            eventDescription: null,
            pageNumber: AppSettings.PAGENUMBER,
            pageSize: 20
        };
        this.lastPageNumber = 1;
    } 
    getNews(onScroll = true): void{
        this.newsService.news(this.filterData.announcedDate, this.filterData.eventDescription, this.filterData.pageNumber, this.filterData.pageSize)
        .subscribe(res => this.setNews(res, onScroll), err => this.errorResponse(err));
    }
    setNews(response, onScroll): void{ 
        response = response.eventsDetails;
        if (response !== null) {
            this.filterData.pageNumber = response.pageNumber;
            this.filterData.pageSize = response.pageSize;
            this.lastPageNumber = response.totalPages;
            if (!onScroll){
                this.newsItems = [];
            }
            response.list.map(e => {
                e.attachmentUrl = e.attachment.fileName ? this.storeService.getFilePath(e.attachment.fileName) : null;
                this.newsItems.push(e);
            });
        }
        else if (!onScroll) {
            this.newsItems = [];
        }
        this.onLoadApi = true;
    }
    onScrollDown(): void {  
        if (this.filterData.pageNumber < this.lastPageNumber){
            this.filterData.pageNumber += 1; 
            this.getNews(); 
        } 
    }  
    onSubmitEvent(): void{
        if (this.studentNewsForm.valid){
            this.resetFilterData();
            this.filterData.announcedDate = this.studentNewsForm.value.announcedDate;
            this.filterData.eventDescription = this.studentNewsForm.value.eventDescription;
            this.getNews(false);
        }
    }
}


