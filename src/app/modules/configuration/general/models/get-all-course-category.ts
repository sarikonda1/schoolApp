export interface GetAllCourseCategoryView {
    name?: Array<string> ;
    areAllRequired?: Array<number>;
    areAllOptional?: Array<number> ;
    requiredCount?: Array<string>;
    optionalCount?: Array<string>;
    courseTypeId?: Array<string>;
    sortBy?: string;
    sortOrder?: number;
    pageNumber?: number;
    pageSize?: number;
}


