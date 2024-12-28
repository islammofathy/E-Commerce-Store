import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId = 'userId'

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    if (email && password) {
      this.http.post(apiUrl + "/login", { email, password }).subscribe(user => {
        localStorage.setItem(this.userId, JSON.stringify(user));
      })
      return true;
    }
    return false;
  }

  isAuthenticated() {
    return localStorage.getItem(this.userId) !== null;
  }

  getUser() {
    const user = localStorage.getItem(this.userId);
    console.log(user);
    if(user)
      return JSON.parse(user);
    else
      return null;
  }

  logout() {
    localStorage.removeItem(this.userId);
  }
}
