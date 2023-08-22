import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {UserRequest} from "../model/user-request.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router,
    private service : AuthService
  ) {}

  ngOnInit() : void {
    this.registerForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  form(property : string) : FormGroup {
    return this.registerForm.get(property) as FormGroup
  }

  register(data : UserRequest) {
    this.service.register(data).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Register successfull',
        showConfirmButton: false,
        timer: 1500
      })
      this.registerForm.reset()
      this.router.navigate([''])
    }, err => {
      alert('Something went wrong')
    })
  }

}
