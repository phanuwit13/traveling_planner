import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatefarePageRoutingModule } from './updatefare-routing.module';

import { UpdatefarePage } from './updatefare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatefarePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [UpdatefarePage]
})
export class UpdatefarePageModule {}
