import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public isModalOpen = false;

  public completeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.completeForm = this.formBuilder.group({
      paymentMethod: [this.delivery.paymentMethod],
      paymentStatus: [this.delivery.paymentStatus],
      feedback: [''],
      proofOfDelivery: ['']
    })
  }

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
        this.setModal(true);
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

  public completeDelivery(): void {
    console.log(this.completeForm.value);

    this.delivery.status = DeliveryStatus.Completed;
    this.delivery.paymentMethod = this.completeForm.value.paymentMethod;
    this.delivery.paymentStatus = this.completeForm.value.paymentStatus;
    this.delivery.feedback = this.completeForm.value.feedback;

    this.updateDelivery();

    this.setModal(false);
  }

  public setModal(state: boolean): void {
    this.isModalOpen = state;
  }

  private updateDelivery(): void {
    this.deliveryService.updateDelivery(this.delivery).subscribe(result => 
      this.delivery = result.delivery
    );
  }
}
