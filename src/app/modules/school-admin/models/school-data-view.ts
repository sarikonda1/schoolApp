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
import { SchoolBoardViewModel } from './school-board-viewl';
import { SequencesView } from 'app/models/academics/sequences-view';


/**
 * InstitutionView
 */
export interface SchoolDataView { 
    /**
     * Gets or sets Name
     */
    name: string;
    /**
     * Gets or sets code
     */
    schoolCode?: string;
    /**
     * Gets or sets CurrencyId
     */
    currencyId: number;
    /**
     * Gets or sets CurrencyId
     */
    licenceId: number;
    /**
     * Gets or sets DateFormatTypeId
     */
    dateFormatTypeId?: number;
    /**
     * Gets or Sets PersonNameFormatTypeId
     */
    personNameFormatTypeId?: number;
    /**
     * Gets or sets SchoolBoardViewModel
     */
    schoolBoardViewModel?: Array<SchoolBoardViewModel>;
    /**
     * Gets or sets Line1
     */
    line1: string;
    /**
     * Gets or sets Line2
     */
    line2?: string;
    /**
     * Gets or sets Line3
     */
    line3?: string;
    /**
     * Gets or sets City
     */
    city?: string;
    /**
     * Gets or sets StateId
     */
    stateId: number;
    /**
     * Gets or sets Pincode
     */
    pincode: string;
    /**
     * Gets or sets CountryId
     */
    countryId: number;
    /**
     * Gets or sets Website
     */
    website?: string;
    /**
     * Gets or sets Email1
     */
    email1: string;
    /**
     * Gets or sets Email2
     */
    email2?: string;
    /**
     * Gets or sets MobileTel
     */
    mobileTel: string;
    /**
     * Gets or sets LandTel
     */
    landTel?: string;
    /**
     * Gets or sets OtherTel
     */
    otherTel?: string;
    /**
     * Gets or sets ModerateCommunication
     */
    moderateCommunication: number;
    /**
     * Gets or sets ModerateStudentRecordUpdates
     */
    moderateStudentRecordUpdates: number;
    /**
     * Gets or sets ModerateTestNotifications
     */
    moderateTestNotifications: number;
    /**
     * Gets or sets ModerateEventNotifications
     */
    moderateEventNotifications: number;
    /**
     * Gets or sets ModerateAssignmentNotifications
     */
    moderateAssignmentNotifications: number;
    /**
     * Gets or sets AllowOnlineStudentApplications
     */
    allowOnlineStudentApplications: number;
    /**
     * Gets or sets UIThemeId
     */
    uiThemeId: number;
    /**
     * Gets or Sets
     */
    schoolSymbolFileNameWithExtension?: string;
    /**
     * Gets or Sets
     */
    schoolSymbolFileValue?: string;
    /**
     * Gets or Sets
     */
    schoolNameFileNameWithExtension?: string;
    /**
     * Gets or Sets
     */
    schoolNameFileValue?: string;
     /**
     * Gets or Sets
     */
    schoolSequences?: Array<SequencesView>;
}