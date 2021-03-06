import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginCredential } from './interfaces/types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _angularFireAuth: AngularFireAuth) {}
  login(credentials: LoginCredential):Promise<any> {
    return this._angularFireAuth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }
}
