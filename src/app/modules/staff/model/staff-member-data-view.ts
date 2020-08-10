/**Gets or Sets StaffMemberDataView */
export interface StaffMemberDataView {
    /**Gets or sets StaffName */
    staffName: string;
    /**Gets or sets StaffCode */
    staffCode: string;
    /**Gets or sets StaffType */
    staffType: string;
    /**Gets or sets DateOfJoin */
    dateOfJoin: Date | string;
    /**Gets or sets StatusName */
    statusName: string;
    /**Gets or sets Position */
    position: string;
    /**Gets or sets Department */
    department: string;
    /**Gets or sets AttachmentName */
    attachmentName: string;
    /**
     * Gets or sets StaffDetails
     */
    staffDetails: StaffPersonView;
    /**
     * Gets or sets AddressInfo
     */
    addressInfo: StaffAddressView;
    /**
     * Gets or sets ContactInfo
     */
    contactInfo: StaffContactView;
    /**
     * Gets or sets PassportInfo
     */
    passportInfo: StaffPassportView;
}

/**StaffPersonView */
export interface StaffPersonView {
    /**gets or sets FirstName */
    firstName: string;
    /**gets or sets LastName */
    lastName: string;
    /**gets or sets Gender */
    gender: string;
    /**gets or sets MiddleName */
    middleName: string;
    /**Gets or sets DateOfBirth */
    dateOfBirth: string;
    /**gets or sets AadhaarNumber */
    aadhaarNumber: number | null;
    /**gets or sets PanNumber */
    panNumber: string;
    /**gets or sets Caste */
    caste: string;
    /**gets or sets Religion */
    religion: string;
}

/**StaffAddressView */
export interface StaffAddressView {
    /**gets or sets AddressLine1 */
    addressLine1: string;
    /**gets or sets AddressLine2 */
    addressLine2: string;
    /**gets or sets Country */
    countryName: string;
    /**gets or sets State */
    stateName: string;
    /**gets or sets City */
    city: string;
    /**gets or sets Pincode */
    pincode: string;
}

/**StaffContactView */
export interface StaffContactView {
    /**gets or sets PrimaryEmail */
    primaryEmail: string;
    /**gets or sets SecondaryEmail */
    secondaryEmail: string;
    /**gets or sets MobileNumber */
    mobileNumber: string;
    /**gets or sets LandlineNumber */
    landlineNumber: string;
    /**gets or sets AlternateNumber */
    alternateNumber: string;
}

/**Gets or sets StaffPassportView */
export class StaffPassportView {
    /**Gets or sets FullName */
    fullName: string;
    /**Gets or sets PassportNumber */
    passportNumber: string;
    /**Gets or sets DateOfIssue */
    dateOfIssue: string;
    /**Gets or sets PlaceOfIssue */
    placeOfIssue: string;
    /**Gets or sets ExpiryDate */
    expiryDate: string;
}   
