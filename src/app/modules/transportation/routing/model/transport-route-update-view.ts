import { RoutePointsUpdateView } from './route-points-update-view';

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
 * TransportRouteUpdateView
 */
export interface TransportRouteUpdateView { 
    /**
     * Gets Or Sets
     */
    name?: string;
    /**
     * Gets Or Sets
     */
    routeNumber?: number;
    /**
     * Gets Or Sets
     */
    routeTypeId?: number;
    /**
     * Gets Or Sets
     */
    routeDescription?: string;
    /**
     * Gets or Sets
     */
    routePointsListUpdateView?: Array<RoutePointsUpdateView>;
    id: string;
}
