import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**VehicleSearchView */
export interface VehiclePollutionCheckSearchView extends PagingParams {
    /**Gets or Sets vehicleId */
    vehicleId?: string;

    /**Gets or Sets pollutionCheckDateBegin */
    pollutionCheckDateBegin?: any;

    /**Gets or Sets pollutionCheckDateEnd */
    pollutionCheckDateEnd?: any;

    /**Gets or Sets pollutionCheckExpiryDateBegin */
    pollutionCheckExpiryDateBegin?: any;


    /**Gets or Sets pollutionCheckExpiryDateEnd */
    pollutionCheckExpiryDateEnd?: any;

    /**Gets or Sets sortOrder */
    sortOrder: SortOrder;

    /**Gets or Sets sortBy- */
    sortBy: string;
}
