import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerGpsPageRoutingModule } from './naviguer-gps-routing.module';

import { NaviguerGpsPage } from './naviguer-gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerGpsPageRoutingModule
  ],
  declarations: [NaviguerGpsPage]
})
export class NaviguerGpsPageModule {}
