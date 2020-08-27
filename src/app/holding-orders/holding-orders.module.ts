import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoldingOrdersPageRoutingModule } from './holding-orders-routing.module';

import { HoldingOrdersPage } from './holding-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoldingOrdersPageRoutingModule
  ],
  declarations: [HoldingOrdersPage]
})
export class HoldingOrdersPageModule {}
