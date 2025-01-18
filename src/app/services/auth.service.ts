import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public auth(username: string, password: string) : boolean {
    if (username && username.trim() !== '' && password) {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  public isAuthenticated() : boolean {
    return !!localStorage.getItem('username');
  }
}
