import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routing';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ],
  declarations: [AuthComponent],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
