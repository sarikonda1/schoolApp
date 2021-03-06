import { CommunicationTypeDeliveryDataView } from './communication-type-delivery-data-view';

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



/**
 * This is a SchoolFacility Type ViewModel
 */
export interface CommunicationTypeDataView { 
    /**
     * Gets or sets Name
     */
    name?: string;
    /**
     * Gets or sets CommunicationTypeDeliveryOptions
     */
    communicationTypeDeliveryOptions?: Array<CommunicationTypeDeliveryDataView>;
    id?: string;
}
