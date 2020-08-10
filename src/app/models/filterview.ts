import { DropdownView } from './dropdown-view';

/**FilterView */
export interface FilterView
{
    /**Constructor for FilterView */
    // tslint:disable-next-line:no-misused-new
    new(): FilterView;
    /**Gets or Sets Type Search text */
    type: string;
    /**Gets or Sets Label */
    label: string;
    /**Gets or Sets Name */
    name: string;
    /**Gets or Sets Options */
    options: DropdownView[];
    /**Gets or Sets PlaceHolder */
    placeHolder: string;
    /**Gets or Sets Value */
    value: string;
}
