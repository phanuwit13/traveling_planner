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
  {
    path: 'addcategory',
    loadChildren: () => import('./addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeadminPageRoutingModule {}
