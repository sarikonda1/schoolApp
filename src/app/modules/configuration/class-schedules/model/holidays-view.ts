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
 * 
 */
export interface HolidaysView { 
    /**
     * Gets or sets ClassId
     */
    classId?: number;
    /**
     * Gets or sets SectionId
     */
    sectionId?: number;
    /**
     * Gets or sets FromDate
     */
    fromDate: Date;
    /**
     * Gets or sets ToDate
     */
    toDate: Date;
    /**
     * Gets or sets HolidayReason
     */
    holidayReason: string;
    /**
     * Gets or sets IsStaffHoliday
     */
    isStaffHoliday: number;
}
