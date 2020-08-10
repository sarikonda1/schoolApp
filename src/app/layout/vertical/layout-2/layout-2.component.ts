import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { AuthService } from 'app/auth/auth.service';

@Component({
    selector     : 'vertical-layout-2',
    templateUrl  : './layout-2.component.html',
    styleUrls    : ['./layout-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayout2Component implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;
    subscription: Subscription;
    isLoggedIn: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _authService: AuthService
    )
    {
        // Set the defaults
        this.navigation = navigation;

        this.subscription = this._authService.isLogin().subscribe(res => {
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
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
