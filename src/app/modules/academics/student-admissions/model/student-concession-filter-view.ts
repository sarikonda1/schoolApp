import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**ClassFilterView */
export interface StudentConcessionFilterView extends PagingParams {
    studentNames?: Array<string>;
    studentConcessionGroupIds?: string;
    admissionNumber?: Array<string>;
    rollNumber?: Array<string>;
    classIds?: Array<string>;
    sectionIds?: Array<string>;
    sortOrder?: 0 | 1 | -1;
    sortBy?: string;
}
