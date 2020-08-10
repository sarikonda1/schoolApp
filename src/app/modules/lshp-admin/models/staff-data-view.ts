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
 * StaffDataView
 */
export interface StaffDataView { 
    /**
     * Gets or Sets Password
     */
    password?: string;
    /**
     * Gets or Sets ParentId
     */
    staffId?: number;
    /**
     * Gets or Sets Email
     */
    email?: string;
    /**
     * Gets or Sets SchoolId
     */
    schoolId?: string;
    /**
     * Gets or Sets MobileNumber
     */
    mobileNumber?: string;
    /**
     * Gets or Sets AdmissionNumber
     */
    staffCode?: string;
    /**
     * Gets or Sets StatusCode
     */
    statusCode?: string;
}
