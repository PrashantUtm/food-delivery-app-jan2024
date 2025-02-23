import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usernameKey = 'username';
  private readonly tokenKey = 'token';

  constructor(private httpClient: HttpClient) { }

  public auth(username: string, password: string) : Observable<boolean> {
    return this.httpClient.post<{user: string, token: string}>(`${environment.baseUrl}/login`, { username, password })
      .pipe(
        map(result => {
          if(result && result.user && result.token) {
            localStorage.setItem(this.usernameKey, result.user);
            localStorage.setItem(this.tokenKey, result.token);
            return true;
          }
          return false;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => new Error(error.error.message)))
      );
  }

  public isAuthenticated() : boolean {
    return !!localStorage.getItem(this.usernameKey) && !!localStorage.getItem(this.tokenKey);
  }

  public getUsername(): string {
    return localStorage.getItem(this.usernameKey) as string;
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public logout() : void {
    localStorage.removeItem(this.usernameKey);
  }
}
