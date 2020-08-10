export interface StudentsSectionsView {
    classId?: number ;
    schoolBoardId?: number;
    classIds?: string[];
    sectionIds: string[];
    studentNames: string[];
    admissionNumbers: string[];
    sortBy?: string;
    sortOrder?: any;
    pageNumber?: number;
    pageSize?: number;
}
