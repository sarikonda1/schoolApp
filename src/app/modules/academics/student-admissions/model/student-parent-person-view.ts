import { AttachmentViewModel } from './attachment-view-model';

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
 * Gets or sets FatherDetailsView
 */
export interface StudentParentPersonView { 
    /**
     * Gets or sets GenderTypeId
     */
    genderTypeId?: number;
    /**
     * Gets or sets FirstName
     */
    firstName?: string;
    /**
     * Gets or sets LastName
     */
    lastName?: string;
    /**
     * Gets or sets MiddleName
     */
    middleName?: string;
    /**
     * Gets or sets Occupation
     */
    occupation?: string;
    /**
     * Gets or sets Designation
     */
    designation?: string;
    /**
     * Gets or sets Organization
     */
    organization?: string;
    /**
     * Gets or sets AadhaarNumber
     */
    aadhaarNumber?: any;
    /**
     * Gets or sets PanNumber
     */
    panNumber?: string;
    /**
     * Gets or sets Attachment
     */
    attachment?: AttachmentViewModel;
    /**
     * Gets or sets
     */
    email1?: string;
    /**
     * Gets or sets
     */
    email2?: string;
    /**
     * Gets or sets
     */
    mobileTel?: string;
    /**
     * Gets or sets
     */
    landTel?: string;
    /**
     * Gets or sets
     */
    otherTel?: string;
}