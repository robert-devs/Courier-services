import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class GuardsGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  canActivate() {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    } else {
      // this.authService.redirectUrl= url
      this.router.navigate(['auth/Login']);
      return false;
    }
  }
}
