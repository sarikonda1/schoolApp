import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**SearchStudentLeaveRequestView */
export interface SearchJobApplicationsView extends PagingParams {
    /**Gets or Sets applicantName */
    applicantName?: string[];
    /**Gets or Sets applicantReferenceNo */
    applicantReferenceNo?: string[];
    /**Gets or Sets email */
    email?: string[];
    /**Gets or Sets status */
    statusIds?: string[];
    /**Gets or Sets Reasons */
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- */
    sortBy: string;
}
