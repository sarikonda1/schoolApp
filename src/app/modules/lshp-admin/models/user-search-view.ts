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


export class UserSearchView {
    instituteId?: number | string;
    schoolId?: number | string;
    schoolName: string;
    instituteName: string;
    userName: string;
    firstName?: string;
    lastname?: string;
    status?: string;
    pageNumber: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: number;

}
