import { PagingParams } from 'app/models/paging-params';
import { SortOrder } from 'app/models/sort-order';

/**SchoolFacilityRepresentativeFilterView */
export interface SchoolFacilityRepresentativeFilterView extends PagingParams {
    /**Gets or Sets Facilities */
    facilityIds: string[];

    /**Gets or Sets FacilityCodes */
    facilityCodes: string[];

    /**Gets or Sets FacilityTypes */
    facilityTypeIds: string[];

    /**Gets or Sets Roles */
    roleIds: string[];

    /**
     * Gets or Sets Representatives
     */
    representatives: string[];

    /**Gets or Sets SortBy */
    sortBy: string;

    /**Gets or Sets SortOrder */
    sortOrder: SortOrder;
}
