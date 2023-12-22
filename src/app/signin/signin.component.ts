import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  userService = inject(UserService);

  constructor(private router: Router){}

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login(){
      const body = {
        email:this.signInForm.value.email ?? "",
        password:this.signInForm.value.password ?? ""
      }
      this.userService.login(body).subscribe(
      (response)=>{
        console.log(response)
        var currentDate = new Date()
        var year = currentDate.getFullYear()
        var month = currentDate.getMonth()+1
        var day = currentDate.getDate()+1
        document.cookie = `token=${response.token}; expires=${day}/${month}/${year}; path=/`
        this.router.navigate(['/main'])
      },
      (error)=>{
        console.log(error)
      })
  }  

}
