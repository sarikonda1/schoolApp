import { SortOrder } from 'app/models/sort-order';
import { PagingParams } from 'app/models/paging-params';

export interface SearchCommunicationTypeView extends PagingParams{
    Name?: string[];
    sortBy?: string;
    sortOrder?: SortOrder;  
}
