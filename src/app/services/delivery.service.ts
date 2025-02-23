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
