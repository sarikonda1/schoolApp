import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**ClassFilterView */
export interface EventsFilterView extends PagingParams {
    announcedDateBegin?: Date;
    announcedDateEnd?: Date;
    fromDateBegin?: Date;
    fromDateEnd?: Date;
    toDateBegin?: Date;
    toDateEnd?: Date;
    eventDescription?: string;
    classIds?: Array<string>;
    sectionIds?: Array<string>;
    statusIds?: Array<string>;
    eventTypeIds?: Array<string>;
    sortOrder: SortOrder;
    sortBy: string;

}
