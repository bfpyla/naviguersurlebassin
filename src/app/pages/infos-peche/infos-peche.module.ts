import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosPechePageRoutingModule } from './infos-peche-routing.module';

import { InfosPechePage } from './infos-peche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosPechePageRoutingModule
  ],
  declarations: [InfosPechePage]
})
export class InfosPechePageModule {}
