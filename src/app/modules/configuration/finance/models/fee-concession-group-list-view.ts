/**
 * Fee
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
 * FeeConcessionGroupListView
 */

import { PaginantionView } from '../../../../models/pagination-view';
export interface FeeConcessionGroupListView extends PaginantionView {
    /**
     * Gets Or Sets groupName
     */
    name?: string[];
    /**
     * Gets Or Sets  code
     */
    code?: string[];
    /**
     * Gets Or Sets description
     */
    description?: string[];
    /**
     * Gets Or Sets 
     */
    feeTypeIds?: string[];
    /**
     * Gets Or Sets concession Amount
     */
    concession?: string[];
      /**
     * Gets Or Sets concessionType 
     */
    concessionType?: string[];
    /**
     * Gets Or Sets  feeTermIds
     */
    feeTermIds?: string[];
}
