import { StaffView } from 'app/models/staff/staff-view';

/**Gets or Sets StaffMemberDetailsView */
export interface StaffMemberDetailsView extends StaffView {
    /**Gets or Sets Id */
    id: string;
    /**Gets or sets StaffName */
    staffName: string;
    /**Gets or sets Country */
    country: string;
    /**Gets or sets State */
    state: string;
    /**Gets or sets Religion */
    religion: string;
    /**Gets or sets Caste */
    caste: string;
    /**Gets or sets PersonSuffix */
    personSuffix: string;
    /**Gets or sets Gender */
    gender: string;
    /**Gets or sets NationalityCountry */
    nationalityCountry: string;
}
