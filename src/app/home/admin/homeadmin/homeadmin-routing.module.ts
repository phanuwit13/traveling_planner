import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeadminPage } from "./homeadmin.page";

const routes: Routes = [
  {
    path: "",
    component: HomeadminPage,
  },
  {
    path: "addplace",
    loadChildren: () =>
      import("./addplace/addplace.module").then((m) => m.AddplacePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeadminPageRoutingModule {}
