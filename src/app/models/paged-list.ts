export interface PagedList<T> {
    // public PagedList(IQueryable<T> source,pageNumber: number;

    totalItems: number;
    pageNumber: number;
    pageSize: number;
    list: T[];
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPageNumber: number;
    previousPageNumber: number;

    // public PagingHeader GetHeader();
}
