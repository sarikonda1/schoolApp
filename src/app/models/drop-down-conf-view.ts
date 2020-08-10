import { DropDownModel } from './drop-down-view';

export interface DropDownConfModel {
    multiSelect?: boolean;
    placeholder?: string;
    data?: DropDownModel[];
    serchBoxPalceholder?: string;
    noEntryFoundLabel?: string;
    maxCount?: number;
    isRequired?: boolean;
}
