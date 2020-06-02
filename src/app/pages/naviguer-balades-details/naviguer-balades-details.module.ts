import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerBaladesDetailsPageRoutingModule } from './naviguer-balades-details-routing.module';

import { NaviguerBaladesDetailsPage } from './naviguer-balades-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerBaladesDetailsPageRoutingModule
  ],
  declarations: [NaviguerBaladesDetailsPage]
})
export class NaviguerBaladesDetailsPageModule {}
