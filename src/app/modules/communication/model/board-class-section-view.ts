import { RequiredLongViewModel } from './required-long-view-model';

/**BoardClassSectionView */
    export interface BoardClassSectionView
    {
        /**Gets or Sets BoardId */
        boardId: number | null;
        /**Gets or Sets ClassId */
        classId: number | null;
        
        /**Gets or Sets Sections */
        sections: RequiredLongViewModel[];
    }
