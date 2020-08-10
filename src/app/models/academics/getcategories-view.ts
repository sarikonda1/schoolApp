export interface GetCategoriesView {
    id?: string;
    names?: string[];
    schoolId?: string;
    sortBy?: string;
    sortOrder?: any;
    failedRecords?: string[];
    pageNumber?: number;
    pageSize?: number;
}
