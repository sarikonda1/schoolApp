
export interface SearchSchoolRepRoles {
    sortBy?: string;
    sortOrder?: number;
    pageNumber: number;
    pageSize: number;
    names?: Array<string>;
    schoolId: string;
    failedRecords?: Array<string>;
}
