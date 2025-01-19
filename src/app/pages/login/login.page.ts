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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login(): void {
    console.log(`${this.username} ${this.password}`);
    if (this.authService.auth(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.invalidInput = true;
    }
  }

  public onTextChanged(): void {
    this.invalidInput = false;
  }
}
