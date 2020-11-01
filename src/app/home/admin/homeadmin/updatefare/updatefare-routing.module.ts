import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatefarePage } from './updatefare.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatefarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatefarePageRoutingModule {}
