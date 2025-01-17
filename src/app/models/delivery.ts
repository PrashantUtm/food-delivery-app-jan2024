import { DeliveryStatus } from "../enums/delivery-status";
import { PaymentMethod } from "../enums/payment-method";
import { PaymentStatus } from "../enums/payment-status";
import { Customer } from "./customer";
import { DeliveryDetails } from "./delivery-details";
import { Restaurant } from "./restaurant";

export interface Delivery {
    id: string;
    customer: Customer;
    restaurant: Restaurant;
    assignedDriverId?: string;
    dateOrdered: Date;
    expectedDeliveryTime: Date;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    notes?: string;
    details: DeliveryDetails;
    proofOfDelivery?: string;
    feedback?: string;
    status: DeliveryStatus
}
