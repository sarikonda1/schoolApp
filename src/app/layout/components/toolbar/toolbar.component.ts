import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../../../auth/auth.service';
import { AcademicSessionService, UsersService, UIThemeService } from '../../../service/academic-service';
import { RightService } from '../../../service/user-management/api/right.service';
import { locale as navigationEnglish } from '../../../navigation/i18n/en';
import { locale as navigationTelugu } from '../../../navigation/i18n/te';
import { FuseNavigation } from '../../../../@fuse/types';
import { FuseNavigationService } from '../../../../@fuse/components/navigation/navigation.service';
import { FuseTranslationLoaderService } from '../../../../@fuse/services/translation-loader.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AcademicSessionSchoolService } from 'app/service/academic-service/api/academic-session-school.service';
import { Router } from '@angular/router';
import { UserParentService } from 'app/service/parent/user-parent.service';
import { AppSettings } from 'app/app.constants';
import { StoreService } from 'app/service/file-management/store.service';
import { ParamsViewModel } from 'app/models/user-management/params-view-model';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AcademicSessionSchoolService, UserParentService, StoreService]
})

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    showAcademicSectionSelection: boolean;
    showSchoolSelection = false;
    languages: any;
    schools: any = [];
    currentSchoolId: any;
    currentAcademicSessionId: any;
    academicSessions: any = [];
    userName: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];

    // Private
    private _unsubscribeAll: Subject<any>;
    language: string;
    tempSchoolId: any;
    currentInstituteId: any;
    stafLoginShow: any = null;
    adminLoginShow: any = null;
    parentLoginShow: any = null;
    instituteLoginShow: any = null;
    count = 0;
    userAccesses: any;
    currentUserType: string = null;
    students: any;
    showStudentSelection = false;
    currentStudentId: any;
    defaultLaunguage: any;
    name: any;
    currentSchoolName: any;
    HttpStatus: any;
    displayAcademicSessionName: any;
    subscription: Subscription;
    paramsView: ParamsViewModel;

    testVariable: string;
    testEmitter$ = new BehaviorSubject<string>(this.testVariable);

    loggedInUserType = new BehaviorSubject<string>(this.currentUserType);

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private oauthService: OAuthService,
        private authService: AuthService,
        private usersService: UsersService,
        private uiThemeService: UIThemeService,
        private academicSessionService: AcademicSessionService,
        private rightService: RightService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public dialogRef: MatDialog,
        private commonService: CommonService,
        private router: Router,
        private userParentService: UserParentService,
        private storeService: StoreService,
        public snackBar: MatSnackBar
    ) {

        // read list of launguages from json file
        this.commonService.getLaunguage().subscribe(res => {
            this.languages = res.languages;
            this.defaultLaunguage = res.defaultLaunguage;
        });
        this.subscription = this.commonService.getSchoolId().subscribe(res => {
            if (res.isSchoolAdded) {
                if (!this.schools.length && res.userAccessId){
                 this.setClaims(res.userAccessId, '_ui', false, null, false, true);
                } else{
                 this.getAllSchools();
                }
            }
        });
        this.subscription = this.commonService.getAcademicSessionId().subscribe(res => {
            if (res.isAcaemicSessionAdded){
                if (!this.academicSessions.length && res.userAccessId){
                    this.setClaims(res.userAccessId, '_ui', false, null, true);
                }else if (!this.academicSessions.length && res.schoolId){
                    this.setClaims(res.schoolId, '_si', false, null, true);
                }else {
                    this.getSchoolAcademicSessions();
                } 
            } 
        });

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.HttpStatus = require('http-status-codes');
        // Subscribe to the config changes
        if (this.authService.hasValidAccessToken) {
            this.usersService.userCheckUserAccessGet().subscribe(res => {
                this.userAccesses = res;
                if (this.userAccesses !== undefined && this.userAccesses.length === 0) {
                    // this.router.navigate(['errors/error-403']);
                    return;
                }

                if (res[0].messages !== null && (res[0].parentId || res[0].staffId) && res[0].isLicenseInActive) {
                    return this.logout();
                 }else if (res[0].messages !== null) {
                    this.snackBar.open(res[0].messages.ResultMessage, '', {
                        duration: 10000,
                        panelClass: 'error-snackbar',
                        horizontalPosition: 'center',
                        verticalPosition: 'top'
                    });
                    return;
                }


                const decodedJwtData = this.getJwtData();

                if (decodedJwtData._ut !== undefined && decodedJwtData._ut !== null) {
                    this.currentUserType = decodedJwtData._ut;
                    this.setUserType(this.currentUserType, parseInt(decodedJwtData._ui, 10));
                    this.getUserTypes(this.userAccesses);
                    this.commonService.setLoggedInUserType(this.currentUserType);
                } else if (this.getUserTypes(this.userAccesses) > 1) {

                    //   configuring alert dialog
                    const dialogRef = this.dialogRef.open(CustomDialogComponent, {
                        disableClose: true,
                        data: {
                            text: this.commonService.getTranslation('continueas'),
                            action: true, btn1Text: this.stafLoginShow, btn2Text: this.parentLoginShow, btn3Text: this.adminLoginShow, btn4Text: this.instituteLoginShow,
                            btn1Class: 'accent', btn2Class: 'purple', btn3Class: 'fuse-navy'
                        },
                    });
                    //   based on user selection changing user roles
                    dialogRef.afterClosed().subscribe(loginAs => {
                        this.currentUserType = this.getUserType(loginAs);
                        this.setUserLogin(this.currentUserType);
                    });
                } else if (res.length > 0) {
                    const element = res[0];
                    // check user is of institute admin
                    if (element.instituteId) {
                        this.updateUserType(AppSettings.INSTITUTE_ADMIN);
                    }
                    else if (element.schoolId && !element.parentId && !element.staffId) {
                        this.updateUserType(AppSettings.ADMIN);
                    }
                    // check user is of parent
                    else if (element.parentId) {
                        this.updateUserType(AppSettings.PARENT);
                    }
                    else if (element.staffId) {
                        this.updateUserType(AppSettings.STAFF);
                    } else if (element.instituteId == null && element.schoolId == null) {
                        this.getUserRights(element.userAccessId);
                        this.setClaims(element.userAccessId, '_ui', false);
                        this.getTheme();
                    }
                }
            },
                error => {
                    if (error.status === 401) {
                        this.authService.logout();
                    }
                });
        }
        this.getCurrentUsername();
    }

    // set theme based on localstorage or after login
    setTheme(): void {
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });
    }
    // returns number of user types i.e user have and makes .
    getUserTypes(userAcesses: any): number {
        userAcesses.forEach((element: any) => {
            this.name = element.firstName + ' ' + element.lastName;
            if (element.staffId) {
                // tslint:disable-next-line:no-unused-expression
                this.stafLoginShow ? null : this.count++;
                this.stafLoginShow = 'Staff';
            }
            else if (element.schoolId && !element.staffId && !element.parentId) {
                // tslint:disable-next-line:no-unused-expression
                this.adminLoginShow ? null : this.count++;
                this.adminLoginShow = 'School Admin';
            }
            else if (element.parentId) {
                // tslint:disable-next-line:no-unused-expression
                this.parentLoginShow ? null : this.count++;
                this.parentLoginShow = 'Parent';
            }
            else if (element.instituteId) {
                // tslint:disable-next-line:no-unused-expression
                this.instituteLoginShow ? null : this.count++;
                this.instituteLoginShow = 'Institute Admin';
            }
        });
        return this.count;
    }

    // if user contains multiple user types, set any one of the user type.
    setUserLogin(loginAs: any): void {

        // user wants to switch from one user type to another user types
        if (this.currentUserType !== loginAs) {
            const usertype = { value: this.commonService.getTranslation(loginAs) };
            // configuring alert dialog 
            const dialogRef = this.dialogRef.open(CustomDialogComponent, {
                disableClose: true,
                data: { text: this.commonService.getTranslation('pleaseconfirmyourswitchtoaccess', usertype), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
            });

            // based on user selection changing user roles
            dialogRef.afterClosed().subscribe(action => {
                if (action === AppSettings.NO) {
                    // this.updateUserType(this.currentUserType);
                } else {
                    // this.currentUserType = this.getUserType(loginAs);
                    localStorage.removeItem('_ts');
                    localStorage.removeItem('_li');
                    this.updateUserType(this.getUserType(loginAs), true);
                }
            });
        } else {
            this.updateUserType(this.getUserType(loginAs));
        }
    }

    updateUserType(loginAs: any, isReloadRequired = false): void {
        // checking user selected user-type
        for (const userAccess of this.userAccesses) {
            this.name = userAccess.firstName + ' ' + userAccess.lastName;
            if (loginAs === AppSettings.INSTITUTE_ADMIN && userAccess.instituteId) {
                this.setClaims(userAccess.userAccessId, '_ui', isReloadRequired, userAccess);
                this.getUserRights(userAccess.userAccessId);
                this.showStudentSelection = false;
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                this.currentUserType = loginAs;
                break;
            }
            else if (loginAs === AppSettings.STAFF && userAccess.staffId) {
                // this.setClaims(userAccess.userAccessId, '_ui', isReloadRequired, userAccess);
                // this.getUserRights(userAccess.userAccessId, true);
                // this.showStudentSelection = false;
                // this.name = userAccess.firstName + ' ' + userAccess.lastName;
                // this.currentUserType = loginAs;
                this.checkStaffParentSchoolLicense(loginAs, isReloadRequired);
                break;
            } else if (loginAs === AppSettings.PARENT && userAccess.parentId) {
                // this.setClaims(userAccess.userAccessId, '_ui', isReloadRequired, userAccess);
                // this.getUserRights(userAccess.userAccessId, true);
                // this.name = userAccess.firstName + ' ' + userAccess.lastName;
                // this.currentUserType = loginAs;
                this.checkStaffParentSchoolLicense(loginAs, isReloadRequired);
                break;
            } else if (loginAs === AppSettings.ADMIN && userAccess.schoolId && !userAccess.staffId && !userAccess.parentId && !userAccess.isLicenseInActive) {
                this.setClaims(userAccess.userAccessId, '_ui', isReloadRequired, userAccess);
                this.getUserRights(userAccess.userAccessId);
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                this.currentUserType = loginAs;
                break;
            }
        }
    }

    checkStaffParentSchoolLicense(loginAs: any, isReloadRequired: boolean): void {
        const initialIndex = loginAs ===  AppSettings.STAFF ? this.userAccesses.findIndex(c => c.isLicenseInActive === false && c.staffId !== null) : 
        this.userAccesses.findIndex(c => c.isLicenseInActive === false && c.parentId !== null);
        if (initialIndex !== undefined && initialIndex !== -1) {
            this.setClaims(this.userAccesses[initialIndex].userAccessId, '_ui', isReloadRequired, this.userAccesses[initialIndex]);
            this.getUserRights(this.userAccesses[initialIndex].userAccessId, true);
            this.showStudentSelection = loginAs ===  AppSettings.STAFF ? false : true;
            this.name = this.userAccesses[initialIndex].firstName + ' ' + this.userAccesses[initialIndex].lastName;
            this.currentUserType = loginAs;
        }else {
            this.snackBar.open('Unable to process the login for the school. Please contact the School Administrators for further assistance.', '', {
                duration: 5000,
                panelClass: 'error-snackbar',
                horizontalPosition: 'center',
                verticalPosition: 'top'
            });
        }
    }


    // get user rights w.r.t UserAccessId
    getUserRights(userAccessId: any, isDirectMenu = false): void {


        this.rightService.rightGetRightsbyUserIdGet(userAccessId).subscribe(menuItems => {
            const tempMenuItems = this.formatMenu(menuItems, isDirectMenu);
            const finalMenuItems = this.buildFinalMenu(tempMenuItems, isDirectMenu);
            this.navigation = finalMenuItems;
            this._fuseNavigationService.unregister('main');
            this._fuseNavigationService.register('main', this.navigation);
            // Set the main navigation as our current navigation
            this._fuseNavigationService.setCurrentNavigation('main');

            // Add languages
            this._translateService.addLangs(this.languages);

            // Set the default language
            this._translateService.setDefaultLang(this.defaultLaunguage.id);

            // Set the navigation translations
            this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationTelugu);

            // Use a language
            this._translateService.use(this.defaultLaunguage.id);
            /*console.log(this.getJwtData());
            const currentUserTypeValue = (this.currentUserType === null || this.currentUserType === undefined)
                ? this.getJwtData()._ut : this.currentUserType;
            this.commonService.setLoggedInUserType(currentUserTypeValue);*/

            setTimeout(() => {
                for (const launguage of this.languages) {
                    if (launguage.id !== this.defaultLaunguage.id) {
                        this._translateService.setDefaultLang(launguage.id);
                        break;
                    }
                }
                this._translateService.setDefaultLang(this.defaultLaunguage.id);

                // Set the selected language from default languages
                this.selectedLanguage = _.find(this.languages, { 'id': this._translateService.currentLang });

                // Set already selected language 
                if (localStorage.getItem('_l')) {
                    this._translateService.setDefaultLang(localStorage.getItem('_l'));
                    this._translateService.use(localStorage.getItem('_l'));
                    this.selectedLanguage = _.find(this.languages, { 'id': localStorage.getItem('_l') });
                }
            });
        });
    }

    // configuring institute user
    getUserInstitution(institute: any): void {
        this.currentInstituteId = institute.instituteId;
        const inst = { id: institute.instituteId, name: institute.instituteName, code: institute.instituteCode };
        localStorage.setItem('_i', JSON.stringify(inst));
        this.getAllSchools();
    }

    getAllSchools(): void {
        this.usersService.getSchoolList().subscribe(res => {
            this.schools = [];
            if (res.schools.length) {
                res.schools.forEach(element => {
                    if (element.isSelected === true) {
                        this.currentSchoolId = element.id;
                    }
                    this.schools.push({
                        value: element.id,
                        label: element.name,
                        isSelected: element.isSelected ? element.isSelected : false,
                        isDisabled: element.isDisabled
                    });
                });
                this.dropDownChangeDetection();
                this.updateCurrentSchool();
            }
        });
    }

    // creates school drop down
    getSchools(): any {
        this.schools = [];
        this.userAccesses.forEach(element => {
            if (element.schoolId && !element.parentId && !element.staffId) {
                if (element.isSelected === true && element.isLicenseInActive === false) {
                    this.currentSchoolId = element.schoolId;
                }
                this.schools.push({
                    value: element.schoolId,
                    label: element.schoolName,
                    isSelected: element.isSelected ? element.isSelected : false,
                    uId: (element.userAccessId) ? element.userAccessId : null,
                    isDisabled: element.isLicenseInActive
                });
            }
        });
        if (!this.currentSchoolId) {
            const initialIndex = this.schools.findIndex(c => c.isDisabled === false);
            if (initialIndex !== undefined && initialIndex !== -1) {
                this.currentSchoolId = this.schools[initialIndex].value;
                this.schools[initialIndex].isSelected = true;
            }
        }
        this.dropDownChangeDetection();
        this.updateCurrentSchool();
    }

    // check already user set the school or not if not set, set one default school 
    updateCurrentSchool(): void {
        this.getSchoolAcademicSessions();
        this.showHideSchoolAcadeicsession(true);
    }

    // Get School AcademicSessions 
    getSchoolAcademicSessions(): void {
        this.academicSessionService.academicSessionAllAcademicSessionsBySchoolIdGet(this.currentSchoolId)
            .subscribe(
                response => {
                    if (response.academicSessionView.length) {
                        this.academicSessions = [];
                        this.prepareAcademicSession(response.academicSessionView);
                    } else {
                        localStorage.setItem('_as', null);
                    }
                }
            );
    }

    prepareAcademicSession(academicSessions: any): void {
        this.showAcademicSectionSelection = true;
        const activeAcademicSession = [];
        const completedAcademicSession = [];
        const newAcademicSession = [];
        this.academicSessions = [];
        academicSessions.forEach(element => {
            if (element.isSelected) {
                this.currentAcademicSessionId = element.id;
                this.setAcademicSessionStorage(element);
            }
            const academicSessionElement = {
                id: element.id,
                name: (element.name) ? element.name : element.displayName,
                startDate: element.startDate,
                endDate: element.endDate,
                statusCode: element.statusCode,
                classId: element.classId,
                sectionId: element.sectionId,
                boardId: element.boardId,
                isSelected: element.isSelected
            };
            if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE) {
                activeAcademicSession.push(academicSessionElement);
            } else if (element.statusCode === AppSettings.ACADEMICSESSION_COMPLETED) {
                completedAcademicSession.push(academicSessionElement);
            } else if (element.statusCode === AppSettings.ACADEMICSESSION_NEW) {
                newAcademicSession.push(academicSessionElement);
            }
        });

        if (activeAcademicSession.length) {
            this.academicSessions.push({
                name: 'Active Academic Session',
                academics: activeAcademicSession
            });
        }
        if (completedAcademicSession.length) {
            this.academicSessions.push({
                name: 'Completed Academic Sessions',
                academics: completedAcademicSession
            });
        }
        if (newAcademicSession.length) {
            this.academicSessions.push({
                name: 'New Academic Sessions',
                academics: newAcademicSession
            });
        }
        this.dropDownChangeDetection();
    }

    // Get Parent Info w.r.t email id
    getParentInfo(): any {
        this.students = [];
        let studentAcademicSession = [];
        this.userParentService.userParentStudentDetailsGet().subscribe(students => {
            if (students) {
                this.showStudentSelection = true;
                students.forEach(parent => {
                    if (parent.isSelected) {
                        this.currentStudentId = parent.studentId;
                        studentAcademicSession = parent.academicSessions;
                    }
                    this.students.push({ value: parent.studentId, label: parent.studentName, uid: parent.userAccessId, isSelected: parent.isSelected });
                });
                this.dropDownChangeDetection();
                this.getStudentAcademicSessions(studentAcademicSession);
            }
        });
    }

    getStudentAcademicSessions(academicSessionsList: any): void {
        this.academicSessions = [];
        academicSessionsList.forEach(element => {
            this.academicSessions.push({
                id: element.id,
                name: element.name,
                statusCode: element.statusCode,
                classId: element.classId,
                sectionId: element.sectionId,
                startDate: element.startDate,
                endDate: element.endDate,
                boardId: element.boardId,
                isSelected: element.isSelected
            });
        });
        this.showAcademicSectionSelection = true;
        this.prepareAcademicSession(this.academicSessions);
    }


    showHideSchoolAcadeicsession(status: boolean): void {
        if (status) {
            this.showAcademicSectionSelection = true;
            this.showSchoolSelection = true;
        } else {
            this.showAcademicSectionSelection = false;
            this.showSchoolSelection = false;
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        // console.log(value);
    }

    /**
      * Set the language
      *
      * @param lang
      */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);

        // store launguage in localstorage
        localStorage.setItem('_l', lang.id);
    }

    getCurrentUsername(): void {
        // to display user email id
        const claims: any = this.oauthService.getIdentityClaims();
        if (claims) {
            this.userName = claims.email;
        }
    }

    logout(): void {
        localStorage.clear();
        this.authService.logout();
        this.navigation = [];
        this._fuseNavigationService.unregister('main');
    }


    changeCurrentSchool($event: any): void {
        this.currentSchoolId = $event.value;
        let school = null;
        let uid = null;
        this.schools.forEach(element => {
            if (element.value === this.currentSchoolId) {
                school = { id: element.value, name: element.label, isSelected: element.isSelected };
                uid = element.uId ? element.uId : null;
            }
        });
        const schoolname = { value: school.name };
        // configuring alert dialog 
        const dialogRef = this.dialogRef.open(CustomDialogComponent, {
            disableClose: true,
            data: { text: this.commonService.getTranslation('pleaseconfirmyourswitchtoschool', schoolname), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
        });

        // based on condition changing school dropdown
        dialogRef.afterClosed().subscribe(result => {
            if (result === AppSettings.NO) {
                this.currentSchoolId = this.schools.find(x => x.isSelected === true).value;
                this.dropDownChangeDetection();
            }
            else {
                this.removeLocalStorageItems();
                localStorage.removeItem('_as');
                if (uid) {
                    this.setClaims(uid, '_ui');
                } else {
                    this.setClaims(this.currentSchoolId, '_si');
                }
                localStorage.removeItem('_tc');
            }
        });
    }

    changeCurrentAcademicSession($event: any): void {
        this.currentAcademicSessionId = $event.value;
        let acname;
        let academicSession;
        academicSession = this.findAcademicSessionValue($event.value);
        acname = { value: academicSession.name };
        // configuring alert dialog 
        const dialogRef = this.dialogRef.open(CustomDialogComponent, {
            disableClose: true,
            data: { text: this.commonService.getTranslation('pleaseconfirmyourswitchtoinformationas', acname), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
        });

        // based on condition changing school dropdown
        dialogRef.afterClosed().subscribe(result => {
            if (result === AppSettings.NO) {
                this.academicSessions.forEach(acdm => {
                    let data =  acdm.academics.find(x => x.isSelected === true);
                    if (data && data.id){
                        this.currentAcademicSessionId = data.id;
                    }
                });
                this.dropDownChangeDetection();
            }
            else {
                this.setAcademicSessionStorage(academicSession);
                this.setClaims(this.currentAcademicSessionId, '_as');
                localStorage.removeItem('_tc');
            }
        });
    }
    findAcademicSessionValue(id: any): void {
        let academicSession = null;
        this.academicSessions.forEach((acg) => {
            acg.academics.forEach(element => {
                if (element.id === id) {
                    academicSession = { id: this.currentAcademicSessionId, name: element.name, startDate: element.startDate, endDate: element.endDate };
                }
            });
        });
        return academicSession;
    }

    changeCurrentStudent(std: any): void {
        // this.currentStudentId = std.value;
        let student = null;
        this.students.forEach(element => {
            if (element.value === std.value) {
                student = { id: element.value, name: element.label, uid: element.uid };
            }
        });
        const sname = { value: student.name };
        // configuring alert dialog 
        const dialogRef = this.dialogRef.open(CustomDialogComponent, {
            disableClose: true,
            data: { text: this.commonService.getTranslation('pleaseconfirmyourswitchtoinformation', sname), action: true, btn1Text: AppSettings.NO, btn2Text: AppSettings.YES },
        });

        // based on condition changing school dropdown
        dialogRef.afterClosed().subscribe(result => {
            if (result === AppSettings.NO) {
                this.currentStudentId = this.students.find(x => x.isSelected === true).value;
                this.dropDownChangeDetection();
            }
            else {
                this.removeLocalStorageItems();
                localStorage.setItem('_st', JSON.stringify(student));
                localStorage.removeItem('_as');
                this.setClaims(student.id, '_st');
            }
        });
    }


    formatMenu(data: any, isDirectMenu = false): Array<any> {
        const formattedMenu: Array<any> = [];
        data.forEach((element: any) => {
            if (element.isMenu === 1 || element.isTab === 1) {
                formattedMenu.push(
                    {
                        title: element.name,
                        id: element.id,
                        url: element.url,
                        icon: element.icon,
                        type: (isDirectMenu) ? 'item' : (!element.parentId) ? 'group' : (!element.innerMenus.length) ? 'item' : 'collapsable',
                        children: (element.innerMenus.length > 0) ? this.formatMenu(element.innerMenus) : [],
                        parentId: element.parentId
                    }
                );
            }
        });
        return formattedMenu;
    }

    buildFinalMenu(data: any, isDirectMenu = false): Array<FuseNavigation> {
        const resultMenu: Array<FuseNavigation> = [];
        data.forEach((element: any) => {
            resultMenu.push(
                {
                    title: element.title,
                    id: element.id,
                    url: element.url,
                    translate: element.title,
                    exactMatch: false,
                    icon: element.icon,
                    type: (isDirectMenu) ? 'item' : (!element.parentId) ? 'group' : (!element.children.length) ? 'item' : 'collapsable',
                    children: (element.children.length > 0) ? this.buildFinalMenu(element.children) : []
                }
            );
        });
        return resultMenu;
    }


    getTheme(): void {
        // if (localStorage.getItem('_ts')) {
        //     this._fuseConfigService.config = JSON.parse(localStorage.getItem('_ts'));
        //     this.setTheme();
        // } else {
            this.uiThemeService.getTheme().subscribe(responseData => {
                if (responseData.configuration) {
                    this._fuseConfigService.config = JSON.parse(responseData.configuration);
                    localStorage.setItem('_ts', responseData.configuration);

                    this.setTheme();
                }
                const images = {
                    logoImage: '',
                    nameImage: ''
                };
                responseData.logoImage === null ?
                    images.logoImage = 'assets/images/logos/academy-front-logo.png' : images.logoImage = this.storeService.getFilePath(responseData.logoImage);

                images.nameImage = responseData.nameImage === null ? 'assets/images/logos/academy-front-name-logo.png' : this.storeService.getFilePath(responseData.nameImage);

                this._fuseConfigService.images = images;
                localStorage.setItem('_li', JSON.stringify(images));
                if (responseData.dateFormat !== null) {
                    localStorage.setItem('_df', responseData.dateFormat.toUpperCase());
                }

                localStorage.setItem('_c', responseData.currency);
            },
                error => {

                    const images = {
                        logoImage: 'assets/images/logos/academy-front-logo.png',
                        nameImage: 'assets/images/logos/academy-front-name-logo.png'
                    };
                    this._fuseConfigService.images = images;
                    localStorage.setItem('_li', JSON.stringify(images));
                    localStorage.setItem('_df', AppSettings.DATE_PATTERN);
                });
        // }
    }

    setAcademicSessionStorage(element: any): void {
        const academicSession = {
            id: element.id,
            name: (element.name !== undefined && element.name !== '') ? element.name : element.displayName,
            startDate: element.startDate,
            endDate: element.endDate,
            statusCode: element.statusCode,
            classId: element.classId,
            sectionId: element.sectionId,
            boardId: element.boardId,
        };
        localStorage.setItem('_as', JSON.stringify(academicSession));
    }


    setClaims(value: string, type: string, reload = true, userAccess = null, callAcademicSesssion = false, getSchools = false): void {
        this.paramsView = {
            type: null,
            value: null
        };
        this.paramsView.type = type;
        this.paramsView.value = value;
        this.usersService.changeparam(this.paramsView).subscribe(token => {
        }, er => {
            if (er.error !== null && er.error.text) {
                localStorage.removeItem('access_token');
                localStorage.setItem('access_token', er.error.text);

                const currentUserTypeValue = this.currentUserType === null ? this.getJwtData()._ut : this.currentUserType;
                this.commonService.setLoggedInUserType(currentUserTypeValue);
                if (reload) {
                    this.router.navigate(['home'])
                        .then(() => {
                            window.location.reload();
                        });
                }

                if (userAccess != null && userAccess.parentId) {
                    this.getParentInfo();
                } else if (userAccess != null && userAccess.staffId) {
                    this.getStaffDetails();
                }
                else if (userAccess != null && userAccess.instituteId != null) {
                    this.getUserInstitution(userAccess);
                } else if (userAccess != null && userAccess.schoolId && !userAccess.staffId && !userAccess.parentId) {
                    this.getSchools();
                }
                if (callAcademicSesssion) {
                    this.getSchoolAcademicSessions();
                }
                if (getSchools){
                    this.getAllSchools();
                }
                this.getTheme();
            }
        });
    }

    getUserType(userType: string): string {
        let uType = null;
        switch (userType) {
            case 'Institute Admin':
            case AppSettings.INSTITUTE_ADMIN:
                uType = AppSettings.INSTITUTE_ADMIN;
                break;
            case 'Staff':
            case AppSettings.STAFF:
                uType = AppSettings.STAFF;
                break;
            case 'Parent':
            case AppSettings.PARENT:
                uType = AppSettings.PARENT;
                break;
            default:
                uType = AppSettings.ADMIN;
                break;
        }
        return uType;
    }

    setUserType(loginAs: any, userAccessId: any): void {
        // checking user selected user-type
        for (const userAccess of this.userAccesses) {
            this.name = userAccess.firstName + ' ' + userAccess.lastName;
            if (loginAs === AppSettings.INSTITUTE_ADMIN) {
                this.getUserInstitution(userAccess);
                this.getUserRights(userAccessId);
                this.showSchoolSelection = true;
                this.showStudentSelection = false;
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                break;
            }
            else if (loginAs === AppSettings.STAFF) {
                this.getUserRights(userAccessId, true);
                this.getStaffDetails();
                this.showSchoolSelection = true;
                this.showStudentSelection = false;
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                break;
            } else if (loginAs === AppSettings.PARENT) {
                this.getParentInfo();
                this.getUserRights(userAccessId, true);
                this.showSchoolSelection = false;
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                break;
            } else if (loginAs === AppSettings.ADMIN) {
                this.showSchoolSelection = true;
                this.getSchools();
                this.getUserRights(userAccessId);
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                break;
            } else if (loginAs === AppSettings.LSIT) {
                this.getUserRights(userAccessId);
                this.name = userAccess.firstName + ' ' + userAccess.lastName;
                break;
            }
        }
        this.getTheme();
    }

    getStaffDetails(): void {
        let academicSession = [];
        this.usersService.staffDetails().subscribe(res => {
            if (res.staffData) {
                this.showSchoolSelection = true;
                res.staffData.forEach(staff => {
                    if (staff.isSelected) {
                        this.currentSchoolId = staff.schoolId;
                        academicSession = staff.academicSessions;
                    }
                    // tslint:disable-next-line: max-line-length
                    this.schools.push({ value: staff.schoolId, label: staff.schoolName + ' (' + staff.name + ')', uId: staff.userAccessId , isDisabled: !(staff.isLicenseActive), isSelected: staff.isSelected});
                });
                this.prepareAcademicSession(academicSession);
            }
        });
    }

    dropDownChangeDetection(): void {
        this.testVariable += '-bar';
        this.testEmitter$.next(this.testVariable);
    }

    removeLocalStorageItems(): void {
        localStorage.removeItem('_li');
        localStorage.removeItem('_ts');
        localStorage.removeItem('_df');
    }

    getJwtData(): any {
        const jwt = localStorage.getItem('access_token');

        const jwtData = jwt.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData;
    }
}
