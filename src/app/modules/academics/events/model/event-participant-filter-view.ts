import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**ClassFilterView */
export interface EventParticipantFilterView extends PagingParams {
    eventId: string;
    admissionNumber?: string;
    studentName?: string;
    classIds?: Array<string>;
    sectionIds?: Array<string>;
    studentGroupIds?: Array<string>;
    sortOrder: SortOrder;
    sortBy: string;

}
