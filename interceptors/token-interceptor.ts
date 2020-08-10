import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/internal/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/finally';
@Injectable()


export class TokenInterceptor implements HttpInterceptor {
    constructor(private oauthService: OAuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', `Bearer ${this.oauthService.getAccessToken()}`);
        
        const cloneReq = request.clone({ headers });
        return next.handle(cloneReq);
    }
}
