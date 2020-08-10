import { PaginantionView } from '../../../../models/pagination-view';

export interface EventTypeFilterView extends PaginantionView {
    names?: string[];
    isCompetition?: number[];
    inActives?: number[];
    inactiveDate?: string;
    inactiveDateBegin?: string;
    inactiveDateEnd?: string;
}
