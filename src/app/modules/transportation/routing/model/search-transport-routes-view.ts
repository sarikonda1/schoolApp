import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';


/**SearchStudentLeaveRequestView */
export interface SearchTransportRoutesView extends PagingParams {
    /**Gets or Sets SortBy */
    sortBy: string;
    /**Gets or Sets routeName */
    routeName?: string[];
    /**Gets or Sets routeNumber */
    routeNumber?: string[];
    /**Gets or Sets routeTypeId */
    routeTypeId?: any[];
    /**Gets or Sets routeDescription */
    routeDescription?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
}
