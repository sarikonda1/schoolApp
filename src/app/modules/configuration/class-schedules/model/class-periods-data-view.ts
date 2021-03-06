import { ClassPeriodsMultiView } from './class-periods-multi-view';

/**
 * Course
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
 * ClassPeriodsDataView
 */
export interface ClassPeriodsDataView { 
    /**
     * Gets or Sets ClassTimetableId
     */
    classTimetableId?: string;
    /**
     * Gets or Sets ClassId
     */
    classId?: number;
    /**
     * Gets or Sets SectionId
     */
    sectionId?: number;
    /**
     * Gets or Sets BoardId
     */
    boardId?: number;
    /**
     * Gets or Sets classTimetableTemplateId
     */
    templateId?: number;
    /**
     * Gets or Sets StartDate
     */
    startDate?: Date;
    /**
     * Gets or Sets EndDate
     */
    endDate?: Date;
    /**
     * Gets or Sets SchoolSchedulePeriodId
     */
    schoolSchedulePeriodId?: number;
    /**
     * Gets or Sets ClassPeriodTypeId
     */
    classPeriodTypeId?: number;
    /**
     * Gets or Sets SchoolSchedulePeriodId
     */
    classPeriodsMultiView?: Array<ClassPeriodsMultiView>;
}
