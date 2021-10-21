import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredential } from '../interfaces/types';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.loginFormGroup = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    const loginCredentials: LoginCredential = this.loginFormGroup.value;
    this._loginService
      .login(loginCredentials)
      .then((authData) => {
        this._router.navigate(['/home']);
        console.log(authData);
      })
      .catch((authError) => {
        console.log('Auth Error=>', authError);
        alert('Enter Valid Id and Password');
      });
  }
}
