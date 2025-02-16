import { Injectable } from '@angular/core';
import { Delivery } from '../models/delivery';
import { PaymentMethod } from '../enums/payment-method';
import { PaymentStatus } from '../enums/payment-status';
import { DeliveryStatus } from '../enums/delivery-status';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
        name: 'Le Sapin d\'Or',
        phoneNumber: '+230 5 6667777',
        photoUrl: 'https://lesapindor.fr/wp-content/uploads/2021/06/cropped-LOGO-POUR-MAILS-.png'
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
        items: ['Wrap', 'Pepsi'],
        totalPrice: 150
      },
      expectedDeliveryTime: new Date('2025-01-11T11:15'),
      id: '2',
      notes: 'Deliver to first floor of building.',
      paymentMethod: PaymentMethod.NotApplicable,
      paymentStatus: PaymentStatus.Pending,
      restaurant: {
        address: 'street, city, country',
        id: '1',
        name: 'Pizza Hut',
        phoneNumber: '+230 5 6667777',
        photoUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/laramiewy/pizzahut_8312b8d7-5056-a36f-23a9691d1d55a01d.png'
      },
      status: DeliveryStatus.Pending,
    },
  ];

  constructor(private httpClient: HttpClient) { }

  public getAllDeliveries() : Observable<Delivery[]> {
    return this.httpClient.get<Delivery[]>(`${environment.baseUrl}/deliveries`);
  }

  public getDelivery(id: string) : Observable<Delivery> {
    return this.httpClient.get<Delivery>(`${environment.baseUrl}/deliveries/${id}`);
  }

  public updateDelivery(delivery: Delivery): Observable<{delivery:Delivery, message: string}> {
    return this.httpClient.put<{delivery:Delivery, message: string}>(`${environment.baseUrl}/deliveries/${delivery.id}`, delivery);
  }
}
