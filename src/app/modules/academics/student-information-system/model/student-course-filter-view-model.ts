/**
 * CourseWebAPI
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

export interface StudentCourseFilterViewModel {
    sortBy: any;
    classId: number;
    courseCategoryId?: number;
    sectionId: number;
    studentNames: Array<any>;
    admissionNumbers: Array<any>;
    rollNumbers: Array<any>;
    courseIds: Array<any>;
    sortOrder: 0 | 1 | -1;
    pageNumber: number;
    pageSize: number;
    schoolBoardId: number;
}
/**ValidationMessageView */
export interface ValidationMessageView {
    /**///  */
    // tslint:disable-next-line:no-misused-new
    new(): ValidationMessageView;
    /**Gets or sets list of string mesaages */
    messages: { [key: string]: string };

    /**Gets or sets StatusCode */
    statusCode: number;
}
