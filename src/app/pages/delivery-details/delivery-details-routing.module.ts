import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryDetailsPage } from './delivery-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDetailsPageRoutingModule {}
