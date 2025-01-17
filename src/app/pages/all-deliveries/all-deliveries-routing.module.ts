import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllDeliveriesPage } from './all-deliveries.page';

const routes: Routes = [
  {
    path: '',
    component: AllDeliveriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllDeliveriesPageRoutingModule {}
