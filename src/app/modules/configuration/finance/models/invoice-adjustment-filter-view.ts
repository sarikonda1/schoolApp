import { PaginantionView } from '../../../../models/pagination-view';

export interface InvoiceAdjustmentFilterView extends PaginantionView {
    names?: string[];
    isPositiveAdjustments?: number[];
    inActives?: number[];
    inactiveDate?: string;
    inactiveDateBegin?: string;
    inactiveDateEnd?: string;
}
