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
  public delivery: Delivery = {
    customer: {
      id: '',
      name: '',
      address: '',
      phoneNumber: ''
    },
    dateOrdered: new Date(),
    details: {
      items: [],
      totalPrice: 0
    },
    expectedDeliveryTime: new Date(),
    id: '',
    paymentMethod: PaymentMethod.NotApplicable,
    paymentStatus: PaymentStatus.Pending,
    restaurant: {
      address: '',
      id: '',
      name: '',
      phoneNumber: '',
    },
    status: DeliveryStatus.Pending,
  };
  public deliveryStatus = DeliveryStatus;
  public paymentStatus = PaymentStatus;
  public paymentMethod = PaymentMethod;

  constructor(private route: ActivatedRoute, private deliveryService: DeliveryService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.deliveryService.getDelivery(id).subscribe(delivery => {
      this.delivery = delivery;
    });

    console.log(DeliveryStatus[this.delivery.status]);
  }

}
