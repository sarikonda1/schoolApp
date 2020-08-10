import { SortOrder } from 'app/models/sort-order';
import { PagingParams } from 'app/models/paging-params';

export interface StaffAttendanceFilterView extends PagingParams {
    staffNames?: string[];
    attendanceDate?: Date;
    departments?: string[];
    staffCodes?: string[];
    absentOrPresents?: string[];
    inTime?: string;
    inTimeBegin?: string;
    inTimeEnd?: string;
    outTime?: string;
    outTimeBegin?: string;
    outTimeEnd?: string;
    sortOrder: SortOrder;
    sortBy: string;
}
