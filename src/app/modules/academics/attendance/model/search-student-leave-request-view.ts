import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**SearchStudentLeaveRequestView */
export interface SearchStudentLeaveRequestView extends PagingParams {
    /**Gets or Sets StudentNames */
    studentNames?: string[];
    /**Gets or Sets ClassIds */
    ClassIds?: string[];
    /**Gets or Sets SectionIds */
    sectionIds?: string[];
    /**Gets or Sets AdmissionNumbers */
    admissionNumbers?: string[];
    /**Gets or Sets Reasons */
    reasons?: string[];
    /**Gets or Sets FromDate for fromDateBegin */
    fromDateBegin?: Date | string;
    /**Gets or Sets ToDate for fromDateEnd */
    fromDateEnd?: Date | string;
    /**Gets or Sets FromDate for toDateBegin */
    toDateBegin?: Date | string;
    /**Gets or Sets ToDate for toDateEnd */
    toDateEnd?: Date | string;
    /**Gets or Sets StatusIds */
    statusIds?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy-"StudentName ParentName AdmissionNumber Class Status DOB" */
    sortBy: string;
}
