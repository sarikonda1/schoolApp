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
import { AttachmentViewModel } from './attachment-view-model';
import { AssignRoleViewModel } from './assign-role-view-model';


/**
 * StudentGroupRepViewModel
 */
export interface StudentGroupRepViewModel { 
    /**
     * Gets or sets  ShortName
     */
    shortName?: string;
    /**
     * Gets or sets  FullName
     */
    fullName?: string;
    /**
     * Gets or sets  Color
     */
    color?: string;
    /**
     * Gets or sets  SymbolName
     */
    symbol?: string;
    /**
     * Gets or sets  Moto
     */
    moto?: string;
    /**
     * Gets or sets  AttachmentViewModel
     */
    attachment?: AttachmentViewModel;
    /**
     * Gets or sets  AssignRepresentativeView
     */
    studentGroupReps?: Array<AssignRoleViewModel>;
    id: string;
}
