import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1/auth';
  public authStatus = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.authStatus.asObservable();

  constructor(private http: HttpClient) {}

  signup(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userDetails)
  }

  login(loginDetails: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, loginDetails)
  }
}




