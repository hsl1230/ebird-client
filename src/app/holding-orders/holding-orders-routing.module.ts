import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoldingOrdersPage } from './holding-orders.page';

const routes: Routes = [
  {
    path: '',
    component: HoldingOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoldingOrdersPageRoutingModule {}
