import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShippingOrdersPage } from "./shipping-orders.page";

const routes: Routes = [
  {
    path: "",
    component: ShippingOrdersPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingOrdersPageRoutingModule {}
