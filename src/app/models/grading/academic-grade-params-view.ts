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
 * AllTestTypeDetailsViewModel
 */
export interface AcademicGradeParamsView {
    sortBy: string;
    sortOrder?: 0 | 1 | -1;
    gradeIndicator: Array<string>;
    highMark: Array<number>;
    lowMark: Array<number>;
    evaluation: Array<string>;
    schoolBoardId: Array<string>;
    classId: Array<string>;
    sectionId: Array<string>;
    pageNumber: number;
    pageSize: number;
}
