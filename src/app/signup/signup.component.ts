import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../signin/signin.component.css']
})
export class SignupComponent {
    userService = inject(UserService)

    signUpForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      vocation: new FormControl('')
    })

    constructor(){

    }

    signUp(){
      if(this.signUpForm.value.password === this.signUpForm.value.confirmPassword)
      {
        const body ={
          name: this.signUpForm.value.name ?? '',
          email: this.signUpForm.value.email ?? '',
          cpf:this.signUpForm.value.cpf ?? '',
          password:this.signUpForm.value.password ?? '',
          vocation:this.signUpForm.value.vocation ?? ''
        }

        this.userService.submitSubscrition(body).subscribe(
          (response)=>{
            console.log(response)
            
          },
          (error)=>{
            console.log("Erro: ",error);
          }
        )
      }
      else{
        alert("As senhas não estão iguais")
      }
    }
}
