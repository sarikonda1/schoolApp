import { Component, Inject, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { CommonComponent } from '../../../shared/common/common.component';
import { LOCALE_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TestScheduleService } from '../../../service/grading-service/api/test-schedule-service';
import { TestSchedulesFilterViewModel } from '../../../modules/academics/grading/models/test-schedules-filter-view-model';
import { AppSettings } from '../../../app.constants';
import { CommonService } from 'app/service/common.service';

@Component({
    selector: 'test-schedules-widget',
    templateUrl: './test-schedules-widget.component.html',
    styleUrls: ['./test-schedules-widget.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [TestScheduleService, CommonService]
})
export class TestSchedulesWidgetComponent extends CommonComponent implements OnInit {
    testScheduleItems: any[] = [];
    tableSettings: any;
    columns: any;
    filterViewModel: TestSchedulesFilterViewModel;
    displayedColumns: string[] = ['testType', 'course', 'class', 'section'];
    isLoading = true;
    constructor(@Inject(LOCALE_ID) public locale: string, private testScheduleService: TestScheduleService, public snackBar: MatSnackBar, public cd: ChangeDetectorRef,
    public commonService: CommonService) {
        super();
    }

    ngOnInit(): void {
        if (this.getTokenParam('_as')) {
            this.getTestSchedules();
        }
        else {
            this.isLoading = false;
        }

        this.columns = [
            { field: 'testType', header: 'Test Type', sort: false },
            { field: 'testName', header: 'Test Name', sort: false },
            { field: 'testDate', header: 'Test Date', sort: false },
            { field: 'class', header: 'Class', sort: false },
            { field: 'section', header: 'Section', sort: false },
            { field: 'course', header: 'Subject', sort: false },
        ];
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: AppSettings.PAGENUMBER, pageSize: AppSettings.PAGESIZE,
            classes: [],
            sections: [],
            terms: [],
            boardIds: [],
            testTypes: [],
            testNames: [],
            statuses: [],
            isPostToCalendar: [],
            courses: [],
            testStartDatesBegin: null,
            testStartDatesEnd: null,
            testEndDateBegin: null,
            testEndDateEnd: null,
            testScheduleDateBegin: null,
            testScheduleDateEnd: null
        };
        this.tableSettings = {
            columns: this.columns,
            model: this.filterViewModel,
            rows: this.testScheduleItems,
            isSelectRowRequired: false,
            visibleSelectAll: false,
            isPaginationRequired: false,
            totalRowsCount: this.testScheduleItems.length,
            pageCnt: 1,
            filtersList: null,
            isRowExpandRequired: false,
            hideHeader: true,
            padding: true
        };
    }


    getTestSchedules(): void {
        this.testScheduleService.getTestSchedules(null, null,
            null, null, null,
            null, null,
            null, null,
            null, null, null,
            null, null,
            null, this.getFormattedDateByAPIPattern(this.setDate(new Date(), 'add')),
            this.getFormattedDateByAPIPattern(this.setDate(new Date(), 'sub')), 1, 25).subscribe(data => this.setTestSchedules(data)
            );
    }

    setDate(date: any, operation: string): any {
        const setDate = new Date(date);
        if (operation === 'add') {
            return setDate.setDate(setDate.getDate() - 10);
        }
        if (operation === 'sub') {
            return setDate.setDate(setDate.getDate() + 10);
        }
    }
    setTestSchedules(response): void {
        this.testScheduleItems = [];

        if (response.testScheduleListViewModel !== null && response.testScheduleListViewModel.list !== null) {
            response.testScheduleListViewModel.list.map(e => {                
                e.testDate = (e.testDate == null) ? null : this.commonService.customDateFormat(e.testDate, this.getSchoolDateFormat()).date;
                this.testScheduleItems.push(e);
            });
            this.tableSettings = {
                columns: this.columns,
                model: this.filterViewModel,
                rows: this.testScheduleItems,
                isSelectRowRequired: false,
                visibleSelectAll: false,
                isPaginationRequired: false,
                totalRowsCount: this.testScheduleItems.length,
                pageCnt: 1,
                filtersList: null,
                isRowExpandRequired: false,
                hideHeader: true,
                padding: true,
            };
        }
        this.isLoading = false;
        this.cd.detectChanges();
    }

}


