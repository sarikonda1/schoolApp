/**
 * CourseCategeoryViewModel
 */
export interface CourseCategeoryViewModel {
    /**
     * Gets or sets CourseTypeId
     */
    courseTypeId: string;
    /**
     * Gets or sets Name
     */
    name?: string;
    /**
     * Gets or sets AreAllRequired
     */
    areAllRequired?: number;
    /**
     * Gets or sets RequiredCount
     */
    requiredCount?: number;
    /**
     * Gets or sets AreAllOptional
     */
    areAllOptional?: number;
    /**
     * Gets or sets OptionalCount
     */
    optionalCount?: number;
}
