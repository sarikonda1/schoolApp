import { PaginantionView } from '../../../../models/pagination-view';

export interface FeeTypeTrancheSearchView extends PaginantionView {
    feeTypeIds: string[];
    names: string[];
    codes?: string[];
    descriptions?: string[];
}
