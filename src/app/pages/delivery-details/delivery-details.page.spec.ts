import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryDetailsPage } from './delivery-details.page';

describe('DeliveryDetailsPage', () => {
  let component: DeliveryDetailsPage;
  let fixture: ComponentFixture<DeliveryDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
