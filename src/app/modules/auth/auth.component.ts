import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginRequest } from './interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup = new FormGroup({});
  unauthorized: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    if (this.authForm.valid) {
      const data: LoginRequest = this.authForm.value;
      this._authService.login(data).subscribe({
        next: ({ token }) => {
          localStorage.setItem('token', token);
          this.router.navigateByUrl('products/all');
        },
        error: (error) => {
          if (error.status === 401) {
            this.unauthorized = true;
            setInterval(() => {
              this.unauthorized = false;
            }, 3000);
          }
        }
      });
    }
  }

}
