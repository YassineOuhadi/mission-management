import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router,
    private tostr: ToastrService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isloggedin()) {
      // Check if the token is valid using the backend endpoint
      return this.service.validateToken().toPromise()
        .then((response: any) => {
          console.log("Inside validate token :", response);
          if (response.isValid) {
            if (route.url.length > 0) {
              let menu = route.url[0].path;
              const userRole = this.service.getUserTypeFromCookie();

              if (route.url[0].path === 'professor' && userRole === 'PROFESSOR') {
                return true;
              } else if (route.url[0].path === 'supervisor' && userRole === 'SUPERVISOR') {
                return true;
              } else if (route.url[0].path === 'registrar' && userRole === 'REGISTRAR') {
                return true;
              } else {
                this.router.navigate(['login']);
                this.tostr.warning('You dont have access.');
                // this.router.navigate(['login']);
                return false;
              }

            } else {
              return true;
            }
          } else {
            this.router.navigate(['login']);
            return false;
          }
        })
        .catch(() => {
          this.router.navigate(['login']);
          return false;
        });
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
