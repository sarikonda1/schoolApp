// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';
// import { tokenKey } from '@angular/core/src/view';


export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://accounts.launchship.com',

  // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/index.html',
  redirectUri: window.location.origin + '/index.html',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',


  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'deaf69a539d240da9486c92663e704da',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid api email offline_access',

  /**
 * Defines whether to request a access token during
 * implicit flow.
 */
  requestAccessToken: true,

  /**
 * Defines whether additional debug information should
 * be shown at the console.
 */
  showDebugInformation: false,

  /**
   * Timeout for silent refresh.
   * @internal
   * depreacted b/c of typo, see silentRefreshTimeout
   */
  // siletRefreshTimeout: 1000 * 20,
  silentRefreshTimeout: 5000,

  // sessionChecksEnabled: true,

  /**
   * Defines when the token_timeout event should be raised.
   * If you set this to the default value 0.75, the event
   * is triggered after 75% of the token's life time.
   */
  timeoutFactor: 0.75,

  
  oidc: false
};
