import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultePage } from './resulte.page';

const routes: Routes = [
  {
    path: '',
    component: ResultePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultePageRoutingModule {}
