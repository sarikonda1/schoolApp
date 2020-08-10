export interface StudentCourseSelection {
    Id: string;
    CourseId?: string;
    courseName: string;
    CourseCategoryId: string;
    courseCategoryName: string;
    ClassId: string;
    className: string;
    SectionId: string;
    sectionName: string;
    studentName: string;
    admissionNumber: string;
    gender: string;
    SortBy: string;
    sortOrder?: 0 | 1 | -1;
    pageNumber?: number;
    pageSize?: number;
}
