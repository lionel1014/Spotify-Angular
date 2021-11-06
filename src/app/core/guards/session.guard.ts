import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieServicio:CookieService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.checkCookieSession(); //true=todos pasan, false = nadie pasa
      
  }
  
  checkCookieSession() : boolean {
    try {
      
      const token:boolean = this.cookieServicio.check('token');
      
      if (!token) {
        
        this.router.navigate(['/','auth']);
        console.log("No estas autentificado 💔")
        return false
      }

      // console.log("Si Chequeo de CookieSesion: ",token);
      return token;

    } catch (e) {

      console.log("Fallo en la comprobacion de sesion",e);
      return false;

    }
  }
}
