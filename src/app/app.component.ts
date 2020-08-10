import { Component, Inject, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationTelugu } from 'app/navigation/i18n/te';

import { UsersService } from './service/academic-service/api/user.service';
import { RightService } from './service/user-management/api/right.service';
import { Spinkit } from 'ng-http-loader';
import { FuseNavigation } from '../@fuse/types';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AfLoaderComponent } from './shared/af-loader/af-loader.component';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: any;
    showLoader = true;
    public spinkit = Spinkit;
    public   myAwesomeComponent = AfLoaderComponent;
    excludedUrlPatterns = [ // Register Url for Typeahead or AutoComplete
        '^(.*StudentDB\\?Name).*$',
        '^(.*LeaveRequest\\/active-student-names\\?Name).*$',
        '^(.*StudentGroup\\/student-details\\?Name).*$',
        '^(.*StudentGroup\\/staff-details\\?Name).*$',
        '^(.*StudentAttendance\\/mark-attendance).*$',
        '^(.*StudentAttendance\\/student-attendance).*$',
        '^(.*TestScore\\/testScore).*$',
        '^(.*accounts.launchship.com\\/connect\\/token).*$',
        '^(.*accounts.launchship.com\\/.well-known\\/openid-configuration).*$',
        '^(.*accounts.launchship.com\\/.well-known\\/openid-configuration\\/jwks).*$',
        // '^(.*filtered-students\\?StudentNames).*$',
        '^(.*search-staff\\?Name).*$',
        '^(.*ClassTimetable\\/class-timetable-staff-course).*$',
        '^(.*StudentAssessmentGrade\\/class-assessment-grades).*$',
        '^(.*StudentAssessmentGrade\\/student-assessments).*$',
        '^(.*StudentAssessmentGrade\\/students-assessment-grades).*$',
        '^(.*StudentReports\\/student-custom-details).*$',
        '^(.*Dashboard).*$',
        '^(.*Widgets).*$',
        '^(.*typeahead).*$',
        '^(.*StudentDB\\/student-names-typeahead).*$',
        '^(.*StudentDB\\/current-student-Names).*$',
        '^(.*StudentAdmission\\/get-by-bulkImport-data).*$',
        '^(.*assets).*$',
        '^(.*update-payment).*$',
        '^(.*route-trip-progress-by-studentId).*$'
        // '^(.*<Your Pattern Here>).*$',
    ];

    // Private
    private _unsubscribeAll: Subject<any>;


    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(

        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private usersService: UsersService,
        private rightService: RightService,
        private router: Router,
        private authService: AuthService,
        private titleService: Title,
        private activatedRoute: ActivatedRoute
    ) {

        // tslint:disable-next-line:typedef
        window.addEventListener('storage', function(event){
            if (event.key === 'logout-event') {
               window.location.reload();
            }
        });

        router.events.forEach((event: any) => {

            if (event instanceof NavigationStart) {
                switch (event.url) {
                    case '/home':
                    case '/':
                        this.showLoader = false;
                        break;

                    default:
                        this.showLoader = true;
                }
            }


        });

        // Configure the layout
        if (!this.authService.hasValidAccessToken) {
            this._fuseConfigService.config = {
                layout: {
                    navbar: {
                        hidden: true
                    },
                    toolbar: {
                        hidden: true
                    },
                    footer: {
                        hidden: true
                    },
                    sidepanel: {
                        hidden: true
                    }
                }
            };
        }

        this.navigation = navigation;
        this._fuseNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('main');

        // Add languages
        this._translateService.addLangs(['en', 'te']);

        // Set the default language
        this._translateService.setDefaultLang('en');

        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationTelugu);

        // Use a language
        this._translateService.use('en');

        // Get default navigation
        //   this.navigation = navigation;

        // Register the navigation to the service




        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         **/

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         setTimeout(() => {
            this._translateService.setDefaultLang('en');
            this._translateService.setDefaultLang('tr');
         });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }

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

        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
                // Boxed
                if (this.fuseConfig.layout.width === 'boxed') {
                    this.document.body.classList.add('boxed');
                }
                else {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                const data = this.document.body.classList;
                for (let i = 0; i < data.length; i++) {
                    const className = data[i];
                    if (className.startsWith('font-') || className.startsWith('theme-')) {
                        this.document.body.classList.remove(className);
                        i--;
                    }
                }
                this.document.body.classList.add(this.fuseConfig.colorTheme);
                this.document.body.classList.add('font-' + this.fuseConfig.font);
            });
            this.setPageTitle();
    }
    setPageTitle(): void {
        const appTitle = this.titleService.getTitle();
        this.router
          .events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
              let child = this.activatedRoute.firstChild;
              while (child.firstChild) {
                child = child.firstChild;
              }
              if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
              }
               return appTitle;
            })
          ).subscribe((ttl: string) => {
            this.titleService.setTitle(ttl + ' - Academy Front');
          });
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



}
