import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    next: any;
    constructor(private authService: AuthService, private router: Router, private location: Location) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.next = next;  

        return this.authService.isLoggedIn.pipe(
            take(1),
            map((isLoggedIn: boolean) => {
                if (!this.authService.hasValidAccessToken)
                {
                    isLoggedIn = false;
                }

                if (!isLoggedIn) {
                    this.authService.logout();
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
                const right = localStorage.getItem('rights');
                if (this.authService.hasValidAccessToken && !right){
                    const currentPath = this.location.path();
                    const status = this.authService.checkUrlRights(currentPath);

                    if (!status) {
                        this.router.navigate(['/forbidden']);
                    }

                }

                return true;
            })
        );
    }


}
