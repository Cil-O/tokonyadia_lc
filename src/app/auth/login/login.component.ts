import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../model/user-request.model";
import {AuthService} from "../auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private service : AuthService
  ) {}

  loginForm : FormGroup = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  onLogin(data: UserRequest) {
    console.log("Login Request : ", data)
    this.service.login(data).subscribe({
      next : (res) => {
        console.log("Response : ", res.data)
        let token = res.data.token
        if (token) {
          sessionStorage.setItem('token', token)
          Swal.fire({
            icon: 'success',
            title: 'Successfully login!',
            showConfirmButton: false,
            timer: 1500
          })
          this.loginForm.reset()
          this.router.navigateByUrl('/pages')
        }
      },
      error : (err) => {
        console.log("Error : ", err)
        Swal.fire('Invalid username / password')
      }
    })
  }

}
