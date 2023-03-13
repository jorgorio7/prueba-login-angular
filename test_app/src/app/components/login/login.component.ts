import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm :FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      rememberUser: new FormControl(false)
    });
  }

  login(){
    //If the form is not valid, it will notify the user by marking the invalid fields
    if(!this.loginForm.valid){
      Object.values(this.loginForm.controls).forEach(control =>{ control.markAsTouched() });
    } else {
      console.log('OK. Datos de formulario introducidos: ', this.loginForm.value);
    }
  }

}