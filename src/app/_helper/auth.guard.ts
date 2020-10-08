import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../_service/authentication.service';

@Injectable(
  {providedIn: 'root'}
)
export class AuthGuard implements CanActivate{

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      const currentUser = this.authenticationService.currentUserValue;
      if(currentUser) {
        return true;
      }

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;

  }

}
