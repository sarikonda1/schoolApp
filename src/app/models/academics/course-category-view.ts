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


export interface CourseCategoryView {
    id?: number;
    name?: string;
    courseTypeId?: number;
    AreAllOptional: number;
    AreAllRequired?: number;
    requiredCount?: number|null;
    optionalCount?: number|null;
    schoolId?: string;
    institutionId?: string;
}
