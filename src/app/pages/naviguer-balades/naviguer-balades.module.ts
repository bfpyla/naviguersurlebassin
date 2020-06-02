import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerBaladesPageRoutingModule } from './naviguer-balades-routing.module';

import { NaviguerBaladesPage } from './naviguer-balades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerBaladesPageRoutingModule
  ],
  declarations: [NaviguerBaladesPage]
})
export class NaviguerBaladesPageModule {}
