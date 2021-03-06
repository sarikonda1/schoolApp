import { GradingTermTestViewModel, GradingTermClassSectionViewModel } from './models';

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
// import { GradingTermClassSectionViewModel } from './gradingTermClassSectionViewModel';
// import { GradingTermTestViewModel } from './gradingTermTestViewModel';


/**
 * GradingTermDataEditViewModel
 */
export interface GradingTermDataModel { 
    /**
     * Gets or sets Id
     */
    id?: string;
    /**
     * Gets or sets GradingTermTestViewModel
     */
    gradingTermTestViewModel?: Array<GradingTermTestViewModel>;
    /**
     * Gets or sets RemovedGradingTermTestIds
     */
    removedGradingTermTestIds?: Array<number>;
    /**
     * Gets or sets RemovedGradingtermClassSectionIds
     */
    removedGradingtermClassSectionIds?: Array<number>;
    /**
     * Gets or sets TermName
     */
    termName: string;
    /**
     * Gets or sets Description
     */
    description?: string;
    /**
     * Gets or sets DisplayName
     */
    displayName: string;
    /**
     * Gets or sets TermCode
     */
    termCode: string;
    /**
     * Gets or sets EvaluationTypeId
     */
    evaluationTypeId?: number;
    /**
     * Gets or sets GenerateReportCard
     */
    generateReportCard?: number;
    /**
     * Gets or sets TermStartDate
     */
    termStartDate?: Date;
    /**
     * Gets or sets TermEndDate
     */
    termEndDate: Date;
    /**
     * Gets or sets TestsStartDate
     */
    testsStartDate: Date;
    /**
     * Gets or sets TestsEndDate
     */
    testsEndDate?: Date;
    /**
     * Gets or sets GenerateOverAllGrade
     */
    generateOverAllGrade: number;
    /**
     * Gets or sets OverALLGradeDisplayName
     */
    overALLGradeDisplayName?: string;
    /**
     * Gets or sets OverALLGradeDisplayName
     */
    gradingTermClassSectionViewModel?: Array<GradingTermClassSectionViewModel>;
    /**
     * Gets or sets schoolBoardId
     */
    schoolBoardId?: number;
}
