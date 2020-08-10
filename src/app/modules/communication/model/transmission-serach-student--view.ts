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
 * TransmissionSearchStudentView
 */
export interface TransmissionSearchStudentView {

     /**
 * Gets or Sets communicationId
 */
     communicationId?: string;
     /**
     * Gets or Sets transmissionDateBegin
     */
     transmissionDateBegin?: any;
     /**
 * Gets or Sets transmissionDateEnd
 */
     transmissionDateEnd?: any;
     /**
 * Gets or Sets type
 */
     type?: string[];
     /**
 * Gets or Sets status
 */
     status?: string[];

     /**
      * Gets or Sets class
      */
     classIds?: string[];
     /**
      * Gets or Sets section
      */
     sectionIds?: string[];
     /**
      * Gets or Sets studentName
      */
     studentName?: string;

      /**
      * Gets or Sets receipientName
      */
          receipientName?: string;

     /**
      * Gets or Sets receipientContactInfo
      */
          receipientContactInfo?: string;

     /**
          * gets or sets SortBy
          */
     sortBy?: string;
     /**
          * gets or sets SortOrder
          */
     sortOrder: number;
     /**
          * gets or sets PageNumber
          */
     pageNumber: number;
     /**
      * gets or sets PageSize
      */
     pageSize?: number;
}
