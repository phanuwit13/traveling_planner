import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultePageRoutingModule } from './resulte-routing.module';

import { ResultePage } from './resulte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultePageRoutingModule
  ],
  declarations: [ResultePage]
})
export class ResultePageModule {}
