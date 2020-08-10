/**StudentViewModel */
export interface StudentViewModel {

    // StudentName ParentName AdmissionNumber Class Status DOB
    /**Gets or Sets  id*/
    id: string;
    /**Gets or Sets StudentName */
    studentName: string;
    /**Gets or Sets ParentName */
    parentName: string;
    /**Gets or Sets AdmissionNumber */
    admissionNumber: string;
    /**Gets or Sets ClassName */
    class: string;
    /**Gets or Sets StatusName */
    status: string;
    /**Gets or Sets ClassId */
    classId: number;
    /**Gets or Sets StatusId */
    statusId: number;
    /**Gets or Sets DOB */
    dateOfBirth: Date | string | null;
}
