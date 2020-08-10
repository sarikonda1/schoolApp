import { SortOrder } from 'app/models/sort-order';

export interface StudentAttendanceFilterView {
    /**Gets or Sets Names */
    studentNames?: string[];
    /**Gets or Sets Names */
    attendanceDate?: any;
    /**Gets or Sets Names */
    admissionNumber?: string[];
    /**Gets or Sets Names */
    rollNumber?: string[];
    /**Gets or Sets Names */
    classIds?: string[];
    /**Gets or Sets Names */
    sectionIds?: string[];
    /**Gets or Sets Names */
    absentOrPresents?: string[];
    /**Gets or Sets Names */
    failedRecords?: string[];
    /**Gets or Sets Codes */
    codes?: string[];
    /**Gets or Sets Descriptions */
    descriptions?: string[];
    /**Gets or Sets SortColumn */
    sortOrder: SortOrder;
    /**Gets or Sets SortBy- "ClassReference Name Code Description" */
    sortBy: string;
}
