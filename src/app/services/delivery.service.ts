import { Injectable } from '@angular/core';
import { Delivery } from '../models/delivery';
import { PaymentMethod } from '../enums/payment-method';
import { PaymentStatus } from '../enums/payment-status';
import { DeliveryStatus } from '../enums/delivery-status';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private deliveries: Delivery[] = [
    {
      customer: {
        id: '1',
        name: 'John Doe',
        address: 'street, city, country',
        phoneNumber: '+230 57776666'
      },
      dateOrdered: new Date('2025-01-10'),
      details: {
        items: ['Burger'],
        totalPrice: 250
      },
      expectedDeliveryTime: new Date('2025-01-11T11:15'),
      id: '1',
      paymentMethod: PaymentMethod.NotApplicable,
      paymentStatus: PaymentStatus.Pending,
      restaurant: {
        address: 'street, city, country',
        id: '1',
        name: 'My restaurant',
        phoneNumber: '+230 5 6667777',
      },
      status: DeliveryStatus.Pending,
    },
    {
      customer: {
        id: '2',
        name: 'Mary Ann',
        address: 'street, city, country',
        phoneNumber: '+230 57776666'
      },
      dateOrdered: new Date('2025-01-10'),
      details: {
        items: ['Wrap'],
        totalPrice: 150
      },
      expectedDeliveryTime: new Date('2025-01-11T11:15'),
      id: '2',
      paymentMethod: PaymentMethod.NotApplicable,
      paymentStatus: PaymentStatus.Pending,
      restaurant: {
        address: 'street, city, country',
        id: '1',
        name: 'My restaurant',
        phoneNumber: '+230 5 6667777',
      },
      status: DeliveryStatus.Pending,
    },
  ];

  constructor() { }

  public getAllDeliveries() : Delivery[] {
    return this.deliveries;
  }
}
