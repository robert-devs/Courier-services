import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

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
    if (this.authService.loginUser.name) {
      return true;
    } else {
      return false;
    }
  }
}
