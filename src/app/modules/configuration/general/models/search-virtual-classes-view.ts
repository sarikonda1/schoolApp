
export interface SearchVirtualClassesView {
    sortBy?: string;
    sortOrder?: number;
    pageNumber: number;
    pageSize: number;
    names?: Array<string>;
    virtualClassId?: Array<string>;
    classes?: Array<string>;
    sections?: Array<string>;
    courses?: Array<string>;
    statuses?: Array<string>;
    virtualConfigurationClass?: Array<string>;
}
