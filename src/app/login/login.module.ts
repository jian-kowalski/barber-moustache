import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class LoginModule { }
