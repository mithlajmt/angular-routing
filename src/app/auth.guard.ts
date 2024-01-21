import { inject } from "@angular/core"
import { AuthService } from "./services/auth.service"
import { Router } from "@angular/router"

export const canActivate = ()=>{
    const authService:AuthService = inject(AuthService)
    const router:Router = inject(Router)

    if(authService.IsAuthenticated()){
        return true
    }
    else{
        router.navigate(['/login'])
        return false;
    }


}

export const canActivateChild = ()=>{
    //we could name this anthing 
    //we write whatever the logic you need to do here 

    canActivate() //since the logic is same

}