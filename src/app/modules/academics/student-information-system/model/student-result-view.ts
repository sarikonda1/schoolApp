import { ValidationMessageView } from 'app/modules/configuration/general/models/class-result-view-model';
import { StudentViewModel } from './student-viewmodel';
import { PagedList } from 'app/models/paged-list';
import { FilterView } from 'app/models/filterview';

/**StudentResultView */
export interface StudentResultView extends ValidationMessageView {
    /**Gets or Sets Paged List of ClassViewModels */
    pagedStudentViewModels: PagedList<StudentViewModel>;
    /**filters */
    filters: FilterView[];
}
