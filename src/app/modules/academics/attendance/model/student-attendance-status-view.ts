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
 * StudentAttendanceStatusView
 */
export interface StudentAttendanceStatusView { 
    /**
     * Gets or Sets Id
     */
    id?: string;
    /**
     * Gets or Sets StudentId
     */
    schoolAcademicSessionStudentId?: string;
    /**
     * Gets or Sets IsAbsent
     */
    isAbscent?: string;
    /**
     * Gets or Sets IsPresent
     */
    isPresent?: string;
    /**
     * Gets or Sets Calendar_Date
     */
    calendarDate?: Date;
    /**
     * Gets or Sets leaveRequestId
     */
    leaveRequestId?: string;

}
