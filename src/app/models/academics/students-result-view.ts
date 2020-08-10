import { ValidationMessageView } from 'app/modules/configuration/general/models/class-result-view-model';
import { PagedList } from 'app/models/paged-list';
import { FilterView } from 'app/models/filterview';
import { StudentView } from './student-view';

/**StudentResultView */
export interface StudentsResultView extends ValidationMessageView {
    /**Gets or Sets Paged List of StudentView */
    resultList: PagedList<StudentView>;
    /**filters */
    filters: FilterView[];
}
