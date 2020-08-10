import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { BaseUrlConfig } from 'app/url.config';
import * as CryptoJS from 'crypto-js';
import { FuseConfigService } from '@fuse/services/config.service';
import {fuseConfig} from '../fuse-config/index';
import {CommonService} from '../service/common.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginFailed = false;
  returnUrl: string;
  get isLoggedIn(): Observable<boolean> {
    if (this.oauthService.getAccessToken() != null) {
      this.loggedIn.next(true);
    }
    else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  constructor(private route: ActivatedRoute,
    private router: Router, private oauthService: OAuthService,
              public snackBar: MatSnackBar,
              private _fuseConfigService: FuseConfigService,
              public commonService: CommonService
  ) {
    this.oauthService.setStorage(localStorage);
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(user: any): void {
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        user.email,
        user.password
      )
      .then(() => {
        this.loggedIn.next(true);
        this.router.navigateByUrl(this.returnUrl);
        this.loginFailed = false;
        // this.commonService.setDateFormatAndRedirect(this.returnUrl);

      })
      .catch(err => {
        if (err.error){
          this.snackBar.open(this.commonService.translateData(err.error.error_description), '', {
            duration: 3000,
            panelClass: ['my-snack-bar'],
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
        this.loginFailed = true;
      });
  }

  redirectIfAlreadyLoggedin(): void {
    if (this.isLoggedIn) {
      this.loggedIn.next(true);
      this.router.navigateByUrl(this.returnUrl);
    }

  }
  logout(): void {
    localStorage.clear();
    localStorage.setItem('logout-event', 'logout' + Math.random());
    if (fuseConfig){
      this._fuseConfigService.config = fuseConfig;
      const images = {
        logoImage: 'assets/images/logos/academy-front-logo.png' ,
        nameImage: 'assets/images/logos/academy-front-name-logo.png'
      };
      this._fuseConfigService.images = images;
    }
    this.oauthService.logOut();
    this.loggedIn.next(false);
    this.router.navigate(['/login']).then(() => {
      localStorage.clear();
      }
    );
  }


  get access_token(): string {
    return this.oauthService.getAccessToken();
  }

  get hasValidAccessToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get access_token_expiration(): number {
    return this.oauthService.getAccessTokenExpiration();
  }

  get givenName(): void {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) { return null; }
    return claims['name'];
  }

  get familyName(): void {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) { return null; }
    return claims['preferred_username'];
  }

  get email(): void {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) { return null; }
    return claims['email'];
  }

  checkUrlRights(url?: any): boolean {
    let status: any = false;
    let n: any;
    if (url === '/home' || url === '/error' || url === '/forbidden') {
      status = true;
    } else {
      let rights: any = localStorage.getItem('rights');

      if (rights == null) { status = true; return true; }

      rights = this.decrypt(rights);
      rights.forEach((element: any) => {
        if (element.url && n !== 0) {
          n = url.search(element.url);
        }
      });
      if (n === 0) {
        status = true;
      }
    }
    return status;
  }

  checkRight(name: any): boolean {
    let status: any = false;
    let rights: any = localStorage.getItem('rights');
    rights = this.decrypt(rights);
    rights.forEach((element: any) => {
      if (element.name === name) {
        return status = true;
      }
    });
    return status;
  }

  encrypt(data: any): void {
    // Encrypt
    let ciphertext: any = null;
    if (data == null) { return; }
    ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), BaseUrlConfig.BasePath, {
      keySize: 128 / 8,
      iv: CryptoJS.enc.Utf8.parse(BaseUrlConfig.BasePath),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    localStorage.setItem('rights', ciphertext);
  }

  decrypt(data: any): void {
    let decryptedData: any = [];
    // Decrypt 
    const bytes = CryptoJS.AES.decrypt(data, BaseUrlConfig.BasePath, {
      keySize: 128 / 8,
      iv: CryptoJS.enc.Utf8.parse(BaseUrlConfig.BasePath),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (decryptedData) {
      return decryptedData;
    }
  }

  isLogin(): Observable<any> {
    return this.loggedIn.asObservable();
  }
}
