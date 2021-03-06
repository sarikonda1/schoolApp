import { AttachmentViewModel } from 'app/modules/academics/student-admissions/model/attachment-view-model';

/**
 * Teacher API
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
 * JobApplicationPersonView
 */
export interface JobApplicationPersonView { 
    /**
     * Gets or sets PersonTitleTypeId
     */
    personTitleTypeId?: number;
    /**
     * gets or sets GenderTypeId
     */
    genderTypeId?: number;
    /**
     * gets or sets FirstName
     */
    firstName?: string;
    /**
     * gets or sets LastName
     */
    lastName?: string;
    /**
     * gets or sets MiddleName
     */
    middleName?: string;
    /**
     * gets or sets AadhaarNumber
     */
    aadhaarNumber?: number;
    /**
     * gets or sets PanNumber
     */
    panNumber?: string;
    /**
     * gets or sets NationalityCountryId
     */
    nationalityCountryId?: number;
    /**
     * gets or sets ReligionTypeId
     */
    religionTypeId?: number;
    /**
     * gets or sets CasteTypeId
     */
    casteTypeId?: number;
    /**
     * gets or sets MotherToungeLanguageId
     */
    motherTongueLanguageId?: number;
    /**
     * gets or sets Email1
     */
    email1?: string;
    /**
     * gets or sets Email2
     */
    email2?: string;
    /**
     * gets or sets MobileTel
     */
    mobileTel?: string;
    /**
     * gets or sets LandTel
     */
    landTel?: string;
    /**
     * gets or sets  OtherTel
     */
    otherTel?: string;
    /**
     * gets or sets AddressLine1
     */
    addressLine1?: string;
    /**
     * gets or sets AddressLine2
     */
    addressLine2?: string;
    /**
     * gets or sets AddressCity
     */
    addressCity?: string;
    /**
     * gets or sets AddressStateId
     */
    addressStateId?: number;
    /**
     * gets or sets AddressPincode
     */
    addressPincode?: string;
    /**
     * gets or sets AddressCountryId
     */
    addressCountryId?: number;
    /**
     * gets or sets Attachment
     */
    attachment?: AttachmentViewModel;
    /**
     * Gets or sets DateOfBirth
     */
    dateOfBirth?: Date;
    /**
     * Gets or sets LanguagesSpoken
     */
    languagesSpoken?: string;
    /**
     * Gets or sets MaritalStatusTypeId
     */
    maritalStatusTypeId?: number;
}
