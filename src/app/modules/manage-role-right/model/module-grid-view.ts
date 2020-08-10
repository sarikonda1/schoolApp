import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

export interface ModuleGridView extends PagingParams {
    /**Gets or Sets Names */
    names?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;

}

/**ClassResultView to return List of Classes with Validation */
export interface ModuleResultView extends ValidationMessageView {
    /**Gets or Sets Paged List of ClassViewModels */
    pagedModuleViewModels: PagedList<ModuleResultView>;
    filters: Array<any>;
}

export interface PagedList<T> {
    // public PagedList(IQueryable<T> source,pageNumber: number;

    totalItems: number;
    pageNumber: number;
    pageSize: number;
    list: T[];
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPageNumber: number;
    previousPageNumber: number;

    // public PagingHeader GetHeader();
}

/**ValidationMessageView */
export interface ValidationMessageView {
    /**///  */
    // tslint:disable-next-line:no-misused-new
    new(): ValidationMessageView;
    /**Gets or sets list of string mesaages */
    messages: { [key: string]: string };

    /**Gets or sets StatusCode */
    statusCode: number;
}
