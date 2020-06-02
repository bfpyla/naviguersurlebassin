import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MareesPageRoutingModule } from './marees-routing.module';

import { MareesPage } from './marees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MareesPageRoutingModule
  ],
  declarations: [MareesPage]
})
export class MareesPageModule {}
