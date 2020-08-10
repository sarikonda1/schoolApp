
export interface SearchSectionsView {
    sortBy?: string;
    sortOrder?: number;
    pageNumber: number;
    pageSize: number;
    names?: Array<string>;
    failedRecords?: Array<string>;
}
