import { SortOrder } from 'app/models/sort-order';
import { PagingParams } from 'app/models/paging-params';

export interface TransportScheduleFilterView extends PagingParams {
    scheduleName?: string[];
    routeTypeId?: string[];
    startTime?: string;
    startTimeBegin?: string;
    startTimeEnd?: string;
    endTime?: string;
    endTimeBegin?: string;
    endTimeEnd?: string;
    sortOrder: SortOrder;
    sortBy: string;
}
