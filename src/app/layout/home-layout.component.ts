import {Component, OnInit} from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import {FuseConfigService} from '../../@fuse/services/config.service';
import {FuseSidebarService} from '../../@fuse/components/sidebar/sidebar.service';
import {TranslateService} from '@ngx-translate/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {AuthService} from '../auth/auth.service';
import {AcademicSessionService, UIThemeService, UsersService} from '../service/academic-service/api';
import {RightService} from '../service/user-management/api/right.service';
import {FuseNavigationService} from '../../@fuse/components/navigation/navigation.service';
import {FuseTranslationLoaderService} from '../../@fuse/services/translation-loader.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CommonService} from '../service/common.service';
import {AcademicSessionSchoolService} from '../service/academic-service/api/academic-session-school.service';
import {Router} from '@angular/router';
import {UserParentService} from '../service/parent/user-parent.service';
import {StoreService} from '../service/file-management/store.service';

@Component({
  selector: 'app-home-layout',
  template: `
  <router-outlet *ngIf="!displayForbidden"></router-outlet><app-error403 *ngIf="displayForbidden"></app-error403>`,
  // styles: [':host {display: flex;flex: 0 0 auto; width:100%;}']
})
export class HomeLayoutComponent implements OnInit {
  displayForbidden = false;
  constructor(

      private oauthService: OAuthService,
      private authService: AuthService,
      private usersService: UsersService,

  ) {

  }
  ngOnInit(): void {

    // Subscribe to the config changes
    if (this.authService.hasValidAccessToken) {

      this.usersService.userCheckUserAccessGet().subscribe(res => {
        if (res !== undefined && res.length === 0) {
          this.displayForbidden = true;
          return;
        }
      });
    }
  }
}

