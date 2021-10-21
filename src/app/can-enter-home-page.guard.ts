import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CanEnterHomePageGuard implements CanActivate {
  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._angularFireAuth.authState.pipe(
      map((auth) => {
        if (!auth) {
          this._router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
