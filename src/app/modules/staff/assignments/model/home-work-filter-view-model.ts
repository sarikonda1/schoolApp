import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**StaffMamberFilterView */
export interface HomeWorkFilterViewModel extends PagingParams {
    boardIds?: string[];
    /**Gets or Sets StatusIds */
    classIds?: string[];
    /**Gets or Sets StaffNames */
    sectionIds?: string[];
    /**Gets or Sets StaffCodes */
    typeIds?: string[];
    /**Gets or Sets Departments */
    courseIds?: string[];
    /**Gets or Sets StaffTypeIds */
    homeWorkNames?: string[];
    /**Gets or Sets SortOrder */
    issueDateBegin?: Date;
    /**Gets or Sets SortBy */
    issueDateEnd?: Date;
    /**Gets or Sets StatusIds */
    dueDateBegin?: Date;
    /**Gets or Sets StaffNames */
    dueDateEnd?: Date;
    /**Gets or Sets StaffCodes */
    termIds?: string[];
    /**Gets or Sets Departments */
    testTypeIds?: string[];
    /**Gets or Sets StaffTypeIds */
    staffTypeIds?: string[];
    /**Gets or Sets SortOrder */
    sortOrder?: SortOrder;
    /**Gets or Sets SortOrder */
    sortBy?: string;
    /**Gets or Sets SortOrder */
    pageNumber: number;
    /**Gets or Sets SortOrder */
    pageSize: number;
}
