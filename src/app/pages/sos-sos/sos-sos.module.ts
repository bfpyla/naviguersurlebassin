import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosSosPageRoutingModule } from './sos-sos-routing.module';

import { SosSosPage } from './sos-sos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosSosPageRoutingModule
  ],
  declarations: [SosSosPage]
})
export class SosSosPageModule {}
