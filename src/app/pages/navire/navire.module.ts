import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavirePageRoutingModule } from './navire-routing.module';

import { NavirePage } from './navire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavirePageRoutingModule
  ],
  declarations: [NavirePage]
})
export class NavirePageModule {}
