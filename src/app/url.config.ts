export class BaseUrlConfig {
    public static BasePath = '';
    public static Assigned = false;
}

export class ModuleConfig {
    public static readonly Course = '/Course';
    public static readonly Fee = '/Fee';
    public static readonly Parent = '/Parent';
    public static readonly Teacher = '/Teacher';
    public static readonly Transport = '/Transport';
    public static readonly Base = '/base';
    public static readonly UserManagment = '/User';
    public static readonly Role = '/Role';
    public static readonly Reports = '/reports/view';
    public static readonly FileManagment = '/File';
    public static readonly PaymentGateway = '/payment-gateway';
    public static readonly Communication = '/communication';
}

export class BaseModuleConfig {

    public static readonly _User_all_users = '/User/all-users';
    public static readonly _User_User_Details = '/User/user-details';
    public static readonly _Update_User = '/User/update-user';
    public static readonly Institute_admin = '/User/institute-admin';
    public static readonly Institute_institution = '/Institution/institution';
    public static readonly Institute_institutions = '/Institution/institutions';
    public static readonly USER_UNLOCK = '/User/unlock-user';
    public static readonly USER_LOCK = '/User/lock-user';

    public static readonly _USER_ALL_SCHOOL_USERS = '/User/all-school-users';
    public static readonly _USER_UPDATE_SCHOOL_USER = '/User/update-school-user';
    public static readonly _USER_SCHOOL_ADMIN = '/User/school-admin';
    public static readonly _USER_USER_SCHOOL_DETAILS = '/User/school-user-details';
    public static readonly _USER_SCHOOLS = '/User/schools';
    public static readonly _USER_ROLES = '/User/Roles';
    public static readonly CLASS_ASSESMENT = '/ClassAssessmentParameter/class-assessment-parameters';
    public static readonly _VERIFY_PARENT = '/User/verify-parent';
    public static readonly _REGISTER_PARENT = '/User/register-parent';
    public static readonly _PROCESS_OTP_VERIFICATION = '/User/process-otp-vefication';
    public static readonly _EMAIL_OTP = '/User/email-otp';

    public static readonly _AssessmentCategories_AssessmentCategories = '/AssessmentCategories/assessment-categories';
    public static readonly _AssessmentCategories_AssessmentCategoriesDetailsById = '/AssessmentCategories/assessment-categoriesdetails-byid';
    public static readonly _AcademicSession_AcademicSession = '/AcademicSession/AcademicSession';
    public static readonly _AcademicSession_AllSchoolAcademicSessionsBySchoolId = '/AcademicSession/AllSchoolAcademicSessionsBySchoolId';
    public static readonly _AcademicSession_AcademicSessionDataById = '/AcademicSession/AcademicSessionDataById';
    public static readonly _AcademicSession_AcademicSessionData = '/AcademicSession/academicsessions';

    public static readonly _AcademicSession_AllAcademicSessionsBySchoolId =
        '/AcademicSession/AllAcademicSessionsBySchoolId';
    public static readonly _SchoolFacilityRepRole_createreprole = '/SchoolRepRole/representative-role';
    public static readonly _SchoolFacilityRepRole_allrepresentativeroles = '/SchoolRepRole/fetch-representative-roles';
    public static readonly _SchoolFacilityRepRole_searchreprole = '/SchoolRepRole/search-representative-role-details';
    public static readonly _SchoolFacilityRepRole_singlereproledetails = '/SchoolRepRole/representative-role-details';
    public static readonly _SchoolFacilityRepRole_reprole = '/SchoolRepRole/representative-role';
    public static readonly _SchoolFacilityRepRole_multi_delete_reprole = '/SchoolRepRole/multi-delete-reprole';
    public static readonly _AcademicSession_SchoolAcademicSessionIdBySessionId =
        '/AcademicSession/SchoolAcademicSessionIdBySessionId';
    public static readonly _AcademicSession_SchoolAcademicSession = '/AcademicSession/SchoolAcademicSession';
    public static readonly _AcademicSession_SchoolAcademicSessionStatus = '/AcademicSession/SchoolAcademicSessionStatus';
    public static readonly _AcademicSession_SchoolAcademicSessionIdBySchoolId = '/AcademicSession/SchoolAcademicSessionIdBySchoolId';
    public static readonly _AcademicSession_SchoolBoards =
        '/AcademicSession/SchoolBoards';
    public static readonly _AssessmentGroups_AllAssessmentGroups = '/AssessmentGroups/assessment-groups';
    public static readonly _AssessmentGroups_UpdateAssessmentGroups = '/AssessmentGroups/assessment-groups';
    public static readonly _AssessmentGroups_DeleteAssessmentGroups = '/AssessmentGroups/assessment-groups';
    public static readonly _AssessmentGroups_AddAssessmentGroups =
        '/AssessmentGroups/assessment-groups';
    public static readonly _School_CreateSchool = '/School/School';
    public static readonly _School_UpdateSchool = '/School/School';
    public static readonly _School_SchoolListByAcadamicSessionID = '/School/SchoolListByInstituteId';
    public static readonly _School_SchoolDetailsById = '/School/SchoolDetailsById';

    public static readonly _School_Applicationcategory = '/School/GetApplicationcategory';
    public static readonly _School_CreateApplicationcategory = '/School/Applicationcategory';

    public static readonly _AssigningRepresentative_AssigningRepresentative = '/AssigningRepresentative/AssigningRepresentative';
    public static readonly _AssigningRepresentative_StaffDetails = '/AssigningRepresentative/StaffDetails';
    public static readonly _AssigningRepresentative_GetStudentDetails = '/AssigningRepresentative/GetStudentDetails';

    public static readonly _AssigningRepresentative = '/AssigningRepresentative';

    public static readonly _BloodGroup_AllBloodGroups = '/BloodGroup/AllBloodGroups';

    public static readonly _Country_AllCountries = '/Country/all-countries';
    public static readonly _Months = '/Month';

    public static readonly _api_InstitutionSetUp_Institution = '/InstitutionSetUp/Institution';
    public static readonly _api_InstitutionSetUp_UiThemes = '/InstitutionSetUp/UiThemes';
    public static readonly _api_InstitutionSetUp_BillingCycles = '/InstitutionSetUp/BillingCycles';
    public static readonly _InstitutionSetUp_InstituteDetails = '/InstitutionSetUp/InstituteDetails';
    public static readonly _InstitutionSetUp_InstitutePreviewDetails = '/InstitutionSetUp/InstitutePreviewDetails';
    public static readonly _api_InstitutionLicence_BillingCycles = '/InstituteLicence/billing-cycle-list';
    public static readonly _InstitutionSetUp_ConfirmInstitute = '/InstitutionSetUp/ConfirmInstitute';
    public static readonly _InstitutionSetUp_Institutes = '/InstitutionSetUp/Institutes';
    public static readonly _InstitutionSetUp_Licenses = '/InstitutionSetUp/Licenses';
    public static readonly _InstitutionSetUp_EditInstitutedetails = '/InstitutionSetUp/EditInstitutedetails';
    public static readonly _InstitutionSetUp_InstitutionlicensesByInstId = '/InstitutionSetUp/InstitutionlicensesByInstId';
    public static readonly _InstitutionSetUp = '/InstitutionSetUp';

