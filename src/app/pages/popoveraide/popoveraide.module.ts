import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoveraidePageRoutingModule } from './popoveraide-routing.module';

import { PopoveraidePage } from './popoveraide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoveraidePageRoutingModule
  ],
  declarations: [PopoveraidePage]
})
export class PopoveraidePageModule {}
