import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminPage } from "./admin.page";

const routes: Routes = [
  {
    path: "",
    component: AdminPage,
  },
  {
    path: "homeadmin",
    loadChildren: () =>
      import("./homeadmin/homeadmin.module").then((m) => m.HomeadminPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
