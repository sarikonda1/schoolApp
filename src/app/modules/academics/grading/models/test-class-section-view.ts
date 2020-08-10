import { TestScheduleView } from './test-schedule-view';

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
 * Gets or Sets EventClassSectionView
 */
export interface TestClassSectionView { 
    /**
     * Gets or Sets SchoolAcademicSessionClassSectionId
     */
    schoolAcademicSessionClassSectionId?: string;
    /**
     * Gets or Sets TestSchedules
     */
    testSchedules?: Array<TestScheduleView>;
}