    public static readonly _Institution_Create = '/Institution/institution';
    public static readonly _Institution_Details = '/Institution/institution-all-details';
    public static readonly _Institution_Update_By_Email = '/Institution/institution-by-user-email';
    public static readonly _Institution_Details_By_Email_Link = '/Institution/institution-details-by-email-link';

    public static readonly _Add_School = '/add-school';
    public static readonly _Currency_Types = '/currency-types';
    public static readonly _Institutelicence = '/institutelicence';
    public static readonly _School = '/school';
    public static readonly _Update_School = '/update-school';
    public static readonly _Boards = '/boards';

    // student application,admission urls
    public static readonly _Search_Student_Admission = '/StudentAdmission/search-student';

    public static readonly _Approve_Student_Application = '/StudentAdmission/approve-student-application';

    public static readonly _Student_Admission = '/StudentAdmission/student-admission';
    public static readonly _Student_Admission_Get = '/StudentAdmission/student';
    public static readonly _Student_Admission_Update = '/StudentAdmission/student-admission-update';
    public static readonly _Student_Admission_Read_Validate_Excel_Files = '/StudentAdmission/read-valiadate-excel-csv-files';
    public static readonly _Student_Admission_Bulk_Post = '/StudentAdmission/bulk-student-post';
    public static readonly StudentAdmission_SiblingVerifivation = '/StudentAdmission/sibling-verification';

    public static readonly _Student_Application_Categories = '/StudentApplication/application-categories';
    public static readonly _Reject_Student_Application = '/StudentApplication/reject-student';
    public static readonly _Student_Sibling_Verification = '/StudentApplication/sibling-verification';
    public static readonly _Source_Of_Registration_Get = '/StudentApplication/source-of-registration';
    public static readonly _Student_Application = '/StudentApplication/student-application';
    public static readonly _Student_Application_Get_All = '/StudentApplication/get-all-student-application';
    public static readonly _Student_Groups_Get = '/StudentGroup/student-groups';
    public static readonly _Student_Groups_Details_Get = '/StudentGroup/student-groups-details';
    public static readonly _Student_Groups_Rep_Roles_Get = '/StudentGroup/student-group-reproles';
    public static readonly _Student_Groups_Details = '/StudentGroup/student-details';
    public static readonly _Staff_Details = '/StudentGroup/staff-details';
    public static readonly _Create_Student_Group = '/StudentGroup/create-studentgroup';
    public static readonly _Student_Group_Assign_Details = '/StudentGroup/group-assign-details';
    public static readonly _Student_Group_Update = '/StudentGroup/update-studentgroup';
    public static readonly _Student_Group_Details_Id = '/StudentGroup/student-group-by-id';
    public static readonly _Student_Group_Delete = '/StudentGroup/delete-groups';




    public static readonly _JobApplication = '/JobApplication';
    public static readonly _JobApplication_SearchWithParameters = '/JobApplication/SearchWithParameters';
    public static readonly _JobApplication_ApplicationEducationDetails = '/JobApplication/ApplicationEducationDetails';
    public static readonly _JobApplication_ApplicationExperienceDetails = '/JobApplication/ApplicationExperienceDetails';
    public static readonly _JobApplication_ApplicantTrainingDetails = '/JobApplication/ApplicantTrainingDetails';
    public static readonly _JobApplication_JobApplicantDetailsId = '/JobApplication/JobApplicantDetailsId';
    public static readonly _JobApplication_UpdateJobApplicationStatus = '/JobApplication/UpdateJobApplicationStatus';
    public static readonly _JobApplication_UpdateJobApplication = '/JobApplication/UpdateJobApplication';
    public static readonly _JobApplication_JobApplicationTypes = '/JobApplication/JobApplicationTypes';

    public static readonly _Language_All_Languages = '/Language/all-languages';

    public static readonly _LeaveRequest_ApplyLeave = '/LeaveRequest/ApplyLeave';
    public static readonly _LeaveRequest_SearchForLeaves = '/LeaveRequest/SearchForLeaves';
    public static readonly _LeaveRequest_LeaveTypes = '/LeaveRequest/LeaveTypes';

    public static readonly _LicenseSetUp = '/LicenseSetUp';

    public static readonly _Representative_Representatives = '/Representative/Representatives';
    public static readonly _Representative_RepresentativeNames = '/Representative/RepresentativeNames';
    public static readonly _Representative_RepresentativeRoles = '/Representative/RepresentativeRoles';

    public static readonly _RollNumberOrder_rollnumberordertype = '/RollNumberOrder/rollnumberordertype';

    public static readonly _RollNumbersAssigning_GetStudentDetails = '/RollNumbersAssigning/GetStudentDetails';
    public static readonly _RollNumbersAssigning_SortingStudents = '/RollNumbersAssigning/SortingStudents';
    public static readonly _RollNumbersAssigning_RollNumberAssignment = '/RollNumbersAssigning/RollNumberAssignment';

    public static readonly _ClassesConfig_class = '/ClassesConfig/class';
    public static readonly _ClassesConfig_all_classes = '/ClassesConfig/all-classes';
    public static readonly _ClassesConfig_class_references = '/ClassesConfig/class-references';
    public static readonly _ClassesConfig_filtered_classes = '/ClassesConfig/filtered-classes';
    public static readonly _ClassesConfig_current_classes = '/ClassesConfig/current-classes';
    public static readonly _ClassesConfig_Academicsession_Boards = '/ClassesConfig/current-boards';
    public static readonly _ClassesConfig_Academicsession_Classes = '/ClassesConfig/academic-session-classes';
    public static readonly _ClassesConfig_Academicsession_Sections = '/ClassesConfig/academic-session-sections';

    public static readonly _Payments_Payment_List = '/Payment/payments-lists';


    public static readonly _Class_Class = '/Class/Class';
    public static readonly _Class_ClassData = '/Class/ClassData';
    public static readonly _ClassesBySchoolId = '/Class/ClassesBySchoolId';
    public static readonly _Class_ClassesBySchoolAcademicSessionId = '/Class/ClassesBySchoolAcademicSessionId';
    public static readonly _Class_Class_Based_On_School_Board = '/ClassesConfig/classes-based-on-school-board';
    public static readonly _Class_Class_Based_On_School_Board_DecrypedIds = '/ClassesConfig/academic-classes-based-on-school-board';
    public static readonly _Update_Section_Details = '/Section/section';
    public static readonly _Create_Section_Details = '/Section/section';
    public static readonly _SectionsListBy_SchoolId = '/Section/sectionslist-details';
    public static readonly _Remove_Sections = '/Section/remove-multi-sections';
    public static readonly _Fetch_SectionDetailsBy_Id = '/Section/fetch-section';
    public static readonly _Class_SchoolAcademicClassSections = '/Class/SchoolAcademicClassSections';
    public static readonly _Class_SchoolAcademicClassSectionsData = '/Class/SchoolAcademicClassSectionsData';
    // public static readonly _Class_SchoolAcademicClassSections = '/Class/SchoolAcademicClassSection';

