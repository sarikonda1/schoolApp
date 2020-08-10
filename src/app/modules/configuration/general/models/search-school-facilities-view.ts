
export interface SearchSchoolFacilitiesView {
    sortBy: string;
    sortOrder?:  0 | 1 | -1;
    pageNumber: number;
    pageSize: number;
    facilityName?: string[];
    facilityCode?: string[];
    facilityType?: string[];
    failedRecords?: string[];
    typeId?: string[];
    schoolId ?: string;
}
