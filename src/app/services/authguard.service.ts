import { Inject, Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})

export class AuthGuardService implements CanActivate{
    auth:AuthService=inject(AuthService);
    router:Router=inject(Router)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         const userState =  this.auth.IsAuthenticated()
        if (userState){
            return true
        }
        else{
            this.router.navigate(['/login'])
            return false
        }
        }
}