    public static readonly _Class_CourseType = '/Class/CourseType';
    public static readonly _Class_CourseTypesList = '/Class/CourseTypesList';
    public static readonly _Class_CreateCourse = '/Class/Course';
    public static readonly _Class_UpdateCourse = '/Class/Course';


    public static readonly _Class_PeriodTypeList = '/ClassPeriodType/class-period-types-Filter';
    public static readonly _Class_PeriodType_Delete = '/ClassPeriodType/class-period-type';
    public static readonly _Class_PeriodType_Create = '/ClassPeriodType/class-period-types';
    public static readonly _Class_PeriodType_Update = '/ClassPeriodType/class-period-type';
    public static readonly _Class_PeriodType_GetById = '/ClassPeriodType/class-period-type-by-id';
    public static readonly _Class_Sport = '/Class/Sport';



    public static readonly _SchoolBuilding_PostSchoolBuildings = '/SchoolInfrastructure/school-buildings';
    public static readonly _SchoolBuilding_PostFloor = '/SchoolInfrastructure/school-floor';
    public static readonly _SchoolBuilding_PostRooms = '/SchoolInfrastructure/school-room';
    public static readonly _SchoolBuilding_DeleteFloor = '/SchoolInfrastructure/school-floor';
    public static readonly _SchoolBuilding_DeleteRoom = '/SchoolInfrastructure/school-room';

    public static readonly _SchoolBuilding_DeleteSchoolBuliding = '/SchoolInfrastructure/school-building';

    public static readonly _SchoolBuilding_GetFloorsAndRooms = '/SchoolInfrastructure/school-floors-and-rooms-by-buildingid';

    public static readonly _SchoolBuilding_GetRoomTypes = '/SchoolInfrastructure/room-types';
    public static readonly _SchoolBuilding_GetSchoolBuildings = '/SchoolInfrastructure/school-buildings';

    public static readonly _SchoolBuilding_UpdateFloor = '/SchoolInfrastructure/school-floor';

    public static readonly _SchoolBuilding_UpdateRoom = '/SchoolInfrastructure/school-room';
    public static readonly _SchoolBuilding_UpdateBuilding = '/SchoolInfrastructure/school-building';

    public static readonly _School_Facilities = '/SchoolFacility/school-facilities';

    public static readonly _Student_Facility = '/StudentsFacility/student-facility';

    public static readonly _Student_Facility_Assignment = '/StudentsFacility/student-facility-assignment';

    public static readonly _Student_Facility_List = '/StudentsFacility/student-facility-list';

    public static readonly _Student_Unassigned_Facility_List = '/StudentsFacility/student-unassigned-facility-list';

    public static readonly _SchoolFacility = '/SchoolFacility/facility';

    public static readonly _SchoolFacility_Fetch_FacilityTypes = '/SchoolFacility/fetch-facility-types';

    public static readonly _SchoolFacility_Fetch_Facilities = '/SchoolFacility/fetch-facilities';

    public static readonly _SchoolFacility_FacilityById = '/SchoolFacility/facilitybyid';


    public static readonly _SchoolFacility_Fetch_Facility_List = '/SchoolFacility/fetch-facilitylist';



    public static readonly _State_AllStates = '/State/states-by-countryid';



    public static readonly _StudentDatabase_AllSearchStudents = '/StudentDatabase/AllSearchStudents';
    public static readonly _StudentDatabase_GetStudentsBasedOnAcademicSession = '/StudentDB/student-names-typeahead';
    public static readonly _Type_listOfTypes = '/Type/listOfTypes';
    public static readonly _Type_TypeByCodeBasedOnSuffix = '/Type/TypeByCodeBasedOnSuffix';
    public static readonly _Type_TypesByTypeCategoryCode = '/Type/TypesByTypeCategoryCode';
    public static readonly _Type_All_Religions = '/Type/all-religions';
    public static readonly _Type_All_Caste = '/Type/all-caste';

    public static readonly _User_Admins = '/User/Admins';
    public static readonly _User_CheckUserAccess = '/User/CheckUserAccess';
    public static readonly _User_ParentStudentDetails = '/User/ParentStudentDetails';
    public static readonly _Testype_DeleteAll = '/TestType/delete-all';
    public static readonly _Add_TestType = '/TestType/testtype';
    public static readonly _Testype_GetAll = '/TestType/fetch-testtypes';
    public static readonly _Testype_TestTypeById = '/TestType/testtype-byid';
    public static readonly _Update_TestType = '/TestType/testtype';

    public static readonly _StudentGroupRepRole_CreateStudentGroupReprole = '/StudentGroupRepRole/create-studentgroup-reprole';
    public static readonly _StudentGroupRepRole_DeleteStudentGroupReprole = '/StudentGroupRepRole/delete-studentgroup-reproles';
    public static readonly _StudentGroupRepRole_StudentGroupReproleDetails = '/StudentGroupRepRole/studentgroup-reproles-details';
    public static readonly _StudentGroupRepRole_StudentGroupReproleById = '/StudentGroupRepRole/studentgroup-reprole-by-id';
    public static readonly _StudentGroupRepRole_UpdateStudentGroupReprole = '/StudentGroupRepRole/update-studentgroup-reprole';
    public static readonly _ApplicationCategory_CreateCategory = '/ApplicationCategory/application-category';
    public static readonly _ApplicationCategory_ApplicationCategory = '/ApplicationCategory/application-categories';
    public static readonly _ApplicationCategory_ApplicationDetails = '/ApplicationCategory/applicationcategories-details';
    public static readonly _ApplicationCategory_AplicationById = '/ApplicationCategory/application-categorydetailsbyid';
    public static readonly _ApplicationCategory_ApplicationCategories = '/ApplicationCategory/application-category';
    public static readonly _InstituteLicense_BillingCycleList = '/InstituteLicence/billing-cycle-list';
    public static readonly _InstituteLicense_CreateInstituteLicense = '/InstituteLicence/institution-licence';
    public static readonly _InstituteLicense_InstituteLicenseDetails = '/InstituteLicence/institutelicense-details';
    public static readonly _InstituteLicense_UpdateInstituteLicense = '/InstituteLicence/institution-licence';

