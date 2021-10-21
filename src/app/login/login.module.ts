import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {}
