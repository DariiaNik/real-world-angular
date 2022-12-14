import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/shared/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router, private authorizationService: AuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authorizationService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth', 'login']);
    return false;
  }
}