    // Assessment-Parameters & Class-Assessment-Parameters 
    public static readonly _ClassAssessmentParameters = '/ClassAssessmentParameter/class-assessment-parameters';
    public static readonly _AssessmentParameters_Fetch_By_GroupID_CategoryId = '/AssessmentParameter/fetch-assessment-parameters-list-by-groupid-categoryid';
    public static readonly _AssessmentParameters_List_Fetch = '/AssessmentParameter/assessment-parameter-list';
    public static readonly _AssessmentCategory_List_Fetch = '/ClassAssessmentParameter/assessment-categories-list';
    public static readonly _AssessmentCategory_List_By_GroupId = '/ClassAssessmentParameter/assessment-categories-by-groupid';
    public static readonly _AssessmentGroups_Fetch = '/ClassAssessmentParameter/assessment-groups-list';
    public static readonly _Delete_Class_Assessment_Parameter = '/ClassAssessmentParameter/class-assesment-parameter';
    // End
    public static readonly SchoolSettings_UpdateSchoolSettings = '/SchoolSettings/update-school-settings';
    public static readonly SchoolSettings_SchoolSettingsById = '/SchoolSettings/school-settings-by-id';
    public static readonly Date_FormatTypes = '/date-format-types';
    public static readonly Person_Name_FormatTypes = '/person-name-format-types';

    public static readonly _EventTypes_event_types = '/EventTypes/event-types';
    public static readonly _School_DateFormat = '/school-date-format';

    // student-requests
    public static readonly _Student_Request_Approve = '/StudentRequest/approve-student';
    public static readonly _Student_Request_Approve1 = '/StudentRequest/approve-student-request';
    public static readonly _Student_Request_Reject = '/StudentRequest/reject-student';
    public static readonly _Student_Request_Create = '/StudentRequest/student-request';
    public static readonly _Student_Request_Types = '/StudentRequest/student-request-types';
    public static readonly _Student_Request_Grid = '/StudentRequest/student-request';

    // student-dropouts
    public static readonly _Student_Action_Create = '/StudentAction/student-action';
    public static readonly _Student_Action_Types = '/StudentAction/student-action-types';
    public static readonly _Student_Action_Grid = '/StudentAction/student-actions';

    // Student Leave Request
    public static readonly _Student_Leave_Request = '/LeaveRequest/add-student-leave';
    public static readonly _Student_Leave_Request_Filtered_Leaves = '/LeaveRequest/filteredleaves';
    public static readonly _Student_Leave_Request_Active = '/LeaveRequest/active-student-names';
    public static readonly _Student_Leave_Request_Change_Leave_Request = '/LeaveRequest/change-leave-status';

    // rollnumber-assignment
    public static readonly _RollNumber_Assignment = '/assign-rollnumber';
    public static readonly _Get_Student_Details = '/get-student-details';

    public static readonly _Sequence_List_Post = '/Sequence/create-sequence-list';

    // page-information
    public static readonly _Localization_Page_Information = '/Localization/page-information';
    public static readonly _Localization_JSON_Files = '/Localization/JsonFiles';
    public static readonly _Localization_All_Cultures_Files = '/Localization/all-cultures-files';
    public static readonly _Localization_Page_Information_ById = '/Localization/page-information-by-id';
    public static readonly _Localization_Get_By_Key_Culture = '/Localization/page-information-by-key-and-culture';

    // school-events
    public static readonly _Events_Create_Events = '/Events/create-events';
    public static readonly _Events_Event_Statuses = '/Events/get-event-statuses';
    public static readonly _Events_Event_Types = '/Events/get-event-types';
    public static readonly _Events_Get_All_Events = '/Events/get-all-events';
    public static readonly _Events_Event_Details = '/Events/get-by-event';
    public static readonly _Events_Get_Students = '/Events/get-students';
    public static readonly _Events_Update_Event = '/Events/update-events';
    public static readonly _Events_Create_Participants = '/Events/create-participants';
    public static readonly _Events_Delete_Participants = '/Events/delete-multi-participants';

    // student concession
    public static readonly _FeeConcession_Groups = '/StudentConcession/fee-concessiongroups';
    public static readonly _Remove_Concession = '/StudentConcession/remove-concession';
    public static readonly _StudentConcession = '/StudentConcession';
    public static readonly _Add_Concession = '/StudentConcession/student-concession-group';
    public static readonly _Get_Class_Teachers_Managements = '/ClassTeacherAssignment/get-class-teachers';
    public static readonly _Class_Teacher_Update = '/ClassTeacherAssignment/class-teacher';
    public static readonly _Staff_Based_On_Code = '/staff-by-type';
    public static readonly _Staff_Types = '/staffType-common-request';
    public static readonly Staff_Leave_Request = '/StaffLeaveRequest/staff-leave-requests';
    public static readonly Staff_Leave_Request_Approve = '/StaffLeaveRequest/staff-leave-request';
    public static readonly _Marital_Status_Types = '/marital-status-types';

    // school
    public static readonly _School_Currency = '/school-cuurrency-symbol';

    public static readonly _StudentDB_filtered_students = '/StudentDB/filtered-students';
    public static readonly _StudentDB_studentNames = '/StudentDB';
    public static readonly _StudentDB_Fetch_Students = '/StudentDB/fetch-students';

    public static readonly _Assign_School_Facility_Representative = '/SchoolFacilityRepesentative/assign-school-facility-representative';
    public static readonly _Fetch_Facility_Representatives = '/SchoolFacilityRepesentative/fetch-facility-representatives';
    public static readonly _Facility_Representative_By_Id = '/SchoolFacilityRepesentative/facility-representative-by-id';

    // class-homeworks
    public static readonly _Home_work_Assignments = '/ClassHomeWork/homeworks';
    public static readonly _Home_work_Assignment = '/ClassHomeWork/homework';
    public static readonly _Home_work_Assignments_By_Id = '/ClassHomeWork/get-by-homeworks';
    public static readonly _Home_work_All_Tests = '/TestSchedule/tests';
    public static readonly _Home_work_Academic_Sections = '/TestSchedule/academic-sections';
    public static readonly _Grading_Terms_By_Board = '/GradingTermConfiguration/grading-terms-by-boardId';

    // test-grading
    public static readonly _Test_Student_Details = '/TestScore/get-students-by-class-section-scheduleId';
    public static readonly _Update_Test_Maximum_Marks = '/TestScore/update-test-maximum-marks';
    public static readonly _Create_Test_Score = '/TestScore/testScore';
    public static readonly _Get_TestDetails_By_Schedule_Id = '/TestScore/test-details-by-schedule-id';
    public static readonly _TestType_Details_By_Id = '/TestScore/test-type-by-id';
    public static readonly _Read_Validate_TestScore_With_Excel = '/TestScore/student-scores-read-valiadate-excel-files';
    public static readonly _TestScore_Bulk_Post = '/TestScore/student-scores-bulk-post';

