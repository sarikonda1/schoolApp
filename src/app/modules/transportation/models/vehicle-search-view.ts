import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**VehicleSearchView */
export interface VehicleSearchView extends PagingParams 
{
    /**Gets or Sets vehicleName */
    vehicleName?: string[];

    /**Gets or Sets vehicleModel */
    vehicleModel?: string[];

    /**Gets or Sets registrationNumber */
    registrationNumber?: string[];

    /**Gets or Sets statusIds */
    statusIds?: string[];

   
    /**Gets or Sets maxCapacity */
    maxCapacity?: string[]; 

    /**Gets or Sets sortOrder */
    sortOrder: SortOrder;

    /**Gets or Sets sortBy- */
    sortBy: string;
}
