import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**ClassFilterView */
export interface ClassFilterView extends PagingParams {
    /**Gets or Sets ClassReferences */
    classReferenceIds?: string[] | number[];
    /**Gets or Sets Names */
    names?: string[];
    /**Gets or Sets Codes */
    codes?: string[];
    /**Gets or Sets Descriptions */
    descriptions?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;

}
