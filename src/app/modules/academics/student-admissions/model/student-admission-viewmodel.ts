import { AddressView } from 'app/models/address-view';
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
 * StudentAdmissionView
 */
export interface StudentAdmissionView { 
    /**
     * Gets or sets DateOfAdmission
     */
    dateOfAdmission?: Date;
    /**
     * Gets or sets DateOfJoining
     */
    dateOfJoining?: Date;
    /**
     * Gets or sets AdmissionToAcademicSession
     */
    admissionToSchoolBoard?: number;
    /**
     * Gets or sets StudentApplicationId
     */
    studentApplicationId?: string;
    /**
     * Gets or sets AdmissionForSchooAcademicSessionId
     */
    admissionForSchooAcademicSessionId?: number;
    /**
     * Gets or sets AdmissionForClassId
     */
    admissionForClassId: number;
    /**
     * Gets or sets StudentGroupId
     */
    studentGroupId?: number;
    /**
     * Gets or sets
     */
    firstName?: string;
    /**
     * Gets or sets
     */
    lastName?: string;
    /**
     * Gets or sets
     */
    middleName?: string;
    /**
     * Gets or sets
     */
    genderTypeId?: number;
    /**
     * Gets or sets
     */
    aadhaarNumber?: number;
    /**
     * Gets or sets
     */
    dateOfBirth?: Date;
    /**
     * Gets or sets
     */
    nationalityCountryId?: number;
    /**
     * Gets or sets
     */
    religionId?: number;
    /**
     * Gets or sets
     */
    casteId?: number;
    /**
     * Gets or sets
     */
    motherToungeLanguageId?: number;
    /**
     * Gets or sets AddressDetails
     */
    address?: AddressView;
    /**
     * Gets or sets Attachment
     */
    attachment?: AttachmentViewModel;
    /**
     * Gets or sets
     */
    primaryEmail?: string;
    /**
     * Gets or sets
     */
    secondaryEmail?: string;
    /**
     * Gets or sets
     */
    mobileNumber?: string;
    /**
     * Gets or sets
     */
    landNumber?: string;
    /**
     * Gets or sets
     */
    alternateNumber?: string;
}