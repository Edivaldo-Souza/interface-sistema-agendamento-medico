import { Injectable } from "@angular/core";
import { Router} from "@angular/router";

@Injectable(
    {
        providedIn:"root"
})
export class AuthGuard{
    constructor(private router: Router){}

    verifyToken(): boolean{
        const cookieName = "token"
        const cookies = document.cookie.split(";")

        for(const cookie of cookies){
            const [name,value] = cookie.split("=").map(c => c.trim())

            if(name === cookieName){
                return !!value
            }
        }
        return false
    }

    canActivate(
    ): boolean{
        const isAuthenticated = this.verifyToken();
        if(isAuthenticated){
            return true
        }
        else{
            this.router.navigate(['/signin'])
            return false
        }
    }
}