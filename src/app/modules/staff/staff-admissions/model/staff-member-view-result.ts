import { ValidationMessageView } from 'app/modules/configuration/general/models/class-result-view-model';
import { FilterView } from 'app/models/filterview';
import { PagedList } from 'app/models/paged-list';
import { StaffDataView } from './staff-data-view';
import { StaffMemberDetailsView } from './staff-member-details-view';
/**StaffMemberViewResult */
export interface StaffMemberViewResult extends ValidationMessageView {
    /**Gets or sets StaffDataView */
    staffDataView: PagedList<StaffDataView>;
    /**filters */
    filters: FilterView[];
    /** StaffMemberDetails */
    staffMemberDetails: StaffMemberDetailsView;
}