    public static readonly _Student_Transport_Assignment = '/StudentTransport/transport-assignments';
    public static readonly _Student_Transport_Route_Points = '/StudentTransport/route-points';
    public static readonly _Student_Transport_Routes = '/StudentTransport/transport-routes';
    public static readonly _Student_Transport_Schedules = '/StudentTransport/transport-schedules';
    public static readonly _Communication_Search = '/communication-search';

    // parent Api names
    public static readonly _User_Parent_News = '/News/News';

    // DashBoard URLs
    public static readonly _Academic_Information = '/SchoolAcademicSession/academic-information';
    public static readonly _Attendance_Information = '/DashBoard/attendance-list';
    public static readonly _Fee_Invoice_Information = '/DashBoard/fee-invoices';
    public static readonly _Transportation_Information = '/DashBoard/transportation';
    public static readonly _Birthdays_Information = '/DashBoard/birthdays';
    public static readonly _Staff_Information = '/DashBoard/staff-summary';
    public static readonly _NoticeBoard_Information = '/DashBoard/noticeboard';
    public static readonly _Class_Summary = '/DashBoard/class-occupancy';

    // syllabus Api's

    public static readonly _Syllabus_Progress_Search = '/SyllabusSchedules/syllabus-progress';
    public static readonly _Syllabus_Schedule_Progress = '/SchoolSyllabus/syllabus-schedule-progress';
    public static readonly _Syllabus_Schedule_Add = '/SchoolSyllabus/add-academicsession-syllabusschedule';
    public static readonly _Syllabus_Schedule_Details = '/SchoolSyllabus/syllabus-schedule-progress-details';
    public static readonly _Syllabus_Schedule_Grid = '/SyllabusSchedules/syllabus-schedule';
    public static readonly _Syllabus_Progress_Get = '/SyllabusSchedules/syllabus-schedule-progress';
    public static readonly _Syllabus_Schedule_AS = '/SchoolSyllabus/schedule-academic-syllabus';
    public static readonly _Syllabus_Progress_By_Class = '/SyllabusSchedules/admin-class-section-progress';
    public static readonly _Syllabus_Schedule_By_Staff = '/SyllabusSchedules/admin-teacher-syllabus';
    public static readonly _Syllabus_Progress_By_Teacher = '/SyllabusSchedules/teacher-syllabus-progress';
    public static readonly _Syllabus_Progress_By_Student = '/SyllabusSchedules/student-syllabus-progress';

    public static readonly _Add_Syllabus = '/SchoolSyllabus/add-syllabus';
    public static readonly _Add_Chapters = '/SchoolSyllabus/add-syllabus-chapters';
    public static readonly _Syllabus_Checkpoint_Inclusions = '/SchoolSyllabus/add-syllabus-checkpoint-inclusions';
    public static readonly _Add_Check_points = '/SchoolSyllabus/add-syllabus-checkpoints';
    public static readonly _Syllabus_Sub_Topics_Add = '/SchoolSyllabus/add-syllabus-sub-topic';
    public static readonly _Syllabus_Topics_Add = '/SchoolSyllabus/add-syllabus-topics';
    public static readonly _Syllabus_Boards = '/SchoolSyllabus/board-syllabus';
    public static readonly _Syllabus_CheckPoints_Types = '/SchoolSyllabus/checkpoint-types';
    public static readonly _Syllabus_Delete_CheckPoints = '/SchoolSyllabus/delete-syllabus-checkpoints';
    public static readonly _Syllabus_Chapters = '/SchoolSyllabus/syllabus-chapters';
    public static readonly _Syllabus_All_Topics = '/SchoolSyllabus/syllabus-topics';
    public static readonly _Syllabus_Inculsion_List = '/SchoolSyllabus/syllabus-checkpoint-tests';
    public static readonly _Syllbus_list = '/SchoolSyllabus/syllabus-list';
    public static readonly _Syllabus_Topics = '/SchoolSyllabus/syllabus-topics';
    public static readonly _Inactive_Syllabus = '/SchoolSyllabus/update-syllabus-status';
    public static readonly _Syllabus_Chapter_Topics = '/SchoolSyllabus/syllabus-chapter-topics';
    public static readonly _Syllabus_Sub_Topics_Details = '/SchoolSyllabus/syllabus-subtopic-details';
    public static readonly _Syllabus_Basic_Details = '/SchoolSyllabus/syllabus-details';
    public static readonly _Syllabus_Chapters_List = '/SchoolSyllabus/syllabus-chapters-topics';
    public static readonly _Syllabus_Data_Schedule = '/SchoolSyllabus/syllabus-data';
    public static readonly _Syllabus_Schedule_update = '/SchoolSyllabus/update-syllabus-schedule';
    public static readonly _Syllabus_Delete_All_CheckPoints = '/SchoolSyllabus/syllabus-checkpoints';


    public static readonly _Syllabus_Chapters_Delete = '/SchoolSyllabus/delete-syllabus-chapters';
    public static readonly _Syllabus_Topics_Delete = '/SchoolSyllabus/delete-syllabus-topics';
    public static readonly _Syllabus_SubTopics_Delete = '/SchoolSyllabus/delete-syllabus-subtopics';
    public static readonly _Syllabus_Update = '/SchoolSyllabus/update-syllabus';
    public static readonly __Student_Leave_Request = '/LeaveRequest/leaves';


    // tracking 
    public static readonly __Trasport_Assignment_By_Id = '/StudentTransport/transport-assignments-by-studentId';
    public static readonly __Student_Route_Tracking = '/StudentTransport/route-trip-progress-by-studentId';

}

export class CourseModuleConfig {


    public static readonly _SchoolHolidays_AddHoliday = '/HolidayConfiguration/holiday';
    public static readonly _SchoolHolidays_FetchHolidayListByID = '/HolidayConfiguration/fetch-holiday';
    public static readonly _SchoolHolidays_RemoveHoliday = '/HolidayConfiguration/holidays';
    public static readonly _SchoolHolidays_UpdateHoliday = '/HolidayConfiguration/holiday';

    public static readonly _SchoolPeriodTemplate_All_Templates = '/SchoolScheduleTemplate/all-templates';
    public static readonly _SchoolPeriodTemplate_Delete_Template = '/SchoolScheduleTemplate/delete-template';
    public static readonly _SchoolPeriodTemplate_Template_Details = '/SchoolScheduleTemplate/template-details';
    public static readonly _SchoolPeriodTemplate_Template = '/SchoolScheduleTemplate/template';
    public static readonly _SchoolPeriodTemplate_Update_Template = '/SchoolScheduleTemplate/update-template';
    public static readonly _SchoolPeriodTemplate_Weekdays = '/SchoolScheduleTemplate/weekdays';


