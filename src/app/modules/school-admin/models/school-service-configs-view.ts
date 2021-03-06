/**
 * Communication
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SchoolServiceProviderConfigView } from './school-service-provider-config-view';


/**
 * School Service Configuration Data
 */
export interface SchoolServiceConfigsView {

    serviceTypeId?: number;

    schoolId?: string;
    /**
     * Gets or sets List of SchoolServiceConfigs
     */
    schoolServiceProviderConfigs?: Array<SchoolServiceProviderConfigView>;

}
