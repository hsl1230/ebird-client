import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: "tabs",
    canActivate: [AuthGuard],
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "shipping-orders",
        loadChildren: () =>
          import("../shipping-orders/shipping-orders.module").then(
            (m) => m.ShippingOrdersPageModule
          ),
      },
      {
        path: "post",
        loadChildren: () =>
          import("../post/post.module").then((m) => m.PostPageModule),
      },
      {
        path: "holding-orders",
        loadChildren: () =>
          import("../holding-orders/holding-orders.module").then(
            (m) => m.HoldingOrdersPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
