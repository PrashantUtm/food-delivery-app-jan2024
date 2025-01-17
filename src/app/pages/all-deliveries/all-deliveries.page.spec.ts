import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllDeliveriesPage } from './all-deliveries.page';

describe('AllDeliveriesPage', () => {
  let component: AllDeliveriesPage;
  let fixture: ComponentFixture<AllDeliveriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliveriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
