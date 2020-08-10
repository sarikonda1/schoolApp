export interface GetAllCourseCategory {
    id?: string ;
    name?: string | undefined;
    areAllRequired?: number | undefined;
    requiredCount?: number;
    
    allRequired?: number;
    areAllOptional?: number | undefined;
    allOptional?: number;
    optionalCount?: number;
    courseTypeId?: string|undefined;
    courseTypeName?: string | undefined;
    schoolId?: string;
    institutionId?: string;
    courseType?: string;
    sortBy?: string;
    sortOrder?: number;
    pageNumber?: number;
    pageSize?: number;
}


