import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../interfaces/auth.interfaces';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.baseUrl}/auth/login`, data).pipe(
      map(res => {
        return res;
      }),
    );
  }

}
