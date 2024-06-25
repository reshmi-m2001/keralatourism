import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [LoginComponent, SignUpComponent]
})
export class AuthComponent {
    auth:boolean=true;
    togglePage(){
        this.auth = !this.auth;
    }



}
