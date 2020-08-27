import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShippingOrdersPage } from "./shipping-orders.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { ShippingOrdersPageRoutingModule } from "./shipping-orders-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShippingOrdersPageRoutingModule,
  ],
  declarations: [ShippingOrdersPage],
})
export class ShippingOrdersPageModule {}
