import { StudentApplicationSiblingsView } from './student-application-siblings-view';
import { StudentEmergencyContactDetailsView } from './student-emergency-contact-details-view';
import { StudentAdmissionView } from './student-admission-view';
import { StudentParentPersonView } from './student-parent-person-view';

/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/**
 * Gets or Sets StudentEmergencyContactView
 */
export interface StudentDetailsViewModel { 
    /**
     * Student Emergency ContactDetailsView
     */
    studentEmergencyContactDetailsView?: StudentEmergencyContactDetailsView;
    /**
     * Student
     */
    student?: StudentAdmissionView;
    /**
     * Gets or sets FatherDetails
     */
    fatherParent?: StudentParentPersonView;
    /**
     * Gets or sets MotherDetails
     */
    parentMotherParent?: StudentParentPersonView;
    /**
     * Gets or sets GuardianDetails
     */
    parentGuardianParent?: StudentParentPersonView;
    /**
     * Gets or sets SiblingDetails
     */
    siblingStudentsStudentId1?: Array<StudentApplicationSiblingsView>;
}
