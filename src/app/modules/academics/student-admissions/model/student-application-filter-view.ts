import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

export interface StudentApplicationFilterView extends PagingParams {
    /**Gets or Sets Names */
    studentName?: string[];
    /**Gets or Sets Names */
    className?: string[];
    /**Gets or Sets Names */
    parentName?: string[];
    /**Gets or Sets Names */
    status?: string[];
    /**Gets or Sets Names */
    classId?: string[];
    /**Gets or Sets Names */
    failedRecords?: string[];
    /**Gets or Sets Codes */
    codes?: string[];
    /**Gets or Sets Descriptions */
    descriptions?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;
}
