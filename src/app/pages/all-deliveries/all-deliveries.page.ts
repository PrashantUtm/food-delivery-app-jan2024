import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.page.html',
  styleUrls: ['./all-deliveries.page.scss'],
  standalone: false
})
export class AllDeliveriesPage implements OnInit {
  public deliveries: Delivery[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getAllDeliveries().subscribe(deliveries => this.deliveries = deliveries);
  }

}
