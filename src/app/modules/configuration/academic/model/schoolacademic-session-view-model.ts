import { SchoolAcademicClassSectionView } from './school-academic-class-section-view';
import { ClassRequirementView } from './class-requirement-view';


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
 * AcademicSessionView
 */
export interface SchoolAcademicSessionViewModel { 
    /**
     * Gets or sets DisplayName
     */
    displayName?: string;
    /**
     * Gets or sets Code
     */
    code?: string;
    /**
     * Gets or sets StartDate
     */
    startDate?: Date;
    /**
     * Gets or sets EndDate
     */
    endDate?: Date;
    /**
     * Gets or sets OnlineApplicationStartDate
     */
    onlineApplicationStartDate?: Date;
    /**
     * Gets or sets OnlineApplicationEndDate
     */
    onlineApplicationEndDate?: Date;
    /**
     * Gets or sets OnlineApplicationFee
     */
    onlineApplicationFee?: number;
    /**
     * SchoolAcademicClassSections
     */
    schoolAcademicSessionClassSections: Array<SchoolAcademicClassSectionView>;
    /**
     * ClassRequirements
     */
    classRequirements?: Array<ClassRequirementView>;
}
