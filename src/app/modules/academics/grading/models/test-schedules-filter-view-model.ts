/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface TestSchedulesFilterViewModel {
    sortBy: any;
    terms: Array<any>;
    testTypes: Array<any>;
    boardIds: Array<any>;
    testNames: Array<any>;
    testStartDatesBegin?: string;
    testStartDatesEnd?: string;
    isPostToCalendar: Array<any>;
    statuses: Array<any>;
    courses: Array<any>;
    classes: Array<any>;
    sections: Array<any>;
    sortOrder: 0 | 1 | -1;
    pageNumber: number;
    pageSize: number;
    testEndDateBegin?: string;
    testEndDateEnd?: string;
    testScheduleDateBegin?: string;
    testScheduleDateEnd?: string;

}

