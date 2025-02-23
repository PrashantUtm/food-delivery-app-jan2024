import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public invalidInput = false;
  public errorMessage = 'Enter a valid username and password';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login(): void {
    console.log(`${this.username} ${this.password}`);
    if (this.username && this.username.trim() !== '' && this.password) {
      this.errorMessage = 'Enter a valid username and password';
      this.invalidInput = false;
      this.authService.auth(this.username, this.password).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/']);
          } else {
            this.invalidInput = true;
          }
        },
        error: (error: Error) => {
          this.invalidInput = true;
          this.errorMessage = error.message;
        }
    });
    } else {
      this.invalidInput = true;
    }
  }

  public onTextChanged(): void {
    this.invalidInput = false;
  }
}
