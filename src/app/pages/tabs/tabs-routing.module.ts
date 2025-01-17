import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'all-deliveries',
        loadChildren: () => import('../all-deliveries/all-deliveries.module').then( m => m.AllDeliveriesPageModule)
      },
      {
        path: 'my-deliveries',
        loadChildren: () => import('../my-deliveries/my-deliveries.module').then( m => m.MyDeliveriesPageModule)
      },
      {
        path: '',
        redirectTo: 'all-deliveries',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