    public static readonly _Class_Timetable_By_Id = '/ClassTimetable/class-timetable-by-id';
    public static readonly _Class_Timetable_Staff_Course = '/ClassTimetable/class-timetable-staff-course';
    public static readonly _Class_Timetable_Templates = '/ClassTimetable/class-timetable-templates';
    public static readonly _Class_Timetable_Update = '/ClassTimetable/class-timetable-update';
    public static readonly _Class_Timetable_Courses = '/ClassTimetable/courses';
    public static readonly _Class_Timetable_Sections = '/ClassTimetable/sections';
    public static readonly _Class_Timetable_Staff = '/ClassTimetable/staff';
    public static readonly _Class_Timetable_Template = '/ClassTimetable/templates';
    public static readonly _Class_Timetable_Class_Periods = '/ClassTimetable/class-periods';
    public static readonly _Class_Timetable_Template_Details = '/ClassTimetable/template-details';
    public static readonly _Class_Timetable_Class_Timetable = '/ClassTimetable/class-timetable';
    public static readonly _Class_Timetable_Class_Period_Type = '/ClassTimetable/class-period-types';



    // grade setup urls
    public static readonly _GradeSetup_schoolBoards = '/GradeConfiguration/school-boards';
    public static readonly _GradeSetup_school_Academic_Boards = '/GradeConfiguration/school-academic-boards';
    public static readonly _GradeSetup_schoolacademicclasses = '/GradeConfiguration/school-academic-classes';
    public static readonly _GradeSetup_schoolacademicclasssections = '/GradeConfiguration/school-academic-class-sections';
    public static readonly _GradeSetup_academicgrades = '/GradeConfiguration/academic-grades';
    public static readonly _GradeSetup_academicgradesbyid = '/GradeConfiguration/academic-grades-byid';
    public static readonly _GradeSetup_assessmentgrades = '/GradeConfiguration/assessment-grades';
    public static readonly _GradeSetup_assessmentgradesbyid = '/GradeConfiguration/assessment-gradesbyid';
    public static readonly _GradingTermconfiguration_cloneGradingTerm = '/GradingTermConfiguration/clone-grading-term';
    public static readonly _GradingTermconfiguration_classSections = '/GradingTermConfiguration/fetch-classes-by-gradingtermid';
    public static readonly _GradingTermconfiguration_Sections = '/GradingTermConfiguration/fetch-sections-by-classid-and-gradingtermid';
    public static readonly _GradingTermconfiguration_classes = '/GradingTermConfiguration/classes-dropdown-by-grade-term-id';
    public static readonly _GradingTerms_basedon_board_class_sections = '/GradingTermConfiguration/grading-terms-by-classid-and-sectionid-and-boardid';
    public static readonly _GradingTerms_Print_Template = '/GradingTermConfiguration/print-template';
    // end

    // grade term configurationurl
    public static readonly _GradeTerm_Terms = '/GradingTermConfiguration/fetch-grading-terms';
    public static readonly _GradeTerm_CreateTerm = '/GradingTermConfiguration/create-grading-term';
    public static readonly _GradeTerm_Evaluationtypes = '/GradingTermConfiguration/evaluation-types';
    public static readonly _GradeTerm_MarksCriteria = '/GradingTermConfiguration/fetch-marks-group-criteria';
    public static readonly _GradeTerm_PriorGradingTerms = '/GradingTermConfiguration/grading-terms-by-boardId';
    public static readonly _GradeTerm_TestTypes = '/GradingTermConfiguration/fetch-test-types';
    public static readonly _GradeTerm_GetById = '/GradingTermConfiguration/grade-term';
    public static readonly _GradeTerm_RemoveAll = '/GradingTermConfiguration/remove-grading-term';
    public static readonly _GradeTerm_PUT = '/GradingTermConfiguration/grading-term';
    public static readonly _Grade_Type_Category = '/GardeTermConfiguration/type-categories';
    public static readonly _GradeTerm_ClassSection = '/GradingTermConfiguration/grading-terms-by-class-section';    // end
    public static readonly _GradeTerm_Dropdown_ClassSection = '/GradingTermConfiguration/grading-terms-dropdown-by-class-section';    // end
}
export class FeeModuleConfig {

    public static readonly _FeeAccountDetailsList = '/FeeAccount/fee-accounts-list';
    public static readonly _FeeAccountDetailsbyId = '/FeeAccount/fee-account-byid';
    public static readonly _DeleteFeeAccountDetailsbyId = '/FeeAccount/fee-account';
    public static readonly _CreateFeeAccountDetails = '/FeeAccount/fee-account';
    public static readonly _UpdateFeeAccountDetails = '/FeeAccount/fee-account';
    public static readonly _ClassFee_ClassFeeDetails = '/ClassFee/ClassFeeDetails';



    public static readonly _FeeTerm_FeeTerm = '/FeeTerms/feeTerms';
    public static readonly _FeeTerms_FeeTerm_By_Id = '/FeeTerms/feeTerm-by-id';
    public static readonly _FeeTerms_FeeTerm_By_Academicsession = '/FeeTerms/academic-session-fee-terms';



    public static readonly _FeeType_FetchFeeTypes = '/FeeType/fetch-fee-types';
    public static readonly _FeeType = '/FeeType/fee-type';
    public static readonly _FeeType_FeeAccounts = '/FeeType/fee-accounts';
    public static readonly _FeeType_FeeTerms = '/FeeType/fee-terms';
    public static readonly _FeeType_FeeTypeById = '/FeeType/fee-type-by-id';
    public static readonly _FeeType_FeeTypeCategories = '/FeeType/fee-type-categories';
    public static readonly _FeeType_FetchFAcilities = '/FeeType/fetch-facilitylist';
    public static readonly _Get_All_FeeTypes = '/FeeType/fetch-feetypes';
    public static readonly _Get_All_Amount_FeeTypes = '/FeeType/fetch-fee-amount-by-fee-typeId';



    public static readonly _InvoiceAdjustmentType = '/InvoiceAdjustmentType/invoice-adjustment-type';
    public static readonly _InvoiceAdjustmentTypes = '/InvoiceAdjustmentType/invoice-adjustment-types';
    public static readonly _InvoiceAdjustmentTypeStatusUpdate = '/InvoiceAdjustmentType/invoice-adjustment-type-status';
    public static readonly _Add_LateFeeRules = '/LateFeeRules/latefee-rule';
    public static readonly _Delete_LateFeeRules = '/LateFeeRules/delete-all';
    public static readonly _Get_All_Details = '/LateFeeRules/fetch-latefee-rules';
    public static readonly _Get_LateFee_PenaltyType = '/LateFeeRules/latefee-penalty-types';
    public static readonly _IsExist_LateFeeCategeory = '/LateFeeRules/check-fee-category';
    public static readonly _GetBy_Id = '/LateFeeRules/latefee-rule';
    public static readonly _Update_LateFeeRule = '/LateFeeRules/latefee-rule';

