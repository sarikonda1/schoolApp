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
import { FeeConcessionGroupTermViewModel } from './fee-concession-group-term-viewmodel';

/**
 * FeeConcessionGroupFeeTypeViewModel
 */
export interface FeeConcessionGroupFeeTypeViewModel {
    /**
     * Gets Or Sets FeetypeId
     */
    feeTypeId?: number;
    /**
     * Gets Or Sets ConcessionTypeId
     */
    concessionTypeId?: number;
    /**
     * Gets Or Sets Discount
     */
    discount?: number;
    /**
     * Gets Or Sets FeeConcessionGroupTermViewModel
     */
    feeConcessionGroupTermViewModel?: Array<FeeConcessionGroupTermViewModel>;
}
