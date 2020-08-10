
export interface StudentDropoutFilterView extends PagingParams {
    /**Gets or Sets Names */
    studentActionTypeIds?: string[];
    /**Gets or Sets Names */
    classIds?: string[];
    /**Gets or Sets Names */
    classNames?: string[];
    /**Gets or Sets Names */
    studentName?: string[];
    /**Gets or Sets Names */
    admissionNumber?: string[];
    /**Gets or Sets Names */
    details?: string[];
    /**Gets or Sets Names */
    failedRecords?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;
    /**Gets or Sets Names */
    academicSessions?: string[];
}

/** PagingParams **/
export interface PagingParams {
    /**Gets or Sets pageNumber**/
    pageNumber: number;
    /**Gets or Sets pageSize**/
    pageSize: number;
}

/** SortOrder **/
export enum SortOrder {
    //
    // Summary:
    //     The default. No sort order is specified.
    unspecified = -1,
    //
    // Summary:
    //     Rows are sorted in ascending order.
    ascending = 0,
    //
    // Summary:
    //     Rows are sorted in descending order.
    descending = 1
}
