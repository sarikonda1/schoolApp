import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**ClassFilterView */
export interface SchoolAcademicSessionFilterView extends PagingParams {
    /**Gets or Sets names */
    names?: Array<string>;
    /**Gets or Sets codes */
    codes?: Array<string>;
    /**Gets or Sets statusId */
    statusIds?: Array<any>;
    /**Gets or Sets startDate */
    startDateBegin?: string;
    /**Gets or Sets startDate */
    startDateEnd?: string;
    /**Gets or Sets endDate */
    endDateBegin?: string;
    /**Gets or Sets endDate */
    endDateEnd?: string;
    /**Gets or Sets onlineApplicationStartDate */
    onlineApplicationStartDateBegin?: string;
    /**Gets or Sets onlineApplicationStartDate */
    onlineApplicationStartDateEnd?: string;
    /**Gets or Sets onlineApplicationEndDate */
    onlineApplicationEndDateBegin?: string;
     /**Gets or Sets onlineApplicationEndDate */
     onlineApplicationEndDateEnd?: string;
    /**Gets or Sets onlineApplicationFees */
    onlineApplicationFees?: Array<string>;
    /**Gets or Sets sortOrder */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;

}