    public static readonly _FeeTypeTranches_CreateFeeTypeTranche = '/FeeTypeTranches/create-feetype-tranche';
    public static readonly _FeeTypeTranches_DeleteteFeeTypeTranche = '/FeeTypeTranches/delete-fee-type-tranche';
    public static readonly _FeeTypeTranches_FeeTypeTranchesDetails = '/FeeTypeTranches/fee-type-tranches-details';
    public static readonly _FeeTypeTranches_FeeTypeTrancheById = '/FeeTypeTranches/fee-type-tranche-by-id';
    public static readonly _FeeTypeTranches_UpdateteFeeTypeTranche = '/FeeTypeTranches/update-feetype-tranche';
    public static readonly _FeeTypeTranches_FeeTypes = '/FeeTypeTranches/fee-types';

    public static readonly _FeeConcessionGroup_FeeConcessionGroup = '/FeeConcessionGroup/fee-concession-group';
    public static readonly _FeeConcessionGroup_GetByID = '/FeeConcessionGroup/fee-concession-group-byid';
    public static readonly _FetchFeeConcessionGroup_GetByID = '/FeeConcessionGroup/fee-concession-group-list-byid';
    public static readonly _FeeConcessionGroup_GetFeeTypes = '/FeeConcessionGroup/fee-types';
    public static readonly _FeeConcessionGroup_GetFeeConcessionTypes = '/FeeConcessionGroup/concession-types';
    public static readonly _FeeConcessionGroup_GetFeeTerms = '/FeeConcessionGroup/fee-terms';
    public static readonly _FeeConcessionGroup_CreateFeeConcessionGroup = '/FeeConcessionGroup/fee-concession-group';

    public static readonly _Clone_FeeStructure = '/ManageFeeConfiguration/clone-fee-structure';
    public static readonly _Delete_SchoolFee_Structure = '/ManageFeeConfiguration/delete-school-fee';
    public static readonly _Get__All_FeeTypes_FeeTerms_By_Class = '/ManageFeeConfiguration/all-feetypes-feeterms-by-class';
    public static readonly _Get_FeeTerms_By_FeeTypes = '/ManageFeeConfiguration/feeterms-by-feetypes';
    public static readonly _Get__FeeTypes_FeeTerms_By_ClassId = '/ManageFeeConfiguration/feetypes-feeterms-by-classid';
    public static readonly _Get_FeeTypes_By_Class = '/ManageFeeConfiguration/fee-types-by-class';
    public static readonly _Get_Unassigned_Classes = '/ManageFeeConfiguration/unassigned-classes';
    public static readonly _Assign_SchoolFees = '/ManageFeeConfiguration/assign-school-fees';
    public static readonly _Update_SchoolFees = '/ManageFeeConfiguration/update-school-fees';
    public static readonly _Generate_Invoice = '/generate-invoice';
    public static readonly _Payment_Type = '/Payment/payment-type';
    public static readonly _Card_Type = '/Payment/card-types';
    public static readonly _Update_Payment = '/Payment/update-payment-status';
    public static readonly _Payment_Details_By_Id = '/Payment/payment-details-by-id';
    public static readonly _Payment_Cooreection = '/PaymentCorrection/payment-correction';
    public static readonly _Invoice_Details = '/finance/invoice/invoice-search/invoice-details/';
    public static readonly _Payment_ApproveOrReject = '/PaymentCorrection/approve-or-reject';
    public static readonly _Payment_Cancel = '/PaymentCorrection/cancel';
    public static readonly _Payment_Details = '/Payment/payment-details';
    public static readonly _Payment_Details_App_Routing = '/finance/payments/payments/payment-details/';
    public static readonly _Payments = '/finance/payments/payments';
    public static readonly _Fee_Invoice_Cancellation = '/fee-invoice-cancelations';
    public static readonly _Student_Invoice_Details = '/student/fee/student-invoice-details/';

    public static readonly _Report_Card_View = '/Payment/print-report';
    public static readonly _Student_Payment_Details = '/student/fee/student-payment-details/';

}


export class TeacherModuleConfig {



    public static readonly _Teacher_Add_Update = '/staff';
    public static readonly _Teacher_Get_all_StaffMember_Data = '/staff-member-data';
    public static readonly _Teacher_Get_all_StaffMembers = '/staff-members';
    public static readonly _Teacher_Search_Staff = '/search-staff';
    public static readonly _Teacher_Get_all_staff_Types = '/staff-types';
    public static readonly _Staff_Job_Application = '/staff-job-applications';
    public static readonly _Reject_Job_Application = '/reject-job-application';
    public static readonly _Fetch_Staff_Details = '/staff-details';
    public static readonly _Staff_Type_Common_Request = '/staffType-common-request';
    public static readonly _Approve_Staff = '/approve-staff';
    public static readonly _Staff_Attendance = '/StaffAttendance/staff-attendance';
    public static readonly _Staff_MarkAttendance = '/StaffAttendance/mark-staff-attendances';
    public static readonly _Create_Job_Application = '/staff-job-applications';
    public static readonly _Job_Application_Details = '/job-application-details';
    public static readonly _Staff_Member_Details = '/staff-member-details';
    public static readonly _Staff_Status = '/staff-status';
}

export class TransportModuleConfig {
    public static readonly _Routing_Transport_Routes = '/Routing/transport-routes';
    public static readonly _Routing_Transport_Routes_Details = '/Routing/transport-routes-details';
    public static readonly _Routing_Transport_Route_Types = '/Routing/route-types';
    public static readonly _Vehicle_Inventory = '/VehicleInventory/vehicle';
    public static readonly _Transport_VehicleAllDetails = '/transportation/inventory/vehicle-inventory/vehicle-inventory-details';
    public static readonly _Transport_All_Vehicles = '/VehicleInventory/vehicles-list';
    public static readonly _VehicleServiceHistroy_Create = '/VehicleServiceHistroy/vehicle-service-history';
    public static readonly _VehicleServiceHistroy_Delete = '/VehicleServiceHistroy/delete-vehicle-service-history';
    public static readonly _VehicleServiceHistroy_All_Details = '/VehicleServiceHistroy/vehicle-service-details';
    public static readonly _VehicleServiceHistroy_Details = '/VehicleServiceHistroy/vehicle-service-historybyId';
    public static readonly _VehicleServiceHistroy_Update = '/VehicleServiceHistroy/update-vehicle-service';
    public static readonly _Transport_Vehicle_Pollution_History = '/VehicleInventory/vehicle-pollution-check-list';
    public static readonly _Transport_Vehicle_Pollution_History_By_Id = '/VehicleInventory/vehicle-pollution-check-by-id';
    public static readonly _Transport_Vehicle_Pollution_Check = '/VehicleInventory/vehicle-pollution-check';
    public static readonly _Transport_Vehicle_Insurance_List = '/VehicleInventory/vehicle-insurance-list';
    public static readonly _Transport_Vehicle_Insurance = '/VehicleInventory/vehicle-insurance';
    public static readonly _Transport_Vehicle_Insurance_By_Id = '/VehicleInventory/vehicle-insurance-by-id';
    public static readonly _Schedule = '/Schedule/schedule';
    public static readonly _Schedule_Vehicle = '/Schedule/vehicle';
    public static readonly _Schedule_Details = '/Schedule/schedule-details';
    public static readonly _Schedule_Transport_Routes = '/Schedule/transport-routes';
}

