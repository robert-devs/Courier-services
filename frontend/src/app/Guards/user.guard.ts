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
export class UserGuard implements CanActivate {
  constructor(
    private authservice: AuthServiceService,
    private router: Router
  ) {}
  canActivate() {
    if (localStorage.getItem('role') === 'user') {
      return true;
    } else {
      this.router.navigate(['auth/Login']);
      return false;
    }
  }
}
