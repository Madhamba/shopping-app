import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginRequest } from './interfaces/auth.interfaces';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['mor_2314', Validators.required],
      password: ['83r5^_', Validators.required],
    });
  }

  handleSubmit(): void {
    if (this.authForm.valid) {
      const data: LoginRequest = this.authForm.value;
      this.authService.login(data).subscribe({
        next: ({ token }) => {
          localStorage.setItem('token', token);
        },
        error: (error) => {
          if (error.status === 401) {
            console.log('Unauthorized');
          }
        }
      });
    }
  }

}
