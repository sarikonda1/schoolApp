import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**StudentBasicSearchView */
export interface StudentBasicSearchView extends PagingParams {
    /**Gets or Sets studentId */
    studentId?: string;
    /**Gets or Sets StudentNames */
    studentNames?: string[];
    /**Gets or Sets ClassIds */
    classIds?: any[];
    /**Gets or Sets sectionIds */
    sectionIds?: any[];
    /**Gets or Sets boardIds */
    boardIds?: any[];
    /**Gets or Sets boardIds */
    routeTypeIds?: any[];
    /**Gets or Sets boardIds */
    routeIds?: any[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy-"StudentName ParentName AdmissionNumber Class Status DOB" */
    sortBy: string;
}
