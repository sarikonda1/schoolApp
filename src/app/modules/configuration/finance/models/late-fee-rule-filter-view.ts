import { PaginantionView } from '../../../../models/pagination-view';

export interface LateFeeRuleFilterView extends PaginantionView {
    /**
     * 
     */
    delayFromDaysCount?: number[];
    /**
     * 
     */
    delayToDaysCount?: number[];
    /**
     * 
     */
    lateFeePenaltyTypeIds?: string[];
    /**
     * 
     */
    penaltyAmounts?: number[];
    /**
     * 
     */
    isPenaltyFromDueDates?: number[];
}
