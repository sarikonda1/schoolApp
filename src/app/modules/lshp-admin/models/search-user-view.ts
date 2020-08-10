
export interface SearchUserView {
    instituteId?: string;
    sortBy?: string;
    sortOrder?: number;
    pageNumber: number;
    pageSize: number;
    userName?: string[];
    firstName?: string[];
    lastName?: string[];
    status?: string[];
}
