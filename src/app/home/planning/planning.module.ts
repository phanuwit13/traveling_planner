import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PlanningPageRoutingModule } from "./planning-routing.module";

import { PlanningPage } from "./planning.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanningPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PlanningPage],
})
export class PlanningPageModule {}
