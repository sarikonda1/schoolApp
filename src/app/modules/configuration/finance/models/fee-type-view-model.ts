/**
 * Fee
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
 * FeeTypeViewModel
 */
export interface FeeTypeViewModel { 
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets DisplayName
     */
    displayName?: string;
    /**
     * Gets or Sets Code
     */
    code?: string;
    /**
     * Gets or Sets FeeDescription
     */
    feeDescription?: string;
    /**
     * Gets or Sets IsSameForEntireClass
     */
    isSameForEntireClass: number;
    /**
     * Gets or Sets SchoolFacilitiyId
     */
    schoolFacilityId?: number;
    /**
     * Gets or Sets FeeTypeCategoryId
     */
    feeTypeCategoryId: number;
    /**
     * Gets or Sets FeeAccountId
     */
    feeAccountId: number;
    /**
     * Gets or Sets FeeTermId
     */
    feeTermIds?: Array<number>;
}