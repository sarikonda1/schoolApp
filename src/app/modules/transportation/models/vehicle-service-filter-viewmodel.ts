import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**VehicleServiceFilterViewModel */
export interface VehicleServiceFilterViewModel extends PagingParams 
{

     /**Gets or Sets vehicleId */
    vehicleId?: string;
    /**Gets or Sets vehicleNames */
    vehicleName?: string[];
    /**Gets or Sets regNumbers */
    registrationNumber?: string[];
     /**Gets or Sets serviceDate */
    serviceDate?: any;
    
    odometerReadingAtService?: any;
    /**Gets or Sets nextServiceDate */
    nextServiceDate?: any;
 
     /**Gets or Sets odomenterReadingNextService */
    odomenterReadingNextService: any;
    additionalDetails: string[];
    serviceDateBegin: any;
    serviceDateEnd: any;
    nextServiceDateBegin: any;
    nextServiceDateEnd: any;
    sortBy?: any;
    sortOrder?: any;
}
