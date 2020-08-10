import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**StudentDBSearchView */
export interface StudentDBSearchView extends PagingParams {
    
    /**Gets or Sets studentId */
    studentId?: string;
    /**Gets or Sets StudentNames */
    studentNames?: string[];
    /**Gets or Sets ParentNames */
    parentNames?: string[];
    /**Gets or Sets AdmissionNumbers */
    admissionNumbers?: string[];
    /**Gets or Sets ClassIds */
    classIds?: string[];
    /**Gets or Sets StatusIds */
    statusIds?: string[];
    /**Gets or Sets FromDate for DateOfBirth */
    dateOfBirthBegin?: Date;
    /**Gets or Sets ToDate for DateOfBirth */
    dateOfBirthEnd?: Date;
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy-"StudentName ParentName AdmissionNumber Class Status DOB" */
    sortBy: string;
    /**Gets or Sets academicSessions */
    academicSessions?: string[];
    reset?: boolean;
}
