import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosBalisagePageRoutingModule } from './infos-balisage-routing.module';

import { InfosBalisagePage } from './infos-balisage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosBalisagePageRoutingModule
  ],
  declarations: [InfosBalisagePage]
})
export class InfosBalisagePageModule {}
