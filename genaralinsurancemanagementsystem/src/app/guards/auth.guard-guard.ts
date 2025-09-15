import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class authGuardGuard implements CanActivate{

  constructor(
    private authService: AuthService,
     private router: Router
  ){}

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated() && (this.authService.isAdmin() || this.authService.isUser())) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
  
};
