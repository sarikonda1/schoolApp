import { TransportScheduleRoutesUpdateView } from './transport-schedule-routes-update-view';

/**
 * Transport
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
 * TransportScheduleUpdateView
 */
export interface TransportScheduleUpdateView { 
    /**
     * Gets Or Sets
     */
    name?: string;
    /**
     * Gets Or Sets
     */
    inboundOrOutbound?: string;
    /**
     * Gets Or Sets
     */
    startTime?: string;
    /**
     * Gets Or Sets
     */
    endTime?: string;
    /**
     * Gets or Sets
     */
    transportScheduleRoutesUpdateView?: Array<TransportScheduleRoutesUpdateView>;
    id?: string;
}