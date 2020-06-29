import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningPage } from './planning.page';

const routes: Routes = [
  {
    path: '',
    component: PlanningPage
  },
  {
    path: 'resulte',
    loadChildren: () => import('./resulte/resulte.module').then( m => m.ResultePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningPageRoutingModule {}
