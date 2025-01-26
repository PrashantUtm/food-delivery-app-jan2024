import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryStatus } from 'src/app/enums/delivery-status';
import { PaymentMethod } from 'src/app/enums/payment-method';
import { PaymentStatus } from 'src/app/enums/payment-status';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.page.html',
  styleUrls: ['./delivery-details.page.scss'],
  standalone: false
})
export class DeliveryDetailsPage implements OnInit {
  public delivery!: Delivery;
  public deliveryStatus = DeliveryStatus;
  public paymentStatus = PaymentStatus;
  public paymentMethod = PaymentMethod;

  constructor(private route: ActivatedRoute, private deliveryService: DeliveryService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.delivery = this.deliveryService.getDelivery(id);

    console.log(DeliveryStatus[this.delivery.status]);
  }

}
