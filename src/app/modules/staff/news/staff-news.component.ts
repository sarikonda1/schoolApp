import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { fuseAnimations } from '@fuse/animations'; 
import { StudentNewsComponent } from 'app/modules/student/news/student-news.component';
import { NewsService } from 'app/service/parent/news.service';
import { StoreService } from 'app/service/file-management/store.service';
@Component({
    selector     : 'staff-news',
    templateUrl  : '../../student/news/student-news.component.html',
    styleUrls    : ['../../student/news/student-news.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    providers: [NewsService, StoreService]
})
export class StaffNewsComponent extends StudentNewsComponent implements OnInit
{
    
}


