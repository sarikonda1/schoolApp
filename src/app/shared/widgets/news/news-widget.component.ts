import {ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {CommonComponent} from '../../../shared/common/common.component';
import { LOCALE_ID } from '@angular/core';
import { NewsService } from 'app/service/parent/news.service';
import { StoreService } from 'app/service/file-management/store.service';
import { MatSnackBar } from '@angular/material';
import {Spinkit} from 'ng-http-loader';

@Component({
    selector     : 'news-widget',
    templateUrl  : './news-widget.component.html',
    styleUrls    : ['./news-widget.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    providers: [NewsService, StoreService]
})
export class NewsWidgetComponent extends CommonComponent implements OnInit
{
    newsItems: any[] = [];
    public spinkit = Spinkit;
    isLoading = true;
    constructor(@Inject(LOCALE_ID) public locale: string,
                private newsService: NewsService, public storeService: StoreService, public snackBar: MatSnackBar,
                public cd: ChangeDetectorRef){
        super();
    }

    ngOnInit(): void {
        if (this.getTokenParam('_as')) {
            this.getNews();
        }
        else {
            this.isLoading = false;
        }
    }


    getNews(): void{
        this.newsService.news(null, null, 1, 10)
            .subscribe(res => this.setNews(res));
    }
    setNews(response): void{
        response = response.eventsDetails;
        this.newsItems = [];
        if (response !== null) {
            response.list.map(e => {
                e.attachmentUrl = e.attachment.fileName ? this.storeService.getFilePath(e.attachment.fileName) : null;
                this.newsItems.push(e);
            });
        }

        this.isLoading = false;
        this.cd.detectChanges();
    }

}


