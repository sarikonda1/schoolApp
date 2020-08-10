import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

export interface PageInfoGridView extends PagingParams {
    /**Gets or Sets key */
    key?: string[];
    /**Gets or Sets Value */
    value?: string[];
    /**Gets or Sets Culture */
    culture?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy-  */
    sortBy: string;

}

/**ValidationMessageView */
export interface ValidationMessageView {
    /**///  */
    // tslint:disable-next-line: no-misused-new
    new(): ValidationMessageView;
    /**Gets or sets list of string mesaages */
    messages: { [key: string]: string };
    /**Gets or sets StatusCode */
    statusCode: number;
}



/**PageInfoResultView to return List of PageInformation with Validation */
export interface PageInfoResultView extends ValidationMessageView {
    /**Gets or Sets Paged List of PageInfoResultView */
    pageInformationList: PagedList<PageInfoResultView>;
    filters: Array<any>;
}

export interface PagedList<T> {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    list: T[];
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPageNumber: number;
    previousPageNumber: number;
}
