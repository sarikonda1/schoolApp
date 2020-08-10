import { SortOrder } from 'app/models/sort-order';
import { PagingParams } from 'app/models/paging-params';

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
 * GetConfiguratonSequenceView
 */
export interface SequenceConfiguratonView extends PagingParams 
{ 
    /**
     * Gets or sets SequenceCategoryTypeId
     */
    SequenceCategoryTypeId: string[];
    /**
     * Gets or sets Sequence
     */
    Sequence: string[];
    /**
     * Gets or sets StartingSequence
     */
    StartingSequence: number[];
    /**
     * Gets or sets CurrentSequence
     */
    CurrentSequence: number[];
    /**
     * Gets or sets IsDeleted
     */
    IsActive?: any;
     /**
     * Gets or sets SortBy
     */
    SortBy: string;
     /**
     * Gets or sets SortOrder
     */
    SortOrder: SortOrder;

    SchoolId: string;
}