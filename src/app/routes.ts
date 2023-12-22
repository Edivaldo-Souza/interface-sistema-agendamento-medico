import { Routes } from "@angular/router"
import { SigninComponent } from "./signin/signin.component"
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { inject } from "@angular/core";
import { AuthGuard } from "./auth.guard";


const routeConfig: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"Home"
    },
    {
        path:"main",
        component:MainComponent,
        title:"Main Page",
        canActivate:[()=>inject(AuthGuard).canActivate()]
    },
    {
        path:"signin",
        component:SigninComponent,
        title:"Sign-in"
    },
    {
        path:"signup",
        component:SignupComponent,
        title:"Sign-up"
    }
]
export default routeConfig;