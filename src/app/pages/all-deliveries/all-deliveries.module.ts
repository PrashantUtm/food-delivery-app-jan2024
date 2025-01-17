import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllDeliveriesPageRoutingModule } from './all-deliveries-routing.module';

import { AllDeliveriesPage } from './all-deliveries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllDeliveriesPageRoutingModule
  ],
  declarations: [AllDeliveriesPage]
})
export class AllDeliveriesPageModule {}
