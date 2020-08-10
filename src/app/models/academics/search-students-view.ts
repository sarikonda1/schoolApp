export interface SearchStudentsView {

    studentName: string;
    parentName: string;
    currentClass: string;
    admissionNumber: string;
    statusName: string;
    schoolAcademicSessionId?: number | string;
    sortBy?: string;
    sortOrder?: number;
    pageNumber: number;
    pageSize: number;
}
