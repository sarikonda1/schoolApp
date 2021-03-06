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
import { ApplicantPersonView } from './applicant-person-view';
import { FatherPersonView } from './father-person-view';
import { GuardianPersonView } from './guardian-person-view';
import { MotherPersonView } from './mother-person-view';
import { StudentApplicationSiblingsView } from './student-application-siblings-view';


/**
 * StudentApplicationView
 */
export interface StudentApplicationView { 
    /**
     * Gets or sets CurrentSchoolName
     */
    currentSchoolName?: string;
    /**
     * Gets or sets CurrentSchoolCity
     */
    currentSchoolCity?: string;
    /**
     * Gets or sets CurrentClass
     */
    currentClass?: string;
    /**
     * Gets or sets AdmissionForClass
     */
    admissionForClassId?: number;
    /**
     * Gets or sets AdmissionForSchoolBoard
     */
    admissionForSchoolBoardId?: number;
    /**
     * Gets or sets AdmissionForSchooAcademicSessionId
     */
    admissionForSchooAcademicSessionId?: number;
    /**
     * Gets or sets ReasonForSchoolChange
     */
    reasonForSchoolChange?: string;
    /**
     * Gets or sets SourceOfRegistrationId
     */
    sourceOfRegistrationId?: number;
    /**
     * Gets or sets SourceOfRegistrationInfo
     */
    sourceOfRegistrationInfo?: string;
    /**
     * Gets or sets AdditionalInformation
     */
    additionalInformation?: string;
    /**
     * Gets or sets ApplicationCategoryId
     */
    applicationCategoryId?: number;
    /**
     * Gets or sets SiblingsOlderToApplicants
     */
    siblingsOlderToApplicant?: number;
    /**
     * Gets or sets SiblingsYoungerToApplicants
     */
    siblingsYoungerToApplicant?: number;
    /**
     * Gets or sets SiblingsInSchool
     */
    siblingsInSchool?: number;
    /**
     * Gets or sets StudentDetails
     */
    studentDetails?: ApplicantPersonView;
    /**
     * Gets or sets FatherDetails
     */
    fatherDetails?: FatherPersonView;
    /**
     * Gets or sets MotherDetails
     */
    motherDetails?: MotherPersonView;
    /**
     * Gets or sets GuardianDetails
     */
    guardianDetails?: GuardianPersonView;
    /**
     * Gets or sets SiblingDetails
     */
    studentApplicantSiblings?: Array<StudentApplicationSiblingsView>;
}
