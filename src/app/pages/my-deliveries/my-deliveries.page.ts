import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-deliveries',
  templateUrl: './my-deliveries.page.html',
  styleUrls: ['./my-deliveries.page.scss'],
  standalone: false
})
export class MyDeliveriesPage implements OnInit {
  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  public isOpen = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public presentPopover(e: Event): void {
    this.popover.event = e;
    this.isOpen = true;
  }

  public logout() : void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.popover.dismiss();
  }
}
