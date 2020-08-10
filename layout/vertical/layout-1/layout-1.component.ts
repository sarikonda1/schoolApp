import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { CommonService } from 'app/service/common.service';
import { Router, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
@Component({
    selector: 'vertical-layout-1',
    templateUrl: './layout-1.component.html',
    styleUrls: ['./layout-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;
    isOverlay = 'hide';
    subscription: Subscription;
    isLoggedIn: any;
    currentUrl: any;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private commonService: CommonService,
        private _router: Router,
        private authService: AuthService
    ) {
        // Set the defaults
        this.navigation = navigation;
        this.subscription = this.commonService.getOverlay().subscribe(res => {

            if (res.overLay) {
                this.isOverlay = res.overLay;
            }
        });

        this._router.events
            .filter(e => e instanceof RoutesRecognized)
            .pairwise()
            .subscribe((event: any[]) => {
                let previousUrl = event[0].urlAfterRedirects;
                let currentUrl = event[1].urlAfterRedirects;
                previousUrl = previousUrl.includes('#') ? previousUrl.substring(0, previousUrl.indexOf('#')) : previousUrl;
                currentUrl = currentUrl.includes('#') ? currentUrl.substring(0, currentUrl.indexOf('#')) : currentUrl;
                if (previousUrl.localeCompare(currentUrl) !== 0){
                    this.isOverlay = 'hide'; 
                }
            });

        this.subscription = this.authService.isLogin().subscribe(res => {
            this.isLoggedIn = res;
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
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                if (localStorage.getItem('_ts')) {
                    config = JSON.parse(localStorage.getItem('_ts'));
                }
                this.fuseConfig = config;
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
}
