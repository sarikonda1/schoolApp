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

import { AttachmentViewModel } from './attachment-model';


/**
 * SyllabusTopicView
 */
export interface SyllabusTopicView { 
    /**
     * Gets or Sets SyllabusId
     */
    syllabusId?: number;
    /**
     * Gets or Sets SyllabusChapterId
     */
    syllabusChapterId?: number;
    /**
     * Gets or Sets Name
     */
    name?: string;
    /**
     * Gets or Sets Code
     */
    code?: string;
    /**
     * Gets or Sets SortOrder
     */
    sortOrder?: number;
    /**
     * Gets or Sets Attachment
     */
    attachment?: AttachmentViewModel;
    id: string;
}
