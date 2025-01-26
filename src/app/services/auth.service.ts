import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usernameKey = 'username';

  constructor() { }

  public auth(username: string, password: string) : boolean {
    if (username && username.trim() !== '' && password) {
      localStorage.setItem(this.usernameKey, username);
      return true;
    }
    return false;
  }

  public isAuthenticated() : boolean {
    return !!localStorage.getItem(this.usernameKey);
  }

  public logout() : void {
    localStorage.removeItem(this.usernameKey);
  }
}
