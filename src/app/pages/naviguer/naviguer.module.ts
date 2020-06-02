import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerPageRoutingModule } from './naviguer-routing.module';

import { NaviguerPage } from './naviguer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerPageRoutingModule
  ],
  declarations: [NaviguerPage]
})
export class NaviguerPageModule {}
