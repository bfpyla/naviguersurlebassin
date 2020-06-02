import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutomaticLoginGuard implements CanActivate  {
  constructor(private router: Router, private auth: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('user in here: ', user);
        if (!user) {
          console.log('Etat de connexion: Non Connecte');
          return true;
        } else {
          const role = user.role;
          console.log('Etat de connexion: Connecte');
          if (role === 'USERS') {
            this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-localisation');
          } else if (role === 'ADMIN') {
            this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-localisation-admin');
          }
          return false;
        }
      })
    );
  }
}
