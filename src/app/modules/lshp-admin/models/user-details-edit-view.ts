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
 * UserDetailsEditView
 */
export interface UserDetailsEditView {
    /**
     * Gets or sets
     */
    userId: string;
    /**
     * Gets or sets
     */
    firstName: string;
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
    dateOfBirth?: string;

    /**
    * Gets or sets
    */
    genderTypeId?: number;

     /**
     * Gets or Sets Website
     */
    website?: string;
    /**
     * Gets or Sets Email1
     */
    email1?: string;
    /**
     * Gets or Sets Email2
     */
    email2?: string;
    /**
     * Gets or Sets MobileTel
     */
    mobileTel?: string;
    /**
     * Gets or Sets LandTel
     */
    landTel?: string;
    /**
     * Gets or Sets OtherTel
     */
    otherTel?: string;
      /**
     * Gets or sets
     */
    line1: string;
    /**
     * Gets or sets
     */
    line2?: string;
    /**
     * Gets or sets
     */
    line3?: string;
    /**
     * Gets or sets
     */
    city?: string;
    /**
     * Gets or sets
     */
    stateId?: number | string;
    /**
     * Gets or sets
     */
    pincode?: number | string;
    /**
     * Gets or sets
     */
    countryId?: number | string;
}
