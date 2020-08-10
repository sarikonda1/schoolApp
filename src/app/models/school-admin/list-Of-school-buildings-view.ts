import { SchoolBuildingView } from './school-building-view';

/**
 * ListOfSchoolBuildingsView
 */
export interface ListOfSchoolBuildingsView { 
    /**
     * Gets or Sets schoolBuildings
     */
    schoolBuildings: Array<SchoolBuildingView>;
    /**
     * Gets or Sets schoolId
     */
    schoolId: string;
}