export class UserManagmentModuleConfig {

    public static readonly _Right_RightsbyRoleId = '/Right/RightsbyRoleId';
    public static readonly _Right_RoleId = '/Right/RoleId';
    public static readonly _Right_RoleId_UserSystemId = '/Right/RoleId/UserSystemId';
    public static readonly _Right_usermenus = '/Right/user-menus';
}

export class CommunicationModuleConfig {
    public static readonly _Communication_Types = '/CommunicationTypes/communication-types';
    public static readonly _Communication_Types_Details = '/CommunicationTypes/communication-types-details';
    public static readonly _Communication_Setup = '/communication/school-communications/communication-configuration/communication-setup';
    public static readonly _Communication_Search = '/communication-search';
    public static readonly _Communication_Type = '/communication-types';

    public static readonly _Message_Transmission = '/message-transmission';
    public static readonly _Service_Configs = '/serviceprovider-configs';
    public static readonly _Service_Providers = '/serviceproviders';
    public static readonly _School_Service_Config = '/school-service-provider-config';
    public static readonly _Payment_Service_Providers = '/payment-serviceproviders';
    public static readonly _School_Service_Configs = '/school-service-configs';
    public static readonly _SMS_Providers = '/sms-serviceproviders';
    public static readonly _Mail_Providers = '/mail-serviceproviders';
    public static readonly _Active_Services = '/active-services';
    public static readonly _Communication_Details = '/Communication/communication-details';
    public static readonly _Approve_Communication = '/Communication/approve-communication';
    public static readonly _Reject_Communication = '/Communication/reject-communication';
    public static readonly _Service_Status = '/school-service-provider-config-status';
    public static readonly _School_Configs_By_Code = '/school-service-configs-code';
    public static readonly _Resend_Otp = '/api/SMS/resend-otp';
    public static readonly _Comm_Configuration = '/communication/school-communications/communication-configuration';
    public static readonly _Get_Status = '/Communication/get-all-status';

}


export class RouteConfig {
    public static readonly _Institute = '/manage-institution';
    public static readonly _Add_Institute = '/manage-institution/institute-details/add-institution';
    public static readonly _Edit_Institute = '/manage-institution/institute-details/edit-institution/';

    public static readonly _School = '/manage-school';
    public static readonly _Add_School = '/manage-school/add-school';
    public static readonly _Edit_School = '/manage-school/edit-school/';

    public static readonly _Student_Applications = '/academics/student-admissions/student-applications';
    public static readonly _Student_Application_Details = '/academics/student-admissions/student-applications/student-application-details';
    public static readonly _Student_Application_Approve = '/academics/student-admissions//student-applications/student-application-details/approve-student/';
    public static readonly _Student_Group_Details = '/academics/student-information-system/student-groups/student-group-details/';
    public static readonly _Student_Groups = '/academics/student-information-system/student-groups';
    public static readonly _Student_Database = '/academics/student-information-system/student-database';
    public static readonly _Student_Details = '/academics/student-information-system/student-database/student-details';
    public static readonly _Add_Edit_Student = '/academics/student-information-system/student-database/add-edit-student-admission';
    public static readonly _Add_Edit_School_Event = 'academics/events/school-events/add-edit-school-event';
    public static readonly _Schol_Events = 'academics/events/school-events';

    public static readonly _Staff_Database = '/staff/staff-information-system/staff-database';
    public static readonly _Staff_View = '/staff/staff-information-system/staff-database/staff-detail';
    public static readonly _Staff_Edit =
        '/staff/staff-information-system/staff-database/add-staff-admission-form';
    public static readonly JOB_APPLICATION_DETAILS = '/staff/staff-admissions/job-applications/job-applications-details';
    public static readonly JOB_APPLICATION = '/staff/staff-admissions/job-applications';
    public static readonly APPROVE_JOB_APPLICATION = '/staff/staff-admissions/job-applications/approve-job-application';
    public static readonly STAFF_STAFF_ADMISSION = '/staff/staff-admissions/job-applications-details';
    public static readonly STAFF_STAFF_DATABASE = '/staff/staff-information-system/staff-database';

    public static readonly _Route_Database = '/transportation/routing/vehicle-route-database';
    public static readonly _Add_Route = '/transportation/routing/vehicle-route-database//new-route/';
    public static readonly _Edit_Route = '/transportation/routing/vehicle-route-database//edit-route/';
    public static readonly _View_Route = '/transportation/routing/vehicle-route-database//view-route/';

    public static readonly Test_Grading = '/academics/academic-grading/test-schedule';
    public static readonly Staff_Test_Grading = 'staff/academics/academic-grading/test-schedule';
    public static readonly Home_Work = '/staff/assignments/homeworks-assignments';
    public static readonly Home_Work_Test_Schedule = '/staff/assignments/homeworks-assignments/test-schedule';
    public static readonly Test_Schedule = '/academics/academic-grading/test-schedule';
    public static readonly _Add_Transport_Schedule = '/transportation/routing/transport-schedules/new-transport-schedule/';
    public static readonly _View_Transport_Schedule = '/transportation/routing/transport-schedules/view-transport-schedule/';
    public static readonly _Transport_Schedule = '/transportation/routing/transport-schedules/';
    public static readonly _Edit_Transport_Schedule = '/transportation/routing/transport-schedules/edit-transport-schedule/';
    public static readonly Add_Payment = '/finance/payments/payments/add-payments';

    public static readonly Student_Transport = '/transportation/routing/student-transport';
    public static readonly _Manage_Student_Trasport = '/transportation/routing/student-transport/manage-student-transport/';

    public static readonly _ReportCard_Based_On_Student = '/academics/academic-grading/report-cards/search/report-card-details/';
    public static readonly _Student_Event_Details = 'student/events/event-details';

    public static readonly _Staff_Event_Details = 'staff/events/event-details';

    public static readonly _Vehicle_Details = '/transportation/inventory/vehicle-inventory';

    public static readonly _Syllabus_Details = 'configuration/syllabus/manage-syllabus/syllabus-details/';
    public static readonly _Syllabus_Progress_Details = 'academics/syllabus/progress/syllabus-entry-details/';
    public static readonly _Student_Requests = '/academics/student-information-system/student-requests';
    public static readonly _Preview_Certificate = '/academics/student-information-system/preview-certificate/';
    public static readonly _Student_Tracking = '/student/transportation/tracking';

}

