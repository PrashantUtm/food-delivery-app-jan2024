import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryStatus } from 'src/app/enums/delivery-status';
import { PaymentMethod } from 'src/app/enums/payment-method';
import { PaymentStatus } from 'src/app/enums/payment-status';
import { Delivery } from 'src/app/models/delivery';
import { AuthService } from 'src/app/services/auth.service';
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
  public isNextButtonEnabled = true;
  public nextButtonLabel = 'Accept';

  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.deliveryService.getDelivery(id).subscribe(delivery => {
      this.delivery = delivery;
      this.setButtonState();
    });

    console.log(DeliveryStatus[this.delivery.status]);
  }

  public onNextButtonClicked(): void {
    const status = Number(this.delivery.status);
    switch(status) {
      case DeliveryStatus.Pending:
        this.delivery.status = DeliveryStatus.InProgress;
        this.delivery.assignedDriverId = this.authService.getUsername();
        this.updateDelivery();
        break;
      case DeliveryStatus.InProgress:
        break;
    }
    this.setButtonState();
  }

  public setButtonState() : void {
    const status = Number(this.delivery.status);
    switch(status) {
      case DeliveryStatus.Pending:
        this.isNextButtonEnabled = true;
        this.nextButtonLabel = 'Accept';
        break;
      case DeliveryStatus.InProgress:
        this.isNextButtonEnabled = true;
        this.nextButtonLabel = 'Complete';
        break;
      case DeliveryStatus.Completed:
        this.isNextButtonEnabled = false;
        this.nextButtonLabel = 'Completed';
        break;
    }
  }

  private updateDelivery(): void {
    this.deliveryService.updateDelivery(this.delivery).subscribe(result => 
      this.delivery = result.delivery
    );
  }
}
